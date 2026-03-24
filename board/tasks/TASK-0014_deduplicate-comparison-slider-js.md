---
type: task
status: backlog
priority: 2
created: 2026-02-12
parent: "[[EPIC-0004]]"
---
# Deduplicate Comparison Slider JS

## Description

Identical 40+ line slider initialization code exists in both `ComparisonSlider.astro` and `photobooth.astro`.

## Acceptance Criteria

- Slider initialization logic defined once
- Both pages use the shared implementation
- Slider behavior unchanged
