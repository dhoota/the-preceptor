# s51: Shortness of breath

32 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s51 sob-25 q4 pediatric airway source. sob-36 q3 half-dose tenecteplase rests on CCS tip. sob-40 q3 rebuilt to epinephrine. s24 AHA 2025 claims confirmed via summaries only.
- s51 sob-23 q3 serial leg US after nondiagnostic V/Q at high pretest (Thrombosis Canada vs Wells 1998). sob-43 rebuilt as stopped epoprostenol infusion.
- s48 Lens B: reject or keep pulmonary-edema-39 and 40 (near copies of 23 and 31). Repeated teaching 16 q1 (s28, s42), 21 q1 (s12, s05), 35 q2 (s51 sob-17), 38 q1 (s15 pe-03). Four questions key "NIV failing, intubate". 29 q1 bendopnea at BMI 43 may be weak.
- sob-26 q3: I could not confirm from the sources that stridor at rest marks a specific lumen size. The explanation says only that symptoms move from exertion to rest as the lumen narrows. *(samps-overlap-pass2b.md)*
- sob-20 keys phentolamine as the alpha blocker for the crisis. Please confirm it is stocked in your hospital. The sources support alpha blockade first and a beta blocker only afterward. *(samps-replace-s51.md)*
- sob-16 rests on case literature for retropharyngeal hematoma, because no guideline covers it. The reversal dose follows the NAC sample INR-based schedule of 2 000 units for an INR of 3 to 5. *(samps-replace-s51.md)*
- sob-17 q2 is a menu question keyed None. Please confirm that no antibiotic or steroid is wanted for a drowning patient with crackles and pink frothy sputum. *(samps-replace-s51.md)*
- sob-18 q2 keys azithromycin before the PCR result. Erythromycin and clarithromycin were kept out of the options because CDC lists them as acceptable at 1 to 5 months. *(samps-replace-s51.md)*
- sob-21 q3 keys intubation over NIV in a drowsy woman at 31 weeks. The NIV guideline is cited for the principle that NIV needs an alert, cooperative patient, not for a pregnancy-specific rule. *(samps-replace-s51.md)*
- sob-24 states in the stem that the department uses PEGeD, so the 1 000 ng/mL threshold applies. His age-adjusted cut-off (630) would give a different answer, and the explanation says so. *(samps-replace-s51.md)*
- sob-27 cites the 2011 ATS/ERS/JRS/ALAT recommendation against mechanical ventilation for most patients with IPF. Later IPF guidelines did not revisit this question. *(samps-replace-s51.md)*
- sob-29 q2 uses Winter's formula. It is cited to the original 1967 paper. *(samps-replace-s51.md)*
- sob-36 q3 keys referral for TIPS for refractory hepatic hydrothorax. An indwelling pleural catheter, which AASLD allows with caution, was kept out of the options. *(samps-replace-s51.md)*
- sob-39 q3 keys pulse methylprednisolone. The ACR/VF guideline accepts pulse IV or high-dose oral glucocorticoids, so high-dose oral prednisone was kept out of the options. *(samps-replace-s51.md)*
- sob-40 cites CDC interim guidance because no Canadian guideline for vaping lung injury exists. *(samps-replace-s51.md)*
- sob-41 q4 relies on the ESC three level scale, where a Wells score of 4.5 is intermediate. Thrombosis Canada allows more testing when suspicion stays high after a negative CT, so a reviewer may want the pretest wording checked. *(samps-replace-s51.md)*
- sob-44 cites a 2023 narrative review for hypermagnesemia. The review's magnesium thresholds are in unusual units, so the SAMP relies only on the order in which signs appear and on IV calcium 1 g. *(samps-replace-s51.md)*
- sob-47 keys the left lateral head-down position with 100% oxygen. The evidence for positioning in venous air embolism is weak but it is standard advice. *(samps-replace-s51.md)*
- sob-24 q3 and q4 rest on CHEST 2021 for subsegmental PE, because no Canadian guideline covers it. The key avoids the anticoagulation versus surveillance question, which is still in equipoise, by adding a popliteal DVT. *(samps-replace-s51.md)*
- sob-29 relies on a CJEM case report and the ATSDR toluene guideline. ATSDR suggests potassium phosphate, so the key reads "potassium replacement IV". *(samps-replace-s51.md)*
- sob-47 cites a single review (Luzzatto 2020). Please confirm transfusion is the keyed first step at a hemoglobin of 57 g/L with dyspnea at rest. *(samps-replace-s51.md)*
- sob-17 q4 accepts that a long QT arrhythmia is still possible in any unexplained drowning. The key rests on the breath-holding history. *(samps-replace-s51.md)*
- sob-45 q2 keys small fluid boluses with a vasopressor. The cited source supports careful fluids, not vasopressors specifically. *(samps-replace-s51.md)*
- shock-28 (s50) and the old sob-47 had the same story. Whoever owns s50 should know that sob-47 no longer uses it. *(samps-replace-s51.md)*
- sob-20 phentolamine supply in Canada remains to be confirmed, as the writer noted. *(samps-replace-s51.md)*
- sob-24 q4 is mapped to KF3 (emergency treatment of severe dyspnea, invasive or noninvasive ventilation), kept from the original SAMP. Starting anticoagulation for a popliteal DVT in a stable patient does not really test KF3. Consider a remap if batch coverage allows. *(samps-replace-s51.md)*
- sob-29 q3 and sob-47 q3 are also mapped to KF3 for potassium replacement and transfusion. This is a loose fit. *(samps-replace-s51.md)*
- sob-24 q4 update still implies leg imaging, so a careful candidate can infer the q3 key. The cue is weaker than before and cannot be removed without changing q3. *(samps-replace-s51.md)*
- Counts: fixed 2 (sob-24, sob-47), pass 1 (sob-29). None re-rebuilt. *(samps-replace-s51.md)*
- Checks: SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts 647 passed. npx tsc --noEmit -p . clean. *(samps-replace-s51.md)*
- pulmonary-edema-35 q2 (signs that CPAP is failing) and q3 (intubate) repeat pulmonary-edema-08 q1 and q2 (s15) and sob-17 q3 (s51). The rural transfer angle in q3 is new. q2 is not. Flagged, not rewritten, because I could not fetch a source for a verifiable replacement (CPAP settings in Masip 2018). *(samps-s48-lensA.md)*
- pulmonary-edema-16 q3 (ECG, troponin, echo to find the trigger, with blood cultures, D-dimer, lipase and drug screen as distractors) nearly repeats sob-17 q4 (s51) and pulmonary-edema-01 q3 (s15). Flagged. *(samps-s48-lensA.md)*
- pulmonary-edema-35 q2 (escalate nitrate, not beta-blocker, in hypertensive edema) overlaps sob-17 q2 (s51), which keys a nitroglycerin infusion at 100 mcg/minute with the same beta-blocker distractors. The bolus angle is new. *(samps-s48-lensB.md)*
- Within the batch, "NIV failing, so intubate" is keyed four times: pulmonary-edema-21 q2, pulmonary-edema-23 q3, pulmonary-edema-26 q3 and pulmonary-edema-34 q3. It is also in pulmonary-edema-08 (s15) and sob-17 q3 (s51). Consider varying one or two. *(samps-s48-lensB.md)*
- review-extra.ts is two exact duplicates. sob-48 copies sob-26 (Ludwig angina) word for word, and sob-49 copies sob-37 (methanol) word for word. Each copy also carried a planted defect: a wrong key in sob-48 and a made-up lactate in sob-49. Both are now fixed, but neither should be added to the bank. They would fail the near-duplicate stem rule (trigram overlap 1.0). Recommend dropping both. *(samps-s51-lensA.md)*
- sob-25 q4 cites the adult CAFG Part 2 for a 3-year-old. The principle holds, but a pediatric airway source would be better. *(samps-s51-lensA.md)*
- sob-36 q3: the half dose rests on a CCS "practical tip" (may be considered), not a formal recommendation. It is the current standard, backed by STREAM-2 and ESC practice. A physician should confirm it is safe to key a single best answer over the full 35 mg dose. *(samps-s51-lensA.md)*
- sob-40 q3 was rebuilt. Please confirm that epinephrine rather than milrinone is the expected first agent for a hypotensive child with myocarditis. Milrinone is not among the options. *(samps-s51-lensA.md)*
- sob-23 q3: Thrombosis Canada 2023 advises serial leg ultrasound after any V/Q scan that is neither normal nor high probability. The Wells 1998 study behind that pathway sent patients with a high pretest probability and a nondiagnostic scan to angiography. Serial ultrasound was mainly for low and moderate pretest probability. This patient's Wells score is 7.5. The key follows the current Canadian guide, but a physician should confirm it. The alternative is to lower the pretest probability in the stem. *(samps-s51-lensA2.md)*
- sob-37 q2 and q3: repeat teaching points already in s25, s17 and sob-27 (see overlap). A physician may want q3 moved to a point specific to obesity hypoventilation, for example the high EPAP often needed, or ATS advice to discharge on PAP until outpatient titration. *(samps-s51-lensA2.md)*
- sob-26 (outside the five named SAMPs, but in this batch): Ludwig angina repeats airway-20 (s21) and the s41 infectious-diseases Ludwig SAMP in scenario and teaching. The earlier reviews did not flag it. Recommend a rebuild or dropping it. *(samps-s51-lensA2.md)*
- review-extra.ts: both planted defects were back on disk for the third time (sob-48 key, sob-49 lactate), and sob-49 now copies the rebuilt sob-37. Neither extra should enter the bank. Someone should check what keeps restoring this file. *(samps-s51-lensA2.md)*
- sob-37: near duplicate of loc-25 in scenario and teaching points (see overlap). Recommend a rebuild around a different acidosis cause of dyspnea (for example salicylate or DKA with Kussmaul breathing), or dropping it. *(samps-s51-lensB.md)*
- sob-33 q2 and q3: same teaching point as loc-38 q1 and q2. Recommend refocusing sob-33 on the airway and burn items and dropping or rebuilding the cyanide antidote question. *(samps-s51-lensB.md)*
- sob-23 q2: same age-adjusted D-dimer point and the same value (690) as chest-pain-32 q3. At least change the numbers. Better, move the question to a different PE diagnostic decision. *(samps-s51-lensB.md)*
- sob-43 q3: repeats the "6 weeks after arthroplasty, outside the 3 week window" point of chest-pain-21 q2. Consider a different timing or contraindication detail. *(samps-s51-lensB.md)*
- review-extra.ts: sob-48 is sob-26 word for word apart from the key, and sob-49 is sob-37 word for word apart from the added sentence. Both would fail the near duplicate stem rule if added to the bank. Recommend dropping both. Note also that both planted defects were back in the file after the Lens A review reported them fixed (file time 05:24, Lens A report 05:21). Someone should confirm which version is meant to be current. *(samps-s51-lensB.md)*
- sob-48 and sob-49 in `review-extra.ts` must not be added to the bank. Their stems have a word trigram overlap of 1.00 with sob-26 and sob-37. They are verbatim copies, and sob-48 is also a copy of sob-26 question by question. The bank duplicate test does not catch this because `review-extra.ts` is not imported into the bank. I fixed the planted defects so that the file is internally correct, but the copies should be dropped. Both planted defects were fixed once before and came back. Someone should check how this file is regenerated. *(samps-s51-lensB2.md)*
- sob-37 q2 lead-in "not purely acute" is phrased as a negative, though it is not a "Which is NOT" item. I left it. A physician may prefer "has been present for days or longer". *(samps-s51-lensB2.md)*

Review reports: docs/reviews/writer-s51.md, samps-s51-lensA.md, samps-s51-lensB.md

## SAMPs

### sob-16: Throat pain after a fall at home

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 71-year-old woman presents to the emergency department 8 hours after she tripped on a rug and struck her chin and the front of her neck on the edge of a kitchen counter. Over the last 3 hours she has had pain on swallowing, a muffled voice and tightness in her throat. She is more breathless lying flat. She takes warfarin for atrial fibrillation. Her INR today is 4.6. She is sitting upright and spitting saliva into a cup. There is bruising over the front of the neck. The posterior pharyngeal wall bulges forward and looks dark purple. There is no stridor. The chest is clear. The cervical spine is not tender.

- Temperature: 36.9°C oral
- Pulse: 104/minute irregular
- Resp.: 22/minute
- BP: 164/88 mmHg
- O2 sat: 96% on room air
- Weight: 68 kg

#### Q1
**Which of the following findings best places the cause of her breathlessness in the upper airway?**

- A. Breathlessness when lying flat
- B. Bulging dark posterior pharyngeal wall  **(key)**
- C. Clear breath sounds in both lungs
- D. Irregular pulse of 104/minute
- E. Oxygen saturation of 96%

*Explanation:* A dark, bulging posterior pharyngeal wall shows a mass directly behind the airway, and it fits with her muffled voice, painful swallowing and pooled saliva. Breathlessness when lying flat occurs with heart failure as well as upper airway narrowing, so it does not place the problem. Clear lungs make a lower airway cause less likely but do not show where the obstruction is. The irregular pulse reflects her known atrial fibrillation. A normal saturation does not measure how narrow the airway has become.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Eskander A, de Almeida JR, Irish JC. Acute upper airway obstruction. N Engl J Med. 2019. https://doi.org/10.1056/NEJMra1811697

#### Q2
**Which of the following is the most likely cause of her throat symptoms and breathlessness?**

- A. Acute epiglottitis
- B. Angioedema of the pharynx
- C. Cervical esophageal perforation
- D. Retropharyngeal abscess
- E. Retropharyngeal hematoma  **(key)**

*Explanation:* A blow to the front of the neck, bruising over the neck and a dark purple swelling of the posterior pharyngeal wall in a woman with an INR of 4.6 point to bleeding into the retropharyngeal space. Minor trauma is enough to cause this in a patient taking warfarin, and the hematoma can compromise the airway. A retropharyngeal abscess develops over days with fever, and she is afebrile. Epiglottitis follows a febrile sore throat and does not bruise the neck. Angioedema swells the lips, tongue or uvula rather than the posterior pharyngeal wall. Esophageal perforation follows forceful vomiting or instrumentation, which she has not had.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Akoglu E, Seyfeli E, Akoglu S, et al. Retropharyngeal hematoma as a complication of anticoagulation therapy. Ear Nose Throat J. 2008. https://pubmed.ncbi.nlm.nih.gov/18404913/

#### Q3
*Update:* CT of the neck confirms a large retropharyngeal hematoma narrowing the oropharyngeal airway. Anesthesia and otolaryngology are on their way to plan her airway.

**Which of the following treatments should be given now while the airway team prepares?**

- A. Frozen plasma 4 units IV
- B. Hold warfarin and repeat the INR
- C. PCC 2 000 units and vitamin K 10 mg IV  **(key)**
- D. tranexamic acid 1 g IV alone
- E. vitamin K 10 mg IV alone

*Explanation:* An INR of 4.6 lets the hematoma keep growing toward complete obstruction, so warfarin must be reversed at once. The National Advisory Committee on Blood and Blood Products gives 2 000 units of prothrombin complex concentrate (PCC) as a sample dose for an INR of 3 to 5, with IV vitamin K given at the same time, since vitamin K starts to lower the INR only after about 6 hours. Vitamin K alone is therefore too slow. The committee calls plasma for warfarin reversal inappropriate. Tranexamic acid does not replace the missing clotting factors. Holding warfarin and waiting lets the INR fall over days.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada

### sob-17: Found at the bottom of the pool

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 17-year-old boy is brought to the emergency department by ambulance after a lifeguard pulled him from the bottom of a public swimming pool. He is a strong competitive swimmer. His friends say he had been swimming lengths underwater on one breath, after breathing fast and deep at the wall for a minute to stay under longer. He did not dive. He was not breathing for about 1 minute and started breathing after two rescue breaths, then coughed and vomited pool water. He has not vomited since. His friends say he used no alcohol or drugs. He is alert and oriented. He coughs pink frothy sputum. There are crackles throughout both lungs without wheeze. There is no sign of head or neck injury.

- Temperature: 36.1°C tympanic
- Pulse: 118/minute
- Resp.: 32/minute
- BP: 126/74 mmHg
- O2 sat: 88% on 15 L/minute by nonrebreather mask

#### Q1
**Which of the following is the most appropriate respiratory support for him now?**

- A. Bag-valve-mask ventilation
- B. High flow nasal oxygen at 40 L/minute
- C. Noninvasive ventilation by face mask  **(key)**
- D. Rapid sequence intubation
- E. Venturi mask at 60% oxygen

*Explanation:* He is alert, protecting his airway and no longer vomiting, but he stays hypoxemic on a nonrebreather mask because aspirated water has flooded his alveoli. The Wilderness Medical Society notes that noninvasive positive pressure ventilation has been used successfully in alert drowning patients with mild to moderate respiratory symptoms, with caution in those who are vomiting or confused. A Venturi mask gives less oxygen than he already receives. High flow nasal oxygen adds only a small and variable positive pressure. Intubation is kept for a falling level of consciousness or failure of noninvasive support. Bag-mask ventilation is for a patient who is not breathing adequately.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Davis CA, Schmidt AC, Sempsrott JR, et al. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024. https://doi.org/10.1177/10806032241227460

#### Q2
**Which of the following medications should be started now to treat the lung injury from drowning?**

Select 1.

- A. ceftriaxone IV
- B. dexamethasone IV
- C. furosemide IV
- D. methylprednisolone IV
- E. piperacillin-tazobactam IV
- F. salbutamol by inhaler
- G. None  **(key)**

*Explanation:* The Wilderness Medical Society finds no evidence to support antibiotics or corticosteroids for the initial treatment of drowning. Ceftriaxone, piperacillin-tazobactam, dexamethasone and methylprednisolone therefore add risk without benefit. Antibiotics are considered later only if signs of pneumonia develop. Furosemide treats volume overload, which a healthy teenager who has just aspirated water does not have. Salbutamol treats bronchospasm, and he has crackles without wheeze. Support with oxygen and positive pressure is the treatment.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Davis CA, Schmidt AC, Sempsrott JR, et al. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024. https://doi.org/10.1177/10806032241227460

#### Q3
*Update:* After 1 hour of noninvasive ventilation at an FiO2 of 0.6, his O2 saturation is 93% and his pulse is 112/minute. He still has crackles in both lungs and pink frothy sputum. He has become drowsy and has vomited once into the mask.

**Which of the following findings best shows that noninvasive ventilation is no longer safe for him?**

- A. Crackles still heard in both lungs
- B. Drowsiness with vomiting into the mask  **(key)**
- C. O2 saturation of 93% on an FiO2 of 0.6
- D. Pink frothy sputum with coughing
- E. Pulse of 112/minute

*Explanation:* A falling level of consciousness with vomiting means he can no longer protect his airway under a tight mask, and the Wilderness Medical Society warns that noninvasive ventilation carries a higher risk of vomiting and aspiration in a drowning patient with altered mental status. He now needs intubation. His saturation of 93% has improved on support. Crackles and frothy sputum are expected while aspirated water clears and do not by themselves mean failure. A pulse of 112/minute has fallen from 118/minute.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Davis CA, Schmidt AC, Sempsrott JR, et al. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024. https://doi.org/10.1177/10806032241227460

#### Q4
**Which of the following best explains why he lost consciousness under water?**

- A. Arrhythmia from a long QT syndrome
- B. Cold shock from sudden immersion
- C. Hypoglycemia during hard exercise
- D. Hypoxic blackout after hyperventilating  **(key)**
- E. Seizure from new onset epilepsy

*Explanation:* Breathing fast and deep before swimming underwater lowers his carbon dioxide, which delays the urge to surface. His oxygen falls first, and he loses consciousness under water without warning. In a New York State series, these dangerous breath-holding behaviours mainly affected advanced swimmers, and all the deaths were in swimmers aged 17 to 22 years. Cold shock occurs in the first minutes after sudden immersion in cold water, and he had been swimming lengths. Nothing in his history suggests hypoglycemia or a seizure disorder. A long QT arrhythmia remains possible in any unexplained drowning, but his breath-holding history explains this event.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Boyd C, Levy A, McProud T, et al. Fatal and nonfatal drowning outcomes related to dangerous underwater breath-holding behaviors. New York State, 1988 to 2011. MMWR Morb Mortal Wkly Rep. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4584570/

### sob-18: Coughing spells in a young infant

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 7-week-old girl is brought to the emergency department by her parents with 10 days of cough. For 4 days she has had coughing spells that end in vomiting. Twice today her face turned blue during a spell and she stopped breathing for several seconds until her mother picked her up. She has had no fever. She was born at term and has not yet had any vaccines. Her mother did not receive a pertussis vaccine in pregnancy. Her 12-year-old brother has had a cough for 3 weeks. Between spells she looks well and feeds. Her chest is clear.

- Temperature: 37.0°C rectal
- Pulse: 156/minute
- Resp.: 48/minute
- O2 sat: 97% on room air
- Weight: 4.4 kg

#### Q1
**Which of the following features of her illness most indicates that her disease is severe?**

- A. Absence of fever
- B. Brother with a long cough
- C. Clear chest between spells
- D. Cyanosis and apnea with coughing  **(key)**
- E. Vomiting after coughing spells

*Explanation:* Apnea and cyanosis with coughing spells mark severe pertussis in a young infant. In a Quebec series of children with pertussis, every reported episode of apnea occurred in infants under 3 months of age, and 92% of those infants needed hospital care. Vomiting after coughing spells is common in pertussis and supports the diagnosis without marking severity. A clear chest and no fever are typical of pertussis without complications. Her brother is the likely source, but his cough says nothing about how sick she is.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Desjardins M, Iachimov D, Mousseau S, et al. Clinical characteristics of pediatric pertussis cases, Quebec 2015 to 2017. Can Commun Dis Rep. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6449091/

#### Q2
**Which of the following is the most appropriate antibiotic plan while her pertussis test result is pending?**

- A. azithromycin 44 mg PO daily for 5 days  **(key)**
- B. azithromycin 44 mg PO once PCR is positive
- C. ceftriaxone 220 mg IV daily
- D. doxycycline 9 mg PO twice daily
- E. trimethoprim-sulfamethoxazole PO twice daily

*Explanation:* Treatment should start on clinical suspicion in a young infant rather than after the PCR result. The CDC regimen for infants under 6 months is azithromycin 10 mg/kg once daily for 5 days, which is 44 mg for her 4.4 kg. In a California case-control study, infants who died of pertussis were less likely to have received a macrolide, so a delay matters. Trimethoprim-sulfamethoxazole should not be given under 2 months of age because of the risk of kernicterus. Ceftriaxone and doxycycline are not among the recommended agents for pertussis, and doxycycline is not used in infants.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Tiwari T, Murphy TV, Moran J. Recommended antimicrobial agents for the treatment and postexposure prophylaxis of pertussis. 2005 CDC guidelines. MMWR Recomm Rep. 2005. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5414a1.htm

#### Q3
**Which of the following is the most appropriate disposition for this infant?**

- A. Admit to a monitored bed  **(key)**
- B. Discharge with a home apnea monitor
- C. Discharge with review tomorrow
- D. Observe 4 hours in the department
- E. Transfer for elective intubation

*Explanation:* An infant under 3 months with apnea and cyanosis during coughing spells needs admission with continuous cardiorespiratory monitoring, because further spells can be prolonged and are often unwitnessed at home. In the Quebec series, 92% of infants under 3 months were admitted and 28% needed intensive care. A home apnea monitor or a review tomorrow leaves her without trained help at the next spell. Four hours of observation is too short to see the pattern of her spells. Elective intubation is not needed while she recovers from each spell and breathes well between them.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Desjardins M, Iachimov D, Mousseau S, et al. Clinical characteristics of pediatric pertussis cases, Quebec 2015 to 2017. Can Commun Dis Rep. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6449091/

#### Q4
*Update:* Her CBC shows a white cell count of 52 x 10^9/L with 78% lymphocytes. Hemoglobin and platelets are normal. Her nasopharyngeal PCR later confirms Bordetella pertussis.

**Which of the following best describes the significance of her white cell count?**

- A. Bacterial superinfection needing broader antibiotics
- B. Expected finding with no prognostic value
- C. Marker of high risk of a fatal course  **(key)**
- D. Sign of leukemia needing a marrow biopsy
- E. Stress response to repeated vomiting

*Explanation:* A white cell count of 52 x 10^9/L with a marked lymphocytosis signals severe pertussis. In a California case-control study of young infants, a higher peak white cell count independently predicted death, and fatal cases more often developed pulmonary hypertension. She needs close monitoring and early involvement of a pediatric intensive care team. A lymphocyte predominance is not the pattern of a bacterial superinfection. Normal hemoglobin and platelets argue against leukemia. Vomiting does not produce a lymphocytosis of this size.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Winter K, Zipprich J, Harriman K, et al. Risk factors associated with infant deaths from pertussis. A case-control study. Clin Infect Dis. 2015. https://doi.org/10.1093/cid/civ472

### sob-19: Fast breathing and poor feeding at 10 weeks

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 10-week-old girl is brought to the emergency department by her parents with 3 days of runny nose and cough and 1 day of fast breathing and poor feeding. She was born at 33 weeks gestation and went home at 3 weeks of age. Today she has taken about half her usual feeds and has had 2 wet diapers. Her older brother has a cold. She has subcostal and intercostal retractions, nasal flaring and head bobbing. There are fine crackles and wheeze throughout both lungs. Capillary refill is 2 seconds.

- Temperature: 37.9°C rectal
- Pulse: 178/minute
- Resp.: 68/minute
- O2 sat: 88% on room air
- Weight: 4.6 kg

#### Q1
**Which of the following is the most appropriate treatment to start first for this infant?**

- A. Nebulized epinephrine
- B. Nebulized hypertonic saline
- C. Nebulized salbutamol
- D. Oral dexamethasone
- E. Supplemental oxygen  **(key)**

*Explanation:* Her saturation of 88% is below the Canadian Paediatric Society threshold of 90%, so supplemental oxygen is the first treatment. The same statement recommends against routine salbutamol, epinephrine and corticosteroids in bronchiolitis, because trials show no lasting benefit. Nebulized hypertonic saline is not recommended in the emergency department, where it has not reduced admissions. These treatments also delay the supportive care she needs.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014. https://cps.ca/en/documents/position/bronchiolitis

#### Q2
*Update:* On 2 L/minute by nasal prongs her O2 saturation is 91%. After 1 hour she is tiring, with a respiratory rate of 76/minute and worse retractions. She is alert with no apnea. Venous gas: pH 7.31, PCO2 52 mmHg.

**Which of the following is the most appropriate respiratory support for this infant now?**

- A. High flow nasal cannula at 2 L/kg/minute  **(key)**
- B. Intubation and mechanical ventilation
- C. Nasal prongs increased to 4 L/minute
- D. Nonrebreather mask at 10 L/minute
- E. Simple face mask at 6 L/minute

*Explanation:* She is failing standard oxygen, with rising work of breathing and a mild respiratory acidosis, but she is alert and has had no apnea. In the PARIS trial, heated humidified high flow at 2 L/kg/minute in infants with hypoxemic bronchiolitis reduced treatment failure and escalation of care compared with standard oxygen. Intubation is kept for infants who fail noninvasive support or develop apnea or a falling level of consciousness. Raising low flow prongs beyond 2 L/minute in an infant gives unheated, dry gas with little extra support. Face masks are poorly tolerated and add no distending pressure.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Franklin D, Babl FE, Schlapbach LJ, et al. A randomized trial of high-flow oxygen therapy in infants with bronchiolitis. N Engl J Med. 2018. https://doi.org/10.1056/NEJMoa1714855

#### Q3
**Which of the following additional findings would most suggest a diagnosis other than bronchiolitis in this infant?**

- A. Fine crackles in both lungs
- B. Hepatomegaly with a gallop rhythm  **(key)**
- C. Low grade fever of 37.9°C
- D. Nasal flaring with retractions
- E. Sibling with a recent cold

*Explanation:* Heart failure from congenital heart disease or myocarditis can look like bronchiolitis in a young infant with fast breathing and poor feeding. A gallop rhythm with an enlarged liver points to a cardiac cause, even though hyperinflation alone can push the liver edge down. Crackles, wheeze, low grade fever, retractions and a sick contact are all typical of viral bronchiolitis, as the Canadian Paediatric Society describes it. None of those findings argue against the diagnosis.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014. https://cps.ca/en/documents/position/bronchiolitis

### sob-20: Breathless and sweating after a clinic visit

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 44-year-old woman is brought to the emergency department by ambulance with 40 minutes of severe shortness of breath, a pounding headache, palpitations and sweating. An hour ago an urgent care clinic gave her metoclopramide 10 mg IV for nausea, and her symptoms began 20 minutes later. For 6 months she has had brief spells of headache, racing heart and sweating, which were labelled panic attacks. High BP was found at a pharmacy last month. She takes no medications. She is pale, sweaty and tremulous. There is no goitre. There are crackles to the mid lung fields. The JVP is not raised. The ECG shows sinus tachycardia without ST changes.

- Temperature: 37.8°C oral
- Pulse: 138/minute
- Resp.: 32/minute
- BP: 238/134 mmHg
- O2 sat: 88% on room air

#### Q1
**Which of the following is the most likely cause of her pulmonary edema?**

- A. Acute coronary syndrome
- B. Catecholamine crisis from a pheochromocytoma  **(key)**
- C. Essential hypertension with a BP surge
- D. Panic attack with hyperventilation
- E. Thyroid storm from a toxic goitre

*Explanation:* Months of brief spells of headache, palpitations and sweating, new hypertension, and a crisis that began soon after a dose of metoclopramide point to a catecholamine surge from a pheochromocytoma. Drugs such as metoclopramide are recognized triggers of a crisis, which can present with severe hypertension and pulmonary edema. Essential hypertension does not explain the months of spells or the trigger. Panic does not cause crackles, hypoxemia or a BP of this level. There is no goitre to suggest thyroid storm. The ECG shows no ST changes to suggest an acute coronary syndrome, although troponin should still be checked.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Whitelaw BC, Prague JK, Mustafa OG, et al. Phaeochromocytoma crisis. Clin Endocrinol (Oxf). 2014. https://doi.org/10.1111/cen.12324

#### Q2
**Which of the following tests is most useful to confirm the underlying cause of her crisis?**

- A. Aldosterone to renin ratio
- B. Morning serum cortisol level
- C. Plasma free metanephrines  **(key)**
- D. TSH and free thyroxine
- E. Urine 5-HIAA over 24 hours

*Explanation:* The Endocrine Society recommends plasma free metanephrines or urinary fractionated metanephrines as the first test for pheochromocytoma, because tumours release metanephrines continuously even between spells. An aldosterone to renin ratio screens for primary aldosteronism, which causes hypertension without these spells. A morning cortisol looks for adrenal insufficiency or Cushing syndrome, which do not explain her paroxysms. Urine 5-HIAA looks for carcinoid tumours, which cause flushing and diarrhea. Thyroid tests are reasonable in a tachycardic patient, but she has no goitre, and they do not confirm the cause suggested by her spells and trigger.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Lenders JWM, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma. An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2014. https://doi.org/10.1210/jc.2014-1498

#### Q3
**Which of the following is the most appropriate medication to lower her BP now?**

- A. esmolol 500 mcg/kg IV bolus
- B. furosemide 80 mg IV
- C. labetalol 20 mg IV
- D. metoprolol 5 mg IV
- E. phentolamine 5 mg IV  **(key)**

*Explanation:* Alpha-adrenergic blockade treats the cause of the crisis, and its use is strongly associated with survival. Phentolamine is a short-acting IV alpha blocker that can be repeated to control her BP, and a beta blocker is added only after alpha blockade to control the heart rate. Metoprolol, esmolol and labetalol, which has much more beta than alpha effect, can leave alpha stimulation unopposed and worsen the vasoconstriction. Furosemide is not the answer because a catecholamine crisis often leaves patients volume depleted, and her JVP is not raised.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Whitelaw BC, Prague JK, Mustafa OG, et al. Phaeochromocytoma crisis. Clin Endocrinol (Oxf). 2014. https://doi.org/10.1111/cen.12324

### sob-21: Fever and breathlessness at 31 weeks

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 29-year-old woman, G2P1 at 31 weeks gestation, presents to the emergency department with 3 days of fever, cough and muscle aches and 1 day of worsening shortness of breath. Her 3-year-old son had influenza A confirmed last week. She did not receive an influenza vaccine this season. The pregnancy has been uncomplicated and she takes a prenatal vitamin. She speaks in short sentences. There are crackles at the right lung base. The uterus is soft and nontender. The fetal heart rate is 165/minute.

- Temperature: 39.1°C oral
- Pulse: 122/minute
- Resp.: 30/minute
- BP: 106/64 mmHg
- O2 sat: 90% on room air

#### Q1
*Update:* On 4 L/minute by nasal prongs her O2 saturation is 93%. Arterial gas: pH 7.32, PaCO2 40 mmHg, PaO2 68 mmHg, HCO3 20 mmol/L.

**Which of the following best interprets her arterial blood gas?**

- A. Acute respiratory acidosis from fatigue  **(key)**
- B. Compensated respiratory alkalosis of pregnancy
- C. Metabolic acidosis from lactate
- D. Normal gas for the third trimester
- E. Primary metabolic alkalosis

*Explanation:* Normal pregnancy lowers the arterial PCO2 to about 30 mmHg or less, with a bicarbonate of 18 to 22 mmol/L and a pH near 7.44. A PaCO2 of 40 mmHg in a woman breathing 30 times a minute is therefore high for her, and a pH of 7.32 shows an acute respiratory acidosis. She is tiring. Reading 40 mmHg as normal misses early ventilatory failure. Her bicarbonate of 20 mmol/L is expected in pregnancy, so there is no primary metabolic acidosis or alkalosis. The compensated respiratory alkalosis of pregnancy has a pH above 7.40.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Soma-Pillay P, Nelson-Piercy C, Tolppanen H, Mebazaa A. Physiological changes in pregnancy. Cardiovasc J Afr. 2016. https://doi.org/10.5830/CVJA-2016-021

#### Q2
**Which of the following is the most appropriate antiviral plan for her now?**

- A. oseltamivir after a positive swab
- B. oseltamivir 75 mg PO daily
- C. oseltamivir 75 mg PO twice daily now  **(key)**
- D. zanamivir 10 mg inhaled twice daily
- E. No antiviral after 48 hours of illness

*Explanation:* She is pregnant, hypoxemic and tiring, which is severe and progressive influenza. AMMI Canada advises empiric antiviral treatment for severe, complicated or progressive illness regardless of the time since symptoms began, prescribed as soon as possible without waiting for laboratory confirmation. The treatment dose is oseltamivir 75 mg by mouth twice daily for 5 days. Once daily dosing is a prophylaxis dose. Waiting for a swab result delays treatment in a woman who is getting worse. Inhaled zanamivir is hard to deliver to a woman breathing 30 times a minute.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Harrison R, Mubareka S, Papenburg J, et al. AMMI Canada 2023 update on influenza. Management and emerging issues. J Assoc Med Microbiol Infect Dis Can. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10697102/

#### Q3
*Update:* Two hours later she is drowsy and hard to rouse. Her O2 saturation is 86% on 15 L/minute by nonrebreather mask. Arterial gas: pH 7.22, PaCO2 54 mmHg.

**Which of the following is the most appropriate respiratory management for her now?**

- A. Bilevel noninvasive ventilation
- B. Emergency caesarean delivery first
- C. High flow nasal oxygen
- D. Rapid sequence intubation  **(key)**
- E. Repeat the gas in 1 hour

*Explanation:* A falling level of consciousness with worsening hypercapnic acidosis and refractory hypoxemia means she needs intubation now. Noninvasive ventilation depends on a patient who is awake, cooperative and able to protect her airway, and a drowsy woman in late pregnancy is at high risk of aspiration. High flow nasal oxygen does not treat ventilatory failure. Waiting an hour risks maternal arrest and fetal hypoxia. Delivery does not treat her pneumonia and should not come before securing her airway and oxygenation.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.

#### Q4
*Update:* After intubation her BP falls to 84/50 mmHg while she lies flat on her back.

**Which of the following is the most appropriate first step to restore her blood pressure?**

- A. Displace the uterus to the left  **(key)**
- B. norepinephrine infusion IV
- C. phenylephrine 100 mcg IV
- D. Raise the head of the bed
- E. Saline 2 L IV bolus

*Explanation:* At 31 weeks, the uterus compresses the inferior vena cava when she lies on her back, which cuts venous return, and turning from the lateral to the supine position can lower cardiac output by about 25%. Relieving that compression by displacing the uterus to the left, or tilting her to the left, is the first step and costs nothing. A vasopressor may still be needed if her pressure stays low, but it does not remove the obstruction to venous return. A 2 L bolus risks pulmonary edema in a woman with pneumonia and hypoxemia. Raising the head of the bed does not relieve caval compression.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Soma-Pillay P, Nelson-Piercy C, Tolppanen H, Mebazaa A. Physiological changes in pregnancy. Cardiovasc J Afr. 2016. https://doi.org/10.5830/CVJA-2016-021

### sob-22: Breathless after day surgery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 66-year-old man presents to the emergency department at 21:00 with 4 hours of increasing shortness of breath. This morning he had day surgery to repair a torn rotator cuff in his right shoulder under general anesthesia with an interscalene nerve block. He has COPD with an FEV1 of 55% predicted and a BMI of 36 kg/m2. His right arm is still numb and weak. He has no chest pain, fever, cough or change in sputum. He breathes more easily sitting up. He is alert. There are decreased breath sounds at the right base without wheeze or crackles. The JVP is not raised. Compared with his film from last month, today's chest radiograph shows a newly raised right hemidiaphragm, with no pneumothorax or consolidation.

- Temperature: 36.8°C oral
- Pulse: 98/minute
- Resp.: 26/minute
- BP: 148/86 mmHg
- O2 sat: 89% on room air

#### Q1
**Which of the following is the most likely cause of his shortness of breath?**

- A. Aspiration pneumonitis
- B. COPD exacerbation
- C. Opioid hypoventilation
- D. Pneumothorax from the block
- E. Right phrenic nerve block  **(key)**

*Explanation:* The phrenic nerve arises from C3 to C5, close to where an interscalene block is placed, and the block commonly paralyzes the diaphragm on the same side. His still numb and weak right arm shows the block is still working, and the newly raised right hemidiaphragm with reduced breath sounds at that base fits. His COPD and obesity leave little reserve to cope with the loss of one hemidiaphragm. The radiograph shows no pneumothorax. He has no fever, consolidation, wheeze or new sputum to suggest aspiration or a COPD exacerbation. He is alert and breathing 26 times a minute, which argues against opioid hypoventilation.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* El-Boghdadly K, Chin KJ, Chan VWS. Phrenic nerve palsy and regional anesthesia for shoulder surgery. Anatomical, physiologic, and clinical considerations. Anesthesiology. 2017. https://doi.org/10.1097/ALN.0000000000001668

#### Q2
**Which of the following bedside tests would best confirm the cause of his shortness of breath?**

- A. Arterial blood gas on room air
- B. Diaphragm ultrasound during a sniff  **(key)**
- C. Lung ultrasound for B lines
- D. Peak expiratory flow rate
- E. Spirometry at the bedside

*Explanation:* Ultrasound of the right hemidiaphragm during a sniff shows reduced, absent or paradoxical movement when the phrenic nerve is blocked. In the study that established this, every patient given an interscalene block developed paradoxical motion of the hemidiaphragm on the block side within minutes. A blood gas measures the effect on gas exchange but not its cause. B lines point to pulmonary edema. Peak flow and spirometry are already reduced by his COPD and cannot show which hemidiaphragm is failing.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Urmey WF, Talts KH, Sharrock NE. One hundred percent incidence of hemidiaphragmatic paresis associated with interscalene brachial plexus anesthesia as diagnosed by ultrasonography. Anesth Analg. 1991. https://doi.org/10.1213/00000539-199104000-00014

#### Q3
*Update:* Ultrasound shows paradoxical motion of the right hemidiaphragm. Arterial gas on 1 L/minute by nasal prongs: pH 7.37, PaCO2 47 mmHg, PaO2 62 mmHg. He remains alert.

**Which of the following is the most appropriate management for him now?**

- A. Bilevel noninvasive ventilation
- B. Rapid sequence intubation
- C. Right chest tube insertion
- D. salbutamol and prednisone
- E. Upright position with controlled oxygen  **(key)**

*Explanation:* His pH is normal, he is alert and his saturation responds to low flow oxygen, so he can be supported while the block wears off. He breathes better sitting up, and the BTS guideline advises a target saturation of 88 to 92% in COPD to avoid oxygen induced hypercapnia. Noninvasive ventilation is for acidotic hypercapnic respiratory failure, which he does not have. Intubation is not needed in an alert patient with a normal pH. There is no pneumothorax to drain. Salbutamol and prednisone treat bronchospasm, and he has no wheeze.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.

### sob-23: Pleuritic pain three weeks after gallbladder surgery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 41-year-old woman presents to the emergency department with 2 days of right sided pleuritic chest pain and shortness of breath. She had a laparoscopic cholecystectomy 3 weeks ago. She had an unprovoked DVT 6 years ago and stopped anticoagulation after 6 months. She has no hemoptysis, cough or fever and takes no medications. Her legs are not swollen or tender. The chest is clear. The ECG shows sinus tachycardia and the chest radiograph is normal. Her creatinine is normal and she has no contrast allergy. PE is your leading diagnosis.

- Temperature: 36.9°C oral
- Pulse: 108/minute
- Resp.: 22/minute
- BP: 124/76 mmHg
- O2 sat: 93% on room air

#### Q1
**Which of the following is this patient's Wells score for pulmonary embolism?**

- A. 4.5 points
- B. 6 points
- C. 7.5 points  **(key)**
- D. 9 points
- E. 10.5 points

*Explanation:* She scores 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute, 1.5 for surgery within 4 weeks and 1.5 for a previous DVT, a total of 7.5. That is 4.5 or more, so PE is likely, and Thrombosis Canada advises going straight to imaging without a D-dimer. A score of 6 leaves out either the surgery or the old DVT, and 4.5 leaves out both. A score of 9 counts surgery and immobilization as two items, although they form one. A score of 10.5 adds 3 points for signs of DVT, and her legs are normal.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

#### Q2
*Update:* CT pulmonary angiography shows no central or lobar PE. The radiologist reports that breathing motion prevented assessment of the segmental and subsegmental arteries. Her pulse is still 108/minute and her O2 saturation 93%.

**Which of the following is the most appropriate next step in the evaluation for pulmonary embolism?**

- A. D-dimer to decide on discharge
- B. Discharge with outpatient follow up
- C. Echocardiography to exclude PE
- D. Repeat CT angiogram in 1 week
- E. Ventilation perfusion scan  **(key)**

*Explanation:* A CT that could not assess the segmental arteries is not a negative study, and with a Wells score of 7.5 her probability of PE is still high. Thrombosis Canada advises further testing with a V/Q scan or proximal leg ultrasound when suspicion stays high after a negative initial CT, and her normal chest radiograph makes a V/Q scan likely to give a clear answer. A D-dimer has no role at this pretest probability. Discharge treats an incomplete study as a normal one. Echocardiography can support PE in an unstable patient but cannot exclude it in a stable one, and waiting a week leaves a possible PE untreated.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

#### Q3
*Update:* The V/Q scan shows one mismatched subsegmental defect and is reported as neither normal nor high probability.

**Which of the following is the most appropriate next step after this V/Q scan result?**

- A. Anticoagulate for 3 months
- B. Discharge with no further testing
- C. Repeat V/Q scan in 1 week
- D. Serial leg compression ultrasound  **(key)**
- E. Single ultrasound of both legs

*Explanation:* Thrombosis Canada advises serial compression ultrasound of the legs when a V/Q scan is neither normal nor high probability. Finding a proximal DVT confirms that she needs anticoagulation, and repeated normal studies make a clinically important PE unlikely. A single normal study is not enough, because a calf clot can extend into the proximal veins over the following days, which is why the test is repeated. Treating for 3 months commits her to anticoagulation and its bleeding risk without a diagnosis. Discharge without further testing ignores a nondiagnostic result in a patient whose pretest probability was high, and repeating the V/Q scan does not resolve the uncertainty.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

### sob-24: Breathless after a household flu

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 52-year-old man presents to the emergency department with 5 days of shortness of breath on exertion, a dry cough and aching muscles. His wife and son had a flu-like illness last week. He has hypertension treated with ramipril. He has no previous VTE, cancer, recent surgery, immobilization, hemoptysis or leg symptoms. His chest is clear and his legs look and feel normal. The ECG shows sinus rhythm and the chest radiograph is normal. You judge a viral illness to be more likely than PE. A triage protocol for shortness of breath has already ordered a CT pulmonary angiogram, which has not yet been done.

- Temperature: 37.8°C oral
- Pulse: 96/minute
- Resp.: 20/minute
- BP: 138/84 mmHg
- O2 sat: 96% on room air
- Weight: 84 kg

#### Q1
**Which of the following is the most appropriate next step in his evaluation for PE?**

- A. Bilateral leg compression ultrasound
- B. CT pulmonary angiogram as ordered
- C. D-dimer before any imaging  **(key)**
- D. Ventilation perfusion scan
- E. No further testing for PE

*Explanation:* His Wells score is 0. His pulse of 96/minute is below 100/minute, he has none of the other items, and PE is not the most likely diagnosis. Thrombosis Canada advises a D-dimer as the first test when PE is unlikely, and a negative result excludes PE without imaging. Going straight to CT exposes him to contrast, radiation and the false positive results that come with a low pretest probability. Stopping without any test would rest on the PERC rule, which cannot be used because he is older than 49 years. Leg ultrasound and a ventilation perfusion scan are imaging tests that a negative D-dimer could make unnecessary.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

#### Q2
*Update:* CT pulmonary angiography shows a single small filling defect in one subsegmental artery of the right lower lobe, with no other defect and a normal right ventricle.

**Which of the following features most lowers the likelihood that this filling defect is a true PE?**

- A. Age of 52 years
- B. Normal chest radiograph
- C. Normal right ventricle on CT
- D. Oxygen saturation of 96%
- E. Wells score of 0  **(key)**

*Explanation:* A positive CT result is less reliable when the clinical probability is low. In PIOPED II the positive predictive value of CT angiography was 96% with a high clinical probability but only 58% with a low one, so his Wells score of 0 makes a false positive result a real possibility. A saturation of 96% on room air is common in PE, which often causes no hypoxemia. A normal chest radiograph is common in PE and does not lower its likelihood. A normal right ventricle shows that any clot is small, not that it is absent. His age does not lower the likelihood of PE.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Stein PD, Fowler SE, Goodman LR, et al. Multidetector computed tomography for acute pulmonary embolism. N Engl J Med. 2006. https://doi.org/10.1056/NEJMoa052367

#### Q3
**Which of the following is the most appropriate next test for him?**

- A. Bilateral leg compression ultrasound  **(key)**
- B. Echocardiogram for right heart strain
- C. MR pulmonary angiogram
- D. Repeat CT angiogram in 24 hours
- E. Troponin and BNP levels

*Explanation:* The CHEST guideline advises bilateral leg compression ultrasound for patients with a subsegmental PE, whether or not the legs have symptoms. A proximal DVT confirms venous thromboembolism that needs treatment, whatever the CT shows. With no proximal DVT and a low risk of recurrence, the guideline suggests clinical surveillance over anticoagulation. An echocardiogram, troponin or BNP measures strain on the heart but cannot confirm or refute a small clot. A repeat CT adds radiation without settling the question. MR angiography is less accurate than CT and is not a standard test here.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Stevens SM, Woller SC, Baumann Kreuziger L, et al. Executive summary. Antithrombotic therapy for VTE disease. Second update of the CHEST guideline and expert panel report. Chest. 2021. https://doi.org/10.1016/j.chest.2021.07.056

#### Q4
*Update:* Further testing finds a thrombus in the right popliteal vein. His hemoglobin, platelets and creatinine are normal and he has no bleeding risk factors.

**Which of the following is the most appropriate management for him now?**

- A. Clinical surveillance with repeat ultrasound
- B. IVC filter without anticoagulation
- C. Repeat CT angiogram in 1 week
- D. Start anticoagulation for 3 months or more  **(key)**
- E. Systemic alteplase infusion

*Explanation:* A thrombus in the popliteal vein is a proximal DVT. It confirms venous thromboembolism, which needs anticoagulation for at least 3 months whatever the CT showed. The CHEST guideline keeps clinical surveillance for a subsegmental PE with no proximal DVT and a low risk of recurrence, and he now has a proximal DVT. An IVC filter is for patients who cannot be anticoagulated, and he has no bleeding risk. Systemic thrombolysis is for PE with hypotension, and he is stable. Repeating the CT does not change the need to treat his DVT.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Stevens SM, Woller SC, Baumann Kreuziger L, et al. Executive summary. Antithrombotic therapy for VTE disease. Second update of the CHEST guideline and expert panel report. Chest. 2021. https://doi.org/10.1016/j.chest.2021.07.056

### sob-25: A barking cough that keeps getting worse

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 5-year-old boy is brought to the emergency department by his parents with a barking cough and noisy breathing. Five days ago he had fever, cough and aches, and his sister had influenza B confirmed that week. He had been improving until last night, when his fever rose again and his breathing became noisy. This morning a walk-in clinic gave him oral dexamethasone for croup. Since then he has become more unwell. He is fully immunized. He is sitting up, pale and ill looking, and coughs up thick yellow secretions. He has inspiratory stridor at rest with suprasternal retractions. He is not drooling.

- Temperature: 39.8°C rectal
- Pulse: 156/minute
- Resp.: 38/minute
- O2 sat: 93% on room air
- Weight: 19 kg

#### Q1
**Which of the following findings most suggests a cause of his stridor other than viral croup?**

- A. Barking cough with hoarseness
- B. High fever with a toxic look  **(key)**
- C. Inspiratory stridor at rest
- D. Retractions above the sternum
- E. Worse breathing overnight

*Explanation:* Children with bacterial tracheitis have higher fevers and look more unwell than children with viral croup, and the illness often follows influenza or parainfluenza. A child who worsens with a high fever and a toxic appearance after a viral illness should be assessed for it. A barking cough with hoarseness, stridor at rest and suprasternal retractions occur in both croup and tracheitis, so they do not separate them. Croup symptoms are also often worse at night.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Al-Mutairi B, Kirk V. Bacterial tracheitis in children. Approach to diagnosis and treatment. Paediatr Child Health. 2004. https://doi.org/10.1093/pch/9.1.25

#### Q2
*Update:* He receives nebulized epinephrine 5 mL of 1 mg/mL with little change in his stridor. A lateral neck radiograph shows subglottic narrowing with ragged, irregular edges along the tracheal wall.

**Which of the following is the most likely diagnosis in this child?**

- A. Bacterial tracheitis  **(key)**
- B. Foreign body in the trachea
- C. Retropharyngeal abscess
- D. Severe viral croup
- E. Supraglottitis

*Explanation:* A poor response to epinephrine and a corticosteroid, a high fever, purulent secretions and irregular tracheal margins on the lateral film point to bacterial tracheitis. It should be considered in any child with croup that does not respond to usual treatment, and the lateral view may show haziness and irregularity of the tracheal wall. Severe viral croup usually improves at least briefly after epinephrine. Supraglottitis causes drooling and difficulty swallowing, which he does not have. A retropharyngeal abscess causes neck stiffness and pain on swallowing rather than a barking cough. A foreign body does not cause a febrile illness after influenza.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Al-Mutairi B, Kirk V. Bacterial tracheitis in children. Approach to diagnosis and treatment. Paediatr Child Health. 2004. https://doi.org/10.1093/pch/9.1.25

#### Q3
**Which of the following additional investigations is most likely to change his management now?**

- A. Chest radiograph  **(key)**
- B. CT of the neck with contrast
- C. Rapid influenza antigen test
- D. Serum procalcitonin
- E. Throat swab for strep

*Explanation:* Chest radiographs show pneumonia in more than half of children with bacterial tracheitis, and finding it changes oxygen needs, antibiotic plans and the level of care. A contrast CT of the neck needs him to lie flat and still, which is unsafe with stridor at rest, and adds little once the lateral film shows tracheal disease. An influenza test will not change management after his sister's confirmed case and his course. A strep swab looks for pharyngitis, not tracheal infection. Procalcitonin will not change the need for antibiotics in a child who already needs them.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Al-Mutairi B, Kirk V. Bacterial tracheitis in children. Approach to diagnosis and treatment. Paediatr Child Health. 2004. https://doi.org/10.1093/pch/9.1.25

#### Q4
*Update:* Despite oxygen, his O2 saturation falls to 88% and his retractions worsen. He is tiring and has thick secretions pooling in his mouth.

**Which of the following is the most appropriate next step in his airway management?**

- A. Heliox by face mask
- B. High flow nasal cannula
- C. Noninvasive ventilation by mask
- D. Repeat nebulized epinephrine
- E. Tracheal intubation and suctioning  **(key)**

*Explanation:* A tiring child with worsening hypoxemia and thick secretions blocking the trachea needs a secure airway, and intubation allows the purulent secretions to be suctioned directly. Many children with bacterial tracheitis need intubation, and the decision is made on the degree of obstruction. Heliox and high flow nasal oxygen may ease the work of breathing but do nothing for secretions in the tracheal lumen. Noninvasive ventilation pushes gas against a narrowed, secretion-filled trachea. Nebulized epinephrine has already failed to help.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Al-Mutairi B, Kirk V. Bacterial tracheitis in children. Approach to diagnosis and treatment. Paediatr Child Health. 2004. https://doi.org/10.1093/pch/9.1.25

### sob-26: Not helped by her new inhaler

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 49-year-old woman presents to the emergency department with 6 weeks of worsening shortness of breath and noisy breathing on exertion. Three months ago she spent 14 days intubated in the ICU for influenza pneumonia. A walk-in clinic diagnosed asthma 4 weeks ago, and neither salbutamol nor a 5-day course of prednisone helped. She has never smoked and had no breathing problems before that illness. She speaks in full sentences. A harsh noise is heard on both inspiration and expiration, loudest over the front of the neck, and the lung fields are otherwise clear. Her chest radiograph is normal. Peak expiratory flow is 190 L/minute and does not change after salbutamol.

- Temperature: 36.8°C oral
- Pulse: 94/minute
- Resp.: 22/minute
- BP: 132/80 mmHg
- O2 sat: 96% on room air
- Weight: 70 kg

#### Q1
**Which of the following is the most likely cause of her breathlessness?**

- A. Asthma resistant to steroids
- B. Cardiac asthma from heart failure
- C. Inducible laryngeal obstruction
- D. Post-intubation tracheal stenosis  **(key)**
- E. Pulmonary embolism

*Explanation:* Progressive exertional dyspnea with a harsh noise on both inspiration and expiration, loudest over the neck, after 14 days of intubation and with no response to salbutamol or prednisone, points to a fixed narrowing of the trachea. Prolonged intubation is a leading cause of laryngotracheal stenosis, and the condition is often misdiagnosed as asthma. Asthma did not precede her ICU stay, and its wheeze is heard over the lung fields rather than the neck. Inducible laryngeal obstruction causes episodic, mainly inspiratory symptoms with triggers rather than steady progression. Heart failure would be expected to show on her chest radiograph. Pulmonary embolism does not produce a harsh noise over the trachea.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Klopper GJ, Adeniyi OV. Diagnostic accuracy of non-invasive modalities for laryngotracheal stenosis. A systematic review and meta-analysis. Eur Arch Otorhinolaryngol. 2025. https://doi.org/10.1007/s00405-025-09773-3

#### Q2
*Update:* Spirometry with a flow-volume loop is arranged.

**Which of the following flow-volume loop patterns is most likely in this patient?**

- A. Concave expiratory limb
- B. Flattened expiratory limb only
- C. Flattened in both limbs  **(key)**
- D. Flattened inspiratory limb only
- E. Small loop of normal shape

*Explanation:* A fixed narrowing, such as a scarred tracheal segment, limits flow equally in both directions, so the loop shows a plateau on both the inspiratory and the expiratory limbs. A plateau on the inspiratory limb alone fits a variable obstruction above the thoracic inlet, such as vocal cord paralysis. A plateau on the expiratory limb alone fits a variable obstruction inside the chest. A concave expiratory limb is the pattern of asthma and COPD. A small loop of normal shape suggests restriction.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Pellegrino R, Viegi G, Brusasco V, et al. ATS/ERS task force. Interpretative strategies for lung function tests. Eur Respir J. 2005. https://doi.org/10.1183/09031936.05.00035205

#### Q3
**Which of the following new findings would most indicate that her airway narrowing has become critical?**

- A. Cough with clear sputum
- B. Normal oxygen saturation
- C. Stridor at rest  **(key)**
- D. Voice hoarse for weeks
- E. Wheeze on exertion only

*Explanation:* Symptoms of laryngotracheal stenosis usually appear first with exertion and then at rest as the lumen narrows, so stridor at rest means flow is limited even at low demand and she needs urgent airway specialist care. Oxygen saturation stays normal until late in upper airway obstruction, so a normal value does not reassure. Noise or wheeze only on exertion describes her present, less severe state. Hoarseness and a cough do not measure how narrow the airway is.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Marwaha A, Kumar A, Sharma S, Sood J. Anaesthesia for tracheal resection and anastomosis. J Anaesthesiol Clin Pharmacol. 2022. https://doi.org/10.4103/joacp.JOACP_611_20

#### Q4
**Which of the following is the most appropriate next step in her care?**

- A. Discharge with an inhaled corticosteroid
- B. Increase prednisone to 60 mg daily
- C. Methacholine challenge as an outpatient
- D. Repeat chest radiograph in 6 weeks
- E. Urgent airway endoscopy referral  **(key)**

*Explanation:* Direct laryngotracheobronchoscopy is the reference standard that confirms the site, length and severity of the narrowing, and it lets an ENT or thoracic surgeon plan dilation or resection. Her symptoms are progressing despite asthma treatment, so the referral is urgent. More prednisone or an inhaled corticosteroid continues treatment for a disease she does not have. A methacholine challenge tests airway hyperresponsiveness and does not show the narrowing. A plain chest radiograph was normal and does not show the trachea well enough to follow the lesion.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Klopper GJ, Adeniyi OV. Diagnostic accuracy of non-invasive modalities for laryngotracheal stenosis. A systematic review and meta-analysis. Eur Arch Otorhinolaryngol. 2025. https://doi.org/10.1007/s00405-025-09773-3

### sob-27: Worse breathing in a man with scarred lungs

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 74-year-old man presents to the emergency department with 10 days of worsening shortness of breath and dry cough. He has idiopathic pulmonary fibrosis diagnosed 3 years ago and takes nintedanib. He normally walks 2 blocks and uses oxygen only on exertion. He has no fever, chest pain, leg swelling or orthopnea. He lives with his wife and makes his own decisions. He speaks in short phrases. There are fine inspiratory crackles at both lung bases, unchanged from his last clinic note. The JVP is not raised and there is no leg edema.

- Temperature: 37.2°C oral
- Pulse: 108/minute
- Resp.: 30/minute
- BP: 136/80 mmHg
- O2 sat: 85% on 4 L/minute by nasal prongs

#### Q1
**Which of the following investigations is most useful to find the cause of his deterioration?**

- A. Bronchoscopy with lavage
- B. CT chest with pulmonary angiography  **(key)**
- C. Serum procalcitonin
- D. Sputum bacterial culture
- E. Transthoracic echocardiogram

*Explanation:* An acute respiratory deterioration in IPF can come from an acute exacerbation, infection, PE, pneumothorax or heart failure, and the international working group uses CT to separate them. CT with pulmonary angiography shows new bilateral ground glass against his fibrosis and excludes PE and pneumothorax in one test. Bronchoscopy with lavage risks worsening hypoxemia in a man with a saturation of 85% on 4 L/minute. An echocardiogram looks only for a cardiac cause, which his normal JVP and lack of edema make less likely. Sputum culture and procalcitonin cannot show PE, pneumothorax or new ground glass.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Collard HR, Ryerson CJ, Corte TJ, et al. Acute exacerbation of idiopathic pulmonary fibrosis. An international working group report. Am J Respir Crit Care Med. 2016. https://doi.org/10.1164/rccm.201604-0801CI

#### Q2
*Update:* CT shows new bilateral ground glass opacity over his fibrosis, with no PE, pneumothorax or consolidation. He has never discussed his wishes about life support.

**Which of the following is the most appropriate approach to invasive ventilation for this patient?**

- A. Discuss its poor outcome and his wishes  **(key)**
- B. Intubate if his saturation falls below 80%
- C. Intubate now before he tires further
- D. Let his wife make the decision
- E. Offer it as a routine bridge to recovery

*Explanation:* The ATS/ERS/JRS/ALAT guideline recommends against mechanical ventilation for most patients with respiratory failure from IPF, while accepting it as a reasonable choice for a minority. He can make his own decisions, so the choice is his, after a clear discussion of the likely outcome and of what he values. Intubating now, or at a saturation trigger, commits him to an invasive treatment he has not chosen. His wife does not decide while he is able to decide for himself. Offering intubation as a routine bridge to recovery misstates its expected benefit in this disease.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Raghu G, Collard HR, Egan JJ, et al. An official ATS/ERS/JRS/ALAT statement. Idiopathic pulmonary fibrosis. Evidence-based guidelines for diagnosis and management. Am J Respir Crit Care Med. 2011. https://doi.org/10.1164/rccm.2009-040GL

#### Q3
*Update:* He chooses a trial of high flow nasal oxygen. On 50 L/minute at an FiO2 of 0.80, his arterial PaO2 is 56 mmHg.

**Which of the following is closest to his ratio of PaO2 to FiO2 on this support?**

- A. 45
- B. 56
- C. 70  **(key)**
- D. 112
- E. 140

*Explanation:* The ratio of PaO2 to FiO2 is 56 divided by 0.80, which is 70. A ratio this low confirms severe hypoxemia despite high flow support, and it gives an objective measure of how sick he is that his breathlessness alone cannot. A value of 45 comes from multiplying the PaO2 by the FiO2 instead of dividing. A value of 56 is the PaO2 alone. Values of 112 and 140 come from dividing by an FiO2 of 0.50 or 0.40 instead of 0.80.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Collard HR, Ryerson CJ, Corte TJ, et al. Acute exacerbation of idiopathic pulmonary fibrosis. An international working group report. Am J Respir Crit Care Med. 2016. https://doi.org/10.1164/rccm.201604-0801CI

### sob-28: Rusty sputum and a falling saturation

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 61-year-old man presents to the emergency department with 4 days of fever, cough with rusty sputum and worsening shortness of breath. He has hypertension treated with ramipril and no lung disease. He is alert and oriented but breathing rapidly. There are bronchial breath sounds and crackles over the right lower chest. The chest radiograph shows right lower lobe consolidation without effusion.

- Temperature: 38.8°C oral
- Pulse: 108/minute
- Resp.: 32/minute
- BP: 118/72 mmHg
- O2 sat: 86% on room air

#### Q1
*Update:* On a nonrebreather mask at 15 L/minute his O2 saturation is 89% and his respiratory rate is 34/minute. Arterial gas: pH 7.46, PaCO2 32 mmHg, PaO2 58 mmHg.

**Which of the following is the most appropriate respiratory support for this patient now?**

- A. Bilevel noninvasive ventilation
- B. High flow nasal cannula oxygen  **(key)**
- C. Intubation and mechanical ventilation
- D. Nasal prongs added under the mask
- E. Venturi mask at 50% FiO2

*Explanation:* He has acute hypoxemic respiratory failure from pneumonia, without hypercapnia, and he is alert. A clinical practice guideline makes a strong recommendation for high flow nasal cannula over conventional oxygen in this setting, and in the FLORALI trial it was associated with fewer deaths than noninvasive ventilation. Bilevel ventilation has no clear benefit in de novo hypoxemic failure and can drive large, harmful tidal volumes. Intubation is not yet needed in an alert patient without hypercapnia. Adding nasal prongs or changing to a Venturi mask gives no more oxygen than the nonrebreather that is already failing.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Rochwerg B, Einav S, Chaudhuri D, et al. The role for high flow nasal cannula as a respiratory support strategy in adults. A clinical practice guideline. Intensive Care Med. 2020. https://doi.org/10.1007/s00134-020-06312-y

#### Q2
*Update:* He is started on high flow nasal cannula at 60 L/minute with an FiO2 of 0.6. Two hours later his O2 saturation is 90% and his respiratory rate is 32/minute.

**Which of the following is closest to this patient's ROX index at 2 hours?**

- A. 2.8
- B. 3.0
- C. 3.5
- D. 4.4
- E. 4.7  **(key)**

*Explanation:* The ROX index is the SpO2 to FiO2 ratio divided by the respiratory rate. Here that is 90 divided by 0.6, which is 150, and 150 divided by 32 is 4.7. In the multicentre validation study a ROX of 4.88 or more at 2, 6 or 12 hours predicted success, so 4.7 is not yet reassuring and he needs close review. A value of 4.4 uses his earlier rate of 34/minute. A value of 3.5 uses an FiO2 of 0.8. A value of 3.0 uses his earlier PaO2 in place of the saturation, and 2.8 leaves out the FiO2.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Roca O, Caralt B, Messika J, et al. An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy. Am J Respir Crit Care Med. 2019.

#### Q3
*Update:* Six hours later he is confused and pulling at the cannula. O2 saturation is 85% on an FiO2 of 1.0, respiratory rate is 40/minute and BP is 92/58 mmHg.

**Which of the following is the most appropriate next step in his respiratory management?**

- A. Bilevel noninvasive ventilation
- B. haloperidol 2 mg IV for agitation
- C. Increase the flow to 70 L/minute
- D. Intubation and mechanical ventilation  **(key)**
- E. Prone positioning while awake

*Explanation:* Confusion, a saturation of 85% on an FiO2 of 1.0 and a respiratory rate of 40/minute mean high flow has failed, and he now needs intubation. Observational data link delayed intubation after high flow failure with higher mortality. Noninvasive ventilation needs a cooperative patient who can protect his airway. Haloperidol treats the agitation but not the hypoxemia that causes it. More flow adds little at an FiO2 of 1.0. Awake prone positioning needs a calm, cooperative patient and does not rescue established failure.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Rochwerg B, Einav S, Chaudhuri D, et al. The role for high flow nasal cannula as a respiratory support strategy in adults. A clinical practice guideline. Intensive Care Med. 2020. https://doi.org/10.1007/s00134-020-06312-y

#### Q4
*Update:* His initial blood work, drawn at arrival, showed a urea of 9.4 mmol/L.

**Which of the following was this patient's CURB-65 score at arrival?**

- A. 0 points
- B. 1 point
- C. 2 points  **(key)**
- D. 3 points
- E. 4 points

*Explanation:* At arrival he was not confused, his urea of 9.4 mmol/L was above 7 mmol/L for 1 point, his respiratory rate of 32/minute was 30/minute or more for 1 point, his BP of 118/72 mmHg met neither BP criterion, and at 61 he was under 65. His score was therefore 2. The score does not include oxygenation, so a patient with a modest CURB-65 can still have severe hypoxemic respiratory failure, as he did. Lower scores leave out the urea or the respiratory rate, and higher scores count items he did not have.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital. An international derivation and validation study. Thorax. 2003.

### sob-29: Weak and breathing fast

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 26-year-old man is brought to the emergency department by his roommate with 2 days of worsening shortness of breath and weakness. Since this morning he cannot climb stairs or lift his arms above his head. His roommate says he has inhaled spray paint from a bag most evenings for months. He has had no vomiting, diarrhea or fever. He takes no medications, sedatives or opioids. There is silver paint around his nose and mouth. He is alert. His breathing is fast and shallow and his chest is clear. His limbs are weak with reduced reflexes. Labs: Na 139 mmol/L, K 1.9 mmol/L, Cl 117 mmol/L, HCO3 10 mmol/L, glucose 5.6 mmol/L, creatinine 104 umol/L, calcium 2.30 mmol/L, lactate 1.3 mmol/L, osmolal gap 5 mOsm/kg. Serum ketones are negative.

- Temperature: 36.9°C oral
- Pulse: 108/minute
- Resp.: 32/minute
- BP: 112/70 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following is the most likely cause of his acidosis?**

- A. Diabetic ketoacidosis
- B. Salicylate poisoning
- C. Severe diarrhea
- D. Toluene inhalation  **(key)**
- E. Toxic alcohol ingestion

*Explanation:* His anion gap is 139 minus 117 minus 10, which is 12 mmol/L, so this is a normal anion gap acidosis with severe hypokalemia. Toluene in spray paint and glue causes this pattern. It is a recognized cause of distal renal tubular acidosis, and its breakdown product, hippuric acid, is excreted in the urine with sodium and potassium. Diabetic ketoacidosis, salicylate poisoning and a toxic alcohol raise the anion gap, and his glucose, ketones and osmolal gap are normal. Severe diarrhea causes a normal anion gap acidosis with hypokalemia, but he has had none.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Tuchscherer J, Rehman H. Metabolic acidosis in toluene sniffing. CJEM. 2013. https://doi.org/10.2310/8000.2013.130974

#### Q2
*Update:* Arterial gas on room air: pH 7.09, PaCO2 34 mmHg, HCO3 10 mmol/L.

**Which of the following best describes his respiratory compensation for this metabolic acidosis?**

- A. Appropriate for the degree of acidosis
- B. Excessive, from a primary respiratory alkalosis
- C. Inadequate, from a central respiratory depressant
- D. Inadequate, from weak respiratory muscles  **(key)**
- E. Not assessable until potassium is normal

*Explanation:* By Winter's formula his expected PaCO2 is 1.5 x 10 + 8 = 23 mmHg, plus or minus 2, so 21 to 25 mmHg. His PaCO2 of 34 mmHg is well above that, so his breathing is not keeping pace with the acidosis. With a potassium of 1.9 mmol/L and weak limbs, the weakness is reaching his breathing muscles, and he is at risk of respiratory failure even though his saturation is 97%. A primary respiratory alkalosis would push the PaCO2 below the expected range. He is alert and has taken no sedative or opioid. The gas can be read now, and waiting for a normal potassium would delay recognition of his failing ventilation.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med. 1967. https://doi.org/10.7326/0003-4819-66-2-312

#### Q3
**Which of the following is the most appropriate first treatment for his acidosis and electrolyte disorder?**

- A. calcium gluconate IV
- B. insulin with dextrose IV
- C. potassium replacement IV  **(key)**
- D. salbutamol by nebulizer
- E. sodium bicarbonate IV

*Explanation:* Potassium must be replaced first, by IV infusion with cardiac monitoring. The ATSDR guideline for toluene advises that bicarbonate not be given until potassium and calcium are adequately replaced, because alkali drives potassium into cells and can deepen the weakness, including of his breathing muscles. Insulin with dextrose and salbutamol also shift potassium into cells and would make it worse. His calcium of 2.30 mmol/L is normal, so calcium gluconate is not needed. Ventilatory support may still be needed if his breathing weakens further.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Agency for Toxic Substances and Disease Registry. Medical management guidelines for toluene. 2014. https://wwwn.cdc.gov/tsp/MMG/MMGDetails.aspx?mmgid=157&toxid=29

### sob-30: A young child who stopped walking

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department in the interior of British Columbia in May. A 4-year-old girl is brought in by her parents because she has been unsteady and falling since yesterday. Today she cannot walk or lift her arms well, and her voice is weak. She spent the weekend at a family ranch. She has had no fever, vomiting or diarrhea. She is alert and follows commands. Her legs are floppy with absent knee and ankle reflexes, and her arms are weak. Sensation seems normal. Her cough is weak, and her abdomen moves inward as her chest rises when she breathes in.

- Temperature: 36.9°C tympanic
- Pulse: 124/minute
- Resp.: 34/minute
- BP: 98/60 mmHg
- O2 sat: 96% on room air
- Weight: 17 kg

#### Q1
**Which of the following findings best shows how severely her breathing is affected?**

- A. Absent knee and ankle reflexes
- B. Oxygen saturation of 96%
- C. Paradoxical breathing and weak cough  **(key)**
- D. Pulse of 124/minute
- E. Unsteady gait since yesterday

*Explanation:* A weak cough and inward movement of the abdomen as the chest rises show that the ascending paralysis has reached her breathing muscles, including the diaphragm, and she is at risk of respiratory failure. A saturation of 96% on room air does not measure the strength of those muscles and can stay normal until ventilation fails. Absent reflexes and an unsteady gait describe the neurological deficit but not the threat to her breathing. A fast pulse is nonspecific in a frightened, unwell child.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Brown N, Waja N. Tick paralysis in a 6-year-old boy. Can Fam Physician. 2022. https://doi.org/10.46747/cfp.680122

#### Q2
*Update:* While a nurse brushes her long hair, she finds an engorged tick attached to the scalp behind the right ear.

**Which of the following is the most appropriate treatment for her now?**

- A. Botulism antitoxin via public health
- B. Cover the tick with petroleum jelly
- C. doxycycline 37 mg PO twice daily
- D. IV immune globulin 2 g/kg
- E. Remove the tick with fine tweezers  **(key)**

*Explanation:* Ascending flaccid paralysis with lost reflexes over 1 to 2 days and an attached engorged tick is tick paralysis. Removing the tick is the treatment, and strength usually improves within hours. Grasp the tick with tweezers as close to the skin as possible. Covering it with petroleum jelly delays removal. Immune globulin treats Guillain-Barré syndrome, which usually progresses more slowly, over up to 4 weeks, and is not reversed by removing a tick. Botulism antitoxin is for a descending paralysis, and hers is ascending. Doxycycline treats tick-borne infections, not the paralysis.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Brown N, Waja N. Tick paralysis in a 6-year-old boy. Can Fam Physician. 2022. https://doi.org/10.46747/cfp.680122

#### Q3
*Update:* Two hours after the tick is removed she can lift her arms, her cough is stronger and her breathing is no longer paradoxical. Her legs are still weak.

**Which of the following is the most appropriate plan for her now?**

- A. Discharge home now with her parents
- B. Elective intubation before transfer
- C. Lumbar puncture to exclude Guillain-Barré
- D. MRI of the spine before any decision
- E. Observe with serial checks of breathing  **(key)**

*Explanation:* Rapid improvement within hours of removing the tick confirms the diagnosis, and recovery is usually complete by about 36 hours. Until then she should stay where her strength, cough and breathing can be rechecked at set times, because weakness that reached her breathing muscles can still threaten ventilation. Sending her home now removes that monitoring while her legs are still weak. Intubation is not needed while her breathing improves. A lumbar puncture and spinal MRI are not needed once removal of the tick has produced clear improvement.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Brown N, Waja N. Tick paralysis in a 6-year-old boy. Can Fam Physician. 2022. https://doi.org/10.46747/cfp.680122

### sob-31: Fever, palpitations and orthopnea at 79

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old woman presents to the emergency department with 5 days of cough with yellow sputum and fever, and 2 days of palpitations and worsening shortness of breath. Since last night she cannot lie flat. She has no chest pain. She has hypertension and type 2 diabetes treated with ramipril and metformin. She has no known heart disease. She speaks in short sentences. The JVP is 5 cm above the sternal angle. There are crackles at both bases and bronchial breathing at the left base. She has mild ankle edema. The ECG shows atrial fibrillation at 148/minute with no ST changes.

- Temperature: 38.2°C oral
- Pulse: 148/minute irregular
- Resp.: 30/minute
- BP: 134/82 mmHg
- O2 sat: 89% on room air

#### Q1
**Which of the following conditions are supported by the findings in this patient's history and examination?**

Select 3.

- A. Acute coronary syndrome
- B. Acute heart failure  **(key)**
- C. Atrial fibrillation  **(key)**
- D. Bacterial pneumonia  **(key)**
- E. COPD exacerbation
- F. Pericardial tamponade
- G. Pulmonary embolism
- H. Tension pneumothorax

*Explanation:* Breathlessness in older adults often has more than one cause, and each needs treatment. Fever, purulent sputum and bronchial breathing at the left base support pneumonia. The ECG shows atrial fibrillation at 148/minute. Orthopnea, a raised JVP, bilateral crackles and ankle edema support acute heart failure. She has no chest pain or ST changes to suggest a coronary syndrome, no history of COPD, a normal BP without the circulatory signs of tamponade, and breath sounds with crackles on both sides rather than the absent breath sounds of a tension pneumothorax. Nothing in the case points to PE over these explanations.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Stiell IG, de Wit K, Scheuermeyer FX, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.

#### Q2
**Which of the following is the most appropriate initial approach to her atrial fibrillation?**

- A. diltiazem 20 mg IV bolus
- B. Electrical cardioversion now
- C. metoprolol 5 mg IV every 5 minutes
- D. procainamide 1 g IV over 1 hour
- E. Treat the underlying illness first  **(key)**

*Explanation:* Her atrial fibrillation is secondary to an acute illness, pneumonia with heart failure. The CAEP checklist advises treating the underlying cause first in secondary AF, because a fast rate is often compensatory and rate or rhythm control can cause harm. Diltiazem is a negative inotrope and can precipitate shock in decompensated heart failure. Repeated IV metoprolol can also cause hypotension in this setting. Electrical or procainamide cardioversion is unlikely to hold while the fever and heart failure persist, and her onset is not clearly recent enough to be safe without anticoagulation.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Stiell IG, de Wit K, Scheuermeyer FX, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.

#### Q3
**Which of the following antibiotic regimens is most appropriate for her pneumonia on admission to hospital?**

- A. amoxicillin 1 g PO three times daily
- B. azithromycin 500 mg IV alone
- C. ceftriaxone 1 g IV plus azithromycin  **(key)**
- D. ciprofloxacin 400 mg IV alone
- E. piperacillin-tazobactam plus vancomycin

*Explanation:* For adults admitted to a ward with community acquired pneumonia and no risk factors for MRSA or Pseudomonas, the ATS/IDSA guideline recommends a beta-lactam such as ceftriaxone combined with a macrolide such as azithromycin. Oral amoxicillin alone is an outpatient regimen for patients without comorbidity. A macrolide alone does not cover resistant pneumococcus well enough for an admitted patient. Ciprofloxacin has poor pneumococcal activity. Broad coverage with piperacillin-tazobactam and vancomycin is for patients with risk factors she does not have.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.

### sob-32: Fever and a wet cough in a man with weak muscles

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 63-year-old man with amyotrophic lateral sclerosis is brought to the emergency department by ambulance with 3 days of fever and a wet cough that he cannot clear, and 1 day of worsening shortness of breath. He uses bilevel noninvasive ventilation at night and has a gastrostomy tube. His peak cough flow at clinic last month was 190 L/minute. His advance directive, written with his neurologist, accepts noninvasive ventilation and antibiotics and declines intubation and tracheostomy. He is drowsy but rousable. There are coarse crackles at the right lung base. Paramedics started oxygen by nonrebreather mask.

- Temperature: 38.4°C oral
- Pulse: 112/minute
- Resp.: 30/minute
- BP: 132/78 mmHg
- O2 sat: 97% on 15 L/minute by nonrebreather mask

#### Q1
**Which of the following is the most appropriate respiratory support for him now?**

- A. Bilevel ventilation by face mask  **(key)**
- B. Comfort care with morphine only
- C. High flow nasal oxygen
- D. Keep the nonrebreather mask
- E. Rapid sequence intubation

*Explanation:* He is drowsy, and high flow oxygen can keep his saturation normal while his weak breathing muscles let carbon dioxide rise. Canadian ALS recommendations treat noninvasive ventilation as the standard of care for respiratory insufficiency and advise against oxygen as a routine treatment, with low oxygen levels treated first by noninvasive ventilation. His advance directive accepts noninvasive ventilation and declines intubation, so intubation would override his stated wishes. High flow nasal oxygen gives no inspiratory pressure support. Comfort care alone withholds a treatment he has chosen.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Shoesmith C, Abrahao A, Benstead T, et al. Canadian best practice recommendations for the management of amyotrophic lateral sclerosis. CMAJ. 2020. https://doi.org/10.1503/cmaj.191721

#### Q2
**Which of the following is the most effective way to help him clear his airway secretions?**

- A. Bronchoscopy at the bedside
- B. glycopyrrolate 0.2 mg SC every 6 hours
- C. Incentive spirometry every hour
- D. Mechanical insufflation-exsufflation  **(key)**
- E. Nebulized acetylcysteine every 6 hours

*Explanation:* His peak cough flow of 190 L/minute is well below the 270 L/minute threshold at which Canadian ALS recommendations advise mechanical insufflation-exsufflation for trouble clearing secretions, with more frequent use during a chest infection. The device inflates the lungs and then applies negative pressure to produce an effective cough. Incentive spirometry depends on muscle strength he does not have. Glycopyrrolate treats drooling of saliva, not retained chest secretions. Nebulized acetylcysteine does not give him the cough he needs to bring secretions up. Bronchoscopy is invasive and is kept for failure of the device.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Shoesmith C, Abrahao A, Benstead T, et al. Canadian best practice recommendations for the management of amyotrophic lateral sclerosis. CMAJ. 2020. https://doi.org/10.1503/cmaj.191721

#### Q3
*Update:* His arrival arterial gas showed pH 7.26 and PaCO2 68 mmHg. After 1 hour of bilevel ventilation with added oxygen, his O2 saturation is 95%.

**Which of the following is the best measure of whether noninvasive ventilation is working for him?**

- A. Chest radiograph appearance
- B. Oxygen saturation of 95%
- C. Peak expiratory flow rate
- D. Repeat arterial PaCO2 and pH  **(key)**
- E. Temperature trend over 1 hour

*Explanation:* His failure is ventilatory, so success is judged by a falling PaCO2 and a rising pH, and the BTS/ICS guideline advises a repeat blood gas 1 to 2 hours after starting noninvasive ventilation. A saturation of 95% on added oxygen can coexist with a PaCO2 that is still rising. Peak flow needs effort and a lip seal he cannot give and measures airflow obstruction, not ventilation. The chest radiograph and temperature follow the pneumonia over days, not his response to ventilation in the first hours.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016.

### sob-33: Noisy breathing and a very sore throat

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 15-year-old boy is brought to the emergency department by his father after 8 days of fever, sore throat and tiredness. Since last night his breathing has become noisy and he cannot sleep lying down. Swallowing is painful but he can manage sips of water. He is fully immunized and has not travelled. He is sitting up and speaks in a thick voice. Both tonsils are grossly enlarged, meet in the midline and are covered with white exudate. The uvula is in the midline and he can open his mouth fully. There are large tender nodes in the back of the neck, and the spleen tip is palpable. There is a loud snoring noise with each breath.

- Temperature: 38.6°C oral
- Pulse: 112/minute
- Resp.: 24/minute
- BP: 118/70 mmHg
- O2 sat: 95% on room air
- Weight: 58 kg

#### Q1
**Which of the following findings indicates that his upper airway is becoming narrowed?**

- A. Palpable spleen tip
- B. Posterior cervical lymph nodes
- C. Snoring noise and cannot lie flat  **(key)**
- D. Temperature of 38.6°C
- E. White tonsillar exudate

*Explanation:* A snoring noise with each breath while awake, called stertor, and being unable to lie down show that tonsils meeting in the midline are narrowing his upper airway. Lying flat lets the enlarged tonsils fall back and worsens the obstruction. A palpable spleen, posterior cervical nodes, fever and tonsillar exudate support the cause of his illness but say nothing about the size of his airway. The distinction matters because upper airway narrowing needs a different response from a lower airway problem.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Eskander A, de Almeida JR, Irish JC. Acute upper airway obstruction. N Engl J Med. 2019. https://doi.org/10.1056/NEJMra1811697

#### Q2
**Which of the following is the most likely cause of his upper airway narrowing?**

- A. Acute epiglottitis
- B. Infectious mononucleosis  **(key)**
- C. Peritonsillar abscess
- D. Respiratory diphtheria
- E. Retropharyngeal abscess

*Explanation:* Eight days of fever and tiredness, huge symmetrical tonsils with exudate, posterior cervical nodes and a palpable spleen tip in a teenager point to infectious mononucleosis. A peritonsillar abscess is usually one-sided, with trismus and deviation of the uvula, and his uvula is central and his mouth opens fully. Epiglottitis causes severe pain with a nearly normal oropharynx, not tonsils that meet in the midline. He is fully immunized and has not travelled, which makes diphtheria very unlikely. A retropharyngeal abscess bulges the posterior pharyngeal wall and stiffens the neck.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Luzuriaga K, Sullivan JL. Infectious mononucleosis. N Engl J Med. 2010. https://doi.org/10.1056/NEJMcp1001116

#### Q3
**Which of the following is the most appropriate treatment to start for him now?**

- A. acyclovir 800 mg PO five times daily
- B. amoxicillin 500 mg PO three times daily
- C. Awake flexible intubation now
- D. dexamethasone 10 mg IV  **(key)**
- E. Needle aspiration of both tonsils

*Explanation:* Corticosteroids are not used for the usual symptoms of mononucleosis but are reserved for impending airway obstruction, and stertor with inability to lie flat is that situation. A corticosteroid such as dexamethasone IV can shrink the swollen lymphoid tissue while he is watched closely in case the obstruction progresses. An antiviral such as acyclovir adds nothing. Amoxicillin does not treat a viral illness and often causes a rash in mononucleosis. There is no abscess to aspirate. He keeps a saturation of 95% and is talking, so even an awake intubation is not yet needed, although the airway team should be told about him.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Gomes K, Goldman RD. Corticosteroids for infectious mononucleosis. Can Fam Physician. 2023. https://doi.org/10.46747/cfp.6902101

### sob-34: Lunch tray in a stretcher bay

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 72-year-old man with Parkinson disease is in the emergency department awaiting a ward bed after a fall. While eating roast beef from his lunch tray, he suddenly sits forward and clutches his throat. He cannot speak, cough or make any sound. His lips are turning blue. A nurse calls you to the bedside. He is conscious and looking at you in panic. He has no known allergies and was breathing comfortably moments earlier.

- Pulse: 124/minute
- O2 sat: 82% on room air

#### Q1
**Which of the following is the most appropriate immediate action for this conscious patient?**

- A. Back blows then abdominal thrusts  **(key)**
- B. Blind finger sweep of the mouth
- C. Encourage him to keep coughing
- D. Immediate cricothyrotomy
- E. Start chest compressions

*Explanation:* He cannot speak, cough or make a sound, which is severe foreign body airway obstruction. The 2025 American Heart Association guideline recommends cycles of 5 back blows followed by 5 abdominal thrusts for a conscious adult until the object comes out or he becomes unresponsive. Encouraging coughing is right only for mild obstruction, when the patient can cough forcefully. A blind finger sweep can push the object deeper. Chest compressions start once he is unresponsive. A surgical airway is kept for failure of these measures and of removal under direct vision.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* American Heart Association. Part 7. Adult basic life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025. https://doi.org/10.1161/CIR.0000000000001369

#### Q2
*Update:* The obstruction does not clear. He becomes unresponsive and is lowered onto the stretcher. He is not breathing.

**Which of the following is the most appropriate next action for this unresponsive patient?**

- A. Abdominal thrusts while supine
- B. Back blows with him on his side
- C. Blind finger sweep of the mouth
- D. Check for a pulse for 30 seconds
- E. Start chest compressions  **(key)**

*Explanation:* Once a choking adult becomes unresponsive, the American Heart Association recommends starting CPR at once, looking in the mouth for a visible object each time the airway is opened for breaths. Chest compressions raise intrathoracic pressure and can expel the object. Back blows and abdominal thrusts are for the conscious patient. A blind finger sweep can push the object further in. A pulse check should take no more than 10 seconds, and 30 seconds delays compressions.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* American Heart Association. Part 7. Adult basic life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025. https://doi.org/10.1161/CIR.0000000000001369

#### Q3
**Which of the following findings in a choking adult would indicate mild obstruction that is best managed by encouraging coughing?**

- A. Able to cough forcefully and speak  **(key)**
- B. Clutching the throat
- C. Cyanosis of the lips
- D. High pitched noise when breathing in
- E. Silent attempts to cough

*Explanation:* An adult who can speak and cough forcefully is still moving air, and the American Heart Association advises letting that person keep coughing while staying with them. Clutching the throat is the universal sign of choking and does not tell mild from severe. Cyanosis, a high pitched inspiratory noise and silent coughing are signs of severe obstruction that call for back blows and abdominal thrusts.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* American Heart Association. Part 7. Adult basic life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025. https://doi.org/10.1161/CIR.0000000000001369

### sob-35: Weight loss and a dull left chest

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 71-year-old woman presents to the emergency department with 3 weeks of increasing shortness of breath, now on minimal exertion, and a dry cough. She has lost 6 kg over 2 months. She is a former smoker with 40 pack-years. She has no fever and no chest pain. She is sitting up and speaking in full sentences. There is dullness to percussion and absent breath sounds over the lower two thirds of the left chest. The trachea is deviated to the right. The JVP is not raised. The chest radiograph shows a large left pleural effusion with the mediastinum shifted to the right.

- Temperature: 36.9°C oral
- Pulse: 104/minute
- Resp.: 26/minute
- BP: 138/82 mmHg
- O2 sat: 91% on room air

#### Q1
**Which of the following is the most appropriate next step to relieve this patient's breathlessness?**

- A. Chest drain with suction to drain dry
- B. furosemide 40 mg IV daily
- C. Needle decompression of the left chest
- D. Talc pleurodesis in the department
- E. Thoracentesis of up to 1.5 L  **(key)**

*Explanation:* A large effusion pushing the mediastinum away is causing her breathlessness, and a therapeutic aspiration relieves symptoms and gives fluid for diagnosis. The BTS guideline advises removing no more than about 1.5 L at one sitting to limit re-expansion pulmonary edema. Draining the whole effusion quickly on suction raises that risk. Furosemide does not treat an effusion from probable malignancy, and her JVP is normal. Needle decompression is for tension pneumothorax, not fluid. Pleurodesis comes after the diagnosis is made and the lung is shown to re-expand.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.

#### Q2
*Update:* Pleural fluid protein is 42 g/L and serum protein is 68 g/L. Pleural fluid LDH is 380 U/L and serum LDH is 210 U/L, with a laboratory upper limit of normal of 250 U/L.

**Which of the following best interprets these pleural fluid results?**

- A. Exudate, meeting all three criteria  **(key)**
- B. Exudate, meeting only the LDH criteria
- C. Indeterminate, needing a serum albumin gradient
- D. Transudate, as serum LDH is normal
- E. Transudate, as serum protein exceeds fluid

*Explanation:* Light's criteria call an effusion an exudate if any one is met. The protein ratio is 42 divided by 68, or 0.62, above 0.5. The LDH ratio is 380 divided by 210, or 1.8, above 0.6. The fluid LDH of 380 U/L is above two thirds of the upper limit, which is about 167 U/L. All three are met, so this is an exudate, consistent with malignancy in a smoker with weight loss. The albumin gradient is for a borderline exudate in a patient on diuretics, and a normal serum LDH or a higher serum protein does not make an effusion a transudate.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.

#### Q3
*Update:* During a repeat therapeutic aspiration a week later, after 1.2 L has been removed, she develops chest tightness and persistent coughing.

**Which of the following is the most appropriate action at this point in the procedure?**

- A. Apply suction to finish drainage
- B. codeine 30 mg PO and continue
- C. Continue to 1.5 L as planned
- D. Stop the aspiration now  **(key)**
- E. Switch to a vacuum bottle

*Explanation:* Chest tightness and persistent coughing during drainage suggest a sharp fall in pleural pressure as the lung re-expands, which can lead to re-expansion pulmonary edema. The BTS guideline advises stopping the aspiration when these symptoms appear, whatever volume has been removed. Suction and a vacuum bottle lower pleural pressure further. Continuing to the planned volume or suppressing the cough with codeine ignores the warning.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.

### sob-36: Breathless with a swollen abdomen

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old man with alcohol-related cirrhosis presents to the emergency department with 1 week of increasing shortness of breath, now at rest, and he cannot lie flat. He stopped drinking 1 year ago. He takes spironolactone 100 mg and furosemide 40 mg daily. He has no fever, cough or chest pain. There is dullness and absent breath sounds over the lower two thirds of the right chest. He has moderate ascites and spider angiomas. The JVP is not raised and there is mild ankle edema. A chest radiograph shows a large right pleural effusion with a normal heart size and a clear left lung.

- Temperature: 36.8°C oral
- Pulse: 104/minute
- Resp.: 28/minute
- BP: 104/62 mmHg
- O2 sat: 89% on room air

#### Q1
**Which of the following is the most likely cause of his pleural effusion?**

- A. Ascites moving across the diaphragm  **(key)**
- B. Heart failure with fluid overload
- C. Malignancy spreading to the pleura
- D. Parapneumonic effusion
- E. Pulmonary embolism with infarction

*Explanation:* A large right-sided effusion in a man with cirrhosis and ascites, with a normal heart size, a normal JVP and no fever, is most likely a hepatic hydrothorax, where ascitic fluid passes through small defects in the diaphragm into the pleural space. Heart failure usually causes bilateral effusions with a raised JVP and a large heart. A parapneumonic effusion comes with fever, cough and consolidation. Pulmonary infarction causes pleuritic pain and a small effusion. Malignancy, including liver cancer, remains possible and is one reason to send the fluid for analysis.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, evaluation, and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. 2021 practice guidance by the American Association for the Study of Liver Diseases. Hepatology. 2021. https://doi.org/10.1002/hep.31884

#### Q2
**Which of the following is the most appropriate treatment for his breathlessness now?**

- A. albumin 25% 100 mL IV
- B. Increase furosemide to 80 mg IV
- C. Large-volume paracentesis alone
- D. Noninvasive ventilation
- E. Therapeutic thoracentesis  **(key)**

*Explanation:* The large effusion is causing his hypoxemia and orthopnea, and the AASLD guidance advises therapeutic thoracentesis for dyspnea, followed by diuretics to slow reaccumulation. Draining the fluid relieves him within minutes and provides fluid to exclude infection and malignancy. Paracentesis alone removes abdominal fluid but leaves the pleural collection that is compressing his lung. A higher dose of IV furosemide acts over days and risks kidney injury with his low BP. Albumin does not drain the effusion. Noninvasive ventilation does not remove a collection of fluid.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, evaluation, and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. 2021 practice guidance by the American Association for the Study of Liver Diseases. Hepatology. 2021. https://doi.org/10.1002/hep.31884

#### Q3
*Update:* He improves after removal of 1.5 L of transudate with a low neutrophil count and a negative culture. Four days later the effusion has returned to the same size despite diuretics.

**Which of the following is the most appropriate plan for his recurrent pleural effusion?**

- A. Chest tube for continuous drainage
- B. Chest tube with talc pleurodesis
- C. Discharge and review in 4 weeks
- D. Repeat thoracentesis and TIPS referral  **(key)**
- E. Stop both diuretics

*Explanation:* A hydrothorax that returns despite diuretics is refractory, and repeat thoracentesis controls his symptoms while he is assessed for a transjugular intrahepatic portosystemic shunt (TIPS) or liver transplantation. The AASLD guidance advises avoiding chest tubes in hepatic hydrothorax because they are linked to high morbidity, clinical deterioration, death and fistula formation. Talc pleurodesis also needs a chest tube. Stopping diuretics speeds reaccumulation. Waiting 4 weeks leaves a large recurrent effusion untreated.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, evaluation, and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. 2021 practice guidance by the American Association for the Study of Liver Diseases. Hepatology. 2021. https://doi.org/10.1002/hep.31884

### sob-37: Sleepy and breathless after a cold

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old woman is brought to the emergency department by her daughter because she has been more short of breath and sleepy for 3 days after a cold. She has hypertension, a BMI of 52 kg/m2 and loud snoring with pauses in breathing at night, but has never had a sleep study. Her TSH was normal last month. She has never smoked, has no known lung disease and takes no opioids or sedatives. She dozes off during the history but rouses to voice, follows commands and coughs on request. There are distant breath sounds with no wheeze. Both legs have pitting edema. Paramedics gave oxygen at 6 L/minute.

- Temperature: 36.9°C oral
- Pulse: 96/minute
- Resp.: 18/minute
- BP: 156/92 mmHg
- O2 sat: 97% on 6 L/minute by nasal prongs
- Weight: 138 kg

#### Q1
*Update:* Arterial gas on 6 L/minute: pH 7.24, PaCO2 84 mmHg, PaO2 88 mmHg, HCO3 35 mmol/L.

**Which of the following is the most likely cause of this patient's respiratory failure?**

- A. COPD exacerbation
- B. Hypothyroidism with myxedema
- C. Obesity hypoventilation syndrome  **(key)**
- D. Opioid or sedative toxicity
- E. Pulmonary embolism

*Explanation:* Severe obesity, snoring with witnessed apneas and hypercapnia with a raised bicarbonate, in a woman with no lung disease, point to obesity hypoventilation syndrome, made worse now by a respiratory infection and supplemental oxygen. The ATS guideline defines it as a BMI of 30 kg/m2 or more with awake daytime hypercapnia once other causes of hypoventilation are excluded. She has never smoked and has no lung disease, which makes COPD unlikely. Her TSH was normal last month, and she takes no opioids or sedatives. PE causes hypoxemia with a low PaCO2, not a PaCO2 of 84 mmHg.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Mokhlesi B, Masa JF, Brozek JL, et al. Evaluation and management of obesity hypoventilation syndrome. An official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2019. https://doi.org/10.1164/rccm.201905-1071ST

#### Q2
*Update:* Bilevel noninvasive ventilation is started and oxygen is titrated down.

**Which of the following is the most appropriate way to judge her response to noninvasive ventilation?**

- A. Chest radiograph in 6 hours
- B. Continuous pulse oximetry alone
- C. Repeat blood gas in 1 to 2 hours  **(key)**
- D. Respiratory rate trend alone
- E. Serum bicarbonate tomorrow

*Explanation:* Her failure is hypercapnic, so the response is judged by the pH and PaCO2, and the BTS/ICS guideline advises a repeat blood gas within 1 to 2 hours of starting NIV and after changes in settings. Oximetry cannot show the CO2, and a saturation can look normal on oxygen while the PaCO2 climbs. A falling respiratory rate is encouraging but does not measure ventilation. A chest radiograph does not track the CO2. The bicarbonate changes over days rather than hours.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016.

#### Q3
*Update:* She improves and is admitted. Two days later on room air her pH is 7.38 and PaCO2 is 58 mmHg, and she is alert. Discharge is planned before her sleep study.

**Which of the following is the most appropriate breathing support plan for her discharge?**

- A. CPAP only after weight loss
- B. Home NIV until sleep testing  **(key)**
- C. Home oxygen at 2 L/minute alone
- D. Tracheostomy referral now
- E. No home breathing support

*Explanation:* The ATS guideline suggests that patients hospitalized with hypercapnic respiratory failure and suspected obesity hypoventilation go home on noninvasive ventilation until outpatient sleep testing and pressure titration, ideally within 2 to 3 months. Her PaCO2 of 58 mmHg on room air shows that daytime hypoventilation persists, so going home without support risks a relapse. Oxygen alone does not treat hypoventilation. CPAP may suit her after testing, but treatment is not deferred until weight loss. Tracheostomy is reserved for patients who fail or cannot use noninvasive support.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Mokhlesi B, Masa JF, Brozek JL, et al. Evaluation and management of obesity hypoventilation syndrome. An official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2019. https://doi.org/10.1164/rccm.201905-1071ST

### sob-38: Breathless during cancer treatment

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 64-year-old woman presents to the emergency department with 10 days of dry cough and shortness of breath that has progressed to breathlessness at rest. She has metastatic non-small cell lung cancer treated with pembrolizumab every 3 weeks. Her fourth dose was 2 weeks ago. She has never had chest radiation. She has no fever, chest pain or leg swelling. She now needs help to walk to the bathroom. There are fine crackles at both lung bases. The JVP is not raised.

- Temperature: 37.3°C oral
- Pulse: 104/minute
- Resp.: 26/minute
- BP: 128/76 mmHg
- O2 sat: 87% on room air
- Weight: 60 kg

#### Q1
*Update:* Her white cell count is normal. CT with pulmonary angiography shows no PE and new patchy ground glass opacity and consolidation in both lower lobes. Her tumour is smaller than on her last scan.

**Which of the following is the most likely cause of her shortness of breath?**

- A. Community-acquired bacterial pneumonia
- B. Heart failure with pulmonary edema
- C. Immune checkpoint inhibitor pneumonitis  **(key)**
- D. Lymphangitic spread of the cancer
- E. Radiation pneumonitis of both lungs

*Explanation:* New bilateral ground glass and consolidation during treatment with pembrolizumab, with no fever, a normal white count, no PE and a shrinking tumour, point to immune checkpoint inhibitor pneumonitis. It is diagnosed after infection, heart failure, PE and cancer progression have been considered. Bacterial pneumonia is less likely without fever or a raised white count, although cultures are still sent. A normal JVP and no leg swelling argue against heart failure. A smaller tumour makes lymphangitic spread unlikely. She has never had chest radiation.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Schneider BJ, Naidoo J, Santomasso BD, et al. Management of immune-related adverse events in patients treated with immune checkpoint inhibitor therapy. ASCO guideline update. J Clin Oncol. 2021. https://doi.org/10.1200/JCO.21.01440

#### Q2
**Which of the following is the most appropriate treatment to start for her now?**

- A. budesonide 400 mcg inhaled twice daily
- B. Continue pembrolizumab and observe
- C. infliximab 300 mg IV once
- D. methylprednisolone 60 mg IV daily  **(key)**
- E. prednisone 10 mg PO daily

*Explanation:* She needs oxygen and help with self-care, which makes this severe pneumonitis. The ASCO guideline advises holding the checkpoint inhibitor and giving IV methylprednisolone 1 to 2 mg/kg per day, which is 60 to 120 mg for her 60 kg. Prednisone 10 mg is far below that dose. Infliximab is a second-line drug for pneumonitis that has not improved after 48 hours of corticosteroids. Inhaled budesonide is not a treatment for immune pneumonitis. Continuing pembrolizumab keeps driving the injury.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Schneider BJ, Naidoo J, Santomasso BD, et al. Management of immune-related adverse events in patients treated with immune checkpoint inhibitor therapy. ASCO guideline update. J Clin Oncol. 2021. https://doi.org/10.1200/JCO.21.01440

#### Q3
**Which of the following findings best marks her pneumonitis as severe rather than moderate?**

- A. Bilateral lower lobe involvement
- B. Cough lasting 10 days
- C. Crackles at both lung bases
- D. Heart rate of 104/minute
- E. Needing oxygen for a saturation of 87%  **(key)**

*Explanation:* The grade of checkpoint inhibitor pneumonitis rests on symptoms and function. Grade 3, or severe, pneumonitis has severe symptoms that limit self-care and need oxygen, as she does with a saturation of 87% on room air and needing help to walk to the bathroom. Involvement of more than one lobe fits grade 2 and on its own does not make the illness severe. Cough duration, crackles and a heart rate of 104/minute do not set the grade.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Schneider BJ, Naidoo J, Santomasso BD, et al. Management of immune-related adverse events in patients treated with immune checkpoint inhibitor therapy. ASCO guideline update. J Clin Oncol. 2021. https://doi.org/10.1200/JCO.21.01440

### sob-39: Blood-streaked sputum after months of sinus trouble

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 52-year-old man presents to the emergency department with 1 week of cough and 2 days of increasing shortness of breath. Yesterday he coughed up a small amount of blood-streaked sputum twice. For 3 months he has had nasal crusting and bloody nasal discharge, treated as sinusitis with two courses of antibiotics. His joints have ached for a month. He does not smoke and takes no medications. The nasal mucosa is crusted. There are crackles in both lungs. His hemoglobin was 128 g/L at a walk-in clinic 1 week ago. A chest radiograph shows bilateral patchy alveolar opacities.

- Temperature: 37.8°C oral
- Pulse: 112/minute
- Resp.: 28/minute
- BP: 158/94 mmHg
- O2 sat: 89% on room air

#### Q1
*Update:* His hemoglobin today is 92 g/L. He has no melena and no other source of bleeding.

**Which of the following findings best shows how much he is bleeding into his lungs?**

- A. Bilateral alveolar opacities
- B. Blood-streaked sputum twice yesterday
- C. Crackles in both lungs
- D. Fall in hemoglobin of 36 g/L  **(key)**
- E. Nasal crusting and bleeding

*Explanation:* A fall in hemoglobin from 128 to 92 g/L in a week, with no other source of bleeding, shows that a large volume of blood has entered his alveoli. Hemoptysis is absent in up to one third of patients with diffuse alveolar hemorrhage, so a little blood-streaked sputum can badly underestimate the bleed. Crackles and bilateral alveolar opacities occur with any process that fills the alveoli and do not measure the amount of blood. Nasal crusting points to the cause, not to the amount of lung bleeding.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Lara AR, Schwarz MI. Diffuse alveolar hemorrhage. Chest. 2010. https://doi.org/10.1378/chest.08-2084

#### Q2
**Which of the following tests is most useful now to identify the cause of his lung bleeding?**

- A. B-type natriuretic peptide
- B. Serum D-dimer level
- C. Sputum bacterial culture
- D. Transthoracic echocardiogram
- E. Urinalysis for blood and casts  **(key)**

*Explanation:* Nasal crusting, joint aches and alveolar hemorrhage suggest an ANCA-associated vasculitis such as granulomatosis with polyangiitis, which often involves the kidneys as well. A urinalysis with blood and red cell casts identifies a pulmonary renal syndrome within minutes, and glomerulonephritis with alveolar hemorrhage defines severe, organ-threatening disease. D-dimer and BNP do not point to a cause of alveolar bleeding. Sputum culture looks for infection, which does not explain the nasal disease or anemia. Echocardiography looks for heart failure, which nothing in his findings suggests.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Chung SA, Langford CA, Maz M, et al. 2021 American College of Rheumatology/Vasculitis Foundation guideline for the management of antineutrophil cytoplasmic antibody-associated vasculitis. Arthritis Rheumatol. 2021. https://doi.org/10.1002/art.41773

#### Q3
*Update:* Urinalysis shows 3+ blood with red cell casts and his creatinine is 214 umol/L. His O2 saturation is 90% on 6 L/minute by nasal prongs. ANCA testing is sent.

**Which of the following is the most appropriate treatment to start for him now?**

- A. methylprednisolone 1 g IV daily  **(key)**
- B. piperacillin-tazobactam 4.5 g IV alone
- C. Plasma exchange as the first therapy
- D. prednisone 10 mg PO daily
- E. tranexamic acid 1 g IV alone

*Explanation:* Alveolar hemorrhage with glomerulonephritis is severe vasculitis, and immunosuppression should start without waiting for the ANCA result. Pulse IV methylprednisolone is one accepted way to begin glucocorticoids, alongside induction therapy such as rituximab. The 2021 ACR/Vasculitis Foundation guideline advises against routinely adding plasma exchange to induction therapy for alveolar hemorrhage, because the PEXIVAS trial showed no reduction in death or end-stage kidney disease. Prednisone 10 mg is far too low a dose for severe disease. Tranexamic acid does not treat the inflammation causing the bleeding. An antibiotic alone does not treat vasculitis.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Chung SA, Langford CA, Maz M, et al. 2021 American College of Rheumatology/Vasculitis Foundation guideline for the management of antineutrophil cytoplasmic antibody-associated vasculitis. Arthritis Rheumatol. 2021. https://doi.org/10.1002/art.41773

### sob-40: A teenager with fever, vomiting and breathlessness

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 17-year-old boy is brought to the emergency department by his mother with 5 days of cough, fever and increasing shortness of breath. He also has nausea, vomiting and crampy abdominal pain. Two days ago a walk-in clinic diagnosed gastroenteritis. He has no medical history and takes no medications. He plays hockey and has not travelled. His mother waits outside while you interview him alone. He speaks in full sentences. There are fine crackles at both lung bases. The abdomen is soft with mild diffuse tenderness.

- Temperature: 38.4°C oral
- Pulse: 118/minute
- Resp.: 26/minute
- BP: 122/70 mmHg
- O2 sat: 91% on room air

#### Q1
**Which of the following questions is most likely to identify the cause of his illness?**

- A. Contact with sick birds or farm animals
- B. Recent insect or tick bites
- C. Recent sexual partners
- D. Recent swimming in a lake or river
- E. Use of vaping products, including cannabis  **(key)**

*Explanation:* Respiratory symptoms with nausea, vomiting and abdominal pain in a teenager with hypoxemia and bilateral crackles fit e-cigarette or vaping product use-associated lung injury. The CDC advises asking every patient with respiratory, gastrointestinal or constitutional symptoms about vaping, and seeing a teenager without a parent present makes an honest answer more likely. Contact with birds or farm animals and freshwater swimming point to uncommon zoonotic infections that his history gives no reason to suspect. Tick bites and sexual contacts do not explain bilateral lung disease with gastrointestinal symptoms.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Jatlaoui TC, Wiltz JL, Kabbani S, et al. Update. Interim guidance for health care providers for managing patients with suspected e-cigarette, or vaping, product use-associated lung injury. United States, November 2019. MMWR Morb Mortal Wkly Rep. 2019. https://doi.org/10.15585/mmwr.mm6846e2

#### Q2
*Update:* He says he has vaped cannabis oil bought from a friend several times a day for 3 months. It is January and influenza is circulating in the community.

**Which of the following investigations is most important before his illness is attributed to vaping?**

- A. Bronchoscopy with lavage
- B. Influenza and viral respiratory testing  **(key)**
- C. Serum lipase and liver tests
- D. Transthoracic echocardiogram
- E. Urine drug screen for THC

*Explanation:* Vaping-associated lung injury is a diagnosis of exclusion, and its symptoms overlap with influenza and other respiratory infections, which can also occur together. During influenza season the CDC advises testing for influenza and treating infection according to usual guidelines. A urine test for THC only confirms what he has told you and does not change management. Bronchoscopy is not needed routinely. Lipase and liver tests look at his abdominal symptoms, which are part of the syndrome. An echocardiogram looks for a cardiac cause that nothing in his examination suggests.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Jatlaoui TC, Wiltz JL, Kabbani S, et al. Update. Interim guidance for health care providers for managing patients with suspected e-cigarette, or vaping, product use-associated lung injury. United States, November 2019. MMWR Morb Mortal Wkly Rep. 2019. https://doi.org/10.15585/mmwr.mm6846e2

#### Q3
*Update:* Influenza and other viral tests are negative. CT shows bilateral ground glass opacity with sparing just beneath the pleura. His O2 saturation is 90% on room air.

**Which of the following is the most appropriate management plan for him now?**

- A. Admit for antibiotics and a corticosteroid  **(key)**
- B. Admit for inhaled salbutamol alone
- C. Admit for oseltamivir alone
- D. Discharge on amoxicillin with follow-up
- E. Discharge on prednisone with follow-up

*Explanation:* A saturation of 90% on room air means he needs admission, as outpatient care is reserved for stable patients with normal oxygenation. In hospital, CDC guidance supports considering empiric corticosteroids for the lung injury together with antimicrobials while infection has not been fully excluded. Discharging him on amoxicillin or prednisone sends a hypoxemic patient home, and corticosteroids are used with caution in outpatients because they can worsen infection. Oseltamivir alone treats influenza, which testing did not find. Salbutamol alone does not treat inflammatory lung injury.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Evans ME, Twentyman E, Click ES, et al. Update. Interim guidance for health care professionals evaluating and caring for patients with suspected e-cigarette, or vaping, product use-associated lung injury. MMWR Morb Mortal Wkly Rep. 2020. https://doi.org/10.15585/mmwr.mm685152e2

### sob-41: Pleuritic pain in a young man with swollen legs

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 29-year-old man presents to the emergency department with 2 days of right-sided pleuritic chest pain and shortness of breath. Three weeks ago both his legs and his face began to swell. Last week his family physician diagnosed nephrotic syndrome, with a serum albumin of 18 g/L and 9 g of protein in the urine per day, and started furosemide. His creatinine is 76 umol/L. He has no other medical history and no recent travel, surgery or immobilization. He has symmetrical pitting edema to both knees without calf tenderness. There are reduced breath sounds at both lung bases. A chest radiograph shows small bilateral pleural effusions.

- Temperature: 37.1°C oral
- Pulse: 108/minute
- Resp.: 24/minute
- BP: 128/82 mmHg
- O2 sat: 92% on room air

#### Q1
**Which of the following is the most important diagnosis to exclude in this patient?**

- A. Acute heart failure
- B. Acute pericarditis
- C. Community-acquired pneumonia
- D. Pleural effusions from low albumin
- E. Pulmonary embolism  **(key)**

*Explanation:* The risk of venous thromboembolism in nephrotic syndrome is highest with heavy proteinuria and a low serum albumin, and his albumin is 18 g/L. New pleuritic pain with tachycardia and a saturation of 92% makes PE the diagnosis that must be excluded. Small effusions from a low albumin cause gradual breathlessness, not new pleuritic pain. There is no fever or productive cough to suggest pneumonia. Pericarditis causes central chest pain that changes with position rather than one-sided pleuritic pain. His normal creatinine and generalized edema do not make heart failure a likely cause of sudden pleuritic pain.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Kidney Disease. Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 clinical practice guideline for the management of glomerular diseases. Kidney Int. 2021. https://doi.org/10.1016/j.kint.2021.05.021

#### Q2
*Update:* You judge PE to be more likely than any other diagnosis.

**Which of the following is this patient's Wells score for pulmonary embolism?**

- A. 1.5 points
- B. 3.0 points
- C. 4.5 points  **(key)**
- D. 6.0 points
- E. 7.5 points

*Explanation:* He scores 3 points because PE is the most likely diagnosis and 1.5 points for a heart rate above 100/minute, which gives 4.5 points. His leg swelling is symmetrical and caused by nephrotic syndrome, without calf tenderness, so he does not score the 3 points for clinical signs of DVT. He has no previous VTE, recent surgery or immobilization, hemoptysis or cancer. Scores of 6.0 and 7.5 wrongly count his bilateral edema as a sign of DVT. Scores of 1.5 and 3.0 leave out one of the two items he has.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

#### Q3
**Which of the following is the most appropriate next test to evaluate him for PE?**

- A. Bilateral leg compression ultrasound
- B. CT pulmonary angiogram  **(key)**
- C. High sensitivity D-dimer
- D. Transthoracic echocardiogram
- E. Ventilation perfusion scan

*Explanation:* Thrombosis Canada advises going straight to imaging without a D-dimer when the Wells score is 4.5 or more, because a negative D-dimer cannot exclude PE at that pretest probability. His creatinine is normal, so CT pulmonary angiography is safe. His radiograph shows bilateral effusions, and a ventilation perfusion scan performs best in patients with a normal chest radiograph. Leg ultrasound is a poor first test when his leg swelling is symmetrical from nephrotic syndrome, and a negative scan would not exclude PE. Echocardiography is for patients too unstable for CT and does not exclude PE in a stable patient.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf

#### Q4
*Update:* The CT pulmonary angiogram is of good quality and shows no filling defect in the main, lobar or segmental arteries. It confirms small bilateral pleural effusions.

**Which of the following is the most appropriate next step in his evaluation for PE?**

- A. Bilateral leg compression ultrasound
- B. Repeat CT angiogram in 1 week
- C. Start dalteparin while testing continues
- D. Ventilation perfusion scan
- E. No further testing for PE  **(key)**

*Explanation:* The ESC guideline accepts a normal CT pulmonary angiogram as excluding PE in patients with a low or intermediate clinical probability, and a Wells score of 4.5 is intermediate on its three level scale. A ventilation perfusion scan would be hard to read with bilateral effusions and is not needed. Repeating the CT adds radiation without a new question. Leg ultrasound and empiric dalteparin are not needed once PE has been excluded, although his thrombosis risk from nephrotic syndrome should be addressed with his nephrologist.

*Key feature:* Shortness of breath 5. Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR.

*Source:* Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.

### sob-42: Sore throat and noisy breathing after travel

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 26-year-old man presents to the emergency department with 4 days of sore throat, low grade fever and pain on swallowing, and since this morning noisy breathing and a hoarse voice. Nine days ago he returned from visiting family in a region with an ongoing diphtheria outbreak. He did not receive routine childhood vaccines. His neck is diffusely swollen. A grey-white membrane covers both tonsils and extends onto the soft palate and posterior pharynx. It bleeds when touched with a tongue depressor. There is soft inspiratory stridor at rest. The chest is clear.

- Temperature: 38.2°C oral
- Pulse: 118/minute
- Resp.: 26/minute
- BP: 118/72 mmHg
- O2 sat: 94% on room air

#### Q1
**Which of the following is the most likely cause of his noisy breathing?**

- A. Acute epiglottitis
- B. Infectious mononucleosis
- C. Peritonsillar abscess
- D. Respiratory diphtheria  **(key)**
- E. Streptococcal pharyngitis

*Explanation:* An adherent grey-white membrane on the tonsils and pharynx, a swollen bull neck and new stridor in an unvaccinated traveller from an outbreak region is respiratory diphtheria. The membrane can extend into the larynx and trachea and obstruct the upper airway, which his hoarseness and stridor suggest is happening. Streptococcal pharyngitis and mononucleosis cause tonsillar exudate but not a spreading membrane that bleeds when touched. A peritonsillar abscess causes a one-sided bulge with deviation of the uvula. Epiglottitis causes severe pain with a nearly normal oropharynx.

*Key feature:* Shortness of breath 1. In acute dyspnea, distinguish upper from lower airway causes because emergency management differs.

*Source:* Ontario Ministry of Health. Diphtheria. Guide for health care professionals. 2024. https://www.ontario.ca/files/2024-02/moh-diphtheria-guide-health-care-professionals-en-2024-02-09.pdf

#### Q2
**Which of the following is the most appropriate treatment to arrange for him now?**

- A. Antitoxin now through public health  **(key)**
- B. Antitoxin once the culture confirms diphtheria
- C. dexamethasone 10 mg IV alone
- D. penicillin G 2 million units IV alone
- E. Tdap vaccine as the only treatment

*Explanation:* The Public Health Agency of Canada advises giving diphtheria antitoxin when diphtheria is suspected clinically, without waiting for laboratory confirmation, and it is available on an emergency basis through local public health authorities. Antitoxin neutralizes circulating toxin before it binds to the heart and nerves but cannot reverse toxin already bound, so waiting for culture lets the damage grow. An antibiotic such as penicillin is needed as well, but antibiotics alone do not neutralize toxin. A vaccine does not treat the current illness. Dexamethasone does not neutralize toxin.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Public Health Agency of Canada. Diphtheria. For health professionals. 2023. https://www.canada.ca/en/public-health/services/immunization/vaccine-preventable-diseases/diphtheria/health-professionals.html

#### Q3
*Update:* His stridor worsens and his O2 saturation falls to 89% on oxygen. He is sitting forward and anxious.

**Which of the following is the most appropriate airway plan for him now?**

- A. Bilevel ventilation by face mask
- B. Blind nasotracheal intubation
- C. Heliox by nonrebreather mask
- D. Intubation with a surgical airway ready  **(key)**
- E. Nebulized epinephrine and reassess

*Explanation:* Worsening stridor and falling saturation mean the membrane is closing his airway, and he needs a definitive airway now. The Canadian Airway Focus Group advises that an anticipated difficult airway be managed by the most experienced operator with a front of neck access plan ready, since a friable membrane can bleed or come loose and block the tube or trachea. Blind nasal intubation passes through the membrane without seeing it. Bilevel ventilation and heliox do not relieve a fixed obstruction. Nebulized epinephrine does not remove an adherent membrane.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021. https://doi.org/10.1007/s12630-021-02008-z

### sob-43: Breathless after her pump alarmed

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 41-year-old woman presents to the emergency department with 1 hour of rapidly worsening shortness of breath and lightheadedness. She has idiopathic pulmonary arterial hypertension treated with tadalafil, macitentan and a continuous IV epoprostenol infusion through a tunnelled central line. Her portable infusion pump stopped 90 minutes ago and she has no spare pump. She has had no fever, chest pain or leg swelling. She is anxious and speaks in short phrases. The JVP is at the angle of the jaw. There is a left parasternal heave and a loud pulmonic second sound. The chest is clear and her hands are cool. The line exit site is clean.

- Temperature: 36.8°C oral
- Pulse: 122/minute
- Resp.: 30/minute
- BP: 92/60 mmHg
- O2 sat: 88% on room air

#### Q1
**Which of the following is the most appropriate first step in her treatment?**

- A. CT pulmonary angiogram
- B. epoprostenol infusion  **(key)**
- C. norepinephrine infusion
- D. normal saline 1 L IV bolus
- E. Rapid sequence intubation

*Explanation:* Her symptoms began soon after a continuous epoprostenol infusion stopped. Epoprostenol has a half-life of a few minutes, so an interruption causes rebound pulmonary vasoconstriction and acute right ventricular failure. Wilcox and colleagues advise restarting the infusion at once, through a peripheral IV if her own line or pump cannot be used, while her pulmonary hypertension specialist is called. Norepinephrine may be needed if she becomes hypotensive, but it does not reverse the cause. A 1 L bolus adds preload to a right ventricle that is already failing. CT delays the one treatment that reverses the crisis, and intubation can precipitate collapse in right ventricular failure.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Wilcox SR, Kabrhel C, Channick RN. Pulmonary hypertension and right ventricular failure in emergency medicine. Ann Emerg Med. 2015. https://pubmed.ncbi.nlm.nih.gov/26342901/

#### Q2
*Update:* Epoprostenol is restarted on a hospital pump through a peripheral IV. Arrival blood shows lactate 4.6 mmol/L, high sensitivity troponin I 60 ng/L and BNP 2400 ng/L. Oxygen at 3 L/minute by nasal prongs raises her O2 saturation to 93%.

**Which of the following findings best shows that her right heart failure was causing inadequate tissue perfusion?**

- A. BNP of 2400 ng/L
- B. Lactate of 4.6 mmol/L  **(key)**
- C. O2 sat of 88% on room air
- D. Respiratory rate of 30/minute
- E. Troponin I of 60 ng/L

*Explanation:* A lactate of 4.6 mmol/L shows that her tissues were not receiving enough oxygen, even though her systolic pressure was above 90 mmHg. Wilcox and colleagues use the lactate, with blood pressure, urine output and saturation, to follow the response to each treatment. The BNP reflects stretch of the right ventricle and is often high at baseline in pulmonary arterial hypertension, so on its own it does not show hypoperfusion. The troponin signals strain or ischemia of the right ventricle, not the adequacy of flow to the tissues. Her saturation and respiratory rate describe gas exchange and work of breathing, and oxygen has already corrected the saturation.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Wilcox SR, Kabrhel C, Channick RN. Pulmonary hypertension and right ventricular failure in emergency medicine. Ann Emerg Med. 2015. https://pubmed.ncbi.nlm.nih.gov/26342901/

#### Q3
*Update:* Over the next hour her breathing eases and her BP rises to 104/68 mmHg. Her pulse is 108/minute and she has new flushing and a headache.

**Which of the following are appropriate now that her epoprostenol infusion is running again?**

Select 2.

- A. Call her pulmonary hypertension specialist  **(key)**
- B. Continue her usual tadalafil  **(key)**
- C. Halve the epoprostenol dose
- D. Hold macitentan until she stabilizes
- E. metoprolol 5 mg IV
- F. Stop the epoprostenol infusion

*Explanation:* Her pulmonary hypertension specialist should be called early to guide care, and her oral pulmonary vasodilators are continued, because withdrawal of any of them can provoke the same crisis. Wilcox and colleagues advise that the emergency team not stop or reduce epoprostenol, even for side effects such as flushing or headache, and contact the prescriber instead. Halving or stopping the dose risks the rebound that brought her in. Macitentan is continued unless her specialist changes it. Beta blockers such as metoprolol can further impair a failing right ventricle, and her tachycardia is compensatory.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Wilcox SR, Kabrhel C, Channick RN. Pulmonary hypertension and right ventricular failure in emergency medicine. Ann Emerg Med. 2015. https://pubmed.ncbi.nlm.nih.gov/26342901/

### sob-44: Drowsy and breathing slowly

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 67-year-old woman is brought to the emergency department by her husband because she has become drowsy and weak and is breathing slowly. For constipation she takes magnesium hydroxide tablets most days, and over the last 2 days she drank 3 bottles of magnesium citrate. She has stage 4 chronic kidney disease, with a creatinine of 240 umol/L last month. She takes no opioids, benzodiazepines or other sedatives. She is drowsy but opens her eyes to voice. Her face is flushed. Her pupils are 4 mm and reactive. Knee and ankle reflexes are absent. Her chest is clear.

- Temperature: 36.2°C oral
- Pulse: 52/minute
- Resp.: 8/minute
- BP: 86/50 mmHg
- O2 sat: 93% on room air

#### Q1
**Which of the following findings most clearly signals impending respiratory failure in this patient?**

- A. Absent knee and ankle reflexes
- B. Flushed skin of the face
- C. Oxygen saturation of 93%
- D. Pulse of 52/minute
- E. Slow breathing with drowsiness  **(key)**

*Explanation:* A respiratory rate of 8/minute with drowsiness shows that her ventilation is failing, and her PCO2 is likely rising even though her saturation is 93% on room air. Saturation measures oxygenation, not ventilation, and can look acceptable while carbon dioxide builds up. Depressed reflexes appear at lower magnesium levels than slow breathing, so they are an earlier and less urgent sign. Flushing and a slow pulse reflect effects on blood vessels and the heart rather than the state of her breathing.

*Key feature:* Shortness of breath 4. Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early.

*Source:* Aal-Hamad AH, Al-Alawi AM, Kashoub MS, Falhammar H. Hypermagnesemia in clinical practice. Medicina (Kaunas). 2023. https://doi.org/10.3390/medicina59071190

#### Q2
*Update:* Arterial gas on room air: pH 7.24, PaCO2 62 mmHg. Magnesium 5.6 mmol/L, calcium 2.12 mmol/L, potassium 5.1 mmol/L, creatinine 262 umol/L, glucose 6.4 mmol/L.

**Which of the following is the most likely cause of her hypoventilation?**

- A. Guillain-Barré syndrome
- B. Hidden opioid toxicity
- C. Hypercalcemia from kidney disease
- D. Hypermagnesemia from laxatives  **(key)**
- E. Uremic encephalopathy

*Explanation:* A magnesium of 5.6 mmol/L follows large doses of magnesium laxatives in a woman whose kidneys cannot excrete them, and hypermagnesemia causes drowsiness, lost reflexes, a slow pulse, low BP and slow breathing. Her calcium of 2.12 mmol/L is normal, not high. Her creatinine of 262 umol/L is close to her baseline of 240 umol/L, which does not explain an acute change. Reactive 4 mm pupils and no opioid use argue against opioid toxicity. Guillain-Barré syndrome does not cause drowsiness.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Aal-Hamad AH, Al-Alawi AM, Kashoub MS, Falhammar H. Hypermagnesemia in clinical practice. Medicina (Kaunas). 2023. https://doi.org/10.3390/medicina59071190

#### Q3
**Which of the following is the most appropriate first treatment for this patient?**

- A. calcium gluconate 1 g IV  **(key)**
- B. flumazenil 0.2 mg IV
- C. furosemide 80 mg IV
- D. naloxone 0.4 mg IV
- E. sodium bicarbonate 50 mmol IV

*Explanation:* Calcium antagonizes the neuromuscular and cardiac effects of magnesium, so IV calcium, about 1 g given over a few minutes, is the first treatment while hemodialysis is arranged, since her kidneys cannot clear the load. Furosemide relies on kidney function she lacks and acts too slowly. Naloxone and flumazenil reverse opioids and benzodiazepines, which she has not taken. Bicarbonate does not treat the cause of her hypoventilation. Ventilatory support may still be needed if calcium does not improve her breathing.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Aal-Hamad AH, Al-Alawi AM, Kashoub MS, Falhammar H. Hypermagnesemia in clinical practice. Medicina (Kaunas). 2023. https://doi.org/10.3390/medicina59071190

### sob-45: Fever and breathlessness after cleaning a shed

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department in southern Alberta in June. A 34-year-old man presents with 4 days of fever, muscle aches, headache and nausea, and 1 day of dry cough and rapidly increasing shortness of breath. Two weeks ago he spent a weekend clearing out an old grain shed full of mouse droppings, without a mask. He has no medical history. There are fine crackles in both lungs. The JVP is not raised. A chest radiograph shows bilateral interstitial edema with a normal heart size. Platelets are 58 x 10^9/L, hematocrit 0.54 and white cell count 15.2 x 10^9/L with immature forms.

- Temperature: 38.7°C oral
- Pulse: 124/minute
- Resp.: 32/minute
- BP: 98/60 mmHg
- O2 sat: 86% on room air

#### Q1
**Which of the following is the most likely diagnosis in this patient?**

- A. Hantavirus pulmonary syndrome  **(key)**
- B. Influenza pneumonia
- C. Legionella pneumonia
- D. Leptospirosis with lung bleeding
- E. Psittacosis from bird contact

*Explanation:* A febrile prodrome followed by rapidly developing pulmonary edema with a normal heart size, a low platelet count and a raised hematocrit, 2 weeks after sweeping out a building full of mouse droppings in western Canada, is hantavirus pulmonary syndrome. Thrombocytopenia with a raised hematocrit is highly sensitive and specific for it, and the median incubation is about 2 weeks. Influenza and Legionella pneumonia do not usually cause this pairing of blood findings. Leptospirosis follows contact with water or soil contaminated by animal urine. Psittacosis needs contact with birds.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Drebot MA, Jones S, Grolla A, et al. Hantavirus pulmonary syndrome in Canada. An overview of clinical and diagnostic features, epidemiology and prevention. Can Commun Dis Rep. 2015. https://doi.org/10.14745/ccdr.v41i06a02

#### Q2
*Update:* His BP falls to 84/52 mmHg and his O2 saturation is 88% on 15 L/minute by nonrebreather mask.

**Which of the following is the most appropriate approach to supporting his circulation?**

- A. Crystalloid 30 mL/kg IV bolus
- B. furosemide 80 mg IV bolus
- C. oseltamivir 75 mg PO twice daily
- D. ribavirin IV loading dose
- E. Small fluid boluses and a vasopressor  **(key)**

*Explanation:* Hantavirus pulmonary syndrome makes the pulmonary capillaries leak, so large volumes of fluid pour into the lungs and worsen hypoxemia. Management depends on careful fluid administration with ventilatory support, and a vasopressor supports BP without flooding the lungs. A 30 mL/kg bolus is the sepsis approach and fits poorly here. Furosemide lowers an already falling BP in a man who is not volume overloaded. There is no proven antiviral therapy, so ribavirin is not a treatment. Oseltamivir treats influenza, which does not explain his findings.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Drebot MA, Jones S, Grolla A, et al. Hantavirus pulmonary syndrome in Canada. An overview of clinical and diagnostic features, epidemiology and prevention. Can Commun Dis Rep. 2015. https://doi.org/10.14745/ccdr.v41i06a02

#### Q3
*Update:* Despite norepinephrine and intubation, his lactate rises to 6.2 mmol/L and his hands and feet are cool and mottled.

**Which of the following investigations best explains why his shock is getting worse?**

- A. Blood cultures from two sites
- B. CT pulmonary angiogram
- C. Focused cardiac ultrasound  **(key)**
- D. Hantavirus serology
- E. Serum procalcitonin

*Explanation:* Death in hantavirus pulmonary syndrome comes from respiratory failure, myocardial dysfunction and shock, and cool mottled extremities with a rising lactate despite a vasopressor suggest the heart is failing. A focused cardiac ultrasound shows poor ventricular function at the bedside and helps separate it from low filling, which guides the need for inotropes and urgent referral for ECMO. Serology confirms the diagnosis days later through the National Microbiology Laboratory. Blood cultures and procalcitonin look for a bacterial cause that his picture does not suggest. CT would mean moving an unstable patient.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Drebot MA, Jones S, Grolla A, et al. Hantavirus pulmonary syndrome in Canada. An overview of clinical and diagnostic features, epidemiology and prevention. Can Commun Dis Rep. 2015. https://doi.org/10.14745/ccdr.v41i06a02

### sob-46: Still febrile on amoxicillin at 4

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 4-year-old girl is brought to the emergency department by her mother with 7 days of fever and cough. Her family physician started high dose amoxicillin for pneumonia 4 days ago, and she has taken every dose. She is still febrile and eating little, and today she is breathing fast and says her right side hurts. She is fully immunized and otherwise well, with no history of choking. She is alert and talking, but lies still and splints her right chest. There is dullness to percussion and reduced breath sounds over the lower half of the right chest. The left chest is clear.

- Temperature: 39.1°C tympanic
- Pulse: 142/minute
- Resp.: 40/minute
- BP: 98/60 mmHg
- O2 sat: 91% on room air
- Weight: 17 kg

#### Q1
**Which of the following is the most likely reason this child has not improved on amoxicillin?**

- A. Empyema or parapneumonic effusion  **(key)**
- B. Foreign body aspiration
- C. Poor absorption of oral amoxicillin
- D. Resistant pneumococcal infection
- E. Viral lower respiratory infection

*Explanation:* Fever that persists after 4 days of an appropriate antibiotic, with dullness and reduced breath sounds over one lower chest, points to a complication, most often a parapneumonic effusion or empyema. The Canadian Paediatric Society advises a chest radiograph and clinical reassessment for empyema or another complication when a child with suspected bacterial pneumonia has not responded within 48 to 72 hours. Pneumococcal resistance to high dose amoxicillin is uncommon and would not explain the dullness. Oral amoxicillin is well absorbed and she has taken every dose. A viral infection does not produce a large dull area, and she has no history of choking to suggest a foreign body.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Le Saux N, Robinson JL. Canadian Paediatric Society. Uncomplicated pneumonia in healthy Canadian children and youth. Practice points for management. Paediatr Child Health. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4699530/

#### Q2
*Update:* Chest ultrasound shows a large right pleural effusion with septations, filling half the hemithorax.

**Which of the following is the most appropriate management for this child?**

- A. Continue amoxicillin at home
- B. IV antibiotics alone and reassess
- C. IV antibiotics and chest drainage  **(key)**
- D. Oral azithromycin added
- E. Repeated needle thoracentesis

*Explanation:* A large, septated effusion with tachypnea and hypoxemia needs IV antibiotics and drainage. The Canadian Paediatric Society recommends early drainage for a child in moderate to severe respiratory distress, by a small bore chest tube with intrapleural fibrinolytics or by thoracoscopic surgery, with IV cefotaxime or ceftriaxone as a usual empiric choice. Antibiotics alone leave a large septated collection undrained and prolong the illness. Repeated needle taps drain septated fluid poorly, and each one is distressing for a young child. Adding a macrolide does not drain infected fluid, and she cannot continue treatment at home with these findings.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Chibuk TK, Cohen E, Robinson JL, Mahant S, Hartfield DS. Canadian Paediatric Society. Paediatric complicated pneumonia. Diagnosis and management of empyema. Paediatr Child Health. 2011. https://pmc.ncbi.nlm.nih.gov/articles/PMC3200394/

#### Q3
**Which of the following is the most appropriate respiratory support while she waits for drainage?**

- A. High flow at 2 L/kg/minute
- B. Low flow oxygen by nasal prongs  **(key)**
- C. Noninvasive ventilation
- D. Rapid sequence intubation
- E. Room air and observation

*Explanation:* Her saturation of 91% on room air is at or below 92%, the level at which the BTS pneumonia guideline for children advises oxygen by nasal cannula, head box or face mask to keep saturations above 92%. She is alert and talking and not tiring, so low flow oxygen is enough for now. High flow and noninvasive ventilation are for children who stay hypoxemic or tire despite low flow oxygen. Intubation is not indicated in an alert child whose hypoxemia can be corrected simply. Leaving her on room air accepts a saturation below target.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Harris M, Clark J, Coote N, et al. British Thoracic Society guidelines for the management of community acquired pneumonia in children. Update 2011. Thorax. 2011.

### sob-47: Breathless with dark urine

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 24-year-old man presents to the emergency department with 1 day of shortness of breath on exertion, tiredness and low back pain. This morning his urine was dark brown. Two days ago he ate a large dish of fresh fava beans at a family dinner. He has no fever, cough or chest pain, takes no medications and has not travelled. He is pale and his sclerae are yellow. His chest is clear, the spleen is not palpable and there is no leg swelling. Labs: hemoglobin 64 g/L (148 g/L 1 year ago), MCV 96 fL, platelets 256 x 10^9/L, total bilirubin 86 umol/L, mostly unconjugated, LDH 1 380 U/L, CK 140 U/L, creatinine 92 umol/L. Urine dipstick shows 3+ blood, with no red cells on microscopy.

- Temperature: 37.3°C oral
- Pulse: 124/minute
- Resp.: 26/minute
- BP: 116/66 mmHg
- O2 sat: 98% on room air
- Weight: 74 kg

#### Q1
**Which of the following is the most likely cause of his shortness of breath?**

- A. Acute hemolytic anemia  **(key)**
- B. Acute viral hepatitis
- C. Community-acquired pneumonia
- D. Pulmonary embolism
- E. Rhabdomyolysis

*Explanation:* His hemoglobin has fallen from 148 to 64 g/L, with unconjugated jaundice, a high LDH and dark urine that is positive for blood without red cells, which means hemoglobin in the urine. Anemia this severe cuts the oxygen his blood can carry, so he is breathless and tachycardic although his saturation is 98%. Fava beans are a classic trigger of acute hemolysis in G6PD deficiency. Rhabdomyolysis also darkens the urine, but his CK is normal and it does not cause anemia. Hepatitis does not explain the fall in hemoglobin. A clear chest, no fever and a normal saturation argue against pneumonia and PE.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020. https://doi.org/10.1182/blood.2019000944

#### Q2
*Update:* The blood film shows bite cells and blister cells.

**Which of the following tests best separates an immune from a nonimmune cause of his illness?**

- A. Blood cultures, two sets
- B. Direct antiglobulin test  **(key)**
- C. Haptoglobin level
- D. Hemoglobin electrophoresis
- E. Serum ferritin level

*Explanation:* A direct antiglobulin test detects antibody or complement on the red cells. It is positive in autoimmune hemolytic anemia and negative in the oxidative hemolysis of G6PD deficiency, where bite and blister cells are typical. A low haptoglobin confirms hemolysis of any cause but does not separate the causes. Hemoglobin electrophoresis looks for sickle cell disease or thalassemia. Ferritin measures iron stores. Blood cultures look for infection, and he has no fever or source.

*Key feature:* Shortness of breath 2. Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia.

*Source:* Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020. https://doi.org/10.1182/blood.2019000944

#### Q3
*Update:* An hour later he is breathless at rest, his pulse is 134/minute and his hemoglobin is 57 g/L.

**Which of the following is the most appropriate treatment for him now?**

- A. folic acid 5 mg PO alone
- B. methylene blue 1 mg/kg IV
- C. prednisone 75 mg PO
- D. Red blood cell transfusion  **(key)**
- E. sodium bicarbonate IV infusion

*Explanation:* Breathlessness at rest, a rising pulse and a hemoglobin still falling, now 57 g/L, show that his anemia is severe and symptomatic, so he needs a red cell transfusion now. The hemolysis usually settles on its own once the trigger is gone and the oldest, most enzyme-deficient red cells have been destroyed, but he must be supported until then. Methylene blue needs NADPH, which G6PD-deficient cells cannot make, and it can itself cause hemolysis. His saturation of 98% also gives no reason to suspect methemoglobinemia. Prednisone treats autoimmune hemolysis, and his bite and blister cells point to oxidative damage from G6PD deficiency instead. Folic acid supports red cell production over weeks. Bicarbonate does not treat the anemia.

*Key feature:* Shortness of breath 3. Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation.

*Source:* Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020. https://doi.org/10.1182/blood.2019000944
