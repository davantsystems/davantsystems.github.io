---
type: task
status: backlog
priority: 2
created: 2026-10-01
---

# Swap OBR Coming Soon Badges for App Store Links

## Description

The two download CTAs on `/offline-background-remover` are non-link "Coming Soon to the Mac App Store" `<span>` badges because the app is not yet live and no App Store URL exists. Both spots are marked with a `<!-- Swap <span> for <a href={appStoreUrl}> ... -->` comment in `src/pages/offline-background-remover/index.astro`.

## Acceptance Criteria

- Both badges replaced with `<a href="<App Store URL>">` carrying the original hover/transition classes
- Label restored to "Download on the Mac App Store"
- Nav anchor "Pricing" renamed to "Download" if preferred
- Build passes

## Notes

Blocked externally on the Mac App Store listing going live. Context: archived NOTE-0003 (design critique) and EPIC-0005.
