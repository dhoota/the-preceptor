# Batch c15 adversarial review

Scope: `case1.ts` to `case5.ts` (30 case items) and `extra.ts` (2 stand-alone items that `index.ts` does not import). Both lenses were applied to every item. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c15-1-3 | rationale, blank 1 option 4 why | Said no urinary symptoms were present, but the case gives 600 mL retention after a failed void | B | high |
| rn-c15-1-4 | rationale, option 3 text and why | Said his legs were numb and aching. The case gives only tingling feet and back ache. Now rests on altered sensation and weakness | B | high |
| rn-c15-1-5 | topic | Named a neurology unit. The intro places him on the medical unit | B | medium |
| rn-c15-2-2 | stem | Asked about "each finding" but listed pinpoint pupils, cramps and twitching, which contradict her 3 mm pupils. Now asks about each possible finding | B | medium |
| rn-c15-2-3 | rationale, blank 1 option 1 why | Said her vital signs did not suggest sepsis, but a heart rate of 108/minute and respiratory rate of 28/minute meet two SIRS criteria. Reworded to "less likely" | A | medium |
| rn-c15-3-1 | stem | Assessment at 1530 on day 6 came before the 1550 fall and the 1605 and 2010 doses that the chart already showed. Moved to 2030 | B | high |
| rn-c15-3-3 | case tabs | "Both falls" came while a dose was overdue, but only one fall time was ever given. Added a day 2, 1540 fall note. The soft voice and the long-standing tremor were never given. Added them to the History and Physical | B | high |
| rn-c15-3-3 | blank 2 options 3 and 4 why | "Falls began after the move" is not in the case. "No signs of fluid loss" ignores the orthostatic BP drop | B | medium |
| rn-c15-4-2 | stem | Rationale said the mood signs began after the first dose. The case never said so. Added the timing to the husband's report | B | high |
| rn-c15-5-2 | Laboratory Results tab, row 5, rationale | Creatine kinase 820 units/L at 0840, 28 minutes after onset, is not plausible as a complication. CK begins to rise 2 to 12 hours after muscle injury. CK set to 185 units/L. Row replaced with heart rate 132/minute and BP 172/98 mmHg as a catecholamine effect | A | high |
| rn-c15-9 (extra) | rationale | Said the client has asthma. The stem never says so | B | high |
| rn-c15-8 (extra) | option 3 | "Elevate the bed head 30 degrees" was the same action as the key, which gave two defensible keys. Replaced with "Slow the feeding rate" | A | high |

No key changed. Every fix keeps the existing key.

## Key changes

None.

## Checks

- Doses and numbers recomputed: 1400 / 80 = 17.5 mL/kg, 2900 / 80 = 36.25 mL/kg, 1100 / 62 = 17.7 mL/kg, 900 / 62 = 14.5 mL/kg, 60 * 70 = 4200 mg, 20 * 70 = 1400 mg. The vital capacity fall from 2900 to 1400 mL is 51.7 percent. Every temperature and glucose pair converts. Clock gaps 0812 to 0836 (24 minutes) and 0819 to 0836 (17 minutes) agree. Facility doses run 2 hours 5 minutes to 2 hours 15 minutes after the home times.
- Priority frameworks: rn-c15-1-5 follows the delegation rules for assistive personnel, LPN and RN scope (routine, predictable, stable tasks are delegated, assessment of a worsening client stays with the RN). rn-c15-5-3 follows airway and breathing first, then acute over chronic.
- `npx tsc --noEmit -p .` shows no errors in bank/c15.
- `BATCH=c15 npx vitest run tests/bank.test.ts`: 44 of 44 pass. On the first run, before any edit, the near-duplicate test failed on rn-c09-4-1 against rn-c13-3-1. Both are outside this batch. It passed on the later run.

## Sources verified

- Leonhard SE et al. 2019. IVIG 0.4 g/kg daily for 5 days. https://pubmed.ncbi.nlm.nih.gov/31541214/
- Lawn ND et al. 2001. https://pubmed.ncbi.nlm.nih.gov/11405803/
- Wendell LC, Levine JM. Myasthenic crisis. Neurohospitalist 1(1):16, 2011. https://doi.org/10.1177/1941875210382918
- The 20/30/40 rule (vital capacity below 20 mL/kg, inspiratory pressure weaker than 30 cmH2O) and the link between neck flexor and diaphragm weakness: https://onlinelibrary.wiley.com/doi/full/10.1002/mus.27832 and https://first10em.com/myasthenic-crisis/
- Cipro label 2024. Boxed warning for worsening myasthenia gravis, avoid in known disease. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/019537s095%2C020780s050lbl.pdf
- Parkinson's Foundation Hospital Care Recommendations 2023. Give doses within 15 minutes of the home schedule. https://www.parkinson.org/sites/default/files/documents/hospital-care-recommendations-april2023.pdf
- 2023 AGS Beers Criteria. Avoid antipsychotics in Parkinson disease, except quetiapine, clozapine and pimavanserin. https://pubmed.ncbi.nlm.nih.gov/37139824/
- NICE NG220. No vitamin D solely to treat MS, and no supply of steroids to self-treat at home. https://www.nice.org.uk/guidance/ng220 (the recommendations page returned 403, so this was confirmed by search excerpts)
- Glauser T et al. 2016. The second therapy phase runs from 20 to 40 minutes. https://pmc.ncbi.nlm.nih.gov/articles/PMC4749120/
- Kapur J et al. 2019. Levetiracetam 60 mg/kg, maximum 4500 mg. https://www.nejm.org/doi/full/10.1056/NEJMoa1905795
- IHI SBAR Tool. The PDF is dated 2023-10. https://www.ihi.org/sites/default/files/2023-10/SBARTechniqueforCommunication.pdf
- NCSBN and ANA delegation guidelines 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Timing of the creatine kinase rise after muscle injury: https://emcrit.org/ibcc/rhabdo/
- Davis's Drug Guide for Nurses, 18th edition, 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15, 2017. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053

## Needs Arjan's decision

- NICE NG220 search results show an update dated 26 August 2026. The recommendations page returned 403, so I could not check whether the cited 2022 wording or the citation year needs updating.
- rn-c15-1-5 gives the scheduled enoxaparin to the LPN while the client is deteriorating. This fits delegation of a stable task, but state scope and facility policy vary.
- rn-c15-5-3 ranks airway before seizure control. In practice both happen at once.
- rn-c15-4 uses IV methylprednisolone 1 g for 3 days, which is US practice. NICE prefers oral 0.5 g for 5 days first.
- The extra items rn-c15-8 and rn-c15-9 are not imported by `index.ts` and are not covered by the batch tests.

## Summary

32 items reviewed (30 case items and 2 extra items). 11 items had defects and 12 fixes were made: 8 in Lens B (untraced findings and timeline) and 4 in Lens A (content). No key changed. All 44 batch tests pass.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
