
import React from 'react';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';
import { useLanguage } from '@/i18n/LanguageProvider';

const Work: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t("Frontier Tuning: Making AI Agent Improvement Understandable", "Frontier Tuning : rendre l'amélioration des agents IA compréhensible"),
      role: t("Senior Product Designer, Microsoft Copilot Extensibility", "Designer produit senior, Microsoft Copilot Extensibility"),
      problem: t("Makers and subject-matter experts needed to improve AI agents without first understanding model training.", "Les créateurs et les experts métier devaient pouvoir améliorer des agents IA sans d'abord maîtriser l'entraînement des modèles."),
      made: t("The conceptual model, evaluation and feedback experiences, terminology and end-to-end improvement journey, with interactive prototypes as my main tool.", "Le modèle conceptuel, les expériences d'évaluation et de retour, la terminologie et le parcours d'amélioration de bout en bout, avec des prototypes interactifs comme principal outil."),
      locked: true,
      image: "/lovable-uploads/frontier-tuning-evaluation-criteria.webp",
      link: "/frontier-tuning",
      year: "2025–2026",
      featured: true
    },
    {
      title: t("Phone Number Shopping Cart for Azure Communication Services", "Panier d'achat de numéros de téléphone pour Azure Communication Services"),
      role: t("Led UX end to end. Self-initiated during Microsoft's FHL2022, then pitched and secured executive sponsorship.", "Responsable UX de bout en bout. Projet lancé de ma propre initiative lors du FHL2022 de Microsoft, puis présenté et soutenu par la direction."),
      problem: t("Buying phone numbers was rigid and one at a time, and key requirements and legal disclosures surfaced too late.", "L'achat de numéros était rigide, un à la fois, et les exigences et mentions légales apparaissaient trop tard."),
      made: t("A modular cart-based flow that gathers requirements upfront and explains legal disclosures, built as a working prototype.", "Un parcours modulaire à panier qui réunit les exigences en amont et clarifie les mentions légales, construit sous forme de prototype fonctionnel."),
      image: "/lovable-uploads/og-image.webp",
      link: "/azure-phone-numbers",
      year: "2022"
    },
    {
      title: t("Virtual Visit Sample Builder for Azure Communication Services", "Générateur d'exemples de consultations virtuelles pour Azure Communication Services"),
      role: t("Lead Product Designer for developer experience", "Designer produit principal pour l'expérience développeur"),
      problem: t("Developers found it hard to get started with Azure Communication Services for virtual healthcare visits.", "Les développeurs avaient du mal à démarrer avec Azure Communication Services pour des consultations de santé virtuelles."),
      made: t("A no-code builder that generates deployable ARM templates and project assets, on a Fluent UI interface. I also facilitated the team's first remote design sprint.", "Un générateur sans code qui produit des modèles ARM déployables et des ressources de projet, sur une interface Fluent UI. J'ai aussi animé le premier design sprint à distance de l'équipe."),
      image: "/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.webp",
      link: "/azure-sample-builder",
      year: "2021"
    }
  ];

  const earlier = [
    {
      title: "GoFetch.ca",
      line: t("Lead Product Designer and Head of Design. Unified an iOS app and website under one design system and redesigned the sitter application flow.", "Designer produit principal et responsable du design. J'ai unifié une application iOS et un site web dans un même système de design et repensé le parcours de candidature des gardiens."),
      link: "/gofetch",
      year: "2018"
    },
    {
      title: "Amped Wireless Ally",
      line: t("Senior Product Designer. Mobile-first router setup and parental controls for non-technical people, on iOS and Android.", "Designer produit senior. Configuration de routeur pensée d'abord pour le mobile et contrôle parental pour des non-spécialistes, sur iOS et Android."),
      link: "/ally",
      year: "2016"
    },
    {
      title: t("Microsoft OneNote: Cloud Attachment Insertion Prompt", "Microsoft OneNote : invite d'insertion de pièces jointes cloud"),
      line: t("Product Designer. Brought cloud attachments back to OneNote on UWP and Mac, with insertion prompts that adapt to the file type.", "Designer produit. Retour des pièces jointes cloud dans OneNote sur UWP et Mac, avec des invites d'insertion adaptées au type de fichier."),
      link: "/onenote",
      year: "2019"
    },
    {
      title: "syngo® Lab Inventory Manager (sLIM)",
      line: t("Interaction Design Consultant. Rebuilt the information architecture of Siemens Healthineers' lab inventory system, cutting navigation from three levels to two.", "Consultant en design d'interaction. Refonte de l'architecture de l'information du système de gestion des stocks de laboratoire de Siemens Healthineers, ramenant la navigation de trois niveaux à deux."),
      link: "/slim",
      year: "2012"
    }
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {t('Selected', 'Réalisations')} <em>{t('Work', 'choisies')}</em>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t(
              'A collection of projects that showcase my approach to solving complex design challenges and creating meaningful, accessible user experiences.',
              "Une sélection de projets qui illustrent ma façon de relever des défis de design complexes et de créer des expériences utilisateur utiles et accessibles."
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.link}
              className={`animate-scale-in ${project.featured ? 'md:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WorkCard {...project} />
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl font-light tracking-tight mb-4 text-foreground/80">
            {t('Earlier', 'Travaux')} <em>{t('work', 'antérieurs')}</em>
          </h3>
          <ul className="divide-y divide-border border-y border-border">
            {earlier.map((item) => (
              <li key={item.link} className="grid gap-1 py-4 md:grid-cols-[5rem_1fr_2fr] md:gap-6">
                <span className="text-muted-foreground tabular-nums">{item.year}</span>
                <Link to={item.link} className="font-medium">{item.title}</Link>
                <p className="text-foreground/80 leading-relaxed">{item.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
