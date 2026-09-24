# s14 review

Batch s14. Basic Care and Comfort. 50 stand-alone items in `part1.ts` to `part5.ts`, plus 2 items under consideration in `extra.ts` (rn-s14-91 and rn-s14-92) that `index.ts` does not import. All 52 items were read against both lenses. Every number was recomputed with a script (items 34, 35, 10, 40, 37 and every temperature pair).

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s14-91 | option 1 text and why (key) | Protamine was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s14-91 | rationale | Rationale taught protamine for magnesium toxicity. Rewritten for calcium gluconate 10% IV, per SOGC 2022. | A | high |
| rn-s14-91 | flumazenil why | Claimed the client "did not receive" benzodiazepines. The stem never says so. Now states the client has magnesium toxicity. | B | medium |
| rn-s14-91 | need | Tagged BCC. An antidote item tests Pharmacological and Parenteral Therapies. Now PPT. The SOGC citation now carries its PubMed URL. | B | high |
| rn-s14-92 | rationale | Rationale said "this client has asthma". The stem gives no asthma. Rewritten around the key (abrupt stopping) without the invented history. | B | high |
| rn-s14-92 | need | Tagged BCC. Beta blocker teaching is PPT. | B | high |
| rn-s14-04 | rationale | Said 500 mL is "the level at which feeding is held". SCCM and ASPEN 2016 say only that feeding is not held below 500 mL without other signs of intolerance. Reworded to match. | A | medium |
| rn-s14-05 | baked potato why | The why added "with its skin", a detail the option never gave. Removed. | B | low |
| rn-s14-20 | rationale | Used "prescriber". House terminology is primary health care provider. | B | low |
| rn-s14-40 | keyed option text | "Stool form nearing type 4" when the diary shows type 4 at week 6. Now "reaching type 4". | B | low |
| rn-s14-42 | sources | Fan to the face for breathlessness rested only on Hinkle, which the writer could not confirm states it. Added the ASCO 2021 dyspnea guideline, which recommends a fan directed at the cheek. | A | medium |
| rn-s14-50 | walker option why | Said "this client is stable". The handoff gives no data on that client's stability. Now says nothing in the handoff suggests instability. | B | medium |

## Key changes

- rn-s14-91. Before: "Protamine sulfate" keyed at position 1. After: "Calcium gluconate" keyed at position 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (SOGC Guideline No. 426, 2022). Protamine reverses heparin. The keyed answer taught a false and dangerous antidote. The key index is unchanged but the keyed content changed. Arjan must approve.

## Sources verified

- SOGC Guideline No. 426 (Magee 2022), calcium gluconate 10% for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/35577426/ and https://sogc.org/common/Uploaded%20files/ACSC/ACSC2024/gui426CPG2205E.pdf
- Hui D et al. Management of Dyspnea in Advanced Cancer: ASCO Guideline. J Clin Oncol 39(12):1389. 2021. Fan directed at the cheek may be offered. https://pubmed.ncbi.nlm.nih.gov/33617290/
- McClave SA et al. SCCM and ASPEN 2016. Avoid holding feeding for residuals under 500 mL without other signs of intolerance. https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1177/0148607115621863
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy 2017. Warm water first, no cranberry juice or carbonated drinks. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- NIDDK Dumping Syndrome, eating and diet page, last reviewed January 2019. Six small meals, liquids 30 minutes after meals, lie down after meals. https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/eating-diet-nutrition
- NIH ODS Iron fact sheet. Vitamin C enhances nonheme iron. Polyphenols and calcium inhibit it. https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/
- Lowdermilk et al. Maternity and Women's Health Care, 13th edition, Elsevier, March 2023. https://www.us.elsevierhealth.com/maternity-and-womens-health-care-9780323810180.html
- Vallerand AH, Sanoski CA. Davis's Drug Guide for Nurses, 18th edition, F.A. Davis. Published May 2022 with a 2023 edition date. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- AAOS Management of Hip Fractures in Older Adults, 2021. Preoperative traction should not routinely be used. https://www.aaos.org/hipfxcpg
- Potter and Perry sleep deprivation signs (ptosis, slowed response, pain sensitivity, irritability) confirmed in summaries of chapter 43, 11th edition.
- The remaining journal citations in `common.ts` (Chung 2008, Edinger 2021, WOCN 2018, Gould 2009, Qaseem 2014, ANA 2021, Ikizler 2020, Heidenreich 2022, Rubio-Tapia 2023, Elad 2020, Schwartz 2017) match their stated journal, volume and year.

## Needs Arjan's decision

- rn-s14-12 (listed as a defect, not edited). The stem places Buck's traction on an 82-year-old with a hip fracture before surgery. The AAOS 2021 guideline advises against routine preoperative traction for hip fracture. The nursing care taught is correct, but the scenario models a practice current guidance discourages. Options: keep it and state that traction is prescribed, or move the scenario to another traction indication.
- rn-s14-91 key change above.
- rn-s14-91 and rn-s14-92 are pharmacology items now tagged PPT. They do not fit a Basic Care and Comfort batch and may belong elsewhere.
- rn-s14-35 is rated difficulty 4 for a two-step addition. A lower rating would be more honest, but level 3 already holds 20 of 50, so a change needs rebalancing across the batch.

## Summary

52 items reviewed (50 in the bank and 2 in `extra.ts`). 9 items had defects: rn-s14-04, rn-s14-05, rn-s14-12, rn-s14-20, rn-s14-40, rn-s14-42, rn-s14-50, rn-s14-91 and rn-s14-92. 12 fixes were made across 8 items. 1 key change (rn-s14-91). rn-s14-12 is left for Arjan. Every number recomputed correctly. `npx tsc` shows no s14 errors and `BATCH=s14 npx vitest run tests/bank.test.ts` passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
