# s12 review

Batch s12. Stand-alone. Psychosocial Integrity. I reviewed the 50 items in part1.ts to part5.ts and the 2 items in extra.ts, which index.ts does not import. I used Lens A and Lens B from docs/REVIEW_BRIEF.md.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s12-02 | source ENA_HT | Year 2023 did not match the linked PubMed record, which is the 2024 Journal of Forensic Nursing version. Year and work updated | A | high |
| rn-s12-02 | rationale, option 6 why | Said the history "does not match the findings". The option and stem give no findings to mismatch. Now "rehearsed and vague" | B | medium |
| rn-s12-06 | rationale | Said neither account fits an infant who cannot roll. A changing table fall can happen to a non-rolling infant. Now names the couch account only. The conflict between accounts carries the concern | A | medium |
| rn-s12-10 | stem, rationale | Rationale and why relied on normal hearing, which the stem never gave. Added "has normal hearing" to the stem | B | medium |
| rn-s12-33 | key why | Said buprenorphine "will not" precipitate withdrawal. Meeting the threshold makes it unlikely, not impossible | A | high |
| rn-s12-33 | option 2 why | Called a COWS score of 25 severe. The ref and COWS bands put 25 to 36 at moderately severe | A, B | high |
| rn-s12-34 | stem | Options use "he" and "his" but the stem gave no sex. Stem now says "14-year-old boy" | B | high |
| rn-s12-35 | sources | The ref "1 minute per year of age" was not in Sege and Siegel 2018. Added the AAP HealthyChildren.org time-out page, which states it | A | high |
| rn-s12-42 | rationale | Called the pressure injury "untreated". The stem does not say so. Now "A stage 3 pressure injury" | B | medium |
| rn-s12-43 | option 3 why | Claimed "he is not a danger", a fact the stem never gave. Clause removed | B | medium |
| rn-s12-44 | source CDC_TDV | The CDC page was last updated January 14, 2025. Year 2024 changed to 2025 | A | medium |
| rn-s12-91 (extra.ts) | option 2 why | Said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts over hours. The reason for rejecting it was false | A | high |
| rn-s12-91 (extra.ts) | need | PSY is wrong for hyperkalemia. Set to PA | B | high |
| rn-s12-92 (extra.ts) | key option | Keyed protamine sulfate as the magnesium antidote. Protamine reverses heparin. Calcium gluconate is the antidote | A | high |
| rn-s12-92 (extra.ts) | need, rationale | PSY is wrong for a drug antidote item. Set to PPT. Rationale now names calcium gluconate | A, B | high |

## Key changes

- rn-s12-92 (extra.ts). Before: "Protamine sulfate" keyed at index 1. After: the keyed option at index 1 now reads "Calcium gluconate". Reason: calcium gluconate is the standard antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no role here. The index is unchanged but the keyed answer is different, so Arjan must approve it.

## Sources verified

- ENA and IAFN. Human Trafficking Awareness in the Emergency Care Setting: Joint Position Statement. Journal of Forensic Nursing 20(3):E53, 2024. https://pubmed.ncbi.nlm.nih.gov/39102314/ and https://journals.lww.com/forensicnursing/citation/2024/09000/human_trafficking_awareness_in_the_emergency_care.14.aspx
- Brunner E, et al. Joint Clinical Practice Guideline on Benzodiazepine Tapering. J Gen Intern Med 40(12):2814, 2025. https://pubmed.ncbi.nlm.nih.gov/40526204/
- Halm MA, et al. AACN Practice Alert on family presence. Critical Care Nurse 44(2):e1, 2024. https://aacnjournals.org/ccnonline/article/44/2/e1/32253/Facilitating-Family-Presence-During-Resuscitation
- Pang L. Charles Bonnet Syndrome. Optometry and Vision Science 93(12):1466, 2016. https://pubmed.ncbi.nlm.nih.gov/27529611/
- CDC. About Teen Dating Violence, updated January 14, 2025. https://www.cdc.gov/intimate-partner-violence/about/about-teen-dating-violence.html
- ASAM Clinical Practice Guideline on Alcohol Withdrawal Management, 2020. CIWA-Ar under 10 mild, 10 to 18 moderate, 19 or more severe. This supports the rn-s12-08 ref. https://journals.lww.com/journaladdictionmedicine/fulltext/2020/06001/the_asam_clinical_practice_guideline_on_alcohol.1.aspx
- COWS bands, 5 to 12 mild and 13 to 24 moderate, support the rn-s12-33 ref. https://www.mdcalc.com/calc/1985/cows-score-opiate-withdrawal
- American Academy of Pediatrics. How to Give a Time-Out. HealthyChildren.org, 2018. States 1 minute for each year of age. https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Time-Outs-101.aspx
- Magee LA, et al. SOGC Guideline No. 426: Hypertensive Disorders of Pregnancy, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Trafficking indicators for rn-s12-02 (companion who will not leave, documents held by a companion, branding tattoos, scripted history) match ED guidance. https://www.acepnow.com/article/recognizing-human-trafficking-victims-as-patients-in-the-emergency-dept/
- The remaining citations match the standard bibliographic records. These are Christian 2015, Dong 2015, USPSTF 2018, Sechi 2007, Inouye 2014, Cavanagh 2020, McEwen 2007, Sege 2018, Winstein 2016, TIP 63 and the textbook editions.

## Numbers recomputed

A script checked every unit pair. 36.8°C is 98.2°F. 37.6°C is 99.7°F. Glucose 74, 92 and 118 mg/dL are 4.1, 5.1 and 6.5 mmol/L, all within 3 percent. Hemoglobin 14.2 g/dL is 142 g/L. Alprazolam 2 mg three times daily is 6 mg a day. The rn-s12-08 flow sheet runs 6 hours from 0600 to 1200. I found no arithmetic errors.

## Needs Arjan's decision

- Approve the rn-s12-92 key change.
- rn-s12-91 and rn-s12-92 in extra.ts test hyperkalemia and magnesium toxicity. They do not belong in a Psychosocial Integrity batch. I recommend moving them to a physiological batch or dropping them rather than adding them to s12.
- rn-s12-44: the "visit for a headache" distractor. Headaches can go with partner violence, but the keyed bruises and phone checks are clearly stronger. I left it as written.
- rn-s12-44: the CDC page covers physical violence and psychological control but does not name phone checking. Halter is also cited and covers controlling behavior.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. I made 15 fixes across 11 items. There is 1 key change, in extra.ts. There were no key changes in the 50 bank items. Typecheck is clean for bank/s12 and all 61 tests in BATCH=s12 bank.test.ts pass.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
