# s32: Decreased level of consciousness

32 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s32 loc-37 q3: mannitol 1 g/kg keyed, BTF no longer gives a dose. loc-26: bicarbonate dose from UK guideline.
- s32 loc-17 q3 PCC 25 units/kg (1450 units) vs fixed 2000 units common in Canada.
- review-extra.ts: loc-48 is a word-for-word copy of loc-26, and loc-49 of loc-37. Their stems would fail the bank's near-duplicate test (trigram overlap 1.0). They should not be added to the bank in this form. I fixed their clinical errors only so the file is not left teaching a wrong key. *(samps-s32-lensA.md)*
- loc-37 q3: mannitol 1 g/kg is keyed. The BTF 4th edition did not carry forward the 3rd edition mannitol dose as a recommendation, and hypertonic saline is an equal alternative. The key holds because saline is not offered, but a physician may want a Canadian trauma source. *(samps-s32-lensA.md)*
- loc-26 q1: GEMNet 2011 (UK) is the only guideline cited for bicarbonate dosing. No Canadian guideline exists. 100 mmol (1.6 mmol/kg) is within usual practice. *(samps-s32-lensA.md)*
- loc-17 q3: the keyed option "prothrombin complex concentrate and vitamin K" gives no dose while every distractor does. That is a Lens B specificity point, noted here only. *(samps-s32-lensA.md)*
- review-extra.ts: loc-48 is a word-for-word copy of loc-26, and loc-49 is a copy of loc-37 (same title and stem). They would fail the near-duplicate stem gate and should not join the bank. I fixed their errors only so the file does not teach a wrong key. *(samps-s32-lensB.md)*
- loc-17 q3: Canadian practice often gives PCC as a fixed dose (for example 2000 units of Octaplex or Beriplex) instead of 25 units/kg. The key follows the cited NCS weight-and-INR dosing. A physician may prefer a fixed-dose option or a Canadian source. *(samps-s32-lensB.md)*
- Lower-priority cueing notes, not changed: in loc-42 q2 and loc-46 q3 (menus), the non-drug keyed options are the longest options. The menu gate passes. In loc-19 q4, loc-26 q1, loc-38 q3, loc-44 q3 and loc-47 q3, the key is 1.4 times the mean distractor, which is under the 1.5 limit. *(samps-s32-lensB.md)*
- Key feature mapping that is loose but was left as written: loc-18 q3, loc-30 q3, loc-31 q3 and loc-41 q4 are treatment or safeguarding questions tagged with KF 1 (differential). *(samps-s32-lensB.md)*
- sob-37: near duplicate of loc-25 in scenario and teaching points (see overlap). Recommend a rebuild around a different acidosis cause of dyspnea (for example salicylate or DKA with Kussmaul breathing), or dropping it. *(samps-s51-lensB.md)*
- sob-33 q2 and q3: same teaching point as loc-38 q1 and q2. Recommend refocusing sob-33 on the airway and burn items and dropping or rebuilding the cyanide antidote question. *(samps-s51-lensB.md)*
- tox-28 versus s32 loc-42. The barn organophosphate case exists twice in the bank with the same setting, the same interval, the same findings and the same two teaching points. A reviewer cannot fix this by editing an explanation. Rewrite or drop one. *(samps-s53-lensB.md)*
- tox-39 versus s32 loc-44, and tox-21 versus s32 loc-25, for the same reason at slightly lower severity. *(samps-s53-lensB.md)*
- loc-22 q1. The WHO pocket book dose is 5 mL/kg of dextrose 10%. A 2021 WHO Bulletin exchange proposed 2 mL/kg, but that proposal was not adopted. The key uses 5 mL/kg. *(samps-textbooks-s32-s46-s49.md)*
- loc-25 q3. The AACT methanol guideline dates from 2002. It names folinic acid, so the explanation now says folinic acid, not folic acid. *(samps-textbooks-s32-s46-s49.md)*
- Goldfrank's chapter numbers. Four chapters are cited by title without a number because the full 11th edition table of contents could not be opened: Antidiabetics and Hypoglycemics/Antiglycemics, Antiepileptics, Antidotes in Depth: L-Carnitine, and Serotonin Reuptake Inhibitors and Atypical Antidepressants. Chapter 76, Ethanol, comes only from the publisher's chapter address, not a table of contents. *(samps-textbooks-s32-s46-s49.md)*
- The Emergency Care BC TCA summary was last reviewed in 2018. It is the Canadian source already used for loc-26 q1 in commit da27929. *(samps-textbooks-s32-s46-s49.md)*
- Some distractor reasons that the new source does not address were kept, because they are standard teaching and do not conflict with the source. Examples are glucagon and hydrocortisone in loc-22 q3, and transient global amnesia in seizures-40 q1. *(samps-textbooks-s32-s46-s49.md)*
- loc-37. BTF 4th edition has no mannitol dose. The dose now comes from ENLS v6.0, a Neurocritical Care Society protocol based on consensus, not a graded guideline. No Canadian guideline gives this dose. *(sourcing-batch1.md)*
- loc-26. No Canadian guideline gives a bicarbonate dose for tricyclic toxicity. The Emergency Care BC summary is a clinical summary, not a formal guideline. The dose and pH target are consensus figures, backed by a 2016 literature review and the AHA 2023 update. *(sourcing-batch1.md)*

Review reports: docs/reviews/writer-s32.md, samps-s32-lensA.md, samps-s32-lensB.md

## SAMPs

### loc-16: Muddled and unsteady for three days

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department. A 48-year-old man is brought in by his wife, who says he has been increasingly muddled and unsteady on his feet for 3 days. He drinks about 20 standard drinks a day and has eaten little for 2 weeks since losing his job. He vomited repeatedly last week. He takes no medications. He smells of alcohol. He opens his eyes to voice, is confused and obeys commands. He has horizontal nystagmus, weakness of both lateral rectus muscles and a wide-based gait. Capillary glucose is 4.9 mmol/L. Serum ethanol is 9 mmol/L.

- Temperature: 36.4°C oral
- Pulse: 104/minute
- Resp.: 18/minute
- BP: 132/84 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is the correct Glasgow Coma Scale score for this patient, with its components?**

- A. GCS 12 (E3 V3 M6)
- B. GCS 13 (E3 V4 M6)  **(key)**
- C. GCS 13 (E4 V3 M6)
- D. GCS 14 (E3 V5 M6)
- E. GCS 14 (E4 V4 M6)

*Explanation:* He opens his eyes to voice (E3), is confused (V4) and obeys commands (M6), so his GCS is 13, recorded as E3 V4 M6. E4 would require spontaneous eye opening. V3 is for inappropriate words rather than confused speech, and V5 requires orientation. Recording each component, not only the total, shows later examiners which response has changed.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q2
**Which of the following findings argues most strongly against alcohol intoxication alone as the cause of his presentation?**

- A. Bilateral lateral rectus weakness  **(key)**
- B. Heart rate of 104/minute
- C. Horizontal nystagmus on gaze
- D. Odour of alcohol on his breath
- E. Wide-based unsteady gait

*Explanation:* Ophthalmoplegia, here weakness of both lateral rectus muscles, is not a feature of simple intoxication and points to Wernicke encephalopathy. Nystagmus and a wide-based gait both occur in acute intoxication, so they do not separate the two. Tachycardia is common with intoxication and early withdrawal. The odour of alcohol shows only that he has been drinking, and his serum ethanol of 9 mmol/L is too low to explain his state.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. European Journal of Neurology 2010. https://doi.org/10.1111/j.1468-1331.2010.03153.x

#### Q3
**Which of the following is the most appropriate initial thiamine regimen for this patient?**

- A. thiamine 100 mg IM once
- B. thiamine 100 mg IV daily for 3 days
- C. thiamine 50 mg IV once daily
- D. thiamine 200 mg IV three times daily  **(key)**
- E. thiamine 100 mg PO three times daily

*Explanation:* He has all four Caine criteria (poor diet, eye signs, cerebellar signs and altered mental state), and two are enough to diagnose Wernicke encephalopathy. The EFNS guideline recommends thiamine 200 mg IV three times daily, given before any carbohydrate, until symptoms stop improving. Oral thiamine is poorly absorbed in heavy alcohol use and after repeated vomiting. A single IM dose or 50 to 100 mg IV daily is too little to treat established encephalopathy.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. European Journal of Neurology 2010. https://doi.org/10.1111/j.1468-1331.2010.03153.x

#### Q4
**Which of the following items of history from his wife would most change your immediate investigation plan?**

- A. Age he began drinking heavily
- B. Fall with a head strike this week  **(key)**
- C. Number of prior detox admissions
- D. Previous withdrawal seizures
- E. Whether he smokes tobacco

*Explanation:* A recent fall with a head strike in a heavy drinker with a decreased level of consciousness calls for CT head to exclude a subdural hematoma, because alcohol use and brain atrophy raise the risk. His drinking history, detox admissions and smoking do not change the tests needed now. A history of withdrawal seizures guides benzodiazepine treatment and monitoring, but it does not add an investigation. Only the fall would move imaging to the front of the plan.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. European Journal of Neurology 2010. https://doi.org/10.1111/j.1468-1331.2010.03153.x

### loc-17: Sleepy two days after a slip

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 83-year-old woman is brought to the emergency department by ambulance from her retirement residence. Staff say she slipped in the dining room 2 days ago and struck her forehead but seemed well afterward. Since this morning she has been sleepy and has not eaten. She has atrial fibrillation treated with warfarin, hypertension and mild cognitive impairment. Staff say she normally walks with a walker, chats with other residents and knows the date. She opens her eyes to voice, says inappropriate words and localizes to pressure. There is a healing bruise on her forehead. Her left arm drifts downward. Capillary glucose is 6.8 mmol/L.

- Temperature: 36.8°C oral
- Pulse: 78/minute irregular
- Resp.: 16/minute
- BP: 168/92 mmHg
- O2 sat: 95% on room air
- Weight: 58 kg

#### Q1
**Which of the following is the correct Glasgow Coma Scale score for this patient, with its components?**

- A. GCS 9 (E2 V3 M4)
- B. GCS 10 (E2 V3 M5)
- C. GCS 11 (E3 V3 M5)  **(key)**
- D. GCS 12 (E3 V4 M5)
- E. GCS 13 (E3 V4 M6)

*Explanation:* She opens her eyes to voice (E3), says inappropriate words (V3) and localizes to pressure (M5), for a GCS of 11. E2 would mean eye opening only to pressure. V4 is confused conversation, which is more than inappropriate words. M6 requires obeying commands, and M4 is normal flexion or withdrawal rather than localizing.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q2
**Which of the following is the most appropriate imaging decision for this patient?**

- A. Apply the Canadian CT Head Rule first
- B. CT head without contrast now  **(key)**
- C. MRI brain within 24 hours
- D. Observe and repeat GCS in 4 hours
- E. Skull radiographs now

*Explanation:* She takes warfarin, has a GCS of 11 and a new left arm drift, so she needs CT head now to exclude intracranial bleeding. The Canadian CT Head Rule applies only to patients with a GCS of 13 to 15 and excluded patients on oral anticoagulants or with an acute focal deficit, so it cannot be used to decide on imaging here. Observation delays diagnosis of a treatable hematoma. MRI is slower and less available, and skull radiographs cannot show a bleed.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet 2001. https://doi.org/10.1016/S0140-6736(00)04561-X

#### Q3
*Update:* CT shows an acute on chronic right subdural hematoma with 6 mm of midline shift. INR is 3.1. Neurosurgery has been called.

**Which of the following is the most appropriate treatment for her anticoagulation?**

- A. fresh frozen plasma 15 mL/kg IV
- B. prothrombin complex concentrate 25 units/kg IV  **(key)**
- C. recombinant factor VIIa 40 mcg/kg IV
- D. tranexamic acid 1 g IV over 10 minutes
- E. vitamin K 10 mg IV as the sole agent

*Explanation:* For intracranial hemorrhage on warfarin, the guideline recommends 4-factor prothrombin complex concentrate dosed by INR and weight, given with vitamin K 10 mg IV. With an INR of 3.1 the dose is 25 units/kg, about 1450 units for her 58 kg. Vitamin K alone takes many hours to correct the INR, so it is given with the concentrate rather than on its own. Fresh frozen plasma corrects the INR more slowly and needs a large volume. Recombinant factor VIIa is not recommended for warfarin reversal, and tranexamic acid does not reverse warfarin.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Frontera JA, Lewin JJ, Rabinstein AA, et al. Guideline for reversal of antithrombotics in intracranial hemorrhage. A statement for healthcare professionals from the Neurocritical Care Society and Society of Critical Care Medicine. Neurocritical Care 2016. https://doi.org/10.1007/s12028-015-0222-x

#### Q4
*Update:* Two hours later, while she waits for surgery, the nurse reports that she seems less alert.

**Which of the following is the best way to record her level of consciousness for the neurosurgical team?**

- A. AVPU category with the time
- B. GCS components and pupil reactivity  **(key)**
- C. GCS total with the time
- D. Nursing note stating less alert
- E. Richmond Agitation-Sedation Scale

*Explanation:* Each GCS component with the pupil response, recorded with the time, gives the team a trend they can compare and flags a new unreactive pupil early. The GCS total hides which response has changed. AVPU is too coarse to show a fall from voice to pressure within the same category. A note that she is less alert is not reproducible, and the Richmond scale measures sedation and agitation rather than coma depth.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1. The GCS-Pupils score. Journal of Neurosurgery 2018. https://doi.org/10.3171/2017.12.JNS172780

### loc-18: A sleepy infant after a fall

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 4-month-old boy is brought to the emergency department at 2200 by his mother's partner, who says the baby has been sleepy since the afternoon and has vomited three times. He says the baby rolled off a couch onto a carpeted floor yesterday. The baby was born at term and has been well. By phone, his mother says he is not yet rolling over. He is lethargic and does not fix on faces. His anterior fontanelle is full. There is a 1 cm bruise on the left upper arm. Capillary glucose is 5.2 mmol/L.

- Temperature: 36.9°C rectal
- Pulse: 112/minute
- Resp.: 30/minute
- BP: 96/58 mmHg
- O2 sat: 97% on room air
- Weight: 6.4 kg

#### Q1
**Which of the following details from the history most raises concern about the cause of his presentation?**

- A. Absence of prior illness
- B. Fall onto a carpeted floor
- C. History given by a non-parent
- D. Inability yet to roll over  **(key)**
- E. Onset of vomiting today

*Explanation:* A baby who cannot yet roll over could not have rolled off a couch, so the history does not fit his development. A mechanism that does not match the child's abilities is a key warning sign of abusive head trauma. A fall onto carpet is low energy and would not explain a full fontanelle. Vomiting is a symptom, not a discrepancy, and a history from a parent's partner is not suspicious in itself. His lack of prior illness does not point to any cause.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Narang SK, Fingarson A, Lukefahr J, Council on Child Abuse and Neglect, American Academy of Pediatrics. Abusive head trauma in infants and children. Pediatrics 2020. https://doi.org/10.1542/peds.2020-0203

#### Q2
**Which of the following investigations should be done first for this infant?**

- A. CT head without contrast  **(key)**
- B. Lumbar puncture for cell count
- C. MRI brain with contrast
- D. Skeletal survey
- E. Urine toxicology screen

*Explanation:* A lethargic infant with a full fontanelle and vomiting needs CT head first to find intracranial bleeding that may need urgent neurosurgery. The skeletal survey is part of the workup but does not change immediate management. Lumbar puncture is unsafe while raised intracranial pressure is possible, and he is afebrile. MRI adds detail later but is slower and needs sedation. Toxicology does not explain a full fontanelle.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Narang SK, Fingarson A, Lukefahr J, Council on Child Abuse and Neglect, American Academy of Pediatrics. Abusive head trauma in infants and children. Pediatrics 2020. https://doi.org/10.1542/peds.2020-0203

#### Q3
*Update:* CT shows bilateral subdural hematomas of different densities. Neurosurgery will manage them without surgery for now.

**Which of the following additional steps are most appropriate for this infant?**

Select 3.

- A. Confront the partner about abuse
- B. Dilated retinal examination  **(key)**
- C. Discharge after neurosurgical review
- D. Outpatient EEG in 2 weeks
- E. Report to child protection services  **(key)**
- F. Skeletal survey  **(key)**
- G. Wait for MRI before reporting

*Explanation:* Subdural hematomas of different ages in an infant with an inconsistent history call for a skeletal survey, a dilated retinal examination for hemorrhages, and a report to child protection services. The duty to report arises from reasonable suspicion, so the report does not wait for MRI or for certainty. Confronting the partner is not the physician's role and may put the child at risk. He cannot be discharged, and an outpatient EEG does not address the immediate concerns.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Narang SK, Fingarson A, Lukefahr J, Council on Child Abuse and Neglect, American Academy of Pediatrics. Abusive head trauma in infants and children. Pediatrics 2020. https://doi.org/10.1542/peds.2020-0203

#### Q4
**Which of the following is the best method to document his level of consciousness for serial reassessment?**

- A. Adult GCS verbal scale
- B. AVPU category alone
- C. Brief note that he is sleepy
- D. Pediatric GCS with components  **(key)**
- E. Pupil size alone

*Explanation:* A preverbal infant needs the pediatric GCS, which scores the verbal response by cooing, crying and irritability, recorded as components so trends are clear. The adult verbal scale depends on words and orientation that a 4-month-old cannot give. AVPU is too coarse to show a gradual decline. A note that he is sleepy cannot be compared between examiners, and pupil size is one sign rather than a measure of consciousness.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

### loc-19: Restless and breathing fast

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 19-year-old woman is brought to the emergency department by her roommate, who found her confused and vomiting in their university residence. An empty bottle of 325 mg acetylsalicylic acid tablets and a note were beside her. The roommate last saw her well 6 hours earlier. She has no medical history. She says her ears are ringing. She opens her eyes to voice, is disoriented and obeys commands. She is breathing deeply. Laboratory results: venous pH 7.38, PCO2 21 mmHg, bicarbonate 12 mmol/L, sodium 140 mmol/L, chloride 104 mmol/L, glucose 5.4 mmol/L, creatinine 72 umol/L, salicylate 5.1 mmol/L.

- Temperature: 37.9°C oral
- Pulse: 118/minute
- Resp.: 32/minute
- BP: 112/68 mmHg
- O2 sat: 98% on room air
- Weight: 60 kg

#### Q1
**Which of the following best describes her acid-base status on these results?**

- A. Compensated respiratory acidosis
- B. Metabolic acidosis with respiratory alkalosis  **(key)**
- C. Metabolic alkalosis with respiratory acidosis
- D. Normal anion gap metabolic acidosis
- E. Pure respiratory alkalosis

*Explanation:* Her anion gap is 140 minus (104 plus 12), which is 24 mmol/L, so she has an anion gap metabolic acidosis. Winter's formula predicts a PCO2 of 1.5 x 12 plus 8, which is 26 plus or minus 2 mmHg. Her PCO2 of 21 mmHg is lower, so there is also a primary respiratory alkalosis, the typical mixed picture of salicylate poisoning. The near normal pH of 7.38 hides both disorders. The gap is raised, so this is not a normal anion gap acidosis.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Palmer BF, Clegg DJ. Salicylate toxicity. New England Journal of Medicine 2020. https://doi.org/10.1056/NEJMra2010852

#### Q2
**Which of the following findings on its own is an indication for extracorporeal treatment in this patient?**

- A. Altered level of consciousness  **(key)**
- B. Anion gap of 24 mmol/L
- C. Salicylate level of 5.1 mmol/L
- D. Temperature of 37.9°C
- E. Tinnitus on arrival

*Explanation:* Her altered mental status is on its own an indication, because the EXTRIP workgroup recommends extracorporeal treatment for salicylate poisoning with altered mental status at any level, as it reflects salicylate in the brain. Her level of 5.1 mmol/L is below the level thresholds of 6.5 mmol/L and 7.2 mmol/L. An anion gap of 24 mmol/L is not a stated criterion. Tinnitus and a low-grade temperature are common features of salicylate toxicity and do not on their own call for dialysis.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Juurlink DN, Gosselin S, Kielstein JT, et al. Extracorporeal treatment for salicylate poisoning. Systematic review and recommendations from the EXTRIP workgroup. Annals of Emergency Medicine 2015. https://doi.org/10.1016/j.annemergmed.2015.03.031

#### Q3
*Update:* The nephrologist is on the way. She becomes drowsier, and her respiratory rate is 36/minute. The resident suggests intubation.

**Which of the following is the most dangerous consequence of intubating her and ventilating at usual settings?**

- A. Aspiration during laryngoscopy
- B. Hyperkalemia from succinylcholine
- C. Pneumothorax from high pressures
- D. Rapid rise in PCO2 and acidemia  **(key)**
- E. Ventilator associated pneumonia

*Explanation:* She keeps her pH near normal by breathing fast and deep, with a PCO2 of 21 mmHg. Apnea during intubation and usual ventilator settings let the PCO2 rise, the blood becomes more acidic, and more salicylate moves into the brain, which can cause sudden deterioration and death. Aspiration is a general intubation risk but is less specific here. She has no reason for hyperkalemia with succinylcholine. Pneumothorax and ventilator associated pneumonia are later, less likely harms.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Palmer BF, Clegg DJ. Salicylate toxicity. New England Journal of Medicine 2020. https://doi.org/10.1056/NEJMra2010852

#### Q4
**Which of the following is the most appropriate treatment while hemodialysis is arranged?**

- A. acetazolamide 500 mg IV
- B. furosemide 40 mg IV
- C. naloxone 0.4 mg IV
- D. sodium bicarbonate 60 mmol IV  **(key)**
- E. whole bowel irrigation

*Explanation:* IV sodium bicarbonate, given as a bolus of 1 mmol/kg (60 mmol for her 60 kg) and then an infusion, alkalinizes the serum and urine, which keeps salicylate ionized, limits its entry into the brain and increases its excretion. Acetazolamide alkalinizes the urine but causes a metabolic acidosis that drives salicylate into tissues. Forced diuresis with furosemide does not add clearance and risks fluid overload. Naloxone has no role because she has no opioid features. Whole bowel irrigation is not routine in salicylate poisoning and is unsafe in a drowsy patient who is vomiting.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Palmer BF, Clegg DJ. Salicylate toxicity. New England Journal of Medicine 2020. https://doi.org/10.1056/NEJMra2010852

### loc-20: Harder to wake after three days of cough

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 71-year-old man is brought to the emergency department by ambulance with 3 days of increased cough and dyspnea. His wife says he became confused and hard to wake over the last 2 hours. He has severe COPD, uses home oxygen at 2 L/minute and takes only tiotropium and salbutamol inhalers. Paramedics placed him on a non-rebreather mask at 15 L/minute. He opens his eyes to voice, says inappropriate words and localizes to pressure. He protects his airway. He has asterixis. Breath sounds are quiet with scattered wheezes. Venous blood gas: pH 7.19, PCO2 92 mmHg, bicarbonate 34 mmol/L. Capillary glucose is 7.4 mmol/L.

- Temperature: 37.2°C oral
- Pulse: 108/minute
- Resp.: 12/minute
- BP: 154/88 mmHg
- O2 sat: 99% on 15 L/minute by non-rebreather mask

#### Q1
**Which of the following is the most likely cause of his decreased level of consciousness?**

- A. Carbon monoxide poisoning
- B. Hepatic encephalopathy
- C. Hypercapnic respiratory failure  **(key)**
- D. Hypoxic ischemic brain injury
- E. Opioid analgesic toxicity

*Explanation:* He has an acute respiratory acidosis with a pH of 7.19 and PCO2 of 92 mmHg on top of chronic retention, shown by the bicarbonate of 34 mmol/L. High-flow oxygen from the paramedics likely worsened the hypercapnia in severe COPD. Asterixis occurs with hypercapnia as well as liver failure, and he has no history of liver disease. His saturation of 99% argues against hypoxic injury. His only medications are inhalers, so opioid toxicity is unlikely, and nothing suggests a carbon monoxide source.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Austin MA, Wills KE, Blizzard L, et al. Effect of high flow oxygen on mortality in chronic obstructive pulmonary disease patients in prehospital setting. Randomised controlled trial. BMJ 2010. https://doi.org/10.1136/bmj.c5462

#### Q2
**Which of the following oxygen saturation targets is most appropriate for him now?**

- A. 82 to 85%
- B. 88 to 92%  **(key)**
- C. 92 to 96%
- D. 94 to 98%
- E. 98 to 100%

*Explanation:* In a randomized trial of prehospital COPD exacerbations, oxygen titrated to a saturation of 88 to 92% reduced mortality compared with high-flow oxygen. His saturation of 99% on 15 L/minute is higher than needed and adds to his hypercapnia. Targets of 92 to 96% or higher suit most patients without chronic hypercapnia. A target of 82 to 85% risks tissue hypoxia without further benefit.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Austin MA, Wills KE, Blizzard L, et al. Effect of high flow oxygen on mortality in chronic obstructive pulmonary disease patients in prehospital setting. Randomised controlled trial. BMJ 2010. https://doi.org/10.1136/bmj.c5462

#### Q3
*Update:* Oxygen is titrated down to 1 L/minute. He still opens his eyes to voice.

**Which of the following is the most appropriate ventilatory support now?**

- A. Continuous positive airway pressure
- B. Heliox by face mask
- C. High-flow nasal oxygen at 60 L/minute
- D. Immediate intubation and ventilation
- E. Noninvasive bilevel ventilation  **(key)**

*Explanation:* His pH of 7.19 from acute hypercapnia in COPD meets the ERS/ATS recommendation for bilevel noninvasive ventilation, which applies at a pH of 7.35 or lower. He protects his airway, and hypercapnic drowsiness often improves quickly on bilevel support if he is watched closely. Continuous positive airway pressure gives no inspiratory support to clear carbon dioxide. High-flow nasal oxygen and heliox are not first-line in this setting. Intubation is kept for failure of a monitored bilevel trial or loss of airway protection.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. European Respiratory Journal 2017. https://doi.org/10.1183/13993003.02426-2016

#### Q4
**Which of the following findings at reassessment in 1 hour would best show that he is improving?**

- A. Heart rate falling to 96/minute
- B. Oxygen saturation of 92%
- C. Quieter chest on auscultation
- D. Respiratory rate of 8/minute
- E. Rising GCS from 11 to 14  **(key)**

*Explanation:* His GCS on arrival was 11 (E3 V3 M5), and a rise to 14 shows that his hypercapnic encephalopathy is reversing on bilevel support. A falling respiratory rate to 8/minute may mean worsening narcosis, not recovery. A quieter chest can mean less air movement. A saturation of 92% is within target but says nothing about carbon dioxide. A lower heart rate is nonspecific. A repeat blood gas and serial GCS components are the best trend.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. European Respiratory Journal 2017. https://doi.org/10.1183/13993003.02426-2016

### loc-21: Found sweaty in bed

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 34-year-old woman is brought to the emergency department by ambulance. Her partner found her sweaty and unresponsive in bed at 0600. She has type 1 diabetes treated with insulin glargine and insulin lispro. Her partner says she drank 5 beers at a hockey game last night. Paramedics could not obtain IV access. She opens her eyes to pressure, moans and withdraws from pressure. She is diaphoretic. There is no sign of head injury. Capillary glucose is 1.7 mmol/L. Two nurses cannot place an IV.

- Temperature: 36.1°C oral
- Pulse: 112/minute
- Resp.: 18/minute
- BP: 128/76 mmHg
- O2 sat: 97% on room air
- Weight: 64 kg

#### Q1
**Which of the following is the most appropriate immediate treatment for this patient?**

- A. glucagon 1 mg IM  **(key)**
- B. glucose gel 15 g buccal
- C. hydrocortisone 100 mg IM
- D. octreotide 50 mcg SC
- E. thiamine 100 mg IM

*Explanation:* Her glucose is 1.7 mmol/L, she cannot swallow safely, and neither the paramedics nor two nurses could place an IV. Diabetes Canada recommends glucagon 1 mg SC or IM, or 3 mg intranasal, for severe hypoglycemia in an unconscious person without IV access. It works less well after more than 2 drinks in the previous few hours, so her glucose is rechecked soon and access efforts continue. Glucose gel is unsafe because she cannot swallow and protect her airway. Octreotide treats sulfonylurea-induced insulin release, not injected insulin. Hydrocortisone and thiamine do not raise glucose promptly.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Lega IC, Yale JF, Chadha A, et al. Hypoglycemia in adults. Diabetes Canada Clinical Practice Guidelines. Canadian Journal of Diabetes 2023. https://doi.org/10.1016/j.jcjd.2023.08.003

#### Q2
**Which of the following is the correct Glasgow Coma Scale score on arrival, with its components?**

- A. GCS 7 (E2 V2 M3)
- B. GCS 8 (E2 V2 M4)  **(key)**
- C. GCS 9 (E2 V3 M4)
- D. GCS 9 (E3 V2 M4)
- E. GCS 10 (E2 V3 M5)

*Explanation:* She opens her eyes to pressure (E2), moans without words (V2) and withdraws from pressure (M4), for a GCS of 8. V3 would require recognizable but inappropriate words. E3 is eye opening to voice. M3 is abnormal flexion, and M5 is localizing, neither of which she shows. Recording the components makes her recovery after treatment easy to track.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q3
*Update:* Thirty minutes after glucagon, capillary glucose is 6.8 mmol/L. She now opens her eyes to voice but is confused and moves her right arm and leg less than her left.

**Which of the following is the most appropriate next step for this patient?**

- A. Electroencephalogram
- B. Noncontrast CT head  **(key)**
- C. Observe 1 hour for recovery
- D. Repeat glucagon 1 mg IM
- E. Serum ethanol level

*Explanation:* Her glucose is now normal, yet she remains confused with new right-sided weakness, so a structural cause such as stroke or hemorrhage must be excluded with CT head before blaming hypoglycemia or alcohol. Hypoglycemic hemiparesis is a diagnosis of exclusion. Waiting an hour delays diagnosis of a treatable lesion. More glucagon is not needed with a glucose of 6.8 mmol/L. An ethanol level would not explain a focal deficit, and EEG is not the first test.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Lega IC, Yale JF, Chadha A, et al. Hypoglycemia in adults. Diabetes Canada Clinical Practice Guidelines. Canadian Journal of Diabetes 2023. https://doi.org/10.1016/j.jcjd.2023.08.003

### loc-22: Hard to wake from a nap

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 3-year-old boy is brought to the emergency department by his mother at 2100 because he is hard to wake from a nap. His grandfather, who has type 2 diabetes, has been staying with the family this week. At 1500 the mother found an open pill organizer on the kitchen table. The boy has been well and takes no medications. He opens his eyes to voice, cries and localizes to pressure. He is pale and sweaty. There are no signs of injury. Capillary glucose is 1.8 mmol/L. An IV is in place.

- Temperature: 36.6°C axillary
- Pulse: 138/minute
- Resp.: 26/minute
- BP: 94/58 mmHg
- O2 sat: 98% on room air
- Weight: 15 kg

#### Q1
**Which of the following is the most appropriate initial treatment for this child?**

- A. dextrose 50% 30 mL IV
- B. dextrose 10% 15 mL IV
- C. dextrose 10% 75 mL IV  **(key)**
- D. glucagon 0.5 mg IM
- E. octreotide 15 mcg SC

*Explanation:* WHO advises 5 mL/kg of IV dextrose 10%, which is 0.5 g/kg, for hypoglycemia in a child. For 15 kg that is 75 mL, or 7.5 g. The 15 mL dose gives only 1.5 g, or 0.1 g/kg. Dextrose 50% is too concentrated for a small child's peripheral vein. Glucagon is not needed when IV access is in place. Octreotide is an adjunct for recurrent hypoglycemia, not the first treatment of a glucose of 1.8 mmol/L.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* World Health Organization. Pocket book of hospital care for children. Guidelines for the management of common childhood illnesses. 2nd edition. WHO. 2013. https://www.ncbi.nlm.nih.gov/books/NBK154447/

#### Q2
**Which of the following is the most important information to obtain from the grandfather now?**

- A. Date of his last clinic visit
- B. Duration of his diabetes
- C. His most recent HbA1c value
- D. Names of his diabetes medications  **(key)**
- E. Times he checks his glucose

*Explanation:* Knowing which diabetes drugs the child could have taken sets the expected duration of hypoglycemia and the treatment. A sulfonylurea can cause recurrent hypoglycemia for many hours and may need octreotide and admission, while metformin alone rarely causes hypoglycemia. The grandfather's HbA1c, clinic visits, glucose checks and years with diabetes do not change the child's management.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Bosse GM. Antidiabetics and hypoglycemics/antiglycemics. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter: Antidiabetics and Hypoglycemics/Antiglycemics. https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210272153

#### Q3
*Update:* After dextrose, his glucose rises to 6.2 mmol/L. At 2230 it is 2.6 mmol/L again. The grandfather takes gliclazide MR 60 mg daily.

**Which of the following is the most appropriate treatment for the recurrent hypoglycemia?**

- A. activated charcoal 15 g PO
- B. diazoxide 45 mg PO
- C. glucagon 0.5 mg IM
- D. hydrocortisone 30 mg IV
- E. octreotide 15 mcg SC  **(key)**

*Explanation:* Gliclazide stimulates insulin release, and each dose of dextrose triggers more insulin, so hypoglycemia recurs. Octreotide blocks insulin release and is the preferred treatment. The suggested pediatric dose is 1 to 1.5 mcg/kg, so 15 mcg SC is 1 mcg/kg for this child. Octreotide worked better than diazoxide in human studies. Glucagon gives at most a short rise. Hydrocortisone does not block insulin release. Charcoal is unlikely to help at least 7 hours after ingestion and is risky in a drowsy child.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clinical Toxicology 2012. https://doi.org/10.3109/15563650.2012.734626

#### Q4
**Which of the following is the most appropriate disposition for this child?**

- A. Discharge after 4 hours of normal glucose
- B. Discharge once he tolerates food
- C. Discharge with a home glucometer
- D. Observe in the ED for 6 hours
- E. Ward admission with glucose checks  **(key)**

*Explanation:* In reported children, sulfonylurea hypoglycemia began up to 16 hours after ingestion, and half had a recurrence even after octreotide. He has already needed octreotide for a recurrence. He needs admission with frequent glucose checks until he has been free of hypoglycemia off treatment. A 4 or 6 hour period of normal glucose is too short to exclude late recurrence. Eating does not prevent recurrence, and a home glucometer cannot replace monitored care.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clinical Toxicology 2012. https://doi.org/10.3109/15563650.2012.734626

### loc-23: Drowsy with a cough

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 69-year-old man is brought to the emergency department by his daughter because he has been increasingly drowsy since last night. He has had a productive cough and fever for 3 days. He has type 2 diabetes and hypertension and takes metformin, ramipril and hydrochlorothiazide. His daughter says he normally manages his own finances and drives. He opens his eyes to voice, is confused and localizes to pressure. His extremities are cool and mottled. There are crackles at the right lung base. Capillary glucose is 9.8 mmol/L. Lactate is 5.2 mmol/L.

- Temperature: 38.9°C oral
- Pulse: 124/minute
- Resp.: 30/minute
- BP: 78/42 mmHg
- O2 sat: 91% on room air
- Weight: 80 kg

#### Q1
**Which of the following is the most appropriate initial fluid resuscitation for this patient?**

- A. albumin 20% 100 mL IV
- B. crystalloid 2.4 L IV within 3 hours  **(key)**
- C. crystalloid 500 mL IV over 3 hours
- D. crystalloid 80 mL/hour IV
- E. hydroxyethyl starch 500 mL IV

*Explanation:* His mean arterial pressure is (78 plus 2 x 42) divided by 3, about 54 mmHg, and his lactate is 5.2 mmol/L, so he has sepsis-induced hypoperfusion. The Surviving Sepsis Campaign suggests at least 30 mL/kg of IV crystalloid within the first 3 hours, which is 30 x 80 = 2400 mL. A 500 mL bolus or a maintenance rate of 80 mL/hour is far too little. Starches are recommended against because they increase kidney injury. Albumin is not the initial fluid.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine 2021. https://doi.org/10.1097/CCM.0000000000005337

#### Q2
*Update:* After 2.4 L of crystalloid, his BP is 84/46 mmHg. He remains confused.

**Which of the following is the most appropriate next step for his blood pressure?**

- A. dobutamine infusion IV
- B. dopamine infusion IV
- C. norepinephrine infusion IV  **(key)**
- D. phenylephrine infusion IV
- E. vasopressin infusion IV

*Explanation:* His mean arterial pressure is (84 plus 2 x 46) divided by 3, about 59 mmHg, below the target of 65 mmHg after 30 mL/kg of fluid, so a vasopressor is needed. Norepinephrine is the recommended first-line agent. Vasopressin is added when norepinephrine alone is not enough, not started first. Dopamine causes more arrhythmias. Dobutamine is an inotrope for low cardiac output, and phenylephrine is not a first-line agent.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine 2021. https://doi.org/10.1097/CCM.0000000000005337

#### Q3
**Which of the following is the correct Glasgow Coma Scale score on arrival, with its components?**

- A. GCS 11 (E3 V3 M5)
- B. GCS 12 (E4 V3 M5)
- C. GCS 12 (E3 V4 M5)  **(key)**
- D. GCS 13 (E3 V4 M6)
- E. GCS 13 (E4 V4 M5)

*Explanation:* He opens his eyes to voice (E3), is confused (V4) and localizes to pressure (M5), for a GCS of 12. E4 would mean his eyes are open spontaneously. V3 is inappropriate words, which is less than confused speech. M6 requires obeying commands. His daughter's report that he normally manages his finances and drives shows this is a clear change from his baseline.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q4
**Which of the following is the most appropriate time frame for his first antibiotic dose?**

- A. After blood culture results
- B. After the chest radiograph
- C. Within 1 hour of recognition  **(key)**
- D. Within 3 hours of recognition
- E. Within 6 hours of recognition

*Explanation:* He has probable septic shock, with hypotension and a lactate of 5.2 mmol/L, so antibiotics should be given within 1 hour of recognition. Blood cultures are drawn first when this causes no delay, but treatment does not wait for results. A 3 hour window is suggested only for possible sepsis without shock. Waiting for the chest radiograph or for 6 hours adds risk without benefit.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine 2021. https://doi.org/10.1097/CCM.0000000000005337

### loc-24: Found on the floor in a heat wave

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 81-year-old woman is brought to the emergency department by ambulance during a week-long heat wave. Her neighbour found her on the floor of her top-floor apartment, which has no air conditioning. She was last seen well 2 days ago. She has hypertension and Parkinson disease and takes hydrochlorothiazide, carbidopa-levodopa and benztropine. She opens her eyes to pressure, makes incomprehensible sounds and localizes to pressure. Her skin is hot and dry. There is no neck stiffness, rigidity or focal deficit. Capillary glucose is 7.2 mmol/L.

- Temperature: 41.2°C rectal
- Pulse: 128/minute
- Resp.: 28/minute
- BP: 96/54 mmHg
- O2 sat: 94% on room air
- Weight: 58 kg

#### Q1
**Which of the following is the most likely cause of her decreased level of consciousness?**

- A. Bacterial meningitis
- B. Classic heat stroke  **(key)**
- C. Neuroleptic malignant syndrome
- D. Serotonin toxicity
- E. Thyrotoxic crisis

*Explanation:* A core temperature of 41.2°C with a decreased level of consciousness after days in a hot apartment during a heat wave is classic heat stroke. Her age, a diuretic and an anticholinergic drug all impair heat loss. She has no neck stiffness, although infection stays on the differential until excluded. Missed levodopa doses while she lay on the floor could cause a neuroleptic malignant-like syndrome, but that usually brings rigidity, which she lacks. She takes no serotonergic drug and has no known thyroid disease.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Eifling KP, Gaudio FG, Dumke C, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness and Environmental Medicine 2024. https://doi.org/10.1177/10806032241227924

#### Q2
**Which of the following is the most effective method to lower her temperature?**

- A. acetaminophen 1 g PR
- B. Cooling blanket under the patient
- C. dantrolene 2.5 mg/kg IV
- D. Ice packs to the neck only
- E. Immersion in cold water  **(key)**

*Explanation:* Her core temperature of 41.2°C with coma needs the fastest possible cooling, and the Wilderness Medical Society recommends whole-body cold water immersion, started at once, before the cause is confirmed. Acetaminophen does not work because the hypothalamic set point is normal in heat stroke. Dantrolene has no proven benefit. Ice packs to the neck alone and a cooling blanket under the patient cool far more slowly than immersion.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Eifling KP, Gaudio FG, Dumke C, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness and Environmental Medicine 2024. https://doi.org/10.1177/10806032241227924

#### Q3
**Which of the following items of collateral history is most important to obtain from her family?**

- A. Date of her last flu vaccine
- B. Her smoking history
- C. Her usual cognition and mobility  **(key)**
- D. Name of her neurologist
- E. Year Parkinson disease began

*Explanation:* Her usual cognition and mobility set the baseline against which her recovery is judged, and they show how far her state differs from normal. Parkinson disease can affect cognition, so a clear baseline matters. The year her Parkinson disease began, the name of her neurologist, her vaccination date and her smoking history do not help judge her level of consciousness or guide immediate care.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Eifling KP, Gaudio FG, Dumke C, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness and Environmental Medicine 2024. https://doi.org/10.1177/10806032241227924

#### Q4
*Update:* After cold water immersion, her temperature is 38.6°C. Thirty minutes later, she still opens her eyes only to pressure and makes incomprehensible sounds.

**Which of the following is the most appropriate next step for her persistent decreased level of consciousness?**

- A. Continue cooling to 37.0°C
- B. Electroencephalogram
- C. Head CT without contrast  **(key)**
- D. Observe for 24 hours
- E. Start empiric dantrolene

*Explanation:* She was found on the floor, may have fallen and still responds only to pressure after cooling, so an intracranial cause such as a subdural hematoma must be excluded with CT. Her decreased level of consciousness should not be put down to heat alone. Immersion is stopped at a target of 38.3 to 38.8°C to avoid overshoot hypothermia, so cooling to 37.0°C is not advised. Dantrolene has no proven role, and observation or EEG would delay finding a bleed.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Eifling KP, Gaudio FG, Dumke C, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness and Environmental Medicine 2024. https://doi.org/10.1177/10806032241227924

### loc-25: Confused outside a shelter

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 41-year-old man is brought to the emergency department by police, who found him wandering and confused outside a shelter. Shelter staff say he drank most of a jug of windshield washer fluid yesterday because he had no money for alcohol. He has alcohol use disorder. He says his vision is blurry. He opens his eyes to voice, is confused and obeys commands. There is no sign of head injury. Laboratory results: sodium 138 mmol/L, chloride 100 mmol/L, bicarbonate 6 mmol/L, glucose 6.0 mmol/L, urea 5.0 mmol/L, measured osmolality 318 mmol/kg, ethanol undetectable, venous pH 7.02.

- Temperature: 36.5°C oral
- Pulse: 102/minute
- Resp.: 30/minute
- BP: 138/86 mmHg
- O2 sat: 98% on room air
- Weight: 70 kg

#### Q1
**Which of the following laboratory results most directly excludes ethanol intoxication as the cause of his confusion?**

- A. Anion gap of 32 mmol/L
- B. Bicarbonate of 6 mmol/L
- C. Glucose of 6.0 mmol/L
- D. Raised serum osmolal gap
- E. Undetectable serum ethanol  **(key)**

*Explanation:* With no ethanol in his blood, alcohol intoxication cannot explain his confusion, whatever the police or his history suggest. The raised anion gap, low bicarbonate and raised osmolal gap point to a toxic alcohol, here methanol from washer fluid. An osmolal gap alone could reflect ethanol, but not when ethanol is undetectable. A normal glucose excludes hypoglycemia but does not address intoxication.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Roberts DM, Yates C, Megarbane B, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning. A systematic review and consensus statement. Critical Care Medicine 2015. https://doi.org/10.1097/CCM.0000000000000708

#### Q2
**Which of the following is his osmolal gap on these results?**

- A. 20 mmol/kg
- B. 26 mmol/kg
- C. 31 mmol/kg  **(key)**
- D. 36 mmol/kg
- E. 42 mmol/kg

*Explanation:* The calculated osmolality is 2 x sodium plus glucose plus urea, which is 2 x 138 plus 6.0 plus 5.0, or 287 mmol/kg. The osmolal gap is the measured 318 minus 287, or 31 mmol/kg. Leaving out urea gives 36 mmol/kg, and leaving out both glucose and urea gives 42 mmol/kg. The anion gap is 138 minus (100 plus 6), or 32 mmol/L, so both gaps are raised, as expected in methanol poisoning.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Roberts DM, Yates C, Megarbane B, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning. A systematic review and consensus statement. Critical Care Medicine 2015. https://doi.org/10.1097/CCM.0000000000000708

#### Q3
**Which of the following is the most appropriate antidote for this patient?**

- A. flumazenil 0.2 mg IV
- B. fomepizole 15 mg/kg IV  **(key)**
- C. physostigmine 1 mg IV
- D. pyridoxine 50 mg IV
- E. sodium thiosulfate 12.5 g IV

*Explanation:* Fomepizole blocks alcohol dehydrogenase and stops methanol being converted to formic acid, which causes the acidosis and eye injury. It is the preferred antidote over ethanol. The loading dose is 15 mg/kg, or 1050 mg for 70 kg. Pyridoxine is a cofactor given for ethylene glycol. In methanol poisoning, folinic acid is given to speed the breakdown of formate. Physostigmine treats anticholinergic toxicity, flumazenil reverses benzodiazepines, and sodium thiosulfate treats cyanide.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Barceloux DG, Bond GR, Krenzelok EP, Cooper H, Vale JA. American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning. Journal of Toxicology. Clinical Toxicology 2002. https://doi.org/10.1081/clt-120006745

#### Q4
**Which of the following findings in this patient are indications for extracorporeal treatment?**

Select 3.

- A. Alcohol use disorder
- B. Anion gap of 32 mmol/L  **(key)**
- C. Blurred vision  **(key)**
- D. Glucose of 6.0 mmol/L
- E. Heart rate of 102/minute
- F. Respiratory rate of 30/minute
- G. Venous pH of 7.02  **(key)**

*Explanation:* His blurred vision, pH of 7.02 and anion gap of 32 mmol/L each meet an EXTRIP criterion for extracorporeal treatment in methanol poisoning, which include new visual symptoms, a pH of 7.15 or lower and an anion gap above 24 mmol/L. His rapid breathing is compensation for the acidosis rather than a separate criterion. His heart rate, glucose and alcohol use disorder are not indications.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Roberts DM, Yates C, Megarbane B, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning. A systematic review and consensus statement. Critical Care Medicine 2015. https://doi.org/10.1097/CCM.0000000000000708

### loc-26: Drowsy beside an empty bottle

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 27-year-old woman is brought to the emergency department by ambulance after her sister found her drowsy on the bathroom floor beside an empty bottle of amitriptyline 50 mg tablets. The bottle was filled 3 days ago with 60 tablets. She has depression and chronic pain. She opens her eyes to pressure, mumbles words that cannot be understood and withdraws from pressure. Her pupils are 6 mm. Her skin is warm and dry, and her bladder is distended. ECG shows sinus tachycardia with a QRS duration of 148 ms and a terminal R wave in lead aVR.

- Temperature: 37.8°C oral
- Pulse: 132/minute
- Resp.: 14/minute
- BP: 88/50 mmHg
- O2 sat: 95% on room air
- Weight: 62 kg

#### Q1
**Which of the following is the most appropriate first drug treatment for this patient?**

- A. amiodarone 150 mg IV
- B. flumazenil 0.2 mg IV
- C. physostigmine 1 mg IV
- D. procainamide 17 mg/kg IV
- E. sodium bicarbonate 100 mmol IV  **(key)**

*Explanation:* Her QRS of 148 ms and hypotension show sodium channel blockade from tricyclic poisoning. A QRS over 100 ms is treated with hypertonic sodium bicarbonate boluses of 1 to 2 mmol/kg. For 62 kg, 100 mmol is about 1.6 mmol/kg. Boluses are repeated every 3 to 5 minutes until the QRS narrows or the serum pH reaches 7.55. Physostigmine can cause bradycardia and asystole in tricyclic poisoning. Flumazenil can provoke seizures. Procainamide is a sodium channel blocker that widens the QRS further, and amiodarone also prolongs conduction.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018. https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/

#### Q2
**Which of the following additional investigations are most important for this patient now?**

Select 2.

- A. Acetaminophen level  **(key)**
- B. Capillary glucose  **(key)**
- C. Electroencephalogram
- D. Lumbar puncture
- E. MRI of the brain
- F. Serum amitriptyline level
- G. Urine drug screen

*Explanation:* Acetaminophen is a common and often silent co-ingestion in intentional overdose, and it has an effective antidote, so a level is needed. Capillary glucose has not been checked, and hypoglycemia is a quickly reversible cause of decreased consciousness. A serum amitriptyline level is not available in time and guides care less than the ECG. A urine drug screen does not change management. EEG, lumbar puncture and MRI are not indicated.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient. https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html

#### Q3
*Update:* After sodium bicarbonate, her QRS is 118 ms. She now opens her eyes only to pressure, makes no sounds and has abnormal flexion to pressure. Her gag reflex is weak.

**Which of the following is the most appropriate airway management now?**

- A. Bag-valve-mask ventilation only
- B. Nasopharyngeal airway and observation
- C. Noninvasive bilevel ventilation
- D. Rapid sequence intubation  **(key)**
- E. Recovery position and observation

*Explanation:* Her GCS has fallen to 6 (E2 V1 M3), her gag is weak and tricyclic poisoning can cause seizures and further decline, so she needs a definitive airway. After intubation, ventilation must keep up with her needs, because a rise in PCO2 causes acidemia that worsens cardiac toxicity. Noninvasive ventilation is unsafe when she cannot protect her airway. Bag-valve-mask ventilation, a nasopharyngeal airway or the recovery position do not protect against aspiration.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018. https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/

#### Q4
**Which of the following details from her sister is most useful for planning her care?**

- A. Her employment status
- B. Her history of migraines
- C. Her usual alcohol intake
- D. Name of her psychiatrist
- E. Time she was last seen well  **(key)**

*Explanation:* The time she was last seen well gives the latest possible time of ingestion. Serious tricyclic toxicity usually appears within about 6 hours, so this sets how long she must be monitored. It also sets the timing of the acetaminophen level, which is read against the time since ingestion. Her employment, migraine history, psychiatrist's name and usual alcohol intake do not change immediate management.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018. https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/

### loc-27: Unsteady and drowsy for four days

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 64-year-old woman is brought to the emergency department by her husband because she has been increasingly drowsy and unsteady for 4 days. She has bipolar disorder treated with lithium carbonate 900 mg daily for 12 years. Ten days ago her family physician started ramipril for hypertension, and she has been taking naproxen for knee pain. She has had diarrhea for 3 days. Her husband says she is usually active and sharp. She opens her eyes to voice, is confused and obeys commands. She has a coarse tremor, myoclonic jerks and slurred speech. Laboratory results: lithium 3.4 mmol/L, sodium 136 mmol/L, creatinine 168 umol/L (78 umol/L 3 months ago).

- Temperature: 37.1°C oral
- Pulse: 58/minute
- Resp.: 16/minute
- BP: 106/64 mmHg
- O2 sat: 97% on room air
- Weight: 70 kg

#### Q1
**Which of the following is the most likely cause of her decreased level of consciousness?**

- A. Hypertensive encephalopathy
- B. Lithium toxicity  **(key)**
- C. Nonconvulsive status epilepticus
- D. Serotonin syndrome
- E. Viral encephalitis

*Explanation:* Ramipril, naproxen and diarrhea all reduce lithium clearance, and her creatinine has more than doubled, so lithium has accumulated to 3.4 mmol/L. Confusion, coarse tremor, myoclonus and slurred speech are typical of chronic lithium toxicity. Her BP of 106/64 mmHg excludes hypertensive encephalopathy. Serotonin syndrome is unlikely because she takes no serotonergic drug besides lithium, and she has no fever to suggest it or encephalitis. Nonconvulsive status stays on the differential but is not needed to explain her findings.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Decker BS, Goldfarb DS, Dargan PI, et al. Extracorporeal treatment for lithium poisoning. Systematic review and recommendations from the EXTRIP workgroup. Clinical Journal of the American Society of Nephrology 2015. https://doi.org/10.2215/CJN.10021014

#### Q2
**Which of the following statements from her husband most clearly establishes that her mental state has changed?**

- A. She had diarrhea for 3 days
- B. She has had knee pain this month
- C. She is usually active and sharp  **(key)**
- D. She started a new pill 10 days ago
- E. She takes lithium every morning

*Explanation:* A description of her usual function is what shows that her drowsiness and confusion are new rather than her baseline. The diarrhea, the new pill and her daily lithium help explain the cause, but they do not describe her usual mental state. Knee pain explains the naproxen but says nothing about her baseline. Collateral history about baseline is essential in any patient who cannot give a reliable history.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* National Institute for Health and Care Excellence. Delirium: prevention, diagnosis and management in hospital and long-term care. Clinical guideline CG103. 2010, updated 2023. https://www.nice.org.uk/guidance/cg103

#### Q3
**Which of the following is the most appropriate treatment to remove lithium in this patient?**

- A. activated charcoal 50 g PO
- B. furosemide 40 mg IV
- C. Hemodialysis now  **(key)**
- D. sodium polystyrene sulfonate PO
- E. Whole bowel irrigation

*Explanation:* Her decreased level of consciousness is the deciding finding, because the EXTRIP workgroup recommends extracorporeal treatment for lithium poisoning with a decreased level of consciousness whatever the lithium level, and she also has acute kidney injury. Activated charcoal does not bind lithium. Whole bowel irrigation is for large acute ingestions of sustained release tablets, not chronic accumulation. Furosemide adds to volume loss and does not clear lithium. Sodium polystyrene sulfonate is not a standard treatment and can cause hypokalemia.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Decker BS, Goldfarb DS, Dargan PI, et al. Extracorporeal treatment for lithium poisoning. Systematic review and recommendations from the EXTRIP workgroup. Clinical Journal of the American Society of Nephrology 2015. https://doi.org/10.2215/CJN.10021014

#### Q4
*Update:* Hemodialysis is arranged. The resident asks what to do with her home medications.

**Which of the following is the most appropriate plan for her medications?**

- A. Continue lithium at half dose
- B. Hold lithium, ramipril and naproxen  **(key)**
- C. Hold naproxen, continue lithium
- D. Hold ramipril, continue lithium
- E. Switch naproxen to ibuprofen

*Explanation:* Lithium must be held while she is toxic, and both ramipril and naproxen reduce lithium clearance and harm kidney function, so all three are stopped. Holding only naproxen or only ramipril leaves the other interacting drug in place and continues lithium while she is toxic. Ibuprofen is also an NSAID with the same effect on lithium. A half dose of lithium still adds to a toxic level.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Yatham LN, Kennedy SH, Parikh SV, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disorders 2018. https://doi.org/10.1111/bdi.12609

### loc-28: A headache during treatment

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 9-year-old girl is brought to the emergency department by her parents with 3 days of thirst, frequent urination and vomiting. She has no medical history. Initial results were glucose 38 mmol/L, venous pH 6.98, bicarbonate 4 mmol/L and PCO2 18 mmHg. She received 10 mL/kg of 0.9% saline, then IV fluids and an insulin infusion at 0.1 units/kg/hour. Four hours after treatment began, she says she has a severe headache, and she is hard to rouse. She opens her eyes to pressure, says inappropriate words and localizes to pressure. Capillary glucose is 14.2 mmol/L. Sodium is 136 mmol/L.

- Temperature: 36.9°C oral
- Pulse: 58/minute
- Resp.: 22/minute
- BP: 132/86 mmHg
- O2 sat: 98% on room air
- Weight: 28 kg

#### Q1
**Which of the following is the most likely cause of her decreased level of consciousness?**

- A. Bacterial meningitis
- B. Cerebral edema  **(key)**
- C. Hypoglycemia
- D. Ischemic stroke
- E. Worsening ketoacidosis

*Explanation:* Headache and a falling level of consciousness 4 hours into treatment, with a heart rate of 58/minute and a BP of 132/86 mmHg, both abnormal for a 9-year-old, fit cerebral edema from diabetic ketoacidosis. Her severe acidosis at presentation is a risk factor. A glucose of 14.2 mmol/L excludes hypoglycemia. She is afebrile without signs of meningitis, and she has no focal deficit to suggest stroke. Worsening acidosis would not explain bradycardia with hypertension.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Glaser N, Fritsch M, Priyambada L, et al. ISPAD clinical practice consensus guidelines 2022. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 2022. https://doi.org/10.1111/pedi.13406

#### Q2
**Which of the following is the most appropriate immediate treatment?**

- A. acetazolamide 250 mg IV
- B. dexamethasone 4 mg IV
- C. mannitol 14 g IV over 15 minutes  **(key)**
- D. 0.9% saline 280 mL IV bolus
- E. sodium bicarbonate 28 mmol IV

*Explanation:* Her falling GCS with bradycardia and hypertension calls for osmotherapy at once, without waiting for imaging. ISPAD recommends mannitol 0.5 to 1 g/kg IV over 10 to 15 minutes, or 3% saline, and for 28 kg, 0.5 g/kg is 14 g. IV fluid should be reduced, so a 10 mL/kg bolus of saline is wrong. Bicarbonate is linked to cerebral edema in DKA. Dexamethasone and acetazolamide have no role.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Glaser N, Fritsch M, Priyambada L, et al. ISPAD clinical practice consensus guidelines 2022. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 2022. https://doi.org/10.1111/pedi.13406

#### Q3
*Update:* She improves within 20 minutes of treatment and is admitted to the pediatric ICU.

**Which of the following is the best way to monitor for this complication in children being treated for DKA?**

- A. Continuous EEG monitoring
- B. Head CT every 4 hours
- C. Hourly GCS and neurological checks  **(key)**
- D. Pupil checks every 4 hours
- E. Serum osmolality every 12 hours

*Explanation:* Her edema was found because her headache and falling GCS were noticed, and ISPAD advises hourly neurological observations, including the GCS, during treatment of DKA so that such early signs are found and treated at once. Pupil checks every 4 hours are too infrequent and too narrow. Repeated CT exposes her to radiation and misses early clinical change. Continuous EEG and serum osmolality every 12 hours do not detect edema in time.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Glaser N, Fritsch M, Priyambada L, et al. ISPAD clinical practice consensus guidelines 2022. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 2022. https://doi.org/10.1111/pedi.13406

### loc-29: Confused after two days of vomiting

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 38-year-old man is brought to the emergency department by his brother, who found him lying on the couch, confused and difficult to rouse. He has had vomiting and diarrhea for 2 days and could not keep his pills down. He has primary adrenal insufficiency treated with hydrocortisone and fludrocortisone. He opens his eyes to voice, is confused and localizes to pressure. His mucous membranes are dry, and the creases of his palms are darkly pigmented. Laboratory results: sodium 124 mmol/L, potassium 6.1 mmol/L, glucose 3.1 mmol/L, creatinine 164 umol/L.

- Temperature: 37.6°C oral
- Pulse: 124/minute
- Resp.: 22/minute
- BP: 76/44 mmHg
- O2 sat: 97% on room air
- Weight: 72 kg

#### Q1
**Which of the following is the most appropriate immediate treatment for this patient?**

- A. dexamethasone 4 mg IV
- B. fludrocortisone 0.1 mg PO
- C. hydrocortisone 100 mg IV  **(key)**
- D. methylprednisolone 1 g IV
- E. prednisone 50 mg PO

*Explanation:* He has an adrenal crisis, with hypotension, confusion, hyponatremia, hyperkalemia and hypoglycemia after 2 days without his steroids. The Endocrine Society recommends hydrocortisone 100 mg IV at once, then 200 mg over 24 hours, with IV fluids. At this dose hydrocortisone also gives mineralocorticoid effect, so fludrocortisone is not needed acutely, and he cannot keep oral drugs down. Dexamethasone has no mineralocorticoid effect, and methylprednisolone 1 g is not indicated.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2016. https://doi.org/10.1210/jc.2015-1710

#### Q2
*Update:* Hydrocortisone has been given. His ECG shows sinus tachycardia without peaked T waves or QRS widening.

**Which of the following additional treatments are most appropriate in the first hour?**

Select 2.

- A. calcium gluconate 3 g IV
- B. dextrose 50% 50 mL IV  **(key)**
- C. fludrocortisone 0.1 mg PO
- D. furosemide 40 mg IV
- E. insulin regular 10 units IV
- F. norepinephrine infusion IV
- G. normal saline 1 L IV  **(key)**
- H. sodium polystyrene sulfonate 15 g PO

*Explanation:* His glucose of 3.1 mmol/L with a decreased level of consciousness needs IV dextrose now, and his hypotension and dehydration need about 1 L of isotonic saline in the first hour. His potassium of 6.1 mmol/L without ECG changes will fall with hydrocortisone and fluid, so calcium is not needed. Insulin would worsen his hypoglycemia, and furosemide would worsen his volume loss. Norepinephrine is not started before fluid and steroid, and sodium polystyrene sulfonate acts too slowly to matter.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2016. https://doi.org/10.1210/jc.2015-1710

#### Q3
**Which of the following results best distinguishes primary from secondary adrenal insufficiency in this patient?**

- A. Creatinine of 164 umol/L
- B. Glucose of 3.1 mmol/L
- C. Potassium of 6.1 mmol/L  **(key)**
- D. Sodium of 124 mmol/L
- E. Temperature of 37.6°C

*Explanation:* Hyperkalemia reflects aldosterone deficiency, which occurs when the adrenal gland itself fails. In secondary adrenal insufficiency the renin and aldosterone system is intact, so potassium is usually normal. Hyponatremia and hypoglycemia occur in both forms. The raised creatinine reflects volume depletion, and a low-grade temperature is nonspecific. His palmar pigmentation also points to primary disease, from high ACTH.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2016. https://doi.org/10.1210/jc.2015-1710

### loc-30: Collapsed while lifting boxes

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 52-year-old woman is brought to the emergency department by ambulance. At 1340, while lifting boxes at work, she said she had the worst headache of her life and then collapsed. A coworker says she was unresponsive for about 1 minute. She smokes and has hypertension treated with amlodipine. She has vomited twice. She opens her eyes to voice, is confused and obeys commands. Her neck is stiff. Her pupils are equal and reactive, and she moves all limbs equally. Capillary glucose is 6.1 mmol/L.

- Temperature: 37.0°C oral
- Pulse: 64/minute
- Resp.: 18/minute
- BP: 186/104 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following best explains why the Ottawa Subarachnoid Hemorrhage Rule cannot be applied to her?**

- A. Current smoking history
- B. Decreased level of consciousness  **(key)**
- C. Headache during exertion
- D. Hypertension on arrival
- E. Neck stiffness on examination

*Explanation:* Her GCS is 13 (E3 V4 M6), and the Ottawa Subarachnoid Hemorrhage Rule was derived only in alert patients with a GCS of 15 and a new, severe, nontraumatic headache, so the rule does not apply and she needs CT head now. Onset during exertion and neck stiffness are criteria within the rule, so they would mark her as high risk rather than exclude her. Smoking and hypertension are risk factors for aneurysm but are not exclusions.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Perry JJ, Stiell IG, Sivilotti ML, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA 2013. https://doi.org/10.1001/jama.2013.278018

#### Q2
*Update:* CT head shows diffuse subarachnoid blood in the basal cisterns.

**Which of the following is her World Federation of Neurosurgical Societies grade?**

- A. Grade I
- B. Grade II  **(key)**
- C. Grade III
- D. Grade IV
- E. Grade V

*Explanation:* The WFNS scale grades subarachnoid hemorrhage by GCS and motor deficit. Grade I is a GCS of 15, grade II a GCS of 13 or 14 without a motor deficit, and grade III a GCS of 13 or 14 with a deficit. Grade IV is a GCS of 7 to 12, and grade V is 3 to 6. Her GCS is 13 (E3 V4 M6) and she moves all limbs equally, so she is grade II. Recording the grade with its GCS components lets the team track change.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Hoh BL, Ko NU, Amin-Hanjani S, et al. 2023 Guideline for the management of patients with aneurysmal subarachnoid hemorrhage. A guideline from the American Heart Association and American Stroke Association. Stroke 2023. https://doi.org/10.1161/STR.0000000000000436

#### Q3
*Update:* Forty minutes later, she opens her eyes only to pressure, says inappropriate words and localizes to pressure. Repeat CT shows enlarged lateral and third ventricles.

**Which of the following is the most appropriate urgent intervention for her falling level of consciousness?**

- A. dexamethasone 10 mg IV
- B. Lumbar drain for CSF removal
- C. nimodipine 60 mg PO
- D. phenytoin 20 mg/kg IV
- E. Ventricular drain placement  **(key)**

*Explanation:* Acute hydrocephalus with a falling GCS after subarachnoid hemorrhage is treated with urgent CSF diversion by an external ventricular drain. Nimodipine is recommended to improve outcome after aneurysmal hemorrhage, but it does not treat hydrocephalus. Phenytoin prophylaxis has been linked to worse outcomes. Dexamethasone has no role. A lumbar drain is not the urgent treatment for acute hydrocephalus with a falling GCS.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Hoh BL, Ko NU, Amin-Hanjani S, et al. 2023 Guideline for the management of patients with aneurysmal subarachnoid hemorrhage. A guideline from the American Heart Association and American Stroke Association. Stroke 2023. https://doi.org/10.1161/STR.0000000000000436

### loc-31: Headache and a seizure after delivery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 31-year-old woman is brought to the emergency department by her husband 12 days after a vaginal delivery. She has had a worsening headache for 4 days. This morning she had a generalized seizure lasting 2 minutes and has been drowsy since. She is breastfeeding. She has no medical history and takes no medications. She opens her eyes to voice, is confused and obeys commands. Her optic discs are swollen. She has mild weakness of the left leg. Capillary glucose is 5.3 mmol/L. Noncontrast CT head shows a small right parietal hemorrhage and a hyperdense superior sagittal sinus.

- Temperature: 37.3°C oral
- Pulse: 96/minute
- Resp.: 16/minute
- BP: 138/84 mmHg
- O2 sat: 98% on room air
- Weight: 74 kg

#### Q1
**Which of the following other diagnoses must also be considered in this postpartum patient with headache and seizure?**

- A. Cluster headache
- B. Migraine with aura
- C. Postpartum eclampsia  **(key)**
- D. Sheehan syndrome
- E. Tension-type headache

*Explanation:* Eclampsia can occur after delivery, and a new seizure with headache in the weeks postpartum must be treated as possible eclampsia until excluded, with BP checks, urine protein and blood work. Her BP of 138/84 mmHg does not exclude it. Sheehan syndrome causes pituitary failure and usually failure of lactation, and she is breastfeeding. Migraine, tension-type and cluster headaches do not cause papilledema or a hemorrhage on CT.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Magee LA, Smith GN, Bloch C, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. Journal of Obstetrics and Gynaecology Canada 2022. https://doi.org/10.1016/j.jogc.2022.03.002

#### Q2
**Which of the following investigations will best confirm the most likely diagnosis?**

- A. Carotid duplex ultrasound
- B. Electroencephalogram
- C. Lumbar puncture opening pressure
- D. Transcranial Doppler study
- E. Venography by CT or MRI  **(key)**

*Explanation:* A postpartum patient with headache, seizure, papilledema, a lobar hemorrhage and a hyperdense sagittal sinus most likely has cerebral venous thrombosis, which is confirmed by CT or MR venography. Lumbar puncture is unsafe with a hemorrhage and papilledema and does not confirm the diagnosis. EEG, carotid duplex and transcranial Doppler do not show the venous sinuses.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Saposnik G, Bushnell C, Coutinho JM, et al. Diagnosis and management of cerebral venous thrombosis. A scientific statement from the American Heart Association. Stroke 2024. https://doi.org/10.1161/STR.0000000000000456

#### Q3
*Update:* CT venography confirms thrombosis of the superior sagittal sinus. Her platelet count and INR are normal.

**Which of the following is the most appropriate initial treatment?**

- A. alteplase 0.9 mg/kg IV
- B. ASA 81 mg PO once daily
- C. enoxaparin 74 mg SC twice daily  **(key)**
- D. warfarin 5 mg PO once daily
- E. No anticoagulation for 2 weeks

*Explanation:* Cerebral venous thrombosis is treated with anticoagulation, usually weight-based low molecular weight heparin, even when there is a hemorrhage caused by the venous thrombosis. For 74 kg, enoxaparin at 1 mg/kg is 74 mg SC twice daily, and it is compatible with breastfeeding. Withholding anticoagulation because of the bleed is not recommended. ASA does not treat venous thrombosis. Warfarin is not started alone, and systemic alteplase is not used.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Saposnik G, Bushnell C, Coutinho JM, et al. Diagnosis and management of cerebral venous thrombosis. A scientific statement from the American Heart Association. Stroke 2024. https://doi.org/10.1161/STR.0000000000000456

### loc-32: Sleepy with spots on her legs

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 14-month-old girl is brought to the emergency department by her parents because she has been very sleepy for 3 hours. She had a fever and was irritable overnight. This morning they noticed dark spots on her legs. Her immunizations are up to date. She opens her eyes only to pressure, makes no sounds and withdraws from pressure. There are purpuric lesions on her legs and trunk that do not blanch. Her capillary refill time is 4 seconds. Capillary glucose is 5.6 mmol/L.

- Temperature: 39.6°C rectal
- Pulse: 172/minute
- Resp.: 40/minute
- BP: 70/38 mmHg
- O2 sat: 95% on room air
- Weight: 10 kg

#### Q1
**Which of the following is the most appropriate approach to antibiotics and lumbar puncture for this child?**

- A. Antibiotics now, defer lumbar puncture  **(key)**
- B. Await blood culture before antibiotics
- C. Await CSF results before antibiotics
- D. CT head, then lumbar puncture
- E. Lumbar puncture, then antibiotics

*Explanation:* She has fever, a decreased level of consciousness, non-blanching purpura and signs of shock, so she needs IV antibiotics at once. The Canadian Paediatric Society lists decreased consciousness, an unstable clinical status and coagulopathy as reasons to delay lumbar puncture, so it is deferred until she is stable. A blood culture is drawn first only if it causes no delay, and treatment never waits for results. CT head before antibiotics only adds delay.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Le Saux N, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Canadian Paediatric Society position statement. 2014, updated 2020. https://cps.ca/en/documents/position/management-of-bacterial-meningitis

#### Q2
**Which of the following is the most appropriate ceftriaxone dose for this child?**

- A. ceftriaxone 250 mg IV every 12 hours
- B. ceftriaxone 400 mg IV every 24 hours
- C. ceftriaxone 500 mg IV every 24 hours
- D. ceftriaxone 500 mg IV every 12 hours  **(key)**
- E. ceftriaxone 1000 mg IV every 12 hours

*Explanation:* At 10 kg she needs 1000 mg of ceftriaxone a day, given as 500 mg IV every 12 hours, because the Canadian Paediatric Society recommends 100 mg/kg/day in two divided doses for suspected meningitis, with vancomycin. A dose of 500 mg every 24 hours gives only half the daily dose, and 250 mg every 12 hours also totals only 500 mg a day. A dose of 1000 mg every 12 hours doubles the recommended dose.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Le Saux N, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Canadian Paediatric Society position statement. 2014, updated 2020. https://cps.ca/en/documents/position/management-of-bacterial-meningitis

#### Q3
**Which of the following is the correct pediatric Glasgow Coma Scale score, with its components?**

- A. GCS 7 (E2 V1 M4)  **(key)**
- B. GCS 8 (E2 V2 M4)
- C. GCS 8 (E3 V1 M4)
- D. GCS 9 (E2 V2 M5)
- E. GCS 10 (E3 V2 M5)

*Explanation:* She opens her eyes to pressure (E2), makes no sounds (V1) and withdraws from pressure (M4), for a GCS of 7. Any cry or moan would score at least V2 on the pediatric verbal scale. E3 would require eye opening to voice. M5 would require localizing. Recording each component lets the team see whether her response to treatment is improving.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

### loc-33: Hard to rouse after hip surgery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 86-year-old man is brought to the emergency department by ambulance. His daughter found him very hard to rouse this morning. He had a hip fracture repaired 2 weeks ago and went home with morphine 10 mg PO every 4 hours as needed. She says he has been taking it regularly and has had little to drink for 3 days. He has chronic kidney disease. He opens his eyes briefly to pressure, makes no sounds and withdraws from pressure. His pupils are 2 mm. Capillary glucose is 6.4 mmol/L. Creatinine is 248 umol/L, up from 130 umol/L at discharge.

- Temperature: 36.2°C oral
- Pulse: 64/minute
- Resp.: 7/minute
- BP: 118/64 mmHg
- O2 sat: 86% on room air
- Weight: 62 kg

#### Q1
**Which of the following is the most appropriate initial naloxone dose for this patient?**

- A. naloxone 0.04 mg IV  **(key)**
- B. naloxone 0.4 mg IV
- C. naloxone 1 mg IV
- D. naloxone 2 mg IV
- E. naloxone 0.8 mg SC

*Explanation:* He is on regular opioids for pain after surgery, so naloxone should start at 0.04 mg IV and be repeated every few minutes until his breathing is adequate, not until he is fully awake. Starting at 0.4 mg or more risks acute withdrawal, sudden severe hip pain, agitation, vomiting and aspiration. Subcutaneous naloxone is absorbed unpredictably and cannot be titrated quickly in a patient breathing 7 times a minute.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Boyer EW. Management of opioid analgesic overdose. New England Journal of Medicine 2012. https://doi.org/10.1056/NEJMra1202561

#### Q2
**Which of the following best explains why he has become toxic now?**

- A. Accumulation of active metabolites  **(key)**
- B. Delayed fat embolism
- C. Drug interaction with acetaminophen
- D. Hypothyroidism after surgery
- E. Loss of opioid tolerance

*Explanation:* His creatinine has almost doubled with poor fluid intake, and morphine-6-glucuronide, an active metabolite cleared by the kidney, accumulates in kidney failure and causes prolonged sedation and respiratory depression. Fat embolism usually appears within about 3 days of a fracture, not 2 weeks later. Acetaminophen does not raise morphine levels. He has taken morphine regularly, so he has not lost tolerance. Nothing suggests hypothyroidism.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Boyer EW. Management of opioid analgesic overdose. New England Journal of Medicine 2012. https://doi.org/10.1056/NEJMra1202561

#### Q3
*Update:* After two doses of naloxone 0.04 mg IV, his respiratory rate is 14/minute and he opens his eyes to voice. Fifty minutes later, his respiratory rate is 6/minute.

**Which of the following is the most appropriate next step for this patient?**

- A. flumazenil 0.2 mg IV
- B. Nasal prong oxygen alone
- C. Repeat naloxone 2 mg IV
- D. Start a naloxone infusion  **(key)**
- E. Transfer to a ward bed

*Explanation:* Naloxone acts for a shorter time than the accumulated morphine metabolites, so his respiratory depression has returned. A naloxone infusion, titrated to adequate breathing and often started at about two thirds of the effective bolus dose per hour, keeps him safe while the drug clears. Oxygen alone hides hypoventilation without treating it. A 2 mg bolus risks withdrawal and pain crisis. Nothing in his history points to a benzodiazepine for flumazenil to reverse, and a ward bed does not give the monitoring he needs.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Boyer EW. Management of opioid analgesic overdose. New England Journal of Medicine 2012. https://doi.org/10.1056/NEJMra1202561

#### Q4
**Which of the following sources would best confirm how much morphine he has taken?**

- A. Family physician's chart
- B. His own recollection
- C. Hospital discharge summary
- D. Pharmacy record and pill count  **(key)**
- E. Urine opioid screen

*Explanation:* The pharmacy dispensing record shows how many tablets he received and when, and a count of what remains shows how many he has taken. He cannot give a reliable history in his current state. The discharge summary and the family physician's chart show what was prescribed, not what he took. A urine opioid screen is qualitative and does not show the amount.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient. https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html

### loc-34: Slow to answer for two days

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 23-year-old woman is brought to the emergency department by her mother, who says she has become increasingly sleepy and slow to answer over 2 days. Five weeks ago she started valproic acid 750 mg twice daily for bipolar disorder. Her mother has counted her tablets, and none are missing beyond the prescribed doses. She has vomited twice. She opens her eyes to voice, is confused and obeys commands. She has asterixis. There is no fever, neck stiffness or focal deficit. Laboratory results: valproic acid 620 umol/L (therapeutic range 350 to 700 umol/L), ALT 28 U/L, bilirubin 12 umol/L, INR 1.0, ammonia 148 umol/L, glucose 5.6 mmol/L.

- Temperature: 36.8°C oral
- Pulse: 84/minute
- Resp.: 16/minute
- BP: 118/72 mmHg
- O2 sat: 99% on room air
- Weight: 60 kg

#### Q1
**Which of the following is the most likely cause of her decreased level of consciousness?**

- A. Acute liver failure
- B. Herpes simplex encephalitis
- C. Hyperammonemia from valproate  **(key)**
- D. Intentional valproate overdose
- E. Serotonin syndrome

*Explanation:* Her ammonia of 148 umol/L with a normal ALT, bilirubin and INR points to valproate-induced hyperammonemic encephalopathy, which can occur at therapeutic drug levels. A normal INR and bilirubin exclude acute liver failure. Her level of 620 umol/L is within range and her mother's tablet count shows no missing doses, which argues against overdose. She has no fever or focal signs to suggest encephalitis, and she takes no serotonergic drug.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter: Antiepileptics. https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210272255

#### Q2
**Which of the following collateral details was most useful in excluding an overdose?**

- A. Duration of her bipolar disorder
- B. Her recent mood symptoms
- C. Name of the prescribing psychiatrist
- D. Tablet count by her mother  **(key)**
- E. Timing of her last period

*Explanation:* Her mother's count of the remaining tablets shows that no extra doses were taken, which together with a level in the therapeutic range makes overdose unlikely. The duration of her bipolar disorder and her recent mood may raise concern about self-harm but do not show what she took. The psychiatrist's name and the timing of her last period do not help decide whether she overdosed.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient. https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html

#### Q3
**Which of the following is the most appropriate specific treatment, along with stopping valproic acid?**

- A. levocarnitine 100 mg/kg IV  **(key)**
- B. naloxone 0.4 mg IV
- C. physostigmine 1 mg IV
- D. rifaximin 550 mg PO
- E. thiamine 100 mg IV

*Explanation:* Levocarnitine is used for valproate-associated hyperammonemia, because valproate depletes carnitine and impairs the urea cycle. A loading dose of 100 mg/kg IV is 6 g for 60 kg. Rifaximin lowers gut ammonia in cirrhosis, which is not her problem. Naloxone and physostigmine treat opioid and anticholinergic toxicity, which she does not have. Thiamine does not treat hyperammonemia.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Antidotes in Depth: L-Carnitine. https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210262359

### loc-35: A fall from the monkey bars

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 7-year-old boy is brought to the emergency department by his father 2 and a half hours after falling about 1.5 m from monkey bars onto packed ground and hitting the back of his head. He cried at once. He has vomited four times since and keeps asking where he is. He has no medical history. His eyes are open. He is confused and obeys commands. There is a small occipital hematoma. There is no bruising behind the ears or around the eyes and no fluid from the nose or ears. His pupils are equal and reactive, and he moves all limbs normally.

- Temperature: 36.8°C oral
- Pulse: 104/minute
- Resp.: 22/minute
- BP: 108/66 mmHg
- O2 sat: 99% on room air
- Weight: 24 kg

#### Q1
**Which of the following is the correct Glasgow Coma Scale score for this child, with its components?**

- A. GCS 12 (E3 V3 M6)
- B. GCS 13 (E3 V4 M6)
- C. GCS 13 (E4 V3 M6)
- D. GCS 14 (E4 V4 M6)  **(key)**
- E. GCS 15 (E4 V5 M6)

*Explanation:* His eyes are open spontaneously (E4), he is confused (V4) and he obeys commands (M6), for a GCS of 14. V5 requires orientation, and he keeps asking where he is. V3 is inappropriate words, which is less than his confused speech. E3 would mean eye opening only to voice.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q2
**Which of the following is the most appropriate imaging decision for this child?**

- A. CT head without contrast now  **(key)**
- B. Discharge with head injury advice
- C. MRI brain within 24 hours
- D. Observe for 4 more hours
- E. Skull radiographs now

*Explanation:* His GCS is below 15 more than 2 hours after injury, a high-risk CATCH criterion, and a fall from 1.5 m is a dangerous mechanism, a medium-risk criterion. Observation and discharge are for children without these findings. Skull radiographs cannot show intracranial injury, and MRI is less available and slower in the acute setting.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Osmond MH, Klassen TP, Wells GA, et al. CATCH. A clinical decision rule for the use of computed tomography in children with minor head injury. CMAJ 2010. https://doi.org/10.1503/cmaj.091421

#### Q3
**Which of the following is the best way to monitor him while he waits for CT?**

- A. AVPU score every 2 hours
- B. Parent report of changes
- C. Pulse oximetry alone
- D. Serial GCS components and pupils  **(key)**
- E. Wake him hourly to ask his name

*Explanation:* Serial GCS components with pupil checks, recorded with the time, show a decline early and in a form every clinician can compare. AVPU every 2 hours is too coarse and too infrequent after a significant head injury. A parent's report and asking his name are not reproducible measures. Pulse oximetry monitors oxygenation, not consciousness.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

### loc-36: Sleepy and thirsty for a week

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 68-year-old woman is brought to the emergency department by her son because she has been increasingly sleepy and confused for 1 week. She has metastatic breast cancer with bone metastases and finished chemotherapy 2 months ago. She has been constipated and very thirsty. Her son says she normally lives alone, manages her own medications and plays bridge weekly. She opens her eyes to voice, is confused and obeys commands. Her mucous membranes are dry. There is no focal deficit. Laboratory results: total calcium 3.72 mmol/L, albumin 26 g/L, creatinine 128 umol/L, sodium 141 mmol/L, glucose 6.2 mmol/L.

- Temperature: 36.9°C oral
- Pulse: 102/minute
- Resp.: 16/minute
- BP: 104/62 mmHg
- O2 sat: 96% on room air
- Weight: 54 kg

#### Q1
**Which of the following is her albumin-corrected calcium on these results?**

- A. 3.44 mmol/L
- B. 3.72 mmol/L
- C. 3.86 mmol/L
- D. 4.00 mmol/L  **(key)**
- E. 4.28 mmol/L

*Explanation:* Corrected calcium is total calcium plus 0.02 x (40 minus albumin in g/L). For her, that is 3.72 plus 0.02 x 14, or 3.72 plus 0.28, which is 4.00 mmol/L. Subtracting the correction gives 3.44 mmol/L, and ignoring it leaves 3.72 mmol/L. Her low albumin means the total calcium underestimates the true level, so this is severe hypercalcemia that explains her decreased level of consciousness.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* El-Hajj Fuleihan G, Clines GA, Hu MI, et al. Treatment of hypercalcemia of malignancy in adults. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2023. https://doi.org/10.1210/clinem/dgac621

#### Q2
**Which of the following treatments are most appropriate for her now?**

Select 2.

- A. cinacalcet 30 mg PO
- B. furosemide 40 mg IV
- C. hydrochlorothiazide 25 mg PO
- D. normal saline 1 L IV over 1 hour  **(key)**
- E. prednisone 60 mg PO
- F. zoledronic acid 4 mg IV  **(key)**

*Explanation:* She is dry, with severe hypercalcemia from bone metastases, so she needs IV isotonic saline to restore volume and an IV bisphosphonate. The Endocrine Society guideline recommends denosumab or an IV bisphosphonate such as zoledronic acid, and suggests denosumab where it is available. Furosemide is used only for fluid overload after volume is restored. Hydrochlorothiazide raises calcium. Glucocorticoids suit calcitriol-driven hypercalcemia, as in lymphoma, not breast cancer. Cinacalcet is for parathyroid carcinoma.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* El-Hajj Fuleihan G, Clines GA, Hu MI, et al. Treatment of hypercalcemia of malignancy in adults. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2023. https://doi.org/10.1210/clinem/dgac621

#### Q3
**Which of the following is the best documentation of her level of consciousness for the admitting team?**

- A. Altered mental status noted
- B. Drowsy but rousable to voice
- C. GCS 13 (E3 V4 M6), confused  **(key)**
- D. GCS 13 without components
- E. Lethargic and not herself

*Explanation:* She opens her eyes to voice (E3), is confused (V4) and obeys commands (M6), so her GCS is 13. Recording the components with a plain description gives a reproducible baseline to judge her response to treatment. A total without components hides which response changes. Phrases such as altered mental status, drowsy but rousable or lethargic mean different things to different clinicians and cannot be trended.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

### loc-37: Motorcycle crash at highway speed

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 34-year-old man is brought to the emergency department by ambulance after a motorcycle crash at highway speed. He wore a helmet. At the scene, paramedics found his eyes closed, and he made incomprehensible sounds and localized to pressure. En route he vomited, and his oxygen saturation fell to 84% before suction. On arrival he opens his eyes to pressure, makes no sounds and has abnormal flexion to pressure. His right pupil is 5 mm and sluggish, and his left pupil is 3 mm and reactive. He has a large scalp laceration. His chest and abdomen are normal on examination.

- Temperature: 36.4°C oral
- Pulse: 58/minute
- Resp.: 10/minute
- BP: 164/96 mmHg
- O2 sat: 90% on 15 L/minute by non-rebreather mask
- Weight: 80 kg

#### Q1
**Which of the following is his Glasgow Coma Scale score on arrival, with its components?**

- A. GCS 6 (E2 V1 M3)  **(key)**
- B. GCS 7 (E2 V1 M4)
- C. GCS 7 (E2 V2 M3)
- D. GCS 8 (E1 V2 M5)
- E. GCS 8 (E2 V2 M4)

*Explanation:* He opens his eyes to pressure (E2), makes no sounds (V1) and shows abnormal flexion (M3), for a GCS of 6. At the scene he was E1 V2 M5, a GCS of 8. The total has fallen by 2 and his motor score by 2, which with a new dilated, sluggish pupil shows neurological deterioration. M4 is normal flexion or withdrawal, which is more than abnormal flexion.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q2
**Which of the following is the most important immediate priority for this patient?**

- A. CT head before airway control
- B. Hyperventilation to PCO2 25 mmHg
- C. Nasopharyngeal airway insertion
- D. Rapid sequence intubation  **(key)**
- E. Supraglottic airway insertion

*Explanation:* His GCS is 6, he has vomited and his saturation has already fallen to 84%, so he needs a definitive airway now. Hypoxia worsens outcome after severe traumatic brain injury. A nasopharyngeal or supraglottic airway does not protect against aspiration as well as a cuffed tube. Prophylactic hyperventilation to a PCO2 of 25 mmHg is not recommended because it causes cerebral ischemia. CT before the airway is secured is unsafe.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury. Fourth edition. Brain Trauma Foundation. Neurosurgery 2017. https://doi.org/10.1227/NEU.0000000000001432

#### Q3
*Update:* He is intubated. CT shows a large right epidural hematoma, and neurosurgery is on the way. His right pupil is now 6 mm and fixed.

**Which of the following is the most appropriate treatment for his signs of raised intracranial pressure while awaiting surgery?**

- A. dexamethasone 10 mg IV
- B. furosemide 40 mg IV
- C. labetalol 20 mg IV
- D. mannitol 80 g IV  **(key)**
- E. nimodipine 60 mg PO

*Explanation:* A falling GCS, a new fixed dilated pupil, bradycardia and hypertension are signs of herniation. Mannitol at 0.5 to 1 g/kg IV lowers intracranial pressure, and for 80 kg, 1 g/kg is 80 g. A bolus of hypertonic saline is an equally effective alternative. Corticosteroids are kept for vasogenic edema from tumour, abscess or meningitis and are avoided after trauma. Lowering his BP with labetalol reduces cerebral perfusion. Furosemide is not an effective first treatment, and nimodipine has no role here.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Bhalla P, Dingman JS, Aysenne A. Emergency Neurological Life Support: intracranial hypertension and herniation protocol, version 6.0. Neurocritical Care Society. 2024. https://www.neurocriticalcare.org/Portals/0/ENLS%205.0/ENLS%206.0/Protocol%20V6_0_Intracranial%20Hypertension%20and%20Herniation.pdf

#### Q4
*Update:* After mannitol, and while he waits for the operating room, his BP is 98/58 mmHg.

**Which of the following is the minimum systolic BP target for this patient?**

- A. At least 80 mmHg
- B. At least 90 mmHg
- C. At least 100 mmHg
- D. At least 110 mmHg  **(key)**
- E. At least 140 mmHg

*Explanation:* He is 34, so his target is a systolic BP of at least 110 mmHg. The Brain Trauma Foundation recommends 110 mmHg or higher for patients aged 15 to 49 or over 70 years with severe traumatic brain injury, and 100 mmHg or higher at 50 to 69 years. Targets of 80 or 90 mmHg allow hypotension that worsens secondary brain injury. A floor of 140 mmHg is not required.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury. Fourth edition. Brain Trauma Foundation. Neurosurgery 2017. https://doi.org/10.1227/NEU.0000000000001432

### loc-38: Carried out of a burning house

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 45-year-old man is brought to the emergency department by ambulance after firefighters carried him out of a burning house. He was inside for about 15 minutes. He opens his eyes to pressure, makes incomprehensible sounds and withdraws from pressure. There is soot in his mouth and nostrils. He has no burns. Arterial blood gas on 15 L/minute of oxygen: pH 7.12, PCO2 32 mmHg, PO2 410 mmHg, bicarbonate 10 mmol/L, lactate 12.4 mmol/L, carboxyhemoglobin 18%.

- Temperature: 36.8°C oral
- Pulse: 122/minute
- Resp.: 26/minute
- BP: 84/50 mmHg
- O2 sat: 100% on 15 L/minute by non-rebreather mask
- Weight: 82 kg

#### Q1
**Which of the following best explains the severity of his lactic acidosis?**

- A. Carbon monoxide alone
- B. Hypovolemia from burns
- C. Methemoglobinemia from smoke
- D. Seizure before arrival
- E. Smoke-derived cyanide toxicity  **(key)**

*Explanation:* Fire smoke contains hydrogen cyanide, and a very high lactate with hypotension and decreased consciousness after smoke inhalation is a marker of significant cyanide poisoning. Carbon monoxide contributes, but a carboxyhemoglobin of 18% does not on its own explain a lactate of 12.4 mmol/L with shock. He has no burns to cause hypovolemia. No seizure was reported, and nothing in the case suggests methemoglobinemia.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Anseeuw K, Delvau N, Burillo-Putze G, et al. Cyanide poisoning by fire smoke inhalation. A European expert consensus. European Journal of Emergency Medicine 2013. https://doi.org/10.1097/MEJ.0b013e328357170b

#### Q2
**Which of the following is the most appropriate antidote for this patient?**

- A. amyl nitrite by inhalation
- B. fomepizole 15 mg/kg IV
- C. hydroxocobalamin 5 g IV  **(key)**
- D. methylene blue 1 mg/kg IV
- E. sodium nitrite 300 mg IV

*Explanation:* His coma, hypotension and lactate of 12.4 mmol/L after smoke inhalation call for hydroxocobalamin 5 g IV over about 15 minutes, the recommended antidote for suspected cyanide poisoning from fire smoke. It binds cyanide to form cyanocobalamin without harming oxygen delivery. Nitrites work by creating methemoglobin, which further reduces oxygen carrying in a patient who already has carboxyhemoglobin. Methylene blue treats methemoglobinemia, and fomepizole treats toxic alcohols.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Anseeuw K, Delvau N, Burillo-Putze G, et al. Cyanide poisoning by fire smoke inhalation. A European expert consensus. European Journal of Emergency Medicine 2013. https://doi.org/10.1097/MEJ.0b013e328357170b

#### Q3
**Which of the following best explains his oxygen saturation reading of 100%?**

- A. Carboxyhemoglobin read as oxyhemoglobin  **(key)**
- B. Cyanide raising venous oxygen
- C. High inspired oxygen alone
- D. Methemoglobin raising the reading
- E. Normal oxygen delivery

*Explanation:* Standard pulse oximeters cannot tell carboxyhemoglobin from oxyhemoglobin, so the reading overstates true oxygen saturation in carbon monoxide poisoning. Co-oximetry is needed to measure carboxyhemoglobin. High inspired oxygen raises his PO2, but it does not explain why 18% of his hemoglobin is missed. Cyanide raises venous oxygen content, not the pulse oximeter reading. Methemoglobin pulls the reading toward 85%, and his lactate shows oxygen delivery is not normal.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. American Journal of Respiratory and Critical Care Medicine 2012. https://doi.org/10.1164/rccm.201207-1284CI

### loc-39: Asleep on a couch at a party

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 15-year-old girl is brought to the emergency department by ambulance at 0130 from a house party. Friends say she drank vodka quickly, then vomited and fell asleep on a couch. They do not know if she took anything else. She has no medical history. She smells of alcohol. She opens her eyes to pressure, makes incomprehensible sounds and localizes to pressure. Her pupils are 4 mm and reactive. There is no sign of head injury. Capillary glucose is 2.4 mmol/L.

- Temperature: 35.8°C tympanic
- Pulse: 104/minute
- Resp.: 16/minute
- BP: 104/62 mmHg
- O2 sat: 97% on room air
- Weight: 48 kg

#### Q1
**Which of the following is the most appropriate immediate treatment for this patient?**

- A. dextrose 10% 250 mL IV  **(key)**
- B. glucagon 1 mg IM
- C. naloxone 0.4 mg IV
- D. oral glucose gel 15 g
- E. thiamine 100 mg IV

*Explanation:* Alcohol inhibits gluconeogenesis, and adolescents are prone to hypoglycemia after binge drinking. IV dextrose of about 0.5 g/kg treats it, and 250 mL of dextrose 10% is 25 g, about 0.5 g/kg for 48 kg. Glucagon works poorly when alcohol has depleted glycogen stores. Oral glucose is unsafe in a patient who cannot protect her airway. She has no opioid features, and thiamine does not raise glucose.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Yip L. Ethanol. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 76, Ethanol. https://accessemergencymedicine.mhmedical.com/content.aspx?legacysectionid=goldtox11_ch76

#### Q2
*Update:* After dextrose, her glucose is 7.6 mmol/L. Thirty minutes later, she still opens her eyes only to pressure. Serum ethanol is 14 mmol/L.

**Which of the following conclusions is most appropriate at this point?**

- A. Alcohol explains her current state
- B. Another cause must be sought  **(key)**
- C. Hypoglycemia explains her current state
- D. She can sleep it off under observation
- E. She needs a repeat ethanol level only

*Explanation:* Her glucose is now normal, and an ethanol of 14 mmol/L, about 65 mg/dL, causes only mild impairment in most people and does not explain a patient who opens her eyes only to pressure. Another cause, such as a co-ingested sedative, head injury or seizure, must be sought. Hypoglycemia no longer explains her state once corrected. Letting her sleep it off or repeating the ethanol level risks missing a serious cause.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Yip L. Ethanol. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 76, Ethanol. https://accessemergencymedicine.mhmedical.com/content.aspx?legacysectionid=goldtox11_ch76

#### Q3
**Which of the following pieces of information from her friends are most important now?**

Select 2.

- A. Any fall or head strike tonight  **(key)**
- B. Any other drugs at the party  **(key)**
- C. Brand of vodka she drank
- D. How she got to the party
- E. Names of the party hosts
- F. Whether her parents know

*Explanation:* Her decreased level of consciousness is not explained by her ethanol level or her corrected glucose, so her friends should be asked about other drugs at the party, such as sedatives or GHB, and about any fall or blow to the head. Both directly change testing and treatment. The brand of vodka, how she arrived, the hosts' names and whether her parents know do not change her immediate care, although her parents must be contacted.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient. https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html

### loc-40: Drowsy after a household stomach bug

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 88-year-old woman is brought to the emergency department by her husband, who cares for her at home. She has advanced Alzheimer dementia and needs help to eat and drink. For 5 days she has had fever and diarrhea, and her husband has been unwell with the same illness. He says she usually recognizes him, speaks in short sentences and feeds herself with help. Today she is very hard to rouse. She opens her eyes to pressure, moans and localizes to pressure. Her mucous membranes are very dry. Laboratory results: sodium 166 mmol/L, glucose 7.0 mmol/L, urea 24 mmol/L, creatinine 142 umol/L.

- Temperature: 37.9°C oral
- Pulse: 112/minute
- Resp.: 20/minute
- BP: 98/56 mmHg
- O2 sat: 95% on room air
- Weight: 50 kg

#### Q1
**Which of the following details from her husband best establishes that her current state is a change from her baseline?**

- A. He has been unwell with the same illness
- B. She has advanced Alzheimer dementia
- C. She has had diarrhea for 5 days
- D. She needs help to eat and drink
- E. She usually speaks in short sentences  **(key)**

*Explanation:* Her usual ability to speak in short sentences and recognize her husband, compared with moaning only to pressure today, shows a clear decline from baseline. A diagnosis of advanced dementia does not describe what she can normally do. Her diarrhea, her need for help with drinking and her husband's illness explain why she became dehydrated, but they do not describe her baseline mental state.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Adrogue HJ, Madias NE. Hypernatremia. New England Journal of Medicine 2000. https://doi.org/10.1056/NEJM200005183422006

#### Q2
**Which of the following is her approximate free water deficit?**

- A. 2.1 L
- B. 2.8 L
- C. 3.5 L
- D. 3.9 L
- E. 4.2 L  **(key)**

*Explanation:* Total body water in an older woman is about 0.45 x weight, or 0.45 x 50 = 22.5 L. The free water deficit is total body water x (sodium divided by 140, minus 1), which is 22.5 x (166 divided by 140 minus 1) = 22.5 x 0.186, about 4.2 L. Dividing by the current sodium of 166 instead of 140 gives about 3.5 L. Ongoing losses from diarrhea are added to this deficit.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Adrogue HJ, Madias NE. Hypernatremia. New England Journal of Medicine 2000. https://doi.org/10.1056/NEJM200005183422006

#### Q3
**Which of the following is the most appropriate maximum fall in her serum sodium over the first 24 hours?**

- A. 10 mmol/L in 24 hours  **(key)**
- B. 15 mmol/L in 24 hours
- C. 20 mmol/L in 24 hours
- D. 26 mmol/L in 24 hours
- E. 30 mmol/L in 24 hours

*Explanation:* Her hypernatremia developed over days, so her brain cells have adapted, and lowering sodium too fast risks cerebral edema and seizures. A fall of no more than about 10 mmol/L in 24 hours is advised for chronic hypernatremia. Lowering it by 26 mmol/L would return her to 140 mmol/L in one day, which is far too fast. Falls of 15, 20 or 30 mmol/L in 24 hours also exceed this limit.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Adrogue HJ, Madias NE. Hypernatremia. New England Journal of Medicine 2000. https://doi.org/10.1056/NEJM200005183422006

#### Q4
*Update:* She receives 1 L of normal saline, and her BP rises to 118/66 mmHg. She is passing urine.

**Which of the following is the most appropriate fluid to correct her free water deficit after her circulation is restored?**

- A. dextrose 5% in water IV  **(key)**
- B. hypertonic saline 3% IV
- C. normal saline IV
- D. Ringer's lactate IV
- E. sodium bicarbonate 8.4% IV

*Explanation:* Once her circulation is restored, her free water deficit is replaced with a hypotonic fluid such as dextrose 5% in water, given at a rate that keeps her sodium within the daily limit. Normal saline treated her hypovolemia but adds little free water. Ringer's lactate is only slightly hypotonic and corrects the deficit slowly. Hypertonic saline and 8.4% sodium bicarbonate would raise her sodium further.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Adrogue HJ, Madias NE. Hypernatremia. New England Journal of Medicine 2000. https://doi.org/10.1056/NEJM200005183422006

### loc-41: Found slumped in his chair

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 76-year-old man is brought to the emergency department by ambulance at 0715. His wife found him at 0630 slumped in his chair, unable to speak properly. She says he watched the news with her and went to bed at 2300, talking normally. When she woke at 0200, he appeared to be asleep beside her. He has atrial fibrillation and takes apixaban 5 mg twice daily. He opens his eyes to voice, makes incomprehensible sounds and does not follow commands, but localizes with his left hand. He has a right facial droop, right hemiplegia and left gaze deviation. Capillary glucose is 6.9 mmol/L.

- Temperature: 36.7°C oral
- Pulse: 88/minute irregular
- Resp.: 16/minute
- BP: 172/94 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is his time last known well?**

- A. At 2300  **(key)**
- B. At 0200
- C. At 0630
- D. At 0715
- E. Unknown

*Explanation:* The time last known well is the last time he was seen at his neurological baseline, which was 2300, when he went to bed talking normally. Seeing him asleep at 0200 does not confirm that he was normal then. The time he was found, 0630, and his arrival at 0715 are later than symptom onset may have been. The time is known from his wife, so it is not unknown. It sets his eligibility for acute treatment.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

#### Q2
**Which of the following items of history from his wife is most important for acute treatment decisions?**

- A. Date of his last ECG
- B. His childhood illnesses
- C. Name of his cardiologist
- D. Time of his last apixaban dose  **(key)**
- E. Year his arrhythmia began

*Explanation:* Canadian guidance advises against routine thrombolysis in a patient taking a DOAC. The time of his last apixaban dose shows whether drug effect is likely, and it also informs bleeding risk during any procedure. The date of his last ECG, the name of his cardiologist, the year his arrhythmia began and his childhood illnesses do not change acute stroke treatment.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

#### Q3
**Which of the following is the most appropriate imaging now?**

- A. Carotid Doppler ultrasound
- B. CT head with CT angiography  **(key)**
- C. CT head without contrast alone
- D. MRI brain tomorrow morning
- E. Transthoracic echocardiogram

*Explanation:* His right hemiplegia, loss of speech and gaze deviation suggest a large vessel occlusion, and thrombectomy can be offered up to 24 hours after last known well with suitable imaging. Canadian stroke guidelines recommend immediate noncontrast CT with CT angiography from the aortic arch to the vertex for possible thrombectomy candidates. CT alone cannot show the occlusion. Carotid Doppler, echocardiography and MRI tomorrow are for later workup.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

#### Q4
*Update:* CT shows no hemorrhage. CT angiography shows a left M1 occlusion with good collaterals and a small core. His wife says he took apixaban at 2100.

**Which of the following is the most appropriate treatment for this patient?**

- A. Alteplase then thrombectomy
- B. ASA 160 mg PO now
- C. Endovascular thrombectomy  **(key)**
- D. Heparin infusion IV
- E. tenecteplase 0.25 mg/kg IV

*Explanation:* He has a proximal middle cerebral artery occlusion with a small core and good collaterals within 24 hours of last known well, so endovascular thrombectomy is recommended. He is beyond the standard 4.5 hour window from last known well, and Canadian guidance advises against routine thrombolysis in a patient taking a DOAC, here apixaban at 2100, so neither tenecteplase nor alteplase before thrombectomy is appropriate. A heparin infusion does not improve outcome in acute stroke. ASA does not treat a large vessel occlusion.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

### loc-42: Collapsed in the barn

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department. A 58-year-old man is brought in by his son, who found him collapsed in their farm barn beside a leaking container of insecticide 40 minutes ago. He is drooling, has vomited and has soiled himself with urine and stool. His clothing is wet and smells of solvent. He opens his eyes to pressure, makes incomprehensible sounds and withdraws from pressure. His pupils are 1 mm. There are coarse crackles and wheezes in both lungs. He has fasciculations in his thighs. Capillary glucose is 7.8 mmol/L.

- Temperature: 36.6°C oral
- Pulse: 48/minute
- Resp.: 28/minute
- BP: 86/50 mmHg
- O2 sat: 84% on 15 L/minute by non-rebreather mask
- Weight: 90 kg

#### Q1
**Which of the following is the most likely cause of his decreased level of consciousness?**

- A. Carbon monoxide poisoning
- B. Clonidine toxicity
- C. Opioid toxicity
- D. Organophosphate poisoning  **(key)**
- E. Pontine hemorrhage

*Explanation:* Drooling, vomiting, incontinence, bronchorrhea with wheeze, bradycardia and pinpoint pupils form the muscarinic cholinergic toxidrome, and fasciculations add a nicotinic effect. With an insecticide leak this points to organophosphate poisoning. Opioids, clonidine and pontine hemorrhage cause small pupils but not heavy secretions or fasciculations. Carbon monoxide does not cause this pattern.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008. https://doi.org/10.1016/S0140-6736(07)61202-1

#### Q2
**Which of the following immediate actions are most appropriate for this patient?**

Select 3.

- A. atropine 2 mg IV  **(key)**
- B. Decontaminate skin and remove clothes  **(key)**
- C. flumazenil 0.2 mg IV
- D. furosemide 40 mg IV
- E. naloxone 2 mg IV
- F. physostigmine 1 mg IV
- G. Staff protective gloves and gowns  **(key)**
- H. succinylcholine 1.5 mg/kg IV

*Explanation:* Atropine 1 to 3 mg IV, doubled every 5 minutes until the chest is clear, treats the bronchorrhea and bradycardia that threaten his oxygenation. His wet clothing must be removed and his skin washed, with staff wearing gloves and gowns, to stop further absorption and protect staff. Physostigmine is itself a cholinesterase inhibitor. Succinylcholine causes prolonged paralysis in this poisoning. Furosemide does not treat bronchorrhea, and naloxone and flumazenil have no role.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008. https://doi.org/10.1016/S0140-6736(07)61202-1

#### Q3
*Update:* After atropine 2 mg IV, his chest still has crackles and wheeze, and his heart rate is 52/minute.

**Which of the following is the most appropriate endpoint for titrating his atropine?**

- A. Clear chest on auscultation  **(key)**
- B. Heart rate above 120/minute
- C. Pupils fully dilated
- D. Resolution of fasciculations
- E. Return of full alertness

*Explanation:* Atropine is doubled until the chest is clear of crackles and wheeze, with a heart rate above 80/minute, a systolic BP above 80 mmHg, dry axillae and pupils no longer pinpoint. Clearing the bronchorrhea is the key target. A heart rate above 120/minute is not a target, and tachycardia alone does not mean atropine should stop. Fully dilated pupils are not required. Atropine does not reverse the nicotinic effects that cause fasciculations, and alertness is not an atropine endpoint.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008. https://doi.org/10.1016/S0140-6736(07)61202-1

### loc-43: Floppy and sleepy after crying spells

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 9-month-old boy is brought to the emergency department by his mother because he has been unusually floppy and sleepy for 4 hours. Earlier today he had several episodes of crying and drawing up his legs, with vomiting between them. He had a viral illness last week. He has no fever. He is pale and lethargic, opens his eyes only briefly to voice and has a weak cry. His abdomen is soft, with a vague sausage-shaped fullness in the right upper quadrant. His diaper contains a small amount of stool mixed with blood and mucus. Capillary glucose is 4.8 mmol/L.

- Temperature: 37.2°C rectal
- Pulse: 168/minute
- Resp.: 36/minute
- BP: 84/50 mmHg
- O2 sat: 98% on room air
- Weight: 8.6 kg

#### Q1
**Which of the following is the most likely cause of his lethargy?**

- A. Intussusception  **(key)**
- B. Nonaccidental head injury
- C. Pyloric stenosis
- D. Toxic ingestion
- E. Viral gastroenteritis

*Explanation:* Episodes of crying with drawn-up legs, vomiting, a sausage-shaped mass and stool with blood and mucus in a 9-month-old fit intussusception, and lethargy can be its main or only presenting sign. Pyloric stenosis presents at a few weeks of age with nonbilious vomiting. Viral gastroenteritis does not cause a mass or episodic pain with lethargy. Nothing suggests an ingestion or head injury, although both stay on the differential for a lethargic infant.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Applegate KE. Intussusception in children. Evidence-based diagnosis and treatment. Pediatric Radiology 2009. https://doi.org/10.1007/s00247-009-1178-9

#### Q2
**Which of the following is the most appropriate first imaging study?**

- A. Abdominal radiographs
- B. CT abdomen with contrast
- C. CT head without contrast
- D. Ultrasound of the abdomen  **(key)**
- E. Upper GI series with contrast

*Explanation:* Ultrasound is the imaging study of choice for suspected intussusception, with high sensitivity and specificity and no radiation. Plain radiographs can be normal and cannot exclude it. CT exposes him to radiation and is not needed. An upper GI study does not assess the ileocolic region. CT head would be considered only if his lethargy persisted without an abdominal cause.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Applegate KE. Intussusception in children. Evidence-based diagnosis and treatment. Pediatric Radiology 2009. https://doi.org/10.1007/s00247-009-1178-9

#### Q3
*Update:* Ultrasound shows an ileocolic intussusception with a target sign. The surgical team has been called.

**Which of the following is the most appropriate treatment before enema reduction?**

- A. albumin 5% 10 mL/kg IV
- B. dextrose 10% 5 mL/kg IV
- C. packed red cells 10 mL/kg IV
- D. Ringer's lactate 20 mL/kg IV  **(key)**
- E. sodium bicarbonate 1 mmol/kg IV

*Explanation:* His heart rate of 168/minute, pallor and lethargy show compensated shock, so he needs an isotonic crystalloid bolus of 20 mL/kg, or 172 mL, before reduction is attempted. His glucose of 4.8 mmol/L does not need dextrose. His pallor fits shock, and no hemoglobin result shows anemia that would call for red cells. Albumin is not a first-line resuscitation fluid. Bicarbonate does not treat shock.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Applegate KE. Intussusception in children. Evidence-based diagnosis and treatment. Pediatric Radiology 2009. https://doi.org/10.1007/s00247-009-1178-9

### loc-44: Collapsed at a nightclub

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 22-year-old woman is brought to the emergency department by ambulance from a nightclub at 0200. Friends say she had one drink and a small bottle of clear liquid that someone gave her, then collapsed 20 minutes later. She has no medical history. She opens her eyes to pressure, makes no sounds and withdraws from pressure. Her pupils are 3 mm and reactive. She has a gag reflex and is breathing on her own. There is no sign of head injury. Capillary glucose is 5.8 mmol/L.

- Temperature: 35.9°C tympanic
- Pulse: 54/minute
- Resp.: 12/minute
- BP: 102/60 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is the most likely cause of her decreased level of consciousness?**

- A. Gamma-hydroxybutyrate toxicity  **(key)**
- B. Ketamine dissociation
- C. Opioid analgesic toxicity
- D. Serotonin syndrome
- E. Sympathomimetic toxicity

*Explanation:* Sudden deep coma soon after drinking a clear liquid at a nightclub, with a slow heart rate, mild hypothermia and midsize pupils, is typical of gamma-hydroxybutyrate toxicity. Opioid toxicity usually causes pinpoint pupils and a slower breathing rate. Ketamine causes a dissociated state, often with open eyes, nystagmus and tachycardia. Serotonin syndrome and sympathomimetic toxicity cause agitation, tachycardia and hyperthermia rather than coma with bradycardia.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Busardo FP, Jones AW. GHB pharmacology and toxicology. Acute intoxication, concentrations in blood and urine in forensic cases and treatment of the withdrawal syndrome. Current Neuropharmacology 2015. https://doi.org/10.2174/1570159X13666141210215423

#### Q2
**Which of the following is her Glasgow Coma Scale score, with its components?**

- A. GCS 6 (E1 V1 M4)
- B. GCS 7 (E2 V1 M4)  **(key)**
- C. GCS 7 (E2 V2 M3)
- D. GCS 8 (E2 V2 M4)
- E. GCS 9 (E2 V2 M5)

*Explanation:* She opens her eyes to pressure (E2), makes no sounds (V1) and withdraws from pressure (M4), for a GCS of 7. V2 requires moaning or sounds. M3 is abnormal flexion, and M5 is localizing. E1 would mean no eye opening at all. Recording the components with the time lets the team see the rapid recovery expected in this poisoning, or a failure to recover that calls for another cause.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q3
**Which of the following is the most appropriate management while she remains at this level?**

- A. activated charcoal 50 g PO
- B. atropine 0.5 mg IV
- C. flumazenil 0.5 mg IV
- D. physostigmine 2 mg IV
- E. Supportive care and monitoring  **(key)**

*Explanation:* There is no antidote for gamma-hydroxybutyrate, and care is supportive, with close monitoring of her airway, breathing and GCS. Most patients wake within a few hours. Her gag reflex is present and she is breathing adequately, but staff must be ready to support her airway. Physostigmine and flumazenil are not recommended and carry risk. The drug is absorbed quickly and charcoal adds aspiration risk. Atropine is not needed because her BP of 102/60 mmHg shows adequate perfusion.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Busardo FP, Jones AW. GHB pharmacology and toxicology. Acute intoxication, concentrations in blood and urine in forensic cases and treatment of the withdrawal syndrome. Current Neuropharmacology 2015. https://doi.org/10.2174/1570159X13666141210215423

### loc-45: Could not be woken in the cells

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 50-year-old man is brought to the emergency department from the police cells at 0600. He was arrested at 2200 for public intoxication after officers found him staggering outside a bar with a cut on his head. Officers checked him every hour through the cell door and say he was snoring loudly. At 0530 they could not wake him. He opens his eyes to pressure, makes incomprehensible sounds and localizes with his left hand only. His left pupil is 6 mm and sluggish. There is a 2 cm laceration with swelling over the left temple. Capillary glucose is 5.9 mmol/L. Serum ethanol is 11 mmol/L.

- Temperature: 36.3°C oral
- Pulse: 56/minute
- Resp.: 10/minute
- BP: 178/98 mmHg
- O2 sat: 94% on room air

#### Q1
**Which of the following findings argue against alcohol intoxication as the cause of his decreased level of consciousness?**

Select 3.

- A. Arrest for public intoxication
- B. Capillary glucose of 5.9 mmol/L
- C. Dilated left pupil  **(key)**
- D. Ethanol of 11 mmol/L  **(key)**
- E. Localizing with left hand only  **(key)**
- F. Oxygen saturation of 94%
- G. Staggering outside a bar
- H. Temperature of 36.3°C

*Explanation:* An ethanol of 11 mmol/L, about 50 mg/dL, is far too low to cause coma. A dilated, sluggish left pupil and movement of only the left hand are lateralizing signs of a structural lesion, here likely a left-sided hematoma under the temple injury. His arrest and staggering fit intoxication but do not explain his current state. A normal glucose excludes hypoglycemia, and his temperature and saturation do not point either way.

*Key feature:* Decreased level of consciousness 4. Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q2
**Which of the following is the most appropriate investigation once his airway is secured?**

- A. CT head without contrast  **(key)**
- B. Lumbar puncture
- C. Repeat ethanol level in 2 hours
- D. Skull radiographs
- E. Urine toxicology screen

*Explanation:* He has a head injury, a GCS well below 13 and lateralizing signs, so he needs CT head at once and early neurosurgical contact. The Canadian CT Head Rule applies only to patients with a GCS of 13 to 15, so it is not used to decide here. A repeat ethanol level would only delay diagnosis. Lumbar puncture is dangerous with a possible mass lesion. Skull radiographs and urine toxicology do not show intracranial bleeding.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet 2001. https://doi.org/10.1016/S0140-6736(00)04561-X

#### Q3
**Which of the following observation methods would best have detected his deterioration in the cells?**

- A. Checks every 4 hours by a nurse
- B. Hourly checks that he was breathing
- C. Hourly rousal with GCS and pupils  **(key)**
- D. Leaving him to sleep undisturbed
- E. Video monitoring of the cell

*Explanation:* Deterioration after head injury and intoxication is found by rousing the person and scoring the response, which here means hourly GCS and pupil checks. Loud snoring can be a sign of airway obstruction from a falling level of consciousness, so checking that he was breathing was not enough. Video monitoring and leaving him to sleep do not test responsiveness. Checks every 4 hours are too infrequent.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

### loc-46: Very drowsy after a bad night

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old woman is brought to the emergency department by her daughter, who found her very drowsy at 1000. She has taken lorazepam 1 mg at bedtime every night for 15 years. Last night she could not sleep, and her daughter thinks she took several extra tablets. She has hypertension treated with amlodipine. She opens her eyes to voice, speaks slowly with slurred words, knows her name but not the place or date, and obeys commands. Her pupils are 3 mm. Capillary glucose is 6.6 mmol/L. ECG shows sinus rhythm with a QRS duration of 88 ms.

- Temperature: 36.4°C oral
- Pulse: 72/minute
- Resp.: 14/minute
- BP: 128/70 mmHg
- O2 sat: 95% on room air

#### Q1
**Which of the following is the most appropriate management for this patient?**

- A. flumazenil 0.2 mg IV
- B. flumazenil 1 mg IV
- C. Monitored supportive care  **(key)**
- D. naloxone 0.4 mg IV
- E. physostigmine 1 mg IV

*Explanation:* She is breathing adequately, with a respiratory rate of 14/minute and saturation of 95%, and obeys commands, so monitored supportive care is enough. After 15 years of nightly lorazepam, flumazenil can precipitate acute withdrawal and seizures, and a systematic review found more serious adverse events with flumazenil than placebo. She has no opioid features to warrant naloxone and no anticholinergic features to warrant physostigmine.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Penninga EI, Graudal N, Ladekarl MB, Jurgens G. Adverse events associated with flumazenil treatment for the management of suspected benzodiazepine intoxication. A systematic review with meta-analyses of randomised trials. Basic and Clinical Pharmacology and Toxicology 2016. https://doi.org/10.1111/bcpt.12434

#### Q2
**Which of the following is her Glasgow Coma Scale score, with its components?**

- A. GCS 13 (E3 V4 M6)  **(key)**
- B. GCS 13 (E4 V3 M6)
- C. GCS 14 (E3 V5 M6)
- D. GCS 14 (E4 V4 M6)
- E. GCS 15 (E4 V5 M6)

*Explanation:* She opens her eyes to voice (E3), is confused because she knows her name but not the place or date (V4), and obeys commands (M6), for a GCS of 13. Slurred speech does not lower the verbal score when the content can be judged. V5 requires orientation to person, place and time. E4 would mean her eyes are open spontaneously.

*Key feature:* Decreased level of consciousness 5. Document and trend consciousness with descriptive terms and a scored scale such as the GCS.

*Source:* Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6

#### Q3
**Which of the following items of collateral history are most important to obtain from her daughter?**

Select 2.

- A. Count of lorazepam tablets left  **(key)**
- B. Date of her last eye exam
- C. Her childhood illnesses
- D. Her dietary preferences
- E. Her usual cognition and alertness  **(key)**
- F. Name of her dentist

*Explanation:* A count of the remaining lorazepam tablets estimates how much she took and how long her sedation may last. Her usual cognition and alertness set the baseline for judging recovery, because confusion in an older adult may be new or longstanding. Her eye examinations, dentist, diet and childhood illnesses do not change immediate management.

*Key feature:* Decreased level of consciousness 3. Seek collateral and prehospital history to establish how the patient's mental status differs from usual.

*Source:* Penninga EI, Graudal N, Ladekarl MB, Jurgens G. Adverse events associated with flumazenil treatment for the management of suspected benzodiazepine intoxication. A systematic review with meta-analyses of randomised trials. Basic and Clinical Pharmacology and Toxicology 2016. https://doi.org/10.1111/bcpt.12434

### loc-47: Hard to wake after two days of vomiting

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 20-month-old boy is brought to the emergency department by his parents because he was hard to wake this morning. He has had vomiting and diarrhea for 2 days and has eaten almost nothing since yesterday. He is otherwise healthy, and his parents say there are no medications in their home. He opens his eyes to voice, cries weakly and localizes to pressure. His mucous membranes are dry. There are no signs of injury. Capillary glucose is 2.2 mmol/L. A nurse is placing an IV.

- Temperature: 36.9°C rectal
- Pulse: 150/minute
- Resp.: 30/minute
- BP: 92/58 mmHg
- O2 sat: 98% on room air
- Weight: 11 kg

#### Q1
**Which of the following should be done at the time of IV placement, before dextrose is given?**

- A. Draw a critical blood sample  **(key)**
- B. Glucose tolerance test
- C. Head CT without contrast
- D. Lumbar puncture
- E. Urine culture by bag

*Explanation:* His glucose of 2.2 mmol/L is the moment to find its cause, and the Pediatric Endocrine Society recommends drawing a critical blood sample during hypoglycemia, including beta-hydroxybutyrate, insulin, cortisol and other hormones, when this does not delay treatment. It separates ketotic hypoglycemia from hyperinsulinism and metabolic disorders. A glucose tolerance test is not used for hypoglycemia. He has no fever and no sign of head injury to justify lumbar puncture or CT, and a bag urine culture is unreliable.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Thornton PS, Stanley CA, De Leon DD, et al. Recommendations from the Pediatric Endocrine Society for evaluation and management of persistent hypoglycemia in neonates, infants, and children. Journal of Pediatrics 2015. https://doi.org/10.1016/j.jpeds.2015.03.057

#### Q2
*Update:* He is given IV dextrose and becomes alert. The critical sample shows beta-hydroxybutyrate 4.8 mmol/L, an undetectable insulin level and cortisol 640 nmol/L.

**Which of the following is the most likely diagnosis for this child?**

- A. Adrenal insufficiency
- B. Congenital hyperinsulinism
- C. Fatty acid oxidation disorder
- D. Ketotic hypoglycemia  **(key)**
- E. Sulfonylurea ingestion

*Explanation:* A high beta-hydroxybutyrate with an undetectable insulin shows a normal fasting response, which in a toddler with poor intake during an illness is ketotic hypoglycemia. Hyperinsulinism and sulfonylurea ingestion cause hypoglycemia with detectable insulin and low ketones, and his parents report no medications in the home. Fatty acid oxidation disorders cause hypoglycemia with inappropriately low ketones. A cortisol of 640 nmol/L during stress argues against adrenal insufficiency.

*Key feature:* Decreased level of consciousness 1. Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins.

*Source:* Thornton PS, Stanley CA, De Leon DD, et al. Recommendations from the Pediatric Endocrine Society for evaluation and management of persistent hypoglycemia in neonates, infants, and children. Journal of Pediatrics 2015. https://doi.org/10.1016/j.jpeds.2015.03.057

#### Q3
**Which of the following is the most appropriate ongoing IV fluid for this child?**

- A. dextrose 10% in water IV
- B. dextrose 5% in water IV
- C. normal saline IV alone
- D. normal saline with 5% dextrose IV  **(key)**
- E. Ringer's lactate IV alone

*Explanation:* He needs dextrose to prevent recurrent hypoglycemia while he cannot eat, in an isotonic fluid to reduce the risk of hyponatremia. The American Academy of Pediatrics recommends isotonic maintenance fluids with appropriate potassium and dextrose. Dextrose in water alone is hypotonic and risks hyponatremia. Normal saline or Ringer's lactate alone gives no glucose, so hypoglycemia could recur.

*Key feature:* Decreased level of consciousness 2. Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension.

*Source:* Feld LG, Neuspiel DR, Foster BA, et al. Clinical practice guideline. Maintenance intravenous fluids in children. American Academy of Pediatrics. Pediatrics 2018. https://doi.org/10.1542/peds.2018-3083
