# Review of batch s05, Management of Care

Reviewer: adversarial review under docs/REVIEW_BRIEF.md, Lens A and Lens B. Scope: all files in src/bank/s05, including extra.ts (rn-s05-91 and rn-s05-92), which index.ts does not import.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s05-03 | option 3 why | The why rejected "a trend that shows steady decline" because the points "sit above the median". Sitting above the median does not rule out a trend. It now cites the rule of 5 points that all rise or fall and says no decline is described | A | medium |
| rn-s05-06 | key why, rationale | The key why claimed the message gives a name. The rationale claimed it gives a call back number. The keyed message has neither. Both now describe a role and a request to call back, which HHS FAQ 198 supports | B | high |
| rn-s05-07 | stem | A why said the tacrolimus dose was due "later in the morning", but the stem gave no clock time. Added "At 0730" to the stem | B | low |
| rn-s05-19 | refs | The reference paired 2 kg with 5 lb. 2 kg is 4.4 lb, so the pair does not convert. The 1 kg in a day figure also differed from the usual teaching. Now 0.9 kg (2 lb) in a day or 2.3 kg (5 lb) in a week. The key and the whys still hold because 0.5 kg is below both | B | high |
| rn-s05-22 | rationale | Check-back was said to repeat the drug, dose, route and "time". The prescription gives a rate over 10 minutes. Changed to rate | B | low |
| rn-s05-37 | option 7 text | The option said only that a nurse opened a chart on another unit. The why and rationale relied on "without an assignment", which the option never gave. A float, consult or transfer could be a job need, so the distractor was defensible. The option now states there is no assignment | B | high |
| rn-s05-39 | condition 1 why | The why said the heart rate and breathing rate were both low. A heart rate of 64/minute is normal. It now says breathing is slow and the heart rate is 64/minute | A | high |
| rn-s05-50 | key text, rationale, refs | A BP of 88/54 mmHg gives a mean arterial pressure of 65.3 mmHg. That meets the Surviving Sepsis target of 65 mmHg, so it did not show the refractory hypotension that the rationale used to call septic shock and require vasopressors. The BP is now 84/50 mmHg (mean 61.3 mmHg), with the 65 mmHg target added to refs | B | high |
| rn-s05-50 | option 1 why | The why called breathing "labored". The stem gives only a rate of 24/minute and SpO2 92%. The why now says the rate is up | B | medium |
| rn-s05-91 (extra) | option 2 why | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". This is false. The resin works in the gut over hours. It is rejected because it does not protect the heart now | A | high |
| rn-s05-91 (extra) | need | Tagged MOC. A hyperkalemia drug priority item tests Pharmacological and Parenteral Therapies. Changed to PPT | A | medium |
| rn-s05-92 (extra) | key, rationale, refs, sources, need | The key was protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. The keyed option is now calcium gluconate, the rationale is rewritten, refs added, Lowdermilk added as a source, and need changed from MOC to PPT | A | high |

## Key changes

- rn-s05-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate" keyed, with a why saying it reverses magnesium. After: option 1 "Calcium gluconate" keyed at the same position. Reason: calcium gluconate 1 g IV is the standard antidote for magnesium sulfate toxicity. Protamine reverses heparin. The item as written taught a false and dangerous antidote. Arjan must approve.

No key in the 50 bank items changed.

## Items checked with no defect found

rn-s05-01, 02, 04, 05, 08 to 18, 20, 21, 23 to 36, 38, 40 to 49. Priority keys follow airway, breathing and circulation, then acute over chronic and unstable over stable (01, 05, 07, 15, 19, 23, 34, 41, 50). Quality improvement items follow the IHI Model for Improvement and the RCA2 action hierarchy. Privacy items follow the HIPAA Privacy Rule sections cited.

## Numbers recomputed by script

- 38.3°C is 100.9°F. Glucose 58, 310 and 380 mg/dL are 3.2, 17.2 and 21.1 mmol/L.
- Pareto counts 54 + 30 + 20 + 16 = 120. Late doses are 45 percent.
- Morse score 25 + 15 (walker) + 15 (forgets limitations) = 55, above the stated band of 45.
- Mean arterial pressure: 88/54 is 65.3, 84/50 is 61.3, 88/50 (item 13) is 62.7.
- Run chart: 7 consecutive points meets the 6 point shift rule.
- Trend tables in items 17 and 40 move in the direction each row claims every period.

## Sources verified

- Perla, Provost, Murray 2011, BMJ Qual Saf 20(1):46. PubMed 21228075. Rule 1 shift of 6 or more points and Rule 2 trend of 5 or more points confirmed in the full text. https://pubmed.ncbi.nlm.nih.gov/21228075/
- Evans et al. 2021, Crit Care Med 49(11):e1063. PubMed 34605781. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Jones, DeVita, Bellomo 2011, N Engl J Med 365(2):139. PubMed 21751906. https://www.nejm.org/doi/full/10.1056/NEJMra0910926
- Lovenox prescribing information 2021, Table 1 in section 2.3: treatment dose 1 mg/kg once daily when creatinine clearance is below 30 mL/min. https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf
- HHS HIPAA FAQ 198 on leaving messages: limit the message to the name and number or ask for a call back. https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html
- HHS de-identification guidance: initials and other parts of names fail Safe Harbor. https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html
- 45 CFR 164.510. https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510
- AACN Practice Alert, Managing Alarms in Acute Care, 2018: daily electrode change with skin prep, customized limits, monitoring only with a clinical indication. https://www.aacn.org/clinical-resources/practice-alerts/managing-alarms-in-acute-care-across-the-life-span
- RCA2 action hierarchy: double checks, warnings, training and new policy are weaker actions. Standardization and simplification are stronger. https://www.ihi.org/library/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm
- Morse Fall Scale item weights (walker 15, forgets limitations 15). https://www.springerpub.com/preventing-patient-falls-9780826103895.html
- American Association of Heart Failure Nurses, daily weights: 2 lb in a day or 5 lb in a week. https://www.aahfn.org/mpage/dailyweights
- SOGC Guideline No. 426, 2022. PubMed 35577426. https://pubmed.ncbi.nlm.nih.gov/35577426/
- URLs that returned 200: ISMP smart pumps, IHI measures, IHI toolkit, IHI SBAR, ANA documentation principles, ANA code, both ONC SAFER guides, PSNet alert fatigue, Lowdermilk at Elsevier, TeamSTEPPS pocket guide. CDC and NHSN PDFs and several hhs.gov pages block automated fetches (403). Their titles and years were matched by search.

## Needs Arjan's decision

- The rn-s05-92 key change above.
- rn-s05-92 cites SOGC Guideline No. 426. I could not open the full text to confirm that it names calcium gluconate, so Lowdermilk was added as the source for the antidote. Arjan may want to drop the SOGC citation or confirm it.
- rn-s05-13: the keyed CUS statement uses concerned and safety issue but omits uncomfortable, while the rationale lists all three. It is still the best choice. Left as written.
- rn-s05-41: the why calls a heart rate of 104/minute in new atrial fibrillation "controlled enough". That is defensible against the lenient rate target of under 110/minute. Left as written.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 12 fixes across 10 items, with 1 key change in an extra item and none in the bank. 8 bank items and both extra items had defects. The batch test passes: BATCH=s05 npx vitest run tests/bank.test.ts gives 61 of 61, tsc shows no s05 errors, and both extra items pass every item gate.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
