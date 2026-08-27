---
name: seo-review
description: Audit the Glinc website's SEO and technical discoverability. Use when reviewing metadata, structured data, sitemap, semantics, or performance, and before merging dev → main. Read-only.
---

# Glinc SEO review

Audit on-page and technical SEO for this Next.js (App Router) site. Top-tier SEO is a
stated priority. Read-only — report findings, don't edit. Never touch
`/Users/giorgi/Desktop/Web2Wireframe`.

## What to check

**Metadata**
- Every route exports `metadata` (or `generateMetadata`) with a unique, intent-rich
  `title` and `description`. Root has a `title.template` and `metadataBase`.
- `alternates.canonical` set per page; no duplicate titles across routes.
- Open Graph + Twitter card present; OG image resolves (consider `next/og` for
  per-page images).

**Structured data (JSON-LD)**
- `Organization` on home; `SoftwareApplication` + `BreadcrumbList` on plugin pages.
- Schemas are valid shapes, URLs absolute, claims truthful (no invented ratings or
  install counts — credibility must stay honest).

**Crawlability**
- `sitemap.ts` lists every indexable route (incl. dynamic plugin pages); `robots.ts`
  allows crawl and points to the sitemap; canonical host consistent (`https://glinc.io`).

**Semantics & content**
- Exactly one `<h1>` per page; logical heading order; landmarks (`main`, `nav`,
  `footer`); descriptive link text; meaningful `alt` on content images.
- `lang` set on `<html>`.

**Performance (SEO-affecting)**
- LCP image uses `next/image` with `priority` + correct `sizes`; no layout shift
  (width/height set); fonts via `next/font` (no FOUT); static rendering preserved.

## Output

Findings grouped **Blocking / Should-fix / Nice-to-have**, each with `file:line` and a
concrete fix. End with a one-line verdict on SEO readiness and the single highest-
impact improvement.
