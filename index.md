---
layout: default
---

<h1 class="sr-only">T. H. Mercer — speculative fiction and essays</h1>

<section class="hero-panel hero-panel--quiet">
  <p class="hero-line hero-line--quiet">Stories where things get hard. People who rise to meet them.</p>
</section>

<!-- LAUNCH WEEK 2026-07-16: Moral Arithmetic takes the hero treatment (feature-block--hero,
     filled .btn-primary CTA); the free-story block shrinks to the compact book-strip
     treatment and its inline signup form is replaced with a link to /subscribe/ (same
     pattern as _includes/newsletter-cta.html). To revert after launch week: `git log
     --oneline -- index.md` and revert this commit, or swap the two sections' markup
     back (search LAUNCH WEEK) — Pest Control returns to feature-block--hero with the
     inline mailerlite-form include, Moral Arithmetic returns to book-strip. -->
{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="feature-block feature-block--hero" aria-labelledby="home-ma-title">
  <a href="{{ ma.landing | relative_url }}" class="feature-cover-link">
    <img
      class="feature-cover"
      src="{{ ma.cover | relative_url }}"
      alt="{{ ma.cover_alt }}"
      width="140"
      height="210"
      loading="eager"
      decoding="async"
    >
  </a>
  <div class="feature-body">
    {% if ma.date_label %}
    <p class="feature-subtitle">{{ ma.date_label }}</p>
    {% endif %}
    <h2 id="home-ma-title" class="feature-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h2>
    {% if ma.hook %}
    <p class="feature-hook">{{ ma.hook }}</p>
    {% endif %}
    <div class="feature-actions">
      {% if ma.url %}
      <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">{{ ma.cta_label | default: "Pre-order" }} <span class="sr-only">(opens in a new tab)</span></a>
      {% endif %}
      <a href="{{ ma.landing | relative_url }}" class="cta-link">More about the collection</a>
    </div>
  </div>
</section>
{% endif %}

<section class="book-strip" aria-labelledby="home-free-title">
  <a href="{{ '/subscribe/' | relative_url }}" class="feature-cover-link">
    <picture>
      <source srcset="{{ '/assets/images/pest-control-cover.webp' | relative_url }}" type="image/webp">
      <img
        class="book-strip-cover"
        src="{{ '/assets/images/pest-control-cover.png' | relative_url }}"
        alt="Pest Control — a story by T. H. Mercer"
        width="88"
        height="132"
        loading="lazy"
        decoding="async"
      >
    </picture>
  </a>
  <div class="book-strip-body">
    <p class="book-strip-label">Free short story</p>
    <h2 id="home-free-title" class="book-strip-title">
      <a href="{{ '/subscribe/' | relative_url }}">Pest Control</a>
    </h2>
    <p class="book-strip-hook">An infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time.</p>
    <a href="{{ '/subscribe/' | relative_url }}" class="cta-link">Get the free story <span class="sr-only">(email required)</span></a>
  </div>
</section>
<!-- END LAUNCH WEEK promotion -->

<p class="site-intro">That's everything, for now — more stories are always in the works. Browse it all on <a href="{{ '/writing/' | relative_url }}">Writing</a>.</p>
