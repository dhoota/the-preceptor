# Q500B verification review: s86 (revision 1), Cerebrovascular accident (CVA)

Batch: `src/samps/s86/cva.ts` (`CVA_S86`), ids cva-48 to cva-52. First review: `docs/reviews/q500b-qa-s86.md`. Writer report with "Revision 1": `docs/reviews/q500b-writer-s86.md`.

I did not write or review this batch before. I did not edit any file except this verdict (REVIEW-RULES rule 1). I reviewed the whole final batch, not only the changed text.

## Tests

`SAMP_BATCH=s86 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass. The near duplicate stem test passes, but it does not catch the repeat reported under cva-48.

## Coordinator rulings checked

- cva-52 keeps the locked-in basilar scenario. `src/cases/batch18/` now holds only airgun-pellet-eye-rural-child, cannabis-gummies-older-woman-drowsy, early-pregnancy-bleeding-partner-violence and post-lysis-bleed-rural-anterior-stemi. A bank-wide grep for "locked-in", "locked in" and "E4 V1 M1" finds only s86. The overlap is gone.
- cva-48 keeps the chronic subdural scenario. headache-48 in `src/samps/s75/headache.ts` is now "Headache, double vision and a numb lip". s75 has no "subdural", "apixaban" or "slipped on ice". That overlap is gone. **A different overlap remains, with delirium-agitation-10 (see cva-48).**

## First-review fails: status

| # | Item | Status |
|---|---|---|
| 1 | cva-48 stem (headache-48) | Resolved on the ruling. But see the new fail against delirium-agitation-10. |
| 2 | cva-48 q4 (Dex-CSDH repeat, unsupported key) | Dex-CSDH content removed and the new key is supported by Thrombosis Canada. But the rebuilt question repeats delirium-agitation-10 q2. Fails again on a new ground. |
| 3 | cva-49 stem retold the case report | Resolved. New patient (81-year-old woman, church hall, right A1 occlusion, left A1 absent). |
| 4 | cva-49 q2 claims not in stem | Resolved. The stem now gives no back pain, bruising, tenderness or step, and equal radial and femoral pulses. |
| 5 | cva-49 q4 update gave away the q3 key | Resolved. The update now reads only "occlusion of the distal right A1 segment". |
| 6 | cva-50 stem near copy of cva-43 | Resolved. Vertigo, perioral numbness and dysphagia at rest, a woman who has never smoked, closing sentences rewritten. q1 explanation now centres on fluctuation over more than 48 hours. |
| 7 | cva-50 q3 warfarin sentence | Resolved. Sentence deleted. The balloon angioplasty distractor is rejected on CSBPR SP 9.4, which is in the SAMP sources. |
| 8 | cva-51 q1 CT and CTA not in stem | Resolved. |
| 9 | cva-51 q2 prompt cue | Resolved. |
| 10 | cva-52 duplicate and Lens B points | Resolved. Oral case replaced. q3 is new and no longer repeats cva-50 q1, cva-43 or cva-47. "usually spared", "a man who may be fully conscious", BP 172/94 mmHg are all in. |

## Numbers recomputed

- cva-48: last apixaban 08:00, now 11:40 is 3 hours 40 minutes, under 8 hours. Apixaban 5 mg, so the Thrombosis Canada table gives the andexanet low-dose regimen (400 mg bolus, 4 mg/min for 120 minutes). Correct.
- cva-49: 14:20 to 15:05 is 45 minutes. 14:20 to 15:30 is 1 hour 10 minutes. Tenecteplase 0.25 mg/kg x 62 kg = 15.5 mg, under the 25 mg cap. BP 174/90 is below 185/110. Correct.
- cva-50: 80% stenosis is within SAMMPRIS 70 to 99%. 14.7% against 5.8% at 30 days (PMID 21899409). DAPT 3 months. LDL below 1.8 mmol/L. Correct.
- cva-51: ABCD2 would be 5 (not tested). ASA load at least 160 mg. Monitoring at least 2 weeks at age 55 or older. BP below 140/90. Correct.
- cva-52: 22:30 to 07:15 is 8 hours 45 minutes. GCS E4 V1 M1 = 6. BP 172/94 below 185/110. pc-ASPECTS 8. Correct.

## Sources verified

| Id | How checked | Supports the point |
|---|---|---|
| s86-tc-bleed | Downloaded the PDF from the cited URL (HTTP 200) and read it. "Major Bleeding: Intracranial hemorrhage or critical site bleed", "Hold anticoagulant therapy", "Targeted reversal agents should be used if available", the andexanet table (apixaban 5 mg or less, under 8 hours: low dose), and "4F-PCC ... 25-50 units/kg with a maximum single dose of 3000 units" when targeted agents are not available. | Yes |
| s86-locked-in | WebFetch of PMC549115: "insult to the ventral pons", "quadriplegia and anarthria with preservation of consciousness", "usually retain upper eyelid control and vertical eye movement", "can be missed if voluntary vertical eye movement is not assessed". Basilar occlusion is listed as a cause. | Yes for q1, q2 and the key of q3. The article does not mention the GCS or the reticular formation, so the q3 mechanism sentences are reasoning from those facts, which is acceptable. |
| s86-csbpr-sp, s86-csbpr-acute | Pages resolve (HTTP 200). The first reviewer read the module PDFs section by section. I rechecked their quotes against the text the batch now uses. | Yes |
| s86-russell-csdh, s86-sammpris | PubMed pages resolve. Abstract content as recorded in the first review. | Yes |
| s86-forsberg-aca | PMC6927436 resolves. Now cited for the mechanism only. | Yes |

## Bank-wide keyword search

Searched `src/samps` and `src/cases` for: subdural, chronic subdural, apixaban with head strike, andexanet, locked-in, vertical gaze, E4 V1 M1, basilar occlusion, basilar stenosis, intracranial stenosis, SAMMPRIS, anterior cerebral, A1 segment, both A2, paraparesis, betahistine, perioral and around her mouth, 1.8 mmol, 140/90, ECG monitoring and Holter, 160 mg, more than 48 hours.

- **delirium-agitation-10** (`src/samps/s08/delirium-agitation.ts`, "New confusion two days after a fall"): an 82-year-old woman on apixaban 5 mg twice daily for atrial fibrillation, head strike after a fall, last apixaban dose 3 hours before, CT "14 mm acute on chronic left subdural hematoma with 6 mm of midline shift. Neurosurgery will operate.", then q2 "What agent would you give to reverse her anticoagulation?", key PCC or andexanet, with vitamin K, protamine and idarucizumab rejected. cva-48 has an 82-year-old woman on apixaban 5 mg twice daily for atrial fibrillation, a head strike after a slip, last dose about 3 hours before arrival, a 16 mm left chronic subdural with 7 mm of shift, neurosurgery to drain, then q4 reversal with andexanet, with idarucizumab, protamine and vitamin K rejected. Same patient, same lesion, same key decision. Fail below.
- s27 cva (basilar top occlusion, recent hip surgery): keys thrombectomy for basilar occlusion within 24 hours, with heparin as a distractor. cva-52 q4 tests the extended window at 8 hours 45 minutes with the patient past the thrombolysis window, a different reason for the key. Accepted, not a fail.
- s27 cva "ECG monitoring for 24 hours or more" is the first-line step. cva-51 q3 tests the next step after a negative Holter (at least 2 weeks). Distinct.
- s27 cva-43 and the vertebrobasilar symptom list questions: cva-50 q1 now tests the significance of fluctuation, not symptom recognition. Distinct.
- No other bank item covers the bilateral ACA single A1 picture, symptomatic intracranial stenosis, SAMMPRIS, the CSBPR LDL target, the late-presenting TIA, or locked-in syndrome.

## Verdicts by SAMP and question

### cva-48 Spells of losing her words: FAIL (2 items)

- **Stem: FAIL (medium, overlap with delirium-agitation-10).** Age 82, female, apixaban 5 mg twice daily for atrial fibrillation, head strike after a fall, last dose about 3 hours before arrival, and (in the q3 update) a left subdural of 14 to 16 mm with 6 to 7 mm of shift going to surgery. Read side by side it is the same patient. The coordinator ruling covered headache-48 only. **Fix:** keep the TIA-mimic angle and change the patient so nothing matches delirium-agitation-10: for example a man in his 70s, a different mechanism (struck his head on a cupboard door, or a fall from a ladder), and no anticoagulant, on ASA 81 mg alone for stable coronary disease (or on no antithrombotic). Change the update numbers (thickness, shift) so they do not echo 14 mm and 6 mm. Update the q1 and q2 explanations ("in a woman taking apixaban", "her anticoagulant") to match.
- q1: PASS. Key defensible (Russell 1985). Distractor reasons true. Recheck the explanation wording after the stem change.
- q2: PASS. "can show" wording fixed. CT first is correct.
- q3: PASS. Mechanism matches the Russell abstract. The update cue is needed by q3 and accepted under B6.
- **q4: FAIL (high, repeats delirium-agitation-10 q2).** Reversing a factor Xa inhibitor for a subdural before surgery, with andexanet or PCC keyed and vitamin K, protamine and idarucizumab rejected for the same reasons, is the key decision of delirium-agitation-10 q2 (and is also tested in s14 multiple-trauma, s16 shock and the batch13 oral case boarder-hard-to-wake). The brief bars a repeated key decision. **Fix:** rebuild q4 on key feature 1 and a decision no bank item tests. With the stem change above (ASA alone or no antithrombotic), use the angle the first review suggested: "Had her spells been treated as a high-risk TIA without brain imaging, which of the following would have caused the most harm?" Key: "ASA and clopidogrel loading" (or the menu equivalent). Distractors that do no comparable harm, for example "Atorvastatin 80 mg daily", "Carotid Doppler ultrasound", "Outpatient echocardiogram", "Holter monitor for 24 hours". Explanation: CSBPR SP requires brain imaging to exclude hemorrhage before any antiplatelet load (6.1 i), and dual antiplatelets on top of a subdural with midline shift risk expansion. Cite `s86-csbpr-sp`. Drop `s86-tc-bleed` from the SAMP sources if no question cites it (validateSamp fails an uncited source). Do not reintroduce Dex-CSDH. If the writer keeps an anticoagulated patient, the q4 decision must still not be reversal.

### cva-49 Slid from her chair: PASS

- Stem: PASS. New patient, Forsberg cited for the mechanism only. Grep for "quilting", "church hall" and "slid from her chair" finds nothing else.
- q1: PASS. Frontal signs (drowsiness, abulia, sparse speech) separate brain from cord. Extensor plantars, incontinence, leg-only weakness and sudden onset correctly said to fit both.
- q2: PASS. Every reason in the explanation is now in the stem.
- q3: PASS. Anatomy correct. The q3 update (CT, CT perfusion) is needed and accepted under B6. Giving the absent left A1 only in the explanation follows the first review's fix.
- q4: PASS. 15.5 mg and 1 hour 10 minutes correct. "Urgent EVT review" is defensible under the 2025 EVT update (ICA, M1 and basilar are the standard targets, other occlusions a joint decision).

### cva-50 Spells blamed on the inner ear: PASS

- Stem: PASS. No longer a near copy of cva-43.
- q1: PASS. Supported by CSBPR SP 1.1 clinical consideration 2. Perioral numbness and dysphagia correctly called brainstem symptoms. Spells at rest argue against a positional cause.
- q2: PASS. 90 days of DAPT for symptomatic intracranial stenosis (6.2.1 v and viii, 9.4). The update cue is needed by q2 to q4 and accepted under B6.
- q3: PASS. SAMMPRIS numbers correct. The angioplasty sentence is supported by CSBPR SP 9.4 ii, in the SAMP sources. Unrequested change (the balloon angioplasty distractor) judged on merit: it is wrong for the stated reason and does not cue the key.
- q4: PASS.

### cva-51 An episode she nearly did not mention: PASS

- Stem: PASS.
- q1: PASS. CSBPR SP 1.1 iii and 1.2 i.
- q2: PASS. CSBPR SP 6.1 i. The q2 update (imaging done) implies q1's key, but q2 needs hemorrhage excluded, so it is accepted under B6. Optional: "ASA 160 mg once, then 81 mg daily" would sort before "ASA and clopidogrel for 21 days" in a strict character sort. It does not cue the key and the tests pass, so it is not a fail.
- q3: PASS. CSBPR SP 4.2 iii.
- q4: PASS. CSBPR SP 3.2.

### cva-52 Eyes open but not moving: PASS

- Stem: PASS. Prodrome removed. No other bank item has locked-in syndrome.
- q1: PASS. Supported word for word by Smith and Delargy.
- q2: PASS. "usually spared" in. Localization correct.
- q3: PASS. New question. Key follows from "quadriplegia and anarthria with preservation of consciousness". The q3 prompt names locked-in syndrome, but not the q1 key (vertical gaze) or the q2 key (base of the pons), so B6 is not breached.
- q4: PASS. Thrombectomy within 24 hours for basilar occlusion (2025 EVT update). "Outside the standard 4.5-hour window" is accurate. Unrequested key rewording to "Thrombectomy now" keeps noun-phrase grammar with the other options. Close to the s27 basilar thrombectomy item, but the deciding reason differs (time window here, recent surgery there).

## House style and format

No em or en dashes. No semicolons in content strings. Canadian spelling (hemorrhage, centre, tumour). No personal names. No mnemonics. Options alphabetical with "No ..." actions last. `reviewed: false`, `version: 1`, `author: "Preceptor"` on all five.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| cva-48 | stem | stem, q3 update | Same patient as delirium-agitation-10 (82-year-old woman, apixaban 5 mg twice daily, AF, fall with head strike, last dose about 3 hours, left subdural of 14 to 16 mm with 6 to 7 mm shift, to surgery) | medium |
| cva-48 | q4 | whole question | Repeats the delirium-agitation-10 q2 key decision (factor Xa reversal for a subdural before surgery, same distractors) | high |

## Notes for the physician (not fails)

- If any version of cva-48 keeps andexanet keyed before surgery: ANNEXA-4 excluded patients planned for surgery within 12 hours, and some centres prefer PCC before an operation. Thrombosis Canada does prefer a targeted agent where available, so the key was defensible. This becomes moot if q4 is rebuilt as asked.

## Summary

5 SAMPs, 20 questions. Nine of the ten first-review fails are resolved, and both coordinator rulings hold (no locked-in content in batch18, no subdural content in s75). The bank-wide search found that cva-48, in both its stem and its rebuilt q4, repeats delirium-agitation-10 (s08). The first review did not catch this. cva-49 to cva-52 pass.

Overall: FAIL (2 items)
