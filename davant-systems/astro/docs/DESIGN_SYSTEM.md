# Davant Systems Design System

## Design Philosophy

Davant Systems embodies a **"Creative Synthwave"** aesthetic - a visual language that bridges cutting-edge technology with artistic expression. We blend the nostalgic energy of 80s retrofuturism with modern, professional design principles to create an experience that feels both innovative and approachable.

### Core Principles
1. **Premium but Playful** - Professional credibility with creative energy
2. **Motion with Purpose** - Animations enhance meaning, not just decoration
3. **Gradient Forward** - Rich color transitions create depth and energy
4. **Dark Mode Native** - Built for creators who work at all hours
5. **Accessible Creativity** - Bold aesthetics that remain usable for all

## Color System

### Primary Palette

#### Brand Gradients
```css
/* Hero Gradient - Pink to Purple */
--gradient-primary: linear-gradient(to right, #ec4899, #8b5cf6);

/* Accent Gradient - Cyan to Blue */
--gradient-secondary: linear-gradient(to right, #06b6d4, #3b82f6);

/* Energy Gradient - Yellow to Amber */
--gradient-energy: linear-gradient(to right, #fbbf24, #f59e0b);

/* Text Gradient - Full Spectrum */
--gradient-text: linear-gradient(to top right, #ec4899, #a855f7, #8b5cf6);
```

#### Base Colors (DaisyUI Synthwave)
```css
--color-primary: hsl(309, 80%, 41%);      /* Vibrant Pink */
--color-secondary: hsl(187, 90%, 50%);    /* Electric Cyan */
--color-accent: #ff00ff;                  /* Pure Magenta */
--color-base-100: oklch(0.138999 0.036212 306.761881); /* Dark Purple */
--color-base-200: oklch(0.129269 0.033571 306.761881); /* Darker */
--color-base-300: oklch(0.119539 0.031142 306.761881); /* Darkest */
```

### Brand Colors

#### Core Brand Identity
- **Davant Pink**: #ec4899 - Primary brand color, used in logos and key CTAs
- **Davant Purple**: #8b5cf6 - Secondary brand color, creates depth in gradients
- **Davant Cyan**: #06b6d4 - Accent color for highlights and secondary actions
- **Electric Blue**: #3b82f6 - Supporting color for gradients and accents

#### Action Colors
- **Primary Action**: Pink to Purple gradient (`from-pink-400 via-fuchsia-500 to-purple-500`)
  - Used for primary CTAs, submit buttons, and key interactive elements
  - Hover state: Darker gradient (`from-pink-500 to-purple-400`)
- **Secondary Action**: Cyan (`text-cyan-300` or `bg-cyan-500`)
  - Used for secondary buttons, links in dark contexts
  - Provides high contrast against dark backgrounds

#### Interactive Element Colors
- **Default Link**: Fuchsia (`text-fuchsia-500`)
- **Link Hover**: Light Fuchsia (`text-fuchsia-300`)
- **Link Active**: Deep Purple (`text-purple-600`)
- **Focus Ring**: Purple with opacity (`ring-purple-500/50`)
- **Selection**: Cyan background with dark text

### Semantic Colors
- **Success**: #36d399 (Mint Green)
- **Warning**: hsl(40, 100%, 67%) (Golden)
- **Error**: #f87272 (Soft Red)
- **Info**: #3abff8 (Sky Blue)

### Opacity Scale
- **Text Primary**: 100% (base-content)
- **Text Secondary**: 80% (base-content/80)
- **Text Tertiary**: 70% (base-content/70)
- **Text Muted**: 60% (base-content/60)
- **Borders**: 10-20% (base-content/10 to /20)
- **Hover States**: 30-40% (secondary/30 to /40)

## Typography

### Font Stack

#### Primary Font
```css
font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
             'Helvetica Neue', sans-serif;
```

#### Display Fonts
```css
/* Tech/Futuristic - Used sparingly for special headings */
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
  font-weight: 400 | 700 | 900;
}

/* Script/Cursive - Used for decorative elements (e.g., photobooth neon text) */
.font-sacramento {
  font-family: 'Sacramento', cursive;
}

/* Casual Script - Alternative cursive option */
.font-yellowtail {
  font-family: 'Yellowtail', cursive;
}
```

### Type Scale
- **Hero**: 4xl-7xl (responsive)
- **Section Titles**: 4xl
- **Subsection**: 2xl
- **Card Headers**: xl
- **Body**: base-lg
- **Small**: sm-base

### Font Weight Patterns
- **Mixed Weight Headers**: Combine `font-black` with `font-extralight` for rhythm
- **Body Text**: `font-light` for extended reading
- **Emphasis**: `font-bold` or `font-semibold`

### Text Effects
```css
/* Gradient Text */
.text-gradient {
  @apply text-transparent bg-clip-text;
  background-image: var(--gradient-primary);
}

/* Neon Glow Text */
.text-glow {
  text-shadow: 
    0 0 20px rgba(236, 72, 153, 0.5),
    0 0 40px rgba(236, 72, 153, 0.3);
}

/* Sacramento Neon Effect (Special Use) */
.font-sacramento.glow__neon--secondary {
  @apply text-6xl font-thin text-secondary skew-x-12;
  text-shadow: 
    0 0 10px currentColor,
    0 0 20px currentColor,
    0 0 30px currentColor,
    0 0 40px currentColor;
}
```

### Display Font Usage Guidelines
- **Orbitron**: Reserved for tech-focused content, product names, or futuristic themes
- **Sacramento**: Used exclusively for decorative/artistic elements (e.g., "Photo Booth" neon sign)
- **Yellowtail**: Alternative script option for casual, friendly headings
- **Open Sans**: Default for all body text and most headings

## Component Library

### Cards

#### Base Card
```html
<div class="p-6 rounded-xl bg-base-300/80 backdrop-blur-sm 
            border border-base-content/10 
            transition-all duration-300
            hover:border-secondary/30 
            hover:shadow-lg hover:shadow-secondary/10 
            hover:-translate-y-1">
  <!-- Content -->
</div>
```

#### Feature Card with Icon
```html
<div class="group [card classes]">
  <div class="mb-4 w-16 h-16 relative">
    <!-- Glow backdrop -->
    <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 
                rounded-lg opacity-20 blur-xl 
                group-hover:opacity-40 transition-opacity duration-300">
    </div>
    <!-- Icon container -->
    <div class="relative w-full h-full bg-gradient-to-br from-base-200 to-base-300 
                rounded-lg p-3 border border-secondary/20 
                group-hover:border-secondary/40 transition-all duration-300">
      <!-- SVG Icon -->
    </div>
  </div>
  <h3 class="text-xl font-bold text-secondary">Title</h3>
  <p class="text-base-content/70">Description</p>
</div>
```

### Buttons

#### Primary CTA
```html
<button class="inline-flex items-center px-8 py-4 
               text-lg font-semibold text-white 
               bg-gradient-to-r from-pink-500 to-purple-600 
               rounded-full transition-all duration-300
               hover:from-pink-600 hover:to-purple-700 
               hover:shadow-lg hover:scale-105 
               focus:outline-none focus:ring-4 focus:ring-purple-500/50">
  Button Text
  <svg class="w-5 h-5 ml-2"><!-- Icon --></svg>
</button>
```

#### Secondary Button
```html
<button class="px-6 py-3 text-sm font-medium 
               text-secondary border border-secondary/30 
               rounded-lg transition-all duration-200
               hover:bg-secondary/10 hover:border-secondary/50">
  Button Text
</button>
```

### Navigation

#### Main Nav Pattern
- Fixed/sticky positioning with backdrop blur
- Logo with hover float animation
- Text links with color transitions
- Dropdown menus with gradient borders

### Links & Interactive Elements

#### Text Links
```html
<!-- Default link style -->
<a class="text-fuchsia-500 hover:text-fuchsia-300 underline transition-colors duration-200">
  Link Text
</a>

<!-- Link in light context -->
<a class="text-purple-600 hover:text-purple-400 underline">
  Link Text
</a>

<!-- Link without underline (for navigation) -->
<a class="text-base-content hover:text-secondary transition-colors duration-200">
  Nav Link
</a>
```

#### Interactive States
- **Default**: Base color with clear affordance
- **Hover**: Lighter shade, scale transform for buttons
- **Active**: Deeper shade, scale(0.98) for buttons
- **Focus**: Purple ring with 50% opacity, 4px width
- **Disabled**: 50% opacity, cursor-not-allowed

#### Click Targets
- Minimum size: 44x44px for touch
- Padding: At least 8px around text
- Clear hit areas with hover backgrounds
- Group hover for card interactions

### Forms

#### Input Fields
```html
<input class="w-full px-4 py-3 
              bg-base-200/50 border border-base-content/20 
              rounded-lg transition-all duration-200
              focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20
              placeholder:text-base-content/50">
```

#### Form Containers
- Tabbed interfaces for multiple options
- Semi-transparent backgrounds
- Smooth tab transitions
- Clear active states

## Animation System

### Core Animations

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
```

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
```

#### Shine
```css
@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
```

#### Bounce
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-2px); }
  75% { transform: translateY(2px); }
}
```

#### Sparkle
```css
@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}
```

### Transition Timing
- **Hover Effects**: 200-300ms ease
- **Page Transitions**: 400-600ms ease-in-out
- **Continuous Animations**: 2-3s with cubic-bezier easing
- **Micro-interactions**: 150ms ease-out

## Layout System

### Grid Patterns
```css
/* Feature Grid */
.feature-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* Content Grid */
.content-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}
```

### Section Spacing
- **Hero Sections**: `min-h-screen` or `min-h-[80vh]`
- **Content Sections**: `py-20` (80px vertical padding)
- **Card Padding**: `p-6` to `p-8`
- **Container**: `max-w-6xl mx-auto px-6`

### Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Wide**: 1280px (xl)

## Visual Effects

### Glassmorphism
```css
.glass {
  @apply bg-base-300/80 backdrop-blur-sm;
  @apply border border-base-content/10;
}
```

### Gradient Overlays
```css
.gradient-overlay {
  background: linear-gradient(
    to bottom,
    rgba(var(--base-300), 0.95),
    rgba(var(--base-300), 0.5),
    rgba(var(--base-300), 1)
  );
}
```

### Glow Effects
```css
.glow {
  filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.5));
}

.glow-hover {
  transition: filter 0.3s ease;
}
.glow-hover:hover {
  filter: drop-shadow(0 0 30px rgba(236, 72, 153, 0.8));
}
```

### Neon Borders
```css
.neon-border {
  position: relative;
  background: linear-gradient(45deg, #ec4899, #8b5cf6);
  padding: 1px;
  border-radius: 0.75rem;
}
.neon-border > * {
  @apply bg-base-300 rounded-xl;
}
```

## Icon System

### Icon Sources
- Primary: Custom SVG icons with gradient fills
- Style: Outline/stroke-based for consistency
- Size: 24x24 base, scalable

### Icon Container Pattern
```html
<div class="w-16 h-16 relative">
  <!-- Glow backdrop -->
  <div class="absolute inset-0 bg-gradient-primary 
              rounded-lg opacity-20 blur-xl"></div>
  <!-- Icon box -->
  <div class="relative w-full h-full 
              bg-gradient-to-br from-base-200 to-base-300 
              rounded-lg p-3 border border-secondary/20">
    <svg class="w-full h-full"><!-- Icon paths --></svg>
  </div>
</div>
```

## Motion Principles

### When to Animate
1. **State Changes**: Hover, focus, active states
2. **Reveals**: Content entering viewport
3. **Feedback**: User interactions and loading states
4. **Emphasis**: Drawing attention to key elements

### Performance Guidelines
- Use `transform` and `opacity` for animations
- Leverage GPU acceleration with `will-change`
- Avoid animating layout properties
- Keep paint operations minimal

## Accessibility

### Color Contrast
- Maintain WCAG AA standards minimum
- Test gradient text on various backgrounds
- Provide solid color fallbacks

### Motion Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Interactive Elements
- Minimum touch target: 44x44px
- Clear focus states with ring utilities
- Keyboard navigation support
- Screen reader friendly markup

## Page Patterns

### Hero Sections
1. Full height with gradient text overlay
2. Background image with gradient overlay
3. Animated elements (floating, pulsing)
4. Strong CTA placement

### Content Sections
1. Alternating background colors/opacity
2. Clear visual hierarchy
3. Consistent spacing rhythm
4. Progressive disclosure (accordions, tabs)

### Feature Showcases
1. Grid layouts with hover effects
2. Icon-driven visual interest
3. Benefit-focused copy
4. Interactive elements

## Implementation Guidelines

### CSS Architecture
- Utility-first with Tailwind CSS
- Component classes for repeated patterns
- CSS-in-JS for dynamic styles
- Scoped animations in style blocks

### Performance Optimization
- Lazy load images and heavy components
- Optimize SVG icons
- Use CSS containment
- Implement progressive enhancement

### Cross-browser Compatibility
- Test gradient rendering
- Verify backdrop-filter support
- Provide fallbacks for older browsers
- Ensure consistent animations

## Usage Examples

### Creating a New Page
```astro
---
import Layout from '../layouts/Layout.astro';
import MainNav from '../components/MainNav.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Page Title">
  <MainNav />
  <main class="relative">
    <!-- Hero Section -->
    <section class="hero-section min-h-screen">
      <div class="container max-w-6xl mx-auto px-6 py-20">
        <h1 class="text-6xl font-black text-gradient">
          Hero Title
        </h1>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="py-20 bg-base-200/50">
      <div class="container max-w-6xl mx-auto px-6">
        <!-- Content -->
      </div>
    </section>
  </main>
  <Footer />
</Layout>
```

This design system creates a cohesive, memorable brand experience that celebrates creativity while maintaining professional standards. It's built to evolve with the product while keeping the core aesthetic principles intact.