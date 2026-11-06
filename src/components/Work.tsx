
import React from 'react';
import WorkCard from './WorkCard';
import { useLanguage } from '@/i18n/LanguageProvider';

// Index of the first project shown under the "Earlier work" label.
const EARLIER_WORK_START = 3;

const Work: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: t("Frontier Tuning: Making AI Agent Improvement Understandable", "Frontier Tuning : rendre l'amélioration des agents IA compréhensible"),
      description: t("Research, coded prototypes, and a guided improvement journey that help makers and subject-matter experts improve AI agents without first needing to understand model training.", "Recherche, prototypes codés et parcours d'amélioration guidé qui aident les créateurs et les experts métier à améliorer des agents IA sans avoir besoin de maîtriser l'entraînement des modèles."),
      tags: [t("Password protected", "Protégé par mot de passe"), t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("AI Agents", "Agents IA"), t("Prototyping", "Prototypage"), t("Interaction Design", "Design d'interaction")],
      image: "/placeholder.svg",
      link: "/frontier-tuning",
      year: "2025–2026",
      featured: true
    },
    {
      title: t("Phone Number Shopping Cart for Azure Communication Services", "Panier d'achat de numéros de téléphone pour Azure Communication Services"),
      description: t("A redesigned phone number acquisition experience that replaced rigid one-at-a-time purchasing with a flexible shopping cart, enabling multi-number provisioning and improving user satisfaction.", "Une expérience d'acquisition de numéros de téléphone repensée, qui remplace l'achat rigide un numéro à la fois par un panier flexible, permettant d'obtenir plusieurs numéros et d'améliorer la satisfaction des utilisateurs."),
      tags: [t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("Azure Portal", "Portail Azure"), t("Developer Experience", "Expérience développeur"), t("E-commerce UX", "UX e-commerce")],
      image: "/lovable-uploads/e8fbc49c-4872-4595-a175-5180913da088.png",
      link: "/azure-phone-numbers",
      year: "2022"
    },
    {
      title: t("Virtual Visit Sample Builder for Azure Communication Services", "Générateur d'exemples de consultations virtuelles pour Azure Communication Services"),
      description: t("A developer tool for Azure Communication Services that helps create and customize virtual healthcare experiences with no-code configuration, ARM template generation, and downloadable repositories.", "Un outil pour développeurs d'Azure Communication Services qui aide à créer et personnaliser des expériences de santé virtuelles grâce à une configuration sans code, à la génération de modèles ARM et à des dépôts téléchargeables."),
      tags: [t("Product Design", "Design produit"), t("Developer Experience", "Expérience développeur"), t("UX Research", "Recherche UX"), t("Design Systems", "Systèmes de design"), t("Azure", "Azure"), t("Healthcare Technology", "Technologies de santé")],
      image: "/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.png",
      link: "/azure-sample-builder",
      year: "2021"
    },
    {
      title: "GoFetch.ca",
      description: t("A pet care service platform that connects dog parents with trusted care providers, featuring unified design systems and improved sitter conversion rates through mobile-first experiences.", "Une plateforme de services pour animaux qui met en relation les propriétaires de chiens et des gardiens de confiance, avec un système de design unifié et de meilleurs taux de conversion des gardiens grâce à des expériences pensées d'abord pour le mobile."),
      tags: [t("Product Design", "Design produit"), t("Design Systems", "Systèmes de design"), t("Mobile UX", "UX mobile"), t("Conversion Optimization", "Optimisation de la conversion"), t("Brand Design", "Design de marque")],
      image: "/lovable-uploads/577cf926-a215-446a-b74a-b4da42e6c3ab.png",
      link: "/gofetch",
      year: "2018"
    },
    {
      title: "Amped Wireless Ally",
      description: t("A white-labeled security and parental control app designed for Wi-Fi routers, featuring streamlined setup flows and intuitive network management for families.", "Une application de sécurité et de contrôle parental en marque blanche pour routeurs Wi-Fi, avec des parcours de configuration simplifiés et une gestion intuitive du réseau pour les familles."),
      tags: [t("Mobile Design", "Design mobile"), t("UX Strategy", "Stratégie UX"), t("Information Architecture", "Architecture de l'information"), t("Mobile UX", "UX mobile")],
      image: "/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.png",
      link: "/ally",
      year: "2016"
    },
    {
      title: t("Microsoft OneNote: Cloud Attachment Insertion Prompt", "Microsoft OneNote : invite d'insertion de pièces jointes cloud"),
      description: t("A collaborative note-taking platform feature that reinstated cloud attachment capabilities with contextual options based on file type, improving user workflow and platform parity.", "Une fonctionnalité de la plateforme collaborative de prise de notes qui rétablit les pièces jointes cloud avec des options contextuelles selon le type de fichier, améliorant le flux de travail et la parité entre plateformes."),
      tags: [t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("Accessibility", "Accessibilité"), t("Fluent UI", "Fluent UI")],
      image: "/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.png",
      link: "/onenote",
      year: "2019"
    },
    {
      title: "syngo® Lab Inventory Manager (sLIM)",
      description: t("A cloud-based inventory management system redesign for Siemens Healthineers, focusing on simplifying complex navigation and improving usability for lab professionals.", "La refonte d'un système de gestion des stocks dans le cloud pour Siemens Healthineers, centrée sur la simplification d'une navigation complexe et l'amélioration de l'utilisabilité pour les professionnels de laboratoire."),
      tags: [t("Information Architecture", "Architecture de l'information"), t("UX Research", "Recherche UX"), t("Interface Design", "Design d'interface"), t("Healthcare Technology", "Technologies de santé")],
      image: "/lovable-uploads/1679930e-73ec-4331-bbf1-af89667007ec.png",
      link: "/slim",
      year: "2012"
    }
  ];

  return (
    <section id="work" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {t('Selected', 'Réalisations')} <span className="text-primary">{t('Work', 'choisies')}</span>
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
            <React.Fragment key={index}>
              {index === EARLIER_WORK_START && (
                <h3 className="md:col-span-2 text-2xl font-light tracking-tight mt-8 text-foreground/80">
                  {t('Earlier', 'Travaux')} <span className="text-primary">{t('work', 'antérieurs')}</span>
                </h3>
              )}
              <div
                className={`animate-scale-in ${project.featured ? 'md:col-span-2' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <WorkCard {...project} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
