// Smooth scroll and active nav link highlight on scroll
const navLinks = document.querySelectorAll('nav.navbar a');

function onScroll() {
  let scrollPos = window.scrollY + 120; // Adjust offset as needed
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
    e.preventDefault(); // Prevent default anchor click behavior
    const target = document.querySelector(link.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
      setTimeout(() => {
        target.setAttribute('tabindex', '-1'); // Make the target focusable
        target.focus(); // Focus the target section
      }, 300);
    }
  });
});
