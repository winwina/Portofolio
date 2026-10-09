/* ============================================
   About component (reusable)
   ============================================ */

window.Portfolio = window.Portfolio || {};
window.Portfolio.components = window.Portfolio.components || {};

(function () {
  var stroke =
    'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  var HIGHLIGHTS = [
    {
      icon:
        '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M2 8v6m20-6v6M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"/></svg>',
      title: "Pendidik Informatika",
      desc: "Mengajar dengan pendekatan logis, kreatif, dan relevan dengan dunia digital.",
    },
    {
      icon:
        '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 2z"/><path d="M9 18h6m-5 3h4"/></svg>',
      title: "Computational Thinking",
      desc: "Menumbuhkan kemampuan memecahkan masalah dan berpikir kritis murid.",
    },
    {
      icon: '<svg viewBox="0 0 24 24" ' + stroke + '><path d="m9 8-4 4 4 4m6-8 4 4-4 4"/></svg>',
      title: "Dasar Pemrograman",
      desc: "Memperkenalkan logika pemrograman sebagai bekal masa depan.",
    },
  ];

  var TAGS = [
    "Pemrograman Dasar",
    "Computational Thinking",
    "Literasi Digital",
    "Problem Solving",
    "Teknologi Pendidikan",
    "Kurikulum Informatika",
  ];

  window.Portfolio.components.renderAbout = function renderAbout() {
    var stats = window.Portfolio.config.stats;

    var tags = TAGS.map(function (t) {
      return '<span class="tag">' + t + "</span>";
    }).join("");

    var highlights = HIGHLIGHTS.map(function (h, i) {
      return (
        '<article class="highlight" data-reveal data-reveal-delay="' + (i + 2) + '">' +
        '<span class="highlight__icon">' + h.icon + "</span>" +
        "<div>" +
        '<h3 class="highlight__title">' + h.title + "</h3>" +
        '<p class="highlight__desc">' + h.desc + "</p>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    var statCards = stats
      .map(function (s, i) {
        return (
          '<div class="stat-card" data-reveal data-reveal-delay="' + (i + 1) + '">' +
          '<div class="stat-card__value">' +
          '<span class="count" data-target="' + s.value + '">0</span>' +
          '<span class="suffix">' + s.suffix + "</span>" +
          "</div>" +
          '<p class="stat-card__label">' + s.label + "</p>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<section class="about section" id="about">' +
      '<div class="container">' +
      "<div data-reveal>" +
      '<span class="eyebrow">Tentang Saya</span>' +
      '<h2 class="section-title">Mendidik lewat logika &amp; teknologi</h2>' +
      "</div>" +
      '<div class="about__layout">' +
      '<div class="about__bio">' +
      '<p data-reveal data-reveal-delay="1"><strong>Wina Wulansari</strong> adalah seorang pendidik berbakat yang berdedikasi di bidang pendidikan Informatika. Rasa ingin tahu yang tinggi terhadap perkembangan dunia digital dan gairahnya yang mendalam terhadap teknologi menjadi pendorong utamanya dalam menginspirasi generasi muda.</p>' +
      '<p data-reveal data-reveal-delay="2">Sebagai seorang guru Informatika, Wina tidak hanya mengajar, tetapi juga berupaya menumbuhkan logika berpikir kritis, kemampuan memecahkan masalah (<strong>computational thinking</strong>), dan pemahaman pemrograman pada murid-muridnya. Ia percaya bahwa teknologi adalah kunci penting untuk membuka peluang masa depan.</p>' +
      '<div class="about__tags" data-reveal data-reveal-delay="3">' + tags + "</div>" +
      '<div class="about__highlights">' + highlights + "</div>" +
      "</div>" +
      '<aside class="stats" aria-label="Statistik pengalaman">' + statCards + "</aside>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  };
})();
