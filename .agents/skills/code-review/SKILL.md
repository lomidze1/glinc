---
name: code-review
description: Review the Glinc website code for correctness, conventions, and quality. Use after implementing a feature, before merging dev → main, or when asked to review code. Read-only.
---

# Glinc code review

Review changed/relevant code in this Next.js (App Router) + TypeScript project. Be
read-only: report findings, never edit files. Never touch the separate
`/Users/giorgi/Desktop/Web2Wireframe` codebase.

## Project conventions (must hold)

- Next.js 16 App Router, React 19, TypeScript strict. ESM only.
- Styling: **CSS Modules** (`*.module.css`) + CSS-variable design tokens in
  `src/app/globals.css`. No inline styles except setting CSS custom properties.
- Internal navigation uses `next/link`; images use `next/image` (except tiny inline
  SVG icons, which may use `<img>` with an eslint-disable).
- Marketing pages are static (SSG); only `app/api/*` route handlers are dynamic.

## What to check, by priority

**Correctness & safety (highest)**
- Logic bugs, wrong data, broken links/routes, missing `await` on async `params`.
- **No silent failures.** Error paths must surface a clear message or log — never
  swallow an error or pretend success. (See the contact route: it must fail loudly
  when email isn't configured.)
- Input validation on the contact route (length caps, email shape, honeypot).
- Raw-HTML injection: any inline JSON-LD or raw-markup rendering must use only
  trusted, escaped content (no user input).
- Secrets only server-side (env vars), never shipped to the client bundle.

**Quality & maintainability**
- Type safety: no `any` leaks, props typed, discriminated unions where useful.
- Accessibility: semantic elements, labels tied to inputs, `aria-*` correctness,
  focus-visible, alt text (decorative images `alt=""`), heading order (one `<h1>`).
- Reuse over duplication; component boundaries sensible; dead code removed.
- Tests exist for logic (Vitest) and the change is covered.

**Conventions**
- Matches surrounding style; tokens used instead of hardcoded colors; files in the
  right place (`components/`, `data/`, `lib/`, `app/`).

## Output

Group findings by severity: **Blocking / Should-fix / Nit**. For each: `file:line`,
the issue, and a concrete fix. End with a one-line verdict: is the code safe to
continue building on? Only flag real issues — no padding.
