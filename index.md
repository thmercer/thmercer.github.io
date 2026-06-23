---
layout: default
---

<p class="site-intro">I'm T. H. Mercer — speculative fiction and essays. Stories where things get hard. People who rise to meet them.</p>

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}
{% if ma %}
<section class="home-collection-feature" aria-labelledby="home-ma-title">
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
    <h2 id="home-ma-title" class="home-collection-title">
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
    <p class="home-collection-more">Also in anthologies — <a href="{{ '/publications/' | relative_url }}">Publications</a></p>
  </div>
</section>
{% endif %}

<section class="reader-magnet" aria-labelledby="rm-heading">
  <img
    class="reader-magnet-cover"
    src="{{ '/assets/images/pest-control-cover.png' | relative_url }}"
    alt="Pest Control — a story by T. H. Mercer"
    width="140"
    height="210"
    loading="eager"
    decoding="async"
  >
  <div class="reader-magnet-body">
    <p class="home-collection-eyebrow">Free short story</p>
    <h2 id="rm-heading" class="home-collection-title">Pest Control</h2>
    <p class="home-collection-meta">~6,500 words &middot; speculative fiction &middot; PDF and ePUB</p>
    <p class="home-collection-hook">An infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time.</p>
    <div id="mlb2-42305046" class="ml-subscribe-wrap ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42305046">
      <div class="row-form">
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2414468/forms/189632576572359884/subscribe" data-code="" method="post" target="_blank">
          <input type="email" name="fields[email]" placeholder="your@email.com" autocomplete="email" aria-label="Email address">
          <button type="submit" class="primary">Send me the story</button>
          <button type="button" class="loading" disabled style="display:none">
            <span class="sr-only">Subscribing…</span>
          </button>
          <input type="hidden" name="ml-submit" value="1">
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
      <div class="row-success" style="display:none">
        Check your inbox — your download is on its way.
      </div>
    </div>
    <p class="home-collection-more">New stories go to subscribers first. I write when there's something worth sending.</p>
  </div>
</section>

<script>
  function ml_webform_success_42305046() {
    var $ = ml_jQuery || jQuery;
    $('.ml-subscribe-form-42305046 .row-success').show();
    $('.ml-subscribe-form-42305046 .row-form').hide();
  }
</script>
<script src="https://groot.mailerlite.com/js/w/webforms.min.js?vb397d78ebaa8a0f631d35384c46d781b" type="text/javascript"></script>
<script>fetch("https://assets.mailerlite.com/jsonp/2414468/forms/189632576572359884/takel")</script>

<ul class="post-list">
  <li><a href="{{ '/fiction/' | relative_url }}">Fiction</a><div class="post-excerpt">Short stories, mostly speculative.</div></li>
  <li><a href="{{ '/essays/' | relative_url }}">Essays</a><div class="post-excerpt">When something won't stay in the margins.</div></li>
</ul>
