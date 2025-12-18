# prkcder.github.io

This folder is now a small Next.js site (static-export friendly)

## Development

- Install deps: `npm install`
- Run locally: `npm run dev`
- Static export build: `npm run build` (outputs to `out/`)

## Legacy

The original static HTML/CSS version is preserved in `legacy/`.

## Deploying to GitHub Pages

This repo is set up for static export (`next.config.js` uses `output: 'export'`), so `npm run build` writes the site into `out/`.

- GitHub Actions workflow: `.github/workflows/deploy.yml`
  - Triggers on pushes to `main`/`master` or manual run.
  - Builds with `npm ci && npm run build`, then publishes `out/` to Pages.
- After pushing, go to **Settings → Pages** and select **Source: GitHub Actions**.
- For a user/organization site named `prkcder.github.io`, no extra `basePath` is needed; the site will be served from the repo root.
