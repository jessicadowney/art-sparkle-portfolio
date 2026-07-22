# jessicadowney.com

Source for [jessicadowney.com](https://jessicadowney.com/) — the portfolio of
Jessica Downey, Senior Product Designer. A Vite + React + TypeScript single-page
app styled with Tailwind and shadcn/ui, with an animated Three.js background.

## Develop

```bash
npm install
npm run dev        # http://localhost:8080
```

## Build

```bash
npm run build      # outputs to dist/ and copies index.html to 404.html
npm run preview    # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to the `master` branch of
`jessicadowney/jessicadowney.github.io`,
which GitHub Pages serves at the custom domain (`public/CNAME`).

The deploy step needs a repository secret named `DEPLOY_TOKEN`: a
fine-grained personal access token with Contents: Read and write scoped to
the `jessicadowney.github.io` repository only. Add it under
Settings → Secrets and variables → Actions.

## Project layout

- `src/pages/` — the home page (`Index`) and one page per case study, wired up
  in `src/App.tsx`.
- `src/components/` — page sections (`Hero`, `Work`, `About`, `Experience`,
  `Contact`) and the animated background.
- `src/components/ThreeBackground.tsx` lazy-loads
  `ThreeBackgroundImpl.tsx` so Three.js stays out of the initial bundle. Tune
  the background via the `CONFIG` block at the top of the impl file.
- `public/lovable-uploads/` — images (folder name retained so existing
  references keep resolving).
