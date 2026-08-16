# Launch kit — Dutch's Doggy Daycare

Everything that goes in the store listing, plus the market reasoning behind the
design decisions. Written to be pasted, not admired.

---

## 1. Where this sits in the market

Research done August 2026. Sources at the bottom.

**The category is real but not crowded at the top.** The virtual pet simulator
market was ~$431m in 2025 and is tracking to ~$473m in 2026. The genre's
best-known titles — My Talking Tom (500m+ downloads), Moy, Dogotchi, Hellopet —
are almost all *nurture* games: you own one pet and keep it alive. Simulation as
a whole grew 12% YoY in revenue, so the money is there.

**The gap this game aims at.** Nurture pet games have shallow moment-to-moment
play; time-management cooking games have deep moment-to-moment play and no
emotional attachment. Almost nobody puts a proper three-round time-management
loop *inside* a pet-care fantasy with a collection meta. That is the whole bet:
the tap-satisfaction of a cooking game, the retention curve of a collection
game, and dogs — which are the most reliably marketable thing on the app stores.

**What the retention benchmarks say we have to clear.** Industry D1 is ~26%, D7
~10%, D30 under 4%. D1 is an onboarding problem, D7 is a habit-loop problem, D30
is a depth problem. Each is addressed by a specific feature below rather than
by hoping.

**Hybrid-casual is the shape that monetises.** Hybrid-casual — a mechanic
anyone understands in ten seconds wrapped in mid-core retention systems — runs a
40–50% IAP revenue share and targets 60–90 day retention. The consistent warning
across every 2026 source is the same: overloading players with ads or paywalls
too early drives churn and wrecks review scores. Hence: no ads at all, and no
purchase surface whatsoever in 1.0.

### How that maps to what was actually built

| Retention problem | The feature answering it |
| --- | --- |
| **D1** — is the first session legible? | Day 1 is two dogs and three bowls. Foods unlock on a curve (`3 + day/9`), gear on `2 + day/22`. Dutch explains the whole chain in two story beats. |
| **D3 cliff** — is there a reason to come back a third time? | Daily streak, offline earnings on launch, hearts that refill while away, and a new breed arriving every few days through day 33. |
| **D7** — is there a habit loop? | Three-round day structure gives a natural ~3–4 minute session. Dogdex levels, upgrade ladder, achievements. |
| **D30+** — is there depth? | 250 days, 10 chapters, 34 breeds, weather variety, a difficulty curve tuned specifically not to flatten. |
| **Conversion** | Storefront laddered $-tier style (see `IAP-SETUP.md`), starter pack, subscription — all deferred to 1.1 so 1.0 launches clean. |

### Deliberate choices against the grain

- **No ads, ever.** The research is unanimous that early ad load is the top
  churn driver in this category, and an ad-free pet game is a genuine
  differentiator in a genre where My Talking Tom is famous for interstitials.
- **No purchases in 1.0.** Apple allows a first in-app purchase to be submitted
  with any new version, so 1.1 is a perfectly normal home for it. Shipping IAP
  in 1.0 means creating every product, writing descriptions, capturing a review
  screenshot per product and wiring RevenueCat — days of dashboard work standing
  between a finished game and a live app.
- **Hearts are generous.** Five, one back every twelve minutes, refillable with
  a boost you can buy with soft currency. An energy gate that actually blocks
  people is a one-star review generator.

---

## 2. App Store listing

### Name (30 char limit)
```
Dutch's Doggy Daycare
```
*(21 characters)*

### Subtitle (30 char limit)
```
Feed, walk & tuck in the pack
```
*(29 characters)*

### Promotional text (170 chars, editable without review)
```
Meet Dutch, the golden retriever who runs the place. 34 breeds, three timers a day, and one rule that matters: feed them before you walk them.
```

### Description

```
Dutch is a golden retriever who has run this daycare for years, and today he is
handing you the leash.

Every day is three rounds against the clock.

MEALTIME
Each dog asks for one specific thing. Biscuit the corgi wants cheese. Bugle the
beagle will eat anything but waits quietly for turkey. Peanut the chihuahua
would like the peanut butter, and would like it now, thank you. Read the bubble,
grab the bowl, get there before the patience ring runs out.

WALK TIME
Leashes on, and mind the weather — a rainy day is a raincoat day, a hot day
needs the cooling vest. Here is the rule the whole game hangs on: a dog that
never got its bowl will not take the leash. Rush the feeding and you will spend
the evening with a mop.

BEDTIME
Thirty dogs, one nightlight, and a clock. Mochi needs the lullaby. Domino needs
the light turned down. A dog that missed its walk is wound up and will only
settle for something calming. Get everyone down before lights out or nobody
sleeps.

34 BREEDS, EACH ONE THEMSELVES
Corgis and Great Danes, a Saint Bernard who has never disclosed what is in the
barrel, and a bulldog who is aware the walk is starting and would like it noted
that the timing of getting up is his. Learn their favourites and the Dogdex
levels up with you.

250 DAYS
Ten chapters, a story that goes somewhere, and a difficulty curve built for the
long haul rather than the first week.

NO ADS. NOT ONE.
No interstitials, no rewarded videos, no pop-ups between rounds. Just the dogs.

Feed first. Walk second. Everything else is negotiable.
```

### Keywords (100 char limit, comma-separated, no spaces)
```
dog,puppy,pet,breed,care,daycare,animal,kennel,cooking,time,management,cute,collect,simulator,walk
```
*(99 characters. `dog` and `pet` also appear in the name/subtitle, which the
algorithm combines — do not waste keyword characters repeating them, but `dog`
is worth the duplication for exact-match weight.)*

### Category
Primary: **Games → Simulation**. Secondary: **Games → Casual**.

Simulation is where the pet-care audience browses and where the 12% YoY revenue
growth is. Casual widens the top of the funnel.

### Age rating
**4+.** No violence, no gambling mechanics, no user-generated content, no web
views, no data collection. The care meter and the accidents are the only
negative feedback and both are gentle.

### Support / marketing URLs
- Support URL — required on the version page.
- **Privacy Policy URL — lives on App Information, not the version page.** The
  Support URL field is separate and setting one does not set the other.
- `PRIVACY-POLICY.md` in this repo is written to cover the app as built.

---

## 3. Google Play listing

### Title (30 chars)
```
Dutch's Doggy Daycare
```

### Short description (80 chars)
```
Feed, walk and tuck in 34 dog breeds. Three timers a day. No ads, ever.
```
*(70 characters)*

### Full description
Reuse the App Store description above; Play allows 4000 characters so it fits
comfortably. Play weights the short description and title heavily for search, so
keep "dog" in both.

---

## 4. Screenshots

**Required exact pixel sizes — no device shoots at these:**

| Slot | Size |
| --- | --- |
| 6.5" iPhone | 1284 × 2778 or 1242 × 2688 |
| 13" iPad | 2064 × 2752 |
| Play phone | 1080 × 1920 (min 320px, max 3840px, 16:9-ish) |

`scripts/fit-screenshots.py` scales-to-fill and centre-crops real device
screenshots to the exact size. **It refuses to fake an iPad shot from an iPhone
one** — 0.46 against 0.75 aspect discards 38% of the image and still shows a
phone layout, which is a guideline 2.3.10 rejection.

> **Decide this early.** `TARGETED_DEVICE_FAMILY` is currently `"1,2"`, which
> means iPad is supported and iPad screenshots are mandatory. If you do not have
> an iPad, either borrow one, or set it to `"1"` in **both** build
> configurations in `ios/App/App.xcodeproj/project.pbxproj` and add iPad in 1.1.
> `layout-probe.js` already confirms the layout is correct on all six iPad
> viewports, so shipping iPad is a photography problem, not a code problem.

### The five shots, in order

The first two are what 90% of browsers actually see. Both must sell the loop
without a caption.

1. **Mealtime, mid-round.** Five dog cards with want-bubbles showing, patience
   rings part-drained, the corner clock amber, a bowl mid-drag.
   Caption: **"Every dog asks for something different"**
2. **The Dogdex.** The grid, mostly unlocked, a few silhouettes left.
   Caption: **"34 breeds to meet and know"**
3. **Walk Time on a rainy day.** Raincoats in the tray, weather chip visible.
   Caption: **"Feed them first — or they won't go out"**
4. **Bedtime.** Night background, blankets and lullabies, two dogs already 💤.
   Caption: **"Get everyone down before lights out"**
5. **A story beat.** Dutch's portrait and a line of dialogue.
   Caption: **"250 days. Ten chapters. No ads."**

Take them on a real device after `bundle-assets.sh` has run — this environment
cannot reach the asset CDN, so anything rendered here has empty art boxes.

---

## 5. App Privacy (App Store Connect)

For **1.0**, with the placeholder RevenueCat key:

| Question | Answer |
| --- | --- |
| Data collected | **Data Not Collected** |
| Tracking | No |
| In-app purchases | **No** |

The app has no network calls, no analytics, no ads, no accounts. Saves are
`localStorage` only. `PrivacyInfo.xcprivacy` declares `CA92.1` for UserDefaults,
which is the required-reason API this uses.

For **1.1**, all three of these flip together or the metadata contradicts the
binary:

| | 1.0 (placeholder key) | 1.1 (real key) |
| --- | --- | --- |
| Listing | "No in-app purchases" | declare **Offers In-App Purchases** |
| App Privacy | **Data Not Collected** | **Purchases** — not linked to identity, not used for tracking, App Functionality |
| Description | may claim no IAP | **must not** claim no IAP |

The description above says "NO ADS. NOT ONE." — that stays true in 1.1 and is
worth keeping. It says nothing about purchases, so it does not need rewriting.

---

## 6. Android: start this on day one

A new personal Play developer account must run a **closed test with 12 testers
for 14 continuous days** before it can be promoted to production. That is the
longest pole in the entire project and it is pure calendar time, not work.

**Recruit the twelve while the iOS build is in review.** They need to be twelve
distinct Google accounts that opt in and keep the app installed for the full
fortnight.

---

## Sources

- [Virtual Pet Simulator Apps Market forecast 2026-2032 — GII Research](https://www.giiresearch.com/report/ires1939923-virtual-pet-simulator-apps-market-by-platform.html)
- [13 Best Virtual Pet Games for Android & iOS (2026) — The NineHertz](https://theninehertz.com/blog/top-apps/best-virtual-pet-games-app-for-android-ios)
- [Top mobile games 2026: the global winners — Singular](https://www.singular.net/blog/top-mobile-games/)
- [Mobile Game Monetization 2026: The Expert Playbook — AppFollow](https://appfollow.io/blog/mobile-game-monetization)
- [Hybrid Casual Games 2026: Design, Monetization and the Real Revenue Split — Game Growth Advisor](https://gamegrowthadvisor.com/blog/2026-04-16-hybrid-casual-game-design-strategy-2026/)
- [Casual Games IAP Monetization: 8 Models, Strategies & Case Studies (2026) — SolarEngine](https://blog.solar-engine.com/en-blog/docs/casual-games-iap-monetization-strategies)
- [Battle Pass Economics — Playio](https://blog.playio.co/battle-pass-monetization)
- [Mobile Game Retention Benchmarks — AppAgent](https://appagent.com/blog/mobile-game-retention-benchmarks/)
- [Profitable Hyper-Casual Games in 2025: Tips & Trends — Gamix Labs](https://gamixlabs.com/blog/how-to-build-profitable-hyper-casual-games-2025/)
