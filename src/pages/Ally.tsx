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


const Ally = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: t("Amped Wireless Ally — Router Security App", "Amped Wireless Ally — application de sécurité pour routeur"),
    description:
      t("Case study: a white-labeled Wi-Fi security and parental-control app with streamlined setup and intuitive network management for families.", "Étude de cas : une application de sécurité Wi-Fi et de contrôle parental en marque blanche, avec une configuration simplifiée et une gestion de réseau intuitive pour les familles."),
    path: '/ally',
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
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  Amped Wireless <span className="text-primary">Ally</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("White-labeled security and parental control app for Wi-Fi routers", "Application de sécurité et de contrôle parental en marque blanche pour routeurs Wi-Fi")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Role", "Rôle")}</h3>
                  <p className="text-foreground/70">{t("Senior Product Designer", "Designer produit senior")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Company", "Entreprise")}</h3>
                  <p className="text-foreground/70">AVG Innovation Group</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Platform", "Plateforme")}</h3>
                  <p className="text-foreground/70">{t("iOS & Android", "iOS et Android")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Led end-to-end UX design for white-labeled router security app at AVG Innovation Group", "Direction du design UX de bout en bout d'une application de sécurité pour routeur en marque blanche à l'AVG Innovation Group")}</li>
                    <li>• {t("Created mobile-first setup experience simplifying complex router installation", "Création d'une expérience de configuration pensée d'abord pour le mobile, qui simplifie l'installation complexe d'un routeur")}</li>
                    <li>• {t("Designed intuitive security and parental control features for non-technical users", "Conception de fonctionnalités de sécurité et de contrôle parental intuitives pour des utilisateurs non techniciens")}</li>
                    <li>• {t("Established design system and information architecture across iOS and Android", "Mise en place du système de design et de l'architecture de l'information sur iOS et Android")}</li>
                    <li>• {t("Successfully launched as key differentiator for Amped Wireless router product line", "Lancement réussi, devenu un atout différenciant majeur de la gamme de routeurs Amped Wireless")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/247125df-8a71-4d2d-ab6a-d13b1a061447.png" 
                    alt={t("Amped Wireless Ally App Branding", "Image de marque de l'application Amped Wireless Ally")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("Overview", "Vue d'ensemble")}</h3>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    {t("As part of AVG Innovation Group, our mandate was to develop new revenue opportunities for AVG through innovative digital products. One such opportunity was the creation of a white-labeled security and parental control app that would be sold alongside Wi-Fi routers. The project evolved into a full collaboration with Amped Wireless, who integrated our software into their Ally product line.", "Au sein de l'AVG Innovation Group, notre mission était de développer de nouvelles sources de revenus pour AVG grâce à des produits numériques innovants. L'une de ces opportunités était la création d'une application de sécurité et de contrôle parental en marque blanche, vendue avec des routeurs Wi-Fi. Le projet est devenu une collaboration à part entière avec Amped Wireless, qui a intégré notre logiciel à sa gamme Ally.")}
                  </p>

                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    {t("As the Senior Product Designer on this project, I was responsible for the end-to-end user experience, including information architecture, UI mockups and high-fidelity wireframes, end-to-end user flows, user story creation, and close collaboration with developers to ensure implementation quality.", "En tant que designer produit senior sur ce projet, j'étais responsable de l'expérience utilisateur de bout en bout : architecture de l'information, maquettes d'interface et wireframes haute fidélité, parcours utilisateur complets, rédaction des user stories et collaboration étroite avec les développeurs pour garantir la qualité de l'implémentation.")}
                  </p>

                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{t("My Role", "Mon rôle")}</h3>
                    <ul className="space-y-2 text-foreground/80 text-lg">
                      <li>• {t("Led UX design and information architecture", "Direction du design UX et de l'architecture de l'information")}</li>
                      <li>• {t("Created setup flows and security management UX", "Création des parcours de configuration et de l'UX de gestion de la sécurité")}</li>
                      <li>• {t("Partnered with research and visual design", "Collaboration avec la recherche et le design visuel")}</li>
                      <li>• {t("Delivered production-ready designs for iOS and Android", "Livraison de designs prêts pour la production sur iOS et Android")}</li>
                    </ul>
                  </div>

                  <hr className="my-12 border-border/50" />

                  <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge 1: Designing a Best-in-Class Setup Experience", "Défi 1 : concevoir une expérience de configuration exemplaire")}</h2>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("Setting up a home Wi-Fi router is often frustrating for users, particularly those less tech-savvy. Many routers require complex desktop-based installation and use overly technical language.", "Configurer un routeur Wi-Fi domestique est souvent frustrant, en particulier pour les personnes moins à l'aise avec la technique. De nombreux routeurs exigent une installation complexe depuis un ordinateur et emploient un langage trop technique.")}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Our goals:", "Nos objectifs :")}</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• {t("Create a mobile-first, simplified setup experience", "Créer une expérience de configuration simplifiée, pensée d'abord pour le mobile")}</li>
                      <li>• {t("Minimize steps required", "Réduire au minimum le nombre d'étapes")}</li>
                      <li>• {t("Use plain language and visuals to guide the user", "Guider l'utilisateur avec un langage simple et des visuels")}</li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/4ef70443-9eb6-47ea-8fd9-97a1257e8ab6.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/4ef70443-9eb6-47ea-8fd9-97a1257e8ab6.png" 
                      alt={t("Setup Flow - Mobile Setup Process", "Parcours de configuration — configuration sur mobile")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Research & Benchmarking:", "Recherche et étalonnage :")}</h3>
                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {t("I audited the setup flows of top routers including Apple Airport Extreme, Google OnHub, TP-Link, Netgear, and Asus. From this, I distilled best practices and identified friction points.", "J'ai analysé les parcours de configuration des principaux routeurs, dont Apple Airport Extreme, Google OnHub, TP-Link, Netgear et Asus. J'en ai tiré des bonnes pratiques et identifié les points de friction.")}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Design Outcomes:", "Résultats du design :")}</h3>
                    <ul className="space-y-2 text-foreground/80 mb-6">
                      <li>• {t("Created a streamlined, mobile-first setup flow", "Création d'un parcours de configuration fluide, pensé d'abord pour le mobile")}</li>
                      <li>• {t("Reduced technical jargon and simplified inputs", "Réduction du jargon technique et simplification des saisies")}</li>
                      <li>• {t("Designed for both single routers and mesh network expansion", "Conception adaptée aussi bien à un routeur seul qu'à l'extension d'un réseau maillé")}</li>
                    </ul>
                    <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                      {t("As the partnership evolved, I adapted the flow to account for Amped Wireless's specific hardware installation needs.", "Au fil du partenariat, j'ai adapté le parcours aux besoins d'installation spécifiques du matériel d'Amped Wireless.")}
                    </p>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/2f854d4a-e286-429f-9d93-a00755d55a5e.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/2f854d4a-e286-429f-9d93-a00755d55a5e.png" 
                      alt={t("Setup Flow - Decision Tree and User Paths", "Parcours de configuration — arbre de décision et chemins utilisateur")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <hr className="my-12 border-border/50" />

                  <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge 2: Simplifying Security and Parental Controls", "Défi 2 : simplifier la sécurité et le contrôle parental")}</h2>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    {t("As the product focus shifted to home network security and family safety, the app needed to offer powerful controls while remaining approachable.", "Alors que le produit se concentrait de plus en plus sur la sécurité du réseau domestique et la protection de la famille, l'application devait offrir des contrôles puissants tout en restant accessible.")}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Design Principles:", "Principes de design :")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-accent/30 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">{t("Humanly Readable", "Lisible pour les humains")}</h4>
                        <p className="text-foreground/70">{t("Devices are labeled clearly (e.g., \"Samsung Tablet\" instead of MAC addresses)", "Les appareils sont nommés clairement (p. ex. « Tablette Samsung » plutôt qu'une adresse MAC)")}</p>
                      </div>
                      <div className="bg-accent/30 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">{t("Smart Defaults", "Paramètres par défaut intelligents")}</h4>
                        <p className="text-foreground/70">{t("Child profiles auto-apply appropriate filters", "Les profils enfants appliquent automatiquement les filtres appropriés")}</p>
                      </div>
                      <div className="bg-accent/30 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">{t("Inclusive Design", "Design inclusif")}</h4>
                        <p className="text-foreground/70">{t("Works even if the user has no children", "Fonctionne même si l'utilisateur n'a pas d'enfants")}</p>
                      </div>
                      <div className="bg-accent/30 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">{t("User Empowerment", "Autonomie de l'utilisateur")}</h4>
                        <p className="text-foreground/70">{t("Celebrate the user for taking action to protect their network", "Féliciter l'utilisateur d'agir pour protéger son réseau")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/28c1745a-4fd1-41d1-943c-9ffe7c4b0d28.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/28c1745a-4fd1-41d1-943c-9ffe7c4b0d28.png" 
                      alt={t("App Interface Concepts - Main Dashboard Screens", "Concepts d'interface — écrans du tableau de bord principal")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Concept Development:", "Développement du concept :")}</h3>
                    <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                      {t("I proposed three distinct home screen concepts emphasizing network safety and content management. Through user testing, we validated Concept A as the most effective and intuitive.", "J'ai proposé trois concepts distincts d'écran d'accueil mettant l'accent sur la sécurité du réseau et la gestion des contenus. Grâce aux tests utilisateurs, nous avons validé le concept A comme le plus efficace et le plus intuitif.")}
                    </p>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/5d8b7f40-f027-45bb-b649-888938af482f.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/5d8b7f40-f027-45bb-b649-888938af482f.png" 
                      alt={t("User Testing Results and Design Iterations", "Résultats des tests utilisateurs et itérations de design")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("User Profile Management:", "Gestion des profils utilisateurs :")}</h3>
                    <ul className="space-y-2 text-foreground/80 mb-8">
                      <li>• {t("Users can assign devices to custom profiles", "Les utilisateurs peuvent associer des appareils à des profils personnalisés")}</li>
                      <li>• {t("Profiles allow setting time limits and blocking content categories", "Les profils permettent de fixer des limites de temps et de bloquer des catégories de contenu")}</li>
                      <li>• {t("Profiles work seamlessly across family and non-family use cases", "Les profils fonctionnent aussi bien dans un cadre familial que non familial")}</li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/4e2579b8-ffbd-43b4-b204-0c6669f4200d.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/4e2579b8-ffbd-43b4-b204-0c6669f4200d.png" 
                      alt={t("User Management Screens - Users List and Profile Details", "Écrans de gestion des utilisateurs — liste des utilisateurs et détails des profils")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/a72a1653-35a7-4b9b-8b48-212f2bf038c0.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/a72a1653-35a7-4b9b-8b48-212f2bf038c0.png" 
                      alt={t("Content Filtering and Device Management Screens", "Écrans de filtrage de contenu et de gestion des appareils")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Onboarding:", "Prise en main :")}</h3>
                    <ul className="space-y-2 text-foreground/80 mb-8">
                      <li>• {t("Personalized tips and security alerts at launch", "Conseils personnalisés et alertes de sécurité dès le lancement")}</li>
                      <li>• {t("Prompt users to enable key parental and malware protection features", "Invitation à activer les principales protections parentales et contre les logiciels malveillants")}</li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/3f8cb404-0f37-4ddd-b25d-b25208d8b1c1.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/3f8cb404-0f37-4ddd-b25d-b25208d8b1c1.png" 
                      alt={t("Security Features - AVG Protection Integration", "Fonctions de sécurité — intégration de la protection AVG")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/ec9681c4-9a25-43b2-8134-d97a49899d96.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/ec9681c4-9a25-43b2-8134-d97a49899d96.png" 
                      alt={t("Activity Monitoring and Time Management Features", "Suivi de l'activité et gestion du temps")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-12">
                    <picture className="contents"><source srcSet="/lovable-uploads/e238524c-864f-4019-8ed0-26f425c503d8.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/e238524c-864f-4019-8ed0-26f425c503d8.png" 
                      alt={t("Content Blocking and App Management Controls", "Blocage de contenu et contrôles de gestion des applications")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Final Design Deliverables:", "Livrables de design finaux :")}</h3>
                    <ul className="space-y-2 text-foreground/80 mb-8">
                      <li>• {t("High-fidelity screens for onboarding, content filtering, scheduling, and security alerts", "Écrans haute fidélité pour la prise en main, le filtrage de contenu, la planification et les alertes de sécurité")}</li>
                      <li>• {t("Delivered production specs to developers", "Livraison des spécifications de production aux développeurs")}</li>
                      <li>• {t("Shipped on time for launch in 2017 on both iOS and Android", "Livraison dans les délais pour le lancement de 2017 sur iOS et Android")}</li>
                    </ul>
                  </div>

                  <hr className="my-12 border-border/50" />

                  <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Results", "Résultats")}</h2>
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    {t("The Amped Wireless Ally app successfully launched and became a key value-add for their router product line. The design supported user-friendly installation, intuitive control, and accessible security management for a wide range of users.", "L'application Amped Wireless Ally a été lancée avec succès et est devenue un atout majeur de leur gamme de routeurs. Le design a permis une installation conviviale, un contrôle intuitif et une gestion de la sécurité accessible à un large public.")}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t("Impact:", "Impact :")}</h3>
                    <ul className="space-y-2 text-foreground/80 mb-8">
                      <li>• {t("Enabled Amped Wireless to enter the smart home market with a strong UX differentiator", "Permet à Amped Wireless d'entrer sur le marché de la maison connectée avec un solide atout différenciant en matière d'UX")}</li>
                      <li>• {t("Increased customer confidence in setting up and managing their networks", "Renforcement de la confiance des clients dans la configuration et la gestion de leur réseau")}</li>
                      <li>• {t("Provided AVG with a scalable model for future white-labeled security products", "Un modèle évolutif pour les futurs produits de sécurité en marque blanche d'AVG")}</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {[t("Mobile Design", "Design mobile"), t("UX Strategy", "Stratégie UX"), t("Information Architecture", "Architecture de l'information"), "User Research", "iOS Design", "Android Design", "Security UX", "Parental Controls"].map((tag, index) => (
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
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Ally;
