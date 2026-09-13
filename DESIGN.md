---
name: A11Y — Accesibilidad web
description: Dark-stage talk deck for a live accessibility meetup, tuned toward thebigtech.es's blue-violet identity
colors:
  brand: "#1d4ed8"
  brand-light: "color-mix(in oklch, #1d4ed8 55%, white)"
  brand-violet: "#7c3aed"
  gradient-from: "#60a5fa"
  gradient-to: "#a78bfa"
  ambient-glow: "#6366f1"
  background: "#191919"
  background-wash: "#1e2c52"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Geist Variable, sans-serif"
    fontWeight: 400
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, monospace"
    fontFeature: "tabular-nums"
rounded:
  chip: "9999px"
---

# Design System: A11Y — Accesibilidad web

## Overview

**Creative North Star: "The Dev-Stage Readout"**

A dark, single-column stage built for a live talk to developers: one idea per slide, oversized poster type for the words that matter, and monospace numerals for anything measured. The palette is a direct, restrained translation of thebigtech.es (the speaker's employer) — its real blue-to-violet gradient and indigo ambient light — reused here as a signature accent, never as a literal clone of their light-mode SaaS card layout. The deck stays loud where the SaaS site is corporate: giant condensed display type instead of a conventional sans, no light-mode surfaces, no card grids.

**Key Characteristics:**
- Minimal on-screen text; all explanatory depth lives in the spoken script (`GUION.md`), never duplicated on slide.
- One recurring "hero" gradient reserved for the single most iconic number or word per major section — not a repeated template.
- Numbers read like a terminal/data readout: monospace, tabular figures.
- Depth comes from an animated WebGL light-rays field and a faint radial color wash, never from cards or shadows.

## Colors

Cool, near-black ground; one blue-violet family carries every accent. No secondary or tertiary hue — this is a Primary + Neutral system by design.

### Primary
- **Signal Blue** (`--brand`, `#1d4ed8`): default accent color for headings, links, and small brand marks (`text-brand-light`, `border-brand`).
- **Periwinkle Light** (`--brand-light`, `color-mix(in oklch, var(--brand) 55%, white)`): the actual on-screen heading color — a lightened, slightly lavender-shifted tint of Signal Blue, legible on near-black.
- **Electric Violet** (`--brand-violet`, `#7c3aed`): the gradient's cool end; used only inside the brand gradient, never as a flat fill.
- **Sky-to-Violet Gradient** (`--brand-gradient-from` `#60a5fa` → `--brand-gradient-to` `#a78bfa`): the deck's one gradient-text treatment, lifted directly from thebigtech.es's own hero headline gradient.

### Neutral
- **Stage Black** (`#191919`): base background of every slide.
- **Hero Wash** (`#1e2c52`): a top-anchored radial gradient stop blended into Stage Black (`radial-gradient(120% 90% at 50% -10%, #1e2c52 0%, #191919 60%)`) — the deck's translation of thebigtech.es's diagonal hero gradient, kept subtle enough not to fight the light-rays field or the display type.
- **Ambient Indigo** (`#6366f1`): color of the animated WebGL light-rays background (`LightRays` component) — the ambient glow that reads across every slide.
- **Grays** (Tailwind `gray-200`–`gray-600`): body copy, secondary stats, and muted captions, scaled by hierarchy (lighter = more important).

### Named Rules
**The Rare Gradient Rule.** The gradient (`.text-gradient-brand`) is spent on at most one element per major section — the deck's title numerónym and its single boldest hook stat. Reaching for it anywhere else is decoration, not a signature.

## Typography

**Display Font:** Anton (self-hosted via `@fontsource/anton`; no system-font fallback — Impact must never be the rendered face)
**Body Font:** Geist Variable (`@fontsource-variable/geist`)
**Data/Mono Font:** Geist Mono Variable (`@fontsource-variable/geist-mono`)

**Character:** A loud, condensed all-caps poster voice for headings against a quiet, humanist body face — the display face carries the "impact" the talk asks for, while body copy and data stay calm and readable at conference-room distance.

### Hierarchy
- **Display** (Anton, uppercase, `0.02em` tracking, `text-4xl`–`text-8xl` depending on slide): every on-screen `h2`/`h1`. One line of thought per slide.
- **Body** (Geist Variable, 400–700, `text-lg`–`text-3xl`): the single short statement each slide carries; body measure kept short (a phrase, not a paragraph — see Do's and Don'ts).
- **Data/Label** (Geist Mono Variable, tabular-nums, bold): every stat, percentage, count, or code token (`30+`, `95.9%`, `~200-400`, `@axe-core/playwright`).

## Layout

Full-bleed, single-column dark stage per slide (`Slide` wrapper), content left-aligned inside a `max-w-3xl`–`max-w-4xl` column, vertically centered. No grid-based page chrome, no persistent nav — the deck's own `DeckControls`/`ProgressBar` are the only chrome, tucked to the screen edges. Composition varies per slide's actual content relationship (asymmetric two-column comparisons, flowing chip lists, giant typographic watermarks) rather than repeating one card template.

## Elevation & Depth

Flat by design — no shadows anywhere in the deck. Depth is conveyed by: an animated WebGL light-rays field (indigo, top-anchored, subtly mouse-reactive) behind every slide; a soft top-anchored radial color wash on the base background; and oversized, near-transparent (5% opacity) display-letter watermarks on select slides (the POUR principle letters).

### Named Rules
**The Flat-Stage Rule.** No `box-shadow`, no glass/blur decoration, no card surfaces. Depth is atmospheric (light + color wash), never a material lift.

## Shapes

Two shape languages only: hairline dividers (`border-t border-white/10`) between grouped content, and `rounded-full` pills for small chips (the WCAG-code badge in the slide index, tag-like labels). No boxed cards, no `border-left`/`border-right` accents of any color or width.

## Components

### Stat/Data Display
- Numeral in `font-mono` + `tabular-nums`, bold, sized to its importance (`text-2xl` for secondary stats up to `text-8xl` for the deck's single hero stat).
- Caption below in small muted gray prose, source cited inline in an even smaller gray.
- The hero-only variant (currently just the "57%" stat) additionally carries `.text-gradient-brand`.

### Gradient Text
- `.text-gradient-brand` (`index.css`): 135° linear-gradient from `--brand-gradient-from` to `--brand-gradient-to`, clipped to text.
- Reserved per the Rare Gradient Rule — currently used on the title's "11" and the "57%" hook stat only.

### Watermark Letter
- A single display-face letter (the POUR-principle initial), `text-[18rem]`–`text-[22rem]`, `white/5%` opacity, absolutely positioned top-right — a background texture, not a competing focal point.

### Pill Badge
- `rounded-full`, small `text-[10px]`–`text-xs` uppercase-tracked label, used only for the slide-index's WCAG-code chip and the "Actual"/current-slide indicator.

## Do's and Don'ts

### Do:
- **Do** keep on-screen slide text to a single short statement, a number, or a few words; all elaboration belongs in `GUION.md`.
- **Do** self-host Anton; never let the display heading fall back to a system Impact/Arial Black.
- **Do** use `font-mono` + `tabular-nums` for every measured value (percentages, counts, token figures, code identifiers).
- **Do** vary each slide's composition to fit its actual content relationship (comparison, list, single statement) instead of reusing one layout template.

### Don't:
- **Don't** repeat the brand gradient on more than one element per section — it is a rare accent, not a default text-emphasis technique.
- **Don't** introduce card grids, boxed icon+heading+text tiles, or a repeated "big number / label / stat" hero-metric template as page structure.
- **Don't** add a colored `border-left`/`border-right` to any card, list item, or callout.
- **Don't** add a kicker/eyebrow label above a heading.
- **Don't** use monospace as generic "tech" decoration on prose — reserve it for actual code, data, or measurement.
