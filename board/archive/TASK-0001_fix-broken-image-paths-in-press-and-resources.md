---
type: task
status: done
priority: 1
created: 2026-02-12
parent: "[[EPIC-0001]]"
---
# Fix Broken Image Paths in Press and Resources Pages

## Description

`press.astro` and `resources.astro` use `/src/assets/images/...` string paths in `<img>` tags. These work in dev but 404 after build because Astro doesn't process string paths through its asset pipeline.

## Acceptance Criteria

- All images on `/press/` and `/resources/` load correctly in production builds
- Images use Astro's `<Image>` component or proper import paths
