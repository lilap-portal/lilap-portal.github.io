# lilap.github.io

Lilla P B2B Portal — UX Audit report. A static site presenting the UX audit's
cases and findings for the B2B wholesale portal: a landing page with the
project summary and a searchable findings catalog (`index.html`), and a
detail page per case (`caso.html?id=NN`).

Content is real audit material (see the parent project's `ux-audit-log/` and
`data/phases.js`). The visual design is styled after a different, unrelated
audit's report (motivarcare.github.io) — only the visual language was
reused, not its content.

The report is self-contained: no CDN, no remote fonts, no external
requests. The four typefaces (Instrument Serif, Newsreader, Plus Jakarta
Sans, Space Mono) are self-hosted in `fonts/` (SIL Open Font License, see
`fonts/OFL.txt`), and every screenshot lives under `assets/ux-audit/`,
imported directly by `data.js` so Vite bundles them into the build.

## Project structure

```
index.html       Landing page: audit summary + findings catalog table
caso.html        Case-detail template, driven by the ?id=NN query param
app.js           Shared rendering logic for both pages (ES module)
data.js          Case & finding content, imports every screenshot used
report.css       All styling (no framework/CDN — plain, hand-written CSS)
fonts/           Self-hosted .woff files for the report's four typefaces
assets/ux-audit/ Evidence screenshots, one folder per case
```

## Requirements

Node.js 20.19+ (or 22.12+) and npm.

## Development

```bash
npm install
npm run dev
```

This starts Vite's dev server (with hot reload) and prints a local URL to
open.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`. `npm run preview` serves that build
locally to sanity-check it before deploying.

## Deploying to GitHub Pages

This repo is a `<username>.github.io` user/org Pages site, so it's served
from the domain root — that's why `vite.config.js` sets `base: "/"`.

A workflow is already included at `.github/workflows/deploy.yml`: on every
push to `main` it runs `npm ci && npm run build` and publishes `dist/` via
GitHub's official Pages actions. The only one-time setup needed on GitHub's
side is under the repo's Settings → Pages → **Build and deployment: source
= GitHub Actions** (instead of "Deploy from a branch"). After that, pushing
to `main` deploys automatically — no `gh-pages` branch or committed `dist/`
needed.
