---
type: task
status: backlog
priority: 3
created: 2026-10-01
---

# Decide on Untracked Award and Testimonial Images

## Description

Seven images were added to `src/assets/images/` on 2026-03-28 but never referenced or committed, and no board item or session recorded their purpose:

- `awards/` — two SIGGRAPH 2023 CGW Silver Edge Award images (certificate JPG and badge PNG)
- `nvidia-inception-partner.jpg`
- `testimonials/` — four screenshots (three Magic Mirror, one Davant Studio)

They look like material for a social-proof or awards section, possibly to replace the hardcoded quotes in `Testimonials.astro`.

## Acceptance Criteria

- Decision recorded: either a task/epic exists to use them on a specific page, or they are deleted from the working tree
- No unreferenced images left untracked in `src/assets/`
