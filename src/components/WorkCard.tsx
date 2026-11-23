
import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageProvider';
import { track } from '@/lib/analytics';

interface WorkCardProps {
  title: string;
  role: string;
  problem: string;
  made?: string; // kept in the data for the case-study copy; not shown on the card
  outcome?: string;
  locked?: boolean;
  image: string;
  link?: string;
  year: string;
  featured?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, role, problem, outcome, locked, image, link, year, featured }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = () => {
    track('case_study_open', { project: title });
    if (link) {
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <Card className={`group overflow-hidden bg-card/50 border border-border/50 cursor-pointer h-full ${featured ? 'md:grid md:grid-cols-2' : 'flex flex-col'}`} onClick={handleClick}>
      <div className={`aspect-video relative overflow-hidden ${featured ? 'md:aspect-auto md:h-[460px]' : ''}`}>
        <img loading="lazy" decoding="async"
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03] ${featured ? 'object-left-top' : ''}`}
        />
      </div>
      
      <CardContent className={featured ? 'p-6 md:p-8 md:flex md:flex-col md:justify-center' : 'p-6 flex flex-1 flex-col'}>
        <p className="mb-2 text-sm text-muted-foreground tabular-nums">{year}</p>
        <h3 className={`font-semibold mb-2 ${featured ? 'text-2xl md:text-4xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">{role}</p>

        <div className="mb-4 space-y-3 text-foreground/80 leading-relaxed">
          <p>{problem}</p>
          {outcome && <p className="text-foreground">{outcome}</p>}
        </div>

        {locked && (
          <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" aria-hidden="true" />
            {t('Password protected', 'Protégé par mot de passe')}
          </p>
        )}

        <Button
          variant="ghost"
          className={`px-0 py-3 h-auto font-medium text-primary hover:text-primary/80 group/btn self-start ${featured ? '' : 'mt-auto'}`}
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
