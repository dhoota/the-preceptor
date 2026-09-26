# Review of signed-duplicate rebuild g04

File: `src/samps/s08/delirium-agitation.ts`. Ids: delirium-agitation-04, 05, 06, 07, 09, 11, 14, 15.

## Structure

- The id, topic, question count, kinds and key features of all eight match HEAD. Each is `reviewed: false` and version 2. All eight are in `src/samps/held-back/g04.json`.
- A block by block comparison with HEAD shows that 01, 02, 03, 08, 10, 12 and 13 are unchanged. The diff touches only the eight ids and source constants. This review added one constant, `AB_STI`.
- `SAMP_BATCH=s08 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 443 passed after the fixes. `npx tsc --noEmit -p .`: clean.
- Simcheck top hits, rerun: 04 tox-15 0.22. 05 pediatric-fever-01 0.14. 06 tox-11 0.17. 07 loc-36 0.18. 09 seizures-42 0.13. 11 loc-05 0.14. 14 seizures-14 0.18. 15 seizures-31 0.20. The digest predates the rebuild, so the "delirium-agitation" hits are the old texts.
- Other writers' in-progress diffs contain none of the new stories: GHB withdrawal, dextromethorphan, calcium-alkali, acyclovir neurotoxicity, synthetic cannabinoid, neurosyphilis or heart block with delirium.

## Rule applied

A question is a repeat when it keys the same decision for the same reason as a signed-off SAMP. Under D1 (docs/DECISIONS.md), a SAMP may carry one such repeat, and only when the decision is the literal wording of a CFPC key feature. Two repeats fail. Generic key-feature lists that turn on case-specific clues, such as the delirium features in a KF 1 question, are not counted.

## Per question

| SAMP | Q | Verdict | Reason |
|---|---|---|---|
| 04 | q1 | PASS | GHB withdrawal differential. Not keyed elsewhere. |
| 04 | q2 | FAIL | IM midazolam or lorazepam before restraint to treat withdrawal agitation. This is the keeper's decision (tox-15 q3: benzodiazepine titrated for withdrawal delirium) given by the IM route. It also keys the same drugs and doses as delirium-agitation-03 q1. The prompt and key are the same as 11 q3, so the two rebuilds converge. |
| 04 | q3 | PASS* | Fluids and urine output for rhabdomyolysis with kidney injury. It converges with 11 q4. Because 11 fails, 04 q3 can stand, but the rebuild of 11 must avoid it. |
| 04 | q4 | FAIL | "Objective findings that mark severe withdrawal" is the keeper's keyed decision (tox-15 q1: "What objective findings do you use to judge the severity of his withdrawal?"), with the same KF (tox 8). |
| 05 | q1 | PASS | Knee aspiration. Not keyed anywhere. |
| 05 | q2 | PASS | IM or IV glucocorticoid when he refuses tablets, per ACR 2020 (checked). NSAID unacceptable with the kidney injury. |
| 05 | q3 | PASS (D1) | Low-dose haloperidol IM or SC before restraint in an older delirious man. This repeats the keeper analgesia-sedation-03 q4 ("low dose antipsychotic such as haloperidol 0.5 mg") and delirium-agitation-35 q4. It is also part of the cluster's repeated key. The wording is delirium KF 4 ("first use appropriate chemical agents to sedate"). This is the only repeat in 05. |
| 05 | q4 | PASS | Staff safety list. Items overlap delirium-agitation-22 ("two arm lengths") and 12 q3, but the question is not a single-decision repeat. |
| 06 | q1 | PASS | Delirium rather than first psychosis. It mirrors delirium-agitation-02 q1 (features favouring psychosis). The toxic clues differ, and this review does not count it. |
| 06 | q2 | PASS (D1) | An acetaminophen level for a combination cold product repeats the keeper tox-11 q2 ("Acetaminophen concentration, since combination cold products are common"). The wording is tox KF 7 ("specific serum levels versus urine screens"). Numbers recompute: 240 mL / 15 mL = 16 doses, 16 x 325 = 5 200 mg, 5 200 / 60 = 86.7, about 87 mg/kg. Dextromethorphan: 16 x 15 = 240 mg, 240 / 60 = 4.0 mg/kg. |
| 06 | q3 | PASS | IV benzodiazepine, physostigmine dangerous. The antidote decision differs from tox-11. |
| 07 | q1 | PASS | Calcium, electrolytes, creatinine and gas. Generic workup. |
| 07 | q2 | PASS | Collateral about OTC calcium carbonate antacids. Not keyed anywhere. |
| 07 | q3 | PASS | Saline and withdrawal of calcium, vitamin D and thiazide, with rebound hypocalcemia. loc-36 keys saline with zoledronic acid for malignancy, and here bisphosphonate is not given. Different decision. |
| 09 | stem | FIXED | "a coarse tremor" is now "a tremor". Coarse tremor with myoclonus was the lithium cluster's shared story. |
| 09 | q1 | PASS | Delirium rather than intoxication or refusal. |
| 09 | q2 | PASS | CT, then LP with cell count and VZV PCR, to exclude VZV encephalitis. |
| 09 | q3 | FIXED, PASS (D1) | Fixed: the unacceptable match "peritoneal" marked correct answers such as "switch from peritoneal dialysis to hemodialysis" as unacceptable (probed: scored 0). The match is now narrowed to more, continued or resumed PD exchanges. The repeat: hemodialysis to clear a renally cleared drug that has built up and caused encephalopathy is keyed in seizures-42 q3 (cefepime, "stop cefepime and arrange dialysis"), tox-24 q4 (therapeutic baclofen from a walk-in clinic, hemodialysis, same KF tox 6) and the keeper tox-07 q2. The wording is tox KF 6 ("elimination techniques ... based on the pharmacokinetics of the toxins"). The new teaching is that PD clears acyclovir poorly. This is the only repeat in 09. |
| 09 | q4 | PASS | Checked against HCCA s. 20 itself (e-Laws consolidated text, current from 18 May 2023, downloaded from ontario.ca). Under s. 20(1) the order is guardian, attorney, Board representative, then spouse or partner (para 4), then child (para 5). Under s. 20(8), people living separate and apart after a breakdown are not spouses. Under s. 20(9), a partner is someone who has lived with him at least one year in a close relationship of primary importance. Under s. 20(5), the PGT decides only if no listed person qualifies. Key index 2, the partner of six years, is correct. No SAMP keys partner over child. |
| 11 | q1 | FAIL | "No antidote, supportive care", with flumazenil, physostigmine and naloxone as the traps. This repeats tox-24 q2 ("Supportive care only", with the same antidote distractors, tox KF 2). |
| 11 | q2 | PASS | Differential after a seizure with head strike. |
| 11 | q3 | FAIL | Ketamine 4 to 5 mg/kg IM or midazolam 5 to 10 mg IM for severe agitation in a young man with sympathomimetic features. The key is the same as delirium-agitation-03 q1, for the same reason. It also converges with 04 q2. |
| 11 | q4 | FAIL | Fluids and urine output for rhabdomyolysis with kidney injury converge with 04 q3. Ketamine: 4 x 80 = 320 mg and 5 x 80 = 400 mg. |
| 14 | q1 | PASS | Medical cause rather than psychiatric illness, with syphilis-specific clues. |
| 14 | q2 | FIXED | Canadian source added. PHAC's syphilis guide (page dated 27 Nov 2025, treatment page 8 Jun 2026) says neurosyphilis treatment is outside its scope. BCCDC's June 2026 DST defers to ID. The Alberta Treatment Guidelines for STI (2018, updated Dec 2023) give crystalline penicillin G 4 MU IV q4h for 10 to 14 days, alternative ceftriaxone 2 g IV daily for 10 to 14 days. The source is now Alberta, the explanation cites Alberta and CDC, and ceftriaxone is 2 g to match. The accept lists are unchanged and probed. |
| 14 | q3 | FIXED | The old key was CT, LP, HIV test and EEG for a CNS infection with a seizure. That is the keeper seizures-14 q3 ("CT head before LP ... LP ... MRI; EEG; ... HIV test"). It is now keyed to neurosyphilis-specific tests after a normal CT: CSF VDRL, CSF cell count and differential, CSF protein, CSF FTA-ABS and an HIV test (required 3). Sources: Alberta STI guideline and the CDC 2021 syphilis page (CSF-VDRL highly specific but insensitive, negative CSF FTA-ABS makes neurosyphilis highly unlikely, HIV test for all with neurosyphilis). The KF stays LOC 1. |
| 14 | q4 | FIXED, PASS (D1) | The update now reads "Back in the department", because q3 now reports the CT. The repeat: midazolam 10 mg IM for status with no IV repeats seizures-23 q2 ("Intramuscular midazolam") and the old 14 q4 key. The wording is seizures KF 4 ("using anticonvulsants in a progressive fashion to terminate the seizures as promptly as possible"). RAMPART 73.4% against 63.4% is correct. After the q3 fix, this is the only repeat in 14. |
| 15 | q1 | PASS | Hypoactive delirium rather than depression. Not keyed elsewhere. |
| 15 | q2 | FAIL (repeat) | Pacing for convulsive syncope from complete heart block with a wide escape is the keyed decision of seizures-31 q3 (signed off: "Transcutaneous pacing" for complete heart block with a wide complex escape, seizures KF 2). It also appears in ischemic-heart-disease-07 q2. On its own this could stand under D1, because seizures KF 2 reads "investigate for rapidly reversible causes (e.g., ... arrhythmias) and treat promptly". The atropine key was checked against ERC 2025 ("Do not give atropine to patients with high-degree atrioventricular block and wide QRS"), and it is correct. |
| 15 | q3 | PASS | Timolol eye drops as the reversible cause. |
| 15 | q4 | FAIL (repeat) | Reassess capacity once the delirium clears, respect a capable refusal, and the family member cannot consent. This is delirium-agitation-26 q4 ("Accept his choice ..." with "Ask his wife to consent" as a distractor) and 23 q4 ("Assess whether he has regained capacity"). It is a second repeat, so D1 cannot cover 15. |

## Per SAMP

- **04: FAIL.** Two repeats of the keeper tox-15: q2 benzodiazepine for withdrawal agitation and q4 objective severity signs. q2 and q3 also converge with 11. The GHB story keys the delirium tremens decisions with the drug swapped. The approved rebuild direction itself asked for "high dose benzodiazepine ... and objective signs", so the direction led here.
- **05: PASS (D1 on q3).**
- **06: PASS (D1 on q2).**
- **07: PASS.**
- **09: FIXED, PASS (D1 on q3).**
- **11: FAIL.** q1 repeats tox-24 q2 and q3 repeats delirium-agitation-03 q1, which is two repeats. q3 and q4 also converge with 04.
- **14: FIXED, PASS (D1 on q4).**
- **15: FAIL.** q2 repeats seizures-31 q3 and q4 repeats delirium-agitation-26 q4. One repeat is the most D1 allows.

## D1 repeats

Each question below passes only because of D1. None is in the D1 table yet. The product owner must add each one, or the question goes back for rebuild.

| Question | Repeated decision | Signed-off SAMP it echoes | Key feature wording relied on |
|---|---|---|---|
| delirium-agitation-05 q3 | Low-dose haloperidol before restraint in an older delirious patient | analgesia-sedation-03 q4 (cluster 26 keeper), delirium-agitation-35 q4 | Delirium KF 4: "first use appropriate chemical agents to sedate" |
| delirium-agitation-06 q2 | Acetaminophen level for a combination cold product, not a urine screen | tox-11 q2 (cluster 46 keeper) | Tox KF 7: "specific serum levels versus urine/gastric screens" |
| delirium-agitation-09 q3 | Hemodialysis for a renally cleared drug causing encephalopathy in kidney failure | seizures-42 q3, tox-24 q4, tox-07 q2 (cluster 47 keeper) | Tox KF 6: "elimination techniques ... based on the pharmacokinetics of the toxins" |
| delirium-agitation-14 q4 | Midazolam 10 mg IM for status with no IV | seizures-23 q2 | Seizures KF 4: "using anticonvulsants ... to terminate the seizures as promptly as possible" |

If D1 is not extended, these would also have been D1 candidates, but their SAMPs fail on a second repeat: 15 q2 (seizures KF 2, arrhythmia), 15 q4 (delirium KF 5), 04 q4 (tox KF 8), 04 q2 and 11 q3 (delirium KF 4), and 11 q1 (tox KF 2).

Three of the four D1 questions (05 q3, 06 q2, 09 q3) repeat the keeper of their own cluster. The review brief says a rebuild must not retell the keeper's keyed decisions. D1 has no carve-out for keepers, so this needs an explicit decision.

## For the physician

- **Three FAILs need a new story, not a patch.** They are 04, 11 and 15. In each, two questions key decisions already signed off elsewhere.
- **The key features themselves are crowded.** Delirium KF 4 (sedation before restraint) and KF 5 (capacity and substitutes) are already keyed in many signed-off SAMPs. Most obvious decisions under them are taken. A rebuild of 15 must still carry a KF 5 question, and of 04 and 11 a KF 4 question. You may want to allow one KF 4 or KF 5 repeat per SAMP explicitly, or accept that these rebuilds need unusual angles.
- **The approved directions caused some of the repeats.** The directions for 04 ("high dose benzodiazepine ... objective signs"), 06 ("an acetaminophen level for combination products") and 15 ("pacing, and capacity to consent to a pacemaker") keyed decisions already in the bank. The directions' keyword search missed them.
- **09 q4:** HCCA s. 20 was checked directly in the Ontario consolidated statute, and the key is correct.
- **14:** the treatment is now sourced to the Alberta provincial STI guideline, a Canadian source with a neurosyphilis regimen. PHAC and BCCDC both defer neurosyphilis treatment to ID. Please confirm the new q3, which keys the CSF tests for neurosyphilis and an HIV test.
- **05 q2** still treats gout with a systemic glucocorticoid while the joint culture is pending, as the writer flagged.
- Tintinalli is not cited.
