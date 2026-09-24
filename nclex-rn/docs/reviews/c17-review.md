# Batch c17 adversarial review

Scope: case1.ts to case5.ts (30 items), helpers.ts, index.ts and extra.ts. extra.ts is not imported by index.ts. It holds two stand-alone items, rn-c17-8 and rn-c17-9. Both were reviewed.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c17-9 | option 2 text and why | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. Calcium gluconate is the antidote. | A | high |
| rn-c17-9 | rationale | Said protamine reverses magnesium at the neuromuscular junction. Now names IV calcium gluconate. | A | high |
| rn-c17-9 | sources | Canadian SOGC guideline for a US exam item, and not checked for the antidote. Replaced with ACOG Practice Bulletin 222, which names calcium gluconate for magnesium toxicity. | A | medium |
| rn-c17-8 | rationale | Said "this client has asthma". The stem never gives asthma. Propranolol in asthma would also make the prescription itself the issue. Claim removed and the wheezing point kept. | B | high |
| rn-c17-8 | sources | Davis's Drug Guide 18th edition is superseded. Updated to the 19th edition, 2025. | A | medium |
| rn-c17-4-1, rn-c17-4-2 | sources (helpers acr) | The citation names Arthritis Care and Research 73(7):924, but the URL pointed to the Arthritis and Rheumatology copy (PMID 34101376, pages 1108). URL now points to PMID 34101387. | A | high |
| rn-c17-3-4, rn-c17-3-5 | sources (helpers cellcept) | CellCept label year 2025. DailyMed shows the label revised 7/2026. Year updated to 2026. | A | low |
| rn-c17-3-1 | span why, BP | Called the BP "new high BP". No earlier BP or history of normal BP is given. Now "High BP with edema in lupus can signal kidney involvement." | B | medium |
| rn-c17-5-6 | rationale | "Skin cancer risk does not change with the weather" is false as stated. UV exposure varies with weather. Now matches the option why: UV passes through clouds. | A | medium |
| rn-c17-5-1 (case 5 History and Physical) | tab text | "Clinic weight 1 week ago" implied a clinic visit 1 week ago, while the vital signs and laboratory tabs give the last clinic visit as 1 month ago. Changed to a home weight. The 80 kg to 82 kg claim still traces. | B | low |

Items checked with no defect found: every other item in cases 1 to 5. All numbers were recomputed by script: temperature pairs, every creatinine SI pair (factor 88.4), the epinephrine dose 0.01 x 26 = 0.26 mg (below the 0.3 mg cap), the pediatric hypotension floor 70 + 2 x 8 = 86 mmHg, the 12 minutes from 1015 to 1027, weight gains of 3 kg and 2 kg, creatinine doubling in cases 3 and 5, age 72 from a 1954 birth year, and 6 months of suppression from month 2 to month 8. The ceftriaxone dose of 1 g also fits the usual 50 mg/kg cap of 1 g for 26 kg.

## Key changes

- rn-c17-9 (extra.ts, not in the bank). Before: option 2 "Protamine sulfate". After: option 2 "Calcium gluconate". The keyed index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (ACOG Practice Bulletin 222: calcium gluconate 10% solution, 10 mL IV over 3 minutes). Protamine reverses heparin.

## Sources verified

- WAO Anaphylaxis Guidance 2020, Cardona et al. World Allergy Organ J 13(10):100472. Dose 0.01 mg/kg IM in the anterolateral thigh, repeat every 5 to 15 minutes, pediatric hypotension below 70 + 2 x age. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/
- Pumphrey, Fatal posture in anaphylactic shock. J Allergy Clin Immunol 2003 112(2):451. PubMed E-utilities record 12897756. https://pubmed.ncbi.nlm.nih.gov/12897756/
- Selik et al., Revised Surveillance Case Definition for HIV Infection 2014. Stage 3 is CD4 below 200 cells per microliter at age 6 and older. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6303a1.htm
- OI guideline, Pneumocystis. Stop primary prophylaxis at CD4 200 or more for 3 months or longer on ART (AI). Page returns 403, so content was confirmed through search results and the National HIV Curriculum summary. https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis and https://www.hiv.uw.edu/pdf/co-occurring-conditions/opportunistic-infections-prevention/core-concept/all
- Biktarvy label, DailyMed. Take at least 2 hours before or 6 hours after aluminum or magnesium antacids. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=664cb8f0-1f65-441b-b0d9-ba3d798be309
- CDC, Evidence of HIV Treatment and Viral Suppression in Preventing the Sexual Transmission of HIV, October 2018. https://stacks.cdc.gov/view/cdc/60952
- CDC, Recommendations for Partner Services Programs, MMWR Recomm Rep 2008 57(RR-9):1. PubMed record 18987617. https://pubmed.ncbi.nlm.nih.gov/18987617/
- EULAR SLE recommendations, 2023 update. Ann Rheum Dis 2024 83(1):15. PubMed record 37827694. https://pubmed.ncbi.nlm.nih.gov/37827694/
- KDIGO 2024 Lupus Nephritis guideline. Kidney Int 2024 105(1S):S1. PubMed record 38182286. https://pubmed.ncbi.nlm.nih.gov/38182286/
- CellCept label, DailyMed, revised 7/2026. Tablets not crushed, avoid contact with the powder, pregnancy test immediately before starting. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=37241e87-4af4-4dc3-a1aa-ea6f20d8dc40
- ACR 2021 RA guideline, Arthritis Care Res 73(7):924. PubMed record 34101387. https://pubmed.ncbi.nlm.nih.gov/34101387/
- Methotrexate tablets label, DailyMed, revised 5/2026. NSAID interaction, reduced elimination in renal impairment, deaths from daily dosing. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a6afc4c-819d-4ba9-8040-4504519c116a
- ISMP High-Alert Medications in LTC 2021. Lists oral methotrexate, nononcologic use, for special emphasis. https://www.ismp.org/system/files/resources/2021-05/HighAlertMedications_LTC-2021.pdf
- CDC Adult Immunization Schedule Notes 2025 (dated July 2, 2025). PCV and RZV from age 50, MMR evidence for birth before 1957, HPV through 26 and shared decision to 45, Td every 10 years. https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-notes.html
- KDIGO Care of Kidney Transplant Recipients 2009, still the current KDIGO version. Am J Transplant 9(Suppl 3):S1. https://kdigo.org/guidelines/transplant-recipient/
- ACOG Practice Bulletin 222, Gestational Hypertension and Preeclampsia. Obstet Gynecol 2020 135(6):e237. PubMed record 32443079. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Davis's Drug Guide for Nurses, 19th edition, Vallerand and Sanoski, F.A. Davis, 2025. https://www.vitalsource.com/products/davis-39-s-drug-guide-for-nurses-april-hazard-vallerand-v9781719652926

## Needs Arjan's decision

- extra.ts holds two stand-alone MC items with ids rn-c17-8 and rn-c17-9 in a case batch. The ids do not follow the case id scheme. Decide whether they move to a stand-alone batch or are dropped.
- rn-c17-2 ARV guideline year 2025 and OI guideline year 2026 could not be read directly because clinicalinfo.hiv.gov returns 403. The content matches, but the year stamps are unconfirmed.
- rn-c17-2-4: the why for stopping prophylaxis gives the main criterion (CD4 200 or more for 3 months). The OI guideline also allows stopping at CD4 100 to 200 with an undetectable viral load (BII). Left as is for entry level.
- rn-c17-4-3: the rationale says folic acid does not block methotrexate. ACR 2021 supports folic acid with methotrexate, but the label warns folate may reduce response in cancer use. Left as is.
- rn-c17-4-2: a creatinine clearance of 38 mL/minute is keyed as raising toxicity risk, which is correct. Some readers may argue the nurse should question starting methotrexate at all. The item does not ask that.
- rn-c17-5-5: social worker keyed for drug cost. Some centers use a transplant financial coordinator.

## Summary

32 items across 5 cases and extra.ts were reviewed under both lenses. 10 fixes touched 10 item ids, including 1 key change in rn-c17-9 (not in the bank). No key in the 30 case items changed. tsc shows no c17 errors and BATCH=c17 tests/bank.test.ts passes 44 of 44. The extra.ts items also pass itemProblems after the fixes.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
