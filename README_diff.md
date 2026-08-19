--- README.md (原始)


+++ README.md (修改后)
# HPX Eigen CRM — Marketing Site

The product-led marketing website for **HPX Eigen CRM** ([hpxeigen.com](https://hpxeigen.com)) — a
connected CRM for sales, operations and payments. One organization. One system. Complete
operational visibility from lead to payment.

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS 4** (design tokens via `@theme`, no config file required)
- Custom design system: Space Grotesk (display) + IBM Plex Sans/Mono (body/data)
- Zero runtime dependencies beyond React — all icons, charts and product mockups are hand-built SVG/DOM

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run typecheck  # TypeScript check
```

## Project structure

```
index.html              # SEO meta, fonts, JSON-LD structured data
src/
  main.tsx              # React entry
  App.tsx               # Page composition (section order)
  index.css             # Design tokens + component layer + motion system
  lib/hooks.ts          # useInView, useCountUp, useCycle, useScrolled, reduced-motion
  components/
    Icons.tsx           # Custom inline SVG icon system + brand mark
    ui.tsx              # Reveal, SectionHead, Eyebrow, buttons, chips
    chrome.tsx          # Shared CRM app chrome (sidebar, topbar, pills, charts)
    Dashboard.tsx       # Hero product dashboard (live activity feed, KPIs)
    Nav.tsx Hero.tsx Systems.tsx Journey.tsx Customer360.tsx
    Org.tsx DeepDives.tsx Pricing.tsx Trust.tsx Faq.tsx Closing.tsx
```

## Design notes

- All product previews render through the shared `AppFrame` chrome so every mockup reads as the
  same real application. Preview data is illustrative and labeled as demo data.
- Motion is scroll-driven and fully disabled under `prefers-reduced-motion`.
- Mobile-first: 48px touch targets, fluid type scale (`.t-hero`, `.t-h2`, `.t-h3`), and a
  horizontal module strip that replaces the product sidebar on small screens.

## Deploy

`npm run build` produces a static `dist/` — deploy to any static host (Vercel, Netlify,
Cloudflare Pages, S3). The canonical domain is **https://hpxeigen.com**.
