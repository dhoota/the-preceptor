# Review of SAMP batch s29 (common fractures and MSK), Lens B

Lens: B, internal consistency and numbers. Scope: every SAMP in `src/samps/s29/msk.ts` (msk-16 to msk-38) and `src/samps/s29/review-extra.ts` (msk-39, msk-40). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Each SAMP was read on its own, every explanation sentence against its stem and updates. The Lens A report was not relied on. Its two review-extra fixes were no longer in the file when this review began (msk-39 q1 was again keyed to index 0 and the msk-40 lactate sentence was back), so both were found and fixed again here.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s29` prints nothing. `SAMP_BATCH=s29 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 532 of 532. A script diff after the edits shows msk-39 and msk-40 now differ from msk-23 and msk-31 only in their ids. A script scan of every string found no dashes, semicolons or smart quotes.

## Recomputation (script)

| SAMP | Check | Result |
|---|---|---|
| msk-16 | Ottawa ankle: no posterior edge or tip tenderness of either malleolus, bears weight 4 steps | No ankle rule criterion met. Matches q2 "meets no Ottawa ankle criterion" |
| msk-16 | Ottawa foot: navicular and fifth metatarsal base not tender, bears weight | Not met |
| msk-16 | Ottawa knee: age 34, flexes to 90, fibular tenderness | Met only if the fibular head is tender. The update placed tenderness "just below the fibular head" (fixed, see below) |
| msk-17 | Ottawa foot: cannot bear weight | Foot films indicated. Base of second metatarsal tenderness is not itself a criterion. Consistent |
| msk-27 | Ottawa knee: age 63 (55 or older), cannot stand | Met. Not asked, consistent |
| msk-30 | Ottawa ankle: tip of lateral malleolus tender | Ankle films indicated. Foot rule not met (4 steps, no navicular or fifth metatarsal tenderness). Matches q1 |
| msk-32 | Ottawa ankle: distal fibula tender | Films indicated. Consistent with films being taken |
| msk-36 | Ottawa foot: proximal fifth metatarsal tender. Ankle: malleoli not tender, 4 steps | Foot films yes, ankle films no. Matches q1 |
| msk-31, msk-40 | Ibuprofen 10 mg/kg x 23 kg | 230 mg. 460 mg = 20 mg/kg. Codeine 23 mg = 1 mg/kg, tramadol 46 mg = 2 mg/kg, morphine 2 mg = 0.087 mg/kg. All as stated |
| msk-27, msk-34 | Cefazolin by weight (70 kg, 60 kg) | 2 g in both (3 g only at 120 kg or more) |
| msk-38 | BMI 47 / 1.65 squared | 17.26, stated 17.3 |
| msk-21 | Hyperpronation 9.2% against supination 26.4% failure | ARR 17.2%, NNT 5.8, stated "about six" |
| msk-22 | Herzberg 41 of 166 missed | 24.7%, stated "about one in four" |
| msk-32 | Boutis 4 of 135 and 108 of 135 | 3.0% and 80.0%, as stated |
| msk-26 | Shao 11.8% palsy, 70.7% recovery | "About 12%" and "about 70%", as stated |
| msk-28 | Willits 144 patients, rerupture 2 operative and 3 nonoperative, complications 13 and 6. Myhrvold rerupture 6.2% and 0.6%, nerve injury 5.2%, 2.8%, 0.6% | All verified against the abstracts |
| msk-23, msk-39 | Stress opening 40 degrees against 10 degrees | 30 degrees more, as stated |
| msk-16 | Medial clear space 7 mm against normal about 4 mm | Consistent |
| msk-17 | Diastasis 3 mm in update and explanation | Consistent |
| Timelines | msk-20 (22 months, walking since 13 months, onset yesterday afternoon), msk-28 (14 day course ended 1 week ago), msk-35 (reduced yesterday, returns 2300 hours, analgesia every 3 hours today), msk-37 (fall 2 days ago, 2 day delay option), msk-38 (mileage up 6 weeks ago, pain for 4 weeks, amenorrhea 6 months), msk-25 (right ache 3 months, left 1 month, alendronate 8 years) | All agree |
| Compartment pressure and delta pressure | No SAMP in the batch gives a compartment or diastolic pressure | Nothing to compute. msk-35 relies on clinical signs only |

## Fixes made

| SAMP | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| msk-39 | q1 | correct | Planted defect. Keyed the radial collateral ligament (index 0) while the stem, mechanism and explanation all describe an ulnar collateral ligament tear. Key set to index 3 | high |
| msk-40 | q2 | explanation | Planted defect. Final sentence cited "serum lactate of 7.8 mmol/L seen on the first blood gas" in a child with a buckle fracture who had no blood gas. Sentence removed | high |
| msk-16 | q2 | update | Explanation relies on fibular head tenderness (an Ottawa knee criterion) but the update placed tenderness "just below the fibular head", which meets no knee rule criterion. Update now says tender over the fibular head and the proximal shaft below it | medium |
| msk-27 | q3 | update, explanation | Explanation grades the wound as low grade because of "little contamination", a fact the case never gave. Update now states the wound has no visible dirt or debris, explanation says "no visible contamination" | medium |
| msk-21 | q1 | explanation | "A sudden pull on the extended, pronated arm". The stem says only that he was lifted quickly by the hand. Reworded to "a sudden pull on the hand" | low |
| msk-28 | q4 | explanation | "It was 3 against 2" gave no group order, after a sentence that put the surgical group first, so it read as more reruptures after surgery. Now "3 without surgery against 2 after it". Nerve injury figures from Myhrvold added | medium |
| msk-35 | q3 | prompt, explanation | Prompt and explanation said "young child" who "cannot describe pain or paresthesia", but the patient is 9 and reports that his fingers feel normal. Now "a child" who describes pain and paresthesia poorly | low |
| msk-36 | stem | stem | "He had no foot pain before today" (history) sat inside the examination paragraph, against the stem order rule. Moved to the history | low |
| msk-30 | q2 | keyFeature | Mapped to KF2 (injury pattern suggests cause), but the question asks which injury is missed after normal ankle films, which is KF4 (occult fracture with negative films). Changed to KF4. KF2 remains covered by 9 other questions | medium |

## Key changes

| SAMP | Question | Before | After | Reason |
|---|---|---|---|---|
| msk-39 | q1 | Radial collateral ligament of the thumb (index 0) | Ulnar collateral ligament of the thumb (index 3) | Planted wrong key. Stem, mechanism and explanation describe a UCL injury |

## Sources verified

- Emond 2018, Fresno-Quebec rule. Abstract confirms "Patients over age 35 years had an increased risk of fracture-dislocation if they sustained blunt injury or had a first episode" and "Prospective validation is warranted". msk-18 q2 matches: https://pubmed.ncbi.nlm.nih.gov/29861274/
- Willits 2010. 144 patients, rerupture 2 operative and 3 nonoperative, complications 13 and 6, mainly soft tissue: https://pubmed.ncbi.nlm.nih.gov/21037028/
- Myhrvold 2022. Rerupture 6.2% nonoperative against 0.6% in each surgical group, nerve injury 5.2% minimally invasive, 2.8% open, 0.6% nonoperative: https://pubmed.ncbi.nlm.nih.gov/35417636/
- Ottawa ankle, foot and knee criteria as in Stiell 1993, 1994 and 1996 (citations already in the file). Rule logic applied by script as above.

## Needs physician decision

1. **msk-39 and msk-40 (review-extra.ts) are exact copies of msk-23 and msk-31** once the planted defects are removed. They would fail the bank near duplicate stem test if wired into `index.ts`. They should not be added.
2. **msk-20 q4 (low).** The update says "The tibia is no longer tender" 2 days after q2 told the candidate to presume an occult toddler's fracture. A true fracture would usually still be tender at day 3. The key (hip ultrasound, CBC, CRP) holds either way, but the physician may prefer to drop that sentence or keep it as a deliberate hint that the first diagnosis was wrong.
3. **Weak key feature mappings (low).** msk-36 q2 (naming a Jones fracture, KF8) and q3 (why it fails to unite, KF7) test diagnosis and mechanism rather than disposition or surgical referral. msk-20 q1 and q4 (KF3) test a hip versus tibia differential rather than referred pain. msk-28 q1 (KF4) is a clinical test with no negative film. msk-17 q1 and msk-23 q1 (KF2) name the injury from the mechanism rather than the cause from the injury. No better fitting key feature exists for most of these, so they were left.
4. The Lens A items (msk-16 duplicating s06 msk-02 and the other overlaps) are outside this lens and were not re-examined.

## Summary

- Fixes: 9 rows across 9 SAMPs. By category: 2 planted defects in review-extra (a wrong key, an invented lab value), 2 explanation claims with no support in the stem (msk-27 contamination, msk-21 arm position), 1 rule application mismatch (msk-16 Ottawa knee), 1 ambiguous statistic (msk-28), 1 age inconsistency (msk-35), 1 stem order fix (msk-36), 1 key feature remap (msk-30).
- Key changes: 1 (msk-39 q1).
- Every dose, rule application, percentage and timeline in the batch was recomputed and, apart from the rows above, agrees with the stem.
- SAMP ids with a defect: msk-16, msk-21, msk-27, msk-28, msk-30, msk-35, msk-36, msk-39, msk-40.
