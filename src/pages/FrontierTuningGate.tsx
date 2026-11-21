import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { readStorage, writeStorage } from '@/lib/safeStorage';
import { useLanguage } from '@/i18n/LanguageProvider';
import FactsStrip from '@/components/FactsStrip';
import { track } from '@/lib/analytics';

// SHA-256 of the access password. This is a light gate for casual visitors, not
// strong security: anything shipped to the browser can be extracted by a
// determined person. The case study text is in a public JS chunk, so keep
// anything truly confidential off this site.
const PASSWORD_HASH = '9372c470eeadd5ecd9c3c74c2b3cb633f8e2f2fad799250a0f70d652b6b825e4';
const STORAGE_KEY = 'ft-access';

// The case study stays in its own chunk and is only requested after unlock.
const FrontierTuning = lazy(() => import('./FrontierTuning'));

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

const readUnlocked = () => readStorage(STORAGE_KEY, 'session') === PASSWORD_HASH;

const FrontierTuningGate = () => {
  const { t } = useLanguage();
  const [unlocked, setUnlocked] = useState<boolean>(readUnlocked);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    const previousTitle = document.title;
    return () => {
      robots.remove();
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (unlocked) return; // the case study sets its own title
    document.title = `Frontier Tuning | Jessica Downey`;
  }, [t, unlocked]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(value.trim());
    if (hash === PASSWORD_HASH) {
      track('case_study_unlock', { project: 'Frontier Tuning' });
      writeStorage(STORAGE_KEY, hash, 'session');
      setError(false);
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return (
      <Suspense fallback={null}>
        <FrontierTuning />
      </Suspense>
    );
  }

  const title = t('Frontier Tuning: Making AI Agent Improvement Understandable', "Frontier Tuning : rendre l'amélioration des agents IA compréhensible");
  const mailto = `mailto:contact@jessicadowney.com?subject=${encodeURIComponent(t('Frontier Tuning case study access', "Accès à l'étude de cas Frontier Tuning"))}`;
  const summary = [
    [
      t('Problem', 'Problème'),
      t('Makers and subject-matter experts needed to improve AI agents without first understanding model training.', "Les créateurs et les experts métier devaient pouvoir améliorer des agents IA sans d'abord maîtriser l'entraînement des modèles."),
    ],
    [
      t('What I made', "Ce que j'ai conçu"),
      t('The conceptual model, evaluation and feedback experiences, terminology and end-to-end improvement journey, with interactive prototypes as my main tool.', "Le modèle conceptuel, les expériences d'évaluation et de retour, la terminologie et le parcours d'amélioration de bout en bout, avec des prototypes interactifs comme principal outil."),
    ],
    [
      t('Worked with', 'Équipe'),
      t('Research, content design, product, science and engineering.', "La recherche, le content design, le produit, la science des données et l'ingénierie."),
    ],
  ];

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen px-6 pt-28 pb-24 text-foreground">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 py-3 text-sm">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('Back to portfolio', 'Retour au portfolio')}
        </Link>

        <header className="mt-6 mb-10">
          <p className="mb-3 text-muted-foreground tabular-nums">2025–2026</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance">{title}</h1>
        </header>

        <FactsStrip
          role={t('Senior Product Designer', 'Designer produit senior')}
          company="Microsoft - Copilot Extensibility"
          timeline={t('November 2025 – present', "novembre 2025 – aujourd'hui")}
        />

        <img
          src="/lovable-uploads/frontier-tuning-evaluation-criteria.webp"
          alt={t('Evaluation criteria shown beside an AI agent response in the Frontier Tuning prototype', "Critères d'évaluation affichés à côté de la réponse d'un agent IA dans le prototype Frontier Tuning")}
          className="mb-12 w-full rounded-lg border border-border"
          decoding="async"
        />

        <dl className="mb-16 grid gap-8 md:grid-cols-3">
          {summary.map(([label, text]) => (
            <div key={label}>
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-lg leading-relaxed text-foreground/90">{text}</dd>
            </div>
          ))}
        </dl>

        <form onSubmit={submit} className="glass-container rounded-2xl p-6 md:p-8 space-y-4 max-w-xl">
          <h2 className="text-2xl font-light tracking-tight">{t('Read the full case study', "Lire l'étude de cas complète")}</h2>
          <p className="text-foreground/70">
            {t('Research, coded prototypes and the guided improvement journey are password protected. Enter the password I shared with you.', "La recherche, les prototypes codés et le parcours d'amélioration guidé sont protégés par mot de passe. Saisissez celui que je vous ai communiqué.")}
          </p>
          <label htmlFor="ft-password" className="sr-only">
            {t('Password', 'Mot de passe')}
          </label>
          <Input
            id="ft-password"
            type="password"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={error}
            aria-describedby={error ? 'ft-password-error' : undefined}
          />
          {error && (
            <p id="ft-password-error" role="alert" className="text-sm text-destructive">
              {t("That password isn't right. Try again.", "Ce mot de passe n'est pas le bon. Réessayez.")}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Button type="submit">{t('View case study', "Voir l'étude de cas")}</Button>
            <a href={mailto} className="py-3" onClick={() => track('access_request', { project: 'Frontier Tuning' })}>
              {t("Don't have it? Request access", "Pas de mot de passe ? Demander l'accès")}
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FrontierTuningGate;
