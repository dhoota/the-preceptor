# Q500B re-review: s73, dvt-pe (Revision 3)

Batch `src/samps/s73/dvt-pe.ts`, ids dvt-pe-48 to dvt-pe-52, 20 questions. Fresh reviewer. I did not write, edit or review this batch before, and I did not edit it now (REVIEW-RULES rule 1). I reviewed the whole final batch, not only the Revision 3 changes. Lenses A and B were both applied, plus the Q500B uniqueness rule against the whole bank (`src/samps` and `src/cases`, by keyword). Every item stays `reviewed: false`.

## Tests

`SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass (bank-wide near duplicate stem test 4.8 s).

## Sources checked in this round

Every Thrombosis Canada PDF was downloaded with curl and read as text. WebFetch was not needed.

| Id | Finding | How |
|---|---|---|
| tc-pe-tx | "Unless bleeding risk is high ..., rapid-acting anticoagulant therapy should be initiated in patients with a high pre-test probability of PE while awaiting diagnostic imaging. Treatment can be withheld in patients with intermediate and low pre-test probabilities of PE if definitive diagnostic testing will be completed within 4 or 24 hours, respectively." "Date of version: 01May2025" matches the citation. Supports 52 q3. | PDF downloaded and read |
| tc-rivaroxaban | 15 mg and 20 mg tablets taken "with food ... to maximize absorption", 2.5 mg and 10 mg with or without food. "Date of version: 02November2025". Supports 52 q2. | PDF downloaded and read |
| tc-pe-dx | Surgery (especially orthopedic), hospitalization, air travel over 8 hours as provoking factors. Signs: tachypnea, tachycardia, hypoxemia, hypotension, distended jugular veins. Supports 50 q1, 50 q2, 51 q3. | PDF downloaded and read |
| tc-dvt-dx | Likely PTP: proximal or whole leg CUS. Negative proximal: D-dimer and repeat in 5 to 7 days. Negative whole leg needs neither. UEDVT pretest probability by gestalt, Constans limited validation. Supports 48 q4, 51 q2. | PDF downloaded and read |
| tc-preg-prophylaxis | 15 to 35 fold early postpartum risk, age 40 or more, severe OHSS after assisted reproduction, serious postpartum infection, emergency caesarean. Supports 49 q1, 51 q1. | PDF downloaded and read |
| tc-preg-vte-tx | Minimum total 3 months, at least 6 weeks postpartum. Weight at diagnosis with no adjustment accepted. Routine peak anti-Xa not recommended except extremes of weight, breakthrough, very high risk. Trough anti-Xa for severe renal dysfunction. HIT risk low, routine platelets not suggested. Supports 49 q4, 51 q4. | PDF downloaded and read |
| jackman-groin-pwid | Femoral puncture with irritant injection as the DVT mechanism, "in patients < 40 years old, 48% were PWID", septic thrombophlebitis in large proximal veins of long-term injectors with fever, chills, rigours and a draining sinus, diagnosed by CT or duplex. Supports 48 q1, 48 q2. | Article HTML downloaded with curl |
| bellou-outpatient-pe | Hestia "oxygen for >24 h to maintain oxygen saturation >90%" and "PE diagnosed during anticoagulation treatment". Supports 52 q4. | PMC7792861 downloaded with curl |
| abm-protocol-31 | Less than 1% of the maternal dose into milk, systemic infant dose under 0.01%, do not interrupt breastfeeding after contrast CT. Supports 49 q3. | PDF downloaded and read |
| biss-peds-pe-2009 | Median Wells 4.5 against 4, slightly greater significance with pediatric heart rate norms, normal D-dimer in 15% of PE positive and 25% of PE negative children, "may lack utility". SickKids Toronto. Supports 50 q3, 50 q4. | PubMed abstract via NCBI E-utilities |
| hfa-ppcm-2019 | Title confirmed (PMID 31243866). No URL in the source, full text not opened. | NCBI E-utilities summary |
| wells-dvt-2003, wells-pe-2001 | Real, already in the bank, no URL. Item weights and cut points checked against the TC diagnosis guides. | Not opened directly |

Sources I could not open: none. Not opened in full by design: hfa-ppcm-2019 full text, Wells 2001 and 2003 papers (no URL, text unchanged since two reviews).

## Earlier fails: resolution

| Review | Fails | Resolved? |
|---|---|---|
| q500b-qa-s73 | 12 items in 48 to 52 (repeats of infectious-diseases-50, dvt-pe-36, chest-pain-04, dvt-pe-17, dvt-pe-43, dvt-pe-05, dvt-pe-30, dvt-pe-14, mock-mode cues in four updates, 51 "no chest symptoms") | Yes. Current text checked. Updates in 48 q3, 49 q3, 50 q3 and 51 q3 are neutral. 48 has "The right leg is normal." 51 stem has "no chest pain or shortness of breath". |
| q500b-verify-s73 | 52 stem retelling cva-45, 52 q2 assay question, 52 q3 St John's wort | Yes. No atrial fibrillation, apixaban, blister pack, low mood or inducer remain. |
| q500b-verify2-s73 | 52 q2 distractor timings, 52 q3 rivaroxaban reload repeat of dvt-pe-33 q4 and dvt-pe-20 q3 | Yes, see 52 below. |

### New 52 q3: withhold anticoagulation for low pretest probability with CT within 24 hours

- Key correct and stated in the cited source (tc-pe-tx, quoted above). Low probability, CT in 16 hours, which is within 24. CHEST 2012 makes the same suggestion (Grade 2C), so the key holds beyond the Canadian guide.
- Not a repeat. Bank search (anticoagulation before or while awaiting imaging, by pretest probability) finds only the treat side: dvt-pe-28 q2 (s33, likely DVT, LMWH overnight), the s33 pregnancy item awaiting MR venography (high suspicion, dalteparin), chest-pain s28 YEARS item (distractor "Therapeutic LMWH until imaging", key is no imaging), critical-appraisal s07 q4 (write-in, interim anticoagulation if delayed), cases batch03 intermediate-risk-pe and batch20 left-calf-swelling (high suspicion, start before imaging). No item keys withholding for low probability.
- Distractor doses are correct treatment doses (apixaban 10 mg, rivaroxaban 15 mg, dalteparin 200 units/kg, tinzaparin 175 units/kg), so each is wrong only on the timing decision, which is the point tested. Options alphabetical with the "No [action]" option last (B9). The key is not the single longest option (three options at 30 characters).
- Mock-mode (B6): the update, prompt and options name no food, no rivaroxaban timing and no Wells value for her, so q3 reveals neither the q1 nor the q2 key. The q4 update opens "Back with her" and "Embolus while on rivaroxaban" still fits.
- "Another patient" update follows signed sob-10 q4 (s17).

## Verdict by item

### dvt-pe-48 Swollen leg after months of groin injecting: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | Every Wells item and every social fact used later traces to the stem. Distinct from infectious-diseases-50. |
| q1 | PASS | Mechanism and 48% (under 40, Syed and Beeching via Jackman) verified. Distractor reasons true. |
| q2 | PASS | Septic thrombophlebitis signs verified in Jackman. Cultures and S. aureus cover are standard practice (Jackman lists anti-MRSA agents for endovascular infection). |
| q3 | PASS | Recomputed: tenderness 1, entire leg 1, calf 4 cm 1, pitting edema confined to the left leg 1 = 4, nothing subtracted. Likely at 2 or more. |
| q4 | PASS | TC lines 108 to 111 support the key and each distractor reason. |

### dvt-pe-49 Breathless new mother: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | No longer mirrors chest-pain-04. |
| q1 | PASS | Emergency caesarean and serious postpartum infection listed, age threshold 40, 15 to 35 fold verified. |
| q2 | PASS | Crackles with an S3 for PPCM. Distractor reasons true. |
| q3 | PASS | ABM figures and advice verified. Neutral update. |
| q4 | PASS | 42 minus 16 = 26 days, under 4 weeks, so the 3 month minimum governs. Verified. |

### dvt-pe-50 Teenager home from a ski trip: PASS

| Item | Verdict | Finding |
|---|---|---|
| q1 | PASS | TC provoking factors verified. 9 hours is over 8. |
| q2 | PASS | Distended jugular veins as the TC RV sign. |
| q3 | PASS | Biss numbers match the abstract. Neutral update. |
| q4 | PASS | 420 below 500, high suspicion, CTPA. 15% verified. |

### dvt-pe-51 Painful neck early in pregnancy: PASS

| Item | Verdict | Finding |
|---|---|---|
| q1 | PASS | Severe OHSS is a TC factor. |
| q2 | PASS | Gestalt for UEDVT, TC wording verified. |
| q3 | PASS | Tachypnea as the PE sign. Explanation vitals match the stem. |
| q4 | PASS | TC monitoring statements verified. 64 kg is not an extreme of weight. |

### dvt-pe-52 Chest pain at the end of a night shift: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | No cva-45 retelling. Every q1 Wells item traces to the stem. |
| q1 | PASS | Recomputed: PE most likely 3, pulse 108 1.5, previous DVT 1.5, hemoptysis 1 = 7.0. Likely above 4, high above 6. Options ascending. |
| q2 | PASS | Every distractor now matches the stem timing (all at 06:00), and vitamin D has no unstated dose. Key verified in tc-rivaroxaban. 06:00 to 15:00 is 9 hours. The levothyroxine and calcium sentence is now accurate. |
| q3 | PASS | See above. Verified, unique, no cue. |
| q4 | PASS | Hestia items verified. 94% on room air does not meet the oxygen item. |

## Notes for the physician (not fails)

1. 52 q3 last sentence: "For her, with a high probability, the same guide would have called for an anticoagulant before imaging." She was already taking rivaroxaban, and the TC guide does not address a patient already anticoagulated. The sentence is a general contrast and not wrong, but it could be trimmed to "A high pretest probability would have called for an anticoagulant before imaging."
2. 52 q3 tag KF4 ("choose tests suited to pretest probability") is a stretch, since the decision is about treatment pending a test. The bank tags the matching treat-side item dvt-pe-28 q2 as KF4 and the s33 pregnancy item as KF6, so either tag has precedent. Coverage of all 7 key features holds either way (48 q4 is a clear KF4).
3. 52 q3: TC says treatment "can be withheld", which is permissive. Some physicians would still give LMWH to a low probability patient waiting 16 hours. The key is the guideline position.
4. 52 q2: the key "Rivaroxaban taken without food" is the only option without "at 06:00". It is still a noun phrase like the others, and the stem says all tablets are taken at 06:00, so the cue is weak. Low confidence.
5. 52 q2 and signed cva-08 q4 (s05) both teach that rivaroxaban 15 and 20 mg need food. Already flagged by verify2 as one write-in accept line in a stroke differential, not a keyed decision. I agree.
6. 50 q3: Biss found a statistically significant (P = 0.009) but small difference. "Poor at separating" is a fair reading of "may lack utility".

## Other checks

- House style: no em or en dashes, no semicolons, Canadian spelling, no mnemonics, no personal names.
- Mock-mode (B6) and cross-question cues (B7): none found in 48 to 52.
- Key feature coverage: KF1 5, KF2 4, KF3 4, KF4 2, KF5 2, KF6 2, KF7 1. All 7 covered.
- Single key positions 0 to 4: 4, 3, 4, 3, 4. Key is the single longest option in 4 of 18 singles.
- No contradiction of SCORING-RULINGS or signed items found.

## Summary

- 20 questions. 20 pass. Every earlier fail across three reviews is resolved.
- The new 52 q3 (withhold anticoagulation for low pretest probability with CT within 24 hours) is stated in the cited TC PE treatment guide, is not keyed anywhere else in the bank, and cues nothing.
- Six notes for the physician, none a defect.

Overall: PASS
