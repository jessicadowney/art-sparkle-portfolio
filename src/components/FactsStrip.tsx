import React from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

type Facts = { role: React.ReactNode; company: React.ReactNode; timeline: React.ReactNode; platform?: React.ReactNode };

// The same four facts, in the same order, on every case study, so scope reads in five seconds.
const FactsStrip: React.FC<Facts> = ({ role, company, timeline, platform }) => {
  const { t } = useLanguage();
  const items = [
    [t('Role', 'Rôle'), role],
    [t('Company', 'Entreprise'), company],
    [t('Timeline', 'Calendrier'), timeline],
    ...(platform ? [[t('Platform', 'Plateforme'), platform]] : []),
  ];
  return (
    <dl className="mb-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-6 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={String(label)}>
          <dt className="text-sm text-muted-foreground">{label}</dt>
          <dd className="mt-1 text-foreground/90">{value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default FactsStrip;
