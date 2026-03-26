---
type: task
status: backlog
priority: 2
created: 2026-03-25
parent: "[[EPIC-0002]]"
---
# Add Complete Favicon Set

## Description

Only `favicon.png` exists. Missing `favicon.ico`, Apple touch icon (`apple-touch-icon.png`), and `site.webmanifest` for full browser/device coverage.

## Acceptance Criteria

- `favicon.ico` generated from source PNG
- `apple-touch-icon.png` (180x180) in public/
- `site.webmanifest` with icon references
- Layout.astro references all favicon variants
