document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  // Smooth scrolling to target section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Perform smooth scrolling to the target section
        const start = window.pageYOffset;
        const end = targetSection.offsetTop;
        const distance = end - start;
        const duration = 800; // Duration for the scroll (in ms)
        let startTime = null;

        // Easing function for smooth scroll
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }

        function scrollAnimation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, start, distance, duration);
          window.scrollTo(0, run);

          if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
          }
        }

        requestAnimationFrame(scrollAnimation);
      }
    });
  });

  // Add hover effect on the section once it is in view
  function addHoverEffect() {
    const scrollPos = window.scrollY + 120; // Adjust for better detection

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        sectionTop <= scrollPos &&
        (sectionTop + sectionHeight) > scrollPos
      ) {
        // Add hover effect to the section when it's in view
        section.classList.add('hovered'); // Add hovered class when section is in view
      } else {
        section.classList.remove('hovered'); // Remove hover effect when section is out of view
      }
    });
  }

  // Listen for scroll events to add/remove hover effect
  window.addEventListener('scroll', addHoverEffect);

  // Initial check for hovered section on page load
  addHoverEffect();
});
