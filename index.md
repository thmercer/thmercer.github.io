---
layout: default
---

<p class="site-intro">I'm T. H. Mercer — speculative fiction and essays. Stories where things get hard. People who rise to meet them.</p>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="home-collection-feature" aria-labelledby="home-ma-title">
  <a href="{{ ma.landing | relative_url }}" class="home-collection-cover-link">
    <img
      class="home-collection-cover"
      src="{{ ma.cover | relative_url }}"
      alt="{{ ma.cover_alt }}"
      width="140"
      height="210"
      loading="eager"
      decoding="async"
    >
  </a>
  <div class="home-collection-body">
    <p class="home-collection-eyebrow">{{ ma.subtitle }}</p>
    <h2 id="home-ma-title" class="home-collection-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h2>
    {% if ma.date_label %}
    <p class="home-collection-meta">{{ ma.date_label }}</p>
    {% endif %}
    {% if ma.hook %}
    <p class="home-collection-hook">{{ ma.hook }}</p>
    {% endif %}
    <div class="home-collection-actions">
      <a href="{{ ma.landing | relative_url }}" class="cta-link">View collection</a>
      {% if ma.url %}
      <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">{{ ma.cta_label | default: "Pre-order" }}</a>
      {% endif %}
    </div>
    <p class="home-collection-more">Also in anthologies — <a href="{{ '/publications/' | relative_url }}">Publications</a></p>
  </div>
</section>
{% endif %}

<ul class="post-list">
  <li><a href="{{ '/fiction/' | relative_url }}">Fiction</a><div class="post-excerpt">Short stories, mostly speculative.</div></li>
  <li><a href="{{ '/essays/' | relative_url }}">Essays</a><div class="post-excerpt">When something won't stay in the margins.</div></li>
</ul>
