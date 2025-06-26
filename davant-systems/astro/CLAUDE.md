# Davant Systems Astro Project

## Project Overview

This is the marketing website for Davant Systems (www.davantsystems.com), built with Astro and featuring a distinctive "Creative Synthwave" design aesthetic. The site showcases:
- **Davant Studio**: AI image generation software for creative professionals
- **Magic Mirror**: Interactive AI photo booth experience
- **Ambassador Program**: Community program for creative pioneers

## Development Server

This project uses a special setup for the development server that allows both Claude and the user to monitor the output:

- `npm run dev` - Starts the development server on port 4322 with output logging to `dev-server.log`
- `npm run dev:logs` - Tails the dev server log file in real-time

### Usage

1. Run `npm run dev` to start the server (logs will be written to `dev-server.log`)
2. In a separate terminal, run `npm run dev:logs` to monitor the server output
3. The dev server will be available at http://localhost:4322/

This setup ensures that Claude can see and react to compilation errors and server status while also allowing the user to monitor the output.

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

- **Framework**: Astro v5
- **Styling**: Tailwind CSS + DaisyUI (synthwave theme)
- **Fonts**: Google Fonts
- **Icons**: Custom SVG with gradient fills
- **Build**: Vite

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
astro/
├── src/
│   ├── pages/           # Route components
│   ├── components/      # Reusable UI components  
│   ├── layouts/         # Page layouts
│   ├── styles/          # Global styles and typography
│   ├── assets/          # Images and static assets
│   └── content/         # Content collections (articles)
├── docs/
│   ├── DESIGN_SYSTEM.md # Comprehensive design documentation
│   └── AMBASSADORS_DESIGN.md # Specific page design details
└── public/              # Static assets
```

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

## Notes for Claude

- The site emphasizes visual appeal with a premium feel
- Animations should enhance meaning, not just decoration
- Gradient usage is a key brand element
- The ambassadors page serves as a reference implementation for feature showcases
- Always consider both technical and creative professionals as the audience