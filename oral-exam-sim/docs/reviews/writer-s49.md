# Writer report, batch s49 (Seizures)

## Count, mix and key positions

- 32 SAMPs, ids seizures-16 to seizures-47, in `src/samps/s49/seizures.ts` (exported as `SEIZURES_S49`, batch index `SAMPS_S49`).
- 105 questions: 98 single and 7 menu. Seven SAMPs (17, 18, 22, 29, 36, 39, 45) have one menu question each. Two menus (29 and 45) are keyed None.
- Single key positions, first to fifth: 23, 22, 19, 20, 14 (highest 23 percent).
- The key is the single longest option in 34 of 98 single questions (34.7 percent, just under the 35 percent limit).
- Explanations run 259 to about 700 characters, mean 406.
- `SAMP_BATCH=s49 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (651 tests). `tsc` shows no errors in `samps/s49`.

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1 Consider seizure in unwitnessed or atypical events | 9 |
| 2 Find and treat reversible causes | 25 |
| 3 Diagnose and treat status epilepticus | 8 |
| 4 Airway, special causes, stepwise anticonvulsants | 20 |
| 5 Risky activities, driving and reporting | 10 |
| 6 Investigate a first seizure | 17 |
| 7 Known epilepsy: adherence, levels, triggers, no extra tests | 11 |
| 8 Simple febrile seizure without tests | 5 |

## Scenarios

Children and older adults are both included, with rural (17, 38, 39) and community (22, 31, 44, 46) settings. The scenarios avoid the existing 15 in s16.

- Status epilepticus: nonconvulsive status after a stroke (16), refractory status in a rural hospital (17), febrile status (23), recurrent seizures in PRES (47).
- Toxins and drug causes: bupropion (18), tricyclic (19), cocaine with hyperthermia (32), organophosphate (39), carbon monoxide (46), cefepime in dialysis (42).
- Metabolic causes: low calcium from vitamin D deficiency in an infant (26), hyperosmolar hyperglycemia (41), thiazide hyponatremia (44).
- Pregnancy: postpartum eclampsia, then cerebral venous thrombosis (20), and lamotrigine levels falling in pregnancy (27).
- Febrile seizures: simple (22), in an unimmunized infant already on antibiotics (24).
- Known epilepsy: valproate lowered by ertapenem (28), missed doses after home rescue (29), lamotrigine lowered by a combined oral contraceptive (36).
- Diagnosis and first seizure: absence (21), first afebrile seizure in a child (25), psychogenic nonepileptic seizure (30), complete heart block (31), neurocysticercosis (33), Todd paresis versus stroke (34), airline pilot (35), juvenile myoclonic epilepsy (37), traumatic brain injury (38), late onset focal seizures (40), brain metastasis (43), vasovagal syncope with jerks (45).

## Sources used

Each was checked by web search or fetch during writing, except those marked as carried over from s16.

- TREKK. Bottom line recommendations. Status epilepticus, version 1.2. 2026. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/ (full PDF read)
- Gardner K, et al. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025. https://www.cfp.ca/content/71/9/563
- Le Saux N. CPS. Bacterial meningitis in children older than one month. 2014, reaffirmed 2026. https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- CMA Driver's Guide, 10th edition. 2023. https://driversguide.ca/sections/nervous-system and https://driversguide.ca/sections/cardiovascular-diseases
- Aeronautics Act, section 6.5. https://laws-lois.justice.gc.ca/eng/acts/A-2/section-6.5.html
- Field TS, et al. Canadian Stroke Best Practice Recommendations. Cerebral venous thrombosis. 2024. https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis (module PDF read)
- Heran M, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management. 2024. https://www.strokebestpractices.ca/recommendations/acute-stroke-management
- Diabetes Canada. Hyperglycemic emergencies in adults. 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- Ward LM, et al. Vitamin D-deficiency rickets among children in Canada. CMAJ. 2007. https://pubmed.ncbi.nlm.nih.gov/17600035/
- Sheldon RS, et al. CCS position paper on syncope. Can J Cardiol. 2011.
- ACEP clinical policy on seizures. Ann Emerg Med. 2024. https://www.annemergmed.com/article/S0196-0644(24)00108-2/fulltext
- Trinka E, et al. ILAE definition of status epilepticus. Epilepsia. 2015. https://pubmed.ncbi.nlm.nih.gov/26336950/
- LaFrance WC Jr, et al. ILAE minimum requirements for PNES diagnosis. Epilepsia. 2013. https://pubmed.ncbi.nlm.nih.gov/24111933/
- Hirtz D, et al. First nonfebrile seizure in children. Neurology. 2000. https://pubmed.ncbi.nlm.nih.gov/10980722/
- White AC Jr, et al. IDSA and ASTMH neurocysticercosis guideline. Clin Infect Dis. 2018. https://academic.oup.com/cid/article/66/8/e49/4885412
- AHA 2025 Adult advanced life support. Circulation. 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- NICE NG217. Epilepsies in children, young people and adults. 2022. https://www.nice.org.uk/guidance/ng217
- Pack AM, et al. AAN, AES and SMFM guideline on antiseizure medication in pregnancy. Neurology. 2024.
- Pennell PB, et al. Lamotrigine in pregnancy. Neurology. 2008. https://pubmed.ncbi.nlm.nih.gov/18046009/
- Sabers A, et al. Oral contraceptives reduce lamotrigine plasma levels. Neurology. 2003.
- Mancl EE, Gidal BE. Carbapenems and valproic acid. Ann Pharmacother. 2009. https://doi.org/10.1345/aph.1m296
- Payne LE, et al. Cefepime-induced neurotoxicity. Crit Care. 2017. https://pubmed.ncbi.nlm.nih.gov/29137682/
- Fugate JE, Rabinstein AA. PRES. Lancet Neurol. 2015.
- Eddleston M, et al. Organophosphorus pesticide poisoning. Lancet. 2008. https://pubmed.ncbi.nlm.nih.gov/17706760/
- Rose JJ, et al. Carbon monoxide poisoning. Am J Respir Crit Care Med. 2017. https://pubmed.ncbi.nlm.nih.gov/27753502/
- Chang SM, et al. ASCO and SNO endorsement on anticonvulsants and steroids in brain metastases. J Clin Oncol. 2019.
- Carney N, et al. Brain Trauma Foundation guidelines, 4th edition. Neurosurgery. 2017. https://braintrauma.org/coma/guidelines/severe-tbi
- Fisher RS, et al. ILAE practical clinical definition of epilepsy. Epilepsia. 2014.
- Carried over from s16, not re-checked: Brophy 2012 (Neurocritical Care Society), Kapur 2019 (ESETT), AAP 2008 and 2011, Krumholz 2015, Magee 2022 (SOGC), Spasovski 2014, Goldfrank 11th edition 2019, Rosen 10th edition 2023.

## For the reviewers

1. **CMA Driver's Guide year.** The website shows copyright 2025. The 10th edition was announced in December 2023, and I cited 2023 as s16 does.
2. **Claims cited to Rosen that I could not check word for word.** These are:
   - IV calcium for low-calcium seizures (26 q1)
   - hyperventilation to bring on absence seizures (21 q1)
   - supportive observation for a likely nonepileptic event (30 q2)
   - no neuroimaging for a clear breakthrough cause (28 q3)
   - triggers in juvenile myoclonic epilepsy (37 q4)
   - evacuation of an epidural hematoma (38 q3)
   - late onset focal seizures (40)
   - left uterine displacement (27 q4)
3. **seizures-38 q2.** The valproate wording now reads "a trend toward higher mortality", as requested.
4. **seizures-41 q1.** The claim that correcting hyperosmolar hyperglycemia is the key treatment for its focal seizures is not in the Diabetes Canada chapter. I kept the wording general and made no claim about phenytoin.
5. **seizures-17 q1.** "Established status" is not defined in Brophy 2012, which is the cited source.
6. **seizures-30 q2.** Choosing observation over a second benzodiazepine depends on the stem's strong nonepileptic features and normal oxygenation. Please check that the key is not open to argument.
7. **seizures-18 q3.** The statement that toxicity from extended release bupropion can be delayed up to about a day is taken from Goldfrank from memory. It was not re-read.
8. **seizures-35 q2.** The Aeronautics Act duty is federal, so the key holds in every province. Provincial driver reporting was not tested anywhere in the batch.
9. **seizures-44 q2.** The 5 mmol/L first hour target comes from the European hyponatremia guideline, used because there is no Canadian equivalent.
10. **Blocked draft.** One earlier draft of the last eight SAMPs was stopped by a safety filter. They were then written as new SAMPs, with no content taken from the blocked draft.
