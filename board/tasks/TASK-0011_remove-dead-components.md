---
type: task
status: done
priority: 2
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Remove Dead Components

## Description

Several components are unused and add unnecessary weight:
- `HomeHero.astro` (272 lines) — superseded by HeroTwoCards
- `BookingForm.astro` (517 lines) — replaced by Typeform
- `Welcome.astro` — unused
- `DavantStudioPage.astro` — unused

Also significant commented-out blocks across pages.

## Acceptance Criteria

- All confirmed-unused components deleted
- Commented-out code blocks removed from active pages
- No broken imports after removal
