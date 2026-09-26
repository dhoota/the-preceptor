# Independent review, signed-duplicate rebuild group r2f (round 2)

Files: `src/samps/s09/ems.ts` and `src/samps/s09/environmental.ts`. Held back in `src/samps/held-back/r2f.json`. Writer report: `docs/reviews/signed-rebuild-r2f.md`. Round 1 review: `docs/reviews/signed-rebuild-g06-review.md`. Rules: scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md.

**No edits were made.** Every fix below is for a writer, and the revision needs a fresh review. Probe scripts are in scratchpad/r2frev/ (probe.ts, dump.ts, blk.py), run with `npx vite-node`. They call markQuestion on the live SAMP objects.

## Summary

| SAMP | Verdict | Reason |
|---|---|---|
| ems-08 | **FAIL** (fixable inside the writer's decision) | q2 credits any line that contains "now". q3 gives a reason for rejecting milk and water that the NCPC guideline contradicts, and its two keys are the only options that say "honey". The story converges with the in-progress sob-03 text, so it lands only if sob-03 goes back to HEAD. |
| ems-12 | **FAIL** | q5 lets the answers of signed ems-05 q3 score full marks (the same release advice after a refused transport, for the same reason). q5 also cites the wrong source, and its match order loses credit. |
| environmental-05 | **FAIL** (fixable inside the writer's decision) | q1 gives full marks to a normothermic answer ("feel the carotid pulse", "look at the monitor"), which is the answer the question exists to reject. |
| environmental-07 | **FAIL** | q1's accept list leaves out the guideline's first prerequisite. q3 keys a method that Paal calls of uncertain indication, for a patient who is rewarming, which is not a failure to rewarm by Paal's own signs. q4 gives 0 to "not for 24 hours". |
| ems-10 | Not reviewed | Writer reported "cannot". The working-tree block is the failed round 1 text, byte-identical to the writer's start snapshot (scratchpad/r2f/ems.before.ts). It must be restored from HEAD. |

D1: I found no D1 repeat in any keyed decision of the four, apart from the ems-12 q5 overlap described below. The writer added no D1 rows (docs/DECISIONS.md has no diff lines for these ids). D1 stays at 19 of 20.

## Landed SAMPs

- ems-01: working-tree block equals HEAD byte for byte (9360 bytes).
- ems-07: working-tree block equals HEAD byte for byte (6552 bytes).

## Diff scope

- In both files, the only blocks that differ from HEAD are ems-08, ems-10, ems-12, environmental-05 and environmental-07. Every other block is identical. Outside the blocks, the only changes are source constants.
- Added: ems.ts `zipursky`, `ncpc`, `atsdrNox`, `brat`. environmental.ts `shemie`, `rossaint`. Each one is cited by a rebuilt SAMP.
- Removed: `csbpr25`, `hsnOrange`, `cdcRca`, `cscm`, `efns`, `liXing`. None is referenced anywhere in src or tests, by key or by id string. None was referenced at HEAD either (they were leftover round 1 constants), so removing them is safe.
- `escAcs` stays. Only the round 1 ems-10 text uses it. Once ems-10 goes back to HEAD, `escAcs` is unreferenced again, exactly as it is at HEAD. That is harmless, but the coordinator may drop it.
- Structure: every rebuild keeps its id, topic, question count, and each question's kind and keyFeature. Each has `...META, reviewed: false, version: 2`. All five ids are in r2f.json.
- Unrequested changes, judged on merit: (1) ems-08 drops `alsoTopics: ["multiple-trauma"]`. That is correct, because the new story has no trauma. (2) Several `required` counts drop (ems-08 q1 2 to 1 and q2 4 to 2, ems-12 q1 3 to 2 and q4 4 to 2, environmental-05 q3 3 to 2, environmental-07 q1 to q4). These are new questions, so the counts are the writer's to set, and they are acceptable. The q5 finding for ems-12 comes partly from its low count.

## Tests

`SAMP_BATCH=s09 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 513 passed. It was run once. tsc was not run (optional for reviewers). No command was refused.

## Simcheck (full / keys, top hit)

ems-08: gi-bleed-20 0.26/0.10. ems-12: asthma-copd-30 0.06/0.12, pulmonary-edema-23 0.11/0.06. environmental-05: airway-36 0.15/0.07. environmental-07: environmental-21 0.14/0.04. These match the writer's figures. digest3 does not hold the in-progress sob-03 text, so the convergence below does not show up in simcheck.

---

## ems-08 (cluster 53, keeper loc-07): FAIL

Story: a 2-year-old, 40 minutes after swallowing a 20 mm lithium coin cell, at a BC community hospital 90 minutes by road from pediatric endoscopy. Nothing is left of the keeper's epidural hematoma story or of the round 1 tenecteplase story.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Honey 10 mL every 10 minutes (up to 6), or sucralfate 1 g every 10 minutes (up to 3). I opened CMAJ 2021 (Zipursky and Ratnapalan, PMC8486471, full text) and the NCPC guideline (poison.org, revised 9/2016 and 6/2018). Both state the doses, the 12-hour limit and the age of 1 year or more. NCPC says "Do not induce vomiting", so the dangerous flag is correct. No other SAMP keys honey or sucralfate for an acute battery. gi-bleed-20 (signed) rejects honey after 6 days, which is consistent with this key. Minor point: CMAJ puts honey before hospital and sucralfate in hospital, and he is in a hospital. Both are accepted, so the scoring is fair. |
| q2 | **FIX (match phrase)** | The keyed decision ("leave now with the first available crew, without waiting for a specialized team") is reasoned from CMAJ ("Batteries in the esophagus should immediately be removed endoscopically") and NCPC ("Do not delay"). No SAMP keys it (allkeys search: first available, transport team, specialized team, without waiting). The bare match phrase "now" gives the `now` item to any urgent line. Probes: "Call the transfer line now" plus "Intubate now" scores 1/2. "Arrange air ambulance now" plus "Notify the endoscopist" scores 2/2. The fix is to remove the bare "now" and keep phrases that carry the decision ("first available", "dont wait", "without waiting", "first crew", "leave now", "go now"). Because 2 of 5 are required, the core decision can also be skipped: "Keep him calm with a parent" plus "Consult otolaryngology" scores 2/2. Those are signed asthma-copd-03 q3 and sob-03 q3 items (calm with a parent, ENT). They are one item each here and do not make the question a repeat. The physician should know that this question can be passed without the transport decision. Keeper loc-07 answers and the old signed ems-08 answers (CritiCall, neurosurgeon, Ornge, anesthesia) score 0/2. |
| q3 | **FIX (explanation and options)** | The keys are "continue honey" and "nothing else by mouth apart from honey" (NCPC: "Other than giving honey, keep the patient NPO", and honey is given until sedation for endoscopy). Three defects. (1) The explanation says milk and water "would delay anesthesia". NCPC says "Do not delay battery removal because a patient has eaten recently". That rejection reason is false against the cited source, so it must be reworded (no protection, and NPO before sedation). (2) The two keys are the only options that contain "honey", which q1 and this update have just named. That is a word-repeat cue. (3) Milk, water and induced vomiting are close to strawmen. The fix is option wording only, and the keyed decision stays. |
| q4 | PASS | Findings that prompt a call or diversion: blood (warning bleed), stridor, drooling, vomiting, chest or neck pain or fever, drowsiness. CMAJ lists perforation, aortoesophageal fistula, bleeding and vomiting. NCPC lists stridor and respiratory distress. Keeper loc-07 answers (pupils, GCS, Cushing response) and tube safety answers score 0/2. Optional: "oxygen saturation drop" is not matched ("desaturation" is). |

**Convergence checks (as asked).**
- **sob-03, working tree.** This is not a round 2 rebuild. r2a reported sob-03 as "Cannot", and the working-tree block is the failed round 1 coin text ("Drooling and noisy breathing at three"). It converges strongly with ems-08: a toddler brought in by the father, drooling, a round radiopaque disc in the upper esophagus at the thoracic inlet, a check for a battery double halo, emergent endoscopic removal, NPO, and calm with the parent. **ems-08 may land only if sob-03 is restored to HEAD** in the same landing or earlier. HEAD sob-03 (signed, "A toddler who coughed at a party") is an aspirated nut in a bronchus. It shares only the generic NPO and calm-with-parent items, which is acceptable.
- **airway-32, working tree.** Anterior mediastinal mass in a 19-year-old. No coin or battery. No convergence.
- **gi-bleed-20 (signed).** The surface is close: a 2-year-old boy, a 20 mm disc with a double ring in the esophagus, drooling. The decisions differ: a 6-day delayed presentation with a herald bleed, removal with cardiothoracic backup, and O negative blood. The two SAMPs are complementary on honey. I pass this, but the physician should know the images are alike.

## ems-12 (cluster 19, keeper multiple-patients-03): FAIL

Story: nitrogen dioxide from a propane ice resurfacer at an adult hockey tournament in rural Manitoba, with 80 people exposed. Nothing is left of the bus, highway, bear spray, school or reunification stories. It keys no pre-arrival question list, no Code Orange, no capacity steps and no distribution of patients.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Oxygen, salbutamol, rest and carry, oximetry and reassessment, CPAP. ATSDR (opened, "Page last reviewed: October 21, 2014") supports oxygen and aerosolized bronchodilators for bronchospasm. "Rest and carry" is reasoned and does not appear in ATSDR or Brat. It is one item of five. Keeper multiple-patients-03 q1 answers (Code Orange, extra staff) score 0/2. multiple-patients-15 q1 answers (numbers and categories, arrival times) score 0/2. |
| q2 | PASS, physician to confirm | "All exposed, symptoms or not." ATSDR, under Multi-Casualty Triage: "all patients who have histories or evidence of exposure should be transported to a medical facility for evaluation", and "maintained under medical surveillance for the first 48 hours". The same paragraph ends: "Others may be discharged at the scene after their names, addresses, and telephone numbers are recorded." The key follows the first sentence literally, but the physician should confirm that it is the single best answer with 80 people exposed. multiple-patients-15 q2 (distribution among hospitals) is a different decision. |
| q3 | PASS | "No decontamination needed." ATSDR: "Victims exposed only to nitrogen oxide gases do not pose risks of secondary contamination." No SAMP keys "no decontamination". ems-13, ems-24, ems-25 and multiple-patients-06 key decontamination for liquid or solid agents. |
| q4 | PASS | Observation up to 48 hours, chest radiographs, CPAP or a ventilator, bronchodilators, steroids, blood gases. ATSDR: symptomatic patients observed for 48 hours, pulmonary edema at 3 to 30 hours, and "Some clinicians recommend high doses of corticosteroids". Keeper probes score 0/2: Code Orange plus extra staff, moving admitted patients plus early discharge, clearing the department plus a triage point, zones plus a triage point, the recovery room plus cancelling elective surgery. |
| q5 | **FAIL** | Release advice for people who refuse transport. Signed ems-05 q3 keys the release instructions for a capable patient who refuses transport after hypoglycemia: "Confirm a responsible adult will stay with him" and "Clear instructions to call 911 if symptoms recur". Probe: those two lines score **2/2** here (items `alone` and `delay`). That is the same decision for the same reason (delayed deterioration after refusal), and it can carry the whole question. The NO2-specific items (no vigorous exercise for 1 to 2 days, no smoke for 72 hours) are optional. Fixing it changes the accept list or the required count, which is a writer's job. Two more defects. (1) q5 cites `brat-no2`, but the keyed advice (1 to 2 days, 72 hours, seek care) comes from the ATSDR patient sheet, which I opened. The source should be `atsdr-nox`. (2) The `delay` item matches "hours" and comes first, so "Avoid smoke for 72 hours" uses up `delay`, and "Come back if short of breath" then scores 0 (1/2 in total). Minor: "Do not play hockey tomorrow" is not matched. |

Sources. ATSDR MMG for nitrogen oxides is real, opened, and says what is claimed (quotes above). It is a US source. No Canadian clinical guidance on NO2 was found, which SAMP_SPEC section 9 allows. **Brat K et al.** is a Czech case series from Brno, published in the *Canadian Respiratory Journal* 2013;20(6):e100 (PMC3917821). It is not a Canadian series. I opened the PMC page. It says "The symptoms usually develop within 6 h to 48 h following exposure" and "Fifteen of the 20 players developed multiple respiratory symptoms within 48 h". The q5 explanation turns the general statement into a claim about the Brno players ("developed symptoms 6 to 48 hours after exposure"). The wording should follow the paper.

Against the signed multiple-patients SAMPs: multiple-patients-03 (highway, Code Orange, START, capacity) and multiple-patients-15 (storm pileup, pre-arrival questions, distribution, zones). No keyed decision is shared, and the probes above score 0.

## environmental-05 (cluster 13, keeper environmental-06): FAIL

Story: two brothers who left a stalled car in a snowstorm. One has a slow organized rhythm and no palpable pulse. The other has a frozen chest. Nothing is left of the C5 tetraplegia story or of the round 1 repeats (forced air and warmed fluids, a bolus for rewarming hypotension).

| Q | Verdict | Notes |
|---|---|---|
| q1 | **FIX (match phrase)** | The key is to establish circulation before compressions. WMS 2019 (read through the survive-student-resource.austererisk.com reproduction, author list Dow, Giesbrecht, Danzl et al., "2019 Update", and consistent with the published text) says: "Prior to starting CPR, feel for a carotid pulse for 1 min" (1C). Paal 2022 says to check signs of life for up to 1 minute and that ECG, ETCO2 or POCUS may detect organized activity. The `pulse` item also matches "carotid pulse", "femoral pulse" and "central pulse" with no duration. Probe: "Feel the carotid pulse" plus "Look at the monitor" scores **2/2**. That is the brief normothermic check the question is built to reject, and the stem has already said the monitor shows a slow narrow rhythm. The fix is to drop the duration-free pulse phrases, so that only "1 minute", "60 second", "full minute", "prolonged" and similar remain. Consider narrowing the bare "monitor" as well. Keeper environmental-06 q1 answers (below 30°C, shockable) score 0/2. Its "ventilate with capnography" item scores 1/2. |
| q2 | PASS | No compressions for an organized rhythm with contractions and an ETCO2 waveform. WMS: "If there is a cardiac rhythm with organized QRS complexes, CPR should not be performed (1C) unless ETCO2 monitoring confirms lack of perfusion or echocardiography shows that there are no cardiac contractions (1B)." No SAMP keys this. arrhythmia-06 q1 (no rhythm drugs for hypothermic bradycardia) is near, but it is a different decision. |
| q3 | PASS | Coagulation tests run at 37°C hide hypothermic coagulopathy, and rewarming to 36°C to 37°C treats it. Rossaint 2023 (PMC9977110) says: "a 1 °C drop in temperature is associated with a 10% drop in function", the effects show "not when assessed at 37 °C", and "normothermia with core temperatures between 36 and 37 °C should be targeted". This decision is not keyed anywhere in src/samps. |
| q4 | PASS | A frozen, incompressible chest. WMS: "Do not attempt to resuscitate a patient ... whose chest wall is too stiff for compressions (1A)." Paal: asystole, unwitnessed arrest, and fixed dilated pupils "are not contraindications", and rigidity "is not a reliable sign of death". Keeper environmental-06 q5 keys when to *stop* (asystole after rewarming to 32°C). This question keys when *not to start*, with a different criterion. That is close in theme but a separate decision, and the keeper's answer is not an option here. |
| q5 | PASS, with a recommendation | Standard weight-based settings, do not titrate to ETCO2, PaCO2, err away from hypoventilation, SpO2 above 94%. Paal says all of this word for word. "Titrate to ETCO2 35 to 45" is unacceptable, correctly. Recommendation: "Low tidal volume 6 mL/kg" plus "Titrate FiO2 to SpO2 over 94" scores 2/2, so generic ventilator answers (for example signed pulmonary-edema-08 q4) pass without the hypothermia point. That comes from the writer's choice of items and is not a repeat. Worth tightening in the same revision. |

Arithmetic and facts: temperature of 24.6°C (below 30°C), bradycardia of 16/minute, and ETCO2 of 14 mmHg are consistent. Epinephrine is withheld below 30°C (ERC, as in the keeper).

## environmental-07 (cluster 57, keeper loc-15): FAIL

Story: a 34-year-old woman found in the snow after a clonazepam and vodka overdose, at 25.9°C, with a sister asking about brain death. Nothing is left of myxedema, TSH, cortisol, dextrose, the probe choice, afterdrop or thiamine. The round 1 repeats of loc-15 q2 and q5 are gone.

| Q | Verdict | Notes |
|---|---|---|
| q1 | **FAIL (incomplete accept list)** | Confounders: core temperature below 36°C, clonazepam, alcohol, rocuronium. Shemie 2023 (PMC10203028) confirms the ≥ 36°C requirement and the confounders in Table 5. The MAP of (94 + 116) / 3 = 70 meets the ≥ 60 mmHg prerequisite. But the guideline's first prerequisite is: "there must be an established cause of devastating brain injury severe enough to cause death and supported by neuroimaging evidence". She has none. Probe: "No established cause of devastating brain injury" plus "No CT evidence of brain injury" scores **0/2**. That is the most fundamental correct answer. Adding it is a new accept item, which is a writer's job. Keeper loc-15 q1 answers score at most 1/2 ("Hypothermia"), so the keeper rule holds. |
| q2 | PASS | Alpha-stat: use the uncorrected values and raise ventilation. Paal: "Blood gas interpretation should be performed according to the alpha-stat approach, evaluating blood gas samples at 37 °C." The arithmetic recomputes: pH 7.18 + 0.0147 x 11.1 = 7.34, and PaCO2 52 x 10^(-0.019 x 11.1) = 32. "Use the corrected values" plus "Reduce the rate" is unacceptable, correctly. Keeper loc-15 q2 answers score 0/2. Minor: "Don't use the corrected values" is not credited. Nothing else keys alpha-stat. |
| q3 | **FAIL (key not supported as single best)** | Intravascular warming catheter. Paal Table 5 (opened) calls it "Uncertain indications for use. Potential beneficial for colder patients ... with stable circulation", while bladder and gastric lavage are "Not recommended" and thoracic lavage is for unstable patients without ECLS. But Paal's text says "Patients with stable circulation should be rewarmed with passive and active external rewarming" and uses internal rewarming only "if a patient fails to rewarm adequately", with the signs "core temperature remaining the same or decreasing, increasing lactate levels, decreasing level of consciousness, decreasing blood pressure, or the occurrence of ventricular dysrhythmias". None of those is present: she has risen 0.8°C, her BP is 98/60, and she has no ventricular arrhythmia. So the lead-in ("method to add") assumes an escalation the source does not call for, and the key is a device of uncertain indication. I am not sure this is a defensible single best answer, and under the review rules that is a FAIL. The fix needs either a new decision or a stem that shows failed rewarming by Paal's signs. Both are a writer's job. No SAMP keys an intravascular catheter. arrhythmia-06 q3 and environmental-27 q2 key lavage and ECMO for unstable or arrested patients, and here those are distractors with the right reasons. |
| q4 | **FIX (match phrase)** | At least 24 hours after rewarming to 36°C. Shemie: "prehospital environmental exposure ≤ 34 °C, a 24-hr waiting period is advised after rewarming to 36 °C". The key is correct. Probe: "Not for 24 hours, and first get a CT head" scores **0/1**, because the negation voids "24". That is a natural correct answer. "48 hours" and "36 hours" also score 0, although they satisfy "at least 24 hours". The q1 prerequisite (neuroimaging of an established cause) belongs in this explanation too. The keeper-style answer "asystole after rewarming to 32°C" scores 0. |

Sources: Shemie 2023 and Paal 2022 are real, opened, and say what is claimed, apart from the q3 premise above.

---

## Fixes for the writer (not made here)

1. ems-08 q2: remove the bare "now" from the `now` item.
2. ems-08 q3: replace "would delay anesthesia" with a reason that NCPC supports. Reword options so the keys are not the only two that say "honey", and replace the strawmen with plausible peers.
3. ems-12 q5: stop the generic release advice of signed ems-05 q3 from scoring full marks, for example by making the NO2-specific advice necessary. This is an accept list change. Change the q5 source to `atsdr-nox`. Fix the `delay` item's "hours" and "later" order problem. Word the Brno sentence as the paper does.
4. environmental-05 q1: remove the duration-free pulse phrases. Optionally narrow "monitor". Optionally tighten q5 against generic ventilator answers.
5. environmental-07 q1: add the "no established cause of devastating brain injury on neuroimaging" item. q3: re-key, or show failed rewarming by Paal's signs. q4: make the match survive "not for 24 hours", and decide whether longer waits are accepted.
6. Coordinator: restore ems-10 and sob-03 from HEAD before, or with, any landing of ems-08.

## For the physician

- ems-08 (button battery): please confirm honey before and during transfer, sending a stable toddler with the first available crew rather than waiting for a specialized team (this is reasoned from "remove immediately" and is not quoted from a guideline), and "nothing else by mouth apart from honey". Note that gi-bleed-20 (signed) uses the same image of a 2-year-old boy with a 20 mm double-ring disc, although the decisions differ.
- ems-12 (NO2 at an arena): the main source is the US ATSDR guideline, last reviewed 2014. The case series is Czech, published in the Canadian Respiratory Journal. Please confirm "transport all exposed people" with 80 exposed. The same ATSDR paragraph also says that "others may be discharged at the scene" once contact details are recorded.
- environmental-05: WMS 2019 was read through a public reproduction, because the journal site refused access. The quoted recommendations and grades match the published guideline.
- environmental-07: death determination follows the 2023 Canadian guideline (≥ 36°C, and a 24-hour wait after environmental hypothermia of 34°C or less). The guideline also requires an established cause of devastating brain injury on neuroimaging, which this patient does not have. q3's intravascular catheter is of "uncertain indication" per Paal. I failed it rather than pass a key I am not sure of. Please say whether you would teach it.
- ems-10 needs your decision (see the writer's report). It is not part of this review.
