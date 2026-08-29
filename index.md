---
layout: default
---

<h1 class="sr-only">T. H. Mercer — speculative fiction and essays</h1>

<section class="hero-panel">
  <p class="hero-line hero-line--quiet">Stories where things get hard. People who rise to meet them.</p>
</section>

<section class="feature-block feature-block--hero" aria-labelledby="home-free-title">
  <img
    class="feature-cover"
    src="{{ '/assets/images/pest-control-cover.webp' | relative_url }}"
    alt="Pest Control — a story by T. H. Mercer"
    width="600"
    height="894"
    loading="eager"
    decoding="async"
  >
  <div class="feature-body">
    <h2 id="home-free-title" class="feature-title">Pest Control</h2>
    <p class="feature-meta">Free &middot; ~6,500 words &middot; speculative fiction</p>
    <p class="feature-hook">When an infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time — she and her neighbors start pulling on the thread.</p>
    <div class="feature-actions">
      <a href="{{ '/2026/pest-control/' | relative_url }}" class="btn-primary">Read the story</a>
    </div>
    <p class="feature-more">New stories go to the <a href="{{ '/free/' | relative_url }}">mailing list</a> first. Subscribers also get <em>Pest Control</em> as a PDF and ePUB.</p>
  </div>
</section>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="book-strip" aria-labelledby="home-ma-title">
  <img
    class="book-strip-cover"
    src="{{ ma.cover | relative_url }}"
    alt=""
    width="88"
    height="144"
    loading="lazy"
    decoding="async"
  >
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
  </div>
</section>
{% endif %}

<p class="site-intro">That's everything, for now. More stories are always in the works. Browse it all on <a href="{{ '/writing/' | relative_url }}">Writing</a>.</p>
