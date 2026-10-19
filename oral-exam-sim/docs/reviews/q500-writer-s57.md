# Writer report: batch s57 (Ischemic heart disease, Q500)

File: `src/samps/s57/ischemic-heart-disease.ts`, exported as `ISCHEMIC_HEART_DISEASE_S57` and re-exported by `src/samps/s57/index.ts` as `SAMPS_S57`. All SAMPs are `reviewed: false`, `author: "Preceptor"`, `version: 1`.

## Count and mix

- 5 SAMPs, ids ischemic-heart-disease-48 to ischemic-heart-disease-52.
- 20 questions, 4 per SAMP: 19 `single`, 1 `menu` (49 q2, select two).
- Key positions across the 19 single questions (first to fifth): 4, 4, 4, 4, 3. Highest share 21 percent.
- The key is the single longest option in 4 of 19 single questions (21 percent).

## Scenarios

Each was checked against all 47 earlier ischemic heart disease SAMPs and the 47 chest pain SAMPs for the same scenario, setting and teaching point.

- 48. Rural department with a point-of-care troponin that is not high sensitivity. A man with LVH strain on his baseline ECG. Single conventional troponin, 3 to 6 hour repeat, stress imaging because the resting ECG cannot be read for ischemia, and which stress result calls for angiography.
- 49. Older woman with diabetes and known gallstones, labelled biliary colic at triage. ECG within 10 minutes, accompanying symptoms in women (menu), incidental gallstones do not exclude ischemia, GRACE variables.
- 50. Man with known nonobstructive LAD plaque on a CT angiogram 3 years ago and new exertional angina, off his statin, using sildenafil. Normal troponins do not exclude coronary disease, optimise medical therapy before testing, CT angiography for known nonobstructive disease, nitrate interval after sildenafil.
- 51. Island hospital, 78-year-old woman with anterior STEMI. Half-dose tenecteplase at age 75 or older, enoxaparin without IV bolus in older patients, ST resolution arithmetic, rescue PCI for failed fibrinolysis.
- 52. Painless MI that precipitated ketoacidosis in a man on empagliflozin with autonomic neuropathy. MI as a DKA precipitant, why no chest pain, a large troponin with new ST depression is not just DKA, painless MI carries higher mortality.

## Key feature coverage (questions per key feature)

| KF | Summary | Questions |
|---|---|---|
| 1 | Start testing at once, serial ECG and biomarkers | 2 |
| 2 | ECG interpretation | 1 |
| 3 | Risk stratification | 2 |
| 4 | Do not exclude ACS on one test or weak clues | 4 |
| 5 | Atypical presentations | 3 |
| 6 | Rapid reperfusion | 1 |
| 7 | Risks and benefits of ACS treatments | 3 |
| 8 | Follow-up and further testing for lower risk patients | 4 |

## Sources

All verified this session.

- Gulati M, et al. 2021 AHA/ACC chest pain guideline, executive summary. J Am Coll Cardiol. 2021. https://doi.org/10.1016/j.jacc.2021.07.052 . Recommendation text read from the full executive summary PDF (10 minute ECG, 1 to 3 hour hs and 3 to 6 hour conventional repeat, single sample rule-out, women and older adults, intermediate risk with and without known CAD, GDMT before testing, high risk findings, exercise ECG needs an interpretable ECG).
- Granger CB, et al. GRACE predictors. Arch Intern Med. 2003. https://doi.org/10.1001/archinte.163.19.2345 (abstract lists the 8 variables).
- Amsterdam EA, et al. 2014 AHA/ACC NSTE-ACS guideline. Circulation. 2014. https://doi.org/10.1161/CIR.0000000000000134 (PDE5 inhibitor and nitrate intervals confirmed through secondary quotations of the recommendation).
- Hoffmann-La Roche. TNKase product monograph, revised 21 March 2023. https://pdf.hres.ca/dpd_pm/00069984.PDF (weight bands read from the PDF).
- Armstrong PW, et al. STREAM. N Engl J Med. 2013. https://doi.org/10.1056/NEJMoa1301092 (half dose at 75 or older, emergency angiography for failed fibrinolysis).
- Van de Werf F, et al. STREAM-2. Circulation. 2023. https://doi.org/10.1161/CIRCULATIONAHA.123.064521 (full text read: enoxaparin 0.75 mg/kg SC, 30 mg IV only at 75 or younger, 50% ST resolution at 60 to 90 minutes).
- Gershlick AH, et al. REACT. N Engl J Med. 2005. https://doi.org/10.1056/NEJMoa050849 (abstract).
- Diabetes Canada. Hyperglycemic emergencies in adults. Can J Diabetes. 2018. https://doi.org/10.1016/j.jcjd.2017.10.013 (chapter page read: MI as precipitant, SGLT2 inhibitors, small troponin rise without overt ischemia).
- Diabetes Canada. Screening for the presence of cardiovascular disease. Can J Diabetes. 2018. https://doi.org/10.1016/j.jcjd.2017.10.025 (chapter page read: silent ischemia, one third of MIs silent, cardiac autonomic neuropathy).
- Canto JG, et al. MI without chest pain. JAMA. 2000. https://doi.org/10.1001/jama.283.24.3223 (abstract).

## For the reviewers

- 48 q3 and q4 rest on the US chest pain guideline because no current Canadian document sets the test pathway after ACS is excluded. Point-of-care troponin sensitivity varies by device. The stem states this assay is not high sensitivity.
- 50 q2: the key assumes he stopped atorvastatin without intolerance (stated in the stem). A beta blocker is already in place so it is not a competing answer.
- 51 q2: the enoxaparin regimen follows STREAM-2 and the ESC tables for older patients. The heparin distractor is wrong only because it omits the infusion.
- 52 q2: the link between autonomic neuropathy and silent ischemia is stated in Diabetes Canada for type 1 diabetes and in general reviews for type 2. Reviewers may prefer to soften the key wording.
- 52 q4: the Canto registry is from 1994 to 1998. The direction of the finding has been repeated since, but the percentages are historical.
