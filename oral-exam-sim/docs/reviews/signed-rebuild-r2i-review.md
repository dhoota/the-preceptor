# Review of signed-duplicate rebuild group r2i

Reviewer only. Nothing was edited except this file. Nothing was committed. Every fix below is for the writer, and the revision needs a fresh review.

Writer report: docs/reviews/signed-rebuild-r2i.md. Packets: scratchpad/round2/anaphylaxis-02.md, anaphylaxis-06.md, arrhythmia-04.md.

## Verdicts

| SAMP | Verdict | Reason |
|---|---|---|
| anaphylaxis-02 | FIX NEEDED (writer, match phrases only) | Story, keys and sources hold up. No D1 repeat. q4 misses common correct wording |
| anaphylaxis-06 | FAIL | q1 repeats a signed decision (anaphylaxis-36 q1) that the writer did not claim. q2 lets anaphylaxis-04's keyed answers score full. q1 and q3 also need match fixes |
| arrhythmia-04 | FIX NEEDED (writer, match phrases and a dangerous flag) | q4 zeroes correct answers as dangerous, and the candidate cannot override that. q3 gives torsades and VT no marks |
| arrhythmia-06 | Confirmed equal to HEAD | Still listed in held-back/r2i.json, so one s03 test fails |

## Byte-for-byte checks

I wrote my own block splitter (scratchpad/r2i-rev/eq2.py) and did not reuse the writer's helper. It compares each `  {` ... `  },` SAMP block in the working tree against `git show HEAD:` and hashes both.

| Block | Result |
|---|---|
| arrhythmia-06 | Equal to HEAD. 6397 bytes both sides, sha1 301ec47e4a. Signed text, `reviewed: true`, version 1 |
| arrhythmia-01 | Equal to HEAD (sha1 7e2d624f9b) |
| arrhythmia-15 | Equal to HEAD (sha1 601e17f7b5) |
| anaphylaxis-15 | Equal to HEAD (sha1 b5508ac3ee) |

- Both files have 15 blocks in the same order as HEAD.
- The only differing blocks are anaphylaxis-02, anaphylaxis-06 and arrhythmia-04.
- Every `git diff -U0` hunk falls inside one of those three blocks. The file headers and source constants are untouched.

## Structure

- All three keep their id, topic, alsoTopics, question count, and each question's kind and keyFeature.
- Each has `reviewed: false` and `version: 2` after `...base`. Each is in held-back/r2i.json.
- arrhythmia-04 changed `required` on q3 (1 to 2) and q4 (2 to 1). That is within the rebuild and is fine.
- Titles are neutral. The house-style grep found no em or en dashes and no semicolons in the three blocks.
- **Inline sources.** The five new sources (enets-2022, sozio-2024, daubert-2007, griswold-2017, lan-2020) are inline objects in each block's `sources`.
  - The s03 files have always used named constants in the header, so this is new for s03.
  - It is established elsewhere in the bank. For example, s19/abdominal-pain.ts has many inline sources, and s07/critical-appraisal.ts mixes the two styles.
  - `validateSamp` checks sources per SAMP only (every cited id exists and every listed source is cited). The five ids are unique in src.
  - Keeping sources inline keeps the diff inside the rebuilt blocks. I accept it on its merits.
- **Tests.**
  - `SAMP_BATCH=s03 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 435 passed, 1 failed. The failure is "arrhythmia-06 is marked reviewed only if a physician signed it off".
  - `npx tsc --noEmit -p .`: clean.

## Sources opened and checked

- **ENETS 2022** (Grozinsky-Glasberg, full text). It checks out:
  - the crisis definition (abrupt flushing, BP shifts, profuse diarrhoea, bronchospasm)
  - "severe labial and periocular oedema"
  - PRRT as an occasional trigger
  - sympathomimetics used cautiously
  - phenylephrine and vasopressin as "the preferred vasopressors in this context", where the context is a CS patient who needs sympathomimetics
  - CHD with TR, RV volume overload and right heart failure
  - volume "titrated to the cardiac function". This refers to amino acid infusions, as the writer says.
- **Sozio 2024** (full text). It checks out: IV octreotide as "the single most important step", a 500 to 1000 µg IV bolus repeated every 5 minutes, and onset within 12 to 48 h of the first dose. The bolus figure cites Tapia Rico, so it comes second hand through a narrative review.
- **WAO 2020.** It checks out:
  - Table 3 lists carcinoid syndrome, scombroidosis and mastocytosis
  - histamine fish poisoning usually affects more than one person
  - laryngeal symptoms include vocal change and odynophagia
  - a sitting position helps with respiratory distress.
- **CAFG 2021 part 2.** "Adverse location" is listed as a contextual factor. CT is not named.
- **Griswold 2017** (full text). It checks out:
  - esmolol 0.5 mg/kg then 50 mcg/kg/min
  - half-life 25 to 39 h and up to 72 h of treatment
  - rhabdomyolysis, MI and dysrhythmias
  - low phosphate and magnesium
  - "vasopressor therapy with additional β-agonism is detrimental"
  - epinephrine withheld in arrest.
  Norepinephrine and phenylephrine are not mentioned.
- **Daubert 2007.** I opened the abstract myself through Europe PMC. SVT at 254 did not respond to adenosine or diltiazem, esmolol was recommended, and AF followed at 16 h. The writer's saved full-text files for Daubert and Lan are server error stubs, which fits "abstract only".
- **Lan 2020.** Abstract opened. It says "β-blockers or phenylephrine may be used to give hemodynamic support".
- **Drew 2010** (AHA/ACCF). It checks out: QTc above 500 ms with 2 to 3 times the risk, new ventricular ectopy and couplets as harbingers, and hypokalemia as a risk factor.
- **Arithmetic.** 25 × 40 mcg = 1 000 mcg. 0.5 mg/kg × 84 kg = 42 mg.

## Duplicate checks

- **Convergence with other writers.** A fresh grep of src/samps for carcinoid, lutetium, clenbuterol, halibut and fish bone finds only these two files. The one s51 hit is an unrelated pheochromocytoma explanation.
- **simcheck** (my own text dumps in scratchpad/r2i-rev):

| SAMP | Top matches (full / keys) |
|---|---|
| anaphylaxis-02 | shock-29 0.06/0.15, anaphylaxis-31 0.09/0.15, shock-09 0.11/0.14 |
| anaphylaxis-06 | asthma-copd-13 0.21/0.16, sob-15 0.21/0.15, anaphylaxis-36 0.20/0.09 |
| arrhythmia-04 | arrhythmia-24 0.15/0.04, arrhythmia-27 0.14/0.08, tox-16 0.13/0.08 |

- **Keeper probe.** I ran markQuestion on every `text:` string and option in each packet, dropping lines that hit an unacceptable answer, then took the best coverage for each question.
  - anaphylaxis-02: q1 at most 2 of 3 (anaphylaxis, plus mastocytosis from anaphylaxis-15). "Scombroid poisoning" in the packet is a distractor in asthma-copd-13, not a key. q3 scores 0. q4 at most 1 of 2 (shock-07's vasopressin).
  - anaphylaxis-06: q1 0. q2 1 of 2. q3 1 of 2 (the keeper airway-03's "Sitting upright").
  - arrhythmia-04: q1 1 of 2 (tox-03's "QTc prolongation"). q2 hits "Beta blocker", but in tox-03 that is an unacceptable answer, not a key, so it is not a repeat. q3 1 of 2. q4 0.
  - No keeper scores full marks on any question.

## Rows

### anaphylaxis-02 (cluster 1, keeper anaphylaxis-01)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Anaphylaxis KF 1 fits. WAO Table 3 supports the mimics. There are no keyed hits for carcinoid, scombroid or mastocytosis in allkeys or src. Required 3 of 4 is demanding. "Carcinoid, anaphylaxis, septic shock" scores 2 of 3. Acceptable, but see the physician note |
| q2 | PASS (physician to confirm) | See the specific item below |
| q3 | PASS (physician to confirm dose) | Octreotide for carcinoid crisis is keyed nowhere. Octreotide is keyed only for sulfonylurea hypoglycemia and varices, for different reasons. The key accepts octreotide IV at any dose, so the Sozio bolus figure never decides a mark. It appears only in the model answer and explanation. "Octreotide" with no route scores 0, which is fair because the prompt asks for the route. LAR and depot answers are correctly unacceptable, and "not the depot" is handled by negation |
| q4 | FIX (writer, match phrases) | Shock KF 6 fits. The decision is not a repeat, but see the overlap note below. Correct wording that scores nothing: "Small boluses" and "Cautious boluses", because the plural "boluses" tokenises to "boluse" and misses "small bolus". Also "Severe TR", "Dilated RV" and "Stop fluids". Add phrases such as "small boluse", "cautious boluse", "cautious bolus", "tr", "severe tr", "dilated rv", "rv dilat" (as "rv dilated" and "rv dilation"), "right ventricular dilation", "no large" and "not large". These are non-dangerous lines the candidate can override, so this is a quality fix, not a safety one |

- **Overlap note for q4.** Signed answers can reach 2 of 2 without recognising carcinoid heart disease. shock-27 q1 "Hyperdynamic LV, dilated RV and plethoric IVC" hits `lv`. shock-42 q1 "norepinephrine early, cautious fluid" hits `fluid`.
  - The PE decision "cautious fluid for a failing RV" (shock-09 q2, dvt-pe-08 q5) is one of seven items here, not the keyed decision, so I do not count it under D1.
  - The writer should consider whether `lv` and `tamponade` should stay. With them, "Hyperdynamic LV, no effusion" scores full while missing the valve and the fluid point.
  - Trimming items changes the accept list, so this is the writer's and physician's call, not a condition of this review.

**Specific item: carcinoid crisis keyed although WAO anaphylaxis criteria are met.** I judge it a fair single best answer.
- The question asks for the most likely cause, not whether the findings meet criteria. q1 already rewards keeping anaphylaxis on the list.
- The context points one way: the day after a first Lu-177 dotatate dose (Sozio: most crises occur within 12 to 48 h), SSA stopped, midgut NET with liver metastases, watery diarrhoea since treatment, no hives, a familiar food, a spouse who is well (WAO: histamine fish poisoning usually affects more than one person), and no response to IM epinephrine.
- ENETS names labial and periocular oedema as crisis signs, so the lip and eyelid swelling is not a cue toward allergy that the key ignores.
- The options are alphabetical, and the key is not the longest option.

**Specific item: octreotide bolus from a narrative review.**
- Sozio is a narrative review. The 500 to 1 000 mcg figure is secondary (Tapia Rico). ENETS gives no bolus dose.
- Because the accept list does not depend on the dose, this does not affect scoring.
- Optional wording fix: in the explanation or model answer, say that bolus doses vary between sources.

### anaphylaxis-06 (cluster 10, keeper airway-03)

| Q | Verdict | Notes |
|---|---|---|
| q1 | FAIL (unclaimed D1 repeat, plus a match fix) | Details below |
| q2 | FAIL (overlap, same decision as anaphylaxis-04 q2) | Details below |
| q3 | FIX (writer, match phrases) and physician to confirm | Details below |

**q1 details.**
- The keyed decision is "diagnose anaphylaxis from laryngeal involvement after a probable food allergen, with no skin signs, under WAO criterion 2" (anaphylaxis KF 2).
- Signed anaphylaxis-36 q1 keys the same decision on the same KF for the same stated reason, from a close stem: 35 minutes after eating, a tight throat, light-headedness, a hoarse voice, an earlier reaction to a related food, and no hives, flushing or lip swelling. anaphylaxis-19 q1 and anaphylaxis-04 q1 key the same criterion.
- The fish-bone mimic changes the distractor, not the reason. The explanation's first two sentences are the anaphylaxis-36 rationale. simcheck puts anaphylaxis-36 third at 0.20 full.
- The writer's report notes these hits but claims no repeat, citing the g10 review's pass of the round 1 q2. I do not follow that precedent here. It does not address anaphylaxis-36, which is signed and nearly the same case.
- **Separate defect.** The `unacceptable` match "foreign body" rejects correct lines such as "Anaphylaxis, but rule out a foreign body", which scores 0. The unacceptable text says "as the only cause", but the match cannot enforce "only". A line that names only a bone already scores 0, so this unacceptable entry adds only false rejections. Remove it, or keep only phrases that cannot sit beside a correct diagnosis.

**q2 details.**
- anaphylaxis-04 q2 (signed) keys "Tachycardia rather than bradycardia" and "Hoarse voice suggesting laryngeal involvement" as features that favour anaphylaxis over a mimic. Here, those two lines score 2 of 2 (hits on `circulation` and `voice`).
- The new discriminators (the earlier reaction to cod, diffuse rather than point discomfort, itchy palms) are sound, but the question can be answered in full with anaphylaxis-04's answers.
- Fixing this means changing the accept list, so it goes back to the writer.

**q3 details.**
- Airway KF 2 fits. No keyed decision anywhere says to keep an evolving airway out of CT. The nearest are the "No CT" answers in abdominal and PE questions, for other reasons. The keeper's awake intubation and cricothyroid marking answers score 0, and "Sitting upright" scores 1 of 2.
- Correct wording that scores nothing: "Cancel the scan", "Keep him out of the scanner" and "Don't leave the department". The `noct` phrases all need the token "ct". Add scan and scanner forms such as "cancel scan", "no scan", "not scanner", "out of scanner" and "leave department".
- "Send him to CT with a physician escort" is rejected by the unacceptable "send to ct", while `escort` is accepted as a conditional. That is consistent enough.
- **Specific item: CT avoidance is inferred.** Yes. CAFG's "adverse location" and WAO's sitting position are general statements, and no source says in words "do not scan an evolving airway". The inference is sound and standard practice. With one physician confirmation I would accept it. It is not a reason for the FAIL.

**What the writer needs to change.** q1 and q2 need a decision this bank has not keyed. For example, keep the fish-bone story but test what only it can test:
- why the triage plan (CT for a bone) is the wrong first step
- or the risk of a missed hypopharyngeal foreign body after the anaphylaxis is treated.

Alternatively, the coordinator may claim q1 as D1 row 20, the last slot, because KF 2 is literal CFPC wording. q2 would still need its overlap removed, because two repeats cannot fit in one slot.

### arrhythmia-04 (cluster 30, keeper tox-03)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Arrhythmia KF 2 fits, and Drew supports each item. "QTc above 500 ms" overlaps with signed arrhythmia-32 q1 ("QTc of 552 ms") and arrhythmia-46 q3 ("QTc of 510 ms"). It is one of three items with 2 required, and those answers reach only 1 of 2, so I do not count it as a D1 repeat. The physician should know about it |
| q2 | PASS, minor fix advised | Arrhythmia KF 6 fits. Beta blockade for beta-agonist poisoning is keyed nowhere, and the keeper marks beta blockers unacceptable for TCA. The key matches Daubert (abstract) and Griswold's dose. Advisory: "Esmolol rather than diltiazem" and "Beta blocker instead of a calcium channel blocker" score 0 because "rather" and "instead" are not negations. These lines can be overridden, so this is low risk. Consider adding "rather than" and "instead of" forms, or narrowing the diltiazem match |
| q3 | FIX (writer, match phrases) | Tox KF 5 fits. "Torsades de pointes", "Ventricular tachycardia", "Polymorphic VT" and "VF" all score 0. q1 teaches that this patient is at risk of torsades, so this is inconsistent. Add "torsade", "ventricular tachycardia", "vt", "vf", "ventricular fibrillation" and "polymorphic" to `rhythm` |
| q4 | FIX (writer, dangerous flag or update wording) and physician to confirm | Details below |

**q4 details.**
- Tox KF 4 fits. Phenylephrine for beta-agonist hypotension is keyed nowhere. Phenylephrine appears in the bank only for post-induction hypotension.
- **The defect.** The update says a colleague suggests epinephrine, and the prompt asks "and why?". The natural answers "Phenylephrine rather than epinephrine", "Phenylephrine instead of epinephrine because of beta effects", "Phenylephrine since epinephrine adds beta stimulation" and "Phenylephrine. Epinephrine would worsen tachycardia" are all flagged **dangerous** and zero the question. `markShort` does not let the candidate override a dangerous line.
- **The fix.** Do one or both of these, and keep the keyed decision:
  - Remove the colleague's epinephrine suggestion from the update.
  - Make the epinephrine group `unacceptable` without `dangerous`, so a mis-flag can be overridden. The line still scores 0.
- The same trap exists in q2, but it is less likely there because q2 does not mention epinephrine.
- **Specific item: norepinephrine unacceptable.** This is defensible but thinly sourced.
  - Griswold warns only against "vasopressor therapy with additional β-agonism". Norepinephrine has β1 but no meaningful β2 effect, and it would work against the esmolol that controls his rate.
  - Lan's abstract names phenylephrine only. Vasopressin rests on pharmacology.
  - Because unacceptable lines can be overridden, the practical effect on marks is small. The physician should confirm, or move norepinephrine to neither accepted nor unacceptable.
- **Also for the physician.** Griswold's patient's hypotension resolved on esmolol alone. Some toxicologists would escalate beta blockade, for example with nonselective propranolol for β2 vasodilation, before adding a vasopressor. The prompt asks for a vasopressor, so this does not affect the key, but the physician should see it.
- **Specific item: evidence base.** Case reports and case-based reviews are the only evidence that exists for clenbuterol. Daubert and Lan were opened as abstracts only, and I opened both abstracts myself. Every claim the SAMP makes from them is in the abstract. The one claim that needs more than an abstract, the esmolol dose, comes from Griswold's full text. Acceptable.

### arrhythmia-06

- The block equals HEAD byte for byte (see above).
- **Unrequested change.** The writer restored the block to HEAD before the coordinator's correction arrived. On its merits this is fine, because the result is exactly the signed text.
- **Consequence.** held-back/r2i.json still lists arrhythmia-06. The coordinator must remove that entry, or s03 keeps the failing reviewed/sign-off test. I did not edit it.

## Unrequested changes

- Inline sources: accepted on merits (see Structure).
- arrhythmia-06 restored to HEAD: accepted on merits. The held-back entry is still to be resolved.
- No other changes outside the three blocks.

## For the physician

- **anaphylaxis-02 q2.** Carcinoid crisis is keyed over anaphylaxis although the WAO criteria are met. I think it is a fair single best answer from the context. Please confirm.
- **anaphylaxis-02 q3.** The 500 to 1 000 mcg octreotide bolus comes from a narrative review (Sozio, citing Tapia Rico). ENETS gives only an infusion. The key accepts any IV dose.
- **anaphylaxis-02 q4.** The fluid caution extends ENETS's advice for PRRT amino acid infusions. The claim that a full IVC reflects TR is physiology, not a quoted source.
- **anaphylaxis-06.** It fails on duplication, not on medicine. q3's "do not take an evolving airway to CT" is inferred from CAFG and WAO. Please confirm the principle for the rebuild.
- **arrhythmia-04 q4.** Please confirm norepinephrine as unacceptable. Please also consider whether escalating beta blockade deserves mention, since Griswold's hypotension resolved on esmolol alone.
- **arrhythmia-04 q1.** QTc above 500 ms as a torsades warning is also keyed in arrhythmia-32 and arrhythmia-46. Here it is one item of three.
- **arrhythmia-06.** It keeps its signed text. The writer judges cluster 13 exhausted for environmental KF 3. Please decide whether it stays or gets new key features.
