---
type: reference
created: 2026-02-12
---
# Site Analysis Report: Davant Systems (Astro)

> **Status:** Active
> **Date:** 2026-02-12
> **Scope:** Full codebase analysis of the revamped Astro site (`davant-systems/astro/`), excluding `old_gatsby/`

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 5.7.5 |
| UI Islands | React | 19.1.0 |
| Language | TypeScript | 5.8.3 (strict) |
| CSS Framework | Tailwind CSS | 4.1.4 |
| Component Library | DaisyUI | 5.0.28 (synthwave theme) |
| Typography Plugin | @tailwindcss/typography | 0.5.16 |
| EXIF Extraction | exifr | 7.1.3 |
| Fonts | Orbitron, Open Sans, Sacramento, Yellowtail | Google Fonts |

---

## Project Structure

```
davantsystems.github.io/
  CLAUDE.md
  board/                             # Project management docs
  old_gatsby/                        # Legacy Gatsby site (deprecated)
  davant-systems/
    astro/
      astro.config.mjs
      tailwind.config.mjs
      tsconfig.json
      package.json
      public/
        video/                       # 2 MP4 files
        image/                       # 2 comparison JPGs
      src/
        app.css                      # Global CSS (596 lines)
        layouts/
          Layout.astro               # Single layout
        pages/                       # 14 route files
        components/                  # 25 component files
        styles/                      # 3 style files (markdown, typography, video)
        content/
          config.ts                  # Content collection schema
          articles/                  # 1 markdown article
        assets/
          images/                    # ~40+ images
        lib/
          compatibility/             # GPU database + scoring logic
```

---

## Pages & Routing (14 routes)

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage — hero cards (Davant Studio + Magic Mirror), newsletter CTA, team contacts |
| `/davant-studio/` | `davant-studio/index.astro` | Product page — features grid, pricing cards |
| `/davant-studio/download/` | `davant-studio/download.astro` | Download page — Windows/Mac links |
| `/davant-studio/metadataimage/` | `davant-studio/metadataimage.astro` | Image metadata extraction tool (React) |
| `/photobooth/` | `photobooth.astro` | Magic Mirror — video backgrounds, testimonials, comparison slider, stats, logo grid, booking CTA |
| `/training/` | `training.astro` | Training & workshops — Luma calendar embed |
| `/articles/` | `articles.astro` | Article listing (content collection) |
| `/articles/[slug]` | `articles/[...slug].astro` | Dynamic article pages |
| `/ambassadors/` | `ambassadors.astro` | Ambassador program — benefits, requirements, FAQ, application form |
| `/about/` | `about.astro` | About page |
| `/press/` | `press.astro` | Press & media assets |
| `/resources/` | `resources.astro` | Legacy download/resources page |
| `/event-galleries/` | `event-galleries.astro` | Event photo galleries |
| `/compatibility-checker/` | `compatibility-checker/index.astro` | Hardware compatibility checker (React) |
| `/404` | `404.astro` | Custom 404 |

---

## Components (25 total)

### Layout & Navigation
- `MainNavWithDropdowns.astro` — Fixed top navbar, DaisyUI dropdowns, mobile hamburger, Stripe portal link
- `NavbarLogo.astro` — Logo image
- `Footer.astro` — Footer with nav + social media SVG icons
- `Link.astro` — Styled `<a>` wrapper

### Brand
- `DavantLogo.astro` — Animated SVG triangle logo

### Hero
- `HeroTwoCards.astro` — Current homepage hero (two product cards)
- `HomeHero.astro` — **UNUSED** (272 lines, superseded by HeroTwoCards)

### Product
- `PurchaseCard.astro` — Pricing card (Standard free / Pro $30/mo)
- `RequirementsPane.astro` — System requirements
- `ComparisonSlider.astro` — Before/after image comparison

### Social Proof
- `Testimonials.astro` — Testimonial container
- `TestimonialCard.astro` — Individual card with accent variants
- `LogoGrid.astro` — 19 client/partner logos with staggered glow
- `StatCard.astro` — Animated counter (intersection observer)

### People
- `People.astro` — Team section (terminal aesthetic)
- `CardPerson.astro` — Person card (retro terminal glow)

### CTA & Forms
- `NewsletterCTA.astro` — Newsletter section
- `MailchimpForm.astro` — Mailchimp subscription form
- `AmbassadorForm.astro` — Zoho iframe for ambassador applications
- `BookingForm.astro` — **UNUSED** (517 lines, replaced by Typeform)
- `SupportCTA.astro` — Support email CTA
- `GradientButton.astro` — Gradient button (primary/secondary)
- `TypeformBookingButton.tsx` — Typeform popup trigger (React)

### Interactive (React Islands)
- `ImageMetadataExtractor.tsx` — EXIF metadata tool
- `compatibility/CompatibilityChecker.tsx` — Hardware checker with WebGL
- `compatibility/HardwareDetector.tsx` — Detection subcomponent

---

## Styling Architecture

### Pipeline
```
app.css
  ├── @import "tailwindcss"
  ├── @import "./styles/markdown.css"
  ├── @plugin "daisyui" (synthwave + custom overrides)
  ├── @import "./styles/typography.scss"
  └── @import "./styles/video.scss"
```

### Theme (DaisyUI synthwave, customized)
- `base-100`: `oklch(0.139 0.036 306.76)` — very dark purple-black
- `base-200`: `oklch(0.129 0.034 306.76)` — darker
- `base-300`: `oklch(0.120 0.031 306.76)` — darkest
- Primary: `hsl(309, 80%, 41%)` — magenta/pink
- Secondary: `hsl(187, 90%, 50%)` — cyan
- Accent: `#ff00ff` — magenta

### Gradient Palette
- Pink (#ec4899) → Purple (#8b5cf6) — primary gradient
- Cyan (#06b6d4) → Blue (#3b82f6) — secondary gradient
- Pink → Fuchsia → Purple — CTA buttons
- Violet → Cyan → Blue — headings

### Custom Effects (app.css)
- Chrome flash/shine animations
- VHS scan line effects (horizontal + vertical RGB)
- Neon text glow
- Logo float/pulse animations
- Hero gradient overlays
- Comparison slider markers

---

## External Integrations

| Service | Purpose |
|---------|---------|
| Mailchimp | Newsletter subscription |
| Zoho Campaigns | Ambassador application form (iframe) |
| Typeform | Event booking popup |
| Luma | Events calendar embed + checkout |
| Stripe | Subscription billing portal + purchase links |
| YouTube | Video embeds |
| AWS S3 | Software download hosting (`davant-public.s3.us-west-1.amazonaws.com`) |

---

## Content Management

- **Astro Content Collections** for articles (Zod schema: title, description, pubDate, author, tags, featured, featuredImage, draft)
- Currently **1 article**: "Stable Diffusion Glossary"
- All other content (testimonials, benefits, FAQs, team, logos, galleries) is **hardcoded in component frontmatter**

---

## Findings

### Critical

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| C1 | Broken image paths in production | `press.astro`, `resources.astro` | Use `/src/assets/images/...` string paths in `<img>` tags — work in dev, 404 after build |
| C2 | Missing favicon | `Layout.astro` → `public/` | Layout references `/favicon.svg` but file does not exist |
| C3 | No deployment pipeline | repo root | No `.github/workflows/` directory despite docs referencing GitHub Actions |
| C4 | Mobile nav link mismatch | `MainNavWithDropdowns.astro:50` | Mobile menu links to `/download/` instead of `/davant-studio/download/` |

### High Priority

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| H1 | Bug in `Link.astro` | `Link.astro:4` | Default class has `text=fuchsia-500` (equals sign, not dash). Also, computed `dynamicClasses` is never used |
| H2 | Missing SEO fundamentals | `Layout.astro` | No OG tags, no Twitter cards, no canonical URLs, no structured data (JSON-LD), no sitemap, no robots.txt |
| H3 | No `prefers-reduced-motion` | Sitewide | Extensive animations (VHS, neon, floating logos, counters) with zero reduced-motion fallbacks |
| H4 | Stale `/resources/` page | `resources.astro` | References v0.6.2 download, expired "ends 02.17.2024" beta date. Overlaps with current `/davant-studio/download/` |

### Medium Priority

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| M1 | CSS duplication | Multiple files | `.hero-gradient-1` defined **5 times** across `app.css`, `training.astro`, `davant-studio/index.astro`, `download.astro`, `resources.astro`. Comparison slider CSS, neon effects, video embed styles also duplicated |
| M2 | Dead code | Components | `HomeHero.astro` (272 lines), `Welcome.astro`, `BookingForm.astro` (517 lines), `DavantStudioPage.astro` — all unused. Significant commented-out blocks across pages |
| M3 | Duplicate font loading | `astro.config.mjs` + `Layout.astro` | Orbitron loaded via both Astro experimental fonts API AND Google Fonts `<link>` tag |
| M4 | Image optimization gaps | Multiple pages | Several pages use raw `<img>` with `.src` instead of Astro's `<Image>` component, missing format conversion and responsive sizing |
| M5 | Comparison slider JS duplication | `ComparisonSlider.astro`, `photobooth.astro` | Identical 40+ line initialization code in both files |

### Low Priority

| # | Issue | Location | Detail |
|---|-------|----------|--------|
| L1 | Generic alt text | Multiple pages | "Screenshot of Davant Studio software" used 5 times for different images. Hero uses `alt="Background"` |
| L2 | No skip-to-content link | `Layout.astro` | Missing for keyboard navigation |
| L3 | `!important` usage | Comparison slider styles | 9 instances — somewhat justified for drag-state overrides but refactorable |
| L4 | Animation delay class bloat | `photobooth.astro` | 100+ lines of `.animate-logo-pulse-delay-N` classes (0–22) that could use CSS custom properties |
| L5 | Security headers | `Layout.astro` | CSP includes `'unsafe-inline'` for both `script-src` and `style-src` (necessary for Astro/Tailwind but weakens CSP) |
| L6 | No analytics | Sitewide | `connect-src` CSP allowlists Google Analytics but no GA script is loaded |

---

## What's Working Well

- **Component architecture** — Clean decomposition, data-driven rendering, TypeScript interfaces for props
- **Content collections** — Zod schema validation for articles
- **React islands** — Proper use of `client:load` only where interactivity is needed
- **Semantic HTML** — Consistent use of `<main>`, `<section>`, `<nav>`, `<article>`, `<time>`
- **Security headers** — Comprehensive CSP with whitelisted domains
- **Image loading strategy** — `loading="lazy"` below fold, `loading="eager"` above fold
- **Cohesive design** — Synthwave/terminal aesthetic carried consistently through components
- **Accessibility basics** — `lang="en"`, `sr-only` headings, `aria-label` on icon links, proper form labels
