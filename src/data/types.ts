import type { LucideIcon } from 'lucide-react';

export type Language = 'fr' | 'en';

/** Texte disponible dans chaque langue du site */
export type Localized<T = string> = Record<Language, T>;

export interface TimelineItem {
    title: Localized;
    organization: string;
    /** Mois de début et de fin, au format AAAA-MM */
    start: string;
    end: string;
    location: string;
    /** Pastille affichée au-dessus du titre (ex : niveau de diplôme) */
    badge?: Localized;
    missions: Localized<string[]>;
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

export interface Project {
    title: string;
    type: Localized;
    description: Localized;
    image: string;
    technologies: string[];
    liveUrl: string | null;
    codeUrl: string;
    galleryImages?: string[];
}
