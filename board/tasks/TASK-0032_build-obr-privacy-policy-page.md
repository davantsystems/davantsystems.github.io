---
type: task
status: todo
priority: 1
created: 2026-03-24
parent: "[[EPIC-0005]]"
---

# Build OBR Privacy Policy Page

## Description

Create `src/pages/offline-background-remover/privacy-policy.astro`. Full privacy policy meeting Apple's requirements for a no-data-collection app.

Sections (copy in NOTE-0002):
- Privacy Policy heading with effective date (March 24, 2026)
- Overview
- Data Collection
- On-Device Processing
- Network Access
- Third-Party Services
- Cookies and Tracking
- Data Retention
- Children's Privacy
- Changes to This Policy
- Contact

Design: match OBR page aesthetic (dark base, DM Sans/Figtree, simple nav, Footer.astro). Clean, readable typography for legal content.

## Acceptance Criteria

- Page renders at `/offline-background-remover/privacy-policy`
- All sections present with final copy from NOTE-0002
- Formal tone ("does not" not contractions)
- Contact email is clickable mailto link
- Responsive (mobile + desktop)
