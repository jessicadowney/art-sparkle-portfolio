// Pushes a named event to Google Tag Manager's dataLayer. Events carry no personal data.
// They only show up in reports once GTM has a Custom Event trigger with the same name.
export function track(event: string, params: Record<string, string | number> = {}) {
  const w = window as Window & { dataLayer?: unknown[] };
  (w.dataLayer = w.dataLayer || []).push({ event, ...params });
}
