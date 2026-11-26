# Referensi portofolio Arya

Dokumen ini mencatat sumber desain portofolio Arya. Kode utama ada di `src/`. Keputusan dan progres dicatat di [PRD](./PRD.md). Berkas screenshot tersimpan di `local-assets/references/` dan dikecualikan dari Git.

| Sumber | Lokasi | Yang dijadikan acuan | Status |
| --- | --- | --- | --- |
| Eka Wahyu Maulidan | [Situs](https://ekawahyu-portofolio.vercel.app/) dan screenshot lokal `local-assets/references/Eka Wahyu/` | Aksen biru, hierarki teks, serta timeline pendidikan dan pengalaman | Warna dan timeline dua kolom diadaptasi; navbar kemudian didesain ulang sesuai masukan Arya. |
| Nim | [Repository](https://github.com/ibelick/nim), [demo](https://nim-fawn.vercel.app/), dan folder lokal `nim-reference` | Tata letak minimal, ruang antarelemen, dan tipografi yang tenang | Rujukan desain; kode Nim tidak digabungkan. |
| dleer-portfolio | [Repository](https://github.com/dleerdefi/dleer-portfolio) dan folder lokal `linux-reference` | Bahasa visual Linux/Hyprland, terutama panel dan detail sistem yang punya fungsi | Belum diterapkan ke navbar saat ini; dapat ditinjau saat mengerjakan bagian Linux. |
| Rafi Portfolio | [Repository](https://github.com/rahmatrafii/portofolio) | Alur Hero ke About, penanda section aktif, dan bentuk kartu seperti folder | Alur foto, penanda navbar, dan bentuk kartu sertifikat diadaptasi. Repo Rafi tidak memiliki section sertifikat tersendiri. |
| Arya Pulosari Design | [Akun GitHub](https://github.com/aryapulosari-design) dan [repo porto](https://github.com/aryapulosari-design/porto) | Arah editorial, aksen biru, dan katalog karya pemilik | Dipakai sebagai rujukan desain dan penelusuran proyek; isi repo bukan bukti sertifikat independen. |
| contour-field | [Repository](https://github.com/AlexGordienko/contour-field) | Prinsip garis kontur statis yang tidak mengganggu konten | Pola SVG sederhana dibuat sendiri untuk latar timeline; paketnya tidak dipasang. |
| Magic UI Portfolio | [Repository](https://github.com/magicuidesign/portfolio) | Fondasi komponen Next.js portofolio | Sudah menjadi dasar kode di `portfolio`; lihat [lisensi](../LICENSE). |
| VELKIRA 10 Skills | Paket lokal `velkira-10-skills` di folder `skilss` | Panduan UX, aksesibilitas, implementasi frontend, dan verifikasi | Dipakai untuk audit portofolio. |
| Codex Skills Ringkas | Paket lokal `Codex_Skills` di folder `Codex_Skills_Ringkas` | Pencarian UI/UX, penelusuran masalah, dan pengujian Playwright | Dipakai untuk audit portofolio. |

## Screenshot lokal yang tersedia di komputer Arya

- `local-assets/references/Eka Wahyu/Nafbar.png` — navbar dan Hero
- `local-assets/references/nafbar contoh.png` — contoh navbar pilihan Arya
- `local-assets/references/Eka Wahyu/pengalaman.png` — timeline pengalaman
- `local-assets/references/Eka Wahyu/sertifikat.png` — kartu sertifikat
- `local-assets/references/Eka Wahyu/Screenshot 2026-11-18 211619.png` — screenshot tambahan

Giats pernah disebut sebagai referensi animasi, tetapi belum ada tautan atau file yang jelas di workspace. Tambahkan sumbernya sebelum menjadikannya acuan implementasi.

## Catatan untuk pengalaman scroll

- Screenshot Eka menunjukkan pergantian fokus yang jelas: Hero, timeline pengalaman, lalu kartu proyek/sertifikat. Screenshot tidak membuktikan animasi scroll situsnya.
- Kode Nim memakai gerak masuk singkat pada section dan jarak antarseksi yang lapang. Ini cocok sebagai acuan intensitas gerak, bukan untuk menyalin seluruh layout.
- Kode dleer memakai penanda posisi dan navigasi section di ponsel. Idenya berguna saat isi portofolio sudah lebih panjang; pada halaman Arya sekarang, komponen serupa berpotensi menambah keramaian.
- About, Pengalaman, Projects, dan Certificates sekarang memakai reveal berbasis viewport dengan fallback konten tetap terbaca. Foto bergerak mengikuti scroll dan pointer pada desktop, sementara navbar menandai section aktif. Efek ini masih perlu ditinjau secara visual pada desktop dan ponsel.
- Repo Rafi menghubungkan posisi scroll aktual ke foto Hero→About, timeline, dan galeri. Di situs Arya, implementasi dibuat lebih ringkas sesuai konten yang tersedia. Tidak ada kode atau aset Rafi yang disalin.
