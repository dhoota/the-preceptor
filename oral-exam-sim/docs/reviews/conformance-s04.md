# Format conformance: batch s04 (asthma-copd, burns)

Scope: `src/samps/s04/asthma-copd.ts` and `src/samps/s04/burns.ts`. 30 SAMPs and 119 questions (87 write-in, 30 single, 2 menu). This pass changed format only. No `correct` target, `select`, `required`, `accept`, `unacceptable`, key feature or source id changed. Every `correct` index was remapped by script to the same keyed text, and the result was checked against the pre-edit data.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 119 of 119 |
| Options added | 0 (no single question had 4 options) |
| Options removed | 3 (asthma-copd-05 q1 "CT chest", asthma-copd-12 q2 "Oral theophylline", asthma-copd-13 q1 "Panic attack") |
| Options reworded, all | 85 |
| Options reworded, distractors | 70 |
| Keyed options reworded | 15 (in 14 SAMPs) |
| Stems changed | 30 |
| SAMPs with vitals moved to the `vitals` field | 28 (burns-03 and burns-09 have no vitals in the stem) |
| Updates added (context moved out of a prompt) | 11 |
| Updates reformatted (units added to vitals) | 8 |
| Explanations changed | 4 (asthma-copd-02 q5, asthma-copd-03 q2, burns-06 q3, burns-14 q4) |
| Patient names removed | 0 (none present) |
| Citations completed | 6 source constants (5 in use, plus the unused Rosen constant in burns.ts) |
| Citations replaced | 0 |

Stem work: hyphenated ages, "ED" written out, °C, "L/minute", and vitals moved into `vitals` with the CFPC formats. Two stems keep an oxygen saturation in the text because the stem gives no delivery method to put in the `vitals` format: burns-12 ("Her SpO2 is 98%") and burns-15 ("His SpO2 is at his usual baseline", with the value in `vitals`). asthma-copd-11 keeps "His baseline SpO2 is 93%". Respiratory rate trends ("fallen from 36/minute to 12/minute") stay in the stem because they are history. burns-13 now opens "You are working in a rural emergency department" in place of "your rural ED" later in the stem.

## Key positions across the 30 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 4 | 17 | 8 | 1 | 0 |
| After | 6 | 5 | 7 | 8 | 4 |

Largest share after is 8 of 30 (27 percent). Every position holds a key. The key is the single longest option in 9 of 30 single questions after (30 percent), down from 19 of 30.

## Keyed option rewordings

Each was needed because the keyed option was over 60 characters or over 10 words. The meaning is meant to be unchanged. Any detail dropped from an option is already in the explanation, or was added there.

| SAMP | Question | Before | After |
|---|---|---|---|
| asthma-copd-01 | q3 | Peak expiratory flow or FEV1 compared with predicted or personal best | Peak flow or FEV1 compared with predicted or personal best |
| asthma-copd-02 | q5 | Continue BiPAP, repeat the gas in 1 to 2 hours and arrange a monitored bed | Continue BiPAP, gas in 1 to 2 hours, monitored bed |
| asthma-copd-03 | q2 | Inspiratory and expiratory chest films, or bilateral decubitus films if he cannot cooperate | Inspiratory and expiratory, or decubitus, chest films |
| asthma-copd-08 | q2 | Venturi mask starting at 28% titrated to SpO2 88 to 92% | Venturi mask from 28%, titrated to SpO2 88 to 92% |
| asthma-copd-15 | q2 | Start BiPAP in the resuscitation room with an intubation plan ready and early ICU involvement | Start BiPAP in resuscitation, ready to intubate, involve ICU |
| burns-01 | q2 | Early intubation now by the most experienced operator, with a surgical airway kit open | Intubate now by most experienced operator, surgical kit open |
| burns-05 | q4 | You must report directly and promptly when you have reasonable grounds to suspect a child is in need of protection | Report directly, promptly, on reasonable grounds to suspect |
| burns-06 | q3 | 75 to 100 mL per hour, about 1 mL/kg/h, until the urine clears | 75 to 100 mL per hour until the urine clears |
| burns-07 | q2 | Chest escharotomy along both anterior axillary lines joined across the costal margin | Chest escharotomy along both anterior axillary lines |
| burns-08 | q2 | White or leathery skin that does not blanch and has reduced sensation | White or leathery, nonblanching skin with reduced sensation |
| burns-09 | q1 | Discharge with prompt referral to a burn centre or plastic surgery clinic for assessment | Discharge, prompt burn centre or plastic surgery referral |
| burns-11 | q1 | Intubate now by the most experienced operator with surgical airway backup | Intubate now by most experienced operator, surgical backup |
| burns-11 | q2 | Succinylcholine is safe to use in the first 24 hours after a burn | Succinylcholine is safe within 24 hours of a burn |
| burns-12 | q3 | Admission to a monitored critical care bed with serial electrolytes and burn centre input | Monitored ICU bed, serial electrolytes, burn centre input |
| burns-14 | q4 | Cool running water for 20 minutes helps small burns, but large burns should be cooled briefly while preventing hypothermia | Limit cooling of large burns and prevent hypothermia |

burns-11 q2 is a menu. Its second key ("Use the largest tube possible, ideally 7.5 mm or more") is unchanged. Entries for `docs/conformance-key-edits.json`, keyed as `id#question`, with `before` and `after` as arrays of the keyed option texts in `correct` order:

```json
{
 "asthma-copd-01#q3": {"before": ["Peak expiratory flow or FEV1 compared with predicted or personal best"], "after": ["Peak flow or FEV1 compared with predicted or personal best"]},
 "asthma-copd-02#q5": {"before": ["Continue BiPAP, repeat the gas in 1 to 2 hours and arrange a monitored bed"], "after": ["Continue BiPAP, gas in 1 to 2 hours, monitored bed"]},
 "asthma-copd-03#q2": {"before": ["Inspiratory and expiratory chest films, or bilateral decubitus films if he cannot cooperate"], "after": ["Inspiratory and expiratory, or decubitus, chest films"]},
 "asthma-copd-08#q2": {"before": ["Venturi mask starting at 28% titrated to SpO2 88 to 92%"], "after": ["Venturi mask from 28%, titrated to SpO2 88 to 92%"]},
 "asthma-copd-15#q2": {"before": ["Start BiPAP in the resuscitation room with an intubation plan ready and early ICU involvement"], "after": ["Start BiPAP in resuscitation, ready to intubate, involve ICU"]},
 "burns-01#q2": {"before": ["Early intubation now by the most experienced operator, with a surgical airway kit open"], "after": ["Intubate now by most experienced operator, surgical kit open"]},
 "burns-05#q4": {"before": ["You must report directly and promptly when you have reasonable grounds to suspect a child is in need of protection"], "after": ["Report directly, promptly, on reasonable grounds to suspect"]},
 "burns-06#q3": {"before": ["75 to 100 mL per hour, about 1 mL/kg/h, until the urine clears"], "after": ["75 to 100 mL per hour until the urine clears"]},
 "burns-07#q2": {"before": ["Chest escharotomy along both anterior axillary lines joined across the costal margin"], "after": ["Chest escharotomy along both anterior axillary lines"]},
 "burns-08#q2": {"before": ["White or leathery skin that does not blanch and has reduced sensation"], "after": ["White or leathery, nonblanching skin with reduced sensation"]},
 "burns-09#q1": {"before": ["Discharge with prompt referral to a burn centre or plastic surgery clinic for assessment"], "after": ["Discharge, prompt burn centre or plastic surgery referral"]},
 "burns-11#q1": {"before": ["Intubate now by the most experienced operator with surgical airway backup"], "after": ["Intubate now by most experienced operator, surgical backup"]},
 "burns-11#q2": {"before": ["Succinylcholine is safe to use in the first 24 hours after a burn", "Use the largest tube possible, ideally 7.5 mm or more"], "after": ["Succinylcholine is safe within 24 hours of a burn", "Use the largest tube possible, ideally 7.5 mm or more"]},
 "burns-12#q3": {"before": ["Admission to a monitored critical care bed with serial electrolytes and burn centre input"], "after": ["Monitored ICU bed, serial electrolytes, burn centre input"]},
 "burns-14#q4": {"before": ["Cool running water for 20 minutes helps small burns, but large burns should be cooled briefly while preventing hypothermia"], "after": ["Limit cooling of large burns and prevent hypothermia"]}
}
```

Explanation changes that go with these edits:

- asthma-copd-02 q5: added "A pCO2 still above 60 mmHg is not by itself a reason to intubate while pH and alertness improve." The reason text came out of the intubation distractor.
- asthma-copd-03 q2: added "Bilateral decubitus films replace the expiratory film when a child cannot cooperate."
- burns-06 q3: "about 75 to 100 mL per hour in an adult until it clears" now reads "about 75 to 100 mL per hour in an adult, about 1 mL/kg/h, until it clears".
- burns-14 q4: added "Cool running water for 20 minutes helps small burns. Cooling is not contraindicated for steam burns."

## Citation changes

| Source id | Before | After | Verification |
|---|---|---|---|
| rosen (both files) | Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. Elsevier. | Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. 2023. | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| thrombosis-canada | Thrombosis Canada. Clinical guide. Pulmonary embolism. Diagnosis and management. (url thrombosiscanada.ca) | Thrombosis Canada. Clinical guides. Pulmonary embolism (PE): diagnosis. 2025. Pulmonary embolism (PE): treatment. 2023. (url now the diagnosis guide PDF) | Diagnosis guide, date of version 30 April 2025: https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf. Treatment guide, date of version 13 December 2023: https://thrombosiscanada.ca/clinical_guides/pdfs/44_52.pdf |
| abls | American Burn Association. Advanced Burn Life Support Course Provider Manual. | American Burn Association. Advanced Burn Life Support Course Provider Manual. 2018 update. | https://www.readkong.com/page/advanced-burn-life-support-course-provider-manual-2018-3855651 and https://ameriburn.org/education/advanced-burn-life-support-abls/abls-handbook/ |
| aba-referral | American Burn Association. Guidelines for burn patient referral. | American Burn Association. Guidelines for burn patient referral. Advice on transfer and consultation. 2022. | https://www.ameriburn.org/storyblok-asset/x/b7f8f5d4e8/one-page-guidelines-for-burn-patient-referral-1.pdf and the ABA release post of December 2022: https://x.com/Ameriburn/status/1598378189641945088 |
| cig-tetanus | Public Health Agency of Canada. Canadian Immunization Guide. Tetanus toxoid. | Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Tetanus toxoid. Updated 2026. | Page shows last complete chapter update June 2026: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html |

No source was swapped. The other citations already named a body, a work and a year and were left as they are.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s04`: no output.
- `CONFORM=s04 SAMP_BATCH=s04 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 473 passed, 14 failed. All 14 failures are the expected "keeps its keys" failures for the 14 SAMPs in the table above. A copy of the test run against the key edits above (logged in a scratch file) passed 393 of 393 quality tests.

## Needs physician decision

Nothing below was changed.

1. burns-09 q1 explanation says partial thickness hand burns "meet burn centre referral criteria regardless of size". The 2022 ABA referral guideline asks for immediate consultation only for deep partial or full thickness hand burns. Superficial partial thickness burns under 10% TBSA fall under "consultation recommendation". The key (discharge with prompt referral) still fits. Please consider rewording the explanation to match the current criteria.
2. burns-14 q4: the keyed option was cut the most. The part about 20 minutes of cool running water for small burns moved to the explanation. Please confirm the new key reads as the same answer.
3. burns-05 q4: the key now says "on reasonable grounds to suspect" without "a child is in need of protection". That meaning is carried by the prompt and the explanation. Please confirm.
4. Guideline currency, for information only: the cited CCS heart failure guideline (2017), ATLS (10th ed, 2018) and GINA (2024) each have newer editions. These citations are valid and no content was checked against the newer editions.
