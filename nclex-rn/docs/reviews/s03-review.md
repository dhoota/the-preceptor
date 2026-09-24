# Adversarial review, batch s03

Reviewer scope: every file in `src/bank/s03/`. That is the 50 items rn-s03-01 to rn-s03-50 in `part1.ts` to `part5.ts`, the shared sources in `common.ts`, and the 2 items in `extra.ts` (rn-s03-91, rn-s03-92). `index.ts` does not import `extra.ts`. I reviewed both extra items as fully as the rest.

Both lenses were applied to every item. Every number was recomputed by script. Every citation was checked by WebSearch or WebFetch.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s03-92 (extra) | options[1], rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. Key content changed, see below. | A | high |
| rn-s03-91 (extra) | options[1].why | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". It acts over hours in the colon, which is the real reason it is not first. Rewritten. | A | high |
| rn-s03-91, rn-s03-92 (extra) | need | Both were tagged MOC. Hyperkalemia treatment and a magnesium antidote test pharmacological therapy. Changed to PPT. | B | medium |
| rn-s03-29 | sources (SEPSIS in common.ts) | Stale guidance. The 2021 Surviving Sepsis Campaign guideline is replaced by the 2026 guideline. Citation updated. | A | high |
| rn-s03-29 | stem option, why, rationale, refs | Under the 2026 guideline "possible sepsis without shock" gets a 3 hour window, and the 1 hour target applies to probable or definite sepsis or possible shock. "Suspected sepsis" now reads "probable sepsis". The claim "each hour of delay raises the risk of death" overstated the evidence and now reads "delay is linked to a higher risk of death". Key unchanged. | A | high |
| rn-s03-28 | sources (MERP in common.ts) | NCC MERP revised the Medication Error Index in October 2022. The citation gave 2001. Year and title updated. Category D wording in the rationale still matches the revised index. | A | high |
| rn-s03-26 | options[5].text | The family statement "Her expected life span is 6 months or less" asserted a prognosis the stem never gave and did not test hospice knowledge. Now "Hospice is for an expected life span of 6 months or less." Key unchanged. | B | medium |
| rn-s03-14 | options[1].text, options[2].text | The whys and rationale call both keyed clients "stable", but the options never said so. A client 3 days after a stroke is not stable by default. "stable" added to both options. | B | medium |

Arithmetic recomputed with no error found: rn-s03-10 (16 staff x 12 hours = 192, 192 / 25 = 7.68, day shift only 108 / 25 = 4.32, RN only 132 / 25 = 5.28, 192 / 24 = 8.00), rn-s03-19 (4 / 410 x 1000 = 9.8, 4 / 395 x 1000 = 10.1, 2 / 260 x 1000 = 7.7, 1 / 210 x 1000 = 4.8), rn-s03-48 trend values, rn-s03-27 targets, rn-s03-01 restraint time limits, rn-s03-44 amendment deadline.

## Key changes

| Item | Before | After | Reason |
|---|---|---|---|
| rn-s03-92 (extra) | "Protamine sulfate" keyed at position 1 | "Calcium gluconate" keyed at position 1 | Protamine reverses heparin and has no effect on magnesium. SOGC Guideline No. 426 (2022) gives calcium gluconate 10% IV when magnesium toxicity is clear. The key index is unchanged but the keyed answer changed. Arjan approves. |

No key in rn-s03-01 to rn-s03-50 was changed.

## Sources verified

| Source | Result | URL |
|---|---|---|
| CMS 42 CFR 482.13 (restraint, face to face within 1 hour, no PRN orders, 4 hour adult orders to 24 hours, visitation) | Supports 01, 22, 39 | https://www.law.cornell.edu/cfr/text/42/482.13 |
| HHS 45 CFR 164.526 (written request, 60 days plus 30, append or link) | Supports 44 | https://www.law.cornell.edu/cfr/text/45/164.526 |
| HHS 45 CFR 164.512(f) law enforcement | Supports 05 | https://www.hhs.gov/hipaa/for-professionals/faq/what-does-the-privacy-rule-allow-covered-entities-to-disclose-to-law-enforcement-officials/index.html |
| CMS 42 CFR 418.22 (6 months or less if the illness runs its normal course) | Supports 26 | https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-418/subpart-B/section-418.22 |
| NCSBN and ANA, National Guidelines for Nursing Delegation, 2019 | Supports 03, 15, 34, 42, 43 | https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf |
| NCSBN Nurse Licensure Compact (practice law of the state where the client is) | Supports 17. The FAQ page itself does not state the rule. The NLC "Nurses and the NLC" page does. | https://nursecompact.com/how-it-works/nurses-and-the-nlc.page |
| ASA, Ethical Guidelines for DNR Orders, reaffirmed October 2023 (required reconsideration) | Supports 13 | https://www.asahq.org/standards-and-guidelines/ethical-guidelines-for-the-anesthesia-care-of-patients-with-do-not-resuscitate-orders-or-other-directives-that-limit-treatment |
| Starmer et al., NEJM 2014, I-PASS | Supports 24 order | https://www.nejm.org/doi/full/10.1056/NEJMsa1405556 |
| NCC MERP Index, revised October 2022 (category D, E wording) | Supports 28 after year fix | https://www.nccmerp.org/types-medication-errors |
| Prescott et al., Surviving Sepsis Campaign 2026 | Replaces 2021 for 29 | https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026 |
| The Joint Commission, National Performance Goals effective January 2026, NPG 01.02.01 critical results | Supports timely reporting in 49 | https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82 |
| ANA, Addressing Nurse Fatigue, 2014 | Supports 33 | https://www.nursingworld.org/practice-policy/nursing-excellence/official-position-statements/id/addressing-nurse-fatigue-to-promote-safety-and-health/ |
| AHRQ PSNet, Alert Fatigue primer, 2019, reviewed 2024 | Supports 08 | https://psnet.ahrq.gov/primer/alert-fatigue |
| IHI, FMEA Tool | Supports 18 (proactive method). Year not shown on page. | https://www.ihi.org/library/tools/failure-modes-and-effects-analysis-fmea-tool |
| NCSBN, A Nurse's Guide to the Use of Social Media, 2024 | Year confirmed | https://www.ncsbn.org/brochures-and-posters/nurses-guide-to-the-use-of-socialmedia |
| HHS OCR, audio-only telehealth guidance, June 2022 (private settings, no speakerphone) | Partly supports 30, see below | https://www.hhs.gov/about/news/2022/06/13/hhs-issues-guidance-hipaa-audio-telehealth.html |
| SOGC Guideline No. 426, 2022 (calcium gluconate for magnesium toxicity) | Supports 92 after key change | https://pubmed.ncbi.nlm.nih.gov/35577426/ |
| Sodium polystyrene sulfonate onset 2 to 24 hours | Supports 91 fix | https://www.ncbi.nlm.nih.gov/books/NBK559206/ |

Textbook citations (Potter 11th 2023, Hinkle 15th 2022, Halter 9th 2022, Yoder-Wise 8th 2023, Melnyk 5th 2023, Beauchamp and Childress 8th 2019, Guido 7th 2020) match the published editions and support the fundamentals they are cited for.

## Needs Arjan's decision

- rn-s03-92 key change above.
- rn-s03-30. The item is a video visit. The cited HHS guidance is for audio-only telehealth. It supports private settings and avoiding speakerphone. The statement that public-facing apps are not allowed came from the 2020 enforcement discretion notice, which has expired. The teaching is still right under HIPAA, but a video-specific HHS source would fit better.
- rn-s03-17. The NLC citation points to the FAQ page, which does not state the practice-law rule. Consider pointing the URL to the "Nurses and the NLC" page.
- rn-s03-18. The IHI FMEA tool page shows no year. The 2017 date is the writer's estimate.
- rn-s03-25. The key option names the defect ("Two active metoprolol prescriptions") while the distractors read as chart entries. This is mild cueing that is hard to remove in this format. Left as is.
- rn-s03-91 and rn-s03-92 are pharmacology items in a Management of Care batch. I set need to PPT. They may belong in another batch.

## Summary

52 items reviewed, 50 in the bank and 2 in `extra.ts`. Defects found in 6 items: rn-s03-14, 26, 28, 29, 91 and 92. The fixes for 28 and 29 include their shared source entries in common.ts. 8 fixes were made. 1 key change (rn-s03-92). `npx tsc` shows no s03 errors and `BATCH=s03 npx vitest run tests/bank.test.ts` passes 61 of 61. The extra items also pass `itemProblems` with no findings.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
