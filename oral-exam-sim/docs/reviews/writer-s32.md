# Writer report: batch s32, Decreased level of consciousness

File: `src/samps/s32/loc.ts`, exported as `LOC_S32` and re-exported from `src/samps/s32/index.ts` as `SAMPS_S32`.

## Count, mix and key positions

- 32 SAMPs, ids loc-16 to loc-47. All `reviewed: false`.
- 111 questions: 102 `single` and 9 `menu`. No `short` questions.
- 15 SAMPs have 4 questions (16 to 20, 22 to 27, 33, 37, 40, 41) and 17 have 3. I did not add questions that would repeat teaching points of the s07 set.
- 9 SAMPs have one menu question (18, 25, 26, 29, 36, 39, 42, 45, 46), a little under one in three.
- Single key positions, first to fifth: 23, 20, 22, 23, 14. Highest share 22.5 percent.
- The key is the single longest option in 33 of 102 single questions (32.4 percent).
- Tests: `SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed on the gates of commit 79e31bf. `tsc` shows no errors in `samps/s32`.

## Settings and patients

Infants of 4 and 9 months, children of 14 and 20 months, 3, 7 and 9 years, a 15-year-old, adults from 19 to 69, and older adults from 71 to 88. Tertiary default, and two rural hospitals (16, 42). Postpartum (31). Settings include home, a retirement residence, a university residence, a shelter, a nightclub, a house party, a barn, a burning house and police cells.

## Key feature coverage (loc)

| Key feature | Questions |
|---|---|
| 1. Broad differential, exclude bleeding, CNS infection, toxins | 33 |
| 2. Correct reversible causes (glucose, oxygen, opioid, BP) | 41 |
| 3. Collateral and prehospital history, change from baseline | 13 |
| 4. Do not blame alcohol or a minor cause too early | 7 |
| 5. Document and trend with descriptive terms and GCS | 17 |

All questions are tagged to loc. No `alsoTopics` were set.

## Scenarios (none repeat the s07 set)

16 Wernicke encephalopathy in a rural ED. 17 subdural hematoma on warfarin 2 days after a fall. 18 abusive head trauma in a 4-month-old. 19 salicylate poisoning with mixed acid-base disorder. 20 hypercapnic encephalopathy from high-flow oxygen in COPD. 21 insulin hypoglycemia without IV access, then a persisting focal deficit. 22 toddler gliclazide ingestion. 23 septic shock from pneumonia. 24 classic heat stroke in an older woman. 25 methanol from washer fluid. 26 tricyclic overdose. 27 chronic lithium toxicity from ramipril and naproxen. 28 cerebral edema in pediatric DKA. 29 adrenal crisis. 30 aneurysmal subarachnoid hemorrhage with hydrocephalus. 31 postpartum cerebral venous thrombosis. 32 meningococcal sepsis in a 14-month-old. 33 morphine metabolite accumulation with acute kidney injury. 34 valproate hyperammonemia at a therapeutic level. 35 child head injury with CATCH. 36 hypercalcemia of malignancy. 37 severe traumatic brain injury with epidural hematoma. 38 cyanide and carbon monoxide from smoke. 39 adolescent binge drinking with hypoglycemia and a low ethanol. 40 hypernatremia in advanced dementia. 41 wake-up stroke and time last known well. 42 organophosphate poisoning in a rural ED. 43 intussusception presenting with lethargy. 44 gamma-hydroxybutyrate. 45 epidural hematoma missed in police custody. 46 chronic benzodiazepine user and flumazenil. 47 ketotic hypoglycemia with a critical sample.

## Sources, with verification

Every journal citation was checked this session against the Crossref record for its DOI (title, first authors, journal and year). The CPS meningitis statement was read on cps.ca (updated 2020, reaffirmed 2026, doses confirmed). Goldfrank 11th edition (2019) and the Heart and Stroke CSBPR citation match the existing s07 file.

- `efns-wernicke`: Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. European Journal of Neurology 2010. https://doi.org/10.1111/j.1468-1331.2010.03153.x
- `gcs-40`: Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014. https://doi.org/10.1016/S1474-4422(14)70120-6
- `gcs-pupils`: Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1. The GCS-Pupils score. Journal of Neurosurgery 2018. https://doi.org/10.3171/2017.12.JNS172780
- `ncs-reversal`: Frontera JA, Lewin JJ, Rabinstein AA, et al. Guideline for reversal of antithrombotics in intracranial hemorrhage. A statement for healthcare professionals from the Neurocritical Care Society and Society of Critical Care Medicine. Neurocritical Care 2016. https://doi.org/10.1007/s12028-015-0222-x
- `canadian-ct-head`: Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet 2001. https://doi.org/10.1016/S0140-6736(00)04561-X
- `aap-aht`: Christian CW, Block R, Committee on Child Abuse and Neglect, American Academy of Pediatrics. Abusive head trauma in infants and children. Pediatrics 2009. https://doi.org/10.1542/peds.2009-0408
- `extrip-salicylate`: Juurlink DN, Gosselin S, Kielstein JT, et al. Extracorporeal treatment for salicylate poisoning. Systematic review and recommendations from the EXTRIP workgroup. Annals of Emergency Medicine 2015. https://doi.org/10.1016/j.annemergmed.2015.03.031
- `salicylate-nejm`: Palmer BF, Clegg DJ. Salicylate toxicity. New England Journal of Medicine 2020. https://doi.org/10.1056/NEJMra2010852
- `copd-oxygen`: Austin MA, Wills KE, Blizzard L, et al. Effect of high flow oxygen on mortality in chronic obstructive pulmonary disease patients in prehospital setting. Randomised controlled trial. BMJ 2010. https://doi.org/10.1136/bmj.c5462
- `ers-ats-niv`: Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. European Respiratory Journal 2017. https://doi.org/10.1183/13993003.02426-2016
- `dc-hypo-2023`: Lega IC, Yale JF, Chadha A, et al. Hypoglycemia in adults. Diabetes Canada Clinical Practice Guidelines. Canadian Journal of Diabetes 2023. https://doi.org/10.1016/j.jcjd.2023.08.003
- `goldfrank`: Nelson LS, Howland MA, Lewin NA, et al., editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019.
- `ssc-2021`: Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine 2021. https://doi.org/10.1097/CCM.0000000000005337
- `wms-heat`: Lipman GS, Gaudio FG, Eifling KP, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2019 update. Wilderness and Environmental Medicine 2019. https://doi.org/10.1016/j.wem.2018.10.004
- `extrip-methanol`: Roberts DM, Yates C, Megarbane B, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning. A systematic review and consensus statement. Critical Care Medicine 2015. https://doi.org/10.1097/CCM.0000000000000708
- `gemnet-tca`: Body R, Bartram T, Azam F, Mackway-Jones K. Guidelines in Emergency Medicine Network (GEMNet). Guideline for the management of tricyclic antidepressant overdose. Emergency Medicine Journal 2011. https://doi.org/10.1136/emj.2010.091553
- `extrip-lithium`: Decker BS, Goldfarb DS, Dargan PI, et al. Extracorporeal treatment for lithium poisoning. Systematic review and recommendations from the EXTRIP workgroup. Clinical Journal of the American Society of Nephrology 2015. https://doi.org/10.2215/CJN.10021014
- `ispad-dka`: Glaser N, Fritsch M, Priyambada L, et al. ISPAD clinical practice consensus guidelines 2022. Diabetic ketoacidosis and hyperglycemic hyperosmolar state. Pediatric Diabetes 2022. https://doi.org/10.1111/pedi.13406
- `endo-adrenal`: Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2016. https://doi.org/10.1210/jc.2015-1710
- `aha-sah-2023`: Hoh BL, Ko NU, Amin-Hanjani S, et al. 2023 Guideline for the management of patients with aneurysmal subarachnoid hemorrhage. A guideline from the American Heart Association and American Stroke Association. Stroke 2023. https://doi.org/10.1161/STR.0000000000000436
- `ottawa-sah`: Perry JJ, Stiell IG, Sivilotti ML, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA 2013. https://doi.org/10.1001/jama.2013.278018
- `aha-cvt-2024`: Saposnik G, Bushnell C, Coutinho JM, et al. Diagnosis and management of cerebral venous thrombosis. A scientific statement from the American Heart Association. Stroke 2024. https://doi.org/10.1161/STR.0000000000000456
- `cps-meningitis`: Le Saux N, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Canadian Paediatric Society position statement. 2014, updated 2020. https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- `opioid-nejm`: Boyer EW. Management of opioid analgesic overdose. New England Journal of Medicine 2012. https://doi.org/10.1056/NEJMra1202561
- `catch`: Osmond MH, Klassen TP, Wells GA, et al. CATCH. A clinical decision rule for the use of computed tomography in children with minor head injury. CMAJ 2010. https://doi.org/10.1503/cmaj.091421
- `endo-hcm`: El-Hajj Fuleihan G, Clines GA, Hu MI, et al. Treatment of hypercalcemia of malignancy in adults. An Endocrine Society clinical practice guideline. Journal of Clinical Endocrinology and Metabolism 2023. https://doi.org/10.1210/clinem/dgac621
- `btf-tbi`: Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury. Fourth edition. Brain Trauma Foundation. Neurosurgery 2017. https://doi.org/10.1227/NEU.0000000000001432
- `cyanide-smoke`: Anseeuw K, Delvau N, Burillo-Putze G, et al. Cyanide poisoning by fire smoke inhalation. A European expert consensus. European Journal of Emergency Medicine 2013. https://doi.org/10.1097/MEJ.0b013e328357170b
- `hypernatremia-nejm`: Adrogue HJ, Madias NE. Hypernatremia. New England Journal of Medicine 2000. https://doi.org/10.1056/NEJM200005183422006
- `csbpr-acute`: Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022. https://www.strokebestpractices.ca/recommendations/acute-stroke-management
- `op-lancet`: Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008. https://doi.org/10.1016/S0140-6736(07)61202-1
- `intussusception`: Applegate KE. Intussusception in children. Evidence-based diagnosis and treatment. Pediatric Radiology 2009. https://doi.org/10.1007/s00247-009-1178-9
- `flumazenil-sr`: Penninga EI, Graudal N, Ladekarl MB, Jurgens G. Adverse events associated with flumazenil treatment for the management of suspected benzodiazepine intoxication. A systematic review with meta-analyses of randomised trials. Basic and Clinical Pharmacology and Toxicology 2016. https://doi.org/10.1111/bcpt.12434
- `pes-hypoglycemia`: Thornton PS, Stanley CA, De Leon DD, et al. Recommendations from the Pediatric Endocrine Society for evaluation and management of persistent hypoglycemia in neonates, infants, and children. Journal of Pediatrics 2015. https://doi.org/10.1016/j.jpeds.2015.03.057
- `ghb-review`: Busardo FP, Jones AW. GHB pharmacology and toxicology. Acute intoxication, concentrations in blood and urine in forensic cases and treatment of the withdrawal syndrome. Current Neuropharmacology 2015. https://doi.org/10.2174/1570159X13666141210215423
- `sogc-hdp`: Magee LA, Smith GN, Bloch C, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. Journal of Obstetrics and Gynaecology Canada 2022. https://doi.org/10.1016/j.jogc.2022.03.002
- `co-practice`: Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. American Journal of Respiratory and Critical Care Medicine 2012. https://doi.org/10.1164/rccm.201207-1284CI
- `aap-ivf`: Feld LG, Neuspiel DR, Foster BA, et al. Clinical practice guideline. Maintenance intravenous fluids in children. American Academy of Pediatrics. Pediatrics 2018. https://doi.org/10.1542/peds.2018-3083

## For the reviewers

- Diabetes Canada 2023 (Lega et al.) replaces the 2018 hypoglycemia chapter used in s07. I did not read its full text. The glucagon 1 mg SC or IM and 3 mg intranasal doses in loc-21 are from the 2018 chapter and are expected to be unchanged.
- loc-24 q4 says cooling stops at about 39°C. The WMS 2019 figure is 38.6 to 39°C. Please check the exact wording.
- loc-19 q2 uses the EXTRIP salicylate thresholds of 6.5 and 7.2 mmol/L, and loc-25 q4 uses the EXTRIP methanol criteria (visual signs, pH 7.15 or lower, anion gap above 24 mmol/L). Both are from memory of the papers, which were verified by Crossref only.
- loc-22 uses gliclazide MR in a toddler. The octreotide dose (1 mcg/kg) and the admission advice come from Goldfrank, not a Canadian guideline. No Canadian guideline exists for this.
- loc-34 levocarnitine 100 mg/kg IV load is from Goldfrank. Please confirm the dose.
- loc-37 mannitol 0.25 to 1 g/kg is carried in the BTF 4th edition text from the 3rd edition.
- loc-43 fluid bolus before enema reduction is standard practice. The Applegate review may not state it explicitly.
- loc-31 q3: AHA 2024 favours low molecular weight heparin but allows unfractionated heparin. The key names enoxaparin 74 mg SC twice daily (1 mg/kg).
- loc-18 q3 cites the AAP 2009 statement for the workup. The duty to report in Canada is provincial law. The explanation says only that reasonable suspicion is enough, which holds in every province.
- loc-41 q1 keys 2300 as time last known well because at 0200 he was only seen asleep. A reviewer may want this wording kept strict.
- Nine GCS scoring questions appear across the batch (16, 17, 21, 23, 32, 35, 37, 44, 46). Each uses a different component pattern, but reviewers may want fewer.
