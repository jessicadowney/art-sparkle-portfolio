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


const OneNote = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  useSeo({
    title: t("Microsoft OneNote: Cloud Attachment Prompt", "Microsoft OneNote : invite de pièce jointe cloud"),
    description:
      t("Case study: reinstating cloud attachment insertion in OneNote with contextual, file-type-aware options to improve workflow and cross-platform parity.", "Étude de cas : rétablissement de l'insertion de pièces jointes cloud dans OneNote, avec des options contextuelles selon le type de fichier pour améliorer le flux de travail et la parité entre plateformes."),
    path: '/onenote',
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
                  Microsoft OneNote: <span className="text-primary">{t("Cloud Attachment Insertion Prompt", "Invite d'insertion de pièces jointes cloud")}</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  {t("Bringing cloud attachment to OneNote UWP and Mac", "Le retour des pièces jointes cloud dans OneNote UWP et Mac")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Role", "Rôle")}</h3>
                  <p className="text-foreground/70">{t("Product Designer", "Designer produit")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Company", "Entreprise")}</h3>
                  <p className="text-foreground/70">Microsoft</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Platform", "Plateforme")}</h3>
                  <p className="text-foreground/70">{t("UWP & Mac", "UWP et Mac")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-accent/30 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{t("TL;DR", "En bref")}</h2>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Restored highly requested cloud attachment feature missing from OneNote UWP and Mac", "Rétablissement d'une fonctionnalité de pièces jointes cloud très demandée, absente de OneNote UWP et Mac")}</li>
                    <li>• {t("Led end-to-end design from research through implementation across platforms", "Direction du design de bout en bout, de la recherche à l'implémentation, sur toutes les plateformes")}</li>
                    <li>• {t("Created contextual file insertion prompts based on file type and user scenarios", "Création d'invites d'insertion de fichiers contextuelles selon le type de fichier et les scénarios d'usage")}</li>
                    <li>• {t("Designed responsive, accessible, and localized modal experiences", "Conception d'expériences modales adaptatives, accessibles et localisées")}</li>
                    <li>• {t("Successfully shipped in 2019, bringing feature parity across OneNote platforms", "Livraison réussie en 2019, assurant la parité fonctionnelle entre les plateformes OneNote")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/ff2b8e20-f09f-46f7-a76b-4c18e3bd0f07.png" 
                    alt={t("Microsoft OneNote Logo", "Logo de Microsoft OneNote")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Overview", "Vue d'ensemble")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Microsoft OneNote is a collaborative note-taking platform used to capture and share ideas, drawings, clippings, and recordings. While working on the OneNote design team, I collaborated with product managers and engineers to deliver new features. Due to confidentiality, most of my work remains unreleased. However, one impactful feature I led—cloud attachment prompts—shipped in 2019 and is now available on OneNote for UWP (Universal Windows Platform) and Mac.", "Microsoft OneNote est une plateforme collaborative de prise de notes servant à saisir et partager des idées, des dessins, des extraits et des enregistrements. Au sein de l'équipe de design OneNote, j'ai collaboré avec des chefs de produit et des ingénieurs pour livrer de nouvelles fonctionnalités. Pour des raisons de confidentialité, la plupart de mon travail n'a pas été rendu public. Cependant, une fonctionnalité marquante que j'ai pilotée — les invites de pièces jointes cloud — a été lancée en 2019 et est maintenant disponible dans OneNote pour UWP (Universal Windows Platform) et Mac.")}
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{t("My Role", "Mon rôle")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Product Designer leading user flow and interface design", "Designer produit responsable des parcours utilisateur et du design d'interface")}</li>
                    <li>• {t("Collaborated closely with PM and 3 engineers", "Collaboration étroite avec le chef de produit et 3 ingénieurs")}</li>
                    <li>• {t("Conducted design analysis across Microsoft ecosystem", "Analyse des pratiques de design dans l'ensemble de l'écosystème Microsoft")}</li>
                    <li>• {t("Delivered responsive, localized, and accessible designs", "Livraison de designs adaptatifs, localisés et accessibles")}</li>
                  </ul>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Challenge: Reinstate a Popular Cloud Attachment Feature", "Défi : rétablir une fonctionnalité de pièces jointes cloud très appréciée")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("The ability to attach cloud files had existed in OneNote 2016 but was missing in UWP and Mac. Restoring it was a high-priority request from users.", "La possibilité de joindre des fichiers cloud existait dans OneNote 2016, mais manquait dans UWP et Mac. Son rétablissement était une demande prioritaire des utilisateurs.")}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Goals:", "Objectifs :")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Reinstate cloud attachments to OneNote UWP and Mac", "Rétablir les pièces jointes cloud dans OneNote UWP et Mac")}</li>
                    <li>• {t("Provide contextual options based on file type", "Proposer des options contextuelles selon le type de fichier")}</li>
                    <li>• {t("Align with Microsoft's Fluent UI and accessibility guidelines", "Respecter Fluent UI de Microsoft et les directives d'accessibilité")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/33810cc1-c871-466c-a7ca-0a19b5abb118.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/33810cc1-c871-466c-a7ca-0a19b5abb118.png" 
                    alt={t("OneNote Cloud Attachment Prompt - Allow online file conversion", "Invite de pièce jointe cloud OneNote — autoriser la conversion de fichiers en ligne")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Research & Inspiration", "Recherche et inspiration")}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {t("I started by collecting UI references across OneNote's existing platforms and Microsoft's design systems. I analyzed how similar prompts work in products like Outlook and Word.", "J'ai commencé par rassembler des références d'interface sur les plateformes OneNote existantes et dans les systèmes de design de Microsoft. J'ai analysé le fonctionnement d'invites similaires dans des produits comme Outlook et Word.")}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Key insights:", "Enseignements clés :")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Different file types require different insert options", "Chaque type de fichier appelle des options d'insertion différentes")}</li>
                    <li>• {t("A modal format was the preferred and expected pattern", "Le format modal était le modèle préféré et attendu")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/e12a3a45-18df-42cb-ad13-255fe2966928.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/e12a3a45-18df-42cb-ad13-255fe2966928.png" 
                    alt={t("File insertion options across different scenarios", "Options d'insertion de fichiers selon les scénarios")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Design Process", "Processus de design")}</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Use Case Mapping", "Cartographie des cas d'usage")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("I mapped scenarios based on file type:", "J'ai cartographié les scénarios selon le type de fichier :")}
                  </p>
                  <ul className="space-y-2 text-foreground/80 text-lg mb-8">
                    <li>• <strong>{t("Office Files (Word, Excel, PowerPoint):", "Fichiers Office (Word, Excel, PowerPoint) :")}</strong> {t("Show 3 options with disclaimer", "Afficher 3 options avec un avertissement")}</li>
                    <li>• <strong>{t("PDFs:", "PDF :")}</strong> {t("Show 3 options", "Afficher 3 options")}</li>
                    <li>• <strong>{t("Other File Types or Mixed Files:", "Autres types de fichiers ou fichiers mixtes :")}</strong> {t("Show 2 options", "Afficher 2 options")}</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/44eb7cd7-93f3-4537-8bfb-5e030fb17b90.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/44eb7cd7-93f3-4537-8bfb-5e030fb17b90.png" 
                      alt={t("French localization - Comment voulez-vous insérer ce fichier?", "Localisation française — « Comment voulez-vous insérer ce fichier ? »")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/6fc51124-ba16-4f67-b7a0-9ca19ffcc0ff.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/6fc51124-ba16-4f67-b7a0-9ca19ffcc0ff.png" 
                      alt={t("File insertion dialog with three options", "Boîte de dialogue d'insertion de fichier à trois options")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Modal Options:", "Options de la fenêtre modale :")}</h3>
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Upload to OneDrive and insert link", "Téléverser vers OneDrive et insérer le lien")}</li>
                    <li>• {t("Insert as attachment", "Insérer en tant que pièce jointe")}</li>
                    <li>• {t("Insert as printout (when applicable)", "Insérer en tant qu'impression (le cas échéant)")}</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/3f4dfbe1-d9d2-49eb-96dd-134e23cc0365.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/3f4dfbe1-d9d2-49eb-96dd-134e23cc0365.png" 
                      alt={t("German localization - Wie wollen Sie diese Datei einfügen?", "Localisation allemande — « Wie wollen Sie diese Datei einfügen ? »")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/4f7965c9-474f-4fa2-9b1d-aac92f409da6.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/4f7965c9-474f-4fa2-9b1d-aac92f409da6.png" 
                      alt={t("PDF file insertion options", "Options d'insertion d'un fichier PDF")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Exploration & Localization Testing", "Exploration et tests de localisation")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("I explored different layouts and UI variants, ensuring compatibility with long strings in German and French.", "J'ai exploré différentes mises en page et variantes d'interface, en m'assurant de la compatibilité avec les longues chaînes de texte en allemand et en français.")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/9cb21830-f039-4a89-be57-e013c6a33982.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/9cb21830-f039-4a89-be57-e013c6a33982.png" 
                      alt={t("Structural assessment file insertion dialog", "Boîte de dialogue d'insertion d'un fichier d'évaluation structurelle")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/80dff5ae-a43e-47f8-b3e9-2f8a0104d036.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/80dff5ae-a43e-47f8-b3e9-2f8a0104d036.png" 
                      alt={t("Multiple files insertion dialog", "Boîte de dialogue d'insertion de plusieurs fichiers")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Accessibility", "Accessibilité")}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("I created specs for high contrast mode and ensured keyboard and screen reader compliance.", "J'ai créé les spécifications du mode contraste élevé et veillé à la compatibilité avec le clavier et les lecteurs d'écran.")}
                  </p>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/cede914a-c532-4dbe-86e7-5e395cf3e3e9.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/cede914a-c532-4dbe-86e7-5e395cf3e3e9.png" 
                    alt={t("OneNote design system and UI components overview", "Aperçu du système de design et des composants d'interface de OneNote")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Implementation", "Implémentation")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("Final deliverables included:", "Les livrables finaux comprenaient :")}
                </p>

                <div className="mb-8">
                  <ul className="space-y-2 text-foreground/80 text-lg">
                    <li>• {t("Responsive modals for all use cases", "Des fenêtres modales adaptatives pour tous les cas d'usage")}</li>
                    <li>• {t("Redlines and specs for engineering", "Des annotations de design (redlines) et des spécifications pour l'ingénierie")}</li>
                    <li>• {t("High contrast accessibility visuals", "Des visuels d'accessibilité en contraste élevé")}</li>
                    <li>• {t("Assets for both UWP and Mac platforms", "Des ressources pour les plateformes UWP et Mac")}</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/4e447225-25bc-414e-8180-3f2d58e1374e.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/4e447225-25bc-414e-8180-3f2d58e1374e.png" 
                    alt={t("High contrast design specifications and color coding", "Spécifications de design en contraste élevé et codage couleur")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/854feffc-fe90-447b-baf8-d72c2e3208d6.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/854feffc-fe90-447b-baf8-d72c2e3208d6.png" 
                      alt={t("French dialog with spacing specifications", "Boîte de dialogue en français avec spécifications d'espacement")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                  <div>
                    <picture className="contents"><source srcSet="/lovable-uploads/284582bd-5f18-4ffe-957a-3204aab29352.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                      src="/lovable-uploads/284582bd-5f18-4ffe-957a-3204aab29352.png" 
                      alt={t("French dialog in context with precise measurements", "Boîte de dialogue en français en contexte, avec mesures précises")} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    /></picture>
                  </div>
                </div>

                <div className="mb-12">
                  <picture className="contents"><source srcSet="/lovable-uploads/44010bc8-c30e-47aa-b6ac-ad3d9b419761.webp" type="image/webp" /><img loading="lazy" decoding="async" 
                    src="/lovable-uploads/44010bc8-c30e-47aa-b6ac-ad3d9b419761.png" 
                    alt={t("macOS implementation of cloud file insertion dialog", "Implémentation macOS de la boîte de dialogue d'insertion de fichiers cloud")} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  /></picture>
                </div>

                <hr className="my-12 border-border/50" />

                <h2 className="text-3xl font-semibold mb-6 text-primary">{t("Results", "Résultats")}</h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {t("The feature successfully shipped in 2019 across UWP and Mac platforms.", "La fonctionnalité a été livrée avec succès en 2019 sur les plateformes UWP et Mac.")}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{t("Impact:", "Impact :")}</h3>
                  <ul className="space-y-2 text-foreground/80 mb-8">
                    <li>• {t("Met user demand for a highly requested feature", "Réponse à la demande des utilisateurs pour une fonctionnalité très attendue")}</li>
                    <li>• {t("Increased parity across OneNote platforms", "Parité accrue entre les plateformes OneNote")}</li>
                    <li>• {t("Reinforced design consistency with Microsoft ecosystem", "Cohérence de design renforcée avec l'écosystème Microsoft")}</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("Accessibility", "Accessibilité"), "Fluent UI", "Cross-platform Design", "Localization", "User Flows"].map((tag, index) => (
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

export default OneNote;
