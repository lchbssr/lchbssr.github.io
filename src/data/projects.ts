import type { Project } from './types';

export const projects: Project[] = [
    {
        title: 'Booking API',
        type: { fr: 'API Backend', en: 'Backend API' },
        description: {
            fr: 'API REST de réservation d\'espaces partagés : authentification JWT, règles métier, créneaux disponibles, anti-chevauchement garanti par PostgreSQL et e-mails asynchrones.',
            en: 'REST API for booking shared spaces: JWT authentication, business rules, available slots, overlap prevention enforced by PostgreSQL and asynchronous emails.',
        },
        image: './projects/booking-api.webp',
        technologies: ['PHP', 'Symfony', 'API Platform', 'PostgreSQL', 'Docker', 'PHPUnit'],
        liveUrl: null,
        codeUrl: 'https://github.com/lchbssr/booking-api',
        galleryImages: [
            './projects/booking-api/endpoints.webp',
            './projects/booking-api/connexion-jwt.webp',
            './projects/booking-api/disponibilites.webp',
            './projects/booking-api/reservation-acceptee.webp',
            './projects/booking-api/reservation-refusee.webp',
            './projects/booking-api/email-confirmation.webp',
            './projects/booking-api/tests.webp',
        ],
    },
    {
        title: 'Smartexpo',
        type: { fr: 'Application Web', en: 'Web application' },
        description: {
            fr: 'Exposition des modèles de smartphones. Projet académique L3 CDA.',
            en: 'Showcase of smartphone models. Academic project (Bachelor\'s, CDA track).',
        },
        image: './projects/smartexpo.webp',
        technologies: ['HTML', 'CSS', 'PHP', 'CodeIgniter', 'Bootstrap', 'SQL'],
        liveUrl: 'https://dev-data.alwaysdata.net/',
        codeUrl: 'https://github.com/lchbssr/smartexpo',
    },
    {
        title: 'Keywatch',
        type: { fr: 'Application Web', en: 'Web application' },
        description: {
            fr: 'Application web basée sur un jeu de frappe consistant à écrire un texte le plus vite possible. Projet académique LP AMIO.',
            en: 'Web application based on a typing game where you type a text as fast as possible. Academic project (LP AMIO).',
        },
        image: './projects/keywatch.webp',
        technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
        liveUrl: 'https://lchbssr.github.io/keywatch',
        codeUrl: 'https://github.com/lchbssr/keywatch',
    },
    {
        title: 'Pixel',
        type: { fr: 'Application Web', en: 'Web application' },
        description: {
            fr: 'Site Web regroupant l\'ensemble des jeux-vidéos. Projet académique LP AMIO.',
            en: 'Website listing video games. Academic project (LP AMIO).',
        },
        image: './projects/pixel.webp',
        technologies: ['HTML', 'CSS', 'PHP', 'Symfony', 'SQL', 'Docker'],
        liveUrl: null,
        codeUrl: 'https://github.com/lchbssr/pixel',
        galleryImages: [
            './projects/pixel/accueil.webp',
            './projects/pixel/accueil-connecte.webp',
            './projects/pixel/inscription.webp',
            './projects/pixel/connexion.webp',
            './projects/pixel/liste-jeux.webp',
            './projects/pixel/liste-editeurs.webp',
            './projects/pixel/liste-supports.webp',
        ],
    },
    {
        title: 'Foodeat',
        type: { fr: 'Application Mobile', en: 'Mobile application' },
        description: {
            fr: 'Application mobile regroupant la liste des recettes de cuisine à l\'aide d\'une API. Projet académique LP AMIO.',
            en: 'Mobile app listing cooking recipes using an API. Academic project (LP AMIO).',
        },
        image: './projects/foodeat.webp',
        technologies: ['Swift', 'API'],
        liveUrl: null,
        codeUrl: 'https://github.com/lchbssr/foodeat',
        galleryImages: [
            './projects/foodeat/accueil.webp',
            './projects/foodeat/detail.webp',
            './projects/foodeat/liste-plats.webp',
            './projects/foodeat/relance-choix-plat.webp',
            './projects/foodeat/relance-choix-plat-2.webp',
        ],
    },
];
