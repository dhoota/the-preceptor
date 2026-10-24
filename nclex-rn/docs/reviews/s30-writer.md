# s30 writer report

Batch s30, stand-alone, 50 items, ids rn-s30-01 to rn-s30-50. Files: `src/bank/s30/common.ts`, `part1.ts` to `part5.ts`, `index.ts`. Every item has `reviewed: false` and `canada: ""`.

`BATCH=s30 npx vitest run tests/bank.test.ts` passes: 61 of 61, with the whole-bank near duplicate and sign-off tests. `npx tsc --noEmit -p .` shows no s30 errors.

## Counts

Client Needs: MOC 40, SIPC 10.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items use the mc kind (rn-s30-21, rn-s30-34).

CJMM step: action 18, generate 11, analyze 8, recognize 5, prioritize 4, evaluate 4.

Difficulty: 1 is 2 items, 2 is 13, 3 is 19, 4 is 14, 5 is 2.

## MC key positions

Across the 28 mc kind items (26 mc plus the 2 trend items): A 7, B 8, C 7, D 6. The key is the strict longest option in 8 of 28.

Calculation items with a `calc` block: rn-s30-24 (dextrose 10% volume, 125 mL) and rn-s30-36 (kcal from a substitute formula, 1440 kcal).

## Coverage of the focus list

- Licensure in another jurisdiction: 01 single-state license and a border hospital, 03 compact rules after moving, 44 nurse licensed abroad working as a technician, 45 VA job plus a private side job.
- Nurse practice act: 04 second step of the scope decision framework, 05 grounds for board discipline, 08 lapsed license, 46 who does what in regulation.
- Reportable disease: 07 suspected measles reported on suspicion, 09 nationally notifiable list, 43 foodborne outbreak cluster.
- Genetic confidentiality: 10 sibling asks for a BRCA2 result, 11 parent asks to test a teen for BRCA1, 20 limits of GINA.
- Gifts and conflicts: 12 cash gift, 13 spouse holds vendor shares, 14 sales representative, 41 recruiting own clients for a paid trial, 42 referral to a relative's agency.
- Whistleblowing: 15 highlight of a draft report, 16 escalation order, 18 retaliation after a report.
- Cultural advocacy with family decision makers: 32 capable client delegates to her son, 33 legal surrogate versus family custom, 47 family dishes and a potassium limit, 48 large family vigil.
- Shortages and fair allocation: 21 saline supply trend, 22 scarce chemotherapy allocation, 23 conserving IV fluid, 24 substitute dextrose product, 36 substitute feeding formula.
- Collaboration: pharmacy 27, 28, 29; dietitian 29, 34, 35, 36, 47; physiotherapy 38, 40; respiratory therapy 37, 39, 40.
- SIPC: infant abduction 02 and 31, MRI zones 06 and 19, laser 25 and 26, class III obesity 30 and 49, latex-safe room 17, bedside site marking 50.

Uniqueness: before each chunk I grepped the inventory for the key terms of each topic. The nearest existing items and how s30 differs:
- rn-s03-17 (multistate license, practice law of the client's state): s30 tests single-state licensure, moving residence, discipline as a bar, a foreign license and federal employment.
- rn-s06 newborn security teaching (mother's statements): s30 tests the staff response to a missing infant and visitor warning behaviors.
- rn-s06-28 and rn-s19-26 (client MRI screening): s30 tests zones and a code in Zone IV.
- rn-s08-14 (site marking before arthroscopy): s30 tests a bedside procedure, who may and may not take delegated marking, and time-out timing. The reviewer may judge blank 1 of rn-s30-50 close to rn-s08-14.
- rn-s02 disclosure to public health without consent: s30 tests which conditions are notifiable and reporting on suspicion.
- rn-s04 reporting fraud outside the agency: s30 tests the factual content of a report, the full escalation order and retaliation.
- rn-s28-49 traditional healing ceremony: no ceremony item in s30.
- rn-s13-31 leaking CPAP mask: rn-s30-37 is a device-related pressure injury with a respiratory therapist refit.
- rn-s06 and rn-s08 sling lift items: rn-s30-30 is repositioning in bed and rn-s30-49 is equipment weight ratings.
No topic label equals an existing label in the bank, including the other new batches present at the time of the run.

## Sources and verification

- NCSBN, Nurse Licensure Compact FAQs. Read: 60 days to apply after a move, residence in a compact state needed, unresolved discipline as a bar, single-state licenses for noncompact residents. https://www.nursecompact.com/FAQs.page
- US Department of Veterans Affairs, VA Careers: Nurses. Read: one active, unrestricted US license allows practice anywhere in the VA. https://www.vacareers.va.gov/careers/nurses/
- Ballard K et al., Scope of Nursing Practice Decision-Making Framework, Journal of Nursing Regulation 7(3):19, 2016. Citation confirmed from the North Dakota board's copy. https://www.ncsbn.org/decision-making-framework.htm
- American Nurses Association, Code of Ethics for Nurses with Interpretive Statements, 2025. Read provisions 1.4 (respect for a client's chosen way of deciding, culture), 2.2 (conflicts of interest, disclose, refer to a colleague), 2.3 (tokens of gratitude follow institutional policy), 3.1, 3.4 (raise with the person, then manager, escalate, external report, factual documentation, support for whistleblowers) and 3.5 (protection from retaliation). https://codeofethics.ana.org/provisions
- The Joint Commission, National Performance Goals Effective January 2026 for the Hospital Program. Read NPG.01.06.02 (site marking by the accountable practitioner who will be present, delegation limited to supervised residents or APRN and PA, marking where more than one location is possible), NPG.01.06.03 (time-out immediately before the procedure) and NPG.02.02.01 (conflicts of interest disclosed). https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- National Human Genome Research Institute, Genetic Discrimination, updated 2022. Read: health insurers and employers of 15 or more covered, life, disability and long-term care insurance not covered. https://www.genome.gov/about-genomics/policy-issues/Genetic-Discrimination
- AAP and ACMG, Ethical and Policy Issues in Genetic Testing and Screening of Children, Pediatrics 131(3):620, 2013. Citation confirmed through PubMed records (PMID 23428972). The full text was not reachable, so the deferral of predictive testing for adult-onset conditions rests on my knowledge of the statement.
- CDC, Clinical Overview of Measles, updated 2026. Read: three C's prodrome, Koplik spots, head to trunk rash, airborne precautions, providers required to report suspected cases. https://www.cdc.gov/measles/hcp/clinical-overview/index.html
- CDC NNDSS, 2026 National Notifiable Conditions. Read the infectious list and the outbreak list (foodborne disease outbreak). https://ndc.services.cdc.gov/search-results-year/
- Fox ER, McLaughlin MM, ASHP Guidelines on Managing Drug Product Shortages, AJHP 75(21):1742, 2018. Citation confirmed through PubMed (PMID 30061155). The ASHP site returned 403, so its content on allocation committees, hoarding and substitution errors rests on my knowledge of the guideline.
- Boullata JI et al., ASPEN Safe Practices for Enteral Nutrition Therapy, 2017 (PMID 27815525). McClave SA et al., SCCM and ASPEN critical care nutrition guideline, 2016 (PMID 26773077). White JV et al., AND and ASPEN malnutrition consensus, 2012 (PMID 22535923). All confirmed in PubMed.
- Girard TD et al., ABC trial, Lancet 371:126, 2008 (PMID 18191684). Pun BT et al., ABCDEF bundle, Critical Care Medicine 47(1):3, 2019 (PMID 30339549). Confirmed in PubMed.
- NCMEC, For Health Care Professionals: Guidelines on Prevention of and Response to Infant Abductions, 10th edition, 2014. Read: typical abductor profile, warning behaviors, staff to exits and stairwells, search and call security at the same time, visitors able to give the mother's full name. https://www.missingkids.org/content/dam/missingkids/pdfs/ForHealthCareProfessionals_10thEdition.pdf
- Gilk T, Kanal E, Interrelating Sentinel Event Alert 38 with the ACR Guidance Document on MR Safe Practices 2013, JMRI 37(3):531, 2013. Read: zone definitions, no code in Zone IV, remove the client to a designated code area, no quench when the client can be moved out, non-MR staff supervised in Zone III. Kanal E et al., ACR Guidance Document on MR Safe Practices 2013, JMRI 37(3):501 (PMID 23345200, confirmed).
- Laser Institute of America, ANSI Z136.3-2018 Safe Use of Lasers in Health Care. Read the LIA sample text: class 4 fire hazard, moist sponges, alcohol prep dry before draping, water at hand, reflected beams. https://lia.org/store/ansi-z1363-2018-safe-use-lasers-health-care
- ASCIA Guidelines for Hospital Management of Latex Allergic Patients, content updated 2010. Read: synthetic gloves, signs at all entrances, cover the arm under the cuff, no drugs drawn through rubber bungs, premedication not reliable, tell other departments. https://allergy.org.au/hp/papers/management-of-latex-allergic-patients/hospital-management
- Waters TR, When Is It Safe to Manually Lift a Patient, AJN 107(8):53, 2007 (35 lb limit, confirmed through CDC Stacks). ANA Safe Patient Handling and Mobility standards, 2nd edition, 2021 (confirmed through ANA and AACN listings).
- Guido GW, Legal and Ethical Issues in Nursing, 7th edition. Pearson lists publication in September 2020. Used for licensure, discipline, surrogates and lapsed licenses from my knowledge of the text.
- Also cited: HHS HIPAA Privacy Rule summary, CLAS standards, Beauchamp and Childress 8th edition, Potter and Perry 11th edition, Hinkle 15th edition, NPIAP 2019 guideline.

The WebSearch budget for the session ran out partway through verification. After that I checked citations by fetching known pages and by PubMed record lookups by PMID.

## For the reviewer

- rn-s30-04: the framework's question order comes from my knowledge of the NCSBN flowchart. The flowchart is an image I could not read. The key (legal prohibition is checked right after the task is defined) is the part I am most sure of.
- rn-s30-25 and rn-s30-26: the sample text I read does not include the eyewear section of Z136.3. The rule that eyewear must match the wavelength is standard, but I did not read it in the standard itself.
- rn-s30-07: pneumonia and dehydration as parameters to monitor are standard measles teaching. I did not read them on the CDC page.
- rn-s30-22 and rn-s30-23: the shortage content rests on the ASHP guideline as I know it. I could not reach the text.
- rn-s30-33: the surrogate order (spouse, then adult children) is given in the stem as state law, since states differ.
- rn-s30-40: the role split (RT airway, PT movement, nurse lines) is standard practice. The ABCDEF paper supports early mobility as a team task but may not spell out these roles.
- rn-s30-27 has one option on kidney dosing of an anticoagulant. An existing MOC topic, "Kidney dosing question for a new anticoagulant", covers that point. Here it is one option among six.
- rn-s30-50: blank 1 (the accountable practitioner marks) overlaps the teaching of rn-s08-14. The new points are the bedside setting, the nurse not being an allowed delegate and the time-out timing.
- rn-s30-49 counts a correctly sized blood pressure cuff as a safety preparation. A reviewer may see it as assessment accuracy and not safety.
- All `canada` fields are empty for the later pass. Licensure items 01, 03 and 45, GINA item 20 and reportable disease items 07, 09 and 43 will likely need Canada notes.
