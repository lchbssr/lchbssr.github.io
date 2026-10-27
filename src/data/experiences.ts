import type { TimelineItem } from './types';

export const experiences: TimelineItem[] = [
    {
        title: {
            fr: 'Alternance - Développeur Backend Symfony',
            en: 'Work-study - Symfony Backend Developer',
        },
        organization: 'APRIL Marine',
        start: '2024-10',
        end: '2026-09',
        location: 'Les Sables d\'Olonne, France',
        missions: {
            fr: [
                'Conception, développement et évolution d\'APIs métiers sous Symfony 7 et API Platform, pour les parcours de vente d\'assurance et l\'application mobile',
                'Maintenance évolutive, tests, correction d\'anomalies et réduction de la dette technique',
                'Optimisation des requêtes SQL et refonte de composants Legacy',
                'Participation aux rituels Agiles (Scrum) et aux code reviews, en collaboration avec les équipes métiers et techniques',
            ],
            en: [
                'Design, development and evolution of business APIs with Symfony 7 and API Platform, for insurance sales journeys and the mobile app',
                'Ongoing maintenance, testing, bug fixing and technical debt reduction',
                'SQL query optimisation and redesign of legacy components',
                'Taking part in Agile (Scrum) ceremonies and code reviews, working with business and technical teams',
            ],
        },
        technologies: ['PHP 8', 'Symfony 7', 'API Platform', 'MySQL', 'PostgreSQL', 'Docker', 'Podman', 'RabbitMQ', 'Gravitee', 'Git', 'GitLab', 'Jira', 'Confluence'],
    },
    {
        title: {
            fr: 'Stage - Développeur Informatique',
            en: 'Internship - Software Developer',
        },
        organization: 'Addix Informatique',
        start: '2024-04',
        end: '2024-06',
        location: 'Challans, France',
        missions: {
            fr: [
                'Développement d\'une API de synchronisation de données entre deux ERP métier',
                'Automatisation des flux de données entre les deux ERP, réduisant les interventions manuelles et les erreurs de saisie',
                'Analyse des besoins métier et proposition de solutions techniques adaptées',
            ],
            en: [
                'Development of a data synchronisation API between two business ERPs',
                'Automation of data flows between the two ERPs, reducing manual work and data entry errors',
                'Analysis of business needs and proposal of suitable technical solutions',
            ],
        },
        technologies: ['API', 'PHP 8', 'MySQL', 'Architecture MVC', 'Git'],
    },
    {
        title: {
            fr: 'Stage - Développeur Full Stack',
            en: 'Internship - Full Stack Developer',
        },
        organization: 'Cyberscope',
        start: '2023-03',
        end: '2023-06',
        location: 'La Roche-sur-Yon, France',
        missions: {
            fr: [
                'Développement de modules Back-Office et de fonctionnalités d\'administration sous Symfony 6.4',
                'Intégration de maquettes Front-end (Twig, SCSS, JavaScript) et maintenance corrective',
                'Gestion des bases de données MySQL',
            ],
            en: [
                'Development of back-office modules and admin features with Symfony 6.4',
                'Front-end integration of mockups (Twig, SCSS, JavaScript) and corrective maintenance',
                'MySQL database management',
            ],
        },
        technologies: ['Symfony 6.4', 'PHP', 'Twig', 'SCSS', 'JavaScript', 'MySQL', 'Git'],
    },
    {
        title: {
            fr: 'Stage - Développeur Web',
            en: 'Internship - Web Developer',
        },
        organization: 'Cyberscope',
        start: '2022-01',
        end: '2022-02',
        location: 'La Roche-sur-Yon, France',
        missions: {
            fr: [
                'Développement d\'une application Web avec le framework Symfony',
                'Création de fonctionnalités backend',
            ],
            en: [
                'Development of a web application with the Symfony framework',
                'Building backend features',
            ],
        },
        technologies: ['Symfony', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    },
    {
        title: {
            fr: 'Stage - Développeur Web',
            en: 'Internship - Web Developer',
        },
        organization: 'Leadcode',
        start: '2021-05',
        end: '2021-06',
        location: 'La Roche-sur-Yon, France',
        missions: {
            fr: [
                'Développement d\'une application avec le Framework AdonisJS (FrontEnd)',
                'Réalisation de tests unitaires et d\'intégration pour garantir la qualité du code',
                'Premier contact avec le développement web professionnel',
            ],
            en: [
                'Development of an application with the AdonisJS framework (front end)',
                'Writing unit and integration tests to ensure code quality',
                'First experience of professional web development',
            ],
        },
        technologies: ['AdonisJS', 'TypeScript', 'JavaScript', 'NodeJS'],
    },
];
