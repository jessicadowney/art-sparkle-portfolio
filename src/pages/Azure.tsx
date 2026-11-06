
import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { useLanguage } from '@/i18n/LanguageProvider';


const Azure = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: t("Virtual Visit Sample Builder — Azure Communication Services", "Générateur d'exemples de consultations virtuelles — Azure Communication Services"),
    description:
      t("Case study: a no-code developer tool for Azure Communication Services to build and customize virtual healthcare visits, with ARM template generation and downloadable repos.", "Étude de cas : un outil sans code pour développeurs d'Azure Communication Services, permettant de créer et de personnaliser des consultations de santé virtuelles, avec génération de modèles ARM et dépôts téléchargeables."),
    path: '/azure-sample-builder',
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
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mb-6 tracking-tight leading-tight">
                  <span className="text-primary break-words">Azure Communication Services</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("Virtual Visit Sample Builder", "Générateur d'exemples de consultations virtuelles")}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Led UX design for Virtual Visit Sample Builder to simplify Azure Communication Services adoption", "Direction de l'UX du Virtual Visit Sample Builder pour simplifier l'adoption d'Azure Communication Services")}</li>
                    <li>• {t("Facilitated Azure Communication Services's first remote design sprint from problem definition to customer validation", "Animation du premier design sprint à distance d'Azure Communication Services, de la définition du problème à la validation client")}</li>
                    <li>• {t("Created no-code builder generating deployable ARM templates and project assets", "Création d'un générateur sans code produisant des modèles ARM déployables et les ressources du projet")}</li>
                    <li>• {t("Designed Fluent UI-compliant interface supporting healthcare and enterprise scenarios", "Conception d'une interface conforme à Fluent UI, adaptée aux scénarios de santé et d'entreprise")}</li>
                    <li>• {t("Delivered tool now used across Microsoft field teams and partner engagements", "Livraison d'un outil désormais utilisé par les équipes terrain de Microsoft et dans les missions avec des partenaires")}</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Overview", "Vue d'ensemble")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Azure Communication Services enables developers to integrate voice, video, chat, and SMS into their applications using the same reliable platform that powers Microsoft Teams. In May 2021, I led the UX and UI design for the **Virtual Visit Sample Builder**—a tool designed to help developers quickly create and customize virtual appointments experiences using Azure Communication Services.", "Azure Communication Services permet aux développeurs d'intégrer la voix, la vidéo, le chat et les SMS à leurs applications grâce à la même plateforme fiable que celle de Microsoft Teams. En mai 2021, j'ai dirigé le design UX et UI du **Virtual Visit Sample Builder** — un outil conçu pour aider les développeurs à créer et personnaliser rapidement des expériences de rendez-vous virtuels avec Azure Communication Services.")}
                </p>
                
                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/dfec2eed-75b5-42ba-b425-61980e91c034.png" 
                    alt={t("Azure Communication Services Virtual Visit Sample Builder", "Virtual Visit Sample Builder d'Azure Communication Services")}
                    className="w-full h-auto rounded-lg shadow-lg"
                  /></picture>
                </div>
                
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("The project began with Azure Communication Services' first remote design sprint, bringing together a cross-functional team to ideate, prototype, and validate a tool that reduces setup friction for customers deploying virtual visits.", "Le projet a débuté avec le premier design sprint à distance d'Azure Communication Services, qui a réuni une équipe interfonctionnelle pour imaginer, prototyper et valider un outil réduisant les frictions de configuration pour les clients qui déploient des consultations virtuelles.")}
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("My Role", "Mon rôle")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Lead Product Designer for developer experience", "Designer produit principal pour l'expérience développeur")}</li>
                    <li>• {t("Facilitated the remote design sprint", "Animation du design sprint à distance")}</li>
                    <li>• {t("Conducted customer validation and user research", "Validation auprès des clients et recherche utilisateur")}</li>
                    <li>• {t("Led research, information architecture, and UX/UI design", "Direction de la recherche, de l'architecture de l'information et du design UX/UI")}</li>
                    <li>• {t("Created the design system for all builder components", "Création du système de design de tous les composants du générateur")}</li>
                    <li>• {t("Collaborated closely with product managers, engineers, and technical writers", "Collaboration étroite avec les chefs de produit, les ingénieurs et les rédacteurs techniques")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("Results", "Résultats")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Delivered an interactive sample builder used across healthcare partner engagements", "Livraison d'un générateur d'exemples interactif utilisé dans les missions avec des partenaires du secteur de la santé")}</li>
                    <li>• {t("Supported faster proof-of-concept deployments by Microsoft field teams", "Accélération des déploiements de preuves de concept par les équipes terrain de Microsoft")}</li>
                    <li>• {t("Used as a demo and training resource for Azure Communication Services adoption", "Utilisé comme ressource de démonstration et de formation pour l'adoption d'Azure Communication Services")}</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Design Sprint Process", "Déroulement du design sprint")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The project followed a structured five-phase design sprint:", "Le projet a suivi un design sprint structuré en cinq phases :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("**Understand:** Lightning talks framed the problem space through customer journeys and competitive analysis.", "**Comprendre :** des présentations éclair ont cadré le problème à travers les parcours clients et l'analyse concurrentielle.")}</li>
                  <li>• {t("**Define:** We framed our core challenge: \"How might we stop hand-holding our customers and help them confidently build an Azure Communication Services virtual visits solution?\"", "**Définir :** nous avons formulé notre défi central : « Comment cesser de prendre nos clients par la main et les aider à construire en toute confiance une solution de consultations virtuelles avec Azure Communication Services ? »")}</li>
                  <li>• {t("**Sketch & Decide:** Through sketching and critique, we aligned on a storyboard for a no-code virtual visit builder.", "**Esquisser et décider :** grâce aux esquisses et aux critiques, nous nous sommes mis d'accord sur un storyboard pour un générateur de consultations virtuelles sans code.")}</li>
                  <li>• {t("**Prototype:** A clickable prototype was developed in Figma.", "**Prototyper :** un prototype cliquable a été développé dans Figma.")}</li>
                  <li>• {t("**Validate:** We tested the prototype with real customers including Microsoft CSE, CTCA, NTT, Avanade, and Specsavers.", "**Valider :** nous avons testé le prototype avec de vrais clients, dont Microsoft CSE, CTCA, NTT, Avanade et Specsavers.")}</li>
                </ul>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{t("Design Sprint Process", "Déroulement du design sprint")}</h3>
                  <div className="max-w-4xl mx-auto">
                    <picture className="contents"><source srcSet="/lovable-uploads/4edd9b31-c7a9-47a5-aaf3-aea2d49ee270.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/4edd9b31-c7a9-47a5-aaf3-aea2d49ee270.png" 
                      alt={t("Design Sprint Process showing 6 phases: Understand, Define, Sketch, Decide, Prototype, and Validate with corresponding dates", "Déroulement du design sprint en 6 phases : comprendre, définir, esquisser, décider, prototyper et valider, avec les dates correspondantes")}
                      className="w-full h-auto rounded-lg shadow-lg"
                    /></picture>
                  </div>
                </div>
                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge #1: Simplifying Developer Onboarding", "Défi n° 1 : simplifier la prise en main pour les développeurs")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("Many customers were overwhelmed by the amount of code required to build a virtual visit experience from scratch. They needed:", "De nombreux clients étaient submergés par la quantité de code nécessaire pour construire une expérience de consultation virtuelle de zéro. Ils avaient besoin de :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("A guided entry point to try Azure Communication Services with minimal setup", "Un point d'entrée guidé pour essayer Azure Communication Services avec un minimum de configuration")}</li>
                  <li>• {t("Clarity on what was configurable versus hardcoded", "Savoir clairement ce qui est configurable et ce qui est codé en dur")}</li>
                  <li>• {t("A faster way to visualize Azure Communication Services features in action", "Un moyen plus rapide de voir les fonctionnalités d'Azure Communication Services en action")}</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-6 text-primary">{t("Solution: Configurable Sample Builder", "Solution : un générateur d'exemples configurable")}</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("We created an interactive sample builder that:", "Nous avons créé un générateur d'exemples interactif qui :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("Allows users to select key experience settings (e.g., lobby type, user roles, branding)", "Permet de choisir les principaux paramètres de l'expérience (p. ex. type de salle d'attente, rôles des utilisateurs, image de marque)")}</li>
                  <li>• {t("Generates an Azure Resource Manager (ARM) template deployable to Azure", "Génère un modèle Azure Resource Manager (ARM) déployable sur Azure")}</li>
                  <li>• {t("Produces a downloadable repository containing all project assets", "Produit un dépôt téléchargeable contenant toutes les ressources du projet")}</li>
                  <li>• {t("Includes embedded documentation and guidance", "Intègre de la documentation et des conseils")}</li>
                </ul>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">{t("Key Features:", "Fonctionnalités clés :")}</h4>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("No-code configuration UI with live preview", "Interface de configuration sans code avec aperçu en direct")}</li>
                    <li>• {t("ARM template generation for Azure deployment", "Génération de modèles ARM pour le déploiement sur Azure")}</li>
                    <li>• {t("Clear instructional scaffolding for healthcare scenarios", "Un accompagnement pédagogique clair pour les scénarios de santé")}</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge #2: Aligning with Azure & Microsoft Fluent Design", "Défi n° 2 : s'aligner sur Azure et sur Microsoft Fluent Design")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The builder needed to align with Azure product standards and Microsoft's Fluent UI, and be usable by both developers and non-technical stakeholders.", "Le générateur devait respecter les standards des produits Azure et le Fluent UI de Microsoft, et être utilisable aussi bien par les développeurs que par des parties prenantes non techniques.")}
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-primary">{t("Solution: Design System & Interaction Patterns", "Solution : système de design et modèles d'interaction")}</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("I developed a UI concept based on Fluent UI and Azure Dev Portal conventions, featuring:", "J'ai développé un concept d'interface fondé sur Fluent UI et sur les conventions d'Azure Dev Portal, avec :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("Tabbed configuration panels", "Des panneaux de configuration à onglets")}</li>
                  <li>• {t("Consistent input and validation behaviors", "Des comportements de saisie et de validation cohérents")}</li>
                  <li>• {t("Accessible layout with clear structure and interactions", "Une mise en page accessible, à la structure et aux interactions claires")}</li>
                </ul>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("I worked closely with engineering to ensure compliance with accessibility standards, dark mode, and localization.", "J'ai travaillé en étroite collaboration avec l'ingénierie pour garantir la conformité aux normes d'accessibilité, ainsi que la prise en charge du mode sombre et de la localisation.")}
                </p>

                <div className="grid grid-cols-1 gap-8 mb-8">
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <picture className="contents"><source srcSet="/lovable-uploads/2e2bc1f1-189f-4ecf-8660-b1a5a7318da8.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/2e2bc1f1-189f-4ecf-8660-b1a5a7318da8.png" 
                      alt={t("Azure Sample Builder - Template Selection and Call Interface", "Azure Sample Builder — sélection du modèle et interface d'appel")}
                      className="w-full h-auto"
                    /></picture>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <picture className="contents"><source srcSet="/lovable-uploads/6c3557f2-5021-4c11-a363-91319eadb0f8.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/6c3557f2-5021-4c11-a363-91319eadb0f8.png" 
                      alt={t("Azure Sample Builder - Configuration and Review Interface", "Azure Sample Builder — interface de configuration et de révision")}
                      className="w-full h-auto"
                    /></picture>
                  </div>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Key Insights from Customer Validation", "Enseignements clés de la validation client")}</h2>
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("Simplicity and accessibility were key, especially in healthcare and retail.", "La simplicité et l'accessibilité étaient essentielles, surtout dans la santé et le commerce de détail.")}</li>
                  <li>• {t("Customers valued customization of branding, layout, and user roles.", "Les clients appréciaient la personnalisation de l'image de marque, de la mise en page et des rôles des utilisateurs.")}</li>
                  <li>• {t("Must-have features included call recording, file and screen sharing, and integration with existing systems.", "Parmi les fonctionnalités indispensables : l'enregistrement des appels, le partage de fichiers et d'écran, et l'intégration aux systèmes existants.")}</li>
                  <li>• {t("Smaller orgs wanted turnkey solutions; larger enterprises viewed it as a customizable starting point.", "Les petites organisations voulaient des solutions clés en main ; les grandes entreprises y voyaient un point de départ personnalisable.")}</li>
                </ul>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Design Outcomes", "Résultats du design")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The final prototype offered:", "Le prototype final proposait :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("A template-driven builder with branding and layout options", "Un générateur fondé sur des modèles, avec des options d'image de marque et de mise en page")}</li>
                  <li>• {t("Preview modes by device and user role", "Des modes d'aperçu par appareil et par rôle d'utilisateur")}</li>
                  <li>• {t("ARM template-based deployment to Azure", "Un déploiement sur Azure fondé sur des modèles ARM")}</li>
                </ul>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Impact and What's Next", "Impact et suite")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The Virtual Visit Sample Builder was adopted by Microsoft field teams and partners as a key tool for Azure Communication Services adoption.", "Le Virtual Visit Sample Builder a été adopté par les équipes terrain de Microsoft et par des partenaires comme un outil clé pour l'adoption d'Azure Communication Services.")}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("Outcomes:", "Résultats :")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Accelerated Azure Communication Services implementation", "Accélération de la mise en œuvre d'Azure Communication Services")}</li>
                    <li>• {t("Helped customers onboard with less friction", "Prise en main facilitée pour les clients, avec moins de frictions")}</li>
                    <li>• {t("Provided a base for future development", "Base solide pour les développements futurs")}</li>
                  </ul>
                </div>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("The sample builder continued to evolve after launch — including work to add AI meeting capabilities that support more advanced scenarios and deepen its value across sectors.", "Le générateur d'exemples a continué d'évoluer après son lancement — notamment avec l'ajout de capacités de réunion par IA pour des scénarios plus avancés et une valeur accrue dans tous les secteurs.")}
                </p>

                <div className="flex flex-wrap gap-3 mt-8 mb-12">
                  {[t("Product Design", "Design produit"), t("Developer Experience", "Expérience développeur"), t("UX Research", "Recherche UX"), t("Design Systems", "Systèmes de design"), "Azure", t("Healthcare Technology", "Technologies de santé"), t("Information Architecture", "Architecture de l'information")].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Project Videos", "Vidéos du projet")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Watch these demonstrations of the Azure Communication Services Virtual Visit Sample Builder in action.", "Regardez ces démonstrations du Virtual Visit Sample Builder d'Azure Communication Services en action.")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oYufdHbGJhA?start=3"
                      title={t("Azure Communication Services Demo 1", "Azure Communication Services — démonstration 1")}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oYufdHbGJhA?start=3"
                      title={t("Azure Communication Services Demo 2", "Azure Communication Services — démonstration 2")}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button 
                    onClick={() => window.open('https://ms.portal.azure.com/#view/Microsoft_Azure_VirtualVisitsBuilder/SampleBuilder.ReactView', '_blank', 'noopener,noreferrer')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  >
                    {t("Try the Sample Builder", "Essayer le générateur d'exemples")}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
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

export default Azure;
