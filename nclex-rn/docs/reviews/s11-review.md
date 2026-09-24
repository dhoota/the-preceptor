# Batch s11 adversarial review

Scope: all 50 items in `part1.ts` to `part5.ts` plus the 2 items in `extra.ts` (`rn-s11-91`, `rn-s11-92`), which `index.ts` does not import. Both lenses were applied to every item. All numbers were recomputed.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s11-91 | key option, why, rationale | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. Calcium gluconate is the antidote | A | high |
| rn-s11-91 | need | Magnesium toxicity was tagged PSY. It is Pharmacological and Parenteral Therapies. Changed to PPT | B | high |
| rn-s11-91 | sources | SOGC Guideline 426 is Canadian. Replaced with ACOG Practice Bulletin 222 (2020), the US guideline the NCLEX follows | A | medium |
| rn-s11-91 | distractor why | Vitamin K why said "not involved here". Now states the client did not receive warfarin | B | low |
| rn-s11-92 | rationale | The rationale said "this client has asthma". The stem gives no asthma. Removed and rewritten to teach the rebound risk and the monitoring reasons | B | high |
| rn-s11-92 | need | Beta blocker teaching was tagged PSY. Changed to PPT | B | high |
| rn-s11-06 | stem | Token and rationale offer an as-needed oral medication, but the stem never said one was prescribed. Added to the stem | B | high |
| rn-s11-09 | sources | USPSTF 2018 covers screening for abuse, not the physical signs the item tests. Replaced with Wiglesworth 2009, a study of bruising in physical elder abuse | A | medium |
| rn-s11-20 | key why | "Solitary physical activity with one staff member" contradicts itself. Removed "Solitary" | B | low |
| rn-s11-22 | distractor why | Said "advanced memory loss". The stem does not stage the dementia. Now "this degree of memory loss", as the rationale says | B | medium |
| rn-s11-25 | distractor why | The statement is about cutting back the dose, but the why spoke of stopping early. Aligned | B | low |
| rn-s11-27 | distractor text, rationale | The option asked why the client "went to the party alone". The stem never mentions a party. Replaced with "Ask why the client did not fight back", another blaming question | B | high |
| rn-s11-50 | rationale | Said parent training is "a first-line treatment for school-age children". AAP 2019 recommends it along with medication at ages 6 to 11 and as first line only for preschoolers. Corrected | A | medium |

## Key changes

- rn-s11-91. Before: keyed option "Protamine sulfate". After: keyed option "Calcium gluconate" (same position, index 1). Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin. The item as written taught a dangerous error. Needs Arjan's approval.

No key in the 50 imported items changed.

## Sources verified

- APA eating disorders guideline 2023, adolescent threshold of temperature under 36°C (96.8°F), heart rate under 50: https://psychiatryonline.org/doi/full/10.1176/appi.ajp.23180001 and https://www.guidelinecentral.com/guideline/1971974/
- Morgan and Townsend, Davis Advantage for Townsend's, 11th edition, 2023: https://www.amazon.com/Advantage-Townsends-Psychiatric-Mental-Nursing/dp/1719648247
- 42 CFR 482.13, face-to-face within 1 hour by a physician, licensed practitioner or trained RN, 4 hour adult order: https://www.law.cornell.edu/cfr/text/42/482.13
- ACOG Clinical Practice Guideline No. 4, 2023, postpartum psychosis as an emergency with onset within 2 weeks: https://pubmed.ncbi.nlm.nih.gov/37486660/
- DSM-5-TR prolonged grief disorder, 12 months in adults: https://www.healio.com/news/psychiatry/20210924/dsm5tr-to-include-prolonged-grief-disorder
- Child Welfare Information Gateway factsheet, 2019: https://www.childwelfare.gov/resources/what-child-abuse-and-neglect-recognizing-signs-and-symptoms
- DOJ OVW National Protocol, 3rd edition, 2024: https://www.justice.gov/ovw/media/1367191
- Wiglesworth A, et al. JAGS 57(7):1191, 2009, PMID 19558476: https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/j.1532-5415.2009.02330.x
- AAP ADHD guideline 2019, ages 6 to 11 recommendation: https://publications.aap.org/pediatrics/article/144/4/e20192528/81590/ and https://www.aafp.org/pubs/afp/issues/2020/0701/p58.html
- ACOG Practice Bulletin 222, 2020, Obstet Gynecol 135(6):e237: https://pubmed.ncbi.nlm.nih.gov/32443079/
- Calcium gluconate as antidote for magnesium toxicity: https://health.usf.edu/media/zdrpe3ja/magnesium_sulfate.pdf
- SOGC Guideline 426, 2022 (confirmed real, then replaced for US alignment): https://pubmed.ncbi.nlm.nih.gov/35577426/
- Vallerand and Sanoski, Davis's Drug Guide for Nurses, 18th edition, 2023: https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18

The remaining citations in `common.ts` (Halter 2022, Potter 2023, Hinkle 2022, Stanley and Brown 2012, TJC R3 18, Wesson and Ling 2003, TIP 63, TIP 57, SAMHSA TIC 2014, Miller and Rollnick 2023, WHO PFA 2011, CLAS 2013, Puchalski 2000, Fazio 2018, Worden 2018, Kroenke 2001, Hockenberry 2024, TJC LGBT 2011, ACOG OCC 10 2020) match the writer's verified list and their known bibliographic details.

## Numbers recomputed

- Item 10: 35.4°C is 95.7°F. Systolic fall 104 to 78 is 26 mmHg, above 20. Potassium 2.8 mEq/L equals 2.8 mmol/L.
- Item 23: 38.9°C is 102.0°F.
- Item 31: 37.4°C is 99.3°F. Heroin withdrawal at 20 hours fits onset of 8 to 24 hours.
- Item 40: PHQ-9 21 is severe, 16 moderately severe, 11 moderate, 7 mild. Item 9 is 0 from week 8.
- Item 07: 1410 plus 1 hour is 1510.
- Item 19: antidepressant day 10 before admission plus 4 unit days is about 2 weeks, consistent with energy returning.

## Needs Arjan's decision

- rn-s11-07 tests restraint time limits. The NCLEX test plan places use of restraints under Safety and Infection Control. The batch plan fixes all 50 items as PSY, so the tag was not changed. Consider moving the item to a SIPC batch or reframing it around behavioral crisis care.
- rn-s11-91 and rn-s11-92 are pharmacology items, not Psychosocial Integrity. Both are now tagged PPT. They do not belong in this PSY batch and should move to a PPT batch if kept.
- rn-s11-91 key change above.
- rn-s11-06: the order (move others away, calm verbal contact, offer a choice, then oral medication) is defensible under least restrictive care. Some texts put calm verbal contact first. Left as keyed.
- One early test run failed the bank-wide near duplicate gate. Three reruns passed 61 of 61. The failure was likely a concurrent edit in another batch. No s11 stem was involved in any passing run.

## Summary

52 items reviewed. 13 fixes across 11 items. 1 key change, in the unimported item rn-s11-91. 1 metadata flag left for Arjan on rn-s11-07. `npx tsc` prints nothing for s11 and `BATCH=s11 npx vitest run tests/bank.test.ts` passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
