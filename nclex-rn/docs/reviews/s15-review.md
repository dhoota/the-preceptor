# Batch s15 adversarial review

Scope: every .ts file in src/bank/s15. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, and the 2 items in extra.ts (rn-s15-91 and rn-s15-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script, including the arithmetic in the distractor whys, the unit pairs and the temperature pairs.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s15-92 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s15-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says that. They now say what each agent reverses. | B | medium |
| rn-s15-91 | why, option 1 | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". Its onset is 2 to 24 hours. That delay is the reason it is not first. | A | high |
| rn-s15-03 | sources | Cited the 2018 AHA and ACC blood cholesterol guideline. The 2026 ACC and AHA dyslipidemia guideline retired it in March 2026. The source is replaced. The unused STATIN constant is removed from common.ts. | A | high |
| rn-s15-38 | rationale | "The aPTT stays in a steady range, so the dose has not changed." The aPTT shows effect, not dose, and the stem gives no dose. The sentence now says the heparin effect has not risen, with the 68 to 74 second range. | B | medium |
| rn-s15-01 | rationale and option 0 why | The rationale said every wrong choice comes from skipping the drop factor or the time. 8 drops/minute comes from dividing 125 mL by 15, which is dividing where one should multiply. The why and the rationale now say so. | B | medium |

## Key changes

- rn-s15-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate 1 g IV is the antidote for magnesium toxicity (ACOG Practice Bulletin 222, SOGC Guideline No. 426). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Items checked with no defect

The other 45 items in the bank passed both lenses. I checked these points closely:

- The calculations in items 01, 07, 12, 21, 23, 31, 41 and 45, and every distractor figure. For example, 0.2 mL/hour is 350/1600 per minute, 2.3 mL is 720/4/80, and 1.1 mL is 180/160.
- The unit pairs: creatinine 0.8 to 2.1 mg/dL against 71 to 186 micromol/L, digoxin 2.8 ng/mL against 3.6 nmol/L, ammonia 118 mcg/dL against 69 micromol/L, glucose 164 and 58 mg/dL, and all four temperature pairs.
- The platelet fall in item 38. 96 000 is 38.7 percent of 248 000, so the drop is more than half, as the item says.

## Sources verified

- ADA Standards of Care in Diabetes 2026, section 6, Diabetes Care 49(Suppl 1):S132. https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/6-Glycemic-Goals-Hypoglycemia-and-Hyperglycemic
- Simpson KR, AWHONN, Cervical Ripening and Labor Induction and Augmentation, 5th edition, Nursing for Women's Health 24(4):S1, 2020. https://pubmed.ncbi.nlm.nih.gov/32778395/ (a 6th edition appeared in 2025. The tachysystole definition is unchanged. See the decision list.)
- Jonklaas J et al., ATA hypothyroidism guideline, Thyroid 24(12):1670, 2014. It says to separate levothyroxine from calcium carbonate and ferrous sulfate, and that 4 hours is traditional. https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/
- Holbrook A et al., CHEST 141(2 Suppl):e152S, 2012. https://pubmed.ncbi.nlm.nih.gov/22315259/
- Cuker A et al., ASH 2018 HIT guideline, Blood Advances 2(22):3360. https://ashpublications.org/bloodadvances/article/2/22/3360/16129/
- AABB Circular of Information, June 2024. https://www.aabb.org/news-resources/resources/circular-of-information
- Pasero C, McCaffery M, Pain Assessment and Pharmacologic Management, Mosby 2011. https://books.google.com/books/about/Pain_Assessment_and_Pharmacologic_Manage.html?id=VAeXpwAACAAJ
- ACOG Practice Bulletin 222, 2020. It gives calcium gluconate 1 g IV as the antidote. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Nickel B et al., INS Standards of Practice, 9th edition, J Infus Nurs 47(1S):S1, 2024. https://pubmed.ncbi.nlm.nih.gov/38211609/
- Vilstrup H et al., AASLD and EASL HE guideline, Hepatology 60(2):715, 2014. https://pubmed.ncbi.nlm.nih.gov/25042402/
- AGS 2023 Beers Criteria, J Am Geriatr Soc 71(7):2052. Glyburide, first-generation antihistamines and benzodiazepines are all listed. https://pubmed.ncbi.nlm.nih.gov/37139824/
- Nahid P et al., ATS, CDC and IDSA TB guideline, Clin Infect Dis 63(7):e147, 2016. https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/
- Shaker MS et al., anaphylaxis 2020 practice parameter, JACI 145(4):1082. https://www.sciencedirect.com/science/article/abs/pii/S0091674920301056
- Heidenreich PA et al., 2022 HF guideline, Circulation 145(18):e895. https://pubmed.ncbi.nlm.nih.gov/35363499/
- O'Grady NP et al., CDC 2011 catheter infection guideline. It gives gauze every 2 days, transparent dressings at least every 7 days, and no antibiotic ointment. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- New for item 03: Blumenthal RS, Morris PB, Gaudino M, et al., 2026 ACC and AHA Guideline on the Management of Dyslipidemia, Circulation 2026. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423
- Magee LA et al., SOGC Guideline No. 426, JOGC 2022, used by item 92. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Onset of sodium polystyrene sulfonate, for item 91. https://pmc.ncbi.nlm.nih.gov/articles/PMC4552230/
- Lehne 11th edition (2022), Hinkle 15th edition (2022), the ISMP high-alert list (2024) and the ISMP IV push guidelines (2015): the writer's links in s15-writer.md resolve to these editions.

## Needs Arjan's decision

- rn-s15-92: approve the key change above. The item also repeats the teaching point of rn-s15-08 on magnesium toxicity. Decide whether it joins the bank at all.
- rn-s15-91: this item overlaps rn-s15-34 on drug-induced hyperkalemia but asks a different question. It can join the bank now that the why is fixed.
- rn-s15-48: the AWHONN monograph now has a 6th edition (2025). Consider moving the citation to it.
- rn-s15-33: CHEST 2012 is still the usual citation for managing a high INR without bleeding. A newer source may be preferred.
- rn-s15-11: the rationale says the left side, head down position traps air in the right atrium. Brunner and Suddarth says the same. Some sources say the right ventricle. I left it unchanged.

## Summary

52 items reviewed: 50 in the bank and 2 in extra.ts. I made 10 edits across 6 items: rn-s15-01, 03, 38, 91 and 92, with 92 holding 3 of them. Among them are 1 key change (rn-s15-92, not in the bank), 1 false why (rn-s15-91), 1 stale guideline (rn-s15-03) and 3 claims that did not trace to the stem or misdescribed an error (rn-s15-01, 38 and 92). After the fixes, tsc reports nothing for bank/s15 and BATCH=s15 vitest passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
