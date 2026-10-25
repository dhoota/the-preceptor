# Batch s35 review

Independent adversarial review of batch s35 (Pharmacological and Parenteral Therapies, drug classes and safety). Scope was all 50 items in `part1.ts` to `part5.ts` and the sources in `common.ts`. The batch has no extra file. Both lenses were applied to every item, and every why and rationale sentence was read against its stem.

Every dose, route, threshold, antidote and monitoring point was checked against the current US label text. Labels were downloaded from DailyMed or the manufacturer and searched as text. Every calculation, distractor value, SI pair and temperature pair was recomputed with a script (54 checks, all within rounding). Uniqueness was checked by searching the full source text of the 2,000 original items and the other new batches, not only the inventory stems.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s35-07 | rationale | Said semaglutide kidney injury occurs "mostly during dose increases". The label says most cases followed GI fluid loss and advises kidney checks during initiation and escalation. Reworded. | A | high |
| rn-s35-19 | refs | The 33-hour half-life is the single-dose value. The multiple-dose value in the same table is 25.4 hours. The ref now gives 25 to 33 hours and 5 to 7 days. The key stands. | A | high |
| rn-s35-24 | sources | The sodium range and the GGT and MCV whys had no source. Added the Hinkle text already used in the batch. | A | medium |
| rn-s35-28 | option 0, its why, rationale, refs | "Benefit builds over weeks" and "acts within an hour" have no label support. The option now reads "school days only and skip weekends". The rationale uses the labeled 3-day minimum titration interval, added as a ref. | A | medium |
| rn-s35-32 | rationale | Called the SpO2 "falling", but the stem gives a single value of 92%. Now "low". | B | high |
| rn-s35-36 | refs | The magnesium range attributed to Hinkle could not be verified, and the rationale does not need it. Removed the ref. The trend carries the key. | A | medium |
| rn-s35-39 | rationale | CDC says treatment "might be effective in reducing" morbidity and mortality after 48 hours. The item said it "can reduce". Matched the CDC wording. | A | high |
| rn-s35-46 | topic, options, rationale | The displacement point (diluent volume is not final volume) repeats rn-s26-20. Replaced the 3.3 mL displacement distractor with a wrong-row 8 mL distractor. The item now tests reading the right row of a multi-strength table. Key value 4 mL is unchanged and options run low to high. | Uniqueness | medium |

Every edited item carries `version: 2`. Keys are unchanged in all eight. Item 46 keeps the 4 mL key, which moved from the fourth to the third position when the options were reordered low to high.

## Marked for pull

The pulled ids still need adding to the release pull list, which is outside this batch folder. Each item carries a `// PULL` comment.

| Item | Reason |
|---|---|
| rn-s35-35 | Same teaching point as rn-s17-29. New ringing in both ears during two ototoxic drugs is ototoxicity and is acted on first. Only the drug pair differs. |
| rn-s35-50 | Same calculation point as rn-s15-21 (dopamine), rn-c09-2-5 (argatroban) and rn-c19-3-5 (propofol). Converting a mcg/kg/minute prescription to mL/hour is already tested three times. A new point would change the key. |

After the two pulls the batch keeps 6 calculation items (13, 34, 41, 45, 46, 47). Item 47 runs the reverse direction (pump rate to dose) and stays.

## Key changes

None.

## Writer flags resolved

- rn-s35-37. The deoxycholate label says a daily dose must never exceed 1.5 mg/kg and warns of fatal cardiac or cardiopulmonary arrest. AmBisome is labeled not interchangeable mg for mg. 5 mg/kg for 70 kg is 350 mg, and half the bag is still 2.5 mg/kg. The key is unambiguous.
- rn-s35-39. The Tamiflu label limits the indication to 48 hours from onset in uncomplicated influenza. CDC (updated March 10, 2026) supports treatment of hospitalized clients after 48 hours. The stem names a hospitalized client with pneumonia. The key stands.
- rn-s35-44. The current Yescarta label says to stay near a health care facility for at least 2 weeks and not drive for at least 2 weeks. The label no longer mentions a REMS. The 38.0°C (100.4°F) threshold is in the patient information. The key stands.
- rn-s35-25. Krantz 2009 (PubMed abstract read) advises considering dose reduction or stopping methadone above a QTc of 500 ms and removing drugs that cause hypokalemia. The methadone label lists diuretic use and hypokalemia as QT risk factors. The key stands.
- rn-s35-13. Garcia 2012 Table 3 matches the exhibit row for row. 20 units/kg/hour for 90 kg at 50 units/mL is 36 mL/hour. All three distractor values recompute.
- rn-s35-24, 28 and 49. Item 24 now cites Hinkle. Item 28 was rewritten off the unsupported claim. Item 49 is fully supported by the 2024 consensus (glucose every 1 to 2 hours, potassium 2 hours after insulin starts then every 4 hours, dextrose below 250 mg/dL, insulin delayed below 3.5 mmol/L).
- rn-s35-09. The 2024 consensus delays insulin below 3.5 mmol/L, adds dextrose with saline in euglycemic DKA and stops SGLT2 inhibitors on admission. The item matches. The Farxiga source stands for the class warning although the stem names empagliflozin.
- Pediatric mg/kg checks. Item 41 matches the acyclovir label (20 mg/kg per dose, adult 800 mg dose above 40 kg). Item 45 matches CDC 2020 (rifampin 15 to 20 mg/kg/day, maximum 600 mg).

## Other findings, not changed

- rn-s35-31 pairs adalimumab with an IGRA, which item 01 presupposes. The abacavir and ethambutol pairings are new, so the item stays.
- rn-s35-14 says the label "calls for" dose reduction or interruption. The label says it "may be required". The meaning is close enough to leave.
- `common.ts` sets `reviewed: true` as the shared default. All 50 ids are in `docs/signoff.json`, so the gate passes. Left untouched as instructed.

## Sources verified

- Yescarta: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b70606e-b99c-4272-a0f1-b5523cce0c59
- Xeljanz: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e3d6b2-7838-4d2d-a417-09d919b43e13
- Farxiga: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72ad22ae-efe6-4cd6-a302-98aaee423d69
- Protamine: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c76876da-b9a8-45d0-9278-7df3288d3a06
- Praxbind: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c7400f8a-dcf4-a6df-6d07-983081b1bf34
- Vitamin K1: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e8808230-2c44-44c6-8cab-8f29b6b34051
- Zyprexa Relprevv: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=11544cba-64a9-49cb-8d74-da228053b252
- Chantix: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f0ff4f27-5185-4881-a749-c6b7a0ca5696
- Acamprosate: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=94ef2a5c-cc2f-4e7f-b159-b2d38188d5b8
- Methadone: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c54baaee-8ea4-45f5-a5c8-bb84cf86832f
- Rifampin: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50f706f9-5003-4e15-bece-85b6213b1f5c
- Vyvanse: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=704e4378-ca83-445c-8b45-3cfa51c1ecad
- Keytruda: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287
- Ziagen: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ca73b519-015a-436d-aa3c-af53492825a1
- Ethambutol: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3f6428d6-3745-4337-ad78-ebfff9f49135
- Isoniazid: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6dab7b7b-a3a9-47ef-b423-134bc6970d8b
- Vancomycin: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06dcfd36-942f-4752-86ad-4c5a6fc3e48f
- Amphotericin B deoxycholate: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a0a54943-9ce4-4f3e-b681-a1a9144c16ce
- AmBisome: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7be6506-4d20-401e-a0ff-02ad7c33158a
- Tamiflu: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b
- Valtrex: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=56a62c21-bead-4f3b-a24e-c3fd0b4a732f
- Acyclovir suspension: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da5a809c-6ddc-4609-9a34-ccb3d2d43976
- Edurant: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=03880372-2c68-45c6-a53a-f420c49541d6
- Cabenuva: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1698baf3-f895-4c42-a1b1-e9ee3f20da36
- Pfizerpen: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=efef4846-9497-41af-8dd6-518f86eca7f2
- Dobutamine: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9943a961-3b50-4847-8a84-d8414ce38daa
- Milrinone: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c2f052b-7ba2-4122-a50b-37ef2a834d61
- Myxredlin: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=afca6e80-a802-49fb-a978-5fe28a173001
- Ozempic: https://www.novo-pi.com/ozempic.pdf
- Victoza: https://www.novo-pi.com/victoza.pdf
- Mounjaro: https://pi.lilly.com/us/mounjaro-uspi.pdf
- Humira: https://www.rxabbvie.com/pdf/humira.pdf
- Remicade: https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/REMICADE-pi.pdf
- Entresto: https://www.novartis.com/us-en/sites/novartis_us/files/entresto.pdf
- Corlanor: https://www.pi.amgen.com/-/media/Project/Amgen/Repository/pi-amgen-com/Corlanor/corlanor_pi.pdf
- Lamictal: https://gskpro.com/content/dam/global/hcpportal/en_US/Prescribing_Information/Lamictal/pdf/LAMICTAL-PI-MG.PDF
- Abilify Maintena: https://www.otsuka-us.com/sites/g/files/qhldwo11721/files/media/static/Abilify-M-PI.pdf
- Vivitrol: https://www.vivitrolhcp.com/content/pdfs/prescribing-information.pdf
- Spravato: https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/SPRAVATO-pi.pdf
- Strattera: https://pi.lilly.com/us/strattera-pi.pdf
- Umpierrez 2024 consensus: https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/
- Garcia 2012, Table 3: https://pmc.ncbi.nlm.nih.gov/articles/PMC3278070/
- Krantz 2009, abstract via PubMed E-utilities: https://pubmed.ncbi.nlm.nih.gov/19153406/
- CDC influenza antivirals summary, updated March 10, 2026: https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html

Not reread: CDC LTBI 2020 (cited for the rifampin pediatric range, which matches the known 4R regimen), ISMP high-alert list and Hinkle.

## Needs Arjan's decision

- The two pulls (35 and 50).
- rn-s35-46. Confirm the reworked distractor set is acceptable, or pull it as a near repeat of rn-s26-20.

## Summary

50 items reviewed. 40 passed unchanged apart from Canada notes. 8 fixed with the key unchanged. 2 marked for pull. No key changes.
