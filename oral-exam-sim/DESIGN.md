---
name: "Preceptor: CCFP-EM"
description: "Oral and written exam prep for CCFP-EM, in the shared Preceptor look"
colors:
  paper: "#f7f5f0"
  paper-2: "#efece4"
  card: "#fffdf8"
  ink: "#15202b"
  ink-2: "#3b4856"
  muted: "#5f6a77"
  line: "#d9d4c7"
  line-2: "#e7e3d8"
  navy: "#00305c"
  navy-2: "#0a4478"
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
  dark-navy: "#8fb6de"
  dark-gold: "#e0b43c"
typography:
  display:
    fontFamily: "Iowan Old Style, Charter, Source Serif Pro, Georgia, serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  examiner:
    fontFamily: "Iowan Old Style, Charter, Source Serif Pro, Georgia, serif"
    fontSize: "20px"
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
    fontSize: "24px"
    fontWeight: 500
    fontFeature: "tnum"
rounded:
  hair: "2px"
  r: "3px"
  pill: "20px"
spacing:
  gutter: "18px"
  section: "30px"
  row: "14px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.card}"
    rounded: "{rounded.r}"
    padding: "15px 20px"
    height: "50px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.r}"
    padding: "15px 20px"
  button-quiet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "10px 13px"
  chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.r}"
    padding: "18px"
  tag:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.hair}"
    padding: "5px 7px"
---

# Design System: Preceptor: CCFP-EM

<!-- Recorded by /impeccable document from src/styles.css after the design/impeccable refinement pass. This is the shared Preceptor look; change tokens here and in the sibling Preceptor apps together. -->

## Overview

**Creative North Star: "The Examiner's Desk"**

A quiet, paper-and-ink study room. Warm paper, navy ink and one gold accent taken from The Preceptor mark. The examiner speaks in a serif, the interface answers in the platform sans, and time and scores are set in a monospace with tabular figures. Surfaces are flat and separated by hairline rules, not shadows. The case text and the clock carry the attention. The chrome stays out of the way.

Dense but calm: long lists of cases and topics are ruled rows, not cards. Cards appear only where something is a discrete choice or a summary.

**Key Characteristics:**
- Warm paper background, never pure white. Navy for action, gold for identity and emphasis, red, green and gold-soft only for verdicts.
- Serif for examiner voice, stems and titles. Sans for controls and explanation. Mono only for time, counts, scores and prices.
- Hairline rules (1px) everywhere. Section heads get a 1px ink rule under an uppercase label.
- Light and dark follow the system. Dark is its own palette, not an inversion.

## Colors

A restrained, warm neutral palette with one institutional blue and one gold.

### Primary
- **Preceptor Navy** (navy): primary buttons, selected chips, the examiner rule, progress bars, switches. In dark mode it becomes a pale steel blue (dark-navy) and primary buttons take dark text.

### Secondary
- **Mark Gold** (gold): the brand accent from the logo. Used for marks, the active tab indicator, top rules on the recommended tier and model answer, and the chart's case dots. Never as body text in light mode.
- **Gold Ink** (gold-ink): the same gold darkened to pass AA on paper (4.9:1). Used for gold text such as case numbers, question numbers, the Free tag and focus rings. Dark mode uses Mark Gold for both.

### Neutral
- **Paper** (paper) and **Paper 2** (paper-2): page and recessed backgrounds.
- **Card** (card): raised surfaces such as cards, inputs and choices.
- **Ink** (ink), **Ink 2** (ink-2) and **Muted** (muted): primary, secondary and tertiary text. Muted passes AA on paper (5.05:1).
- **Line** (line) and **Line 2** (line-2): borders and row dividers.

### Verdict colours
- **Pass Green**, **Unsafe Red** and **Partial Gold** each come with a soft tint for backgrounds. They are reserved for scoring and feedback states.

### Named Rules
**The One Gold Rule.** Gold marks identity and emphasis. It never fills a button and never carries text in light mode without Gold Ink.

**The AA Floor Rule.** Every text colour passes 4.5:1 on the surface it sits on, in both modes. Check any new token pair before shipping.

## Typography

**Display and Examiner Font:** Iowan Old Style (with Charter, Source Serif Pro and Georgia fallbacks)
**Body Font:** System sans (-apple-system, Segoe UI, Roboto)
**Numeric Font:** System monospace with tabular figures

**Character:** A bookish serif gives the examiner and the cases authority. The native sans keeps controls familiar on both stores.

### Hierarchy
- **Display** (600, 30 to 32px, 1.15): screen titles. Headings use balanced wrapping.
- **Examiner** (400, 19 to 20px, 1.55): examiner lines, stems and choices.
- **Title** (600 serif, 17 to 20px): case titles and tier names.
- **Body** (400, 16px, 1.5): explanation. Intro paragraphs stop at about 62ch.
- **Label** (700, 11.5px, 0.14em, uppercase): section heads and eyebrows. In tight grid cells tracking drops to 0.08em.
- **Numeric** (500 mono): clocks, scores, counts and prices. The "/ year" unit next to a price is set in small muted sans.

## Layout

A single column, max 720px, with 18px gutters (14px under 360px). Fixed bottom tab bar with 5 labelled tabs and a fixed action dock on case screens. Both respect the safe-area insets. Sections are separated by 30px with a label and a 1px ink rule. Rows are 14px vertical with a line-2 divider. On the narrowest phones (under 360px) the header shows the app name without the family prefix, and the tab labels and stats shrink rather than wrap.

## Elevation & Depth

Flat. There are no shadows. Depth comes from paper versus card tone, hairline borders and the scrim behind bottom sheets. Selection is shown with an inset 3px navy edge (box-shadow inset) or a filled chip.

## Shapes

Nearly square: 3px radius on buttons, cards and inputs, 2px on tags, pills only for filter chips and the tab badge. A card with a 3px top accent rule has square top corners so the rule meets the edge cleanly.

## Components

### Buttons
- **Shape:** 3px radius, 50px minimum height (38px for small).
- **Primary:** navy fill, white text (dark text in dark mode).
- **Ghost:** transparent with a navy border and text. **Quiet:** card fill with a line border and ink text.
- **Link button:** underlined navy text with a 44px tall invisible hit area.
- **Focus:** a 2px Gold Ink outline, 2px offset, on every focusable control.

### Chips
- **Style:** pill, card fill, line border, 40px tall. Selected is navy fill with white text. They scroll horizontally in one row.

### Cards and rows
- Cases and SAMPs are ruled rows: a number in Gold Ink mono, a serif title, a muted summary and tags.
- Cards (card fill, line border, 3px radius, 18px padding) are for choices, the mock oral entry, pricing tiers and readiness.

### Callouts
- Verdicts, the review-due bar, critical-miss alerts and SAMP updates use a soft tint with a 3px left rule in the verdict or brand colour. This is a shared Preceptor pattern.

### Navigation
- Bottom tabs: 12px semibold labels. The active tab has ink text and a 2px gold bar on top. The due-count badge sits at the label's top-right corner and caps at 99+.

### Examiner block
- A 3px navy left rule, an uppercase "Examiner" label, an italic serif phase line, then the line itself in the 20px serif. The Read aloud control sits to the right.

## Do's and Don'ts

### Do:
- **Do** use Gold Ink for any gold text or focus ring in light mode.
- **Do** keep clocks and prices on one line (`white-space: nowrap`).
- **Do** animate with transform or opacity and turn transitions off under reduced motion.
- **Do** make every tap target at least 40 to 44px tall, using an invisible hit area where the visual has to stay small.

### Don't:
- **Don't** add shadows, gradients or glass. The system is flat paper.
- **Don't** use mono for anything but time, counts, scores and prices.
- **Don't** change the shared tokens here alone. Mirror them in the other Preceptor apps.
