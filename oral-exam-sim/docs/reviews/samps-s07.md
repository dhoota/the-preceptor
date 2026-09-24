# SAMP batch s07 review: critical appraisal and decreased level of consciousness

Reviewer role: adversarial Canadian emergency physician, clinical epidemiologist and CCFP-EM SAMP examiner. Scope: `src/samps/s07/` (critical-appraisal.ts, loc.ts, helpers.ts, index.ts). All SAMPs remain `reviewed: false`. Ids are unchanged. Typecheck is clean for s07 and `SAMP_BATCH=s07 npx vitest run tests/samps.test.ts` passes (94 tests).

Method. Every number in the critical appraisal SAMPs was recomputed with a Python script. That covered sensitivity, specificity, LRs, post-test probability, predictive values at two prevalences, ARR, RRR, NNT, NNH, the odds ratio, the Clopper-Pearson interval, kappa, the confidence interval implied by each trial size, and worst case loss to follow-up. A probe test ran typical right and wrong answers through `markShort` to check the keys. Every journal citation was checked against PubMed (E-utilities) and a DOI URL was added.

## Critical appraisal

### Recomputed numbers

| SAMP | Quantity | Stated | Recomputed | Result |
|---|---|---|---|---|
| 01 | Sn, Sp | 80%, 90% | 0.80, 0.90 | Correct |
| 01 | LR+, LR- | 8, 0.22 | 8.0, 0.222 | Correct |
| 01 | Post-test, pretest 20% | 5% | 5.3% | Correct |
| 01 | PPV (distractor) | 73% | 72.7% | Correct |
| 02 | ARR, RRR, NNT, NNH | 8%, 40%, 13, 50 | 0.08, 0.40, 12.5, 50 | Correct |
| 03 | Sn, Sp, CT rate | 97.5%, 35%, 67% | 0.975, 0.35, 858/1280 = 0.670 | Correct |
| 03 | 95% CI for 78/80 | 91.3 to 99.7 | 91.26 to 99.70 (exact) | Correct |
| 05 | Odds ratio | 2.1 | 2.11 (the ratio of proportions is 2.0) | Correct |
| 05 | NNH at 1 in 10,000 | about 9,100 | 9,000 (OR 2.11) to 9,091 (OR 2.1) | Correct, both accepted |
| 06 | LR+, LR- | 18, 0.11 | 18.0, 0.105 | Correct |
| 06 | Post-test at 10% and 50% | 1%, 9.5% | 1.2%, 9.5% | Correct |
| 07 | CI for 2.0 point difference | -1.5 to 5.5 | With 800 enrolled and 82% follow-up: about -2.8 to 6.8 | Inconsistent. Fixed |
| 08 | ARR, NNT | 4%, 25 | 0.04, 25 | Correct |
| 09 | LR- at two cutoffs | 0.07, 0.26 | 0.071, 0.263 | Correct |
| 09 | FN, FP | 1, 234 | 1, 234 | Correct |
| 10 | Composite NNT | 17 | 16.7 | Correct. p = 0.03 also fits 500 per arm |
| 11 | ARR, RRR, NNT, NNH, individual NNT | 1%, 25%, 100, 20, 25 | Same | Correct |
| 12 | NPV, PPV at 10% | 99.8%, 21.6% | 99.82%, 21.57% | Correct |
| 12 | NPV at 40% | 98.9% | 98.90% | Correct |
| 13 | Po, Pe, kappa | 0.70, 0.545, 0.34 | 0.70, 0.545, 0.341 | Correct |
| 13 | Sensitivity with 6 missed | 90.9% | 60/66 = 0.909 | Correct |
| 13 | Worst case (all 90 lost positive) | Not given | 60/150 = 40% | Added |
| 13 | Exact CI for 60/60 | Not given | 94.0 to 100 | Noted only |
| 14 | CI, p, NNT | -10 to 36, 0.26, 8 | -9.5 to 35.5, 0.26, 7.7 | Correct |

### critical-appraisal-01: A bedside scan for right lower quadrant pain
Verdict: Corrected
- q3: before, the LR keys were bare "8" and "0.22". After, each value must be labelled (positive, LR, PLR or likelihood ratio). This stops a stray "8" in another line from scoring.

### critical-appraisal-02: A regional block trial in older adults
Verdict: Corrected
- q4: added a key item. Even the upper confidence limit (0.9 points) is below the minimal clinically important difference. Before, that correct answer did not score.

### critical-appraisal-03: A new rule for older adults who fall
Verdict: Corrected
- q3: before, the "more CT" item matched the bare word "increase" and a bare "67". Almost any sentence scored, for example "increased risk of missed injury". After, it needs "increase CT", "more imaging", "CT rate", "67%" or similar.
- q5 (writer flag): before, "Most Canadian practice images older anticoagulated patients". I could not verify that as a Canadian standard. The CCHR excluded anticoagulated patients, and international guidance on anticoagulated head injury has changed recently. After, "Many Canadian emergency physicians have a low threshold to image... although practice varies." The keyed option is unchanged and correct. The rule does not apply to her.

### critical-appraisal-04: Pooling trials for a kidney stone medication
Verdict: Accurate. The design, I squared, funnel plot and subgroup credibility criteria are correct.

### critical-appraisal-05: An antibiotic class and a rare vascular event
Verdict: Accurate. The OR and NNH are correct. Nitrofurantoin is first line for uncomplicated cystitis. One minor note: a matched design strictly calls for a matched (conditional) odds ratio. The crude OR is fine for teaching.

### critical-appraisal-06: Two patients with a swollen calf
Verdict: Corrected
- q1: LR keys now need a label, as in 01.
- q3: before, the matches included bare "9" and "0.1". So "LR- 0.1 so post-test 1%", which is wrong, scored. After, "0.1" and bare "9" are removed and "10 percent", "9 percent" and "1 in 10" are added. A bare "10" is still accepted.
- q4: before, the unacceptable phrases "excluded" and "ruled out" flagged correct plans such as "repeat US unless DVT excluded". A first fix used "no further imaging", but that phrase contains a negation word and would flag the correct plan "negative D-dimer, no further imaging". After, it flags only "discharge ... DVT excluded" or "discharge ... DVT ruled out".

### critical-appraisal-07: One dose or five days
Verdict: Corrected
- Stem: before, 800 adults with 82% follow-up. A 12% vs 10% difference then has a 95% CI of about -2.8 to 6.8, not the stated -1.5 to 5.5. After, 1,500 adults (about 615 analysed per arm), which gives exactly -1.5 to 5.5. The teaching point is unchanged: the upper limit crosses the 5 point margin, so the result is inconclusive.

### critical-appraisal-08: Chart review of antibiotic timing
Verdict: Accurate. The crude OR (about 0.74) is reasonably attenuated to an adjusted 0.82.

### critical-appraisal-09: A new blood test for a febrile child
Verdict: Corrected
- q4: added common wordings of the single false negative ("1 negative", "FN 1").

### critical-appraisal-10: A heart failure trial stopped early
Verdict: Accurate. The components add up to the composite. The interaction interpretation is correct.

### critical-appraisal-11: An antiviral for an older man with influenza
Verdict: Accurate.

### critical-appraisal-12: A single troponin on arrival
Verdict: Corrected
- q2: removed "99%" from the NPV at 40% prevalence. Rounding 98.9% to 99% hides the teaching point, and 99% is also the sensitivity.
- q3: a bare "1" still scores, since that is the natural answer. Added an unacceptable item for "10 per 1,000" (1% of everyone tested, a common error). Before, "10 per 1,000" scored because "1,000" splits into the words "1" and "000".
- q3 explanation (writer flag, about 1% accepted miss rate): before, it compared "1 per 1,000 tested" with a 1% miss rate. That mixes denominators. After, it states that 1 of the 541 ruled out patients has MI, a miss rate of about 0.2%. That is compared with the roughly 1% 30 day risk that many emergency physicians say they accept. The survey behind that figure is real (Than M, et al. Int J Cardiol 2013, PubMed 23084108, https://doi.org/10.1016/j.ijcard.2012.09.171). I could read only the citation, not the full results, so the text says "many" and does not cite a percentage of respondents.

### critical-appraisal-13: Agreement and follow-up in a back pain study
Verdict: Corrected
- q3 explanation: added the true worst case. If all 90 patients lost to follow-up had serious pathology, sensitivity is 60/150 = 40%.

### critical-appraisal-14: A small negative migraine trial
Verdict: Accurate. The stated CI and p value match 32 per arm. Even the planned 30 point difference would need about 38 per arm, so the trial was underpowered for its own assumption.

### critical-appraisal-15: Splint or cast for a child's wrist
Verdict: Corrected
- FORCE: the q4 update loosely described FORCE as an unnamed trial and cited it, and said "no increase in complications". After, it names FORCE honestly with facts verified from the abstract: Lancet 2022, 965 children aged 4 to 15, 23 UK hospitals, the offer of a soft bandage with immediate discharge vs rigid immobilization with follow-up per local protocol, pain equivalent at 3 days, and no difference in pain or function over 6 weeks. The explanation adds a note that it is a UK trial and applicability should be checked. The file header comment now names FORCE as the only real study.
- q1: removed the bare labels "population", "intervention", "comparison" and "outcome". Before, "Population: adults" scored. The O item no longer matches bare "return".
- q4: the return item before matched bare "return", so "return to fracture clinic in 1 week" scored. After, it needs "return if", "resume activity", "as tolerated" or similar. Added an unacceptable item for routine fracture clinic follow-up or repeat X-ray. The key text now reads "No routine specialist follow-up and no repeat X-ray" so that negation handling works.

All other critical appraisal SAMPs label their studies as fictional in the stem.

## Decreased level of consciousness

### loc-01: Found on a bench in November
Verdict: Corrected
- q1: before, the match was a bare "9". After, the GCS components are required (E2 V2 M5, E2V2M5 or "eye 2 verbal 2 motor 5"), as the prompt asks. The same shared `gcs()` helper is used in loc-05, 07, 11 and 14.
- q2: before, an item said "Older age ... and hypothermia" and matched "age" and "temperature". 35.9°C is not hypothermia (under 35°C), and age does not argue against intoxication. After, the item is "No glucose checked yet, so hypoglycemia has not been excluded".
- q4: before, the CT item was a bare "ct", so "delay CT until sober" scored. After, it needs "CT head", "urgent CT" or similar.

### loc-02: Unresponsive in a mall washroom
Verdict: Corrected
- q3 (writer flag): two thirds of the reversal dose per hour is correct (Goldfrank). But 2/3 x 0.4 mg = 0.27 mg/h, not the 0.25 mg/h in the key text. The text and explanation now show the calculation. 0.25 to 0.3 mg/h is still accepted.

### loc-03: Hard to wake this morning
Verdict: Corrected (minor)
- q2: accepts IO D10. Glucagon 1 mg IM or SC is correct. The dangerous flag for oral glucose in a patient who only mumbles is fair.
- Octreotide 50 mcg SC every 6 hours for adults (writer flag) is consistent with standard toxicology references.

### loc-04: Fever and new confusion in a retired engineer
Verdict: Corrected
- q2 vancomycin (writer flag): 15 to 20 mg/kg per dose (IDSA 2004 gives 30 to 45 mg/kg/day divided every 8 to 12 hours in adults). The key text now says a 25 to 30 mg/kg load is also accepted. The CPS pediatric dose (60 mg/kg/day divided every 6 hours, which is 15 mg/kg per dose) does not apply to this adult. The other doses are correct: ceftriaxone 2 g, ampicillin 2 g, dexamethasone 10 mg and acyclovir 10 mg/kg.
- q2 dangerous flag: before, the bare phrases "wait", "after ct" and "after lp" zeroed the whole question for a correct line such as "Dexamethasone 10 mg IV, LP after CT". After, the flag needs "antibiotic after CT/LP", "wait for CT/LP" or "delay antibiotic".
- q4: the prompt asks for a test to confirm. Only CSF HSV PCR confirms, so MRI and EEG were removed from the key. They are still named in the explanation as supportive. The PCR item now comes before the diagnosis item. Before, a candidate who wrote the PCR line first lost a point.

### loc-05: Not waking up after a seizure
Verdict: Corrected
- q1: GCS components required.
- q4: bare "ct" tightened.
- The doses are correct: lorazepam 0.1 mg/kg up to 4 mg, and levetiracetam 60 mg/kg up to 4,500 mg (ESETT). The low distractor doses of fosphenytoin and valproate are plausibly wrong.

### loc-06: Confused after a cold
Verdict: Corrected (minor)
- q1 (writer flag): 3% saline 150 mL over 20 minutes (European 2014) or 100 mL over 10 minutes (US 2013) is correct. So is 2 mL/kg, which the European guideline mentions as a weight based option.
- q2 (writer flag): 8 to 10 mmol/L in 24 hours is accepted. A bare 8 or 10 is acceptable here because "12" is caught as unacceptable first. Before, the dangerous phrase was a bare "20", which could fire on unrelated text. After, it is "20 mmol". "15" is still dangerous.
- q4: the desmopressin clamp with D5W for a water diuresis is appropriate.

### loc-07: Brought in by police after a bar fight
Verdict: Corrected
- q2 (writer flag, CCHR logic): the logic holds. He had witnessed loss of consciousness and a GCS of 13, so he is inside the CCHR population (GCS 13 to 15). A GCS below 15 at 2 hours after injury is a high risk criterion. At 0200 he is 2.5 hours out, so CT is indicated. Intoxication was not a CCHR exclusion. The explanation now spells out both steps.
- The ethanol conversion is correct: 18 mmol/L x 4.6 = 83 mg/dL.
- q3: GCS components required. Before, a bare "10" scored.
- q4 key feature: managing a known epidural hematoma with shift is not loc 1 (the differential). It is remapped to multiple-trauma 5 (act on an evolving complication), and `alsoTopics: ["multiple-trauma"]` was added.

### loc-08: A drowsy man on a February morning
Verdict: Corrected
- q3: removed "hyperbaric" as an accepted initial treatment. Initial treatment is 100% oxygen by non-rebreather.
- q4 (writer flag, HBO criteria): the criteria match Hampson 2012. They are loss of consciousness, neurological signs, cardiac ischemia, severe acidosis, carboxyhemoglobin of 25% or more, and pregnancy at a lower threshold. Before, bare "carboxyhemoglobin" or "COHb" scored the level item without any threshold. After, 25 is required. Added Weaver risk factors (age 36 or older, exposure of 24 hours or more) as an accepted item.

### loc-09: Dizzy, then sleepy
Verdict: Corrected
- q3 timing: before, the update put him 1 hour 50 minutes from last known well, only 5 minutes after his 1545 arrival, with CT and CTA already done. After, it is 1610, 2 hours 10 minutes.
- q3 (writer flag): tenecteplase 0.25 mg/kg (maximum 25 mg) and alteplase 0.9 mg/kg (maximum 90 mg) match the Canadian Stroke Best Practice Recommendations.
- q4 key feature: BP lowering before thrombolysis was labelled loc 2. It is now cva 3 (assessing thrombolysis risk).
- q5: bare "ct" tightened.

### loc-10: A sleepy toddler after a visit
Verdict: Corrected
- q2 (writer flag): D10W 2 to 5 mL/kg is correct. For 12 kg that is 24 to 60 mL, now stated. The match now accepts D10, D10W or dextrose 10% at 2, 3, 4 or 5 mL/kg, and weight based volumes from 24 to 60 mL.
- q3 (writer flag): octreotide 1 mcg/kg is consistent with toxicology references.

### loc-11: Less responsive than usual
Verdict: Corrected
- q4: GCS 11 (E3 V3 M5) and 14 (E4 V4 M6) are correct. Components are now required. Before, a bare "11" or "14" scored.

### loc-12: A week of thirst
Verdict: Corrected
- Effective osmolality is 2 x 149 + 52 = 350. That is correct, and 378 including urea is correctly rejected.
- q2 (writer flag): insulin 0.05 to 0.1 units/kg/h after fluids, with K at least 3.3, is appropriate. Before, bare "empagliflozin" and "SGLT2" scored, so "continue empagliflozin" earned a point. After, a hold, stop or discontinue verb is required. Added "NS", "saline" and "L/h" wordings to the fluid item.

### loc-13: Sleepy again, says his sister
Verdict: Corrected
- q3 explanation: before, "A normal ammonia does not exclude hepatic encephalopathy". AASLD/EASL 2014 says a normal ammonia in suspected HE should prompt re-evaluation. After, "A high ammonia neither confirms HE nor excludes a bleed... a normal level should prompt a search for another cause."
- q5: the prompt asks for the dose and goal, but bare "lactulose" scored. The key now needs lactulose with a dose (20, 25 or 30) or a stool goal.

### loc-14: Collapsed in the garden
Verdict: Corrected
- q1: GCS components required.
- q4 (writer flag): a target of about 140 with 130 to 150 accepted fits AHA/ASA 2022. That guideline says a target of 140 is reasonable when SBP is 150 to 220, and lowering below 130 is potentially harmful. Before, bare "100", "110" and "120" were unacceptable and could fire on dose lines. After, it needs "SBP 120", "below 120", "120 mmHg" or similar.
- q5: bare "ct" tightened.

### loc-15: Newspapers piling up
Verdict: Accurate. Levothyroxine 200 to 400 mcg IV load (ATA 2014) with hydrocortisone 100 mg IV is correct (writer flag). The GCS of 8 is correct. Esophageal temperature is the right probe.

### Key feature coverage
All 5 key features of both topics remain covered (test passes). Changes: loc-07 q4 moved from loc 1 to multiple-trauma 5, and loc-09 q4 from loc 2 to cva 3.

## Sources verified

All journal citations were confirmed on PubMed. DOI URLs were added to the source objects.
- STARD 2015. BMJ 2015. https://doi.org/10.1136/bmj.h5527
- CONSORT 2010. BMJ 2010. https://doi.org/10.1136/bmj.c332
- CONSORT noninferiority extension. JAMA 2012. https://doi.org/10.1001/jama.2012.87802
- PRISMA 2020. BMJ 2021. https://doi.org/10.1136/bmj.n71
- Stiell and Wells, decision rule standards. Ann Emerg Med 1999. https://doi.org/10.1016/s0196-0644(99)70309-4
- STROBE. Lancet 2007. https://doi.org/10.1016/S0140-6736(07)61602-X
- FORCE, Perry DC et al. Lancet 2022, 400:39 to 47. https://doi.org/10.1016/S0140-6736(22)01015-7
- GCS at 40 years. Lancet Neurol 2014. https://doi.org/10.1016/S1474-4422(14)70120-6
- BTF 4th edition. Neurosurgery 2017. https://doi.org/10.1227/NEU.0000000000001432
- IDSA meningitis 2004. https://doi.org/10.1086/425368
- IDSA encephalitis 2008. https://doi.org/10.1086/589747
- AES status epilepticus 2016. https://doi.org/10.5698/1535-7597-16.1.48
- ESETT. NEJM 2019. https://doi.org/10.1056/NEJMoa1905795
- European hyponatraemia guideline 2014. https://doi.org/10.1530/EJE-13-1020
- US hyponatremia expert panel 2013. https://doi.org/10.1016/j.amjmed.2013.07.006
- Canadian CT Head Rule. Lancet 2001. https://doi.org/10.1016/s0140-6736(00)04561-x
- Hampson CO practice recommendations 2012. https://doi.org/10.1164/rccm.201207-1284CI
- AHA/ASA ICH 2022. https://doi.org/10.1161/STR.0000000000000407
- Surviving Sepsis 2021. https://doi.org/10.1097/CCM.0000000000005337
- AASLD/EASL HE 2014. https://doi.org/10.1002/hep.27210
- ATA hypothyroidism 2014. https://doi.org/10.1089/thy.2014.0028
- Accidental hypothermia. NEJM 2012. https://doi.org/10.1056/NEJMra1114208

The following are real and are cited plainly, with no URL added: the Users' Guides 3rd edition, Straus EBM 5th edition, Goldfrank 11th edition, GINA, the Thrombosis Canada DVT diagnosis guide, the CPS bacterial meningitis statement, Diabetes Canada 2018 (hypoglycemia and hyperglycemic emergencies) and the Canadian Stroke Best Practice Recommendations.

Originality: compared with the CFPC sample SAMP text. There is no overlap in scenarios or wording.

## Open questions for the physician

1. critical-appraisal-03 q5. Is "many Canadian emergency physicians have a low threshold" the right framing, or do you want a specific Canadian reference for imaging anticoagulated older adults with head injury?
2. critical-appraisal-12 q3. Confirm you are comfortable quoting a roughly 1% accepted 30 day risk (Than 2013 survey) without a specific citation in the SAMP.
3. loc-06 q2. "12 mmol/L" is marked unacceptable (not dangerous). The US 2013 panel allows 10 to 12 in 24 hours for patients at average risk. At 79 on a thiazide she is arguably higher risk. Keep or accept?
4. loc-10 q2. Undiluted D50W in a 2-year-old is flagged dangerous, which zeroes the question. Confirm you want the dangerous flag rather than plain unacceptable. D25W is neither accepted nor flagged.
5. loc-14 q4. SBP targeting in ICH stays mapped to loc 2 (treat reversible causes). No CFPC key feature fits it well. Accept the mapping or move the question.
6. loc-04 q2. Vancomycin keys require a weight based dose. A fixed adult dose such as "vancomycin 2 g" does not score. Decide whether to accept fixed doses.
7. loc-13 q2. A glucose of 3.2 mmol/L is treated as hypoglycemia needing IV dextrose. That is reasonable in a confused cirrhotic patient, but confirm.

## Summary

Critical appraisal: 10 of 15 SAMPs corrected, 5 accurate. All but one computed value was right. The real numeric error was critical-appraisal-07, where the stated CI was impossible for 800 patients, so the trial is now 1,500. FORCE is now cited honestly with verified facts. Most fixes tightened answer keys that were too loose, such as bare LR values, bare "increase", PICO labels and bare "return", and added the worst case sensitivity of 40%.

Decreased level of consciousness: 14 of 15 corrected, 1 accurate. The most serious problems were these:
- A dangerous flag in loc-04 that would zero a correct answer such as "LP after CT".
- Bare GCS totals and bare "ct" that scored wrong answers.
- Bare "empagliflozin" that rewarded "continue empagliflozin".
- An impossible CT timeline in loc-09.
- A wrong naloxone infusion figure (0.25 instead of 0.27 mg/h).
- A mislabelled "hypothermia" at 35.9°C.
- A misstatement about normal ammonia.

All writer flagged doses and thresholds were checked and are acceptable as keyed.
