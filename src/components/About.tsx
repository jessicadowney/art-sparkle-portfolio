
import React from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              {t("About", "À propos")} <em>{t("Me", "de moi")}</em>
            </h2>
          </div>
          
          <blockquote className="max-w-3xl mx-auto mb-12 text-2xl md:text-3xl font-light leading-snug tracking-tight text-balance">
            {t("I work best in spaces where things are a bit undefined — where sharp thinking, strong collaboration, and good taste can change the trajectory of a product.", "Je donne le meilleur de moi-même dans les contextes un peu flous — là où une réflexion rigoureuse, une collaboration solide et du bon goût peuvent changer la trajectoire d'un produit.")}
          </blockquote>

          <div className="mb-12">
            <div className="animate-fade-in glass-container rounded-2xl p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("Hi! I'm Jessica — a senior product designer who makes messy ideas click.", "Bonjour ! Je suis Jessica — designer produit senior qui rend les idées confuses limpides.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("I turn ambiguity into clarity, aligning teams around intuitive solutions that solve real user problems and drive business outcomes. Whether I'm shaping product direction, untangling complex systems, or pushing pixels with intent, I design with both empathy and precision.", "Je transforme le flou en clarté, en alignant les équipes autour de solutions intuitives qui résolvent de vrais problèmes utilisateurs et servent les objectifs de l'entreprise. Que je définisse la direction d'un produit, démêle des systèmes complexes ou peaufine chaque pixel avec intention, je conçois avec autant d'empathie que de précision.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("Right now, I'm at Microsoft, working on Copilot extensibility.", "En ce moment, je suis chez Microsoft, où je travaille sur l'extensibilité de Copilot.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t("I've lived and worked across France, the US, the Netherlands, and now Canada, and I bring that global perspective into how I think, design, and lead. I believe good design makes technology feel human — not just usable, but considerate.", "J'ai vécu et travaillé en France, aux États-Unis, aux Pays-Bas et maintenant au Canada, et j'apporte cette perspective mondiale dans ma façon de réfléchir, de concevoir et de diriger. Je crois qu'un bon design rend la technologie humaine — pas seulement utilisable, mais attentionnée.")}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("Outside of work, I'm a food nerd, a corgi-walker, and a mom of two. (Ask me about mochi donuts or bingsu.)", "En dehors du travail, je suis passionnée de cuisine, promeneuse de corgi et maman de deux enfants. (Demandez-moi des nouvelles des beignets mochi ou du bingsu.)")}
              </p>

            </div>
          </div>
          
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
            {t("Want to see how I approach design from zero? Here's something I wrote:", "Envie de voir comment j'aborde un design en partant de zéro ? Voici un article que j'ai écrit :")} <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jessicadowney/jumpstarting-your-app-conception-without-drawing-any-ui-8e5be35876c9">{t('Jumpstarting your app conception without drawing any UI', 'Jumpstarting your app conception without drawing any UI (en anglais)')}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
