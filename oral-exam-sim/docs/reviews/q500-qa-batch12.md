# Q500 QA report: batch12

Independent clinical accuracy review of the four oral cases in `src/cases/batch12/`. I did not write them. Every finding, node, choice, feedback line, model answer, rubric item and source was read against the stem and against current guidance. All four cases stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal name appears in any case.

## Verdicts

| case id | verdict | corrections |
| --- | --- | --- |
| first-trimester-loss-mechanical-valve | pass after corrections | 10 |
| work-trailer-heater-burns (was ice-hut-heater-contact-burns) | pass after corrections, renamed | 6 |
| hyperacute-purulent-red-eye | pass, no clinical change | 0 |
| intoxicated-driver-hip-dislocation | pass after corrections | 4 |

## Case 1. first-trimester-loss-mechanical-valve

### Numbers recomputed

- PCC. INR 4.6 falls in the NAC band of 3 to 5, so 2000 IU. The weight and INR option for an INR of 4 to 6 is 35 IU/kg, and 35 x 64 kg = 2240 IU. Both match the NAC 2022 sample tables. Correct.
- Major bleeding. Hemoglobin 128 to 84 g/L is a fall of 44 g/L. The ISTH definition quoted by NAC is a fall of 20 g/L or more or 2 or more units. Correct.
- INR target for a mechanical mitral valve, 3.0 (2.5 to 3.5). Matches ACC/AHA 2020.
- Warfarin over 5 mg a day favours heparin in the first trimester. Matches ACC/AHA 2020.
- Rh immune globulin. SOGC 448 recommendation 10 suggests 300 mcg after a loss beyond 12 weeks. Recommendations 8 and 9 say do not give before 8 weeks and suggest not giving between 8 and 12 weeks, with an option for the risk averse. The case matches. SOGC 460 says it can be considered from 10 to 12 weeks. This does not affect a loss past 12 weeks.

### Writer flags

- Vitamin K. NAC 2022 recommends IV vitamin K given with PCC, because the PCC effect on the INR has a half life of about 6 hours (factor VII). It says clinicians should not hesitate to give IV vitamin K, since warfarin resistance does not follow at appropriate doses. ACC/AHA 2020 calls PCC reasonable in a mechanical valve with uncontrollable bleeding, and adjunctive IV vitamin K reasonable when warfarin will not resume for 7 days (confirmed through the Huda 2021 review that quotes it, since the JACC full text returned 403 to me). The safer, guideline supported key is PCC now plus IV vitamin K at the same time. What is debated is the dose: 10 mg (Canadian major bleeding practice) against a lower dose that keeps warfarin restart simple in a mechanical valve. The case keeps "a dose agreed with cardiology". I made the model answer say the vitamin K goes in with the PCC. A physician should decide whether to name a dose.
- IV or IM Rh immune globulin. SOGC 448 states that RhIG may be given IV or IM, that WinRho SDF (the product used in Canada) is licensed for both routes, and that trials found no difference. The WinRho monograph (2022) confirms both routes. Neither document names anticoagulation, so IV is kept as the sensible route choice, not as a rule. Wording changed to say so.
- SOGC 460. Checked again through the published excerpt only. It supports expectant management only without heavy bleeding, pain or infection, suction aspiration, and depression screening and bereavement support. It does not define heavy bleeding by pads per hour and does not mention speculum removal of tissue. I removed the unsupported pad threshold.

### Corrections

1. Feedback on the strong reversal choice said PCC "lasts 12 to 24 hours". That is wrong. NAC gives a half life of about 6 hours on the INR. Rewritten to say the effect fades over about 6 hours and IV vitamin K given at the same time sustains it.
2. Model answer for the reversal question now says IV vitamin K is given with the PCC.
3. Rh model answer. "Give it IV rather than IM" rewritten to say the Canadian product works by either route and IV is chosen while she is anticoagulated.
4. Rubric ft-m5 text and teaching updated the same way, adding that the routes work equally well.
5. Rubric ft-h4 teaching. "Soaking more than a pad an hour" had no source. Replaced with soaking pads quickly, and heavy bleeding making expectant management a poor choice (SOGC 460).
6. Rubric ft-m1 teaching. The cited NAC document does not discuss Rh D negative red cells. Rewritten to the NAC major bleeding definition (fall of 20 g/L or 2 or more units), keeping the Rh D negative cells advice as standard practice.
7. Feedback on the "blame the drug" choice now says the high INR "almost certainly" did not cause the loss, rather than a flat statement.
8. Uniqueness. SAMP s38 "Bleeding at thirteen weeks with a collection" has a 33 year old at 13 weeks and 1 day with an SOGC 448 Rh question. This case used the same age and gestation. Age changed to 36 and the date to 13 weeks and 4 days (stem, pregnancy finding and Rh model answer).
9. Uniqueness. SAMP s38 "Heavy bleeding with clots at ten weeks" has 7 pads in 3 hours and a faint in the washroom, and the batch07 ectopic case is found on a washroom floor. Changed to 6 pads in the last 2 hours and a near faint at the triage desk (stem and history).
10. Stem word count still under 60, and the CFPC card is unchanged.

### Remaining notes for a physician

- Vitamin K dose, as above.
- Process items ft-c1 and ft-d1 and the speculum item ft-p2 cite SOGC 460 loosely. The guideline does not describe ED team process or tissue removal at the os.

## Case 2. work-trailer-heater-burns (renamed from ice-hut-heater-contact-burns)

### Numbers recomputed

- TBSA. Full thickness 5% plus deep partial 4% gives 9%. Erythema excluded. Correct.
- Wrong formula choice. 4 x 92 kg x 9% = 3312 mL, so "about 3.3 L" is right. The case correctly says no formula is needed under 20%, and that ATLS uses 2 mL/kg/% TBSA from the time of injury, half in the first 8 hours.
- Carboxyhemoglobin 11% after about 100 minutes of oxygen (06:50 to 08:30). Consistent with a higher starting level and a half life near 74 minutes on 100% oxygen.
- Hyperkalemia. Calcium gluconate 10% 30 mL or calcium chloride 10% 10 mL, insulin 10 units with 25 g dextrose, nebulized salbutamol. Standard adult doses. Calcium is right here despite total calcium 1.96 mmol/L, because the ECG shows hyperkalemic change.
- Rhabdomyolysis. CK over 5 times normal and a urine target of 300 mL/hour. Both are stated in the Long 2019 abstract, which also says bicarbonate, mannitol and loop diuretics lack strong evidence.
- Delayed neurologic sequelae risk factors (age 36 or over, loss of consciousness). Listed in the background of the ACEP 2025 policy. Its Level C recommendation (selected patients may benefit from hyperbaric oxygen based on severity and availability, distance and time) matches the case.

### Corrections

1. Uniqueness. SAMP s04 burns "An explosion at the ice hut" is a propane heater in an ice fishing hut. This case reused that setting with burns as the priority topic. I moved the scene to a work trailer at a winter road camp. The friend is now a coworker who shared the trailer. The id, file and export are renamed to `work-trailer-heater-burns` and `workTrailerHeaterBurns`, title "Found on the floor of a work trailer", and `index.ts` updated. All the clinical content is unchanged.
2. Related text changed with the setting: summary, stem, paramedic report, collateral finding (id `coworker`), social history, unsafe oxygen feedback, history model answer, carbon monoxide prompt and model answer, the end text, and rubric ib-h3 and ib-c3.
3. Rubric ib-p1 teaching. ACEP 2017 advises against noninvasive carboxyhemoglobin measurement (pulse co-oximetry), not standard pulse oximetry. Wording clarified.
4. Rubric ib-m7 cited the ABA referral page for clean dry dressings and no creams. The page has no wound care advice. Source changed to ATLS.
5. Renaming and source checks pass the batch tests.
6. No dose change was needed.

### Remaining notes for a physician

- Thematic overlap with SAMP s26 burns "Found beside the heater" (contact burn after a long lie with rhabdomyolysis, in an 84 year old on apixaban). This case is distinct in carbon monoxide, hyperkalemia, compartment syndrome, a second exposed patient and fasciotomy before a long transfer. I kept it but the bank wide check should look at this pair.
- ATLS points (2 mL/kg/% TBSA for 20% or more, compartment syndrome signs, dressings before transfer) rest on the 10th edition, which I could not open either.
- ib-h5 teaching (an ACE inhibitor worsens kidney injury and hyperkalemia) is pharmacology, not a line in the Long review.

## Case 3. hyperacute-purulent-red-eye

### Checks

- Ceftriaxone. CDC 2021 (web page read): gonococcal conjunctivitis 1 g IM once with one time saline lavage. Disseminated infection 1 g IM or IV every 24 hours, switch to an oral agent by susceptibility 24 to 48 hours after improvement, at least 7 days in total. Hospitalization and infectious diseases consultation recommended for initial therapy. Doxycycline 100 mg twice daily for 7 days if chlamydia is not excluded. Every dose and duration in the case matches.
- Canada. The PHAC gonorrhea guide (last partial content update June 2026) gives ceftriaxone 500 mg IM once as the interim preferred regimen for uncomplicated anogenital and pharyngeal infection. It gives no regimen for conjunctivitis or disseminated infection. It says other complicated infections should be managed with an infectious disease specialist and that hospitalization is indicated for initial management of disseminated infection. In practice Canada defers the complicated regimens to specialist advice, and the CDC regimen is the usable published one. The partial choice wording ("500 mg IM is the Canadian dose for uncomplicated anogenital infection") is accurate.
- PHAC also confirms 60 day partner notification, national notifiability, chlamydia co treatment and test of cure timing (culture at least 3 days, NAAT 3 to 4 weeks after treatment).
- Azari and Barney 2013 confirms hyperacute conjunctivitis features, a high risk of corneal perforation, culture of severe purulent discharge, prompt ophthalmology referral for corneal involvement, and no routine steroid drops.
- Choice labels are defensible. The partial IM choice still treats with ceftriaxone. The unsafe choices (steroid with patching, ciprofloxacin with drops) are unsafe.

### Corrections

None needed.

### Remaining notes

- Overlap with SAMP s41 infectious diseases on disseminated gonococcal infection (tenosynovitis, pustules, ceftriaxone 1 g IV daily for at least 7 days). The eye angle, the consultant pushback and confidentiality are new, but rubric gk-m1 repeats the s41 teaching point. Flag for the bank wide check.
- "Gonococcus can invade intact epithelium" (gk-p2) is standard teaching but is not a line in Azari.

## Case 4. intoxicated-driver-hip-dislocation

### Numbers recomputed

- Fentanyl 75 mcg then 25 mcg every 5 minutes at 84 kg is about 1 mcg/kg then small top ups. Reasonable.
- Propofol 40 mg then 20 mg at 84 kg is 0.48 then 0.24 mg/kg. This matches the model answer of 0.5 then 0.25 mg/kg. It is lower than the usual 1 mg/kg start (with 0.5 mg/kg repeats), which is defensible with ethanol at 41 mmol/L and opioid on board. Neither cited source gives a bolus dose. Typical practice, not a quoted line.
- Reduction timing. Dawson-Amoah 2018 says no more than 6 hours between presentation and reduction, with a fall in avascular necrosis when reduced within 6 hours. Sciatic injury about 10 to 15%, peroneal component most often. Post reduction CT. Open reduction if closed reduction fails. All match.
- Fasting. ACEP 2014 recommends not delaying ED sedation based on fasting time. Matches the feedback.

### Corrections

1. Apnea question. Giving naloxone and flumazenil and waiting while he is apneic at an SpO2 of 86% was labelled partial. That is not defensible. Changed to unsafe, and the feedback now says that waiting while apneic and desaturating wastes the minutes that matter.
2. Feedback on waiting for sobriety or the operating room said waiting 4 to 8 hours "pushes reduction well past 6 hours". The crash was at 00:50 and the time is 01:30, so a 4 hour wait lands at about 6 hours from injury, not well past it. Rewritten to "to or well past 6 hours from the injury".
3. Rubric hd-c4 cited ATLS for brief alcohol intervention, which could not be checked. Replaced with the Gentilello 1999 randomized trial at a level 1 trauma centre (brief intervention cut drinking by about 22 drinks a week and was associated with a 47% reduction in reinjury). Teaching rewritten to match. New source added.
4. Source count now 6, within the limit.

### Remaining notes for a physician

- Overlap with SAMP s45 multiple trauma "Front seat passenger with hip pain" (head on collision, dashboard, right posterior hip dislocation, questions on the pre reduction nerve exam, timing and knee injury) and SAMP s02 analgesia sedation "Hip out after bending over" (propofol sedation for a hip after a recent meal). The intoxication, capacity, apnea rescue and alcohol intervention are new, but rubric hd-p3, hd-m2 and hd-p4 repeat s45 teaching points. Flag for the bank wide check. If it is flagged, the hip specific items could be cut back and the sedation items expanded.
- The capacity item cites Green 2019 in general terms.

## Sources checked

Opened and read for the points they support:

- NAC. Recommendations for use of prothrombin complex concentrates in Canada. 2022. https://profedu.blood.ca/fr/media/5843/download (PCC dose tables, 6 hour half life, IV vitamin K, post infusion INR, ISTH major bleeding)
- Fung-Kee-Fung K, et al. SOGC Guideline No. 448. 2024. https://delphi.sogc.org/wp-content/uploads/2025/02/gui448CPG2404E.pdf (recommendations 8 to 10, route of administration, WinRho SDF). PubMed https://pubmed.ncbi.nlm.nih.gov/38553007/
- WinRho SDF product monograph. 2022. https://www.blood.ca/sites/default/files/WinRho_PM_KIB.pdf (IV or IM)
- Pymar H, et al. SOGC Guideline No. 460. 2025. https://pubmed.ncbi.nlm.nih.gov/40349974/ and excerpt https://www.tomwademd.net/?p=167592
- Po L, et al. SOGC Guideline No. 414. 2021. https://pubmed.ncbi.nlm.nih.gov/33453378/ (record checked)
- Otto CM, et al. 2020 ACC/AHA valvular heart disease guideline. https://pubmed.ncbi.nlm.nih.gov/33342586/ (record checked. Full text blocked. Vitamin K and PCC wording confirmed via Huda SA, et al. Cureus 2021, https://pmc.ncbi.nlm.nih.gov/articles/PMC8276624)
- Long B, Koyfman A, Gottlieb M. Am J Emerg Med. 2019. https://pubmed.ncbi.nlm.nih.gov/30630682/ (abstract read)
- Wolf SJ, et al. ACEP clinical policy, carbon monoxide. 2017. https://pubmed.ncbi.nlm.nih.gov/27993310/ (record checked)
- Shih RD, et al. ACEP critical issue, carbon monoxide. 2025. https://pubmed.ncbi.nlm.nih.gov/40118649/ and https://www.acepnow.com/article/new-clinical-policy-for-adult-patients-with-acute-carbon-monoxide-poisoning/
- American Burn Association. Guidelines for burn patient referral. 2025. https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
- Romanowski KS, et al. ABA acute pain guidelines. 2020. https://pubmed.ncbi.nlm.nih.gov/32885244/ (abstract read)
- Workowski KA, et al. CDC STI treatment guidelines 2021, gonococcal infections. https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm
- Public Health Agency of Canada. Gonorrhea guide: treatment and follow up. 2026. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html
- Azari AA, Barney NP. JAMA. 2013. https://pmc.ncbi.nlm.nih.gov/articles/PMC4049531/
- Green SM, et al. Unscheduled procedural sedation. 2019. https://pubmed.ncbi.nlm.nih.gov/31029297/ (record and abstract)
- Godwin SA, et al. ACEP procedural sedation policy. 2014. https://pubmed.ncbi.nlm.nih.gov/24438649/ (record and abstract)
- Hachimi-Idrissi S, et al. EUSEM acute pain guidelines. 2026. https://pubmed.ncbi.nlm.nih.gov/41810980/ (record checked)
- Dawson-Amoah K, et al. Ochsner J. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/
- Gentilello LM, et al. Ann Surg. 1999. https://pubmed.ncbi.nlm.nih.gov/10522717/ (new, abstract read)
- ATLS 10th edition. 2018. Not opened. Text citation only.

## Tests

`npx tsc --noEmit -p .` shows no batch12 errors. `CASE_BATCH=batch12 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes 45 of 45.
