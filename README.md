# Portal Web Desa Sukamanah

## Struktur Folder

```text
portal-web-desa-sukamanah/
├── index.html
├── tentang.html
├── dokumentasi.html
├── galeri.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── desa.png
│   ├── desa.jpeg
│   ├── kegiatan-kkl-1.jpg
│   ├── kegiatan-kkl-2.jpg
│   ├── kegiatan-kkl-3.jpg
│   ├── kegiatan-kkl-4.jpg
│   ├── kegiatan-musyawarah-1.jpeg
│   ├── kegiatan-pelatihan content creator-1.jpeg
│   ├── kegiatan-sosial-1.jpeg
│   ├── kegiatan-sosial-2.jpeg
│   ├── kegiatan-sosial-3.jpeg
│   ├── kegiatan-sosial-4.jpeg
│   ├── kegiatan-sosial-5.jpeg
│   ├── kegiatan-sosial-6.jpeg
│   └── kegiatan-sosial-7.jpg
├── assets/
│   └── (untuk aset tambahan)
├── LICENSE
└── README.md
```

## Keterangan
- `index.html`: halaman beranda.
- `tentang.html`: informasi Desa Sukamanah.
- `dokumentasi.html`: dokumentasi kegiatan.
- `galeri.html`: galeri foto.
- `css/style.css`: seluruh desain dan responsive dalam satu file CSS.
- `js/script.js`: seluruh interaksi JavaScript.
- `images/`: semua gambar website.
- `assets/`: tempat aset tambahan jika diperlukan.

Buka `index.html` untuk menjalankan website.

## Struktur CSS & JavaScript

CSS dipisahkan berdasarkan komponen agar mudah diedit:
- `style.css` — reset, variabel, tipografi, dan aturan global.
- `navbar.css` — navbar.
- `hero.css` — hero/beranda.
- `sections.css` — section umum.
- `stats.css` — statistik.
- `buttons.css` — tombol.
- `cards.css` — card.
- `page-header.css` — header halaman dalam.
- `gallery.css` — galeri dan filter.
- `contact.css` — form dan kontak.
- `footer.css` — footer.
- `modal.css` — modal.
- `animations.css` — animasi dan back-to-top.
- `responsive.css` — aturan tablet/mobile.

JavaScript juga dipisahkan berdasarkan fungsi:
- `navbar.js` — efek navbar saat scroll.
- `reveal.js` — animasi scroll reveal.
- `filter.js` — filter dokumentasi.
- `back-to-top.js` — tombol kembali ke atas.
- `contact.js` — validasi sederhana form kontak.
- `main.js` — tempat fungsi tambahan.

