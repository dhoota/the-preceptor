# Review of batch c08

Reviewer: adversarial review under docs/REVIEW_BRIEF.md, Lens A and Lens B. Scope: case1.ts to case5.ts, helpers.ts, index.ts and extra.ts. extra.ts is not imported by index.ts and was reviewed in full.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c08-1-3 | blank 1 why for compartment syndrome, rationale | Rejected compartment syndrome because the toes were warm with brisk refill. Warmth, refill and pulses are late and unreliable signs and do not exclude raised compartment pressure. Now rejected on moderate pain and on the fact that it would not explain hypoxemia. | A | high |
| rn-c08-2-1 | stem, rationale | Morphine is prescribed every 2 hours as needed, but doses were given at 2000 and 2130, only 90 minutes apart. The chart showed an unflagged medication error. Times changed to 1730, 1930 and 2130. | B | high |
| rn-c08-3 (tab, used by rn-c08-3-3) | History and Physical | Home oxycodone is every 4 hours as needed, but doses were at 2100 and 0000, only 3 hours apart. Changed to 2000 and 0000. | B | medium |
| rn-c08-3-3 | rationale | Said "clear respirations". Breath sounds were never given. Changed to "unlabored respirations", which the note states. | B | medium |
| rn-c08-3-4 | sources | Local heat, distraction and early walking were supported only by the NHLBI report, which does not address these nursing measures. Added Brunner and Suddarth 15th edition. | A | low |
| rn-c08-4-3 | blank 1 why, blank 2 option and why, rationale | "Her intake was lower today" and "dehydration from lower intake" rely on an intake history the case never gives. The distractor is now "her SpO2 is 96% on room air", which the vital signs show. The dehydration why now rests on the missing fever explanation. | B | high |
| rn-c08-9 (extra.ts) | rationale | Rationale says the client has asthma. The stem never says so, and a nonselective beta blocker prescribed with asthma would itself be a contraindication the item never flags. Rationale rewritten to the stem facts. | B | high |
| rn-c08-8 (extra.ts) | option 3 | "Elevate the bed head 30 degrees" is the same action as the key. Two defensible keys, and its own why admitted it. Replaced with "Slow the feeding pump rate". | A | high |

## Key changes

None. Every key stands.

## Checked and found sound

- All Celsius and Fahrenheit pairs, all SI pairs (hemoglobin, creatinine, uric acid, phosphorus, calcium, potassium) recomputed by script within 3 percent.
- rn-c08-4-2 absolute neutrophil count: 1400 times 22 percent is 308. The distractors 56, 252 and 3080 match their stated errors.
- rn-c08-5-2 urine output: 150 / 6 / 80 is 0.3125, shown as 0.31. The distractors 0.08, 1.88 and 25 match their stated errors.
- rn-c08-3 PCA: lockout 10 minutes allows 24 doses in 4 hours, so 18 doses from 46 attempts is possible. Fluids 100 mL/hour match maintenance for 60 kg.
- rn-c08-5 timeline: induction at 1000 yesterday, urinal at 1000 today is 24 hours, inside the 48 hour precaution window.
- Priority items: rn-c08-1-3 and rn-c08-5-3 are decided by airway, breathing and circulation. rn-c08-2-3 is decided by actual threat to tissue over potential problems. rn-c08-3-5 is decided by assessment before teaching.

## Sources verified

- Timon C et al. Malaysian Orthopaedic Journal 15(1):1, 2021. Onset 24 to 48 hours, petechiae on the anterior thorax and axillae, thrombocytopenia, early fixation lowers FES. https://pmc.ncbi.nlm.nih.gov/articles/PMC8043637/
- Kosova E, Bergmark B, Piazza G. Circulation 131(3):317, 2015. https://pubmed.ncbi.nlm.nih.gov/25601951/
- Hak DJ. Acute Compartment Syndrome in Children, Chapter 13, in Mauffrey, Hak, Martin, Compartment Syndrome, Springer 2019. https://www.ncbi.nlm.nih.gov/books/NBK553897/
- Howard SC, Jones DP, Pui CH. NEJM 364:1844, 2011. Potassium threshold, hyperkalemia as the most dangerous component, urine output of at least 2 mL/kg/hour, oliguria below 0.5 mL/kg/hour for 6 hours, samples on ice, alkalinization lowers calcium phosphate solubility. https://pmc.ncbi.nlm.nih.gov/articles/PMC3437249/
- Elitek prescribing information on DailyMed. Boxed warnings for hypersensitivity, hemolysis in G6PD deficiency, methemoglobinemia and uric acid measurement interference. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ae10bc4-6b65-402f-9db5-2d7753054922
- NHLBI Evidence-Based Management of Sickle Cell Disease, 2014. Temperature of 38.5°C (101.3°F) or higher needs immediate evaluation. https://www.nhlbi.nih.gov/sites/default/files/media/docs/Evd-Bsd_SickleCellDis_Rep2014.pdf
- Freifeld AG et al. IDSA 2010 update, Clinical Infectious Diseases 52(4):e56, 2011. Fever definition and no plants or flowers in neutropenic rooms. https://academic.oup.com/cid/article/52/4/e56/382256
- Citation details for Taplitz 2018, Rubin 2014, Coiffier 2008, Katz 2016, Brandow 2020, Jungquist 2020, Wuhrman 2007, Joint Commission Sentinel Event Alert 58, O'Grady 2011, Boullata 2017 and the textbooks match the published works.

## Needs Arjan's decision

- extra.ts holds rn-c08-8 and rn-c08-9. They are stand-alone items with ids that do not fit the case id pattern and are not imported. Decide whether to renumber and add them or delete the file.
- rn-c08-5-5 teaches double chemotherapy gloves and an impermeable gown for body fluids. ONS also advises face protection when splashing is likely. The item does not raise splashing, so no change was made.

## Summary

8 items had defects and 8 fixes were made, 6 in the five cases and 2 in extra.ts. There were no key changes. Typecheck is clean and BATCH=c08 tests/bank.test.ts passes 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
