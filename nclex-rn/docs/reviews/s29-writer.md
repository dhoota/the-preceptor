# Batch s29 writer report

Batch s29 holds 50 stand-alone items, rn-s29-01 to rn-s29-50. All are Management of Care. Every item has `reviewed: false`. `canada` is "" on every item.

`BATCH=s29 npx vitest run tests/bank.test.ts` passes, 61 of 61 tests. That includes the whole-bank near-duplicate and sign-off tests. `npx tsc --noEmit -p .` reports no errors in `src/bank/s29`.

## Settings covered

- School nursing: items 01 to 06
- Correctional facility (county jail): items 07 to 12
- Outpatient dialysis unit: items 13 to 18
- Ambulatory surgery center: items 19 to 23 and 50
- Inpatient hospice unit: items 24 to 28 and 30
- Rural critical access hospital: items 29 and 36 to 40, with 49 set there too
- Behavioral health crisis unit: items 31 to 35
- Telehealth triage: items 41 to 45, with 43 also covering a medically complex child at home
- Case management for a medically complex child: items 04, 43, 46, 47 and 48

Focus topics: assignment and delegation (02, 06, 10, 14, 23, 30, 34). First client to see (01, 07, 13, 20, 24, 33, 44). Incident command and surge roles (37, 39, 40). Transfers between facilities (12, 21, 35, 36, 38). Staff competency validation (03, 15, 26, 49, 50). Organ procurement referral (25, 28, 29).

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are mc (12 and 16).

CJMM step: recognize 2, analyze 8, prioritize 8, generate 9, action 18, evaluate 5.

Difficulty: 2 for 8 items, 3 for 19, 4 for 20, 5 for 3.

## MC key positions

Counted over all 28 mc items, the 2 trend items included. Positions 1 to 4: 7, 7, 7, 7.

01 2, 03 4, 04 1, 07 3, 08 1, 09 2, 11 4, 12 3, 13 1, 15 3, 16 2, 18 4, 19 3, 20 1, 22 2, 24 4, 25 1, 26 3, 27 2, 31 4, 32 1, 33 3, 36 2, 38 4, 39 3, 41 1, 44 2, 48 4.

The key is the strict longest option in 7 of 28 mc items (13, 20, 22, 27, 32, 33, 48). Keyed choices run longer than the distractors in 11 of 22 multi-key pools. 16 of 33 select-all keys sit in the first half of their lists.

## Uniqueness checks

- I grepped the inventory for every setting and key term before each chunk. The bank had no item set in a school health office, a jail, a dialysis unit, a surgery center, a crisis unit, a critical access hospital or a telehealth triage line for Management of Care.
- No s29 topic label matches any other topic label in the bank. I checked with a script against all 2,400 items currently loaded.
- The highest stem trigram Jaccard against any other stem in the bank is 0.23. Items 24 and 33 first scored 0.48 against rn-s28-18 ("First client to see on a mental health unit"), so I reworded both stems.
- I swapped out four planned teaching points that the bank already tests. Lithium toxicity (s15-15, c02-3) became water intoxication in item 35. Hyperkalemia after missed dialysis (c07-2) became catheter bloodstream infection in item 13. Bleeding after tonsillectomy (s19-21) became respiratory depression after sedation in item 20. Alcohol withdrawal at jail intake (c01-4, s12-20) became suicide risk at intake in item 7.
- rn-s01-36 already tests who may ask the family about donation. Items 25, 28 and 29 test other duties: report every death, including cancer deaths and clients not on a ventilator. No batch lists. Staff do not judge suitability. The call is timely. The referral comes before the ventilator is withdrawn. Item 28 also names an untrained requester, but only as one of its two highlight keys.
- rn-s02 already has an EMTALA item on screening before asking about payment. Items 36 and 38 test other points: the receiving hospital must accept first, and a transfer at the client's own request must be in writing.

## Sources used, with verification

- NCSBN and ANA, National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf (already used in the bank)
- NASN, Individualized Healthcare Plans position statement, revised January 2025. Confirmed on https://www.nasn.org/position-statements and https://nasn.org/ps-ihps. The NASN delegation statement no longer shows on the index, so I cited the NCSBN and ANA guidelines for delegation instead.
- NASN, School Nursing: Scope and Standards of Practice, 4th edition, 2022. https://www.nasn.org/scope-standards (declared in common.ts but not cited by any item)
- Jackson CC et al., Diabetes Care in the School Setting, Diabetes Care 38(10):1958, 2015. PubMed 26404925, checked with esummary.
- Kuo DZ, Houtrow AJ, Recognition and Management of Medical Complexity, Pediatrics 138(6):e20163021, 2016. PubMed 27940731, checked.
- NCCHC, Standards for Health Services in Jails, 2018, plus NCCHC Spotlight Q&A pages on receiving screening, segregated inmates and right to refuse. https://www.ncchc.org/receiving-screening/ , https://www.ncchc.org/spotlight-on-the-standards/segregated-inmates/ , https://www.ncchc.org/right-to-refuse-treatment
- 42 CFR 494.140, 494.180 and 494.62 (dialysis staffing, RN on site, emergency orientation). Read on law.cornell.edu.
- CDC, Best Practices for Bloodstream Infection Prevention in Dialysis Settings. https://www.cdc.gov/dialysis-safety/hcp/clinical-safety/ (monthly hand hygiene audits with results shared, competency checks at hire and every 6 to 12 months)
- 42 CFR 416.52 and 416.41 (surgery center pre-surgical assessment, responsible adult at discharge, immediate transfer procedure). Read on law.cornell.edu.
- 42 CFR 418.110 and 418.76 (RN giving direct care each shift during general inpatient care, aide competency rules). Read on law.cornell.edu.
- 42 CFR 482.45 and 485.643, plus CMS State Operations Manual Appendix A Rev. 248 and Appendix W Rev. 247. I downloaded both PDFs from cms.gov and read the OPO interpretive text: every death, ideally within 1 hour, no batch reporting, referral before withdrawal of life-sustaining therapy, OPO decides suitability.
- 42 CFR 485.618 (CAH emergency services). Declared in common.ts but not cited by any item, after an item was dropped.
- 42 CFR 489.24 (EMTALA appropriate transfer and written request). Read on law.cornell.edu.
- California EMSA, HICS Guidebook, 5th edition, 2014. I downloaded the PDF and read it. Unity of command, job action sheets and the activity log are covered. Resource requests go to Logistics. The Labor Pool and Credentialing Unit sits in the Logistics Support Branch and handles volunteer sign-in on HICS 253. Time records go to Finance and Administration. Planning collects job action sheets. Media goes through the PIO.
- SAMHSA, National Guidelines for Behavioral Health Crisis Care: Best Practice Toolkit, 2020. I downloaded the PDF and read the minimum expectations: accept all referrals, no medical clearance before admission, a no-rejection policy for first responders, peers with lived experience.
- Briggs JK, Telephone Triage Protocols for Nurses, 6th edition, 2020. https://shop.lww.com/Telephone-Triage-Protocols-for-Nurses/p/9781975136871
- Wright D, The Ultimate Guide to Competency Assessment in Health Care, 4th edition, 2021. https://chcm.com/product/the-ultimate-guide-to-competency-assessment-in-health-care-4th-edition/ (the 11 verification methods are confirmed on chcm.com)
- Powers WJ et al., AHA/ASA acute ischemic stroke guideline 2019 update, Stroke 50(12):e344. PubMed 31662037, checked.
- Chung F et al., PADSS, J Clin Anesth 7(6):500, 1995. PubMed 8534468, checked. Declared but not cited by any item.
- Already in the bank: ASAM alcohol withdrawal guideline 2020, Siegel 2007 isolation guideline, Hinkle 15th edition, Halter 9th edition, Hockenberry 12th edition, NCP 4th edition.

## For the reviewer

- Item 12 (trend): the ref "CIWA-Ar 19 or more is severe" matches refs used in other bank items. My web search budget ran out before I could recheck it against the ASAM text a second time.
- Item 10 (dnd): the RN is keyed for triage of jail health requests and the LPN for the medication pass. Some jails let LPNs do sick call triage under protocol. The RN is the best answer, but please check that the LPN token's why reads as fair.
- Item 14: the stem states that unit policy and state rules allow technicians to cannulate established access, because this varies by state.
- Item 05: the 0915 entry assumes a school medication needs a signed authorization on file. That is usual practice, but the exact rules vary by state.
- Item 27: "freestanding hospice inpatient unit" relies on 418.110 applying to hospices that give inpatient care directly.
- Items 25 and 28 put the hospice unit inside an acute care hospital on purpose, so 482.45 and Appendix A apply. A freestanding hospice is not under the hospital OPO rule.
- Item 29 is set in a critical access hospital and cites 485.643 and Appendix W, which uses the same OPO timing language as Appendix A.
- Item 43 (bowtie): the parent is trained in tube changes. The keyed actions are suction now and change the tube if suction fails. Calling emergency services if there is still no improvement appears in the rationale only.
- Item 06 asks for statements that show understanding. Glucagon is a drug, but the item tests the limits of a delegated task.
- Highlight passages put each span on its own line with \n, as other batches do, because a span ending in a period before "]]" merges sentences in the style gate.
- NASN_SCOPE, CAH_ER and CHUNG are declared in common.ts but no item cites them. They do no harm and can be removed.
