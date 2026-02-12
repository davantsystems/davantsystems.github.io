---
type: task
status: backlog
priority: 1
created: 2026-02-12
---
# Set Up GitHub Actions Deployment Pipeline

## Description

No `.github/workflows/` directory exists despite the repo being a GitHub Pages site. The site needs an automated build and deploy pipeline.

## Acceptance Criteria

- GitHub Actions workflow builds the Astro site on push to main
- Site deploys to GitHub Pages automatically
- Build failures are reported
