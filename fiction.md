---
layout: default
title: Fiction
permalink: /fiction/
---

<p class="site-intro">Speculative short fiction — near-future, magical realism, stories where things get hard.</p>

{% assign posts = site.posts | where: "layout", "story" %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{% include fiction-availability-badge.html availability=post.availability %}{% include post-word-count.html content=post.content word_count=post.word_count %}<span>{{ post.date | date: "%B %-d, %Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</span></p>
    {% if post.listing_hook %}
    <div class="post-excerpt">{{ post.listing_hook | markdownify }}</div>
    {% else %}
    <div class="post-excerpt">{{ post.excerpt }}</div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Stories forthcoming.</p>
{% endif %}
