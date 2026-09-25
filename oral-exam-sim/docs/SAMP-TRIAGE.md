# SAMP triage: the 975 new SAMPs

For Arjan. Every new SAMP (s19 to s53) was read again, one verdict each, so you sign off a sorted list, not a wall of 975.

## The verdicts

| Verdict | Count | What it means |
|---|---|---|
| READY | 641 | Correct, clear and sourced. Could go in front of a candidate now. |
| FIX | 39 | An editorial or consistency fix that needs no clinical judgement. The exact fix is listed. |
| HOLD | 43 | Needs your clinical judgement before use. |
| REJECT | 252 | Should not ship. Almost all are near copies of another SAMP. |

## How this was done

- Seven triagers read every SAMP in `docs/physician-review/`, independent of the earlier reviews. Each verdict records what was actually checked, such as recomputed scores and doses, guidelines opened, and a search of the whole bank for duplicates. The files are `docs/triage/sNN.json`.
- A first quick pass came back about 95 percent READY at two minutes a batch. It was discarded and redone with a stricter brief.
- Duplicates are judged by scenario, not wording. A new SAMP that copies a signed-off SAMP (s01 to s18) is rejected. When two new SAMPs copy each other, the later batch is rejected and the earlier one is kept.
- Where two triagers rejected both copies of a pair, the earlier copy was kept and moved to HOLD, so no teaching point leaves the bank by accident. That applies to chest-pain-24, chest-pain-31, chest-pain-39, headache-45.

## How far to trust READY

An independent auditor, blind to the triage verdicts, re-read 40 SAMPs drawn at random from the READY list.

| Grade | Count |
|---|---|
| Clean | 26 |
| Minor, editorial only | 6 |
| Defect | 8 |

- **Correctness:** none of the 40 had a wrong key or wrong arithmetic. On correctness, READY holds up.
- **Duplication:** all 8 defects were near copies of another SAMP by scenario, 5 of them of signed-off SAMPs. The per-batch triage missed about one READY in five this way.
- **What was done about it:** a bank-wide similarity sweep compared every SAMP with every other one. 1,990 candidate pairs were judged by hand, then the 543 highest-scoring pairs not flagged were judged again by a second adjudicator. The first pass caught 5 of the 7 known duplicates in its sample. The second pass caught the one missed pair it was given. Together they confirmed 193 duplicate pairs. The later or unsigned copy of each is rejected and rebuilt. 8 borderline calls are HOLD for you.
- **What may remain:** pairs scoring below the sweep threshold were not judged, and one known pair in that range was missed. Expect a small number of duplicates to remain. They are content repeats, not wrong keys.

## What rejection does to the bank

Removing 252 rejects leaves 1248 SAMPs, below the launch gate of 1,500. Each reject is being replaced by a new SAMP on the same priority topic, written against the whole bank so it is not a copy, and reviewed like the rest.

## Status after the rebuilds (25 September 2026)

- **All 252 rejects are rebuilt.** Each keeps its id, topic, question count and key features. Each has a new story and new keyed decisions. Each had an independent review, and every item changed in review had a second check.
- **Second duplicate sweep.** Every pair involving a rebuilt SAMP was judged again, 679 pairs in all. 33 were still duplicates, covering 28 SAMPs. 23 of the 28 had landed on a signed-off story again. All 28 were rebuilt a second time, reviewed, and given a final check. The pairs are under "sweep2" in `docs/triage/duplicates.json`.
- **Reviewers kept finding defects in rebuilds.** In the second round, every reviewed set needed fixes. Four rebuilds had copied a SAMP or a keyed decision again: asthma-copd-42, loc-45, and one question each in asthma-copd-41 and arrhythmia-27. Treat a rebuilt SAMP as needing the same read as any other, not as pre-cleared.
- **FIX items** were applied by the rebuild writers where the fix held on inspection. Each writer report in `docs/reviews/samps-replace-*.md` lists what was applied and what was not.
- **HOLD items** are unchanged and still need your judgement.
- **The reject list below is historical.** Every id on it now holds a new SAMP, still `reviewed: false`.
- **What may remain:** pairs below the sweep threshold were not judged. Some repeats of a single teaching point across topics remain and are flagged in the review reports. None found so far is a wrong key.

## Reject

### s19 Abdominal pain

- **abdominal-pain-16**: Near copy of cva-09, found by the bank-wide duplicate sweep. Both are men who develop sudden tearing pain to the back while lifting with a leg or neurologic deficit and the key teaching in both is recognizing aortic dissection with a blood pressure differential and starting esmolol while arranging CT angiography.
- **abdominal-pain-20**: Near copy of abdominal-pain-13, found by the bank-wide duplicate sweep. Both are severe epigastric pain radiating to the back with vomiting and a high lipase, and both key right upper quadrant ultrasound, Ringer's lactate and holding CT unless the patient fails to improve.
- **abdominal-pain-22**: Near copy of abdominal-pain-07, found by the bank-wide duplicate sweep. Both are a woman with dementia sent from long term care as a urinary infection because of a positive dipstick who has a surgical abdomen, and both key that the urine finding may be asymptomatic bacteriuria.
- **abdominal-pain-23**: Near copy of abdominal-pain-02, found by the bank-wide duplicate sweep. Both are patients with atrial fibrillation who recently stopped their anticoagulant and now have abdominal pain from bowel ischemia and the key teaching in both is CT angiography with an urgent vascular surgery consult.
- **abdominal-pain-27**: Near copy of shock-10, found by the bank-wide duplicate sweep. Both are a woman with vomiting, abdominal pain and hypotension with low sodium, high potassium and low glucose from adrenal crisis, and both key hydrocortisone 100 mg IV with dextrose and saline.
- **abdominal-pain-32**: Near copy of abdominal-pain-03, found by the bank-wide duplicate sweep. Both key on the teaching point that pyuria from an inflamed appendix lying near the ureter should not be mistaken for a urinary tract infection in a patient with right lower quadrant pain.
- **abdominal-pain-34**: Near copy of infectious-diseases-15, found by the bank-wide duplicate sweep. Both are young women with pelvic inflammatory disease diagnosed by mucopurulent discharge and cervical motion tenderness and treated with ceftriaxone and doxycycline
- **abdominal-pain-35**: Near copy of first-trimester-bleeding-13, found by the bank-wide duplicate sweep. Both are a woman whose contraception led to a missed pregnancy and a misattributed complaint, with an hCG near 2600 to 2900 IU/L, an empty uterus, a left adnexal mass and free fluid, and both key urgent gynecology consultation.
- **abdominal-pain-36**: Near copy of pre-eclampsia-02, found by the bank-wide duplicate sweep. Both are pregnant women at 33 weeks with epigastric pain from HELLP syndrome treated with magnesium sulfate
- **abdominal-pain-44**: Near copy of abdominal-pain-01, found by the bank-wide duplicate sweep. Both are an older smoker with sudden flank or back pain and syncope found to have a ruptured or leaking abdominal aortic aneurysm managed with bedside aortic ultrasound, an urgent call to vascular surgery and permissive hypotension.
- **abdominal-pain-46**: Near copy of abdominal-pain-05, found by the bank-wide duplicate sweep. Both are a patient with type 2 diabetes and epigastric pain with nausea that an antacid slightly relieved which proves to be a myocardial infarction, and both key serial ECG and troponin with ASA 160 mg chewed.

### s20 Abuse (domestic)

- **abuse-domestic-18**: Near copy of abuse-domestic-06, found by the bank-wide duplicate sweep. Both are young children brought in for a minor complaint after a trivial reported fall who turn out to have a bruise on the ear and an occult internal injury prompting a same day report to child protection.

### s21 Airway management

- **airway-25**: Near copy of sob-13, found by the bank-wide duplicate sweep. Both are a patient with ascending Guillain-Barre weakness after a diarrheal illness whose key teaching point is recognizing impending neuromuscular respiratory failure and intubating early before hypoxemia develops.
- **airway-27**: Near copy of shock-09, found by the bank-wide duplicate sweep. Both are women who develop a massive or submassive pulmonary embolism with right ventricular strain shortly after a total knee replacement and are treated with alteplase and a norepinephrine infusion.
- **airway-28**: Near copy of pulmonary-edema-14, found by the bank-wide duplicate sweep. Both are elderly men with known severe critical aortic stenosis awaiting valve replacement who decompensate and need hemodynamic management that maintains systemic vascular resistance and avoids vasodilation.
- **airway-31**: Near copy of sob-15, found by the bank-wide duplicate sweep. Both are severe anaphylaxis cases with upper airway involvement needing early intubation with surgical airway backup
- **airway-45**: Near copy of airway-01, found by the bank-wide duplicate sweep. Both are an obese overdose patient who vomits and fails three intubation attempts with video laryngoscope and bougie, and both key declaring the failed airway and placing a second generation supraglottic airway.
- **airway-46**: Near copy of multiple-trauma-08, found by the bank-wide duplicate sweep. Both are intubated trauma patients with rib fractures whose peak airway pressure rises and the key teaching in both is chest decompression for a suspected pneumothorax after hand ventilating to confirm.
- **airway-47**: Near copy of shock-15, found by the bank-wide duplicate sweep. Both are a woman in her late fifties with metastatic lung cancer, raised neck veins and quiet heart sounds from tamponade, and both key urgent pericardiocentesis.

### s22 Analgesia/sedation

- **analgesia-sedation-33**: Near copy of analgesia-sedation-12, found by the bank-wide duplicate sweep. Both are patients who become hard to rouse after receiving an opioid together with a benzodiazepine and the key teaching in both is titrated naloxone with continuous monitoring since the benzodiazepine effect is not reversed.
- **analgesia-sedation-42**: Near copy of lacerations-05, found by the bank-wide duplicate sweep. Found by the blind audit.

### s23 Anaphylaxis

- **anaphylaxis-16**: Near copy of anaphylaxis-01, found by the bank-wide duplicate sweep. Both are a healthy man with anaphylaxis to a wasp or yellow jacket sting who stays hypotensive after the first dose, and both key epinephrine 0.5 mg IM, a crystalloid bolus, a repeat dose and allergist referral for venom testing.
- **anaphylaxis-17**: Near copy of anaphylaxis-12, found by the bank-wide duplicate sweep. Both are pneumonia patients who develop anaphylaxis to their antibiotic treated by stopping the drug and giving epinephrine
- **anaphylaxis-18**: Near copy of anaphylaxis-03, found by the bank-wide duplicate sweep. Both are young children with a first or second exposure food reaction that progresses from hives and vomiting to lethargy and are discharged with two 0.15 mg epinephrine autoinjectors.
- **anaphylaxis-25**: Near copy of asthma-copd-13, found by the bank-wide duplicate sweep. Both are anaphylaxis patients whose wheeze and hypotension persist after repeated IM epinephrine so they need an epinephrine infusion.
- **anaphylaxis-27**: Near copy of anaphylaxis-19, found by the bank-wide duplicate sweep. Both are patients whose anaphylaxis has resolved and who want to leave early, with the key teaching of extended observation and allergist referral
- **anaphylaxis-40**: Near copy of anaphylaxis-10, found by the bank-wide duplicate sweep. Both are a school age child with asthma who wheezes after a seed or nut food and has had epinephrine 0.15 mg, and both key salbutamol, two autoinjectors and a school anaphylaxis plan.
- **anaphylaxis-42**: Near copy of anaphylaxis-32, found by the bank-wide duplicate sweep. Both involve a granola bar containing a nut allergen and teach epinephrine dosing and carrying an autoinjector

### s24 Arrhythmia

- **arrhythmia-17**: Near copy of arrhythmia-01, found by the bank-wide duplicate sweep. Both are patients who faint without warning while seated and are found to have conduction disease that progresses to symptomatic high degree AV block needing atropine, catecholamines and transcutaneous pacing.
- **arrhythmia-27**: Near copy of arrhythmia-11, found by the bank-wide duplicate sweep. Both are a rural STEMI treated with tenecteplase that then shows a reperfusion ventricular rhythm, and both key watching on the monitor with no antiarrhythmic drug.
- **arrhythmia-28**: Near copy of arrhythmia-11, found by the bank-wide duplicate sweep. Both are rural thrombolysis patients who develop a reperfusion arrhythmia followed by symptomatic bradycardia treated with atropine
- **arrhythmia-31**: Near copy of arrhythmia-29, found by the bank-wide duplicate sweep. Both are patients resuscitated from a cardiac arrest caused by hypoxemia and the key teaching in both is that targeted temperature management is still indicated with careful fever prevention.
- **arrhythmia-32**: Near copy of seizures-07, found by the bank-wide duplicate sweep. Both are teenage girls whose brief collapse is triggered by a loud noise and turn out to have congenital long QT syndrome treated with nadolol and avoidance of QT prolonging drugs.

### s25 Asthma/COPD

- **asthma-copd-19** (q1, q2): q1 and q2 duplicate arrhythmia-26 in s24: MAT in a COPD flare with SpO2 86%, nearly the same five rhythm options and the same 'treat the exacerbation' key. Without them only two generic questions remain, which repeat NIV and steroid teaching found elsewhere in s25.
- **asthma-copd-26**: Near copy of airway-10, found by the bank-wide duplicate sweep. Both involve a severe asthma patient just intubated and the key teaching in both is recognizing breath stacking from dynamic hyperinflation and disconnecting the circuit to allow full exhalation.
- **asthma-copd-28**: Near copy of asthma-copd-14, found by the bank-wide duplicate sweep. Both are a COPD exacerbation treated in the ED where the patient feels close to baseline and wants to go home, and both key a walking oximetry test before discharge and stepping up maintenance inhalers.
- **asthma-copd-35**: Near copy of asthma-copd-07, found by the bank-wide duplicate sweep. Both are a young working adult with asthma who improves in the ED and wants to leave, and both key peak flow checks before discharge, budesonide formoterol maintenance and reliever and inhaler technique.
- **asthma-copd-36**: Near copy of sob-04, found by the bank-wide duplicate sweep. Both are a severe asthma attack arriving by ambulance, too breathless for a peak flow, who becomes drowsy with a rising pCO2 despite treatment, and both key salbutamol with ipratropium and recognising impending respiratory failure.
- **asthma-copd-38**: Near copy of asthma-copd-08, found by the bank-wide duplicate sweep. Both are a patient with obstructive lung disease and four days of fever, rusty sputum and basal crackles whose key teaching point is a chest radiograph confirming pneumonia treated with antibiotics and a course of prednisone.
- **asthma-copd-41**: Near copy of sob-05, found by the bank-wide duplicate sweep. Both are a COPD exacerbation with purulent sputum and acute hypercapnic acidosis who worsens and becomes hard to rouse after an hour on BiPAP, and both key noninvasive ventilation then intubation.
- **asthma-copd-42**: Near copy of asthma-copd-36, found by the bank-wide duplicate sweep. Both are severe asthma patients who look less alarming on exam while quietly progressing to impending respiratory failure needing magnesium sulfate and preparation to intubate.
- **asthma-copd-43**: Near copy of asthma-copd-07, found by the bank-wide duplicate sweep. Both are a young man with asthma who uses only salbutamol, recovers his peak flow after ED treatment and wants to leave, and both key a prednisone course and an ICS formoterol controller.
- **asthma-copd-45**: Near copy of sob-05, found by the bank-wide duplicate sweep. Both are a COPD patient with acute on chronic hypercapnic respiratory failure whose key teaching point is starting bilevel noninvasive ventilation at an IPAP of 10 and EPAP of 5 cm H2O.

### s26 Burns

- **burns-16**: Near copy of burns-02, found by the bank-wide duplicate sweep. Both are an adult flame burn of the whole anterior trunk and arms, about 27 to 36% TBSA, seen two hours after injury with low urine output hours later, and both key the TBSA, the hourly fluid rate and raising the rate.
- **burns-19**: Near copy of environmental-14, found by the bank-wide duplicate sweep. Both include a toddler who bites an electric cord and gets a grey white oral commissure burn with the same key warning about delayed labial artery bleeding when the eschar separates.
- **burns-21**: Near copy of burns-04, found by the bank-wide duplicate sweep. Both are patients pulled from a smoke filled fire with a lactate of 11 mmol/L from cyanide poisoning treated with hydroxocobalamin
- **burns-24**: Near copy of airway-02, found by the bank-wide duplicate sweep. Both rescue a patient trapped about 10 minutes in a smoke filled bedroom with hoarseness, soot and face and neck burns, and both key early intubation with an uncut tube tied in place.
- **burns-25** (q1, q2, q4): Near copy of signed-off burns-11 in s04. Both are a propane flash burn of the face, neck, chest and arms of about 25 to 30% seen 1 hour after injury with voice change before a long transfer, keyed to intubating now, succinylcholine being safe in the first 24 hours and a urinary catheter before transport. Only the q3 fluid rate is new, and that point is taught four more times in this batch.
- **burns-27**: Near copy of burns-08, found by the bank-wide duplicate sweep. Both are an older diabetic with neuropathy who lives alone and presents two days after a hot water scald with white nonblanching areas and an overdue tetanus, and both key diabetes with neuropathy and full thickness burns needing admission.
- **burns-28**: Near copy of abuse-domestic-19, found by the bank-wide duplicate sweep. Both are toddlers with an inflicted burn and a healing round buttock burn needing a skeletal survey and a child protection report
- **burns-31**: Near copy of burns-07, found by the bank-wide duplicate sweep. Both are an intubated major burn with circumferential full thickness eschar and steadily rising peak airway pressures, and both key escharotomy to restore ventilation.
- **burns-32**: Near copy of burns-17, found by the bank-wide duplicate sweep. Both are a toddler who pulled a hot liquid off the counter with blistered scalds over the front of the trunk and arms of about 16% TBSA and IV access an hour later, and both key the hourly paediatric fluid rate.
- **burns-33**: Near copy of burns-16, found by the bank-wide duplicate sweep. Both are a woman whose clothing caught fire at the stove with deep burns over the whole anterior trunk and both arms at 27% TBSA, and both key Ringer's lactate at 2 mL/kg per %TBSA, IV fentanyl and burn centre transfer.

### s27 Cerebrovascular accident (CVA)

- **cva-17**: Near copy of delirium-agitation-10, found by the bank-wide duplicate sweep. Both are older women on an anticoagulant who fall and strike their head then present with confusion from an acute subdural hematoma with midline shift needing anticoagulant reversal and neurosurgery.
- **cva-23**: Near copy of cva-03, found by the bank-wide duplicate sweep. Both are a patient with a cerebellar infarct causing sudden dizziness and truncal ataxia who later deteriorates and the key teaching point is urgent CT angiography and neurosurgical consultation for swelling or herniation.
- **cva-28**: Near copy of loc-09, found by the bank-wide duplicate sweep. Both are older men with atrial fibrillation whose posterior circulation symptoms progress to a falling GCS from a basilar artery occlusion found on CT angiography and treated with thrombectomy.
- **cva-35**: Near copy of headache-07, found by the bank-wide duplicate sweep. Both are postpartum women with worsening headache worse lying flat who then seize and the key teaching in both is recognizing cerebral venous sinus thrombosis.
- **cva-41**: Near copy of cva-10, found by the bank-wide duplicate sweep. Both are patients with a high risk TIA score whose CT angiography finds an 80% internal carotid stenosis needing urgent stroke specialist review and referral for endarterectomy within 14 days.
- **cva-45**: Near copy of cva-42, found by the bank-wide duplicate sweep. Both are a TIA scoring 5 on the ABCD2 score found to be due to atrial fibrillation and the key teaching point is starting a DOAC for the cardioembolic source.

### s28 Chest pain

- **chest-pain-17**: Near copy of chest-pain-01, found by the bank-wide duplicate sweep. Both are sudden maximal pain radiating between the shoulder blades with a normal mediastinum on portable X ray and a type A dissection on CT, and both key CT angiography and that a normal chest X ray does not exclude dissection.
- **chest-pain-18**: Near copy of cva-09, found by the bank-wide duplicate sweep. Both are a hypertensive man with tearing interscapular pain and an arm blood pressure difference while tenecteplase is being prepared, and both key withholding thrombolysis and giving an IV beta blocker for dissection.
- **chest-pain-21** (q1, q2): Near copy of dvt-pe-27 in s33. Both are a rural site with no CT, collapse weeks after surgery, bedside RV dilation with a noncompressible leg vein, no bleeding history, and alteplase 100 mg over 2 hours. Only q3 on UFH is new, and s51 already had to rewrite sob-43 for repeating this case.
- **chest-pain-22** (q1, q3, q4): Near copy of arrhythmia-16 in s24. Both are a teenage boy collapsing while sprinting at basketball, prior exertional chest tightness, an uncle dead suddenly in his thirties, a left sternal border murmur, HCM, murmur manoeuvres and admission with monitoring.
- **chest-pain-29**: Near copy of ischemic-heart-disease-09, found by the bank-wide duplicate sweep. Both are men with a known left bundle branch block and chest pain whose ECG meets Sgarbossa criteria for concordant ST elevation leading to cath lab activation for primary PCI.
- **chest-pain-30**: Near copy of abdominal-pain-29, found by the bank-wide duplicate sweep. Both are older women with dermatomal band pain who turn out to have herpes zoster confirmed by a later vesicular rash and are treated with valacyclovir 1 g three times daily.
- **chest-pain-32**: Near copy of sob-10, found by the bank-wide duplicate sweep. Both test an older patient with pleuritic pain, a Wells score of 0 and a D dimer just above 500, and both key the age adjusted cutoff that rules out PE without imaging.
- **chest-pain-33**: Near copy of dvt-pe-04, found by the bank-wide duplicate sweep. Both are a 58 year old on chemotherapy for metastatic cancer with leg swelling and bilateral segmental PE with a normal RV, and both key the high Wells score, CT pulmonary angiogram and dalteparin.
- **chest-pain-35**: Near copy of airway-47, found by the bank-wide duplicate sweep. Both are women with metastatic lung cancer developing cardiac tamponade diagnosed by bedside ultrasound and treated with pericardiocentesis
- **chest-pain-38**: Near copy of chest-pain-07, found by the bank-wide duplicate sweep. Both patients get symptomatic relief of their chest pain from a treatment aimed at another cause and the key teaching in both is that this relief does not exclude acute coronary syndrome and does not identify the true cause.
- **chest-pain-43**: Near copy of cva-09, found by the bank-wide duplicate sweep. Both are a patient with sudden interscapular or chest pain followed by limb weakness whose key teaching point is that the presentation mimics stroke and a CT angiogram of the aorta is needed before any thrombolysis to catch aortic dissection.
- **chest-pain-45** (q2, q3): Near copy of abdominal-pain-16 in s19. Both are a hypertensive smoker in his sixties with abrupt pain between the shoulder blades and a numb cold left leg, CTA chest to pelvis, a type B dissection from beyond the left subclavian to the left iliac with poor leg flow, and vascular surgery keyed.
- **chest-pain-46** (q1, q3): Near copy of dvt-pe-31 in s33. Both are a 44-year-old man two weeks after lower limb surgery with a swollen leg and hemoptysis, a Wells score of 10 built from the same items, and anticoagulation while waiting for imaging.

### s29 Common fractures/MSK

- **msk-24**: Near copy of abdominal-pain-39, found by the bank-wide duplicate sweep. Both are a young man with left upper quadrant blunt trauma in a rural hospital with no CT or surgeon, a FAST showing splenic free fluid and hypotension after crystalloid, and both key the FAST and urgent transfer to a trauma centre.
- **msk-31**: Near copy of critical-appraisal-15, found by the bank-wide duplicate sweep. Both are seven year old girls with a distal radius buckle fracture managed with a removable splint instead of a cast
- **msk-38**: Near copy of msk-07, found by the bank-wide duplicate sweep. Both present as knee or leg pain with a normal knee but the key teaching in both is examining the hip and getting an MRI of the hip to find an occult fracture causing referred pain.

### s32 Decreased level of consciousness

- **loc-17**: Near copy of delirium-agitation-10, found by the bank-wide duplicate sweep. Both are older women on an anticoagulant who fall and strike their head then become confused from an acute on chronic subdural hematoma with midline shift needing prothrombin complex concentrate and neurosurgery.
- **loc-18**: Near duplicate of s20 abuse-domestic-17, an earlier new batch. Both have an infant brought by the mother's partner with vomiting, a full fontanelle and drowsiness, and both key head CT then skeletal survey and fundoscopy.
- **loc-19**: Near copy of airway-09, found by the bank-wide duplicate sweep. Both are salicylate overdoses with the same mixed metabolic acidosis and respiratory alkalosis picture and the key teaching in both is that a falling pH and rising pCO2 are dangerous and sodium bicarbonate must be given before any attempt at intubation.
- **loc-20**: Near duplicate of signed-off s04 asthma-copd-02. Both have a 71-year-old man with COPD, 3 days of worse dyspnea, a non-rebreather at 15 L/minute, drowsiness, and a VBG with HCO3 34, and both key an 88 to 92% target and NIV.
- **loc-21**: Near copy of cva-01, found by the bank-wide duplicate sweep. Both are diabetic patients whose stroke like presentation is actually hypoglycemia treated with dextrose or glucagon with a residual deficit needing a CT
- **loc-22**: Near duplicate of signed-off s18 tox-14. Both have a toddler exposed to a grandparent's pill organizer with sulfonylurea hypoglycemia. Both key D10 dosing, octreotide 1 mcg/kg and admission for late recurrence.
- **loc-24**: Near duplicate of signed-off s09 environmental-02. Both have an older patient in a heat wave in an upper floor apartment with no air conditioning, on benztropine and hydrochlorothiazide with hot dry skin, and both key cold water immersion.
- **loc-26**: Near duplicate of signed-off s18 tox-03. Both have a young woman with amitriptyline 50 mg, 6 mm pupils, warm dry skin, a QRS near 146 ms and a terminal R in aVR, and both key sodium bicarbonate with physostigmine rejected.
- **loc-27**: Near duplicate of signed-off s18 tox-07. Both have an older woman on lithium 900 mg daily with confusion, coarse tremor, myoclonus, GCS 13 and acute kidney injury. Both key hemodialysis for decreased consciousness, with the same charcoal, furosemide and bowel irrigation distractors.
- **loc-28**: Near copy of ems-11, found by the bank-wide duplicate sweep. Both are children in diabetic ketoacidosis who develop cerebral edema treated with mannitol
- **loc-29**: Near duplicate of signed-off s16 shock-10. Both have adrenal crisis with the same Na 124, K 6.1 and glucose 3.1, a BP near 78/44 and pigmented creases. Both key hydrocortisone 100 mg IV then saline and dextrose.
- **loc-31**: Near duplicate of signed-off s11 headache-07. Both have a postpartum woman 9 to 12 days after vaginal delivery with 4 days of headache, a seizure and drowsiness. Both key CT or MR venography and LMWH despite hemorrhage.
- **loc-32**: Near copy of pediatric-fever-04, found by the bank-wide duplicate sweep. Both are young children with fever and a spreading nonblanching purpuric rash and the key teaching in both is giving antibiotics right away and deferring the lumbar puncture.
- **loc-33**: Near duplicate of signed-off s02 analgesia-sedation-12. Both have an older man with CKD on morphine who is hard to rouse with 2 mm pupils. Both key naloxone 0.04 mg titrated and prolonged cover because metabolites accumulate.
- **loc-38**: Near duplicate of signed-off s04 burns-04. Both have a patient pulled from a smoke-filled home unresponsive with lactate about 11 to 12 and a raised carboxyhemoglobin. Both key hydroxocobalamin 5 g with nitrites and methylene blue rejected.
- **loc-40**: Near duplicate of signed-off s16 shock-14. Both have an older woman with advanced dementia and poor intake, sodium 166 to 168, a free water deficit calculation and a maximum fall of 10 mmol/L in 24 hours.
- **loc-41**: Near duplicate of signed-off s05 cva-07. Both are wake-up strokes with bedtime at 23:00, right hemiplegia and aphasia. Both key last known well at 23:00, CTA and endovascular thrombectomy, with ASA 160, heparin and tenecteplase as distractors.
- **loc-42**: Near duplicate of signed-off s13 multiple-patients-06, whose soaked, drooling farm worker keys decontamination, PPE and atropine 1 to 2 mg doubled until the chest clears. s09 ems-13 repeats it too. s53 tox-28 is a further copy.
- **loc-43**: Near duplicate of signed-off s01 abdominal-pain-10. Both have an infant of 9 to 10 months with episodic crying, legs drawn up, vomiting, a right upper quadrant mass and bloody mucus stool. Both key ultrasound and a 20 mL/kg crystalloid bolus.
- **loc-45**: Near duplicate of signed-off s07 loc-07, with s07 loc-01. It is another police-custody drinker with a left temple laceration, low ethanol, a lateralized head injury, why not alcohol, and CT now with the CCHR not applicable.

### s33 Deep venous thrombosis (DVT) and pulmonary embolus (PE)

- **dvt-pe-18**: Near duplicate of signed-off s08 dvt-pe-12. Both are calf DVTs with 3.5 cm swelling, Wells 3 to 4, compression ultrasound, then an isolated peroneal thrombus and the serial ultrasound versus anticoagulation decision. The serial ultrasound key is also debatable with his severe symptoms.
- **dvt-pe-20**: Near duplicate of s28 chest-pain-31, an earlier new batch. Both have a pregnant woman at 22 to 24 weeks with pleuritic pain, no leg symptoms and no YEARS items, managed with pregnancy-adapted YEARS D-dimer. Imaging choice and LMWH dosing also repeat s08 dvt-pe-05 and s17 sob-12.
- **dvt-pe-21**: Near copy of chest-pain-04, found by the bank-wide duplicate sweep. Both are a breastfeeding woman with pleuritic chest pain after a recent caesarean delivery found to have a pulmonary embolism and the key teaching point is choosing a therapeutic dose of low molecular weight heparin safe in breastfeeding.
- **dvt-pe-22**: Near duplicate of s28 chest-pain-33, an earlier new batch. Both have PE with metastatic gastric cancer, the primary in place and chemotherapy, and both key dalteparin over a DOAC for luminal GI cancer. The sPESI 2 at SpO2 93% also repeats s08 dvt-pe-04.
- **dvt-pe-23**: Near copy of dvt-pe-01, found by the bank-wide duplicate sweep. Both are a man with a proximal DVT after long travel whose treatment choice turns on injections versus pills, and both key starting apixaban 10 mg twice daily and outpatient anticoagulation.
- **dvt-pe-24**: Near duplicate of signed-off s08 dvt-pe-09. Both are segmental PE on carbamazepine 400 mg twice daily, with the DOAC interaction, LMWH or warfarin, and outpatient care keyed.
- **dvt-pe-27**: Near duplicate of signed-off s08 dvt-pe-08, s16 shock-09 and s17 sob-11. Each is a collapse with obstructive shock, a dilated RV on bedside ultrasound and a DVT, with alteplase 100 mg over 2 hours keyed. Only the arrest bolus in q4 is new.
- **dvt-pe-33**: Near copy of dvt-pe-10, found by the bank-wide duplicate sweep. Both are bilateral lobar PE with an RV to LV ratio above 1 and the ESC risk class decides care, and both key the intermediate risk category, admission on anticoagulation and hypotension as the sign of high risk.
- **dvt-pe-36**: Near copy of dvt-pe-01, found by the bank-wide duplicate sweep. Both are a middle aged man with a likely proximal DVT confirmed by ultrasound who goes home on an oral DOAC, and both key the Wells score, compression ultrasound and the starting DOAC regimen.
- **dvt-pe-38**: Near duplicate of signed-off s08 dvt-pe-04 and s28 chest-pain-33. It is a cancer patient with DVT signs and PE most likely, the same Wells arithmetic, leg ultrasound as the first test, and DOAC or LMWH choice by tumour site. The sPESI items also repeat.
- **dvt-pe-43**: Near duplicate of s28 chest-pain-32, an earlier new batch. Both have an older patient with PE unlikely, an age-adjusted cutoff near 760 to 780 and a D-dimer of 690, keyed no imaging. Signed-off s08 dvt-pe-03 and s17 sob-10 teach the same point.

### s34 Delirium/agitation

- **delirium-agitation-34**: Near copy of burns-18, found by the bank-wide duplicate sweep. Both are an 84 year old found on the floor after a long lie with dark urine, a CK of 38 000 U/L and a creatinine of 168 umol/L, and both key the creatine kinase and a noncontrast CT head.

### s35 Emergency medical services (EMS)

- **ems-18**: Near copy of anaphylaxis-44, found by the bank-wide duplicate sweep. Both are adults whose anaphylaxis has resolved after their own autoinjector and who want to leave right away and the key teaching in both is warning that symptoms can recur as epinephrine wears off and replacing the used autoinjector.
- **ems-21**: Near copy of ems-02, found by the bank-wide duplicate sweep. Both are a paramedic patch about sudden one sided weakness with a positive large vessel occlusion screen near a small hospital, and both key direct transport to the stroke centre and the exact last known well time.
- **ems-27**: Near copy of ems-13, found by the bank-wide duplicate sweep. Both are mass casualty organophosphate or nerve agent poisonings managed with atropine and pralidoxime dosing
- **ems-36**: Near copy of arrhythmia-03, found by the bank-wide duplicate sweep. Both are patients who missed hemodialysis and present weak with ECG changes of hyperkalemia and the key teaching in both is treating with calcium and nebulized salbutamol.

### s36 Environmental

- **environmental-17**: Near copy of environmental-02, found by the bank-wide duplicate sweep. Both are elderly people found confused with hot dry skin on the fourth day of a heat wave in a top floor apartment without air conditioning and the key teaching in both is that their anticholinergic, diuretic and antipsychotic medications raised their heat stroke risk and should be stopped.

### s37 Eye: red eye and loss of vision

- **eye-22**: Near copy of eye-03, found by the bank-wide duplicate sweep. Both are a red watery eye where steroid drops are the trap and fluorescein shows a dendritic ulcer, and both key HSV keratitis, geographic ulcer risk and antiviral treatment.
- **eye-25**: Near copy of eye-13, found by the bank-wide duplicate sweep. Both are a projectile striking the eye with a teardrop pupil and signs of open globe injury, and both key a rigid shield, CT of the orbits and tetanus update.
- **eye-37**: Near copy of eye-01, found by the bank-wide duplicate sweep. Both are an older farsighted woman whose vomiting and eye pain are misread after an anticholinergic triggers acute angle closure, and both key tonometry and timolol.

### s38 First trimester bleeding

- **first-trimester-bleeding-25**: Near copy of first-trimester-bleeding-02, found by the bank-wide duplicate sweep. Both are a woman near fainting with a positive pregnancy test, an empty uterus and free fluid while a resident leans on the hCG level, and both key that the hCG value must not steer care of a ruptured ectopic.
- **first-trimester-bleeding-29**: Near copy of first-trimester-bleeding-01, found by the bank-wide duplicate sweep. Both are a young woman who faints at about 7 to 8 weeks with hepatorenal free fluid and no intrauterine pregnancy, and both key two large bore IV lines and O Rh D negative red cells for a ruptured ectopic.
- **first-trimester-bleeding-34**: Near copy of first-trimester-bleeding-03, found by the bank-wide duplicate sweep. Both are spotting at six weeks with an empty uterus and an hCG between 1000 and 1600 IU/L, and both key a pregnancy of unknown location managed with serial hCG and named follow up.
- **first-trimester-bleeding-38**: Near copy of first-trimester-bleeding-11, found by the bank-wide duplicate sweep. Both are a week of dark bleeding with severe nausea near 12 to 13 weeks, a very high hCG and a cystic intrauterine mass with no fetus, and both key the molar pregnancy and serial hCG surveillance after evacuation.

### s39 Gastrointestinal (GI) bleed

- **gi-bleed-16**: Near copy of gi-bleed-02, found by the bank-wide duplicate sweep. Both are an older patient with melena, orthostatic light headedness, a hemoglobin near 95 g/L and a raised urea, and both key the NSAID history, a restrictive transfusion threshold and endoscopy within 24 hours.
- **gi-bleed-22**: Near copy of abdominal-pain-10, found by the bank-wide duplicate sweep. Both are infants with a right upper quadrant mass and dark red mucoid stool from an ileocolic intussusception managed with abdominal ultrasound and air enema reduction.
- **gi-bleed-23**: Near copy of gi-bleed-05, found by the bank-wide duplicate sweep. Both are patients who vomit blood after a nosebleed and the key teaching in both is examining the nose and posterior pharynx to recognize swallowed blood rather than a true upper GI bleed.
- **gi-bleed-26**: Near copy of gi-bleed-14, found by the bank-wide duplicate sweep. Both are exertional chest pressure with ST depression in V4 to V6, a raised troponin and a hemoglobin near 70 g/L from occult melena, and both key the rectal examination and red cell transfusion.
- **gi-bleed-33**: Near copy of multiple-trauma-07, found by the bank-wide duplicate sweep. Both are a bleeding Jehovah's Witness with a signed card who refuses blood, and both key confirming capacity and respecting and documenting the refusal.
- **gi-bleed-38**: Near copy of gi-bleed-04, found by the bank-wide duplicate sweep. Both are a man passing large maroon and red stools with clots who is pale and diaphoretic and bleeds from a duodenal source, and both key an upper source for hematochezia and uncrossmatched group O red cells.
- **gi-bleed-41**: Near copy of shock-13, found by the bank-wide duplicate sweep. Both are older patients on an anticoagulant and a beta blocker whose gastrointestinal bleed presents atypically as syncope or palpitations rather than melena and the key teaching in both is that the beta blocker blunts the compensatory tachycardia so the bleed is easy to miss.
- **gi-bleed-43** (q1, q2, q3): Near duplicate of abdominal-pain-28 in s19. Same 6-year-old boy, 21 kg, identical vitals and platelets 310, sore throat, IgA vasculitis with the same distractors, ultrasound for intussusception and urinalysis for nephritis.

### s40 Headache

- **headache-25**: Near copy of cva-17, found by the bank-wide duplicate sweep. Both are an older person on apixaban with a head strike, progressive confusion and a subdural hematoma whose key teaching point is reversal with prothrombin complex concentrate.
- **headache-28**: Near copy of loc-32, found by the bank-wide duplicate sweep. Both are toddlers with a non blanching purpuric rash and a falling level of consciousness from meningococcemia where ceftriaxone is given before any procedure such as the lumbar puncture.
- **headache-31** (q2, q3): Near duplicate of cva-40 in s27: 74-year-old man, 80 kg, sudden occipital headache, vomiting, cannot stand, anticoagulated, 3.5 cm cerebellar hemorrhage compressing the fourth ventricle, then reversal and evacuation. The q2 key also carries no PCC dose while every distractor has one.
- **headache-36** (q1, q3, q4): Near duplicate of the signed-off s15 pre-eclampsia SAMP "Headache one week after delivery": 34-year-old breastfeeding woman a week after vaginal delivery, severe headache, visual symptoms, BP about 168, key postpartum pre-eclampsia against PDPH, magnesium, and MRI with venography for persistent headache.
- **headache-37**: Near copy of headache-01, found by the bank-wide duplicate sweep. Both are a woman in her forties with a headache that peaked within seconds during exertion 3 hours ago with one vomit and a normal exam, and both key onset speed as the feature that demands imaging for subarachnoid hemorrhage.
- **headache-39**: Near copy of headache-08, found by the bank-wide duplicate sweep. Both present giant cell arteritis with jaw claudication as a key diagnostic clue
- **headache-41**: Near copy of eye-14, found by the bank-wide duplicate sweep. Both are a patient with periorbital swelling, pain on eye movement and proptosis from orbital cellulitis whose key teaching point is contrast CT of the orbits and IV ceftriaxone with vancomycin.
- **headache-47**: Near copy of cva-12, found by the bank-wide duplicate sweep. Both are a young smoker with classic migraine with aura on a combined oral contraceptive whose key teaching point is to stop the estrogen containing contraceptive.

### s41 Infectious diseases

- **infectious-diseases-17**: Near copy of airway-20, found by the bank-wide duplicate sweep. Both are patients with a dental infection that has spread into the floor of the mouth causing Ludwig angina and the key teaching in both is a specialized airway plan with ENT or anesthesia standing by.
- **infectious-diseases-21** (q2, q3, q4): Near duplicate of headache-40 in s40: a 39-year-old woman with rhinosinusitis, no imaging, a red flag menu with double vision and periorbital swelling, and amoxicillin 500 mg three times daily against the same azithromycin, ciprofloxacin and moxifloxacin distractors. Only q1 is distinct.
- **infectious-diseases-22**: Near copy of eye-14, found by the bank-wide duplicate sweep. Both are seven year old boys with orbital cellulitis progressing to a subperiosteal abscess needing CT and IV ceftriaxone and vancomycin
- **infectious-diseases-24**: Near copy of headache-05, found by the bank-wide duplicate sweep. Both are older women with fever headache and altered behaviour who have a brief seizure and the key teaching in both is recognizing herpes simplex encephalitis and starting acyclovir with PCR testing.
- **infectious-diseases-25**: Near copy of cva-34, found by the bank-wide duplicate sweep. Both are patients with fever and a new stroke deficit found to have infective endocarditis on echocardiography where thrombolysis is withheld because of the embolic source.
- **infectious-diseases-27**: Near copy of shock-03, found by the bank-wide duplicate sweep. Both are septic shock with confusion and a high lactate where crackles appear after about 2 L of fluid and MAP stays low, and both key cultures, early antibiotics and norepinephrine through a peripheral IV.
- **infectious-diseases-28**: Near copy of abdominal-pain-18, found by the bank-wide duplicate sweep. Both are elderly patients with gallstone cholangitis and confusion needing urgent biliary drainage
- **infectious-diseases-29**: Near copy of pediatric-fever-03, found by the bank-wide duplicate sweep. Both are a febrile young child in septic shock with cold mottled limbs who after boluses develops hepatomegaly and crackles, and both key intraosseous access, fluid boluses and an epinephrine infusion.
- **infectious-diseases-32** (q2, q3): Near duplicate of the signed-off s12 SAMP "Long term care resident with poor intake": a bedbound LTC resident after stroke with dementia and diabetes, the source is a sacral pressure injury found on turning, and the key is blood cultures with deep tissue rather than a swab. Only the q1 fever definition is new.
- **infectious-diseases-37**: Near copy of lacerations-12, found by the bank-wide duplicate sweep. Both are patients bitten by their own cat on the finger who develop pyogenic flexor tenosynovitis needing IV antibiotics and hand surgery
- **infectious-diseases-39**: Near copy of abuse-domestic-07, found by the bank-wide duplicate sweep. Both are a young woman seen soon after a sexual assault where the key teaching point is starting HIV post exposure prophylaxis along with STI testing.
- **infectious-diseases-40**: Near copy of pediatric-fever-05, found by the bank-wide duplicate sweep. Both involve measles exposure in a waiting room where a young infant needs protection, and both key intramuscular immune globulin for the infant too young for vaccine.
- **infectious-diseases-45** (q1, q2): Near duplicate of airway-19 in s21 (48-year-old man, drooling, near normal oropharynx, laryngeal tenderness, nasendoscopy sitting up), which stays in the bank. sob-16 in s51 is a third copy and is also rejected there.

### s42 Ischemic heart disease

- **ischemic-heart-disease-22** (q1, q2, q3): Near duplicate of the signed-off s11 SAMP "Chest pressure and pallor": an older man with exertional chest pressure, melena, ST depression in V4 to V6, troponin 88 ng/L, Hb 64 to 72 g/L, BP about 104/64 and a transfusion key. gi-bleed-26 in s39 covers the same idea again. Rebuild the type 2 MI teaching around a different trigger such as rapid AF or hypoxemia.
- **ischemic-heart-disease-23**: Near copy of arrhythmia-23, found by the bank-wide duplicate sweep. Both are patients recovering from surgery whose breathlessness and T wave inversion in leads III and V1 are mistaken for cardiac ischemia but turn out to be a pulmonary embolism.
- **ischemic-heart-disease-24**: Near copy of ischemic-heart-disease-02, found by the bank-wide duplicate sweep. Both are an elderly woman brought in by her son with weakness and nausea, lateral ST depression and a raised troponin, and both key the features of atypical ACS and angiography within 24 hours.
- **ischemic-heart-disease-29**: Near copy of arrhythmia-12, found by the bank-wide duplicate sweep. Both are men who collapse in cardiac arrest at a curling rink and are found to have a STEMI needing PCI
- **ischemic-heart-disease-38**: Near copy of pulmonary-edema-01, found by the bank-wide duplicate sweep. Both are an older woman with hypertension and diabetes woken at night by sudden breathlessness, sitting upright and diaphoretic with crackles to the mid fields, and both key CPAP or BiPAP and a nitroglycerin infusion.
- **ischemic-heart-disease-39**: Near copy of pulmonary-edema-11, found by the bank-wide duplicate sweep. Both are a patient who ignored an inferior MI days earlier and now has sudden breathlessness with a new holosystolic murmur, and both key a mechanical complication confirmed by echo and emergency cardiac surgery.
- **ischemic-heart-disease-41**: Near copy of ischemic-heart-disease-15, found by the bank-wide duplicate sweep. Both are a middle aged man with stable exertional chest tightness relieved by rest, now pain free with normal serial troponins, and both key outpatient CT coronary angiography, SL nitroglycerin and that a normal troponin does not exclude coronary disease.
- **ischemic-heart-disease-42**: Near copy of ischemic-heart-disease-15, found by the bank-wide duplicate sweep. Both are exertional symptoms relieved by rest with a normal ECG and unchanged troponins, and both key discharge with expedited outpatient ischemia testing and sublingual nitroglycerin.

### s44 Multiple patients

- **multiple-patients-22** (q1, q2): Near duplicate of signed off s13 multiple-patients-06: a worker soaked by a chemical walks into the ED ahead of coworkers who are on their way, keyed to moving him out for decontamination and preparing the department for contaminated arrivals. s09 ems-13 repeats the preparation point. q3 (observe an unknown agent) and q4 (the exposed nurse) are new and could move to another case.
- **multiple-patients-35** (q1, q2): Near duplicate of signed off s14 pediatric-fever-05: an unvaccinated returned traveller with measles prodrome and rash found after sitting in a busy waiting room, keyed to airborne isolation and public health listing of exposed contacts. Only the age differs. q3 and q4 are new and correct and could move to another case.

### s45 Multiple trauma

- **multiple-trauma-21** (q1, q2): Near duplicate of signed off s14 multiple-trauma-08: rollover driver just intubated, tube 23 cm with capnography, rising peak pressure, hypotension and absent left breath sounds, keyed to finger thoracostomy at the left fifth space. s21 airway-46 teaches the same again.
- **multiple-trauma-25**: Near copy of shock-05, found by the bank-wide duplicate sweep. Both are a pale motorcyclist with a painful pelvis, a negative eFAST and pelvic fracture bleeding, and both key the pelvic binder centred over the greater trochanters.
- **multiple-trauma-27**: Near copy of airway-37, found by the bank-wide duplicate sweep. Both are neck trauma patients with crepitus and a hoarse voice from a laryngotracheal injury managed with awake flexible scope intubation
- **multiple-trauma-28** (q1, q3): Near duplicate of s26 burns-22: a man who jumped from a third floor to escape a fire, with partial thickness burns and hypotension from a splenic injury. Only the age and burn site differ. Keep s26 burns-22.
- **multiple-trauma-31**: Near copy of multiple-trauma-02, found by the bank-wide duplicate sweep. Both are chest trauma patients who develop cardiac tamponade found on ultrasound and needing operative decompression
- **multiple-trauma-35** (q1, q2, q3): Near duplicate of signed off s13 multiple-patients-08: a lone physician receives three patients from one crash, one with a right tension pneumothorax, one with an open limb fracture and one with hip or pelvic pain, keyed to treat and decompress the tension patient first.
- **multiple-trauma-40** (q2, q3, q4): Near duplicate of s21 airway-40 (shrugs shoulders only, no sensation below the clavicles, warm dry skin, FVC for intubation, in line stabilization) and of signed off s16 shock-06 (signs of neurogenic versus hemorrhagic shock). Three of four questions repeat.
- **multiple-trauma-44**: Near copy of arrhythmia-03, found by the bank-wide duplicate sweep. Both present with ECG changes of hyperkalemia and the key teaching in both is the same treatment cascade of calcium, insulin with dextrose and nebulized salbutamol.
- **multiple-trauma-45** (q1): Near duplicate of s21 airway-33: an older man with ankylosing spondylitis and a fixed flexed neck falls, has a C6 fracture and hand symptoms, and q1 keys support in his usual flexed posture in both. Keep s21 airway-33.
- **multiple-trauma-46** (q1, q2, q3): Near duplicate of signed off s09 ems-08: young man with brief LOC, lucid interval, then falling GCS and left pupil from an epidural hematoma at a hospital without neurosurgery, keyed to intubate with ETCO2 before transfer and keep SBP above 110.

### s46 Pediatric fever

- **pediatric-fever-16**: Near copy of seizures-15, found by the bank-wide duplicate sweep. Both are a sleepy, poorly feeding newborn whose mother had an untested genital lesion at delivery, and both key empiric ampicillin, cefotaxime and acyclovir for neonatal HSV.
- **pediatric-fever-17** (q1, q4): Near duplicate of signed off s14 pediatric-fever-02: a well 6 to 7 week old with fever at home, same investigation set, the same markers (ANC 3.1, CRP 8, procalcitonin 0.2) and a weight based acetaminophen dose. Only the UTI twist in q2 and q3 is new.
- **pediatric-fever-19**: Near copy of pediatric-fever-02, found by the bank-wide duplicate sweep. Both are six week old infants with fever worked up with the same standard septic panel of blood culture, CBC, procalcitonin and urine tests
- **pediatric-fever-23** (q1, q2): Near duplicate of s40 headache-28: a school age child in a rural ED 3 hours from a paediatric centre with fever, headache and vomiting for about 10 hours who becomes drowsy, keyed to IV ceftriaxone before any procedure and vancomycin by weight. Keep s40 headache-28.
- **pediatric-fever-26** (q2): Near duplicate of s41 infectious-diseases-33: fever and rigors starting soon after a home parenteral nutrition infusion through a central line in short bowel syndrome, with the same paired culture question and near identical options. Only the age differs. Keep s41.
- **pediatric-fever-28** (q1, q2): Near duplicate of signed off s14 pediatric-fever-07: a school age child with fever and a palpable spleen weeks after visiting relatives in West Africa, keyed to urgent malaria testing with repeat smears every 12 to 24 hours.
- **pediatric-fever-30** (q3): Near duplicate of s21 airway-32: a teenage or young adult woman with weeks of cough, night sweats, weight loss, orthopnea and supraclavicular nodes from a mediastinal mass, keyed to keeping her upright and avoiding sedation. Keep s21 airway-32.
- **pediatric-fever-31** (q1, q4): Near duplicate of signed off s18 tox-11 (and s08 delirium-agitation-06): diphenhydramine anticholinergic delirium with picking at the air, dilated pupils and dry skin, keyed to the toxidrome, QRS as the gate for physostigmine and titrated physostigmine. Only the age differs.
- **pediatric-fever-32** (q1, q2, q3, q4): Near duplicate of signed off s18 tox-10 (and s08 delirium-agitation-11): sertraline plus an added serotonergic drug with clonus, benzodiazepine and cyproheptadine, paralysis with rocuronium for temperature above 41°C, and features that separate it from NMS. Only the age differs.
- **pediatric-fever-37** (q1): Near duplicate of s41 infectious-diseases-19: a teenage hockey player with 6 days of sore throat, grey tonsillar exudate, posterior nodes and fatigue from mononucleosis, where amoxicillin causes a maculopapular rash. Keep s41.
- **pediatric-fever-43** (q1, q2, q3): Near duplicate of signed off s16 seizures-11: an immunized toddler with a 2 minute generalized febrile seizure during a cold who is back to baseline, keyed to no investigations, antipyretics for comfort not prevention, and return for ongoing drowsiness.
- **pediatric-fever-44** (q1, q3): Near duplicate of s19 abdominal-pain-28: a 5 to 6 year old boy after a sore throat with palpable purpura on buttocks and legs, swollen ankles and crampy abdominal pain, keyed to IgA vasculitis and serial urinalysis and BP follow up. Keep s19.
- **pediatric-fever-46** (q1, q2, q3): Near duplicate of signed off s14 pediatric-fever-03 (and s41 infectious-diseases-29): an infant in septic shock given 10 to 20 mL/kg boluses who develops hepatomegaly after 40 mL/kg, keyed to epinephrine. Only the age and source differ.

### s47 Pre-eclampsia

- **pre-eclampsia-16** (q1, q2): Near duplicate of abdominal-pain-36 (s19). Both are a woman at about 33 weeks with epigastric pain taken for heartburn, antacids failed, and HELLP labs almost the same (platelets 88, AST about 240, LDH over 700, glucose 5.1, INR 1.0). s15 pre-eclampsia-02 teaches the same point again.
- **pre-eclampsia-34**: Near copy of headache-06, found by the bank-wide duplicate sweep. Both are a primigravida with a frontal headache, BP about 170/110 mmHg and ankle clonus on a magnesium infusion, and both key the HELLP bloods of platelets, AST and ALT, creatinine and urine protein.
- **pre-eclampsia-36**: Near copy of headache-11, found by the bank-wide duplicate sweep. Both are pregnant women with a history of migraine whose headache feels different from usual and prompts a pre-eclampsia workup with repeated blood pressure.

### s48 Pulmonary edema

- **pulmonary-edema-25** (q1, q2): Near duplicate of headache-43 (s40). Both are an 8-year-old boy with puffy eyes, cola urine and an untreated sore throat 2 weeks earlier. Both ask for the test that confirms the cause, and they key different answers (urinalysis here, C3 there).
- **pulmonary-edema-27**: Near copy of ischemic-heart-disease-07, found by the bank-wide duplicate sweep. Both are elderly patients with complete heart block refractory to atropine needing pacing and an epinephrine infusion

### s49 Seizures

- **seizures-16**: Near copy of loc-05, found by the bank-wide duplicate sweep. Both are a patient who does not return to baseline with subtle rhythmic twitching of the mouth corner from nonconvulsive status epilepticus, and both key EEG and IV levetiracetam.
- **seizures-19** (q1, q2, q3): Near duplicate of signed off s18 tox-03: amitriptyline overdose found beside empty blister packs, QRS about 146 to 148 ms with a big terminal R in aVR, keyed to sodium bicarbonate 1 to 2 mmol/kg, benzodiazepine for the seizure and a pH ceiling of 7.50 to 7.55.
- **seizures-20** (q2, q3, q4): Near duplicate of signed off s11 headache-07 (also s27 cva-35 and s32 loc-31): a woman about a week after vaginal delivery with worsening headache, a seizure and a hyperdense superior sagittal sinus, keyed to CT venography, LMWH and antiseizure treatment. Only the q1 magnesium point is new.
- **seizures-22** (q1, q3): Near duplicate of signed off s16 seizures-11: an immunized toddler with a brief generalized febrile seizure during a cold who is back to normal, keyed to no investigations and antipyretics for comfort only. s46 pediatric-fever-43 repeats it too.
- **seizures-23** (q2, q3): Near duplicate of signed off s16 seizures-02: a toddler still convulsing after one benzodiazepine dose, keyed to a second benzodiazepine and then levetiracetam 60 mg/kg by weight. Only the fever differs.
- **seizures-24** (q1, q2, q3): Near duplicate of s46 pediatric-fever-45: a febrile infant with irritability and a full fontanelle, keyed to the fontanelle as the warning sign, lumbar puncture and ceftriaxone with vancomycin. Keep s46 pediatric-fever-45.
- **seizures-32** (q1, q2, q3): Near duplicate of signed off s18 tox-09: an agitated, diaphoretic cocaine user with 7 mm pupils brought in by police, keyed to IV benzodiazepines, active cooling and screening for rhabdomyolysis and hyperkalemia.
- **seizures-34** (q1, q2): Near duplicate of signed off s05 cva-02: a woman with a resected right frontal meningioma who stopped levetiracetam, has a seizure and then left sided weakness, keyed to Todd paresis versus stroke with CT and CT angiography now.
- **seizures-35** (q1, q3): Near duplicate of signed off s16 seizures-09: an adult with a first unprovoked generalized seizure and a safety critical licence, keyed to outpatient EEG and MRI, driving restriction and mandatory reporting. The Aeronautics Act point in q2 is new and could move to another case.
- **seizures-36**: Near copy of seizures-27, found by the bank-wide duplicate sweep. Both are a woman seizure free on lamotrigine who has a breakthrough seizure because hormones speed its clearance, and both key a lamotrigine serum level.
- **seizures-39** (q1, q2): Near duplicate of s32 loc-42: a farmer found in the barn beside spilled organophosphate, soaked and cholinergic, keyed to atropine 2 mg, decontamination with staff protection, and a clear chest as the atropine end point. Keep s32 loc-42.
- **seizures-41** (q2, q3): Near duplicate of signed off s07 loc-12: an older man with weeks of thirst and polyuria from a hyperosmolar hyperglycemic state, keyed to isotonic saline and effective osmolality with urea as the distractor. The focal seizure angle in q1 is the only new point.
- **seizures-43**: Near copy of cva-15, found by the bank-wide duplicate sweep. Both are patients with known lung cancer who present with a new focal neurologic problem from a brain metastasis and are treated with dexamethasone 10 mg IV.
- **seizures-44** (q1, q3): Near duplicate of signed off s07 loc-06: an older woman on hydrochlorothiazide with high water intake who seizes from hyponatremia, keyed to 3% saline 150 mL over 20 minutes and to stopping active treatment when a 400 mL/hour water diuresis appears.
- **seizures-45** (q1, q2): Near duplicate of s24 arrhythmia-46: a woman of 22 to 23 who faints while having blood drawn after warmth, nausea and greying vision, recovers at once and has fainted before, keyed to vasovagal syncope and discharge without tests. Keep s24.
- **seizures-46** (q1, q2, q3): Near duplicate of signed off s18 tox-12 (and s11 headache-12): a family with headaches after running a generator during a winter power outage, with a drowsy 6-year-old of 21 kg, keyed to 100% oxygen, co-oximetry and hyperbaric oxygen.
- **seizures-47** (q2, q3, q4): Near duplicate of s40 headache-45: a woman of about 45 with a kidney transplant on tacrolimus who has headache, blurred vision and seizures from PRES, keyed to MRI and controlled BP lowering with tacrolimus review. Keep s40.

### s50 Shock/dehydration

- **shock-22** (q2): Near duplicate of s41 infectious-diseases-27: a heavy drinker with 3 days of cough, fever and right chest pain from right lower lobe pneumonia who is confused and in septic shock, keyed to peripheral norepinephrine. q1 (30 mL/kg), q3 (vasopressin) and q4 (hydrocortisone) are new and could move to another case. Keep s41.
- **shock-23** (q1, q2): Near duplicate of signed off s12 infectious-diseases-03: a woman with breast cancer 9 days after chemotherapy with a central port and fever, keyed to an antipseudomonal beta-lactam, vancomycin for instability or a line, and antibiotics within 1 hour without waiting for the neutrophil count. The q3 and q4 vasopressor and fluid response items are new.
- **shock-24** (q1, q2, q3, q4): Near duplicate of signed off s12 infectious-diseases-04: a man with diabetes and thigh pain after a minor skin injury, keyed to features beyond cellulitis, urgent surgery, vancomycin with broad gram negative cover and clindamycin for toxin.
- **shock-25** (q1, q2, q3): Near duplicate of s23 anaphylaxis-23 (and s23 anaphylaxis-18, s21 airway-31): a young child with a nut allergy who eats a cookie at a birthday party and develops a hoarse voice, vomiting and shock, keyed to IM epinephrine 0.01 mg/kg, a 20 mL/kg bolus and an epinephrine infusion. Keep s23.
- **shock-27** (q1, q2, q4): Near duplicate of signed off s18 tox-03: amitriptyline overdose found beside an empty container, a seizure and a QRS over 140 ms, keyed to QRS as the predictor, sodium bicarbonate 1 to 2 mmol/kg and an alkaline pH target. s49 seizures-19 repeats it too.
- **shock-28** (q3, q4): Near duplicate of signed off s05 chest-pain-06: a man with severe COPD and sudden right chest pain, absent breath sounds and a hyperresonant chest, keyed to immediate right chest decompression at the fourth or fifth space anterior to the midaxillary line.
- **shock-29** (q1, q3): Near duplicate of signed off s01 abdominal-pain-01: a 74-year-old hypertensive smoker with sudden left flank pain and shock, bedside aortic ultrasound showing a 7.2 cm aorta and permissive hypotension. s19 abdominal-pain-44 repeats it too.
- **shock-30** (q1, q2, q3): Near duplicate of s26 burns-32: a child scalded by a pot pulled off the stove, keyed to the 3 mL/kg per %TBSA formula, a rate counted from the time of the burn and a urine output target of 1 mL/kg/hour. Keep s26.
- **shock-33** (q1, q3): Near duplicate of signed off s14 multiple-trauma-09: a school age child struck by a car with left upper quadrant injury, tachycardia, capillary refill 4 seconds and a normal BP, keyed to shock despite normal pressure and red cells 10 mL/kg.
- **shock-35** (q1, q3): Near duplicate of signed off s09 ems-01 (and s12 ischemic-heart-disease-01): inferior STEMI with hypotension after one nitroglycerin spray, keyed to right-sided leads for RV infarction and a fluid bolus.
- **shock-36** (q1, q2, q3): Near duplicate of s24 arrhythmia-20: an older woman with diarrhea on an AV nodal blocker and potassium sparing drugs with a junctional bradycardia, keyed to hyperkalemia with AV nodal blockade (BRASH). Its update even repeats calcium gluconate 3 g, a 500 mL bolus, pulse 40 and BP 78/42. Keep s24.
- **shock-37** (q1, q2, q3): Near duplicate of signed off s11 gi-bleed-11 and gi-bleed-01: variceal bleeding in alcohol related cirrhosis keyed to octreotide with ceftriaxone, a restrictive transfusion target and balloon tamponade as a bridge to TIPS.
- **shock-38** (q1, q2, q3): Near duplicate of s41 infectious-diseases-29: an infant in septic shock in a rural ED hours from a PICU with an intraosseous line, keyed to antibiotics now through the IO, stopping boluses at crackles and liver enlargement, and an epinephrine infusion through the IO. Keep s41.
- **shock-39**: Near copy of chest-pain-25, found by the bank-wide duplicate sweep. Both patients develop hypotension from dynamic left ventricular outflow tract obstruction and the key teaching point is avoiding inotropes and instead giving fluid with a vasoconstrictor such as phenylephrine.
- **shock-40**: Near copy of multiple-trauma-11, found by the bank-wide duplicate sweep. Both are a young man with penetrating upper abdominal trauma in hemorrhagic shock managed with the massive transfusion protocol, permissive hypotension of 80 to 90 mmHg, calcium chloride and active warming of products.
- **shock-41** (q1, q3): Near duplicate of s41 infectious-diseases-28 (and s19 abdominal-pain-18): an older man with gallstones who declined surgery presenting with rigors, jaundice and confusion, keyed to ultrasound and urgent biliary drainage. The Tokyo grade III item in q2 is new. Keep s41.
- **shock-43**: Near copy of pulmonary-edema-05, found by the bank-wide duplicate sweep. Both are a patient with unstable atrial fibrillation and rapid ventricular response whose key teaching point is synchronized cardioversion followed by amiodarone 150 mg IV when the rhythm reverts.
- **shock-45** (q1, q2, q4): Near duplicate of signed off s18 tox-13: a 3-year-old who took 12 ferrous sulfate 300 mg tablets (48 mg/kg elemental iron) with tablets on X-ray, keyed to deferoxamine and whole bowel irrigation.
- **shock-47** (q2, q3): Near duplicate of s19 abdominal-pain-20: a woman with gallstone pancreatitis, epigastric pain to the back and vomiting, keyed to moderate Ringer's lactate at 1.5 mL/kg/hour from WATERFALL. The whole case is about the same fluid strategy. Keep s19.

### s51 Shortness of breath

- **sob-16** (q1, q2, q3): Near duplicate of airway-19 (s21), which has the same title and the same 48-year-old man with diabetes on metformin, drooling, a near normal oropharynx and hyoid tenderness. Both key nasendoscopy sitting upright and awake intubation with ENT ready.
- **sob-17** (q1, q2, q3, q4): Near duplicate of s15 pulmonary-edema-01 (woman with HTN and diabetes who woke at night, bolt upright, few words, crackles, high dose nitrate, ECG and troponin for the trigger) and pulmonary-edema-08 (NIV failure, intubate). pulmonary-edema-35 in s48 covers the same ground as an MCQ.
- **sob-18** (q3, q4): Repeats asthma-copd-36 (s25) in q3 (IV magnesium after incomplete response) and q4 (quiet chest with drowsiness is impending respiratory failure). asthma-copd-20 already works through a PRAM of 10 from the same five findings.
- **sob-20**: Near copy of gi-bleed-41, found by the bank-wide duplicate sweep. Both are elderly women with atrial fibrillation on a DOAC and an NSAID who present with a gastrointestinal bleed and a urea raised out of proportion to creatinine needing red cell transfusion.
- **sob-21** (q1, q2, q3): Near duplicate of airway-24 (s21): myasthenia gravis on pyridostigmine 60 mg QID and prednisone 10 mg after ciprofloxacin, nasal voice, weak cough after sips, FVC based intubation and increased rocuronium sensitivity.
- **sob-22** (q1, q2, q3): Near duplicate of chest-pain-35 (s28): 63-year-old woman with metastatic cancer, JVP to the angle of the jaw, muffled heart sounds, clear lungs, pulsus. Same three keys (tamponade, bedside echo, pericardiocentesis).
- **sob-24** (q1, q2, q3): Near duplicate of dvt-pe-31 (s33): sudden dyspnea after lower limb surgery with a swollen tender calf, imaging unavailable, Wells score, and proximal DVT on ultrasound meaning no further lung imaging. Only q4 (UFH at eGFR 15) is new.
- **sob-25** (q2, q3): Near duplicate of infectious-diseases-43 (s41): 3-year-old after a cold with 3 days of fever, refusal to eat, drooling, stiff neck. Same diagnosis key and the same contrast CT key, from the same Craig and Schunk source.
- **sob-27** (q1, q2, q3): Near duplicate of asthma-copd-24 (s25): COPD with bullae, sudden right pleuritic pain while carrying groceries, secondary pneumothorax, small bore drain, and controlled oxygen to 88 to 92%.
- **sob-29** (q1, q2, q3): Duplicate of tox-36 in s53: benzocaine spray, chocolate brown blood, co-oximetry confirms, methylene blue 1 mg/kg. Keep tox-36, which sits in the toxicology topic and adds the G6PD question.
- **sob-30** (q1, q2, q3): The generator carbon monoxide cluster with co-oximetry, 100% oxygen and hyperbaric criteria is already in tox-12 (s18), headache-12 (s11), ems-15 (s09) and seizures-46 (s49).
- **sob-32** (q1, q2, q3): Near duplicate of asthma-copd-26 (s25), titled 'Pressure falls after the tube': post intubation hypotension in severe asthma, disconnect first, then reduce minute ventilation and accept hypercapnia.
- **sob-33** (q1, q2): Near duplicate of asthma-copd-18 (s25): 67-year-old heavy smoker labelled COPD by his family physician, inhalers failed, noisy breathing and weight loss from an upper or central airway tumour. It also overlaps sob-26 in this batch. The awake tracheostomy in q3 is new and could be kept in a rebuild.
- **sob-36** (q2, q3): Repeats chest-pain-15 (s05): rural site 3 hours from PCI, pharmacoinvasive lysis and half dose tenecteplase at 75 or older. q2 ECG text is word for word the same as pulmonary-edema-38 q2.
- **sob-38** (q1, q2, q3): Near duplicate of chest-pain-24 (s28): HbSS on hydroxyurea and folic acid after a pain crisis, baseline Hb about 85, acute chest syndrome, ceftriaxone with azithromycin, oxygen, incentive spirometry and exchange transfusion.
- **sob-39** (q1, q2, q3): Near duplicate of infectious-diseases-26 (s41): MSM with thrush, 3 weeks of dry cough, weight loss, interstitial opacities, HIV test and TMP-SMX with prednisone.
- **sob-40** (q1, q2, q3): Near duplicate of asthma-copd-34 (s25): school age child after a diarrheal illness with a gallop, liver 4 cm below the margin and capillary refill of 4 seconds from myocarditis, confirmed on cardiac ultrasound.
- **sob-41** (q1, q3): Near duplicate of chest-pain-39 (s28): panic disorder on sertraline and a combined pill after a long flight, with a saturation of 94% as the finding against panic, then imaging for PE.
- **sob-42** (q1, q2, q3): Near duplicate of airway-08 (s02): return after day surgery thyroidectomy with a tense neck and stridor. airway-08 q2 is an MCQ with the same key, open the wound at the bedside.
- **sob-44** (q2, q3): q2 and q3 repeat asthma-copd-37 (s25) with near identical options: opioid toxicity over stroke, COPD, pneumonia and PE, then naloxone 0.04 mg IV over flumazenil 0.2 mg and naloxone 2 mg.
- **sob-45** (q1, q2): Near duplicate of s15 pulmonary-edema-12, which has the same title and the same scenario (heart failure, second unit at 250 mL/hour, dyspnea 40 minutes in, TACO, stop and diurese).
- **sob-47** (q1, q3): Near duplicate of s15 pulmonary-edema-10: 31-year-old weeks after a vaginal delivery with gestational hypertension, cough, orthopnea and a raised JVP from peripartum cardiomyopathy.

### s52 Suicide risk

- **suicide-risk-22**: Near copy of suicide-risk-06, found by the bank-wide duplicate sweep. Both are low risk patients with passive suicidal thoughts discharged with the same safety plan components of warning signs, coping strategies and crisis contacts

### s53 Toxicology

- **tox-17** (q1, q2, q4): Near duplicate of loc-03 (s07): older woman with diabetes and CKD (eGFR about 30) hard to rouse from sulfonylurea hypoglycemia. loc-03 already keys octreotide, D10, stopping glyburide, hourly checks and 24 hour admission with the same MCQ option.
- **tox-23**: Near copy of shock-26, found by the bank-wide duplicate sweep. Both are propranolol overdose patients with bradycardia and hypoglycemia treated with high dose insulin and dextrose
- **tox-24**: Near copy of loc-10, found by the bank-wide duplicate sweep. Both are a sleepy 2 year old with 2 mm pupils after time with a grandmother who takes clonidine 0.1 mg, and both key asking what other pills are in the home and monitored observation.
- **tox-25**: Near copy of airway-38, found by the bank-wide duplicate sweep. Both are caustic sodium hydroxide ingestions with stridor requiring urgent airway assessment for intubation
- **tox-35**: Near copy of analgesia-sedation-04, found by the bank-wide duplicate sweep. Both are a patient who seizes and arrests from local anesthetic systemic toxicity during laceration repair with lidocaine and the key teaching point is treatment with 20% intravenous lipid emulsion.
- **tox-41** (q1, q2, q3): Near duplicate of gi-bleed-13 (s11): older woman on warfarin for AF with melena after an antibiotic for a UTI, INR about 7 and Hb about 80. It teaches the same interaction, PCC with vitamin K 10 mg IV, and resuscitation.
- **tox-47**: Near copy of tox-15, found by the bank-wide duplicate sweep. Both are heavy drinkers with delirium tremens refractory to benzodiazepines treated with phenobarbital

## Hold for your judgement

### s19 Abdominal pain

- **abdominal-pain-18** (q3): Near duplicate of shock-41 in s50 and infectious-diseases-28 in s41: older adult who declined gallbladder surgery, confusion, grade III cholangitis and urgent drainage. The afebrile teaching in q1 is new, but only one of these should carry the drainage teaching.
- **abdominal-pain-28** (q1, q3): Keys are correct, but pediatric-fever-44 in s46 is a near duplicate: school age boy after a sore throat with palpable purpura on the legs and buttocks, ankle swelling, abdominal pain and a urinalysis and BP follow-up key. The intussusception question here is new. Keep one or trim the overlap.
- **abdominal-pain-29** (q1, q2, q3): Keys and doses are correct, but chest-pain-30 in s28 is a near duplicate: older woman with burning band pain from the left mid back, normal skin, allodynia, a nerve root cause and zoster treatment. Keep one of the pair.

### s21 Airway management

- **airway-19** (q1, q2, q3): Keys and the lidocaine dose are correct, but sob-16 in s51 is a near duplicate: 48-year-old man with diabetes on metformin, drooling, near normal oropharynx, hyoid tenderness, nasendoscopy and an airway plan. Keep one of the pair.
- **airway-24** (q1, q2, q3): Keys and numbers are correct, but sob-21 in s51 is a near duplicate: myasthenia crisis after ciprofloxacin for a UTI, pyridostigmine 60 mg four times daily, prednisone 10 mg, nasal voice, weak cough after sips and the same neuromuscular blocker question. Keep one of the pair.
- **airway-40** (q1, q3): Possible copy of shock-06, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a young man quadriplegic after diving into a shallow lake with warm dry skin, and both key the vasopressor for neurogenic shock with bradycardia.

### s22 Analgesia/sedation

- **analgesia-sedation-17** (q2): q2 keys a fascia iliaca block as the most effective initial intervention in a screaming 3-year-old with an IV in place. It rests on one small low-quality trial, and Canadian practice would give IV or IN opioid first. Arjan should decide whether to keep it or drop the word initial.
- **analgesia-sedation-29** (q1): q1 keys fentanyl alone as the first infusion 15 minutes after ketamine and rocuronium 100 mg. PADIS analgesia-first was written for ICU patients who are not paralysed, and ED awareness data argue for prompt sedation as well once ketamine wears off. The q2 update then shows likely awareness, so the key may teach the unsafe order.

### s23 Anaphylaxis

- **anaphylaxis-38**: Possible copy of anaphylaxis-19, a borderline call in the duplicate sweep. Decide whether both should stay. Both are anaphylaxis minutes after an injection at a clinic next door where staff gave one IM epinephrine dose, and both key a repeat epinephrine 0.5 mg IM and extended observation.

### s24 Arrhythmia

- **arrhythmia-16** (q2, q3, q4): Keys are correct, but chest-pain-22 in s28 is a near duplicate: teenage basketball player with exertional syncope and chest pain, an uncle's sudden death, a left sternal border murmur, a manoeuvre question and the plan. Keep one of the pair.
- **arrhythmia-20** (q1, q2, q3): Near duplicate of shock-36 in s50: older woman with diarrhea, AKI with creatinine 248, ramipril, spironolactone and metoprolol, junctional bradycardia in the 30s, BRASH and an epinephrine infusion. Keys are correct, but only one of the pair should ship.

### s25 Asthma/COPD

- **asthma-copd-16** (q2, q3, q4): Keys are correct, but sob-19 in s51 is a near duplicate: young infant with coryza then bilateral crackles and wheeze, half feeds, a sibling with a cold, first treatment, respiratory support and the same 'finding that suggests another diagnosis' question. Keep one of the pair.
- **asthma-copd-24** (q1, q2): Keys are correct, but sob-27 in s51 is a near duplicate: older man with severe COPD, sudden right chest pain while carrying groceries, reduced right breath sounds and a pneumothorax management question. Keep one of the pair.
- **asthma-copd-25**: Possible copy of asthma-copd-06, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a school age child with a viral wheeze who used salbutamol at home without a spacer and is ready for discharge after treatment, and both key the spacer, the written action plan and the daily inhaled steroid controller.
- **asthma-copd-32** (q1): The exertion test key rests on Rosen alone. TREKK would discharge this boy now (PRAM 1, 2 hours after salbutamol, SpO2 95%), and asthma-copd-25 keys 'ready for discharge now' in the same situation, so the two SAMPs teach opposite answers. A physician should decide which answer the bank teaches.

### s26 Burns

- **burns-38**: Possible copy of burns-01, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a man pulled from a basement fire after minutes in smoke, and both key the enclosed space fire, soot and carbonaceous sputum and a raised carboxyhemoglobin as inhalation injury markers.

### s28 Chest pain

- **chest-pain-24** (q1, q3, q4): Kept as the earlier copy of a duplicate pair. The other copy is rejected. Needs a physician read before use. Original note: Near copy of sob-38 in s51. Both are an HbSS teen with a new infiltrate keyed to acute chest syndrome with the same distractors, a cephalosporin plus macrolide, spirometry and oxygen menu, and exchange transfusion for saturation below 90% on oxygen. Keep one of the pair.
- **chest-pain-31** (q2, q3, q4): Kept as the earlier copy of a duplicate pair. The other copy is rejected. Needs a physician read before use. Original note: Near copy of dvt-pe-20 in s33, a 31-year-old at 22 weeks with pleuritic pain and no leg symptoms worked up with pregnancy-adapted YEARS. q4 also keys CT for the second patient, while dvt-pe-20 teaches that V/Q is preferred in pregnancy with a normal chest X-ray, so the bank would teach both.
- **chest-pain-39** (q1, q2): Kept as the earlier copy of a duplicate pair. The other copy is rejected. Needs a physician read before use. Original note: Near copy of sob-41 in s51. Both are a young woman with an anxiety disorder on sertraline and a combined pill after a long flight, keyed to a saturation of 94% as the finding against panic. Keep one of the pair.

### s29 Common fractures/MSK

- **msk-34** (q1, q3): The q3 key of debridement within 24 hours rests only on the British BOAST 2017 standard. No Canadian standard was found and practice varies. q1 also repeats the realign before films point of signed-off s06 msk-08.

### s31 Critical appraisal

- **critical-appraisal-33** (q4): The q4 key of prophylactic LMWH in a below-knee cast rests on NICE NG89. No Canadian guideline covers cast thromboprophylaxis and ACCP 2012 advises against routine use, so a physician must confirm the key for prior VTE.

### s32 Decreased level of consciousness

- **loc-25** (q2, q3): Numbers and keys are correct, but q2 (osmolal gap) and q3 (fomepizole 15 mg/kg) repeat signed-off s18 tox-06, also a police-found man with a toxic alcohol. The methanol vision and EXTRIP teaching is new. The physician should decide whether to keep both.
- **loc-37** (q2, q3, q4): Numbers are correct, but the case repeats signed-off s09 ems-08 (epidural hematoma, dilated pupil, intubate, mannitol 1 g/kg with dexamethasone and labetalol distractors) and s14 multiple-trauma-12 (TBI SBP target). The mannitol dose rests on an ENLS consensus protocol only. The physician should decide on overlap and source.

### s33 Deep venous thrombosis (DVT) and pulmonary embolus (PE)

- **dvt-pe-19**: Possible copy of chest-pain-31, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a young woman with one day of right pleuritic pain and mild breathlessness, no YEARS items and a D dimer near 800, and both key the 1000 cutoff that excludes PE without imaging.
- **dvt-pe-30** (q1, q2): Keys are correct, but q1 (compression ultrasound first in pregnancy) and q2 (therapeutic LMWH) repeat signed-off s08 dvt-pe-05 and s17 sob-12, both pregnant women at 28 to 29 weeks with leg symptoms. The negative ultrasound and suspected iliac DVT branch is new. The physician should decide on the overlap.

### s35 Emergency medical services (EMS)

- **ems-35** (q3): q1 and q2 are correct. q3 keys a 1 g IV infusion over 8 hours after a single field IM dose. The Ontario directive gives one 1 g dose only, and no Canadian source says the field dose is the CRASH-2 loading dose.

### s36 Environmental

- **environmental-23** (q3): q1 and q2 are correct. q3 keys IV iloprost in a man with a 6 mm acute subdural hematoma. Iloprost inhibits platelets, no data support its safety with an acute bleed, and it is only available through the Special Access Program.

### s37 Eye: red eye and loss of vision

- **eye-21** (q2): q1 and q3 are sound. q2 keys stopping dexamethasone outright after 3 weeks. Some ophthalmologists would taper or switch to loteprednol because subepithelial infiltrates rebound, so the key and the loteprednol distractor are practice-dependent.

### s38 First trimester bleeding

- **first-trimester-bleeding-27**: Possible copy of first-trimester-bleeding-10, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a woman who believes her early pregnancy has ended but has an empty uterus and an hCG near 1400 to 1850 IU/L, and both key managing it as a possible ectopic with serial hCG and gynecology follow up.

### s40 Headache

- **headache-45** (q1, q2, q3): Kept as the earlier copy of a duplicate pair. The other copy is rejected. Needs a physician read before use. Original note: Near duplicate of seizures-47 in s49: woman aged 45 to 46 with a recent kidney transplant on tacrolimus, mycophenolate and prednisone, headache, blurred vision and seizures, PRES confirmed by MRI, then controlled BP lowering with tacrolimus review.

### s41 Infectious diseases

- **infectious-diseases-35** (q4): q1 to q3 check out. The q4 key of fidaxomicin for a first recurrence follows IDSA/SHEA 2021, but it was reviewed once only, the Canadian AMMI guidance was not opened, and provincial coverage of fidaxomicin varies. A physician should confirm it as the single best Canadian answer.

### s42 Ischemic heart disease

- **ischemic-heart-disease-33** (q3): q1 and q2 check out. In q3, 2 days of new exertional and postprandial angina in a man with prior MI is arguably new-onset or crescendo unstable angina, which many would admit. Discharge with urgent cardiology follow-up is defensible in the hs-troponin era but practice-dependent.

### s43 Lacerations

- **lacerations-18** (q3): q1 and q2 check out. The q3 key (mental health psychosocial assessment before discharge) rests on UK NICE NG225, and in many Canadian EDs the emergency physician assesses a low risk adolescent and arranges urgent follow-up, which the distractor nearly describes.
- **lacerations-28** (q2): q1 and q3 check out. The q2 key (repair of a 2.5 cm gaping full thickness tongue laceration) rests only on Roberts and Hedges, while the Canadian systematic review cited in q3 (Gonsalves 2022) found no consistent repair indications and good outcomes either way, so healing without repair is defensible.

### s44 Multiple patients

- **multiple-patients-29** (q1, q2, q3): Keys follow the CTAS 2016 heat table, which I confirmed. CTAS 2025 reportedly restructures temperature modifiers and its tables could not be opened, so a physician must confirm or add 'Using CTAS 2016' to the stem.
- **multiple-patients-34** (q1, q2): Keys follow CTAS 2016 fever bands (under 3 months, 3 to 18 months) and the 38.5°C immunocompromised threshold, which I confirmed. CTAS 2025 reportedly revises temperature modifiers and could not be opened, so a physician must confirm.

### s47 Pre-eclampsia

- **pre-eclampsia-23** (q1, q2): q2 keys 12 hours as the longest acceptable lab interval. It carries ACOG antepartum wording into the postpartum period and a single right number is practice dependent. q1 shows ergonovine 0.2 mg while the Canadian product and SOGC use 0.25 mg.

### s48 Pulmonary edema

- **pulmonary-edema-28**: Possible copy of pulmonary-edema-26, a borderline call in the duplicate sweep. Decide whether both should stay. Both are a man on a new drug with breathlessness, crackles, a high troponin and later cardiogenic shock with cool hands and a raised lactate, and both key drug induced myocarditis.
- **pulmonary-edema-33** (q3): q3 keys morphine and says 2.5 mg SC suits stage 4 CKD. Canadian palliative guidance usually prefers hydromorphone or fentanyl in severe renal failure, so the key needs a physician decision.

### s49 Seizures

- **seizures-30** (q2): q2 keys observation with EEG over a further benzodiazepine after 30 minutes of events on bedside features alone. This is practice dependent and a wrong call is dangerous either way, so a physician must confirm it.

### s51 Shortness of breath

- **sob-23** (q3): q3 keys serial leg ultrasound after a nondiagnostic V/Q in a patient with a Wells score of 7.5. Thrombosis Canada supports it, but the study behind that pathway used angiography for high pretest probability, and many would repeat CTPA. A physician must pick the key or lower the pretest probability.

### s52 Suicide risk

- **suicide-risk-30** (q2): q2 calls a 48-year-old man low risk two days after criminal charges with public exposure, separation and no sleep, and keys discharge home. Legal charges and public shame are strong acute triggers, so many physicians would want a crisis or psychiatry assessment first.
- **suicide-risk-31** (q1, q3): q1 teaches release before age 25 as the top veteran risk marker from a single 1976 to 2012 VAC cohort, which is narrow trivia for an EM exam. q3 is a high risk admission mapped to KF4, which is written for low risk discharge.

## Fix (editorial, no clinical judgement needed)

### s19 Abdominal pain

- **abdominal-pain-33** (q1, q4): Keys and PECARN count are correct. The ATLS citation is the 10th edition of 2018, and the 11th edition was released in 2025. *Fix:* Replace the ATLS source with: American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 11th ed. 2025.
- **abdominal-pain-39** (q1, q2, q3): Keys are correct. All three questions cite the ATLS 10th edition of 2018, which the 11th edition replaced in 2025. *Fix:* Replace the ATLS source with: American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 11th ed. 2025.
- **abdominal-pain-40** (q1): Every q1 distractor contains 'usually' and the key does not, so a test-wise candidate can pick the key without the clinical point. *Fix:* Remove 'usually' from the four distractors: 'Fever is typically present', 'Leukocytosis is marked', 'Symptoms start abruptly', 'Typical migration is seen'. Keep option order and the key.

### s20 Abuse (domestic)

- **abuse-domestic-19** (q1, q3, q4): Keys are correct, but the cigarette burn teaching in q1 is cited to a CPS statement on bruising, which does not cover burns. *Fix:* Add and cite for q1: Kemp AM, Maguire SA, Lumb RC, Harris SM, Mann MK. Contact, cigarette and flame burns in physical abuse: a systematic review. Child Abuse Rev. 2014. https://onlinelibrary.wiley.com/doi/abs/10.1002/car.2278
- **abuse-domestic-31** (q1): The key names face and ribs, but Wu 2010 supports head, neck and face injuries and found trunk injuries nonspecific. The explanation already argues only the face and head. *Fix:* Change the q1 key text from 'Repeat injuries to face and ribs' to 'Repeat injuries to head and face'. Keep option order and explanation.
- **abuse-domestic-32** (q2): Key is correct. The q2 explanation relies on a PHIPA exception for serious bodily harm, but q2 cites only the CYFSA. *Fix:* Add a source and cite it on q2: Ontario. Personal Health Information Protection Act, 2004. S.O. 2004, c. 3, Sched. A, section 40(1): disclosure to eliminate or reduce a significant risk of serious bodily harm. 2004.

### s21 Airway management

- **airway-22** (q1, q2, q3): Keys match NRP teaching, but all three questions cite the NRP 8th edition of 2021. The 2025 AHA and AAP neonatal guideline now replaces it. *Fix:* Add and cite on q1 to q3: Lee HC and colleagues. Part 5. Neonatal resuscitation. 2025 American Heart Association and American Academy of Pediatrics guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025. Keep the NRP textbook only if updated to the 9th edition.
- **airway-23** (q2): The q2 update gives a pulse of 58/minute in a pale, floppy, hypoxic child, which under PALS calls for compressions, and no question or explanation addresses it. Keys are sound. *Fix:* In the q2 update, change 'Her pulse is 58/minute' to 'Her pulse is 66/minute'.
- **airway-33** (q1): q1 (support the flexed posture in ankylosing spondylitis, not a rigid collar) repeats the q1 teaching of the ankylosing spondylitis SAMP in s45 multiple-trauma, which has the same scenario. q2 to q4 are distinct airway teaching. *Fix:* Delete q1 so the SAMP keeps q2 to q4, or replace q1 with an airway question. Leave the padding sentence in the stem.
- **airway-36** (q1, q4): The q1 explanation states that ventilation is 1 breath every 6 seconds once an advanced airway is in, which is the q4 key. Keys are correct. *Fix:* In the q1 explanation, replace 'Once an advanced airway is in, ventilation is 1 breath every 6 seconds, and 20 breaths per minute raises intrathoracic pressure and cuts venous return.' with 'Ventilating at 20 breaths per minute raises intrathoracic pressure and cuts venous return.'

### s22 Analgesia/sedation

- **analgesia-sedation-18** (stem): Keys on NSAIDs after 20 weeks, titration and a short opioid supply are sound. The stem models routine abdominal shielding for an ankle X-ray, which the Canadian Association of Radiologists advised stopping in 2021. *Fix:* In the stem change "X-ray with abdominal shielding shows" to "X-ray shows".

### s23 Anaphylaxis

- **anaphylaxis-39** (q3): Keys are correct. The q3 key on avoiding all crustaceans and tropomyosin heat stability is cited only to the ACR contrast manual, which supports only the contrast point. *Fix:* Add a food allergy source for q3, for example Sampson HA, et al. Food allergy. A practice parameter update 2014. J Allergy Clin Immunol. 2014, and cite it alongside the ACR manual.

### s25 Asthma/COPD

- **asthma-copd-33** (q1): Key is correct, but the explanation states that a PaO2 of 60 mmHg or less makes an exacerbation severe. In the Rome criteria hypoxemia can occur in a moderate exacerbation, and severe requires hypercapnia with acidosis. *Fix:* In the q1 explanation, replace 'Severe requires a PaO2 of 60 mmHg or less, or hypercapnia with acidosis (PaCO2 above 45 mmHg and pH below 7.35). His PaO2 is 62 mmHg and his pH is 7.37, so he is not severe or life-threatening.' with 'Severe requires hypercapnia with acidosis (PaCO2 above 45 mmHg and pH below 7.35). A moderate exacerbation can include hypoxemia or hypercapnia without acidosis. His pH is 7.37, so he is not severe or life-threatening.'
- **asthma-copd-44** (q2): Wells score and keys are correct. The q2 explanation says Thrombosis Canada calls a score above 4.5 PE likely, but the two-level cut-off is above 4, so a score of 4.5 is already likely. *Fix:* In the q2 explanation, change 'and above 4.5 as PE likely' to 'and above 4 as PE likely'.

### s29 Common fractures/MSK

- **msk-20** (q4): Keys are sound. The q4 update says the tibia is no longer tender 2 days after the candidate was told to presume a fracture, which is implausible for a true fracture and cues the answer. *Fix:* In the q4 update delete the sentence "The tibia is no longer tender." The key and explanation hold without it.

### s30 Continuous quality improvement (CQI)

- **cqi-28** (q2): The stem says no interaction was flagged because another pharmacy filled the script. In provinces with a shared dispensing record the pharmacist would have seen warfarin, and the q2 key assumes provincial drug data exist. *Fix:* Add to the stem: "The department is in Ontario. The emergency record is not linked to the provincial drug repository, and community pharmacies see only their own dispensing records." Keep the q2 key.

### s33 Deep venous thrombosis (DVT) and pulmonary embolus (PE)

- **dvt-pe-45** (q3): The key of 28 mg (1 mg/kg every 12 hours) is correct. The explanation ties that dose to children older than 5 years and the 1.5 mg/kg dose to infants under 3 months. Standard pediatric dosing uses 2 months as the cutoff for both. *Fix:* In the q3 explanation change "For children older than 5 years" to "For children aged 2 months or older" and change "a starting dose for infants under 3 months" to "a starting dose for infants under 2 months".

### s34 Delirium/agitation

- **delirium-agitation-17** (q2, q3, q4): Clozapine and smoking teaching is correct. Every question cites only the Maudsley book, which a candidate cannot read, and q3 states specific numbers from it. *Fix:* Add a readable source for q2 and q3, such as the Oxford Health NHS Foundation Trust guidance on smoking and cessation effects on psychotropics (2023) that lens A read, and keep Maudsley as a second source.
- **delirium-agitation-18** (q3): Keys are sound. The case is built on dental pain driving agitation, yet q3 settles him with risperidone and nothing in the update or explanation gives analgesia. *Fix:* Add to the q3 update: He has been given acetaminophen and ibuprofen by mouth. Add one sentence to the explanation that analgesia for the abscess comes first.
- **delirium-agitation-28** (q3, q4): Akathisia recognition and propranolol are sound among the options offered. Both questions cite only the Maudsley book, which cannot be read. *Fix:* Add a readable source for q3 and q4, such as Poyurovsky M. Acute antipsychotic-induced akathisia revisited. British Journal of Psychiatry 2010, after confirming it supports low dose propranolol.
- **delirium-agitation-33** (q2): Canadian CT Head Rule, capacity, haloperidol and escorted transfer keys are correct. The q2 distractor about blood alcohol above the driving limit implies a measured level the case never gives. *Fix:* Change the q2 option His blood alcohol above the driving limit to His intake of about 10 beers, re-sort options, and keep the explanation sentence that intoxication alone does not determine capacity.
- **delirium-agitation-35** (q4): Retention from amitriptyline, capacity, stopping the drug and haloperidol 0.5 mg are correct. The q4 dose rests on Beers, which gives no dose. It is also the second low dose haloperidol key in this batch after 32 q3. *Fix:* Add the CCSMH 2014 delirium guideline, already cited in the batch, as the q4 source for the haloperidol 0.5 to 2 mg starting range.

### s36 Environmental

- **environmental-34** (q1, q2, q3): Keys are correct. All three questions rest only on a 2026 Cureus review, a thin source for the claims on DC contact, 24 hour monitoring and troponin. *Fix:* Add Waldmann V et al. Electrical cardiac injuries. Eur Heart J 2018, already in the batch, as a second source for q2 and q3, and a second established source for the AC versus DC point in q1.

### s37 Eye: red eye and loss of vision

- **eye-34** (q1): Keys are correct. The q1 source is a 2015 NHS paediatric guideline past its review date, and it does not state that acetone and ethanol injure the cornea or that lash trimming helps. *Fix:* Either cite a current source that states the solvent and lash-trimming points, or remove those two claims from the q1 explanation and keep only what the GGC guideline supports.

### s38 First trimester bleeding

- **first-trimester-bleeding-21** (q1, q2): Keys are correct. The day 4 to day 7 15% fall and the rupture teaching rest only on ACOG PB 193, a US source, where SOGC 414 covers the same methotrexate follow-up. *Fix:* Add SOGC Guideline No. 414 (Po 2021), already in the batch, as the source for q1 and q2 after confirming its day 4 to 7 wording, and keep ACOG as a second source.
- **first-trimester-bleeding-33** (q2, q3): Keys are correct. The return threshold of 2 pads an hour for 2 hours and the 1 to 2 week follow-up rest only on ACOG PB 200, a US source, although SOGC 460 (2025), already cited in q1, covers both. *Fix:* Cite SOGC Guideline No. 460 (Pymar 2025) for q2 and q3 after confirming its return and follow-up wording, and keep ACOG as a second source.

### s39 Gastrointestinal (GI) bleed

- **gi-bleed-19** (q1, q4): Clinical content is sound. The scenario repeats airway-42 in s21: a 6 or 7 year old girl, tonsillectomy for sleep apnea about a week ago, vomited dark blood, clot oozing in the right tonsillar fossa. *Fix:* Change the patient to separate it from airway-42. For example, make her a 15-year-old boy after tonsillectomy for recurrent tonsillitis with the clot in the left fossa, and update the q2 pulse wording for age.
- **gi-bleed-29** (q1): The q1 key is the best set, but the explanation says NSAIDs and stopping the PPI were only non-significant trends in the cited meta-analysis and then counts them anyway. That teaches weak reasoning. *Fix:* In q1, replace the trend sentence with: "NSAID use and lack of PPI protection are recognised risk factors for marginal ulcer, although in this meta-analysis their effects did not reach significance." Keep the key.

### s42 Ischemic heart disease

- **ischemic-heart-disease-18** (q4): q1 to q3 are correct and the Sgarbossa ratio checks out. The q4 update is a counterfactual ("Suppose instead") that rewrites the ECG already used, which the update format does not support and may confuse. *Fix:* Delete q4, leaving 3 questions. Or move its teaching into the q2 explanation as one sentence: a ratio below 0.25 without other criteria is not diagnostic, so serial ECGs and troponins continue.

### s43 Lacerations

- **lacerations-23** (q3): Keys are defensible, but the SAMP never teaches preemptive antibiotics, which IDSA 2014 advises for a bite in advanced liver disease with edema of the area. A candidate may learn that this high risk bite needs only a recheck. Leaving it open and the rabies plan also repeat s13 lacerations-02. *Fix:* Add to the q3 explanation: "He should also start preemptive amoxicillin-clavulanate for 3 to 5 days, which IDSA advises for bites in people with advanced liver disease or edema of the bitten area."
- **lacerations-24** (q1): Keys are correct. q1 (Thompson squeeze test, Maffulli 1998) and q3 (plantar flexed splint with surgical review) repeat the s29 msk Achilles SAMP "Heel pain on the squash court", with the same source. *Fix:* Rewrite q1 to test what the open wound adds, for example direct inspection of the tendon through the wound under good light and anesthesia, and cite a wound exploration source rather than Maffulli.

### s44 Multiple patients

- **multiple-patients-16** (q3): Keys hold under CTAS 2016. The q3 explanation states a 38.5°C adult fever threshold, and CTAS 2025 reportedly lowers adult fever to above 38°C, so the stated number may now be false. *Fix:* In q3 explanation replace '37.9°C is below the 38.5°C adult fever threshold in CTAS' with '37.9°C does not meet the CTAS fever modifier'. Consider adding 'Using CTAS 2016' to the stem.

### s45 Multiple trauma

- **multiple-trauma-29** (q4): Keys are correct. q4 distractors and explanation refer to PEEP of 5 cmH2O and a tranexamic acid infusion that the case never says he received. *Fix:* Add to the stem after the transfusion sentence: 'He received tranexamic acid and is ventilated with PEEP of 5 cmH2O.'

### s47 Pre-eclampsia

- **pre-eclampsia-26** (q2): q2 calls severe hypertension on readings of 158/102 and 162/104. Only one reading is 160 or more and the average sits exactly on 160, which is fragile teaching. *Fix:* Change the triage BP in vitals to 164/104 mmHg and in the q2 explanation change 'Her two readings average 160/103 mmHg' to 'Her two readings average 163/104 mmHg'.

### s48 Pulmonary edema

- **pulmonary-edema-16** (q2): q2 is answered by elimination. The stem hides the drug name and the explanation admits pioglitazone is the only other diabetes drug listed, so no knowledge of thiazolidinedione fluid retention is needed. *Fix:* In the stem replace 'metformin, a second diabetes tablet he cannot name' with 'metformin, pioglitazone'. In the q2 update replace 'the second diabetes tablet was started 2 months ago' with 'pioglitazone was started 2 months ago'. Delete the first sentence of the q2 explanation.

### s52 Suicide risk

- **suicide-risk-25** (q3): Keys are sound. The case is set in Winnipeg but q3 cites the BC provincial OUD guideline when a national Canadian guideline exists. *Fix:* Replace the q3 source with: Yakovenko I, Mukaneza Y, Germe K, et al. Management of opioid use disorder. 2024 update to the national clinical practice guideline. CMAJ. 2024. https://doi.org/10.1503/cmaj.241173
- **suicide-risk-38** (q3): Keys are sound. q3 is a high lethality attempt asking to go home but is mapped to KF4, which is for low risk discharge. *Fix:* Change q3 keyFeature from suicide-risk 4 to suicide-risk 3 (patient who wants to leave).

### s53 Toxicology

- **tox-29** (q2): Keys are otherwise sound. q2 keys a chest radiograph at 6 hours for a child who already has crackles and a saturation of 93%, which reads as delaying imaging in a hypoxic child. *Fix:* Change q2 option D to 'Chest radiograph now and at 6 hours' and add to the explanation that an early film can be normal and is repeated because changes lag.
- **tox-46** (q2): Key 45 mg is right for BC. The explanation says the floor is '30 to 40 mg', but BCCSU says 50% of the dose or 30 mg, whichever is higher. *Fix:* In q2 explanation replace 'or 30 to 40 mg, whichever is higher' with 'or 30 mg, whichever is higher'.

## Ready

Ids per batch. The evidence for each is in `docs/triage/sNN.json`.

- **s19 Abdominal pain** (15): abdominal-pain-17, abdominal-pain-19, abdominal-pain-21, abdominal-pain-24, abdominal-pain-25, abdominal-pain-26, abdominal-pain-30, abdominal-pain-31, abdominal-pain-37, abdominal-pain-38, abdominal-pain-41, abdominal-pain-42, abdominal-pain-43, abdominal-pain-45, abdominal-pain-47
- **s20 Abuse (domestic)** (19): abuse-domestic-16, abuse-domestic-17, abuse-domestic-20, abuse-domestic-21, abuse-domestic-22, abuse-domestic-23, abuse-domestic-24, abuse-domestic-25, abuse-domestic-26, abuse-domestic-27, abuse-domestic-28, abuse-domestic-29, abuse-domestic-30, abuse-domestic-33, abuse-domestic-34, abuse-domestic-35, abuse-domestic-36, abuse-domestic-37, abuse-domestic-38
- **s21 Airway management** (18): airway-16, airway-17, airway-18, airway-20, airway-21, airway-26, airway-29, airway-30, airway-32, airway-34, airway-35, airway-37, airway-38, airway-39, airway-41, airway-42, airway-43, airway-44
- **s22 Analgesia/sedation** (27): analgesia-sedation-16, analgesia-sedation-19, analgesia-sedation-20, analgesia-sedation-21, analgesia-sedation-22, analgesia-sedation-23, analgesia-sedation-24, analgesia-sedation-25, analgesia-sedation-26, analgesia-sedation-27, analgesia-sedation-28, analgesia-sedation-30, analgesia-sedation-31, analgesia-sedation-32, analgesia-sedation-34, analgesia-sedation-35, analgesia-sedation-36, analgesia-sedation-37, analgesia-sedation-38, analgesia-sedation-39, analgesia-sedation-40, analgesia-sedation-41, analgesia-sedation-43, analgesia-sedation-44, analgesia-sedation-45, analgesia-sedation-46, analgesia-sedation-47
- **s23 Anaphylaxis** (23): anaphylaxis-19, anaphylaxis-20, anaphylaxis-21, anaphylaxis-22, anaphylaxis-23, anaphylaxis-24, anaphylaxis-26, anaphylaxis-28, anaphylaxis-29, anaphylaxis-30, anaphylaxis-31, anaphylaxis-32, anaphylaxis-33, anaphylaxis-34, anaphylaxis-35, anaphylaxis-36, anaphylaxis-37, anaphylaxis-41, anaphylaxis-43, anaphylaxis-44, anaphylaxis-45, anaphylaxis-46, anaphylaxis-47
- **s24 Arrhythmia** (25): arrhythmia-18, arrhythmia-19, arrhythmia-21, arrhythmia-22, arrhythmia-23, arrhythmia-24, arrhythmia-25, arrhythmia-26, arrhythmia-29, arrhythmia-30, arrhythmia-33, arrhythmia-34, arrhythmia-35, arrhythmia-36, arrhythmia-37, arrhythmia-38, arrhythmia-39, arrhythmia-40, arrhythmia-41, arrhythmia-42, arrhythmia-43, arrhythmia-44, arrhythmia-45, arrhythmia-46, arrhythmia-47
- **s25 Asthma/COPD** (16): asthma-copd-17, asthma-copd-18, asthma-copd-20, asthma-copd-21, asthma-copd-22, asthma-copd-23, asthma-copd-27, asthma-copd-29, asthma-copd-30, asthma-copd-31, asthma-copd-34, asthma-copd-37, asthma-copd-39, asthma-copd-40, asthma-copd-46, asthma-copd-47
- **s26 Burns** (12): burns-17, burns-18, burns-20, burns-22, burns-23, burns-26, burns-29, burns-30, burns-34, burns-35, burns-36, burns-37
- **s27 Cerebrovascular accident (CVA)** (26): cva-16, cva-18, cva-19, cva-20, cva-21, cva-22, cva-24, cva-25, cva-26, cva-27, cva-29, cva-30, cva-31, cva-32, cva-33, cva-34, cva-36, cva-37, cva-38, cva-39, cva-40, cva-42, cva-43, cva-44, cva-46, cva-47
- **s28 Chest pain** (16): chest-pain-16, chest-pain-19, chest-pain-20, chest-pain-23, chest-pain-25, chest-pain-26, chest-pain-27, chest-pain-28, chest-pain-34, chest-pain-36, chest-pain-37, chest-pain-40, chest-pain-41, chest-pain-42, chest-pain-44, chest-pain-47
- **s29 Common fractures/MSK** (18): msk-16, msk-17, msk-18, msk-19, msk-21, msk-22, msk-23, msk-25, msk-26, msk-27, msk-28, msk-29, msk-30, msk-32, msk-33, msk-35, msk-36, msk-37
- **s30 Continuous quality improvement (CQI)** (19): cqi-16, cqi-17, cqi-18, cqi-19, cqi-20, cqi-21, cqi-22, cqi-23, cqi-24, cqi-25, cqi-26, cqi-27, cqi-29, cqi-30, cqi-31, cqi-32, cqi-33, cqi-34, cqi-35
- **s31 Critical appraisal** (20): critical-appraisal-16, critical-appraisal-17, critical-appraisal-18, critical-appraisal-19, critical-appraisal-20, critical-appraisal-21, critical-appraisal-22, critical-appraisal-23, critical-appraisal-24, critical-appraisal-25, critical-appraisal-26, critical-appraisal-27, critical-appraisal-28, critical-appraisal-29, critical-appraisal-30, critical-appraisal-31, critical-appraisal-32, critical-appraisal-34, critical-appraisal-35, critical-appraisal-36
- **s32 Decreased level of consciousness** (10): loc-16, loc-23, loc-30, loc-34, loc-35, loc-36, loc-39, loc-44, loc-46, loc-47
- **s33 Deep venous thrombosis (DVT) and pulmonary embolus (PE)** (18): dvt-pe-16, dvt-pe-17, dvt-pe-25, dvt-pe-26, dvt-pe-28, dvt-pe-29, dvt-pe-31, dvt-pe-32, dvt-pe-34, dvt-pe-35, dvt-pe-37, dvt-pe-39, dvt-pe-40, dvt-pe-41, dvt-pe-42, dvt-pe-44, dvt-pe-46, dvt-pe-47
- **s34 Delirium/agitation** (17): delirium-agitation-16, delirium-agitation-19, delirium-agitation-20, delirium-agitation-21, delirium-agitation-22, delirium-agitation-23, delirium-agitation-24, delirium-agitation-25, delirium-agitation-26, delirium-agitation-27, delirium-agitation-29, delirium-agitation-30, delirium-agitation-31, delirium-agitation-32, delirium-agitation-36, delirium-agitation-37, delirium-agitation-38
- **s35 Emergency medical services (EMS)** (16): ems-16, ems-17, ems-19, ems-20, ems-22, ems-23, ems-24, ems-25, ems-26, ems-28, ems-29, ems-30, ems-31, ems-32, ems-33, ems-34
- **s36 Environmental** (20): environmental-16, environmental-18, environmental-19, environmental-20, environmental-21, environmental-22, environmental-24, environmental-25, environmental-26, environmental-27, environmental-28, environmental-29, environmental-30, environmental-31, environmental-32, environmental-33, environmental-35, environmental-36, environmental-37, environmental-38
- **s37 Eye: red eye and loss of vision** (18): eye-16, eye-17, eye-18, eye-19, eye-20, eye-23, eye-24, eye-26, eye-27, eye-28, eye-29, eye-30, eye-31, eye-32, eye-33, eye-35, eye-36, eye-38
- **s38 First trimester bleeding** (16): first-trimester-bleeding-16, first-trimester-bleeding-17, first-trimester-bleeding-18, first-trimester-bleeding-19, first-trimester-bleeding-20, first-trimester-bleeding-22, first-trimester-bleeding-23, first-trimester-bleeding-24, first-trimester-bleeding-26, first-trimester-bleeding-28, first-trimester-bleeding-30, first-trimester-bleeding-31, first-trimester-bleeding-32, first-trimester-bleeding-35, first-trimester-bleeding-36, first-trimester-bleeding-37
- **s39 Gastrointestinal (GI) bleed** (22): gi-bleed-17, gi-bleed-18, gi-bleed-20, gi-bleed-21, gi-bleed-24, gi-bleed-25, gi-bleed-27, gi-bleed-28, gi-bleed-30, gi-bleed-31, gi-bleed-32, gi-bleed-34, gi-bleed-35, gi-bleed-36, gi-bleed-37, gi-bleed-39, gi-bleed-40, gi-bleed-42, gi-bleed-44, gi-bleed-45, gi-bleed-46, gi-bleed-47
- **s40 Headache** (23): headache-16, headache-17, headache-18, headache-19, headache-20, headache-21, headache-22, headache-23, headache-24, headache-26, headache-27, headache-29, headache-30, headache-32, headache-33, headache-34, headache-35, headache-38, headache-40, headache-42, headache-43, headache-44, headache-46
- **s41 Infectious diseases** (18): infectious-diseases-16, infectious-diseases-18, infectious-diseases-19, infectious-diseases-20, infectious-diseases-23, infectious-diseases-26, infectious-diseases-30, infectious-diseases-31, infectious-diseases-33, infectious-diseases-34, infectious-diseases-36, infectious-diseases-38, infectious-diseases-41, infectious-diseases-42, infectious-diseases-43, infectious-diseases-44, infectious-diseases-46, infectious-diseases-47
- **s42 Ischemic heart disease** (22): ischemic-heart-disease-16, ischemic-heart-disease-17, ischemic-heart-disease-19, ischemic-heart-disease-20, ischemic-heart-disease-21, ischemic-heart-disease-25, ischemic-heart-disease-26, ischemic-heart-disease-27, ischemic-heart-disease-28, ischemic-heart-disease-30, ischemic-heart-disease-31, ischemic-heart-disease-32, ischemic-heart-disease-34, ischemic-heart-disease-35, ischemic-heart-disease-36, ischemic-heart-disease-37, ischemic-heart-disease-40, ischemic-heart-disease-43, ischemic-heart-disease-44, ischemic-heart-disease-45, ischemic-heart-disease-46, ischemic-heart-disease-47
- **s43 Lacerations** (19): lacerations-16, lacerations-17, lacerations-19, lacerations-20, lacerations-21, lacerations-22, lacerations-25, lacerations-26, lacerations-27, lacerations-29, lacerations-30, lacerations-31, lacerations-32, lacerations-33, lacerations-34, lacerations-35, lacerations-36, lacerations-37, lacerations-38
- **s44 Multiple patients** (15): multiple-patients-17, multiple-patients-18, multiple-patients-19, multiple-patients-20, multiple-patients-21, multiple-patients-23, multiple-patients-24, multiple-patients-25, multiple-patients-26, multiple-patients-27, multiple-patients-28, multiple-patients-30, multiple-patients-31, multiple-patients-32, multiple-patients-33
- **s45 Multiple trauma** (21): multiple-trauma-16, multiple-trauma-17, multiple-trauma-18, multiple-trauma-19, multiple-trauma-20, multiple-trauma-22, multiple-trauma-23, multiple-trauma-24, multiple-trauma-26, multiple-trauma-30, multiple-trauma-32, multiple-trauma-33, multiple-trauma-34, multiple-trauma-36, multiple-trauma-37, multiple-trauma-38, multiple-trauma-39, multiple-trauma-41, multiple-trauma-42, multiple-trauma-43, multiple-trauma-47
- **s46 Pediatric fever** (19): pediatric-fever-18, pediatric-fever-20, pediatric-fever-21, pediatric-fever-22, pediatric-fever-24, pediatric-fever-25, pediatric-fever-27, pediatric-fever-29, pediatric-fever-33, pediatric-fever-34, pediatric-fever-35, pediatric-fever-36, pediatric-fever-38, pediatric-fever-39, pediatric-fever-40, pediatric-fever-41, pediatric-fever-42, pediatric-fever-45, pediatric-fever-47
- **s47 Pre-eclampsia** (18): pre-eclampsia-17, pre-eclampsia-18, pre-eclampsia-19, pre-eclampsia-20, pre-eclampsia-21, pre-eclampsia-22, pre-eclampsia-24, pre-eclampsia-25, pre-eclampsia-27, pre-eclampsia-28, pre-eclampsia-29, pre-eclampsia-30, pre-eclampsia-31, pre-eclampsia-32, pre-eclampsia-33, pre-eclampsia-35, pre-eclampsia-37, pre-eclampsia-38
- **s48 Pulmonary edema** (18): pulmonary-edema-17, pulmonary-edema-18, pulmonary-edema-19, pulmonary-edema-20, pulmonary-edema-21, pulmonary-edema-22, pulmonary-edema-23, pulmonary-edema-24, pulmonary-edema-26, pulmonary-edema-29, pulmonary-edema-30, pulmonary-edema-31, pulmonary-edema-32, pulmonary-edema-34, pulmonary-edema-35, pulmonary-edema-36, pulmonary-edema-37, pulmonary-edema-38
- **s49 Seizures** (14): seizures-17, seizures-18, seizures-21, seizures-25, seizures-26, seizures-27, seizures-28, seizures-29, seizures-31, seizures-33, seizures-37, seizures-38, seizures-40, seizures-42
- **s50 Shock/dehydration** (13): shock-16, shock-17, shock-18, shock-19, shock-20, shock-21, shock-26, shock-31, shock-32, shock-34, shock-42, shock-44, shock-46
- **s51 Shortness of breath** (9): sob-19, sob-26, sob-28, sob-31, sob-34, sob-35, sob-37, sob-43, sob-46
- **s52 Suicide risk** (18): suicide-risk-16, suicide-risk-17, suicide-risk-18, suicide-risk-19, suicide-risk-20, suicide-risk-21, suicide-risk-23, suicide-risk-24, suicide-risk-26, suicide-risk-27, suicide-risk-28, suicide-risk-29, suicide-risk-32, suicide-risk-33, suicide-risk-34, suicide-risk-35, suicide-risk-36, suicide-risk-37
- **s53 Toxicology** (23): tox-16, tox-18, tox-19, tox-20, tox-21, tox-22, tox-26, tox-27, tox-28, tox-30, tox-31, tox-32, tox-33, tox-34, tox-36, tox-37, tox-38, tox-39, tox-40, tox-42, tox-43, tox-44, tox-45
