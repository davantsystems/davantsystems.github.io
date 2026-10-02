---
type: task
status: done
priority: 1
created: 2026-02-12
parent: "[[EPIC-0002]]"
---
# Add OG Tags, Twitter Cards, and Canonical URLs

## Description

`Layout.astro` has no Open Graph meta tags, Twitter card tags, or canonical URL tags. Social sharing produces no preview cards and SEO is weakened.

## Acceptance Criteria

- All pages have OG tags (title, description, image, type)
- All pages have Twitter card meta tags
- All pages have canonical URL tags
- Layout accepts per-page overrides for title, description, and image
