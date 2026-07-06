---
layout: default
---

<h1 class="sr-only">T. H. Mercer — speculative fiction and essays</h1>

<section class="hero-panel hero-panel--quiet">
  <p class="hero-line hero-line--quiet">Stories where things get hard. People who rise to meet them.</p>
</section>

<section class="feature-block feature-block--hero" aria-labelledby="home-free-title">
  <picture>
    <source srcset="{{ '/assets/images/pest-control-cover.webp' | relative_url }}" type="image/webp">
    <img
      class="feature-cover"
      src="{{ '/assets/images/pest-control-cover.png' | relative_url }}"
      alt="Pest Control — a story by T. H. Mercer"
      width="140"
      height="210"
      loading="eager"
      decoding="async"
    >
  </picture>
  <div class="feature-body">
    <p class="feature-subtitle">Free short story</p>
    <h2 id="home-free-title" class="feature-title">Pest Control</h2>
    <p class="feature-meta">~6,500 words &middot; speculative fiction &middot; PDF and ePUB</p>
    <p class="feature-hook">An infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time.</p>
    {% include mailerlite-form.html success_text="Check your inbox — your download is on its way." %}
    <p class="feature-more">New stories go to subscribers first — no schedule, no filler. Prefer to sample the writing first? <a href="{{ '/writing/' | relative_url }}">Read something free</a> instead, no email required.</p>
  </div>
</section>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="book-strip" aria-labelledby="home-ma-title">
  <a href="{{ ma.landing | relative_url }}" class="feature-cover-link">
    <img
      class="book-strip-cover"
      src="{{ ma.cover | relative_url }}"
      alt="{{ ma.cover_alt }}"
      width="88"
      height="132"
      loading="lazy"
      decoding="async"
    >
  </a>
  <div class="book-strip-body">
    {% if ma.date_label %}
    <p class="book-strip-label">{{ ma.date_label }}</p>
    {% endif %}
    <h2 id="home-ma-title" class="book-strip-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h2>
    {% if ma.hook %}
    <p class="book-strip-hook">{{ ma.hook }}</p>
    {% endif %}
    {% if ma.url %}
    <a href="{{ ma.url }}" class="cta-link">{{ ma.cta_label | default: "Pre-order" }} <span class="sr-only">(opens in a new tab)</span></a>
    {% endif %}
  </div>
</section>
{% endif %}

<p class="site-intro">That's everything, for now — more stories are always in the works. Browse it all on <a href="{{ '/writing/' | relative_url }}">Writing</a>.</p>
