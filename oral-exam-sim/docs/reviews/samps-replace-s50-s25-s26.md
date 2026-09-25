# SAMP rebuild report: s50 (shock), s25 (asthma-copd) and s26 (burns)

Label s50-s25-s26. This report covers every REJECT rebuilt in the three batches, the added
rebuilds from the bank-wide duplicate sweep, and the FIX pass. Each rebuilt SAMP keeps its id,
priority topic, question count and each question's key feature. Version is now 2. Status stays
reviewed: false. Titles are neutral. No SAMP with reviewed: true was edited.

Checks, all passing:

- SAMP_BATCH=s50 vitest (tests/samps.test.ts and tests/samp-quality.test.ts): 683 passed.
- SAMP_BATCH=s25 vitest: 675 passed.
- SAMP_BATCH=s26 vitest: 516 passed.
- npx tsc --noEmit -p . : no errors.
- LAUNCH_GATE=1 vitest run tests/samps.test.ts: 4503 passed.

Origin column: T = original triage REJECT. S = added by the duplicate sweep list
(rebuild-list.json).

## Rebuilt SAMPs: s50 (Shock)

| id | origin | copies | old scenario | new scenario | keyed decisions | sources |
| --- | --- | --- | --- | --- | --- | --- |
| shock-22 | T | infectious-diseases-27 | heavy drinker, lobar pneumonia, septic shock | adult without a spleen, overwhelming post-splenectomy infection | albumin after large crystalloid, add vasopressin, dobutamine for poor cardiac output, IV hydrocortisone | SSC adult 2021 |
| shock-23 | T | infectious-diseases-03 | febrile neutropenia after chemotherapy | urosepsis two days after prostate biopsy, ESBL risk | meropenem for ESBL risk, catheter for retention, early norepinephrine, bicarbonate for pH 7.14 with AKI | IDSA AMR guidance, SSC 2021, CENSER 2019 |
| shock-24 | T | infectious-diseases-04 | diabetic thigh necrotizing infection | pyogenic liver abscess in septic shock | antibiotics plus percutaneous drainage (menu), insulin to 8 to 10 mmol/L, no bicarbonate at pH 7.26, de-escalate to ceftriaxone | SSC 2021 |
| shock-25 | T | anaphylaxis-23 | child with peanut anaphylaxis | septic reaction to a bacterially contaminated platelet transfusion | bacterial contamination of the unit, Ringer's lactate, norepinephrine, vancomycin plus piperacillin-tazobactam | CBS clinical guide ch 10, SSC 2021 |
| shock-27 | T | tox-03 | amitriptyline overdose | wet beriberi (Shoshin) in a man with poor intake | hyperdynamic heart on POCUS, IV thiamine, norepinephrine, saline diluent for thiamine | Pereira beriberi review 2026 |
| shock-28 | T | chest-pain-06 | COPD tension pneumothorax | venous air embolism after central line removal | recognize air embolism, echogenic foci and a dilated right ventricle on echo (menu), left lateral head-down position, hyperbaric oxygen | Gordy 2013, Mirski 2007 |
| shock-29 | T | abdominal-pain-01 | ruptured AAA | delayed hemothorax on apixaban 3 days after a fall | hypovolemic RUSH pattern, large left hemothorax on ultrasound, O RhD positive red cells for a 79-year-old woman | Elbaih RUSH 2018, Staub 2018, CBS clinical guide ch 11 |
| shock-30 | T | burns-32 | child scald, paediatric burn fluids | high-output ileostomy in an 81-year-old woman | maintenance 1 200 to 1 500 mL/day (20 to 25 mL/kg), add measured losses, random urine sodium, 0.9% saline with KCl | NICE CG174, Wang 2025 |
| shock-33 | T | multiple-trauma-09 | child struck by a car, splenic injury | splenic sequestration crisis in a toddler with sickle cell disease | cool limbs and slow refill as shock markers, hypotension below 60 mmHg at this age, red cells in small aliquots | SSC paediatric 2020, Zayed 2025 |
| shock-35 | T | ems-01 | RV infarct after nitroglycerin | amniotic fluid embolism after rapid delivery | dilated hypokinetic RV on POCUS, amniotic fluid embolism, red cells with cryoprecipitate | SMFM AFE 2016, SMFM checklist 2026 |
| shock-36 | T | arrhythmia-20 | hyperkalemic junctional bradycardia | cytokine release syndrome after CAR-T therapy | recognize cytokine release syndrome, tocilizumab, norepinephrine | Arvanitis 2025, SSC 2021 |
| shock-37 | T | gi-bleed-11 | variceal bleed | retroperitoneal bleed on enoxaparin | protamine with 50 mg maximum, red cells, interventional radiology embolization | Aldhaeefi 2023, CBS ch 11, Tiralongo 2024 |
| shock-38 | T | infectious-diseases-29 | infant septic shock, rural IO | person who injects drugs with a forearm abscess and septic shock | vancomycin, bedside incision and drainage, add epinephrine for refractory shock | SSC 2021 |
| shock-39 | S | chest-pain-25 | LVOT obstruction after dehydration | trazodone overdose with hypotension | alpha-1 blockade as the mechanism, norepinephrine, magnesium for long QT | Camacho 2019 |
| shock-40 | S | multiple-trauma-11 | stabbed abdomen, hemorrhagic shock | tracheo-innominate artery fistula bleeding from a tracheostomy | cuff overinflation to tamponade, red cells despite a normal first hemoglobin, 1:1:1 massive hemorrhage protocol | Joshi 2025, CBS ch 11, Rossaint 2023 |
| shock-41 | T | infectious-diseases-28 | cholangitis in an older man | septic shock from pneumonia at 30 weeks of pregnancy | chest radiograph is safe in pregnancy, organ dysfunction markers (menu), no delivery for sepsis alone | ACOG CO 723, SMFM CS 47 |
| shock-43 | S | pulmonary-edema-05 | unstable atrial fibrillation | adrenal crisis in a child with hypopituitarism after a brain tumour | shock markers in children, adrenal crisis, hydrocortisone 100 mg IV | SSC paediatric 2020, Camtosun 2025 |
| shock-45 | T | tox-13 | iron poisoning in a toddler | rattlesnake bite in southern Alberta with shock | venom vasodilation, Fab antivenom 8 to 12 vials, saline, repeat dose for recurrence | Lavonas unified algorithm 2011 |
| shock-47 | T | abdominal-pain-20 | gallstone pancreatitis fluids | cholera in a returned traveller | rehydration volume about 7 000 mL, Ringer's lactate, ORS by mouth alongside IV once drinking | GTFCC flowchart 2024, GTFCC field manual |

## Rebuilt SAMPs: s25 (Asthma and COPD)

| id | origin | copies | old scenario | new scenario | keyed decisions | sources |
| --- | --- | --- | --- | --- | --- | --- |
| asthma-copd-19 | T | arrhythmia-26 | COPD flare with MAT | COPD flare with pneumothorax after endobronchial valves | chest drain before NIV, low-dose morphine for NIV tolerance, prednisone 40 mg for 5 days | GOLD 2026, BTS/ICS 2016 |
| asthma-copd-26 | S | airway-10 | hypotension after intubating an asthmatic | COPD with obesity and hypercapnia | bilevel NIV with intubation ready at pH 7.22, raise EPAP, intubate at pH 7.12 with GCS 7 | GOLD 2026, BTS/ICS 2016 |
| asthma-copd-28 | S | asthma-copd-14 | COPD patient wanting to leave | 68-year-old never-smoker with asthma who lives alone | 1-hour status predicts admission, admit at PEF 42%, admission risk factors (menu), IV methylprednisolone when vomiting | GINA 2026 |
| asthma-copd-35 | S | asthma-copd-07 | young worker wanting to leave | asthma from wildfire smoke in British Columbia | salbutamol by spacer, prednisone 50 mg now, MART with action plan and 2 to 7 day follow-up (menu) | GINA 2026 |
| asthma-copd-36 | S | sob-04 | severe asthma, too breathless for peak flow | undiagnosed smoker with wheeze, asthma versus COPD | bronchodilators now, prednisone 50 mg, SpO2 88 to 92%, NIV for acidosis | GINA 2026, GOLD 2026, BTS/ICS 2016 |
| asthma-copd-38 | S | asthma-copd-08 | pneumonia with obstructive lung disease | COPD flare in a wheelchair user | antibiotics by GOLD sputum criteria, prophylactic LMWH, prednisone 40 mg for 5 days | GOLD 2026 |
| asthma-copd-41 | S | sob-05 | COPD hypercapnia before air transfer | severe asthma after smoking heroin | silent chest, prepare to intubate rather than NIV, low rate with long expiration | GINA 2026, BTS/ICS 2016 |
| asthma-copd-42 | S | asthma-copd-36 | quiet severe asthma | 16-year-old with asthma at summer camp | PEF as % predicted, four first treatments (menu), recognize tiring | GINA 2026 |
| asthma-copd-43 | S | asthma-copd-07 | frequent-visit asthma, reliever only | night-shift worker with a cat | GINA risk factors (menu), prednisone 50 mg for 5 days without taper, follow-up in 2 to 7 days | GINA 2026 |
| asthma-copd-45 | S | sob-05 | hypercapnic COPD, gas reading | COPD flare in a care home during an RSV outbreak | severe by the Rome criteria, continue long-acting bronchodilators, controlled oxygen and medical care without NIV at pH 7.36 | GOLD 2026, BTS/ICS 2016 |

## Rebuilt SAMPs: s26 (Burns)

| id | origin | copies | old scenario | new scenario | keyed decisions | sources |
| --- | --- | --- | --- | --- | --- | --- |
| burns-16 | S | burns-02 | kitchen oil fire, 27% adult | pressure cooker scald, 24% in a 52-year-old woman | 3 600 mL at 2 mL/kg per %TBSA, urine target 38 mL/hour, raise rate about 10%, fentanyl titrated IV, burn centre transfer | ABA resuscitation 2024, ABA referral 2025, Alaska 2021 |
| burns-19 | S | environmental-14 | toddler bites an extension cord | 9-year-old with CO poisoning from an indoor charcoal barbecue in an ice storm | co-oximetry, pulse oximetry misreads carboxyhemoglobin, discharge only to safe heated shelter, family screening and outdoor barbecue advice (menu) | TREKK burns 2025, Alaska 2021 |
| burns-21 | S | burns-04 | townhouse fire, cyanide lactate | intoxicated man burned asleep at a cabin then fell down stairs | stridor as the trigger to intubate, 100% oxygen for COHb 22%, no cyanide antidote, spinal motion restriction with imaging | TREKK burns 2025, Alaska 2021 |
| burns-24 | S | airway-02 | child trapped in a smoky bedroom | 5-year-old from a tent fire with wet towels and hypothermia | smaller shorter airway, remove wet towels and warm, head of bed up, paediatric burn centre transfer | TREKK burns 2025 |
| burns-25 | T | burns-11 (s04) | propane barbecue face burn | kerosene heater flare at a northern Manitoba hunting camp, 45% | intubate before a long flight, tidal volume 6 mL/kg ideal weight, Ringer's lactate, add albumin for fluid creep | ABA resuscitation 2024, Alaska 2021 |
| burns-27 | S | burns-08 | diabetic hot-water foot scald | 17-year-old with a deep exhaust pipe burn over the knee | depth and joint as referral features (menu), no tetanus needed, burn centre consult today | ABA referral 2025, TREKK burns 2025 |
| burns-28 | S | abuse-domestic-19 | toddler with inflicted iron burn | 5-year-old with an accidental hot chocolate spill | discharge requirements (menu), glove pattern as abuse flag, dressing change in 2 to 3 days, ibuprofen 200 mg | TREKK burns 2025, TREKK pain 2023 |
| burns-31 | S | burns-07 | intubated major burn at hour twelve, fluid creep | farmer in a grain dryer flash fire who fell from a ladder, transferred with an overcounted TBSA | erythema counted in the TBSA, CT of the cervical spine, 270 mL/hour without catch-up, eFAST for hypotension | Alaska 2021, Canadian C-spine rule 2001 |
| burns-32 | S | burns-17 | infant pulled soup off the stove | 13-year-old scalded by boiling maple sap at a sugar shack | 2 mL/kg per %TBSA at age 13, first half due 8 hours after the burn, urine target 23 mL/hour, paediatric burn centre transfer | TREKK burns 2025 |
| burns-33 | S | burns-16 | nightgown fire at the stove | 68-year-old man with Parkinson disease, deep hand burns from a grill flare | hands and comorbidity as referral features (menu), oral fluids for a 5% burn, small titrated IV hydromorphone, burn centre consult for transfer | ABA referral 2025, Alaska 2021 |

## FIX items

| id | fix | result | reason |
| --- | --- | --- | --- |
| asthma-copd-44 | q2 explanation: "above 4.5 as PE likely" to "above 4 as PE likely" | applied | Wells PE score above 4 is PE likely in the two-level model. |
| asthma-copd-33 | rewrite of the q1 severity explanation | not applied | GOLD 2026 Figure 4.2 (Rome proposal) defines severe as PaO2 60 mmHg or less and/or hypercapnia with acidosis. The current explanation already matches this, so the proposed change would add an error. |
| asthma-copd-41 | rewrite of the q1 severity explanation | superseded | asthma-copd-41 was rebuilt from the added list. |
| burns-21 | change timings and lab values away from loc-38 | superseded | burns-21 was rebuilt from the added list with a new story. |

No FIX items were listed in docs/triage/s50.json.

## For the physician

- Ids from the added list, not the original triage: shock-39, shock-40, shock-43, asthma-copd-26, 28, 35, 36, 38, 41, 42, 43, 45, and burns-16, 19, 21, 24, 27, 28, 31, 32, 33. The triage had shock-40 as HOLD and shock-39 and shock-43 as READY. They were rebuilt because the brief says the added list wins.
- The Alaska burn resuscitation guideline (2021) has no stable public URL in the citation. The text was read from a downloaded copy. Please confirm the link before release. Its advice on urine output, avoiding boluses and not catching up on fluid is used in several burns items.
- burns-31 q4 uses the Alaska point that early hypotension in a burn suggests another cause, then keys eFAST. The eFAST step is standard trauma practice and is not quoted from the burn guideline.
- burns-31 q2 relies on the Canadian C-spine rule to show he needs imaging. The choice of CT over plain films is usual practice, not from the rule itself.
- burns-27 keys no tetanus prophylaxis after a booster 2 years ago. Please confirm against the Canadian Immunization Guide.
- shock-28 keys hyperbaric referral for venous air embolism, supported by two reviews (Gordy 2013, Mirski 2007) rather than a guideline.
- shock-27 (Shoshin beriberi) and shock-39 (trazodone) rest on a review and a case report. There is no guideline for either.
- shock-23 cites the IDSA AMR guidance as a web page, not a journal article.
- shock-47 cites the GTFCC field manual web page. The year on that page could not be confirmed.
- shock-29 keys O RhD positive red cells for a 79-year-old woman, per the CBS massive hemorrhage chapter. Please confirm this matches your local blood bank policy.
- Several asthma-copd rebuilds key NIV decisions. The set now tests when to start NIV, when not to, and when to move to intubation, so review them together for balance.

## Review: s50

Independent review of the 19 rebuilt s50 SAMPs, lens A and lens B together. Scope was src/samps/s50/ only. Every SAMP stays reviewed: false. No signed-off SAMP was touched.

Checks after the fixes: SAMP_BATCH=s50 vitest (samps and samp-quality) 683 passed. npx tsc --noEmit -p . clean. SAMP_BATCH=s49 samps test still passes.

### Batch-wide defect

The rebuilds regressed the adult sepsis source. The earlier s50 lens A review had moved shock-22, 23 and 42 to the 2026 Surviving Sepsis guideline (Prescott et al., Crit Care Med 2026). The rebuilt shock-22, 23, 24, 25, 36 and 38 cited the 2021 guideline again, and shock-33 and 43 cited the 2020 pediatric guideline. Several explanations quoted 2021 wording that the 2026 guideline changed: steroids only at norepinephrine 0.25 mcg/kg/minute for 4 hours (2026: IV corticosteroids for septic shock, no threshold), albumin after large crystalloid volumes (2026: crystalloid alone over supplemental albumin), and a named dobutamine or epinephrine choice with a statement against levosimendan (2026: inotropes over no inotropes). All eight SAMPs now cite the 2026 adult or pediatric guideline, and the explanations match its wording.

### Collision: shock-28 and seizures-41

shock-28 and seizures-41 (s49) told the same story. Both had a right internal jugular central line pulled while the patient sat upright in a chair after pneumonia, then a gasp and confusion seconds later. shock-28 q4 keyed hyperbaric oxygen for a new left-sided deficit from air reaching the brain, which is the seizures-41 case itself (seizures-41 q3 names hyperbaric oxygen as the definitive treatment). Hyperbaric oxygen for arterial gas embolism is also keyed in environmental-11 (s09). I keep seizures-41 and changed only shock-28. sob-47 (s51, G6PD hemolysis after fava beans) does not overlap either one.

shock-28 is re-rebuilt. New story: a trauma patient receiving uncrossmatched red cells by pressure bag. The bag runs dry and pushes air into his vein. Keys: venous air embolism (distractors hemorrhage, tension pneumothorax, fat embolism, transfusion anaphylaxis), echogenic foci and a dilated right ventricle (menu), left lateral head-down position, then aspiration of air through his subclavian central catheter. There is no hyperbaric or cerebral air item. Key features are unchanged (5, 6, 5, 5). A second check should follow.

### Verdicts

| id | verdict | what changed |
| --- | --- | --- |
| shock-22 | fixed | SSC 2026 citation. q1 now says 2026 prefers crystalloid alone and albumin only after large volumes, with no isotonic crystalloid offered (key unchanged). q2 says "escalating doses", with the numbers given as usual practice. q3 no longer credits the guideline with naming dobutamine or rejecting levosimendan. It now says 2026 suggests an inotrope, dobutamine is the usual first choice, levosimendan is not marketed in Canada and gave no benefit in the LeoPARDS trial. q4 no longer depends on the 2021 threshold. |
| shock-23 | fixed | q1: the claim that IDSA lists piperacillin-tazobactam "only in patients who are not critically ill" was false. IDSA 2026 lists it as an alternative for ESBL complicated UTI. It prefers TMP-SMX or a fluoroquinolone when susceptible, a carbapenem otherwise, and meropenem or imipenem over ertapenem when critically ill. Explanation rewritten and IDSA citation updated to the 2026 Clin Infect Dis guidance. q3: the peripheral-start teaching and the "After a central line is placed" distractor repeated infectious-diseases-27 q2 (keyed "Norepinephrine by peripheral IV now"). That distractor is now "After 1 hour of urine output", and the explanation teaches early norepinephrine alongside fluid (CENSER), with the MAP arithmetic shown. q2 uses the 2026 source-control wording (early, ideally within 6 hours). SSC 2026 citation. |
| shock-24 | fixed | SSC 2026 citation. q1: the reason given against hydrocortisone quoted the old norepinephrine threshold, and the MRSA reason was attributed to the guideline. Both rewritten from facts in the stem. q2 glucose threshold in both units. q4: de-escalation is now a 2026 "recommend". |
| shock-25 | fixed | SSC 2026 citation. q4 (empiric antibiotics after the Gram stain) was mapped to key feature 8. It tests antibiotic adjustment after reassessment, so it is now key feature 4. Batch coverage still passes. |
| shock-27 | pass | Pereira review confirmed: parenteral thiamine 100 to 300 mg a day for Shoshin, and dilution in saline without glucose. |
| shock-28 | re-rebuilt | See the collision section above. |
| shock-29 | pass | CBS chapter 11 confirmed: limit crystalloid to 1 L, O RhD negative kept for females of childbearing age and children. |
| shock-30 | pass | NICE CG174 (20 to 25 mL/kg/day for older or frail patients) and Wang 2025 (random urine sodium, over 1 500 mL/day, hypotonic fluid 0.5 to 1 L/day) confirmed. |
| shock-33 | fixed | q2 keyed hypotension as a systolic pressure below 60 mmHg at age 2, from the 2020 pediatric sepsis guideline, which has now been replaced. It also conflicted with the rest of the bank (anaphylaxis s23, multiple-trauma s14), which teaches 70 + (2 x age). q2 now keys 74 mmHg, and options and explanation were rebuilt. Source: Sampson 2006. q1 explanation now uses the 2026 pediatric markers of cardiac output in place of the WHO criteria. Citation updated to 2026. |
| shock-35 | pass | SMFM 2026 checklist confirmed on each point: RV dysfunction, avoiding fluid overload, blood products over crystalloid, cryoprecipitate over plasma, and onset within 30 minutes of the placenta. |
| shock-36 | fixed | SSC 2026 citation. The q2 reason against hydrocortisone ("for high vasopressor needs") reworded. |
| shock-37 | pass | Protamine 1 mg per mg of enoxaparin within 8 hours, maximum 50 mg, recomputed as 70 mg capped to 50 mg. |
| shock-38 | fixed | SSC 2026 citation. The q1 MRSA wording now matches the 2026 statement on empiric cover for high-risk resistant organisms, and q2 uses the 2026 source-control wording. |
| shock-39 | pass | Camacho 2019 confirmed: peripheral norepinephrine, and IV magnesium advised for a prolonged QT. 30 x 100 mg = 3 g. |
| shock-40 | pass | Joshi 2025 confirmed: 148 cases, sentinel bleed in 43.9%, median 79.5 days after tracheostomy. |
| shock-41 | pass | SMFM CS 47 and ACOG CO 723 support each key. |
| shock-43 | fixed | q3 kept "hydrocortisone 50 mg IV" as a distractor. The cited review also allows 50 to 100 mg/m2 (about 50 to 100 mg at 28 kg), and the Endocrine Society school-age dose is 50 mg, so the distractor was defensible. It is now "fludrocortisone 0.1 mg PO". q1 cites the 2026 pediatric guideline, which confirms titration to heart rate, refill and urine output. |
| shock-45 | pass | Lavonas 2011 algorithm: 8 to 12 vials for shock, repeat the dose if control is not reached, no prophylactic fasciotomy. |
| shock-47 | pass | Plan C recomputed: 30 + 70 = 100 mL/kg x 70 kg = 7 000 mL. |

Counts: 8 pass, 10 fixed, 1 re-rebuilt.

### Overlap search (whole tree, uncommitted files included)

- shock-28 and seizures-41: resolved on the s50 side, as described above.
- shock-23 q3 and infectious-diseases-27 q2: peripheral norepinephrine. Distractor and explanation refocused, as described above.
- shock-25 and anaphylaxis-17 (s23): both are reactions during a transfusion, but the keyed diagnoses differ (bacterial contamination with fever versus anaphylaxis without fever). The two SAMPs complement each other. No change.
- shock-43 and ems-31 (s35): both involve a child with adrenal insufficiency. ems-31 tests the Ontario paramedic IM directive at 2 mg/kg, and shock-43 tests ED IV dosing by age band. They are related, not copies.
- shock-29 q3 and multiple-trauma-18 (s45): both key O RhD positive red cells. shock-29 applies it to an older woman, which is a distinct point.
- shock-22 and lacerations-12 (s13) share a detail ("splenectomy after a car crash 20 years ago") but tell different stories.
- No overlap was found with the signed-off s16 shock or s18 tox SAMPs.

### For the physician

- Two keyed decisions are mirror images within the batch: shock-23 q4 gives bicarbonate at pH 7.14 with stage 3 AKI, and shock-24 q3 withholds it at pH 7.26 with normal kidneys. I kept both because together they teach the full rule, but you may want to replace one.
- shock-25 q3 and shock-36 q3 both key norepinephrine first line, with near-identical distractors and explanations.
- shock-22 q1 keys 5% albumin after 4 L. Under SSC 2026 this is a weak "may be appropriate" remark, and the key holds only because no isotonic crystalloid is offered.
- shock-22 q3: "levosimendan is not marketed in Canada" is from my own knowledge. Please confirm.
- shock-28 q4 (aspiration through a central catheter) rests on the Gordy and Mirski reviews. Aspiration works best with a catheter tip near the right atrium, which the update states.
- shock-37: enoxaparin 70 mg twice daily with a creatinine clearance of 24 mL/minute is an unadjusted dose, which plausibly explains the bleed. The explanation does not mention this.
- shock-40 q2: the cuff overinflation rate (about 71%) and bronchoscopy yield (about 31%) could not be checked in the full text of Joshi 2025.
- shock-33 q3: the point that the spleen releases trapped cells, so red cells should be given in small aliquots, is standard teaching. Zayed 2025 reports small aliquots but not the mechanism.
- shock-27: Pereira et al. was published online in August 2025. The citation gives 2026, which may be the issue year.
- shock-30: the key-feature 2 mapping for q1 to q3 (maintenance, losses, urine sodium) is loose. None of them asks for a deficit estimate.

### Sources verified

- SSC adult 2026: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026 and https://www.guidelinecentral.com/insights/mar-2026-sccmesicm-sepsis-guideline-spotlight/
- SSC pediatric 2026: https://www.guidelinecentral.com/guideline/5149074/ (PMID 41870559)
- IDSA 2026 AMR guidance: https://www.idsociety.org/practice-guideline/amr-guidance/
- Sampson 2006 low systolic BP definition: https://www.jacionline.org/article/s0091-6749(05)02723-5/fulltext
- SMFM AFE checklist 2026: https://pmc.ncbi.nlm.nih.gov/articles/PMC13565333
- Gordy 2013: https://pmc.ncbi.nlm.nih.gov/articles/PMC3665124/
- Camacho 2019: https://pmc.ncbi.nlm.nih.gov/articles/PMC6699354/
- Pereira beriberi review: https://karger.com/article/doi/10.1159/000547719
- Camtosun 2025: https://jcrpe.org/articles/doi/jcrpe.galenos.2024.2024-6-12-S
- Zayed 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC12400761/
- Wang 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC11842286/
- CBS chapter 11: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion
- Joshi 2025: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1002/ohn.1333

## Second check: s50

Second, independent look at the items the first s50 review changed without a second reviewer. Scope was src/samps/s50/ only. Every SAMP stays reviewed: false.

Checks after the fixes: SAMP_BATCH=s50 vitest (samps and samp-quality) 683 passed. npx tsc --noEmit -p . clean.

### Items

| item | verdict | notes |
| --- | --- | --- |
| shock-28 (re-rebuilt) | pass | Gordy 2013 (PMC3665124, opened) supports the treatment steps word for word: stop air entry, aspirate through a central line, Trendelenburg with left lateral decubitus (Durant). It also supports the millwheel murmur and Doppler as a sensitive way to detect intracardiac air. Both DOIs are real (Gordy 10.4103/2229-5151.109428, Mirski 10.1097/00000542-200701000-00026). Distractors hold, and 12 to 72 hours for fat embolism is right. Whole-tree search: no other SAMP keys venous air embolism, Durant positioning or catheter aspiration. seizures-41 is now carotid hyperperfusion. environmental-11 (s09) and environmental s36 key arterial gas embolism in divers. sob-47 is G6PD hemolysis. multiple-trauma has no air embolism item. arrhythmia (s24) uses "Air embolism from the IV" only as a distractor. |
| shock-33 q2 | pass | 70 + (2 x age) for ages 1 to 10 is the Sampson 2006 and PALS definition, so 74 mmHg at 2 years is right. The 2026 pediatric guideline does not set its own systolic threshold (it found insufficient evidence to target the 5th or 50th percentile MAP), so Sampson is a fair source. The distractor arithmetic (66, 80 at 5 years, 86 at 8 years, 90 from 11 years) checks out. The wording "marks the threshold for hypotension" matches a "below X is low" definition. |
| SSC 2026 switch | fixed | The guideline exists: Prescott HC et al., Crit Care Med 2026, doi 10.1097/CCM.0000000000007075 (also Intensive Care Med 2026, doi 10.1007/s00134-026-08361-1). Pediatric: Weiss SL et al., Intensive Care Med 2026, doi 10.1007/s00134-026-08360-2, PMID 41870559. Confirmed from the SCCM recommendation table: IV corticosteroids for septic shock with no vasopressor threshold. Crystalloids alone over supplemental albumin, with albumin possibly appropriate after large crystalloid volumes. Inotropes over no inotropes. But the first review was wrong on one point. The 2026 table still suggests adding dobutamine to norepinephrine or using epinephrine alone, and still suggests against levosimendan. See the fixes below. |
| shock-22 q1 | pass | Still a single best answer. Every other option is a hypotonic, hypertonic or starch fluid, and the 2026 remark supports albumin after large crystalloid volumes. |
| shock-23 q1 and q3 | fixed | IDSA 2026 is real (Tamma PD et al., Clin Infect Dis 2026, doi 10.1093/cid/ciag481, posted July 30, 2026). The first review's reason for rewriting q1 was wrong. Question 1.4 of the guidance says the panel suggests piperacillin-tazobactam as an alternative for ESBL cUTI only in patients who are not critically ill and who have no bacteremia, and does not suggest it when the patient is critically ill. The rest of the q1 wording matches: TMP-SMX or a fluoroquinolone when susceptible, a carbapenem otherwise, meropenem or imipenem over ertapenem when critically ill, and aminoglycosides as alternatives. CENSER (Permpikul 2019, doi 10.1164/rccm.201806-1034OC) is correct as stated: shock control at 6 hours 76.1% versus 48.4%, cardiogenic pulmonary edema 14.4% versus 27.7%, new arrhythmia 11% versus 20%. MAP (80 + 68) / 3 = 49 and 30 mL/kg x 90 kg = 2 700 mL are both right. |

### Defects fixed

- shock-22 q2: "in practice it is often added at 0.25 to 0.5 mcg/kg/minute" read as a vasopressin dose in the wrong units. It now says vasopressin is usually added once norepinephrine reaches 0.25 to 0.5 mcg/kg/minute, at a fixed 0.03 units/minute.
- shock-22 q3: the explanation now says what the 2026 guideline actually says. It suggests an inotrope over none, and specifically dobutamine added to norepinephrine or epinephrine alone. It suggests against levosimendan. The unverified "not marketed in Canada" claim was removed.
- shock-23 q1: the piperacillin-tazobactam reason is back to the IDSA 2026 wording (not critically ill and no bacteremia), which is the real reason it is wrong for a patient in septic shock. "Gentamicin is an alternative for pyelonephritis" now reads "aminoglycosides such as gentamicin are also alternatives", which matches the guidance.
- shock-23 q3: the distractor "Only if MAP stays below 50 mmHg" was arguably correct, because his MAP is already 49. It is now "Only if MAP falls below 40 mmHg", and the explanation was changed to match.
- shock-24 q1 and shock-38 q2: "the least invasive method that works" was credited to the guideline. The 2026 source control statement says only "early, ideally within 6 hr". The phrase is kept, but the guideline is no longer credited with it.
- shock-25 q3 and shock-36 q2: "recommends norepinephrine over dopamine, vasopressin and other vasopressors" overstated the guideline. 2026 recommends it over dopamine (strong) and suggests it over vasopressin (conditional). Both now say so.

### Still citing Surviving Sepsis 2021 elsewhere (not edited, outside s50)

Signed off: cqi-04, loc-11, delirium-agitation-08, infectious-diseases-01, infectious-diseases-07, multiple-patients-07, multiple-patients-09, shock-03.
Not signed off: abdominal-pain-44, critical-appraisal-24, loc-23, environmental-17, environmental-38, first-trimester-bleeding-22, infectious-diseases-27, infectious-diseases-28, infectious-diseases-32, pulmonary-edema-34.

## Review: s25, s26

Independent review of the 20 rebuilds in s25 (asthma-copd) and s26 (burns). Both lenses (clinical truth and internal consistency) were applied, with bank-wide overlap checks against the whole working tree, including the signed-off s04 asthma-copd and burns and the s17 and s02 items that carry an asthma-copd tag. All SAMPs stay reviewed: false. No signed-off SAMP was edited.

Sources opened for this review: GOLD 2026 report v1.3 (full PDF), GINA 2026 strategy report (full PDF), BTS/ICS 2016 hypercapnic respiratory failure guideline (PMC4800170), Alaska burn resuscitation guideline 2021 (full PDF), TREKK pediatric thermal burns v2.0 2025, ABA guidelines for burn patient referral (web page), Canadian Immunization Guide tetanus chapter (updated June 2026), and the Canadian CT Head Rule (PMID 11356436).

### Disagreement: asthma-copd-33 and the Rome criteria

Both sides are partly right, and the two sources disagree.

- The original Rome proposal (Celli 2021, AJRCCM) grades severe only on hypercapnia with acidosis, a PaCO2 above 45 mmHg with a pH below 7.35. It places hypoxemia with a PaO2 of 60 mmHg or less, without acidosis, in the moderate grade. Validation papers reproduce this (for example Reumkens 2023, ERJ Open Res, PMC10204729).
- GOLD 2026 Figure 4.2, as printed in the report (page 94), lists "PaO2 ≤ 60 mmHg and/or hypercapnia and acidosis" under severe. The writer quoted GOLD correctly. GOLD's figure differs from the primary proposal it cites.

Decision. The asthma-copd-33 explanation stated as fact that severe requires a PaO2 of 60 mmHg or less, or hypercapnia with acidosis. That is wrong for the Rome proposal the question names, so the text was fixed. The key (moderate) holds under both versions, because his PaO2 is 62 mmHg and his pH is 7.37. The explanation now states both versions and shows that he is not severe under either.

asthma-copd-41 no longer has any Rome text because it was rebuilt as an asthma case, so nothing was needed there. The same problem was live in asthma-copd-45, which keyed severe on a PaO2 of 54 mmHg alone. That is severe under GOLD's figure but moderate under the Rome proposal. Under SAMP_SPEC section 9, a keyed threshold must hold under every current reference, so this was a defect (see below).

### Verdicts

| id | verdict | what changed |
| --- | --- | --- |
| asthma-copd-19 | fixed | q4 keyed prednisone 40 mg for 5 days with the same prompt and distractors as asthma-copd-38 q3 in the same batch. Replaced with a new KF6 discharge question: add an ICS to a LABA plus LAMA after a second exacerbation with eosinophils of 0.40 x 10^9/L (GOLD 2026). q1 explanation said he had no crackles, which the stem never states. It now uses the leg swelling the stem gives, and it adds GOLD's point that about three quarters of post-valve pneumothoraces occur within 72 hours. |
| asthma-copd-26 | fixed | q3 (intubate when pH falls to 7.12 and GCS to 7 on NIV) repeated the sob-05 arc: NIV, then a drowsy patient with worse acidosis, then intubation. That arc is the reason the old asthma-copd-41 was rejected, and asthma-copd-15 teaches it too. Replaced with a KF7 question: raise the IPAP when tidal volume stays low once the upper airway is open (BTS/ICS troubleshooting table and OHS pressures). The q1 claim about high-flow nasal oxygen was not in the cited BTS/ICS guideline, so it was reworded. GOLD was no longer cited and was removed from sources. The option "Lower the EPAP back to 5" gave away the q2 key and was reworded. |
| asthma-copd-28 | fixed (minor) | The q4 update said "On the ward", which gave away the q2 key (admit). Now "Later that day". GINA facts checked: 1-hour status, final PEF below 50%, more than 8 actuations, older age, past admission. PEF 160/380 is 42%. Methylprednisolone 40 mg IV is the prednisone 50 mg equivalent. |
| asthma-copd-35 | pass | GINA claims verified, including that nebulized SABA use is a risk factor for asthma death. One q1 explanation phrase that pointed to the q2 answer was removed. Explanations appear only after marking, so this was not a live cue. |
| asthma-copd-36 | fixed | q2 (prednisone 50 mg PO now) was the same keyed decision as asthma-copd-35 q2. It was replaced with a new KF6 question placed as q4: an ICS-containing inhaler at discharge for features of both asthma and COPD, never a LABA or LAMA without an ICS (GINA 2026 section 7). Old q3 (SpO2 target) and q4 (NIV) moved to q2 and q3. q1 now cites GOLD, so that every listed source is cited. |
| asthma-copd-38 | fixed | The q1 explanation said "Fever is not one of the criteria". GOLD 2026 now lists fever among the qualifying symptoms (at least two of dyspnea, fever, sputum volume and purulence, with purulence one of them). The sentence was rewritten. Key unchanged. |
| asthma-copd-41 | fixed | q2 and q3 repeated the keyed decisions of signed-off asthma-copd-09 and sob-04 and of airway-10: intubate after maximal therapy, then a low rate with a long expiratory time. q3 was replaced with a new decision: no ventilator change, accept pH 7.22 as permissive hypercapnia (BTS/ICS recommendation 15). q2 swapped aminophylline for a naloxone distractor tied to the heroin story. The intubation key in q2 is kept. |
| asthma-copd-42 | fixed | q3 (a calmer patient with a falling respiratory rate is tiring) was the teaching point of signed-off asthma-copd-15 and asthma-copd-09, and the reason the old 42 was rejected. It was replaced with a new KF7 question: add a blood gas for pCO2 when PEF stays below 50% after an hour (GINA 2026). PEF 190/520 is 37%. |
| asthma-copd-43 | re-rebuilt (q2, q3) | q2 (prednisone 50 mg daily for 5 days) matched asthma-copd-21 q4 in prompt and key. q3 (follow-up in 2 to 7 days) matched asthma-copd-32 q3. Both are in the same batch. The q3 explanation also misquoted GINA Box 3-8 on referral. New q2: stop a second 5-day course without a taper (GINA). New q3: MART reliever instructions, one inhalation as needed with a maximum of 12 a day (GINA practice points). q1 kept. |
| asthma-copd-45 | fixed, key basis changed | Keyed severe on a PaO2 of 54 mmHg with a normal pH, which holds only under the GOLD figure. The first gas is now pH 7.33 and PaCO2 52 mmHg, which is severe under both versions. The q1 explanation was rewritten, and "Not an exacerbation, pH normal" was replaced with "Life-threatening exacerbation". The q3 explanation now says the acidosis cleared with an hour of medical therapy, so she does not meet the NIV threshold. The key letter (severe) is unchanged. |
| asthma-copd-33 (FIX item) | fixed | Rome explanation corrected, as described above. |
| burns-16 | fixed | q2 keyed 38 mL/hour for a 75 kg adult, which is identical to burns-23 q4. Weight changed to 64 kg and q1 and q2 recalculated: 2 x 64 x 24 = 3 072 mL, and a urine target of 32 mL/hour. Arrival moved from 2 hours to 45 minutes after the burn, so it no longer mirrors burns-02, the SAMP it was rebuilt from. The q2 claim about an "electrical injury goal" was removed. |
| burns-19 | re-rebuilt | The new story (a family using a charcoal barbecue indoors during an Ontario ice storm, carbon monoxide, co-oximetry, pulse oximetry misreading, screening the family) copied tox-12 almost exactly and repeated ems-15, headache-12 and loc-08. The SAMP was rebuilt as a cook who falls with a hand in a deep fryer. The questions: remove the ring before edema (KF1), a padded non-circumferential splint for the distal radius fracture under the burn (KF1), burn centre consultation for a deep hand burn with trauma (KF5), and arm care after splinting (KF1 menu). Sources are the Alaska guideline and ABA referral. Needs a second check. |
| burns-21 | fixed | q2 (100% oxygen for carboxyhemoglobin) was the same keyed decision as burns-38 q3. It was replaced with a new KF1 question: CT of the head for persistent confusion after a fall with a scalp hematoma. The Canadian CT Head Rule gives GCS below 15 at 2 hours as high risk. The CCHR citation was added and the timeline set in the update. q4 now cites the Alaska guideline (adult) instead of TREKK (pediatric), and TREKK was removed from sources. |
| burns-24 | pass | TREKK claims verified. There is mild conceptual overlap with burns-14 q4 (avoid overcooling), but the decision and story differ. |
| burns-25 | pass (minor edit) | Tidal volume 6 x 73 = 438 mL and 2 x 90 x 45 = 8 100 mL checked. Albumin and vasopressor statements match ABA 2024. "Weather delayed" was changed to "committed to another call" to reduce the resemblance to burns-13. |
| burns-27 | fixed | The tetanus key checked against the Canadian Immunization Guide (June 2026): 3 or more doses and under 5 years since the last dose means no vaccine and no TIg for any wound. The key is correct. The explanation and citation now use the CIG instead of TREKK, and the stem now says the childhood series is complete. The q1 prompt ("features ... call for burn centre consultation") gave away the q3 key in mock mode, where all questions are shown, so it was made neutral. |
| burns-28 | pass | TREKK discharge, pattern and dressing claims verified. Ibuprofen 10 mg/kg x 20 kg = 200 mg. |
| burns-31 | fixed | q4 (hypotension after a fall, eFAST for splenic bleeding) repeated burns-22 q1 in the same batch. It was replaced with the Alaska rule for early hypotension in a burn: a single 250 to 500 mL bolus while the cause is sought. The q3 update no longer names CT, which was the q2 key. Rates checked: 2 x 80 x 27 = 4 320 mL, and 2 160 / 8 = 270 mL/hour. |
| burns-32 | pass | TREKK 2 mL/kg for age 13 and older, half due by 22:00, and 0.5 x 45 = 23 mL/hour all verified. |
| burns-33 | fixed (minor) | The q1 prompt gave away the q4 key (burn centre consultation). It was made neutral. Everything else was verified against ABA referral and Alaska. |

Alaska guideline URL added to every alaska source in s26: https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf. This answers the writer's request to confirm the link.

### Key changes

- asthma-copd-19 q4: the question was replaced. The key was prednisone 40 mg PO daily for 5 days. It is now "Add an inhaled corticosteroid".
- asthma-copd-26 q3: the question was replaced. The key was endotracheal intubation. It is now "Increase the IPAP setting".
- asthma-copd-36: q2 (prednisone 50 mg) was removed. New q4 keys budesonide-formoterol twice daily. Old q3 and q4 were renumbered, with their keys unchanged.
- asthma-copd-41 q2: key unchanged (prepare for intubation), now at index 4. q3 was replaced. The key was a low rate with a long expiratory time. It is now "No change, accept the hypercapnia".
- asthma-copd-42 q3: the question was replaced. The key was tiring with rising CO2. It is now "Blood gas for pCO2".
- asthma-copd-43 q2 and q3: both replaced. The keys were prednisone 50 mg for 5 days and follow-up in 2 to 7 days. They are now "Stop after day 5 without a taper" and "One extra inhalation as needed for symptoms".
- asthma-copd-45 q1: the key is still severe. It now rests on hypercapnia with acidosis, not on a PaO2 of 54 mmHg alone.
- burns-19: all four questions are new.
- burns-21 q2: the question was replaced. The key was 100% oxygen. It is now "Noncontrast CT of the head".
- burns-31 q4: the question was replaced. The key was eFAST. It is now "Ringer's lactate 500 mL bolus".

### Defects found (all fixed)

- Factual errors in explanations: asthma-copd-33 (Rome severe includes PaO2 60 or less), asthma-copd-38 (fever not a GOLD criterion), asthma-copd-43 (GINA referral indication misquoted), asthma-copd-19 (crackles not in the stem).
- A keyed threshold that holds under only one reference: asthma-copd-45.
- A key repeated in the same batch: asthma-copd-19 q4 and 38 q3, 35 q2 and 36 q2, 43 q2 and 21 q4, 43 q3 and 32 q3, burns-16 q2 and burns-23 q4, burns-21 q2 and burns-38 q3, burns-31 q4 and burns-22 q1.
- A keyed teaching point copied from a signed-off or bank SAMP: asthma-copd-26 q3 (sob-05 arc), asthma-copd-41 q3 (asthma-copd-09, sob-04, airway-10), asthma-copd-42 q3 (asthma-copd-15, asthma-copd-09), and burns-19 as a whole (tox-12, ems-15).
- Cueing in mock mode: burns-27 q1 prompt, burns-33 q1 prompt, burns-31 q3 update, asthma-copd-28 q4 update, and asthma-copd-26 q3 option wording.
- Wrong source or a source that did not support the claim: burns-27 q2 (now CIG), burns-21 q4 (now Alaska), and the asthma-copd-26 q1 HFNO line.

### NIV-keyed rebuilds, checked together

After the fixes, each NIV item tests a different decision. asthma-copd-19 tests draining a pneumothorax before NIV and morphine for mask tolerance. asthma-copd-26 tests NIV at pH 7.22 and then EPAP and IPAP troubleshooting in obesity hypoventilation. asthma-copd-36 tests NIV in a patient with asthma and COPD features, by BTS/ICS recommendation 40. asthma-copd-41 tests no NIV with sedation in acute asthma. asthma-copd-45 tests no NIV once the acidosis clears with medical therapy. Only asthma-copd-36 q3 still has a surface twin, asthma-copd-31 q3 (NIV at pH 7.30 in an alert patient), which is not a rebuild. Its asthma and COPD reasoning is different.

### For the physician

- Rome versus GOLD. GOLD 2026 Figure 4.2 lists PaO2 60 mmHg or less under severe. The Rome proposal it cites does not. Items now key only what both agree on. Please decide which version the bank should teach from now on.
- Burn fluid titration conflicts across the bank. burns-16 q3 keys a 10% rate increase (Alaska 2021). Signed-off burns-02 keys an increase of 20 to 30%, and burns-13 keys a decrease of 20 to 30%. Please choose one standard.
- burns-27 q2 (tetanus) is mapped to burns KF1, which is about linked trauma and toxic exposures. The mapping is weak, and I kept it because the rebuild rules keep each question's key feature.
- Inherent "decide, then do" cues remain where the next update must describe the step: asthma-copd-19 q3 (drain placed), asthma-copd-41 q3 (intubated), burns-25 q2 (intubated). This matches house pattern in signed-off items such as asthma-copd-09 and airway-10.
- The asthma and COPD KF5 to KF8 space is saturated across about 50 SAMPs. Core keys such as salbutamol by spacer, prednisone 50 mg and a 2 to 7 day follow-up recur in written-in form in s04. I fixed exact duplicates and copied teaching points, not every recurrence of a core decision.
- burns-19 and the replaced questions in asthma-copd-43 need the planned second check. They contain new scenarios and new keys.

### Summary

20 rebuilds reviewed, plus the asthma-copd-33 FIX item. Verdicts: pass 5 (asthma-copd-35, burns-24, burns-25, burns-28, burns-32), fixed 13 (asthma-copd-19, 26, 28, 36, 38, 41, 42, 45 and burns-16, 21, 27, 31, 33), re-rebuilt 2 (burns-19 whole SAMP, asthma-copd-43 q2 and q3). asthma-copd-33 was fixed. Checks: SAMP_BATCH=s25 vitest 675 passed, SAMP_BATCH=s26 vitest 516 passed, LAUNCH_GATE=1 samps.test.ts 4503 passed, and npx tsc --noEmit -p . clean.

## Second check: s25, s26

Second, independent look at the four items in s25 and s26 that the first review changed without a second reviewer. Scope was src/samps/s25/ and src/samps/s26/ only. Every SAMP stays reviewed: false. No signed-off SAMP was edited.

Sources opened: ABA Guidelines for Burn Patient Referral (web page, 2025), Alaska burn guideline 2021 (full PDF), GINA 2026 (full PDF), GOLD 2026 (full PDF, Figure 4.2 and the high-flow nasal therapy section), BTS/ICS 2016 (PMC4800170).

Checks after the fixes: SAMP_BATCH=s25 vitest (samps and samp-quality) 675 passed. SAMP_BATCH=s26 vitest 516 passed. npx tsc --noEmit -p . clean.

### Items

| item | verdict | notes |
| --- | --- | --- |
| burns-19 (re-rebuilt) | fixed | Alaska claims all verified in the PDF: remove clothing and jewellery in and distal to the burn, check circulation, motor function and sensation, elevate burned limbs above the heart, reassess splints so swelling does not make them constrictive, do not wrap circumferentially, debride blisters over 2 cm or over a joint, silver sulfadiazine for full thickness, antibiotics unnecessary. ABA 2025 lists deep partial hand burns and concomitant traumatic injuries under immediate consultation. q1, q2 and q4 hold. Overlap search: lacerations-33 (s43) keys cutting off a ring, but after a ring avulsion, a different story and topic. s06 msk warns against a circumferential cast for a swollen calcaneal fracture, a general fracture point without a burn. No other SAMP combines a burn with a fracture under it. Defect: q3 repeated burns-33 q4 in the same batch. Both asked "Which of the following is the most appropriate disposition for him?", both keyed burn centre consultation for a deep partial hand burn, and both used family physician and plastic surgery clinic distractors. Signed-off burns (s04) and the paediatric burns item in s26 also key referral for a hand burn. Fixed: the burn is now described as superficial partial thickness (brisk blanching, very painful), and q3 keys the concomitant fracture as the reason for immediate consultation. A small partial burn alone would sit in the ABA "consultation recommendation" column, so the new distractor "Fax a routine burn clinic referral" tests that distinction. The update adds the orthopaedic offer of fracture clinic in 1 week. KF5 kept. |
| asthma-copd-43 q2, q3 | pass | GINA 2026 verified: tapering not needed if OCS are taken for less than 2 weeks, and no benefit from tapering in the short term or over several weeks (refs 833, 834). MART with budesonide-formoterol 200/6 is one inhalation twice daily plus one as needed, and care is sought above 12 total inhalations in 24 hours. Arithmetic in the distractor: 2 x 6 + 2 = 14, above 12. Overlap: no other SAMP in the bank keys "no taper" or MART reliever dosing. Taper options appear only as distractors (asthma-copd-21 q4, and a menu item in s25). s04 asthma-copd keys choosing MART, not how to use it. No MART or taper keys in s03, s17 or s51. Minor, not changed: the q2 explanation adds the two courses to 10 days, while GINA's 2-week rule refers to one continuous course. The key holds either way. |
| asthma-copd-45 | fixed (minor) | Gas recomputed: pH 7.33 with PaCO2 52 mmHg is hypercapnia with acidosis, so severe under both the Rome proposal and GOLD Figure 4.2. All five moderate-level criteria are met. The repeat gas (pH 7.36, PaCO2 47) no longer meets BTS/ICS recommendation 25 (pH below 7.35 and pCO2 above 6.5 kPa, 49 mmHg, persisting despite medical therapy), so the q3 key holds. SpO2 90% is inside 88 to 92%. Defect: the q3 explanation's high-flow nasal oxygen sentence is not in BTS/ICS, the q3 source. The first review removed the same unsupported claim from asthma-copd-26. It now credits GOLD 2026 (listed in this SAMP's sources), which describes HFNT for patients who stay hypoxemic on conventional oxygen or cannot tolerate NIV. The reason it is wrong for her is now stated: she is at target on 2 L/minute and improving. |
| asthma-copd-33 | pass | PaO2 62 mmHg (above 60) and pH 7.37 (no acidosis, PaCO2 49) mean moderate under the GOLD figure (severe needs PaO2 60 or less, or hypercapnia with acidosis) and under the Rome proposal (hypercapnia without acidosis is moderate). All five moderate thresholds are met. The explanation states both versions correctly. Note for the physician: SpO2 88% alongside PaO2 62 mmHg is somewhat discordant (PaO2 62 usually reads about 91 to 92%). This is within oximeter error, and the key rests on the gas, so it was not changed. |

### Defects fixed

- burns-19 q3: the same keyed decision, prompt and distractor pattern as burns-33 q4. Rewritten to key the concomitant fracture (ABA immediate consultation) against a routine referral for a small partial burn. The stem's burn depth changed to superficial partial to match.
- asthma-copd-45 q3: the high-flow nasal oxygen claim was attributed to BTS/ICS, which does not make it. It now credits GOLD 2026.
