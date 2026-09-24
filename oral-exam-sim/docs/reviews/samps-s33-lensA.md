# Review of batch s33 (DVT and PE), Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: `src/samps/s33/dvt-pe.ts` (dvt-pe-16 to 47) and `src/samps/s33/review-extra.ts` (dvt-pe-48 and 49). Every question, option and explanation was read against its stem. Every score, dose and threshold was recomputed. The six Thrombosis Canada guides cited in the batch were downloaded and read in full. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| dvt-pe-48 (extra) | q1 | correct | Key was "Acute arterial embolism" (index 0) while the explanation and the stem describe phlegmasia cerulea dolens. Key restored to index 3. | High |
| dvt-pe-49 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives and that has nothing to do with a filter decision. Sentence removed. | High |
| dvt-pe-16 | q4 | update, options, explanation, source | Out of date. The 2024 ASH/ISTH pediatric update (Blood Adv 2025, recommendation 3) suggests 6 weeks rather than 3 months for selected children with provoked VTE, so "3 months or less" from 2018 no longer made 3 months the single best answer. Rebuilt: the update now shows persistent occlusive thrombus at 6 weeks, an exclusion to the short course, so 3 months stays the key. "Nine months" replaced by "Six weeks" as a real distractor. Source changed to the 2024 update. | High |
| dvt-pe-45 | q3 | prompt, explanation, source | The explanation said ASH suggests LMWH or a VKA for pediatric VTE. The 2024 ASH/ISTH update (recommendation 17) suggests rivaroxaban or dabigatran over standard agents, after at least 5 days of parenteral therapy. Prompt now asks for the initial regimen, and the explanation states the parenteral lead-in and the later DOAC switch. Dose bands corrected to the 2024 table: 1 mg/kg every 12 hours is the start dose above 5 years, and about 1.5 mg/kg (1.5 to 1.7) is for infants under 3 months, not "older than 2 months". | High |
| dvt-pe-25 | stem, q1 | stem, explanation | 4Ts timing. With only a day of surgery count and today's count, the onset of the fall is "consistent with day 5 to 10 but not clear", which scores 1, giving 7 (an option) rather than the keyed 8. Added a normal count of 256 x 10^9/L six days after surgery so the onset is clearly on day 5 to 8 of enoxaparin. Explanation also said "day 9 of heparin", but enoxaparin started the day after surgery, so today is day 8. Fall recomputed: 256 to 88 is 66%. | High |
| dvt-pe-26 | stem, q4 | stem, explanation | Key LMWH rested on "cancer of the GI tract", but the patient has pancreatic cancer, which Thrombosis Canada does not list as GI tract malignancy, and Caravaggio showed no excess GI bleeding with apixaban. Added a stem fact that the tumour invades the duodenal wall, and the explanation now ties the LMWH preference to GI tract involvement. | Medium |
| dvt-pe-37 | q2 | update, explanation | IVC filter at day 11 after ICH was not unambiguous, because some stroke teams start anticoagulation within 1 to 2 weeks. Added an update: the neurologist judges therapeutic anticoagulation unsafe for at least 2 more weeks. The key now follows Thrombosis Canada without dispute. | Medium |
| dvt-pe-38 | q4 | explanation | Said a low saturation or low BP "would add to the 1 point she already has for cancer and make outpatient care unsafe", which implies an sPESI of 1 is low risk. Any sPESI of 1 or more is outside the low risk group. Rewritten: her cancer already scores 1, a saturation below 90% means she needs oxygen, and a systolic BP below 100 mmHg with her tachycardia suggests early hemodynamic compromise. | Medium |
| dvt-pe-22 | q3 | options, explanation | Key "dalteparin 14 000 units" is not a syringe size. The Thrombosis Canada cancer guide says to round up to the nearest prefilled syringe, so 70 kg gives 15 000 units. Key changed in wording to 15 000 units, and the half dose distractor to 7500 units. Same position, same answer. | Medium |
| dvt-pe-35 | q3 | source | The Virchow node claim was cited to the Thrombosis Canada cancer guide, which does not mention it. Added and cited Aghedo and Kasi, StatPearls 2025 (verified). The unused cancer guide was removed from the SAMP sources. | Medium |
| dvt-pe-44 | q1 | source | Pugh 1973 scored prothrombin time in seconds, not the INR bands the explanation uses. Source replaced with Tsoris and Marlar, StatPearls 2023, which gives the INR bands of below 1.7, 1.7 to 2.3 and above 2.3. Score of 11, class C, rechecked and correct. | Medium |
| dvt-pe-44 | q2 | explanation | Said edoxaban is "contraindicated" in liver disease with coagulopathy. Thrombosis Canada says apixaban is contraindicated and edoxaban is not recommended. Reworded. | Low |
| dvt-pe-31 | q2 | explanation | Said ASH "recommends against relying on D-dimer" in high probability. The strong ASH statement is against a positive D-dimer alone to diagnose PE and against D-dimer after a negative CT. The starting-test statement is a suggestion for CT. Reworded. | Low |

## Key changes

- dvt-pe-48 q1 (review-extra): before index 0 "Acute arterial embolism", after index 3 "Phlegmasia cerulea dolens". The old key contradicted its own explanation and stem. The explanation already supported the new key.
- dvt-pe-22 q3: the keyed option text changed from "dalteparin 14 000 units SC daily" to "dalteparin 15 000 units SC daily" (same index 1, same drug and regimen). Recorded here because the option text changed.

No key index was changed in the main file.

## Duplicate content in review-extra.ts

- dvt-pe-48 is a copy of dvt-pe-26 (before this review's stem fix) with a wrong key.
- dvt-pe-49 is a copy of dvt-pe-37 (before this review's update) with an invented lactate sentence.

Even after the fixes, neither should enter the bank. Both would fail the near duplicate stem rule against 26 and 37. Recommendation: reject both. The duodenal wall and neurologist fixes were not copied into them.

## Checked and correct

- Pediatric enoxaparin: 16 q3 (58 kg, 1 mg/kg every 12 hours, 60 mg syringe) and 45 q3 (28 kg, 28 mg) match the 2024 ASH/ISTH starting dose table. 2018 recommendation 9 (keep a functioning catheter that is still needed) is reprinted unchanged in the 2024 document, so 45 q2 stands.
- HIT (25): ASH 2018 recommendations 2.1 (immunoassay), 3.1 (argatroban, bivalirudin, danaparoid, fondaparinux or a DOAC), 3.4 (no routine filter), 3.5 (no VKA before platelet recovery, vitamin K if already on a VKA) and 3.6 (against routine platelet transfusion at average bleeding risk) all match the explanations.
- Obesity (23 q1): ISTH 2021 guidance supports standard dose apixaban or rivaroxaban above a BMI of 40 kg/m2 or 120 kg and advises against dabigatran and edoxaban. Enoxaparin 152 mg to 150 mg, and 1.5 mg/kg daily of 228 mg, are right.
- Child-Pugh (44 q1): 3 + 3 + 2 + 2 + 1 = 11, class C.
- Neuraxial rule (40 q2): Thrombosis Canada pregnancy treatment guide, "neuraxial anesthesia should not be used within 24 hours of a therapeutic dose of LMWH". Withholding at labour onset (q1) and 6 weeks postpartum with 3 months total (q3) also match.
- Wells DVT (18, 28, 29, 34, 36), Wells PE (19, 24, 31, 38, 39, 42, 43), PEGeD bands, PERC, sPESI (21, 22, 32), age adjusted cutoff (760), ESC risk classes (33, 47) and absolute lysis contraindications (47 q3) all recompute correctly.
- LMWH doses: 20 (14 800 to 15 000), 21 (18 000), 28 (tinzaparin 14 000), 30 (16 000 to 15 000), 33 (17 200 to 18 000), 35 (14 800 to 15 000), 41 (82 to 80 mg) follow the "nearest prefilled syringe" wording of the DVT and PE treatment guides.
- 21 q1: 15 to 35 fold postpartum risk, age 40 or more and emergency caesarean match the Thrombosis Canada prophylaxis guide. 21 q2 breast milk statement matches the treatment guide word for word in substance.
- 27 q4: alteplase 50 mg bolus in arrest and 0.6 mg/kg over 15 minutes are both listed by Thrombosis Canada.
- 29 q2 and q3: ASH 2018 diagnosis recommendation 8 (D-dimer first when recurrence is unlikely) and the 4 mm rule in the Thrombosis Canada diagnosis guide.
- 20 q2, 20 q4, 30 q3: ASH 2018 pregnancy recommendations 30 (VQ over CTPA), 9 (outpatient care for low risk VTE) and 31 (serial ultrasound or MR venography).
- 35 q2, 29 q4, 23 q3, 36 q4, 41 q3: ASH 2020 recommendations 23 (LMWH after breakthrough on VKA), 21 (INR 2.0 to 3.0), indefinite therapy for unprovoked VTE, 1 (home treatment), 5 (anticoagulation alone over lysis) and 10 to 11 (no filter added).

## Sources verified

- Thrombosis Canada guides, read in full: PE treatment (1 May 2025), DVT diagnosis, DVT treatment (2 November 2025), pregnancy VTE treatment, pregnancy thromboprophylaxis, cancer and thrombosis (2024). URLs as cited in the file, all resolve.
- Monagle P, et al. ASH/ISTH 2024 updated guidelines for treatment of VTE in pediatric patients. Blood Adv. 2025. https://pubmed.ncbi.nlm.nih.gov/40423983/ (full text read at PMC12235321). Added.
- Aghedo BO, Kasi A. Virchow node. StatPearls. 2025. https://pubmed.ncbi.nlm.nih.gov/32310560/. Added.
- Tsoris A, Marlar CA. Use of the Child Pugh score in liver disease. StatPearls. 2023. https://pubmed.ncbi.nlm.nih.gov/31194448/. Replaces Pugh 1973.
- Cuker A, et al. ASH 2018 HIT guideline. https://pubmed.ncbi.nlm.nih.gov/30482768/ (read at PMC6258919). URL added.
- Wells PS, et al. N Engl J Med. 2003. https://pubmed.ncbi.nlm.nih.gov/14507948/. URL added.
- Lim W, et al. ASH 2018 diagnosis (PMC6258916), Bates SM, et al. ASH 2018 pregnancy (PMC6258928), Ortel TL, et al. ASH 2020 treatment (PMC7556153): recommendations read.
- Martin KA, et al. ISTH SSC 2021 obesity guidance. https://pubmed.ncbi.nlm.nih.gov/34259389/ and https://onlinelibrary.wiley.com/doi/10.1111/jth.15358
- PubMed ids checked in Europe PMC for Kearon 2019, van der Pol 2019, Jimenez 2010, Zondag 2011, Righini 2014, Kline 2004, Wells 2001, Steffel 2021, Konstantinides 2020, Monagle 2018 and Lim 2018. All match their citations.

## Needs physician decision

- dvt-pe-18 q3: serial ultrasound is keyed for a calf DVT three weeks after a major ulcer bleed. Thrombosis Canada suggests anticoagulation when symptoms are severe, and his calf is 3.5 cm larger with pitting edema. The recent bleed makes surveillance defensible, but a physician should confirm the key is unambiguous.
- dvt-pe-33 q2: admission is keyed for intermediate low risk PE with sPESI 0 and RV dilation. Practice varies and some centres discharge such patients. The key follows Thrombosis Canada caution about RV dilation.
- dvt-pe-16 and 45: whether a 16-year-old should be managed under pediatric (ASH/ISTH) or adult rules. The rebuilt 16 q4 gives 3 months under either.
- Local anesthesia protocols for neuraxial timing (40 q2) vary. The 24 hour rule is the Thrombosis Canada statement.

## Summary

- 32 main SAMPs and 2 extra SAMPs reviewed, 119 main questions.
- 13 fixes in 12 SAMPs: 1 wrong key (extra), 1 invented fact (extra), 2 outdated guidance (16, 45), 1 score that could be 7 or 8, fixed in the stem (25), 2 keys needing stem support to be unambiguous (26, 37), 1 false distractor or risk reasoning (38), 1 dose rounding (22), 2 wrong or weak sources (35, 44), 2 overstated wording (31, 44).
- One key index changed (dvt-pe-48, extra). One key option reworded (dvt-pe-22).
- SAMPs with a defect: dvt-pe-16, 22, 25, 26, 31, 35, 37, 38, 44, 45, 48, 49.
- Gates: `npx tsc --noEmit -p .` shows no s33 errors. `SAMP_BATCH=s33 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 707 of 707.
