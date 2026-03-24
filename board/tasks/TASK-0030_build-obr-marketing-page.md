---
type: task
status: todo
priority: 1
created: 2026-03-24
parent: "[[EPIC-0005]]"
---

# Build OBR Marketing Splash Page

## Description

Create `src/pages/offline-background-remover/index.astro`. One-page product landing for the App Store listing.

Sections (copy in NOTE-0002):
- Hero: abstract gradient bg image, headline, subhead, body text, App Store CTA
- Screenshot gallery: 4 AppStore images
- Key features grid: 6 features (Fully Offline, No Subscription, Drag-and-Drop, 13 AI Models, Background Fill, Mask Export)
- Professional controls section
- Privacy section
- Pricing/CTA section

Design: dark base, hero bg image, simple back-link nav (not MainNavWithDropdowns), Footer.astro, DM Sans/Figtree font.

## Acceptance Criteria

- Page renders at `/offline-background-remover`
- All sections present with final copy from NOTE-0002
- Screenshots display and are optimized via Astro image pipeline
- Responsive (mobile + desktop)
- App Store CTA button present (link can be placeholder until app is live)
