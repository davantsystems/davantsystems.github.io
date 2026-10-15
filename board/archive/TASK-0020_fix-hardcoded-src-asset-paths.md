---
type: task
status: done
priority: 1
created: 2026-03-24
---
# Fix hardcoded /src/ asset paths in resources and download pages

`resources.astro` and `davant-studio/download.astro` use hardcoded `/src/assets/images/...` paths that 404 in production. Convert to proper Astro image imports (same fix applied to `press.astro` in commit 9c33099).

**Files:**
- `src/pages/resources.astro` (lines 111, 118, 125, 140)
- `src/pages/davant-studio/download.astro` (line 140)
