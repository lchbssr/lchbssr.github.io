import type { Language } from '../data/types';

// Les mots entourés de ** sont mis en valeur dans la couleur d'accent (voir lib/highlight.tsx)
const fr = {
    meta: {
        title: 'Luca Chaboissier — Développeur Backend PHP / Symfony',
        description: 'Portfolio de Luca Chaboissier, développeur backend PHP / Symfony, 2 ans d\'alternance chez APRIL Marine en Mastère (Bac+5). Disponible immédiatement, Nantes / Vendée.',
    },
    nav: {
        label: 'Navigation principale',
        home: 'Luca Chaboissier, retour en haut de la page',
        about: 'À Propos',
        experience: 'Expérience',
        projects: 'Projets',
        skills: 'Compétences',
        education: 'Formation',
        contact: 'Contact',
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
        lightMode: 'Passer en mode clair',
        darkMode: 'Passer en mode sombre',
        // Le bouton propose l'autre langue : son libellé est écrit dans cette langue
        otherLanguage: 'EN',
        switchLanguage: 'Switch to English',
    },
    hero: {
        photoAlt: 'Photo de profil de Luca Chaboissier',
        available: 'Disponible immédiatement',
        role: 'Développeur Backend PHP / Symfony',
        drivingLicence: 'Permis B (véhiculé)',
        intro: 'Développeur backend, je conçois et fais évoluer des APIs métier fiables et maintenables. Spécialisé en **PHP/Symfony** et **API Platform**, je m\'appuie sur **PostgreSQL**, **Docker** et **RabbitMQ**, avec une vraie appétence pour la qualité du code et la réduction de la dette technique.',
        background: 'Voir mon parcours',
        contact: 'Me contacter',
        cv: 'Télécharger mon CV',
    },
    about: {
        title: 'À propos de moi',
        paragraphs: [
            'J\'ai débuté mon parcours de développeur avec le BTS SIO. C\'est là que j\'ai posé mes premières bases en **PHP** et **Laravel**, avant de faire de **Symfony** ma spécialité au fil de mes expériences en stage et en alternance.',
            'Pour avoir une vision complète des projets, je ne me suis pas limité au back-end. J\'ai exploré le **développement mobile** et la manipulation d\'**APIs** pour être capable de créer des interfaces modernes et réactives.',
            'Fort de deux ans d\'alternance chez **APRIL Marine** sur des APIs métier et de mon **Mastère Expert en Développement Full Stack (Bac+5)**, je recherche aujourd\'hui un poste de **développeur**, idéalement en **CDI**. Disponible **immédiatement**, j\'ai hâte de m\'investir pleinement dans vos méthodes et vos projets.',
        ],
    },
    experience: {
        title: 'Expériences professionnelles',
    },
    projects: {
        title: 'Projets',
        technologies: 'Technologies',
        live: 'Voir le site',
        gallery: 'Voir les images',
        code: 'Code source',
        unavailable: 'Indisponible',
        comingSoon: 'Le site arrive prochainement !',
    },
    skills: {
        title: 'Compétences',
        mastered: { title: 'Maîtrise', description: 'Mon socle technique, utilisé en entreprise pendant mon alternance et mes stages.' },
        practiced: { title: 'Pratique', description: 'Technologies que j\'ai utilisées en entreprise ou en projet.' },
        notions: { title: 'Notions', description: 'Découvertes en formation ou en projet.' },
        soft: { title: 'Savoir-être', description: 'Ce qui guide ma façon de travailler en équipe.' },
    },
    education: {
        title: 'Formations',
    },
    contact: {
        title: 'Contactez-moi',
        intro: 'N\'hésitez pas à me contacter. Je reste ouvert aux nouvelles opportunités !',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Votre message...',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        sentTitle: 'Message envoyé !',
        sentText: 'Je vous répondrai dans les plus brefs délais.',
        error: 'L\'envoi a échoué. Réessayez, ou écrivez-moi directement à',
    },
    footer: {
        rights: 'Tous droits réservés.',
        backToTop: 'Revenir en haut de la page',
    },
    gallery: {
        close: 'Fermer la galerie',
        previous: 'Image précédente',
        next: 'Image suivante',
        showImage: (index: number) => `Afficher l'image ${index}`,
        keyboardNavigation: '← → Navigation',
        keyboardClose: 'Échap : Fermer',
        swipe: 'Faites glisser l\'image pour naviguer',
    },
};

export type UiStrings = typeof fr;

const en: UiStrings = {
    meta: {
        title: 'Luca Chaboissier — PHP / Symfony Backend Developer',
        description: 'Portfolio of Luca Chaboissier, PHP / Symfony backend developer, 2 years of work-study at APRIL Marine during a Master\'s programme. Available now, Nantes / Vendée (France).',
    },
    nav: {
        label: 'Main navigation',
        home: 'Luca Chaboissier, back to top',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        education: 'Education',
        contact: 'Contact',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        lightMode: 'Switch to light mode',
        darkMode: 'Switch to dark mode',
        otherLanguage: 'FR',
        switchLanguage: 'Passer en français',
    },
    hero: {
        photoAlt: 'Profile picture of Luca Chaboissier',
        available: 'Available now',
        role: 'PHP / Symfony Backend Developer',
        drivingLicence: 'Driving licence (own car)',
        intro: 'As a backend developer, I design and evolve reliable, maintainable business APIs. Specialised in **PHP/Symfony** and **API Platform**, I work with **PostgreSQL**, **Docker** and **RabbitMQ**, with a real taste for code quality and reducing technical debt.',
        background: 'See my background',
        contact: 'Contact me',
        cv: 'Download my resume (in French)',
    },
    about: {
        title: 'About me',
        paragraphs: [
            'I started my developer journey with a BTS SIO, a two-year IT degree. That\'s where I laid my first foundations in **PHP** and **Laravel**, before making **Symfony** my specialty through my internships and work-study.',
            'To get a complete view of projects, I didn\'t limit myself to the back end. I explored **mobile development** and working with **APIs** to be able to build modern, responsive interfaces.',
            'With two years of work-study at **APRIL Marine** on business APIs and my **Master\'s programme in Full Stack Development**, I\'m now looking for a **developer** position, ideally a **permanent contract**. Available **immediately**, I look forward to fully committing to your methods and projects.',
        ],
    },
    experience: {
        title: 'Work experience',
    },
    projects: {
        title: 'Projects',
        technologies: 'Technologies',
        live: 'Visit the site',
        gallery: 'See the images',
        code: 'Source code',
        unavailable: 'Unavailable',
        comingSoon: 'The site is coming soon!',
    },
    skills: {
        title: 'Skills',
        mastered: { title: 'Proficient', description: 'My core stack, used professionally during my work-study and internships.' },
        practiced: { title: 'Hands-on', description: 'Technologies I have used at work or in projects.' },
        notions: { title: 'Basics', description: 'Discovered during my studies or in projects.' },
        soft: { title: 'Soft skills', description: 'What guides the way I work in a team.' },
    },
    education: {
        title: 'Education',
    },
    contact: {
        title: 'Contact me',
        intro: 'Feel free to get in touch. I\'m open to new opportunities!',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send message',
        sending: 'Sending...',
        sentTitle: 'Message sent!',
        sentText: 'I will get back to you as soon as possible.',
        error: 'Sending failed. Please try again, or email me directly at',
    },
    footer: {
        rights: 'All rights reserved.',
        backToTop: 'Back to top',
    },
    gallery: {
        close: 'Close the gallery',
        previous: 'Previous image',
        next: 'Next image',
        showImage: (index: number) => `Show image ${index}`,
        keyboardNavigation: '← → Navigate',
        keyboardClose: 'Esc: Close',
        swipe: 'Swipe the image to navigate',
    },
};

export const ui: Record<Language, UiStrings> = { fr, en };
