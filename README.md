# Syntora — AI Creative Agency Website

A production-ready Next.js 15 (App Router) + TypeScript + Tailwind CSS site,
deployable to Cloudflare Workers via the OpenNext adapter.

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

## Deploying to Cloudflare Workers

This project uses [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare),
the current Cloudflare-recommended way to run Next.js on Workers (the older
`@cloudflare/next-on-pages` / static-export approach is not used here — this
is full SSR, not a static export).

**Relevant files:**
- `open-next.config.ts` — tells OpenNext how to package the app for Cloudflare
- `wrangler.jsonc` — Worker name, compatibility date/flags, asset binding
- `next.config.mjs` — calls `initOpenNextCloudflareForDev()` so `next dev`
  behaves correctly with Cloudflare bindings

**To deploy from your own machine:**

```bash
npm install
npm run deploy
```

That single command builds the app with OpenNext *and* deploys it via
Wrangler (see the `deploy` script in `package.json`).

**To deploy via Cloudflare's Git integration (Workers Builds)** — this is
almost certainly why the previous deploy failed, since Cloudflare's
auto-detected build command doesn't know about OpenNext. In your Worker's
build settings, set:

- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx wrangler deploy`

(Cloudflare runs these as two separate steps for Git-connected Workers,
which is why the deploy command is just `wrangler deploy` — the OpenNext
build has already produced `.open-next/` by the time it runs.)

**Before your first deploy**, open `wrangler.jsonc` and bump
`compatibility_date` to today's date if it's drifted — Cloudflare requires
`nodejs_compat` plus a compatibility date of `2024-09-23` or later for this
adapter to work at all, and a date of `2025-04-01` or later so environment
variables populate into `process.env` correctly.

**Local preview in the real Workers runtime** (more accurate than `next dev`,
since it runs your actual build under `workerd`, not Node):

```bash
npm run preview
```

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
| Calendly booking | `components/ContactForm.tsx` | Already wired to `https://calendly.com/aqibkhalido53/30min` via `CALENDLY_URL` — change that constant if the link changes |
| Form submission | `components/ContactForm.tsx` | Already wired to Formspree (`FORMSPREE_ENDPOINT`, currently `https://formspree.io/f/xppaolwa`) — submissions POST there and Formspree emails them to whatever address that Formspree form is registered to. Change the constant if you ever create a different Formspree form. |
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
