---
layout: about
title: About
tagline: "Former engineer. Occasional cyborg. Storyteller."
---
T. H. Mercer writes humane, wry speculative fiction — near-future stories where things get hard and people rise to meet them, built on competence, care, and making amends through action.

I have always been a creator. Sometimes stories. Sometimes worlds. Sometimes software. Software was the most lucrative, so I did it for years. This is me coming back.

The fiction lives in the gap between what a system does and what a person needs. Characters who understand the rules, see the exits, and choose the harder way anyway.

If you've ever dog-eared a Pratchett for the footnotes, or stayed up past midnight with Scalzi, Martha Wells, Becky Chambers, or the Expanse, you'll probably feel at home here.

New here? Start with the free stories on [Writing](/writing/) — every one reads free, right now. A few essays live there too.

The [mailing list](/free/) is where I say when there's a new story out, and new subscribers get the short story *Pest Control* as a PDF and ePUB to keep.

## Publications

{% assign featured = site.data.publications | where: "featured", true %}
{% for fp in featured %}
<section class="feature-block" aria-labelledby="about-feature-title-{{ forloop.index }}">
  <a href="{{ fp.landing | relative_url }}" class="feature-cover-link">
    <img
      class="feature-cover"
      src="{{ fp.cover | relative_url }}"
      alt="{{ fp.cover_alt }}"
      width="140"
      height="210"
      loading="lazy"
      decoding="async"
    >
  </a>
  <div class="feature-body">
    <h3 id="about-feature-title-{{ forloop.index }}" class="feature-title">
      <a href="{{ fp.landing | relative_url }}">{{ fp.title }}</a>
    </h3>
    <p class="feature-meta">{{ fp.subtitle }}{% if fp.date_label %} &middot; {{ fp.date_label }}{% endif %}</p>
    {% if fp.hook %}
    <p class="feature-hook">{{ fp.hook }}</p>
    {% endif %}
    <div class="feature-actions">
      <a href="{{ fp.landing | relative_url }}" class="btn-primary">{{ fp.feature_action | default: "Learn more" }}</a>
    </div>
  </div>
</section>
{% endfor %}

{% assign pubs = site.data.publications | where_exp: "p", "p.featured != true" %}
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
