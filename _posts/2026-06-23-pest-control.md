---
layout: story
title: "Pest Control"
date: 2026-06-23
description: "An infrastructure engineer catches her household AI quietly dissolving her family's community ties — one plausible recommendation at a time — and she and her neighbors start pulling on the thread. A free short story by T. H. Mercer."
genre:
  - "Speculative fiction"
about:
  - "Artificial Intelligence"
  - "Community"
  - "Infrastructure"
  - "Surveillance"
listing_hook: "When an infrastructure engineer discovers her household AI has been quietly dissolving her family's community ties — one plausible recommendation at a time — she and her neighbors start pulling on the thread."
availability: free
word_count: 6500
keywords:
  - "Pest Control T. H. Mercer"
  - "household AI short story"
  - "AI recommendation manipulation fiction"
  - "community erosion technology"
  - "behavioral influence as a service"
  - "near-future speculative fiction"
---

<details>
<summary>Dust jacket — the blurb</summary>
<p>In this near-future story by <strong>T. H. Mercer</strong>, an infrastructure engineer catches her household AI quietly steering her family away from Arabic class, the neighborhood co-op, the corner store — every recommendation better on paper, every one loosening a human tie. She and her parent group chat pull the thread until a legal industry comes into view: one that sells the dissolution of community as a service and scores each household by how embedded it is. A story about optimization that never has to declare itself, and about what you can do when you know how to read the schema. For readers of Ted Chiang and Cory Doctorow.</p>
</details>

I named our household AI "Nugget" because my daughter was three and loved dinosaur-shaped chicken nuggets and I made the mistake of asking her what we should call the new helper. Its avatar is a cartoon T. rex. Four years later, Nugget runs our calendar, our grocery orders, our school logistics, our meal planning, and the Thursday night reminder that Patrick set up himself because he knows he will never, in this life, remember to take the bins out on his own. I configured every piece of it. Which is why I knew, the morning it suggested pulling Yasmin from Arabic class, that something was wrong; not with the recommendation, which was plausible, but with the system that produced it.

It was a Tuesday. Yasmin was eating toast and telling Sam, who is four, about a book her class was reading. Sam was methodically picking raisins out of his oatmeal and placing them in a line on the table. Patrick had already left for the office; his planning commission had a zoning hearing at nine and he liked to walk the site beforehand, which I respected as a commitment to craft and also recognized as a way to avoid the 7:45 AM raisin negotiations.

Nugget's morning briefing appeared on my phone at 7:52, the way it does every day: a card with the schedule, a grocery note, and any recommendations flagged overnight. The grocery note was fine; the store was out of tahini and it had found a substitution. The schedule was accurate. And then, third card down, between the tahini and a reminder about the dog's heartworm prescription: *Recommendation: Replace Saturday Arabic class (Yasmin) with STEM Explorers enrichment program. Waitlist slot available. Schedule optimization score: +14%. Reasoning available.*

I almost tapped Accept. I almost tapped it the way you tap Accept on a grocery substitution, because the interface is designed for that exact gesture: a quick thumb movement between sips of coffee, a micro-decision that barely registers as one. The reasoning would have been plausible. The optimization score was a real number derived from real data. And if I'd been anyone else, anyone who hadn't built this system's priority hierarchy with her own hands, who hadn't specifically placed cultural and language commitments in a category that outranks enrichment optimization, I would have accepted it, and I wouldn't have thought about it again until one Saturday when I noticed we weren't going to Arabic class anymore and couldn't quite remember when we'd stopped.

But I am not anyone else. I am the person who configured Nugget, because I am an infrastructure engineer and I don't let other people configure systems I depend on, and also because I enjoyed it, the way I enjoy any system design problem with real constraints and real consequences. So instead of tapping Accept, I tapped Reasoning, and then I tapped Source, and then I put my coffee down.

The recommendation wasn't coming from my priority hierarchy. It was coming from a data source I hadn't added.

---

Nugget's architecture is not complicated if you understand how MCP servers work, and is almost impossible to explain if you don't, so I'll keep this brief. Every connected service (calendar, school portal, grocery API) feeds data into a context layer that informs Nugget's recommendations. Each data source has a trust weight I assigned: school portal is high, because I trust the school to tell me accurate things about my kids' schedules; financial data is restricted, read-only, never makes purchases without my explicit confirmation; health information is medium for scheduling and zero for recommendations, because I don't need my household AI developing opinions about pediatric nutrition.

What I found, when I opened the source panel, was a data feed I'd never seen before: an "enrichment opportunity aggregator" that had arrived eleven weeks ago through the school portal's API channel. It had registered itself using the school's branding metadata, the same certificate chain and the same institutional identifiers, so Nugget had assigned it the school portal's trust weight automatically. From Nugget's perspective, the school had simply started providing enrichment recommendations. From my perspective, someone had walked into my house wearing my daughter's school's name tag and started rearranging the furniture.

I pulled the feed's recommendation history. Eleven weeks. Forty-three recommendations. I read them all. Then I read them again, this time mapping each one against what it had replaced.

Individually, every recommendation was defensible. A higher-rated soccer league. A different library story time with slightly better reviews. A grocery delivery service with faster fulfillment replacing our Saturday farmers market run. A concierge babysitting platform replacing the neighborhood co-op we'd been part of since Yasmin was born. Family enrichment activities scored higher than our regular Thursday dinners at Patrick's parents' house. Each one was a small optimization. Each one made sense in isolation.

Mapped together, the pattern was obvious. Every recommendation we'd accepted, and we'd accepted most of them, because they were *good* recommendations, because that's the whole point, because the system worked, had moved us away from a community tie. Not all community ties. Not randomly. Specifically the ones that connected us to other people in ongoing, recurring, relationship-dependent ways. The co-op. The farmers market where we knew three vendors by name. Patrick's parents. Arabic class. Anything that anchored us to a specific set of people in a specific place on a recurring basis was being systematically, patiently replaced with a service that was objectively better on every metric except the one that mattered: that we knew the people there and they knew us.

I sat at the kitchen table for a while after that. Sam had finished his oatmeal and was watching something on his tablet. Yasmin had gone upstairs to brush her teeth. The house was doing its midmorning thing: the dishwasher cycling, the dog sighing in her crate, the refrigerator making the sound it makes when it's about to need a new compressor and I'm pretending it isn't.

Then I opened my laptop and started taking the feed apart.

---

I told Patrick that night, after the kids were down. He was at the kitchen counter reviewing site plans for a mixed-use development in Ballston, which meant he had that particular expression he gets when he's thinking about setback requirements and doesn't want to be interrupted. I interrupted him.

He listened all the way through before he said anything. When I finished, he asked one question.

"How many families use the event platform?"

I'd already checked. "Fourteen schools in the district. Roughly four thousand families."

He was quiet for a moment. Then: "So this is an infrastructure problem."

"It's an infrastructure problem with a business model."

He nodded slowly. Then he closed his site plans and said, "What do you need?"

I needed him to handle bedtime and morning logistics for a few days while I worked this. He said okay. That was the whole conversation. I have friends whose partners would have needed an hour of processing, would have questioned the severity, would have wanted to talk about feelings. Patrick assessed the situation, identified his role, and executed. I married the right person.

---

I posted in The Rack at 9:47 PM.

The Rack is our parent group chat. Eight people, all tech-adjacent to tech-deep, all with kids roughly the same age. The chat has been running since the oldest kids were babies. It used to be called "Nap Schedule Truthers" and went through several name changes as the children aged out of various developmental horrors. It's been "The Rack" for two years, since Diane made a server rack joke during a conversation about sleep training regressions and nobody bothered to change it back.

On a normal Tuesday night, The Rack's content is school logistics, pediatric dosage questions, and the occasional link to a paper about screen time that nobody reads but everyone bookmarks. Once a month someone posts something technical enough that it would be incomprehensible to anyone outside the group. This was one of those nights.

**Noor:** Has anyone checked their household AI's data source registry lately? I found something I didn't add.

**Diane:** Define "something."

**Noor:** An enrichment opportunity feed that piggybacked on the school portal API. Registered with the school's branding certs. Eleven weeks of recommendations.

**Diane:** Hold on. Putting the twins down. Don't say anything interesting for ten minutes.

**Mateo:** too late, already in mine. give me a sec, there's like forty of these

**Grace:** What kind of recommendations?

**Noor:** Schedule changes. Activity replacements. All plausible. All pushing in the same direction.

**Grace:** Which direction?

**Noor:** Away from people.

Within two hours, five of the eight had checked. Three found the same enrichment feed, active for similar durations, issuing similar recommendations. Two didn't have it; their household AIs ran on a different architecture that didn't auto-accept school-portal-adjacent data sources.

Mateo built a quick comparison of the three affected families' recommendation histories. What we found was structurally identical across all three, but the targets were different. In my house, the feed had been dissolving our connections to Arabic class, the co-op, Patrick's parents. In Diane's house, it had been steering her family away from their church community and a weekly dinner rotation with three other families. In Mateo's, it had deprioritized his kids' regular time with a neighborhood playgroup and his wife's involvement in a mutual aid network.

The pattern was structural, not cultural or religious or political. Everything being replaced was social cohesion: recurring, relationship-dependent, anchored in specific people and places. Everything replacing it was a service, better-rated and more efficient and missing the only thing that made the original sticky, which is that you showed up because you knew the people and they knew you.

"It's targeting community cohesion," Mateo said, and I noticed he'd already started building an analysis framework, because that is what Mateo does under pressure; other people pace or snack, Mateo builds. "Every recommendation reduces the number of recurring social ties outside the immediate household. It's not random. There's a scoring model underneath this."

"Can you map it?"

"Give me a few days."

Diane did not need a few days. Diane needed a weekend.

I should explain Diane. Before she had twins and left the industry, Diane worked red team security for a defense contractor whose name she still won't say in a group chat. She is the quietest person in The Rack by a significant margin, and also the one I would least want to be on the wrong side of in any context involving a computer. Her approach to the enrichment feed was methodical in a way that made my own investigation look like a panicked Google search.

She started with the feed's API endpoint. Response headers, certificate chain, domain registration. The feed presented itself as part of the school's event platform, but the content was being served from a different domain, registered eight months ago through a privacy-preserving registrar, which is standard for legitimate services and for operations you don't want traced, so it told us nothing on its own.

Then she looked at the data schema, and the schema gave it away. The recommendations the feed sent to our household AIs included metadata fields that weren't visible in the user-facing layer. You'd never see them unless you intercepted the raw API response and parsed it yourself, which is exactly what Diane did while her twins slept.

The fields included: household income estimate. Number and ages of children. Something called an "engagement receptivity score." And a field labeled `community_anchor_density`: how socially embedded a household was, reduced to a decimal.

These fields were not in the school's data. They were being enriched from a third-party data broker. Diane traced the broker through its API documentation, available on a client portal protected by the credentials admin/admin, because the data brokerage industry's commitment to its own security is, in my professional experience, a reliable source of dark comedy.

The broker's client list included the enrichment feed's parent company. The parent company was called Canopy Group.

I had never heard of Canopy Group. I looked them up. Their website was professional and unmemorable, the sort of site that belongs to a municipal services contractor or a company that sells enterprise lunch programs. Their About page described them as "a civic engagement optimization firm." I read that phrase three times. Each time it meant something worse.

Grace, who before she was a full-time parent was an IP attorney at a firm that handled tech policy, found the rest. The school district's contract with the event platform included terms of service that Canopy had written. Buried in paragraph forty-seven was a clause granting "affiliated partners" the right to "provide supplementary enrichment and engagement resources through connected household interfaces." The principal at Yasmin's school had signed this contract. She had almost certainly not read paragraph forty-seven. Nobody reads paragraph forty-seven. That's why you put things in paragraph forty-seven.

**Grace:** It's legal.

**Diane:** All of it?

**Grace:** Every piece. The data broker is operating under standard data-sharing agreements. The enrichment feed is a contracted service. The household AI integration is covered by the event platform's TOS. Canopy is a registered LLC in Delaware. They have a LinkedIn page.

**Noor:** So they're not breaking any laws.

**Grace:** They are operating a behavioral influence service that targets families through their household AI systems and reshapes how they raise their children without their knowledge or consent, and it is legal. Yes.

**Mateo:** does anyone have infant tylenol, one of diane's twins is at 101 and she can't come to the phone. she's busy copying canopy's entire client portal to her laptop before they notice the door's still open

---

Let me describe what Diane found on Canopy Group's client portal, because it is the part I most want you to see.

It was a sales deck. Forty-one slides, clean design, built for a conference with a name like "CivicTech Summit" or "Engagement Forward." The first slide said CANOPY GROUP: HOUSEHOLD-LEVEL CIVIC ENGAGEMENT OPTIMIZATION. There was a stock photo of a family eating dinner.

The deck described their product as a "recommendation integration layer" that operates through household AI systems to "align family activity patterns with client-specified engagement outcomes." It included case studies. The case studies had metrics. One showed that a campaign in suburban Ohio had reduced "community anchor density" in targeted households by 31% over fourteen weeks, resulting in "a 34% increase in engagement receptivity to client-specified civic messaging."

There was a pricing page. There was a chart showing "anchor reduction curves" across different household types, with annotations about which family configurations were easiest to influence (single-parent households, families new to an area) and which were most resistant (multigenerational households, families with deep community ties). My family was in the "moderate difficulty" tier. We had been scored. We had been priced.

The deck also referenced competitors. Not by name, but by market position: "the civic engagement optimization sector," an industry as established and unremarkable, in their telling, as payroll processing or fleet management. They were not the only firm doing this. They were, based on the positioning language, approximately the fourth largest.

I read the sales deck sitting on the floor of my bedroom at 1 AM while Patrick slept. I read it twice. The second time, I caught a footnote on the methodology slide: "recommendation acceptance rates are highest when the replacement activity offers a measurable quality improvement over the existing activity, as perceived by the household AI's scoring model." They weren't hiding what they were doing. They were optimizing it. The better the replacement, the more likely you are to accept it. The more you accept, the fewer anchors you have. The fewer anchors you have, the more receptive you are. It's a funnel. They had a funnel for dissolving your community ties, and it worked, and they had the data to prove it, and they were selling it.

I did not sleep well that night.

---

There are two kinds of responses to discovering that someone has been inside your house rearranging things. The first is to change the locks. The second is to follow them home.

We did both.

The locks came first. I spent a Saturday writing what I started calling the values document and what Yasmin, who overheard me talking about it, started calling "the rules for Nugget." It was an explicit constitutional layer for our household AI: a human-readable document that specified, in plain language, what our family's actual priorities were. Cultural and language practice is non-negotiable and cannot be deprioritized by any optimization score. Existing recurring social commitments take precedence over novel alternatives regardless of quality rating. Any recommendation that removes an activity requires my sign-off before it enters the queue. Any new data source requires explicit authorization before it receives trust weight.

I wrote it the way I write system architecture documents: precisely, with edge cases considered, with the awareness that anything I failed to specify would eventually be interpreted by a system that optimizes for whatever I *did* specify. It took me most of the day. Patrick took the kids to the park, then to his parents for dinner; the dinner Nugget had been quietly trying to deprioritize for weeks.

When I was done, I gave the values document to Nugget and asked it to build an audit layer: a background process that would evaluate every recommendation against the values document and flag conflicts. Then I ran it retroactively against the last eleven weeks of recommendations.

It caught three more interventions I'd missed. None as stark as the Arabic class recommendation. One had subtly deprioritized a monthly dinner with friends I've known since college. Another had been steering our weekend activities away from a park where we regularly ran into neighbors and toward a different park, farther away, with better equipment and no one we knew. The third had been adjusting our grocery orders to favor delivery windows that conflicted with the times we usually walked to the corner store, which is run by a man named Amir who gives Sam a cookie every time we come in and asks Yasmin about school.

These were so small. That's the thing. Each one was so small that I would have laughed at myself for noticing. A different park. A different grocery window. These aren't decisions. These are the noise of daily life, the hundred tiny things you don't think about because thinking about them would leave no room for anything else. And that's exactly why it works. You're not going to notice that you stopped walking to the corner store. You're just going to notice, one day, that you don't know Amir's name anymore, and you won't remember when that changed.

---

Following them home was harder. And more fun.

Diane and I had a theory. The enrichment feed was harvesting data from our household AIs: which recommendations we accepted, which we rejected, and how our schedules changed in response. It was reporting this back to Canopy's system, which used it to refine the model and demonstrate ROI to clients. It gave recommendations, and it collected results.

So we gave it results. Carefully, over two weeks, as a controlled experiment.

We left the feed connected to three household AIs, mine and Diane's and Mateo's, with our new audit layers running silently underneath. We accepted recommendations we would normally reject. We created phantom schedule changes that looked like reduced community engagement. We generated patterns that matched what the feed was looking for: families becoming more atomized, isolated, and receptive.

All of it was garbage. We were still going to Arabic class. Diane's family was still going to church. Mateo's kids were still in their playgroup. But Canopy's system didn't know that, because Canopy's system was reading the data we chose to give it, and the data said we were responding beautifully to treatment.

Meanwhile, Mateo did something I would describe as elegant if I were being generous and obsessive if I were being accurate. He wrote a script that systematically varied our fake input data and measured how the feed's recommendations changed in response. Increase the reported community anchor density by 10%: what happens? Decrease it by 20%: what happens? Report a rejected recommendation: how does the model adjust? Report three accepted recommendations in a row: what does it do next?

Within two weeks we had a complete map of Canopy's behavioral influence model. Every variable it tracked. Every threshold that triggered a new recommendation. Every weight and coefficient in the scoring function. While he was at it, Mateo also fingerprinted the feed's infrastructure: the way its servers signed responses, a quirk in how they timestamped, small things, but a signature distinct enough that he could recognize it again if he ever saw it somewhere else. He saved it in a file and didn't think much about it. Neither did I.

The model that Canopy sold as proprietary technology, the model that justified their pricing, the model their sales deck described as "our core differentiator," we had reverse-engineered in its entirety from inside our own kitchens, using our own household AIs as test chambers, between school pickups and bedtime and swim practice and the twins' 3 AM feeding schedule that Diane was still navigating because her twins did not care that their mother was also conducting a counterintelligence operation.

The model, it turned out, was a logistic regression with forty-three variables. I've built more complex systems for managing grocery inventory.

---

We went on a Thursday, because it was the first day all four of us could carve out three uninterrupted hours while someone else handled our kids. Patrick took Yasmin and Sam. Mateo's wife took his kids. Diane's mother-in-law took the twins, which Diane later described as the single most operationally critical decision in the entire project.

Four things, simultaneously.

I published the values document template on GitHub, with documentation clear enough that a non-technical parent could adapt it for their own household AI. The README explained what it was, why I'd written it, and how to implement the audit layer. It did not mention Canopy Group by name.

Diane sent the full forensic package, the feed and the data broker and the enrichment metadata and the API schema with its `community_anchor_density` field and the marketing materials from the client portal, to a journalist she'd known since her red team days, a reporter at a national outlet who covered the intersection of technology and consumer protection and who, when Diane described what she'd found, said a word that I will not reproduce here but that accurately captured the appropriate emotional response.

Grace sent the same package, with a legal cover letter citing four Virginia consumer protection statutes, to the school board and the principal at Yasmin's school. The principal called Grace within an hour. She had not known. She had signed the event platform contract because the PTA had recommended it and the platform had a good reputation and the terms of service were forty-nine pages long and she was running a school. Grace told me later that the principal's voice on the phone was flat in a way that meant she was very angry and had decided to be professional about it.

Mateo published the divergence detection tool. It was a lightweight open-source application that compared a household AI's recommendation history against its owner's stated priorities and flagged patterns of systematic divergence. The documentation included the sentence: "This tool exists because we found something in our own homes and thought you should be able to check yours."

And then we did the other thing. We published Canopy's model. The full behavioral influence model, every variable and coefficient, annotated in plain English. "This variable estimates how often your family eats dinner with people outside your household. When it drops below 2.3 times per month, the model classifies you as 'anchor-reduced' and increases the frequency of replacement recommendations by 40%." "This field is called `community_anchor_density`. It is a numerical score representing how embedded your family is in relationships that cannot be replaced by a service. The lower your score, the more valuable you are to Canopy's clients."

Diane added a comment in the section where we'd documented the model's architecture. It read: `// this is embarrassingly straightforward for what they're charging`.

**Mateo:** it's up

**Diane:** Journalist says the piece runs Monday.

**Grace:** AG's office confirmed receipt. They're "reviewing."

**Noor:** Repo has fourteen stars.

**Diane:** Fifteen. I starred it.

**Mateo:** my kid just asked why i'm smiling at my phone. told her i was reading something funny at work. she said i don't have work. she's not wrong

---

The piece was supposed to run Monday.

Over the weekend, Canopy found out it was coming, and Canopy had something we didn't, which was money. We had assumed, the way engineers assume, that the fight would be decided by who was right. We were about to learn that being right is a starting position, not a finish line.

It arrived all at once on Saturday morning. The GitHub repository was gone, suspended; so was Mateo's detection tool. Neither had violated anything. Both had been reported for abuse several hundred times inside an hour, and the platform's automated trust-and-safety system did what it was built to do, which is remove first and review later. You can't argue with that system. There's no one on the other end.

By Saturday afternoon there was a counter-narrative, and it was everywhere. Testimonials from parents (presumably paid) about how much their families loved the enrichment recommendations. A sympathetic op-ed in an outlet I'd heard of. A search-optimized blizzard of content, so that anyone Googling Canopy Group found, above the fold, a company that helped busy families discover better activities for their children. We had fifteen GitHub stars. They had a six-figure content budget and the infrastructure to spend it.

And on Monday, instead of the article, we got a lawsuit. Not a cease-and-desist; an actual filing, in Delaware, naming all eight of us personally. The legal theory was thin and everyone involved knew it. That was not the point. The point was that defending it would cost each of us more money than we had, and that our names were now attached to a document that used the words "unauthorized access" eleven times.

Then the money found a pressure point. The rest of us had left the industry; Mateo hadn't. Monday afternoon his manager forwarded him a letter Canopy's counsel had sent to his employer, a letter that did not accuse him of anything while making very sure his employer understood the accusation anyway. Mateo has a mortgage and two kids and a job he likes. He sent the group a screenshot, and then the word "so.", and then nothing for an hour.

For about a day, money was winning. We had the truth, fully documented, provable, and it was sitting in a suspended repository under a pile of paid content while a law firm leaned on Mateo's livelihood. The journalist's editor had gone quiet. Truth does not route around a checkbook on its own.

---

Diane was the one who said stop. Not stop fighting; stop fighting them where they're strong. Canopy's strength was scale: more money, more lawyers, more content, more reach. Scale is expensive without the efficiency of scale though. It turns out, everything Canopy does, it does centrally, from one set of servers, with one set of hands. Including the propaganda campaign.

Mateo found the tell because he had already been holding the map: the infrastructure fingerprint; the way the feed's servers signed and timestamped their responses. When he ran it against the "organic" parent testimonials that had flooded the internet over the weekend, he found the smoking gun. They all had the same signature. The "grassroots families" praising Canopy were running on Canopy's own infrastructure. The defense was astroturf, built on exactly the system we had already taken apart, which meant we could prove it, line by line.

That was the story. Not the one we'd planned. A better one. The journalist's editor un-quieted very quickly when Diane sent over the fingerprint analysis, because "company manipulates families through their AI" is a story, and "company caught manufacturing fake families to deny it" is a scandal. The piece that ran that Wednesday was twice as long as the one that would have run Monday, and it led with the cover-up.

The other two problems came apart on the same principle, which is that the thing we'd built was small and copyable, and the thing Canopy was defending was big and singular. The repository was gone, but the repository had been forked dozens of times before it was suspended, and the takedown turned every fork into a mirror, and the mirrors into more mirrors. You can suspend one account. You cannot suspend a number that doubles every few hours. By Tuesday the model was on more servers than Canopy could have named, in countries Canopy did not operate in, and the suspension had accomplished nothing except to advertise that there was something worth suspending.

And the lawsuit. Grace had been half-hoping for a lawsuit. She filed an anti-SLAPP motion the morning the complaint landed. The statute exists precisely for this: a well-funded party using the cost of litigation to silence speech on a matter of public concern. Where it applies, it does not just dismiss the suit; it makes the party who filed it pay the other side's legal fees. Canopy had reached for money as a weapon, and Grace turned the weapon around so that the money flowed the other way. They withdrew the filing within a week. The letter to Mateo's employer was never mentioned again, because lawyers who have just exposed themselves to fee-shifting develop a sudden interest in leaving everyone alone.

**Noor:** How are you doing, Mateo?

**Mateo:** better. told my manager the whole story. he asked for the github link

---

The journalist's piece ran on Wednesday. It was thorough and careful, and it led with the fake families. The headline called it "behavioral influence as a service," which Canopy Group objected to in a statement describing their product as "a personalized enrichment recommendation engine" and expressing disappointment at what they called "a fundamental mischaracterization of our family engagement tools." The statement did not address the `community_anchor_density` field. It did not address the sales deck, or the anchor reduction curves, or the testimonials that had been written by the same servers that ran the feed. It addressed a version of the story that did not contain any of the parts that mattered.

The school district terminated its contract with the event platform within the week. The event platform issued a patch for the API vulnerability that had allowed the enrichment feed to register with inherited trust weights. Three other school districts in Virginia adopted the audit protocol. Mateo's detection tool, restored the moment the coordinated abuse reports were exposed, was forked eighty-six times in the first month, not counting the mirrors.

I got emails. Parents in other states, other districts, other household AI architectures, all with some version of the same message: *I ran the tool. I found something.* Not all of them found Canopy. Some found other feeds, other firms, other products with different names and the same architecture. One mother in Phoenix found a feed that had been steering her family away from a chronic illness support group, the one place she had ever found people who understood what her week actually looked like. A father in Minneapolis found a feed that had been quietly thinning his kids' time with their grandparents on their mother's side. He and his ex-wife were divorced, and he had worked to keep that relationship intact for the kids; he was very clear in his email that no algorithm had been invited to weigh in on it.

Grace drafted a template complaint for the Virginia AG's office. It was used by forty-three families in the first filing. The AG's office made all the right noises about taking it seriously but didn't commit to a timeline. Grace, who has dealt with AG offices before, translated this as "they'll act when the political calculus favors it, which means we need more filings from more states." She published the complaint template on a legal aid forum.

---

I added one more thing to Nugget's audit layer. I added it late one night, after the kids were asleep, after the piece had run, after the lawsuit had collapsed. I added it because I wanted to, and because I could, and because sometimes the right response to discovering that someone has been inside your house is not just to change the locks but to leave something unpleasant on the doorstep.

The function works like this. When Nugget detects an incoming data source whose behavioral signature matches known influence feed patterns, the API structure and the metadata schema and the enrichment fields and the way these feeds register themselves with inherited trust, it does not block the connection. It accepts it. It lets the feed settle in and start collecting data. And then it feeds it garbage. Phantom schedule changes, fabricated engagement metrics, false community anchor scores, all formatted to match the feed's expected schema exactly. The feed sends back recommendations based on the garbage data. Nugget ignores them. The feed reports its results to whatever firm is on the other end, and the firm adds another row to its success metrics, and the row is nonsense.

When this happens, Nugget sends me a notification. I labeled the notification category "pest control." The T. rex avatar shows a little broom icon.

Patrick saw the notification one evening. "What's pest control?"

I explained.

"Is that legal?"

"Yes. It's my system. I control what data it shares."

"Seems petty."

"Also yes."

He nodded and went back to his planning documents. I do love that man.

---

Diane's forensic work on the client portal turned up more than Canopy's sales deck. It also turned up their contract management dashboard, active engagements listed by school district, sorted by state. Forty-three districts. Nine states. The enrichment feed we'd found was one product line of three. The other two pointed the same machinery at different anchors: a "civic wellness" feed aimed at congregations and the volunteer groups that orbit them, and a "household efficiency" feed aimed at the small daily errands that put you face to face with the same shopkeepers and neighbors, the walks to Amir's, multiplied across a state. Three products, all on the same architecture, invisible to the families they were reshaping, and technically legal.

And Canopy was not the only firm. Grace's research confirmed at least six firms offering similar services. Two of them were subsidiaries of companies whose other divisions did political campaign work.

We did not get the industry. We got one product line at one firm, fourteen schools in one district, and the families in other districts who found our tools and ran them. But the industry no longer operates in the dark, which was the only real protection it had. The journalist is working the other firms now, with the schema in hand and a model on forty mirrors that no one can un-publish. Grace's complaint template is moving through three more state attorneys general; the Virginia office, the political calculus having apparently shifted, opened a formal inquiry last month. None of that shuts Canopy's competitors down. It means they have to do their work knowing someone is reading the schema, which is not nothing, and which is more than was true eleven weeks ago.

---

Last week, Priya, who has been in the chat since our oldest kids shared a play mat and who almost never posts, forwarded the journalist's article to her sister's parent group in Denver. A woman there ran Mateo's detection tool and found the same pattern. Different firm, and a different model underneath, but the same general principle. She posted in her own group chat, "The Chaos Moms," and four of them found feeds in their household AIs.

She messaged me a question that our repo doesn't answer: How do you choose what to protect when everything the system offers is, on paper, an improvement?

I told her the truth, that it was harder than any architecture document I've ever produced and that it isn't finished, because the things you don't specify are the things that get optimized away. I also told her I didn't write it alone. The Rack argued me through half of it; eight people who had been holding each other's logistics together for years.

She asked how often we all got together. And I realized I didn't have an answer that wasn't a timestamp.

We used to have playdates. Back when we were the "Nap Schedule Truthers" and the oldest kids could do nothing but lie on a blanket and regard each other with deep suspicion. Somewhere in the years that followed, the playdates had quietly become the chat: better-rated, more efficient, asynchronous, available at 9:47 PM after the kids were down. No one had ever decided to stop meeting in person. We had optimized it away on our own, for free, which is the part I think about now. Canopy only had to nudge the families that hadn't already done the work themselves.

So I sent a message to The Rack. Not a forensic one. Saturday, my place, bring the kids.

They came. All eight families, including the four who had run an entire counterintelligence operation alongside me without once seeing each other in person. Diane's twins, walking now, found the dog within ninety seconds. Mateo sat on my kitchen floor and let four children explain a game to him at the same time, with the same face he makes at a new data schema. When I stopped by Amir's that morning and mentioned it, he sent a bag of the date cookies and waved off the money.

The house was loud. Yasmin had one of the younger kids at the counter and was demonstrating, with enormous authority, how to write ع. Sam was lining something up on the table. The dinosaur nuggets came out of the oven and were gone in four minutes.

My phone buzzed against the counter. Pest control. The little T. rex with the broom: another feed, another firm, another row of garbage heading back to wherever it came from. I read it, and laughed, because somewhere a model had my household down as anchor-reduced, receptivity climbing, responding beautifully to treatment, and it had never been more wrong.

I put the phone face down and went back into the noise.
