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
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">{t("Oops! Page not found", "Oups ! Page introuvable")}</p>
        <a href="/">
          {t("Return to Home", "Retour à l'accueil")}
        </a>
      </div>
    </main>
  );
};

export default NotFound;
