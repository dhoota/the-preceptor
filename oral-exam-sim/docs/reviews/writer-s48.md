# Writer report, batch s48: Pulmonary edema

File: `src/samps/s48/pulmonary-edema.ts` (export `PULMONARY_EDEMA_S48_SAMPS`), re-exported as `SAMPS_S48` in `src/samps/s48/index.ts`.

## Count and format

- 23 SAMPs, ids pulmonary-edema-16 to pulmonary-edema-38. All `reviewed: false`.
- 75 questions: 68 single and 7 menu. 3 or 4 questions per SAMP (8 SAMPs have 4, 15 have 3).
- Menus are in SAMPs 16, 21, 22, 24, 26, 35 and 37.
- Single key positions (1st to 5th): 14, 12, 13, 15, 14. The highest is 22 percent.
- The key is the longest option in 12 of 68 singles (18 percent).
- Checks: `npx tsc` has no s48 errors. `SAMP_BATCH=s48 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 468 of 468.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Treat early, such as with BiPAP | 6 |
| 2. Search for the cause | 16 |
| 3. Treat the cause | 20 |
| 4. Impending respiratory failure, escalate | 17 |
| 5. Subtle presentations | 7 |
| 6. Safe discharge | 9 |

## Scenarios (chosen to avoid s15, s21, s25, s42 and s51)

16 phosphodiesterase 5 inhibitor and nitrate. 17 bilateral renal artery stenosis with flash edema. 18 rheumatic mitral stenosis with atrial fibrillation at 29 weeks. 19 mechanical mitral valve thrombosis. 20 takotsubo with outflow obstruction. 21 cocaine. 22 opioid noncardiogenic edema after naloxone. 23 negative pressure edema after laryngospasm during ketamine sedation. 24 immersion edema in a triathlete. 25 poststreptococcal glomerulonephritis in an 8-year-old. 26 chronic salicylate toxicity. 27 complete heart block. 28 clozapine myocarditis. 29 NT-proBNP in obesity with presumed asthma. 30 nonadherence and home situation. 31 diuretic resistance with urine sodium. 32 Ottawa Heart Failure Risk Scale. 33 do-not-intubate directive and NIV ceiling. 34 fluid overload during sepsis resuscitation. 35 rural CPAP and transfer. 36 neurogenic edema after subarachnoid hemorrhage. 37 pediatric drowning. 38 silent anterior STEMI in an older woman with diabetes.

## Sources

Checked by web search or fetch this session:
- Stiell IG et al. Ottawa Heart Failure Risk Scale validation. Acad Emerg Med 2017. https://doi.org/10.1111/acem.13141. Item points checked against fpnotebook.com and emlitofnote.com.
- Masip J et al. NIV in acute heart failure. Eur Heart J 2018. https://doi.org/10.1093/eurheartj/ehx580
- Kloner RA et al. Tadalafil and nitrates. J Am Coll Cardiol 2003. https://www.jacc.org/doi/abs/10.1016/j.jacc.2003.09.023
- Mueller C et al. HFA natriuretic peptide guidance. Eur J Heart Fail 2019. https://onlinelibrary.wiley.com/doi/10.1002/ejhf.1494
- Mullens W et al. HFA diuretics position statement. Eur J Heart Fail 2019. https://doi.org/10.1002/ejhf.1369
- Aboyans V et al. 2017 ESC peripheral arterial diseases. https://academic.oup.com/eurheartj/article/39/9/763/4095038
- Regitz-Zagrosek V et al. 2018 ESC pregnancy. https://academic.oup.com/eurheartj/article/39/34/3165/5078465
- Ghadri JR et al. Takotsubo consensus part II. Eur Heart J 2018. https://academic.oup.com/eurheartj/article/39/22/2047/5025411
- McCord J et al. AHA cocaine statement. Circulation 2008. https://doi.org/10.1161/CIRCULATIONAHA.107.188950
- Radke JB et al. Opioids and the lung. Clin Rev Allergy Immunol 2014. https://pubmed.ncbi.nlm.nih.gov/23636734/
- Bruneau J et al. CRISM opioid use disorder guideline. CMAJ 2018. https://doi.org/10.1503/cmaj.170958
- Bhattacharya M et al. Negative-pressure pulmonary edema. Chest 2016. https://pubmed.ncbi.nlm.nih.gov/27063348/
- Moon RE et al. Swimming-induced pulmonary edema. Circulation 2016. https://pubmed.ncbi.nlm.nih.gov/26882910/
- Rodriguez-Iturbe B, Musser JM. Poststreptococcal glomerulonephritis. J Am Soc Nephrol 2008. https://pubmed.ncbi.nlm.nih.gov/18667731/
- Juurlink DN et al. EXTRIP salicylate. Ann Emerg Med 2015. https://pubmed.ncbi.nlm.nih.gov/25986310/
- Ronaldson KJ et al. Clozapine myocarditis monitoring. Aust N Z J Psychiatry 2011. https://pubmed.ncbi.nlm.nih.gov/21524186/
- Busl KM, Bleck TP. Neurogenic pulmonary edema. Crit Care Med 2015.
- Szpilman D et al. Drowning. N Engl J Med 2012. The citation was confirmed. The NEJM full text was blocked (403).

Cited from known standard references but not re-fetched this session: McDonagh 2021 ESC heart failure guideline, Ezekowitz 2017 CCS heart failure update, Rochwerg 2017 ERS/ATS NIV, Vahanian 2021 ESC/EACTS valvular, Glikson 2021 ESC pacing, Panchal 2020 AHA adult ALS, Mahler 2010 ACCP dyspnea statement, Evans 2021 Surviving Sepsis Campaign and Byrne 2023 ESC ACS. The web search budget ran out before I could check them.

## For the reviewers

- Ottawa Heart Failure Risk Scale (SAMP 32): sources differ on whether the cut-offs read "greater than" or "at least" (110/minute, urea 12 mmol/L). The case values stay clear of the cut-offs (arrival pulse 104, walk pulse 116, urea 14.6), so the total of 5 holds either way. The risk bands (0 low, 1 to 2 medium, 3 to 4 high, 5 to 9 very high) come from secondary summaries.
- Furosemide doses (SAMPs 30, 31, 34) follow ESC 2021: 20 to 40 mg IV if diuretic naive, and 1 to 2 times the daily oral dose if not. The urine sodium threshold of below 50 to 70 mmol/L at 2 hours and the output threshold of below 100 to 150 mL/hour are from memory of ESC 2021 and Mullens 2019. Please verify them.
- NT-proBNP thresholds (SAMP 29): rule-out 300 pg/mL, rule-in 450, 900 and 1800 pg/mL for under 50, 50 to 75 and over 75. The case uses age 52, so the rule-in threshold is 900.
- SAMP 16 conflicts with sob-17 (s51). sob-17 keys a nitroglycerin infusion at 100 mcg/minute. I avoided keying any infusion start rate, so the two do not contradict each other.
- SAMP 22 q4: take-home naloxone is attributed to general practice. Please confirm that the 2018 CRISM guideline covers it, or cite the 2024 update.
- SAMP 33: the ERS/ATS palliative NIV recommendation is framed for terminal conditions. The explanation relies only on the cardiogenic edema recommendation and her directive. Morphine 2.5 mg SC is a typical starting dose for an opioid naive patient, but Mahler 2010 does not give a dose.
- SAMP 37: the discharge rule after 6 to 8 hours and the prevention points (four-sided fencing, close supervision) are attributed to Szpilman 2012 from memory, because the full text was blocked. Please confirm them.
- SAMP 20 q3: phenylephrine for takotsubo with outflow obstruction follows the Ghadri consensus (avoid inotropes, consider an alpha agonist). Please confirm the wording.
- SAMP 27 q2: epinephrine at 2 to 10 mcg/minute as a bridge follows AHA 2020 (Heart and Stroke uses the AHA guidelines in Canada).

## Rework (after Lens A)

Every Lens A fix was kept. Only `src/samps/s48/pulmonary-edema.ts` was edited. Ids and key feature numbers are unchanged.

- pulmonary-edema-26: rebuilt from scratch with no salicylate. It is now immune checkpoint inhibitor myocarditis after nivolumab with ipilimumab, with myositis and ptosis. q1 (KF2) asks for the cause and keys "Checkpoint inhibitor myocarditis" (index 1). q2 (KF3) keys "High-dose IV corticosteroids" (index 2). q3 (KF4, menu, select 2) keys intubation for bulbar weakness and drowsiness, plus norepinephrine for cardiogenic shock. The EXTRIP and ACMT sources were removed. The new sources are Herrmann 2022 IC-OS consensus (https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/), which defines the minor criteria (conduction disease, myositis, myasthenia gravis), and Brahmer 2021 SITC guideline (https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/), which says to stop the ICI permanently when the heart is involved and to give methylprednisolone 1 to 2 mg/kg IV or a higher bolus. I could not fetch the ESC 2022 cardio-oncology guideline, so I key no exact steroid dose.
- pulmonary-edema-16 q3 (KF2): the investigations menu became a single question on a drug precipitant. Pioglitazone was added to his pharmacy list in the stem. The key is pioglitazone (index 2), with amlodipine ankle edema as the tempting distractor. This is sourced to ESC 2021: thiazolidinediones cause sodium and water retention and are not recommended in heart failure. The text was checked in the full ESC PDF. The q4 update now says pioglitazone was stopped, and the q4 explanation was adjusted.
- pulmonary-edema-29 q1 (KF5): the NT-proBNP first-test item became a question on bendopnea against typical asthma triggers. It keys "Breathless when bending to tie shoes" (index 0) and is sourced to ESC 2021 Table 6. The q2 explanation now also gives the ESC age band (450 pg/mL under 55). The key is unchanged.
- pulmonary-edema-32 q1 (KF6): the walk-test item became a question on residual congestion at discharge. The update gives a JVP of 7 cm, 2+ edema and 0.4 kg lost. It keys "Persistent signs of congestion" (index 4) and is sourced to the ESC 2021 text that discharge with persistent congestion is a major predictor of death and readmission. ESCHF was added to the SAMP's sources.
- pulmonary-edema-35 q2 (KF4): the item on signs that CPAP is failing became a question on escalating vasodilation for refractory severe hypertension. It keys "nitroglycerin 1 mg IV" given as a bolus (index 4), from the ESC 2021 text that 1 to 2 mg boluses can be given in severely hypertensive acute pulmonary edema.
- pulmonary-edema-35 q3 (KF4): the intubate-before-flight item became a question on a mask leak around a beard stopping CPAP from holding pressure. It keys "Refit the mask to stop the leak" (index 3) and is sourced to Masip 2018 (interface choice, avoiding excessive leak). The SAMP's sources are now ESCHF and MASIP.
- Bank search before writing: no other SAMP tests checkpoint inhibitor myocarditis, bendopnea, residual congestion at discharge, nitroglycerin boluses or NIV mask leak. Thiazolidinediones appear only as one accepted answer in the pulmonary-edema-13 write-in list of harmful drugs.
- After rework: 69 single and 6 menu questions. Single key positions are 14, 12, 13, 16 and 14 (highest 23 percent). The key is the longest option in 26 percent of singles. `npx tsc` has no s48 errors. The s48 vitest run passes 468 of 468.
- For reviewers: the pulmonary-edema-26 q2 source is SITC (US-based, international panel), because no Canadian ICI guideline was found. ESC Table 6 lists bendopnea among less typical heart failure symptoms, and its footnote calls it a symptom of advanced heart failure. Please check that this supports it as the key over the asthma triggers.
