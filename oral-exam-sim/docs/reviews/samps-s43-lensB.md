# SAMP review, batch s43 (lacerations), Lens B: internal consistency and numbers

Lens: B (internal consistency and numbers). Scope: every SAMP in `src/samps/s43/lacerations.ts` (lacerations-16 to lacerations-38) and `src/samps/s43/review-extra.ts` (lacerations-39 and lacerations-40). Each SAMP was checked on its own, sentence by sentence against its stem and updates. The Lens A report was not relied on. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Important finding about the Lens A pass

The Lens A report says it changed the key of lacerations-39 q1 to index 1 and removed the invented lactate sentence from lacerations-40 q2. The file on disk, dated after the Lens A edits, still had both defects: lacerations-39 q1 keyed index 3 "Cephalexin for 5 days" and lacerations-40 q2 still ended with the lactate sentence. Both were fixed in this pass. The Lens A edits to lacerations.ts (lacerations-16 q4 removed, lacerations-17 q2 rebuilt, lacerations-29 stem IgG) are present.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| lacerations-39 (extra) | q1 | correct | Keyed "Cephalexin for 5 days" (index 3) while the explanation argues for amoxicillin-clavulanate for 3 to 5 days and says cephalexin has poor Pasteurella activity. Key set to index 1. | high |
| lacerations-40 (extra) | q2 | explanation | Ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate or blood gas is in the case. Sentence removed. | high |
| lacerations-17 | q4 | explanation | Said the wound is infection prone because the child "has never been immunized". Vaccine status does not change the risk of bacterial wound infection. The reason now rests on the ragged, manure contaminated wound, which the stem gives. | medium |
| lacerations-28 | q1 | explanation | Rejected "Whether siblings were in the room" because "no one saw the event". The stem says only that the mother did not see it. A sibling could be a witness, so the stated reason was unsupported. Rewritten: it may find a witness but is less direct than asking about seizure features. | medium |
| lacerations-27 | q3 | explanation | Said the fragment lies away from "joints, tendons and neurovascular structures". The update gives only "away from the wrist joint", and radiographs cannot show tendons or nerves. Now ties the decision to the stem: away from the wrist joint, with normal tendon function, sensation and perfusion. | medium |
| lacerations-21 | q2 | explanation | Said "long-term prednisone". The stem gives prednisone 5 mg daily with no duration. Now "daily prednisone". | low |
| lacerations-16 | q3 | explanation | Called it "a complete ulnar nerve injury". The update gives reduced, not absent, light touch. Now "an ulnar nerve injury at the wrist". | low |
| lacerations-19 | q2 | option | Distractor "penicillin G plus clindamycin IV" gave no doses while the key and other distractors gave drug, dose and route. Now "penicillin G 4 million units plus clindamycin 900 mg IV". The key is no longer the longest option. | low |
| lacerations-17 | q1 | options | Key "DTaP-IPV and tetanus immune globulin" was the longest option (1.43 times the mean distractor). Shortened to "DTaP-IPV and immune globulin" and the parallel distractor to "Tdap and immune globulin", matching lacerations-31 q4. | low |
| lacerations-36 | q1 | option | Option said "Td booster 4 years ago". The stem says only "last tetanus booster", with no product. Now "Tetanus booster 4 years ago". | low |

## Key changes

- lacerations-39 q1 (review-extra.ts): before index 3 "Cephalexin for 5 days", after index 1 "Amoxicillin-clavulanate for 3 to 5 days". Reason: the explanation, the stem (cirrhosis with ascites and leg edema) and IDSA 2014 all support amoxicillin-clavulanate for 3 to 5 days. This matches the key of lacerations-23 q1, of which lacerations-39 is a copy.

No key in lacerations.ts changed.

## Numbers recomputed (script in the scratchpad)

- Local anesthetic maxima. After the Lens A rebuild of lacerations-17 q2, no SAMP in s43 states or keys a lidocaine or bupivacaine dose. Maxima were still computed for every stem weight as a check (lidocaine plain 4.5 mg/kg to 300 mg, with epinephrine 7 mg/kg to 500 mg, 1% = 10 mg/mL). For example lacerations-17 at 18 kg: 81 mg (8.1 mL) plain, 126 mg (12.6 mL) with epinephrine. lacerations-34 at 12 kg: 54 mg (5.4 mL) and 84 mg (8.4 mL). Nothing in the text conflicts.
- Tetanus immune globulin dose. No SAMP states a dose. Under 7 years it would be 4 units/kg or 250 units (lacerations-17 at 18 kg: 72 units). No conflict.
- Antibiotic doses by weight. lacerations-19 q2 distractor vancomycin 15 mg/kg at 92 kg is 1 380 mg, a plausible wrong choice. Cefazolin 2 g IV in lacerations-19, lacerations-30 and lacerations-37 fits weights of 92, 95 and 84 kg (all under 120 kg). Correct.
- Ankle-brachial index, lacerations-25: 0.82 on the injured right side is below 0.9, left 1.08 is normal. The arterial pressure index (0.82 / 1.08) is 0.76, also abnormal. The explanation and key hold under either index.
- Times. lacerations-22: 23:00 to 03:00 is 4 hours (not used in any explanation). lacerations-36: 14:00 the day before to 10:00 is 20 hours, matching the q2 prompt and explanation. lacerations-18: "last night" and "about 12 hours ago" agree. lacerations-26: 2 days fits "a day or more" for the ultrasound halo. lacerations-31: arrival 45 minutes after injury, antibiotics within 60 minutes of arrival.
- Wound lengths against Quinn 2014 (length over 5 cm). lacerations-36 shin 7 cm (yes), forehead 3 cm, lacerations-18 cuts 3 to 4 cm, lacerations-29 2 cm (all no). Each explanation is consistent. lacerations-36 q1 keys exactly four features and the explanation says "all four". lacerations-30 pulp defect 1 x 0.8 cm fits "about 1 cm by 1 cm or less". lacerations-32 60% of the tendon width fits "more than about half".
- Tetanus decisions against the dose history in each stem:
  - lacerations-17 q1: no doses, age 5, manure wound. DTaP-IPV plus TIg. Correct.
  - lacerations-23 q3 and lacerations-39 q3: booster 2 years ago. No vaccine. Correct.
  - lacerations-29 q2: complete series, Td 6 years ago, soil and manure, hypogammaglobulinemia with IgG 4.2 g/L. Vaccine plus TIg. The explanation's "a healthy adult would need only a vaccine booster" is right because 6 years is 5 or more.
  - lacerations-31 q4 and lacerations-40 q4: last dose at age 5, now 9, so 4 years. Under 5 years, nothing needed. Correct.
  - lacerations-33 q3: Tdap 7 years ago at age 19, so he has had adult Tdap. 5 to 10 years, tetanus prone. Td alone. Correct. "Td booster in 3 years" is the 10 year mark, a plausible wrong answer.
  - Stems with a history but no tetanus question: lacerations-19 (3 years), lacerations-22 (4 years), lacerations-26 (3 years), lacerations-35 (Td 3 years), lacerations-36 (4 years), lacerations-38 (Tdap at 14, now 19). No explanation contradicts them.
- Format metrics by script: all stems 72 to 108 words, updates 10 to 45 words, prompts 10 to 30 words, every explanation over 200 characters, no semicolons or dashes in text, every source cited. Key positions across the 68 single questions in lacerations.ts: 14, 13, 13, 15 and 13. The key is the longest option in 14 of 68 before the edits above.

## Checked and found consistent

Every explanation sentence of lacerations-16 to lacerations-38 was read against its stem. Consistent: lacerations-18 (collateral from the mother, no Quinn risk factors), lacerations-20, lacerations-21 q1 (pulse 48 on bisoprolol, rate 46 in the update), lacerations-22, lacerations-23, lacerations-24, lacerations-25, lacerations-26 (3 mm puncture, 9 mm object 4 mm deep, Davis 72% and 92%), lacerations-29, lacerations-30, lacerations-31, lacerations-32, lacerations-33, lacerations-34 (radial side cut, radial pad smooth), lacerations-35, lacerations-37, lacerations-38 (acuity 6/6, 5 day removal).

## Sources verified

No new sources were added. Numbers were checked against the stem and the thresholds the explanations quote. The thresholds used were those Lens A confirmed on the source pages: Canadian Immunization Guide tetanus Table 1 (https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html), Quinn 2014 (https://pubmed.ncbi.nlm.nih.gov/23314208/), EAST 2012 ABI below 0.9 (https://pubmed.ncbi.nlm.nih.gov/23114487/) and Davis 2015 (https://onlinelibrary.wiley.com/doi/10.1111/acem.12714).

## Needs physician decision

- lacerations-39 and lacerations-40 are verbatim copies of lacerations-23 and lacerations-31 (same stems, options and explanations). They cannot join the bank as they stand. They were fixed only so the file is not left wrong.
- Key feature mapping, low confidence: lacerations-16 q2 (first step to control bleeding) is tagged key feature 2, which is about examining for damage, not treating it. lacerations-19 q2 (antibiotics for an established Aeromonas infection) is tagged key feature 1. lacerations-19 q3 (felon drainage) and lacerations-20 q3 (adhesive aftercare) are tagged key feature 3, which is about preparation before closure. A physician may prefer other tags. No change made, because every key feature is still covered.
- lacerations-22 q2: the key "amoxicillin-clavulanate 875/125 mg PO twice daily" is the longest option (1.38 times the mean distractor, within the 1.5 limit). The length comes from the product strength, which cannot be moved.

## Summary

- 10 fixes in 9 SAMPs. By category: 1 wrong key (lacerations-39 q1), 1 invented finding (lacerations-40 q2), 5 explanation claims not supported by the stem or untrue (lacerations-16 q3, lacerations-17 q4, lacerations-21 q2, lacerations-27 q3, lacerations-28 q1), 1 option specificity mismatch (lacerations-19 q2), 1 key length cue (lacerations-17 q1), 1 option that did not match the stem (lacerations-36 q1).
- Most serious: lacerations-39 q1 keyed against its own explanation, and lacerations-40 q2 relied on a lactate the case never gave. Both had been reported fixed by Lens A but were still present in the file. Next, lacerations-17 q4 taught that vaccine status sets bacterial infection risk, and lacerations-28 q1 rejected a distractor for a reason the stem did not support.
- No dose, index, time or tetanus decision in the batch was found to be miscalculated.
- SAMP ids with a defect: lacerations-16, lacerations-17, lacerations-19, lacerations-21, lacerations-27, lacerations-28, lacerations-36, lacerations-39, lacerations-40.
- Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s43` prints nothing. `SAMP_BATCH=s43 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 464 passed, 0 failed. (One earlier run failed to load because of a concurrent edit in s48, outside this batch. The rerun passed.)
