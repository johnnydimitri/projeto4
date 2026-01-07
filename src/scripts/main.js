const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 200); // delay in milliseconds
      }
    });
  },
  {
    threshold: 0.2
  }
);

elements.forEach(el => observer.observe(el));
