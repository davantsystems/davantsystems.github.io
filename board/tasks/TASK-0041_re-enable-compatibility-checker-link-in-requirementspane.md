---
type: task
status: backlog
priority: 3
created: 2026-10-01
---

# Re-enable Compatibility Checker Link in RequirementsPane

## Description

The "Check System Compatibility" link to `/compatibility-checker` at the bottom of `src/components/RequirementsPane.astro` is wrapped in an HTML comment because the checker was unfinished when the link was added. The `/compatibility-checker` page exists and renders `CompatibilityChecker.tsx`; whether it is ready for users has not been decided.

## Acceptance Criteria

- Compatibility checker reviewed and confirmed ready, or the gaps listed as tasks
- Link uncommented in `RequirementsPane.astro` once ready
- Link verified on the Davant Studio page in a build

## Notes

Spawned from NOTE-0001. Related: the type errors in `CompatibilityChecker.tsx` tracked separately.
