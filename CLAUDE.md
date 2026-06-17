# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Kevin Paras (a software engineer), served at https://kevinparas.me via GitHub Pages. Single-page React app built with Vite, styled with **Tailwind CSS v4 + shadcn/ui** (New York style, JavaScript/`.jsx` — not TypeScript). There are no tests and no linter configured — the CI "test" is simply that `npm run build` produces a valid `dist/`.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server with HMR
npm run build      # production build to dist/
npm run preview    # serve the built dist/ locally
```

## Architecture

- **Entry**: `src/main.jsx` reads the saved theme from `localStorage` and sets `data-theme` on `<html>` *before* React renders, to avoid a flash of the wrong theme. It then mounts `App`.
- **`src/App.jsx`** is the single page. It wraps everything in `ThemeProvider` → `SidebarProvider`, renders `AppSidebar` + a `SidebarInset` containing the sections in order: `Hero`, `About`, `Skills`, `Projects`, `Contact`. A scroll listener tracks which section is in view and passes `activeSection` to `AppSidebar`; section ids (`home`, `about`, `skills`, `projects`, `contact`) must stay in sync between this listener, the nav, and the section components.
- **Navigation** is `src/components/AppSidebar.jsx` (built on the shadcn `sidebar`) — there is **no top navbar**. The active section is highlighted via `SidebarMenuButton`'s `isActive` prop; clicking smooth-scrolls and (on mobile) closes the offcanvas drawer. On mobile a `SidebarTrigger` in the `SidebarInset` header opens it. The `ThemeToggle` lives in the sidebar footer.
- **Theme**: `src/context/ThemeContext.jsx` holds dark/light state, persists it to `localStorage`, and toggles the `.dark` class on `<html>` (shadcn/Tailwind convention — `main.jsx` sets it pre-paint to avoid a flash). Consume via the `useTheme()` hook; toggled by `ThemeToggle`. Don't reintroduce the old `data-theme` attribute.
- **Projects data**: the list of projects is a hardcoded array inside `src/components/Projects.jsx` (each entry: `title`, `description`, `technologies`, `image`, `link`, `github`). To add/edit a project, edit that array — there is no data file or CMS. `ProjectCard` renders each entry.
- **Rotating backgrounds**: every section shares one rotating photo backdrop. The image list lives in `src/data/backgrounds.js`; the `useRotatingBackground()` hook (`src/hooks/`) owns the interval and returns the current image url. Each section applies it as an inline `backgroundImage` style on an element with the `section-backdrop` utility (a custom class in `index.css` — does the cover/fixed/ken-burns zoom) and lays a tint over it with a `bg-background/8x` div. Don't re-implement the rotation per section.

### UI components

`src/components/ui/` holds the shadcn/ui primitives (added via the CLI, standard shadcn source as `.jsx`): `button`, `card`, `badge`, plus the `sidebar` suite it pulls in (`sidebar`, `sheet`, `tooltip`, `separator`, `input`, `skeleton`) and the `use-mobile` hook. They use `cva` variants and the `cn()` helper from `src/lib/utils.js` (clsx + tailwind-merge). Add more with `npx shadcn@latest add <name>`. **Filenames are lowercase** (shadcn convention) — `@/components/ui/button`; the CLI generates lowercase, so keep it consistent (CI builds on case-sensitive Linux).

App-specific reusable components (not shadcn): `AppSidebar` (the nav), `SectionHeading` (eyebrow + serif title + accent rule, `align` prop), `Reveal` (IntersectionObserver scroll-in wrapper — `as`/`delay` props, adds `.reveal` + `data-visible`), `TypingEffect`, and `Logo` (the KP mark SVG). The same mark is the favicon at `public/favicon.svg` — a terminal-style `>` prompt chevron next to the `KP` monogram on a blue rounded badge; edit both files together if you change it.

Icons come from **`lucide-react`**. The one exception: `lucide-react` no longer ships brand glyphs, so GitHub/LinkedIn live as `GitHubIcon`/`LinkedInIcon` in `src/components/icons.jsx`. Don't `import { Github }` from lucide — it'll break the build.

### Styling (Tailwind v4 + shadcn)

Utility-first Tailwind in JSX `className`s; **no per-component CSS files** anymore — everything global lives in `src/index.css`. Tailwind v4 is configured CSS-first (no `tailwind.config.js`): `@import "tailwindcss"`, the `@tailwindcss/vite` plugin (in `vite.config.js`), and `components.json` for the shadcn CLI.

- **Theme** = blue / slate-gray / white, in **OKLCH**. Semantic shadcn tokens (`--background`, `--foreground`, `--primary`, `--card`, `--muted`, `--border`, `--ring`, …) are defined for light under `:root` and dark under `.dark`, then mapped to Tailwind color utilities via `@theme inline`. Style with token utilities (`bg-background`, `text-primary`, `border-border`, `bg-card/60`) — don't hardcode hex. To recolor the whole site, edit the `--primary`/`--ring` (and chart) tokens.
- **Fonts** mapped in `@theme inline` and loaded in `index.html`: `--font-serif` Fraunces (use `font-serif` — headings/names), `--font-sans` Hanken Grotesk (body default), `--font-mono` JetBrains Mono (use `font-mono` — eyebrows, nav, tags).
- **Glass panels & motion** (custom classes in `index.css`, `@layer components`): `.glass` (light-opacity translucent `card` bg ~28% + `backdrop-filter` blur so the photo backdrop shows through — tune the `color-mix` percentage to make panels more/less see-through), `.glass-hover` (adds the relative hover-lift + sweeping top accent line — pair with `relative overflow-hidden`), `.reveal` (paired with `<Reveal>`), `.float`, and the `section-backdrop` ken-burns zoom. All motion is gated by `prefers-reduced-motion`.

### Conventions

- `@` is aliased to `./src` in both `vite.config.js` and `jsconfig.json`. Prefer `@/...` imports.
- Static images are referenced from the site root, e.g. `/assets/images/...`, and live under `assets/` (also imported directly in JS where Vite should fingerprint them).

## Deployment

`.github/workflows/deploy.yml` runs on push to `master`: it builds, adds `.nojekyll`, copies `public/CNAME`, and publishes `dist/` to GitHub Pages. `.github/workflows/ci.yaml` build-checks every push/PR. The custom domain is set by `CNAME` (kevinparas.me); `base` is `/` in `vite.config.js`. Don't hand-edit `dist/` — it's generated.

## Legacy Jekyll files (do not edit)

This repo was migrated from a Jekyll site. These files remain but are **no longer used** by the live site: `_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `index.md`, `Gemfile`, `jekyll-theme-cayman.gemspec`, `.rubocop.yml`, `.travis.yml`, `script/`. (Note: the active page template is `index.html` at the repo root, which Vite uses — that one is *not* legacy.) Work in `src/` instead.
