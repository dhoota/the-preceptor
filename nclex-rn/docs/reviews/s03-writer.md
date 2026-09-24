# Writer report, batch s03

Batch s03 holds 50 stand-alone items, rn-s03-01 to rn-s03-50. All are Management of Care. Every item has `reviewed: false`, `version: 1` and an empty `canada` string, as the brief asks. Files: `src/bank/s03/common.ts`, `part1.ts` to `part5.ts` and `index.ts`.

Checks run:

- `BATCH=s03 npx vitest run tests/bank.test.ts` passes 61 of 61 tests. The whole bank near duplicate gate passes.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s03` prints nothing.

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are mc (19 and 48).

CJMM step: recognize 7, analyze 8, prioritize 8, generate 8, action 11, evaluate 8.

Difficulty: 1 has 5, 2 has 17, 3 has 17, 4 has 9, 5 has 2.

Integrated process: nursing process 19, communication 13, clinical judgment 10, caring 4, teaching 3, culture 1.

## MC key positions

There are 28 mc items, counting the 2 trend items. Keys fall 7, 7, 7 and 7 across positions 1 to 4. The key is the strict longest option in 7 of 28 items (02, 13, 17, 18, 23, 29, 33). That is 25 percent.

Select all keys in the first half of the list: 17 of 32.

## Topics

The topics avoid those already in s01 and s02. They cover restraint rules, leadership style, delegation and assignment, supervision and evaluating delegated work, privacy (phone callers, police requests, telehealth, smartphones, record amendment), record integrity (copy forward, falsified checks), alert fatigue, advocacy, staffing hours per client day, ethical process and principles, advance directives and a DNR order before surgery, guardianship, withdrawal of consent, visitation rights, rights after involuntary admission, the multistate license, FMEA, evidence levels and PICOT, the I-PASS handoff, duplicate prescriptions, hospice, clinical pathway variance, wrong-client error, fatigue, ethics consults, discharge safety, follow-up calls, referrals, resource use and critical results.

Item 10 is the only calculation. It has a `calc` block.

## Sources used and verification

| Source | Verified at |
|---|---|
| NCSBN and ANA, National Guidelines for Nursing Delegation, 2019 | https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf |
| Potter, Perry, Stockert, Hall, Fundamentals of Nursing, 11th edition, 2023 | https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0 |
| Yoder-Wise, Sportsman, Leading and Managing in Nursing, 8th edition, 2023 | https://shop.elsevier.com/books/leading-and-managing-in-nursing/yoder-wise/978-0-323-79206-6 |
| Hinkle, Cheever, Overbaugh, Brunner and Suddarth's, 15th edition, 2022 | Same entry as in s01 and s02 and the fixture. Not searched again. |
| Halter, Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022 | https://www.vitalsource.com/products/varcarolis-39-foundations-of-psychiatric-mental-margaret-jordan-halter-v9780323697088 |
| Melnyk, Fineout-Overholt, Evidence-Based Practice in Nursing and Healthcare, 5th edition, 2023 | https://shop.lww.com/evidence-based-practice-in-nursing-healthcare/p/9781975185725 |
| Beauchamp, Childress, Principles of Biomedical Ethics, 8th edition, 2019 | Same entry as in s01. Not searched again. |
| Guido, Legal and Ethical Issues in Nursing, 7th edition, 2020 | Same entry as in s02. Not searched again. |
| ANA, Code of Ethics for Nurses with Interpretive Statements, 2025 | https://codeofethics.ana.org/about |
| ANA, Addressing Nurse Fatigue to Promote Safety and Health, 2014 | https://www.nursingworld.org/practice-policy/nursing-excellence/official-position-statements/id/addressing-nurse-fatigue-to-promote-safety-and-health/ |
| CMS, 42 CFR 482.13 Patient's rights (restraint, visitation) | https://www.law.cornell.edu/cfr/text/42/482.13 |
| CMS, 42 CFR 482.43 Discharge planning | https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-C/section-482.43 |
| CMS, 42 CFR 418.22 Certification of terminal illness | https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-418/subpart-B/section-418.22 |
| HHS, 45 CFR 164.512(f) law enforcement disclosures | https://www.hhs.gov/hipaa/for-professionals/faq/what-does-the-privacy-rule-allow-covered-entities-to-disclose-to-law-enforcement-officials/index.html |
| HHS, 45 CFR 164.526 Amendment | https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.526 |
| HHS OCR, Summary of the HIPAA Privacy Rule, 2003 | https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html |
| HHS OCR, audio-only telehealth guidance, 2022 | https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-audio-telehealth/index.html |
| ASA Committee on Ethics, DNR guidelines, last amended 2023 | https://www.asahq.org/standards-and-guidelines/ethical-guidelines-for-the-anesthesia-care-of-patients-with-do-not-resuscitate-orders-or-other-directives-that-limit-treatment |
| Starmer et al., I-PASS, NEJM 371:1803, 2014 | https://www.nejm.org/doi/full/10.1056/NEJMsa1405556 |
| AHIMA, copy and paste position statement, 2014 | https://www.hcinnovationgroup.com/clinical-it/news/13022925/ahima-releases-statement-on-ehr-copy-and-paste |
| AHRQ PSNet, Alert Fatigue primer, 2019 | https://psnet.ahrq.gov/primer/alert-fatigue |
| NCSBN, Nurse Licensure Compact FAQs | https://www.nursecompact.com/FAQs.page |
| IHI, FMEA Tool | https://www.ihi.org/library/tools/failure-modes-and-effects-analysis-fmea-tool |
| Gould et al., HICPAC CAUTI guideline, 2009 | https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf |
| AHRQ, RED Toolkit, Tool 5 | https://www.ahrq.gov/patient-safety/settings/hospital/red/toolkit/redtool5.html |
| NCC MERP, Index for Categorizing Medication Errors | https://www.nccmerp.org/types-medication-errors |
| The Joint Commission, National Performance Goals, 2026 | https://www.jointcommission.org/en-us/standards/national-performance-goals |
| Evans et al., Surviving Sepsis Campaign 2021 | https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-guidelines-2021 |
| NCSBN, A Nurse's Guide to the Use of Social Media, 2024 | https://www.ncsbn.org/brochures-and-posters/nurses-guide-to-the-use-of-socialmedia |

## Points for the reviewer

- Source years. Yoder-Wise 8th edition went on sale in September 2022 with a 2023 copyright. I cite 2023 to match s01 and s02. The CFR entries carry 2024 as the year of the current text. The IHI FMEA tool page shows no clear year, so 2017 is my best estimate. NCC MERP 2001 is the year of the index. The AHRQ alert fatigue primer is dated 2019 and was last reviewed in 2024.
- rn-s03-05. State laws on reporting blood alcohol results to police differ. The key sends the request to the privacy officer rather than stating one rule.
- rn-s03-14. "Starting a transfusion needs RN assessment in most states" is a scope statement that differs by state.
- rn-s03-23. Clients keep the right to mail and phone use, and the right to refuse medication outside an emergency or court order. This is the textbook teaching. Details differ by state.
- rn-s03-28. The error reached the client and changed the vital signs. I wrote "category D or higher" because the category depends on whether treatment follows.
- rn-s03-37. The key puts the client check ahead of reporting to the charge nurse. Reporting is still required, and the why for that option says so.
- rn-s03-49. The source for read-back of a critical result is Potter. The 2026 Joint Commission goal covers timely reporting of critical results. It is not a read-back rule.
- rn-s03-10. Nursing care hours per client day counts RN and AP hours against the midnight census. Some units count only productive direct care hours.
