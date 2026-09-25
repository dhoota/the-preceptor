# s24: Arrhythmia

32 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s51 sob-25 q4 pediatric airway source. sob-36 q3 half-dose tenecteplase rests on CCS tip. sob-40 q3 rebuilt to epinephrine. s24 AHA 2025 claims confirmed via summaries only.
- s24 arrhythmia-41 q3 PACES 2021 threshold 50 vs older 55 (rate is 55).
- review-extra.ts. arrhythmia-48 is a copy of arrhythmia-26 (same title, stem, options and sources), and arrhythmia-49 is a copy of arrhythmia-37. Each differed from its twin only by the planted defect fixed above. Neither should be added to the bank, because both would fail the near-duplicate stem rule. *(samps-s24-lensA.md)*
- arrhythmia-46 q1. The options are in the order 0, 1, minus 3, minus 2, minus 1. The ordering gate cannot read negative numbers, so it falls back to string order. SPEC section 7 wants numeric options from low to high (minus 3 to 1), but that order fails the current gate. This is a format issue for Lens B or a gate fix. I left it unchanged. *(samps-s24-lensA.md)*
- The AHA 2025 claims (item 2 above) were verified only through secondary sources. *(samps-s24-lensA.md)*
- arrhythmia-48 and arrhythmia-49 (review-extra.ts) duplicate arrhythmia-26 and arrhythmia-37. They should not be added to the bank. *(samps-s24-lensB.md)*
- arrhythmia-41 q3. The explanation relies on PACES 2021 setting the asymptomatic infant pacing threshold at 50/minute or less, with the rate of 55 just above it. A physician should confirm the threshold, since older guidance used 55. *(samps-s24-lensB.md)*
- Key feature mapping is loose in two places, left unchanged: arrhythmia-16 q3 (murmur manoeuvre for HCM, mapped to key feature 1) and arrhythmia-43 q3 (long-term apixaban dose, mapped to key feature 4). *(samps-s24-lensB.md)*

Review reports: docs/reviews/writer-s24.md, samps-s24-lensA.md, samps-s24-lensB.md

## SAMPs

### arrhythmia-16: Collapse on the basketball court

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 16-year-old boy is brought to the emergency department by ambulance after collapsing during a high school basketball game. Teammates say he fell while sprinting down the court, was unresponsive for about 20 seconds and then woke up oriented. He had no warning symptoms. He had chest tightness during two practices last month. He takes no medications. His father's brother died suddenly at age 34. On examination he has a grade 3 systolic murmur at the left lower sternal border. The examination is otherwise normal.

- Pulse: 88/minute
- Resp.: 16/minute
- BP: 124/70 mmHg
- O2 sat: 99% on room air
- Weight: 64 kg

#### Q1
**Which of the following features of his history most strongly suggests an arrhythmic cause of his collapse?**

- A. Absence of postictal confusion
- B. Collapse while sprinting  **(key)**
- C. Duration of 20 seconds
- D. Full orientation on waking
- E. Occurrence at a school event

*Explanation:* Syncope during exertion, as when he fell while sprinting, is a high-risk feature that points to a structural or arrhythmic cause and calls for cardiac evaluation. His uncle's sudden death at 34 adds to that concern. Lack of postictal confusion and full orientation on waking help separate syncope from seizure, but they occur in reflex syncope as well. A 20 second loss of consciousness and the school setting do not separate a benign from a dangerous cause.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

#### Q2
*Update:* His ECG shows sinus rhythm at 86 with very tall QRS voltages in the precordial leads, deep narrow Q waves in I, aVL, V5 and V6, and T wave inversion in V4 to V6. The QTc is 440 ms.

**Which of the following is the most likely cause of his collapse?**

- A. Arrhythmogenic cardiomyopathy
- B. Brugada syndrome
- C. Congenital long QT syndrome
- D. Hypertrophic cardiomyopathy  **(key)**
- E. Wolff-Parkinson-White syndrome

*Explanation:* Exertional syncope with a systolic murmur, early sudden death in a relative, very tall precordial voltage, deep narrow lateral Q waves and lateral T wave inversion fit hypertrophic cardiomyopathy. Arrhythmogenic cardiomyopathy gives T wave inversion in V1 to V3 and epsilon waves rather than lateral Q waves with high voltage. Brugada syndrome shows coved ST elevation in V1 and V2. His QTc of 440 ms is not prolonged, and there is no short PR or delta wave to suggest Wolff-Parkinson-White syndrome.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Ommen SR, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation. 2024.

#### Q3
**Which of the following bedside manoeuvres would most likely make his murmur louder?**

- A. Passive leg raise
- B. Squatting from standing
- C. Standing from squatting  **(key)**
- D. Sustained handgrip
- E. Trendelenburg position

*Explanation:* Standing up from a squat lowers venous return and left ventricular volume, which narrows the outflow tract and makes the obstructive murmur of hypertrophic cardiomyopathy louder. Squatting from standing and a passive leg raise increase preload, which softens the murmur. Sustained handgrip raises afterload and also softens it. A head-down tilt increases venous return and would not make the murmur louder.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Ommen SR, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation. 2024.

#### Q4
**Which of the following is the most appropriate disposition for him?**

- A. Admission with monitoring and cardiology review  **(key)**
- B. Discharge after a normal troponin
- C. Discharge with a 14-day ambulatory monitor
- D. Discharge with an outpatient echocardiogram
- E. Exercise stress test before discharge

*Explanation:* Unexplained syncope in suspected hypertrophic cardiomyopathy is a major risk marker for sudden cardiac death, so he needs admission on a monitor with urgent cardiology review, echocardiography and assessment for an ICD. A normal troponin does not lower his arrhythmic risk. An ambulatory monitor or an outpatient echocardiogram leaves a high-risk teenager unmonitored in the meantime. Exercise testing in the emergency department could provoke the event he has already had.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Ommen SR, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation. 2024.

### arrhythmia-17: Slumped over at the kitchen table

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 69-year-old man presents to the emergency department after fainting while seated at his kitchen table. His wife says he slumped over without warning and was unresponsive for about 15 seconds. He recovered fully within a minute. He had no chest pain, palpitations or dyspnea before or after. He has coronary artery disease with a stent placed 4 years ago. He takes ASA, atorvastatin and ramipril. His examination is normal apart from a forehead abrasion. His ECG shows sinus rhythm at 64, PR 190 ms, QRS 118 ms, a QRS axis of minus 60 degrees and a QTc of 450 ms. His high-sensitivity troponin is below the 99th percentile.

- Pulse: 64/minute
- Resp.: 16/minute
- BP: 188/92 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following is his Canadian Syncope Risk Score, before any emergency department diagnosis is assigned?**

- A. 1
- B. 2
- C. 3
- D. 4  **(key)**
- E. 5

*Explanation:* He scores 1 point for coronary artery disease, 2 points for a systolic pressure above 180 mmHg (188 mmHg) and 1 point for an abnormal QRS axis of minus 60 degrees, for a total of 4. He loses no point for a vasovagal predisposition because he fainted while seated with no trigger or warning. His troponin, QRS duration of 118 ms and QTc of 450 ms fall below the score thresholds. A total of 3 counts the blood pressure as 1 point, and 5 wrongly adds the QRS duration, which is not above 130 ms.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Thiruganasambandamoorthy V, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ. 2016. https://www.cmaj.ca/content/188/12/e289

#### Q2
**Which of the following is the most appropriate next step for him?**

- A. Discharge after 2 hours of monitoring
- B. Discharge with a 14-day patch monitor
- C. Discharge with family physician follow-up
- D. Hospital admission with cardiac monitoring  **(key)**
- E. Outpatient tilt table testing

*Explanation:* A score of 4 places him in the high-risk group, and the CCS practice update advises in-hospital assessment with cardiac monitoring for high-risk syncope. Sudden syncope while seated without warning, coronary disease and marked left axis deviation all point toward a conduction or rhythm cause. Discharge with a patch monitor or family physician follow-up suits patients at very low or low risk. Two hours of monitoring is too short for his risk, and tilt testing investigates reflex syncope, which his history does not suggest.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

#### Q3
*Update:* On the monitor, P waves march out at a regular rate of 76. Most P waves are followed by a QRS with a constant PR interval of 190 ms, but every third or fourth P wave is not conducted, with no PR lengthening before it.

**Which of the following best describes the rhythm now seen on his monitor?**

- A. First-degree AV block
- B. Mobitz type I second-degree AV block
- C. Mobitz type II second-degree AV block  **(key)**
- D. Nonconducted premature atrial beats
- E. Third-degree AV block

*Explanation:* Dropped beats with a constant PR interval before and after each blocked P wave define Mobitz type II block, and his QRS of 118 ms suggests disease below the AV node. In Mobitz type I the PR lengthens progressively before the dropped beat. Nonconducted premature atrial beats arrive early, but here the P waves march out at a regular rate of 76. First-degree block conducts every P wave, and third-degree block shows no relationship between P waves and QRS complexes.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q4
*Update:* His pulse falls to 38/minute with 2:1 block. His BP is 76/44 mmHg and he is pale and confused. Two doses of atropine 1 mg IV have not changed his rate.

**Which of the following are the most appropriate next treatments?**

Select 3.

- A. adenosine 6 mg IV
- B. amiodarone 150 mg IV
- C. calcium gluconate 3 g IV
- D. dopamine infusion  **(key)**
- E. epinephrine infusion  **(key)**
- F. magnesium sulfate 2 g IV
- G. procainamide infusion
- H. transcutaneous pacing  **(key)**

*Explanation:* His bradycardia now causes hypotension and confusion and has not responded to 2 mg of atropine, so transcutaneous pacing and a chronotropic infusion of epinephrine or dopamine are the next steps while transvenous pacing is arranged. Atropine often fails in Mobitz type II block because the block lies below the AV node. Amiodarone and procainamide slow conduction and could worsen the block. Adenosine blocks the AV node. Calcium and magnesium have no role without hyperkalemia or torsades de pointes.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

### arrhythmia-18: Poor feeding in a young infant

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 6-week-old girl is brought to the emergency department by her parents with 12 hours of poor feeding and fussiness. She was born at term and has been well. She has no fever, vomiting or diarrhea. She takes no medications. On examination she is pale but alert and moves all limbs. Capillary refill is 2 seconds, the fontanelle is flat and the lungs are clear. The liver edge is 1 cm below the costal margin. The cardiac monitor shows a regular narrow complex tachycardia at 270 that does not change when she cries or settles.

- Temperature: 36.9°C rectal
- Pulse: 270/minute regular
- Resp.: 48/minute
- BP: 78/46 mmHg
- O2 sat: 98% on room air
- Weight: 4.5 kg

#### Q1
**Which of the following findings best supports supraventricular tachycardia over sinus tachycardia in her?**

- A. Absence of fever
- B. Fixed rate that does not vary  **(key)**
- C. Narrow QRS complexes
- D. Pallor with poor feeding
- E. Regular rhythm on the monitor

*Explanation:* A fixed rate of 270 that does not change when she cries or settles points to supraventricular tachycardia, which in infants usually runs at 220/minute or more. Sinus tachycardia varies with activity and usually stays below 220/minute. Narrow complexes and a regular rhythm occur in both rhythms. Pallor and poor feeding are nonspecific, and a normal temperature removes one cause of sinus tachycardia without confirming SVT.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q2
**Which of the following is the most appropriate first intervention?**

- A. adenosine 0.45 mg IV rapid push
- B. Carotid sinus massage on one side
- C. Ice water bag applied to the face  **(key)**
- D. Synchronized cardioversion at 2 J
- E. Valsalva by blowing into a syringe

*Explanation:* She is alert, with a capillary refill of 2 seconds and a normal blood pressure, so perfusion is adequate and a vagal manoeuvre comes first if it causes no delay. In infants the diving reflex from ice water applied to the face is the preferred manoeuvre. Adenosine follows if the manoeuvre fails. Carotid sinus massage is not recommended in infants, and a 6-week-old cannot blow into a syringe. Cardioversion is kept for SVT with poor perfusion.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q3
*Update:* Ice water to the face does not convert the rhythm. An IV is in place in the right antecubital fossa.

**Which of the following is the most appropriate first dose of adenosine?**

- A. adenosine 0.2 mg IV rapid push
- B. adenosine 0.45 mg IV rapid push  **(key)**
- C. adenosine 0.9 mg IV rapid push
- D. adenosine 3 mg IV rapid push
- E. adenosine 6 mg IV rapid push

*Explanation:* The first dose of adenosine is 0.1 mg/kg to a maximum of 6 mg, which for 4.5 kg is 0.45 mg, pushed rapidly with an immediate saline flush. A dose of 0.9 mg is 0.2 mg/kg, the second dose if the first fails. A dose of 0.2 mg is under 0.05 mg/kg and likely too small to block the AV node. Doses of 3 mg and 6 mg are adult doses, several times the weight-based dose for this infant.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q4
*Update:* After two doses of adenosine she remains at 270. She is now mottled and lethargic, capillary refill is 5 seconds and BP is 54/30 mmHg.

**Which of the following is the most appropriate next treatment?**

- A. amiodarone 22 mg IV over 20 minutes
- B. Defibrillation at 9 J
- C. procainamide 67 mg IV over 30 minutes
- D. Synchronized cardioversion at 4 J  **(key)**
- E. Synchronized cardioversion at 18 J

*Explanation:* She now has poor perfusion, so she needs synchronized cardioversion at 0.5 to 1 J/kg, which for 4.5 kg is 2.25 to 4.5 J, and 4 J lies within that range. A shock of 18 J is 4 J/kg, above the 2 J/kg maximum for synchronized cardioversion. Unsynchronized defibrillation is for pulseless rhythms and can induce ventricular fibrillation. Amiodarone (5 mg/kg) and procainamide (15 mg/kg) are options for refractory SVT with expert advice, but they act too slowly when perfusion is failing.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

### arrhythmia-19: Palpitations since Saturday

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 64-year-old man presents to the emergency department with 3 days of palpitations and fatigue. He noticed the palpitations when he woke up on Saturday and they have not stopped. He has no chest pain, syncope or dyspnea at rest. He has hypertension treated with amlodipine and takes no anticoagulant. He has never had a stroke or TIA. His lungs are clear and he has no edema. His ECG shows a regular narrow complex tachycardia at 150 with no clear P waves before each QRS. In II, III and aVF there is a negative deflection midway between the QRS complexes and another partly hidden in the T wave.

- Pulse: 150/minute regular
- Resp.: 18/minute
- BP: 132/84 mmHg
- O2 sat: 97% on room air
- Weight: 88 kg

#### Q1
**Which of the following is the most likely rhythm on his presenting ECG?**

- A. Atrial fibrillation
- B. Atrial flutter with 2:1 block  **(key)**
- C. AV nodal reentrant tachycardia
- D. Focal atrial tachycardia
- E. Sinus tachycardia

*Explanation:* Two negative inferior deflections per cycle, one midway between QRS complexes and one in the T wave, at a fixed ventricular rate of 150 mean flutter waves at about 300/minute with 2:1 conduction. Atrial fibrillation is irregular. AV nodal reentry shows no atrial activity or a small pseudo r wave just after the QRS, not two atrial waves per cycle. Sinus tachycardia and focal atrial tachycardia give one P wave for each QRS, and a sinus P wave is upright in II.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

#### Q2
**Which of the following is the most appropriate initial treatment?**

- A. adenosine 12 mg IV
- B. amiodarone 150 mg IV
- C. diltiazem 0.25 mg/kg IV  **(key)**
- D. procainamide 15 mg/kg IV
- E. Synchronized cardioversion at 150 J

*Explanation:* His flutter has lasted 3 days without anticoagulation, so any cardioversion risks stroke, and he is stable, which makes rate control the right first step. With no heart failure, diltiazem 0.25 mg/kg IV (22 mg for 88 kg) is appropriate. Electrical cardioversion, procainamide and amiodarone can each restore sinus rhythm, so they should wait for 3 weeks of anticoagulation or a transesophageal echocardiogram. Adenosine only slows AV conduction for seconds and does not treat flutter.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

#### Q3
*Update:* After diltiazem, the ECG shows a regular sawtooth baseline in the inferior leads at an atrial rate of 300, with 4 flutter waves for each QRS complex.

**Which of the following is his ventricular rate on this tracing?**

- A. 50/minute
- B. 75/minute  **(key)**
- C. 100/minute
- D. 150/minute
- E. 300/minute

*Explanation:* With 4:1 conduction, one of every four flutter waves reaches the ventricles, so an atrial rate of 300 gives a ventricular rate of 300 divided by 4, or 75/minute. A rate of 150 would mean 2:1 conduction, as before diltiazem. A rate of 100 would need 3:1 conduction and 50 would need 6:1. A rate of 300 would mean 1:1 conduction, which is dangerous and not what the tracing shows.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

### arrhythmia-20: Weak after three days of diarrhea

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 81-year-old woman is brought to the emergency department by ambulance with 1 day of weakness and light-headedness. She has had vomiting and diarrhea for 3 days and has barely eaten. She has hypertension, heart failure with preserved ejection fraction and hypothyroidism. Her medications are metoprolol 50 mg twice daily, ramipril 10 mg daily, spironolactone 25 mg daily, atorvastatin and levothyroxine, which she has kept taking. She is drowsy but oriented, with dry mucous membranes and cool extremities. Her ECG shows a regular narrow complex rhythm at 36 with no visible P waves, tall peaked T waves and no ST elevation or depression. Creatinine is 248 umol/L (baseline 90) and potassium is 6.2 mmol/L.

- Temperature: 36.4°C oral
- Pulse: 36/minute regular
- Resp.: 18/minute
- BP: 74/40 mmHg
- O2 sat: 95% on room air
- Weight: 58 kg

#### Q1
**Which of the following best describes the rhythm on her presenting ECG?**

- A. Atrial flutter with 4:1 block
- B. Junctional escape rhythm  **(key)**
- C. Mobitz type II AV block
- D. Sinus bradycardia
- E. Third-degree AV block

*Explanation:* A regular narrow complex rhythm at 36 with no visible P waves is a junctional escape rhythm. Sinus bradycardia and Mobitz type II block both show P waves, and third-degree block shows P waves marching through at their own rate with no relationship to the QRS. Flutter with 4:1 block would show sawtooth flutter waves and a ventricular rate near 75, not 36.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Farkas JD, et al. BRASH Syndrome: Bradycardia, Renal Failure, AV Blockade, Shock, and Hyperkalemia. J Emerg Med. 2020.

#### Q2
**Which of the following best explains her slow heart rate and low blood pressure?**

- A. Hyperkalemia with AV nodal blockade  **(key)**
- B. Hypovolemic shock alone
- C. Inferior myocardial infarction
- D. Myxedema from hypothyroidism
- E. Sick sinus syndrome

*Explanation:* Vomiting and diarrhea caused acute kidney injury (creatinine 248 umol/L from 90), ramipril and spironolactone raised her potassium to 6.2 mmol/L, and hyperkalemia acting together with metoprolol produced profound bradycardia and shock. This cycle is called BRASH syndrome, and a potassium level that alone seems moderate can cause severe bradycardia when combined with an AV nodal blocker. Hypovolemia alone would cause tachycardia, not a rate of 36. She has kept taking levothyroxine, and her ECG shows no ischemic ST changes. Sick sinus syndrome does not explain an acute change with renal failure.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Farkas JD, et al. BRASH Syndrome: Bradycardia, Renal Failure, AV Blockade, Shock, and Hyperkalemia. J Emerg Med. 2020.

#### Q3
*Update:* Calcium gluconate 3 g IV and a 500 mL crystalloid bolus are given. Her pulse is now 40/minute and her BP is 78/42 mmHg.

**Which of the following infusions best supports her heart rate and blood pressure now?**

- A. dobutamine infusion
- B. epinephrine infusion  **(key)**
- C. milrinone infusion
- D. phenylephrine infusion
- E. vasopressin infusion

*Explanation:* Epinephrine raises heart rate and contractility and also shifts potassium into cells, so it treats the bradycardia, the hypotension and the hyperkalemia of this syndrome together. Dobutamine and milrinone are inotropes that dilate vessels and can deepen her hypotension of 78/42 mmHg. Phenylephrine is a pure vasoconstrictor and can slow the heart further by reflex. Vasopressin raises vascular tone but has no effect on her rate of 40.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Farkas JD, et al. BRASH Syndrome: Bradycardia, Renal Failure, AV Blockade, Shock, and Hyperkalemia. J Emerg Med. 2020.

#### Q4
**Which of the following medications should be held during her admission?**

Select 3.

- A. acetaminophen
- B. atorvastatin
- C. levothyroxine
- D. metoprolol  **(key)**
- E. ramipril  **(key)**
- F. spironolactone  **(key)**
- G. vitamin D

*Explanation:* Metoprolol blocks the AV node and is one arm of the cycle causing her bradycardia. Ramipril and spironolactone both raise potassium and, with volume depletion, worsen kidney perfusion, which is how her potassium reached 6.2 mmol/L. Atorvastatin, levothyroxine, acetaminophen and vitamin D neither slow AV conduction nor raise potassium, so they can continue.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Farkas JD, et al. BRASH Syndrome: Bradycardia, Renal Failure, AV Blockade, Shock, and Hyperkalemia. J Emerg Med. 2020.

### arrhythmia-21: Tired after a camping trip

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department in Lunenburg, Nova Scotia. A 27-year-old man presents with 2 days of fatigue and light-headedness when he stands. Four weeks ago he went camping nearby and later noticed a large, expanding red rash on his thigh that faded without treatment. He has had joint aches and a mild headache. He has had no sore throat and no chest pain. He has no medical history and takes no medications. He is alert and his examination is otherwise normal. His ECG shows sinus rhythm at 72 with a PR interval of 360 ms, a narrow QRS and no ST changes.

- Temperature: 37.6°C oral
- Pulse: 72/minute
- Resp.: 14/minute
- BP: 118/70 mmHg
- O2 sat: 99% on room air

#### Q1
**Which of the following is the most likely cause of his conduction abnormality?**

- A. Acute rheumatic fever
- B. Cardiac sarcoidosis
- C. Inferior myocardial infarction
- D. Lyme disease carditis  **(key)**
- E. Viral myocarditis

*Explanation:* An expanding rash after camping in an endemic part of Nova Scotia, followed by arthralgia, headache and a new PR interval of 360 ms, points to Lyme carditis, which classically causes AV block that can fluctuate and progress. Rheumatic fever can prolong the PR interval but follows streptococcal pharyngitis, and he has had no sore throat. Sarcoidosis and viral myocarditis can cause heart block but do not explain the rash after outdoor exposure. He has no chest pain or ST changes to suggest an infarction.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Yeung C, Baranchuk A. Diagnosis and Treatment of Lyme Carditis: JACC Review Topic of the Week. J Am Coll Cardiol. 2019. https://www.jacc.org/doi/10.1016/j.jacc.2018.11.035

#### Q2
*Update:* Two hours later he feels faint. The monitor shows regular P waves at 90 and regular narrow QRS complexes at 46, with no fixed relationship between them.

**Which of the following best describes the rhythm now seen on his monitor?**

- A. First-degree AV block
- B. Isorhythmic AV dissociation
- C. Mobitz type I second-degree AV block
- D. Mobitz type II second-degree AV block
- E. Third-degree AV block  **(key)**

*Explanation:* P waves at 90 and QRS complexes at 46 that march independently, with no fixed relationship, define third-degree AV block, here with a narrow junctional escape. Mobitz type I and type II blocks conduct some P waves with a consistent PR relationship. First-degree block conducts every P wave. Isorhythmic dissociation has atrial and ventricular rates that are almost equal, not 90 and 46.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Yeung C, Baranchuk A. Diagnosis and Treatment of Lyme Carditis: JACC Review Topic of the Week. J Am Coll Cardiol. 2019. https://www.jacc.org/doi/10.1016/j.jacc.2018.11.035

#### Q3
*Update:* His BP is 112/68 mmHg and he is alert. The faint feeling has passed.

**Which of the following is the most appropriate management of his heart block?**

- A. atropine 1 mg IV now
- B. Discharge on oral doxycycline
- C. Isoproterenol infusion
- D. Monitored bed with pacing pads  **(key)**
- E. Permanent pacemaker insertion

*Explanation:* He has high-degree block from Lyme carditis but is now stable with a narrow escape, so he needs a monitored bed with pacing pads applied, IV antibiotics and a plan for temporary pacing if he becomes unstable. Lyme heart block usually resolves with antibiotics, so a permanent pacemaker is avoided. Oral treatment at home is not appropriate for complete heart block. Atropine and isoproterenol are not needed while his BP of 112/68 mmHg and mental status are normal.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Yeung C, Baranchuk A. Diagnosis and Treatment of Lyme Carditis: JACC Review Topic of the Week. J Am Coll Cardiol. 2019. https://www.jacc.org/doi/10.1016/j.jacc.2018.11.035

#### Q4
**Which of the following is the most appropriate antimicrobial treatment?**

- A. amoxicillin 500 mg PO three times daily
- B. azithromycin 500 mg IV daily
- C. ceftriaxone 2 g IV daily  **(key)**
- D. doxycycline 100 mg PO twice daily
- E. vancomycin 15 mg/kg IV every 12 hours

*Explanation:* Lyme carditis with high-degree AV block is treated with ceftriaxone 2 g IV daily, switched to an oral agent once the block improves, for 14 to 21 days in total. Oral doxycycline or amoxicillin suits mild carditis with a PR interval under 300 ms, not his complete block. Azithromycin is a second-line oral agent for early Lyme disease. Vancomycin has no useful activity against Borrelia.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Yeung C, Baranchuk A. Diagnosis and Treatment of Lyme Carditis: JACC Review Topic of the Week. J Am Coll Cardiol. 2019. https://www.jacc.org/doi/10.1016/j.jacc.2018.11.035

### arrhythmia-22: Weight loss and a racing heart

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 45-year-old woman presents to the emergency department with 5 days of palpitations. Over 2 months she has lost 7 kg despite a good appetite, and she has had heat intolerance, loose stools and poor sleep. She has no medical history, no asthma and takes no medications. She is anxious, with a fine tremor, warm moist skin and a diffusely enlarged, nontender thyroid. Her lungs are clear and she has no edema. Her ECG shows atrial fibrillation with a ventricular rate of 148 and no ischemic changes.

- Temperature: 37.4°C oral
- Pulse: 148/minute irregular
- Resp.: 20/minute
- BP: 136/62 mmHg
- O2 sat: 98% on room air
- Weight: 56 kg

#### Q1
**Which of the following tests is most likely to identify the cause of her atrial fibrillation?**

- A. Portable chest radiograph
- B. Serum magnesium level
- C. Thyroid-stimulating hormone  **(key)**
- D. Transthoracic echocardiography
- E. Troponin measurement

*Explanation:* Weight loss with a good appetite, heat intolerance, tremor, moist skin and a diffuse goitre point to hyperthyroidism, and a suppressed TSH would confirm thyrotoxicosis as the trigger for her atrial fibrillation. Echocardiography may help later but will not show this cause. Magnesium and troponin do not explain her systemic features. Her lungs are clear and she has no edema, so a chest radiograph is unlikely to help.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016.

#### Q2
**Which of the following is the most appropriate initial treatment for her heart rate?**

- A. amiodarone 150 mg IV
- B. digoxin 0.5 mg IV
- C. metoprolol 5 mg IV  **(key)**
- D. procainamide 15 mg/kg IV
- E. Synchronized cardioversion at 200 J

*Explanation:* Beta blockers are first-line in thyrotoxic atrial fibrillation because they slow the ventricular rate and blunt the adrenergic features, and she has no asthma or heart failure to prevent their use. Digoxin works poorly in thyrotoxicosis because of faster clearance and high sympathetic tone. Amiodarone carries a large iodine load that can worsen thyroid disease. Cardioversion by shock or procainamide is likely to fail while she remains thyrotoxic, and after 5 days without anticoagulation it carries a stroke risk.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016.

#### Q3
**Which of the following is the most appropriate plan for her rhythm once her rate is controlled?**

- A. Cardiovert after a normal troponin
- B. Cardiovert today by shock
- C. Cardiovert today with procainamide
- D. Defer until euthyroid and anticoagulated  **(key)**
- E. Defer until the goitre is imaged

*Explanation:* Her atrial fibrillation has lasted 5 days without anticoagulation, beyond the 48 hour limit for cardioversion without 3 weeks of anticoagulation or a transesophageal echocardiogram. Early relapse is also likely while she is thyrotoxic, and the rhythm often reverts on its own once thyroid function is controlled. Cardioverting today by shock or by procainamide exposes her to stroke. A troponin result or thyroid imaging does not change when cardioversion is safe.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Andrade JG, et al. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation. Can J Cardiol. 2020.

### arrhythmia-23: Short of breath after hip surgery

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 67-year-old woman presents to the emergency department with 1 day of dyspnea and palpitations. Twelve days ago she had a right total hip replacement and was discharged home. She stopped her postoperative enoxaparin after 5 days because of bruising. She has osteoarthritis and hypertension treated with hydrochlorothiazide. She drinks no alcohol. Her right calf is swollen and tender. She has no fever or cough and her lungs are clear. Her ECG shows new atrial fibrillation at 134, an S wave in I, a Q wave and inverted T wave in III, and T wave inversion in V1 to V3. Potassium is 3.9 mmol/L.

- Temperature: 37.5°C oral
- Pulse: 134/minute irregular
- Resp.: 28/minute
- BP: 108/64 mmHg
- O2 sat: 88% on room air
- Weight: 72 kg

#### Q1
**Which of the following is the most likely trigger of her atrial fibrillation?**

- A. Acute pulmonary embolism  **(key)**
- B. Alcohol withdrawal
- C. Hypokalemia from her diuretic
- D. Occult thyrotoxicosis
- E. Postoperative pneumonia

*Explanation:* Recent hip surgery, a stopped course of enoxaparin, a swollen tender calf, an oxygen saturation of 88% with clear lungs and right heart strain on the ECG point to pulmonary embolism as the trigger. Pneumonia usually gives fever, cough and focal chest findings, and she has none. Her potassium of 3.9 mmol/L is normal. Thyrotoxicosis can trigger atrial fibrillation but does not explain her calf or her hypoxemia, and she drinks no alcohol.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.

#### Q2
**Which of the following is the most appropriate next investigation?**

- A. Coronary CT angiography
- B. CT pulmonary angiography  **(key)**
- C. D-dimer measurement
- D. Thyroid-stimulating hormone
- E. Transthoracic echocardiography

*Explanation:* Her clinical probability of pulmonary embolism is high, so she needs definitive imaging with CT pulmonary angiography rather than a D-dimer, which cannot exclude embolism at this level of suspicion and is often raised after surgery. Echocardiography can show right ventricular strain but does not confirm the diagnosis in a patient who is not in shock. Thyroid testing and coronary CT do not address the most likely cause.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.

#### Q3
**Which of the following is the most appropriate approach to her atrial fibrillation now?**

- A. Anticoagulate and treat the embolism  **(key)**
- B. diltiazem 0.25 mg/kg IV
- C. metoprolol 5 mg IV
- D. procainamide 15 mg/kg IV
- E. Synchronized cardioversion at 200 J

*Explanation:* Her atrial fibrillation is secondary to pulmonary embolism, and her rate of 134 partly supports output from a strained right ventricle, so the priority is anticoagulation and treatment of the embolism, which usually slows the rate. Diltiazem and metoprolol can drop cardiac output and blood pressure when the right ventricle is failing, and her BP is already 108/64 mmHg. She is stable, and cardioversion by shock or procainamide is unlikely to hold while the trigger persists.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.

#### Q4
**Which of the following findings on her ECG suggest right heart strain?**

Select 3.

- A. Left axis deviation
- B. Peaked T waves in V2 to V4
- C. Prominent U waves in V2 and V3
- D. Q wave and inverted T wave in III  **(key)**
- E. S wave in lead I  **(key)**
- F. Short PR interval
- G. T wave inversion in V1 to V3  **(key)**

*Explanation:* An S wave in lead I with a Q wave and inverted T wave in III, and T wave inversion in V1 to V3, reflect acute right ventricular strain from pulmonary embolism and fit her calf findings and hypoxemia. Right heart strain shifts the axis rightward, not leftward. Peaked T waves suggest hyperkalemia, prominent U waves suggest hypokalemia, and a short PR interval suggests pre-excitation, and none of these is described on her tracing.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.

### arrhythmia-24: Repeated shocks from a device

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 66-year-old man is brought to the emergency department by ambulance after his implantable cardioverter defibrillator shocked him 4 times in 90 minutes. He was awake for each shock. He had an anterior myocardial infarction 8 years ago and has an ejection fraction of 25%. Last week his furosemide dose was doubled for ankle swelling. His medications are bisoprolol, sacubitril-valsartan, furosemide and ASA. He has no chest pain. On arrival he is anxious and alert. The monitor shows sinus rhythm at 78 with frequent premature ventricular beats. His lungs are clear.

- Pulse: 78/minute
- Resp.: 20/minute
- BP: 118/70 mmHg
- O2 sat: 96% on room air

#### Q1
*Update:* While you assess him, the monitor shows a regular wide complex tachycardia at 190 with identical QRS complexes. He stays alert, and the device delivers another shock that restores sinus rhythm.

**Which of the following best describes the rhythm that triggered his most recent shock?**

- A. Antidromic AV reentrant tachycardia
- B. Atrial fibrillation with aberrancy
- C. Atrial flutter with aberrancy
- D. Junctional tachycardia with aberrancy
- E. Monomorphic ventricular tachycardia  **(key)**

*Explanation:* A regular wide complex tachycardia at 190 with identical QRS complexes, in a man with a prior anterior infarction and an ejection fraction of 25%, is monomorphic ventricular tachycardia from scar, and the device treated it appropriately. Atrial fibrillation with aberrancy is irregular. Flutter with aberrancy at 190 would need unusual conduction ratios and does not fit his scarred ventricle as well. Antidromic reentry needs an accessory pathway, and junctional tachycardia is rare in adults outside digoxin toxicity or recent cardiac surgery.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q2
*Update:* Potassium is 2.9 mmol/L, magnesium 0.58 mmol/L, calcium 2.34 mmol/L, glucose 6.2 mmol/L and TSH 1.8 mU/L. High-sensitivity troponin is below the 99th percentile and unchanged over 3 hours.

**Which of the following are the most likely contributors to his arrhythmia?**

Select 2.

- A. Acute coronary ischemia
- B. Hypercalcemia
- C. Hyperthyroidism
- D. Hypoglycemia
- E. Hypokalemia  **(key)**
- F. Hypomagnesemia  **(key)**

*Explanation:* His furosemide dose was doubled last week, and his potassium of 2.9 mmol/L and magnesium of 0.58 mmol/L are both low, which lowers the threshold for VT in a scarred ventricle. His troponin is below the 99th percentile and unchanged over 3 hours, so acute ischemia is unlikely. His calcium of 2.34 mmol/L, glucose of 6.2 mmol/L and TSH of 1.8 mU/L are normal.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q3
*Update:* Potassium and magnesium replacement has started. Two more episodes of the same wide complex rhythm occur within the next hour, each ended by the device.

**Which of the following is the most appropriate drug to reduce further episodes of his arrhythmia?**

- A. amiodarone 150 mg IV  **(key)**
- B. digoxin 0.5 mg IV
- C. diltiazem 20 mg IV
- D. magnesium sulfate 2 g IV
- E. verapamil 5 mg IV

*Explanation:* He has electrical storm, 3 or more episodes of sustained VT within 24 hours, and IV amiodarone together with beta blockade is the usual drug approach in structural heart disease. Diltiazem and verapamil do not suppress scar-related VT and can worsen heart failure with an ejection fraction of 25%. Digoxin does not prevent VT. Magnesium is already being replaced for his low level, and by itself it does not suppress recurrent monomorphic VT.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q4
**Which of the following additional measures is most appropriate to reduce his sympathetic drive?**

- A. Isoproterenol infusion
- B. Magnet placed over the device
- C. Mild sedation with close monitoring  **(key)**
- D. Rapid IV fluid bolus of 2 L
- E. Transcutaneous overdrive pacing

*Explanation:* Each shock and the fear it brings raise sympathetic tone, which drives more VT, so mild to moderate sedation with close monitoring is recommended in electrical storm. A magnet would suspend the device's shocks while he is still having true VT. Isoproterenol raises sympathetic drive and can provoke more VT. A 2 L fluid bolus could cause pulmonary edema with an ejection fraction of 25%. Overdrive pacing is done through the device or a transvenous lead, not through skin pads.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

### arrhythmia-25: Shocked while watching television

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 72-year-old woman presents to the emergency department after her implantable cardioverter defibrillator shocked her 3 times in 20 minutes while she sat watching television. She was awake and felt her heart racing before and after each shock. She has nonischemic cardiomyopathy with an ejection fraction of 30% and has had palpitations on and off for 3 days. She takes bisoprolol, sacubitril-valsartan, furosemide and apixaban, and has not missed an apixaban dose in months. She is alert and talking. She has fine crackles at both lung bases. The monitor shows an irregularly irregular narrow complex tachycardia at 170.

- Pulse: 170/minute irregular
- Resp.: 22/minute
- BP: 112/70 mmHg
- O2 sat: 95% on room air

#### Q1
**Which of the following best explains the shocks she received this evening?**

- A. Appropriate shocks for monomorphic VT
- B. Appropriate shocks for ventricular fibrillation
- C. Inappropriate shocks for atrial fibrillation  **(key)**
- D. Inappropriate shocks for sinus tachycardia
- E. Lead fracture sensing electrical noise

*Explanation:* She was awake and felt racing before and after each shock, and the monitor shows an irregularly irregular narrow complex rhythm at 170, which is atrial fibrillation fast enough to fall in the device's detection zone. Shocks for ventricular fibrillation come after loss of consciousness, not while she is talking. Monomorphic VT would be regular and wide. Sinus tachycardia is regular. Lead noise would not produce a real narrow complex tachycardia on the external monitor.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* McMullan J, et al. Care of the pacemaker/implantable cardioverter defibrillator patient in the ED. Am J Emerg Med. 2007.

#### Q2
**Which of the following is the most appropriate immediate step to prevent further shocks?**

- A. amiodarone 150 mg IV
- B. digoxin 0.5 mg IV
- C. diltiazem 0.25 mg/kg IV
- D. Magnet placed over the device  **(key)**
- E. Synchronized cardioversion at 200 J

*Explanation:* A magnet placed over an ICD suspends its tachycardia detection and shocks for as long as it stays in place, which stops repeated painful shocks for atrial fibrillation at once. Amiodarone and digoxin take time to slow the rate and will not stop the next shock. Diltiazem is best avoided with an ejection fraction of 30% and basal crackles. Synchronized cardioversion needs sedation and preparation, while a magnet stops the shocks the moment it is applied.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Crossley GH, et al. The Heart Rhythm Society (HRS)/American Society of Anesthesiologists (ASA) Expert Consensus Statement on the perioperative management of patients with implantable defibrillators, pacemakers and arrhythmia monitors. Heart Rhythm. 2011.

#### Q3
**Which of the following is required while the magnet is in place?**

- A. Continuous monitoring with external pads  **(key)**
- B. Discharge once the rate is below 110
- C. Magnet removal after 1 hour
- D. Oral amiodarone before discharge
- E. Transcutaneous pacing at a rate of 60

*Explanation:* With the magnet on, the device will not treat ventricular tachycardia or fibrillation, so she needs continuous cardiac monitoring with external defibrillation pads applied until the device is interrogated. Removing the magnet after an hour lets inappropriate shocks resume if her rate is still fast. She should not go home with a magnet-dependent device, whatever her rate. Oral amiodarone does not replace monitoring. Pacing is not needed because her rate is fast, and ICD bradycardia pacing continues with a magnet in place.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Crossley GH, et al. The Heart Rhythm Society (HRS)/American Society of Anesthesiologists (ASA) Expert Consensus Statement on the perioperative management of patients with implantable defibrillators, pacemakers and arrhythmia monitors. Heart Rhythm. 2011.

#### Q4
*Update:* With the magnet in place no further shocks occur. Her rate remains 160/minute and her BP is 110/68 mmHg.

**Which of the following is the most appropriate rate control medication for her?**

- A. adenosine 12 mg IV
- B. digoxin 0.5 mg IV  **(key)**
- C. diltiazem 0.25 mg/kg IV
- D. flecainide 300 mg PO
- E. verapamil 5 mg IV

*Explanation:* She has atrial fibrillation with an ejection fraction of 30% and basal crackles, and in heart failure the CAEP checklist avoids calcium channel blockers and prefers digoxin for rate control. Diltiazem and verapamil depress contractility and can worsen her heart failure. Flecainide is contraindicated in structural heart disease. Adenosine only slows AV conduction for a few seconds and does not control atrial fibrillation.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

#### Q5
**Which of the following is most important before she is discharged?**

- A. Discharge with the magnet taped in place
- B. Holter monitor for 48 hours
- C. Increase bisoprolol and discharge
- D. Outpatient device check in 3 months
- E. Urgent device interrogation and reprogramming  **(key)**

*Explanation:* After inappropriate shocks, the device must be interrogated to confirm the stored rhythm and shocks, and its detection settings adjusted along with her rate control before she leaves. Taping a magnet in place leaves her unprotected from ventricular arrhythmias at home. A Holter monitor or a routine check in 3 months does not prevent repeat shocks. A higher bisoprolol dose may help the rate but does not review the device's detection zones.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* McMullan J, et al. Care of the pacemaker/implantable cardioverter defibrillator patient in the ED. Am J Emerg Med. 2007.

### arrhythmia-26: Wheezing with an irregular pulse

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 77-year-old man is brought to the emergency department by ambulance with 3 days of increasing dyspnea, cough and green sputum. He has severe COPD and uses tiotropium-olodaterol daily. This week he has used salbutamol up to 12 times a day. He sits upright, speaks in short phrases and has diffuse wheeze with prolonged expiration. His ECG shows an irregular narrow complex tachycardia at 128. Each QRS is preceded by a P wave, and the P waves have at least three different shapes with varying PR intervals. Potassium is 3.1 mmol/L and magnesium 0.62 mmol/L.

- Temperature: 37.9°C oral
- Pulse: 128/minute irregular
- Resp.: 30/minute
- BP: 146/82 mmHg
- O2 sat: 86% on room air

#### Q1
**Which of the following is the most likely rhythm on his ECG?**

- A. Atrial fibrillation
- B. Atrial flutter with variable block
- C. Multifocal atrial tachycardia  **(key)**
- D. Sinus tachycardia with ectopy
- E. Wandering atrial pacemaker

*Explanation:* An irregular narrow complex rhythm above 100/minute with a P wave before every QRS, at least three P wave shapes and varying PR intervals is multifocal atrial tachycardia, typically seen in decompensated lung disease. Wandering atrial pacemaker has the same P wave pattern at a rate below 100/minute. Atrial fibrillation has no organized P waves. Flutter shows regular flutter waves, and sinus tachycardia with ectopy has one dominant P wave shape.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q2
**Which of the following is the most appropriate initial approach to his rhythm?**

- A. adenosine 6 mg IV
- B. digoxin 0.5 mg IV
- C. procainamide 15 mg/kg IV
- D. Synchronized cardioversion at 200 J
- E. Treat the COPD flare and hypoxemia  **(key)**

*Explanation:* Multifocal atrial tachycardia is driven by the underlying illness, here a COPD exacerbation with an oxygen saturation of 86%, heavy salbutamol use and low potassium and magnesium, so treating the exacerbation and hypoxemia is the main therapy. Cardioversion does not work because several atrial foci fire rather than one circuit. Adenosine and digoxin do not reliably slow or stop the rhythm. Procainamide has no role in this rhythm.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q3
**Which of the following electrolyte treatments is most likely to help slow his rhythm?**

- A. magnesium sulfate 2 g IV  **(key)**
- B. sodium bicarbonate 50 mmol IV
- C. sodium chloride 3% 100 mL IV
- D. sodium phosphate 15 mmol IV
- E. thiamine 100 mg IV

*Explanation:* IV magnesium can slow multifocal atrial tachycardia, and his magnesium of 0.62 mmol/L is low, so it both corrects a deficit and treats the rhythm. His potassium of 3.1 mmol/L should also be replaced. Sodium bicarbonate would add an alkalosis that lowers potassium further. Hypertonic saline and phosphate have no effect on the rhythm, and no low sodium or phosphate is reported. Thiamine does not treat this rhythm.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

### arrhythmia-27: Ectopy after thrombolysis

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department in northern Saskatchewan, 4 hours by road from a PCI centre. A 61-year-old man presents with 1 hour of crushing central chest pain. His ECG shows ST elevation of 4 mm in V1 to V5. He receives tenecteplase, enoxaparin, ASA and clopidogrel. Sixty minutes later his pain has resolved and the ST elevation has fallen by more than half. The monitor now shows frequent premature ventricular beats and runs of 4 to 7 beats of a wide complex rhythm at 150 that stop on their own. He feels well. Potassium is 4.2 mmol/L and magnesium 0.86 mmol/L.

- Pulse: 84/minute
- Resp.: 16/minute
- BP: 128/78 mmHg
- O2 sat: 97% on room air
- Weight: 86 kg

#### Q1
**Which of the following is the most appropriate management of these ventricular beats?**

- A. amiodarone 150 mg IV
- B. lidocaine 1 mg/kg IV
- C. magnesium sulfate 2 g IV
- D. procainamide 15 mg/kg IV
- E. Telemetry monitoring alone  **(key)**

*Explanation:* Frequent premature ventricular beats and short, self-terminating runs of VT are common within hours of reperfusion, and in a man who feels well with a BP of 128/78 mmHg they need only monitoring. His resolved pain and ST resolution of more than half suggest the artery has opened. Amiodarone, lidocaine and procainamide add side effects without benefit for asymptomatic ventricular ectopy. His magnesium of 0.86 mmol/L is normal and there is no torsades, so magnesium is not needed.

*Key feature:* Arrhythmia 7. Manage reperfusion rhythms mainly with support, using drugs only when clearly needed.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q2
**Which of the following is the most appropriate antiarrhythmic plan for his transfer?**

- A. Amiodarone infusion for 24 hours
- B. Lidocaine infusion during transport
- C. Magnesium infusion during transport
- D. Procainamide infusion for 24 hours
- E. No prophylactic antiarrhythmic drug  **(key)**

*Explanation:* Treating asymptomatic ventricular arrhythmias after reperfusion with antiarrhythmic drugs is not recommended, so he should travel on a monitor with defibrillation pads and no preventive infusion. Routine lidocaine prophylaxis after infarction was abandoned because it did not lower mortality. Amiodarone and procainamide infusions add hypotension and QT effects without benefit. Magnesium is not indicated with a normal level of 0.86 mmol/L.

*Key feature:* Arrhythmia 7. Manage reperfusion rhythms mainly with support, using drugs only when clearly needed.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q3
*Update:* Two hours later, while awaiting transport, he develops a sustained regular wide complex tachycardia at 180. He is pale and confused, with BP 72/40 mmHg.

**Which of the following is the most appropriate immediate treatment?**

- A. adenosine 6 mg IV rapid push
- B. amiodarone 150 mg IV over 10 minutes
- C. lidocaine 100 mg IV push
- D. procainamide 1 g IV over 60 minutes
- E. Synchronized cardioversion  **(key)**

*Explanation:* He has a pulse but is hypotensive at 72/40 mmHg and confused, so his sustained VT is unstable and needs immediate synchronized cardioversion, with brief sedation only if it causes no delay. Amiodarone, lidocaine and procainamide suit stable VT or prevention after cardioversion, but they act too slowly for a patient in shock. Adenosine does not treat ventricular tachycardia.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

#### Q4
*Update:* After one shock he is in sinus rhythm at 90. His chest pain has returned and the ECG shows new ST elevation of 3 mm in V2 to V4.

**Which of the following is the most appropriate next step?**

- A. Amiodarone infusion and observation
- B. Echocardiography before transfer
- C. Emergent transfer for rescue PCI  **(key)**
- D. Repeat full dose of tenecteplase
- E. Serial troponins every 6 hours

*Explanation:* Recurrent chest pain, new ST elevation and sustained VT after tenecteplase mean failed reperfusion or reocclusion, and the ongoing ischemia is driving the arrhythmia, so he needs emergent transfer for rescue PCI. Repeat thrombolysis is less effective than rescue PCI and adds bleeding risk. An amiodarone infusion treats the rhythm but not its cause. Echocardiography and serial troponins only delay revascularization.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

### arrhythmia-28: Slow pulse after clot-busting treatment

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department 2 hours by air from the nearest PCI centre. A 70-year-old woman presents with 90 minutes of chest pressure, nausea and sweating. Her ECG shows ST elevation of 3 mm in II, III and aVF with ST depression in I and aVL, and no ST depression in V1 to V3. She receives tenecteplase, enoxaparin, ASA and clopidogrel. Forty minutes later her chest pain has eased and the inferior ST elevation has fallen by more than half. She feels warm and nauseated, and the monitor shows sinus bradycardia at 48. She is alert and her lungs are clear.

- Pulse: 48/minute
- Resp.: 16/minute
- BP: 106/64 mmHg
- O2 sat: 96% on room air
- Weight: 64 kg

#### Q1
**Which of the following is the most appropriate management of her heart rate at this point?**

- A. atropine 1 mg IV
- B. dopamine infusion
- C. epinephrine infusion
- D. Observation on the monitor  **(key)**
- E. Transcutaneous pacing

*Explanation:* Sinus bradycardia with nausea and warmth soon after reperfusion of an inferior infarction is a vagal reflex that is usually brief, and with a BP of 106/64 mmHg and a clear mind she needs only observation on the monitor. Her pain relief and ST resolution suggest the artery has opened. Atropine, dopamine, epinephrine and pacing are for bradycardia that causes hypotension or poor perfusion, which she does not have.

*Key feature:* Arrhythmia 7. Manage reperfusion rhythms mainly with support, using drugs only when clearly needed.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q2
*Update:* Fifteen minutes later her pulse is 38/minute in sinus rhythm, her BP is 78/46 mmHg and she is light-headed and pale.

**Which of the following is the most appropriate next treatment for her heart rate?**

- A. amiodarone 150 mg IV
- B. atropine 1 mg IV  **(key)**
- C. isoproterenol infusion
- D. nitroglycerin 0.4 mg SL
- E. Transcutaneous pacing

*Explanation:* Her sinus bradycardia now causes hypotension and light-headedness, so treatment is clearly needed, and atropine 1 mg IV is the first drug for symptomatic sinus bradycardia of vagal origin. Transcutaneous pacing is the next step if atropine fails. Isoproterenol raises myocardial oxygen demand and can provoke ventricular arrhythmias during infarction. Nitroglycerin would worsen her hypotension, and amiodarone slows the sinus rate further.

*Key feature:* Arrhythmia 7. Manage reperfusion rhythms mainly with support, using drugs only when clearly needed.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q3
**Which of the following ECG steps is most useful to assess the cause of her hypotension?**

- A. Leads placed one space higher
- B. Lewis lead placement
- C. Posterior leads V7 to V9
- D. Repeat ECG in 30 minutes
- E. Right-sided precordial leads  **(key)**

*Explanation:* Hypotension with an inferior infarction raises concern for right ventricular infarction, and ST elevation in V4R on right-sided leads identifies it and shifts care toward fluids and away from nitrates. Posterior leads look for posterior infarction, which shows as ST depression in V1 to V3, absent here. Lewis leads help find hidden atrial activity, and leads placed one space higher look for a Brugada pattern. Waiting 30 minutes delays the answer.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q4
*Update:* After treatment her P waves come at a regular rate of 70. The PR interval lengthens from 200 ms to 320 ms over three beats, then a P wave is not conducted, and the cycle repeats.

**Which of the following best describes the rhythm now seen on her monitor?**

- A. Blocked premature atrial beats
- B. First-degree AV block
- C. Mobitz type I second-degree AV block  **(key)**
- D. Mobitz type II second-degree AV block
- E. Third-degree AV block

*Explanation:* Progressive PR lengthening before a single dropped P wave, with the cycle repeating, is Mobitz type I (Wenckebach) block, which is common with inferior infarction because of AV nodal ischemia and vagal tone. Mobitz type II drops beats without PR lengthening. First-degree block conducts every P wave, and third-degree block has no P to QRS relationship. Blocked premature atrial beats arrive early rather than at a regular rate of 70.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

### arrhythmia-29: Found unresponsive after an asthma attack

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 47-year-old woman is brought to the emergency department by ambulance after a cardiac arrest at home. Her husband found her unresponsive and not breathing after a severe asthma attack and started CPR. Paramedics found pulseless electrical activity. After ventilation, intubation and two doses of epinephrine, she had return of spontaneous circulation 24 minutes after the arrest. In the emergency department she is ventilated with no sedation. She does not open her eyes or follow commands, and her pupils are 4 mm and reactive. Breath sounds are equal and a chest radiograph shows no pneumothorax. Glucose is 9.4 mmol/L.

- Temperature: 36.2°C core
- Pulse: 112/minute
- Resp.: 16/minute
- BP: 104/62 mmHg
- O2 sat: 97% on FiO2 0.6

#### Q1
**Which of the following is the most appropriate approach to her temperature?**

- A. Deliberate temperature control now  **(key)**
- B. Passive rewarming with warm blankets
- C. Temperature control after CT excludes bleeding
- D. Temperature control only if fever develops
- E. No temperature control after a nonshockable arrest

*Explanation:* She remains comatose after return of spontaneous circulation, so she needs deliberate temperature control at a constant target between 32 and 37.5°C. The recommendation covers comatose adults after any first rhythm, including pulseless electrical activity. Waiting for fever or warming her with blankets lets her temperature drift and risks further brain injury. A CT is not required before temperature control begins.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

#### Q2
**Which of the following is the minimum recommended duration of deliberate temperature control for her?**

- A. 6 hours
- B. 12 hours
- C. 18 hours
- D. 24 hours
- E. 36 hours  **(key)**

*Explanation:* The 2025 guidance recommends deliberate temperature control between 32 and 37.5°C for at least 36 hours in adults who stay comatose after return of spontaneous circulation. Stopping at 6, 12, 18 or 24 hours ends control before the recommended minimum. After that period, fever should still be prevented while she remains comatose.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

#### Q3
**Which of the following was the most likely cause of her arrest?**

- A. Hypoxemia from severe asthma  **(key)**
- B. Primary ventricular arrhythmia
- C. Pulmonary embolism
- D. Stress cardiomyopathy
- E. Tension pneumothorax

*Explanation:* She arrested after a severe asthma attack with pulseless electrical activity, the usual pattern of a hypoxic arrest. A primary ventricular arrhythmia would more often present as ventricular fibrillation. Equal breath sounds and a chest radiograph without pneumothorax argue against tension pneumothorax. Nothing in her history points to pulmonary embolism or stress cardiomyopathy as the first event.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

#### Q4
**Which of the following is the most appropriate plan once the period of deliberate temperature control ends?**

- A. Prevent fever while she remains comatose  **(key)**
- B. Rewarm to 38°C to aid awakening
- C. Stop monitoring core temperature
- D. Temperature allowed to drift freely
- E. Treat fever only above 39.5°C

*Explanation:* Fever after cardiac arrest is linked to worse neurologic outcome, so after the period of deliberate temperature control, fever should be actively prevented while she remains comatose. Letting her temperature drift, stopping core monitoring or treating only temperatures above 39.5°C allows harmful fever. Warming her to 38°C would create the fever the plan is meant to avoid.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

### arrhythmia-30: Collapse at a hardware store

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old man is brought to the emergency department by ambulance after collapsing at a hardware store. A bystander started CPR and an AED delivered one shock for ventricular fibrillation. Paramedics achieved return of spontaneous circulation 14 minutes after collapse. He is intubated, does not open his eyes or follow commands without sedation, and has reactive pupils. His ECG shows sinus rhythm with no ST elevation. Temperature control with a surface device and propofol sedation are started, and cardiology plans angiography later in the day.

- Temperature: 35.8°C core
- Pulse: 96/minute
- Resp.: 16/minute
- BP: 118/72 mmHg
- O2 sat: 98% on FiO2 0.4

#### Q1
*Update:* Four hours later his core temperature is 33.5°C and his pulse is 46/minute in sinus rhythm. His BP is 112/70 mmHg, his lactate is falling and urine output is 1 mL/kg/hour.

**Which of the following is the most appropriate management of his heart rate?**

- A. atropine 1 mg IV
- B. dopamine infusion
- C. Maintain current care  **(key)**
- D. Rewarm quickly to 37°C
- E. Transcutaneous pacing

*Explanation:* Sinus bradycardia is an expected effect of a core temperature of 33.5°C, and with a BP of 112/70 mmHg, a falling lactate and urine output of 1 mL/kg/hour he is perfusing well, so current care should continue. Atropine, dopamine and pacing are for bradycardia that causes hypoperfusion, which he does not have. Rapid rewarming abandons temperature control and can cause rebound hyperthermia and hemodynamic swings.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

#### Q2
**Which of the following findings would make emergent coronary angiography most appropriate for him?**

- A. Age over 55 years
- B. Coma after return of circulation
- C. Initial shockable rhythm alone
- D. Raised troponin at 2 hours
- E. Recurrent ventricular arrhythmias  **(key)**

*Explanation:* Emergent angiography after resuscitation is recommended for ST elevation, cardiogenic shock, recurrent ventricular arrhythmias or ongoing ischemia, because each points to an active coronary cause. He has no ST elevation and is not in shock, so recurrent VT or VF would be the trigger to go now rather than later. A shockable first rhythm, coma, his age or a raised troponin alone do not call for emergent angiography in a stable patient without ST elevation.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375

#### Q3
*Update:* On the second day, still under temperature control at 33.5°C, the monitor shows ventricular fibrillation and he loses his pulse.

**Which of the following is the most appropriate immediate treatment?**

- A. CPR for 2 minutes then a shock
- B. epinephrine 1 mg IV
- C. Rewarm to 36°C before shocking
- D. Synchronized cardioversion
- E. Unsynchronized defibrillation  **(key)**

*Explanation:* Witnessed, monitored ventricular fibrillation should be defibrillated at once with an unsynchronized shock, and a core temperature of 33.5°C does not prevent success. Giving 2 minutes of CPR before the first shock delays the most effective treatment when the arrest is seen on the monitor. A synchronized shock may not fire because there is no QRS to sense. Epinephrine follows shocks in the algorithm, and rewarming first wastes time.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

### arrhythmia-31: Pulled from a backyard pool

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 4-year-old boy is brought to the emergency department by ambulance after being pulled from a backyard pool in July. He was underwater for an estimated 5 minutes. His father started CPR and paramedics found asystole. After ventilation, CPR and one dose of epinephrine, he had return of spontaneous circulation 12 minutes after rescue. He is now intubated and does not respond to pain. His pupils are 3 mm and sluggish. There are no signs of trauma. Glucose is 8.1 mmol/L.

- Temperature: 35.9°C rectal
- Pulse: 132/minute
- Resp.: 24/minute
- BP: 94/58 mmHg
- O2 sat: 99% on FiO2 0.5
- Weight: 17 kg

#### Q1
**Which of the following is the most likely mechanism of his cardiac arrest?**

- A. Cervical spine injury from a dive
- B. Congenital long QT syndrome
- C. Hypoxemia from submersion  **(key)**
- D. Primary ventricular fibrillation
- E. Reflex asystole from cold water

*Explanation:* Drowning causes cardiac arrest mainly through hypoxemia, which progresses to bradycardia, pulseless electrical activity and asystole, the rhythm paramedics found. Primary ventricular fibrillation and an arrhythmia from long QT syndrome would more often present with a shockable rhythm. Reflex asystole from cold water is unlikely in a backyard pool in July. He has no signs of trauma to suggest a spine injury.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q2
**Which of the following is the most appropriate approach to his temperature over the next days?**

- A. Continuous core monitoring and fever prevention  **(key)**
- B. Cooling only if seizures occur
- C. Hourly axillary checks and fever treatment
- D. Passive rewarming then routine checks
- E. No temperature targeting in children

*Explanation:* In children who remain comatose after return of circulation, core temperature should be measured continuously and fever prevented, with a controlled target chosen by the treating team. Hourly axillary checks are less accurate and can miss fever between readings. Passive rewarming followed by routine checks, and cooling only for seizures, both leave fever uncontrolled. Temperature control applies to comatose children as well as adults.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q3
*Update:* Before transfer, his pulse falls to 48/minute and his BP to 60/34 mmHg, with mottled skin, while he is ventilated with 100% oxygen and the tube position is confirmed.

**Which of the following is the most appropriate immediate treatment?**

- A. atropine 0.34 mg IV
- B. Chest compressions  **(key)**
- C. epinephrine 1.7 mg IV
- D. Observation on 100% oxygen
- E. Transcutaneous pacing

*Explanation:* In a child, a heart rate below 60/minute with poor perfusion despite effective oxygenation and ventilation calls for chest compressions, followed by epinephrine 0.01 mg/kg IV, which is 0.17 mg for 17 kg. Epinephrine 1.7 mg is ten times that dose. Atropine 0.02 mg/kg (0.34 mg) is for bradycardia from vagal tone or primary AV block, and this bradycardia is hypoxic-ischemic. Pacing rarely helps hypoxic bradycardia in children, and observation alone allows arrest.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

### arrhythmia-32: Faint when the alarm rang

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 15-year-old girl is brought to the emergency department by her mother after fainting at home this morning. Her alarm clock went off, she sat up, felt her heart pound and collapsed. Her mother saw a few jerks of her arms, and she was awake and oriented within 30 seconds. She fainted once last year when the fire alarm sounded at school. She takes no medications. Her examination is normal. Her ECG shows sinus rhythm at 94 with notched, low-amplitude T waves in several leads. The measured QT interval is 420 ms and the RR interval is 0.64 seconds.

- Pulse: 94/minute
- Resp.: 16/minute
- BP: 108/64 mmHg
- O2 sat: 99% on room air
- Weight: 52 kg

#### Q1
**Which of the following features of her history most strongly suggests an arrhythmic cause of her faint?**

- A. A few jerks of her arms
- B. Collapse triggered by a loud noise  **(key)**
- C. Female sex at age 15
- D. Recovery within 30 seconds
- E. Syncope soon after sitting up

*Explanation:* Two faints set off by a sudden loud noise, her alarm clock and a school fire alarm, are a recognized trigger for arrhythmia in long QT syndrome type 2. Brief jerking movements are common with any syncope and do not point to a seizure or to a particular cause. Quick recovery occurs in both reflex and arrhythmic syncope. Sitting up is a brief change in posture, not the prolonged standing that triggers orthostatic or reflex syncope, and her age and sex do not separate the causes.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q2
**Which of the following is her QTc calculated with the Bazett formula?**

- A. 420 ms
- B. 460 ms
- C. 480 ms
- D. 525 ms  **(key)**
- E. 656 ms

*Explanation:* Bazett's formula divides the QT interval by the square root of the RR interval in seconds. The square root of 0.64 is 0.8, so her QTc is 420 divided by 0.8, or 525 ms. Reading the uncorrected QT of 420 ms underestimates it at a rate of 94. Dividing by 0.64 instead of its square root gives 656 ms. Values of 460 and 480 ms come from guessing the correction rather than calculating it.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q3
**Which of the following is the most appropriate medication to start after cardiology review?**

- A. amiodarone
- B. flecainide
- C. mexiletine
- D. nadolol  **(key)**
- E. verapamil

*Explanation:* Beta blockers are the first treatment for congenital long QT syndrome with a prolonged QTc, and a nonselective, long-acting agent such as nadolol is preferred. Amiodarone prolongs the QT further and can provoke torsades de pointes. Flecainide and verapamil are not used to prevent arrhythmia in long QT syndrome. Mexiletine shortens the QT mainly in long QT syndrome type 3, not in the noise-triggered type 2 pattern she shows.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q4
**Which of the following advice is most appropriate while she awaits cardiology follow-up?**

Select 2.

- A. Avoid drugs that prolong the QT  **(key)**
- B. Carry an epinephrine autoinjector
- C. Remove loud alarms from the bedroom  **(key)**
- D. Restrict dietary salt
- E. Stop all exercise permanently
- F. Take daily potassium supplements

*Explanation:* Drugs that prolong the QT interval, such as some antibiotics, antiemetics and antipsychotics, can trigger torsades de pointes in long QT syndrome and should be avoided. Both of her faints followed sudden loud noises, so replacing loud alarms by her bed removes a known trigger for type 2 disease. Salt restriction and routine potassium supplements are not standard advice. An epinephrine autoinjector treats anaphylaxis, and a permanent ban on all exercise is not required before cardiology assessment.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

### arrhythmia-33: Racing heart during a long run

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 24-year-old man presents to the emergency department with palpitations and light-headedness that began 40 minutes ago during a long-distance run. He is a competitive triathlete. He had a similar but shorter episode last month that stopped on its own. He takes no medications and knows of no family history of heart disease. He is alert, has stopped exercising and his examination is normal. His ECG shows a regular wide complex tachycardia at 200 with a left bundle branch block morphology and a superior axis.

- Pulse: 200/minute regular
- Resp.: 20/minute
- BP: 112/70 mmHg
- O2 sat: 98% on room air
- Weight: 72 kg

#### Q1
**Which of the following is the most appropriate working diagnosis for his rhythm?**

- A. Antidromic AV reentrant tachycardia
- B. Atrial flutter with 1:1 conduction
- C. Sinus tachycardia with aberrancy
- D. SVT with rate-related aberrancy
- E. Ventricular tachycardia  **(key)**

*Explanation:* A regular wide complex tachycardia should be treated as ventricular tachycardia until proven otherwise, and a left bundle branch block pattern with a superior axis during exercise is a typical form of VT from the right ventricle. Aberrant SVT, antidromic reentry and flutter with 1:1 conduction are less common and cannot be assumed. Sinus tachycardia at 200/minute that continues after he has stopped running would be very unusual at age 24.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q2
**Which of the following is the most appropriate initial treatment?**

- A. digoxin 0.5 mg IV
- B. diltiazem 20 mg IV
- C. magnesium sulfate 2 g IV
- D. procainamide 15 mg/kg IV  **(key)**
- E. Unsynchronized defibrillation

*Explanation:* He is alert with a BP of 112/70 mmHg, so his VT is hemodynamically tolerated, and IV procainamide (15 mg/kg, about 1080 mg for 72 kg) is an effective first drug. Diltiazem and digoxin act on the AV node and do not treat VT, and diltiazem can cause collapse when given for VT. Magnesium is for torsades de pointes. Unsynchronized shocks are for pulseless VT or ventricular fibrillation.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q3
*Update:* He converts to sinus rhythm. The sinus ECG shows T wave inversion in V1 to V4 and a small low-amplitude notch just after the QRS in V1 and V2.

**Which of the following best describes the notch after the QRS in V1 and V2?**

- A. Delta wave
- B. Epsilon wave  **(key)**
- C. Osborn wave
- D. Prominent U wave
- E. Pseudo r prime

*Explanation:* A small low-amplitude deflection between the end of the QRS and the start of the T wave in V1 and V2 is an epsilon wave, a marker of arrhythmogenic right ventricular cardiomyopathy that fits his T wave inversion in V1 to V4 and exercise-related VT. A delta wave is a slurred upstroke at the start of the QRS. An Osborn wave is a hump at the J point in hypothermia. A U wave follows the T wave, and a pseudo r prime is seen during AV nodal reentry, not in sinus rhythm.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q4
**Which of the following is the most appropriate disposition for him?**

- A. Admission for cardiology assessment  **(key)**
- B. Discharge with a 30-day event monitor
- C. Discharge with an outpatient echocardiogram
- D. Discharge with sport restriction only
- E. Return to training after 1 week

*Explanation:* Sustained VT with an epsilon wave and anterior T wave inversion suggests arrhythmogenic right ventricular cardiomyopathy, a leading cause of sudden death in young athletes, so he needs admission for cardiology assessment, imaging and consideration of an ICD. Discharge with an event monitor, an outpatient echocardiogram or sport restriction alone leaves a high-risk patient unprotected. Endurance exercise worsens this disease and should not resume.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

### arrhythmia-34: Jaw pain and runs on the monitor

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 63-year-old man presents to the emergency department with 2 hours of chest pressure radiating to his jaw. He has diabetes and hypertension and smokes. His medications are metformin and perindopril. His first ECG shows sinus rhythm at 88 with 2 mm ST depression in V3 to V6 and a QTc of 430 ms. While you examine him he has several runs of a rapid wide complex rhythm in which the QRS complexes change in shape and axis from beat to beat. Each run lasts 5 to 8 seconds and he stays awake. Potassium is 4.3 mmol/L and magnesium 0.88 mmol/L.

- Pulse: 88/minute
- Resp.: 18/minute
- BP: 142/86 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following best describes the runs on his monitor?**

- A. Atrial fibrillation with aberrancy
- B. Coarse ventricular fibrillation
- C. Monomorphic ventricular tachycardia
- D. Polymorphic VT with a normal QT  **(key)**
- E. Torsades de pointes

*Explanation:* Wide complexes that change shape and axis from beat to beat are polymorphic ventricular tachycardia, and because his QTc between runs is a normal 430 ms, this is not torsades de pointes, which by definition occurs with a long QT. Monomorphic VT has uniform complexes. Ventricular fibrillation has no organized complexes and he would not stay awake through it. Atrial fibrillation with aberrancy is irregular but its QRS complexes look alike.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022.

#### Q2
**Which of the following is the most likely cause of his rhythm?**

- A. Acute myocardial ischemia  **(key)**
- B. Brugada syndrome
- C. Drug-induced QT prolongation
- D. Hypomagnesemia
- E. Low potassium level

*Explanation:* Polymorphic VT with a normal QT during chest pressure and 2 mm ST depression is most often caused by acute ischemia. His QTc of 430 ms excludes drug-induced QT prolongation, and neither metformin nor perindopril prolongs the QT. His potassium of 4.3 mmol/L and magnesium of 0.88 mmol/L are normal. Brugada syndrome shows coved ST elevation in V1 and V2, not lateral ST depression.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

#### Q3
*Update:* The next run does not stop. He becomes unresponsive and has no pulse.

**Which of the following is the most appropriate immediate treatment?**

- A. amiodarone 300 mg IV
- B. magnesium sulfate 2 g IV
- C. Synchronized cardioversion
- D. Transcutaneous overdrive pacing
- E. Unsynchronized defibrillation  **(key)**

*Explanation:* Pulseless polymorphic VT is treated like ventricular fibrillation, with immediate unsynchronized defibrillation and CPR. A synchronized shock may not fire because the device cannot reliably sense the changing QRS complexes. Amiodarone comes after shocks in the arrest algorithm. Magnesium is for torsades de pointes with a long QT, and overdrive pacing does not treat a pulseless rhythm.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

#### Q4
*Update:* He has return of spontaneous circulation after one shock. Over the next 10 minutes he has further short runs of polymorphic VT with a pulse.

**Which of the following drugs is most appropriate to suppress these runs while revascularization is arranged?**

- A. adenosine 12 mg IV
- B. amiodarone 150 mg IV  **(key)**
- C. isoproterenol infusion
- D. magnesium sulfate 2 g IV
- E. procainamide 15 mg/kg IV

*Explanation:* Recurrent polymorphic VT during acute ischemia is treated with IV amiodarone or a beta blocker while urgent revascularization is arranged. Isoproterenol raises heart rate and oxygen demand and would worsen ischemic VT. Magnesium helps torsades with a long QT but not ischemic polymorphic VT with a QTc of 430 ms. Adenosine does not treat VT. Procainamide is not one of the recommended drugs for ischemic polymorphic VT.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://academic.oup.com/eurheartj/article/44/38/3720/7243210

### arrhythmia-35: Sitting down on the floor

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old woman presents to the emergency department with 2 weeks of brief episodes of light-headedness, two of which made her sit down on the floor. Between episodes she feels well. She has hypertension and osteoarthritis and takes amlodipine and acetaminophen. Her examination is normal. On the monitor she has runs of atrial fibrillation at 140 that end suddenly, followed by a 5-second pause with no P waves or QRS complexes, then sinus bradycardia at 46. She becomes light-headed during each pause.

- Pulse: 46/minute
- Resp.: 16/minute
- BP: 150/78 mmHg
- O2 sat: 97% on room air
- Weight: 60 kg

#### Q1
**Which of the following best describes the rhythm disorder seen on her monitor?**

- A. Carotid sinus hypersensitivity
- B. Complete heart block
- C. Mobitz type II AV block
- D. Tachycardia-bradycardia syndrome  **(key)**
- E. Vasovagal syncope

*Explanation:* Bursts of atrial fibrillation that end in a long sinus pause before a slow sinus rhythm are the tachycardia-bradycardia form of sick sinus syndrome, and her light-headedness during the pauses links the rhythm to her symptoms. AV block would show P waves that fail to conduct, but her pauses have no P waves at all. Carotid sinus hypersensitivity and vasovagal syncope are reflex causes that do not produce atrial fibrillation followed by sinus arrest.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q2
**Which of the following is the most appropriate plan for her atrial fibrillation?**

- A. digoxin 0.125 mg PO daily
- B. diltiazem 30 mg PO four times daily
- C. flecainide 150 mg PO as needed
- D. metoprolol 25 mg PO twice daily
- E. Pacemaker before rate control drugs  **(key)**

*Explanation:* Rate control and antiarrhythmic drugs can lengthen her post-conversion pauses, which already reach 5 seconds and cause symptoms, so she needs a permanent pacemaker first, after which drugs for her atrial fibrillation can be given safely. Metoprolol, diltiazem, digoxin and flecainide all depress the sinus node or AV node and could turn her pauses into syncope or asystole. After pacing, rate control can be chosen on its usual merits.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q3
**Which of the following reversible contributors should be checked before a pacemaker is placed?**

- A. Hypothyroidism  **(key)**
- B. Iron deficiency
- C. Low serum albumin
- D. Mild hyponatremia
- E. Vitamin B12 deficiency

*Explanation:* Hypothyroidism can slow the sinus node and is a reversible cause of sinus node dysfunction, so a TSH belongs in her workup before a pacemaker is placed. Iron deficiency, low albumin, mild hyponatremia and vitamin B12 deficiency do not cause sinus pauses. Her amlodipine is a dihydropyridine that does not slow the sinus node, so it is not a drug cause to stop.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

### arrhythmia-36: Three falls in a week

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 84-year-old man is brought to the emergency department by his daughter after 3 falls in a week. Each time he felt dizzy and his legs gave way, and he did not lose consciousness. He has Alzheimer disease, hypertension and benign prostatic hyperplasia. Three weeks ago his donepezil was increased from 5 mg to 10 mg daily. He also takes metoprolol 50 mg twice daily and tamsulosin. He is at his usual level of confusion. His left hip is bruised with full range of motion. His BP does not fall on standing. His ECG shows sinus bradycardia at 42, a PR interval of 220 ms and a narrow QRS.

- Temperature: 36.6°C oral
- Pulse: 42/minute
- Resp.: 16/minute
- BP: 108/60 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is the most likely cause of his falls?**

- A. Drug-induced bradycardia  **(key)**
- B. Hip osteoarthritis
- C. Orthostatic hypotension
- D. Progressive dementia
- E. Vasovagal syncope

*Explanation:* Dizziness before each fall, a sinus rate of 42 and first-degree AV block after a donepezil increase, in a man also taking metoprolol, point to bradycardia from combined cholinergic and beta blocking effects. His BP does not fall on standing, which argues against orthostatic hypotension from tamsulosin. His confusion is at baseline, so progression of dementia does not explain new falls, and his hip has full range of motion. Vasovagal syncope does not explain a persistent resting rate of 42.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q2
**Which of the following is the most appropriate management of his bradycardia?**

- A. dopamine infusion
- B. Hold donepezil and metoprolol  **(key)**
- C. isoproterenol infusion
- D. Permanent pacemaker insertion
- E. Transcutaneous pacing

*Explanation:* He is stable, with a BP of 108/60 mmHg and his usual mental status, and his bradycardia has reversible drug causes, so holding donepezil and metoprolol while he is monitored is the right step. A permanent pacemaker is not indicated for bradycardia caused by drugs that can be stopped. Dopamine, isoproterenol and transcutaneous pacing are for unstable bradycardia with hypotension or poor perfusion.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q3
**Which of the following laboratory findings would add another reversible cause of his bradycardia?**

- A. Calcium 2.30 mmol/L
- B. Glucose 7.2 mmol/L
- C. Hemoglobin 128 g/L
- D. Potassium 6.1 mmol/L  **(key)**
- E. Sodium 138 mmol/L

*Explanation:* Hyperkalemia slows the sinus node and AV conduction and adds to drug effects, so a potassium of 6.1 mmol/L would be another reversible contributor to correct. A calcium of 2.30 mmol/L and a sodium of 138 mmol/L are normal. A glucose of 7.2 mmol/L and a hemoglobin of 128 g/L are near normal for his age and do not slow the heart.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

#### Q4
**Which of the following commonly prescribed drugs can cause bradycardia in older adults?**

Select 4.

- A. amlodipine
- B. atorvastatin
- C. digoxin  **(key)**
- D. diltiazem  **(key)**
- E. donepezil  **(key)**
- F. furosemide
- G. metoprolol  **(key)**
- H. tamsulosin

*Explanation:* Beta blockers such as metoprolol, nondihydropyridine calcium channel blockers such as diltiazem, digoxin and cholinesterase inhibitors such as donepezil all slow the sinus node or AV conduction, and a medication review for them belongs in every workup of slow rhythms in older adults. Amlodipine is a dihydropyridine that tends to raise, not lower, the heart rate. Atorvastatin, furosemide and tamsulosin do not slow the heart, although furosemide and tamsulosin can cause dizziness through volume loss or orthostatic hypotension.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.

### arrhythmia-37: Dizzy ten days after a procedure

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 80-year-old woman presents to the emergency department with 1 day of dizziness and fatigue. Ten days ago she had a single-chamber ventricular pacemaker implanted for complete heart block. She has chronic kidney disease and takes ASA, atorvastatin and furosemide. She is alert. Her pacemaker wound is clean and dry. The monitor shows P waves at 80 and pacing spikes at a regular rate of 60, but many spikes are not followed by a QRS complex. Her own wide QRS complexes occur at 32.

- Pulse: 32/minute
- Resp.: 18/minute
- BP: 96/54 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following best describes the pacemaker problem on her monitor?**

- A. Failure to capture  **(key)**
- B. Failure to output
- C. Oversensing of muscle noise
- D. Pacemaker-mediated tachycardia
- E. Undersensing of native beats

*Explanation:* Pacing spikes that appear on time but are not followed by a QRS complex show failure to capture, meaning the output does not depolarize the ventricle. Failure to output shows no spike when pacing is due. Oversensing inhibits pacing, so spikes would be missing rather than ineffective. Undersensing produces spikes that ignore native beats, and pacemaker-mediated tachycardia is a fast paced rhythm, not a slow one.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* McMullan J, et al. Care of the pacemaker/implantable cardioverter defibrillator patient in the ED. Am J Emerg Med. 2007.

#### Q2
**Which of the following is the most appropriate immediate treatment?**

- A. atropine 1 mg IV
- B. calcium gluconate 3 g IV
- C. Chest radiograph before treatment
- D. Magnet placed over the pacemaker
- E. Transcutaneous pacing  **(key)**

*Explanation:* She has symptomatic bradycardia at 32 with a BP of 96/54 mmHg because her pacemaker is not capturing, so transcutaneous pacing should start now while the device is interrogated. A magnet switches the pacemaker to fixed-rate pacing and does not fix a capture problem. Atropine rarely helps a wide escape rhythm in complete heart block. A chest radiograph is useful but must not delay pacing, and calcium is only indicated if hyperkalemia is found.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

#### Q3
**Which of the following is the most likely cause of her pacemaker problem?**

- A. Battery depletion
- B. Crosstalk between chambers
- C. Lead dislodgement  **(key)**
- D. Lead insulation break
- E. Magnet interference

*Explanation:* Lead dislodgement is the most common cause of loss of capture in the first weeks after implantation, and her device is only 10 days old. A new generator is very unlikely to have a depleted battery. Crosstalk needs two leads, and she has a single-chamber device. An insulation break is a late complication, and no magnet has been applied. Her potassium should still be checked because hyperkalemia raises the capture threshold.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* McMullan J, et al. Care of the pacemaker/implantable cardioverter defibrillator patient in the ED. Am J Emerg Med. 2007.

#### Q4
**Which of the following is the usual effect of placing a magnet over her pacemaker?**

- A. Asynchronous pacing at a fixed rate  **(key)**
- B. Complete inhibition of pacing
- C. Increase in pacing output
- D. Reset of the capture threshold
- E. Switch to rate-responsive pacing

*Explanation:* A magnet over a pacemaker usually switches it to asynchronous pacing at a fixed magnet rate, which overrides inhibition from oversensing but does not raise output or restore capture. It does not inhibit pacing. Suspending therapy is the magnet response of an ICD, and even then it affects shocks rather than pacing. A magnet does not change output, reset the threshold or turn on rate response.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Crossley GH, et al. The Heart Rhythm Society (HRS)/American Society of Anesthesiologists (ASA) Expert Consensus Statement on the perioperative management of patients with implantable defibrillators, pacemakers and arrhythmia monitors. Heart Rhythm. 2011.

### arrhythmia-38: Vomiting infant with a fast pulse

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 10-month-old boy is brought to the emergency department by his mother with 3 days of vomiting and watery diarrhea. He has had 2 wet diapers in 24 hours and will not drink. He was previously well. He is irritable but consolable, with sunken eyes, dry mucous membranes and a capillary refill of 3 seconds. The monitor shows a narrow complex tachycardia at 205 with an upright P wave before each QRS in II. The rate varies between 185 and 210 as he cries and settles.

- Temperature: 38.4°C rectal
- Pulse: 205/minute
- Resp.: 40/minute
- BP: 88/50 mmHg
- O2 sat: 99% on room air
- Weight: 8.5 kg

#### Q1
**Which of the following is the most likely rhythm on his monitor?**

- A. Atrial flutter with 2:1 conduction
- B. AV reentrant tachycardia
- C. Ectopic atrial tachycardia
- D. Junctional ectopic tachycardia
- E. Sinus tachycardia  **(key)**

*Explanation:* A rate that varies from 185 to 210 with crying, an upright P wave before each QRS in II and a clear cause in fever and dehydration point to sinus tachycardia. Reentrant tachycardia runs at a fixed rate, often 220/minute or more in infants. Flutter shows sawtooth waves, and junctional ectopic tachycardia lacks a normal P wave before each QRS. Ectopic atrial tachycardia usually has an abnormal P wave axis and a rate that does not track crying.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q2
**Which of the following is the most appropriate first treatment?**

- A. adenosine 0.85 mg IV rapid push
- B. Normal saline 170 mL IV bolus  **(key)**
- C. procainamide 128 mg IV
- D. Synchronized cardioversion at 4 J
- E. Vagal manoeuvre with ice water

*Explanation:* His tachycardia is a response to dehydration and fever, so the treatment is an isotonic fluid bolus of 20 mL/kg, which is 170 mL for 8.5 kg, followed by reassessment. Adenosine, vagal manoeuvres, procainamide and cardioversion target reentrant tachycardia and will not slow a sinus rhythm driven by hypovolemia. Cardioversion of sinus tachycardia exposes him to sedation and a shock with no benefit.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q3
**Which of the following heart rate thresholds best suggests supraventricular tachycardia rather than sinus tachycardia in an infant?**

- A. 140/minute or more
- B. 160/minute or more
- C. 180/minute or more
- D. 200/minute or more
- E. 220/minute or more  **(key)**

*Explanation:* In infants, sinus tachycardia usually stays below 220/minute, while supraventricular tachycardia usually runs at 220/minute or more at a fixed rate. Rates of 140, 160, 180 or even 200/minute are common with fever, pain and dehydration, as in this boy at 205. Rate is only one clue, alongside P wave shape, beat-to-beat variation and the history.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

### arrhythmia-39: Racing heart during a video game

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 13-year-old boy presents to the emergency department with 30 minutes of a racing heart that started suddenly while he was playing video games. He was diagnosed with Wolff-Parkinson-White syndrome last year and is waiting for an ablation. He takes no medications. He is alert, pink and well perfused. His ECG shows a regular narrow complex tachycardia at 230 with a retrograde P wave in the ST segment and no delta wave. A modified Valsalva manoeuvre has not converted the rhythm.

- Pulse: 230/minute regular
- Resp.: 20/minute
- BP: 112/68 mmHg
- O2 sat: 99% on room air
- Weight: 45 kg

#### Q1
**Which of the following is the most likely rhythm on his ECG?**

- A. Antidromic AV reentrant tachycardia
- B. Atrial fibrillation with pre-excitation
- C. Atrial flutter with 1:1 conduction
- D. Junctional ectopic tachycardia
- E. Orthodromic AV reentrant tachycardia  **(key)**

*Explanation:* In a boy with an accessory pathway, a regular narrow complex tachycardia with a retrograde P wave in the ST segment and no delta wave is orthodromic AV reentry, which travels down the AV node and back up the pathway. Antidromic reentry and pre-excited atrial fibrillation conduct down the pathway and give wide complexes. Flutter with 1:1 conduction would show flutter waves, and junctional ectopic tachycardia is rare outside the period after cardiac surgery.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q2
**Which of the following is the most appropriate next treatment?**

- A. adenosine 4.5 mg IV rapid push  **(key)**
- B. amiodarone 225 mg IV over 20 minutes
- C. procainamide 675 mg IV over 30 minutes
- D. Synchronized cardioversion at 45 J
- E. verapamil 4.5 mg IV over 2 minutes

*Explanation:* Orthodromic AV reentry depends on the AV node, so adenosine 0.1 mg/kg (4.5 mg for 45 kg, below the 6 mg maximum) by rapid push is the right drug, with a defibrillator ready because adenosine can occasionally trigger atrial fibrillation that conducts down the pathway. Verapamil is dangerous if pre-excited atrial fibrillation follows. Amiodarone (5 mg/kg) and procainamide (15 mg/kg) are later options. He is well perfused, so cardioversion is not needed now.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q3
*Update:* Two minutes after adenosine the rhythm becomes an irregular wide complex tachycardia at 260 with varying QRS widths. He is pale and confused, with BP 70/40 mmHg.

**Which of the following is the most appropriate immediate treatment?**

- A. adenosine 9 mg IV rapid push
- B. amiodarone 225 mg IV over 20 minutes
- C. procainamide 675 mg IV over 30 minutes
- D. Synchronized cardioversion at 45 J  **(key)**
- E. Unsynchronized defibrillation at 90 J

*Explanation:* He now has pre-excited atrial fibrillation with shock, so he needs immediate synchronized cardioversion, and 45 J is 1 J/kg for 45 kg. More adenosine or amiodarone can speed conduction down the pathway and precipitate ventricular fibrillation. Procainamide suits a stable patient with pre-excited atrial fibrillation, not one who is hypotensive and confused. Unsynchronized shocks are for pulseless rhythms.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

### arrhythmia-40: Cramps and skipped beats in a student

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 19-year-old woman presents to the emergency department with 2 days of palpitations, muscle weakness and cramps. She is a university student and has lost 9 kg over 4 months. When asked privately, she reports making herself vomit several times a day. She takes no medications. She is thin, with swelling of both parotid glands and calluses on the backs of her fingers. Her ECG shows sinus rhythm at 96 with frequent premature ventricular beats, flattened T waves, prominent U waves in V2 and V3 and a long QU interval. Potassium is 2.1 mmol/L, magnesium 0.52 mmol/L and bicarbonate 36 mmol/L.

- Temperature: 36.2°C oral
- Pulse: 96/minute
- Resp.: 16/minute
- BP: 98/60 mmHg
- O2 sat: 99% on room air
- Weight: 44 kg

#### Q1
**Which of the following ECG findings is most specific for her electrolyte disorder?**

- A. Flattened T waves
- B. Frequent ventricular ectopy
- C. Prominent U waves  **(key)**
- D. Short PR interval
- E. Sinus tachycardia

*Explanation:* Prominent U waves, here in V2 and V3 with a long QU interval, are the most characteristic ECG sign of hypokalemia, and her potassium is 2.1 mmol/L. Flattened T waves and ventricular ectopy also occur with low potassium but have many other causes. Her rate of 96 is not a tachycardia, and a short PR interval is not a feature of hypokalemia.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Unwin RJ, Luft FC, Shirley DG. Pathophysiology and management of hypokalemia: a clinical perspective. Nat Rev Nephrol. 2011.

#### Q2
**Which of the following is the most likely cause of her metabolic findings?**

- A. Diuretic misuse
- B. Laxative misuse
- C. Primary hyperaldosteronism
- D. Renal tubular acidosis
- E. Self-induced vomiting  **(key)**

*Explanation:* Repeated vomiting loses gastric acid and causes a metabolic alkalosis, seen in her bicarbonate of 36 mmol/L, with renal potassium wasting that has lowered her potassium to 2.1 mmol/L. Her parotid swelling and knuckle calluses support it. Laxative misuse tends to cause a metabolic acidosis, and renal tubular acidosis lowers bicarbonate. Diuretic misuse can mimic this pattern, but she takes no medications and describes vomiting. Hyperaldosteronism raises blood pressure, and hers is 98/60 mmHg.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Unwin RJ, Luft FC, Shirley DG. Pathophysiology and management of hypokalemia: a clinical perspective. Nat Rev Nephrol. 2011.

#### Q3
**Which of the following should be given to correct her potassium?**

Select 2.

- A. calcium gluconate IV
- B. insulin with dextrose IV
- C. magnesium sulfate IV  **(key)**
- D. potassium chloride IV  **(key)**
- E. salbutamol by nebulizer
- F. sodium bicarbonate IV
- G. thiamine IV

*Explanation:* Potassium chloride replaces both the potassium and the chloride lost with vomiting, and IV replacement suits a level of 2.1 mmol/L with ventricular ectopy. Her magnesium of 0.52 mmol/L drives ongoing renal potassium loss, so potassium will not correct until magnesium is replaced too. Insulin with dextrose and salbutamol shift potassium into cells and would lower it further. Sodium bicarbonate worsens her alkalosis, and calcium and thiamine do not correct potassium.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Unwin RJ, Luft FC, Shirley DG. Pathophysiology and management of hypokalemia: a clinical perspective. Nat Rev Nephrol. 2011.

### arrhythmia-41: Sweating during feeds

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 3-week-old girl is brought to the emergency department by her parents because she tires and sweats during feeds. She was born at 38 weeks after an uncomplicated delivery. Her mother has systemic lupus erythematosus and had little prenatal care. The infant is pink and afebrile, with a capillary refill of 2 seconds and a liver edge 3 cm below the costal margin. Her ECG shows regular P waves at 140 and regular narrow QRS complexes at 55, with no consistent relationship between them.

- Temperature: 36.8°C rectal
- Pulse: 55/minute
- Resp.: 52/minute
- BP: 70/40 mmHg
- O2 sat: 96% on room air
- Weight: 3.6 kg

#### Q1
**Which of the following best describes the rhythm on her ECG?**

- A. Blocked premature atrial beats
- B. Mobitz type I second-degree AV block
- C. Mobitz type II second-degree AV block
- D. Sinus node dysfunction
- E. Third-degree AV block  **(key)**

*Explanation:* Atrial and ventricular complexes that each march at their own regular rates, 140 and 55, with no consistent relationship define third-degree AV block with a narrow junctional escape. Mobitz type I and type II conduct some P waves in a fixed relationship. Sinus node dysfunction would slow the P wave rate, but her atrial rate of 140 is normal for her age. Blocked premature atrial beats arrive early rather than at a regular rate.

*Key feature:* Arrhythmia 3. Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks.

*Source:* Shah MJ, et al. 2021 PACES expert consensus statement on the indications and management of cardiovascular implantable electronic devices in pediatric patients. Heart Rhythm. 2021.

#### Q2
**Which of the following is the most likely cause of her heart block?**

- A. Maternal anti-Ro antibodies  **(key)**
- B. Maternal hypothyroidism
- C. Neonatal hyperkalemia
- D. Neonatal sepsis
- E. Viral myocarditis

*Explanation:* Maternal anti-Ro (SSA) antibodies that cross the placenta are the most common cause of isolated congenital complete heart block, and her mother has lupus with little prenatal screening. Viral myocarditis can cause heart block but usually in a febrile, unwell infant. She is afebrile, pink and well perfused after an uncomplicated birth, which makes sepsis and hyperkalemia unlikely. Maternal hypothyroidism does not cause fetal heart block.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Shah MJ, et al. 2021 PACES expert consensus statement on the indications and management of cardiovascular implantable electronic devices in pediatric patients. Heart Rhythm. 2021.

#### Q3
**Which of the following is the most appropriate management for her?**

- A. Admission for pacemaker assessment  **(key)**
- B. dexamethasone 0.1 mg/kg IV
- C. Discharge with a Holter monitor
- D. Discharge with cardiology in 1 week
- E. Transcutaneous pacing now

*Explanation:* Her rate of 55 is above the 50/minute threshold for pacing an asymptomatic infant, but sweating during feeds and a large liver show symptomatic bradycardia with heart failure, which is itself an indication for a permanent pacemaker, so she needs admission and urgent pediatric cardiology assessment. She is pink with a capillary refill of 2 seconds, so emergency transcutaneous pacing is not needed now, though pads should be ready. Discharge with a monitor or a clinic visit leaves an infant in heart failure unprotected. Dexamethasone is tried before birth, not after.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Shah MJ, et al. 2021 PACES expert consensus statement on the indications and management of cardiovascular implantable electronic devices in pediatric patients. Heart Rhythm. 2021.

### arrhythmia-42: A thud from the living room

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 68-year-old man presents to the emergency department after fainting while seated watching television. His wife heard a thud and found him on the floor. He was unresponsive for about 30 seconds and then woke up oriented. He had a few seconds of palpitations before he fainted. He had an anterior myocardial infarction 5 years ago, and his last echocardiogram showed an ejection fraction of 30%. He takes ASA, bisoprolol, sacubitril-valsartan and rosuvastatin. He has a small occipital laceration and his examination is otherwise normal. His ECG shows sinus rhythm at 62, Q waves in V1 to V4, QRS 110 ms and QTc 450 ms. His troponin is at his usual baseline.

- Pulse: 62/minute
- Resp.: 16/minute
- BP: 112/70 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following is the most likely cause of his syncope?**

- A. Carotid sinus hypersensitivity
- B. Generalized seizure
- C. Orthostatic hypotension
- D. Vasovagal syncope
- E. Ventricular tachycardia  **(key)**

*Explanation:* Sudden syncope while seated, preceded by a few seconds of palpitations, in a man with a prior anterior infarction and an ejection fraction of 30% points to scar-related ventricular tachycardia. Orthostatic syncope follows standing up, and vasovagal syncope usually follows a trigger with a longer prodrome. He woke oriented within 30 seconds, which argues against a seizure. Carotid sinus hypersensitivity is a reflex cause that does not explain palpitations before the faint in a man with a scarred ventricle.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

#### Q2
**Which of the following features in his case are high-risk for an arrhythmic cause of syncope?**

Select 3.

- A. Ejection fraction of 30%  **(key)**
- B. Fainting in the evening
- C. Occipital laceration from the fall
- D. Oriented on waking
- E. Palpitations just before fainting  **(key)**
- F. Prior myocardial infarction  **(key)**
- G. QTc interval of 450 ms
- H. Sinus rate of 62/minute

*Explanation:* Known structural heart disease, a prior anterior infarction with an ejection fraction of 30%, and palpitations immediately before syncope are high-risk features for an arrhythmic cause. An injury from the fall reflects the lack of warning but does not itself predict an arrhythmia. Waking oriented, a sinus rate of 62, a QTc of 450 ms and fainting in the evening do not raise his risk.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

#### Q3
**Which of the following is the most appropriate next step for him?**

- A. Discharge with a 14-day patch monitor
- B. Discharge with outpatient echocardiogram
- C. Head CT and discharge if normal
- D. Inpatient monitoring and EP assessment  **(key)**
- E. Outpatient tilt table testing

*Explanation:* Suspected ventricular tachycardia in a patient with an ejection fraction of 30% carries a high short-term risk of sudden death, so he needs inpatient monitoring and electrophysiology assessment, including consideration of an ICD. A patch monitor or an outpatient echocardiogram leaves him unprotected while waiting. A head CT addresses the laceration but not the cause of the faint. Tilt testing investigates reflex syncope, which his history does not suggest.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

### arrhythmia-43: Palpitations since yesterday morning

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 74-year-old man presents to the emergency department with 30 hours of palpitations and mild exertional dyspnea. He has paroxysmal atrial fibrillation, hypertension and type 2 diabetes. He takes apixaban 5 mg twice daily, metformin and ramipril. He uses a pill organizer and says he has missed no doses in the past 2 months, which his pharmacy records confirm. He has no chest pain. His lungs are clear and he has no edema. His ECG shows atrial fibrillation at 128 with no ischemic changes. Creatinine is 88 umol/L.

- Pulse: 128/minute irregular
- Resp.: 18/minute
- BP: 138/82 mmHg
- O2 sat: 96% on room air
- Weight: 84 kg

#### Q1
**Which of the following features makes cardioversion in the emergency department safe for him?**

- A. Age under 75 years
- B. Clear lungs and no edema
- C. Onset under 48 hours ago
- D. Uninterrupted apixaban for 3 weeks  **(key)**
- E. No ischemic changes on the ECG

*Explanation:* He has taken apixaban without missed doses for well over 3 weeks, which makes cardioversion safe whatever the duration of his atrial fibrillation. An onset of 30 hours alone is not enough, because the CAEP checklist allows cardioversion between 12 and 48 hours only with fewer than 2 CHADS-65 criteria, and he has 3 (age 74, hypertension and diabetes). His age, clear lungs and lack of ischemic changes do not address his stroke risk.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

#### Q2
**Which of the following is an appropriate initial biphasic energy for his synchronized cardioversion?**

- A. 50 J
- B. 70 J
- C. 100 J
- D. 200 J  **(key)**
- E. 360 J

*Explanation:* The CAEP checklist advises starting synchronized cardioversion for atrial fibrillation at 150 to 200 J on a biphasic device, so 200 J is appropriate, and it warns against low starting energies, which fail more often and lead to extra shocks. Starting at 50, 70 or 100 J is the older low-energy approach. A setting of 360 J is a monophasic maximum rather than a biphasic starting dose.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

#### Q3
**Which of the following is the most appropriate plan for his apixaban after cardioversion?**

- A. Continue apixaban for 4 weeks then stop
- B. Continue apixaban 5 mg twice daily  **(key)**
- C. Reduce apixaban to 2.5 mg twice daily
- D. Stop apixaban once in sinus rhythm
- E. Switch to ASA 81 mg daily

*Explanation:* He meets 3 CHADS-65 criteria, so he needs long-term anticoagulation whether or not he stays in sinus rhythm. He meets none of the apixaban dose reduction criteria (age 80 or older, weight 60 kg or less, creatinine 133 umol/L or more), so he stays on 5 mg twice daily. Stopping after 4 weeks or once in sinus rhythm leaves his stroke risk untreated, and ASA is not an effective substitute.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/

### arrhythmia-44: Palpitations at 28 weeks

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 31-year-old woman who is 28 weeks pregnant presents to the emergency department with 1 hour of sudden rapid palpitations. This is her fourth episode during this pregnancy, and the first three were stopped with vagal manoeuvres or adenosine in the emergency department. She has no other medical history and takes prenatal vitamins. She is alert, with no chest pain. Her ECG shows a regular narrow complex tachycardia at 188 with no visible P waves. A resting ECG from her last visit showed sinus rhythm with no pre-excitation. The fetal heart rate is 145.

- Pulse: 188/minute regular
- Resp.: 18/minute
- BP: 112/68 mmHg
- O2 sat: 99% on room air

#### Q1
*Update:* A modified Valsalva manoeuvre, done with her tilted to the left, does not convert the rhythm.

**Which of the following is the most appropriate next treatment?**

- A. adenosine 6 mg IV rapid push  **(key)**
- B. amiodarone 150 mg IV over 10 minutes
- C. diltiazem 20 mg IV over 2 minutes
- D. procainamide 1 g IV over 60 minutes
- E. Synchronized cardioversion at 100 J

*Explanation:* After a failed vagal manoeuvre, adenosine is the first drug for SVT in pregnancy, it has worked for her before, and its very short half-life limits fetal exposure. Amiodarone is avoided in pregnancy because of fetal thyroid toxicity. Diltiazem is not generally recommended in pregnancy because it was teratogenic in animal studies, and an IV beta-1 selective blocker is the next drug if adenosine fails. She is alert with a BP of 112/68 mmHg, so cardioversion is not needed, and procainamide is not a first drug for AV nodal dependent SVT.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q2
*Update:* Adenosine converts her to sinus rhythm. She asks about preventing further episodes before delivery.

**Which of the following is the most appropriate medication to prevent further episodes?**

- A. amiodarone 200 mg PO daily
- B. atenolol 50 mg PO daily
- C. flecainide 100 mg PO twice daily
- D. metoprolol 25 mg PO twice daily  **(key)**
- E. sotalol 80 mg PO twice daily

*Explanation:* Four episodes in one pregnancy justify prevention, and a beta-1 selective blocker such as metoprolol is the preferred first choice when the resting ECG shows no pre-excitation. Atenolol is the exception among beta-1 selective blockers because it is linked to fetal growth restriction. Amiodarone is avoided because of fetal thyroid toxicity. Flecainide is reserved for pre-excitation or failure of first-line drugs, and sotalol is not a first choice.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

#### Q3
**Which of the following statements about electrical cardioversion in her pregnancy is most accurate?**

- A. Avoid until after delivery
- B. Requires delivery of the fetus first
- C. Safe at any stage of pregnancy  **(key)**
- D. Safe only in the first trimester
- E. Use half the usual energy

*Explanation:* Electrical cardioversion is safe in all stages of pregnancy and is the treatment for any tachycardia that causes hemodynamic instability, because little current reaches the fetus. Delaying it until delivery or limiting it to the first trimester leaves an unstable mother untreated. Energy settings are the same as outside pregnancy. Fetal monitoring is advised around the shock, but delivery is not required first.

*Key feature:* Arrhythmia 6. Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

### arrhythmia-45: Palpitations with chest tightness

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old woman is brought to the emergency department by ambulance with 3 hours of rapid palpitations and chest tightness. She has had brief episodes of palpitations for years that stopped on their own. She has hypertension treated with hydrochlorothiazide. She is pale, diaphoretic and slow to answer questions. She has crackles at both lung bases. Her ECG shows a regular narrow complex tachycardia at 210 with no visible P waves and 2 mm ST depression in V4 to V6.

- Pulse: 210/minute regular
- Resp.: 26/minute
- BP: 74/46 mmHg
- O2 sat: 91% on room air

#### Q1
**Which of the following is the most appropriate immediate treatment?**

- A. amiodarone 150 mg IV over 10 minutes
- B. diltiazem 20 mg IV over 2 minutes
- C. Modified Valsalva manoeuvre
- D. Synchronized cardioversion  **(key)**
- E. Unsynchronized defibrillation

*Explanation:* SVT with a BP of 74/46 mmHg, slowed mentation, pulmonary crackles and ischemic ST depression is unstable and needs immediate synchronized cardioversion, with sedation only if it causes no delay. Diltiazem would deepen her hypotension. Amiodarone and a vagal manoeuvre take time and often fail. Unsynchronized shocks can land on the T wave and cause ventricular fibrillation, so they are kept for pulseless rhythms.

*Key feature:* Arrhythmia 4. Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

#### Q2
*Update:* After one shock she is in sinus rhythm at 92 with a BP of 118/70 mmHg. Her crackles are clearing and the ST depression has resolved.

**Which of the following best explains her ST depression during the tachycardia?**

- A. Acute coronary plaque rupture
- B. Coronary vasospasm
- C. Hypokalemia from her diuretic
- D. Pulmonary embolism
- E. Rate-related demand ischemia  **(key)**

*Explanation:* ST depression at a rate of 210 that resolves once sinus rhythm returns is most often rate-related demand ischemia rather than an acute coronary occlusion. Plaque rupture and vasospasm would not reliably clear the moment the rate slowed. Hypokalemia does not make ST depression appear and disappear with the rhythm. Pulmonary embolism would not explain ST depression that clears as soon as sinus rhythm returns.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376

#### Q3
**Which of the following findings on her sinus rhythm ECG would most change her long-term management?**

- A. Delta wave and short PR  **(key)**
- B. Early repolarization
- C. Left axis deviation
- D. Nonspecific T wave flattening
- E. PR interval of 180 ms

*Explanation:* A short PR interval with a delta wave would reveal an accessory pathway, which changes her risk of dangerous rhythms such as pre-excited atrial fibrillation and makes catheter ablation the preferred long-term treatment. A PR interval of 180 ms is normal. Early repolarization, left axis deviation and nonspecific T wave flattening do not change how her recurrent SVT is managed.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.

### arrhythmia-46: Faint during a blood draw

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 23-year-old woman presents to the emergency department after fainting at a walk-in clinic while having blood drawn. She felt warm, nauseated and light-headed and her vision greyed out before she slumped in the chair. She was unresponsive for about 10 seconds and fully alert within a minute. She has fainted twice before, once at a funeral and once in a hot crowded church. She takes an oral contraceptive. No relative has died suddenly. Her examination is normal. Her ECG shows sinus rhythm at 74, PR 160 ms, QRS 88 ms, a normal axis and QTc 430 ms. Her troponin is below the 99th percentile.

- Pulse: 74/minute
- Resp.: 14/minute
- BP: 112/70 mmHg
- O2 sat: 99% on room air

#### Q1
**Which of the following is her Canadian Syncope Risk Score once vasovagal syncope is diagnosed?**

- A. -3  **(key)**
- B. -2
- C. -1
- D. 0
- E. 1

*Explanation:* She scores minus 1 for a predisposition to vasovagal symptoms (a blood draw, a funeral and a hot crowded church) and minus 2 for an emergency department diagnosis of vasovagal syncope, for a total of minus 3. She has no heart disease, her systolic pressure is 112 mmHg, her troponin is normal, and her QRS axis, QRS duration of 88 ms and QTc of 430 ms add no points. A score of minus 2 omits the vasovagal predisposition point, minus 1 omits the 2 points for the vasovagal diagnosis, and 0 or 1 wrongly adds points for normal findings.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Thiruganasambandamoorthy V, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ. 2016. https://www.cmaj.ca/content/188/12/e289

#### Q2
**Which of the following is the most appropriate disposition for her?**

- A. Admission to a telemetry bed
- B. Discharge with a 14-day patch monitor
- C. Discharge with education on triggers  **(key)**
- D. Echocardiogram before discharge
- E. Tilt table testing before discharge

*Explanation:* A score of minus 3 places her at very low risk of a serious outcome within 30 days, and her typical triggers, prodrome and normal ECG support reflex syncope, so she can go home with education on triggers and physical counter-pressure manoeuvres. Admission and ambulatory monitoring add cost without benefit at this risk. An echocardiogram is not needed with a normal examination and ECG. Tilt testing is not required when the history already makes the diagnosis.

*Key feature:* Arrhythmia 1. Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

#### Q3
**Which of the following ECG findings would have made discharge unsafe without cardiology assessment?**

Select 3.

- A. Coved ST elevation in V1 and V2  **(key)**
- B. Delta wave with a short PR  **(key)**
- C. Early repolarization in V4 to V6
- D. PR interval of 180 ms
- E. QTc of 510 ms  **(key)**
- F. Sinus arrhythmia
- G. Sinus rate of 58/minute

*Explanation:* Coved ST elevation in V1 and V2 (a type 1 Brugada pattern), a short PR interval with a delta wave (pre-excitation) and a QTc of 510 ms (long QT) each signal a risk of sudden arrhythmic death and would need cardiology assessment before discharge. Sinus arrhythmia, a sinus rate of 58/minute, a PR interval of 180 ms and early repolarization in the lateral leads are common normal findings in young adults. Her own ECG shows none of the three warning patterns.

*Key feature:* Arrhythmia 2. Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves.

*Source:* Sandhu RK, et al. Canadian Cardiovascular Society Clinical Practice Update on the Assessment and Management of Syncope. Can J Cardiol. 2020.

### arrhythmia-47: Struck by a puck

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 13-year-old boy is brought to the emergency department by ambulance after collapsing during a hockey game in Kingston. A slapshot struck him in the left chest just before he collapsed. The arena AED advised a shock for ventricular fibrillation, and after one shock and 3 minutes of CPR he had a pulse. On arrival he is breathing, opens his eyes to voice and follows commands. He has a bruise over the left chest and equal breath sounds. His ECG shows sinus rhythm at 104 with a normal QTc and no ST changes.

- Temperature: 36.9°C oral
- Pulse: 104/minute
- Resp.: 20/minute
- BP: 112/66 mmHg
- O2 sat: 98% on 2 L/minute by nasal prongs
- Weight: 48 kg

#### Q1
**Which of the following is the most likely cause of his cardiac arrest?**

- A. Cardiac contusion
- B. Commotio cordis  **(key)**
- C. Congenital long QT syndrome
- D. Hypertrophic cardiomyopathy
- E. Tension pneumothorax

*Explanation:* Ventricular fibrillation immediately after a blunt, low-energy blow to the left chest from a puck is commotio cordis, caused by an impact timed to the vulnerable upslope of the T wave. His normal QTc argues against long QT syndrome. Hypertrophic cardiomyopathy still needs an echocardiogram, but the timing with the blow makes it less likely. Cardiac contusion needs higher-energy trauma, and tension pneumothorax would not respond to a shock and does not fit his equal breath sounds.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Maron BJ, Estes NAM. Commotio cordis. N Engl J Med. 2010.

#### Q2
**Which of the following would make deliberate temperature control indicated after his return of circulation?**

- A. Age above 12 years
- B. CPR lasting over 2 minutes
- C. Failure to follow commands  **(key)**
- D. Initial shockable rhythm
- E. Raised troponin level

*Explanation:* Deliberate temperature control is recommended for patients who remain comatose, unable to follow commands, after return of spontaneous circulation, because coma marks the brain injury it aims to limit. He opens his eyes to voice and follows commands, so he does not need it, though fever should still be avoided. A shockable first rhythm, CPR of 3 minutes, a raised troponin or his age do not by themselves call for temperature control.

*Key feature:* Arrhythmia 8. After return of spontaneous circulation, start targeted temperature management when indicated.

*Source:* American Heart Association and American Academy of Pediatrics. Part 8. Pediatric advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368

#### Q3
**Which of the following investigations is most important before he returns to hockey?**

- A. Chest radiograph
- B. Echocardiography  **(key)**
- C. Electroencephalogram
- D. Exercise stress test
- E. Serum drug screen

*Explanation:* Commotio cordis happens in structurally normal hearts, so an echocardiogram is needed to exclude hypertrophic cardiomyopathy or another structural cause before the diagnosis is accepted. An electroencephalogram is not needed after a documented cardiac arrest from ventricular fibrillation. An exercise test adds little until structural disease is excluded. A drug screen and a chest radiograph do not show whether his heart is structurally normal.

*Key feature:* Arrhythmia 5. For any identified arrhythmia, consider which underlying causes may have triggered it.

*Source:* Maron BJ, Estes NAM. Commotio cordis. N Engl J Med. 2010.
