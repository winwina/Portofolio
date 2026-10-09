/* ============================================
   Entry point — mounts components & wires behavior
   Wina Wulansari · Portfolio
   ============================================ */

(function () {
  var P = window.Portfolio;

  function mount(id, html) {
    var host = document.getElementById(id);
    if (host) host.innerHTML = html;
  }

  function init() {
    // 1. Render components into their mount points
    mount("navbar-root", P.components.renderNavbar());
    mount("hero-root", P.components.renderHero());
    mount("about-root", P.components.renderAbout());
    mount("skills-root", P.components.renderSkills());

    // 2. Wire up interactions
    P.initParticles();
    P.initTypewriter("#typed", P.config.typewriterPhrases);
    P.initNavbarMenu();
    P.initNavbarScroll();
    P.initScrollReveal();
    P.initCounters();
    P.initSkillBars();

    // Placeholder resume button (no file yet in Phase 1)
    var resumeBtn = document.getElementById("downloadResume");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Resume file will be wired in a later phase.
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
