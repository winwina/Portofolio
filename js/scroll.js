/* ============================================
   Scroll-driven behaviors:
   - reveal on scroll
   - animated stat counters
   - navbar scrolled state + active link
   ============================================ */

window.Portfolio = window.Portfolio || {};

/* Reveal elements as they enter the viewport */
window.Portfolio.initScrollReveal = function initScrollReveal() {
  var items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
};

/* Count-up animation for stat cards */
window.Portfolio.initCounters = function initCounters() {
  var counters = document.querySelectorAll(".count");
  if (!counters.length) return;

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = Number(el.dataset.target) || 0;

        if (prefersReduced) {
          el.textContent = target;
          obs.unobserve(el);
          return;
        }

        var duration = 1600;
        var start = performance.now();

        function step(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (el) {
    observer.observe(el);
  });
};

/* Navbar scrolled styling + active-section link highlighting */
window.Portfolio.initNavbarScroll = function initNavbarScroll() {
  var navbar = document.getElementById("navbar");
  var links = document.querySelectorAll(".nav-link");
  var sections = [];

  links.forEach(function (l) {
    var sec = document.querySelector(l.getAttribute("href"));
    if (sec) sections.push(sec);
  });

  function onScroll() {
    if (navbar) navbar.classList.toggle("is-scrolled", window.scrollY > 24);

    var currentId = sections.length ? sections[0].id : null;
    var probe = window.scrollY + window.innerHeight * 0.3;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= probe) currentId = sec.id;
    });

    links.forEach(function (l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + currentId);
    });
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
};

/* Animate skill progress bars (fill from 0% to data-level) on scroll */
window.Portfolio.initSkillBars = function initSkillBars() {
  var fills = document.querySelectorAll(".skill__fill");
  if (!fills.length) return;

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var level = Number(el.dataset.level) || 0;

        if (prefersReduced) {
          el.style.width = level + "%";
        } else {
          // Defer one frame so the transition from 0% animates.
          requestAnimationFrame(function () {
            el.style.width = level + "%";
          });
        }
        obs.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach(function (el) {
    observer.observe(el);
  });
};
