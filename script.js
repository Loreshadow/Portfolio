// Menu de nav Desktop 
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 850) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// Carroussel
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#compétence-secondary .card-container-secondary');
  const slides    = Array.from(container.querySelectorAll('.card-secondary'));
  const slider    = document.getElementById('slide-range');
  let current     = 0;

  // Ajuste la plage max dynamiquement
  slider.max = slides.length - 1;

  // Mise à jour des classes prev/active/next
  function updateSlides(index) {
    slides.forEach(slide => slide.classList.remove('prev','active','next'));

    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    slides[prevIndex].classList.add('prev');
    slides[index].classList.add('active');
    slides[nextIndex].classList.add('next');

    // synchronise la position du slider
    slider.value = index;
  }

  // Au changement du slider
  slider.addEventListener('input', (e) => {
    current = parseInt(e.target.value, 10);
    updateSlides(current);
  });

  // Rendre chaque carte cliquable
  slides.forEach((slide, index) => {
    slide.style.cursor = 'pointer';  // feedback visuel : pointeur
    slide.addEventListener('click', () => {
      current = index;
      updateSlides(current);
    });
  });

  // Initialisation
  updateSlides(current);
});