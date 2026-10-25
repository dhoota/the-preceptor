# Batch s36 review

Independent adversarial review of batch s36 (Pharmacological and Parenteral Therapies on IV therapy, and Reduction of Risk Potential on labs and diagnostics). Scope was all 50 items in `part1.ts` to `part5.ts` and the sources in `common.ts`. The batch has no extra file. Both lenses were applied to every item. Every calc item and every SI and temperature pair was recomputed. Every item was grepped for topic and teaching point against the 2,000 original items and the other new batches.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s36-01 | options[3] | "Vincristine IV push" conflicts with the current label, which gives diluted vincristine from a flexible plastic container. Now a 50 mL minibag. | A | high |
| rn-s36-03 | stem | Same defect. Vincristine by slow IV push is no longer label practice. Now a diluted minibag infusion that the nurse stops. | A | high |
| rn-s36-13 | sources | The KDOQI passage on PICCs and jugular catheters could not be read. Replaced KDOQI with the BC Renal 2020 vein preservation guideline, which says to use a small tunneled jugular line and no PICC. | A | high |
| rn-s36-16 | sources | Surviving Sepsis 2021 is superseded. The 2026 guideline keeps the suggestion to use procalcitonin with clinical evaluation to stop antibiotics. Cited the 2026 guideline. | A | high |
| rn-s36-22 | rationale, sources | The INS claim on the infusing lumen could not be verified. Replaced it with Wright 2010, which reports falsely high vancomycin levels drawn through the infusing catheter. | A | medium |
| rn-s36-24 | sources | The BTS 2023 guideline did not hold the procedure text. Cited the BTS 2023 clinical statement on pleural procedures, which says to stop for tightness, pain or persistent cough and to drain at most 1.5 L. | A | high |
| rn-s36-28 | stem | The pneumothorax why said "there is no chest pain", but the stem never said so. Added that the client denies chest pain. | B | high |
| rn-s36-31 | sources | The INS neuraxial passage could not be read. Replaced with two ISMP Canada bulletins that cover portless epidural tubing, labels, tracing lines and keeping epidural and IV solutions apart. | A | high |
| rn-s36-34 | stem, process | "Discharge teaching" did not fit a token about free air on an x-ray. The stem now asks which complications to watch for. Process changed to clinical judgment. | B | medium |
| rn-s36-37 | options[3].why | "Firm massage can bruise the sites" had no source. The why now says that expected local reactions need no added site treatment, which the Hizentra label supports. | A | medium |
| rn-s36-47 | stem, tab, options, rationale, refs, sources | Repeated rn-s22-08 (falling lactate shows response) and sat close to rn-s37-02. It also used the 2021 MAP target of 65 for a 72-year-old. Rewritten as below. | A, uniqueness | high |

Every edited item carries `version: 2`. Keys are unchanged in all eleven. Item 47 keeps "Tissue perfusion is improving" in position D.

Item 47 now tests a new point from the 2026 sepsis guideline. The stem gives a prescribed MAP range of 60 to 65 mmHg, the range suggested for adults 65 or older. The trend adds capillary refill time. The lactate falls to 2.4 mmol/L but is not yet normal. Distractors test a MAP below 65 read as failure and giving fluid until lactate normalizes.

## Marked for pull

Each pulled item carries a `// PULL` comment. The orchestrator needs to add the ids to the pull list outside this folder.

| Item | Reason |
|---|---|
| rn-s36-26 | Same point as rn-s24-26. Both test SBP signs from a neutrophil count above 250 cells/mm3 (410 against 420) with fever and tenderness. A new point would need a full rewrite. |
| rn-s36-45 | Same point as rn-c06-4-2 and rn-s22-33. Day 6 after transsphenoidal surgery, urine osmolality 520 against 540 with a low sodium, and the same refs sentence. |

## Key changes

None.

## Writer flags resolved

- rn-s36-01. The full 2024 INS vesicant list was read. Calcium in all salt forms and dopamine are high risk vesicants. Cefazolin is on no list, so its leak is an infiltration. Item stands after the minibag fix.
- rn-s36-05. The AASLD 2021 full text says albumin at LVP of more than 5 L, at 6 to 8 g per liter removed. The CBS albumin chapter agrees. 6 times 8 is 48 g, and 48 g at 25 g per 100 mL is 192 mL.
- rn-s36-13. Fixed as above. The MAGIC criterion that PICCs are inappropriate in CKD stage 3b or worse was confirmed through its published summary.
- rn-s36-19. The ondansetron label gives IV doses over at least 30 seconds and preferably 2 to 5 minutes. The Lanoxin label says 5 minutes or longer. The calcium chloride label says no faster than 1 mL/minute.
- rn-s36-22, 24 and 31. Fixed as above.
- rn-s36-23. Chou 2016 recommendation 13 advises against routine basal opioid infusion with IV PCA in opioid-naive adults. Confirmed.
- rn-s36-28. The BTS 2013 limit of 8.2 mg/kg topical lidocaine was confirmed through secondary summaries. The item states no number.
- rn-s36-36. The BSG 2020 text says the client lies on the right side or supine, with regular pulse and BP checks. Confirmed.
- rn-s36-44. ASPEN 2020 advises thiamine 100 mg before feeding or before dextrose-containing IV fluids in clients at risk. Confirmed through the BAPEN 2024 guidance that quotes it.
- rn-s36-47 against rn-s37-02. They overlapped in theme, and item 47 also repeated rn-s22-08. Item 47 was changed.
- Relabeler DailyMed labels. Each cited passage was read in the label text for that set id. The text matches.

## Calculation checks

- rn-s36-05: 6 times 8 is 48 g. 48 divided by 25 times 100 is 192 mL. Distractors 48, 96 and 480 mL give 12, 24 and 120 g.
- rn-s36-14: 1.5 times 11 plus 8 is 24.5 mmHg, range 22.5 to 26.5. The PaCO2 of 38 is above it.
- rn-s36-17: 40 divided by 10 is 4 mL. 120 seconds hold 8 portions of 15 seconds. 0.5 mL each. Portions of 0.25, 1 and 2 mL finish in 4 minutes, 1 minute and 30 seconds.
- rn-s36-25: 60 divided by 10 is 6 doses. 6 times 0.2 is 1.2 mg. A 6-minute lockout gives 2 mg.
- rn-s36-29: 15 times 70 is 1050 mL. 700 mL is 10 mL/kg and 1500 mL is about 21 mL/kg.
- rn-s36-48: 4.2 divided by 6.0 is 0.7, above 0.5. The inverse is 1.4.
- SI pairs: phenytoin 9, 10 and 20 mcg/mL are 36, 40 and 79 micromol/L. Creatinine 0.9 mg/dL is 80 micromol/L. Glucose 104 and 108 mg/dL are 5.8 and 6.0 mmol/L. Protein 4.2 and 6.0 g/dL are 42 and 60 g/L. Albumin 2.1 g/dL is 21 g/L. All within 3 percent.

## Uniqueness

Overlaps found and kept, because each item tests a different decision:

- rn-s36-11 shares the 1.2 micron filter with rn-s17-49. Its other keys (12-hour Y-site limit, allergy, baseline triglyceride) are new.
- rn-s36-17 shares furosemide pacing with rn-s04-47, but it tests portion volumes.
- rn-s36-31 shares tracing lines with rn-s07-12. Its other keys are epidural specific.
- rn-s36-34 shares pancreatitis with rn-s20-37 and adds three other complications.

## Needs Arjan's decision

- rn-s36-46 (DI bowtie after pituitary surgery) uses data close to rn-s25-12, which tests recognizing DI. The bowtie adds desmopressin, fluid replacement and monitoring. rn-s17-23 already covers desmopressin excess. Kept, but a pull would be defensible.
- rn-s36-15 keys norepinephrine as unsuitable for a midline. The 2024 INS vesicant review cites studies of short-term vasopressors through midlines. MAGIC still rates continuous vesicants through a midline as inappropriate. The key stands.
- rn-s36-19 calls calcium chloride an IV push. The label says slow IV infusion, at most 1 mL/minute, into a central or deep vein. The rate is correct.
- `meta()` in `common.ts` defaults `reviewed: true`. Signoff.json lists the s36 ids, so the gate passes. It was not touched.

## Sources verified

- INS vesicant list 2024, full text: https://nursing.ceconnection.com/files/DevelopmentofanEvidenceBasedListofNonAntineoplasticVesicants-1726447060944.pdf
- AASLD ascites guidance 2021, full text: https://www.giboardreview.com/wp-content/uploads/2021/12/Guideline-2021-AASLD-ascites-2021.pdf
- BC Renal vein preservation 2020: https://www.bcrenal.ca/resource-gallery/Documents/VA-Chronic_Kidney_Disease-Vein_Preservation.pdf
- Surviving Sepsis 2026, Crossref doi 10.1097/CCM.0000000000007075: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
- Wright 2010, Br J Clin Pharmacol: https://pmc.ncbi.nlm.nih.gov/articles/PMC2997319/
- BTS pleural procedures statement 2023, Crossref checked: https://doi.org/10.1136/thorax-2022-219371
- ISMP Canada 2004 and 2007: https://www.ismp-canada.org/download/CACCN-Winter04.pdf and https://www.ismp-canada.org/download/caccn/CACCN-Fall07.pdf
- BSG liver biopsy 2020, full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC7398479/
- ACR Manual on Contrast Media 2024, full text: https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf
- BAPEN thiamine guidance quoting ASPEN: https://www.bapen.org.uk/wp-content/uploads/2024/05/guidance-on-thiamine-replacement-in-refeeding-syndrome.pdf
- Chou 2016 recommendation 13: https://guidelinecentral.com/guideline/8163
- DailyMed SPL text read by set id for vincristine, dopamine, calcium chloride, Lanoxin, ondansetron, furosemide, phenytoin, ceftriaxone, Intralipid, Hylenex and Hizentra: https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/
- Canadian Blood Services Clinical Guide, blood components and albumin chapters: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/blood-components and https://professionaleducation.blood.ca/en/transfusion/clinical-guide/albumin

## Summary

- Items reviewed: 50.
- Passed unchanged (beyond a Canada note): 37.
- Fixed with the key unchanged: 11 (01, 03, 13, 16, 22, 24, 28, 31, 34, 37, 47).
- Marked for pull: 2 (26, 45).
- Key changes: 0.
- Items with a defect found: 01, 03, 13, 16, 22, 24, 26, 28, 31, 34, 37, 45, 47.

## Checks

`npx tsc --noEmit -p .` prints nothing for `bank/s36`. `BATCH=s36 npx vitest run tests/bank.test.ts` passes 62 of 62.
