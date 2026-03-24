---
type: task
status: backlog
priority: 3
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Replace Animation Delay Classes with CSS Custom Properties

## Description

`photobooth.astro` has 100+ lines of `.animate-logo-pulse-delay-N` classes (0-22) that could be replaced with a single class using CSS custom properties for the delay value.

## Acceptance Criteria

- Animation delay classes replaced with CSS custom properties approach
- Reduced CSS footprint
- Animation behavior unchanged
