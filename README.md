# Sandumi Sathdahara Godage — Portfolio

A premium personal portfolio for an AI-native software engineer. Built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Before deploying — update these

All site content lives in **`constants/data.ts`** (single source of truth):

- [ ] `SITE.email` / `SITE.phone` — currently placeholders
- [ ] `SITE.social.linkedin` — verify the LinkedIn URL
- [ ] Project descriptions — adjust facts for SafeHaven, AutoVault, PredicTea if needed
- [ ] Add your photo as `public/portrait.jpg` and set `SITE.portrait` to `"/portrait.jpg"`
- [ ] Add `public/resume.pdf` (the Resume button links to it)
- [ ] Optionally replace project gradient covers with real screenshots in `public/`

## Structure

```
app/                  # Next.js App Router (layout, page, global styles)
components/
  sections/           # One component per page section
  ui/                 # Reusable primitives (Button, Badge, GlassCard)
  navbar, footer, reveal, magnetic, theme-* ...
constants/data.ts     # ALL site content — edit copy here
hooks/                # useScrollSpy
lib/utils.ts          # cn() helper
```

## Design system

- **Themes:** dark (default) + light, toggled via `next-themes`, tokens in `app/globals.css`
- **Palette:** two-tone — near-black green base with a tonal emerald accent scale
- **Type:** Space Grotesk (display) + Inter (body)
- **Effects:** glassmorphism, aurora gradients, cursor spotlight cards, magnetic buttons, scroll reveals, keyword marquee — all respect `prefers-reduced-motion`

## Deploying

Optimized for [Vercel](https://vercel.com): import the repo and deploy with defaults.
