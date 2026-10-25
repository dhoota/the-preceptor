# Batch s32 review

Adversarial review of batch s32 (45 Health Promotion and Maintenance items and 5 Safety and Infection Prevention and Control items). Scope was all 50 items in `part1.ts` to `part5.ts`. The batch has no extra file outside `index.ts`. Both lenses were applied to every item. Every why and rationale sentence was read against its stem. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s32-01 | rationale | Claimed the aunt was "on the same side of the family", which the option never states. Also discussed dense breast tissue, which no option or stem mentions. Both claims removed. | B | high |
| rn-s32-09 | rationale | Said black cohosh lacks evidence, but black cohosh is not an option in this item. Removed. | B | high |
| rn-s32-18 | options[0], why | Why said "a gradual change in both ears", but the option never says both ears. Option wording "in over 3 years" was also unclear. Both fixed. | B | medium |
| rn-s32-22 | stem | Options use "she" but the stem gave no sex. Stem now says "A 5-year-old girl". | B | low |
| rn-s32-26 | options[3] | "Skip the next HPV dose" assumes a multi-dose schedule. The January 2026 CDC schedule and NACI 2024 give 1 dose at this age, so the option depended on a contested dose count. Now "skip future vaccines". | A | high |
| rn-s32-29 | sources | Rested only on a 2001 AAP statement. Added the current AAP HealthyChildren page (updated April 2025), which confirms ages 12 and 16, no passengers and young children indoors. | A | medium |
| rn-s32-38 | conditions[3].why | Said a cesarean birth does not fit a femur fracture. Femur fractures do occur at breech cesarean extraction, so the reason was false. Now rests on the Ortolani clunk pointing to the hip joint. | A | high |
| rn-s32-48 | rationale | "Some people with dense tissue benefit from added imaging" overstates the evidence. USPSTF 2024 calls it insufficient. Now "Added imaging may help some people". | A | medium |
| rn-s32-49 | sources | Cited only a textbook. Added the AAP HealthyChildren dog bite page, which supports adult supervision and leaving a sleeping or eating dog alone. | A | medium |

## Key changes

None.

## Writer flags resolved

- rn-s32-25 and 26 (HPV). Item 25 tests only timing before exposure, which holds under every schedule. Item 26 had one option that assumed a later HPV dose. Fixed as above.
- rn-s32-12, 13 and 45 (USPSTF 2018). The USPSTF site lists the prostate statement of 8 May 2018 and the cervical statement of 21 August 2018 as the current final ones. Both are marked as being updated. The December 2024 cervical draft keeps the same intervals for the ages used.
- rn-s32-16 and 17 (older drivers). The AGS guide still could not be opened. The warning signs and the referral for a driver rehabilitation evaluation match the guide summaries found. Medium confidence.
- rn-s32-29 and 49. Current AAP sources added, as above.
- rn-s32-24 (lead in words). The value is correct. 6 times 0.0483 is 0.29 micromol/L.

## Uniqueness

Each topic and teaching point was searched in `inventory.txt`, `cases.txt` and `new500.txt`. No item duplicates an existing teaching point. Closest neighbours:

- rn-s32-40 and rn-c18-4-2. Both teach that a measles dose before 12 months does not count. Item 40 tests the early travel dose from 6 months, which c18-4-2 does not teach.
- rn-s32-45 and rn-s09-34. The s09 item covers mammography, colorectal, bone density and lung screening at 66. It has no cervical content.
- rn-s32-50 and rn-s27-44. The s27 item teaches storage around grandchildren. Item 50 teaches disposal.
- rn-s32-01 and rn-s30-10 and 11. The s30 items test BRCA disclosure ethics. Item 01 tests family history referral criteria.
- rn-s32-43 and 46 share the 85 decibel figure but test different points: a threshold shift and its response, and enrolment in the program.

## Sources verified

- USPSTF prostate 2018 and cervical 2018, current status read on the USPSTF site. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening and https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening
- US MEC 2024 appendix. Nonbreastfeeding 21 to 42 days with risk factors (postcesarean delivery and preeclampsia listed) is category 3 for combined methods and 1 after 42 days. https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm
- AAP HealthyChildren, Lawnmower Safety, updated 3 April 2025. https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Lawnmower-Safety.aspx
- AAP HealthyChildren, Dog Bite Prevention Tips, 2018. https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Dog-Bite-Prevention-Tips.aspx
- The writer's other citations were spot checked against PubMed, Crossref and the eCFR records named in the writer report. No defect was found.

## Numbers recomputed

- rn-s32-24: 6 times 0.0483 is 0.29 micromol/L.
- rn-s32-31: 21.0 times 1.2 is 25.2. 23.4 falls between 21.0 and 25.2.
- rn-s32-42: prevalence 1500 of 50 000 is 3.0% and 1770 of 50 000 is 3.5%. New cases stay between 118 and 122.
- rn-s32-43: shifts of 10, 15 and 25 dB average 16.7 dB, which is 10 or more.
- rn-s32-47: 48 of 12 000 is 4.0 per 1000. The distractors 3.9, 32.3 and 36.1 match 48, 400 and 448 over 12 400.

## Needs Arjan's decision

- rn-s32-16 and 17 rest on the AGS and NHTSA guide, which no reviewer could open. Keep or add a second source.
- rn-s32-10 orders "get medical care for the child" before "stay out until the fire department clears the home". Both happen while the family is outside. The order is defensible but is the weakest step in the item.
- rn-s32-49 keys "stand still" for a strange dog. The archived CDC page supports it. The AAP page advises staying calm and backing away slowly. Both are consistent with not running.

## Summary

- Items reviewed: 50.
- Fixed with the key unchanged: 9 (01, 09, 18, 22, 26, 29, 38, 48, 49). Each now has version 2.
- Pulled: none.
- Key changes: none.
- Passed unchanged apart from a Canada note: 41.
