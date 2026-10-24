# Q500B verification review 2: s86 (revision 2), Cerebrovascular accident (CVA)

Batch: `src/samps/s86/cva.ts` (`CVA_S86`), ids cva-48 to cva-52. Earlier verdicts: `docs/reviews/q500b-qa-s86.md` (10 fails) and `docs/reviews/q500b-verify-s86.md` (2 fails, both cva-48). Writer report with "Revision 1" and "Revision 2": `docs/reviews/q500b-writer-s86.md`.

I did not write or review this batch before. I edited no file except this verdict (REVIEW-RULES rule 1). I reviewed the whole final batch, not only the revision 2 text. Both lenses were applied to every question.

## Tests

`SAMP_BATCH=s86 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass (near duplicate stem test 7.9 s).

## Earlier fails: status

| # | Item | Status |
|---|---|---|
| QA 1 to 10 | All first-review items | Resolved in revision 1, confirmed by the first verifier. I rechecked each against the current text and agree. |
| V1 | cva-48 stem repeats delirium-agitation-10 (s08) | Resolved. Now a 74-year-old man, head strike under a car hatchback 5 weeks ago, ASA 81 mg alone for stable coronary disease, no anticoagulant, 19 mm subdural with 4 mm shift. delirium-agitation-10 is an 82-year-old woman on apixaban after a fall with a 14 mm acute on chronic subdural and 6 mm shift. No shared detail is left beyond the diagnosis, and the angle (TIA mimic) differs. |
| V2 | cva-48 q4 repeats the factor Xa reversal decision | Resolved as a repeat. Reversal, andexanet, PCC, `s86-tc-bleed` and Dex-CSDH are all gone. The new q4 tests harm from antiplatelet loading before imaging. It fails on a new ground (strawman distractors), below. |

## Numbers recomputed

- cva-48: third spell began 09:30, arrival 11:00, inside 48 hours, so imaging is immediate (CSBPR SP 1.1 ii). ABCD2 is 4 (age 1, BP 148/82 is 1, speech without weakness 1, 10 to 59 minutes 1, no diabetes), so "high-risk TIA" in the q4 prompt is consistent. Hand numbness is sensory and scores nothing. Head strike 5 weeks ago and spells over 2 weeks agree.
- cva-49: 14:20 to 15:05 is 45 minutes, to 15:30 is 1 hour 10 minutes. Tenecteplase 0.25 mg/kg x 62 kg = 15.5 mg, under 25 mg. BP 174/90 is below 185/110.
- cva-50: 80% stenosis is within 70 to 99%. SAMMPRIS 14.7% against 5.8% at 30 days (eutils abstract, PMID 21899409). DAPT 3 months. LDL 2.9 against a target below 1.8 mmol/L.
- cva-51: 9 days is past 48 hours. ASA load at least 160 mg. Monitoring at least 2 weeks at 55 or older (she is 63). BP below 140/90.
- cva-52: 22:30 to 07:15 is 8 hours 45 minutes. E4 V1 M1 = 6. BP 172/94 below 185/110.

## Sources verified

| Id | How checked | Supports the point |
|---|---|---|
| s86-csbpr-sp | Downloaded csbpr7-spos-module-final-eng-2020.pdf myself from the cited page (HTTP 200) and read it. 1.1 ii (brain and neurovascular imaging as soon as possible, before ED discharge), 1.1 iii (after 48 hours, as soon as possible), 1.1 clinical consideration 2 (vertebrobasilar fluctuation over more than 48 hours, mistaken for mimics, non-positional vertigo, dysphagia), 6.1 i (ASA at least 160 mg once, after imaging has excluded intracranial hemorrhage), 6.2 ii (antiplatelet after imaging excludes hemorrhage), 6.2.1 iv to viii (21 days, longer for symptomatic intracranial stenosis, SAMMPRIS 3 months), 3.2 (below 140/90, below 130/80 after ICH), lipids ii a (LDL below 1.8 mmol/L, ezetimibe add-on), 4.2 iii (at least 2 weeks of ECG monitoring at 55 or older). | Yes, for every question that cites it, including the new cva-48 q4. |
| s86-csbpr-acute | Downloaded csbpr7-acute-stroke-management-module-final-eng-2022-2025.pdf (dated 5 Dec 2025) myself. 5.3 tenecteplase 0.25 mg/kg up to 25 mg. 5.4.1 iv (thrombolysis to all eligible including EVT candidates, not delayed for any reason), v (EVT criteria: independent, disabling, last known well within 24 hours, ICA, M1 or basilar), clinical consideration 6 (M2, A2, P2 by joint decision). | Yes (cva-49 q2 and q4, cva-52 q4). |
| s86-russell-csdh | eutils abstract of PMID 4057306 read. CSDH simulating TIAs, mechanisms (local ischemia, focal epileptic discharge, cortical depression), CT recommended. | Yes (cva-48 q1, q3). |
| s86-forsberg-aca | PMC6927436 full text fetched with curl (HTTP 200). Absent right A1, sudden paraparesis MRC 1 to 2/5, bilateral Babinski, drowsy, decreased verbal output, apathy, abulia. | Yes, cited for the mechanism only. The cva-49 patient is now invented. |
| s86-sammpris | eutils abstract of PMID 21899409. | Yes (cva-50 q3). |
| s86-locked-in | PMC549115 full text fetched with curl. Ventral pons, quadriplegia and anarthria with preserved consciousness, retained vertical eye movement, "can be missed if voluntary vertical eye movement is not assessed". | Yes (cva-52 q1 to q3). |

PubMed web pages returned HTTP 203 to curl, so I read those two abstracts through eutils instead. I did not use WebFetch. No source was left unopened.

## Bank-wide keyword search

Searched `src/samps` and `src/cases` (Q500B batches s70 to s88 and batch15 to batch20 included) for: subdural (every hit read in context), hatchback, "mimicking transient", TIA mimic, word-finding and finding words, "before imaging", "without brain imaging", "imaging has excluded", "ASA and clopidogrel loading", transient ischemic and TIA in the Q500B batches, "after 48 hours" and "more than 48 hours", plus the terms the first verifier listed for cva-49 to cva-52.

- No other item has a chronic subdural hematoma presenting as TIA-like spells. Subdural items elsewhere are acute traumatic bleeds (s14, s45, s66, batch05, batch13), anticoagulated head strike with falling consciousness (s32 loc), pediatric abuse (s20, s67, batch06), or one item in a differential list (s05, s07, s08, s09, s16, s40, s47, s87). delirium-agitation-10 no longer matches (see V1). s45 multiple-trauma (83-year-old man, ladder fall, dual antiplatelets, expanding 6 to 12 mm acute subdural) is a different lesion and decision.
- "No antiplatelet before imaging excludes hemorrhage" also appears in s09 ems (one of eight accepted en route instructions) and s44 multiple-patients (a distractor "ASA 160 mg PO before imaging" in a nursing orders menu). In both it is a side point in a confirmed stroke code. In cva-48 q4 it is applied to a stroke mimic already shown to be a subdural, which neither tests. Not a repeat.
- s27 cva "ASA and clopidogrel loading" appears as an option in cva-21 q3 (fever recrudescence), a reperfusion item and cva-32 q1 (keyed DAPT for minor stroke). None keys it as the harmful choice in a mimic.
- s05 cva (66-year-old man, arm weakness and word-finding TIA within 48 hours) and s05 cva (3 weeks of progressive weakness with morning headaches, tumour) differ from cva-48 and cva-51 in timing and decision.
- cva-49 to cva-52: no new overlaps beyond those the first verifier judged acceptable.

## Verdicts by SAMP and question

### cva-48 Spells of losing his words: FAIL (1 item)

- Stem: PASS. New patient, no detail shared with delirium-agitation-10 or headache-48. "Hatchback" has no other bank hit. ECG sinus rhythm now in the stem, which q3 relies on.
- q1: PASS. Key defensible (Russell 1985). "Age older than 70 years" is true of him and is a risk factor for both conditions, so it is a fair distractor. Each distractor reason is true.
- q2: PASS. CSBPR SP 1.1 ii supports imaging as soon as possible. "can show" wording is in. The rejection reasons are true.
- q3: PASS. Mechanism matches the Russell abstract. "His ECG shows sinus rhythm" is now in the stem. The update cue (hematoma) is needed by q3 and accepted under B6.
- **q4: FAIL (medium, strawman distractors and category cue).** The key is clinically correct and supported (CSBPR SP 6.1 i and 6.2 ii: antiplatelets only after imaging excludes hemorrhage, and dual antiplatelet loading on a subdural with shift risks expansion). But the prompt asks which choice "would have caused the most harm", and "ASA and clopidogrel loading" is the only treatment among six options. The other five are tests, a referral and blood work, which the explanation itself says cannot make the bleed worse. A candidate who knows nothing about subdurals or antiplatelets picks the only drug. That breaks SAMP_SPEC section 7 ("every distractor is a plausible peer action ... no strawmen", "distractors match the key in specificity", B10) and the "key must not stand out" rule. **Fix:** replace two or three of the investigation distractors (for example "Lipid profile and HbA1c" and "Stroke prevention clinic referral") with treatments a high-risk TIA pathway would also start that do not make a subdural bleed, such as "Atorvastatin 80 mg daily" (statin intensification) and "Perindopril 4 mg daily" (BP 148/82 is above the CSBPR 140/90 target). Keep the options alphabetical, 6 to 8 in total, select 1, and give each new distractor a true reason in the explanation (for example: neither raises bleeding risk, so neither would expand the hematoma, although each still misses the diagnosis). Do not add any other antithrombotic (heparin, ticagrelor, apixaban), because it would also be harmful and give a second defensible key.

### cva-49 Slid from her chair: PASS

- Stem, q1 to q4: PASS. Checked again against the acute module (tenecteplase dose, thrombolysis not delayed for EVT, EVT occlusion criteria). "Tenecteplase and urgent EVT review" is defensible because A1 is not a listed standard target and medium vessel occlusions go to a joint decision. The absent left A1 is given only in the q3 explanation, as the first review asked.

### cva-50 Spells blamed on the inner ear: PASS

- Stem, q1 to q4: PASS. q1 explanation matches CSBPR SP 1.1 clinical consideration 2 almost word for word (dysphagia and non-positional vertigo listed). q2 matches 6.2.1 v and viii. q3 matches the SAMMPRIS abstract and SP 9.4. q4 matches the LDL target and ezetimibe add-on.

### cva-51 An episode she nearly did not mention: PASS

- Stem, q1 to q4: PASS. q1 (SP 1.1 iii, 1.2), q2 (SP 6.1 i), q3 (SP 4.2 iii) and q4 (SP 3.2) all checked against the module text.

### cva-52 Eyes open but not moving: PASS

- Stem, q1 to q4: PASS. q1 to q3 match Smith and Delargy. q4 meets 5.4.1 v (independent, disabling, within 24 hours, basilar occlusion). "Outside the standard 4.5-hour window" is accurate, and the key holds even if extended-window thrombolysis were considered, because tenecteplase alone is not the best reperfusion for a basilar occlusion.

## House style and format

No em or en dashes (checked by script). No semicolons in content strings. Canadian spelling (centre, tumour, hemorrhage as used bank-wide). No personal names. No mnemonics. Options alphabetical with "No ..." options last. The cva-48 q4 menu has 6 options, select 1, longest to shortest ratio 33 to 23 characters, within 2.6. Its prompt opens with a conditional clause before "which of the following", which the bank already allows (seven other Q500B prompts do so, and the test accepts it). `reviewed: false`, `version: 1`, `author: "Preceptor"` on all five.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| cva-48 | q4 | options, explanation | The key is the only treatment among six options in a "most harm" question. The five distractors are tests and a referral, so the key is found without knowledge | medium |

## Key changes

None. Reviewers do not edit.

## Needs physician decision

None new.

## Summary

5 SAMPs, 20 questions. All 10 first-review fails and both first-verifier fails are resolved. cva-48 no longer repeats delirium-agitation-10 in stem or decision. Every source opened and supports its point, and every number recomputes. One new fail: cva-48 q4 has strawman distractors that leave the key as the only drug option. cva-49 to cva-52 pass. Defects in: cva-48.

Overall: FAIL (1 item)
