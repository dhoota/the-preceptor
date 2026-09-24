# Batch s21 adversarial review

Scope: every .ts file in src/bank/s21. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s21-91 and rn-s21-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script, including the distractor arithmetic, the temperature pairs, the unit pairs and the clock intervals.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s21-92 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is IV calcium gluconate. | A | high |
| rn-s21-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says so. Each now says the agent has no effect on magnesium. | B | medium |
| rn-s21-92 | sources | The SOGC citation gave no journal, volume or page. It now names JOGC 44(5):547 with its PubMed URL. | A | high |
| rn-s21-91 | why, option 1 | Said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". The resin acts over hours. The why now says it acts over hours and does not protect the heart. | A | high |
| rn-s21-18 | stem, token 4, rationale, key order | Sedation could be confirmed before or after sync is engaged, so two orders were defensible. A stable narrow complex tachycardia at 180/minute is also treated with vagal maneuvers and adenosine before elective cardioversion. The stem now names atrial flutter, states sedation has taken effect and asks for the remaining steps. The sedation token is replaced by the shock itself, which has one fixed place. | A | medium |
| rn-s21-24 | stem, blank 1 option 0, blank 2 option 3, rationale, sources | A sensory level at the nipple line (T4) is not clearly above a planned level for open abdominal surgery and did not fit hand symptoms. The level is now the collarbones. The blank 2 distractor claimed a "clean" site the stem never gave. The ASRA anticoagulation guideline did not support a high block item and was removed. | A and B | medium |
| rn-s21-26 | why, option 2 | Said a full undiluted naloxone dose "is for a client who cannot be roused". ASPMN guidance titrates dilute naloxone. The why now says so. | A | medium |
| rn-s21-35 | sources | Cited the 2025 AHA Part 9 adult ALS guideline for temperature control. Temperature control and shivering are in Part 11, Post-Cardiac Arrest Care. Source replaced. | A | high |
| rn-s21-41 | stem | The stem said the nurse already could not flush the tube with gentle pressure, then keyed a gentle warm water flush as the first step. The stem now gives only the occlusion alarm and no flow. | B | medium |
| rn-s21-45 | why, option 5 | Said the BP is "above the usual range". The stem gives no usual BP. The why now rests on the rise from 104/60 mmHg in the table. | B | medium |
| rn-s21-29, rn-s21-30, rn-s21-39 | sources (NPIAP in common.ts) | Cited the 2019 3rd edition of the International Guideline. The 4th edition was published in 2025. Citation updated. Heel elevation on pillows remains supported. | A | high |
| rn-s21-44 | sources (IDSA_FEVER url in common.ts) | The work named Clinical Infectious Diseases 48(2):149, but the URL pointed to the Journal of the American Geriatrics Society reprint (PMID 19278394). It now points to PMID 19072244. | A | high |

## Key changes

- rn-s21-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate is the antidote for magnesium toxicity. Protamine reverses heparin. Arjan needs to approve this change.
- rn-s21-18. Before: correct order [1, 4, 0, 5, 2] with token 4 "Confirm sedation has taken effect". After: correct order [1, 0, 5, 2, 4] with token 4 "Press and hold the shock buttons". Reason: the old order had a second defensible sequence. Arjan needs to approve this change.

## Items checked with no defect

The other 39 items in the bank passed both lenses. Points checked closely:

- Item 04: 0.4 mg in 10 mL is 0.04 mg/mL. 0.08 / 0.04 = 2 mL. The distractors 0.2 mL (0.08 / 0.4), 5 mL (0.4 / 0.08) and 10 mL (5 times the dose) match their whys.
- Item 08: 118 minus 92 is 26. 105 is the mean and 210 the sum, as the whys say.
- Item 29: 2 + 2 + 1 + 2 + 2 + 1 = 10, high risk on the Braden bands.
- Item 33: creatinine 1.9 mg/dL is 168 micromol/L.
- Item 44: 37.6 minus 36.2 is 1.4°C, above the IDSA rise of 1.1°C.
- Item 48: NEWS2 points are 3 (respirations 25), 2 (SpO2 93%), 2 (systolic 98), 2 (heart rate 112) and 3 (new confusion). Temperature 37.4°C scores 0.
- Item 25: catheter out at 0800 and enoxaparin at 1000 is 2 hours, under the ASRA 5th edition minimum of 4 hours.
- Item 26: POSS level 3 is unacceptable sedation and calls for holding or reducing the opioid.
- Temperature pairs 35.2, 36, 36.8, 36.9, 37.1, 37.4, 37.6 and 38.1°C all convert to the Fahrenheit values given.

## Sources verified

- ASA 2018 moderate sedation guideline, Anesthesiology 128(3):437: https://pubmed.ncbi.nlm.nih.gov/29334501/
- ASPMN 2020 opioid sedation monitoring revisions, Pain Manag Nurs 21(1):7: https://pubmed.ncbi.nlm.nih.gov/31377031/
- POSS level 3 definition and interventions: https://www.ncbi.nlm.nih.gov/books/NBK2658/box/ch17.box1/?report=objectonly
- AHA 2019 blood pressure measurement statement, Hypertension 73(5):e35: https://pubmed.ncbi.nlm.nih.gov/30827125/
- SHEA 2022 VAP prevention, Infect Control Hosp Epidemiol 43(6):687: https://pubmed.ncbi.nlm.nih.gov/35589091/
- 2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline, Circulation 149(1):e1 (PMID 38033089): https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193
- 2025 AHA Part 9 adult ALS, Circulation 152(16 Suppl 2):S538 (PMID 41122884): https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- 2025 AHA Part 11 post-cardiac arrest care, Circulation 152(16 Suppl 2):S673: https://pubmed.ncbi.nlm.nih.gov/41122894/
- AAP 2022 hyperbilirubinemia guideline, Pediatrics 150(3) (PMID 35927462): https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/
- ASRA 5th edition 2025, prophylactic LMWH at least 4 hours after catheter removal: https://pubmed.ncbi.nlm.nih.gov/39880411/ and https://www.guidelinecentral.com/guideline/4293939/
- NEWS2 2017 report: https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf
- International Pressure Ulcer/Injury Guideline, 4th edition 2025: https://www.internationalguideline.com/the-international-guideline and https://www.guidelinecentral.com/guideline/23835/
- ASPAN normothermia guideline 2nd edition, J Perianesth Nurs 25(6):346: https://pubmed.ncbi.nlm.nih.gov/21126665/
- AANN ICP and EVD guideline 2011: https://www.bmc.org/sites/default/files/Patient_Care/Specialty_Care/Stroke_and_Cerebrovascular_Center/Medical_Professionals/Protocols/AANN%20Guideline%20caring%20for%20ICP%20Monitor%20External%20Vent%20Drain%20or%20Lumbar%20Drainage.pdf
- IDSA 2008 update fever in long-term care, Clin Infect Dis 48(2):149: https://pubmed.ncbi.nlm.nih.gov/19072244/
- ASPEN 2017 safe practices for enteral nutrition, JPEN 41(1):15: https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- SOGC Guideline No. 426 (Magee 2022), JOGC 44(5):547: https://pubmed.ncbi.nlm.nih.gov/35577426/
- Textbook editions checked on publisher pages: Hinkle 15th edition 2022 (a 16th edition dated 2026 now exists), Potter 11th, Wong 12th, Halter 9th and Lehne 11th.

## Needs Arjan's decision

- Approve the two key changes above.
- HINKLE cites the 15th edition of Brunner and Suddarth (2022). The 16th edition (2026) is out. The content used here is unchanged fundamentals, so I did not replace it. Decide whether the bank moves to the 16th edition.
- rn-s21-23 says saline instillation before suctioning is not recommended. The claim is standard, but the SHEA 2022 guideline cited on the item does not state it directly. A suctioning guideline could be added.

## Summary

52 items reviewed (50 in the bank and 2 in extra.ts). 12 defective item ids and 12 fix rows, and 2 key changes (rn-s21-92 and rn-s21-18). All 61 bank tests pass and the quality gates pass on the 2 extra items.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
