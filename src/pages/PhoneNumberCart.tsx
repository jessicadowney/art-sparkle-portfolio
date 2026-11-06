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


const PhoneNumberCart = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: t("Phone Number Shopping Cart — Azure Communication Services", "Panier d'achat de numéros de téléphone — Azure Communication Services"),
    description:
      t("Case study: redesigning phone-number acquisition in the Azure portal — replacing one-at-a-time purchasing with a flexible shopping cart for multi-number provisioning.", "Étude de cas : refonte de l'acquisition de numéros de téléphone dans le portail Azure — un panier flexible remplace l'achat un numéro à la fois pour obtenir plusieurs numéros."),
    path: '/azure-phone-numbers',
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
                  2022
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 tracking-tight leading-tight">
                  <span className="text-primary break-words">{t("Phone Number Shopping Cart", "Panier d'achat de numéros de téléphone")}</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("Redesigned a critical acquisition flow to reduce friction, increase transparency, and lower support burden", "Refonte d'un parcours d'acquisition critique pour réduire les frictions, gagner en transparence et alléger la charge du support")}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Initiated project independently during FHL2022, pitched and secured executive sponsorship", "Projet lancé de ma propre initiative pendant le FHL2022, présenté à la direction qui l'a parrainé")}</li>
                    <li>• {t("Led end-to-end UX for a complex, cross-functional revamp of the phone number acquisition flow", "Pilotage de l'UX de bout en bout d'une refonte complexe et interfonctionnelle du parcours d'acquisition de numéros de téléphone")}</li>
                    <li>• {t("Defined structure, logic, and visual system for a new cart-based model", "Définition de la structure, de la logique et du système visuel d'un nouveau modèle fondé sur le panier")}</li>
                    <li>• {t("Collaborated with legal, engineering, support, and product to balance compliance and usability", "Collaboration avec les équipes juridique, ingénierie, support et produit pour concilier conformité et utilisabilité")}</li>
                    <li>• {t("Launched to general availability with a significant drop in support tickets related to number acquisition", "Lancement en disponibilité générale avec une baisse significative des tickets de support liés à l'acquisition de numéros")}</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Background", "Contexte")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Phone number acquisition is one of the first interactions new users have with the platform—and one of the most complex. Each number comes with eligibility rules, legal disclaimers, and usage limitations depending on location and carrier. The original flow surfaced critical requirements too late, confusing users and generating a high volume of support tickets.", "L'acquisition d'un numéro de téléphone est l'une des premières interactions des nouveaux utilisateurs avec la plateforme — et l'une des plus complexes. Chaque numéro est assorti de règles d'éligibilité, de mentions légales et de restrictions d'usage selon le lieu et l'opérateur. Le parcours d'origine révélait les exigences essentielles trop tard, ce qui déroutait les utilisateurs et générait un grand nombre de tickets de support.")}
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Despite being high-friction and support-heavy, the problem wasn't on the roadmap. I decided to take it on as my personal project during Microsoft's FHL2022 innovation sprint. My early explorations revealed just how misaligned the experience was with user expectations—and how preventable the pain points were.", "Bien que très frictionnel et générateur de nombreuses demandes de support, ce problème ne figurait pas sur la feuille de route. J'ai décidé d'en faire mon projet personnel pendant le sprint d'innovation FHL2022 de Microsoft. Mes premières explorations ont montré à quel point l'expérience était en décalage avec les attentes des utilisateurs — et à quel point ces points de douleur étaient évitables.")}
                </p>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Initiating the Work", "Lancement du projet")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("I built a functional prototype to reframe the flow through a clearer, modular cart-based system. The concept consolidated requirements upfront, gave users more control and visibility, and clarified legal disclosures without overloading them.", "J'ai construit un prototype fonctionnel pour repenser le parcours autour d'un système de panier modulaire, plus clair. Le concept regroupait les exigences dès le départ, donnait aux utilisateurs plus de contrôle et de visibilité, et clarifiait les mentions légales sans les surcharger.")}
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("After testing the prototype with internal stakeholders and support teams, I pitched the work to senior leadership. With their support, I brought in product management and engineering to scope the initiative and align on a path to production.", "Après avoir testé le prototype avec des parties prenantes internes et les équipes de support, j'ai présenté le travail à la direction. Avec son soutien, j'ai impliqué la gestion de produit et l'ingénierie pour cadrer l'initiative et définir un chemin vers la production.")}
                </p>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Design Strategy", "Stratégie de design")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("As the product designer, I led the end-to-end redesign. My focus was on more than screens—it was about reshaping how users thought about phone number acquisition.", "En tant que designer produit, j'ai dirigé la refonte de bout en bout. Mon objectif dépassait les écrans — il s'agissait de transformer la façon dont les utilisateurs envisageaient l'acquisition d'un numéro de téléphone.")}
                </p>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  {t("Key shifts included:", "Les principaux changements :")}
                </p>
                <ul className="space-y-3 text-foreground/80 text-lg mb-6 pl-6">
                  <li>• <strong>{t("Upfront transparency:", "Transparence dès le départ :")}</strong> {t("Eligibility rules and legal disclosures moved earlier in the flow, reducing surprise drop-offs.", "Les règles d'éligibilité et les mentions légales sont présentées plus tôt dans le parcours, ce qui réduit les abandons par surprise.")}</li>
                  <li>• <strong>{t("Cart-based interaction model:", "Modèle d'interaction par panier :")}</strong> {t("Let users select, review, and confirm numbers in one coherent space.", "Les utilisateurs sélectionnent, vérifient et confirment leurs numéros dans un espace unique et cohérent.")}</li>
                  <li>• <strong>{t("Progressive disclosure:", "Divulgation progressive :")}</strong> {t("Complex details shown only when relevant, to prevent cognitive overload.", "Les détails complexes ne s'affichent que lorsqu'ils sont pertinents, pour éviter la surcharge cognitive.")}</li>
                  <li>• <strong>{t("Reusable logic and components:", "Logique et composants réutilisables :")}</strong> {t("Created a UI framework and flow pattern that other acquisition surfaces could adapt.", "Création d'un cadre d'interface et d'un modèle de parcours que d'autres surfaces d'acquisition pouvaient adapter.")}</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("To get there, I partnered across legal, compliance, support, and engineering to untangle requirements, define exceptions, and ensure the redesign aligned with regulatory standards.", "Pour y parvenir, j'ai travaillé avec les équipes juridique, conformité, support et ingénierie afin de démêler les exigences, définir les exceptions et garantir que la refonte respecte les normes réglementaires.")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <picture className="contents"><source srcSet="/lovable-uploads/get-phone-number-start.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/get-phone-number-start.png" 
                      alt={t("Phone number acquisition starting page", "Page de démarrage de l'acquisition d'un numéro de téléphone")}
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    /></picture>
                    <p className="text-sm text-foreground/60 text-center">{t("Starting the phone number acquisition process", "Début du processus d'acquisition d'un numéro de téléphone")}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <picture className="contents"><source srcSet="/lovable-uploads/get-phone-number-search.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/get-phone-number-search.png" 
                      alt={t("Phone number search interface", "Interface de recherche de numéros de téléphone")}
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    /></picture>
                    <p className="text-sm text-foreground/60 text-center">{t("Searching for available phone numbers with filters", "Recherche de numéros de téléphone disponibles avec des filtres")}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <picture className="contents"><source srcSet="/lovable-uploads/get-phone-number-cart.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/get-phone-number-cart.png" 
                      alt={t("Phone numbers added to shopping cart", "Numéros de téléphone ajoutés au panier")}
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    /></picture>
                    <p className="text-sm text-foreground/60 text-center">{t("Adding multiple phone numbers to the cart", "Ajout de plusieurs numéros de téléphone au panier")}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <picture className="contents"><source srcSet="/lovable-uploads/get-phone-number-cart-2.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/get-phone-number-cart-2.png" 
                      alt={t("Shopping cart with multiple phone numbers", "Panier contenant plusieurs numéros de téléphone")}
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    /></picture>
                    <p className="text-sm text-foreground/60 text-center">{t("Managing multiple numbers in the shopping cart", "Gestion de plusieurs numéros dans le panier")}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <picture className="contents"><source srcSet="/lovable-uploads/get-phone-number-review.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/get-phone-number-review.png" 
                      alt={t("Reviewing phone number order before purchase", "Vérification de la commande de numéros avant l'achat")}
                      className="w-full rounded-lg border border-border/50 shadow-sm bg-white p-2"
                    /></picture>
                    <p className="text-sm text-foreground/60 text-center">{t("Reviewing the order before finalizing purchase", "Vérification de la commande avant de finaliser l'achat")}</p>
                  </div>
                  
                 
                </div>

                <div className="border-l-2 border-primary/30 pl-6 mb-8">
                  <div className="w-4 h-4 bg-primary rounded-full transform -translate-x-8 mb-2"></div>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Outcome", "Résultat")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The feature shipped to general availability and is now the default experience for number acquisition. Since launch:", "La fonctionnalité est passée en disponibilité générale et constitue désormais l'expérience par défaut pour l'acquisition de numéros. Depuis son lancement :")}
                </p>
                <ul className="space-y-3 text-foreground/80 text-lg mb-6 pl-6">
                  <li>• {t("Support tickets related to number purchases have dropped significantly", "Les tickets de support liés à l'achat de numéros ont considérablement diminué")}</li>
                  <li>• {t("Time-to-acquire is shorter, with clearer error handling and reduced back-and-forth", "Le temps d'acquisition est plus court, avec une meilleure gestion des erreurs et moins d'allers-retours")}</li>
                  <li>• {t("The new pattern has been adopted for other complex onboarding flows involving legal and regional constraints", "Ce nouveau modèle a été adopté pour d'autres parcours d'intégration complexes soumis à des contraintes juridiques et régionales")}</li>
                </ul>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("This project is a strong example of how user-centered thinking—when paired with proactive leadership—can move cross-functional priorities forward, even off the roadmap.", "Ce projet illustre bien comment une démarche centrée sur l'utilisateur — associée à un leadership proactif — peut faire avancer des priorités interfonctionnelles, même en dehors de la feuille de route.")}
                </p>

                <div className="flex flex-wrap gap-3 mt-8 mb-12">
                  {[t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("Azure Portal", "Portail Azure"), t("Developer Experience", "Expérience développeur"), t("E-commerce UX", "UX e-commerce"), t("Cross-functional Leadership", "Leadership interfonctionnel")].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button 
                    onClick={() => window.open('https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/telephony/get-phone-number?tabs=windows&pivots=platform-azp-new', '_blank', 'noopener,noreferrer')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  >
                    {t("Try the Experience", "Essayer l'expérience")}
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

export default PhoneNumberCart;
