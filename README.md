# 🌟 Atomy Member Website

Website informasi member Atomy Indonesia — profesional, gratis, mudah dikelola.

---

## 📁 Struktur Folder

```
atomy-website/
├── index.html              ← Halaman utama website
├── admin/
│   ├── index.html          ← Admin Panel (Decap CMS)
│   └── config.yml          ← Konfigurasi CMS
├── content/
│   ├── posts/              ← Artikel blog (.md)
│   ├── products/           ← Data produk (.md)
│   ├── testimonials/       ← Testimoni member (.md)
│   └── settings/
│       └── general.json    ← Pengaturan website
├── assets/
│   └── images/uploads/     ← Gambar yang diupload
├── build.js                ← Script build otomatis
├── package.json
└── netlify.toml            ← Konfigurasi Netlify
```

---

## 🚀 Cara Deploy (Langkah demi Langkah)

### 1. Upload ke GitHub

1. Buka [github.com](https://github.com) → Login
2. Klik **"New repository"**
3. Nama repo: `atomy-website` → klik **Create repository**
4. Upload semua file ini ke repository tersebut
   - Bisa drag & drop lewat browser
   - Atau gunakan GitHub Desktop (lebih mudah)

### 2. Deploy ke Netlify

1. Buka [netlify.com](https://netlify.com) → Login dengan GitHub
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **GitHub** → pilih repo `atomy-website`
4. Build settings (sudah otomatis dari netlify.toml):
   - Build command: `node build.js`
   - Publish directory: `.`
5. Klik **"Deploy site"**
6. Tunggu 1-2 menit → website Anda sudah online! 🎉

### 3. Aktifkan Admin Panel (Netlify Identity)

1. Di dashboard Netlify → pilih website Anda
2. Masuk ke **Site configuration** → **Identity**
3. Klik **"Enable Identity"**
4. Scroll ke bawah → **Git Gateway** → klik **"Enable Git Gateway"**
5. Kembali ke **Identity** → **"Invite users"** → masukkan email Anda
6. Cek email → klik link undangan → buat password

### 4. Login ke Admin Panel

Buka: `https://nama-website-anda.netlify.app/admin`

Login dengan email & password tadi → selesai! ✅

---

## ✏️ Cara Mengelola Konten

### Tulis Artikel Baru
1. Buka `/admin` → klik **"📝 Artikel / Blog"**
2. Klik **"New Artikel / Blog"**
3. Isi judul, pilih kategori, upload gambar, tulis isi
4. Klik **"Publish"** → otomatis update dalam 1-2 menit

### Tambah Testimoni
1. Admin → **"⭐ Testimoni"** → **"New Testimoni"**
2. Isi nama, kota, produk, rating, cerita
3. Klik **Publish**

### Tambah Produk
1. Admin → **"🛍️ Produk Unggulan"** → **"New Produk Unggulan"**
2. Upload foto, isi detail
3. Klik **Publish**

### Update Info Website
1. Admin → **"⚙️ Pengaturan Website"** → **"Info Umum"**
2. Update nama, nomor WhatsApp, link pendaftaran
3. Klik **Save**

---

## 🎨 Kustomisasi

### Ganti Warna
Di `index.html`, cari bagian `:root` dan ubah:
```css
--gold: #C9A84C;        /* Warna emas utama */
--dark: #0D0D0D;        /* Warna gelap */
```

### Ganti Nama/Tagline
Edit `content/settings/general.json` atau lewat Admin Panel

---

## 💡 Tips

- Tambah artikel minimal 1x seminggu untuk menjaga website tetap aktif
- Upload foto produk berkualitas tinggi agar terlihat profesional  
- Kumpulkan testimoni dari member untuk meningkatkan kepercayaan
- Selalu arahkan ke website resmi Atomy untuk pemesanan

---

## 🆘 Bantuan

Jika ada kendala teknis, cek:
- [Dokumentasi Netlify](https://docs.netlify.com)
- [Dokumentasi Decap CMS](https://decapcms.org/docs)
