# Q500B verify review: s81, Analgesia/sedation (revision 2)

A fresh independent review of the whole final batch in `src/samps/s81/analgesia-sedation.ts` (analgesia-sedation-48 to analgesia-sedation-52). This reviewer did not write, edit or first-review the batch, and has edited nothing in it (REVIEW-RULES rule 1). Both lenses were applied. Inputs were the first review `docs/reviews/q500b-qa-s81.md` and the writer report `docs/reviews/q500b-writer-s81.md`, including its Revision 2 section.

## Tests

`SAMP_BATCH=s81 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass, including the bank-wide near-duplicate stem test. A script check of every string literal found no em dashes, en dashes or semicolons. Spelling is Canadian. No personal names.

## Sources verified

| Source | How checked | Result |
|---|---|---|
| Fraser Health, Principles of opioid management | Full PDF downloaded and text searched | "Give one-half of the regular PO dose by the S.C. route STAT and if necessary, give this again in 20 minutes, until pain breaks." It also gives 10% of TDD q1h p.r.n. for breakthrough. Respiratory depression "occurs rarely in patients receiving opioids regularly" and opioids should not be "withheld for fear of respiratory depression". Supports 48 q2 to q4. |
| Warden 2003, PAINAD | Europe PMC abstract | Exists. A tool for noncommunicative patients with advanced dementia. Supports 48 q1 and the 50 q1 reason. |
| CPS 2019, managing pain and distress | cps.ca page text fetched | Table 2: "Use sedation as an adjunct, when persisting distress". For fracture imaging: "If moderate-to-severe: add IN fentanyl", immobilization. Parental presence and distraction are listed. Supports 49 q1 and q2. |
| CPS 2021, procedural sedation | cps.ca page read | "at least two HCPs", "One HCP must be dedicated to continuously monitoring the patient", ASA I or II, and anesthesia consultation for "features of a potentially difficult airway (e.g., history of difficult intubation...)". Supports 49 q3 and the new 49 q4 key. |
| SOGC 2015, pregnant trauma | Europe PMC full abstract | Rec 3 (O2 sat above 95%), rec 6 (vasopressors only for intractable hypotension), rec 7 (uterine displacement or left lateral tilt), rec 20 (EFM for at least 4 hours) and rec 21 (24 hours of observation for uterine tenderness, vaginal bleeding, sustained contractions over 1 in 10 minutes, rupture of membranes and other features). Supports 51 q2 and the new 51 q4. |
| Wakai 2011, Cochrane | Europe PMC abstract | Five trials, 211 participants, RR for success 0.95, adverse effects RR 0.16, about 109 minutes less ED time. Supports 51 q1. |
| ACS TQIP 2020, acute pain | Full PDF downloaded and text searched | Behavioural scores "do not classify pain severity". Table 8: apixaban "Hold 72 hours prior to insertion" for neuraxial or deep plexus blocks. Table 9 footnote: ASRA compliance "would apply to epidural, quadratus lumborum, brachial plexus, sciatic and lumbar placement". Table 9: "Interscalene block invariably causes Horner's syndrome and ipsilateral phrenic nerve weakness". Warnings on other CNS depressants and Table 16 (pregnancy) are present. Supports 50 q1 to q4, 51 q3 and 52 q4. |
| Kindel 2025, GLP-1 RA multi-society guidance | PMC full text | Escalation phase, higher dose, weekly formulation and GI symptoms as risk factors. Gastric POCUS "could be used to assess aspiration risk". With retained contents, weigh "rapid sequence induction of general anesthesia for tracheal intubation" against "procedure cancellation". A liquid diet for at least 24 hours is a planned-procedure option. The guidance does not address urgent procedures. Supports 52 q1 to q3. |

Could not open:
- ASRA 2025 fifth edition anticoagulation guideline (Kopp SL and colleagues, Reg Anesth Pain Med 2025, PMID 39880411). Only the abstract could be reached. It does not mention block categories or apixaban timing. This matters for 50 q3 (see below).
- ACEP 2026 unscheduled procedural sedation guidelines (writer uncertainty 6). Not opened. Nothing keyed depends on them.

Numbers recomputed:
- 48: morphine 20 mg PO q4h is 120 mg/day PO. Half of that by the SC route is 10 mg SC q4h, or 60 mg SC/day, so 10% breakthrough is 6 mg. 2.5 mg is a quarter of 10 mg.
- 52: ketamine 100 mg at 100 kg is 1 mg/kg. Fentanyl 25 to 50 mcg matches ACS.

All correct.

## Resolution of the first-review fails

| # | First-review fail | Resolved? |
|---|---|---|
| 1 | 48 q4 update revealed the q3 key | Yes. The update now reads "Later he settles." |
| 2 | 49 q1 retold signed analgesia-sedation-05 q2 | Yes. The patient (11-year-old boy, 38 kg, dirt bike, tibial and fibular shaft fracture, new vitals) and the decision (respond to a midazolam order) are new. The bank's two dirt bike stems (s14 hemophilia, s26 exhaust burn) test unrelated decisions. But the change creates a new mock-mode cue (see 49 q2). |
| 3 | 49 q4 mirrored the asthma point in signed s22-26 | Yes. "Difficult intubation at past surgery" is a CPS 2021 trigger, verified. No sedation SAMP keys it. The difficult-intubation hits in s02, s21 and s80 airway and in the CICO case are airway-management items. |
| 4 | 50 q3 recombined the s22-24 and s22-45 keys | Yes, the overlap is gone. The new interscalene and apixaban decision is new to the bank (the only interscalene item, sob-22, tests phrenic palsy). The new question has its own defect (see 50 q3). |
| 5 | 51 q1 sedation distractors were revealed by the later sedation plan | Yes. The distractors are now non-sedation analgesic strategies, so the q2 update no longer rules them out. The new option set has a form cue (see 51 q1). |
| 6 | 51 q4 repeated the s14 4-hour fetal monitoring key and was not KF6 | Yes. The 4 hours are given in the update, not keyed. The new key is discharge return advice after sedation, which is the KF6 wording "give safe discharge advice". SOGC rec 21 supports it. It does not repeat s22-41 q4. The s47 pre-eclampsia "abdominal tightening" stem is a different presentation. |
| 7 | 52 q3 repeated the 51 q1 block angle, and the updates revealed keys | Yes. The block is gone. The q3 update no longer names ultrasound, and the q4 update reveals no earlier key. |
| 8 | 52 stem copied the tented-skin ankle wording of s06 and s22-27 | Yes. The stem is now a posterior elbow dislocation with a pulseless hand. It shares no sentence with s22-32 (elbow dislocation in OSA, which keys a sedation plan for obstructive risk), s06 or s29. The duplicate stem test passes. |

## Verdict by SAMP and question

### analgesia-sedation-48 (palliative restlessness): PASS

- q1 PASS. q2 PASS (Fraser verbatim). q3 PASS. q4 PASS. The "Later he settles" update no longer gives away q3.
- Low-confidence note, not a fail: the bank already has two older men with prostate cancer metastatic to bone brought in by their wives under palliative care (s34 delirium-agitation opioid neurotoxicity, s53 tox fentanyl patch toxicity). 48 keys the opposite problem (undertreatment after missed doses), so the decisions differ. If the bank-wide TF-IDF check flags the stem, changing the primary cancer or who brings him in would distance it.

### analgesia-sedation-49 (boy thrown from a dirt bike): FAIL (1 item)

- q1 PASS on content. CPS 2019 supports it. The key matches the KF4 wording. It echoes the teaching in the batch17 hoist-transfer case ("Declines a sedative alone and treats her pain first"), but in a different setting and decision (imaging after a head injury in a child). This is the D1-class literal key feature point that the first review accepted and requested.
- q2 FAIL (mock-mode cue, B6, medium confidence). Revision 2 removed the analgesic options from q1. Now "Treat his pain first, then reassess" is the only q1 option that treats pain without sedating him. The q2 update ("lets the nurse touch his leg. He says it hurts a little") shows he received analgesia and was not sedated. The q2 options "CT after intranasal midazolam" and "CT after IV ketamine sedation" also show that neither sedative was given. So a mock-mode candidate can read off the q1 key. The first review passed q2 only because three q1 options were then analgesics. Fix: replace "Restrain him gently for the scan" in q1 with a wrong option that includes analgesia, "Give intranasal fentanyl with midazolam". Optionally replace "Give midazolam, analgesia after the CT" with "Give oral ibuprofen, then scan now". Add a true reason for each to the q1 explanation. Fentanyl with midazolam up front adds a sedative before the effect of analgesia is known, deepens sedation and clouds his neurologic checks after a head injury, and the CPS keeps sedation as an adjunct for persisting distress. Ibuprofen alone does not cover moderate to severe fracture pain, for which the CPS adds IN fentanyl. Keep the q1 key and keep q2 as written.
- q3 PASS. CPS 2021 is quoted accurately.
- q4 PASS. The trigger is verified and the distractors are clearly benign.

### analgesia-sedation-50 (aphasia after a stroke): FAIL (1 item)

- q1 PASS. q2 PASS. The softened last sentence ("In a patient who can rate her own pain") is in place. The self-rating in the q2 and q4 updates narrows q1 in mock mode, as the first review noted. It stays flagged under the B6 allowance.
- q3 FAIL (option-form cue and reference variance, medium confidence).
  - Cue (B4, B5): three options open "Acceptable ...". The key is the only one that opens "Deferred", and it is in effect the plain negation of "Acceptable now under ultrasound guidance". A test-taker can spot the lone "not today" option without knowing the rule.
  - Variance (SAMP_SPEC section 9, l.104): the key rests on ACS 2020, which applies the ASRA 2018 deep plexus rules to all brachial plexus blocks. Other regional anesthesia guidance sorts peripheral blocks by site compressibility, and many practitioners treat an ultrasound-guided interscalene block as acceptable on a DOAC. ASRA has since issued a fifth edition (2025). Its full text could not be opened to confirm how it now treats brachial plexus blocks or the apixaban interval. As written, "Acceptable now under ultrasound guidance" is defensible to part of the readership.
  - Fix:
    - Name the applicable guidance in the lead-in: "Using the American College of Surgeons trauma pain guideline, which of the following statements about an interscalene block for her today is most accurate?"
    - Make the options parallel: "Acceptable 24 hours after her last apixaban dose", "Acceptable 72 hours after her last apixaban dose" (key), "Acceptable now if her INR is 1.5 or less", "Acceptable now under ultrasound guidance", "Acceptable now, as it spares her breathing".
    - Keep the explanation's reasons, rewritten so they match the reworded options.
    - The writer should check whether the ASRA 2025 fifth edition changed the high-dose apixaban interval, and report it. If 72 hours still holds, keep the key.
- q4 PASS. Low-confidence note: her pain of 7 at 02:00 in a sling hints in mock mode that no block was placed (q3). It is weak, because a block could have worn off, so it is not failed.

### analgesia-sedation-51 (shoulder dislocation at 30 weeks): FAIL (1 item)

- q1 FAIL (key stands out by form, B4 and B10, low to medium confidence). The four distractors all read "[drug] [dose] IV, then retry". The key, "lidocaine 1% into the joint", is the only option without a dose and without "then retry". A candidate can pick the odd one out. Fix: drop ", then retry" from the four distractors ("acetaminophen 1 g IV", "fentanyl 50 mcg IV", "hydromorphone 1 mg IV", "morphine 5 mg IV") and write the key as "lidocaine 1% intra-articular". The prompt already states the purpose. Keep the explanation, and change "before another attempt" only if its wording no longer fits.
- q2 PASS. SOGC recs 3, 6 and 7 are verified. The fasting and cricoid distractors are not defensible for a short ED sedation in a woman who is breathing on her own.
- q3 PASS. ACS Table 16 supports fentanyl in all trimesters.
- q4 PASS. This is new KF6 discharge advice. The key is supported by SOGC rec 21, and every distractor is an expected minor after-effect.

### analgesia-sedation-52 (semaglutide and elbow dislocation): PASS

- Stem PASS. q1 PASS. q2 PASS. Residual low-level hint: "Bedside assessment confirms a large volume of solid food" points away from the radiographs and the NG aspirate. q3 needs that fact, so this is flagged under B6 and not failed.
- q3 PASS. With confirmed solids and a pulseless hand, RSI with general anesthesia is the only offered plan that protects the airway without delaying reduction. Kindel supports weighing RSI against cancellation. The guidance is written for planned procedures (writer uncertainty 5), and the explanation uses it within those limits.
- q4 PASS. The doses are correct and the update reveals no earlier key.

## Writer uncertainties checked

1. Fraser ratio: verified verbatim (one half of the PO dose by the SC route). Pass.
2. 48 q4 continuing opioid at a resp. of 12: matches Fraser and does not conflict with signed analgesia-sedation-12. Pass.
3. 49 q2 CT without sedation: CPS 2019 Table 2 supports it. Pass, but see the 49 q2 cue.
4. 51 menu distractors: not defensible. Pass.
5. 52 elective guidance in an urgent case: acceptable as written. Pass, with a note for the physician.
6. ACEP 2026: not opened. Nothing keyed conflicts with it on fasting.
8. 50 q4: the CNS depressant warning is general in ACS and is applied fairly. Pass.

No silent reversal of a SCORING-RULINGS item was found. No signed item is contradicted.

## For the physician

- KF4 "not sedation alone" is now keyed or tested in 48 q2, 49 q1, 50 q4 and 51 q3, and in the batch17 hoist-transfer case. Each keys a different decision, but the angle is concentrated in this batch.
- 52 q3 applies elective GLP-1 guidance to an urgent, limb-threatening reduction.
- 50 q3 depends on how current regional anesthesia guidance classifies interscalene blocks on DOACs.

## Fails with exact fixes

1. analgesia-sedation-49 q2 (mock-mode cue created by the q1 rewrite). In q1, replace "Restrain him gently for the scan" with "Give intranasal fentanyl with midazolam", optionally replace "Give midazolam, analgesia after the CT" with "Give oral ibuprofen, then scan now", and give each new distractor a true reason in the q1 explanation. Keep both keys.
2. analgesia-sedation-50 q3 (lone "Deferred" key, and references differ on interscalene blocks on a DOAC). Name the ACS trauma pain guideline in the lead-in, recast all five options in the parallel "Acceptable ..." form listed above with "Acceptable 72 hours after her last apixaban dose" as the key, rewrite the explanation to match, and check and report the ASRA 2025 apixaban interval.
3. analgesia-sedation-51 q1 (key is the only option without a dose and without "then retry"). Drop ", then retry" from the four distractors and write the key as "lidocaine 1% intra-articular".

Overall: FAIL (3 items)
