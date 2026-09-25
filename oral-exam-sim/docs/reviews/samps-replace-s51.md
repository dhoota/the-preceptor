# SAMP replacement report: s51 (shortness of breath)

Label: s51. File: src/samps/s51/sob.ts. All 21 REJECT SAMPs in docs/triage/s51.json were rebuilt in place. sob-20 was rebuilt as well, after the bank-wide duplicate sweep matched it to pulmonary-edema-06 and gi-bleed-41 (scratchpad/rebuild-list.json). The triage file holds no FIX items. HOLD and READY SAMPs were not changed.

Each rebuilt SAMP keeps its id, topic, question count and the key feature of every question. Each moves to version 2 with reviewed: false and a new neutral title. All questions are single or menu. Every source was opened and checked, and every DOI was confirmed through Crossref or PubMed.

## How scenarios were chosen

Before writing, the whole bank (1 500 SAMPs, s01 to s53) was dumped and searched for each candidate story, including the related topics airway, asthma-copd, pulmonary-edema, dvt-pe, chest-pain, infectious-diseases, tox, environmental and pediatric-fever. Candidates dropped because the bank already holds them include Ludwig angina, laryngectomy and tracheostomy emergencies, inducible laryngeal obstruction, asthma in pregnancy, thyroid storm, rheumatic mitral stenosis in pregnancy, missed dialysis with hyperkalemia, chlorine inhalation, checkpoint myocarditis, hereditary angioedema, negative pressure pulmonary edema, laryngeal fracture, myxedema, euglycemic ketoacidosis and CKD with V/Q scanning for PE. PE diagnosis is the most crowded area, so the two rebuilt PE cases key decisions the bank lacked: the PEGeD thresholds and a negative CT in an intermediate probability patient.

## Rebuilt SAMPs

| Id | Old scenario | New scenario | Keyed decisions | Sources |
|---|---|---|---|---|
| sob-16 | Adult supraglottitis, nasendoscopy, awake intubation | Retropharyngeal hematoma after a minor neck blow in a woman on warfarin, INR 4.6 | Bulging dark posterior pharyngeal wall places it in the upper airway. Retropharyngeal hematoma. PCC 2 000 units with vitamin K while the airway team prepares | Eskander NEJM 2019. Akoglu Ear Nose Throat J 2008. NAC PCC recommendations 2022 |
| sob-17 | Hypertensive cardiogenic pulmonary edema, NIV, nitrate, intubation | Nonfatal pool drowning in a strong teenage swimmer with a past exertional faint | NIV by face mask. No antibiotic or steroid (menu, None). Observe a mildly symptomatic sibling 6 hours. ECG to look for an arrhythmic cause | WMS drowning guideline 2024 |
| sob-18 | School age asthma, PRAM, magnesium | Unimmunized 7-week-old with pertussis, apnea and cyanosis | Apnea with cyanosis marks severity. Azithromycin 44 mg daily for 5 days before the PCR result. Admit to a monitored bed. WBC 52 marks high risk of death | Desjardins CCDR 2018. Tiwari CDC MMWR 2005. Winter Clin Infect Dis 2015 |
| sob-20 | Anemia from an NSAID and DOAC upper GI bleed, transfuse one unit (near copy of pulmonary-edema-06 and gi-bleed-41) | Pheochromocytoma crisis with pulmonary edema after IV metoclopramide, in a woman with months of spells labelled panic attacks | Catecholamine crisis from a pheochromocytoma. Plasma free metanephrines. phentolamine 5 mg IV | Whitelaw Clin Endocrinol 2014. Lenders Endocrine Society 2014 |
| sob-21 | Myasthenic crisis after ciprofloxacin | Influenza pneumonia at 31 weeks gestation | PaCO2 40 is acute respiratory acidosis in pregnancy. Oseltamivir 75 mg twice daily now. Intubate when drowsy with worsening acidosis. Left uterine displacement for post-intubation hypotension | Soma-Pillay Cardiovasc J Afr 2016. AMMI Canada 2023. ERS/ATS NIV 2017 |
| sob-22 | Malignant tamponade | Hemidiaphragm paralysis from an interscalene block in a man with COPD and obesity | Right phrenic nerve block. Diaphragm ultrasound during a sniff. Upright position with controlled oxygen | El-Boghdadly Anesthesiology 2017. Urmey Anesth Analg 1991. BTS oxygen 2017 |
| sob-24 | Post hip arthroplasty PE, leg ultrasound, UFH | Exertional dyspnea after a long drive, department using PEGeD | Low C-PTP (Wells 1.5). D-dimer 820 excludes PE without imaging. New hemoptysis and gestalt raise Wells to 5.5, so CTPA. Dalteparin 18 000 units while CT is delayed | Kearon NEJM 2019. ESC PE 2019 |
| sob-25 | Retropharyngeal abscess at age 3 | Bacterial tracheitis after influenza in a 5-year-old who failed croup treatment | High fever with toxic look. Bacterial tracheitis. Chest radiograph for coexisting pneumonia. Intubation and suction | Al-Mutairi Paediatr Child Health 2004 |
| sob-27 | Secondary pneumothorax in COPD | Acute exacerbation of IPF | CT with pulmonary angiography to find the cause. Discuss the poor outcome of intubation and his wishes. PaO2/FiO2 of 70 | Collard AJRCCM 2016. Raghu ATS/ERS/JRS/ALAT 2011 |
| sob-29 | Benzocaine methemoglobinemia | Metformin-associated lactic acidosis after gastroenteritis and AKI | Metformin lactic acidosis. PaCO2 20 above Winter's range shows fatigue. Intermittent hemodialysis | Calello EXTRIP Crit Care Med 2015. Albert Ann Intern Med 1967 |
| sob-30 | Generator carbon monoxide | Tick paralysis in a 4-year-old in interior BC | Paradoxical breathing and weak cough mark respiratory threat. Remove the tick with fine tweezers. Observe with serial checks after removal | Brown Can Fam Physician 2022 |
| sob-32 | Post-intubation hypotension in asthma | ALS with pneumonia and an advance directive declining intubation | Bilevel NIV, not oxygen alone. Mechanical insufflation-exsufflation for a peak cough flow of 190. Repeat PaCO2 and pH to judge NIV | Shoesmith CMAJ 2020. BTS/ICS AHRF 2016 |
| sob-33 | Laryngeal tumour labelled COPD | Infectious mononucleosis with obstructing tonsils in a teenager | Stertor and inability to lie flat. Infectious mononucleosis. Dexamethasone IV | Eskander NEJM 2019. Luzuriaga NEJM 2010. Gomes Can Fam Physician 2023 |
| sob-36 | Rural STEMI with lysis | Hepatic hydrothorax in cirrhosis | Ascites crossing the diaphragm. Therapeutic thoracentesis. Repeat thoracentesis and TIPS referral, no chest tube | AASLD ascites guidance 2021 |
| sob-38 | Sickle cell acute chest syndrome | Immune checkpoint inhibitor pneumonitis on pembrolizumab | Checkpoint pneumonitis. Methylprednisolone 60 mg IV daily (1 mg/kg). Oxygen need defines severe grade | ASCO irAE guideline 2021 |
| sob-39 | Pneumocystis pneumonia in HIV | Diffuse alveolar hemorrhage from ANCA vasculitis | Hemoglobin fall of 36 g/L shows bleed size. Urinalysis for blood and casts. Pulse methylprednisolone, no plasma exchange | Lara Chest 2010. Chung ACR/VF 2021 |
| sob-40 | Pediatric myocarditis after diarrhea | Vaping-associated lung injury in a 17-year-old | Ask about vaping, including cannabis. Influenza and viral testing first. Admit for antibiotics and a corticosteroid | Jatlaoui MMWR 2019. Evans MMWR 2020 |
| sob-41 | Panic disorder versus PE after a flight | Pleuritic pain in new nephrotic syndrome | PE is the diagnosis to exclude. Wells 4.5. CTPA without D-dimer. Good quality negative CTPA ends PE testing | KDIGO glomerular diseases 2021. Thrombosis Canada PE diagnosis 2023. ESC PE 2019 |
| sob-42 | Post-thyroidectomy neck hematoma | Respiratory diphtheria in an unvaccinated returning traveller | Respiratory diphtheria. Antitoxin now through public health. Intubation with a surgical airway ready | Ontario diphtheria guide 2024. PHAC diphtheria 2023. CAFG 2021 |
| sob-44 | Opioid accumulation in a nursing home resident | Hypermagnesemia from magnesium laxatives in stage 4 CKD | Slow breathing with drowsiness. Hypermagnesemia. Calcium gluconate 1 g IV | Aal-Hamad Medicina 2023 |
| sob-45 | Transfusion-associated circulatory overload | Hantavirus pulmonary syndrome after cleaning a grain shed in Alberta | Hantavirus pulmonary syndrome. Small fluid boluses and a vasopressor. Focused cardiac ultrasound for worsening shock | Drebot CCDR 2015 |
| sob-47 | Peripartum cardiomyopathy | Venous air embolism after a patient pulls out his jugular line | Venous air embolism. Echogenic foci in the right heart. Left side down, head down, 100% oxygen | Mirski Anesthesiology 2007 |

## FIX items

None. docs/triage/s51.json lists only REJECT, HOLD and READY verdicts.

## Other changes

- Unused source constants left behind by the old SAMPs, including BARKUN from the old sob-20, were removed from sob.ts. No other SAMP in the file changed.
- Key positions across the 101 single questions in s51 are 19, 19, 23, 16 and 24. The key is the longest option in 32% of them.

## Checks

- SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 647 passed.
- npx tsc --noEmit -p .: no errors.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4 503 passed.

## For the physician

- sob-20 keys phentolamine as the alpha blocker for the crisis. Please confirm it is stocked in your hospital. The sources support alpha blockade first and a beta blocker only afterward.
- sob-16 rests on case literature for retropharyngeal hematoma, because no guideline covers it. The reversal dose follows the NAC sample INR-based schedule of 2 000 units for an INR of 3 to 5.
- sob-17 q2 is a menu question keyed None. Please confirm that no antibiotic or steroid is wanted for a drowning patient with crackles and pink frothy sputum.
- sob-18 q2 keys azithromycin before the PCR result. Erythromycin and clarithromycin were kept out of the options because CDC lists them as acceptable at 1 to 5 months.
- sob-21 q3 keys intubation over NIV in a drowsy woman at 31 weeks. The NIV guideline is cited for the principle that NIV needs an alert, cooperative patient, not for a pregnancy-specific rule.
- sob-24 states in the stem that the department uses PEGeD, so the 1 000 ng/mL threshold applies. His age-adjusted cut-off (630) would give a different answer, and the explanation says so.
- sob-27 cites the 2011 ATS/ERS/JRS/ALAT recommendation against mechanical ventilation for most patients with IPF. Later IPF guidelines did not revisit this question.
- sob-29 q2 uses Winter's formula. It is cited to the original 1967 paper.
- sob-36 q3 keys referral for TIPS for refractory hepatic hydrothorax. An indwelling pleural catheter, which AASLD allows with caution, was kept out of the options.
- sob-39 q3 keys pulse methylprednisolone. The ACR/VF guideline accepts pulse IV or high-dose oral glucocorticoids, so high-dose oral prednisone was kept out of the options.
- sob-40 cites CDC interim guidance because no Canadian guideline for vaping lung injury exists.
- sob-41 q4 relies on the ESC three level scale, where a Wells score of 4.5 is intermediate. Thrombosis Canada allows more testing when suspicion stays high after a negative CT, so a reviewer may want the pretest wording checked.
- sob-44 cites a 2023 narrative review for hypermagnesemia. The review's magnesium thresholds are in unusual units, so the SAMP relies only on the order in which signs appear and on IV calcium 1 g.
- sob-47 keys the left lateral head-down position with 100% oxygen. The evidence for positioning in venous air embolism is weak but it is standard advice.

## Review

Independent review of the 22 rebuilt SAMPs under the rebuild review brief. Lens A and Lens B were both applied, with a bank-wide overlap search by meaning over src/samps (s01 to s53). Every SAMP stays reviewed: false.

| Id | Verdict | What changed |
|---|---|---|
| sob-16 | pass | PCC 2 000 units for INR 4.6 matches the NAC sample schedule. No change. |
| sob-17 | fixed | q3 (observe a mildly symptomatic sibling 6 hours) repeated the keyed decision of pulmonary-edema-37 q2, and the WMS 6 hour window is written for wilderness settings. q4 (ECG for long QT in a swimmer with a past faint) repeated seizures-07 q2. Stem now describes hyperventilation before underwater lengths, and the past faint is removed. New q3 (KF4): drowsiness with vomiting into the mask shows NIV is no longer safe. New q4 (KF2): hypoxic blackout after hyperventilating. Boyd MMWR 2015 added. Title changed from one almost identical to pulmonary-edema-37. |
| sob-18 | pass | Desjardins figures (all apnea under 3 months, 92% admitted, 28% ICU) and Winter findings confirmed. Azithromycin 10 mg/kg is 44 mg. |
| sob-20 | pass | Whitelaw confirms that alpha blockade is strongly associated with survival. |
| sob-21 | pass | Gas is internally consistent (pH 7.32 from HCO3 20 and PaCO2 40). |
| sob-22 | pass | Urmey confirmed. All 13 patients developed paradoxical motion within 5 minutes. |
| sob-24 | re-rebuilt | Copied dvt-pe-19 (s33). It had the same PEGeD low-probability exclusion with the same D-dimer of 820 FEU, the same upgrade to moderate probability and CT, and the same threshold teaching. dvt-pe-42 also keys moderate probability to CT. The q3 option "Discharge, D-dimer below 1 000 ng/mL" and the update "Before he leaves" also cued the q2 key. New case: a PE-unlikely man (Wells 0, age 52 so PERC cannot be used) with a triage-ordered CT. q1 D-dimer before imaging. q2 low pretest probability lowers the PPV of CT (PIOPED II, 58% vs 96%). q3 bilateral leg ultrasound for an isolated subsegmental PE (CHEST 2021). q4 a popliteal DVT means anticoagulation for at least 3 months. KF 5, 5, 5, 3 kept. |
| sob-25 | pass | Epinephrine 5 mL of 1 mg/mL is the maximum croup dose. |
| sob-27 | pass | P/F 56 / 0.80 = 70. Distractor arithmetic checked. |
| sob-29 | re-rebuilt | Copied tox-18 (committed, s53): an older adult on metformin with vomiting and diarrhea, AKI, lactate above 18 and pH below 7, keyed MALA and intermittent hemodialysis. New case: toluene inhalation with a normal anion gap acidosis (AG 139 - 117 - 10 = 12) and K 1.9. q1 toluene as the cause (KF2). q2 Winter's formula, expected PaCO2 21 to 25, measured 34, so compensation is inadequate because the breathing muscles are weak (KF4). q3 potassium before bicarbonate (KF3, ATSDR). pH 7.09 recomputed from HCO3 10 and PaCO2 34. Sources: Tuchscherer CJEM 2013, Albert 1967, ATSDR 2014. |
| sob-30 | fixed | q2 reason for rejecting IVIG said GBS "evolves over weeks without ataxia". Reworded to the source: progresses more slowly, over up to 4 weeks, and is not reversed by removing a tick. |
| sob-32 | pass | Shoesmith peak cough flow threshold of 270 L/minute confirmed. |
| sob-33 | fixed | Stem opening matched infectious-diseases-19 (a 17-year-old girl with 6 days of fever, sore throat and fatigue, mononucleosis). Changed to a 15-year-old boy with 8 days of illness. The keyed decisions were already distinct (airway steroid). |
| sob-36 | pass | No change. |
| sob-38 | fixed | Infliximab timing changed from "48 to 72 hours" to the ASCO wording of 48 hours (low confidence). |
| sob-39 | fixed | The reason for rejecting plasma exchange said trials showed "no difference in death or remission". The ACR/VF rationale is PEXIVAS, which found no reduction in death or end-stage kidney disease. Reworded. |
| sob-40 | pass | No change. |
| sob-41 | pass | Wells 3 + 1.5 = 4.5 checked. Nephrotic scenario not found elsewhere in the bank. |
| sob-42 | pass | PHAC confirms antitoxin on clinical suspicion, available through local public health. |
| sob-44 | fixed | A magnesium of 3.6 mmol/L did not fit respiratory depression (RR 8, PaCO2 62). Loss of reflexes comes first and apnea at higher levels. Raised to 5.6 mmol/L in the update and explanation. |
| sob-45 | pass | Drebot confirms incubation of 9 to 33 days, median 14 to 17, and that thrombocytopenia with a raised hematocrit is sensitive and specific. Drebot does not name vasopressors. The key's vasopressor half rests on standard practice (low confidence flag). |
| sob-47 | re-rebuilt | The venous air embolism story (right IJ line out while sitting upright in the ED observation area, echogenic foci, left side down and head down) is the same as shock-28, rebuilt at the same time in s50. I cannot edit s50, so sob-47 was changed. New case: acute hemolytic anemia after fava beans (G6PD deficiency) in a 24-year-old man. q1 hemolytic anemia as a non-pulmonary cause of dyspnea (KF2). q2 direct antiglobulin test to separate immune hemolysis (KF2). q3 red cell transfusion, with methylene blue and prednisone as distractors (KF3). Source: Luzzatto Blood 2020. |

Counts: pass 13, fixed 6 (sob-17, 30, 33, 38, 39, 44), re-rebuilt 3 (sob-24, 29, 47). The re-rebuilt SAMPs need a second check.

Sources verified in this review: Desjardins CCDR 2018 (PMC6449091), Urmey Anesth Analg 1991 (PubMed 2006740), Shoesmith CMAJ 2020 (cmaj.ca/content/192/46/E1453), Whitelaw Clin Endocrinol 2014 (PubMed 24102156), WMS drowning 2024 (doi 10.1177/10806032241227460), Brown CFP 2022 (PMC9810067), Drebot CCDR 2015, PHAC diphtheria page, Winter CID 2015 (PubMed 26082502), Boyd MMWR 2015 (PMC4584570), PIOPED II NEJM 2006 (doi 10.1056/NEJMoa052367), CHEST 2021 executive summary (no URL given, DOI not confirmed), Tuchscherer CJEM 2013 (doi 10.2310/8000.2013.130974), ATSDR toluene 2014, Luzzatto Blood 2020 (doi 10.1182/blood.2019000944).

Checks: SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts 647 passed. npx tsc --noEmit -p . clean. LAUNCH_GATE=1 npx vitest run tests/samps.test.ts 4 503 passed.

### For the physician (review additions)

- sob-24 q3 and q4 rest on CHEST 2021 for subsegmental PE, because no Canadian guideline covers it. The key avoids the anticoagulation versus surveillance question, which is still in equipoise, by adding a popliteal DVT.
- sob-29 relies on a CJEM case report and the ATSDR toluene guideline. ATSDR suggests potassium phosphate, so the key reads "potassium replacement IV".
- sob-47 cites a single review (Luzzatto 2020). Please confirm transfusion is the keyed first step at a hemoglobin of 57 g/L with dyspnea at rest.
- sob-17 q4 accepts that a long QT arrhythmia is still possible in any unexplained drowning. The key rests on the breath-holding history.
- sob-45 q2 keys small fluid boluses with a vasopressor. The cited source supports careful fluids, not vasopressors specifically.
- shock-28 (s50) and the old sob-47 had the same story. Whoever owns s50 should know that sob-47 no longer uses it.
- sob-20 phentolamine supply in Canada remains to be confirmed, as the writer noted.

## Second check

Independent second review of the three re-rebuilt SAMPs (sob-24, sob-29, sob-47). Both lenses were applied. The duplicate search loaded all 1 500 SAMPs from src/samps/index.ts and searched stems, updates, options and explanations by meaning, including signed-off s01 to s18. Note that the app shows every question of a SAMP on one screen (src/screens/Mocks.tsx), so a later update or prompt that names an earlier key is a real cue.

| Id | Verdict | What changed |
|---|---|---|
| sob-24 | fixed | q2 update gave the D-dimer result, which showed on screen next to q1 and cued its key (D-dimer first). The D-dimer value was removed from the update, and the q2 option "D-dimer of 1 450 ng/mL FEU" was replaced by "Oxygen saturation of 96%" with a true reason in the explanation. The key position is unchanged. q4 update began "Leg ultrasound shows", which gave away the q3 key. Now "Further testing finds a thrombus in the right popliteal vein". q1 option "No testing, as the PERC rule is negative" carried a reason inside the option, and that reason was false for a 52-year-old. Now "No further testing for PE", with the PERC reason moved to the explanation. The CHEST 2021 source now has its DOI. |
| sob-29 | pass | No change. All numbers checked. |
| sob-47 | fixed | q3 update opened with "The direct antiglobulin test is negative", which gave away the q2 key. That sentence was removed, and the q3 reason for rejecting prednisone now rests on the bite and blister cells in the q2 update. The q2 prompt "separates his hemolysis from an immune cause" gave away the q1 key (acute hemolytic anemia). Now "separates an immune from a nonimmune cause of his illness". |

### Recomputed

- sob-24 Wells score: signs of DVT 0 (legs normal), PE most likely 0 (viral illness judged more likely), pulse 96/minute not above 100 so 0, surgery or immobilization 0, previous VTE 0, hemoptysis 0, cancer 0. Total 0, PE unlikely. PERC cannot be used at 52 years (needs under 50).
- sob-24 PIOPED II positive predictive values of CT angiography: 96% high, 92% intermediate, 58% low clinical probability. Matches the explanation.
- sob-29 anion gap: 139 minus (117 plus 10) = 12 mmol/L. Normal gap.
- sob-29 Winter's formula: 1.5 x 10 + 8 = 23, plus or minus 2, so 21 to 25 mmHg. Measured PaCO2 34 mmHg is above the range. Inadequate compensation is correct.
- sob-29 pH by Henderson-Hasselbalch: 6.1 + log(10 / (0.03 x 34)) = 6.1 + 0.99 = 7.09. Matches the stated pH.
- sob-47: hemoglobin 148 to 64 to 57 g/L, a total fall of 91 g/L. LDH, unconjugated bilirubin and dipstick blood without red cells fit intravascular hemolysis. CK 140 U/L is normal.

### Duplicate search

- Toluene, glue or spray paint sniffing, inhalants: sob-29 is the only SAMP. Other hits are tissue glue, cyanoacrylate in the eye (eye, s37) and "sniffing position". Hypokalemia and normal anion gap SAMPs elsewhere (arrhythmia in s24 on bulimia, shock in s50 on pyloric stenosis, loc in s32 on salicylate with Winter's formula) key different decisions. loc (s32) uses Winter's formula for a mixed salicylate disorder, not for failing respiratory muscles.
- G6PD, fava beans, bite cells, hemolytic anemia: sob-47 is the only acute hemolysis case. loc-38 (s32) and a tox SAMP in s53 mention G6PD only as a reason to avoid methylene blue in methemoglobinemia. The pre-eclampsia SAMPs use the direct antiglobulin test as a distractor in HELLP or TTP. No overlap in story or keyed decision.
- PE unlikely, D-dimer first, subsegmental PE: dvt-pe-43 (s33) is the closest. It is a Wells 0 patient after a cold with pneumonia judged more likely, and it keys the Wells score, the age-adjusted cut-off and no imaging. sob-24 shares the Wells 0 opening and the D-dimer-first step, but its remaining keys (low pretest probability lowers CT reliability, leg ultrasound for an isolated subsegmental PE, a popliteal DVT means anticoagulation) appear nowhere else. chest-pain-32 keys PERC failing on age, which sob-24 uses only as a distractor reason. sob-23 (not a rebuild) keys serial leg ultrasound after an indeterminate V/Q scan, a different decision. dvt-pe-22 and sob-06 (signed off) mention subsegmental PE without testing its management. No copy found. Low-level overlap in q1 is noted, not treated as a defect.

### Sources verified

- CHEST 2021 executive summary: Stevens SM et al. Chest 2021, 160(6):2247-2259. DOI 10.1016/j.chest.2021.07.056 (Crossref and PubMed 34352279). The full guideline is Chest 2021, 160(6):e545-e608, DOI 10.1016/j.chest.2021.07.055. The recommendation for clinical surveillance over anticoagulation in subsegmental PE with no proximal DVT and low recurrence risk is confirmed. The bilateral leg ultrasound advice is confirmed through secondary summaries only, because the full text returned 403 (medium confidence).
- PIOPED II, Stein NEJM 2006, DOI 10.1056/NEJMoa052367 (Crossref).
- Tuchscherer CJEM 2013, DOI 10.2310/8000.2013.130974 (PubMed 23778000). The abstract supports a normal anion gap acidosis from toluene with distal RTA and excretion of other acid anions.
- ATSDR toluene medical management guideline: "Correct hypokalemia with potassium phosphate... Do not administer bicarbonate therapy until potassium and calcium are adequately replaced." Quoted from the live page.
- Albert, Dell, Winters Ann Intern Med 1967, DOI 10.7326/0003-4819-66-2-312 (Crossref).
- Luzzatto, Ally, Notaro Blood 2020, DOI 10.1182/blood.2019000944 (Crossref, PubMed 32702756). The abstract confirms fava beans as a trigger of acute hemolytic anemia. The transfusion and methylene blue details rest on the full text, not opened (medium confidence).

### For the physician (second check)

- sob-24 q4 is mapped to KF3 (emergency treatment of severe dyspnea, invasive or noninvasive ventilation), kept from the original SAMP. Starting anticoagulation for a popliteal DVT in a stable patient does not really test KF3. Consider a remap if batch coverage allows.
- sob-29 q3 and sob-47 q3 are also mapped to KF3 for potassium replacement and transfusion. This is a loose fit.
- sob-24 q4 update still implies leg imaging, so a careful candidate can infer the q3 key. The cue is weaker than before and cannot be removed without changing q3.

Counts: fixed 2 (sob-24, sob-47), pass 1 (sob-29). None re-rebuilt.

Checks: SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts 647 passed. npx tsc --noEmit -p . clean.
