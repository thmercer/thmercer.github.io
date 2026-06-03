---
layout: default
title: Publications
permalink: /publications/
description: "Anthology and journal credits by T. H. Mercer."
---

<p class="site-intro">Published work in anthologies, journals, and collections. Anthology stories appear in their collections; none are freely available here.</p>

{% assign pubs = site.data.publications | sort: "date" %}
{% if pubs.size > 0 %}
<ul class="pub-list">
  {% for pub in pubs %}
  <li class="pub-entry">
    {% if pub.landing %}
    <a href="{{ pub.landing | relative_url }}" class="pub-entry-cover-link">
      <img class="pub-entry-cover" src="{{ pub.cover | relative_url }}" alt="{{ pub.cover_alt }}" width="120" height="180" loading="lazy" decoding="async">
    </a>
    {% else %}
    <img class="pub-entry-cover" src="{{ pub.cover | relative_url }}" alt="{{ pub.cover_alt }}" width="120" height="180" loading="lazy" decoding="async">
    {% endif %}
    <div class="pub-entry-body">
      {% if pub.landing %}
      <h2 class="pub-story-title"><a href="{{ pub.landing | relative_url }}">{{ pub.title }}</a></h2>
      {% else %}
      <h2 class="pub-story-title">{{ pub.title }}</h2>
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
    <span class="pub-buy-btn pub-buy-btn--disabled" aria-disabled="true">Coming soon · {{ pub.date | date: "%B %-d, %Y" }}</span>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Publications forthcoming.</p>
{% endif %}
