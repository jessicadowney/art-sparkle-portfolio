import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { useLanguage } from '@/i18n/LanguageProvider';


const Slim = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: 'syngo Lab Inventory Manager (sLIM) — Siemens Healthineers',
    description:
      t("Case study: redesigning a cloud lab-inventory system for Siemens Healthineers — simplifying complex navigation and improving usability for lab professionals.", "Étude de cas : refonte d'un système cloud de gestion des stocks de laboratoire pour Siemens Healthineers — simplification d'une navigation complexe et amélioration de l'utilisabilité pour les professionnels de laboratoire."),
    path: '/slim',
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen relative">
        <ThreeBackground />
        <Header />
        <main id="main-content" tabIndex={-1} className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("Back to Portfolio", "Retour au portfolio")}
            </Button>
            
            <div className="glass-container rounded-lg p-6 md:p-8 mb-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  2012
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  syngo® Lab Inventory Manager <span className="text-primary">(sLIM)</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("Cloud-based inventory management system redesign for Siemens Healthineers", "Refonte d'un système de gestion des stocks dans le cloud pour Siemens Healthineers")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Role", "Rôle")}</h3>
                  <p className="text-foreground/70">{t("Interaction Design Consultant", "Consultante en design d'interaction")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Company", "Entreprise")}</h3>
                  <p className="text-foreground/70">Siemens Corporate Research</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Platform", "Plateforme")}</h3>
                  <p className="text-foreground/70">{t("Web Application", "Application web")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Redesigned complex cloud-based inventory management system facing usability complaints", "Refonte d'un système complexe de gestion des stocks dans le cloud, qui faisait l'objet de plaintes d'utilisabilité")}</li>
                    <li>• {t("Led information architecture overhaul, reducing navigation from 3 levels to 2", "Direction de la refonte de l'architecture de l'information, qui a ramené la navigation de 3 niveaux à 2")}</li>
                    <li>• {t("Facilitated stakeholder workshops and card sorting exercises to streamline user flows", "Animation d'ateliers avec les parties prenantes et d'exercices de tri de cartes pour fluidifier les parcours utilisateur")}</li>
                    <li>• {t("Delivered wireframes and visual design that improved interface consistency and efficiency", "Livraison de wireframes et d'un design visuel qui ont amélioré la cohérence et l'efficacité de l'interface")}</li>
                    <li>• {t("Final design replaced original software and is still used by Siemens Healthineers globally", "Le design final a remplacé le logiciel d'origine et est toujours utilisé par Siemens Healthineers dans le monde entier")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/43c5653f-5641-40d0-be8c-5fc6bc7ca71b.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/43c5653f-5641-40d0-be8c-5fc6bc7ca71b.png" 
                    alt={t("Siemens Brand Identity", "Identité de marque Siemens")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("My Role", "Mon rôle")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Led redesign of information architecture and UI", "Direction de la refonte de l'architecture de l'information et de l'interface")}</li>
                    <li>• {t("Facilitated stakeholder workshops and user research", "Animation d'ateliers avec les parties prenantes et de recherche utilisateur")}</li>
                    <li>• {t("Delivered wireframes and updated visual design", "Livraison de wireframes et d'un design visuel renouvelé")}</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/39a12b50-9924-444b-94a6-c018d2626fd8.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/39a12b50-9924-444b-94a6-c018d2626fd8.png" 
                      alt={t("sLIM Lab Workstation with RFID Scanner", "Poste de travail de laboratoire sLIM avec lecteur RFID")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("The Problem: Confusing Navigation & Inefficient Layout", "Le problème : une navigation confuse et une mise en page inefficace")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The original sLIM interface had several major usability issues:", "L'interface sLIM d'origine présentait plusieurs problèmes majeurs d'utilisabilité :")}
                </p>

                <div className="mb-8">
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("A three-tiered navigation system that was hard to understand", "Un système de navigation à trois niveaux, difficile à comprendre")}</li>
                    <li>• {t("Too much horizontal space taken by menus, leaving little room for content", "Les menus occupaient trop d'espace horizontal, laissant peu de place au contenu")}</li>
                    <li>• {t("Important buttons changed location dynamically, frustrating users", "Des boutons importants changeaient d'emplacement de façon dynamique, ce qui frustrait les utilisateurs")}</li>
                  </ul>
                </div>
                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/59fc189a-118c-4664-b3bc-63eeb559d1dd.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/59fc189a-118c-4664-b3bc-63eeb559d1dd.png" 
                    alt={t("Streamlined Workflow Management", "Gestion simplifiée des flux de travail")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>
                
                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/7fb41454-02d2-47d7-b36c-0804a23c8bf6.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/7fb41454-02d2-47d7-b36c-0804a23c8bf6.png" 
                    alt={t("Original Interface - Complex Navigation System", "Interface d'origine — système de navigation complexe")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Design Process", "Processus de design")}</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Stakeholder Discovery", "Découverte auprès des parties prenantes")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("I began with stakeholder interviews, including district sales managers who collected feedback globally. We confirmed consistent patterns of frustration over interface complexity.", "J'ai commencé par des entretiens avec les parties prenantes, notamment des directeurs des ventes régionaux qui recueillaient les retours à l'échelle mondiale. Nous avons confirmé des schémas constants de frustration liés à la complexité de l'interface.")}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Card Sorting Workshop", "Atelier de tri de cartes")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("To reorganize the navigation structure, I ran a card sorting exercise with internal stakeholders. This helped reduce the hierarchy from 3 levels to 2, significantly simplifying the user flow.", "Pour réorganiser la structure de navigation, j'ai mené un exercice de tri de cartes avec des parties prenantes internes. Cela a permis de ramener la hiérarchie de 3 niveaux à 2, simplifiant nettement le parcours utilisateur.")}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Wireframing & Redesign", "Wireframes et refonte")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("With a clear structure defined, I created high-level wireframes and a refreshed look and feel. The layout emphasized:", "Une fois la structure définie, j'ai créé des wireframes de haut niveau et un nouveau style visuel. La mise en page privilégiait :")}
                  </p>
                  <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                    <li>• {t("Consistent button placement", "Un emplacement cohérent des boutons")}</li>
                    <li>• {t("Better use of screen real estate", "Une meilleure exploitation de l'espace écran")}</li>
                    <li>• {t("More intuitive content grouping", "Un regroupement des contenus plus intuitif")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/e8eda6a9-4f4e-48bb-9024-830d86407f85.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/e8eda6a9-4f4e-48bb-9024-830d86407f85.png" 
                    alt={t("Redesigned Interface in Modern Lab Environment", "Interface repensée dans un laboratoire moderne")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/3ab16492-9e3d-41b7-95cf-5814e1c06b16.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/3ab16492-9e3d-41b7-95cf-5814e1c06b16.png" 
                      alt={t("Redesigned Current Stock Interface", "Interface de stock actuel repensée")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/5d9f6508-c786-48eb-96a2-53f489f1ee86.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/5d9f6508-c786-48eb-96a2-53f489f1ee86.png" 
                      alt={t("Improved Events Management Interface", "Interface de gestion des événements améliorée")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/79203c79-54ec-4315-9155-bd95ef97d107.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/79203c79-54ec-4315-9155-bd95ef97d107.png" 
                    alt={t("Lab Professionals Using Redesigned sLIM System", "Professionnels de laboratoire utilisant le système sLIM repensé")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Results", "Résultats")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("The redesigned sLIM interface replaced the original software and is now widely sold by Siemens Healthineers. Although the software has since been rebranded, it still uses the core information architecture and assets I developed.", "L'interface sLIM repensée a remplacé le logiciel d'origine et est aujourd'hui largement commercialisée par Siemens Healthineers. Bien que le logiciel ait depuis changé de marque, il utilise toujours l'architecture de l'information et les ressources essentielles que j'ai développées.")}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Impact:", "Impact :")}</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• {t("Drastically reduced user confusion", "Forte réduction de la confusion des utilisateurs")}</li>
                    <li>• {t("Improved interface consistency and efficiency", "Cohérence et efficacité de l'interface améliorées")}</li>
                    <li>• {t("Enhanced usability, supporting broader adoption across labs globally", "Utilisabilité renforcée, favorisant une adoption plus large dans les laboratoires du monde entier")}</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[t("Information Architecture", "Architecture de l'information"), t("UX Research", "Recherche UX"), t("Interface Design", "Design d'interface"), t("Healthcare Technology", "Technologies de santé"), "Stakeholder Workshops", "Card Sorting", "Wireframing"].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Slim;
