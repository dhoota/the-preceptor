# Batch s04 writer report

Batch s04 has 50 stand-alone items. All are Management of Care. The focus list covers delegation and assignment, supervision, conflict and chain of command, ethics and advocacy, legal rights and duties, and incident reporting. Every item has `reviewed: false`, `version: 1` and an empty `canada` note.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- `BATCH=s04 npx vitest run tests/bank.test.ts`: every s04 test passes. The only failure is the whole-bank near-duplicate test. It flags rn-c01-1-1 with rn-c04-2-1 and rn-c02-1-1 with rn-c04-4-1. Earlier runs also flagged rn-s14-50 with rn-s22-23. No s04 item is in any flagged pair.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s04` prints nothing.

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 10 is a trend mc. Item 30 is a trend msn.

CJMM step: action 28, analyze 6, generate 5, evaluate 5, recognize 4, prioritize 2.

Difficulty: level 1 has 4, level 2 has 19, level 3 has 17, level 4 has 9, level 5 has 1.

Scoring: item 4 is a dnd dyad. Item 41 is a cloze triad. Item 20 is a zero-one cloze. Items 6 and 18 are dnd ordering items.

## MC key positions

There are 27 items of kind mc, counting the trend mc. Keys fall in positions 1 to 4 as 7, 7, 7 and 6.

## Topics by focus area

- Delegation and assignment: 1, 2, 4, 22, 23, 31, 34, 39, 43, 46.
- Supervision: 3, 21, 24, 30, 44, 45, 47.
- Conflict and chain of command: 5, 6, 33, 42, 48.
- Ethics and advocacy: 12, 16, 17, 18, 29, 38, 40.
- Legal rights and duties: 11, 13, 14, 15, 20, 27, 28, 35, 49.
- Incident reporting and safety culture: 7, 8, 9, 10, 19, 25, 26, 32, 36, 37, 41, 50.

## Sources and verification

- NCSBN and ANA, National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- ANA, Code of Ethics for Nurses with Interpretive Statements, 2025. https://codeofethics.ana.org/provisions
- ANA, Patient Safety: Rights of Registered Nurses When Considering a Patient Assignment, 2009. https://www.nursingworld.org/practice-policy/nursing-excellence/official-position-statements/id/patient-safety-rights-of-registered-nurses-when-considering-a-patient-assignment/ (defined in common.ts but not cited by any item)
- AHRQ, TeamSTEPPS 3.0 Pocket Guide, 2023. The CUS and DESC tool pages were confirmed through search. https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html
- The Joint Commission, Sentinel Event Alert 40, updated 2021. https://www.jointcommission.org/en-us/knowledge-library/newsletters/sentinel-event-alert/issue-40
- AACN Ethics Work Group, The 4A's to Rise Above Moral Distress, 2004. Search confirmed the year and the four steps.
- NCSBN, A Nurse's Guide to Professional Boundaries, 2018. https://www.ncsbn.org/public-files/ProfessionalBoundaries_Complete.pdf
- NCSBN, A Nurse's Guide to Substance Use Disorder in Nursing, 2014. https://www.ncsbn.org/public-files/SUD_Brochure_2014.pdf
- AHRQ PSNet, Reporting Patient Safety Events primer, 2019. https://psnet.ahrq.gov/primer/reporting-patient-safety-events
- Marx D, Patient Safety and the Just Culture: A Primer for Health Care Executives, 2001. https://psnet.ahrq.gov/issue/patient-safety-and-just-culture-primer-health-care-executives
- FDA, 21 CFR Part 803 Subpart C, user facility reporting. https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803/subpart-C
- OSHA 3148, Guidelines for Preventing Workplace Violence for Healthcare and Social Service Workers, 2016. https://www.osha.gov/sites/default/files/publications/OSHA3148.pdf
- US DOJ Civil Rights Division, ADA Requirements: Service Animals, updated 28 February 2020. The two allowed questions were fetched and confirmed. https://www.ada.gov/resources/service-animals-2010-requirements/
- Child Welfare Information Gateway, Infant Safe Haven Laws, current through 2026. https://www.childwelfare.gov/resources/infant-safe-haven-laws/
- US DOJ Office on Violence Against Women, National Protocol for Sexual Assault Medical Forensic Examinations, 3rd edition, 2024. https://www.justice.gov/ovw/sexual-assault-medical-forensic-examination-safe-information
- National Center on Elder Abuse, Red Flags of Abuse. https://www.pacourts.us/Storage/media/pdfs/20210516/225550-ncea_redflagsea.pdf
- Arnstein P and others for ASPMN, Use of Placebos in Pain Management, Pain Management Nursing, 2011. https://pubmed.ncbi.nlm.nih.gov/22117754/
- CMS, 42 CFR 405.1205, discharge appeal rights. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-405/subpart-J/section-405.1205
- Siegel JD and others, 2007 Guideline for Isolation Precautions. Search confirmed that disseminated zoster needs airborne and contact precautions and that staff who are not immune should stay out when immune staff are available.
- Textbooks: Potter and Perry, Fundamentals of Nursing, 11th edition. Yoder-Wise and Sportsman, Leading and Managing in Nursing, 8th edition. Hinkle and others, Brunner and Suddarth, 15th edition, 2022. Halter, Varcarolis, 9th edition, 2022. Guido, Legal and Ethical Issues in Nursing, 7th edition, 2020. Search confirmed each edition.

## For the reviewer

- Year choices. Potter 11th edition and Yoder-Wise 8th edition were released in 2022. The citations use the 2023 copyright year to match batch s03. The NCEA Red Flags sheet has no clear publication year. The citation uses 2021, the date in the hosting URL. The eCFR sources use 2024 as the year of the current text.
- Item 1 keys the right circumstance. Some texts could argue the right task, since feeding a client with a new swallow change may fall outside AP scope. The stem says the AP is trained and feeding is in the role, which points to the circumstance.
- Item 3 relies on a wait of 20 to 30 minutes after a hot drink, taken from fundamentals texts. It is in `refs`.
- Item 5 leaves out rapid response on purpose. Heart rate 104/minute and BP 126/78 mmHg are kept below common activation criteria. Some facilities let staff call for concern alone. Please check that the chain-of-command key still stands alone.
- Item 11 keys interviewing the client alone and reporting to adult protective services. The stem states that state law requires reporting.
- Item 12 teaches the duty to protect. The nurse reports to the treatment team. Rules on warning third parties vary by state.
- Item 17 names an outside oversight agency without choosing between state and federal. The right body depends on who pays.
- Item 30 is a trend msn about supervising an LPN. Clinically, stimulation and naloxone by protocol would also be urgent. The two keys, assess now and review report limits with the LPN, are framed as supervision actions. Please check that no distractor becomes defensible.
- Item 33 keys a private talk with the coworker as the first step for incivility. Some programs teach going to the manager first.
- Item 36 keys alcohol impairment. The staff nurse says they drank before the shift. Stroke and low glucose stay in the options as plausible alternatives.
- Item 41 uses the category "no-harm event" as in the AHRQ PSNet taxonomy. Some facilities grade events on a severity index instead.
- Item 49 has difficulty 5. The Medicare fast appeal must be requested before discharge.
- Overlap with other batches. An existing SATA covers red flags of financial exploitation. Item 35 is about the reporting action instead. An existing s11 item covers trauma-informed care after sexual assault. Item 28 covers evidence handling and chain of custody.
