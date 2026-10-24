# Q500B verify review: oral cases batch17 (revision 2)

Fresh independent review of the whole final batch in `src/cases/batch17/`, against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. Earlier verdicts: docs/reviews/q500b-qa-batch17.md (12 fails) and docs/reviews/q500b-verify-batch17.md (2 fails). Writer's report with "Revision 1" and "Revision 2": docs/reviews/q500b-writer-batch17.md. The reviewer did not write or edit this batch.

## Test runs

- `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 passed.
- `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 passed.
- `npx tsc --noEmit -p . | grep cases/batch17`: no output.

## Batch level checks

- Four cases in `BATCH_17`. All `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal names.
- House style: no em dashes, en dashes or semicolons in any string. Canadian spelling.
- Points per row (history, physical, management, process), recomputed: hoist 8/6/8/8 (30), sleepover 7/6/11/9 (33), noodle 6/7/8/8 (29), bench 7/6/7/9 (29). History 21 to 27%. Management 24 to 33%. Critical items 3 per case.
- Uniqueness, rechecked against the whole bank including batch16, batch18 to batch20 and the new s72 to s88 SAMPs: no other item has a hoist injury in cerebral palsy, an IM to IV epinephrine error, toxic shock after a scald, or a young Marfan dissection. The only nearby items are a one-option clobazam mention in s22, an IV bolus caution sentence in s23, and dissection features listed in the batch18 STEMI case. None is a near duplicate.

## Sources opened in this review

- Opened (HTTP 200): Sullivan 2018 (PMC5897068), Boyer 2012 (PMC3739053), CSACI 2021 (PMC8670273), Gutzler 2018 (folia.unifr.ch 298413), ABA referral page, RCH burns and RCH intranasal fentanyl pages, CMPA consent guide.
- Abstracts read by PubMed eutils: ADvISED (PMID 29030346), IRAD (PMID 10685714), Jungquist 2020 (PMID 31377031), Kanwar 2010 (PMID 20031267).
- Not opened in this review (relied on earlier reviews): the 2022 ACC/AHA aortic guideline full text, CCS 2014, revised Ghent 2010, Golden 2024, CPS 2011, CPSI 2011, Lotan 2009, ACEP 2021 policy, ASRA checklist, Weiss 2020, IDSA 2014.

## Earlier fails: resolution

| Review | # | Item | Status |
|---|---|---|---|
| QA | 1 to 12 | All | Resolved, as confirmed in the first verify review. Rechecked in the current files: hydromorphone 0.2 mg at 21:00 in s-event and the `event` finding, "strongly linked with deaths" in c-sleeping, flumazenil out of at-m5, review "this evening" in noodle, heart rate 60 to 80 in bench q-treat, c-impulse and cp-m2, ASA and the 16:00 ibuprofen in q-call. |
| Verify 1 | 1 | hoist c-titrate feedback | Resolved. Now reads "Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating." |
| Verify 1 | 2 | hoist at-pr2 teaching | Resolved. Only the sentence the Jungquist abstract supports remains (high risk patients need extra vigilance, electronic monitoring and reassessment). The abstract confirms each part. |

Unrequested change (Revision 2): at-p4 text drops "the loss of pain stimulus after the block" and now reads "worsened by clobazam and baclofen". This followed the first verify review's advisory. It removes an unsourced claim and changes no points. Fine.

## 1. hoist-transfer-thigh-fracture: PASS

Numbers rechecked: fentanyl 0.5 mcg/kg x 36 kg = 18 mcg. Bupivacaine 0.25% 20 mL = 50 mg (1.4 mg/kg). 0.5% 40 mL = 200 mg (5.6 mg/kg). Lipid 1.5 mL/kg = 54 mL. Acetaminophen 15 mg/kg = 540 mg. Hydromorphone 0.2 mg, about 5.5 mcg/kg. Naloxone 0.04 mg titrated. Timeline consistent from 07:30 to 21:30.

- Every question, choice, say node and rubric item: PASS.
- Advisory only: the q-event model answer still says "The block took away the pain that had been keeping her awake". It is a model answer line, not a cited rubric claim, and it is standard pharmacology.

## 2. sleepover-smoothie-vomiting: PASS

Numbers rechecked: 0.01 mg/kg x 42 kg = 0.42 mg IM (maximum 0.5 mg). Saline 20 mL/kg = 840 mL. 0.4 mL of 1 mg/mL IV = 0.4 mg. 0.3 mg autoinjector fits the CSACI 25 to under 45 kg band. Kanwar abstract confirms physician dosing confusion and prefilled, labelled IM syringes on crash carts (an-p2, an-pr1, an-pr3).

- Every question, choice, say node and rubric item: PASS. The metoprolol unsafe label stands under ruling C1, not A6.

## 3. noodle-soup-scald-return: PASS

Numbers rechecked: intranasal fentanyl 1.5 mcg/kg x 15 kg = 22.5 mcg. Burn 5% + 2% = 7%. Boluses 150 to 300 mL, 40 mL/kg = 600 mL. The 48 hour video review after a 17:30 burn on day 1 falls on the evening of day 3, matching "this evening" at 06:10 on day 3. Return findings meet staphylococcal TSS criteria.

- Every question, choice, say node and rubric item: PASS.

## 4. bench-press-chest-pain: FAIL (2 items)

Numbers rechecked: arm difference 158 minus 124 = 34 mmHg. ADD-RS 3. Esmolol 500 mcg/kg x 84 kg = 42 mg. ADvISED abstract: ADD-RS 1 or less with D-dimer under 500 ng/mL, failure rate 0.3%. IRAD abstract: AR 31.6%, pulse deficit 15.1%, normal CXR 12.4%, normal ECG 31.3%, type A mortality 26% with surgery and 58% without. Targets match the 2022 ACC/AHA guideline as confirmed in the first verify review.

- q-resident, q-history, q-exam, q-ddx, q-image, q-treat, q-call, q-refuse, q-family and all choices: PASS.
- **Rubric cp-p1 teaching: FAIL (C2).** The second sentence, "They were present in only a minority of registry patients, so look for them on purpose.", is an IRAD finding (AR 31.6%, pulse deficit 15.1%), but the item cites `advised`. ADvISED is a prospective diagnostic study, not a registry, and its abstract reports no prevalence of these signs. **Fix:** replace that sentence with "They are part of the aortic dissection detection risk score, so look for them on purpose." Keep `advised`. (Alternative: keep the sentence and split it into its own item on `irad`, keeping the case total at 29.)
- **Rubric cp-pr1 teaching: FAIL (C2).** The second sentence, "Anchoring on a benign label is a classic cause of a missed dissection.", is not in IRAD, which the item cites. IRAD supports the first sentence and that the presentation is diverse. **Fix:** replace that sentence with "The presentation is diverse, so a benign working label must be checked at the bedside." Keep `irad`.
- Other rubric items and sources: PASS.

## Fails and exact fixes

1. bench-press-chest-pain, cp-p1 teaching: replace "They were present in only a minority of registry patients, so look for them on purpose." with "They are part of the aortic dissection detection risk score, so look for them on purpose."
2. bench-press-chest-pain, cp-pr1 teaching: replace "Anchoring on a benign label is a classic cause of a missed dissection." with "The presentation is diverse, so a benign working label must be checked at the bedside."

Overall: FAIL (2 items)
