# PRD — Portfolio Landing Page

## 1. Ringkasan
Website portofolio personal bergaya minimalis, bersih, dan terasa "mahal" seperti website Apple — bukan hasil template AI generik. Fokus pada tipografi, whitespace, dan animasi halus (bukan animasi ramai/berlebihan).

## 2. Tujuan
- Menampilkan profil, skill, project, pengalaman, dan pendidikan secara profesional.
- Memberi kesan premium & personal, bukan "AI slop" (template generik, warna norak, layout pasaran).
- Mudah di-maintain sendiri (konten gampang diganti tanpa bongkar struktur).

## 3. Target Pengguna
- Recruiter / HR yang cek portofolio dalam < 2 menit.
- Klien freelance yang menilai kualitas kerja dari kesan pertama.

## 4. Ruang Lingkup (Scope)
### Termasuk (in-scope)
- Single-page scroll dengan 7 section: Home, About, Skill, Project, Experience, Education, Contact.
- Animasi scroll-reveal halus (fade + slide kecil), tidak flashy.
- Navigasi sticky, smooth-scroll ke section.
- Responsive (mobile, tablet, desktop).
- Dark/light tetap satu tema utama: putih modern, minim warna (1 accent color saja).

### Tidak termasuk (out-of-scope, versi awal)
- Blog/CMS.
- Multi-bahasa.
- Backend/database (contact form cukup mailto/link, bukan server).

## 5. Kriteria Sukses
- Loading terasa instan (< 2 detik di koneksi normal).
- Tidak ada elemen yang terasa "template AI" (gradient ungu-biru pasaran, icon generik berlebihan, font default).
- Animasi tidak mengganggu keterbacaan / tidak lag.

## 6. Batasan (Constraints)
- Palet warna: putih/near-white sebagai base, 1 accent color (misal hitam pekat atau 1 warna aksen saja).
- Tipografi jadi elemen desain utama (bukan icon/ilustrasi berlebihan).
- Tidak boleh copy identitas visual Apple secara literal (logo, font San Francisco berbayar, dll) — hanya terinspirasi prinsip desainnya (whitespace, tipografi besar, animasi presisi).

## 7. Risiko & Mitigasi
| Risiko | Mitigasi |
|---|---|
| AI generate desain generik ("AI slop") | Gunakan referensi visual eksplisit di prompt, minta iterasi, review tiap section |
| Over-engineering (animasi/lib berlebihan) | Batasi ke 1 library animasi ringan, hindari framework besar kalau tidak perlu |
| AI salah paham struktur konten | Gunakan SRS + SESSION.md sebagai acuan tetap tiap sesi kerja dengan AI |
