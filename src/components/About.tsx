
import React from 'react';
import { Users, Lightbulb, Target, Award } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

const About: React.FC = () => {
  const { t } = useLanguage();
  const principles = [
    {
      icon: Users,
      title: t("Human-Centered", "Centré sur l'humain"),
      description: t("Every design decision begins with understanding user jobs and motivations, validated through hypotheses to create impactful experiences.", "Chaque décision de design commence par la compréhension des besoins et des motivations des utilisateurs, validée par des hypothèses pour créer des expériences à fort impact.")
    },
    {
      icon: Lightbulb,
      title: t("Innovation", "Innovation"),
      description: t("Championing fast-paced innovation with design sprints and user-centered frameworks to explore, test and build inclusive solutions", "Je porte une innovation rapide grâce aux design sprints et aux cadres centrés sur l'utilisateur pour explorer, tester et construire des solutions inclusives")
    },
    {
      icon: Target,
      title: t("Strategic", "Stratégique"),
      description: t("Aligning design solutions with business objectives to drive measurable outcomes and user satisfaction.", "J'aligne les solutions de design sur les objectifs métier pour obtenir des résultats mesurables et la satisfaction des utilisateurs.")
    },
    {
      icon: Award,
      title: t("Excellence", "Excellence"),
      description: t("Commitment to crafting polished, detailed experiences that delight users and exceed expectations.", "Un engagement à créer des expériences soignées et détaillées qui ravissent les utilisateurs et dépassent leurs attentes.")
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              {t("About", "À propos")} <span className="text-primary">{t("Me", "de moi")}</span>
            </h2>
          </div>
          
          <div className="mb-16">
            <div className="animate-fade-in glass-container rounded-2xl p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("Hi! I'm Jessica — a senior product designer who makes messy ideas click.", "Bonjour ! Je suis Jessica — designer produit senior qui rend les idées confuses limpides.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("I turn ambiguity into clarity, aligning teams around intuitive solutions that solve real user problems and drive business outcomes. Whether I'm shaping product direction, untangling complex systems, or pushing pixels with intent, I design with both empathy and precision.", "Je transforme le flou en clarté, en alignant les équipes autour de solutions intuitives qui résolvent de vrais problèmes utilisateurs et servent les objectifs de l'entreprise. Que je définisse la direction d'un produit, démêle des systèmes complexes ou peaufine chaque pixel avec intention, je conçois avec autant d'empathie que de précision.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("Right now, I'm at Microsoft, working on Copilot extensibility. I work best in spaces where things are a bit undefined — where sharp thinking, strong collaboration, and good taste can change the trajectory of a product.", "En ce moment, je suis chez Microsoft, où je travaille sur l'extensibilité de Copilot. Je donne le meilleur de moi-même dans les contextes un peu flous — là où une réflexion rigoureuse, une collaboration solide et du bon goût peuvent changer la trajectoire d'un produit.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("I've lived and worked across France, the US, the Netherlands, and now Canada, and I bring that global perspective into how I think, design, and lead. I believe good design makes technology feel human — not just usable, but considerate.", "J'ai vécu et travaillé en France, aux États-Unis, aux Pays-Bas et maintenant au Canada, et j'apporte cette perspective mondiale dans ma façon de réfléchir, de concevoir et de diriger. Je crois qu'un bon design rend la technologie humaine — pas seulement utilisable, mais attentionnée.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("Outside of work, I'm a food nerd, a corgi-walker, and a mom of two. (Ask me about mochi donuts or bingsu.)", "En dehors du travail, je suis passionnée de cuisine, promeneuse de corgi et maman de deux enfants. (Demandez-moi des nouvelles des beignets mochi ou du bingsu.)")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("Want to see how I approach design from zero? Here's something I wrote:", "Envie de voir comment j'aborde un design en partant de zéro ? Voici un article que j'ai écrit :")} <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jessicadowney/jumpstarting-your-app-conception-without-drawing-any-ui-8e5be35876c9">{t('Jumpstarting your app conception without drawing any UI', 'Jumpstarting your app conception without drawing any UI (en anglais)')}</a>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
