# Batch c05 adversarial review

Scope: `case1.ts` to `case5.ts` (30 case items), `helpers.ts`, and `extra.ts` (2 stand-alone items that `index.ts` does not import: rn-c05-9 and rn-c05-8). Both lenses were applied to every item.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c05-9 | options[1].text, why, rationale | Keyed protamine sulfate as the antidote for magnesium toxicity. The antidote is IV calcium gluconate. Protamine reverses heparin. | A | high |
| rn-c05-9 | options[2].why | Said the client "did not receive" benzodiazepines. The stem gives no medication history beyond magnesium. Reworded to rest on the findings. | B | medium |
| rn-c05-8 | rationale | Said "this client has asthma". The stem never gives asthma, and propranolol would be contraindicated if it did. Rewritten to teach wheezing as a warning sign. | B | high |
| rn-c05-1-3 | blanks[0].options[3].why | Called acute dystonia "brief muscle spasms". Dystonia is sustained involuntary contraction of the neck, eyes or jaw. | A | medium |
| rn-c05-1-4 | tokens[4].text | "a cool shower alone in the bathroom" was the only noun phrase among gerund tasks, a grammar cue that marked it as a distractor. Now "leaving him to shower alone in cool water". | B | medium |
| rn-c05-1-6 | sources | Dysphagia as a feature of the syndrome came from the writer's memory. Added Tse et al. 2015, which lists dysphagia and aspiration as features and complications. | A | medium |
| rn-c05-2-5 | rationale | Claimed a pump means "a setting error cannot deliver a large volume". A pump does not prevent a programming error. Now says the pump delivers the small hourly volume precisely. | A | high |
| rn-c05-2-6 | options[3].text | Parent statement at discharge on day 2 said spit-up "in the first day or two", a period that had already passed. Now "in the next day or two". | B | medium |
| rn-c05-5-3 | rationale | Said the infection "could become systemic". A temperature of 38.3°C and a heart rate of 104/minute are already systemic signs. Now "could progress to sepsis". | A | medium |
| rn-c05-5-6 | options[4].why, rationale, sources | The claim that warm laundering removes MRSA was not on the cited CDC prevention page. The why now follows CDC wording (wash and fully dry as the label directs), and the CDC page with that advice is added. | A | low |

Total fixes: 10 across 9 items.

## Key changes

- rn-c05-9 (extra.ts, not in the bank). Before: "Protamine sulfate" (index 1). After: "Calcium gluconate" (index 1). Reason: IV calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no effect on magnesium. The keyed position is unchanged but the keyed answer is new, so this is logged as a key change for Arjan.

## Checked and left as written

- rn-c05-1-2 unit pairs, rn-c05-2-2 pairs and all temperature pairs recomputed by script: creatinine 1.9, 1.3 and 1.1 mg/dL give 168, 115 and 97 micromol/L. BUN 34, 20, 22 and 18 mg/dL give 12.1, 7.1, 7.9 and 6.4 mmol/L. Glucose 78, 60, 32, 40, 58 and 45 mg/dL give 4.3, 3.3, 1.8, 2.2, 3.2 and 2.5 mmol/L. All Fahrenheit pairs match to 0.1.
- rn-c05-2-5: 100 x 3.8 / 24 = 15.8 mL/hour. Distractors 31.7 (over 12 hours) and 34.8 (weight in pounds, 8.36 lb) recompute correctly.
- rn-c05-3-5: 200 x 4.6 / 100 = 9.2 mL. 4.6 mL is half and 0.92 and 92 mL are decimal slips.
- rn-c05-3-3, 3-5 and 3-6 values match AAP 2011 as reported in a 2023 guideline review: IV glucose for a symptomatic infant below 40 mg/dL, a 200 mg/kg minibolus as 2 mL/kg dextrose 10%, and a target of 45 mg/dL or more before feeds.
- rn-c05-4-2 timeline: oxycodone at 0200 and standing at 0300 is 1 hour. rn-c05-1 timeline: dose raised on day 5, now day 7, which is 2 days.
- Priority keys: rn-c05-2-3 (circulation, volume deficit progressing to shock), rn-c05-4-3 (safety, actual fall attempt while on enoxaparin), rn-c05-5-3 (acute over chronic, spreading infection with fever) all follow accepted frameworks. Delegation keys rn-c05-1-4 and rn-c05-3-4 follow NCSBN and ANA 2019 (routine tasks with predictable outcomes to AP, assessment and teaching kept by the RN).
- No distractor found to be also defensible after the fixes above.

## Sources verified

- Strawn JR, Keck PE Jr, Caroff SN. Am J Psychiatry 2007, 164(6):870-6. PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/17541044/
- Tse L, Barr AM, Scarapicchia V, Vila-Rodriguez F. Curr Neuropharmacol 2015, 13(3):395-406. Full text checked for dysphagia, diaphoresis and myoglobinuric renal failure. https://pubmed.ncbi.nlm.nih.gov/26411967/
- Adamkin DH, AAP Committee on Fetus and Newborn. Pediatrics 2011, 127(3):575-9. Citation by E-utilities. Values via the guideline review PMC10378472. https://pubmed.ncbi.nlm.nih.gov/21357346/ and https://europepmc.org/article/PMC/PMC10378472
- Wight NE, ABM. Breastfeed Med 2021, 16(5):353-365. https://pubmed.ncbi.nlm.nih.gov/33835840/
- Feld LG et al. Pediatrics 2018, 142(6):e20183083. https://pubmed.ncbi.nlm.nih.gov/30478247/
- McGoldrick M. Home Healthc Now 2025, 43(1):9-14. https://pubmed.ncbi.nlm.nih.gov/39763037/
- ADA Professional Practice Committee. Diabetes Care 2026, 49(Suppl 1):S261-S276. https://pubmed.ncbi.nlm.nih.gov/41358886/
- Stevens DL et al. IDSA 2014 update. Clin Infect Dis 59(2):e10. https://pubmed.ncbi.nlm.nih.gov/24973422/
- Magee LA, Smith GN, Bloch C, et al. SOGC Guideline No. 426. J Obstet Gynaecol Can 2022, 44(5):547-571. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Calcium gluconate as the antidote, hold criteria of absent patellar reflexes and respirations below 12/minute: magnesium sulfate pharmacology review, 2026. https://europepmc.org/article/PMC/PMC12963761
- CDC. Preventing MRSA. Towels, covered wounds, bandages in regular trash. https://www.cdc.gov/mrsa/prevention/index.html
- CDC. Athletes: MRSA Prevention and Control, updated 27 June 2025. Wash and fully dry towels and clothing per label. https://www.cdc.gov/mrsa/prevention/athletes.html
- Davis's Drug Guide for Nurses 18th edition confirmed as a 2022 printing by ISBN 9781719646406 (Open Library). A 19th edition (2024) exists.
- Halter 2022, NCSBN and ANA 2019, Wong 2023, Lowdermilk 2023, Brunner 2022 and Siegel 2007 were already verified in earlier batches and match their listed URLs or editions.

The web search budget for this session was exhausted, so verification used PubMed E-utilities, Europe PMC full text, Open Library and WebFetch of CDC pages.

## Needs Arjan's decision

- rn-c05-9 key change from protamine sulfate to calcium gluconate.
- rn-c05-8 cites Davis's Drug Guide 18th edition. A 19th edition (2024) exists. Update the citation if the bank prefers the newest edition.
- rn-c05-4-4 keys "prone for 30 minutes 3 times a day" and "sitting limited to 1 hour at a time". Both match common amputation teaching but I could not open Brunner to confirm the exact figures.
- rn-c05-5-6 keeps the option "the warmest setting on the label". CDC now says to follow the label and dry fully. The option is not false, but Arjan may prefer the CDC wording in the option too.
- rn-c05-4-2 carries need PSY while four of six rows test contracture and falls. BCC or RRP may fit better.

## Summary

9 items had defects and all 9 are fixed with 10 edits. rn-c05-4-2 carries a metadata query for Arjan. Two of the fixed items are in `extra.ts`, which `index.ts` does not import. One key changed (rn-c05-9). `BATCH=c05 npx vitest run tests/bank.test.ts` passes 44 of 44, `tsc` prints nothing for bank/c05, and both extra items pass `itemProblems` with no findings.

One run in the middle of this review failed the whole-bank near duplicate gate on rn-s02-33 and rn-s03-29. Both are outside c05 and were being edited by another batch. The next run passed 44 of 44 with no change to c05.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
