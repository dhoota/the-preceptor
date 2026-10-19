# Q500 fresh verification: batch14

Fresh independent review of the four oral cases in `src/cases/batch14/`. The first QA round edited these files in place, against REVIEW-RULES rule 1, so the current text is treated as a writer revision. This reviewer has not written or edited any batch14 file and made no edits. Every finding, node, choice, feedback line, model answer, rubric item and source was read on every path.

## Checks run

- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- House style scan of every string: no em dashes, no en dashes, no semicolons, no US spellings found, no personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` in all four.
- Uniqueness: case titles and stems across `src/cases`, and SAMP titles and stems in `src/samps` for each topic.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| postpartum-pleuritic-chest-pain | FAIL | Near duplicate of SAMP s05 "Pleuritic pain three weeks after delivery" |
| rural-child-wheeze-tiring | FAIL | One choice mislabelled under ruling C1, and an X-ray timeline that contradicts the escalation |
| return-visit-belly-pain-girl | FAIL | One choice mislabelled under ruling C1 |
| preschooler-six-day-fever | FAIL | Near duplicate of SAMP s14 "Six days of fever despite antibiotics", plus a path bug |

## 1. postpartum-pleuritic-chest-pain: FAIL

### Numbers recomputed (all correct)

- Wells for PE: signs of DVT 3, PE most likely 3, heart rate over 100 1.5, surgery in 4 weeks 1.5. Total 9, PE likely.
- sPESI 0 (heart rate 108 is under 110, saturation 94%, no cancer or cardiopulmonary disease, age under 80, systolic over 100). Hestia: no criterion met. She is postpartum, not pregnant.
- Dalteparin 200 units/kg x 88 kg = 17 600 units, rounded up to the 18 000 unit syringe. Rivaroxaban 15 mg twice daily is the correct starting dose. Overlap of at least 5 days and 2 INRs of 2 or more. End text (INR 2.4 and 2.6 on days 6 and 7) is consistent.
- U.S. MEC 2024 checked at https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm: combined hormonal contraception is category 4 under 21 days postpartum and category 3 for DVT or PE on therapeutic anticoagulation. pe-m5 teaching is correct.
- 8 questions on every path, longest path 615 s. Rubric rows 7, 9, 11, 7 of 34 (history 21%, management 32%).

### First QA changes and physician items

- Weight format, q-site model answer, pe-m5 teaching and pe-d1 source change: acceptable.
- Physician item (Hestia and sPESI applied to a confirmed proximal DVT with a likely PE): acceptable. The model answer states the limitation.
- Unsafe label on rivaroxaban while breastfeeding: acceptable. ASH 2018 recommendation 13 is a strong recommendation against DOACs in breastfeeding.

### Required fix

1. Uniqueness (Q500_BRIEF rule 3). SAMP `src/samps/s05/chest-pain.ts`, title "Pleuritic pain three weeks after delivery", is a 31 year old woman with right sided pleuritic chest pain 3 weeks after a caesarean delivery, breastfeeding, treated at home, whose keyed anticoagulant is LMWH or LMWH with warfarin, with a DOAC while breastfeeding marked unacceptable. This case is a 33 year old woman with right sided pleuritic chest pain 3 weeks after an emergency caesarean, breastfeeding, treated at home, keyed to LMWH with warfarin and no DOAC while breastfeeding. Scenario, setting and the central key decision (q-drug, pe-m3 critical) repeat the bank. Neither the writer nor the first QA found this SAMP. The first QA also missed SAMP `src/samps/s28/chest-pain.ts` "Pressure three weeks after delivery".
   - Required change: rebuild the scenario so that it is not a woman a few weeks after delivery and breastfeeding, and so that the graded anticoagulant decision is not "LMWH or warfarin, not a DOAC, because of breastfeeding". The leg ultrasound first, skip the D-dimer at Wells 9, outpatient risk stratification and drug cost parts can stay, since the s05 SAMP does not test them. Key feature 5 (testing tailored to context) and key feature 6 (anticoagulant that fits the patient) need a different context, for example a patient in whom the bank has no VTE item. Recheck every finding, choice, rubric item and source after the rebuild.

### Recommended, not required

- s-ct serves the unsafe c-ddimer-vq path, in which the candidate "sent her home". The node does not acknowledge that she was leaving. Consider "Before she leaves, the charge nurse points out the swollen left leg ...".

## 2. rural-child-wheeze-tiring: FAIL

### Numbers recomputed (all correct)

- PRAM on arrival: suprasternal 2, scalene 2, wheeze 2, air entry 2, saturation 2. Total 10, severe (8 to 12). Hour 1: air entry 1, total 9.
- At 28 kg: salbutamol 10 puffs or 5 mg nebulized, ipratropium 4 puffs, dexamethasone 0.6 mg/kg = 16.8 mg capped at 12 mg (TREKK bottom line, checked at https://trekk.ca/resources/bottom-line-recommendations-asthma/), magnesium 50 mg/kg = 1400 mg (maximum 2 g), ceftriaxone 50 mg/kg = 1400 mg (CPS range 50 to 100 mg/kg/day, maximum 4 g a day, checked at https://cps.ca/en/documents/position/pneumonia-management-children-youth, updated 14 March 2024).
- 8 questions on every path, longest path 600 s. Rubric rows 6, 9, 11, 6 of 32 (history 19%, management 34%).

### First QA changes and physician items

- Replacing the tension pneumothorax twist: correct. SAMP s02 airway-10 "Tiring on high flow" already holds that twist. A pediatric asthma oral with coexisting pneumonia is new to the bank.
- s-propofol path fix and the BiPAP or ventilator wording in later nodes: correct, every path now reads consistently.
- New source cps-cap: verified, it supports as-m5.
- Physician item (ceftriaxone 50 mg/kg): acceptable, inside the CPS range.
- Physician item (does the pneumonia escalation read well at the bedside): not acceptable as written. See fix 2.

### Required fixes

1. Choice label (SCORING-RULINGS C1). File `src/cases/batch14/rural-child-wheeze-tiring.ts`, node `q-failure`, choice `c-nrb`.
   - Current: `quality: "partial"` for "I kept him on the non rebreather and waited for the transport team."
   - Required: `quality: "unsafe"`. A drowsy child with a quiet chest, pH 7.24 and pCO2 58 mmHg left on a mask for a 75 minute wait is a delay of time critical care, which C1 labels unsafe. The feedback already says so ("A 75 minute wait is too long to watch a rising pCO2"). No feedback change needed.
2. Clinical timeline. The `cxr` finding ("Chest X-ray at 1 hour ... No focal consolidation") and `s-hour1` ("The chest X-ray shows hyperinflation only", phase 15:05) contradict `s-worse` and `s-missed` (phase 16:30 to 16:45), where the portable film shows right lower lobe consolidation with an effusion. A lobar consolidation with an effusion does not appear on a film 85 minutes after a clear one, and a new consolidation on positive pressure would first suggest mucus plugging and atelectasis.
   - Required change, one of: (a) make the 1 hour film show a subtle right basal opacity reported as possible atelectasis, and add to the q-worse strong feedback and as-a4 teaching that dynamic air bronchograms and fever favour pneumonia over plugging, or (b) remove the 1 hour chest X-ray (cxr finding and the last sentence of s-hour1) so the first film is the 16:45 one. TREKK does not require a routine film. Either way, keep q-severity and as-a3 consistent with the change.

### Recommended, not required

- c-wait in q-next (hourly salbutamol and calling in 2 hours for PRAM 9 after hour 1) is defensible as partial, but a physician may prefer unsafe under C1 for a rural child.

## 3. return-visit-belly-pain-girl: FAIL

### Numbers recomputed (all correct)

- Pediatric Appendicitis Score: hop pain 2, anorexia 1, fever 1, vomiting 1, right lower quadrant tenderness 2, white cells 1, neutrophils 1, migration 1. Total 10.
- At 36 kg: morphine 0.1 mg/kg = 3.6 mg, intranasal fentanyl 1.5 mcg/kg, ondansetron 0.15 mg/kg = 5.4 mg capped at 4 mg, 20 mL/kg = 720 mL. Ceftriaxone 50 to 75 mg/kg/day and metronidazole 30 to 40 mg/kg/day every 8 hours match the Solomkin 2010 pediatric table. Fluid totals: on the strong path 720 mL for dehydration plus 720 mL for shock = 40 mL/kg, matching q-dispo.
- 8 questions on every path, longest path 585 s. Rubric rows 7, 8, 8, 9 of 32 (history 22%, management 25%).
- Uniqueness: no pediatric appendicitis oral or SAMP in the bank. SAMP s19 "Girl with sudden lower abdominal pain" is ovarian torsion. Pass.

### First QA changes and physician items

- Softened opioid wording to the Poonai finding (no increase in perforation or abscess): correct.
- Antibiotic doses as Solomkin ranges: correct.
- Physician item (pyuria in appendicitis taught without a cited frequency): acceptable as standard teaching. See recommendation.

### Required fix

1. Choice label (SCORING-RULINGS C1). File `src/cases/batch14/return-visit-belly-pain-girl.ts`, node `q-sepsis`, choice `c-cefazolin`.
   - Current: `quality: "partial"` for "I asked the surgeon to choose the antibiotic when he arrives and kept the IV fluids running at maintenance."
   - Required: `quality: "unsafe"`. A hypotensive child with septic shock given maintenance fluid and no antibiotic until the surgeon arrives is a delay of time critical care. The feedback already says "Waiting for the surgeon delays both". Source: Weiss SL et al. Surviving Sepsis Campaign pediatric guidelines 2020 (antimicrobials within 1 hour in septic shock, 10 to 20 mL/kg boluses).

### Recommended, not required

- The choice id `c-cefazolin` no longer matches its label. Rename for clarity, for example `c-wait-surgeon`.
- ap-a3 (critical) includes "mild pyuria" but cites Bundy 2007, which does not address urinalysis. The bank already cites Scott JH, Amin M, Harty JI. Abnormal urinalysis in appendicitis. J Urol. 1983 (`src/samps/s19/abdominal-pain.ts`), which could carry the pyuria point if a sixth source is added.
- ap-p1 (feedback to the first clinic) and ap-h4 ("a return visit is a red flag") cite Bundy 2007, which covers neither. Consider a better supported source under ruling C2.

## 4. preschooler-six-day-fever: FAIL

### Numbers recomputed (all correct)

- At 15 kg: IVIG 2 g/kg = 30 g. ASA 160 mg every 6 hours = 640 mg/day = 42.7 mg/kg/day, inside 30 to 50. Home acetaminophen 160 mg = 10.7 mg/kg, against 15 mg/kg = 225 mg. Home ibuprofen 100 mg = 6.7 mg/kg. Amoxicillin 675 mg twice daily = 90 mg/kg/day. Bolus 10 mL/kg = 150 mL. Ceftriaxone 50 mg/kg = 750 mg. Clindamycin 13 mg/kg = about 200 mg.
- Systolic fall from 94 to 68 mmHg = 28%, meeting the CPS shock syndrome definition (20% or more, or poor perfusion).
- CPS 2026 statement checked at https://cps.ca/en/documents/position/kawasaki-disease (Chen A, Rozenblyum E, et al. Paediatr Child Health 31(5):550 to 555, posted 2 February 2026): criteria, IVIG within 10 days, both ASA approaches, platelets over 80 x 10^9/L, NSAID interaction, shock syndrome definition, influenza vaccine for patient and household over 6 months, live vaccines deferred 11 months. All statements in the case match.
- 8 questions on every path, longest path 600 s. Rubric rows 8, 9, 11, 8 of 36 (history 22%, management 31%).

### First QA changes and physician items

- c-wait-echo relabelled unsafe, c-kd feedback, q-family influenza wording, kd-p1 source, kd-m3 rewritten to cite CPS iGAS: all correct.
- Physician item (ceftriaxone 50 mg/kg and clindamycin 13 mg/kg every 8 hours not in a cited table): doses are standard and acceptable, but see fix 3 on how they are written.

### Required fixes

1. Uniqueness (Q500_BRIEF rule 3). SAMP `src/samps/s14/pediatric-fever.ts`, title "Six days of fever despite antibiotics", is a 3 year old boy with 6 days of fever after a walk-in clinic started amoxicillin, with all five principal features including a 2 cm node, 16 kg, 39.5°C. Its questions key the principal criteria, the treatment, the investigations (CRP, ESR, CBC, albumin, ALT, urinalysis for sterile pyuria, ECG, echo) and the differential (MIS-C, scarlet fever, measles, adenovirus, toxic shock, drug reaction). This case is a 3 year old boy, 15 kg, 39.6°C, 6 days of fever after walk-in clinic amoxicillin, all five features with a 2 cm node, and q-exam, q-tests and q-treat key the same content. The writer and the first QA both listed the bank's Kawasaki SAMPs and missed this one.
   - Required change: rebuild the patient and opening so the scenario is not a preschool boy on day 6 after walk-in clinic amoxicillin with complete disease, and so q-exam and q-tests do not re-key the s14 criteria, investigations and differential lists. The parts s14 does not test (weight based antipyretic dosing, a wrong drug allergy label, Kawasaki disease shock syndrome with sepsis and toxic shock cover, PICU transfer) can stay and carry more of the marks. Check SAMP s46 "Five month old with a week of fever" (incomplete disease in an infant) so the rebuild does not move onto that one instead.
2. Path bug. File `src/cases/batch14/preschooler-six-day-fever.ts`, node `s-overload`, reached from both `c-big-fluid` and `c-wait`.
   - Current text: "His liver edge is now 4 cm, there are fine crackles at both bases and his SpO2 has fallen to 91 percent. Your ultrasound shows reduced squeeze. You stop the fluid, start an epinephrine infusion and give ceftriaxone and clindamycin."
   - Problem: on the c-wait path no fluid was given, so "You stop the fluid" is false and the overload consequence does not follow from the choice.
   - Required change: give c-wait its own consequence node (for example, 30 minutes later he is more mottled, systolic 60 mmHg, lactate rising, and you give a 10 mL/kg bolus with reassessment, start epinephrine and give ceftriaxone and clindamycin), and point `c-wait.next` to it. Keep s-overload for c-big-fluid only.
3. Dose interval wording. Node `q-shock`, model answer line 5.
   - Current: "Blood culture, then within the hour ceftriaxone 50 mg/kg (750 mg) and clindamycin 13 mg/kg (about 200 mg) IV every 8 hours, until sepsis and toxic shock are excluded."
   - Required: make clear the 8 hour interval is for clindamycin only, for example "Blood culture, then within the hour ceftriaxone 50 mg/kg (750 mg) IV, plus clindamycin 13 mg/kg (about 200 mg) IV every 8 hours, until sepsis and toxic shock are excluded." As written it reads as ceftriaxone every 8 hours.

### Recommended, not required

- kd-c2 (handover) and kd-h4 (timelines and anchoring) cite SSC pediatric 2020 and AHA 2017, which do not address those points (ruling C2).

## Sources checked this round

- U.S. MEC 2024 appendix, https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm, opened (CHC categories above).
- TREKK bottom line recommendations, asthma, https://trekk.ca/resources/bottom-line-recommendations-asthma/, opened (salbutamol by weight, ipratropium 4 puffs, dexamethasone 0.6 mg/kg maximum 12 mg, magnesium after the first hour in persistent moderate to severe distress). The algorithm PDF URL in the case downloads (150 KB, TREKK, February 2024) but its text is not machine readable here.
- CPS pneumonia practice point, https://cps.ca/en/documents/position/pneumonia-management-children-youth, opened (third generation cephalosporin for respiratory failure or septic shock, ceftriaxone 50 to 100 mg/kg/day, maximum 4 g).
- CPS Kawasaki disease 2026, https://cps.ca/en/documents/position/kawasaki-disease, opened.
- BC VTE guideline PDF URL downloads (562 KB, correct document). Text not machine readable here. The first QA read it, and nothing in this round contradicts their reading.
- Remaining sources (Hestia, ASH 2018, CMAJ 2012, CPS asthma 2021, PRAM 2008, GINA 2024, WSES 2020, ACR 2019, Bundy 2007, Poonai 2014, SSC pediatric 2020, Solomkin 2010, AHA 2017, CPS iGAS, CPS Caring for Kids) exist as cited. No invented title, year or URL found.
