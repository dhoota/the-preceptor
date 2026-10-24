# Batch s35 writer report

Stand-alone batch, 50 items, rn-s35-01 to rn-s35-50. Files: `src/bank/s35/common.ts`, `part1.ts` to `part5.ts`, `index.ts`. Every item has `reviewed: false`, `version: 1` and an empty `canada` note.

`BATCH=s35 npx vitest run tests/bank.test.ts` passes: 61 of 61 tests, including the whole-bank near duplicate and sign-off tests. `npx tsc --noEmit -p .` reports nothing for `bank/s35`.

## Counts

Client Needs: PPT 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2 (both trend items are mc on a 3-point table).

CJMM steps: recognize 4, analyze 12, prioritize 5, generate 10, action 12, evaluate 7.

Difficulty: 1 = 1, 2 = 12, 3 = 19, 4 = 15, 5 = 3.

Calculation items with a `calc` block: 7 of 50 (gate needs 6). They are 13 (heparin protocol rate), 34 (shortest vancomycin infusion time), 41 (capped acyclovir dose), 45 (rifampin mg/kg/day check), 46 (penicillin G reconstitution), 47 (dobutamine dose from a running pump rate) and 50 (milrinone mcg/kg/minute rate).

## MC key positions

Across the 28 mc items (26 mc plus 2 trend): position 1 = 7, position 2 = 7, position 3 = 7, position 4 = 7. The key is the strict longest option in 1 of 28 (item 45, where two options share the number 17.3).

By item: 01:3 04:4 05:1 07:4 08:2 11:2 12:1 13:2 14:3 16:1 17:4 18:2 19:3 24:4 26:3 28:1 34:3 35:4 36:2 37:1 39:4 41:2 42:1 45:3 46:4 47:2 48:1 50:3. Numeric options run low to high.

## Coverage of the focus list

- Biologics and TB screening: 01 (positive IGRA before adalimumab), 02 (infliximab pre-infusion checks with fever and a live vaccine), 31 (screening test per drug).
- JAK inhibitors: 03 (tofacitinib teaching), 04 (baseline lymphocyte limit).
- GLP-1 receptor agonists: 05 (tirzepatide and oral contraceptives), 06 (liraglutide contraindications and pen sharing), 07 (semaglutide kidney injury from volume loss).
- SGLT2 inhibitors: 08 (hold 3 days before surgery), 09 (bowtie, treating euglycemic ketoacidosis with dextrose and insulin), 10 (sick day and Fournier teaching).
- Anticoagulant reversal: 11 (protamine reaction risk with NPH insulin), 12 (rebound after idarucizumab), 17 (IV phytonadione rate).
- Heparin nomogram: 13.
- Sacubitril-valsartan: 14 (trend, potassium during titration).
- Ivabradine: 15 (teaching), 16 (diltiazem interaction).
- Lamotrigine rash: 18 (rash with fever and mucosal signs), 19 (restart after a 10-day gap).
- Long-acting injectable antipsychotics: 20 (olanzapine pamoate observation), 21 (aripiprazole depot oral overlap).
- Varenicline: 22. Naltrexone and acamprosate: 23, 24.
- Methadone and QT: 25 (cloze triad), 26 (rifampin lowers methadone).
- Esketamine: 27 (session order). ADHD drugs: 28 (atomoxetine), 29 (stimulant history review).
- Checkpoint inhibitors: 30. Cytokine release syndrome: 32 (bowtie), 44 (CAR T discharge teaching).
- Vancomycin: 34, 35 (ototoxicity with gentamicin). Amphotericin B: 36 (trend), 37 (conventional and liposomal mix-up), 38.
- Oseltamivir: 39 (hospitalized client after 48 hours). Acyclovir and hydration: 40 (valacyclovir neurotoxicity), 41.
- Antiretrovirals: 42 (rilpivirine with omeprazole), 43 (oral cover for a missed long-acting injection).
- Rifampin and isoniazid: 26, 33 (isoniazid neuropathy and pyridoxine), 45.
- Insulin infusion: 48 (overlap before stopping), 49 (start-up safety checks). Reconstitution: 46. mcg/kg/minute: 47, 50.

## Uniqueness

Before each chunk I grepped the inventory for every planned drug and teaching point. Existing items already test SGLT2 ketoacidosis recognition (s16-04), the sacubitril-valsartan 36-hour washout (s17-04), naltrexone precipitated withdrawal (s18-13), vancomycin infusion reaction and rate (s15-06, s18-24, c20-4-5), IV acyclovir crystals (s16-32), oseltamivir teaching and volume (s18-30, s27-31, s27-48), abacavir hypersensitivity (s18-29), checkpoint colitis (s18-39), stimulant timing (s16-37), paliperidone deltoid site (c11-5-5), insulin infusion rates (s16-41, c03-2-5, c20-1-5) and reversal agent matching (s15-29, c16-5-4). The s35 items on those drugs test different points, listed above. No s35 topic label equals an existing label. The highest stem trigram Jaccard against the whole bank is 0.36, between two s35 items (02 and 29, 03 and 15).

## Sources and verification

Drug facts come from the current US labels, downloaded from DailyMed or the manufacturer and read as text. Guideline facts were checked on PubMed or the source page.

- Humira: https://www.rxabbvie.com/pdf/humira.pdf (revised 12/2025)
- Remicade: https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/REMICADE-pi.pdf (02/2025)
- Xeljanz: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=68e3d6b2-7838-4d2d-a417-09d919b43e13 (9/2026)
- Mounjaro: https://pi.lilly.com/us/mounjaro-uspi.pdf (08/2026)
- Victoza: https://www.novo-pi.com/victoza.pdf (10/2025). Ozempic: https://www.novo-pi.com/ozempic.pdf (05/2026)
- Farxiga: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72ad22ae-efe6-4cd6-a302-98aaee423d69 (6/2026)
- Umpierrez 2024 hyperglycemic crises consensus: https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/
- CDC LTBI 2020: https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm
- Protamine (Fresenius Kabi): setid c76876da-b9a8-45d0-9278-7df3288d3a06. Praxbind: setid c7400f8a-dcf4-a6df-6d07-983081b1bf34
- Garcia 2012 ACCP parenteral anticoagulants, nomogram in Table 3: https://pmc.ncbi.nlm.nih.gov/articles/PMC3278070/
- Entresto: https://www.novartis.com/us-en/sites/novartis_us/files/entresto.pdf (4/2024)
- Corlanor: https://www.pi.amgen.com/-/media/Project/Amgen/Repository/pi-amgen-com/Corlanor/corlanor_pi.pdf (08/2021)
- Vitamin K1 (Hospira): setid e8808230-2c44-44c6-8cab-8f29b6b34051
- Lamictal: https://gskpro.com/content/dam/global/hcpportal/en_US/Prescribing_Information/Lamictal/pdf/LAMICTAL-PI-MG.PDF (10/2025)
- Zyprexa Relprevv: setid 11544cba-64a9-49cb-8d74-da228053b252. Abilify Maintena: https://www.otsuka-us.com/sites/g/files/qhldwo11721/files/media/static/Abilify-M-PI.pdf
- Chantix: setid f0ff4f27-5185-4881-a749-c6b7a0ca5696. Vivitrol: https://www.vivitrolhcp.com/content/pdfs/prescribing-information.pdf. Acamprosate: setid 94ef2a5c-cc2f-4e7f-b159-b2d38188d5b8
- Methadone (VistaPharm): setid c54baaee-8ea4-45f5-a5c8-bb84cf86832f. Krantz 2009: https://pubmed.ncbi.nlm.nih.gov/19153406/. Rifampin: setid 50f706f9-5003-4e15-bece-85b6213b1f5c
- Spravato: https://www.janssenlabels.com/package-insert/product-monograph/prescribing-information/SPRAVATO-pi.pdf. Strattera: https://pi.lilly.com/us/strattera-pi.pdf. Vyvanse: setid 704e4378-ca83-445c-8b45-3cfa51c1ecad
- Keytruda: setid 9333c79b-d487-4538-a9f0-71b91a02b287. Yescarta: setid 9b70606e-b99c-4272-a0f1-b5523cce0c59
- Ziagen: setid ca73b519-015a-436d-aa3c-af53492825a1. Ethambutol: setid 3f6428d6-3745-4337-ad78-ebfff9f49135. Isoniazid: setid 6dab7b7b-a3a9-47ef-b423-134bc6970d8b
- Vancomycin (Sagent): setid 06dcfd36-942f-4752-86ad-4c5a6fc3e48f
- Amphotericin B deoxycholate (X-Gen): setid a0a54943-9ce4-4f3e-b681-a1a9144c16ce. AmBisome: setid f7be6506-4d20-401e-a0ff-02ad7c33158a
- CDC influenza antivirals summary (updated March 10, 2026): https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html. Tamiflu: setid ee3c9555-60f2-4f82-a760-11983c86e97b
- Valtrex: setid 56a62c21-bead-4f3b-a24e-c3fd0b4a732f. Acyclovir suspension: setid da5a809c-6ddc-4609-9a34-ccb3d2d43976
- Edurant: setid 03880372-2c68-45c6-a53a-f420c49541d6. Cabenuva: setid 1698baf3-f895-4c42-a1b1-e9ee3f20da36
- Pfizerpen: setid efef4846-9497-41af-8dd6-518f86eca7f2. Dobutamine (Hospira): setid 9943a961-3b50-4847-8a84-d8414ce38daa. Milrinone (Hikma): setid 4c2f052b-7ba2-4122-a50b-37ef2a834d61. Myxredlin: setid afca6e80-a802-49fb-a978-5fe28a173001
- ISMP high-alert list 2024: https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings
- Hinkle, Brunner and Suddarth 15th edition, used only for normal potassium and magnesium ranges and general ototoxicity context.

DailyMed links take the form https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=<setid>.

## For the reviewer

- The session's web search quota ran out partway through part 2. After that, facts were verified by downloading labels directly from DailyMed or the manufacturer, by PubMed records, and by fetching known guideline pages. No fact rests on memory alone.
- 09 bowtie. The 2024 consensus now delays insulin below a potassium of 3.5 mEq/L, not 3.3 as in older guidance and in the fixture. The item uses 3.5.
- 13 and the nomogram. The exhibit reproduces the Raschke style nomogram from Garcia 2012 Table 3. Local protocols differ, so the item tells the reader to use the protocol in the exhibit.
- 19. The "more than 5 half-lives" rule is from the Lamictal label. The 7-day figure comes from the 32.8-hour mean half-life in the label's single-dose data. That half-life is stated in a ref.
- 24. The whys for GGT and MCV rest on general knowledge that heavy drinking raises both. No source in the item states this directly.
- 25. The QTc 500 ms threshold is from Krantz 2009, an expert panel. It is not in the methadone label.
- 28. "Benefit builds over weeks" rests on the label's titration schedule (response judged after 2 to 4 weeks). The label does not give a time to effect.
- 35. The item depends on the vancomycin label naming aminoglycosides as added ototoxic risk. The temperature 37.2°C and the WBC trend are written as signs of improvement.
- 37. The 5 mg/kg prescription fits AmBisome (3 to 5 mg/kg for systemic fungal infection). The bag is conventional deoxycholate, labeled not to exceed 1.5 mg/kg.
- 39. The Tamiflu label limits the indication to 48 hours from symptom onset. The key follows CDC guidance for hospitalized clients. A reviewer may want the stem to say this explicitly.
- 43 and 44. Both follow current labels. Yescarta now says 2 weeks near a facility and 2 weeks without driving, down from the older 4 and 8 weeks.
- 49. The insulin start-up checks follow the 2024 consensus (glucose every 1 to 2 hours, potassium 2 hours after insulin starts and every 4 hours after). The second-nurse check follows ISMP's high-alert list. The ECRI page summarizing that list names "redundancies" rather than independent double checks.
- All Canada notes are empty. I was not sure enough of a Canadian marketing difference for any drug in the batch, including olanzapine pamoate and dobutamine premixes.
