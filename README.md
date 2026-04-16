# thmercer.github.io

Jekyll site for [GitHub Pages](https://pages.github.com/), using the [`github-pages`](https://github.com/github/pages-gem) gem so local builds match GitHub.

## Local preview

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000.

Without a local Ruby toolchain, you can use Docker (from this directory):

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/app -w /app ruby:3.2-bookworm bash -lc \
  "gem install bundler --no-document && bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

## GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment**

- **Source:** Deploy from a branch  
- **Branch:** `main`, folder **`/` (root)**

After the first successful deploy, the site is available at https://thmercer.github.io
