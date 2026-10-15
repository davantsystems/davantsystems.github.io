## Design Context: Offline Background Remover

> These guidelines apply to the OBR product pages. The rest of the site follows the Creative Synthwave system documented in `docs/DESIGN_SYSTEM.md`.

### Users
Photographers, designers, and privacy-conscious Mac users. They arrive looking for a reliable, local background removal tool. They care about quality output, not flashy marketing. They're comparing against cloud-based tools and subscription services, so the page must immediately communicate: this is simple, private, and capable.

### Brand Personality
Simple, private, capable, fast, transparent. No tricks, no subscriptions, no dark patterns. The product speaks for itself through clear screenshots and direct copy. Honest about what it is and what it costs.

### Aesthetic Direction
**Distinct from the parent Davant Synthwave brand.** The OBR pages have their own visual identity:

- **Background**: Pure black (`bg-black`), not the DaisyUI synthwave base colors
- **Font**: DM Sans (`font-['DM_Sans']`), not Open Sans/Orbitron
- **Typography**: White headings, neutral-200/300 body text. No gradient text effects
- **CTAs**: Amber/gold gradient buttons (`from-yellow-600 to-amber-600`) with yellow borders, not pink-to-purple
- **Section color coding**: Each feature section uses a tinted base (blue-950, rose-950, purple-950) overlaid with 85-87% black opacity for subtle color variation
- **Radial glows**: Large, diffuse radial gradients behind content areas (blue, amber, rose) for depth and atmosphere
- **Texture**: SVG fractal noise overlay with `mix-blend-soft-light` on every section for tactile grain
- **Screenshot presentation**: Rounded corners, tinted border (matching section accent color), dark inner backgrounds
- **No synthwave effects**: No neon glow, no VHS scanlines, no DaisyUI theme classes

### Color Palette
| Role | Value | Usage |
|------|-------|-------|
| Background | `black` / `bg-black` | Page base |
| Section tints | `blue-950`, `rose-950`, `purple-950` | Behind 85%+ black overlay |
| Primary CTA | `from-yellow-600 to-amber-600` | Download buttons |
| CTA border | `border-yellow-500` | Button borders |
| Accent labels | `text-yellow-500`, `text-blue-500`, `text-rose-400` | Section eyebrow text |
| Screenshot borders | `border-yellow-500/20`, `border-blue-500/30`, `border-rose-500/30` | Screenshot frames, matching section |
| Body text | `text-neutral-200`, `text-neutral-300` | Paragraphs |
| Muted text | `text-neutral-400`, `text-neutral-500` | Dates, footer links |
| Interactive | `text-blue-400 hover:text-blue-300` | Links (support/privacy pages) |

### Design Principles

1. **Substance over style** -- Let screenshots and direct copy do the selling. No decorative fluff, no marketing superlatives. Every element earns its place.
2. **Dark and atmospheric** -- Black backgrounds with layered radial glows and noise texture create depth without distraction. The product screenshots are the brightest elements on the page.
3. **Section rhythm** -- Each feature section alternates text/image placement (left/right) with its own accent color. Sections are visually distinct but follow the same structural pattern.
4. **Privacy is a feature, not fine print** -- The privacy message is prominent, direct, and unapologetic. The page architecture reinforces it: no tracking scripts, no third-party embeds.
5. **One clear action** -- Every page drives toward a single CTA: download from the Mac App Store. No competing actions, no email captures, no pop-ups.
