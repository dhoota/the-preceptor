# Q500 writer report, batch s60 (pulmonary edema), revision round 2

Writer: Preceptor. File: `src/samps/s60/pulmonary-edema.ts`. Ids unchanged (pulmonary-edema-39 to pulmonary-edema-43). All items `reviewed: false`, `version: 1`, author "Preceptor". This round works from the verdict in `docs/reviews/q500-verify-s60.md`. `docs/reviews/q500-qa-s60.md` was read for context only.

pulmonary-edema-39 passed and is unchanged.

## Required fixes and how each was done

### pulmonary-edema-40

| Fix | What was done |
|---|---|
| Stem retold headache-43 (8-year-old, puffy eyes, cola urine, untreated sore throat 2 weeks earlier) | New patient: a 6-year-old boy whose first complaint is 2 days of cough, fast breathing and orthopnea. The trigger is now a skin infection (crusted leg sores 3 weeks ago, healed), not a sore throat. Facial puffiness and dark brown urine come second. All later numbers are new (weight 21 kg, creatinine 104 then 236 umol/L, urine 280 mL). |
| q2 repeated headache-43 q2 (confirm the cause, throat swab distractor) | Replaced with a KF2 decision not in the bank: which antibody best shows a recent streptococcal infection after a skin infection. Key "Anti-DNase B titre", with antistreptolysin O as the tempting distractor. Source: Abugrain 2024 (anti-DNase B and ASOT are the antibodies most often raised after skin and upper respiratory infection respectively, anti-DNase B raised in 94 of 94 children tested, ASOT in 85%). C3 is no longer an option anywhere. |
| q3 explanation echoed "low C3, found in about 90%" | Sentence removed. The q3 update now gives only "C3 is low" and the urine output. It no longer names furosemide or urinalysis (mock-mode cues noted by the verifier). |
| q4 near copy of pulmonary-edema-25 q4 (tiring on a nonrebreather, alert, key NIV, heliox and intubation distractors) | Replaced with a KF4 recognition question, the gas-finding angle the verifier listed as open: which finding shows his breathing is failing. Key "PCO2 of 59 mmHg on capillary gas". Distractors are his other current numbers, including a reassuring saturation of 95% on the mask. Source: Panetti 2024 (hypercapnic failure is PaCO2 over 45 mmHg, and CO2 needs a gas or capnography as well as oximetry). KF4 kept, so the topic still has KF4 covered. |
| q5 | Not failed. Pronouns and numbers updated. The update says "bilevel ventilation", which names no earlier key. It still says "a second diuretic dose", because the question cannot work without it (B6, flagged below). |

### pulmonary-edema-41

| Fix | What was done |
|---|---|
| Stem and q1 retold pulmonary-edema-13 (same five-drug HFrEF list, a walk-in clinic drug 10 days earlier, drug precipitant) | New story with no new prescription and no drug precipitant: a 79-year-old man with heart failure diagnosed a year ago, on furosemide and apixaban only, with bilateral carpal tunnel surgery, lumbar spinal stenosis, no hypertension and low limb-lead QRS voltage. q1 is now a KF2 underlying-cause decision: thick walls (17 mm) with low voltage and these red flags point to transthyretin cardiac amyloidosis. The explanation says light-chain disease must still be excluded. Source: ESC Working Group position statement on cardiac amyloidosis 2021 (red flags: bilateral carpal tunnel syndrome, lumbar spinal stenosis, low QRS voltage for the degree of LV thickness, wall thickness 12 mm or more). |
| Ottawa scale q2 kept, threshold wording | Now reads "a heart rate of 110/minute or more on arrival scores 2". Recomputed with the new values: TIA 1, arrival pulse 118 = 2, arrival SaO2 87% = 1, urea 13.6 mmol/L = 1. Never intubated, walk pulse 104, no new ischemia, CO2 29, troponin below MI level and NT-proBNP 4 300 all score 0. Total 5. "4" misses the TIA, "6" counts the NT-proBNP. |
| q3 | Not failed. Pronouns and "prior transient ischemic attack" updated. Key unchanged. |

### pulmonary-edema-42

| Fix | What was done |
|---|---|
| Stem mirrored sob-05 (severe COPD on 2 L home oxygen, pH 7.28, PaCO2 72) | She now uses oxygen at 1 L/minute only when walking. Gas changed to pH 7.30 and PCO2 64 mmHg. Heart failure (EF 35%, bisoprolol, sacubitril-valsartan, furosemide) and B-lines are central. Age changed to 70. |
| q2 had to test the overlap itself | Kept as the CPAP against bilevel decision, which the verifier allowed once the stem no longer mirrors sob-05. The explanation now teaches the overlap directly: bilevel treats the edema and the hypercapnia at once, CPAP alone treats only the edema. |
| q3 oxygen target 88 to 92% repeated sob-05 and four asthma-copd items, and its options overlapped (B11) | Replaced. The oxygen target question is gone, so B11 no longer applies. New q3 (KF3, overlap decision): whether to give her bisoprolol while she still wheezes. Key "Continue her usual dose". Distractors: hold for the wheeze, stop permanently, switch to carvedilol, switch to diltiazem. Sources: CAEP 2025 ("GDMT medications should be continued", "in patients on beta-blockers, continuation of therapy is safe", calcium channel blockers avoided when LVEF is low) and Cochrane 2005 (cardioselective beta blockers in COPD, including severe disease, cause no change in FEV1 or respiratory symptoms and do not blunt the beta-2 agonist response). |
| Not required: "Usual pace" wording in q4 | Key is now "Walk at own pace on usual oxygen", which matches HEARTRISK6 wording. Its update no longer names bilevel ventilation (q2 key). |

### pulmonary-edema-43

| Fix | What was done |
|---|---|
| Stem retold pulmonary-edema-09, -25 and -29 (weeks of stair dyspnea, night cough, walk-in inhaler) | Rebuilt around the cancer therapy angle with a different presentation: a survivor of doxorubicin and trastuzumab (4 years) is sent by her oncologist to have bilateral pleural effusions drained for presumed recurrence. No inhaler, no walk-in clinic, no night cough. |
| q1 (NT-proBNP as next test) | Replaced with a KF5 decision: the most likely cause of her bilateral effusions is heart failure, not recurrence, low albumin, infection or PE. Source: ASCO 2017 survivors guideline (high suspicion and a low threshold for cardiac evaluation after cardiotoxic therapy). |
| q2 (NT-proBNP interpretation by age) | Removed. No NT-proBNP item remains in 43. |
| q3 (late chemotherapy cardiotoxicity) | Kept as the verifier advised. It is now q2, with the ultrasound and ECG data in its update. |
| q4 (discharge menu repeating pulmonary-edema-07, -13 and -29, and a compound distractor) | Replaced with two pleural decisions not in the bank, both with single-action options. q3 (KF3): do not drain on request, give an IV diuretic and reassess. q4 (menu, select 2, KF2): which later findings would justify sampling the fluid (no shrinkage after diuresis, fever with pleuritic chest pain). Source: BTS pleural disease guideline 2010 (bilateral effusions in a setting strongly suggestive of a transudate are not aspirated unless there are atypical features or they fail to respond to treatment). The batch keeps its one menu. |

## Uniqueness check

Before writing, I read the full catalogues for pulmonary-edema, sob, headache, asthma-copd and ischemic-heart-disease. I also searched all 35 catalogue files for every new key decision and teaching point. Terms searched: anti-DNase, antistreptolysin, impetigo, glomerulonephritis, amyloid, carpal tunnel, low voltage, bisoprolol, beta blocker, cardioselective, carvedilol, transudate, pleural effusion, sampling, capillary gas, PCO2, impending, tiring, IPAP, trastuzumab, survivor, oncolog, home oxygen.

- Anti-DNase B, amyloidosis, cardioselective beta blockers in COPD, transudate or pleural sampling rules: no hits.
- Bilevel IPAP titration was an early idea for 42 q3. It was dropped because asthma-copd-26 keys "Increase the IPAP setting".
- A home oxygen fire-safety question was dropped because burns and asthma-copd key it.
- An influenza precipitant was dropped because the sob, infectious-diseases and ischemic-heart-disease catalogues key it.
- A CRT or device precipitant was dropped because arrhythmia-25 (ICD, EF 30%, AF on apixaban) is too close.
- Pleural items in the bank are sob-35 (therapeutic tap of a malignant effusion, exudate interpretation) and sob-36 (hepatic hydrothorax). These are different decisions from "do not tap a likely heart failure effusion".
- Patient numbers in the new items are not reused from other items.

## Key positions and coverage

- 19 single questions. Key positions from first to fifth: 4, 4, 4, 4, 3. No position is above 25%.
- 1 menu (43 q4).
- Key features: KF1 3 (39 q3, 40 q1, 42 q2), KF2 5 (39 q4, 40 q2, 41 q1, 43 q2, 43 q4), KF3 4 (40 q3, 40 q5, 42 q3, 43 q3), KF4 1 (40 q4), KF5 4 (39 q1, 39 q2, 42 q1, 43 q1), KF6 3 (41 q2, 41 q3, 42 q4). Every key feature is covered.

## Sources (new this round, each opened)

- Abugrain K et al. Pediatr Nephrol. 2024. Full text read through Europe PMC (PMC11026274). https://pmc.ncbi.nlm.nih.gov/articles/PMC11026274/
- Panetti B et al. Acute respiratory failure in children. Children (Basel). 2024. Full text read (PMC11506303). https://pmc.ncbi.nlm.nih.gov/articles/PMC11506303/
- Garcia-Pavia P et al. ESC Working Group position statement on cardiac amyloidosis. Eur Heart J. 2021. PMC page read (Table 5 red flags, Table 2 wall thickness of 12 mm or more). https://pmc.ncbi.nlm.nih.gov/articles/PMC8060056/
- Salpeter S, Ormiston T, Salpeter E. Cochrane review of cardioselective beta-blockers in COPD. 2005. Abstract read through Europe PMC (PMID 16235327). The DOI resolves to the Wiley record. https://doi.org/10.1002/14651858.CD003566.pub2
- Armenian SH et al. ASCO guideline on cardiac dysfunction in survivors of adult cancers. J Clin Oncol. 2017. Abstract read through Europe PMC (PMID 27918725). https://doi.org/10.1200/JCO.2016.70.5400
- Hooper C, Lee YCG, Maskell N. BTS pleural disease guideline 2010. Thorax. 2010. The Europe PMC record (PMID 20696692) matches the DOI. The publisher page returned 403. The bilateral transudate recommendation was confirmed from search results quoting the guideline. https://doi.org/10.1136/thx.2010.136978
- CAEP Acute Heart Failure Best Practices Checklist 2025. Full text re-read through Europe PMC (PMC12484285) for beta blocker continuation and the clinical features of congestion. https://doi.org/10.1007/s43678-025-00961-y
- Carried over and unchanged: Price 2019, Ong 2022, Stiell 2017 (Ottawa), Rochwerg 2017, HEARTRISK6 2024, IC-OS 2022. O'Driscoll 2017 (BTS oxygen) was removed with the oxygen target question.

## Checks

`npx tsc --noEmit -p . | grep samps/s60` gave no output. `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128. One earlier run showed a duplicate-id failure for abuse-domestic-40 to -43 in `src/samps/s67`. That is another batch being edited at the same time. It did not recur on the rerun.

## Uncertain, for the reviewer

1. **41 has 3 questions.** The count is unchanged from the reviewed version and within the test range, but the Q500 brief asks for 4 or 5. No unique ED-level fourth decision with a verifiable source was found, so none was added.
2. **BTS 2010 is the cited pleural source (43 q3, q4).** The BTS 2023 pleural guideline replaced it, and I could not open the 2023 text to confirm that it keeps the bilateral transudate recommendation. Treating "fever with pleuritic chest pain" as an atypical feature is my reading, not quoted wording.
3. **40 q4 overlaps in reasoning with loc and tox items.** Those items ("Venous blood gas for PCO2" after naloxone) share the reasoning that oximetry does not show ventilation. The decision, population and disease differ (finding interpretation in a child with nephritic pulmonary edema).
4. **Antistreptolysin O is the closest distractor in 40 q2.** It is raised in most children with this illness (85% in the cited series). The key rests on the skin source.
5. **The KF tag for 42 q3 is KF3.** Continuing guideline therapy to prevent worsening is my choice of tag. asthma-copd-24 q3 keys starting low-dose bisoprolol after NSTEMI in asthma. That is a different population and phase of care, but it shares the safety point about cardioselective beta blockers.
6. **Mock-mode cues left in place (B6, the later question needs the fact).**
   - 43 q2 update shows heart failure on ultrasound, which supports the q1 key.
   - 43 q4 ("no shrinkage after diuresis") implies the q3 plan.
   - 40 q5 update mentions a second diuretic dose.

## Round 3

This round answers `docs/reviews/q500-verify2-s60.md`. pulmonary-edema-39 is unchanged.

| Fix | What was done |
|---|---|
| 40 q4 repeated signed decisions (asthma-copd-15 q1, pulmonary-edema-08 q1, tox-17 q3) | Replaced with a KF4 vasoactive escalation, one of the angles the reviewer found open. The child's edema is not settling, BP has risen to 162/108 mmHg and K is 5.4 mmol/L. Which drug lowers his BP now? Key "nifedipine PO" (short-acting). Distractors: captopril PO, enalaprilat IV, eplerenone PO, losartan PO. Source: Ong 2022, full text re-read. Short-acting nifedipine is safe in children with severe hypertension who need a rapid reduction. A diuretic plus a calcium channel blocker is used for APSGN hypertension. ACE inhibitors and ARBs are usually avoided in the acute phase because of reduced filtration and hyperkalemia. Beta blockers were left out as options because Ong lists them as acceptable. Panetti 2024 is no longer cited and was removed. |
| 40 q5 update gave away q4 | Now reads "He is started on bilevel ventilation and his breathing settles, but ...". It names no q4 finding or drug. |
| 41 had 3 questions | Added a new q2 (menu, select 2, KF2): which tests confirm the underlying cause. Keys "Bone scintigraphy" and "Serum free light chain assay". Distractors: coronary angiography, Holter monitoring, serum ferritin, thyroid function tests, transthyretin gene testing. Verified in ESC 2021 (PMC8060056, reopened): scintigraphy is "coupled to assessment for monoclonal proteins", and "clonal dyscrasia is excluded by all the following tests" (serum free light chain assay, serum and urine immunofixation). Grade 2 or 3 uptake without a monoclonal protein allows a non-invasive ATTR diagnosis. Genetic TTR testing follows a confirmed ATTR diagnosis. The Ottawa question is now q3 and the disposition question q4. The new question is a menu, so the single-key position counts are unchanged. |
| 41 disposition explanation said "he feels better" | Deleted. It now reads "even though he walked without tachycardia". |
| 42 q4 key was the only verb-led option and the longest | Key is now "Own pace on usual oxygen", parallel to the distractors and not the longest (24 characters against 31). It moves to position 3. To keep balance, 40 q4's key "nifedipine PO" sits in position 5. Single keys by position, first to fifth: 4, 4, 4, 4, 3 of 19. |
| 43 q3 and q4 cited BTS 2010 | Both are re-cited to Beaudoin S, Gonzalez AV. Evaluation of the patient with pleural effusion. CMAJ. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC5849448/, opened and read. BTS 2010 was removed from the file. The q3 explanation now follows CMAJ: thoracentesis "may be deferred until the outcome of a trial of diuretic therapy is known". The q4 explanation follows CMAJ: more investigation "if the effusion fails to improve", and fever or purulent sputum "should prompt an urgent evaluation". "Fever with pleuritic chest pain" is gone. |
| 43 q4 lead-in "later" and options she already had | Prompt is now "Which of the following findings over the next 3 days would most justify sampling her pleural fluid?". Every option is a plausible future finding, and only the keys justify a tap. Keys: "Effusions unchanged on repeat imaging", "Fever with purulent sputum". Distractors: ankle edema less but still present, creatinine up from 74 to 92 umol/L, effusions smaller but still present, pulse down to 78/minute, weight down by 2 kg. "Creatinine 74 umol/L" was added to the stem so the creatinine option traces to the case. "No shrinkage after diuresis" is gone, so diuresis is no longer named. |

Uniqueness: I searched all the catalogues again.
- No bank item mentions scintigraphy (only environmental's frostbite viability question), free light chains or immunofixation.
- Nifedipine is keyed only in adult pregnancy (pre-eclampsia), in HAPE (pulmonary-edema-27) and in adult hypertensive edema lists. None of these is a child with nephritic hypertension.
- The creatinine, potassium and BP numbers are new.

Checks: `npx tsc --noEmit -p . | grep samps/s60` gave no output. `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 132 of 132.

For the reviewer:
- No source gives a pediatric nifedipine dose, so 40 q4 options give no doses. Every option has the same specificity.
- The line "eplerenone does not lower blood pressure quickly" is general pharmacology, not a statement from Ong.
- Key features after this round: KF1 3, KF2 6, KF3 4, KF4 1, KF5 4, KF6 3. The menus are 41 q2 and 43 q4.

## Round 4

This round answers `docs/reviews/q500-verify3-s60.md`. pulmonary-edema-39, -42 and -43 are untouched.

| Fix | What was done |
|---|---|
| 40 q4: BP 162/108 mmHg matched headache-43 q3 | Changed to 156/106 mmHg in both the update and the explanation. A grep of `src/samps` and `src/cases` found no other item with this value. It is still well above the stage 2 threshold for a 6-year-old, so it remains severe hypertension. |
| 41 q2: "Transthyretin gene testing" named a q1 option | Replaced with "Serum ACE level". The explanation now says it is a nonspecific marker of sarcoidosis, another infiltrative disease, and can neither confirm nor exclude amyloidosis. In alphabetical order the keys are now indices 0 (Bone scintigraphy) and 5 (Serum free light chain assay), and `correct` is updated to [0, 5]. Longest to shortest option ratio is 2.0. |

Checks: `npx tsc --noEmit -p . | grep samps/s60` gave no output. `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed.
