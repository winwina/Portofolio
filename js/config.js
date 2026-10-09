/* ============================================
   Central site data (single source of truth)
   ============================================ */

window.Portfolio = window.Portfolio || {};

window.Portfolio.config = {
  profile: {
    name: "Wina Wulansari",
    role: "Guru Informatika",
    tagline: "Pembelajar Sepanjang Hayat",
    location: "Tasikmalaya, Indonesia",
    email: "winawsari@gmail.com",
    phone: "08512345678",
    portfolio: "www.winawsari.vercel.app",
    github: "github.com/winwina",
    threads: "threads.com/buwinaa",
    photo: "assets/images/profile.jpeg",
  },

  /* Phrases cycled by the typewriter effect in the hero */
  typewriterPhrases: [
    "Guru Informatika",
    "Pembelajar Sepanjang Hayat",
    "Pegiat Computational Thinking",
    "Penggerak Literasi Digital",
  ],

  stats: [
    { value: 8, suffix: "+", label: "Tahun mengajar Informatika" },
    { value: 500, suffix: "+", label: "Murid terbimbing" },
    { value: 20, suffix: "+", label: "Proyek kelas & workshop" },
    { value: 100, suffix: "%", label: "Dedikasi untuk pendidikan" },
  ],

  /* Skills grouped by category. `level` drives the progress bar width (%). */
  skills: [
    {
      category: "Frontend",
      icon: "layout",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "TypeScript", level: 80 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      category: "Backend",
      icon: "server",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Python", level: 88 },
        { name: "FastAPI", level: 78 },
      ],
    },
    {
      category: "Database",
      icon: "database",
      items: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 83 },
      ],
    },
    {
      category: "AI & Cloud",
      icon: "cloud",
      items: [
        { name: "OpenAI API", level: 85 },
        { name: "LangChain", level: 75 },
        { name: "Docker", level: 72 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 88 },
      ],
    },
  ],
};
