/* ============================================
   Typewriter effect for the hero role line
   ============================================ */

window.Portfolio = window.Portfolio || {};

window.Portfolio.initTypewriter = function initTypewriter(selector, phrases, opts) {
  opts = opts || {};
  var el = document.querySelector(selector);
  if (!el || !phrases || !phrases.length) return;

  var typeSpeed = opts.typeSpeed || 85;
  var deleteSpeed = opts.deleteSpeed || 45;
  var holdTime = opts.holdTime || 1600;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = phrases[0];
    return;
  }

  var phraseIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function tick() {
    var current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(tick, holdTime);
      }
      return setTimeout(tick, typeSpeed);
    }

    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      return setTimeout(tick, typeSpeed);
    }
    return setTimeout(tick, deleteSpeed);
  }

  tick();
};
