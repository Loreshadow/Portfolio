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

// menu de nav mobile/desktop 1440px 

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-items-container');

  // Toggle ouverture menu
  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // évite que le clic sur le burger ferme aussitôt
    menu.classList.toggle('open');
  });

  // Ferme le menu si on clique ailleurs
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      menu.classList.remove('open');
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

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.grid-portfolio .card');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentImages = [];
  let currentIndex = 0;

  // Exemple : assigner des galeries d’images à chaque carte
  const galleries = {
    0: ['assets/img/BG3-project.png', 'assets/img/BG3-project2.png', 'assets/img/BG3-project3.png'],
    1: ['assets/img/Peps-coaching.png', 'assets/img/Peps-coaching2.png', 'assets/img/Peps-coaching3.png'],
    2: ['assets/img/One-millions.png', 'assets/img/One-millions2.png'],
    3: ['assets/img/Ohm-Sweet-Ohm.png', 'assets/img/Ohm-Sweet-Ohm2.png'],
  };

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentImages = galleries[index] || [];
      currentIndex = 0;
      updateLightbox();
      lightbox.classList.add('visible');
    });
  });

  function updateLightbox() {
    lightboxImg.src = currentImages[currentIndex];
  }

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('visible');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('visible');
    }
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox();
  });
});


// formulaire de contact : 

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');

  submitBtn.addEventListener('click', () => {
    // verification de la validité
    if (!form.checkValidity()) {
      form.reportValidity(); 
      return; // si non valide on bloque l'envoi
    }

    const lang = localStorage.getItem('lang') || 'fr';
    const messageKey = "form_success_message";
    const messageText = translations[lang][messageKey] || "[message]";


    message.textContent = messageText;
    message.style.color = "#4CAF50";
    message.style.display = "block";

    form.reset();

    setTimeout(() => {
      message.style.display = "none";
    }, 5000);
  });
});

document.getElementById('phone').addEventListener('input', (e) => {
  // Supprime tout caractère non numérique
  e.target.value = e.target.value.replace(/\D/g, '');
});