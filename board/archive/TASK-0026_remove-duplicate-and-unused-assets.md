---
type: task
status: done
priority: 2
created: 2026-03-24
---
# Remove duplicate and unused assets

**Duplicate assets (~8.6MB):** 9 files exist in both `src/assets/images/` and `public/image/press/`. The public copies are needed for press download links; the src copies are used for Astro Image optimization on other pages. This is intentional but worth noting.

**Unused assets (~3.3MB) to delete:**
- `src/assets/images/prints-mosaic_corrected.jpg` (1.8M)
- `src/assets/images/logos/logo-BruinAI-color.png` (1.3M)
- `src/assets/images/logos/Nvidia-InceptionPartner_transparent.png` (106K)
- `src/assets/images/logos/logo-FYI-white.png` (12K)
- `src/assets/images/luma-embed-image.jpg` (73K)

Verify each is truly unused before deleting.
