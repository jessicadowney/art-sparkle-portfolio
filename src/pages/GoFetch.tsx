
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


const GoFetch = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: t("GoFetch.ca — Pet Care Platform", "GoFetch.ca — plateforme de services pour animaux"),
    description:
      t("Case study: unifying the design system and lifting sitter conversion for GoFetch, a mobile-first platform connecting dog parents with trusted care providers.", "Étude de cas : unification du système de design et hausse de la conversion des gardiens pour GoFetch, une plateforme pensée d'abord pour le mobile qui met en relation les propriétaires de chiens et des gardiens de confiance."),
    path: '/gofetch',
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
                  2018
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-primary">GoFetch.ca</span> {t("Case Study", "Étude de cas")}
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("Pet Care Service Platform", "Plateforme de services pour animaux")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Role", "Rôle")}</h3>
                  <p className="text-foreground/70">{t("Lead Product Designer", "Designer produit principal")}<br/>{t("Head of Design", "Responsable du design")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Duration", "Durée")}</h3>
                  <p className="text-foreground/70">{t("November 2016 - May 2018", "novembre 2016 - mai 2018")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Platform", "Plateforme")}</h3>
                  <p className="text-foreground/70">{t("Web & iOS Application", "Application web et iOS")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Led design practice at pet care startup from basement to established company", "Direction de la pratique du design dans une startup de services pour animaux, du sous-sol à une entreprise établie")}</li>
                    <li>• {t("Unified fragmented experiences across iOS app and website with consistent design system", "Unification des expériences fragmentées entre l'application iOS et le site web grâce à un système de design cohérent")}</li>
                    <li>• {t("Redesigned mobile-first sitter application flow, doubling conversion from 6% to 12%", "Refonte du parcours de candidature des gardiens, pensé d'abord pour le mobile, qui a doublé la conversion de 6 % à 12 %")}</li>
                    <li>• {t("Created cross-platform information architecture and visual identity", "Création de l'architecture de l'information et de l'identité visuelle multiplateformes")}</li>
                    <li>• {t("Established design team and processes during rapid company growth phase", "Mise en place de l'équipe et des processus de design pendant la phase de forte croissance de l'entreprise")}</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Overview", "Vue d'ensemble")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("GoFetch set out to simplify dog ownership by connecting dog parents with trusted care providers. The platform offered services like boarding, dog walking, daycare, and house sitting. I joined the company in November 2016, when the team was operating from a basement in Vancouver and included two cofounders, four engineers, and one junior designer. As the team grew, I led the design practice and brought on an illustrator to support the brand and product experience.", "GoFetch voulait simplifier la vie des propriétaires de chiens en les mettant en relation avec des gardiens de confiance. La plateforme proposait des services comme la pension, la promenade, la garderie et la garde à domicile. J'ai rejoint l'entreprise en novembre 2016, alors que l'équipe travaillait dans un sous-sol à Vancouver et comptait deux cofondateurs, quatre ingénieurs et une designer junior. À mesure que l'équipe grandissait, j'ai dirigé la pratique du design et recruté un illustrateur pour soutenir la marque et l'expérience produit.")}
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("My Role", "Mon rôle")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Lead Product Designer and Head of Design", "Designer produit principal et responsable du design")}</li>
                    <li>• {t("UX research, wireframing, interaction design, and UI", "Recherche UX, wireframes, design d'interaction et design d'interface")}</li>
                    <li>• {t("Branding and design system development", "Identité de marque et développement du système de design")}</li>
                    <li>• {t("Art direction and hiring", "Direction artistique et recrutement")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("Results", "Résultats")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Created a cross-platform design system", "Création d'un système de design multiplateforme")}</li>
                    <li>• {t("Doubled sitter conversion rate (6% to 12%)", "Taux de conversion des gardiens doublé (de 6 % à 12 %)")}</li>
                    <li>• {t("Brought brand and UX consistency to a fragmented product", "Cohérence de la marque et de l'UX apportée à un produit fragmenté")}</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge #1: Platform Discrepancies", "Défi n° 1 : des plateformes disparates")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("GoFetch originally launched as an iOS app offering dog walking only. Later, the company expanded services through a website modeled after Airbnb (circa 2016). However, this resulted in fragmented experiences:", "GoFetch a d'abord été lancé comme une application iOS proposant uniquement la promenade de chiens. Plus tard, l'entreprise a élargi ses services via un site web inspiré d'Airbnb (vers 2016). Cela a toutefois produit des expériences fragmentées :")}
                </p>

                <div className="mb-8 text-center">
                  <picture className="contents"><source srcSet="/lovable-uploads/gfinitialioshome.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gfinitialioshome.png" 
                    alt={t("Initial iOS Home Screen", "Écran d'accueil iOS initial")} 
                    className="rounded-lg shadow-lg h-auto bg-white p-2 max-h-96 mx-auto"
                  /></picture>
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("The app and website used different information architectures and terminology", "L'application et le site utilisaient des architectures de l'information et une terminologie différentes")}</li>
                  <li>• {t("Users struggled to navigate due to inconsistent structure", "Les utilisateurs avaient du mal à naviguer à cause d'une structure incohérente")}</li>
                  <li>• {t("The web platform prioritized boarding, while the app only highlighted walking", "La plateforme web mettait la pension en avant, alors que l'application ne valorisait que la promenade")}</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/GoFetch-Web-Home.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/GoFetch-Web-Home.png" 
                      alt={t("GoFetch Web Home Page", "Page d'accueil web de GoFetch")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/Old-GoFetch-Web-Find.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/Old-GoFetch-Web-Find.png" 
                      alt={t("Old GoFetch Web Find Page", "Ancienne page de recherche web de GoFetch")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/Old-GoFetch-Web-Sitter.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/Old-GoFetch-Web-Sitter.png" 
                    alt={t("Old GoFetch Web Sitter Profile", "Ancien profil de gardien sur le site web de GoFetch")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Examples of the problem:", "Exemples du problème :")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("iOS and web homepages showed different services", "Les pages d'accueil iOS et web présentaient des services différents")}</li>
                    <li>• {t("Key navigation labels were inconsistent", "Les principaux libellés de navigation étaient incohérents")}</li>
                    <li>• {t("Web design borrowed from Airbnb's focus on spaces, which didn't translate to pet care", "Le design web reprenait l'approche d'Airbnb centrée sur les lieux, qui ne convenait pas aux services pour animaux")}</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">{t("The Solution: Unified Design System & Navigation", "La solution : un système de design et une navigation unifiés")}</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("To address these issues, I created a brand and design system applied across both iOS and web platforms. This included:", "Pour résoudre ces problèmes, j'ai créé une marque et un système de design appliqués à la fois sur iOS et sur le web. Cela comprenait :")}
                </p>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/gofetch-sitemaps.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gofetch-sitemaps.png" 
                    alt={t("GoFetch Site Maps and Information Architecture", "Plans de site et architecture de l'information de GoFetch")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/gf-brand-square001.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gf-brand-square001.png" 
                    alt={t("GoFetch Brand Guidelines", "Charte de marque de GoFetch")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("A cohesive visual identity with shared UI components", "Une identité visuelle cohérente avec des composants d'interface partagés")}</li>
                  <li>• {t("Color palette, button styles, type system, and iconography", "Une palette de couleurs, des styles de boutons, un système typographique et une iconographie")}</li>
                  <li>• {t("Consistent naming and IA across all platforms", "Une nomenclature et une architecture de l'information cohérentes sur toutes les plateformes")}</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/GoFetch_UI_Kit_1.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/GoFetch_UI_Kit_1.png" 
                      alt={t("GoFetch UI Kit Part 1", "UI kit de GoFetch, partie 1")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/GoFetch_UI_Kit_2.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/GoFetch_UI_Kit_2.png" 
                      alt={t("GoFetch UI Kit Part 2", "UI kit de GoFetch, partie 2")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-3 text-primary">{t("Key updates:", "Principales mises à jour :")}</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• {t("Aligned homepage layouts for app and web", "Alignement des pages d'accueil de l'application et du site")}</li>
                    <li>• {t("Introduced tabs for core services (walks, boarding, daycare)", "Ajout d'onglets pour les services principaux (promenade, pension, garderie)")}</li>
                    <li>• {t("Redesigned search and profile experiences to reflect consistent logic", "Refonte de la recherche et des profils selon une logique cohérente")}</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/homepage-integration.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/homepage-integration.png" 
                      alt={t("Homepage Integration", "Intégration de la page d'accueil")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/search-integration.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/search-integration.png" 
                      alt={t("Search Integration", "Intégration de la recherche")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/dashboard-integration.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/dashboard-integration.png" 
                      alt={t("Dashboard Integration", "Intégration du tableau de bord")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <picture className="contents"><source srcSet="/lovable-uploads/gfios-home.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gfios-home.png" 
                    alt={t("Updated GoFetch iOS Home Screen", "Écran d'accueil iOS de GoFetch mis à jour")} 
                    className="rounded-lg shadow-lg h-auto bg-white p-2 max-h-96 mx-auto"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge #2: Improving Pet Sitter Application Conversion", "Défi n° 2 : améliorer la conversion des candidatures de gardiens")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("When GoFetch expanded into peer-to-peer services, the sitter application process became a critical funnel. However:", "Lorsque GoFetch s'est ouvert aux services entre particuliers, le processus de candidature des gardiens est devenu un entonnoir critique. Pourtant :")}
                </p>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/gfinitialsprprocess.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gfinitialsprprocess.png" 
                    alt={t("Initial Service Provider Process", "Processus initial pour les prestataires")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("Only 6% of potential sitters completed their profiles", "Seuls 6 % des gardiens potentiels terminaient leur profil")}</li>
                  <li>• {t("Out of 1,394 applicants, only 260 were onboarded", "Sur 1 394 candidats, seuls 260 étaient intégrés")}</li>
                  <li>• {t("Most traffic came from mobile, but the form was not responsive", "La majorité du trafic venait du mobile, mais le formulaire n'était pas adaptatif")}</li>
                  <li>• {t("Error handling and input validation were poor", "La gestion des erreurs et la validation des saisies étaient médiocres")}</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/gfga1.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/gfga1.png" 
                      alt={t("Google Analytics Data Part 1", "Données Google Analytics, partie 1")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/gfga2.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/gfga2.png" 
                      alt={t("Google Analytics Data Part 2", "Données Google Analytics, partie 2")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/gfinitialmobilesp.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/gfinitialmobilesp.png" 
                    alt={t("Initial Mobile Service Provider Experience", "Expérience mobile initiale pour les prestataires")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">{t("The Solution: Mobile-First, Guided Application Flow", "La solution : un parcours de candidature guidé, pensé d'abord pour le mobile")}</h3>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("I redesigned the sitter application as a mobile-first experience, introducing:", "J'ai repensé la candidature des gardiens comme une expérience conçue d'abord pour le mobile, avec :")}
                </p>

                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("A multi-step wizard for first-time users", "Un assistant en plusieurs étapes pour les nouveaux utilisateurs")}</li>
                  <li>• {t("A two-level nav for returning applicants", "Une navigation à deux niveaux pour les candidats qui reviennent")}</li>
                  <li>• {t("Per-step validation and better error recovery", "Une validation à chaque étape et une meilleure récupération après erreur")}</li>
                  <li>• {t("Responsive form layout across devices", "Une mise en page de formulaire adaptative sur tous les appareils")}</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/gfwiz1.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/gfwiz1.png" 
                      alt={t("GoFetch Wizard Step 1", "Assistant GoFetch, étape 1")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/gfwiz2.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/gfwiz2.png" 
                      alt={t("GoFetch Wizard Step 2", "Assistant GoFetch, étape 2")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/gfwiz3.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/gfwiz3.png" 
                      alt={t("GoFetch Wizard Step 3", "Assistant GoFetch, étape 3")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <picture className="contents"><source srcSet="/lovable-uploads/newgfspform.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/newgfspform.png" 
                    alt={t("New GoFetch Service Provider Form", "Nouveau formulaire GoFetch pour les prestataires")} 
                    className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                  /></picture>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/aboutyou-ftu.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/aboutyou-ftu.png" 
                      alt={t("About You - First Time User Flow", "« À propos de vous » — parcours d'un nouvel utilisateur")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/aboutyou-ru.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/aboutyou-ru.png" 
                      alt={t("About You - Returning User Flow", "« À propos de vous » — parcours d'un utilisateur existant")} 
                      className="rounded-lg shadow-lg w-full h-auto bg-white p-2"
                    /></picture>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-primary">{t("Results", "Résultats")}</h3>
                <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                  <li>• {t("Doubled conversion from 6% to 12%", "Conversion doublée, de 6 % à 12 %")}</li>
                  <li>• {t("Improved user satisfaction and decreased abandonment", "Satisfaction des utilisateurs améliorée et abandons réduits")}</li>
                  <li>• {t("Set foundation for future service provider onboarding improvements", "Base posée pour les futures améliorations de l'intégration des prestataires")}</li>
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[t("Product Design", "Design produit"), t("Design Systems", "Systèmes de design"), t("Mobile UX", "UX mobile"), t("Conversion Optimization", "Optimisation de la conversion"), t("Brand Design", "Design de marque"), "User Research", t("Information Architecture", "Architecture de l'information")].map((tag, index) => (
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

export default GoFetch;
