# PRD — Portofolio Arya Kharisudin Irfani

**Versi:** 1.0, draft kerja  
**Status:** MVP satu halaman sudah diimplementasikan; review Hero dan pemeriksaan akhir sebelum rilis masih diperlukan
**Konsep:** Modern editorial gelap dengan aksen biru; Linux menjadi bagian identitas konten  
**Fondasi:** proyek Next.js di folder `portfolio`

## Mulai dari sini saat melanjutkan

- Implementasi situs pertama ada pada commit `99bbf80` di branch [`portfolio-nextjs`](https://github.com/aryapulosari-design/porto/tree/portfolio-nextjs). Remote `origin` sekarang menunjuk ke [repo portofolio Arya](https://github.com/aryapulosari-design/portofolio-estetic-next).
- Di Chrome, halaman dan foto Hero termuat pada lebar 320, 390, 768, dan 1440 px tanpa gulir horizontal. Tautan lompat ke konten, menu ponsel, Escape, dan pengalihan ke Projects teruji dengan keyboard.
- Setelah tautan Projects dipilih melalui menu ponsel, fokus jatuh ke `body`. Periksa pemindahan fokus ke judul bagian sebelum rilis. Pratinjau Open Graph berhasil saat URL situs mengarah ke server lokal yang aktif.
- `npm run build` berhasil pada audit 26 November 2026. `npm run lint` selesai dengan lima peringatan dari berkas hasil generate dan komponen gambar Open Graph.
- Kontak publik dan berkas sertifikat sudah tampil. Empat proyek masih memerlukan tautan demo, repo, atau dokumentasi yang bisa dibuka pengunjung. Foto sumber, CV, sertifikat asli, dan screenshot referensi tersimpan di `local-assets/` yang diabaikan Git. Daftar rujukan ada di [referensi desain](./references.md).

## Tujuan

Memperkenalkan Arya Kharisudin Irfani, mahasiswa Teknik Informatika UIN Maulana Malik Ibrahim Malang dengan minat pada cybersecurity, Blue Team, Linux, Python development, dan data science. Pengunjung utama adalah recruiter, calon klien, komunitas teknologi, serta calon kolaborator. Mereka harus bisa menemukan proyek dan kontak tanpa memahami Linux atau memakai terminal.

## Isi dan ruang lingkup

MVP: navbar yang jelas, Hero, About, Skills, proyek, pengalaman dan pendidikan, sertifikat terverifikasi, kontak, tema gelap, serta akses yang baik di ponsel dan dengan keyboard. Situs diarahkan sebagai halaman utama dengan bagian-bagian yang mudah dijelajahi.

Fase berikutnya, jika memang berguna: terminal interaktif, tata letak ala Hyprland, studi kasus proyek, blog, pilihan tema, dan animasi lanjutan. Fitur tersebut tidak menjadi syarat untuk menyelesaikan MVP.

Kandidat proyek untuk dikurasi: Geographic Route Finder (Flask/Dijkstra/SQL), MikroTik Networking Laboratory, Superstore Data Science, dan Web CRUD Application. Pengalaman kandidat: ETH Cybersecurity Community, HIMATIF, serta organisasi lain yang relevan. Kontribusi pribadi, hasil, bukti visual, judul sertifikat, penerbit, tanggal, dan tautan kredensial harus diperiksa sebelum ditampilkan. Jangan mengarang statistik, demo, atau pencapaian.

Sumber yang disebut dalam draft pengguna: [profil LinkedIn Arya](https://id.linkedin.com/in/arya-kharisudin-irfani-055311328) dan CV. **CV belum ditemukan di folder kerja ini.** Tiga judul sertifikat, penerbit, dan tanggal yang sekarang tampil diperiksa dari profil LinkedIn publik; tautan kredensial individual belum tersedia. Nomor telepon dan CV lengkap tidak boleh dipublikasikan tanpa persetujuan pemilik.

## Arah visual dan kualitas

- Dasar navy gelap, aksen biru, judul dengan Clash Display, teks panjang dengan Geist, dan ruang antarelemen yang terkontrol.
- Magic UI adalah fondasi kode. Situs dan gambar `local-assets/references/Eka Wahyu` menjadi referensi utama arah modern; Nim menjadi referensi kesederhanaan. `linux-reference` tetap menjadi referensi bila kelak ada konten Linux yang benar-benar berguna. Ambil prinsip desainnya, bukan gabungkan proyek atau salin identitasnya.
- Interaksi dipakai untuk memberi respons dan menunjukkan posisi pengunjung. Hindari glow berlebihan, gradient generik, glitch, matrix rain, terminal palsu, serta dekorasi keamanan siber yang klise.
- Target sebelum rilis: responsif tanpa overflow yang tak disengaja, navigasi keyboard, fokus yang terlihat, kontras baik, dukungan reduced motion, tautan berfungsi, dan build berhasil. Lighthouse Performance dan SEO minimal 90 adalah target pengujian akhir, bukan angka yang sudah tercapai.

## Cara kerja bertahap

Untuk setiap komponen: audit → proposal → persetujuan desain → implementasi → preview desktop dan ponsel → revisi → persetujuan hasil. Hanya lanjut setelah komponen aktif disetujui. Urutan setelah tahap awal: design system dasar, navbar, Hero, About, Skills, Projects, Experience, Certificates, Contact, lalu optimasi dan deployment.

---

# Hasil tahap awal: audit dan proposal navbar

Bagian audit berikut merekam kondisi awal sebelum perubahan kode. Status implementasi terbaru dicatat di akhir dokumen.

## Temuan dari kode yang ada

| Bagian | Kondisi saat ini | Dampak untuk PRD |
| --- | --- | --- |
| Navbar | `src/components/navbar.tsx` menampilkan dock ikon tetap di bawah: Home, Blog, empat sosial, dan tombol tema. Ikon membesar saat pointer mendekat. | Proyek dan kontak belum punya jalur langsung; label utama hanya muncul pada tooltip, sehingga navigasi kurang jelas pada ponsel. |
| Layout | `src/app/layout.tsx` menaruh konten dalam lebar maksimal `2xl`, memanggil navbar di luar wadah konten, dan memilih tema terang sebagai bawaan. | Navbar baru perlu selaras dengan lebar konten dan tema gelap; perlu ruang agar konten tidak tertutup. |
| Data | `src/data/resume.tsx` masih berisi nama Dillion Verma, tautan sosial miliknya, serta contoh karya/pengalaman. | Jangan menampilkan tautan contoh sebagai milik Arya. Data pribadi belum siap untuk ditukar seluruhnya pada tahap navbar. |
| Halaman | `src/app/page.tsx` sudah memiliki `#about`, `#projects`, dan `#contact`. Ada rute `/blog` tersendiri dengan konten contoh. | Navbar dapat memakai tautan `/#...` yang tetap bekerja dari halaman blog. Blog tidak perlu ditonjolkan sebelum kontennya milik Arya. |
| Referensi | `linux-reference` memakai panel atas dengan label workspace; Nim memakai header teks yang tenang; gambar Eka Wahyu memakai menu pill dengan aksen biru. | Arah awal panel Linux diganti atas masukan pemilik menjadi navbar pill modern; navigasi tetap berupa label teks yang jelas. |

Server lokal sempat merespons `200` pada `http://localhost:3000`, tetapi inspeksi visual browser otomatis terhenti. Proposal berikut didasarkan pada kode dan gambar referensi; tampilan nyata desktop/ponsel belum dinilai.

## Konsep terbaru: navbar pill modern

Navbar tetap di atas, tetapi bentuk dan tipografinya mengikuti arah modern dari referensi Eka. Versi polybar Linux sudah dicoba lebih dulu dan diganti karena pemilik menginginkan tema yang lebih modern. Struktur halaman `portfolio` masih menjadi fondasi.

```text
Desktop:  Arya.                       About   Projects   [Contact]
Ponsel:   Arya.                       About   Projects   [Contact]
```

- **Desktop:** pill melayang dekat tepi atas dan tetap mudah dicapai saat menggulir. Identitas di kiri menuju `/`. `About`, `Projects`, dan `Contact` menuju bagian nyata di halaman utama. `Contact` mendapat aksen biru sebagai CTA.
- **Ponsel:** label tetap terlihat tanpa mengandalkan hover atau menu tersembunyi; target tautan setinggi 44 px. Lebar 320 px dan zoom teks tetap perlu dinilai secara visual.
- **Warna:** dasar navy `#080d19`, permukaan `#121a2b`, teks terang, dan aksen biru `#4b86f7`. Warna dipasang melalui token tema agar komponen yang sudah ada ikut konsisten.
- **Tipografi:** Clash Display untuk judul dan identitas navbar, Geist untuk teks panjang, Geist Mono hanya untuk detail teknis. Clash Display sudah tersedia sebagai aset lokal. Font persis milik situs Eka belum dapat diidentifikasi, jadi ini interpretasi visual, bukan salinan.
- **Gerak:** transisi warna 150 ms saat hover, tanpa pembesaran dock. Saat `prefers-reduced-motion` aktif, transisi non-esensial ditiadakan. Konten dan tautan tetap terlihat ketika JavaScript atau animasi gagal.
- **Aksesibilitas:** landmark `<nav>`, label teks yang dapat dibaca, indikator fokus yang jelas, target sentuh memadai, dan tautan kontak yang tidak menuju placeholder. Penanda section aktif otomatis belum termasuk tahap pertama.

## Implementasi navbar tahap pertama

File yang disentuh:

1. `src/components/navbar.tsx` — mengganti dock dengan panel navigasi dan tautan langsung.
2. `src/app/layout.tsx` — menempatkan navbar di atas konten, memuat Clash Display lokal, dan menetapkan tema gelap untuk MVP; pilihan tema menunggu fase berikutnya.
3. `src/app/globals.css` — token warna/typografi dan offset gulir untuk anchor agar tidak tersembunyi di balik navbar.

`src/data/resume.tsx` masih memasok identitas template untuk Hero dan metadata. Mengubah `DATA.name` sekarang juga akan mengubah bagian di luar navbar; karena itu perubahan data profil menyeluruh menunggu tahap konten. Navbar tahap pertama dapat memakai identitas singkat yang disetujui langsung di komponennya. Tautan sosial contoh tidak ditampilkan.

## Kriteria review navbar

- Identitas dan tiga jalur utama mudah dipahami tanpa tooltip.
- Tautan bekerja dari `/` dan dari rute `/blog` yang sudah ada.
- Tidak ada tautan sosial atau kontak contoh yang tampil sebagai data Arya.
- Lebar 320 px hingga desktop tidak overflow; konten tidak tertutup navbar.
- Keyboard, fokus, kontras, dan reduced motion diperiksa saat implementasi.
- Hasil visual desktop dan ponsel ditunjukkan untuk disetujui sebelum beralih ke Hero.

**Catatan review tahap awal:** navbar pill, font judul, dan warna navy/biru telah diterapkan. Pemeriksaan visual desktop dan ponsel tetap menjadi pekerjaan review.

## Riset foto Arya untuk alur scroll

Sumber lokal `local-assets/profile/arya.png` (899 × 1599 px, sekitar 2,1 MB, RGB tanpa transparansi). Foto asli menampilkan Arya di luar ruangan dengan latar pohon; wajah berada di bagian tengah atas dan ada ruang kosong besar di atas kepala. Saat riset ini ditulis, foto belum dipakai pada Hero.

**Usulan untuk ditinjau:** tampilkan foto sebagai bingkai potret yang lebih besar di Hero, dengan potongan yang menempatkan wajah di sepertiga atas. Saat desktop di-scroll menuju About, bingkai yang sama bergeser dan sedikit mengecil ke posisi tetap di About; teks About muncul setelah foto mencapai posisinya. Gerak mengikuti posisi scroll sehingga bisa dibalik saat naik. Ponsel, layar pendek, pembesaran teks, dan `prefers-reduced-motion` memakai susunan foto dan teks biasa tanpa penahanan scroll.

Ide gerak diambil dari [portofolio Rafi](https://github.com/rahmatrafii/portofolio), tetapi komponennya tidak disalin karena layout dan aset Arya berbeda. Pada tahap riset, foto asli dipakai sebagai bingkai potret. Aset dan tata letak Hero terbaru dicatat pada checkpoint di akhir dokumen.

## Isi awal untuk review

- Nama, fokus Blue Team/Linux/Python, pendidikan UIN Malang sejak 2024, dan keanggotaan HMPS Encoder sejak Juni 2025 diambil dari [profil LinkedIn publik Arya](https://id.linkedin.com/in/arya-kharisudin-irfani-055311328) dan draft PRD yang diberikan pemilik.
- Empat proyek adalah kandidat dari PRD pemilik. Tanggal, tautan demo, repository, kontribusi personal, dan screenshot belum ditampilkan karena buktinya belum tersedia di workspace.
- Email publik, tautan GitHub yang ingin dipublikasikan, CV publik, rincian ETH, bukti proyek, dan tautan kredensial individual masih menunggu data pemilik. Halaman blog contoh dialihkan ke beranda sampai ada tulisan Arya sendiri.
- `NEXT_PUBLIC_SITE_URL` perlu diisi dengan domain final sebelum rilis; selama pengembangan, metadata memakai `http://localhost:3000`.
- Navbar boleh membungkus baris pada layar sempit. Di bawah 640 px, navbar tidak sticky agar ukuran yang bertambah saat zoom tidak menutup konten.

## Riwayat implementasi 19 November 2026

- Foto Arya tampil dalam bingkai pada alur Hero–About. Di desktop, posisi bingkai mengikuti scroll dan sedikit merespons pointer; pada perangkat sentuh dan saat reduced motion, tata letak tetap terbaca tanpa efek tersebut.
- Pendidikan dan pengalaman ditata berdampingan mengikuti screenshot lokal `local-assets/references/Eka Wahyu/pengalaman.png`. Keduanya menampilkan jalur bernomor, identitas, peran, dan tanggal. Pada layar sempit keduanya bertumpuk. Data yang tampil saat catatan ini dibuat hanya UIN Malang dan HMPS Encoder.
- Tiga sertifikat yang judul, penerbit, dan tanggalnya terlihat di [LinkedIn publik Arya](https://id.linkedin.com/in/arya-kharisudin-irfani-055311328) tampil sebagai kartu. Bentuk folder terinspirasi kartu proyek [Rafi](https://github.com/rahmatrafii/portofolio); repo Rafi tidak memiliki section sertifikat khusus.
- Akun [aryapulosari-design](https://github.com/aryapulosari-design) dan repo `porto` ditinjau sebagai referensi desain dan proyek, bukan bukti sertifikat independen.
- Build produksi dan lint berhasil. Timeline sudah terlihat rapi di browser lebar sekitar 1535 px dan jendela sempit sekitar 529 px. Layar 320 px, navigasi keyboard, crop foto, dan kelancaran gerak scroll masih perlu ditinjau sebelum menganggap tahap ini final.

## Lanjutan 19 November 2026: sumber data dan navigasi

- Arya memberikan rincian peran **Lead, Ethernet-0 Community, mulai Oktober 2026** dan menjelaskan bahwa Ethernet-0 adalah komunitas cybersecurity di UIN Maulana Malik Ibrahim Malang. Entri ini ditambahkan di atas HMPS pada timeline. Profil LinkedIn publik yang terindeks pencarian masih versi lama, jadi rincian peran baru bersumber dari keterangan langsung pemilik.
- [Profil GitHub Arya](https://github.com/aryapulosari-design/aryapulosari-design) menyajikan katalog proyek. Repo [CTF-ETH](https://github.com/aryapulosari-design/CTF-ETH) menunjukkan platform CTF kelas berbasis Laravel; [UIN-CSIRT Ticketing](https://github.com/aryapulosari-design/Sistem-Informasi-Tiket-Cyber-Sec) menunjukkan sistem tiket insiden dengan mode demo dan pembagian kontribusi tim; [LangitKita](https://github.com/aryapulosari-design/UTS-Mobile-Praktikum) menunjukkan aplikasi cuaca Flutter. Ketiganya kandidat kuat untuk kurasi Projects berikutnya, tetapi klaim hasil dan demo publik belum diuji pada tahap ini.
- Akun GitHub publik telah ditautkan pada Contact. Empat kartu proyek lama dari PRD belum diganti agar kurasi proyek tetap menjadi tahap tersendiri.
- Setelah Arya mengirim `local-assets/references/nafbar contoh.png`, navbar diubah menjadi dock transparan di tengah dengan badge AK, enam tujuan navigasi, pill biru untuk section aktif, serta menu ponsel bernomor yang dapat ditutup dengan Escape. Sesuai revisi berikutnya, dock bersembunyi saat scroll turun dan kembali saat scroll naik; pill aktif muncul singkat tanpa animasi gerak yang berat. Efek mengikuti preferensi reduced motion.
- Latar Pengalaman memakai [SVG kontur statis](../public/journey-contours.svg) dengan garis samar di tepi, terinspirasi screenshot Eka dan prinsip latar ringan dari [contour-field](https://github.com/AlexGordienko/contour-field). Tidak ada paket atau animasi latar tambahan.
- Build dan lint berhasil. Navigasi baru terdeteksi pada preview lokal. Pemeriksaan browser berikutnya memperlihatkan dock hilang saat scroll turun dan muncul lagi saat scroll naik. Uji keyboard, lebar 320 px, dan penilaian estetika akhir masih menunggu review pemilik.

## Checkpoint terakhir: Hero, foto, dan navbar

- Foto Hero diganti dari sumber lokal `local-assets/profile/Young Man in Black Utility Jacket.png`. Aset yang dipakai situs adalah [`public/arya-cutout.png`](../public/arya-cutout.png), dirujuk melalui `avatarUrl` di `src/data/resume.tsx`. Foto asli di `local-assets/profile/arya.png` tetap lokal dan tidak dipakai Hero. Salinan lama `public/arya.png` sudah dihapus.
- Hero di `src/app/page.tsx` kini menyusun judul di kiri, foto di tengah, dan deskripsi beserta tombol Projects di kanan pada desktop. Tombol About berada di bawah judul. Pada layar sempit, konten tersusun satu kolom. `src/components/scroll-portrait.tsx` tetap mengatur foto yang merespons scroll dan pointer dengan penanganan reduced motion.
- Foto tidak lagi memakai bingkai penuh; `src/app/globals.css` menampilkan potongan transparan dengan fade di bagian bawah. Inspeksi browser pertama menunjukkan foto tengah masih terlalu kecil dan deskripsi kanan terlalu rendah. Perubahan CSS paling akhir mengatur perataan Hero ke atas dan memperbesar foto dengan `scale(1.3)`. **Tampilan setelah perubahan ini belum diperiksa lagi secara visual.**
- Navbar di `src/components/navbar.tsx` telah diperiksa di browser: saat scroll turun ke Experience, dock tersembunyi; saat scroll naik menuju About, dock muncul kembali. Enam tujuan navigasi, penanda section aktif, menu ponsel, dan dukungan reduced motion sudah ada. Pemeriksaan lebar 320 px dan navigasi keyboard belum selesai.
- Sebelum perubahan CSS terakhir, build berhasil. Hasil pemeriksaan terbaru dan kendala build ada pada bagian **Mulai dari sini saat melanjutkan** di atas.

**Preview lokal:** buka folder `C:\File Arya\porto gwww\portfolio` dan jalankan `npm run dev` bila server belum aktif. Pemeriksaan browser otomatis pada 20 November tidak tersedia karena alat kontrol browser gagal tersambung.
