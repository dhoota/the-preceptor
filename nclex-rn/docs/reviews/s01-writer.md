# Batch s01 writer report

Batch s01 holds 50 stand-alone items, ids rn-s01-01 to rn-s01-50. All are Management of Care (MOC). Every item has reviewed: false, version 1 and an empty canada note.

Files: src/bank/s01/common.ts (metadata helper and sources), part1.ts to part5.ts (10 items each), index.ts.

## Checks

- BATCH=s01 npx vitest run tests/bank.test.ts: 61 of 61 pass, including the whole bank near duplicate gate.
- npx tsc --noEmit -p . 2>&1 | grep bank/s01: prints nothing.

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2 (both zero-one), highlight 2, bowtie 2, trend 2 (both mc, items 17 and 38).

CJMM step: take action 18, generate solutions 10, prioritize hypotheses 7, recognize cues 6, evaluate outcomes 5, analyze cues 4.

Difficulty: level 1 has 4, level 2 has 18, level 3 has 17, level 4 has 9, level 5 has 2.

No calculations. The batch has no PPT items.

## MC key positions

28 mc items, including the two trend items. Positions A 7, B 7, C 7, D 7.

01 C, 02 A, 04 D, 06 B, 08 C, 10 D, 12 B, 14 D, 16 A, 17 C, 18 C, 20 A, 22 D, 24 B, 26 A, 28 B, 30 A, 32 C, 34 B, 36 D, 38 C, 39 D, 42 B, 44 A, 46 C, 48 B, 49 A, 50 D.

The key is the strict longest option in 2 of 28 mc items (36 and 50).

## Coverage

Delegation and supervision of assistive personnel (01, 20, 29, 40). Assignment to an LPN and to a float nurse (08, 21, 25). Priority setting across settings (02, 12, 22, 31, 34, 42). Informed consent, capacity and a minor's consent (03, 26, 27). Advance directives, the health care agent and POLST (04, 19, 46). Confidentiality, social media and record security (05, 14, 33). Leaving against advice and intentional torts (06, 35). SBAR, telephone prescriptions and handoff (07, 18, 37). Event reports, error response and root cause analysis (09, 23, 32). Chain of command and competence (10, 39). Client rights and ethics: refusal of blood, truth telling, conscientious objection, stopping dialysis (11, 16, 28, 43). Discharge referrals, case management and transitional care (13, 24, 47, 49). Documentation standards (15). Quality improvement data and PDSA (17, 45). Language access (30). Organ donation referral (36). Escalation of a trend charted by an AP (38). Impaired colleague (41). Medication reconciliation (44). Staff conflict (48). Barcode scanning (50).

## Sources and verification

- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Yoder-Wise PS, Sportsman S. Leading and Managing in Nursing, 8th edition. https://shop.elsevier.com/books/leading-and-managing-in-nursing/yoder-wise/978-0-323-79206-6
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. Already used in the bank.
- Hockenberry MJ, Duffy EA, Gibbs K. Wong's Nursing Care of Infants and Children, 12th edition, 2023. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- ANA. Code of Ethics for Nurses with Interpretive Statements, 2025. https://codeofethics.ana.org/about
- ANA. Principles for Nursing Documentation, 2010. https://www.nursingworld.org/globalassets/docs/ana/ethics/principles-of-nursing-documentation.pdf
- AHRQ. TeamSTEPPS 3.0 Pocket Guide, 2023. https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html
- IHI. SBAR Tool, 2023. Already used in batch c01.
- HHS Office for Civil Rights. Summary of the HIPAA Privacy Rule, 2003. https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html
- NCSBN. A Nurse's Guide to the Use of Social Media. https://www.ncsbn.org/brochures-and-posters/nurses-guide-to-the-use-of-socialmedia
- CMS. 42 CFR 489.102, advance directive requirements for providers. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-489/subpart-I/section-489.102
- CMS. 42 CFR 482.45, organ, tissue and eye procurement. https://www.law.cornell.edu/cfr/text/42/482.45
- HHS. 45 CFR 92.201, meaningful access for individuals with limited English proficiency, 2024 rule. https://www.law.cornell.edu/cfr/text/45/92.201
- Appelbaum PS. Assessment of Patients' Competence to Consent to Treatment. N Engl J Med 357(18):1834, 2007. https://www.nejm.org/doi/full/10.1056/NEJMcp074045
- Guttmacher Institute. Minors' Access to STI Testing and Treatment. https://www.guttmacher.org/state-policy/explore/minors-access-sti-services
- National Patient Safety Foundation. RCA2, 2015. https://www.ihi.org/library/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm
- NCSBN. Substance Use Disorder in Nursing, 2011. https://www.ncsbn.org/nursing-regulation/practice/substance-use-disorder/substance-use-in-nursing.page
- The Joint Commission. National Performance Goals, Hospital Program, effective January 2026. https://www.jointcommission.org/en-us/standards/national-performance-goals
- The Joint Commission. National Patient Safety Goals, Hospital Program, 2025, NPSG.03.06.01. https://digitalassets.jointcommission.org/api/public/content/9be383450fc941df806b76c5fbdd9ae6?v=3c600c3a
- The Joint Commission. Official Do Not Use List. https://www.jointcommission.org/en-us/knowledge-library/support-center/standards-interpretation/do-not-use-list-of-abbreviations
- National POLST. National POLST Form, 2023 revision. https://polst.org/
- Langley GJ et al. The Improvement Guide, 2nd edition, 2009. https://www.ihi.org/library/publications/improvement-guide-practical-approach-enhancing-organizational-performance
- NCC MERP. Recommendations to Reduce Medication Errors Associated with Verbal Medication Orders and Prescriptions, revised 2015. https://www.nccmerp.org/recommendations-reduce-medication-errors-associated-verbal-medication-orders-and-prescriptions
- AHRQ. CANDOR Toolkit, 2016. https://www.ahrq.gov/patient-safety/settings/hospital/candor/modules.html
- Jones DA, DeVita MA, Bellomo R. Rapid-Response Teams. N Engl J Med 365(2):139, 2011. https://www.nejm.org/doi/abs/10.1056/NEJMra0910926
- Naylor MD et al. Transitional Care of Older Adults Hospitalized with Heart Failure. J Am Geriatr Soc 52(5):675, 2004. https://pubmed.ncbi.nlm.nih.gov/15086645/
- CMSA. Standards of Practice for Case Management, Revised 2022. https://cmsa.org/about/standards-of-case-management-practice/
- Beauchamp TL, Childress JF. Principles of Biomedical Ethics, 8th edition, 2019. https://global.oup.com/academic/product/principles-of-biomedical-ethics-9780190640873
- Ganz DA et al. AHRQ. Preventing Falls in Hospitals, 2013. https://www.ahrq.gov/sites/default/files/publications/files/fallpxtoolkit_0.pdf
- Alfandre DJ. I'm Going Home: Discharges Against Medical Advice. Mayo Clin Proc 84(3):255, 2009. https://pubmed.ncbi.nlm.nih.gov/19252113/

## Points for the reviewer

- Years: Potter 11th edition and Yoder-Wise 8th edition are dated 2023 by copyright convention. Both went on sale in 2022. The NCSBN social media brochure is dated 2018 and the 42 CFR 489.102 entry 2019. I did not confirm either exact year.
- The Do Not Use list entry uses 2010, when it joined standard IM.02.02.01. The list itself dates from 2004.
- Item 10: the two-challenge rule and the chain of command come from TeamSTEPPS. The bradycardia threshold of 60/minute is in refs and cited to Hinkle.
- Item 15: the highlight passage uses line breaks between spans so the style gate does not read it as one long sentence.
- Item 19: the why for the last option says many states bar caregivers as witnesses. State rules vary.
- Item 25: the float assignment follows Yoder-Wise on matching assignments to competence. Local policy may differ.
- Item 26: 16 is above every state age limit Guttmacher lists. Some states allow providers to tell parents in certain cases. The rationale says so.
- Item 31: the drag and drop places three of five clients. The two stable clients are left unplaced, so their order does not matter.
- Item 36: a nurse who has completed the designated requester course may approach the family. The key follows the CMS rule that notice goes to the organ procurement organization first.
- Item 38: the key is the rapid response team. The rationale reads the trend as worsening sepsis without naming a scoring tool.
- Item 44: medication reconciliation is cited to the 2025 NPSG. I could not open the 2026 National Performance Goals page to check where it now sits.
- Item 50: the 2026 NPG page returned 403. The two identifier rule and the ban on room number came from the search summary of the Joint Commission FAQ.
