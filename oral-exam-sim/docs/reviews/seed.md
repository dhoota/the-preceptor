# Seed cases clinical accuracy review

Adversarial review of the five seed cases. Every dose, threshold, choice label, legal statement and citation was checked against current Canadian guidance first, then major international guidance. Weight based doses were recomputed. All cases keep `reviewed: false` until physician sign off. The order in `src/cases/seed/index.ts` is unchanged.

## chest-pain-rural. Chest pain at a rural site

Verdict: Corrected

Changes
- Heart rate and blood pressure targets. Before: heart rate under 60 and systolic 100 to 120, stated as fact. The 2022 ACC/AHA guideline targets a heart rate of 60 to 80 and a systolic under 120. The 2024 ESC guideline targets a heart rate of 60 or less and a systolic under 120. After: "heart rate about 60 or lower and systolic under 120, about 100 to 120, or the lowest pressure that keeps him perfused". The teaching now names both guidelines. Choice labels and feedback were brought in line.
- Labetalol. Before: "an alternative" with no repeat dose. The 2024 ESC guideline names labetalol a first choice. After: "Labetalol 20 mg IV then 20 to 80 mg every 10 minutes is an equal first choice."
- Vasodilator feedback. Before: add a vasodilator "only once the heart rate is under 60". After: "only once the heart rate is controlled", to match the new targets.
- Bedside screen feedback. Before: "a pulse deficit over 20 mmHg", which mixes two signs. After: "an arm pressure difference over 20 mmHg, a pulse deficit".
- Stem. Before: the PCI centre was "about 3.5 hours away by land or air". Air and land times are not the same. After: "more than 3 hours away once transport is counted".
- Sources. The ESC citation had no year and pointed at the old 2014 aortic guideline. Now the 2024 ESC Guidelines for peripheral arterial and aortic diseases. The CCS citation was a vague "Guidance on STEMI". Now the real 2019 CCS and CAIC STEMI focused update. Added verified URLs for all four sources.

Checked and correct
- Esmolol 500 mcg/kg then 50 to 300 mcg/kg/min. Fentanyl 25 to 50 mcg. Aspirin 160 mg chewed.
- Suspected dissection as an absolute contraindication to fibrinolysis.
- Small volume controlled pericardial drainage to a systolic of about 90 only as a last resort in tamponade from dissection.
- Mediastinum over 8 cm on an AP film, root over 4 cm on POCUS, right coronary involvement causing inferior ST elevation.

Sources verified
- 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. https://pubmed.ncbi.nlm.nih.gov/36322642/
- 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. https://academic.oup.com/eurheartj/article/45/36/3538/7738955
- 2019 CCS and CAIC STEMI focused update, Can J Cardiol 2019. https://onlinecjc.ca/article/S0828-282X(18)31321-7/fulltext
- CritiCall Ontario. https://www.criticall.org

Residual uncertainties
- Rubric items cp-c1 and cp-s3 (disagreeing with a consultant, documentation) cite the CCS STEMI guideline. A CMPA source would fit better.
- The 2025 ACC/AHA ACS guideline now exists. The CCS 2019 update is still the current Canadian STEMI document as far as could be confirmed.

## febrile-infant. A sleepy newborn

Verdict: Corrected. Several dosing and source errors.

Changes
- Ampicillin. Before: 75 to 100 mg/kg, about 270 to 360 mg. The CPS statement and the TREKK neonatal order set both use 75 mg/kg every 6 hours at 8 to 28 days. After: 75 mg/kg IV every 6 hours, about 270 mg.
- Cefotaxime and alternatives. Before: 50 mg/kg, with "ceftazidime or gentamicin" if cefotaxime is unavailable. Gentamicin does not reach the CSF well and this baby has meningitis. After: cefotaxime 50 to 75 mg/kg (CPS uses 50, the TREKK order set uses 75), about 180 to 270 mg. If there is none, ceftazidime or cefepime 50 mg/kg. The model answer and teaching say gentamicin alone does not treat meningitis well.
- Acyclovir. Dose was right (20 mg/kg, about 72 mg). Added the every 8 hour interval.
- Ceftriaxone teaching. Now says it must not be given with IV calcium, and that shocked neonates often need calcium.
- Fluids. Model answer now gives 10 mL/kg aliquots, about 36 mL, repeated to 20 mL/kg, up to 40 to 60 mL/kg in the first hour. This matches the TREKK order set and the 2026 Surviving Sepsis Campaign pediatric guideline. Balanced crystalloid is listed first.
- Internal consistency. Before: the refractory shock node said she "has now had 40 mL/kg". On the wide open path she had about 70 mL/kg. After: "at least 40 mL/kg".
- Glucose. Added the D10W follow on infusion at about 4 mL/kg/h, about 14 mL/h, from the TREKK order set.
- Vasoactives. Added norepinephrine as an accepted alternative and hydrocortisone for possible adrenal crisis.
- Seizures. Phenobarbital 20 mg/kg (72 mg) stays second line after a benzodiazepine, which matches the TREKK neonatal order set. The teaching now says the 2023 ILAE neonatal guideline makes phenobarbital the preferred antiseizure drug in neonates. Infusion time changed to 15 to 20 minutes.
- Induction. Before: ketamine 1 to 2 mg/kg in a shocked neonate. After: about 1 mg/kg in shock, with rocuronium 1 mg/kg and atropine 0.02 mg/kg ready.
- Tube. 3.0 cuffed or 3.5 uncuffed at about 9.5 to 10 cm (weight plus 6 is 9.6 cm) is correct. The later node now says "3.5 uncuffed tube" to match.
- Sources. The Surviving Sepsis Campaign pediatric guideline was updated in 2026 (Weiss SL, et al. Pediatr Crit Care Med 2026). The 2020 citation was replaced. The CPS hypoglycemia statement covers newborns in the first days of life, not a 3 week old, and was removed. TREKK sepsis applies to infants over 28 days, and TREKK status epilepticus excludes neonates. Both were replaced with the TREKK critically ill neonate algorithm and order set (version 2.1, 2025), which covers 0 to 28 days. Added the ILAE neonatal seizure guideline. The PALS citation now points to the Heart and Stroke 2025 Canadian edition of the CPR and ECC guidelines. The CPS citation now has its real title and URL.

Sources verified
- Surviving Sepsis Campaign pediatric guideline 2026. https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-the-management-of-sepsis-and-septic-shock-in
- CPS. Management of well appearing febrile young infants aged 90 days or younger. Ampicillin 75 mg/kg every 6 hours, cefotaxime 50 mg/kg, acyclovir 20 mg/kg every 8 hours, and "consider deferring LP until the infant is hemodynamically stable" confirmed from the text. https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days
- TREKK critically ill neonate order set, version 2.1, May 2025. Saline 10 mL/kg over 10 minutes, D10W 2 mL/kg then 4 mL/kg/h, ampicillin 75 mg/kg, cefotaxime 75 mg/kg, acyclovir 20 mg/kg, lorazepam 0.1 mg/kg, hydrocortisone 25 mg confirmed from the PDF. https://trekk.ca/resources/order-set-critically-ill-neonate
- ILAE Task Force on Neonatal Seizures, Epilepsia 2023. https://onlinelibrary.wiley.com/doi/10.1111/epi.17745
- Heart and Stroke 2025 Guidelines for CPR and ECC, Canadian edition, released October 2025. https://cpr.heartandstroke.ca/s/article/2025-Guidelines?language=en_US

Residual uncertainties
- The CPS statement is about well appearing infants. It is still the best Canadian source for the antibiotic doses and LP timing, but it does not cover a shocked infant or the late onset GBS teaching in fi-c3. A GBS specific source may fit fi-c3 better.
- Cefotaxime supply in Canada could not be confirmed. The CPS and TREKK documents still list it. The alternatives given (ceftazidime or cefepime) follow US practice during the shortage. Please confirm local practice.
- Cefotaxime dose differs between CPS (50 mg/kg) and TREKK (75 mg/kg). The case accepts both.
- It is unclear whether the 2026 Surviving Sepsis pediatric guideline includes term neonates. The 2020 edition did.
- Benzodiazepine first then phenobarbital is what TREKK orders. ILAE would give phenobarbital first. Both are accepted.

## overdose-mixed. A drowsy woman found at home

Verdict: Corrected. Clinical content was mostly sound. Sources were weak.

Changes
- Bicarbonate endpoint. Before: repeat "until QRS is under 100 ms or pH is 7.50 to 7.55", which reads as if reaching the pH target alone is an endpoint. After: repeat until the QRS is under 100 ms, and do not push the pH above 7.55. Rubric and feedback changed to match.
- Acetylcysteine timing. Before: she "may already be more than 8 hours out". She was last seen well about 6 hours before arrival, so that was not possible early in the case. After: "close to or past 8 hours from ingestion".
- Acetylcysteine regimen. Before: "or the three bag regimen". Provincial poison centres use different regimens. The Atlantic Canada centre uses 150 mg/kg over 1 hour then 15 mg/kg/h. After: "or the regimen your poison centre uses".
- Stopping acetylcysteine. Before: liver tests and INR only. After: repeat the acetaminophen level as well, near the end of the infusion.
- Form 1. Added that 72 hour detention is in a Schedule 1 facility, and that the form authorizes transfer to one if this hospital is not.
- Sources. "Ontario Poison Centre. Consultation guidance for tricyclic antidepressant poisoning" is not a document that could be found. Now cited plainly as the Ontario Poison Centre specialist consultation service with its URL. The Canadian Antidote Guide citation now names its host and has a URL. The "CPSI Suicide risk assessment guide" is replaced by the verified 2021 MHCC and CPSI Suicide Risk Assessment Toolkit. The Mental Health Act citation now has its URL.

Checked and correct
- Amitriptyline 38 x 50 mg = 1,900 mg, about 32 mg/kg for 60 kg. Acetaminophen about 25 g, about 415 mg/kg.
- Bicarbonate 1 to 2 mEq/kg (60 to 120 mEq). Infusion 150 mEq in 1 L D5W. Lorazepam 2 to 4 mg, midazolam 5 mg. Ketamine 0.5 to 1 mg/kg, rocuronium 1.2 to 1.5 mg/kg. Norepinephrine 0.1 mcg/kg/min.
- Anion gap 138 minus 104 minus 21 equals 13. Osmolal gap is near zero with ethanol 18 mmol/L.
- Unknown time with a detectable level means treat now. The nomogram does not apply.
- Form 1: exam within the past 7 days, detention up to 72 hours for assessment. Form 42 gives reasons and the right to counsel.

Sources verified
- Ontario Poison Centre. https://www.ontariopoisoncentre.ca
- Canadian Antidote Guide, acetylcysteine monograph. https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/acetylcysteine (listed in search results. The site timed out when fetched)
- Mental Health Act, R.S.O. 1990, c. M.7. https://www.ontario.ca/laws/statute/90m07
- MHCC and CPSI Suicide Risk Assessment Toolkit, 2021. https://www.mentalhealthcommission.ca/wp-content/uploads/drupal/2021-01/mhcc_cpsi_suicide_risk_assessment_toolkit_eng.pdf

Residual uncertainties
- Confirm the acetylcysteine regimen the Ontario Poison Centre currently recommends. With about 415 mg/kg ingested, some centres would advise a higher dose for a massive ingestion.
- Most airway and ventilation rubric items cite the poison centre. A toxicology text or CAEP airway source would fit better.
- The bicarbonate infusion (150 to 250 mL/h) is common practice but its benefit after the QRS has narrowed is debated.

## trauma-motorcycle. Motorcycle collision at a regional hospital

Verdict: Corrected

Changes
- Permissive hypotension. Before: "systolic about 80 to 90, until head injury is suspected". He arrives with GCS 13, a scalp hematoma, a cracked helmet and amnesia, so head injury is already suspected. After: 80 to 90 until bleeding is controlled, his head injury looks mild now, raise the target if his GCS falls. Rubric tr-h6 now says "while there is no sign of severe brain injury". The teaching cites the European guideline MAP of at least 80 mmHg for severe brain injury.
- Head injury target. Before: systolic "at least 100 to 110". The Brain Trauma Foundation 4th edition uses at least 110 mmHg for ages 15 to 49 and over 70, and at least 100 mmHg for ages 50 to 69. He is 27. After: at least 110 mmHg, with the age bands in the teaching.
- Thoracotomy. Before: not mentioned. The chest tube drained 1,100 mL then 180 mL in 30 minutes, which is over 200 mL/h. After: the decision question now says this output points to thoracotomy, and tr-d2 teaching gives the 1,500 mL and 200 mL/h thresholds.
- Fibrinogen. Before: "under 1.5 g/L" and concentrate 4 g. The European guideline uses 1.5 g/L or lower and 3 to 4 g. After: "at or under 1.5 g/L", 3 to 4 g, or cryoprecipitate 10 units per local protocol.
- Sources. ATLS now cites the 11th edition, 2025, with the ACS URL. The European guideline now cites the sixth edition (Rossaint, Critical Care 2023) with URL. CRASH-2, PROPPR and the Brain Trauma Foundation 4th edition now have real titles or years.

Checked and correct
- Tranexamic acid 1 g over 10 minutes then 1 g over 8 hours, within 3 hours.
- Binder over the greater trochanters. O positive red cells acceptable for an adult male.
- Calcium chloride 1 g or gluconate 3 g, ionized calcium above 1.1 mmol/L.
- Ketamine 0.5 to 1 mg/kg and rocuronium 1.2 to 1.6 mg/kg for 85 kg in shock. 3 percent saline 250 mL. Avoid mannitol while hypotensive.

Sources verified
- ATLS 11th edition. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- European guideline, sixth edition, Crit Care 2023. https://link.springer.com/article/10.1186/s13054-023-04327-7
- CRASH-2, Lancet 2010. PROPPR, JAMA 2015. Brain Trauma Foundation 4th edition, 2016. Real and correctly dated. No URL added.
- CritiCall Ontario. https://www.criticall.org

Residual uncertainties
- Cryoprecipitate dose. Canadian practice is often 10 units. The European guideline suggests 15 to 20 single donor units. Local blood bank protocol should decide.
- The case never shows a CT head, although the summary mentions an epidural hematoma. The herniation branch is clinically consistent.
- Rubric tr-c3 (talking to the partner) and tr-t2 (induction) cite ATLS. That fits loosely.

## ethics-goals-of-care. An elderly woman from a retirement home

Verdict: Corrected. One real prescribing error and one legal error.

Changes
- Apixaban dose. Before: 5 mg twice daily. She is 86 and weighs 58 kg, so she meets two dose reduction criteria (age 80 or older and weight 60 kg or less). After: 2.5 mg twice daily.
- PCC. Before: "about 50 units/kg" with no maximum. The Canadian Stroke Best Practice Recommendations give 50 units/kg to a maximum of 3,000 units. For 58 kg that is 2,900 units. After: the maximum is stated. The teaching adds the Thrombosis Canada fixed 2,000 unit option.
- Andexanet. Before: "if available and in local protocol". Andexanet (Ondexxya) received conditional Health Canada approval in June 2023 but is rarely stocked. After: that is stated, with "do not wait for the anti Xa level".
- Blood pressure teaching. Now quotes the Canadian guidance that a systolic target under 140 to 160 for the first 24 to 48 hours may be reasonable.
- HCCA hierarchy. Before: "children, parents, siblings" as separate ranks. In section 20 a child and a parent share the same rank, then a parent with access rights only, then a brother or sister, then any other relative, then the Public Guardian and Trustee. After: corrected.
- Organ donation notification. Before: "Trillium Gift of Life Network as required in Ontario" with no law named. The law is now the Gift of Life Act, R.S.O. 1990, c. H.20 (formerly the Trillium Gift of Life Network Act), and the agency is Ontario Health (Trillium Gift of Life Network). The duty applies to designated facilities when death is imminent or has occurred. After: all three points are stated, and the teaching says the agency's trained staff usually raise donation with the family.
- Sources. Added statute citations and URLs for the HCCA, Apology Act and Gift of Life Act. The CPSO citation now names the Disclosure of Harm policy (updated 2019) and the Decision Making for End of Life Care policy (updated 2023). The CMPA citation now names the real article. The stroke citation now names the ICH module, 7th edition, 2020 update.

Checked and correct
- HCCA emergency treatment without consent, and the exception for a known prior capable wish refusing that treatment.
- An attorney for personal care ranks above children. The SDM must follow applicable prior capable wishes, otherwise best interests.
- Consent and Capacity Board as the route when an SDM is not following the Act. Ethics consultation first.
- Apology Act, 2009. An apology is not an admission of liability. The CPSO Disclosure of Harm policy says the same.
- Incident reports stay out of the chart. Delay 08:05 to 09:40 is 95 minutes. Labetalol 10 to 20 mg IV. Hydromorphone 0.2 to 0.5 mg subcut. Glycopyrrolate 0.2 to 0.4 mg subcut.

Sources verified
- Health Care Consent Act, 1996. https://www.ontario.ca/laws/statute/96h02
- Apology Act, 2009, S.O. 2009, c. 3. https://www.ontario.ca/laws/statute/09a03
- Gift of Life Act, R.S.O. 1990, c. H.20. https://www.ontario.ca/laws/statute/90h20 (also on CanLII)
- CPSO Disclosure of Harm. https://www.cpso.on.ca/en/physicians/policies-guidance/policies/disclosure-of-harm
- CPSO Decision Making for End of Life Care, updated March 2023. https://www.cpso.on.ca/en/Physicians/Policies-Guidance/Policies/Decision-Making-for-End-of-Life-Care
- CMPA disclosure article. https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2015/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients
- Canadian Stroke Best Practice Recommendations, ICH emergency management. PCC dose and BP wording confirmed from the page. https://www.strokebestpractices.ca/recommendations/management-of-intracerebral-hemorrhage/emergency-management-of-intracerebral-hemorrhage
- Health Canada conditional approval of Ondexxya, June 2023, confirmed from the Health Canada decision summary.

Residual uncertainties
- The Thrombosis Canada 2,000 unit option is stated in a teaching point whose source is the stroke guideline. Consider adding Thrombosis Canada as a source.
- The stroke guidance page still says andexanet is "not yet commercially available in Canada". It has since been approved. Hospital access varies.
- Whether a community hospital is a designated facility under the Gift of Life Act depends on the hospital. Most Ontario hospitals with an ED and ICU are.
- Many communication rubric items cite CPSO policy. That fits the disclosure items well and the family meeting items only loosely.

## Summary

All five cases needed corrections. None were structurally changed. Ids and graph structure are unchanged and all checks pass.

The most serious errors were:
- Ethics case: apixaban 5 mg twice daily in an 86 year old weighing 58 kg, and a wrong HCCA hierarchy.
- Febrile infant: gentamicin offered as a cefotaxime substitute in a baby with meningitis, an ampicillin range above Canadian neonatal dosing, and three sources that do not cover a 3 week old.
- Trauma: permissive hypotension "until head injury is suspected" in a patient who already had a head injury, and a missed thoracotomy threshold on the chest tube output.
- Chest pain: dissection targets that did not reflect the 2022 ACC/AHA or 2024 ESC guidelines.
- Overdose: an impossible "more than 8 hours" timeline and an unverifiable poison centre document cited as a source.

Outdated citations were replaced: Surviving Sepsis pediatric 2020 by 2026, ATLS 10th by 11th (2025), PALS by the Heart and Stroke 2025 guidelines, and ESC 2014 by ESC 2024. The 2025 Heart and Stroke guidelines and ATLS 11th edition were confirmed. No URL was kept that could not be confirmed.
