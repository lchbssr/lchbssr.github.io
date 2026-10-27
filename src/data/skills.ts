import { Lightbulb, Target, Zap, CheckCircle2, FlaskConical, type LucideIcon } from 'lucide-react';
import type { Localized, Skill } from './types';

const logo = (slug: string) => `/skills/${slug}.svg`;

/** Socle technique utilisé en entreprise */
export const masteredSkills: Skill[] = [
    { name: 'PHP', logo: logo('php') },
    { name: 'Symfony', logo: logo('symfony'), invertOnDark: true },
    { name: 'API Platform', logo: logo('api-platform') },
    { name: 'MySQL', logo: logo('mysql') },
    { name: 'PostgreSQL', logo: logo('postgresql') },
    { name: 'Docker', logo: logo('docker') },
    { name: 'Git', logo: logo('git') },
];

/** Technologies utilisées en entreprise ou en projet */
export const practicedSkills: Skill[] = [
    { name: 'Doctrine', logo: logo('doctrine') },
    { name: 'PHPUnit', icon: FlaskConical },
    { name: 'JavaScript', logo: logo('javascript') },
    { name: 'TypeScript', logo: logo('typescript') },
    { name: 'HTML5', logo: logo('html5') },
    { name: 'CSS3', logo: logo('css') },
    { name: 'Laravel', logo: logo('laravel') },
    { name: 'Node.js', logo: logo('nodedotjs') },
    { name: 'RabbitMQ', logo: logo('rabbitmq') },
    { name: 'Podman', logo: logo('podman') },
    { name: 'React', logo: logo('react') },
    { name: 'Angular', logo: logo('angular') },
    { name: 'Tailwind CSS', logo: logo('tailwindcss') },
    { name: 'Bootstrap', logo: logo('bootstrap') },
    { name: 'GitHub', logo: logo('github'), invertOnDark: true },
    { name: 'GitLab', logo: logo('gitlab') },
    { name: 'Postman', logo: logo('postman') },
    { name: 'Gravitee', logo: logo('gravitee') },
    { name: 'Jira', logo: logo('jira') },
    { name: 'SQLite', logo: logo('sqlite') },
];

/** Découvertes en formation ou en projet */
export const notionSkills: string[] = [
    'Python', 'Java', 'C#', 'C', 'Next.js', 'Svelte', 'Deno', 'AdonisJS', 'CodeIgniter',
    'MongoDB', 'Firebase', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'Arduino', 'Raspberry Pi',
];

export interface SoftSkill {
    name: Localized;
    icon: LucideIcon;
    description: Localized;
}

export const softSkills: SoftSkill[] = [
    {
        name: { fr: 'Curieux', en: 'Curious' },
        icon: Lightbulb,
        description: {
            fr: 'Je teste régulièrement de nouveaux outils, que ce soit différents stacks en web, mobile, cloud ou IA.',
            en: 'I regularly try out new tools, whether web, mobile, cloud or AI stacks.',
        },
    },
    {
        name: { fr: 'Autonome', en: 'Independent' },
        icon: Target,
        description: {
            fr: 'J\'avance seul sur mes sujets, et je demande de l\'aide quand il faut.',
            en: 'I move my tasks forward on my own, and ask for help when needed.',
        },
    },
    {
        name: { fr: 'Adaptable', en: 'Adaptable' },
        icon: Zap,
        description: {
            fr: 'Je m’ajuste rapidement aux changements et aux imprévus sans drama.',
            en: 'I adjust quickly to changes and the unexpected, without drama.',
        },
    },
    {
        name: { fr: 'Persévérant', en: 'Persistent' },
        icon: CheckCircle2,
        description: {
            fr: 'Je ne lâche pas un problème tant que je ne l\'ai pas compris, même si ça prend du temps.',
            en: 'I don\'t let go of a problem until I understand it, even if it takes time.',
        },
    },
];
