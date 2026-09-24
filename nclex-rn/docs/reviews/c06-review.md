# Batch c06 adversarial review

Scope: every file in `src/bank/c06/`. That is five case studies of six items each (`case1.ts` to `case5.ts`), `helpers.ts`, and `extra.ts`, which `index.ts` does not import. `extra.ts` holds two stand-alone items, rn-c06-8 and rn-c06-9. Both were reviewed under both lenses.

Checks after fixing: `npx tsc --noEmit -p .` prints nothing for `bank/c06`. `BATCH=c06 npx vitest run tests/bank.test.ts` passes 44 of 44. The two extra items were also run through `itemProblems` from `src/engine/quality.ts` with a scratch script outside the repo. Both return no problems.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c06-2-3 | topic | Labelled "unstable angina". A troponin rising from 48 to 890 ng/L with ST depression is a non-ST-elevation MI. Unstable angina has no troponin rise. Now "Ranking problems in a non-ST-elevation MI". | A | high |
| rn-c06-2-3 | rationale | Said the ischemia "can progress to infarction". The rising troponin already shows infarction. Now says the infarct can extend and cause dysrhythmia or heart failure. | A | high |
| rn-c06-3-2 | stem | The rationale says the withdrawal tremor and hallucinations "ended weeks ago". The case never said when they stopped. Added "Both settled within a few days." to the stem. | B | medium |
| rn-c06-3-6 | stem | The item and its rationale grade the response to lactulose, but the case never showed lactulose restarted. He had stopped it at home. Added "Lactulose was restarted on admission." | B | high |
| rn-c06-5-3 (case tab, rn-c06-5) | Standing Orders tab | The standing order said to call emergency services after giving hydrocortisone. rn-c06-5-3 has the nurse call emergency services at 0615, before the dose is drawn up at 0618, and rn-c06-5-4 has the ambulance already on its way. The order now reads "Also call emergency services and the primary health care provider." | B | high |
| rn-c06-4-4 | rationale | "Fluid restriction is the first treatment for this syndrome" is not true for this client under the cited Spasovski 2014 guideline. See Needs Arjan's decision. The sentence now says fluid restriction limits the free water that dilutes her sodium. | A | medium |
| rn-c06-1-6 | option 0 why | Claimed her hearing is intact. The case never assessed hearing. The why now rests on the stated fact that she understands speech. | B | low |
| rn-c06-9 (extra) | rationale | Said "this client has asthma". The stem gives hypertension only. A nonselective beta blocker in asthma would also be a prescription to question, not teach. The sentence now says propranolol is nonselective, so it can cause bronchospasm. | B | high |
| rn-c06-8 (extra) | option 2 | "Elevate the bed head 30 degrees" was the same action as the key "Raise the head of the bed". Two defensible keys, and its own why admitted it. Replaced with "Slow the feeding rate by half", why: a slower rate does not remove the aspiration risk of lying flat. | A | high |

## Key changes

None. Every key stands.

## Numbers recomputed by script

- Tenecteplase: 0.25 x 72 is 18 mg, below the 25 mg cap. 18 / 5 is 3.6 mL. Distractors 1.8 mL (9 mg, half), 5 mL (25 mg) and 18 mL match their whys.
- 3% saline: 150 / 20 x 60 is 450 mL/hour. 150 mL/hour is 60 minutes, 225 mL/hour is 40 minutes, 900 mL/hour is 10 minutes, as the whys say.
- Sodium rise 124 minus 119 is 5 mEq/L. Fall from 138 to 122 is 16 mEq/L over about 48 hours.
- Weights 64.0, 64.2, 64.9 and 65.6 kg rise steadily, 1.6 kg in total.
- Hydrocortisone 100 mg at 100 mg in 2 mL is 2 mL.
- Unit pairs: magnesium 2.0, 1.7 and 2.2 mg/dL give 0.82, 0.70 and 0.91 mmol/L. Creatinine 1.0, 0.7 and 1.3 mg/dL give 88, 62 and 115 micromol/L. Ammonia 118, 15 and 45 mcg/dL give 69, 9 and 26 micromol/L. Bilirubin 3.4 and 1.2 mg/dL give 58 and 21 micromol/L. Glucose 142, 98, 99, 104, 96 and 68 mg/dL give 7.9, 5.4, 5.5, 5.8, 5.3 and 3.8 mmol/L. Temperatures 36.8, 36.9, 37.1, 37.4 and 38.1°C give 98.2, 98.4, 98.8, 99.3 and 100.6°F. All match.
- Clock times agree within each case. Case 1 last known well 0840, CT at 1000, tenecteplase at 1012. Case 4 seizure and sodium at 1015, repeat at 1045. Case 5 report at 0600, vitals at 0610, call at 0615, dose drawn at 0618.

## Sources verified

Journal citations were checked against PubMed E-utilities esummary. Author, journal, volume, issue, first page and year match for all of them.

- Prabhakaran S et al. 2026 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316. https://pubmed.ncbi.nlm.nih.gov/41582814/
- Rao SV et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline. Circulation 151(13):e771. https://pubmed.ncbi.nlm.nih.gov/40014670/
- Vilstrup H et al. Hepatic Encephalopathy 2014 Practice Guideline. Hepatology 60(2):715. https://pubmed.ncbi.nlm.nih.gov/25042402/
- Biggins SW et al. AASLD 2021 ascites, SBP and HRS guidance. Hepatology 74(2):1014. https://pubmed.ncbi.nlm.nih.gov/33942342/
- Spasovski G et al. Hyponatraemia guideline. Eur J Endocrinol 170(3):G1, 2014. https://pubmed.ncbi.nlm.nih.gov/24569125/
- Verbalis JG et al. Hyponatremia expert panel. Am J Med 126(10 Suppl 1):S1, 2013. https://pubmed.ncbi.nlm.nih.gov/24074529/
- Beuschlein F et al. ESE and Endocrine Society glucocorticoid-induced adrenal insufficiency guideline. Eur J Endocrinol 190(5):G25, 2024. https://pubmed.ncbi.nlm.nih.gov/38714321/
- Rushworth RL et al. Adrenal Crisis. N Engl J Med 381(9):852, 2019. https://pubmed.ncbi.nlm.nih.gov/31461595/
- Bornstein SR et al. Primary adrenal insufficiency guideline. JCEM 101(2):364, 2016. https://pubmed.ncbi.nlm.nih.gov/26760044/ (defined in helpers, cited by no item)
- MacCannell T et al. HICPAC norovirus guideline. Infect Control Hosp Epidemiol 32(10):939, 2011. https://pubmed.ncbi.nlm.nih.gov/21931246/
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15, 2017, cited by rn-c06-8. https://pubmed.ncbi.nlm.nih.gov/27815525/
- TNKase (tenecteplase) label, Genentech, DailyMed. Reconstitutes to 5 mg/mL and is given as a single bolus over 5 seconds, which supports rn-c06-1-5. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e647640d-c395-4b4b-a0be-1162f9c21d84
- CDC, How to Prevent Norovirus, January 2025. Soap and water is preferred because hand sanitizer alone does not work well. Chlorine bleach at 1000 to 5000 ppm is the recommended disinfectant. This supports rn-c06-5-4. https://www.cdc.gov/norovirus/prevention/index.html
- ISMP high-alert list 2024, Brunner 15th edition 2022, Potter 11th edition 2023, Halter 9th edition 2022 and Vallerand and Sanoski, Davis's Drug Guide for Nurses 18th edition 2023 are real works already used in the bank.

The WebSearch budget for this session was spent before this review began, and the AHA, EJE and CDC guideline pages returned 403, 404 or 525 to WebFetch. The brief allows PubMed, publisher and agency pages in that case. So the following points rest on the citations above and on earlier c-batch and s-batch reviews, not on a full-text read made during this review: BP below 185/110 mmHg before thrombolysis and at or below 180/105 mmHg for 24 hours after, neuro checks every 15 minutes for 2 hours, no antiplatelet or anticoagulant for 24 hours after thrombolysis, oxygen below SpO2 90% and no non-aspirin NSAIDs in ACS, the 24 hour sildenafil and nitrate interval, protein 1.2 to 1.5 g/kg and a late evening snack, fluid restriction kept for sodium below 125 mEq/L in cirrhosis, and fluid restriction below 800 mL a day in SIADH. None of them looked wrong on review.

## Needs Arjan's decision

- rn-c06-4 (case design, items 3 and 4). Spasovski 2014 counts vomiting as a severe symptom, and confusion and headache as moderately severe symptoms. It gives hypertonic saline for both, and also for an acute fall of more than 10 mmol/L without severe symptoms. At 0745 she has vomited, is slowed and has headache, and her sodium fell 16 mEq/L in about 48 hours. By the case's own source she qualified for 3% saline before the 1015 seizure, not fluid restriction alone. I removed the false "first treatment" claim from rn-c06-4-4 but kept the case flow. Options: accept the case as a teaching simplification, drop the 0630 vomiting and slow the fall, or have the team give the bolus at 0745.
- rn-c06-3-5. When a durable power of attorney for health care takes effect varies by state and usually needs a documented finding of incapacity. The writer flagged this too. The key is defensible as written.
- rn-c06-8 and rn-c06-9 sit in `extra.ts` and are not imported. They are now free of the defects above. Whether they join the bank is Arjan's call.

## Summary

Items reviewed: 32 (30 case items and 2 extra items). Items with a defect: 8, of which 2 are in `extra.ts`. Fixes made: 9 across those 8 items. Key changes: 0. Every number recomputed by script matched. All citations exist and match their PubMed records. Tests pass 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
