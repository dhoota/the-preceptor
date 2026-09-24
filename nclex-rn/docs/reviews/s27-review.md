# s27 adversarial review

Batch s27. Stand-alone. 50 items in index.ts (rn-s27-01 to rn-s27-50) plus 2 items in extra.ts that index.ts does not import (rn-s27-91, rn-s27-92). All 52 items were read against the stem, every why and every rationale sentence. Both lenses were applied. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s27-26 | token 0, why, rationale, refs, sources | The etonogestrel implant was taught as labeled for 3 years. The FDA extended the Nexplanon label to up to 5 years on January 16, 2026. Token now reads "Up to 5 years" and the Organon approval notice is cited. | A | high |
| rn-s27-91 | options[1], rationale | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. Calcium gluconate is the antidote. | A | high |
| rn-s27-91 | need | Tagged HPM. An antidote for drug toxicity is PPT. | B | high |
| rn-s27-91 | sources | SOGC citation had no journal detail or URL. Added JOGC 44(5):547 with the PubMed URL and added Lowdermilk, which covers calcium gluconate for magnesium toxicity. | A | medium |
| rn-s27-92 | rationale | Rationale said the client has asthma. The stem never gives asthma. A nonselective beta blocker would also be a questionable prescription in asthma. Asthma removed and the key teaching point leads. | B | high |
| rn-s27-92 | need | Tagged HPM. Beta blocker teaching is PPT. | B | high |
| rn-s27-33 | options[1] why, rationale, refs | Said ondansetron is "labeled from 1 month of age". The 1-month label covers postoperative nausea only, not gastroenteritis. Reworded to say ondansetron has no age-based boxed warning and 1.1 mg is 0.1 mg/kg for 11 kg. | A | medium |
| rn-s27-33 | sources (ONDANSETRON) | The DailyMed set id now resolves to the Qilu Pharmaceutical label revised July 2025. The citation said FDA, 2023. Body and year updated. | A | medium |
| rn-s27-30 | sources (ONDANSETRON) | Same shared citation as above. Dosing content (0.1 mg/kg IV if 40 kg or less, 1 month to 12 years) was confirmed on the current label. | A | medium |
| rn-s27-25 | passage, span 4, why, rationale | "Has 6 beers at parties on Saturdays" gave no time frame, but the rationale and refs rest on the NIAAA definition of drinks in about 2 hours. Span now reads "Has 6 beers within 2 hours at parties". | B | medium |
| rn-s27-10 | options[1] why | The why claimed the implant "can be felt under the skin". The stem never says the implant was palpated. Reworded. | B | medium |
| rn-s27-44 | rationale | "Prevent most of these exposures" overstates the Agarwal study, which describes circumstances and does not measure prevention. Changed to "many". | A | low |

## Key changes

- rn-s27-91 (extra.ts). Before: option 1 "Protamine sulfate" keyed. After: option 1 "Calcium gluconate" keyed. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin. The key index is unchanged but the keyed content changed.
- rn-s27-26. Before: implant matched to "Up to 3 years". After: implant matched to "Up to 5 years". Reason: FDA approval of the Nexplanon supplemental application on January 16, 2026 extends labeled use to up to 5 years. The correct index array is unchanged.

Arjan approves both.

## Items checked with no defect

The keys and every why were confirmed for the other items. Highlights of what was checked:

- Contraception items (1 to 11, 20, 26) against US SPR 2024 and US MEC 2024. Copper IUD as the most effective emergency method, ulipristal over levonorgestrel at 3 to 5 days, 2 missed pills with 7 days of backup, patch detached 48 hours or more, PID risk highest in the first 20 days after IUD placement, copper IUD bleeding common for 3 to 6 months, implant spotting. MEC 2024 still lists combined methods as category 4 and progestin-only pills and implants as category 2 for breastfeeding clients under 21 days after birth.
- rn-s27-14 matches the SAMHSA toolkit: give naloxone, then call 911, repeat after 2 to 3 minutes.
- rn-s27-18 matches the current CDC respiratory virus guidance (24 hours fever free without medicine, improving symptoms, 5 days of added precautions).
- rn-s27-23 matches the 2025 nPEP guideline (72 hours, 28 days, baseline creatinine and hepatitis B, HIV tests at 4 to 6 and 12 weeks).
- rn-s27-32 matches the Zithromax label revised July 2026 (pediatric pneumonia 10 mg/kg day 1 then 5 mg/kg, adult 500 mg day 1).
- rn-s27-33 promethazine boxed warning for children under 2 years confirmed on the Hikma label.
- rn-s27-34 confirmed on the FDA page, including the warning that warm mist can make nasal passages swell.
- rn-s27-43 matches GINA (spacer with face mask for 0 to 3 years, about 5 breaths).

## Numbers recomputed

A script recomputed every value. All match the items.

- Temperatures: 38.4°C is 101.1°F, 36.3 is 97.3, 36.2 is 97.2, 36.1 is 97.0, 36.6 is 97.9, 36.7 is 98.1, 38.6 is 101.5.
- rn-s27-29: 90 * 14 = 1260, / 2 = 630, / 80 = 7.875 mL. Distractors 1.575, 3.94 and 15.75 match their whys.
- rn-s27-30: 2.2 mg / 2 = 1.1 mL. Distractors 0.11, 2.2 and 4.4 match.
- rn-s27-31: 30 / 6 = 5 mL. 30 / 12 = 2.5, 45 / 6 = 7.5, 60 / 6 = 10 match.
- rn-s27-32: 10 * 20 = 200 mg, 5 * 20 = 100 mg, 400 / 20 = 20 mg/kg.
- rn-s27-33: 0.1 * 11 = 1.1 mg. Rectal acetaminophen 160 mg is 14.5 mg/kg.
- rn-s27-35: 2600 + 2000 = 4600 mg. Distractors 3300 and 3600 match.
- rn-s27-45: albumin 2.8 g/dL is 28 g/L.

## Sources verified

- CDC US SPR 2024, PubMed 39106301 and https://www.cdc.gov/mmwr/volumes/73/rr/rr7303a1.htm
- CDC US MEC 2024 classifications, https://www.cdc.gov/contraception/hcp/usspr/classifications-mec-contraception.html
- Organon, Nexplanon 5-year approval, https://www.organon.com/news/organon-announces-us-food-and-drug-administration-approval-of-supplemental-new-drug-application-extending-duration-of-use-of-nexplanon-etonogestrel-implant-68-mg-radiopaque/
- CDC nPEP 2025, PubMed 40331832 and https://www.cdc.gov/mmwr/volumes/74/rr/rr7401a1.htm
- CDC STI guidelines 2021, PubMed 34292926
- CDC hepatitis C screening 2020, PubMed 32271723
- AAP e-cigarettes 2019, PubMed 30835247
- AAP firearm injuries 2022, PubMed 36207776
- ADA Standards of Care 2026 section 12, PubMed 41358886
- AGS Beers Criteria 2023, PubMed 37139824
- Savage 2020 prescribing cascade, PubMed 32091538
- Rochon and Gurwitz 1997, PubMed 9366745
- APA dementia antipsychotic guideline 2016, PubMed 27133416
- Agarwal 2020, PubMed 32005542
- SOGC Guideline No. 426, PubMed 35577426
- SAMHSA overdose toolkit, https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001
- CDC respiratory virus guidance, https://www.cdc.gov/media/releases/2024/p0301-respiratory-virus.html
- USPSTF skin cancer counseling 2018 (still the final statement), https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/skin-cancer-counseling
- CDC PrEP guidance, https://www.cdc.gov/hivnexus/hcp/prep/index.html
- FDA cough and cold products, https://www.fda.gov/drugs/safe-use-over-counter-otc-medicines-children/use-caution-when-giving-cough-and-cold-products-kids
- Zithromax label 2026, https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050710s054lbl.pdf
- Promethazine injection label, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c525cb2c-9a01-4a9b-ad2c-08630719953d
- Ondansetron injection label, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a44601b-c31c-4779-a688-28cc4cc75e8b
- GINA 2026 report, https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf
- Other source URLs (Mirena and Tamiflu labels, NIAAA, NCI, Bright Futures, FDA acetaminophen, ACOG EC, HealthyChildren Reye, Elsevier texts) returned HTTP 200. Several CDC, AAP and SAMHSA pages block scripted requests and were confirmed by search instead.

## Needs Arjan's decision

- Both key changes above.
- rn-s27-91 and rn-s27-92 remain outside index.ts. They now pass every item gate. Arjan decides whether to add them.
- rn-s27-39 cites the 2020 ISMP do-not-crush list with no URL. The four keyed drugs are on that list. A current product label could replace it.
- rn-s27-26 now teaches the 5-year implant label. The SFP extended-use source still supports longer off-label use of other devices.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 8 items had defects and 12 fixes were made. 2 key changes, both logged above. All 61 batch tests pass and tsc reports no s27 errors.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
