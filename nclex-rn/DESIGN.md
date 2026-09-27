---
name: Preceptor: NCLEX
description: The phlebotomy tray. Each Client Needs area is a collection tube with its own cap color, and every score is a fill level.
colors:
  tray: "#e8ecef"
  tray-2: "#dce2e6"
  stock: "#ffffff"
  ink: "#101418"
  ink-2: "#394148"
  muted: "#545d66"
  line: "#c3cad0"
  line-2: "#d8dee3"
  act: "#101418"
  on-act: "#ffffff"
  hl-soft: "#d5dee8"
  ok: "#18744a"
  ok-soft: "#ddf1e6"
  bad: "#b8172c"
  bad-soft: "#fbe2e5"
  part: "#2f4c69"
  part-soft: "#e0e8f1"
  focus: "#2446c8"
  cap-moc: "#2446c8"
  cap-sipc: "#1d8a4b"
  cap-hpm: "#e0559b"
  cap-psy: "#9a6b3f"
  cap-bcc: "#4db2e0"
  cap-ppt: "#8c939b"
  cap-rrp: "#ee7a1f"
  cap-pa: "#e9cb2b"
  dark-tray: "#0f1215"
  dark-stock: "#1a1f24"
  dark-ink: "#eef1f3"
  dark-muted: "#98a1a9"
  dark-ok: "#63cf93"
  dark-bad: "#ff7a86"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Arial Narrow, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "wdth 112"
  label:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontVariation: "wdth 122"
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Verdana, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.55
  stem:
    fontFamily: "Atkinson Hyperlegible Next Variable, Verdana, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  numeric:
    fontFamily: "Atkinson Hyperlegible Mono Variable, ui-monospace, monospace"
    fontFeature: "tnum"
rounded:
  label: "1px"
  control: "4px"
  pill: "22px"
  tube: "999px"
spacing:
  gutter: "18px"
  section: "30px"
  row: "14px"
components:
  button-primary:
    backgroundColor: "{colors.act}"
    textColor: "{colors.on-act}"
    rounded: "{rounded.control}"
    padding: "15px 20px"
    height: "50px"
  button-quiet:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  button-danger:
    backgroundColor: "{colors.bad}"
    textColor: "{colors.on-act}"
    rounded: "{rounded.control}"
  tag:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "5px 7px 4px"
  option:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  option-right:
    backgroundColor: "{colors.ok-soft}"
  option-wrong:
    backgroundColor: "{colors.bad-soft}"
  tab-active:
    backgroundColor: "{colors.act}"
    textColor: "{colors.on-act}"
    height: "50px"
---

# Design System: Preceptor: NCLEX

## Overview

The phlebotomy tray. Nursing students know the collection tubes by heart: the cap colors, the order of draw, the fill line. The app borrows that system. Each Client Needs area is a tube with its own cap color, and every score is a fill level in that tube. The rest of the tray is clear plastic on cool grey, white label stock and specimen-label black ink.

This app has its own look. It does not share the warm paper, serif and gold look of the other Preceptor apps.

Source of truth: `src/styles.css` (tokens at the top, the tray layer at the end), `src/components/Tube.tsx` (tube and cap), `src/components/Confirm.tsx` (dialog) and `src/components/Mark.tsx`.

## Colors

- **Tray and stock.** Cool grey `tray` for the ground. White `stock` for everything the student reads or taps: options, exhibits, panels and tags.
- **Ink.** Specimen-label black. Primary buttons, the active tab, selected options and section rules are ink. In dark mode ink turns near-white and buttons become white stock with black text.
- **Tube caps.** Eight cap colors, one per Client Needs area: royal blue, green, pink, tan, light blue, grey, orange and yellow. They are law. They appear only as caps, tube fills and area swatches, and always beside the area's name.
- **States.** Green for right, red for wrong, slate for partial. Red is kept for wrong answers and alerts. It never decorates. Every marked answer also carries a text tag.
- **Focus.** A 3px blue ring, offset 2px.

## Typography

- **Archivo** (variable, width axis) for headings, labels, tags, tabs and buttons. Headings run at width 112 and weight 800. Labels run in caps at width 122, like a printed tube label.
- **Atkinson Hyperlegible Next** for stems, choices, reasons and body text. It was drawn for legibility, which suits anxious readers and readers of English as a second language. Its slashed zero keeps doses unambiguous.
- **Atkinson Hyperlegible Mono** for counts, percents, prices and the clock.
- All three are OFL and bundled through @fontsource, so the app stays offline.
- Larger text sets `--fs` to 1.18. Reading text, labels and tags scale with it.

## Layout

- One column, 720px max, 18px gutters.
- Practice home opens on the rack: eight tubes in a row, each filled to its points, with the area code under it. Tapping a tube starts a set in that area.
- Lists are full-width rows on the tray with hairline separators. Section titles sit on a 2px ink rule.
- Fixed tab strip at the bottom, fixed action dock in a set.

## Elevation & Depth

Flat. Depth comes from tone: stock on tray. The only shadow is under the confirmation dialog.

## Shapes

- Tubes: square caps, round-bottomed glass with graduation ticks.
- Tags: square specimen labels with a 1px ink edge.
- Controls: 4px radius. Chips and drag tokens: pills.
- Score bars are horizontal tubes with a cap at the left end.
- Case study steps are six small tubes in order of draw. Done tubes are full. The current tube is half full.

## Components

- **Rack and tubes.** `Tube` and `Cap` in `src/components/Tube.tsx`. Fill animates with a transform and respects reduced motion.
- **Buttons.** Ink fill for the main action, white stock with an ink edge for quiet actions, red only for a destructive confirm.
- **Tabs.** A label strip. The active tab is printed in reverse: ink block, white caps.
- **Options.** White stock rows. After Submit: green for a right pick, red for a wrong pick, dashed green for a missed key, each with "Key" and "Your answer" tags.
- **Panels.** Rationale and the Canada note open with a specimen-label strip: the panel name printed on an ink band.
- **Dialog.** In-app confirmation replaces the browser dialog. Stay is focused first. Escape cancels.
- **Mark.** The Preceptor rings drawn in ink, read as a tube cap seen from above.

## Do's and Don'ts

- Do use a cap color only for its Client Needs area, with the name beside it.
- Do keep red for wrong answers and alerts.
- Do scale reading text with `--fs`.
- Don't bring back cream or paper grounds, serif type, gold, saffron or purple.
- Don't add a label above a heading that repeats it.
- Don't use thick colored side stripes on callouts.
- Don't use color alone to show right or wrong.
- Don't break house copy style: no em or en dashes, no semicolons, short sentences.
