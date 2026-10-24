# Q500B verification review: s82, Pre-eclampsia (Revision 1)

Reviewer: Preceptor QA, a fresh reviewer who did not write, edit or first review this batch. File reviewed in full: `src/samps/s82/pre-eclampsia.ts`, ids pre-eclampsia-39 to pre-eclampsia-43. No edits were made to the batch (REVIEW-RULES rule 1).

## Checks run

- `SAMP_BATCH=s82 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests, all passed (bank-wide near duplicate stem test included).
- House style: no em or en dashes, no semicolons in content, no mnemonics, no personal names, author "Preceptor", `reviewed: false`, `version: 1`.
- Key positions (single, first to fifth): 4, 4, 4, 3, 4 of 19. The fixes below keep them.
- Whole-bank keyword search over `src/samps` and `src/cases` (including Q500B case batch19): betamethasone, dexamethasone 10 mg, hemoglobinuria and peroxidase, hydronephrosis, Pritchard and IM magnesium, shrimp and shellfish, breastfeeding antihypertensives, risk factors and smoking, troponin and coronary, psychosis, nursing station and medevac, fetal monitoring, NSAIDs.
- Sources: PubMed, Europe PMC and NICE refused automated fetch this session (cookie wall, 503, 403). I rely on the first review's source checks (NICE NG133 wording confirmed verbatim there, and the existence of Brookfield 2021, Skoll 2018, Tamir 2025, Conde-Agudelo 1999 and Leffert 2018 confirmed by PMID). Citation details match what I know of each work: Conde-Agudelo 1999 (833 714 women, RR 0.68), Leffert 2018 SOAP consensus (24 hours after a therapeutic LMWH dose), WAO 2020 criteria, Simerville 2005 (peroxidase reaction), ACOG 222 HELLP thresholds, WHO 2011 loading dose then transfer.

## First-review fails: all resolved

| Item | First-review fix | Status |
|---|---|---|
| 39 q4 | Update and prompt reworded to remove the medevac cue | Resolved, exact text applied |
| 41 q2 | Rebuilt as a findings question, key "Ankle clonus with confusion" | Resolved, exact text applied |
| 41 q3 | Explanation says why magnesium is given below 160/110 | Resolved |
| 41 q4 | "psychiatry finds no psychotic disorder" removed | Resolved |
| 42 q3 | PCR removed from update, "most likely has pre-eclampsia" | Resolved |
| 42 q4 | Key reworded "Evolving organ involvement", last sentence changed | Resolved |
| 43 q4 | Optional KF3 to KF4 change | Applied. It was suggested by the first review, and KF4 fits the delivery planning decision. PASS. |

## Verdicts

### pre-eclampsia-39 (Aches during a household flu outbreak)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | 104/66 at 20 weeks to 158/104 with 2+ dipstick meets NICE. Distractor reasons true. |
| q2 | FAIL | Lens B1. The explanation says "Pyelonephritis would bring fever and urinary symptoms she does not have", but the stem never says she has no urinary symptoms. Fix: in the stem, after "She has vomited twice today and has a dull ache under her right ribs." add "She has no dysuria or urinary frequency." Key, options and explanation unchanged. Confidence medium. |
| q3 | FAIL | Mock-mode cue (B6). The update "You cannot measure her platelets or liver enzymes at the station" points to HELLP, the q2 key (platelets are specific to HELLP among the q2 options). Fix: change the update to "No blood results will be available for about 24 hours. The obstetrician on call at the referral centre asks how you plan to proceed." Options, key and explanation unchanged (the explanation may keep "no way to measure platelets or liver enzymes for 24 hours", since explanations show only after answering). Confidence medium. |
| q4 | PASS | Revised wording no longer cues q3. Pritchard regimen (4 g IV plus 5 g IM each buttock, then 5 g IM every 4 hours) correct. 10 g IV is more than twice the 4 g load. Physician note: IM injection with unknown platelets (see below). |

### pre-eclampsia-40 (Flank pain with a history of stones)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct. Distractor reasons all trace to the stem. |
| q2 | PASS | Peroxidase reaction, hemolysis labs and HELLP thresholds (platelets 92, AST 186, LDH 690) correct. New teaching point in the bank. |
| q3 | PASS | Physiologic right hydronephrosis, Tamir 2025. No other item teaches it. |
| q4 | FAIL | Repeat of a signed decision and teaching point. Signed pre-eclampsia-02 q3 (s15, `reviewed: true`) is HELLP before 34 weeks with the same two regimens as options ("Betamethasone 12 mg IM, repeated in 24 hours" and "Dexamethasone 10 mg IV every 12 hours") and the same point that steroids to raise platelets are not recommended. Antenatal betamethasone in pre-eclampsia is also keyed in s47 (lines 244 and 338) and in the Q500B case batch19 right-rib-pain-through-an-interpreter. This is not a D1 key feature wording repeat. Fix: replace q4 with a KF4 decision the bank does not teach. A whole-bank search found no item on fetal monitoring in pre-eclampsia, which is in the KF4 wording ("monitor mother and fetus"). Suggested rebuild: update "Obstetrics plans birth within 24 hours, once she is stable. Magnesium sulfate and labetalol have been started, and she is waiting in the emergency department for the obstetric team." Prompt "Which of the following is the most appropriate fetal assessment while she waits?" Options in this order: "Continuous fetal heart rate tracing", "Doppler heart rate every 4 hours", "Fetal movement counts", "Ultrasound biophysical profile tomorrow", "No fetal assessment until birth". correct: 0 (position unchanged, key not the longest option). keyFeature n: 4. The explanation must give a true reason for each distractor (HELLP with magnesium at 32 weeks can bring sudden fetal compromise or abruption that intermittent checks miss, kick counts are an outpatient tool, a biophysical profile tomorrow is too late with birth planned within 24 hours, and a viable fetus at 32 weeks needs surveillance). The writer must verify the source before citing it (NICE NG133 fetal monitoring recommendations for severe pre-eclampsia, or SOGC No. 396 fetal health surveillance) and update the SAMP `sources` (drop sogc-364 if no longer used). Confidence high on the repeat. |

### pre-eclampsia-41 (Restless and not sleeping after the birth)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct key. Each distractor reason traces to the stem (no serotonergic drug, no hemorrhage, no alcohol). Distinct from batch13 postpartum-headache-sixth-day and the s15 postpartum headache and seizure items. |
| q2 | PASS | Revision is the first reviewer's text, and it is accurate. Options alphabetical, key not longest. Flag only (B6): the update and the "protein-creatinine ratio" in the prompt imply the q1 key, but the question cannot test diagnosis without proteinuria otherwise. Leave and list for the physician. |
| q3 | PASS | ACOG 222 severe feature (cerebral disturbance) and 4 to 6 g load then 1 to 2 g/hour correct. Postpartum treatment threshold 150/100 supports "Her BP still needs treatment". |
| q4 | PASS | Cue removed. Nifedipine XL key consistent with NICE 1.9.4 to 1.9.8 and with signed s47 (methyldopa avoided after birth because of depression). |

### pre-eclampsia-42 (Swollen face after a seafood dinner)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | FAIL | Lens A2, distractor reason partly untrue. "Normal pregnancy edema affects the legs" is not true as stated: mild swelling of the hands is common in normal late pregnancy. Fix: replace "Normal pregnancy edema affects the legs and does not come with new hypertension." with "Normal pregnancy edema is mostly in the legs, builds slowly and does not come with new hypertension or a headache." Key unchanged. Confidence medium. |
| q2 | FAIL | Lens A2. "Thyroid tests do not explain new hypertension with a headache" is not a true reason: hypothyroidism causes facial puffiness and diastolic hypertension, and hyperthyroidism causes hypertension and brisk reflexes. Fix: replace that sentence with "Thyroid disease is far less likely. Hypothyroid swelling is non-pitting and comes with slow reflexes, and hyperthyroidism does not cause pitting edema of the face and hands." Key unchanged. Confidence medium. |
| q3 | PASS | Revision applied. WAO criteria paraphrase correct. Low note: the update's platelets, AST and creatinine hint at a pre-eclampsia workup (q2 key is the urine PCR), but it does not name the urine test. Acceptable. |
| q4 | PASS | Revision applied. 131 above 100 and LDH 390 below 600 meet neither Tennessee nor ACOG HELLP criteria. NICE organ involvement thresholds (platelets under 150, transaminases over 40) correct. |

### pre-eclampsia-43 (Chest pain pathway at three in the morning)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct key, true distractor reasons. |
| q2 | PASS | NICE moderate risk factors correct. Smoking RR 0.68 in about 834 000 women correct. Key also holds under SOGC (age 40 or more, BMI 30 or more). Mock-mode cue (prompt names pre-eclampsia) left in place, flagged for physician as in the first review. New teaching point (smoking trap) in the bank. |
| q3 | FAIL | Lens B1. "Cholecystitis and viral or autoimmune hepatitis do not cause hemolysis with a falling platelet count" claims a fall, but only one platelet count is given. Fix: change "with a falling platelet count" to "with a low platelet count". Key unchanged. Confidence high. |
| q4 | PASS | 1 mg/kg at 98 kg is 98 mg, rounded to 100 mg. SOAP 24 hour interval correct and consistent with signed s33 dvt-pe. Platelets of 84 do not by themselves bar neuraxial anesthesia, so the enoxaparin is what blocks it. KF4 mapping fits. |

## Needs physician decision

1. Carried from the first review: SOGC No. 426 (2022) is not cited and could not be opened. Confirm it supports the IM regimen where no pump exists (39 q4) and magnesium for postpartum pre-eclampsia with neurological features below the severe BP range (41 q3).
2. 39 q4: IM magnesium is given before her platelet count is known. The WHO regimen is used in this setting, but please confirm it is acceptable with suspected HELLP.
3. Carried: 41 q4 methyldopa (SOGC lists it as compatible with breastfeeding). Key still best.
4. Mock-mode cues left in place because the question cannot work otherwise: 41 q2 (prompt and update imply the q1 key) and 43 q2 (prompt names pre-eclampsia).

## Summary

20 questions in 5 SAMPs. All 6 first-review fails are resolved. 14 PASS, 6 FAIL: 39 q2, 39 q3, 40 q4, 42 q1, 42 q2, 43 q3. The serious one is 40 q4, which repeats the signed pre-eclampsia-02 q3 decision almost option for option and must be rebuilt. The other five are one-sentence or one-line fixes (two explanation claims not in the stem, two untrue distractor reasons, one mock-mode cue). No keyed answer is clinically wrong. Tests pass.

Overall: FAIL (6 items)
