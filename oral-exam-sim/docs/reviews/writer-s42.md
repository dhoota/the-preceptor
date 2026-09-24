# SAMP writer report. Batch s42, ischemic heart disease

32 new SAMPs, ids ischemic-heart-disease-16 to ischemic-heart-disease-47, in `src/samps/s42/ischemic-heart-disease.ts`. The file exports `ISCHEMIC_HEART_DISEASE_S42_SAMPS` and `src/samps/s42/index.ts` exports it as `SAMPS_S42`. All SAMPs have `reviewed: false`. The 15 existing SAMPs in `src/samps/s12/ischemic-heart-disease.ts` were read first. Their scenarios were not repeated. These were rural inferior STEMI with RV infarct, silent NSTEMI in an older diabetic woman, pericarditis, Wellens, HEART score 2, cocaine, complete heart block with inferior STEMI, posterior STEMI, LBBB with Sgarbossa, the GI cocktail, stroke as a lysis contraindication, cardiogenic shock, failed lysis, ST elevation in aVR and new exertional angina.

## Checks

- `npx tsc --noEmit -p . | grep samps/s42` prints nothing.
- `SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 667 passed, 0 failed, including the bank wide near duplicate stem gate and the 25 percent position gate.
- A build script checked stems at 50 to 150 words (range 79 to 116), updates at 10 to 45 words, prompts at 10 to 30 words, explanations of 200 characters or more, option order, spread and parity.

## Count, mix and key positions

- 32 SAMPs and 109 questions. 13 SAMPs have 4 questions and 19 have 3. None has 5.
- 100 single questions and 9 menu questions. One menu question sits in each of 9 SAMPs (18, 26, 28, 38, 40, 41, 43, 44, 45), a little under one SAMP in three.
- Single key positions, first to fifth: 21, 21, 20, 22, 16. The highest is 22%.
- The key is the single longest option in 29 of 100 single questions (29%).

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Start testing at once, serial ECGs and troponins | 13 |
| 2. Accurate ECG reading, subtle ischemia and mimics | 14 |
| 3. Risk stratification | 16 |
| 4. Do not exclude ACS on one negative test or weak clues | 7 |
| 5. Atypical presentations | 11 |
| 6. Rapid reperfusion for STEMI | 13 |
| 7. Weigh risks of lysis, PCI, pacing, beta blockers | 26 |
| 8. Follow-up and further testing for low risk patients | 9 |

## Setting and population spread

- Ages 8 to 88. Children in 21 (8, Kawasaki aneurysm thrombosis) and 46 (15, homozygous familial hypercholesterolemia). Older adults in 18, 19, 22, 24, 27, 28, 30, 35, 36, 38, 47.
- Rural hospitals in 19 and 35. Community hospitals in 24 and 25. Ambulance arrivals in 16, 18, 28, 29, 38, 47.
- Topics include prehospital activation and sildenafil with nitrates, de Winter, paced rhythm with modified Sgarbossa, late presenting STEMI, SCAD, type 2 MI from GI bleeding, NSTEMI on dialysis, enoxaparin renal dosing, dissection with inferior ST elevation, single sample hs troponin rule-out, prior negative stress test with TIMI score, frail older adult with delirium, post-arrest ECG (COACT), takotsubo with LVOT obstruction, vasospasm with triptans, hyperkalemic pseudoinfarction, LV aneurysm, STEMI in pregnancy, half dose tenecteplase and post-lysis ICH, AF on apixaban with PCI, stent thrombosis, flash pulmonary edema, septal rupture, high lateral occlusion, CCTA with LBBB, anginal equivalents in women, hyperacute T waves, anabolic steroids, post-infarction pericarditis and aortic stenosis.

## Sources

Each citation was checked against Crossref metadata (authors, title, journal, year). DOI links are in the source `url` fields.

- Wong GC et al. CCS/CAIC STEMI focused update. Can J Cardiol. 2019. https://doi.org/10.1016/j.cjca.2018.11.031
- Byrne RA et al. 2023 ESC ACS guidelines. Eur Heart J. 2023. https://doi.org/10.1093/eurheartj/ehad191
- Gulati M et al. 2021 chest pain guideline. J Am Coll Cardiol. 2021. https://doi.org/10.1016/j.jacc.2021.07.053
- Thygesen K et al. Fourth universal definition of MI. J Am Coll Cardiol. 2018. https://doi.org/10.1016/j.jacc.2018.08.1038
- Hofmann R et al. DETO2X-AMI. N Engl J Med. 2017. https://doi.org/10.1056/NEJMoa1706222
- Killip T, Kimball JT. Am J Cardiol. 1967. https://doi.org/10.1016/0002-9149(67)90023-9
- de Winter RJ et al. N Engl J Med. 2008. https://doi.org/10.1056/NEJMc0804737
- Dodd KW et al. Modified Sgarbossa in paced rhythm. Ann Emerg Med. 2021. https://doi.org/10.1016/j.annemergmed.2021.03.036
- Hayes SN et al. AHA SCAD statement. Circulation. 2018. https://doi.org/10.1161/CIR.0000000000000564
- McCrindle BW et al. AHA Kawasaki statement. Circulation. 2017. https://doi.org/10.1161/CIR.0000000000000484
- Isselbacher EM et al. 2022 ACC/AHA aortic disease guideline. J Am Coll Cardiol. 2022. https://doi.org/10.1016/j.jacc.2022.08.004
- Antman EM et al. TIMI risk score. JAMA. 2000. https://doi.org/10.1001/jama.284.7.835
- Lemkes JS et al. COACT. N Engl J Med. 2019. https://doi.org/10.1056/NEJMoa1816897
- Ghadri JR et al. Takotsubo consensus part II. Eur Heart J. 2018. https://doi.org/10.1093/eurheartj/ehy077
- Vrints C et al. 2024 ESC chronic coronary syndromes. Eur Heart J. 2024. https://doi.org/10.1093/eurheartj/ehae177
- Littmann L, Gibbs MA. Hyperkalemia ECG. J Electrocardiol. 2018. https://doi.org/10.1016/j.jelectrocard.2018.06.018
- Lindner G et al. KDIGO hyperkalemia in the ED. Eur J Emerg Med. 2020. https://doi.org/10.1097/MEJ.0000000000000691
- Klein LR et al. LV aneurysm versus anterior STEMI. Am J Emerg Med. 2015. https://doi.org/10.1016/j.ajem.2015.03.044
- Regitz-Zagrosek V et al. 2018 ESC pregnancy guideline. Eur Heart J. 2018.
- Frontera JA et al. Reversal of antithrombotics in ICH. Neurocrit Care. 2016 (online 2015). https://doi.org/10.1007/s12028-015-0222-x
- Andrade JG et al. 2020 CCS/CHRS AF guideline. Can J Cardiol. 2020. https://doi.org/10.1016/j.cjca.2020.09.001
- Chen ZM et al. COMMIT. Lancet. 2005.
- Damluji AA et al. AHA mechanical complications statement. Circulation. 2021. https://doi.org/10.1161/CIR.0000000000000985
- Meyers HP et al. OMI versus STEMI criteria. Int J Cardiol Heart Vasc. 2021. https://doi.org/10.1016/j.ijcha.2021.100767
- Mancini GBJ et al. CCS stable ischemic heart disease. Can J Cardiol. 2014. https://doi.org/10.1016/j.cjca.2014.05.013
- Baggish AL et al. Anabolic steroid cardiovascular toxicity. Circulation. 2017. https://doi.org/10.1161/CIRCULATIONAHA.116.026945
- Adler Y et al. 2015 ESC pericardial guideline. Eur Heart J. 2015.
- Brunham LR et al. CCS FH position statement. Can J Cardiol. 2018. https://doi.org/10.1016/j.cjca.2018.09.005
- Vahanian A et al. 2021 ESC/EACTS valvular guideline. Eur Heart J. 2022.
- O'Gara PT et al. 2013 ACCF/AHA STEMI guideline. Circulation. 2013.

STREAM-2, the CCS 2023 antiplatelet update and TOMAHAWK were verified and sit in the source map, but no SAMP cites them. The web search budget ran out early, so recommendation wording could not be checked against full guideline text. Metadata was checked through Crossref, and the clinical statements rest on the writer's knowledge of these documents. Please check the items below with extra care.

## For the reviewers

- 35 q2 keys a door to needle time of 30 minutes to the CCS 2019 update. Please confirm that the 2019 document states it.
- 35 q1 keys half dose tenecteplase (17.5 mg at 68 kg, age 79), cited to the 2023 ESC guideline. Please confirm the recommendation class and whether the CCS 2019 update also advises it.
- 47 q1 says the ESC lists severe aortic stenosis as a reason to withhold nitrates. That wording is from the ESC NSTE-ACS text as remembered.
- 34 q2 says the ESC pregnancy guideline does not recommend prasugrel or ticagrelor because of too few data. 34 q4 says SCAD is the most common cause of pregnancy associated MI, cited to Hayes 2018.
- 17 q4 keys IV metoprolol before primary PCI (ESC 2023 class IIa when systolic BP is above 120 mmHg and there is no heart failure). s12 item 12 teaches the opposite case, in shock.
- 19 q3 relies on the ESC 2023 advice for a routine invasive strategy at 12 to 48 hours. The key avoids "emergency PCI" so that the late presenter distractors stay wrong.
- 21 q4 applies the adult ESC relative contraindication (oral anticoagulation) to an 8-year-old. Paediatric reperfusion for Kawasaki thrombosis is not tested.
- 24 q1 uses the SI Cockcroft-Gault factor of 1.04 for women: (140 minus 84) x 50 x 1.04 / 160 = 18.2 mL/minute. The cited ESC guideline gives the renal thresholds, not the formula.
- 26 q1 keys a single sample rule-out (hs troponin T below 5 ng/L, more than 3 hours after onset). It matches the ESC algorithm, but some Canadian sites always take a second sample.
- 30 q3 keys a fluid bolus for takotsubo LVOT obstruction. The explanation calls cautious beta blockade or levosimendan specialist options.
- 36 q3 describes the CCS AF default as a DOAC plus clopidogrel with ASA for up to 30 days in most patients.
- 38 q1 and q2 cite the ESC ACS guideline for NIV and nitrate use in acute heart failure. An ESC heart failure guideline would be a closer source if preferred.
- 45 has no treatment question on purpose. High dose ASA for post-infarction pericarditis conflicts with the ticagrelor label limit on ASA above 100 mg daily.
- Scenario overlap with other expansion batches. `docs/reviews/writer-s28.md` (chest pain) also covers de Winter, SCAD, takotsubo with outflow obstruction, Kawasaki thrombosis, stent thrombosis, dissection mimicking inferior STEMI and aortic stenosis. The stems pass the trigram duplicate gate and were written independently, but the teaching points overlap across topics.
- 19 of 32 SAMPs have 3 questions. The brief asks for 4 or 5 in most SAMPs. A fourth question was added only where the content could be sourced confidently.

## Rework

After the Lens A review, eight SAMPs that repeated s28 chest pain or signed-off s05 scenarios were rebuilt whole. Each got a new stem, vitals, updates, questions, options and explanations. The ids stayed the same and the Lens A fixes elsewhere were kept.

| Id | Old scenario | New scenario and teaching | Key features |
|---|---|---|---|
| 17 | de Winter pattern at a PCI centre | Community hospital, inferior STEMI. First medical contact to device time works out to 20 + 30 + 110 + 20 = 180 minutes, so she gets fibrinolysis. BP 188/114 mmHg must be lowered first. An old normal CT coronary angiogram does not exclude occlusion. Reciprocal change in I and aVL. | 6, 7, 4, 2 |
| 21 | Kawasaki aneurysm thrombosis in a child | 81-year-old with pneumonia and sepsis. Troponin rises from 64 to 118 ng/L with no evidence of ischemia, which is acute nonischemic myocardial injury. No ACS antithrombotics. ECG findings that would favour type 1 MI. | 3, 7, 2 |
| 25 | Dissection with inferior ST elevation and a 38 mmHg arm gap | Inferior STEMI with second degree AV block type I. The block needs monitoring without pacing. IV metoprolol is contraindicated by the AV block. The block usually resolves after reperfusion. | 7, 7, 7 |
| 26 | Single-sample hs troponin rule-out, low risk discharge | HEART score 5 (1 + 0 + 2 + 2 + 0) after MI is ruled out. Pharmacologic stress imaging because she cannot exercise and had contrast anaphylaxis. New pain at rest restarts the workup. | 3, 8, 1 |
| 30 | Takotsubo in a widow with outflow obstruction | STEMI 9 years after bypass surgery. Grafts and native arteries can still occlude. Emergency angiography and PCI. Morphine delays ticagrelor absorption. | 4, 6, 7 |
| 35 | 79-year-old at a rural hospital in a snowstorm, half dose tenecteplase | Rural anterior STEMI. Air transfer reaches the laboratory in 105 minutes, so primary PCI is chosen over fibrinolysis. Tenecteplase before planned PCI worsened outcomes in ASSENT-4 PCI. Early Q waves do not preclude benefit from reperfusion. | 6, 7, 6 |
| 37 | Stent thrombosis after stopping ticagrelor | LVH causing discordant ST elevation in V1 to V3, unchanged from last year, so the laboratory is not activated. The ST to QRS amplitude ratio (Armstrong, 25% or more) separates STEMI from hypertrophy. | 2, 6, 2 |
| 47 | Nitroglycerin risk in severe aortic stenosis | NSTEMI 3 years after an intracerebral hemorrhage. Troponin rises from 96 to 188 ng/L (+96%). The P2Y12 inhibitor is clopidogrel 300 mg because ticagrelor and prasugrel are contraindicated. Prior ICH is a major high bleeding risk criterion. | 1, 7, 3 |

### After the rework

- 32 SAMPs and 107 questions. 11 SAMPs have 4 questions and 21 have 3. There are 99 single and 8 menu questions. The menu in the old 26 is gone.
- Single key positions, first to fifth: 21, 21, 22, 18, 17. The key is the single longest option in 30 of 99 (30%).
- Questions per key feature, 1 to 8: 13, 15, 16, 7, 10, 13, 25, 8.
- New sources, with metadata checked on Crossref:
  - ASSENT-4 PCI investigators. Lancet. 2006. https://doi.org/10.1016/S0140-6736(06)68147-6
  - Armstrong EJ et al. Am J Cardiol. 2012. https://doi.org/10.1016/j.amjcard.2012.05.032
  - Urban P et al. ARC-HBR consensus. Circulation. 2019. https://doi.org/10.1161/CIRCULATIONAHA.119.040167
- De Winter, McCrindle, Isselbacher, Ghadri, Frontera and the 2025 ESC/EACTS valve guideline are no longer cited, so they were removed from the source map. Lens A's corrections to these SAMPs lapse with the rewrite.
- `npx tsc --noEmit -p . | grep samps/s42` prints nothing. `SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 659 passed, 0 failed.

### Points for the second review

- 25 rests on the ESC 2023 AV block text (type I block in inferior MI is nodal and transient) and on the standard contraindication of beta blockers in second or third degree AV block. I could not reread the full text in this session.
- 35 q3 follows long-standing ESC wording that Q waves should not change the reperfusion strategy. Please confirm that the 2023 text keeps it.
- 30 q3 cites the ESC 2023 statement that opioids delay oral P2Y12 absorption. The statement that serotonin syndrome is not linked to morphine alone is standard pharmacology but is not in the cited source.
- 47 q2 relies on ticagrelor being contraindicated after any intracranial hemorrhage (product monograph and ESC tables). The key is 300 mg, and a 600 mg load would also be acceptable, but 600 mg is not an option.
- 17 q2 uses the ESC relative contraindication threshold of SBP above 180 or DBP above 110 mmHg.
- 21 q1 teaches that sepsis with a rising troponin and no evidence of ischemia is acute myocardial injury, not type 2 MI. That follows the fourth universal definition.
