# SAMP bank overlap pass

Scope: every line of `docs/drafts/_pipeline/overlap-items.md`. For each item I read both sides and checked whether the overlap was real. I also searched the whole bank with grep before writing new content. Every SAMP I touched keeps its id, topic, question count and `reviewed: false`. No signed-off SAMP was edited.

Checks run after the edits:

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes for s20, s41, s42, s50 and s53.
- `npx tsc --noEmit -p .` passes.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts` passes, with 1,500 or more SAMPs and at least 3 questions on every key feature.
- The full SAMP suite passes (28 903 tests).

## Verdicts

| Item | SAMP ids | Verdict | What changed |
|---|---|---|---|
| HIGH | ischemic-heart-disease-23 vs chest-pain-26 | Fixed | The overlap was real: the same dialysis patient, a troponin rising from about 60 to 118 and the same "repeat, then NSTEMI" keys. I rewrote IHD-23, the newer SAMP, as a new case. A woman 3 weeks after a colectomy for cancer is labelled NSTEMI but has pulmonary embolism. q1 tests ECG mimics (negative T waves in III and V1, KF2, Kosuge 2007). q2 tests getting CT pulmonary angiography before invasive angiography (KF7, ESC 2019, Wells score 7 shown). q3 tests stopping ticagrelor once embolism is confirmed (KF7). The KF mapping went from 1, 3, 7 to 2, 7, 7. |
| HIGH | ischemic-heart-disease-46 vs chest-pain-41 and chest-pain-44 | Fixed | The overlap was real: the same xanthomas and familial hypercholesterolemia teaching as CP-41, and the same boy at hockey as CP-44. I rewrote IHD-46 as ischemia without angina in a heart transplant recipient, which no other SAMP in the bank covers. q1 is denervation as the reason for no chest pain (KF5). q2 is an urgent call to the transplant centre (KF3). q3 is that atropine does not work in the denervated heart (KF7). The source is Wu 2025, J Clin Med. The KF mapping went from 5, 5, 8 to 5, 3, 7. |
| MED | ischemic-heart-disease-16 q2 | Fixed | No nitrates after sildenafil was already keyed in CP-37 (three questions), in s48 and in legacy items. I replaced the sildenafil detail in the stem with a bleeding duodenal ulcer 2 years ago. q2 now keys adding pantoprazole to dual antiplatelet therapy (ESC 2023, KF7). |
| MED | ischemic-heart-disease-27 q3 | Fixed | Admission for crescendo unstable angina was already keyed in CP-40 q2 and legacy s12. q3 now tests that fibrinolysis has no role without ST elevation. The source is TIMI IIIB 1994 (54.2% vs 55.5%, MI 7.4% vs 4.9%, 4 intracranial hemorrhages vs 0). ESC 2023 dropped out of this SAMP's sources because nothing cites it now. |
| LOW | ischemic-heart-disease-26 q1 | Kept, distinct enough | HEART is calculated in CP-27 q4 (score 3, low risk), and CP-26 q2 asks only about the risk factor item. IHD-26 gets a score of 5 from three risk factors and age 65 or older, and that moderate score drives q2, the choice of pharmacologic stress imaging. Changing q1 would leave q2 without its reason. Two full HEART calculations with different outcomes is within the "keep the best two" rule. |
| LOW | ischemic-heart-disease-20 | Kept, distinct enough | The SAMP covers SCAD diagnosis, early invasive timing, conservative care and bisoprolol. CP-20 tests FMD screening and the risk profile. The repeated key was "coronary artery dissection" as the cause, which appeared in both IHD-20 q1 and IHD-34 q4. I fixed that on the IHD-34 side. |
| LOW | ischemic-heart-disease-34 q4 | Fixed | The q4 key (SCAD as the commonest pregnancy MI) repeated IHD-20 q1 and CP-20. q4 now asks which post-MI drug to avoid until delivery, with ramipril as the key (ESC 2025 pregnancy). It maps to KF7 instead of KF5. The AHA SCAD source was removed from this SAMP because nothing cites it now. |
| LOW | ischemic-heart-disease-18 | Fixed | The paced modified Sgarbossa case reused CP-29's exact numbers: 6 mm after a 20 mm S wave, and 0.15. The values are now 5 mm after a 16 mm S wave (about 0.31) and 3 mm after 16 mm (about 0.19). The q1 key "age over 75 and diabetes make ACS painless" was keyed three times (legacy IHD-02, IHD-18, IHD-24). IHD-18 q1 now asks for the most likely cause of his dyspnea, with ACS as the key (KF5). Temperature and "no cough or fever" were added to the stem to support the explanation. |
| s41 | infectious-diseases-31 vs abdominal-pain-26 | Fixed | The teaching was already different, but ID-31 reused AP-26's euglycemic DKA lab set (Na 136, Cl 100, poor intake, no alcohol, empagliflozin). I removed the ketoacidosis data and gave sepsis labs instead (WBC 24.6, glucose 16.2, creatinine 168, lactate 4.2). The q2 explanation lost its anion gap sentence. |
| s41 | infectious-diseases-35 vs abdominal-pain-43 | Fixed | The teaching already differs (severity, oral vancomycin, recurrence with fidaxomicin versus fulminant colitis). The stems shared an older woman after clindamycin with a distended abdomen. ID-35 now follows ciprofloxacin for pyelonephritis and has a soft abdomen. The q1 menu options, key indexes and explanation were updated to match, and the q3 ciprofloxacin reason was reworded. |
| s53 | tox-16, tox-21, tox-28, tox-39 | Deferred (being reworked by another agent) | Not touched. |
| s20 | abuse-domestic-20 q1 vs msk-13 | Fixed | The overlap was real: an infant with a spiral femur fracture, an implausible fall and a skeletal survey key. msk-13 is signed off, so I rewrote AD-20. The new case is a 3-month-old with a cough whose chest film shows healing posterior rib fractures. q1 is inflicted injury (Barsness 2003, PPV 95%). q2 is AST and ALT as the screen for occult abdominal injury (Lindberg 2013). q3 is a follow-up survey at about 14 days (CPS 2025). q4 is a physician examination for her 4-year-old brother. The KF mapping is unchanged (2, 3, 3, 6). |
| s20 | Skeletal survey keyed 4 times | Fixed by the AD-20 rewrite | The index-child skeletal survey is now keyed twice (AD-17 q3 menu, AD-19 q2). AD-17 q4 keys the survey for an 18-month-old contact, which is a different decision. |
| s20 | Sibling screening twice | Kept | AD-17 q4 (under 24 months, survey) and AD-20 q4 (4 years, examination only) teach the two age bands of the same rule. Two instances are allowed. |
| s20 | Capable adult, no report, twice | Kept | AD-24 q3 and AD-26 q2 are the only two. Their cases differ (physical abuse by a strained spouse, and financial abuse by a son). Two instances are allowed. |
| s53 | House fire cyanide (tox-27) vs loc-38 and burns | Fixed | tox-27 repeated loc-38 almost point for point (carboxyhemoglobin 18%, lactate about 13, hypotension, hydroxocobalamin, "lactate supports cyanide"). I rewrote tox-27 as hydrogen sulfide knockdown in a manure pit, which no other SAMP in the bank covers. q1 identifies the gas (KF2). q2 is oxygen and support with no antidote (KF2). q3 is 24 hour admission for delayed pulmonary edema (KF5). q4 is a chest radiograph rather than sulfide levels (KF7). The sources are Ng 2019 (J Med Toxicol) and the ATSDR hydrogen sulfide guidelines (2014). |
| s53 (found on search) | shock-39 vs loc-38 and burns-21 | Fixed | The grep for the house fire item found that shock-39 (s50) was a near clone of loc-38. It had the same three keys: smoke cyanide as the cause, hydroxocobalamin 5 g and SpO2 100% from carboxyhemoglobin, with carboxyhemoglobin 18% again. Smoke cyanide with hydroxocobalamin was keyed in at least four expansion SAMPs. I kept burns-21 and loc-38 and rewrote shock-39, the newer SAMP. It is now neurogenic shock after a C5 diving injury. q1 is neurogenic shock versus hemorrhage and spinal shock (KF5). q2 is norepinephrine over phenylephrine (KF7, Taman 2025). q3 is atropine for vagal bradycardia (KF8, AHA 2020). |

## Sources added and checked

- Kosuge M et al. Am J Cardiol. 2007. doi 10.1016/j.amjcard.2006.10.043 (abstract checked: 88% vs 1%, specificity 99%).
- Konstantinides SV et al. 2019 ESC acute pulmonary embolism guidelines. Eur Heart J. 2020. doi 10.1093/eurheartj/ehz405.
- Wu Y et al. Care of adult heart transplant recipients by the primary care provider. J Clin Med. 2025. doi 10.3390/jcm14041346 (full text checked: denervation, no angina, atropine, referral to the transplant centre).
- TIMI IIIB Investigators. Circulation. 1994. doi 10.1161/01.cir.89.4.1545 (abstract figures checked).
- Barsness KA et al. J Trauma. 2003. doi 10.1097/01.TA.0000068992.01030.A8 (PPV 95%, 29% rib only).
- Lindberg DM et al. Pediatrics. 2013 (already in s20, abstract checked: AUC 0.87, 0.72, 0.67, threshold 80 U/L).
- CPS THI-CM 2025 (already in s20, checked: skeletal survey under 2 years, repeat at about 14 days).
- Ng PC et al. J Med Toxicol. 2019. doi 10.1007/s13181-019-00710-5 (full text checked).
- ATSDR. Medical management guidelines for hydrogen sulfide. 2014 (checked: no proven antidote, nitrite only soon after exposure, 24 hour monitoring, 4 to 6 hours only if asymptomatic, blood and urine sulfide tests not useful).
- Taman M et al. J Clin Med. 2025. doi 10.3390/jcm14030902 (full text checked: norepinephrine first line, phenylephrine caution with bradycardia, dobutamine does not raise SVR).
- Panchal AR et al. 2020 AHA adult BLS and ALS. Circulation. 2020. doi 10.1161/CIR.0000000000000916.
- ESC 2023 ACS (PPI with DAPT at high GI bleeding risk) and ESC 2025 pregnancy (ACE inhibitors contraindicated) were already cited in s42.

## For the physician reviewer

- IHD-23 q2 counts 3 Wells points for "PE most likely". That rests on the ECG reading in q1.
- IHD-46 q3 keys the drug "expected to be ineffective". The lead-in is not a NOT question, but please confirm the wording is acceptable.
- tox-27 no longer tests scene collateral (tox KF1). Tox KF1 still has 16 questions.

## SAMP ids edited

ischemic-heart-disease-16, ischemic-heart-disease-18, ischemic-heart-disease-23, ischemic-heart-disease-27, ischemic-heart-disease-34, ischemic-heart-disease-46, infectious-diseases-31, infectious-diseases-35, abuse-domestic-20, tox-27, shock-39.
