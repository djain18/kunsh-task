(function () {
  'use strict';

  var nav = document.querySelector('.site-nav');
  var hero = document.getElementById('home');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (!nav || !hero) return;

  /* Show nav when hero leaves viewport */
  var heroObserver = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    if (!entry.isIntersecting) {
      nav.classList.add('nav-visible');
    } else {
      nav.classList.remove('nav-visible');
    }
  }, { threshold: 0.05 });

  heroObserver.observe(hero);

  /* Mobile hamburger toggle */
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* Smooth scroll for all nav links */
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      /* Close mobile menu if open */
      if (navLinks) navLinks.classList.remove('open');

      /* Offset for fixed nav height */
      var navH = nav.classList.contains('nav-visible') ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navH;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

}());
