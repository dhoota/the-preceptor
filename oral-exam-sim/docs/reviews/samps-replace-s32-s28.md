# SAMP rebuild report: s32 (loc) and s28 (chest-pain)

Label s32-s28. This report covers every REJECT rebuilt in the two batches, the added
rebuilds from the bank-wide duplicate sweep, and the FIX pass. All rebuilt SAMPs keep
their id, priority topic, question count and each question's key feature. Version bumped
by 1. Status stays reviewed: false. Titles are neutral.

Checks: npx tsc --noEmit passes. SAMP_BATCH=s32 and SAMP_BATCH=s28 vitest
(tests/samps.test.ts and tests/samp-quality.test.ts) both pass. LAUNCH_GATE=1 vitest
run tests/samps.test.ts passes (4503 tests). No near duplicate stems bank wide.

## Task 2: FIX items

Neither docs/triage/s32.json nor docs/triage/s28.json contains a FIX verdict. Every
entry is READY, HOLD or REJECT, so there were no FIX edits to apply. A rebuild replaces
any earlier edits on that SAMP, per the brief.

## Rebuilt SAMPs: s32 (Decreased level of consciousness)

Origin column: T = original triage REJECT, S = added by the duplicate sweep list.

| id | origin | copies | old scenario | new scenario | keyed decisions | sources |
| --- | --- | --- | --- | --- | --- | --- |
| loc-17 | S | delirium-agitation-10 | anticoagulated fall, subdural | older woman, severe accidental hypothermia in a cold flat | low-reading rectal probe, do not blame alcohol or dementia, active rewarming, core temperature and GCS trend | WMS hypothermia 2019, GCS at 40 years 2014 |
| loc-18 | T | s20 abuse-domestic-17 | abusive head trauma infant | 5-day-old, urea cycle disorder with hyperammonemia | consanguinity clue, plasma ammonia first, stop protein plus IV 10% dextrose plus sodium benzoate, pediatric GCS | Haberle UCD guideline 2019, GCS at 40 years |
| loc-19 | S | airway-09 | salicylate overdose | verapamil (calcium channel blocker) overdose | recognize CCB toxidrome, calcium plus atropine, high-dose insulin, norepinephrine | St-Onge CCB consensus 2017 |
| loc-20 | T | s04 asthma-copd-02 | COPD hypercapnia | missed dialysis, uremic encephalopathy | uremic cause, urgent hemodialysis, pericarditis as an indication, GCS trend | CSN dialysis initiation 2014, GCS at 40 years |
| loc-21 | S | cva-01 | T1D hypoglycemia stroke mimic | alcoholic ketoacidosis, assumed drunk | dextrose plus saline plus thiamine, scored GCS, check ketones and gas before blaming alcohol | McGuire AKA 2006, GCS at 40 years |
| loc-22 | T | s18 tox-14 | sulfonylurea toddler | toddler clonidine ingestion | support ventilation, grandmother's medication list, atropine and fluids, admit for monitoring | Toce pediatric clonidine 2021 |
| loc-24 | T | s09 environmental-02 | heat stroke | young woman, catatonia and autoimmune encephalitis | exclude autoimmune encephalitis, lorazepam challenge, ovarian mass history, MRI and LP before a psychiatric label | Graus autoimmune encephalitis 2016, BAP catatonia 2023 |
| loc-26 | T | s18 tox-03 | amitriptyline overdose | post-stroke nonconvulsive status epilepticus | IV lorazepam, EEG plus CT plus electrolytes, levetiracetam second line, baseline alertness from staff | Brophy status epilepticus 2012, NICE delirium |
| loc-27 | T | s18 tox-07 | lithium toxicity | carbamazepine toxicity after a dose increase | recognize toxicity, recent dose change, multiple dose charcoal, hemodialysis when severe | Goldfrank antiepileptics 2019, EXTRIP carbamazepine 2014 |
| loc-28 | S | ems-11 | pediatric DKA cerebral edema | toddler iron poisoning | recognize iron poisoning, deferoxamine with whole bowel irrigation, pediatric GCS | Chang iron poisoning 2011, GCS at 40 years |
| loc-29 | T | s16 shock-10 | adrenal crisis | xylazine-adulterated opioid overdose | ventilate and titrate naloxone, supportive care and wound care, xylazine explains partial response | Boyer opioid overdose 2012, Wu CMAJ xylazine 2024 |
| loc-31 | T | s11 headache-07 | postpartum cerebral venous thrombosis | young man, herpes simplex encephalitis | recognize encephalitis, empiric IV acyclovir, CSF PCR to confirm | IDSA encephalitis 2008 |
| loc-32 | S | pediatric-fever-04 | meningococcemia | toddler febrile status epilepticus | exclude CNS infection, IV lorazepam first, pediatric GCS afterward | Brophy status epilepticus 2012, GCS at 40 years |
| loc-33 | T | s02 analgesia-sedation-12 | opioid in CKD | anorexia nervosa, hypoglycemia and refeeding | IV dextrose, anticipate hypophosphatemia, replace electrolytes, recent intake history | CPS eating disorders 2024, SAHM eating disorders 2022 |
| loc-38 | T | s04 burns-04 | smoke inhalation cyanide | benzocaine methemoglobinemia | recognize methemoglobinemia, methylene blue, check G6PD before repeat doses | Iolascon methemoglobinemia 2021 |
| loc-40 | T | s16 shock-14 | hypernatremia in dementia | older adult sulfonylurea hypoglycemia | gliclazide plus poor intake, IV dextrose, octreotide, prolonged admission | Diabetes Canada hypoglycemia 2023, Glatstein octreotide 2012, Goldfrank antidiabetics |
| loc-41 | T | s05 cva-07 | wake-up stroke | first unprovoked seizure with prolonged postictal state | witnessed account, recent injury or drug use, non-contrast CT, consider nonconvulsive status | AAN first seizure 2015, Brophy status epilepticus 2012 |
| loc-42 | T | s13 multiple-patients-06 | organophosphate | anticholinergic plant (jimsonweed) poisoning | anticholinergic toxidrome, benzodiazepines plus cooling plus fluids, physostigmine when QRS normal | Goldfrank anticholinergics 2019 |
| loc-43 | T | s01 abdominal-pain-10 | intussusception | infant botulism | recognize infant botulism, stool for toxin, respiratory support plus immune globulin | Arnon infant botulism NEJM 2006 |
| loc-45 | T | s07 loc-07 | police-cells head injury | new diabetic ketoacidosis, assumed drunk | investigate rather than blame alcohol, electrolytes and venous gas, GCS trend | Diabetes Canada hyperglycemic emergencies 2018, GCS at 40 years |

## Rebuilt SAMPs: s28 (Chest pain)

| id | origin | copies | old scenario | new scenario | keyed decisions | sources |
| --- | --- | --- | --- | --- | --- | --- |
| chest-pain-17 | S | chest-pain-01 | aortic dissection at the gym | Wellens syndrome, pain-free after exertional pressure | risk factors, recognize Wellens, a normal troponin does not exclude critical stenosis, urgent angiography | AHA chest pain 2021, Rhinehardt Wellens 2002 |
| chest-pain-18 | S | cva-09 | dissection mimicking inferior STEMI | inferior STEMI with right ventricular infarct | nitrate-induced hypotension, RV infarct, cautious fluids, one normal troponin does not exclude | AHA chest pain 2021, CCS STEMI |
| chest-pain-21 | T | dvt-pe-27 | massive PE at a rural site | tension pneumothorax | recognize tension pneumothorax, immediate decompression, then chest tube | AHA chest pain 2021, BTS pleural disease 2023 |
| chest-pain-22 | T | s24 arrhythmia-16 | HCM collapse at basketball | premature ACS in an anabolic steroid user | consider ACS first, steroid use raises pretest probability, cardiac history features, ASA and ECG | AHA chest pain 2021, Baggish anabolic steroids 2017, CCS STEMI |
| chest-pain-29 | S | ischemic-heart-disease-09 | LBBB Sgarbossa | occlusion MI with hyperacute T waves | early occlusion, one normal troponin does not exclude, ASA and repeat ECG, features of occlusion | AHA chest pain 2021, ESC ACS 2023 |
| chest-pain-30 | S | abdominal-pain-29 | herpes zoster band pain | type 2 MI from anemia and a GI bleed | anemia explains angina, one normal troponin does not exclude, anemia raises risk, ECG and treat anemia | Fourth universal definition of MI 2018, AHA chest pain 2021 |
| chest-pain-32 | S | sob-10 | PE age-adjusted D-dimer | ACS pretest probability with chest wall tenderness | diabetes and hypertension raise probability, tenderness does not exclude ACS, diabetes masks angina, exertional onset | AHA chest pain 2021, HEART score |
| chest-pain-33 | S | dvt-pe-04 | cancer pulmonary embolism | viral myocarditis after a viral illness | preceding viral illness, recognize myocarditis, admit with monitoring, young age is unreliable | Caforio myocarditis 2013, AHA chest pain 2021 |
| chest-pain-35 | S | airway-47 | malignant tamponade | sympathetic crashing acute pulmonary edema | recognize flash pulmonary edema, IV nitroglycerin and NIV, escalate NIV, missed antihypertensives | AHA chest pain 2021, SCAPE study 2026 |
| chest-pain-38 | S | chest-pain-07 | nitroglycerin relief, esophageal | GI cocktail relief does not exclude ACS | relief does not exclude ACS, exertional features, one normal set does not exclude, risk factors | AHA chest pain 2021 |
| chest-pain-43 | S | cva-09 | dissection mimicking stroke | aortic dissection mimicking stroke, new patient | tearing pain preceding deficit, recognize dissection, aortic CT before thrombolysis | IRAD, AHA aortic disease 2022 |
| chest-pain-45 | T | s19 abdominal-pain-16 | type B dissection with a cold leg | fluoropyrimidine coronary vasospasm | history tied to the infusion, recognize vasospasm, stop the drug and give nitrates | ESC cardio-oncology 2022 |
| chest-pain-46 | T | dvt-pe-31 | PE after ankle surgery | right-sided endocarditis with septic pulmonary emboli | injection drug use raises risk, a normal D-dimer does not exclude, cultures and echocardiography | AHA infective endocarditis 2015, ESC pulmonary embolism |

## For the physician

- Every rebuilt SAMP stays reviewed: false. This is an AI rebuild and audit, not clinician
  verification. Please recompute doses and thresholds and read each explanation against
  its stem before sign-off.
- Doses to verify: clonidine atropine 0.02 mg/kg (loc-22), sodium benzoate and IV 10%
  dextrose for hyperammonemia (loc-18), deferoxamine and whole bowel irrigation for iron
  (loc-28), methylene blue 1 to 2 mg/kg (loc-38), octreotide for sulfonylurea (loc-40),
  high-dose insulin euglycemia therapy for the calcium channel blocker overdose (loc-19).
- Guideline currency: several rebuilds rest on international guidance where no current
  Canadian one was found (BTS pleural disease for tension pneumothorax, ESC cardio-oncology
  for fluoropyrimidine vasospasm, AHA infective endocarditis, IDSA encephalitis, BAP
  catatonia, Brophy status epilepticus). Please confirm these remain acceptable.
- Two SCAPE and eating-disorder sources are recent and less commonly cited. The SCAPE
  entity source (loc and chest-pain-35) is an emergency department observational study.
  Confirm you are comfortable with these as the source of record.
- chest-pain-43 remains an aortic dissection case, rebuilt with a distinct patient so it no
  longer copies cva-09. It sits alongside chest-pain-18 (right ventricular infarct) and
  chest-pain-45 (fluoropyrimidine vasospasm), which were moved off dissection so the batch
  does not carry near-duplicate dissection cases.

## Review: s28

Independent review of the 13 rebuilt s28 SAMPs, both lenses (clinical truth, and internal consistency and numbers), plus a bank-wide overlap search by meaning. Files touched: src/samps/s28/chest-pain.ts only. All SAMPs stay reviewed: false.

### Verdicts

| id | verdict | defect found | what changed |
| --- | --- | --- | --- |
| chest-pain-17 | re-rebuilt | Near copy of signed-off s05 chest-pain-14 (title "Pain-free after two episodes", two 15-minute episodes while walking, Wellens in V2 and V3) and repeats s12 ischemic-heart-disease-04. q1 keyed exertional pressure as not raising probability, which is defensible. q3 and q4 distractors were strawmen. | New case: coronary disease 25 years after mediastinal radiation for Hodgkin lymphoma. Risk factors (menu), NSTE-ACS diagnosis, a past normal echo does not image the coronaries, enoxaparin after ASA and nitrates. |
| chest-pain-18 | re-rebuilt | Copies signed-off s12 ischemic-heart-disease-01 (64-year-old man, hypertension, smokes, inferior STEMI, hypotension after nitroglycerin, fluids). q4 was a negative lead-in and keyed a troponin the stem never gave. q1 listed "chest wall tenderness" when the stem said there was none, and "clear lungs" was part of the key's own reasoning. | New case: pneumothorax after acupuncture over the upper back. History detail, diagnosis, bedside ultrasound, a normal triage X-ray does not exclude it. |
| chest-pain-21 | re-rebuilt | Near copy of signed-off s05 chest-pain-06 (sudden right-sided pain 30 minutes ago, agitated, trachea to the left, hyperresonant, distended neck veins) and repeats s17 sob-14. | New case: deep sternal wound infection and mediastinitis 12 days after bypass surgery. Diagnosis, vancomycin with gram-negative cover after cultures, CT and cardiac surgery. |
| chest-pain-22 | re-rebuilt | Copies s42 ischemic-heart-disease-44 (young man, anabolic steroids, gym, chest pressure to the arm). q3 keyed "exertional onset" although the stem gave none, and q2 listed "recent gym attendance", which the stem never mentioned. | New case: older Tamil-speaking woman whose son calls her pain gas. ACS first, diabetes with South Asian ancestry, ischemic pain features through a professional interpreter, chewed ASA. |
| chest-pain-29 | re-rebuilt | Same keyed decisions as s42 ischemic-heart-disease-43 (hyperacute anterior T waves, early occlusion, first test does not exclude). q2 and q4 cued the q1 key by naming occlusion. | New case: collapse and chest pressure before a fall at a party, with a tender bruise and alcohol. ACS first, the bruise does not exclude it, ASA with serial ECG and troponin, features that favour a cardiac cause (menu). |
| chest-pain-30 | re-rebuilt | Copies s42 ischemic-heart-disease-22 (black stools, NSAID for knee arthritis, exertional heaviness, type 2 MI) and s11 gi-bleed-14. q2 was a negative lead-in and keyed a troponin the stem never gave. The explanations invented "severe anemia" and "recent weight gain", and called it a type 2 MI with no troponin rise. q1 and q3 had the same key. | New case: spontaneous hemopneumothorax in a young man. Postural light-headedness, a normal early hemoglobin does not exclude bleeding, cannabis smoking as a risk factor, tube thoracostomy with crossmatch. |
| chest-pain-32 | re-rebuilt | Same teaching point as signed-off s05 chest-pain-09 and s12 ischemic-heart-disease-10 (reproducible tenderness does not exclude ACS in a patient with risk factors). q1 and q3 both keyed diabetes, and the q2 key broke the grammar of its options. | New case: chest pressure 4 days into confirmed influenza A. Influenza as a short-term MI trigger, blaming the cough is unreliable, premature family history defined, sweating favours ischemia. |
| chest-pain-33 | re-rebuilt | Same story and decisions as s50 shock-34 (myocarditis after a viral illness, low voltage, raised troponin) and close to s28 chest-pain-23. Vague stem ("troponin is elevated", "heart rate is fast for his level of distress"). In q4 the explanation called every distractor "similarly unreliable", so all five options were defensible. | New case: NSTE-ACS in a 38-year-old with 29 years of type 1 diabetes. Diabetes duration as the risk factor, diagnosis, sublingual nitroglycerin for ongoing pain, young age does not exclude ACS. |
| chest-pain-35 | re-rebuilt | Copies signed-off s15 pulmonary-edema-01 (72-year-old, bolt upright, sweating, single words, hypertension, IV nitroglycerin and NIV). SCAPE is also covered by s15 pulmonary-edema-08, s42 ischemic-heart-disease-38 and s48 pulmonary-edema-21 and 35. The only SCAPE source (Sharma and colleagues, J Acute Med 2026) could not be found and is treated as unverifiable. q4 distractors were strawmen. | New case: chest pressure in a man with 20 years of treated HIV. ACS first, ECG within 10 minutes, serial high-sensitivity troponin, HIV as a risk factor despite viral suppression. SCAPE source removed. |
| chest-pain-38 | re-rebuilt | Still copies s05 chest-pain-07 and s12 ischemic-heart-disease-10 (relief after an antacid and lidocaine mixture), the copy it was rebuilt to fix, and overlaps s28 chest-pain-47 in the same batch. q2 claimed "sweating", which the stem never gave. | New case: new exertional angina in a masters cyclist with a calcium score of 410. Fitness does not exclude coronary disease, new angina is higher risk, normal troponins and ECG do not exclude stenosis, the calcium score as the risk factor. |
| chest-pain-43 | re-rebuilt | Same keyed decisions as signed-off s05 cva-09 (interscapular pain, then a stroke deficit, pulse differential, aortic imaging before tenecteplase). Also overlaps s35 ems-30. | New case: atrioesophageal fistula 3 weeks after atrial fibrillation ablation. The ablation history, the diagnosis, and why one normal CT does not exclude it (and why endoscopy is avoided). |
| chest-pain-45 | fixed | The scenario is original (no fluoropyrimidine case anywhere else in the bank). q1 distractors were strawmen. q2 claimed "exertional-type tightness" (not in the stem) and that fluorouracil "commonly" causes vasospasm. q3 had two near-duplicate distractors ("continue", "restart") and a vasopressor strawman. | q1 options now use real features (active cancer, age, hypertension). q2 explanation corrected, and the stem now says she is not short of breath. q3 now offers capecitabine and IV metoprolol, each rejected for a true reason. The stem now names the running 46-hour pump. |
| chest-pain-46 | re-rebuilt | The scenario was original but the questions were beyond repair. q1 had strawmen (seasonal allergies, coffee, weight training). q2 keyed a normal D-dimer in a septic patient, which is implausible and not the teaching point, and it cited the ESC PE guideline. | Same diagnosis (right-sided endocarditis with septic emboli), rewritten stem and questions: injection drug use as the risk factor, one negative culture on amoxicillin does not exclude endocarditis, three culture sets then IV vancomycin before echo. The stem avoids the wording of s41 infectious-diseases-18. |

Counts: 11 re-rebuilt, 1 fixed, 0 pass as submitted.

### Defects common to the writer's s28 rebuilds

- Every rebuilt stem ended in the filler "There is no rash." It is removed.
- Several stems gave no concrete values ("troponin is elevated", "first troponin is normal" with no number, "heart rate rises on standing").
- In "which statement is correct" items the four distractors were restatements of "it excludes ACS", with explanations such as "the other statements wrongly treat ...". None gave a reason at the level of detail the key had.

### Key changes

Every re-rebuilt SAMP has new questions and keys. Each question keeps its original key feature number, and each SAMP keeps its question count and question kinds. chest-pain-45 keeps its keys. Its q1 key text changed from "Tightness during her infusion" to "Pain during the infusion", and the key position moved from 4 to 3.

### Sources verified

- Desai MY and colleagues, radiation-associated cardiac disease, JACC 2019: https://www.jacc.org/doi/10.1016/j.jacc.2019.07.006
- Th'ng F, Rao KA, Huang PY, acupuncture-related pneumothorax, Int J Emerg Med 2022: https://pmc.ncbi.nlm.nih.gov/articles/PMC9465868/
- Lazar HL and colleagues, sternal wound infections, J Thorac Cardiovasc Surg 2016: https://pubmed.ncbi.nlm.nih.gov/27555340/
- Anand SS and colleagues, SHARE, Lancet 2000: https://www.thelancet.com/journals/lancet/article/PIIS0140673600025022/abstract
- Hsu NY and colleagues, spontaneous hemopneumothorax, Ann Thorac Surg 2005: https://pubmed.ncbi.nlm.nih.gov/16242469/
- Kwong JC and colleagues, MI after influenza, N Engl J Med 2018: https://www.nejm.org/doi/full/10.1056/NEJMoa1702090
- Freiberg MS and colleagues, HIV and acute MI, JAMA Intern Med 2013: https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1659742
- Aengevaeren VL and colleagues, exercise volume and coronary atherosclerosis, Circulation 2017: https://www.ahajournals.org/doi/10.1161/circulationaha.117.027834
- Han HC and colleagues, atrioesophageal fistula, Circ Arrhythm Electrophysiol 2017: https://www.ahajournals.org/doi/10.1161/circep.117.005579
- Removed as unverifiable: Sharma A, Bhardwaj BB, Arora P, SCAPE, J Acute Med 2026. No record was found. Also removed as no longer cited: Rhinehardt Wellens 2002, the fourth universal definition of MI, Caforio myocarditis 2013, Baggish anabolic steroids 2017.

### Checks

SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts passes (699 tests). npx tsc --noEmit -p . passes. The key-position gate for the batch passes after rebalancing four keys: 32 q2, 33 q4, 38 q1 and 43 q3.

### For the physician (s28)

- All 11 re-rebuilt SAMPs need a second independent check before sign-off.
- chest-pain-17 q4: enoxaparin 1 mg/kg SC (68 mg) as the added treatment for NSTE-ACS after ASA. Please confirm your local choice of anticoagulant (enoxaparin, fondaparinux or unfractionated heparin).
- chest-pain-21 q2: empiric vancomycin with gram-negative cover for post-sternotomy mediastinitis. Please confirm against local antibiograms.
- chest-pain-30 q3: cannabis smoking keyed as the pneumothorax risk factor. The evidence is weaker than for tobacco. Please confirm, or change the key to tobacco.
- chest-pain-33 q1: the explanation relies on the CCS 2021 dyslipidemia guideline treating long-standing type 1 diabetes as a statin-indicated condition.
- chest-pain-38 q4: a coronary calcium score above 400 is described as extensive atherosclerosis at high risk.
- chest-pain-43 (atrioesophageal fistula) is uncommon. Please confirm it suits exam practice for CCFP-EM.
- Genre balance: s28 now has no aortic dissection or tamponade case. Both are well covered elsewhere (s05 chest-pain-01, cva-09, ems-30, and s50 shock), and new dissection cases kept colliding with them.

## Review: s32

Independent review of the 20 rebuilt s32 SAMPs under the rebuild review brief. Both lenses were applied, and each scenario was searched by meaning across the whole bank, signed-off s01 to s18 included. All edits are in src/samps/s32/loc.ts. Every SAMP stays reviewed: false.

Checks: npx tsc --noEmit -p . shows no s32 errors. SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts passes (675 tests), which includes the bank-wide near duplicate stem gate.

### Verdicts

| id | verdict | defect found | what changed |
| --- | --- | --- | --- |
| loc-17 | re-rebuilt | Copied signed-off s07 loc-15 (older woman found on the floor of her cold apartment in January, found by a neighbour) and the keyed decisions of signed-off environmental-05 (low-reading rectal probe, J waves, rewarming a perfusing bradycardia). q1 tested temperature measurement under KF5, and the vitals already gave the rectal reading. | New case: dialysis disequilibrium syndrome after a first hemodialysis session. GCS scoring (KF5), refusing to blame post-dialysis fatigue (KF4), hypertonic saline after CT (KF2), component GCS and pupil monitoring (KF5). Source Mistry 2019. |
| loc-18 | fixed | The distractor "Ceftriaxone as the only treatment" was a qualifier strawman. The explanation said "possible hemodialysis" when Haberle 2019 advises dialysis at once for a neonatal ammonia above 500 micromol/L. The stem had filler. | Distractor now "Empiric antibiotics alone" (key indexes now 0, 2, 6). Explanation states urgent dialysis at 620 micromol/L. Filler sentence removed. |
| loc-19 | re-rebuilt | Copied signed-off s18 tox-04 (58-year-old man, verapamil overdose, raised glucose) and the keyed sequence of signed-off s16 shock-11 (calcium, high-dose insulin, norepinephrine). | New case: acute bilirubin encephalopathy in a 4-day-old at a community hospital. Diagnosis, intensive phototherapy, urgent exchange transfusion, IVIG while transfer is delayed. Source CPS 2025 hyperbilirubinemia statement. |
| loc-20 | fixed | The "missed his last two sessions" story repeated airway-12, ems-36 and pulmonary-edema-04. In q3 the distractor "Asterixis on examination" was defensible, because it is a sign of uremic encephalopathy, which is itself an indication for dialysis. | Now stage 5 kidney disease before dialysis has started, which fits the CSN initiation guideline. The asterixis distractor is now "Mild ankle edema", with that finding added to the stem and a true reason in the explanation. Title changed. |
| loc-21 | re-rebuilt | Copied the keyed decision of s19 abdominal-pain-27 (alcoholic ketoacidosis treated with dextrose, saline and thiamine). The q2 options and explanation were copied word for word in loc-45 q3. q3 had four strawman options. Glucose 3.8 mmol/L was called low-normal. "Normal saline alone" had no reason given. | New case: hypoglycemia in a long-term care resident without diabetes. IV dextrose (KF2), GCS scoring (KF5), not blaming dementia and looking for a medication error (KF4). Source Diabetes Canada 2023. |
| loc-22 | re-rebuilt | Copied signed-off s07 loc-10: a 2-year-old girl, the grandmother's medicines, 2 mm pupils, the grandmother's medication list as the keyed collateral, and clonidine treatment. | New case: Shiga toxin hemolytic uremic syndrome with encephalopathy in a 4-year-old. Red cell transfusion, exposure history, dialysis, lorazepam for status. Sources Walsh and Johnson 2018, Brophy 2012. |
| loc-24 | re-rebuilt | Copied s34 delirium-agitation-20 (a young woman with anti-NMDA receptor encephalitis, ovarian mass, MRI and LP, lorazepam). Also, the q1 lead-in cued the answer ("organic causes" with mostly psychiatric options), "recent flu-like illness" was a defensible distractor (a common prodrome) and the explanation gave no reasons for its distractors. | New case: acute stroke in a 15-year-old with HbSS whose drowsiness was blamed on hydromorphone. CT first, prompt transfusion within 2 hours, baseline from her mother, reassessment before blaming the opioid. Source ASH 2020. |
| loc-26 | fixed | q4 used absurd strawmen (the colour of her clothing, her favourite television show). | Plausible distractors (advance directive, baseline BP, vaccination date, bowel pattern) with true reasons. Key position is unchanged. |
| loc-27 | re-rebuilt | Copied s53 tox-20 (carbamazepine for trigeminal neuralgia, multiple-dose charcoal, then hemodialysis). The q2 explanation named options that did not exist (tablet colour, hobbies, vaccination timing). The q2 key repeated a fact the stem already gave. The q3 prompt said "limit absorption" but the key enhances elimination. | New case: phenytoin toxicity after fluconazole (CYP2C9). Diagnosis, asking about falls, holding phenytoin, removing the interaction. Source Goldfrank antiepileptics. |
| loc-28 | re-rebuilt | Copied signed-off s18 tox-13: a toddler girl, an open bottle of iron tablets, bloody vomiting, the same pulse of 148, radiopaque tablets and deferoxamine. This is the same collision for which shock-45 was rejected. | New case: acute disseminated encephalomyelitis in a 6-year-old. MRI brain and spine, high-dose methylprednisolone, serial component GCS. Source Pohl 2016. |
| loc-29 | re-rebuilt | Copied s53 tox-35 and signed-off ems-06 (a partial response to naloxone explained by xylazine, shelter or park washroom, wounds). The q2 explanation named xylazine before q3 asked for the explanation. | New case: adrenal crisis 10 days after stopping long-term prednisone. Saline bolus, hydrocortisone with cortisol and cultures (menu), and adrenal suppression rather than Addison disease, shown by the normal potassium. Source Endocrine Society 2016. |
| loc-31 | re-rebuilt | Copied the keyed decisions of signed-off s16 seizures-14, s11 headache-05 and s41 infectious-diseases-24 (herpes simplex encephalitis, empiric IV acyclovir, CSF PCR). | New case: West Nile neuroinvasive disease with acute flaccid weakness in rural Manitoba. Diagnosis, CSF West Nile IgM, and a low CSF glucose ratio as the finding that points elsewhere. Source Petersen 2013. |
| loc-32 | re-rebuilt | The patient story copied s46 pediatric-fever-43 (an 18-month-old boy with a runny nose and a fever of 39.4°C). The keyed decisions (benzodiazepine first for pediatric status, exclude meningitis) repeat signed-off s16 seizures-02. Oral acetaminophen and rectal paracetamol were the same drug in two options. IV access was assumed but not stated. | New case: intracranial hemorrhage from late vitamin K deficiency bleeding in a 7-week-old whose parents declined vitamin K. CT, IV vitamin K plus factor replacement, infant GCS. Sources CPS and CFPC 2018, Neurocritical Care Society reversal 2016. |
| loc-33 | fixed | q4 used absurd strawmen (clothing, school subjects, music). The CPS citation listed a nonexistent author ("Kispal L") and the wrong DOI (pxae047). The SAHM DOI was wrong (.010). | Plausible distractors with true reasons. Citation corrected to Coret M, Vyver E, Harrison M, et al. with doi 10.1093/pch/pxae037. SAHM doi corrected to 10.1016/j.jadohealth.2022.08.006. |
| loc-38 | re-rebuilt | Copied s53 tox-36 (benzocaine throat spray, headache, breathlessness, blue lips, methemoglobinemia, methylene blue). | New case: Sheehan syndrome 5 weeks after a postpartum hemorrhage. Diagnosis, hydrocortisone before thyroid hormone, pituitary hormone testing. Sources Karaca 2016, Endocrine Society 2016. |
| loc-40 | re-rebuilt | Copied signed-off s07 loc-03 (an older adult with diabetes and kidney disease, sulfonylurea hypoglycemia, octreotide, admission). q1 used absurd strawmen (glucose meter brand, cereal). | New case: seizure from free water hyponatremia in a 5-month-old fed diluted formula. Feeding history, 3% saline 2 mL/kg, stopping free water with sodium monitoring, admission. Source Moritz and Ayus 2010. |
| loc-41 | fixed | q1 and q2 used absurd strawmen (shirt colour, shoe size, pop music, car colour). The cited AAN 2015 guideline covers recurrence risk and drug treatment, not the witness history or CT that q1 to q3 test. | Plausible distractors with true reasons. q1 to q3 now cite NICE NG217 (2022). The q4 overlap with loc-26 (nonconvulsive status) is noted for the physician below. |
| loc-42 | re-rebuilt | Copied signed-off s18 tox-11 (a teenage boy brought by friends with an anticholinergic toxidrome, then benzodiazepines, cooling and physostigmine). The menu also held a strawman ("Withhold all monitoring"). | New case: hyperviscosity syndrome with a paraprotein. Diagnosis, a menu of initial measures (plasma exchange, fluids, electrophoresis, delay red cells), and urgent transfer for apheresis. Source Gertz 2018. |
| loc-43 | fixed | The q3 explanation gave a reason about aminoglycosides, but the distractor was penicillin and metronidazole. Filler "There is no rash". | The explanation now gives a true reason for each distractor. Filler removed. |
| loc-45 | re-rebuilt | Copied the patient story and keyed decision of loc-21 in the same batch (assumed drunk, deep breathing, sweet breath, check a gas before blaming alcohol), with q3 identical word for word to loc-21 q2. The new-onset DKA story also repeated s01 abdominal-pain-06. The strawman options repeated the loc-17 q2 pattern. | New case: beer potomania with a sodium of 106 mmol/L in a man assumed to be drunk. A low ethanol level argues against intoxication, electrolytes first, and GCS with a link to the risk of overcorrection. Sources Sanghvi 2007, Goldfrank ethanol. |

Counts: pass 0, fixed 6 (loc-18, 20, 26, 33, 41, 43), re-rebuilt 14 (loc-17, 19, 21, 22, 24, 27, 28, 29, 31, 32, 38, 40, 42, 45).

Every re-rebuilt SAMP keeps its id, topic, question count and each question's key feature number. Question kinds are unchanged except loc-45 q1, which the writer had already changed from menu to single. Version is now 3. The re-rebuilt SAMPs need a second check.

### Sources verified

Each new or retained citation was confirmed by DOI, publisher page or PubMed record.
- Mistry 2019, IJNRD, doi 10.2147/IJNRD.S165925
- Ng et al. CPS hyperbilirubinemia 2025, doi 10.1093/pch/pxaf034. Confirmed: exchange for any sign of ABE, and IVIG 0.5 to 1 g/kg when an exchange cannot be done promptly.
- Walsh and Johnson 2018, Arch Dis Child, doi 10.1136/archdischild-2016-311377
- DeBaun et al. ASH 2020, doi 10.1182/bloodadvances.2019001142. Confirmed: prompt transfusion within 2 hours, simple transfusion when Hb is 85 g/L or less, tPA only for adults.
- Pohl et al. 2016, Neurology, doi 10.1212/WNL.0000000000002825
- Petersen et al. 2013, JAMA, doi 10.1001/jama.2013.8042
- Ng and Loewy, CPS and CFPC vitamin K 2018 (cps.ca)
- Karaca et al. 2016, Nat Rev Dis Primers (nature.com nrdp201692)
- Fleseriu et al. 2016, JCEM (academic.oup.com)
- Moritz and Ayus 2010, Pediatr Nephrol, doi 10.1007/s00467-009-1323-6
- Gertz 2018, Blood, doi 10.1182/blood-2018-06-846816
- Sanghvi et al. 2007, AJKD (ajkd.org)
- NICE NG217 2022
- Retained and confirmed: Haberle 2019 (doi 10.1002/jimd.12100), Nesrallah 2014 CSN (doi 10.1503/cmaj.130363), Arnon 2006 NEJM (doi 10.1056/NEJMoa051926), Coret 2024 CPS (corrected), SAHM 2022 (corrected DOI).
- Rejected: Koren 2006 Lancet, a codeine and breastfed neonate case considered for loc-17. It now carries an expression of concern, so it was not used.

### For the physician

- loc-17: hypertonic saline or mannitol for dialysis disequilibrium rests on a narrative review (Mistry 2019). No Canadian guideline exists.
- loc-19: bilirubin of 468 micromol/L at 37 weeks. Confirm the CPS 2025 exchange threshold figure for day 4. Albumin is framed as "not a routine treatment". Check that this matches the 2025 statement.
- loc-22: lorazepam 0.1 mg/kg (1.7 mg for 17 kg). Red cell transfusion is keyed at a hemoglobin of 58 g/L in a drowsy child. Antibiotics are framed as not recommended for Shiga toxin E. coli.
- loc-24: ASH 2020 lets the type of transfusion depend on patient factors. The key says "Prompt blood transfusion", not exchange.
- loc-27: the phenytoin range of 40 to 80 micromol/L and the fluconazole interaction rest on Goldfrank. Hemodialysis was deliberately left out of the options.
- loc-28: methylprednisolone 30 mg/kg daily to a maximum of 1 g for 3 to 5 days.
- loc-29 and loc-38 both key hydrocortisone 100 mg IV. The rest of their decisions differ (adrenal suppression from steroid withdrawal versus Sheehan syndrome with hydrocortisone before thyroid hormone).
- loc-32: the reversal source is the adult Neurocritical Care Society guideline. Pediatric vitamin K and PCC dosing is left out of the key. Please confirm.
- loc-40: 3% saline 2 mL/kg (13.6 mL for 6.8 kg) per Moritz and Ayus. No correction-rate number is keyed.
- loc-41 q4 (consider nonconvulsive status after a prolonged postictal state) overlaps loc-26 in teaching point but not in patient story. Kept, low confidence.
- The batch is now heavier in pediatrics (loc-19, 22, 24, 28, 32, 40 are children or infants). Most free, non-toxicology causes of decreased consciousness left in the bank were pediatric.
- The rebuilt set avoids toxicology because s18 and s53 already cover almost every common toxidrome and antidote.

## Second check: s28

Independent second review of the 12 re-rebuilt s28 SAMPs and the fixed chest-pain-45. Both lenses, a check of every citation against PubMed, and a search of the whole working tree by meaning. Files touched: src/samps/s28/chest-pain.ts only. Every SAMP stays reviewed: false. No key changed its answer except where a question was replaced (33 q4) or options were reworded, as listed below.

A note on cueing. Mock exams show every question of a SAMP at once (src/screens/Mocks.tsx), so a later question can give away an earlier key. Practice mode shows one question at a time with no way back.

### Verdicts

| id | verdict | defect found | what changed |
| --- | --- | --- | --- |
| chest-pain-17 | fixed | q1 offered "Premenopausal status", and the explanation relied on it, but the stem never said so. q3 had the batch hedge cue (see below). | Stem adds "Her menstrual periods are regular." q1 explanation reworded. q3 key is now "It assessed function, not coronary lumens", position 0 to 1. |
| chest-pain-18 | fixed | The q4 update ("absent lung sliding with a lung point") gave away the q3 key (bedside ultrasound) in mock mode. The q3 explanation said ultrasound finds apical pneumothoraces that X-ray misses. The apex is where ultrasound is weakest. q4 had the hedge cue. | q4 update removed. The q3 claim now says ultrasound is more sensitive than X-ray for a small pneumothorax. q4 key is now "It misses some small air leaks", position 0 to 3, with new true reasons for each distractor. |
| chest-pain-21 | fixed | The only source (Lazar 2016, AATS) covers prevention and debridement. It does not support the empiric vancomycin claim or the CT claim. | Added Abu-Omar Y and colleagues, EACTS mediastinitis consensus, Eur J Cardiothorac Surg 2017 (doi 10.1093/ejcts/ezw326), which names contrast CT as the test of choice and vancomycin as the usual first-line drug. q2 and q3 now cite it, and their explanations follow its wording. |
| chest-pain-22 | fixed (minor) | q2 said "female sex at 66" does not lower risk, but never said why age and sex together add less than the key. | q2 explanation reason corrected. |
| chest-pain-29 | fixed | The q4 prompt ("support a cardiac cause") gave away the q1 key in mock mode. q2 had the hedge cue. | q4 prompt now asks what points to "a medical cause rather than an injury from the fall". q2 key is now "It explains only the local soreness", position 1 to 2. |
| chest-pain-30 | fixed | In q3, "His age of 24 years" could be defended, because spontaneous pneumothorax peaks in young adults. Its stated reason ("not modifiable") did not answer the question. The option "Sitting at a desk all day" was not in the stem. q2 had the hedge cue. | q3: age replaced by "No history of chest injury", and the stem now says he sits at a desk all day. The distractor reasons are rewritten, including that sitting raises venous thromboembolism risk, not pneumothorax risk. q2 key is now "It lags behind acute blood loss", position 0 to 1. |
| chest-pain-32 | fixed (minor) | q2 had the hedge cue. | One distractor is replaced by the hedged but wrong "It still leaves reflux most likely", with a reason. The key position moves from 4 to 3. |
| chest-pain-33 | fixed | The q2 explanation used "no vomiting or abdominal pain", which the stem never gave. q4 repeated s42 ischemic-heart-disease-43 q4 (a 38-year-old man with exertional onset, keyed "his age does not exclude ACS"). | q2 explanation now rejects ketoacidosis on facts that hold. q4 is replaced with a new key feature 5 question: partial relief after juice for a presumed low does not exclude ACS. The key is "Continue the ACS pathway", and the distractors (dextrose, recheck glucose, suspend the pump) each have a true reason. |
| chest-pain-35 | pass | None. The HIV claim matches Freiberg 2013 (HR 1.39 with HIV-1 RNA below 500 copies/mL). | None. |
| chest-pain-38 | fixed | q1 and q3 had the hedge cue. The overlap with s12 ischemic-heart-disease-15 (new exertional angina, normal troponins) is partial. The athlete and calcium score hook is unique. | q1 key is now "Athletes still develop coronary plaque", position 4 to 1. q3 key is now "They exclude infarction, not stenosis" (same position). |
| chest-pain-43 | fixed | The q3 update ("no fistula") and two q3 options named the fistula, which gave away the q2 key in mock mode. | The update now says the scans are reported as normal. q3 options no longer name the diagnosis. The key is "It may need to be repeated", position 3 to 1. Han 2017 supports this: 7 of 120 cases needed repeat testing. |
| chest-pain-45 | fixed (minor) | The q1 prompt said "features of her history", but the "No leg swelling" option is an examination finding. The q3 update (ST elevation relieved by nitroglycerin) hints at the q2 key. That is accepted, because the stem's infusion timing already decides q2. | q1 prompt now says "of her presentation". |
| chest-pain-46 | fixed (minor) | q2 had the hedge cue. The q1 mechanism wording was loose ("reach the tricuspid valve directly"). | q2 distractor "It excludes a bacteremia" replaced by "It still favours a simple pneumonia", with a reason. q1 wording corrected. |

Counts: 1 pass, 12 fixed (4 of them minor), 0 re-rebuilt.

### Batch defect: hedge cue

In 10 "which statement is most accurate" items, the key was the only hedged option ("It does not exclude ...", "It still leaves ... possible"). Every distractor was an over-claim ("confirms", "excludes", "proves", "rules out"). A test-wise candidate who picked the hedged option would have scored 10 of 10 without reading the case. The fix above breaks the pattern: most keys are now positive factual statements, and two items keep a hedged key beside a hedged but wrong distractor.

### Structural cueing accepted

In the ACS-first items (22, 33, 35, and the q1 of 17 and 32), later questions about coronary risk or ACS workup name the diagnosis in mock mode. In each, the stem alone already decides the q1 key (ischemic pain features, ST depression or both). These are left as they are.

### Sources verified (PubMed or DOI)

All 11 new sources exist and match author, journal and year. Desai JACC 2019 (PMID 31416535). Th'ng Int J Emerg Med 2022 (PMID 36096724). Lazar J Thorac Cardiovasc Surg 2016 (PMID 27555340, URL PII S0022-5223(16)30872-8 matches its DOI). Anand SHARE Lancet 2000 (PMID 11071182). Hsu Ann Thorac Surg 2005 (PMID 16242469). Kwong NEJM 2018 (PMID 29365305, incidence ratio 6.05 in the 7 days after a positive test). Freiberg JAMA Intern Med 2013 (PMID 23459863). Aengevaeren Circulation 2017 (PMID 28450347, more calcium above 2000 MET-min/week). Han Circ Arrhythm Electrophysiol 2017 (PMID 29109075, median onset 21 days, CT diagnostic in 68%, 7 needed repeat testing). Baddour Circulation 2015 (PMID 26373316). Lyon ESC cardio-oncology 2022 (doi 10.1093/eurheartj/ehac244). Added: Abu-Omar EACTS mediastinitis 2017 (doi 10.1093/ejcts/ezw326).

### Overlap search

The whole working tree was searched by meaning, including s05 chest-pain, s11, s12 ischemic heart disease, s17 sob, s41, s42 and s50. The search covered mediastinal radiation, acupuncture, sternotomy infection, interpreter and family filtering, a collapse before a fall, hemopneumothorax, influenza, type 1 diabetes, HIV, athletes and calcium scores, ablation, fluoropyrimidines and injection drug endocarditis. The one real copy was 33 q4 against s42 ischemic-heart-disease-43, and it is replaced. 29 q2 shares a key feature 5 teaching point with signed-off s05 chest-pain-09 (tenderness does not exclude ACS). It is kept because the story and the deciding fact differ: the symptoms came before the fall.

### Checks

SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts passes (699 tests), including bank-wide near-duplicate stems. npx tsc --noEmit -p . passes. Single-question key positions across the batch (107 questions) are 20.6%, 24.3%, 22.4%, 15.9% and 16.8%. The key is the single longest option in 24.3% of them.

### For the physician (second check)

- chest-pain-30 q3: cannabis as the keyed risk factor. Reviews of the 2023 BTS guideline link cannabis to apical bullae and advise stopping it. Please confirm.
- chest-pain-17 q4 and 22 q4: the IV metoprolol distractor is rejected as "routine early IV metoprolol is not recommended". Both patients have no heart failure and a systolic pressure above 120 mmHg, so this rests on "routine" rather than on a contraindication.
- chest-pain-33 q4 is new and needs the same sign-off as the other rebuilt questions.

## Second check: s32

Independent second review of the 14 re-rebuilt s32 SAMPs and the 6 in-place fixes. Both lenses were applied. Every citation was checked by DOI through Crossref or by PubMed or Europe PMC, and the key claims were checked against the source text where it was open (CPS 2026 hyperbilirubinemia statement, Provan 2019 ITP consensus, Anderson 2005 porphyria, Newman 2009, WMS 2024 altitude). Each scenario was searched by meaning across the whole working tree, including the uncommitted rebuilds in other batches. All edits are in src/samps/s32/loc.ts. Every SAMP stays reviewed: false.

Checks: SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts passes (675 tests, including the bank-wide near duplicate stem gate). npx tsc --noEmit -p . passes.

### Verdicts

| id | verdict | defect found | what changed |
| --- | --- | --- | --- |
| loc-17 | pass | None. GCS E3 V3 M5 = 11 is correct. Mistry 2019 is real and supports hypertonic saline or mannitol. Dialysis disequilibrium appears elsewhere only as a distractor (seizures-42). | None |
| loc-18 | pass | None. Haberle 2019 is real. The key set and ammonia threshold match. | None |
| loc-19 | fixed | The CPS statement (Ng et al., doi 10.1093/pch/pxaf034) was published in 2026 (online April 2026), not 2025. The content matches: urgent exchange for any sign of acute bilirubin encephalopathy, and IVIG 0.5 to 1 g/kg for isoimmune hemolysis when exchange cannot be done readily. No neonatal bilirubin case elsewhere in the bank. | Citation year corrected to 2026. |
| loc-20 | fixed | Cueing. The q3 prompt ("an indication for urgent dialysis") gave away the q2 key (urgent hemodialysis), and the mock exam shows every question at once. | q3 prompt reworded so that it does not name dialysis. |
| loc-21 | fixed | Story echo with signed-off s07 loc-03 ("Hard to wake this morning": an older woman hard to rouse in the morning, glucose 1.8, dextrose, then a search for the drug cause). The keyed decision in loc-21 (a woman without diabetes, where the cause is not put down to dementia and a medication error is sought) is distinct. The numbers are correct: 50 mL of D50 is 25 g, and GCS E2 V2 M5 = 9. | She is now found slumped after lunch, with a new title. The q3 update is reworded to fit. The shared dextrose teaching point is flagged for the physician below. |
| loc-22 | pass | None. Lorazepam 0.1 mg/kg is 1.7 mg for 17 kg. The HUS facts match Walsh and Johnson 2018. s39 gi-bleed-21 is the STEC prodrome (fluids, no antibiotics, monitor for HUS). loc-22 is established HUS with encephalopathy (transfusion, dialysis, seizure). They are related but have different keys. | None |
| loc-24 | re-rebuilt | Copied s27 cva-21: a child with HbSS and an acute hemiparesis, keyed to prompt transfusion with a simple transfusion because Hb is 85 g/L or less, and the same distractors (alteplase, hydroxyurea, saline bolus). | New case: a 4-year-old with immune thrombocytopenia (platelets 3) and a subdural hemorrhage after a minor bump. CT head (KF1). Platelets with IVIG and IV steroid (KF2). The father's account of her baseline (KF3). Not blaming renewed drowsiness on diphenhydramine premedication, so a repeat CT (KF4). Source Provan 2019. |
| loc-26 | fixed | In q3, "does not respond to a full dose of lorazepam" left "Repeat lorazepam boluses" defensible, because Brophy allows one repeat dose. | Update now says two doses of lorazepam 4 mg IV had no effect. |
| loc-27 | pass | None. 152/80 is about 1.9 times the upper limit. Albumin is normal, so no correction is needed. Fluconazole inhibits CYP2C9. No phenytoin toxicity case elsewhere in the bank. | None |
| loc-28 | pass | None. No ADEM case elsewhere in the bank. Methylprednisolone 30 mg/kg to a maximum of 1 g matches Pohl 2016. | None |
| loc-29 | re-rebuilt | Copied s45 multiple-trauma-45 (a 72-year-old woman with polymyalgia on long-term prednisone, glucocorticoid-induced adrenal insufficiency, hydrocortisone 100 mg IV). It also repeated loc-38 in the same batch (hydrocortisone 100 mg IV, normal potassium separating secondary insufficiency from Addison disease). | New case: parkinsonism-hyperpyrexia syndrome after 48 hours of missed levodopa. NG levodopa-carbidopa (KF2). Menu of cooling, IV crystalloid, serial CK and creatinine (KF2). A head strike on apixaban, so a CT before the new decline is blamed on the syndrome (KF1). Source Newman 2009. |
| loc-31 | re-rebuilt | Copied s40 headache-41, also rebuilt this round: a 71-year-old man in Manitoba in August, his wife, type 2 diabetes, mosquito bites, coarse tremor, a flaccid areflexic left arm, CSF West Nile IgM. The q3 prompt also named the q1 key. | New case: an attack of acute intermittent porphyria after trimethoprim-sulfamethoxazole in a 25-year-old woman with Na 119. Diagnosis, spot urine porphobilinogen, and dark urine on standing as the feature that separates it from lead poisoning (all KF1). Source Anderson 2005. |
| loc-32 | re-rebuilt | Copied s39 gi-bleed-17: a 6 to 7-week-old boy born at home, exclusively breastfed, parents declined vitamin K, drowsy with a full fontanelle, 4.6 kg, pulse 170 to 172, 36.9°C rectal. Same keys: CT head without contrast, then IV vitamin K plus factor replacement, with a skeletal survey distractor. | New case: high-altitude cerebral edema in a climber flown from Mount Logan to Whitehorse. Diagnosis against CO, hyponatremia and SAH (KF1). Dexamethasone 8 mg IV (KF2). GCS E3 V4 M5 = 12 (KF5). Source WMS 2024. s48 pulmonary-edema-27 (HAPE, nifedipine) is related but has a different key. |
| loc-33 | pass | None. Both corrected DOIs resolve (Coret 2024, doi 10.1093/pch/pxae037, and SAHM 2022, doi 10.1016/j.jadohealth.2022.08.006). | None |
| loc-38 | pass | None once loc-29 was rebuilt. The facts in the explanation are all in the stem. Hydrocortisone before thyroid hormone matches Fleseriu 2016. No other Sheehan case in the bank. | None |
| loc-40 | pass | None. 3% saline at 2 mL/kg is 13.6 mL for 6.8 kg. A rise from 118 to 123 in 1 hour is within safe limits. No diluted-formula case elsewhere. seizures-19 (desmopressin) and seizures-32 (propranolol hypoglycemia at 5 months) have different keys. | None |
| loc-41 | fixed | The q1 distractors were still strawmen (vitamin brand, eye exam, childhood vaccinations). | Plausible distractors (family history of migraine, caffeine, exercise, time of last meal) with true reasons. The key is still in position 5. |
| loc-42 | fixed | The q2 explanation said IV fluids "correct dehydration", but the stem gives no finding of dehydration. | Reworded to "keep him well hydrated, because dehydration raises viscosity further". |
| loc-43 | pass | None. | None |
| loc-45 | fixed | Story echo with signed-off s07 loc-01 (a man slumped in a park and labelled drunk). The numbers are correct: 9 mmol/L ethanol is about 41 mg/dL, and GCS E3 V4 M6 = 13. There is no other beer potomania case. seizures-06 only lists potomania among accepted answers. | Setting changed to a bus shelter, with a new title. |

Counts: pass 9 (loc-17, 18, 22, 27, 28, 33, 38, 40, 43), fixed 7 (loc-19, 20, 21, 26, 41, 42, 45), re-rebuilt 4 (loc-24, 29, 31, 32). The re-rebuilt SAMPs keep their id, topic, question count, question kinds and each question's key feature. Version is 4. They need a further check.

Key position balance was restored after the rebuilds. Single keys by position are now 17, 24, 19, 25, 18 of 103.

### Sources verified (new)

- Provan D et al. Blood Advances 2019, doi 10.1182/bloodadvances.2019000812 (PMC6880896). Checked text: IV corticosteroids with IVIG when the count must rise within 24 hours, platelet transfusion not postponed for ICH, plasmapheresis not recommended, no bone marrow examination for typical isolated thrombocytopenia.
- Anderson KE et al. Ann Intern Med 2005, doi 10.7326/0003-4819-142-6-200503150-00010 (PMID 15767622). Checked text: a single-void urine porphobilinogen confirms an attack, hemin is first line, and glucose alone is for mild attacks.
- Newman EJ et al. Neurocrit Care 2009, doi 10.1007/s12028-008-9125-4 (PMID 18712508). Checked text: follows withdrawal of antiparkinson drugs, dopaminergic replacement, and renal failure as a complication.
- Luks AM et al. WMS 2024 update, Wilderness Environ Med 2024, doi 10.1016/j.wem.2023.05.013 (PMID 37833187). Checked text: dexamethasone 8 mg then 4 mg every 6 hours, descent, and oxygen to keep SpO2 above 90%.
- Ng E et al. CPS hyperbilirubinemia, Paediatr Child Health 2026, doi 10.1093/pch/pxaf034. Checked text as above.

### For the physician (second check)

- loc-24: platelets with IVIG and IV methylprednisolone for ITP with a subdural hemorrhage. No doses are keyed. q3 (baseline from the father) cites the GCS source, because Provan does not cover collateral history.
- loc-29: q3 (a CT after a head strike on apixaban) cites Newman, which does not cover imaging. The teaching point on missed levodopa overlaps s08 delirium-agitation-12, where missed levodopa is one contributor to delirium. The syndrome, the keys and the patient differ.
- loc-31: hemin (Panhematin) is available in Canada through Canadian Blood Services. Hemin is not keyed here.
- loc-32: the keys follow a US wilderness society guideline, because no Canadian guideline exists.
- loc-21: IV dextrose 25 g is also keyed in s07 loc-03, and q3 (look for a drug cause) is close to loc-03 q3. Kept at low confidence because the patient has no diabetes and the question tests not blaming dementia.
- loc-26 and loc-41 q4 repeat the nonconvulsive status teaching of signed-off s07 loc-05 (benzodiazepine, second-line drug, EEG, CT and electrolytes). The stories differ. Low confidence.
- Cueing by updates: in loc-27 (phenytoin level), loc-40 (formula mixing) and loc-45 (sodium), a later update reports the result of an earlier keyed history question or test. This matches the CFPC sample style and was left unchanged.
- Other batches: s40 headache-41 and s45 multiple-trauma-45 are uncommitted rebuilds from this round. They were the other halves of the loc-31 and loc-29 collisions and are now free of those collisions.

## Lead note for the physician
- loc-24 (ITP with subdural bleed), loc-29 (parkinsonism-hyperpyrexia), loc-31 (acute intermittent porphyria) and loc-32 (high-altitude cerebral edema) were rebuilt during the second check because concurrent rebuilds collided. Each has had one review. Please read them first.
- loc-32 (HACE) and pulmonary-edema-27 (HAPE) are both altitude illness. They key different decisions (dexamethasone against nifedipine and CPAP). Keep both or drop one.
