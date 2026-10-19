# Q500 QA report: batch13

Independent clinical accuracy review of the four oral cases in `src/cases/batch13/`. I did not write them. All four stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal names appear in any case.

Checks at the end: `npx tsc --noEmit -p . | grep cases/batch13` reports nothing. `CASE_BATCH=batch13 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes 45 of 45.

## Verdicts

| Case | Verdict | Corrections |
|---|---|---|
| late-dinner-chest-pain | Pass | 8 |
| postpartum-headache-sixth-day (was postpartum-headache-return-visit) | Pass after rework | 16 |
| boarder-hard-to-wake | Pass | 7 |
| ladder-fall-ankle-sedation | Pass | 13 |

## postpartum-headache-sixth-day

### Required fix: title

The title "Back with the same headache" duplicated `src/cases/batch15/back-with-the-same-headache.ts`. New title: **"Six days after the birth"**. It is unique across all cases and names no diagnosis. I rejected "A headache that will not settle" because the bank already has "Belly pain that will not settle" and "A headache that keeps building".

### Near-duplicate of the scenario, not only the title

The batch15 case is also a woman in her late twenties or thirties, seen in the same community ED two days earlier for a headache, sent home, returning worse, with a disclosure question about the missed first visit. It even had the same weight (74 kg, 163 lb) and pulse (92). The bank also has two other return visit cases (batch11 `glass-finger-return-visit`, batch14 `return-visit-belly-pain-girl`). Within batch13, `boarder-hard-to-wake` already carries a disclosure of harm. Rule 3 forbids reusing a twist or repeating an angle in a batch. I reworked the frame:

1. Stem: no longer a return visit. She has had a headache for 3 days and her partner drove her in with the baby (43 words).
2. Finding `first-visit` replaced by `midwife`: a day 4 home visit with one BP of 138/88, headache put down to poor sleep, recheck planned for day 7. The history teaching point (a single borderline reading in the day 3 to 6 peak, rising from her own baseline) is kept without a missed ED visit.
3. Card: weight 78 kg (172 lb) and pulse 96, so it no longer mirrors batch15. Repeat BP pulse 94. Nothing in the case is weight based.
4. Ibuprofen 400 mg every 6 hours for 2 days (was 600 mg from the ED visit).
5. Triage nurse line, the unsafe migraine feedback ("repeats the trap of the first visit") and the history model answer rewritten to match.
6. The disclosure question `q-disclose` and its three consequence nodes were replaced by `q-feeding`, a new branching question. Her partner asks whether the baby must go on formula and whether she can come home tonight. Strong: explain, admit for 24 hours of magnesium, keep breastfeeding and keep the baby with her, social work for help at home. Partial: pump and discard until magnesium stops. Unsafe: discharge tonight on nifedipine XL once under 160/110. New consequence nodes `s-pump-dump` and `s-home`.
7. `q-system` (system fixes after a missed visit) replaced by `q-future`: recurrence risk (about 1 in 6), low dose ASA at bedtime started before 16 weeks with SOGC favouring 162 mg, and lifelong cardiovascular risk with yearly follow up.
8. Rubric items pe-pr1, pe-pr2, pe-pr5 and pe-pr6 rewritten for the new questions with the same points and rows. The CPSI and CPSO disclosure sources were removed because nothing cites them now. Points stay H 8, P 8, M 9, Pr 8 of 33. Longest path 585 s. Branching questions 4.
9. Id, file and export renamed to `postpartum-headache-sixth-day` (`postpartumHeadacheSixthDay`) because "return-visit" no longer describes the case. `src/cases/batch13/index.ts` updated. The old id appears only in report files.

### Clinical corrections

10. NSAIDs. Current Canadian evidence (AOM 2023, which reviews the 2021 meta analysis) says NSAIDs are not contraindicated after birth in hypertensive disorders. The case had implied a blanket stop. The model answer and pe-m4 now say ibuprofen is stopped here because of acute kidney injury (creatinine 96 µmol/L, above 90), hard to control BP and falling platelets, and that NSAIDs are otherwise acceptable. pe-m4 now cites the AOM guideline. The first question now says "no more NSAID until the kidneys and platelets are known".
11. BP target after crisis control. The case used the ACOG figure alone ("140 to 150 over 90 to 100"). It now says: first under 160/110 without a sudden fall, then lower gradually with oral agents, SOGC targets a diastolic of about 85 in pregnancy, and ACOG accepts 140 to 150 over 90 to 100 as a first goal. SOGC 426 gives no separate postpartum number that I could verify, so the wording shows both.
12. Hydralazine after labetalol failure: "repeated after 20 minutes" changed to "with a BP recheck in 20 minutes". ACOG 767 escalates to emergency consultation if the BP is still severe 20 minutes after hydralazine 10 mg, rather than repeating it.
13. Magnesium load given "over 15 to 20 minutes" to match SOGC wording.
14. q-labs: creatinine rise "by about two thirds, to above 90 µmol/L" (58 to 96 is a 66 percent rise, KDIGO stage 1).
15. pe-pr3 teaching now carries the 80 mL/h fluid limit (SOGC, as quoted in AOM 2023).
16. Imaging model answer notes breastfeeding can continue after iodinated contrast.

Checked and correct: severe range 160/110 confirmed 15 minutes apart and treated within 30 to 60 minutes. Labetalol 20, 40, 80 mg every 10 minutes and the 300 mg cumulative ceiling. Hydralazine 5 to 10 mg IV. Immediate release nifedipine 10 mg, never XL for acute control. Magnesium 4 g then 1 g/h for 24 hours. Magnesium level 2.4 mmol/L is therapeutic. Urine output 35 mL/h is above the 30 mL/h alarm. UPCR 62 mg/mmol is above 30. HELLP: LDH 690 (600 or more), AST 148 (70 or more), platelets 96 (under 100), schistocytes. Breastfeeding compatible: labetalol, nifedipine, enalapril (AOM 2023 list, which also names methyldopa and captopril). BP peaks on day 3 to 6 (SOGC preALARM teaching guide).

## late-dinner-chest-pain

1. Timeline on the CT pulmonary angiogram path: `s-ctpa` was stamped 01:55 and then fed into `s-ct` at 01:15 and `s-turn` at 01:40. `s-ctpa` is now 01:00 and the radiologist calls while the second troponin is pending. `s-ct` phase is now "CT result".
2. `s-ctpa` asks for a repeat with water soluble oral contrast (was "oral contrast").
3. End node: the tear was at 22:50 and repair at 06:00, which is about seven hours, not eight.
4. cp-h4 teaching no longer attributes an antacid statement to the AHA guideline that I could not verify in its text. It now says response to a treatment does not establish the cause, with nitroglycerin as the guideline example.
5. cp-pr1 teaching: "Delay is the strongest predictor of death" overclaimed. Now "a major, avoidable driver of death". The under 10 percent within 24 hours versus about 30 percent after figure is verbatim in WSES 2019.
6. and 7. cp-pr4 and cp-pr5 (reasoning out loud, anchoring at debrief) were cited to the AHA chest pain guideline, which does not cover cognitive error. Both now cite Croskerry 2003 (new source).
8. Croskerry P. Academic Medicine 2003 added as a fourth source.

Checked and correct: ECG within 10 minutes, ASA 160 mg chewed only if dissection and perforation are unlikely, 30 mL/kg is 2.9 L at 96 kg, norepinephrine for MAP under 65 with peripheral start acceptable (SSC 2021), endoscopic rather than blind nasogastric tube (WSES grade 2A), broad spectrum aerobic and anaerobic cover, PPI, CT with oral contrast as the test of choice, left distal tear as the usual site, pleural amylase and low pH. Chest drain before positive pressure is sound practice. Choice labels are defensible.

## boarder-hard-to-wake

1. History model answer said kidney disease slows clearance of gliclazide. Gliclazide is cleared by the liver to inactive metabolites. Now: kidney disease lets hydromorphone metabolites build up and raises the risk of hypoglycemia on a sulfonylurea.
2. PCC dose: Thrombosis Canada (DOACs: Management of Bleeding, 5 February 2024) states the optimal dose is uncertain and lists a fixed 2000 units or 25 to 50 units/kg to a maximum single dose of 3000 units. NAC 2022 says the same. The model answer now gives both regimens and that 2000 units is about 29 units/kg for him (68 kg), inside the weight based range.
3. Strong reversal feedback now says the best PCC dose is uncertain and both regimens are accepted.
4. lc-m4 teaching now states the Thrombosis Canada order (specific agent if available, else PCC), that andexanet is rarely stocked in Canada and carries thrombotic risk so its role is debated, and that plasma and vitamin K do not reverse apixaban.
5. Source: the ACC 2020 decision pathway was replaced by the Canadian Thrombosis Canada guide, read in full. The four items that cited ACC now cite it. Its definition of major bleeding (critical site such as intracranial) and its "timing of last dose" step support them.
6. Unsafe reversal feedback: "kidney disease slows apixaban clearance" softened to "can slow" (apixaban is about a quarter renally cleared).
7. The disclosure angle is now the only one in the batch (see the postpartum rework).

Checked and correct: apixaban 5 mg twice daily is the right dose (only one of age 80 or more, weight 60 kg or less, creatinine 133 µmol/L or more). Dextrose 10 to 25 g IV (20 to 50 mL D50W, Diabetes Canada). Naloxone 0.04 mg escalating every 2 minutes, bag valve mask for resp rate 12 or less, duration 20 to 90 minutes (Boyer). Octreotide 50 mcg every 6 hours (Glatstein). GCS arithmetic at every time point. Last apixaban dose 9 hours before CT.

Minor and left as is: cefazolin 2 g every 8 hours at an estimated creatinine clearance of about 30 mL/min would usually be every 12 hours. It is not a teaching point and does not change the flow.

## ladder-fall-ankle-sedation

1. Epinephrine infusion: 0.05 to 0.1 mcg/kg/min was low for a hypotensive patient. Resuscitation Council UK 2021 starts 1 mg in 100 mL at 0.5 mL/kg/h (about 0.1 mcg/kg/min) for moderate and 1 mL/kg/h for hypotensive or hypoxic patients, after two failed IM doses. The model answer now says 0.1 to 0.2 mcg/kg/min, 40 to 80 mL/h for her 82 kg, higher rate when hypotensive, titrate every 5 to 10 minutes.
2. an-m3 now cites the RCUK guideline (new source), which also states the perioperative rule to start compressions when the systolic stays below 50.
3. Strong first choice feedback now says an experienced clinician in a monitored sedation setting may give IV boluses of 50 mcg instead, which is the anesthesia standard and is not wrong.
4. Model answer: routine steroids are no longer advised (RCUK 2021, WAO 2020).
5. an-m4 teaching updated to match.
6. Antibiotic choice: the model answer now says avoid cefazolin and, to be safe, other beta lactams, choose a non beta lactam such as clindamycin with pharmacy or microbiology, and note its weaker gram negative cover.
7. Strong avoidance feedback now says what is debated: cefazolin has a unique side chain, so some allergists would allow a dissimilar beta lactam, but that is the allergist's call. Golden 2023 supports "structurally dissimilar" agents when testing is not yet possible.
8. an-m5 teaching adds that the allergist decides later about dissimilar beta lactams.
9. Biphasic timing: "most often in the first 6 to 12 hours" corrected to WAO wording, about half within 6 to 12 hours.
10. Family conversation said "this could not have been predicted", which contradicts the case's own clue (hand rash after a new scrub). Now: her childhood rash was low risk and such reactions are rare and usually not predictable.
11. Key feature 4 asks for an autoinjector at discharge. The writer had argued none was needed for a drug trigger. Chlorhexidine is in mouthwashes, wipes and cleansers and in her workplace, and WAO 2020 advises an autoinjector at discharge. The family model answer now includes it.
12. an-pr3 text includes the autoinjector.
13. an-pr3 teaching cites the WAO autoinjector advice.

Checked and correct: IM 0.5 mg (0.01 mg/kg to 0.5 mg), repeat every 5 minutes (WAO 5 to 15), 20 mL/kg is 1.6 L, tryptase 1.2 x 4.2 + 2 = 7.04 so 28.6 is far above, tryptase peak 1 to 2 hours, hypotension as the commonest first feature in perioperative anaphylaxis (NAP6), cefazolin 2 g for an 82 kg adult, childhood delayed maculopapular amoxicillin rash as low risk. Choice labels are defensible.

## Uniqueness

I compared titles, stems and topics across all cases (seed and batch01 to batch15) and the SAMPs on each topic.

- Chest pain: no case or SAMP on esophageal rupture beyond the s05 diagnosis item the writer named. No near duplicate.
- Pre-eclampsia: see the rework above. Remaining overlap is a theme. SAMP s15 "Headache one week after delivery" shares the classic opening (postpartum, epidural, breastfeeding, severe headache, BP about 168/112) and asks diagnosis, first drugs and differential. The case goes on to HELLP with kidney injury, PRES, labetalol failure, breastfeeding and discharge pressure and recurrence counselling. SAMP s47 "Four days after a caesarean birth" is NSAIDs and oliguria after a caesarean. Flag for the bank wide TF-IDF check.
- LOC: the bank LOC case is an intoxicated assault. Batch10 `waiting-room-slump` and batch09 `hour-seven-in-the-hallway` are boarding or waiting room stories on other topics. No sulfonylurea case exists. No near duplicate.
- Anaphylaxis: the bank case is a sting on a beta blocker. Batch01 `sedation-shoulder-reduction` is sedation without anaphylaxis. No case mentions chlorhexidine. No near duplicate.

## Sources checked

Identity of every DOI and PMC id confirmed through the Europe PMC API. Content checked against full text where reachable.

- Gulati M, et al. 2021 AHA/ACC chest pain guideline. https://doi.org/10.1161/CIR.0000000000001029 (identity confirmed, full text blocked, 403)
- Chirica M, et al. Esophageal emergencies: WSES guidelines. 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/ (full text read)
- Evans L, et al. Surviving Sepsis Campaign 2021. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med 2003. https://pubmed.ncbi.nlm.nih.gov/12915363/ (new, identity confirmed, PubMed 200)
- Magee LA, et al. SOGC Guideline No. 426. 2022. https://doi.org/10.1016/j.jogc.2022.03.002 (abstract only, full text 403 at jogc.com and ScienceDirect)
- ACOG Committee Opinion No. 767. 2019. https://doi.org/10.1097/AOG.0000000000003075
- Carnegie C, MacDonald T, Minichiello A. Association of Ontario Midwives. Clinical Practice Guideline No. 15: Hypertensive Disorders of Pregnancy. 2023. https://www.ontariomidwives.ca/sites/default/files/2023-05/CPG-HDP-2023-PUB.pdf (new, full text read: NSAIDs not contraindicated in HDP after birth, breastfeeding compatible drugs, SOGC 80 mL/h fluid limit, SOGC 162 mg ASA, recurrence 16 percent, long term cardiovascular risk)
- SOGC preALARM. Hypertensive Disorders of Pregnancy teaching guide. https://media.sogc.org/COVID19/preALARM_HDP_Guide.pdf (read for day 3 to 6 BP peak and 24 hour magnesium, not cited in the case)
- Thrombosis Canada. DOACs: Management of Bleeding. Version of 5 February 2024. https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf (new, full text read)
- National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada (read, confirms 2000 IU or 25 to 50 IU/kg to 3000 IU, not cited in the case)
- Boyer EW. NEJM 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/
- Diabetes Canada 2018, Hypoglycemia. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- Glatstein M, et al. Clin Toxicol 2012. https://doi.org/10.3109/15563650.2012.734626
- Teasdale G, et al. Lancet Neurol 2014. https://doi.org/10.1016/S1474-4422(14)70120-6 (resolves to the Elsevier record)
- Cardona V, et al. WAO anaphylaxis guidance 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/ (full text read: IM repeat every 5 to 15 minutes, half of biphasic reactions within 6 to 12 hours, autoinjector at discharge, chlorhexidine as an elicitor)
- Golden DBK, et al. Anaphylaxis 2023 practice parameter. https://doi.org/10.1016/j.anai.2023.09.015 (full text read: tryptase rule, structurally dissimilar agents after perioperative anaphylaxis)
- Harper NJN, et al. NAP6. Br J Anaesth 2018. https://doi.org/10.1016/j.bja.2018.04.015
- Resuscitation Council UK. Emergency treatment of anaphylaxis. 2021. https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment (new, full PDF read: infusion 1 mg in 100 mL at 0.5 to 1 mL/kg/h after two IM doses, compressions for systolic under 50 in perioperative anaphylaxis, antihistamines third line, routine steroids not advised)

## Needs a physician's eye

- SOGC 426 full text was not reachable. Its postpartum wording on NSAIDs (the older SOGC criteria of hard to control BP, creatinine of 90 µmol/L or more, platelets under 50) and any postpartum BP target should be confirmed against the PDF.
- The breastfeeding feedback says little magnesium reaches the milk and the baby absorbs it poorly. I could not open LactMed through the proxy to quote it.
- The septic shock at about 3 hours after the esophageal tear is fast but possible. Chest tube size is not specified.
- The open fracture antibiotic after suspected cefazolin anaphylaxis (clindamycin, or a dissimilar beta lactam after allergy advice) and whether to add gram negative cover should match local orthopedic practice.
- The postpartum case still shares its opening with SAMP s15 "Headache one week after delivery". The bank wide similarity check should look at this pair.
- The LOC stem keeps the required "when the following patient arrives" opening for a boarded inpatient, as in batch10 `waiting-room-slump`.
