# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React SPA that renders a slide deck for a talk on accessibility ("Poder usar tus productos"). Content is in Spanish. `README.md` and `GUION.md` hold the talk's script/content — they are presentation material, not project documentation.

## Commands

Package manager is pnpm (`pnpm-lock.yaml`).

- `pnpm dev` — start the Vite dev server
- `pnpm build` — production build
- `pnpm preview` — preview the production build
- `pnpm lint` — run oxlint (rules in `.oxlintrc.json`; only `react/rules-of-hooks` and `react/only-export-components` are configured beyond defaults)

There is no test script/runner configured in this project.

Always check if dev server is already running before starting a new one — Vite will fail to start if the port is already in use.

## Architecture

### Deck engine (`src/components/deck/`)

The deck is a generic, content-agnostic engine:

- `Deck.jsx` takes its JSX `children` as the ordered list of slides (`Children.toArray`). Current slide index is driven by the URL (`useDeckRouter`), not local state — the route `/presentacion/:slide` is the source of truth.
- `useDeckRouter.js` clamps the index to `[0, total-1]` and keeps a `pendingIndexRef` so rapid `next()`/`prev()` calls (e.g. a bouncing presenter clicker) chain correctly even before React/router re-renders catch up.
- `useKeyboardNavigation.js` wires arrow keys/space/Home/End to deck navigation, ignoring input/textarea/contenteditable targets.
- Slide transitions use `motion/react` (`AnimatePresence`); background is a WebGL `LightRays` effect (`ogl`).
- `Slide` (in `Slide.jsx`) is the layout wrapper every slide content component renders into.

### Slide content vs. demo pages

Two distinct kinds of "slide" content, each assembled into its own `Deck`:

- `src/components/slides/*` — the actual talk slides (text, explanations, diagrams), assembled by `src/components/Slides.jsx` and rendered at `/presentacion/:slide`.
- `src/pages/examples/*` — live before/after accessibility demos. Each file typically exports a `*Bad` and `*Good` pair (e.g. `ColorContrastBad`/`ColorContrastGood`) that render the same fake app screen through the shared `AppShell` (`src/pages/examples/AppShell.jsx`), one with an accessibility flaw and one fixed. `AppShell` fakes a real product's sidebar/header/nav chrome so the contrast is realistic, not toy markup. These are assembled separately by `src/components/Examples.jsx` and rendered at `/ejemplos/:slide` — they are reference material, not part of the main talk flow, and are not synced to `/notas` (`Deck`'s `syncNotes={false}`).

`src/components/Slides.jsx` and `src/components/Examples.jsx` are each a single ordered list — **slide order within a deck is entirely determined by the JSX order in its file**. Adding/reordering a slide means editing the relevant list, nothing else.

### Routing

`App.jsx` has two slide-deck routes — `/presentacion/:slide` (the talk) and `/ejemplos/:slide` (the Bad/Good reference demos) — plus `/notas` (presenter notes). `/` redirects to `/presentacion/1`, `/ejemplos` redirects to `/ejemplos/1`.

### UI kit

`src/components/ui/*` are shadcn/ui components, configured via `components.json` (style `base-nova`, JS not TSX, no RSC, `lucide` icons). Custom registries are configured (`@reui`, `@slide-cn`, `@react-bits`) alongside the default shadcn registry — check `components.json` before assuming a component only comes from the standard shadcn registry.

### Guided tours

`src/providers/DriverProvider.jsx` wraps `driver.js` in a context; the driver instance is created once via `useRef` (not `useState`) because it must not be recreated on re-render. `src/hooks/useDriver.js` exposes `{ driver, setSteps }` to consumers. Used for step-by-step walkthrough overlays (e.g. `src/components/driver/StepComponent.jsx`).

### Colors

Never hardcode arbitrary color values (`bg-[#1D4ED8]`, `text-blue-400`, etc.) directly in a component. Define a semantic token in `src/index.css`: add the raw value to `:root` (e.g. `--brand: #1d4ed8;`) and alias it in the `@theme inline` block (e.g. `--color-brand: var(--brand);`) — Tailwind then generates `bg-brand`/`text-brand`/`border-brand` utilities from it. Use those generated classes in components, never a one-off hex. This keeps colors defined in exactly one place instead of drifting per component/session.

Note: this app never toggles the `.dark` class, so shadcn's own `--primary`/`--secondary`/etc. tokens always resolve to their `:root` (light) values — tuned for the light-background mockups in `src/pages/examples/*` (which use `Button`/`Badge`), not for the deck slides. Don't reuse `--primary` for deck-slide accents; add a separate token instead.

### Deck theme (light / dark)

The deck has its own theme tokens, `--deck-*` (`deck-ink`, `deck-body`, `deck-muted`, `deck-title`, `deck-accent`, …). Light values live in `:root`; the `.deck-dark` class overrides them. `Deck` puts `.deck-dark` on its root through `useDeckTheme`, which defaults to light, remembers the choice in `localStorage` and toggles with the `T` key or the sun/moon button. `--deck-ink` is also the base for hairlines and surfaces through opacity (`border-deck-ink/10`, `bg-deck-ink/5`), so slides in `src/components/slides/*` must use deck tokens, never `text-white`/`text-gray-*`. The one exception is `text-white` on a fixed-color fill such as `bg-brand`. `LightRays` reads `--deck-rays` and is not rendered when that token is `none` (light). `/ejemplos` passes `theme="dark"` to `Deck` because its slides (`SlideAccessibility`, `SlidePerceptible`, …) still hardcode dark colors.

### Path alias

`@` maps to `src/` (configured in both `vite.config.js` and `jsconfig.json`) — keep both in sync if it ever changes.
