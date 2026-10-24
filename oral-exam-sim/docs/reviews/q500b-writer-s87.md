# Q500B writer report: s87, Decreased level of consciousness (loc)

Author: Preceptor. All items `reviewed: false`, `version: 1`.

## Ids written

loc-48 to loc-52 in `src/samps/s87/loc.ts` (array `LOC_S87`).

| Id | Title | Scenario (setting) | Questions |
|---|---|---|---|
| loc-48 | Could not be woken for breakfast | Man unrousable in police cells after arrest for intoxication, head injury (fly-in northern Ontario hospital, no CT) | 4 (1 menu) |
| loc-49 | Less responsive at the group home | Nonverbal adult with intellectual disability and cerebral palsy, hypovolemic hypernatremia after a heat wave (tertiary) | 4 |
| loc-50 | Collected early from daycare | 9-month-old with lethargy from intussusception, father blames teething (tertiary) | 4 |
| loc-51 | Sleeping after his headache treatment | Cerebellar hemorrhage, drowsiness blamed on ED diphenhydramine (tertiary) | 4 |
| loc-52 | Confused and bruised, four months in Canada | Dari-speaking newcomer with TTP, history via interpreter, earlier labelled stress (tertiary) | 4 (1 menu) |

20 questions: 18 single, 2 menu. Single key positions 4, 4, 2, 4, 4 (max 22%). Key is the longest option in 4 of 18 singles (22%).

## Key feature coverage

Bank counts before this batch: KF1 48, KF2 64, KF3 24, KF4 14, KF5 25. Extra questions went to KF4, KF5 and KF3.

| KF | Summary | This batch | Questions |
|---|---|---|---|
| 1 | Differential, exclude bleed, infection, toxins | 4 | 48 q4, 49 q4, 50 q4, 52 q3 |
| 2 | Correct reversible causes | 2 | 49 q3 (isotonic bolus for shock), 52 q4 (plasma exchange) |
| 3 | Collateral and prehospital history | 4 | 48 q1, 49 q1, 50 q2, 52 q1 |
| 4 | Do not blame a minor cause | 5 | 48 q2 (worse while sobering), 50 q1 (teething), 51 q1 and q2 (diphenhydramine), 52 q2 (stress) |
| 5 | Document and trend with descriptions and GCS | 5 | 48 q3 (GCS and pupils before induction), 49 q2 (verbal NT in nonverbal adult), 50 q3 (pediatric verbal scale), 51 q3 (central stimulus), 51 q4 (GCS trend) |

New angles not in the bank: custody check logs and worsening while sobering, NT coding for a lifelong nonverbal patient, choosing a central stimulus (sternal rub discouraged), pediatric verbal scale, intussusception as a cause of lethargy, ED-given sedative as false attribution, professional interpreter for collateral, TTP and PLASMIC.

## Sources and verification

- Edlow JA, Rabinstein A, Traub SJ, Wijdicks EFM. Diagnosis of reversible causes of coma. Lancet. 2014. Abstract verified on Europe PMC (PMID 24767707).
- Jones AW. Evidence-based survey of the elimination rates of ethanol from blood. Forensic Sci Int. 2010. Abstract verified on Europe PMC (PMID 20304569): 10 to 20 mg/100 mL/h, 25 to 35 in alcoholics.
- Hawryluk GWJ, Lulla A, and colleagues. Brain Trauma Foundation prehospital TBI guidelines, 3rd edition. Neurosurgery. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10627685/ (GCS before sedatives or paralytics, document pupils, direct transport to CT and neurosurgical care).
- Glasgow Coma Scale FAQ. https://glasgowcomascale.org/faq/ (NT not 1, no total when NT, adult verbal criteria not used in infants).
- Glasgow Coma Scale structured assessment aid. https://www.glasgowcomascale.org/gcs-aid/ (fingertip peripheral, trapezius and supraorbital central, sternal rub strongly discouraged).
- Shah MK, Workeneh B, Taffet GE. Hypernatremia in the geriatric population. Clin Interv Aging. 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4242070/ (isotonic saline essential if unstable, 0.5 mmol/L/h, concentrated urine with intact kidneys).
- Kleizen KJ and colleagues. Neurological symptoms in children with intussusception. Acta Paediatr. 2009. Abstract verified on Europe PMC (17%, lethargy most common).
- Lin-Martore M and colleagues. POCUS for intussusception, meta-analysis. West J Emerg Med. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7390574/ (sensitivity 94.9%, specificity 99.1%).
- Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium. Br J Clin Pharmacol. 2016. Abstract verified on Europe PMC (PMID 26589572).
- Karliner LS and colleagues. Professional interpreters, systematic review. Health Serv Res. 2007. Abstract verified on Europe PMC.
- Bendapudi PK and colleagues. PLASMIC score. Lancet Haematol. 2017. Items and bands checked on the MSD Manuals PLASMIC calculator, which cites the paper.
- Zheng XL and colleagues. ISTH good practice statements for TTP. J Thromb Haemost. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7880820/ (emergency plasma exchange with corticosteroids, platelet transfusion usually avoided).

Also read but not cited: the AHA/ASA 2022 ICH guideline (Greenberg and colleagues) for cerebellar hemorrhage background, and the ISTH 2020 TTP treatment guideline.

## Uncertain, for reviewers

1. loc-51 q2: the point that antimuscarinic toxicity causes tachycardia is standard, but I verified only the Dawson and Buckley abstract, not the passage.
2. loc-52 q4 is tagged KF2 (treating a reversible cause). TTP is not one of the four examples in the key feature, so the tag is a judgment call. The options leave out rituximab and caplacizumab, which ISTH suggests as add-ons, so that no distractor can be defended.
3. loc-49 q2: the key is NT for the verbal score because the patient has never spoken. A reviewer could argue for V1 with a description, but the GCS guidance says not to use 1 for a component that cannot be assessed.
4. loc-50 q3: the pediatric GCS verbal descriptors are not quoted, only the principle from the GCS FAQ. I could not verify the full Borgialli table.
5. Edlow 2014 is cited for history-taking points (48 q1, 49 q1, 50 q2) and the psychiatric cause point (52 q2), from the abstract only.
6. Test note: the bank-wide test "has no near duplicate stems" can go over its default 5 s timeout when the machine is busy. With `--testTimeout 120000` all 128 tests pass, the duplicate check included.

## Revision 1

Response to `docs/reviews/q500b-qa-s87.md` (10 failed items). Before each rebuild I grepped all of `src/samps` and `src/cases` for the new scenario and decision: phenobarbital toxicity, multiple-dose charcoal for phenobarbital, migraine sleep as the false explanation, fluctuating consciousness in intussusception, direct transfer to neurosurgery from a site with no CT, and last-well collateral from a housemate. None is already in the bank as a scenario or key.

| Item | Fix |
|---|---|
| loc-48 q2 | Update reworded so it no longer names the log or the guard: "He asked for water and walked to the toilet at 0100. At 0400 and 0600 he was asleep and snoring and was not woken." Prompt, options, key and explanation unchanged. |
| loc-48 q4 | Rebuilt as the destination decision. The stem now has a regional hospital with CT but no neurosurgery 1 hour away, a neurosurgical centre 2 hours away, and an air ambulance that can fly to either. Key "Transfer to the neurosurgical centre". Distractors: admit here for hourly GCS checks, CT at the regional hospital then decide, hold for a scheduled flight, transfer to the regional hospital with CT. The "until sober" and skull X-ray distractors are gone. Source: BTF 2023 (direct transport to a facility with immediate CT and neurosurgical care, with a stop elsewhere only when direct transport is not possible). |
| loc-49 q3, q4, stem | Hypernatremia, heat wave and shock removed. New cause: chronic phenobarbital toxicity from double dosing in the group home (old 30 mg and new 60 mg tablets both signed as given twice daily for 10 days). The vitals now show hypothermia, a slow respiratory rate and a stable blood pressure. q3 (KF1) asks the most likely cause. q4 (KF2) asks which treatment speeds recovery, keyed on multiple-dose activated charcoal, with urinary alkalinization, forced diuresis, single-dose charcoal and flumazenil as distractors. Source: Proudfoot, Krenzelok, Vale, AACT and EAPCCT position paper on urine alkalinization, 2004 (abstract verified on Europe PMC, PMID 15083932: urine alkalinization is not first line for phenobarbital because MDAC is superior, and urine pH, not diuresis, is the goal). KF2 stays in loc-49. The q4 update does not name the q3 key. Shah 2014 was dropped. q1 and q2 are unchanged. |
| loc-50 q3 | The pediatric verbal scale question is replaced with a KF5 trending question. The update says he is now awake, babbling and reaching for keys, and his father asks to cancel the tests. Key "Record the change and keep trending". Source: Kleizen 2009 (fluctuating consciousness in intussusception). No pediatric GCS descriptors are used. The GCS FAQ is no longer cited in loc-50. |
| loc-51 q1, q2 | Diphenhydramine, physostigmine and Dawson removed. The false minor cause is now his wife's view that he is sleeping off one of his migraines. New q1 (KF4) asks which finding shows this is not his usual migraine. Key "Unable to walk without help". Distractors are the ICHD-3 migraine features in the stem: photophobia, nausea and vomiting, a severe throbbing headache and sleepiness after the attack. Source: ICHD-3, 1.1 Migraine without aura, read at https://ichd-3.org/1-migraine/1-1-migraine-without-aura/. The old stimulus question moves to q2. A new q4 (KF1) asks the most likely cause, keyed on posterior fossa stroke (Edlow). To avoid the s27 cva keys, no question in this SAMP keys CT now or neurosurgery. |
| loc-51 q4, now q3 | Update reworded as asked: "When stimulated again, he brings his hand up past his chin toward the stimulus." GCS 9 (E2 V2 M5) is unchanged. |
| loc-52 stem, q1 | The Dari-speaking Afghan family, the child interpreter and the low mood after migration are gone. She is now brought by a coworker from a night shift and lives with her sister. q1 (KF3) asks which source can best establish when she was last her usual self, keyed on her sister, with the coworker, the shift manager, the family physician's office and the walk-in note as distractors. Karliner was dropped. In q2 the clinic note reads "likely work stress and poor sleep", and the distractors are headaches, long night shifts, poor sleep and pulse. The q3 update now takes the no-cancer and no-transplant history from the provincial health record, so it does not name the q1 key. |

Unchanged: loc-48 q1 and q3, loc-49 q1 and q2, loc-50 q1, q2 and q4, loc-51 stimulus question, and loc-52 q2 key, q3 and q4.

After revision: 20 questions (18 single, 2 menu). Key features: KF1 5, KF2 2 (loc-49 q4, loc-52 q4), KF3 4, KF4 4, KF5 5. Single key positions 3, 3, 4, 4, 4. The key is the longest option in 4 of 18 singles (22%).

Tests: `SAMP_BATCH=s87 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` gives 128 passed. Typecheck is clean.

Uncertain in this revision:
1. loc-49 q4: multiple-dose charcoal through a gastrostomy in a patient with a weak cough. The explanation says his airway must be watched and protected before further doses. Reviewers may want the stem to state an intact gag reflex.
2. loc-49 q3: the point that phenobarbital toxicity causes hypothermia and slow breathing is standard, but none of the cited abstracts states it. It is used only as supporting reasoning.
3. loc-51 q4 keys "Posterior fossa stroke" to cover both hemorrhage and swollen infarct, because the two cannot be told apart without imaging.

## Revision 2

Response to `docs/reviews/q500b-verify-s87.md` (3 failed items). Each fix is applied as written.

| Item | Fix |
|---|---|
| loc-49 q3 | Update reworded as given: "It holds his old phenobarbital 30 mg tablets and the new 60 mg tablets his neurologist ordered twice daily 10 days ago to replace them, and both are signed as given twice daily since then." This supports the 180 mg against 120 mg a day in the explanation. |
| loc-49 q4 | Kept the key "Multiple-dose activated charcoal" and "Urinary alkalinization". The other three are replaced with one treatment for each q3 distractor: "Empiric IV ceftriaxone" (urinary sepsis), "Lactulose by gastrostomy" (hyperammonemia) and "Phenytoin IV loading dose" (nonconvulsive status epilepticus), so the option set no longer gives away the q3 key. In alphabetical order the key is index 2. The update now reads "His cough and gag are now strong, and he is nursed with the head of the bed at 30 degrees." The explanation clause now reads "his airway must be reassessed before each dose". The distractor sentences were rewritten: no infection source, no liver disease or valproate, status epilepticus unlikely on extra anticonvulsant, and alkalinization inferior to MDAC (Proudfoot 2004). |
| loc-51 q1 | Rebuilt to test a finding about his drowsiness, not his headache, using the reviewer's prompt and options. Prompt: "Which of the following findings at 1530 most strongly indicates that his drowsiness is not the sleep that follows his migraines?" Key "Confused when roused to voice". Distractors: "Asleep 2 hours after an antiemetic", "Eyes closed in a darkened room", "Hours of sleep after past attacks", "No vomiting since 1300". Key index 1. To support every option, the stem now says he has not vomited since 1300, fell asleep at about 1330 in a darkened room, and lies with his eyes closed. The explanation cites the ICHD-3 1.1 note that a patient may fall asleep during a migraine and wake up without it (read on ichd-3.org, the page cited). No migraine criterion is quoted, and the old "photophobia" wording is gone. Grepped the bank: no item uses this drowsiness-versus-sleep decision. |

After Revision 2: 20 questions (18 single, 2 menu). Key features: KF1 5, KF2 2, KF3 4, KF4 4, KF5 5. Single key positions 3, 4, 4, 4, 3. The key is the longest option in 4 of 18 singles (22%). Every source cited was opened. `SAMP_BATCH=s87 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` gives 128 passed. Typecheck is clean.

## Revision 3

Response to `docs/reviews/q500b-verify2-s87.md`. Only these three wording changes were made.

| Item | Change |
|---|---|
| loc-51 q4 explanation (the one failed item) | "given 2 hours earlier" changed to "given at 1300", to match the stem timeline. |
| loc-48 q2 explanation (optional suggestion) | Snoring sentence changed to: "Snoring at the 0400 check fits sleep, alcohol or a head injury, so it does not separate them." |
| loc-51 q3 update (optional suggestion) | "brings his hand up past his chin toward the stimulus" changed to "brings his hand above his clavicle toward the stimulus". The meaning is kept: this is still localizing (M5), so the GCS 9 key and the explanation are unchanged. |

No keys, options or other text changed. Tests: `SAMP_BATCH=s87 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` (result below in the hand-back).
