# Q500 writer report: batch13

Four new oral cases in `src/cases/batch13/`, registered in `BATCH_13` in blueprint order. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`, `durationMinutes: 12`, with the DRAFT first line.

## Cases

| id | title | priorityTopic | blueprint | questions per path | longest path | findings | rubric | points H/P/M/Pr |
|---|---|---|---|---|---|---|---|---|
| late-dinner-chest-pain | Chest pain after a family dinner | chest-pain | cardio | 8 | 615 s | 17 | 19 (4 critical) | 8/7/9/8 of 32 |
| postpartum-headache-return-visit | Back with the same headache | pre-eclampsia | obgyn | 8 | 585 s | 16 | 19 (3 critical) | 8/8/9/8 of 33 |
| boarder-hard-to-wake | Hard to wake before morning rounds | loc | geri | 8 | 570 s | 16 | 18 (3 critical) | 7/7/10/8 of 32 |
| ladder-fall-ankle-sedation | A fall from a ladder | anaphylaxis | procedures | 8 | 570 s | 14 | 18 (3 critical) | 7/5/10/9 of 31 |

Every path has exactly 8 questions. Branching questions: 4, 4, 4 and 3. Stems are 57, 48, 52 and 49 words.

## Scenarios and how they differ from the bank

- **late-dinner-chest-pain.** Spontaneous esophageal rupture after retching, in a man with cardiac and PE risk factors. The ECG, troponin and an antacid response look reassuring and the nurse asks about discharge. He then goes into septic shock with a hydropneumothorax and needs a chest tube before transfer to thoracic surgery. The bank has no oral case on esophageal rupture. The seed chest pain case is aortic dissection in a rural site. The s05 SAMP on rupture gives crepitus in the stem and tests diagnosis only.
- **postpartum-headache-return-visit.** A return visit on day 6 after birth. Two days earlier, one BP of 138/88 was not repeated and the headache was called tension. She now has severe hypertension, HELLP, acute kidney injury and PRES. Labetalol fails, and her partner asks why she was sent home. The existing oral case is antepartum eclampsia with transfer and magnesium toxicity. SAMPs cover postpartum headache, but none has the missed first visit, the need to change drug class or the disclosure.
- **boarder-hard-to-wake.** An older admitted patient boarding in the ED is unresponsive at 05:30. Several causes overlap: hydromorphone and zopiclone, gliclazide hypoglycemia with poor intake and kidney disease, hypercapnia, and an unreported fall on apixaban with a subdural. Hypoglycemia recurs and must not be blamed on the bleed. GCS is tracked by component. The existing LOC oral case is an intoxicated assault victim. SAMP s07 has a sulfonylurea hypoglycemia stem but not this mix of causes or an in-department event.
- **ladder-fall-ankle-sedation.** Anaphylaxis during ED procedural sedation for an open ankle fracture-dislocation. Hypotension and wheeze are first blamed on propofol, and the rash is hidden under the sheet. The cause could be cefazolin, chlorhexidine, fentanyl or propofol, and ongoing antibiotic choice and OR planning depend on it. Allergy testing later finds chlorhexidine. The existing oral case is a sting on a beta blocker. The SAMP bank has chlorhexidine and antibiotic infusion stems but no sedation case and no avoidance plan for the OR.

## Key feature coverage

- chest-pain 1, 2, 3, 5 (risk factors for KF4 are also tested in a history item)
- pre-eclampsia 1, 2, 3, 4
- loc 1, 2, 3, 4, 5
- anaphylaxis 1, 2, 3, 4 (KF4 covers avoidance, the allergist referral and the alert. No autoinjector, because the trigger is a drug in a medical setting.)

## Sources and verification

I checked each source's identity through the Europe PMC API (PMID and DOI match) and confirmed that every DOI or PMC URL resolves. I checked content against full text where I could reach it.

- Gulati M, et al. 2021 AHA/ACC chest pain guideline. Circulation 2021. PMID 34709879. https://doi.org/10.1161/CIR.0000000000001029
- Chirica M, et al. Esophageal emergencies: WSES guidelines. World J Emerg Surg 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/ (full text read: CT with oral contrast, nil by mouth, broad spectrum antibiotics, PPI, endoscopic NG placement, mortality under 10 percent within 24 h vs about 30 percent after)
- Evans L, et al. Surviving Sepsis Campaign 2021. Crit Care Med 2021. https://pubmed.ncbi.nlm.nih.gov/34605781/ (same citation already used in batch10)
- Magee LA, et al. SOGC Guideline No. 426. JOGC 2022. PMID 35577426. https://doi.org/10.1016/j.jogc.2022.03.002 (full text not reachable, 403. Content matches the signed off eclampsia case.)
- ACOG Committee Opinion No. 767. Obstet Gynecol 2019. PMID 30575639. https://doi.org/10.1097/AOG.0000000000003075 (abstract checked: treat within 30 to 60 min, first line agents, consult if refractory)
- Canadian Disclosure Guidelines, CPSI 2011, and the CPSO Disclosure of Harm policy. Same URLs as batch10, both return 200.
- Boyer EW. Management of opioid analgesic overdose. NEJM 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/ (full text read: naloxone 0.04 mg escalating every 2 min, BVM if resp rate 12 or less, duration 20 to 90 min)
- Diabetes Canada 2018 CPG, Hypoglycemia. Can J Diabetes 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14 (read: 10 to 25 g IV glucose, CKD and age as risk factors)
- Glatstein M, Scolnik D, Bentur Y. Octreotide for sulfonylurea poisoning. Clin Toxicol 2012. PMID 23046209. https://doi.org/10.3109/15563650.2012.734626 (abstract read: adults 50 mcg then every 6 h)
- Tomaselli GF, et al. 2020 ACC decision pathway on bleeding with oral anticoagulants. JACC 2020. PMID 32680646. https://doi.org/10.1016/j.jacc.2020.04.053 (ACC summary read: andexanet recommended, PCC if unavailable)
- Teasdale G, et al. The Glasgow Coma Scale at 40 years. Lancet Neurol 2014. PMID 25030516. https://doi.org/10.1016/S1474-4422(14)70120-6
- Cardona V, et al. WAO anaphylaxis guidance 2020. World Allergy Organ J 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/ (full text read: IM 0.01 mg/kg to 0.5 mg, IV only when monitored, antihistamines second line, tryptase peaks at 1 to 2 h, biphasic reactions at 6 to 12 h)
- Golden DBK, et al. Anaphylaxis: a 2023 practice parameter update. Ann Allergy Asthma Immunol 2024. PMID 38108678. https://doi.org/10.1016/j.anai.2023.09.015 (AAAAI PDF read: tryptase rule of 1.2 x baseline + 2)
- Harper NJN, et al. NAP6 management and outcomes. Br J Anaesth 2018. PMID 29935569. https://doi.org/10.1016/j.bja.2018.04.015 (author manuscript read: hypotension is the commonest first feature, 20 mL/kg crystalloid, CPR if systolic under 50, avoid every agent from the prior 60 min and the whole antibiotic class, hidden chlorhexidine, refer to allergy with 120 min of exposures)

## Tests

`npx tsc --noEmit -p . | grep cases/batch13` reports nothing. `CASE_BATCH=batch13 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.

## Needs physician decision

- PCC dose for apixaban reversal: the case uses a fixed 2000 units "per local protocol" when andexanet is unavailable. The ACC pathway gives no dose on the summary page I could read. Many Canadian protocols use a fixed 2000 units.
- The SOGC 426 full text was not reachable. Postpartum points rest on the guideline as cited elsewhere in the bank: magnesium for 24 h, breastfeeding-compatible labetalol, nifedipine and enalapril, and stopping NSAIDs with AKI and falling platelets. Please confirm them against the PDF.
- The postpartum BP target after crisis control ("about 140 to 150 over 90 to 100") follows ACOG practice. SOGC targets a diastolic of 85 in pregnancy.
- Chest tube size for the esophageal leak is deliberately not specified.
- Anaphylaxis case: the epinephrine infusion dose (0.05 to 0.1 mcg/kg/min) appears in the model answer only. Clindamycin is named as an example of a non beta lactam for the open fracture.
- The LOC stem uses the required "when the following patient arrives" opening although he is already a boarded inpatient. The same compromise was made in batch10 `waiting-room-slump`.
