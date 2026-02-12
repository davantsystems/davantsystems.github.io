---
type: task
status: backlog
priority: 1
created: 2026-02-12
parent: "[[EPIC-0002]]"
---
# Add Sitemap and Robots.txt

## Description

The site has no sitemap.xml or robots.txt. Search engines can't efficiently discover or index pages.

## Acceptance Criteria

- Astro sitemap integration generates sitemap.xml at build time
- robots.txt exists in public/ with appropriate directives
- Sitemap URL referenced in robots.txt
