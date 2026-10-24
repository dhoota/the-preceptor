# Q500B verify review 2: s81, Analgesia/sedation (revision 3)

This is a fresh independent review of the whole final batch in `src/samps/s81/analgesia-sedation.ts` (analgesia-sedation-48 to analgesia-sedation-52). The reviewer did not write, edit or review this batch before, and has edited nothing in it (REVIEW-RULES rule 1). Both lenses were applied. Inputs were `docs/reviews/q500b-qa-s81.md`, `docs/reviews/q500b-verify-s81.md` and `docs/reviews/q500b-writer-s81.md`, including its Revision 1 to 3 sections.

## Tests

`SAMP_BATCH=s81 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass, including the bank-wide near-duplicate stem test. The only semicolons in the file are TypeScript syntax. No em or en dashes. Spelling is Canadian. No personal names.

Single key positions (first to fifth) are 4, 4, 4, 4, 3, recounted from the file.

## Sources verified

| Source | How checked | Result |
|---|---|---|
| ACS TQIP 2020, acute pain | Full PDF fetched and text extracted | Table 8: apixaban "Hold 72 hours prior to insertion". Footnote: ASRA compliance applies to "epidural, quadratus lumborum, brachial plexus, sciatic and lumbar placement". "Interscalene block invariably causes Horner's syndrome and ipsilateral phrenic nerve weakness". Behavioural tools "do not classify pain severity". Fentanyl IV 25-50 mcg. Ketamine 0.3 mg/kg, dose based on ideal body weight. Warnings on other CNS depressants. Supports 50 q1 to q4, 51 q3 and 52 q4. |
| Kindel 2025, GLP-1 RA guidance | PMC full text fetched | Escalation phase, higher dose, weekly formulation and GI symptoms as risk factors. Gastric ultrasound can be used to assess aspiration risk. With retained contents, weigh RSI with general anesthesia against cancellation. 24-hour liquid diet for planned cases. Supports 52 q1 to q3. Published online October 2024, in print 2025, so the citation year is acceptable. |
| CPS 2021, procedural sedation | cps.ca page fetched | At least two providers, one dedicated to continuous monitoring. Delegation of monitoring and directed drug giving when the sedating clinician does the procedure. ASA I or II. Anesthesia consultation for "a history of difficult intubation". Supports 49 q3 and q4. |
| ASRA 2025, fifth edition | Secondary summaries only (ESRA newsletter, ASRA PBLD page, through WebSearch) | High-dose apixaban (5 mg twice daily) keeps a 72-hour hold before deep plexus blocks. This agrees with the 50 q3 key. The primary text was not opened. |

Not re-opened in this round, relying on two earlier reviews that read them: Fraser Health opioid principles (PDF), Warden 2003 PAINAD, CPS 2019 managing pain and distress, SOGC 2015 pregnant trauma, Wakai 2011 Cochrane. Not opened at all: the primary ASRA 2025 full text, and the ACEP 2026 unscheduled sedation guidelines (writer uncertainty 6). Nothing keyed depends on ACEP 2026.

Numbers recomputed: morphine 20 mg PO q4h is 120 mg/day PO, so half by the SC route is 10 mg SC q4h, or 60 mg/day, and 10% breakthrough is 6 mg. 2.5 mg is a quarter of 10 mg. Ketamine 100 mg at 100 kg is 1 mg/kg. All correct.

## Resolution of earlier fails

| Review | Fail | Resolved? |
|---|---|---|
| QA 1 | 48 q4 update revealed q3 | Yes ("Later he settles.") |
| QA 2 | 49 q1 retold signed s02-05 q2 | Yes. New patient, injury and decision. |
| QA 3 | 49 q4 mirrored s22-26 asthma | Yes. Difficult intubation, verified in CPS 2021. |
| QA 4 | 50 q3 recombined s22-24 and s22-45 | Yes. New interscalene and apixaban decision. |
| QA 5 | 51 q1 sedation distractors | Yes |
| QA 6 | 51 q4 repeated s14 4-hour monitoring | Yes. Now KF6 discharge advice. |
| QA 7 | 52 q3 block angle and update cues | Yes |
| QA 8 | 52 stem copied s06 and s22-27 | Yes. Elbow dislocation, duplicate test passes. |
| Verify 1 | 49 q2 cue from q1 | Yes. q1 now has "Give intranasal fentanyl with midazolam" and "Give oral ibuprofen, then scan now", each with a true reason. See the residual note below. |
| Verify 2 | 50 q3 lone "Deferred" key and reference variance | Yes. The lead-in names the ACS guideline, all five options are parallel, the explanation matches. ASRA 2025 secondary sources keep 72 hours for high-dose apixaban. |
| Verify 3 | 51 q1 key stood out by form | Yes. ", then retry" is gone and the key reads "lidocaine 1% intra-articular". |

No overlap with batches added since revision 2 (s82 to s88) was found. GLP-1 aspiration, interscalene on apixaban, aphasia pain assessment and oral to SC morphine conversion are not keyed elsewhere in `src/samps` or `src/cases`.

## Verdict by SAMP and question

### analgesia-sedation-48 (palliative restlessness): FAIL (1 item)

- q1 PASS on content.
- q2 PASS. q4 PASS.
- q3 FAIL (mock-mode cue, high confidence, missed by both earlier reviews). The q3 update reads "he still grimaces and moans when he is moved". In mock mode all questions show at once, and "still grimaces ... when he is moved" names the q1 key "Grimacing when he is turned" and tells the candidate it was already present. The q4 update adds "asleep with a relaxed face", which points the same way. Wording can remove both. Fix:
  - q3 update: change "he still grimaces and moans when he is moved" to "he still moans and pulls away when he is moved". Keep the rest of the update.
  - q3 explanation: no change needed (it does not mention grimacing).
  - q4 update: change "he is asleep with a relaxed face and rouses to voice" to "he is asleep and settled and rouses to voice". Optionally drop the awkward double "Later ... An hour later" by opening "He settles. An hour later ...".

### analgesia-sedation-49 (boy thrown from a dirt bike): PASS

- q1 PASS. Every distractor has a true reason. q2 PASS. q3 PASS. q4 PASS.
- Residual note (B6 allowance, not a fail): the q2 options "CT after intranasal midazolam" and "CT after IV ketamine sedation" still imply that no sedative was given at q1, so elimination narrows q1 to the key or ibuprofen. This is built into the q2 decision and cannot be worded away without losing it.
- Note: the stem has a resident ordering midazolam, and q3 says "you are the only physician in the hospital" at 03:00. It is not a contradiction (the resident may have gone off duty), and the key does not change, but adding "The resident has gone off duty" to the q3 update would remove the question.

### analgesia-sedation-50 (aphasia after a stroke): PASS

- q1 to q4 PASS. 50 q3 is verified against ACS Table 8 and its footnote.
- The self-rating in the q2 and q4 updates still narrows q1 in mock mode. This stays under the B6 allowance, as both earlier reviews ruled.
- Minor: the q1 explanation says PAINAD is meant for advanced dementia, which is a Warden 2003 point, but this SAMP lists only the ACS source. The claim is true. The writer may add `S.painad` to the sources if wished.

### analgesia-sedation-51 (shoulder dislocation at 30 weeks): PASS

- q1 to q4 PASS. The key still lacks a dose while the distractors carry one, but the earlier fix was applied as written and the key no longer stands out by phrasing.

### analgesia-sedation-52 (semaglutide and elbow dislocation): PASS

- Stem and q1 to q4 PASS. The Kindel points are verified. The doses in q4 are correct.

## For the physician (judgement points, not fails)

- 48 q4: continuing regular morphine at a resp. of 12/minute in a rousable comfort-care patient is a palliative judgement. It matches Fraser Health.
- 49 q3: a tibial and fibular shaft reduction usually needs a third pair of hands for traction. The question asks only for the minimum sedation team, which CPS 2021 sets at two.
- 50 q3: the key follows ACS 2020 (ASRA deep plexus rules for all brachial plexus blocks). Some regional anesthesia practice treats an ultrasound-guided interscalene block on a DOAC more permissively. ASRA 2025 secondary sources keep 72 hours for high-dose apixaban. Holding apixaban for a block in a woman with atrial fibrillation and a previous stroke is itself a judgement call.
- 51 q1: the Cochrane evidence for intra-articular lidocaine is low quality, and IV opioid before another attempt is common practice. The key rests on equal success with fewer adverse effects.
- 52 q3: elective GLP-1 guidance is applied to an urgent, limb-threatening reduction. Some physicians would accept ketamine sedation in the ED for a pulseless limb.
- KF4 "not sedation alone" is concentrated in this batch (48 q2, 49 q1, 50 q4, 51 q3).

No silent reversal of a SCORING-RULINGS item was found. No signed item is contradicted.

## Fails with exact fixes

1. analgesia-sedation-48 q3 (mock-mode cue to the q1 key). In the q3 update change "he still grimaces and moans when he is moved" to "he still moans and pulls away when he is moved". In the q4 update change "he is asleep with a relaxed face and rouses to voice" to "he is asleep and settled and rouses to voice".

Overall: FAIL (1 item)
