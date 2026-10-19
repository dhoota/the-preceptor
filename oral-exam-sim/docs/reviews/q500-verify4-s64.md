# Q500 fresh review, round 4: s64, Asthma/COPD

Fresh independent review by Preceptor of the round 4 fixes. File `src/samps/s64/asthma-copd.ts`. This reviewer did not write, edit or review this batch before. It changed no SAMP, source or shared file. Every item stays `reviewed: false`. This is an AI audit, not clinician verification.

## Verdict: PASS

asthma-copd-51 passes on all four questions. The whole s64 batch (asthma-copd-48 to 52) has now passed fresh review. Items 48, 49, 50 and 52 pass as recorded in `docs/reviews/q500-verify3-s64.md`, and 51 passes here.

## Diff checked

`git diff dad0e86~1` (the same as 78ecdb9, the round 3 base) on the file shows 4 changed lines and nothing else. The working tree is clean.

| Change | Required by | Applied |
|---|---|---|
| 51 vitals o2sat "90% on 2 L/minute by nasal prongs" to "90% on 4 L/minute by nasal prongs" | verify3 required fix 2 | Yes, exact |
| 51 q3 update rewritten: "Bilevel ventilation runs at IPAP 16 and EPAP 5 cm H2O, with wall oxygen bled in at the mask at 4 L/minute. A chest X-ray shows no pneumothorax. At 1 hour her pH is 7.31, PaCO2 64 mmHg and SpO2 85% with little leak." | verify3 required fixes 1 and 2 | Yes, word for word as specified. "blender" no longer appears in the update |
| 51 q3 explanation adds the limited inspired fraction from bled-in oxygen, the small gain above 4 L/minute, and that oxygen is already at her mask | verify3 optional additions | Yes |
| 48 q1 explanation "within an hour" to "within hours" | verify3 physician item 2 | Yes |

No other line in the file changed. Options, keys, sources, key features and 50 and 52 are untouched.

## asthma-copd-51 end to end

- Stem and vitals: her pre-NIV need is now 4 L/minute by prongs at SpO2 90%, PaO2 60 mmHg. The stem text itself does not state a flow, so nothing conflicts.
- q1 (gabapentin) and q2 (full face mask) do not use the oxygen flow. Both explanations still hold.
- q3: on NIV the same 4 L/minute is bled into a high-flow circuit, so a lower inspired fraction and a fall to 85% are explained. The chest X-ray closes the pneumothorax branch. pH 7.29 to 7.31 and PaCO2 69 to 64 match the explanation. Bicarbonate about 31 to 32 mmol/L stays consistent.
- q4 is unchanged and still matches BTS/ICS (62% survival against 49% predicted).
- No mock-mode cue. The update says "bled in at the mask", which signals a non-blending set-up without echoing the key's wording. The only option with "blender" is the key, and the stem and updates no longer contain that word. The update's "at the mask" keeps "Entrain oxygen at the ventilator end" wrong without naming it.

## 51 q3 key against BTS/ICS 2016

Read again in the PDF text in the writer's download folder: recommendation 4 (Grade A) SaO2 88 to 92% on NIV, recommendation 5 (Grade C) oxygen entrained as close to the patient as possible, the good practice point that flows above 4 L/min cause mask leak and delayed triggering, and "A ventilator with an integral oxygen blender is recommended if oxygen at 4 L/min fails to maintain SpO2 >88%". The full text gives FiO2 44% at 4 L/min, says flows above 4 L/min "provided minimal additional increase", and says the ventilator end "was less effective". Every new explanation sentence is supported. The key is the single defensible answer. Each distractor fails on a stated reason: below target, wrong entrainment site, guideline's own reason against high flow, and loss of pressure support.

## Checks run

`SAMP_BATCH=s64 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed, 3 files and 128 tests, including the bank wide near duplicate stem test. The changed lines have no dashes, no semicolons and Canadian spelling.

## Required fixes

None.

## Physician-level items (not grounds for failure)

The verify3 note stands: most Canadian emergency NIV ventilators blend oxygen, so the bleed-in set-up reflects UK practice or home-style bilevel machines. The case fixes the equipment, so the key stands.
