
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light mb-6 tracking-tight antialiased leading-[1.05] text-balance">
            {t('I make messy ideas ', 'Je rends les idées confuses ')}
            <span className="italic">{t('click.', 'limpides.')}</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed antialiased mt-4">
            {t(
              'Senior product designer at Microsoft, working on how people extend and steer Copilot.',
              'Designer produit senior chez Microsoft, je travaille sur la façon dont on étend et on pilote Copilot.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToWork}
              size="lg"
              className="animated-gradient glass-stroke px-8 py-3 rounded-full text-lg antialiased"
            >
              {t('View My Work', 'Voir mes réalisations')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <a
              href={lang === 'fr' ? '/jessica-downey-cv-fr.pdf' : '/jessica-downey-cv.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3 text-lg"
            >
              {t('Download Resume', 'Télécharger mon CV')}
              <Download className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  );
};

export default Hero;
