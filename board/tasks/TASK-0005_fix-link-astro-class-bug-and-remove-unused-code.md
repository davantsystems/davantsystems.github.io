---
type: task
status: backlog
priority: 1
created: 2026-02-12
parent: "[[EPIC-0001]]"
---
# Fix Link.astro Class Bug and Remove Unused Code

## Description

Two issues in `Link.astro`:
1. Default class uses `text=fuchsia-500` (equals sign) instead of `text-fuchsia-500` (dash)
2. Computed `dynamicClasses` variable is never applied to the element

## Acceptance Criteria

- Default class corrected to `text-fuchsia-500`
- `dynamicClasses` either applied correctly or removed if unnecessary
