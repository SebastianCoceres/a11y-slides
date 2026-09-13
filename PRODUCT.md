# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers and product-team professionals attending a small, informal community meetup on web accessibility. The audience already has frontend/product context but not necessarily accessibility expertise (the talk's own script assumes frontend knowledge but not a11y knowledge).

## Product Purpose

A slide-deck web app for a live conference talk ("Accesibilidad web: de checklist a ventaja operativa") that teaches WCAG 2.2 accessibility as an operational engineering practice, so attendees can apply it in their own work right after the talk. Success is immediate practical adoption, not just awareness.

## Positioning

Reframes accessibility from a compliance checklist into an operational advantage: covers the WCAG POUR principles, real tooling (DevTools, Lighthouse, axe-core, Playwright/Cypress/Vitest), and a second, growing "audience" for accessible markup — AI agents that read the same accessibility tree as screen readers.

## Operating Context

Delivered live at a meetup from a browser (React SPA), with keyboard-driven slide navigation. A separate synced presenter-notes view (`/notas`) shows the speaker's script alongside the current slide. All content is in Spanish, conversational Rioplatense register.

## Capabilities and Constraints

- Two independent slide decks: `/presentacion` (the talk itself, ~24 slides) and `/ejemplos` (55 WCAG A/AA criteria as live before/after demos) — kept separate, not interleaved.
- `/notas` parses `GUION.md` (the spoken script) and syncs each block to the current slide.
- Established constraint: on-screen slides must stay minimal (a short statement, a number, a few words) — all explanatory detail lives in the spoken script (`GUION.md`), never duplicated on-screen.
- No automated test suite; `oxlint` is the only configured lint tool.

## Brand Commitments

The speaker works at the company behind https://www.thebigtech.es/. That site should inform this deck's visual identity as a loose reference (mood, feel) — explicitly not a template to replicate literally. No other brand assets (logo, formal palette, type license) confirmed yet.

## Evidence on Hand

- `GUION.md`: the complete spoken script, already written in its intended conversational tone — out of scope for content edits during visual work.
- `EJEMPLOS.md` / `ANEXO.md`: supporting reference material for `/ejemplos` and for the AI-agents research segment.
- No user research, analytics, or audience testimonials on hand for this talk.

## Product Principles

1. Minimal on-screen text, maximal spoken detail — the slide is a visual anchor, not a reading assignment.
2. Practical over theoretical — WCAG criteria land through consequence and mechanism, not citation.
3. Two audiences, one mechanism — humans on assistive tech and AI agents both consume the same accessibility tree; the talk treats this as one throughline, not two separate topics.
4. Reference, don't replicate — thebigtech.es informs the visual identity without becoming a rigid template.

## Accessibility & Inclusion

The talk's own subject is accessibility; the deck should model good practice (contrast, keyboard navigation — already implemented), though no formal accessibility audit of the deck itself has been requested.
