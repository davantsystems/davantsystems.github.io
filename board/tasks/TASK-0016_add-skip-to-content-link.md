---
type: task
status: backlog
priority: 3
created: 2026-02-12
parent: "[[EPIC-0003]]"
---
# Add Skip-to-Content Link

## Description

No skip-to-content link exists in `Layout.astro`. Keyboard users must tab through the full navigation on every page.

## Acceptance Criteria

- Visually hidden skip link appears as first focusable element
- Link jumps to `<main>` content area
- Link becomes visible on focus
