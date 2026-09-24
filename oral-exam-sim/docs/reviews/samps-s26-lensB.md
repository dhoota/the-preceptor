# Review of batch s26 (burns), Lens B: internal consistency and numbers

Reviewer lens: B, internal consistency and numbers. Scope: `src/samps/s26/burns.ts` (burns-16 to burns-38) and `src/samps/s26/review-extra.ts` (burns-39 and burns-40). Every stem, update, option and explanation was read against the others, SAMP by SAMP. The Lens A report was not relied on. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| burns-39 (extra) | q1 | correct | Key was index 2 "Heparin infusion" while the explanation argues for escharotomy. The Lens A report says this was fixed, but the file still held the wrong key. Set to index 0. | High |
| burns-40 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives, and a lactate cannot confirm abdominal compartment syndrome. Lens A reported it removed, but it was still present. Removed. | High |
| burns-37 | stem | stem | Burns of the forehead, cheeks and front of both forearms and hands add up to about 10% at most on Lund and Browder at age 15, not the stated 14%. Q2 (under 15%) and q3 (10% or more) both depend on the figure. Stem now reads "front of both arms and hands", which gives about 14%. | Medium |
| burns-16 | q1 | explanation | Said adding "the front of the neck" gives 31.5%. The front of the neck is about 1%. The 4.5% step is the whole anterior head and neck, and her face is spared. Reworded. | Medium |
| burns-20 | q4 | explanation | "None of these three" after four distractors were discussed (delayed pain, household product, normal skin, fingertip pain). Changed to four. | Medium |
| burns-36 | q1 | explanation | Said the swelling came "within 20 minutes of" the burn. He arrived 40 minutes after the burn and swelled over 20 minutes in the department. Timeline corrected. | Medium |
| burns-25 | q1 | explanation | Said airway swelling "will peak during a 4 hour flight". Burn airway edema peaks well after 4 hours, and he is 1 hour out. Changed to "worsen during". | Medium |
| burns-38 | q3 | stem | Explanation relies on "no neurologic deficit", which the stem never stated (only "alert"). Added "The neurologic examination is normal." to the stem. | Medium |
| burns-29 | q1 | explanation | Referred to "wet gloves" before the q2 update reveals the wet cement. The stem says only cotton gloves. Reworded to "his gloves". | Medium |
| burns-27 | q1 | stem | Distractor "Burn size under 10% TBSA" and its explanation relied on a size the stem never gave. Added "about 7% TBSA" (both whole feet on Lund and Browder). | Medium |
| burns-18 | q1 | prompt | Lead-in "because of her long time on the floor" pointed straight to rhabdomyolysis and creatine kinase. Reworded to "Which of the following blood tests is most important to add for her now?". | Medium |
| burns-18 | q1 | explanation | "About 16 hours pinned on the floor". The stem gives 16 hours since last seen well, and she fell at night, so floor time is up to 16 hours, and she was not pinned. Reworded. | Low |
| burns-31 | q4 | prompt | "given his swollen face" cued intraocular pressure. Reworded to "Which of the following additional pressures should be monitored during his ongoing resuscitation?". The swollen eyelids remain in the stem. | Low |
| burns-28 | stem, q1 | stem | Menu option "Up to date immunizations" and the explanation's "her immunization status" had no stem fact. Added "Her immunizations are up to date." | Low |
| burns-28 | q4 | explanation | "Calm toddler" contradicted the stem's "quiet and watchful". Changed to "quiet". "600 mg is the adult maximum single dose" is false (adult single doses reach 800 mg). Changed to "a large adult dose". | Low |
| burns-22 | q2 | options, explanation | Eponym written "chance fracture". It is the Chance fracture. Capitalized in option and explanation. Order unchanged. | Low |
| burns-23 | q4 | explanation | "Pigmented urine, which he does not have". The stem says nothing about his urine. Reworded: his is a flame burn. | Low |
| burns-26 | q2 | explanation | "When oral analgesia controls her pain" asserted a response the case never gives. Reworded to tie to her stated pain of 6 out of 10. | Low |
| burns-21 | q2 | options | The key "Give hydroxocobalamin 5 g IV now" was the only option with a dose, so it stood out by detail. Dose moved to the explanation (which already gives 5 g IV). Key text now "Give hydroxocobalamin IV now". Order and index unchanged. | Low |

## Key changes

- burns-39 q1 (review-extra): before index 2 "Heparin infusion", after index 0 "Escharotomy of the arm". The old key contradicted its own explanation.

No other key was changed.

## Review-extra

- burns-39 is a copy of burns-23 (same stem, options and explanations) with a wrong key planted. burns-40 is a copy of burns-31 with an invented lactate added. Both plants are now fixed, but both are duplicates and would fail the bank's near-duplicate stem test if added. Recommendation: reject both.
- The Lens A report lists both review-extra fixes as done, but neither was in the file when this review began. All other Lens A fixes that were spot-checked (burns-16 q5, burns-38 stem ECG, burns-20 q3, burns-22 q1 deletion) are present.

## Numbers recomputed (script in scratchpad)

All the following were recomputed independently and match the keys and every distractor's stated derivation:

- burns-16: rule of nines 18 + 4.5 + 4.5 = 27%. 2 x 70 x 27 = 3780 mL, half 1890 mL over 6 hours (18:00 burn, 20:00 start, 02:00 end) = 315 mL/hour. Distractors 236 (8 h from arrival), 158 (24 h), 473 (3 mL/kg), 630 (all in 6 h) check. Urine target 0.5 x 70 = 35 mL/hour. Fentanyl 1 mcg/kg = 70 mcg.
- burns-17: IN fentanyl 1.5 x 13 = 19.5 mcg. 39 = 3 mcg/kg, 100 mcg = 7.7 mcg/kg. Lund and Browder 13 + 2 + 2 = 17%. 3 x 13 x 17 = 663 mL, 331.5 / 7 = 47 mL/hour. 41, 32 (2 mL/kg from burn), 28 and 83 check. Maintenance by 4 2 1 would be 46 mL/hour (not asked).
- burns-22: 18 + 4.5 = 22.5%. 2 x 80 x 22.5 = 3600 mL, 1800 mL in 8 hours. 1440 (18% only), 900, 2700 (3 mL/kg) check.
- burns-23 and burns-39: 0.5 x 76 = 38 mL/hour. 76 = 1 mL/kg/hour, 150 = 1.97 mL/kg/hour, 19 = 0.25 mL/kg/hour.
- burns-24: hydroxocobalamin 70 x 20 = 1400 mg. 5000 mg = 250 mg/kg.
- burns-25: 2 x 85 x 30 = 5100 mL, 2550 / 7 = 364 mL/hour (19:00 burn, 20:00 start, 03:00 end). 319, 213, 546, 729 check. Succinylcholine at 1 hour after injury.
- burns-26: 3.5 palms = 3.5%.
- burns-28: ibuprofen 10 x 10 = 100 mg. 50 = 5, 200 = 20, 400 = 40, 600 = 60 mg/kg.
- burns-30: ketamine 0.3 x 90 = 27 mg. 90, 135, 180, 270 = 1, 1.5, 2, 3 mg/kg.
- burns-31 and burns-40: 7400 x 2 / (80 x 45) = 4.1 mL/kg per %TBSA. Urine 15 to 20 mL against a 40 mL/hour target. Bladder pressure 28 mmHg.
- burns-32: Lund and Browder 13 + 1 + 2 = 16%. 3 x 9 x 16 = 432 mL, 216 / 7 = 31 mL/hour. 27, 18, 36 (6 h), 62 check. Maintenance 4 x 9 = 36 mL/hour. Urine 1 x 9 = 9 mL/hour, 4.5 = 0.5, 18 = 2 mL/kg/hour.
- burns-33: rule of nines 27%. Baux 79 + 27 = 106, revised 123, 97 (trunk only), 133 (double). Fentanyl 25 mcg = 0.45 mcg/kg.
- burns-34: fentanyl 250 mcg = 3.3 mcg/kg.
- burns-35: IN fentanyl 1.5 x 17 = 25.5 mcg. 9 = 0.53, 17 = 1, 50 = 2.9, 100 = 5.9 mcg/kg.
- burns-21: GCS 2 + 2 + 5 = 9. COHb 18%. burns-38: COHb 16% below 25%, lactate 1.8 mmol/L.
- Stated TBSA figures were checked against the listed areas. All fit except burns-37 (fixed above).
- Timelines checked: burns-16, 17, 20, 22, 25, 30, 32, 36 and 37.

## Sources verified

Lens B does not re-verify citations. Numbers were checked against the formulas the stems name (ABA 2 mL/kg per %TBSA for adults, TREKK 3 mL/kg per %TBSA at 12 years and under with dextrose maintenance by 4 2 1, urine 0.5 mL/kg/hour adult and 1 mL/kg/hour at 30 kg or less) as given in the stems and the Lens A source notes:

- TREKK pediatric thermal burns v2.0, 2025: https://trekk.ca/resources/bottom-line-recommendations-pediatric-thermal-burns/
- Cartotto 2024, ABA burn shock resuscitation: https://pubmed.ncbi.nlm.nih.gov/38051821/

## Needs physician decision

- burns-39 and burns-40: reject as duplicates of burns-23 and burns-31.
- burns-37: confirm the new stem wording (front of both arms and hands) gives the intended 14%, since the TREKK 15% formula threshold and the 10% transfer threshold both hinge on it.
- burns-17 q1: the explanation says 50 mcg is "the ceiling for a repeat dose". This comes from TREKK and was not checked by this lens.

## Summary

SAMPs reviewed: 25 (23 main, 2 extra). Fixes: 19 rows. By category: planted defects in review-extra 2 (wrong key, invented lab value), TBSA inconsistent with described areas 1, wrong arithmetic or area reasoning in an explanation 1, count error 1, timeline errors 3, explanation facts not in the stem 6 (stem facts added in 3), cueing lead-ins or key detail 3, eponym 1, false number in a distractor reason 1. Key changes: 1 (burns-39 q1). All keyed calculations were correct. Gates: `npx tsc` prints nothing for s26, and `SAMP_BATCH=s26 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 516 of 516.

SAMP ids with a defect: burns-16, burns-18, burns-20, burns-21, burns-22, burns-23, burns-25, burns-26, burns-27, burns-28, burns-29, burns-31, burns-36, burns-37, burns-38, burns-39, burns-40.
