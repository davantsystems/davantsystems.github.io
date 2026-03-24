---
type: epic
status: planning
created: 2026-03-24
tasks:
  - "[[TASK-0028]]"
  - "[[TASK-0029]]"
  - "[[TASK-0030]]"
  - "[[TASK-0031]]"
  - "[[TASK-0032]]"
  - "[[TASK-0033]]"
---

# Offline Background Remover - App Store Pages

Build three pages required for Apple App Store review of the "Offline Background Remover" Mac app: a marketing splash page, a support page, and a privacy policy page.

## Context

See NOTE-0002 for full planning details, design approach, assets, and final page copy.

## Goals

- All three URLs live and accessible before Apple review submission
- Marketing page showcases the app with AppStore screenshots and copy
- Support page meets Apple's requirements (FAQ + contact)
- Privacy policy meets Apple's requirements (no-data-collection app)

## Required URLs

- `/offline-background-remover` - marketing splash
- `/offline-background-remover/support` - support page
- `/offline-background-remover/privacy-policy` - privacy policy

## Scope

1. Copy assets (hero bg + 4 screenshots) into `src/assets/images/obr/`
2. Build marketing splash page with hero, features grid, screenshots, CTAs
3. Build support page with FAQ and contact section
4. Build privacy policy page
5. Design: dark base, abstract gradient hero bg, clean sans-serif font (DM Sans or Figtree), simple nav (back-link to main site), re-use `Layout.astro` and `Footer.astro`
6. Verify build passes and pages render correctly
