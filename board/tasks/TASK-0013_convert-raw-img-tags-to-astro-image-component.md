---
type: task
status: backlog
priority: 2
created: 2026-02-12
---
# Convert Raw img Tags to Astro Image Component

## Description

Several pages use raw `<img>` with `.src` instead of Astro's `<Image>` component, missing automatic format conversion (WebP/AVIF) and responsive sizing.

## Acceptance Criteria

- All locally-sourced images use Astro's `<Image>` component
- Images are automatically optimized at build time
- Responsive sizing attributes present where appropriate
