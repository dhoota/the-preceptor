# Oral realignment. Batch 01

This batch now follows the CFPC structured oral format, as set out in `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch01/` were changed. Every case is now `reviewed: false`, `version: 2` and `durationMinutes: 12`. Case ids, node ids, the branching, choice quality and scripted feedback are unchanged. No existing rubric item was removed. Every `critical` flag was kept. All patient names were removed. They appeared only in the old stems.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch01` prints nothing.
- `REALIGN=batch01 CASE_BATCH=batch01 npx vitest run tests/cases.test.ts` gives 83 passed and 10 failed. All 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.
- In the full suite, the other failures are in other batches (the same reviewed check) and in `tests/samp-quality.test.ts`. None of them touch batch 01.

## Method notes

- Stems now open "You are working in the emergency department of a ... when the following patient arrives." Each keeps the setting the case depends on, such as distance to the next centre, what the hospital lacks and the time of day.
- Card values were copied from the old stem and findings. None were changed. Where the old case gave no value, the card says "Unknown", "Not recorded" or "Not yet measured". Nothing was invented.
- Triage glucose, CTAS, GCS and the nurse or paramedic quote moved from the stem into a history finding.
- Question `seconds` did not need scaling. Every longest path was already at or under 720 seconds.
- New rubric items are tied to existing questions through the question `rubric` lists. Where a model answer had room (fewer than 7 points), one line was added for the history questions. No choice, feedback or `next` was changed.
- Row reassignment: legacy `approach` items went to history or physical, `data` and `diagnosis` to physical, and `plan` to management or process. Leadership, communication, professionalism and disposition items went to process ("organization, prioritization, reassessment, communication, timely disposition").
- Web search hit its session limit during this task. I verified sources through PubMed E-utilities (esearch and esummary), the Health Canada Drug Product Database, the issuing bodies' own pages and Open Library.

---

## refractory-vf-arrest. Collapse in the ambulance bay

**Stem.** 105 words before, 53 after. Tertiary care centre with a 24 hour cath lab and cardiac surgery, no ECPR program. A 51 year old man collapsed in the ambulance bay and arrives with CPR in progress after two AED shocks.

**Card.** Temperature: Not yet measured. Pulse: No pulse. Monitor shows ventricular fibrillation. Resp.: Apneic. Bag valve mask ventilation. BP: Not obtainable. CPR in progress. O2 sat: No reliable reading during CPR. Weight: About 90 kg (198 lb). Medications: Blood pressure and cholesterol pills, stopped last year. Allergies: Unknown.

**History moved.** New finding `prehospital` ("Collapse and care before resus"): collapse at 14:05 after he drove his father in, witnessed, security guard CPR within a minute, two AED shocks from the triage nurse, arrival at 14:09, and the charge nurse's report. The father's collateral finding was already in place and still holds the prodrome, risk factors and stopped medications.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 7 |
| Physical and differential | 4 | 5 |
| Management | 31 | 19 |
| Process | 0 | 12 |
| Total | 36 | 43 |

Added: vf-h1 collapse timeline and AED shocks (2), vf-h2 prodromal chest pain from his father (2), vf-h3 past history, risk factors, medications, allergies and family history of sudden death (2), vf-h4 drugs and alcohol today (1). Moved to process: vf-l1, vf-l2, vf-c1, vf-c2, vf-p1, vf-d1, vf-d2.

**Longest path seconds.** 630 before, 630 after.

**Citations.** No change. AHA 2025 verified through PubMed (Part 1 Executive Summary, PMID 41122893, https://pubmed.ncbi.nlm.nih.gov/41122893/). The cpr.heart.org URL returns 403 to automated fetches but is the AHA guideline page. ILCOR 2023 https://pubmed.ncbi.nlm.nih.gov/37942682/. DOSE VF https://pubmed.ncbi.nlm.nih.gov/36342151/. ALPS https://pubmed.ncbi.nlm.nih.gov/27043165/. ARREST https://pubmed.ncbi.nlm.nih.gov/33197396/.

---

## dialysis-hyperkalemia-arrest. Weakness after the storm

**Stem.** 145 words before, 60 after. Community hospital in northwestern Ontario at 19:30 on a Wednesday. A 67 year old woman on hemodialysis is brought in by her daughter because she is too weak to stand. The dialysis unit runs 07:00 to 17:00. Nephrology is by phone, 4 hours away.

**Card.** Temperature 36.2°C. Pulse 42/minute. Resp. 24/minute. BP 94/56 mmHg. O2 sat 90% on room air. Weight 72 kg (159 lb). Medications: insulin glargine, insulin lispro, metoprolol, sevelamer, calcitriol, darbepoetin. Allergies: Unknown.

**History moved.** New `hpi`: the storm, the missed run yesterday, weakness, the daughter's drive, CTAS 1, capillary glucose 5.6 mmol/L and the nurse's ECG remark. New `pmh`: diabetes, end stage kidney disease, the Tuesday, Thursday and Saturday runs through a left arm fistula, and the hospital's 6 bed ICU and dialysis unit. The daughter's collateral and the medication finding were already in place.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 6 |
| Physical and differential | 4 | 4 |
| Management | 25 | 15 |
| Process | 0 | 10 |
| Total | 29 | 35 |

Added: hk-h1 last dialysis and the missed run (2), hk-h2 potassium intake and salt substitute (2), hk-h3 medications that raise potassium or slow the heart (1), hk-h4 insulin and intake before giving insulin (1). Moved to process: hk-l1, hk-d1, hk-d2, hk-c1, hk-c2, hk-c3, hk-p1.

**Longest path seconds.** 630 before, 630 after.

**Citations.**
- `sux-pm` replaced. Before: "Succinylcholine chloride injection. Canadian product monograph. Warnings on hyperkalemia." It had no issuing body and no year. After: "Pfizer Canada ULC. Quelicin (succinylcholine chloride injection USP) prescribing information. Warnings on hyperkalemia. Date of revision February 26, 2024." Verified in the Drug Product Database (DIN 00038172, marketed) at https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=227. The text at https://pdf.hres.ca/dpd_pm/00074795.PDF warns of arrhythmia and arrest when succinylcholine is given in hyperkalemia.
- UKKA October 2023 confirmed at https://guidelines.ukkidney.org/hyperkalaemia/. KDIGO, Clase 2020: https://pubmed.ncbi.nlm.nih.gov/31706619/. AHA 2025 as above.

---

## refractory-anaphylaxis-beta-blocker. Clearing out the shed

**Stem.** 136 words before, 49 after. Community hospital with an ICU and in house anesthesia. A 64 year old man arrives by ambulance at 10:55, faint and wheezing with hives, after he was stung while clearing out his shed.

**Card.** Temperature 36.8°C. Pulse 58/minute. Resp. 26/minute. BP 74/40 mmHg. O2 sat 92% on a non rebreather mask. Weight 88 kg (194 lb). Medications: metoprolol, ramipril, ASA, atorvastatin. Allergies: No known allergies.

**History moved.** New `hpi`: three stings at 10:15 on the neck and forearm, hives, throat tightness and faintness within ten minutes, CTAS 1 and glucose 8.1 mmol/L. New `prehospital`: two IM epinephrine doses at 10:32 and 10:41, salbutamol, 1 L saline, and the paramedic's remark about the heart rate staying in the fifties. The medication and wife findings were already in place.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 4 | 7 |
| Physical and differential | 3 | 5 |
| Management | 20 | 14 |
| Process | 0 | 6 |
| Total | 27 | 32 |

Added: an-h1 exposure and timeline (2), an-h2 paramedic treatment and response (2), an-h3 previous sting reactions and allergies (1). an-a2 (beta blocker identified) is now in history. an-a3 (voice change) is now in physical. Moved to process: an-l1, an-d1, an-c1, an-p1.

**Longest path seconds.** 540 before, 540 after.

**Citations.** No change. RCUK May 2021 confirmed at https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment. WAO 2020 https://pubmed.ncbi.nlm.nih.gov/33204386/. Shaker 2020 https://pubmed.ncbi.nlm.nih.gov/32001253/.

---

## obstructive-shock-pe-lysis. Grey and breathless after fainting

**Stem.** 137 words before, 58 after. Community hospital at 21:15 with CT, POCUS and a 12 bed ICU. No interventional radiology after 17:00. Cardiac surgery 45 minutes away by land. A 58 year old man is brought in by ambulance after he fainted at home.

**Card.** Temperature 37.3°C. Pulse 128/minute. Resp. 30/minute. BP 78/52 mmHg. O2 sat 86% on room air, 91% on a non rebreather mask. Weight about 95 kg (209 lb). Medications: Unknown. Allergies: Unknown.

**History moved.** New `hpi`: three days of dyspnea, found by his wife after the faint, 500 mL saline from paramedics, CTAS 1, glucose 7.4 mmol/L and the nurse's remark. The ankle fracture history (wife) and the contraindication screen were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 6 |
| Physical and differential | 7 | 7 |
| Management | 21 | 15 |
| Process | 0 | 6 |
| Total | 28 | 34 |

Added: pe-h1 three days of dyspnea before the faint (2), pe-h2 thromboembolism risk factors and the ankle fracture (2), pe-h3 lysis contraindication history, including a head strike (2). Moved to process: pe-c1, pe-c2, pe-p1, pe-p2, pe-d1.

**Longest path seconds.** 555 before, 555 after.

**Citations.** No change. ESC 2019 (Eur Heart J 2020) https://pubmed.ncbi.nlm.nih.gov/31504429/. ERC 2021 special circumstances, Lott et al., Resuscitation 161 (2021) 152 to 219, confirmed through its corrigendum https://pubmed.ncbi.nlm.nih.gov/34479028/. RUSH, Perera 2010 https://pubmed.ncbi.nlm.nih.gov/19945597/. NICE NG89 and AHA 2025 as cited.

---

## post-arrest-care-after-rosc. Arrival after a kitchen collapse

**Stem.** 156 words before, 59 after. Community hospital with a 24 hour cath lab, CT and an ICU that is full, so she may board for hours. At 07:40 paramedics bring in a 68 year old woman who has a pulse after a cardiac arrest at home.

**Card.** Temperature 35.9°C. Pulse 104/minute. Resp.: bagged at about 28/minute through a supraglottic airway. BP 82/48 mmHg. O2 sat 100% on FiO2 1.0 by bag. Weight about 70 kg (154 lb). Medications: Unknown. Allergies: Unknown.

**History moved.** New `arrest` ("Arrest details from the paramedics"): kitchen collapse at 06:50, husband CPR with dispatcher help, paramedics at 8 minutes, VF, three shocks, two epinephrine, amiodarone 300 mg, ROSC at 22 minutes, supraglottic airway, end tidal CO2 26 mmHg, glucose 14.8 mmol/L, GCS 3 with no sedation, and the paramedic's remark. The husband's collateral finding was already in place.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 6 |
| Physical and differential | 4 | 4 |
| Management | 23 | 14 |
| Process | 0 | 9 |
| Total | 28 | 33 |

Added: pr-h1 arrest timeline from the paramedics (2), pr-h2 symptoms before the arrest and risk factors from her husband (2), pr-h3 sedation given before judging GCS (1). pr-p2 (substitute decision maker and wishes) is now history. Moved to process: pr-c1, pr-c2, pr-p1, pr-d1, pr-l1.

**Longest path seconds.** 570 before, 570 after.

**Citations.**
- `erc-2025` completed. Before: "European Resuscitation Council and European Society of Intensive Care Medicine. Guidelines 2025. Post resuscitation care. Resuscitation. 2025." After: "Nolan JP, Sandroni C, Cariou A, et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2025. Post resuscitation care. Resuscitation. 2025." with URL https://pubmed.ncbi.nlm.nih.gov/41117575/.
- TTM2 https://pubmed.ncbi.nlm.nih.gov/34133859/. COACT https://pubmed.ncbi.nlm.nih.gov/30883057/. TOMAHAWK https://pubmed.ncbi.nlm.nih.gov/34459570/. HCCA and AHA 2025 as cited.

---

## ace-inhibitor-angioedema-airway. A thick voice before breakfast

**Stem.** 126 words before, 53 after. Community hospital at 06:20. Anesthesia on call from home 25 minutes away. ENT at a tertiary centre 90 minutes away. A 62 year old woman arrives with a swollen lip and tongue and a muffled voice.

**Card.** Temperature 36.9°C. Pulse 96/minute. Resp. 22/minute. BP 162/94 mmHg. O2 sat 96% on room air. Weight 84 kg (185 lb). Medications: ramipril, amlodipine, metformin. Allergies: No known allergies.

**History moved.** New `hpi`: woke at 04:30 with a swollen lower lip, then tongue swelling and a muffled voice, CTAS 2 and the nurse's remark. New `equipment`: the airway equipment list that was in the stem. The medication finding was already in place.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 5 | 6 |
| Physical and differential | 2 | 7 |
| Management | 18 | 11 |
| Process | 0 | 7 |
| Total | 25 | 31 |

Added: ae-h1 onset and speed of spread (2), ae-h2 ramipril and its duration (2), ae-h3 hives, triggers, prior episodes and family history (2). ae-a1 and ae-r1 (both legacy approach) are now physical, since they are airway exam and nasopharyngoscopy. Moved to process: ae-l1, ae-l2, ae-d1, ae-c1, ae-p1.

**Longest path seconds.** 570 before, 570 after.

**Citations.**
- `ramipril-pm` replaced. Before: "Ramipril. Canadian product monograph. Warnings on angioedema." It had no body and no year. After: "Bausch Health, Canada Inc. Altace (ramipril) product monograph. Warnings and precautions, angioedema. Date of revision January 8, 2021." URL https://pdf.hres.ca/dpd_pm/00059606.PDF. Verified in the Drug Product Database (DIN 02248052, approved) at https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=72372.
- `hc-adr` completed. Before: the education module page with no year. After: "Health Canada. Mandatory reporting of serious adverse drug reactions and medical device incidents by hospitals. Guidance document. 2019." The guidance was published 26 June 2019 and took effect 16 December 2019. https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting/drugs-devices/guidance.html
- CAFG Part 2 https://pubmed.ncbi.nlm.nih.gov/34105065/. DAS ATI, Ahmad 2020 https://pubmed.ncbi.nlm.nih.gov/31729018/. Sinert 2017 https://pubmed.ncbi.nlm.nih.gov/28552382/. Betschel 2019 https://pubmed.ncbi.nlm.nih.gov/31788005/.

---

## variceal-hemorrhage-rural. A basin full of blood at night

**Stem.** 141 words before, 56 after. Rural hospital at 22:10. You are the only physician. No endoscopy after hours. The regional centre is 2 hours by road. A 49 year old man has vomited bright red blood three times since 21:00.

**Card.** Temperature 36.3°C. Pulse 126/minute. Resp. 24/minute. BP 86/52 mmHg. O2 sat 95% on room air. Weight 78 kg (172 lb). Medications: spironolactone, furosemide, lactulose, thiamine. Propranolol stopped last year. Allergies: Unknown.

**History moved.** New `hpi`: three hematemeses since 21:00, GCS 14, glucose 6.4 mmol/L, CTAS 1 and the nurse's remark. New `resources`: the 40 bed hospital, surgeon on call from home, regional centre with endoscopy and IR, and the blood bank stock. "Alcohol related" was added to the existing history finding, because the stem had given the cause of the cirrhosis.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 8 |
| Physical and differential | 2 | 5 |
| Management | 22 | 18 |
| Process | 0 | 6 |
| Total | 25 | 37 |

Added: vb-h1 the bleed (2), vb-h2 liver disease, varices and beta blocker (2), vb-h3 anticoagulants, antiplatelets and NSAIDs (2), vb-h4 alcohol, last drink and recent confusion (2), vb-a1 exam signs of shock and decompensation (2, physical), vb-a2 presumes a variceal source (1, physical), vb-l1 prioritizes and delegates as the only physician (1, process). This case needed physical and process items as well as history, because 8 of its 13 items were management. Management is now 48.6 percent. vb-p1 (legacy approach) moved to process with vb-d1, vb-c1 and vb-c2. vb-m6 (X ray check of balloon position) is now physical.

**Longest path seconds.** 615 before, 615 after.

**Citations.** No change. Baveno VII https://pubmed.ncbi.nlm.nih.gov/35120736/. Villanueva 2013 https://pubmed.ncbi.nlm.nih.gov/23281973/. HALT IT https://pubmed.ncbi.nlm.nih.gov/32563378/. Callum 2019 https://pubmed.ncbi.nlm.nih.gov/31484650/. Roberts and Hedges 7th edition: Open Library lists the Elsevier edition as published 21 February 2018. 2019 is the copyright year.

---

## sedation-shoulder-reduction. A fall on the curling ice

**Stem.** 146 words before, 51 after. Community hospital at 14:20 on a Saturday. Capnography on every monitor. A respiratory therapist is available. A 46 year old man has severe right shoulder pain after he slipped on the ice an hour ago.

**Card.** Temperature 36.7°C. Pulse 98/minute. Resp. 18/minute. BP 152/94 mmHg. O2 sat 95% on room air. Weight 118 kg (260 lb). Medications: amlodipine. Allergies: None.

**History moved.** New `hpi`: the fall at the curling club onto the outstretched arm, pain 9 out of 10, the dislocation at age 22 reduced under sedation, CTAS 3 and the nurse's remark. New `intake`: large lunch at 13:00. Height 178 cm was added to the dosing weights finding. Sleep apnea and CPAP were already in the medical history finding. The ride home was already in the social finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 4 | 7 |
| Physical and differential | 1 | 5 |
| Management | 18 | 7 |
| Process | 0 | 11 |
| Total | 23 | 30 |

Added: sd-h1 mechanism and prior dislocation (2), sd-h2 sleep apnea, history, medications, allergies and past sedation (2), sd-h3 last meal (2), sd-h4 how he got here and who can take him home (1). sd-a1 and sd-a2 (legacy approach) are now physical. Moved to process: sd-l1, sd-p1, sd-p2, sd-c1, sd-d1, sd-d2.

**Longest path seconds.** 495 before, 495 after.

**Citations.**
- `cmpa` completed. Before: no year. After: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery. Open and honest communication with patients. Version 3. 2017." The page shows "Published: March 2017". https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients
- ACEP 2014, Godwin https://pubmed.ncbi.nlm.nih.gov/24438649/. Green 2019 https://pubmed.ncbi.nlm.nih.gov/31029297/. Innes 1999 https://pubmed.ncbi.nlm.nih.gov/9950405/. Roberts as above.

---

## cico-scalpel-cricothyrotomy. Facial injuries after an assault

**Stem.** 140 words before, 52 after. Community hospital at 01:30. The trauma centre is 90 minutes by road. Anesthesia on call from home, 30 minutes away. Paramedics bring in a 31 year old man with severe facial injuries after an assault.

**Card.** Temperature: Not recorded. Pulse 118/minute. Resp. 28/minute. BP 144/88 mmHg. O2 sat 89% on a non rebreather mask. Weight about 95 kg (209 lb). Medications: Unknown. Allergies: Unknown.

**History moved.** New `hpi` ("Paramedic report"): struck repeatedly in the face with a baseball bat, GCS 8, cervical collar, CTAS 1 and the paramedic's remark. New `equipment`: the respiratory therapist and the airway and cricothyrotomy kit list. The friend's collateral finding was already in place.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 6 |
| Physical and differential | 5 | 7 |
| Management | 18 | 9 |
| Process | 0 | 9 |
| Total | 25 | 31 |

Added: cc-h1 mechanism and GCS trend (2), cc-h2 AMPLE history (2), cc-h3 airway course on the way in (2). cc-a1 (legacy approach) is now physical. Moved to process: cc-l1, cc-l2, cc-d1, cc-c1, cc-c2, cc-p1.

**Longest path seconds.** 600 before, 600 after.

**Citations.** No change. DAS 2015 https://pubmed.ncbi.nlm.nih.gov/26556848/. CAFG Part 1 https://pubmed.ncbi.nlm.nih.gov/34143394/. Vortex, Chrimes 2016 https://pubmed.ncbi.nlm.nih.gov/27440673/. ATLS 10th edition 2018 as cited.

---

## lateral-canthotomy-orbital-hematoma. A fall down the basement stairs

**Stem.** 142 words before, 57 after. Community hospital at 22:00 with CT on site. Ophthalmology is at the regional centre, 2 hours away by road. A 74 year old woman has a painful, swollen left eye after she fell on her stairs and struck her face.

**Card.** Temperature 36.6°C. Pulse 94/minute, irregular. Resp. 18/minute. BP 172/90 mmHg. O2 sat 97% on room air. Weight 64 kg (141 lb). Medications: warfarin, metoprolol, ramipril. Allergies: Unknown.

**History moved.** New `hpi`: 21:10 fall on the basement stairs, face struck on the railing, no loss of consciousness, painful swollen eye within minutes, two vomits, glucose 6.8 mmol/L, GCS 15, CTAS 2 and the nurse's remark. New `equipment`: the lateral canthotomy tray, moved out of the stem so the card does not cue the procedure. Warfarin for atrial fibrillation was already in the medication finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 6 |
| Physical and differential | 7 | 6 |
| Management | 13 | 8 |
| Process | 0 | 8 |
| Total | 22 | 28 |

Added: oc-h1 time and mechanism of injury and symptom onset (2), oc-h2 anticoagulant, indication, last dose and stroke history (2), oc-h3 screen for intracranial injury (1), oc-h4 baseline vision and prior eye surgery (1). oc-a1 (legacy approach) is now physical. Moved to process: oc-c1, oc-c2, oc-p1, oc-d1, and oc-r2 (reassessment of the pressure after canthotomy).

**Longest path seconds.** 570 before, 570 after.

**Citations.** No change. Canadian CT Head Rule, Stiell 2001 https://pubmed.ncbi.nlm.nih.gov/11356436/. NAC PCC 2022, HCCA, ATLS and Roberts as cited.

---

## Needs physician decision

1. **Critical items in process.** Several critical items now count toward Overall process of care: vf-p1, vf-d1 (cath lab activation), hk-d1 (definitive dialysis), pr-p1 (no early prognostication), sd-l1 (dedicated monitor), sd-d1 (safe discharge) and oc-r2 (completes cantholysis when pressure stays high). Please confirm or move any of these to management. Each case has room to do so without breaking the 50 percent cap, except variceal hemorrhage, where management is already 48.6 percent.
2. **New items need clinical review.** All 38 new rubric items (35 history items, plus vb-a1, vb-a2 and vb-l1) and their teaching lines are my own writing. They are drawn from each case's existing findings, and each cites an existing source. Please check them in particular: hk-h1 says four days since the last run is enough for a dangerous potassium, hk-h3 lists drugs that raise potassium, oc-h3 describes the vomiting criterion of the Canadian CT Head Rule and the exclusion of anticoagulated patients, and vb-a1 says shock with encephalopathy predicts high mortality.
3. **Cards reveal key drugs.** The CFPC card lists prescribed medication, so the anaphylaxis card now shows metoprolol and the angioedema card shows ramipril. The cases previously let the candidate discover these. Decide whether this is acceptable.
4. **Unknown card fields.** The old cases gave no allergies for seven cases (VF, dialysis, PE, post arrest, variceal, CICO, canthotomy) and no medication list for PE, post arrest and CICO. No temperature was given for CICO, and none can be measured in the VF arrest. I wrote "Unknown", "Not recorded" or "Not yet measured" rather than invent values. You may prefer to add values.
5. **Arrest card wording.** The VF card gives the arrest state in words ("No pulse. Monitor shows ventricular fibrillation"). Its medication line reads "Blood pressure and cholesterol pills, stopped last year", taken from the father's collateral.
6. **Sedation prompt gives history.** The q-presed prompt still says "He ate a large lunch about two hours ago." That gives away the answer to the new history item sd-h3. The brief bars changes to prompts, so I left it.
7. **Angioedema teaching point.** The ramipril monograph supports sudden, life threatening angioedema and says to stop the drug at once. It does not say that onset can come years into treatment. I rewrote the ae-h2 teaching line to match the monograph. The q-cause model answer still says "It can start years after the drug is begun" without a supporting citation.
8. **Succinylcholine figure.** hk-r3 teaching says succinylcholine raises potassium by about 0.5 mmol/L. The Quelicin label supports great caution in hyperkalemia but does not state that figure.
9. **Newer versions exist.** The cited versions are real and verified, but newer ones have been published:
   - International/Canadian HAE guideline update: Betschel S, Binkley K, Borici-Mazi R, et al. Allergy Asthma Clin Immunol. 2026. https://pubmed.ncbi.nlm.nih.gov/41606636/
   - Unscheduled procedural sedation Delphi guidelines, Parts 1 and 2: Green SM, Roback MG, Bhatt M, et al. Ann Emerg Med. 2026. https://pubmed.ncbi.nlm.nih.gov/42618174/
   - ATLS 11th edition is now current (facs.org).
   - Roberts and Hedges has a 2025 edition.

   Updating these would need a content check, so I did not change them.
10. **Stem detail dropped.** The post arrest stem no longer says the ICU has 20 beds. No node depends on that number.
