# Review of signed-duplicate rebuild g05

Files: `src/samps/s16/shock.ts` and `src/samps/s16/seizures.ts`. Ids: seizures-03, 05, 07 and shock-04, 05, 07, 09, 11, 12, 13.

## Structure

- Checked against `git show HEAD` for both files. Each of the ten keeps its id, topic, question count, and each question's kind and key feature. Each has `reviewed: false` after the META spread and version 2. All ten are in `src/samps/held-back/g05.json`.
- The other SAMPs in both files are unchanged. The diff touches only the ten ids and the `S` source tables.
- shock-09 dropped `alsoTopics: ["dvt-pe"]` and seizures-05 gained `["tox"]`. Both fit the new stories.
- Single-answer key cues: shock-13 q2's key ties with one distractor for longest option. shock-12 q4's key is a one-word drug name, the longest of five one-word names. Neither is a real cue.
- `SAMP_BATCH=s16 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 passed after the fixes. `npx tsc --noEmit -p .`: clean.
- Simcheck, rerun on the writer's drafts, gives the same top 5 as the writer's report (seizures-03 pre-eclampsia-04 0.29, seizures-05 shock-26 0.19, seizures-07 arrhythmia-33 0.17, shock-04 shock-05 0.18/0.20, shock-05 multiple-trauma-11 0.26, shock-07 sob-15 0.18, shock-09 shock-03 0.22/0.24, shock-11 arrhythmia-27 0.19, shock-12 pediatric-fever-03 0.23, shock-13 ems-18 0.38).
- Other writers' current files have none of the new stories: aconite, caffeine tablets, CPVT, dialyzer anaphylaxis, LVAD bleeding, toxic shock after a scald, supraclavicular stab, cirrhosis with trauma, LAST in labour or septic shock on an MAOI. There is one shape convergence. The pediatric-fever-03 rebuild in the same cluster 3 asks "How do you give him fluid resuscitation?" after a perfusion-findings q1, as shock-12 does (see shock-12 q2).

## Rule applied

A question is a repeat when it keys the same decision for the same reason as a signed-off SAMP. Under D1 (docs/DECISIONS.md), a SAMP may carry one repeat, and only when the decision is the literal wording of a CFPC key feature. Two repeats fail. Following the landing rules, a repeat that echoes the keeper of the SAMP's own cluster fails even if it is the only one. A question whose accept list lets the keeper's keyed answers alone score full marks counts as echoing the keeper. Lists of case-specific findings are not counted.

## Rulings on the repeats the writer disclosed

| Repeat | Ruling |
|---|---|
| shock-05 q2 and q3 (MTP, ratio, restricted crystalloid, permissive target, calcium chloride 1 g) | **Not D1.** q2 is the cluster 72 repeated key ("massive transfusion and permissive hypotension") and the keeper multiple-trauma-01's q1 and q3 (uncrossmatched red cells with MTP, systolic 80 to 90, balanced ratio). That is an own-keeper echo. q3 repeats multiple-trauma-11 q1 and q3 and multiple-trauma-32 q2 (calcium chloride 1 g). That is a second repeat. |
| shock-09 q2 (balanced crystalloid 30 mL/kg) | **D1 pass.** The same decision is keyed in shock-03 q2 and q3 and infectious-diseases-07 q2, none of them in cluster 18. The keeper, dvt-pe-08, keys the opposite (no more than 500 mL). Shock KF 3 literally names crystalloid as an appropriate fluid. After the q3 fix below, it is the only repeat in shock-09. |
| seizures-03 q3 (lipid emulsion) | **Would qualify alone, but the SAMP fails.** Lipid echoes analgesia-sedation-04, the keeper of cluster 27, not seizures-03's own cluster 21. Seizures KF 4 literally names toxidromes needing treatment beyond anticonvulsants. But q4 echoes the own keeper pre-eclampsia-04 q4, and q1 plus q3 retell analgesia-sedation-04 q2 item by item (benzodiazepine, airway and oxygen, lipid, small epinephrine doses, bypass or ECMO). |
| shock-12 q3 (clindamycin) | **Not D1.** With `required: 2`, "vancomycin" plus "ceftriaxone" scores full marks. That is the keyed answer of the cluster 3 keeper, pediatric-fever-04 q2 (ceftriaxone with vancomycin). Clindamycin for toxic shock also repeats infectious-diseases-07 q3 and pediatric-fever-15 q2. shock-12 q2 is a second repeat (below). |
| shock-13 q1 (return-to-flow MAP, controller readings) | **Not D1.** The overlap with ems-18 q3 and q4 does not echo the keeper, and shock KF 1 ("recognize subtle signs of shock") could carry it. But it is not the only repeat. q3's "PCC 2000 IU" is the fixed dose keyed by the keeper gi-bleed-03 q3 and, for warfarin, by multiple-trauma-17 q2. q2 (red cells now) and q4 (endoscopy, hold the anticoagulant) are also keeper gi-bleed-03 q3 items. |

## Unsourced claims

- **seizures-03, first-line antihypertensives.** The claim is correct but it has no source in the SAMP. I opened ISSHP 2021 (Magee LA et al. Pregnancy Hypertens 2022, 27:148-169, doi 10.1016/j.preghy.2021.09.008, full text). Recommendation 26: "Severe hypertension should be treated with the first-line agents oral nifedipine, oral labetalol, IV labetalol, or IV hydralazine." SOGC 426 still returns 403. Also, the ASRA checklist's AVOID list (beta blockers, calcium channel blockers, vasopressin, local anesthetics) sits under "Arrhythmia or Hypotension". Using it to rule out labetalol for hypertension after the seizure but before cardiac toxicity is an extrapolation. A 2024 scoping review of lipid for LAST in pregnancy (PMC10865663) reports a case managed with magnesium and labetalol. The single-accept hydralazine key needs the physician's view. Not patched, because seizures-03 fails.
- **seizures-03, left uterine displacement.** No opened source in the SAMP supports it, and I could not open one. ERC 2025 Special Circumstances and AHA pages returned 403. Clinically it is standard for a hypotensive woman at 38 weeks. It also repeats the keeper pre-eclampsia-04 q1 ("left lateral position to displace the uterus").
- **shock-09, MAOI pressor advice.** The monograph (read in `scratchpad/nardil.txt`) supports "IV fluids, and if necessary BP titration with an IV infusion of dilute pressor agent. It should be noted that adrenergic agents may produce a markedly increased pressor response" (overdose section). The old explanation said the monograph "lists dopamine among the sympathomimetics not to be given". This was misleading: the same contraindication sentence names "dopamine, epinephrine and norepinephrine". The monograph therefore gives no reason to prefer norepinephrine over dopamine. That preference rests on SSC 2021 recommendation 37 (norepinephrine first line over dopamine, strong). Fixed in place (below). A secondary source I opened, OpenAnesthesia "MAO inhibitors: anesthetic interactions" (updated March 2026), says to avoid indirect-acting agents and treat hypotension with carefully titrated direct-acting vasopressors such as norepinephrine. It does not name dopamine. The evidence is monograph plus expert review, not trial data.

## Per question

| SAMP | Q | Verdict | Reason |
|---|---|---|---|
| seizures-03 | q1 | FAIL (repeat) | A benzodiazepine for the LAST seizure. analgesia-sedation-04 q2 and lacerations-08 q3 key it. |
| seizures-03 | q2 | FAIL (source) | Hydralazine alone. The first-line claim was unsourced (ISSHP 2021 now found, above). Ruling out labetalol extrapolates the ASRA list. The keeper pre-eclampsia-04 q4 keys "labetalol, hydralazine or nifedipine" at BP 170/110 after the seizure. The twist is new, but the scene is the keeper's. |
| seizures-03 | q3 | FAIL (repeat) | Lipid is D1-eligible. Its list also carries the airway, small-dose epinephrine and bypass items of analgesia-sedation-04 q2, plus LUD, which is the own keeper's q1 item with no source. Numbers check against ASRA (100 mL, 250 mL over 15 to 20 min, 12 mL/kg). |
| seizures-03 | q4 | FAIL (own keeper) | "Fetal monitoring" plus "urgent delivery decision" scores 2 of 2. That is pre-eclampsia-04 q4 (continuous fetal monitoring, urgent obstetrics to plan delivery once stable, pre-eclampsia bloodwork). |
| seizures-05 | q1 | PASS | Caffeine toxicity. Only arrhythmia-07 mentions caffeine, as a trigger. 30 x 200 mg = 6 g checks. Kohara 85.3% hypokalemia checks. |
| seizures-05 | q2 | PASS | A list of case-driven tests. |
| seizures-05 | q3 | FAIL (repeat) | "Urgent hemodialysis" for severe poisoning with seizures by a dialyzable drug. tox-20 q4 keys this ("Intermittent hemodialysis now" after carbamazepine seizures), as do tox-18 q2 and tox-24 q4. g04 counted the same decision as a repeat. |
| seizures-05 | q4 | FAIL (second repeat, and match defect) | "No driving until cleared" plus "no swimming alone or heights" scores 2 of 2. That is seizures-09 q4. The provoked-seizure rule (CMA 11.2, checked) is new, but the generic answer earns full marks. Defect: the match "can drive" accepts "She can drive now" (probed, 2 of 2 with "no lifeguarding"). |
| seizures-07 | q1 | PASS | Features against epilepsy (pallor before jerking, exertional and emotional triggers). Not keyed elsewhere. |
| seizures-07 | q2 | PASS | Exercise stress ECG. No keyed hit. |
| seizures-07 | q3 | PASS | Bidirectional VT from CPVT. tox bidirectional VT is digoxin and is not keyed as a rhythm name. |
| seizures-07 | q4 | FAIL (own keeper) | "Nadolol", "admit to cardiology" and "screen relatives" score 3 of 3. That is the keeper arrhythmia-13 q4 (beta blocker nadolol or propranolol, cardiology or EP admission, screening first-degree relatives), which is also cluster 31's repeated key. The CPVT-specific items (flecainide, no competitive sport) are optional. The approved direction asked for "a beta blocker", so the direction led here. |
| shock-04 | q1 | PASS (noted) | A list of case clues. The nadolol item matches multiple-trauma-17 q1 ("Beta blockade blunting a rise in pulse"). The list also includes a low baseline, shock index and encephalopathy. Shock index 96/90 = 1.07 checks. |
| shock-04 | q2 | PASS | Ascites confounding eFAST, and cirrhosis as a modifier. No keyed hit. |
| shock-04 | q3 | FAIL (repeat) | "Uncrossmatched red cells now" for hypotensive traumatic bleeding after crystalloid. gi-bleed-04 q3, gi-bleed-08 q1 and multiple-trauma-01 q1 key it. It also sits in the own keeper multiple-trauma-03 q1 ("O negative blood if uncrossmatched blood is needed"), part of cluster 73's repeated key. |
| shock-04 | q4 | FAIL (second repeat) | Fibrinogen or cryoprecipitate, platelets above 50, TXA and calcium. This is multiple-trauma-01 q3 and multiple-trauma-11 q3. The cirrhosis teaching (AGA thresholds) is in the explanation, not the key. The writer did not list this as a repeat. |
| shock-05 | q1 | PASS | eFAST thoracic and subxiphoid views and a CXR for a supraclavicular wound. KF literal (shock 6). |
| shock-05 | q2 | FAIL (own keeper) | See the rulings above. |
| shock-05 | q3 | FAIL (second repeat) | Calcium chloride 1 g. See the rulings above. Arithmetic checks (270 mg against about 90 mg elemental calcium per 10 mL). |
| shock-05 | q4 | PASS | Foley balloon tamponade of the wound. No keyed hit. Loss 2025 supports it. |
| shock-07 | q1 | PASS | Do not return circuit blood. No keyed hit. Saha 2017 supports it. |
| shock-07 | q2 | FAIL (own keeper) | An epinephrine infusion after two IM doses of 0.5 mg and 1 L of fluid is the keeper anaphylaxis-01 q3 and cluster 1's shared story and repeated key. The writer listed it only as decision-search evidence. |
| shock-07 | q3 | PASS | Why the shock is missed. 164 to 84 = 49% fall checks against the WAO 30% rule. |
| shock-07 | q4 | FAIL (own keeper) | "Allergist", "autoinjector" and "return precautions" score 3 of 3. That is keeper anaphylaxis-01 q4 (two autoinjectors, allergist referral, teach that symptoms can recur). The dialyzer item is new but optional. |
| shock-09 | q1 | PASS | Bedside tests for type and source. It overlaps shock-03 q5 items, but the reason differs (type and source, not resuscitation endpoints). |
| shock-09 | q2 | PASS (D1) | See the rulings above. 30 x 70 = 2.1 L checks. SSC 2021 recommendations 5 and 33 checked. |
| shock-09 | q3 | FIXED | (1) The match was a bare "norepinephrine", so the question keyed the same decision as shock-03 q4 (norepinephrine over dopamine in septic shock), a second repeat. The prompt already asks "how would you start it given her medication", and the key text already says dilute, low and titrated. The match now requires norepinephrine, noradrenaline or Levophed together with low, dilute, titrate, small, slow, cautious, careful, reduced or a 0.01 or 0.02 dose. (2) The explanation misstated the monograph (see above). It now says the monograph names dopamine, epinephrine and norepinephrine, quotes the overdose advice, and gives SSC as the reason dopamine is wrong. Probed: "Norepinephrine" alone 0 of 1, "Norepinephrine infusion started low and titrated slowly" 1 of 1, "norepinephrine, not dopamine, start at a low dose" 1 of 1, "dopamine" unacceptable. |
| shock-09 | q4 | FIXED | Bare "meperidine", "pethidine" and "dextromethorphan" were in the match, so "meperidine for pleuritic pain" scored as correct. Now only negated forms match (avoid, no, contraindicated), plus "drug interaction" and avoiding serotonergic drugs. Probed: "meperidine for pleuritic pain" plus "dextromethorphan for cough" 0 of 2. "avoid meperidine" plus "hold phenelzine" 2 of 2. "meperidine is contraindicated" plus "stop the MAOI" 2 of 2. Monograph checked for meperidine, dextromethorphan and hypotension resolving off the drug. |
| shock-11 | q1 | PASS | Toxic features of aconite. Kent 2025 abstract checked (91%, 64%, 73%). |
| shock-11 | q2 | PASS | Amiodarone, flecainide or procainamide. Coulson 2017 checked (cardioversion 5 of 30, flecainide 6 of 7, amiodarone 11 of 20, procainamide 2 of 2). |
| shock-11 | q3 | PASS (noted) | The list includes the keeper tox-04 q3's pressor and ECMO items, but bicarbonate, magnesium and poison centre make it case-specific. |
| shock-11 | q4 | FAIL (own keeper) | "Activate ECMO or bypass" is one of two keyed menu answers. VA ECMO is in cluster 74's repeated key and the keeper tox-04 q3 ("Early call for VA ECMO"), for the same reason: toxic cardiovascular collapse bridged until the toxin clears. Coulson supports prolonged CPR 9 of 15 and bypass 4 of 6. This is the narrowest failure in the group. |
| shock-12 | q1 | PASS | Perfusion findings. A list of case clues. |
| shock-12 | q2 | FAIL (repeat) | 10 to 20 mL/kg boluses with reassessment for liver size and crackles, up to 40 to 60 mL/kg. This is cluster 3's repeated key and the old pediatric-fever-03 q3 almost word for word. It also converges in shape with the current pediatric-fever-03 rebuild's fluid question. Arithmetic checks (130 to 260 mL, 520 to 780 mL). |
| shock-12 | q3 | FAIL (own keeper) | See the rulings above. |
| shock-12 | q4 | PASS | Norepinephrine for warm fluid-refractory shock. The cluster keyed epinephrine. |
| shock-12 | q5 | PASS | Burn wound source control and IVIG. Sirajee 2025 supports it. |
| shock-13 | q1 | FAIL (repeat) | Return-to-flow MAP and controller readings are ems-18 q3 and q4. |
| shock-13 | q2 | FAIL (own keeper) | "Red cells now" is keeper gi-bleed-03 q3's "Transfuse red blood cells". The unit-by-unit pump flow twist is sound but does not change the decision. |
| shock-13 | q3 | FAIL (own keeper, and match defect) | PCC 2000 IU. 25 x 80 = 2000 checks against the NAC table (INR 3 to 5, 2000 IU). Defect: the unacceptable match "plasma" rejects "PCC 2000 IU instead of plasma" (probed, 0 of 1). |
| shock-13 | q4 | FAIL (own keeper) | "Endoscopy" plus "hold warfarin and ASA" scores 2 of 2. That is keeper gi-bleed-03 q3 (hold apixaban, urgent GI for endoscopy). The LVAD-specific items (small bowel, octreotide, pump speed) are optional. |

## Per SAMP

- **seizures-03: FAIL.** q4 echoes its own keeper, pre-eclampsia-04 q4. q1 and q3 retell analgesia-sedation-04 q2. Fix: keep q3's lipid as the single D1 repeat, but cut the LUD, airway and bypass items so lipid and small-dose epinephrine carry it. Re-key q4 on LAST-specific decisions, such as observing 4 to 6 hours, no more bupivacaine and the anesthetic plan for cesarean, with fetal monitoring and delivery optional. Re-key q1 away from "a benzodiazepine", for example the features that separate LAST from eclampsia. Cite ISSHP 2021 for the first-line antihypertensives. Get a physician view on labetalol before cardiac toxicity.
- **seizures-05: FAIL.** Two repeats: q3 hemodialysis (tox-20 q4) and q4 generic driving and swimming limits (seizures-09 q4). Fix: keep one of them. For q4, key only the toxic-seizure rule, that driving resumes after recovery and a neurologic evaluation, and drop "can drive" as a bare match. Or re-key q3 on a caffeine-specific decision.
- **seizures-07: FAIL.** q4 echoes its own keeper, arrhythmia-13 q4. Fix: key the CPVT-specific decisions (no competitive sport, flecainide added to a beta blocker, caution with an ICD) and do not let nadolol, cardiology admission and family screening score by themselves.
- **shock-04: FAIL.** Two repeats: q3 uncrossmatched red cells (also in the own keeper's q1) and q4 the trauma coagulopathy targets of multiple-trauma-01 q3. Fix: keep q3 as the D1 repeat (shock KF 3 names blood). Re-key q4 on the cirrhosis decision, for example not chasing the INR with plasma and using fibrinogen and platelet thresholds from the AGA update.
- **shock-05: FAIL.** q2 echoes its own keeper multiple-trauma-01, and q3 is a second repeat. Fix: re-key q2 and q3. q1 and q4 are new and can stay.
- **shock-07: FAIL.** q2 and q4 echo its own keeper anaphylaxis-01. Fix: re-key q2 on something other than an epinephrine infusion after two IM doses, and make q4 hinge on the dialysis-unit decisions (dialyzer type, sterilant, allergy record).
- **shock-09: FIXED, PASS (D1 on q2).** q3 now keys the MAOI-specific way to start norepinephrine, and its explanation is factually corrected. q4 no longer accepts giving meperidine or dextromethorphan.
- **shock-11: FAIL.** q4 keys VA ECMO, which is the keeper tox-04's repeated key. Fix: key q4 on prolonged CPR alone (select 1) or on another aconite-specific decision, and keep ECMO as an unkeyed option in q3.
- **shock-12: FAIL.** q3 lets the keeper's ceftriaxone plus vancomycin score full marks, and q2 is cluster 3's repeated fluid key. Fix: make q3 hinge on clindamycin (for example `required: 1` with clindamycin alone) as the single D1 repeat, and re-key q2 on a burn or toxic shock decision.
- **shock-13: FAIL.** q2, q3 and q4 retell the keeper gi-bleed-03 q3 (red cells, PCC 2000 units, hold anticoagulant, endoscopy), and q1 repeats ems-18. The approved direction led here: "transfusion, warfarin reversal ... endoscopy". Fix: keep one repeat, and key LVAD-specific decisions, such as how much reversal given the pump thrombosis risk, pump speed, suction events and small bowel angiodysplasia. Also fix the "plasma" unacceptable match.

## For the physician

- Nine of the ten fail under the new landing rules. In most, the approved rebuild direction itself named the keeper's keyed decision: a beta blocker for seizures-07, transfusion, reversal and endoscopy for shock-13, fetal monitoring and delivery for seizures-03, vasopressor choice for shock-07, and blood, TXA and calcium for shock-05. The stories are new and sound. The failures are in what the accept lists let score. Most fixes are one or two questions per SAMP.
- shock-09 is the only one that can land. If it lands, its q2 (balanced crystalloid 30 mL/kg, shock KF 3, echoing shock-03 q2 and q3) should be added to the D1 table in docs/DECISIONS.md. I did not edit DECISIONS.md, because other groups are editing it.
- shock-09 q3 teaching: norepinephrine started low as a dilute infusion and titrated in small steps in a patient on phenelzine. The monograph's own contraindication list includes norepinephrine. Its overdose section still advises a titrated dilute pressor, and anesthesia references advise titrated direct-acting agents and avoiding indirect-acting ones. Please confirm this is the teaching you want. Also confirm that holding phenelzine during shock is acceptable.
- seizures-03 q2: is hydralazine the only acceptable antihypertensive right after a LAST seizure with no cardiac signs yet? Would labetalol be wrong? ISSHP 2021 names all three as first-line in general.
- seizures-03 q3: left uterine displacement is accepted without an opened source. Please confirm.

## Landing decision

Only shock-09 lands.
- **Why it passes the landing rules:** the reviewer's fixes (match phrases in q3 and q4, and a corrected explanation) stay inside the writer's keyed decisions.
- **Its one D1 repeat:** q2 echoes shock-03 q2 and q3. The keeper of its cluster is dvt-pe-08, so rule 1 is not triggered.
- **The other nine failed.** They keep their signed text on the branch.
