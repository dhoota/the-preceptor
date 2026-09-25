# s44: Multiple patients

20 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s44 CTAS 2025 revision unchecked (16 q1, 29 q1 q3, 34 q1 q2). 24 q2 SOFA 3 not reachable. 20 q4 SALT rescue breaths. s30 cqi-18 q2 apixaban 'daily' distractor.
- s35 ems-35 q3 IM field TXA and 8 h infusion. ems-27 q4 pediatric pralidoxime dose. s44 multiple-patients-24 SOFA breathing rule before ventilation.
- multiple-patients-22 q1 is mapped to KF4 (activate disaster plans), but it tests cohorting. No option offers activating the hospital's external disaster plan. *(samps-final-check-2.md)*
- Some keys are standard steps that already appear elsewhere in the bank, such as ultrasound first for a likely DVT or apixaban 10 mg twice daily. In each case the scenario and the deciding feature are new. *(samps-replace-s33-s44-s45-s46.md)*
- multiple-patients-35 q3 simplifies the AACT fomepizole criteria to "suspected ingestion with an osmolal gap above 10 or a metabolic acidosis". The full text could not be opened. Please confirm, and confirm that you would not give fomepizole to the well 29-year-old with an osmolal gap of 3 about a day after one drink. *(samps-replace-s33-s44-s45-s46.md)*
- multiple-patients-35 q4 (call in a second physician) keys the same action as multiple-patients-18 q4 and several s13 items. It is the core of key feature 3 and was kept. *(samps-replace-s33-s44-s45-s46.md)*
- Mock mode cues that remain and seem acceptable: dvt-pe-43 q4 opens with "The first imaging test finds no thrombus", which implies imaging was needed (q2). dvt-pe-27 q4 offers a heparin bolus, which hints at the q3 key. multiple-patients-35 q1 has two options for the same patient ("the 44-year-old man" and "the patient with the lowest pH"). *(samps-replace-s33-s44-s45-s46.md)*
- ems-24 q2 (stridor and hoarse voice transported first) repeats s44 multiple-patients-22 q4 (the same patient assessed first). Left in place, flagged. *(samps-s35-lensA.md)*
- ems-16 q4 (termination exclusions such as hypothermia) overlaps s09 ems-04 q3. ems-18 q1 (capacity decides refusal) overlaps s09 ems-05 q1. ems-21 q4 (last known well, not time found) overlaps s09 ems-02 q2. ems-28 q3 (peripheral norepinephrine rather than delay for a central line) overlaps s50 shock. ems-33 q1 and q3 (scene GCS and pupils known only to the crew) overlap s09 ems-03 q3. ems-27 q4 partly overlaps s44 multiple-patients-22 q2. Each adds a province-specific or transfer-specific angle, so I flagged these rather than rewriting them. *(samps-s35-lensA.md)*
- CTAS 2025. The current CTAS is the 2025 revision (Hall et al, CJEM 2025). Every CTAS key in this batch follows 2016, 2008 and 2004. The 2025 booklet appears to restructure temperature and frailty modifiers. A physician with access should check 16 q1 (frailty), 29 q1 and q3 (heat), 34 q1 and q2 (fever age bands, 3 to 18 months), and 34 q2 (immunocompromised threshold). If 2025 differs, either rekey or add "Using CTAS 2016" to the affected stems. *(samps-s44-lensA.md)*
- multiple-patients-24 q2. A SOFA of 3 for an unventilated man with isolated respiratory failure is higher than SOFA allows. Respiratory scores of 3 and 4 need respiratory support, so his score before intubation is at most 2. The key does not change. Consider changing 3 to 2 in the update and option. Low confidence. *(samps-s44-lensA.md)*
- multiple-patients-20 q4 (new). SALT's two rescue breaths for an apneic child with a pulse is the published rule. A physician may prefer to confirm this is taught in Canadian disaster courses. *(samps-s44-lensA.md)*
- The overlap flags above, especially multiple-patients-22 q1 and q2, multiple-patients-33 q3 and multiple-patients-35 q1 and q2. Decide whether to rebuild or keep. *(samps-s44-lensA.md)*
- The review extras multiple-patients-36 and multiple-patients-37 should be discarded as duplicates. *(samps-s44-lensA.md)*
- multiple-patients-36 and multiple-patients-37 (review-extra) are verbatim copies of multiple-patients-22 and multiple-patients-29, apart from the two planted defects fixed above. They add no new content and would fail the near duplicate stem test if loaded. Recommend they are not added to the bank. *(samps-s44-lensB.md)*
- multiple-patients-22 q2 and q3 teach points close to s35: q3 (lifesaving care during decontamination, not after) overlaps ems-27 q2 (decontamination alongside antidotes) and ems-25 q1 (lifesaving care before formal decontamination). q2 (activate the chemical plan with an outside decontamination area before arrivals) overlaps ems-25 q3 and ems-27 q4. These s35 items were not among those changed in the s35 rebuild, and the scenes differ (hospital versus scene direction). Flagged for a decision, low confidence. *(samps-s44-lensB.md)*
- multiple-patients-24: pandemic protocols vary in how they score the respiratory component of SOFA before ventilation (some use SpO2 to FiO2 ratios). The key holds for any value up to 7. A physician may prefer to state the scoring rule in the stem. *(samps-s44-lensB.md)*

Review reports: docs/reviews/writer-s44.md, samps-s44-lensA.md, samps-s44-lensB.md

## SAMPs

### multiple-patients-16: Four arrivals at the triage desk

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 86-year-old woman is brought to the emergency department by ambulance from her long term care home after she slid from her wheelchair onto her buttocks. She uses a wheelchair at baseline and has moderate dementia. She has type 2 diabetes treated with gliclazide. She reports a left hip ache rated 2 out of 10. The hip has no deformity and a full, painless passive range of motion. The triage nurse asks you to help assign CTAS levels for her and three other patients who arrived within 5 minutes. The vital signs listed are hers.

- Temperature: 36.7°C oral
- Pulse: 76/minute
- Resp.: 16/minute
- BP: 148/82 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following CTAS levels is most appropriate for this woman at triage?**

- A. CTAS level 1
- B. CTAS level 2
- C. CTAS level 3  **(key)**
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* Her wheelchair use, dementia and age of 86 each meet the 2016 CTAS frailty modifier, which up-triages to level 3. Without it she would sit at level 5. A slide from a wheelchair is a low risk mechanism, her vital signs are normal and acute peripheral pain of 2 out of 10 maps to level 5. Level 4 or 5 leaves a frail woman exposed to delirium, dehydration and pressure injury during a long wait. Level 2 needs abnormal vital signs, severe central pain or a high risk mechanism, and she has none of these.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q2
*Update:* A 56-year-old man was sent from a pharmacy after two readings of 228/124 mmHg. He has had a headache and nausea for 3 hours. He has no chest pain, weakness or visual change.

**Which of the following CTAS levels is most appropriate for this man at triage?**

- A. CTAS level 1
- B. CTAS level 2  **(key)**
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* A systolic BP above 220 mmHg or a diastolic BP above 130 mmHg with any symptom is level 2 under the CTAS hypertension modifier. His systolic of 228 mmHg with headache and nausea meets it. The same reading with no symptoms would be level 3, which is the common under-triage here. Level 1 needs shock, severe respiratory distress or a GCS of 9 or less. Levels 4 and 5 apply only to lower readings or to patients with no modifier at all.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q3
*Update:* The woman from long term care waits at her assigned level. The nurse asks which new findings at reassessment would move her up to level 2.

**Which of the following reassessment findings would each raise her CTAS level to 2?**

Select 3.

- A. BP 204/100 mmHg without symptoms
- B. Capillary glucose 2.6 mmol/L with sweating  **(key)**
- C. Capillary glucose 16 mmol/L without symptoms
- D. GCS 12 with new confusion  **(key)**
- E. Hip pain rising to 5 out of 10
- F. O2 sat 93% on room air
- G. O2 sat 91% with increased work of breathing  **(key)**
- H. Oral temperature 37.9°C

*Explanation:* A glucose below 3 mmol/L with sweating or confusion in a patient with diabetes is level 2, and gliclazide makes it likely in her. A GCS of 10 to 13 is level 2, and 12 with new confusion qualifies. Moderate respiratory distress with O2 sat below 92% is level 2. An O2 sat of 92 to 94% is level 3. A glucose of 16 mmol/L is below the 18 mmol/L threshold. A BP of 204/100 mmHg without symptoms is level 4. Peripheral pain of 5 out of 10 maps to level 4, and 37.9°C does not meet the CTAS fever modifier.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q4
*Update:* No stretcher is free for at least an hour. The man with severe hypertension will wait in a chair near the triage desk.

**Which of the following reassessment intervals does CTAS recommend for this man while he waits?**

- A. Continuous nursing care
- B. Every 15 minutes  **(key)**
- C. Every 30 minutes
- D. Every 60 minutes
- E. Every 120 minutes

*Explanation:* He is level 2, and CTAS recommends that level 2 patients be reassessed every 15 minutes while they wait. The interval is 30 minutes for level 3, 60 minutes for level 4 and 120 minutes for level 5. Continuous nursing care is the standard for level 1. Each reassessment can assign a new reassessment level, so a change in his symptoms, such as chest pain or weakness, moves him up the queue.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

### multiple-patients-17: No stretcher for a stable patient

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 19-year-old man is brought to the emergency department by ambulance after a frontal collision at about 70 km/h. He was an unrestrained front seat passenger. He walked at the scene. He reports soreness over the left lower ribs. He has no neck pain, no midline spinal tenderness and no other complaint. He is alert and speaks in full sentences. The left lower ribs are tender, and the abdomen is soft. The department is full, with 14 patients in the waiting room and no stretcher free. The triage nurse assigns CTAS level 2 for the mechanism.

- Temperature: 36.9°C oral
- Pulse: 92/minute
- Resp.: 18/minute
- BP: 128/76 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following is the most appropriate place for him to wait for physician assessment?**

- A. Chair in the main waiting room
- B. Internal waiting area in view of a nurse  **(key)**
- C. Resuscitation bay held open for him
- D. Stretcher vacated by a level 3 patient in pain
- E. Triage hallway until a CT slot opens

*Explanation:* An unrestrained occupant in a collision above 40 km/h meets a high risk mechanism, yet his vital signs are normal. CTAS 2016 calls this a high risk rather than high acuity patient. He should not displace a lower level patient in more distress. He should wait in an internal waiting area or in close line of sight so a nurse sees any deterioration. The main waiting room is out of view. Holding the resuscitation bay blocks it for a patient in shock. A hallway spot tied to CT sets his place by a test he may not need.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q2
*Update:* Fifty minutes later the nurse reassesses him. He is pale and now has left shoulder tip pain. Pulse 118/minute, BP 96/60 mmHg.

**Which of the following is the most appropriate next step for this patient?**

- A. Bedside FAST when the physician is free
- B. CT of the abdomen from the waiting area
- C. Immediate transfer to a resuscitation bay  **(key)**
- D. Oral analgesia and reassessment in 30 minutes
- E. Repeat vital signs in 15 minutes

*Explanation:* Pallor, a pulse of 118/minute and a BP of 96/60 mmHg after rib trauma, with new shoulder tip pain, point to splenic bleeding with hemodynamic compromise. That is at least CTAS level 2 on reassessment, and an ongoing bleed can reach shock within minutes. He needs a resuscitation bay, a physician and blood now, even if another patient must move. Waiting for a free physician or for repeat vital signs lets shock progress. Sending an unstable patient to CT from a chair puts him where resuscitation is hardest. Analgesia alone treats the symptom and ignores the hemodynamics.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q3
**Which of the following describes how his triage record should be handled after this change?**

- A. Keep the initial level, add a reassessment level  **(key)**
- B. Overwrite the initial level with level 1
- C. Replace the triage record with the physician note
- D. Start a new triage record for a new visit
- E. No record change once he is in a bay

*Explanation:* CTAS keeps the initial triage level unchanged, because it reflects the information the nurse had at first contact. A new reassessment acuity level is recorded beside it with the time and the action taken. This shows how his acuity changed and supports later review of waiting room safety. Overwriting the first level hides the change. A new visit record splits one episode of care. Leaving no record loses the timing of the deterioration, and the physician note does not replace the nursing record.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q4
*Update:* In the resuscitation bay FAST shows free fluid in the left upper quadrant. BP is 88/54 mmHg after 1 L of crystalloid. The general surgeon is finishing a case in the operating room.

**Which of the following is the most appropriate next step in coordinating his care?**

- A. Admit to the ICU for serial hemoglobin
- B. CT of the abdomen before calling the surgeon
- C. Notify the surgeon and OR charge nurse now  **(key)**
- D. Page surgery once the current case ends
- E. Repeat the FAST in 15 minutes

*Explanation:* His BP fell despite 1 L of crystalloid and FAST shows free fluid, so he needs an operation soon. The surgeon and the OR charge nurse can plan the next room and staff only if they know now. A call is short and does not pull the surgeon from the case. Waiting for the case to end loses planning time. CT is unsafe in a patient with a BP of 88/54 mmHg. Serial hemoglobin in the ICU or a repeat FAST delays definitive control of the bleeding.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

### multiple-patients-18: Collapse in the waiting room

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working overnight as the only physician in a community hospital emergency department with four nurses and a respiratory therapist. A 64-year-old man collapses in the waiting room. He is pulseless, and the monitor shows ventricular fibrillation. At the same moment a 17-year-old girl is brought in by her mother 15 minutes after eating a cookie that contained peanuts. She has a known peanut allergy, takes no regular medications and did not use her autoinjector. She has hives, lip swelling and wheeze, and she has vomited twice. The vital signs listed are hers.

- Pulse: 132/minute
- Resp.: 28/minute
- BP: 84/50 mmHg
- O2 sat: 91% on room air
- Weight: 58 kg

#### Q1
**Which of the following should you order first for the girl as you leave to lead the man's resuscitation?**

- A. cetirizine 10 mg PO
- B. diphenhydramine 50 mg IV
- C. epinephrine 0.5 mg IM  **(key)**
- D. methylprednisolone 125 mg IV
- E. salbutamol 5 mg by nebulizer

*Explanation:* Skin and airway involvement with a BP of 84/50 mmHg after a known allergen is anaphylaxis with shock. IM epinephrine is the one drug that treats it, and a nurse can give it within a minute on a verbal order. The dose is 0.01 mg/kg to a maximum of 0.5 mg, and 0.01 x 58 kg is 0.58 mg, so she gets 0.5 mg. Antihistamines treat hives and itch but not airway swelling or shock. Methylprednisolone acts over hours. Salbutamol helps wheeze only and leaves the hypotension untreated.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020. https://pubmed.ncbi.nlm.nih.gov/33204386/

#### Q2
**Which of the following tasks should you keep for yourself during the man's resuscitation?**

- A. Bag mask ventilation
- B. Chest compressions
- C. Defibrillator operation
- D. IV line insertion
- E. Team leadership  **(key)**

*Explanation:* As the only physician you are most useful as the team leader, standing back from hands-on work to track rhythm checks, shocks, drugs and time. Nurses trained in advanced life support can defibrillate, compress and place the IV line. The respiratory therapist is best placed to manage bag mask ventilation. A leader who takes a hands-on task loses the overview. That makes it harder to notice when the girl's nurse needs a decision from you.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018. https://pubmed.ncbi.nlm.nih.gov/29132571/

#### Q3
*Update:* After two shocks and 4 minutes of CPR the man has return of spontaneous circulation. The girl's nurse reports BP 78/46 mmHg and O2 sat 90% on oxygen, 5 minutes after the first dose.

**Which of the following is the most appropriate next drug for the girl?**

- A. diphenhydramine 50 mg IV
- B. epinephrine 0.5 mg IM  **(key)**
- C. glucagon 1 mg IV
- D. methylprednisolone 125 mg IV
- E. vasopressin 40 units IV

*Explanation:* Her BP has fallen to 78/46 mmHg 5 minutes after one dose, so she needs a second dose of IM epinephrine now. Repeat dosing every 5 to 15 minutes is standard, with an IV fluid bolus and an epinephrine infusion if shock persists. Glucagon is for anaphylaxis resistant to epinephrine in a patient taking a beta blocker, and she takes none. Vasopressin is a later rescue drug. Diphenhydramine and methylprednisolone do not reverse shock.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020. https://pubmed.ncbi.nlm.nih.gov/33204386/

#### Q4
*Update:* The man is intubated and on a norepinephrine infusion. His ECG shows no ST elevation. The girl's BP is 104/62 mmHg after a second dose and a fluid bolus. Six patients wait in triage, two at CTAS level 2.

**Which of the following calls is most important to make now?**

- A. Ask the internist to admit both patients
- B. Call cardiology for follow up tomorrow
- C. Divert incoming ambulances elsewhere
- D. Page the nursing supervisor to close triage
- E. Request the backup physician to come in  **(key)**

*Explanation:* Two patients still need close physician care and two level 2 patients are waiting, which is more than one physician can safely cover. A backup emergency physician can take over the waiting patients or one of the sick ones within the hour. The internist may admit later but will not run the department. Diverting ambulances does not help the patients already here. Triage cannot be closed, because new arrivals still need to be seen and sorted. Cardiology follow up does nothing for the next hour.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018. https://pubmed.ncbi.nlm.nih.gov/29132571/

### multiple-patients-19: Children from a collapsed roof

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department in Manitoba when the roof of a daycare collapses under heavy snow 4 km away. Parents and passers-by bring 11 children by car before any ambulance arrives. The hospital disaster plan uses JumpSTART at the entrance for young children, and you are the triage physician. The first child is a 3-year-old boy carried in by a neighbour. He cannot stand because his right thigh is swollen and deformed. He cries for his mother and answers to his name. His radial pulse is easily felt. The vital signs listed are his.

- Pulse: 148/minute
- Resp.: 34/minute
- O2 sat: 96% on room air

#### Q1
**Which of the following is the most appropriate JumpSTART category for this boy?**

- A. Deceased, black
- B. Delayed, yellow  **(key)**
- C. Expectant, grey
- D. Immediate, red
- E. Minor, green

*Explanation:* He cannot walk, so JumpSTART goes on to physiology. A respiratory rate of 34/minute is inside the 15 to 45 range. A palpable peripheral pulse passes the perfusion step. He is alert on the AVPU scale. Passing every step while unable to walk makes him delayed, yellow. His femur fracture needs care soon but is not an immediate threat on these findings. Grey expectant belongs to SALT, not JumpSTART. Minor, green is for children who walk or for infants without significant external injury.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Romig LE. Pediatric triage. A system to JumpSTART your triage of young patients at MCIs. JEMS. 2002. https://pubmed.ncbi.nlm.nih.gov/12141119/

#### Q2
*Update:* A 7-month-old boy is carried in by his father. He cries, settles in his father's arms and follows faces. Respiratory rate 40/minute. Brachial pulse strong. A small forehead abrasion is his only injury.

**Which of the following is the most appropriate JumpSTART category for this infant?**

- A. Deceased, black
- B. Delayed, yellow
- C. Expectant, grey
- D. Immediate, red
- E. Minor, green  **(key)**

*Explanation:* An infant who cannot yet walk is run through the JumpSTART physiology steps first. A respiratory rate of 40/minute is within 15 to 45, his pulse is palpable and he is alert. A child who meets these delayed criteria but has no significant external injury is tagged minor, green. Yellow is kept for infants with significant injuries such as deep wounds, severe bleeding, burns or a distended abdomen. Not walking does not by itself make an infant yellow.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Romig LE. Pediatric triage. A system to JumpSTART your triage of young patients at MCIs. JEMS. 2002. https://pubmed.ncbi.nlm.nih.gov/12141119/

#### Q3
*Update:* Several walking adults carried young children straight into the minor treatment area before anyone triaged them.

**Which of the following is the most appropriate step for these carried children?**

- A. Assess them first once in the minor area  **(key)**
- B. Leave them with the adult who carried them
- C. Reassess them after all yellow children
- D. Tag them green because their carrier walked
- E. Treat them last as the least injured group

*Explanation:* Children carried into the minor area by walking victims skipped primary triage. JumpSTART asks that they be the first patients assessed by the clinicians there. Some will be infants who cannot walk yet, and others may have injuries that stopped them walking. Assuming they are green because their carrier walked, or treating them last, can hide an immediate patient. Leaving them with a bystander provides no assessment.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Romig LE. Pediatric triage. A system to JumpSTART your triage of young patients at MCIs. JEMS. 2002. https://pubmed.ncbi.nlm.nih.gov/12141119/

#### Q4
**Which of the following is the most appropriate hospital step now that 11 children have arrived without EMS?**

- A. Ask parents to take minor cases to clinics
- B. Divert all incoming ambulances elsewhere
- C. Start the external disaster plan now  **(key)**
- D. Transfer each red child as soon as they arrive
- E. Wait for EMS to confirm the size of the event

*Explanation:* Eleven children arriving by private car is already a mass casualty load for a community hospital, so the external disaster plan starts now. Disaster research shows that most casualties bypass EMS and go to the closest hospital, often before any official notice. Waiting for EMS confirmation loses time to call in staff and open space. Diversion does not reduce the self-presenting load. Sending minor cases to clinics skips assessment. Unstabilized transfer moves the sickest children away from care.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Auf der Heide E. The importance of evidence-based disaster planning. Ann Emerg Med. 2006. https://pubmed.ncbi.nlm.nih.gov/16387217/

### multiple-patients-20: Grandstand collapse at a rodeo

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a regional hospital emergency department in Alberta when a grandstand collapses at a rodeo 2 km away. The hospital disaster plan uses SALT triage at the ambulance entrance, and you are the triage physician. Ambulances and private vehicles bring 22 patients in the first 20 minutes. The first patient on a stretcher is a 58-year-old man lying still. Bright red blood spurts from a wound in his right thigh. He groans but does not follow commands. The vital signs listed are his.

- Pulse: 134/minute
- Resp.: 28/minute
- O2 sat: 93% on room air

#### Q1
*Update:* A tourniquet stops the bleeding from his thigh. He still groans and does not follow commands or move purposefully. His radial pulse is weak but present.

**Which of the following SALT categories is most appropriate for this man now?**

- A. Dead, black
- B. Delayed, yellow
- C. Expectant, grey
- D. Immediate, red  **(key)**
- E. Minimal, green

*Explanation:* SALT assigns a category only after the lifesaving interventions. With his hemorrhage now controlled, he still fails one of the four checks, because he neither obeys commands nor moves purposefully. A patient who fails any check and is likely to survive with the resources available is immediate. A single thigh wound with the bleeding controlled and a palpable pulse is survivable, so he is not expectant. The tourniquet does not downgrade him to delayed, because his mental status may reflect shock or a head injury. He is breathing, so dead does not apply, and minimal needs all four checks passed with minor injuries only.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* American College of Emergency Physicians, American College of Surgeons Committee on Trauma, American Trauma Society, National Association of EMS Physicians, et al. SALT mass casualty triage. Concept endorsed. Disaster Med Public Health Prep. 2008. https://doi.org/10.1097/DMP.0b013e31818d191e

#### Q2
**Which of the following findings, each on its own, fails a SALT individual assessment check?**

Select 4.

- A. Absent peripheral pulse  **(key)**
- B. Capillary refill of 3 seconds
- C. Heart rate of 128/minute
- D. Neither obeys commands nor moves purposefully  **(key)**
- E. Respiratory distress  **(key)**
- F. Respiratory rate of 32/minute
- G. Systolic BP of 88 mmHg
- H. Uncontrolled major hemorrhage  **(key)**

*Explanation:* SALT individual assessment asks four questions. Does the patient obey commands or move purposefully, is there a peripheral pulse, is the patient free of respiratory distress and is major hemorrhage controlled? A no to any one fails a check. SALT uses no cut-off for respiratory rate, capillary refill, heart rate or BP. A rate of 32/minute or a refill of 3 seconds would make an adult immediate under START, but SALT judges breathing by distress and perfusion by a palpable pulse. Tachycardia and a low cuff pressure matter once treatment begins, but they do not set the SALT category.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* American College of Emergency Physicians, American College of Surgeons Committee on Trauma, American Trauma Society, National Association of EMS Physicians, et al. SALT mass casualty triage. Concept endorsed. Disaster Med Public Health Prep. 2008. https://doi.org/10.1097/DMP.0b013e31818d191e

#### Q3
*Update:* A 35-year-old woman obeys commands, has a radial pulse and breathes comfortably. She has an open fracture of the left tibia, and a pressure dressing has controlled the bleeding.

**Which of the following SALT categories is most appropriate for this woman?**

- A. Dead, black
- B. Delayed, yellow  **(key)**
- C. Expectant, grey
- D. Immediate, red
- E. Minimal, green

*Explanation:* She passes all four checks. She obeys commands, has a peripheral pulse, has no respiratory distress and her bleeding is controlled. SALT then asks whether her injuries are minor only. An open tibial fracture needs antibiotics, washout and fixation, so it is more than minor, and she is delayed, yellow. Minimal is kept for minor injuries, such as abrasions or a sprained ankle, that can wait without raising the risk of death. Immediate and expectant both need a failed check. She is breathing, so dead does not apply.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* American College of Emergency Physicians, American College of Surgeons Committee on Trauma, American Trauma Society, National Association of EMS Physicians, et al. SALT mass casualty triage. Concept endorsed. Disaster Med Public Health Prep. 2008. https://doi.org/10.1097/DMP.0b013e31818d191e

#### Q4
*Update:* An hour after the collapse, four patients tagged expectant, grey, lie in a holding area. Every immediate and delayed patient is now under care, and staff called in from home have formed two free trauma teams.

**Which of the following is the most appropriate plan for the patients tagged expectant?**

- A. Ask their families to decide on care
- B. Keep them in holding until the event ends
- C. Mark them all as dead to clear the area
- D. Move them all to a palliative care unit
- E. Reassess each one now for immediate care  **(key)**

*Explanation:* In SALT, expectant means unlikely to survive with the resources available, so the category depends on resources as well as injuries. Every immediate and delayed patient is now under care and two trauma teams are free, so resources have grown. SALT asks that expectant patients be reassessed and treated when resources permit, and any who could now survive move to immediate care. Keeping them in holding until the event ends ignores that change. Marking them as dead is false for patients who are still breathing. Moving them all to palliative care, or asking families to decide, replaces the reassessment the category requires.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* American College of Emergency Physicians, American College of Surgeons Committee on Trauma, American Trauma Society, National Association of EMS Physicians, et al. SALT mass casualty triage. Concept endorsed. Disaster Med Public Health Prep. 2008. https://doi.org/10.1097/DMP.0b013e31818d191e

### multiple-patients-21: The first wave after an explosion

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 27-year-old woman walks into the emergency department 12 minutes after an explosion at a subway station 1 km away. She has ringing in both ears and small cuts on both forearms. She is breathing comfortably and has no chest or abdominal pain. She is the first of 9 walking patients who arrive by taxi and on foot within 10 minutes. EMS reports at least 20 more casualties, some critical, arriving over the next hour. The hospital has declared an external disaster. The vital signs listed are hers.

- Pulse: 104/minute
- Resp.: 18/minute
- BP: 132/78 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following principles should guide where you place these first walking patients?**

- A. Discharge them before any examination
- B. Fill resuscitation bays in order of arrival
- C. Image every patient before EMS arrives
- D. Reserve resuscitation bays for later arrivals  **(key)**
- E. Treat each one fully before ambulances arrive

*Explanation:* The first patients after an explosion are usually the less injured who can walk or find a ride. The most severely injured often arrive later by EMS. Filling resuscitation bays with the first wave leaves no space for the critical patients EMS has warned of. Walking patients like her go to a minor treatment area for assessment. Imaging everyone and completing full care now uses staff and CT time the later patients will need. Discharge before any examination can miss blast or penetrating injury.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Auf der Heide E. The importance of evidence-based disaster planning. Ann Emerg Med. 2006. https://pubmed.ncbi.nlm.nih.gov/16387217/

#### Q2
**Which of the following is the main harm of overtriage during this mass casualty incident?**

- A. Delayed care for the critically injured  **(key)**
- B. Higher rates of missed minor fractures
- C. Increased medicolegal risk for the team
- D. Longer stays for walking patients
- E. More radiation from extra imaging

*Explanation:* In reviews of terrorist bombings, the rate of overtriage tracked the death rate among critically injured survivors. Every patient with minor injuries placed in a critical care space uses staff, beds and OR time that the few truly critical patients need. Undertriage harms the individual, but overtriage harms the whole group. Longer stays, missed minor fractures, radiation and legal risk are real costs, but they are not what raises mortality in a mass casualty incident.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Frykberg ER. Medical management of disasters and mass casualties from terrorist bombings. How can we cope? J Trauma. 2002. https://pubmed.ncbi.nlm.nih.gov/12169923/

#### Q3
**Which of the following people should serve as the triage officer at the ambulance entrance?**

- A. First paramedic crew to arrive at the hospital
- B. Hospital incident commander
- C. Junior resident on shift
- D. Senior emergency or trauma physician  **(key)**
- E. Unit clerk with a triage checklist

*Explanation:* Triage in a trauma mass casualty incident is a high stakes judgment, so it should be done by a senior physician experienced in trauma or emergency care. A good triage officer limits both overtriage and undertriage. The incident commander must stay free to run the hospital response and cannot also triage. Paramedic crews need to return to the scene. A junior resident or a clerk lacks the experience to make these calls.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Frykberg ER. Medical management of disasters and mass casualties from terrorist bombings. How can we cope? J Trauma. 2002. https://pubmed.ncbi.nlm.nih.gov/12169923/

#### Q4
**Which of the following is the most reliable source for the number and severity of patients still to come?**

- A. EMS incident commander at the scene  **(key)**
- B. Local news broadcasts from the scene
- C. Police officers at the entrance
- D. Social media posts from the scene
- E. Walking patients' accounts

*Explanation:* The EMS incident commander at the scene knows how many patients have been triaged into each category and where each ambulance is going. A regular two way link between that commander and the hospital lets you scale the response and warn the OR. News, social media and patient accounts arrive quickly but mix rumour with fact and rarely give triage categories. Police at the door know about security, not casualty numbers.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Auf der Heide E. The importance of evidence-based disaster planning. Ann Emerg Med. 2006. https://pubmed.ncbi.nlm.nih.gov/16387217/

### multiple-patients-22: A call about a wedding reception

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are the physician in charge of a community hospital emergency department at 01:30. The EMS district supervisor calls from a community hall 15 km away. About 60 guests at a wedding reception began vomiting and having watery diarrhea over the past 3 hours. Four ambulances are on scene, and many guests plan to drive themselves. Your department has 14 stretchers, and 11 are full. You have 2 physicians and 6 nurses. The supervisor describes one guest, an 82-year-old woman who takes furosemide and ramipril. She is drowsy, and her vital signs are listed.

- Temperature: 37.8°C tympanic
- Pulse: 118/minute
- Resp.: 22/minute
- BP: 82/44 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is the most appropriate way to prepare your department for the arriving guests?**

- A. Cohort guests in one area with dedicated staff  **(key)**
- B. Place each guest in an airborne isolation room
- C. Seat guests among other waiting patients
- D. Stop assessing new walk-in patients
- E. Turn away all ambulances

*Explanation:* Norovirus causes about half of gastroenteritis outbreaks and spreads easily on hands and surfaces. The CDC guideline advises cohorting ill patients together with dedicated nursing staff, with careful handwashing with soap and water. Seating guests among other patients spreads the illness through the department. Norovirus does not need airborne isolation, and a community hospital has too few such rooms for 60 guests. Turning away all ambulances or stopping walk-in assessment abandons other emergencies in the community.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Centers for Disease Control and Prevention. Updated norovirus outbreak management and disease prevention guidelines. MMWR Recomm Rep. 2011. https://pubmed.ncbi.nlm.nih.gov/21368741/

#### Q2
*Update:* In the first hour 16 guests arrive. Four of them are described below. The others are vomiting but alert, drinking small sips and have normal vital signs.

**Which of the following guests should receive physician assessment and treatment first?**

- A. A 7-year-old boy vomiting but drinking
- B. A 45-year-old man with severe cramps
- C. A 30-year-old woman at 32 weeks gestation
- D. An 82-year-old woman with a BP of 82/44 mmHg  **(key)**
- E. The groom with a pounding headache

*Explanation:* The older woman has hypotension, tachycardia and drowsiness from fluid loss, made worse by her diuretic and ACE inhibitor, so she needs resuscitation first with IV fluid. The other guests are then managed in parallel, with nurses repeating vital signs on a schedule. The pregnant woman needs early assessment and fetal monitoring, but she has no stated instability. A drinking child, cramps and headache can wait for reassessment.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Kollek D, Bezanson J, Carby S, et al. CAEP position statement. Hospital disaster preparedness. CJEM. 2020. https://pubmed.ncbi.nlm.nih.gov/32425150/

#### Q3
**Which of the following is the most appropriate plan for the guests who are alert with normal vital signs?**

- A. Discharge home without assessment
- B. IV saline bolus for every guest
- C. Nurse-led oral fluids with timed reassessment  **(key)**
- D. Physician review before any treatment
- E. Stool culture before any treatment

*Explanation:* The CDC guideline notes that this illness usually settles in 1 to 3 days and that dehydration is treated with oral or IV fluid. Guests who are alert, drinking and have normal vital signs can start oral fluids by nursing protocol, with vital signs repeated on a schedule, while the physicians treat the unstable. Waiting for a physician before any treatment delays care for all of them. An IV bolus for every guest uses stretchers and staff that the sick need. Discharge without assessment could miss a guest who is becoming dehydrated. A stool culture does not guide treatment tonight.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Centers for Disease Control and Prevention. Updated norovirus outbreak management and disease prevention guidelines. MMWR Recomm Rep. 2011. https://pubmed.ncbi.nlm.nih.gov/21368741/

#### Q4
**Which of the following additional actions is most appropriate for this cluster of illness?**

- A. Clear ill guests to return to work tomorrow
- B. Give ciprofloxacin to every guest
- C. Keep guests until stool results return
- D. Notify public health of the cluster  **(key)**
- E. Send stool for culture from every guest

*Explanation:* The CDC guideline states that every outbreak of acute gastroenteritis should be reported to the local health department, which leads the investigation, sampling and control. Ill food handlers and health care workers should stay off work during the illness and for 48 to 72 hours after symptoms end, so clearing them for work tomorrow is unsafe. Antibiotics do not treat viral gastroenteritis. Public health decides which stool samples to collect, and guests do not need to stay for results that take days.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Centers for Disease Control and Prevention. Updated norovirus outbreak management and disease prevention guidelines. MMWR Recomm Rep. 2011. https://pubmed.ncbi.nlm.nih.gov/21368741/

### multiple-patients-23: Respiratory season surge

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department in December during a severe respiratory virus season. The pediatric ward is full. Four admitted children are boarding in the emergency department, and 11 children are in the waiting room. A 5-month-old girl presents with 3 days of cough and 1 day of poor feeding. She was born at term and is otherwise well. She has moderate subcostal retractions and nasal flaring. She is alert and consolable. Crackles and wheeze are heard on both sides. The vital signs listed are hers.

- Temperature: 38.1°C rectal
- Pulse: 172/minute
- Resp.: 64/minute
- O2 sat: 91% on room air
- Weight: 6.8 kg

#### Q1
**Which of the following CTAS levels is most appropriate for this infant at triage?**

- A. CTAS level 1
- B. CTAS level 2  **(key)**
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* Her O2 sat of 91% with moderate retractions and flaring is moderate respiratory distress, which is level 2 in paediatric CTAS. The other modifiers score lower. A respiratory rate of 64/minute and a pulse of 172/minute at 5 months fall in the level 3 bands. At 38.1°C she is below the 38.5°C fever modifier. Level 1 needs severe distress, such as O2 sat below 90%, exhaustion, apnea or a decreased response to pain. Level 3 misses how quickly infants with bronchiolitis can tire.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Warren DW, Jarvis A, LeBlanc L, Gravel J. Revisions to the Canadian Triage and Acuity Scale paediatric guidelines (PaedCTAS). CJEM. 2008. https://doi.org/10.1017/S1481803500010149

#### Q2
**Which of the following measures would add contingency capacity for sick children tonight without lowering the standard of care?**

Select 3.

- A. Call in off duty pediatric nurses  **(key)**
- B. Close the emergency department to new arrivals
- C. Discharge waiting children before assessment
- D. Early discharge of low risk inpatients  **(key)**
- E. Hold two infants on each monitor
- F. Open the day surgery unit for overflow  **(key)**
- G. Stop oxygen saturation checks on the ward
- H. Transfer every admitted child to the tertiary centre

*Explanation:* Contingency capacity uses extra staff, other spaces and changed practice to give care close to the usual standard. Calling in off duty nurses adds staff. A staffed day surgery unit adds monitored space. Discharging low risk inpatients early, sometimes called reverse triage, opens ward beds. Doubling infants on one monitor and stopping saturation checks lower the standard, which is crisis care. A department cannot close to walk-in children, and discharge without assessment is unsafe. Transferring every child moves the surge to a tertiary centre that is also likely full.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Hick JL, Einav S, Hanfling D, et al. Surge capacity principles. Care of the critically ill and injured during pandemics and disasters. CHEST consensus statement. Chest. 2014. https://pubmed.ncbi.nlm.nih.gov/25144334/

#### Q3
*Update:* Ninety minutes later, on 2 L/minute of oxygen by nasal prongs, her O2 sat is 88%, respiratory rate 72/minute, and she has two brief pauses in breathing. Your hospital cannot provide high flow nasal oxygen for infants.

**Which of the following is the most appropriate next step in her care?**

- A. Admit her to the adult ICU tonight
- B. Increase oxygen and reassess in the morning
- C. Intubate now before any referral
- D. Refer to pediatric critical care now  **(key)**
- E. Wait in the ED for a pediatric ward bed

*Explanation:* Falling saturation on oxygen, a rising respiratory rate and apneic pauses mean she is tiring and needs care your hospital cannot give. The pediatric critical care and transport team should be called now, because transport takes hours to arrange. Their advice on escalating support before they arrive is part of that call. An adult ICU is not set up for infants. Waiting for a ward bed or until morning ignores her decline. Intubation may become necessary, but deciding it without the receiving team loses their guidance and time.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Friedman JN, Rieder MJ, Walton JM, Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014. https://pubmed.ncbi.nlm.nih.gov/25414585/

#### Q4
**Which of the following ward patients is the best candidate for early discharge to free a pediatric bed?**

- A. Bronchiolitis on high flow oxygen, O2 sat 92%
- B. DKA on an insulin infusion, day 1
- C. Empyema awaiting a chest drain
- D. Meningitis on day 1 of IV antibiotics
- E. Stable asthma on salbutamol every 4 hours  **(key)**

*Explanation:* Early discharge works when the patient has a low risk of needing a critical intervention after leaving. A child with stable asthma who needs salbutamol only every 4 hours can usually finish treatment at home with a clear plan and follow up. A child on high flow oxygen, on an insulin infusion, awaiting a chest drain or on day 1 of treatment for meningitis still needs hospital level care. Each is at real risk of a critical event after discharge.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Kelen GD, Kraus CK, McCarthy ML, et al. Inpatient disposition classification for the creation of hospital surge capacity. A multiphase study. Lancet. 2006. https://pubmed.ncbi.nlm.nih.gov/17141705/

### multiple-patients-24: One ventilator left

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a tertiary care emergency department during a severe influenza pandemic. The province has declared crisis standards of care and activated a critical care triage protocol. One ventilator is free. A 52-year-old man with influenza pneumonia is tiring. He has no chronic illness. He is alert, and his platelet count, bilirubin and creatinine are normal. Respiratory failure is his only organ failure. The vital signs listed are his.

- Temperature: 39.2°C oral
- Pulse: 118/minute
- Resp.: 38/minute
- BP: 124/70 mmHg
- O2 sat: 84% on 15 L/minute by non-rebreather mask

#### Q1
**Which of the following should decide who receives the last ventilator under the provincial protocol?**

- A. Bedside physician caring for each patient
- B. Family members after a discussion
- C. First patient to need the ventilator
- D. ICU charge nurse on duty
- E. Trained triage officer using the protocol  **(key)**

*Explanation:* Under crisis standards, scarce critical care resources are allocated by a trained triage officer or team who applies the protocol and sees the demand across the hospital. A bedside physician advocates for one patient and lacks that overview, so the roles are kept apart. First come, first served ignores who is most likely to benefit. Families should be informed and supported but should not allocate resources. The ICU charge nurse manages staffing and beds, not triage decisions.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Christian MD, Sprung CL, King MA, et al. Triage. Care of the critically ill and injured during pandemics and disasters. CHEST consensus statement. Chest. 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC7094437/

#### Q2
*Update:* A 77-year-old woman with pneumonia and septic shock also needs ventilation. She is on norepinephrine, has a GCS of 9 and has kidney and liver failure. The outreach team scores her SOFA at 14 and the man's at 2.

**Which of the following allocations is most consistent with a SOFA based triage protocol?**

- A. Ventilator shared between both patients
- B. Ventilator to the first patient who arrived
- C. Ventilator to the patient with a SOFA of 2  **(key)**
- D. Ventilator to the woman, who is sicker
- E. Ventilator to whoever the families choose

*Explanation:* SOFA based pandemic protocols give priority to patients most likely to survive with critical care. The man has single organ respiratory failure and a SOFA of 2, all from the respiratory score, since he is not yet ventilated and his other organs are normal. That puts him in the highest priority group. A SOFA above 11, like hers at 14, predicts more than 90% mortality even with full ICU care, so it falls in the group that receives palliative care rather than a ventilator. Being sicker does not mean benefiting more. Sharing one ventilator between two patients is not a validated practice. Arrival order and family choice ignore the protocol.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Christian MD, Hawryluck L, Wax RS, et al. Development of a triage protocol for critical care during an influenza pandemic. CMAJ. 2006. https://pubmed.ncbi.nlm.nih.gov/17116904/

#### Q3
**Which of the following is the most appropriate plan for the woman who does not receive the ventilator?**

- A. Bag ventilation by staff until one is free
- B. Comfort focused care with family support  **(key)**
- C. Discharge home with her family tonight
- D. Transfer by road to a full ICU elsewhere
- E. Wait on a stretcher for the next ventilator

*Explanation:* A patient who is not allocated critical care is not abandoned. She should receive active comfort care, symptom relief and support for her family, including palliative care, social work or ethics consultation as they need. Manual ventilation until a ventilator frees ties up staff other patients need and prolongs dying without a plan. Waiting on a stretcher offers neither treatment nor comfort. A road transfer to an ICU that is also full exposes a dying patient to transport for no gain. Discharge home is unsafe while she is in shock.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Christian MD, Sprung CL, King MA, et al. Triage. Care of the critically ill and injured during pandemics and disasters. CHEST consensus statement. Chest. 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC7094437/

#### Q4
**Which of the following best describes the man's continued access to the ventilator under the protocol?**

- A. Held until he is moved to the ICU
- B. Kept until his family agrees to stop
- C. Reviewed only if his SOFA score falls
- D. Subject to review at set times by protocol  **(key)**
- E. Transferred to the next patient after 24 hours

*Explanation:* Pandemic triage protocols reassess ventilated patients at set times, such as 48 and 120 hours in the protocol by Christian and colleagues, and continue ventilation only if the patient is improving or still meets priority criteria. This lets the resource move to someone more likely to benefit if he worsens. Review only when his SOFA score falls is the wrong trigger, because a rising score signals poor prognosis. An automatic 24 hour limit has no basis. Location and family agreement do not change his priority.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Christian MD, Hawryluck L, Wax RS, et al. Development of a triage protocol for critical care during an influenza pandemic. CMAJ. 2006. https://pubmed.ncbi.nlm.nih.gov/17116904/

### multiple-patients-25: Five arrivals at 03:00

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are the only physician in a rural hospital emergency department in northern Ontario at 03:00, with two nurses and no CT scanner. Five patients arrive within 15 minutes. A 78-year-old woman has 2 days of urinary frequency and fever and is newly confused. Her skin is mottled. An 11-year-old boy with type 1 diabetes has deep rapid breathing, vomiting, a capillary glucose of 28 mmol/L and a capillary refill of 3 seconds. A 34-year-old man smelling of alcohol fell from standing and has a scalp laceration, GCS 14 and equal pupils. A 57-year-old man has 40 minutes of chest pressure rated 3 out of 10 with a normal first ECG. A 30-year-old woman has a migraine like her usual ones. The vital signs listed are for the 78-year-old woman.

- Temperature: 39.4°C oral
- Pulse: 124/minute
- Resp.: 26/minute
- BP: 82/48 mmHg
- O2 sat: 94% on room air

#### Q1
**Which of the following patients should you assess and treat first?**

- A. Boy with deep rapid breathing
- B. Man with a scalp laceration
- C. Man with chest pressure and a normal ECG
- D. Older woman with fever and confusion  **(key)**
- E. Woman with a usual migraine

*Explanation:* The 78-year-old woman is in septic shock. She has a BP of 82/48 mmHg, a pulse of 124/minute, fever, mottled skin and new confusion. That is CTAS level 1, and every minute before fluids and antibiotics counts. The boy with DKA and the man with chest pressure are level 2 and need care soon. Nurses can start their monitoring, access and ECGs while you resuscitate her. The man with the scalp laceration has a GCS of 14 and equal pupils for now. The woman with her usual migraine can wait longest.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q2
*Update:* The boy weighs 36 kg. A nurse asks what she can start for him while you stay with the woman.

**Which of the following orders is it most appropriate for the nurse to start for the boy now?**

Select 3.

- A. Continuous cardiac monitoring  **(key)**
- B. Dextrose 10% IV at maintenance rate
- C. Insulin 0.1 units/kg IV bolus
- D. Normal saline 10 mL/kg IV over 30 minutes  **(key)**
- E. Potassium chloride IV before any labs
- F. Sodium bicarbonate 1 mmol/kg IV
- G. Venous blood gas and electrolytes  **(key)**

*Explanation:* His capillary refill of 3 seconds shows volume depletion without shock. The Canadian Paediatric Society advises 10 to 20 mL/kg of isotonic fluid over 20 to 30 minutes for a child who is volume depleted but not in shock, and 10 mL/kg is 360 mL for 36 kg. Cardiac monitoring and a venous gas with electrolytes guide potassium and insulin. Insulin is never given as an IV bolus in children, because it adds risk without benefit. The infusion starts only after the first hour of fluids. Potassium before a level is known risks hyperkalemia. Bicarbonate is not routine, and dextrose is added only once glucose falls.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Gripp KE, Trottier ED, Thakore S, Sniderman J, Lawrence S, Canadian Paediatric Society Acute Care Committee. Current recommendations for management of paediatric diabetic ketoacidosis. Paediatr Child Health. 2023. https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis

#### Q3
*Update:* Forty minutes later the nurse finds the man with the scalp laceration harder to rouse. GCS 11 (E3 V3 M5). His left pupil is 5 mm and sluggish.

**Which of the following is the most important step to start now for this man?**

- A. Call the transfer centre for neurosurgery  **(key)**
- B. Observe with neurological checks every hour
- C. Repair the scalp laceration first
- D. Skull X-ray to look for a fracture
- E. Wait until he is sober to reassess

*Explanation:* A fall of 3 points in GCS with a new dilated, sluggish pupil points to an expanding intracranial hematoma. Alcohol does not explain a unilateral pupil. With no CT or neurosurgeon on site, the transfer centre should be called at once while you prepare his airway and treat raised pressure. Hourly checks or waiting until he is sober would let him herniate unnoticed. A skull X-ray cannot rule out a hematoma. Scalp repair can wait unless the wound is bleeding heavily.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

#### Q4
**Which of the following is the most appropriate plan for the man with chest pressure while you manage the others?**

- A. Discharge him because the first ECG was normal
- B. Nurse repeats the ECG and shows you at once  **(key)**
- C. Repeat the ECG after the transfer has left
- D. Send him to wait in the waiting room
- E. Start heparin without further testing

*Explanation:* Chest pressure with cardiac features is CTAS level 2, and one normal ECG does not rule out acute coronary syndrome. A nurse can repeat the ECG at set intervals and with any change in pain, and show it to you straight away. Delegating with a clear trigger keeps him moving while you are busy. Waiting until the transfer leaves could delay treatment of an evolving STEMI. Discharge and the waiting room remove monitoring. Heparin without troponin or ECG change treats a diagnosis not yet made.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

### multiple-patients-26: Two resuscitations and two residents

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 66-year-old man is brought to the emergency department by ambulance after vomiting large amounts of bright red blood. He takes naproxen for arthritis. He is pale and alert. Two minutes later a 31-year-old woman with asthma arrives. She speaks one word at a time, is drowsy and has a nearly silent chest, with O2 sat 86% on a non-rebreather mask. You are the attending physician. You have a senior emergency medicine resident, a first year off-service resident, four nurses and a respiratory therapist. The vital signs listed are the man's.

- Pulse: 122/minute
- Resp.: 22/minute
- BP: 88/54 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following is the most appropriate way to assign physicians to these two patients?**

- A. First year resident leads the bleed alone
- B. Senior resident intubates her while you see him
- C. Senior resident leads the bleed, you take the asthma  **(key)**
- D. You and both residents stay with one patient
- E. You lead both from the doorway between rooms

*Explanation:* The drowsy asthmatic with a silent chest and O2 sat of 86% is near respiratory arrest and may need the most difficult airway of the night. That calls for the most experienced physician at her bedside. A senior emergency resident can lead a bleeding resuscitation with blood, access and a transfusion plan, and report to you. A first year off-service resident should not run a shock resuscitation alone. Leading from a doorway gives neither patient your hands or attention. Leaving the resident alone to intubate her gives the highest risk task to the less experienced physician.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018. https://pubmed.ncbi.nlm.nih.gov/29132571/

#### Q2
**Which of the following ways of giving an order is most likely to be completed quickly and correctly?**

- A. Directed order to a named nurse, with read back  **(key)**
- B. General call for someone to hang blood
- C. List of five orders to the whole room
- D. Order passed on by the unit clerk
- E. Order written on the whiteboard only

*Explanation:* Closed-loop communication means naming the person, giving one clear task, hearing it read back and hearing when it is done. It shortens the time to complete orders in resuscitations. A general call to the room is often heard by everyone and done by no one. A long list of orders overloads the team. Orders relayed by a clerk or left on a whiteboard lose the read back, so errors in drug, dose or route go unnoticed.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* El-Shafy IA, Delgado J, Akerman M, et al. Closed-loop communication improves task completion in pediatric trauma resuscitation. J Surg Educ. 2018. https://pubmed.ncbi.nlm.nih.gov/28780315/

#### Q3
*Update:* The woman is intubated. The man's BP is 80/46 mmHg after 4 units of red cells, and he is still vomiting blood. The gastroenterologist on call is at home.

**Which of the following calls is most appropriate to make now for the bleeding man?**

- A. Admitting internist for a ward bed
- B. General surgery to review tomorrow
- C. GI to come in now for urgent endoscopy  **(key)**
- D. Pharmacy for more pantoprazole
- E. Radiology for a CT of the abdomen

*Explanation:* Ongoing hematemesis and a BP of 80/46 mmHg after 4 units mean active bleeding that transfusion alone will not stop. He needs urgent endoscopy once resuscitated, and the gastroenterologist must be called in now because travel takes time. A ward bed is the wrong level of care. General surgery tomorrow is too late if endoscopy fails. A proton pump inhibitor supports but does not replace endoscopic control. CT of the abdomen moves an unstable patient away from the resuscitation bay without offering a treatment.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding. Guideline recommendations from the International Consensus Group. Ann Intern Med. 2019. https://doi.org/10.7326/M19-1795

#### Q4
*Update:* The triage nurse brings you an ECG from a 48-year-old man in the waiting room with 30 minutes of chest pain. It shows 3 mm ST elevation in V2 to V5. Both resuscitation rooms are full.

**Which of the following is the most appropriate response to this ECG?**

- A. Activate the cath lab from the ECG now  **(key)**
- B. Ask the nurse to repeat it in 30 minutes
- C. Leave the intubated woman to examine him
- D. Place him in a chair until a bed opens
- E. Wait until both resuscitations are done

*Explanation:* ST elevation of 3 mm across V2 to V5 is an anterior STEMI, and the ECG alone is enough to activate the catheterization laboratory. You can do that in one phone call without leaving either resuscitation. A nurse then places him on a monitor and gives ASA, and the off-service resident can take a brief history. Repeating the ECG in 30 minutes or waiting for both resuscitations to finish delays reperfusion. Leaving the newly intubated woman risks her airway. A chair in the waiting room removes monitoring from a patient at risk of ventricular fibrillation.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019. https://pubmed.ncbi.nlm.nih.gov/30760415/

### multiple-patients-27: Halfway through a repair

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 23-year-old man presents to the emergency department with a 4 cm laceration on the back of his forearm from a kitchen knife 90 minutes ago. Bleeding stopped with pressure. He has full finger extension against resistance and normal sensation. He rates his pain 4 out of 10. You are halfway through the repair when a nurse tells you that a 70-year-old man in bed 6 has new slurred speech and right arm weakness. He was last seen well 50 minutes ago. The vital signs listed are the younger man's.

- Temperature: 36.8°C oral
- Pulse: 84/minute
- Resp.: 16/minute
- BP: 126/78 mmHg
- O2 sat: 99% on room air

#### Q1
**Which of the following CTAS levels was most appropriate for the man with the laceration at triage?**

- A. CTAS level 1
- B. CTAS level 2
- C. CTAS level 3
- D. CTAS level 4  **(key)**
- E. CTAS level 5

*Explanation:* His vital signs are normal, the bleeding is controlled and tendon and nerve function are intact. That leaves pain as the deciding modifier. Acute peripheral pain of 4 to 7 out of 10 is level 4. Level 5 is for mild peripheral pain of 0 to 3. Level 3 would need severe peripheral pain of 8 to 10, moderate central pain, abnormal vital signs, uncontrolled bleeding or a threatened limb. Level 2 needs a high risk feature such as ongoing major bleeding or severe central pain.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

#### Q2
**Which of the following is the most appropriate response to the nurse's report?**

- A. Ask the nurse to recheck vitals and report back
- B. Cover the wound and go to bed 6 now  **(key)**
- C. Finish the repair, then see the man in bed 6
- D. Hand the repair to a medical student alone
- E. Order CT by phone, see him after the repair

*Explanation:* A suspected stroke within 4.5 hours of last seen well is a time critical emergency, and each minute of delay costs brain tissue. A clean forearm laceration with bleeding controlled can wait under a sterile dressing with no harm. Pausing the low acuity task for the high acuity one is the right trade. Finishing the repair first or phoning for CT without an assessment delays a thrombolysis decision. Rechecking vital signs adds nothing to the decision. Leaving a student to finish unsupervised is unsafe.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Heart and Stroke Foundation of Canada. Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024. https://doi.org/10.1017/cjn.2022.344

#### Q3
*Update:* The man in bed 6 has a BP of 168/94 mmHg. You are walking to his room.

**Which of the following can nurses start for the man in bed 6 before you reach him?**

Select 3.

- A. ASA 160 mg PO before imaging
- B. Capillary glucose check  **(key)**
- C. Chest X-ray before CT
- D. Foley catheter insertion
- E. IV access with CBC and INR  **(key)**
- F. Labetalol to lower systolic BP below 140
- G. Stroke code call to CT and neurology  **(key)**

*Explanation:* A capillary glucose excludes hypoglycemia as a stroke mimic in seconds. IV access and bloods save time before thrombolysis. A stroke code alerts CT and the stroke team so imaging happens as soon as he arrives. ASA before imaging is unsafe until hemorrhage is excluded. A chest X-ray and a Foley catheter delay CT without changing the decision. His BP of 168/94 mmHg is below the 185/110 mmHg threshold for thrombolysis, so lowering it is not needed and could reduce blood flow to the brain.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Heart and Stroke Foundation of Canada. Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024. https://doi.org/10.1017/cjn.2022.344

### multiple-patients-28: Tornado at a campground

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department in Saskatchewan when a tornado strikes a campground 15 km away. Paramedics use START at the scene and bring the first patients to your ambulance bay, where you retriage with START as they arrive. A 42-year-old man was pinned under a fallen tree. He cannot walk because of a deformed lower leg. He is breathing without help and answers questions. The vital signs listed are his.

- Pulse: 118/minute
- Resp.: 24/minute
- O2 sat: 95% on room air

#### Q1
**Which of the following is the next START step for this man after counting his respiratory rate?**

- A. Ask him to squeeze your hand
- B. Check his Glasgow Coma Scale
- C. Measure his BP
- D. Measure his O2 saturation
- E. Palpate his radial pulse  **(key)**

*Explanation:* START moves from walking to breathing, then to respiratory rate, then to perfusion and last to mental status. His rate of 24/minute is 30 or less, so the next step is perfusion. That means feeling for a radial pulse or checking capillary refill. An absent radial pulse or a refill over 2 seconds makes him immediate. A command to squeeze your hand is the mental status step, which comes after perfusion. START uses no BP, O2 saturation or GCS, because each takes time and equipment.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Benson M, Koenig KL, Schultz CH. Disaster triage. START, then SAVE. A new method of dynamic triage for victims of a catastrophic earthquake. Prehosp Disaster Med. 1996. https://pubmed.ncbi.nlm.nih.gov/10159733/

#### Q2
*Update:* A 29-year-old woman arrives tagged yellow at the scene 40 minutes ago. She now opens her eyes to voice but cannot follow a simple command. Respiratory rate 22/minute. Radial pulse present.

**Which of the following is the most appropriate action for this woman now?**

- A. Keep her yellow as tagged in the field
- B. Move her to the immediate area now  **(key)**
- C. Reassess her after all red patients
- D. Send her to CT from the yellow area
- E. Tag her black and move on

*Explanation:* Failure to follow simple commands is a START criterion for immediate. Her tag from 40 minutes ago reflects her state then, not now. Triage is dynamic, and a change like this should move her straight to the immediate area. Keeping the field tag or waiting until all red patients are seen ignores a new sign of possible brain injury. Sending her to CT from the yellow area skips the airway assessment she now needs. She is breathing with a pulse, so black does not apply.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Benson M, Koenig KL, Schultz CH. Disaster triage. START, then SAVE. A new method of dynamic triage for victims of a catastrophic earthquake. Prehosp Disaster Med. 1996. https://pubmed.ncbi.nlm.nih.gov/10159733/

#### Q3
*Update:* EMS reports six more red patients leaving the scene. Your hospital has one general surgeon. The trauma centre is 90 minutes by road, and two other community hospitals are 30 minutes away.

**Which of the following is the most appropriate advice to EMS about these six patients?**

- A. Accept all six here because you are closest
- B. Close the department to further EMS arrivals
- C. Send all six by road to the trauma centre
- D. Spread them across regional hospitals via EMS  **(key)**
- E. Tell EMS to hold them at the scene

*Explanation:* Disasters overload the closest hospital while nearby hospitals stay nearly empty. With one surgeon, six more red patients would exceed what you can treat. EMS should distribute them, with the most seriously injured sent to the trauma centre when it can be reached in time, and others shared with the two community hospitals. A 90 minute road trip is too long for every unstable patient. Holding red patients at the scene delays care, and closing the department abandons the region's plan.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Auf der Heide E. The importance of evidence-based disaster planning. Ann Emerg Med. 2006. https://pubmed.ncbi.nlm.nih.gov/16387217/

### multiple-patients-29: Third day of a heat wave

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 86-year-old woman is brought to the emergency department by ambulance on the third day of a heat wave. A building superintendent found her confused during a wellness check of units without air conditioning. She takes hydrochlorothiazide and metoprolol. Her skin is hot and dry. She is disoriented and does not follow commands consistently. Nine other patients with heat related complaints are waiting, and ambulances report more on the way. The vital signs listed are hers.

- Temperature: 41.6°C rectal
- Pulse: 126/minute
- Resp.: 28/minute
- BP: 92/54 mmHg
- O2 sat: 95% on room air

#### Q1
**Which of the following CTAS levels is most appropriate for this woman at triage?**

- A. CTAS level 1  **(key)**
- B. CTAS level 2
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* The 2016 CTAS heat related issue complaint assigns level 1 to a core temperature above 41°C. Her rectal temperature is 41.6°C, and she also has confusion, tachycardia and a soft BP. A core temperature of 39 to 41°C would be level 2. Level 3 fits ongoing heat cramps or mild dehydration. Heat stroke in an older adult can progress to seizures, arrhythmia and multiorgan failure within hours, so she needs a resuscitation bed now.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q2
*Update:* She is in a resuscitation bed with evaporative cooling under way. Five other heat related patients are waiting at triage.

**Which of the following waiting patients should be seen next by a physician?**

- A. Ankle swelling after a day outdoors
- B. Core temperature 40.4°C and new confusion  **(key)**
- C. Dizzy on standing, drinking fluids
- D. Headache with a core temperature of 38.2°C
- E. Itchy red rash on the trunk

*Explanation:* New confusion with a core temperature of 40.4°C meets the definition of heat stroke, a core temperature above 40°C with central nervous system dysfunction. That patient needs cooling to start now, as the first woman did. Under CTAS 2016 a core temperature of 39 to 41°C is level 2, and new confusion is level 2 on its own. Dizziness on standing in a patient who can drink fits heat syncope or mild dehydration at level 3. A headache at 38.2°C, swollen ankles from heat edema and an itchy heat rash are minor heat illnesses that can wait.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Epstein Y, Yanovich R. Heatstroke. N Engl J Med. 2019. https://pubmed.ncbi.nlm.nih.gov/31216400/

#### Q3
*Update:* A 34-year-old roofer has painful calf cramps that began at work 2 hours ago and are still coming and going. He is drinking fluids. Core temperature 38.2°C. Other vital signs normal.

**Which of the following CTAS levels is most appropriate for the roofer at triage?**

- A. CTAS level 1
- B. CTAS level 2
- C. CTAS level 3  **(key)**
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* The 2016 CTAS heat related modifiers place ongoing heat cramps at level 3 and resolving cramps in a well hydrated patient at level 4. His cramps are still recurring, so he is level 3. His core temperature of 38.2°C is below the 39°C threshold for level 2, and his other vital signs are normal. Level 1 is kept for a core temperature above 41°C or severe dehydration. Level 5 would ignore an active heat illness on a day when many patients are deteriorating.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q4
**Which of the following hospital actions is most appropriate as heat related arrivals continue?**

- A. Activate the hospital surge plan now  **(key)**
- B. Discharge the woman once she is below 39°C
- C. Divert walk-in patients to local clinics
- D. Hold heat patients in the waiting room
- E. Stop elective ECGs to save nursing time

*Explanation:* A heat wave produces a sustained surge of older, medically complex patients over several days. The surge plan brings in staff, opens space for cooling and monitoring, and speeds admissions and discharges elsewhere in the hospital. Holding heat patients in a hot waiting room worsens their illness. Walk-in patients cannot be diverted before they are assessed. The woman needs admission to monitor for organ injury after cooling. Dropping ECGs saves little and removes a check that matters in heat illness.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Hick JL, Einav S, Hanfling D, et al. Surge capacity principles. Care of the critically ill and injured during pandemics and disasters. CHEST consensus statement. Chest. 2014. https://pubmed.ncbi.nlm.nih.gov/25144334/

### multiple-patients-30: Three children at once

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are the only physician in a community hospital emergency department with two nurses and a respiratory therapist. A 3-year-old boy is carried in by his father while having a generalized seizure that began 8 minutes ago. He has no IV access. At the same time a 9-year-old girl with asthma arrives speaking one word at a time, with O2 sat 88% on room air and marked retractions after salbutamol at home. A 16-year-old boy with an ankle injury is waiting. The vital signs listed are the 3-year-old's.

- Temperature: 37.9°C rectal
- Pulse: 156/minute
- Resp.: 30/minute
- O2 sat: 93% on room air
- Weight: 15 kg

#### Q1
**Which of the following should the nurse give the seizing boy first while you assess the girl?**

- A. fosphenytoin IV
- B. levetiracetam IV
- C. lorazepam IV
- D. midazolam IN  **(key)**
- E. phenobarbital IV

*Explanation:* A seizure lasting 8 minutes is status epilepticus and needs a benzodiazepine now. With no IV access, intranasal or buccal midazolam can be given by a nurse in seconds. That frees you for the girl, who is also in danger. Lorazepam is first line only once an IV is in. Fosphenytoin, levetiracetam and phenobarbital are second line drugs for a seizure that continues after benzodiazepines, and each is offered here by the IV route, which he does not have.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* McKenzie KC, Hahn CD, Friedman JN, Canadian Paediatric Society Acute Care Committee. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health. 2021. https://pubmed.ncbi.nlm.nih.gov/33552322/

#### Q2
**Which of the following CTAS levels is most appropriate for the girl with asthma at triage?**

- A. CTAS level 1  **(key)**
- B. CTAS level 2
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* Speaking one word at a time with marked retractions and an O2 sat of 88% is severe respiratory distress. In paediatric CTAS, severe distress with a saturation below 90% is level 1. Level 2 is moderate distress with a saturation below 92%, such as a child speaking in phrases. That she already used salbutamol at home and is still this sick adds to the concern. She needs continuous care and an immediate physician assessment alongside the seizing boy.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Warren DW, Jarvis A, LeBlanc L, Gravel J. Revisions to the Canadian Triage and Acuity Scale paediatric guidelines (PaedCTAS). CJEM. 2008. https://doi.org/10.1017/S1481803500010149

#### Q3
*Update:* The boy's seizure stops 3 minutes after the midazolam. He is post-ictal, breathing 24/minute, with O2 sat 95% on room air. You need to stay with the girl.

**Which of the following is the most appropriate monitoring plan for the post-ictal boy?**

- A. Discharge home now that it has stopped
- B. Named nurse with oximetry and call triggers  **(key)**
- C. Parent watching him in the waiting room
- D. Physician check after the asthma settles
- E. Repeat midazolam to prevent recurrence

*Explanation:* After a benzodiazepine the boy can lose his airway or seize again, so he needs continuous oximetry and a named nurse. Clear triggers for calling you might be a saturation below 92%, a slow respiratory rate or any further seizure activity. That keeps him safe while you manage the girl. A parent in the waiting room cannot recognize hypoventilation. Waiting for your check leaves no one watching. A second dose after the seizure has stopped only deepens sedation. Discharge before he recovers and before a cause is sought is unsafe.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* McKenzie KC, Hahn CD, Friedman JN, Canadian Paediatric Society Acute Care Committee. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health. 2021. https://pubmed.ncbi.nlm.nih.gov/33552322/

#### Q4
*Update:* The 16-year-old has been waiting 70 minutes with ankle pain rated 6 out of 10. His mother comes to the resuscitation room door, upset about the wait.

**Which of the following is the most appropriate response to the mother?**

- A. Ask security to escort the mother away
- B. Discharge him with advice to see his doctor
- C. Explain the delay and have a nurse give analgesia  **(key)**
- D. Leave the resuscitation to examine the ankle
- E. Tell her to take him to another hospital

*Explanation:* A short, honest explanation that sicker children are being treated, with an estimate of the wait, usually defuses frustration. A nurse can give analgesia under a medical directive, because CTAS expects timely pain relief even for patients who must wait. Leaving a critically ill child to examine an ankle reverses the priorities. Security is for threats, not for a worried parent. Discharging him or sending him elsewhere without assessment is unsafe and abandons care.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

### multiple-patients-31: Six patients from one shelter

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 31-year-old man is brought to the emergency department by ambulance from a shelter where six people were found unresponsive after smoking what they believed was fentanyl. He is barely breathing. He has a carotid pulse and pinpoint pupils. Paramedics gave 4 mg of intranasal naloxone to another patient and ran out. The other five patients arrive over the next 10 minutes. The vital signs listed are his.

- Temperature: 36.2°C tympanic
- Pulse: 58/minute
- Resp.: 2/minute
- BP: 104/66 mmHg
- O2 sat: 72% on room air

#### Q1
**Which of the following is the most appropriate first intervention for this man?**

- A. Bag mask ventilation with oxygen  **(key)**
- B. Chest compressions at 100 to 120/minute
- C. flumazenil 0.2 mg IV
- D. Immediate rapid sequence intubation
- E. naloxone 2 mg IV push

*Explanation:* He is nearly apneic, with a respiratory rate of 2/minute, an O2 sat of 72% and a pulse. Opioid deaths are asphyxial, so oxygenation by bag and mask comes first, followed promptly by naloxone. He has a pulse of 58/minute, so compressions are not indicated. A full 2 mg IV push in a person who uses opioids regularly can cause abrupt withdrawal, vomiting and aspiration. Small titrated doses to restore breathing are preferred. Intubation is rarely needed once naloxone takes effect. Flumazenil can provoke seizures and has no role here.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Dezfulian C, Orkin AM, Maron BA, et al. Opioid-associated out-of-hospital cardiac arrest. Distinctive clinical features and implications for health care and public responses. A scientific statement from the American Heart Association. Circulation. 2021. https://pubmed.ncbi.nlm.nih.gov/33682423/

#### Q2
**Which of the following arriving patients should you see next after this man is being ventilated?**

- A. Agitated and vomiting after naloxone
- B. Awake after naloxone, asking to leave
- C. Drowsy, RR 12/minute, O2 sat 95%
- D. Rousable to voice, O2 sat 91%
- E. Snoring, RR 6/minute, O2 sat 84%  **(key)**

*Explanation:* Snoring with a respiratory rate of 6/minute and an O2 sat of 84% is the next patient heading to respiratory arrest. That patient needs airway positioning, ventilation and naloxone now. The patient who rouses to voice with an O2 sat of 91% comes after him. The drowsy patient breathing 12/minute with 95% saturation can be watched by a nurse. Agitation and vomiting after naloxone need a nurse to protect the airway and settle the patient. The awake patient asking to leave is the least urgent.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Dezfulian C, Orkin AM, Maron BA, et al. Opioid-associated out-of-hospital cardiac arrest. Distinctive clinical features and implications for health care and public responses. A scientific statement from the American Heart Association. Circulation. 2021. https://pubmed.ncbi.nlm.nih.gov/33682423/

#### Q3
*Update:* One hour after naloxone, a 24-year-old woman is walking normally and asks to leave. GCS 15, O2 sat 96% on room air, respiratory rate 14/minute, pulse 80/minute, temperature 36.8°C.

**Which of the following is the most appropriate disposition for this woman?**

- A. Admit for 24 hours of monitoring
- B. Discharge with a take-home naloxone kit  **(key)**
- C. Naloxone infusion before discharge
- D. Observe for 6 hours, then reassess
- E. Security hold until a urine screen returns

*Explanation:* One hour after naloxone she meets every part of the St. Paul's early discharge rule. She walks as usual, has a GCS of 15, an O2 sat above 92%, a respiratory rate above 10 and below 20/minute, a pulse above 50 and below 100/minute and a temperature above 35.0 and below 37.5°C. She can be discharged with a naloxone kit and harm reduction advice. That frees a monitored space for the sicker arrivals. Admission, a long observation or an infusion are not needed when she meets the rule. A urine screen does not change care and gives no grounds to hold her.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Christenson J, Etherington J, Grafstein E, et al. Early discharge of patients with presumed opioid overdose. Development of a clinical prediction rule. Acad Emerg Med. 2000. https://pubmed.ncbi.nlm.nih.gov/11015242/

#### Q4
**Which of the following staff assignments makes the best use of your team for these six patients?**

- A. Nurses give naloxone to all six on arrival
- B. RT intubates each apneic patient in turn
- C. RT ventilates the apneic man while you assess  **(key)**
- D. You stay with one patient until all are awake
- E. You ventilate the man while nurses triage

*Explanation:* Bag mask ventilation is a skill a respiratory therapist does well, which frees you to assess the other patients as they arrive and to direct naloxone dosing. Holding the mask yourself ties the only physician to one task. Giving naloxone to all six on arrival treats patients who are breathing adequately and triggers withdrawal and agitation. Intubating each apneic patient is rarely needed once naloxone works and consumes the team. Staying with one patient leaves the others unassessed.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018. https://pubmed.ncbi.nlm.nih.gov/29132571/

### multiple-patients-32: One aircraft for two riders

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are the only physician in a rural hospital emergency department 3 hours by road from the nearest trauma centre. Two snowmobile riders arrive after a collision. A 24-year-old man struck his head. His GCS has fallen from 14 to 9 (E2 V2 M5) over 30 minutes, and his left pupil is now 6 mm and sluggish. A 27-year-old woman, his passenger, has a pelvic fracture in a binder. After 2 units of red cells her pulse is 104/minute and she is alert. The provincial transfer service has one aircraft, which carries one patient. The next is 3 hours away. The vital signs listed are the man's.

- Temperature: 35.8°C tympanic
- Pulse: 56/minute
- Resp.: 12/minute
- BP: 176/92 mmHg
- O2 sat: 96% on 4 L/minute by nasal prongs

#### Q1
**Which of the following patients should take the first flight to the trauma centre?**

- A. Both after a second aircraft is found
- B. Either, in order of packaging
- C. Neither until both have a CT scan
- D. Passenger with the pelvic fracture
- E. Rider with the dilated left pupil  **(key)**

*Explanation:* A falling GCS, a new dilated pupil, bradycardia and hypertension point to an expanding intracranial hematoma with herniation. Only a neurosurgeon can treat that, and none is available locally. The woman is responding to blood with her pelvis bound, so she can be kept stable while she waits. Packaging order and waiting for a second aircraft ignore which delay is fatal. CT would delay his transfer, and a trauma centre can image him on arrival.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

#### Q2
**Which of the following tasks should you do yourself before the man leaves, with nurses doing the others?**

- A. Calling his family
- B. Checking the woman's pelvic binder
- C. Printing the imaging reports
- D. Repeating vital signs on both
- E. Securing the man's airway  **(key)**

*Explanation:* A GCS of 9 and falling, in a patient about to leave by air, needs a definitive airway before departure. As the only physician, intubation is the task only you can do. Nurses can check the binder, repeat vital signs and copy images and records. A clerk or nurse can call the family. Handing off every task that others can do keeps you free for the one that needs a physician.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

#### Q3
*Update:* The man has left by air. The woman must wait about 3 hours for the next aircraft. Her BP is 108/66 mmHg.

**Which of the following is the most appropriate plan for the woman while she waits?**

- A. Continue blood with vitals every 15 minutes  **(key)**
- B. Crystalloid 2 L wide open while waiting
- C. Discharge to the ward until the flight
- D. Remove the binder to examine the pelvis
- E. Road transfer without a nurse escort

*Explanation:* She has responded to blood but has a pelvic fracture that can rebleed. She needs close monitoring in the emergency department, with blood given against clear triggers and vital signs every 15 minutes. Large volumes of crystalloid dilute clotting factors and can restart bleeding. Removing the binder releases the tamponade. A general ward cannot watch her closely enough. An unescorted road trip of 3 hours leaves an unstable patient with no one able to transfuse her.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

### multiple-patients-33: Tour bus passengers tagged green

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 82-year-old woman is brought to the emergency department by ambulance after a tour bus rolled over on a highway. She walked at the scene and was tagged green. She now reports left chest wall pain and feels light-headed. She takes metoprolol for hypertension and apixaban for atrial fibrillation. Her usual systolic BP is about 150 mmHg. She is one of 38 passengers aged 68 to 91. The left lower ribs are tender. The vital signs listed are hers.

- Temperature: 36.4°C oral
- Pulse: 72/minute irregular
- Resp.: 28/minute
- BP: 104/60 mmHg
- O2 sat: 93% on room air

#### Q1
**Which of the following best explains why her pulse of 72/minute may be falsely reassuring?**

- A. Apixaban for atrial fibrillation
- B. Pain from rib fractures
- C. Treatment with metoprolol  **(key)**
- D. Vagal response to fear
- E. Walking at the scene

*Explanation:* A beta blocker blunts the heart rate response to blood loss, so an older patient on metoprolol can be bleeding with a normal pulse. Aging also reduces the response to catecholamines. Her BP of 104/60 mmHg is far below her usual 150 mmHg. Apixaban raises the risk of bleeding but does not change the heart rate. Pain would push the pulse up, not down. Walking at the scene explains her green tag, not her pulse. A vagal response is transient and does not fit her ongoing symptoms.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

#### Q2
**Which of the following CTAS levels is most appropriate for her on arrival in the emergency department?**

- A. CTAS level 1
- B. CTAS level 2  **(key)**
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* A bus rollover is a high risk mechanism, which alone makes her level 2. Her findings point the same way. A systolic BP below 110 mmHg often means hypotension in older trauma patients, and 104 mmHg is well below her usual. A respiratory rate above 27/minute predicts adverse events in older adults. Level 1 needs clear shock with poor perfusion, which she does not yet show. Level 3 would repeat the undertriage of her field tag.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q3
**Which of the following approaches best reduces undertriage of the older passengers arriving with green tags?**

- A. Accept field tags without change
- B. See green patients last regardless of age
- C. Send green patients home from the scene
- D. Use secondary triage for every arrival  **(key)**
- E. X-ray every passenger before triage

*Explanation:* Field triage tools such as START do not account for age, medications or baseline vital signs, so walking older adults can be undertriaged. A second triage at the door, using CTAS with its geriatric cautions, catches patients like her. Accepting field tags or seeing green patients last keeps the error. Sending green patients home from the scene skips any assessment. Imaging every passenger before triage uses scarce time and does not replace a clinical assessment.

*Key feature:* Multiple patients 4. When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS.

*Source:* Benson M, Koenig KL, Schultz CH. Disaster triage. START, then SAVE. A new method of dynamic triage for victims of a catastrophic earthquake. Prehosp Disaster Med. 1996. https://pubmed.ncbi.nlm.nih.gov/10159733/

#### Q4
*Update:* Ninety minutes later a nurse finds an 86-year-old man from the bus drowsy in the minor area. He hit his head in the rollover and takes warfarin. GCS 13.

**Which of the following is the most appropriate next step for this man?**

- A. CT head now and check his INR  **(key)**
- B. Discharge to the tour group hotel
- C. Observe until he is more awake
- D. Recheck him in the morning
- E. Treat him as tired from the trip

*Explanation:* A GCS of 13 after head trauma in an 86-year-old taking warfarin suggests intracranial bleeding until proven otherwise. He needs CT now and an INR to guide urgent reversal. A GCS of 10 to 13 is CTAS level 2. Observing him, rechecking in the morning or attributing drowsiness to fatigue delays a treatable diagnosis. Discharging him is unsafe. This is why green area patients need planned reassessment rather than being left until the red patients are done.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004. https://doi.org/10.1017/S1481803500009428

### multiple-patients-34: Six febrile children at triage

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 6-week-old girl is brought to the emergency department by her parents with a rectal temperature of 38.3°C at home. She was born at term. She is feeding well and looks well, with a strong cry and good colour. She is one of six febrile children who arrive at the triage desk within 20 minutes on a winter evening. The department is busy, and the triage nurse asks you to help set priorities. The vital signs listed are hers.

- Temperature: 38.2°C rectal
- Pulse: 164/minute
- Resp.: 44/minute
- O2 sat: 98% on room air
- Weight: 4.6 kg

#### Q1
**Which of the following CTAS levels is most appropriate for this infant at triage?**

- A. CTAS level 1
- B. CTAS level 2  **(key)**
- C. CTAS level 3
- D. CTAS level 4
- E. CTAS level 5

*Explanation:* Any infant under 3 months with a temperature above 38°C is CTAS level 2, however well she looks. Young infants are relatively immunodeficient and can have bacteremia, urinary infection or meningitis with few signs. Her pulse of 164/minute and respiratory rate of 44/minute are within the normal bands for her age, so they do not raise her to level 1. Level 3 would apply the rule for older infants who look well, which does not extend below 3 months.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q2
**Which of the following other febrile children should also be assigned CTAS level 2 at triage?**

Select 2.

- A. Child of 4 years, 38.8°C, looks well
- B. Child of 8 years, 38.9°C, sore throat, looks well
- C. Child of 5 years on chemotherapy, 38.9°C  **(key)**
- D. Infant of 11 months, 39.4°C, looks unwell  **(key)**
- E. Toddler of 14 months, 39.0°C, playful
- F. Toddler of 2 years, 39.5°C, looks well

*Explanation:* An immunocompromised child with a temperature above 38.5°C is level 2, so the child on chemotherapy qualifies at 38.9°C. The 2016 revision limits the fever modifier to children aged 3 to 18 months. In that group a temperature above 38.5°C with an unwell appearance is level 2, which fits the 11-month-old. The playful 14-month-old at 39.0°C is level 3. The well 2-year-old is now outside the fever modifier and is triaged on other modifiers. Well appearing children over 3 years sit at level 3 or 4, depending on their other modifiers.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q3
*Update:* Fifty minutes later the 14-month-old is listless. Capillary refill is 4 seconds and his pulse is 190/minute.

**Which of the following is the most appropriate action for this toddler now?**

- A. Antipyretic and reassess in 30 minutes
- B. Keep his place in the queue at level 3
- C. Move him to a resuscitation bed now  **(key)**
- D. Oral fluid challenge in the waiting room
- E. Repeat vital signs in 1 hour

*Explanation:* A pulse of 190/minute is above 165/minute, the level 1 band for age 1 to 3 years in paediatric CTAS. With listlessness and a capillary refill of 4 seconds, he is in shock. His reassessment level is now 1, and he needs a resuscitation bed, IV or intraosseous access and fluids at once. An antipyretic, an oral fluid trial or another hour of waiting treats the fever and ignores the circulation. Keeping his original place in the queue ignores the change that reassessment is meant to catch.

*Key feature:* Multiple patients 2. With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment.

*Source:* Warren DW, Jarvis A, LeBlanc L, Gravel J. Revisions to the Canadian Triage and Acuity Scale paediatric guidelines (PaedCTAS). CJEM. 2008. https://doi.org/10.1017/S1481803500010149

### multiple-patients-35: Four arrivals from the same party

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are the only physician in a community hospital emergency department at 23:00, with four nurses and a respiratory therapist. The nearest hemodialysis unit is at a regional hospital 1 hour away. Four adults arrive from a party last night where they drank homemade vodka bought from a neighbour. The poison centre suspects methanol and has notified public health. A 52-year-old man had a seizure in the car and now has a GCS of 7 with snoring respirations, a venous pH of 7.08 and bicarbonate 6 mmol/L. His vital signs are listed. A 44-year-old man has blurred vision and deep, fast breathing, with a pH of 7.02, bicarbonate 5 mmol/L and an anion gap of 30 mmol/L. A 38-year-old woman has a headache without visual symptoms, with a pH of 7.31, bicarbonate 18 mmol/L and an osmolal gap of 14 mOsm/kg. A 29-year-old woman who had one small drink feels well, with a normal blood gas and an osmolal gap of 3 mOsm/kg.

- Temperature: 36.4°C tympanic
- Pulse: 124/minute
- Resp.: 30/minute
- BP: 108/64 mmHg
- O2 sat: 90% on room air

#### Q1
**Which of the following patients should you assess and treat first?**

- A. The 52-year-old man with a GCS of 7  **(key)**
- B. The 44-year-old man with blurred vision
- C. The 29-year-old woman who feels well
- D. The 38-year-old woman with a headache
- E. The patient with the lowest pH

*Explanation:* A GCS of 7 with snoring respirations and an O2 saturation of 90% after a seizure is an immediate threat to his airway and breathing, and CTAS places a GCS of 3 to 9 at level 1. He needs airway positioning, oxygen and likely intubation first. The man with blurred vision and a pH of 7.02 is also critically ill and comes next, with a nurse starting antidote treatment at once. Choosing by the lowest pH alone ignores the airway. The woman with a headache and the well woman can be managed in parallel.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365

#### Q2
**Which of the following calls is most important to make early for this group?**

- A. Local police about the seller
- B. Ophthalmology about the blurred vision
- C. Regional hospital to arrange dialysis  **(key)**
- D. The patients' family physicians
- E. The public health unit

*Explanation:* Two patients already meet EXTRIP criteria for extracorporeal treatment, the 52-year-old man through coma, seizure and a pH of 7.08, and the 44-year-old man through vision loss, a pH of 7.02 and an anion gap above 24 mmol/L. Dialysis removes methanol and its toxic acid, so arranging transfer to the only dialysis unit an hour away is the step most likely to change outcome. Calling early lets the unit prepare staff and machines. Public health has already been notified by the poison centre. Ophthalmology cannot reverse formate toxicity, which is treated with the antidote, bicarbonate and dialysis. Police and family physicians can be contacted later.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Roberts DM, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning. A systematic review and consensus statement. EXTRIP Work Group. Crit Care Med. 2015. https://pubmed.ncbi.nlm.nih.gov/25493973/

#### Q3
**Which of the following patients from the party should receive fomepizole now?**

- A. Both men and the 38-year-old woman  **(key)**
- B. Every person from the party
- C. Only the 44-year-old man
- D. Only the 52-year-old man
- E. The 38-year-old and 29-year-old women

*Explanation:* The AACT guideline gives fomepizole when methanol poisoning is strongly suspected and at least two of these are present: arterial pH below 7.3, bicarbonate below 20 mmol/L and an osmolal gap above 10 mOsm/kg. Both men have a pH below 7.3 and a bicarbonate far below 20 mmol/L. The 38-year-old woman has a pH of 7.31, just above the cut-off, but her bicarbonate of 18 mmol/L and osmolal gap of 14 mOsm/kg meet two criteria. Unmetabolized methanol is likely still present, and blocking its metabolism now prevents acidosis and eye injury. The 29-year-old woman had one small drink, and a normal gas with an osmolal gap of 3 mOsm/kg about a day later meets none of the criteria, so she needs observation and repeat testing rather than an antidote. Treating only the men leaves the third patient to become acidotic.

*Key feature:* Multiple patients 1. Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation.

*Source:* Barceloux DG, Bond GR, Krenzelok EP, Cooper H, Vale JA. American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning. J Toxicol Clin Toxicol. 2002. https://pubmed.ncbi.nlm.nih.gov/12216995/

#### Q4
**Which of the following is the most appropriate step for you as the only physician right now?**

- A. Ask for help only if one worsens
- B. Ask the RT to lead the airway alone
- C. Call in a second physician now  **(key)**
- D. Manage each patient in turn yourself
- E. Send the well woman to the waiting room

*Explanation:* Two critically ill patients need an airway, antidotes, bicarbonate and transfer at the same time, which one physician cannot safely lead. Calling in help early lets you run the airway while a colleague leads the second patient, with each nurse given a named task. Handling patients one at a time delays the second critical patient. The respiratory therapist should support the airway, not lead it without a physician. The well woman still needs monitoring and repeat testing in a clinical area. Waiting until a patient worsens loses the time when help is most needed.

*Key feature:* Multiple patients 3. Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early.

*Source:* Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018. https://pubmed.ncbi.nlm.nih.gov/29132571/
