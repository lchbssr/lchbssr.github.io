import type { LucideIcon } from 'lucide-react';

export interface TimelineItem {
    title: string;
    organization: string;
    period: string;
    location: string;
    /** Pastille affichée au-dessus du titre (ex : niveau de diplôme) */
    badge?: string;
    missions: string[];
    technologies: string[];
}

export interface Skill {
    name: string;
    /** Logo local (public/skills) */
    logo?: string;
    /** Icône de repli quand aucun logo officiel n'existe */
    icon?: LucideIcon;
    /** Logo sombre à inverser en mode sombre */
    invertOnDark?: boolean;
}
