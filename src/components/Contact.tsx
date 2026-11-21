
import React from 'react';
import { Mail, Linkedin, Github, Smile, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
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
    <section id="contact" className="py-24 md:py-32 min-h-fit">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={<>{t("Let's", 'Restons en')} <em>{t('Connect', 'contact')}</em></>}
            intro={t(
              "I'm passionate about creating meaningful digital experiences and always excited to discuss new opportunities. Let's connect and explore how we can create something amazing together.",
              "Je suis passionnée par la création d'expériences numériques porteuses de sens et toujours ravie de discuter de nouvelles opportunités. Échangeons et voyons ce que nous pouvons créer d'extraordinaire ensemble."
            )}
          />

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-balance mb-6 antialiased">{t("Let's untangle something hard", 'Démêlons ensemble un sujet difficile')}</h3>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed antialiased">
                {t(
                  "I do my best work in the undefined spaces — turning messy problems into products that feel obvious in hindsight. Currently at Microsoft, working on Copilot extensibility. If you're wrestling with something like that, I'd love to hear about it.",
                  "Je donne le meilleur de moi-même dans les espaces mal définis — transformer des problèmes confus en produits qui semblent évidents après coup. Actuellement chez Microsoft, je travaille sur l'extensibilité de Copilot. Si vous vous débattez avec un sujet de ce genre, j'aimerais en entendre parler."
                )}
              </p>
              <Button
                asChild
                size="lg"
                className="animated-gradient glass-stroke px-8 py-3 rounded-full text-lg antialiased"
              >
                <a href="mailto:contact@jessicadowney.com" className="no-underline">
                  {t('Get In Touch', 'Me contacter')}
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <ul className="divide-y divide-border border-y border-border self-start">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 no-underline"
                  >
                    <link.icon className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="font-medium">{link.label}</span>
                    <span className="ml-auto text-foreground/70 truncate">{link.username}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
