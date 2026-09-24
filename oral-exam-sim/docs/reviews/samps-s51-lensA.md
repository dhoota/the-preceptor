# Review: batch s51, Shortness of breath. Lens A (clinical truth)

Scope: `src/samps/s51/sob.ts` (sob-16 to sob-47) and `src/samps/s51/review-extra.ts` (sob-48, sob-49). Every SAMP was read question by question against the stem, with every dose and threshold worked out again. This is an AI audit. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| sob-48 (extra) | q1 | correct | Key was 4, "Retropharyngeal abscess". The explanation and the case describe Ludwig angina. Key set to 2 | high |
| sob-49 (extra) | q2 | explanation | Made-up closing sentence: "serum lactate of 7.8 mmol/L on the first blood gas". The update gives a lactate of 2.1 mmol/L, and a high lactate would not confirm an osmolal gap anyway. Sentence removed | high |
| sob-39 | all | sources | NIH OI Pneumocystis citation year was 2024. The NIH OI update posted on 2 June 2026 revised the Pneumocystis section. Year set to 2026 | high |
| sob-40 | q3 | stem update, prompt, options, key, explanation | The explanation said the AHA 2021 myocarditis statement advises a 10 mL/kg bolus. The statement says nothing about fluid volume. The child also already had crackles and a 4 cm liver, so the fluid key was open to dispute. Rebuilt as a question on circulatory support that the statement does back (epinephrine for low output with hypotension). A BP of 84/56 mmHg was added to the update. The key moved from 3 to 0 | high |
| sob-18 | q1 | explanation | Said a score of 8 comes from scoring a saturation of 91% as 92 to 94%. That scoring gives 9, not 8. Now says 8 leaves out one 2 point item | high |
| sob-18 | q3 | explanation | "IV methylprednisolone adds nothing" was too strong. The CPS gives IV steroids to children who are not responding. Reworded to say that he kept down oral dexamethasone and that an IV steroid acts no faster and does not replace a bronchodilator step | medium |
| sob-18 | q4 | explanation | The explanation said CPS warns that "a normal or rising CO2" signals impending failure. The CPS text names a normal capillary CO2 and drowsiness. Wording matched to the source | low |
| sob-36 | q3 | explanation | Said the CCS guideline "advises half-dose tenecteplase at 75 and older". CCS/CAIC 2019 has this only as a practical tip: a half dose "may be considered" for patients older than 75 on a pharmacoinvasive strategy, based on STREAM. Reworded. The key (17.5 mg) and the weight band (68 kg gives 35 mg full dose) are correct | medium |
| sob-36 | q2 | explanation | Said angiography "within 2 to 24 hours". CCS/CAIC 2019 says routine angiography within 24 hours after successful lysis. Corrected | medium |
| sob-38 | q2 | explanation | Said hydroxyurea is "continued unless there is marrow suppression". Howard 2015 does not say this. It recommends hydroxycarbamide to prevent recurrent ACS. The explanation now uses that reason. The steroid reason now matches the source (rebound sickling and readmission) | medium |
| sob-39 | q3 | explanation | "Atovaquone is an alternative only for mild disease." The NIH guideline says mild to moderate disease. Corrected | medium |
| sob-45 | q2 | explanation | Said Canadian Blood Services advises that the unit "not be restarted at any rate". The CBS chapter says stop the transfusion, give a diuretic and oxygen, and report the reaction. It makes no statement about restarting. Now gives a reason tied to the case | medium |
| sob-27 | q3 | update, explanation | The explanation said "He has had no opioid". The stem never said so, and opioids are often given after a drain goes in. The update now says the drain went in under local anesthetic alone | medium |
| sob-30 | q3 | option, explanation | Distractor "Carboxyhemoglobin of 18%" clashed with the level of 24% already measured. Changed to "Carboxyhemoglobin of 20% on repeat", which is still below the threshold. The key position is unchanged | low |
| sob-19 | q2 | update | The explanation said she "has had no apnea", which the case never stated. Added to the update | low |

## Key changes

- sob-48 q1: 4 (Retropharyngeal abscess) to 2 (Ludwig angina). The stem and the explanation both describe Ludwig angina.
- sob-40 q3: rebuilt. The old key was 3 ("normal saline 300 mL IV, then reassess"). The new key is 0 ("epinephrine 0.05 mcg/kg/minute IV"). The update, prompt, all five options and the explanation were rewritten, so no old explanation is left around the new key. Single key positions are now 17, 22, 20, 18, 17, and the gates pass.

## Writer queries answered

- NIH Pneumocystis year: 2026 (see above). The adjunctive steroid criteria (PaO2 below 70 mmHg or A-a gradient of 35 or more, within 72 hours) and ART within 2 weeks match. The A-a calculation (110 minus 62, or 48) is correct.
- sob-36 q3: half dose confirmed as a CCS 2019 practical tip for patients older than 75. The tenecteplase weight bands in the Canadian monograph are correct (60 to 69 kg gives 35 mg). The wording was softened as above.
- sob-27 q2: BTS 2023 lists underlying lung disease and significant hypoxia as high-risk features. For a symptomatic secondary pneumothorax it advises a drain (or aspiration) with admission. The key holds.
- sob-25 q4: no pediatric source found. CAFG 2021 Part 2 supports the principle (keep spontaneous breathing in an anticipated difficult airway, with a surgical airway ready). See "Needs physician decision".
- sob-18 q3: CPS 2021 advises IV magnesium for an incomplete response in the first 1 to 2 hours, with monitoring. The dose table is a supplement I could not open. 1 g for 22 kg (45 mg/kg) falls within the usual 40 to 50 mg/kg range (maximum 2 g). The key holds.
- sob-40 q3: not supported by the AHA statement. Rebuilt (see above).
- sob-38 q2: Howard 2015 confirmed on steroids ("routine use ... cannot be recommended"), incentive spirometry, antibiotics with atypical cover, careful fluids and analgesia. It gives no rule on continuing hydroxyurea during an acute episode, so the explanation was reworded. q3 (exchange transfusion for severe or progressing ACS) matches the guideline.

## Other items checked and found correct

Wells scores (sob-23: 1.5, sob-24: 9, sob-41: 1.5). Age-adjusted D-dimer (740 mcg/L). PERC failures. ROX (150/32 = 4.7, and each distractor value). CURB-65 of 2. Light's criteria (0.62, 1.8, 167 U/L). FVC of 12.5 mL/kg. Anion gap 33 and osmolal gap 51 with each distractor. PRAM of 10. Methylene blue at 1 mg/kg. Weight-based pediatric doses in sob-18, sob-25 and sob-46. The ESC 2019 intermediate-high definition and lysis contraindication window. UFH for CrCl of 30 or less. AHA 2025 adult choking (5 back blows then 5 abdominal thrusts). Thrombosis Canada preferring V/Q for young patients with a normal chest radiograph. EXTRIP methanol criteria.

## Sources verified

- NIH OI guidelines, update of 2 June 2026, including the Pneumocystis revision: https://www.hiv.gov/blog/update-to-the-guidelines-for-the-prevention-and-treatment-of-opportunistic-infections-in-adults-and-adolescents-with-hiv-060226
- Wong GC et al. CCS/CAIC STEMI 2019, full text: https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf
- Howard J et al. Br J Haematol 2015, full text: https://doi.org/10.1111/bjh.13348 (PMID 25824256)
- Trottier ED et al. CPS acute asthma 2021 (posted 5 November 2021): https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation
- Law YM et al. AHA pediatric myocarditis 2021, full text: https://doi.org/10.1161/CIR.0000000000001001
- Laureano M et al. CBS transfusion reactions 2022: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
- Thrombosis Canada PE diagnosis, version 6 August 2023: https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf
- AHA 2025 Part 7 adult BLS, choking sequence: https://doi.org/10.1161/CIR.0000000000001369
- BTS 2023 pleural guideline (via the 2023 summary in Open Respir Med J): https://openrespiratorymedicinejournal.com/VOLUME/17/ELOCATOR/e18743064286775/FULLTEXT/

## Needs physician decision

- review-extra.ts is two exact duplicates. sob-48 copies sob-26 (Ludwig angina) word for word, and sob-49 copies sob-37 (methanol) word for word. Each copy also carried a planted defect: a wrong key in sob-48 and a made-up lactate in sob-49. Both are now fixed, but neither should be added to the bank. They would fail the near-duplicate stem rule (trigram overlap 1.0). Recommend dropping both.
- sob-25 q4 cites the adult CAFG Part 2 for a 3-year-old. The principle holds, but a pediatric airway source would be better.
- sob-36 q3: the half dose rests on a CCS "practical tip" (may be considered), not a formal recommendation. It is the current standard, backed by STREAM-2 and ESC practice. A physician should confirm it is safe to key a single best answer over the full 35 mg dose.
- sob-40 q3 was rebuilt. Please confirm that epinephrine rather than milrinone is the expected first agent for a hypotensive child with myocarditis. Milrinone is not among the options.

## Summary

- 34 SAMPs read (32 in the batch, 2 extra).
- Fixes: 15 rows across 11 SAMPs. 2 key changes (sob-48 key error, sob-40 rebuild). 1 citation year (sob-39). 9 false or unsupported explanation claims (sob-18 x3, sob-36 x2, sob-38, sob-39, sob-45, sob-49). 3 stem or option facts added or corrected so the explanation holds (sob-19, sob-27, sob-30).
- SAMPs with a defect: sob-18, sob-19, sob-27, sob-30, sob-36, sob-38, sob-39, sob-40, sob-45, sob-48, sob-49.
- Gates: `tsc` shows no errors in samps/s51. `SAMP_BATCH=s51 vitest` (samps and samp-quality): 647 passed.
