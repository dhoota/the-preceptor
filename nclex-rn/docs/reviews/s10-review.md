# Review of batch s10

Batch s10 holds 50 stand-alone Health Promotion and Maintenance items in `part1.ts` to `part5.ts`, and 2 more items in `extra.ts` that `index.ts` does not import. I reviewed all 52 items under Lens A and Lens B.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s10-91 (extra) | options[1], rationale | Keyed antidote for magnesium toxicity was protamine sulfate. The antidote is IV calcium gluconate. Protamine reverses heparin | A | high |
| rn-s10-91 (extra) | need | Magnesium toxicity in preeclampsia is a drug item, not Health Promotion and Maintenance. Set to PPT | B | medium |
| rn-s10-92 (extra) | rationale | Rationale said the client has asthma. The stem gives only hypertension. Invented finding removed and the reason for the key restated | B | high |
| rn-s10-92 (extra) | need | Propranolol teaching is a drug item. Set to PPT | B | medium |
| rn-s10-05 | sources (TEETHING_JEWELRY in common.ts) | Work title did not match the FDA release and the URL pointed to a secondary AAP News page that returns 403. Replaced with the exact FDA release title and the FDA release as distributed on PR Newswire | A | high |
| rn-s10-35 | options[4].why | "Vaccines given to a nursing parent do not harm the infant" overgeneralizes. It now states that breastfeeding is not a contraindication to MMR vaccine, which is what ACIP says | A | medium |
| rn-s10-50 | conditions[0].why | Said craniosynostosis "changes head growth". Single suture lambdoid fusion often leaves head circumference normal. The real discriminator is the ear, which moves backward in lambdoid fusion and forward in positional plagiocephaly | A | medium |
| rn-s10-50 | rationale | Tied each normal finding to the condition it rules out, including the forward ear against lambdoid fusion | A | medium |
| rn-s10-47 | refs, sources | The claim that 128/78 mmHg is elevated BP had no ref or source. Added the 2025 AHA/ACC category as a ref and the guideline as a source | B | medium |

## Key changes

- rn-s10-91 (extra.ts, not in the bank). Before: key "Protamine sulfate". After: key "Calcium gluconate" in the same position. Reason: SOGC Guideline No. 426 and every drug reference give IV calcium gluconate for clear magnesium toxicity. Protamine is the heparin antidote. The item taught a dangerous error.

## Checks with no defect found

- Numbers recomputed by script: 3.2 * 3 = 9.6 kg and the distractor multiples (4.8, 6.4, 12.8). BMI 88 / 1.7^2 = 30.45 and 88 / 1.7 = 51.8. Weekly gains (65.2 - 62) / 8 = 0.40, (68.6 - 65.2) / 8 = 0.425, (71.2 - 68.6) / 6 = 0.43. Every Celsius and Fahrenheit pair. Hemoglobin 9.6 g/dL = 96 g/L. Glucose 212 mg/dL = 11.8 mmol/L and 200 mg/dL = 11.1 mmol/L. Cholesterol 215 mg/dL = 5.56 mmol/L. Caffeine 400 mg is twice 200 mg.
- rn-s10-20 GTPAL gives G4 T1 P1 A1 L3, and every distractor why checks out.
- rn-s10-26 fundal descent of 1 cm a day matches the day labels.
- rn-s10-30 matches the 2020 algorithm. Both sites must read 95% or more, and an indeterminate result is repeated once in 1 hour.
- rn-s10-40 matches the current CDC adult schedule. Pneumococcal starts at 50. RSV is for 75 and older, and for 50 to 74 at increased risk.

## Sources verified

- ADA Standards of Care 2026, Section 2, Diabetes Care 49(Suppl 1):S27. https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes
- Martin GR et al. 2020 pulse oximetry update. https://pubmed.ncbi.nlm.nih.gov/32499387/
- CDC Adult Immunization Schedule by Age, addendum updated July 2, 2025. This is still the current page. https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html
- FDA teething jewelry release, December 20, 2018. https://www.prnewswire.com/news-releases/fda-warns-about-safety-risks-of-teething-necklaces-bracelets-to-relieve-teething-pain-or-to-provide-sensory-stimulation-300769642.html
- FDA benzocaine action, May 2018, as reported by AAFP. https://www.aafp.org/about/news/20180530fdabenzocaine
- CDC Older Adults and Extreme Heat. It covers fans in the high 90s and salt tablets. https://www.cdc.gov/aging/emergency-preparedness/older-adults-extreme-heat/
- CDC US MEC 2024 Appendix G, LAM. Its intervals are 4 hours by day and 6 at night. https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html
- CDC Pink Book chapter 19, rotavirus. Dose 1 is given by 14 weeks 6 days at the latest. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-19-rotavirus.html
- CDC Pink Book chapter 6, vaccine administration. Infants get the vastus lateralis. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-6-vaccine-administration.html
- CDC Pink Book chapter 2. Live injected vaccines are given 28 days apart. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html
- CDC Infant Formula Preparation and Storage. It sets the 2 hour and 24 hour limits and says not to use a microwave. https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html
- ACOG Committee Opinion 462, caffeine. https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2010/08/moderate-caffeine-consumption-during-pregnancy
- ACOG Practice Bulletin 233, anemia. The cutoffs are 11 g/dL and 10.5 g/dL. https://pubmed.ncbi.nlm.nih.gov/34293770/
- USPSTF HIV screening 2019. Ages 15 to 65. An update is in progress. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening
- NHTSA Fitting a Bicycle Helmet. https://www.nhtsa.gov/sites/nhtsa.gov/files/2024-07/bike-safety-fitting-helmet.pdf
- NIH ODS Calcium fact sheet. https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/
- AAP positional skull deformities 2011. The ear sits forward in positional plagiocephaly and backward in lambdoid synostosis. https://publications.aap.org/pediatrics/article/128/6/1236/31059/Prevention-and-Management-of-Positional-Skull
- SOGC Guideline No. 426, 2022. It names calcium gluconate for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Jones DW et al. 2025 AHA/ACC high blood pressure guideline. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356
- Davis's Drug Guide for Nurses 18th edition, F.A. Davis. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- Textbook editions checked on the Elsevier shop: Jarvis 9th, Lowdermilk 13th, Touhy and Jett 6th.

## Needs Arjan's decision

- Approve the rn-s10-91 key change. Also decide whether rn-s10-91 and rn-s10-92 belong in this batch at all. Both are drug items, not Health Promotion and Maintenance.
- The BENZOCAINE source names the FDA as its body but links to an AAFP news page. The FDA page that link describes moved and I could not find a working fda.gov URL for it.
- rn-s10-47 calls a total cholesterol of 215 mg/dL borderline high, but no cited source supports that. Decide whether to add a lipid source or drop the word.
- The difficulty of rn-s10-47 is 5. It may be closer to 3.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 6 items had defects, and 9 fixes were made. There was 1 key change, to an item outside the bank. The typecheck is clean and all 61 batch tests pass. I also ran the extra items through the item gates and they pass.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
