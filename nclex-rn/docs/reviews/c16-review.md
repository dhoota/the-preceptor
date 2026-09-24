# c16 adversarial review

Scope: all five cases in `index.ts` (rn-c16-1 to rn-c16-5, 30 items) and the two items in `extra.ts` (rn-c16-8, rn-c16-9), which `index.ts` does not import. Both lenses were applied to every choice, why and rationale. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c16-8 | options[1], rationale | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. Calcium gluconate is the antidote. | A | high |
| rn-c16-8 | sources | The SOGC citation had no journal detail or URL. Added JOGC 44(5):547 and the PubMed link. | A | high |
| rn-c16-9 | options[1].why | The why said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts slowly, over hours, and is not an emergency treatment. | A | high |
| rn-c16-1-3 | rationale, blank 0 option 3 why, blank 1 option 3 | Low fluid intake was stated as a finding. The case never gives intake. Now tied to the scant, dark urine shown in item 1. The distractor became "a low urine output". | B | high |
| rn-c16-2-4 | rationale, hospice token why | Said he has no terminal illness. Alzheimer disease is terminal. Now says moderate-stage dementia does not meet the 6-month hospice prognosis. | A | high |
| rn-c16-3-2 | row 4, rationale | "Reports aching in her heels" was keyed as not raising risk. Heel pain in a client whose heels rest on the mattress (item 1) can signal early pressure damage, so the row was defensible either way. Replaced with "Feels light touch in both feet". | A | medium |
| rn-c16-3-6 | sources | AAOS 2021 cites osteoporosis care but states that secondary fracture prevention is outside its scope. Replaced with the ASBMR secondary fracture prevention consensus (Conley 2020). | A | high |
| rn-c16-4-4 | hospice option why | "Hospice does not fit his goals" relied on goals the case never states. Now says his care aims at healing the wound. | B | medium |
| rn-c16-5-1 | stem | The stem asked about the 0845 assessment, but a keyed option (warfarin) comes from the history. The stem now names her history too. | B | medium |
| rn-c16-5-3 | blank 1 option 3 why | "Scalp swelling has not changed" was not in any tab. Now says the swelling is outside the skull and does not explain the neurologic decline. | B | high |
| rn-c16-5-5 | rationale | Called four-factor PCC a high-alert dose. It is not on the ISMP 2024 acute care high-alert list, which names antithrombotics, not reversal agents. The sentence was removed. | A | high |

## Key changes

- rn-c16-8. Before: "Protamine sulfate" (index 1). After: "Calcium gluconate" (index 1). The keyed option text was replaced. Reason: calcium gluconate 1 g IV is the antidote for magnesium sulfate toxicity per SOGC Guideline No. 426. Protamine reverses heparin. Arjan must approve.

No key changed in the 30 case items.

## Checked and left as written

- rn-c16-1-5. 10 / 20 = 0.5 mL. The 0.2, 2 and 5 mL whys recompute to 4, 40 and 100 mg. The FDA label (revised January 2012) limits 20 mg/mL to opioid-tolerant clients and defines tolerance as at least 60 mg oral morphine a day for a week or longer. The stem gives 60 mg a day for 3 months.
- rn-c16-4-2. 7 / 71 = 9.9%. 7 / 64 = 10.9%. 64 / 71 = 90.1%. The more than 7.5% in 3 months threshold for severe loss in chronic illness matches White 2012.
- rn-c16-5-5. 25 x 84 = 2100, 35 x 84 = 2940, 50 x 84 = 4200 units. The Kcentra label (revised May 2023) gives 25, 35 and 50 units/kg with caps of 2500, 3500 and 5000 units.
- rn-c16-5-3. GCS 15 to 12 from 0845 to 1030 is under 2 hours. Pulse pressure 64, 76, 102 mmHg widens. Heart rate 78, 70, 54 falls. The right pupil dilates on the side of the right subdural bleed.
- Unit pairs: 4°C is 39.2°F, 36.9°C is 98.4°F, 37.4°C is 99.3°F, 37.9°C is 100.2°F. Glucose 186 mg/dL is 10.3 mmol/L and 104 mg/dL is 5.8 mmol/L. Hemoglobin pairs are exact.
- rn-c16-1-1. 80 mL from 2200 to 1015 is about 6.5 mL an hour, a marked fall. PDQ lists Cheyne-Stokes breathing, death rattle, decreased urine output and peripheral cyanosis as late signs and decreased consciousness as an early sign.
- rn-c16-4-5. The LPN giving scheduled insulin to a stable resident follows common US scope. NCSBN and ANA 2019 keep clinical judgment with the RN.
- rn-c16-5-4. The andexanet alfa row stays "do not anticipate". Its why is true whatever its current market status.

## Sources verified

- NCI PDQ, Last Days of Life, HP version, updated 12 February 2025. Early and late signs and repositioning for death rattle confirmed. https://www.cancer.gov/about-cancer/advanced-cancer/caregivers/planning/last-days-hp-pdq
- Warden, Hurley, Volicer. PAINAD. JAMDA 2003 4(1):9 to 15. https://pubmed.ncbi.nlm.nih.gov/12807591/
- FDA, Morphine Sulfate Oral Solution label, revised January 2012. Opioid tolerance wording confirmed. https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/022195s006lbl.pdf
- Hospice Foundation of America, When Death Happens at Home, 24 September 2024. Call hospice, not 911. Time with the body is normal. https://hospicefoundation.org/when-death-happens-at-home/
- Alzheimer's Association, Wandering. Locks high or low, store coats, hats and keys, night lights, wandering response service. https://www.alz.org/help-support/caregiving/safety/wandering
- Fazio and colleagues. The Gerontologist 2018 58(S1):S1 to S9. https://academic.oup.com/gerontologist/article-abstract/58/suppl_1/S1/4816759
- AAOS, Management of Hip Fractures in Older Adults, 3 December 2021. Weight bearing as tolerated and multimodal analgesia confirmed. Secondary prevention out of scope. https://www.aaos.org/globalassets/quality-and-practice-resources/hip-fractures-in-the-elderly/hipfxcpg.pdf
- Conley and colleagues, ASBMR. Secondary Fracture Prevention. JBMR 2020 35(1):36 to 52. https://pubmed.ncbi.nlm.nih.gov/31538675/
- EPUAP, NPIAP, PPPIA International Guideline, 3rd edition, 2019. https://internationalguideline.com/2019
- Edsberg and colleagues. JWOCN 2016 43(6):585 to 597. https://pubmed.ncbi.nlm.nih.gov/27749790/
- White and colleagues. JPEN 2012 36(3):275 to 283. https://pubmed.ncbi.nlm.nih.gov/22535923/
- NCSBN and ANA, National Guidelines for Nursing Delegation, effective 29 April 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Tomaselli and colleagues. 2020 ACC ECDP. JACC 2020 76(5):594 to 622. https://pubmed.ncbi.nlm.nih.gov/32680646/
- CSL Behring, Kcentra prescribing information, revised May 2023. https://labeling.cslbehring.com/pi/us/kcentra/en/kcentra-prescribing-information.pdf
- NICE NG232, Head injury, 2023. CT within 8 hours for clients on anticoagulants. https://www.nice.org.uk/guidance/ng232/chapter/recommendations
- Montero-Odasso and colleagues. World falls guidelines. Age and Ageing 2022 51(9):afac205. https://pubmed.ncbi.nlm.nih.gov/36178003/
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf
- Magee and colleagues, SOGC Guideline No. 426. JOGC 2022 44(5):547 to 571. Stop the infusion and give calcium gluconate 1 g IV. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Hinkle, Cheever, Overbaugh. Brunner and Suddarth, 15th edition, 2022. Textbook. Not checkable online at page level.

## Needs Arjan's decision

- Approve the rn-c16-8 key change. Decide whether rn-c16-8 and rn-c16-9 join the bank. Both now pass every item gate. Neither has a Canada note.
- rn-c16-2-6. The night aide comes twice a week, but the keyed finding is about 7 hours of sleep on most nights. The day program may explain the rest. Left as written.
- rn-c16-4-5. LPN insulin scope varies by state and province.

## Summary

32 items reviewed (30 in cases, 2 in extra.ts). 11 fixes across 10 items. 1 key change (rn-c16-8). 7 fixes are Lens A and 4 are Lens B. Type check is clean and `BATCH=c16 npx vitest run tests/bank.test.ts` passes 44 of 44.

One run during this review failed the whole-bank near-duplicate gate on pairs from other batches (rn-c02-1-1 with rn-c18-5-1, rn-s17-27 with rn-s26-44) while those batches were being edited. No c16 item was involved. The next run passed 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
