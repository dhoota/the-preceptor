# Signed-duplicate rebuild, round 2, label r2j

Ids: loc-05, loc-08, loc-09, loc-10, all in src/samps/s07/loc.ts. Each keeps its id, topic, question count, and each question's kind and key feature. Each is `reviewed: false`, `version: 2`. The file has no META spread, so the fields sit where round 1 put them (`reviewed: false, author: AUTHOR, version: 2`). All four ids were already in src/samps/held-back/r2j.json. That file was not edited. Nothing was committed.

Round 1 failures fixed (docs/reviews/signed-rebuild-g10-review.md):
- loc-05 keyed the EEG and levetiracetam pair of keeper seizures-01. The new story keys no EEG, no benzodiazepine and no second line antiseizure drug.
- loc-08 used naloxone (a D1 repeat) and repeated tox-17 q4. The story was also close to tox-17 and tox-41. The new story has no opioid, no naloxone and no blister pack.
- loc-09 retold signed headache-07 (CVT). The new story has no CVT, no venography and no anticoagulation key.
- loc-10 repeated tox-14 q1 (toddler, relative's pill organizer, pill count). The new story is an adult with an intrathecal pump. There is no pill ingestion.

D1 repeats used: none.

Round 1 source constants that no longer had a user were removed from loc.ts (ERC_POST, ISMP_PACK, TOX_2023, CSBPR_CVT, GUANFACINE_SERIES, GUANFACINE_TODDLER). None of them was in the HEAD file. Six new sources were added.

## Rows

### loc-05 (cluster 69, keeper seizures-01)

| Field | Content |
|---|---|
| Old story (HEAD) | 38-year-old woman with epilepsy, two seizures, IM midazolam, not waking, subtle status. Keys GCS 7, NCSE differential, lorazepam plus levetiracetam, EEG, collateral on adherence |
| Round 1 (failed) | Post-arrest myoclonus. q3 keyed EEG plus a levetiracetam load |
| New story | 6-year-old boy. Two weeks of stomach aches, constipation and irritability, then vomiting, clumsiness, drowsiness and two seizures without waking between them. The family is sanding paint in a 1912 house. Lead encephalopathy with cerebral edema. Blood lead 4.6 umol/L |
| q1 short, loc 5 | GCS 8 (E2 V2 M4), a written description of each response, repeat and chart at intervals (2 of 3) |
| q2 short, loc 1 | Causes that explain both the abdominal symptoms and the falling consciousness: lead encephalopathy, DKA, hypercalcemia, intussusception, uremia or HUS, abdominal sepsis, abusive injury, another ingestion, porphyria (3) |
| q3 menu, seizures 3 (select 1) | Parenteral chelation arranged with the poison centre. Distractors: LP, oral succimer by NG, pyridoxine, repeat the lead level first, whole bowel irrigation |
| q4 short, loc 1 | Findings that call for a second cause: fever or meningism, focal signs or unequal pupils, bruises or retinal hemorrhages, abnormal glucose or ketones, low sodium, failure to improve, a history that does not fit (3) |
| q5 short, loc 3 | Exposure collateral: how the paint is removed, pica, siblings, remedies and kohl and spices and pottery, parental jobs and hobbies, swallowed objects, baseline development, prior lead tests or iron deficiency (3) |
| Sources opened | WHO guideline for the clinical management of exposure to lead, 2021 (IRIS PDF read: recommendation 7.3 for a child with encephalopathy, choice of chelators, "parenteral administration ... safer in encephalopathic patients who have an unprotected airway", GI decontamination, clinical features, sources of exposure). Ontario and Manitoba Poison Centres, Guidelines for stocking emergency antidotes, May 2025 (PDF read: dimercaprol no longer available, DMPS via SAP for lead with encephalopathy). Teasdale GCS aid, 2015 (already in file) |
| Decision search | chelat, dmps, succimer, edta: 0 hits in allkeys.tsv. "blood lead" or "lead encephalopathy" in src/samps: only a distractor in loc-31 (porphyria, s32). pica, paint chip: no lead key. GCS: "GCS 9 (E2 V2 M5)" is keyed in loc-01 and loc-21, so the stem was changed to GCS 8 (E2 V2 M4), which no key uses. hypercalcemia: loc-36 q2 keys treatment, not a differential. intussusception: abdominal-pain-10 q1 and old loc-10 q4 as list items |
| simcheck top 5 | pre-eclampsia-06 0.11/0.11, loc-10 0.11/0.09 (old toddler text), lacerations-09 0.10/0.08, seizures-20 0.09/0.01, loc-09 0.09/0.07 (old text). All cards read. No shared story |
| Keeper probe (markQuestion) | Every seizures-01 keyed answer entered as a line. q1 0/2, q2 0/3, q3 0/1, q4 0/3, q5 0/3. Old loc-05 text: q2 1/3, q4 2/3, others 0 |
| Natural wording probe | "GCS 8, E2 V2 M4" plus "Repeat GCS and pupils every 15 minutes" 2/2. "Lead poisoning", "DKA", "Intussusception" 3/3. "Fever or neck stiffness", "Unequal pupils", "Retinal hemorrhages or bruises" 3/3. "Is he eating paint chips (pica)", "Are siblings affected or tested", "Parents' occupation or hobbies" 3/3 |

### loc-08 (cluster 7, keeper tox-12)

| Field | Content |
|---|---|
| Old story (HEAD) | Carbon monoxide in a February household. Keys CO diagnosis, co-oximetry, 100% oxygen, hyperbaric criteria, household actions |
| Round 1 (failed) | Hydromorphone in a blister pack. Naloxone (D1), and q4 repeated tox-17 q4 |
| New story | 44-year-old woman with uterine leiomyosarcoma, sleepy and muddled with a flapping tremor on day 2 of an ifosfamide infusion from a portable pump that is still running. Ifosfamide encephalopathy |
| q1 short, loc 3 | Collateral: baseline and onset, drugs in the pump and start time, reaction in the first cycle, other new drugs such as aprepitant, fever, intake, headache or seizures or brain metastases, kidney function and albumin (3) |
| q2 single, loc 1 | CT head without contrast before attributing the encephalopathy to the drug. Distractors: LP, ammonia, ifosfamide level, urine drug screen. Key position 0 |
| q3 short, loc 2 | Stop the ifosfamide infusion, IV hydration, replace potassium, recheck glucose, airway care, hold sedating drugs (2). Unacceptable: continue at a lower rate |
| q4 short, tox 4 | Methylene blue 50 mg IV up to 6 times a day, thiamine 100 mg IV every 4 hours, hemodialysis if severe (2) |
| q5 short, loc 1 | Other causes: metastases or hemorrhage, nonconvulsive seizures, sepsis or neutropenia, electrolytes, sedating drugs, hypoglycemia, organ failure, Wernicke, hypoxia or pulmonary embolism (3) |
| Sources opened | BC Cancer Drug Manual, ifosfamide monograph, revised 1 June 2010 (PDF read: encephalopathy 10 to 50%, onset 1 to 4 days, risk factors, "discontinue ifosfamide and institute appropriate supportive therapy", methylene blue, Fanconi syndrome). Torchia A et al. Front Pharmacol 2025, doi 10.3389/fphar.2025.1512966 (full text read via Europe PMC: onset usually within 48 h, clinical diagnosis, aprepitant, methylene blue 50 mg up to 6 times a day, thiamine 100 mg every 4 h, hemodialysis, EEG for NCSE) |
| Decision search | ifosfamide: 0 hits in allkeys.tsv or src/samps outside loc-08. methylene blue: keyed only in tox-36 q2 and sob (s17) for methemoglobinemia, a different indication. thiamine: keyed for Wernicke and alcohol (seizures-13, tox-06, loc-13). CT head as a single key: many loc and cva SAMPs, and round 1 loc-08 q2 passed review with it. naloxone, blister pack, hyperbaric, co-oximetry: not keyed |
| simcheck top 5 | loc-13 0.22/0.19 (cirrhosis with asterixis, shares the differential words), delirium-agitation-04 0.18/0.18, sob-44 0.15/0.01, loc-36 0.14/0.03, loc-09 0.12/0.10 (old text). All cards read. No shared story or key decision |
| Keeper probe | tox-12: q1 1/3, q2 0/1, q3 1/2, q4 0/2, q5 1/3. ems-07: q1 2/3, q3 1/2, q5 1/3. headache-12: q1 2/3, others 0. Old loc-08 text: q1 1/3, q3 1/2, q5 1/3 |
| Natural wording probe | "Stop the ifosfamide infusion", "IV fluids" 2/2. "Disconnect the pump", "Avoid opioids and sedatives" 2/2 (negation scores). "Methylene blue 50 mg IV", "Thiamine 100 mg IV" 2/2. "Continue the infusion at a lower rate" hits the unacceptable item |

### loc-09 (cluster 42, keeper cva-04)

| Field | Content |
|---|---|
| Old story (HEAD) | Basilar occlusion after stopping apixaban. Keys differential, CT plus CTA, thrombolysis doses, labetalol, intubation |
| Round 1 (failed) | CVT with thalamic hemorrhage, a retelling of signed headache-07 |
| New story | 63-year-old woman with lung adenocarcinoma, 10 days after chemotherapy and 5 weeks after a small cerebellar stroke. Sudden drowsiness with aphasia mistaken for confusion, right field loss and left arm drift. Multi-territory embolic strokes from nonbacterial thrombotic endocarditis. Platelets 72 x 10^9/L |
| q1 short, cva 2 | Features that point to stroke: sudden onset, aphasia, right field defect, left arm drift, signs in both hemispheres, active cancer and recent stroke, normal glucose (3) |
| q2 menu, cva 3 (select 2) | Relative exclusions to thrombolysis: ischemic stroke 5 weeks ago, platelets 72 x 10^9/L. Distractors: active cancer, age, ASA, BP 168/92, recent chemotherapy, glucose |
| q3 short, cva 3 | Cancer-linked mechanisms: NBTE, hypercoagulability or DIC, paradoxical embolism, tumour compression or embolism, treatment effects, infective endocarditis (2) |
| q4 single, cva 3 | Nonbacterial thrombotic endocarditis. Distractors: AF cardioembolism (the keeper's answer), infective endocarditis, large artery disease, lacunar disease. Key position 3 |
| q5 short, airway 2 | Features that call for intubation now: GCS 8 and falling, gurgling, vomiting, SpO2 90%, rapid decline (2) |
| Sources opened | CSBPR Acute Stroke Management 7th ed (module PDF, 2022, revised Dec 2025, read: relative exclusion criteria incl. stroke within 3 months and platelets below 100 000, BP target 180/105, glucose 2.7 to 22.2, ABC assessment). CSBPR Secondary Prevention section 11, Cancer Associated Ischemic Stroke, 7th ed updated 2020 (web page read: mechanisms list, standard workup, D-dimer in cancer stroke) |
| Decision search | nonbacterial, marantic, hypercoagulable, Trousseau: 0 hits. platelet count as a thrombolysis exclusion: not keyed. Closest: chest-pain-15 q1 lists "Ischemic stroke within 3 months" among fibrinolysis contraindications for STEMI, and cva-33 q1 keys INR over 1.7 as a lab exclusion. Echocardiography and blood cultures are keyed in cva-34 q2 (endocarditis) and cva-41 and cva-42, so this rebuild does not key them. CVT, venography, LMWH, basilar, CTA, tenecteplase, AF cause: not keyed |
| simcheck top 5 | cva-28 0.16/0.15, sob-11 0.13/0.15, cva-18 0.15/0.06, cva-24 0.14/0.04, gi-bleed-24 0.07/0.14. All cards read. cva-28 shares the blink to threat sign only |
| Keeper probe | cva-04: q1 0/3, q2 0/2, q3 0/2, q4 0/1 (its answer is a distractor here), q5 1/2. Old loc-09 text: 0 on every question |
| Natural wording probe | "Sudden onset", "Aphasia", "Right homonymous hemianopia" 3/3. "Marantic endocarditis", "Trousseau hypercoagulable state" 2/2. "GCS 8", "Gurgling, cannot protect her airway" 2/2 |

### loc-10 (cluster 70, keeper tox-14)

| Field | Content |
|---|---|
| Old story (HEAD) | 2-year-old at her grandmother's, gliclazide and clonidine. Keys medication list and pill count, D10W, octreotide, other toddler causes |
| Round 1 (failed on the keeper rule) | 3-year-old with a brother's guanfacine. q1 repeated tox-14 q1 |
| New story | 29-year-old man with cerebral palsy and an intrathecal baclofen pump, sleepy, floppy, drooling, RR 8, SpO2 89%, 35.4°C, after the pump was refilled and its dose raised that morning. Intrathecal baclofen overdose |
| q1 short, loc 3 | Collateral: baseline alertness and tone, last refill or reprogramming, other sedating drugs incl. oral baclofen, pump alarms or surgery, seizure history, recent illness, fall (3) |
| q2 short, loc 2 | Bag valve mask ventilation and oxygen, intubate if needed, pump team to stop the pump and empty the reservoir, withdraw 30 to 40 mL CSF by LP, IV fluid, warming (2) |
| q3 short, tox 5 | Apnea, seizures, deepening coma, aspiration, hypotension or bradycardia, hypothermia, withdrawal if delivery is not restored, CSF leak or infection (3) |
| q4 short, loc 1 | Findings for another cause: fever or pump site inflammation, focal signs, seizure activity, signs of a fall, abnormal glucose or sodium or CO2, no improvement, pinpoint pupils (3) |
| Sources opened | Novartis Canada, Lioresal Intrathecal product monograph, revised May 2020 (PDF read: overdose signs, causes incl. programming errors and catheter access, treatment steps incl. removing residual solution, intubation, CSF 30 to 40 mL, withdrawal syndrome, device complications incl. pocket infection and meningitis, pediatric statement that led to an adult patient) |
| Decision search | intrathecal, reservoir, CSF withdrawal: 0 hits in allkeys.tsv. baclofen: environmental-38 (intrathecal withdrawal in heat, keys restore intrathecal delivery) and tox-24 (oral baclofen in kidney failure, keys supportive care, respiratory depression, hemodialysis). Respiratory depression is one of eight items in q3 here, with required 3, so tox-24 q3 alone does not decide it. medication list, pill count, dextrose, octreotide: not keyed |
| simcheck top 5 | environmental-38 0.17/0.11, loc-05 0.14/0.11 (old text), pediatric-fever-24 0.13/0.02, pre-eclampsia-06 0.10/0.13, loc-43 0.12/0.01. All cards read. environmental-38 shares the pump but tells withdrawal, not overdose |
| Keeper probe | tox-14: q1 1/3, q2 0/2, q3 0/3, q4 0/3. Old loc-10 text: q1 2/3, q2 1/2, q3 2/3, q4 2/3 |
| Natural wording probe | "When was the pump last refilled", "His baseline function", "Any oral baclofen or other sedatives" 3/3. "BVM ventilation", "Call the pump team to empty the reservoir" 2/2. "Intubate", "LP to drain 30-40 mL CSF" 2/2. "Apnea", "Seizures", "Baclofen withdrawal if the pump stays off" 3/3. "Fever or redness at the pump site", "Focal weakness", "No improvement despite emptying the pump" 3/3 |

Probe method: every keyed answer of the keeper and of each cluster member was entered as a candidate line against each new question, using the engine's markQuestion. The score shown is the most those answers can earn. Match phrases were tightened wherever the old text of the same id scored full marks through loose words ("bolus", "meningitis", "injury", "glucose"). loc-05 q2 was reframed so it no longer asks for the old generic differential.

## Checks

- `SAMP_BATCH=s07 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 512 passed.
- `npx tsc --noEmit -p .`: 0 errors.
- Only the loc-05, loc-08, loc-09 and loc-10 blocks and the source constants changed in loc.ts (block by block comparison with HEAD).
- House style: no semicolons, em dashes or en dashes in any string of the four SAMPs. Stems are 85 to 117 words.
- Re-grep of src/samps just before finishing: ifosfamide, intrathecal baclofen overdose, blood lead or lead encephalopathy, and marantic or nonbacterial endocarditis appear nowhere else as a story. No other writer converges.

## For the physician

- loc-05 q3 keeps key feature seizures 3, but the keyed action is cause-directed (parenteral chelation), not an antiseizure drug. That was deliberate, because every antiseizure step is already keeper seizures-01. Please confirm that "treat status epilepticus promptly by treating its cause" fits seizures 3. If not, the question would map better to seizures 4.
- loc-05 q3 relies on Canadian availability. The Ontario and Manitoba 2025 stocking guide says dimercaprol is no longer available and lists DMPS through the Special Access Program for lead with encephalopathy. It does not list calcium disodium EDTA. The key therefore says "parenteral chelation arranged with the poison centre" and does not name an agent. The WHO 2021 guideline (strong recommendation, very low certainty) supports urgent parenteral chelation.
- loc-05 blood lead is 4.6 umol/L (about 95 mcg/dL). The WHO thresholds are in mcg/dL, and no threshold is stated in the SAMP.
- loc-08 q4: evidence for methylene blue and thiamine in ifosfamide encephalopathy is from case reports and series. The BC Cancer monograph is dated 2010. The 2025 EURACAN review is the current source. Please confirm this is suitable for the CCFP-EM level.
- loc-09 q2: the CSBPR list is of relative exclusions that call for judgement. The question asks which findings are relative exclusions, not whether to treat. The stroke neurologist's decision against thrombolysis is given in the q3 update.
- loc-09 q4 uses echocardiography and MRI results from the next day, to test the mechanism. It does not key the echo itself, because cva-34 already keys it.
- loc-10: the Lioresal monograph says intrathecal use under 18 is not studied, so the patient is an adult. CSF withdrawal and pump emptying need the pump team. The key credits calling them.
- No D1 repeats. No id needed a "cannot".
- No command was blocked by the permission system.
