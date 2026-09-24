# Batch c07 adversarial review

Scope: all five case files, `helpers.ts`, and `extra.ts`. `extra.ts` is not imported by `index.ts`. Its two items were reviewed as well.

Both lenses were applied. Every number was recomputed with a script. The keys stand in all 30 case items.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c07-2-1 | source (SRC.tjc) | The cited 2019 NPSG 15.01.01 report is superseded for hospitals. National Performance Goal 8 replaced it on 1 January 2026. The source now names NPG.08.01.01. | A | high |
| rn-c07-2-6 | stem | The client voiced a passive death wish in 2-1, yet he is discharged with no suicide assessment in the case. NPG.08.01.01 EPs 3 to 7 apply to every patient who expresses suicidal ideation. The stem now states a suicide risk assessment found no plan or intent and his safety plan is documented. | A | medium |
| rn-c07-2-6 | option why | Breathlessness was called an early sign of fluid overload. It is a later sign. The why now says the signs show fluid is building up. | A | low |
| rn-c07-3-1 | rationale | "A closed smoky room" was never given. The intro says a smoke-filled bedroom. Wording now matches the intro. | B | medium |
| rn-c07-3-3 | rationale | "Chest pain" misstated the option, which is pain in the burned chest. Chest pain reads as cardiac. | B | low |
| rn-c07-3-4 | refs | The ref said a booster is due at "5 years or more". ACIP says more than 5 years. | B | high |
| rn-c07-4-3 | option why | The bed alarm why claimed he "is not trying to get up". The case never says so. The why now compares urgency only. | B | medium |
| rn-c07-9 (extra.ts) | rationale | The rationale said "this client has asthma". The stem gives only hypertension. A client with asthma should not receive propranolol, so the claim also contradicts the prescription. The rationale was rewritten to trace to the stem and lead with the key. | A and B | high |
| rn-c07-8 (extra.ts) | option 3 | "Elevate the bed head 30 degrees" was the same action as the key, so two options were defensible keys. Replaced with "Give mouth care with a swab", a plausible peer action that does not address the risk. | A | high |

Nine fixes in total.

## Key changes

None.

## Numbers recomputed

- 1-2: free T4 5.8 ng/dL is 74.6 pmol/L and 3.2 times the upper limit of 1.8.
- 2 tabs: BUN 118 mg/dL is 42.1 mmol/L. Glucose 188 mg/dL is 10.4 mmol/L. Weight gain 84.2 minus 78 is 6.2 kg.
- 2-5: 2 g is 2000 mg. 2000 divided by 100 mg/mL is 20 mL. 10 mL holds 1000 mg. 200 mL is 10 times.
- 3-5: 2 times 70 times 27 is 3780 mL. Half is 1890 mL. Over 6 hours is 315 mL/hour. Over 8 hours is 236 mL/hour. 3780 over 8 is 473 and over 6 is 630.
- 3 tab: anterior trunk 18% plus the front of both arms 9% gives 27% by the rule of nines.
- 4-5: 4 times 58 is 232 mL. 232 times 60 over 15 is 928 mL/hour. 232 mL/hour takes 60 minutes, four times too long. 464 mL/hour takes 30 minutes. 5 mL/kg gives 1160 mL/hour.
- 4-1: pulse pressure widens from 52 to 86 mmHg. Heart rate falls from 84 to 58/minute.
- 5-6: 130 minus 96 is 34 mmHg, above the 20 mmHg threshold.
- Temperatures: 39.8°C is 103.6°F, 36.4°C is 97.5°F, 37.4°C is 99.3°F, 36.8°C is 98.2°F. All convert.

## Sources verified

- ATA 2016 hyperthyroidism guideline, Thyroid 26(10):1343. Table 7 confirmed: propranolol 60 to 80 mg every 4 hours, PTU 500 to 1000 mg load, SSKI 5 drops every 6 hours not started until 1 hour after antithyroid drugs, hydrocortisone 300 mg IV load. Abrupt cessation of antithyroid drugs and nonthyroidal surgery are listed precipitants. Pharyngitis and fever teaching confirmed. https://journals.sagepub.com/doi/10.1089/thy.2016.0229 and https://nursing.duke.edu/sites/default/files/media/main/hyperthyroidism_guidelines_2016.pdf
- Clase CM et al. KDIGO potassium conference. Kidney Int 97:42 to 61, 2020. https://www.kidney-international.org/article/S0085-2538(19)31012-9/fulltext
- American Burn Association referral guidelines. Full thickness burns, partial thickness 10% or more, deep burns of the hands, burns with other comorbidities and all suspected inhalation injury confirmed. No adult age criterion. https://ameriburn.org/resources/burnreferral/
- Cartotto R et al. ABA burn shock resuscitation guideline. J Burn Care Res 45(3):565, 2024. Starting at 2 mL/kg/%TBSA confirmed. https://pubmed.ncbi.nlm.nih.gov/38051821/
- Havers FP et al. MMWR 69(3):77 to 83, 2020. Booster for wound management when more than 5 years have passed. https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a5.htm
- Kochanek PM et al. Neurosurgery 84:1169 to 1178, 2019. Bolus 3% saline 2 to 5 mL/kg over 10 to 20 minutes confirmed. https://pubmed.ncbi.nlm.nih.gov/30829890/
- Krassioukov A et al. J Spinal Cord Med 44(4):631 to 683, 2021. Threshold more than 20 mmHg above baseline, sit up and lower legs, loosen devices, BP every 1 to 2 minutes, lidocaine jelly, ask about PDE5 inhibitors before nitropaste, avoid suprapubic tapping, drug before the rectal check at 150 mmHg or more, monitor at least 2 hours after an episode. https://pmc.ncbi.nlm.nih.gov/articles/PMC8288133/
- The Joint Commission. National Performance Goals Effective January 2026 for the Hospital Program, NPG.08.01.01. EPs 3 to 7 apply to all patients who express suicidal ideation. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82 and https://www.jointcommission.org/en-us/standards/national-performance-goals/reducing-the-risk-for-suicide
- The Joint Commission R3 Report Issue 18 was confirmed as real but superseded for hospitals. https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18
- Davis's Drug Guide for Nurses, 18th edition, 2023, confirmed. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- USPSTF 2023 JAMA 329(23):2057, NCSBN and ANA delegation 2019, Davidson 2017 Crit Care Med 45(1):103, ISBI 2016 Burns 42(5):953, ASPEN 2017 JPEN 41(1):15, PVA 2001 acute AD guideline, Brunner 15th edition 2022 and Wong's 12th edition 2023 match their published details.

## Needs Arjan's decision

- rn-c07-1-5. The propranolol 60 mg every 4 hours prescription stands while 1-3 showed BP 98/58 mmHg with new crackles. ATA Table 7 advises caution and invasive monitoring in heart failure. The item tests iodide timing, so the key is safe. A nurse would question this dose, though, and the item never says so. Consider adding a BP at 0800 or changing the beta blocker to esmolol.
- rn-c07-3-4. The why for the ointment says topical agents are held until the burn team assesses the wound. A clean dry dressing before transfer is well supported. I could not open the ABLS manual to confirm the explicit hold on topical agents. The key does not change either way.
- rn-c07-3-5. The stem says no IV fluid was given before 0400, 90 minutes after arrival, for a 27% burn. That depicts delayed resuscitation as routine. The arithmetic needs the delay. Consider a reason in the stem, such as failed IV access until intraosseous access at 0400.
- rn-c07-3 tabs. The 27% estimate equals the anterior trunk and anterior arms. The full-thickness dorsal hand burn would add about 1%. It changes no key.
- rn-c07-1-2. The hemoglobin reference range is in g/L while the result is in g/dL. A g/dL range with its SI pair fails the unit gate in an item tab, so it was left as is.
- extra.ts. Ids rn-c07-8 and rn-c07-9 do not follow the case id scheme. They cannot join this case batch as stand-alone items without new ids.
- During the review the whole bank near duplicate test briefly failed on rn-c01-1-1 and rn-c03-1-1 against rn-c12-1-1, while batch c12 was being written. No c07 item was involved, and it passed on the final run.

## Summary

32 items reviewed, 30 in the cases and 2 in `extra.ts`. 9 fixes across 8 items. 0 key changes. 7 points flagged for Arjan. `BATCH=c07 npx vitest run tests/bank.test.ts` passes 44 of 44, and tsc reports no c07 errors.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
