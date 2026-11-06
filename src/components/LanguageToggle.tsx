import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const next = lang === 'en' ? 'fr' : 'en';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(next)}
      className="px-2 font-medium hover:bg-accent/50 transition-all duration-300"
      aria-label={lang === 'en' ? 'Passer le site en français' : 'Switch site to English'}
      lang={next}
    >
      <span className={lang === 'en' ? 'font-bold underline underline-offset-4' : 'opacity-50'}>EN</span>
      <span className="mx-1 text-foreground/30" aria-hidden="true">/</span>
      <span className={lang === 'fr' ? 'font-bold underline underline-offset-4' : 'opacity-50'}>FR</span>
    </Button>
  );
};

export default LanguageToggle;
