# Q500 verify, round 3: s57, Ischemic heart disease

Fresh independent review by Preceptor of the round 3 revision of `src/samps/s57/ischemic-heart-disease.ts`. This reviewer had not written, edited or reviewed s57 before. Both lenses (clinical truth, and internal consistency and numbers). No SAMP, source or shared file was edited (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Read: Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES (rule 4 in particular), DECISIONS, SCORING-RULINGS, the previous verdict `docs/reviews/q500-verify2-s57.md`, "Round 3" in `docs/reviews/q500-writer-s57-r2.md`, and `git diff 82d299d` on the batch file. Uniqueness was checked against the catalogues for ischemic-heart-disease, chest-pain and ems, and by grep of `src/samps` and `src/cases` (911 and EMS activation, transport mode, tenecteplase doses, half dose, 0.5 mm ST depression, "100 minutes").

Tests: `SAMP_BATCH=s57 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests).

## Verdicts

| SAMP | Stem | q1 | q2 | q3 | q4 | SAMP verdict |
|---|---|---|---|---|---|---|
| ischemic-heart-disease-48 | PASS | PASS | PASS | PASS | PASS | PASS (unchanged) |
| ischemic-heart-disease-49 | PASS | PASS | PASS | PASS | PASS | PASS |
| ischemic-heart-disease-50 | PASS | PASS | PASS | PASS | FAIL | FAIL |
| ischemic-heart-disease-51 | PASS | PASS | FAIL | PASS | PASS | FAIL |
| ischemic-heart-disease-52 | PASS | PASS | PASS | PASS | PASS | PASS (unchanged) |

Totals: 3 of 5 SAMPs pass. 18 of 20 questions pass. 2 questions need a writer fix.

## Previous required fixes: were they applied?

| Item | Required in q500-verify2-s57 | Applied | Comment |
|---|---|---|---|
| 49 q1 | Name the reference in the prompt, and "left bundle branch block" in the explanation | Yes | Prompt now opens "Under the fourth universal definition of MI" (26 words). Explanation reads "no LVH or left bundle branch block". Key and source unchanged. PASS. |
| 50 q4 | Replace the lipid threshold item with an honest KF item not keyed elsewhere, and no lipid cue | Partly | Lipid item and `ccs-dyslipidemia-2021` are gone, and the lipid cue to q2 is gone. The new item repeats a signed teaching point and carries a dishonest KF tag. See below. |
| 51 q2 | Cite STREAM-2 supplement, or fall back to the TNKase monograph with one source per decision | Yes, by the fallback | Every claim in the explanation now traces to the monograph (checked myself, below). But the age decision has moved into the update, which leaves a decision already keyed in a signed SAMP. See below. |
| 51 stem | New onset time instead of 90 minutes | Yes | 100 minutes in the stem, the q1 option and the q1 explanation. "100 minutes" appears elsewhere only in two unrelated oral cases (burns, meningitis). Options stay alphabetical. PASS. |

Unrequested writer changes (rule 4): the q1 explanation of 51 gained "and the guideline suggests a half dose may be considered for patients older than 75". This matches the CCS/CAIC 2019 wording quoted in the round 2 verdict and is true. It is sound on its merits. 51 `sources` now lists CCS/CAIC 2019, the TNKase monograph and STREAM-2, all cited.

SAMPs 48 and 52: `git diff 82d299d` has no hunk inside either SAMP. Both are unchanged and keep their round 2 PASS.

## Required fixes

### ischemic-heart-disease-50 q4 (FAIL, medium confidence). Repeats a signed teaching point, and the KF 6 tag is not honest.

- Current: prompt "Which of the following is the most appropriate way for him to seek care if prolonged chest tightness occurs at home?", key "Summon EMS by calling 911", tagged key feature 6, source aha-chest-pain-2021.
- What is right: the key is correct and the citation supports it. I extracted the Gulati 2021 executive summary PDF text myself (JACC 78:2218, DOI 10.1016/j.jacc.2021.07.052 printed on page 1). Recommendation 1 under patient-centric considerations (COR 1, LOE C-LD): "In patients with acute chest pain, it is recommended that 9-1-1 be activated by patients or bystanders to initiate transport to the closest ED by emergency medical services (EMS)". Office-setting recommendation 5 (3: Harm): "delayed transfer to the ED for cTn or other diagnostic testing should be avoided". Distractor reasons are true. No lipid cue remains.
- Problem 1, uniqueness (the writer's flag). Signed ischemic-heart-disease-15 (s12, `reviewed: true`) is a man with brief exertional chest tightness walking up a steep hill, discharged for outpatient testing. Its q3 keys "Clear return and 911 instructions" and its q4 keys the recurrent symptoms that "should prompt him to call 911", including "Pain lasting more than 15 to 20 minutes". The new 50 q4 is a man with exertional tightness walking up the hill to his house, discharged for outpatient testing, asked what to do for "prolonged chest tightness": call 911. The writer's distinction (mode of reaching care against trigger symptoms) does not hold, because IHD-15 already keys both the trigger (prolonged pain) and the action (call 911). Only the wrong options (car, taxi, family physician) are new. That is the same teaching point and the same decision in a near-identical scenario (Q500_BRIEF rule 3).
- Problem 2, key feature tag (the writer's flag). Key feature 6 reads "In a patient presenting with an STEMI, arrange for urgent reperfusion by the optimal available and appropriate means". This patient has stable exertional angina with a normal ECG and normal troponins, and the item is discharge advice. It does not test arranging reperfusion for a STEMI. The writer's alternative, KF 1 (start testing without delay), is no better: the item is a safety-net instruction, which is closest to KF 8 (follow-up until the diagnosis is resolved). Note that the round 2 verdict suggested KF 1 or KF 6 as targets, but KF 6 can only be tested honestly in a patient with STEMI, and 50 has none.
- Required change: replace q4 with a decision that (a) is not keyed in `src/samps` or `src/cases` (grep first, including IHD-15 q2 to q4 and every 911 or return-instruction item), (b) tests the KF it is tagged with in this patient, and (c) does not name lipid or statin therapy (ruling B6, q2 key) or the intermediate risk judgement given in the q2 update. Do not use discharge or return advice in any form. KF 1 is the natural target in this troponin-negative patient with known plaque. KF 6 stays covered by 51 q1, and every key feature stays covered whatever KF the replacement takes (KF 1 by 48 q2, KF 8 by four questions). If the new item is single answer, keep the key in the fourth position or recheck that no position exceeds 25% (now 4, 4, 4, 4, 3).
- Source: Canadian first where one covers the decision. Otherwise Gulati 2021 is already listed.

### ischemic-heart-disease-51 q2 (FAIL, medium confidence). The update gives away the only KF 7 judgement, and what remains is a decision keyed in a signed SAMP.

- Current: update "Because of her age, the team plans to give half of the usual weight-based tenecteplase dose." Prompt "Which of the following tenecteplase doses matches that plan for her weight?" Key "tenecteplase 17.5 mg IV", tagged KF 7, source tnkase-pm-2023.
- What is right: I downloaded the monograph myself (https://pdf.hres.ca/dpd_pm/00069984.PDF, HTTP 200, 32 pages). Date of revision March 21, 2023. Table 1: under 60 kg 30 mg, 60 to under 70 kg 35 mg, 70 to under 80 kg 40 mg, 80 to under 90 kg 45 mg, 90 kg or more 50 mg. Section 7.1.4: "In elderly patients, the benefits of TNKase on mortality should be carefully weighed against the risk of increased adverse events, including bleeding". Table 3 (ASSENT-2): intracranial hemorrhage 0.4% under 65, 1.6% at 65 to 74, 1.7% at 75 or older. 62 kg is in the 35 mg band and half is 17.5 mg. Every number and claim in the explanation is correct and traces to the monograph.
- Problem 1, key feature honesty. KF 7 is "assess risks and benefits of the possible specific interventions (thrombolytics ...) prior to initiating treatment". The risk and benefit judgement (halve the dose because of age) is now handed to the candidate in the update. The question tests a weight-band lookup and a division by 2.
- Problem 2, uniqueness (the writer's flag). With the age decision removed, the tested step is the tenecteplase weight band. Signed ischemic-heart-disease-01 q3 (s12, `reviewed: true`) keys exactly that ("Tenecteplase 45 mg IV bolus" at 84 kg), and its explanation already teaches the 5 mg band steps and the half dose in older patients. The batch11 oral case `stopped-antiplatelets-dental-stemi` also keys a band dose (40 mg at 74 kg). In round 2 this item was accepted only because the half dose decision itself was the candidate's keyed decision (verify2 physician item 5). That is no longer true.
- Required change: put the age decision back in the candidate's hands, with one source for the question.
  - Delete the current update. Replace it with one that gives her full dose as a fact of the case, for example: "Her full weight-based tenecteplase dose would be 35 mg." Then the band needs no source because it traces to the update.
  - Prompt: "Which of the following tenecteplase doses is most appropriate for her?" (or similar).
  - Source: `ccs-stemi-2019`, which states "A half dose of fibrinolytic therapy may be considered for patients undergoing a pharmacoinvasive strategy who are older than 75 years of age" (verified in the full text by the round 2 reviewer). Use "older than 75" in the explanation. Do not state STREAM-2's age 60 threshold in q2.
  - Options: keep five tenecteplase doses in low to high order, all "tenecteplase N mg IV". Keep 17.5 mg as the key and 35 mg as the full dose distractor. Choose the other distractors so that each rejection reason traces to the update or to CCS/CAIC 2019 alone (for example a dose above the full dose given in the update). Do not keep distractors whose only rejection reason is a weight band from the monograph.
  - If the monograph is then uncited, remove `S.tnk` from 51 `sources`. Keep 4 or fewer sources, all cited.
  - Keep the tag at KF 7 and the key position at the second option (or recheck the spread).
  - The q1 explanation sentence on the half dose may stay. It is shown only after answering, so it is not a cue.
- Alternative if the writer prefers to keep the monograph: the question must then test something the bank has not keyed, which a weight band at a new weight is not.

## Questions that pass, with notes

- 49 q1: the 0.5 mm criterion is not keyed anywhere else (grep found only stem mentions in s12, s42 and the batch11 case). The reference is now named, so the key holds under it (SAMP_SPEC section 9). Distractor reasons are true.
- 49 q2 to q4: unchanged from round 2 and still correct.
- 50 q1 to q3: unchanged and correct. The stem is unchanged since round 2.
- 51 q1: key "Onset 100 minutes ago" is under 3 hours, so the CCS/CAIC early presenter rationale holds. The added half dose sentence matches CCS/CAIC 2019. Treated hypertension at 146/84 mmHg is correctly not a bar. Under the required 51 q2 change no mock-mode cue arises. The current q2 update ("Because of her age ...") does hint that age counts against her, which helps a candidate reject the "Age of 78 years" option in q1 (ruling B6). The required change removes that hint.
- 51 q3: 0.75 mg/kg SC with no IV bolus over 75. 0.75 x 62 = 46.5 mg, so "about 46 mg" is right.
- 51 q4: (6 minus 4) divided by 6 = 33%. The failed fibrinolysis definition matches CCS/CAIC 2019.
- 48 and 52: unchanged, round 2 notes stand.

## Batch checks

- 5 SAMPs, 20 questions, 19 single and 1 menu.
- Single key positions, first to fifth: 4, 4, 4, 4, 3. No position above 25%.
- Key feature coverage now: KF1 1 (48 q2), KF2 2, KF3 2, KF4 4, KF5 3, KF6 2 (50 q4, 51 q1), KF7 2, KF8 4. After the required fixes every key feature stays covered: KF 6 by 51 q1 and KF 7 by 51 q2 and q3.
- House style in the changed text: no em or en dashes, no semicolons, no mnemonics, no personal names outside citations, Canadian spelling ("centre").
- No D1 entry is needed or used. D1 is frozen and neither failing item may be rescued by it.

## Sources verified this round

- TNKase product monograph, Hoffmann-La Roche Limited, revised March 21, 2023: https://pdf.hres.ca/dpd_pm/00069984.PDF, downloaded and read (Table 1, section 7.1.4, Table 3).
- Gulati 2021 executive summary, JACC 78:2218 to 2261: publisher pages (jacc.org, ahajournals.org) returned 403. I extracted the text myself from the PDF copy saved in the batch scratch folder. Its page 1 carries DOI 10.1016/j.jacc.2021.07.052, matching the citation, and Europe PMC lists it as PMID 34756652. The 9-1-1 recommendation and the office-setting 3: Harm recommendation are quoted above. The explanation's remarks on paramedic monitoring and defibrillation are general knowledge, not stated in the executive summary. That is not a ground for failure, but the item is being replaced anyway.
- Thygesen 2018 and CCS/CAIC 2019: not reopened. Wording relied on is as verified in round 2.

## Physician-level items (not grounds for failure)

1. The 50 stem (new exertional tightness on a hill, discharged for outpatient testing) is close in scenario to signed ischemic-heart-disease-15. It passed rounds 1 and 2 because its keyed decisions differ (known nonobstructive plaque, statin restart, CT coronary angiography). The required 50 q4 change keeps it that way.
2. Round 2 physician items 1 to 4 still apply (52 mock-mode MI fact, 52 q1 and q3 both arriving at MI, the bank inconsistency at exactly age 75, and 48 resting on a US guideline).
