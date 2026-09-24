# SAMP review s42, Lens A (clinical truth), second pass

Lens: A, clinical truth.

Scope: the eight SAMPs rebuilt after the first Lens A review (ischemic-heart-disease-17, ischemic-heart-disease-21, ischemic-heart-disease-25, ischemic-heart-disease-26, ischemic-heart-disease-30, ischemic-heart-disease-35, ischemic-heart-disease-37, ischemic-heart-disease-47) in `src/samps/s42/ischemic-heart-disease.ts`, and every SAMP in `src/samps/s42/review-extra.ts` (ischemic-heart-disease-48, ischemic-heart-disease-49). Overlap was checked against s28 chest pain, s12, s05 chest pain, s09 and the rest of the bank by grep.

This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| ischemic-heart-disease-48 | q1 | correct | Key pointed to "7" while the explanation and arithmetic give 1 + 0 + 2 + 2 + 0 = 5. Key restored to "5". | high |
| ischemic-heart-disease-49 | q2 | explanation | Closing sentence cited a serum lactate of 7.8 mmol/L that appears nowhere in the case and would not confirm an LVH mimic in any case. Sentence removed. | high |
| ischemic-heart-disease-25 | q3 | update, prompt, options, key, explanation | Repeated the teaching point of signed-off ischemic-heart-disease-07 in s12 q3 (inferior STEMI block usually resolves after reperfusion, permanent pacemaker premature). The old source, ESC 2023, has no narrative on transient nodal block. Rebuilt as a new question on the ESC 2023 recommendation that a permanent pacemaker is indicated only when high degree AV block has not resolved within at least 5 days, with 40 days (the ICD wait) as a distractor. | high |
| ischemic-heart-disease-35 | q3 | source, explanation | The Q wave statement ("should not necessarily change the reperfusion strategy decision") is in the 2017 ESC STEMI guideline, not in the 2023 ESC ACS guideline, whose full text I searched. Source changed to Ibanez 2017 ESC STEMI. "Q waves have no bearing on the choice between PCI and fibrinolysis" was overstated. Reworded to match the guideline and to say that time to PCI drives the choice. | high |
| ischemic-heart-disease-35 | stem, q1 | stem, explanation | Stem gave laboratory arrival at 1135, then the explanation assumed device time "shortly after" and still inside 120 minutes. The CCS threshold is first medical contact to device. Stem now gives an expected device time of 1135, so 105 minutes is exact. | medium |
| ischemic-heart-disease-35 | q2 | explanation | "Did not improve salvage" is not what ASSENT-4 PCI measured. The trial showed more patent arteries at first angiography with worse clinical outcomes. Reworded to that. | medium |
| ischemic-heart-disease-30 | q3 | explanation | The serotonin syndrome reason named fentanyl alongside tramadol and was not in the cited source. Rewritten as a true pharmacology statement: morphine has little serotonergic activity, unlike tramadol, meperidine or methadone. | medium |
| ischemic-heart-disease-17 | q2 | explanation | "Half dose is for patients over 75". ESC 2023 Table S10 says half dose at 75 years or older. Changed to "75 or older". | medium |
| ischemic-heart-disease-17 | q3 | explanation | "Untreated hypertension" over 4 years is not in the case. She stopped her medications 2 weeks ago. Changed to "hypertension". | medium |
| ischemic-heart-disease-47 | q3 | explanation | The distractor "Female sex at 72 years" was given a reason only for age. Female sex is a predictor in some bleeding scores, so the explanation now says it is not an ARC-HBR criterion. | medium |
| ischemic-heart-disease-37 and ischemic-heart-disease-49 | q1 | explanation | "A Brugada pattern is limited to V1 and V2" is too absolute (it can extend to V3 with high lead placement). Changed to "mainly in V1 and V2". | low |

## Key changes

- ischemic-heart-disease-48 q1: key "7" (index 4) changed to "5" (index 2). The explanation already computed 5.
- ischemic-heart-disease-25 q3: question rebuilt whole. Old key "Usually resolves after reperfusion" (index 4). New key "5 days" (index 2), minimum wait before a permanent pacemaker for persistent high degree AV block. New update, prompt, options and explanation. Single key positions first to fifth are now 21, 21, 23, 18, 16, all under 25%.

## Points the writer asked me to check

- 25, ESC 2023 AV block wording. The 2023 main text has no statement that type I block in inferior MI is nodal and transient. It recommends chronotropes and temporary pacing only for bradycardia with hemodynamic intolerance or high degree block without a stable escape, a permanent pacemaker only when high degree block does not resolve within at least 5 days, and no pacing when block resolves after revascularization. q1 (monitoring without pacing) is supported by those rows. The nodal mechanism in the q1 explanation is standard physiology but is not in the cited text. q3 was rebuilt, see above. q2, beta blockers contraindicated in second or third degree AV block, is correct. ESC 2023 gives IV metoprolol only with SBP above 120 mmHg, no heart failure and no other contraindications.
- 35 q3, Q waves. Not in ESC 2023. Present in ESC 2017. Source changed.
- 30 q3. ESC 2023 section 4.2.2.3 confirmed: IV opioids "should be considered" for severe chest pain, and morphine slows gastrointestinal absorption and may delay oral antiplatelet onset. Serotonin sentence rewritten.
- 47 q2. ESC 2023 Table 6 gives a clopidogrel load of 300 to 600 mg, and states prior stroke is a contraindication for prasugrel. The Canadian Brilinta monograph lists a history of intracranial hemorrhage as a contraindication. Key 300 mg holds, and 600 mg is not an option, so no second defensible answer.
- 17 q2. ESC 2023 Table S11 confirmed: refractory hypertension, SBP above 180 mmHg and/or DBP above 110 mmHg, is a relative contraindication. 188/114 mmHg exceeds both. Key holds.
- 21 q1. Fourth UDMI: rise above the 99th percentile without evidence of ischemia is acute nonischemic myocardial injury. Rise (118 minus 64) / 64 = 84%. Key holds.

## Recomputed numbers

- 17 q1: 1310 to 1330 is 20 minutes, plus 30 + 110 + 20 = 180 minutes. Distractor 160 = 180 minus 20. Correct.
- 26 and 48 q1: HEART 1 + 0 + 2 + 2 + 0 = 5. Correct in 26, key was wrong in 48.
- 35 q1: 0950 to 1135 = 105 minutes.
- 37 q1 and q3: 3 / 35 = 8.6%, 3 / 40 = 7.5%, both under 10% and far below the 25% Armstrong cut.
- 47 q1: (188 minus 96) / 96 = 95.8%.

## Overlap

- ischemic-heart-disease-48 and ischemic-heart-disease-49 are verbatim copies of ischemic-heart-disease-26 and ischemic-heart-disease-37 (same stems, options and explanations). They must not be added to the batch. I fixed their planted defects so the file is at least correct.
- ischemic-heart-disease-26 q1 computes a HEART score. The same skill is tested in chest-pain-27 q4 (s28), ischemic-heart-disease-05 q2 (s12) and chest-pain-09 q4 (s05), and chest-pain-09 q4 also teaches that a score of 5 needs further evaluation. Inputs differ. The new teaching in 26 is q2 and q3. Flagged, not rewritten.
- ischemic-heart-disease-17 q1 and ischemic-heart-disease-35 q1 both teach the 120 minute first medical contact to device rule, which s05 (two SAMPs), s09 and s12 (ischemic-heart-disease-01 q2 and a 40 minute transfer case) already teach. The arithmetic in 17 and the air transfer in 35 are new framing only. Flagged, not rewritten, as this is a core key feature.
- ischemic-heart-disease-37 q3 teaches a 25% ST to QRS proportion for LVH. The modified Sgarbossa 25% rule for LBBB and paced rhythm is in s12 and s28. Different condition, same idea. Low concern.
- ischemic-heart-disease-21, ischemic-heart-disease-30 and ischemic-heart-disease-47: no repeat found in s28, s12 or the wider bank.

## Sources verified

- ESC 2023 ACS guideline, main text and supplementary data read in full text: https://doi.org/10.1093/eurheartj/ehad191, full text at https://www.uniklinik-ulm.de/fileadmin/default/09_Sonstige/Klinische-Chemie/Downloads/ESC_Guideline_ACS_2023.pdf and supplement at https://www.uniklinik-ulm.de/fileadmin/default/09_Sonstige/Klinische-Chemie/Downloads/ehad191_supplementary_data_ESC_Guideline_ACS_2023.pdf
- Ibanez B et al. 2017 ESC STEMI guideline. Eur Heart J. 2018. Q wave sentence confirmed at https://academic.oup.com/eurheartj/article/39/2/119/4095042. Metadata on Crossref, https://doi.org/10.1093/eurheartj/ehx393
- ASSENT-4 PCI investigators. Lancet. 2006. Abstract on Europe PMC: primary endpoint 19% versus 13%, in-hospital death 6% versus 3%, stroke 1.8% versus 0. https://doi.org/10.1016/S0140-6736(06)68147-6
- Armstrong EJ et al. Am J Cardiol. 2012. Abstract on Europe PMC: ST to R-S magnitude of 25% or more in anterior ST elevation improved specificity. https://doi.org/10.1016/j.amjcard.2012.05.032
- Urban P et al. ARC-HBR. Circulation. 2019. https://doi.org/10.1161/CIRCULATIONAHA.119.040167
- Wong GC et al. CCS/CAIC STEMI focused update. Can J Cardiol. 2019. https://doi.org/10.1016/j.cjca.2018.11.031
- AstraZeneca Canada. Brilinta product monograph (contraindication in history of intracranial hemorrhage). https://www.astrazeneca.ca/content/dam/az-ca/downloads/productinformation/brilinta-product-monograph-en.pdf (checked by search, not cited in the SAMP)

## Needs physician decision

- ischemic-heart-disease-48 and ischemic-heart-disease-49 duplicate ischemic-heart-disease-26 and ischemic-heart-disease-37. Recommend they are not added.
- ischemic-heart-disease-26 q1 (HEART score calculation) and ischemic-heart-disease-17 q1 and ischemic-heart-disease-35 q1 (120 minute rule) repeat teaching in s05, s12 and s28. Decide whether repetition of a core key feature is acceptable.
- ischemic-heart-disease-35 q3 now rests on the 2017 ESC STEMI guideline, which the 2023 ACS guideline replaced without restating the Q wave sentence. The statement is not contradicted, but the physician may prefer a current source.
- ischemic-heart-disease-47 q2 cites ESC 2023. The CCS/CAIC antiplatelet guidance also covers clopidogrel loading and could be preferred as the Canadian source. I did not verify a specific CCS document, so I made no change.
- ischemic-heart-disease-17 q4 says "She takes no digoxin", which the stem does not state explicitly (Lens B point).

## Summary

- 11 fixes across 8 SAMPs: 1 wrong key (48), 1 invented stem fact (49), 1 question rebuilt for overlap (25 q3), 1 wrong citation (35 q3), 5 false or overstated distractor or explanation reasons (17 q2, 30 q3, 35 q2, 35 q3, 47 q3), 1 timing ambiguity (35 stem), 2 minor accuracy edits (17 q3, 37 and 49 q1).
- Key changes: 2 (48 q1, 25 q3).
- SAMPs with a defect: ischemic-heart-disease-17, ischemic-heart-disease-25, ischemic-heart-disease-26 (overlap flag), ischemic-heart-disease-30, ischemic-heart-disease-35, ischemic-heart-disease-37, ischemic-heart-disease-47, ischemic-heart-disease-48, ischemic-heart-disease-49.
- No defect found: ischemic-heart-disease-21.
- Gates: `npx tsc --noEmit -p . | grep samps/s42` prints nothing. `SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 659 passed.
