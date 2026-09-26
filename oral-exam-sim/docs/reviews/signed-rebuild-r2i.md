# Signed-duplicate rebuilds, round 2, group r2i

Writer report for anaphylaxis-02, anaphylaxis-06, arrhythmia-04 and arrhythmia-06. Files: src/samps/s03/anaphylaxis.ts and src/samps/s03/arrhythmia.ts. Nothing was committed.

## Summary

| Id | Result | New story | D1 repeats |
|---|---|---|---|
| anaphylaxis-02 | Rebuilt | Carcinoid crisis the day after a first lutetium-177 dotatate treatment | None |
| anaphylaxis-06 | Rebuilt | Fish anaphylaxis mistaken for a fish bone, with a CT scan booked | None |
| arrhythmia-04 | Rebuilt | Clenbuterol (beta agonist) overdose in a bodybuilder | None |
| arrhythmia-06 | Cannot | Not rebuilt. See its row | Not applicable |

Each rebuilt SAMP keeps its id, topic, question count, and each question's kind and key feature. Each has `reviewed: false` and `version: 2` after the `...base` spread. Titles are neutral.

## Rows

### anaphylaxis-02 (cluster 1, keeper anaphylaxis-01)

- **Old signed story:** a 57-year-old woman on metoprolol collapses at a seafood restaurant. Keys: shock differential, IM epinephrine, glucagon, POCUS, ECG and chest X-ray.
- **Round 1 story (failed):** protamine anaphylaxis during heparin reversal. Its q3 repeated cluster 1's key (IM epinephrine, then an infusion), which is the keeper's own decision.
- **New story:** a 66-year-old man with a metastatic small bowel neuroendocrine tumour has flushing, wheeze, lip and eyelid swelling and hypotension the day after his first lutetium-177 dotatate treatment. His lanreotide was stopped for the treatment. He ate tuna 2 hours earlier. IM epinephrine from paramedics did not help.
- **Keyed decisions:**
  - q1 (short, anaphylaxis KF 1, 3 of 4): carcinoid crisis, anaphylaxis, scombroid from the tuna, mastocytosis.
  - q2 (single, shock KF 5): carcinoid crisis after lutetium therapy (key position 2).
  - q3 (short, shock KF 8): octreotide IV, 500 to 1 000 mcg bolus repeated, then an infusion. A depot (LAR) is unacceptable.
  - q4 (short, shock KF 6, 2 of 7): read the bedside echo. Carcinoid heart disease of the tricuspid valve, RV volume overload, a full IVC that cannot guide fluid, cautious small fluid amounts, a small vigorous LV that fits distributive shock, no tamponade, phenylephrine or vasopressin if a vasopressor is needed. A rapid 1 to 2 L bolus is unacceptable.
- **Sources opened:**
  - Grozinsky-Glasberg S, et al. ENETS 2022 guidance paper for carcinoid syndrome and carcinoid heart disease. J Neuroendocrinol. 2022. https://doi.org/10.1111/jne.13146 (full text, PMC9539661). Checked: the crisis definition, PRRT as a trigger, labial and periocular edema, IV octreotide bolus and infusion, sympathomimetics used with caution, phenylephrine and vasopressin preferred, the CHD valve findings, and fluid titrated to cardiac function.
  - Sozio SJ, et al. Carcinoid crisis in lutetium-177-dotatate therapy. EJNMMI Rep. 2024. https://doi.org/10.1186/s41824-024-00216-6 (full text, PMC11393224). Checked: IV octreotide is the most important step, a 500 to 1 000 mcg bolus repeated every 5 minutes, then an infusion, onset within 12 to 48 hours of the first dose, midgut and liver metastases as risk factors, LAR as monthly IM prophylaxis, and long-acting analogues stopped 4 weeks before therapy.
  - Cardona V, et al. WAO anaphylaxis guidance 2020 (full text, PMC7607509). Checked: criterion 1 includes flushing, and Table 3 lists carcinoid syndrome, scombroidosis (usually more than one person affected) and mastocytosis as mimics.
- **Decision search** (allkeys.tsv and src/samps): "carcinoid", "neuroendocrine", "lutetium", "PRRT", "scombroid", "mastocytosis" and "mast cell" have 0 keyed hits. "octreotide" is keyed only for sulfonylurea hypoglycemia (cva-01, loc-03, loc-10, delirium-agitation-07) and variceal bleeding (gi-bleed-01, gi-bleed-11). "tricuspid" is keyed only as an endocarditis murmur (infectious-diseases-13). "IVC" is keyed as a plethoric IVC finding in PE and tamponade (shock-09, dvt-pe-08, shock-15), never as unreliable because of regurgitation. Vasopressin as a list item: anaphylaxis-13 q2, shock-09 q3, shock-22 q2 (other reasons).
- **simcheck top 5 (full / keys):** shock-09 0.12/0.14, anaphylaxis-31 0.08/0.13, dvt-pe-08 0.09/0.12, sob-11 0.11/0.12, shock-35 0.09/0.12.
- **markQuestion probe** against every accepted answer in the packet (keeper anaphylaxis-01, anaphylaxis-15, asthma-copd-13, shock-07, sob-15 and the old anaphylaxis-02), best set of `required` lines:
  - q1: 2/3 ("Anaphylaxis" and anaphylaxis-15's "Known mastocytosis"). Not full. Natural wording scores 3/3.
  - q2: the keyed option is keyed nowhere in the packet.
  - q3: 0/1. "Octreotide 500 mcg IV bolus" and "IV octreotide, not the depot" score 1/1.
  - q4: 1/2 (shock-07's "Add norepinephrine or vasopressin"). The keeper's "Rapid crystalloid bolus of 1 to 2 L" is rejected as unacceptable. "Avoid large fluid boluses, give cautious small boluses" scores.

### anaphylaxis-06 (cluster 10, keeper airway-03)

- **Old signed story:** a 68-year-old man on ramipril wakes with lip and tongue swelling (ACE inhibitor angioedema).
- **Round 1 story (failed):** soy anaphylaxis in a birch-sensitized woman. Its q3 keyed the double setup, which repeats the keeper airway-03 q4.
- **New story:** a 46-year-old man felt a scratch in his throat during a halibut dinner and thought he had swallowed a bone. Minutes later he had a tight throat, itchy palms and light-headedness. His lips itched after cod 2 years ago. He is hoarse and swallowing hurts, with no hives, flushing, stridor or wheeze. Triage has booked a CT of the neck.
- **Keyed decisions:**
  - q1 (short, anaphylaxis KF 2): anaphylaxis to fish. "Impacted bone" alone is unacceptable.
  - q2 (short, anaphylaxis KF 2, 2 of 6): features that favour anaphylaxis over a bone: hoarse voice, itchy palms, light-headedness with tachycardia, earlier reaction to cod, diffuse rather than point discomfort, onset within minutes.
  - q3 (short, airway KF 2, 2 of 6): the CT plan once his airway worsens after IM epinephrine. Do not send him to CT now. Keep him in the resuscitation room. Avoid lying him flat. Keep him sitting up. If a scan is still needed, secure the airway first, or a physician with airway skills goes with him. "Send him to CT now" is unacceptable.
- **Sources opened:**
  - WAO 2020 (PMC7607509). Checked: criterion 2 (laryngeal involvement after a probable allergen, even without skin signs), the footnote listing vocal change and odynophagia, and sitting when breathing is difficult.
  - Law JA, et al. CAFG 2021 part 2. Can J Anesth. 2021. https://doi.org/10.1007/s12630-021-02008-z (full text, PMC8186352). Checked: "adverse location (remote location, difficult access to patient)" and "help or backup unavailable" as contextual factors in airway management. It does not name CT scanners.
- **Decision search:** "fish bone", "impacted bone", "halibut", "cod", "scanner", "delay CT" and "lying flat" (as a positive airway key) have no matching keyed decision. Nearest: anaphylaxis-27 q1 "Avoid all finned fish" (discharge advice), and multiple-patients-02 q4 "Move him now to the resuscitation room" (a triage item for a different decision). Diagnosing anaphylaxis from laryngeal symptoms without skin signs is also keyed in anaphylaxis-04, anaphylaxis-19 and anaphylaxis-36 q1. Here the tested reasoning is the fish-bone mimic. That was also true of the round 1 soy q1, which the g10 review passed.
- **simcheck top 5 (full / keys):** asthma-copd-13 0.21/0.15, sob-15 0.21/0.15, anaphylaxis-36 0.20/0.08, anaphylaxis-27 0.16/0.05, anaphylaxis-19 0.15/0.03.
- **markQuestion probe** against the packet (keeper airway-03, sob-01 and the old anaphylaxis-06):
  - q1: 0/1.
  - q2: 1/2 (sob-01's "...any swelling or voice change").
  - q3: 1/2 (the keeper's "Sitting upright to maintain his airway"). The keeper's awake intubation, cricothyroid marking, kit and call-for-help answers score nothing.
  - Natural wording with negations scores full on every question: "Anaphylaxis to fish, not an impacted bone", "Cancel the CT, do not send him to the scanner", "Don't send him to CT", "Avoid lying flat in the scanner", "Intubate first if CT still needed".

### arrhythmia-04 (cluster 30, keeper tox-03)

- **Old signed story:** amitriptyline overdose with a wide QRS. Keys: sodium channel ECG signs, bicarbonate, a benzodiazepine for the seizure, bicarbonate targets.
- **Round 1 story (failed):** citalopram overdose with torsades. Its q2 keyed magnesium, potassium and pacing, which repeats arrhythmia-05 q2 and q3.
- **New story:** a 24-year-old man took 1 000 mcg of clenbuterol bought online to lose weight before a bodybuilding competition. He has tachycardia, hypokalemia, hyperglycemia, raised lactate, lateral ST depression, a QTc of 520 ms and ventricular couplets.
- **Keyed decisions:**
  - q1 (short, arrhythmia KF 2, 2 of 3): PVCs and couplets, ST depression, QTc above 500 ms.
  - q2 (short, arrhythmia KF 6): for adenosine-resistant SVT from a beta agonist, a short-acting beta blocker such as esmolol 0.5 mg/kg (about 42 mg at 84 kg). Diltiazem or verapamil is unacceptable. A beta-agonist catecholamine is dangerous.
  - q3 (short, tox KF 5, 2 of 5): myocardial injury, rhabdomyolysis, recurrent tachyarrhythmia such as AF, prolonged toxicity (half-life 25 to 39 hours), low phosphate and magnesium.
  - q4 (short, tox KF 4): for hypotension on esmolol, phenylephrine or vasopressin. Epinephrine, dopamine, dobutamine or isoproterenol is dangerous. Norepinephrine is unacceptable.
- **Sources opened:**
  - Griswold MK, et al. Clin Pract Cases Emerg Med. 2017. https://doi.org/10.5811/cpcem.2017.2.33318 (full text, PMC5965169). Checked: beta antagonists for hypotension, esmolol 0.5 mg/kg then 50 mcg/kg/min, half-life 25 to 39 hours, up to 72 hours of treatment, rhabdomyolysis, MI and dysrhythmias, low phosphate and magnesium, a beta-agonist vasopressor is detrimental, and epinephrine is withheld in arrest.
  - Daubert GP, et al. J Med Toxicol. 2007. https://doi.org/10.1007/BF03160909. Only the structured abstract was opened (PMC3550084, PDF only). Checked: SVT at 254 resistant to adenosine and diltiazem, esmolol recommended, AF at 16 hours.
  - Lan K, et al. HCA Healthc J Med. 2020. https://doi.org/10.36518/2689-0216.1086. Only the abstract was opened (PMC10324766). Checked: "β-blockers or phenylephrine may be used to give hemodynamic support".
  - Drew BJ, et al. AHA/ACCF prevention of torsade de pointes. Circulation. 2010 (scratchpad drew.txt, PMC3056123). Checked: QTc above 500 ms gives 2 to 3 times the risk, ectopy and couplets as harbingers, hypokalemia as a risk factor.
- **Decision search:** "clenbuterol", "beta agonist toxicity", "half-life" and "couplet" have 0 keyed hits. Beta blockers are keyed for dissection (chest-pain-01, cva-09), thyroid storm (environmental-04) and congenital long QT (arrhythmia-13, seizures-07), never for beta-agonist poisoning. Phenylephrine is keyed for post-induction or propofol hypotension (airway-04, airway-07, analgesia-sedation-13, airway-47, pulmonary-edema-14). "Ventricular ectopy" is one item in environmental-05 q5 (hypothermia ECG). Rhabdomyolysis appears in several complication lists (delirium-agitation-03, environmental-01, tox-09). tox-16 (signed) is a hydroxychloroquine overdose, which is why hydroxychloroquine was not used.
- **simcheck top 5 (full / keys):** arrhythmia-27 0.16/0.09, arrhythmia-24 0.15/0.03, shock-39 0.14/0.03, tox-16 0.14/0.06, arrhythmia-08 0.11/0.13.
- **markQuestion probe** against the packet (keeper tox-03 and the old arrhythmia-04):
  - q1: 1/2 (tox-03's "QTc prolongation").
  - q2: 0/1. tox-03's "Norepinephrine or epinephrine infusion" is dangerous and scores zero.
  - q3: 1/2 (the old arrhythmia-04 "Resolution of dysrhythmia").
  - q4: 0/1 (the same pressor answer is dangerous).
  - Natural wording scores full: "Esmolol 0.5 mg/kg IV bolus then infusion, avoid diltiazem", "Phenylephrine, pure alpha agonist, avoid epinephrine", "Vasopressin infusion".

### arrhythmia-06 (cluster 13, keeper environmental-06): cannot

- **Why not:**
  - Its preserved key features are arrhythmia KF 6 (single) and three short questions on environmental KF 3 (rewarm effectively, track core temperature with a reliable probe, keep resuscitating until warm).
  - The bank already keys 49 environmental KF 3 questions. They cover probes and probe sites, every rewarming method, Swiss staging, rewarming goals, ECLS criteria and transfer, avalanche, immersion, intermittent CPR, glucose, rewarming hypotension, AF and failure to rewarm.
  - The keeper and the old arrhythmia-06 add the whole hypothermic VF and ECLS pathway.
  - Only two fresh decisions were found: checking for signs of life for up to 1 minute (ERC 2025, Paal 2022), and ERC drug handling at 30 to 35°C. Three short environmental KF 3 questions cannot be filled without a repeat, and D1 is frozen.
- **What happened to the text:** this report says "cannot", as the coordinator asked. Before the coordinator's correction arrived, I replaced only the arrhythmia-06 block with its HEAD text, using a block-level edit. I did not touch the rest of the file, run git checkout or restore, or overwrite a whole file. The block is now byte for byte HEAD (signed text, `reviewed: true`, version 1). The round 1 text is no longer in the working tree.
- **Blocked command:** I then tried to remove arrhythmia-06 from src/samps/held-back/r2i.json. The permission system denied it ("Modify Shared Resources"), and I did not retry. The denied command ran my block restore and then a Python edit that popped `arrhythmia-06` from `src/samps/held-back/r2i.json` and rewrote the file. I wanted this because the coordinator's first round 2 update asked me to remove a "cannot" id from the held-back list. r2i.json is unchanged and still lists arrhythmia-06.
- **Effect:** `SAMP_BATCH=s03` has one failing test, "arrhythmia-06 is marked reviewed only if a physician signed it off". The block is HEAD text with `reviewed: true`, but the id is still held back. The coordinator must do one of two things: remove arrhythmia-06 from r2i.json, or put back the round 1 text.

## Checks

- `SAMP_BATCH=s03 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 435 passed, 1 failed. The failure is arrhythmia-06, as explained above. All tests for anaphylaxis-02, anaphylaxis-06 and arrhythmia-04 pass. So do the bank-wide near-duplicate stem test and the s03 key position balance.
- `npx tsc --noEmit -p .`: 0 errors. One run failed on another writer's transient file, tests/zz-r2f-val.test.ts, which does not exist. The next run was clean.
- Block by block diff against HEAD, using the scratchpad/r2i/blocks.py helper:
  - anaphylaxis.ts: only anaphylaxis-02 and anaphylaxis-06 differ. Text outside the SAMP blocks is identical to HEAD.
  - arrhythmia.ts: only arrhythmia-04 differs. arrhythmia-01, arrhythmia-06 and arrhythmia-15 match HEAD. So does anaphylaxis-15.
- New sources are inline objects inside the SAMP blocks, so the file headers are unchanged.
- Other writers: a fresh grep of src/samps for carcinoid crisis, lutetium, clenbuterol, halibut, fish bone and "scanner is ready" finds only these two files.

## For the physician

- **anaphylaxis-02:**
  - The key is carcinoid crisis rather than anaphylaxis, although his findings meet the WAO clinical criteria for anaphylaxis. The question tests keeping anaphylaxis on the list (q1) and then choosing the most likely cause from the context: the day after PRRT, lanreotide stopped, no hives, a familiar food, a spouse who is well, and no response to IM epinephrine. Please confirm that this is a fair single best answer.
  - q3 accepts octreotide IV at any dose. The 500 to 1 000 mcg bolus comes from Sozio 2024, a narrative review. ENETS gives only an infusion of 50 then 100 to 200 mcg/h, with no bolus dose.
  - In q4, the ENETS fluid advice was written for amino acid infusions given with PRRT. The explanation says so and extends the caution to this crisis. The claim that a full IVC reflects tricuspid regurgitation here is physiology, not a sourced statement.
- **anaphylaxis-06:**
  - q3 rests on CAFG's "adverse location" and WAO's advice to sit when breathing is difficult. No guideline says in words "do not send an evolving airway to CT".
  - "Keep him sitting up" is an accepted item, and it also matches the keeper's answer "Sitting upright", worth 1 of 2.
- **arrhythmia-04:**
  - The clenbuterol evidence is case reports and case-based reviews (Griswold 2017, Daubert 2007, Lan 2020). Canadian patients get clenbuterol online. It is not approved for human use in Canada. That point is not in the stem or keys.
  - q4 marks norepinephrine unacceptable (not dangerous) because of its beta 1 effect. Griswold warns only against "vasopressor therapy with additional β-agonism". Please confirm, or move norepinephrine to accepted.
  - Vasopressin is accepted as a non-beta vasopressor on pharmacology alone. Lan names phenylephrine only.
- **arrhythmia-06:** the rebuild direction for cluster 13 seems exhausted by the environmental topic's expansion batches. Please decide whether it keeps its signed text or gets new key features.
