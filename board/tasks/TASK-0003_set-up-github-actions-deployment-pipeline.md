---
type: task
status: in-progress
priority: 1
created: 2026-02-12
---
# Set Up GitHub Actions Deployment Pipeline

## Description

No `.github/workflows/` directory exists despite the repo being a GitHub Pages site. The site needs an automated build and deploy pipeline to replace the old Gatsby deployment with the new Astro build.

## Acceptance Criteria

- GitHub Actions workflow builds the Astro site on push to main
- Site deploys to GitHub Pages automatically
- Custom domain (www.davantsystems.com) preserved through deployments
- Build failures are reported

## Implementation Plan

### Step 1: Add `site` to Astro config
- **File**: `davant-systems/astro/astro.config.mjs`
- Add `site: 'https://www.davantsystems.com'` to the `defineConfig` object
- No `base` needed (root-level `username.github.io` repo deploys to `/`)

### Step 2: Add CNAME + .nojekyll to `public/`
Files in `public/` are copied verbatim to `dist/` on build, so they survive deployment automatically.

- **Create**: `davant-systems/astro/public/CNAME` with content `www.davantsystems.com`
- **Create**: `davant-systems/astro/public/.nojekyll` (empty file)

### Step 3: Create GitHub Actions workflow
- **Create**: `.github/workflows/deploy.yml`
- Uses artifact-based deployment (`actions/deploy-pages`) rather than a `gh-pages` branch
- Triggers on push to `main` + manual `workflow_dispatch`
- Uses `working-directory: davant-systems/astro` for build steps
- Pipeline: `npm ci` -> `npm run build` -> `upload-pages-artifact` -> `deploy-pages`
- Node 22 LTS, caches npm with `cache-dependency-path` pointing to nested lockfile
- `concurrency.cancel-in-progress: false` to prevent broken mid-deploy states

### Step 4: Change GitHub Pages source (manual)
- Go to repo Settings > Pages
- Change **Source** from "Deploy from a branch" to **GitHub Actions**
- Without this, the `deploy-pages` action will be ignored

## Verification
1. Run `npm run build` locally in `davant-systems/astro/` to confirm build succeeds
2. Confirm `dist/CNAME` and `dist/.nojekyll` exist after build
3. Merge changes to `main` and watch the Actions run
4. Verify `www.davantsystems.com` serves the new Astro site
5. Test that custom domain still works after deployment

## Notes
- `package-lock.json` exists (required for `npm ci`)
- Build is ~70MB (mostly video files in `public/video/`), well within GitHub Pages 1GB limit
- Root-level CNAME and .nojekyll can remain for backward compatibility
