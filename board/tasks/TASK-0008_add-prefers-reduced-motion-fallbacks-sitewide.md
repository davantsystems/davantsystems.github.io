---
type: task
status: backlog
priority: 1
created: 2026-02-12
parent: "[[EPIC-0003]]"
---
# Add prefers-reduced-motion Fallbacks Sitewide

## Description

The site has extensive animations (VHS effects, neon glow, floating logos, animated counters) with zero `prefers-reduced-motion` media query fallbacks. Users with motion sensitivity settings get the full animation experience.

## Acceptance Criteria

- All CSS animations respect `prefers-reduced-motion: reduce`
- JS-driven animations (intersection observer counters, etc.) check for motion preference
- Animations are disabled or simplified when user prefers reduced motion
