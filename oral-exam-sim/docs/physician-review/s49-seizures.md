# s49: Seizures

32 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s49 seizures-30 q2 observation vs second lorazepam. NICE NG217 used for safety and EEG advice (no Canadian equivalent). s53 tox: methadone restart dose after missed doses varies by province.
- s27 cva-25 mumbles words V3 vs V2. cva-21 transfusion 2 h timed from arrival vs onset. s49 seizures-16 q3 lorazepam 2 mg is 0.03 mg/kg. s33 Wells PE items 39 and 42 reworded to 'more likely than'.
- s53 tox-27 cyanide menu omits sodium thiosulfate. tox-39 q2 GHB airway explanation left as is. Overlap notes: bupropion (s49), organophosphate (s49), HF acid (s04).
- seizures-30 q2: whether observation with EEG, rather than one more dose of lorazepam, is the single best answer after 30 minutes of events in a patient taking levetiracetam. It is now better supported, but it still rests on bedside features. A physician should confirm it. *(samps-s49-lensA.md)*
- seizures-48 and seizures-49 (review-extra): exact copies of seizures-26 and seizures-37. They should be dropped, not added to the batch. *(samps-s49-lensA.md)*
- NICE NG217 is a UK guideline, used for safety advice (21, 25, 43) and EEG (21, 37). I found no Canadian guideline that covers the same points. Accept NICE, or name a Canadian source if one exists. *(samps-s49-lensA.md)*
- `S.hirtz` and `S.acep24` are now unused constants in `seizures.ts`. They are harmless, but the Lens B reviewer or the writer may remove them. *(samps-s49-lensA.md)*
- seizures-48 and seizures-49 (review-extra) are exact copies of seizures-26 and seizures-37 (stem, options and explanations). Even with the fixes above, they should be dropped, not added. *(samps-s49-lensB.md)*
- seizures-16 q3 update: lorazepam 2 mg for 60 kg is 0.03 mg/kg, a third of the status dose the batch teaches elsewhere (0.1 mg/kg, maximum 4 mg). No lorazepam option is offered, so the key holds, but a physician may prefer 4 mg in the update for consistency. Low confidence. *(samps-s49-lensB.md)*
- Key feature mapping, low confidence: seizures-20 q4, 33 q3 and 43 q1 test starting an antiseizure drug after a seizure has stopped, but are mapped to key feature 4 (ongoing seizures). No key feature fits exactly. Left as is. *(samps-s49-lensB.md)*
- seizures-30 q2 remains the item Lens A flagged (observation with EEG over a further benzodiazepine). The numbers (25 + 5 = 30 minutes, O2 sat 99%) are internally consistent. *(samps-s49-lensB.md)*
- tox-16 versus s49 seizures-18. The 24 hour monitoring teaching and the Starr series appear in both. If both stay, tox-16 q2 should test something else. *(samps-s53-lensB.md)*
- seizures-19 q3. The key is "serum pH 7.50 to 7.55". AHA 2023 gives that range as an upper limit not to exceed. Emergency Care BC says to repeat boluses until the pH reaches 7.55. The key still stands, but please confirm that "usual target" is the wording you want. *(samps-textbooks-s32-s46-s49.md)*
- seizures-32 q1. AHA 2023 calls beta blocker safety in cocaine toxicity controversial. It does not ban them. Diazepam remains the clear answer, and the explanation no longer says that beta blockers are avoided. *(samps-textbooks-s32-s46-s49.md)*
- Goldfrank's chapter numbers. Four chapters are cited by title without a number because the full 11th edition table of contents could not be opened: Antidiabetics and Hypoglycemics/Antiglycemics, Antiepileptics, Antidotes in Depth: L-Carnitine, and Serotonin Reuptake Inhibitors and Atypical Antidepressants. Chapter 76, Ethanol, comes only from the publisher's chapter address, not a table of contents. *(samps-textbooks-s32-s46-s49.md)*
- Some distractor reasons that the new source does not address were kept, because they are standard teaching and do not conflict with the source. Examples are glucagon and hydrocortisone in loc-22 q3, and transient global amnesia in seizures-40 q1. *(samps-textbooks-s32-s46-s49.md)*

Review reports: docs/reviews/writer-s49.md, samps-s49-lensA.md, samps-s49-lensB.md

## SAMPs

### seizures-16: Older woman confused for two days

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old woman is brought to the emergency department from her long-term care home because she has been confused for 2 days. Staff describe periods when she stares and does not answer, alternating with near normal conversation. They have also noticed brief twitching of her left eyelid and the left corner of her mouth. She had a right hemispheric ischemic stroke 8 months ago with mild residual left arm weakness. She takes ASA, atorvastatin and amlodipine. Glucose 6.2 mmol/L, sodium 138 mmol/L, creatinine 88 umol/L. Calcium, CBC and urinalysis are normal. She opens her eyes to voice but does not follow commands. Rhythmic twitching of the left face comes and goes. Her neck is supple.

- Temperature: 36.9°C oral
- Pulse: 88/minute
- Resp.: 16/minute
- BP: 142/80 mmHg
- O2 sat: 96% on room air
- Weight: 60 kg

#### Q1
**Which of the following is the most likely explanation for her fluctuating level of awareness?**

- A. Delirium from a urinary infection
- B. Hypoactive delirium from her medications
- C. Nonconvulsive status epilepticus  **(key)**
- D. Recurrent ischemic stroke
- E. Sundowning from vascular dementia

*Explanation:* Fluctuating awareness with staring spells and intermittent rhythmic twitching of the face in a patient with a prior cortical stroke points to nonconvulsive status epilepticus. The stroke is a structural focus for late onset seizures. Her urinalysis is normal, which argues against urinary infection. ASA, atorvastatin and amlodipine are not sedating or anticholinergic. A new stroke gives a fixed deficit rather than rhythmic twitching that comes and goes, and no dementia or evening pattern is described.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q2
**Which of the following investigations is most important to confirm the diagnosis in this patient?**

- A. CT angiography of head and neck
- B. EEG as soon as available  **(key)**
- C. Lumbar puncture with cell count
- D. MRI brain with diffusion imaging
- E. Serum ammonia and liver enzymes

*Explanation:* Nonconvulsive status can only be confirmed on EEG, and the Neurocritical Care Society advises EEG within an hour when ongoing seizures are suspected. Clinical signs such as her facial twitching are subtle and unreliable for judging response to treatment. CT angiography looks for a vessel occlusion, which does not explain rhythmic twitching that comes and goes. She has no fever or meningism to justify lumbar puncture. MRI may show peri-ictal change but cannot confirm ongoing seizures, and nothing suggests liver disease.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q3
*Update:* EEG shows continuous right hemispheric rhythmic discharges. After lorazepam 2 mg IV the discharges pause, then return within 10 minutes. She remains drowsy.

**Which of the following is the most appropriate next treatment for this 60 kg patient?**

- A. Fosphenytoin 300 mg PE IV
- B. Levetiracetam 3 600 mg IV  **(key)**
- C. Levetiracetam 500 mg IV
- D. Midazolam infusion after intubation
- E. Propofol infusion after intubation

*Explanation:* Seizures that return after a benzodiazepine need a fully dosed second line agent. Levetiracetam 60 mg/kg, maximum 4 500 mg, is 60 x 60 = 3 600 mg, the dose used in ESETT. Her creatinine of 88 umol/L does not change a loading dose. Levetiracetam 500 mg is a maintenance dose and will not stop status. Fosphenytoin would be 20 mg PE/kg, or 1 200 mg PE, so 300 mg PE is an underdose. Anesthetic infusions with intubation are reserved for seizures that persist after a second line agent.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Kapur J, et al. Randomized trial of three anticonvulsant medications for status epilepticus. N Engl J Med. 2019.

#### Q4
**Which of the following is the time after which a focal seizure with impaired awareness is considered status epilepticus?**

- A. 5 minutes
- B. 10 minutes  **(key)**
- C. 15 minutes
- D. 30 minutes
- E. 60 minutes

*Explanation:* The ILAE defines time point t1, when treatment should start, as 10 minutes for focal status epilepticus with impaired awareness. Five minutes is t1 for generalized convulsive status. Thirty minutes is t2 for convulsive status, when long term injury becomes likely. For focal status with impaired awareness t2 is over 60 minutes, which is when damage is expected rather than when treatment begins. Fifteen minutes is not an ILAE time point for either type.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus. Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015. https://pubmed.ncbi.nlm.nih.gov/26336950/

### seizures-17: Convulsions that continue after treatment

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department with no CT scanner and no on-site neurologist. The tertiary centre is 2 hours away by air. A 38-year-old man with known epilepsy is brought by ambulance with generalized convulsions that began 45 minutes ago. Paramedics gave midazolam 10 mg IM. In the department he received lorazepam 4 mg IV, then levetiracetam 4 500 mg IV, then fosphenytoin 1 500 mg PE IV, which finished 5 minutes ago. He is still having generalized tonic clonic movements. Capillary glucose is 7.1 mmol/L. He takes levetiracetam and lamotrigine.

- Temperature: 38.0°C tympanic
- Pulse: 128/minute
- Resp.: 10/minute
- BP: 158/92 mmHg
- O2 sat: 88% on a non rebreather mask
- Weight: 82 kg

#### Q1
**Which of the following best describes his condition at this point in his treatment?**

- A. Benzodiazepine responsive status
- B. Established status epilepticus
- C. Nonconvulsive status epilepticus
- D. Postictal state with myoclonus
- E. Refractory status epilepticus  **(key)**

*Explanation:* Status epilepticus that continues after an adequate benzodiazepine and an adequately dosed second line agent is refractory. He has had two benzodiazepine doses and two second line agents, and he is still convulsing. Established status describes seizures that persist after benzodiazepines, before a second line agent has failed. It is not nonconvulsive because tonic clonic movements are visible. A postictal state implies the seizure has ended, and it has not. He is not benzodiazepine responsive because two doses failed.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q2
**Which of the following is the most appropriate next step in management for this patient?**

- A. Additional lorazepam 4 mg IV
- B. Air transfer before intubation
- C. Intubation and midazolam infusion  **(key)**
- D. Magnesium sulfate 4 g IV
- E. Pyridoxine 5 g IV

*Explanation:* Refractory status needs a continuous anesthetic infusion such as midazolam, propofol or pentobarbital, and that requires a secured airway. His resp rate of 10/minute and O2 sat of 88% also call for intubation. A third benzodiazepine adds respiratory depression with little chance of success. Transfer should follow airway control and infusion, not replace them. Magnesium is for eclampsia and pyridoxine is for isoniazid toxicity, and neither is suggested here.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q3
*Update:* He is intubated using ketamine and rocuronium. A midazolam infusion is started. Twenty minutes later he has no visible movements.

**Which of the following is the most important concern about his seizure control at this point?**

- A. Ketamine lowers the seizure threshold
- B. Midazolam causes paradoxical seizures
- C. Paralysis may hide ongoing seizures  **(key)**
- D. Rocuronium triggers malignant hyperthermia
- E. Seizure activity ends with paralysis

*Explanation:* Rocuronium abolishes visible convulsions but not the electrical seizure, so ongoing status can be missed. Continuous EEG is needed, and until it is available, clinical cues such as pupils, heart rate and BP changes are unreliable. Ketamine has antiseizure activity and is used for refractory status. Midazolam does not cause paradoxical seizures in this setting. Rocuronium is not a trigger for malignant hyperthermia, unlike succinylcholine. Paralysis stops movement, not seizures.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q4
**Which of the following are most appropriate to arrange for this patient during and after transfer?**

Select 2.

- A. Admission to an intensive care unit  **(key)**
- B. Continuous EEG monitoring  **(key)**
- C. Discontinuing the midazolam infusion
- D. Lumbar puncture before transfer
- E. Scheduled repeat doses of rocuronium
- F. Serum prolactin level

*Explanation:* Refractory status needs ICU care with continuous EEG to titrate the infusion to seizure suppression. The midazolam infusion must continue during transport. He has no CT, so lumbar puncture before transfer is unsafe and would delay care. Repeated paralysis hides seizures further. Prolactin does not guide treatment of status epilepticus.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

### seizures-18: Teenager after taking her father's pills

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 16-year-old girl is brought to the emergency department by her mother 3 hours after swallowing 20 tablets of bupropion XL 300 mg that belong to her father. She says she wanted to die. She is anxious and tremulous. While you are examining her she has a generalized tonic clonic seizure lasting 90 seconds that stops on its own. She has no past history and takes no medications. Capillary glucose is 6.4 mmol/L. After the seizure she is drowsy. Pupils are 6 mm and reactive. Her skin is warm and moist.

- Temperature: 37.8°C oral
- Pulse: 132/minute
- Resp.: 20/minute
- BP: 146/88 mmHg
- O2 sat: 97% on room air
- Weight: 55 kg

#### Q1
*Update:* Ten minutes later she has another generalized seizure. She has IV access.

**Which of the following is the most appropriate medication for her seizure now?**

- A. Fosphenytoin 1 100 mg PE IV
- B. Lorazepam 4 mg IV  **(key)**
- C. Naloxone 0.4 mg IV
- D. Physostigmine 1 mg IV
- E. Sodium bicarbonate 100 mmol IV

*Explanation:* Benzodiazepines are first line for toxin induced seizures. Lorazepam 0.1 mg/kg is 5.5 mg for 55 kg, so the maximum single dose of 4 mg applies. Fosphenytoin is avoided in toxicologic seizures and does not work well for them. Nothing suggests opioids, so naloxone has no role. Physostigmine can itself provoke seizures. Bicarbonate treats QRS widening, not the seizure.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

#### Q2
*Update:* The seizure stops. Her ECG shows sinus tachycardia at 128/minute, QRS 96 ms and QTc 480 ms.

**Which of the following findings on a repeat ECG would most change her treatment?**

- A. QRS duration of 130 ms  **(key)**
- B. QTc interval of 470 ms
- C. Sinus tachycardia at 120/minute
- D. T wave inversion in V1
- E. U waves in leads V2 and V3

*Explanation:* Large bupropion overdoses can widen the QRS by slowing cardiac conduction, and a QRS of 130 ms calls for a trial of sodium bicarbonate, ICU monitoring and readiness for dysrhythmias. A QTc of 470 ms is shorter than her first tracing. Sinus tachycardia is expected from sympathomimetic toxicity and is already present. T wave inversion in V1 can be normal. Small U waves do not change management here.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Stork CM. Serotonin reuptake inhibitors and atypical antidepressants. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Serotonin Reuptake Inhibitors and Atypical Antidepressants. https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210274776

#### Q3
**Which of the following is the most appropriate plan for the medical management of her ingestion?**

- A. Cardiac monitoring for at least 24 hours  **(key)**
- B. Discharge home after 6 seizure free hours
- C. Medical clearance after one normal ECG
- D. Observation for 4 hours then psychiatry
- E. Outpatient review with her physician

*Explanation:* She took about 6 000 mg of an extended release product. In a poison centre series of extended release bupropion overdoses, first seizures occurred up to 24 hours after ingestion, a third of them after 8 hours, and about half of those with seizures had more than one. She needs monitored observation for at least 24 hours. A short observation period or a single normal ECG does not exclude delayed toxicity. Her suicidal intent also requires psychiatric assessment once she is medically cleared, so outpatient follow up alone is unsafe.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Starr P, Klein-Schwartz W, Spiller H, et al. Incidence and onset of delayed seizures after overdoses of extended-release bupropion. Am J Emerg Med. 2009. https://pubmed.ncbi.nlm.nih.gov/19857406/

#### Q4
**Which of the following would be most appropriate if her seizures continued after two doses of lorazepam?**

Select 2.

- A. Carbamazepine via nasogastric tube
- B. Flumazenil 0.2 mg IV
- C. Fosphenytoin 20 mg PE/kg IV
- D. Phenobarbital 20 mg/kg IV  **(key)**
- E. Physostigmine 2 mg IV
- F. Propofol infusion after intubation  **(key)**

*Explanation:* Toxic seizures that persist after benzodiazepines are treated with other GABA agonists. Phenobarbital or propofol with a secured airway are the usual choices. Fosphenytoin works poorly for toxic seizures and is avoided. Flumazenil reverses the benzodiazepine and can worsen seizures. Physostigmine can provoke seizures. Oral carbamazepine is slow and unsafe in a patient who is seizing.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Stork CM. Serotonin reuptake inhibitors and atypical antidepressants. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Serotonin Reuptake Inhibitors and Atypical Antidepressants. https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210274776

### seizures-19: Man found drowsy beside empty packages

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 45-year-old man is brought to the emergency department by ambulance after his wife found him drowsy with empty blister packs of amitriptyline 50 mg beside him. She estimates 60 tablets are missing, taken about 2 hours ago. He takes amitriptyline for chronic back pain. In the ambulance he had a 1 minute generalized seizure. He now responds only to pain. Pupils are 7 mm. His skin is dry and flushed. Bowel sounds are absent. Capillary glucose is 7.8 mmol/L.

- Temperature: 37.9°C oral
- Pulse: 136/minute
- Resp.: 14/minute
- BP: 92/54 mmHg
- O2 sat: 94% on 4 L/minute by nasal prongs
- Weight: 85 kg

#### Q1
*Update:* His ECG shows sinus tachycardia, a QRS duration of 148 ms and a terminal R wave of 4 mm in lead aVR.

**Which of the following is the most appropriate immediate treatment for this patient?**

- A. Amiodarone 150 mg IV
- B. Lidocaine 100 mg IV
- C. Magnesium sulfate 2 g IV
- D. Physostigmine 2 mg IV
- E. Sodium bicarbonate 150 mmol IV  **(key)**

*Explanation:* A QRS of 148 ms with a large terminal R in aVR shows sodium channel blockade from the tricyclic. The treatment is hypertonic sodium bicarbonate, 1 to 2 mmol/kg, so 85 to 170 mmol for 85 kg. The benefit and safety of amiodarone here are uncertain. Lidocaine is kept for dysrhythmias that persist after bicarbonate, and it lowers the seizure threshold, which matters after his seizure. Magnesium is for torsades, which is not present. Physostigmine can cause bradycardia and asystole in tricyclic poisoning.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018. https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/

#### Q2
*Update:* Ten minutes after the bicarbonate he has another generalized seizure. It has lasted 3 minutes so far.

**Which of the following is the most appropriate anticonvulsant for this patient now?**

- A. Flumazenil 0.5 mg IV
- B. Fosphenytoin 1 500 mg PE IV
- C. Haloperidol 5 mg IV
- D. Lorazepam 4 mg IV  **(key)**
- E. Physostigmine 2 mg IV

*Explanation:* Benzodiazepines are first line for tricyclic seizures. Stopping the seizure quickly matters because the acidosis it causes worsens sodium channel blockade. Phenytoin also blocks sodium channels and is avoided in tricyclic poisoning. Flumazenil can precipitate seizures. Haloperidol lowers the seizure threshold and prolongs the QT. Physostigmine is dangerous with a wide QRS.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018. https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/

#### Q3
**Which of the following is the usual target when giving repeated sodium bicarbonate for this toxicity?**

- A. Bicarbonate above 35 mmol/L
- B. Serum pH 7.50 to 7.55  **(key)**
- C. Serum pH 7.60 to 7.65
- D. Serum sodium above 150 mmol/L
- E. Urine pH above 8.0

*Explanation:* Bicarbonate boluses are titrated to narrow the QRS and correct hypotension. Emergency Care BC repeats boluses until the QRS narrows or the serum pH reaches 7.55. AHA experts advise that serum pH should not exceed 7.50 to 7.55 and serum sodium should not exceed 150 to 155 mmol/L, to avoid harm from the treatment. A pH of 7.60 or more is beyond this limit, and hypertonic bicarbonate can also cause hypokalemia. High sodium or bicarbonate values are not the goal. Urine alkalinization is the target in salicylate poisoning, not tricyclic toxicity.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023. https://doi.org/10.1161/CIR.0000000000001161

### seizures-20: Seizure a week after delivery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 31-year-old woman presents to the emergency department 6 days after an uncomplicated vaginal delivery with a headache that has worsened over 3 days. In the waiting room she has a generalized tonic clonic seizure lasting 2 minutes. Her pregnancy was normal and her blood pressure was normal at delivery. She is breastfeeding and takes no medications. She has no history of seizures. Twenty minutes after the seizure she is drowsy but oriented. She has mild weakness of the left leg. Urine dipstick shows 1+ protein. Capillary glucose is 5.4 mmol/L.

- Temperature: 37.2°C oral
- Pulse: 104/minute
- Resp.: 18/minute
- BP: 162/104 mmHg
- O2 sat: 97% on room air
- Weight: 74 kg

#### Q1
**Which of the following is the most appropriate medication to give her now?**

- A. Dexamethasone 10 mg IV
- B. Levetiracetam 4 500 mg IV
- C. Lorazepam 4 mg IV
- D. Magnesium sulfate 4 g IV  **(key)**
- E. Phenytoin 1 500 mg IV

*Explanation:* A seizure in the week after delivery with a BP of 162/104 mmHg and proteinuria must be treated as postpartum eclampsia. Magnesium sulfate 4 g IV then 1 g per hour prevents recurrence better than phenytoin or benzodiazepines. She is no longer seizing, so lorazepam is not needed now. Levetiracetam is not the treatment for eclampsia. Dexamethasone has no role in eclampsia or in the causes being considered.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Magee LA, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022.

#### Q2
*Update:* Noncontrast CT head shows a hyperdense superior sagittal sinus and a small right parasagittal hemorrhage.

**Which of the following is the most appropriate next investigation for this patient?**

- A. Carotid duplex ultrasound
- B. Catheter cerebral angiography
- C. CT venography of the head  **(key)**
- D. Lumbar puncture with opening pressure
- E. Urgent EEG in the department

*Explanation:* A dense sagittal sinus with a parasagittal hemorrhage in the puerperium suggests cerebral venous thrombosis, which also explains her left leg weakness. Canadian guidance calls for contrast enhanced CT venography or MR venography, because noncontrast CT alone cannot rule it in or out. Carotid ultrasound assesses arteries, not venous sinuses. Catheter angiography is invasive and not first line. Lumbar puncture does not make the diagnosis. EEG would not show the cause.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Field TS, Lindsay MP, Wein T, et al. Canadian Stroke Best Practice Recommendations, 7th edition. Cerebral venous thrombosis, 2024. Can J Neurol Sci. 2024. https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis

#### Q3
*Update:* CT venography confirms thrombosis of the superior sagittal sinus. Platelets are 240 x 10^9/L. Creatinine is normal.

**Which of the following is the most appropriate initial treatment of the thrombosis?**

- A. Alteplase 0.9 mg/kg IV
- B. Apixaban 10 mg PO twice daily
- C. ASA 160 mg PO daily
- D. Enoxaparin 1 mg/kg SC twice daily  **(key)**
- E. No anticoagulation because of bleeding

*Explanation:* Therapeutic low molecular weight heparin should start as soon as cerebral venous thrombosis is diagnosed, and it is preferred over unfractionated heparin for most patients. Intracranial blood from the thrombosis is not a contraindication to anticoagulation. Systemic thrombolysis is not recommended. Canadian guidance finds insufficient evidence to start a DOAC without a parenteral lead-in, and DOACs are contraindicated while she is breastfeeding. ASA does not treat venous thrombosis.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Field TS, Lindsay MP, Wein T, et al. Canadian Stroke Best Practice Recommendations, 7th edition. Cerebral venous thrombosis, 2024. Can J Neurol Sci. 2024. https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis

#### Q4
**Which of the following best describes antiseizure treatment for her after this acute symptomatic seizure?**

- A. Antiseizure drug for life from today
- B. Antiseizure drug to prevent early recurrence  **(key)**
- C. Home rescue diazepam as sole therapy
- D. Observation until a second seizure occurs
- E. No drug because the seizure was provoked

*Explanation:* Canadian guidance recommends antiseizure medication after an acute symptomatic seizure from cerebral venous thrombosis, to prevent further early seizures. Long term treatment beyond 3 months is often not needed, so lifelong therapy is not decided today. Waiting for a second seizure, or relying on rescue diazepam alone, leaves her at risk during the period of highest recurrence. A provoked seizure from an ongoing structural cause still warrants treatment.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Field TS, Lindsay MP, Wein T, et al. Canadian Stroke Best Practice Recommendations, 7th edition. Cerebral venous thrombosis, 2024. Can J Neurol Sci. 2024. https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis

### seizures-21: Girl who keeps losing track at school

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 7-year-old girl is brought to the emergency department by her father after she walked into a parked bicycle while staring. For a month her teacher has reported that she stops mid-sentence and stares for about 10 seconds many times a day, then carries on as if nothing happened. She does not fall or shake. Her grades have dropped, and her family doctor suggested an attention disorder. She has had no vomiting or fever. She is otherwise healthy and takes no medications. She is alert and interactive. She has a small abrasion on her forehead. The neurological examination is normal.

- Temperature: 36.8°C oral
- Pulse: 92/minute
- Resp.: 20/minute
- BP: 102/64 mmHg
- Weight: 24 kg

#### Q1
**Which of the following bedside manoeuvres would best support the suspected diagnosis in this child?**

- A. Checking orthostatic vital signs
- B. Gentle limb restraint during an event
- C. Glabellar tap testing
- D. Hyperventilation for 3 minutes  **(key)**
- E. Visual tracking of a moving object

*Explanation:* Many brief daily staring spells with abrupt return to activity suggest absence seizures, which are easily mistaken for inattention. Having the child hyperventilate for about 3 minutes often provokes an absence at the bedside. Orthostatic vitals assess syncope, and she has no falls. Gentle restraint separates jitteriness from seizures in newborns. A glabellar tap and visual tracking test other neurological functions and do not provoke absences.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* International League Against Epilepsy. EpilepsyDiagnosis.org. Childhood absence epilepsy: overview and EEG. Last updated 2024. https://www.epilepsydiagnosis.org/syndrome/cae-eeg.html

#### Q2
**Which of the following is the most appropriate investigation for this child?**

- A. Electrolytes, calcium and glucose
- B. Emergency CT of the head
- C. Outpatient EEG with hyperventilation  **(key)**
- D. Urgent MRI brain today
- E. Urine toxicology screen

*Explanation:* Her many daily spells mean this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as hyperventilation supports the diagnosis and shows the seizure type, here the typical generalized discharges of absence epilepsy. NICE advises this EEG when the history suggests epileptic seizures. It can be done as an outpatient because she is well with a normal examination. Blood tests and imaging are guided by specific findings, such as vomiting, dehydration, a focal deficit or failure to return to baseline, and she has none. Nothing in her history suggests a toxic exposure.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

#### Q3
*Update:* Her father asks what she can safely do while she waits for her neurology appointment.

**Which of the following activity advice is most appropriate for her?**

- A. Avoid all physical activity
- B. Bathe instead of showering
- C. Keep her home from school
- D. Ride her bicycle on roads alone
- E. Swim only with close supervision  **(key)**

*Explanation:* Brief lapses of awareness are dangerous in water, so swimming should be supervised. NICE advises showers rather than baths for people with seizures because of drowning risk. She can stay at school and remain active, since restricting all activity harms her without adding safety. Her walk into a bicycle shows that riding alone on roads is unsafe until her seizures are controlled.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

### seizures-22: Toddler with a cold and a seizure at home

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department. A 19-month-old boy is brought in by his parents after a seizure at home 40 minutes ago. His mother saw him stiffen and then jerk all four limbs for about 3 minutes. He was sleepy for 15 minutes afterward. He has had cough and runny nose for 2 days and felt hot this morning. He is fully immunized, developing normally and has no past history. He has not had antibiotics. He is now alert, playful and drinking. He has clear rhinorrhea and mild pharyngeal redness. His neck is supple. There is no rash. The neurological examination is normal.

- Temperature: 39.1°C rectal
- Pulse: 138/minute
- Resp.: 30/minute
- O2 sat: 98% on room air
- Weight: 12 kg

#### Q1
**Which of the following investigations is most appropriate for this child?**

- A. CBC and blood culture
- B. EEG within 48 hours
- C. Electrolytes, calcium and glucose
- D. Lumbar puncture and CSF culture
- E. No investigations  **(key)**

*Explanation:* A generalized seizure of 3 minutes with full recovery in a 19-month-old with fever is a simple febrile seizure, and the source is a viral upper respiratory infection. Routine blood work is not recommended, because electrolyte problems cause under 1% of febrile seizures and serious bacterial infection is no more common than with fever alone. EEG and neuroimaging are not part of the workup. He is immunized, has not had antibiotics and has no meningeal signs, so lumbar puncture is not indicated.

*Key feature:* Seizures 8. Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests.

*Source:* Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025. https://www.cfp.ca/content/71/9/563

#### Q2
*Update:* His mother asks whether this is likely to happen again.

**Which of the following factors, if present, would most increase his risk of another febrile seizure?**

- A. Family history of febrile seizures  **(key)**
- B. Fever above 40°C at the seizure
- C. Fever for 3 days before the seizure
- D. Up to date immunizations
- E. Viral cause of the fever

*Explanation:* A family history of febrile seizures is an established risk factor for recurrence. Other risk factors are onset before 18 months, a lower temperature at the time of the seizure and a short interval between fever onset and the seizure. A fever above 40°C and a long febrile period before the seizure are linked with lower recurrence. Immunization status and a viral cause do not raise recurrence risk.

*Key feature:* Seizures 8. Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests.

*Source:* American Academy of Pediatrics, Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008. https://pubmed.ncbi.nlm.nih.gov/18519501/

#### Q3
**Which of the following is the most appropriate advice about medication at discharge?**

- A. Daily levetiracetam for 6 months
- B. Fever medicine for comfort only  **(key)**
- C. Intranasal midazolam kit for home
- D. Oral diazepam during each fever
- E. Scheduled ibuprofen to prevent seizures

*Explanation:* Antipyretics can be used to keep him comfortable, but they do not prevent febrile seizures, so scheduled dosing for prevention is not advised. The side effects of continuous or intermittent antiseizure medication outweigh the small risks of a future simple febrile seizure. A home rescue benzodiazepine is not routine after a single brief simple febrile seizure.

*Key feature:* Seizures 8. Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests.

*Source:* American Academy of Pediatrics, Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008. https://pubmed.ncbi.nlm.nih.gov/18519501/

#### Q4
**Which of the following features would have made this a complex rather than a simple febrile seizure?**

Select 3.

- A. Age of 19 months at onset
- B. Family history of epilepsy
- C. Focal onset of the seizure  **(key)**
- D. Postictal sleep of 15 minutes
- E. Second seizure within 24 hours  **(key)**
- F. Seizure lasting 20 minutes  **(key)**
- G. Temperature above 40°C
- H. Viral illness as the cause

*Explanation:* A simple febrile seizure is generalized, lasts under 15 minutes and does not recur within 24 hours in a child aged 6 months to 5 years. Focal onset, a duration of 20 minutes or a second seizure within 24 hours each make it complex. His age is within the usual range. A short postictal sleep is expected. Family history, a high temperature and a viral cause do not change the classification.

*Key feature:* Seizures 8. Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests.

*Source:* Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025. https://www.cfp.ca/content/71/9/563

### seizures-23: Feverish toddler still jerking on arrival

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 2-year-old girl is brought to the emergency department by ambulance with a seizure that started 18 minutes ago. She has had fever since yesterday. Her mother saw her stiffen and then jerk all four limbs. Paramedics gave midazolam 2.5 mg intranasal 8 minutes ago. She is still jerking all four limbs with her eyes deviated to the right. She is fully immunized and has no past history. An IV was placed on arrival. Capillary glucose is 5.6 mmol/L.

- Temperature: 39.8°C rectal
- Pulse: 170/minute
- Resp.: 28/minute
- O2 sat: 92% on 10 L/minute by non rebreather mask
- Weight: 13 kg

#### Q1
**Which of the following best describes her condition at this time?**

- A. Convulsive status epilepticus  **(key)**
- B. Febrile delirium with rigors
- C. Postictal automatisms
- D. Sepsis with myoclonic jerks
- E. Simple febrile seizure

*Explanation:* A convulsive seizure lasting more than 5 minutes is status epilepticus, whatever its trigger. Fever does not make an 18 minute seizure simple, because simple febrile seizures last under 15 minutes and she is still seizing. Rhythmic jerking of all limbs with eye deviation is seizure activity, not rigors or delirium. Postictal automatisms occur after a seizure ends.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

#### Q2
**Which of the following is the most appropriate medication for her now?**

- A. Diazepam 6.5 mg rectal
- B. Levetiracetam 780 mg IV
- C. Lorazepam 1.3 mg IV  **(key)**
- D. Lorazepam 4 mg IV
- E. Phenobarbital 260 mg IV

*Explanation:* She has had one benzodiazepine dose, and TREKK advises a second dose before a second line agent. With IV access, lorazepam 0.1 mg/kg is 1.3 mg for 13 kg. Lorazepam 4 mg is the adult maximum and three times her dose. Rectal diazepam is slower and less effective when IV access is available. Levetiracetam and phenobarbital are second line drugs, given if seizures continue after two benzodiazepine doses.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

#### Q3
*Update:* Five minutes after the lorazepam she is still seizing.

**Which of the following is the most appropriate next medication for this child?**

- A. Fosphenytoin 130 mg PE IV
- B. Levetiracetam 780 mg IV  **(key)**
- C. Lorazepam 1.3 mg IV
- D. Midazolam infusion at 0.1 mg/kg/hour
- E. Phenobarbital 60 mg IV

*Explanation:* After two benzodiazepine doses, TREKK prefers levetiracetam 60 mg/kg IV, maximum 3 000 mg, which is 780 mg for 13 kg. A third benzodiazepine increases the risk of apnea. Fosphenytoin at 130 mg PE is 10 mg PE/kg, half the loading dose. Phenobarbital 60 mg is well below 20 mg/kg. An infusion is third line, after two second line agents fail.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

### seizures-24: Infant with ear pain and a seizure

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 9-month-old boy is brought to the emergency department after a 2 minute generalized seizure at home 1 hour ago. He has had fever for 3 days. A walk-in clinic diagnosed otitis media 2 days ago and started amoxicillin. His parents chose to delay vaccines, and he has received none. He is now sleepy but rousable, feeding poorly and irritable when handled. His anterior fontanelle is full. There is no rash. Both tympanic membranes are dull. He moves all limbs equally.

- Temperature: 38.9°C rectal
- Pulse: 172/minute
- Resp.: 40/minute
- O2 sat: 97% on room air
- Weight: 8.6 kg

#### Q1
**Which of the following findings most strongly argues against managing this as a simple febrile seizure?**

- A. Age of 9 months at the seizure
- B. Duration of 2 minutes
- C. Full fontanelle and irritability  **(key)**
- D. Generalized seizure activity
- E. Temperature of 38.9°C

*Explanation:* A full fontanelle, irritability when handled and poor feeding an hour after the seizure suggest meningitis, so he has not made the full recovery expected after a simple febrile seizure. An age of 9 months falls within the 6 month to 5 year range. A generalized seizure of 2 minutes fits the simple definition. The height of the fever does not decide whether a febrile seizure is simple.

*Key feature:* Seizures 8. Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests.

*Source:* American Academy of Pediatrics, Subcommittee on Febrile Seizures. Clinical practice guideline. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011.

#### Q2
**Which of the following is the most appropriate next step in his evaluation?**

- A. Blood culture and lumbar puncture  **(key)**
- B. Change to amoxicillin clavulanate
- C. EEG before discharge
- D. Outpatient review in 24 hours
- E. Urine culture only

*Explanation:* He has meningeal signs, so lumbar puncture is needed. Even without them, the AAP lists lumbar puncture as an option for an infant of 6 to 12 months who is not immunized against Haemophilus influenzae type b and pneumococcus, and for a child pretreated with antibiotics, which can mask meningitis. Changing the oral antibiotic or arranging outpatient review delays the diagnosis. EEG does not identify infection. A urine culture alone misses meningitis.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* American Academy of Pediatrics, Subcommittee on Febrile Seizures. Clinical practice guideline. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011.

#### Q3
*Update:* Blood culture is drawn. The CSF is cloudy with 1 400 x 10^6/L white cells, mostly neutrophils.

**Which of the following empiric antimicrobial regimens is most appropriate for this infant?**

- A. Ampicillin and gentamicin IV
- B. Ceftriaxone and vancomycin IV  **(key)**
- C. High dose oral amoxicillin
- D. Piperacillin tazobactam IV
- E. Vancomycin alone IV

*Explanation:* The CPS recommends a third generation cephalosporin plus vancomycin for suspected bacterial meningitis in children beyond the first month, to cover cephalosporin resistant pneumococcus. An unimmunized infant is also at risk of Haemophilus influenzae type b. Ampicillin and gentamicin is a neonatal regimen with poor CSF coverage here. Oral amoxicillin has already failed and does not treat meningitis. Piperacillin tazobactam is not a meningitis regimen. Vancomycin alone misses Haemophilus and meningococcus.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Le Saux N. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Paediatr Child Health. 2014. https://cps.ca/en/documents/position/management-of-bacterial-meningitis

### seizures-25: Boy found stiff and jerking in bed

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 9-year-old boy is brought to the emergency department by his parents after they heard a noise from his bedroom at 06:00 and found him stiff and jerking all four limbs. It lasted about 2 minutes. He was confused for 20 minutes and now, 2 hours later, is back to his usual self. He has had no fever, headache, vomiting or recent illness. He has no past history, his development is normal and he takes no medications. There was no head injury. He has bitten the side of his tongue. The neurological examination is normal.

- Temperature: 36.9°C oral
- Pulse: 90/minute
- Resp.: 18/minute
- BP: 104/66 mmHg
- O2 sat: 99% on room air
- Weight: 30 kg

#### Q1
**Which of the following is the most appropriate plan for investigating this seizure?**

- A. CT head before discharge
- B. Electrolytes, glucose and CBC
- C. Lumbar puncture before discharge
- D. MRI brain before discharge
- E. Outpatient EEG and neurology review  **(key)**

*Explanation:* He has had a first unprovoked generalized seizure and has fully recovered with a normal examination. Most children should have an outpatient EEG, and neurology follow up decides on MRI. Routine blood work is not recommended without vomiting, dehydration or failure to return to baseline. Urgent imaging is kept for red flags such as a focal deficit or persistent altered mental status. He has no fever or meningism, so lumbar puncture is not indicated.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025. https://www.cfp.ca/content/71/9/563

#### Q2
**Which of the following findings, had it been present, would most justify urgent neuroimaging?**

- A. Family history of epilepsy
- B. Lateral tongue bite
- C. Persistent left arm weakness  **(key)**
- D. Postictal confusion of 20 minutes
- E. Seizure on waking from sleep

*Explanation:* A persistent focal neurological deficit after a first seizure is a red flag for a structural lesion and justifies urgent imaging. A family history of epilepsy and a seizure on waking do not suggest a lesion needing emergency care. A lateral tongue bite supports that the event was a seizure but does not predict an imaging finding. Brief postictal confusion that resolves is expected.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025. https://www.cfp.ca/content/71/9/563

#### Q3
*Update:* His parents ask how to keep him safe over the coming weeks.

**Which of the following is the most appropriate safety advice for him?**

- A. Avoid all school sports
- B. Climb freely at the playground
- C. Stay home from school for a month
- D. Swim alone at the public pool
- E. Take showers rather than baths  **(key)**

*Explanation:* Showers are safer than baths because a seizure in a bath can cause drowning. Swimming should be supervised, not done alone. Climbing above his own height should be supervised. Excluding him from school or from all sports adds harm without a clear safety gain.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

### seizures-26: Infant with jerking of one side

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 4-month-old boy is brought to the emergency department after three episodes today of rhythmic jerking of his right arm and leg, each lasting about 1 minute. Between episodes he feeds well. He was born at term and is exclusively breastfed. He has received no vitamin D supplement. His family lives in northern Manitoba, and he has had little sun exposure this winter. There is no fever, vomiting or diarrhea. He is alert with a soft fontanelle. His wrists appear widened. Capillary glucose is 4.8 mmol/L.

- Temperature: 36.8°C rectal
- Pulse: 150/minute
- Resp.: 36/minute
- O2 sat: 99% on room air
- Weight: 6.8 kg

#### Q1
*Update:* Venous blood shows ionized calcium 0.72 mmol/L (normal 1.10 to 1.30), sodium 139 mmol/L and magnesium 0.80 mmol/L.

**Which of the following is the most appropriate immediate treatment for this infant?**

- A. IV calcium gluconate with monitoring  **(key)**
- B. IV levetiracetam loading dose
- C. IV magnesium sulfate bolus
- D. IV phenobarbital loading dose
- E. Oral vitamin D 400 IU daily

*Explanation:* His seizures are caused by severe hypocalcemia, a quickly reversible cause that anticonvulsants will not correct. Slow IV calcium gluconate with cardiac monitoring treats the cause. Levetiracetam and phenobarbital do not correct the calcium. His magnesium of 0.80 mmol/L is normal, so magnesium is not needed. Oral vitamin D is part of later treatment but acts far too slowly to stop seizures.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 169, Pediatric Neurologic Disorders. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

#### Q2
**Which of the following is the most likely underlying cause of his hypocalcemia?**

- A. Congenital hypoparathyroidism
- B. Magnesium deficiency
- C. Nutritional vitamin D deficiency  **(key)**
- D. Pseudohypoparathyroidism
- E. Renal tubular acidosis

*Explanation:* An exclusively breastfed infant with no vitamin D supplement, little sun exposure, a northern home and widened wrists fits vitamin D deficiency rickets. Canadian surveillance found hypocalcemic seizures were a common presentation of rickets in infants. His magnesium is normal. Congenital hypoparathyroidism usually presents earlier and does not cause rickets. Pseudohypoparathyroidism and renal tubular acidosis are rare and not suggested by this history.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Ward LM, Gaboury I, Ladhani M, Zlotkin S. Vitamin D-deficiency rickets among children in Canada. CMAJ. 2007. https://pubmed.ncbi.nlm.nih.gov/17600035/

#### Q3
**Which of the following would most likely have prevented this presentation?**

- A. Calcium supplement for the mother
- B. Earlier introduction of cow's milk
- C. Switching to soy based formula
- D. Vitamin D 400 IU daily from birth  **(key)**
- E. Weekly sun exposure through a window

*Explanation:* In the Canadian surveillance study no rickets occurred in breastfed children who received regular vitamin D 400 IU daily. Breast milk alone does not supply enough vitamin D. Maternal calcium does not correct infant vitamin D deficiency. Cow's milk is not advised in the first year. Formula change is not needed for a breastfed infant. Window glass blocks the ultraviolet light needed to make vitamin D.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Ward LM, Gaboury I, Ladhani M, Zlotkin S. Vitamin D-deficiency rickets among children in Canada. CMAJ. 2007. https://pubmed.ncbi.nlm.nih.gov/17600035/

### seizures-27: Pregnant woman with a seizure after years without one

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 29-year-old woman at 26 weeks of gestation is brought to the emergency department after a generalized tonic clonic seizure at home that lasted 2 minutes. She has had focal to bilateral seizures since age 15, controlled on lamotrigine 200 mg twice daily with no seizures for 3 years. Her dose has not changed during pregnancy and she has not missed doses. Her pregnancy has otherwise been normal, and she has no contractions. She has no headache or visual symptoms. She is now alert and oriented with a normal neurological examination. Urine dipstick shows no protein. Fetal heart rate is 145/minute.

- Temperature: 36.8°C oral
- Pulse: 96/minute
- Resp.: 16/minute
- BP: 118/72 mmHg
- O2 sat: 98% on room air
- Weight: 72 kg

#### Q1
**Which of the following is the most likely cause of her breakthrough seizure?**

- A. Early onset eclampsia
- B. Falling lamotrigine levels  **(key)**
- C. Gestational hyponatremia
- D. Nonadherence to lamotrigine
- E. Sleep loss from late pregnancy

*Explanation:* Lamotrigine clearance rises steeply during pregnancy, so levels fall when the dose is unchanged. Seizures become more likely when the level drops well below her own prepregnancy target. Eclampsia is unlikely with a BP of 118/72 mmHg, no proteinuria and no headache. She reports taking every dose. Nothing suggests hyponatremia or unusual sleep loss.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Pennell PB, Peng L, Newport DJ, et al. Lamotrigine in pregnancy. Clearance, therapeutic drug monitoring, and seizure frequency. Neurology. 2008. https://pubmed.ncbi.nlm.nih.gov/18046009/

#### Q2
**Which of the following investigations is most useful for her ongoing management?**

- A. CT head with abdominal shielding
- B. EEG in the department
- C. Lamotrigine serum level  **(key)**
- D. Serum prolactin level
- E. Urine toxicology screen

*Explanation:* A lamotrigine level compared with her prepregnancy level guides the dose increase she needs, and monitoring levels through pregnancy reduces seizures. She has known epilepsy, a typical seizure, full recovery and a normal examination, so neuroimaging adds little. An EEG in the department will not change management. Prolactin and toxicology screening do not help when the cause is clear.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Pennell PB, Peng L, Newport DJ, et al. Lamotrigine in pregnancy. Clearance, therapeutic drug monitoring, and seizure frequency. Neurology. 2008. https://pubmed.ncbi.nlm.nih.gov/18046009/

#### Q3
*Update:* Two hours later she has another generalized seizure that continues 6 minutes after lorazepam 4 mg IV.

**Which of the following second line agents is most appropriate for her?**

- A. Fosphenytoin 360 mg PE IV
- B. Lamotrigine 200 mg PO
- C. Levetiracetam 4 320 mg IV  **(key)**
- D. Phenobarbital 100 mg IV
- E. Valproic acid 2 880 mg IV

*Explanation:* Levetiracetam 60 mg/kg is 4 320 mg for 72 kg, under the 4 500 mg maximum, and it has one of the lowest risks of fetal malformation. Valproic acid 40 mg/kg is a correct status dose, but valproate carries the highest risk of major malformations and neurodevelopmental harm and should be avoided in pregnancy. Fosphenytoin 360 mg PE is 5 mg PE/kg, a quarter of the loading dose. Phenobarbital 100 mg is far below 20 mg/kg. Oral lamotrigine cannot be given to a seizing patient.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Pack AM, Oskoui M, Williams Roberson S, et al. Teratogenesis, perinatal, and neurodevelopmental outcomes after in utero exposure to antiseizure medication. Practice guideline from the AAN, AES, and SMFM. Neurology. 2024.

#### Q4
**Which of the following is also required while her seizures are being treated?**

- A. Delay drugs until obstetrics arrives
- B. Emergency cesarean delivery
- C. Supine positioning for airway
- D. Tocolysis with nifedipine
- E. Uterine displacement and fetal monitoring  **(key)**

*Explanation:* At 26 weeks the uterus compresses the vena cava when she lies supine, so left lateral tilt or manual uterine displacement protects cardiac output. The fetus is viable, so fetal heart monitoring and obstetric involvement are needed. Treatment of status must not wait for obstetrics. Emergency delivery is not a treatment for maternal status epilepticus, which is stopped with drugs first. She has no contractions, so tocolysis has no role.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 174, Medical Emergencies During Pregnancy. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

### seizures-28: Seizures after a recent hospital stay

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old man with generalized epilepsy is brought to the emergency department by ambulance after two generalized seizures today. He recovered fully between them. He has been seizure free for 4 years on valproic acid 1 000 mg twice daily. Five days ago he was discharged from hospital after treatment of a complicated urinary infection, and home care is giving him IV ertapenem daily. He reports taking every valproic acid dose. He is now alert with a normal neurological examination. There was no head injury. Capillary glucose is 6.0 mmol/L.

- Temperature: 37.0°C oral
- Pulse: 92/minute
- Resp.: 16/minute
- BP: 136/82 mmHg
- O2 sat: 97% on room air
- Weight: 88 kg

#### Q1
*Update:* His valproic acid level is 95 umol/L. His level 6 months ago was 480 umol/L on the same dose.

**Which of the following is the most likely cause of his low valproic acid level?**

- A. Carbapenem drug interaction  **(key)**
- B. Enzyme induction by the infection
- C. Laboratory error in the assay
- D. Malabsorption from the illness
- E. Unreported missed doses

*Explanation:* Carbapenems such as ertapenem and meropenem cause a rapid and marked fall in valproic acid levels, often within a day of starting. His level fell from 480 to 95 umol/L while taking the same dose, and the timing matches the ertapenem course. Infection does not induce valproate metabolism to this degree. He reports full adherence, and nothing suggests malabsorption or a laboratory error.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Mancl EE, Gidal BE. The effect of carbapenem antibiotics on plasma concentrations of valproic acid. Ann Pharmacother. 2009. https://doi.org/10.1345/aph.1m296

#### Q2
**Which of the following is the most appropriate way to manage this interaction?**

- A. Continue and recheck in a week
- B. Double the valproic acid dose
- C. Give an IV valproic acid load
- D. Stop valproic acid permanently
- E. Switch to a non carbapenem antibiotic  **(key)**

*Explanation:* Raising the valproate dose or giving a load does not reliably overcome the interaction, and levels may stay low for days after the carbapenem stops. The best step is to switch to an antibiotic from another class that treats his infection, with a bridging antiseizure drug if needed. Continuing unchanged leaves him at risk of more seizures. Valproate controlled his epilepsy for 4 years, so stopping it permanently is not warranted.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Mancl EE, Gidal BE. The effect of carbapenem antibiotics on plasma concentrations of valproic acid. Ann Pharmacother. 2009. https://doi.org/10.1345/aph.1m296

#### Q3
**Which of the following best reflects the need for neuroimaging in this patient today?**

- A. CT head because he is over 50
- B. CT head for any seizure cluster
- C. MRI brain before discharge
- D. Not needed given the clear cause  **(key)**
- E. Urgent CT angiography

*Explanation:* In known epilepsy, a typical seizure with a clear precipitant, full recovery, no head injury and a normal examination does not need emergency neuroimaging. His falling valproate level explains the cluster. Age alone is not an indication for CT in a patient with established epilepsy. MRI and CT angiography answer questions that his presentation does not raise.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 88, Seizure. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

### seizures-29: Boy with epilepsy home from camp

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 12-year-old boy with focal epilepsy is brought to the emergency department by his mother after a seizure at home. He had one of his typical focal seizures that became generalized and lasted 7 minutes, until she gave his prescribed intranasal midazolam 5 mg. He missed several evening doses of levetiracetam this week at a sleepover camp. He has had no fever, vomiting or head injury. Capillary glucose in the ambulance was 5.8 mmol/L. Now, 90 minutes later, he is awake, oriented and at his neurological baseline. His neck is supple.

- Temperature: 37.0°C oral
- Pulse: 94/minute
- Resp.: 18/minute
- BP: 108/66 mmHg
- O2 sat: 98% on room air
- Weight: 40 kg

#### Q1
**Which of the following investigations is required in the emergency department for this boy?**

Select 1.

- A. CBC with differential
- B. CT head without contrast
- C. Electrolytes and glucose
- D. Emergency department EEG
- E. Levetiracetam serum level
- F. Lumbar puncture and CSF
- G. Urine toxicology screen
- H. None  **(key)**

*Explanation:* He had a typical seizure with a clear trigger, missed doses, and has returned to baseline with a normal glucose. TREKK reserves CT for trauma, raised intracranial pressure or focal signs, and lumbar puncture for suspected meningitis, and he has none of these. Drug levels are suggested for agents such as phenytoin, carbamazepine, phenobarbital and valproic acid, not levetiracetam. Blood work, EEG and toxicology screening would not change his care.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

#### Q2
**Which of the following is the most appropriate plan for his levetiracetam?**

- A. Change to a different drug
- B. Double the dose for one week
- C. Resume usual dose with adherence plan  **(key)**
- D. Stop it and refer to neurology
- E. Switch to phenytoin today

*Explanation:* Missed doses explain this seizure, and the drug has controlled his epilepsy well when taken. Resuming the usual dose, with a plan such as reminders and supervised dosing away from home, addresses the cause. Changing or stopping an effective drug, or switching to phenytoin, adds risk without benefit. Doubling the dose adds side effects without evidence of benefit.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 169, Pediatric Neurologic Disorders. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

#### Q3
**Which of the following is the most appropriate advice about his rescue medication at home?**

- A. Give a second dose every 5 minutes at home
- B. Give midazolam if a seizure lasts 5 minutes  **(key)**
- C. Give midazolam only after 15 minutes
- D. Rescue kit is no longer needed
- E. Wait for paramedics before any dose

*Explanation:* Treatment should start within about 5 minutes of seizure onset, because delay makes seizures harder to stop. Waiting 15 minutes or waiting for paramedics loses that window. TREKK advises no more than two benzodiazepine doses because of apnea risk, so repeated home doses are unsafe. His seizure today needed the kit, so it is still needed.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/

### seizures-30: Woman with a long event and closed eyes

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 26-year-old woman is brought to the emergency department by ambulance with a seizure that has lasted 25 minutes. Paramedics gave midazolam 10 mg IM. She has had several similar events in the past year and takes levetiracetam, although an earlier EEG was normal. During the event her eyes are tightly closed and she resists eye opening. Her head moves from side to side and her pelvis thrusts. The movements wax and wane, and they pause briefly when her name is called. Her colour is good. Capillary glucose is 5.2 mmol/L.

- Temperature: 36.9°C oral
- Pulse: 104/minute
- Resp.: 20/minute
- BP: 128/80 mmHg
- O2 sat: 99% on room air
- Weight: 64 kg

#### Q1
**Which of the following features of this event most suggests a psychogenic nonepileptic seizure?**

- A. Eyes forcibly closed  **(key)**
- B. Heart rate of 104/minute
- C. Normal capillary glucose
- D. Prior similar events
- E. Urinary incontinence

*Explanation:* Forced eye closure with resistance to opening during an event favours a psychogenic nonepileptic seizure, as do side to side head movements, pelvic thrusting and waxing and waning activity. Eyes are usually open in generalized epileptic seizures. A mild tachycardia, a normal glucose and prior events occur with both kinds of event. Incontinence can occur in either and does not separate them.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* LaFrance WC Jr, Baker GA, Duncan R, Goldstein LH, Reuber M. Minimum requirements for the diagnosis of psychogenic nonepileptic seizures. A staged approach. A report from the International League Against Epilepsy Nonepileptic Seizures Task Force. Epilepsia. 2013. https://pubmed.ncbi.nlm.nih.gov/24111933/

#### Q2
*Update:* Five minutes later the movements continue unchanged. She breathes regularly between thrusts, her O2 sat stays at 99% on room air and her pupils are reactive.

**Which of the following is the most appropriate next step in her management?**

- A. Fosphenytoin 1 280 mg PE IV
- B. Intubation and propofol infusion
- C. Lorazepam 4 mg IV
- D. Observation with EEG if available  **(key)**
- E. Sternal rub and ammonia capsules

*Explanation:* After 30 minutes of generalized movements she still has regular breathing, an O2 sat of 99% and reactive pupils, she reacts to her name, and the features point to a nonepileptic event. Generalized epileptic convulsions of this length often cause desaturation or cyanosis. Repeated benzodiazepines, loading doses and intubation expose patients with nonepileptic events to real harm, so supportive observation is appropriate. EEG during an event is the best test when there is doubt, and escalation is resumed if it shows seizure activity or her condition changes. Painful or noxious stimuli are unhelpful and damage trust.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 88, Seizure. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

#### Q3
*Update:* The event stops after 10 more minutes. She is alert and asks what is happening to her.

**Which of the following is the most appropriate way to discuss the likely diagnosis with her?**

- A. Avoid discussing it until she leaves
- B. Explain it as a real, treatable condition  **(key)**
- C. Increase the levetiracetam dose
- D. Stop levetiracetam today
- E. Tell her the event was faked

*Explanation:* Psychogenic nonepileptic seizures are involuntary, and a clear, respectful explanation that the condition is real and treatable improves engagement with care. The diagnosis should be confirmed with video EEG through neurology. Stopping levetiracetam in the emergency department is premature, because some patients have both epileptic and nonepileptic events. Raising the dose treats the wrong problem. Calling the event faked is inaccurate and harmful.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* LaFrance WC Jr, Baker GA, Duncan R, Goldstein LH, Reuber M. Minimum requirements for the diagnosis of psychogenic nonepileptic seizures. A staged approach. A report from the International League Against Epilepsy Nonepileptic Seizures Task Force. Epilepsia. 2013. https://pubmed.ncbi.nlm.nih.gov/24111933/

### seizures-31: Older man slumping in his chair

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department. An 81-year-old man is brought in by his wife after two episodes today in which he suddenly slumped in his chair, went grey and had a few jerks of his arms for about 15 seconds. Each time he woke within a minute and was not confused. He had a similar episode last week. He takes ramipril and atorvastatin. His wife asks whether he is having seizures. He is alert and oriented. The neurological examination is normal. Capillary glucose is 6.3 mmol/L.

- Temperature: 36.6°C oral
- Pulse: 34/minute
- Resp.: 16/minute
- BP: 96/50 mmHg
- O2 sat: 95% on room air
- Weight: 78 kg

#### Q1
**Which of the following features best distinguishes these episodes from generalized seizures?**

- A. Age of more than 80 years
- B. Events occurring while seated
- C. Normal capillary glucose level
- D. Rapid recovery without confusion  **(key)**
- E. Several events over one week

*Explanation:* Brief jerks with pallor and recovery within a minute without confusion are typical of convulsive syncope, while a generalized seizure is usually followed by postictal confusion. His age, a normal glucose and repeated events occur with both. Seizures can also happen while seated, so posture does not separate the two, but sudden collapse while seated raises concern for an arrhythmia.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011.

#### Q2
**Which of the following investigations is most important for him now?**

- A. CT head without contrast
- B. ECG with rhythm strip  **(key)**
- C. EEG before discharge
- D. Orthostatic vital signs
- E. Troponin and CK levels

*Explanation:* A pulse of 34/minute with hypotension and recurrent collapse points to a bradyarrhythmia, and an ECG with a rhythm strip is the key test for syncope. Orthostatic vitals help in suspected orthostatic syncope but will not explain a pulse of 34. CT and EEG look for neurological causes that his normal examination and rapid recovery do not suggest. Cardiac markers do not identify the rhythm.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011.

#### Q3
*Update:* The ECG shows complete heart block with a wide complex escape rhythm at 34/minute. Atropine 1 mg IV has no effect. He becomes grey and drowsy.

**Which of the following is the most appropriate next step in his treatment?**

- A. Adenosine 6 mg IV
- B. Amiodarone 150 mg IV
- C. Calcium chloride 1 g IV
- D. Procainamide 1 g IV
- E. Transcutaneous pacing  **(key)**

*Explanation:* Unstable bradycardia that does not respond to atropine needs transcutaneous pacing, or a dopamine or epinephrine infusion, while transvenous pacing is arranged. A wide complex escape rhythm in complete heart block often does not respond to atropine. Adenosine, amiodarone and procainamide slow conduction and could cause asystole. Calcium is for hyperkalemia or calcium channel blocker toxicity, and neither is suggested.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

### seizures-32: Agitated man brought in by police

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 33-year-old man is brought to the emergency department by police after he was found agitated in a downtown alley. Friends told police he had been using cocaine all night. Police held him face down for 10 minutes before the ambulance arrived. On arrival he has a generalized tonic clonic seizure that stops after 2 minutes. He is diaphoretic and confused. Pupils are 7 mm. Capillary glucose is 5.9 mmol/L.

- Temperature: 41.2°C rectal
- Pulse: 148/minute
- Resp.: 28/minute
- BP: 188/110 mmHg
- O2 sat: 95% on room air
- Weight: 80 kg

#### Q1
*Update:* After the seizure he becomes combative and pulls at his IV.

**Which of the following is the most appropriate medication for him now?**

- A. Diazepam 10 mg IV  **(key)**
- B. Haloperidol 10 mg IM
- C. Labetalol 20 mg IV
- D. Metoprolol 5 mg IV
- E. Phenytoin 1 600 mg IV

*Explanation:* Benzodiazepines treat the seizures, agitation, tachycardia and hypertension of cocaine toxicity, and they reduce heat production from muscle activity. Haloperidol does not treat seizures and may impair heat loss. The safety of beta blockers such as metoprolol or labetalol in cocaine toxicity is controversial, and sedation often controls the BP. Phenytoin does not treat his agitation, tachycardia or hypertension.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023. https://doi.org/10.1161/CIR.0000000000001161

#### Q2
**Which of the following is the most important treatment for his temperature of 41.2°C?**

- A. Acetaminophen 1 g PR
- B. Bromocriptine 2.5 mg PO
- C. Cold water immersion  **(key)**
- D. Dantrolene 2.5 mg/kg IV
- E. Ibuprofen 400 mg PO

*Explanation:* His hyperthermia comes from muscle activity and sympathetic overdrive, not a change in the hypothalamic set point, so it needs rapid external cooling such as ice water immersion together with sedation. A temperature above 41°C is life threatening. Antipyretics do not work on this kind of hyperthermia. Dantrolene has no proven role in stimulant toxicity. Bromocriptine is used for neuroleptic malignant syndrome, not cocaine toxicity.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023. https://doi.org/10.1161/CIR.0000000000001161

#### Q3
*Update:* He is sedated and cooled to 38.8°C in 20 minutes. CT head is normal.

**Which of the following laboratory tests is most important for him now?**

- A. Amylase and lipase
- B. Blood alcohol level
- C. Potassium, creatinine and CK  **(key)**
- D. Serum prolactin level
- E. Urine drug screen

*Explanation:* Seizure, severe agitation, prone restraint and hyperthermia all cause rhabdomyolysis, which can lead to hyperkalemia and acute kidney injury. Potassium, creatinine and CK guide fluids and monitoring. A drug screen adds little when cocaine use is known and will not change treatment. Prolactin, alcohol level and pancreatic enzymes do not address the dangerous complications here.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023. https://doi.org/10.1161/CIR.0000000000001161

### seizures-33: Seizure at work in a recent immigrant

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 34-year-old man who moved to Canada from Guatemala 2 years ago is brought to the emergency department after a seizure at work. Coworkers saw his right hand and the right side of his face twitch, then he fell and had generalized jerking for about 1 minute. He is now back to baseline. He has had no headache, fever or prior seizures, and he takes no medications. The neurological examination is normal. Capillary glucose is 5.7 mmol/L.

- Temperature: 36.8°C oral
- Pulse: 84/minute
- Resp.: 16/minute
- BP: 132/78 mmHg
- O2 sat: 98% on room air
- Weight: 70 kg

#### Q1
**Which of the following is the most appropriate initial investigation for this patient?**

- A. EEG before discharge
- B. Lumbar puncture and CSF
- C. Neuroimaging with CT today  **(key)**
- D. Serum prolactin level
- E. Stool ova and parasites

*Explanation:* A first seizure with a focal onset, twitching of the right hand and face, suggests a structural lesion in the left hemisphere and needs neuroimaging. He comes from a region where neurocysticercosis is a leading cause of seizures, and guidelines use CT and MRI for its diagnosis. Stool testing does not diagnose brain cysts. EEG does not show the cause. He has no fever or meningism, so lumbar puncture is not indicated. Prolactin does not change care.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis. 2017 clinical practice guidelines by the Infectious Diseases Society of America and the American Society of Tropical Medicine and Hygiene. Clin Infect Dis. 2018. https://academic.oup.com/cid/article/66/8/e49/4885412

#### Q2
*Update:* CT shows a single 12 mm cyst in the left frontal cortex with an eccentric bright dot inside and surrounding edema. There are no calcifications or hydrocephalus.

**Which of the following is the most likely diagnosis in this patient?**

- A. Bacterial brain abscess
- B. Cerebral toxoplasmosis
- C. High grade glioma
- D. Metastatic tumour
- E. Neurocysticercosis  **(key)**

*Explanation:* A cyst containing an eccentric dot, the scolex, is characteristic of neurocysticercosis, and he lived in an endemic area. An abscess would usually come with fever and a thick enhancing rim without a scolex. Toxoplasmosis occurs with immune suppression, which is not described. A glioma or metastasis would not contain a scolex, and he has no known cancer.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis. 2017 clinical practice guidelines by the Infectious Diseases Society of America and the American Society of Tropical Medicine and Hygiene. Clin Infect Dis. 2018. https://academic.oup.com/cid/article/66/8/e49/4885412

#### Q3
**Which of the following is the most appropriate initial management in the emergency department?**

- A. Albendazole alone today
- B. Antiseizure drug and referral  **(key)**
- C. Neurosurgical excision
- D. Observation without treatment
- E. Praziquantel alone today

*Explanation:* Patients with seizures from neurocysticercosis should receive antiseizure medication, and specialist follow up plans antiparasitic treatment. Antiparasitic drugs are given with corticosteroids after an eye examination, because killing the cyst causes inflammation and more edema. Starting albendazole or praziquantel alone is therefore unsafe. A single parenchymal cyst does not need surgery. Observation without treatment leaves him at risk of more seizures.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis. 2017 clinical practice guidelines by the Infectious Diseases Society of America and the American Society of Tropical Medicine and Hygiene. Clin Infect Dis. 2018. https://academic.oup.com/cid/article/66/8/e49/4885412

### seizures-34: Weakness after jerking of the left arm

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 63-year-old woman is brought to the emergency department by ambulance 50 minutes after her husband found her with jerking of the left arm that spread to both sides and lasted about 2 minutes. When the jerking stopped she could not move her left arm or leg. A right frontal meningioma was removed 3 years ago, and she had one seizure 6 months after surgery. She stopped levetiracetam on her own 6 months ago. She takes ramipril. She is drowsy but follows commands. She has a dense left hemiparesis and a left facial droop. Capillary glucose is 7.4 mmol/L.

- Temperature: 37.1°C oral
- Pulse: 96/minute
- Resp.: 18/minute
- BP: 168/94 mmHg
- O2 sat: 97% on room air
- Weight: 68 kg

#### Q1
**Which of the following is the most likely cause of her weakness given this history?**

- A. Conversion disorder
- B. Hemorrhage into the old tumour bed
- C. Hypoglycemic hemiparesis
- D. Postictal Todd paresis  **(key)**
- E. Right middle cerebral artery stroke

*Explanation:* A focal seizure that began in the left arm, from a known right frontal focus, after she stopped her antiseizure drug, followed by weakness of the same side, fits Todd paresis. Stroke and hemorrhage remain possible and must be excluded, but the sequence favours a postictal deficit. Her glucose of 7.4 mmol/L excludes hypoglycemia. Nothing suggests a functional disorder.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

#### Q2
**Which of the following is the most appropriate imaging for her now?**

- A. Carotid Doppler ultrasound
- B. CT head and CT angiography  **(key)**
- C. EEG before any imaging
- D. MRI brain in 48 hours
- E. No imaging until weakness resolves

*Explanation:* A seizure does not exclude stroke, and she is within the window for reperfusion. Canadian stroke guidance excludes thrombolysis only when the deficit is judged to be postictal Todd paralysis, so noncontrast CT with CT angiography is needed now to look for hemorrhage or a vessel occlusion before that judgment is made. Waiting for the weakness to resolve, or delaying to MRI, loses the treatment window. Carotid ultrasound and EEG do not answer the urgent question.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024. https://www.strokebestpractices.ca/recommendations/acute-stroke-management

#### Q3
*Update:* CT shows postoperative change only. CT angiography shows no occlusion. Ninety minutes later her strength is improving.

**Which of the following is the most appropriate antiseizure plan for her?**

- A. Rescue diazepam only
- B. Restart levetiracetam today  **(key)**
- C. Start treatment after an EEG
- D. Wait for a third seizure
- E. No treatment until MRI is done

*Explanation:* Two unprovoked seizures more than 24 hours apart, here with a known structural cause, meet the definition of epilepsy. She had been controlled on levetiracetam, so restarting it today is appropriate. Delaying for an EEG or MRI, or waiting for another seizure, leaves her at high risk of recurrence. Rescue diazepam treats a prolonged seizure but does not prevent seizures.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Fisher RS, Acevedo C, Arzimanoglou A, et al. ILAE official report. A practical clinical definition of epilepsy. Epilepsia. 2014.

#### Q4
**Which of the following is the most appropriate advice about her private driving?**

- A. Now, since the cause is known
- B. Once off medication for 3 months
- C. Once seizure free on treatment 6 months  **(key)**
- D. Once strength returns after 1 week
- E. Only after a normal EEG at 12 months

*Explanation:* For epilepsy, the CMA guide allows private driving once the patient has been seizure free on medication for at least 6 months and the physician is confident of adherence. Her seizure followed stopping medication on her own, so adherence must be addressed. A known cause does not permit driving now. Recovery of strength and a normal EEG are not the criteria. Driving off medication is not advised after this recurrence.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section. https://driversguide.ca/sections/nervous-system

### seizures-35: Man with a seizure who flies for work

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 45-year-old man is brought to the emergency department by his wife after a witnessed generalized tonic clonic seizure at home lasting 90 seconds. He has no past history, takes no medications, drinks 2 beers a week and slept normally last night. He is a commercial airline pilot and also drives a car daily. He is now back to baseline with a normal neurological examination. Glucose 5.5 mmol/L and sodium 140 mmol/L. His ECG is normal. Noncontrast CT head is normal.

- Temperature: 36.7°C oral
- Pulse: 80/minute
- Resp.: 14/minute
- BP: 130/80 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following is the most appropriate plan for further investigation of this seizure?**

- A. Admission for continuous EEG
- B. Contrast CT head before discharge
- C. Lumbar puncture before discharge
- D. Outpatient EEG and MRI brain  **(key)**
- E. Serum prolactin and CK level

*Explanation:* After a first unprovoked seizure with full recovery, a normal CT and normal labs, EEG and MRI estimate his recurrence risk. An epileptiform EEG or a structural lesion on imaging raises that risk and guides treatment. He does not need admission for continuous EEG because he is at baseline. He has no fever or meningism for lumbar puncture. Contrast CT adds little before MRI. Prolactin and CK do not change management.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Krumholz A, et al. Evidence-based guideline. Management of an unprovoked first seizure in adults. American Academy of Neurology and American Epilepsy Society. Neurology. 2015.

#### Q2
**Which of the following best describes your obligation regarding his work as a pilot?**

- A. Advise him to self-report only
- B. Inform the aviation medical adviser  **(key)**
- C. Report only after a second seizure
- D. Wait for his neurologist to decide
- E. No action if he agrees to stop flying

*Explanation:* Under the federal Aeronautics Act, a physician who believes a patient holds an aviation medical certificate and has a condition likely to be a hazard to aviation safety must inform a medical adviser designated by the Minister without delay. The duty applies in every province and is not replaced by his agreement or by self-reporting. Waiting for a second seizure or a neurologist delays a report that is already required. The Act protects a physician who reports in good faith.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Aeronautics Act, R.S.C. 1985, c. A-2, section 6.5 (Canada). Medical and optometric information. 1985, as amended. https://laws-lois.justice.gc.ca/eng/acts/A-2/section-6.5.html

#### Q3
**Which of the following is the most appropriate advice about driving his car?**

- A. Continue driving with a passenger
- B. Drive after 1 month if EEG normal
- C. Drive again once CT is normal
- D. Drive only during daylight hours
- E. No driving for at least 3 months  **(key)**

*Explanation:* The CMA guide advises no private driving for at least 3 months after a single unprovoked seizure, with a complete neurological evaluation including EEG and imaging. A normal CT or a normal EEG at 1 month does not shorten this. A passenger cannot prevent a crash if he loses consciousness. Daylight driving does not reduce the risk of a seizure.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section. https://driversguide.ca/sections/nervous-system

### seizures-36: Seizure after two years of control

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 24-year-old woman with focal epilepsy presents to the emergency department after a coworker saw her stare, fumble with papers and not respond for 2 minutes. She has been seizure free for 2 years on lamotrigine 150 mg twice daily and has not missed doses. Seven weeks ago she started a combined oral contraceptive containing ethinyl estradiol. She has had no fever, alcohol or sleep loss. She is now back to baseline with a normal neurological examination and no injury. She drives to work daily.

- Temperature: 36.8°C oral
- Pulse: 82/minute
- Resp.: 14/minute
- BP: 116/70 mmHg
- O2 sat: 99% on room air

#### Q1
**Which of the following is the most likely cause of her breakthrough seizure?**

- A. Estrogen induced lamotrigine clearance  **(key)**
- B. New structural brain lesion
- C. Progestin induced hyponatremia
- D. Tolerance to lamotrigine
- E. Worsening of her epilepsy syndrome

*Explanation:* Estrogen containing contraceptives increase lamotrigine clearance and can lower levels by more than half. The timing after starting the pill, with full adherence and no other trigger, fits this interaction. A typical seizure with a normal examination does not suggest a new lesion. Contraceptives do not usually cause hyponatremia. Tolerance to lamotrigine and spontaneous worsening are less likely explanations than a known interaction with a clear start date.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Sabers A, Ohman I, Christensen J, Tomson T. Oral contraceptives reduce lamotrigine plasma levels. Neurology. 2003.

#### Q2
**Which of the following investigations are most appropriate in her emergency department assessment?**

Select 2.

- A. CT head without contrast
- B. EEG in the department
- C. Lamotrigine serum level  **(key)**
- D. Lumbar puncture
- E. MRI brain before discharge
- F. Pregnancy test  **(key)**
- G. Serum prolactin level
- H. Urine toxicology screen

*Explanation:* A lamotrigine level, compared with any earlier level, documents the fall and guides the dose change. Levels should be monitored when an estrogen contraceptive is started or stopped. A pregnancy test is needed in any woman of reproductive age with a seizure, because pregnancy also lowers lamotrigine levels and changes treatment choices. A typical seizure with a clear trigger and normal examination does not need imaging, EEG, lumbar puncture or toxicology in the emergency department.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Sabers A, Ohman I, Christensen J, Tomson T. Oral contraceptives reduce lamotrigine plasma levels. Neurology. 2003.

#### Q3
**Which of the following is the most appropriate advice about driving at discharge?**

- A. Continue driving if she feels well
- B. Drive only on local roads
- C. Drive only with a passenger
- D. Resume once lamotrigine is adjusted
- E. Stop driving from today  **(key)**

*Explanation:* The CMA guide states that any seizure is grounds for stopping all driving at once, and her physician will decide when she can resume. Adjusting the dose does not by itself make driving safe. Feeling well, driving locally or having a passenger does not reduce the risk of a crash during a seizure with impaired awareness.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section. https://driversguide.ca/sections/nervous-system

### seizures-37: Teenager with a seizure after a party

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 16-year-old girl is brought to the emergency department by her parents after a generalized tonic clonic seizure at 07:00, the morning after a party where she slept 3 hours. She is now back to baseline. On direct questioning she describes sudden jerks of her arms most mornings for a year, often making her spill cereal or drop her toothbrush. She thought she was clumsy. She has no other history and takes no medications. She has a learner's licence. The neurological examination is normal. Glucose is 5.3 mmol/L and a pregnancy test is negative.

- Temperature: 36.7°C oral
- Pulse: 88/minute
- Resp.: 16/minute
- BP: 110/68 mmHg
- O2 sat: 99% on room air
- Weight: 58 kg

#### Q1
**Which of the following history findings most changes the interpretation of this as a first seizure?**

- A. Absence of prior convulsions
- B. Early morning myoclonic jerks  **(key)**
- C. Recent party attendance
- D. Sleep deprivation last night
- E. Timing of the seizure at 07:00

*Explanation:* A year of morning arm jerks that make her drop things are myoclonic seizures, so this convulsion is not her first seizure. The pattern suggests juvenile myoclonic epilepsy, and epilepsy can be diagnosed once an epilepsy syndrome is recognized. Sleep deprivation and early morning timing are typical triggers in this syndrome but do not change the diagnosis on their own. The absence of prior convulsions misses the myoclonic seizures.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* Fisher RS, Acevedo C, Arzimanoglou A, et al. ILAE official report. A practical clinical definition of epilepsy. Epilepsia. 2014.

#### Q2
**Which of the following is the most appropriate plan to confirm the likely diagnosis?**

- A. CT head without contrast
- B. Lumbar puncture and CSF
- C. MRI brain with contrast
- D. Outpatient EEG and neurology  **(key)**
- E. Serum prolactin level

*Explanation:* Her year of myoclonic jerks means this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as photic stimulation supports the diagnosis of a generalized epilepsy syndrome. NICE advises EEG to support the diagnosis and identify the epilepsy syndrome. She is well with a normal examination, so it can be arranged as an outpatient with neurology follow up. Imaging is guided by findings such as focal signs, which she does not have. She has no fever or meningism for lumbar puncture. Prolactin does not confirm a syndrome.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

#### Q3
**Which of the following is the most appropriate advice about her learner's licence?**

- A. Continue under learner supervision
- B. Drive only in daylight
- C. Resume after a normal EEG
- D. Resume after 1 week of good sleep
- E. Stop until 6 months seizure free  **(key)**

*Explanation:* For epilepsy, the CMA guide allows private driving only after at least 6 months seizure free on medication, with confidence in adherence, and people with juvenile myoclonic epilepsy may not drive any class of vehicle unless they take appropriate antiseizure medication. A supervising adult cannot prevent a crash if she has a seizure. A normal EEG does not exclude epilepsy. A week of good sleep does not remove the risk. Daylight driving does not reduce seizure risk.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section. https://driversguide.ca/sections/nervous-system

#### Q4
**Which of the following is the most important counselling point about seizure triggers for her?**

- A. Avoid all physical exercise
- B. Avoid sleep loss and alcohol  **(key)**
- C. Eliminate dairy from her diet
- D. Limit fluids in the evening
- E. Stop using her mobile phone

*Explanation:* Her convulsion followed a night of 3 hours of sleep, and sleep deprivation and alcohol are strong triggers in juvenile myoclonic epilepsy. Regular sleep lowers her risk. Exercise is encouraged with sensible precautions. Diet, evening fluids and phone use are not established triggers.

*Key feature:* Seizures 7. In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing.

*Source:* Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 88, Seizure. https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html

### seizures-38: Young man after a vehicle rollover

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department with CT but no neurosurgeon. A 22-year-old man is brought in by ambulance 40 minutes after rolling an all-terrain vehicle without a helmet. He had a 1 minute generalized seizure at the scene. His GCS is 7 (E1 V2 M4). His right pupil is 5 mm and sluggish, and the left is 3 mm and reactive. He has a boggy right temporal scalp swelling. Capillary glucose is 7.9 mmol/L. He is intubated for airway protection. CT shows a 2 cm right epidural hematoma with midline shift.

- Temperature: 36.4°C tympanic
- Pulse: 58/minute
- Resp.: 14/minute
- BP: 176/98 mmHg
- O2 sat: 99% on a ventilator with FiO2 0.4
- Weight: 75 kg

#### Q1
*Update:* While transfer is arranged, he has a generalized seizure that has lasted 3 minutes despite a propofol infusion.

**Which of the following is the most appropriate medication to stop this seizure?**

- A. Dexamethasone 10 mg IV
- B. Lorazepam 4 mg IV  **(key)**
- C. Mannitol 75 g IV
- D. Phenytoin 300 mg PO
- E. Rocuronium 100 mg IV

*Explanation:* Seizures raise intracranial pressure and must be stopped quickly, and a benzodiazepine is first line. Rocuronium hides the convulsion but not the seizure. Mannitol treats raised pressure but does not stop a seizure. Oral phenytoin is far too slow. Corticosteroids are not recommended in traumatic brain injury.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Brain Trauma Foundation. Neurosurgery. 2017. https://braintrauma.org/coma/guidelines/severe-tbi

#### Q2
**Which of the following is the most appropriate additional antiseizure medication once the seizure stops?**

- A. Carbamazepine 200 mg by tube
- B. Fosphenytoin 1 500 mg PE IV  **(key)**
- C. Fosphenytoin 300 mg PE IV
- D. Topiramate 100 mg by tube
- E. Valproic acid 500 mg IV

*Explanation:* He has had early post-traumatic seizures and needs a full IV load. Fosphenytoin 20 mg PE/kg is 1 500 mg PE for 75 kg. Phenytoin is the agent recommended to reduce early seizures after severe traumatic brain injury. Fosphenytoin 300 mg PE is only 4 mg PE/kg. Enteral carbamazepine and topiramate act too slowly. Valproate did not prevent early seizures better than phenytoin, and a trial found a trend toward higher mortality.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Brain Trauma Foundation. Neurosurgery. 2017. https://braintrauma.org/coma/guidelines/severe-tbi

#### Q3
**Which of the following is the most important treatment of the cause of his seizures?**

- A. Hyperventilation to PaCO2 25 mmHg
- B. Hypothermia to 33°C
- C. Methylprednisolone infusion
- D. Pentobarbital infusion
- E. Urgent surgical evacuation  **(key)**

*Explanation:* An acute epidural hematoma in a comatose patient with anisocoria, here a GCS of 7 and a dilated right pupil, should be evacuated as soon as possible, which here means rapid transfer to neurosurgery. Prolonged hyperventilation to 25 mmHg or lower is not recommended because it reduces cerebral blood flow. Early prophylactic hypothermia and high dose barbiturates are not recommended as first steps. Steroids increase mortality in head injury.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Surgical Management of Traumatic Brain Injury Author Group. Neurosurgery. 2006. https://pubmed.ncbi.nlm.nih.gov/16710967/

### seizures-39: Farmer found in the barn

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department. A 52-year-old farmer is brought in by his son 1 hour after he was found in the barn beside a spilled container of organophosphate insecticide. His clothing is soaked with the chemical. He is confused, drooling and sweating. He has vomited and has been incontinent of urine and stool. His pupils are pinpoint. There are diffuse wheezes and crackles. Muscles in his thighs are twitching. While you examine him he has a generalized seizure that has lasted 3 minutes.

- Temperature: 37.2°C tympanic
- Pulse: 48/minute
- Resp.: 30/minute
- BP: 88/50 mmHg
- O2 sat: 86% on a non rebreather mask
- Weight: 90 kg

#### Q1
**Which of the following are the most appropriate immediate actions for this patient?**

Select 3.

- A. Atropine 2 mg IV, doubling doses  **(key)**
- B. Diazepam 10 mg IV  **(key)**
- C. Flumazenil 0.2 mg IV
- D. Fosphenytoin 1 500 mg PE IV
- E. Naloxone 2 mg IV
- F. Physostigmine 2 mg IV
- G. Remove clothing, staff in protective gear  **(key)**
- H. Succinylcholine for intubation

*Explanation:* He has a cholinergic crisis. Atropine is given early and the dose doubled every 5 minutes until the chest is clear. Benzodiazepines such as diazepam treat the seizures. Contaminated clothing is removed by staff wearing protective equipment. Physostigmine adds to cholinesterase inhibition. Succinylcholine causes prolonged paralysis because cholinesterase is inhibited. Fosphenytoin, naloxone and flumazenil do not treat this toxidrome.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008. https://pubmed.ncbi.nlm.nih.gov/17706760/

#### Q2
**Which of the following is the best sign that his atropine dosing is adequate?**

- A. Absent bowel sounds
- B. Bounding pulse over 140/minute
- C. Drying of bronchial secretions  **(key)**
- D. Resolution of fasciculations
- E. Temperature above 38°C

*Explanation:* Atropine is titrated to a clear chest with dry bronchial secretions, along with a heart rate above 80/minute and a systolic BP above 80 mmHg. Absent bowel sounds, marked tachycardia and fever are signs of too much atropine. Fasciculations are nicotinic effects that atropine does not reverse, so waiting for them to settle leads to toxic doses.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008. https://pubmed.ncbi.nlm.nih.gov/17706760/

#### Q3
**Which of the following laboratory tests would best support the diagnosis in this patient?**

- A. Carboxyhemoglobin level
- B. Cholinesterase activity  **(key)**
- C. Serum lactate level
- D. Serum osmolal gap
- E. Urine drug screen

*Explanation:* Reduced red cell acetylcholinesterase activity supports organophosphate poisoning, though treatment is started on clinical grounds and should not wait for the result. A carboxyhemoglobin level looks for carbon monoxide. Lactate and the osmolal gap are not specific. Standard urine drug screens do not detect organophosphates.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008. https://pubmed.ncbi.nlm.nih.gov/17706760/

### seizures-40: Man found confused in his parked car

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 72-year-old man is brought to the emergency department by his daughter. He was found sitting in his parked car at a grocery store, confused, 30 minutes after leaving home. Over 3 months he has had several brief spells in which he stops talking, stares, smacks his lips and picks at his clothes for about 1 minute. Afterward he is confused for about 15 minutes and does not remember the spell. Last week he fell and bruised his hip during one. He has hypertension and type 2 diabetes treated with metformin. He is now alert and oriented. The neurological examination is normal. Capillary glucose is 6.8 mmol/L.

- Temperature: 36.8°C oral
- Pulse: 78/minute
- Resp.: 16/minute
- BP: 150/86 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following is the most likely diagnosis for his recurrent spells?**

- A. Focal impaired awareness seizures  **(key)**
- B. Hypoglycemic episodes
- C. Recurrent vasovagal syncope
- D. Transient global amnesia
- E. Transient ischemic attacks

*Explanation:* Brief repeated spells of staring with lip smacking and picking at clothes, then 15 minutes of confusion and no memory of the event, are focal seizures with impaired awareness. In older adults new epilepsy often shows up as confusion or unexplained falls. Transient global amnesia lasts hours and has no automatisms. Transient ischemic attacks cause loss of function, not repetitive movements. Metformin alone rarely causes hypoglycemia, and his glucose is normal. Vasovagal syncope does not cause automatisms or prolonged confusion.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* International League Against Epilepsy. EpilepsyDiagnosis.org. Temporal lobe seizure. Last updated 2024. https://www.epilepsydiagnosis.org/seizure/temporal-overview.html

#### Q2
**Which of the following is the most appropriate investigation to look for the cause of his spells?**

- A. Carotid Doppler ultrasound
- B. Holter monitor for 48 hours
- C. Lying and standing BP
- D. MRI brain and outpatient EEG  **(key)**
- E. Tilt table test referral

*Explanation:* NICE advises an MRI for people diagnosed with epilepsy, other than idiopathic generalized epilepsy, to look for a structural cause. A routine EEG supports the diagnosis and gives information about the seizure type. Holter monitoring, lying and standing BP and tilt testing investigate syncope, and these spells are not syncope. Carotid ultrasound does not explain stereotyped automatisms.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

#### Q3
**Which of the following is the most appropriate advice about driving for this patient?**

- A. Drive only short distances
- B. Drive only with his daughter
- C. Keep driving until the EEG
- D. Stop driving from today  **(key)**
- E. Wait for the MRI before stopping

*Explanation:* He was found confused in his car, and spells of impaired awareness make driving unsafe. The CMA guide states that any seizure is grounds for stopping all driving at once while the evaluation is completed. Short trips or a passenger do not prevent a crash during a spell. Waiting for the EEG or MRI leaves him driving with an untreated seizure disorder.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section. https://driversguide.ca/sections/nervous-system

### seizures-41: Repeated jerking of one arm

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 70-year-old man is brought to the emergency department by his wife with repeated jerking of his left arm and face for 2 days. Each episode lasts 1 to 2 minutes, and he stays aware during them. He has had thirst and frequent urination for 3 weeks and has lost 4 kg. He has no known diabetes. He takes hydrochlorothiazide for hypertension. He is alert and oriented, with dry mucous membranes. There is no weakness between episodes. Glucose 42 mmol/L, sodium 142 mmol/L, potassium 4.6 mmol/L, bicarbonate 22 mmol/L, urea 18 mmol/L, creatinine 160 umol/L. Serum beta-hydroxybutyrate is 0.4 mmol/L.

- Temperature: 37.1°C oral
- Pulse: 108/minute
- Resp.: 18/minute
- BP: 128/74 mmHg
- O2 sat: 97% on room air
- Weight: 76 kg

#### Q1
**Which of the following is the most important treatment to stop his seizures?**

- A. Fluid and insulin therapy  **(key)**
- B. Fosphenytoin 1 500 mg PE IV
- C. Levetiracetam 4 500 mg IV
- D. Lorazepam 4 mg IV
- E. Magnesium sulfate 2 g IV

*Explanation:* A glucose of 42 mmol/L with little ketosis and a normal bicarbonate is a hyperosmolar hyperglycemic state, and his focal seizures are provoked by it. Correcting the dehydration and hyperglycemia treats the cause. Anticonvulsants alone do not correct the metabolic trigger. He is aware during the episodes and not in status, so an immediate benzodiazepine is not the priority. Nothing suggests low magnesium or eclampsia.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018. https://pubmed.ncbi.nlm.nih.gov/29650082/

#### Q2
**Which of the following is the most appropriate initial IV fluid for this patient?**

- A. Albumin 25% infusion
- B. Dextrose 5% in water
- C. Half normal saline
- D. Isotonic saline  **(key)**
- E. Sodium bicarbonate infusion

*Explanation:* Diabetes Canada recommends starting with 0.9% sodium chloride to restore volume, with a later change to 0.45% sodium chloride once BP is stable, while watching how fast osmolality falls. Starting with hypotonic fluid risks a rapid fall in osmolality. Dextrose 5% adds glucose and free water at the wrong time. His bicarbonate of 22 mmol/L shows no acidosis to treat. Albumin has no role in this condition.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018. https://pubmed.ncbi.nlm.nih.gov/29650082/

#### Q3
**Which of the following is his calculated effective serum osmolality?**

- A. 284 mmol/kg
- B. 306 mmol/kg
- C. 326 mmol/kg  **(key)**
- D. 344 mmol/kg
- E. 368 mmol/kg

*Explanation:* Effective osmolality is 2 x sodium plus glucose, so 2 x 142 + 42 = 326 mmol/kg. This is above the 320 mmol/kg used to describe a hyperosmolar state. Adding his urea of 18 gives 344, the total osmolality, but urea crosses cell membranes and is left out of the effective value. The value 284 counts sodium only. The value 368 doubles the glucose as well. The value 306 does not match any correct calculation.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018. https://pubmed.ncbi.nlm.nih.gov/29650082/

### seizures-42: Dialysis patient who is not herself

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 68-year-old woman on hemodialysis three times a week is brought to the emergency department with 2 days of worsening confusion. She was discharged 5 days ago on cefepime 2 g IV every 12 hours for a diabetic foot infection. Her last dialysis was yesterday and was uneventful. She drifts between drowsiness and brief periods of normal speech. She has irregular jerks of her arms and face. Her neck is supple. Eye movements are full and she has no nystagmus. Glucose 7.2 mmol/L, sodium 136 mmol/L, potassium 5.0 mmol/L, calcium normal. CT head shows only old small vessel changes.

- Temperature: 37.4°C oral
- Pulse: 92/minute
- Resp.: 16/minute
- BP: 146/78 mmHg
- O2 sat: 96% on room air
- Weight: 64 kg

#### Q1
**Which of the following is the most likely cause of her change in mental status?**

- A. Cefepime neurotoxicity  **(key)**
- B. Dialysis disequilibrium
- C. Septic encephalopathy
- D. Uremic encephalopathy
- E. Wernicke encephalopathy

*Explanation:* Cefepime 2 g every 12 hours is a large dose for a patient on dialysis, and kidney failure with excess dosing are the main risk factors for cefepime neurotoxicity. Its features include fluctuating encephalopathy, myoclonus and nonconvulsive seizures. Dialysis disequilibrium occurs during or just after a session, usually early in dialysis care. She is dialyzed regularly, so uremia is unlikely. She has no fever to suggest sepsis, and her eye movements are normal.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Payne LE, Gagnon DJ, Riker RR, et al. Cefepime-induced neurotoxicity. A systematic review. Crit Care. 2017. https://pubmed.ncbi.nlm.nih.gov/29137682/

#### Q2
**Which of the following investigations is most important for her now?**

- A. EEG as soon as possible  **(key)**
- B. Lumbar puncture and CSF
- C. MRI brain with diffusion
- D. Serum ammonia level
- E. Thiamine blood level

*Explanation:* Fluctuating awareness with myoclonus in a patient on cefepime raises concern for nonconvulsive status epilepticus, which only EEG can confirm. Nonconvulsive seizures are a reported feature of cefepime neurotoxicity. Her CT is unremarkable, and MRI will not show seizure activity. She has no fever or meningism for lumbar puncture. Nothing suggests liver disease, and she has no eye signs of Wernicke encephalopathy.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Payne LE, Gagnon DJ, Riker RR, et al. Cefepime-induced neurotoxicity. A systematic review. Crit Care. 2017. https://pubmed.ncbi.nlm.nih.gov/29137682/

#### Q3
*Update:* EEG shows nonconvulsive status epilepticus.

**Which of the following is the most important step in addition to antiseizure treatment?**

- A. Add meropenem to cover sepsis
- B. Continue cefepime at a lower dose
- C. Increase cefepime for sepsis
- D. Stop cefepime and arrange dialysis  **(key)**
- E. Wait for levels before acting

*Explanation:* Cefepime neurotoxicity usually resolves once the drug is stopped, and dialysis removes the drug faster in a patient without kidney function. Her foot infection can be treated with another agent. Continuing cefepime at any dose keeps the cause in place. Carbapenems can also lower the seizure threshold. Cefepime levels are not quickly available and should not delay stopping it.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Payne LE, Gagnon DJ, Riker RR, et al. Cefepime-induced neurotoxicity. A systematic review. Crit Care. 2017. https://pubmed.ncbi.nlm.nih.gov/29137682/

### seizures-43: Woman with lung cancer and a first seizure

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 61-year-old woman with lung adenocarcinoma diagnosed 4 months ago is brought to the emergency department after a generalized seizure at home that lasted 2 minutes. For 1 week she has had morning headaches and mild clumsiness of her left hand. She is receiving chemotherapy. She lives alone and bathes every evening. She is now alert and oriented with a mild left pronator drift. Capillary glucose is 6.9 mmol/L. CT head shows a 2.5 cm right parietal enhancing mass with surrounding edema and 4 mm of midline shift. There is no hemorrhage.

- Temperature: 36.9°C oral
- Pulse: 90/minute
- Resp.: 16/minute
- BP: 138/80 mmHg
- O2 sat: 96% on room air
- Weight: 60 kg

#### Q1
**Which of the following is the most appropriate antiseizure plan for this patient?**

- A. Levetiracetam started today  **(key)**
- B. Lorazepam as needed only
- C. Phenobarbital at bedtime
- D. Wait for EEG before treating
- E. No drug until a second seizure

*Explanation:* She has had a seizure from a brain metastasis, a structural cause with a high risk of recurrence, so an antiseizure drug is indicated now. The advice against routine antiseizure drugs applies to patients with brain tumours who have not had a seizure. Levetiracetam has few drug interactions, while enzyme inducers such as phenobarbital interact with many cancer drugs and with dexamethasone. Waiting for an EEG or a second seizure leaves her unprotected.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Chang SM, Messersmith H, Ahluwalia M, et al. Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors. ASCO and SNO endorsement of the Congress of Neurological Surgeons guidelines. J Clin Oncol. 2019.

#### Q2
**Which of the following is the most appropriate additional medication for her symptoms?**

- A. Dexamethasone 10 mg IV  **(key)**
- B. Enoxaparin 60 mg SC
- C. Mannitol 60 g IV
- D. Nimodipine 60 mg PO
- E. Tranexamic acid 1 g IV

*Explanation:* Headache, a pronator drift and edema with 4 mm of midline shift are symptoms of mass effect, and dexamethasone is recommended for temporary relief of these symptoms. She is alert with no signs of herniation, so mannitol is not needed. There is no hemorrhage for tranexamic acid, and nimodipine is used for subarachnoid hemorrhage. Anticoagulation does not treat edema.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Chang SM, Messersmith H, Ahluwalia M, et al. Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors. ASCO and SNO endorsement of the Congress of Neurological Surgeons guidelines. J Clin Oncol. 2019.

#### Q3
**Which of the following is the most appropriate safety advice about her evening bath?**

- A. Bathe only in the evening
- B. Bathe with the door locked
- C. Shower instead of bathing  **(key)**
- D. Stop washing until reviewed
- E. Use a hot tub instead

*Explanation:* A seizure in a bath can cause drowning, especially in someone who lives alone, so NICE advises a shower rather than a bath. A locked door delays help if she has a seizure. The time of day does not change the risk. A hot tub carries the same drowning risk. Stopping washing is unnecessary when a safer option exists.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022. https://www.nice.org.uk/guidance/ng217

### seizures-44: Older woman with a week of unsteadiness

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department. An 84-year-old woman is brought in by ambulance after a generalized seizure at her retirement home that lasted 2 minutes. For a week she has been more confused, unsteady and nauseated. Her physician started hydrochlorothiazide 3 weeks ago for hypertension. She drinks several cups of tea and water a day and eats little. She takes no other medications. She is drowsy but opens her eyes to voice and follows simple commands. Capillary glucose is 6.4 mmol/L. Sodium on a venous blood gas is 112 mmol/L.

- Temperature: 36.7°C oral
- Pulse: 86/minute
- Resp.: 18/minute
- BP: 142/78 mmHg
- O2 sat: 96% on room air
- Weight: 52 kg

#### Q1
**Which of the following is the most appropriate treatment for her low sodium now?**

- A. Hypertonic 3% saline 150 mL IV  **(key)**
- B. Levetiracetam 3 000 mg IV
- C. Normal saline 1 L IV bolus
- D. Tolvaptan 15 mg PO
- E. Water restriction to 1 L per day

*Explanation:* A seizure and reduced consciousness with a sodium of 112 mmol/L are severe symptoms, and the European guideline advises 150 mL of 3% saline over 20 minutes, repeated as needed. Water restriction and tolvaptan act over days. A litre of normal saline raises sodium unpredictably and is not the treatment for severe symptoms. An anticonvulsant does not correct the cause of the seizure.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014.

#### Q2
*Update:* The team manages her hyponatremia using the 2014 European clinical practice guideline.

**Which of the following is the target rise in serum sodium during the first hour of treatment?**

- A. 5 mmol/L  **(key)**
- B. 8 mmol/L
- C. 10 mmol/L
- D. 15 mmol/L
- E. 28 mmol/L

*Explanation:* The guideline aims for a rise of 5 mmol/L in the first hour, which usually improves severe symptoms, then limits the rise to 10 mmol/L in the first 24 hours. A lower daily limit of 8 mmol/L is often used when the risk of osmotic demyelination is high, as with her poor intake. A rise of 8 or 10 mmol/L in the first hour uses up most of the daily limit. A rise of 15 or 28 mmol/L, the latter taking her from 112 back to 140, would exceed it and risk osmotic demyelination.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014.

#### Q3
*Update:* Two hours later her sodium is 118 mmol/L and she is alert. Her urine output has risen to 400 mL per hour.

**Which of the following is the most appropriate next step to prevent overcorrection?**

- A. Continue 3% saline to 130 mmol/L
- B. Give furosemide 40 mg IV
- C. Give normal saline 2 L bolus
- D. Stop 3% saline, check sodium often  **(key)**
- E. Tolvaptan 15 mg PO

*Explanation:* Her symptoms have improved after a rise of 6 mmol/L, and a brisk water diuresis as the thiazide effect wears off can push sodium up quickly. Active treatment should stop, with sodium checked every few hours, and water with desmopressin given if she exceeds the limit. Continuing 3% saline, tolvaptan or large saline volumes would raise sodium further. Furosemide adds to fluid loss and does not control the rate of correction.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014.

### seizures-45: Young woman who collapsed at the laboratory

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 22-year-old woman is brought to the emergency department from the hospital laboratory, where she collapsed while having blood drawn. She felt hot, nauseated and lightheaded, her vision went grey, and she slumped in the chair. The phlebotomist saw her arms jerk a few times for about 5 seconds. She woke within 20 seconds and was fully oriented, though pale and sweaty. She had no tongue bite or incontinence. She has fainted twice before at the sight of blood. She takes no medications. Her examination and ECG are normal.

- Temperature: 36.8°C oral
- Pulse: 68/minute
- Resp.: 14/minute
- BP: 112/70 mmHg
- O2 sat: 99% on room air

#### Q1
**Which of the following is the most likely diagnosis in this patient?**

- A. Brief absence seizure
- B. Generalized tonic clonic seizure
- C. Myoclonic seizure
- D. Vasovagal syncope with jerks  **(key)**
- E. Vertebrobasilar TIA

*Explanation:* A clear trigger, warning symptoms of heat, nausea and greying vision, a few seconds of jerks and full orientation within 20 seconds are typical of vasovagal syncope with brief jerks. A generalized seizure usually lasts longer and leaves postictal confusion. An absence seizure does not cause a fall with warning symptoms. Myoclonic seizures do not come with this prodrome. Her age, trigger and normal examination do not fit a vertebrobasilar TIA.

*Key feature:* Seizures 1. Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children.

*Source:* Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011.

#### Q2
**Which of the following further investigations is required before she is discharged?**

Select 1.

- A. CBC and electrolytes
- B. CT head without contrast
- C. Echocardiogram
- D. EEG with sleep deprivation
- E. Holter monitor for 48 hours
- F. MRI brain with contrast
- G. Serum prolactin level
- H. None  **(key)**

*Explanation:* A typical vasovagal event with a clear trigger, a normal examination and a normal ECG needs no further tests, and the history makes the diagnosis. Brief jerks during syncope do not make it a seizure, so EEG and brain imaging are not indicated. Echocardiography and Holter monitoring are for suspected cardiac syncope, which her history and ECG do not suggest. Blood tests and prolactin would not change management.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011.

#### Q3
**Which of the following is the most appropriate advice about her driving?**

- A. Drive as usual  **(key)**
- B. Drive only after a normal EEG
- C. Stop driving for a year
- D. Stop driving for one week
- E. Stop driving for three months

*Explanation:* The CMA guide, based on Canadian Cardiovascular Society advice, sets no driving restriction for private or commercial drivers after typical vasovagal syncope. Treating this event as a seizure would wrongly stop her driving for months. A week off applies to syncope with a reversible cause that has been treated. An EEG is not needed for vasovagal syncope.

*Key feature:* Seizures 5. After a first seizure, advise on risky activities such as driving and meet reporting obligations.

*Source:* Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Cardiovascular diseases section. https://driversguide.ca/sections/cardiovascular-diseases

### seizures-46: Boy with a seizure during a power outage

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department in January. A 6-year-old boy is brought in by his mother after a generalized seizure at home that lasted 2 minutes. The family has run a gas generator in their attached garage since a power outage 2 days ago. His parents and his sister have had headaches and nausea since yesterday. He is now drowsy but rousable and has vomited twice. He has no fever, rash or neck stiffness. Capillary glucose is 5.6 mmol/L.

- Temperature: 36.9°C tympanic
- Pulse: 124/minute
- Resp.: 24/minute
- BP: 100/60 mmHg
- O2 sat: 99% on room air
- Weight: 21 kg

#### Q1
**Which of the following is the most appropriate immediate treatment for this child?**

- A. Hydroxocobalamin 70 mg/kg IV
- B. Levetiracetam 1 260 mg IV
- C. Low flow oxygen to O2 sat 94%
- D. Oxygen at 100% by non rebreather  **(key)**
- E. Sodium nitrite 6 mg/kg IV

*Explanation:* Headaches and nausea in the whole family, a generator in an attached garage and a seizure in the child point to carbon monoxide poisoning. High flow 100% oxygen shortens the half life of carboxyhemoglobin and should start at once. His O2 sat of 99% does not exclude poisoning, so titrating oxygen to a saturation target is wrong. Hydroxocobalamin and sodium nitrite treat cyanide, and nitrite would further reduce oxygen delivery. An anticonvulsant does not treat the cause.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017. https://pubmed.ncbi.nlm.nih.gov/27753502/

#### Q2
**Which of the following investigations will best confirm the diagnosis?**

- A. Carboxyhemoglobin by co-oximetry  **(key)**
- B. CT head without contrast
- C. Pulse oximetry reading
- D. Serum lactate level
- E. Troponin and CK levels

*Explanation:* Co-oximetry on a blood gas measures carboxyhemoglobin directly and confirms carbon monoxide exposure. Standard pulse oximetry cannot tell carboxyhemoglobin from oxyhemoglobin, which is why his reading is normal. Lactate, troponin and CK can show the severity of poisoning but do not confirm it. CT is not needed to make the diagnosis.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017. https://pubmed.ncbi.nlm.nih.gov/27753502/

#### Q3
*Update:* His carboxyhemoglobin is 24%. His parents are waiting with his sister in the waiting room.

**Which of the following is the most important additional step for this child?**

- A. Discuss hyperbaric oxygen therapy  **(key)**
- B. Home once headache settles
- C. Outpatient EEG in 2 weeks
- D. Send the family home to ventilate
- E. Start daily levetiracetam

*Explanation:* A seizure is a sign of severe carbon monoxide poisoning, and hyperbaric oxygen reduced delayed cognitive sequelae in a randomized trial, so a hyperbaric centre should be consulted. The rest of the family was exposed and needs assessment, not a return to the house. Discharge when his headache improves ignores the risk of delayed injury. The seizure was provoked, so long term antiseizure medication and a routine EEG are not the priority.

*Key feature:* Seizures 4. In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise.

*Source:* Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017. https://pubmed.ncbi.nlm.nih.gov/27753502/

### seizures-47: Headache and blurred vision after a transplant

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 46-year-old woman who had a kidney transplant 8 months ago presents to the emergency department with a severe headache and blurred vision since this morning. In the department she has two generalized seizures, each lasting 2 minutes, and does not regain awareness between them. She takes tacrolimus, mycophenolate and prednisone. Her tacrolimus dose was increased 2 weeks ago. She is now drowsy but rousable. She cannot count fingers and has no focal weakness. Her neck is supple. Capillary glucose 6.1 mmol/L, sodium 137 mmol/L, creatinine 142 umol/L.

- Temperature: 37.0°C oral
- Pulse: 102/minute
- Resp.: 18/minute
- BP: 204/118 mmHg
- O2 sat: 97% on room air
- Weight: 66 kg

#### Q1
**Which of the following terms best describes two seizures without recovery of awareness between them?**

- A. Convulsive status epilepticus  **(key)**
- B. Nonepileptic events
- C. Postictal delirium only
- D. Simple partial seizures
- E. Two isolated seizures

*Explanation:* Repeated seizures without a return to baseline between them meet the definition of status epilepticus, even when each seizure is short. She should be treated as status rather than observed. They are not isolated seizures because she did not recover between them. Generalized convulsions with loss of awareness are not simple partial seizures, and nothing suggests nonepileptic events.

*Key feature:* Seizures 3. Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly.

*Source:* Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012.

#### Q2
**Which of the following is the most likely cause of her seizures?**

- A. Acute transplant rejection
- B. Bacterial meningitis
- C. Cerebral venous thrombosis
- D. Posterior reversible encephalopathy  **(key)**
- E. Toxoplasma encephalitis

*Explanation:* Headache, loss of vision and seizures with a BP of 204/118 mmHg in a patient taking tacrolimus fit posterior reversible encephalopathy syndrome. Calcineurin inhibitors, kidney disease and BP swings are known triggers. She has no fever or neck stiffness to suggest meningitis or encephalitis. Acute rejection affects graft function and does not explain headache, visual loss and seizures, and a creatinine of 142 umol/L is far too low to cause uremic encephalopathy. Venous thrombosis is possible, but severe hypertension and visual loss on a calcineurin inhibitor favour this syndrome.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome. Clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015.

#### Q3
**Which of the following is the most appropriate imaging to confirm the diagnosis?**

- A. Abdominal CT with contrast
- B. Carotid Doppler ultrasound
- C. CT angiography of the neck
- D. MRI brain with FLAIR imaging  **(key)**
- E. Transcranial Doppler study

*Explanation:* MRI shows the typical pattern of vasogenic edema in the subcortical white matter, often in both parietal and occipital lobes, and FLAIR images show it best. CT is often normal or less sensitive. Neck vessel imaging, carotid ultrasound and transcranial Doppler do not show the edema. Abdominal CT looks at the graft, not the brain.

*Key feature:* Seizures 6. Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed.

*Source:* Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome. Clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015.

#### Q4
**Which of the following is the most appropriate treatment of the underlying cause?**

- A. Gradual BP lowering, tacrolimus review  **(key)**
- B. Increase the prednisone dose
- C. Lower BP to normal within 1 hour
- D. Start acyclovir and ceftriaxone
- E. Start therapeutic heparin

*Explanation:* Treatment is controlled lowering of BP together with review of the tacrolimus dose with the transplant team, plus seizure control. Dropping BP to normal within an hour risks cerebral ischemia. Higher steroid doses do not treat the cause. Antimicrobials and heparin treat infection and venous thrombosis, which her presentation does not support.

*Key feature:* Seizures 2. Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia.

*Source:* Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome. Clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015.
