# Oral realignment. Batch 07

This batch now follows the CFPC structured oral format, as set out in `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch07/` were changed. Every case is now `reviewed: false`, `version: 2` and `durationMinutes: 12`. Case ids, node ids, the branching, choice quality and scripted feedback are unchanged. No existing rubric item was removed. Every `critical` flag was kept. All patient names were removed. They appeared only in the old stems, except in the methanol case (see below).

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch07` prints nothing.
- `REALIGN=batch07 CASE_BATCH=batch07 npx vitest run tests/cases.test.ts` gives 83 passed and 10 failed. All 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.

## Method notes

- Stems open "You are working in the emergency department of a ... when the following patient arrives." Each keeps the setting the case depends on, such as no ECMO, no dialysis, the distance to the tertiary centre, or an obstetrician who is busy in the OR.
- Card values were copied from the old stem and findings. None were changed. Where the case gave no value, the card says "Not recorded". Weight in pounds is kg times 2.2046, rounded.
- The old stem's setting detail (bed count, ICU, blood bank, equipment, on call staff) moved to a new `resources` finding in every case, so nothing the case relies on is lost.
- Triage glucose, GCS, CTAS and the nurse or paramedic quote moved into a history finding.
- Question `seconds` did not need scaling. Every longest path was already at or under 720 seconds.
- Row assignment: legacy `approach` items went to history or physical, `data` and `diagnosis` to physical, and `plan` to management or process. Communication, leadership, professionalism and disposition items went to process.
- New rubric items are linked to existing questions through the question `rubric` lists. Where a model answer had room (fewer than 7 points), one history line was added. No choice, feedback or `next` was changed.
- Sources were checked through Crossref (api.crossref.org), PubMed E-utilities, the issuing bodies' own pages and web search.

---

## ruptured-ectopic-pregnancy. Found on the washroom floor at work

**Stem.** 129 words before, 52 after. Community hospital. Paramedics bring in a 27 year old woman whom a coworker found on the floor of the office washroom. She fainted again when she stood up. The on call gynecologist is at home, 25 minutes away.

**Card.** Temperature 36.2°C. Pulse 128/minute. Resp. 24/minute. BP 82/50 mmHg. O2 sat 98% on room air. Weight: Not recorded. Medications: No anticoagulants. Other medications not recorded. Allergies: No allergies.

**History moved.** New `paramedic`: found on the washroom floor, fainted again on standing, glucose 5.6 mmol/L, CTAS 1, and the paramedic quote (lower belly and right shoulder pain, 500 mL saline, period a bit late, sure she is not pregnant). New `resources`: 180 bed hospital, 4 units of O negative red cells, massive hemorrhage protocol, gynecologist 25 minutes away. The existing `history` and `partner` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 7 |
| Physical and differential | 5 | 7 |
| Management | 25 | 15 |
| Process | 0 | 10 |
| Total | 32 | 39 |

Added: ec-h1 menstrual and pregnancy history (2), ec-h2 the pain, shoulder tip pain and faints (2), ec-h3 ectopic risk factors (2), ec-h4 anticoagulants, allergies and last meal before the OR (1). ec-a1 moved to physical. Moved to process: ec-c1, ec-c2, ec-c3, ec-p1, ec-l1, ec-l2, ec-d1.

**Longest path seconds.** 600 before, 600 after.

**Citations.**
- `acep-us` replaced. Before: "American College of Emergency Physicians. Ultrasound guidelines: emergency, point of care and clinical ultrasound guidelines in medicine." It had no year. After: "American College of Emergency Physicians. Ultrasound Guidelines: Emergency, Point-of-Care, and Clinical Ultrasound Guidelines in Medicine. Annals of Emergency Medicine. 2023." Verified at https://pubmed.ncbi.nlm.nih.gov/37596025/ (Ann Emerg Med 2023, volume 82, issue 3).
- `cbs-guide` replaced. Before: "Canadian Blood Services. Clinical Guide to Transfusion. Chapter on massive hemorrhage and emergency transfusion." It had no author or year. After: "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clarke G, Chargé S, editors. Clinical Guide to Transfusion. Chapter 11. Canadian Blood Services. 2021." This is the chapter's own suggested citation, dated September 7, 2021, at https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion. The chapter covers O negative red cells for females of childbearing age, fibrinogen, calcium and balanced ratios.
- No change, verified: SOGC No. 414 (Po 2021) https://doi.org/10.1016/j.jogc.2021.01.002. ACOG PB 193 (2018) https://doi.org/10.1097/AOG.0000000000002560. SOGC No. 448 (Fung-Kee-Fung 2024) https://doi.org/10.1016/j.jogc.2024.102449. ATLS 10th edition, 2018, American College of Surgeons (Open Library record).

**Needs physician decision.** Weight is not recorded anywhere in the case, but the airway model answer gives ketamine and rocuronium in mg/kg.

---

## postpartum-hemorrhage. Bleeding after a home birth

**Stem.** 148 words before, 57 after. Community hospital. A 34 year old woman arrives by ambulance with her midwife, bleeding heavily 55 minutes after a home birth. The only obstetrician on call is in a cesarean section. No interventional radiology.

**Card.** Temperature 37.6°C. Pulse 132/minute. Resp. 26/minute. BP 78/44 mmHg. O2 sat 97% on room air. Weight: Not recorded. Medications: Salbutamol a few times a month. Iron supplements. Allergies: No allergies.

**History moved.** New `hpi` ("Midwife's report"): third baby born at home with a registered midwife 55 minutes ago, placenta at 25 minutes, CTAS 1, and the midwife quote (1200 mL, oxytocin 10 units IM, uterine massage, baby with her partner). New `resources`: 250 bed hospital, labour and delivery upstairs, massive hemorrhage protocol, fibrinogen concentrate, tamponade balloon, no interventional radiology. The existing `history` (asthma, medications, allergies) and `baby` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 7 |
| Physical and differential | 3 | 4 |
| Management | 25 | 17 |
| Process | 0 | 9 |
| Total | 30 | 37 |

Added: pph-h1 birth and third stage from the midwife (2), pph-h2 asthma and blood pressure before the second line uterotonic (2), pph-h3 risk factors, past history, medications and allergies (2), pph-h4 the newborn's condition and carer (1). pph-a1 moved to physical. pph-r4 (legacy data) moved to management. Moved to process: pph-c1, pph-c2, pph-p1, pph-l1, pph-l2, pph-d1, pph-d2.

**Longest path seconds.** 570 before, 570 after.

**Citations.**
- `cbs-guide` replaced. Before: "Canadian Blood Services. Clinical Guide to Transfusion." After: the Trudeau 2021 chapter 11 citation above, with the same URL.
- No change, verified: SOGC No. 431 (Robinson 2022) https://doi.org/10.1016/j.jogc.2022.10.002. WOMAN trial, Lancet 2017 https://doi.org/10.1016/S0140-6736(17)30638-4.

**Needs physician decision.**
- pph-d2 (VTE prophylaxis, iron and documentation of totals) cites `cbs-guide`. Chapter 11 does not cover VTE prophylaxis or iron. SOGC No. 431 may be the better source. I did not change it, because `cbs-guide` would then be cited by nothing.
- Management is 46 percent of the points, close to the 50 percent cap.

---

## eclampsia. Seizure in a pharmacy line

**Stem.** 134 words before, 51 after. Community hospital. Paramedics bring in a 23 year old woman, 34 weeks pregnant with her first baby, after a generalized seizure at a pharmacy. The nearest tertiary centre with a level 3 NICU is 110 km away.

**Card.** Temperature 37.0°C. Pulse 108/minute. Resp. 20/minute. BP 178/114 mmHg. O2 sat 93% on room air. Weight: Not recorded. Medications: Prenatal vitamins. Allergies: Not recorded.

**History moved.** New `hpi`: 34 weeks and 3 days, 2 minute seizure at a pharmacy, drowsy for 10 minutes and now waking, glucose 5.4 mmol/L, CTAS 1. New `boyfriend`: two days of bad headache and pain under her ribs. New `resources`: 90 bed hospital, family physician obstetrics, level 1 nursery, tertiary centre 110 km, Ornge. The existing `history` (prenatal) finding is unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 6 |
| Physical and differential | 5 | 5 |
| Management | 19 | 13 |
| Process | 0 | 6 |
| Total | 24 | 30 |

Added: ecl-h1 the seizure, postictal course and seizure history (2), ecl-h2 symptoms of severe preeclampsia (2), ecl-h3 prenatal care, earlier pressures, medications and drug use (2). All three are tested in q-labs. Moved to process: ecl-c1, ecl-c2, ecl-p1, ecl-d1, ecl-l1.

**Longest path seconds.** 540 before, 540 after.

**Citations.**
- `eclampsia-trial` gained a URL. The citation text is unchanged. Verified as PMID 7769899, Lancet 1995 June 10: https://pubmed.ncbi.nlm.nih.gov/7769899/.
- No change, verified: SOGC No. 426 (Magee 2022) https://doi.org/10.1016/j.jogc.2022.03.002. SOGC No. 364 (Skoll 2018) https://doi.org/10.1016/j.jogc.2018.04.018.

**Needs physician decision.** Nothing new beyond the usual review. Weight and allergies are not recorded.

---

## shoulder-dystocia-neonatal-resuscitation. Pushing in the ambulance bay

**Stem.** 137 words before, 53 after. Rural hospital. A 31 year old woman at 39 weeks in labour with her fourth baby says she has to push. You are the only physician. There is no obstetric service. The nearest birthing unit is 95 km away.

**Card.** Temperature 37.1°C. Pulse 104/minute. Resp. 22/minute. BP 132/84 mmHg. O2 sat: Not recorded. Weight: Not recorded. Medications: Insulin for gestational diabetes. Allergies: Not recorded.

**History moved.** New `hpi`: G4P3 at 39 weeks, contractions for 90 minutes, waters broke while driving to the birthing unit, gestational diabetes on insulin, ultrasound estimate of 4.2 kg, and the nurse quote ("She says she has to push. I can see the head."). New `resources`: 12 bed hospital, two nurses, the neonatal resuscitation cart and its contents, second physician 20 minutes away. The existing `history` (obstetric) finding is unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 8 |
| Physical and differential | 4 | 5 |
| Management | 29 | 20 |
| Process | 0 | 9 |
| Total | 34 | 42 |

Added: sd-h1 the labour, membranes and urge to push (2), sd-h2 this pregnancy, gestational diabetes, estimated weight, GBS and blood group (3), sd-h3 previous births and shoulders (2), sd-a4 newborn exam for brachial plexus injury and fractures (1, physical, tested in q-post, which already had that model answer line). sd-a1 (risk factors) is now in history. Moved to process: sd-c1, sd-c2, sd-l1, sd-l2, sd-d1.

**Longest path seconds.** 690 before, 690 after.

**Citations.** No change. RCOG Green-top No. 42, BJOG 2026 (Lattey) https://doi.org/10.1111/1471-0528.70258. Lee 2025 Part 5 Neonatal Resuscitation https://doi.org/10.1161/CIR.0000000000001367. Lemyre 2018 https://doi.org/10.1093/pch/pxy028. Narvey 2019 https://doi.org/10.1093/pch/pxz134.

**Needs physician decision.**
- The case records no maternal O2 sat. The test needs a value, so the card says "Not recorded".
- Management is 48 percent of the points, close to the 50 percent cap.

---

## maternal-cardiac-arrest. Short of breath at thirty three weeks

**Stem.** 128 words before, 55 after. Community hospital. A 38 year old woman who is 33 weeks pregnant with her second baby arrives short of breath and faints in the triage line. In house obstetrician and anesthetist. No cardiac surgery or ECMO.

**Card.** Temperature 37.2°C. Pulse 138/minute. Resp. 32/minute. BP 84/56 mmHg. O2 sat 86% on room air. Weight 96 kg (212 lb). Medications: No anticoagulants. Other medications not recorded. Allergies: No allergies.

**History moved.** New `hpi`: 3 days of dyspnea and right calf pain after a 14 hour car trip, the faint in triage, CTAS 1, and the triage nurse quote. New `resources`: 300 bed hospital, labour and delivery, in house obstetrics and anesthesia, level 2 nursery, no cardiac surgery or ECMO. The existing `history` (past history) and `partner` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 6 |
| Physical and differential | 3 | 3 |
| Management | 25 | 14 |
| Process | 0 | 11 |
| Total | 28 | 34 |

Added: mca-h1 onset, calf pain, travel and syncope (2), mca-h2 previous VTE and family history (2), mca-h3 anticoagulants, bleeding risks, pregnancy course and allergies (2, tested in q-lysis). Moved to process: mca-c1, mca-c2, mca-c3, mca-p1, mca-l1, mca-l2, mca-d1.

**Longest path seconds.** 615 before, 615 after.

**Citations.** No change. Jeejeebhoy 2015 https://doi.org/10.1161/CIR.0000000000000300. Konstantinides 2019 ESC PE guideline https://doi.org/10.1093/eurheartj/ehz405 (online 2019, print issue 2020, which the citation uses). AHA 2025 https://doi.org/10.1161/CIR.0000000000001380.

**Needs physician decision.**
- The AHA 2025 citation names Part 9 and Part 10, but its URL is Part 10 only (Cao et al). Part 9, Adult Advanced Life Support, is https://doi.org/10.1161/CIR.0000000000001376. Consider splitting it into two sources.
- The history items are tested in q-first, the five minutes before the arrest. Confirm this is a fair place to mark history.

---

## sexual-assault-care. A request for the morning after pill

**Stem.** 126 words before, 51 after. Community hospital. It is 23:00. A 22 year old woman arrives with a friend and asks only for the morning after pill. Her voice sounds hoarse. The hospital hosts a Sexual Assault and Domestic Violence Treatment Centre.

**Card.** Temperature 36.8°C. Pulse 96/minute. Resp. 16/minute. BP 124/78 mmHg. O2 sat 99% on room air. Weight 82 kg (181 lb). Medications: No contraception. Other medications not recorded. Allergies: Not recorded.

**History moved.** New `triage`: CTAS 3 and the full triage nurse quote (party, woke in an unknown apartment, thinks she had sex, wants only the morning after pill, does not want police, hoarse voice). New `resources`: 350 bed hospital, the treatment centre, nurse examiner within 45 minutes. The existing `history`, `gyn`, `vaccines` and `mood` findings are unchanged. The hoarse voice also stays in the stem, because the q-approach feedback relies on it.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 3 | 7 |
| Physical and differential | 5 | 7 |
| Management | 21 | 7 |
| Process | 0 | 14 |
| Total | 29 | 35 |

Added: sa-h1 the history care needs, asked with permission (2), sa-h2 menstrual history and contraception (2), sa-h3 hepatitis B and tetanus immunization (1), sa-h4 alcohol, drugs, the memory gap and voiding or washing (1). sa-a3 (suicide and safety screen) is in history. sa-a1 moved to physical. sa-m1 (CT angiography, legacy data) is in physical. Moved to process: sa-c1, sa-c2, sa-c3, sa-c4, sa-p1, sa-p2, sa-p3, sa-d1.

**Longest path seconds.** 555 before, 555 after.

**Citations.**
- `ontario-network` replaced. Before: "Ontario Network of Sexual Assault and Domestic Violence Treatment Centres. Guidance on care and evidence collection after sexual assault." It had no title of a real document and no year. After: "Ontario Network of Sexual Assault/Domestic Violence Treatment Centres. Standards of Care. Second edition. 2019." The PDF resolves at https://www.sadvtreatmentcentres.ca/assets/resource_library/public/Standards%20of%20Care%20-%202019.pdf.
- `sogc-ec` replaced. Before: "Society of Obstetricians and Gynaecologists of Canada. Clinical practice guideline on emergency contraception." It had no author or year. After: "Black A, Guilbert E, et al. Society of Obstetricians and Gynaecologists of Canada. Canadian Contraception Consensus Chapter 3: Emergency Contraception. Journal of Obstetrics and Gynaecology Canada. 2015." Crossref gives JOGC 37(10) S20 to S28, October 2015, https://doi.org/10.1016/S1701-2163(16)39372-0. Authors per PubMed 26606712. It covers ulipristal, levonorgestrel and the copper IUD. The SOGC retirement notice No. 2 (2022) retires only the 2003 emergency contraception document.
- `strangulation` replaced. Before: "Training Institute on Strangulation Prevention. Recommendations for the medical and radiographic evaluation of acute adult non fatal strangulation." It had no year. After: "Training Institute on Strangulation Prevention, Medical Advisory Board. Recommendations for the Medical/Radiographic Evaluation of Acute Adult Non/Near Fatal Strangulation. 2022." Verified at https://www.allianceforhope.org/training-institute-on-strangulation-prevention/resources/recommendations-for-the-medicalradiographic-evaluation-of-acute-adult-nonnear-fatal-strangulation.
- No change, verified: PHAC gonorrhea interim guidance, September 2023, page updated June 2026, ceftriaxone 500 mg IM, https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html. Tan 2025 CMAJ https://doi.org/10.1503/cmaj.250511. PHIPA 2004 https://www.ontario.ca/laws/statute/04p03.

**Needs physician decision.**
- The old stem said "a 350 bed hospital" without its type. I used "community hospital". Change it to "tertiary care centre" if that fits better.
- I could not open the strangulation PDF itself to confirm its CT angiography wording. The landing page confirms the title, issuer and 2022 version.

---

## salicylate-toxicity. Vomiting and breathing fast after a bad week

**Stem.** 118 words before, 58 after. Community hospital. A 36 year old man is brought in by his sister after he told her he took a bottle of pills. He is vomiting and breathing fast. Hemodialysis is in house, but the dialysis nurse needs about 90 minutes to set up.

**Card.** Temperature 38.1°C. Pulse 118/minute. Resp. 34/minute. BP 128/76 mmHg. O2 sat 96% on room air. Weight 70 kg (154 lb). Medications: None. He stopped sertraline 2 months ago. Allergies: Not recorded.

**History moved.** New `hpi`: "a whole bottle" about 6 hours ago after a breakup, vomiting, ringing ears, glucose 5.2 mmol/L, CTAS 2, and the nurse's offer to calm him. New `resources`: 200 bed hospital, 8 bed ICU, in house dialysis with a 90 minute setup. The existing `bottle` and `collateral` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 7 |
| Physical and differential | 6 | 6 |
| Management | 21 | 15 |
| Process | 0 | 6 |
| Total | 27 | 34 |

Added: sal-h1 the product, formulation, tablet count and time (2), sal-h2 tinnitus, vomiting and confusion (1), sal-h3 co-ingestants (2), sal-h4 intent, attempts, depression and supports from his sister (2, tested in q-psych). Moved to process: sal-c1, sal-c2, sal-p1, sal-d1, sal-l1.

**Longest path seconds.** 570 before, 570 after.

**Citations.** No change. Juurlink 2015 EXTRIP https://doi.org/10.1016/j.annemergmed.2015.03.031. Palmer and Clegg 2020 https://doi.org/10.1056/NEJMra2010852. Goldfrank's 11th edition, 2019 (McGraw Hill, ISBN 9781259859618, https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html). Ontario Mental Health Act https://www.ontario.ca/laws/statute/90m07. Health Care Consent Act, 1996 https://www.ontario.ca/laws/statute/96h02.

**Needs physician decision.** sal-h4 cites `ontario-mha` for a suicide risk history. Confirm this is the source you want.

---

## toxic-alcohol-methanol. Found in the garage and cannot see well

**Stem.** 137 words before, 54 after. Community hospital. Paramedics bring in a 52 year old man whose wife found him on the garage floor. He says his vision is blurry. No dialysis on site. Nearest hemodialysis unit 2 hours by road.

**Card.** Temperature 36.4°C. Pulse 106/minute. Resp. 30/minute and deep. BP 142/88 mmHg. O2 sat 97% on room air. Weight 80 kg (176 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved.** New `hpi` ("Paramedic report"): found at 10:00, last seen well at 16:00 yesterday, glucose 6.1 mmol/L, GCS 13, CTAS 2, and the paramedic quote (empty windshield washer fluid jug, "snowstorm" vision). New `resources`: 60 bed hospital, no dialysis, 2 hours to hemodialysis, Ornge, send out toxic alcohol levels in about 6 hours, one 1.5 g vial of fomepizole. The existing `wife` finding is unchanged. The s-supply consequence node mentions "the washer fluid jug the paramedics mentioned", and the `hpi` finding now holds it.

**Names.** The friend who drank with him was named in the collateral finding, the q-others prompt and model answer and the end text. He becomes a second patient, so the name was removed. He is now "a friend" or "the friend".

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 7 |
| Physical and differential | 4 | 4 |
| Management | 21 | 12 |
| Process | 0 | 9 |
| Total | 25 | 32 |

Added: tam-h1 timeline and exposure (2), tam-h2 visual symptoms (1), tam-h3 collateral on alcohol use and who else drank (2, tested in q-others), tam-h4 intent, other ingestions, history and medications (2, tested in q-family). Moved to process: tam-d1, tam-c1, tam-c2, tam-c3, tam-p1, tam-l1.

**Longest path seconds.** 555 before, 555 after.

**Citations.** No change. Roberts 2015 EXTRIP methanol https://doi.org/10.1097/CCM.0000000000000708. AACT 2002 (Barceloux) https://doi.org/10.1081/clt-120006745. Kraut and Mullins 2018 https://doi.org/10.1056/NEJMra1615295. Goldfrank's 11th edition, 2019, as above.

**Needs physician decision.** Confirm that removing the friend's name is acceptable.

---

## calcium-channel-blocker-overdose. Slow pulse after a family argument

**Stem.** 131 words before, 60 after. Community hospital. A 58 year old woman is brought in after her husband found her with an empty bottle of her verapamil tablets. She feels faint when she sits up. No ECMO on site. Nearest ECMO centre 90 minutes by land.

**Card.** Temperature 36.5°C. Pulse 42/minute. Resp. 18/minute. BP 74/40 mmHg. O2 sat 97% on room air. Weight 72 kg (159 lb). Medications: Verapamil SR 240 mg daily. Escitalopram 10 mg daily. Allergies: Not recorded.

**History moved.** New `hpi`: verapamil SR 240 mg, about 25 tablets left, found about 2 hours after an argument, faint on sitting up, glucose 16.8 mmol/L, GCS 15, CTAS 1, and the nurse quote ("She is not diabetic"). New `pmh`: hypertension, low mood seen by her family doctor, not diabetic. New `resources`: 250 bed hospital, 10 bed ICU, cardiologist on call, no ECMO, 90 minutes by land or 40 by Ornge. The existing `meds` and `husband` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 7 |
| Physical and differential | 4 | 4 |
| Management | 21 | 14 |
| Process | 0 | 7 |
| Total | 25 | 32 |

Added: ccb-h1 product, formulation, tablet count and time (2), ccb-h2 co-ingestants and home medications including escitalopram (2), ccb-h3 intent, attempts and mood history (2, tested in q-handover), ccb-h4 diabetes history before reading the glucose (1). Moved to process: ccb-d1, ccb-d2, ccb-c1, ccb-c2, ccb-p1.

**Longest path seconds.** 585 before, 585 after.

**Citations.** No change. St-Onge 2017 https://doi.org/10.1097/CCM.0000000000002087. Engebretsen 2011 https://doi.org/10.3109/15563650.2011.582471. Goldfrank's 11th edition, 2019, as above.

**Needs physician decision.** The stem names verapamil because the opening scene has her husband holding the bottle. The dose, count and timing moved to `hpi`. Confirm you are happy for the stem to name the drug. ccb-d1 (early ECMO referral, critical) is now in process as a timely disposition decision.

---

## opioid-overdose-buprenorphine-start. Found unresponsive behind a shelter

**Stem.** 136 words before, 47 after. Community hospital. It is 20:05. Paramedics bring in a 29 year old man whom shelter staff found unresponsive behind the shelter. The hospital runs a Rapid Access Addiction Medicine clinic on weekday mornings.

**Card.** Temperature 35.9°C. Pulse 96/minute. Resp. 6/minute. BP 118/70 mmHg. O2 sat 84% on room air. Weight About 68 kg (150 lb). Medications: None. Allergies: Not recorded.

**History moved.** New `hpi` ("Prehospital report"): found at 19:40, naloxone 4 mg intranasally, respiratory rate 4, bag mask ventilation, naloxone 0.4 mg IM, glucose 6.2 mmol/L, GCS 7, CTAS 1, and the paramedic quote (brief response, usually smokes fentanyl). New `resources`: busy urban ED, RAAM clinic, addiction medicine on call by phone, social worker until midnight. The existing `history` and `social` findings are unchanged.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 7 |
| Physical and differential | 5 | 4 |
| Management | 22 | 14 |
| Process | 0 | 11 |
| Total | 27 | 36 |

Added: op-h1 what he used, how, when and the naloxone response (2), op-h2 benzodiazepines, alcohol and other sedatives (2), op-h3 opioid use history and goals (2, tested in q-bup), op-h4 housing, phone, health card, prescriber and supports (1, tested in q-discharge), op-a2 COWS before and after each dose (2, physical, tested in q-bup). op-m2 (the buprenorphine start) was tagged `data` and is now in management. Moved to process: op-c1, op-c2, op-p1, op-p2, op-d1, op-d2, op-l1.

**Longest path seconds.** 585 before, 585 after.

**Citations.** No change. Yakovenko 2024 CRISM https://doi.org/10.1503/cmaj.241173. Hawk 2021 https://doi.org/10.1016/j.annemergmed.2021.04.023. Christenson 2000 https://doi.org/10.1111/j.1553-2712.2000.tb01260.x. Herring 2021 https://doi.org/10.1001/jamanetworkopen.2021.17128.

**Needs physician decision.** The old stem said "a busy urban emergency department" without the hospital type. I used "community hospital". Change it to "tertiary care centre" if that fits better.

---

## Across the batch

- Every new history item cites a source already in the case. Please confirm the pairing, especially pph-h4 (newborn) under SOGC No. 431 and op-h4 (social needs) under Hawk 2021.
- Where the case gave no value, the card says "Not recorded": weight in eclampsia, postpartum hemorrhage, ectopic and shoulder dystocia, O2 sat in shoulder dystocia, and allergies in six cases.
