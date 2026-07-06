---
layout: default
---

<h1 class="sr-only">T. H. Mercer — speculative fiction and essays</h1>

<p class="site-intro">I'm T. H. Mercer — speculative fiction and essays. Stories where things get hard. People who rise to meet them.</p>

<section class="feature-block" aria-labelledby="home-free-title">
  <img
    class="feature-cover"
    src="{{ '/assets/images/pest-control-cover.png' | relative_url }}"
    alt="Pest Control — a story by T. H. Mercer"
    width="140"
    height="210"
    loading="eager"
    decoding="async"
  >
  <div class="feature-body">
    <p class="feature-subtitle">Free short story</p>
    <h2 id="home-free-title" class="feature-title">Pest Control</h2>
    <p class="feature-meta">~6,500 words &middot; speculative fiction &middot; PDF and ePUB</p>
    <p class="feature-hook">An infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time.</p>
    {% include mailerlite-form.html success_text="Check your inbox — your download is on its way." %}
    <p class="feature-more">New stories go to subscribers first — no schedule, no filler. Prefer to sample the writing first? <a href="{{ '/stories/' | relative_url }}">Read something free</a> instead, no email required.</p>
  </div>
</section>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="feature-secondary" aria-labelledby="home-ma-title">
  <a href="{{ ma.landing | relative_url }}" class="feature-cover-link">
    <img
      class="feature-secondary-cover"
      src="{{ ma.cover | relative_url }}"
      alt="{{ ma.cover_alt }}"
      width="104"
      height="156"
      loading="lazy"
      decoding="async"
    >
  </a>
  <div class="feature-body">
    <p class="feature-subtitle">{{ ma.subtitle }}</p>
    <h2 id="home-ma-title" class="feature-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h2>
    {% if ma.date_label %}
    <p class="feature-meta">{{ ma.date_label }}</p>
    {% endif %}
    {% if ma.hook %}
    <p class="feature-hook">{{ ma.hook }}</p>
    {% endif %}
    {% if ma.url %}
    <div class="feature-actions">
      <a href="{{ ma.url }}" class="cta-link" target="_blank" rel="noopener">{{ ma.cta_label | default: "Pre-order" }} <span class="sr-only">(opens in a new tab)</span></a>
    </div>
    {% endif %}
  </div>
</section>
{% endif %}

<ul class="post-list">
  <li><a href="{{ '/stories/' | relative_url }}">Stories</a><div class="post-excerpt">Short stories, mostly speculative.</div></li>
  <li><a href="{{ '/essays/' | relative_url }}">Essays</a><div class="post-excerpt">When an idea needs more room than a post.</div></li>
</ul>

<p class="site-intro">That's everything, for now — more stories are always in the works.</p>
