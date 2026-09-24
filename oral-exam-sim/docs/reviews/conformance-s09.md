# Format conformance: batch s09 (EMS and environmental)

Batch s09 holds 30 SAMPs: ems-01 to ems-15 and environmental-01 to environmental-15. It has 123 questions: 40 single, 8 menu and 75 write-in. This pass changed format only. No `correct`, `select`, `required`, `accept` or `unacceptable` value changed, except the index remapping that the new option order needs. Every remap was checked by option text. Keyed option rewordings are listed below for physician review.

Files changed: `src/samps/s09/ems.ts` and `src/samps/s09/environmental.ts`.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 123 (48 single or menu, 75 write-in) |
| Options added or removed | 0 (every single already had 5 options, every menu 6 to 8) |
| Options reworded | 115 option texts in 48 questions |
| Keyed options reworded | 25 option texts in 23 questions (20 SAMPs) |
| Keyed options reordered only | 1 menu (ems-08 q3, key set unchanged, test passes) |
| Stems changed | 27 |
| SAMPs with vitals moved to `vitals` | 21 (3 of them hold weight only: ems-11, environmental-08, and weight added to ems-10) |
| Names removed | 0 (no stem named a patient. "Patient A" to "D" in environmental-15 are labels) |
| Updates changed | 20 (8 new updates made from context moved out of prompts, the rest notation only) |
| Explanations changed | 13 (4 to take reason text moved out of options, 9 for °C or hyphenated ages only) |
| Citations completed | 26 source entries (every citation now has a year or edition) |
| Citations replaced | 0 wholesale. 5 retitled to the verifiable document (see below) |

Stem changes: ages hyphenated, °C used for every temperature, vitals moved to the `vitals` field in CFPC formats with every value kept. Values kept in the stem on purpose, because the `vitals` format cannot hold them:

- environmental-07: bladder temperature 31.4°C (the route is not an allowed vitals route).
- environmental-06: esophageal temperature 23.8°C (arrest, no other vitals).
- environmental-05: "SpO2 does not read" and the oral thermometer "LO".
- environmental-03: the second BP reading, now "A repeat BP ten minutes after the first reading is 118/70 mmHg." The first reading, 172/104 mmHg, is in `vitals`.
- environmental-04: "Her pulse is irregularly irregular." The vitals field holds "168/minute irregular".
- ems-13: the pulse of one of six workers, now "a pulse of 42/minute".
- environmental-14: fetal heart rate, now "148/minute".

Vitals inside question updates (ems-01 q3, ems-14 q2, environmental-15 q2) stay in the update. Only "mmHg" and °C were added.

## Key position across the 40 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 7 | 26 | 6 | 1 | 0 |
| After | 9 | 9 | 8 | 8 | 6 |

No position now holds more than 30 percent (the maximum is 9 of 40, 22.5 percent) and every position holds at least one key. The key is the single longest option in 14 of 40 singles after (19 before), which is 35 percent, at the limit.

## Keyed option rewordings

Each rewording was needed to meet the 60 character limit, the 10 word limit, the length spread rule or the key parity rule, or to move reason text into the explanation. Where detail left an option, the explanation already stated it or now states it.

| SAMP | Question | Before | After |
|---|---|---|---|
| ems-01 | q1 | Bypass your hospital and transport directly to the PCI centre with cath lab pre-activation | Bypass to the PCI centre with cath lab pre-activation |
| ems-02 | q1 | Transport directly to the comprehensive stroke centre with pre-notification | Pre-notify and transport directly to the stroke centre |
| ems-05 | q2 | Strongly advise transport for observation because recurrent hypoglycemia is likely | Strongly advise transport for observation |
| ems-05 | q4 | Emergency treatment without consent, since he is incapable and delay would cause serious harm | Emergency treatment without consent |
| ems-06 | q3 | A methadone bottle with his name was found in his bag | A methadone bottle labelled with his name in his bag |
| ems-07 | q3 | Discuss hyperbaric oxygen with the regional hyperbaric centre | Discuss with the regional hyperbaric oxygen centre |
| ems-11 | q2 | Avoid intubation and monitor closely, since intubation can worsen acidosis and cerebral edema | Avoid intubation and monitor closely |
| ems-13 | q2 | Atropine 1 to 2 mg IV, doubling every 5 minutes until secretions dry | Atropine 1 to 2 mg IV, doubled every 5 minutes |
| ems-14 | q3 | 3% saline 100 mL IV over 10 minutes, repeated up to three times | 3% saline 100 mL IV over 10 minutes |
| ems-15 | q2 | A 31 year old woman at 30 weeks gestation with nausea and carboxyhemoglobin 17% | 31-year-old woman, 30 weeks pregnant, nausea, COHb 17% |
| ems-15 | q2 | A 58 year old man who was unconscious at the scene, now carboxyhemoglobin 11% | 58-year-old man, unconscious at scene, COHb now 11% |
| ems-15 | q2 | A 67 year old man with chest pain, new ST depression and carboxyhemoglobin 22% | 67-year-old man, chest pain, new ST depression, COHb 22% |
| environmental-02 | q2 | Evaporative cooling with lukewarm water spray and fans | Evaporative cooling with lukewarm spray and fans |
| environmental-04 | q3 | Propylthiouracil 500 to 1000 mg PO load, then 250 mg every 4 hours | Propylthiouracil 500 to 1000 mg PO, then 250 mg q4h |
| environmental-05 | q2 | Active external rewarming with forced air plus warmed IV fluids, and alert an ECLS capable centre | Forced air, warmed IV fluids and ECLS centre alert |
| environmental-05 | q4 | CPR, up to three shocks, hold epinephrine until core temperature is above 30 C, and arrange extracorporeal rewarming | CPR, up to 3 shocks, hold epinephrine, ECLS rewarming |
| environmental-06 | q2 | Extracorporeal life support with VA ECMO or cardiopulmonary bypass | Extracorporeal life support by VA ECMO or bypass |
| environmental-06 | q5 | When core temperature has been restored to at least 32 C and asystole persists | Persistent asystole after rewarming to at least 32°C |
| environmental-07 | q3 | Levothyroxine 200 to 400 mcg IV plus hydrocortisone 100 mg IV | IV levothyroxine 200 to 400 mcg plus hydrocortisone 100 mg |
| environmental-09 | q2 | Immersion in circulating water at 37 to 39 C until tissue is soft and red or purple | Immersion in circulating water at 37 to 39°C |
| environmental-10 | q3 | Land ambulance or aircraft pressurized to sea level or flown very low | Land ambulance or aircraft at sea level cabin pressure |
| environmental-12 | q2 | Urgent ENT assessment, head elevated rest, no straining and no diving | Urgent ENT review, head up rest, no straining or diving |
| environmental-13 | q3 | Urine output about 1 to 1.5 mL/kg/h, roughly 75 to 100 mL/h, until the urine clears | Urine output 75 to 100 mL/h until the urine clears |
| environmental-14 | q4 | Discharge with bleeding instructions and plastic surgery follow up | Discharge with bleeding advice and plastic surgery follow up |
| environmental-15 | q4 | Continue full resuscitation, since fixed dilated pupils are not reliable after lightning | Continue full resuscitation |

Menus whose keyed list order changed after alphabetical sorting, in the new index order, for the key edit log:

- ems-13 q2: "Atropine 1 to 2 mg IV, doubled every 5 minutes", "Pralidoxime 30 mg/kg IV over 30 minutes"
- ems-15 q2: "31-year-old woman, 30 weeks pregnant, nausea, COHb 17%", "58-year-old man, unconscious at scene, COHb now 11%", "67-year-old man, chest pain, new ST depression, COHb 22%"
- environmental-02 q2: "Cold water immersion", "Evaporative cooling with lukewarm spray and fans"
- environmental-04 q3: "Hydrocortisone 100 mg IV every 8 hours" (text unchanged), "Propranolol 60 to 80 mg PO every 4 hours" (text unchanged), "Propylthiouracil 500 to 1000 mg PO, then 250 mg q4h"
- environmental-09 q2: "Ibuprofen 400 mg PO twice daily" (text unchanged), "Immersion in circulating water at 37 to 39°C"

Explanations updated to carry the detail removed from keyed options: ems-11 q2 (acidosis and cerebral edema), environmental-04 q3 (propylthiouracil loading and every 4 hour dosing), environmental-09 q2 (end point: tissue soft and red or purple), environmental-13 q3 (1 to 1.5 mL/kg/h). The other explanations already stated the removed detail.

The check `keeps its keys` fails for exactly these 20 SAMPs: ems-01, ems-02, ems-05, ems-06, ems-07, ems-11, ems-13, ems-14, ems-15, environmental-02, environmental-04, environmental-05, environmental-06, environmental-07, environmental-09, environmental-10, environmental-12, environmental-13, environmental-14, environmental-15. All other checks pass (500 of 520). `tsc` reports no error in `samps/s09`.

## Citation changes

| Source id | Now cites | Verification |
|---|---|---|
| als-pcs | Ontario Ministry of Health. ALS Patient Care Standards, version 5.5. 2025 | https://www.ontario.ca/files/2026-08/moh-advanced-life-support-als-patient-care-standards-pcs-5.5-en-2025-08-18.pdf |
| bls-pcs | Ontario Ministry of Health. BLS Patient Care Standards, version 3.4. 2023 | https://files.ontario.ca/moh_2/moh-standards-basic-life-support-patient-care-standards-v3-4-en-2023-03-10.pdf |
| criticall | CritiCall Ontario. Backgrounder and fact sheet. 2019 (retitled, was the service name) | https://admin.criticall.org/Criticall/media/Resources/Covers/2019-CritiCall-Ontario-Backgrounder-and-Fact-Sheet.pdf?ext=.pdf |
| ornge | Ornge. Annual report 2024/2025. 2025 (retitled, was the service name) | https://www.ornge.ca/Media/Ornge/Documents/Publications/Annual%20Report/Annual-Report-2024-2025.pdf |
| csbpr | Canadian Stroke Best Practice Recommendations. Acute Stroke Management. 7th edition, 2022 update | https://pubmed.ncbi.nlm.nih.gov/36529857/ |
| field-triage | Newgard CD, et al. National guideline for the field triage of injured patients, 2021. J Trauma Acute Care Surg. 2022 | https://pubmed.ncbi.nlm.nih.gov/35475939/ |
| atls | ACS Committee on Trauma. ATLS Student Course Manual. 11th ed. 2025 | https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/ |
| btf | Carney N, et al. Guidelines for the management of severe TBI, fourth edition. Neurosurgery. 2017 | https://pubmed.ncbi.nlm.nih.gov/27654000/ |
| rosen (both files) | Rosen's Emergency Medicine. 10th ed. Elsevier. 2023 | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| tintinalli (both files) | Tintinalli's Emergency Medicine. 9th ed. McGraw Hill. 2020 | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| oha-codes | Ontario Hospital Association. OHA Emergency Management Toolkit, including the standardized hospital emergency codes. 2008 (retitled to the published toolkit) | http://docplayer.net/12983067-oha-emergency-management-toolkit.html |
| trekk-dka | TREKK. Bottom line recommendations. Diabetic ketoacidosis. Version 4.0. 2023 | https://cms.trekk.ca/wp-content/uploads/2023/11/2023-01-25_DKA_BLR_FINAL_v4.0.pdf |
| dc-peds | Wherrett DK, et al. Diabetes Canada 2018 CPG. Type 1 diabetes in children and adolescents. Can J Diabetes. 2018 | https://pubmed.ncbi.nlm.nih.gov/29650103/ |
| uhms | UHMS. Hyperbaric Medicine Indications Manual. 15th ed. 2023 (retitled to the current edition) | https://www.bestpub.com/books/ebooks/product/hyperbaric-medicine-indications-manual-15th-edition/category_pathway-31.html |
| wms-heat | Eifling KP, et al. WMS heat illness guidelines. 2024 update. Wilderness Environ Med. 2024 | https://pubmed.ncbi.nlm.nih.gov/38425235/ |
| wms-hypo | Dow J, et al. WMS accidental hypothermia guidelines. 2019 update. Wilderness Environ Med. 2019 | https://pubmed.ncbi.nlm.nih.gov/31740369/ |
| wms-drown | Davis CA, et al. WMS drowning guidelines. 2024 update. Wilderness Environ Med. 2024 | https://pubmed.ncbi.nlm.nih.gov/38379489/ |
| wms-lightning | Davis C, et al. WMS lightning injury guidelines. 2014 update. Wilderness Environ Med. 2014 | https://pubmed.ncbi.nlm.nih.gov/25498265/ |
| uhms-dcs | UHMS best practice guidelines. Prevention and treatment of DCS and AGE. 2011 | https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf |
| navy | Naval Sea Systems Command. U.S. Navy Diving Manual. Revision 7, Change A. 2018 | https://books.google.com/books/about/U_S_Navy_Diving_Manual_Revision_7_Change.html?id=ZeICEAAAQBAJ |
| dan-flying | Sheffield PJ, Vann RD, editors. Flying After Recreational Diving Workshop proceedings. DAN. 2004 | https://dan.org/wp-content/uploads/2020/07/FAD_ProceedingSummary_FINAL.pdf |
| ata-thyro | Ross DS, et al. 2016 ATA hyperthyroidism and thyrotoxicosis guidelines. Thyroid. 2016 | https://journals.sagepub.com/doi/10.1089/thy.2016.0229 |
| ata-hypo | Jonklaas J, et al. Guidelines for the treatment of hypothyroidism. Thyroid. 2014 | https://journals.sagepub.com/doi/10.1089/thy.2014.0028 |
| abls | American Burn Association. ABLS Course Provider Manual. 2018 update | https://www.readkong.com/page/advanced-burn-life-support-course-provider-manual-2018-3855651 |

Left unchanged because they already named a year: hcca (1996), ccs-stemi (2019), tor (2006), start (1996), weaver (2002), wms-frost (2024), erc (2021), hope (2018).

## Needs physician decision

Nothing below was changed.

1. environmental-05 q4. The key follows the European (ERC) approach: up to three shocks and no epinephrine below 30°C. The explanation itself says Heart and Stroke Canada follows AHA guidance, which allows standard shocks and epinephrine during rewarming. SAMP_SPEC section 9 prefers the Canadian source of record. Please confirm the key stands with this Canadian caveat.
2. Seven write-in `accept` texts still write temperatures as "NN C" rather than °C (ems-14 q2, environmental-01 q1 and q3, environmental-05 q3, environmental-06 q1 and q3, environmental-09 q1). `accept` is frozen, so they were left. A notation only fix would need sign-off.
3. ems-03 q4. The distractor "Age over 55 years" reflects the older field triage guideline. The 2021 national guideline now cited uses age 65 or older as its special consideration. The key (ejection) is unaffected. The explanation's reasoning still holds.
4. environmental-07 q3. To meet the 10 word limit the keyed option now reads "IV levothyroxine 200 to 400 mcg plus hydrocortisone 100 mg", so the IV route of hydrocortisone is implied rather than stated. Please confirm this reads as intended.
5. Citation years. The ALS and BLS standards, ATLS and the UHMS manual were updated to the current verified editions (ALS PCS 5.5 2025, BLS PCS 3.4 2023, ATLS 11th ed 2025, UHMS 15th ed 2023). The teaching points were not rechecked line by line against each new edition. The TREKK DKA version 4.0 (2023) reflects the ISPAD 2022 guidance.
