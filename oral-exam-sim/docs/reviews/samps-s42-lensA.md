# SAMP review, batch s42 (ischemic heart disease), Lens A: clinical truth

Lens: A (clinical truth). Scope: every SAMP in `src/samps/s42/ischemic-heart-disease.ts` (ischemic-heart-disease-16 to 47) and `src/samps/s42/review-extra.ts` (48 and 49). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . | grep samps/s42` prints nothing. `SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 667 passed, 0 failed. No other batch broke test loading during this review.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| 34 | q2 | explanation, source | Said the ESC pregnancy guideline does not recommend prasugrel or ticagrelor because of too few data. The current 2025 ESC pregnancy guideline lists ticagrelor as contraindicated (embryotoxicity) and allows prasugrel in special cases. Rewritten to the 2025 wording. Key (ASA with clopidogrel) unchanged. | high |
| 34 | q1, q2 | source | Cited the 2018 ESC pregnancy guideline, now replaced by the 2025 ESC guideline (De Backer 2025). Source updated. The 2025 text confirms PPCI first, clopidogrel with ASA, and SCAD as the most frequent cause (43%) ahead of atherosclerosis (27%), so 34 q4 holds. | high |
| 35 | q1 | explanation | Attributed the half-dose rule to STREAM-2. The ESC 2023 recommendation (half dose above 75, class IIa B) rests on the original STREAM trial protocol change, not STREAM-2. Rewritten, and the CCS 2019 practical tip (half dose above 75 in a pharmacoinvasive strategy) added. Key 17.5 mg (half of 35 mg at 68 kg) unchanged and recomputed. | high |
| 35 | q2 | explanation | Called the CCS target a door to needle time. CCS 2019 recommendation 16 sets a first medical contact to needle time of 30 minutes or less. Explanation now says so and explains that for a walk-in patient first medical contact is arrival, so the 30 minute key holds. | medium |
| 35 | q3 | source | Cited the 2013 ACCF/AHA STEMI guideline, superseded by the 2025 ACC/AHA ACS guideline. Recited to the Neurocritical Care Society reversal guideline already in the SAMP, which covers ICH after thrombolysis. | medium |
| 30 | q3 | explanation | Named levosimendan as a specialist option for takotsubo with LV outflow tract obstruction. Levosimendan is an inotrope and the consensus places it in shock without obstruction. With obstruction, inotropes are avoided and a pure vasoconstrictor such as phenylephrine is the rescue option. Rewritten. | medium |
| 25 | q3 | explanation | Gave a heart rate target of 60/minute or less (the older 2010 target). The cited 2022 ACC/AHA guideline targets 60 to 80/minute and SBP below 120 mmHg. Corrected. | high |
| 25 | q1 | explanation | Called the aortic regurgitation murmur "new". The stem never says it is new. Word removed. ADD-RS stays 2 on the pain features and the pulse deficit. | medium |
| 45 | q1 to q3 | source | Cited the 2015 ESC pericardial guideline, superseded by the 2025 ESC myocarditis and pericarditis guideline (Schulz-Menger 2025). Source updated. The teaching is unchanged. | medium |
| 47 | q2, q3 | source | Cited the 2021 ESC/EACTS valve guideline, superseded by the 2025 ESC/EACTS guideline (Praz 2025). Source updated. | medium |
| batch | none | source map | STREAM-2, the CCS 2023 antiplatelet update and TOMAHAWK sat in the map with no citing SAMP. Removed. The 2013 ACCF/AHA STEMI entry was also removed once 35 q3 no longer cited it. | high |
| 48 (extra) | q1 | key | Keyed "Repeat troponin at 3 hours" (index 1) while the explanation argues for single sample rule-out. Key changed to "No repeat troponin needed". | high |
| 49 (extra) | q2 | explanation | Ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate is in the case, and a lactate does not confirm stent thrombosis. Sentence removed. | high |

## Key changes

- ischemic-heart-disease-48 q1 (review-extra.ts): before index 1 "Repeat troponin at 3 hours", after index 4 "No repeat troponin needed". Reason: hs-cTnT below 5 ng/L drawn more than 3 hours after onset meets the ESC 2023 very low single sample rule-out (Figure 6, footnote a), which the explanation already taught.

No key in the main batch file changed.

## Items checked first and found correct

- 35 q1: half-dose tenecteplase. ESC 2023: "A half-dose of tenecteplase should be considered in patients >75 years of age" (IIa B). CCS 2019 practical tip agrees for older than 75. He is 79, so the key holds under both. 68 kg is in the 60 to 69 kg band (35 mg), half is 17.5 mg.
- 35 q2: 30 minutes holds as first medical contact to needle (CCS 2019 recommendation 16). ESC counts 10 minutes from STEMI diagnosis instead, which is not an option.
- 47 q1: ESC 2023 section 4.2.2.2 says nitrates should not be given with "known severe aortic stenosis". Confirmed.
- 34 q4: confirmed in the 2025 ESC pregnancy guideline (SCAD 43%, atherosclerosis 27%).
- 17 q4: ESC 2023 says IV beta blockers (preferably metoprolol) should be considered at presentation in a working diagnosis of STEMI going for PPCI with no acute HF and SBP above 120 mmHg. Holds.
- 19 q3: ESC 2023 gives a routine PPCI strategy for late presenters at 12 to 48 hours (IIa B), and class III for over 48 hours without symptoms. The key holds at 30 hours.
- 36 q3: CCS AF 2020 gives an OAC plus clopidogrel, with ASA up to 30 days after ACS with PCI. The key holds. The CCS 2023 antiplatelet update was not needed.
- 21 q4: ESC 2023 moves the fibrinolysis contraindication list to its supplementary data. Oral anticoagulation as a relative contraindication is standard ESC teaching. Applying it to an 8-year-old is an adult extrapolation. See "Needs physician decision".
- 26 q1: ESC 2023 Figure 6 allows single sample rule-out on a very low hs-cTn only when pain began more than 3 hours before. The assay cut-off (hs-cTnT 5 ng/L) is in supplementary Table S4. The key holds.
- 30 q3: the key (fluid bolus) is right. Only the rescue options were wrong (fixed above).
- 29 q1: ESC 2023 gives class IIa B to delayed over immediate angiography and class III A to routine immediate angiography without persistent ST elevation. Holds.
- 31 q4: ESC 2023 lists transient ST elevation as a high risk criterion. Holds.
- Recomputed: 18 q2 (6/20 = 0.30), 23 q2 (66 to 118 ng/L, +79%), 23 q3 (dalteparin 8400, enoxaparin 70, tinzaparin 12 250 at 70 kg), 24 q1 (Cockcroft-Gault 18.2 and 21.5 mL/minute), 24 q2 (50 mg daily, 37.5 mg), 27 q2 (TIMI 5), 32 q2 (30 mL of 10% = 3 g), 47 q3 (45 to 49 ng/L, 8.9%). All correct.
- PCC check from the coordinator: no SAMP in s42 gives a PCC dose. PCC appears only as an undosed distractor in 35 q4, so the 3 000 unit cap does not arise.

## Overlap with s28 chest pain and signed-off banks (near-identical teaching)

These pass the trigram stem gate but teach the same point with the same scenario. None was rewritten in this review. Rewriting belongs to the writer or a physician.

- 30 (widow after the funeral, takotsubo, angiography first, LVOT obstruction) vs chest-pain-25 (71-year-old widow after the funeral, same three teaching points). Near identical.
- 37 (DES in the LAD about 5 weeks ago, stopped ticagrelor, anterior STEMI, stent thrombosis) vs chest-pain-36 (DES in the LAD 6 weeks ago, stopped ticagrelor, stent thrombosis). Near identical.
- 17 q1 (de Winter with the same distractors: early repolarization, hyperkalemia, posterior MI) vs chest-pain-16 q2. Near identical.
- 26 q1 (single sample rule-out, hs-cTnT below 5 ng/L, more than 3 hours) vs chest-pain-27 q2. Near identical. 26 is also close to signed-off ischemic-heart-disease-05 (20 minute episode at a desk, discharge plan).
- 47 q1 (nitroglycerin is the riskiest drug in severe AS) vs chest-pain-34 q3. Near identical.
- 21 q1 and q2 (Kawasaki aneurysm, ECG first, thrombosed aneurysm) vs chest-pain-44 q1 and q2. Near identical.
- 35 (79-year-old at a rural hospital in a snowstorm, 90 minutes of pain, half-dose tenecteplase, 30 minute needle target) vs signed-off chest-pain-15 in s05 (79-year-old, rural, snowstorm, 90 minutes, half dose, 30 minutes). The scenario and teaching are near identical to a signed-off SAMP.
- 25 (dissection with inferior ST elevation, 38 mmHg arm difference) vs chest-pain-18 (the same mechanism and the same 38 mmHg difference). Near identical.
- 16 q2 (PDE5 inhibitor and nitrates) vs chest-pain-37 q1 and q2. Similar.
- 17 q4 (IV metoprolol before PPCI, SBP above 120) vs chest-pain-25 q2 (same rule, applied in reverse). Similar.
- 20 (SCAD) vs chest-pain-20 (postpartum SCAD). Similar topic, different teaching. Acceptable.
- review-extra 48 is a verbatim copy of 26 (same stem and questions), and 49 is a verbatim copy of 37. Neither can join the bank. The near duplicate stem gate would reject them. They are fixed above only so that the file is not left wrong.

## Sources verified

- Wong GC et al. CCS/CAIC STEMI focused update 2019. Full text read (CAIC PDF): recommendation 16 (FMC to needle 30 minutes or less), recommendation 14 (FMC to device 120 minutes), half-dose practical tip, prehospital activation and bypass. https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf
- Byrne RA et al. 2023 ESC ACS guidelines. Full text read: nitrates 4.2.2.2, IV beta blockers, half-dose tenecteplase IIa B, late presenters, OHCA, risk criteria, 0 h/1 h algorithm. https://doi.org/10.1093/eurheartj/ehad191 (text from https://www.uniklinik-ulm.de/fileadmin/default/09_Sonstige/Klinische-Chemie/Downloads/ESC_Guideline_ACS_2023.pdf)
- De Backer J et al. 2025 ESC pregnancy guidelines. Eur Heart J. 2025. Full text read, sections 5.2.2 and 12.2. https://doi.org/10.1093/eurheartj/ehaf193
- Schulz-Menger J et al. 2025 ESC myocarditis and pericarditis guidelines. Eur Heart J. 2025. Metadata by Crossref, supersedes Adler 2015. https://doi.org/10.1093/eurheartj/ehaf192
- Praz F et al. 2025 ESC/EACTS valvular heart disease guidelines. Eur Heart J. 2025. Metadata by Crossref. https://doi.org/10.1093/eurheartj/ehaf194
- Van de Werf F et al. STREAM-2. Circulation. 2023 (patients 60 or older, not the basis of the ESC 75 year rule). https://doi.org/10.1161/CIRCULATIONAHA.123.064521 (removed from map, uncited)
- Isselbacher EM et al. 2022 ACC/AHA aortic disease guideline: SBP below 120 mmHg and heart rate 60 to 80/minute. https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2022/11/01/12/21/2022-guideline-on-aortic-disease-2-gl-ad
- Ghadri JR et al. Takotsubo consensus part II. 2018: inotropes avoided in LVOTO, phenylephrine as the alternative, levosimendan for shock. https://academic.oup.com/eurheartj/article/39/22/2047/5025411
- Andrade JG et al. CCS/CHRS AF guidelines 2020: OAC with clopidogrel and ASA up to 1 month after ACS with PCI. https://onlinecjc.ca/article/S0828-282X(20)30991-0/fulltext
- Rao SV et al. 2025 ACC/AHA ACS guideline (supersedes O'Gara 2013). Metadata by Crossref. https://doi.org/10.1161/CIR.0000000000001309. Not cited, because its ICH wording could not be read.
- All other citations were left as the writer checked them through Crossref. Their claims matched standard teaching.

## Needs physician decision

- The overlap list above. It covers 30, 37, 17 q1, 26 q1, 47 q1, 21, 35 and 25 in particular. 35 repeats a signed-off SAMP (chest-pain-15). A physician should decide which SAMPs to rewrite or drop.
- 21 q4 applies the adult ESC relative contraindication list to an 8-year-old. Paediatric fibrinolysis for Kawasaki thrombosis has no ESC basis. Consider reframing as a general bleeding-risk question or keying it to the AHA Kawasaki statement.
- 33 q3 keys discharge with urgent cardiology follow-up for 2 days of new exertional and postprandial angina in known CAD after MI rule-out. Some would call this new or crescendo angina (unstable angina) and admit. The key is defensible in the hs-troponin era. Low confidence flag.
- 26 q1 and 48: some Canadian sites always take a second troponin. The key follows ESC 2023 as the stem names it.
- 38 q1 and q2 cite the ESC ACS guideline for NIV and nitrates in acute pulmonary edema. A heart failure guideline (CCS HF) would be a closer source.

## Summary

- 13 fixes in 9 SAMPs: 6 explanation errors (34 q2, 35 q1, 35 q2, 30 q3, 25 q3, 25 q1), 5 stale or wrong source fixes (34, 35 q3, 45, 47, and the source map cleanup of 4 entries), 1 key change (48 q1, review-extra) and 1 invented stem fact removed (49 q2, review-extra).
- Most serious: 48 q1 keyed against its own explanation. 34 q2 taught out-of-date pregnancy antiplatelet guidance (ticagrelor is now contraindicated). 30 q3 offered an inotrope for LVOT obstruction. 49 q2 relied on an invented lactate.
- SAMP ids with a defect: 25, 30, 34, 35, 45, 47, 48, 49. Overlap flags: 16, 17, 21, 25, 26, 30, 35, 37, 47. Physician items: 21, 33, 38.
