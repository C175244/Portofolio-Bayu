# 🎓 Portfolio Bayu Alfatir Aji Utomo

Website portofolio profesional yang dinamis, dwibahasa (Indonesia & Inggris), dengan desain terinspirasi dari sistem desain NVIDIA.

---

## ✨ Fitur Utama

- **Dwibahasa**: Beralih antara Bahasa Indonesia dan English dengan satu klik
- **Desain NVIDIA-inspired**: Warna hijau `#76b900`, geometri tajam (2px radius), dark/light mode surfaces
- **Data Terpisah**: Semua konten (skill, proyek, sertifikat) ada di `src/data.js` — mudah diedit!
- **Responsive**: Desktop, tablet, dan mobile-friendly
- **Single Page Application**: Navigasi smooth scroll antar section
- **No Form Contact**: Hanya ikon sosial media yang langsung mengarah ke platform

---

## 📁 Struktur Folder

```
portfolio-bayu/
├── public/
│   └── vite.svg              # Favicon (bisa diganti)
├── src/
│   ├── data.js               # ⭐ FILE KONFIGURASI UTAMA - Edit data di sini!
│   ├── LanguageContext.jsx   # Provider untuk switch bahasa ID/EN
│   ├── Navbar.jsx            # Navigasi fixed top
│   ├── Hero.jsx              # Section beranda (dark)
│   ├── About.jsx             # Tentang saya
│   ├── Skills.jsx            # Keahlian (cards grid)
│   ├── Portfolio.jsx         # Proyek (cards grid)
│   ├── Certificates.jsx      # Sertifikat (gallery)
│   ├── Contact.jsx           # Kontak & sosial media
│   ├── Footer.jsx            # Footer (dark)
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point React
│   └── index.css             # Tailwind + custom styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # ⭐ Konfigurasi warna NVIDIA
├── postcss.config.js         # PostCSS setup
└── .gitignore                # Git ignore rules
```

---

## 🚀 Panduan Setup (Step by Step)

### Persyaratan
- **Node.js** versi 18 atau lebih baru
- **npm** (sudah include dengan Node.js)
- **Git** (untuk deployment ke Vercel/GitHub Pages)
- **Code Editor**: VS Code (recommended) atau bisa juga di HP

### Langkah 1: Install Node.js

**Di Komputer/Laptop:**
1. Buka https://nodejs.org
2. Download versi **LTS** (Recommended)
3. Install seperti aplikasi biasa
4. Buka Terminal/CMD/PowerShell, ketik:
   ```bash
   node -v
   npm -v
   ```
   Kalau muncul versi, berarti sudah terinstall.

**Di HP Android:**
1. Install aplikasi **Termux** dari Play Store / F-Droid
2. Buka Termux, ketik:
   ```bash
   pkg update && pkg upgrade
   pkg install nodejs git
   node -v
   ```

### Langkah 2: Buat Project

**Di Komputer:**
```bash
# Buka terminal, masuk ke folder tempat kamu mau simpan project
cd Documents

# Buat project dengan Vite
npm create vite@latest portfolio-bayu -- --template react

# Masuk ke folder project
cd portfolio-bayu

# Install dependencies
npm install

# Install Tailwind CSS dan icon library
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

# Inisialisasi Tailwind
npx tailwindcss init -p
```

**Di HP (Termux):**
```bash
# Sama seperti di komputer
cd ~
npm create vite@latest portfolio-bayu -- --template react
cd portfolio-bayu
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

### Langkah 3: Salin File

1. **Hapus semua file bawaan** di folder `src/` kecuali `main.jsx`
2. **Salin semua file** yang sudah saya buat ke folder project:
   - `src/data.js`
   - `src/LanguageContext.jsx`
   - `src/Navbar.jsx`
   - `src/Hero.jsx`
   - `src/About.jsx`
   - `src/Skills.jsx`
   - `src/Portfolio.jsx`
   - `src/Certificates.jsx`
   - `src/Contact.jsx`
   - `src/Footer.jsx`
   - `src/App.jsx`
   - `src/index.css`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `vite.config.js`
   - `index.html`
   - `.gitignore`
   - `public/vite.svg`

### Langkah 4: Jalankan Project

```bash
npm run dev
```

Buka browser, ketik: `http://localhost:5173`

---

## 🎨 Cara Mengedit Data

### 1. Ganti Foto Profil
Buka `src/data.js`, cari:
```javascript
photoUrl: "https://images.unsplash.com/..."
```
Ganti dengan URL foto kamu, atau upload ke Imgur/Cloudinary lalu paste linknya.

### 2. Edit Data Pribadi
Di bagian `profile` di `src/data.js`:
```javascript
export const profile = {
  name: "Bayu Alfatir Aji Utomo",
  nickname: "Bayu",
  title: "The Future Engineer",
  status: "Pelajar di SMAN 104 Jakarta",
  location: "Ciracas, Jakarta Timur, Indonesia",
  careerFocus: "AI Engineer",
  email: "email-kamu@example.com",      // Ganti!
  whatsapp: "+6281234567890",           // Ganti!
  linkedin: "https://linkedin.com/in/...", // Ganti!
  github: "https://github.com/...",     // Ganti!
  instagram: "https://instagram.com/...",  // Ganti!
  photoUrl: "...",
};
```

### 3. Tambah Skill Baru
Di bagian `skillsData` di `src/data.js`, tambahkan object baru:
```javascript
{
  id: 9,  // id berikutnya
  name: "Nama Skill",
  category: "Kategori",
  level: "Beginner",  // atau "Intermediate" atau "Advanced"
  description: "Deskripsi skill ini...",
  icon: "NamaIconLucide",  // Cek icon di https://lucide.dev
}
```

### 4. Tambah Proyek Baru
Di bagian `portfolioData`:
```javascript
{
  id: 4,
  title: "Nama Proyek",
  titleEn: "Project Name",
  description: "Deskripsi Indonesia...",
  descriptionEn: "English description...",
  status: "completed",  // atau "draft"
  tags: ["Tag1", "Tag2"],
  image: "URL gambar proyek",
  github: "https://github.com/...",  // null kalau belum ada
  demo: "https://...",  // null kalau belum ada
  note: "Catatan...",
  noteEn: "Note...",
}
```

### 5. Tambah Sertifikat Baru
Di bagian `certificatesData`:
```javascript
{
  id: 4,
  title: "Nama Sertifikat",
  titleEn: "Certificate Name",
  issuer: "Nama Penerbit",
  date: "2026",
  description: "Deskripsi...",
  descriptionEn: "Description...",
  image: "URL gambar sertifikat",
  type: "academic",  // "academic", "organization", atau "course"
}
```

### 6. Edit Terjemahan Bahasa
Di bagian `translations` di `src/data.js`, kamu bisa edit teks untuk bahasa Indonesia (`id`) dan English (`en`).

---

## 🌐 Deployment (Hosting Gratis)

### Opsi 1: Vercel (Recommended)

**Langkah:**
1. Daftar di https://vercel.com pakai akun GitHub
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login:
   ```bash
   vercel login
   ```
4. Deploy:
   ```bash
   vercel
   ```
5. Ikuti instruksi, nanti akan dapat URL seperti `https://portfolio-bayu.vercel.app`

**Update website:**
```bash
vercel --prod
```

### Opsi 2: GitHub Pages

**Langkah:**
1. Buat repository baru di GitHub (misal: `portfolio-bayu`)
2. Push code ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio-bayu.git
   git push -u origin main
   ```
3. Buka repository di GitHub → Settings → Pages
4. Pilih "Deploy from a branch" → pilih "main" → folder "/ (root)"
5. Tunggu 1-2 menit, website akan live di `https://USERNAME.github.io/portfolio-bayu`

**Note untuk GitHub Pages:**
- Edit `vite.config.js`, ganti `base: './'` menjadi `base: '/nama-repo/'`
- Contoh: kalau repo namanya `portfolio-bayu`, maka `base: '/portfolio-bayu/'`

### Opsi 3: Netlify

1. Daftar di https://netlify.com
2. Drag & drop folder `dist/` (hasil build) ke dashboard Netlify
3. Atau connect ke GitHub repository

**Build untuk Netlify:**
```bash
npm run build
```
Folder `dist/` akan terbuat, upload folder itu.

---

## 📱 Alternatif: Buat di HP (Tanpa Coding)

Kalau kamu tidak punya laptop atau ingin versi yang lebih simpel, gunakan platform no-code:

### 1. Google Sites (Gratis)
- Buka https://sites.google.com di browser HP
- Pilih template kosong
- Tambah section: Header, About, Projects, Contact
- Custom warna: Background hitam `#000000`, aksen hijau `#76b900`
- Publish ke URL gratis: `https://sites.google.com/view/nama-kamu`

### 2. Carrd.co (Gratis)
- Buka https://carrd.co di HP
- Pilih template single-page
- Edit teks, tambah link sosial media
- Custom warna sesuai tema NVIDIA
- Publish ke subdomain gratis

### 3. Notion + Super.so
- Buat page Notion untuk portofolio
- Gunakan Super.so untuk custom domain
- Tapi ini berbayar untuk fitur penuh

### 4. GitHub Codespaces (Coding di HP)
- Buka https://github.com di browser HP
- Buat repository baru
- Klik tombol "." (titik) di keyboard → buka VS Code web
- Atau pakai CodeSpaces (gratis 60 jam/bulan)
- Coding langsung di browser HP!

---

## 🛠 Troubleshooting

### Error "Cannot find module"
```bash
npm install
```

### Error "command not found: vite"
```bash
npm install
npx vite
```

### Gambar tidak muncul
- Pastikan URL gambar valid (buka di browser dulu)
- Kalau pakai gambar lokal, taruh di folder `public/` lalu panggil dengan `/nama-gambar.jpg`

### Tailwind tidak jalan
- Pastikan `tailwind.config.js` dan `postcss.config.js` sudah benar
- Pastikan `src/index.css` sudah ada `@tailwind` directives

---

## 📄 License

Free to use and modify for personal portfolio.

---

**Dibuat dengan ❤️ menggunakan React + Vite + Tailwind CSS**
