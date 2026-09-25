# Sweep 2 review, writer sw2-b

Independent review of the four SAMPs rebuilt in docs/reviews/samps-sweep2-sw2-b.md. Both lenses, a search of the whole bank by meaning, and the two added checks (hedged-key cue, and mock mode showing every question at once). Files touched: src/samps/s19/abdominal-pain.ts and src/samps/s47/pre-eclampsia.ts. Nothing was committed. All four SAMPs stay reviewed: false.

Every keyFeature was compared with git show HEAD. All 13 questions keep the key feature they had before the rebuild.

## Verdicts

| SAMP | Verdict | Summary |
|---|---|---|
| abdominal-pain-23 | fixed | Renal infarction in atrial fibrillation off apixaban. One key option reworded (q3). |
| abdominal-pain-36 | fixed | Postpartum pre-eclampsia after a caesarean. q2 now cites ISSHP in place of ACOG. |
| abdominal-pain-46 | pass, flagged | ACS in a man with aphasia. Rectal ASA 650 mg is defensible. One explanation phrase corrected. |
| pre-eclampsia-16 | fixed | Bell palsy at 35 weeks. q3 prompt names its criteria. The q4 update no longer names pre-eclampsia. |

No SAMP needed a re-rebuild.

## One row per question

| SAMP | Q | KF (same as HEAD) | Verdict | Finding |
|---|---|---|---|---|
| abdominal-pain-23 | q1 | AP1 | pass | Stopping apixaban with atrial fibrillation is the best cue for renal infarction. Bourgault 2013 confirms atrial fibrillation in 17 of the 23 cardiac cases. |
| abdominal-pain-23 | q2 | AP5 | pass | Contrast CT is the right test for suspected renal infarction. The case report supports contrast CT. Its abstract does not say that a noncontrast CT is normal. See For the physician. |
| abdominal-pain-23 | q3 | AP2 | fixed | The key read "Severe pain with a soft abdomen". Renal colic also gives severe pain with a soft abdomen, so the option did not separate the two. The key is now "Pain despite two analgesics", which is what the update and explanation describe. Position and order are unchanged. Bourgault figures confirmed: pain in 96.8%, microscopic hematuria in 14 of 33 (42.4%). Confidence medium. |
| abdominal-pain-36 | q1 | PE3 | pass | PCR 48 mg/mmol with severe BP on day 5. Labs rule out HELLP, pancreatitis, ileus and wound infection as stated. ISSHP confirms that BP peaks on days 3 to 7. |
| abdominal-pain-36 | q2 | PE4 | fixed | The source was ACOG 767, a US guideline. ISSHP 2021 itself states "Treatment within 60 min may decrease the incidence of severe maternal morbidity", so the report was wrong to say that ISSHP gives no time limit. The source is now isshp-2021 and acog-767 is removed. The explanation now quotes the 60 minute figure, the ISSHP point that about half of strokes and eclampsia occur after birth, and the ISSHP first-line drug list. The key of 60 minutes holds under both ISSHP and ACOG. Confidence medium. |
| abdominal-pain-36 | q3 | PE4 | pass, flagged | ISSHP supports every claim: breastfeeding is recommended, labetalol, nifedipine and enalapril are acceptable, and observational studies link breastfeeding to less later hypertension. The AOM 2023 Ontario guideline agrees. Breastfeeding advice only loosely tests KF4 (BP control, seizure prophylaxis, monitoring, delivery planning). See For the physician. |
| abdominal-pain-46 | q1 | AP3 | pass | Pallor and sweating point outside the abdomen. The distractor reasons are true. |
| abdominal-pain-46 | q2 | IHD5 | pass | The update describes effort pain relieved by rest, which is angina. Chronic mesenteric ischemia is correctly described as pain after meals. |
| abdominal-pain-46 | q3 | CP2 | fixed (wording) | The explanation said 650 mg is "the suppository strength sold in Canada". Health Canada lists ASA suppositories of 150 mg and 650 mg. It now says "the adult suppository strength". Maalouf 2009 is confirmed: 600 mg PR against 162 mg chewed in 24 volunteers, with equal or higher salicylate levels within 90 minutes. The key holds (see below). |
| pre-eclampsia-16 | q1 | PE1 | pass | Shmorgun 2002 confirmed: 41 women at five Canadian centres, 22.0% pre-eclampsia plus 7.3% gestational hypertension, 29.3% in total. ISSHP 2021 lists Bell palsy under other maternal organ problems. The q4 update named pre-eclampsia, which tells a candidate in mock mode what to test for in q1. It now reads "admits her for maternal and fetal monitoring". |
| pre-eclampsia-16 | q2 | PE3 | pass, flagged | The key is right. In mock mode the q3 update shows platelet, liver enzyme and LDH results, which implies the q2 key. q3 cannot work without those results, and the stem and q2 update alone point to HELLP testing. Left in place, as for loc-24 in the earlier review. |
| pre-eclampsia-16 | q3 | PE3 | fixed | The ALT cut-off of 40 U/L is from ISSHP. SOGC and ACOG use other liver thresholds, and the prompt did not say which applied. The prompt now reads "using the ISSHP and Tennessee criteria". The Tennessee arithmetic was rechecked: platelets 168, AST 52 and LDH 410 reach no threshold. Overlap: pre-eclampsia-31 q2 also keys raised liver enzymes below the HELLP cut-offs (LDH 410 in both). See For the physician. Confidence medium. |
| pre-eclampsia-16 | q4 | PE4 | pass, flagged | 146/94 mmHg is non-severe hypertension. ISSHP supports oral labetalol, nifedipine or methyldopa to a diastolic of 85 mmHg. The explanation now calls 200 mg twice daily "a common starting dose", not "a usual" one. See the labetalol check below. |

## The two specific checks

**Rectal ASA 650 mg (abdominal-pain-46 q3).** The key is defensible. No Canadian ACS guideline gives a rectal dose. CCS and ESC give oral loading doses only. Published ED practice for patients who cannot swallow uses 300 to 600 mg PR. Maalouf used 600 mg. Health Canada's product database lists ASA suppositories of 150 mg and 650 mg only, so 650 mg is the adult suppository a Canadian ED can stock. It is one dose unit and only 50 mg above the published range. Only one PR option is offered, so the question tests route, not exact dose. One inconsistency remains in the bank. Two s27 cva SAMPs key "ASA 325 mg PR" from Canadian stroke guidance, but no 325 mg suppository appears in the Health Canada listing found.

**Labetalol 200 mg twice daily (pre-eclampsia-16 q4).** Defensible but not confirmed word for word. The full SOGC Guideline No. 426 (2022) was blocked (403), and the SOGC PDF link returned an HTML page. SOGC 2014 gave oral labetalol as 100 to 400 mg two or three times daily, with a maximum of 1 200 mg a day. A 2025 review of guidelines (Eur J Prev Cardiol, doi 10.1093/eurjpc/zwaf373) tabulates SOGC as 100 to 300 mg three or four times daily, with a maximum of 1 200 mg a day. That table may be wrong. ISSHP uses 200 mg oral as the first dose in its severe hypertension table. 200 mg twice daily (400 mg a day) sits within the daily range of both SOGC versions. Only the twice-daily frequency could differ from the 2022 table. No other oral labetalol dose is offered, so the item tests drug class and route, not dose.

## Overlap search

Searched all of src/samps for renal infarction, Bell palsy, facial palsy, group homes, aphasia, rectal ASA and suppositories, breastfeeding, postpartum pre-eclampsia, time to treatment and "not HELLP" lab patterns.

- abdominal-pain-23: no other renal infarction case. No overlap.
- abdominal-pain-36: pre-eclampsia-26 (s47) and pre-eclampsia-03 (s15) are also severe postpartum hypertension within a week of birth in a breastfeeding woman. Both mention treatment within 30 to 60 minutes and that the drugs are safe in breastfeeding, but only in explanations or as one write-in counselling item. Neither keys the time limit or breastfeeding advice. pre-eclampsia-26 q3 keys the day 3 to 7 BP peak, which abdominal-pain-36 q1 uses only as a supporting fact. The setting is similar, but the stories and keys differ. Not a copy.
- abdominal-pain-46: the s27 cva SAMPs key rectal ASA after a failed swallow screen. The disease, topic and dose differ, but the reasoning (unsafe swallow, so give ASA PR) is the same. The writer disclosed this.
- pre-eclampsia-16: no other Bell palsy case. q3 overlaps pre-eclampsia-31 q2 in its teaching point. q4 overlaps pre-eclampsia-33 q2 (oral maintenance for non-severe BP) and pre-eclampsia-20 q4 (diastolic target 85). The decisions differ in their options.

## Sources verified

- Bourgault 2013, CJASN, doi 10.2215/CJN.05570612. Full text on PMC3586969 read.
- Motaouakil 2024, Urol Case Rep, doi 10.1016/j.eucr.2024.102823. Abstract only (Europe PMC).
- Maalouf 2009, Acad Emerg Med, doi 10.1111/j.1553-2712.2008.00318.x. Abstract read (Europe PMC).
- Shmorgun, Chan, Ray 2002, QJM, doi 10.1093/qjmed/95.6.359. Abstract read.
- Magee 2022 (ISSHP 2021), Pregnancy Hypertens, doi 10.1016/j.preghy.2021.09.008. Full text in the scratchpad read (Bell palsy, ALT or AST above 40 IU/L, treatment within 60 minutes, peak on days 3 to 7, breastfeeding, oral labetalol 200 mg).
- Byrne 2023 ESC ACS, doi 10.1093/eurheartj/ehad191. Not changed by the rebuild.
- Haram 2009, BMC Pregnancy Childbirth. Unchanged.
- Health Canada Drug Product Database: ASA suppositories 150 mg and 650 mg (dhpp.hpfb-dgpsa.ca).
- AOM Clinical Practice Guideline 15, 2023 (Ontario). Supports breastfeeding claims. Not cited in the SAMP.

## Checks

- SAMP_BATCH=s19 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 655 passed.
- SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 476 passed.
- npx tsc --noEmit -p .: clean.

## For the physician

- abdominal-pain-46 q3 keys ASA 650 mg PR. It is the only adult ASA suppository listed in Canada, and the published PR range is 300 to 600 mg. Two s27 cva SAMPs key ASA 325 mg PR. Please choose one rectal dose for the bank, or accept that the two topics differ.
- pre-eclampsia-16 q4 keys labetalol 200 mg PO twice daily. The dose is inside the SOGC daily range. The SOGC 2022 table could not be opened to confirm the frequency. Please check it against your copy of Guideline No. 426.
- abdominal-pain-36 q3 (breastfeeding while on labetalol) is mapped to PE4. It is true and well sourced, but it tests postpartum counselling more than BP control, seizure prophylaxis or delivery planning. Keep it, or swap in a PE4 decision that does not repeat pre-eclampsia-02 (magnesium) or the old admission key.
- abdominal-pain-36 q2 keys 60 minutes as the longest acceptable delay. ISSHP 2021 gives "within 60 min", and ACOG gives 30 to 60 minutes. No SOGC wording was confirmed.
- pre-eclampsia-16 q3 and pre-eclampsia-31 q2 both teach raised liver enzymes below the HELLP cut-offs, with LDH 410 U/L in both. The stories and options differ. Keep both or change one.
- pre-eclampsia-16 q2: in mock mode, the q3 lab results imply the q2 key. Left in place because q3 needs them.
- abdominal-pain-23 q2 says a noncontrast CT can be normal in renal infarction. This rests on one case report whose abstract does not state it. The claim is plausible, because renal infarction needs contrast to show.

## Summary

4 SAMPs, 13 questions. Verdicts: 3 fixed, 1 pass with flags, 0 re-rebuilt. Defects: 1 weak key option (abdominal-pain-23 q3), 1 US source used where international guidance gives the same figure (abdominal-pain-36 q2), 1 factual error in an explanation (abdominal-pain-46 q3, Canadian suppository strengths), 1 threshold without a named reference (pre-eclampsia-16 q3), 1 mock mode cue (pre-eclampsia-16 q4 update naming pre-eclampsia). No key changed position. All key features match HEAD.
