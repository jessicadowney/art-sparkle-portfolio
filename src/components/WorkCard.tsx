
import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageProvider';

interface WorkCardProps {
  title: string;
  role: string;
  problem: string;
  made: string;
  locked?: boolean;
  image: string;
  link?: string;
  year: string;
  featured?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, role, problem, made, locked, image, link, year, featured }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = () => {
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <Card className={`group overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50 cursor-pointer ${featured ? 'md:grid md:grid-cols-2' : ''}`} onClick={handleClick}>
      <div className={`aspect-video relative overflow-hidden ${featured ? 'md:aspect-auto md:h-[345px]' : ''}`}>
        <img loading="lazy" decoding="async"
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardContent className={featured ? 'p-6 md:p-8 md:flex md:flex-col md:justify-center' : 'p-6'}>
        <p className="mb-2 text-sm text-muted-foreground tabular-nums">{year}</p>
        <h3 className={`font-semibold mb-3 group-hover:text-primary transition-colors duration-300 ${featured ? 'text-xl md:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        
        <dl className="mb-4 space-y-3 text-foreground/80 leading-relaxed">
          {[
            [t('Role', 'Rôle'), role],
            [t('Problem', 'Problème'), problem],
            [t('What I made', "Ce que j'ai conçu"), made],
          ].map(([label, text]) => (
            <div key={label}>
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>

        {locked && (
          <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" aria-hidden="true" />
            {t('Password protected', 'Protégé par mot de passe')}
          </p>
        )}

        <Button
          variant="ghost"
          className={`px-0 py-3 h-auto font-medium text-primary hover:text-primary/80 group/btn ${featured ? 'self-start' : ''}`}
          onClick={(e) => { e.stopPropagation(); handleClick(); }}
          aria-label={`${t('View case study', "Voir l'étude de cas")} : ${title}`}
        >
          {t('View Case Study', "Voir l'étude de cas")}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
