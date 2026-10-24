# Writer report: batch s36

Stand-alone batch. Pharmacological and Parenteral Therapies (20) and Reduction of Risk Potential (30). Files are `src/bank/s36/common.ts`, `part1.ts` to `part5.ts` and `index.ts`. Every item has `reviewed: false`, `version: 1` and an empty `canada` note.

## Test result

`BATCH=s36 npx vitest run tests/bank.test.ts` passes: 61 of 61, including the whole-bank near duplicate gate and the sign-off gate. `npx tsc --noEmit -p .` reports no errors in `bank/s36`. The highest word trigram Jaccard between an s36 stem and any other stem in the bank is 0.31 (rn-s36-10 against rn-s20-30). No s36 topic label matches an existing label.

## Counts

| Client Needs | Items |
|---|---|
| PPT | 20 |
| RRP | 30 |

| Type | Items |
|---|---|
| mc | 26 |
| sata | 10 |
| msn | 3 |
| dnd | 3 |
| cloze | 2 (rn-s36-14 dyad, rn-s36-26 triad) |
| highlight | 2 |
| bowtie | 2 |
| trend | 2 (rn-s36-06 and rn-s36-47, both mc) |

| CJMM step | Items |
|---|---|
| recognize | 5 |
| analyze | 14 |
| prioritize | 2 |
| generate | 10 |
| action | 13 |
| evaluate | 6 |

| Difficulty | Items |
|---|---|
| 2 | 11 |
| 3 | 19 |
| 4 | 16 |
| 5 | 4 |

## MC key positions

28 mc items, counting the two trend items. A 7, B 7, C 7, D 7. The key is the strict longest option in none of them. Keyed choices run longer than distractors in 11 of 22 multi-key pools. Select all keys sit in the first half of the list in 13 of 31.

| Item | Key | Item | Key | Item | Key | Item | Key |
|---|---|---|---|---|---|---|---|
| 02 | C | 16 | B | 25 | B | 37 | A |
| 03 | A | 17 | B | 28 | D | 41 | D |
| 04 | D | 18 | C | 29 | C | 42 | A |
| 05 | C | 20 | D | 30 | D | 47 | D |
| 06 | B | 21 | A | 32 | A | 48 | C |
| 09 | C | 22 | A | 33 | B | 50 | B |
| 12 | A | 23 | C | 35 | B | | |
| 13 | D | | | | | | |

## Calculation items

Four of 20 PPT items (20 percent) carry a `calc` block: rn-s36-05 albumin 25% volume after paracentesis (192 mL), rn-s36-17 furosemide push portions (0.5 mL), rn-s36-25 PCA hourly ceiling (1.2 mg) and rn-s36-29 plasma 15 mL/kg (1050 mL). Two RRP items also carry one: rn-s36-14 expected PaCO2 by Winter's formula (24.5 mmHg, range 22.5 to 26.5) and rn-s36-48 pleural to serum protein ratio (0.7). Every step and every number in the distractor whys was recomputed by hand.

## Topics, by focus list

PPT: vesicant versus nonvesicant leaks (01), vincristine extravasation (03), albumin after paracentesis (05), local anesthetic toxicity on an epidural (07), septic platelet reaction (09), separate lipid emulsion bag (11), vein preservation in kidney disease (13), midline-compatible infusions (15), furosemide push pacing (17), label push rates for digoxin, ondansetron and calcium chloride (19), ceftriaxone with lactated Ringer's (21), basal PCA rate in an opioid-naive adult (23), PCA hourly ceiling (25), massive transfusion protocol (27), plasma volume and overload (29), epidural and IV misconnection (31), intraosseous leak (33), hypodermoclysis fluid (35), subcutaneous immune globulin site reaction (37), matching blood products to uses, including cryoprecipitate (39).

RRP: salicylate mixed acid-base (02), heparin anti-Xa (04), flat troponin in kidney failure (06), TEE screening (08), radial forearm hematoma (10), BNP in obesity (12), Winter's formula (14), procalcitonin (16), unbound phenytoin (18), digoxin sampling time (20), vancomycin level from the infusing lumen (22), thoracentesis assistance (24), ascitic neutrophil count (26), topical lidocaine toxicity after bronchoscopy (28), femoral hematoma (30), bowel preparation end point (32), ERCP complications (34), liver biopsy aftercare (36), bone marrow aspiration teaching (38), contrast kidney protection (40), contrast CT on hemodialysis (41), gadolinium MRI timing around dialysis (42), MR-conditional pacemaker steps (43), refeeding from IV dextrose alone (44), SIADH versus diabetes insipidus (45), diabetes insipidus bow-tie (46), lactate trend (47), pleural protein ratio (48), bowel preparation volume loss (49), enoxaparin peak anti-Xa timing (50).

Before each chunk I searched the inventory for the planned terms. Existing items already cover hemolytic and overload transfusion reactions, citrate hypocalcemia, plasma ABO choice, platelet handling, doxorubicin and norepinephrine leaks, saline infiltration, epidural morphine, high block, PCA by proxy, pneumothorax after thoracentesis and bronchoscopy, platelets before liver biopsy, voiding before paracentesis, split-dose timing, radial band care, rising troponin, post-ERCP pancreatitis, bone marrow site care, MRI screening, metformin and contrast, refeeding bowtie and plan, and the SIADH lab matrix. Each s36 item tests a different point.

## Sources and verification

Web search ran out partway through the batch. The search tool reported the shared budget used up. After that I verified sources by direct lookups only: DailyMed label records by set id, PubMed records by PMID through E-utilities, and the full PDFs of the AABB Circular and the ACR contrast manual.

- Infusion Nurses Society, Infusion Therapy Standards of Practice, 9th edition, 2024. https://pubmed.ncbi.nlm.nih.gov/38211609/
- Gorski LA et al., Non-Antineoplastic Vesicants: 2024 Update, J Infus Nurs 47(5):290. https://pubmed.ncbi.nlm.nih.gov/39250767/ (abstract confirms that extravasation is a vesicant leak)
- Vincristine label, Hospira 2026, hyaluronidase and moderate heat. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b22e4c8e-dbe1-4d4b-a026-e1812974071c
- Dopamine in dextrose label, Hospira 2026, phentolamine for extravasation. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=08f23f6e-150d-45ea-098e-f2edf64c21a1
- Calcium chloride 10% label, PAI 2026, maximum 1 mL/minute and tissue necrosis. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5d9c301-599e-47bb-ba9b-c0065c08dfb4
- AABB Circular of Information, June 2024. Read in full from https://weareblood.org/wp-content/uploads/2024/10/Circular-of-Information-for-the-Use-of-Human-Blood-and-Blood-Components-June-2024.pdf (room temperature platelets and septic reactions, plasma about 15 mL/kg, ABO but not Rh for plasma, cryoprecipitate for low fibrinogen, hypothermia with rapid cold blood)
- Biggins SW et al., AASLD ascites guidance 2021. https://pubmed.ncbi.nlm.nih.gov/33942342/ (albumin 6 to 8 g/L removed was confirmed through secondary summaries, and the neutrophil threshold of 250 cells/mm3 is standard)
- Neal JM et al., ASRA LAST checklist 2020 version. https://pubmed.ncbi.nlm.nih.gov/33148630/
- Palmer BF, Clegg DJ, Salicylate Toxicity, NEJM 2020. https://pubmed.ncbi.nlm.nih.gov/32579814/
- Garcia DA et al., Parenteral Anticoagulants, Chest 2012. https://pubmed.ncbi.nlm.nih.gov/22315264/
- Thygesen K et al., Fourth Universal Definition of MI. https://pubmed.ncbi.nlm.nih.gov/30571511/
- Hahn RT et al., ASE TEE guideline 2013. https://pubmed.ncbi.nlm.nih.gov/23998692/
- Shroff AR et al., SCAI transradial consensus 2020. https://pubmed.ncbi.nlm.nih.gov/31880380/
- Intralipid label, Fresenius Kabi 2025: 1.2 micron filter, 12 hours by Y-connector, egg, soybean and peanut contraindication, baseline triglyceride, no pressurizing. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=61e025f1-a38e-4af2-9e18-13ea12977cf5
- Mueller C et al., HFA natriuretic peptide guidance 2019. The abstract confirms that values are about 50 percent lower in obesity. https://pubmed.ncbi.nlm.nih.gov/31222929/
- Lok CE et al., KDOQI vascular access 2019. https://pubmed.ncbi.nlm.nih.gov/32778223/
- Chopra V et al., MAGIC 2015. https://pubmed.ncbi.nlm.nih.gov/26369828/
- Berend K et al., acid-base, NEJM 2014. https://pubmed.ncbi.nlm.nih.gov/25295502/
- Evans L et al., Surviving Sepsis 2021. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Furosemide injection label, 2026: 1 to 2 minutes, ototoxicity with rapid injection. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2590ebb6-ce2a-4e23-9244-e54e3010d488
- Phenytoin label, 2026: monitor unbound levels in hypoalbuminemia. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=46d5c0d1-a97b-46d9-8cf4-994780673337
- Lanoxin injection label, 2025: sample at least 6 hours after a dose, give IV over 5 minutes or longer. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9ec84cac-6ecc-43dc-8006-6ccc029e2707
- Ondansetron injection label, 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a44601b-c31c-4779-a688-28cc4cc75e8b
- Ceftriaxone label, Hikma 2026: sequential use with a thorough flush in clients other than neonates. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8351aa37-552d-471d-b293-c564dcb6ec29
- Chou R et al., APS postoperative pain guideline 2016. https://pubmed.ncbi.nlm.nih.gov/26827847/
- Roberts ME et al., BTS pleural guideline 2023. https://pubmed.ncbi.nlm.nih.gov/37433578/
- Holcomb JB et al., PROPPR 2015. https://pubmed.ncbi.nlm.nih.gov/25647203/
- Du Rand IA et al., BTS bronchoscopy guideline 2013. https://pubmed.ncbi.nlm.nih.gov/23860341/
- Wiersum-Osselton JC et al., TACO definition 2019. https://pubmed.ncbi.nlm.nih.gov/31080132/
- Johnson DA et al., USMSTF bowel cleansing 2014. https://pubmed.ncbi.nlm.nih.gov/25239068/
- Chandrasekhara V et al., ASGE ERCP adverse events 2017. https://pubmed.ncbi.nlm.nih.gov/27546389/
- Hylenex label, 2025: solutions without electrolytes given subcutaneously can cause hypovolemia. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3023cc56-ed4b-4e87-b3a1-81b20943f658
- Neuberger J et al., BSG liver biopsy guideline 2020. https://pubmed.ncbi.nlm.nih.gov/32467090/
- Hizentra label, CSL Behring 2023: local site reactions are the most common. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7b58f5ff-0316-49a3-b585-1f6003ddb953
- ACR Manual on Contrast Media 2024. Read in full: isotonic volume expansion, no N-acetylcysteine, no furosemide, no dialysis schedule change after iodinated contrast, elective gadolinium MRI just before routine hemodialysis. https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf
- Indik JH et al., HRS MRI and CIED consensus 2017. https://pubmed.ncbi.nlm.nih.gov/28502708/
- da Silva JSV et al., ASPEN refeeding consensus 2020. https://pubmed.ncbi.nlm.nih.gov/32115791/
- Spasovski G et al., hyponatremia guideline 2014. https://pubmed.ncbi.nlm.nih.gov/24569125/
- Tomkins M et al., central diabetes insipidus review 2022. https://pubmed.ncbi.nlm.nih.gov/35771962/
- Hinkle, Brunner and Suddarth 15th edition 2022, and Pagana, Mosby's Diagnostic and Laboratory Test Reference 17th edition 2024. These textbooks are already used in the bank.

## For the reviewer

These statements rest on a verified citation, but I could not read the exact passage before the search budget ran out:

- rn-s36-01: cefazolin as a nonvesicant. I could not open the 2024 INS vesicant list itself.
- rn-s36-13: the MAGIC and KDOQI advice to avoid PICCs and midlines in advanced kidney disease and to prefer a small-bore tunneled jugular catheter.
- rn-s36-22: the INS advice against drawing a drug level from the lumen that infuses the drug.
- rn-s36-23: the APS 2016 recommendation against routine basal opioid infusion with IV PCA in opioid-naive adults.
- rn-s36-24: BTS 2023 practice during thoracentesis, which is to stop for chest tightness or cough and limit volume. The item states no volume number.
- rn-s36-28: the BTS weight-based limit on topical lidocaine. The item states no number.
- rn-s36-31: INS neuraxial line safety, which covers port-free tubing, labels and tracing lines.
- rn-s36-36: right side-lying after liver biopsy. This comes from the nursing text and may not be in the BSG guideline.
- rn-s36-44: ASPEN advice to give thiamine before dextrose-containing IV fluids in at-risk clients.
- rn-s36-19: the ondansetron minimum of 30 seconds. It was read from the label's adverse reaction and trial text, not from its Table 1.
- rn-s36-05: the albumin dose. The 8 g/L in the stem is a prescription within the AASLD range of 6 to 8 g/L. That range was confirmed only through secondary summaries.

Other points:

- Overlap with a parallel batch: rn-s36-47 (lactate trend after resuscitation) is close in theme to rn-s37 "Timing a repeat lactate in sepsis". Mine tests reading a multi-parameter trend. That item tests when to repeat the lactate.
- rn-s36-41 and rn-s36-42 both involve a client on dialysis and contrast. They teach different points: no schedule change after iodinated contrast, and MRI timing before routine dialysis after gadolinium.
- Several DailyMed labels are from repackagers or relabelers, such as Cardinal Health, Major and Henry Schein. The cited text matches the originator labels as far as I checked.
- Lactate is given in mmol/L only. Phenytoin now has SI values in parentheses. Lab values reported in units that match their SI value, such as ng/L, pg/mL and mOsm/kg, have no second unit.
- Process note: for a few seconds I copied a scratch checker into `tests/` and then deleted it at once. No test run used it, and no file outside `src/bank/s36/` and this report remains changed.
