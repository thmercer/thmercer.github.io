---
layout: about
title: About
tagline: "Former engineer. Occasional cyborg. Storyteller."
---
T. H. Mercer writes speculative fiction about the tension between cold systems and the people caught inside them — near-future stories where the stakes are human and the machinery is indifferent.

I have always been a creator. Sometimes stories. Sometimes worlds. Sometimes software. Software was the most lucrative, so I did it for years. This is me coming back.

My actual work has always been translation — between humans and technology, between what a system does and what a person needs. The fiction lives in that same gap. Characters who understand the rules, see the exits, and choose anyway.

If you've ever dog-eared a Pratchett for the footnotes, or stayed up past midnight with Scalzi or Martha Wells or the Expanse, you'll probably feel at home here.

New here? Start with the free stories and essays on [Writing](/writing/), or go straight to the debut collection below.

New stories go to the [mailing list](/free/) first.

## Publications

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="feature-block" aria-labelledby="about-ma-title">
  <a href="{{ ma.landing | relative_url }}" class="feature-cover-link">
    <img
      class="feature-cover"
      src="{{ ma.cover | relative_url }}"
      alt="{{ ma.cover_alt }}"
      width="140"
      height="210"
      loading="lazy"
      decoding="async"
    >
  </a>
  <div class="feature-body">
    <h3 id="about-ma-title" class="feature-title">
      <a href="{{ ma.landing | relative_url }}">{{ ma.title }}</a>
    </h3>
    <p class="feature-meta">Debut collection{% if ma.date_label %} &middot; {{ ma.date_label }}{% endif %}</p>
    {% if ma.hook %}
    <p class="feature-hook">{{ ma.hook }}</p>
    {% endif %}
    <div class="feature-actions">
      <a href="{{ ma.landing | relative_url }}" class="btn-primary">View collection</a>
    </div>
  </div>
</section>
{% endif %}

{% assign pubs = site.data.publications | where_exp: "p", "p.title != 'Moral Arithmetic'" %}
{% assign pubs_out = pubs | where: "status", "out" | sort: "date" | reverse %}
{% assign pubs_soon = pubs | where_exp: "p", "p.status != 'out'" | sort: "date" %}

{% if pubs_out.size > 0 %}
### Available now

{% include pub-entry.html pubs=pubs_out heading_level="h4" %}
{% endif %}

{% if pubs_soon.size > 0 %}
### Coming soon

{% include pub-entry.html pubs=pubs_soon heading_level="h4" %}
{% endif %}
