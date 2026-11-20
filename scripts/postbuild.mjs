// GitHub Pages has no rewrites: a real file per route returns 200 (404.html would return 404 and drop pages from search).
import { copyFileSync, mkdirSync } from 'node:fs';

const routes = ['frontier-tuning', 'azure-phone-numbers', 'azure-sample-builder', 'gofetch', 'ally', 'slim', 'onenote', 'phone-number-cart', 'azure'];
copyFileSync('dist/index.html', 'dist/404.html');
for (const r of routes) {
  mkdirSync(`dist/${r}`, { recursive: true });
  copyFileSync('dist/index.html', `dist/${r}/index.html`);
}
