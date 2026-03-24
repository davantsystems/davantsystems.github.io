## Documentation Links
- Astro documentation: https://docs.astro.build/llms.txt
- Design system details: `docs/DESIGN_SYSTEM.md`

## Project Board

This project uses a structured board system for project management.

- **Ask before creating new board files**
- Use `/board:board-show` to see current board state
- Use `/board:board-add` to create new items
- Use `/board:board-update` after completing significant work
- Use `/board:board-check` when starting work to find related context

## Project Overview

Marketing website for Davant Systems (www.davantsystems.com), built with Astro. Features a "Creative Synthwave" dark-mode aesthetic with gradient-forward design. Showcases:
- **Davant Studio**: AI image generation software
- **Magic Mirror**: Interactive AI photo booth experience
- **Ambassador Program**: Community program for creative pioneers

## Commands

```bash
npm run dev        # Start dev server on port 3100 (logs to logs/astro-dev.log)
npm run log        # Tail the dev server log
npm run log:last   # Last 20 lines (LINES=50 npm run log:last for more)
npm run log:clear  # Clear log file
npm run kill       # Kill dev server on port 3100
npm run restart    # Kill and restart dev server
npm run status     # Check if dev server is running
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
npx astro check    # Type-check .astro and TypeScript files
```

## Tech Stack

- **Framework**: Astro v5 + React (@astrojs/react)
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite) + DaisyUI 5 (synthwave theme)
- **Fonts**: Google Fonts (Open Sans, Orbitron, Sacramento, Yellowtail)
- **Language**: TypeScript strict mode
- **Deployment**: GitHub Actions to GitHub Pages, custom domain via `public/CNAME`

## Project Structure

```
src/
├── pages/           # Route components (.astro)
├── components/      # Reusable UI (.astro, .tsx)
├── layouts/         # Layout.astro (single layout)
├── styles/          # Global styles (app.css, typography.scss, video.scss)
├── assets/          # Images (processed by Astro's image pipeline)
├── content/         # Content collections (articles)
└── lib/             # Utility modules (compatibility checker)
public/              # Static assets served as-is (video, press images, CNAME, favicon)
board/               # Project management board
docs/                # Design system and project documentation
```

## Pages

| Route | File | Notes |
|-------|------|-------|
| `/` | `index.astro` | Homepage with hero cards |
| `/davant-studio` | `davant-studio/index.astro` | Product showcase |
| `/davant-studio/download` | `davant-studio/download.astro` | Download page |
| `/davant-studio/metadataimage` | `davant-studio/metadataimage.astro` | Image metadata tool (React) |
| `/photobooth` | `photobooth.astro` | Magic Mirror product page |
| `/photobooth-mockup` | `photobooth-mockup.astro` | Photobooth demo/mockup |
| `/event-galleries` | `event-galleries.astro` | Event photo galleries |
| `/training` | `training.astro` | Workshops and training |
| `/articles` | `articles.astro` | Content collection listing |
| `/ambassadors` | `ambassadors.astro` | Ambassador program |
| `/compatibility-checker` | `compatibility-checker/index.astro` | Hardware checker (React) |
| `/press` | `press.astro` | Press/media assets |
| `/resources` | `resources.astro` | Resource links |
| `/about` | `about.astro` | About page |

## Component Patterns

- **Astro Components** (`.astro`): Primary for static content and layout
- **React Components** (`.tsx`): Interactive features only (CompatibilityChecker, ImageMetadataExtractor, TypeformBookingButton)
- **GradientButton.astro**: Primary/secondary CTA button with gradient styles and hover effects
- **TypeformBookingButton.tsx**: React component for Typeform popup booking (client:load)
- **Naming**: PascalCase for components, kebab-case for page files

## Gotchas

- **DaisyUI theme**: Set via `data-theme="synthwave"` on `<html>` in Layout.astro. DaisyUI class names (btn, card, navbar, etc.) are theme-aware.
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin, not PostCSS. Global styles imported via `src/app.css`.
- **CSP header**: Layout.astro has a Content-Security-Policy meta tag. When adding new external scripts/iframes/fonts, update the CSP whitelist.
- **Image assets**: Images in `src/assets/` are processed by Astro's pipeline (use `import` + `<Image>` or `.src`). Images in `public/` are served as-is (use URL paths like `/image/press/...`).
- **Log filename**: Dev server logs to `logs/astro-dev.log` (not `dev-server.log`).
- **Port 3100**: Hardcoded in package.json scripts and astro.config.mjs.
- **Gradient headings**: Site uses `bg-gradient-to-bl from-pink-400 via-fuchsia-500 to-purple-600` for primary headings. Secondary headings use `bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500`.

## Workflow

1. Check existing patterns in similar components before creating new ones
2. Review `docs/DESIGN_SYSTEM.md` before design work
3. Monitor `logs/astro-dev.log` for compilation errors
4. Run `npx astro check` before committing
5. Run `npm run build` to verify before deployment
6. Preserve the Creative Synthwave aesthetic -- gradients are a key brand element
