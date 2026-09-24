# Review of SAMP overlap pass 2b

Lenses: A (clinical truth) and B (internal consistency, numbers, sources, format and overlap), both applied to every SAMP the writer edited in s52, s34, s44, s35, s51 and s36. I read each diff against HEAD, recomputed every number, opened each new source and grepped the whole bank, including the signed-off s01 to s18, for new overlaps. Every SAMP stays `reviewed: false`. No signed-off SAMP was touched.

This is an AI audit. It is not clinician verification.

## Moved keys

The diff contains no pure answer rebalances. Every changed `correct` index sits inside a question whose options were rewritten, and each one points at the intended option text. I checked all 26 changed questions one by one. No SAMP outside the list was edited in these six files.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| ems-16 | q4 | whole question | The new key (sodium bicarbonate 100 mmol IV for a tricyclic wide QRS) repeats s32 loc (same key, same dose, amiodarone as a distractor), s49 seizures, s03 and s18. That made at least five copies. The q2 explanation also named bicarbonate as the treatment, which gave q4 away. Rebuilt: after two boluses of bicarbonate the rhythm is still PEA. Key: epinephrine 1 mg IV (AHA 2025 ALS, nonshockable rhythm). Distractors: amiodarone, atropine, magnesium, vasopressin. Nothing else in the bank tests this decision. | high |
| ems-30 | stem, q1 | stem, explanation | ACC/AHA 2022 sets a heart rate target of 60 to 80/minute. ESC 2024 sets below 60/minute with a systolic of 100 to 120 mmHg. Under ESC a pulse of 72 means giving more beta-blocker first, so the key held under only one guideline. The stem now says the surgeon wants the 2022 ACC/AHA targets, which q2 also depends on. The key (add nitroprusside) is correct under that guideline. | high |
| delirium-agitation-26 | q2 | update | The writer deleted the old q2 update, but the new explanation still cites a creatinine rise from 95 to 212 umol/L. That value was then in neither the stem nor any update. The update (calcium, creatinine, sodium and glucose) is restored. | high |
| environmental-19 | q3 | whole question | The new key ("Rest 7 days, review, then graded return", ACSM) copies environmental-20 q3 in the same file almost word for word. Rebuilt: after tarp cooling, with normal ALT, INR and platelets on arrival, the key is serial liver and clotting tests over the next few days. ACSM 2023 lists liver failure and DIC as common sequelae, calls for serial testing and reports that liver markers peak within 4 days. | high |
| environmental-23 | q1 | whole question | The new key (CT head now for a GCS of 11, "the Canadian CT Head Rule applies only to a GCS of 13 to 15", skull radiographs and observation as distractors) repeats s32 loc hematoma q2 nearly line for line. The loc KF4 lesson is also taught about 14 times. Reframed to the decision that is unique to this case: CT now while rewarming continues, against waiting until he is rewarmed or sober or skipping imaging if his GCS rises. Re-sourced to Paal 2022, which warns that staging by level of consciousness misleads when trauma is present. The unused CCHR source was removed. | medium |
| environmental-21 | q3 | explanation | "Rarely triggers VF" and "small" were close to Paal but not its wording. It now says the risk is minimal compared with the benefit, and that she is intubated in the warm department, as Paal states. I looked at reverting to "gentle horizontal handling", but that point is already in s03 arrhythmia-06 and s09. The intubation decision is the less duplicated one, so I kept it. | low |
| environmental-17 | q1 | explanation | The q1 explanation named oxybutynin and quetiapine as anticholinergic, which gave away two of the three keys of the q3 menu. It now says "anticholinergic drugs on her medication list". | medium |
| suicide-risk-28 | q1 | update, explanation | The explanation claimed she was at risk of leaving and was "cooperative", but the case gave neither fact. Added an update: an acetaminophen level is sent, and she asks twice how long she must stay and watches the exit. This also makes the KF3 mapping (a patient who wants to leave) defensible. The restraint distractor's reason is now true to the stem. | medium |
| delirium-agitation-35 | q4 | update | The key is oral haloperidol for a man who has just struck a nurse, so the oral route was not plausible. Added "He will accept a tablet from his daughter." | medium |
| delirium-agitation-38 | q1 | explanation | The explanation listed "irritability" as a valid abstinence symptom. The Hughes 2007 abstract lists anger, impatience and restlessness. The wording now matches the source. | low |
| sob-26 | q1 | explanation | "Intubation is the commonest benign cause" is not in Klopper 2025. Softened to "a leading cause". | low |
| sob-26 | q3 | source | Klopper 2025 does not describe symptoms moving from exertion to rest. Re-sourced to Marwaha 2022, which states that dyspnea on exertion (lumen below 8 mm) progresses to dyspnea at rest (below 5 mm). | medium |
| ems-28 | q3 | explanation | "Drugs cannot be mixed safely in a moving ambulance" was an absolute claim with no source. Softened to "difficult and prone to error". | low |

## Key changes

- ems-16 q4: sodium bicarbonate 100 mmol IV became epinephrine 1 mg IV, as part of a rebuilt question (above).
- environmental-19 q3: "Rest 7 days, review, then graded return" became "Serial testing over the next few days", as part of a rebuilt question.
- environmental-23 q1: "Urgent CT head without contrast" became "CT head now as rewarming continues", as part of a reframed question.

## Verdict per SAMP

| SAMP | Verdict |
|---|---|
| suicide-risk-28 | Fixed (q1 stem support). KF3 now fits. |
| suicide-risk-31 | Passes. VanTil figures and the VAC Assistance Service verified. Flags below. |
| suicide-risk-33 | Passes. No leftover alcohol or bar references. |
| suicide-risk-34 | Passes. Witt 2021 abstract matches every claim, including 76 trials and no difference for case management, GP management or psychodynamic therapy. |
| delirium-agitation-26 | Fixed (missing update restored). |
| delirium-agitation-35 | Fixed (q4 route). Gower 2012 and Beers 2023 support q1 and q3. |
| delirium-agitation-36 | Passes. Every distractor reason traces to the stem. |
| delirium-agitation-38 | Fixed (wording). The VBG and "no alcohol or sedatives" support each distractor. |
| multiple-patients-22 | Passes. ATSDR 2017 quote verified (extended observation or admission, discharge only if asymptomatic after 6 to 8 hours). 1 + 4 coworkers = 5 matches the stem. |
| ems-16 | Fixed (q4 rebuilt). |
| ems-28 | Fixed (claim softened). Warren 2004 full text not reachable. |
| ems-30 | Fixed (guideline named). |
| sob-26 | Fixed (q1 wording, q3 source). No tracheal stenosis case elsewhere in the bank. |
| sob-37 | Passes. Mokhlesi 2019 (NIV at discharge until sleep testing, ideally within 2 to 3 months) and BTS/ICS 2016 (repeat gas after starting NIV) match. |
| environmental-17 | Fixed (cueing). |
| environmental-19 | Fixed (q3 rebuilt). |
| environmental-21 | Fixed (wording to Paal). |
| environmental-23 | Fixed (q1 reframed). |

## Specific checks requested

- ems-16 q4 on tox KF4. As a mapping it was right, since KF4 names "bicarbonate for TCA wide complex tachycardia". The problem was overlap. The rebuilt question stays on tox KF4, because the decision rests on the agent: keep standard ALS going and do not reach for a sodium channel blocking antiarrhythmic. No EMS key feature fits an ED drug decision. EMS KF1 still has well over 3 questions.
- ems-30 q1 against ESC 2024 and ACC/AHA 2022. Both put an IV beta-blocker first and add a vasodilator if pressure stays high. They differ on the heart rate target (60 to 80 against below 60). This is fixed by naming ACC/AHA in the stem. Nitroprusside is sold in Canada.
- suicide-risk-28 q1 on KF3. Now supported by the new update (she is looking to leave). Donovan 2020/2021 abstract checked: observers, access to belongings, clothing search.
- suicide-risk-31 q3 on KF4. It maps a high risk admission to a key feature written for low risk discharge. It is loose but defensible as the disposition decision. Left for the physician.
- Gower 2012: verified ("relieving urinary retention (in men) can sometimes resolve an episode of delirium", anticholinergics among the most common causes).
- Warren 2004: citation real (Crit Care Med 2004, volume 32, pages 256 to 262). The full text could not be reached, so the pump and battery wording is unverified.
- Klopper 2025: real (Eur Arch Otorhinolaryngol, epub October 2025, print 2026). It supports misdiagnosis as asthma, a rising iatrogenic incidence and laryngotracheobronchoscopy as the reference standard. It does not support stridor at rest as the sign of critical narrowing, so q3 was re-sourced.
- Paal 2022: verified. Gentle horizontal transport, pads over leads, and the ECLS transfer criteria (below 30°C, systolic below 90 mmHg, ventricular arrhythmia) match. Intubation: "the risk of causing a malignant arrhythmia is minimal", with intubation deferred only until the patient is in a warm environment.

## Overlap search, remaining items (kept)

- suicide-risk-31 q2 (giving away service medals as a preparatory act). This teaching also appears in suicide-risk-17 q1 (a note as a preparatory act) and as write-in elements in s17 (suicide-risk-02 q2, and suicide-risk-10, where she gave away her jewellery). The finding and the distractor set differ, but this is borderline. Low confidence. Flagged below.
- delirium-agitation-35 q4 (haloperidol 0.5 mg for an older delirious patient) repeats delirium-agitation-32 q3 and s08 and s02 write-in elements. The distinct angle is choosing the least anticholinergic antipsychotic after an anticholinergic cause. Kept. Flagged.
- delirium-agitation-35 as a whole against s08 delirium-agitation-01 (an older woman on oxybutynin with urinary retention in a write-in list). The case, sex, drug and tested decisions differ. Kept.
- environmental-21 q3 (intubate before a flight) is keyed for other reasons in s25 asthma-copd and s26 burns. The hypothermia specific decision (VF risk is no reason to defer) is not keyed elsewhere. Kept.

## Sources verified

- AHA 2023 poisoning focused update: sodium bicarbonate for TCA cardiotoxicity, COR 1 (emDocs summary of Lavonas 2023). This source is no longer cited after the ems-16 rebuild.
- Wigginton JG et al. Part 9: adult ALS. 2025 AHA guidelines. Circulation 2025. PMID 41122884. https://doi.org/10.1161/CIR.0000000000001376 (epinephrine as soon as feasible in a nonshockable rhythm, vasopressin no advantage, no routine magnesium).
- Isselbacher 2022 ACC/AHA aortic guideline, PMID 36322642 (SBP below 120 mmHg, HR 60 to 80, vasodilator if BP is not controlled with a beta-blocker). ESC 2024 targets checked for contrast.
- Donovan AL et al., Jt Comm J Qual Patient Saf, PMID 32962905.
- VanTil 2021 (VAC summary page): release before 25 highest risk, junior NCM 1.9 times junior officers, peak about 4 years in men, female NCM risk 3 times and peak about 20 years, male rate equal to other Canadian men by 20 years.
- VAC Assistance Service page: free, 24/7, veterans, families and caregivers, no need to be a VAC client.
- Witt KG et al. Cochrane 2021, PMID 33884617.
- Hughes JR 2007, PMID 17365764.
- Gower 2012 WestJEM (page fetched).
- ATSDR unidentified chemical MMG, January 2017 (page fetched).
- Klopper 2025, PMID 41136582, PMC13002695 (full text grepped).
- Marwaha A et al. J Anaesthesiol Clin Pharmacol 2022, PMID 35706632, PMC9191789 (full text grepped).
- Roberts WO et al. ACSM exertional heat illness consensus, 2023 (full PDF grepped).
- Paal P et al. 2022, PMC8744717 (full text grepped).
- Not reachable: Warren 2004 full text, Mokhlesi 2019 and BTS/ICS 2016 full text (their claims match the known recommendations), AGS Beers 2023 (claims match the published strong anticholinergic list).

## Needs physician decision

- suicide-risk-31 q2: preparatory act (giving away belongings) is now taught in two MCQs and in s17 write-ins. Keep, or rework to a different KF2 decision?
- suicide-risk-31 q3: a high risk admission mapped to KF4, which is written for low risk discharge.
- suicide-risk-31 q1: VAC release cohort data from 1976 to 2012 as the teaching basis.
- delirium-agitation-35 q4: a fourth low dose haloperidol key for older delirium.
- ems-16 q4: an epinephrine key in a poisoned arrest, mapped to tox KF4. Please confirm the mapping.
- environmental-19 q3: the serial liver and clotting test question is mapped to environmental KF1. No environmental key feature names complications.
- ems-28 q3: Warren 2004 wording on transport pumps and spare infusions not verified against the full text.
- environmental-17 q1 cites the Rosen textbook.

## Checks

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: s52 456 passed, s34 528 passed, s44 451 passed, s35 450 passed (after moving the ems-16 q4 key off an over-full position 4), s51 647 passed, s36 472 passed.
- `npx tsc --noEmit -p .`: no errors.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4 503 passed.

## Summary

18 SAMPs reviewed. 13 fixes in 12 SAMPs: 3 questions rebuilt or reframed because the writer's replacement created a new overlap (ems-16 q4, environmental-19 q3, environmental-23 q1), 1 missing stem fact that an explanation relied on (delirium-agitation-26 q2), 1 guideline conflict (ems-30), 2 stem support gaps (suicide-risk-28 q1, delirium-agitation-35 q4), 1 cross-question cue (environmental-17 q1) and 5 source or wording corrections. The most serious were the three new overlaps, including environmental-19 q3, which copied the next SAMP in the same file.

SAMP ids with a defect found: ems-16, ems-28, ems-30, delirium-agitation-26, delirium-agitation-35, delirium-agitation-38, environmental-17, environmental-19, environmental-21, environmental-23, suicide-risk-28, sob-26.

## Second check

An independent second reviewer read the seven items below against the uncommitted diff. Both lenses were applied, every number was recomputed and the whole bank, including the signed-off s01 to s18, was grepped for overlap. Every SAMP stays `reviewed: false`. This is an AI audit. It is not clinician verification.

| SAMP | Q | Verdict | Change | Confidence |
|---|---|---|---|---|
| ems-16 | q4 | Passes | None. The key sits at position 3 (index 2) and points at "epinephrine 1 mg IV". Options are alphabetical, lower case generic names and similar in length. Each distractor has a true reason: amiodarone is for shock-refractory VF or pVT and blocks sodium channels, atropine left the PEA algorithm, magnesium is not routine, and vasopressin offers no advantage as a substitute. The AHA 2025 ALS summaries confirm epinephrine as soon as feasible in a nonshockable rhythm and no routine magnesium or vasopressin. No other bank item keys "next drug in PEA". | high |
| ems-16 | q4 | Mapping | Tox KF4 is a loose fit. The key is agent-independent ALS, and only the amiodarone distractor carries the agent-specific point. No better key feature exists, so it is left for the physician, as the first review said. | medium |
| environmental-19 | q3 | Passes, overlap flagged | None. The ACSM 2023 full text (cached PDF) says "serial clinical testing is required", lists liver failure and DIC among common sequelae and says liver markers "peak within 4 d". Every distractor reason is true. It sits close to environmental-20 q2 in the same file, which keys admission for repeat liver and clotting tests. The decisions differ (a test schedule in an intubated man who will be admitted anyway, against a disposition in an alert boy), so it is kept. environmental-20 q2 says liver injury peaks at 24 to 48 hours, while ACSM says within 4 days. The two do not conflict. | medium |
| environmental-23 | q1 | Fixed | Two distractors, "Observe until sober, then reassess" and "Skull radiographs first", repeated the option set of signed-off loc-07 q2 in s07 ( "Observe until sober, then reassess for CT", "Skull X-ray series before any CT", same key of CT now). They are replaced with "CT head only if a focal deficit appears" and "MRI of the brain once he is warm". The explanation now gives a true reason for each. The key and position are unchanged. The rewarming decision itself is not keyed anywhere else. s32 loc q4 (CT after cooling in heat stroke) shares loc KF4 but tests a later, different decision. Paal 2022 supports the key: in the staging table, consciousness "may be impaired by comorbid conditions such as trauma ... toxins or drugs ... independent of core temperature". | medium |
| ems-30 | q1, q2 | Passes, one explanation fix | ACC/AHA 2022 (ACC key points) confirms SBP below 120 mmHg, HR 60 to 80 and IV beta-blocker first, then a vasodilator if BP stays high. With a pulse of 72 and SBP of 164 mmHg, adding nitroprusside is correct. The stem, q1 and q2 agree. The q2 explanation did not reject the "Pulse 80 to 100" distractor on its heart rate. A clause was added. q1 no longer duplicates s19 abdominal-pain q3 (esmolol first), because it now tests the second step. The q1 explanation gives the q2 targets, but the app shows explanations only after the whole SAMP is marked (Written.tsx SampResult), so nothing leaks. | high |
| delirium-agitation-35 | q4 | Passes | None. Beers 2023 (cached text): avoid antipsychotics in delirium "unless documented nonpharmacologic options ... have failed and/or the patient is threatening substantial harm", which matches the update. Beers gives no dose. The CCSMH guideline on delirium in older adults at the end of life (Canadian) states "initial dosages of haloperidol are in the range of 0.5 mg to 2.0 mg", so 0.5 mg PO is at the low end and defensible at 79. Haloperidol 0.5 mg tablets are sold in Canada. Olanzapine and quetiapine are on the Beers strong anticholinergic list. The repeat of the low-dose haloperidol key is already flagged. | medium |
| suicide-risk-28 | q1 | Passes | None. The update (asks twice how long she must stay, watches the exit) supports "already looking to leave" in the explanation. The restraint reason ("has not tried to leave or harm anyone") is still true, because she first stands to leave in the q2 update. The timeline holds: found 1 hour before arrival, ingestion 5 hours before q3. 20 × 50 mg is 1 000 mg of sertraline. s17 lists constant observation only as a write-in element, so this is not a duplicate. | high |
| delirium-agitation-26 | q2 | Passes | None. The q2 update (calcium 2.38 mmol/L, creatinine 212 umol/L up from 95, sodium and glucose normal) is identical to HEAD, and the explanation's creatinine values and "respiratory rate is 16/minute" match the case. The q1 explanation's calcium and creatinine rationale is answered by that update. | high |

### Checks after the second check

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: s52 456, s34 528, s44 451, s35 450, s51 647 and s36 472 passed.
- `npx tsc --noEmit -p .`: no errors.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4 503 passed.

### Edited in the second check

environmental-23 (q1 options and explanation), ems-30 (q2 explanation).

### For the physician, added

- ems-16 q4: an agent-independent ALS key mapped to tox KF4.
- environmental-19 q3 and environmental-20 q2: two adjacent heat stroke SAMPs both teach delayed liver and clotting injury. Keep both, or rework one?
- delirium-agitation-35 q4: the dose is supported by CCSMH end-of-life delirium guidance, not by Beers. Consider citing CCSMH.
