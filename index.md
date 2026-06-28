---
layout: default
---

<h1 class="sr-only">T. H. Mercer — speculative fiction and essays</h1>

<p class="site-intro">I'm T. H. Mercer — speculative fiction and essays. Stories where things get hard. People who rise to meet them.</p>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="feature-block" aria-labelledby="home-ma-title">
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
    <p class="feature-eyebrow">{{ ma.subtitle }}</p>
    <h2 id="home-ma-title" class="feature-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h2>
    {% if ma.date_label %}
    <p class="feature-meta">{{ ma.date_label }}</p>
    {% endif %}
    {% if ma.hook %}
    <p class="feature-hook">{{ ma.hook }}</p>
    {% endif %}
    <div class="feature-actions">
      <a href="{{ ma.landing | relative_url }}" class="cta-link">View collection</a>
      {% if ma.url %}
      <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">{{ ma.cta_label | default: "Pre-order" }}</a>
      {% endif %}
    </div>
    <p class="feature-more">Also in anthologies — <a href="{{ '/stories/' | relative_url }}">Stories</a></p>
  </div>
</section>
{% endif %}

<section class="reader-magnet" aria-labelledby="rm-heading">
  <img
    class="reader-magnet-cover"
    src="{{ '/assets/images/pest-control-cover.png' | relative_url }}"
    alt="Pest Control — a story by T. H. Mercer"
    width="140"
    height="210"
    loading="eager"
    decoding="async"
  >
  <div class="reader-magnet-body">
    <p class="feature-eyebrow">Free short story</p>
    <h2 id="rm-heading" class="feature-title">Pest Control</h2>
    <p class="feature-meta">~6,500 words &middot; speculative fiction &middot; PDF and ePUB</p>
    <p class="feature-hook">An infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time.</p>
    {% include mailerlite-form.html success_text="Check your inbox — your download is on its way." %}
    <p class="feature-more">New stories go to subscribers first — no schedule, no filler.</p>
  </div>
</section>

<ul class="post-list">
  <li><a href="{{ '/stories/' | relative_url }}">Stories</a><div class="post-excerpt">Short stories, mostly speculative.</div></li>
  <li><a href="{{ '/essays/' | relative_url }}">Essays</a><div class="post-excerpt">When an idea needs more room than a post.</div></li>
</ul>
