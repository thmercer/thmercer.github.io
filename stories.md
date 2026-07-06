---
layout: default
title: Stories
permalink: /stories/
description: "Stories and books by T. H. Mercer — what to read here and where to find the rest."
---

<h1 class="sr-only">Stories — T. H. Mercer</h1>

<p class="site-intro">Short stories and books. Some you can read here for free; the rest live in anthologies, journals, and a debut collection.</p>

<h2 class="work-section-heading">Read here</h2>
<p class="site-intro">Short fiction you can read on this site, free.</p>

{% assign story_posts = site.posts | where: "layout", "story" %}
{% assign onsite_posts = story_posts | where_exp: "p", "p.link == nil" | sort: "date" | reverse %}
{% assign gated_posts = story_posts | where_exp: "p", "p.link != nil" | sort: "date" | reverse %}
{% assign posts = onsite_posts | concat: gated_posts %}
{% include post-list.html posts=posts show_badge=true show_reprint=true empty="Stories forthcoming." %}

<h2 class="work-section-heading">In print</h2>
<p class="site-intro">A debut collection, anthologies, and journals — here's where to find each one.</p>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="feature-block" aria-labelledby="work-ma-title">
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
    <p class="feature-subtitle">{{ ma.subtitle }}</p>
    <h3 id="work-ma-title" class="feature-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h3>
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
  </div>
</section>
{% endif %}

{% assign story_titles = posts | map: "title" %}
{% assign all_pubs = site.data.publications | where_exp: "p", "p.title != 'Moral Arithmetic'" | sort: "date" %}
{% assign pubs = "" | split: "" %}
{% for pub in all_pubs %}
  {% unless story_titles contains pub.title %}
    {% assign pubs = pubs | push: pub %}
  {% endunless %}
{% endfor %}
{% include pub-entry.html pubs=pubs heading_level="h3" %}

<p class="fiction-newsletter-note">New stories go to the <a href="/subscribe/">mailing list</a> first — subscribe to catch them.</p>
