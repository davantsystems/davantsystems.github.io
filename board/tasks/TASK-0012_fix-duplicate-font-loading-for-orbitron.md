---
type: task
status: backlog
priority: 2
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Fix Duplicate Font Loading for Orbitron

## Description

Orbitron font is loaded via both the Astro experimental fonts API (`astro.config.mjs`) AND a Google Fonts `<link>` tag in `Layout.astro`. This causes redundant network requests.

## Acceptance Criteria

- Orbitron loaded through a single mechanism
- No duplicate font requests in network tab
