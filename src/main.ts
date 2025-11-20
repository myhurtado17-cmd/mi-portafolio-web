import './style.css'

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle') as HTMLButtonElement;
const html = document.documentElement;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (savedTheme === 'dark' || (!savedTheme && systemTheme === 'dark')) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetLink = e.currentTarget as HTMLAnchorElement;
    const href = targetLink.getAttribute('href');
    if (!href) return;

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Add fade-in class to elements we want to animate
const animatedElements = [
  '.hero-title',
  '.hero-subtitle',
  '.hero-cta',
  '.section-title',
  '.about-grid',
  '.project-card',
  '.contact-container'
];

animatedElements.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.classList.add('fade-in');
    // Add stagger effect to project cards
    if (selector === '.project-card') {
      el.classList.add(`stagger-${(index % 3) + 1}`);
    }
    observer.observe(el);
  });
});

// Form Handling (Prevent Default)
const contactBtn = document.querySelector('.big-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    // Just a demo, so we prevent default mailto behavior if we want to show a modal or something
    // But keeping mailto is fine. Let's just log for now.
    console.log('Contact button clicked');
  });
}
