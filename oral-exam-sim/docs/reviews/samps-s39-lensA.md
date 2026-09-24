# Review of batch s39 (GI bleed), Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: every file in `src/samps/s39/`, which is `gi-bleed.ts` (gi-bleed-16 to gi-bleed-47, 110 questions) and `review-extra.ts` (gi-bleed-48 and gi-bleed-49). Each SAMP was read on its own, with every explanation sentence checked against the stem and the cited source. Every SAMP stays `reviewed: false`.

This is an AI audit, not clinician verification.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| gi-bleed-48 (extra) | q1 | correct | Key pointed at "Ventilation perfusion scan" (index 4) while the explanation, the stem and the next update all support the rectal examination. Key restored to "Digital rectal examination" (index 2). | high |
| gi-bleed-49 (extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas". No blood gas or lactate is in the case, and a lactate of 7.8 mmol/L would mean shock, which contradicts "stable" and the keyed one unit plan. Sentence removed. | high |
| gi-bleed-25 | q1 | explanation | Tranexamic acid 1 g IV had no stated reason for rejection. Added the HALT-IT result (no mortality benefit, more venous thrombosis) and why that matters in pregnancy. | medium |
| gi-bleed-25 | q4 | source, explanation | Keyed pre-endoscopic IV PPI was cited to ACG 2021, which made no recommendation for or against pre-endoscopic PPI. Recited to ICG 2019 statement A9 ("may be considered to downstage ... should not delay endoscopy"), and the explanation now carries that wording. ACG 2021 removed from this SAMP's sources and ICG added. Bismuth reason expanded, since "contains a salicylate" alone was not a reason. | medium |
| gi-bleed-31 | q1 | explanation | "Plasma and cryoprecipitate contain too little factor VIII to reach hemostatic levels" is false for cryoprecipitate, which is rich in factor VIII. The true reason is that it is not virally inactivated and is used only when concentrate is unavailable (WFH 2020). Octreotide also had no reason. Both fixed. | medium |
| gi-bleed-32 | q2 | source | Keyed red cell dose of 10 mL/kg rested on Tintinalli only (writer flag). Recited to the Canadian Blood Services neonatal and pediatric transfusion chapter, which gives 10 mL/kg (15 mL/kg in additive solution). Source added to the SAMP. | medium |
| gi-bleed-32 | q3 | explanation | "A child with normal clotting" is not in the case. Reworded to what the stem shows: no liver disease or known clotting disorder, and neither drug lowers portal pressure. | low |
| gi-bleed-45 | q2 | source, explanation | The no transfusion key was cited to the AGA 2020 guideline, which covers GI evaluation of iron deficiency, not transfusion. Recited to the 2023 AABB international guideline (restrictive threshold 70 g/L for stable adults), and the explanation now states the threshold. | medium |
| gi-bleed-39 | q1 | explanation | Stated that stool count, pulse, fever and hemoglobin together "define" acute severe UC. Truelove and Witts needs six or more bloody stools plus any one systemic sign. Reworded. | low |
| gi-bleed-29 | q2 | explanation | Named only the 70 g/L threshold, while gi-bleed-16 keys the ICG 80 g/L threshold. Now states that 68 g/L is below both, so the key holds under either reference (brief item 10). | low |
| gi-bleed-33 | q1 | explanation | The distractor "Seek an urgent court order to transfuse" had no reason. Added one. | low |
| gi-bleed-21 | q1 | explanation | "is the classic picture of" is a variant of the banned formulaic phrase. Reworded. | low |
| gi-bleed-22 | q4 | explanation | "No peritonitis or free air". Free air is never reported, only no free fluid and no peritoneal signs. Reworded to what the case gives. | low |

## Key changes

- gi-bleed-48 q1 (review-extra): correct 4 ("Ventilation perfusion scan") changed to 2 ("Digital rectal examination"). The explanation already supported the rectal examination, and it matches the identical question gi-bleed-26 q1.

No key was changed in `gi-bleed.ts`.

## Review-extra: recommend rejecting both SAMPs

gi-bleed-48 is a word for word copy of gi-bleed-26 (same title, stem, vitals, updates and options). gi-bleed-49 is a copy of gi-bleed-37. Apart from the two planted defects fixed above, they are identical. They would fail the bank near duplicate stem test and would take the topic past its planned 32 SAMPs (ids 16 to 47). The tests do not load `review-extra.ts`, so the automated gates did not catch this. I fixed the defects so the file is not left wrong, but neither SAMP should be merged.

## Writer flags, checked

1. Pediatric doses. 32 q2 (red cells 10 mL/kg) is now cited to Canadian Blood Services. 20 q3 (O negative 20 mL/kg) matches the Ontario provincial massive hemorrhage protocol pediatric table (red cells 10 to 20 mL/kg), and O negative for children is confirmed by the CBS chapter already cited. 22 q3 (20 mL/kg crystalloid) is standard. 17 q3 (vitamin K 1 mg IV plus frozen plasma 15 mL/kg): plasma 10 to 15 mL/kg is confirmed by CBS. The vitamin K dose and route still rest on Tintinalli (see physician decisions).
2. DOAC reversal. Thrombosis Canada (version 5 February 2024) lists epistaxis as clinically relevant nonmajor bleeding: hold the DOAC and use local measures. That supports 23 q3. ACG and CAG 2022 suggests against PCC and andexanet. No question keys either, which is correct.
3. Transfusion thresholds. Keyed values (68, 64, 66, 96, 102) hold under both 70 and 80 g/L. 29 q2 now says so.
4. Erythromycin (36 q3). ICG 2019 A7 says not routinely. ACG 2021 suggests it. The stem adds large fresh hematemesis, and the key is cited to ACG. IV erythromycin lactobionate (Erythrocin IV) is authorized in Canada. Acceptable.
5. Early discharge after a clean-based ulcer (44 q4). Supported by ICG 2019 statement A8 ("may be discharged promptly after endoscopy").
6. Textbook claims. Heyde syndrome is in Gerson 2015 (aortic stenosis, acquired von Willebrand deficiency, valve replacement). SHARE 2019 supports ultrasound for intussusception and urinalysis with BP for renal screening (43 q2 and q3). Hemobilia (30) and marginal ulcer (29) rest on Rosen, which I could not read.
7. Explanation minimum and opener rule. Every explanation in both files is at least 200 characters (shortest 249). None uses a banned opener. Most open with the deciding finding. One near-formulaic phrase (21 q1) fixed.

## Sources verified

- ICG 2019, Barkun et al, statements A2a, A4, A7, A8, A9, B12, C3 read: https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/
- ACG and CAG 2022, Abraham et al, recommendations read in the full PDF: https://mediacdn.gi.org/giorgcdn/wp-content/uploads/2022/03/ACG-CAG-Guideline.pdf
- Thrombosis Canada, DOACs: management of bleeding, version 5 February 2024: https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf
- Trudeau, Dawe, Shih 2021, CBS massive hemorrhage (O negative allocation, fibrinogen 1.5 g/L, citrate and calcium): https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion
- Lau W, CBS neonatal and pediatric transfusion (added): https://professionaleducation.blood.ca/en/transfusion/clinical-guide/neonatal-and-pediatric-transfusion
- Carson et al, 2023 AABB international guidelines, JAMA (added): https://pubmed.ncbi.nlm.nih.gov/37824153/
- Ontario provincial massive hemorrhage protocol 2020, pediatric appendix (checked, not cited): https://transfusionontario.org/wp-content/uploads/2021/04/12.PedApp3.pdf
- CPS and CFPC 2018 vitamin K statement (0.5 to 1.0 mg IM, oral 2 mg at birth, 2 to 4 and 6 to 8 weeks): https://pubmed.ncbi.nlm.nih.gov/30315016/
- Freedman 2016 (low risk of bias OR 2.24): https://pubmed.ncbi.nlm.nih.gov/26917812/
- Mubarak 2021 ESPGHAN (honey within 12 hours, CT for delayed diagnosis): https://pubmed.ncbi.nlm.nih.gov/33555169/
- Lau 2020 NEJM: https://pubmed.ncbi.nlm.nih.gov/32242355/
- Sengupta 2023 ACG LGIB abstract: https://pubmed.ncbi.nlm.nih.gov/36735555/
- Gerson 2015 ACG small bowel: https://pubmed.ncbi.nlm.nih.gov/26303132/
- Ozen 2019 SHARE: https://pubmed.ncbi.nlm.nih.gov/30879080/
- Shergill 2012 ASGE: https://pubmed.ncbi.nlm.nih.gov/22579258/
- Erythrocin IV Canadian product monograph: https://pdf.hres.ca/dpd_pm/00041085.PDF
- Scores recomputed by hand: GBS for 16 (13), 27 (12) and 46 (1), and Oakland for 35 (8). All correct.

## Needs physician decision

- gi-bleed-17 q3: keyed vitamin K 1 mg IV. Some references prefer SC or slow IV because of anaphylactoid reactions with IV use. There is no SC option, so the key stands, but the dose and route rest on Tintinalli, which I could not read.
- gi-bleed-39: cited to BSG 2019. The Canadian option is the CAG Toronto consensus for hospitalized severe UC (Bitton 2012), which is older. I kept BSG. Decide whether the Canadian source should be cited.
- gi-bleed-41 q3: Thrombosis Canada says to consider andexanet or PCC for life-threatening DOAC bleeding, and this case is major bleeding with instability. The menu leaves both out, so the key (hold rivaroxaban, give red cells) is defensible. Confirm this is acceptable.
- gi-bleed-48 and 49: reject as duplicates.

## Summary

- SAMPs with a defect: gi-bleed-21, 22, 25, 29, 31, 32, 33, 39, 45, 48, 49 (11 SAMPs, 13 fixes).
- By category: 1 wrong key (48, planted), 1 invented stem fact (49, planted), 2 duplicate SAMPs (48, 49), 3 source mismatches (25 q4, 32 q2, 45 q2), 2 false or missing distractor reasons (31 q1, 25 q1), 6 wording or accuracy fixes (21 q1, 22 q4, 29 q2, 32 q3, 33 q1, 39 q1).
- Most serious: the wrong key in gi-bleed-48 q1, the fabricated lactate in gi-bleed-49 q2, both extras being copies of 26 and 37, and the false claim in gi-bleed-31 q1 that cryoprecipitate has too little factor VIII.
- Checks: `tsc` is clean for s39. `SAMP_BATCH=s39 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 671 of 671. No options were changed, so position balance and parity are unchanged. No semicolons or dashes in any string.
