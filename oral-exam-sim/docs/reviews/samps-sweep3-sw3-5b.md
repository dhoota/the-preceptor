# Sweep 3 re-rebuild, label sw3-5b (cva-27 and chest-pain-47)

This report covers the second rebuild of cva-27 (s27) and chest-pain-47 (s28). The first sweep 3 rebuilds failed review in `docs/reviews/samps-sweep3-review-sw3-5.md`. Nothing was committed. Both SAMPs stay `reviewed: false`.

## Summary

| SAMP | Old story (HEAD) | Rejected sweep 3 story | New story | Version |
|---|---|---|---|---|
| cva-27 | An 84-year-old man found on the kitchen floor with right MCA neglect and anosognosia. It copied cva-06. | A 46-year-old transcriptionist with alexia without agraphia from a left PCA stroke. q2 copied cva-06 q2, q4 copied cva-26 q3 and q3 repeated cva-28 q2. | A 67-year-old man who veers to the right on a walk and overshoots his cup, with ipsilateral limb and gait ataxia and no vertigo. It is a right superior cerebellar artery infarct the day after a radial coronary angiogram, in a man with a past reaction to IV contrast. | 2 to 3 |
| chest-pain-47 | A 57-year-old man with heartburn in the waiting room and a lateral STEMI. It copied chest-pain-07 and abdominal-pain-05. | A type A dissection that mimics an inferior STEMI, with antithrombotics held. It repeated signed-off cva-09 and chest-pain-01. | Rural ED. A 52-year-old woman kicked in the sternum by a horse, with new PVCs and a new right bundle branch block. It is blunt cardiac injury, and she later becomes hypotensive with distended neck veins. | 1 to 2 |

The ids, topics and question counts are unchanged. The key feature sets match HEAD. cva-27 matches HEAD question by question (2, 3, 3, 3). chest-pain-47 has the same set as HEAD (2, 5, 1, 2) in a different order (1, 2, 5, 2). The dissection and aortic material is gone completely. chest-pain-47 `alsoTopics` changed from ischemic-heart-disease to multiple-trauma, to fit the new story.

## cva-27, new keys and sources

| Q | KF | Keyed decision | Source (opened and checked) |
|---|---|---|---|
| q1 | 2 | Infarct of the right cerebellum. Ipsilateral arm and leg ataxia with dysarthria and normal strength, reflexes and sensation. | Amarenco 1991, Neurology, doi 10.1212/wnl.41.2_part_1.253. The Europe PMC abstract gives ipsilateral dysmetria, dysarthria and unsteadiness, a mimic of dysarthria and clumsy hand, and a cardiac source in 6 of 9. |
| q2 | 3 | Right superior cerebellar artery. There is limb and gait ataxia with no vertigo, vomiting or nystagmus. | Kase 1985, Neurology, doi 10.1212/wnl.35.5.705. The abstract gives ataxic gait with little or no vertigo, and top of basilar occlusion in 2 of 3. The line on isolated vertigo and the medial PICA branch comes from Nelson and Viirre, West J Emerg Med 2009 (PMC2791733). |
| q3 | 3 | Tenecteplase IV now. A radial artery puncture yesterday is compressible, so it is not a relative exclusion. The update states that the deficit is disabling, and that is not tested. | CSBPR Acute Stroke Management 2022 with the 2025 EVT update, local copy of the December 2025 PDF. Box 5B lists "arterial puncture at a non-compressible site in the previous 7 days". The tenecteplase dose is 0.25 mg/kg to a maximum of 25 mg. |
| q4 | 3 | CT angiography after IV premedication. A contrast allergy and pending creatinine must not delay vascular imaging. | Same CSBPR document. Section 4.2, clinical consideration 2: a known contrast allergy or renal failure should not exclude a patient from EVT. Box 5D.5 lists diphenhydramine 50 mg IV, methylprednisolone 40 mg IV or hydrocortisone 200 mg IV, and famotidine 20 mg IV. Section 4.2 note: blood work should not delay imaging. Section 4.2 ii: NCCT with CTA without delay. |

Key positions are 0, 4, 3 and 1.

## chest-pain-47, new keys and sources

| Q | KF | Keyed decision | Source (opened and checked) |
|---|---|---|---|
| q1 | 1 | Blunt cardiac injury, from new ventricular ectopy and a new RBBB after a sternal blow. | Kyriazidis 2023, World J Emerg Surg, doi 10.1186/s13017-023-00504-9, full text on PMC10225099. Conduction abnormalities were found in 24.6% of BCI, a RBBB suggests an injured right ventricle, and CK-MB had the lowest diagnostic odds ratio (3.6). |
| q2 | 2 | High-sensitivity troponin added to the ECG. | Audette 2014, Can Fam Physician, PMC3922581, a Quebec multicentre review (Canadian). It recommends troponin I with the ECG for sternal fracture, drawn 4 to 8 hours after injury. |
| q3 | 5 | Monitored bed with continuous ECG, even though she feels well, the pain has settled and a sternal fracture could explain it. | EAST 2012 (Clancy), J Trauma Acute Care Surg, doi 10.1097/TA.0b013e318270193a, abstract on Europe PMC. It says to admit for monitoring when there are new ECG changes or a raised troponin, and a sternal fracture alone does not predict BCI. |
| q4 | 2 | Bedside echocardiography for new hypotension with distended neck veins and clear lungs. | EAST 2012: echo is reserved for patients with hypotension or arrhythmias. |

Key positions are 1, 3, 2 and 0. No Canadian guideline on BCI exists that I could find, so EAST and a Canadian descriptive study are used.

## Decision search, one row per question

Search method: `grep -i` on `scratchpad/allkeys.tsv` for each term, plus a meaning-level search of `digest3.json` and a direct `grep -ri` of `src/samps` just before finalising.

| SAMP q | Terms searched | Closest hits | Verdict |
|---|---|---|---|
| cva-27 q1 | cerebell, dysmetri, ataxi, clumsy, lacunar, hand | cva-03 q1 (SIGNED, truncal ataxia with vertigo), cva-43 q1 (gait ataxia in a TIA), headache-25 q4 (nystagmus and limb ataxia), cva-17 q1 (hand knob, weak finger spreading) | No SAMP keys a cerebellar hemisphere infarct from limb ataxia without vertigo |
| cva-27 q2 | superior cerebellar, SCA, posterior inferior cerebellar, artery keys | cva-22 q1 (left vertebral artery, where SCA is only a distractor), cva-24 q1 (right PCA), cva-26 q1 (left ACA), cva-17 q2 (left MCA branch), cva-25 q4 (Percheron) | No SCA key anywhere |
| cva-27 q3 | arterial puncture, radial, compressible, angiogra, catheteri, exclusion | cva-23 q2 (DAPT is not an exclusion), cva-29 q3 (hip replacement 6 days ago, then EVT), cva-33 q1 (INR over 1.7), chest-pain-15 q1 and IHD-01 q4 (STEMI fibrinolysis contraindication lists), tenecteplase keys in cva-05, cva-26 and cva-28 (for doses or for disabling deficit) | No SAMP keys arterial puncture. Tenecteplase is keyed elsewhere for other reasons |
| cva-27 q4 | contrast, allerg, premedic, creatinine, CTA | anaphylaxis-04 q3 (SIGNED: after contrast anaphylaxis, use a non-contrast study in future, which is the elective opposite), cva-02 and cva-04 q2 (NCCT and CTA arch to vertex), CTA keys in cva-22, 25, 44, 45 and 47 | No SAMP keys premedication or a contrast allergy in stroke |
| chest-pain-47 q1 | blunt cardiac, contusion, commotio, horse, kick, sternal | arrhythmia-47 q1 (commotio cordis from a puck, with contusion only as a distractor), multiple-trauma-47 (blunt aortic injury), chest-pain-29 q1 (ACS that caused a fall) | No BCI key anywhere |
| chest-pain-47 q2 | troponin, CK-MB, creatine kinase | IHD-15 q1 and chest-pain-02 q1 (ECG and troponin for ACS), burns-06 and environmental-13 (ECG and CK after electrical injury) | Troponin is keyed only for ACS or electrical injury, never for blunt chest trauma |
| chest-pain-47 q3 | monitored bed, continuous ECG, telemetry, monitoring, sternal | environmental-37 q2 (telemetry and echo after lightning, with troponin 180 and QTc 510), arrhythmia-21 (monitored bed with pads, Lyme), arrhythmia-01 (monitored bed) | Nearest is environmental-37. That is a similar disposition for a different mechanism and teaching. Flagged below |
| chest-pain-47 q4 | echocardiog, bedside echo, POCUS, tamponade, pericardiocentesis | shock-15 (SIGNED, malignant tamponade, keys pericardiocentesis), chest-pain-13 q2 (SIGNED, write-in list for pericarditis), multiple-trauma-02 (SIGNED, stab wound eFAST), arrhythmia-47 q4 (echo before return to hockey) | None keys bedside echo for new hypotension after blunt chest trauma with an earlier normal scan |

The failed sweep 3 decisions were checked as well. Glucose before lysis (cva-06), MeVO thrombectomy (cva-26), the disabling judgement (cva-28), holding antithrombotics (cva-09) and the type A diagnosis (chest-pain-01) are none of them keyed in the new versions.

## Similarity check (simcheck.py, final run)

| SAMP | Top 5 (full, keys) |
|---|---|
| cva-27 | cva-17 0.14, 0.17 / cva-32 0.16, 0.07 / cva-23 0.15, 0.06 / cva-19 0.12, 0.02 / cva-29 0.12, 0.02 |
| chest-pain-47 | asthma-copd-24 0.16, 0.02 / chest-pain-21 0.14, 0.10 / ischemic-heart-disease-45 0.13, 0.07 / chest-pain-29 0.11, 0.13 / shock-15 0.11, 0.13 |

I read every printed card. The first cva-27 draft opened with a man whose right hand was clumsy while he tied a fishing fly. That was too close on the surface to cva-17, where a watchmaker's hand weakens while he buttons his shirt. I rewrote the opening around gait (veering on a walk). cva-17 is a cortical hand knob stroke on dabigatran, with other keys. No printed card tells the same story or keys the same decision for a similar reason. Outputs are in `scratchpad/sw3-5b/*.sim`.

## Cueing and format

- Mock mode: no later update, prompt or option names an earlier key. The cva-27 q4 update does not mention tenecteplase. The chest-pain-47 updates never report the troponin, which is the q2 key. No prompt names blunt cardiac injury.
- There is no hedged key. Every option in the chest-pain-47 q3 disposition question is a concrete action.
- No key is the longest option by more than the rules allow. The quality tests pass.

## Checks

- `SAMP_BATCH=s27 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 715 passed.
- `SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 699 passed.
- `npx tsc --noEmit -p .`: clean.
- Source constants: added SRC_AMARENCO_SCA and SRC_KASE_SCA (s27), and WJES_BCI, CFP_STERNAL and EAST_BCI (s28). Removed MISSED_AAS, which the rejected rebuild had added and nothing now uses. CCS_STEMI is left in place from HEAD, now unused.

## For the physician

- cva-27 q3 keys full-dose tenecteplase the day after a radial coronary angiogram. It rests on the CSBPR Box 5B wording that only a noncompressible arterial puncture within 7 days is a relative exclusion. CSBPR says nothing specific about stroke after catheterization. Please confirm.
- cva-27 q4 keys CTA after IV premedication. The premedication regimen in CSBPR (Box 5D.5) is written for EVT, and section 4.2 says a contrast allergy should not exclude EVT assessment. Applying it to the CTA is an extrapolation. Evidence for rapid IV premedication is limited. Please confirm it fits your practice.
- cva-27 q2 separates SCA from PICA territory using small, older case series (Kase 1985, 3 patients, and Amarenco 1991, 9 patients). The teaching is standard, but please accept the sources.
- chest-pain-47 has no Canadian guideline behind it. It uses EAST 2012 (US), a 2023 meta-analysis and a Quebec descriptive study (Audette 2014).
- chest-pain-47 q3 (admit to a monitored bed after ECG changes from injury) is closest to environmental-37 q2 (telemetry after a lightning strike with ECG changes). The mechanism and the teaching differ. Please judge whether the overlap is acceptable.
- chest-pain-47 now tests blunt chest trauma under the chest pain topic, with multiple-trauma as a secondary topic. Please confirm this fits the chest pain blueprint.
