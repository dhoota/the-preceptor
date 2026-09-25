# Last check: SAMPs rebuilt or replaced during review

Reviewer: independent AI audit, Lens A and Lens B together, plus the overlap, hedged-key and mock-mode checks from the rebuild brief. This is not clinician verification. Every SAMP stays `reviewed: false`.

Rule for this round: fix in place only. No SAMP was rebuilt. Anything that still copies another SAMP, or whose key could not be made the single best answer by a small edit, is listed under "For the physician".

Files edited: src/samps/s24/arrhythmia.ts, s27/cva.ts, s34/delirium-agitation.ts, s35/ems.ts, s38/first-trimester-bleeding.ts, s42/ischemic-heart-disease.ts. s21 and s39 were reviewed and not changed.

## Verdicts

| SAMP | Verdict | What was checked or changed |
|---|---|---|
| airway-25 | pass | Bacterial tracheitis in a 12-year-old transferred with the diagnosis made. q1 ENT surgeon ready before induction (CAFG 2021 part 2, obstructing pathology). q2 sugammadex does not relieve the obstruction. The options are plain statements, so there is no hedged-key cue. q3 Staphylococcus aureus (Tebruegge 2009, 55.8%). sob-25 (s51) is the same disease, but its keyed decisions are diagnosis, chest X-ray and intubation, so this is not a copy. |
| airway-28 | pass | Aspiration after choking in a man with a radiated neck and trismus. q1 FONA predictors (radiation, cricothyroid not palpable) match CAFG part 2. q2 awake intubation, because three rescue modes are predicted to be difficult. q3 a tube at 17 cm with the cuff at the cords. The q3 update no longer mentions a scope, so there is no mock-mode cue. |
| arrhythmia-28 | fixed | Timeline: he was found "an hour ago" but bagged for only 8 minutes, which left 50 minutes unaccounted for. Now found 20 minutes ago and bagged for 12 minutes, and the q2 explanation matches. Rechecked: 0.01 mg/kg x 8 kg = 0.08 mg (0.8 mL of 0.1 mg/mL). Distractors 0.04 and 0.16 mg are 0.005 and 0.02 mg/kg. CPR for a rate below 60 with poor perfusion despite effective ventilation. The NRP compressions item in s21 is a newborn under NRP, not a copy. |
| cva-35 | fixed | q3 option "Agree, as bleeding is rare when mimics are lysed" carried its own reason inside the option. It is now "Give full-dose thrombolysis now", and the explanation was reworded. The key stays at index 4. The q1 explanation said 21 patients were "treated" as stroke. Hu 2023 says they were misdiagnosed, so it now says "diagnosed". Hu 2023 checked on the Karger page: 51 patients, 21 misdiagnosed, 13 given alteplase, 10 worse, Brown-Sequard a distinguishing sign, cervical CT or MRI before lysis. Alteplase: 0.9 x 70 = 63 mg, bolus 6.3 mg. Tenecteplase 0.25 x 70 = 17.5 mg. No other spinal epidural hematoma SAMP in the bank. |
| delirium-agitation-34 | fixed, part flagged | The stem shell repeated delirium-agitation-16 in the same batch: an 86-year-old woman "not herself for 3 days" who falls asleep mid-interview, and a q1 keyed on change over days. The surface was changed: she is now 91, and staff report 4 days of restlessness and calling out. The q1 option and explanations were updated to 4 days. The fecal impaction wording was brought in line with Serrano Falcon 2016, which names older people and neuropsychiatric disease, not "institutionalized" people. 4AT recomputed: alertness 4 + AMT4 with 3 errors 2 + months untestable 2 + acute change 4 = 12. Distractors 11, 10 and 8 match their stated errors. The q1 keyed idea (onset over days) is still shared with delirium-agitation-16 q1. See For the physician. |
| ems-27 | fixed | q2 checked. At rates of 10 to 12 with SpO2 of 95% or more, the Ontario directive threshold (rate below 10) does not apply, so monitor. The SALT fix holds: all four unresponsive patients breathe, so none falls into the dead branch, and the pulse-130 woman passes every check. Defect: the q4 update said a man "remains apneic", but no patient in the stem was apneic (rates of 2 to 6). It now says he is still breathing only 2 times a minute. The unused SSC 2021 source object was removed from s35. |
| first-trimester-bleeding-29 | fixed, part flagged | This copied shock-17 (s50): an athlete (usual pulse 46 against 52), a pulse of 88 against 96, BP 104/68 against 104/66, both 62 kg, a relative-tachycardia key, then red cells after 1 L of crystalloid. The athlete hook was removed from the stem and title. q1 is now a menu with select 1, keyed on the postural pulse rise alone. "Pulse of 88/minute lying down" is a distractor, rejected because supine tachycardia is often absent (McGee 1999). q2 still keys red cells after 1 L of crystalloid. See For the physician. |
| first-trimester-bleeding-34 q2 | pass | 800 / 1 450 = 55% rise. The key ("Location still to be confirmed by ultrasound") is not the only hedged option ("Consistent with", "Suggests" are also hedged and wrong). Nothing in q3 names the q2 key. Signed-off first-trimester-bleeding (s10) teaches a 35% rise in PUL follow-up with a different keyed decision. |
| first-trimester-bleeding (s38 SSC) | fixed | The septic abortion SAMP's q2 now cites Prescott HC et al., Crit Care Med 2026, doi 10.1097/CCM.0000000000007075. Its claims were checked on the SCCM 2026 statement page. Antimicrobials immediately, ideally within 1 hour, in septic shock (strong). Cultures before antimicrobials. At least 30 mL/kg of crystalloid in the first 3 hours (conditional). Early source control, ideally within 6 hours. The explanation now says "at least 30 mL/kg of crystalloid within 3 hours" and "early source control". 30 x 60 = 1 800 mL. |
| gi-bleed-41 q2 | pass, flagged | "No anticoagulation" is correct: active bleeding, CHADS-65 of 0 at age 58, and onset under 12 hours (CAEP 2021). The q2 update (melena) and the q3 option (red cell transfusion) imply bleeding and so point to the q1 key (CBC) in mock mode. This cannot be removed without losing the basis of q3. See For the physician. |
| ischemic-heart-disease-23 q2, q3 | fixed | The q1 and q2 explanations named apical hypertrophic cardiomyopathy, which is the q3 key, so a candidate saw the answer before reaching q3. Both explanations now describe a fixed structural cause without naming it. q2 key (echocardiogram and cardiology referral) and q3 key (apical HCM) hold against Hughes 2020 (giant T waves 10 mm or more, LVH voltage, echo missed 40% of cases later found on MRI). No other apical HCM SAMP in the bank. |
| ischemic-heart-disease-42 q3 | pass | Sublingual nitroglycerin as needed, including before the ramp (CCS 2014). The long-acting nitrate is second line. Rivaroxaban 2.5 mg needs proven CAD or PAD, and his amputation was traumatic. Clopidogrel replaces ASA only when ASA cannot be taken. Ticagrelor is for ACS. Every distractor reason is true. |

## Defects found

- Copies: first-trimester-bleeding-29 (shock-17 hook, fixed in part). delirium-agitation-34 (delirium-agitation-16 stem shell, fixed in part).
- Timeline: arrhythmia-28 (an hour against 8 minutes of bagging). ems-27 q4 ("remains apneic" with no apneic patient in the stem).
- Format: cva-35 q3 option held its reason.
- Source wording: cva-35 q1 ("treated" for "misdiagnosed"). delirium-agitation-34 q4 ("institutionalized").
- Cueing: ischemic-heart-disease-23 (q1 and q2 explanations named the q3 key). gi-bleed-41 (mock mode, left in place).
- Stale source: s38 SSC 2021 replaced by SSC 2026. The unused SSC 2021 object was removed from s35.
- No hedged-key cue was found.

## Key changes

None. Two options changed wording (cva-35 q3, first-trimester-bleeding-29 q1). first-trimester-bleeding-29 q1 went from select 2 [3, 4] to select 1 [4]. The removed key was the relative tachycardia, which rested on the athlete hook.

## Sources verified

- Hu 2023, Cerebrovasc Dis: https://karger.com/ced/article/52/5/597/836269 (PubMed 36516738)
- SSC 2026 (Prescott): https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026 (PubMed 41869847)
- Serrano Falcon 2016, BMC Geriatr: https://link.springer.com/article/10.1186/s12877-015-0162-5
- Tebruegge 2009, Hughes 2020, CAFG 2021 parts 1 and 2, CAEP AF 2021, CCS SIHD 2014 and PALS 2025 were verified in final check 1 and were not reopened. Their claims were reread against that record.

## For the physician

- first-trimester-bleeding-29 q2 still keys red cells after 1 L of crystalloid for ongoing bleeding. This is the same keyed decision as shock-17 q4 (s50) and as other hemorrhage SAMPs. The athlete hook that made it a copy is gone. Every alternative keyed decision for this case is already used elsewhere (O negative cells, os tissue removal, misoprostol). Keep it, or drop one of the two.
- first-trimester-bleeding-29 q1 and q3 and first-trimester-bleeding-34 q3 all teach the postural pulse rise, as signed-off first-trimester-bleeding-02 and -15 do. KF1 names orthostatic change, so some repetition is expected. Consider cutting one.
- delirium-agitation-34 q1 keys onset over days, as delirium-agitation-16 q1 does in the same batch. Reduced arousal, the other obvious key, is already keyed in another s34 item (delirium against schizophrenia). The rest of the SAMP (4AT scoring, codeine and loperamide, rectal examination) is distinct.
- gi-bleed-41: in mock mode the q2 update (melena) and the q3 option (red cell transfusion) show that he is bleeding, which points to the q1 key (CBC). The stem already points strongly to bleeding. Removing the cue would take the basis away from q3. q2 ("No anticoagulation") is also an easy item, because every distractor is an anticoagulant in a patient with melena.
- cva-35: Hu 2023 suggests cervical CT as the quick first test, with MRI as confirmation. Only MRI is offered. q4 tests the alteplase bolus, and the stem says the hospital stocks alteplase. Please confirm it is worth keeping now that tenecteplase is standard.
- airway-25 uses CAFG 2021, an adult consensus, for a 12-year-old. The double setup and the sugammadex limits apply, but a pediatric anesthetist would often choose inhalational induction for tracheal membranes. The stem sets IV induction as the plan.
- ems-27 still teaches SALT in an opioid cluster. See the earlier note in samps-replace-s27-s29-s34-s38-s52.md.
- ischemic-heart-disease-42 q3 maps sublingual nitroglycerin to KF8 (follow-up and testing). No IHD key feature fits a discharge drug well.

## Checks

- SAMP_BATCH=s21, s24, s27, s34, s35, s38, s39 and s42: npx vitest run tests/samps.test.ts tests/samp-quality.test.ts. All pass (667, 675, 715, 528, 450, 456, 671, 655).
- npx tsc --noEmit -p . passes.
