/* ============================================
   Particle generator for hero background
   ============================================ */

window.Portfolio = window.Portfolio || {};

window.Portfolio.initParticles = function initParticles(selector, count) {
  selector = selector || "#particles";
  count = count || 26;

  var host = document.querySelector(selector);
  if (!host) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var frag = document.createDocumentFragment();
  var palette = ["var(--accent)", "var(--accent-2)", "var(--accent-3)"];

  for (var i = 0; i < count; i++) {
    var p = document.createElement("span");
    p.className = "particle";

    var size = Math.random() * 4 + 2;
    var left = Math.random() * 100;
    var duration = Math.random() * 14 + 12;
    var delay = Math.random() * 12;
    var opacity = Math.random() * 0.5 + 0.3;
    var color = palette[i % palette.length];

    p.style.cssText =
      "left:" + left + "%;" +
      "width:" + size + "px;" +
      "height:" + size + "px;" +
      "background:" + color + ";" +
      "box-shadow:0 0 8px 1px " + color + ";" +
      "opacity:" + opacity + ";" +
      "animation-duration:" + duration + "s;" +
      "animation-delay:-" + delay + "s;";

    frag.appendChild(p);
  }

  host.appendChild(frag);
};
