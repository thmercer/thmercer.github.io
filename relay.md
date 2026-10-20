---
last_modified_at: 2026-10-20
layout: default
title: Relay
permalink: /relay/
seo_title: "Relay: A Free Serial Novella by T. H. Mercer"
description: "A free near-future serial novella by T. H. Mercer. Mara hides a whistleblower carrying a piece of the machine that runs London. New chapter every Friday."
image: /assets/images/social/og-relay.jpg
image_alt: "Relay, a novella by T. H. Mercer"
# Book JSON-LD (see _includes/jsonld.html); date, cover and hook come from
# _data/publications.yml. same_as lists where the serial is published.
book:
  publication: "Relay"
  genre: "Speculative fiction"
  free: true
  same_as:
    - "https://www.wattpad.com/story/416277807-relay"
    - "https://lanternserials.com/story/relay-a1c39688"
    - "https://www.scribblehub.com/series/2567716/relay/"
# Trailer: the embed reads it, and jsonld.html emits a VideoObject from it.
# upload_date is the YouTube upload (literary-agent trailers.md).
trailer:
  id: "O46ESuOVxsM"
  poster: "/assets/images/relay-trailer-poster.webp"
  duration: "1 min 11 s"
  duration_iso: "PT1M11S"
  upload_date: 2026-10-09
---

<div class="collection-header">
  <div class="collection-cover-wrap collection-cover-wrap--plain">
    <img src="{{ '/assets/images/relay-cover-compressed.jpg' | relative_url }}" alt="Relay — T. H. Mercer" class="collection-cover-static" width="512" height="800" fetchpriority="high" decoding="async">
  </div>
  <h1>Relay</h1>
  <p class="collection-byline">T. H. Mercer &middot; novella &middot; serializing now, free</p>
  <p class="collection-hook">Mara finds people who don't want to be found — by listening for the half-second flinch under a stranger's voice on a rerouted call. Her newest job is a whistleblower carrying a piece of the machine that runs London. Once she understands what he's holding, hiding him stops being the hard part.</p>
</div>

{% include trailer.html id=page.trailer.id title=page.title poster=page.trailer.poster duration=page.trailer.duration %}

<div class="collection-cta">
  <a href="https://www.wattpad.com/story/416277807-relay" class="cta-link" target="_blank" rel="noopener">Read on Wattpad</a>
  <a href="https://lanternserials.com/story/relay-a1c39688" class="cta-link" target="_blank" rel="noopener">Read on Lantern</a>
  <a href="https://www.scribblehub.com/series/2567716/relay/" class="cta-link" target="_blank" rel="noopener">Read on Scribble Hub</a>
</div>

<p class="collection-cta-note">24 chapters, ~1,600 words each — a new one every Friday. Same story on all three; read wherever you already are.</p>

<section class="relay-about" aria-labelledby="relay-about-title">
  <h2 id="relay-about-title" class="work-section-heading">About the serial</h2>
  <p><em>Relay</em> is a near-future novella of about 38,000 words, released one chapter at a time. Every chapter is free to read.</p>
  <p>Chapter 1 is the place to start. Pick the site you already read on:</p>
  <ul class="relay-start">
    <li><a href="https://www.wattpad.com/1658415839-relay-chapter-1" target="_blank" rel="noopener">Start Chapter 1 on Wattpad</a></li>
    <li><a href="https://lanternserials.com/story/relay-a1c39688?episode=1" target="_blank" rel="noopener">Start Chapter 1 on Lantern</a></li>
    <li><a href="https://www.scribblehub.com/series/2567716/relay/" target="_blank" rel="noopener">Start Chapter 1 on Scribble Hub</a></li>
  </ul>
  {% comment %}
    Wattpad and Lantern links go straight to chapter 1 (Wattpad part id from
    its public API; Lantern uses ?episode=N). TODO(author): Scribble Hub
    still points at the series page; its chapter-1 URL couldn't be fetched
    (Cloudflare blocks it). It looks like /read/2567716-relay/chapter/<id>/.
  {% endcomment %}
</section>

<section class="relay-excerpt" aria-labelledby="relay-excerpt-title">
  <h2 id="relay-excerpt-title" class="work-section-heading">Read the opening</h2>
  <p class="site-intro">From Chapter 1.</p>
  {% comment %}
    Verbatim from writing-desk projects/novels/relay/manuscript/01-chapter-01.md
    (last changed 2026-09-16, before the serial launched).
    TODO(author): confirm it matches the published chapter 1.
  {% endcomment %}
<div class="relay-excerpt-text" markdown="1">

Otis had already refused a job on her behalf by the time she got back from the dawn run.

She knew because the tea tin lid was out on the steel bench with a curl of ash in it, and Otis only burned paper he didn't want her to read. He sat at his end of the bench with his own kettle going, the dented copper one he'd carried in from a house clearance two winters back and never taken home, and he didn't look up when she shouldered the door.

"Who was it."

"Nobody you'll miss. Somebody wanted a walk-in at the Census annexe on Spa Road: documents through the front door, past the cameras, signature on entry." He tipped the ash into the bin. "They register couriers now. One signature and you're a line in their ledger for good."

"I price my own risk."

"You price it fine. I get to the post first." He poured her cup before his own: as close as he came to apology. Then he pushed it down the bench. "And that's not tea you've been drinking, by the way. That's leaf punished with boiling water. Let it stand off the heat next time."

She drank it. It was better than hers. His half of the shelf held the copper kettle, a stack of clean slips, three tangerines in a bowl he'd brought from home months ago, and a jar of Petra's picket-kitchen honey with the label half soaked off.

The arch was doing its morning noise: relay rack ticking on standby behind the wall, the VE ceramic tags on the old conduit housing catching light from the loading door. Out on Tooley Street the bakehouse rota was calling shift change, and somebody from the Bermondsey roof plots was arguing about water rights with somebody who had already lost. Mara had been walking a parts satchel to a clockmaker in Rotherhithe since five and her feet knew it. She ran the board's morning diagnostic anyway, node by node; the topology forgave nothing, and she couldn't afford to either.

"There is one worth having," Otis said, when the diagnostic came back green. "Came through last night, two removes up my chain. A friend of a friend wants to know a man is still breathing."

"Welfare or recovery?"

"Welfare. Find him, confirm he's upright, report back. No contact, no approach." He took a slip from his jacket, already folded, and laid it between them. "Somebody called Wren. Relay address seven months cold. Mid-thirties, dark-haired, last touched east of the river. There's a note about a drive he was carrying when he dropped off."

She unfolded it. Sparse: careful writing, by somebody who didn't know who'd read it. Seven months was a long silence; most people who went quiet that long were dead, or so frightened of being found that it came to the same thing.

"Thin," she said.

"It's what there is." Otis took a tangerine from the bowl and set it beside the slip with small formal gravity: payment when the ledger fell short, a fee he'd invented during her apprenticeship. "Whoever's asking, they're asking gently. That tells you something."

It told her the client wanted to look gentle, but she took the tangerine and let him have the point.

</div>
  <p class="relay-excerpt-more">Keep reading Chapter 1 on <a href="https://www.wattpad.com/1658415839-relay-chapter-1" target="_blank" rel="noopener">Wattpad</a>, <a href="https://lanternserials.com/story/relay-a1c39688?episode=1" target="_blank" rel="noopener">Lantern</a>, or <a href="https://www.scribblehub.com/series/2567716/relay/" target="_blank" rel="noopener">Scribble Hub</a>.</p>
</section>

<section class="collection-signup" aria-labelledby="signup-heading">
  <h2 id="signup-heading" class="feature-title">Hear when the next one starts</h2>
  <p class="collection-signup-pitch">The mailing list is where I announce new stories, and what comes after <em>Relay</em>. Rarely more than once a month. Subscribe and I'll send you <em>Pest Control</em>, a full short story, as a PDF and ePUB to keep.</p>
  {% include mailerlite-form.html success_text="Check your inbox. Both formats are on their way." %}
  <p class="subscribe-helper">No spam. Unsubscribe anytime with one click.</p>
</section>
