---
type: task
status: todo
priority: 1
created: 2026-03-24
parent: "[[EPIC-0005]]"
---

# Verify OBR Pages Build and Render

## Description

Run `npx astro check` and `npm run build` to ensure all 3 OBR pages compile without errors. Visually verify each page in dev server.

## Acceptance Criteria

- `npx astro check` passes with no errors
- `npm run build` succeeds
- All 3 pages render correctly in dev server
- All images load properly
- No console errors
