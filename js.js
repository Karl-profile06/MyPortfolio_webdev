 // Smooth scroll and active nav link highlight on scroll
  const navLinks = document.querySelectorAll('nav.navbar a');

  function onScroll() {
    let scrollPos = window.scrollY + 120;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= scrollPos &&
        (section.offsetTop + section.offsetHeight) > scrollPos
      ) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);

  // Keyboard accessibility: focus main container when nav link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      setTimeout(() => {
        const target = document.querySelector(link.hash);
        if (target) {
          target.focus();
        }
      }, 300);
    });
  });