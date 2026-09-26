# Independent review of signed-duplicate rebuild g01

Group: sob-01, sob-03, sob-04, sob-05, sob-06, sob-08, sob-09, sob-10, sob-11, sob-12, sob-14, sob-15, all in `src/samps/s17/sob.ts`. Writer report: `docs/reviews/signed-rebuild-g01.md`. Nothing was committed.

## Result

| SAMP | Verdict | Main reason |
|---|---|---|
| sob-01 | FAIL | q1 and q3 retell its own keeper airway-03 (q1 and q2). q2 and q4 also repeat anaphylaxis-01 and anaphylaxis-22. |
| sob-03 | FAIL | q2 retells its own keeper asthma-copd-03 q4. q4 can be passed without naming removal. |
| sob-04 | FAIL | q1 and q2 retell signed asthma-copd-01 (HEAD) and the cluster 5 repeated key. q3 echoes keeper asthma-copd-09 q1. |
| sob-05 | FAIL | q4 is its keeper asthma-copd-02 q4 word for word (prednisone 40 mg for 5 days). q2 and q3 retell the keeper's severity and BiPAP keys. |
| sob-06 | FAIL | q3 retells its keeper dvt-pe-06 q2 (CT over VQ in lung disease). q2 repeats asthma-copd-05 q4. |
| sob-08 | FAIL | q2 retells its keeper abdominal-pain-06 q2 and q3 (saline, insulin 0.1 units/kg/h, potassium rules, dextrose near 14 mmol/L). |
| sob-09 | FAIL | q2 and q3 repeat signed tox-36 q1, q2 and q4 (co-oximetry, methylene blue 1 mg/kg, G6PD). The presentation also mirrors tox-36. |
| sob-10 | FAIL | q1 retells its keeper dvt-pe-02 q1. q2 and q4 repeat dvt-pe-31 q2 and q3 and asthma-copd-44 q4. |
| sob-11 | FAIL | q2 retells its keeper dvt-pe-08 q1. q3 repeats asthma-copd-44 q4 and dvt-pe-31 q3, and converges with sob-10 q4. |
| sob-12 | FIXED | Dangerous-answer match phrases zeroed correct answers in q2. Fixed. One D1 repeat in q1 to record. |
| sob-14 | FAIL | q2 repeats signed tox-12 q2 and q3 repeats signed asthma-copd-07 q2 and q3. That is two repeats, and D1 allows one. |
| sob-15 | FAIL | q2 and q4 retell its own keeper anaphylaxis-01 (q1 and q4). q3 repeats airway-18 q2. |

Structure is correct for all 12. Each keeps its id, topic, question count, kinds and keyFeatures. Each has `reviewed: false` after the META spread and `version: 2`, and each is in `src/samps/held-back/g01.json`. sob-02, sob-07 and sob-13 are byte-identical to HEAD. The file diff touches only these ids and their source constants. One small metadata change: sob-08 gained `alsoTopics: ["shock"]`, which matches its shock key feature.

The two landing rules decide most of these verdicts. Rule 1 says that echoing the keeper of the SAMP's own cluster is a FAIL even when the echoed decision is key-feature wording. Rule 2 says that re-keying is not a reviewer fix. Several of these rebuilds kept the new story but put the cluster's repeated key back in (sob-05, sob-08, sob-10, sob-11, sob-15).

## Rows

### sob-01 (cluster 10, keeper airway-03)
| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL | Upper airway findings: stridor, muffled voice, drooling, tongue swelling, sitting forward. The keeper airway-03 q1 keys drooling, muffled voice, tongue swelling and sitting upright as signs of a threatened airway. Same decision, same tongue-swelling reason. |
| q2 | FAIL | Epinephrine 0.5 mg IM is anaphylaxis-01 q1 (signed, wasp stings). This could be a D1 repeat (anaphylaxis KF 3) if it stood alone, but it does not. |
| q3 | FAIL | Difficulty predictors: beard, swollen tongue, limited mouth opening, upper airway obstruction, age. This is the keeper airway-03 q2 almost item for item. Rule 1. |
| q4 | FAIL | Autoinjectors, allergist venom referral, action plan and MedicAlert after a wasp sting. This is anaphylaxis-01 q4 and anaphylaxis-22 q4 (both signed, both wasp venom). |

Ruling on the anaphylaxis-22 overlap: it is a real repeat. anaphylaxis-22 q4 keys "Allergist referral for venom testing" and "Two 0.3 mg epinephrine autoinjectors" after a wasp sting. sob-01 q4 keys the same two items for the same reason. anaphylaxis-01 q4 keys them too. Anaphylaxis KF 4 is written in D1 wording, so one such repeat could be allowed. But sob-01 already spends that allowance on q2, and q1 and q3 fail rule 1 in any case. Fix needed: a new story that does not rest on tongue swelling and a beard, or at least new q1 and q3 decisions, and a discharge question that does not center on venom referral.

### sob-03 (cluster 34, keeper asthma-copd-03)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Esophageal location from the lateral film. Not keyed elsewhere. gi-bleed-20 keys a battery with a hemorrhage, not location. |
| q2 | FAIL | "Features against asthma" accepts sudden onset, no previous wheeze and no salbutamol response. Those three are keeper asthma-copd-03 q4 items (choking or sudden cough, no previous wheeze, poor bronchodilator response), and three is the required count. A candidate passes with the keeper's answers. Rule 1. |
| q3 | PASS | Halo, step off, second object, free air. NASPGHAN checked in `scratchpad/g01/naspghan.txt`. |
| q4 | FAIL | The key decision is emergent removal, but required 3 of 5 lets "NPO, calm with her father and monitored, involve anesthesia" score 3/3 without removal. Tested with `markShort`. Those three items are also the keeper's q3 (NPO, calm with a parent, monitored with airway equipment ready). Making removal mandatory needs a restructured accept list, so this is not a reviewer fix. |

Fix needed: q2 re-keyed to something the keeper does not key, for example the findings that point to the esophagus rather than the airway (drooling, gagging, refusing drinks, the lateral film). q4 needs removal as the single required decision, or a single-answer format.

### sob-04 (cluster 5, keeper asthma-copd-09)
| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL | GINA fatal-asthma history list. Signed asthma-copd-01 at HEAD q1 has the same list. This is the cluster 5 repeated key ("Fatal asthma risk factors"). |
| q2 | FAIL | First-hour orders (salbutamol, ipratropium, steroid, magnesium 2 g, oxygen 93 to 95%, no sedation, no aminophylline). This is signed asthma-copd-01 HEAD q2 and the cluster 5 repeated key ("first 20 minute orders"). The beta blocker exclusion is the only new element. |
| q3 | FAIL | Severity by gas, SpO2, mental status, speech and silent chest. This echoes keeper asthma-copd-09 q1 (drowsiness, silent chest, rising pCO2, single words). The update also cues the answer ("His heart rate and blood pressure are partly driven by the cocaine"). |
| q4 | PASS as written | Rocuronium 1.2 mg/kg over succinylcholine after cocaine, per Bless et al. 2025. Note that the rebuilt cluster 5 sibling airway-10 q1 also keys rocuronium 1.2 mg/kg in asthma, for a different reason (a child). That is convergence to watch. |

Ruling on the known concern: sob-04 converges with the signed HEAD text of asthma-copd-01. My simcheck gives 0.51 full and 0.44 keys, the highest score in the group. The rebuilt asthma-copd-01 in the working tree (34-year-old 80 kg man, GINA list q1, first-20-minute orders q2) converges too, at the 0.42 the g07 reviewer found. Both are in cluster 5, and cluster 5's repeated key is exactly q1 plus q2. Keeping asthma-copd 2 and 5 as key features does not force a GINA risk list and first-hour orders. For example, KF 2 could be keyed as one single-answer history item that cocaine use changes, and KF 5 as what to start before the diagnosis is certain when cocaine chest pain and asthma overlap. Needs a new story and new q1 to q3 decisions.

### sob-05 (cluster 33, keeper asthma-copd-02)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Air-driven nebulizer. No other SAMP keys it (grep of allkeys and src). GOLD 2026 supports it. |
| q2 | FAIL | Drowsiness, pH, PaCO2 and hypoxemia as severity markers. This is keeper asthma-copd-02 q1 (drowsiness, acidemia, hypercapnia) for the same hypercapnic COPD. Only the opioid items are new. |
| q3 | FAIL | Bilevel NIV for hypercapnic acidosis in COPD. This is the cluster 33 shared story ("needs BiPAP") and the keeper's q3 and q5. |
| q4 | FAIL | Prednisone 40 mg for 5 days. This is the cluster 33 repeated key word for word and keeper asthma-copd-02 q4. Rule 1. |
| q5 | FAIL | NIV failure signs retell the keeper's "reading the trend on BiPAP" (q5), apart from the naloxone-wears-off item. |

The opioid-in-COPD story is new, but four of the five keys are the keeper's. Needs new keyed decisions for q2 to q5, for example naloxone dosing and endpoint, observation length after naloxone for a long-acting opioid, rib fracture analgesia that spares respiratory drive, and the prescribing error.

### sob-06 (cluster 16, keeper dvt-pe-06)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS on its own | Recovered peak flow with persistent tachycardia and hypoxemia. Close to asthma-copd-44 q1 (a peak flow at her best argues against asthma) and to the cluster's "think beyond the flare", but the mismatch angle is different. |
| q2 | FAIL | GINA complicating and alternative diagnoses. This is signed asthma-copd-05 q4 (pneumonia, pneumothorax or pneumomediastinum, PE, anaphylaxis, vocal cord dysfunction, mucus plugging). A D1 candidate on its own (asthma-copd KF 4). |
| q3 | FAIL | CT angiogram over a lung scan because lung disease makes VQ hard to read. This is keeper dvt-pe-06 q2 and the cluster 16 repeated key ("CTPA over VQ in lung disease"). Rule 1. The writer flagged this. |
| q4 | PASS | Hestia outpatient findings. dvt-pe-06 q3 keys the opposite disposition. Hestia items checked. |

Also close in story to signed asthma-copd-44: a young asthmatic woman on the pill with PE, CT angiography and a peak flow that argues against asthma. simcheck 0.30. Needs q2 and q3 re-keyed, for example leg ultrasound of the uncasted leg or the Wells arithmetic, and a q2 that is not the GINA mimic list.

### sob-08 (cluster 22, keeper abdominal-pain-06)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Dyspnea differential at 30 weeks, including euglycemic DKA. DKA in pregnancy is not keyed elsewhere. |
| q2 | FAIL | Saline about 500 mL/h, insulin 0.1 units/kg/h, potassium rules and dextrose. This is keeper abdominal-pain-06 q2 and q3 and the cluster 22 repeated key ("Saline, insulin 0.1 units/kg/h with the potassium rules, and dextrose at about 14 mmol/L"). The dextrose-from-the-start item is new, but required 3 of 4 lets the keeper's saline, insulin and potassium score 3/3. Rule 1. Arithmetic is correct (anion gap 27, insulin 7.2 units/h). |
| q3 | PASS | Left lateral position, oxygen, treat the mother first and no crash section. Not keyed elsewhere. It rests on a critical care review rather than SOGC. The physician should look at this. |

Needs q2 re-keyed on a pregnancy-specific decision, for example the lower bicarbonate baseline of pregnancy, or the dextrose-from-start decision as the single keyed answer rather than one item of a fluids list.

### sob-09 (cluster 11, keeper tox-02)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS on its own | Saturation gap, fixed 85% reading and hemolysis. tox-36 has "does not improve on oxygen" in its stem but does not key it. |
| q2 | FAIL | Co-oximetry for methemoglobin plus G6PD before methylene blue. This is signed tox-36 q1 and q4. |
| q3 | FAIL | Methylene blue 1 to 2 mg/kg for acquired methemoglobinemia. This is signed tox-36 q2. Also, required 3 of 6 lets "stop dapsone, oxygen, admit" score 3/3 without methylene blue (tested). |
| q4 | PASS | Repeat methylene blue for dapsone rebound. Not keyed elsewhere. Numbers correct (62 mg is 1 mg/kg at 62 kg). Iolascon 2021 supports the regimen. |

Ruling on the tox-36 overlap: it is a real repeat, not residual. Two keyed decisions (co-oximetry, methylene blue) plus the G6PD caution match tox-36, for the same reason. The case also mirrors tox-36 closely: cyanosis, headache, breathlessness, clear chest, normal heart sounds, 85% on 15 L/minute by non-rebreather, pulse 104/minute and respiratory rate 22/minute in both. Neither this SAMP nor tox-36 is the other's keeper, so rule 1 does not apply. But the brief's decision search rule does, and D1 allows only one repeat. Needs a new story or q2 and q3 re-keyed around dapsone-specific decisions (hemolysis, agranulocytosis, rebound, whether to continue therapy), with the vitals changed away from tox-36.

### sob-10 (cluster 51, keeper dvt-pe-02)
| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL | VTE risk history. Keeper dvt-pe-02 q1 is the same question. Four accept items (previous VTE, family history or thrombophilia, surgery, cancer) are the keeper's, and required is 3. Rule 1. The IBD items (transfusion, parenteral nutrition, albumin) are new, but they are not required. |
| q2 | FAIL | CT angiogram, not D-dimer, at Wells 6. This is signed dvt-pe-31 q2 ("No D-dimer, proceed to imaging") and asthma-copd-44 q3. |
| q3 | FAIL | Negative D-dimer does not exclude PE when PE is likely. This is the same decision as q2, and old sob-11 q1 keyed it too. It is D1 wording (sob KF 5), but it adds to the q2 and q4 repeats. |
| q4 | FAIL | LMWH or a DOAC now while CT is delayed 6 hours. This is signed asthma-copd-44 q4 ("Therapeutic anticoagulation now", CT delayed 6 hours) and dvt-pe-31 q3. The same decision is also sob-11 q3 in this group. |

The cluster direction (recurrence after stopping apixaban, residual defects) was not used. Needs a new set of decisions.

### sob-11 (cluster 18, keeper dvt-pe-08)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS on its own | Anemia does not lower the saturation, and a normal film does not lower PE probability. This is sob KF 5 wording. Close to old sob-11 q1, which is being replaced. |
| q2 | FAIL | Examination findings that support PE (DVT signs, JVP or RV signs, hypotension, tachypnea). This is keeper dvt-pe-08 q1 (JVP, RV heave, leg signs). Rule 1. |
| q3 | FAIL | Dalteparin now while CT is delayed 5 hours. This is asthma-copd-44 q4 and dvt-pe-31 q3, and the same decision as sob-10 q4 in this group. |
| q4 | PASS | Anticoagulant choice with heavy menstrual bleeding (avoid rivaroxaban, levonorgestrel system, iron). Not keyed elsewhere. Samuelson Bannow 2020 supports it. |

Needs q2 and q3 re-keyed. q4 and the anemia angle in q1 are worth keeping.

### sob-12 (cluster 52, keeper dvt-pe-05)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS (D1) | CT angiogram over VQ with an abnormal film. This repeats signed dvt-pe-06 q2 (CT over VQ in lung disease), which is the literal wording of DVT-PE KF 5. dvt-pe-06 is not this cluster's keeper. Wells 5.5 recomputes. Record in the D1 table. |
| q2 | FIXED | The dangerous phrases "no imaging needed" and "treat without imaging" matched correct answers under bag-of-words matching. "Imaging is needed, no role for D-dimer to confirm" and "Cannot treat without imaging confirmation" both scored 0 as dangerous (tested). Replaced with "can skip imaging", "imaging can be skipped", "imaging unnecessary", "imaging is unnecessary" and "d dimer is diagnostic". Added "not specific" to the ppv item and "imaging needed" to the high-probability item. Retested: correct answers score, and "We can skip imaging" and "D-dimer is diagnostic here" still zero the question. |
| q3 | PASS | Bilateral leg ultrasound after a negative CT at high probability. Thrombosis Canada says so (`scratchpad/g01/tc-pe-dx.txt` lines 47 and 93). Close to sob-24 q3 and sob-23 q3 (both signed), but those use leg ultrasound to settle a doubtful positive in a low-probability patient or a nondiagnostic VQ. The reason differs. Flagged for the physician. |
| q4 | FIXED | Dalteparin over a DOAC with nirmatrelvir-ritonavir. Checked against BCCDC tool 3 (apixaban for a VTE within 3 months: do not co-administer, rivaroxaban: do not co-administer, edoxaban: raised levels). Wording fix: the dose now reads 14 000 units at 70 kg, given as the 15 000 unit prefilled syringe, instead of leaving the rounding unstated. |

Not a retelling of keeper dvt-pe-05 (pregnancy, leg ultrasound first, VQ). The dalteparin dose matches the keeper's accept list, but here the reason is the ritonavir interaction, not pregnancy. simcheck top: sob-24 0.35/0.22, dvt-pe-31 0.29/0.13, sob-10 0.25/0.21.

### sob-14 (cluster 15, keeper asthma-copd-05)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS on its own | Salbutamol and 100% oxygen together, before either diagnosis is confirmed. The combination is not keyed elsewhere. ems-07 and ems-15 key high-flow oxygen and not trusting the oximeter in CO. |
| q2 | FAIL | Carboxyhemoglobin by co-oximetry, gas, lactate, ECG and troponin. This is signed tox-12 q2 (same list, CO exposure). Only peak flow and the neurological examination are new. |
| q3 | FAIL | ICS-formoterol MART, prednisone 40 to 50 mg for 5 to 7 days, technique, action plan, follow up in 2 to 7 days and occupational review. This is signed asthma-copd-07 q2 and q3 (a roofer with an occupational review). It is D1 wording (asthma KF 8), but q2 already repeats tox-12, and D1 allows one repeat. |

No echo of keeper asthma-copd-05. Needs q2 re-keyed away from the tox-12 workup, for example the half-life and oxygen duration decision, or cyanide co-exposure with a lactate threshold.

### sob-15 (cluster 1, keeper anaphylaxis-01)
| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Localising obstruction at the stoma. Not keyed elsewhere. |
| q2 | FAIL | Epinephrine 0.5 mg IM for anaphylaxis with hypotension. This is keeper anaphylaxis-01 q1. The face-mask nebulizer distractor is new, but the key is the keeper's. Rule 1. |
| q3 | FAIL | Pediatric face mask or LMA over the stoma, a 6.0 cuffed tube through the stoma and suction. This is signed airway-18 q2 (infant mask sealed over the stoma) and q4 (6.0 cuffed tube through the stoma). |
| q4 | FAIL | Autoinjectors, allergist, action plan, MedicAlert and return advice. This is keeper anaphylaxis-01 q4. Rule 1. |

Ruling on the airway-18 overlap: it is a real repeat. The writer is right that the NTSP algorithm makes it hard to avoid, but that is a reason to key a different decision in a laryngectomy anaphylaxis case, not to repeat it. The cluster direction (nebulized epinephrine at the stoma) would have been new. Needs q2 to q4 re-keyed, for example the drug route through the stoma and the biphasic observation period.

## Checks run
- Structure: HEAD against working tree, compared by script for id, topic, question count, kinds, keyFeatures, version and reviewed. All correct. Non-group SAMPs unchanged.
- simcheck on all 12, with drafts built from the current file (`scratchpad/g01r/d-<id>.txt`). Scores match the writer's report.
- Decision search in `scratchpad/allkeys.tsv` and `src/samps` for each question's core terms (co-oximetry, methylene blue, CT pulmonary angiogram, leg ultrasound, D-dimer, anticoagulation while waiting, venom referral, discharge inhaler plans, stoma ventilation, ritonavir). Cluster keepers were dumped from the live bank. HEAD asthma-copd-01 was dumped from git.
- Other writers' in-progress stories: grep of the working tree for coin, dapsone, laryngectomy, firefighter, insulin pump, fibroid, ulcerative colitis, crack cocaine, wasp and macadamia. No new collision beyond asthma-copd-01 and airway-10 (noted under sob-04).
- Match phrases tested with `markShort` for sob-12 q2 and q3 and for the required-count gaps in sob-03 q4, sob-09 q3 and sob-04 q3.
- `SAMP_BATCH=s17 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 passed.
- `npx tsc --noEmit -p .`: clean.

## For the physician
- 11 of the 12 rebuilds fail this review and should not land as they are. They stay held back in `src/samps/held-back/g01.json`. Most keep a genuinely new story but key the cluster's own repeated decision again, or a signed SAMP's decision. Per landing rule 2, I did not re-key any of them.
- Only sob-12 can land. It needs your fresh sign-off. Its q1 is a D1 repeat of dvt-pe-06 q2 (CT over VQ with lung disease, DVT-PE KF 5). Please add it to the D1 table in `docs/DECISIONS.md` when the group lands. I did not edit that file, because other writers are changing it.
- Please rule on sob-12 q3. It keys leg ultrasound after a negative CT at high probability. sob-24 q3 and sob-23 q3 key leg ultrasound after a doubtful CT or VQ. I judged the reasons different enough.
- sob-12 q4 uses the BC Centre for Disease Control tool rather than a national guideline, for dalteparin over a DOAC with nirmatrelvir-ritonavir.
- Writer-flagged overlaps, ruled: anaphylaxis-22 (sob-01 q4) is a repeat. tox-36 (sob-09 q2 and q3) is a repeat, with near-identical vitals. airway-18 (sob-15 q3) is a repeat. sob-06 q3 is a keeper echo.
- Convergence across rebuilds: sob-04 with asthma-copd-01 (both the signed HEAD text and the failed rebuild) and with airway-10 (rocuronium 1.2 mg/kg). sob-10 q4 with sob-11 q3 (anticoagulate while CT is delayed).

## Landing decision

Only sob-12 lands. The reviewer's fixes (dangerous-answer match phrases, two accepted phrasings for "imaging is needed", and the syringe size) stay inside the writer's keyed decisions. Its one D1 repeat, q1, echoes dvt-pe-06 q2. The keeper of its cluster 52 is dvt-pe-05, so rule 1 is not triggered. The other eleven failed, and they keep their signed text on the branch.
