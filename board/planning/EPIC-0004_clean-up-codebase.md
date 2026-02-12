---
type: epic
status: planning
created: 2026-02-12
tasks:
  - "[[TASK-0010]]"
  - "[[TASK-0011]]"
  - "[[TASK-0012]]"
  - "[[TASK-0014]]"
  - "[[TASK-0017]]"
  - "[[TASK-0018]]"
---
# Clean Up Codebase

Remove dead code, deduplicate CSS/JS, and reduce technical debt identified in REFE-0003.

## Scope

- M1: CSS duplication (hero-gradient defined 5 times, etc.)
- M2: Dead components (HomeHero, BookingForm, Welcome, DavantStudioPage)
- M3: Duplicate font loading
- M5: Comparison slider JS duplication
- L3: !important usage in comparison slider
- L4: Animation delay class bloat
