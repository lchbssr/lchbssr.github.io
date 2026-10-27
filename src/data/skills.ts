import { Lightbulb, Target, Zap, CheckCircle2, FlaskConical, type LucideIcon } from 'lucide-react';
import type { Skill } from './types';

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
    name: string;
    icon: LucideIcon;
    description: string;
}

export const softSkills: SoftSkill[] = [
    {
        name: 'Curieux',
        icon: Lightbulb,
        description: 'Je teste régulièrement de nouveaux outils, que ce soit différents stacks en web, mobile, cloud ou IA.',
    },
    {
        name: 'Autonome',
        icon: Target,
        description: 'J\'avance seul sur mes sujets, et je demande de l\'aide quand il faut.',
    },
    {
        name: 'Adaptable',
        icon: Zap,
        description: 'Je m’ajuste rapidement aux changements et aux imprévus sans drama.',
    },
    {
        name: 'Persévérant',
        icon: CheckCircle2,
        description: 'Je ne lâche pas un problème tant que je ne l\'ai pas compris, même si ça prend du temps.',
    },
];
