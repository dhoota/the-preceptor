---
name: "Preceptor: CCFP-EM"
description: "The resuscitation record on the resus clipboard: printed in form green, filled in with ballpoint blue"
colors:
  sheet: "#f8fbfa"
  sheet-2: "#edf3f1"
  field: "#ffffff"
  ink: "#131c1a"
  ink-2: "#33403d"
  muted: "#56625f"
  rule: "#c9dcd5"
  rule-2: "#dfeae6"
  edge: "#6f837c"
  form: "#0d6650"
  form-pressed: "#0a5241"
  form-soft: "#dcefe8"
  pen: "#1d3fd0"
  pen-soft: "#e3e9ff"
  stamp: "#c1121f"
  stamp-soft: "#fde4e4"
  highlighter: "#fff25c"
  carbon-sheet: "#0c1211"
  carbon-field: "#17211f"
  carbon-ink: "#e4ece9"
  carbon-form: "#6fd3b0"
  carbon-pen: "#93a9ff"
  carbon-stamp: "#ff8a8a"
  carbon-highlighter: "#f2e94e"
typography:
  form-title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(30px, 9vw, 40px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  row-title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
  examiner:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  field-label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  entry-numeral:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  none: "0px"
  r: "2px"
spacing:
  gutter: "18px"
  section: "34px"
  row: "14px"
  number-gutter: "44px"
components:
  button-primary:
    backgroundColor: "{colors.form}"
    textColor: "{colors.field}"
    rounded: "{rounded.r}"
    padding: "15px 20px"
    height: "52px"
  button-primary-pressed:
    backgroundColor: "{colors.form-pressed}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.form}"
    rounded: "{rounded.r}"
    padding: "15px 20px"
  button-quiet:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
  chip:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.pen-soft}"
    textColor: "{colors.pen}"
    rounded: "{rounded.none}"
  tag:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "5px 7px"
  stat-box:
    backgroundColor: "{colors.field}"
    textColor: "{colors.pen}"
    typography: "{typography.entry-numeral}"
---

# Design System: Preceptor: CCFP-EM

## Overview

**Creative North Star: "The Resus Record"**

The app is the paper record clipped to the board in the resus bay. Everything the institution printed (rules, box labels, headings, buttons, the examiner's lines) is in one form-green ink. Everything the candidate does (counts, scores, selections, ticks, notes, answers typed into a blank) is in ballpoint blue. When the case is marked, the result comes back as a rubber stamp. The sheet is cool bond white, never cream; the dark theme is the carbon copy, green-black with pale form ink and bright carbon blue.

It is dense, ruled and square. Lists are rows between printed rules with a fixed number gutter, not cards. Boxes carry their label in the top-left corner, in small condensed caps, the way a form field does. There are no shadows, no gradients and no pills except the hand-drawn pen circle on the active tab.

**Key Characteristics:**
- Two inks with fixed meanings: green is the form, blue is you.
- Stamp red is reserved for alarms: critical misses, the fail stamp, overtime.
- Highlighter yellow marks partial: the borderline stamp, draft tags, partial verdicts.
- Printed double rules (3px double) open sections, the masthead, the tab bar and the dock.
- Barlow Semi Condensed prints; Atkinson Hyperlegible Next is read. Both are bundled under the SIL OFL in `src/fonts`.

## Colors

Two inks on a cool white sheet, plus a stamp and a highlighter.

### Primary
- **Form Green** (form): pre-printed structure: section and box labels, double rules, the examiner rule and label, primary buttons, row numbers, printed check marks on the order form. In the carbon copy it is a pale mint (carbon-form) and primary buttons take dark text.

### Secondary
- **Ballpoint Blue** (pen): the candidate's marks: stat numerals, best scores, selected chips and modes, the pen tick, notes and typed answers, the progress bar, the active-tab circle, focus rings, trend dots.

### Tertiary
- **Stamp Red** (stamp): alarms only: critical tags and alerts, the fail stamp, the timer when time is low, overtime clocks, wrong answers.
- **Highlighter** (highlighter): partial and borderline, always with ink text (on-hi).

### Neutral
- **Sheet** (sheet) and **Sheet 2** (sheet-2): page and recessed surfaces. **Field** (field): inside boxes, inputs and choices.
- **Ink**, **Ink 2** and **Muted**: text. Muted is 6.1:1 on the sheet.
- **Rule** and **Rule 2**: printed dividers, decorative. **Edge** (edge): borders of anything you can press or type into, at least 3:1.

### Named Rules
**The Two Inks Rule.** Green is what the form printed; blue is what the candidate wrote. A new element takes the ink of whoever authored it.

**The Alarm Rule.** Stamp red appears only where something is unsafe, critical, failed or overdue in time. It never decorates.

**The AA Floor Rule.** Every text pair passes 4.5:1 and every control border 3:1, in both the sheet and the carbon copy.

## Typography

**Print Font:** Barlow Semi Condensed 500/600/700 (with Arial Narrow fallback)
**Reading Font:** Atkinson Hyperlegible Next, variable 200 to 800, with italic (with sans-serif fallback)

**Character:** The condensed grotesk is the form's printed voice: labels, headings, buttons and every numeral. Atkinson carries everything you read at length: the examiner, stems, choices and feedback. Its slashed zero is kept on purpose, so a dose's 0 never reads as O.

### Hierarchy
- **Form title** (700, clamp 30 to 40px, uppercase): the home screen title only.
- **Headline** (700, 34px, 1.04): screen titles in sentence case.
- **Row title** (600, 20px): case and topic rows, tier names (uppercase), mode names (uppercase).
- **Examiner** (400, 20px, 1.5): examiner lines. Stems are 19px and SAMP stems 17px.
- **Body** (400, 16px, 1.5): explanation, capped at 62ch for intros.
- **Field label** (600, 12.5px, 0.08em, uppercase, form green): box corner labels, section heads and the field line under a title.
- **Entry numeral** (600, 32px, tabular, pen blue): counts and scores. Clocks are 19px, the timer 34px and the result score 72px, all tabular.

### Named Rules
**The Fixed Digits Rule.** Every clock, count and score uses tabular figures, so digits never shift as they change.

## Layout

Single column, max 720px, 18px gutters (14px under 360px). Rows are ruled, with a 44px number gutter behind a 3px double rule in the rule colour. Sections open 34px down with a field label over a double form rule. Screen titles are followed, when there is context to give, by a field line: a field label between two hairline rules. A fixed five-tab bar and a fixed action dock both open with a double rule and respect the safe-area insets. The dock hides itself when it has no action. Under 360px the masthead shows only "CCFP-EM", tabs tighten and stats shrink rather than wrap. At 757px and wider the filter strip stays inside the column and fades at its edge.

## Elevation & Depth

Flat paper. No shadows anywhere. Depth is tone (sheet, sheet-2, field), printed rules and the scrim behind the tear-off slip. Selection is shown with ink, not lift: a pen border, pen-soft fill or an inset 3px rule.

## Shapes

Square. Buttons have a 2px radius; boxes, chips, tags, fields and tick boxes have none. Radio marks on the mode picker are circles. The only curves beyond that are hand-made: the pen circle on the active tab and the pen tick.

## Components

### Buttons
- **Shape:** 2px radius, 52px tall (44px small), uppercase print type with 0.06em tracking.
- **Primary:** form fill, white text; pressed darkens and nudges down 1px.
- **Ghost:** transparent with a form border and text. **Quiet:** field fill, edge border, ink text.
- **Link button:** underlined form-green text with a 44px hit area.
- **Focus:** a 2px pen outline, 2px offset, on everything focusable.

### Chips (filters)
- **Style:** square ruled boxes, 44px tall, uppercase print type. Selected: pen border, pen-soft fill and a 3px pen underline.

### Rows and boxes
- **Case and topic rows:** number in form green in the gutter, row title, muted summary, tags as small printed boxes, best score in pen at the right.
- **Stat box row:** three boxes joined by form rules, corner labels, pen numerals.
- **Requisition box** (mock oral): a form-bordered box with a printed START box, or a lock when not owned.

### Inputs
- **Notes:** ruled writing lines at 28px, written in pen.
- **Short answers:** fill-in blanks: a bottom rule only, typed text in pen, the blank turns pen blue on focus.
- **Choices and options:** one printed tick-box line per option between rules.

### Navigation
- **Masthead:** mark plus the app name in tracked print caps over a double form rule.
- **Tabs:** uppercase print labels; the current tab is circled by hand in pen. The review count sits in a small form-green box at the label's corner and caps at 99+.

### The pen tick (signature)
Self-marking boxes (Said it, Partly, Missed) fill with a ballpoint tick drawn as an SVG stroke that overshoots the box. It draws in over 260ms and appears instantly under reduced motion.

### The stamp (signature)
The result band is a rubber stamp: uppercase print type in a double frame, rotated -4 degrees, pressed in with a short scale-down on arrival (off under reduced motion). Pass stamps in form green, borderline on highlighter, below standard in stamp red.

## Do's and Don'ts

### Do:
- **Do** give every new element the ink of its author: form green if the app printed it, ballpoint blue if the candidate did it.
- **Do** open sections with a field label over a 3px double form rule.
- **Do** keep clocks, counts and prices tabular and on one line.
- **Do** make every control at least 44px tall, with an invisible hit area where the visual has to stay small.

### Don't:
- **Don't** use cream or paper-tone grounds, a serif, or system and Inter fonts.
- **Don't** use gold, saffron or purple.
- **Don't** put stamp red on anything that is not an alarm.
- **Don't** add shadows, gradients, pills or soft card grids. Rows and ruled boxes carry the layout.
- **Don't** set a label above a title as a kicker. Context goes in a field line under the title.
