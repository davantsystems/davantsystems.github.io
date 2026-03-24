---
type: task
status: todo
priority: 1
created: 2026-03-24
parent: "[[EPIC-0005]]"
---

# Build OBR Support Page

## Description

Create `src/pages/offline-background-remover/support.astro`. Simple support page meeting Apple's requirements.

Sections (copy in NOTE-0002):
- Page header with intro
- FAQ section (7 questions covering: internet requirement, best results, image formats, model downloads, refunds, troubleshooting, system requirements)
- Contact section with support@davantsystems.com

Design: match OBR marketing page aesthetic (dark base, DM Sans/Figtree, simple nav, Footer.astro).

## Acceptance Criteria

- Page renders at `/offline-background-remover/support`
- All FAQ entries present with final copy from NOTE-0002
- Contact email is clickable mailto link
- Responsive (mobile + desktop)
