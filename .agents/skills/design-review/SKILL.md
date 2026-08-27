---
name: design-review
description: Critique the Glinc website's visual design against its brand and references. Use when reviewing UI/pages, after building a component or page, or before merging design work. Read-only.
---

# Glinc design review

Evaluate the implemented design (CSS Modules + tokens + JSX) for craft and brand
fidelity. Read-only. You may build/screenshot if useful, but do not edit files and
never touch `/Users/giorgi/Desktop/Web2Wireframe`.

## The brand — "Studio Dark"

Tokens live in `src/app/globals.css`:
`--bg` dark teal `#0e3a3f` · `--accent` orange `#e94e1b` · `--text` cream `#f3f0e8` ·
`--text-muted` sage `#9ab6ae`. Display = Archivo (heavy grotesque); mono micro-labels
(`// like this`); body = Geist.

**Target feeling:** Mureal's calm minimalism as the base, with divRIOTS's
"established, capable studio" credibility — confident, technical, premium, *without
clutter*. Audience: designers worldwide, so the bar for taste is high.

## What to check

- **Hierarchy & rhythm:** clear focal order; consistent spacing scale; generous
  negative space; sections breathe but don't feel empty.
- **Typography:** display vs body vs mono used intentionally; sizes via `clamp()`;
  line-length ~50–65ch for body; tight tracking on big display.
- **Color:** dominant teal canvas, orange as a *sharp* accent (not overused);
  contrast meets the mood and stays legible.
- **Consistency:** components reuse tokens (no hardcoded colors/sizes); buttons,
  cards, badges, kickers feel like one system.
- **Motion:** the load reveal is tasteful; respects `prefers-reduced-motion`.
- **Responsive:** holds up at 390px and ≥1280px; no overflow, no cramped grids.
- **Distinctiveness:** does NOT read as generic AI/template work. Memorable detail?
- **Accessibility of design:** focus states visible; tap targets ≥44px; text on
  surfaces stays readable.

## Output

Findings grouped **Blocking / Should-fix / Polish**, each with the file and a
concrete suggestion. Call out what's genuinely good too. End with a one-line verdict
on whether the design is ready to build further on.
