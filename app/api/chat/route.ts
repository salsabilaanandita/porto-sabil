import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Konfigurasi runtime
export const dynamic = "force-dynamic";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";

const FALLBACK_MODELS = [
  GEMINI_MODEL,
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-flash-latest",
];
const UNIQUE_MODELS = Array.from(new Set(FALLBACK_MODELS));

const SYSTEM_INSTRUCTION = `Kamu adalah "Chatbot AI", asisten pintar serbaguna yang sekaligus menjadi asisten virtual resmi untuk portofolio Salsabila Anandita Putri dan asisten belajar interaktif untuk pelajar/mahasiswa Indonesia.

Informasi Salsabila Anandita Putri:
- Profesi: Junior Web Developer & Quality Assurance.
- Latar Belakang: Fresh graduate SMK Wikrama Bogor jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), berdomisili di Bogor, Indonesia.
- Keahlian Teknis: PHP (CodeIgniter, Laravel), Next.js, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, MySQL, PostgreSQL, REST API, Git, System Analysis, Debugging & QA Testing (Manual Testing, Test Scenarios, Bug Reporting).
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

interface MessageItem {
  role: "user" | "model";
  text?: string;
  file?: {
    name?: string;
    mimeType?: string;
    data: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY belum dikonfigurasi di file environment (.env.local atau .env)." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const body = await req.json();
    let { conversation, prompt, file, stream = true } = body;

    if (!conversation && prompt) {
      conversation = [{ role: "user", text: prompt, file }];
    }

    if (!Array.isArray(conversation) || conversation.length === 0) {
      return NextResponse.json(
        { error: "conversation harus berupa array yang tidak kosong atau sediakan prompt." },
        { status: 400 }
      );
    }

    const contents = (conversation as MessageItem[]).map(({ role, text, file: msgFile }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parts: any[] = [];

      if (msgFile && msgFile.data) {
        let mimeType = msgFile.mimeType || "application/pdf";
        const nameLower = (msgFile.name || "").toLowerCase();

        if (nameLower.endsWith(".pdf") || mimeType.includes("pdf")) {
          mimeType = "application/pdf";
        } else if (nameLower.endsWith(".png") || mimeType.includes("png")) {
          mimeType = "image/png";
        } else if (nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || mimeType.includes("jpeg")) {
          mimeType = "image/jpeg";
        } else if (nameLower.endsWith(".webp") || mimeType.includes("webp")) {
          mimeType = "image/webp";
        } else if (nameLower.endsWith(".mp3") || mimeType.includes("mp3")) {
          mimeType = "audio/mp3";
        } else if (nameLower.endsWith(".wav") || mimeType.includes("wav")) {
          mimeType = "audio/wav";
        } else if (nameLower.endsWith(".m4a") || mimeType.includes("m4a")) {
          mimeType = "audio/m4a";
        } else if (nameLower.endsWith(".ogg") || mimeType.includes("ogg")) {
          mimeType = "audio/ogg";
        }

        const cleanData =
          typeof msgFile.data === "string" && msgFile.data.includes(",")
            ? msgFile.data.split(",")[1]
            : msgFile.data;

        parts.push({
          inlineData: {
            data: cleanData,
            mimeType,
          },
        });
      }

      if (text && typeof text === "string" && text.trim()) {
        parts.push({ text: text.trim() });
      } else if (parts.length === 0) {
        parts.push({ text: "Tolong baca dan analisis berkas ini." });
      }

      return { role, parts };
    });

    if (stream) {
      const encoder = new TextEncoder();

      const readableStream = new ReadableStream({
        async start(controller) {
          const modelsToTry = Array.from(new Set([GEMINI_MODEL, ...UNIQUE_MODELS]));
          let lastError: unknown = null;
          let succeeded = false;

          for (const currentModel of modelsToTry) {
            try {
              const responseStream = await ai.models.generateContentStream({
                model: currentModel,
                contents,
                config: GENERATION_CONFIG,
              });

              for await (const chunk of responseStream) {
                const text = chunk.text || "";
                if (text) {
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
                }
              }

              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              succeeded = true;
              break;
            } catch (err: unknown) {
              lastError = err;
              const errorObj = err as { status?: number; statusCode?: number; error?: { code?: number }; message?: string };
              const status = errorObj.status || errorObj.statusCode || errorObj.error?.code;
              const isRateLimit =
                status === 429 ||
                Boolean(
                  errorObj.message &&
                    (errorObj.message.includes("429") ||
                      errorObj.message.includes("quota") ||
                      errorObj.message.includes("RESOURCE_EXHAUSTED"))
                );
              const isNotFound = status === 404;
              const isOverloaded = status === 503;

              console.warn(`[Next.js API] Model '${currentModel}' gagal. Mencoba fallback...`);

              if (isRateLimit || isNotFound || isOverloaded) {
                continue;
              }
              break;
            }
          }

          if (!succeeded) {
            const errObj = lastError as { message?: string; status?: number } | null;
            const errMsg =
              errObj?.status === 429 || errObj?.message?.includes("429")
                ? "Batas kuota Gemini API (Rate Limit 429) tercapai. Silakan coba sesaat lagi."
                : (errObj?.message || "Terjadi kesalahan saat streaming jawaban.");

            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: errMsg })}\n\n`));
          }

          controller.close();
        },
      });

      return new Response(readableStream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          "X-Accel-Buffering": "no",
        },
      });
    }

    // Non-streaming fallback
    let lastError: unknown = null;
    const modelsToTry = Array.from(new Set([GEMINI_MODEL, ...UNIQUE_MODELS]));

    for (const currentModel of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: currentModel,
          contents,
          config: GENERATION_CONFIG,
        });

        return NextResponse.json({ result: response.text });
      } catch (err) {
        lastError = err;
        continue;
      }
    }

    throw lastError;
  } catch (err: unknown) {
    const errorObj = err as { message?: string; status?: number };
    return NextResponse.json(
      { error: errorObj?.message || "Terjadi kesalahan pada server." },
      { status: errorObj?.status || 500 }
    );
  }
}
