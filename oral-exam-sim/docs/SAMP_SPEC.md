# SAMP writing spec

For anyone writing SAMPs for Preceptor: CCFP-EM, human or AI assisted. SAMPs are static data. The app runs no AI. Every SAMP ships with `reviewed: false` until a physician signs it off.

Read `src/engine/samp.ts` first. The types are the contract. The blueprint is `src/blueprint/priorityTopics.ts` and `docs/SAMP_BLUEPRINT.md`.

## Copyright and originality

- Do not copy or paraphrase CFPC sample SAMPs, published question banks, textbooks or any recalled exam content. The CFPC sample documents may be used only to understand the format.
- Invent every patient, number and detail. The clinical teaching may be standard. The scenario and wording must be yours.

## Format

A SAMP is a short clinical stem followed by 3 to 6 questions. Later questions may reveal new information with `update` before the `prompt`, the way a real SAMP moves the case forward.

Three question kinds, matching the CFPC sample formats:

- `single`: multiple choice. "Which of the following is the most appropriate next step? Select one." 4 to 6 options. One correct.
- `menu`: "Select TWO." 6 to 20 options, often including close distractors such as the same drug at two doses. The last option may be "None" when the question says "Select one, or None if none are required." `correct` holds `select` indexes, or just the index of "None".
- `short`: free text. "List THREE." `required` is the number asked for. Only the first `required` answers are marked.

Mix per topic (15 SAMPs): at least 8 SAMPs that are mostly `short`, and across the topic at least 60 percent of questions are `short`. Use `menu` and `single` where a precise choice (a dose, a disposition, the single best test) is the point.

## Short answer keys

This is the heart of SAMP scoring. Write keys like an examiner.

- `accept`: every answer the key would give credit for. List more acceptable answers than `required` whenever several are valid. Each item has display `text` and `match` phrases.
- `match` phrases: lowercase. A candidate line matches when every word of any phrase appears in it, in any order. Plurals ending in s are ignored. So keep phrases short and specific: `["ceftriaxone"]`, `["ct angiogram"], ["cta"]` as separate phrases, `["repeat troponin"]`. Add common abbreviations and generic class names the key accepts (`["ppi"], ["pantoprazole"], ["proton pump inhibitor"]`). Avoid phrases so short they match wrong answers (never just `["iv"]`).
- `unacceptable`: answers the key specifically rejects (the tempting wrong answer, the outdated practice). Mark `dangerous: true` only for an answer that would harm the patient. A dangerous answer scores the whole question zero. An unacceptable phrase must not match any accepted item's text.
- Ask for specifics when specifics matter: "Include the drug, dose and route." Then make the key require them, for example `match: ["epinephrine 0.5 mg im"], ["epinephrine 0.5 mg intramuscular"]`.
- `explanation`: 2 to 4 short sentences. Why the key answers are right and why the tempting wrong answer is wrong.

## Blueprint mapping

- `topic`: the primary priority topic id. `alsoTopics` for secondary topics.
- Every question has a `keyFeature: { topic, n }` naming the CFPC key feature number it tests. Usually the SAMP's own topic.
- Across the 15 SAMPs of a topic, every key feature of that topic must be tested at least once. Spread them. No key feature more than 8 times.

## Sources

Every question cites a `source` id from the SAMP's `sources` (1 to 4 per SAMP). Every listed source must be cited. Current Canadian guidance first (CAEP, CPS, TREKK, Heart and Stroke, CCS, CTS, SOGC, Thrombosis Canada, Diabetes Canada, Canadian decision rules, Ontario statutes), then major international guidance. Never invent titles, years or URLs. If unsure, cite the organisation and topic plainly without a year. Only add a `url` you are sure of.

## House style

Every string, citations included: no em or en dashes, no semicolons, short sentences, Canadian spelling and SI units. Plain clinical language. Titles are neutral and never reveal the diagnosis.

## Files

- One file per topic in the batch folder: `src/samps/sNN/<topic-id>.ts` exporting a named `const` array of 15 `Samp` objects in a single file.
- `src/samps/sNN/index.ts` exports `SAMPS_SNN: Samp[]` concatenating the topic arrays. Keep that export name.
- SAMP `id`: `<topic-id>-01` to `<topic-id>-15`. Question ids `q1` to `q6`.
- `reviewed: false`, `author: "Draft for review by Arjan Dhoot, MD"`, `version: 1`.
- First line of each file: `// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.`

## Checks

```
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts
```
