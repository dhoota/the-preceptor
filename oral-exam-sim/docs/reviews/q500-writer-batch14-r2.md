# Q500 writer report, round 2: batch14

Revision of the four batch14 oral cases against `docs/reviews/q500-verify-batch14.md`. Every required fix is applied. All four cases keep `reviewed: false`, `version: 1` and `author: "Preceptor"`. Only files in `src/cases/batch14/` and this report were edited.

## Case list after revision

| id | title | topic | questions per path | longest path | rubric rows (history, physical, management, process) |
| --- | --- | --- | --- | --- | --- |
| rural-breathless-after-ulcer-bleed (new, replaces postpartum-pleuritic-chest-pain) | Breathless on a snowy Sunday | dvt-pe | 7 | 525 s | 7, 9, 10, 7 of 33. History 21%, management 30% |
| rural-child-wheeze-tiring | A boy who cannot finish a sentence | asthma-copd | 8 | 600 s | 6, 9, 11, 6 of 32 (unchanged) |
| return-visit-belly-pain-girl | Back the next day with a sore belly | abdominal-pain | 8 | 585 s | 7, 8, 8, 9 of 32 (unchanged) |
| neck-node-fever-return-visit (new, replaces preschooler-six-day-fever) | Still hot two days after the neck lump visit | pediatric-fever | 8 | 600 s | 9, 10, 11, 7 of 37. History 24%, management 30% |

`index.ts` now imports the two new files. The old files `postpartum-pleuritic-chest-pain.ts` and `preschooler-six-day-fever.ts` were deleted. No other file in the repository referred to the old ids.

## Required fixes and how each was done

### 1. postpartum-pleuritic-chest-pain: uniqueness (SAMP s05 and s28)

Rebuilt as a new case, `rural-breathless-after-ulcer-bleed`, still `priorityTopic: "dvt-pe"` with key features 1 to 7.

- Patient: a 67 year old retired farmer, 5 weeks after an admission for a bleeding duodenal ulcer (clipped, transfused, Helicobacter pylori treated, ASA stopped). Not pregnant, not postpartum, not breastfeeding.
- Setting: a rural hospital with no CT scanner, CT 2 hours away by road in snow, Sunday evening, pharmacy closed.
- Key feature 5 (testing tailored to context): no CT on site. The graded decision (q-testing) is a bedside 2 point compression ultrasound by the emergency physician, accepting a proximal DVT as confirmation of VTE, rather than a night transfer for CT. Partial: start apixaban and transfer tonight for CT. Unsafe: blame a rebleed, hold anticoagulation and book CT for Tuesday.
- Key feature 6 (anticoagulant that fits the patient): a recent treated GI bleed. The graded decision (q-drug, critical) is to anticoagulate anyway and choose apixaban over rivaroxaban for its lower bleeding rate, with no IVC filter. Partial: rivaroxaban (approved, inferior choice here, ruling C1). Unsafe: hold anticoagulation and request a filter.
- Escalation on every path: the gastroenterologist who treated the ulcer asks for a filter and 3 months off anticoagulation (q-consult, communication and leadership).
- Key feature 7: home treatment judged on room air saturation, heart rate, blood pressure, troponin, right ventricle, pain control and bleeding status against the BC hospitalization criteria, with sPESI in the model answer.
- Kept from the old case, as the verifier allowed: skipping the D-dimer at a likely Wells score, leg ultrasound before CT, outpatient risk stratification. The drug cost thread was replaced by a pharmacy access problem (starter supply on a Sunday).
- Uniqueness check: the catalogue `scratchpad/q500/catalog/dvt-pe.md` and every VTE SAMP in s04, s05, s07, s08, s17, s25, s28, s30, s31, s33, s50 and s51 were read, plus the three dvt-pe oral cases. No item has a hospital without CT, and no item has VTE after a recent GI bleed. The closest items are s08 "Leg swelling with poor kidney function" (contrast allergy and ultrasound first, but CKD stage 4 at a centre with CT), s33 "Calf swelling late in the evening" (community hospital with no ultrasound overnight, a DVT kept on empiric treatment) and s33 "Leg swelling after a stroke" (filter because anticoagulation is truly contraindicated). This case teaches the converse of the last one: a treated bleed is not a contraindication, so no filter. I also checked gi-bleed SAMPs and batch15 `weak-and-pale-after-a-stent`: none start anticoagulation for new VTE after a bleed.
- Numbers: Wells 3 (signs of DVT) + 3 (PE most likely) + 1.5 (heart rate 104) = 7.5, PE likely (BC threshold 4.5). The admission ended 5 weeks ago, so no immobilization point. Cockcroft Gault creatinine clearance (140 minus 67) x 86 x 1.23 / 92 = 84 mL/minute, so no apixaban adjustment. sPESI 0. Weight 86 kg = 190 lb.

Recommended item (s-ct acknowledging that the patient was leaving): no longer applies, since the old nodes are gone. The unsafe testing path in the new case has its own consequence node (s-reconsider) that fits that choice.

### 2. rural-child-wheeze-tiring: c-nrb label

`q-failure`, `c-nrb` changed from `partial` to `unsafe` (ruling C1, delay of time critical care). Feedback unchanged.

### 3. rural-child-wheeze-tiring: chest X-ray timeline

Option (b) taken. The `cxr` finding ("Chest X-ray at 1 hour") is removed and the last sentence of `s-hour1` ("The chest X-ray shows hyperinflation only.") is deleted. The first film is now the 16:45 portable film. q-severity and as-a3 already say "chest X-ray or ultrasound if he worsens or fails to improve", which now fits. I also added one model answer line to q-worse: new high fever and air bronchograms that move with breathing favour pneumonia over a mucus plug with collapse. This is in the model answer only, not in a rubric item, so it needs no new source.

Optional suggestion on `c-wait` in q-next (partial or unsafe): not changed. The verifier called partial defensible.

### 4. return-visit-belly-pain-girl: c-cefazolin label

`q-sepsis` choice relabelled `unsafe`, and its id renamed from `c-cefazolin` to `c-wait-surgeon` (verifier recommendation, plainly correct). Feedback unchanged.

Not done: the optional pyuria source (Scott 1983). The case already has 6 sources, the maximum. Also not done: the optional re-sourcing of ap-p1 and ap-h4. I found no verified source among the six that supports them better.

### 5. preschooler-six-day-fever: uniqueness (SAMP s14)

Rebuilt as `neck-node-fever-return-visit`.

- Patient and opening: a 5 year old girl, 24 kg, brought back on day 5 of fever, 2 days after this department diagnosed bacterial cervical lymphadenitis and started cephalexin. The node has not responded. Red eyes and cracked lips appeared since the first visit. She has 3 principal features, no rash and normal hands and feet, so this is incomplete Kawasaki disease that started with a node. It is not a preschool boy, not day 6, not walk-in clinic amoxicillin and not complete disease.
- q-exam is now about separating node first Kawasaki disease from bacterial adenitis, a deep neck abscess, cat scratch disease (a new kitten, scratches on the forearms, no axillary nodes) and Epstein Barr virus. Partial: treat it as antibiotic failure with a CT neck and IV antibiotics. Unsafe: switch to amoxicillin clavulanate and send home.
- q-tests is now neck ultrasound first (solid node cluster against abscess) and the CPS incomplete Kawasaki pathway: CRP 30 mg/L or more or ESR 40 or more, then 3 of 6 supplementary criteria. She has 4 (albumin 28 g/L, ALT 74 U/L, hemoglobin 104 g/L, 15 to 20 white cells per high power field). It does not re-key the s14 lists of five criteria, investigations or rash differential.
- q-treat: diagnosis by the supplementary criteria without echocardiography. Partial: IVIG and ASA but ibuprofen kept. Unsafe: wait for echocardiography next week.
- Kept from the old case and not tested by s14: weight based antipyretic dosing (240 mg acetaminophen by age is 10 mg/kg, 15 mg/kg is 360 mg), Kawasaki disease shock syndrome with sepsis and toxic shock cover (now with a neck infection as a toxic shock source), PICU transfer. The wrong amoxicillin allergy label was dropped, since it belonged to the s14 style story. A new vaccine point replaces it: her MMRV dose is due next week and must be deferred 11 months after IVIG.
- Not moved onto s46 "Five month old with a week of fever" (an infant with no node and no rash, keyed to treat, IVIG 14.4 g, live vaccine delay) or s46 "Fever, belly pain and red eyes in a school age boy" (MIS-C). The new case shares the 11 month live vaccine deferral with s46-27, but here it is one line inside a communication question, framed around a specific MMRV dose due next week.
- Uniqueness check: the catalogue `pediatric-fever.md` was read in full. No item in the bank has Kawasaki disease starting with a neck node, or a lymphadenitis return visit.

### 6. preschooler-six-day-fever: c-wait path bug

`c-wait` now goes to its own consequence node `s-wait-shock`: 30 minutes later she is more mottled and hard to rouse, heart rate 176/minute, blood pressure 64/34 mmHg, lactate 5.1 mmol/L. You call for help, give a 10 mL/kg bolus and reassess, draw a blood culture, give ceftriaxone and clindamycin and start epinephrine. `s-overload` is reached only from `c-big-fluid`, and it now also draws the blood culture before the antibiotics.

### 7. preschooler-six-day-fever: q-shock dose interval

The model answer now reads: "Blood culture, then within the hour ceftriaxone 50 mg/kg (1200 mg) IV, plus clindamycin 13 mg/kg (about 310 mg) IV every 8 hours, until sepsis and toxic shock are excluded." The 8 hourly interval applies to clindamycin only.

Optional suggestion (kd-c2 and kd-h4 sources, ruling C2): applied. The handover rubric item was removed (q-handover now tests kd-d1 and kd-l1), and the AHA 2017 statement, which I could not open, is no longer cited. Every rubric item now cites CPS Kawasaki 2026, Kanegaye 2013, CPS iGAS, CPS Caring for Kids or SSC pediatric 2020 for a point that source makes.

## Numbers recomputed for the rebuilt Kawasaki case (24 kg)

- IVIG 2 g/kg = 48 g.
- ASA 240 mg every 6 hours = 960 mg/day = 40 mg/kg/day, inside 30 to 50. Low dose 3 to 5 mg/kg once daily after fever.
- Acetaminophen 15 mg/kg = 360 mg. Home dose 240 mg = 10 mg/kg. Ibuprofen at home 200 mg = 8.3 mg/kg, stopped with ASA.
- Bolus 10 mL/kg = 240 mL. 30 mL/kg = 720 mL.
- Ceftriaxone 50 mg/kg = 1200 mg. Clindamycin 13 mg/kg = 312 mg, written as about 310 mg.
- Systolic 100 to 72 mmHg is a 28% fall, above the CPS shock syndrome threshold of 20%.
- 24 kg = 52.9 lb, written 53 lb.

## Sources

PE case (3 sources):
- British Columbia Guidelines and Protocols Advisory Committee. Venous thromboembolism. Diagnosis and management. 2024. Downloaded and read the PDF: https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf. Supports Wells for PE (likely at 4.5 or more), no D-dimer when likely, empiric anticoagulation as soon as possible, CTPA or V/Q within 24 hours, leg ultrasound positive means VTE confirmed, hospitalization criteria (submassive PE or markedly raised BNP or troponin, oxygen need, severe pain needing narcotics, active or high risk bleeding, CrCl under 15, no reliable follow up), bleeding risk factors (age over 70, anemia, antiplatelets, prior bleeding), apixaban 10 mg twice daily for 7 days then 5 mg twice daily, apixaban lower recurrence and bleeding than rivaroxaban (citing Dawwas), IVC filter only when anticoagulation cannot be given, at least 3 months, recent hospitalization as a common risk factor.
- Lee JH, Lee SH, Yun SJ. Comparison of 2-point and 3-point point-of-care ultrasound techniques for deep vein thrombosis at the emergency department. A meta-analysis. Medicine (Baltimore). 2019;98(22):e15791. PMID 31145304. Abstract read through PubMed E-utilities (2 point pooled sensitivity 0.91, specificity 0.98, better with attending emergency physicians). No URL added, because the PMC page shows a browser check.
- Dawwas GK, Leonard CE, Lewis JD, Cuker A. Ann Intern Med. 2022;175(1):20-28. PMID 34871048. Abstract read through PubMed E-utilities (18 618 matched pairs, lower recurrent VTE HR 0.77 and lower GI and intracranial bleeding HR 0.60 with apixaban). Also cited by the BC guideline as reference 12. No URL added.

Kawasaki case (5 sources):
- Chen A, Rozenblyum E, Dahdah N, et al. CPS. Kawasaki disease: Practical guidance on diagnosis and management. Paediatr Child Health 2026;31(5):550-555. Opened https://cps.ca/en/documents/position/kawasaki-disease (node of 1.5 cm or more, usually unilateral, some criteria found only on history, incomplete pathway with CRP 30 or ESR 40 and 3 of 6 supplementary criteria, IVIG 2 g/kg within 10 days lowers aneurysms to under 5%, do not delay for echocardiography, ASA 30 to 50 mg/kg/day or low dose, platelets over 80, avoid NSAIDs with ASA, shock syndrome definition and judicious fluid, live vaccines deferred 11 months, influenza vaccine on long term ASA).
- Kanegaye JT, Van Cott E, Tremoulet AH, et al. Lymph-node-first presentation of Kawasaki disease compared with bacterial cervical adenitis and typical Kawasaki disease. J Pediatr 2013;162(6):1259-1263. PMID 23305955, PMC3637400. Abstract read through PubMed E-utilities and the full text through the NCBI BioC open access API (one third admitted as bacterial adenitis or abscess, about 80% given antibiotics before admission, median age 4.2 years against 2.0 in typical disease, more visits before diagnosis, multiple solid nodes, comparable retropharyngeal edema, higher CRP and band count, lower white count). No URL added, because the PMC page shows a browser check.
- Weiss SL, et al. Surviving Sepsis Campaign pediatric guidelines. Pediatr Crit Care Med 2020. Unchanged from round 1, already verified by the first QA and the verifier.
- Moore DL, Allen UD, Mailman T. CPS. Invasive group A streptococcal disease. Unchanged, URL verified in round 1.
- CPS Caring for Kids. Fever and temperature taking. Unchanged, URL verified in round 1.

The asthma and appendicitis cases have no source changes.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch14`: no output.
- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- House style scan of the batch14 files: no em or en dashes, no semicolons in strings, no US spellings found, no personal names.
- Every path in each case was walked by script: 7 questions on every PE path, 8 on every other path. Longest paths 525, 600, 585 and 600 s. Three critical items per case.

## Uncertain, for the next reviewer or a physician

- PE case. Choosing apixaban over rivaroxaban for a patient with a recent GI bleed rests on observational data (Dawwas 2022), which the BC guideline describes as indirect evidence. The rivaroxaban choice is labelled partial, not unsafe, for that reason.
- PE case. The gastroenterologist asking for a filter is a scripted pushback. Some specialists would ask for a short delay after a high risk ulcer. Five weeks after endoscopic treatment, with Helicobacter pylori treated and no bleeding, the case treats anticoagulation as appropriate. The PPI continuation and the breath test are in model answers only, without a rubric item, because none of the three sources covers them.
- PE case. The stem is exactly 60 words, the limit.
- Kawasaki case. Incomplete Kawasaki disease is diagnosed from the CPS supplementary criteria. The CPS figure with the full algorithm is an image I could not read as text. The page text states the CRP or ESR step and the 3 of 6 rule, which is all the case uses. IVIG "over 10 to 12 hours" is standard practice and appears in a model answer only, since the CPS page does not state an infusion time.
- Kawasaki case. Ceftriaxone 50 mg/kg is kept as in round 1. Some centres use 100 mg/kg/day in undifferentiated shock.
