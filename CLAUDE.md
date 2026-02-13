# CLAUDE.md

## Project overview

Personal portfolio website for Jeremias Erbs (badabam.de). Static site built with Parcel, PostHTML, and PostCSS.

## Commands

- `npm start` — Dev server (Parcel + Browser-sync)
- `npm run build` — Production build to `docs/`
- `npm test` — Lint JS with ESLint (`src/js/**/*.js`)
- `npm run clear` — Remove `docs/`, `dist/`, `.cache`

## Architecture

- **HTML**: Modular components in `src/html/`, composed via PostHTML `<module>` tags in `src/index.html`
- **CSS**: PostCSS with nesting, imports, short syntax, autoprefixer, cssnano. Partials in `src/css/_*.css`, entry is `src/css/styles.css`
- **JS**: ES modules in `src/js/`. AOS (animate on scroll) + custom color-change module
- **Build output**: `docs/` directory (GitHub Pages)

## Code style

- Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas
- ESLint: very strict ruleset (200+ rules). `prefer-const`, `no-var`, `camelcase`, ES6+ enforced
- No semicolons anywhere
