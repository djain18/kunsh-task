/* FILE: project/js/scroll-reveal.js */

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'reveal' class
  const revealElements = document.querySelectorAll('.reveal, .reveal-inline');
  
  // Intersection Observer configuration
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% from bottom of viewport
    threshold: 0.1
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Unobserve after revealing to prevent re-animating if not desired
        // (Remove this line if you want elements to animate every time they scroll into view)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
