# thmercer.github.io

Jekyll site for [GitHub Pages](https://pages.github.com/), using the [`github-pages`](https://github.com/github/pages-gem) gem so local builds match GitHub.

## Local preview

**Use an HTTP URL.** Built pages use **site-root-relative** URLs (paths beginning with `/` for CSS, navigation, and assets). Opening `_site/**/*.html` via `file://` resolves those against the machine root, not the file’s directory, so stylesheets and many links will not load. Liquid’s `relative_url` filter keeps URLs correct when `baseurl` is set (for example project Pages); it does **not** produce `file://`-safe paths. Use `jekyll serve` (below) for an accurate preview.

### Docker (recommended)

From the repo root:

```bash
chmod +x bin/jekyll   # once
./bin/jekyll build    # writes _site/
./bin/jekyll serve    # foreground on :4000, Ctrl-C to stop
```

Gems are cached under `vendor/bundle/` (gitignored).

### LAN preview from the Home Lab dev VM

The server binds `0.0.0.0` and publishes ports **4000** (HTTP) and **35729**
(LiveReload) on the host, so any machine on the LAN can open it. Run it
detached so it survives SSH disconnects:

```bash
./bin/jekyll start    # start detached, auto-restarts on reboot
./bin/jekyll status   # show state + reachable URLs
./bin/jekyll logs     # follow server logs
./bin/jekyll stop     # stop + remove the container
./bin/jekyll restart  # stop, then start
./bin/jekyll check    # smoke test — crawl every page + asset, report 404s
```

### Pre-push hook

A version-controlled `pre-push` hook under `.githooks/` runs `./bin/jekyll
check` automatically and aborts the push if the crawl finds a broken link
or missing asset. Enable it once per clone:

```bash
git config core.hooksPath .githooks
```

Bypass on demand:

```bash
SKIP_JEKYLL_CHECK=1 git push   # one-off
git push --no-verify           # also skips all hooks
```

From your desktop on the same network, open one of:

- `http://<dev-vm-ip>:4000`
- `http://<dev-vm-hostname>.local:4000` (if mDNS/Avahi is available)

LiveReload auto-refreshes the page when you edit a file. Override ports with
`JEKYLL_HTTP_PORT` / `JEKYLL_LR_PORT` if 4000 / 35729 are taken.

### Native Ruby

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000.

## Content types and SEO (JSON-LD)

Posts use one of three layouts:

| Layout | Use | Schema.org type (custom block in `_includes/jsonld.html`) |
|--------|-----|-------------------------------------------------------------|
| `essay` | Nonfiction / commentary | `BlogPosting` |
| `story` | Free fiction on site | `ShortStory` |
| `anthology` | Paid anthology credit (no story text) | `ShortStory` (`isAccessibleForFree: false`) |

The home page (`index.md`) emits a `Person` graph (with `sameAs` from `social.links` in `_config.yml`). The About page emits `AboutPage` with `mainEntity` pointing at the same person.

**Optional front matter on posts**

- `about` — list of topic strings (maps to `about` as `Thing` entities in JSON-LD).
- `keywords` — list of strings (essays only; joined into `BlogPosting.keywords`).
- `genre` — list of strings (stories only; `ShortStory.genre`).
- `word_count` — optional integer override for Fiction/Essays listing word counts. Omit to auto-count from the post body (rounded to the nearest 100).

Author name and profile URLs come from `author` and `social.links` in `_config.yml`.

### Fiction posts (`layout: story`)

Use this structure for each new story under `_posts/` (filename `YYYY-MM-DD-slug.md`).

1. **YAML front matter:** `layout: story`, `title`, `date`, plus **`genre`** and **`about`** as arrays of short strings. Treat `genre` as shelf- or mode-style labels (for example Hopepunk, cli-fi) and `about` as thematic keywords (for example human interconnectedness, grief, consent). They map to `ShortStory` JSON-LD as documented above.
2. **`availability`** (optional, off by default): When `fiction_availability_badges` is `true` in `_config.yml`, the Fiction listing shows a **Free** or **In Anthology** badge per story. Omit `availability` (or set `availability: free`) for free-to-read posts; set `availability: anthology` for paid anthology entries surfaced in the feed.
3. **`listing_hook`:** Strongly recommended — a one-line, spoiler-free blurb in markdown. The home page uses `listing_hook` when present; if you omit it, the auto-generated excerpt can be poor when the body begins with raw HTML.
4. **Dust jacket:** Right below the front matter, before the story text, add a **1–2 sentence** spoiler-free teaser that explicitly names the author (**T. H. Mercer**, matching `author.name` in `_config.yml`), the story’s **genre** in plain language (aligned with `genre`), and **core themes** (aligned with `about`). Wrap it in HTML `<details>` **without** the `open` attribute so it stays collapsed by default. Give `<summary>` a clear label (for example “Dust jacket” or “About this story”).

**Kramdown:** raw HTML in the body is fine. Avoid starting the first markdown paragraph immediately after `</details>` on the same line as a list marker, which can confuse the parser.

Example skeleton:

```markdown
---
layout: story
title: "Your Title"
date: 2026-04-22
genre:
  - "Hopepunk"
about:
  - "Human interconnectedness"
  - "Mutual aid"
listing_hook: "One spoiler-free line for the home page listing."
---

<details>
<summary>Dust jacket</summary>
<p>…one or two sentences naming T. H. Mercer, the genre, and the themes…</p>
</details>

First paragraph of the story…
```

### Anthology entries (`layout: anthology`)

Use for stories published in paid anthologies — Option A from the publication mockup. No story text on site; the page is context plus a buy link. These posts appear on the Fiction listing alongside free stories (with an **In Anthology** badge when `fiction_availability_badges` is enabled).

1. **YAML front matter:** `layout: anthology`, `title`, `date`, **`anthology`** (collection title). Optional: `editor`, `press`, `anthology_year` (defaults to `date` year), `buy_url`, `cta_label`, `footer_note`, `listing_hook`, `word_count` (recommended — body is usually a short blurb), `genre`, `about`.
2. **Body:** One or two spoiler-free paragraphs describing the story (not the story itself).

Example skeleton:

```markdown
---
layout: anthology
title: "How the Herd Remembers Its Wolves"
date: 2025-11-01
anthology: "Strange Migrations"
editor: "Fiona Kwan"
press: "Wyrm & Thorn Press"
buy_url: "https://example.com/strange-migrations"
cta_label: "Buy Strange Migrations"
listing_hook: "A generation ship learns what it lost when it left predators behind."
word_count: 4800
genre:
  - "Science fiction"
about:
  - "Generation ships"
  - "Fear and survival"
---

A generation ship three centuries into its crossing has no predators. Which means it also has no fear…
```

## GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment**

- **Source:** Deploy from a branch  
- **Branch:** `main`, folder **`/` (root)**

After the first successful deploy, the site is available at https://thmercer.com (custom domain via `CNAME`; GitHub may still redirect from https://thmercer.github.io).
