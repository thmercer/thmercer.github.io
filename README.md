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

Posts use one of two layouts:

| Layout | Use | Schema.org type (custom block in `_includes/jsonld.html`) |
|--------|-----|-------------------------------------------------------------|
| `essay` | Nonfiction / commentary | `BlogPosting` |
| `story` | Fiction | `ShortStory` |

The home page (`index.md`) emits a `Person` graph (with `sameAs` from `social.links` in `_config.yml`). The About page emits `AboutPage` with `mainEntity` pointing at the same person.

**Optional front matter on posts**

- `about` — list of topic strings (maps to `about` as `Thing` entities in JSON-LD).
- `keywords` — list of strings (essays only; joined into `BlogPosting.keywords`).
- `genre` — list of strings (stories only; `ShortStory.genre`).

Author name and profile URLs come from `author` and `social.links` in `_config.yml`.

## GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment**

- **Source:** Deploy from a branch  
- **Branch:** `main`, folder **`/` (root)**

After the first successful deploy, the site is available at https://thmercer.com (custom domain via `CNAME`; GitHub may still redirect from https://thmercer.github.io).
