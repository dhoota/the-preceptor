# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

<!-- Shipped to iOS and Android as a Capacitor WebView app. Mobile web remains
`web`: a native wrapper around a web build does not make the design language
native, and the game deliberately uses one visual language on both stores. -->

## Users

Primary: broad casual mobile players who like animals and tidy, legible
time-management loops — the audience that plays cooking/diner games and pet
sims. Rated 4+, so children play it unsupervised and adults play it in short
bursts (a commute, a waiting room, ten minutes before bed).

The real usage scene is one hand, a phone, moderate time pressure, often with
sound off. Sessions are short: a day is three rounds and takes roughly three to
four minutes. iPad is a committed second target with its own layout.

## Product Purpose

You run a small-town dog daycare. Every day is three timed rounds — feed, walk,
settle — and the rounds depend on each other. Success is getting every dog
through the whole chain before each clock runs out, day after day, for 250 days.

The game exists to make care legible: the reward loop is not points, it is
thirty dogs asleep and nobody hungry.

## Positioning

Nurture pet games have shallow moment-to-moment play; time-management cooking
games have deep moment-to-moment play and no attachment to who they are serving.
This puts a three-round time-management loop inside a pet-care fantasy with a
collection meta, and binds the rounds with one rule a neighbouring product does
not have: **a dog that was never fed will not take the leash, and a dog that
never got its walk will not settle at bedtime.** Rushing round one is paid for in
round three. That chain is enforced in code, not explained in a tooltip.

## Operating Context

A day runs: day card (chapter, weather, story beat) → Mealtime → Walk Time →
Bedtime → results. Between days the player visits the Dogdex, the shop
(upgrades and consumable boosts), settings and achievements.

- **Mealtime** — each dog requests one specific food. Two input styles, both
  supported: tap a bowl then tap the dog, or drag the bowl across. A shared
  corner clock runs the round; each dog also has its own patience ring.
- **Walk Time** — each dog needs gear appropriate to the day's weather. Unfed
  dogs are resolved out of the round as accidents and cost money.
- **Bedtime** — each dog needs its comfort item. A dog that missed its walk is
  wound up and only accepts calming items.

A care meter drains on every miss; at zero the day is lost and costs a heart.
Hearts cap at five and refill one per twelve minutes of wall-clock time.

## Capabilities and Constraints

- **One self-contained `www/index.html`.** No bundler, no framework, no build
  step for the web layer, ES5-style JavaScript. This is a deliberate constraint,
  not an accident: the whole game stays greppable, diffable and testable in a
  browser. Anything added must respect it — no npm runtime dependencies.
- **Must play in airplane mode.** `scripts/bundle-assets.sh` downloads every
  asset at CI build time and rewrites the URLs to relative paths. Any font,
  image or script added must be local, never a runtime CDN fetch.
- **Save format is `localStorage` via a `window.storage` shim**, under key
  `dutch.daycare.save.v1`. The schema only ever gains fields so old saves
  migrate cleanly.
- **34 breeds, 16 foods, 6 pieces of walk gear, 8 comforts, 5 weather states,
  250 days, 10 chapters, 88 story beats, 8 upgrades, 4 boosts, 11 achievements,
  4 themes.** 81 pieces of generated art, all declared statically in one `ART`
  object; `scripts/validate.py` fails the build on an unresolved reference.
- **No ads, in any form.** This is a product commitment, not a current state.
- **v1.0 ships with no purchase surface.** The storefront is written and gated
  behind one flag that is false while the RevenueCat key is a placeholder, so
  the listing can truthfully declare no in-app purchases. No price literal ever
  appears in source; prices come from the store at runtime.
- **iPad is a committed target** (`TARGETED_DEVICE_FAMILY = "1,2"`) with a real
  tablet layout rather than a stretched phone.
- Verification suite that must stay green: `validate.py`, `playtest.js`,
  `save-probe.js`, `layout-probe.js`, `screens-probe.js`, `input-probe.js`.

## Brand Commitments

- **Dutch**, a golden retriever, is the main character and narrator. He runs the
  daycare, teaches the chain, slows down across the story and hands the place
  over by day 250. He appears on the floor every single day.
- The **existing generated art is binding**: 34 breed portraits, four scene
  backgrounds, the food/gear/comfort icons, the currency and reward icons. It
  can be presented better but not replaced.
- **The 88 story beats are binding copy.** Every dog has its own voice; three
  long threads pay off across the 250 days (Bruno's barrel, Biscuit's list,
  Dutch's hips). Nothing in the story may be rewritten for visual convenience.
- Voice: dry, warm, understated, British-inflected. The dogs are characters with
  reasons, never mascots delivering slogans. No exclamation-mark enthusiasm, no
  marketing register inside the game.
- App name "Dutch's Doggy Daycare" (21 chars). Bundle ID
  `com.dhoota.dutchgolden`, permanent.

## Evidence on Hand

- `www/index.html` — the shipped game.
- `www/assets/` — all 81 art assets (gitignored; fetched at build time).
- `README.md`, `LAUNCH_KIT.md`, `IAP-SETUP.md`, `SUBMIT.md` — loop, store
  listing copy with market research and sources, product catalog, submission
  checklist.
- `PRIVACY-POLICY.md` — written to cover the app as built.
- `.design/shots/` — rendered captures of every screen at phone and desktop.

No testimonials, reviews, download numbers, press or awards exist. The game has
not shipped. Nothing may claim otherwise.

## Product Principles

1. **The chain is the game.** Feed, then walk, then settle. Every design
   decision should make that dependency more legible, never less.
2. **Care reads as care.** The dogs are individuals with names, favourites and
   reasons. Interface decisions that turn them into interchangeable tiles are
   wrong even when they are efficient.
3. **Legible under pressure.** A player mid-round with a clock at eight seconds
   must parse who wants what without reading. Clarity outranks expression in the
   HUD; expression belongs to the cast, the sheets and the world.
4. **Generous, never punishing.** Hearts refill, days can be retried, a lost day
   costs nothing already banked. Nothing in the product may make a child feel
   they have ruined something.
5. **Earn the money or do not take it.** No ads. No dark patterns. The shop is
   optional, priced by the store, and hidden entirely when it is not live.

## Accessibility & Inclusion

Rated 4+ and played by children, so reading load must stay low and nothing may
depend on colour alone to be understood. Target WCAG AA contrast for text.
Respect `prefers-reduced-motion`. Touch targets sized for small hands.
The game must remain fully playable with sound off, which is its normal state.
