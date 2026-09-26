# Signed duplicate rebuild, group g12: independent review

Files: `src/samps/s15/pulmonary-edema.ts`, `src/samps/s15/pre-eclampsia.ts`, `src/samps/s01/abuse-domestic.ts`, `src/samps/s01/abdominal-pain.ts`. Ids: abdominal-pain-08, abuse-domestic-01, abuse-domestic-14, pre-eclampsia-15, pulmonary-edema-01, pulmonary-edema-02, pulmonary-edema-04.

Nothing was edited. Every SAMP fails on decision D1, and the review instructions say not to patch a D1 failure.

## Rule applied

Decision D1 (docs/DECISIONS.md) allows a SAMP to repeat ONE decision already keyed in a signed-off SAMP. That decision must itself be the literal wording of a CFPC key feature. Anything more fails.

A decision counts as keyed when it earns marks: a single or menu key, or an accept item that can fill the required count. Every comparison SAMP named below is signed off (docs/signoff-2026-09.json or docs/signoff-2026-10.json).

## Checks that pass for all seven

- Structure. Each SAMP keeps its id, topic, question count, and each question's kind and keyFeature. Each is version 2 with `reviewed: false` after the meta spread. All seven are in `src/samps/held-back/g12.json`. The diff hunks fall only inside these seven ids and their new source constants.
- `SAMP_BATCH=s15 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 437 passed. `SAMP_BATCH=s01` gives 472 passed. `npx tsc --noEmit -p .` is clean.
- simcheck, rerun here on the title, stem, updates and keys. Top hits (full text / keys): pulmonary-edema-01: pulmonary-edema-35 0.24/0.14. pulmonary-edema-02: ems-10 0.33/0.28, ischemic-heart-disease-11 0.26/0.23. pulmonary-edema-04: arrhythmia-05 0.23/0.16. pre-eclampsia-15: chest-pain-01 0.20/0.16. abuse-domestic-01: abuse-domestic-02 0.25/0.24, multiple-trauma-15 0.25/0.25. abuse-domestic-14: abuse-domestic-05 0.18/0.13. abdominal-pain-08: abuse-domestic-11 0.26/0.23, first-trimester-bleeding-01 0.26/0.20.

## Rows

### abdominal-pain-08 (cluster 4): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | A trauma differential in pregnancy. Not keyed elsewhere in this form. |
| q2 | PASS | FAST first in unstable blunt trauma. Common, but tied to its own key feature (abdominal pain KF 5). |
| q3 | FAIL | Required 3 can be met with "massive hemorrhage protocol", "O-negative red cells" and "large-bore IVs with crossmatch". That is cluster 4's repeated key. It also matches pre-eclampsia-07 q4 (a pregnant woman: MHP, uncrossmatched O-negative, two large-bore IVs, stat surgery for laparotomy), first-trimester-bleeding-01 q1 and q3 (the keeper), and shock-04 q2 and q3. The trauma surgeon for laparotomy without CT is also keyed in burns-10 q2, ems-03 q2 and multiple-trauma-15 q4. |
| q4 | D1-eligible repeat | Rh immune globulin 300 mcg after abdominal trauma in pregnancy. The same decision is keyed in abuse-domestic-11 q3, multiple-trauma-03 q3 (keeper of cluster 73), shock-04 q4 and first-trimester-bleeding-15, 31, 37 and 38. It fits first-trimester-bleeding KF 5 word for word, so it would be the one allowed repeat. |

Result: at least two repeated decisions (q3 and q4), and q3 still keys the cluster's own repeated key. That is beyond D1.

### abuse-domestic-01 (cluster 8): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (repeat) | The generic partner violence indicators. They are frequent visits, a partner who monitors her by phone, bruises of different ages, and a story that does not fit. The same indicators are keyed in abuse-domestic-27 q1 ("partner calling her repeatedly", a frequent visitor), abuse-domestic-02 q1 and multiple-trauma-15 q1. |
| q2 | D1-eligible repeat | Ask alone, directly and without judgment, explain the limits of confidentiality, and use imaging as a reason to separate them. This is cluster 8's repeated key. The accept list almost copies multiple-trauma-15 q3 word for word. It is also in abuse-domestic-13 q2, msk-04 q2 and abuse-domestic-02 q2. It fits abuse KF 4 word for word. |
| q3 | PASS | Desmopressin 0.3 mcg/kg, which is 18 mcg for 60 kg, for type 1 von Willebrand disease with a documented response. The dose checks. Nothing else in the bank keys it. |
| q4 | FAIL (repeat) | Social worker, the hospital violence program, a shelter and legal services, with police only if she chooses. This is cluster 8's repeated key ("offer violence resources and a safety plan"). It is almost the same as abuse-domestic-10 q4 and abuse-domestic-02 q3. |

Result: three of four questions repeat signed decisions. Old abuse-domestic-01 keyed indicators, the private interview, obstetric care and the team. The rebuild keeps indicators, the private interview and the team, and changes only q3. The story is still a young woman at night with a controlling partner, repeat visits and an implausible household fall. It needs a new story.

### abuse-domestic-14 (cluster 24): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (repeat) | Bilateral fingertip grip bruises on the upper arm of a dependent adult, with a caregiver's account. The same finding is keyed in abuse-domestic-04 q1 ("Bilateral upper arm bruises in a grip pattern"). Fingertip bruises are also in abuse-domestic-08 q2. Twisting force for a spiral fracture is in msk-13 q1. |
| q2 | D1-eligible repeat | An undressed head-to-toe skin examination, old records and imaging, X-rays of tender areas, and an anogenital examination by a trained examiner. This is almost a copy of abuse-domestic-05 q2 (a nonverbal dependent adult with a fracture). It is also in abuse-domestic-12 q3 and multiple-trauma-15 q2. It fits abuse KF 3 word for word, so it would be the one allowed repeat. |
| q3 | FAIL (repeat) | The caregiver stays at the bedside and answers for him, and the key is to speak with him away from the staff. That is the private interview of a dependent adult, keyed in abuse-domestic-24 q2 ("Ask her alone during a private exam", with a husband who corrects her answers) and abuse-domestic-25 q2 ("See the patient alone first"). It is also cluster 8's repeated key. Required 2 can be met with "away from staff" and one other item. The communication aid items are new to the bank, but they match the old abuse-domestic-14 q3 almost word for word. |

Result: at least two repeats beyond q2.

### pre-eclampsia-15 (cluster 61): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS, with a note | The coarctation clues are new. "Hypertension before 20 weeks means chronic" is also keyed in pre-eclampsia-20 q1, but here it is one accept item among five. |
| q2 | FAIL (repeat) | Required 4 can be met with urine protein to creatinine ratio, CBC with platelets, creatinine and AST or ALT alone. That is the standard pre-eclampsia panel keyed in pre-eclampsia-01 q2, pre-eclampsia-02 q2 and others. The new items (leg BP, echo, MRI without gadolinium) are not required. |
| q3 | FAIL (repeat) | Required 3 can be met with oral labetalol or nifedipine, a diastolic target of 85 mmHg and low-dose ASA at bedtime. Pre-eclampsia-20 keys chronic hypertension in early pregnancy with ASA at bedtime in q3, nifedipine XL in q4, and no ACE inhibitor in its stem and options. Pre-eclampsia-19 q4 and pre-eclampsia-14 q2 key the diastolic target of 85 mmHg. Pre-eclampsia-16 q4 keys oral labetalol. |

Result: the coarctation story is new, but q2 and q3 can be passed on repeated decisions alone. At most one of them would fit D1 (pre-eclampsia KF 2 names labs, KF 4 names BP control). Beyond D1.

### pulmonary-edema-01 (cluster 14): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | D1-eligible repeat | NIV, nitrate and loop diuretic. This is cluster 14's repeated key. It is also keyed in pulmonary-edema-35 q1, sob-07 q2, asthma-copd-04 q3 and pulmonary-edema-03 q3 (the keeper). It fits pulmonary edema KF 1 word for word ("such as with BiPAP"). |
| q2 | PASS | Systolic below 140 mmHg at once. Other SAMPs key this target only for intracerebral hemorrhage. |
| q3 | PASS, with a note | The workup for thrombotic microangiopathy is new. Required 4 can still be met with troponin, ECG, chest X-ray and BNP, which is the old cause workup. |
| q4 | FAIL (repeat) | BP rebounds to 204/118 mmHg on a nitroglycerin infusion with low saturation in an alert patient. The key is a higher nitroglycerin dose or boluses, or nitroprusside. This is the same scenario and decision as pulmonary-edema-35 q2, where BP rebounds to 204/116 mmHg on a nitroglycerin infusion, saturation is 86%, the patient is alert and the key is escalating the nitroglycerin. Nitroprusside is keyed in ems-30 q1. |

Result: q1 and q4 are both repeats. Beyond D1.

### pulmonary-edema-02 (cluster 67): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | D1-eligible repeat | "Transfer for primary PCI". The same decision is in ischemic-heart-disease-11 q1, the old pulmonary-edema-02 q1 and ischemic-heart-disease-12 q2 (the keeper, emergency PCI). IHD KF 6 ("Arrange rapid reperfusion for STEMI using the best available option, PCI or thrombolysis") names it word for word. It qualifies under D1 on its own. |
| q2 | PASS | Continue BiPAP for the transfer. Not keyed elsewhere. |
| q3 | FAIL (repeat) | Accepts "No IV metoprolol while she has pulmonary edema". That is the other half of cluster 67's repeated key ("Emergency PCI and no beta blocker"). It was keyed in the old pulmonary-edema-02 q3 and in ischemic-heart-disease-12. "Clopidogrel with an oral anticoagulant" repeats ischemic-heart-disease-36 q2 and q3. Required 2 can be met with those two alone. |
| q4 | PASS | What a transfer on BiPAP needs. |

Result: the rebuild keeps both of cluster 67's repeated keys, anterior STEMI with pulmonary edema at a site without PCI. It removes only the shock. q1 would be allowed alone, but q3 puts it beyond D1.

### pulmonary-edema-04 (cluster 12): FAIL

| Q | Verdict | Reason |
|---|---|---|
| q1 | Repeat (would be the D1 repeat) | NIV, nitrate and diuretic. This is the same as pulmonary-edema-01 q1 above and cluster 14's key. It fits pulmonary edema KF 1 word for word. |
| q2 | PASS, with a note | NSAID and acute kidney injury as precipitants. Asthma-copd-04 q4 keys "new drugs that cause fluid retention, such as NSAIDs". The low potassium and magnesium from a thiazide, and bradycardia, repeat arrhythmia-05 q1. |
| q3 | FAIL (repeat) | Long QT recognition. QTc above 500 ms is keyed in arrhythmia-32 q1 and prominent U waves in arrhythmia-40 q1. The setting is an older woman on hydrochlorothiazide, a new drug from a walk-in clinic, sinus bradycardia, and a long QTc with prominent U waves. That is the arrhythmia-05 stem. |
| q4 | FAIL (repeat) | Stop the QT drugs, magnesium sulfate 2 g IV, potassium to the high normal range, and isoproterenol or pacing for pauses. This is arrhythmia-05 q2 and q3 almost item for item, with magnesium and potassium also in arrhythmia-40 q3. It is tagged pulmonary edema KF 3, "treat the identified cause", and it is not the wording of that key feature. |

Result: q1, q3 and q4 all repeat signed decisions. The torsades story also retells arrhythmia-05. Beyond D1.

## The writer's four flagged repeats

- pulmonary-edema-04 q4, the torsades treatment: not covered by D1. It repeats several decisions from arrhythmia-05 (magnesium, rate support, stopping the drugs), and it is not the wording of its own key feature (pulmonary edema KF 3). With q1 and q3 it is also not the only repeat. FAIL.
- abdominal-pain-08 q3, O-negative blood and the massive hemorrhage protocol: not covered. Cluster 4's repeated key still earns full marks, and q4 (Rh immune globulin) already uses the one D1 slot. FAIL.
- abuse-domestic-14 q2, the search for other injuries: this alone would be a valid D1 repeat (abuse KF 3 wording, echoing abuse-domestic-05 q2). The SAMP still fails, because q1 (grip bruises, abuse-domestic-04) and q3 (speaking with him away from the caregiver, abuse-domestic-24 and 25) are further repeats.
- pulmonary-edema-02 q1, "transfer for primary PCI": this alone would be a valid D1 repeat (IHD KF 6 wording, echoing ischemic-heart-disease-11 q1 and 12 q2). The SAMP still fails, because q3 keeps the "no beta blocker" half of cluster 67's key.

## Partner violence and dependent adult clusters

- Cluster 8 (partner violence). abuse-domestic-01 keeps all three parts of the repeated key: interview alone (q2), ask directly (q2), and resources with a safety plan (q4). Its indicator list (q1) also repeats abuse-domestic-27 q1 and multiple-trauma-15 q1. Only q3 is new.
- Cluster 24 and the dependent adult group (abuse-domestic-04, 05, 24, 25). abuse-domestic-14 repeats the grip bruise pattern of abuse-domestic-04, the injury search of abuse-domestic-05 and the private interview away from the caregiver of abuse-domestic-24 and 25. Only the communication aid items are new to the bank.

## D1 repeats

No D1 repeat survives from this group, because all seven SAMPs fail. Nothing should be added to the D1 table in docs/DECISIONS.md.

If each SAMP is rebuilt again, these are the single repeats that would qualify under D1. Each rebuild may keep one of them and no other repeat:

| SAMP | Question | Repeated decision | Key feature named word for word | Signed-off SAMP it echoes |
|---|---|---|---|---|
| pulmonary-edema-02 | q1 | Transfer for primary PCI | IHD KF 6 | ischemic-heart-disease-11 q1, ischemic-heart-disease-12 q2 |
| abuse-domestic-14 | q2 | Search for current and old injuries (skin examination, old records, X-rays) | abuse KF 3 | abuse-domestic-05 q2 |
| abdominal-pain-08 | q4 | Rh immune globulin after abdominal trauma in pregnancy | FTB KF 5 | abuse-domestic-11 q3, multiple-trauma-03 q3 |
| abuse-domestic-01 | q2 | Private, direct, nonjudgmental interview | abuse KF 4 | multiple-trauma-15 q3, abuse-domestic-13 q2 |
| pulmonary-edema-01 | q1 | NIV, nitrate and loop diuretic before the cause is known | pulmonary edema KF 1 | pulmonary-edema-35 q1, sob-07 q2 |

## For the physician

- All seven SAMPs in g12 fail review. They stay held back in `src/samps/held-back/g12.json` and should not go to you for sign-off in their current form.
- The rebuilt stories are new: splenic injury at 13 weeks, von Willebrand disease with partner violence, a group home fracture, coarctation in pregnancy, a hypertensive emergency in a younger man, STEMI on warfarin, and sotalol accumulation. Most rebuilds still repeat keys from other signed SAMPs, and some keep the repeated key of their own cluster (clusters 4, 8 and 67).
- The cluster 8 direction itself asked abuse-domestic-01 to key "the private interview and the team". Under D1 only one of those can repeat. The next rebuild should keep one and replace the other.
- The keys that were checked are correct: desmopressin 18 mcg for 60 kg, Rh immune globulin 300 mcg after 12 weeks, primary PCI when first contact to device is 120 minutes or less, no UFH when the INR is above 2.5, and the torsades steps. The failures are all about duplication, not accuracy.
