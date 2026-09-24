# Batch s17 writer report

Batch s17 is a stand-alone batch of 50 items. All items are Pharmacological and Parenteral Therapies (PPT). Focus: adverse effects and interactions of cardiovascular, endocrine and anticoagulant drugs, blood products, central lines, parenteral nutrition and dosage calculation. Every item has reviewed: false, version 1 and an empty canada note.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- BATCH=s17 npx vitest run tests/bank.test.ts: 61 of 61 tests pass.
- npx tsc --noEmit -p . 2>&1 | grep bank/s17: prints nothing.

## Counts

Client Needs: PPT 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are mc (items 10 and 39).

CJMM steps: recognize 5, analyze 10, prioritize 6, generate 7, action 18, evaluate 4.

Difficulty: level 1 has 4, level 2 has 13, level 3 has 19, level 4 has 10, level 5 has 4.

Calculations with a calc block: 8 items (01, 05, 13, 21, 27, 30, 32, 48). The gate needs 6.

## MC key positions

28 mc items, counting the 2 trend items. Positions 1 to 4: 7, 7, 7, 7. The key is the strict longest option in 5 of 28. Select all keys in the first half of the list: 16 of 32.

## Topic map

- Cardiovascular: thiazide lab effects (02), beta blocker masking hypoglycemia (03), sacubitril-valsartan washout (04), amiodarone infusion rate (05), nitroprusside cyanide toxicity (07), clonidine withdrawal (09), falling potassium with digoxin (10), pioglitazone in heart failure (22), loop diuretic with gentamicin (29), pediatric digoxin volume (30), furosemide in an older adult (38).
- Anticoagulants and antiplatelets: subcutaneous heparin volume (01), dabigatran teaching (08), amiodarone and warfarin (11), drugs that raise the INR (12), alteplase bolus (13), enoxaparin with an epidural catheter (14), warfarin-related brain bleed (15), clopidogrel and omeprazole (16), St John's wort and warfarin (17).
- Endocrine: glucagon teaching (19), glipizide hypoglycemia in an older adult (20), correction insulin (21), desmopressin excess (23), NPH peak (24), hydrocortisone sick day dosing (25), steroid hyperglycemia (26), levothyroxine tablets (27), excess levothyroxine (28).
- Blood products: starting a transfusion (06), priming solution and time limit (18), reaction findings (31), gravity drip rate (32), citrate and low calcium (33), plasma group (34), bedside checks (35), circulatory overload (36), platelets (37).
- Central lines: chills after a flush (40), tip confirmation (41), flush syringe size (42), occlusion (43), port access (44), dressing change (45), removal (46), arm clot with a PICC (47).
- Parenteral nutrition: refeeding trend (39), dextrose kcal (48), safe administration (49), day 4 review (50).

## Sources and verification

- Burchum JR, Rosenthal LD. Lehne's Pharmacology for Nursing Care, 11th edition, 2022. https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. Same citation as the fixture file.
- Institute for Safe Medication Practices. ISMP List of High-Alert Medications in Acute Care Settings, 2024. Same citation as batch s16.
- Nickel B, et al. Infusion Nurses Society. Infusion Therapy Standards of Practice, 9th edition. Journal of Infusion Nursing 47(1S):S1, 2024. https://pubmed.ncbi.nlm.nih.gov/38211609/
- AABB and partners. Circular of Information for the Use of Human Blood and Blood Components, June 2024. https://www.aabb.org/news-resources/resources/circular-of-information
- Ayers P, et al. A.S.P.E.N. Parenteral Nutrition Safety Consensus Recommendations. JPEN 38(3):296, 2014. https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1177/0148607113511992
- da Silva JSV, et al. ASPEN Consensus Recommendations for Refeeding Syndrome. Nutrition in Clinical Practice 35(2):178, 2020. https://pubmed.ncbi.nlm.nih.gov/32115791/
- O'Grady NP, et al. HICPAC. Guidelines for the Prevention of Intravascular Catheter-Related Infections, 2011. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- Powers WJ, et al. AHA and ASA. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update. Stroke 50(12):e344, 2019. https://www.ahajournals.org/doi/10.1161/STR.0000000000000211
- Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895, 2022. https://pubmed.ncbi.nlm.nih.gov/35363499/
- Horlocker TT, et al. ASRA. Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy, 4th edition. Regional Anesthesia and Pain Medicine 43(3):263, 2018. https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2018/04/01/regional-anesthesia-in-the-patient-receiving-antithrombotic-or-thrombolytic-therapy-american-society-of-regional-anesthesia-and-pain-medicine-evidence-based-guidelines
- Tomaselli GF, et al. 2020 ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants. JACC 76(5):594, 2020. https://pubmed.ncbi.nlm.nih.gov/32680646/
- Bornstein SR, et al. Endocrine Society. Diagnosis and Treatment of Primary Adrenal Insufficiency. JCEM 101(2):364, 2016. https://academic.oup.com/jcem/article/101/2/364/2810222
- American Geriatrics Society. 2023 Updated AGS Beers Criteria. JAGS 71(7):2052, 2023. https://psnet.ahrq.gov/issue/american-geriatrics-society-2023-updated-ags-beers-criteria-potentially-inappropriate
- US Food and Drug Administration. FDA reminder to avoid concomitant use of Plavix (clopidogrel) and omeprazole, 2010. Confirmed through secondary reports, for example https://pmc.ncbi.nlm.nih.gov/articles/PMC4699636/
- American Diabetes Association. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132. https://pubmed.ncbi.nlm.nih.gov/41358894
- American Diabetes Association. Diabetes Care in the Hospital: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S339. https://diabetesjournals.org/care/article/49/Supplement_1/S339/163925/16-Diabetes-Care-in-the-Hospital-Standards-of-Care
- Jonklaas J, et al. American Thyroid Association. Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670, 2014. https://journals.sagepub.com/doi/10.1089/thy.2014.0028

The searches confirmed that each source exists, with its authors, year and journal details. I could not read the full text of the textbooks or most guidelines. Specific values come from my own knowledge of those sources. The reviewer should check them.

## Points for the reviewer

- Item 04: the 36 hour washout from an ACE inhibitor to sacubitril-valsartan is from the drug label and the 2022 heart failure guideline. The search did not show the exact sentence.
- Item 10: the magnesium reference range of 1.5 to 2.5 mEq/L varies by lab.
- Item 13: alteplase at 0.9 mg/kg with a 10% bolus is confirmed for the 2019 guideline. Newer stroke guidance favours tenecteplase at some centres. The item still teaches alteplase dosing.
- Item 14: the limits of 12 hours after a prophylactic enoxaparin dose and 4 hours before the next dose follow the 2018 ASRA 4th edition. A 5th edition was published in 2025. I did not check whether its intervals changed.
- Item 22: the item says heart failure guidance advises against thiazolidinediones. The search did not show the exact recommendation text.
- Item 24: NPH peak times differ between sources. The options use time windows that all common sources support, and the refs avoid exact hours.
- Item 25: the stress dosing rule (double or triple the dose for a fever above 38°C) follows the Endocrine Society guideline. I could not see the full text.
- Item 30: the pediatric digoxin dose of 5 mcg/kg every 12 hours is a plausible maintenance dose for a 14 kg child. Pediatric dosing ranges vary by age.
- Item 33: the ionized calcium threshold of 4.5 mg/dL (1.12 mmol/L) is a common lower limit. Labs differ.
- Item 36: the claim that transfusion lung injury tends to cause fever and low BP is a general pattern, not a rule.
- Item 42: the item keys a 10 mL syringe. INS allows a syringe with a 10 mL barrel diameter or a low-pressure syringe. Both are covered by the key's why.
- Item 45: the change intervals for gauze and transparent dressings follow the 2011 CDC guideline.
- Item 48: 3.4 kcal/g for IV dextrose is standard. The option of 4 kcal/g for dietary carbohydrate is a deliberate distractor.
- Item 49: the 1.2 micron filter and 24 hour hang time for a bag with lipid follow the ASPEN safety recommendations.
- Near duplicate check: the whole bank gate passes with s17 included. My topics avoid the s15 and s16 topics I saw, such as heparin infusion, the air embolism response and INR without bleeding. Some overlap in subject remains, for example digoxin and warfarin interactions.
