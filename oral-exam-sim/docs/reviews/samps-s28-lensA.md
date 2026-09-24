# SAMP review. Batch s28, chest pain. Lens A (clinical truth)

Reviewer lens: A, clinical truth. Scope: all 32 SAMPs in `src/samps/s28/chest-pain.ts` (chest-pain-16 to chest-pain-47) and the 2 SAMPs in `src/samps/s28/review-extra.ts` (chest-pain-48 and chest-pain-49). Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| chest-pain-48 (extra) | q1 | correct | Keyed "It should be adjusted for his creatinine" (index 4) while the explanation says troponin is not corrected for creatinine and that a repeat is needed. Key moved to "It needs a repeat value to assess for a rise" (index 2) | high |
| chest-pain-49 (extra) | q2 | explanation | Invented fact. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" appears nowhere in the case and supports nothing. Sentence removed | high |
| chest-pain-16 | q3 | explanation | Said angiography within 24 hours is the plan for "stable" NSTE-ACS. The ESC early invasive window is for high-risk NSTE-ACS. Reworded | low |
| chest-pain-23 | q4 | explanation | Said his pain eased sitting forward "as his did". The stem only says it is worse lying flat. Reworded to what the stem gives | medium |
| chest-pain-24 | q1 | source | US NHLBI panel cited alone where a Canadian consensus exists. Added the Canadian Haemoglobinopathy Association 2015 consensus, which defines acute chest syndrome the same way, and cited it for q1 | medium |
| chest-pain-30 | q4 | explanation | Called all three lower antiviral regimens "doses used for herpes simplex". Acyclovir 400 mg five times daily is not a standard HSV regimen everywhere. Replaced with the true reason: each is below its zoster dose (acyclovir 800 mg five times daily, famciclovir 500 mg three times daily, valacyclovir 1 g three times daily) | medium |
| chest-pain-36 | q3 | explanation | Key confirmed (see below). Explanation now states the Canadian basis: the CCS/CAIC 2023 update suggests P2Y12 pretreatment before primary PCI | medium |
| chest-pain-36 | all | source | CCS/CAIC antiplatelet citation named only the bodies. Added the lead authors (Bainey KR, Marquis-Gravel G) | low |
| chest-pain-41 | q1 | explanation | Distractor reason false. "Hypertrophic cardiomyopathy usually gives a murmur" is wrong, since most HCM is nonobstructive at rest. Replaced with a true reason (no xanthomas, does not explain a relative on lipid therapy) | medium |
| chest-pain-47 | q3 | explanation | Rejected aneurysm because of "a prior MI, which he has not had". The stem never states he has had no MI. Replaced with a true reason tied to the ECG | medium |
| chest-pain-47 | q1 | source | ECG within 10 minutes cited to ESC when the CCS/CAIC 2019 STEMI guideline (defined in the file but never used) recommends a first medical contact to ECG time of 10 minutes or less. Cited CCS and added its URL | medium |

## Key changes

- chest-pain-48 q1 (review-extra): index 4 ("It should be adjusted for his creatinine") to index 2 ("It needs a repeat value to assess for a rise"). The explanation already argued for index 2 and against index 4.

No key in `chest-pain.ts` was changed.

## Writer flags checked

- chest-pain-36 q3, ticagrelor 180 mg before primary PCI. Confirmed. The CCS/CAIC 2023 focused update (Bainey and colleagues, Can J Cardiol 2024) suggests routine P2Y12 pretreatment before primary PCI for STEMI (weak recommendation, low-quality evidence). The ESC 2023 guideline allows it as class IIb. Heparin 7000 units for 90 kg is 77.8 units/kg, inside 70 to 100 units/kg. Clopidogrel 75 mg and prasugrel 10 mg are maintenance doses. Key holds.
- chest-pain-27 q2, 5 ng/L hs-cTnT single-sample rule-out. Consistent with the ESC 0 hour and 1 hour algorithm (very low hs-cTnT below 5 ng/L with pain onset more than 3 hours earlier). No CCS guideline sets a different number. The stem names the threshold as "the very low threshold for this assay", so the key holds under assay-specific cutoffs. No change.
- chest-pain-25 q2, beta blocker conditions. Confirmed. ESC 2023 says IV beta blockers (preferably metoprolol) should be considered at presentation for primary PCI when there is no acute heart failure and systolic BP is above 120 mmHg. The CCS 2019 STEMI update does not address this. Her BP is 108 mmHg. Key holds.
- chest-pain-24 q3, steroids and rebound pain crises. True in the sickle cell literature but not stated by the cited NHLBI report. Left in place. See physician decisions.
- chest-pain-21 q2, lysis 6 weeks after surgery. ESC 2019 lists major surgery within 3 weeks. Six weeks is outside it. Key holds.
- chest-pain-34 q3, nitroglycerin caution in severe aortic stenosis. Reasonable and standard. Key holds.
- chest-pain-30 q4. Fixed as above.
- chest-pain-37, PDE5 intervals from AHA/ACC 2014. No Canadian guideline states them. The 24 hour and 48 hour intervals match the Health Canada product monographs. Acceptable.

## Other checks with no defect found

Recomputed: HEART 3 (27 q4), Wells 8.5 (33 q1), 4.5 (39 q3) and 10 (46 q1), age-adjusted D-dimer 780 ng/mL (32 q3), dalteparin 200 units/kg for 61 kg is 12 200 units, given as 12 500 (33 q3), arm pressure difference 38 mmHg (18 q2), hemoglobin drop 17 g/L (24 q3), troponin delta 56 ng/L (26 q4), modified Sgarbossa ratios 0.30 and 0.15 (29 q4), heparin 76 units/kg (47 q4), enoxaparin 88 mg (40 q4), tenecteplase 45 mg for 82 kg (29 q3 distractor), pulsus 18 mmHg (35). All correct.

Content verified as current: ADD-RS items (17), BTS 2023 symptom-based pneumothorax care (19), SCAD and FMD (20), HCM manoeuvres (22, keyed set correct), NHLBI exchange transfusion triggers (24 q4), pregnancy-adapted YEARS (31), PERC age item (32), Canadian CAT consensus preference for LMWH with an unresected luminal GI primary (33), IRAD pain frequencies (45), complicated type B dissection repair (45), primary PCI after resuscitated arrest with persistent ST elevation (42).

## Sources verified

- Bainey KR, Marquis-Gravel G and colleagues. CCS/CAIC 2023 focused update of the guidelines for the use of antiplatelet therapy. Can J Cardiol. 2024. https://onlinecjc.ca/article/S0828-282X(23)01841-X/fulltext and https://pubmed.ncbi.nlm.nih.gov/38104631/ (pretreatment recommendation confirmed from search results, the full text returned 403)
- Wong GC and colleagues. 2019 CCS/CAIC STEMI focused update. Can J Cardiol. 2019, volume 35, pages 107 to 132. Full text read from https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf (recommendation 2, first medical contact to ECG of 10 minutes or less). Journal URL https://onlinecjc.ca/article/S0828-282X(18)31321-7/fulltext
- Byrne RA and colleagues. 2023 ESC ACS guidelines. https://academic.oup.com/eurheartj/article/44/38/3720/7243210 (IV metoprolol condition confirmed through the ACC summary and guideline copies)
- Carrier M, Blais N, Crowther M and colleagues. Canadian CAT consensus. Curr Oncol. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8700468/ (LMWH preferred with unresected luminal GI tumours, dalteparin 200 units/kg)
- Canadian Haemoglobinopathy Association. Consensus statement on the care of patients with sickle cell disease in Canada. Version 2.0. 2015. Existence and acute chest syndrome definition confirmed through search. The PDF returned 403, so no URL was added.
- Hagan PG and colleagues. IRAD. JAMA. 2000, volume 283, pages 897 to 903. https://pubmed.ncbi.nlm.nih.gov/10685714/ (abrupt onset 84.8%, tearing or ripping 50.6%, migrating about 17%)
- Zoster regimens (valacyclovir 1 g three times daily, famciclovir 500 mg three times daily, acyclovir 800 mg five times daily) confirmed against Dworkin RH and colleagues, Clin Infect Dis 2007, and the literature found in search.
- ESC 0 hour and 1 hour hs-cTnT thresholds: supported by published validation work, for example https://www.ahajournals.org/doi/10.1161/JAHA.124.036307

The other citations were checked by the writer or come from the signed-off s05 file. Their bibliographic details (author, work, year) are plausible and consistent, but I did not refetch each one.

## Needs physician decision

1. review-extra.ts. chest-pain-48 is a near-exact copy of chest-pain-26 (same title, stem and questions), and chest-pain-49 is a copy of chest-pain-37. Each carried one planted error, now fixed. Neither should be added to the bank, because each duplicates a SAMP already in the batch and would fail the near duplicate stem gate. Recommend dropping both.
2. chest-pain-24 q3. The line "Steroids are linked to rebound pain crises" is true but not in the cited NHLBI report. A physician may want a specific source added or the sentence removed. Also consider whether the whole SAMP should rest on the Canadian 2015 consensus, which I could only confirm in part.
3. chest-pain-27 q2 and chest-pain-28 q2. Troponin thresholds are assay and laboratory specific in Canada. The stems name the assay and threshold, so the keys hold, but local protocols vary.
4. chest-pain-19 q3. Conservative care for a 3 cm primary pneumothorax follows BTS 2023, which is a UK guideline. No Canadian pneumothorax guideline exists. The key is current, but some Canadian centres still aspirate by size.

## Summary

- 34 SAMPs reviewed (32 in the batch, 2 extra). 11 fixes in 10 SAMPs.
- By category: 1 wrong key (extra), 1 invented stem fact (extra), 3 false or unsupported distractor reasons (30, 41, 47), 2 explanation claims not in the stem (23, 16 wording), 4 source fixes to use Canadian guidance or complete a citation (24, 36 twice, 47).
- Most serious: the wrong key in chest-pain-48 q1 and the invented lactate in chest-pain-49 q2, both in review-extra.ts, and the false HCM murmur reason in chest-pain-41 q1.
- SAMPs with a defect: chest-pain-16, 23, 24, 30, 36, 41, 47, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s28` prints nothing. `SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 699 passed, 0 failed.
