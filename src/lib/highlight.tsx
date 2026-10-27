import type { ReactNode } from 'react';

/**
 * Met en valeur les mots entourés de ** dans la couleur d'accent.
 * Ex : "Spécialisé en **Symfony**" → Spécialisé en <span>Symfony</span>
 */
export function highlight(text: string): ReactNode[] {
    return text.split(/\*\*(.+?)\*\*/).map((part, index) =>
        index % 2 === 1
            ? <span key={index} className="text-accent font-semibold">{part}</span>
            : part
    );
}
