# Gatsby → Astro Migration Issues Tracker

## Overview
This document tracks all visual and functional discrepancies found between the production Gatsby site (www.davantsystems.com) and the new Astro migration.

**Analysis Date**: 2025-06-25  
**Production Gatsby**: https://www.davantsystems.com  
**Local Astro**: http://localhost:4321  

---

## 🚨 Critical Issues

### Typography Scale Missing
- [ ] Add font sizes 5xl through 9xl to Tailwind config
```js
// Add to tailwind.config.mjs
fontSize: {
  // ... existing sizes ...
  '5xl': ['3rem', '1.2'],
  '6xl': ['3.75rem', '1.2'],
  '7xl': ['4.5rem', '1.1'],
  '8xl': ['6rem', '1.1'],
  '9xl': ['8rem', '1.0'],
}
```

### Logo Implementation
- [ ] Replace text-based "DAVANT SYSTEMS" with image logo in MainNav.astro
- [ ] Replace text-based logo in Footer.astro
- [ ] Use `DavantSystems-logo-1000.png` asset

### Typeform CORS Error
- [ ] Fix Typeform embed script CORS blocking
- [ ] Consider using iframe embed method instead

---

## 🎨 Visual Discrepancies

### Navigation Structure
- [ ] Add "Learn & Create" dropdown menu
- [ ] Add "Research on CivitAI" menu item
- [ ] Add "Articles" menu item  
- [ ] Add "Training & Workshops" menu item
- [ ] Add "Creative Ambassadors" menu item
- [ ] Add "Magic Mirror" dropdown menu
- [ ] Add "AI Photo Booth" menu item
- [ ] Add "Event Galleries" menu item

### Color System
- [ ] Add `okay` color: `hsl(120, 100%, 67%)`
- [ ] Fix base-100 color space consistency (oklch vs hsl)

### Typography & Fonts
- [ ] Adjust font rendering weight (appears too light)
- [ ] Make button text bolder
- [ ] Add Sacramento Google Font to astro.config.mjs
- [ ] Add Yellowtail Google Font to astro.config.mjs
- [ ] Add Open Sans Google Font to astro.config.mjs

### Missing CSS Classes & Effects
- [ ] Uncomment `.vhs-effect` in app.css
- [ ] Uncomment `.vhs-effect-vert` in app.css
- [ ] Add `#guests-one` filter effects
- [ ] Add `#guests-two` filter effects
- [ ] Add `.guests-placeholder` max-height style
- [ ] Add `.hero__guests-wrapper` styles
- [ ] Add `h1 { z-index: 99; }`
- [ ] Add `.hero__supertitle` styles
- [ ] Add `.screenshots-wrapper` styles
- [ ] Add `.gradient__dark` implementation

---

## 📱 Component-Level Issues

### Homepage
- [ ] Add Davant Studio screenshot to hero section
- [ ] Restore visual effects on hero background

### Photobooth Page
- [ ] Fix "Photo Booth" letter spacing issue
- [ ] Add GSAP ScrollTrigger animations (optional)
- [ ] Implement guest image clip-path animations

### Footer
- [ ] Create ContentProvider pattern for social URLs
- [ ] Fix responsive layout differences

---

## 🔧 Structural Issues

### Content Management
- [ ] Create ContentProvider.astro component
- [ ] Centralize all external URLs
- [ ] Remove hardcoded URLs from components

### DaisyUI Theme Configuration
- [ ] Update app.css with proper @plugin configuration for Tailwind v4
- [ ] Ensure synthwave theme is properly loaded

---

## 📊 Migration Progress

**Overall Visual Parity**: ~85%  
**Functional Parity**: ~90%  
**Total Checkboxes**: 44  
**Completed**: 0 / 44

---

*Last Updated: 2025-06-25*