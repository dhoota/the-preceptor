---
name: Preceptor: NCLEX
description: The Preceptor house look for an offline NCLEX-RN study app. Warm paper, navy ink, one gold accent.
colors:
  paper: "#f7f5f0"
  paper-2: "#efece4"
  card: "#fffdf8"
  ink: "#15202b"
  ink-2: "#3b4856"
  muted: "#5c6774"
  line: "#d9d4c7"
  line-2: "#e7e3d8"
  navy: "#00305c"
  navy-2: "#0a4478"
  fill: "#00305c"
  on-fill: "#ffffff"
  gold: "#b88700"
  gold-ink: "#8a6500"
  gold-soft: "#f5e7bf"
  red: "#a4262c"
  red-soft: "#f6dcdc"
  green: "#2f6b3a"
  green-soft: "#dcebdc"
  dark-paper: "#11161c"
  dark-card: "#1a222b"
  dark-ink: "#e9e6de"
  dark-muted: "#8e98a3"
  dark-navy: "#8fb6de"
  dark-fill: "#24507e"
  dark-gold: "#e0b43c"
typography:
  display:
    fontFamily: "Iowan Old Style, Charter, Source Serif Pro, Georgia, serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  stem:
    fontFamily: "Iowan Old Style, Charter, Source Serif Pro, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
    letterSpacing: "0.14em"
  numeric:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontFeature: "tnum"
rounded:
  sm: "2px"
  md: "3px"
  pill: "22px"
spacing:
  gutter: "18px"
  section: "30px"
  row: "14px"
components:
  button-primary:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.on-fill}"
    rounded: "{rounded.md}"
    padding: "15px 20px"
    height: "50px"
  button-primary-active:
    backgroundColor: "{colors.navy-2}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
  button-disabled:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.muted}"
  option:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  option-right:
    backgroundColor: "{colors.green-soft}"
  option-wrong:
    backgroundColor: "{colors.red-soft}"
  chip-selected:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.on-fill}"
    rounded: "{rounded.pill}"
    height: "44px"
  tag:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.sm}"
---

# Design System: Preceptor: NCLEX

## Overview

The Preceptor house look, shared across the Preceptor exam apps. It is clinical and quiet: a chart on warm paper, read under ward lights or on a commute. Serif carries what the exam says: stems, case summaries and rationales. Sans carries the interface. Mono carries numbers and time. Surfaces are flat and separated by hairline rules. Gold appears once per view, as a mark or a rule, never as decoration.

The source of truth is `src/styles.css`. The tokens at the top of that file are the shared layer. Other Preceptor apps carry a copy of the same block, so port token changes to them by hand.

## Colors

- **Paper and card.** Warm off-white `paper` for the page, `card` one step lighter for items and exhibits.
- **Navy ink.** `navy` for links, selected states and progress. `fill` is the primary button fill. It stays deep navy in dark mode, so the house ink survives the theme switch. `navy` itself turns pale blue in dark mode for text and marks.
- **Gold.** `gold` for rules, marks, the active tab and the selected plan. Gold text uses `gold-ink`, which passes AA on paper and card.
- **Muted.** `muted` for labels, hints and captions. It passes AA on paper, paper-2 and the soft tints.
- **Status.** Green, red and gold-soft tints mark right, wrong and partial answers. Color never works alone: every marked answer also carries a text tag.

## Typography

- Display and stems in the serif stack. Headings balance their lines.
- Interface text in the platform sans at 16px.
- Section titles are `h2.label`: small caps sans with wide tracking over a 1px ink rule.
- Numbers, counts, times and prices in mono with tabular numerals.
- The Larger text setting sets `--fs` to 1.18. Every text size that matters for reading multiplies by `--fs`.

## Layout

- One column, 720px max, 18px gutters.
- Sticky header, fixed bottom tabs on tab screens, fixed action dock in a set.
- Lists are full-width rows separated by hairlines, not cards.
- Breakpoints at 560px (case step names hide), 600px (matrix columns stack) and 760px (bow-tie stacks).

## Elevation & Depth

Flat. No shadows. Depth comes from tone (paper, card) and 1px rules. A 1px inset ring marks a selected option. The only overlay is the full-screen disclaimer.

## Shapes

- Radius 3px on buttons, options, cards and callouts. 2px on tags. Pills (22px) only on chips and drag tokens.
- Callouts use a full 1px border in their tone. No thick side stripes.
- The rationale box keeps a 3px gold top rule. The Canada note keeps a 2px navy top rule.

## Components

- **Buttons.** Primary navy fill, ghost with navy outline, quiet with hairline. Disabled buttons turn paper-2 with muted text. All at least 44px tall.
- **Options.** Card rows with a radio or checkbox box. After Submit: green for the key you chose, red for a wrong choice, dashed green for a key you missed. Each shows "Key" and "Your answer" tags.
- **Verdict.** Score box in the result tone. It takes focus and scrolls into view after Submit, and is a status region for screen readers.
- **Tabs.** Five labels, 50px tall, with a 3px gold bar on the active tab.
- **Exhibit tabs.** Horizontal scroll with a fade at the right edge when more tabs follow.
- **Switch.** 52 by 32 with a muted outline in the off state and a larger hit area.

## Do's and Don'ts

- Do keep one gold moment per view.
- Do put new colors in the token block, with a dark value, and check AA.
- Do scale new reading text by `--fs`.
- Don't add an eyebrow label above a heading that repeats it.
- Don't use thick colored side stripes on callouts or cards.
- Don't use gradients, glass, shadows or emoji icons.
- Don't use color alone to show right or wrong.
- Don't break house copy style: no em or en dashes, no semicolons, short sentences.
