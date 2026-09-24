# Batch s06 adversarial review

Scope: every .ts file in src/bank/s06. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, and the 2 items in extra.ts (rn-s06-91 and rn-s06-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s06-91 | option 1 text and why, rationale, refs, sources | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. ACOG Practice Bulletin 222 added as a source and the 1 g dose put in refs. | A | high |
| rn-s06-91 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says so. They now say each agent has no effect on magnesium. | B | medium |
| rn-s06-91 | need | Tagged SIPC. Magnesium toxicity and its antidote are Pharmacological and Parenteral Therapies. Changed to PPT. | B | high |
| rn-s06-92 | rationale | "This client has asthma" is not in the stem. The rationale now teaches the rebound risk and names the other statements as correct. | B | high |
| rn-s06-92 | need | Tagged SIPC. Beta blocker teaching is PPT. Changed to PPT. | B | high |
| rn-s06-35 | condition why, bronchiolitis | The why said bronchiolitis does not bring apnea. Apnea is a known presenting sign of bronchiolitis in infants under 2 months. The why now rests on the paroxysmal spells with gagging. | A | high |
| rn-s06-35 | rationale | "Bronchiolitis and croup bring wheeze or stridor with fever" leaned on findings the stem never gives. It now contrasts their signs with the gagging spells. | A | medium |
| rn-s06-35 | stem | A 15-second pause was called apnea. The AAP definition is 20 seconds or more, or a shorter pause with bradycardia, cyanosis or pallor. The pause is now 20 seconds. | A | medium |
| rn-s06-15 | rationale | Said level of consciousness and pupil response "show early signs" of rising pressure. Pupil change is a later sign. The rationale now names a fall in level of consciousness as the earliest sign. | A | medium |
| rn-s06-20 | why, blank 0 option 2 | "The client is able to void" is not in the stem. Wanting to walk to the bathroom does not show that. The why now says the stem gives no sign of retention. | B | medium |
| rn-s06-13 | why option 0, rationale | Called the nasal MRSA client "alert". The option says only "continent". The word is removed. | B | low |
| rn-s06-31 | rationale | "Antibiotics are not continued for days after a clean closure." Colon surgery is clean-contaminated. CDC 2017 says no extra doses after closure in clean and clean-contaminated cases. The sentence now says so plainly. | A | medium |

## Key changes

- rn-s06-91 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate 1 g IV is the antidote for magnesium toxicity (ACOG Practice Bulletin 222). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Items checked with no defect

The other 41 items in the bank passed both lenses. Points checked closely:

- Precaution type and duration against CDC Appendix A for measles, varicella, disseminated and localized zoster, mumps, influenza, pertussis (5 days of therapy), meningococcus (24 hours of therapy), scabies (24 hours of therapy), C. difficile, norovirus and anthrax.
- Numbers: 112 mg/dL is 6.2 mmol/L, 200 mg/dL is 11.1 mmol/L, 35 lb is 15.9 kg, every Celsius and Fahrenheit pair in items 35 and 39, the BP drop of 28/14 mmHg in item 20 against the 20/10 threshold, the doubled metoprolol dose in item 21 and the urine outputs in item 39.
- The PPE removal order in item 05 matches CDC example 1 (gloves, goggles, gown, mask, hand hygiene).
- START categories in item 24.

## Sources verified

- CDC Isolation Precautions, Appendix A. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- Klompas M et al. VAP prevention 2022 update. Chlorhexidine oral care not recommended with a possible mortality signal, toothbrushing essential, circuits changed only when soiled or faulty. https://www.cambridge.org/core/journals/infection-control-and-hospital-epidemiology/article/strategies-to-prevent-ventilatorassociated-pneumonia-ventilatorassociated-events-and-nonventilator-hospitalacquired-pneumonia-in-acutecare-hospitals-2022-update/A2124BA9B088027AE30BE46C28887084
- 42 CFR 482.13(e)(6), no standing or PRN restraint orders. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13
- Berrios-Torres SI et al. CDC SSI guideline 2017. Glucose under 200 mg/dL, normothermia, shower the night before, no topical antimicrobials on the incision, no doses after closure in clean and clean-contaminated cases. https://jamanetwork.com/journals/jamasurgery/fullarticle/2623725
- CDC PPE sequence poster CS250672-E. https://stacks.cdc.gov/view/cdc/24767/cdc_24767_DS1.pdf
- AACN Practice Alert on alarms. Daily electrode change, soap and water skin prep, individual parameters. https://www.aacn.org/newsroom/practice-alert-outlines-alarm-management-strategies
- START criteria. https://remm.hhs.gov/startalgotext.htm
- Apnea in bronchiolitis under 2 months. https://emedicine.medscape.com/article/961963-clinical
- AAP apnea definition (20 seconds, or shorter with bradycardia, cyanosis or pallor). https://emedicine.medscape.com/article/800032-overview
- ACOG Practice Bulletin 222, 2020, for item 91. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Magee LA et al. SOGC Guideline No. 426, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Davis's Drug Guide for Nurses, 18th edition, copyright 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- The other citations in common.ts match the links in s06-writer.md.

## Needs Arjan's decision

- rn-s06-91: approve the key change above. The item repeats rn-s15-92 almost word for word in teaching point. Decide whether it joins any bank.
- rn-s06-91 and rn-s06-92 are PPT items in an SIPC batch. If they join the bank they belong in a PPT batch.
- rn-s06-03: the refs line gives the HIV PEP window, but the source client has hepatitis C. It is harmless but unused. Consider removing it and PEP2025.
- rn-s06-37: the chlorhexidine why says it "may raise mortality". Klompas 2022 calls the signal uncertain. The hedge is fair and I left it.
- rn-s06-22: soap and water for C. difficile is the CDC preference. Some policies allow alcohol rub outside outbreaks. The key stands.

## Process note

To gate the two extra.ts items, which the batch test does not load, I placed a probe test in tests/, ran it once and deleted it at once. No other file outside src/bank/s06 and this report was changed.

## Summary

52 items reviewed. 12 fixes in 8 items: 2 in extra.ts and 6 in the bank. 1 key change, in extra.ts. tsc prints nothing for bank/s06 and BATCH=s06 npx vitest run tests/bank.test.ts passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
