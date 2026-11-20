import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "@/hooks/useSeo";
import { useLanguage } from "@/i18n/LanguageProvider";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  useSeo({ title: t("Page not found", "Page introuvable") });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-light mb-3 text-balance">
          {t("This page wandered off.", "Cette page s'est égarée.")}
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          {t("Like a corgi off the leash, it's probably around somewhere. Let's get you back.", "Comme un corgi sans laisse, elle n'est sûrement pas loin. Retournons à l'accueil.")}
        </p>
        <a href="/" className="inline-block py-3 text-lg">
          {t("Back to home", "Retour à l'accueil")}
        </a>
      </div>
    </main>
  );
};

export default NotFound;
