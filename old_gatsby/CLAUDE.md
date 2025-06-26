# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Davant Systems (www.davantsystems.com), showcasing their AI creative tools:
- **Davant Studio**: AI image generation suite for creative professionals
- **Magic Mirror**: Interactive AI photo booth experience

The site is built with Gatsby and deployed to GitHub Pages.

## Key Commands

```bash
# Development (run from davant-systems/ directory)
cd davant-systems
npm run develop    # Start development server on localhost:8000
npm run build      # Build production site
npm run serve      # Serve production build locally
npm run clean      # Clear cache and public folder
npm run typecheck  # Run TypeScript type checking

# Deployment (deploys to GitHub Pages main branch)
npm run deploy     # Build and deploy to production
```

## Architecture & Key Patterns

### Technology Stack
- **Framework**: Gatsby v5 (React-based static site generator)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS + DaisyUI (synthwave theme)
- **State**: React Context API via ContentContext
- **Analytics**: Google Tag Manager + Google Analytics

### Project Structure
```
davant-systems/
├── src/
│   ├── pages/           # Route components (folder = route)
│   ├── components/      # Reusable UI components
│   ├── templates/       # Blog/dynamic page templates
│   ├── ContentContext.tsx    # Global content/URLs context
│   └── ContentProvider.tsx   # Provides download links, social URLs
├── static/              # Static assets (copied as-is)
└── public/              # Build output (git-ignored)
```

### Content Management Pattern
The site uses a centralized content management approach:
- `ContentProvider.tsx` contains all external URLs, download links, and social media links
- Components access this via `useContent()` hook
- Environment-specific URLs can be overridden via .env files

### Styling Conventions
- Use Tailwind utility classes, avoid custom CSS
- Follow existing gradient patterns for brand consistency
- DaisyUI components for forms, buttons, modals
- Responsive design: mobile-first approach

### Key Files to Understand
1. `gatsby-config.ts`: Plugin configuration, S3 content source, analytics setup
2. `ContentProvider.tsx`: Central URL/link management
3. `src/pages/index.tsx`: Homepage structure and component usage
4. `tailwind.config.js`: Custom theme extensions

### Deployment Notes
- **Branch Strategy**: Work on `source` branch, deploys to `main` branch
- **Domain**: CNAME file required in root for custom domain
- **Static Files**: Place in `static/` folder for direct copying
- **S3 Content**: Pulls from 'davant-public' bucket (configured in gatsby-config)

### Common Tasks

**Adding a new page**:
Create file in `src/pages/` (e.g., `src/pages/new-feature.tsx` → `/new-feature`)

**Updating download links**:
Edit `ContentProvider.tsx` to update version numbers and URLs

**Adding analytics events**:
Use the existing gtag implementation pattern found in components

**Modifying navigation**:
Update `MainNav.tsx` component with new menu items

### Important Considerations
- Always run `npm run typecheck` before committing
- Test responsive design at mobile, tablet, and desktop breakpoints
- Ensure all external links open in new tabs (target="_blank")
- Keep image file sizes optimized for web performance

