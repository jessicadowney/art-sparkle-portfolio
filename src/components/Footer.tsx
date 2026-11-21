import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { resumeHref } from '@/lib/resume';
import { track } from '@/lib/analytics';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Jessica Downey. {t('All rights reserved.', 'Tous droits réservés.')}
          </div>

          <nav aria-label={t('Contact links', 'Liens de contact')} className="flex items-center gap-6 text-sm">
            <a href={resumeHref(lang)} target="_blank" rel="noopener noreferrer" className="py-2" onClick={() => track('resume_download', { location: 'footer' })}>
              {t('Resume', 'CV')}
            </a>
            <a href="https://linkedin.com/in/jessicadowney" target="_blank" rel="noopener noreferrer" className="py-2" onClick={() => track('contact_click', { method: 'linkedin', location: 'footer' })}>
              LinkedIn
            </a>
            <a href="mailto:contact@jessicadowney.com" className="py-2" onClick={() => track('contact_click', { method: 'email', location: 'footer' })}>
              {t('Email', 'E-mail')}
            </a>
          </nav>

          <div className="flex items-center text-sm text-foreground/60">
            <span>{t('Made with', 'Fait avec')}</span>
            <Heart className="h-4 w-4 mx-1 text-destructive fill-current" />
            <span>{t(', matcha drinks and vibe coding.', ', des matchas et du vibe coding.')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
