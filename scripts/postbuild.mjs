// GitHub Pages has no rewrites: a real file per route returns 200 (404.html would return 404 and drop pages from search).
// Routes come from App.tsx so a new page cannot be forgotten here.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';

const routes = [...readFileSync('src/App.tsx', 'utf8').matchAll(/path="\/([a-z0-9-]+)"/g)].map((m) => m[1]);
copyFileSync('dist/index.html', 'dist/404.html');
for (const r of routes) {
  mkdirSync(`dist/${r}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${r}/index.html`);
}
