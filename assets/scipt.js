document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');
  const backToTop = document.createElement('button');

  // Create Back to Top button
  backToTop.textContent = "↑ Top";
  backToTop.id = "backToTop";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 16px;
    display: none;
    z-index: 999;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  document.body.appendChild(backToTop);

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const start = window.pageYOffset;
        const end = targetSection.offsetTop;
        const distance = end - start;
        const duration = 800;
        let startTime = null;

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

  // Handle scroll-related effects
  function handleScrollEffects() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Hover effect
      if (sectionTop <= scrollPos && sectionTop + sectionHeight > scrollPos) {
        section.classList.add('hovered');
      } else {
        section.classList.remove('hovered');
      }

      // Fade-in animation
      if (scrollPos > sectionTop - window.innerHeight + 100) {
        section.classList.add('visible');
      }

      // Highlight nav link
      navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        if (targetId === section.id) {
          if (sectionTop <= scrollPos && sectionTop + sectionHeight > scrollPos) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });

    // Show/hide Back to Top button
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  }

  // Back to Top button click
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Optional: Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  // Initial and scroll event listener
  window.addEventListener('scroll', handleScrollEffects);
  handleScrollEffects(); // Initial check
});

// Highlight nav link with bold + animation
navLinks.forEach(link => {
  const targetId = link.getAttribute('href').substring(1);
  if (targetId === section.id) {
    if (sectionTop <= scrollPos && sectionTop + sectionHeight > scrollPos) {
      link.classList.add('active'); // Add active
    } else {
      link.classList.remove('active');
    }
  }
});

// Detect bottom of page and highlight "Contacts"
const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10;
if (isBottom) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#contacts') {
      link.classList.add('active');
    }
  });
}

