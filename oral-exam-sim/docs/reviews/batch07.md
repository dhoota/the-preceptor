# Batch 07 clinical accuracy review

Reviewer role: adversarial emergency medicine examiner with obstetric and toxicology focus. Scope: the 10 cases in `src/cases/batch07/`. All cases remain `reviewed: false`. Typecheck and `CASE_BATCH=batch07` case tests pass after the edits.

Citations were checked against PubMed records (E-utilities), publisher DOIs and official pages. Where a full guideline text was paywalled or blocked, that is stated below as a residual item. Every URL added resolves to a DOI or an official page that was confirmed.

## postpartum-hemorrhage: Bleeding after a home birth

Verdict: Corrected

Changes:
1. Blood loss. Before: "She is already in stage 3 hemorrhage with more than 1500 mL lost". The stem only documents 1200 mL. After: the loss is 1200 mL at home, ongoing bleeding and a shock index near 1.7, so the true loss is likely over 1500 mL. "Stage 3" (a CMQCC term, not SOGC No. 431 language) replaced with "severe hemorrhage with shock" in the model answer, choice feedback and rubric pph-r1.
2. Oxytocin treatment dose. Before: "3 IU IV or an infusion of 20 to 40 IU". The 3 IU bolus is the cesarean prophylaxis "rule of threes", not a PPH treatment dose. After: 5 IU IV given slowly, then 20 to 40 IU in 1 L. Same fix in rubric pph-m1. Tranexamic acid now states "over 10 minutes".
3. Misoprostol. Before: feedback claimed "SOGC advises sublingual dosing of 200 to 400 mcg". That range could not be verified. After: SOGC advises against the rectal route (verified) and sublingual or oral misoprostol, for example 400 mcg, is an adjunct only.
4. Carboprost. Before: no maximum given and "contraindicated in asthma". After: "should be avoided in asthma", and the unsafe choice feedback now states 250 mcg IM every 15 minutes to a maximum of 2 mg (8 doses).
5. Sources. Added authors, journal and DOI URLs to SOGC No. 431 and the WOMAN trial.

Sources verified:
- Robinson D, et al. Guideline No. 431: Postpartum Hemorrhage and Hemorrhagic Shock. JOGC 2022. https://doi.org/10.1016/j.jogc.2022.10.002 (PubMed 36567097)
- WOMAN Trial Collaborators. Lancet 2017. https://doi.org/10.1016/S0140-6736(17)30638-4 (PubMed 28456509)

Residual uncertainties for the physician:
- The SOGC No. 431 full text was not accessible. Confirm the Table 3 oxytocin IV treatment dose (5 IU versus other), the misoprostol treatment dose and the ergonovine repeat interval and maximum.
- Fibrinogen target above 2 g/L and 4 g concentrate dose are standard but should be checked against the SOGC table and local massive hemorrhage protocol.
- Manual exploration by the emergency physician about 90 minutes after birth is defensible but depends on local scope.
- Rubric pph-d2 cites the Canadian Blood Services guide for VTE prophylaxis, which is a weak fit.

## eclampsia: Seizure in a pharmacy line

Verdict: Corrected

Changes:
1. Magnesium toxicity numbers. Before: level 4.6 mmol/L with respiratory rate 9, and the finding said the level was drawn "2 hours after the loading dose", which conflicted with the timeline. After: first level after the recurrent seizure is 2.8 mmol/L. Four hours later (flight delayed by weather) with oliguria and creatinine 128 µmol/L the level is 5.2 mmol/L with respiratory rate 10 and absent reflexes. Model answer now gives thresholds: target 2 to 3.5 mmol/L, reflex loss about 3.5 to 5 mmol/L, respiratory depression from about 5 mmol/L.
2. Blood pressure target. Before: "130 to 150 systolic and 80 to 100 diastolic". After: under 160/110 first, then toward a diastolic of about 85 mmHg, avoiding a precipitous drop.
3. Nifedipine. Before: "10 mg immediate release PO swallowed whole". After: 10 mg of an immediate or intermediate release product, repeated in 30 minutes, never extended release for acute control.
4. Hydralazine. Added the 20 mg maximum.
5. Stroke. Before: "the leading cause of death in eclampsia". After: "a leading cause". Same in rubric ecl-m2.
6. Steroids. Added that delivery or transfer must not be delayed to finish the betamethasone course.
7. Removed a duplicated "IV magnesium 4 g IV" phrase. Added authors and DOIs to SOGC No. 426 and No. 364.

Sources verified:
- Magee LA, et al. Guideline No. 426. JOGC 2022. https://doi.org/10.1016/j.jogc.2022.03.002 (PubMed 35577426)
- Skoll A, et al. No. 364 Antenatal Corticosteroid Therapy. JOGC 2018. https://doi.org/10.1016/j.jogc.2018.04.018 (PubMed 30268316)
- Which anticonvulsant for women with eclampsia? Lancet 1995 (PubMed 7769899)
- The Association of Ontario Midwives HDP guideline 2023 confirmed the SOGC fluid limit of about 80 mL/h and ergonovine avoidance in HDP.

Residual uncertainties for the physician:
- The SOGC No. 426 dosing table was not accessible. Confirm the nifedipine formulation and repeat interval SOGC now lists, the magnesium loading duration (the case says 5 to 15 minutes) and the diastolic 85 target after severe hypertension.
- Magnesium kinetics in the case are simplified for teaching. A rise from 2.8 to 5.2 mmol/L in 4 hours needs marked oliguria.

## maternal-cardiac-arrest: Short of breath at thirty three weeks

Verdict: Corrected

Changes:
1. Alteplase in arrest. Before: only 100 mg over 2 hours or 0.6 mg/kg to 50 mg. After: kept both, calculated the accelerated dose for 96 kg (capped at 50 mg), and added that re-arrest calls for alteplase 50 mg IV bolus with CPR continued for at least 60 to 90 minutes.
2. Heparin. Calculated 80 units/kg as about 7700 units for 96 kg.
3. Ending. Before: a 33 week baby "ventilated in the nursery" of a level 2 unit. After: stabilized while neonatal transport moves him to a level 3 NICU.
4. AHA 2025 citation named the actual parts (Part 9 and Part 10). Added DOIs to all three sources.

Sources verified:
- Jeejeebhoy FM, et al. Cardiac Arrest in Pregnancy. Circulation 2015. https://doi.org/10.1161/CIR.0000000000000300
- Part 9: Adult Advanced Life Support (PubMed 41122884) and Part 10: Adult and Pediatric Special Circumstances of Resuscitation (PubMed 41122889). Circulation 2025. https://doi.org/10.1161/CIR.0000000000001380
- Konstantinides SV, et al. 2019 ESC PE guideline. Eur Heart J 2020. https://doi.org/10.1093/eurheartj/ehz405
- Summaries of AHA 2025 confirm the 4 minute start and 5 minute delivery goal.

Residual uncertainties for the physician:
- Full systemic thrombolysis immediately after an open hysterotomy is a judgment call. It is labelled strong here. Confirm you accept this over waiting for surgical control or seeking catheter therapy.
- A 2026 AHA/ACC multisociety acute PE guideline now exists (Circulation 2026, PubMed 41712677). Consider citing it alongside or instead of ESC 2019.
- Post lysis hemorrhage management does not mention tranexamic acid or cryoprecipitate as alteplase reversal. Decide whether to add.

## shoulder-dystocia-neonatal-resuscitation: Pushing in the ambulance bay

Verdict: Corrected

Changes:
1. Epinephrine. Before: 0.02 mg/kg with no range. After: 0.02 mg/kg within the 0.01 to 0.03 mg/kg range, worked out as about 0.09 mg or 0.9 mL of 0.1 mg/mL for 4.3 kg. Endotracheal dose now shows the volume, 4.3 mL.
2. Volume. Before: "about 45 mL". After: 43 mL (10 mL/kg of 4.3 kg) over 5 to 10 minutes.
3. Glucose. Added a D10W maintenance rate of about 80 mL/kg/day and moved rubric sd-m5 to a new CPS low blood glucose source (it had cited the hypothermia statement).
4. RCOG Green-top No. 42 citation updated from 2012 to the 2026 BJOG edition. NRP and CPS citations now carry authors, journal and DOIs.

Sources verified:
- Lee HC, et al. Part 5: Neonatal Resuscitation. Circulation 2025. https://doi.org/10.1161/CIR.0000000000001367 (PubMed 41122887)
- Lemyre B, et al. Hypothermia for newborns with HIE. Paediatr Child Health 2018. https://doi.org/10.1093/pch/pxy028
- Narvey MR, et al. Newborns at risk for low blood glucose. Paediatr Child Health 2019. https://doi.org/10.1093/pch/pxz134
- Lattey K, et al. Shoulder Dystocia: Green-top Guideline No. 42. BJOG 2026. https://doi.org/10.1111/1471-0528.70258

Residual uncertainties for the physician:
- The full 2025 neonatal guideline was blocked. Confirm the 2025 wording on the initial IV epinephrine dose and on cord management (intact cord milking) for a nonvigorous term infant.
- The case content was not compared line by line with the 2026 RCOG text. Check that the manoeuvre order and the posterior axillary sling position are unchanged.

## ruptured-ectopic-pregnancy: Found on the washroom floor at work

Verdict: Corrected

Changes:
1. Gas. Before: pH 7.29, pCO2 32, bicarbonate 16, which calculates to pH 7.32. After: bicarbonate 15.
2. Rh immune globulin. Before: "standard dose 300 mcg". After: for example 300 mcg or the blood bank dose, plus a new point that Rh D positive platelets from the protocol may need extra Rh immune globulin. Rubric ec-m2 now cites SOGC No. 448 (2024).
3. Added authors, journals and DOIs to SOGC No. 414 and ACOG PB 193.

Sources verified:
- Po L, et al. Guideline No. 414. JOGC 2021. https://doi.org/10.1016/j.jogc.2021.01.002
- ACOG Practice Bulletin No. 193. Obstet Gynecol 2018. https://doi.org/10.1097/AOG.0000000000002560
- Fung-Kee-Fung K, et al. Guideline No. 448: Prevention of Rh D Alloimmunization. JOGC 2024. https://doi.org/10.1016/j.jogc.2024.102449

Residual uncertainties for the physician:
- SOGC No. 448 full text was not accessible. Confirm its ectopic dose (120 mcg versus 300 mcg before 12 weeks).
- ATLS 10th edition (2018) is cited. An 11th edition may now be current.
- Permissive hypotension is extrapolated from trauma to ruptured ectopic.

## sexual-assault-care: A request for the morning after pill

Verdict: Corrected

Changes:
1. Levonorgestrel and weight. Before: "may be less effective with higher body weight". After: the Canadian label warns it is less effective above 75 kg and may not work above 80 kg. She weighs 82 kg.
2. HIV PEP. Regimen kept (TDF/FTC plus dolutegravir) and bictegravir/FTC/TAF added. Citation updated from the 2017 CMAJ guideline to the 2025 update, which lists both as preferred.
3. Gonorrhea citation. Before: "Interim guidance. 2024". The PHAC interim recommendation for ceftriaxone 500 mg IM monotherapy was issued in September 2023. Corrected and URL added. The 500 mg dose is correct.
4. Evidence kit storage. Added that storage time varies by centre, often 6 to 12 months. The 12 day collection window was confirmed.
5. PHIPA. Added that the narrow PHIPA exception for significant risk of serious bodily harm does not apply to the police request. Softened "the seriousness of the crime does not create a right" to "alone does not".
6. Tetanus. Clarified that her last dose was 8 years ago, so no booster is needed.

Sources verified:
- PHAC Gonorrhea guide: Treatment and follow up. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html
- Tan DHS, et al. Canadian guideline on HIV pre and postexposure prophylaxis: 2025 update. CMAJ 2025. https://doi.org/10.1503/cmaj.250511 (PubMed 41326046)
- Ontario Network of SA/DV Treatment Centres. https://www.sadvtreatmentcentres.ca/
- Centre and hospital pages (Scarborough, Thunder Bay, St. Joseph's London) confirmed the 12 day kit window and 6 to 12 month storage.
- PHIPA. https://www.ontario.ca/laws/statute/04p03

Residual uncertainties for the physician:
- The SOGC emergency contraception source is cited plainly (Canadian Contraception Consensus chapter). Choose the exact current SOGC document.
- CT angiography after strangulation with loss of consciousness follows the Training Institute recommendations. Canadian practice varies.
- Whether PEP is offered after an unknown assailant vaginal exposure depends on the 2025 risk assessment framework. Confirm the case wording fits it.

## salicylate-toxicity: Vomiting and breathing fast after a bad week

Verdict: Corrected

Changes:
1. Dose estimate. Before: "460 mg/kg is a potentially lethal ingestion", while the rubric teaching says over 500 mg/kg is lethal. After: 464 mg/kg, a severe ingestion close to the 500 mg/kg potentially lethal range.
2. Consent law. Before: "Treat under the common law duty in an emergency". In Ontario emergency treatment without consent sits in the Health Care Consent Act. After: HCCA emergency provision, and a Form 1 detains for psychiatric assessment but does not authorize medical treatment. Added the HCCA as a source and pointed rubric sal-p1 to it.
3. EXTRIP thresholds. Added the suggested thresholds (above 6.5 mmol/L or pH 7.20 or less, lower with impaired kidney function) to the rubric teaching.
4. Added DOIs and statute URLs.

Checks that were correct: 1 mmol/L equals 13.8 mg/dL, so 7.2 mmol/L is about 100 mg/dL. The gases, anion gap (26) and osmolar gap are internally consistent. Stop criteria of below 1.4 mmol/L match EXTRIP.

Sources verified:
- Juurlink DN, et al. EXTRIP salicylate. Ann Emerg Med 2015. https://doi.org/10.1016/j.annemergmed.2015.03.031
- Palmer BF, Clegg DJ. Salicylate Toxicity. NEJM 2020. https://doi.org/10.1056/NEJMra2010852
- Ontario Mental Health Act https://www.ontario.ca/laws/statute/90m07 and Health Care Consent Act https://www.ontario.ca/laws/statute/96h02

Residual uncertainties for the physician:
- Goldfrank's 11th edition (2019) is cited. A newer edition may exist.
- Some rubric items (sedation, potassium) cite the NEJM review rather than a Canadian source.

## toxic-alcohol-methanol: Found in the garage and cannot see well

Verdict: Corrected

Changes:
1. Osmolar gap versus level. Before: measured osmolality 332 gave a gap of 41, but the methanol level of 28 mmol/L explains only about 28 mOsm/kg. After: measured 324 mOsm/kg, gap 33, which fits the level with a normal baseline gap. Model answer and choice feedback updated.
2. Ethanol target now also given as 100 mg/dL. Conversion verified (22 mmol/L times 46 g/mol).
3. EXTRIP. "A high methanol level" now reads "over about 22 mmol/L while on fomepizole" (700 mg/L).
4. Privacy. Added that PHIPA permits sharing what is needed to reduce a significant risk of serious harm to the second exposed person.
5. Added DOIs.

Checks that were correct: anion gap 32, calculated osmolality 291, fomepizole 15 mg/kg is 1200 mg for 80 kg and fits one 1.5 g vial, maintenance and dialysis dosing, folic and folinic acid doses, all gas values.

Sources verified:
- Roberts DM, et al. EXTRIP methanol. Crit Care Med 2015. https://doi.org/10.1097/CCM.0000000000000708
- Barceloux DG, et al. AACT methanol guideline. J Toxicol Clin Toxicol 2002. https://doi.org/10.1081/clt-120006745
- Kraut JA, Mullins ME. Toxic Alcohols. NEJM 2018. https://doi.org/10.1056/NEJMra1615295

Residual uncertainties for the physician:
- The bicarbonate target (pH above 7.3) varies across sources. Some aim for normal pH in methanol poisoning.

## calcium-channel-blocker-overdose: Slow pulse after a family argument

Verdict: Corrected. One point needs physician attention.

Changes:
1. Methylene blue and escitalopram. The patient takes escitalopram and the case offered methylene blue without comment. Methylene blue is an MAO inhibitor and can cause serotonin toxicity. The model answer now flags this. This was the most important omission in the batch.
2. Potassium during high dose insulin. Before: "Replace potassium if it falls below about 2.8". After: keep about 2.8 to 3.2 mmol/L, replace below that, avoid overcorrection, per Engebretsen.
3. Atropine now 1 mg per current ACLS.
4. Lipid feedback now names periarrest as the setting. Added DOIs.

Checks that were correct: 25 tablets of 240 mg is 6 g. Insulin 1 unit/kg is 72 units. Dextrose bolus is not needed above about 14 mmol/L. Calcium chloride 1 g or gluconate 3 g. Lipid 1.5 mL/kg of 20 percent. Whole bowel irrigation 1.5 to 2 L/h.

Sources verified:
- St-Onge M, et al. Crit Care Med 2017. https://doi.org/10.1097/CCM.0000000000002087
- Engebretsen KM, et al. Clin Toxicol 2011. https://doi.org/10.3109/15563650.2011.582471

Residual uncertainties for the physician:
- Potassium thresholds during high dose insulin differ between sources (2.5 versus 2.8). Pick one for the case.
- Whether methylene blue should be a listed rescue at all in an SSRI user. Consider making this an explicit teaching point or rubric item.

## opioid-overdose-buprenorphine-start: Found unresponsive behind a shelter

Verdict: Corrected

Changes:
1. High dose induction attribution. Before: rubric op-m2 taught "Canadian guidance supports higher early doses" citing CRISM 2024. The CMAJ 2024 CRISM update was read in full and does not address high dose initiation. After: the teaching cites the ED high dose induction study (Herring 2021), added as a new source.
2. Precipitated withdrawal mechanism. Before: "from displacement of fentanyl stored in fat". After: buprenorphine displaces fentanyl from the receptors, and fentanyl stored in fat keeps releasing, which raises the risk.
3. CRISM citation now names the authors and DOI. Added DOIs to Hawk and Christenson.

Checks that were correct: naloxone titration 0.04 to 0.1 mg, 8 mg starting doses, 16 to 32 mg day 1 total, discharge at 24 mg daily (the Canadian labelled maximum), adjunct doses, no Form 1 for a capable adult, National Overdose Response Service.

Sources verified:
- Yakovenko I, Bruneau J, et al. CRISM 2024 update. CMAJ 2024. https://doi.org/10.1503/cmaj.241173 (PubMed 39532476)
- Hawk K, et al. Ann Emerg Med 2021. https://doi.org/10.1016/j.annemergmed.2021.04.023
- Christenson J, et al. Acad Emerg Med 2000. https://doi.org/10.1111/j.1553-2712.2000.tb01260.x
- Herring AA, et al. JAMA Netw Open 2021. https://doi.org/10.1001/jamanetworkopen.2021.17128

Residual uncertainties for the physician:
- Rubric items on sedative adulterants and flumazenil (op-a1, op-m1) cite CRISM, which does not cover them. A Canadian drug alert or poison centre source would fit better.
- Starting buprenorphine about 100 minutes after the last fentanyl use, even in naloxone withdrawal, carries real precipitated withdrawal risk. The case handles this, but the COWS threshold used locally should be confirmed.

## Batch summary

- Cases reviewed: 10. Corrected: 10. None left inaccurate on a safety defining point.
- Corrections per case: postpartum hemorrhage 5 groups (11 edits), eclampsia 7 (12 edits), maternal arrest 4 (6 edits), shoulder dystocia and newborn 4 (8 edits), ectopic 3 (6 edits), sexual assault 6 (10 edits), salicylate 4 (7 edits), methanol 5 (10 edits), calcium channel blocker 4 (7 edits), buprenorphine 3 (5 edits).
- Most serious errors: methylene blue offered to a patient on escitalopram with no serotonin warning. Oxytocin 3 IU (a cesarean prophylaxis dose) taught as the PPH treatment dose. Magnesium toxicity level and timeline that did not match respiratory depression. A salicylate dose called lethal while the rubric set the lethal line higher. An osmolar gap that did not match the methanol level. Ontario emergency treatment attributed to common law rather than the Health Care Consent Act. Levonorgestrel weight failure understated in an 82 kg patient. Unsupported claims attributed to SOGC (misoprostol dose) and CRISM (high dose buprenorphine).
- Citations: one wrong year (PHAC gonorrhea), two superseded (HIV PEP 2017, RCOG 2012), one misattribution (CRISM). All others verified. DOIs added where confirmed.
- Needs a physician most: thrombolysis after open hysterotomy, the SOGC No. 431 and No. 426 dosing tables that could not be read in full, and the methylene blue decision in the calcium channel blocker case.
