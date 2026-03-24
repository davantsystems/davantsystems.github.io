---
type: task
status: backlog
priority: 3
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Refactor !important Usage in Comparison Slider

## Description

9 instances of `!important` in comparison slider styles. While somewhat justified for drag-state overrides, these can likely be refactored using more specific selectors or CSS custom properties.

## Acceptance Criteria

- `!important` usage eliminated or reduced to absolute minimum
- Slider drag behavior unchanged
