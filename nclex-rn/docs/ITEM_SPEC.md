# Item spec

For anyone writing items for Preceptor: NCLEX-RN Prep, human or AI assisted. Items are static data. The app runs no AI. Every item ships with `reviewed: false` until Arjan signs it off.

The contract is `src/engine/types.ts`. The gates are `src/engine/quality.ts`. The worked examples are `tests/fixture.ts`. They pass every gate. Copy their shape.

Every rule carries a tag so you know where it came from.

- [NCSBN] the published NCLEX-RN format: the 2026 test plan, the candidate tutorial, the exam preview and the sample pack. Used for format only.
- [MC] a defect found in Arjan's multiple choice banks (CCFP, MCCQE, NCA, NDEB). The rule still applies to the NGN formats named with it.
- [NGN] a rule adapted from an MC lesson to fit an NGN format.
- [App] a rule of this app.
- [Test] the rule is enforced by an automated gate. The gate name follows in brackets.

## 1. Copyright and originality

- Never copy, paraphrase or closely model an NCSBN item, the test plan text, the sample pack, the exam preview or the tutorial. NCSBN material is copyright and commercial use is prohibited. Read it for format only. [NCSBN]
- Never use a published question bank, textbook question or recalled exam item as a source or a style example. Invent every client, number and detail. The teaching point may be standard. The scenario and wording are yours. [MC]
- No stem may be a near copy of another stem in the bank. Word trigram Jaccard 0.5 or more fails. This covers stand-alone stems, case intros and case item stems. [MC] [Test: nearDuplicates]
- The NCLEX name is used descriptively. Never pair it with the words "practice exam" in any text. [App] [Test: style]

## 2. Terminology

- Say client, not patient. Say primary health care provider, not doctor or physician. Say prescription for a medication order. This is the test plan's own terminology. [NCSBN] [Test: termProblems]
- Generic drug names in lower case, using the US generic name the NCLEX uses (albuterol, not salbutamol). The Canada note gives the Canadian name when it differs. No brand names unless the brand is the point.
- Never name the client. Give age and sex when they matter.

## 3. Stems

- One scenario, then one question. Concrete values, not vague words. Write "heart rate 122/minute", not "tachycardic". [MC]
- Everything a rationale or a why relies on must be in the stem, the exhibit or an earlier part of the case. Nothing is "reasonable to assume". This was the most common defect in every medical bank. [MC, all formats] [Test: traceProblems, for numbers]
- Keep the timeline consistent. Ages, post-operative day, gestational weeks and clock times must agree everywhere. [MC]
- No shouted negatives (EXCEPT, NOT, LEAST). "Which statement needs further teaching?" is allowed. It is standard NCLEX phrasing. [NCSBN] [Test: cueingProblems]
- The lead-in must not hint at the key by grammar or wording. [MC]
- Select N stems say "Select two." or "Select three.". Select all that apply stems end "Select all that apply.". [NCSBN] [Test: structure]

## 4. Units and numbers

- Lab values in US conventional units with the SI value in parentheses when they differ: "glucose 520 mg/dL (28.9 mmol/L)", "creatinine 1.8 mg/dL (159 micromol/L)". Once a value is paired, it may repeat bare. The pair must convert within 3 percent. [App, for Canadian candidates] [Test: unitProblems]
- Temperature in Celsius with Fahrenheit in parentheses: "38.9°C (102.0°F)". The pair must convert. [Test: unitProblems]
- Weight in kg. Doses as number, space, unit: "80 mg", "25 000 units". Thousands use a space. Write mcg and micromol, never the micro sign. [MC] [Test: unitProblems]
- Every stated value is load-bearing. Check each value against every threshold the rationale compares it to. [MC]
- Counts and thresholds match exactly. "Four of five criteria" means four are shown. "3.3 or more" is not "more than 3.3". [MC]

## 5. Calculations

- Any item that computes a value carries a `calc` block. `expr` uses only numbers from the stem or exhibit (plus 60, 1000, 100, 24 and 2.2). `steps` shows the working, one step each, as "18 * 80 = 1440". The tests recompute every step and the answer, and check that the keyed option shows the answer. [MC] [Test: calcProblems]
- Recompute every number in every why, including the wrong ones. In the other banks the arithmetic inside distractor explanations was wrong even when the key was right. [MC, all formats]

## 6. Options, tokens, spans and slots

These rules came from MC banks. They apply to every pool of choices: MC options, select N and select all options, drag and drop tokens, cloze drop-down options, bow-tie conditions, actions and parameters, and matrix rows.

- Every choice has a `why`: the reason it is right or wrong. Every reason must itself be true. A right key with a false reason for rejecting a distractor teaches something false. This was the dominant defect in the NDEB bank, and no automated gate can see it. [MC, all formats] [Test: structure checks the why exists. Review checks it is true.]
- A keyed choice's why never calls it wrong. A distractor's why never calls it correct. The rationale never calls the key wrong. [MC, all formats] [Test: contradictionProblems]
- Every distractor is a plausible peer action or finding. No strawmen. No distractor is also defensible. If two could both be defended, rewrite one. [MC, all formats]
- No justification inside a choice. The choice states the action or finding. The why and the rationale carry the reason. [MC, all formats]
- No absolute words in any choice: always, never, completely, entirely, absolutely, invariably, guaranteed, at all times, under no circumstances, every time. Highlight spans are exempt because they are chart text. [MC, all formats except highlight] [Test: cueingProblems]
- No "all of the above", "none of the above" or option letter references. The app shuffles nothing, but the rule keeps items reorderable. [MC] [Test: cueingProblems]

### Length parity, the length-bias gate

In CCFP 83 percent of keys ran longer than the mean distractor and 69 percent were the single longest option. In MCCQE 58 percent were the longest, against 20 percent by chance. The same bias turned up in NDEB and NCA. It is invisible item by item and shows only across a batch. The fix is the NDEB rebalance rule: move the key's justifying clause into the why, then bring the distractors to the same specificity. Never pad with filler. A technical term that is simply longer is not cueing and may stay. [MC]

The limits, one number each (`PARITY` in `src/engine/quality.ts`):

- Single-key pools (MC options, each cloze blank, bow-tie conditions): the key is at most 1.6 times the mean distractor length. [MC] [Test: cueingProblems]
- Multi-key pools (select N, select all, drag and drop tokens, bow-tie actions and parameters): the mean keyed length is at most 1.35 times the mean distractor length. [NGN] [Test: cueingProblems]
- Per batch: the key is the strict longest option in at most 35 percent of MC items. Chance is 25 percent. [MC] [Test: batchCueingProblems]
- Per batch: the keyed choices run longer than the distractors in at most 65 percent of multi-key pools. Chance is about 50 percent. [NGN] [Test: batchCueingProblems]

### Key position balance

AI-drafted MC batches in other banks came back up to 85 percent "A", and one NCA batch was 100 percent "A". Write items position independently. [MC]

- Per batch: no MC key position above 35 percent, and every position used. [MC] [Test: batchCueingProblems]
- Per batch: select all keys do not cluster in the first half of the list (at most 70 percent). [NGN] [Test: batchCueingProblems]
- Order MC options by a neutral rule where one exists: numbers low to high, doses of one drug together. Otherwise vary the key position on purpose.

## 7. Item types

Structure is checked by `structureProblems`. Scoring is in `src/engine/score.ts` with golden tests in `tests/score.test.ts`.

| Kind | Shape | Scoring |
|---|---|---|
| `mc` | 4 options, 1 key | 0/1 |
| `msn` | 5 to 10 options, select 2 to 4 | 0/1 per option, up to N |
| `sata` | 5 to 8 options, 2 to n-1 keys | plus/minus, floored at 0 |
| `dnd` | 2 to 6 targets, more tokens than targets | 0/1 per target, or rationale (dyad, triad) |
| `cloze` | template with {0} blanks, 3 to 6 options each | 0/1 per blank, or rationale (dyad, triad) |
| `highlight` | passage with [[marked]] phrases, 5 to 14 spans | plus/minus |
| `matrix` single | 2 to 5 columns, 3 to 8 rows, 1 key per row | 0/1 per row |
| `matrix` multi | any keys per row, every column keyed | plus/minus per column, each floored at 0 |
| `bowtie` | 4 conditions, 5 actions, 5 parameters | 0/1 per slot, 5 points |

- Dyad: 2 slots, 1 point only when both are right. Triad: 3 slots, 1 point when slots 1 and 2 are right, 1 point when slots 1 and 3 are right. Use them for "at risk for {0} as evidenced by {1}" sentences. [NCSBN]
- Trend: set `trend: true`, give one table tab whose columns are 3 or more time points, and ask an `mc`, `msn`, `sata`, `matrix`, `cloze` or `highlight` question about the change over time. Trend and bow-tie items are stand-alone only. [NCSBN] [Test: structure, caseProblems]
- Highlight spans: `spans[i].text` equals the i-th `[[...]]` phrase in the passage, exactly. [Test: structure]

## 8. Case studies

- Six items that walk the Clinical Judgment Measurement Model in order: recognize cues, analyze cues, prioritize hypotheses, generate solutions, take action, evaluate outcomes. [NCSBN] [Test: caseProblems]
- `intro` sets the scene. `tabs` hold the chart: Nurses' Notes, Vital Signs, Laboratory Results, Orders, History and Physical. Each item may add or update tabs through its own `tabs`. A tab with the same title replaces the earlier one.
- At least 4 item types per case. No bow-tie or trend inside a case. [NCSBN] [Test: caseProblems]
- Across a case batch: matrix, cloze, drag and drop, highlight and select all or select N all appear, with at least one dyad and one triad. [App] [Test: bank]
- An item may rely on anything shown earlier in the case, never on anything later. [MC]
- Titles are neutral and never name the diagnosis. [App]
- Ids: case `rn-cNN-K`, items `rn-cNN-K-1` to `rn-cNN-K-6`.

## 9. Rationales

- At least 150 characters. Short single-idea sentences. [MC] [Test: structure, style]
- Order: why the key is right, tied to specific stem facts. Then why the tempting distractors are wrong. Each choice's own why carries its reason. Do not restate the citation. The app shows it. [MC]
- Every claim traces to the stem, the exhibit or a cited source. Reference values the rationale needs (a normal range, a threshold) go in `refs` and must be supported by a source. [MC] [Test: traceProblems, for numbers]
- Name signs, scales and tests correctly. Check each eponym against its defined test. Check the direction of every mechanism. [MC]
- No formulaic openers such as "This is the classic presentation of". No mnemonics. [MC]

## 10. Sources

A Preceptor app was rejected by Apple under App Store guideline 1.4.1 because 97 percent of its citations read like "Standard references". [MC]

- Every source names an author or body, a work and a year, in its own field. Example: `{ body: "Public Health Agency of Canada", work: "Canadian Tuberculosis Standards, 8th edition", year: 2022 }`. [MC] [Test: citationProblems]
- A category is not a citation. "Nursing references", "Standard textbooks" and "Guidelines" fail. [MC] [Test: citationProblems]
- Every source slot is checked, not just the first. [MC] [Test: citationProblems]
- Never invent a citation to pass a check. If you do not know the real source, rework the item until you do. [MC]
- Prefer current guidance: CDC, AHA, ADA, GOLD, ISMP, WHO, and the Canadian bodies (PHAC, NACI, Diabetes Canada, Hypertension Canada, Thrombosis Canada, CNA, provincial colleges). Current nursing texts are fine for fundamentals. Check the year. Stale guidance was a recurring defect. [MC]

## 11. Canada note

- `canada` says in one or two sentences where Canadian practice differs from the item's teaching: units, a drug not sold in Canada, a different guideline threshold, provincial law or scope of practice. Empty string when there is no material difference. [App]
- The item itself teaches the practice the NCLEX-RN tests. The note never changes the key.

## 12. Metadata

- `need`: one of MOC, SIPC, HPM, PSY, BCC, PPT, RRP, PA. The Client Needs subcategory the item mainly tests.
- `cjmm`: the CJMM step the item mainly exercises. Stand-alone items use it too. Every stand-alone batch uses all six steps. [Test: bank]
- `process`: caring, clinical-judgment, communication, culture, nursing-process or teaching.
- `difficulty`: 1 to 5, writer-rated. 3 is a typical entry-level item. Every batch uses at least 4 levels and no level holds more than 20 of 50. The adaptive mock maps these to logits, so spread them honestly. [App] [Test: bank]
- `topic`: our own short label. Never test plan wording.
- `reviewed: false`, `version: 1`. Only ids in `docs/signoff.json` may be true. [App] [Test: bank]

## 13. House style

Every string: no em or en dashes, no semicolons, no smart quotes, no filler words, sentences of 35 words or fewer. Plain, neutral, clinical tone. No humour, no encouragement. [App] [Test: style]

## 14. Answer key changes

- In a draft batch, a reviewer may change a key only when the evidence requires it, and must log the before, the after and the reason under "Key changes" in the review. Arjan approves every key change before sign-off. [MC]
- If a fix would change the key of a reviewed item, flag it for Arjan. Never patch around it. [MC]

## 15. What the gates cannot see

Automated gates catch format, parity, position, absolutes, contradictions, citation shape, unit pairs, arithmetic and invented numbers. They cannot catch a false reason for rejecting a distractor, an invented finding stated in words, a wrong key, two defensible keys or stale guidance. The adversarial review in `docs/REVIEW_BRIEF.md` exists for those. It is calibrated with planted defects, because a review that passes a planted defect is blind.
