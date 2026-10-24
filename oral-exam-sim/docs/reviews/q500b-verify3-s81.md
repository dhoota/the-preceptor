# Q500B verify review 3: s81, Analgesia/sedation (revision 4)

This is a fresh independent review of the whole final batch in `src/samps/s81/analgesia-sedation.ts` (analgesia-sedation-48 to analgesia-sedation-52). The reviewer did not write, edit or review this batch before, and edited nothing in it (REVIEW-RULES rule 1). Both lenses were applied. Inputs were `docs/reviews/q500b-qa-s81.md`, `q500b-verify-s81.md`, `q500b-verify2-s81.md` and `q500b-writer-s81.md` with its Revision 1 to 4 sections.

## Tests and style

- `SAMP_BATCH=s81 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 of 128 pass, including the bank-wide near-duplicate stem test.
- `npx tsc --noEmit -p . 2>&1 | grep samps/s81` prints nothing.
- No em or en dashes (checked by code point). The only semicolons are TypeScript syntax. No mnemonics. No personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1`. Spelling follows the bank (behaviour, favour, "anesthesia" and "fetal" as used elsewhere in the bank).

## Resolution of earlier fails

| Review | Fail | Resolved? |
|---|---|---|
| QA 1 to 8 | 48 q4 cue, 49 q1 repeat, 49 q4 repeat, 50 q3 recombination, 51 q1 distractors, 51 q4 repeat, 52 q3 cues, 52 stem copy | Yes, confirmed in verify 2 and unchanged since |
| Verify 1 | 49 q2 cue from q1, 50 q3 lone key and reference variance, 51 q1 key form | Yes, unchanged since |
| Verify 2 | 48 q3 update named the q1 key ("still grimaces") and q4 "relaxed face" | Yes. The q3 update now reads "he still moans and pulls away when he is moved". The q4 update now opens "He settles. An hour later he is asleep and settled and rouses to voice." |

The writer's Revision 4 item 3 (trying and reverting `S.painad` in SAMP 50) leaves the file as it was. The ACS guideline itself recommends PAINAD for severe dementia, so the 50 q1 claim is supported by the cited source. No unrequested change was found.

## Sources verified in this round

| Source | How checked | Result |
|---|---|---|
| Fraser Health, Principles of opioid management | PDF downloaded and text extracted | "If on an opioid already ... Give one-half of the regular PO dose by the S.C. route STAT and if necessary, give this again in 20 minutes, until pain breaks." Regular dose q4h "with 10% of the TDD given q1h p.r.n." "Respiratory depression occurs rarely in patients receiving opioids regularly as tolerance ... develop rapidly. Opioids should not be withheld for fear of respiratory depression." Naloxone, where needed, is mixed (diluted). Supports 48 q2 to q4. |
| ACS TQIP 2020, acute pain | PDF downloaded and text extracted | Fentanyl "IV: 25-50 mcg q30-60min". Ketamine 0.3 mg/kg bolus, "Dose based on ideal" body weight. Table 8 apixaban "Hold 72 hours prior to insertion", footnote applying it to "epidural, quadratus lumborum, brachial plexus, sciatic" blocks. Interscalene "invariably causes Horner's" and phrenic weakness. Behavioural tools "do not classify pain severity". Warnings on other CNS depressants. Table 16 lists fentanyl as generally safe in each trimester. Supports 50 q1 to q4, 51 q3 and 52 q4. |

Not re-opened in this round (WebFetch near its limit), relying on earlier reviews that read them: Warden 2003 PAINAD (PubMed), CPS 2019 managing pain and distress, CPS 2021 procedural sedation, SOGC 2015 pregnant trauma, Wakai 2011 Cochrane, Kindel 2025 GLP-1 guidance (PMC). Never opened by any reviewer: the ASRA 2025 primary text and the ACEP 2026 unscheduled sedation guidelines (writer uncertainty 6). Nothing keyed depends on either.

Numbers recomputed: morphine 20 mg PO q4h is 120 mg PO a day. Half by SC is 10 mg SC q4h, 60 mg SC a day, and 10% breakthrough is 6 mg SC q1h. 2.5 mg is a quarter of 10 mg. 20 mg SC is double the equivalent. Ketamine 100 mg at 100 kg is 1 mg/kg. Fentanyl 50 mcg is within 25 to 50 mcg, 250 mcg is five times the top of it. All correct.

## Overlap

Grepped `src/samps` and `src/cases` (through s88 and batch20) for semaglutide, GLP-1, interscalene, PAINAD, aphasia, intra-articular lidocaine, uterine displacement, dirt bike, difficult intubation and the 48 update wording. Semaglutide appears only in s10 eye (NAION, different decision). Interscalene appears only in s51 sob (phrenic palsy, different decision). s22 analgesia-sedation has a shoulder dislocation where intra-articular lidocaine has already failed and propofol is planned, so it does not key 51 q1. PAINAD in s02 and s22 tests dementia or ICU tools, not an aphasic patient who can self-report. No repeat found.

## Verdict by SAMP and question

### analgesia-sedation-48 (palliative restlessness): PASS

- q1 PASS. q2 PASS (matches Fraser Health exactly). q3 PASS. q4 PASS.
- Residual low-level note (B6, not a fail): "pulls away when he is moved" in the q3 update still describes pain on movement, so it leans toward the q1 key. It no longer names grimacing, the q1 key is the only movement-related option anyway, and the wording was the fix prescribed by verify 2.

### analgesia-sedation-49 (boy thrown from a dirt bike): PASS

- q1 to q4 PASS. Every distractor reason is true. The q2 option set still narrows q1 in mock mode, which verify 2 accepted under the B6 allowance.
- Note: the stem has a resident, and the q3 update says you are the only physician in the hospital at 03:00. Not a contradiction, but "The resident has gone off duty" in the q3 update would remove the question. Optional.

### analgesia-sedation-50 (aphasia after a stroke): PASS

- q1 to q4 PASS. 50 q3 verified against ACS Table 8 and its footnote, and the lead-in names the ACS guideline, so the key holds under it.
- The self-ratings in the q2 and q4 updates narrow q1 in mock mode, under the B6 allowance as ruled before.

### analgesia-sedation-51 (shoulder dislocation at 30 weeks): PASS

- q1 to q4 PASS. The q1 key carries less detail than the distractors, so it does not stand out by length or dose.

### analgesia-sedation-52 (semaglutide and elbow dislocation): PASS

- Stem and q1 to q4 PASS. q4 doses verified in ACS. The q3 update "Bedside assessment confirms a large volume of solid food" hints at the q2 key, but q3 needs the fact (B6 allowance, as ruled before).

## For the physician (judgement points, not fails)

- 48 q4: continuing regular morphine at a resp. of 12/minute in a rousable comfort-care patient follows Fraser Health. Keeping the regular dose at 10 mg SC q4h after he needed two 10 mg doses to settle is also a judgement (some would raise it).
- 49 q3: a tibial and fibular shaft reduction usually needs a third pair of hands for traction. The question asks only for the minimum sedation team, which CPS 2021 sets at two.
- 50 q3: the key follows ACS 2020 (ASRA deep plexus rules for all brachial plexus blocks). Some regional anesthesia practice is more permissive for an ultrasound-guided interscalene block on a DOAC. Holding apixaban in a woman with atrial fibrillation and a past stroke is itself a judgement.
- 51 q1: the Cochrane evidence is low quality, and IV opioid before another attempt is common practice. The key rests on equal success with fewer adverse effects.
- 51 q2: some anesthesiologists treat any woman past mid-pregnancy as a full stomach. The menu rejects "Fasting for 8 hours first", which fits ED sedation practice but is worth a look.
- 52 q3: elective GLP-1 guidance is applied to a limb-threatening reduction. Some physicians would accept ketamine sedation in the ED, or a brachial plexus block (not offered as an option), for a pulseless limb.
- KF4 "not sedation alone" is concentrated in this batch (48 q2, 49 q1, 50 q4, 51 q3).

No silent reversal of a SCORING-RULINGS item was found. No signed item is contradicted.

## Fails with exact fixes

None.

Overall: PASS
