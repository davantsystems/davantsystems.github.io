# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Davant Systems Astro Project

## Project Overview

This is the marketing website for Davant Systems (www.davantsystems.com), built with Astro and featuring a distinctive "Creative Synthwave" design aesthetic. The site showcases:
- **Davant Studio**: AI image generation software for creative professionals
- **Magic Mirror**: Interactive AI photo booth experience
- **Ambassador Program**: Community program for creative pioneers

## Development Server

This project uses a special setup for the development server that allows both Claude and the user to monitor the output:

- `npm run dev` - Starts the development server on port 3100 with output logging to `../logs/dev-server.log`
- `npm run dev:logs` - Tails the dev server log file in real-time

### Usage

1. Run `npm run dev` to start the server (logs will be written to `../logs/dev-server.log`)
2. In a separate terminal, run `npm run dev:logs` to monitor the server output
3. The dev server will be available at http://localhost:3100/

**Port Assignment**: This project is assigned port 3100 (Claude-managed frontend range: 3100-3999)

This setup ensures that Claude can see and react to compilation errors and server status while also allowing the user to monitor the output.

## Commands

### Build & Development
- `npm install` - Install dependencies
- `npm run dev` - Start dev server on port 3100 with logging
- `npm run dev:logs` - Tail the dev server log file
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview the production build locally
- `npm run astro [command]` - Run Astro CLI commands

### TypeScript & Quality Checks
- `npm run astro check` - Type-check all `.astro` and TypeScript files
- Uses strict TypeScript configuration extending `astro/tsconfigs/strict`
- React JSX is configured with `react-jsx` and React as JSX import source

## Design System

The site uses a comprehensive design system documented in `docs/DESIGN_SYSTEM.md`. Key features include:

### Visual Identity
- **Creative Synthwave** aesthetic with gradient-forward design
- Dark mode native with vibrant accent colors
- Premium animated icons and hover effects
- Glassmorphism and backdrop blur effects

### Color Palette
- **Primary**: Pink (#ec4899) to Purple (#8b5cf6) gradients
- **Secondary**: Cyan (#06b6d4) and Electric Blue (#3b82f6)
- **Action Color**: Pink to purple gradient for CTAs
- **Link Color**: Fuchsia with hover transitions

### Typography
- **Primary Font**: Open Sans
- **Display Fonts**: Orbitron (tech), Sacramento (decorative/neon), Yellowtail (casual)
- Mixed font weights for visual rhythm

### Animation System
Five core animations: pulse, float, shine, bounce, and sparkle. Used strategically for:
- Icon animations
- Hover effects
- Page transitions
- Loading states

## Tech Stack

- **Framework**: Astro v5 with React integration (@astrojs/react)
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite) + DaisyUI (synthwave theme)
- **Fonts**: Google Fonts (configured in astro.config.mjs)
- **Icons**: Custom SVG with gradient fills
- **Build**: Vite with custom configuration
- **Language**: TypeScript with strict mode

## Key Pages

### Recently Updated
- `/ambassadors` - Complete redesign with animated benefit cards, comprehensive program info, and integrated application form
- Design pattern established for feature showcases with hover effects and professional layouts

### Core Pages
- `/` - Homepage with hero sections
- `/davant-studio` - Product showcase
- `/photobooth` - Magic Mirror product with neon text effects
- `/training` - Workshops and training programs
- `/articles` - Content collection system

## Project Structure

```
davant-systems/
├── astro/
│   ├── src/
│   │   ├── pages/           # Route components (.astro files)
│   │   ├── components/      # Reusable UI components (.astro, .tsx)
│   │   ├── layouts/         # Page layouts
│   │   ├── styles/          # Global styles and typography
│   │   ├── assets/          # Images and static assets
│   │   └── content/         # Content collections (articles)
│   ├── docs/
│   │   ├── DESIGN_SYSTEM.md # Comprehensive design documentation
│   │   └── AMBASSADORS_DESIGN.md # Specific page design details
│   ├── public/              # Static assets served as-is
│   └── dist/                # Production build output
└── logs/                    # Development server logs
```

### Component Architecture
- **Astro Components** (`.astro`): Primary for static content and layout
- **React Components** (`.tsx`): Used for interactive features (e.g., ImageMetadataExtractor)
- **Naming Convention**: PascalCase for components, kebab-case for pages
- **Props**: TypeScript interfaces for type safety

## Deployment

- **Branch**: Work on `migrate/astro-claude` branch
- **Production**: Deploys via GitHub Actions
- **Domain**: Custom domain via CNAME file

## Recent Changes

- Transformed ambassadors page from placeholder to full program showcase
- Implemented custom animated SVG icon system
- Added Zoho form integration with tabbed interface
- Updated content to be inclusive of all visual creatives
- Created comprehensive design system documentation

## Best Practices

1. **Performance**: Use lazy loading, optimize images, leverage CSS transforms for animations
2. **Accessibility**: Maintain WCAG AA contrast, provide motion preferences, 44px touch targets
3. **Consistency**: Follow design system patterns, use established color/spacing tokens
4. **Code Quality**: No inline comments, clean component structure, semantic HTML

## Development Workflow

1. **Editing Files**: Check existing patterns in similar components
2. **Adding Features**: Review design system documentation first
3. **Debugging**: Monitor `../logs/dev-server.log` for compilation errors
4. **Type Safety**: Run `npm run astro check` before committing
5. **Building**: Always test with `npm run build` before deployment

## Common Tasks

- **Add a new page**: Create `.astro` file in `src/pages/`
- **Add a component**: Create in `src/components/`, import where needed
- **Update styles**: Modify Tailwind classes or files in `src/styles/`
- **Add content**: Use content collections in `src/content/`
- **Debug issues**: Check `../logs/dev-server.log` for errors

## Notes for Claude

- The site emphasizes visual appeal with a premium feel
- Animations should enhance meaning, not just decoration
- Gradient usage is a key brand element
- The ambassadors page serves as a reference implementation for feature showcases
- Always consider both technical and creative professionals as the audience
- When making changes, preserve the Creative Synthwave aesthetic
- Log output is crucial for debugging - always check `../logs/dev-server.log`