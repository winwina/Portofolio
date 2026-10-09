/* ============================================
   Navbar component (reusable)
   ============================================ */

window.Portfolio = window.Portfolio || {};
window.Portfolio.components = window.Portfolio.components || {};

window.Portfolio.components.renderNavbar = function renderNavbar() {
  var profile = window.Portfolio.config.profile;

  var NAV_ITEMS = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
  ];

  var links = NAV_ITEMS.map(function (item) {
    return '<li><a href="' + item.href + '" class="nav-link">' + item.label + "</a></li>";
  }).join("");

  return (
    '<header class="navbar" id="navbar">' +
    '<nav class="navbar__inner" aria-label="Navigasi utama">' +
    '<a href="#home" class="brand" aria-label="' + profile.name + ', beranda">' +
    '<span class="brand__mark">WW</span>' +
    '<span class="brand__name">Wina<span>.</span></span>' +
    "</a>" +
    '<button class="nav-toggle" id="navToggle" aria-label="Buka menu" aria-expanded="false" aria-controls="navLinks">' +
    "<span></span>" +
    "</button>" +
    '<ul class="nav-links" id="navLinks">' +
    links +
    '<li><a href="#about" class="btn btn--primary nav-cta">Hubungi Saya</a></li>' +
    "</ul>" +
    "</nav>" +
    "</header>"
  );
};
