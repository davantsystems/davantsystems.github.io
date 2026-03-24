---
type: note
created: 2026-03-24
---

# Offline Background Remover - App Store Pages

New Apple App Store app "Offline Background Remover" needs the following URLs for Apple review:

## Required URLs

- **Marketing URL**: davantsystems.com/offline-background-remover
- **Support URL**: davantsystems.com/offline-background-remover/support
- **Privacy Policy URL**: davantsystems.com/offline-background-remover/privacy-policy

## Notes

- Pages will be hosted on this site (davantsystems.com)
- Must be live and accessible before Apple review submission

## Design Approach

These pages do not need to match the existing site's synthwave aesthetic.
Re-use existing components where possible (`Layout.astro`, `Footer.astro`).
Skip `MainNavWithDropdowns` in favor of a simple back-link to the main site.

**Hero background**: The abstract gradient image from the AppStore preview video gives these pages their own identity.
Source: /Users/grant/Downloads/_Images/abstract_bg/boliviainteligente-k4aqqqBBm1Y-unsplash.jpg

**Font**: A clean sans-serif distinct from the main site (Orbitron/Open Sans). Candidates: DM Sans or Figtree.

**Overall feel**: Dark base, letting the colorful abstract gradient imagery and screenshots do the visual heavy lifting. Modern, professional, minimal.

## Assets Strategy

- Copy hero background + 4 AppStore screenshots into `src/assets/images/obr/` for Astro image pipeline optimization.
- Skip video (47MB too large for GitHub Pages). Can embed differently later if needed.

## Page Specifications

### Marketing Page (`index.astro`)

One-page splash for the AppStore app.

- Hero section: abstract bg image, app name + subtitle, short description
- Feature highlights: pulled from AppStore copy (features list, advanced controls, privacy, one-time purchase)
- Screenshot gallery: the 4 AppStore images with their captions
- CTA: App Store download button

### Support Page (`support.astro`)

Simple page that meets all of Apple's requirements.

- Support email: support@davantsystems.com
- Basic FAQ covering: offline usage, model downloads, refund policy
- Contact section

### Privacy Policy Page (`privacy-policy.astro`)

Must meet all of Apple's requirements for apps that collect no data.

- **Data collection**: None. No personal data, no usage data, no analytics, no tracking.
- **On-device processing**: All image processing happens entirely on the user's device. Nothing is uploaded.
- **Network access**: The only internet access is optional downloading of additional AI models (11 of 13 models are downloaded on-demand; 2 are bundled). No user data is transmitted during this process.
- **Third-party sharing**: None. No data is shared with any third parties.
- **Data retention**: None. No data is stored beyond the user's local files.
- **Cookies/tracking**: None.
- **Children's privacy**: No data collection from any users, including children.
- **Contact information**: support@davantsystems.com
- **Policy changes**: Section noting users will be notified of any changes via app update.

## Final Page Copy

### Marketing Splash Page (`/offline-background-remover`)

#### Hero Section

**Headline:** Offline Background Remover

**Subhead:** Instant background removal. No subscription.

**Body:** On-device AI removes backgrounds in seconds. Your images never leave your Mac. Pay once, use forever.

**CTA:** Download on the Mac App Store

#### Screenshot Gallery

Screenshots use the 4 AppStore images. Copy is baked into the images (no separate captions needed on the page).

#### Key Features Grid

**Fully Offline**
Your images stay on your Mac. No uploads, no cloud processing, no internet required.

**No Subscription**
One purchase. No account, no trial, no recurring fees.

**Drag-and-Drop Removal**
Drop an image in, get a clean cutout back. Done in seconds.

**13 AI Models**
Pick the right model for the job. Two ship with the app. Eleven more are free to download.

**Background Fill and Replacement**
Swap removed backgrounds for solid colors, custom images, or export with full transparency.

**Mask-Only Export**
Export just the mask for compositing in Photoshop, Affinity, or whatever you use.

#### Professional Controls Section

**Heading:** Built for Professionals

**Body:**
One-click removal is the starting point. After that, you get real control.

- Adjustable foreground and background thresholds
- Erode and smooth sliders for clean edges
- Live preview as you adjust

This is precision, not guesswork.

#### Privacy Section

**Heading:** Your Images Stay Private

**Body:**
All processing happens on your device. Nothing is uploaded. Nothing is tracked. Nothing is logged.

Client photos, confidential documents, sensitive creative work. None of it leaves your machine.

#### Pricing / CTA Section

**Heading:** One-Time Purchase

**Body:**
No subscriptions. No recurring fees. No limits.

**CTA:** Download on the Mac App Store

---

### Support Page (`/offline-background-remover/support`)

#### Page Header

**Heading:** Support

**Intro:** Need help with Offline Background Remover? Check below or get in touch.

#### FAQ Section

**Q: Does the app require an internet connection?**
No. All processing happens on your Mac. The only time the app goes online is when you download optional AI models. Eleven of the thirteen models are free downloads; two come bundled with the app. Once you have the models, everything runs offline.

**Q: How do I get the best results?**
Experiment with different AI models. Some are built for speed, others for accuracy or specific subjects like portraits or products. Use the advanced mask controls (thresholds, erode, smooth, feather) to clean up edges. The 4-up view lets you compare the original, output, mask, and inverse side by side.

**Q: What image formats does the app support?**
It accepts PNG, JPEG, and TIFF. Exports are high-resolution transparent PNGs.

**Q: How do I download additional AI models?**
Open the model manager in the app settings. You'll see a list of available models with descriptions of what each one does best. Download any of them with one click.

**Q: Can I get a refund?**
Refunds for Mac App Store purchases are handled by Apple. Visit reportaproblem.apple.com or contact Apple Support to request one.

**Q: The app is not producing good results on my image.**
Try a different AI model. Different models handle different subjects better (portraits, product photos, busy backgrounds). You can also adjust the mask controls to refine things. Still stuck? Email us with details and we'll help sort it out.

**Q: What are the system requirements?**
macOS 14.6 or later. The app uses on-device machine learning, so performance depends on your hardware. Apple Silicon Macs will be the fastest.

#### Contact Section

**Heading:** Still Need Help?

**Body:** Happy to help. Send us an email and we'll get back to you.

**Email:** support@davantsystems.com

---

### Privacy Policy Page (`/offline-background-remover/privacy-policy`)

**Privacy Policy**

*Effective date: March 24, 2026*

This privacy policy describes how Offline Background Remover ("the app") handles your data.

The short version: it does not collect any.

**Overview**

Offline Background Remover does not collect, store, or transmit personal data. The app runs entirely on your Mac. Your images and files never leave your device.

**Data Collection**

The app does not collect personal data of any kind. No usage tracking, no analytics, no telemetry. No account or registration is required.

**On-Device Processing**

All image processing happens locally using on-device machine learning models. No images are uploaded to any server. Nothing is processed in the cloud.

**Network Access**

The app connects to the internet for one reason: downloading optional AI models. Eleven of thirteen models are available as on-demand downloads; two are bundled with the app. No user data, images, or personal information is transmitted during this process.

**Third-Party Services**

The app does not share data with third parties. No third-party analytics, advertising, or tracking is embedded in the app.

**Cookies and Tracking**

The app does not use cookies or any tracking technologies.

**Data Retention**

The app does not retain any data beyond the files you save on your Mac. No accounts, no profiles, no cloud storage.

**Children's Privacy**

The app does not collect data from any user, including children. It complies with applicable children's privacy regulations.

**Changes to This Policy**

If this policy changes, you will be notified through an app update. Continued use of the app after an update means you accept the revised policy.

**Contact**

Questions about this privacy policy? Reach us at:
support@davantsystems.com

---

## AppStore Copy (Reference)

Original marketing copy from the AppStore listing

### Title

Offline Background Remover

### Subtitle

Instant background removal. No subscription.

### Short Description

Instant background removal with on-device AI. No uploads, no subscription.

### Full Description

An image background remover that runs entirely on your Mac. Multiple on-device AI models, full control over the mask, and nothing ever leaves your machine.

Perfect for product photos, portraits, design work, e-commerce listings, and any project that needs an accurate cutout.

Features

- Works fully offline for privacy and speed
- No subscription, no account, no forced trial
- Instant background removal with drag and drop
- Accurate results using fast on-device AI models
- High-resolution transparent PNG export
- Background fill and background replacement
- Mask-only export for advanced editing
- Light, dark, and system themes

Advanced Controls

- Adjustable foreground and background thresholds
- Erode and smooth sliders for refined edges
- Support for multiple models, with more available for download
- Live preview as you adjust

Your Images Stay Private
All processing happens entirely on your device. Nothing is uploaded. Ideal for client work, sensitive images, and fast offline use.

One-Time Purchase
No subscriptions. No recurring fees. No limits.

## Assets

### Video

Overview 30 second app preview  
Path: `/Users/grant/Desktop/2_DAVANT/3-DESIGN/apps/Offline Photo Background Remover/AppStore_assets/OBR_AppStore_video-preview_30s.mov`

### Images

Copy: "Works Offline No subscription, no ads"  
Image: Default app view, before & after side by side (2up)  
Path: `/Users/grant/Desktop/2_DAVANT/3-DESIGN/apps/Offline Photo Background Remover/AppStore_assets/appstore_template_1-01.png`

Copy: "13 AI models Balance speed, quality & specialized use"  
Image: "App settings drawer is open, showing the models manager settings pane with list of available models"  
Path: `/Users/grant/Desktop/2_DAVANT/3-DESIGN/apps/Offline Photo Background Remover/AppStore_assets/appstore_template_1-02.png`

Copy: "Evaluate mask edges with multiple views & fill colors"  
Image: "App 4up view: before, after, mask, removed (inverse of output image). View background has been set to green. App sidebare has advancted controls visible (Mask Adjustments: Expand, Feather)"  
Path: `/Users/grant/Desktop/2_DAVANT/3-DESIGN/apps/Offline Photo Background Remover/AppStore_assets/appstore_template_2-01.png`

Copy: "Refine mask with professional fine-grained controls"  
Image: "Default 2-up view (before & after). The sidebar advanced controls are in a 'popover' style zoomed in to see closeup - Mask Cleanup: Sharp Edges, Thresdhold, Fill Holes. Mask Adjustments: Expand, Feather. Alpha Transparency"  
Path: `/Users/grant/Desktop/2_DAVANT/3-DESIGN/apps/Offline Photo Background Remover/AppStore_assets/appstore_template_2-02.png`