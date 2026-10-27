import type { Language } from '../data/types';

/** "2023-03" → "Mars 2023" en français, "March 2023" en anglais */
function formatMonth(month: string, language: Language): string {
    const [year, monthNumber] = month.split('-').map(Number);
    const label = new Intl.DateTimeFormat(language, { month: 'long', year: 'numeric' })
        .format(new Date(year, monthNumber - 1));

    return label.charAt(0).toUpperCase() + label.slice(1);
}

export function formatPeriod(start: string, end: string, language: Language): string {
    return `${formatMonth(start, language)} - ${formatMonth(end, language)}`;
}
