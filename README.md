# Portofolio Arya Kharisudin Irfani

Portofolio pribadi berbasis Next.js yang menampilkan profil, pendidikan, pengalaman, proyek, sertifikat, dan kontak Arya. Pengalaman yang ditampilkan mencakup Blue Team di PTIPD UIN Malang dan Velkira, agensi pengembangan web dan aplikasi mobile terintegrasi AI.

## Teknologi

Next.js 16, React 19, TypeScript, dan Tailwind CSS 4. Data profil disimpan di `src/data/resume.tsx`; proyek ini tidak memakai database.

## Menjalankan secara lokal

Gunakan Node.js **20.9 atau lebih baru** dan pnpm:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000). Periksa kode dan build dengan:

```bash
pnpm lint
pnpm build
```

Untuk melihat build produksi, jalankan `pnpm start`.

## Mengubah konten

| Bagian | Lokasi |
| --- | --- |
| Profil, pengalaman, pendidikan, keahlian, proyek, sertifikat, kontak | [`src/data/resume.tsx`](./src/data/resume.tsx) |
| Susunan halaman utama | [`src/app/page.tsx`](./src/app/page.tsx) |
| Komponen tampilan | [`src/components/`](./src/components/) |
| Warna dan gaya | [`src/app/globals.css`](./src/app/globals.css) |
| Berkas sertifikat publik | [`public/certificates/`](./public/certificates/) |
| PRD dan referensi desain | [`docs/`](./docs/) |

Foto sumber, CV, sertifikat asli, dan screenshot referensi disimpan di `local-assets/` pada komputer pemilik. Git mengabaikan folder ini. Lihat [catatan referensi desain](./docs/references.md) untuk daftar sumber.

Untuk menambah sertifikat, simpan berkas di `public/certificates/`, lalu tambahkan judul, penerbit, tanggal, dan tautan di `DATA.certificates`. Semua berkas dalam `public/` bisa diakses pengunjung. Folder sumber CV dan foto pribadi dikecualikan dari Git; foto yang dipakai situs berada di `public/arya-cutout.png`. Alamat email pada bagian Contact juga tampil publik.

## Konfigurasi publikasi

Isi `NEXT_PUBLIC_SITE_URL` dengan URL situs yang sudah dipublikasikan, misalnya `https://contoh.com`, sebelum build produksi. Nilai ini dipakai untuk metadata dan gambar Open Graph. Jika kosong, situs memakai `http://localhost:3000`.

## Kredit

Fondasi proyek berasal dari [Magic UI Portfolio](https://github.com/magicuidesign/portfolio) dan dikembangkan untuk Arya. Lisensi template tetap tercantum dalam [LICENSE](./LICENSE).

Foto sampul **Security & Networking** oleh [Sergei Starostin di Pexels](https://www.pexels.com/photo/network-servers-on-an-enclosure-6466141/) ([lisensi](https://www.pexels.com/license/)). Foto sampul **Python & Data** oleh [Stephen Dawson di Unsplash](https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs) ([lisensi](https://unsplash.com/license)).
