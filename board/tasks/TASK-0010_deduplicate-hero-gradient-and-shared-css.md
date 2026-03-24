---
type: task
status: backlog
priority: 2
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Deduplicate Hero Gradient and Shared CSS

## Description

`.hero-gradient-1` is defined 5 times across `app.css`, `training.astro`, `davant-studio/index.astro`, `download.astro`, and `resources.astro`. Comparison slider CSS, neon effects, and video embed styles are also duplicated across files.

## Acceptance Criteria

- Shared CSS classes defined once in `app.css` or dedicated style files
- No duplicate class definitions across page files
- Visual appearance unchanged
