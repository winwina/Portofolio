/* ============================================
   Hero component (reusable)
   ============================================ */

window.Portfolio = window.Portfolio || {};
window.Portfolio.components = window.Portfolio.components || {};

(function () {
  var stroke =
    'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  function iconFolder() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
  }
  function iconDownload() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>';
  }
  function iconPin() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  }
  function iconMail() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  }
  function iconUser() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
  }
  function iconCode() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="m9 8-4 4 4 4m6-8 4 4-4 4"/></svg>';
  }
  function iconBulb() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M9 18h6m-5 3h4M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 2z"/></svg>';
  }
  function iconBook() {
    return '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M18 19H6"/></svg>';
  }

  window.Portfolio.components.renderHero = function renderHero() {
    var profile = window.Portfolio.config.profile;

    return (
      '<section class="hero section" id="home">' +
      '<div class="particles" id="particles" aria-hidden="true"></div>' +
      '<div class="container hero__grid">' +
      '<div class="hero__content">' +
      '<div class="chip animate-in delay-1"><span class="chip__dot"></span>Available for opportunities</div>' +
      '<h1 class="hero__title animate-in delay-2">' +
      '<span class="line">Halo, saya</span>' +
      '<span class="line name">' + profile.name + "</span>" +
      "</h1>" +
      '<p class="hero__role animate-in delay-3"><span class="typed" id="typed"></span><span class="caret"></span></p>' +
      '<p class="hero__desc animate-in delay-4">Pendidik yang memadukan teknologi dan rasa ingin tahu untuk menumbuhkan logika berpikir kritis dan kecintaan belajar pada generasi muda.</p>' +
      '<div class="hero__actions animate-in delay-5">' +
      '<a href="#about" class="btn btn--primary">' + iconFolder() + " Lihat Project</a>" +
      '<a href="#" class="btn btn--ghost" id="downloadResume">' + iconDownload() + " Download Resume</a>" +
      "</div>" +
      '<div class="hero__meta animate-in delay-6">' +
      "<span>" + iconPin() + " " + profile.location + "</span>" +
      "<span>" + iconMail() + " " + profile.email + "</span>" +
      "</div>" +
      "</div>" +
      '<div class="hero__visual animate-in delay-3">' +
      '<div class="profile">' +
      '<div class="profile__ring" aria-hidden="true"></div>' +
      '<div class="profile__photo">' +
      '<img class="profile__img" src="' + profile.photo + '" alt="Foto profil ' + profile.name + '" ' +
      "onerror=\"this.style.display='none';this.nextElementSibling.style.display='grid';\" />" +
      '<div class="profile__placeholder" style="display:none">' + iconUser() + "<span>Foto Profil</span></div>" +
      "</div>" +
      '<div class="profile__badge profile__badge--1">' + iconCode() + " Informatika</div>" +
      '<div class="profile__badge profile__badge--2">' + iconBulb() + " Computational Thinking</div>" +
      '<div class="profile__badge profile__badge--3">' + iconBook() + " Lifelong Learner</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="hero__scroll" aria-hidden="true"><div class="mouse"></div>Scroll</div>' +
      "</section>"
    );
  };
})();
