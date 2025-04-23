// traduction du texte de la page 

const translations = {
    fr: {
      // traduction des élément du menu de naviguation 
      nav_home: "Accueil",
      nav_competence: "Compétences",
      nav_project: "Réalisations",
      nav_contact: "Contact",
      // Traduction des éléments de la section compétence
      competence_heading: "Compétences principales",
      // traduction de la première card 
      competence_content_card1: "Utilisation de HTML5:",
      competence_content2_card1: "Sans la base, on ne peut rien faire",
      // traduction de la deuxième card
      competence_content_card2: "Utilisation de CSS3:",
      competence_content2_card2: "Un site sans un peu de style n’est pas un site réussi.",
      // traduction de la troisième card
      competence_content_card3: "Utilisation de JavaScript:",
      competence_content2_card3: "Sans fonctionalité “Avancée” c’est toujours moins bien.",
      // traduction de la section compétence secondaire
      competence_sec_heading: "Mes compétence secondaire",
    },
    en: {
      // translation of the navigation menu elements
      nav_home: "Home",
      nav_competence: "Skills",
      nav_project: "Projects",
      nav_contact: "Contact",
      // Translation of the skills section elements
      // translation of the first card
      competence_heading: "Main Skills",
      competence_content: "Using HTML5:",
      competence_content2: "Without the base, we can't do anything",
      // translation of the second card
      competence_content_card2: "Using CSS3:",
      competence_content2_card2: "A site without a bit of style is not a successful site.",
      // translation of the third card
      competence_content_card3: "Using JavaScript:",
      competence_content2_card3: "Without 'advanced functionality', it's always less good.",
      // translation of the secondary skills section
      competence_sec_heading: "My Secondary Skills",
    },
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.lang-switcher');
    const toggle = switcher.querySelector('.lang-toggle');
    const options = switcher.querySelectorAll('.lang-options li');
    const elements = document.querySelectorAll('[data-i18n]');
  
    // Ouvre/ferme le menu
    toggle.addEventListener('click', () => {
      switcher.classList.toggle('open');
    });
  
    // Appliquer une langue
    function applyTranslation(lang) {
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || `[${key}]`;
      });
  
      // Met à jour le bouton + ferme le menu
      toggle.textContent = {
        fr: 'Français ⌄',
        en: 'English ⌄',
      }[lang];
  
      switcher.classList.remove('open');
      localStorage.setItem('lang', lang);
    }
  
    // Clic sur une langue
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        applyTranslation(lang);
      });
    });
  
    // Charger la langue mémorisée
    const savedLang = localStorage.getItem('lang') || 'fr';
    applyTranslation(savedLang);
  });