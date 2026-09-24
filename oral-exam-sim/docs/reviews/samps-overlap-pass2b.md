# SAMP overlap pass 2b

Scope: every line of `docs/drafts/_pipeline/overlap-items.md` that concerns s52 suicide-risk, s34 delirium-agitation, s44 multiple-patients, s35 ems, s51 sob and s36 environmental. I read both sides of each item and grepped the bank before writing new content. Every SAMP I touched keeps its id, topic, question count and `reviewed: false`. No signed-off SAMP was edited. The sourcing fixes in da27929 (ems-26, ems-27, ems-29, delirium-agitation-19) were not touched.

Checks:

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes for s52 (456), s34 (528), s44 (451), s35 (450), s51 (647) and s36 (472).
- `npx tsc --noEmit -p .` passes.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts` passes (4 503 tests).
- Every key feature I touched still has at least 13 questions bank-wide. The lowest are loc KF4 (14), sob KF1 (15) and delirium KF1 (18).

## s52 suicide-risk

| Item | Verdict | What changed | Source |
|---|---|---|---|
| suicide-risk-28 q1 (acetaminophen level after every intentional ingestion) | Fixed | The key repeated s17, s08 and s53. q1 now asks the level of supervision while her first results are pending. The key is constant observation by staff, with a search of belongings. Distractors: her son in the room, hourly checks, a camera room, restraint. KF moved from tox 7 to suicide-risk 3. The Dart acetaminophen source left the SAMP. | Donovan AL et al. Jt Comm J Qual Patient Saf. 2021. PubMed 32962905 (abstract checked: observers, belongings and clothing search) |
| suicide-risk-31 vs s17 suicide-risk-02 (widowed older man living alone, hidden self-harm) | Fixed, full rewrite | New case: a 27-year-old Canadian Armed Forces veteran with a boxer's fracture after punching a wall. q1 veteran risk (release before age 25 carries the highest risk, KF1). q2 giving away his service medals as a preparatory act (KF2). q3 psychiatric admission once he discloses a plan and date (KF4). q4 the VAC Assistance Service for his partner (KF5). The KF set (1, 2, 4, 5) is unchanged. This also removes the lac-18 q1 vs suicide-risk-31 q1 overlap on the s52 side. | VanTil LD et al. J Mil Veteran Fam Health. 2021. doi 10.3138/jmvfh-2020-0011 (VAC summary checked: highest risk if released before 25, junior NCM men 1.9 times junior officers, peak about 4 years, female peak about 20 years, male rate equal to other Canadian men by 20 years). Posner C-SSRS (preparatory acts include giving things away). SAMHSA SAFE-T. Veterans Affairs Canada, VAC Assistance Service page 2026 (checked: 24 hours, free, veterans, families and caregivers, no need to be a VAC client) |
| Follow-up calls keyed 3 times (22 q3, 30 q3, 34 q3) | Fixed | Kept 22 q3 (Stanley 2018) and 30 q3 (ED-SAFE). 34 q3 now asks which outpatient treatment has evidence that it may reduce repeat self-harm. Key: cognitive behavioural therapy. Distractors: case management, general practitioner care, psychodynamic psychotherapy (no clear difference in the review) and clonazepam. | Witt KG et al. Cochrane Database Syst Rev. 2021. doi 10.1002/14651858.CD013668.pub2 (abstract checked: CBT may reduce repetition at 6 and 12 months, low certainty, no difference for case management, GP management, psychodynamic therapy) |
| suicide-risk-33 vs s17-08 and suicide-risk-36 (remark made while drinking at a bar) | Fixed | The stem no longer involves a bar or alcohol. He made the remark to a coworker after his layoff, and "He has not been drinking" was added. The title and the q1 explanation were updated to match. Keys are unchanged. | Unchanged (SAFE-T, Ontario MHA) |
| suicide-risk-20 q4 (move the rifles off the farm) vs s17-15 | Kept, distinct enough | s17-15 is a write-in list of every firearm step. 20 q4 is the only single-best choice between off-site storage and locked or disabled storage in the home. | Unchanged |
| suicide-risk-22 q2 (safety plan items) vs s17-06 q3 | Kept, distinct enough | s17-06 is free recall. The menu tests which items do not belong in a plan (risk level, pledge, roommate rules). Two instances. | Unchanged |
| suicide-risk-23 q2 (mood takes weeks to improve on sertraline) vs s17-07 q3 | Kept, distinct enough | KF5 names medication counselling. The s17 item is a write-in list. This is the only single-best counselling key in s52. | Unchanged |
| suicide-risk-25 vs s17 | Kept, distinct enough | A young man after a fentanyl overdose: intent, ambivalence and an OUD discharge plan with buprenorphine. s17-10 is an older woman with extended-release hydromorphone and collateral from the pharmacy. | Unchanged |
| suicide-risk-36 vs s17-08 | Kept, distinct enough | After the 33 fix, only s17-08 and 36 involve an intoxicated remark. 36 tests when to discharge (at 07:00 to his sister) and 9-8-8, which s17-08 does not. | Unchanged |
| suicide-risk-38 vs s17-09 | Kept, distinct enough | A fall from a balcony against a crash. Both teach hidden intent in trauma through different findings (railing height against no skid marks). 38 q3 is ward-level psychiatric assessment before discharge. | Unchanged |

## s34 delirium-agitation

| Item | Verdict | What changed | Source |
|---|---|---|---|
| delirium-agitation-35 (infected obstructed stone, decompression) vs s12 and s01 | Fixed, full rewrite | New case: a 79-year-old man with urinary retention and delirium 5 days after starting amitriptyline for post-shingles pain, on tamsulosin for BPH. q1 bedside bladder scan (KF2). q2 lack of capacity to refuse a catheter (KF5). q3 stop amitriptyline (KF2). q4 haloperidol 0.5 mg PO, chosen for its low anticholinergic effect (KF4). The KF set (2, 5, 2, 4) is unchanged. The CUA source left the file. | Gower LEJ et al. West J Emerg Med. 2012 (checked: relieving retention in men can resolve delirium, anticholinergics a common cause). Appelbaum 2007. AGS Beers 2023 (checked: amitriptyline, nortriptyline and olanzapine strongly anticholinergic) |
| "Intact attention means no delirium" taught 4 times (22 q4, 30 q1, 36 q1, 38 q1) | Fixed | Kept 30 q1 (against dementia) and 22 q4 (against stimulant psychosis). 36 q1 now asks the most likely cause (substance-induced paranoia against anticholinergic delirium, schizophrenia, serotonin toxicity and thyrotoxic crisis). 38 q1 now asks the cause of his agitation at 04:00. The key is nicotine withdrawal, and "no alcohol or sedatives" and a venous gas (pH 7.38, PCO2 48 mmHg) were added to the stem so each distractor has a stated reason. 38 q1 moved from KF1 to KF2. | Gerson 2019 BETA (36). Hughes JR. Nicotine Tob Res. 2007. PubMed 17365764 (abstract checked: irritability, anger, restlessness, impatience are valid abstinence symptoms) |
| delirium-agitation-26 q2 (morphine metabolite buildup) vs s32 loc | Fixed | The loc SAMP already keys metabolite accumulation. 26 q2 is now a select-2 menu: which findings point to opioid neurotoxicity rather than simple opioid excess. Keys: multifocal myoclonus and pain when touched (allodynia). | Gallagher R. Can Fam Physician. 2007 (unchanged source) |
| delirium-agitation-20 q1 vs 27 q4 and s08 | Kept, distinct enough | 20 is anti-NMDA receptor encephalitis (orofacial dyskinesia). 27 is postpartum psychosis against fever with seizure. KF1 itself is this contrast, and the diagnoses differ. | Unchanged |
| delirium-agitation-23 vs s08 | Kept, distinct enough | British Columbia consent law (temporary substitute ranking, emergency treatment) against the Ontario HCCA items in s08. The statute tested differs. | Unchanged |
| delirium-agitation-28 and 29 vs s08 | Kept, distinct enough | 28 adds release from restraints and akathisia after haloperidol. 29 is an aggressive family member, not a patient. The s08 overlaps are single elements of write-in lists. | Unchanged |
| delirium-agitation-34 vs s53 | Kept, no overlap found | I found no long-lie rhabdomyolysis or 4AT case in the current s53, which is being reworked by the review agent. | Unchanged |

## s44 multiple-patients

| Item | Verdict | What changed | Source |
|---|---|---|---|
| mp-22 q3 (airway care during decontamination) vs ems-25 q1 and ems-27 q2 | Fixed | "Life-saving care is not delayed for decontamination" was keyed 3 times. I kept the two EMS items. mp-22 q3 now asks the plan for the four coworkers who walked in with an unknown agent. The key is observation together with repeated reassessment. Distractors: discharge after decontamination, ICU for all, occupational health tomorrow, waiting for the agent to be named. KF2 unchanged. | ATSDR. Medical management guidelines for unidentified chemical exposure. 2017 (checked: extended observation or admission when the chemical is unknown, discharge only if asymptomatic after 6 to 8 hours) |
| mp-22 q1 q2 vs ems-24 | Kept, distinct enough | mp-22 q1 is where to decontaminate at the hospital door and q2 is activating the hospital plan. ems-24 is the method of field decontamination for a caustic, transport order and warning other hospitals. | Unchanged |
| mp-33 q3 and mp-28 q2 vs ems-35 | Kept, no overlap found | The current ems-35 tests the tourniquet time and tranexamic acid, not retriage. mp-28 q2 (one patient's START change) and mp-33 q3 (a system for green tags) are different decisions. | Unchanged |
| mp-31 q3 vs s18 (St Paul's early discharge rule) | Kept, distinct enough | Two instances bank-wide. In mp-31 the rule frees a monitored space during a six-patient surge. | Unchanged |
| mp-35 q1 q2 vs s14 measles | Kept, distinct enough | Two instances each (s14 write-in, mp-35 MCQ). mp-35 q3 (Canadian immunity criteria for exposed adults) and q4 (infectious period and the mall visit) are distinct. | Unchanged |
| mp-27 q1, mp-16 q4, mp-23 q2 q4 vs s13 | Kept, distinct enough | mp-27 q1 is the only CTAS item on the peripheral pain modifier (level 4 against 5). mp-16 q4 is the reassessment interval, not s13's time to physician. mp-23 q2 is a contingency capacity menu and q4 a clinical choice of which child is safe for early discharge. s13 covers these only as write-in list elements. | Unchanged |

## s35 ems

| Item | Verdict | What changed | Source |
|---|---|---|---|
| ems-30 q1 (esmolol first) vs s19 | Fixed | s19 keys esmolol first in dissection. q1 now gives an esmolol-controlled pulse of 72/minute with BP 164/92 mmHg and asks what to add before departure. Key: nitroprusside 0.3 mcg/kg/minute IV. Distractors: enalaprilat, hydralazine, phentolamine, verapamil. q2 (targets) is the only keyed version of the targets in the bank and was kept. | Isselbacher 2022 ACC/AHA aortic disease (unchanged) |
| ems-16 q4 (hypothermia excludes TOR) vs s09 ems-04 q3 | Fixed | TOR contraindications were keyed 3 times (ems-16 q1, q4 and s09 ems-04 q3). q4 now asks the drug for her ongoing wide complex PEA after the amitriptyline overdose. Key: sodium bicarbonate 100 mmol IV (about 1.5 mmol/kg for 68 kg). KF moved from ems 1 to tox 4. | Lavonas EJ et al. 2023 AHA focused update on poisoning. Circulation. doi 10.1161/CIR.0000000000001161 (checked: sodium bicarbonate for life-threatening TCA cardiotoxicity, COR 1) |
| ems-28 q3 (peripheral norepinephrine) vs s50 | Fixed | Peripheral norepinephrine was keyed in s12, s16, s41, s50 and ems-28. q3 now asks how to prepare her infusions for a 2 hour trip. Key: battery pumps with spare infusions. The Surviving Sepsis source left the SAMP. | Warren J et al. Crit Care Med. 2004 (transport guideline already cited in q2) |
| ems-18 q1 vs s09 ems-05 | Kept, distinct enough | The capacity test is the scaffold of any refusal case. The rest of ems-18 is anaphylaxis-specific (biphasic risk, replacing the autoinjector, longer observation after extra doses), which s09 ems-05 does not teach. A one-question change would not remove the shared frame. | Unchanged |
| ems-21 q4 (last seen normal) vs s09 ems-02 | Kept, distinct enough | s09 lists last known well among six write-in items. ems-21 q4 tests the choice between the found time (0710) and the last seen time (0620). | Unchanged |
| ems-24 q2 and ems-27 q4 vs mp-22 | Kept, distinct enough | The mp-22 side was fixed (q3). ems-27 was not touched because of the recent sourcing commit. | Unchanged |
| ems-33 vs s09 ems-03 | Kept, distinct enough | EMS KF2 is itself "details only paramedics know". ems-33 q1 (GCS trend) and q3 (pupils at the scene) are different facts, and s09 ems-03 is a write-in list. I did not add an airway-before-transfer question because s09 already has a head injury air transfer SAMP with that key. | Unchanged |

## s51 sob

| Item | Verdict | What changed | Source |
|---|---|---|---|
| sob-26 (Ludwig angina) vs airway-20 (s21) and the s41 Ludwig SAMP | Fixed, full rewrite | New case: post-intubation tracheal stenosis misdiagnosed as asthma, 3 months after 14 days of ventilation. q1 cause (KF1). q2 flow-volume loop flattened in both limbs (KF1). q3 stridor at rest as the sign of critical narrowing (KF4). q4 urgent airway endoscopy referral (KF1). KF went from 1, 4, 3, 3 to 1, 1, 4, 1. The Ludwig source left the file. | Klopper GJ, Adeniyi OV. Eur Arch Otorhinolaryngol. 2025. doi 10.1007/s00405-025-09773-3 (checked: misdiagnosis as asthma, iatrogenic cause, endoscopy as reference standard). Pellegrino R et al. ATS/ERS interpretative strategies. Eur Respir J. 2005 |
| sob-37 q2 (bicarbonate shows chronic hypercapnia) and q3 (NIV and oxygen 88 to 92%) vs s25 and s17 | Fixed | Both keys recur in s04, s17, s25 and s32. q2 now asks how to judge her response to NIV, with the key a repeat blood gas in 1 to 2 hours (KF4). q3 now asks the breathing support plan at discharge, with the key home NIV until sleep testing (KF3). q1 (obesity hypoventilation) was kept. | Davidson AC et al. BTS/ICS 2016 (q2). Mokhlesi B et al. ATS OHS guideline 2019 (checked: discharge on NIV until outpatient testing and titration, ideally within 2 to 3 months) |

## s36 environmental

| Item | Verdict | What changed | Source |
|---|---|---|---|
| environmental-19 q3 (core probe to stop cooling) vs s09 | Fixed | q3 now asks when the firefighter can return to fireline work. Key: rest 7 days, review, then a graded return. | Roberts WO et al. ACSM consensus on exertional heat illness. 2023 (checked: at least 7 days without exercise, end-organ review, graded return over 2 to 4 weeks in a cool setting) |
| environmental-21 q3 (gentle horizontal handling) vs s09 ems-05 write-in | Fixed | q3 now asks the airway plan before a 2 hour flight for the woman responding only to pain and breathing 6/minute. Key: intubate before departure. It is not deferred until she is warm. | Paal P et al. 2022 (already cited) |
| environmental-17 vs s09 (heat wave in an older adult) | Fixed, q1 | q1 keyed tarp cold water immersion, which environmental-19 q2 and s09 environmental-01 and -02 also key. q1 now asks which finding would point to anticholinergic toxicity from her oxybutynin and quetiapine. Key: dilated pupils and a full bladder. Distractors: hot dry skin, clonus, lead pipe rigidity, crackles. KF2. q3 (drugs that impair heat tolerance) repeats a write-in element of s09 environmental-02 q1. That makes two instances, so it was kept. | Rosen's Emergency Medicine 10th ed (already in the file) |
| environmental-23 vs s09 (hypothermia rewarming, frostbite thaw timing) | Fixed, q1 | q1 duplicated the s09 environmental-05 rewarming choice. It now asks the next step for his GCS of 11 with a boggy occipital hematoma. Key: urgent CT head. KF loc 4 ("do not attribute to alcohol until head injury is excluded"). q2 (thaw after core stabilization) matches one write-in element of s09 environmental-09 and was kept. q3 (iloprost because the subdural contraindicates alteplase) is distinct. | Stiell IG et al. Canadian CT Head Rule. Lancet. 2001 |
| environmental-26 vs s09 environmental-07 (failure to rewarm) | Kept, distinct enough | Failure-to-rewarm causes appear once as an MCQ (26 q2) and once in a reviewed write-in (s09-07). The case differs (ice storm, hip fracture, ECLS transfer criteria in an older patient). | Unchanged |

## Deferred

- lac-18 q1 vs suicide-risk-31 q1 is resolved from the s52 side by the rewrite. The MIXED agent can drop it from their list.
- Nothing else needs changes outside my files.

## SAMP ids edited

suicide-risk-28, suicide-risk-31, suicide-risk-33, suicide-risk-34, delirium-agitation-26, delirium-agitation-35, delirium-agitation-36, delirium-agitation-38, multiple-patients-22, ems-16, ems-28, ems-30, sob-26, sob-37, environmental-17, environmental-19, environmental-21, environmental-23.

## For the physician

- suicide-risk-28 q1 maps "constant observation while results are pending" to suicide-risk KF3 (the patient who wants to leave). No key feature fits exactly. The source is a US protocol study, because I found no current Canadian ED observation standard.
- suicide-risk-31 q3 maps psychiatric admission for a high risk patient to KF4, as the old version did. KF4 is written for low risk patients.
- suicide-risk-31 q1 rests on VAC release-cohort data from 1976 to 2012. Please confirm you are content to teach age at release as the key risk marker.
- delirium-agitation-35 q1 cites Gower 2012 (WestJEM). The CCSMH delirium guideline PDF could not be text-searched to confirm its wording on urinary retention.
- delirium-agitation-38 q1: Hughes 2007 supports the symptoms of tobacco abstinence but not their exact onset time. The explanation states no timing.
- ems-16 q4 now maps to tox KF4 inside an EMS SAMP. EMS KF1 drops from 59 to 58.
- ems-28 q3 (battery pumps and spare infusions) cites Warren 2004. I did not recheck its equipment list wording against the full text.
- sob-26 q3: I could not confirm from the sources that stridor at rest marks a specific lumen size. The explanation says only that symptoms move from exertion to rest as the lumen narrows.
- environmental-21 q3: please confirm the statement that intubation rarely triggers VF in hypothermia against Paal 2022.
- environmental-17 q1 cites Rosen's textbook for the anticholinergic signs.
