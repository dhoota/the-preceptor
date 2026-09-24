# SAMP writing spec

For anyone writing SAMPs for Preceptor: CCFP-EM, human or AI assisted. SAMPs are static data. The app runs no AI. Every new SAMP ships with `reviewed: false` until a physician signs it off.

Read `src/engine/samp.ts` first. The types are the contract. The blueprint is `src/blueprint/priorityTopics.ts` and `docs/SAMP_BLUEPRINT.md`. The format evidence is `docs/FORMAT_AUDIT.md`.

Rules carry a source tag so you know why they exist:

- [CFPC] the official CFPC EM exam resources, measured in `docs/FORMAT_AUDIT.md`.
- [QA] defects found in the other Preceptor question banks (CCFP, MCCQE, NCA, NDEB). These are real errors that shipped or nearly shipped.
- [App] rules of this app.

## 1. Copyright and originality

- Do not copy or paraphrase CFPC sample SAMPs, published question banks, textbooks or any recalled exam content. Use the CFPC samples only to understand the format. [CFPC]
- Invent every patient, number and detail. The clinical teaching may be standard. The scenario and wording must be yours. [QA]
- No stem may be a near copy of another SAMP in the bank. The tests reject two stems whose word trigram overlap is 0.5 or more. [QA]

## 2. Format

From 2027 every case on the CFPC SAMP exam is multiple choice (MCQ) or short menu. [CFPC]

- Every new SAMP (batches s19 onward) uses only `single` and `menu` questions. No `short` questions. [CFPC]
- The 525 SAMPs in s01 to s18 stay as they are, mostly write-in. The app tags them "Write-in" and keeps them out of mock exams. Section 12 covers their keys.
- 3 to 5 questions per SAMP. Aim for 4 or 5. [CFPC]

## 3. Stem

- 50 to 150 words, not counting the vitals list. [CFPC]
- Open with "A 62-year-old woman presents to the emergency department ..." or "... is brought to the emergency department by ambulance ...". Hyphenate ages ("4-year-old", "23-month-old"). [CFPC]
- The default setting is a tertiary care emergency department. Only when the setting differs, open with "You are working in ..." (for example a rural hospital with no CT). [CFPC]
- Order: age and sex, arrival and complaint, history with timing, past history and medications, then vitals, then examination. [CFPC]
- Never name the patient. [CFPC]
- Use concrete values, not vague qualifiers. Write "Na 124 mmol/L", not "low sodium". [QA]
- Everything a later explanation relies on must be written in the stem or an update. If the explanation needs a lab value, a history detail or an examination finding, put it in the case. Nothing is "reasonable to assume". [QA]
- Keep the timeline consistent. Ages, days of life, gestational ages and times must agree with every later statement. [QA]

## 4. Vitals

- Put vitals in the `vitals` field, never in the stem text. The app shows them as a list headed "Vital signs:". [CFPC]
- Fields and formats. The values here are invented:
  - `temperature`: "38.2°C rectal". Give the route when it matters.
  - `pulse`: "96/minute"
  - `resp`: "20/minute"
  - `bp`: "118/72 mmHg"
  - `o2sat`: "97% on room air" or "94% on 4 L/minute by nasal prongs"
  - `weight`: "24 kg". Give weight whenever a dose depends on it.
- Leave a field out rather than invent one that is not needed.

## 5. Updates

- New information goes in the question's `update`, before its `prompt`. One to three sentences, about 10 to 45 words. [CFPC]
- Close off a branch plainly: "The examination is otherwise normal." [CFPC]

## 6. Questions

- Do not write the instruction in `prompt`. The app adds "Select one." or "Select two." from the question kind and count, in CFPC style. [CFPC]
- `single`: the prompt starts "Which of the following" and ends with "?". Exactly 5 options. One correct. [CFPC]
- `menu`: the prompt starts "Which of the following" and ends with "?". 6 to 12 options. `select` is 1 to 4. `correct` holds `select` indexes. For a "None" answer, add "None" as the last option and key only that index. The app then shows "Select one, or None if none are required." [CFPC]
- One sentence of 10 to 30 words, as in the CFPC sample (12 to 28 words, median 16). No compound clauses. No negative lead-ins such as "Which is NOT". [CFPC] [QA]
- The lead-in must not hint at the answer through grammar or wording. [QA]

## 7. Options

- Order options alphabetically. Put "None" or a "No [action]" option last. When every option is a number or a range, order them from low to high. Doses of the same drug sit together. [CFPC]
- Short parallel phrases, 1 to 8 words and at most 60 characters, no final period. [CFPC]
- Similar length for all options. In the CFPC sample the longest option is about twice the shortest at most. The rule: the longest option is at most 2.1 times the shortest in a `single` question, and 2.6 times in a `menu`. "None" and "No ..." options are left out of this count. [CFPC]
- A dose option gives drug, dose, unit and route: "epinephrine 0.5 mg IM". [CFPC]
- Every distractor is a plausible peer action or finding that a partly prepared candidate might choose. No strawmen. Wrong doses are plausibly wrong, not absurd. [QA]
- No distractor is also correct. If two options could both be defended, rewrite one. [QA]
- The option states the action or finding only. The reason why lives in `explanation`, never in the option. [QA]
- Length parity. The keyed option must not stand out. In the CFPC sample it averages 1.1 times the mean distractor length. The rule: at most 1.5 times. Across a batch it is the longest option in no more than 35 percent of `single` questions. [CFPC] [QA]
- No absolute words in options: always, never, completely, entirely, absolutely, invariably, guaranteed. Test-takers learn that absolutes mark wrong answers. [QA]
- Position balance. The key must not always sit in the first few positions. In the CFPC sample it appears in every position, often the last. Alphabetical order decides position, so choose and word distractors so the key lands in different positions. Across a batch no position holds more than 30 percent of `single` keys, and every position from first to fifth holds at least one. [CFPC] [QA]

## 8. Explanations

This is where most real defects were found. [QA]

- 3 to 6 short sentences, at least 150 characters.
- Order: why the keyed answer is right, tied to specific facts in the stem. Then why each tempting distractor is wrong, named plainly. Do not restate the citation. The app shows it.
- Every claim must trace to the stem, an update or the cited source. Never add a finding the case did not give.
- Every reason given for rejecting a distractor must itself be true. A right key with a false reason teaches something false.
- Recompute every number from the stem: doses by weight, scores (HEART, Wells, PERC, CURB-65, GCS, Glasgow-Blatchford, Child-Pugh), percentages, anion and osmolal gaps, and every 2 by 2 statistic (sensitivity, specificity, predictive values, likelihood ratios, NNT, NNH, ARR, RRR). Show the arithmetic where it helps.
- Count criteria exactly. If you say "four of five features", the stem must show four.
- Match thresholds exactly. "Six or more" is not "more than six". State the unit.
- Name eponymous signs and tests correctly. Check the sign against its defined test.
- Check the direction of every mechanism, landmark and manoeuvre.
- Never describe the keyed answer as wrong, even in passing. The tests check this.

## 9. Clinical currency and Canadian practice

- Use the current Canadian guideline as the source of record: CAEP, CPS, TREKK, Heart and Stroke, CCS, CTS, SOGC, Thrombosis Canada, Diabetes Canada, Canadian Immunization Guide, PHAC, Hypertension Canada, Canadian decision rules. Use international guidance where no Canadian one exists. Never use a US or UK guideline in place of a current Canadian one. [QA]
- Check the guideline year. Stale recommendations are a known defect class. [QA]
- Use products and formulations sold in Canada. [QA]
- When practice depends on the province, say so in the stem or keep the key to wording that is true everywhere. Name the province when a statute is tested. [QA]

## 10. Units and notation

- SI units only: mmol/L, g/L, x 10^9/L, µmol/L written as "umol/L" or "micromol/L", mmHg, /minute, kg, °C. [CFPC] [QA]
- A space between number and unit: "300 mg". A space as the thousands separator: "12 000 units". [CFPC]
- Write "mcg", not the micro sign. [QA]
- Generic drug names in lower case. [CFPC]
- Abbreviations allowed without expansion: BP, IV, IM, IN, PO, PR, SC, CT, MRI, ECG, CBC, INR, ICU, EMS, POCUS, GCS, COPD, ASA, DOAC. Spell out anything a Canadian emergency physician would not read at a glance. [CFPC]
- Only these symbols may appear: °, %, /. No em or en dashes, smart quotes or emoji. [QA]

## 11. Sources and citations

An app in this family was rejected by Apple under guideline 1.4.1 because its citations read like "Standard references". [QA]

- Every source names an author or body, a work and a year. Example: "Thrombosis Canada. Clinical guide: deep vein thrombosis treatment. 2024." [QA]
- A category is not a citation. "Standard emergency medicine references" or "Canadian guidelines" count as no citation. [QA]
- Every source in `sources` must meet this, not just the first one. [QA]
- Never invent a citation to pass a check. If you do not know the real source, rework the question until you do. [QA]
- Every question cites a `source` id from the SAMP's `sources` (1 to 4 per SAMP). Every listed source is cited. Add a `url` only when you are sure of it. [App]

## 12. Write-in keys (s01 to s18 only)

The 525 signed-off SAMPs are write-in practice. Keep their keys unchanged unless a physician approves the change. When maintaining them:

- `accept` lists every answer the key gives credit for, with display `text` and `match` phrases.
- `match` is one flat list of lowercase phrases. A line matches when every word of a phrase appears in it, in any order. Plurals ending in s are ignored. Keep phrases short and specific, and add common abbreviations and class names. Never a phrase as short as "iv".
- Negation. A phrase does not match when "no", "not", "avoid", "withhold", "hold", "never", "don't", "stop", "discontinue", "contraindicated" or "without" appears within three words before it. It also does not match when "contraindicated", "avoided" or "withheld" follows it, directly or after "is" or "are". A negation within two words before a later word of the phrase also counts. Apostrophes are dropped. So put the negation inside the phrase when the right answer is a negative: `match: ["avoid nitrate", "no nitrate"]`.
- `unacceptable` names the tempting wrong answers. `dangerous: true` only for an answer that would cause serious harm. It scores the question zero. This is an app rule, not a published CFPC rule.
- The key must be exhaustive of defensible answers. This is the write-in version of "no distractor is also correct". [QA]

Rules that come from MCQ banks and do not apply to write-in questions: answer position balance, option length parity, absolute words in options, and alphabetical option order. The key completeness rule replaces them.

## 13. Blueprint mapping

- `topic` is the primary priority topic. `alsoTopics` lists secondary topics.
- Every question has `keyFeature: { topic, n }`, the CFPC key feature number it tests. Usually the SAMP's own topic.
- Each batch tests every key feature of its topic at least once. Across the bank every key feature is tested by at least 3 questions.

## 14. House style

Every string, citations included: no em or en dashes, no semicolons, short sentences, Canadian spelling. Plain, neutral, clinical tone. No humour, no second person in stems except "You are working in ...", no encouragement. Titles are neutral and never reveal the diagnosis.

## 15. Files

- Expansion batch: one file `src/samps/sNN/<topic-id>.ts` exporting a named `const` array. The batch's `index.ts` exports `SAMPS_SNN`. Keep that name.
- Ids continue the topic numbering from 16: `<topic-id>-16` onward, as planned in `docs/samp-expansion.json`. Question ids `q1` to `q5`.
- `reviewed: false`, `author: "Draft for review by Arjan Dhoot, MD"`, `version: 1`.
- First line of each file: `// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.`

## 16. Checks

```
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts
```

For expansion batches the tests enforce:

- The planned count, one topic, and every key feature of the topic tested.
- MCQ format only, 3 to 5 questions.
- `single` has 5 options. `menu` has 6 to 12 options and `select` 1 to 4.
- Prompts start "Which of the following", end with "?" and hold no instruction.
- Prompts of 10 to 30 words.
- Options in alphabetical or numeric order, None or "No ..." last, at most 60 characters, no final period, no absolute words.
- Similar option lengths: longest at most 2.1 times the shortest (2.6 in a menu). The key at most 1.5 times the mean distractor length.
- Per batch: no key position above 30 percent, every position used, and the key longest in no more than 35 percent of `single` questions.
- Vitals in the `vitals` field in the right formats. No blood pressure in the stem text. Hyphenated ages.
- Explanations of at least 150 characters that never call the keyed answer wrong.
- Every citation names a year and is not a category.
- No near duplicate stems across the bank.

Automated checks cannot see a false distractor reason, an invented stem fact or a wrong recalculation. The two review lenses in `docs/SAMP_REVIEW_BRIEF.md` exist for those.
