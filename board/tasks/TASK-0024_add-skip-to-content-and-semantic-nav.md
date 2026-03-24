---
type: task
status: done
priority: 2
created: 2026-03-24
---
# Add skip-to-content link and use semantic nav element

1. Add `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>` to Layout.astro
2. Change `MainNavWithDropdowns.astro` root `<div class="navbar">` to `<nav class="navbar">`
3. Replace deprecated `frameborder="0"` with CSS on iframes in `photobooth.astro` and `photobooth-mockup.astro`
