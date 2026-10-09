/* ============================================
   Navbar interactivity: mobile menu toggle
   ============================================ */

window.Portfolio = window.Portfolio || {};

window.Portfolio.initNavbarMenu = function initNavbarMenu() {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  function closeMenu() {
    toggle.classList.remove("is-open");
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  // Close menu after choosing a link (mobile)
  var anchors = links.querySelectorAll("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", closeMenu);
  }

  // Close on resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) closeMenu();
  });
};
