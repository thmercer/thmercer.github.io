---
layout: default
title: Essays
permalink: /essays/
---

<h1 class="sr-only">Essays — T. H. Mercer</h1>

<p class="site-intro">Long-form pieces — publishing, politics, culture, and whatever won't stay in the margins.</p>

{% assign posts = site.posts | where: "layout", "essay" %}
{% include post-list.html posts=posts empty="Essays forthcoming." %}

<p class="fiction-newsletter-note">New essays go to the <a href="/subscribe/">mailing list</a> first — subscribe to catch them.</p>
