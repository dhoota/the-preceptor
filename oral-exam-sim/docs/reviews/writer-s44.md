# Writer report: batch s44, Multiple patients

File: `src/samps/s44/multiple-patients.ts` (export `MULTIPLE_PATIENTS_S44`), re-exported as `SAMPS_S44` in `src/samps/s44/index.ts`.

## Count and mix

- 20 SAMPs, multiple-patients-16 to multiple-patients-35. All `reviewed: false`.
- 76 questions: 69 single and 7 menu. 16 SAMPs have 4 questions. Four have 3 (27, 28, 32, 34).
- Menu questions sit in 16, 20, 23, 25, 27, 34 and 35.
- Single key positions (first to fifth): 15, 15, 17, 11, 11. The highest is 17 of 69 (25% or less). The key is the single longest option in 9 of 69 singles (13%).
- `tsc` is clean for s44. `SAMP_BATCH=s44 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 451 of 451.

## Settings and patients

Tertiary, community and rural departments in six provinces. Patients range from a 6-week-old to a 91-year-old. Scenarios cover CTAS triage desks, waiting room reassessment, a single physician with an arrest and anaphylaxis, JumpSTART after a daycare roof collapse, SALT after a grandstand collapse, the first wave after an explosion, a chemical exposure with self-presenting workers, a pediatric respiratory surge, pandemic ventilator allocation, a rural night with five arrivals, two resuscitations with residents, an interruption during a repair, a tornado with START, a heat wave, three children at once, an opioid cluster, one aircraft for two trauma patients, older bus passengers tagged green, febrile children at triage and a measles exposure in a waiting room.

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1. Triage by complaint, vitals and ABC | 27 |
| 2. Resuscitate first, then parallel care with reassessment | 20 |
| 3. Lead, delegate, call colleagues and consultants early | 15 |
| 4. Disaster plans, surge resources, EMS coordination | 14 |

## Vitals in multi-patient stems

The spec has no rule written for multi-patient stems. I followed the gate (vitals field required, no BP in stem text) this way. The `vitals` field holds one index patient's values, and the stem says whose ("The vital signs listed are hers" or "... are for the 78-year-old woman"). The index patient is not always the keyed answer. Other patients get pulse, respiratory rate, O2 sat, GCS and capillary refill in the text. A BP for another patient appears only in an update.

## Sources (all checked)

- Bullard MJ, et al. CTAS Guidelines 2016. CJEM 2017. Full text read: https://ctas-phctas.ca/wp-content/uploads/2018/05/revisions_to_the_canadian_emergency_department_triage_and_acuity_scale_ctas_guidelines_2016.pdf (frailty, heat, paediatric fever 3 to 18 months, high risk rather than high acuity, geriatric RR over 27 and SBP under 110)
- Murray M, Bullard M, Grafstein E. CTAS implementation guidelines. CJEM 2004. Full text read: https://ctas-phctas.ca/wp-content/uploads/2018/05/2004_revisions-to-the-canadian-emergency-department-triage-and-acuity-scale-implementation-guidelines.pdf (reassessment intervals, modifier tables for BP, glucose, GCS, respiratory, pain and mechanism)
- Warren DW, et al. PaedCTAS. CJEM 2008. Full text read: https://doi.org/10.1017/S1481803500010149 (heart rate and respiratory rate by age tables)
- Benson M, Koenig KL, Schultz CH. START then SAVE. 1996. PMID 10159733. START steps checked against Romig's START and JumpSTART teaching slides.
- Romig LE. JumpSTART. JEMS 2002. PMID 12141119.
- SALT mass casualty triage, concept endorsed (ACEP, ACS COT and others). Disaster Med Public Health Prep 2008. Full text read, DOI 10.1097/DMP.0b013e31818d191e
- Kollek D, et al. CAEP position statement, hospital disaster preparedness. CJEM 2020. PMID 32425150 (listed in S, not cited by any question, so not attached to any SAMP)
- Auf der Heide E. Ann Emerg Med 2006. PMID 16387217
- Frykberg ER. J Trauma 2002. PMID 12169923
- Okumura T, et al. Tokyo sarin, part 2. Acad Emerg Med 1998. PMID 9660290
- Kelen GD, et al. Reverse triage. Lancet 2006. PMID 17141705
- Hick JL, et al. Surge capacity principles. Chest 2014. PMID 25144334
- Christian MD, et al. Triage, CHEST consensus. 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC7094437/
- Christian MD, et al. Pandemic critical care triage protocol. CMAJ 2006. PMID 17116904
- El-Shafy IA, et al. Closed-loop communication. J Surg Educ 2018. PMID 28780315
- Hicks C, Petrosoniak A. Emerg Med Clin North Am 2018. PMID 29132571
- Cardona V, et al. WAO anaphylaxis guidance 2020. PMID 33204386
- ATLS 11th edition. ACS COT 2025.
- Friedman JN, et al. CPS bronchiolitis. 2014. PMID 25414585
- Glaser N, et al. ISPAD DKA 2022. DOI 10.1111/pedi.13406
- Barkun AN, et al. Nonvariceal UGIB. Ann Intern Med 2019. DOI 10.7326/M19-1795
- Wong GC, et al. CCS/CAIC STEMI 2019. PMID 30760415
- Heran M, et al. Canadian Stroke Best Practice Recommendations 2022. Can J Neurol Sci 2024.
- Epstein Y, Yanovich R. Heatstroke. NEJM 2019. PMID 31216400
- Glauser T, et al. AES status epilepticus guideline. Epilepsy Curr 2016. PMID 26900382
- Dezfulian C, et al. AHA opioid-associated arrest statement. Circulation 2021. PMID 33682423
- Christenson J, et al. St. Paul's early discharge rule. Acad Emerg Med 2000. PMID 11015242
- NACI and PHAC. Canadian Immunization Guide, measles vaccine. Updated June 2025. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html

## Overlap avoided

The s13 and s09 items already test START RR over 30, JumpSTART rescue breaths, organophosphates, CO and hyperbaric oxygen, offload delay, handover and the mall shooting. This batch tests the START perfusion step, JumpSTART for non-walking infants and for children carried in, SALT sorting, lifesaving interventions and the expectant category, and field tags versus retriage. It adds CTAS modifiers, including the 2016 frailty, heat and fever changes.

## For the reviewers

1. **CTAS 2025.** Hall JN, et al. published CTAS Guidelines 2025 in CJEM (PMID 40938532). I could not reach the full text. Keys follow the 2016 revision and the 2004 modifier tables, as the brief asked. Check the frailty, heat and paediatric fever thresholds against 2025.
2. **16 q3 glucose modifier.** The CTAS glucose modifier is written for patients with diabetes. The stem gives her gliclazide.
3. **21 q1 and 21 q4 (Auf der Heide).** The claim that the less injured arrive first and the sickest later by EMS is my reading of the disaster research. I did not re-read the full paper.
4. **22 (chemical).** The agent is not named. The explanations lean on Okumura for secondary contamination of staff and for decontamination outside the building. Clothing removal as the first step is standard teaching, but that paper is not its source.
5. **24 q2 and q4.** SOFA over 11 as an exclusion and reassessment at 48 and 120 hours come from the Christian 2006 protocol, as summarized in the PMC copy. Provincial protocols vary.
6. **25 q2.** The saline bolus of 10 mL/kg over 30 minutes fits ISPAD 2022 (10 to 20 mL/kg over 20 to 30 minutes). I confirmed this through a summary, not the full text.
7. **29 q2.** The cooling target near 39°C is a general figure. Epstein describes cooling to about 38.6 to 39°C.
8. **30 q1.** The options give no doses (drug and route only), so none of them needs a weight-based check.
9. **31 q3.** I quoted the St. Paul's rule criteria from memory of the paper: mobilizes as usual, O2 sat over 92%, RR 10 to 20, temperature 35 to 37.5°C, pulse 50 to 100, GCS 15.
10. **Key parity across the batch.** The key is the longest option in only 13% of singles. That is inside the gate, but reviewers may see keys as slightly short.
11. **The CAEP 2020 statement.** It sits in the source map but no question cites it, so no SAMP lists it.
