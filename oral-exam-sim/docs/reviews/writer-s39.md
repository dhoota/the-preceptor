# Writer report: batch s39, GI bleed

File: `src/samps/s39/gi-bleed.ts`, exported as `GI_BLEED_S39_SAMPS` and re-exported from `src/samps/s39/index.ts` as `SAMPS_S39`. Every SAMP is `reviewed: false`.

## Count, mix and key positions

- 32 SAMPs, ids gi-bleed-16 to gi-bleed-47.
- 110 questions: 99 `single` and 11 `menu`. There is one menu question in each of 11 SAMPs (17, 24, 25, 28, 29, 31, 33, 37, 38, 41, 44). No `short` questions.
- Questions per SAMP: 14 SAMPs have 4 and 18 have 3. The batch sits below the brief's "usually 4 or 5".
- Single key positions, first to fifth: 16, 22, 20, 16, 25 (highest share 25%). The key is the single longest option in 34 of 99 (34%).
- Checks: `tsc` is clean for s39. `SAMP_BATCH=s39 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 671 of 671.

## Key feature coverage (questions per key feature)

| KF | Summary | Questions |
|---|---|---|
| 1 | Clues to the source | 35 |
| 2 | Upper source for apparent lower bleeding | 5 (38, 41, 44 x2, 45) |
| 3 | Hidden blood loss with hypoperfusion signs | 4 (22, 26, 41, 45) |
| 4 | Nose, throat and lungs as non-GI sources | 11 (18, 19, 23, 24, 47) |
| 5 | Resuscitation and blood product choice | 18 |
| 6 | Targeted therapy, endoscopy and risk scores | 37 |

## Scenarios

The batch avoids the 15 s11 scenarios. It adds children and infants: late vitamin K deficiency bleeding, swallowed maternal blood, post-tonsillectomy hemorrhage, a button battery herald bleed, STEC, intussusception with lethargy, portal vein thrombosis varices, allergic proctocolitis and IgA vasculitis. It also adds pregnancy, a Jehovah's Witness patient in Ontario, hemophilia A, Heyde syndrome on dialysis, SSRI, steroid and NSAID risk, post-polypectomy bleeding, a marginal ulcer after bypass, hemobilia, ischemic colitis, the Oakland score, DAPT after a stent, gastric cancer alarm features, rural hematochezia with a duodenal source, acute severe UC, bismuth and iron pseudo-melena, AF with rapid rate masking a bleed, an ileostomy bleed, iron deficiency anemia, a rural GBS 1 discharge and a dental socket bleed on warfarin.

## Sources (all with year, verified)

- Barkun 2019 ICG, Ann Intern Med: https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/ (recommendations read in full text)
- Abraham 2022 ACG and CAG anticoagulant guideline: https://mediacdn.gi.org/giorgcdn/wp-content/uploads/2022/03/ACG-CAG-Guideline.pdf (recommendations 1 to 10 read)
- Thrombosis Canada, DOACs: management of bleeding, version 2024: https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf (read)
- Trudeau, Dawe, Shih 2021, Canadian Blood Services: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion (read. O negative allocation, fibrinogen at least 1.5 g/L, calcium)
- Oakland 2017 Lancet Gastroenterol Hepatol, score table checked at https://pmc.ncbi.nlm.nih.gov/articles/PMC7341175/
- Sengupta 2023 ACG LGIB: https://pubmed.ncbi.nlm.nih.gov/36735555/
- Oakland 2019 BSG LGIB, Gut (PubMed record)
- Lau 2020 NEJM: https://pubmed.ncbi.nlm.nih.gov/32242355/
- Kaplan 2024 AASLD: https://pubmed.ncbi.nlm.nih.gov/37870298/ (listed but not cited in this batch, so it does not ship)
- Ng and Loewy 2018 CPS vitamin K: https://cps.ca/en/documents/position/vitamin-k-prophylaxis-in-newborns
- Freedman 2016 Clin Infect Dis: https://pubmed.ncbi.nlm.nih.gov/26917812/
- Srivastava 2020 WFH: https://pubmed.ncbi.nlm.nih.gov/32744769/
- Shergill 2012 ASGE pregnancy: https://pubmed.ncbi.nlm.nih.gov/22579258/
- Malette v. Shulman 1990 ONCA: https://www.canlii.org/en/on/onca/doc/1990/1990canlii6868/1990canlii6868.html
- Mubarak 2021 ESPGHAN button battery: https://pubmed.ncbi.nlm.nih.gov/33555169/
- PubMed records checked: Brandt 2015 ACG colon ischemia, Nguyen 2014 CAG VTE in IBD, Lamb 2019 BSG IBD, Ko 2020 AGA iron deficiency anemia, Ozen 2019 SHARE, Gerson 2015 ACG small bowel, Stanley 2017 BMJ, Sung 2010.
- Not rechecked this session, but already cited in the bank: Villanueva 2013, Blatchford 2000, HALT-IT 2020, Carson 2023 MINT (listed, not cited), Laine 2021 ACG UGIB.
- Textbooks: Rosen's 10th ed. 2023 and Tintinalli 9th ed. 2020. Rosen is cited 24 times and Tintinalli 19 times. They support the pediatric and less common topics, and I could not check the chapter text for them.

## For the reviewers

1. Some pediatric doses rest on Tintinalli, and I could not confirm them against chapter text. These are gi-bleed-17 q3 (vitamin K 1 mg IV plus frozen plasma 15 mL/kg for VKDB), 22 q3 (20 mL/kg bolus), 20 q3 (O negative 20 mL/kg) and 32 q2 (red cells 10 mL/kg as the key).
2. Guidelines conflict on DOAC reversal. ACG and CAG suggest against PCC or andexanet for DOAC GI bleeding. Thrombosis Canada says to consider them for life-threatening bleeding. To avoid the conflict, no question keys or rejects PCC or andexanet for DOAC GI bleeding. gi-bleed-23 q4 uses them only as distractors, for a controlled epistaxis that is non-major bleeding under Thrombosis Canada.
3. Guidelines also differ on the transfusion threshold. ICG uses less than 80 g/L and Villanueva used 70 g/L. Keyed transfusion decisions use hemoglobin values outside 70 to 80 g/L (68, 64, 66, 96, 102) to keep them unambiguous.
4. gi-bleed-36 q3: ICG says promotility agents are not for routine use, while ACG 2021 suggests erythromycin. The stem adds a large fresh hematemesis to justify it. The key is cited to ACG.
5. gi-bleed-44 q4: early discharge on oral PPI after a clean-based ulcer is cited to ICG. Check that the 2019 text supports early discharge for low risk stigmata.
6. Some claims are cited to a textbook and should be checked there: hemobilia (30), marginal ulcer (29), IgA vasculitis urinalysis and ultrasound (43, cited to SHARE), and Heyde syndrome (26 q4, cited to Gerson).
7. Key feature labels on the risk score questions (GBS, Oakland) are set to KF6, and gi-bleed-17 q2 (CT head in VKDB) is set to KF1. Reviewers may prefer other labels.
