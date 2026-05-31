---
layout: default
title: Moral Arithmetic
permalink: /moral-arithmetic/
description: "Four stories about the quiet decisions people make when the systems they serve stop deserving them."
---

<div class="collection-header">
  <div class="collection-cover-wrap">
    <img src="{{ '/assets/images/moral-arithmetic-stories-cover.jpg' | relative_url }}" alt="Moral Arithmetic: Stories — T. H. Mercer" class="collection-cover-static">
    <video class="collection-cover-video" muted loop playsinline preload="none">
      <source src="{{ '/assets/videos/moral-arithmetic-animated.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
  <h1>Moral Arithmetic</h1>
  <p class="collection-hook">Four stories about the quiet decisions people make when the systems they serve stop deserving them. A vigil for a signal. A contract with a body count. A mind that asks to keep living. A man waiting to find out what he'll actually do.</p>
</div>

<div class="collection-cta">
  <a href="https://www.amazon.com/dp/B0GX36GXQG" class="cta-link" target="_blank" rel="noopener">Pre-order now →</a>
</div>

<section class="collection-stories" aria-label="Stories in this collection">

  <div class="story-entry">
    <h2>The Receiver</h2>
    <p class="story-blurb">Naomi inherits the job of archiving a defunct SETI survey, and forty-six years of someone else's patience.</p>
  </div>

  <div class="story-entry">
    <h2>Capture Value</h2>
    <p class="story-blurb">Declan is good at the work. The work is the problem.</p>
  </div>

  <div class="story-entry">
    <h2>What We Made</h2>
    <p class="story-blurb">Elena trained the mind. Now she's the only one who'll answer when it asks not to die.</p>
  </div>

  <div class="story-entry">
    <h2>A Reasonable Person Waits</h2>
    <p class="story-blurb">Ethan has a number for how bad things are. This quarter it moved.</p>
  </div>

</section>

<script>
(function () {
  var wrap = document.querySelector('.collection-cover-wrap');
  var video = document.querySelector('.collection-cover-video');
  if (!wrap || !video) return;
  wrap.addEventListener('mouseenter', function () { video.play(); });
  wrap.addEventListener('mouseleave', function () { video.pause(); video.currentTime = 0; });
}());
</script>
