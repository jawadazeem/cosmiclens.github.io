// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(el => observer.observe(el));

const taglines = [
  "Expanding Horizons, Bringing Clarity to Innovation.",
  "Clean Software. Real Results.",
  "Built to Simplify Business.",
  "Tools That Scale With You.",
  "Custom Tech. Big Impact."
];

let index = 0;
const taglineEl = document.getElementById("rotating-tagline");

function rotateTagline() {
  // Exit current
  taglineEl.classList.remove("tagline-active");
  taglineEl.classList.add("tagline-exit");

  setTimeout(() => {
    // Prep new tagline
    index = (index + 1) % taglines.length;
    taglineEl.textContent = taglines[index];
    taglineEl.classList.remove("tagline-exit");
    taglineEl.classList.add("tagline-enter");

    // Animate in
    requestAnimationFrame(() => {
      taglineEl.classList.remove("tagline-enter");
      taglineEl.classList.add("tagline-active");
    });
  }, 400);
}

// First appearance
taglineEl.classList.add("tagline-active");

// Rotate every 4 seconds
setInterval(rotateTagline, 4000);


