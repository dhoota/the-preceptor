# Review of signed duplicate rebuilds, round 2, label r2b

Reviewer, independent of the writer. Nothing was edited or committed (REVIEW-RULES rule 1). Every fix below is for a writer. Scope: chest-pain-02, 03, 06, 09 and 14 in `src/samps/s05/chest-pain.ts`. chest-pain-11 is a "cannot" and still holds round 1 text, so it was not reviewed.

Read: the review brief, docs/reviews/REVIEW-RULES.md, SCORING-RULINGS.md, SCORER-NEGATION.md, the writer report (signed-rebuild-r2b.md), the round 1 review (signed-rebuild-g02-review.md), the round 2 packets, the files listed for each id in RULINGS-BY-SAMP.md, and the cluster sections in SIGNED-DUPLICATES.md.

## Verdict

| SAMP | Verdict | Reason |
|---|---|---|
| chest-pain-02 | **PASS** | New keyed decisions, checked against ESC 2023 Table 7 and CCS 2019 Table 3. There are some non-blocking scoring notes. |
| chest-pain-03 | **FAIL** | q5 repeats the decision in ischemic-heart-disease-14 q2 (signed) and chest-pain-15 q4, and the writer claimed no repeat. Correct wording zeroes q4 ("Cancel the chewed ASA") and q5 ("Any delay in PCI loses myocardium") through dangerous items. |
| chest-pain-06 | **FAIL** | q3 keys the decision that the adjudicators named as what makes cva-09 distinct, which is to withhold thrombolysis and antithrombotics when a dissection mimics an ischemic event. q2 also echoes the cardiac surgery item that cva-09 q4 and chest-pain-01 q4 share. Negation-carrying phrases give full marks to dangerous answers on q3 and q4 (ruling 3). |
| chest-pain-09 | **FAIL** | q4 (repeat troponin because the 0 h/1 h result is indeterminate) repeats the signed serial troponin decision, which is the literal wording of IHD key feature 1, and it was not claimed. On q2 a natural correct line scores 0, and on q3 a line that rejects the key scores. |
| chest-pain-14 | **FAIL** | q1 gives full marks to "Pulmonary embolism". q2 repeats ischemic-heart-disease-17 q3 (signed). On q3 a line that concludes "embolism is unlikely" scores full marks (ruling 3). |

**D1 claim refuted.** The writer claims no D1 repeats. I find undeclared repeats in chest-pain-03 q5, chest-pain-06 q3 (q2 probably too), chest-pain-09 q4 and chest-pain-14 q2. D1 stands at 19 of a frozen 20, so at most one of these could land, and only as a named D1 row with the physician's agreement. None is a keeper echo (landing rule 1): each keeper's keyed answers score 0 or partial on every write-in question (see Probes).

## Diff scope and structure

- `git diff HEAD -- src/samps/s05/chest-pain.ts` touches only the blocks of chest-pain-02, 03, 06, 09, 11 and 14, plus source constants. I split the file into SAMP blocks and compared each with `git show HEAD:`. **chest-pain-07, 08, 13 and 15 are byte for byte identical to HEAD.** The other SAMPs (01, 04, 05, 10, 12) are unchanged, and `meta` is unchanged.
- Each rebuilt id keeps its id, topic, question count, and each question's kind and keyFeature. Each has `version: 2` and `reviewed: false` after `...meta`. All six ids are in `src/samps/held-back/r2b.json` (untracked, as the writer said).
- Required counts changed on several questions (for example 02 q2 and q4 went from 2 to 1, 03 q5 from 1 to 2, and 14 q1 from 2 to 1). The brief does not fix these, and each fits its new key.
- **Unrequested change:** `alsoTopics: ["ischemic-heart-disease"]` was added to chest-pain-06 and chest-pain-14, which had none at HEAD. On the merits it is acceptable for 14 (MI from coronary embolism). For 06 (a dissection that mimics STEMI) it is defensible but weak. It is not a reason for failure on its own.
- **Removed constants. The report is inaccurate, and this matters for restores.** The writer says three constants were removed (ASA_HYPER, KHAN_OCC, CANO_LEAD). Nine were removed:
  - ASA_HYPER, KHAN_OCC and CANO_LEAD were already unreferenced at HEAD. They were left over from the g02 landing, not used by round 1 texts as the report says.
  - CCS_STEMI (HEAD 02 and 03), CCS_APT (HEAD 03), ESC_ACS (HEAD 02, 03, 09 and 14), BTS and ATLS (HEAD 06) and COCAINE (HEAD 11) were used only by the HEAD text of these ids.
  - All nine are unreferenced in the working tree, so the file type-checks. **However, restoring chest-pain-11 to its HEAD text also requires restoring COCAINE.** Restoring any failed id to HEAD also requires its constants: CCS_STEMI, CCS_APT and ESC_ACS for 03, BTS and ATLS for 06, and ESC_ACS for 09 and 14. The simplest safe route is to restore those blocks and constants from HEAD together.
- House style: there are no em or en dashes, smart quotes or semicolons in any string of the five SAMPs. Prose uses Canadian spelling, and US spellings appear only in match lists.

## Tests

`SAMP_BATCH=s05 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 474 of 474 (run once). I did not run tsc (optional under rule 2). No command was refused.

## Probes (markQuestion / lineMatches on the working tree)

- **Keeper and cluster answer sets** (writer's keeper_lines.json, checked line by line):
  - 02: q1 1/2, q2 0/1, q4 0/1.
  - 03: 0 on every write-in question.
  - 06: 0 on every write-in question.
  - 09: q1 1/3, q2 0/2, q3 1/2.
  - 14: 0 on every write-in question.
  - No keeper scores full marks. This confirms the writer's claim.
- **Every other bank key line in allkeys.tsv** that gives full marks:
  - 02: q1 cva-08 and multiple-trauma-04 (word collisions). q2 IHD-12 q3, IHD-14 q1 and chest-pain-16 q2 ("large anterior infarct" type items). q4 chest-pain-04 q4 and dvt-pe-05 q2.
  - 03: q1 IHD-40 q1.
  - 09: q1 suicide-risk-07 q3. q2 pre-eclampsia-12 q1.
  - 14: q1 has **38 SAMPs**, any list containing "pulmonary embolism". q3 has 15 SAMPs ("missed doses", "inadequate", "too low").
- The results of the natural wording and adversarial probes are in the rows below.

## chest-pain-02 (cluster 2, keeper ischemic-heart-disease-01): PASS

Story: a 72-year-old man with a mechanical aortic valve on warfarin has an anterior STEMI at a PCI centre. The order set includes a UFH bolus, and his INR is 3.1.

| Q | Verdict | Notes |
|---|---|---|
| q1 (CP 2) | PASS | New decision: find out his anticoagulation status before the order set heparin. cva-08 q1 (signed, DOAC before thrombolysis: last dose and adherence) is related in concept and gives 1 of 2 at most. That is a different drug, question and topic. Natural wording scores 2/2 ("Check the INR before giving heparin" plus "Ask when he last took warfarin"). **Non-blocking notes for the writer:** (a) the "valve" item gives credit for his valve type and INR target, which the stem already states, so consider removing it. (b) "Give the heparin only if INR is below 2.5" trips the unacceptable item "give the heparin". That can be overridden, but the line states the correct rule. |
| q2 (CP 1) | PASS | 3 mm ST elevation in V1 to V4 and 1 mm in I and aVL meet the ESC criteria. Anterior STEMI and LAD occlusion wording scores, and a bare "STEMI" does not. STEMI territory recognition is keyed elsewhere for other territories (IHD-44 q1, inferior), so this is not the same decision. Its teaching value is low, and 03 q1 has the same prompt word for word (see the physician section). |
| q3 (IHD 6) | PASS | **UFH bolus rule checked against ESC 2023.** The recommendation table reads "During PCI, a UFH bolus is recommended ... if the INR is <2.5 in VKA-treated patients" (I C). Section 6.5.1 reads "In VKA-treated patients, no parenteral anticoagulation is needed if the INR is >2.5". Table 7 reads "In patients on VKAs, do not administer UFH if INR >2.5". At INR 3.1 the key "No added anticoagulant bolus" is correct. 5880 units = 70 units/kg x 84 kg. Fondaparinux in primary PCI is III B. The "No ..." option is last, as the spec requires. IHD-11 q2 (signed) keys the UFH 70 units/kg bolus, and this question keys the exception, which is a different decision. **pulmonary-edema-02 convergence:** the failed draft in the working tree keys "Primary PCI with bivalirudin" for an anterior STEMI at a PCI centre after HIT, and the r2m reviewer suggested keeping that q1 in a rebuild. The stories differ (mechanical valve and INR against remote HIT), and so do the keys (no bolus against bivalirudin). The shared thing is a template, "which anticoagulant for this primary PCI", with overlapping distractors (enoxaparin, fondaparinux, UFH). I do not count this as convergence on one story, but the coordinator should keep it in view if pulmonary-edema-02 q1 comes back. |
| q4 (IHD 6) | PASS | CCS 2019 Table 3 and Recommendation 21 set 90 minutes or less from FMC to device for patients presenting to a PCI centre, and 120 minutes or less for a non-PCI centre or field diagnosis. I checked this in the local full text, along with the 10 and 30 minute sub-goals in the explanation. IHD-17 q1 (signed) computes an FMC-to-device time against the 120 minute rule. That is a different decision. Minor: a line that adds the lab sub-goal ("... door to device 30 minutes in the lab") trips the unacceptable item "30 minutes", which can be overridden. |

Sources: ESC 2023 and CCS 2019 are both real, I opened both, and they say what is claimed. There is no D1 repeat, and the keeper does not score.

## chest-pain-03 (cluster 36, keeper ischemic-heart-disease-08): FAIL

Story: a lateral STEMI at a PCI centre in a man with ASA-induced hives and lip swelling in 2021. This is the round 1 chest-pain-02 story, which g02 said "can stay", moved to this id.

| Q | Verdict | Notes |
|---|---|---|
| q1 (CP 1) | PASS | 2 mm in I, aVL, V5 and V6 is a lateral STEMI. Same prompt as 02 q2 (see the physician section). |
| q2 (CP 1) | PASS | Circumflex or obtuse marginal, with diagonal also accepted. The Elhakim 2026 review is real and supports this (lateral wall, and the ECG detects a circumflex occlusion in a third to a half of cases). There are no keyed hits in the bank. "Circumflex rather than RCA" trips the non-dangerous RCA item (ruling 2, known). |
| q3 (IHD 6) | PASS, physician to confirm | **Desensitization after PCI.** Lin 2024, J Med Cases, doi 10.14740/jmc4239 (PMC11287907), is real and the writer opened it. It lists "perioperative intravenous glycoprotein (GP) IIb/IIIa antagonist therapy with subsequent aspirin desensitization" among the options and says all of them lack "formal validation". It names SJS, TEN and DRESS as the reactions that rule out desensitization. It is a single-centre case report with a narrative review, and in its own case revascularization was delayed. ESC 2023 says nothing on ASA hypersensitivity (I searched the local full text). The key is defensible as the single best answer on first principles: reperfusion cannot wait hours for desensitization. The evidence behind it is weak, though. The decision tested is the sequence (PCI before desensitization), not PCI over lysis, so it is not a D1 repeat of chest-pain-15 q2. The g02 review passed the same decision in round 1 ("new"). |
| q4 (CP 2) | **FAIL (scoring)** | Dangerous items fire on correct instructions, which zeroes the question with no override. "Cancel the chewed ASA" matches the dangerous item "chewed asa", because "cancel" is not a negation word. "Remove ASA from the orders, rectal ASA too" matches "rectal asa". "Cancel the ASA 160 mg" matches "asa 160". Ruling 3: "Low dose aspirin only, no full dose" scores the "no ASA" item through the phrase "no aspirin". **Fix for the writer:** make the dangerous items order-only ("give asa", "chew asa now", "asa 160 mg po") and never plain drug-plus-dose or "rectal asa". Or add "cancel" and "remove" forms that are checked first. That second route needs an engine change, so the first is safer. |
| q5 (CP 5) | **FAIL (repeat + scoring)** | **Repeat.** ischemic-heart-disease-14 q2 (signed): after sublingual nitroglycerin his pain resolves, a colleague suggests deferring angiography, and the question asks why that is unsafe. The key item is "Pain relief with nitroglycerin does not exclude ACS". This question has the same decision and the same reason (pain relief after an analgesic does not mean the artery has opened) in the same format. IHD-10 q1 also keys "Resolution of pain does not exclude ACS". The "myocardium" item and the "consultant asks to delay, proceed now" shape repeat chest-pain-15 q4, which the g02 physician note 3 already flagged as doubled. The writer's decision search did not cover q5. This is literal IHD KF 4 wording ("pain resolution"), so D1 could cover it only as the twentieth and last row, by the physician's decision. **Scoring:** "Any delay in PCI loses myocardium" hits the dangerous item "delay pci", because the scorer ignores word order, and zeroes the question. That is the key's own reasoning. "Pain relief does not mean reperfusion" scores nothing. **Fix:** re-key q5 to a new decision, and drop "delay pci", "defer pci" and "postpone" as dangerous items. |

## chest-pain-06 (cluster 15, keeper asthma-copd-05): FAIL

Story: a type A dissection with hemopericardium and tamponade, RCA involvement giving an inferior STEMI, and a STEMI pathway that paramedics activated. The hospital has cardiac surgery on site.

| Q | Verdict | Notes |
|---|---|---|
| q1 (CP 1) | PASS | The four ACC/AHA 2022 complications (AR, coronary malperfusion, tamponade, branch malperfusion). I checked this in the local full text. Natural wording scores 2/2. |
| q2 (CP 2) | FAIL (probable repeat) | "Operating room now for aortic repair". ACC/AHA 2022 recommends "emergency surgical consultation and evaluation and immediate surgical intervention" for acute type A dissection. That is correct, but emergency cardiac surgery for type A dissection is already keyed in cva-09 q4 and chest-pain-01 q4 (both signed). SIGNED-DUPLICATES lists that pair as a near miss because both key cardiac surgery. The distractors (PCI, CT first, pericardiocentesis) add a real twist, but the keyed decision is the same, for the same reason. The "complete drainage" distractor matches ESC 2015 (controlled drainage of very small amounts to hold about 90 mmHg), which I checked in the local text. |
| q3 (CP 2) | **FAIL (repeat + ruling 3)** | **Repeat.** cva-09 q4 (signed, s05) keys "Withhold thrombolysis and antithrombotics" for a type A dissection that mimics an ischemic event. SIGNED-DUPLICATES names exactly this as the decision that separates cva-09 from chest-pain-01. Here the mimic is a STEMI rather than a stroke, and three of the four items are that same decision split up (no heparin, no P2Y12, no lytic). Only "stand down the cath lab" is new. The writer flagged this to the physician but claimed no D1. It does not fit D1 anyway, because it is not literal key feature wording. **Ruling 3:** "Continue heparin but no tenecteplase" plus "Keep ticagrelor, no more ASA" scores **2/2**. That is the dangerous plan, scored full marks through "no heparin", "no more asa" and similar phrases. **Scoring gaps:** "Withhold antithrombotics" scores nothing. "Do not proceed to PCI" scores nothing. "Cancel the cath lab rather than proceed to PCI" is dangerous (ruling 2, known). |
| q4 (CP 2) | **FAIL (scoring)** | The content is sound and new. No beta blocker in hypotension or tamponade is the inverse of chest-pain-01 q4 and cva-09 q4. The ESC 2015 III C on vasodilators and diuretics in tamponade is checked, and so is the ACC/AHA "lowest BP that maintains adequate end-organ perfusion" (note that it targets a heart rate of 60 to 80, not below 60). **Ruling 3:** "Esmolol to a heart rate of 60, no nitroprusside" plus "Labetalol, no diuretic" scores **2/2**. Beta blockade in a man at 72 mmHg gets full marks through the "no esmolol", "no nitroprusside" and "no diuretic" phrases. **False dangerous:** "No beta blocker, do not target a heart rate below 60" and "Hold the usual heart rate below 60 target" are zeroed by the dangerous phrase "rate below 60", which the negation does not reach. **Fix:** make the dangerous items order-only ("start esmolol", "give esmolol", "esmolol infusion", "give labetalol") and drop "rate below 60" and "heart rate below 60". Guard the accept phrases so that a line naming a beta blocker as an order cannot score through a trailing "no X". |

Since q3 needs a new keyed decision and q2 is a probable second echo, 06 needs a writer rebuild of those questions, not match fixes.

## chest-pain-09 (cluster 39, keeper ischemic-heart-disease-15): FAIL

Story: a 54-year-old man with moderate intellectual disability, whose mother reports two episodes of chest rubbing, stopping his meal and lying down. The ECG is normal.

| Q | Verdict | Notes |
|---|---|---|
| q1 (CP 3) | PASS | History from the caregiver, following the HELP review (Can Fam Physician 2018, Suppl 2). I checked it in the local PDF text: usual pain behaviour, frequency and duration, medication review, sleep, appetite and activity. The keeper gives 1/3. Minor: "Any change in his meds" scores nothing, because "meds" is not matched. The "activity" item ("stopping on walks") echoes the abdominal-pain-46 q2 story. |
| q2 (CP 5) | FAIL (scoring) | "He may not understand the question" scores **0**, because "not" falls within three words of the match word "understand". That is the explanation's own reason. "Diabetes can cause silent ischemia" is a defensible reason (IHD KF 5) and is not accepted. The key should be exhaustive. **Fix:** add phrases that carry the negation ("not understand", "may not understand", "doesnt understand"), and consider an item for atypical or silent presentation with diabetes. |
| q3 (CP 5) | FAIL (ruling 3) | "This is his usual behaviour, not new" scores the "new" item through the phrase "not usual". "This is new for him according to his mother" scores nothing. **Fix:** remove "not usual" and "not his usual", and add "new for him". The decision itself (diagnostic overshadowing) is new: there are no hits for overshadow or attributing symptoms to the disability. |
| q4 (IHD 3) | **FAIL (repeat)** | The arithmetic is correct: 21 is not below 12, the delta of 3 is not below 3 and not 5 or more, and 21 is below 52, so this is the observe zone. ESC 2023 recommends a third cTn at 3 h, which I checked in the local text (Figure 6 and section text). **The decision is keyed in the signed bank:** the next scheduled troponin when the algorithm is indeterminate. See ischemic-heart-disease-33 q2 ("Repeat troponin at 1 hour" by the ESC 0 h/1 h algorithm), chest-pain-28 q2 ("Repeat troponin and ECG at 1 to 2 hours" after a 0 h value below the 99th percentile), ischemic-heart-disease-02 q2 ("Repeat high sensitivity troponin at 1 to 3 hours per the local algorithm") and critical-appraisal-12 q4. ischemic-heart-disease-41 q2 (signed) starts from the result of this very 3 h troponin and gives the same reason for not discharging (observe zone mortality comparable to rule-in). This is literal IHD KF 1 wording ("continue serial ECGs and biomarkers until the question is resolved"), so only a D1 row could cover it. The writer searched only "observe zone" and missed these. I am not certain it is a repeat, because it is a different step of the algorithm, so under rule 4 it is a FAIL. |

**abdominal-pain-46 overlap:** both are a patient who cannot report pain, where a caregiver's report leads to ACS. The keyed decisions differ: abdominal-pain-46 keys pallor and sweating as extra-abdominal, exertional angina and PR ASA, while this SAMP keys the unreliable denial, diagnostic overshadowing and the troponin step. I judge that acceptable on its own, but the physician should see the pair.

## chest-pain-14 (cluster 41, keeper ischemic-heart-disease-04): FAIL

Story: a 71-year-old woman with AF on warfarin who missed doses has an inferior STEMI, with normal coronaries 2 years ago and an INR of 1.4. The cause is coronary embolism.

| Q | Verdict | Notes |
|---|---|---|
| q1 (CP 1) | **FAIL (scoring)** | "Pulmonary embolism" scores **1/1**, because the bare match word "embolism" hits it. So does "Aortic dissection with embolism". Every bank key list that contains "pulmonary embolism" (38 SAMPs) gives full marks. **Fix:** add an unacceptable item for "pulmonary embolism", "pulmonary embolus" and "pe", which a line with "not" or "no" still negates, and tighten "embolism" and "embolus" to "coronary embol...", "embolic mi" and similar forms. |
| q2 (CP 5) | **FAIL (repeat)** | ischemic-heart-disease-17 q3 (signed): "Which of the following statements about her CT coronary angiogram 4 years ago is most accurate?" The key is "It does not exclude a new occlusion", and the distractors include "It rules out coronary thrombosis". Here the question asks about the normal angiogram 2 years ago. The key "It fits an embolus into a normal artery" is set against "It rules out a coronary cause", "It makes an acute infarct unlikely" and similar. Every distractor is the IHD-17 error ("the old normal study lowers the probability"), so a candidate who knows IHD-17 q3 answers this by elimination. Rewording the key positively does not change the decision tested. The embolism-specific inference also restates q1 and its explanation ("plaque rupture needs plaque, which her angiogram did not show"). Needs a re-key. |
| q3 (CP 5) | FAIL (ruling 3) | Sources: Shibata 2015 (Circulation, abstract) gives 39% on a VKA and a median INR of 1.42 in that group. "Warfarin does not eliminate risk entirely, but embolism is unlikely" scores **1/1** through "not eliminate", which is the opposite conclusion. The question is also near trivial, because the update hands the candidate the INR of 1.4, and "missed doses", "inadequate" and "too low" give 15 unrelated bank lines full marks. **Fix:** remove the negation-carrying phrases from "partial" or require an embolic conclusion. |
| q4 (CP 4) | PASS with notes | Chang 2025 (Eur J Med Res) is real and full text, with NCVC criteria and causes. Required is 3 of 7. The old signed chest-pain-11 list gives 2/3. Completeness: "Recent MI with LV aneurysm" scores nothing (add "aneurysm", "akinetic", "recent mi"), and iatrogenic embolism after catheter or valve procedures is not listed. These are non-blocking, but fix them while the SAMP is open. |

## For the writer (fix list)

1. **chest-pain-03:** re-key q5 with a decision that is neither "pain relief does not exclude or delay" nor "do not delay primary PCI". Make the q4 dangerous items order-only so that "Cancel the chewed ASA" and "rectal ASA too" cannot zero the question, and remove the route by which "Low dose aspirin only, no full dose" scores through "no aspirin". Drop "delay pci", "defer pci" and "postpone" as dangerous items.
2. **chest-pain-06:** re-key q3 away from withholding antithrombotics and lysis in dissection, and preferably q2 away from emergency surgery for type A. In q4, remove "rate below 60" and "heart rate below 60" as dangerous items. Stop lines that order a beta blocker or continue heparin from scoring through a trailing "no X" (q3 and q4).
3. **chest-pain-09:** re-key q4, or ask the physician for the last D1 slot. In q2, add negation-carrying "not understand" forms and consider an atypical presentation or silent ischemia item. In q3, drop "not usual" and "not his usual" and add "new for him". In q1, add "meds".
4. **chest-pain-14:** make q1 reject pulmonary embolism. Re-key q2. Remove the negation phrases in q3. Complete q4 (aneurysm and recent MI, iatrogenic).
5. **Report:** correct the constants paragraph. Nine constants were removed, not three, and restoring chest-pain-11 or any failed id to HEAD needs its constants back (COCAINE for 11, CCS_STEMI, CCS_APT and ESC_ACS for 03, BTS and ATLS for 06, ESC_ACS for 09 and 14).
6. **chest-pain-02 (optional, non-blocking):** drop the q1 "valve" item, which the stem already answers. Consider narrowing the q1 unacceptable item "give the heparin".

## For the physician

1. **D1 is at 19 of 20.** This group has four undeclared candidate repeats: 03 q5 (IHD-14 q2), 06 q3 (cva-09 q4), 09 q4 (IHD-33 q2, chest-pain-28 q2, IHD-02 q2) and 14 q2 (IHD-17 q3). Of these, only 03 q5 and 09 q4 are literal key feature wording (IHD KF 4 and KF 1). At most one can take the last slot, and only by your decision.
2. **chest-pain-02 q3** keys no UFH bolus at INR 3.1 on warfarin. ESC 2023 supports it in three places (recommendation I C, section 6.5.1 and Table 7). Please confirm it matches Canadian cath lab practice. Some labs give a reduced, ACT-guided dose.
3. **chest-pain-02 q4** is a recall of the CCS 90 minute FMC-to-device goal for PCI-centre presenters. Please decide whether a timing number is worth a question.
4. **chest-pain-03 q3** (primary PCI now, ASA desensitization after) rests on one 2024 case report with a review, which says no strategy is validated. The ESC and CCS are silent. Please confirm you accept that evidence level.
5. **chest-pain-02 q2 and chest-pain-03 q1** both ask "What does this ECG show, and which territory is involved?" of an obvious STEMI. Each is fine alone. Together they add little to the bank.
6. **pulmonary-edema-02:** if its rebuild keeps q1 (bivalirudin for primary PCI after HIT, which the r2m reviewer recommended), the bank will have two "which anticoagulant for this primary PCI" menus on an anterior STEMI at a PCI centre, alongside chest-pain-02 q3. The keys differ.
7. **chest-pain-09 and abdominal-pain-46** share a premise: a patient who cannot report pain, with ACS found through a caregiver. The keys differ. Please decide whether the pair is acceptable.
8. **chest-pain-11** remains a "cannot" and needs your direction. When it is restored to HEAD, the COCAINE source constant must be restored with it.

## Landing decision

chest-pain-02 lands. It uses no D1 repeat. chest-pain-03, 06, 09 and 14 failed review with undeclared repeats and scoring errors. chest-pain-11 is "cannot". All five keep their signed text.
