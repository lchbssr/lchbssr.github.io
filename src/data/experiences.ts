import type { TimelineItem } from './types';

export const experiences: TimelineItem[] = [
    {
        title: 'Alternance - Développeur Backend Symfony',
        organization: 'APRIL Marine',
        period: 'Octobre 2024 - Septembre 2026',
        location: 'Les Sables d\'Olonne, France',
        missions: [
            'Conception, développement et évolution d\'APIs métiers sous Symfony 7 et API Platform, pour les parcours de vente d\'assurance et l\'application mobile',
            'Maintenance évolutive, tests, correction d\'anomalies et réduction de la dette technique',
            'Optimisation des requêtes SQL et refonte de composants Legacy',
            'Participation aux rituels Agiles (Scrum) et aux code reviews, en collaboration avec les équipes métiers et techniques',
        ],
        technologies: ['PHP 8', 'Symfony 7', 'API Platform', 'MySQL', 'PostgreSQL', 'Docker', 'Podman', 'RabbitMQ', 'Gravitee', 'Git', 'GitLab', 'Jira', 'Confluence'],
    },
    {
        title: 'Stage - Développeur Informatique',
        organization: 'Addix Informatique',
        period: 'Avril 2024 - Juin 2024',
        location: 'Challans, France',
        missions: [
            'Développement d\'une API de synchronisation de données entre deux ERP métier',
            'Automatisation des flux de données entre les deux ERP, réduisant les interventions manuelles et les erreurs de saisie',
            'Analyse des besoins métier et proposition de solutions techniques adaptées',
        ],
        technologies: ['API', 'PHP 8', 'MySQL', 'Architecture MVC', 'Git'],
    },
    {
        title: 'Stage - Développeur Full Stack',
        organization: 'Cyberscope',
        period: 'Mars 2023 - Juin 2023',
        location: 'La Roche-sur-Yon, France',
        missions: [
            'Développement de modules Back-Office et de fonctionnalités d\'administration sous Symfony 6.4',
            'Intégration de maquettes Front-end (Twig, SCSS, JavaScript) et maintenance corrective',
            'Gestion des bases de données MySQL',
        ],
        technologies: ['Symfony 6.4', 'PHP', 'Twig', 'SCSS', 'JavaScript', 'MySQL', 'Git'],
    },
    {
        title: 'Stage - Développeur Web',
        organization: 'Cyberscope',
        period: 'Janvier 2022 - Février 2022',
        location: 'La Roche-sur-Yon, France',
        missions: [
            'Développement d\'une application Web avec le framework Symfony',
            'Création de fonctionnalités backend',
        ],
        technologies: ['Symfony', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    },
    {
        title: 'Stage - Développeur Web',
        organization: 'Leadcode',
        period: 'Mai 2021 - Juin 2021',
        location: 'La Roche-sur-Yon, France',
        missions: [
            'Développement d\'une application avec le Framework AdonisJS (FrontEnd)',
            'Réalisation de tests unitaires et d\'intégration pour garantir la qualité du code',
            'Premier contact avec le développement web professionnel',
        ],
        technologies: ['AdonisJS', 'TypeScript', 'JavaScript', 'NodeJS'],
    },
];
