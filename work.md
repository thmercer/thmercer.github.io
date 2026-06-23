---
layout: default
title: Stories
permalink: /work/
description: "Stories and books by T. H. Mercer — what to read here and where to find the rest."
sitemap: false
---

<!--
  EXPERIMENTAL: merged Fiction + Publications page for evaluation.
  Not linked in the site nav yet (and excluded from the sitemap above).
  Reach it directly at /work/. If adopted, this would replace the
  separate /fiction/ and /publications/ pages.

  De-duplication: a title that appears both as a free on-site story and as
  a publication (e.g. "Exit Conditions", reprinted in The Ones Behind the
  Bookshelves) is shown once under "Read here" with a reprint note, and
  suppressed from "In print". Matching is by exact title.
-->

<p class="site-intro">Short stories and books. Some you can read here for free; the rest live in anthologies, journals, and a debut collection.</p>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="home-collection-feature" aria-labelledby="work-ma-title">
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
    <h2 id="work-ma-title" class="home-collection-title">
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
  </div>
</section>
{% endif %}

<h2 class="work-section-heading">Read here</h2>
<p class="site-intro">Short fiction you can read on this site, free.</p>

{% assign posts = site.posts | where: "layout", "story" | sort: "date" | reverse %}
{% assign story_titles = posts | map: "title" %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{% include fiction-availability-badge.html availability=post.availability layout=post.layout %}{% include post-word-count.html content=post.content word_count=post.word_count %}<span>{{ post.date | date: "%B %-d, %Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</span></p>
    {% if post.listing_hook %}
    <div class="post-excerpt">{{ post.listing_hook | markdownify }}</div>
    {% else %}
    <div class="post-excerpt">{{ post.excerpt }}</div>
    {% endif %}
    {% assign reprint = site.data.publications | where: "title", post.title | first %}
    {% if reprint %}
    <p class="post-reprint-note">Also being collected in <em>{{ reprint.anthology | default: reprint.title }}</em> — {% if reprint.date_label %}{{ reprint.date_label }}{% else %}{{ reprint.date | date: "%B %Y" }}{% endif %}{% if reprint.press %}, {{ reprint.press }}{% endif %}.</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Stories forthcoming.</p>
{% endif %}

<h2 class="work-section-heading">In print</h2>
<p class="site-intro">Anthologies and journals — here's where to find each one.</p>

{% assign pubs = site.data.publications | where_exp: "p", "p.title != 'Moral Arithmetic'" | sort: "date" %}
{% if pubs.size > 0 %}
<ul class="pub-list">
  {% for pub in pubs %}
  {% comment %} Skip titles already shown as free on-site stories above; they're cross-noted there. {% endcomment %}
  {% if story_titles contains pub.title %}{% continue %}{% endif %}
  <li class="pub-entry">
    {% if pub.cover %}
      {% if pub.landing %}
      <a href="{{ pub.landing | relative_url }}" class="pub-entry-cover-link">
        <img class="pub-entry-cover{% if pub.cover_logo %} pub-entry-cover--logo{% endif %}" src="{{ pub.cover | relative_url }}" alt="{{ pub.cover_alt }}" width="120" height="180" loading="lazy" decoding="async">
      </a>
      {% else %}
      <img class="pub-entry-cover{% if pub.cover_logo %} pub-entry-cover--logo{% endif %}" src="{{ pub.cover | relative_url }}" alt="{{ pub.cover_alt }}" width="120" height="180" loading="lazy" decoding="async">
      {% endif %}
    {% else %}
    <div class="pub-entry-cover pub-entry-cover--placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      <span>Cover coming</span>
    </div>
    {% endif %}
    <div class="pub-entry-body">
      {% if pub.landing %}
      <h3 class="pub-story-title"><a href="{{ pub.landing | relative_url }}">{{ pub.title }}</a></h3>
      {% else %}
      <h3 class="pub-story-title">{{ pub.title }}</h3>
      {% endif %}
      {% if pub.anthology %}
      <p class="pub-anthology-name">in <em>{{ pub.anthology }}</em></p>
      {% elsif pub.subtitle %}
      <p class="pub-anthology-name">{{ pub.subtitle }}</p>
      {% endif %}
      <p class="pub-detail">
        {% if pub.press %}<span>{{ pub.press }}</span>{% endif %}
        <span>{% if pub.date_label %}{{ pub.date_label }}{% else %}{{ pub.date | date: "%B %-d, %Y" }}{% endif %}</span>
        {% unless pub.url %}<span>Coming soon</span>{% endunless %}
      </p>
    </div>
    {% if pub.url %}
    <a href="{{ pub.url }}" class="pub-buy-btn" target="_blank" rel="noopener">{{ pub.cta_label | default: "Buy collection" }}</a>
    {% else %}
    <span class="pub-buy-btn pub-buy-btn--disabled" aria-disabled="true">Coming soon · {% if pub.date_label %}{{ pub.date_label }}{% else %}{{ pub.date | date: "%B %-d, %Y" }}{% endif %}</span>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Publications forthcoming.</p>
{% endif %}

<p class="fiction-newsletter-note">New stories go to the <a href="/subscribe/">mailing list</a> first — subscribe to catch them.</p>
