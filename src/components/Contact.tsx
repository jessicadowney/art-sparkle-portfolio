
import React from 'react';
import { Mail, Linkedin, Github, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      icon: Mail,
      label: t("Email", "E-mail"),
      href: "mailto:contact@jessicadowney.com",
      username: "contact@jessicadowney.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jessicadowney",
      username: "jessicadowney"
    },
    {
      icon: Smile,
      label: "ADP List",
      href: "https://adplist.org/mentors/jessica-downey",
      username: "@jessica-downey"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jessicadowney",
      username: "@jessicadowney"
    }
  ];

  return (
    <section id="contact" className="py-20 min-h-fit">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight antialiased">
              {t("Let's", 'Restons en')} <span className="italic">{t('Connect', 'contact')}</span>
            </h2>
            
            <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed antialiased">
              {t(
                "I'm passionate about creating meaningful digital experiences and always excited to discuss new opportunities. Let's connect and explore how we can create something amazing together.",
                "Je suis passionnée par la création d'expériences numériques porteuses de sens et toujours ravie de discuter de nouvelles opportunités. Échangeons et voyons ce que nous pouvons créer d'extraordinaire ensemble."
              )}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-scale-in no-underline hover:no-underline mb-4"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    textDecoration: 'none !important',
                    borderBottom: 'none !important'
                  }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300 antialiased">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed antialiased">{link.username}</p>
                </a>
              ))}
            </div>
            
            <div className="glass-container rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-4 antialiased">{t("Let's untangle something hard", 'Démêlons ensemble un sujet difficile')}</h3>
              <p className="text-foreground/70 mb-6 antialiased">
                {t(
                  "I do my best work in the undefined spaces — turning messy problems into products that feel obvious in hindsight. Currently at Microsoft, working on Copilot extensibility. If you're wrestling with something like that, I'd love to hear about it.",
                  "Je donne le meilleur de moi-même dans les espaces mal définis — transformer des problèmes confus en produits qui semblent évidents après coup. Actuellement chez Microsoft, je travaille sur l'extensibilité de Copilot. Si vous vous débattez avec un sujet de ce genre, j'aimerais en entendre parler."
                )}
              </p>
              <Button 
                size="lg"
                className="animated-gradient glass-stroke px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 antialiased"
              >
               <a href="mailto:contact@jessicadowney.com"
                  target="_blank"
                  className="!bg-transparent !border-none !p-0 !rounded-none hover:!bg-transparent !text-inherit !no-underline"
                  style={{ background: 'none !important', border: 'none !important', textDecoration: 'none !important' }}>{t('Get In Touch', 'Me contacter')}</a>
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
