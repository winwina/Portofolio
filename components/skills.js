/* ============================================
   Skills component (reusable)
   Category-grouped glass cards + animated bars
   ============================================ */

window.Portfolio = window.Portfolio || {};
window.Portfolio.components = window.Portfolio.components || {};

(function () {
  var stroke =
    'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  var ICONS = {
    layout:
      '<svg viewBox="0 0 24 24" ' + stroke + '><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    server:
      '<svg viewBox="0 0 24 24" ' + stroke + '><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    database:
      '<svg viewBox="0 0 24 24" ' + stroke + '><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    cloud:
      '<svg viewBox="0 0 24 24" ' + stroke + '><path d="M7 18a4 4 0 0 1 .5-7.97 5.5 5.5 0 0 1 10.6 1.47A3.5 3.5 0 0 1 17.5 18z"/></svg>',
  };

  window.Portfolio.components.renderSkills = function renderSkills() {
    var skills = window.Portfolio.config.skills;

    var cards = skills
      .map(function (group, gi) {
        var bars = group.items
          .map(function (s) {
            return (
              '<li class="skill">' +
              '<div class="skill__head">' +
              '<span class="skill__name">' + s.name + "</span>" +
              '<span class="skill__pct">' + s.level + "%</span>" +
              "</div>" +
              '<div class="skill__track">' +
              '<span class="skill__fill" data-level="' + s.level + '" style="width:0%"></span>' +
              "</div>" +
              "</li>"
            );
          })
          .join("");

        return (
          '<article class="skill-card" data-reveal data-reveal-delay="' + ((gi % 4) + 1) + '">' +
          '<header class="skill-card__head">' +
          '<span class="skill-card__icon">' + (ICONS[group.icon] || ICONS.layout) + "</span>" +
          '<h3 class="skill-card__title">' + group.category + "</h3>" +
          '<span class="skill-card__count">' + group.items.length + " skill</span>" +
          "</header>" +
          '<ul class="skill-card__list">' + bars + "</ul>" +
          "</article>"
        );
      })
      .join("");

    return (
      '<section class="skills section" id="skills">' +
      '<div class="container">' +
      "<div data-reveal>" +
      '<span class="eyebrow">Keahlian</span>' +
      '<h2 class="section-title">Teknologi yang saya kuasai</h2>' +
      "</div>" +
      '<div class="skills__grid">' + cards + "</div>" +
      "</div>" +
      "</section>"
    );
  };
})();
