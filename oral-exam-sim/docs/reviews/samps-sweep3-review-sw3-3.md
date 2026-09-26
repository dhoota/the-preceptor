# Sweep 3 review, writer sw3-3

Independent review of four rebuilt SAMPs: first-trimester-bleeding-25 (s38) and pre-eclampsia-17, pre-eclampsia-30 and pre-eclampsia-31 (s47). Both lenses were applied. Nothing was committed. Every SAMP stays reviewed: false.

## Verdicts

| SAMP | Verdict | What changed |
|---|---|---|
| first-trimester-bleeding-25 | fixed | q2 hedged-key cue removed. q3 explanation no longer relies on an unstated fact and now covers consent and privacy |
| pre-eclampsia-17 | fixed | q1 prompt now names the ISSHP 2021 classification, because under other guidelines gestational hypertension is defensible |
| pre-eclampsia-30 | fixed | q2 odd-one-out cue removed (four of five options were caesarean). New distractor, new update, source now ISSHP |
| pre-eclampsia-31 | fixed | q2 prompt now names ISSHP 2021 criteria, because other references use a platelet cut-off of 100 |

Counts: pass 0, fixed 4, re-rebuilt 0.

## One row per question

| SAMP | Q | KF (matches HEAD) | Finding | Action | Confidence |
|---|---|---|---|---|---|
| ftb-25 | q1 | 2, yes | Pelvic inflammatory disease is the only real ectopic risk factor on the list. Crochet 2013 is real. Its abstract says each history feature has an LR+ below 1.5, which does not conflict with "most raises" | None | high |
| ftb-25 | q2 | 4, yes | Doubilet and Benson 2011 figures check out against the abstract (PMID 22123998): 202 women, 9 (4.5%) above 2000, and 4336 the highest value that preceded a liveborn term baby. Defect: the key was the only hedged option ("may still be") and all four distractors overclaimed ("confirms", "excludes") | Replaced "Left adnexal tenderness confirms an ectopic" with "Left adnexal tenderness may justify methotrexate", which is hedged and wrong. Explanation updated | high |
| ftb-25 | q3 | 6, yes | Key is right. The explanation said "She cannot book her own blood work or return on her own", but the case never says so. It gave no consent for sharing the plan, and it did not say why the officers should not get it | Reworded to "while she is in custody, the centre's health unit arranges her blood work and visits". Added "with her consent". Added that her health information goes to the officers only as she agrees | medium |
| pe-17 | q1 | 2, yes | ISSHP 2021 lists intrauterine fetal death under uteroplacental dysfunction (verified in the full text). ACOG 222 does not, and would call this gestational hypertension with severe features. I could not open SOGC 426 (403 from jogc.com, subscription only on Europe PMC). So "Gestational hypertension" was a defensible distractor because the case named no guideline | Prompt now asks for the classification "under the ISSHP 2021 classification". One sentence added to the explanation | high |
| pe-17 | q2 | 4, yes | No antenatal corticosteroids after confirmed fetal death is right. ISSHP restricts them to benefit for the baby. The reasons given for the distractors are true | None | high |
| pe-17 | q3 | 4, yes | ISSHP lists "non-reassuring fetal status (including death)" among the indications for delivery at any gestational age (verified). Birth once BP is controlled is right | None | high |
| pe-17 | q4 | 4, yes | ISSHP: continue antihypertensives after birth and check BP at least once on days 3 to 7 (verified). pe-26 q3 (unsigned) also keys the days 3 to 7 peak, but its keyed decision is different | None, noted | medium |
| pe-30 | q1 | 4, yes | Sanders 2016, recommendation 11, verbatim: "Magnesium sulfate is not recommended for management of eclampsia in MG because of its neuromuscular blocking effects. Barbiturates or phenytoin usually provide adequate treatment." The 2020 update (Narayanaswami 2021) does not cover pregnancy. Newer sources, including a 2025 JOGC report on levetiracetam when magnesium is contraindicated, favour levetiracetam in practice. Levetiracetam is not an option, so no distractor is also correct. The undosed key is consistent with the options, which all name an approach rather than a dose. The spec's dose rule applies only to dose options | None. For physician | medium |
| pe-30 | q2 | 4, yes | Cue: the key was the only non-caesarean option. The consensus supports the key (recommendation 10, verified) | Update changed to "Obstetrics asks for your view on the plan for her birth". "Caesarean to avoid fatigue in labour" replaced by "Expectant care until 39 weeks". This is wrong because ISSHP advises offering birth at 37+0 weeks or later with pre-eclampsia (verified). Prompt is now "plan for her birth". Source is now isshp-2021, and ISSHP is added to the SAMP sources. The explanation names the myasthenia consensus for the point about route of birth | high |
| pe-30 | q3 | 4, yes | Recommendation 12 verified: examine every baby for transient myasthenic weakness | None | high |
| pe-31 | q1 | 1, yes | Chronic hypertension and CKD are both in the ISSHP high-risk table. ISSHP says oral nifedipine may cause headache (severe hypertension table). Key is right. Mock-mode note: the q2 options are all pre-eclampsia markers, so in mock mode they point to the q1 key. This is built into a KF1 item in a pre-eclampsia SAMP, and the key is the obvious topic-level answer, so I did not rebuild | None, noted | low |
| pe-31 | q2 | 2, yes | ISSHP lists platelet count below 150 x 10^9/L as hematologic dysfunction. 132 qualifies. No distractor qualifies under ISSHP: a BP rise is insufficient, a rise in proteinuria in proteinuric renal disease is insufficient, uric acid is not a criterion, and hyperreflexia is not a criterion (all verified verbatim). ALT 28 and creatinine 70 are below the 40 and 90 cut-offs. Defect: signed pe-11 keys "Platelets below 100 x 10^9/L", and ACOG uses 100 while counting a sudden rise in proteinuria or BP. Under those references the key fails and two distractors become defensible | Prompt now ends "using ISSHP 2021 criteria" | high |
| pe-31 | q3 | 4, yes | ISSHP: growth, fluid and umbilical Doppler. The biophysical profile "is not recommended as it can be falsely reassuring" (verified) | None | high |

## Overlap

- I ran simcheck.py on each draft text. Top scores: ftb-25 0.38 (ftb-17), pe-17 0.29 (pe-32), pe-30 0.32 (pe-34), pe-31 0.27 (pe-21). I read the cards. None tells the same story.
- digest3.json predates this round, so I also grepped the current src/samps. Findings:
  - Custody and correctional settings: no other SAMP.
  - Myasthenia in pregnancy: only pe-30. The other myasthenia items are airway-21 (rocuronium), eye and sob.
  - Fetal death with new hypertension: only pe-17.
  - Superimposed pre-eclampsia in kidney disease: only pe-31. Signed pe-11 tests the criteria for superimposed pre-eclampsia in a write-in format with a different patient, but see the platelet threshold point above.
  - Discriminatory level: signed ftb-02 q4 keys the opposite trap (a low hCG does not exclude an ectopic). ftb-03 keys pregnancy of unknown location with a repeat hCG. ftb-25 q2 keys that a level above 2000 does not exclude a live intrauterine pregnancy. That is a different decision.
- Signed clusters in sweep3-ss-merged.json: none of the four is in any DUP or BORDERLINE pair. The rebuilds avoid the pe-04/seizures-03/headache-06/pe-10 magnesium cluster, the ftb-11/pe-15 molar cluster, and the ruptured-ectopic clusters.

## Mock mode, hedged keys, longest option

- Hedged key: fixed in ftb-25 q2. No other question in the four is a "most accurate statement" item.
- Longest option: after the edits, the key is the longest option in pe-30 q2 (37 characters, tied within 1) and pe-31 q3 (key/mean 1.32, under 1.5). Batch tests pass.
- Mock mode: no later update or option names an earlier key, except the structural pe-31 q2 point in the table.

## Sources verified

- ISSHP 2021, Pregnancy Hypertens 2022, full text (scratchpad sw3-3/isshp.txt): the pre-eclampsia definition, the superimposed paragraph, the risk table, delivery indications, corticosteroids, the biophysical profile, postpartum days 3 to 7, and delivery at 37+0 weeks.
- Sanders DB et al, Neurology 2016, doi 10.1212/WNL.0000000000002790, PMC4977114: recommendations 10 to 12 verbatim.
- Doubilet PM, Benson CB, J Ultrasound Med 2011, PMID 22123998: abstract figures.
- Crochet JR et al, JAMA 2013, PMID 23613077: abstract.
- SOGC 426 (PMID 35577426): abstract only. The full text was not reachable.
- Levetiracetam context: JOGC 2025, https://www.jogc.com/article/S1701-2163(25)00027-1/fulltext (search result only, not opened).

## For the physician

- pe-30 q1 keys phenytoin. That is the only drug the 2016 myasthenia consensus names, alongside barbiturates. Current practice more often uses levetiracetam when magnesium is contraindicated (a JOGC 2025 report). Levetiracetam is not an option, so the key is still the single best answer. You may prefer to key "levetiracetam" and cite a newer source. The key is undosed, like the other options in that item. I judge this acceptable under the spec.
- pe-17 q1 and pe-31 q2 now name ISSHP 2021. SOGC 426 could not be opened to confirm whether it counts fetal death as a criterion or uses a platelet cut-off of 150. Signed pe-11 keys "platelets below 100 x 10^9/L" for superimposed pre-eclampsia, which conflicts with the ISSHP 150 threshold keyed in pe-31. Please decide which threshold the bank should teach.
- ftb-25 q3 custody wording: the plan goes to the centre's health unit with her consent. The officers wait outside at her request and receive health information only as she agrees. Please confirm this fits provincial correctional health practice.
- ftb-25 q2 rests on one retrospective series: 9 of 202 women later found to have a live intrauterine pregnancy had a level above 2000. The key says a live pregnancy is still possible, not likely.
- pe-30 q2 now tests term timing and route together, with ISSHP as its source. Please confirm that "Expectant care until 39 weeks" is a fair distractor.
- pe-31 q1 has a residual mock-mode cue: the q2 options are pre-eclampsia markers. I did not rebuild for it.

## Checks

- SAMP_BATCH=s38 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 456 passed.
- SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 476 passed.
- npx tsc --noEmit -p .: clean.
