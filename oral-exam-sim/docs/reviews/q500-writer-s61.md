# Q500 writer report, batch s61 (seizures)

Writer: Preceptor. File: `src/samps/s61/seizures.ts`. All items `reviewed: false`, `version: 1`.

## Items

5 SAMPs, ids seizures-48 to seizures-52. 17 questions: 16 single, 1 menu.

| Id | Scenario | Questions (key feature) |
|---|---|---|
| seizures-48 | 13-month-old, simple febrile seizure 8 days after MMR and varicella vaccines | 4 (8, 8, 5 menu, 8) |
| seizures-49 | 4-month-old with fever and seizure, then status epilepticus | 4 (8, 3, 4, 6) |
| seizures-50 | 8-year-old with nocturnal hemifacial seizures thought to be reflux | 3 (1, 1, 6) |
| seizures-51 | 15-month-old, cyanotic breath-holding spell with iron deficiency | 3 (1, 2, 2) |
| seizures-52 | 27-year-old with epilepsy, missed doses from gastroenteritis, subtle status | 3 (3, 4, 7) |

Single key positions (first to fifth): 3, 3, 4, 3, 3. The key is the longest option in 4 of 16 single questions.

## Key feature coverage

KF1 3, KF2 2, KF3 2, KF4 2, KF5 1, KF6 2, KF7 1, KF8 4. Every key feature is tested. KF8 has the most questions, then KF1.

## Uniqueness

Checked against all 47 existing seizure SAMPs and the seizure items in other topics, including the febrile seizure items in seizures-11, -22 and -24. New angles: febrile seizure after vaccination (diagnosis, continuing vaccines, adverse event reporting, no prophylaxis), the 6-month lower age limit, status defined by no recovery between seizures, ventilation after benzodiazepines in an infant, self-limited epilepsy with centrotemporal spikes, breath-holding spells with iron therapy, subtle status after two benzodiazepine doses, and IV levetiracetam for a vomiting patient.

## Sources and verification

- AAP Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011. Abstract read (PMID 21285335). https://pubmed.ncbi.nlm.nih.gov/21285335/
- Offringa M et al. Prophylactic drug management for febrile seizures in children. Cochrane. 2021. Abstract read (PMID 34131913). https://pubmed.ncbi.nlm.nih.gov/34131913/
- PHAC. Canadian Immunization Guide, measles vaccines. Page opened (febrile seizure history not a contraindication, fever 6 to 23 days after MMR, updated 2025). https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html
- PHAC. Reporting adverse events following immunization, user guide. 2025. Page opened (seizures reportable, mandatory in most provinces and territories). https://www.canada.ca/en/public-health/services/immunization/reporting-adverse-events-following-immunization/user-guide-completion-submission-aefi-reports.html
- McKenzie KC et al. CPS. Emergency management of the paediatric patient with convulsive status epilepticus. 2021. Full text read on the journal site (definition, ventilation, lumbar puncture timing, two benzodiazepine doses). https://doi.org/10.1093/pch/pxaa127
- ILAE EpilepsyDiagnosis.org, SeLECTS diagnostic criteria and imaging pages. Opened (imaging not required when typical, updated 2024). https://epilepsydiagnosis.org/syndrome/ects-diagcriteria.html
- Leung AKC et al. Breath-holding spells in pediatrics. Curr Pediatr Rev. 2019. Full text read (PMC6696822): sequence of events, CBC and ferritin, elemental iron 3 mg/kg/day for 12 weeks. https://doi.org/10.2174/1573396314666181113094047
- Trinka E et al. ILAE definition and classification of status epilepticus. Epilepsia. 2015. PMID confirmed. https://pubmed.ncbi.nlm.nih.gov/26336950/
- Kapur J et al. ESETT. N Engl J Med. 2019. PMID 31774955 confirmed. https://doi.org/10.1056/NEJMoa1905795
- Sandoz Canada. Levetiracetam for injection product monograph, authorized 21 January 2026. PDF read (alternative when oral dosing is not feasible, same total daily dose and frequency). https://pdf.hres.ca/dpd_pm/00083259.PDF

## For the reviewers

- seizures-48 cites AAP, CIG, the AEFI guide and Cochrane. The AAP 2008 long-term guideline is defined in the file's source table but not cited, so it does not appear in the SAMP.
- seizures-51 q3: elemental iron 3 mg/kg/day comes from the trial cited in the Leung review. Some formularies use 3 to 6 mg/kg/day for iron deficiency anemia, so 6 mg/kg was left out of the options on purpose.
- seizures-52 q2: levetiracetam 60 mg/kg for 58 kg is 3 480 mg, below the 4 500 mg cap used in ESETT.
