# Review of signed-duplicate rebuilds, round 2, group r2j

This is an independent review of docs/reviews/signed-rebuild-r2j.md. It covers loc-05, loc-08, loc-09 and loc-10 in `src/samps/s07/loc.ts`. It follows scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md. The reviewer edited nothing. Every fix below is for a writer, and each revision needs a fresh review.

## Verdicts

| SAMP | Verdict | Main reason |
|---|---|---|
| loc-05 | FAIL | q3 does not fit seizures KF 3. q5 now converges with the in-progress r2c rebuild of headache-12 (same lead-paint renovation story, 3/3 cross-score). q4 converges with loc-10 q4 |
| loc-08 | FAIL (story sound, one key fix) | q3 gives full marks without stopping the ifosfamide ("Recheck glucose" plus "Oxygen" scores 2/2). The fix narrows the accept list, so it goes back to the writer |
| loc-09 | FAIL | q1 repeats signed cva-05 q2. Each SAMP's keyed answers score 3/3 on the other. Same KF (cva 2), same reason (aphasia taken for confusion, sudden onset, right hemianopia). No D1 claim was made, and a new keyed decision is needed |
| loc-10 | FAIL | q3 repeats signed tox-24 q3 (anticipating complications of baclofen toxicity over the next 24 hours, tox KF 5), and the story runs parallel to tox-24. q4 scores 3/3 against signed pre-eclampsia-06 q4 and against loc-05 q4. The title cues the answer |

No D1 repeat is used or claimed. D1 stays at 19 of 20. None of the repeats found here should take the last slot, because the writer did not claim them and each one can be designed out.

## Structure and diff scope

- A block-by-block comparison with `git show HEAD:oral-exam-sim/src/samps/s07/loc.ts` finds 15 SAMPs in the same order. Only loc-05, loc-08, loc-09 and loc-10 differ.
- Outside the SAMP array, the first hunk (at line 106) is the only change, and it only adds lines: seven `Source` constants (GCS_AID, WHO_LEAD, OPC_ANTIDOTES, BC_IFOSFAMIDE, IFOSFAMIDE_REVIEW, CSBPR_CANCER, LIORESAL_IT). Each is cited by one of the four SAMPs. Nothing else in the preamble changed.
- Each SAMP keeps its id, its topic, its question count, and each question's kind and key feature (checked programmatically). Each has `reviewed: false` and version 1 to 2. All four ids are in src/samps/held-back/r2j.json (untracked, unchanged by the writer).
- **The six removed constants** (ERC_POST, ISMP_PACK, TOX_2023, CSBPR_CVT, GUANFACINE_SERIES, GUANFACINE_TODDLER) were never in the HEAD file. They were round 1 working-copy additions, so this diff does not touch them against HEAD. None of them appears in loc.ts. None of their names or source ids is referenced anywhere in src or tests. The only name match is `TOX_2023` in src/samps/s03/arrhythmia.ts, which is that file's own module-local constant and unrelated.
- **Report inaccuracies.** The report says "Six new sources were added". Against HEAD there are seven. It also says the Teasdale GCS aid was "already in file". GCS_AID is new against HEAD. It came over from the round 1 working copy, and HEAD already has GCS40 (Lancet Neurology 2014). GCS_AID is a real source (the PDF resolves and supports E2 "to pressure", V2 "sounds" and M4 normal flexion), so this is a reporting error, not a defect.

## Unrequested changes, judged on their merits

- loc-05 `alsoTopics` gains "tox". This fits a lead poisoning story. Acceptable.
- Required counts changed (loc-05 q1, q4 and q5, loc-08 q1, q3, q4 and q5, loc-10 q2 and q4), and loc-05 q3 went from menu select 2 to menu select 1. These follow from the new keys. The kind is kept, and SAMP_SPEC allows select 1 to 4. Acceptable.
- Weights were added to the vitals of loc-05, loc-09 and loc-10. Acceptable.
- Nothing else unrequested was found.

## Rows

### loc-05 (cluster 69, keeper seizures-01): 6-year-old with lead encephalopathy

| Question | Verdict | Notes |
|---|---|---|
| q1 short, loc 5 | PASS | E2 V2 M4 = 8 matches the stem and the Teasdale aid. No other key uses E2 V2 M4. Keeper 0/2 |
| q2 short, loc 1 | PASS | The WHO 2021 guideline supports the lead features (abdominal pain, constipation, vomiting, and cerebral edema with death within 48 h of the first convulsions, lines 2096 to 2106 of the text). Generic items (DKA, sepsis, ingestion) also score from signed pre-eclampsia-06 (2/3 from its q1 alone), which is normal for a differential. Keeper 0/3 |
| q3 menu, seizures 3 | FAIL | See "Specific questions". Parenteral chelation is the right answer and it is sourced (WHO recommendation 7.3, strong. WHO notes that parenteral chelation is safer with an unprotected airway. OPC and MPC 2025 list DMPS for lead with encephalopathy in place of BAL). The fit to KF 3 is poor: the prompt hands over the KF 3 diagnosis ("his status epilepticus"), and the keyed decision is a toxin-specific treatment. That is seizures KF 4 ("treat special causes like ... toxins") or tox KF 4. Fixing this needs a new keyed decision, so it is not a wording fix |
| q4 short, loc 1 | FAIL (convergence) | The accept list is nearly the same as loc-10 q4 in this group. Each question's key texts score 3/3 on the other. One of the two must change, and loc-10 q4 is the one to change (see below). If loc-10 q4 is redesigned, this row becomes PASS. Signed pre-eclampsia-06 q4 (CT triggers) scores 2/3 here |
| q5 short, loc 3 | FAIL (convergence) | The collateral is sound and sourced (WHO: hand to mouth, pica with paint flakes, kohl and surma). But the r2c rebuild of headache-12 in src/samps/s11/headache.ts (modified 17:27, after this writer finished) now tells a lead poisoning story from sanding and heat-gun paint removal in a 1920s house. Its q1 key texts score 3/3 on this q5 (renovation, lead jobs, hobbies and remedies). Two rebuilds must not converge on one new story. The coordinator must pick which one moves |

Round 1 check: the EEG and levetiracetam pair is gone. No question keys EEG, a benzodiazepine or any antiseizure drug. Midazolam 2 mg IV (0.1 mg/kg for 21 kg) appears only in the q3 update. Every seizures-01 keyed answer scores 0 on every question.

Numbers: 4.6 umol/L x 207.2 = 953 ug/L, about 95 ug/dL, as the report says. Pyridoxine 70 mg/kg is the standard isoniazid dose, and it is a distractor.

### loc-08 (cluster 7, keeper tox-12): ifosfamide encephalopathy on day 2

| Question | Verdict | Notes |
|---|---|---|
| q1 short, loc 3 | PASS | Torchia 2025 supports onset within 48 h and the risk factors. Keeper tox-12 1/3, ems-07 2/3, headache-12 (HEAD) 1/3. The matches are loose ("dose" and "infusion" in the pump item, "liver" in an item whose text is kidney and albumin). The loose words let signed loc-13 and delirium-agitation-04 differential answers reach 3/3 across questions. Suggest removing "dose" and "liver" |
| q2 single, loc 1 | PASS | Key position 0. The key is not the longest option. Tell the physician: asterixis makes serum ammonia an attractive distractor, and ifosfamide-related hyperammonemia is reported. CT is still the more important exclusion in metastatic sarcoma. The explanation says non-contrast CT "looks for brain metastases". Non-contrast CT is insensitive for small metastases, so a writer should soften that to "large lesions, hemorrhage or edema" |
| q3 short, loc 2 | FAIL (fix needed) | "Recheck glucose" plus "Oxygen" scores 2/2 without stopping the pump. Her glucose is 6.4 and her SpO2 97%, so neither step reverses anything. Signed loc-13 and delirium-agitation-04 keyed answers also score 2/2 here. Fix: drop the glucose and airway items, or raise required so that a pump or ifosfamide action is needed. Also, "Avoid sedating drugs" scores nothing, because the matches say "sedative", not "sedating". Add "sedating". The BC Cancer monograph ("discontinue ifosfamide and institute appropriate supportive therapy") supports the key |
| q4 short, tox 4 | PASS, flagged | Doses match Torchia 2025: methylene blue 50 mg IV up to 6 times a day, thiamine 100 mg IV every 4 h, hemodialysis for severe cases or non-response. BC Cancer "Methylene blue may be effective". The BC Cancer drug index confirms the 1 June 2010 monograph is still the current version. Methylene blue is keyed elsewhere only for methemoglobinemia (tox-36 q2), which is a different reason. Keeper 0/2 |
| q5 short, loc 1 | PASS, note | Differential in a patient with cancer on chemotherapy. Signed loc-13 (cirrhosis) and delirium-agitation-04 score 3/3 from their own differentials. That is the usual overlap of broad LOC differentials, and the reason differs, so it is not counted as a repeat. A tighter, cancer-specific list (leptomeningeal disease, neutropenic sepsis, NCSE with ifosfamide) would be better |

### loc-09 (cluster 42, keeper cva-04): multi-territory emboli from NBTE

| Question | Verdict | Notes |
|---|---|---|
| q1 short, cva 2 | FAIL (repeat) | Signed **cva-05** ("Confused since lunch") q2 keys "Sudden onset at a clear time", "Fluent speech with paraphasias", "Homonymous hemianopia" to show that aphasia is a stroke, not delirium. This q1 keys sudden onset, "wrong and made-up words, which are aphasia rather than confusion", and a right field defect, for the same reason under the same KF (cva 2). cva-05 q2 texts score 3/3 on q1, and q1 texts score 3/3 on cva-05 q2. The writer's decision search missed it (simcheck rank 10, 0.12/0.07). The titles also run parallel ("Not making sense after breakfast" and "Confused since lunch"). A new keyed decision is needed. Keeper cva-04 0/3 |
| q2 menu, cva 3 | PASS | The CSBPR 7th ed Box (p. 68 of the Dec 2025 revision) lists "Stroke ... in the preceding 3 months" and "Platelet count <100,000" under "Relative Exclusion Criteria (requiring clinical judgement ...)". It lists none of the six distractors. BP 168/92 is below 180/105, and glucose 6.8 is inside 2.7 to 22.2. See "Specific questions" |
| q3 short, cva 3 | PASS | Mechanisms match CSBPR section 11 word for word (marantic endocarditis, hypercoagulability, paradoxical embolism, vascular compression, treatment-related). Nonbacterial or marantic endocarditis appears in no other key. cva-34's "likely endocarditis" hits only the infective item (1/2) |
| q4 single, cva 3 | PASS | Key position 3. The key is not the longest option. AF (the keeper's answer) is a distractor. Minor clinical consistency point: neologistic "made-up words" suggest a left temporal lesion, and the MRI lists left occipital, right frontal and left cerebellar infarcts only. Add a left temporal or parietal infarct, or describe the speech as anomic |
| q5 short, airway 2 | PASS | Standard airway indications. CSBPR 5D.1 names vomiting and reduced oxygenation. Keeper 1/2 |

### loc-10 (cluster 70, keeper tox-14): intrathecal baclofen overdose

| Question | Verdict | Notes |
|---|---|---|
| q1 short, loc 3 | PASS | The monograph names programming errors, rapid dose increases, catheter contents and oral baclofen as causes. Keeper tox-14 1/3. The round 1 D1 echo of tox-14 q1 (medication list and pill count) is gone |
| q2 short, loc 2 | PASS, note | The Lioresal Intrathecal monograph (revised 5 May 2020) supports the key: remove residual solution, intubate if needed, 30 to 40 mL CSF early if LP is not contraindicated, support circulation. "Oxygen" plus "Intubate" scores 2/2 without the pump or CSF step. That is defensible at RR 8 and SpO2 89%, but a writer may want the pump step to be needed |
| q3 short, tox 5 | FAIL (repeat) | Signed **tox-24** (baclofen accumulating in kidney failure, drowsy, pulse 48, 35.4°C, pupils 3 mm) q3 asks "Which ... complications should be anticipated over the next 24 hours?" (tox KF 5) and keys respiratory depression. Its explanation lists respiratory depression, seizures, coma, bradycardia and hypothermia. This q3 asks the same question about the same drug under the same KF. Its key's first item carries "respiratory depression", and the tox-24 list scores 3/3. The writer's defence (one item of eight) applies to a single line inside an unrelated list. Here the whole question is the same. The stories also run parallel: a drowsy patient, pulse 54 against 48, the same 35.4°C, 3 mm reactive pupils, and a recent iatrogenic baclofen change found through collateral. simcheck does not surface tox-24, because "intrathecal" and "pump" dominate the text |
| q4 short, loc 1 | FAIL (repeat and convergence) | Signed pre-eclampsia-06 q4 keyed texts (new focal deficit, GCS that fails to improve, recurrent seizure) score 3/3 here. The question is also near-identical to loc-05 q4 in this group (3/3 both ways) |
| Title | FAIL (cue) | "Floppy after a clinic visit" points to the refill that q1 asks the candidate to find and the q2 update reveals. Use a neutral title |

## Specific questions from the task

**loc-05 q3 and seizures KF 3.** KF 3 reads "Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly." The stem sets up that diagnosis (two seizures without waking between them), but q3 does not test it. The prompt names it ("the cause of his status epilepticus"), and the key is a toxin-specific antidote. Across the bank, the other five seizures KF 3 questions all key antiseizure steps. The decision fits seizures KF 4 ("treat special causes like eclampsia or toxins") or tox KF 4 far better. Under the rule that each question keeps its key feature, this question does not fit. The writer's own note to the physician asks the same thing. Verdict FAIL unless the physician accepts "treat promptly" as covering cause-directed treatment.

**Does naming no chelating agent make the key vague?** No, not in a way that changes the answer. The options contrast route (oral succimer), timing (repeat the level first) and decontamination (whole bowel irrigation). "Parenteral chelation" is the only parenteral chelation option. The WHO text supports route as the deciding point ("Parenteral administration of chelation therapy is safer in encephalopathic patients who have an unprotected airway"). Leaving the agent unnamed avoids a Canadian availability trap: the OPC and MPC 2025 list gives DMPS "in place of dimercaprol (BAL) since this chelator is no longer available", and it does not list CaNa2EDTA. One cue remains. The key is the longest option (51 characters, 1.27 times the mean distractor, within the 1.5 rule), and it alone carries a consult clause, "arranged with the poison centre". SAMP_SPEC section 75 says to move such qualifiers into the explanation. "Parenteral chelation now" would do.

**loc-08 q4, case-level evidence.** True. Every item rests on case reports, small series and a 2025 narrative review, with BC Cancer's "may be effective". Keying them is acceptable because the prompt frames them as treatments to "consider with her oncologist" and they are the standard options in current references. The dose items are optional wording, since the match phrases need only the drug names. Required 2 of 3 is demanding for niche oncology knowledge. The physician may prefer required 1.

**loc-09 q2, relative exclusions left to judgement.** The key is a classification against a named Canadian list, not a treatment decision. The list is explicit and quoted above, so the key is verifiable and not a judgement call. The treat or do-not-treat judgement is given in the q3 update (the neurologist advises against). The inclusion criteria ask for a life expectancy of 3 months or more and treatment within goals of care, so a candidate could argue about the "Active lung adenocarcinoma" option. It is not on the exclusion list, and the question asks about exclusions, so the key holds. PASS.

**Round 1 EEG and levetiracetam pair in loc-05.** Confirmed gone (see the loc-05 rows).

## What each writer fix needs

- **loc-05:** give q3 a decision that fits seizures KF 3 without any antiseizure step keyed by seizures-01, or get the physician's ruling that cause-directed treatment fits KF 3. Resolve the lead-story convergence with r2c headache-12 (one of the two changes its story). Shorten the q3 key to drop the consult clause.
- **loc-08:** in q3, remove the glucose and airway accept items (or make the ifosfamide step necessary for full marks) and add "sedating" to the sedatives item. Optional: tighten the q1 matches ("dose", "liver") and soften the q2 CT wording.
- **loc-09:** replace q1 with a decision that cva-05 does not key. Change the title. Optionally align the MRI with the aphasia.
- **loc-10:** replace q3 with a decision that tox-24 does not key. Replace q4 with a decision that neither loc-05 q4 nor pre-eclampsia-06 q4 keys. Retitle neutrally. Change the 35.4°C and the parallel details that echo tox-24.

## Checks

- Keeper and near-neighbour probe with the engine's markQuestion (vite-node, scratchpad/r2jrev/probe.ts). Every keyed answer of each comparison SAMP was run against each question. Keepers never reach full marks: seizures-01 0 on all five, tox-12 at most 1, ems-07 at most 2/3, cva-04 at most 1/2, tox-14 at most 1/3. Full-mark hits from other SAMPs are listed in the rows above (cva-05 on loc-09 q1, pre-eclampsia-06 on loc-10 q4, loc-05 and loc-10 q4 on each other, r2c headache-12 on loc-05 q5, loc-13 and delirium-agitation-04 on loc-08 q3).
- Natural wording probes: "Lead poisoning", "Fever", "Does he eat paint chips", "Stop ifosfamide", "Methylene blue", "Sudden onset", "Aphasia", "BVM", "Empty the pump reservoir" all score. "Avoid sedating drugs" (loc-08 q3) does not.
- Decision search in allkeys.tsv: chelat, succimer, EDTA, DMPS, blood lead, ifosfamide, nonbacterial or marantic, intrathecal each give 0 or only the hits named above. "Stroke within 3 months" is keyed only for STEMI fibrinolysis (chest-pain-15 q1, ischemic-heart-disease-01 q4), which is a different reason.
- simcheck rerun: the report's top 5 are reproduced. cva-05 sits at rank 10 for loc-09, and tox-24 does not appear for loc-10.
- Sources opened: WHO 2021 lead guideline, OPC and MPC 2025 antidotes, BC Cancer ifosfamide 2010 (confirmed current in the BC Cancer drug index today), Torchia 2025, CSBPR acute 7th ed (Dec 2025 revision) and section 11, Lioresal Intrathecal PM 2020, Teasdale GCS aid. Each says what is claimed, apart from the notes above.
- House style: no em or en dashes and no semicolons in the four blocks. Options are alphabetical. Menu and single length rules are met.
- `SAMP_BATCH=s07 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 512 passed (run once). The type check was not run by this reviewer. The landing gate runs it.
- No command was refused.

## For the physician

- **loc-05 q3:** please rule on whether "treat promptly" in seizures KF 3 covers treating the cause (parenteral chelation for lead encephalopathy). This reviewer thinks it belongs under seizures KF 4 or tox KF 4. The key itself (urgent parenteral chelation, agent chosen with the poison centre because BAL is no longer available in Canada) is sound.
- **Lead story collision:** r2c's headache-12 and r2j's loc-05 both now tell lead poisoning from sanding old house paint. Only one should keep it.
- **loc-08 q4:** methylene blue, thiamine and hemodialysis for ifosfamide encephalopathy rest on case reports and series. Please confirm this suits CCFP-EM, and whether required should be 1 rather than 2.
- **loc-09:** the NBTE story and its q2 to q5 are sound. Only q1, which re-keys cva-05's aphasia-not-delirium decision, needs to change.
- **loc-10:** the intrathecal overdose story is new, but q3 re-asks tox-24's baclofen complication question. The stem also echoes tox-24's vitals.
- No D1 repeat is needed or recommended for any of the four.
