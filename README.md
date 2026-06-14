# Glinc — glinc.io

The official website of **Glinc** (GL inc) — a studio that builds tools for designers,
starting with Figma plugins.

This repository contains the company's portfolio site at **glinc.io**. It is *not* a
product marketing site; it introduces the company and showcases its plugins, then links
out to each product's own deep site (e.g. `web2wireframe.design`) and Figma Community
listing.

> Status: **Planning → scaffolding.** Code is not yet committed; this README captures the
> full brief and decisions so the project can be built consistently.

---

## 1. Goal & success criteria

Present the company, its plugins, and its "face" exceptionally well, to an audience of
**designers worldwide**.

A visit succeeds when the visitor:

1. **Gets interested in our plugins** and goes on to install/use them (primary).
2. **Reaches out** — either for business collaboration, or with product feedback
   ("what kind of plugin would you want", "what's painful/slow in your workflow").

Guiding principle from the owner: **quality over speed, always.**

Non-negotiables:

- Quality first.
- Clean, tested code.
- Top-tier SEO.
- A strong, credible company identity (to be built — see Brand).

## 2. Audience

Designers, anywhere in the world. English-first content.

## 3. Relationship to other Glinc properties

```
glinc.io  (THIS repo — the company)        web2wireframe.design (separate, already live)
├── Home      — who we are, what we build    ├── docs, pricing, support, deep product info
├── Plugins                                   └── (Vite + React 19 + SSG, on Vercel)
│    └── Web2Wireframe — short showcase  ──→  "Install / Read docs" links out to the
└── Contact   — business + feedback                product site & Figma Community
```

**Rule: no duplication.** On glinc.io, each plugin gets a concise, beautiful showcase
plus a demo. Deep details (docs/pricing) live on the product site; we link to them.

`web2wireframe.design` is owned and maintained separately and **must not be modified**
from this project.

## 4. Tech stack

**Next.js (App Router) + TypeScript, deployed on Vercel.**

Chosen objectively for the project's priorities (top-tier SEO, an image-heavy brand
showcase, a contact form, and a future blog):

- **SEO** — Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD structured data, dynamic
  Open Graph images via `next/og`. Correct by default, which raises the quality floor.
- **Performance** — `next/image` (automatic AVIF/WebP, responsive sizes, lazy loading)
  matters a lot for a visual portfolio (LCP/CLS → ranking + UX).
- **Contact form** — Route Handlers (`app/api/...`) provide first-class serverless
  endpoints in the same project and deploy.
- **Blog (later)** — first-class MDX support.
- **Rendering** — static generation (SSG) for marketing pages; ISR where useful.

**Quality tooling (added on top):**

- **Vitest + React Testing Library** — unit/component tests.
- **Playwright** — end-to-end tests.
- **Lighthouse CI + axe** — performance and accessibility gates.

**Forms / email:** Next Route Handler → email via **Resend**, with a spam guard.

> Note: the separate `web2wireframe.design` site runs on Vite + React 19 + SSG. We are
> *not* matching that stack for consistency's sake — Next.js was chosen on merit for this
> site's specific requirements.

## 5. Brand — "Studio Dark" (Direction A)

The brand foundation already exists in the Web2Wireframe marketing assets and the Glinc
logo. We elevate that language into the Glinc parent brand rather than inventing a new one.

| Token | Value | Source |
|-------|-------|--------|
| Accent | **`#e94e1b`** (vermilion-orange) | Glinc + W2W logos (exact) |
| Background | dark teal, `~#0E2E29` | W2W cover (exact value TBD in Phase 0) |
| Text | cream, `~#F2EDE4` | W2W cover |
| Mono accent | green | `// LABEL` micro-labels |
| Display type | heavy grotesque | banner headlines |
| Micro-labels | monospace, `// UPPERCASE` | banner kickers |

Mood: minimal and calm (à la Mureal) as the base, with strategic credibility signals
(à la divRIOTS) — confident, technical, premium, without visual clutter.

Logo: "GL inc" wordmark with a diagonal slash, in the accent orange.

## 6. Information architecture (v1)

v1 ships only the essentials:

- **Home** — hero → live Web2Wireframe demo → "what we build" → maker story → CTA.
- **Plugins** — index (calm, Mureal-style rows) → **Web2Wireframe detail**: what it does,
  import methods (URL · Screenshot · HTML · Area capture · Browser extension), a demo,
  real badges ("On Figma Community", "Chrome Web Store"), and outbound "Install / Read
  docs" links.
- **Contact** — two intents: business collaboration, and product feedback.

Later (not v1): Blog, expanded About.

## 7. Credibility — honest, no fake numbers

The product launched recently and has no usage numbers yet. **We do not fabricate
metrics** (the audience verifies on Figma Community; fake numbers destroy trust). Instead:

- **Show the product working** — live demo / before→after / video.
- **Quality as credibility** — a flawless, polished site signals a serious team.
- **True badges** — "On Figma Community", "On the Chrome Web Store", concrete capabilities.
- **Maker story** — an authentic "built by designers, for designers" narrative.
- **Data-driven `<Stats>` / `<Testimonials>`** — components wired to real data that stay
  hidden while empty, and switch on automatically once real numbers exist. No rework.

## 8. SEO plan

- `Organization` schema for Glinc; `SoftwareApplication` schema for Web2Wireframe.
- `sitemap.ts`, `robots.ts`, canonical URLs, per-page metadata and OG images.
- Semantic HTML, accessible by default.
- Performance budget: Lighthouse 95+ as a CI gate.

## 9. Roadmap (phases)

| Phase | Scope | Verify |
|-------|-------|--------|
| 0 | Scaffold + design tokens + Vercel preview | styled blank page live |
| 1 | Design system + Home skeleton | visual review |
| 2 | Content + Plugins + Contact + SEO | Lighthouse/axe pass, form works |
| 3 | Polish + launch on `glinc.io` | prod live, SEO/perf gates green |

## 10. Product facts — Web2Wireframe (for accurate copy)

- A Figma plugin that converts any website into clean, editable Figma wireframes.
- Import methods: **URL**, **Screenshot**, **HTML** (for authenticated/offline pages),
  **Area capture** (sections), and a **Chrome browser extension** (high-fidelity CDP capture).
- Captures layout, structure, fonts, colors, and styles.
- Pricing: Free = 10 imports/month; Pro Monthly $16 (30 days); Pro Yearly $144 (365 days,
  −25%). One-time payments, no auto-renewal. Payments via Flitt (PCI-DSS Level 1).
- Deep docs/pricing/support live on `web2wireframe.design`.

## 11. Local development

Requirements: Node.js 20+ and npm.

```bash
npm install          # install dependencies
npm run dev          # dev server @ http://localhost:3000
npm run build        # production build (static)
npm run start        # serve the production build

npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm test             # Vitest unit/component tests
npm run test:e2e     # Playwright e2e (run `npx playwright install` once first)
```

Stack: Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules + CSS-variable
design tokens (`src/app/globals.css`). Tests: Vitest + React Testing Library (unit),
Playwright (e2e).

## 12. Domains

- `glinc.io` — this site (owned; not yet deployed).
- `web2wireframe.design` — the Web2Wireframe product site (separate; already on Vercel).

## License

Private and proprietary. © Glinc. All rights reserved.

## Reference material

Design references analyzed during planning live in [`references/`](references/):
`mureal.io` (minimalism, calm) and `divriots.com` (the "established, capable company" feel).
