import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '../data/types';
import { ui, type UiStrings } from '../i18n/ui';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    /** Textes de l'interface dans la langue courante */
    t: UiStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Le français reste la langue par défaut. Un lien ?lang=en permet de partager la version anglaise.
function getInitialLanguage(): Language {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'fr' || fromUrl === 'en') {
        return fromUrl;
    }

    try {
        const saved = localStorage.getItem('language');
        if (saved === 'fr' || saved === 'en') {
            return saved;
        }
    } catch {
        // Stockage indisponible (navigation privée…) : on garde la langue par défaut
    }

    return 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(getInitialLanguage);
    const t = ui[language];

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = t.meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    }, [language, t]);

    const toggleLanguage = () => {
        const next: Language = language === 'fr' ? 'en' : 'fr';
        setLanguage(next);
        try {
            localStorage.setItem('language', next);
        } catch {
            // Stockage indisponible : la langue reste valable pour la session
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
