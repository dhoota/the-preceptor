# Review of signed duplicate rebuild, group g02

Files: `src/samps/s05/chest-pain.ts` and `src/samps/s05/cva.ts`. Writer report: `docs/reviews/signed-rebuild-g02.md`. Reviewed against `git show HEAD`, `docs/SIGNED-DUPLICATES.md`, `docs/DECISIONS.md` (D1), `scratchpad/allkeys.tsv`, `scratchpad/simcheck.py` and a live grep of `src/samps`, including the other writers' uncommitted rebuilds.

## Checks

- Structure. For all 11 ids the id, topic, question count, each question's kind and each keyFeature match HEAD. Each is version 2 with `reviewed: false` after the spread. All 11 are in `src/samps/held-back/g02.json`. No other SAMP in either file changed (compared object by object against HEAD). Source constants used only by the old stories were removed and `tsc` is clean.
- Position cap. s05 single keys by position are 7, 4, 6, 4, 5 of 26. The highest share is 26.9 percent. s05 is a conformed s01 to s18 batch, so the cap in `tests/samp-quality.test.ts` and `docs/SAMP_SPEC.md` is 30 percent. It passes. Every position holds a key. The key is the longest option in 6 of 26 singles (23 percent, cap 35).
- Tests after the review fixes: `SAMP_BATCH=s05 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 474 of 474. `npx tsc --noEmit -p .` is clean.
- Style. No em or en dashes and no semicolons in the prose of the 11 SAMPs.
- Other writers. No other in-progress rebuild uses a pacemaker lead, a bicuspid valve, pill esophagitis, tetraplegia with ACS, menorrhagia with type 2 MI, HHS as a stroke mimic, ASA allergy or contrast limits in CKD. sob-11 (heavy periods) is a PE story and environmental (C5 tetraplegia) is a hypothermia story.

## The three flagged shared keys

| Flag | Verdict | Why |
|---|---|---|
| chest-pain-03 q3, immediate angiography within 2 hours, like ischemic-heart-disease-14 q3 | Repeat. Not covered by D1. | Same decision for the same reason: refractory pain as a very high risk NSTE-ACS feature. The option lists are nearly the same (immediate, 24 hours, 72 hours, stress test). It is not the literal wording of a key feature. IHD key feature 6 is reperfusion for STEMI. |
| chest-pain-14 q2, CT angiography for an ADD-RS of 2, like chest-pain-01 q2 | Repeat. Not covered by D1. | Same test for the same reason: known aortic valve disease plus abrupt severe pain gives two high risk categories, so go straight to CTA, and a normal chest film does not lower risk enough. The chest pain key features never name CT. q3 is a second repeat of chest-pain-01 q3 (a normal bedside or transthoracic echo does not exclude dissection). |
| chest-pain-06 q3, pericardiocentesis, like shock-15 q3 | Repeat. Not covered by D1. | Same decision for the same reason: tamponade with hypotension, right atrial and right ventricular collapse and a plethoric IVC, drained by ultrasound-guided pericardiocentesis. No key feature names pericardiocentesis. q2 (bedside echo in shock) is already this SAMP's one D1 repeat. |

## Rows

### chest-pain-02 (ASA allergy with anterior STEMI): FAIL at q3. The story can stay.
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS (D1) | Withholding the order set ASA is new. The 10-minute ECG item repeats ischemic-heart-disease-15 q1. It is the literal wording of chest pain key feature 2, so it takes this SAMP's one D1 slot. Match and danger phrases were tested against the negation rules: "do not give chewed ASA" is not flagged, and "give ASA" is. |
| q2 | PASS | This is a classic anterior STEMI with a proximal LAD culprit. chest-pain-16 (de Winter) and ischemic-heart-disease-04 and 14 (Wellens, aVR) reach the LAD through subtle patterns, which is a different reason. |
| q3 | FAIL | The key, ticagrelor 180 mg plus UFH 70 units/kg before primary PCI, is the same pre-PCI load that ischemic-heart-disease-11 q2 keys in the same menu format with the same kinds of distractors (low clopidogrel load, prasugrel maintenance dose, SC enoxaparin). chest-pain-36 q3 keys it too. Leaving out ASA does not change the decision. This is a second repeat, and it is not the wording of a key feature. The writer should re-key q3 to a decision specific to the allergy. UFH 70 x 88 = 6160 units is correct. |
| q4 | PASS | Doing PCI first and then desensitization is new. "Do not delay PCI" is shared in shape with chest-pain-15 q4 (see the physician section). |

### chest-pain-03 (refractory pain, nondiagnostic ECG, occluded artery): FAIL. It needs a new story.
| Q | Verdict | Notes |
|---|---|---|
| q1 | FAIL | Bedside echo for a wall motion abnormality or a repeat ECG repeats ischemic-heart-disease-40 q2 (signed): "Bedside echo for wall motion. Repeat ECG in 15 minutes." |
| q2 | FAIL | "Acute MI from an occluded artery" repeats ischemic-heart-disease-40 q1 (occlusion of a high lateral branch with a nondiagnostic ECG). ischemic-heart-disease-43 keys occlusion too. |
| q3 | FAIL | Repeats ischemic-heart-disease-14 q3 (see the flags above). ischemic-heart-disease-40 q3 and 43 q3 also key cath lab activation for occlusion without STEMI criteria. |
| q4 | PASS | UFH, an opioid and nitroglycerin, with fibrinolysis marked dangerous. 70 to 100 x 94 = 6580 to 9400 units is correct. |
| q5 | PASS | The Khan meta-analysis figures match the cited abstract. The teaching overlaps with ischemic-heart-disease-43 q4. |
| Overall | FAIL | The story retells ischemic-heart-disease-40: a subtle occlusion MI, bedside echo, then the cath lab. The cluster 36 direction ("immediate angiography for refractory ischemia without ST elevation") points straight at ischemic-heart-disease-14's key, so the direction itself leads to a duplicate. |

### chest-pain-06 (tamponade from pacing lead perforation): FAIL. It needs a new angle.
| Q | Verdict | Notes |
|---|---|---|
| q1 | FAIL | Tamponade from JVP, quiet heart sounds and pulsus paradoxus repeats shock-15 q1 (the same signs) and multiple-trauma-02 q1 (tamponade as the diagnosis). The lead as the cause is new, but the decision keyed is recognizing tamponade. |
| q2 | PASS (D1) | Bedside echo now for shock repeats shock-15 q2 and multiple-trauma-02. It is the literal wording of shock key feature 6 (bedside ultrasound to find the cause of shock), as in the chest-pain-47 q4 D1 entry. |
| q3 | FAIL | Pericardiocentesis repeats shock-15 q3 (see the flags above). The update even reuses shock-15 q2's echo findings, and the fluid bolus item echoes shock-15 q4. |
| q4 | PASS | Drain care, repeat echo, device check and EP review are new. |
| Overall | FAIL | The arc of signs, then echo, then drain, then fluid is shock-15 with a different cause. Rebuild around what is unique to the lead, for example telling pneumothorax from perforation after a device, or capture failure. Do not key the tamponade steps again. |

### chest-pain-07 (pill esophagitis vs ACS): PASS
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Nothing else in the bank keys pill esophagitis. The Kim 2014 numbers round correctly: 71.8, 38.5 and 35.9 percent become 72, 39 and 36. |
| q2 | PASS | Odynophagia as a weak clue is a new reason. ischemic-heart-disease-10 keeps the GI cocktail. |
| q3 | PASS (D1) | ECG within 10 minutes, troponin, chest X-ray and bloods before the history is complete. This is nearly the same list as ischemic-heart-disease-15 q1. It is the literal wording of chest pain key feature 2 ("even before the history is complete"), so it is this SAMP's one D1 repeat. |

### chest-pain-08 (ACS in tetraplegia that looks like dysreflexia): PASS
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Spinal cord injury as a risk factor is new. ischemic-heart-disease-02 and chest-pain-33 key other risk factors. |
| q2 | PASS | New. ems-21 is dysreflexia without ACS. |
| q3 | PASS | GRACE has no other key in the bank. The GRACE variables and the ESC threshold of 140 are correct. 64 to 212 ng/L confirms an NSTEMI. |

### chest-pain-09 (type 2 MI from menorrhagia anemia): FIXED
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | |
| q2 | PASS (D1) | A single early troponin and a normal ECG do not exclude MI. This repeats ischemic-heart-disease-15 q2. It is the literal wording of chest pain key feature 5 and IHD key feature 4 ("single normal tests", "one negative test"), so it is this SAMP's one D1 repeat. |
| q3 | FIXED | I removed the generic "relief is a weak clue" item. It made q3 a second IHD key feature 4 repeat (ischemic-heart-disease-05 q4, ischemic-heart-disease-14 q2), and it could be earned by restating the prompt. I also removed "coronary disease" from the unmask match phrases, because "coronary artery disease" is in the prompt. The key is now the type 2 mechanism: unmasked fixed stenosis, risk factors and the rising troponin, with 2 of 3 required. |
| q4 | PASS | Admit, treat the anemia, then cardiac imaging is new. Troponin values of 11 then 58 ng/L against a female 99th percentile of 16 are consistent. |

### chest-pain-11 (RA and prior pre-eclampsia, labelled anxiety): FAIL at q3. The story can stay.
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | The risk factor list came from old chest-pain-14 q4, which this batch retires. chest-pain-35 keys HIV, which is a different factor. |
| q2 | PASS (D1) | ECG within 10 minutes repeats ischemic-heart-disease-15 q1. It is the literal wording of chest pain key feature 2, so it is this SAMP's one D1 repeat. |
| q3 | FAIL | ASA, nitroglycerin and a parenteral anticoagulant for NSTE-ACS, with fibrinolysis marked wrong, repeats chest-pain-40 q4 (signed: ASA 160 mg chewed plus enoxaparin 1 mg/kg SC, and "fibrinolysis has no role without ST elevation"). It is a second repeat. Re-key it to a decision specific to her. |
| q4 | PASS | |

### chest-pain-13 (pericarditis with effusion on hemodialysis): FIXED
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | |
| q2 | PASS | Potassium 5.4 mmol/L with no hyperkalemia treatment keyed keeps it clear of cluster 12. |
| q3 | FIXED | The explanation said anticoagulation "should be avoided". The ESC 2015 text says effusions in uremic patients are often bloody and anticoagulation "should be carefully considered or avoided", so I reworded it to match. Decision check: loc-20 q3 (signed) keys uremic pericarditis as a reason to start dialysis in a man not yet on dialysis. This question keys heparin-free, intensified dialysis over colchicine, NSAIDs and steroids in a long-term dialysis patient (ESC "dialysis pericarditis"), plus admission with repeat echo. I judged these to be different decisions. See the physician section. |
| q4 | PASS | |

### chest-pain-14 (bicuspid valve, pain at the gym): FAIL. It needs a new story.
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Dissection as a lethal cause linked to the valve. |
| q2 | FAIL | Repeats chest-pain-01 q2 (see the flags above). The ADD-RS of 2 is computed correctly. |
| q3 | FAIL | Repeats chest-pain-01 q3, which accepts "normal bedside or transthoracic echo" as a test that must not exclude dissection. |
| q4 | PASS | |
| Overall | FAIL | The case retells chest-pain-01: known aortic valve disease, abrupt pain to the back, a normal ECG and chest film, a high ADD-RS, then CTA, then normal tests do not exclude. Simcheck puts chest-pain-01 on top (0.26 full, 0.23 keys). The cluster 41 direction ("why normal tests do not exclude it, and CT angiography") asks for chest-pain-01's keys. |

### chest-pain-15 (inferior STEMI with stage 4 CKD at a PCI centre): PASS
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | The fistula arm is new. Female sex is accepted but ESC 2023 uses ARC-HBR, which does not list sex. See the physician section. |
| q2 | PASS (D1) | Primary PCI now at a PCI centre is the literal wording of IHD key feature 6. It echoes ischemic-heart-disease-11 q1 and ischemic-heart-disease-34 q1, so it is this SAMP's one D1 repeat. The CCS 2019 Table 3 goal of 90 minutes from first medical contact to device at a PCI centre was checked in the local text. |
| q3 | PASS | Contrast strategy in CKD is new. UFH is one of three keys and is not the decision. 70 x 64 = 4480 units is correct. Fondaparinux below 20 mL/min, enoxaparin once daily below 30 mL/min, and hydration at IIa (checked in the ESC 2023 CKD section) are correct. |
| q4 | PASS | This repeats q2's decision within the SAMP, argued from the ESC CKD text. |

### cva-01 (HHS mimic with a small infarct): PASS
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Correct HHS, then reassess. The key is the longest option at 1.26 times the mean distractor length, which is under the 1.5 cap. |
| q2 | PASS | No other SAMP keys HHS as a stroke mimic. loc-12 keys HHS confusion, osmolality and fluids. |
| q3 | PASS | The CSBPR 7th edition exclusion list was checked in the local module text: glucose below 2.7 or above 22.2 mmol/L, and focal signs from severe hypo- or hyperglycemia. Last known well at 19:00 with arrival at 10:05 is 15 hours. Osmolality fell from 348 to 331 in 6 hours, 2.8 mmol/kg per hour, which is within the Diabetes Canada limit of 3. |

## D1 repeats

These D1 repeats survive in this group. Each is a signed decision in the literal wording of a key feature, one per SAMP. Rows marked provisional sit in a SAMP that fails on another question, and they stand only if the re-key leaves them as the SAMP's only repeat.

| SAMP and question | Repeated decision | Signed-off SAMP it echoes |
|---|---|---|
| chest-pain-07 q3 | ECG within 10 minutes and a troponin before the history is complete (chest pain key feature 2) | ischemic-heart-disease-15 q1 |
| chest-pain-09 q2 | One early troponin and a normal ECG do not exclude MI (chest pain key feature 5, IHD key feature 4) | ischemic-heart-disease-15 q2 |
| chest-pain-15 q2 | Primary PCI now for STEMI at a PCI centre (IHD key feature 6) | ischemic-heart-disease-11 q1, also ischemic-heart-disease-34 q1 |
| chest-pain-02 q1 (provisional) | 12-lead ECG within 10 minutes for possible ACS (chest pain key feature 2) | ischemic-heart-disease-15 q1 |
| chest-pain-11 q2 (provisional) | 12-lead ECG within 10 minutes for possible ACS (chest pain key feature 2) | ischemic-heart-disease-15 q1 |

chest-pain-06 q2 (bedside echo for tamponade in shock, shock key feature 6) would qualify, but chest-pain-06 fails, so it is not listed. Add these rows to the D1 table in `docs/DECISIONS.md` when the group lands, with the provisional rows confirmed or dropped after the re-keys.

## For the physician

1. Three SAMPs need a new story: chest-pain-03, chest-pain-06 and chest-pain-14. In each one, your rebuild direction asks for a key that a signed SAMP already has. chest-pain-03 asks for immediate angiography for refractory ischemia (ischemic-heart-disease-14 q3, and the ischemic-heart-disease-40 story). chest-pain-06 asks for POCUS and pericardiocentesis (shock-15). chest-pain-14 asks for normal tests not excluding dissection and CTA (chest-pain-01 q2 and q3). D1 as written allows one literal key feature repeat per SAMP, and none of these fits. You can keep a direction only by reversing D1 or widening it for that question.
2. Two SAMPs keep their story but need one question re-keyed. chest-pain-02 q3 (ticagrelor and UFH before PCI) matches ischemic-heart-disease-11 q2. chest-pain-11 q3 (ASA, nitrate and anticoagulant for NSTE-ACS) matches chest-pain-40 q4.
3. chest-pain-02 q4 and chest-pain-15 q4 both have a consultant ask to delay primary PCI, and both key "proceed now". The stories differ (ASA allergy, CKD), but please decide whether the bank needs both.
4. chest-pain-13 q3 is close to loc-20 q3 (dialysis for uremic pericarditis). I kept it because this SAMP keys heparin-free, intensified dialysis over anti-inflammatories in a long-term dialysis patient, not the indication to start dialysis. ESC 2015 states the anticoagulation caution for patients starting dialysis, so heparin-free dialysis in this man is an extrapolation. Please confirm the key. The writer could not check the 2025 ESC pericarditis guideline, and I did not either.
5. chest-pain-15 q1 accepts female sex as a complication risk. The cited ESC 2023 uses ARC-HBR, which does not include sex. Keep it as fair or remove it.
6. The fixes I made in place: chest-pain-09 q3 (removed the generic relief item and a match phrase that echoed the prompt) and chest-pain-13 q3 (explanation wording now matches the ESC text).
7. Minor: chest-pain.ts now has two source ids for the same 2021 chest pain guideline (`aha-chest-pain`, `aha-chest-pain-2021`) and two for the 2022 aortic guideline (`aha-aorta`, `aha-aorta-2022`). This is harmless, but they could be merged later without touching the kept SAMPs.

## Landing decision

chest-pain-07, 08, 13 and 15 and cva-01 land. chest-pain-09 does not, although the reviewer passed it after fixes. Its one D1 repeat (q2) echoes ischemic-heart-disease-15, the keeper of its own cluster 39. A rebuild must not retell its keeper. So chest-pain-02, 03, 06, 09, 11 and 14 keep their signed text on the branch and go back for another rebuild. The two provisional D1 rows lapse with them. The surviving repeats, chest-pain-07 q3 and chest-pain-15 q2, are in the table in docs/DECISIONS.md.
