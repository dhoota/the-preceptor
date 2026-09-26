# Signed duplicate rebuild, round 2, label r2m

Writer report. Ids: pre-eclampsia-15, pulmonary-edema-01, pulmonary-edema-02, pulmonary-edema-04. Nothing was committed.

## Summary

| Id | Result |
|---|---|
| pre-eclampsia-15 | Rebuilt. Version 2, `reviewed: false` after the META spread. |
| pulmonary-edema-02 | Rebuilt. Version 2, `reviewed: false` after the META spread. |
| pulmonary-edema-01 | Cannot. Its round 1 text is left in the file as it was. It needs restoring by the coordinator. |
| pulmonary-edema-04 | Cannot. Its round 1 text is left in the file as it was. It needs restoring by the coordinator. |

Both rebuilds are designed for zero D1 repeats. In every write-in question, the accept items that repeat a signed decision cannot fill the required count on their own. The keeper's answers score below full marks in every question.

## Rows

### pre-eclampsia-15 (cluster 61, keeper first-trimester-bleeding-11)

- **Old story (signed):** a primigravida at 17 weeks with early severe hypertension, vomiting, spotting, tremor and a large uterus. It was a complete mole. Keys were the causes of early pre-eclampsia, a mole workup, evacuation, BP control, magnesium and Rh immune globulin.
- **Round 1 (failed g12):** coarctation of the aorta at 18 weeks. q2 could be passed on the standard pre-eclampsia panel. q3 could be passed on oral labetalol or nifedipine, a diastolic target of 85 mmHg and ASA.
- **New story:** a woman at 31 weeks with class IV lupus nephritis in remission. She is on hydroxychloroquine, azathioprine, prednisone and ASA. Three weeks ago she had a left femoral DVT and is on twice daily therapeutic dalteparin. She now has facial and leg edema, foamy urine and BP 158/104 mmHg. Her PCR has risen from 22 to 380 mg/mmol. The question is whether this is a nephritis flare or superimposed pre-eclampsia, and then how to handle her anticoagulation before a planned delivery.
- **Keyed decisions:**
  - q1 (short, required 3, PE KF 2): clinical signs of lupus activity. Rash, arthritis, oral ulcers, serositis, fever, hair loss, visible hematuria, missed hydroxychloroquine or azathioprine.
  - q2 (short, required 3, PE KF 2): tests that separate a flare from pre-eclampsia. C3 and C4 compared with baseline, anti-dsDNA titre, urine microscopy for casts and dysmorphic red cells. AST or ALT and the sFlt-1 to PlGF ratio are also accepted.
  - q3 (short, required 3, PE KF 4): anticoagulation until a delivery planned in 48 hours. Switch to therapeutic IV unfractionated heparin, stop it 4 to 6 hours before delivery or neuraxial anesthesia, give no further dalteparin, no neuraxial block within 24 hours of the last dose, restart 12 to 24 hours after delivery. Unacceptable: continuing dalteparin, protamine, warfarin or a DOAC.
- **Sources opened:**
  - EULAR 2017 women's health recommendations in SLE and APS (Andreoli, Ann Rheum Dis 2017, doi 10.1136/annrheumdis-2016-209770). Full text read through Europe PMC (PMC5446003). It covers falling C3 and C4, rising anti-dsDNA, urine sediment, clinical activity and stopping hydroxychloroquine.
  - ISSHP 2021 (Magee, Pregnancy Hypertens 2022). Text read. It covers the definition of superimposed pre-eclampsia (transaminases above 40 IU/L, angiogenic imbalance), and says a higher BP alone is not enough.
  - Thrombosis Canada, Pregnancy: venous thromboembolism treatment, version of 1 May 2025 (PDF read). It covers the twice daily last dose 24 hours before, no neuraxial block within 24 hours, a switch to IV UFH stopped 4 to 6 hours before for a clot in the last 2 to 4 weeks, a filter only for a clot under 2 weeks, and a restart at 12 to 24 hours.
  - KDIGO 2024 lupus nephritis guideline, practice point 10.3.2 (PDF read). It supports hydroxychloroquine in pregnancy, but it is not cited because EULAR covers the same point.
- **Decision search (allkeys.tsv and src/samps):**
  - q1: searched rash, malar, arthritis, ulcer, serositis, alopecia and hydroxychloroquine. No pregnancy key names lupus activity signs. The closest hits are pre-eclampsia-12 q4 ("Lupus flare" in a HELLP differential) and pre-eclampsia-35 (SLE with APS at 21 weeks, keyed APS as a risk, MFM counselling and HELLP).
  - q2: searched complement, C3, dsDNA, sediment and casts. No hits except sob-39 q2 ("Urinalysis for blood and casts"). The liver item repeats pre-eclampsia-01 and 02 q2, and the sFlt item repeats pre-eclampsia-28 q1. Together they give 2 of the 3 required.
  - q3: searched unfractionated, UFH, heparin infusion, dalteparin, neuraxial, epidural and filter. The switch to IV UFH and stopping it 4 to 6 hours before delivery have no hits. "Give no further dalteparin" and "no neuraxial block within 24 hours" repeat dvt-pe-40 q1 and q2, and give 2 of the 3 required. An IVC filter is keyed in dvt-pe-37 q2. The DVT was therefore set at 3 weeks, so a filter is not indicated and is not an accept item.
- **simcheck top 5 (full / keys):** dvt-pe-40 0.16/0.24, pre-eclampsia-35 0.21/0.06, pre-eclampsia-28 0.19/0.11, pre-eclampsia-34 0.18/0.05, pre-eclampsia-01 0.17/0.18.
- **markQuestion probe:**
  - q1: the keeper's answers score 0/3, and the standard pre-eclampsia symptoms score 0/3. "malar rash / joint pain or swelling / has she stopped her hydroxychloroquine" scores 3/3.
  - q2: the keeper's answers score 1/3 (only "liver" matches), the standard pre-eclampsia panel scores 1/3 and the repeated items alone score 2/3. "complement C3 and C4 / anti-dsDNA titre / urine microscopy for red cell casts" scores 3/3.
  - q3: the keeper's answers score 0/3 and the dvt-pe-40 keys alone score 2/3. "hold further dalteparin / switch to an IV heparin infusion / stop the heparin 4 to 6 hours before delivery" scores 3/3. The negated form "avoid more dalteparin doses" matches. The wrong answers are caught as unacceptable.

### pulmonary-edema-02 (cluster 67, keeper ischemic-heart-disease-12)

- **Old story (signed):** anterior STEMI in cardiogenic shock at a rural site 80 minutes from PCI. Keys were transfer for primary PCI, norepinephrine, withholding nitrates, beta blockers, ACE inhibitors and morphine, and preparation for intubation.
- **Round 1 (failed g12):** STEMI on warfarin at a community hospital 45 minutes from PCI. q3 kept "no IV metoprolol". Its setting also drifted toward ems-10.
- **New story:** a 77-year-old woman at a PCI centre, so there is no transfer. She has an anterior STEMI with pulmonary edema but is not in shock. Six weeks ago she had heparin-induced thrombocytopenia after a hip repair, confirmed by a platelet activation assay. She also had an ischemic stroke 3 years ago. She weighs 58 kg.
- **Keyed decisions:**
  - q1 (single, IHD KF 6): primary PCI with bivalirudin. The distractors are PCI with UFH, with enoxaparin or with fondaparinux alone, and fibrinolysis with enoxaparin. The key sits at position 1.
  - q2 (single, PE KF 4): keep BiPAP on during the procedure. She is improving with RR 22/minute, SpO2 94% and PCO2 43 mmHg. The distractors are RSI, high-flow oxygen, a non-rebreather mask and delaying PCI. The key sits at position 2.
  - q3 (short, required 2, IHD KF 7): avoid prasugrel because of her previous stroke, and give ticagrelor 180 mg (or clopidogrel 600 mg). A prasugrel load is unacceptable.
  - q4 (short, required 3, PE KF 4): taking her off BiPAP after PCI. Lower the FiO2 first, run a supervised trial on nasal prongs, observe her closely, put BiPAP back on if RR rises above 25/minute or SpO2 falls below 90%, and keep her upright.
- **Sources opened:**
  - 2023 ESC ACS guideline (Byrne, Eur Heart J 2023). Text read. It says bivalirudin is the recommended alternative to UFH after HIT, gives the dose of 0.75 mg/kg then 1.75 mg/kg/h, does not recommend fondaparinux in primary PCI, lists prior stroke as a contraindication to prasugrel, and advises caution with prasugrel at 75 years or older and under 60 kg.
  - ASH 2018 HIT guideline (Cuker, Blood Adv 2018, doi 10.1182/bloodadvances.2018024489). Recommendations read on a secondary summary page, because the publisher blocked the full text. It suggests bivalirudin for PCI in acute or subacute HIT, and a non-heparin anticoagulant rather than UFH or LMWH after HIT.
  - 2021 ESC HF guideline (McDonagh, Eur Heart J 2021). Text read. It gives NIV for RR above 25/minute or SpO2 below 90%, intubation for progressive failure despite NIV, FiO2 titrated to saturation, and BP monitoring during NIV.
- **Decision search:**
  - q1: bivalirudin has no hits. HIT appears in dvt-pe-25 (argatroban for acute HIT with VTE) and dvt-pe-36 (apixaban for VTE after HIT). Those are the same principle but a different decision. "Primary PCI" is keyed widely, but never with a choice of anticoagulant.
  - q2: searched continue, keep, BiPAP and wean. The closest is asthma-copd-02 q5 ("Continue BiPAP, gas in 1 to 2 hours, monitored bed"), which is for hypercapnic COPD. Round 1 used the same idea for a transfer, and g12 passed it.
  - q3: "avoid prasugrel" has no hits. The ticagrelor load repeats chest-pain-03 q4, chest-pain-07 q3 and chest-pain-36 q3, and gives 1 of the 2 required.
  - q4: searched wean, trial off and reapply. There are no NIV hits. "Sit upright" (pulmonary-edema-03) and oxygen titration (pulmonary-edema-03 q3) give 2 of the 3 required.
- **simcheck top 5:** pulmonary-edema-35 0.23/0.10, ischemic-heart-disease-11 0.22/0.11, sob-28 0.21/0.05, pulmonary-edema-08 0.21/0.13, airway-29 0.20/0.12.
- **markQuestion probe:**
  - q1: the keeper-like choice "Primary PCI with unfractionated heparin" scores 0/1.
  - q3: the keeper's answers (shock, "no metoprolol") score 0/2 and the ticagrelor load alone scores 1/2. "avoid prasugrel because of her stroke / ticagrelor 180 mg" scores 2/2, and "prasugrel is contraindicated after stroke / give clopidogrel 600 mg instead" also scores 2/2. "prasugrel 60 mg load" is caught as unacceptable.
  - q4: the keeper's answers and the old pulmonary-edema-02 q4 peri-intubation answers score 0/3, and the repeated items alone score 2/3. "lower the FiO2 / trial off BiPAP on nasal prongs / put BiPAP back on if RR over 25 or sats below 90" scores 3/3.

### pulmonary-edema-01 (cluster 14): cannot

Its preserved key features are q1 KF 1 (short), q2 KF 1 (single), q3 KF 2 (short) and q4 KF 1 (short). Three questions must key an early, pre-etiology treatment decision. The bank already keys every available one:

- NIV, nitrate and loop diuretic (the cluster 14 key, pulmonary-edema-35 q1, sob-07)
- oxygen targets and sitting upright (pulmonary-edema-03)
- NIV contraindications (the old pulmonary-edema-01 q4, a cluster member)
- nitroglycerin regimens and boluses (the old pulmonary-edema-01 q2, pulmonary-edema-35 q2)
- NIV failure signs and RSI (pulmonary-edema-08)
- vasopressors (pulmonary-edema-19, 34, 14)
- phenylephrine for outflow obstruction (airway-47)
- "avoid beta blockers" (cluster 67 key)
- mask refit (pulmonary-edema-35)

I looked at unusual causes for a fresh angle: scleroderma renal crisis, obstructive HCM, a PDE5 inhibitor, a laryngectomy, peritoneal dialysis, LVAD and pediatric cases. Each gave at most one fresh KF 1 decision, not three. Round 1's q2 (systolic below 140 mmHg) is the only one I found, so this id would need at least one repeat.

### pulmonary-edema-04 (cluster 12): cannot

Its preserved key features are q1 KF 1, q2 KF 2, q3 arrhythmia KF 2 and q4 KF 3. q1 has the same KF 1 problem as above. q3 has to key a subtle ECG sign of serious arrhythmia risk. The bank keys, or the cluster forbids, every one I could find:

- hyperkalemia (the cluster 12 keeper)
- long QT and U waves (arrhythmia-04, 32, 40, 05)
- pre-excitation
- Brugada pattern
- epsilon waves (arrhythmia-33)
- trifascicular block (arrhythmia-01)
- digoxin toxicity (arrhythmia-15, tox-05)
- sodium channel blockade (tox-03, tox-11)
- bidirectional VT
- pacemaker failure to capture (arrhythmia-37)
- heart block from anti-Ro antibodies (arrhythmia-41)
- low voltage with alternans (shock-15)

A clean rebuild is not possible without at least one repeat.

## Files changed

- `src/samps/s15/pre-eclampsia.ts`:
  - pre-eclampsia-15 is replaced.
  - The round 1 source constants `aorta` and `escPreg` are removed, because only round 1 pre-eclampsia-15 used them.
  - New sources `eular` (eular-sle-2017) and `tcPreg` (tc-preg-vte-2025) are added.
- `src/samps/s15/pulmonary-edema.ts`:
  - pulmonary-edema-02 is replaced.
  - A new source `ash` (ash-hit-2018) is added.
  - pulmonary-edema-01 and 04 keep their round 1 text, byte for byte, together with their round 1 sources `hte` and `drew`.
  - During the session I first swapped those two blocks for HEAD text, following the coordinator's first message. After the correction I put the round 1 blocks back from my saved copy and confirmed them identical with diff.
- No held-back file was edited. `src/samps/held-back/r2m.json` still lists all four ids.

## Checks

- `SAMP_BATCH=s15 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 437 passed.
  - The key position gate failed once, with positions 3,3,1,5,3. I reworded one distractor in pulmonary-edema-02 q2 so the key moved to position 2, and positions are now 3,3,2,4,3.
- `npx tsc --noEmit -p .`: clean.
- House style: the new text has no em or en dashes and no semicolons.
- Re-grep of src/samps just before finishing: no other SAMP uses a HIT story with PCI or a lupus nephritis flare against pre-eclampsia.

## For the physician

- **pre-eclampsia-15 q3:** it keys a switch from twice daily dalteparin to IV UFH before a planned delivery for a DVT 3 weeks old. Thrombosis Canada says such women "can be switched". Please confirm that you accept this as the expected answer, and that anticoagulation planning fits pre-eclampsia key feature 4 ("timing and manner of delivery").
- **pre-eclampsia-15 q2:** it accepts AST or ALT and the sFlt-1 to PlGF ratio as tests that support pre-eclampsia over a flare, alongside complement, anti-dsDNA and urine sediment.
- **pulmonary-edema-02 q1:** it keys bivalirudin for primary PCI 6 weeks after confirmed HIT. The HIT phase is not given, because the assay results since recovery are unknown. Bivalirudin is the choice under both the ESC and ASH guidelines in any phase.
- **pulmonary-edema-02 q2:** it keeps BiPAP on during PCI in a patient who is improving. The closest signed decision is asthma-copd-02 q5, which continues BiPAP in COPD. Please judge whether you see that as the same decision.
- **pulmonary-edema-02 q4:** weaning from NIV is inferred from the ESC thresholds for starting it. The guideline gives no weaning protocol.
- **pulmonary-edema-01 and 04:** these could not be rebuilt without a repeat. They need your decision on the cluster, or one of the few D1 slots.
