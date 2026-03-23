## Documentation Links
- Astro documentation is available at: https://docs.astro.build/llms.txt

## Project Board

This project uses a structured board system for project management.

- **Ask before creating new board files** - don't auto-create tasks, ADRs, etc.
- Follow the board system spec for all documentation artifacts
- Use `/board:board-show` to see current board state
- Use `/board:board-add` to create new items
- Use `/board:board-update` after completing significant work to reconcile the board
- Use `/board:board-check` when starting work to find related board context

## Project Overview

This is the marketing website for Davant Systems (www.davantsystems.com), built with Astro and featuring a distinctive "Creative Synthwave" design aesthetic. The site showcases:
- **Davant Studio**: AI image generation software for creative professionals
- **Magic Mirror**: Interactive AI photo booth experience
- **Ambassador Program**: Community program for creative pioneers

## Development Server

This project uses a special setup for the development server that allows both Claude and the user to monitor the output:

- `npm run dev` - Starts the development server on port 3100 with output logging to `logs/dev-server.log`
- `npm run log` - Tails the dev server log file in real-time
- `npm run log:last` - Shows last N lines of the dev server log (use `LINES=50 npm run log:last` to customize)
- `npm run log:clear` - Clears the dev server log file
- `npm run kill` - Kills the dev server process on port 3100
- `npm run restart` - Kills and restarts the dev server
- `npm run status` - Shows whether the dev server is running

### Usage

1. Run `npm run dev` to start the server (logs will be written to `logs/dev-server.log`)
2. In a separate terminal, run `npm run log` to monitor the server output
3. The dev server will be available at http://localhost:3100/

**Port Assignment**: This project is assigned port 3100 (Claude-managed frontend range: 3100-3999)

## Commands

### Development Server Management
- `npm run dev` - Start dev server on port 3100 with logging
- `npm run log` - Tail the dev server log file in real-time
- `npm run log:last` - Show last N lines of log (e.g., `LINES=50 npm run log:last`)
- `npm run log:clear` - Clear the dev server log file
- `npm run kill` - Kill the dev server on port 3100
- `npm run restart` - Kill and restart the dev server
- `npm run status` - Check if dev server is running

### Build & Production
- `npm install` - Install dependencies
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

### Core Pages
- `/` - Homepage with hero sections
- `/davant-studio` - Product showcase
- `/photobooth` - Magic Mirror product with neon text effects
- `/event-galleries` - Magic Mirror event photo galleries
- `/training` - Workshops and training programs
- `/articles` - Content collection system
- `/ambassadors` - Creative ambassadors program
- `/compatibility-checker` - Hardware compatibility checker for Davant Studio

## Project Structure

```
davantsystems.github.io/
├── src/
│   ├── pages/           # Route components (.astro files)
│   ├── components/      # Reusable UI components (.astro, .tsx)
│   ├── layouts/         # Page layouts
│   ├── styles/          # Global styles and typography
│   ├── assets/          # Images and static assets
│   └── content/         # Content collections (articles)
├── docs/                # Design system and project documentation
├── public/              # Static assets served as-is
├── board/               # Project management board
├── dist/                # Production build output
└── logs/                # Development server logs
```

### Component Architecture
- **Astro Components** (`.astro`): Primary for static content and layout
- **React Components** (`.tsx`): Used for interactive features (e.g., ImageMetadataExtractor)
- **Naming Convention**: PascalCase for components, kebab-case for pages
- **Props**: TypeScript interfaces for type safety

## Deployment

- **Branch**: Work on `migrate/astro-claude` branch
- **Production**: Deploys via GitHub Actions to GitHub Pages
- **Domain**: Custom domain via CNAME file in `public/`

## Best Practices

1. **Performance**: Use lazy loading, optimize images, leverage CSS transforms for animations
2. **Accessibility**: Maintain WCAG AA contrast, provide motion preferences, 44px touch targets
3. **Consistency**: Follow design system patterns, use established color/spacing tokens
4. **Code Quality**: No inline comments, clean component structure, semantic HTML

## Development Workflow

1. **Editing Files**: Check existing patterns in similar components
2. **Adding Features**: Review design system documentation first
3. **Debugging**: Monitor `logs/dev-server.log` for compilation errors
4. **Type Safety**: Run `npm run astro check` before committing
5. **Building**: Always test with `npm run build` before deployment

## Notes for Claude

- The site emphasizes visual appeal with a premium feel
- Animations should enhance meaning, not just decoration
- Gradient usage is a key brand element
- The ambassadors page serves as a reference implementation for feature showcases
- Always consider both technical and creative professionals as the audience
- When making changes, preserve the Creative Synthwave aesthetic
- Log output is crucial for debugging - always check `logs/dev-server.log`
