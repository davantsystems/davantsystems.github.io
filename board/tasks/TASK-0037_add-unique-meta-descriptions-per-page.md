---
type: task
status: done
priority: 2
created: 2026-03-25
parent: "[[EPIC-0002]]"
---
# Add Unique Meta Descriptions Per Page

## Description

Most pages rely on the default description from Layout.astro rather than passing page-specific descriptions. This hurts SEO and makes search results less useful.

## Acceptance Criteria

- Every page passes a unique `description` prop to Layout
- Descriptions are concise (under 160 characters) and specific to each page's content
