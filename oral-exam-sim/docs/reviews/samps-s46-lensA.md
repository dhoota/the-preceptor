# SAMP review: batch s46, pediatric fever

Lens: A (clinical truth).

Scope: `src/samps/s46/pediatric-fever.ts` (pediatric-fever-16 to 47) and `src/samps/s46/review-extra.ts` (pediatric-fever-48 and 49). Every SAMP stays `reviewed: false`.

Gates after edits: `npx tsc --noEmit -p . | grep samps/s46` shows nothing. `SAMP_BATCH=s46 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 687 of 687.

## Main findings

The largest problem is currency. Several Canadian sources the batch cites have been updated, and one was retired:

- The CPS UTI statement (Robinson 2014) is retired. The CPS web page now says "Statement Retired". The replacement is Barton, Viel-Theriault and Purewal, "Optimizing management of urinary tract infections in children" (posted 25 August 2026). The "bag specimens contaminated in up to 63%" claim (18 q3) and the "under 3 years with fever above 39.0°C" urine-testing rule (25 q2) came from the retired text and are gone.
- The CPS has a Kawasaki disease practice point from 2026 (Chen A, et al.). The batch cited only AHA 2017, which breaks the spec rule that a current Canadian source wins.
- The CPS has a group A streptococcal pharyngitis practice point from 2021 (Sauve L, et al.). The writer said no CPS pharyngitis source exists, so 41 and 42 relied on Nelson.
- The CPS neonatal HSV statement (updated 2025) covers the 21 day course. 16 q4 relied on Nelson.
- The CPS febrile infant statement was updated in April 2026 (page updated 27 May 2026). The content the batch uses is unchanged.
- The CPS meningitis statement is the 2020 update, reaffirmed in 2026, and covers children older than 2 months. It recommends dexamethasone only as something to *consider* when the Gram stain suggests H. influenzae or when pneumococcal meningitis is presumed. It is not routine empiric therapy. Both meningitis menus (23 q2, 45 q3) keyed dexamethasone as a required order.
- SSC pediatric 2026 (PMID 41869844) was checked through its abstract and the Guideline Central summary. It gives 10 to 20 mL/kg boluses, up to 40 to 60 mL/kg in the first hour where ICU care is available, with reassessment. It prefers crystalloids over albumin, and balanced crystalloids over saline. It makes no recommendation between epinephrine and norepinephrine. It recommends against hydrocortisone in shock that is stable on treatment. The sepsis keys in 21, 22, 23, 24 and 46 hold under both SSC 2026 and the CPS 2020 practice point (reaffirmed 2026). Only the explanation of the hydrocortisone distractor needed a fix.

The review-extra file contains two planted defects: a wrong key in 48 q1 and an invented lactate in 49 q2.

## Table of fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| sources block | | citations | UTI 2014 is retired and was replaced by the CPS 2026 statement. CPS HSV 2025, Kawasaki 2026, GAS 2021 and SSC pediatric 2026 were added. Meningitis title changed to "older than 2 months", updated 2020, reaffirmed 2026. Update or reaffirmation years were added to infant (2026), sepsis (2026), AOM (2024), bronchiolitis (2021) and CAP (2024), with cps.ca URLs | high |
| pediatric-fever-16 | q4 | explanation, source | The claim was Nelson-only. It now cites CPS neonatal HSV: a minimum of 21 days, CSF PCR repeated near the end, and oral acyclovir for suppression only | medium |
| pediatric-fever-18 | q2 | explanation | Now says it follows the CPS post-immunization section and that no invasive infection was found in those studies. The tension with the general CPS "all febrile infants need urine testing" line is listed under "Needs physician decision" below | low |
| pediatric-fever-18 | q3 | explanation | The "63%" figure came from the retired statement. It is replaced by the CPS 2026 wording: catheter preferred, bag inappropriate for culture | high |
| pediatric-fever-19 | q2 | prompt, explanation, source | The explanation cited a "6.1%" figure that is not in the current CPS bronchiolitis statement. That statement also advises *against* routine SBI screening in bronchiolitis, so it contradicted the key. The prompt now names the CPS febrile young infant statement, which says to follow the age-based workup despite respiratory symptoms or a known virus. Source changed to cps-infant | high |
| pediatric-fever-20 | q2 | explanation | "The CPS notes correction is particularly useful in infants of this age" misstated the CPS, which says this for infants aged 29 to 60 days *who meet other low-risk criteria*. This infant is high risk. Rewritten | medium |
| pediatric-fever-21 | q3 | source, explanation | The IO step was Nelson-only. The CPS sepsis practice point states it directly, so the source changed and Nelson was removed from the SAMP | medium |
| pediatric-fever-21 | q4 | option, explanation, source | The distractor "Once the urine culture is collected" was defensible. The CPS says to obtain blood *and urine* cultures in ill infants, and a catheter urine takes minutes. Replaced with "Once the chest radiograph is reviewed". Source changed to cps-infant | medium |
| pediatric-fever-22 | q3 | explanation | Headache is an early nonspecific symptom in Thompson 2006. The explanation implied it is late. Reworded | low |
| pediatric-fever-22 | q4 | explanation | "Hydrocortisone is reserved for suspected adrenal insufficiency" was incomplete. CPS also allows it for shock that does not respond to fluids and vasopressors, and SSC 2026 advises against it in stable shock | medium |
| pediatric-fever-23 | q2 | options, key, explanation | Dexamethasone 6 mg was keyed, but CPS only says "consider" it, and only on Gram stain or presumed pneumococcus. The question was rebuilt as a two-order antimicrobial menu. Dexamethasone options were removed and "penicillin G 4 million units IV" was added as a distractor | high |
| pediatric-fever-25 | q1 | explanation | "Keeps the higher pre-vaccine risk" overstated the risk because herd immunity is ignored. Softened | low |
| pediatric-fever-25 | q2 | explanation | The "under 3 years, above 39.0°C" urine rule came from the retired statement. Rewritten to CPS 2026: catheter specimen, urinalysis first, culture if pyuria or nitrite | high |
| pediatric-fever-26 | q4 | update | "Remains febrile and hypotensive" implied earlier hypotension, but her BP of 92/54 mmHg was normal for age. Now reads "is now hypotensive" | medium |
| pediatric-fever-27 | q1, q2, q4 | source, explanation | These cited AHA only. CPS 2026 Kawasaki now applies: incomplete KD is considered in infants under 12 months (not 6 months) with 7 days of fever, and live vaccines are deferred 11 months unless there is an outbreak | high |
| pediatric-fever-27 | q3 | option, explanation | The "older regimen" was written as 0.4 g/kg daily for **5** days. The historical regimen was 400 mg/kg daily for **4** days (Newburger, NEJM 1991) | high |
| pediatric-fever-29 | q1 | explanation | "Rheumatic fever causes ... a different rash" is weak because erythema marginatum is also evanescent and truncal. The distractor is now rejected on real differences | medium |
| pediatric-fever-30 | q3 | explanation | "Steroids are not started unless the airway is threatened" is a problem because her trachea is already narrowed with orthopnea. Reworded so that oncology decides unless respiratory distress develops | medium |
| pediatric-fever-31 | q3, q4 | explanation | "Haloperidol has anticholinergic effects" is false: butyrophenones are minimally anticholinergic. The real reasons are now given: QRS and QT prolongation, a lower seizure threshold, and impaired heat loss. q4 also notes variable physostigmine supply | high |
| pediatric-fever-36 | q1 | explanation | Now quotes the CPS line that air-fluid levels without bulging are not predictive of AOM | low |
| pediatric-fever-36 | q2 | explanation | Cefuroxime is "second-line after treatment failure or allergy" was wrong. CPS uses amoxicillin-clavulanate for treatment failure and cefuroxime for a non-life-threatening penicillin allergy | high |
| pediatric-fever-41 | q2, q3, q4 | source, explanation | These were Nelson-only. They now cite CPS GAS 2021: confirm by RADT or culture, ASOT cannot separate carriage from infection, amoxicillin 50 mg/kg once daily to 1 g/day for 10 days, azithromycin only for documented anaphylaxis, and no testing with rhinorrhea and cough | medium |
| pediatric-fever-42 | q4 | source, explanation | Nelson-only. Now cites CPS GAS 2021 | low |
| pediatric-fever-45 | q3 | options, key, explanation | Same dexamethasone problem as 23 q2. Rebuilt as a two-order antimicrobial menu | high |
| pediatric-fever-46 | q1 | explanation, source | Now cites SSC 2026: balanced crystalloid, repeated 10 to 20 mL/kg boluses up to 40 to 60 mL/kg, crystalloids over albumin | medium |
| pediatric-fever-46 | q2 | explanation | "She has not been fed" was invented. The stem never says so. Replaced with a true reason | medium |
| pediatric-fever-48 (extra) | q1 | key | **Planted defect.** The key was 0 ("Age older than 3 years"). Changed to 3 ("Fever with a central venous catheter"), which the explanation supports | high |
| pediatric-fever-48 (extra) | q4 | update | Same "remains hypotensive" wording as 26 | medium |
| pediatric-fever-49 (extra) | q2 | explanation | **Planted defect.** An invented "serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" was removed. No lactate is in the case, and lactate cannot confirm mononucleosis | high |

## Key changes

- pediatric-fever-23 q2: before, menu select 3, key ceftriaxone 2 g, dexamethasone 6 mg, vancomycin 600 mg. After, menu select 2, key ceftriaxone 2 g IV and vancomycin 600 mg IV (indexes 1 and 6). Reason: CPS 2020 (reaffirmed 2026) makes dexamethasone a "consider" option tied to Gram stain findings, so keying it was not single best, and leaving it as a distractor would be defensible.
- pediatric-fever-45 q3: before, menu select 3, key ceftriaxone 400 mg, dexamethasone 1.2 mg, vancomycin 120 mg. After, menu select 2, key ceftriaxone 400 mg IV and vancomycin 120 mg IV (indexes 2 and 4). Same reason.
- pediatric-fever-48 q1 (review-extra): before, index 0. After, index 3. Reason: the planted wrong key.
- No single-question key position changed in the main file, so the batch position balance is unchanged.

## Checks that passed

- The antipyretic doses were all recomputed and are correct: 17 q4, 18 q4, 25 q3, 28 q3, 35 q4, 36 q4, 42 q1 to q3 and 47 q3. They use acetaminophen 10 to 15 mg/kg every 4 to 6 hours, with a maximum of 75 mg/kg/day or 5 doses. They use ibuprofen 5 to 10 mg/kg every 6 to 8 hours, with a maximum of 40 mg/kg/day, and none under 6 months. Canadian formulations were checked: 80 mg/mL drops, 160 mg/5 mL and 100 mg/5 mL suspensions. The AAP 2011 full table could not be opened (HTTP 403). The acetaminophen maximum was confirmed from a secondary summary. The ibuprofen maximum is standard but was not seen in primary text (medium confidence).
- Phoenix scoring (24 q2) is correct. Lactate 5 to 10.9 mmol/L scores 1 cardiovascular point and platelets below 100 x 10^9/L score 1 coagulation point. MAP (96+2x54)/3 = 68 mmHg scores 0. SpO2 91% on room air scores 0 because no respiratory support is given. The total is 2 with a cardiovascular point, which is septic shock.
- The MAS 2016 criteria (29 q3) are correct: ferritin above 684, platelets 181 or less, AST above 48, triglycerides above 156 mg/dL (1.76 mmol/L), and fibrinogen 360 mg/dL or less (3.6 g/L).
- The CPS febrile infant items match the CPS text: gentamicin 4 mg/kg for 0 to 7 days is 12.8 mg, ceftriaxone 100 mg/kg is 460 mg, pleocytosis thresholds are 15 and 9, the traumatic tap ratio is 877:1, and the post-immunization risk is 0.6% versus 8.9%. Also correct are the viral co-infection risks of 0.8% and 0.4% and the rhinovirus exception. The 36 hour and 24 hour observation periods also match.
- CATMAT (28): results within 2 hours, two more smears at 12 or 24 hour intervals, and more than 90% of falciparum within 3 months. All verified.
- Thompson 2006: early sepsis signs appear at a median of 8 hours and classic features at 13 to 22 hours. Verified.
- IDSA 2009 candidemia risk factors: verified. Cefotaxime is still supplied in Canada. Cyproheptadine 4 mg is marketed in Canada.

## Sources verified

- CPS febrile infants 2024, updated April 2026 (full text read): https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days
- CPS bacterial meningitis, updated 2020, reaffirmed 2026 (full text read): https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- CPS sepsis practice point 2020, reaffirmed 2026 (full text read): https://cps.ca/en/documents/position/diagnosis-and-management-of-sepsis-in-the-paediatric-patient
- SSC pediatric 2026, Weiss SL et al. (abstract and guideline summary): https://pubmed.ncbi.nlm.nih.gov/41869844/ and https://www.guidelinecentral.com/guideline/5149074/
- CPS UTI 2026, Barton M et al. (full text read). The 2014 statement is retired: https://cps.ca/en/documents/position/management-urinary-tract-infections
- CPS neonatal HSV, updated 2025 (full text read): https://cps.ca/en/documents/position/prevention-management-neonatal-herpes-simplex-virus-infections
- CPS Kawasaki disease 2026, Chen A et al. (full text read): https://cps.ca/en/documents/position/kawasaki-disease
- CPS GAS pharyngitis 2021, Sauve L et al. (full text read): https://cps.ca/en/documents/position/group-a-streptococcal
- CPS AOM 2016, reaffirmed 2024 (full text searched): https://cps.ca/en/documents/position/acute-otitis-media
- CPS bronchiolitis, updated 2021 (full text searched): https://cps.ca/en/documents/position/bronchiolitis
- CPS uncomplicated pneumonia, updated 2024 (full text read): https://cps.ca/en/documents/position/pneumonia-management-children-youth
- CATMAT malaria diagnosis, updated 2023: https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria/chapter-6-malaria-diagnosis.html
- PubMed abstracts: Thompson 2006 (16458763), Phoenix 2024 (38245889, with the table checked on PMC10900966), AAP antipyretics 2011 (21357332), MAS 2016 (26865703), AAP febrile seizures 2008 and 2011 (18519501, 21285335), AHA 2017 (28356445), Hunter 2003 (12925718), Boyer 2005 (15784664), Dawson 2016 (26589572), Epstein 2019 (31216400), IDSA 2009 (19489710)
- Newburger 1991, the IVIG 2 g/kg versus 400 mg/kg x 4 day trial: https://pubmed.ncbi.nlm.nih.gov/1709446/
- Physostigmine supply in Canada (Special Access Program only), from an Ontario Poison Centre document title and a search summary. The PDF itself could not be parsed: https://www.ontariopoisoncentre.ca/siteassets/pdfs/english/patient-care-resources-documents/physostigminesalicylate_20260506.pdf
- Nelson 22nd ed and Goldfrank 11th ed were not page-checked. The Nelson-only items that remain (25, 29, 30, 37 to 40, 43 q3, 44, 47) state standard teaching and none looked wrong. No current CPS febrile seizure statement exists, so AAP stays.

## Needs physician decision

1. **18 q2.** The CPS 61 to 90 day section says testing "should include at least a urinalysis and urine culture". Its post-immunization section says urine testing is for fever lasting more than 24 hours. The key follows the post-immunization text, and no option offers urine testing now. Decide whether to keep the key or add a stem line such as "fever began within hours of immunization and she is well", which the stem already implies.
2. **19 q2.** The CPS bronchiolitis statement (2021) says routine SBI screening is not indicated in bronchiolitis. It does not address neonates. The CPS febrile infant statement (2026) says to do the full age-based workup despite a virus. The prompt now names the febrile infant statement. Confirm this is the intended teaching point.
3. **17 q3, 20 q3.** Oral cefixime for an infant aged 29 to 60 days with a UTI follows the CPS febrile infant table. The new CPS UTI statement (2026) discourages cefixime and prefers cephalexin where local resistance is low. No option offers cephalexin, so the keys hold, but the two CPS documents now differ.
4. **31 q4.** Physostigmine is keyed, but in Canada it is available only through the Special Access Program. Confirm it is acceptable as a single best answer, or add "after poison centre consultation" to the stem.
5. **48 and 49 (review-extra).** They duplicate 26 and 37 almost word for word and would fail the near-duplicate stem test if added to the bank. They should not be added.

## Summary

- SAMPs with a defect: 16, 18, 19, 20, 21, 22, 23, 25, 26, 27, 29, 30, 31, 36, 41, 42, 45, 46, 48, 49. That is 20 of 34.
- 30 fixes: 1 to the sources block and 29 to questions, counting the table rows. By category:
  - Source currency or replacement of Nelson-only claims (16, 21, 27, 41, 42, 46 and the sources block): 8.
  - False distractor reasons (22 q4, 29 q1, 30 q3, 31 q3/q4, 36 q2, 46 q2, 20 q2, 22 q3): 8.
  - Defensible distractors or keys rebuilt (21 q4, 23 q2, 45 q3): 3.
  - Claims from the retired UTI statement or another wrong source (18 q3, 19 q2, 25 q2): 3.
  - Factual errors in options (27 q3): 1.
  - Stem or update wording (26 q4, 48 q4): 2.
  - Planted defects in the extra file (48 q1 key, 49 q2 invented lactate): 2.
  - Other explanation fixes (18 q2, 25 q1, 36 q1): 3.
- Key changes: 3, in 23 q2, 45 q3 and 48 q1.
- The most serious errors were:
  - The wrong key in 48 q1.
  - Dexamethasone keyed as mandatory in two meningitis menus.
  - The retired CPS UTI statement being used as the source.
  - The IVIG "5 day" historical regimen.
  - The explanation for the key in 19 q2, which cited a CPS statement that argues against it.
