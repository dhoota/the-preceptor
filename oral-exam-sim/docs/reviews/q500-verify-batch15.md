# Q500 fresh verification: batch15

Fresh independent review of the four oral cases in `src/cases/batch15/`. The first QA round edited these files in place, against REVIEW-RULES rule 1, so the current text is treated as a writer revision. This reviewer has not written or edited any batch15 file and made no edits. Every finding, node, choice, feedback line, model answer, rubric item and source was read on every path.

## Checks run

- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- House style scan of every string: no em dashes, no en dashes, no semicolons, no US spellings found, no personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` in all four.
- Uniqueness: case titles and stems across `src/cases`, and SAMP titles and stems in `src/samps` for each topic.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| headache-building-over-five-days | FAIL | One Ontario-only term in a case with no province (small fix) |
| chest-tightness-after-night-shift | FAIL | Opening twist repeats SAMP s52, one choice mislabelled under C1, no province for Ontario law |
| weak-and-pale-after-a-stent | FAIL | One choice mislabelled under C1, and the antiplatelet decision repeats SAMP gi-bleed-36 |
| brought-down-from-the-eighth-floor | FAIL | Near duplicate of SAMP s09 heat wave item, batch03 heat stroke case and SAMP s44 |

## 1. headache-building-over-five-days: FAIL

### Numbers recomputed (all correct)

- At 66 kg: enoxaparin 1 mg/kg = 66 mg every 12 hours. Lorazepam 0.1 mg/kg = 6.6 mg, capped at 4 mg. Levetiracetam 60 mg/kg = 3960 mg, under the 4500 mg maximum (ESETT).
- 8 questions on every path, longest path 650 s. Rubric rows 8, 7, 10, 8 of 33 (history 24%, management 30%).
- Anatomy fits: right transverse and sigmoid sinus thrombosis, right temporoparietal venous hemorrhage, left sided signs.

### First QA changes and physician items

- Rewrite away from batch13 "Six days after the birth": accepted. The case is now a first presentation in a non pregnant woman on a combined pill. The only CVT SAMPs (s11 "Headache and a seizure after delivery", s15 postpartum items) are postpartum. s40 "Headache and a whooshing noise" is idiopathic intracranial hypertension. Pass on uniqueness.
- LMWH versus unfractionated heparin wording: correct against ESO 2017 (LMWH preferred, weak recommendation). Physician item accepted.
- New q-talk counselling question and ESO support for avoiding estrogen and considering LMWH prophylaxis in a later pregnancy: correct.
- Citation reassignments (SNNOOP10, Hasbun 2001, ACEP 2019 only for nonopioid analgesia): correct.

### Required fix

1. Province (bank practice and SCORING-RULINGS A17 by analogy: if a provincial system is tested, the case names the province, otherwise national wording). The stem names no province and no finding places the case in Ontario.
   - File `src/cases/batch15/headache-building-over-five-days.ts`, node `q-dispo`, model answer line 2. Current: "Call the regional stroke centre through CritiCall Ontario. Speak with neurology and let neurosurgery know." Required: "Call the regional stroke centre through the provincial transfer service, such as CritiCall in Ontario. Speak with neurology and let neurosurgery know."
   - Rubric `bs-pr2` text. Current: "Arranges transfer to a stroke centre through CritiCall with neurology and neurosurgery aware, a structured handover and a monitored escort." Required: "Arranges transfer to a stroke centre through the provincial transfer service with neurology and neurosurgery aware, a structured handover and a monitored escort."

## 2. chest-tightness-after-night-shift: FAIL

### Checks

- 8 questions on every path, longest path 640 s. Rubric rows 8, 6, 10, 7 of 31 (history 26%, management 32%).
- Timeline consistent on all paths (troponins 07:45 and 08:45, crisis nurse from 08:00).
- 9-8-8 by call or text is correct. CANMAT 2023 side effect review within 2 weeks and closer monitoring in the first 4 weeks: correct. Stanley 2018 (5.3% versus 8.6% suicidal behaviour at 6 months, about 45% fewer): "about half" is acceptable.

### First QA changes and physician items

- Formulation now names the low versus moderate risk debate and makes discharge conditional on means removal, same day mental health assessment and fast follow up. Strong disposition includes crisis nurse and on call psychiatrist review. Accepted. This answers the physician item in a defensible way.
- Form 1 feedback and ns-m1 teaching state both parts of the Ontario Mental Health Act s. 15 test: correct.
- Citation reassignment to CANMAT, AHA/ACC 2021, PHIPA and Stanley 2018: accepted.

### Required fixes

1. Uniqueness (Q500_BRIEF rule 3, reused twist). SAMP `src/samps/s52/suicide-risk.ts`, title "Palpitations two days after an arrest": a middle aged adult with chest tightness and palpitations, sinus tachycardia with no ischemic change, two normal high sensitivity troponins, and the keyed next step "Ask about thoughts of suicide" against "Discharge with a panic disorder handout" and "Lorazepam prescription for 1 week", then psychiatry assessment in the ED today and a crisis team call within 24 hours. This case's q-approach keys the same step against the same two distractors (c-cardiac-only panic discharge, c-lorazepam), and q-dispo and q-plan key the same follow up. Neither the writer nor the first QA found s52.
   - Required change: replace the presentation that hides the suicidality (stem, hpi, s-open, q-approach and its three choices and consequence nodes, ns-h1 and ns-p1) with one the bank does not have. Chest tightness or palpitations with normal troponins, and the panic or lorazepam distractors, must not be the hook. Also check s17 and s52 titles ("An extra dose by mistake", "Asking for something to help him sleep", "Rolled ankle at basketball practice" and others) so the new hook does not land on another one. The later parts (opioids at home, husband asking for admission, Form 1 refusal, sertraline counselling, employer confidentiality) are distinctive and can stay.
2. Choice label (SCORING-RULINGS C1). Node `q-dispo`, choice `c-form1`.
   - Current: `quality: "unsafe"` for "I completed a Form 1 because she had thought about taking her mother's pills."
   - Required: `quality: "partial"`. C1: "A choice is labelled unsafe only when it endangers the patient. The wrong legal basis ... is partial." Detention without meeting s. 15 is the wrong legal basis. The feedback can stay as written.
3. Province. The case tests the Ontario Mental Health Act and PHIPA but the stem names no province. Bank practice (batch09 colleague-at-handover and melena-wallet-card name Ontario in the stem) and A17 by analogy require it. Required: add "in Ontario" to the stem ("... a community hospital in Ontario when the following patient arrives") or state the province in the `services` finding.

## 3. weak-and-pale-after-a-stent: FAIL

### Numbers recomputed (all correct)

- Glasgow Blatchford score: urea 21.4 mmol/L = 4, hemoglobin 71 g/L in a man = 6, systolic 94 mmHg = 2, pulse 118 = 1, melena = 1, near faint does not score syncope, no hepatic disease, no heart failure (EF 50%). Total 14. Correct in model answer and wp-pr1.
- Pantoprazole 80 mg IV then 8 mg per hour for 3 days after endoscopic therapy, then twice daily to day 14 (Barkun 2019): correct.
- 8 questions on every path, longest path 635 s. Rubric rows 7, 6, 10, 8 of 31 (history 23%, management 32%).
- ACG and CAG 2022 checked at https://pmc.ncbi.nlm.nih.gov/articles/PMC8966740/: statement 8 against platelet transfusion, statement 9 against holding cardiac ASA, no recommendation on the P2Y12 inhibitor in acute bleeding, and statement 18 no recommendation on same day P2Y12 resumption. The case states this correctly.

### First QA changes and physician items

- GBS corrected from 16 to 14: correct.
- Transfusion wording ("well above 80 g/L while ischemic", target debated, many aim near 100 g/L): acceptable. Barkun 2019 gives only "higher" with cardiovascular disease. Physician item accepted.
- Ticagrelor left to a joint cardiology and GI decision: correct against ACG and CAG 2022. Physician item accepted.
- Stem moved away from batch09 melena-wallet-card: accepted.
- Antiplatelet question reframed as a consultant conflict: not enough. See fix 2.

### Required fixes

1. Choice label (SCORING-RULINGS C1). File `src/cases/batch15/weak-and-pale-after-a-stent.ts`, node `q-resus`, choice `c-crystalloid`.
   - Current: `quality: "partial"` for "I gave 2 L of normal saline and planned to transfuse only if his hemoglobin fell below 70 g/L."
   - Required: `quality: "unsafe"`. He is in hemorrhagic shock (BP 94/58 mmHg, pulse 118, capillary refill 4 seconds, lactate 3.4 mmol/L) with active demand ischemia and a hemoglobin of 71 g/L. Withholding red cells and diluting with 2 L of saline delays time critical care, which C1 labels unsafe. The feedback and the consequence node (chest heaviness returns, hemoglobin 63 g/L) already show the harm. Source: Barkun 2019, Villanueva 2013 exclusions.
2. Uniqueness (Q500_BRIEF rule 3, reused key decision). SAMP `src/samps/s39/gi-bleed.ts`, gi-bleed-36 "Black stools after a coronary stent": a man in his sixties with melena after a drug eluting stent for NSTEMI, on ASA 81 mg and ticagrelor 90 mg twice daily, keyed to continue ASA, a short ticagrelor pause planned with cardiology, and no platelet transfusion, plus a higher transfusion threshold for coronary disease. This case is the same diagnosis and setting, and q-antiplatelet keys the same three decisions (c-continue-asa strong, c-hold-both partial, c-platelets unsafe, rubric wp-m3 and wp-pr2). The consultant conflict framing changes the wording, not the decision.
   - Required change: replace q-antiplatelet as a graded branching question with a decision gi-bleed-36 does not key. Keep "continue ASA, no platelets, ticagrelor with cardiology" as non graded model answer context and in wp-m3 teaching if needed. The case's distinctive material (type 2 MI from blood loss, naproxen with no PPI, maroon stool from an upper source, massive hemorrhage protocol without tranexamic acid) can carry the branching. Keep at least 3 branching questions and an escalation on every path after the change.

## 4. brought-down-from-the-eighth-floor: FAIL

### Numbers and clinical content

- Rectal 41.8°C against tympanic 38.6°C, GCS 10 (E3 V3 M4), labs and ECG are internally consistent. Stopping active cooling near 39°C, no antipyretics, no dantrolene, cold IV fluid as an adjunct: consistent with WMS 2019. Empiric antibiotic for hypotension with lactate 4.6 mmol/L: consistent with SSC 2021.
- BC coroners figures (619 deaths, 98% indoors, 67% aged 70 or older, 56% living alone): consistent with the cited release.
- 8 questions on every path, longest path 625 s. Rubric rows 7, 7, 11, 8 of 33 (history 21%, management 33%).

### First QA changes and physician items

- Stem, card and timeline changes to move away from SAMP s44: not enough (see fix 1). The `scene` finding still opens "It is day 3 of a heat warning" in a seniors' building with failed air conditioning, which s44 also uses.
- Cooling feedback (immersion faster, evidence weaker in classic heat stroke, ice packs with evaporative cooling accepted): accurate.
- Ceftriaxone replaced with an empiric antibiotic, Listeria point added: accepted.
- Physician item, WMS 2024: the 2024 update (Eifling KP and colleagues, Wilderness Environ Med 2024) exists. The AAFP 2025 summary confirms whole body ice water immersion is preferred. No primary text was reachable this round to confirm the stop temperature, so the 2024 stop temperature remains for the physician.
- Physician item, closeness to s44: confirmed too close, together with two more overlaps the first QA did not find.

### Required fix

1. Uniqueness (Q500_BRIEF rule 3). The case repeats three existing items:
   - SAMP `src/samps/s09/environmental.ts` "An older man found confused during a heat wave": an older adult in an upper floor apartment with no air conditioning during a heat wave, on an anticholinergic, an antipsychotic and a diuretic, hot dry skin. Its questions key the heat risk factors (age, no air conditioning, living alone, anticholinergic, antipsychotic, diuretic), effective cooling methods, the same differential (sepsis, NMS, anticholinergic toxicity, serotonin toxicity, thyroid storm, intracranial hemorrhage) and the features that separate NMS from serotonin toxicity. This case's q-history, q-exam and q-ddx (bd-h1, bd-h2, bd-p2, bd-p4) key the same content for an 82 year old woman on oxybutynin, quetiapine and furosemide.
   - Case `src/cases/batch03/exertional-heat-stroke.ts` "Collapse near the finish line": body bag ice water cooling with a rectal probe and CT held (strong), ice packs and CT first (partial), acetaminophen (unsafe), stopping at about 39°C with the probe left in, complications, and "Two more runners are on their way". This case's q-first, q-endpoint and the s-surge twist repeat those decisions and that twist.
   - SAMP `src/samps/s44/multiple-patients.ts` "Third day of a heat wave": an older woman found confused during a check of units without air conditioning on day 3 of a heat wave, on metoprolol, with more heat patients arriving and a surge plan key.
   - Required change: rebuild the case around a scenario and key decisions the bank lacks. At minimum, remove the "more patients from the heat event are arriving" escalation (s-surge, q-surge and its consequence nodes, bd-l1), drop the day 3 heat wave and building air conditioning failure framing, and replace the s09 risk factor and differential questions with decisions s09 does not key. The public health call about residents still at home (bd-l2) and safe disposition to a cooled setting are not in the bank and can stay. Keep environmental key features 1 and 2, at least 3 branching questions and an escalation on every path.

### Recommended, not required

- If the 2024 WMS update text can be read, cite it in place of the 2019 version and match the stop temperature to it.

## Sources checked this round

- Abraham NS et al. ACG and CAG 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8966740/, opened (statements 8, 9, 10, 14A and 18 as above).
- AAFP summary of the WMS 2024 heat illness update, https://www.aafp.org/afp/2025/1200/practice-guidelines-heat-illness, opened (ice water immersion preferred, heat stroke over 40°C with CNS dysfunction). Full text behind login.
- Remaining sources (ESO 2017, AHA 2024 CVT, SNNOOP10 2019, ACEP 2019, Hasbun 2001, ESETT 2019, MHCC and CPSI 2021, Stanley 2018, Gulati 2021, CANMAT 2023, Ontario MHA, PHIPA, Barkun 2019, Villanueva 2013, Blatchford 2000, Fourth UDMI 2018, HALT-IT 2020, WMS 2019, Epstein 2019, SSC 2021, Health Canada 2011, BC Coroners 2022) exist as cited and support the items they are attached to, with the caveats above. No invented title, year or URL found.
