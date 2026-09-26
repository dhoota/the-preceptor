# HOLD proposals: applied

Arjan approved every proposal as written. This file records what was applied to src/samps. Only the primary proposal was applied for each EDIT id. No "Alternative" was applied. Optional or separately approved second edits were also left out (see "Not applied" below).

Every before string still matched the current file, inside the named SAMP and question. So each edit was applied as written, and nothing had to be found elsewhere or left out. Each edited SAMP went from version 1 to version 2. `reviewed` is unchanged.

**Test-driven adjustments: none.** Every touched batch passed on the first run, so no wording was changed to satisfy a test.

## Per id

| id | Batch | Result | Notes |
|---|---|---|---|
| abdominal-pain-18 | s19 | Applied | q3 update and last sentence of the q3 explanation ("ultrasound" becomes "imaging"). |
| analgesia-sedation-17 | s22 | Applied, key change | q2 key is now "morphine 1.5 mg IV" (index 3), source cps-pain. q3 key is now "Fascia iliaca block" (index 1), source black-femur. All three sources are still cited. |
| asthma-copd-24 | s25 | Not needed | No change, release from HOLD. |
| chest-pain-39 | s28 | Not needed | No change, release from HOLD. |
| dvt-pe-30 | s33 | Not needed | No change, release from HOLD. |
| infectious-diseases-35 | s41 | Applied | q4 update only. The q4 key (fidaxomicin) is unchanged. |
| pre-eclampsia-23 | s47 | Applied | q1 option becomes "ergonovine 0.25 mg IM" (the key stays index 2). q2 update and q2 explanation changed. |
| suicide-risk-31 | s52 | Applied | Stem edited. q1 (VanTil veteran statistic) deleted, and q2 to q4 renumbered q1 to q3. Sources are [posner, safet, vac]. The unused `S.vantil` entry was removed. |
| abdominal-pain-28 | s19 | Not needed | No change, release from HOLD. |
| analgesia-sedation-29 | s22 | Applied, key change | q1 key is "fentanyl and propofol infusions" (index 1), source ed-awareness. q2 key is "Give fentanyl 50 mcg IV" (index 0). The q2 and q3 updates are edited. ed-awareness is added to sources inline, and padis stays. |
| asthma-copd-25 | s25 | Not needed | No change, keep both. |
| msk-34 | s29 | Applied | q3 prompt only (names the British Orthopaedic Association target). |
| ems-35 | s35 | Applied | q3 explanation, and the q3 source becomes patch-trauma. `S.patchTrauma` is added, and sources are [blsPcs, crash2, patchTrauma]. |
| ischemic-heart-disease-33 | s42 | Applied (main edit) | q3 update and q3 explanation, using the main "After" texts. The separately approved "minimal cue fix" was not applied (see below). |
| pulmonary-edema-28 | s48 | Not needed | No change, keep both. The optional wording tweaks were not applied. |
| abdominal-pain-29 | s19 | Not needed | No change, release from HOLD. The optional q2 cue edit was not applied. |
| anaphylaxis-38 | s23 | Applied | q3 update and q3 explanation. |
| asthma-copd-32 | s25 | Skipped | REJECT. It is being rebuilt separately, as instructed. |
| critical-appraisal-33 | s31 | Not needed | No change. The optional POT-CAST explanation sentence was not applied. |
| environmental-23 | s36 | Skipped | Withdrawn. It was rebuilt in sweep 3, as instructed. |
| lacerations-18 | s43 | Applied | q3 key text is "Psychosocial assessment and safety plan" (still index 3). q3 explanation changed, and the q3 source is cps-suicidal-ideation. Sources are [cps, quinnRisk]. The unused `S.nice` entry was removed. The optional q2 cue edit was not applied. |
| pulmonary-edema-33 | s48 | Applied, key change | q3 key is "hydromorphone 0.5 mg SC" (index 1). Morphine is removed from the options. q3 explanation changed, and the source is bc-palliative-2017. The `BCPAL` const is replaced by `BCGUIDE_PALLIATIVE`. Sources are [NIV, BCGUIDE_PALLIATIVE]. The optional q2 and q3 cue edit was not applied. |
| airway-19 | s21 | Applied | q3 and q4 updates. |
| arrhythmia-16 | s24 | Not needed | No change, release from HOLD. |
| burns-38 | s26 | Applied | q4 update and q4 explanation. |
| loc-25 | s32 | Not needed | No change, release from HOLD. |
| eye-21 | s37 | Applied, key change | q2 prompt, options and explanation changed. The key is "Ophthalmology review within 24 hours" (index 2). The q2 source is aao-conj, and the change was made in eye-21 q2 only. steroid-iop stays cited by q1. |
| lacerations-28 | s43 | Applied | Stem second paragraph, q2 explanation, and the q2 source (gonsalves-tongue, changed in lacerations-28 q2 only). Sources are [gonsalves, benbadis], and `S.rhCh35` is kept for other SAMPs. q3 update and prompt changed, and the q3 option is "No antibiotics" (key still index 4). |
| seizures-30 | s49 | Applied | `S.jungilligens` is added. The q2 source is jungilligens-2021, changed in seizures-30 q2 only. Sources are [lafrance, jungilligens], and `S.rosen88` is kept. q2 explanation and q3 update changed. |
| airway-24 | s21 | Not needed | No change, release from HOLD. |
| arrhythmia-20 | s24 | Not needed | No change, release from HOLD. The optional `brash` url was not added. |
| chest-pain-24 | s28 | Applied | q3 explanation (replaces the steroid sentence). |
| loc-37 | s32 | Applied | q3 and q4 updates. |
| first-trimester-bleeding-27 | s38 | Not needed | No change, release from HOLD. |
| multiple-patients-29 | s44 | Applied | Stem names CTAS 2016. q1 explanation and q2 update changed. |
| sob-23 | s51 | Applied, key change | Stem changed (no prior VTE or cancer). q1 options and explanation changed, and the key is "6 points" (index 2). q1 source is wells-2000, q3 source is wells-1998, and the q2 and q3 explanations changed. `WELLS2000` and `WELLS1998` consts are added. Sources are [TCPE, WELLS2000, WELLS1998]. |
| airway-40 | s21 | Applied | Title, stem (snowboard landing, 90 minutes) and the last sentence of the q1 explanation. |
| asthma-copd-16 | s25 | Applied, key change | Stem, vitals, q1 explanation, the q2 option (dexamethasone 5 mg PO) and the first sentence of the q2 explanation changed. q3 update, prompt, options and explanation changed. The q3 key is "Discharge home with return advice" (index 1), and the q3 keyFeature is asthma-copd 8. The q4 update is removed. The q4 prompt, the q4 option ("Wheeze after a coryzal prodrome") and the q4 explanation (one CPS sentence added) changed. |
| chest-pain-31 | s28 | Applied, key position | q1 and q2 prompts changed. q2 options and explanation changed, and the key is "Use the pregnancy-adapted YEARS rule" (index 4). The q2 source is tc-preg-dx. The q3 update, prompt and explanation and the q4 update and explanation changed, with units now mcg/L. The `TC_PREG_DX` const is added without a url, as proposed. The q3 prompt and q2 source edits were made inside chest-pain-31 only. |
| dvt-pe-19 | s33 | Applied | Stem's first two sentences (surgery 25 days ago, left-sided pain) and the q2 explanation. |
| headache-45 | s40 | Applied, key positions | q3 update changed. The q3 option "Tacrolimus review with transplant team" became "Immunosuppressant dose review", and the menu was re-sorted. correct is [1, 4] ("Controlled BP lowering", "Immunosuppressant dose review"). |
| multiple-patients-34 | s44 | Applied | q2 explanation changed, and the q3 option is "Keep his original place in the queue". |
| suicide-risk-30 | s52 | Applied, key change | q2 prompt changed (in suicide-risk-30 only), along with the q2 options and explanation. The q2 key is "Psychiatry assessment in the ED today" (index 3). q3 prompt changed. |

Totals: 28 applied (9 with a key or key position change), 13 not needed, 2 skipped.

## Key check

After the edits, the "correct" index of each of the 9 key changes points to the proposed key text:

- analgesia-sedation-17. q2 → "morphine 1.5 mg IV". q3 → "Fascia iliaca block".
- analgesia-sedation-29. q1 → "fentanyl and propofol infusions". q2 → "Give fentanyl 50 mcg IV".
- pulmonary-edema-33. q3 → "hydromorphone 0.5 mg SC".
- eye-21. q2 → "Ophthalmology review within 24 hours".
- sob-23. q1 → "6 points".
- asthma-copd-16. q3 → "Discharge home with return advice".
- chest-pain-31. q2 → "Use the pregnancy-adapted YEARS rule".
- headache-45. q3 → "Controlled BP lowering" and "Immunosuppressant dose review".
- suicide-risk-30. q2 → "Psychiatry assessment in the ED today".

## Not applied: optional or separately approved second edits

The instruction was to apply the primary proposal only. These extra edits each carry their own approve line or are labelled optional, so none was applied. Arjan should say explicitly if he wants any of them.

- ischemic-heart-disease-33: "Minimal cue fix". The q3 update would read "MI has now been excluded ..." and the explanation's first sentence would change to match. It is marked "Approve separately".
- lacerations-18: optional q2 cue edit (q2 update and the first sentence of the q2 explanation).
- pulmonary-edema-33: optional mock-mode cue edit (q2 update, options and explanation, and q3 update).
- abdominal-pain-29: optional q2 cue edit (the primary proposal is NO CHANGE).
- pulmonary-edema-28: the two optional wording tweaks (the primary proposal is NO CHANGE).
- critical-appraisal-33: optional POT-CAST sentence in the q4 explanation (the primary proposal is NO CHANGE).
- arrhythmia-20: optional `url` for the `brash` source (housekeeping).

## Follow-up outside src

suicide-risk-31 lost its q1, so its question ids moved down by one. These files cite suicide-risk-31 and may refer to the old numbering. They were not edited:
- docs/physician-review/s52-suicide-risk.md
- docs/PHYSICIAN_REVIEW.md
- docs/SAMP-TRIAGE.md
- docs/triage/s52.json
- docs/triage/s43.json
- docs/reviews/ (several files)
- docs/drafts/_pipeline/overlap-items.md

## Tests

- `SAMP_BATCH=<batch> npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passed for all 22 touched batches: s19, s21, s22, s23, s25, s26, s28, s29, s32, s33, s35, s37, s40, s41, s42, s43, s44, s47, s48, s49, s51 and s52.
- `npx tsc --noEmit -p .`: exit 0.
- `npm test`: 11 files and 29,890 tests passed.
