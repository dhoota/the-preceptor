# Batch s02 writer report

Batch s02 holds 50 stand-alone items, ids rn-s02-01 to rn-s02-50. All are Management of Care (MOC). Every item has reviewed: false, version 1 and an empty canada note.

Files: src/bank/s02/common.ts (metadata helper and sources), part1.ts to part5.ts (10 items each), index.ts.

The folder also holds extra.ts with two items, rn-s02-91 (hyperkalemia) and rn-s02-92 (magnesium toxicity). I did not write that file. It is not imported by index.ts, so it is not in the bank. Another process edited it while I worked. Its items are not Management of Care and fall outside the planned id range. An earlier version of item 92 keyed protamine sulfate as the magnesium antidote, which is wrong. The current version keys calcium gluconate. Item 91 still says sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe", which is false. That resin acts over hours. The file should be deleted or ignored.

## Checks

- BATCH=s02 npx vitest run tests/bank.test.ts: 61 of 61 pass on the latest run. An earlier run failed only the whole bank near duplicate gate on pairs from other batches (rn-s22-01 with rn-s25-16, and rn-c01-4-1 with rn-c02-3-1). That gate now passes.
- npx tsc --noEmit -p . 2>&1 | grep bank/s02: prints nothing.

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3 (two zero-one, one dyad in item 26), cloze 2 (both zero-one), highlight 2, bowtie 2, trend 2 (both mc, items 17 and 38).

CJMM step: take action 15, analyze cues 13, generate solutions 7, prioritize hypotheses 6, recognize cues 5, evaluate outcomes 4.

Difficulty: level 1 has 4, level 2 has 14, level 3 has 20, level 4 has 9, level 5 has 3.

No calculations. The batch has no PPT items.

## MC key positions

28 mc items, including the two trend items. Positions A 7, B 7, C 7, D 7.

01 B, 03 D, 04 A, 05 C, 07 B, 09 D, 11 A, 13 C, 14 B, 15 D, 17 C, 18 A, 19 C, 21 B, 23 A, 25 C, 27 D, 30 A, 31 C, 33 D, 35 A, 37 B, 38 D, 39 C, 43 A, 45 D, 47 B, 50 B.

The key is the strict longest option in 1 of 28 mc items (14). Keyed choices run longer than distractors in 13 of 22 multi-key pools. Select all keys in the first half of the list: 20 of 40.

## Coverage

Delegation and supervision: AP tasks in long-term care (02), why teaching stays with the nurse (26), nail care for a resident with diabetes (35), a nursing student giving an IV drug (37). Assignment and staffing: an unstable admission (09), short staffing (20). Priorities: urgent care (23), tasks at the start of a shift (33), a handoff (32), postpartum clients (50). Consent: after a sedative (03), emergency implied consent (04), a preoperative checklist (06), required disclosures (34), a married minor (47), leaving a research study (25). Legal duties: controlled drug waste (01), child abuse reporting (05), Good Samaritan care (07), negligence elements (10), elder neglect (22), EMTALA screening (30). Documentation and information technology: late entry (11), record outage (12), paper correction (16). Confidentiality and client rights: right of access (15), public health disclosure (21), clergy and the facility directory (39), resident rights (44), family grievance (46). Advocacy and ethics: second opinion (27), same-sex caregiver request (31), autonomy and veracity (40), living will teaching (48). Quality and safety culture: sentinel events (13), just culture (14), teach-back readmission data (17), quality measure types (43), time-out discrepancy (45), incident reports (49). Management concepts: conflict strategy (18), Lewin's change stages (19), incivility (42), device competence (29). Case management and referrals: case manager referral (08), referrals after hip fracture (24), dietitian referral (38), transport barrier (41). Handoff: bedside report (28), SBAR (36).

## Sources and verification

- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf (verified in batch s01)
- Potter PA et al. Fundamentals of Nursing, 11th edition, 2023. Yoder-Wise PS, Sportsman S. Leading and Managing in Nursing, 8th edition, 2023. Hinkle JL et al. Brunner and Suddarth's, 15th edition, 2022. Beauchamp TL, Childress JF. Principles of Biomedical Ethics, 8th edition, 2019. All already used and verified in the bank.
- Guido GW. Legal and Ethical Issues in Nursing, 7th edition, Pearson, 2020. https://www.pearson.com/en-us/subject-catalog/p/legal-ethical-issues-in-nursing/P200000001146/9780134701233
- ANA. Code of Ethics for Nurses, 2025. ANA. Principles for Nursing Documentation, 2010. Both from batch s01.
- ASHP Guidelines on Preventing Diversion of Controlled Substances. Am J Health-Syst Pharm 79(24):2279, 2022. https://pubmed.ncbi.nlm.nih.gov/36208462/
- Child Welfare Information Gateway. Mandatory Reporting of Child Abuse and Neglect, State Statutes, current through May 2023. Read from the PDF. https://artifacts.childwelfare.gov/public/documents/mandatory-reporting-abuse-neglect.pdf
- NCEA and NAPSA. Mandated Reporting of Abuse of Older Adults and Adults with Disabilities, 2024. https://www.napsa-now.org/wp-content/uploads/2024/01/NCEA_NAPSA_MandatedReportBrief.pdf
- The Joint Commission. Sentinel Event Policy (fall with any fracture). https://www.jointcommission.org/en/knowledge-library/sentinel-events
- The Joint Commission. National Performance Goals, Hospital Program, effective January 2026, NPG.01.06.03 time-out before the procedure. Read from the PDF. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- Marx D. Patient Safety and the Just Culture: A Primer for Health Care Executives, 2001. https://psnet.ahrq.gov/issue/patient-safety-and-just-culture-primer-health-care-executives
- HHS OCR. Individuals' Right under HIPAA to Access their Health Information, 45 CFR 164.524. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html
- 45 CFR 164.510, facility directory and clergy. https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510
- HHS OCR. Summary of the HIPAA Privacy Rule, 2003. From batch s01.
- 42 CFR 489.24, EMTALA. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-489/subpart-B/section-489.24
- 42 CFR 483.10, resident rights. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-483/subpart-B/section-483.10
- 42 CFR 482.13, patient's rights and grievances. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13
- 45 CFR 46.116, research consent and withdrawal. https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-46/subpart-A/section-46.116
- AHRQ. Guide to Patient and Family Engagement, Strategy 3: Nurse Bedside Shift Report. https://www.ahrq.gov/patient-safety/patients-families/engagingfamilies/strategy3/index.html
- AHRQ. Health Literacy Universal Precautions Toolkit, 3rd edition, 2024. https://www.ahrq.gov/health-literacy/improve/precautions/toolkit.html
- ONC. SAFER Guides: Contingency Planning, 2025 revision. https://www.healthit.gov/wp-content/uploads/2025/06/SAFER-Guide-2.-Contingency-Planning-Final.pdf
- CMSA. Standards of Practice for Case Management, 2022. IHI. SBAR Tool. Both from batch s01.
- Prabhakaran S, Gonzalez NR, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316, 2026. Checked through PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/41582814/
- ACOG. Gestational Hypertension and Preeclampsia, Practice Bulletin 222. Obstet Gynecol 135(6):e237, 2020. Checked through PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023. https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0

## Points for the reviewer

- Item 43 teaches the Donabedian structure, process and outcome model but cites Yoder-Wise. The gate rejects source years before 1990, so the 1988 JAMA paper could not be cited.
- Item 42 cites Yoder-Wise and the ANA Code for incivility. I could not reach the ANA incivility position statement to verify it.
- The year on several regulation and web sources (TJC sentinel event policy, Universal Protocol, 45 CFR 164.510, 164.524, 42 CFR 482.13, 483.10, 489.24) is the version year I used, not a fixed publication year.
- Item 47: marriage emancipates a minor in most states, not all. Some states now bar marriage under 18. The rationale says "most states".
- Item 07: Good Samaritan statutes vary by state. The key follows the common rules on abandonment and good faith.
- Item 26: the dyad pairs one task with one reason. Only token pair 0 and 3 fits the sentence.
- Item 32 cites Hinkle for the potassium range in refs.
- Item 50: the tearful client on day 2 is keyed as common. The why says she still needs support and later screening.
- Web search budget ran out partway through. The last checks used WebFetch and PubMed E-utilities.
