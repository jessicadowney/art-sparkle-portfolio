
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Jessica Downey. {t('All rights reserved.', 'Tous droits réservés.')}
          </div>
          
          <div className="flex items-center text-sm text-foreground/60">
            <span>{t('Made with', 'Fait avec')}</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>{t(', matcha drinks and vibe coding.', ', des matchas et du vibe coding.')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
