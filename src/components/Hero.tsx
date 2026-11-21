
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';
import { resumeHref } from '@/lib/resume';
import { track } from '@/lib/analytics';

const OFFSETS = [
  { r: -16, y: -0.3 }, { r: 11, y: 0.22 }, { r: -9, y: -0.12 }, { r: 14, y: 0.3 },
  { r: -12, y: -0.2 }, { r: 8, y: 0.16 }, { r: -14, y: -0.28 }, { r: 12, y: 0.12 },
];

// Each letter starts slightly off its line and settles. Screen readers get the plain word.
const Settling: React.FC<{ word: string }> = ({ word }) => (
  <>
    <span className="sr-only">{word}</span>
    <span aria-hidden="true" className="inline-block whitespace-nowrap">
      {[...word].map((ch, i) => {
        const o = OFFSETS[i % OFFSETS.length];
        return (
          <span
            key={i}
            className="settle-letter"
            style={{ '--r': `${o.r}deg`, '--y': `${o.y}em`, '--d': `${200 + i * 50}ms` } as React.CSSProperties}
          >
            {ch}
          </span>
        );
      })}
    </span>
  </>
);

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
            {lang === 'fr' ? (
              <>Je rends les idées <Settling word="confuses" /> <span className="italic">limpides.</span></>
            ) : (
              <>I make <Settling word="messy" /> ideas <span className="italic">click.</span></>
            )}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-3 max-w-2xl mx-auto leading-relaxed antialiased mt-4">
            {t(
              'Senior product designer at Microsoft, working on how people extend and steer Copilot.',
              'Designer produit senior chez Microsoft, je travaille sur la façon dont on étend et on pilote Copilot.'
            )}
          </p>

          <p className="text-base text-muted-foreground mb-8">{t('Based in Vancouver, Canada', 'Basée à Vancouver, au Canada')}</p>

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
              href={resumeHref(lang)}
              onClick={() => track('resume_download', { location: 'hero' })}
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
      
    </section>
  );
};

export default Hero;
