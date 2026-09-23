# SRS — Software Requirements Specification
## Portfolio Landing Page

## 1. Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | Website menampilkan 7 section: Home, About, Skill, Project, Experience, Education, Contact |
| FR-02 | Navigasi (navbar) sticky di atas, klik menu = smooth-scroll ke section terkait |
| FR-03 | Section muncul dengan animasi fade/slide saat di-scroll ke viewport (scroll-reveal) |
| FR-04 | Section Project menampilkan minimal 1 card per project: gambar, judul, deskripsi singkat, link (demo/repo) |
| FR-05 | Section Skill menampilkan daftar skill dalam grid/list, dikelompokkan (misal: Bahasa, Tools, Framework) |
| FR-06 | Section Experience & Education menampilkan timeline (posisi/institusi, periode waktu, deskripsi singkat) |
| FR-07 | Section Contact menyediakan link aktif: email (mailto), dan/atau sosial media (LinkedIn, GitHub, dll) |
| FR-08 | Website responsive di 3 breakpoint minimum: mobile (<640px), tablet (640–1024px), desktop (>1024px) |
| FR-09 | Semua gambar menggunakan lazy-load agar tidak memperlambat loading awal |

## 2. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | Performa: First Contentful Paint < 2 detik pada koneksi 4G normal |
| NFR-02 | Tidak menggunakan framework berat jika tidak perlu (hindari over-engineering) — HTML/CSS/JS vanilla atau lib ringan cukup untuk static portfolio |
| NFR-03 | Animasi tidak menyebabkan layout shift (gunakan `transform`/`opacity`, hindari animasi yang mengubah `width`/`height` langsung) |
| NFR-04 | Aksesibilitas dasar: kontras teks cukup (WCAG AA), semua gambar punya `alt`, navigasi bisa pakai keyboard |
| NFR-05 | Kode terstruktur & mudah di-maintain: pisah section jadi komponen/blok jelas, bukan 1 file panjang tanpa struktur |
| NFR-06 | SEO dasar: meta title, meta description, Open Graph tags untuk share link |

## 3. Batasan Teknis
- Tidak wajib backend/database (data project/skill bisa hardcode di file config/JSON sederhana).
- Hosting statis (Vercel/Netlify/GitHub Pages) — tidak butuh server khusus.
- Browser target: 2 versi terakhir Chrome, Firefox, Safari, Edge.

## 4. Kriteria Penerimaan (Acceptance Criteria)
- [ ] Semua 7 section ada dan terisi konten asli (bukan placeholder).
- [ ] Animasi scroll berjalan mulus di mobile & desktop, tidak patah-patah (60fps target).
- [ ] Tidak ada broken link di section Contact & Project.
- [ ] Lulus cek Lighthouse: Performance & Accessibility > 90.
- [ ] Review manual: tidak terlihat seperti template AI generik (cek terhadap checklist di DESIGN.md bagian 7).
