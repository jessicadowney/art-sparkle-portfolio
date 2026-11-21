import type { Lang } from '@/i18n/LanguageProvider';

export const resumeHref = (lang: Lang) => (lang === 'fr' ? '/jessica-downey-cv-fr.pdf' : '/jessica-downey-cv.pdf');
