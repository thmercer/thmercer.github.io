---
name: T. H. Mercer
description: Warm, literary author site for speculative fiction — ink and aged paper, restrained and confident.
colors:
  study-ink: "#5c3a1e"
  worn-leather: "#8c5e3a"
  aged-paper: "#f7f5f0"
  fresh-page: "#faf9f6"
  bright-page: "#fcfcfa"
  shaded-margin: "#f0ede7"
  paper-fold: "#ddd9d2"
  pencil-line: "#d4cfc7"
  ink-black: "#1e1c17"
  soft-graphite: "#6b6860"
  faint-graphite: "#b0ada8"
  rust-warning: "#a35346"
  paper-white: "#fdf8f3"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.125rem, 1rem + 0.75vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Source Sans 3', system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.25rem"
  6: "1.5rem"
  8: "2rem"
  10: "2.5rem"
  12: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.study-ink}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  button-primary-hover:
    backgroundColor: "#3e2710"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.study-ink}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  button-outline-hover:
    backgroundColor: "{colors.study-ink}"
    textColor: "{colors.paper-white}"
  input:
    backgroundColor: "{colors.fresh-page}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: T. H. Mercer

## 1. Overview

**Creative North Star: "The Writer's Study"**

This is a working author's quiet private space rendered as a website, not a public storefront. The palette is ink on aged paper; the type is a serif built for reading, not for shouting; the layout gives the prose room and gets out of its way. Every page resolves to one clear next action — read, subscribe, buy — the way a study has one desk, not a wall of signage.

The system explicitly rejects two failure modes: pulp genre-fiction design (busy hero banners, stock sci-fi imagery, loud color, cover-art collage) and SaaS marketing gloss (gradient text, hero-metric templates, uppercase eyebrow labels over every section, identical card grids, numbered feature scaffolding). Neither belongs in a writer's study.

**Key Characteristics:**
- Warm neutral paper background, single deep-ink accent color, no secondary or tertiary hues.
- Serif for everything that is prose or a heading; sans-serif reserved for UI chrome (nav, labels, buttons, form fields).
- Flat surfaces — no drop shadows anywhere. Separation comes from borders, dividers, and background tints only.
- Restrained, confident components: outlined by default, filled only on hover or as the one primary CTA per view.

## 2. Colors

Ink and aged paper: warm, low-chroma neutrals carry the page; a single deep-brown ink color is the only accent, used sparingly.

### Primary
- **Study Ink** (`#5c3a1e`): the site's only accent. Links, primary buttons, active nav state, focus rings. In dark mode this inverts to a lighter **Amber Ink** (`#c4885a`) so it still reads as ink against a near-black page — same hue family, opposite end of the ramp.

### Neutral
- **Aged Paper** (`#f7f5f0`): page background. Dark mode: near-black `#141210`.
- **Fresh Page** (`#faf9f6`): card and form surfaces, one step brighter than the page.
- **Bright Page** (`#fcfcfa`): the brightest surface step, used sparingly for nested elements.
- **Shaded Margin** (`#f0ede7`): offset surface for hover states and subtle containers (details/disclosure blocks).
- **Paper Fold** (`#ddd9d2`): dividers between list rows and sections.
- **Pencil Line** (`#d4cfc7`): borders on cards, inputs, buttons.
- **Ink Black** (`#1e1c17`): primary text.
- **Soft Graphite** (`#6b6860`): secondary/muted text (meta lines, body copy in cards).
- **Faint Graphite** (`#726d65`): tertiary text (timestamps, footnote-weight labels). Retuned from an earlier `#b0ada8` — the original value failed WCAG AA contrast at the small sizes this role is used at.
- **Rust Warning** (`#a35346`): form validation errors only. Never decorative.
- **Paper White** (`#fdf8f3`): text printed on top of Study Ink (button labels).

### Named Rules
**The One Ink Rule.** There is exactly one accent color. It never gains a second hue — no complementary blue, no success-green, no gradient. Warmth and hierarchy come from value and saturation steps within the same ink-and-paper family, not from additional hues.

## 3. Typography

**Display Font:** Source Serif 4 (with Georgia, Times New Roman fallback)
**Label Font:** Source Sans 3 (with system-ui fallback)

**Character:** A literary serif carries every heading and every sentence of prose; a plain grotesque sans is reserved strictly for interface chrome (nav links, buttons, form labels, timestamps, badges). The pairing reads as "book" wherever there's writing, and "tool" only where there's an interface control — never blurred together.

### Hierarchy
- **Display** (600, `clamp(2rem, 1.2rem + 2.5vw, 3.5rem)`, 1.2): collection landing titles (Moral Arithmetic).
- **Headline** (600, `clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)`, 1.25): article/story h1, homepage feature title.
- **Title** (600, `clamp(1.125rem, 1rem + 0.75vw, 1.5rem)`, 1.3): section h2, story-entry headings, work-section headings.
- **Body** (400, `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`, 1.65–1.8): story and essay prose, capped at 72ch; site-intro copy capped at 60ch.
- **Label** (500, `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)`, tracked 0.06–0.1em uppercase where used): nav links, eyebrows, badges, meta lines, button text.

### Named Rules
**The Serif-Is-Prose Rule.** If it's a sentence a reader is meant to read for content, it's serif. If it's a control a user clicks or a timestamp they scan, it's sans. Never mix within one role.

## 4. Elevation

Flat by default, flat everywhere — including the objects (book covers, avatar, cards) that currently carry a soft shadow in code. The target doctrine removes `box-shadow` entirely; depth and separation come from a 1px border (Pencil Line) or a background-tint step (Shaded Margin vs. Fresh Page), never from a shadow. This is a deliberate tightening from the current CSS, which still defines `--shadow-sm` / `--shadow-md` on cover images and cards — those should be retired in favor of borders as the system is touched.

### Named Rules
**The Flat Page Rule.** No `box-shadow` anywhere in the system. A book cover sits on the page the way a photograph sits in a paper book: bordered, not lit from below.

## 5. Components

Restrained and confident: outlined at rest, filled only on hover, and never more than one filled/primary control per view.

### Buttons
- **Shape:** `border-radius: 0.375rem` (Pencil-Line-bordered rectangle, never pill-shaped).
- **Primary** (`.btn-primary`): filled Study Ink background, Paper White text, 1px Study Ink border. Reserved for the single most important action on a view (pre-order, submit).
- **Outline** (`.cta-link`, `.pub-buy-btn`, `.contact-submit`, `.newsletter-cta-submit`): transparent background, Study Ink text and 1px (to 1.5px) Study Ink border at rest; fills to solid Study Ink with Paper White text on hover. This is the default button — most actions on the site are outline, not primary.
- **Hover / Focus:** color and background transition over 180ms (`cubic-bezier(0.16, 1, 0.3, 1)`, ease-out-quint); focus-visible gets a 2px Study Ink outline offset 2–3px.
- **Disabled:** 55% opacity, `pointer-events: none`, no hover state change.

### Cards / Containers
- **Corner Style:** 0.375–0.5rem radius (`md`/`lg`).
- **Background:** Fresh Page on Aged Paper, or Shaded Margin for offset/nested contexts (details blocks). Secondary/demoted feature panels (e.g. a homepage secondary feature) sit on Fresh Page rather than Shaded Margin, since Shaded Margin's tint doesn't leave enough contrast headroom for Faint Graphite or Soft Graphite text at small sizes.
- **Shadow Strategy:** none, per the Flat Page Rule (see Elevation) — supersedes any remaining `box-shadow` in current CSS.
- **Border:** 1px Pencil Line.
- **Internal Padding:** `space-6` to `space-8` (1.5–2rem).

### Inputs / Fields
- **Style:** Fresh Page background, 1px Pencil Line border, `md` radius, serif body font inside text areas, sans for email/text inputs in forms.
- **Focus:** border shifts to Worn Leather accent plus a 3px Study-Ink-tinted glow (`box-shadow: 0 0 0 3px var(--color-primary-highlight)`) — the one place a shadow-like glow is allowed, since it communicates focus state rather than elevation.
- **Error:** border switches to Rust Warning; error text below the field in Label type, also Rust Warning.

### Navigation
- **Style:** sans-serif Label type, Soft Graphite at rest, Ink Black on hover, Ink Black + medium weight for the active/current page (`aria-current="page"`). No underlines, no pill backgrounds.
- **Mobile:** nav wraps under the logo above 700px breakpoint; still text-only, no hamburger — the link count stays low enough to wrap gracefully.

### Badges
- **Style:** small uppercase Label type, tracked 0.06em, `sm` radius pill. "Free" badge uses an 8%-Ink-tinted neutral background with Soft Graphite text; "In Anthology" uses a 12%-Study-Ink-tinted background with Study Ink text. The only place two "weights" of the same ink color appear side by side, and only to distinguish free vs. paid at a glance.

## 6. Do's and Don'ts

### Do:
- **Do** keep exactly one accent hue (Study Ink / Amber Ink) — all hierarchy comes from value/tint steps, not new hues.
- **Do** use outline buttons as the default and reserve the filled primary button for one action per view.
- **Do** separate surfaces with a 1px Pencil-Line border or a Shaded-Margin tint, never a shadow.
- **Do** cap prose measure at 65–75ch and use serif for anything a reader reads as content.
- **Do** end every page in one clear next action (read → subscribe → buy), matching PRODUCT.md's "one clear next action per page" principle.

### Don't:
- **Don't** add a second accent color, a gradient, or "success green" / "info blue" semantic colors — errors use Rust Warning; nothing else needs a new hue.
- **Don't** use `box-shadow` on cards, cover images, or buttons (see The Flat Page Rule) — replace remaining `--shadow-sm`/`--shadow-md` usage with borders as those components are touched.
- **Don't** reach for pulp genre-fiction styling: busy hero banners, stock sci-fi imagery, collage-style cover art treatments, loud saturated color.
- **Don't** reach for SaaS marketing gloss: gradient text, hero-metric templates, uppercase tracked eyebrows over every section, identical icon-card grids, numbered feature scaffolding (01 / 02 / 03).
- **Don't** mix serif and sans within one role (e.g. a sans-serif heading, or a serif nav link).
- **Don't** stack more than one filled/primary button in the same view — competing CTAs contradict the "one next action" principle.
