---
type: task
status: backlog
priority: 2
created: 2026-10-01
parent: "[[EPIC-0004]]"
---

# Fix Pre-Existing astro check Type Errors

## Description

`npx astro check` reports 9 errors that predate the March 2026 work. The production build still passes because Astro does not block on type errors.

- `src/components/compatibility/CompatibilityChecker.tsx`: `useRef<number>()` needs an initial value; `'memory'` is not in the check-type union; `setGpuModels` state type only covers the NVIDIA shape, not AMD/Apple/Intel
- `src/components/ImageMetadataExtractor.tsx`: `JSX.Element[]` namespace not found (use `React.ReactElement[]` or import `JSX` from react)
- `src/pages/articles.astro`: `imageMap` indexed by `string` with no index signature (4 occurrences)

## Acceptance Criteria

- `npx astro check` reports 0 errors
- No behavior change; `npm run build` still produces 20 pages
