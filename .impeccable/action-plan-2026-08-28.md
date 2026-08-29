# Action Plan — from `/impeccable critique` (entire site), 2026-08-28

Critique snapshot: `.impeccable/critique/2026-08-28T22-51-52Z__entire-site.md`
Score: **31/40** (trend: 29 → 33 → 31). AI-slop verdict: **not slop** — the "Ember in the
Machine" design language is a real POV, executed with discipline. **Do not restyle it.**
Everything below is structural / content / reliability work that leaves the visual system intact.

## User decisions (2026-08-28)

1. **Priority order:** `/about/` credibility scan **first**.
2. **Free story:** **ungate it entirely** — host the full text of *Pest Control* to read on-site;
   change the email ask from "get *this* story" to "get the *next* one."
3. **Scope:** everything in Priority Issues **plus** all Minor Observations.

## Status

- **Step 1 (`layout` /about/) — DONE 2026-08-29.** Visible identity header
  (portrait + `<h1>` name + tagline from new `about.md` front-matter `tagline:`);
  sr-only h1 removed; lead paragraph now full-ink `--text-lg` via
  `.about-body > p:first-of-type`. Publications split into "Available now" /
  "Coming soon" groups driven by a new `status:` field in `publications.yml`
  (out | preorder | forthcoming). Placeholder covers redesigned as quiet
  typographic stand-ins (no broken-image icon); `.pub-entry-cover--logo` /
  `cover_logo` removed entirely (Exit Conditions now uses the placeholder), and
  the `#fff` detector ignore was removed with it. MA feature-block CTA demoted
  from `.btn-primary` to `.cta-link` (both actions now outline). Verified 1280 +
  390; heading outline h1→h2→h3→h4 clean.
- **Step 2 (`shape` — ungate the story) — DONE 2026-08-29.** Manuscript pasted
  verbatim from `~/pest-control/text/pest-control.md` (a separate publishing
  repo, not `~/writing-desk`) into `_posts/2026-06-23-pest-control.md`:
  `link:` removed, `availability: email → free`, `description:` added for social
  cards. `article hr` scene-break ornament added (❦, matches the details
  flourish). `/free/` reframed as the newsletter page (URL kept per user):
  story is free to read, subscribing adds PDF+ePUB + new fiction first;
  MailerLite button "Send me the story" → "Subscribe" (now a param).
  `newsletter-cta.html` reframed + the "Free story" eyebrow deleted (element +
  CSS). Homepage hero recomposed: the story's opening paragraph as running
  prose + "Keep reading Pest Control →" inside the glow panel; feature block
  → newsletter signup; hero-panel width/left-edge aligned to the content
  column (closes the step-6 P2). `.feature-subtitle` kicker removed from the
  homepage + `/free/` (still on `/about/`'s MA block — step 5). Badge
  `Free by Email → Free`. Verified: story renders in full (6.5k words, 13
  scene breaks), feed.xml now carries the full text (was empty CDATA),
  `bin/jekyll check` clean. Displaced: the old homepage tagline "Stories where
  things get hard. People who rise to meet them." — not currently anywhere;
  re-add on `/about/` or `/writing/` if wanted.
  Hero glow made theme-aware (`--hero-glow` token: 22% ember in dark, 8% in
  light — the dark ember over near-white needed a far smaller share);
  `.pub-entry-cover--placeholder` moved to `--color-surface-2` + `--color-border`
  so it holds definition in light mode too. Both themes screenshot-verified.
  PDF + ePUB confirmed present in MailerLite (author) — the "PDF and ePUB"
  copy stands.

- **Step 2 follow-ups (2026-08-29, after author review):**
  - Homepage reverted to the **minimal-change** version: the "Stories where
    things get hard. People who rise to meet them." tagline is back as the
    quiet `.hero-line--quiet`; the feature block keeps its cover + hook and
    the CTA is "Read the story" (→ the now-readable post), with a quiet
    `.feature-more` line pointing at the mailing list. The "opening prose in
    the hero" experiment is gone; `.hero-excerpt` / `.hero-continue` CSS
    removed, `.hero-line` restored.
  - **Hero-panel geometry reverted to the shipped/live version** —
    `--content-wide` + `space-12/8/2` padding + `border-radius` +
    `.hero-panel--quiet`. The step-6 "P2 left-edge alignment" fix I tried in
    step 2 (`--content-max`, 0 side padding) squeezed the display tagline into
    the 42rem column and forced an ugly 3-line wrap; the outdented display
    line is a deliberate grid break, not a bug. **P2 alignment: WON'T FIX —
    verified the misalignment reads as intentional.** Only keeper from that
    pass: the `--hero-glow` theme token (16% dark / 7% light), which fixes the
    light-mode pink-block glow.
  - **Pest Control dust jacket** added — the same `<details><summary>Dust
    jacket</summary>` block the other on-site stories carry, plus `keywords:`
    front matter.
  - **`ShortStory` JSON-LD** (`_includes/jsonld.html`) gained
    `isAccessibleForFree` (computed from `availability`/`link`), `description`,
    `wordCount`, and `keywords` — AEO signal for every story, not just this one.
  - **MA cover stretch fixed** — `.collection-cover-static` was rendering the
    `height` attribute I added in the harden step as a literal pixel height
    (5× too tall). Added `height: auto` to the shared cover rule; video gets
    `height: 100% / object-fit: cover`. `book-strip-cover` height attr
    corrected to the real 600×982 ratio.
  NOT touched: `~/pest-control` repo; the prose itself.
  - **Image weight (2026-08-29).** `slayer-anthology-cover.png` was 6.5 MB
    (1600×2560) for a cover that renders at ≤120px. Converted the oversized
    raster covers to webp (`slayer` 126 KB @900w, `pet-monsters` 39 KB),
    repointed `publications.yml`, dropped the `<picture>`/PNG fallback on the
    two Pest Control cover uses (webp is Baseline; the rest of the site
    already uses bare `.webp`). Deleted 5 orphaned raster sources
    (`slayer…png`, `pet-monsters…png`, `moral-arithmetic-stories-cover.jpg`,
    both `the-ones-behind-the-bookshelves*`). `assets/images/` 8 MB → 504 KB.
    `bin/jekyll check` clean.
- **Step 3 (`harden`) — DONE 2026-08-28.** Commits: contact false-success fixed
  (`useDefaultStyles:false` + `[data-fs-active]` rules in `main.css`); `/DESIGN/` +
  `/PRODUCT/` excluded from the build (gone from sitemap); MailerLite raw-form submit
  guarded synchronously with replay-on-ready; `scroll-behavior` and the MA cover-video
  script both gated on `prefers-reduced-motion`; `.collection-cover` given intrinsic
  `width`/`height`. Verified on the live preview. (The `#fff` logo-plate ignore
  added here was removed in step 1 when the logo-plate code was deleted.)
- **Steps 4–6 — DONE 2026-08-29** (folded together in one pass):
  - **4 (clarify):** `/moral-arithmetic/` second "Get your copy" demoted
    `.btn-primary` → `.cta-link` (one filled action per page). Newsletter
    naming + `.subscribe-signup-pitch` trim already done in step 2. Em-dash
    comma-splices cleaned in `index.md`, `free.html`, `writing.md` microcopy
    (kept legitimate appositive dashes and the author's bio voice in
    `about.md`). The `/writing/` `em-dash-overuse` detector hit that remains
    is the concatenated per-story `listing_hook` blurbs — the author's copy
    for each piece, out of scope for a microcopy pass; advisory-only.
  - **5 (typeset):** `.newsletter-cta-label` eyebrow removed (step 2).
    `.collection-stories-label` "STORIES" → a real `<h2>` in the display
    face, not tracked-uppercase (story titles bumped h2→h3 to keep the
    outline sane). `.collection-byline` de-shouted (no uppercase/tracking —
    it's a name). `.subscribe-helper` capped at 52ch. `.feature-subtitle`
    "Free short story" kicker on the homepage LEFT AS-IS — it's the shipped
    pattern and the user asked for minimal homepage change; revisit only if
    the author wants it gone.
  - **6 (polish):** `:focus-visible` outline extended to `button`, `summary`,
    `[tabindex]` (previously links only). `.site-nav a` touch target 23px →
    39px (padding + negative margin, no layout shift); `.theme-toggle`
    32px → 40px. `/writing/` intro cut from 3 stacked grey paragraphs to 1.
    DESIGN.md `--color-border` doc corrected to the shipped `oklch(0.53 …)`.
    `.pub-entry-cover--placeholder` (step 1) and the hero-panel P2 (won't-fix,
    above) already resolved.
  - **Deferred (low value, working as-is):**
    - `.collection-cover-wrap` is still `<div role="button" tabindex="0">`
      rather than a real `<button>` — it's keyboard-operable and labelled;
      the only gap is no visible "play" affordance on the cover. Cosmetic.
    - h1 policy: `/404` shows a visible `<h1>`, content pages keep `sr-only`
      h1s (`/about/` now has a visible one). Not worth churning every page.

## Execution order

### 1. `/impeccable layout about`
The page editors and agents judge credibility on, and currently the worst-scanning page on the site.
- `_layouts/about.html` — give it a **visible display-size `<h1>`** (use the positioning line
  "Former engineer. Occasional cyborg. Storyteller." or the author name). Currently `sr-only`.
- `.about-body > p` — set the **lead paragraph** in `--color-text` at a step up in size; keep only
  subsequent paragraphs at `--color-text-muted`. Right now all 7 bio paragraphs are 7.8:1 grey,
  same size, with no anchor.
- Publications list (`_includes/pub-entry.html`) — tighten rhythm; 7 entries each with
  cover + hook + button + status currently reads as noise, not authority.
- `.pub-entry-cover--placeholder` / `--logo` — two covers ("The Woodsboro Correspondence",
  "Exit Conditions") render as near-blank white boxes. Give "cover pending" an intentional
  treatment that doesn't read as a broken image.
- Calm the status vocabulary — mixed "Available now" / "Pre-order" / "Coming soon · date"
  across six rows.
- Demote the inline "Get your copy" (`about.md`) from `.btn-primary` to outline `.cta-link`
  so the list has one visual weight (also addresses the competing-CTA issue on this page).

### 2. `/impeccable shape` — the ungated-story flow  *(plan before building)*
The big structural change. Resolves **P1: `/2026/pest-control/` blank stub**.
- Host the full text of *Pest Control* on its own permalink (`/2026/pest-control/` — currently
  `_posts/2026-06-23-pest-control.md` has an empty body + `link: /free/`). Shared links, social
  cards, `sitemap.xml`, and `feed.xml` (feed content is currently `<![CDATA[]]>`) must land on
  real prose.
- Rework `/free/` into a **pure newsletter page** — no longer "your free story," now "new fiction
  when it goes up."
- Every subscribe surface — homepage `feature-block--hero`, `_includes/newsletter-cta.html`
  (end of every story/essay), `_includes/mailerlite-form.html` copy, `/free/` — changes the ask
  from "Send me the story" / "Get the story" to **"get the next one."**
- Homepage `index.md` feature block: decide whether it leads with the story's opening paragraph
  as running prose (see critique Q1) or keeps cover + hook, now linking to the readable story.
- Update the `badge-gated` ("Free by Email") badge in `_includes/post-list.html` — Pest Control
  is no longer gated.
- `_includes/newsletter-cta.html` "Free story" eyebrow: fold into #5 (typeset) — it's the one
  real slop tell and the copy changes here anyway.

### 3. `/impeccable harden`
- **P1:** `/contact/` (`contact.html:11-14`) — add `hidden` to `.contact-success` and
  `.contact-global-error`; unhide via the Formspree JS on success/error. Pattern already exists
  in `_includes/mailerlite-form.html` (`style="display:none"` on `.row-success`).
- **P2:** `/DESIGN/` and `/PRODUCT/` are publicly published + in `sitemap.xml`. Add
  `sitemap: false` + `<meta name="robots" content="noindex">` to both front matters, or
  `exclude:` the source `.md` files in `_config.yml` and keep them repo-only.
- MailerLite fallback timing hole (`_includes/mailerlite-form.html`): `preventDefault` on the
  raw form only attaches after the 4000ms `ml_jQuery` poll fails, and the raw form is
  `target="_blank"` — a submit inside that window opens a blank tab with no feedback. Attach
  `preventDefault` immediately; remove it once `ml_jQuery` is confirmed.
- Reduced-motion (PRODUCT.md requires alternatives for *any* motion):
  - `main.css:79` `scroll-behavior: smooth` on `html` is unguarded and fires
    (`/writing/` links to `/about/#publications`). Wrap in
    `@media (prefers-reduced-motion: no-preference)`.
  - `moral-arithmetic.md:55-100` cover-video script (`mouseenter`/`focus`/`click`, 2.5s fade)
    has no reduced-motion check. Also: it's a *second* sustained motion moment vs. DESIGN.md's
    "exactly one" — decide whether it stays.
- CLS: `/moral-arithmetic/` `.collection-cover` (`ma-front-cover-new.webp`) ships with no
  `width`/`height`/`loading`. Every other `<img>` on the site has them.

### 4. `/impeccable clarify`
- Competing filled CTAs: `/moral-arithmetic/` has two identical filled "Get your copy" — keep
  the top one, make the bottom `.cta-link` outline. (`/about/` handled in step 1.)
- One noun for the newsletter: nav "Newsletter" → URL `/free/` → page title "Newsletter" →
  CTA "Send me the story" / "Get the story" all disagree. Pick one. (Coordinate with step 2.)
- Trim `.subscribe-signup-pitch` (`free.html:35`) — it crams "Moral Arithmetic, out now…
  anthologies from Raconteur Press and Dragon Soul Press" into the moment of the ask. One
  calm sentence.
- `em-dash-overuse` copy pass on `index.md`, `free.html`, `about.md`, `writing.md` — the `—`
  is carrying structural load a period or rewrite would carry more quietly.

### 5. `/impeccable typeset`
- `.newsletter-cta-label` "Free story" eyebrow in `_includes/newsletter-cta.html` — the one
  real AI-slop tell, on the most-repeated component (end of every story/essay). Copy changes
  in step 2 anyway; decide if the tracked-uppercase label survives at all.
- `.collection-byline` + `.collection-stories-label` on `/moral-arithmetic/` — two more
  tracked-uppercase bits on one sparse page.
- `.subscribe-helper` (`main.css:1642`) has no `max-width` — ~96 chars/line at ≥1280px.

### 6. `/impeccable polish`  *(final pass — reads the critique snapshot as its backlog)*
- Explicit `:focus-visible` on `.contact-submit`, `.newsletter-cta-submit`,
  `.ml-subscribe-wrap button.primary`, `.theme-toggle` (they fall back to the UA ring; links
  get a 2px ember outline).
- `.collection-cover-wrap` — currently `<div role="button" tabindex="0">` wrapping an `<img>`
  with no visual affordance. Use a real `<button>`; add a play cue.
- Nav tap targets: `.site-nav a` is 23-26px tall — add `padding: var(--space-2) 0` or
  `min-height: 44px` via `inline-flex`. `.theme-toggle` is 32×32.
- `/writing/` — three stacked grey `.site-intro` paragraphs before the first story link.
  Cut to one.
- h1 policy: 404 shows a visible `<h1>` while every content page hides it. Pick one rule
  (step 1 already gives `/about/` a visible h1 — consider extending).
- DESIGN.md ↔ CSS drift: DESIGN.md documents `--color-border: oklch(0.38 0.017 255)`; CSS
  ships `oklch(0.53 0.022 255)` (the correct value — 0.38 would fail 3:1). Update the doc.
- Note for reference: `text-faint` on `--color-bg` is 4.52:1 in dark mode — a hairline AA
  pass for `text-xs`. Any future move of faint text onto a tinted surface fails. The CSS
  already documents four `faint → muted` swaps.

## Then

Re-run `/impeccable critique` (target: "entire site", slug `entire-site`) to confirm the
score moves. Expected wins: heuristics 1 (status), 4 (consistency), 8 (minimalist), 9 (recovery).

---

## Round 2 — from `/impeccable critique` 2026-08-29 (score 26/32, 81%). ALL DONE 2026-08-29.

**P1 — hero glow re-authored.** The glow now paints on `.hero-panel::before`, a
pseudo-element that bleeds well past the panel on every side (`inset: -3rem -18vw
-9rem -10vw`), so the gradient's own edge never lands inside the visible box —
reads as a directional pool of light, not a rectangle. `.page` got
`overflow-x: clip` to contain the sideways bleed (verified: no horizontal
overflow, 8 pages × 5 widths). `--hero-glow` token: 26% ember dark / 15% light.
Tagline `line-height` 1.05 → 1.12 and a lower `--text-2xl` clamp floor so it
wraps to 2 lines desktop / 3 (not 4) at 360–390px.

**P2 — homepage hierarchy.** "Read the story" promoted to `.btn-primary` (the
homepage's one filled action). `.book-strip` quieted: ember border → `--color-divider`,
6% ember wash → `--color-surface`, and it now consolidates to one link (the
title) instead of three tab stops (cover link + title link + "More about the
collection" all removed/merged). `+ margin-bottom` so `.site-intro` no longer
butts its border.

**P2 — dark `--color-text-faint`** `oklch(0.58…)` → `oklch(0.64 0.017 70)`:
now 5.8:1 on bg, 5.3:1 on surface, 4.9:1 on surface-2 — passes AA on every
surface (was 3.8–4.5).

**P2 — eyebrows.** `.feature-subtitle` deleted (element + CSS); "Free" folded
into the homepage `.feature-meta` line, "Debut collection" into the `/about/`
MA meta. `_layouts/anthology.html` `.post-eyebrow` (uppercase + lock icon)
replaced with a plain `.post-availability` line.

**P3 — conversion at the peak.** `newsletter-cta.html` is now a "reward for
finishing" panel: the *Pest Control* cover + "…is yours to keep, PDF and ePUB" +
a filled "Subscribe & get the story" button (still a link to `/free/`, not the
MailerLite widget — kept the weight off every story/essay page). `/free/`
rebuilt subscribe-value-first: cover + "New fiction, first" + one pitch + form +
helper; the story is a small "also free to read on the site" mention in the
helper, no longer a hero re-pitch.

**Minors.** `role="status"` / `role="alert"` on the `/contact/` success/error
swap. `article hr::after` ❦ `text-faint` → `text-muted` (matches
`details[open]::after`). Light `--color-primary` hue 40 → 46 (less brick, more
ember; contrast still 5.9:1 both ways). 404 rebuilt: sized `<h1>`, larger lead,
filled "Read Pest Control" as the primary recovery action. `thmercer-avatar.webp`
1000×1000 → 240×240 (78 KB → 14 KB). `.collection-cover-wrap::after` play-triangle
cue on the MA cover video (hidden under reduced-motion). Nav 2-row mobile wrap
left-aligned (`.site-nav justify-content: flex-start` ≤700px).

**Detector:** two `design-system-color` false positives suppressed in
`.impeccable/config.json` — `rgb(0, 0, 0)` (regex-mode can't resolve
`var(--color-bg)` on the skip link, 18 pages) and `oklch(1 0 0 / 0.7)` (the
play-triangle white, sits on arbitrary cover art). `em-dash-overuse` on
`/writing/` remains (advisory; it's the per-story blurb copy).

**Not done:** h1 policy (404 visible vs content-page sr-only) — left as-is,
not worth churning every page. `.collection-cover-wrap` is still a
`<div role="button">` not a real `<button>` — now has a visible play cue, which
was the actual gap.

---

## Committed + author tweaks — 2026-08-29 (session 2)

- Both critique rounds committed: `a597ade` (the polish pass) + `708f7c9`
  (the two tweaks below). Working tree was fully uncommitted before this.
- **Newsletter over-promise fixed.** Copy had drifted to "new stories go
  to the mailing list first" / "New fiction, first." Not true — stories go
  to **publications** first (magazines/anthologies); the list only
  *announces* new work + carries the *Pest Control* PDF/ePUB perk.
  Reworded: `free.html` (h2 "New fiction, first" → "Word when there's a
  new one"; pitch rewritten), `_includes/newsletter-cta.html`, `index.md`
  `.feature-more`, `about.md`, `writing.md` `.fiction-newsletter-note`,
  `free.html` `description:` meta.
- **Hero glow left edge (P1 residual).** The `::before` gradient still had
  ~7% intensity where `.page`'s `overflow-x: clip` cut it on the left —
  a soft but real vertical edge. Shrank the ellipse and moved its centre
  in from the left (`34% 62% at 33% 36%`, `transparent 74%`,
  `inset: -4rem -16vw -10rem -12vw`) so the falloff completes before the
  clip. Now reads as a soft light pool on every side. Verified 1280 + 390
  × dark + light via Playwright (`/home/teague/amz-categories/.venv`,
  seed `localStorage.theme='light'` — site is dark-first, ignores
  `prefers-color-scheme`).
