# Q500 fresh verification, round 2: batch14

This is a fresh independent review of the four oral cases in `src/cases/batch14/` after the round 2 writer revision (`docs/reviews/q500-writer-batch14-r2.md`). The reviewer had not written, edited or reviewed batch14 before this review and edited no case, source or shared file. Changes were read with `git diff ddfb2aa HEAD -- oral-exam-sim/src/cases/batch14/`, against the tree the previous verdict reviewed. Every finding, node, choice, feedback line, model answer, rubric item and source in all four cases was read on every path.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch14`: no output.
- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- House style scan of every string literal: no em dashes, no en dashes and no semicolons. No US spellings and no personal names were found. Every case has `author: "Preceptor"`, `reviewed: false` and `version: 1`.
- Stem word counts: PE 60 (at the limit), asthma 42, appendicitis 39, Kawasaki 59.
- Titles (`grep -rh 'title:' src/cases src/samps`): all four are neutral and unique. The two duplicate titles in the bank are not in batch14.
- Uniqueness: catalogues `dvt-pe.md`, `pediatric-fever.md`, `asthma-copd.md`, `abdominal-pain.md`, `gi-bleed.md`, `infectious-diseases.md` and `shock.md`. Current Q500 files were checked with grep in `src/samps/s5*`, `s6*`, `s70` and `src/cases/batch11` to `batch15`.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| rural-breathless-after-ulcer-bleed | FAIL | A path double-doses apixaban, and a critical item makes a non-safety drug preference critical |
| rural-child-wheeze-tiring | PASS | Both required fixes are applied correctly |
| return-visit-belly-pain-girl | PASS | The required fix is applied correctly |
| neck-node-fever-return-visit | FAIL | Rebuild re-keys SAMP s46 pediatric-fever-27 (q2 and q4) and repeats the appendicitis case's "how was this missed" item in the same batch |

## Previous required fixes

| Previous fix | Status |
|---|---|
| PE case uniqueness (s05, s28) | Applied. The case was rebuilt as a 67 year old man with VTE 5 weeks after a treated duodenal ulcer bleed, at a rural hospital with no CT. Nothing in the bank has VTE after a recent GI bleed or a no-CT rural confirmation by bedside leg ultrasound. The new case has its own faults (see section 1). |
| Asthma c-nrb to unsafe | Applied correctly. |
| Asthma X-ray timeline | Applied correctly with option (b). The `cxr` finding and the s-hour1 sentence are gone. The first film is now the 16:45 portable film. The added q-worse model answer line (fever and dynamic air bronchograms favour pneumonia over plugging) is accurate. |
| Appendicitis c-cefazolin to unsafe | Applied correctly and renamed `c-wait-surgeon`. The rename is a good unrequested change. |
| Kawasaki uniqueness (s14) | Applied against s14. The rebuild no longer re-keys the s14 principal criteria, investigations or rash differential. It has moved onto SAMP s46 pediatric-fever-27, which the previous verdict warned against (see section 4). |
| Kawasaki c-wait path bug | Applied correctly. `c-wait` goes to its own node `s-wait-shock`, and `s-overload` is reached only from `c-big-fluid`. |
| Kawasaki q-shock dose interval | Applied correctly. Ceftriaxone 50 mg/kg = 1200 mg, and clindamycin 13 mg/kg = 312 mg every 8 hours. |

## Unrequested writer changes (REVIEW-RULES rule 4)

- Kawasaki: the handover rubric item and the AHA 2017 source were removed, and q-handover now tests kd-d1 and kd-l1. Acceptable on the merits. It answers the earlier C2 recommendation.
- Kawasaki: the wrong amoxicillin allergy label was replaced by an MMRV dose due next week. Not acceptable. It repeats an s46 key (section 4, fix 1).
- PE: the drug cost thread was replaced by a Sunday pharmacy access problem. Acceptable.
- Old files `postpartum-pleuritic-chest-pain.ts` and `preschooler-six-day-fever.ts` were deleted and `index.ts` was updated. Correct. No other file refers to the old ids.

## 1. rural-breathless-after-ulcer-bleed: FAIL

### Numbers recomputed (all correct)

- Wells for PE: signs of DVT 3, PE most likely 3, heart rate 104 scores 1.5. Total 7.5, PE likely (the BC threshold is 4.5 or more). The admission ended 5 weeks ago, so it earns no immobilization or surgery point.
- Cockcroft Gault: (140 minus 67) x 86 x 1.23 / 92 = 83.9 mL/minute. No apixaban change is needed.
- sPESI 0: age 67, no cancer, no chronic cardiopulmonary disease, heart rate under 110, systolic 134, saturation 93% then 94%.
- Weight: 86 kg = 190 lb.
- Clock: 18:00, 18:40, 19:00, 19:20, 19:30, 20:00, 21:00. It is consistent.
- Rubric rows: 7, 9, 10, 7 of 33 (history 21%, management 30%). Five competencies and three critical items. Seven questions on every path.

### Sources checked

- BC Guidelines VTE 2024. The PDF was downloaded and its text extracted. It supports these points:
  - PE likely at a Wells score of 4.5 or more.
  - Empiric anticoagulation as soon as possible, with CTPA or V/Q within 24 hours.
  - Bilateral leg ultrasound, and a positive ultrasound confirms VTE.
  - The hospitalization criteria as written in pe-a4.
  - The bleeding risk factors.
  - "Apixaban or rivaroxaban are the first-line anticoagulants ... Indirect evidence suggests ... apixaban ... lower rate of recurrent VTE and lower rate of bleeding" (reference 12 is Dawwas).
  - An IVC filter only when anticoagulation cannot be given.
- Lee JH, Lee SH, Yun SJ. Medicine (Baltimore) 2019, 98(22):e15791, PMID 31145304. The abstract was read. Pooled 2 point sensitivity is 0.91 and specificity 0.98. Attending and trained performers did better.
- Dawwas GK et al. Ann Intern Med 2022, 175(1):20 to 28, PMID 34871048. The abstract was read. 18 618 matched pairs (37 236 patients). Recurrent VTE HR 0.77 and GI or intracranial bleeding HR 0.60. The citation title is exact.

### Required fixes

1. Path bug: a second "first dose" on the c-transfer path. File `rural-breathless-after-ulcer-bleed.ts`, node `s-specialist`.
   - Current: "... She advises apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, with pantoprazole continued and no filter. You give the first dose."
   - Problem: on the path q-testing `c-transfer` ("I gave a first dose of apixaban ...") then q-drug `c-rivaroxaban` or `c-filter`, the patient already had apixaban 10 mg at about 18:30. "You give the first dose" at 19:20 gives a second 10 mg dose 50 minutes after the first.
   - Required change: replace the last sentence with wording that is true on every path. For example: "You follow her advice. If he has not yet had apixaban, you give the first dose now."
2. Critical item makes a drug preference critical (CASE_SPEC: critical items are "truly critical, safety defining actions". Ruling C1: an inferior drug still in use is partial). Rubric item `pe-m3`.
   - Current text: "Starts apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, and does not withhold anticoagulation or request a filter for a treated ulcer." `critical: true`.
   - Problem: the item's own teaching says apixaban and rivaroxaban are both first line, and the case labels rivaroxaban partial. A candidate who correctly anticoagulates with rivaroxaban 15 mg twice daily misses a critical item. The apixaban preference is already graded separately by `pe-m4`, so the drug choice is double counted.
   - Required change: make pe-m3 the safety decision. For example: "Starts full dose therapeutic anticoagulation now, preferably apixaban 10 mg twice daily for 7 days then 5 mg twice daily, and does not withhold anticoagulation or request a filter for a treated ulcer." Leave the apixaban over rivaroxaban reasoning to pe-m4 (non-critical). Keep the source `bc-vte`.

### Recommended, not required

- The end node says "his breath test confirms cure". Pantoprazole is continued throughout, and a PPI causes false negative urea breath tests unless held for about 2 weeks. Testing also needs at least 4 weeks after the end of eradication therapy. Either drop "and his breath test confirms cure" or say when it was done and how the PPI was managed.
- The `c-pocus` feedback says 2 point ultrasound "done by trained emergency physicians had a sensitivity of about 91 percent". In Lee 2019 the 0.91 is the overall pooled figure. Training and attending performers were linked to higher accuracy in meta-regression. Reword to "In pooled studies, 2 point ultrasound in the emergency department had a sensitivity of about 91 percent ... and did best in the hands of trained attending physicians."

## 2. rural-child-wheeze-tiring: PASS

- The previous numbers were rechecked:
  - PRAM 10, then 9 after the first hour (suprasternal 0 or 2, scalene 0 or 2, wheeze 0 to 3, air entry 0 to 3, saturation 0 to 2).
  - Salbutamol 10 puffs at 20 kg or more, ipratropium 4 puffs, and dexamethasone 0.6 mg/kg capped at 12 mg (TREKK bottom line, reopened at https://trekk.ca/resources/bottom-line-recommendations-asthma/).
  - Magnesium 50 mg/kg = 1400 mg. Ceftriaxone 50 mg/kg = 1400 mg.
- Every path reads correctly after the X-ray removal. Clock: 14:00, 14:25, 15:05, 15:30, 15:45, 16:00, 16:30, 16:45.
- c-nrb is now unsafe, and its s-intubate consequence fits.

### Recommended, not required

- q-first model answer and as-m1 give nebulized ipratropium 250 mcg for a 28 kg child. Many references give 500 mcg at 20 kg or more (NAEPP range 250 to 500 mcg). Consider "250 to 500 mcg" under ruling A16. The TREKK page states only the 4 puff MDI dose.
- as-c2 (handover) and as-l2 (potassium and glucose) cite the CPS 2021 asthma statement. Confirm that it covers those points, or move them to a source that does (ruling C2).

## 3. return-visit-belly-pain-girl: PASS

- The PAS of 10, the 36 kg doses (morphine 3.6 mg, ondansetron capped at 4 mg, 720 mL boluses) and the Solomkin pediatric ranges were rechecked. All are correct.
- The c-wait-surgeon path reads correctly through s-delay to q-dispo.

### Recommended, not required

- ap-a3 (critical) includes "mild pyuria" but cites Bundy 2007, which does not cover urinalysis (ruling C2). The pyuria from adjacent inflammation point is also already keyed in signed abdominal-pain-24 q1 (s19, adult diverticulitis). The simplest fix is to drop "or mild pyuria" from the ap-a3 text and keep the point in the model answer and the c-uti feedback.
- ap-h4 and ap-p1 still cite Bundy for points Bundy does not make, as noted in round 1.
- Note for the s62 writer, not a batch14 fix: SAMP `src/samps/s62/abdominal-pain.ts` abdominal-pain-49 was drafted after this case. It has a child with appendicitis misdiagnosed as a UTI at a walk-in clinic, on cephalexin, returning worse, keyed to ultrasound first and a surgeon now. This case was written first, so the overlap should be resolved in s62.

## 4. neck-node-fever-return-visit: FAIL

### Numbers recomputed (all correct)

- At 24 kg:
  - IVIG 2 g/kg = 48 g.
  - ASA 240 mg every 6 hours = 960 mg/day = 40 mg/kg/day.
  - Acetaminophen 15 mg/kg = 360 mg. The home dose of 240 mg is 10 mg/kg, and 7.5 mL is the box dose for ages 4 to 5.
  - Ibuprofen 200 mg = 8.3 mg/kg.
  - Cephalexin 2 g/day = 83 mg/kg/day.
  - Bolus 10 mL/kg = 240 mL. Ceftriaxone 1200 mg. Clindamycin 312 mg.
  - Weight 53 lb.
- Systolic fall from 100 to 72 mmHg = 28%, above the CPS shock syndrome threshold of 20%.
- Incomplete criteria: 3 principal features (node of 1.5 cm or more, conjunctival injection, oral changes). CRP 168 and ESR 82. Supplementary criteria: albumin 28 g/L, ALT 74 U/L, hemoglobin 104 g/L and 15 to 20 white cells per high power field. That is 4. White cells 14.2 x 10^9/L and platelets 362 x 10^9/L on day 5 do not count.
- Rubric rows: 9, 10, 11, 7 of 37 (history 24%, management 30%). Three critical items. Eight questions on every path.

### Sources checked

- CPS Kawasaki 2026, https://cps.ca/en/documents/position/kawasaki-disease, opened. Every threshold above matches the page, including these points:
  - "some criteria may only be elicited on history"
  - Judicious fluid in KDSS
  - Live vaccines deferred for 11 months
  - Influenza vaccine for the child and for household members over 6 months
- Kanegaye JT et al. J Pediatr 2013, 162(6):1259 to 1263, PMID 23305955. The abstract was read and supports kd-a1, kd-a2, kd-a5 and kd-h3:
  - 33% were admitted as adenitis or abscess.
  - The children were older and had more encounters.
  - Smaller nodes, lower white count and higher band count and CRP were independent predictors.
  - Multiple enlarged solid nodes were seen, with comparable retropharyngeal edema.

### Required fixes

1. Uniqueness (Q500_BRIEF rule 3, and the previous verdict's warning about s46). SAMP `src/samps/s46/pediatric-fever.ts` pediatric-fever-27 "Five month old with a week of fever" keys three things:
   - q2: CRP 30 or ESR 40 met, 4 supplemental criteria (albumin 28 g/L, raised ALT, white cells, 15 white cells per high power field in the urine), so treat with IVIG and ASA. The distractors are deferring echocardiography or a cardiology clinic.
   - q3: IVIG 2 g/kg.
   - q4: delay measles and varicella vaccines 11 months.

   This case grades the same chain:
   - q-tests and kd-a3: the CRP and ESR thresholds, then 3 of 6 supplementary criteria.
   - s-results: albumin 28 g/L and 15 to 20 white cells per high power field.
   - q-treat and kd-m1: 4 supplementary criteria, so IVIG 2 g/kg. The unsafe c-echo-first books echocardiography next week.
   - kd-h4 and kd-c1: the MMRV due next week, deferred 11 months.

   Required changes:
   - (a) Vaccines: remove the vaccine deferral as a graded point. Delete or replace `kd-h4` with a history item the bank does not key, and remove the vaccine part of `kd-c1` and of the q-family prompt and model answer. Remove "Her 4 to 6 year vaccines, including MMRV, are booked ... next week" from the `pmh` finding, or keep it as background only.
   - (b) Diagnosis: do not grade the incomplete pathway as the s46 decision. Keep the laboratory results in `s-results` and state the pathway in one model answer line. Reword `kd-a3` and refocus q-tests on what is new in this case, for example the node: neck ultrasound before CT, solid cluster against abscess, retropharyngeal edema as a CT pitfall, and the Kanegaye discriminators (band count, CRP, lower white count). Take care not to duplicate `kd-a1` and `kd-a5`.
   - (c) Unsafe choice: replace the unsafe `c-echo-first` choice and the `s-echo` node with a wrong turn specific to node first disease that s46 does not hold. For example: "I kept her on IV antibiotics for adenitis and planned to consider Kawasaki disease if she was no better in 48 hours." Rewrite the feedback around the delay to IVIG.
   - Recheck the per-path question count and the rubric row percentages after the change.
2. Repeated angle within the batch (Q500_BRIEF rule 3, "do not repeat an angle within your own batch"). The Kawasaki q-family prompt asks "why this was missed here 2 days ago", and `kd-p1` grades "Answers honestly about the first visit without blaming colleagues, and feeds the case back to the department". The appendicitis case in the same batch has q-father ("how this was missed yesterday") and `ap-p1` ("Answers the father honestly without blaming the clinic ... gives non judgmental feedback to the first clinic"). Both are a child returning after a missed diagnosis, with the same graded professionalism behaviour.
   - Required change: in the Kawasaki case, remove the "why was this missed" part of the q-family prompt and model answer. Replace `kd-p1` with a different process or professionalism item that has a source supporting it, for example consent for a blood product before IVIG, or explaining coronary risk and the echocardiography follow up plan. The appendicitis case keeps its item.

### Recommended, not required

- Both batch14 ids now contain "return-visit". Consider a more distinct Kawasaki id, for example `neck-node-fever-day-five`.
- The `neck` finding calls the nodes "matted". Kanegaye describes multiple enlarged discrete solid nodes, and matting suggests bacterial or mycobacterial disease. Consider "a group of several firm, rubbery, tender nodes".
- On the `c-abscess` path she is already on IV cefazolin and clindamycin when shock starts. The q-shock strong label ("drew a blood culture and gave ceftriaxone and clindamycin") still reads acceptably as a change of regimen.
- `kd-m3` text includes "considers vancomycin where MRSA is common", which the CPS iGAS statement does not address. Move that phrase to the model answer only.
- `kd-p1` cites Kanegaye for disclosure and feedback, which the paper does not cover. This lapses if fix 2 is made.

## Writer's uncertain items, with judgement

1. PE: rivaroxaban labelled partial on indirect evidence. Agreed. Partial fits ruling C1, and the BC guideline says the choice "depends on practical and pharmacological considerations". This judgement is why pe-m3 must not make apixaban critical (section 1, fix 2).
2. PE: the gastroenterologist's request for a filter, and the PPI and breath test points in model answers only. The pushback is plausible and the teaching is right. Five weeks after endoscopic therapy with no bleeding, anticoagulation is appropriate, and BC limits filters to patients who cannot be anticoagulated. See the breath test recommendation in section 1.
3. PE: the stem is 60 words. Confirmed at exactly 60, within the limit.
4. Kawasaki: incomplete disease diagnosed by the CPS supplementary criteria, and IVIG over 10 to 12 hours in a model answer only. Clinically correct. The CPS page text gives the CRP or ESR step and the 3 of 6 rule exactly as the case uses them. The problem is uniqueness, not accuracy (section 4, fix 1).
5. Kawasaki: ceftriaxone 50 mg/kg in shock. Acceptable. Some centres use 100 mg/kg/day (or 50 mg/kg every 12 hours) in undifferentiated pediatric septic shock. Consider "50 mg/kg (maximum 2 g), or 100 mg/kg if meningitis is possible" in the model answer, under ruling A16.

## Sources checked this round

- BC Guidelines VTE 2024 PDF, https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf, downloaded and text extracted.
- CPS Kawasaki disease 2026, https://cps.ca/en/documents/position/kawasaki-disease, opened.
- TREKK bottom line recommendations, asthma, https://trekk.ca/resources/bottom-line-recommendations-asthma/, opened.
- PubMed abstracts through E-utilities: PMID 31145304 (Lee 2019), 34871048 (Dawwas 2022), 23305955 (Kanegaye 2013).
- The remaining sources were verified in round 1 and are unchanged: CPS asthma 2021, PRAM 2008, CPS pneumonia, GINA 2024, WSES 2020, ACR 2019, Bundy 2007, Poonai 2014, SSC pediatric 2020, Solomkin 2010, CPS iGAS and CPS Caring for Kids. No invented title, year or URL was found.
