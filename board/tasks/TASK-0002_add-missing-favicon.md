---
type: task
status: done
priority: 1
created: 2026-02-12
parent: "[[EPIC-0001]]"
---
# Add Missing Favicon

## Description

`Layout.astro` references `/favicon.svg` but the file does not exist in `public/`. The site shows a browser default or 404 for the favicon.

## Acceptance Criteria

- A favicon file exists in `public/` matching the Layout reference
- Favicon displays correctly in browser tabs
