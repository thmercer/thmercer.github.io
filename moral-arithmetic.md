---
layout: default
title: Moral Arithmetic
permalink: /moral-arithmetic/
description: "Four stories about the quiet decisions people make when the systems they serve stop deserving them."
---

{% assign ma = site.data.publications | where: "title", "Moral Arithmetic" | first %}

<div class="collection-header">
  <div class="collection-cover-wrap" tabindex="0" role="button" aria-label="Play the cover animation">
    <img src="{{ '/assets/images/ma-front-cover-new.webp' | relative_url }}" alt="Moral Arithmetic: Stories — T. H. Mercer" class="collection-cover-static">
    <video class="collection-cover-video" muted playsinline preload="none">
      <source src="{{ '/assets/videos/moral-arithmetic-new-animated.mp4' | relative_url }}" type="video/mp4">
    </video>
  </div>
  <h1>Moral Arithmetic</h1>
  <p class="collection-byline">T. H. Mercer</p>
  <p class="collection-hook">Four stories about the quiet decisions people make when the systems they serve stop deserving them. A vigil for a signal. A contract with a body count. A mind that asks to keep living. A man waiting to find out what he'll actually do.</p>
</div>

<div class="collection-cta">
  <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">Get your copy</a>
</div>

<section class="collection-stories" aria-label="Stories in this collection">
<p class="collection-stories-label">Stories</p>

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

<div class="collection-cta">
  <a href="{{ ma.url }}" class="btn-primary" target="_blank" rel="noopener">Get your copy</a>
</div>

<script>
(function () {
  var wrap = document.querySelector('.collection-cover-wrap');
  var video = document.querySelector('.collection-cover-video');
  var img = document.querySelector('.collection-cover-static');
  if (!wrap || !video || !img) return;

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
