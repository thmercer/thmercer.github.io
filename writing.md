---
layout: default
title: Writing
permalink: /writing/
description: "Free stories and essays by T. H. Mercer — read on the site, no email required."
---

<h1 class="sr-only">Writing — T. H. Mercer</h1>

<p class="site-intro">Everything here is free to read, right now.</p>

<p class="site-intro">Also placed in anthologies from Raconteur Press and Dragon Soul Press. Debut collection <em>Moral Arithmetic</em> arrives this July — see <a href="/about/#publications">Publications</a>.</p>

<h2 class="work-section-heading">Stories</h2>
<p class="site-intro">Short fiction, mostly speculative.</p>

{% assign story_posts = site.posts | where: "layout", "story" %}
{% assign onsite_posts = story_posts | where_exp: "p", "p.link == nil" | sort: "date" | reverse %}
{% assign gated_posts = story_posts | where_exp: "p", "p.link != nil" | sort: "date" | reverse %}
{% assign posts = onsite_posts | concat: gated_posts %}
{% include post-list.html posts=posts show_badge=true show_reprint=true empty="Stories forthcoming." %}

<h2 class="work-section-heading">Essays</h2>
<p class="site-intro">Long-form pieces — publishing, politics, culture, and whatever won't stay in the margins.</p>

{% assign essay_posts = site.posts | where: "layout", "essay" %}
{% include post-list.html posts=essay_posts empty="Essays forthcoming." %}

<p class="fiction-newsletter-note">New stories and essays go to the <a href="/subscribe/">mailing list</a> first — subscribe to catch them. For the debut collection and anthology credits, see <a href="/about/#publications">Publications</a>.</p>
