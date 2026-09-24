# Review of SAMP batch s17: Shortness of breath and Suicide risk

Reviewer: adversarial review by an emergency physician and emergency psychiatry examiner. Files reviewed: `src/samps/s17/sob.ts` and `src/samps/s17/suicide-risk.ts` (15 SAMPs each). All SAMPs keep `reviewed: false`. Ids are unchanged.

Checks after edits: `tsc` shows no s17 errors. `SAMP_BATCH=s17 vitest` passes 94 of 94.

No SAMP resembles the CFPC sample SAMPs.

## Shortness of breath

### sob-01 ACE inhibitor angioedema. Corrected

Awake flexible bronchoscopic intubation with a double setup is consistent with the Canadian Airway Focus Group.

- q4 mapping. Before: sob key feature 2, which is loose. After: anaphylaxis key feature 4 (discharge, avoidance, recurrence risk, follow up). Added "anaphylaxis" to alsoTopics. See open questions.
- q4 ARB item. Before: "Use an ARB only with caution". After: it adds that cross reactivity is uncommon but possible.

### sob-02 Croup. Corrected

12 kg x 0.6 mg/kg is 7.2 mg. Nebulized epinephrine 1 mg/mL at 0.5 mL/kg to a maximum of 5 mL matches the CPS statement. Observing for 2 hours after epinephrine is correct.

- q2 explanation. Added that the CPS dose is 0.6 mg/kg and 0.15 mg/kg is also accepted, so the 0.06 mg/kg distractor is plainly too low.

### sob-03 Aspirated foreign body. Corrected

- q3 dangerous flag. Keeping discharge after a normal film as dangerous is fair, because most nuts are radiolucent. Before: it matched any line with "discharge", so "discharge only after bronchoscopy" scored zero. After: it matches "discharge home", "send home", "discharge now", "safe to discharge", "go home".

### sob-04 Severe asthma. Accurate, explanation tightened

Salbutamol 2.5 to 5 mg, ipratropium 500 mcg, prednisone 50 mg, magnesium 2 g IV over 20 minutes, ketamine 1.5 mg/kg and a low rate with a long expiratory time are all correct.

- Benzodiazepines as dangerous. Fair, not too harsh. GINA says sedatives should be strictly avoided in acute asthma. This patient is hypoxemic (SpO2 89%) and tiring. The explanation now cites GINA.

### sob-05 Hypercapnic COPD. Accurate

The target of 88 to 92% is correct. NIV at pH below 7.35 with PaCO2 above 45 mm Hg matches the ERS/ATS 2017 guideline. Gas checked: an expected chronic HCO3 of about 35 against a measured 33 means acute on chronic. Henderson Hasselbalch gives pH 7.28. No changes.

### sob-06 PE in COPD. Corrected

Wells score is 6 (DVT signs 3, HR 1.5, recent hospitalization 1.5). sPESI is 2 (lung disease, HR 110 or more, SpO2 below 90%).

- q1 match phrases. Before: a bare "sputum" or "wheeze" matched, so "increased sputum" or "more wheeze" scored as a feature against COPD. After: only the unchanged or negated forms match.

### sob-07 Pneumonia with acute heart failure. Accurate

The dangerous flag on a 30 mL/kg bolus is fair. This is hypertensive acute heart failure with SpO2 84% and pulmonary edema. No changes.

### sob-08 DKA. Accurate

Anion gap is 30. Insulin 0.1 units/kg/h once K is 3.3 or higher, potassium once K is below 5.5, and dextrose at 14 mmol/L match Diabetes Canada. A standard ventilator rate is fairly flagged dangerous at pH 6.98 and PCO2 14. No changes.

### sob-09 Chronic salicylate toxicity. Corrected

Anion gap is 20. Winter's formula predicts a PCO2 of 32, so 24 means a concurrent respiratory alkalosis. 4.1 mmol/L is about 57 mg/dL. That is below the EXTRIP level thresholds (7.2 mmol/L, or 6.5 with impaired kidneys). Altered mental status and new hypoxemia each justify dialysis whatever the level. Her creatinine of 124 in a 78 year old woman is impaired kidney function by EXTRIP.

- q3 explanation now states the units, the level in mg/dL, and that the indication comes from the clinical features, not the level.
- q3 dextrose item. Before: matched "glucose", so "check glucose" scored. After: dextrose, D50, D10, D5, IV glucose.

### sob-10 Low risk PE. Corrected

PERC fails on estrogen. The age adjusted cutoff is 640 ng/mL FEU, and the stem gives FEU units, so they match.

- q4 unacceptable. Before: any line with "500" was unacceptable, so "640, not the usual 500, so PE excluded" scored zero. After: it matches "needs imaging", "requires imaging", "needs CTPA" and similar.

### sob-11 Massive PE in cancer. Corrected

Alteplase 100 mg over 2 hours is right, and the 0.9 mg/kg stroke dose is a good distractor.

- q4 stroke item. Before: "ischemic stroke in the past 3 months". After: "within 3 to 6 months depending on the guideline". The ESC uses 6 months.

### sob-12 PE in pregnancy. Corrected

Compression ultrasound first when there are leg symptoms is correct. Enoxaparin 1 mg/kg every 12 hours at 78 kg is right. Treatment continues through pregnancy and at least 6 weeks postpartum, for a total of at least 3 months.

- q2 explanation. Before: it relied on "still has a YEARS item" after a negative ultrasound. After: a D-dimer of 1000 ng/mL or more needs imaging whatever the YEARS items, so her 1450 mandates imaging.
- q2 dangerous flag. Before: it matched "no ct", "physiologic" and "expected in pregnancy", so "VQ, no CT" or "D-dimer rises physiologically but still image" could score zero. After: "skip imaging", "no imaging needed", "no chest imaging", "discharge home".
- q3 VQ item. Before: any line mentioning VQ scored, including the wrong claim that VQ is safer for the fetus. After: it needs a statement about both tests.
- q3 explanation. Before: "well under 1 mGy" for both tests. After: "about 1 mGy or less, far below the 50 mGy level linked to fetal harm".

### sob-13 Guillain Barre syndrome. Accurate

The 20/30/40 rule is correct, and FVC 14 mL/kg with NIF minus 20 meets it. Succinylcholine is correctly the wrong answer because of hyperkalemia from receptor upregulation. The explanation says so. A single choice question cannot carry a dangerous flag, so it stays as a distractor. Rocuronium 1.2 mg/kg is right. No changes.

### sob-14 Tension pneumothorax. Corrected

Decompression before imaging is correct.

- Title. Before: "Sudden pain in a tall young man", a hint at the diagnosis. After: "Sudden chest pain in a young man".

### sob-15 Anaphylaxis with airway involvement. Corrected

At 70 kg, 0.01 mg/kg is 0.7 mg, capped at 0.5 mg IM. That is correct.

- Source. Before: "World Allergy Organization. Anaphylaxis guidance." After: Cardona V, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020.

## Suicide risk

### Ontario law, checked against the writer's points

- Form 1. The examination must be within 7 days before signing. The form gives authority for 7 days from signing to take the person to a psychiatric facility. It allows up to 72 hours of detention, counted from arrival at the facility (MHA s.15, Psychiatric Patient Advocate Office Form 1 infoguide). suicide-risk-12 q4 is correct.
- Form 42. It is given promptly by the signing physician. It states the reason for detention, the right to retain and instruct counsel without delay, and the 72 hour authority. The duration item in suicide-risk-05 q4 is therefore fair.
- s.17 and police. Police may bring the person for examination without a Form 1. Police must remain until the facility takes custody (MHA s.33). suicide-risk-11 q1 is correct.
- Box B (s.15(1.1)). Prior treatment for an ongoing or recurring disorder, clinical improvement, the same or a similar disorder now, likely serious harm or substantial deterioration or serious physical impairment, incapacity to consent to treatment, and SDM consent. The key is correct.
- Chemical restraint. MHA s.1 defines "restrain" as control by "the minimal use of such force, mechanical means or chemicals as is reasonable". So chemical restraint is within the MHA definition. The Patient Restraints Minimization Act has a different definition and is not the relevant statute here. HCCA s.7 also preserves the common law duty to restrain in an emergency. suicide-risk-11 q4 is correct. The explanation now quotes this.
- National app. Every stem that tests Ontario forms or statutes now names Ontario (01, 05, 08, 09, 11, 12). Stems that used a Form 1 only as a distractor (06, 14) now say "detain her involuntarily" instead.

### suicide-risk-01 Middle aged man with a rifle. Corrected

- Stem now set in Ontario.
- q3. Removed "He refuses voluntary admission" as a Form 1 finding. Refusal is not a legal criterion of the serious harm test.

### suicide-risk-02 Older man with self-neglect. Accurate

No changes.

### suicide-risk-03 Postpartum crash. Corrected

- Maternal death wording. Before: "Suicide is a leading cause of maternal death in the year after delivery." After: "In Canada and other high income countries, suicide is a leading cause of maternal death in the first year after delivery."
- q3 reporting item. Before: "children's aid society" in a national stem. After: "child protection services, such as a children's aid society in Ontario".
- Sertraline while breastfeeding is correctly keyed. CANMAT supports it as a first choice because of low milk transfer.

### suicide-risk-04 Adolescent ingestion. Corrected

12 x 200 mg is 2.4 g, or 48 mg/kg, which is below the toxic range.

- q3 abuse item. Before: "children's aid society". After: "child protection services".
- Source now carries the verified CPS URL. 9-8-8 now carries 988.ca.

### suicide-risk-05 Incapable refusal of acetylcysteine. Corrected

The consent logic is correct. An incapable patient is treated with SDM consent, or under HCCA s.25 emergency treatment when the SDM cannot be reached promptly. Form 1 does not authorize treatment. The appreciation failure in the update is a good example.

- Stem now set in Ontario.

### suicide-risk-06 Passive ideation, low risk. Corrected

- q2 option. Before: "Complete a Form 1". After: "Detain her involuntarily". Explanation updated to match.

### suicide-risk-07 Starting an SSRI. Corrected

Sertraline 50 mg is a correct starting dose. The distractors (escitalopram 40, fluoxetine 80, sertraline 200 to start) are plausibly wrong.

- q3 duration item. Before: "at least 6 to 12 months after recovery". After: "at least 6 months after recovery, often longer". This sits within both the CANMAT 2016 and 2023 wording.

### suicide-risk-08 Intoxicated suicidal statement. Corrected

- Stem now set in Ontario. The ethanol fall from 62 to 11 mmol/L in 7 hours is plausible in a heavy drinker.

### suicide-risk-09 Single vehicle crash. Corrected

- Stem now set in Ontario (q3 accepts a Form 1).
- "haemodynamically" changed to "hemodynamically" for Canadian medical spelling.

### suicide-risk-10 "Accidental" opioid overdose. Corrected

- q4. Before: a bare "abrupt" matched, so "stop opioids abruptly" earned credit for the opposite of the key. After: only negated or tapering phrases match. Added an unacceptable item (not dangerous) for stopping opioids abruptly.

### suicide-risk-11 Command hallucinations, police s.17. Corrected

- Stem now says "Ontario Mental Health Act".
- q4 explanation rewritten to quote the MHA s.1 definition of restraint and the HCCA s.7 common law duty.

### suicide-risk-12 Bipolar self-neglect, Box B. Corrected

- Stem now set in Ontario. q4 now says "a different Ontario patient".
- q2 prompt. Before: "She does not meet the serious harm test." That is arguable, because Box A includes a lack of competence to care for oneself with likely serious physical impairment, and she has lost 9 kg and is dehydrated. After: "The psychiatrist on call advises that the Box B criteria of Form 1 fit her history best."
- The SDM ranking (spouse above children and parents under HCCA s.20) is correct.

### suicide-risk-13 First Nations youth after an interrupted hanging. Corrected

- Stem. Removed "avoids eye contact". It could read as a cultural stereotype or be misread as a symptom. It now says "quiet and says little".
- Title. Before: "Flown out after a second loss", which was unclear. After: "Flown in from a northern community".
- q1 prompt now says "known or to ask about", because the key credits factors not in the stem, such as substance use and bullying.
- q1 explanation. Before: rates "markedly higher among First Nations youth in some communities". After: rates vary widely between communities. Where they are high, they reflect colonization, intergenerational trauma and limited services, not culture or identity. Cultural continuity is protective.
- q2. Before: "culturally safe care", mapped to key feature 4, which is for low risk patients, and cited to the helpline. After: "make his assessment culturally safe so that he can speak openly", mapped to key feature 1, with a new source (Health Canada and Assembly of First Nations, First Nations Mental Wellness Continuum Framework). The explanation now adds "Do not assume his beliefs or practices. Ask him."
- Hope for Wellness is verified: 1-855-242-3310, 24/7, by phone and online chat in English and French. Cree, Ojibway and Inuktitut are available by phone on request, but not 24/7. It is funded by Indigenous Services Canada. The URL was added.

### suicide-risk-14 Chronic suicidality. Corrected

- q2 option. Before: "Complete a Form 1". After: "Detain her involuntarily".
- q4 mapping. Before: key feature 1. After: key feature 4. The common errors are about disposition and the outpatient plan.

### suicide-risk-15 Firearms and PHIPA. Accurate

PHIPA s.40(1) permits disclosure when it is believed on reasonable grounds to be necessary to eliminate or reduce a significant risk of serious bodily harm. The key is correct. No changes.

## Key feature balance

Shortness of breath: KF1 4, KF2 7, KF3 8, KF4 7, KF5 5. All covered.

Suicide risk: KF1 14, KF2 7, KF3 11, KF4 6, KF5 14. All covered. KF1 and KF5 remain heavy, but no single key feature is the main focus of more than 8 SAMPs. Questions tagged to secondary topics (tox, delirium-agitation, loc, abuse-domestic, dvt-pe, asthma-copd, airway, anaphylaxis, pulmonary-edema, shock) genuinely test those key features.

## Sources verified

- Ontario Mental Health Act s.1 definition of restrain, via a search of the statute text. https://www.canlii.org/en/on/laws/stat/rso-1990-c-m7/latest/rso-1990-c-m7.html
- Psychiatric Patient Advocate Office. Form 1 infoguide (7 day limits, 72 hours from detention at hospital, Form 42 contents). https://yourlegalrights.on.ca/sites/all/files/inf-for.pdf
- Form 42 in the Ontario Central Forms Repository. https://forms.mgcs.gov.on.ca/dataset/014-1787-41/resource/08d38009-dfd7-4c41-9d57-e7bb2a15ab1f
- CPS position statement. Suicidal ideation and behaviour. https://cps.ca/en/documents/position/suicidal-ideation-and-behaviour
- Hope for Wellness Help Line. https://www.hopeforwellness.ca/
- 9-8-8. https://988.ca
- The other citations are real and were left as written: CAFG 2021, CPS croup, TREKK croup, CTS asthma and COPD, GINA, GOLD, Rochwerg ERS/ATS 2017, CCS HF, Metlay 2019, Diabetes Canada, EXTRIP salicylate 2015, Kline 2004, Righini 2014, ESC 2019, van der Pol 2019, SOGC VTE in pregnancy, BTS pleural, ATLS, HCCA, PHIPA, CPSI/OHA Suicide Risk Assessment Guide, CANMAT, Stanley and Brown 2012, CCSMH, NICE NG225, Rosen, Tintinalli.

## Open questions for the physician

1. sob-01 q4 is now mapped to anaphylaxis key feature 4, although ACE inhibitor angioedema is not anaphylaxis. The other option is to rewrite q4 to test sob key feature 2.
2. sob-12 q2 accepts a chest radiograph and an obstetrics consult as "next steps". Confirm that you want these as well as imaging and empiric LMWH.
3. suicide-risk-11 q4 assumes the ED is part of a Schedule 1 facility, where the MHA restraint definition applies. Elsewhere the common law duty applies. Consider stating the facility type in the stem.
4. suicide-risk-08. Whether acute intoxication alone counts as an apparent mental disorder for a Form 1 is debated. The keyed option says "if he meets its criteria", which is defensible.
5. The suicide-risk-02 and suicide-risk-15 content is Canada wide. Confirm this is acceptable for other provinces.

## Summary

Shortness of breath: 9 of 15 SAMPs corrected. Most were match phrase and dangerous flag fixes. The most important was sob-12, where "no CT" or "physiologic D-dimer" could zero a correct answer as dangerous. Also corrected were the D-dimer "500" trap in sob-10 and loose phrases in sob-06 that credited wrong answers. All doses and thresholds checked out.

Suicide risk: 12 of 15 corrected. The Ontario legal content was accurate throughout, including Form 1 time limits, Form 42, s.17 and s.33, Box B, chemical restraint under MHA s.1, SDM ranking and PHIPA s.40. The main fixes were stating Ontario in every stem that tests Ontario law, correcting a key that credited abrupt opioid cessation, qualifying the maternal suicide statement, and reframing the Indigenous youth case to avoid stereotyping.
