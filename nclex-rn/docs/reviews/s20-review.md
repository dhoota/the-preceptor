# Batch s20 adversarial review

Scope: every .ts file in src/bank/s20. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s20-91 and rn-s20-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script, including the distractor arithmetic, the temperature pairs and the clock intervals.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s20-91 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s20-91 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says so. They now say each agent has no effect on magnesium. | B | medium |
| rn-s20-91 | sources | The SOGC citation gave no journal, volume or page. It now names JOGC 44(5):547 with its PubMed URL. | A | high |
| rn-s20-92 | rationale | The rationale said "this client has asthma". The stem gives hypertension only, and propranolol would be a poor choice in asthma. The sentence now states the bronchospasm risk without the invented history. | B | high |
| rn-s20-10 | sources | The CDC skin test page does not list health care workers under the 10 mm cutoff, so it did not support the refs. Added the CDC 2005 health care settings guideline (Jensen et al.), which states that a baseline result of 10 mm or more is positive for most health care workers. | A | high |
| rn-s20-04 | rationale | Said fist clenching and a long tourniquet time "both cause" hemolysis. Fist clenching raises potassium by release from forearm muscle, not by hemolysis. The sentence now says both can also raise the measured potassium. | A | medium |
| rn-s20-07 | rationale | Called the SpO2 fall "gradual" and cited "no sudden change". The stem gives only a preoperative and a current value, so the time course is unknown. Both claims removed. | B | medium |
| rn-s20-07 | why, options 0 and 3 | The fluid overload why said the stem gives "no crackles", and the embolism why implied a fast heart rate the stem never reports. Both now rest only on stated findings. | B | low |
| rn-s20-31 | stem | Rh immune globulin is given only to an Rh negative client who is not already sensitized. The stem gave no antibody screen. Added "with a negative antibody screen". | B | medium |
| rn-s20-37 | why, blank 0 option 0 | Said perforation "shows free air on imaging". Perforation after sphincterotomy is often retroperitoneal and can show no free air on a plain film. The why now says no free air makes perforation less likely, which matches the rationale. | A | medium |
| rn-s20-47 | why, option 1 | Said 3 minutes is too short "even without an anticoagulant". Many references give 3 to 5 minutes for a client not anticoagulated. The why now rejects it for this client on heparin. | A | medium |
| rn-s20-34 | sources (NICE_BIPOLAR) | NICE CG185 was last updated in December 2023. The citation gave 2014. Year and work now name the 2023 update. The 12 hour sampling rule is unchanged. | A | medium |
| rn-s20-01 | sources (USMSTF url) | The URL pointed to a Cleveland Clinic Journal of Medicine review, not the cited American Journal of Gastroenterology paper. It now points to PMID 40035345. | A | high |

## Key changes

- rn-s20-91 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate is the antidote for magnesium toxicity. Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Items checked with no defect

The other 41 items in the bank passed both lenses. Points checked closely:

- Item 05: 2400 x 20% = 480. The distractors 120, 360 and 1920 are 5%, 15% and 2400 minus 480, as their whys say.
- Item 15: 98 / 140 = 0.70, 91 / 140 = 0.65, 98 / 136 = 0.72, 140 / 98 = 1.43.
- Item 19: Winter's formula gives expected PaCO2 1.5 x 15 + 8 = 30.5 mmHg, so a PaCO2 of 30 fits compensation for metabolic acidosis.
- Item 37: 3 x 60 = 180 units/L, and 1450 is above it.
- Item 01: 0600 is 5 hours before 1100 and leaves 2 hours to finish. Item 34: 2100 to 0900 is 12 hours. Item 43: day 0 at 2000 to day 2 at 0800 is 36 hours, under 2 days.
- Temperature pairs: 37.0, 37.1, 37.2, 37.4, 37.6 and 38.7°C match the Fahrenheit values given.
- Item 30: the tongue deviates toward the side of hypoglossal injury, which is the left side after a left endarterectomy.
- Item 29: an S3 is heard with the bell at the apex in the left lateral position.

## Sources verified

- USMSTF bowel preparation 2025, Am J Gastroenterol 120(4):738 to 764, split dose second half 4 to 6 hours before and done 2 hours before: https://pubmed.ncbi.nlm.nih.gov/40035345/ and https://www.drugs.com/news/updates-issued-optimizing-bowel-preparation-quality-colonoscopy-124002.html
- AABB 2023 transfusion guideline, JAMA 330(19):1892: https://pubmed.ncbi.nlm.nih.gov/37824153/
- Wang et al. 2025 contrast consensus, J Allergy Clin Immunol Pract 13(5):1029, confirmed through PubMed and Crossref: https://pubmed.ncbi.nlm.nih.gov/40332064/
- ACR Manual on Contrast Media 2024, no premedication for shellfish allergy, IM epinephrine, fluids and leg elevation for severe reactions: https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf
- ADA Standards of Care 2026, OGTT with 8 hour fast and at least 150 g/day carbohydrate for 3 days: https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes
- ADA foot care 2026, Diabetes Care 49(Suppl 1):S261: https://pubmed.ncbi.nlm.nih.gov/41358886/
- CDC tuberculin skin test page, 48 to 72 hour reading and induration only: https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html
- CDC 2005 health care settings guideline, baseline 10 mm or more positive for most health care workers: https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5417a1.htm
- ASNC 2016 SPECT stress guideline, caffeine and decaffeinated drinks withheld 12 hours: https://pubmed.ncbi.nlm.nih.gov/26914678/
- Gornik 2024 PAD guideline, Circulation 149(24):e1313: https://pubmed.ncbi.nlm.nih.gov/38743805/
- ASGE 2017 ERCP adverse events, Gastrointest Endosc 85(1):32, pancreatitis with enzyme above 3 times the upper limit: https://pubmed.ncbi.nlm.nih.gov/27546389/
- INS Standards of Practice 9th edition, J Infus Nurs 47(1S):S1: https://pubmed.ncbi.nlm.nih.gov/38211609/
- Gould 2010 CAUTI guideline, Infect Control Hosp Epidemiol 31(4):319: https://pubmed.ncbi.nlm.nih.gov/20156062/
- NICE CG185, 12 hour lithium sample, last updated December 2023: https://www.nice.org.uk/guidance/cg185/chapter/Recommendations
- SOGC Guideline No. 426 (Magee 2022), JOGC 44(5):547: https://pubmed.ncbi.nlm.nih.gov/35577426/
- Davis's Drug Guide for Nurses 18th edition 2023, Vallerand and Sanoski: https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- Arterial puncture pressure of 3 to 5 minutes, longer with anticoagulants: https://iem-student.org/arterial-blood-gas-abg-sampling/

The textbook sources (Hinkle, Potter, Pagana, Jarvis, Wong) were checked for edition and year only. Their content claims match standard teaching.

## Needs Arjan's decision

- The rn-s20-91 key change in extra.ts.
- rn-s20-10: after a baseline result under 10 mm, the 2005 guideline calls for a second step test in 1 to 3 weeks. The item is right to call 8 mm negative, but it could mention the second step. I left it as written.
- rn-s20-09: the INS left side head-down position for air embolism is still taught but has weaker evidence in newer reviews. I could not read the INS full text to confirm the 2024 wording.

## Summary

52 items reviewed. 13 fixes across 10 items, 8 of them in the bank and 2 in extra.ts. 1 key change, in extra.ts. Typecheck is clean and BATCH=s20 npx vitest run tests/bank.test.ts passes 61 of 61. The extra.ts items also pass itemProblems.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
