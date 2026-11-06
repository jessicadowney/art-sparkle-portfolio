
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

  const openResume = () => {
    window.open(lang === 'fr' ? '/jessica-downey-cv-fr.pdf' : '/jessica-downey-cv.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light mb-6 tracking-tight antialiased leading-tight md:leading-relaxed">
            <span className="block text-foreground/90 mb-2 md:mb-0">{t('Senior', 'Designer')}</span>
            <span className="block italic text-foreground leading-tight md:leading-[120px]">
              {t('Product Designer', 'produit senior')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed antialiased mt-4">
            {t(
              'Designing intuitive, human-centered digital experiences that solve real problems and create meaningful connections between users and technology.',
              'Je conçois des expériences numériques intuitives et centrées sur l\'humain, qui résolvent de vrais problèmes et créent des liens significatifs entre les utilisateurs et la technologie.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToWork}
              size="lg"
              className="animated-gradient glass-stroke px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 antialiased"
            >
              {t('View My Work', 'Voir mes réalisations')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={openResume}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full text-lg border-2 hover:bg-accent transition-all duration-300 hover:scale-105 antialiased"
            >
              {t('Download Resume', 'Télécharger mon CV')}
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-foreground/60 antialiased">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div>{t('Years Experience', "Ans d'expérience")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Microsoft</div>
              <div>{t('Senior Designer', 'Designer senior')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{t('Global', 'Mondial')}</div>
              <div>{t('Scale Impact', 'Impact à grande échelle')}</div>
            </div>
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
