# Modpie Documentation

Source for the Modpie & Modpie Plus documentation site, built with
[Docusaurus](https://docusaurus.io/).

**Live site:** https://gjvart.github.io/modpie-docs/

## Local development

```bash
npm install
npm run start
```

Starts a dev server at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
npm run serve   # preview the production build locally
```

Static output is written to `build/`.

## Deployment

Deployment is automatic. Every push to `main` triggers the
[`Deploy to GitHub Pages`](.github/workflows/deploy.yml) workflow, which builds
the site and publishes it via GitHub Pages (Settings → Pages → Source:
**GitHub Actions**).

## Editing docs

- Pages live in [`docs/`](docs/) as Markdown.
- The sidebar is defined in [`sidebars.js`](sidebars.js).
- Site config (title, navbar, footer, URL) is in [`docusaurus.config.js`](docusaurus.config.js).
