import { useEffect } from "react";

const SITE = "https://jessicadowney.com";
const DEFAULT_TITLE = "Jessica Downey - Senior Product Designer";
const DEFAULT_DESCRIPTION =
  "Portfolio of Jessica Downey, a senior product designer with 15+ years of experience across enterprise, industrial, and consumer products — currently designing for Copilot extensibility at Microsoft.";

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

interface SeoOptions {
  /** Page-specific title; " | Jessica Downey" is appended. Omit for the home page. */
  title?: string;
  /** Meta description for the page; falls back to the site default. */
  description?: string;
  /** Route path beginning with "/", used for canonical + og:url (e.g. "/gofetch"). */
  path?: string;
}

/**
 * Sets per-route document title, description, canonical link, and Open Graph /
 * Twitter tags on mount. Dependency-free so it adds nothing to the bundle or the
 * audit surface. Tags declared in index.html are updated in place; any missing
 * ones are created.
 */
export function useSeo({ title, description, path = "/" }: SeoOptions = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Jessica Downey` : DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE}${path}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', "name", "description", desc);
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", desc);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
    upsertLink("canonical", url);
  }, [title, description, path]);
}
