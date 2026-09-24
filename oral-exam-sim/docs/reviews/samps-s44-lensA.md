# SAMP review: batch s44, Multiple patients

Lens A: clinical truth. Reviewer: AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Scope: `src/samps/s44/multiple-patients.ts` (multiple-patients-16 to multiple-patients-35) and `src/samps/s44/review-extra.ts` (multiple-patients-36 and multiple-patients-37).

## Method

- Read every stem, update, option and explanation against the stem and the cited source.
- Recomputed every CTAS level against the tables in CTAS 2004 (Tables 2 to 8), CTAS 2016 (frailty, heat, fever and geriatric sections) and PaedCTAS 2008 (Tables 2 to 6). Full text of all three was read.
- Recomputed every START, JumpSTART and SALT category against the published algorithms.
- Recomputed doses: epinephrine 0.01 x 58 kg = 0.58 mg, capped at 0.5 mg (18 q1). Saline 10 mL/kg x 36 kg = 360 mL (25 q2).
- Searched the whole bank (`grep -ril` over `src/samps/`) for overlap: s09 and s35 (EMS), s13 (multiple patients), s14 and s45 (trauma), s09 and s36 (environmental), s18 (toxicology), s14, s41 and s46 (measles).

## CTAS, START, JumpSTART and SALT recomputation

| SAMP, question | Finding | Tool rule | Level or category | Keyed | Agrees |
|---|---|---|---|---|---|
| 16 q1 | 86, wheelchair, dementia, peripheral pain 2/10, normal vitals | 2016 frailty modifier lifts 4 or 5 to 3 | 3 | 3 | yes |
| 16 q2 | 228/124 mmHg with headache, nausea | 2004 Table 2, SBP over 220 with symptoms | 2 | 2 | yes |
| 16 q3 | glucose 2.6 with sweating, GCS 12, sat 91% with work of breathing | 2004 Tables 8, 4, 5 | 2 each | keyed three | yes |
| 16 q4 | Level 2 reassessment | 2004, every 15 minutes | 15 min | 15 min | yes |
| 17 q1 | Unrestrained, 70 km/h | 2004 Table 7, over 40 km/h unrestrained | 2, internal waiting area per 2016 | yes | yes |
| 17 q3 | Initial level after change | 2004, initial score cannot be changed | keep plus reassessment level | yes | yes |
| 19 q1 | 3 years, cannot stand, RR 34, pulse, alert | JumpSTART 15 to 45, pulse, AVPU | delayed | delayed | yes |
| 19 q2 | 7 months, RR 40, pulse, alert, abrasion | JumpSTART infant, no significant external injury | minor | minor | yes |
| 20 (new) q1 | Bleeding controlled, does not obey or move purposefully | SALT failed check, likely to survive | immediate | immediate | yes |
| 20 (new) q3 | Passes four checks, open tibial fracture | SALT, not minor only | delayed | delayed | yes |
| 22 q4 (old) | Stridor, airway protected | 2004 Table 5 moderate | 2 | "at least 2" | yes |
| 23 q1 | 5 months, sat 91%, retractions, RR 64, HR 172 | PaedCTAS Table 2 moderate, Tables 5 and 6 band III | 2 | 2 | yes |
| 25 q1 | BP 82/48, mottled, confused | shock | 1 | 1 | yes |
| 27 q1 | Laceration, pain 4/10 peripheral | 2004 Table 6 | 4 | 4 | yes |
| 28 q1 | RR 24 | START, 30 or less goes to perfusion | perfusion step | perfusion | yes |
| 28 q2 | Cannot follow commands | START mental status | immediate | immediate | yes |
| 29 q1 | Core 41.6°C | 2016 heat table, over 41°C | 1 | 1 | yes |
| 29 q3 | Ongoing cramps, 38.2°C | 2016 heat table | 3 | 3 | yes |
| 30 q2 | Single words, sat 88% | PaedCTAS severe, under 90% | 1 | 1 | yes |
| 33 q2 | Bus rollover | 2004 Table 7 rollover | 2 | 2 | yes |
| 33 q4 | GCS 13 | 2004 Table 4, 10 to 13 | 2 | 2 | yes |
| 34 q1 | 6 weeks, 38.2°C | 0 to 3 months over 38°C | 2 | 2 | yes |
| 34 q2 | Chemotherapy child 38.4°C | 2004 Table 3, immunocompromised over 38.5°C | not 2 as written | keyed 2 | **no, fixed** |
| 34 q3 | 14 months, HR 190 | PaedCTAS Table 6, 1 to 3 years over 165 | 1 | 1 | yes |

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| multiple-patients-34 | q2 | options, explanation | The chemotherapy child at 38.4°C does not meet the CTAS immunocompromised fever modifier, which is written as over 38.5°C. Keyed as level 2. Temperature raised to 38.9°C and the explanation now states the threshold | high |
| multiple-patients-20 | q1 to q4 | whole question set | All four questions repeated multiple-patients (ems-26, s35) almost item for item: global sort, lifesaving interventions with a tourniquet, ankle injury as minimal, and a 70-year-old with exposed brain as expectant. Rebuilt with new teaching points: category after a tourniquet (immediate), SALT checks versus START cut-offs (menu), open fracture as delayed, and two rescue breaths for an apneic child in SALT | high |
| multiple-patients-22 | q4 | update, prompt, options, explanation | Stridor and hoarse voice taking first priority after an irritant exposure repeated ems-24 q2 (s35). Replaced with management of the symptomatic triage nurse as an exposed patient. The unused CTAS 2004 source was removed | high |
| multiple-patients-29 | stem, q2 | stem, vitals, whole q2 | Stem nearly copied environmental SAMP in s09 ("An older man found confused during a heat wave": 79 years, no air conditioning, hydrochlorothiazide, hot dry skin, BP 96/58 mmHg). q2 repeated the s09 and s36 cooling teaching with the same acetaminophen and dantrolene distractors. Stem now 86 years, found at a wellness check, BP 92/54 mmHg. q2 rebuilt as prioritizing the next waiting heat patient (heat stroke at 40.4°C with confusion) | high |
| multiple-patients-35 | q3, q4 | whole questions | q3 (MMR for 8-month-old, IMIg for 4-month-old, IVIg for pregnancy) and q4 (Ig within 6 days) repeated pediatric-fever measles SAMP in s14 and infectious-diseases-40 in s41. Rebuilt as Canadian immunity criteria for exposed adults (born before 1970, two documented doses, health care workers) and the infectious period (4 days before to 4 days after rash onset) for community tracing. Verified against the CIG measles chapter | high |
| multiple-patients-25 | q2 | source, explanation | Cited ISPAD 2022 where a current Canadian source exists. Replaced with CPS 2023 (Gripp et al). Explanation now states CPS wording: 10 to 20 mL/kg over 20 to 30 minutes, never an insulin bolus, infusion only after the first hour. The claim that an insulin bolus "raises the risk of cerebral edema" was stated as fact and is softened | high |
| multiple-patients-30 | q1, q3 | source | Cited the American Epilepsy Society 2016 guideline where a current Canadian one exists. Replaced with CPS 2021 (McKenzie, Hahn, Friedman) | high |
| multiple-patients-30 | q1 | explanation | "Each needs IV access" is not true of fosphenytoin, which CPS 2021 notes can be given IM. Reworded to the IV route as offered in the options | medium |
| multiple-patients-31 | q3 | explanation | St. Paul's rule thresholds were written as inclusive ranges (RR 10 to 20, pulse 50 to 100, temperature 35 to 37.5°C). Christenson 2000 uses strict limits: above 10 and below 20, above 50 and below 100, above 35.0 and below 37.5°C. Corrected | high |
| multiple-patients-27 | q1 | explanation | Level 3 list omitted severe peripheral pain of 8 to 10, the most common reason a laceration reaches level 3. Added | low |
| multiple-patients-21 | q3 | source | Triage officer question cited the CHEST critical care triage statement, which addresses ICU allocation. Frykberg 2002 is the source that the triage officer must have trauma expertise. Source changed and the unused CHEST citation removed from this SAMP | medium |
| multiple-patients-33 | q1 | source | Beta blocker blunting of tachycardia is not in CTAS 2016. Source changed to ATLS 11th edition, added to the SAMP sources | medium |
| multiple-patients-36 (review-extra) | q1 | correct | Key pointed to "Admit him to a negative pressure room", which the explanation itself rejects. Key changed to "Move him outside for decontamination" | high |
| multiple-patients-37 (review-extra) | q2 | explanation | Added sentence cited a serum lactate of 7.8 mmol/L that appears nowhere in the case, and a lactate does not confirm the need for cooling. Removed | high |

## Key changes

- multiple-patients-36 q1: before index 0 ("Admit him to a negative pressure room"), after index 3 ("Move him outside for decontamination"). The soaked clothing and the symptomatic nurse call for decontamination outside. A negative pressure room is for airborne infection.
- multiple-patients-20 q1 to q4, multiple-patients-22 q4, multiple-patients-29 q2 and multiple-patients-35 q3 and q4 are new questions, not key changes. Their keys: 20 q1 index 3, 20 q2 indexes 0, 3, 4, 7, 20 q3 index 1, 20 q4 index 2, 22 q4 index 1, 29 q2 index 1, 35 q3 indexes 1 and 2, 35 q4 index 3.
- multiple-patients-34 q2 keeps its key. The stem value was changed so that the key is true.

## Answers to the writer's doubts

1. CTAS 2025. Hall JN, McCarron J, Toarta C, McLeod SL, et al. CJEM 2025, volume 27, pages 774 to 777 (PMID 40938532) exists. The full text is paywalled and I could not read its tables. A 2025 quick look booklet lists "Temperature Exposure and Fever" and "Frailty" among the primary modifiers, which suggests the 2016 heat and fever modifiers may have been restructured. See Needs physician decision.
2. 16 q3 glucose modifier. Gliclazide establishes diabetes. The 2004 table (under 3 mmol/L with diaphoresis is level 2) applies. No change.
3. Auf der Heide. Confirmed in the full text (Table, assumption 7): "The least serious casualties often arrive first", with the advice to hold beds for later, more serious arrivals and to assign field responders to report casualty information. Also confirmed: most casualties do not arrive by ambulance and most go to the closest hospital. 19 q4, 21 q1, 21 q4 and 28 q3 are supported.
4. Okumura. The abstract supports an outside decontamination area, protective suits, ventilation planning and staff call-up. The claim that clothing removal comes first is standard teaching that Okumura does not state. The explanations do not attribute it to Okumura directly, so no change.
5. Christian 2006. PMC full text confirms SOFA over 11 as an exclusion with more than 90% mortality, the blue, red, yellow and green tool, and review at 48 and 120 hours. 24 q2 and q4 are supported.
6. Bolus. CPS 2023 gives 10 to 20 mL/kg (maximum 1000 mL) over 20 to 30 minutes for a child who is volume depleted but not in shock. The key holds, and the source is now Canadian.
7. Cooling target. References differ (38.3 to 39°C). The rebuilt 29 no longer tests the end point, so the disagreement no longer affects a key.
8. 30 q1. No weight-based dose is tested. Confirmed.
9. St. Paul's rule. Criteria confirmed against the PubMed abstract. The inclusive ranges were wrong and are fixed (31 q3).

## Overlap with the bank

Rewritten (see Fixes): multiple-patients-20, multiple-patients-22 q4, multiple-patients-29 stem and q2, multiple-patients-35 q3 and q4.

Flagged, not rewritten:

| SAMP id | Question | Overlaps | Confidence |
|---|---|---|---|
| multiple-patients-22 | q1 | ems-24 q4 (s35): contaminated walk-ins undressed and rinsed outside first. Also multiple-patients-06 q1 (s13) | medium |
| multiple-patients-22 | q2 | ems-24 q3 (s35): decontamination area outside and a locked, monitored entrance, citing the same Okumura paper | medium |
| multiple-patients-33 | q3 | ems-35 q3 (s35): retriage every field tag at the door after a tour bus rollover. The scenario (tour bus rollover, field tags) also matches ems-35 | medium |
| multiple-patients-28 | q2 | Same dynamic retriage point as multiple-patients-33 q3 and ems-35 q3 | low |
| multiple-patients-31 | q3 | St. Paul's rule is taught in s18 tox (line 769). This item applies it in a cluster, which adds a little | medium |
| multiple-patients-35 | q1, q2 | pediatric-fever measles SAMP in s14 q2: airborne isolation, public health, listing exposed waiting room patients | medium |
| multiple-patients-27 | q1 | multiple-patients-02 q2 (s13): laceration with controlled bleeding is CTAS 4, level 3 needs severe peripheral pain | low |
| multiple-patients-16 | q4 | multiple-patients-02 q3 (s13) covers the CTAS time targets and reassessment | low |
| multiple-patients-23 | q2, q4 | multiple-patients-03 q4 (s13) and s09 environmental: creating capacity and reverse triage | low |
| multiple-patients-36, 37 | all | Review extras are exact copies of multiple-patients-22 and the original multiple-patients-29 with a planted defect each. They add nothing new to the bank and should not be added | high |

No SAMP resembles the CFPC samples.

## Sources verified

- Bullard MJ, et al. CTAS Guidelines 2016. CJEM 2017. Full text read: https://ctas-phctas.ca/wp-content/uploads/2018/05/revisions_to_the_canadian_emergency_department_triage_and_acuity_scale_ctas_guidelines_2016.pdf
- Murray M, Bullard M, Grafstein E. CTAS implementation guidelines. CJEM 2004. Full text read: https://ctas-phctas.ca/wp-content/uploads/2018/05/2004_revisions-to-the-canadian-emergency-department-triage-and-acuity-scale-implementation-guidelines.pdf
- Warren DW, et al. PaedCTAS. CJEM 2008. Full text read, including Tables 5 and 6: https://doi.org/10.1017/S1481803500010149
- Hall JN, et al. CTAS Guidelines 2025. CJEM 2025. Citation only: https://pubmed.ncbi.nlm.nih.gov/40938532/
- Auf der Heide E. Ann Emerg Med 2006. Full text read: https://ospe.smhs.gwu.edu/sites/g/files/zaskib826/files/2021-08/Disasterassumptions.pdf
- Frykberg ER. J Trauma 2002. PubMed and secondary summaries: https://pubmed.ncbi.nlm.nih.gov/12169923/
- Okumura T, et al. Acad Emerg Med 1998. Abstract: https://pubmed.ncbi.nlm.nih.gov/9660290/
- Christian MD, et al. CMAJ 2006. Full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC1635763/
- Christenson J, et al. Acad Emerg Med 2000. Abstract with the six criteria: https://pubmed.ncbi.nlm.nih.gov/11015242/
- Kelen GD, et al. Lancet 2006: https://pubmed.ncbi.nlm.nih.gov/17141705/
- Hick JL, et al. Chest 2014: https://pubmed.ncbi.nlm.nih.gov/25144334/
- El-Shafy IA, et al. J Surg Educ 2018: https://pubmed.ncbi.nlm.nih.gov/28780315/
- Hicks C, Petrosoniak A. Emerg Med Clin North Am 2018: https://pubmed.ncbi.nlm.nih.gov/29132571/
- Gripp KE, et al. CPS. Current recommendations for management of paediatric diabetic ketoacidosis. Paediatr Child Health 2023: https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis
- McKenzie KC, Hahn CD, Friedman JN. CPS. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health 2021: https://pubmed.ncbi.nlm.nih.gov/33552322/ and https://cps.ca/en/documents/position/emergency-management-of-the-paediatric-patient-with-convulsive-status-epilepticus
- NACI and PHAC. Canadian Immunization Guide, measles vaccine, updated June 2025 (PEP, immunity criteria, communicability): https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html
- Epstein Y, Yanovich R. Heatstroke. NEJM 2019: https://doi.org/10.1056/NEJMra1810762
- SALT mass casualty triage. Disaster Med Public Health Prep 2008: https://doi.org/10.1097/DMP.0b013e31818d191e (algorithm checked, including two rescue breaths for a child and the four individual checks)

Not re-verified beyond the writer's check and my own knowledge: WAO 2020, ATLS 11th edition, CPS bronchiolitis 2014, Barkun 2019, CCS STEMI 2019, CSBPR 2022, Dezfulian 2021, Benson 1996, Romig 2002. The claims tied to them (epinephrine 0.01 mg/kg to 0.5 mg, glucagon with beta blockers, BP threshold of 185/110 mmHg for thrombolysis, JumpSTART infant and carried child rules) match these sources as I know them.

## Needs physician decision

1. CTAS 2025. The current CTAS is the 2025 revision (Hall et al, CJEM 2025). Every CTAS key in this batch follows 2016, 2008 and 2004. The 2025 booklet appears to restructure temperature and frailty modifiers. A physician with access should check 16 q1 (frailty), 29 q1 and q3 (heat), 34 q1 and q2 (fever age bands, 3 to 18 months), and 34 q2 (immunocompromised threshold). If 2025 differs, either rekey or add "Using CTAS 2016" to the affected stems.
2. multiple-patients-24 q2. A SOFA of 3 for an unventilated man with isolated respiratory failure is higher than SOFA allows. Respiratory scores of 3 and 4 need respiratory support, so his score before intubation is at most 2. The key does not change. Consider changing 3 to 2 in the update and option. Low confidence.
3. multiple-patients-20 q4 (new). SALT's two rescue breaths for an apneic child with a pulse is the published rule. A physician may prefer to confirm this is taught in Canadian disaster courses.
4. The overlap flags above, especially multiple-patients-22 q1 and q2, multiple-patients-33 q3 and multiple-patients-35 q1 and q2. Decide whether to rebuild or keep.
5. The review extras multiple-patients-36 and multiple-patients-37 should be discarded as duplicates.

## Summary

- 20 SAMPs and 2 review extras reviewed. 76 questions in the main file.
- 14 fixes: 1 key change (review extra), 1 wrong CTAS threshold (34 q2), 9 rebuilt questions and 1 rebuilt stem for overlap (20 q1 to q4, 22 q4, 29 stem and q2, 35 q3 and q4), 3 source replacements with Canadian or correct sources (25, 30, 21 q3, 33 q1), 3 explanation truth fixes (30 q1, 31 q3, 27 q1), 1 invented fact removed (37 q2).
- 10 overlap flags left for the physician.
- Gates after edits: `npx tsc --noEmit -p . | grep samps/s44` is clean. `SAMP_BATCH=s44 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 451 of 451. Single key positions 15, 17, 16, 12, 9 of 69. Key is the single longest option in 10 of 69.
