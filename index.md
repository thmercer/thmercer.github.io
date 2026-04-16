---
layout: default
---

<p class="site-intro">I’m T. H. Mercer — speculative fiction and essays on this site. Essays appear when something won’t stay in the margins.</p>

{% assign posts = site.posts %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}{% if post.venue %} · {{ post.venue }}{% endif %}</p>
    <div class="post-excerpt">{{ post.excerpt }}</div>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Stories forthcoming.</p>
{% endif %}
