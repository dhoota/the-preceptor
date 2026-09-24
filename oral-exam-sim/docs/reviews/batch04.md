# Batch 04 clinical accuracy review

Reviewer role: adversarial emergency medicine examiner. Scope: all ten cases in `src/cases/batch04/`. Every case still ships with `reviewed: false` and needs physician sign off.

Checks run after edits:

- `npx tsc --noEmit -p . 2>&1 | grep batch04` returned nothing.
- `CASE_BATCH=batch04 npx vitest run tests/cases.test.ts` passed 63 of 63. The full suite also passed.

---

## 1. acute-ischemic-stroke-evt. Found at the kitchen table unable to speak

Verdict: Corrected

Changes:

- NIHSS finding. Before: "language 2 with a global aphasia picture". Global aphasia scores 3 on the NIHSS, so the item did not match the total. After: "language 2 with a severe mixed aphasia". Total of 17 still adds up.
- Consent. Before: she lacks capacity, so treat under the emergency provision and inform her husband. Under the Ontario Health Care Consent Act the substitute decision maker gives consent when available, and he was at the bedside. After: ask the husband quickly as substitute decision maker, and use the emergency provision only if seeking consent would delay treatment and risk serious harm. Rubric item st-c1 and its teaching now say the same and cite the Act, added as a new source.
- Angioedema side. Before: "often on the side opposite the infarct". After: "usually on the side opposite the ischemic hemisphere, here the right side". The stem already put the swelling on the right, which is correct for a left MCA stroke.
- Ramipril. Before: "Stop ramipril permanently". After: hold ramipril and flag the reaction. AHA advises holding ACE inhibitors. Permanent stopping is a later decision.
- Epinephrine and risk features. Added that anterior tongue and lip swelling is lower risk and laryngeal, palatal, floor of mouth or rapidly progressive swelling is higher risk, which is the AHA framing.
- Hydralazine feedback. Before: "Hydralazine is less predictable than labetalol". Removed as unsupported. After: labetalol in small titrated doses is the usual first choice.
- Handover times. The lytic time was fixed at 09:02 even on branches where it was given at 09:10. Now phrased as "the exact time it was given". Angioedema time now relative to the lytic.
- Large core framing (st-a4). Before: "ASPECTS 6 or more is the classic EVT population. Newer trials extend EVT to larger cores." After: ASPECTS 6 or more was the original trial population, trials since 2023 show benefit with ASPECTS 3 to 5 in selected patients, and the 2025 Canadian EVT interim update addresses large core stroke.
- CSBPR citation. Before: "Heart and Stroke Foundation of Canada. Acute Stroke Management, 7th edition. 2022." The module is real. After: Heran M et al., 7th edition practice guidelines update, 2022, Canadian Journal of Neurological Sciences, with the strokebestpractices.ca URL.

Sources verified:

- CSBPR Acute Stroke Management 7th edition 2022 (Heran et al.): https://pubmed.ncbi.nlm.nih.gov/36529857/ and https://www.strokebestpractices.ca/recommendations/acute-stroke-management. The site also lists a 2025 EVT interim update covering large core, posterior circulation and medium vessel occlusion.
- AcT (Menon, Lancet 2022), ESCAPE (Goyal, NEJM 2015), AHA 2019 (Powers, Stroke 2019): titles and years match known publications.
- Tenecteplase 0.25 mg/kg to 25 mg (18 mg for 72 kg) and alteplase 0.9 mg/kg (65 mg, 6.5 mg bolus) recomputed and correct.

Residual uncertainty:

- Thrombolysis before EVT is clearly supported for drip and ship. The "partial" label for skipping it is reasonable. A reviewer may prefer "unsafe".
- The "unsafe" label for lowering to 140 systolic before lysis is defensible but not guideline explicit. Consider "partial".
- Door to needle is 32 minutes on the strong path, just over the 30 minute median target. Harmless, but the examiner may comment.

---

## 2. refractory-status-epilepticus (renamed from status-epilepticus-hyponatremia). Still shaking on arrival

Verdict: Rewritten

Why: the original case taught thiazide and SSRI hyponatremic seizures, which duplicates `batch05/older-woman-confusion-seizure` and `batch06/pediatric-status-epilepticus`. The case now teaches adult status epilepticus itself.

Changes:

- File renamed to `refractory-status-epilepticus.ts`. Id now `refractory-status-epilepticus`. Export now `refractoryStatusEpilepticus`. `index.ts` updated. Old file removed. No other file referenced the old id.
- New scenario. A 34 year old man with focal epilepsy after a head injury, on phenytoin and clobazam, who ran out 5 days ago after losing his drug plan. Set in London, Ontario, with EEG on weekdays and a call in technologist after hours.
- Flow: second benzodiazepine dose, second line agent with contraindications, refractory status needing intubation and an anesthetic infusion, masked seizures after rocuronium, nonconvulsive status on continuous EEG, infusion related hypotension, maintenance drugs, cause search, family and legal duties, handover.
- Doses, recomputed for 80 kg:
  - Lorazepam 0.1 mg/kg to 4 mg, so 4 mg.
  - Levetiracetam 60 mg/kg is 4,800 mg, capped at 4,500 mg.
  - Fosphenytoin 20 mg PE/kg is 1,600 mg PE, capped at 1,500 mg PE, at up to 150 mg PE per minute.
  - Valproate 40 mg/kg is 3,200 mg, capped at 3,000 mg.
  - Phenytoin no faster than 50 mg per minute, so 1,600 mg needs at least 32 minutes.
  - Midazolam 0.2 mg/kg bolus is 16 mg, then 0.05 to 2 mg/kg/h. Propofol 1 to 2 mg/kg, then 30 to 200 mcg/kg/min, keeping at or below about 80 mcg/kg/min beyond 48 hours.
  - Maintenance phenytoin about 5 mg/kg/day, levetiracetam 1,000 to 1,500 mg every 12 hours.
- Contraindications taught: fosphenytoin with sinus bradycardia, SA block, second or third degree AV block or hypotension. Valproate with liver disease, pregnancy or possible pregnancy, mitochondrial disease, urea cycle disorders, pancreatitis and low platelets, plus the carbapenem interaction.
- Branch choices include a partial "top up" fosphenytoin load without a level, an unsafe phenytoin push, a partial third benzodiazepine dose, an unsafe paralytic infusion without sedation, and a partial plan to lighten sedation and wait for a Monday EEG.
- Legal point: Ontario mandatory reporting of sudden incapacitation to the Ministry of Transportation.

Sources verified:

- Glauser T et al. AES guideline, Epilepsy Currents 2016. Kapur J et al. ESETT, NEJM 2019. Silbergleit R et al. RAMPART, NEJM 2012. Kept from the original and confirmed.
- Brophy GM et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care 2012: https://link.springer.com/article/10.1007/s12028-012-9695-z
- DeLorenzo RJ et al. Persistent nonconvulsive status epilepticus after the control of convulsive status epilepticus. Epilepsia 1998: https://pubmed.ncbi.nlm.nih.gov/9701373/
- Ontario mandatory reporting of high risk medical conditions, in force July 1, 2018, including sudden incapacitation from seizures: https://www.ontario.ca/page/reporting-driver-medical-review

Residual uncertainty:

- Whether one breakthrough seizure from missed doses in known epilepsy must be reported under the Ontario rules, or is at the physician's discretion, depends on the judged risk of recurrence. Please confirm the wording.
- The DeLorenzo figures (about half with electrographic seizures, about 1 in 7 in nonconvulsive status) come from a 1998 single centre cohort. The 14 percent figure was confirmed. The "about half" figure is from memory of the paper.
- Midazolam and propofol ranges follow the 2012 Neurocritical Care Society guideline. Local ICU protocols may differ.
- Trillium Drug Program is named as the likely coverage route. Eligibility depends on income and should be confirmed by social work.

---

## 3. thunderclap-headache-sah. Headache in the middle of a workout

Verdict: Corrected

Changes:

- GCS arithmetic. Before: eyes to voice, "says only a few words", localizes pain, GCS 10. That is E3 V3 M5, which is 11. After: "makes only moaning sounds", which is V2, so GCS 10.
- Blood pressure target. Before: keep systolic below 160. After: below about 140 to 160 until the aneurysm is secured, with below 160 as a common working target. This matches the 2023 AHA wording on individualized targets.
- Hypotension floor. Before: "hypotension below about 110 systolic" in the intubation and handover answers. That number has no clear source. After: avoid any hypotension, with pressors ready.
- Family screening. Before: with one affected parent, screening can be discussed later. This missed the main point. After: her mother's bleed may also have been an aneurysm, making two affected first degree relatives, so her siblings may be offered screening. The teenagers have one affected parent, are not screened now, and can revisit this in early adulthood. Smoking and blood pressure advice added. Teaching point updated to match.

Sources verified:

- Ottawa SAH Rule derivation (Perry, JAMA 2013), validation (Perry, CMAJ 2017) and the 6 hour CT study (Perry, BMJ 2011): titles and years match.
- AHA 2023 aSAH guideline (Hoh et al., Stroke 2023): https://pubmed.ncbi.nlm.nih.gov/37212182/. Screening advice for two or more affected first degree relatives confirmed from the AHA summary: https://professional.heart.org/en/science-news/2023-guideline-for-the-management-of-patients-with-aneurysmal-subarachnoid-hemorrhage/top-things-to-know
- Nimodipine 60 mg every 4 hours for 21 days, and all five positive Ottawa criteria in the stem, are correct.

Residual uncertainty:

- The ketorolac branch is labelled partial. Some examiners would call NSAID before CT unsafe.
- The stem says the neurosurgical centre is 90 minutes by land, and the end node has her flown. This is plausible with Ornge but could be made explicit.

---

## 4. metastatic-cord-compression. Back pain and legs that give way

Verdict: Corrected

Changes:

- SINS score. Before: SINS 11 with "posterior element involvement". A T10 lesion scores 1 for location. With mechanical pain 3, mixed lesion 1, normal alignment 0, collapse under 50 percent 2 and bilateral posterolateral involvement 3, the total is 10. After: CT now states bilateral pedicle and posterior element involvement, and the MRI says SINS 10, still potentially unstable.
- Dexamethasone. The Loblaw regimen (10 mg IV then 16 mg per day) was kept. Added that NICE NG234 gives 16 mg as soon as possible and then 16 mg daily until definitive treatment, and that both are reasonable. Teaching point updated.
- MRI timing. Now "as soon as possible and always within 24 hours", with NICE's expectation of out of hours MRI when it would allow immediate treatment. This strengthens the case for tonight's transfer.
- Timeline. Before: the end node said he was transferred at 00:30 while one branch reassessed him at 01:00. After: "transferred overnight". Progression now "in under 2 hours".
- NICE URL added.

Sources verified:

- NICE NG234, Spinal metastases and metastatic spinal cord compression, 2023: https://www.nice.org.uk/guidance/ng234. Dexamethasone 16 mg and MRI within 24 hours confirmed from the NICE guideline PDF and summaries.
- Loblaw 2012 (Int J Radiat Oncol Biol Phys), Patchell 2005 (Lancet) and Fisher 2010 SINS (Spine): titles and years match.

Residual uncertainty:

- There is no Canadian guideline cited. Cancer Care Ontario or provincial pathways could replace or join NICE if the bank prefers Canadian sources.

---

## 5. myasthenic-crisis-airway. Tired, choking and short of breath

Verdict: Corrected

Changes:

- Succinylcholine. Added the resistance dose of about 1.5 to 2 mg/kg and that pyridostigmine slows its breakdown, so the block can be prolonged. Partial choice feedback updated.
- Rocuronium. Before: "Some reduce the dose." After: a standard RSI dose of 1 mg/kg gives reliable conditions in an emergency, with a long block expected and sugammadex available. Anesthesia may choose a lower dose in a planned setting. The strong choice now names 70 mg for 68 kg.
- Doxycycline. Before: presented as simply safe. After: doxycycline has rare case reports of worsening myasthenia but is usually the lowest risk atypical option. Discuss with pharmacy or infectious diseases because this is now severe pneumonia. Dose and interval added (100 mg every 12 hours).
- The 20 30 40 rule was checked (FVC under 20 mL/kg, NIF weaker than minus 30 cmH2O, expiratory pressure under 40 cmH2O) and is correct. The teaching already notes it comes from Guillain Barré data.
- IVIG 2 g/kg for 68 kg is 136 g. Correct.

Sources verified:

- Sanders DB et al. 2016 and Narayanaswami P et al. 2021 international consensus guidance, Neurology. Lawn ND et al. 2001, Archives of Neurology. Metlay JP et al. 2019 ATS and IDSA CAP guideline. Titles and years match known publications.

Residual uncertainty:

- Rubric item mg-r2 (paralytic choice) cites the 2016 consensus guidance, which does not really cover induction drugs. An anesthesia reference would fit better.
- ATS and IDSA recommend a beta lactam with a macrolide or a fluoroquinolone for severe CAP. Doxycycline is off guideline for severe CAP. It is chosen here because both preferred partners worsen myasthenia. The reviewer should confirm that trade off.

---

## 6. bacterial-meningitis-adult. Fever and confusion after an earache

Verdict: Corrected

Changes:

- Vancomycin. Before: load 20 to 25 mg/kg, about 2 g, then dose by levels. After: a loading dose of about 20 to 35 mg/kg (about 2 g for 90 kg), then 15 to 20 mg/kg every 8 to 12 hours guided by levels and pharmacy. Rubric text updated to match. The strong choice of 2 g (22 mg/kg) is inside this range.
- Antibiotic timing. Before: within 30 to 60 minutes. After: as soon as possible and within 1 hour of arrival.
- CT before LP. Teaching now notes that ESCMID uses GCS under 10 rather than any confusion, and that neither rule should delay antibiotics.
- De escalation. Added stopping vancomycin once the isolate is ceftriaxone susceptible.
- Patient vaccination. Added pneumococcal vaccine for him after recovery because of diabetes and alcohol use.
- Reportability citation. Before: the Health Protection and Promotion Act alone. After: the Act plus O. Reg. 135/18, Designation of Diseases, which lists invasive pneumococcal disease, with the CanLII URL.

Sources verified:

- Invasive pneumococcal disease is a disease of public health significance under O. Reg. 135/18: https://www.canlii.org/en/on/laws/regu/o-reg-135-18/latest/o-reg-135-18.html and https://www.publichealthontario.ca/en/Health-Topics/Immunization/Vaccine-Preventable-Diseases/IPD
- Tunkel 2004 IDSA, de Gans 2002 NEJM, van de Beek 2016 ESCMID, Evans 2021 Surviving Sepsis: titles and years match.
- Levetiracetam 60 mg/kg for 90 kg is 5,400 mg, capped at 4,500 mg. Phenytoin 20 mg/kg is 1,800 mg, which needs at least 36 minutes. Both correct.

Residual uncertainty:

- Canadian ceftriaxone resistance in pneumococcus is low. Some Canadian centres may not add vancomycin routinely. The case follows IDSA.
- Consider adding an AMMI Canada or provincial reference for empiric therapy if the bank wants a Canadian source.

---

## 7. acute-vestibular-syndrome-hints. The room has been spinning since the night

Verdict: Corrected

Changes:

- Heparin choice. Before: labelled unsafe. Anticoagulation is an accepted option in cervical artery dissection and CADISS and TREAT CAD found no clear advantage either way, so "unsafe" overstated it. After: partial. The feedback now explains that anticoagulation is not better than antiplatelets, that a V4 lesion may be intracranial with a risk of subarachnoid bleeding, and that antiplatelet therapy is the usual choice. Rubric text changed from "avoids heparin" to "does not use routine heparin".
- Rectal ASA. Added the dose, 325 mg rectally.
- Pressure in cerebellar swelling. Before: "keep systolic below about 180". This number has no source. After: do not drive the pressure down because it may be a Cushing response, and avoid hypotension and large swings.
- MRI false negatives. Before: DWI misses "about 1 in 5" posterior strokes. After: roughly 10 to 20 percent in the first 48 hours, more often when small.
- CSBPR citation updated as in case 1.

Sources verified:

- GRACE 3 (Edlow, Academic Emergency Medicine 2023), Kattah 2009 (Stroke), POINT (Johnston, NEJM 2018), Wijdicks 2014 AHA swelling statement (Stroke): titles and years match.
- CSBPR acute module as above.

Residual uncertainty:

- Dual antiplatelet therapy is given with NIHSS 1 but a cerebellar infarct that later measures 3.5 cm. NIHSS undercounts posterior strokes. A neurologist may want to comment on whether DAPT was still right.
- The DAPT duration of 21 days follows CHANCE. Canadian secondary prevention guidance allows 21 to 30 days.

---

## 8. high-voltage-electrical-injury. Lineworker brought in from a job site

Verdict: Corrected

Changes:

- Province. Before: central Alberta, burn centre in Calgary, transfers through RAAPID, a generic workers' compensation report. After: central Ontario, the nearest adult burn centre 90 minutes by ground, transfers through CritiCall Ontario, and the WSIB Health Professional's Report (Form 8). Feedback adds that serious workplace injuries are reported to the Ministry of Labour by the employer, not the physician.
- Urine output target. Before: 1 to 1.5 mL/kg/h, stated as 85 to 130 mL/h for 85 kg. That is higher than ABLS advice. After: 75 to 100 mL/h in an adult until the pigment clears, about 1 mL/kg/h for him. Changed in the model answer, strong choice, feedback and rubric.
- Insulin without dextrose. Before: "causes hypoglycemia in most patients with a glucose under 14 mmol/L". After: risks severe hypoglycemia unless glucose is already above about 14 mmol/L, his is 7.0, and check glucose hourly for at least 6 hours.
- Monitoring. Before: "usually for at least 24 hours". After: admission with continuous monitoring, commonly for 24 hours.
- Tetanus teaching now states that his last booster was over 5 years ago.
- Confidentiality source. Before: a CMPA citation with an unverified title. After: Ontario Personal Health Information Protection Act, 2004. Feedback now names PHIPA.

Sources verified:

- ABLS urine output 75 to 100 mL/h in adults with pigmented urine: confirmed in burn consensus material, for example https://nbtrauma.ca/wp-content/uploads/2020/10/FAQ-Burn-Consensus-Statement-JULY-2019-FINAL.pdf
- Bosch 2009 NEJM, ATLS 10th edition 2018: titles and years match. UK Kidney Association hyperkalaemia guideline cited without year.
- Parkland choice arithmetic (4 x 85 x 4 = 1,360 mL) and compartment delta pressure (72 minus 44 = 28 mmHg) are correct.

Residual uncertainty:

- Doing a forearm fasciotomy with carpal tunnel release by a general surgeon before transfer is realistic but depends on local skills. The burn centre should be involved in that call.
- The length of cardiac monitoring after high voltage injury varies in the literature. 24 hours is common practice, not a firm guideline number.

---

## 9. delirium-older-adult. Not herself since the weekend

Verdict: Corrected

Changes:

- 4AT score. Before: 9. Drowsy (alertness 4), wrong place and year (AMT4 2), months backward stopping at November (1), and acute change (4) add to 11. After: 11 in the finding and both consequence nodes.
- Zopiclone. Before: "Reduce the dose or continue and plan a taper later." After: continue at a reduced dose such as 3.75 mg, the usual dose for older adults, and plan a supervised taper once the delirium clears.
- Sodium. Added potassium replacement and sodium checks every 4 to 6 hours, because stopping the thiazide can cause a brisk rise.
- Nitrofurantoin threshold checked. Cockcroft Gault for 86 years, 55 kg, creatinine 108 µmol/L, female, gives about 29 mL/min. Beers 2023 advises avoiding nitrofurantoin below 30. Correct as written.
- Haloperidol 0.25 to 0.5 mg starting dose checked and kept.
- The Health Care Consent Act ranking (attorney for personal care above spouse, spouse above child) is correct.

Sources verified:

- CCSMH delirium guideline cited plainly without year. Inouye 1990 CAM (Annals of Internal Medicine), AGS Beers 2023 (JAGS), Choosing Wisely Canada AMMI recommendations, and the Health Care Consent Act 1996 citation: all real.

Residual uncertainty:

- Continuing zopiclone in active delirium is a judgement call. Some geriatricians would hold it and watch for withdrawal. Please confirm the preferred teaching.
- The case says to send a urine culture only if fever or urinary symptoms develop. With 740 mL retention and a positive nitrite, some would send a culture now and not treat. Either is defensible.
- The CCSMH guideline was updated in 2014. The citation does not state a year on purpose.

---

## 10. fall-anticoagulated-hip-fracture. Found on the bedroom floor

Verdict: Corrected

Changes:

- Apixaban dose criteria. Before: he meets all three criteria including creatinine 133 µmol/L or more. His baseline creatinine is 110. The 148 today is acute kidney injury. After: he meets two of three (age and weight), which still means 2.5 mg twice daily, and today's value reflects acute kidney injury.
- Surgical timing. Before: many centres proceed about 48 hours after the last dose for high bleed risk surgery. That applies the elective PAUSE framework to urgent hip surgery. After: hip fracture surgery is urgent, many centres operate under general anesthesia about 24 to 48 hours after the last apixaban dose, sooner if a drug specific anti Xa level is low. Neuraxial anesthesia needs about 72 hours under ASRA guidance.
- PCC dose. Before: 50 units/kg (2,900 units for 58 kg). After: 2,000 units IV, about 25 to 50 units/kg, which is Canadian practice. Andexanet is described as not routinely available in Canada.
- When to reverse. Before: reversal is reasonable once the bleed is major. After: PCC supports hemostasis but does not reverse the drug. Thrombosis Canada reserves it for life threatening or uncontrolled bleeding, which applies if he stays hypotensive despite blood.
- Quality standard citation. Before: "Health Quality Ontario. Hip fracture. Care for people with fragility fractures. Quality standard." Health Quality Ontario is now part of Ontario Health, and the standard was updated in 2024. After: "Ontario Health. Hip fracture. Care for people with fragility fractures. Quality standard. 2024." with the verified URL. The hip-a3 teaching now links the medication review to falls prevention after a fragility fracture, which fits the standard better.
- Fascia iliaca block on a DOAC and bupivacaine dose checked. 30 mL of 0.25 percent is 75 mg. The ceiling of 2.5 mg/kg for 58 kg is 145 mg. Correct. A superficial compressible block is reasonable on a DOAC.

Sources verified:

- Ontario Health hip fracture quality standard, published February 1, 2024: https://ontariohealth.ca/evidence-to-improve-care/quality-standards/view-all-quality-standards/hip-fracture
- Thrombosis Canada DOAC bleeding guide: https://thrombosiscanada.ca/clinical_guides/pdfs/128_28.pdf (PCC for life threatening or uncontrolled bleeding with FXa inhibitors).
- BC guideline on emergency reversal, PCC 2,000 units (25 units/kg, maximum 3,000 units) for FXa inhibitors, andexanet not available in Canada as of 2023: https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/bc-guidelines/oral-anticoagulants
- Canadian CT Head Rule (Lancet 2001), Canadian C Spine Rule (JAMA 2001), Guay and Kopp Cochrane 2020, FOCUS (NEJM 2011): titles and years match.

Residual uncertainty:

- Andexanet availability in Canada should be rechecked at release.
- The rubric items hip-m4 (long lie complications) and hip-c2 (one year mortality) cite the Ontario Health standard. It does not address these in detail. A geriatric or trauma reference would fit better, but the case is at the six source limit.
- The exact wording of the 48 hour surgery statement in the 2024 standard could not be fetched because the PDF link now returns a 404. Please confirm.

---

## Batch summary

- Ten cases reviewed. One rewritten (status epilepticus). Nine corrected. None judged fully accurate as written.
- Most serious errors found:
  - Hip fracture: apixaban dose criteria counted an acute creatinine as baseline. PCC dosed at 50 units/kg rather than the Canadian 2,000 unit dose. Elective timing rules applied to urgent hip surgery.
  - Stroke: consent advice skipped an available substitute decision maker.
  - Electrical injury: urine output target above ABLS advice. Alberta systems in an Ontario bank.
  - SAH: GCS arithmetic wrong. Family screening advice missed the likely familial pattern.
  - Delirium: 4AT total wrong.
  - Cord compression: SINS total wrong.
  - Vestibular: heparin in possible dissection mislabelled as unsafe.
  - Status epilepticus: duplicated two other cases. Now a new case on refractory and nonconvulsive status.
- Every citation was checked against known publications or live pages. No URL was added without confirmation. The CMPA citation with an unverified title was replaced with PHIPA.
- Items that need a physician: Ontario driver reporting wording for a breakthrough seizure, doxycycline for severe CAP in myasthenia, zopiclone continuation in delirium, DAPT after a larger cerebellar infarct, andexanet availability, and the local fasciotomy decision.
