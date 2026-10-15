---
type: note
status: processed
created: 2026-03-26
---

# OBR Landing Page Design Critique

## AI Slop Verdict: PASS

This does **not** read as AI-generated. Key reasons it passes:

- No gradient text on headings -- all headings are solid white
- No glassmorphism cards, no glow borders, no cyan-on-dark palette
- No identical card grid pattern -- sections use varied layouts (full-width hero, text-left/image-right, image-left/text-right)
- The amber/gold CTA palette is an unusual, deliberate choice that feels designed, not defaulted
- The noise texture gives real photographic grain, not the usual AI "blur + glow" combo
- Copy is direct and human -- no "Unlock the power of..." marketing fluff

**One minor tell**: The radial glow blobs behind sections are a common AI pattern (diffuse colored orbs behind content). Here they're well-executed and subtle enough to work, but it's worth noting they're on the edge.

## Overall Impression

This is a strong product page. The hero with the live video preview is immediately compelling -- you see the app working before you read a word. The section rhythm (alternating text/image sides with distinct accent colors) creates natural visual flow. The copy is confident, direct, and respects the reader's time.

**The single biggest opportunity**: The page currently has no navigation or orientation. A visitor lands on a fully independent page with no way to understand where they are within the Davant ecosystem, and no way to navigate between sections. It's a long scroll with no anchors.

## What's Working

1. **The hero layout** -- Text left, video right, immediate product demonstration. The blurred background photograph adds atmosphere without competing. The CTA is prominent and uses the Apple icon for instant recognition. This is exactly what a product landing page should do above the fold.

2. **Section accent color coding** -- Blue-950 for models, rose-950 for views, purple-950 for controls. Each section has its own subtle identity while remaining cohesive. The matching border colors on screenshot frames (yellow/20, blue/30, rose/30) are a nice touch that ties screenshots to their sections.

3. **The copy** -- "Drag. Drop. Done." is perfect. "Nothing is uploaded. Nothing is tracked. Nothing is logged." uses repetition effectively. The FAQ answers are genuinely helpful, not boilerplate. No marketing jargon anywhere. This reads like a developer wrote it for other people who care about their tools.

## Priority Issues

### 1. No Navigation on the Landing Page
**What**: The landing page has zero navigation. No header nav, no section anchors, no way to jump to pricing/privacy/support. The only links are in the footer.

**Why it matters**: Users who arrive from search or a direct link have no context. They can't quickly jump to the section that answers their question ("How much does it cost?" "Is it private?"). On mobile, this is a long scroll with no signposts.

**Fix**: Add a minimal sticky nav bar -- just the product name (linked to top) and 2-3 anchor links (Features, Privacy, Download). Keep it simple, matching the existing support/privacy page nav pattern (`bg-black/80 backdrop-blur-sm`). Don't add the full Davant site nav -- this page intentionally stands alone.

### 2. Hero CTA Links to `#` (Broken Link)
**What**: Both "Download on the Mac App Store" buttons link to `href="#"`. This is the primary action on the entire page and it goes nowhere.

**Why it matters**: This is the single most important interaction. A user who's convinced clicks the button and... nothing happens. This destroys trust instantly, especially for a page that emphasizes trustworthiness.

**Fix**: Replace `#` with the actual Mac App Store URL. If the app isn't live yet, use a "Coming Soon" state or link to a notify-me flow. Never ship a dead primary CTA.

### 3. Privacy Section Feels Underweight
**What**: The "Your Images Stay Private" section is just two paragraphs of centered text. It's sandwiched between rich feature sections with screenshots and color-coded backgrounds, making it feel like a placeholder.

**Why it matters**: Privacy is a core differentiator -- you said it yourself: "privacy is a feature, not fine print." But visually, this section is the weakest on the page. It gets less visual weight than any feature section despite being arguably the strongest selling point for your target audience.

**Fix**: Give it visual parity with the feature sections. Consider: a simple icon or illustration (a shield, a lock, a "no cloud" symbol), or a visual treatment that communicates "local-only" (e.g., a subtle diagram showing "your Mac" with no outgoing arrows). Even just adding the eyebrow label pattern used by other sections ("Private" in a colored accent) would help it feel less orphaned.

### 4. Mobile Hero CTA is Cramped
**What**: On mobile (390px), the "Download on the Mac App Store" button text wraps awkwardly across two lines. The hero text and button are centered, which creates a lot of visual tension with the padding.

**Why it matters**: Mobile visitors see a cramped CTA that looks unpolished. The button text breaking mid-phrase ("Mac App / Store") hurts readability and makes the primary action feel less intentional.

**Fix**: Use a shorter label on small screens ("Get on Mac App Store" or just "Download for Mac") or reduce horizontal padding (`px-6` instead of `px-8` on mobile). Also consider whether the Apple SVG icon is necessary on mobile -- dropping it saves space.

### 5. No Price Visible on the Landing Page
**What**: The structured data says $3.99, but the price appears nowhere on the page itself. The CTA section says "One-Time Purchase" and "No subscriptions" but never mentions the actual price.

**Why it matters**: For a $3.99 app, the price is a huge selling point. Hiding it creates unnecessary friction -- users have to click through to the App Store to find out. For a page that values transparency ("no tricks"), omitting the price feels inconsistent.

**Fix**: Add the price directly to the CTA section. Something as simple as "$3.99. One-time purchase." above or near the download button. The low price removes the last objection.

## Minor Observations

- **DM Sans is loaded via inline `font-['DM_Sans']`** but there may not be a Google Fonts import for it in the page or layout. If it's not loading, the browser is falling back to system sans-serif. Verify the font is actually rendering. If it's intentionally system sans, the inline font-family declaration is misleading.

- **The hero subheadline reads oddly**: "No login, subscription." feels like a word is missing. Should be "No login. No subscription." or "No login, no subscription." The comma creates an incomplete thought.

- **Footer is inconsistent across pages**: The landing page footer has "Support | Privacy Policy". The support page has "Offline Background Remover | Privacy Policy". The privacy page has "Offline Background Remover | Support". This is fine but could be normalized so all three links appear in all footers.

- **The support page back-nav chevron** is small (w-4 h-4). On touch devices, the hit target for the back link is the text itself, which is fine, but the visual affordance is subtle.

- **Privacy policy left-border pattern**: The last section ("Contact") uses `border-blue-500/30` while all others use `border-white/10`. This feels accidental rather than intentional -- like the Contact section was meant to stand out but the logic isn't obvious.

- **No `<meta name="theme-color">` tag**: On mobile browsers (especially Safari), the browser chrome will default. Setting `theme-color` to black would make the address bar match the page seamlessly.

## Questions to Consider

- **"Why isn't the price on the page?"** -- For $3.99, you're leaving your strongest closing argument on the table. Every competitor is $10+/month. That number does the selling for you.

- **"What if the privacy section was the hero?"** -- For privacy-conscious users, "your images never leave your Mac" is the headline, not the feature. Consider whether leading with privacy (and following with features) would better serve your audience split.

- **"Does this page need to be this long?"** -- Five feature sections + privacy + CTA is a lot of scrolling for a $3.99 utility app. Would a tighter page (hero + 2 features + privacy/price CTA) convert better? The current length suits a $50 product more than a $4 impulse buy.

- **"What happens after the click?"** -- If the App Store link works, the user leaves your site. Is there any reason to keep them? If not, every section below the fold should be driving urgency toward that single CTA, not just adding information.

## Resolution (2026-10-01)

Addressed on the landing page: sticky nav with Features / Privacy / Pricing anchors, "No login. No subscription." copy fix, "Private" eyebrow on the privacy section, $3.99 shown in the pricing section, mobile CTA padding and icon, `theme-color` meta on all three OBR pages, privacy-policy Contact border normalized.

**Dead CTA**: the app is not yet live on the Mac App Store, so both download buttons are now non-link "Coming Soon to the Mac App Store" badges. Swap each `<span>` back to `<a href>` when the URL exists (two spots, both marked with a comment).

Skipped: footer link normalization (each page already links to the other two, a self-link adds nothing), the support chevron size, and the strategic "Questions to Consider".
