---
name: Dutch's Doggy Daycare
description: A timed dog-care game played in a kennel yard after dark, lit like a floodlit field.
colors:
  ground: "#0d2620"
  panel: "#14352c"
  raise: "#1c4538"
  teal: "#081c18"
  teal3: "#2c6b58"
  ink: "#f4f1e4"
  ink2: "#9fb8a6"
  ball: "#d8f24a"
  ball2: "#b4d426"
  ball-ink: "#e6ff6b"
  clay: "#ff7a45"
  clay-ink: "#ffa273"
  leaf: "#7ee081"
  leaf-ink: "#9be89f"
  berry: "#ff4d5e"
  berry-ink: "#ff8f9b"
  teal-ink: "#6fe3cf"
  sky: "#5ad1e8"
  iris: "#ff6fd8"
  on-accent: "#08211b"
  line: "rgba(216,242,74,.15)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(26px, 7vw, 42px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariationSettings: "'wdth' 100, 'opsz' 40"
  wordmark:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(30px, 8.4vw, 50px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariationSettings: "'wdth' 100, 'opsz' 88"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(18px, 4.6vw, 24px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "14.5px"
    fontWeight: 500
    lineHeight: 1.5
  speech:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "16.5px"
    fontWeight: 500
    lineHeight: 1.58
  label:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  sm: "5px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "26px"
components:
  button-primary:
    backgroundColor: "{colors.ball}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "13px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.teal-ink}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "13px 20px"
    height: "48px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "48px"
  collar-tag:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink}"
    rounded: "5px 999px 999px 5px"
    padding: "6px 13px 6px 19px"
  price-coin:
    backgroundColor: "{colors.ball}"
    textColor: "{colors.on-accent}"
    rounded: "14px"
    height: "44px"
  price-bone:
    backgroundColor: "{colors.clay-ink}"
    textColor: "{colors.on-accent}"
    rounded: "14px"
    height: "44px"
  dog-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "8px 8px 0"
  request-strip:
    backgroundColor: "color-mix(in srgb, {colors.ball} 17%, {colors.panel})"
    textColor: "{colors.ink}"
    height: "42px"
  sheet:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "22px"
---

# Design

<!-- The world this product actually has. Tokens are normative; the prose says
     how to apply them and, where it matters, what was tried and rejected. -->

## Overview

A kennel yard after dark, lit like a floodlit field. The mode is **Operate with
an Experience overlay**: the player is completing a timed task, so the HUD is
ruthless about legibility, while the cast, the story sheets and the Dogdex are
where the world gets to speak.

Three rules govern every decision:

1. **The art is the star; the interface is the frame.** Every asset in this
   product is a glossy, brightly-lit 3D character, and they are the reason
   anyone plays. Chrome recedes. Characters do not.
2. **Legible under a clock.** A player with eight seconds left must parse who
   wants what without reading a sentence.
3. **One bright thing at a time.** On a dark ground, brightness is the scarcest
   resource in the composition. It gets spent on the characters and on the next
   action, and on nothing else.

## Colors

**The ground is bottle green, not paper.** The previous system put these
characters on warm cream, which is where every generated interface lands by
default, and it had a real cost beyond looking generic: a pale ground sits in
the same tonal register as the art, so the characters and the page competed
instead of separating. Dropping the ground to `#0d2620` makes them read as lit
subjects on a dark field — the whole reason to have commissioned art at all.

- **`ground` / `panel` / `raise`** — three steps of bottle green. `panel`
  for cards, `raise` for tiles and recesses, `ground` for the page. Never a
  `surface` card directly on a `surface` pane; step the container.
- **`ink` / `ink2`** — bone and a green-grey. Bone, never pure white: white on
  saturated green vibrates.
- **`line`** — rules are chartreuse at 15%, never neutral grey. It is a small
  thing that ties every edge in the product to the same source.

**Chartreuse is the signature and it is rationed.** `--ball` is tennis-ball
green: the one colour every dog owner already associates with a dog, almost
never used as an interface primary, and the brightest thing that can exist
against bottle green. So it means exactly one thing — *touch this next* — and
nothing else may use it. The clock deliberately does **not**: its ramp runs
mint → persimmon → berry, because the clock is not the thing you press.

**The `-Ink` pairs invert on this ground.** The readable member of each pair is
now the lighter one. `teal-ink`, `leaf-ink`, `ball-ink`, `berry-ink` and
`clay-ink` all clear 4.5:1 on `ground` and are what anything **carrying text**
uses; the base hues stay for fills, rings and strokes.

**`on-accent` is the one token for text sitting on an accent fill.** Every
accent in the default world is bright, so it is near-black; in the one light
theme the accents invert and so does this. One token means no button has to
guess, and `#fff` never gets hardcoded onto a mint fill again.

**Two currencies, two colours.** Coins take chartreuse, bones take clay. A bone
price is never mistaken for a coin price at a glance.

Four themes redefine every one of these, including `on-accent`, `turf` and the
whole `-Ink` set. Night Shift goes indigo, Sunset goes ember, and Meadow is the
one light option — a cool lime wash, deliberately not warm paper.

## Typography

**Bricolage Grotesque** is the display face: a grotesque assembled from
deliberately mismatched sources, with width and optical-size axes. It is
crooked in a way no default pairing is, and with the width axis fully open at a
large optical size it reads like signage painted on a kennel wall. It carries
the wordmark, headings, the day number, dog names, the clock numeral, shop
product names and score pops.

**Hanken Grotesk** carries the text: tall x-height, open apertures, legible at
11px on a dark ground, warm enough not to fight the art.

Both are SIL OFL 1.1 and both are self-hosted — 166 KB for the Latin pair —
because the store build has to run in airplane mode. No system stack, no
webfont link, and no serif: a serif here would be a costume borrowed from a
different kind of product.

Weight is the hierarchy, not size alone: display 600, body 500, 800 reserved
for small uppercase labels and counts. Every counter that changes in place
carries `tabular-nums`. Minimum size is 11px.

## Layout

Phone-first, with two real breakpoints: below 900px the tray docks along the
bottom in the thumb zone; at 900px and up it becomes a 320px right-hand rail
and the dog floor takes the room, which is what makes the iPad build read as an
iPad build.

**The floor is not a spreadsheet.** Alternate dog cards drop 14px, and every
fourth drops 6px, so the floor reads as animals standing around a yard rather
than rows in a table. It is one line of CSS and it is the first thing that
stops the layout looking generated.

The grid is 2-up on a phone, 3-up above 430px, 4-up above 700px, with
`align-content: safe center` so a full floor scrolls from the top.

## Signature details

These are the things that could not be swapped into another product:

- **The collar tag.** Every count is a thing clipped to a dog's collar: flat
  left edge where the ring passes through, rounded right, and a punched hole.
  One pseudo-element.
- **The seam.** The rule between the free bowls and the paid consumables is the
  curve off a tennis ball. It is the one line in the layout a thumb-slip across
  costs money, so it is the one line that is not straight. Masked rather than
  inlined, so it takes the theme colour.
- **Turf.** A two-tone dot lattice at 14px over the ground, so the dark is a
  surface rather than an absence. Not a gradient — a texture.
- **The chartreuse inner hairline** along the top of every raised surface, so a
  card looks lit from above by the same yard light the characters stand in.

## Elevation & Depth

Shadows are near-black with an offset **and** a blur, plus that inner
highlight: `--shadow` for pressables, `--soft` for resting surfaces, `--lift`
for the thing under the finger and for modal sheets, and `--contact`, a
`drop-shadow` filter for cut-out characters so a dog stands on the card rather
than being pasted onto it.

Zero-blur block shadows are banned: that is a neobrutalist costume and this
world did not choose it.

## Shapes

Five radii — 5 / 12 / 18 / 24 / 999 — tighter than the soft blobs everything
arrives wearing. Boost buttons are the one deliberate circle in the product, so
a paid consumable can never be mistaken for a free bowl.

## Do's and Don'ts

**Do**

- Spend brightness on the characters and the next action. Nothing else.
- Use `-Ink` colours for anything carrying text, and `on-accent` for text on a
  fill.
- Give a state a mark or a word as well as a colour.
- Keep looping motion for one meaning only — the critical clock.
- Respect `prefers-reduced-motion`: decoration stops, state changes stay.
- Repaint before you celebrate. `deliver()` calls `paintPlay()` and *then*
  animates, because the old order replaced the node the animation was on.
- Keep every touch target at 44px or more.

**Don't**

- Don't use chartreuse for anything that is not the next action.
- Don't put the product back on cream, or reach for a serif, a system font, or
  a gradient hero.
- Don't align the dog floor to a ruler.
- Don't use `mix-blend-mode` to hide an asset's backdrop. On pale paper
  multiply dissolved a pale plate; on this ground it dissolves the subject.
  Assets carry a real alpha channel — see `scripts/prep-art.py`, which keys the
  plate out with an edge-gated flood and refuses rather than damage a subject.
- Don't hardcode a colour a theme needs to redefine, and never hardcode `#fff`
  on an accent fill.
- Don't animate `width`, or transition `all`.
