# Q500 fresh verification, round 3: batch14

This is a fresh independent review of the four oral cases in `src/cases/batch14/` after the round 3 writer revision ("Round 3" in `docs/reviews/q500-writer-batch14-r2.md`). The reviewer had not written, edited or reviewed batch14 before and edited no case, source or shared file. Changes were read with `git diff 89e308f -M -- oral-exam-sim/src/cases/batch14`. All four cases were then read in full: every finding, node, choice, feedback line, model answer, rubric item and source, on every path.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch14`: no output.
- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- String literal scan: no em dashes, no en dashes and no semicolons in any batch14 file. Every case has `author: "Preceptor"`, `reviewed: false` and `version: 1`. No personal names.
- Titles: all four are neutral and unique in `src/cases` and `src/samps`.
- The rename is clean. No file in `src`, `tests` or `docs` refers to `neck-node-fever-return-visit` or `neckNodeFeverReturnVisit`. `git status` shows nothing staged or modified in `src/cases` (the writer's process note is resolved, since commit db1890f holds the rename).
- Uniqueness: catalogue `pediatric-fever.md`, and grep of `src/samps` and `src/cases` for Kawasaki, IVIG resistance, fever after IVIG, serial echocardiography, aneurysm timing, retropharyngeal edema, band count and node first disease.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| rural-breathless-after-ulcer-bleed | FAIL | The new s-specialist sentence still scripts a second DOAC dose on the c-rivaroxaban path |
| rural-child-wheeze-tiring | FAIL | The unrequested as-c2 rewrite double counts the referral call already graded by as-l1, at a question that cannot elicit it |
| return-visit-belly-pain-girl | PASS | The one change (ap-a3) is correct |
| neck-node-fever-day-five | PASS | Both required fixes are applied correctly and the case is now unique |

## Previous required fixes

| Previous fix | Status |
|---|---|
| PE fix 1, s-specialist double dose | Applied for apixaban, but not true on every path. See section 1. |
| PE fix 2, pe-m3 safety decision | Applied correctly. Rivaroxaban now meets the critical item, and the drug preference stays only in pe-m4 (non critical). |
| Kawasaki fix 1(a), vaccines | Applied. MMRV is gone from `pmh`, kd-h4, kd-c1 and q-family. |
| Kawasaki fix 1(b), incomplete pathway | Applied. The CPS pathway is one model answer line in q-tests and one in q-treat, and is not graded. q-tests and kd-a3 now test the node: ultrasound before CT, retropharyngeal edema as a CT pitfall, band count, CRP and lower white count. kd-a3 does not duplicate kd-a1 or kd-a5. |
| Kawasaki fix 1(c), unsafe choice | Applied. `c-wait-antibiotics` and `s-wait-antibiotics` replace `c-echo-first` and `s-echo`. Unsafe fits ruling C1 (delay of time critical treatment). The consequence node rejoins at s-shock, and every path still reads correctly. |
| Kawasaki fix 2, repeated "missed" angle | Applied. The "why was this missed" prompt and model answer lines and kd-p1 are gone. kd-c3 (IVIG resistance and fever timing) replaces kd-p1. The appendicitis case keeps ap-p1. |
| Kawasaki recheck of counts | Confirmed. Rubric rows 9, 10, 11 and 7 of 37 (history 24%, management 30%). Three critical items (kd-a1, kd-m1, kd-r1). Six competencies. Eight questions on every path. Longest path 600 seconds. |

## Unrequested and recommended writer changes (REVIEW-RULES rule 4)

- PE: "and his breath test confirms cure" removed, and the q-discharge line leaves the test of cure timing to gastroenterology because a PPI can cause a false negative. Accurate. Acceptable.
- PE: c-pocus feedback and pe-m1 teaching reworded to the pooled emergency department figures. Matches Lee 2019. Acceptable.
- Asthma: ipratropium "250 to 500 mcg" in q-first and as-m1. Fits ruling A16. Acceptable.
- Asthma: as-l2 teaching reworded. The CPS 2021 statement was opened and says "Side effects of salbutamol include tachycardia, hyperglycemia, and hypokalemia" and "Increased lactic acid can be seen in children receiving inappropriately escalating doses of salbutamol", and that the same severity parameters are used after each treatment. Acceptable.
- Asthma: as-c2 rewritten. Not acceptable. See section 2.
- Appendicitis: "or mild pyuria" removed from ap-a3. Correct, and the point stays in the model answer and c-uti feedback.
- Kawasaki: "matted" removed, and the vancomycin phrase moved out of kd-m3 into the q-shock model answer only. Both correct.
- Kawasaki: kd-a1 and kd-a2 teaching trimmed to avoid duplicating kd-a3. Acceptable. kd-a1 teaching now repeats kd-h3's "more visits before the diagnosis" point (recommended below).
- Kawasaki: kd-h4 now grades history for non infectious mimics (new drugs, joint pain, weight loss, night sweats, bruising). The behaviour is a good neck mass history and no bank item keys it. Acceptable. See the recommendation on its teaching.

## 1. rural-breathless-after-ulcer-bleed: FAIL

### Numbers rechecked (all correct)

- Wells 7.5 (DVT signs 3, PE most likely 3, heart rate 104 scores 1.5). No point for an admission that ended 5 weeks ago.
- Cockcroft Gault about 84 mL/minute. No apixaban change.
- sPESI 0. Weight 86 kg = 190 lb. Clock 18:00, 18:40, 19:00, 19:20, 19:30, 20:00, 21:00.
- Rubric rows 7, 9, 10 and 7 of 33. Three critical items. Seven questions on every path.

### Required fix

1. s-specialist still scripts a second anticoagulant on one path. File `rural-breathless-after-ulcer-bleed.ts`, node `s-specialist`.
   - Current: "... You follow her advice. If he has not yet had apixaban, you give the first dose now."
   - Path: q-testing `c-pocus`, then q-drug `c-rivaroxaban` ("I prescribed rivaroxaban 15 mg twice daily ..."). The q-drug prompt asks what anticoagulant "do you start", so he has had rivaroxaban 15 mg minutes earlier. He has not had apixaban, so the node gives apixaban 10 mg on top of it. The previous fix asked for wording that is true on every path. A switch between DOACs starts the new drug when the next dose of the old one is due.
   - Required change: replace the last two sentences with wording that is safe after either drug. For example: "You follow her advice. If he has had no anticoagulant yet, you give the first apixaban dose now. If he has already had a dose, apixaban starts when his next dose is due."

### Recommended, not required

- On the c-transfer path he had apixaban at about 18:30. The q-site and q-discharge model answers say "Give the first dose here". Consider "Give the first dose here if not already given".

## 2. rural-child-wheeze-tiring: FAIL

### Numbers rechecked (all correct)

- PRAM 10, then 9. Salbutamol 10 puffs or 5 mg at 20 kg or more. Ipratropium 4 puffs or 250 to 500 mcg. Dexamethasone 0.6 mg/kg capped at 12 mg. Magnesium 1400 mg. Ceftriaxone 1400 mg.
- Clock 14:00, 14:25, 15:05, 15:30, 15:45, 16:00, 16:30, 16:45. Every path reads correctly.

### Required fix

1. as-c2 double counts one behaviour and sits on a question that cannot elicit it (rule 4, judged on its merits).
   - Current as-c2 text: "Calls the PICU specialist early to discuss management and transport, and gives the transport team a handover with doses, times, current settings and pending issues."
   - Problem: as-l1 (2 points, graded at q-next) already grades "Calls the pediatric referral centre and the transport service as soon as he stays severe after the first hour". The same early call now also scores in as-c2. as-c2 is graded only at q-handover ("The transport team arrives. Give your handover."), where the candidate cannot show that the call was made early. A candidate who calls late loses the point twice, and one who calls early may still lose it at q-handover.
   - Required change: take the early call clause out of as-c2, so it grades the handover only (for example "Gives the transport team a structured handover with doses, times, procedures, current settings and pending issues."). The CPS sentence the writer found ("Call a tertiary care paediatric ED and/or PICU specialist to discuss patient management and transport") may move to the as-l1 teaching, with as-l1 citing `cps-asthma` or keeping `trekk`. For the handover item, the CPS statement does not cover handover (the page was opened). Cite a verified source that does, within the 6 source cap (the case has 5), or leave the source as it was before round 3, which the previous verdict passed as recommended only.

### Recommended, not required

- as-c1 teaching and the q-grandmother model answer say follow up "within a week of discharge" and cite CPS 2021. The CPS statement says to review asthma control "within 4 weeks of discharge". Either match CPS or cite GINA for the shorter interval.
- as-h4 cites CPS 2021 for cost barriers. The CPS page does not mention cost.
- The as-c2 teaching uses "paediatric". The rest of the case uses "pediatric". Pick one (outside citations).

## 3. return-visit-belly-pain-girl: PASS

- The only change is ap-a3, which now reads "States that a normal white count or a low grade temperature does not rule out appendicitis." This is correct and supported by Bundy 2007. The pyuria point stays in the q-exam and q-imaging model answers and the c-uti feedback.
- The PAS, the 36 kg doses (morphine 3.6 mg, ondansetron 4 mg, 720 mL boluses) and the antibiotic ranges were rechecked and are correct. Clock 22:00 to 02:30 is consistent on every path.
- Still recommended from round 2: ap-h4 and ap-p1 cite Bundy for points Bundy does not make. The note to the s62 writer about abdominal-pain-49 stands.

## 4. neck-node-fever-day-five: PASS

### Numbers rechecked (all correct)

- At 24 kg: IVIG 48 g, ASA 240 mg every 6 hours (40 mg/kg/day), acetaminophen 360 mg (home dose 240 mg is 10 mg/kg), bolus 240 mL, ceftriaxone 1200 mg, clindamycin about 310 mg. Weight 53 lb.
- Systolic fall from 100 to 72 mmHg is 28%. Day 5 plus 48 hours in c-wait-antibiotics is day 7, as the feedback says.
- Stem 59 words. Every path: q-history, q-exam, q-tests, q-treat, q-shock, q-transfer, q-family, q-handover. Every path to q-transfer has epinephrine running, so the q-transfer prompt is true on every path.

### Sources checked

- CPS Kawasaki disease 2026, https://cps.ca/en/documents/position/kawasaki-disease, opened. It supports:
  - kd-c3: "Approximately 10% to 20% of patients with KD have IVIG resistance", "These patients are at higher risk for coronary artery aneurysms" and "Fever should resolve by 24 to 36 hours post-IVIG completion."
  - kd-c1: "Coronary arteries should be monitored with serial echocardiograms because aneurysms may develop up to 4 to 6 weeks after disease onset."
  - kd-h4: Table 2 lists infection, systemic JIA, Stevens Johnson syndrome, serum sickness and serum sickness like reaction, malignancy, and HLH and macrophage activation syndrome.
- Kanegaye JT et al. J Pediatr 2013, PMID 23305955, abstract read through E-utilities. It supports kd-a1, kd-a2, kd-a3 and the c-wait-antibiotics feedback: older children with more encounters, 33% admitted as adenitis or abscess, smaller nodes, lower white count and higher band count and CRP independently associated with node first disease, multiple enlarged solid nodes, comparable retropharyngeal edema ("should not dissuade from the diagnosis"), and similar rates of coronary abnormalities and IVIG resistance to typical disease.

### Uniqueness

- s46 pediatric-fever-27: no longer re-keyed. The case does not grade the incomplete criteria, the vaccine deferral or "do not wait for echocardiography".
- s14 pediatric-fever-06 keys the principal criteria, IVIG and ASA, the investigations and a rash differential. This case grades IVIG and ASA, which any Kawasaki case must. The graded decision is different: treat now instead of waiting for antibiotics to fail. The other graded points (node first discriminators, ultrasound before CT, retropharyngeal edema, IVIG resistance, serial echocardiography) are keyed nowhere else in the bank.
- The old batch14 case `preschooler-six-day-fever` in the catalogue was deleted in round 2 and does not count.
- Within the batch, the "how was this missed" angle now belongs to the appendicitis case only.

### Recommended, not required

- kd-c3 text says "Tells her mother and the receiving team". It is graded only at q-family, and the q-handover model answer does not include it. Drop "and the receiving team", or add kd-c3 to q-handover with a handover line about fever after IVIG.
- kd-h4 teaching restates the CPS differential that s14 pediatric-fever-06 q4 keys. Consider tying it to the history clues instead: new drugs for a drug reaction, joint pain for systemic JIA, weight loss, night sweats and bruising for lymphoma or leukemia.
- kd-a1 teaching and kd-h3 teaching both make the "more visits before diagnosis" point. Consider keeping it in one.
- The CRP is 168 mg/L in both pediatric cases of this batch. Harmless, but a different value in one would help the cases feel distinct.

## Sources checked this round

- CPS Kawasaki disease 2026, https://cps.ca/en/documents/position/kawasaki-disease, opened.
- CPS 2021 acute asthma statement, https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation, opened.
- PubMed abstract PMID 23305955 (Kanegaye 2013) through E-utilities.
- BC VTE 2024, Lee 2019 and Dawwas 2022 were verified in round 2. The changed wording was checked against those findings and is consistent.
