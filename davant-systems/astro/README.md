# Davant Systems Website

The marketing website for Davant Systems (www.davantsystems.com), showcasing AI tools for creative professionals.

## 🚀 Project Overview

This site features:
- **Davant Studio**: Professional AI image generation software
- **Magic Mirror**: Interactive AI photo booth experience  
- **Ambassador Program**: Community program for creative pioneers
- **Training**: Workshops and educational content
- **Articles**: Blog and resource content

## 🎨 Design System

The site implements a **Creative Synthwave** aesthetic with:
- Gradient-forward visual design
- Dark mode native with vibrant accents
- Premium animated icons and effects
- Glassmorphism and backdrop blur
- Custom SVG animations

See `docs/DESIGN_SYSTEM.md` for comprehensive design documentation.

## 🛠 Tech Stack

- **Framework**: Astro v5
- **Styling**: Tailwind CSS + DaisyUI (synthwave theme)
- **Fonts**: Open Sans, Orbitron, Sacramento, Yellowtail
- **Icons**: Custom animated SVGs
- **Build**: Vite

## 📁 Project Structure

```text
astro/
├── public/              # Static assets (images, files)
├── src/
│   ├── assets/         # Source images and media
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections (articles)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route components
│   └── styles/         # Global styles and typography
├── docs/
│   ├── DESIGN_SYSTEM.md      # Design system documentation
│   └── AMBASSADORS_DESIGN.md # Page-specific design docs
└── CLAUDE.md           # Development notes for Claude
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts dev server at `localhost:4322`            |
| `npm run dev:logs`        | Tails the dev server log file                    |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deploying           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🚀 Development

### Getting Started
```bash
npm install
npm run dev
```

The dev server runs on port 4322 with output logging to `dev-server.log`.

### Key Pages

- `/` - Homepage
- `/davant-studio` - Product showcase
- `/photobooth` - Magic Mirror with neon effects
- `/ambassadors` - Community program (recently redesigned)
- `/training` - Workshops and training
- `/articles` - Blog content

### Working with Claude

See `CLAUDE.md` for specific development notes and patterns when working with Claude on this project.

## 🌐 Deployment

- **Branch**: Work on `migrate/astro-claude` branch
- **Production**: Deploys automatically via GitHub Actions
- **Domain**: Custom domain configured via CNAME

## 📝 Recent Updates

- Complete redesign of ambassadors page with animated benefit cards
- Implementation of custom SVG icon animation system
- Zoho form integration with tabbed interface
- Comprehensive design system documentation
- Content updates for inclusivity and program flexibility

## 🤝 Contributing

When contributing:
1. Follow the design system patterns
2. Maintain Creative Synthwave aesthetic
3. Test responsive layouts
4. Ensure accessibility standards
5. Update documentation as needed

## 📖 Documentation

- `CLAUDE.md` - Development notes and best practices
- `docs/DESIGN_SYSTEM.md` - Complete design system reference
- `docs/AMBASSADORS_DESIGN.md` - Ambassadors page design patterns

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI Components](https://daisyui.com)