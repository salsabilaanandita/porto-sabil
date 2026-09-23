# SESSION.md — Working Context untuk AI Coding Assistant
(dipakai di Claude Code / Gemini CLI, taruh di root project, update tiap sesi)

## Tujuan File Ini
File ini dibaca AI di AWAL setiap sesi kerja, supaya AI tidak "lupa konteks" atau salah tangkap arah project. Update bagian **Progress Log** & **Keputusan Aktif** setelah tiap sesi selesai.

## Project
Portfolio landing page — lihat `PRD.md`, `DESIGN.md`, `SRS.md` untuk detail lengkap. Ringkasan: single-page, 7 section + visual gallery, tema putih modern minimalis, animasi halus ala Apple, TIDAK boleh terasa AI-generated/template.

## Aturan Kerja untuk AI (Do & Don't)
**Do:**
- Selalu cek `DESIGN.md` section 7 ("Yang Membuat Ini Tidak AI Slop") sebelum generate UI baru.
- Tanya dulu kalau requirement ambigu, jangan asal asumsi lalu generate banyak kode sekaligus.
- Kerjakan per-section, review dulu sebelum lanjut ke section berikutnya.
- Jaga struktur file tetap simpel — jangan tambah dependency/library baru tanpa alasan jelas.

**Don't:**
- Jangan tambah warna baru di luar palet `DESIGN.md` section 3.
- Jangan tambah animasi/efek yang tidak diminta ("hiasan" tambahan sendiri).
- Jangan generate ulang seluruh file kalau cuma diminta ubah 1 bagian kecil.
- Jangan bikin arsitektur/folder structure rumit untuk project static sederhana ini (hindari over-engineering — lihat NFR-02 di `SRS.md`).

## Status Project Saat Ini
- Fase: `development & testing`
- Section selesai:
  - `Home`: Single typewriter text run, rectangular framed photo (tanpa card pembungkus), floating skill chips, touch-sensitive lifts.
  - `About`: Bold creative headline + syntax-highlighted code editor box + stats metrics, tanpa foto.
  - `Skill / Tech Stack`: Numbered category selector tab list (01, 02, 03) + square tech tiles dengan touch float-up animation (mirip screenshot 2).
  - `Project`: Large visual cards with horizontal scroll snap & subtle hover scale.
  - `Gallery`: Sticky visual crossfade.
  - `Experience`: Large side numbering (01, 02, 03), border-divided clean rows (tanpa boxy cards), sensitive touch float-up.
  - `Education & Certifications`: Large side numbering (01, 02, 03), clean rows dengan preview lampiran dan modal inspeksi resolusi tinggi.
  - `Contact`: Transparent form background, radius tidak terlalu melengkung (rounded-xl), feedback sentuhan halus.

## Keputusan Aktif (jangan diubah tanpa diskusi ulang)
- Base: Putih / Off-white (`#FAFAFA` / `#FFFFFF`)
- Teks Utama: Hitam pekat lembut (`#111111`)
- Teks Sekunder: Abu (`#6E6E73`)
- Accent color: `#0071E3` (Apple Electric Blue)
- Font utama: `Geist Sans` / `Geist Mono` (`-apple-system` fallback)
- Layout: Clean typography-first border dividers, no generic white boxy cards, large prominent section numbers.
- Interaksi: Sensitive touch lift / float-up on touch/hover (`hover:-translate-y-2.5 active:scale-[0.98]`).

## Progress Log
| Tanggal | Sesi ke- | Yang dikerjakan | Catatan/masalah |
|---|---|---|---|
| 2026-09-23 | 1 | Penyelarasan total layout tanpa card berat: Home profile kotak foto border-radius murni dengan chip mengambang, Tech Stack tabs & tiles (screenshot 2), Experience & Education nomor besar di sisi (01, 02, 03), efek touch responsif melayang ke atas di semua teks & elemen, contact form transparan. | Build 100% lulus tanpa error, dev server aktif di port 3000. |
| 2026-09-23 | 2 | Desain tipografi kreatif pada semua judul section (Home, About, Skills, Projects, Gallery, Experience, Education, Contact) dengan font-semibold tidak terlalu bold, kombinasi underline aksen biru, italic muted, dan kata kunci warna; penyelarasan card transparan/hairline elegan dan kotak foto profil home 1:1 persegi murni (330x330 aspect-square). | Production build sukses 0 error. |
| 2026-09-23 | 3 | Penambahan animated living background (ambient mesh orbs + subtle dot matrix), refactor komponen Counter dengan requestAnimationFrame + cubic easing (dari 0 menghitung naik secara dinamis ke target value saat masuk viewport), dan styling transparan + nomor urut pada Project & Visual Story / Gallery. | Production build sukses 0 error. |
| 2026-09-23 | 4 | Peningkatan intensitas dan kehalusan animasi background hidup (mesh orb + drifting particles); penambahan animasi touch melayang ke atas + garis dekoratif gradien yang muncul di bawah semua judul section (Home, About, Tech Stack, Project, Gallery, Experience, Education, Contact); serta efek melayang halus tanpa garis pada seluruh paragraf dan teks konten saat di-touch. | Production build sukses 0 error. |
| 2026-09-23 | 5 | Penyesuaian layout Experience, Education, dan Sertifikasi persis seperti screenshot (tanpa garis kiri/kanan, baris pemisah horizontal bersih `+ 01 CATEGORY ───`), tipografi kreatif kata kunci hanya untuk Home dan Contact, serta garis animasi bawah judul menjadi solid biru (`bg-[#0071E3]`, non-gradient) dengan panjang 100% mengikuti lebar judul (`w-full`). | Production build sukses 0 error. |
| 2026-09-23 | 6 | Redesain Navbar menjadi floating centered glassmorphic dock (melayang di tengah atas, transparan berbayangan halus, pill highlight section aktif) serta penyesuaian sudut Project & Gallery menjadi radius sedang 10px (`rounded-[10px]`) dan penghapusan garis vertikal kiri/kanan (`border-x-0`). | Production build sukses 0 error. |
| 2026-09-23 | 7 | Penghapusan total mode switcher/dark mode kembali ke pure light aesthetic; pembaruan section Skills menjadi Aesthetic Centered Logo Tiles Grid ringkas dengan category filter tabs interaktif; serta pembaruan section Projects menjadi slide horizontal otomatis berbasis scroll kursor murni tanpa border/box pembungkus luar (borderless, seamless). | Production build sukses 0 error. |
| 2026-09-23 | 8 | Redesain total form Contact menjadi unboxed, cardless & borderless (tanpa kotak card luar dan tanpa border pembungkus luar), input styling Apple/Linear dengan focus ring biru halus, header interaktif dengan badge respon < 24 jam; penghapusan garis border kiri-kanan pada box Email Langsung (hanya border-y atas & bawah bersih); serta pembaruan section Skills dengan logo brand SVG asli tanpa tab filter kategori. | Production build sukses 0 error. |
| 2026-09-23 | 9 | Sinkronisasi total seluruh data portofolio asli pengguna (Salsabila Anandita Putri — Junior Backend Developer) di `portfolio-data.ts`, pembaruan metadata SEO di `layout.tsx`, navbar initial badge, dan preloader. | Production build sukses 0 error. |
| 2026-09-23 | 10 | Refaktor total arsitektur data: Semua komponen (Hero, About, Skills, Projects, Gallery, Experience, Education, Contact, Footer) kini 100% mengambil data dinamis dari `app/data/portfolio-data.ts` tanpa teks dummy yang di-hardcode. | Production build sukses 0 error. |
| 2026-09-23 | 11 | Pembaruan detail pengalaman PKL (PT. Mede Media Softika) di `portfolio-data.ts` dengan penegasan peran Multi-Tasking lintas divisi: QA testing, System Analyst, Frontend (FE), dan Backend (BE) API development. | Production build sukses 0 error. |
| 2026-09-23 | 12 | Standardisasi bahasa 100% konsisten Bahasa Indonesia di seluruh judul, sub-judul, eyebrow tag, running ticker background, navigasi, dan tombol aksi tanpa campuran bahasa yang tidak teratur. | Production build sukses 0 error. |
| 2026-09-23 | 13 | Penerapan tipografi modern & font persis seperti referensi: Font `Plus Jakarta Sans` & `Space Grotesk` untuk headline tebal uppercase berbobot tinggi (`HI, I'M SALSABILA ANANDITA PUTRI.`), paragraf bersih bernapas lapang, dan pill button `DOWNLOAD RESUME`. | Production build sukses 0 error. |
| 2026-09-23 | 14 | Sinkronisasi data Skill & Proyek persis dari sumber JS pengguna (`money-tracker-app` dengan live demo Netlify, `inventaris-app`, `aplikasi-kasir`, `aplikasi-perpustakaan`, `weather-app`, `ticketing-flutter` dengan live demo Vercel, `webshop`), tautan GitHub masing-masing proyek, stack teknologi, dan highlights. | Production build sukses 0 error. |
| 2026-09-23 | 15 | Pembaruan section Skills: penyatuan seluruh item ke dalam satu grid utuh yang clean tanpa wrapper kategori, penambahan teknologi baru (`Neon.tech`, `GitHub`, `Next.js`, `TypeScript`, `Antigravity`), dan pembuatan SVG brand logo resmi resolusi tinggi di `BrandLogos.tsx`. | Production build sukses 0 error. |
| 2026-09-23 | 16 | Pembaruan visual section Projects: menampilkan khusus 3 proyek utama (`Inventaris App (INV-PRO)`, `Aplikasi Kasir (KasirApp)`, dan `Money Tracker App`) dengan frame mock browser modern dan rendering `object-contain` 16:9 agar seluruh screenshot dashboard terlihat utuh dan tidak terpotong (uncropped). | Production build sukses 0 error. |
| 2026-09-23 | 17 | Sinkronisasi total seluruh 9 sertifikasi terverifikasi dari lampiran resmi pengguna (Dicoding, AWS, Google Developers, PT SCI Secure Coding, dan Kominfo x AGI Game Dev Seminar) lengkap dengan ID kredensial asli, link verifikasi resmi, dan dokumen PDF/gambar lampiran. | Production build sukses 0 error. |
| 2026-09-23 | 18 | Penggantian foto profil utama di Home/Hero dengan foto asli pengguna (`/profile.jpg`), penyesuaian framing fokus kepala/wajah lebih tinggi (`object-[50%_8%]`), ukuran proporsional, dan badge nama transparan elegan. | Production build sukses 0 error. |
| 2026-09-23 | 19 | Standardisasi gelar profesi menjadi "Junior Web Developer" (menghapus "Backend Developer" & "Full-Stack Background" di metadata, data profil, ticker background, dan badge foto); serta pengaturan efek foto profil grayscale abu-abu secara default yang bertransisi halus ke warna asli saat disentuh/hover. | Production build sukses 0 error. |
| 2026-09-23 | 20 | Penambahan fitur pagination pada section Sertifikasi (5 item per halaman) lengkap dengan navigasi tombol halaman, indikator total item (`1–5 dari 9 sertifikat`), tombol prev/next, dan sinkronisasi penomoran urut global (`01` s/d `09`). | Production build sukses 0 error. |












