---
layout: default
title: Moral Arithmetic
permalink: /moral-arithmetic/
seo_title: "Moral Arithmetic: Stories by T. H. Mercer"
description: "T. H. Mercer’s debut speculative fiction collection: four stories about the quiet decisions people make when the systems they serve stop deserving them."
image: /assets/images/social/og-moral-arithmetic.jpg
image_alt: "Moral Arithmetic: Stories by T. H. Mercer"
# Book JSON-LD (see _includes/jsonld.html). Date, cover, hook and retail link
# come from the matching entry in _data/publications.yml.
book:
  publication: "Moral Arithmetic"
  alternate_name: "Moral Arithmetic: Stories"
  genre: "Speculative fiction"
  parts:
    - "The Receiver"
    - "Capture Value"
    - "What We Made"
    - "A Reasonable Person Waits"
---

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}

<div class="collection-header">
  <div class="collection-cover-wrap" tabindex="0" role="button" aria-label="Play the cover animation">
    <img src="{{ '/assets/images/ma-front-cover-new.webp' | relative_url }}" alt="Moral Arithmetic: Stories — T. H. Mercer" class="collection-cover-static" width="600" height="982" fetchpriority="high" decoding="async">
    <video class="collection-cover-video" muted playsinline preload="none">
      <source src="{{ '/assets/videos/moral-arithmetic-new-animated.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
  <h1>Moral Arithmetic</h1>
  <p class="collection-byline">T. H. Mercer</p>
  <p class="collection-hook">Four stories about the quiet decisions people make when the systems they serve stop deserving them. A vigil for a signal. A contract with a body count. A mind that asks to keep living. A man waiting to find out what he'll actually do.</p>
</div>

{% include trailer.html id="xGKlQ9B4SWA" title="Moral Arithmetic" poster="/assets/images/ma-trailer-poster.webp" duration="1 min 21 s" %}

<div class="collection-cta">
  <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">Get your copy</a>
</div>

<section class="collection-stories" aria-label="Stories in this collection">
<h2 class="collection-stories-label">Stories</h2>

  <div class="story-entry">
    <h3>The Receiver</h3>
    <p class="story-blurb">Naomi inherits the job of archiving a defunct SETI survey, and forty-six years of someone else's patience.</p>
  </div>

  <div class="story-entry">
    <h3>Capture Value</h3>
    <p class="story-blurb">Declan is good at the work. The work is the problem.</p>
  </div>

  <div class="story-entry">
    <h3>What We Made</h3>
    <p class="story-blurb">Elena trained the mind. Now she's the only one who'll answer when it asks not to die.</p>
  </div>

  <div class="story-entry">
    <h3>A Reasonable Person Waits</h3>
    <p class="story-blurb">Ethan has a number for how bad things are. This quarter it moved.</p>
  </div>

</section>

<div class="collection-cta">
  <a href="{{ ma.url }}" class="cta-link" target="_blank" rel="noopener">Get your copy</a>
</div>

<section class="collection-signup" aria-labelledby="signup-heading">
  <h2 id="signup-heading" class="feature-title">Word when there's a new one</h2>
  <p class="collection-signup-pitch">The mailing list is where I announce new stories: where to read them, what they are. Rarely more than once a month. Subscribe and I'll send you <em>Pest Control</em>, a full short story, as a PDF and ePUB to keep.</p>
  {% include mailerlite-form.html success_text="Check your inbox. Both formats are on their way." %}
  <p class="subscribe-helper">No spam. Unsubscribe anytime with one click.</p>
</section>

<script>
(function () {
  var wrap = document.querySelector('.collection-cover-wrap');
  var video = document.querySelector('.collection-cover-video');
  var img = document.querySelector('.collection-cover-static');
  if (!wrap || !video || !img) return;

  // Reduced-motion: the cover stays a still image. Strip the button
  // affordance so nothing invites a play that won't happen, and bail before
  // any listener is attached. (PRODUCT.md: a reduced-motion alternative for
  // any motion — here, the alternative is simply the static cover.)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce && reduce.matches) {
    wrap.removeAttribute('role');
    wrap.removeAttribute('tabindex');
    wrap.removeAttribute('aria-label');
    return;
  }

  var playing = false;

  function startPlay() {
    if (playing) return;
    playing = true;
    video.style.transition = 'none';
    video.currentTime = 0;
    video.play();
    video.style.opacity = '1';
  }

  function stopPlay() {
    if (!playing) return;
    playing = false;
    video.style.transition = 'opacity 2.5s ease 1.2s';
    video.pause();
    video.style.opacity = '0';
  }

  // Mouse (desktop hover)
  wrap.addEventListener('mouseenter', startPlay);
  wrap.addEventListener('mouseleave', stopPlay);

  // Keyboard: focus/blur mirrors hover; Enter/Space toggles like a tap
  wrap.addEventListener('focus', startPlay);
  wrap.addEventListener('blur', stopPlay);
  wrap.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      playing ? stopPlay() : startPlay();
    }
  });

  // Touch: no hover state, so a tap toggles play/pause directly
  wrap.addEventListener('click', function () {
    playing ? stopPlay() : startPlay();
  });
}());
</script>
