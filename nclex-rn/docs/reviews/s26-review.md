# s26 adversarial review

Scope: all 50 items in `index.ts` (rn-s26-01 to rn-s26-50) and the 2 items in `extra.ts` that `index.ts` does not import (rn-s26-91 and rn-s26-92). Both lenses were applied to every item. Every number was recomputed with a script: unit pairs, the corrected calcium, the ceftriaxone volume, the pump time, the platelet fall, the refeeding falls, the creatinine rise, the lipase multiple and the MAP.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s26-15 | stem | The action "Hold the prescribed allopurinol" and "Increase IV fluids as prescribed" relied on prescriptions the stem never gave. Added "Current prescriptions include IV fluids and allopurinol." | B | high |
| rn-s26-20 | option 2.1 mL why | The why said drawing 2.1 mL gives close to the full 1 g. After reconstitution the whole vial is about 2.9 mL, so 2.1 mL at 350 mg/mL holds about 735 mg. The why now says 2.1 mL holds far more than the 500 mg dose. | B | high |
| rn-s26-22 | rationale | It said the fall "began after day 5 of heparin". The table shows 131 000 on day 6, already a 47 percent fall, so the start of the fall lies between day 3 and day 6. Rewritten to match the table and the 5 to 10 day window in `refs`. | B | high |
| rn-s26-37 | blank 2 option "covered with a clean towel" why | The why said a towel "wipes the product away". Covering does not wipe. Now says the towel soaks up the product. | A | low |
| rn-s26-38 | stem | The action "Hold the prescribed thiamine" relied on a thiamine prescription the stem never gave. The stem now says tube feeding and thiamine started 2 days ago. | B | high |
| rn-s26-38 | condition "Refeeding syndrome" why | It said magnesium was falling. The stem gives only one magnesium value. Now cites the magnesium of 1.3 mg/dL without claiming a trend. | B | high |
| rn-s26-38 | condition "Diabetic ketoacidosis" why | It said a glucose of 148 mg/dL is far below the level seen in ketoacidosis. The 2024 consensus accepts DKA at any glucose when diabetes is known, and euglycemic DKA exists. Now rejects DKA on the absence of ketones or acidosis and the falling phosphorus. | A | medium |
| rn-s26-43 | rationale | It said "Needles come off into a sharps container before a specimen is sent." 29 CFR 1910.1030(d)(2)(vii) bars removing contaminated needles unless no alternative is feasible. Now says a syringe sent with its needle attached exposes every handler to a sharps injury. | A | medium |
| rn-s26-91 (extra) | option sodium polystyrene sulfonate why | It said the resin lowers potassium within minutes and is too fast to be safe. The resin acts over hours. Now says it works over hours and does not protect the heart right away. | A | high |
| rn-s26-92 (extra) | key option and rationale | Protamine sulfate was keyed as the antidote to magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. Option text, why and rationale corrected. See Key changes. | A | high |
| rn-s26-92 (extra) | sources | The SOGC citation lacked the journal and URL. Added JOGC 44(5):547 and the PubMed link, and added Lehne for the calcium gluconate antidote. | A | high |

## Key changes

- rn-s26-92 (extra.ts, not in the bank). Before: option 2 "Protamine sulfate" keyed. After: option 2 reads "Calcium gluconate" and stays keyed at index 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no action on magnesium. The item was keyed to a false answer. Arjan to approve.

## Items checked and left unchanged

- 05: 7.6 + 0.8 x 1.6 = 8.88, rounds to 8.9 mg/dL. Every distractor's arithmetic matches its why (6.32, 8.4, 9.52). All SI pairs within 3 percent.
- 07: lipase 540 is 9 times 60. Lipase 70 is 1.2 times.
- 11 and 46: match ACIP 2018 on responders and on revaccination after anti-HBs below 10 mIU/mL.
- 13, 32, 43, 49: each OSHA provision was checked against the current text of 29 CFR 1910.1030.
- 17: pictogram hazards match OSHA 3491-08R 2024.
- 18: every threshold and SI pair matches ADA 2026 section 2.
- 21: glove, eye, lid and washing claims match OSHA 3258-08N.
- 23, 27, 48: ASHP 2018 says to inspect the dose in the transport bag, work below eye level, never remove the set from the bag, keep gowns in the handling area, remove outer gloves first and inner gloves last, and wash with soap and water. It says rubbing sanitizing gel into the hands may increase dermal absorption.
- 30 and 39: the 2025 USPHS guideline says to start PEP as soon as possible and up to 72 hours after exposure.
- 40: rise of 0.4 mg/dL within 36 hours meets the KDIGO 0.3 mg/dL within 48 hours rule. 26.5 micromol/L rounds to the 27 in `refs`.
- 42 and 45: dextrose below 250 mg/dL, potassium goal of 4 to 5 mmol/L and the HHS criteria match the 2024 consensus report.
- 44: 600 / 125 = 4.8 hours. The distractor values 0.2, 3.2 and 8.0 match their whys.

## Sources verified

- Kofman et al., 2025 USPHS occupational HIV PEP guidelines, ICHE 46(9):863. https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/
- ACIP, Schillie et al., Prevention of Hepatitis B Virus Infection, MMWR 67(RR-1), 2018. https://www.cdc.gov/mmwr/volumes/67/rr/rr6701a1.htm
- CDC HICPAC, 2007 Guideline for Isolation Precautions, mask for spinal procedures and splash PPE. https://www.cdc.gov/infection-control/hcp/isolation-precautions/precautions.html
- OSHA Bloodborne Pathogens Standard, 29 CFR 1910.1030. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030
- OSHA 3491-08R Hazard Communication pictogram QuickCard, 2024. https://www.osha.gov/sites/default/files/publications/OSHA3491QuickCardPictogram.pdf
- OSHA 3258-08N, Best Practices for the Safe Use of Glutaraldehyde, 2006. https://www.osha.gov/sites/default/files/publications/GLUTARALDEHYDE.pdf
- Sandoz ceftriaxone label, 2014: a 1 g vial with 2.1 mL gives about 350 mg/mL. https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/065169s022lbl.pdf
- ASHP Guidelines on Handling Hazardous Drugs, AJHP 75(24):1996, 2018 (full text read). https://pubmed.ncbi.nlm.nih.gov/30327293/
- Umpierrez et al., Hyperglycemic Crises in Adults With Diabetes, Diabetes Care 47(8):1257, 2024 (full text read). https://diabetesjournals.org/care/article/47/8/1257/156808
- da Silva et al., ASPEN refeeding consensus, NCP 35(2):178, 2020 (full text read). https://pubmed.ncbi.nlm.nih.gov/32115791/
- ADA Standards of Care 2026 section 2, Diabetes Care 49(Suppl 1):S27. https://pubmed.ncbi.nlm.nih.gov/41358893/
- Tenner et al., ACG acute pancreatitis guideline, AJG 119(3):419, 2024. https://pubmed.ncbi.nlm.nih.gov/38857482/
- El-Hajj Fuleihan et al., Endocrine Society hypercalcemia of malignancy guideline, JCEM 108(3):507, 2023. https://pubmed.ncbi.nlm.nih.gov/36545746/
- Celano et al., ASCO hazardous drug standards, JCO 37(7):598, 2019. https://pubmed.ncbi.nlm.nih.gov/30620670/
- Cuker et al., ASH 2018 HIT guideline, Blood Advances 2(22):3360. https://pubmed.ncbi.nlm.nih.gov/30482768/
- Magee et al., SOGC Guideline No. 426, JOGC 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/

## Needs Arjan's decision

- rn-s26-92 key change above.
- rn-s26-91 and rn-s26-92 sit in `extra.ts` and are not in the bank. Both had a false teaching point before this review. They now pass every item gate. Decide whether to add them.
- rn-s26-27: ASHP 2018 says spiking an IV set into an HD solution in an uncontrolled setting must be avoided unless a CSTD gives a dry connection. The passage includes a closed-system device, so the key holds. A reader may still wonder why bedside spiking is shown at all.
- rn-s26-35: the NIOSH 2016 list has been superseded by the NIOSH 2024 list, which dropped the PPE table. The single-glove teaching is still supported by ASHP 2018, which is also cited. Consider replacing the NIOSH 2016 citation with a current NIOSH document.
- rn-s26-42: many units treat the glucose below 250 mg/dL as a protocol step for adding dextrose rather than a call. The key is defensible because the stem gives no protocol.

## Summary

52 items reviewed, 50 in the bank and 2 extras. Defects were found in 8 items: rn-s26-15, 20, 22, 37, 38, 43, 91 and 92. There were 11 fixes and 1 key change, the extra item rn-s26-92. No key in the 50 bank items changed. `BATCH=s26 npx vitest run tests/bank.test.ts` passes 61 of 61, `tsc` reports nothing for the batch, and every item including the extras passes `itemProblems`.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
