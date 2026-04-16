---
layout: default
---

<p class="site-intro">I'm T. H. Mercer — speculative fiction and essays. Stories where things get hard. People who rise to meet them.</p>

{% assign posts = site.posts %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</p>
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
