# Writer report: batch s33, DVT and PE

Topic: dvt-pe. File: `src/samps/s33/dvt-pe.ts`, exported as `DVT_PE_S33_SAMPS` and re-exported by `src/samps/s33/index.ts` as `SAMPS_S33`. All SAMPs are `reviewed: false`.

## Count, mix and key positions

- 32 SAMPs, ids dvt-pe-16 to dvt-pe-47. 119 questions.
- 110 `single` and 9 `menu` questions. No `short` questions.
- Questions per SAMP: 5 in 2 SAMPs, 4 in 19 SAMPs, 3 in 11 SAMPs.
- Menu questions sit in dvt-pe-16, 21, 22, 24, 25, 33, 38, 46 and 47. Selects are 2 or 3.
- Single key positions, first to fifth: 23, 24, 23, 24, 16. The highest is 21.8 percent.
- The key is the single longest option in 17 of 110 single questions (15.5 percent).
- Tests pass: `SAMP_BATCH=s33 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` (707 passed). `npx tsc --noEmit -p .` shows no errors in `samps/s33`.

## Scenario spread

The s08 set covers flight calf DVT, PERC in a woman on the pill, YEARS in an older man, lung cancer PE, pregnancy with leg signs, COPD, CKD with contrast allergy, massive PE lysis, low risk outpatient PE, intermediate high risk PE, thigh SVT, post ankle ORIF, lupus, post knee replacement and a Baker cyst. This batch avoids those and adds:

- Children: adolescent post arthroscopy DVT (16), PICC related arm DVT in a 9-year-old (45).
- Pregnancy and postpartum: pregnancy adapted YEARS and VQ (20), postpartum PE while breastfeeding (21), suspected iliac DVT with negative ultrasound (30), labour on therapeutic LMWH (40).
- Older adults: distal DVT after an ulcer bleed (18), HIT after hip fracture (25), 84-year-old with PE and apixaban dosing (32), DVT after intracerebral hemorrhage (37), age adjusted D-dimer (43), cancer calf DVT (46).
- Diagnosis: effort thrombosis of the arm (17), PEGeD low and moderate probability (19, 42), high probability with CT delayed (31), overnight wait for ultrasound (28), suspected recurrent DVT (29), cellulitis versus DVT (34), PERC when gestalt is not low (39), rural hospital with no CT (27, 38).
- Treatment fit: GI cancer PE (22), obesity (23), carbamazepine interaction (24), phlegmasia (26), breakthrough PE on warfarin (35), mechanical valve (41), Child-Pugh C cirrhosis (44), lysis contraindicated after craniotomy (47), intermediate low risk PE with RV dilation (33).
- Settings: tertiary default, community (28, 36, 44, 46), rural (27, 38).

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1 History of baseline risk factors | 6 |
| 2 Examination for signs and alternatives | 7 |
| 3 Decision rules for pretest probability | 13 |
| 4 Tests suited to pretest probability | 18 |
| 5 Testing tailored to context | 10 |
| 6 Anticoagulation that fits the patient | 46 |
| 7 Objective data for outpatient safety | 19 |

## Sources

Thrombosis Canada guides were downloaded and read in full. Their version dates are printed on each PDF.

- Thrombosis Canada. Clinical guide: pulmonary embolism (PE) treatment. 2025 (date of version 1 May 2025). https://thrombosiscanada.ca/clinical_guides/pdfs/44_60.pdf
- Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. 2025 (7 May 2025). https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf
- Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) treatment. 2025 (2 November 2025). https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISTREATMENT_80.pdf
- Thrombosis Canada. Clinical guide: pregnancy, venous thromboembolism treatment. 2025 (1 May 2025). https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf
- Thrombosis Canada. Clinical guide: pregnancy, thromboprophylaxis. 2025 (1 May 2025). https://thrombosiscanada.ca/clinical_guides/pdfs/THROMBOPROPHYLAXISINPREGNANCY_43.pdf
- Thrombosis Canada. Clinical guide: cancer and thrombosis. 2024 (10 September 2024). https://thrombosiscanada.ca/clinical_guides/pdfs/CANCERANDTHROMBOSIS_51.pdf
- Lim W, et al. ASH 2018 guidelines: diagnosis of VTE. Blood Adv. 2018. https://pubmed.ncbi.nlm.nih.gov/30482764/ (recommendations read at PMC6258916)
- Ortel TL, et al. ASH 2020 guidelines: treatment of DVT and PE. Blood Adv. 2020. https://pubmed.ncbi.nlm.nih.gov/33007077/ (recommendations read at PMC7556153)
- Bates SM, et al. ASH 2018 guidelines: VTE in the context of pregnancy. Blood Adv. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/
- Cuker A, et al. ASH 2018 guidelines: heparin-induced thrombocytopenia. Blood Adv. 2018. https://ashpublications.org/bloodadvances/article/2/22/3360/16129/
- Monagle P, et al. ASH 2018 guidelines: treatment of pediatric VTE. Blood Adv. 2018. https://pubmed.ncbi.nlm.nih.gov/30482766/ (recommendations read at PMC6258911)
- Konstantinides SV, et al. 2019 ESC guidelines for acute PE. Eur Heart J. 2020. https://pubmed.ncbi.nlm.nih.gov/31504429/
- Wells PS, et al. Excluding PE at the bedside without diagnostic imaging. Ann Intern Med. 2001. https://pubmed.ncbi.nlm.nih.gov/11453709/
- Wells PS, et al. Evaluation of D-dimer in the diagnosis of suspected DVT. N Engl J Med. 2003. Same citation string as s08.
- Kline JA, et al. PERC derivation. J Thromb Haemost. 2004. https://pubmed.ncbi.nlm.nih.gov/15304025/
- Kearon C, et al. PEGeD. N Engl J Med. 2019. https://pubmed.ncbi.nlm.nih.gov/31774957/
- Righini M, et al. ADJUST-PE. JAMA. 2014. https://pubmed.ncbi.nlm.nih.gov/24643601/
- van der Pol LM, et al. Pregnancy-adapted YEARS. N Engl J Med. 2019. https://pubmed.ncbi.nlm.nih.gov/30893534/
- Jimenez D, et al. sPESI. Arch Intern Med. 2010. https://pubmed.ncbi.nlm.nih.gov/20696966/
- Zondag W, et al. Hestia Study. J Thromb Haemost. 2011. https://pubmed.ncbi.nlm.nih.gov/21645235/
- Martin KA, et al. ISTH SSC DOACs in obesity. J Thromb Haemost. 2021. https://pubmed.ncbi.nlm.nih.gov/34259389/
- Steffel J, et al. 2021 EHRA practical guide on NOACs. Europace. 2021. https://pubmed.ncbi.nlm.nih.gov/33895845/
- Pugh RN, et al. Transection of the oesophagus for bleeding oesophageal varices. Br J Surg. 1973. https://pubmed.ncbi.nlm.nih.gov/4541913/

## For the reviewers

1. Pediatric enoxaparin doses (16 q3, 45 q3). The keys use 1 mg/kg every 12 hours for children older than 2 months, and 45 q3 calls 1.5 mg/kg the young infant dose. The cited ASH 2018 pediatric guideline supports LMWH but I did not read a dosing table in it. The 2024 ASH/ISTH pediatric update (Blood Adv 2025) exists. I did not read its full text, so please confirm that recommendations 9 (keep a functioning catheter) and 14 (3 months or less for provoked VTE) still stand.
2. HIT (25). ASH HIT statements used: stop heparin, immunoassay for intermediate or high 4Ts, non-heparin anticoagulant, no warfarin until platelets recover, and no routine platelet transfusion. I confirmed the 4Ts and immunoassay recommendations from summaries only. Please check the transfusion wording.
3. ISTH obesity (23 q1). The explanation says the guidance lists standard dose apixaban or rivaroxaban as appropriate and suggests against dabigatran and edoxaban above a BMI of 40 kg/m2 or 120 kg. I checked this against summaries, not the full text.
4. Pancreatic cancer (26 q4). The key is LMWH because Thrombosis Canada prefers LMWH for GI tract cancer. Please decide whether pancreatic cancer counts as GI tract here. Apixaban is left out of the options on purpose.
5. Child-Pugh (44 q1). Pugh 1973 used prothrombin time in seconds. The explanation uses the common INR bands of 1.7 to 2.3. A modern Child-Pugh source may be a better citation.
6. Intracerebral hemorrhage (37). The key is a retrievable IVC filter 11 days after the bleed. That follows Thrombosis Canada for patients who cannot be anticoagulated. Some neurologists would start anticoagulation earlier, so please check that the timing makes the key unambiguous.
7. Neuraxial timing (40 q2). The 24 hour rule comes from the Thrombosis Canada pregnancy guide. Local anesthesia protocols vary.
8. Virchow node (35 q3). The claim that this node suggests abdominal cancer is standard teaching but is not in the cited Thrombosis Canada cancer guide.
9. Rounding. LMWH doses are rounded to the nearest prefilled syringe as Thrombosis Canada allows: dalteparin 14 800 to 15 000, 16 000 to 15 000, 17 200 to 18 000 units, and enoxaparin 58 to 60 mg, 82 to 80 mg, 152 to 150 mg.
10. Question count. Eleven SAMPs have 3 questions rather than the usual 4 or 5, where a fourth question would have repeated a teaching point from elsewhere in the batch.
