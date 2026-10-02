---
type: task
status: backlog
priority: 3
created: 2026-10-02
---

# Investigate X-Frame-Options Meta Tag Console Error

## Description

Every page logs a browser console error on load:

```
X-Frame-Options may only be set via an HTTP header sent along with a document. It may not be set inside <meta>.
```

Source is `src/layouts/Layout.astro:112`, `<meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />`. Browsers ignore this header in a `<meta>` tag, so it provides no clickjacking protection today; it only adds console noise. The neighbouring `X-Content-Type-Options` meta on line 111 is ignored the same way, just silently. The CSP `frame-ancestors` directive is also ignored when delivered via `<meta>`, so it is not a drop-in replacement.

The site is static on GitHub Pages, which cannot send custom response headers. Present on `main` before PR #12; surfaced while screenshotting that PR.

## Acceptance Criteria

- Decision recorded on how to handle frame protection for a GitHub Pages site. Likely options: remove the two dead `http-equiv` metas and accept no framing protection, or put the domain behind Cloudflare's proxy and add the headers with a Transform Rule
- Console error no longer appears on any page
- Any header change verified on the deployed site, not just locally

## Notes

Found 2026-10-02 while capturing before/after screenshots for PR #12. The error appears identically on the `main` build.
