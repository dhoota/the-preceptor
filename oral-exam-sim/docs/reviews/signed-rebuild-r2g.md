# Signed-duplicate rebuild, round 2, group r2g

Writer label r2g. Files: src/samps/s04/asthma-copd.ts and src/samps/s04/burns.ts. Nothing was committed.

## Outcome

| Id | Result |
|---|---|
| asthma-copd-01 | Rebuilt. New story, four new keyed decisions, version 2, `reviewed: false`. |
| asthma-copd-04 | Rebuilt. New story, four new keyed decisions, version 2, `reviewed: false`. One proximity to signed loc-33 is flagged below. |
| asthma-copd-11 | Cannot. Left as the failed round 1 text for the coordinator to restore. |
| asthma-copd-13 | Cannot. Left as the failed round 1 text for the coordinator to restore. |
| burns-01 | Cannot. Left as the failed round 1 text for the coordinator to restore. |
| burns-06 | Cannot. Left as the failed round 1 text for the coordinator to restore. |

No question in the two rebuilds needs a D1 repeat.

## Rebuilt SAMPs

### asthma-copd-01 (cluster 5, keeper asthma-copd-09)

- **Old story (signed HEAD):** a 26-year-old woman with asthma after a cold. GINA fatal-asthma history, first 20 minute orders, peak flow as the objective measure, then magnesium and continuous salbutamol.
- **Round 1 story (failed g07):** a 34-year-old man with thunderstorm asthma. The GINA list and the first-hour orders came back, and it converged with sob-04.
- **New story:** a 71-year-old woman with severe COPD (FEV1 34%) and a flare after a cold. She has narrow angles that are awaiting laser treatment, and prednisone gave her a psychosis during her last flare. It has no asthma, no GINA list, no first-hour orders, no intubation, and no 34-year-old 80 kg man.
- **Keyed decisions:**
  - q1 (short, KF2): history that marks a risk of hypercapnic failure with oxygen. Hypercapnia on earlier gases, earlier NIV or intubation, an oxygen alert card or record alert, chest wall or neuromuscular disease, bronchiectasis or cystic fibrosis, and sedating drugs. Required 3.
  - q2 (short, KF5): changing bronchodilator delivery for narrow angles. A mouthpiece instead of a face mask, an MDI with spacer, goggles, watching for angle closure symptoms, or salbutamol alone. Required 3. Withholding all bronchodilators is unacceptable.
  - q3 (single, KF3): the GOLD 2026 grade for patients in hospital is "Respiratory failure", not ventilatory failure. The numbers were rechecked: RR 28 is above 24, HR 104 is above 95, she is on a 40% Venturi (above 35% and not above 40%), PaCO2 57 is in the 50 to 60 band, pH 7.32 is above 7.25, and she is alert. HCO3 is 0.03 x 57 x 10^(7.32 - 6.1), about 28 mmol/L.
  - q4 (short, KF5): steroid choice after a past steroid psychosis. Nebulized budesonide as an alternative, a blood eosinophil count, a shared decision, psychiatric watch, or prednisone 40 mg for 5 days if a systemic course is used. Required 2.
- **Sources opened:**
  - GOLD 2026 report. The local text was read at the exacerbation chapter: air-driven nebulizers, glucocorticoid dose, nebulized budesonide, the eosinophil and STARR2 text, and the hospital classification into no respiratory failure, respiratory failure and ventilatory failure. https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf
  - BTS 2017 oxygen guideline (O'Driscoll et al, Thorax). The UCL full text was read at recommendation G2, section 8.12 (the list of patients at risk outside COPD) and the passage on previous NIV and alert cards. https://doi.org/10.1136/thoraxjnl-2016-209729
  - Health Canada DPD product monograph, pms-Ipratropium nebulizer solution (revised 2017). Read at the narrow-angle glaucoma warning, the goggles or mouthpiece advice and the symptoms to watch for. https://pdf.hres.ca/dpd_pm/00039268.PDF
  - Canadian sources: CTS has no current guideline on acute COPD or oxygen, so GOLD and BTS are used. The monograph is Canadian.
- **Decision search (allkeys.tsv and src/samps):**
  - hypercap, alert card, oxygen alert, previous gas, kyphoscoliosis: no key on hypercapnia-risk history. The closest hits are airway-35 and analgesia-sedation-07, which list "COPD on home oxygen" as an airway or sedation risk, a different decision. Also ac-02 and ac-08, which key an 88 to 92% target, not the history.
  - glaucoma, mouthpiece, goggle, narrow angle: no key. The closest is ac-29 ("timolol drops", which cause wheeze) and eye SAMPs on laser iridotomy.
  - GOLD grading: ac-33 keys the Rome grade "Moderate exacerbation". Rebuilt sob-05 (another writer, working tree) keys GOLD severe grading by gas. No key is "Respiratory failure" in the hospital classification.
  - eosinophil, nebulized budesonide: no key as a steroid alternative. In other questions nebulized budesonide is a wrong option: sob-02 (croup), sob-05 (as a bronchodilator) and asthma items in s25.
  - Air-driven nebulizer was dropped from the draft because rebuilt sob-05 q1 keys it.
- **Simcheck top 5 (full / keys):** sob-04 0.21/0.16, asthma-copd-33 0.19/0.14, sob-05 0.19/0.16, asthma-copd-19 0.18/0.04, asthma-copd-36 0.18/0.11. All cards were read. None tells this story or keys these decisions. The digest predates the current sob-04 and sob-05 rebuilds, so both were read in the working tree. sob-04 is now a 34-year-old man who used crack cocaine. sob-05 is a drowsy COPD patient on hydromorphone.
- **markQuestion probe:** answers from the keeper and the cluster were fed as lines, with all lines counted.

| Answer set | q1 | q2 | q4 |
|---|---|---|---|
| Signed HEAD asthma-copd-01 GINA list | 0/3 | 0/3 | 0/2 |
| Keeper asthma-copd-09 q1 findings | 0/3 | 0/3 | 0/2 |
| HEAD first 20 minute orders | 0/3 | 1/3, "MDI with spacer" in the salbutamol line | 0/2 |
| HEAD q4 escalation | 1/3, BiPAP | 0/3 | 0/2 |

  - q3 with "Ventilatory failure", the keeper-style choice, scores 0/1.
  - Natural answers score full. Examples: "Has she needed BiPAP or been intubated", "previous gases showing CO2 retention", "oxygen alert card". "MDI with spacer", "mouthpiece, avoid a face mask", "goggles", "watch for eye pain or halos". "Nebulized budesonide instead of prednisone", "check an eosinophil count".

### asthma-copd-04 (cluster 14, keeper pulmonary-edema-03)

- **Old story (signed HEAD):** a 74-year-old woman with wheeze at 03:00 from heart failure. Wheeze differential, heart failure workup, NTG, NIV and furosemide, and precipitants.
- **Round 1 story (failed g07):** a pregnant immigrant with rheumatic mitral stenosis and AF. It was too close to pulmonary-edema-18.
- **New story:** a 20-year-old woman with anorexia nervosa. Seven days into a home meal plan she has new wheeze, orthopnea, edema and a 3.6 kg weight gain, and salbutamol has not helped. The cause is refeeding syndrome with fluid overload.
- **Keyed decisions:**
  - q1 (short, KF1, required 1): the underlying cause is refeeding syndrome. "First asthma attack" is unacceptable.
  - q2 (short, pulmonary edema KF5, required 2): the chest X-ray reported as "atypical pneumonia" shows interstitial pulmonary edema with effusions. A normal heart size does not exclude heart failure after starvation.
  - q3 (short, pulmonary edema KF1, required 3): reduce energy intake, restrict sodium and water, thiamine, a loop diuretic and cardiac monitoring. A saline or crystalloid bolus is dangerous.
  - q4 (short, pulmonary edema KF2, required 3): phosphate, magnesium, potassium, glucose, calcium, and creatinine and urea.
  - Numbers: BMI 39.0 / 1.62^2 = 14.9. Gain 42.6 - 39.0 = 3.6 kg. Fluid of 20 to 25 mL/kg x 42.6 kg is 852 to 1065 mL.
- **Sources opened:**
  - Ponzo V et al. The refeeding syndrome. Intern Emerg Med 2021. Full text PMC7843537 was read. It covers insulin antinatriuresis with fluid overload and heart failure, reduced contractility from low phosphate, reducing energy and fluid when symptoms are overt, sodium below 1 mmol/kg, fluid of 20 to 25 mL/kg, thiamine 200 to 300 mg, the laboratory panel, and anorexia nervosa as a leading cause. https://doi.org/10.1007/s11739-020-02525-7
  - Friars D et al. J Eat Disord 2023. Full text PMC9886215 was read. It covers reduced LV mass, heart failure during refeeding treated with nutritional restoration and usual medical therapy, and pericardial effusion. https://doi.org/10.1186/s40337-022-00724-5
  - No Canadian emergency guideline on refeeding heart failure was found. The ASPEN 2020 consensus is paywalled and was not opened.
- **Decision search:**
  - refeed: no key. **loc-33 (signed)** is the closest story, a woman with anorexia who collapses 3 days into refeeding. It keys IV dextrose for hypoglycemia, "Hypophosphatemia" as the complication to expect, "Replace phosphate and electrolytes" and the food intake history. My q4 (order phosphate, magnesium and potassium) sits next to loc-33 q2 and q3. See "For the physician".
  - heart failure as a mimic of asthma: pulmonary-edema-03, 09, 25 and 29 and HEAD asthma-copd-04 key HF features, BNP and ultrasound tests, and NTG, NIV and furosemide. None of these is keyed here except furosemide, which is one of five items in q3.
  - thiamine is keyed for Wernicke and alcohol (delirium-agitation-04, loc-13) and for beriberi in s50 shock, each for a different reason.
  - "cardiomegaly", "heart size", "Kerley": no key.
- **Simcheck top 5 (full / keys):** sob-41 0.21/0.03, loc-33 0.17/0.09, pulmonary-edema-28 0.17/0.01, sob-31 0.17/0.06, pulmonary-edema-29 0.14/0.08. All cards were read.
- **markQuestion probe:** all lines counted.

| Answer set | q1 | q2 | q3 | q4 |
|---|---|---|---|---|
| Keeper pulmonary-edema-03 answers | 0/1 | 0/2 | 1/3, furosemide | 0/3 |
| HEAD asthma-copd-04 answers | 0/1 | 1/2 | 1/3 | 1/3 |
| pulmonary-edema-01 answers | 0/1 | 0/2 | 2/3, furosemide and monitoring | 2/3, electrolytes and glucose |

  - Natural answers score full. Examples: "Refeeding syndrome causing heart failure". "Pulmonary edema, not pneumonia" and "effusions from fluid overload". "Slow the refeeding", "fluid restriction, no fluid bolus", "thiamine". "Phosphate, magnesium, potassium".
  - "Normal saline bolus 1 L" is caught as dangerous.

## Ids I could not rebuild without a repeat

Each of these was searched against allkeys.tsv, src/samps and the round 2 packets. Every idea I tried is already keyed for the same reason, or converges with another writer.

- **asthma-copd-11** (asthma KF4, DVT-PE KF5 single, DVT-PE KF6).
  - KF5 contexts are all keyed. CT over VQ in lung disease is the keeper dvt-pe-06. Leg ultrasound first is keyed in dvt-pe-05, 07, 16, 18 and others. VQ is keyed in dvt-pe-05, 07 and 20. Arm duplex and CT venography are keyed, bedside echo when unstable is dvt-pe-08, and subsegmental PE with leg ultrasound is in s51 sob.
  - KF6 choices are all keyed. Pregnancy, breastfeeding (chest-pain-04), renal disease and UFH, early after bariatric surgery (s33), Child-Pugh C (dvt-pe-44), HIT, APS, mechanical valve, cancer, thrombocytopenia and drug interactions (dvt-pe-09).
  - KF4 lists for a second problem are the keeper and sob-06.
- **asthma-copd-13** (asthma KF1 single, anaphylaxis KF3 twice, asthma KF1).
  - Anaphylaxis KF3 is exhausted. Every epinephrine dose and route is keyed, including IV boluses, the infusion, the autoinjector and the obese-thigh case. So are fluids by adult and weight-based volume, positioning (including pregnancy), the airway (awake, cric, intubate early, nebulized epinephrine in sob-15), glucagon, removing the trigger, the resuscitation team, and peripheral vasopressor start (infectious-diseases-01). IV or IO access is keyed in pediatric-fever-03 and gi-bleed-09.
  - Keying "anaphylaxis" as the q1 diagnosis would repeat the signed HEAD key.
  - Tryptase and scombroid-type mimics are unkeyed and could fill q1 and q4, but not the two KF3 questions.
- **burns-01** (burns KF2 three times, burns KF3).
  - KF2 decisions are all keyed. Signs, intubate now, observe with serial checks (burns-37), nasolaryngoscopy (burns-38), tube size, succinylcholine timing, confirmation, ties, intubating before a flight, smaller pediatric airways, RSI with rocuronium, COHb interpretation, and awake flexible intubation (anaphylaxis-05).
  - KF3 is keyed as IV opioids, IN fentanyl, ketamine and infusions many times. The buprenorphine angle is analgesia-sedation-10.
- **burns-06** (burns KF1, environmental KF5, burns KF4 single, MSK KF7).
  - Electrical injury complications and monitoring are the keeper environmental-13, plus environmental-14 and 15 (arc and oral commissure) and burns-18 and 22.
  - The urine output target and fasciotomy are keyed. Escharotomy is burns-23. Open fracture care is msk-11.
  - Lightning and TASER are unkeyed, but they do not carry a burn fluid question or an MSK KF7 question honestly.

These four still hold their round 1 text (version 2, `reviewed: false`), which failed g07. They are still listed in src/samps/held-back/r2g.json. The coordinator has said they will restore them.

## Process notes for the coordinator

1. **Blocked command.** After your first message I tried to drop the four "cannot" ids from src/samps/held-back/r2g.json. The permission system denied it, and I did not retry. The command was a Python edit of `src/samps/held-back/r2g.json`, keeping only asthma-copd-01 and asthma-copd-04 in `ids`. It was chained with `npx tsc` and the s04 tests. When you restore the four signed blocks from HEAD, remove those four ids from r2g.json. If you don't, the test "is marked reviewed only if a physician signed it off" fails for each of them.
2. **Temporary HEAD restore, since reversed.** Following your first message, I briefly overwrote src/samps/s04/burns.ts with its HEAD version and rebuilt asthma-copd.ts from HEAD. Beforehand I checked that `git diff HEAD` on both files touched only my six ids and their source constants. After your correction I put both files back from copies I took before any edit (scratchpad/r2g/burns_r1_backup.ts and ac_r1_backup.ts). burns.ts is now byte-identical to its state before my task. In asthma-copd.ts, asthma-copd-11 and 13 match the pre-task text exactly (checked with diff). Only asthma-copd-01, asthma-copd-04 and five new Source constants changed: GOLD_2026, BTS_OXYGEN, IPRATROPIUM_PM, PONZO_RFS and FRIARS_ED. The round 1 constants are kept.

## Checks

- `SAMP_BATCH=s04 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 481/481 passed, with the four round 1 ids still held back as now.
- `npx tsc --noEmit -p .`: clean.
- House style: no em or en dashes and no semicolons in the new prose.

## For the physician

1. **asthma-copd-01 q2.** This is keyed from the Health Canada ipratropium nebulizer monograph (narrow angles: a mouthpiece or goggles, and watch for angle closure symptoms). Please confirm this is how you would give ipratropium to a patient awaiting laser iridotomy. Salbutamol alone is also accepted.
2. **asthma-copd-01 q3.** This uses the GOLD 2026 grading for patients in hospital ("respiratory failure" versus "ventilatory failure"). That scheme is less familiar in Canadian EDs than the Rome grades. Rebuilt sob-05 keys GOLD grading by gas in a different scheme and for a different answer.
3. **asthma-copd-01 q4.** GOLD calls nebulized budesonide a suitable alternative for some patients. It says eosinophil-guided steroid use is shown only in primary care. Please confirm you accept both as reasonable after a documented steroid psychosis. Elsewhere in the bank, nebulized budesonide is a wrong option for asthma, croup and as a bronchodilator.
4. **asthma-copd-04 versus loc-33.** Both are young women with anorexia nervosa early in refeeding. loc-33 keys hypoglycemia, anticipating low phosphate and replacing it. asthma-copd-04 keys refeeding as a mimic of asthma, edema on the X-ray, fluid-overload management and the laboratory panel. q4 is the closest point. Please rule on whether q4 is too near loc-33 q2 and q3.
5. **asthma-copd-04 q3.** The loop diuretic is accepted from general heart failure care and the Friars statement that heart failure during refeeding responded to "usual medical therapy". Neither source gives a dose, so none is keyed.
