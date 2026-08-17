# Syntora — AI Creative Agency Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS site.

## Stack & why

Next.js + Tailwind, as requested. No animation library (e.g. Framer Motion)
was added — scroll reveals, hover states and the corner-frame "viewfinder"
motif are done in plain CSS + one small `IntersectionObserver` hook
(`components/Reveal.tsx`), so the dependency list stays minimal.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces a production build.

## Design system

- **Colors** — near-black base (`#0A0A09`), warm off-white text (`#F5F3EF`),
  a brushed-brass accent (`#C9A15C`) used sparingly. Defined in
  `tailwind.config.ts` under `colors`.
- **Type** — Fraunces (display/headlines), Inter (body/UI), JetBrains Mono
  (eyebrows, labels, category tags) — loaded via `next/font/google` in
  `app/layout.tsx`.
- **Signature motif** — a viewfinder/camera corner-bracket frame
  (`.frame-corners` in `app/globals.css`) used on the showreel, portfolio
  thumbnails and property visuals. It's a nod to what the agency actually
  does: frame a shot.

## Where to replace placeholders

| What | File | Placeholder to replace |
|---|---|---|
| Hero showreel | `components/Hero.tsx` | The `<div>` inside the `.frame-corners` block — swap for a `<video autoPlay muted loop playsInline poster="/showreel-poster.jpg"><source src="/showreel.mp4" /></video>` |
| Portfolio thumbnails | `components/Portfolio.tsx` + `data/portfolio.ts` | Each project's `thumbnail` path — swap the gradient `<div>` for `next/image` or a `<video>` using that path |
| Property visuals | `components/PropertyFeature.tsx` | The three gradient blocks in the grid |
| Case study numbers | `components/CaseStudy.tsx` | The `stats` array — **only replace with verified client results**, never invented numbers |
| Calendly booking | `components/ContactForm.tsx` | The placeholder `<div>` — paste your Calendly inline embed and load their script |
| Form submission | `components/ContactForm.tsx` | `handleSubmit` — currently just shows a success state client-side; wire to an API route, Formspree, HubSpot, etc. |
| OG image | `app/layout.tsx` (`openGraph.images`) | `/og-image.jpg` — add a real 1200×630 image to `public/` |
| Social links | `components/Footer.tsx` | `socials` array `href` values |

All portfolio project data (title, category, description, thumbnail path)
lives in `data/portfolio.ts` — edit that file to add, remove or reorder
projects without touching any component.

## Structure

```
app/
  layout.tsx      — fonts, metadata/SEO, OG tags
  page.tsx         — assembles every section in order
  globals.css       — base styles, signature motif, reveal animation
components/         — one component per section (Navbar, Hero, Portfolio, ...)
data/
  portfolio.ts       — portfolio project data
  industries.ts       — industries grid data
```

## Notes

- Reduced motion is respected globally (`prefers-reduced-motion`).
- Keyboard focus is visible everywhere (`:focus-visible` uses the brass accent).
- No case-study performance numbers are real — they're explicitly marked as
  placeholders in both the UI copy and the code comments.
