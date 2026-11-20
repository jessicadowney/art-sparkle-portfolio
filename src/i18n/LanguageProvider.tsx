import { readStorage, writeStorage } from '@/lib/safeStorage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Lang = 'en' | 'fr';

const STORAGE_KEY = 'portfolio-lang';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the string for the active language: t('Hello', 'Bonjour'). */
  t: (en: string, fr: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectInitialLang(): Lang {
  const stored = readStorage(STORAGE_KEY);
  if (stored === 'en' || stored === 'fr') return stored;
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) {
    return 'fr';
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    writeStorage(STORAGE_KEY, next);
    setLangState(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: (en, fr) => (lang === 'fr' ? fr : en) }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
