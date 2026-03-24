---
type: task
status: done
priority: 3
created: 2026-03-24
---
# Convert raw img tags to Astro Image component and add lazy loading

18 raw `<img>` tags across pages miss Astro's automatic optimization (WebP/AVIF, srcset, responsive sizing). Convert to `<Image>` where possible. Also add `loading="lazy"` to 6 below-fold images that lack it.

Key files: photobooth.astro, davant-studio/index.astro, resources.astro, LogoGrid.astro, Welcome.astro
