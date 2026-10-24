# Q500B re-review: s73, dvt-pe (Revision 1)

Batch `src/samps/s73/dvt-pe.ts`, ids dvt-pe-48 to dvt-pe-52, 20 questions. Fresh reviewer. I did not write, edit or first-review this batch, and I did not edit it now (REVIEW-RULES rule 1). I reviewed the whole final batch, not only the changes. Lenses A and B were both applied, plus the Q500B uniqueness rule against the whole bank (`src/samps` and `src/cases`, by keyword, not only `topic: "dvt-pe"`). Every item stays `reviewed: false`.

## Tests

`SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass (bank-wide near duplicate stem test 4.7 s).

## Sources rechecked for the rebuilt items

| Id | Finding | How |
|---|---|---|
| tc-dvt-dx | "Patients with a likely PTP should have either a proximal CUS or whole leg CUS ... Those with a negative proximal CUS should undergo D-dimer testing ... and repeat proximal CUS in 5-7 days ... Those with a negative whole leg CUS do not require D-dimer or repeat CUS." Also "Pre-test probability for UEDVT is typically determined by clinical gestalt. The Constans Decision Score ... has had only limited validation in one prospective management study." Supports 48 q4 and 51 q2. | PDF downloaded and read |
| tc-preg-vte-tx | "A minimum total duration of 3 months is recommended ... at least 6 weeks postpartum (with a minimum total duration of 3 months)." Routine peak anti-Xa not recommended, could be considered at extremes of weight, breakthrough thrombosis, very high risk. Trough anti-Xa for severe renal dysfunction. "routine platelet count monitoring is not suggested". Weight at diagnosis with no further adjustment is option 1. Supports 49 q4 and 51 q4. | PDF downloaded and read |
| tc-pe-dx | "Signs of PE may include tachypnea, tachycardia, hypoxemia, hypotension, and features of right ventricular dysfunction (distended jugular veins)." Supports 50 q2 and 51 q3. | PDF downloaded and read |
| tc-apixaban | PT/INR and aPTT "often normal ... and do not provide reliable measures". Apixaban-calibrated anti-Xa assays "available in some laboratories ... not validated across centres". St John's wort named as a strong inducer. Supports the facts in 52 q2 and q3. | PDF downloaded and read |
| jackman-groin-pwid | "Septic thrombophlebitis more commonly affects the large proximal veins in long-term frequent intravenous injectors", severe cases with "fever, chills, rigours, and a draining sinus", diagnosed "by CT ... or duplex ultrasonography". Section 10.1: "two sets of blood cultures should be regarded as baseline". Antibiotic table row for endovascular infection (including septic thrombophlebitis) lists flucloxacillin or vancomycin. Supports 48 q2. | WebFetch of the imrpress URL |

The other sources (wells-dvt-2003, wells-pe-2001, tc-preg-prophylaxis, hfa-ppcm-2019, abm-protocol-31, biss-peds-pe-2009, bellou-outpatient-pe) back items whose text did not change in substance. The first review verified them and I found nothing against them.

## First-review fails: resolution

| Item | Resolved? | Note |
|---|---|---|
| 48 stem | Yes | New frame: 46-year-old man, fentanyl, left groin, no hepatitis C, no smoking. It no longer reads as infectious-diseases-50. "The right leg is normal." added. |
| 48 q2 | Yes | The pseudoaneurysm point is gone. Septic thrombophlebitis of a deep vein in a PWID is not keyed elsewhere. dvt-pe-11 (s08) mentions septic superficial thrombophlebitis only as one item in a write-in list. |
| 48 q3 | Yes | The update no longer names a q2 option. "Unremarkable" does not reveal the q2 key, because q2 is hypothetical ("would most suggest"). |
| 48 q4 | Yes | Keys whole leg CUS for a likely patient who may not return. dvt-pe-28 q4 keys the repeat proximal scan and dvt-pe-36 q2 keys CUS over D-dimer. Same guide, different decision. |
| 49 stem | Yes | Side, timing, vitals and weight now differ from chest-pain-04, and the breastfeeding drug question is gone. The shared postpartum PE setting is acceptable without a shared decision. |
| 49 q3 | Yes | Neutral update. |
| 49 q4 | Yes | See writer point 3 below. |
| 50 q3 | Yes | Neutral update. |
| 51 q2 | Yes | Gestalt for UEDVT is new. It is consistent with dvt-pe-43 (s33), which uses the Constans score. Constans is not an option here, and the explanation repeats the TC caveat accurately. |
| 51 q3 | Yes | The duplex question is gone. The new question keys tachypnea as the PE sign. The "no chest symptoms" claim is now a stem fact. |
| 51 q4 | Yes | Monitoring is not keyed in any SAMP. Low confidence note: the draft oral case left-calf-swelling-and-pleuritic-pain (batch20) states "Routine anti Xa levels and platelet counts are not needed" in a model answer line and in teaching text. Its graded criterion is LMWH dosing, so this is not a repeat of a key decision. |
| 52 q2 | No | The repeat is gone, but the replacement fails (see below). |

## Writer's flagged points

1. 52 q2 KF6 tag. I do not accept it. Naming the assay that measures apixaban is not choosing an anticoagulant that fits the patient. The question also rests on the inducer premise that repeats signed cva-45 (see below). Fails.
2. 48 q2, S. aureus cover and blood cultures. Both are in Jackman: blood cultures are baseline in section 10.1, and the endovascular infection row, which names septic thrombophlebitis, lists flucloxacillin or vancomycin. Anticoagulation is not in Jackman, but it is standard for a proximal DVT. Holds.
3. 49 q4, duration. The TC wording is verified. dvt-pe-40 q3 (s33) uses the same TC sentence, but there the 6 weeks postpartum limit binds (key "6 weeks after delivery"). Here the 3 month minimum binds. That is a different decision, and the item's own distractor "Until 6 weeks after delivery" makes the contrast. Holds. Low confidence note for the physician: the two items teach the two halves of one sentence.

## Verdict by item

### dvt-pe-48 Swollen leg after months of groin injecting: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | Every Wells item used in q3 traces to the stem. The social details support q4. |
| q1 | PASS | Jackman supports femoral injection and the 48% figure. The distractor reasons are true. |
| q2 | PASS | The key and the reasons are supported by Jackman. Tenderness, edema and mild warmth are true reasons for rejecting the distractors with a bland DVT. |
| q3 | PASS | Recomputed: tenderness 1, entire leg 1, calf 4 cm (3 cm or more) 1, pitting edema confined to the left leg 1 = 4. Nothing subtracted. Likely at 2 or more. |
| q4 | PASS | Matches the TC algorithm. "Two point bedside scan is a proximal study" is true. The 2 week repeat is outside 5 to 7 days. The key is not the longest option. |

### dvt-pe-49 Breathless new mother: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | No longer mirrors chest-pain-04. |
| q1 | PASS | TC lists emergency caesarean and serious postpartum infection. Age threshold 40. |
| q2 | PASS | PPCM contrast. Distractor reasons true. |
| q3 | PASS | ABM 31 figures correct. Neutral update. |
| q4 | PASS | 16 days postpartum plus 6 weeks is under 4 weeks of treatment, so the 3 month minimum governs. Key correct. Options alphabetical. |

### dvt-pe-50 Teenager home from a ski trip: PASS

| Item | Verdict | Finding |
|---|---|---|
| q1 | PASS | Unchanged. TC provoking factors. |
| q2 | PASS | Unchanged. TC distended jugular veins. |
| q3 | PASS | Neutral update. Key rewording ("Poor at separating children with PE") is an unrequested change (rule 4). Its meaning is unchanged, it matches the grammar of the other options and it is not hedged alone. Accepted. |
| q4 | PASS | Unchanged. 420 is below 500 and suspicion is high, so CTPA. 15% matches Biss. |

### dvt-pe-51 Painful neck early in pregnancy: PASS

| Item | Verdict | Finding |
|---|---|---|
| stem | PASS | "No chest pain or shortness of breath" is now stated. |
| q1 | PASS | Unchanged. Severe OHSS is a TC factor. |
| q2 | PASS | KF3 is tested through the absence of a validated rule. TC supports it. The distractors are leg DVT or PE rules. |
| q3 | PASS | Tachypnea is a TC PE sign. The other options are local signs. The explanation's triage figures (resp 16, O2 sat 98%) match the vitals. |
| q4 | PASS | Every distractor reason matches TC. 64 kg is not an extreme of weight. Creatinine normal is given in the update. |

### dvt-pe-52 Older man with chest pain on a blood thinner: FAIL

| Item | Verdict | Finding and exact fix |
|---|---|---|
| stem | FAIL (high) | Retells signed cva-45 (s27, `reviewed: true`). Both have a man in his 70s with atrial fibrillation on apixaban from a blister pack who has missed no doses, who started St John's wort for low mood 6 to 8 weeks ago, and who has a breakthrough thromboembolic event blamed on induction. Both cite the tc-apixaban inducer sentence. The writer's new angles list and the first review both missed this, because cva-45 is not tagged dvt-pe. Fix: remove the St John's wort cause and the copied details (blister pack, "missed no doses", low mood). A PE while on an anticoagulant may stay if the cause comes from a mechanism the bank lacks. Do not use another inducer (rifampin, carbamazepine, phenytoin) or an inappropriate dose reduction, because cva-45 q2 and q3 teach both. Support the new cause with a real source. Keep the q1 Wells items intact, or recompute q1. |
| q1 | PASS | Recomputed 3 + 1.5 + 1 = 5.5, PE likely under Wells 2001 (above 4) and TC (above 4.5). Recheck after the stem rebuild. |
| q2 | FAIL (medium) | Poor key feature fit. Naming the assay that measures apixaban does not test KF6 ("choose anticoagulation that fits the patient"). Its rationale ("a low level ... supports reduced drug exposure") depends on the inducer premise being removed. It also sits on the same tc-apixaban paragraph that signed cva-45 q2 uses to reject "Measure an apixaban level first". Fix: replace it with a true KF6 decision, for example the anticoagulant plan after this breakthrough PE, using a real source that states the plan. It must not name or imply the new q3 key in mock mode (B6). |
| q3 | FAIL (high) | Same teaching point as signed cva-45 q3: St John's wort lowers apixaban levels and explains the event. Fix: rebuild it with the stem on the new cause, or replace it with a KF1 point the bank lacks. KF1 is already covered 4 times elsewhere in the batch, so any key feature may go here if coverage of all 7 holds. |
| q4 | PASS | The Hestia item "PE diagnosed during anticoagulation treatment" is verified and is not keyed elsewhere (other Hestia items key oxygen, renal function or bleeding risk). The O2 and age reasons are true. Keep it only if the rebuilt stem still has the PE occur on an anticoagulant. Otherwise rebuild it on another Hestia item not already keyed in dvt-pe-08 to dvt-pe-15 (s08), dvt-pe-23 or dvt-pe-32 (s33) or sob (s17). |

## Other checks

- House style: no em or en dashes, no semicolons in text, Canadian spelling (labour, favours, centres, colour), no mnemonics, no personal names.
- Mock-mode (B6): no update in 48 to 51 names an earlier key. 52 will need rechecking after the rebuild.
- Unrequested changes (rule 4): 48 q1 distractors updated to the new frame, the Arya source removed from 51, and the 52 q3 and q4 updates rearranged. Each is judged sound.
- Key feature coverage now: KF1 5, KF2 4, KF3 4, KF4 1, KF5 2, KF6 3, KF7 1. If 52 q2 leaves KF6, KF6 still has 49 q4 and 51 q4. All 7 key features must stay covered after the 52 rebuild.

## Summary

- 20 questions. 17 pass. 3 fail, all in dvt-pe-52.
- Every first-review fail in dvt-pe-48 to dvt-pe-51 is resolved, and no new defect was found there. Every new claim checked against its source holds.
- dvt-pe-52 repeats signed cva-45 in frame and teaching point (St John's wort lowering apixaban in an older man with atrial fibrillation who takes every dose). The rebuilt q2 does not test KF6.

Overall: FAIL (3 items)
