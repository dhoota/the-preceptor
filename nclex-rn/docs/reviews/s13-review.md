# Batch s13 adversarial review

Scope: every .ts file in src/bank/s13. That covers the 50 bank items in part1.ts to part5.ts, which index.ts imports, and the 2 items in extra.ts (rn-s13-91 and rn-s13-92), which index.ts does not import. extra.ts was replaced at 16:39 after the earlier review. Its two items are new and were reviewed from scratch. The 50 bank items were read again in full under both lenses, including the fixes and Canada notes made earlier today. This report replaces the earlier s13 report.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s13-92 | option 3 text and why | "Elevate the bed head 30 degrees" was the same action as the key "Raise the head of the bed". Its own why said so. The item had two defensible keys. The option is now "Slow the feeding rate by half", a peer action that does not remove the risk of lying flat. | A | high |
| rn-s13-92 | sources | The ASPEN citation had an abbreviated journal name and no link. It now gives the full journal name and the PubMed link. | A | low |
| rn-s13-91 | rationale | The rationale said "this client has asthma". The stem gives hypertension only. Propranolol is also contraindicated in bronchial asthma, so the claim would make the prescription itself unsafe. The rationale now explains the key (sudden stopping causes rebound tachycardia, high BP and angina) and states bronchospasm as a general risk of a nonselective beta blocker. | B | high |
| rn-s13-91 | need | Tagged BCC. Teaching about a beta blocker tests Pharmacological and Parenteral Therapies. Now PPT. | B | medium |
| rn-s13-91 | sources | Cited Davis's Drug Guide for Nurses, 18th edition, 2023. The 19th edition (Vallerand and Sanoski, F.A. Davis, 2024) replaces it. | A | medium |

No bank item needed a new fix. The fixes from the earlier review are in place and hold up (items 05, 06, 07, 14, 16, 18, 23, 30, 38, 41 and 50, and the shared citations in common.ts).

## Key changes

None. The key of rn-s13-92 stays option 1, "Raise the head of the bed". Only the duplicate distractor changed.

## Numbers recomputed by script

- Item 04: 240 + 180 + 120 + 150 = 690, 75 * 8 = 600, total 1290 mL. Distractors 1140 (no gelatin) and 1530 (eggs as 240 mL) match their whys.
- Item 12: 1440 / 20 = 72 mL/hour. Distractors 60 (1440 / 24), 50 ((1440 - 240) / 24) and 360 (1440 / 4) match their whys.
- Item 19: systolic fell 24 mmHg, diastolic 12 mmHg, heart rate rose 20/minute. Both BP falls meet the ref thresholds.
- Item 20: weight fell 1.4 kg, intake fell 800 mL, output fell 850 mL.
- Item 25: 81 / 2.89 = 28.03. 81 / 3.40 = 23.8 and 81 / 1.70 = 47.6 match their whys. CDC bands match the ref.
- Item 10: 37.0°C is 98.6°F. Item 40: sleep rose 3.0 hours, latency fell 50 minutes, awakenings fell by 4.
- tsc reports nothing for bank/s13. Both extra.ts items pass itemProblems, checked with a script in the scratchpad.

## Sources verified

- PubMed records read through the NCBI E-utilities API, each matching the cited authors, journal, volume and pages:
  - Boullata JI et al., ASPEN Safe Practices for Enteral Nutrition Therapy, JPEN 41(1):15, 2017. https://pubmed.ncbi.nlm.nih.gov/27815525/
  - ADA Standards of Care in Diabetes 2026, section 12, Diabetes Care 49(Suppl 1):S261. https://pubmed.ncbi.nlm.nih.gov/41358886/
  - Prabhakaran S et al., 2026 AHA and ASA acute ischemic stroke guideline, Stroke 57(8):e316. https://pubmed.ncbi.nlm.nih.gov/41582814/
  - Ayello EA, Braden B, Adv Skin Wound Care 15(3):125, 2002. https://pubmed.ncbi.nlm.nih.gov/12055446/
  - Edinger JD et al., AASM insomnia guideline, J Clin Sleep Med 17(2):255, 2021. https://pubmed.ncbi.nlm.nih.gov/33164742/
  - Qaseem A et al., ACP urinary incontinence guideline, Ann Intern Med 161(6):429, 2014. https://pubmed.ncbi.nlm.nih.gov/25222388/
  - Qaseem A et al., ACP low back pain guideline, Ann Intern Med 166(7):514, 2017. https://pubmed.ncbi.nlm.nih.gov/28192789/
  - Chou R et al., ACP and APS low back pain guideline, Ann Intern Med 147(7):478, 2007. https://pubmed.ncbi.nlm.nih.gov/17909209/
  - WOCN ostomy guideline executive summary, J Wound Ostomy Continence Nurs 45(1):50, 2018. https://pubmed.ncbi.nlm.nih.gov/29300288/
  - AACN Practice Alert, Prevention of Aspiration in Adults, Crit Care Nurse 36(1):e20, 2016. https://pubmed.ncbi.nlm.nih.gov/26830190/
  - Warden V et al., PAINAD, J Am Med Dir Assoc 4(1):9, 2003. https://pubmed.ncbi.nlm.nih.gov/12807591/
- International pressure injury guideline, 2026 edition, final version September 2026. https://internationalguideline.com/the-international-guideline
- CDC Adult BMI Categories, including the three obesity classes. https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html
- ASPEN open system hang time of 8 hours in hospital and 12 hours at home, as summarized by ASPEN hang time material. https://nutritioncare.org/wp-content/uploads/2025/04/BUD-Hang-Time-Guideline-Protocol-Finalized-after-public-comment.pdf
- Davis's Drug Guide for Nurses, 19th edition, Vallerand AH and Sanoski CA, F.A. Davis, 2024. https://www.abebooks.com/9781719650038/Daviss-Drug-Guide-Nurses-Vallerand-1719650039/plp
- Propranolol prescribing information: contraindicated in bronchial asthma, and abrupt stopping can worsen angina. https://www.drugs.com/pro/propranolol.html
- PAINAD tool instructions give 1 to 3 mild, 4 to 6 moderate and 7 to 10 severe as a possible reading, not validated. https://aci.health.nsw.gov.au/__data/assets/pdf_file/0017/212921/Pain-assessment-advanced-dementia-scale.pdf

## Needs Arjan's decision

- rn-s13-91 and rn-s13-92: decide whether either joins the bank. Item 91 now tests PPT, not this batch's area. Item 92 overlaps with bank items 11 and 39, which test the same head of bed point.
- rn-s13-37: the ref says PAINAD totals of 4 to 6 mean moderate pain. Warden 2003 did not publish bands. The tool instructions call the bands a possible reading that the literature has not confirmed. Also, moaning, a frown and guarding alone score about 3 or 4. The stated total of 6 implies findings the stem does not give. Consider giving the other findings or a lower total.
- rn-s13-03, 10 and 38: the earlier review's difficulty and distractor concerns still stand.
- rn-s13-16: the why for the rigid brace is sound practice, but neither cited guideline covers bracing.

## Summary

52 items reviewed: 50 in the bank and 2 in extra.ts. I made 5 fixes across 2 items, both in extra.ts: rn-s13-91 and rn-s13-92. The main defects were a duplicate distractor that gave item 92 two keys and an invented asthma history in item 91. There are no key changes. No new defect was found in the 50 bank items. BATCH=s13 vitest passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
