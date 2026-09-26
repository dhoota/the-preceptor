# Signed-duplicate rebuild, group g07

Files: `src/samps/s04/asthma-copd.ts` and `src/samps/s04/burns.ts`. Held back in `src/samps/held-back/g07.json`.

Six SAMPs rebuilt: asthma-copd-01, asthma-copd-04, asthma-copd-11, asthma-copd-13, burns-01 and burns-06. Each keeps its id, topic, question count, question kinds and key features. Each is now version 2 with `reviewed: false`. No other SAMP was changed. Nothing was committed.

## Checks

- `SAMP_BATCH=s04 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 481 of 481 passed.
- `npx tsc --noEmit -p .`: clean. One earlier run failed on `tests/zz-g06-dump.test.ts`, a temporary file from another writer. It passed once that file was gone.

## Rows

### asthma-copd-01 (cluster 5)

- **Old story:** A young woman with asthma after a cold, at high risk and tiring. The keys were risk history, first 20 minute orders, peak flow and magnesium.
- **New story:** A 34-year-old man with June hay fever and childhood exercise wheeze, but no asthma diagnosis, caught in a thunderstorm at an Ottawa music festival. Many patients are arriving at once and no nebulizers are free.
- **Keyed decisions:** q1 (short, KF2) GINA red flags for fatal asthma. q2 (short, KF5) severe-attack orders by MDI and spacer while nebulizers are in use: salbutamol 6 to 10 puffs, ipratropium 4 puffs, prednisone 50 mg, oxygen to 92 to 95%. q3 (single, KF3) peak flow of 250 against 610 predicted is 41%, which is a severe attack even though he now speaks in phrases. q4 (short, KF5) triage standing orders for a thunderstorm asthma surge, treating before any diagnosis.
- **Sources:** GINA 2026 report, Box 9-1, Box 9-6 and the text on page 187, https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf (local text and the Box 9-6 image were read). Thien F et al. Lancet Planet Health 2018, https://doi.org/10.1016/S2542-5196(18)30120-7 (abstract read on Europe PMC: 3365 excess presentations, 28% with diagnosed asthma, 35 ICU patients who all had asthma, 5 deaths).
- **Simcheck top 5 (full/keys):** sob-04 0.39/0.34, asthma-copd-06 0.28/0.25, asthma-copd-28 0.27/0.16, asthma-copd-25 0.25/0.20, asthma-copd-10 0.23/0.22.
- **Decision search:** "thunderstorm", "pollen" and "storm" found no keyed thunderstorm asthma. "6 to 10 puffs" and severity graded by peak flow below 50% found nothing. Triage standing orders and surge found only multiple-patients-15 (Code Orange for a different event). The q1 red-flag list repeats keys in sob-04 (being rebuilt by g01) and asthma-copd-12. That list is the literal wording of key feature 2 (decision D1).

### asthma-copd-04 (cluster 14)

- **Old story:** A 74-year-old woman with hypertension and diabetes who woke at night wheezing from hypertensive pulmonary edema. The keys were BNP, lung ultrasound, nitrate, NIV and furosemide.
- **New story:** A 58-year-old man who moved from Nepal wakes breathless and wheezing. Paramedics give salbutamol for asthma and his heart races. He has two months of exertional breathlessness and cough at night, a childhood illness with swollen joints and an irregularly irregular pulse. Bedside echo shows rheumatic mitral stenosis with fast atrial fibrillation.
- **Keyed decisions:** q1 (short, asthma KF1) the differential for a first wheeze. q2 (short, pulmonary edema KF5) history and examination features pointing to edema rather than asthma. q3 (short, KF1) IV rate control as the main treatment (esmolol first, or diltiazem), plus CPAP or BiPAP, furosemide and heparin, and stopping salbutamol. Unacceptable: more salbutamol or cardioversion now. q4 (short, KF2) tests for triggers that raise the mitral gradient: TSH, CBC, cultures for infection, and formal echo.
- **Sources:** GINA 2026 Box 9-6. Long B, Koyfman A, Gottlieb M. West J Emerg Med 2019, https://doi.org/10.5811/westjem.2019.9.43732 (full text: wheeze LR+ 0.6, S3 sensitivity 12.7% and specificity 97.7%, orthopnea and PND). Shenthar J. Heart Rhythm O2 2022, https://doi.org/10.1016/j.hroo.2022.09.020 (full text: IV rate control to below 80/minute, esmolol first choice, CCB alternative, stroke risk if sinus rhythm returns with LA thrombus). Pala B et al. Diagnostics 2026, https://doi.org/10.3390/diagnostics16142285 (full text: tachycardia, anemia, fever and hyperthyroidism raise the gradient, and AF gradients need averaging).
- **Simcheck top 5:** pulmonary-edema-18 0.26/0.12, pulmonary-edema-03 0.23/0.26, sob-31 0.19/0.15, asthma-copd-01 (new) 0.18/0.10, pulmonary-edema-25 0.18/0.11.
- **Decision search:** "mitral", "esmolol" and "rate control" found no non-pregnant mitral stenosis. pulmonary-edema-18 keys metoprolol for mitral stenosis in pregnancy. Esmolol is keyed elsewhere only for dissection. "TSH" appears only in the heat and delirium keys.
- **Changes after the duplicate checks:** A first draft had a young woman diagnosed with asthma at a walk-in clinic. That was too close to pulmonary-edema-25 (thyrotoxicosis after a walk-in asthma label) and pulmonary-edema-18 (pregnant immigrant with mitral stenosis). A second draft had breathlessness while lifting at work, which g12's new pulmonary-edema-01 now uses ("loading a truck"). Both were rewritten. q2 was also moved off BNP and lung ultrasound, which are the cluster's repeated key.

### asthma-copd-11 (cluster 16)

- **Old story:** A 68-year-old with COPD 8 days after knee replacement, with a PE mistaken for a COPD flare. The keys were CTPA and anticoagulation.
- **New story:** A 44-year-old man with severe asthma and allergic bronchopulmonary aspergillosis, 6 weeks into a prednisone taper with itraconazole, while still on fluticasone-salmeterol. He is Cushingoid, has a swollen left calf and pleuritic pain, and had a past allergic-like reaction to CT contrast.
- **Keyed decisions:** q1 (short, asthma KF4) harms of his asthma treatment. These include VTE from oral steroids, adrenal suppression or Cushing syndrome from itraconazole boosting fluticasone, the need to switch to budesonide-formoterol, hyperglycemia and hypertension. q2 (single, DVT-PE KF5) compression ultrasound of the left leg first. His chest film shows bronchiectasis and infiltrates, which makes V/Q unreliable, and his contrast reaction makes CTPA risky. q3 (short, DVT-PE KF6) LMWH, because rivaroxaban is contraindicated and apixaban should be avoided with itraconazole.
- **Sources:** GINA 2026, pages 131, 139 and 2019 to 2030 of the text (read). Thrombosis Canada, PE diagnosis guide, version of 30 April 2025, https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf (read). Thrombosis Canada Rivaroxaban guide (2 November 2025) and Apixaban guide (2 June 2025), https://thrombosiscanada.ca/clinical_guides/pdfs/RIVAROXABAN_54.pdf (both read).
- **Simcheck top 5:** dvt-pe-05 0.26/0.19, dvt-pe-04 0.21/0.21, chest-pain-04 0.18/0.19, dvt-pe-16 0.18/0.13, dvt-pe-46 0.18/0.17.
- **Decision search:** "itraconazole", "CYP3A4" and "P-glycoprotein" found no DOAC and antifungal key (cva-08 covers other rivaroxaban errors). "Adrenal" and "Cushing" found no key on steroid harms in asthma. "Compression ultrasound" of the leg is keyed in dvt-pe-05, 07, 12, 16, 18, 30 and 34, and in sob-12, for other reasons (pregnancy, DVT workup, CKD with contrast allergy).
- **Changes after the duplicate checks:** The suggested direction (contrast anaphylaxis with eGFR 25, leg ultrasound then V/Q) is already dvt-pe-07. A first draft used a breastfeeding woman after a caesarean, with LMWH over DOAC. Simcheck showed chest-pain-04 is that same story at 0.39, so it was replaced.

### asthma-copd-13 (cluster 1)

- **Old story:** A woman with mild asthma had restaurant food anaphylaxis with hypotension after two IM doses. The keys were epinephrine 0.5 mg IM, fluids and an infusion.
- **New story:** A 26-year-old line cook with no asthma diagnosis, sensitized to shrimp, gets hives and wheeze while boiling shrimp for a banquet. She has eaten nothing. Salbutamol gives no relief.
- **Keyed decisions:** q1 (single, asthma KF1) anaphylaxis to shrimp protein. It meets WAO criterion 1 through the skin, even though inhaled food allergen alone is excluded from criterion 2. q2 (short, anaphylaxis KF3) IM epinephrine 0.5 mg before more bronchodilator (0.01 mg/kg is 0.58 mg, capped at 0.5 mg). q3 (short, KF3) the next 10 minutes: a repeat IM dose at 5 to 15 minutes, wide-bore IV, 20 mL/kg crystalloid (about 1.2 L), salbutamol as an addition, and position. q4 (short, asthma KF1) work-related wheeze: occupational asthma from shellfish protein in steam, irritant or work-exacerbated asthma, and inducible laryngeal obstruction.
- **Sources:** Cardona V et al. WAO 2020, https://doi.org/10.1016/j.waojou.2020.100472 (full text, PMC7607509). GINA 2026 Box 9-6 ("If anaphylaxis and asthma, give IM epinephrine first"). Andrup L, Hadrup N, Madsen AM. Saf Health Work 2025, https://doi.org/10.1016/j.shaw.2025.08.001 (full text: steam from boiling shrimp triggers asthma, tropomyosin is heat stable, and work-related asthma is higher with shellfish).
- **Simcheck top 5:** anaphylaxis-39 0.25/0.16, anaphylaxis-08 0.22/0.19, sob-15 0.19/0.11, anaphylaxis-10 0.17/0.10, anaphylaxis-36 0.16/0.06.
- **Decision search:** "airborne", "steam" and "vapour" found no inhaled food anaphylaxis. "Occupational", "work-related" and "irritant" found no work-related asthma key. "Epinephrine 0.5 mg IM" is keyed in at least 8 anaphylaxis SAMPs. That is the literal key feature 3 treatment and cannot be avoided.
- **Note:** The cluster's "lighter option" would have kept asthma-copd-13. I rebuilt it because my task listed it.

### burns-01 (cluster 9)

- **Old story:** A man carried from a basement fire with facial burns and a hoarse voice, keyed to intubate now.
- **New story:** You are in a rural Saskatchewan emergency department. A 52-year-old farmer was sprayed by anhydrous ammonia from a burst hose. He has grey-white burns on his face, neck and forearm, white patches on his palate and wheeze, but a normal voice.
- **Keyed decisions:** q1 (short, KF2) serial signs that the airway is becoming threatened. q2 (single, KF2) the nasolaryngoscopy finding that supports intubation: swollen arytenoids and aryepiglottic folds, not palatal blisters or pharyngeal erythema. q3 (short, KF2) plan after a normal larynx: admit and observe for 6 to 12 hours or more, serial checks, airway readiness, humidified oxygen, bronchodilator, watching for late pulmonary edema, and no smoking for 72 hours. Discharge is unacceptable. q4 (short, KF3) titrated IV analgesia (fentanyl 1 mcg/kg is 90 mcg).
- **Sources:** ATSDR Medical Management Guidelines for Ammonia, page last reviewed 12 January 2017, https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=7&toxid=2 (full page read). Walker PF et al. Crit Care 2015, https://doi.org/10.1186/s13054-015-1077-4 (full text: 20 to 33% develop upper airway obstruction, and early intubation is favoured when obstruction is impending). Alaska burn resuscitation guidelines 2021, https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf (local text read: repeated small IV or IO doses).
- **Simcheck top 5:** sob-42 0.17/0.05, analgesia-sedation-11 0.17/0.16, burns-15 0.16/0.17, burns-14 0.16/0.15, analgesia-sedation-14 0.14/0.15.
- **Decision search:** "ammonia" and "alkali" found no burn or inhalation key. "Arytenoid", "aryepiglottic" and "laryngeal edema" found nothing keyed as the finding that decides intubation. burns-38 keys "nasolaryngoscopy at the bedside" as a test, not a finding. The q1 airway-threat signs overlap burns-15 q1, which is the wording of key feature 2.
- **Changes after the duplicate checks:** The suggested direction (a kitchen flash with singed hair, a normal voice and observation) is already burns-37, and burns-21 is close to it.

### burns-06 (cluster 35)

- **Old story:** A lineman in contact with a 14 400 volt line, with dark urine and a tense forearm. The keys were a urine target of 75 to 100 mL/hour and fasciotomy.
- **New story:** A 41-year-old electrician at a BC pulp mill is caught by an arc flash from 4160 volt switchgear 1 m away. He touched nothing. The blast knocked him down and his fleece jacket melted onto his arms. He has tinnitus and gritty eyes, and circumferential full thickness burns of both forearms (24% TBSA).
- **Keyed decisions:** q1 (short, burns KF1) associated injuries: eye, eardrum, head and spine, inhalation, possible conduction injury, hand circulation and psychological injury. q2 (short, environmental KF5) signs that current did pass through him. q3 (single, burns KF4) resuscitation as an adult thermal burn at 2 mL/kg/%TBSA. 2 x 85 x 24 is 4080 mL, and 2040 mL over the first 8 hours is 255 mL/hour, counted from the injury at 13:10. The distractors are 510 (the electrical formula), 383 (the children's formula), 170 (spread over 24 hours) and 128 (the later 16 hours). q4 (short, MSK KF7) bilateral escharotomy now, with the burn or plastic surgeon called. Delaying until transfer is unacceptable.
- **Sources:** Aggarwal S, Maitz P, Kennedy P. Burns 2011, https://doi.org/10.1016/j.burns.2011.01.017 (abstract read on Europe PMC). Zemaitis MR, Guirguis M, Cindass R. StatPearls, Electrical Injuries, 2025, https://www.ncbi.nlm.nih.gov/books/NBK448087/ (abstract read on Europe PMC because the NCBI page was captcha-blocked). Alaska burn resuscitation guidelines 2021 (adults 2 mL/kg, electrical 4 mL/kg, first 8 hours from the burn, urine 0.5 mL/kg/hour). Streitz MJ. Merck Manual, How to do burn escharotomy, updated May 2025 (page read: absent Doppler or distal SpO2 below 95%, medial and lateral incisions, above the fascia).
- **Simcheck top 5:** burns-23 0.23/0.07, environmental-35 0.20/0.05, burns-07 0.18/0.13, burns-31 0.18/0.06, environmental-13 0.17/0.16.
- **Decision search:** "flash", "arc", "conduction" and "current path" found no arc flash key. environmental-35 keys "hand to hand current path". "mL/hour" rates in the bank are 270, 500, 47 and 38, none of which is 255. "Escharotomy" is keyed in burns-23 (arm) and burns-07 (chest). The TBSA was changed from 22% to 24% after simcheck so it no longer matches burns-23.

## Stories of the other writers in these clusters

I re-read src/samps just before finishing. The current texts are:

- sob-04, sob-06 and sob-15 are still in their old text.
- airway-02 is a toddler, and airway-10 is a 9-year-old failing high flow.
- pulmonary-edema-01 is a man breathless while loading a truck. I changed asthma-copd-04 to avoid it.
- anaphylaxis-02 is a heparin reversal, anaphylaxis-15 is a farm wasp-sting patch, and shock-07 is a barbecue wasp sting.

None of these overlaps a g07 story.

## For the physician

1. **Sign-off:** All six ids are held back in `src/samps/held-back/g07.json` and need a fresh sign-off.
2. **asthma-copd-13:** The document's "lighter option" for cluster 1 kept this SAMP. It was rebuilt because it was assigned to me. Please confirm you wanted it rebuilt rather than kept.
3. **burns-06 q3:** This keys 2 mL/kg/%TBSA because no current passed (flash and flame), not the Alaska electrical 4 mL/kg. Please confirm you agree that an arc flash without conduction is resuscitated as a thermal burn.
4. **burns-06 q4:** This repeats the escharotomy decision of burns-23, as the cluster direction proposed. Only the setting and mechanism are new.
5. **asthma-copd-11 q2:** Compression ultrasound first is a common key in the bank. What is new here is the reason (an abnormal film from ABPA plus a prior contrast reaction).
6. **asthma-copd-11 q3:** Warfarin with LMWH overlap is accepted with frequent INR checks. Edoxaban and dabigatran are neither accepted nor marked unacceptable. Please decide whether either should be scored.
7. **asthma-copd-04 q3:** Cardioversion is marked unacceptable. The explanation extends Shenthar's warning about amiodarone restoring sinus rhythm with an LA thrombus to cardioversion in general.
8. **asthma-copd-01 q1:** The GINA red flags repeat asthma-copd-12 and the old sob-04. This is key feature 2's own wording (decision D1).
9. **Sources:** ATSDR (US), the Alaska guideline (US state) and StatPearls are not Canadian. No Canadian source covers ammonia, arc flash or burn fluid timing. Please confirm these are acceptable. The StatPearls and Aggarwal citations were checked from their abstracts only.
