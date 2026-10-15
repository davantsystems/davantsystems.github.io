---
type: task
status: done
priority: 2
created: 2026-03-24
---
# Fix missing newsletter anchor and hardcoded domain URL

1. `src/pages/articles.astro:187` links to `/#newsletter` but no element on index.astro has `id="newsletter"`. Add the anchor to the NewsletterCTA section.
2. `src/components/PurchaseCard.astro:66` uses `https://davantsystems.com/davant-studio/download` instead of a relative path `/davant-studio/download/`.
