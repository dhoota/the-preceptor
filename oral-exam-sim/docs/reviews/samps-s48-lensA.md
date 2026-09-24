# Batch s48 review, Lens A (clinical truth)

Batch: pulmonary edema, `src/samps/s48/pulmonary-edema.ts` (pulmonary-edema-16 to pulmonary-edema-38) and `src/samps/s48/review-extra.ts` (pulmonary-edema-39 and pulmonary-edema-40).

Lens: A, clinical truth. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s48` prints nothing. `SAMP_BATCH=s48 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 468 of 468. Single key positions are now 14, 11, 13, 16 and 14 of 68 (highest 23.5 percent).

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| pulmonary-edema-20 | all | whole SAMP | Rebuilt. The takotsubo case repeated chest-pain-25 (s28) almost exactly: widow, ST elevation V2 to V5, BP 84/52 mmHg, new harsh murmur at the left sternal border, angiography then outflow obstruction. Now re-expansion pulmonary edema after draining a complete pneumothorax, sourced to the 2023 BTS clinical statement on pleural procedures | high |
| pulmonary-edema-31 | q1 | prompt, options, key, explanation | Same patient, home dose and key (furosemide 80 mg PO twice daily, so 160 mg IV) as pulmonary-edema-13 q2 in s15. Rewritten to test the early check of diuretic response (spot urine sodium at 2 hours, ESC 2021) | high |
| pulmonary-edema-21 | q1 and q3 | explanation | Said the AHA cocaine statement advises against labetalol. The statement lets a combined alpha and beta blocker be considered once a vasodilator has been given. In q3 he had nitroglycerin, so the reason given was false. Reworded | high |
| pulmonary-edema-32 | q1 | explanation | Said a low saturation during the walk adds OHFRS risk. The walk item is a pulse of 110/minute or more, or too ill to walk. Saturation below 90% scores only on arrival | high |
| pulmonary-edema-32 | q3 | explanation | Said serious adverse events were counted within 14 days, including death. Death is counted to 30 days, relapse to 14 days | medium |
| pulmonary-edema-28 | q3 | explanation | Attributed a rapid tertiary transfer recommendation to ESC 2021. That text is not in the 2021 guideline. Replaced with its verified MCS and VA-ECMO wording | medium |
| pulmonary-edema-38 | q1 | explanation | Called orthopnea one of the "more specific signs". ESC Table 6 lists orthopnea as a typical symptom and raised JVP as a more specific sign | medium |
| pulmonary-edema-38 | q2 | source, explanation | ESC 2023 ACS was cited where a Canadian guideline exists. Now CCS/CAIC 2019 STEMI (primary PCI within 120 minutes of first medical contact). Removed the unsourced heart failure claim | medium |
| pulmonary-edema-22 | q4 | source, explanation | Cited CRISM 2018 and said buprenorphine-naloxone is the first-line treatment. The 2024 update makes buprenorphine and methadone both first-line and supports take-home naloxone. Citation and wording updated. Key unchanged | high |
| pulmonary-edema-26 | q3 | source, explanation | Said the EXTRIP review warns about intubation. EXTRIP does not cover this. Re-sourced to the ACMT 2013 guidance, which covers the bicarbonate bolus, minute ventilation and the risk at intubation | medium |
| pulmonary-edema-29 | q2 | explanation | Used only the acute cut-offs, but 4 months of exertional symptoms is a non-acute presentation (ESC rule-out 125 pg/mL). Also left out the HFA advice to halve cut-offs in obesity. The key holds under both, and the explanation now shows it | medium |
| pulmonary-edema-29 | stem | stem | Wording echoed pulmonary-edema-09 in s15 ("stops after one flight of stairs"). Varied. The overlap is flagged below | low |
| pulmonary-edema-33 | q3 | source, explanation | Cited the US ACCP statement, which gives no dose. Now the BC Centre for Palliative Care dyspnea guideline 2017 (opioid first, morphine SC or IV repeated every 5 to 10 minutes, benzodiazepines second-line). Explains the reduced dose in stage 4 kidney disease | medium |
| pulmonary-edema-17 | q1, q2, q3 | source, explanation | 2017 ESC PAD guideline has been replaced by 2024 ESC PAAD. Updated the citation, the first-line imaging wording and the revascularization criteria (hypertensive pulmonary edema plus a viable kidney over 8 cm) | medium |
| pulmonary-edema-18 | q2, q3, q4 | source, explanation | 2018 ESC pregnancy guideline has been replaced by the 2025 version. Updated: beta-blockers in symptomatic MS, a diuretic when congestion persists despite a beta-blocker, full-dose LMWH or VKA for AF, DOACs contraindicated, amiodarone routine use contraindicated | medium |
| pulmonary-edema-19 | q2, q3 | source | 2021 ESC/EACTS valve guideline has been replaced by the 2025 version (Praz et al.). Recommendations unchanged | medium |
| pulmonary-edema-27 | q2 | source | AHA 2020 ALS has been replaced by AHA 2025 Part 9 (Wigginton et al.). Epinephrine 2 to 10 mcg/minute unchanged | medium |
| pulmonary-edema-37 | q1, q2 | explanation | Szpilman wording was loose ("grade as mild", discharge "after 6 to 8 hours of observation"). Now matches the text: grade 2, low-flow oxygen, most return to normal within 6 to 8 hours and can go home | low |
| pulmonary-edema-39 (review-extra) | q1 | key | Keyed "Pulmonary embolism" (index 3) against an explanation for negative pressure edema. Planted wrong key. Corrected to index 1 | high |
| pulmonary-edema-40 (review-extra) | q2 | explanation | Invented fact: "serum lactate of 7.8 mmol/L seen on the first blood gas". No lactate appears in the case. Removed | high |

## Key changes

- pulmonary-edema-20: the whole SAMP was rebuilt, so every key is new. q1 is "Re-expansion pulmonary edema" (index 3). q2 is "Oxygen with the drain unclamped" (index 3). q3 is "CPAP with the drain left open" (index 2). Reason: the old SAMP duplicated chest-pain-25.
- pulmonary-edema-31 q1: before, "furosemide 160 mg IV" (index 3). After, "Spot urine sodium at 2 hours" (index 4), in a new question. Reason: the old item duplicated pulmonary-edema-13 q2 in s15.
- pulmonary-edema-39 q1 (review-extra): before, index 3 "Pulmonary embolism". After, index 1 "Negative pressure pulmonary edema". Reason: wrong key.

## Checked and correct

- Furosemide dosing (SAMPs 16, 18, 25, 30, 31, 34). ESC 2021 text: 20 to 40 mg IV if diuretic naive, 1 to 2 times the daily oral dose if not. Response is adequate at a urine sodium above 50 to 70 mEq/L at 2 hours, or urine output above 100 to 150 mL/hour over 6 hours. Double the dose if the response is poor. Then add a thiazide, metolazone or acetazolamide. All keys hold. The DOSE-based s15 range of up to 2.5 times also fits every key. Pediatric furosemide 1 mg/kg at 26 kg is 26 mg. Enoxaparin 1 mg/kg at 70 kg is 70 mg.
- Nitroglycerin. Kloner: the tadalafil interaction is present at 24 hours and gone by 48 hours. ESC 2021 advises IV vasodilators when SBP is above 110 mmHg. The batch keys no infusion start rate, so it does not conflict with sob-17 (100 mcg/minute).
- NIV. ESC 2021 advises NIV for respiratory distress (rate above 25/minute, saturation below 90%) and intubation when failure persists. SAMPs 21, 23, 33, 34, 35 and 38 match.
- NT-proBNP (SAMP 29). ESC 2021 acute rule-out is NT-proBNP below 300 pg/mL (BNP below 100). Non-acute rule-out is below 125. HFA age-specific rule-in is 450, 900 and 1800 pg/mL. HFA suggests about 50 percent lower cut-offs in obesity.
- OHFRS (SAMP 32). Items and points were rechecked. The total of 5 is correct. Scores of 5 or more are very high risk.
- EXTRIP (SAMP 26). ECTR is indicated whatever the level when there is altered mental status or new hypoxemia needing oxygen. The anion gap is 22 and the respiratory alkalosis is real.
- Clozapine (SAMP 28). Troponin 310 ng/L is more than 20 times the upper limit, and CRP is over 100 mg/L. Both meet the Ronaldson stop criteria.
- Drowning prevention (SAMP 37). Szpilman: four-sided fencing with a self-closing gate, and close, constant supervision.

## Sources verified

- McDonagh 2021 ESC HF guideline. Full text read (PASCAR copy): https://www.pascar.org/uploads/files/2021_ESC_Guidelines_for_HF.pdf
- Mazzolai 2024 ESC PAAD guideline (Europe PMC record, and a PMC summary of the renal artery section): https://doi.org/10.1093/eurheartj/ehae179 and https://pmc.ncbi.nlm.nih.gov/articles/PMC11772412/
- De Backer 2025 ESC pregnancy guideline. Full text read: https://www.unipi.it/wp-content/uploads/ESC-guidelines-Cardiovascular-disease-pregnancy-2025.pdf
- Praz 2025 ESC/EACTS valvular guideline: https://academic.oup.com/ehjvshd/article/1/1/xwag001/8429937
- Asciak 2023 BTS clinical statement on pleural procedures. Full text read, including Box 3: https://www.brit-thoracic.org.uk/document-library/clinical-statements/pleural-procedures/bts-clinical-statement-on-pleural-procedures/
- Yakovenko 2024 CRISM OUD guideline update: https://pmc.ncbi.nlm.nih.gov/articles/PMC11573384/
- Wigginton 2025 AHA Part 9 Adult ALS (Europe PMC record, doi 10.1161/CIR.0000000000001376). The epinephrine 2 to 10 mcg/minute dose comes from secondary summaries of the 2025 algorithm, because the AHA PDF was blocked.
- Wong 2019 CCS/CAIC STEMI guideline (Europe PMC record, doi 10.1016/j.cjca.2018.11.031).
- ACMT 2013 guidance on salicylate toxicity. Full text read: https://www.acmt.net/wp-content/uploads/2022/06/PRS_130313_Management-Priorities-in-Salicylate-Toxicity.pdf
- BC Centre for Palliative Care dyspnea guideline 2017. Full text read (Fraser Health copy): https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/Health-Professionals/Professionals-Resources/Hospice-palliative-care/Sections-PDFs-for-FH-Aug31/9524-17-FH---Sym_Guide-Dyspnea-appendix.pdf
- Szpilman 2012 NEJM drowning. Full text read: https://www.lifesavingsociety.com/media/128941/nejmra1013317.pdf
- Stiell 2017 OHFRS validation (Europe PMC abstract, PMID 27976497). Items: https://www.mdcalc.com/calc/3994/ottawa-heart-failure-risk-scale-ohfrs
- McCord 2008 AHA cocaine statement (PubMed 18347214). The labetalol condition is confirmed by a secondary summary: https://www.the-hospitalist.org/hospitalist/article/125897/how-should-patient-cocaine-associated-chest-pain-be-treated/3/
- EXTRIP salicylate: https://www.extrip-workgroup.org/salicylates
- Mueller 2019 HFA natriuretic peptide guidance. The obesity advice is confirmed through search results. The publisher page was blocked.
- Ezekowitz 2017 CCS HF (Europe PMC record, PMID 29111106). The full text could not be fetched (CJC 403, CCS site 503).
- Not re-fetched and taken from the writer's verification: Kloner 2003, Radke 2014, Boyer 2012, Bhattacharya 2016, Moon 2016, Rodriguez-Iturbe 2008, Ronaldson 2011, Masip 2018 (the PDF was blocked), Glikson 2021, Rochwerg 2017, Evans 2021, Busl 2015, Mullens 2019.

## Needs physician decision

- pulmonary-edema-26 repeats sob-09 (s17) almost exactly: older woman with knee osteoarthritis on ASA, confused, crackles, pH 7.44 with a low PCO2, the same salicylate level of 4.1 mmol/L, dialysis for altered mental status and hypoxemia, and intubation that matches minute ventilation. The coordinator told me to keep the s48 version for the s36 overlap. The s17 overlap is separate and still needs a decision, either a rebuild here or acceptance.
- pulmonary-edema-24 overlaps environmental-31 (s36): immersion edema in a woman with hypertension on amlodipine. Kept on coordinator instruction, because the s36 writer is rewriting its item.
- pulmonary-edema-35 q2 (signs that CPAP is failing) and q3 (intubate) repeat pulmonary-edema-08 q1 and q2 (s15) and sob-17 q3 (s51). The rural transfer angle in q3 is new. q2 is not. Flagged, not rewritten, because I could not fetch a source for a verifiable replacement (CPAP settings in Masip 2018).
- pulmonary-edema-16 q3 (ECG, troponin, echo to find the trigger, with blood cultures, D-dimer, lipase and drug screen as distractors) nearly repeats sob-17 q4 (s51) and pulmonary-edema-01 q3 (s15). Flagged.
- pulmonary-edema-29 overlaps pulmonary-edema-09 (s15): heart failure misdiagnosed as asthma, inhalers failed, NT-proBNP as the first test. The obesity teaching point is new. q1 is not.
- pulmonary-edema-32 q1 (walk test before discharge) repeats pulmonary-edema-07 q1 and q2 (s15). The score calculation in q2 is new.
- pulmonary-edema-39 and pulmonary-edema-40 (review-extra) are copies of pulmonary-edema-23 and pulmonary-edema-31 (its old q1), apart from the planted defects. Reject both from the batch as duplicates.
- pulmonary-edema-33 q3 keys morphine 2.5 mg SC in stage 4 kidney disease. The BC guideline supports morphine in a dyspnea crisis, and its opioid guidance favours hydromorphone in renal failure. A physician may prefer hydromorphone 0.25 to 0.5 mg SC as the key.
- Heart failure guidance is mostly cited to ESC 2021. CCS 2017 (with the 2021 HFrEF and 2025 HFnrEF updates) is the Canadian source of record, but I could not fetch its acute heart failure text to check wording. pulmonary-edema-30 q3 still cites CCS 2017 for multidisciplinary home support, and that is unverified. The 2023 ESC focused update does not change any acute item here.

## Summary

- 23 SAMPs in the main file and 2 in review-extra were reviewed question by question.
- 20 fix rows. 1 SAMP rebuilt, 1 question rewritten, 4 false distractor or guideline claims corrected, 3 claims re-sourced or reworded to verified text, 6 stale or non-Canadian sources replaced, and 2 planted defects in review-extra fixed.
- 3 key changes, all described above.
- Most serious errors: pulmonary-edema-20 duplicated chest-pain-25. The labetalol reason in pulmonary-edema-21 q3 was false. pulmonary-edema-39 had a wrong key. pulmonary-edema-40 had an invented lactate.
- SAMP ids with a defect: pulmonary-edema-16, pulmonary-edema-17, pulmonary-edema-18, pulmonary-edema-19, pulmonary-edema-20, pulmonary-edema-21, pulmonary-edema-22, pulmonary-edema-24, pulmonary-edema-26, pulmonary-edema-27, pulmonary-edema-28, pulmonary-edema-29, pulmonary-edema-31, pulmonary-edema-32, pulmonary-edema-33, pulmonary-edema-35, pulmonary-edema-37, pulmonary-edema-38, pulmonary-edema-39, pulmonary-edema-40.
