# Batch s09 adversarial review

Scope: every file in `src/bank/s09/`. That is the 50 items in part1.ts to part5.ts that index.ts imports (rn-s09-01 to rn-s09-50) and the 2 items in extra.ts that index.ts does not import (rn-s09-91 and rn-s09-92).

Both lenses were applied to every item. Every number was recomputed with a script. Every guideline citation was checked against the publisher, agency or PubMed page.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s09-92 | options[1] text and why, correct | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s09-92 | rationale | The rationale said protamine reverses magnesium at the neuromuscular junction. Rewritten to name calcium gluconate. | A | high |
| rn-s09-92 | need | Tagged HPM. Antidote choice for a drug toxicity is Pharmacological and Parenteral Therapies. Changed to PPT. | B | high |
| rn-s09-91 | options[1] why | The why said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. The resin acts over hours or longer. That delay is why it is not first. | A | high |
| rn-s09-91 | need | Tagged HPM. Emergency treatment of hyperkalemia is Pharmacological and Parenteral Therapies. Changed to PPT. | B | high |

No defects were found in rn-s09-01 to rn-s09-50. Checks that came back clean include the Apgar total of 6, the newborn weight loss of 8.0% at the day 3 low, the 27 pack-years, the 24 mmHg orthostatic fall, 37.9°C as 100.2°F, 36.1°C as 97.0°F, 49°C as 120°F, hemoglobin 9.2 g/dL as 92 g/L, 145 cm as 4 ft 9 in and the BP categories in item 36.

## Key changes

- rn-s09-92. Before: option 1 "Protamine sulfate" keyed. After: option 1 "Calcium gluconate" keyed. The key index stays 1 but the keyed content changes. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine sulfate reverses heparin and has no effect on magnesium. Arjan approves.

## Sources verified

- CDC US MEC 2024, combined hormonal contraceptives (migraine with aura 4, age 35 or older with 15 or more cigarettes a day 4, BMI 30 or more 2, migraine without aura 2, varicose veins 1, family history of breast cancer 1): https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html
- CDC milestones at 9 months (sits without support): https://www.cdc.gov/act-early/milestones/9-months.html
- CDC milestones at 18 months (walks without holding on, scribbles, three or more words besides mama or dada): https://www.cdc.gov/act-early/milestones/18-months.html
- CDC Pink Book chapter 2 (mild illness, egg allergy and MMR, pregnant household contacts): https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html
- CDC guidelines for vaccinating pregnant persons (Tdap at 27 to 36 weeks, inactivated flu in any trimester, RSVpreF at 32 through 36 weeks from September to January, live vaccines and HPV deferred): https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html
- CDC Shingrix clinical considerations (2 doses 2 to 6 months apart from age 50, whether or not prior zoster): https://www.cdc.gov/shingles/hcp/vaccine-considerations/index.html
- AHA and ACC 2025 High Blood Pressure Guideline, Jones, Ferdinand, Taler et al.: https://www.ahajournals.org/doi/10.1161/HYP.0000000000000249
- AAP 2022 hyperbilirubinemia guideline (suboptimal intake hyperbilirubinemia peaks days 3 to 5, no water or dextrose water): https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/Clinical-Practice-Guideline-Revision-Management-of
- USPSTF 2018 unhealthy alcohol use, still the final statement with an update in progress: https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/unhealthy-alcohol-use-in-adolescents-and-adults-screening-and-behavioral-counseling-interventions
- SOGC Guideline No. 426, Magee, Smith et al., JOGC 2022: https://pubmed.ncbi.nlm.nih.gov/35577426/
- Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, Hinkle, Cheever, Overbaugh, 2022: https://www.barnesandnoble.com/w/brunner-suddarths-textbook-of-medical-surgical-nursing-janice-l-hinkle/1115205001
- Sodium polystyrene sulfonate label (delayed onset, not for emergency treatment): https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=905c3ee5-d1a7-4deb-a345-4a42296704fa&type=display
- Lowdermilk 13th edition (2023): https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0
- Perry 7th edition: https://shop.elsevier.com/books/maternal-child-nursing-care/perry/978-0-323-77671-4
- Jarvis 9th edition (2023): https://shop.elsevier.com/books/physical-examination-and-health-assessment/jarvis/978-0-323-80984-9
- Touhy and Jett 6th edition (2021): https://shop.elsevier.com/books/ebersole-and-hess-gerontological-nursing-and-healthy-aging/touhy/978-0-323-69803-0

The remaining journal citations in common.ts (USPSTF, ACOG, AAP, AASM, Freeman 2011, Fiore 2008) match their volume, issue and page on the linked pages.

## Needs Arjan's decision

- rn-s09-91 and rn-s09-92 are not Health Promotion and Maintenance items. They test drug therapy and fit a PPT batch. I recommend they stay out of s09. If they are added to any bank, the rn-s09-92 key change needs sign-off first.
- The Perry 7th edition shows a publication date of April 2022 on the Elsevier page. The citation gives 2023, which is likely the copyright year. It was left as is.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 2 items had defects, both in extra.ts. 5 fixes were made and 1 key change was made. The 50 bank items had no content, number or citation defects. `BATCH=s09 npx vitest run tests/bank.test.ts` passes 61 of 61 and tsc reports nothing for bank/s09.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
