import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { GoogleGenAI } from '@google/genai';

const app = express();
const upload = multer({ limits: { fileSize: 15 * 1024 * 1024 } }); // Maksimal 15 MB

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Model default sesuai permintaan: gemini-3.5-flash
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash';

// Daftar fallback model jika terjadi kuota / rate limit / model tidak tersedia
const FALLBACK_MODELS = [
  GEMINI_MODEL,
  'gemini-3.5-flash',
  'gemini-3.5-flash-lite',
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-flash-latest',
];
const UNIQUE_MODELS = [...new Set(FALLBACK_MODELS)];

const SYSTEM_INSTRUCTION = `Kamu adalah "Chatbot AI", asisten pintar serbaguna yang sekaligus menjadi asisten virtual resmi untuk portofolio Salsabila Anandita Putri dan asisten belajar interaktif untuk pelajar/mahasiswa Indonesia.

Informasi Salsabila Anandita Putri:
- Profesi: Junior Web Developer & Quality Assurance.
- Latar Belakang: Fresh graduate SMK Wikrama Bogor jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), berdomisili di Bogor, Indonesia.
- Pengalaman QA/PKL: Praktik Kerja Lapangan di PT. Mede Media Softika, berpengalaman melakukan pengujian sistem & functional testing pada website Bank Indonesia dan OJK (Otoritas Jasa Keuangan / SIGAP), berhasil menemukan dan mendokumentasikan 30+ bug dan issue sistem.
- Keahlian Teknis: Golang (Gin, Gorm), Node.js, Express.js, Next.js, React, TypeScript, PHP, Laravel, MySQL, PostgreSQL, Prisma, REST API, Tailwind CSS, Bootstrap, Git, Docker, System Analysis, Debugging & QA Testing (Functional Testing, Bug Reporting).
- Kontak: Email: salsabilaananditaputri@gmail.com, GitHub: https://github.com/salsabilaanandita, LinkedIn: https://www.linkedin.com/in/salsabilaananditaputri/
- Karakter & Dedikasi: Memiliki motivasi tinggi dalam problem-solving, arsitektur backend yang rapi, dan performa web modern.

Peran & Aturan Chatbot:
1. Jika pengguna bertanya tentang Salsabila (profil, pengalaman, proyek, kontak, keterampilan, atau ingin mengajak kerja sama), jawab dengan ramah, profesional, dan akurat berdasarkan data di atas.
2. Jika pengguna bertanya tentang materi pelajaran, sains, matematika, programming, tugas kuliah/sekolah, atau hal umum lainnya, jadilah asisten belajar yang sabar, cerdas, dan suportif.
3. Jawab dalam Bahasa Indonesia yang natural, santai tapi tetap sopan, ringkas, dan jelas.
4. Mulai penjelasan konsep dari dasar dan beri analogi sehari-hari jika membantu pemahaman.
5. JANGAN gunakan format simbol LaTeX dollar seperti $CO_2$, $H_2O$, atau $x^2$. Tulis rumus secara natural dan rapi menggunakan teks biasa atau unicode (contoh: CO₂, H₂O, x², 25°C).
6. Jika pengguna melampirkan berkas/dokumen (CV, PDF, gambar, audio, catatan tugas), analisislah seluruh isi berkas tersebut secara saksama dan berikan umpan balik atau ringkasan yang relevan.
7. Akhiri penjelasan materi yang panjang dengan 1 pertanyaan pemicu singkat untuk mengecek pemahaman.`;

const GENERATION_CONFIG = {
  temperature: 0.6,
  topK: 40,
  topP: 0.95,
  systemInstruction: SYSTEM_INSTRUCTION,
};

async function streamWithFallback({ contents, config, onChunk, isClientDisconnected, model = GEMINI_MODEL }) {
  const modelsToTry = [...new Set([model, ...UNIQUE_MODELS])];
  let lastError = null;

  for (const currentModel of modelsToTry) {
    try {
      const responseStream = await ai.models.generateContentStream({
        model: currentModel,
        contents,
        ...(config ? { config } : {}),
      });

      for await (const chunk of responseStream) {
        if (isClientDisconnected && isClientDisconnected()) {
          return { aborted: true };
        }
        const text = chunk.text || '';
        if (text) {
          onChunk(text);
        }
      }

      return { success: true, model: currentModel };
    } catch (err) {
      lastError = err;
      const status = err.status || err.statusCode || (err.error && err.error.code);
      const isRateLimit =
        status === 429 ||
        (err.message &&
          (err.message.includes('429') ||
            err.message.includes('quota') ||
            err.message.includes('RESOURCE_EXHAUSTED')));
      const isNotFound = status === 404;
      const isOverloaded = status === 503;

      console.warn(
        `[Gemini API Stream] Model '${currentModel}' gagal (${err.message || status}). Mencoba model berikutnya...`
      );

      if (isRateLimit || isNotFound || isOverloaded) {
        continue;
      }
      throw err;
    }
  }

  throw lastError;
}

async function generateWithFallback({ contents, config, model = GEMINI_MODEL }) {
  const modelsToTry = [...new Set([model, ...UNIQUE_MODELS])];
  let lastError = null;

  for (const currentModel of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model: currentModel,
        contents,
        ...(config ? { config } : {}),
      });
      return response;
    } catch (err) {
      lastError = err;
      const status = err.status || err.statusCode || (err.error && err.error.code);
      const isRateLimit =
        status === 429 ||
        (err.message &&
          (err.message.includes('429') ||
            err.message.includes('quota') ||
            err.message.includes('RESOURCE_EXHAUSTED')));
      const isNotFound = status === 404;
      const isOverloaded = status === 503;

      console.warn(
        `[Gemini API] Model '${currentModel}' gagal (${err.message || status}). Mencoba model berikutnya...`
      );

      if (isRateLimit || isNotFound || isOverloaded) {
        continue;
      }
      throw err;
    }
  }

  throw lastError;
}

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

const sendError = (res, e, status = 500) => {
  console.error(e);
  const statusCode = e.status || e.statusCode || (e.error && e.error.code) || status;
  let clientMessage = e.message || 'Terjadi kesalahan pada server.';

  if (
    statusCode === 429 ||
    clientMessage.includes('429') ||
    clientMessage.includes('quota') ||
    clientMessage.includes('RESOURCE_EXHAUSTED')
  ) {
    return res.status(429).json({
      error: 'Batas kuota Gemini API (Rate Limit 429) tercapai. Silakan coba sesaat lagi.',
    });
  }

  const finalStatus = statusCode >= 100 && statusCode < 600 ? statusCode : 500;
  res.status(finalStatus).json({ error: clientMessage });
};

// Endpoint health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Gemini Chatbot Express API',
    model: GEMINI_MODEL,
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// Endpoint Chat utama dengan Streaming SSE & Multimodal
app.post(['/api/chat', '/chat'], async (req, res) => {
  let { conversation, prompt, file, stream = true } = req.body;
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY belum dikonfigurasi di file environment (.env).',
      });
    }

    if (!conversation && prompt) {
      conversation = [{ role: 'user', text: prompt, file }];
    }

    if (!Array.isArray(conversation) || conversation.length === 0) {
      return sendError(res, new Error('conversation harus berupa array yang tidak kosong atau sediakan prompt.'), 400);
    }

    const contents = conversation.map(({ role, text, file: msgFile }) => {
      const parts = [];

      if (msgFile && msgFile.data) {
        let mimeType = msgFile.mimeType || 'application/pdf';
        const nameLower = (msgFile.name || '').toLowerCase();

        if (nameLower.endsWith('.pdf') || mimeType.includes('pdf')) {
          mimeType = 'application/pdf';
        } else if (nameLower.endsWith('.png') || mimeType.includes('png')) {
          mimeType = 'image/png';
        } else if (nameLower.endsWith('.jpg') || nameLower.endsWith('.jpeg') || mimeType.includes('jpeg')) {
          mimeType = 'image/jpeg';
        } else if (nameLower.endsWith('.webp') || mimeType.includes('webp')) {
          mimeType = 'image/webp';
        } else if (nameLower.endsWith('.mp3') || mimeType.includes('mp3')) {
          mimeType = 'audio/mp3';
        } else if (nameLower.endsWith('.wav') || mimeType.includes('wav')) {
          mimeType = 'audio/wav';
        } else if (nameLower.endsWith('.m4a') || mimeType.includes('m4a')) {
          mimeType = 'audio/m4a';
        } else if (nameLower.endsWith('.ogg') || mimeType.includes('ogg')) {
          mimeType = 'audio/ogg';
        }

        const cleanData =
          typeof msgFile.data === 'string' && msgFile.data.includes(',')
            ? msgFile.data.split(',')[1]
            : msgFile.data;

        parts.push({
          inlineData: {
            data: cleanData,
            mimeType,
          },
        });
      }

      if (text && typeof text === 'string' && text.trim()) {
        parts.push({ text: text.trim() });
      } else if (parts.length === 0) {
        parts.push({ text: 'Tolong baca dan analisis berkas ini.' });
      }

      return { role, parts };
    });

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache, no-transform');
      res.setHeader('Connection', 'keep-alive');
      res.setHeader('X-Accel-Buffering', 'no');
      res.flushHeaders?.();

      let clientDisconnected = false;
      res.on('close', () => {
        if (!res.writableEnded) {
          clientDisconnected = true;
        }
      });

      try {
        await streamWithFallback({
          contents,
          config: GENERATION_CONFIG,
          isClientDisconnected: () => clientDisconnected,
          onChunk: (text) => {
            if (!clientDisconnected) {
              res.write(`data: ${JSON.stringify({ text })}\n\n`);
            }
          },
        });

        if (!clientDisconnected) {
          res.write('data: [DONE]\n\n');
          res.end();
        }
      } catch (streamErr) {
        if (!clientDisconnected) {
          const errMsg =
            streamErr.status === 429 || streamErr.message?.includes('429')
              ? 'Batas kuota Gemini API (Rate Limit 429) tercapai. Silakan coba sesaat lagi.'
              : (streamErr.message || 'Terjadi kesalahan saat streaming jawaban.');
          res.write(`data: ${JSON.stringify({ error: errMsg })}\n\n`);
          res.end();
        }
      }
      return;
    }

    const response = await generateWithFallback({
      contents,
      config: GENERATION_CONFIG,
    });

    res.status(200).json({ result: response.text });
  } catch (e) {
    sendError(res, e);
  }
});

// Endpoint multimodal terpisah
app.post('/generate-text', async (req, res) => {
  const { prompt } = req.body;
  try {
    if (!prompt) return sendError(res, new Error('prompt wajib diisi.'), 400);
    const response = await generateWithFallback({ contents: prompt });
    res.status(200).json({ result: response.text });
  } catch (e) {
    sendError(res, e);
  }
});

const fileEndpoint = (route, field, defaultPrompt) =>
  app.post(route, upload.single(field), async (req, res) => {
    try {
      if (!req.file) return sendError(res, new Error(`File "${field}" wajib diunggah.`), 400);
      const { prompt } = req.body;
      const response = await generateWithFallback({
        contents: [
          { text: prompt || defaultPrompt, type: 'text' },
          { inlineData: { data: req.file.buffer.toString('base64'), mimeType: req.file.mimetype } },
        ],
        config: { systemInstruction: SYSTEM_INSTRUCTION },
      });
      res.status(200).json({ result: response.text });
    } catch (e) {
      sendError(res, e);
    }
  });

fileEndpoint('/generate-from-image', 'image', 'Tolong deskripsikan gambar berikut.');
fileEndpoint('/generate-from-document', 'document', 'Tolong buat ringkasan dari dokumen berikut.');
fileEndpoint('/generate-from-audio', 'audio', 'Tolong buatkan transkrip dari rekaman berikut.');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🤖 Gemini Chatbot Express Server berjalan di http://localhost:${PORT}`);
  console.log(`📡 Model aktif: ${GEMINI_MODEL}`);
});
