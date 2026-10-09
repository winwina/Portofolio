# Wina Wulansari — Portofolio Personal

Website portofolio personal modern untuk **Wina Wulansari**, seorang Guru
Informatika asal Tasikmalaya. Dibangun dengan HTML, CSS, dan JavaScript murni
(tanpa framework), bertema _dark modern developer portfolio_ dengan background
gradient animasi, efek glassmorphism, floating UI, dan animasi yang halus.

> **Status:** Fase 1 — Navbar, Hero, dan About section.

## ✨ Fitur (Fase 1)

- Navbar fixed dengan efek blur saat scroll, active-link highlighting, dan menu mobile.
- Hero fullscreen: label "available for opportunities", typewriter effect,
  placeholder foto profil dengan floating badges, tombol CTA, dan partikel glowing.
- About section: biografi profesional, tag keahlian, highlight pengalaman, dan
  animated statistics cards (count-up on scroll).
- Animated gradient background + grid + vignette.
- Responsif penuh: Mobile, Tablet, Desktop.
- Menghormati `prefers-reduced-motion`.

## 📁 Struktur Folder

```
Portofolio/
├── index.html            # Entry point, memuat background + mount points
├── README.md
├── components/           # Komponen UI reusable (render functions)
│   ├── navbar.js
│   ├── hero.js
│   └── about.js
├── pages/                # Placeholder untuk halaman tambahan (opsional)
├── assets/               # Gambar, resume, dan aset statis lainnya
├── css/
│   ├── main.css          # Orchestrator @import
│   ├── variables.css     # Design tokens (warna, spacing, tipografi)
│   ├── base.css          # Reset & global
│   ├── animations.css    # Keyframes & scroll-reveal
│   ├── background.css     # Gradient orbs + particles
│   ├── components.css    # Button, glass, chip, tag
│   ├── navbar.css
│   ├── hero.css
│   └── about.css
└── js/
    ├── main.js           # Entry: mount komponen + init interaksi
    ├── config.js         # Sumber data tunggal (profil, stats, dll.)
    ├── background.js     # Generator partikel
    ├── typewriter.js     # Efek typewriter hero
    ├── navbar.js         # Toggle menu mobile
    └── scroll.js         # Scroll reveal, counter, navbar state
```

## 🎨 Tema & Desain

- **Warna aksen:** indigo (`#7c86ff`), teal (`#3ad6c7`), ungu (`#c084fc`) dengan soft glow.
- **Tipografi:** Space Grotesk (judul) + Inter (body).
- **Efek:** glassmorphism, floating badges, gradient teks, hover glow, shine sweep.

## 🚀 Menjalankan Secara Lokal

Karena menggunakan ES Modules, buka lewat server statis (bukan `file://`):

```bash
# Python
python -m http.server 5173

# atau Node (npx)
npx serve .
```

Lalu buka `http://localhost:5173`.

## 🧩 Mengganti Foto Profil

Simpan foto di `assets/images/`, lalu ganti blok `.profile__placeholder` di
`components/hero.js` dengan `<img src="assets/images/wina.jpg" alt="Wina Wulansari" />`.

## 👤 Kontak

- 📍 Tasikmalaya, Indonesia
- ✉️ winawsari@gmail.com
- 📞 08512345678
- 🌐 www.winawsari.vercel.app
- 💻 github.com/winwina
- 🧵 threads.com/buwinaa

---

_Dibuat dengan ❤️ untuk pendidikan Informatika._
