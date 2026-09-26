# Sweep 3 rebuilds, writer sw3-3

Batches s38 (first-trimester-bleeding) and s47 (pre-eclampsia). Four SAMPs rebuilt in place. Each keeps its id, topic, question count and key features. Each has a new title, a new patient story and new keyed decisions. Versions are bumped by 1 and reviewed stays false. Nothing was committed.

## Rebuilt SAMPs

| Id | Old scenario | New scenario | Keyed decisions (key feature) | Sources | Similarity check, top 5 |
|---|---|---|---|---|---|
| first-trimester-bleeding-25 (v4) | Gestational carrier with spotting at 8 weeks, 12 mm embryo without a heartbeat, scan alone diagnoses the loss, support before discharge | A woman in provincial custody, brought by correctional officers with spotting and left cramps at about 7 weeks, no scan yet, past admission for pelvic inflammatory disease. Later an empty uterus at hCG 2900 IU/L, then a failing pregnancy of unknown location | q1 Pelvic inflammatory disease is the history feature that raises ectopic risk (KF2). q2 A viable intrauterine pregnancy is still possible at hCG 2900 IU/L with no sac, so methotrexate on one value is unsafe (KF4). q3 A written plan to the centre's health unit with weekly hCG, return signs and mental health support (KF6) | Crochet JAMA 2013 (already in file). Doubilet and Benson, J Ultrasound Med 2011, doi 10.7863/jum.2011.30.12.1637 (new, abstract read via PubMed). SOGC Guideline 460, 2025 (already in file, text read) | ftb-17 0.38, ftb-27 0.35, ftb-03 0.30, ftb-04 0.29, ftb-20 0.28 |
| pre-eclampsia-17 (v2) | Rural site 3 hours from the perinatal centre, 34 weeks, sparkles and clonus, nifedipine 10 mg, magnesium 4 g then 1 g/hour, transfer | A 38-year-old G4P3 at 27 weeks with 2 days of no fetal movement, new severe BP, normal PCR and labs, fetal death confirmed on formal ultrasound | q1 Pre-eclampsia, because fetal death is uteroplacental dysfunction under ISSHP even with PCR 22 mg/mmol and normal labs (KF2). q2 No antenatal corticosteroids after fetal death (KF4). q3 Birth once BP is controlled, since fetal death is an indication for delivery (KF4). q4 Continue nifedipine after birth and check BP on days 3 to 7 (KF4) | ISSHP 2021, Pregnancy Hypertens 2022, doi 10.1016/j.preghy.2021.09.008 (full text read) | pe-32 0.29, pe-36 0.28, pe-21 0.26, pe-22 0.25, pe-31 0.23 (old version) |
| pre-eclampsia-30 (v2) | 29 weeks with platelets 118 in a hospital without a NICU, betamethasone and in utero transfer | A woman at 37 weeks with stable generalized myasthenia gravis, headache, severe BP and PCR 96 mg/mmol in a tertiary department | q1 Phenytoin rather than magnesium sulfate for seizure prophylaxis (KF4). q2 Aim for vaginal birth after induction, since myasthenia is not a reason for caesarean (KF4). q3 Examine the newborn for transient myasthenic weakness (KF4) | Sanders and colleagues, International consensus guidance for management of myasthenia gravis, Neurology 2016, doi 10.1212/WNL.0000000000002790 (new, full text read in PMC4977114) | pe-34 0.32, pe-21 0.31, pe-32 0.27, headache-06 0.24, pe-27 0.22 |
| pre-eclampsia-31 (v2) | Right upper quadrant and flank pain put down to pyelonephritis, labs show pre-eclampsia with liver involvement, admit | A woman with IgA nephropathy and chronic hypertension at 30 weeks with a dull headache a week after a nifedipine dose increase, BP at her usual treated level, proteinuria present since 14 weeks | q1 Superimposed pre-eclampsia is the diagnosis to exclude before nifedipine headache (KF1). q2 Platelets of 132 x 10^9/L confirm it, while a BP rise, a rise in pre-existing proteinuria, uric acid and 3+ reflexes do not (KF2). q3 Ultrasound for growth, fluid and umbilical Doppler, not a biophysical profile (KF4) | ISSHP 2021 (full text read) | pe-21 0.27, pe-32 0.27, pe-37 0.26, pe-26 0.23, pe-36 0.23 |

Similarity notes. Every printed card was read. No printed SAMP tells the same patient story. For ftb-25 the closest cards are pregnancy of unknown location stories (ftb-03, ftb-10, ftb-17, ftb-28). None is set in custody, none keys a risk factor from pelvic infection, none keys withholding methotrexate at an hCG above 2000 IU/L, and none keys routing the follow-up plan to an institution's clinicians. An earlier draft for ftb-25 (a falsely negative urine test in a "painful period") was dropped because it retold signed ftb-02 and keyed its "ectopic at any hCG level" point. For s47 the drafts avoid the signed clusters (headache-06, pe-04, pe-10, seizures-03 and ftb-11, pe-15) and the pe-08 rural twin transfer story. The pe-31 rebuild stays clear of right upper quadrant pain given a benign label.

## Fixes

None. Task 2 does not apply in sweep 3.

## Checks

- SAMP_BATCH=s38 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 456 passed.
- SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 476 passed.
- npx tsc --noEmit -p .: clean.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4503 passed.

## For the physician

- ftb-25 q2 rests on Doubilet and Benson 2011. In their series a live birth at term followed an hCG of 4336 IU/L with no sac on the first scan. The key says a viable intrauterine pregnancy "may still" be present at 2900 IU/L. It does not claim that it is likely.
- ftb-25 q3 says the plan goes to the centre's health unit, not the officers. The officers wait outside for the examination at her request. Please confirm the wording on custody and privacy suits Canadian practice.
- pe-30 q1 keys phenytoin in place of magnesium sulfate. The myasthenia consensus names barbiturates or phenytoin for eclampsia in myasthenia and gives no dose, so the option carries no dose. Please confirm you accept an undosed key here.
- pe-17 q1 keys pre-eclampsia on the ISSHP definition, which counts intrauterine fetal death as uteroplacental dysfunction. SOGC 426 wording on this point was not checked, because the full SOGC text was not available.
- pe-31 q2 uses the ISSHP platelet threshold of below 150 x 10^9/L. Some references use lower thresholds. The stem gives a fall from 246 to 132 x 10^9/L so the change is clear.
- pe-31 q1 quotes ISSHP that nifedipine may cause maternal headache. ISSHP states this for oral nifedipine in its severe hypertension table.
