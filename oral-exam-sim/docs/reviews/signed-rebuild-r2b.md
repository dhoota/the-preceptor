# Signed duplicate rebuilds, round 2, label r2b

File: `src/samps/s05/chest-pain.ts`. Ids: chest-pain-02, 03, 06, 09, 11 and 14. The ids were already held back in `src/samps/held-back/r2b.json`, which I did not edit. Nothing is committed.

Five ids are rebuilt: chest-pain-02, 03, 06, 09 and 14. chest-pain-11 is a "cannot" and still holds its round 1 text, untouched (see below).

For each rebuilt id the id, topic, question count, and each question's kind and keyFeature match HEAD. Each is `version: 2` with `reviewed: false` after the `...meta` spread. Source constants that only the round 1 texts used (ASA_HYPER, KHAN_OCC, CANO_LEAD) were removed because nothing references them now. No other SAMP in the file changed.

## Checks

- `SAMP_BATCH=s05 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 of 474 pass.
- `npx tsc --noEmit -p .`: clean.
- s05 single key positions are 6, 4, 5, 6, 5 of 26. The highest share is 23 percent, under the 30 percent cap. The key is the longest option in 6 of 26 singles (23 percent, cap 35).
- D1 repeats: none are claimed. No question keys the literal wording of a key feature that a signed SAMP already keys.
- markQuestion probe. I ran every keyed answer of the keeper and of every cluster member (the packet text plus `allkeys.tsv`) against each write-in question. No keeper or cluster answer set scores full marks on any rebuilt question. Natural correct wording, including negations such as "avoid beta blockers" and "do not give ticagrelor", scores full marks on every write-in question. I also ran every other SAMP's keys in the bank against each question. The closest bank matches are listed per row. The ones that reach full marks are word collisions from unrelated decisions, noted in the rows.

## Rows

### chest-pain-02 (cluster 2, keeper ischemic-heart-disease-01)

- Old story: signed text is a community hospital inferior STEMI with RV infarct, tenecteplase and failed lysis. Round 1 was an ASA allergy with an anterior STEMI. It failed at q3 (ticagrelor and UFH before PCI).
- New story: a 72-year-old man with a mechanical aortic valve on warfarin has an anterior STEMI at a PCI centre. The order set includes a UFH bolus. His point-of-care INR is 3.1.
- Keyed decisions:
  - q1 (short, CP 2): before the heparin is given, find out the INR now, the last warfarin dose and recent INRs, the valve type and target, and any other anticoagulant or antiplatelet drug.
  - q2 (short, CP 1): anterior STEMI. The key needs the territory, and a bare "STEMI" does not score.
  - q3 (menu, IHD 6): no added anticoagulant bolus for PCI, because the ESC recommends the UFH bolus in VKA patients only when the INR is below 2.5. The distractors are UFH 5880 units, enoxaparin 84 mg SC, fondaparinux, vitamin K and PCC.
  - q4 (short, IHD 6): the target time from first medical contact to device is 90 minutes or less at a PCI centre (CCS Table 3). The unacceptable answers are 120, 30, and "60 to 90 minutes after lysis".
- Sources opened: ESC 2023 ACS guideline, local full text (UFH bolus rule for NOAC and INR below 2.5, STEMI criteria, fondaparinux class III). CCS/CAIC 2019 STEMI focused update, local full text (Table 3 reperfusion goals).
- Decision search:
  - "heparin" with "INR, warfarin, VKA, bolus or PCI": the only hit is dvt-pe-07 q4 (UFH then warfarin for VTE), which is not related.
  - "90 minutes, first medical contact, door to": cqi-14 q2 lists door to balloon as a quality metric, which is a different decision.
  - Reversal with vitamin K or PCC is keyed in bleeding SAMPs (cva-14, gi-bleed-13). Here it appears only as a distractor.
- Simcheck top 5 (full/keys): ischemic-heart-disease-11 0.20/0.24, ischemic-heart-disease-16 0.23/0.08, pulmonary-edema-19 0.21/0.07, ems-10 0.21/0.17, ischemic-heart-disease-13 0.20/0.15.
- markQuestion probe:
  - Keeper and cluster: q1 1 of 2 (the cluster's clopidogrel keys hit the other-drug item), q2 0 of 1, q4 0 of 1.
  - Closest bank match: q1 cva-08, 2 of 2. Its stroke-etiology lines "missed doses" and "rivaroxaban" collide with the words. The decision is different.

### chest-pain-03 (cluster 36, keeper ischemic-heart-disease-08)

- Old story: signed text is a posterior STEMI (V7 to V9, cath lab, pre-PCI drugs, early troponin). Round 1 was refractory pain with a nondiagnostic ECG and an occluded artery. It failed at q1, q2 and q3.
- New story: a 57-year-old man with a lateral STEMI at a PCI centre. In 2021 ASA gave him hives and lip swelling, with no wheeze, collapse or blistering. The paramedics gave no ASA.
- Keyed decisions:
  - q1 (short, CP 1): lateral STEMI. The territory is required.
  - q2 (short, CP 1): the circumflex (obtuse marginal) is the likely culprit. A diagonal branch is accepted.
  - q3 (single, IHD 6): primary PCI now, with ASA desensitization afterwards. The distractors are an ASA challenge first, desensitization first, medical therapy, and tenecteplase without ASA.
  - q4 (short, CP 2): no ASA in any form, no other NSAIDs such as ketorolac or ibuprofen, and flag the allergy for pharmacy and the laboratory.
  - q5 (short, CP 5): pain relief after fentanyl does not change the plan. The ST elevation persists, the opioid treats pain without reopening the artery, and delay costs myocardium.
- Sources opened:
  - ESC 2023 ACS guideline, local full text (STEMI criteria, opioids, reperfusion as soon as possible).
  - Elhakim and colleagues, Rev Cardiovasc Med 2026, full text via Europe PMC (the circumflex supplies the lateral wall, and the ECG detects acute circumflex occlusion in only a third to a half of cases).
  - Lin and colleagues, J Med Cases 2024, full text via Europe PMC (options for urgent PCI with ASA hypersensitivity, desensitization afterwards, SJS, TEN and DRESS as absolute contraindications, and NSAID pseudoallergy through COX-1).
- Decision search:
  - "desensitiz, ASA allergy, aspirin hypersensitivity": 0 keyed hits, only venom immunotherapy text.
  - "circumflex, obtuse marginal": 0 keyed hits.
  - "lateral STEMI": the closest is ischemic-heart-disease-40 q1 (occlusion of a high lateral branch with a nondiagnostic ECG), a different reason.
  - "ketorolac, NSAID": analgesia keys only.
- Simcheck top 5: ischemic-heart-disease-40 0.25/0.19, ischemic-heart-disease-30 0.21/0.05, ischemic-heart-disease-25 0.20/0.06, chest-pain-02 0.19/0.10 (old signed text), chest-pain-37 0.18/0.08.
- markQuestion probe: keeper and cluster answers give 0 on every write-in question. The closest bank match on any question is 1 item.

### chest-pain-06 (cluster 15, keeper asthma-copd-05)

- Old story: signed text is a tension pneumothorax in COPD. Round 1 was tamponade from pacing lead perforation. It failed as a retelling of shock-15.
- New story: a 66-year-old man has tearing pain at a hockey game and a brief faint. Paramedics found inferior ST elevation, gave ASA and activated the STEMI pathway. He is in shock with a right radial deficit, a diastolic murmur, and on ultrasound a 52 mm root with a flap and an effusion causing RV collapse. Cardiac surgery is on site.
- Keyed decisions:
  - q1 (short, CP 1): the complications of the dissection that explain his shock and ECG. These are hemopericardium with tamponade, right coronary involvement, acute aortic regurgitation, and innominate or subclavian involvement.
  - q2 (single, CP 2): operating room now for aortic repair. The distractors are primary PCI, CT first, esmolol, and pericardiocentesis with complete drainage.
  - q3 (short, CP 2): stop the STEMI plan. Cancel the heparin and ticagrelor, give no fibrinolytic, and stand down the catheterization laboratory.
  - q4 (short, CP 2): while he is hypotensive, no beta blocker, no vasodilator and no diuretic. Accept the lowest pressure that keeps his organs perfused.
- Sources opened: ACC/AHA 2022 aortic guideline, local full text (immediate surgery for type A, central repair corrects coronary malperfusion, AR and tamponade, beta blockers unless contraindicated, lowest pressure that keeps organs perfused). ESC 2015 pericardial guideline, local full text (only controlled drainage of very small amounts in aortic dissection, IIa, and vasodilators and diuretics not recommended in tamponade, III). I also opened the ESC e-journal review by Tsukube and Okita (2017) but did not cite it.
- Decision search:
  - "pericardiocentesis": only shock-15 q3, which here is a distractor.
  - "withhold antithrombotic": cva-09 q4 lists "Withhold thrombolysis and antithrombotics" as 1 of 6 items for a dissection presenting as stroke (see the physician section).
  - "vasodilator, diuretic, no beta blocker": chest-pain-01 q4 and cva-09 q4 key the opposite, a beta blocker first in a patient who is not hypotensive.
  - "tamponade, aortic regurgitation": cva-09 q2 (AR murmur as a feature).
- Simcheck top 5: cva-09 0.23/0.24, ischemic-heart-disease-16 0.22/0.05, chest-pain-01 0.19/0.19, ischemic-heart-disease-11 0.15/0.18, multiple-trauma-02 0.17/0.17.
- markQuestion probe: keeper and cluster answers give 0 on every write-in question. cva-09 now reaches 1 item at most on q1, after I removed the bare dissection item and "pericardial effusion" from the match list.

### chest-pain-09 (cluster 39, keeper ischemic-heart-disease-15)

- Old story: signed text is exertional pain while shovelling snow, chest wall tenderness and a HEART score of 5. Round 1 was a type 2 MI from menorrhagia. Its q2 D1 repeat echoed its own keeper.
- New story: a 54-year-old man with a moderate intellectual disability, brought by his mother, with whom he lives. At lunch he stopped eating, rubbed his chest and lay down. It happened twice. He has diabetes, hypertension and dyslipidemia and smokes. The ECG is normal. He shakes his head when asked about pain.
- Keyed decisions:
  - q1 (short, CP 3): what to ask his mother. The items are how he usually shows pain, changes in activity, sweating, pallor or breathlessness, how long each episode lasted, eating, sleep or mood, and medication changes.
  - q2 (short, CP 5): his head shake does not lower concern. He may not express pain verbally, the change in behaviour is more reliable, and his mother is the better guide.
  - q3 (short, CP 5): it is unsafe to call this his usual behaviour. A new behaviour can be the only sign of pain or illness, coronary disease is among the causes, it is new for him, and attributing it to the disability leads to missed diagnoses.
  - q4 (single, IHD 3): the ESC 0 h/1 h hs-cTnT results are 21 then 24 ng/L, with the cut-offs given in the update. That is the observe zone, so the next step is a third hs-cTnT at 3 hours.
- Sources opened: Green and colleagues, HELP for behaviours that challenge in adults with IDD, Can Fam Physician 2018, Supplement 2, full PDF. ESC 2023 ACS guideline, local full text (observe pathway, a third troponin at 3 h, and observe zone mortality comparable to rule-in). The cut-off values are from the Rev Esp Cardiol 2023 implementation paper, Table 1 (from Reichlin 2012 and ESC Table S4), and are stated in the update.
- Decision search:
  - "overshadow, attributed to disability": 0 hits.
  - "usual pain behaviour, caregiver": analgesia-sedation-03 q1 keys observable pain indicators in dementia, a different decision.
  - "observe zone": ischemic-heart-disease-41 (signed) gives the observe zone after 3 hours and keys ward admission and CCT angiography. This SAMP keys the earlier step (see the physician section).
- Simcheck top 5: delirium-agitation-18 0.07/0.13, abdominal-pain-46 0.08/0.12, chest-pain-27 0.11/0.11, loc-21 0.11/0.00, ischemic-heart-disease-27 0.10/0.03.
- markQuestion probe:
  - Keeper and cluster: q1 1 of 3, q2 0 of 2, q3 1 of 2.
  - Closest bank matches: q1 suicide-risk-07 3 of 3, from words such as "appetite", "medication change" and "vomiting" in an unrelated history list. q2 pre-eclampsia-12 2 of 2, also word collisions. I tightened the q2 phrases after abuse-domestic-14 (another writer's IDD rebuild) matched 2 of 2.

### chest-pain-14 (cluster 41, keeper ischemic-heart-disease-04)

- Old story: signed text is the Wellens pattern. Round 1 was a bicuspid valve dissection. It failed as a retelling of chest-pain-01.
- New story: a 71-year-old woman with AF on warfarin has sudden chest pain at breakfast. She missed doses last week. An angiogram 2 years ago showed normal coronaries. She has an inferior STEMI in AF, and her INR is 1.4.
- Keyed decisions:
  - q1 (short, CP 1): coronary embolism from a left atrial thrombus.
  - q2 (single, CP 5): the normal angiogram fits an embolus into a normal artery. It does not argue against one.
  - q3 (short, CP 5): warfarin does not make embolism unlikely, because her INR of 1.4 is inadequate after missed doses.
  - q4 (short, CP 4, 3 required): other embolic sources. These are a prosthetic valve, rheumatic mitral disease, PFO, endocarditis, cardiomyopathy or LV thrombus, a hypercoagulable state, and myxoma.
- Sources opened: Shibata and colleagues, Circulation 2015, abstract via Europe PMC (coronary embolism in 2.9 percent of 1776 AMIs, AF as the cause in 73 percent, 39 percent on a VKA, median INR 1.42, range 0.95 to 1.80). Chang and colleagues, Eur J Med Res 2025, full text via Europe PMC (NCVC criteria and the causes of coronary embolism).
- Decision search:
  - "coronary embolism": 0 keyed hits.
  - "prosthetic, foramen, myxoma, rheumatic": pulmonary-edema-19 (valve thrombosis) and environmental-31 (bubble echo for PFO), both different decisions.
  - "normal angiogram": ischemic-heart-disease-17 q3 keys that a CT coronary angiogram 4 years earlier "does not exclude a new occlusion". I re-keyed q2 so it states the positive inference, that the normal angiogram supports embolism, rather than repeating "does not exclude" (see the physician section).
- Simcheck top 5: pulmonary-edema-19 0.17/0.11, dvt-pe-41 0.16/0.15, chest-pain-44 0.15/0.09, ischemic-heart-disease-17 0.14/0.11, ischemic-heart-disease-30 0.14/0.00.
- markQuestion probe:
  - Keeper and cluster answers give 0 on every write-in question.
  - Closest bank match: chest-pain-11's old signed q1 list ("Myocarditis or cardiomyopathy", "Endocarditis") gives 2 of 3 on q4. I raised required from 2 to 3 so it cannot give full marks.

### chest-pain-11 (cluster 17, keeper ischemic-heart-disease-06): CANNOT

I left the round 1 text as it is, per the coordinator. I did not restore HEAD or touch the held-back file.

The preserved structure is short questions CP 4, CP 2, CP 2 and CP 4, all write-in. Two early-management (CP 2) questions and two risk factor (CP 4) questions leave no fresh keyed decision for this id outside its keeper and the signed bank:

- The CP 2 decisions for possible ACS collapse onto the ECG and ASA within 10 minutes. That is D1, and D1 is at 19 of 20.
- The CP 2 decisions for PE workup collapse onto CTPA and anticoagulation while waiting (chest-pain-04, sob-12, and another writer's sob-10). The cocaine route is the keeper's own story.
- Every risk factor set I checked is keyed or taken: preeclampsia, lupus and RA (chest-pain-14 signed q4, chest-pain-28), HIV, FH, anabolic steroids, radiation, type 1 diabetes, South Asian ancestry, estrogen and flight, IBD (sob-10 in progress), testosterone and APS.
- The open ones I found (JAK inhibitors, IMiDs such as lenalidomide, lipoprotein(a), polycythemia vera) could carry one CP 4 question. They could not carry two CP 4 and two CP 2 decisions without a repeat.

## Convergence with other writers

- pulmonary-edema-02 (in progress in `src/samps/s15/pulmonary-edema.ts`) now keys "Primary PCI with bivalirudin" for an anterior STEMI after HIT. I had drafted a remote-HIT and bivalirudin story for chest-pain-02 and dropped it when I found this. The final chest-pain-02 (warfarin, INR 3.1, no added bolus) does not use bivalirudin, HIT, transfer or metoprolol.
- None of my stories uses "community hospital 40 minutes from PCI, transfer for primary PCI". The only reperfusion strategy keyed is primary PCI on site in chest-pain-03 q3, where the decision is to do it before ASA desensitization.
- A re-grep of `src/samps` just before finishing found no other in-progress text with a mechanical-valve STEMI, hemopericardium from dissection, coronary embolism, an ASA hypersensitivity STEMI or an IDD chest pain story.

## For the physician

1. chest-pain-02 q3 keys giving no UFH bolus for primary PCI when the INR is 3.1 on warfarin. This rests on the ESC 2023 class I recommendation that a UFH bolus is given during PCI "if the INR is below 2.5 in VKA-treated patients". Please confirm this matches Canadian cath lab practice. Some labs give a reduced ACT-guided bolus.
2. chest-pain-02 q4 keys the CCS 2019 goal of 90 minutes from first medical contact to device for patients presenting to a PCI centre. It is a number to recall. Please judge whether it is worth a question.
3. chest-pain-03 q3 keys "Primary PCI now, ASA desensitization after". The support is a 2024 case-based review in J Med Cases, which says that no urgent-PCI strategy for ASA hypersensitivity is formally validated. The ESC and CCS say nothing specific. I could not open the 2024 EHJ practical guide (Grimaldi) beyond its abstract. "Primary PCI now" appears in the key, but the decision tested is sequencing it before desensitization, not choosing PCI over fibrinolysis. Please confirm you do not count it as a D1 repeat of chest-pain-15 q2.
4. chest-pain-06 q3 overlaps one item of cva-09 q4 ("Withhold thrombolysis and antithrombotics" in a dissection presenting as stroke). Here the whole question is standing down a STEMI pathway, which the paramedics activated for a dissection involving the right coronary artery. Please decide whether that is distinct enough.
5. chest-pain-06 q2 makes "pericardiocentesis with complete drainage" a distractor. ESC 2015 allows controlled drainage of very small amounts to hold a systolic pressure near 90 mmHg as a bridge, so the option says "complete drainage" on purpose.
6. chest-pain-09 shares its premise with abdominal-pain-46 (signed), which is also a patient who cannot report pain and whose ACS is found through a caregiver. To keep them apart, the caregiver here is his mother, not group home staff. The keyed decisions are also different: the unreliable denial, diagnostic overshadowing and the ESC observe zone. q4 sits one step before ischemic-heart-disease-41, which starts after the 3 hour troponin. Please decide whether the pair is acceptable.
7. chest-pain-14 q2 is close in shape to ischemic-heart-disease-17 q3, where an old normal coronary test does not exclude a new occlusion. I keyed the embolism-specific inference instead (a normal angiogram fits an embolus), but the teaching is related.
8. chest-pain-11 is a "cannot" and needs your decision or a new direction. It still holds its round 1 text, and the coordinator will restore it.

## Commands

No command was blocked. I restored nothing, and I did not edit a held-back file or any file outside chest-pain.ts, apart from this report and scratch files.
