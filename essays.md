---
layout: default
title: Essays
permalink: /essays/
---

<p class="site-intro">Long-form pieces — publishing, politics, culture, and whatever won't stay in the margins.</p>

{% assign posts = site.posts | where: "layout", "essay" %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{% include post-word-count.html content=post.content word_count=post.word_count %}<span>{{ post.date | date: "%B %-d, %Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</span></p>
    {% if post.listing_hook %}
    <div class="post-excerpt">{{ post.listing_hook | markdownify }}</div>
    {% else %}
    <div class="post-excerpt">{{ post.excerpt }}</div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Essays forthcoming.</p>
{% endif %}
