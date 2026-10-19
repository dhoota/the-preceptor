# Writer report, round 2: batch s58 (Shock/dehydration, Q500)

File: `src/samps/s58/shock.ts`. Ids are unchanged (shock-48 to shock-52). All SAMPs stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. This revision answers `docs/reviews/q500-qa-s58.md` and needs a fresh independent review.

Checks run at the end, both clean:
- `npx tsc --noEmit -p . 2>&1 | grep 'samps/s58'`: no output.
- `SAMP_BATCH=s58 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 132 passed.

## Required fixes and how each was done

### shock-48

- **q3 (duplicate fluid choice).** Replaced. New decision: the timeline for replacing the rest of the HHS deficit. The key is half over the first 12 hours and the rest over the next 12 hours (JBDS 2023). Distractors are the whole deficit in 2 or 6 hours, spreading it over 72 hours, and maintenance only. Tagged key feature 2. The update no longer mentions corrected sodium.
- **q4 (beta-blocker vitals teaching).** Replaced with a key feature 1 question that uses a different sign. After 2 L she has passed 650 mL of urine, and the nurse thinks she is no longer dry. The key is that glucose in the urine pulls water with it (osmotic diuresis), so a brisk output in marked hyperglycemia does not prove her volume is restored. Distractors are beta-blockade, ramipril, kidney recovery and a stiff ventricle. Source: Diabetes Canada 2018 (osmotic diuresis drives urinary water and electrolyte loss). McGee is no longer quoted on losses.
- **Advisory, q2.** I added the effective osmolality (2 x 146 + 46 = 338 mmol/kg) beside the total value, as the reviewer suggested. The key and arithmetic are unchanged.
- JBDS stays in use (q3), so no source was removed.

### shock-49

- **q4 (compensated shock duplicate).** Replaced. The new update has her lying undressed in a cool room, with cold hands and feet and a fingertip refill of 5 seconds. She is still alert and her pulse is unchanged. The key is to rewarm her and repeat the test. Distractors are a 20 mL/kg bolus, an intraosseous needle, rechecking on the toes and a lactate. Source: Gorelick 1993 (a cool room prolonged refill to 2.39 versus 0.85 seconds, and only 31% were normal). Tagged key feature 1 (reading perfusion signs correctly in children). TREKK is no longer cited and was removed.

### shock-50

- **SAMP-level source.** SSC 2021 was replaced by Prescott 2026 (Crit Care Med, https://doi.org/10.1097/CCM.0000000000007075). Crossref returns that title, the first authors Prescott, Antonelli and Alhazzani, and the date 23 March 2026. Every SSC claim was rechecked against the SCCM 2026 recommendation page.
- **Stem.** To support a new antibiotic decision, one sentence changed. He now has bronchiectasis, a sputum culture 4 months ago grew Pseudomonas aeruginosa, and MRSA has never been found. q1 and q5 still read correctly against the new stem.
- **q2 (duplicate CAP regimen).** Replaced, still key feature 4. It is now a single-answer question: which antibiotic to give alongside azithromycin. The key is piperacillin-tazobactam, because of the prior respiratory isolation of Pseudomonas (ATS/IDSA 2019 Table 4: "Add coverage for P. aeruginosa and obtain cultures"). Ceftriaxone and ampicillin-sulbactam are the usual partners without antipseudomonal cover. Moxifloxacin lacks reliable Pseudomonas activity. Oral amoxicillin-clavulanate is not suitable for a patient in shock.
- **q3 (passive leg raise duplicate).** Replaced with a new key feature 4 decision: after the loading dose, give each beta-lactam dose by prolonged infusion over about 4 hours. SSC 2026 makes this a strong recommendation of moderate certainty.
- **q4 (MAP target duplicate, outdated, mistagged).** Replaced with a key feature 7 question on choosing the vasoactive agent by presentation. On norepinephrine he has a MAP of 64 mmHg, a sinus rate of 126/minute and a vigorous left ventricle. The key is to continue norepinephrine alone. Distractors are esmolol (SSC 2026 suggests against beta-blockers), switching to dopamine (recommended against), switching to epinephrine (raises the rate further) and switching to phenylephrine (not among the recommended agents). The explanation uses the 2026 age-specific MAP range of 60 to 65 mmHg for adults aged 65 or older. He is 78.
- **q5 (pass).** The key and options are unchanged. One sentence was added, as the reviewer suggested: the 2026 guideline also advises individualizing fluid rather than continuing it until lactate is normal. The question's source is still ANDROMEDA-SHOCK.
- 30 x 74 = 2 220 mL, given as "about 2.2 L".

### shock-51 (rebuilt from scratch)

- **New scenario.** Carcinoid crisis the day after hepatic artery embolization, in a woman with a small bowel neuroendocrine tumour, liver metastases and carcinoid syndrome. Paramedics gave IM epinephrine for presumed anaphylaxis and she got worse. Nothing about dissection, tamponade, pericardiocentesis or a balloon pump remains, so the unsourced balloon pump claim is gone. The Nazerian, Hansen and Tsukube sources were removed.
- q1, key feature 5: the cause of her shock is carcinoid crisis, a distributive shock from hormone release. Distractors are contrast anaphylaxis, bleeding, a liver abscess and a vasovagal reaction.
- q2, key feature 8: a **menu**, select three (crystalloid IV bolus, hydrocortisone IV, octreotide IV). ENETS 2022 Table 3 lists "Octreotide i.v. (bolus and continuous infusion), i.v. fluids, corticosteroids, vasopressors". Distractors are repeat epinephrine IM, furosemide IV and piperacillin-tazobactam IV.
- q3, key feature 6: bedside echo shows thickened tricuspid leaflets, severe tricuspid regurgitation and a dilated right ventricle, which is carcinoid heart disease. ENETS 2022 describes right-sided fibrous plaques, with tricuspid regurgitation usually the main lesion, and a prevalence of 20% to 50% in carcinoid syndrome.
- q4, key feature 7: vasopressin infusion. ENETS 2022 says "Sympathomimetics can precipitate hormonal release by the tumour" and "the selective alpha1-agonist phenylephrine and vasopressin are the preferred vasopressors in this context". Phenylephrine is left out of the options so that only one keyed agent can be defended. Norepinephrine is also left out because some sources accept low doses.
- Uniqueness: "carcinoid crisis" and "carcinoid heart" appear nowhere else in `src/samps` or `src/cases`. The word "carcinoid" appears only as an endobronchial tumour distractor in s64 and inside a pheochromocytoma explanation in s51.

### shock-52

- **Stem.** I changed one detail: her daughter found missed apixaban doses and does not know when she last took one. This replaces "last taken at breakfast 4 hours ago" and supports the new q1. q2 is unaffected.
- **q1 (shock index duplicate).** Replaced. Which test best shows her apixaban effect: an apixaban-calibrated anti-Xa level. European trauma guideline 2023, Recommendation 34, suggests measuring plasma levels of oral anti-Xa agents (Grade 2C). Distractors are the INR, aPTT, thrombin time and a heparin-calibrated anti-Xa level. Tagged key feature 8, because the level decides whether a reversal therapy is indicated.
- **q2 (pass).** Unchanged.
- **q3 (PCC duplicate).** Replaced with imaging after she responds to blood: contrast CT now, without prophylactic fluid, despite an eGFR of 35. The CAR 2022 contrast guidance says not to delay emergent contrast imaging for kidney function, and it considers prophylaxis only below an eGFR of 30. Tagged key feature 6. The eGFR is the CKD-EPI 2021 value for an 81-year-old woman with a creatinine of 132 umol/L: 142 x (1.493/0.7)^-1.2 x 0.9938^81 x 1.012, about 35.
- **q4 (tranexamic acid duplicate).** Replaced. After CT shows extravasation, her systolic pressure is 64 mmHg despite more blood while she waits 20 minutes for angiography. The key is to add norepinephrine. European Recommendation 14 reads: "If a restricted volume replacement strategy does not achieve the target blood pressure, we recommend the administration of noradrenaline in addition to fluids" (Grade 1C). Recommendation 13 sets a systolic target of 80 to 90 mmHg. Distractors are dobutamine (for myocardial dysfunction), epinephrine (linked to higher mortality in the guideline's rationale), dopamine and phenylephrine. Vasopressin is left out because the guideline discusses some trial evidence for it. Tagged key feature 7.
- The Pandit, NAC PCC and CRASH-2 sources were removed because nothing cites them now.

## Departure from the verdict, for the reviewer to judge

The verdict asked for **new key feature 8 decisions** in shock-52 q3 and q4. After searching the whole bank, not only the catalogues, I could not find a second key feature 8 decision for this patient that is not already keyed:

| Candidate | Where it is already keyed |
|---|---|
| Four-factor PCC for apixaban | shock-13 q3 |
| Andexanet alfa | accept item in shock-13. It also conflicts with the reviewer's note that most Canadian centres use PCC |
| Calcium chloride for low ionized calcium | multiple-trauma (s45) q2 |
| Fibrinogen concentrate | multiple-trauma q2 |
| Pelvic binder | multiple-trauma "Apply a pelvic binder now" |
| No platelets for an antiplatelet drug | s39 gi-bleed q3 |
| Stress-dose hydrocortisone in an older patient with pubic rami fractures on chronic prednisone | multiple-trauma-45 q1 and q2 (s45) |
| No reversal when the drug effect has worn off | s68 gi-bleed q4 |
| Tranexamic acid | shock-05 q3 |

So in shock-52, q1 carries key feature 8 (the anti-Xa level that decides whether reversal is indicated), q3 is key feature 6 and q4 is key feature 7. Key feature 8 is also restored by shock-51 q2 (octreotide, fluids and hydrocortisone for carcinoid crisis). If the reviewer considers the anti-Xa level a key feature 6 investigation rather than key feature 8, the batch still covers key feature 8 through shock-51 q2.

The verdict asked for shock-48 q4 to be a key feature 1 decision with a different sign. The osmotic diuresis question fits "recognize subtle shock in older adults", because it explains why a reassuring urine output hides an ongoing deficit. Please confirm the tag.

## Key feature coverage after revision

| KF | Questions |
|---|---|
| 1 Subtle shock in atypical groups | 48 q4, 49 q4 |
| 2 Fluid deficit | 48 q1, 48 q2, 48 q3, 49 q1, 49 q2 |
| 3 Resuscitation fluid | 49 q3 |
| 4 Septic shock fluids and antibiotics | 50 q2, 50 q3, 50 q5 |
| 5 Non-hypovolemic shock types | 51 q1 |
| 6 Ultrasound, X-ray, ECG and imaging for the cause | 50 q1, 51 q3, 52 q2, 52 q3 |
| 7 Vasopressor by shock type | 50 q4 (septic, tachycardia), 51 q4 (carcinoid), 52 q4 (hemorrhagic) |
| 8 Non-fluid therapies | 51 q2 (menu), 52 q1 |

Every key feature is covered, and key features 1, 5, 7 and 8 are restored as the verdict required. The batch has 21 questions: 20 single and 1 menu (51 q2). Single-answer keys by position (first to fifth): 4, 5, 3, 4, 4. The highest share is 25 percent.

## How uniqueness was checked

- I read the whole shock catalogue. I searched the loc, sob, infectious-diseases, chest-pain and multiple-trauma catalogues, plus the tox, arrhythmia, environmental and delirium catalogues, by keyword for every candidate decision.
- I also grepped `src/samps` and `src/cases` directly, because several duplicates sit in topics outside the catalogue set. Ideas rejected for that reason:
  - acute aortic regurgitation from endocarditis (pulmonary-edema-15)
  - thyroid storm (delirium-agitation and environmental)
  - checkpoint inhibitor myocarditis (s48 pulmonary-edema)
  - toxic shock syndrome (infectious-diseases-07)
  - myxedema, local anesthetic toxicity, iron, metformin, digoxin and organophosphate poisoning (tox, loc, environmental)
  - hypoxic infant bradycardia (arrhythmia-28)
  - empyema drainage, which also could not be sourced to a readable guideline text
- No other item in the bank keys any of these: the HHS replacement timeline, osmotic diuresis hiding a deficit, cold-room capillary refill, antipseudomonal cover for prior Pseudomonas, prolonged beta-lactam infusion, norepinephrine kept through sepsis tachycardia, carcinoid crisis and carcinoid heart disease, the apixaban-calibrated anti-Xa level, emergent contrast CT at an eGFR of 35, or norepinephrine added in hemorrhagic shock.
- Every patient's numbers are new or carried over from the passing questions of the same SAMP.

## Sources (all verified this session)

- Prescott HC, et al. Surviving Sepsis Campaign 2026. Crit Care Med. 2026. https://doi.org/10.1097/CCM.0000000000007075. Crossref checked. Recommendations read at https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026 (prolonged beta-lactam infusion, MAP 60 to 65 mmHg at age 65 or older, against beta-blockers, norepinephrine first line over dopamine, individualized fluid).
- Metlay JP, et al. ATS/IDSA CAP 2019. https://doi.org/10.1164/rccm.201908-1581ST. Table 4 read in PMC6812437.
- Grozinsky-Glasberg S, Davar J, Hofland J, et al. ENETS 2022 guidance paper for carcinoid syndrome and carcinoid heart disease. J Neuroendocrinol. 2022. https://doi.org/10.1111/jne.13146. Crossref checked. Full text read in PMC9539661.
- Rossaint R, et al. European trauma bleeding guideline, sixth edition. Crit Care. 2023. https://doi.org/10.1186/s13054-023-04327-7. Recommendations 13, 14 and 34 read in PMC9977110.
- Macdonald DB, Hurrell C, Costa AF, et al. CAR guidance on contrast associated acute kidney injury. Can Assoc Radiol J. 2022. https://doi.org/10.1177/08465371221083970. Crossref checked. The content (no delay for eGFR in emergencies, prophylaxis considered only below an eGFR of 30) was confirmed through secondary summaries.
- Gorelick MH, Shaw KN, Baker MD. Effect of ambient temperature on capillary refill in healthy children. Pediatrics. 1993. https://doi.org/10.1542/peds.92.5.699. Crossref and Europe PMC abstract checked.
- Mustafa OG, et al. JBDS HHS guideline. Diabet Med. 2023. https://doi.org/10.1111/dme.15005. Read in PMC10107355: replace about 50% of the loss in the first 12 hours, caution in older adults and heart failure, and an osmolality target fall of 3.0 to 8.0 mOsm/kg/h.
- Diabetes Canada 2018, chapter 15. https://doi.org/10.1016/j.jcjd.2017.10.013. Read at https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15: osmotic diuresis causes urinary water and electrolyte loss, and water loss is 100 to 200 mL/kg in HHS.
- Unchanged and still cited: McGee 1999, Steiner 2004, CPS bronchiolitis, Lichtenstein 2009, ANDROMEDA-SHOCK 2019, Friese 2007.

## Uncertain, for the reviewer

- **48 q3:** Diabetes Canada says only that HHS fluids should be individualized, so the 12 plus 12 hour timeline rests on the UK JBDS guideline. Diabetes Canada also advises lowering osmolality no faster than 3 mmol/kg/h, while JBDS gives 3 to 8. Neither figure appears in the item.
- **48 q4:** JBDS uses a urine output of 0.5 mL/kg/h or more as one marker that hypovolemia is corrected. The item does not contradict this. It teaches that output is unreliable while glucose is still 34 mmol/L.
- **49 q4:** The source studied healthy children. Applying it to a dehydrated infant is a judgement, so her other perfusion signs (alert, unchanged pulse) are given in the update.
- **51:** The evidence for treating carcinoid crisis is low quality and mostly expert opinion. The 2022 ENETS guidance is the most current source, and every keyed claim was checked against its wording.
- **52 q3:** The CAR wording was confirmed through secondary summaries (First10EM and NICE NG148 documents), and the bibliographic details through Crossref. The full text was not opened.
- **52 q4:** The guideline also cautions that permissive hypotension should be considered carefully in older patients. The stem makes her pressure (64 mmHg with drowsiness) clearly below any target.

## Round 3

This round answers `docs/reviews/q500-verify2-s58.md`. shock-48 and shock-49 passed and were not touched. The only file edited is `src/samps/s58/shock.ts`. The s58 type check grep is clean, and the batch tests pass (132).

### Mock-mode cue fixes (ruling B6)

- **shock-50 q3.** The update now reads "His first beta-lactam dose ran IV over 30 minutes within the first hour." The prompt now asks about "his next beta-lactam doses". Piperacillin-tazobactam is no longer named, and the explanation never named it.
- **shock-50 q5.** "on norepinephrine" was removed. The update now reads "Three hours later his MAP is 67 mmHg."
- **shock-51 q3.** The update now opens "An hour after arrival her JVP is at the angle of the jaw." It no longer says crystalloid was given.
- **shock-51 q4.** The update now opens "Her initial treatment for the crisis is running." None of the q2 answers is named.

### shock-52 rebuilt

**New scenario.** A 52-year-old man with stage 4 chronic kidney disease is being assessed for a living donor kidney transplant. He bled into the tissue around his left kidney 9 hours after an outpatient needle biopsy of that kidney, and he had been sent home after 6 hours of observation. He takes no anticoagulant and stopped ASA 7 days before the biopsy. There is no fall, no fracture, no DOAC, no FAST and no contrast decision. A grep of `src/samps` and `src/cases` for "kidney biopsy" and "renal biopsy" finds nothing.

| q | KF | Decision | Key | Source |
|---|---|---|---|---|
| q1 | 6 | Which bedside ultrasound finding explains the shock | Hypoechoic collection around the left kidney (perinephric hematoma) | Marwah and Korbet 1996: 77% of complications seen by 8 h, 95% by 12 h, and perinephric hematoma counted as a complication |
| q2 | 3 | Resuscitation fluid for a transplant candidate in hemorrhagic shock | red cells 2 units IV now | KDIGO 2012 anemia guideline, chapter 4 |
| q3 | 8 | Clotting treatment with normal platelets, INR and aPTT but a urea of 34 mmol/L | desmopressin IV | Hedges 2007 review of uremic bleeding treatment |
| q4 | 7 | The passing round 2 decision, carried over: add norepinephrine at a systolic of 66 mmHg while waiting for interventional radiology | norepinephrine infusion | European bleeding guideline, Recommendations 13 and 14 |

**KDIGO wording behind q2.** The guideline was read in full text through Europe PMC (PMC4089676).
- Recommendation 4.1.2: "we specifically recommend avoiding, when possible, red cell transfusions to minimize the risk of allosensitization."
- Recommendation 4.2: transfuse "when rapid correction of anemia is required to stabilize the patient's condition (e.g., acute hemorrhage...)".

**Uniqueness, checked by grep across `src/samps` and `src/cases`:**
- Transfusion in a transplant candidate is not keyed anywhere. No item links "transplant" with "transfus", "sensitiz" or "HLA".
- Desmopressin appears in s11, s14, s39, s45 and s50, always as a distractor and never in a uremic context. Uremic platelet dysfunction appears only as a distractor in s68 gi-bleed q3, a von Willebrand question.
- The q4 decision is not keyed anywhere else in the bank.

**Mock-mode check within shock-52.**
- No update names an earlier key. The q3 update gives laboratory results only, and the q4 update says "the resuscitation given so far".
- The q3 options carry no doses, so the item does not depend on a desmopressin dose.

**Key feature coverage.** Every shock key feature is still covered. Key feature 8 is now carried by 51 q2 and 52 q3. Single-answer keys by position are 3, 5, 4, 4, 4 of 20, so no position is above 25% and every position is used.

**Sources.** Friese 2007 and CAR 2022 were removed, since nothing cites them now. Three were added, and each was confirmed through Crossref and Europe PMC:
- Marwah DS, Korbet SM. Am J Kidney Dis. 1996. https://doi.org/10.1016/s0272-6386(96)90129-8 (abstract read).
- KDIGO Anemia Work Group. Kidney Int Suppl. 2012. Chapter 4. https://pmc.ncbi.nlm.nih.gov/articles/PMC4089676/ (full text read).
- Hedges SJ, et al. Nat Clin Pract Nephrol. 2007. https://doi.org/10.1038/ncpneph0421 (abstract read).

### Uncertain, for the reviewer

- **q3, Hedges.** The abstract lists desmopressin among the uremic bleeding treatments but gives no dose or onset. The item therefore states neither. A small 1996 study of fistula oozing (Hong) found no clear benefit, so desmopressin is the best of the five options here rather than a proven therapy.
- **q1, Marwah and Korbet.** The source supports the timing figures and names perinephric hematoma as a biopsy complication. The ultrasound appearance is standard teaching and is not quoted from the source.
