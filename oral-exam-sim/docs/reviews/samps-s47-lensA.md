# Review of SAMP batch s47 (pre-eclampsia), Lens A

Reviewer lens: A, clinical truth.

Files in scope: `src/samps/s47/pre-eclampsia.ts` (pre-eclampsia-16 to pre-eclampsia-38), `src/samps/s47/review-extra.ts` (pre-eclampsia-39, pre-eclampsia-40) and `src/samps/s47/index.ts`. I checked each SAMP on its own, question by question, against the stem and the cited source. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after the edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s47` prints nothing. `SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passed 476 of 476.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| pre-eclampsia-39 (extra) | q1 | correct | Key was index 3, "Pulmonary embolism". The explanation and the case both describe a ruptured liver hematoma, and the explanation rejects PE with a normal O2 sat. Key set to index 1, "Hepatic capsule rupture" | high |
| pre-eclampsia-40 (extra) | q2 | explanation | The last sentence invented a lab value ("serum lactate of 7.8 mmol/L seen on the first blood gas") that the case never gives. A lactate also cannot confirm pre-eclampsia. Sentence removed | high |
| pre-eclampsia-28 | stem, q1 update | stem | She came in with a headache. SOGC 2022 counts new-onset headache as an adverse condition that makes gestational hypertension into pre-eclampsia (pre-eclampsia-36 q3 keys exactly that). So q2's label of gestational hypertension and the outpatient key contradicted the batch's own teaching. The headache was removed. She now comes in after home readings, with no headache, and the update says "She remains well" | high |
| pre-eclampsia-21 | q1 | explanation | Martin 2005 was called "the largest case series". It is a series of 28 women, and "almost all" and "few" were vague. Replaced with the published figures: 23 of the 24 women measured just before their stroke had a systolic of 160 mmHg or more, and only 3 had a diastolic of 110 mmHg or more (PubMed abstract) | medium |
| pre-eclampsia-29 | q4 | explanation | The reason given for rejecting tranexamic acid ("no coagulopathy to correct") was wrong. TXA in intracerebral hemorrhage is not given to correct a coagulopathy. It was rejected because a large trial showed no gain in functional outcome. Reworded | medium |
| pre-eclampsia-24 | q3 | explanation | Said plasma exchange "removes the inhibiting antibody" as if every case were acquired. Scully 2014 found that congenital TTP presents more often than acquired TTP in pregnancy. Now reads "in acquired disease" | medium |
| pre-eclampsia-20 | q2 | explanation, source | The age threshold of 35 is the US (ACOG) figure. ISSHP puts age above 40 among its moderate-risk factors. Now reads "below the age thresholds that guidelines list", and the question now cites ISSHP Table 5, which lists all four keyed risk factors as high risk. Uncited ACOG 222 removed from this SAMP's sources | medium |
| pre-eclampsia-35 | q1 | explanation, source | Same US age threshold of 35. Reworded the same way, and the citation moved to ISSHP Table 5, where SLE and APS are high-risk factors. ACOG 222 removed from this SAMP's sources | medium |
| pre-eclampsia-21 | q3 | explanation | "SOGC advises against measuring proteinuria again" could not be checked in the SOGC text I could reach. ISSHP says it directly ("Once confirmed as significant, proteinuria testing does not need to be repeated"). The claim is now attributed to ISSHP | low |
| pre-eclampsia-17 | q3 | explanation | Said the Magpie and Eclampsia Trial regimen is "4 g IV over 20 minutes". The trials loaded over 5 to 15 minutes. The 20-minute infusion comes from ISSHP Table 9. Now attributed to ISSHP | low |
| pre-eclampsia-17 | q4 | explanation | "Betamethasone may be started before 34 weeks and 6 days" misstated the SOGC 364 window, which runs up to 34 weeks and 6 days inclusive. Reworded | low |
| pre-eclampsia-22 | q4 | prompt | The prompt asked which "blood product" was best, but vitamin K and protamine are not blood products. Changed to "treatments" | low |
| batch | none | sources | `S.sogc376` (SOGC 376) and `S.magpie` (Magpie 2002) were defined but no SAMP cited them. Removed | high |

## Key changes

- pre-eclampsia-39 q1 (extra): index 3 (Pulmonary embolism) changed to index 1 (Hepatic capsule rupture). The key contradicted its own explanation and the case.

There are no other key changes. I checked every other key under SOGC 2022, ISSHP 2021 and the cited sources, and each holds.

## Writer's doubts, resolved

- SOGC 426 doses. The doses are cited to ISSHP 2021, which I read in full (Tables 8 and 9). Labetalol IV is 10 to 20 mg, then doubled, then 40 to 80 mg every 30 minutes, to a maximum of 300 mg per course. Nifedipine 10 mg is swallowed whole. Methyldopa for urgent control is 1 000 mg. Hydralazine starts at 5 mg with a maximum of 20 mg. Magnesium is 4 g IV over 20 minutes, then 1 g/hour. All questions match (17 q2 and q3, 21 q2, 29 q3, 33 q1).
- PROGNOSIS. A cutoff of 38 and an NPV of 99.3% for no pre-eclampsia within 1 week are confirmed, in women at 24+0 to 36+6 weeks.
- ADAMTS13 below 10%. Not stated in the Scully abstract, but it is the standard diagnostic threshold for TTP. Kept.
- Martin 2005. Fixed as above.
- Atenolol and birth weight, codeine in breastfeeding, PPCM timing. All are standard and correct as written. Kept.
- Tintinalli-only claims (22, 23 q2, 34 q2, 29 q2, 38 q2). All are standard emergency medicine teaching that the cited chapter covers. None is false.
- 27 q1. ISSHP Table 9 lists urine output below 30 mL/hour for 4 hours as a toxicity warning and says "If toxicity is suspected, cease the MgSO4 infusion and take blood for serum Mg level". The key holds.
- 27 q2. ISSHP: about 80 mL/hour, and the largest volume-expansion trial found more pulmonary edema. Confirmed.
- 36 q3. The Ontario midwives' CPG 15 (2023), quoting SOGC 2022, lists new-onset headache as an adverse condition. The key holds. This is what forced the fix to 28.
- 35 q2. ISSHP: before viability, expectant care carries perinatal mortality above 80% and maternal complications in 27 to 71%, and ending the pregnancy should be discussed. The wording matches.
- 32 q1. SOGC advises discussing initiation of delivery at 34+0 to 35+6 weeks (confirmed through the Ontario midwives' CPG quoting SOGC 2022).
- 18 q4. ISSHP Table 9 advises continuous CTG from 26 weeks during magnesium. Confirmed.
- 19 q1 (large cuff at 33 cm or more), 19 q4 (reduce therapy at a diastolic of 80 mmHg or less), 26 q1 (NSAIDs only with no AKI or risk factor such as PPH), 26 q3 (days 3 to 7), 31 q3 (assess and manage in hospital), 32 q3 (nifedipine alongside magnesium) and 33 q3 (three drug classes, platelets below 50): all confirmed word for word in ISSHP.

## Sources verified

- Magee LA et al. SOGC Guideline No. 426. J Obstet Gynaecol Can. 2022. Europe PMC record PMID 35577426 (authors, title and year confirmed). The full text was not reachable. Definitions, delivery timing and ASA were checked in the Ontario midwives' CPG 15 (2023), which quotes SOGC 2022: https://www.ontariomidwives.ca/sites/default/files/2023-05/CPG-HDP-2023-PUB.pdf
- Magee LA et al. ISSHP 2021. Pregnancy Hypertens. 2022, 27:148-169. Full PDF read: https://preeclampsia.org/frontend/assets/img/advocacy_resource/ISSHP2021.pdf
- ACOG Practice Bulletin No. 222. Obstet Gynecol. 2020. PMID 32443079.
- ACOG Committee Opinion No. 767. Obstet Gynecol. 2019. PMID 30681541 (treatment within 30 to 60 minutes confirmed).
- ACOG Practice Bulletin No. 207. Obstet Gynecol. 2019. PMID 30801473.
- ACOG Clinical Practice Guideline No. 3. Obstet Gynecol. 2022. PMID 35576364.
- Skoll A et al. SOGC No. 364. J Obstet Gynaecol Can. 2018. PMID 30268316.
- Magee LA et al. CHIPS. N Engl J Med. 2015, 372:407-417. PMID 25629739.
- Zeisler H et al. PROGNOSIS. N Engl J Med. 2016. PMID 26735990.
- Martin JN Jr et al. Obstet Gynecol. 2005. PMID 15684147.
- Scully M et al. Blood. 2014. PMID 24859360.
- Sibai BM. Obstet Gynecol. 2004, 103:981-991. PMID 15121574.
- Eclampsia Trial Collaborative Group. Lancet. 1995, 345:1455-1463. PMID 7769899.
- Tintinalli's Emergency Medicine, 9th ed. McGraw Hill. 2020. The textbook exists and the chapter title matches. No page was checked.

## Overlap with the bank

I ran `grep -ril` across `src/samps/` for pre-eclampsia, HELLP and eclampsia (s15, s16, s19, s40, s49 and others). The writer's overlap note missed several repeats in s15, which is write-in, not MCQ:

- pre-eclampsia-23 (and its twin, extra pre-eclampsia-39) repeats s15 pre-eclampsia-07 closely. Both are HELLP with RUQ pain radiating to the shoulder, sudden shock, a ruptured liver hematoma, bedside ultrasound rather than CT, and laparotomy with caesarean. The writer listed "ruptured liver hematoma" as new. It is not. Medium.
- pre-eclampsia-34 q1 and q2 repeat s15 pre-eclampsia-09 in stem and teaching. Both have 12 hours of orthopnea, bibasilar crackles, diffuse B-lines, symmetric legs and discharge on labetalol 200 mg, then pulmonary edema against PPCM and PE, then furosemide. Only q3 (pulmonary edema as an indication for delivery) is new. Medium.
- pre-eclampsia-38 q3 (fetal bradycardia after a seizure: stabilize the mother first) repeats s15 pre-eclampsia-04 q4. Medium.
- pre-eclampsia-37 repeats s15 pre-eclampsia-06: confusion, no prenatal care, and a tongue bite with incontinence pointing to an unwitnessed eclamptic seizure. Its q2 (magnesium over benzodiazepines for recurrent seizures) is also taught in s15 pre-eclampsia-04 q2, s16 seizures eclampsia and s49 postpartum eclampsia. Within the batch, 37 q1 and 38 q1 teach the same point (a tongue bite means eclampsia). Medium.
- pre-eclampsia-27 q1 (oliguria makes magnesium accumulate, so stop and check the level) repeats s15 pre-eclampsia-05, which even uses the same "60 mL over 4 hours". Low to medium. 27 teaches the earlier step, with reflexes still present.
- pre-eclampsia-16 q1 and q2 (epigastric pain passed off as reflux turning out to be HELLP, with near-normal BP) overlaps s15 pre-eclampsia-02, s15 pre-eclampsia-07 (which has the same BP of 134/86 mmHg) and s19 abdominal-pain HELLP. q3 and q4 are new. Low.
- pre-eclampsia-28 q3 and pre-eclampsia-20 q4 both teach first-line oral agents, with atenolol and an ACE inhibitor as distractors. This repeat is inside the batch. Low.
- pre-eclampsia-40 (extra) is a word-for-word copy of pre-eclampsia-31, and pre-eclampsia-39 (extra) of pre-eclampsia-23. The duplicate-stem test did not fire because the extras are not exported.

I did not rebuild these, because each teaching point is correct. They are flagged for the physician below.

## Needs physician decision

- Drop both extras (pre-eclampsia-39 and pre-eclampsia-40). Each is an exact copy of a batch SAMP, and each carried a planted defect, now fixed. They would fail the near-duplicate stem rule if exported.
- Overlap rewrites. Decide whether to rebuild pre-eclampsia-23, 34 (q1 and q2), 37 and 38 q3, or accept the repetition of s15's write-in cases in MCQ form.
- pre-eclampsia-25 q3 tests the ACOG platelet threshold for a severe feature (below 100 x 10^9/L) in a Canadian bank. The stem names ACOG, so the key is correct. I could not confirm SOGC 2022's own platelet threshold, and the brief prefers a Canadian standard. Consider recasting it to SOGC once the full text is checked. Low.
- pre-eclampsia-28 q1 keys the sFlt-1 to PlGF ratio. ISSHP and SOGC support it where available, but few Canadian emergency departments can get it quickly. The key is the best of the options. Low.
- pre-eclampsia-26 q2 calls severe hypertension on an average of 160/103 mmHg (158/102 and 162/104 mmHg). That is correct under SOGC, which uses the average of two readings, but it sits right on the threshold. Low.

## Summary

- 25 SAMPs read: 23 in the batch and 2 extras. 13 fix rows across 12 SAMPs, plus the removal of the uncited sources.
- Key changes: 1 (pre-eclampsia-39 q1, extra).
- By category:
  - Wrong key: 1 (39).
  - Invented fact: 1 (40).
  - Stem contradicting the batch's own definition: 1 (28).
  - False or imprecise distractor reason or attribution: 5 (21 q1, 29 q4, 24 q3, 21 q3, 17 q3).
  - US threshold where another applies: 2 (20 q2, 35 q1).
  - Threshold wording: 1 (17 q4).
  - Prompt wording: 1 (22 q4).
  - Uncited sources removed: 2 (SOGC 376 and Magpie).
- Most serious errors:
  - The wrong key in pre-eclampsia-39.
  - The invented lactate in pre-eclampsia-40.
  - The pre-eclampsia-28 headache. It made the key disagree with SOGC and with pre-eclampsia-36.
- SAMP ids with a defect: pre-eclampsia-17, pre-eclampsia-20, pre-eclampsia-21, pre-eclampsia-22, pre-eclampsia-24, pre-eclampsia-28, pre-eclampsia-29, pre-eclampsia-35, pre-eclampsia-39, pre-eclampsia-40.
- SAMP ids flagged for overlap: pre-eclampsia-16, pre-eclampsia-20, pre-eclampsia-23, pre-eclampsia-27, pre-eclampsia-28, pre-eclampsia-34, pre-eclampsia-37, pre-eclampsia-38.
