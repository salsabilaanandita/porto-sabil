# DESIGN BRIEF — Portfolio Landing Page

## 1. Mood & Referensi
- Rasa desain: **Apple.com** — tenang, banyak white space, tipografi besar sebagai hero, transisi halus saat scroll.
- Hindari: gradient ungu-biru default AI tools, drop-shadow berlebihan, icon pack generik, layout "3 kolom fitur + emoji".

## 2. Prinsip Desain
1. **Whitespace dulu, dekorasi belakangan.** Kalau ragu, kosongkan — jangan diisi.
2. **Satu hero statement per section.** 1 kalimat besar, jelas, bukan paragraf panjang.
3. **Animasi = penekanan, bukan hiasan.** Muncul saat elemen relevan, bukan semua elemen sekaligus goyang.
4. **Konsistensi grid.** Semua section pakai margin & lebar konten yang sama.

## 3. Warna
- Base: putih / off-white (`#FFFFFF`, `#FAFAFA`)
- Teks utama: hitam pekat lembut (`#111111`), bukan `#000000` murni
- Teks sekunder: abu (`#6E6E73` — mirip gaya Apple)
- Accent: **1 warna saja**, dipakai sangat hemat (misal untuk hover/CTA) — contoh: biru elektrik `#0071E3` atau bisa diganti sesuai personal branding.
- Tidak ada warna ketiga/keempat kecuali untuk status (misal error form).

## 4. Tipografi
- Font sans-serif modern: `Inter`, `SF Pro`-alike (`-apple-system`), atau `General Sans`.
- Hero heading: besar, bold, tracking rapat (36–72px).
- Body text: 16–18px, line-height lega (1.5–1.7).
- Hierarki jelas: max 3 ukuran font per halaman (hero, subheading, body).

## 5. Layout per Section
1. **Home (Hero)** — nama, satu tagline kuat, CTA scroll ke project. Full-viewport, teks center atau left-aligned besar.
2. **About** — foto/ilustrasi minimal + 2-3 paragraf singkat, bukan cerita panjang.
3. **Skill** — grid rapi (ikon/label sederhana, bukan progress bar norak).
4. **Project** — card besar dengan gambar dominan, hover subtle scale/zoom, klik = detail/link.
5. **Experience** — timeline vertikal minimal, garis tipis + titik.
6. **Education** — mirip experience, lebih ringkas.
7. **Contact** — CTA jelas (email, LinkedIn, GitHub), bukan form ramai.

## 6. Animasi
- Scroll-reveal: fade-in + translateY(20px) → 0, durasi 400-600ms, easing `ease-out`.
- Sticky nav: muncul background blur saat scroll (glassmorphism tipis, bukan solid warna).
- Hover project card: scale 1.02–1.05, transisi 300ms.
- **Aturan:** maksimal 1 jenis animasi per elemen. Tidak ada parallax berlebihan, tidak ada elemen berputar/bounce yang terasa "murah".

## 7. Yang Membuat Ini "Tidak AI Slop"
- Tidak ada stock icon 3D/emoji sebagai pengganti konten asli.
- Tidak ada testimonial palsu / placeholder Lorem Ipsum saat rilis.
- Foto/project asli, bukan mockup generik.
- Spacing dan alignment presisi (pakai grid 8px system), bukan asal taruh.
