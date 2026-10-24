# Q500B re-review: s73, dvt-pe (Revision 2)

Batch `src/samps/s73/dvt-pe.ts`, ids dvt-pe-48 to dvt-pe-52, 20 questions. Fresh reviewer. I did not write, edit or review this batch before, and I did not edit it now (REVIEW-RULES rule 1). I reviewed the whole final batch, not only dvt-pe-52. Lenses A and B were both applied, plus the Q500B uniqueness rule against the whole bank (`src/samps` and `src/cases`, by keyword). Every item stays `reviewed: false`.

## Tests

`SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass (bank-wide near duplicate stem test 5.9 s).

## Sources checked in this round

| Id | Finding | How |
|---|---|---|
| tc-rivaroxaban | "Rivaroxaban 15mg tablets, 20mg tablets ... must be taken with food ... to maximize absorption. Rivaroxaban 2.5mg and 10mg tablets may be taken with or without food." Treatment 15 mg BID with food for 3 weeks, then 20 mg OD. 10 mg OD considered for extended therapy beyond 6 months. "Date of version: 02November2025" matches the citation. Supports 52 q2. Says nothing about VTE that recurs on rivaroxaban. | PDF downloaded and read |
| tc-dvt-tx | Rivaroxaban 15 mg BID for 21 days then 20 mg OD, 10 mg daily for secondary prevention beyond 6 months, dabigatran and edoxaban need a 5 to 10 day parenteral lead-in. No statement on recurrence during anticoagulation or on reloading. Version dated 2 November 2025. | PDF downloaded and read |
| tc-dvt-dx | Likely PTP: proximal or whole leg CUS. Negative proximal CUS: D-dimer "to determine the need for repeat CUS" and repeat in 5 to 7 days. Negative whole leg CUS needs neither. UEDVT pretest probability "typically determined by clinical gestalt", Constans "limited validation in one prospective management study". Supports 48 q4 and 51 q2. | PDF downloaded and read |
| tc-pe-dx | Supports the signs used in 50 q2 and 51 q3. Contains no statement on D-dimer in a patient already anticoagulated (relevant to the fix options below). | PDF downloaded and read |
| tc-apixaban | "Apixaban may be taken with or without food." (Background only, not cited in the batch now.) | PDF downloaded and read |
| bellou-outpatient-pe | Hestia items "Need for oxygen for >24 h to maintain oxygen saturation >90%" and "PE diagnosed during anticoagulation treatment" confirmed. Supports 52 q4. | PMC7792861 fetched |

The other sources (jackman-groin-pwid, wells-dvt-2003, wells-pe-2001, tc-preg-prophylaxis, hfa-ppcm-2019, abm-protocol-31, tc-preg-vte-tx, biss-peds-pe-2009) back items whose text did not change since two reviews verified them. I did not reopen them (WebFetch budget). Sources I could not open this round: none attempted and failed.

## Earlier fails: resolution

| Item | Resolved? | Note |
|---|---|---|
| First review, 12 fails in 48 to 52 | Yes for 48 to 51 | Confirmed by reading the current text. All mock-mode updates in 48 to 51 are neutral, 48 has "The right leg is normal.", 51 has "no chest pain or shortness of breath". |
| Verify 1, 52 stem (retells signed cva-45) | Yes | Atrial fibrillation, apixaban, blister pack, "missed no doses", low mood and St John's wort are all gone. No inducer and no dose reduction. |
| Verify 1, 52 q2 (assay question, poor KF6 fit) | Yes, but see q3 | The assay question is gone. Its KF6 replacement (new q3) fails as a repeat. |
| Verify 1, 52 q3 (St John's wort teaching point) | Yes | Rebuilt as rivaroxaban taken without food (now q2). Food is not keyed as a decision anywhere in the bank. Low confidence note: signed cva-08 q4 (s05) lists "Rivaroxaban 15 or 20 mg not taken with food" as one of seven accept items for causes of stroke on a DOAC, and its explanation says "Rivaroxaban 15 and 20 mg need food for full absorption". That is one write-in accept line in a stroke differential, not a keyed decision in a VTE case, so I accept it. The physician may want to see the two side by side. |

## Writer's flagged point: 52 q3 against dvt-pe-20 and dvt-pe-33

It is a repeat. Signed dvt-pe-33 q4 (s33, `reviewed: true`) asks for "the most appropriate initial anticoagulant regimen" with options dabigatran 150 mg PO twice daily, rivaroxaban 10 mg PO daily, rivaroxaban 20 mg PO daily, rivaroxaban 15 mg PO twice daily and warfarin, keys rivaroxaban 15 mg twice daily, and rejects 20 mg ("skips the higher initial dose"), 10 mg ("only for extended treatment after 6 months") and dabigatran ("needs 5 to 10 days of LMWH first"). 52 q3 shares four of its five options, the same key and the same three distractor reasons. Signed dvt-pe-20 q3 also keys rivaroxaban 15 mg twice daily against dabigatran and edoxaban, which "need 5 to 10 days of LMWH first". The breakthrough frame does not change what the candidate must discriminate: the rivaroxaban acute phase dose against maintenance, extended and lead-in regimens. The same discrimination is also tested in dvt-pe-18 q4 and sob-12 q4 as distractors.

A second problem: the key rests on no source. Neither Thrombosis Canada guide (both opened) states a plan for VTE that recurs on a DOAC, and the writer says so. The bank's only keyed breakthrough plan, signed dvt-pe-35 q2, follows ASH and switches to LMWH after failure on warfarin. Keying "reload rivaroxaban" for a DOAC failure without a source that says so is not defensible as the single best answer.

## Verdict by item

### dvt-pe-48 Swollen leg after months of groin injecting: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | Wells items and social facts trace to the stem. Distinct from infectious-diseases-50. |
| q1 | PASS | Jackman 48% figure and femoral injection mechanism hold. Distractor reasons true. |
| q2 | PASS | Septic thrombophlebitis signs per Jackman. Not keyed elsewhere. |
| q3 | PASS | Recomputed: tenderness 1, entire leg 1, calf 4 cm 1, pitting edema confined to the left leg 1 = 4. Likely at 2 or more. Neutral update. |
| q4 | PASS | Whole leg CUS removes the repeat scan, which fits a man with no phone. Low confidence wording note: "A negative proximal study must be followed by a D-dimer and a repeat scan" follows TC lines 108 to 111, although TC elsewhere ties the repeat to a positive D-dimer. Not a fail. |

### dvt-pe-49 Breathless new mother: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | No longer mirrors chest-pain-04. |
| q1 | PASS | Emergency caesarean and serious postpartum infection are TC factors. Age threshold 40. |
| q2 | PASS | Crackles with an S3 for PPCM. Distractor reasons true. |
| q3 | PASS | ABM 31 figures correct. Neutral update. |
| q4 | PASS | 42 minus 16 = 26 days, under 4 weeks, so the 3 month minimum governs. Options alphabetical. |

### dvt-pe-50 Teenager home from a ski trip: PASS

| Item | Verdict | Finding |
|---|---|---|
| q1 | PASS | TC provoking factors. |
| q2 | PASS | Distended neck veins, TC RV sign. |
| q3 | PASS | Biss numbers hold. Neutral update. |
| q4 | PASS | 420 below 500, high suspicion, CTPA. |

### dvt-pe-51 Painful neck early in pregnancy: PASS

| Item | Verdict | Finding |
|---|---|---|
| q1 | PASS | Severe OHSS is a TC factor. |
| q2 | PASS | Gestalt for UEDVT, TC wording verified this round. |
| q3 | PASS | Tachypnea as the PE sign. Explanation vitals match. |
| q4 | PASS | TC monitoring statements hold. 64 kg is not an extreme of weight. |

### dvt-pe-52 Chest pain at the end of a night shift: FAIL

| Item | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | New frame, no retelling of cva-45. No inducer, no dose reduction. Every q1 Wells item traces to the stem. No other bank item has a PE on rivaroxaban or a night shift worker with VTE. |
| q1 | PASS | Recomputed: PE most likely 3, pulse 108 1.5, previous DVT 1.5, hemoptysis 1 = 7.0. Likely above 4, high above 6 on the three level score. 6.0 and 5.5 are plausible miscounts. Options ascending. |
| q2 | FAIL (medium) | Key correct and supported by tc-rivaroxaban. Lens B defect: two distractors contradict the stem. The stem says she "takes all her tablets together at 06:00" and "eats her first meal at 15:00", but the options say "Calcium carbonate with lunch" and "Rosuvastatin 10 mg each evening". "Vitamin D 1000 units daily" gives a dose the stem never states. Fix: change the options to "Calcium carbonate at 06:00", "Levothyroxine 100 mcg at 06:00", "Rivaroxaban taken without food", "Rosuvastatin 10 mg at 06:00", "Vitamin D at 06:00" (keep alphabetical order, key stays index 2), or add the vitamin D dose to the stem if a dose is kept. Low confidence, not required: the sentence "Taking levothyroxine on an empty stomach is correct for that drug" is true, but she takes calcium carbonate with it, which lowers levothyroxine absorption. Either add "although calcium should be taken at least 4 hours apart from it" or drop the sentence's claim that her routine is correct. |
| q3 | FAIL (high) | Repeats the key decision, four of five options and the distractor reasons of signed dvt-pe-33 q4, and the key of signed dvt-pe-20 q3 (see above). The breakthrough reload key also has no source that states it. Fix: replace q3. Take the writer's own fallback and move KF6 out of 52. KF6 stays covered by 49 q4 and 51 q4, and all 7 key features stay covered. Rebuild q3 on a key feature and decision that no bank item keys, backed by a source that states the point, and do not test: DOAC starting doses or lead-in (dvt-pe-18, 20, 33, sob-12), LMWH after failure on warfarin (dvt-pe-35 q2), inducers, dose reduction or drug levels (cva-45), Hestia oxygen, renal or bleeding items (dvt-pe-08 to 15, 23, 32, sob s17), or whole leg CUS and gestalt (this batch). If the writer keeps KF6 here instead, the key must come from a real source that states the plan for VTE recurring on a DOAC with a correctable cause, and the options must not reuse the dvt-pe-33 q4 set. Whatever replaces it must not name or imply the q2 key (food) in its prompt, update or options (ruling B6), and the q4 option "Embolus while on rivaroxaban" must still fit. |
| q4 | PASS | Hestia "PE diagnosed during anticoagulation treatment" verified. The oxygen reason (need for oxygen over 24 h to keep saturation above 90%) is verified, and 94% on room air does not meet it. Options alphabetical. Not keyed elsewhere. |

## Other checks

- House style: no em or en dashes, no semicolons in text, Canadian spelling, no mnemonics, no personal names.
- Mock-mode (B6): no update, prompt or option in 48 to 52 names an earlier key. 52 q2 and q4 options do not reveal food. Recheck after the q3 rebuild.
- Key feature coverage now: KF1 5, KF2 4, KF3 4, KF4 1, KF5 2, KF6 3, KF7 1. After the q3 fix with KF6 moved out: KF6 2, and the new q3 adds to another key feature. All 7 stay covered.
- Key position balance (singles 0 to 4): 4, 3, 4, 3, 4, within limits. Key is the single longest option in 4 of 18 singles.
- The writer report's "Ids written" table still describes the first draft of 48, 49 and 52 (report only, not content).

## Summary

- 20 questions. 18 pass. 2 fail, both in dvt-pe-52.
- Every earlier fail is resolved. The cva-45 retelling is gone.
- 52 q3 repeats signed dvt-pe-33 q4 and dvt-pe-20 q3 (rivaroxaban 15 mg twice daily against 20 mg, 10 mg and LMWH lead-in agents), and its breakthrough reload key has no source.
- 52 q2 has two distractors whose timing contradicts the stem.

Overall: FAIL (2 items)
