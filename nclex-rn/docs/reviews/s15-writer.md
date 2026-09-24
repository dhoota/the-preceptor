# Batch s15 writer report

Batch s15 holds 50 stand-alone items, ids rn-s15-01 to rn-s15-50. All are Pharmacological and Parenteral Therapies (PPT). Every item has reviewed: false, version 1 and an empty canada note.

Files: src/bank/s15/common.ts (shared metadata helper and sources), part1.ts to part5.ts (10 items each), index.ts.

## Checks

- BATCH=s15 npx vitest run tests/bank.test.ts: 61 of 61 pass, including the whole bank near duplicate gate.
- npx tsc --noEmit -p . 2>&1 | grep bank/s15: prints nothing.

## Counts

Client Needs: PPT 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2 (one dyad, one zero-one), highlight 2, bowtie 2, trend 2 (both mc, items 19 and 38).

CJMM step: take action 20, analyze cues 9, generate solutions 8, evaluate outcomes 6, prioritize hypotheses 4, recognize cues 3.

Difficulty: level 1 has 3, level 2 has 16, level 3 has 20, level 4 has 10, level 5 has 1.

Calculations with a calc block: 8 of 50 PPT items (16 percent). They are items 01, 07, 12, 21, 23, 31, 41 and 45.

## MC key positions

28 mc items, including the two trend items. Positions A 7, B 7, C 7, D 7.

01 B, 03 C, 04 D, 07 C, 08 D, 11 A, 12 B, 14 A, 16 A, 18 B, 19 A, 21 C, 23 D, 24 C, 26 D, 28 B, 30 B, 31 C, 33 A, 34 D, 36 C, 38 B, 40 D, 41 A, 43 D, 45 C, 48 A, 50 B.

The key is the strict longest option in 3 of 28 mc items (33, 38, 40). Calculation options are ordered low to high.

## Coverage

IV rate and dose calculation, heparin, vasoactive and weight-based infusions, pediatric oral doses, hidden acetaminophen. Parenteral nutrition interruption and monitoring. Central line air embolism, PICC assessment and bloodstream infection prevention. Peripheral infiltration. Transfusion reaction. IV push technique, IV potassium and IV phenytoin. Insulin mixing, timing and hypoglycemia. Anticoagulant injection, high INR and heparin-induced thrombocytopenia. Reversal agents. Opioid toxicity, naloxone follow-up and opioid constipation. Adverse effects and interactions: statins, lithium, serotonin syndrome, ACE inhibitor angioedema, clozapine, aminoglycosides, vancomycin infusion reaction, digoxin, hyperkalemia from drug pairs, nitrate with sildenafil, MAOI diet, Beers list drugs, anaphylaxis. Teaching: NSAIDs, levothyroxine, tuberculosis drugs, prednisone. Expected outcomes: furosemide, lactulose. Obstetric drugs: magnesium sulfate and oxytocin.

## Sources and verification

- Burchum JR, Rosenthal LD. Lehne's Pharmacology for Nursing Care, 11th edition, 2022. https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. https://www.amazon.com/Brunner-Suddarths-Textbook-Medical-Surgical-Nursing/dp/1975161033
- Nickel B, Gorski L, Kleidon T, et al. Infusion Therapy Standards of Practice, 9th edition, 2024. https://pubmed.ncbi.nlm.nih.gov/38211609/
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf
- ISMP Safe Practice Guidelines for Adult IV Push Medications, 2015. https://www.ismp.org/sites/default/files/attachments/2017-11/ISMP97-Guidelines-071415-3.%20FINAL.pdf
- AABB and partners. Circular of Information for the Use of Human Blood and Blood Components, June 2024. https://www.aabb.org/news-resources/resources/circular-of-information
- ACOG Practice Bulletin No. 222, Gestational Hypertension and Preeclampsia, 2020. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Pasero C, McCaffery M. Pain Assessment and Pharmacologic Management, 2011. https://www.ncbi.nlm.nih.gov/books/NBK2658/box/ch17.box1/?report=objectonly
- Jonklaas J et al. ATA Guidelines for the Treatment of Hypothyroidism. Thyroid, 2014. https://journals.sagepub.com/doi/10.1089/thy.2014.0028
- O'Grady NP et al. Guidelines for the Prevention of Intravascular Catheter-Related Infections, 2011. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- Cuker A et al. ASH 2018 guidelines, heparin-induced thrombocytopenia. Blood Advances, 2018. https://ashpublications.org/bloodadvances/article/2/22/3360/16129/
- Holbrook A et al. Evidence-Based Management of Anticoagulant Therapy. Chest, 2012. https://pubmed.ncbi.nlm.nih.gov/22315259/
- Shaker MS et al. Anaphylaxis, a 2020 practice parameter update. J Allergy Clin Immunol, 2020. https://www.jacionline.org/article/S0091-6749(20)30105-6/fulltext
- Boyer EW, Shannon M. The Serotonin Syndrome. N Engl J Med, 2005. https://pubmed.ncbi.nlm.nih.gov/15784664/
- AGS 2023 Updated Beers Criteria. J Am Geriatr Soc, 2023. https://pubmed.ncbi.nlm.nih.gov/37139824/
- Nahid P et al. ATS, CDC and IDSA Treatment of Drug-Susceptible Tuberculosis. Clin Infect Dis, 2016. https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/
- ADA. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes 2026. https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/
- Vilstrup H et al. Hepatic Encephalopathy in Chronic Liver Disease, 2014 AASLD and EASL guideline. https://onlinelibrary.wiley.com/doi/full/10.1002/hep.27210
- Grundy SM et al. 2018 AHA and ACC Guideline on the Management of Blood Cholesterol. https://pubmed.ncbi.nlm.nih.gov/30423393/
- Heidenreich PA et al. 2022 AHA, ACC and HFSA Guideline for the Management of Heart Failure. https://pubmed.ncbi.nlm.nih.gov/35363499/
- Simpson KR. Cervical Ripening and Labor Induction and Augmentation, 5th edition. Nursing for Women's Health, 2020. https://www.nwhjournal.org/article/S1751-4851(20)30079-9/abstract

common.ts also defines ASPEN (Boullata 2014) and Rybak 2020 vancomycin sources. No item uses them. The volume, issue and page details for Jonklaas, Heidenreich, Grundy, Rybak and Simpson came from memory. The search results confirmed the journal and year but not every page number.

## Points for the reviewer

- Item 04: the dextrose 10% bridge for a delayed parenteral nutrition bag is cited to Hinkle. Check that the 15th edition states it.
- Item 06: the 60 minute minimum for vancomycin infusion is in refs and cited to Lehne. Rybak 2020 would also support it.
- Item 08: stopping the infusion is keyed before calcium gluconate. Some protocols give both at once. The key follows the usual nursing order.
- Item 10: separating levothyroxine from calcium by 4 hours follows the ATA 2014 guideline. Check the exact wording.
- Item 13: the order puts notifying the provider and blood bank third and sending the bag fourth. Assessment runs alongside and is left out on purpose.
- Item 16: the 10 mEq/hour peripheral potassium limit is a common policy value, not one national rule.
- Item 19: the gentamicin trough threshold of 2 mcg/mL applies to conventional dosing, not extended-interval dosing.
- Item 22: "Draw blood from the PN lumen" is a distractor based on INS and CDC line care.
- Item 28: the pulse threshold of 60/minute for holding metoprolol is a usual nursing parameter. The prescription may set another one.
- Item 33: the INR target of 2 to 3 and the advice against routine vitamin K for INR 4.5 to 10 come from Holbrook 2012. Newer guidance says the same, but the reviewer may prefer a newer source.
- Item 36: the 24 hour window between sildenafil and nitrates is cited to Lehne.
- Item 44: the digoxin toxicity threshold of 2 ng/mL (2.6 nmol/L) is in refs. Lower ranges are now used in heart failure. The key does not depend on this.
- Item 48: the tachysystole definition follows the AWHONN monograph.
- Items 13 and 47: the drag and drop tokens use "provider" and "saline" to keep the token lengths even.
