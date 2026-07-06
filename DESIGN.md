---
name: T. H. Mercer
description: Ember in the Machine — a warm, human accent inside a cool, precise dark system.
colors:
  ember: "oklch(0.72 0.17 45)"
  ember-hover: "oklch(0.79 0.16 47)"
  machine-bg: "oklch(0.16 0.014 255)"
  machine-surface: "oklch(0.205 0.014 255)"
  machine-surface-2: "oklch(0.24 0.014 255)"
  machine-surface-offset: "oklch(0.225 0.017 255)"
  machine-divider: "oklch(0.32 0.015 255)"
  machine-border: "oklch(0.38 0.017 255)"
  human-text: "oklch(0.93 0.012 80)"
  human-text-muted: "oklch(0.72 0.015 75)"
  human-text-faint: "oklch(0.58 0.017 70)"
  signal-error: "oklch(0.64 0.2 22)"
  on-ember: "oklch(0.16 0.014 255)"
typography:
  hero:
    fontFamily: "'Literata', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 1.5rem + 5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  display:
    fontFamily: "'Literata', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.2
  headline:
    fontFamily: "'Literata', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "'Literata', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Literata', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 500
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
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ember-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ember}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  button-outline-hover:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.on-ember}"
  input:
    backgroundColor: "{colors.machine-surface}"
    textColor: "{colors.human-text}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
---

# Design System: T. H. Mercer

## 1. Overview

**Creative North Star: "Ember in the Machine"**

The fiction's own throughline — cold systems, warm people caught inside them — is staged literally in the palette. Dark is the primary, default experience: a cool, precise near-black (a system, a machine, indifferent) with a single saturated warm ember accent (the human, the choice made anyway). Light mode is the secondary/utility mode, a true off-white rather than a warm cream — the same system in daylight, not a different brand.

This supersedes the earlier "Writer's Study" ink-on-paper system. That system was tasteful but was also, on reflection, the safest possible answer for this brand — a warm-neutral near-white body with a muted brown accent sits squarely in the OKLCH band that's become the default reflex for indie-literary sites in 2026. Ember in the Machine commits harder: a genuinely saturated accent, a dark-first posture, and a single typeface carried at real weight contrast rather than a safe serif/sans split.

The system still rejects the same two failure modes: pulp genre-fiction design (busy hero banners, stock sci-fi imagery, loud saturated color used without restraint) and SaaS marketing gloss (gradient text, hero-metric templates, uppercase eyebrow labels over every section, identical card grids, numbered feature scaffolding). Committing to one bold accent is not the same as pulp loudness — the ember is precise and singular, not a riot of color.

**Key Characteristics:**
- Dark is the default, brand-defining experience; light is the same system in daylight, not a separate mood.
- One saturated ember accent carries real visual weight (filled buttons, the homepage hero glow) — a "Committed" color strategy, not "Restrained."
- Literata (a single serif family, built for on-screen book reading) carries both prose and UI chrome — no second sans-serif family.
- Flat surfaces — no drop shadows anywhere. Separation comes from borders, dividers, and background tints only (this rule survives from the prior system unchanged).
- Exactly one deliberate motion moment (the homepage hero's entrance) rather than scattered micro-interactions everywhere.

## 2. Colors

Ember in the machine: a cool, low-chroma near-black system with a single saturated warm accent.

### Primary
- **Ember** (`oklch(0.72 0.17 45)`): the site's only accent. Filled buttons, links, active nav state, focus rings, the homepage hero glow. In light mode this deepens to a darker ember (`oklch(0.5 0.18 40)`) to hold contrast against the off-white — same hue, opposite end of the ramp, same rule as before.

### Neutral
- **Machine Black** (`oklch(0.16 0.014 255)`): page background, dark mode (default theme). Light mode: true off-white `oklch(0.985 0.002 90)` — zero warm tint, not cream.
- **Machine Surface** (`oklch(0.205 0.014 255)`): card and panel surfaces, one step up from the page.
- **Machine Surface 2** (`oklch(0.24 0.014 255)`): the brightest surface step, used sparingly.
- **Machine Surface Offset** (`oklch(0.225 0.017 255)`): offset surface for hover states and subtle containers.
- **Machine Divider** (`oklch(0.32 0.015 255)`): dividers between list rows and sections.
- **Machine Border** (`oklch(0.38 0.017 255)`): borders on cards, inputs, buttons.
- **Human Text** (`oklch(0.93 0.012 80)`): primary text — a warm off-white, not a cold white, against the cool-black system.
- **Human Text Muted** (`oklch(0.72 0.015 75)`): secondary/muted text.
- **Human Text Faint** (`oklch(0.58 0.017 70)`): tertiary text (timestamps, footnote-weight labels).
- **Signal Error** (`oklch(0.64 0.2 22)`): form validation errors only. Never decorative. Kept far enough from Ember's hue (45 vs 22) to stay distinguishable at a glance.
- **On Ember** (`oklch(0.16 0.014 255)`): text printed on top of Ember (button labels) — the machine-black color reused, so ember buttons read as "dark ink on a warm glow," not "white on orange."

### Named Rules
**The One Ink Rule.** There is exactly one accent color. It never gains a second hue — no complementary blue, no success-green, no gradient. Warmth and hierarchy come from value and saturation steps within the same ember-and-machine family, not from additional hues.

**The Dark-First Rule.** Dark is the default theme (`<html data-theme="dark">` is the static fallback; the inline theme script only switches to light on an explicit `prefers-color-scheme: light` or a stored preference). Light mode is a fully-supported, equally-polished alternate — never treat it as an afterthought — but it is not what a new visitor sees by default.

## 3. Typography

**Family:** Literata (variable, optical-size axis 7–72pt), with Georgia/Times New Roman fallback.

**Character:** One serif family, deliberately, carrying both literary prose and interface chrome. Literata was designed for on-screen book reading (commissioned for Google Play Books) — it has real small-caps and oldstyle-figure OpenType support, and its optical-size axis sharpens automatically at display sizes and softens at body sizes. This is a considered single-family choice per the brand register's own guidance ("you often don't need a second font") — not a shortcut. UI chrome (nav, labels, buttons) is differentiated from prose by size, weight, and letter-spacing, not by switching families.

### Hierarchy
- **Hero** (600, `clamp(2.5rem, 1.5rem + 5vw, 5rem)`, 1.05, letter-spacing -0.01em): the homepage's one oversized opening line only.
- **Display** (600, `clamp(2rem, 1.2rem + 2.5vw, 3.5rem)`, 1.2): collection landing titles (Moral Arithmetic).
- **Headline** (600, `clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem)`, 1.25): article/story h1, homepage feature title.
- **Title** (600, `clamp(1.125rem, 1rem + 0.75vw, 1.5rem)`, 1.3): section h2/h3, story-entry headings.
- **Body** (400, `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`, 1.65–1.8): story and essay prose, capped at 72ch.
- **Label** (500, `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)`): nav links, meta lines, button text — same family as prose, differentiated by size/weight/spacing only.

### Named Rules
**The One Family Rule.** Every role — prose, headline, nav, button — is Literata. No second sans-serif is introduced for UI chrome. Hierarchy comes from size, weight, and letter-spacing, never from switching typefaces.

## 4. Elevation

Flat by default, flat everywhere. No `box-shadow` anywhere in the system, including on cover images and cards. The homepage hero panel's "glow" is a `radial-gradient` background tint, not a shadow — it reads as ambient light, not as an elevated surface. Depth and separation come from a 1px border (Machine Border) or a background-tint step (Machine Surface Offset vs. Machine Surface), never from a shadow.

### Named Rules
**The Flat Page Rule.** No `box-shadow` anywhere in the system. A book cover sits on the page the way a photograph sits in a paper book: bordered, not lit from below.

## 5. Components

Restrained and confident: outlined at rest, filled only on hover or as the one primary CTA per view — same discipline as before, now expressed in ember rather than brown.

### Buttons
- **Shape:** `border-radius: 0.375rem` (Machine-Border-bordered rectangle, never pill-shaped).
- **Primary** (`.btn-primary`, `.ml-subscribe-wrap button.primary`): filled Ember background, On-Ember (near-black) text, 1px Ember border. Reserved for the single most important action on a view.
- **Outline** (`.cta-link`, `.pub-buy-btn`, `.contact-submit`): transparent background, Ember text and border at rest; fills to solid Ember with On-Ember text on hover. The default button — most actions on the site are outline, not primary.
- **Hover / Focus:** color/background transition over 180ms (`cubic-bezier(0.16, 1, 0.3, 1)`, ease-out-quint); focus-visible gets a 2px Ember outline offset 2–3px.
- **Disabled:** explicit muted colors (Human Text Muted / Machine Border) at full opacity — never opacity-faded, since fading an already-midtone color toward the background drops below AA contrast.

### Cards / Containers
- **Corner Style:** 0.375–0.5rem radius.
- **Background:** Machine Surface on Machine Black, or Machine Surface Offset for nested/offset contexts.
- **Shadow Strategy:** none, per the Flat Page Rule.
- **Border:** 1px Machine Border.

### Inputs / Fields
- **Style:** Machine Surface background, 1px Machine Border, `md` radius.
- **Focus:** border shifts to Ember, plus a 3px Ember-tinted glow (`box-shadow: 0 0 0 3px var(--color-primary-highlight)`) — the one intentional exception to the Flat Page Rule, since it communicates focus state, not elevation.
- **Error:** border switches to Signal Error; error text below the field, also Signal Error.

### Navigation
- **Style:** Label-weight Literata, Human Text Muted at rest, Human Text on hover, Human Text + medium weight for the active/current page.
- **Logo:** `white-space: nowrap` and `flex-shrink: 0` — the header bar widened to `--content-wide` (60rem) to fit "Moral Arithmetic" as a full nav item without squeezing the logo into wrapping.

### Homepage Hero Panel (signature component)
- **Structure:** a single, restrained (`--text-2xl`) opening line inside a `.hero-panel.hero-panel--quiet` container with a radial-gradient ember glow anchored top-left, fading to transparent — no sub-line. The free-story feature block sits immediately below, outside the glow panel, so the reading pitch reaches the top of the page with minimal scroll.
- **Motion:** the hero line and the feature block each rise and fade in on load (`translateY(14px)` → `0`, `opacity: 0` → `1`, 700ms ease-out-expo, staggered ~90ms apart). This is the site's one deliberate signature motion moment — everything else is instant/transition-only. Respects `prefers-reduced-motion: reduce` (animation removed entirely, content shows at its final state immediately).
- **Scope:** this panel and its glow appear once, on the homepage only. Every other page stays in the flat, un-glowing register.
- **Rationale:** an earlier, taller two-line hero was tried and rejected — it pushed the free story below a full screen of copy on mobile before any reading content appeared. The quiet, single-line version keeps the voice but gets out of the way faster.

### Book Strip (secondary-commerce component)
- **Structure:** a compact horizontal `.book-strip` — cover thumbnail, date/availability label (Ember), title, one-line hook, and a single outline CTA — inside an Ember-bordered, Ember-tinted (6% wash) container. Stacks vertically, centered, under 560px.
- **Purpose:** presents the forthcoming debut collection on the homepage as *confidently secondary* — distinct enough to read as intentional, not the same demoted `.feature-secondary` card reused on About. Still visually subordinate to the free story above it: outline button only, no filled CTA competing with "Send me the story."
- **Scope:** homepage only, directly below the free-story feature block. `.feature-secondary` (the plainer bordered card, no Ember tint) remains the correct component for anthology-credit listings on About.

## 6. Do's and Don'ts

### Do:
- **Do** keep exactly one accent hue (Ember) — all hierarchy comes from value/tint steps, not new hues.
- **Do** default to dark; treat light as an equally-finished alternate, not an afterthought.
- **Do** use outline buttons as the default and reserve the filled primary button for one action per view.
- **Do** separate surfaces with a 1px Machine-Border or a Surface-Offset tint, never a shadow.
- **Do** cap prose measure at 65–75ch and set disabled-state colors explicitly rather than via opacity.
- **Do** keep the hero-glow motion moment singular — the homepage only, not repeated on every page.

### Don't:
- **Don't** add a second accent color, a gradient, or "success green" / "info blue" semantic colors.
- **Don't** use `box-shadow` on cards, cover images, or buttons — the one exception is the input focus ring, which communicates state rather than elevation.
- **Don't** reach for pulp genre-fiction styling: busy hero banners, stock sci-fi imagery, collage-style cover art treatments.
- **Don't** reach for SaaS marketing gloss: gradient text, hero-metric templates, uppercase tracked eyebrows over every section, identical icon-card grids, numbered feature scaffolding.
- **Don't** introduce a second typeface for UI chrome — Literata carries every role.
- **Don't** stack more than one filled/primary button in the same view.
- **Don't** repeat the hero-panel glow/motion treatment on other pages — it's a homepage-only signature, not a reusable pattern.
