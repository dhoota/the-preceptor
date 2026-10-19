# Q500 writer report: batch12

Four new oral cases in `src/cases/batch12/`, registered in `BATCH_12`. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`, `durationMinutes: 12`, with the DRAFT first line.

## Cases

| id | title | topic | blueprint | questions per path | longest path | findings | rubric | points H/P/M/Pr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| first-trimester-loss-mechanical-valve | Cramps and clots at dawn | first-trimester-bleeding | obgyn | 8 | 645 s | 16 | 23 (4 critical) | 9/9/12/11 of 41 |
| ice-hut-heater-contact-burns | Found on the floor of an ice hut | burns | enviro | 8 | 660 s | 14 | 22 (3 critical) | 8/10/12/7 of 37 |
| hyperacute-purulent-red-eye | Pink eye that is not getting better | eye | id | 7 | 585 s | 13 | 20 (3 critical) | 7/9/7/9 of 32 |
| intoxicated-driver-hip-dislocation | Hip pain after a late night crash | analgesia-sedation | procedures | 7 | 585 s | 13 | 20 (3 critical) | 7/8/10/7 of 32 |

Each case has 3 branching questions with strong, partial and unsafe choices and consequence nodes, and one escalation on every path.

## Scenarios and key features

1. **first-trimester-loss-mechanical-valve.** Community hospital. A woman at 13 weeks with a mechanical mitral valve on warfarin has heavy bleeding with tissue in the os, orthostatic shock, an INR of 4.6 driven by a new macrolide, no prior scan and Rh D negative blood. Tests shock recognition, speculum and bimanual exam, PCC reversal in a mechanical valve, the limits of hCG and ultrasound without a documented IUP, Rh immune globulin after 12 weeks (IV while anticoagulated), counselling and preconception planning. Key features 1 to 6.
2. **ice-hut-heater-contact-burns.** Rural hospital. A man found down beside a propane heater in an ice hut has carbon monoxide poisoning, deep contact burns of about 9% TBSA, rhabdomyolysis with hyperkalemia and AKI, then forearm compartment syndrome. A friend is a second exposed patient. Tests unreliable pulse oximetry, why no burn formula applies under 20% and why formulas run from the time of injury, burn analgesia, local fasciotomy before a long transfer, hyperbaric discussion and burn centre referral. Key features 1, 3, 4, 5.
3. **hyperacute-purulent-red-eye.** Community hospital. A young man with failed "pink eye" treatment has hyperacute gonococcal keratoconjunctivitis with a corneal infiltrate and disseminated gonococcal infection. Tests acuity first, slit lamp and fluorescein, a private sexual history, ceftriaxone 1 g IV daily rather than the uncomplicated IM dose, advocacy with a reluctant ophthalmologist, confidentiality, reporting and partner notification. Key features 1, 2, 3.
4. **intoxicated-driver-hip-dislocation.** Tertiary centre. An intoxicated driver with a native posterior hip dislocation and a peroneal deficit needs analgesia, a formal pre sedation assessment and ED reduction within 6 hours despite a full stomach. Propofol apnea occurs on every path. Tests titrated opioid in intoxication, sedation planning, apnea rescue, post sedation monitoring to baseline and disposition. Key features 1, 3, 4, 5, 6.

## Duplicate check

I read every existing case and SAMP stem on these four topics before choosing. I avoided: ruptured ectopic in shock (batch07 case), cervical shock and cesarean scar and molar scenarios (SAMPs s10, s38), the house fire inhalation case (batch05), the paediatric immersion scald, hydrofluoric acid and campsite or hunting camp flame burn SAMPs (s04, s26), acute angle closure, giant cell arteritis, zoster, HSV with steroid drops and neonatal gonococcal SAMPs (s10, s37, s11), the shoulder reduction and interpreter ankle cases (batch01, batch10), and the paediatric ketamine laryngospasm, elbow dislocation with sleep apnea, pregnancy ankle and methadone SAMPs (s02, s22). No case in the bank covers a mechanical valve in early pregnancy loss, heater contact burns with rhabdomyolysis, adult gonococcal keratoconjunctivitis or a native hip dislocation.

## Sources and verification

All PubMed records were checked through the NCBI E-utilities (title, authors, journal, year, PMID).

- Pymar H, et al. SOGC Guideline No. 460, intrauterine early pregnancy loss. 2025. https://pubmed.ncbi.nlm.nih.gov/40349974/ (recommendations checked via an excerpt at https://www.tomwademd.net/?p=167592)
- Po L, et al. SOGC Guideline No. 414, pregnancy of unknown location and ectopic pregnancy. 2021. https://pubmed.ncbi.nlm.nih.gov/33453378/
- Fung-Kee-Fung K, et al. SOGC Guideline No. 448, Rh D alloimmunization. 2024. https://pubmed.ncbi.nlm.nih.gov/38553007/ (full text read at https://delphi.sogc.org/wp-content/uploads/2025/02/gui448CPG2404E.pdf, recommendations 8 to 10)
- Otto CM, et al. 2020 ACC/AHA valvular heart disease guideline. J Am Coll Cardiol. 2021. https://pubmed.ncbi.nlm.nih.gov/33342586/ (full text read for bleeding, INR, bridging and pregnancy recommendations)
- National Advisory Committee on Blood and Blood Products. PCC recommendations. 2022. https://profedu.blood.ca/fr/media/5843/download (read, PCC dosing and vitamin K sections)
- Ageno W, et al. Oral anticoagulant therapy. ACCP 9th ed. Chest. 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3278051/ (macrolide interaction table)
- American Burn Association. Guidelines for burn patient referral. 2025. https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral
- Romanowski KS, et al. ABA acute pain guidelines. 2020. https://pubmed.ncbi.nlm.nih.gov/32885244/
- Wolf SJ, et al. ACEP clinical policy, carbon monoxide. 2017. https://pubmed.ncbi.nlm.nih.gov/27993310/ (recommendations read at https://www.acepnow.com/article/acep-clinical-policy-acute-carbon-monoxide-poisoning/2/)
- Shih RD, et al. ACEP clinical policy update, carbon monoxide. 2025. https://pubmed.ncbi.nlm.nih.gov/40118649/ (recommendation read at https://www.acepnow.com/article/new-clinical-policy-for-adult-patients-with-acute-carbon-monoxide-poisoning/)
- Long B, Koyfman A, Gottlieb M. Rhabdomyolysis review. Am J Emerg Med. 2019. https://pubmed.ncbi.nlm.nih.gov/30630682/
- American College of Surgeons. ATLS 10th edition. 2018. Text only, no URL.
- Azari AA, Barney NP. Conjunctivitis. JAMA. 2013. https://pmc.ncbi.nlm.nih.gov/articles/PMC4049531/
- Workowski KA, et al. CDC STI treatment guidelines 2021, gonococcal infections. https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm
- Public Health Agency of Canada. Gonorrhea guide: treatment and follow up. Updated 2026. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html
- Green SM, et al. Unscheduled procedural sedation guideline. 2019. https://pubmed.ncbi.nlm.nih.gov/31029297/
- Godwin SA, et al. ACEP clinical policy, procedural sedation. 2014. https://pubmed.ncbi.nlm.nih.gov/24438649/
- Hachimi-Idrissi S, et al. Updated EUSEM acute pain guidelines. 2026. https://pubmed.ncbi.nlm.nih.gov/41810980/
- Dawson-Amoah K, et al. Dislocation of the hip review. Ochsner J. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/

## Checks

`npx tsc --noEmit -p .` shows no errors in batch12. `CASE_BATCH=batch12 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes 45 of 45, including the CFPC card and score sheet test.

## Needs physician decision

- Case 1. Vitamin K dose in a mechanical mitral valve with major bleeding is left to "a dose agreed with cardiology". The ACC/AHA guideline supports IV vitamin K only when warfarin will not restart for 7 days, while the Canadian PCC document recommends IV vitamin K with PCC. Giving Rh immune globulin IV rather than IM in an anticoagulated patient is reasoning, not a quoted guideline line.
- Case 1. The full text of SOGC 460 was not accessible. Its recommendations were checked through a published excerpt. The speculum removal of tissue from the os is standard practice but is not a quoted line of that guideline.
- Case 2. Hyperkalemia doses (calcium, insulin with dextrose, salbutamol) are standard practice and not quoted in the cited rhabdomyolysis review. The 300 mL/hour urine target comes from the abstract of Long 2019. The ATLS statements (2 mL/kg/% TBSA from the time of injury for burns of 20% or more, compartment syndrome signs, alcohol brief intervention) rest on the 10th edition manual, which I could not open.
- Case 3. The 2026 PHAC gonorrhea page gives no regimen for conjunctivitis or disseminated infection, so the 1 g ceftriaxone doses come from the CDC 2021 guideline. Canadian practice may differ.
- Case 4. Propofol bolus doses are typical practice and not quoted from the cited sources. The capacity and consent item cites the Green 2019 guideline in general terms.
