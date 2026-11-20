import React from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/i18n/LanguageProvider';

type Role = {
  title: string;
  company: string;
  location?: string; // only set when it isn't Vancouver
  period: string;
  description: string;
  achievements: string[];
};

// The two most recent roles carry the story and stay open; older roles collapse to one row.
const CURRENT_ROLES = 2;

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences: Role[] = [
    {
      title: t("Senior Product Designer", "Designer produit senior"),
      company: "Microsoft - Copilot Extensibility",
      period: t("Nov 2025 - Present", "nov. 2025 - présent"),
      description: t("Designing how makers and subject-matter experts improve AI agents without needing to understand model training.", "Je conçois la façon dont les créateurs et les experts métier améliorent des agents IA sans avoir besoin de comprendre l'entraînement des modèles."),
      achievements: [
        t("Shaped the conceptual model, evaluation and feedback experiences, terminology and end-to-end improvement journey", "Définition du modèle conceptuel, des expériences d'évaluation et de retour, de la terminologie et du parcours d'amélioration de bout en bout"),
        t("Used interactive prototypes for exploration and engineering handoff, in close partnership with research, content design, product, science and engineering", "Utilisation de prototypes interactifs pour l'exploration et la transmission à l'ingénierie, en étroite collaboration avec la recherche, le content design, le produit, la science des données et l'ingénierie")
      ]
    },
    {
      title: t("Senior Product Designer", "Designer produit senior"),
      company: "Microsoft - Azure Communication Services",
      period: "2021 - 2025",
      description: t("Owning UX/UI vision and design direction for new Azure Communication Services features in Azure portal, including Short Codes & Sample Builder, improving developer adoption and usability.", "Responsable de la vision UX/UI et de la direction de design des nouvelles fonctionnalités d'Azure Communication Services dans le portail Azure, dont Short Codes et Sample Builder, afin d'améliorer l'adoption et l'utilisabilité pour les développeurs."),
      achievements: [
        t("Hacked a redesign of telephone number purchasing experience during FHL 2022, securing executive approval for full-scale redesign", "Prototypage express d'une refonte de l'achat de numéros de téléphone pendant le FHL 2022, qui a obtenu l'aval de la direction pour une refonte complète"),
        t("Facilitated cross-functional alignment to drive API evolution supporting UX improvements across global markets", "Facilitation de l'alignement interfonctionnel pour faire évoluer les API et soutenir les améliorations UX sur les marchés mondiaux"),
        t("Validated design hypotheses using hypothesis testing framework with usability testing, A/B testing, and heuristic evaluations", "Validation des hypothèses de design via un cadre de test d'hypothèses combinant tests d'utilisabilité, tests A/B et évaluations heuristiques"),
        t("Led team ideation sessions and cross-functional design sprints with PMs and engineers for data-driven decisions", "Animation de sessions d'idéation et de design sprints interfonctionnels avec les chefs de produit et les ingénieurs pour prendre des décisions fondées sur les données")
      ]
    },
    {
      title: t("Product Designer", "Designer produit"),
      company: "Microsoft - Azure Communication Services",
      period: t("Jan 2021 - Sep 2021", "janv. 2021 - sept. 2021"),
      description: t("Designing wireframes, UI and prototypes for Azure Communication Services, focusing on Direct Routing UX and improving customer onboarding in Azure Portal.", "Conception de wireframes, d'interfaces et de prototypes pour Azure Communication Services, avec un focus sur l'UX de Direct Routing et l'amélioration de l'intégration des clients dans le portail Azure."),
      achievements: [
        t("Created UX for Direct Routing functionality", "Création de l'UX de la fonctionnalité Direct Routing"),
        t("Improved customer onboarding experience for Azure Communication Services", "Amélioration de l'intégration des clients à Azure Communication Services"),
        t("Contributed to design systems through wireframes and high-fidelity mockups", "Contribution aux systèmes de design via des wireframes et des maquettes haute fidélité")
      ]
    },
    {
      title: t("Product Designer", "Designer produit"),
      company: "Microsoft - OneNote",
      period: "2018 - 2021",
      description: t("Designing wireframes, UI and prototypes for Microsoft OneNote, focusing on integration improvements and syncing concepts across platforms.", "Conception de wireframes, d'interfaces et de prototypes pour Microsoft OneNote, avec un focus sur l'amélioration des intégrations et des concepts de synchronisation entre plateformes."),
      achievements: [
        t("Improved integration of OneNote Online in Microsoft Teams", "Amélioration de l'intégration de OneNote Online dans Microsoft Teams"),
        t("Adapted new syncing concept from OneNote Desktop to OneNote Online", "Adaptation du nouveau concept de synchronisation de OneNote Desktop à OneNote Online"),
        t("Enhanced cross-platform user experience consistency", "Renforcement de la cohérence de l'expérience utilisateur entre plateformes")
      ]
    },
    {
      title: t("Head of Product Design", "Responsable du design produit"),
      company: "GoFetch.ca",
      period: "2017 - 2018",
      description: t("Leading design meetings and running brainstorming sessions for new feature development. Provided UX and art direction to redesign web & iOS platforms.", "Animation des réunions de design et des séances de brainstorming pour le développement de nouvelles fonctionnalités. Direction UX et artistique de la refonte des plateformes web et iOS."),
      achievements: [
        t("Led requirements definition and UX architecture for platform redesign", "Pilotage de la définition des besoins et de l'architecture UX pour la refonte de la plateforme"),
        t("Designed wireframes, UI and prototypes for web, iOS and Android features", "Conception de wireframes, d'interfaces et de prototypes pour des fonctionnalités web, iOS et Android"),
        t("Created unified experience across all platforms", "Création d'une expérience unifiée sur toutes les plateformes"),
        t("Implemented new UI using HTML/SASS and React JS", "Intégration de la nouvelle interface en HTML/SASS et React JS")
      ]
    },
    {
      title: t("Senior Interaction Designer", "Designer d'interaction senior"),
      company: "AVG Technologies - Innovation Group",
      location: t("Amsterdam, Netherlands", "Amsterdam, Pays-Bas"),
      period: "2015 - 2016",
      description: t("Supported concept development within the Innovation Group, facilitating design sprints and creating high-fidelity prototypes for user testing.", "Soutien au développement de concepts au sein de l'Innovation Group, avec animation de design sprints et création de prototypes haute fidélité pour les tests utilisateurs."),
      achievements: [
        t("Facilitated design sprints and design iteration sessions", "Animation de design sprints et de sessions d'itération de design"),
        t("Created concept designs through storyboards, wireframes & prototypes", "Création de concepts via des storyboards, des wireframes et des prototypes"),
        t("Provided UX support for Scrum development teams", "Soutien UX aux équipes de développement Scrum"),
        t("Coded interactive prototypes for mobile, web & desktop products", "Développement de prototypes interactifs pour des produits mobiles, web et desktop")
      ]
    },
    {
      title: t("Interaction Designer", "Designer d'interaction"),
      company: "AVG Technologies - Innovation Group",
      location: t("Amsterdam, Netherlands", "Amsterdam, Pays-Bas"),
      period: "2012 - 2015",
      description: t("Supported concept development within the Innovation Group with focus on concept generation, storyboarding, and rapid prototyping.", "Soutien au développement de concepts au sein de l'Innovation Group, avec un focus sur la génération de concepts, les storyboards et le prototypage rapide."),
      achievements: [
        t("Led concept generation and wireframe sketching processes", "Pilotage des processus de génération de concepts et d'esquisse de wireframes"),
        t("Created quick prototypes for concept validation", "Création de prototypes rapides pour valider les concepts"),
        t("Contributed to innovation initiatives across multiple product lines", "Contribution à des initiatives d'innovation sur plusieurs gammes de produits")
      ]
    },
    {
      title: t("IXD/UX Designer", "Designer IXD/UX"),
      company: "Siemens Corporate Research USA",
      location: t("Princeton, NJ, USA", "Princeton (New Jersey), États-Unis"),
      period: "2011 - 2012", 
      description: t("Designed user interfaces for new Siemens products & systems, leading requirements definition and UX for healthcare & industry sector products.", "Conception d'interfaces pour de nouveaux produits et systèmes Siemens, avec pilotage de la définition des besoins et de l'UX de produits des secteurs de la santé et de l'industrie."),
      achievements: [
        t("Led new product development from requirement elicitation to final visual assets", "Pilotage du développement de nouveaux produits, du recueil des besoins aux visuels finaux"),
        t("Conducted user testing and stakeholder alignment for agile teams", "Réalisation de tests utilisateurs et alignement des parties prenantes pour des équipes agiles"),
        t("Produced information architecture and wireframes for stakeholder approval", "Production de l'architecture de l'information et de wireframes pour validation par les parties prenantes"),
        t("Provided UX consultancy across healthcare and industry business units", "Conseil UX auprès des unités métier santé et industrie")
      ]
    }
  ];

  const Company = ({ exp }: { exp: Role }) => (
    <>
      {exp.company}
      {exp.location && <span className="text-muted-foreground">{`, ${exp.location}`}</span>}
    </>
  );

  return (
    <section id="experience" className="py-24 md:py-32 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title={<em>{t('Experience', 'Expérience')}</em>}
            intro={t('Designing at the intersection of UX and product for 15+ years — across enterprise, industrial, and consumer experiences.', "Plus de 15 ans à concevoir à l'intersection de l'UX et du produit — pour des expériences d'entreprise, industrielles et grand public.")}
          />

          <div className="divide-y divide-border border-y border-border">
            {experiences.slice(0, CURRENT_ROLES).map((exp) => (
              <div key={exp.period} className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-8">
                <p className="text-muted-foreground tabular-nums">{exp.period}</p>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 antialiased">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium mb-4 antialiased"><Company exp={exp} /></p>
                  <p className="text-foreground/80 mb-4 leading-relaxed antialiased">{exp.description}</p>
                  <ul className="space-y-2 text-foreground/70 leading-relaxed antialiased">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-light tracking-tight mt-16 mb-4 text-foreground/80">
            {t('Earlier', 'Parcours')} <em>{t('roles', 'antérieur')}</em>
          </h3>
          <div className="divide-y divide-border border-y border-border">
            {experiences.slice(CURRENT_ROLES).map((exp) => (
              <details key={exp.period + exp.company + exp.title} className="group py-4">
                <summary className="relative grid cursor-pointer list-none gap-1 md:grid-cols-[12rem_1fr_2fr_1.5rem] md:gap-8 [&::-webkit-details-marker]:hidden">
                  <span className="text-muted-foreground tabular-nums">{exp.period}</span>
                  <span className="pr-8 md:pr-0">
                    <span className="block font-medium">{exp.title}</span>
                    <span className="block text-foreground/70"><Company exp={exp} /></span>
                  </span>
                  <span className="text-foreground/80 leading-relaxed">{exp.description}</span>
                  <ChevronDown className="absolute right-0 top-0 md:static h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="mt-4 space-y-2 text-foreground/70 leading-relaxed md:ml-[calc(12rem+2rem)] md:mr-[calc(1.5rem+2rem)]">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
