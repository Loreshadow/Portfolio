// Traductions des textes
const translations = {
  fr: {
    // Menu navigation
    nav_home: "Accueil",
    nav_competence: "Compétences",
    nav_project: "Réalisations",
    nav_contact: "Contact",

    // Section compétence principale
    competence_heading: "Compétences principales",
    competence_content_card1: "Utilisation de HTML5:",
    competence_content2_card1: "Sans la base, on ne peut rien faire",
    competence_content_card2: "Utilisation de CSS3:",
    competence_content2_card2: "Un site sans un peu de style n’est pas un site réussi.",
    competence_content_card3: "Utilisation de JavaScript:",
    competence_content2_card3: "Sans fonctionnalité “Avancée” c’est toujours moins bien.",

    // Compétences secondaires
    competence_sec_heading: "Mes compétence secondaire",
    competence_sec_content_card1: "Utilisation de SASS:",
    competence_sec_content2_card1: "Utilisation de SCSS dans Sass afin de faciliter la maintenabilité du site.",
    competence_sec_content_card2: "Utilisation de Tailwind:",
    competence_sec_content2_card2: "Utilisation de tailwind pour le travail en équipe sans prise de tête et le gain de temps.",
    competence_sec_content_card3: "Utilisation de Figma :",
    competence_sec_content2_card3: "Utilisation de Figma afin de réaliser des maquettes.",

    // Réalisations
    grid_portfolio_heading: "Mes réalisations",
    grid_portfolio_content_card1: "Baldur’s Gate III",
    grid_portfolio_content2_card1: "Réalisation d’un projet sur le thème de Baldur’s Gate III.",
    grid_portfolio_content3_card1: "Utilisation de HTML/CSS",

    grid_portfolio_content_card2: "Pep’s Coaching",
    grid_portfolio_content2_card2: "Réalisation d’un projet sur le site web de “Pep’s Coaching”.",
    grid_portfolio_content3_card2: "Utilisation HTML/CSS",

    grid_portfolio_content_card3: "OneMillionsLines",
    grid_portfolio_content2_card3: "Réalisation d’un projet sur le challenge OneMillionsLines.",
    grid_portfolio_content3_card3: "Utilisation de Tailwind",

    grid_portfolio_content_card4: "Ohm Sweet Ohm",
    grid_portfolio_content2_card4: "Projet collaboratif pour une plateforme de bien-être mental.",
    grid_portfolio_content3_card4: "Utilisation de HTML/SCSS",

    contact_lastname: "Votre nom",
    contact_firstname: "Votre prénom",
    contact_email: "Votre email",
    contact_phone: "Votre numéro",
    contact_text: "Écrivez ici ...",
    form_success_message: "Message envoyé avec succès ✅",
  },
  en: {
    nav_home: "Home",
    nav_competence: "Skills",
    nav_project: "Projects",
    nav_contact: "Contact",

    competence_heading: "Main Skills",
    competence_content_card1: "Using HTML5:",
    competence_content2_card1: "Without the base, we can't do anything",
    competence_content_card2: "Using CSS3:",
    competence_content2_card2: "A site without a bit of style is not a successful site.",
    competence_content_card3: "Using JavaScript:",
    competence_content2_card3: "Without 'advanced functionality', it's always less good.",

    competence_sec_heading: "My Secondary Skills",
    competence_sec_content_card1: "Using SASS:",
    competence_sec_content2_card1: "Using SCSS in Sass to facilitate site maintainability.",
    competence_sec_content_card2: "Using Tailwind:",
    competence_sec_content2_card2: "Using Tailwind for teamwork without headaches and time saving.",
    competence_sec_content_card3: "Using Figma:",
    competence_sec_content2_card3: "Using Figma to create mockups.",

    grid_portfolio_heading: "My Projects",
    grid_portfolio_content_card1: "Baldur’s Gate III",
    grid_portfolio_content2_card1: "Realization of a project on the theme of Baldur’s Gate III.",
    grid_portfolio_content3_card1: "Using HTML/CSS",

    grid_portfolio_content_card2: "Pep’s Coaching",
    grid_portfolio_content2_card2: "Realization of a project on the website of “Pep’s Coaching”.",
    grid_portfolio_content3_card2: "Using HTML/CSS",

    grid_portfolio_content_card3: "OneMillionsLines",
    grid_portfolio_content2_card3: "Realization of a project on the OneMillionsLines challenge.",
    grid_portfolio_content3_card3: "Using Tailwind",

    grid_portfolio_content_card4: "Ohm Sweet Ohm",
    grid_portfolio_content2_card4: "Collaborative project for a mental well-being platform.",
    grid_portfolio_content3_card4: "Using HTML/SCSS",

    contact_firstname: "Your first name",
    contact_lastname: "Your last name",
    contact_email: "Your email",
    contact_phone: "Your number",
    contact_text: "Write here ...",
    form_success_message: "Message sent successfully ✅",
  }
};

// Script de gestion multilingue
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.querySelector('.lang-switcher');
  const toggle = switcher.querySelector('.lang-toggle');
  const options = switcher.querySelectorAll('.lang-options li');

  function applyTranslation(lang) {
    // Traduction du texte (innerText)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key] || `[${key}]`;
    });

    // Traduction des placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = translations[lang][key] || `[${key}]`;
    });

    // Mise à jour du bouton et stockage
    toggle.textContent = {
      fr: 'Français ⌄',
      en: 'English ⌄',
    }[lang];

    switcher.classList.remove('open');
    localStorage.setItem('lang', lang);
  }

  // Clic pour ouvrir/fermer le menu
  toggle.addEventListener('click', () => {
    switcher.classList.toggle('open');
  });

  // Clic sur une langue
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      applyTranslation(lang);
    });
  });

  // Charger langue sauvegardée ou défaut
  const savedLang = localStorage.getItem('lang') || 'fr';
  applyTranslation(savedLang);
});
