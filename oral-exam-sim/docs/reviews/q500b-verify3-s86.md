# Q500B verification review 3: s86 (revision 3), Cerebrovascular accident (CVA)

Batch: `src/samps/s86/cva.ts` (`CVA_S86`), ids cva-48 to cva-52. Earlier verdicts: `docs/reviews/q500b-qa-s86.md` (10 fails), `docs/reviews/q500b-verify-s86.md` (2 fails) and `docs/reviews/q500b-verify2-s86.md` (1 fail, cva-48 q4). Writer report with Revision 1 to 3: `docs/reviews/q500b-writer-s86.md`.

I did not write or review this batch before. I edited no file except this verdict (REVIEW-RULES rule 1). I reviewed the whole final batch, every stem, update, option and explanation sentence, with both lenses.

## Tests

`SAMP_BATCH=s86 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass (near duplicate stem test 7.1 s). `npx tsc --noEmit -p . 2>&1 | grep samps/s86` prints nothing.

## Earlier fails: status

| # | Item | Status |
|---|---|---|
| QA 1 to 10 | All first-review items | Resolved. Rechecked against the current text: new cva-49 and cva-50 patients, cva-49 q2 claims now in the stem, cva-49 q4 update no longer names the single A1, cva-50 warfarin sentence gone, cva-51 CT and CTA in the stem, cva-51 q2 prompt neutral, cva-52 kept on the coordinator ruling with the Lens B points fixed. |
| V1 | cva-48 stem repeats delirium-agitation-10 | Resolved. 74-year-old man, hatchback head strike 5 weeks ago, ASA 81 mg alone, 19 mm subdural with 4 mm shift. |
| V2 | cva-48 q4 repeats factor Xa reversal | Resolved. No reversal, andexanet, PCC or Dex-CSDH content remains. |
| V2-2 | cva-48 q4 strawman distractors (key the only treatment) | Resolved. "Holter monitor for 24 hours" and "Lipid profile and HbA1c" are replaced by "Atorvastatin 80 mg daily" and "Perindopril 4 mg daily". The key now sits among three treatments a high-risk TIA pathway would start, so a candidate must know that the antithrombotic, not the statin or the ACE inhibitor, is what expands a subdural. No second antithrombotic was added, so there is one defensible key. Options are alphabetical (ASA, Atorvastatin, Carotid, Outpatient, Perindopril, Stroke), 23 to 32 characters, select 1. The stem now gives atorvastatin 20 mg, so 80 mg reads as an increase, and the explanation says so. Each new distractor has a true reason. |

## Numbers recomputed

- cva-48: third spell 09:30, arrival 11:00, inside 48 hours. Speech symptoms make it high risk under CSBPR, so the q4 "high-risk" wording fits (ABCD2 4). Atorvastatin 20 to 80 mg matches stem and explanation. BP 148/82 matches.
- cva-49: 14:20 to 15:05 is 45 minutes, to 15:30 is 1 hour 10 minutes. Tenecteplase 0.25 x 62 = 15.5 mg, under 25 mg. BP 174/90 below 185/110. Right A1 occluded with left A1 absent fits the left leg being weaker (right ACA) plus both territories.
- cva-50: 80% within 70 to 99%. SAMMPRIS 14.7% against 5.8% at 30 days (abstract read). DAPT 3 months. LDL 2.9 against below 1.8 mmol/L.
- cva-51: 9 days past 48 hours. ASA at least 160 mg once. At least 2 weeks of monitoring at 55 or older (63). Below 140/90 mmHg.
- cva-52: 22:30 to 07:15 is 8 hours 45 minutes. E4 V1 M1 = 6. BP 172/94 below 185/110. pc-ASPECTS 8.

## Sources verified

| Id | How checked | Supports the point |
|---|---|---|
| s86-csbpr-sp | Page HTTP 200. Downloaded csbpr7-spos-module-final-eng-2020.pdf myself and searched the text: "at least 160 mg of acetylsalicylic acid immediately as a one-time loading dose after brain imaging has excluded intracranial hemorrhage" (6.1), "consistently lower than 140/90 mm Hg" with the lacunar exception (3.2), "A target LDL cholesterol level of < 1.8 mmol/L" with ezetimibe if above it on maximal statin. | Yes, including the new cva-48 q4. |
| s86-csbpr-acute | Page HTTP 200. Module content (tenecteplase 0.25 mg/kg to 25 mg, thrombolysis not delayed for EVT, basilar EVT within 24 hours, A2 and other medium vessels by joint decision) as read in full by the two earlier verifiers. I did not re-download this PDF. | Yes, on their quotes. |
| s86-russell-csdh | eutils abstract of PMID 4057306 read: recurrent episodes simulating TIA, local ischemia, focal epileptic discharge, cortical depression, CT recommended. | Yes (cva-48 q1, q3). |
| s86-sammpris | eutils abstract of PMID 21899409 read. | Yes (cva-50 q3). |
| s86-forsberg-aca | PMC6927436 HTTP 200. | Yes, mechanism only. |
| s86-locked-in | PMC549115 HTTP 200. | Yes (cva-52 q1 to q3), as quoted by both earlier verifiers. |

PubMed web pages return HTTP 203 to curl, so I read the two abstracts through eutils. I did not use WebFetch. No source was left unopened, but for s86-csbpr-acute, s86-forsberg-aca and s86-locked-in I confirmed the page resolves and relied on the earlier verifiers' quotes rather than rereading the full text.

## Overlap check

Grepped `src/samps` and `src/cases` for "most harm", "Perindopril 4 mg daily" and "Atorvastatin 80 mg daily" as options. "Most harm" appears only in s86 and one unrelated cqi item (s30). The new options appear in no other SAMP. The earlier verifiers' bank-wide searches for the other four SAMPs still hold, since nothing else changed.

## Verdicts by SAMP and question

### cva-48 Spells of losing his words: PASS

- Stem, q1, q2, q3: PASS.
- q4: PASS. Key supported by CSBPR SP 6.1 (antiplatelet load only after imaging excludes hemorrhage). Distractors are plausible peers and each is rejected for a true reason.

### cva-49 Slid from her chair: PASS

- Stem, q1 to q4: PASS.

### cva-50 Spells blamed on the inner ear: PASS

- Stem, q1 to q4: PASS.

### cva-51 An episode she nearly did not mention: PASS

- Stem, q1 to q4: PASS.

### cva-52 Eyes open but not moving: PASS

- Stem, q1 to q4: PASS.

## House style and format

No em or en dashes (grep count 0). No semicolons in content strings. Canadian spelling. No personal names. No mnemonics. Options alphabetical with "No ..." options last. In cva-51 q2, "ASA and clopidogrel for 21 days" sits before "ASA 160 mg once, then 81 mg daily", which the test allows as doses of one drug sitting together (SAMP_SPEC section 7). `reviewed: false`, `version: 1`, `author: "Preceptor"` on all five.

## Notes for the physician (not fails)

- cva-48 q4: SPARCL found a small rise in hemorrhagic stroke with atorvastatin 80 mg. That is a long-term effect and far smaller than dual antiplatelet loading on a shifting subdural, so the key holds, but a physician may prefer "does not impair clotting" to stay as the only statin claim.
- cva-48 q4: the prompt's "without brain imaging" and the q3 update ("Imaging shows ...") both point to imaging in mock mode, which echoes the q2 key. Earlier reviews accepted the q3 update under B6. I judge the q4 wording a minor further cue, not a fail, because q2's options include two brain imaging tests.
- cva-51 q2: the explanation says the dual antiplatelet trials enrolled within the first day (CHANCE, POINT, THALES). INSPIRES (2023) enrolled up to 72 hours. 9 days is outside both, so the key holds.
- cva-51 q4: the prompt scopes the answer to CSBPR (below 140/90 mmHg). Hypertension Canada guidance has moved toward lower general targets. The scoping makes the key safe, but the physician may want to confirm the bank's stance.
- cva-49 q4 and cva-52 q4: the EVT judgements (A1 occlusion as a joint decision, extended-window thrombolysis not offered at 8 hours 45 minutes) are defensible under the 2025 EVT update and were accepted by both earlier verifiers.

## Fix table

None.

## Key changes

None. Reviewers do not edit.

## Summary

5 SAMPs, 20 questions. All 13 earlier fails are resolved, including the cva-48 q4 distractors. Every number recomputes and every source opened supports its point. No new defect found.

Overall: PASS
