import type { TimelineItem } from './types';

export const formations: TimelineItem[] = [
    {
        title: {
            fr: 'Mastère Expert en Développement Full Stack',
            en: 'Master\'s programme in Full Stack Development',
        },
        organization: 'Nantes Ynov Campus',
        start: '2024-10',
        end: '2026-09',
        location: 'Nantes, France',
        badge: { fr: 'Bac+5', en: 'Master\'s level' },
        missions: {
            fr: [
                'Formation d\'expert en développement couvrant la conception intégrale d\'applications web (Front & Back) et l\'architecture logicielle.',
                'Apprentissage approfondi des frameworks modernes, de l\'intégration continue (DevOps) et du pilotage de projets techniques en équipe.',
            ],
            en: [
                'Expert developer programme covering the full design of web applications (front and back end) and software architecture.',
                'In-depth learning of modern frameworks, continuous integration (DevOps) and leading technical projects in a team.',
            ],
        },
        technologies: ['Deno', 'Svelte', 'MongoDB', 'Rust', 'NestJS', 'Angular', 'Azure', 'GitHub CI/CD'],
    },
    {
        title: {
            fr: 'Licence Informatique - Conception et Développement d\'Applications',
            en: 'Bachelor\'s in Computer Science - Application Design and Development',
        },
        organization: 'Université de Bretagne Occidentale',
        start: '2023-09',
        end: '2024-06',
        location: 'Brest (29), France',
        badge: { fr: 'Bac+3', en: 'Bachelor\'s level' },
        missions: {
            fr: [
                'Formation universitaire généraliste en Informatique. Parcours CDA axé sur l\'approfondissement des fondamentaux théoriques et l\'architecture logicielle.',
                'Apprentissage de la programmation avancée, de la modélisation de systèmes complexes et de l\'administration des réseaux IP.',
            ],
            en: [
                'General university degree in computer science. CDA track focused on strengthening the theoretical foundations and software architecture.',
                'Advanced programming, modelling of complex systems and IP network administration.',
            ],
        },
        technologies: ['Java', 'Eclipse', 'PHP', 'SQL', 'CodeIgniter'],
    },
    {
        title: {
            fr: 'Licence Professionnelle : Applications Mobiles et Internet des Objets (LP AMIO)',
            en: 'Professional Bachelor\'s in Mobile Applications and the Internet of Things (LP AMIO)',
        },
        organization: 'I.U.T. de Saint-Dié',
        start: '2022-09',
        end: '2023-06',
        location: 'Saint-Dié-des-Vosges (88), France',
        badge: { fr: 'Bac+3', en: 'Bachelor\'s level' },
        missions: {
            fr: [
                'Formation spécialisée dans la conception d\'applications mobiles et Web et l\'intégration de l\'IoT.',
                'Apprentissage du développement natif et hybride, de la communication avec des équipements connectés et de la gestion de données.',
            ],
            en: [
                'Specialised degree in designing mobile and web applications and integrating IoT.',
                'Native and hybrid development, communication with connected devices and data management.',
            ],
        },
        technologies: ['Raspberry Pi', 'Arduino', 'PHP', 'Angular', 'Symfony', 'Swift', 'Flutter', 'React Native', 'Firebase', '4D', 'WinDev'],
    },
    {
        title: {
            fr: 'BTS SIO (Option SLAM)',
            en: 'BTS SIO, SLAM option (two-year IT degree)',
        },
        organization: 'Lycée Notre-Dame du Roc',
        start: '2020-09',
        end: '2022-06',
        location: 'La Roche-sur-Yon (85), France',
        badge: { fr: 'Bac+2', en: 'Two-year degree' },
        missions: {
            fr: [
                'Formation technique en développement informatique. Option SLAM (Solutions Logicielles et Applications Métiers) axée sur la conception et le développement d\'applications.',
                'Apprentissage de la programmation, des bases de données et de la gestion de projets.',
            ],
            en: [
                'Technical degree in software development. SLAM option (Software Solutions and Business Applications), focused on designing and developing applications.',
                'Programming, databases and project management.',
            ],
        },
        technologies: ['Visual Studio', 'Laravel', 'PHP', 'Python', 'SQL', 'C#', 'Flutter'],
    },
    {
        title: {
            fr: 'Bac STI2D - Spécialité SIN',
            en: 'French Baccalaureate STI2D - Digital Information Systems',
        },
        organization: 'Lycée Jean de Lattre de Tassigny',
        start: '2018-09',
        end: '2020-06',
        location: 'La Roche-sur-Yon (85), France',
        badge: { fr: 'Bac', en: 'High school diploma' },
        missions: {
            fr: [
                'Baccalauréat technologique avec spécialité Systèmes d\'Information et Numérique.',
                'Apprentissage des bases de la programmation, des réseaux et des systèmes embarqués à travers des projets pratiques.',
            ],
            en: [
                'Technological baccalaureate specialising in Digital Information Systems.',
                'Basics of programming, networks and embedded systems through hands-on projects.',
            ],
        },
        technologies: ['HTML/CSS', 'C', 'Arduino', 'Proteus', 'SolidWorks'],
    },
];
