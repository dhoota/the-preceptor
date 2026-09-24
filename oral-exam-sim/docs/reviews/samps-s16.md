# SAMP batch s16 review: seizures and shock

Adversarial review of `src/samps/s16/seizures.ts` and `src/samps/s16/shock.ts`. All 30 SAMPs keep `reviewed: false` and their ids. No question ids changed.

Checks after the edits:

- `npx tsc --noEmit -p . 2>&1 | grep samps/s16` gives no output.
- `SAMP_BATCH=s16 npx vitest run tests/samps.test.ts` passes, 94 of 94.
- I also ran sample answers through `markShort` to confirm the changed keys behave as intended. For example, "Give furosemide" in tamponade now scores zero as dangerous, and "Tylenol will prevent seizures" no longer earns credit.

Verdicts: Accurate means no clinical change was needed. Corrected means I fixed errors. Needs physician attention means a judgment call is left open.

---

## Seizures

### seizures-01 Man seizing on arrival by ambulance. Corrected

1. q1 prompt. Before: "List THREE immediate interventions ... to manage his airway and breathing." After: "His breathing is snoring and shallow. List THREE interventions ... to improve his oxygenation and ventilation now." This moves it further from the CFPC sample case of an adult seizing after EMS midazolam, which opens with a positioning question. The key is unchanged.
2. q2 explanation. Before: said one repeat benzodiazepine is appropriate. After: says the paramedic IM dose counts as the first benzodiazepine, as TREKK states, so one more dose is right. Going straight to a fully dosed second line agent is also defensible, but no option offers that. Levetiracetam 1000 mg is an underdose. The lorazepam 4 mg key stands.
3. q3 phenytoin. Before: key text had no calculated dose and matched "phenytoin 1500". After: 20 mg/kg is 1600 mg for 80 kg, and the match is "phenytoin 1600". The 1500 mg cap belongs to fosphenytoin in ESETT, not phenytoin.
4. q3 explanation now notes that IV valproate is available in Canada only through Health Canada's Special Access Program.

ESETT doses were rechecked. Levetiracetam 60 mg/kg with a 4500 mg maximum, fosphenytoin 20 mg PE/kg with a 1500 mg PE maximum, and valproate 40 mg/kg with a 3000 mg maximum are correct for adults. The CFPC sample also uses the IM to IV benzodiazepine sequence, but the stem and questions here are original.

### seizures-02 Toddler with ongoing jerking. Corrected

1. Levetiracetam. Before: only 60 mg/kg (900 mg) accepted. After: 40 to 60 mg/kg (600 to 900 mg) accepted. TREKK version 1.1 (2025) lists 60 mg/kg with a **3000 mg** maximum, not 4500 mg. The 4500 mg cap is the adult ESETT figure. It does not matter at 15 kg, but the explanation now quotes the TREKK maximum.
2. q1 explanation. After: TREKK also allows a standard intranasal dose of 5 mg for 13 to 40 kg. 7.5 mg is a buccal dose (0.5 mg/kg), not an intranasal one. Lorazepam 4 mg IM exceeds 0.1 mg/kg. The 3 mg key (0.2 mg/kg, maximum 10 mg) is correct.
3. Valproate caveat. TREKK restricts IV valproate to age 2 and older and urges caution with liver dysfunction, mitochondrial or urea cycle disease, thrombocytopenia or unexplained developmental delay. The explanation now names liver disease. Accepting valproate 40 mg/kg for a 3 year old is consistent with TREKK.
4. Levetiracetam at home. Before: "a full load is still appropriate, but fosphenytoin is a reasonable alternative." After: many clinicians still give a full load, others choose fosphenytoin, and both are accepted. TREKK gives this advice for home phenytoin but says nothing about home levetiracetam.
5. q4. Before: the bare word "infusion" earned credit, so "fluid infusion" would match. After: the match needs a named continuous infusion (midazolam, ketamine, propofol or pentobarbital) or the phrase "continuous infusion". The explanation now follows TREKK: a different second line agent next, then infusion and EEG after two fail.
6. Citations. The CPS statement is now the 2021 update (McKenzie, Hahn, Friedman), which replaced the 2011 "generalized convulsive" statement. TREKK is now dated version 1.1, 2025.

### seizures-03 Seizure in the third trimester. Corrected (minor)

The magnesium loading time changed from "over 5 to 15 minutes" to "over 15 to 20 minutes", the usual SOGC and ACOG wording. The doses of magnesium 4 g then 1 g/h, 2 g for a recurrent seizure, and calcium gluconate 1 g were all confirmed. The labetalol, nifedipine and hydralazine starting doses are correct. The pre-eclampsia key feature 4 labels on q2 and q4 fit.

### seizures-04 Seizures that do not stop. Corrected

1. Pyridoxine. Before: "1 g per gram ingested, or 5 g if unknown, so about 5 g." After: 1 g per gram ingested, usually 5 g as the first dose, repeated if seizures continue. The ingestion here could be up to 18 g (60 tablets of 300 mg), so the explanation now says to give 5 g now and repeat. It also accepts 70 mg/kg.
2. Resemblance. The CFPC sample 2840 also uses isoniazid and pyridoxine as its twist. This case differs in patient, presentation, acidosis data and every question. I judged it original, but the physician may prefer a different toxin.

### seizures-05 Seizure in a man found at work. Corrected

1. Driving key, q4. Before: "Physician report ... as severe hypoglycemia is reportable", with an explanation stating an Ontario duty although the stem gives no province. After: "Report to the provincial licensing authority where required, and tell him a report may be made." The explanation now covers the national picture. In Ontario, sudden incapacitation with a moderate or high risk of recurrence is mandatory to report. A clearly provoked event whose cause has been corrected may be discretionary.
2. Glucose advice. Before: do not drive below 5 mmol/L. After: do not drive under 4 mmol/L, and keep glucose above 5 while driving, per Diabetes Canada.
3. q4 source changed from the Highway Traffic Act to the CMA Driver's Guide. HTA was removed from this SAMP's sources.

### seizures-06 Seizure after a long run. Corrected (minor)

The key text now reads 100 to 150 mL of 3% saline over 10 to 20 minutes, up to 3 times, and 2 mL/kg in a child. The 2014 European guideline gives 150 mL over 20 minutes repeated twice. Consensus on exercise associated hyponatremia gives 100 mL boluses up to three. The correction limit key now reads "8 to 10 mmol/L" and accepts either. This matches the European limit of 10 in the first 24 h and the common target of 8 or less in high risk patients.

### seizures-07 Collapse at the pool. Corrected (source)

The ESC 2015 ventricular arrhythmia guideline was replaced with the current 2022 ESC guideline (Zeppenfeld). Clinically the case is accurate. Swimming points to LQT1 and an auditory trigger points to LQT2, which the explanation already covers.

### seizures-08 Found on the kitchen floor. Corrected

1. Stem. Added "You work in Ontario" so the HTA question is fair in a national app.
2. q4 driving. Before: "usually at least 3 months seizure free for a private licence." That is the rule for a single unprovoked seizure. His old infarct is a structural cause, which makes epilepsy likely, and the CMA guide then advises 6 months seizure free on treatment. The key now says at least 3 months, or longer if epilepsy is diagnosed, and accepts 6 months.
3. Explanation. Before: "Ontario physicians must report patients 16 and older with a first seizure." After: the explanation quotes the regulation. A seizure is sudden incapacitation, and reporting is mandatory when the risk of recurrence is moderate or high, which his structural lesion makes clear.

### seizures-09 Young adult after an event at a party. Needs physician attention

q5 explanation. Before: said the HTA requires reporting "prescribed medical conditions, including seizures". After: it quotes the regulation test (sudden incapacitation with moderate or high recurrence risk) and says a first unprovoked seizure is generally treated as reportable until neurology shows otherwise. The liability statement now reads that no action can be brought against a physician for reporting, as in HTA s.203.

**Open point.** I could not read the MTO physician guide (form 5108E guide), because the PDF would not extract. So I could not confirm that MTO lists a first unprovoked seizure by name as mandatory. A 24 year old with sleep deprivation and alcohol could be argued to be at lower recurrence risk. The key accepts "report", which is right for a commercial driver in any case. A physician should confirm the wording.

CCMTA and CMA timelines were confirmed: 3 months for a private licence after a single unprovoked seizure and 12 months for commercial.

### seizures-10 Woman with a seizure at the mall. Corrected (mapping)

q4 is about refills and pharmacy support, so it was relabelled from key feature 5 (driving) to key feature 7 (known epilepsy and adherence). The source changed from the CMA Driver's Guide to Rosen's, and the CMA guide was removed from this SAMP's sources. Key feature 5 is still covered by seizures-05, 08 and 09.

### seizures-11 Toddler after shaking at daycare. Corrected

1. Originality. q1 was a menu asking which investigations are required, with "None" as the answer. That closely mirrors CFPC sample case 1, question 2 (febrile seizure investigations with "None"). It is replaced by a short answer: "List THREE features ... that make this a simple febrile seizure." Accepted answers are generalized, under 15 minutes, a single seizure, full recovery, age 6 months to 5 years, and a normal exam. The explanation keeps the teaching that no tests are needed.
2. q4 scoring bug. Before: the antipyretic item matched the bare words "prevent" and "antipyretic". A parent teaching point of "Tylenol will prevent seizures", which is wrong, earned credit. After: the match needs "not prevent" or similar, or "comfort". This was confirmed with the scorer.
3. The dangerous flag on ASA in a febrile toddler is fair because of Reye syndrome risk with a viral illness.

### seizures-12 Infant with episodes of crying and jerks. Corrected (mapping)

q3 asked for the first line drug for tuberous sclerosis spasms and was labelled key feature 6 (investigating the cause). That drug choice is a neurology decision and did not test the key feature. It is now a single best answer: "Which investigation is most likely to show the underlying cause?" The key is MRI brain. EEG, CT, LP, ammonia and lactate, and skull X-ray are the distractors. The vigabatrin teaching remains in the explanation.

### seizures-13 Seizure in a man who stopped drinking. Corrected (source)

The CRISM title was corrected to "Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder" (2023). The clinical content is accurate.

### seizures-14 Confusion and a strange smell. Accurate

Acyclovir 10 mg/kg is 700 mg. Levetiracetam 60 mg/kg is 4200 mg, under the 4500 mg cap. Fosphenytoin is 1400 mg PE and valproate is 2800 mg. IDSA 2008 is real.

### seizures-15 Newborn with odd movements. Corrected

1. Doses. Phenobarbital 20 mg/kg is 64 mg and acyclovir 20 mg/kg every 8 hours is 64 mg (CPS neonatal HSV). Both are correct.
2. Cephalosporin item. Before: "Cefotaxime 50 mg/kg, or gentamicin 4 mg/kg if cefotaxime is unavailable." After: cefotaxime, or ceftazidime 50 mg/kg during a cefotaxime shortage. Gentamicin is still accepted but described as covering meningitis poorly. A seizing neonate may have meningitis, so a third generation cephalosporin is preferred.
3. Ceftriaxone. I kept it as unacceptable, but not dangerous, and reworded the reason. It displaces bilirubin and precipitates with IV calcium, and a seizing 9 day old may need calcium. Ceftazidime is the usual substitute for cefotaxime in this age group. I think this is fair for a 9 day old. It would not be fair for an infant over 28 days. See the open questions.

---

## Shock

### shock-01 Toddler with vomiting and diarrhea. Corrected

1. q4 asks for volume and time frame. Before: "4 hours" alone, or a volume alone, earned credit. After: a shared `MATCH_ORT` list requires both a volume (50 to 100 mL/kg, or 500 to 1000 mL) and 4 hours.
2. Rechecked and correct: the four Clinical Dehydration Scale items and score bands, a 600 mL deficit from the weight change of 0.6 kg (5.7 percent), and ondansetron weight bands of 2 mg for 8 to 15 kg.
3. The dangerous flag on loperamide in a 14 month old is fair. It is contraindicated at this age because of ileus, CNS depression and deaths in case reports.

### shock-02 Sleepy baby with diarrhea. Accurate, with a mapping note

Rechecked: 20 mL/kg is 120 mL, D10W 5 mL/kg is 30 mL, 2 mL/kg is 12 mL, and a deficit of 10 to 15 percent of 6 kg is 600 to 900 mL. The dangerous flag on D50W in an infant is fair. It is hyperosmolar and sclerosing through a small vein or an IO, and D10W is the standard. The IO question (q2) is labelled shock key feature 3 (choice of resuscitation fluid). No shock key feature covers vascular access, so I left it.

### shock-03 Nursing home resident who is not herself. Accurate

The key uses 30 mL/kg (1.8 L), which Surviving Sepsis 2021 gives as a weak "suggest". The explanation already says "suggests" and advises boluses with reassessment. Peripheral norepinephrine is supported by SSC 2021. Hydroxyethyl starch is correctly a wrong option. The unused 6S trial entry was removed from the source map.

### shock-04 Pregnant driver after a collision. Accurate

O RhD negative red cells, Rh immune globulin 300 mcg covering about 30 mL of fetal whole blood, Kleihauer Betke testing and left uterine displacement all match SOGC 2015 (Jain et al.).

### shock-05 Motorcyclist after a crash. Corrected (mapping)

TXA q3 was relabelled from multiple trauma key feature 6 (fluid and blood targets) to shock key feature 8 (non fluid therapies). The dosing is correct: 1 g over 10 minutes then 1 g over 8 hours, within 3 hours. The binder is correctly centred on the greater trochanters.

### shock-06 Diver pulled from the lake. Corrected

MAP target. Before: 85 to 90, with 80 accepted. After: the key accepts 75 to 95. It cites the 2024 AO Spine and Praxis guideline (Kwon et al., Global Spine J 2024), which suggests a lower limit of 75 to 80 and an upper limit of 90 to 95 for 3 to 7 days. It keeps the 2013 target of 85 to 90. 65 is still rejected. The AO Spine source was added.

### shock-07 Collapse at a barbecue. Corrected

1. q3 asks why his medications make this dangerous, but it was labelled shock key feature 8 (non fluid therapy). It is now key feature 1 (subtle shock in atypical groups), because a beta blocker hides tachycardia.
2. q4. Before: the bare word "avoid" earned credit, so any line containing "avoid" matched. After: the match needs "avoidance", "avoid sting", "avoid insect" or similar.
3. The dangerous flag on a 1 mg IV epinephrine bolus in anaphylaxis with a pulse is fair. It is the arrest dose and causes arrhythmia and myocardial ischemia.

### shock-08 Grey and sweaty man with chest pain. Corrected (mapping)

q3 (PCI, antiplatelets, mechanical support) was relabelled from shock key feature 5 to ischemic heart disease key feature 6 (rapid reperfusion). The explanation now notes that routine balloon pumps did not improve survival.

### shock-09 Collapse after knee surgery. Corrected

1. q4 asks for dose and duration. Before: "alteplase 100" alone, "alteplase 90" (the stroke maximum, not a PE regimen), or "tenecteplase" with no dose all scored. After: alteplase 100 mg must be given with 2 hours. Tenecteplase is accepted only as a weight based dose (45 mg for 82 kg) and marked as off label.
2. q3. Before: dobutamine alone was accepted as the vasoactive drug for a patient with a BP of 78/48. After: it was removed, because dobutamine alone lowers pressure. The explanation says it may be added once pressure is supported.
3. Fluid of 500 mL or less and alteplase 100 mg over 2 hours match ESC 2019.

### shock-10 Vomiting woman with low pressure. Accurate

Hydrocortisone 100 mg IV, then 200 mg per 24 hours or 50 mg every 6 hours, matches the Endocrine Society 2016 guideline.

### shock-11 Man found with empty pill bottles. Corrected

1. q2 asks for dose and route. Before: "HIET", "high dose insulin" and "norepinephrine" scored without a dose. After: insulin needs 1 unit/kg or 100 units. Norepinephrine must be named as an infusion or titration, which is its dose form.
2. q4 rescue menu. I kept VA ECMO and lipid emulsion. In refractory shock, St-Onge 2017 suggests VA ECMO where cardiogenic shock is present, and lipid emulsion if it has not been given. Incremental insulin up to 10 units/kg/h is already used up in the stem. Methylene blue is not graded by the consensus and targets vasoplegia. The echo shows pump failure, so the menu is defensible. The explanation now says this directly.

### shock-12 Feverish child with spots. Corrected (minor)

"Ceftriaxone 1 g" was removed from the accepted matches. For 14 kg that is about 71 mg/kg, an underdose when meningitis is possible. 100 mg/kg is 1.4 g, with a 2 g maximum. 80 mg/kg is still accepted. Fluid boluses of 10 to 20 mL/kg, up to 40 to 60 mL/kg with ICU care available, and epinephrine for cold shock match SSC 2020 for children.

### shock-13 Older man who fainted in the bathroom. Corrected

1. PCC. Before: "50 units/kg or a fixed 2000 units". After: the Thrombosis Canada wording, a fixed 2000 units or 25 to 50 units/kg to a maximum of 3000 units, with andexanet where available. This was verified in the Thrombosis Canada guide.
2. TXA stays unacceptable and is not flagged dangerous. That is appropriate. HALT-IT showed no mortality benefit and more venous events, and Thrombosis Canada notes no supporting evidence for DOAC bleeding.

### shock-14 Dry and drowsy after a heat wave. Corrected

1. Free water deficit recomputed: 0.45 x 50 x (168/140 minus 1) = 22.5 x 0.2 = 4.5 L. With 0.5 it is 5.0 L, and with 0.6 it is 6.0 L. The key is correct.
2. q4 was labelled shock key feature 1 but asked for general contributors. It is rewritten to "Besides water loss, list TWO other conditions that could be causing or worsening her shock" and relabelled key feature 5. Accepted answers are sepsis, heat stroke, MI, occult bleeding, adrenal insufficiency, medications and PE. Rhabdomyolysis and neglect are kept in the explanation.

### shock-15 Breathless woman with cancer. Corrected

q4 unacceptable. Before: one item flagged both diuretics and fluid restriction as dangerous, and it did not match the plain word "furosemide". After: a diuretic (furosemide, Lasix or diuretic) is dangerous, which is fair because it can precipitate arrest in a preload dependent patient. Fluid restriction is unacceptable but not dangerous. Negated lines such as "no furosemide" are not penalised.

---

## Sources verified

- TREKK status epilepticus, version 1.1, May 2025. I read the PDF. It gives midazolam 0.2 mg/kg IN or IM (maximum 10 mg, standard 5 mg for 13 to 40 kg), no more than two benzodiazepine doses including prehospital doses, levetiracetam 60 mg/kg (maximum 3000 mg), fosphenytoin 20 mg PE/kg (maximum 1000), and valproate 40 mg/kg from age 2 through the Special Access Program. https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/
- CPS 2021 statement, McKenzie KC, Hahn CD, Friedman JN, Paediatr Child Health 2021, volume 26, pages 50 to 57. I confirmed the citation. The full dosing table is paywalled and was not read. https://cps.ca/en/documents/position/emergency-management-of-the-paediatric-patient-with-convulsive-status-epilepticus
- CMA Driver's Guide, 10th edition, nervous system section. It gives 3 months (private) and 12 months (commercial) after a single unprovoked seizure, 6 months on treatment for epilepsy, and no seizure restriction for other provoked seizures once the cause resolves. https://driversguide.ca/sections/nervous-system
- Ontario reporting. Mandatory categories since July 2018 are listed at https://www.ontario.ca/page/reporting-driver-medical-review. The sudden incapacitation wording is confirmed through the COTO summary at https://www.coto.org/resources/discretionary-reporting-of-fitness-to-drive-2024/.
- Thrombosis Canada, DOACs: management of bleeding. I read the PDF. https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf
- AO Spine and Praxis 2024 hemodynamic guideline (Kwon BK et al., Global Spine J 2024). https://journals.sagepub.com/doi/full/10.1177/21925682231202348
- St-Onge M et al., Crit Care Med 2017, volume 45, e306. https://journals.lww.com/ccmjournal/fulltext/10.1097/ccm.0000000000002087
- Recognised as real from citation details, with no URL added: ESETT (NEJM 2019), AES 2016, NCS 2012, AAP febrile seizure 2011, ACEP seizure policy 2014, AAN and AES first seizure 2015, SOGC Guideline No. 426 (2022), Spasovski 2014, ESC ventricular arrhythmia 2022, IDSA encephalitis 2008, Pellock 2010, CPS neonatal HSV, WHO neonatal seizures 2011, CRISM 2023, SSC 2021, SSC paediatric 2020, SMART 2018, Friedman 2004 dehydration scale, Freedman 2006 ondansetron, CPS oral rehydration statement, ATLS 10th edition, CRASH-2, PROPPR, SOGC trauma 2015, Walters 2013, WAO 2020, AHA cardiogenic shock 2017, SOAP II, ESC PE 2019, Perera RUSH 2010, Bornstein 2016, Barkun 2019, Villanueva 2013 and Adrogue and Madias 2000.
- Removed from the source maps as never cited: the 6S trial (shock) and the CCMTA standard (seizures).

## Open questions for the physician

1. Ontario and a first unprovoked seizure (seizures-09 q5). Is it named as mandatory in the MTO guide, or left to the recurrence risk judgment? The key accepts reporting either way.
2. Ceftriaxone in a 9 day old (seizures-15). Some Canadian centres use ceftriaxone after the first week when cefotaxime is short, if the infant is not jaundiced and not receiving IV calcium. I kept it unacceptable because this neonate is seizing and may need calcium. Should it be accepted as a shortage alternative instead?
3. Gentamicin as the second agent in a seizing neonate (seizures-15). It is accepted, but meningitic coverage favours cefotaxime or ceftazidime. Should it lose credit?
4. Levetiracetam at 40 mg/kg in children (seizures-02). It is accepted as the writer asked, but TREKK uses 60 mg/kg. I could not read the CPS 2021 table to confirm that 40 mg/kg appears there.
5. Tenecteplase for massive PE (shock-09). It is accepted off label at a weight based dose. Remove it if the key should reflect ESC regimens only.
6. seizures-04 uses isoniazid, the same twist as CFPC sample 2840. The case is otherwise original. Swap the toxin if you want no overlap at all.
7. The IO question in shock-02 has no exact shock key feature. It is mapped to key feature 3.

## Summary

- Seizures: 14 of 15 SAMPs corrected. seizures-14 was accurate. seizures-09 needs physician attention on Ontario reporting.
- Shock: 11 of 15 SAMPs corrected. shock-02, 03, 04 and 10 were accurate.

The most serious problems were scoring errors, not dosing errors:

- A wrong parent teaching point earned credit in seizures-11.
- Answers without the required dose or duration scored in shock-01, shock-09 and shock-11.
- Dobutamine alone was accepted for a hypotensive PE in shock-09.
- Furosemide in tamponade was not caught as dangerous in shock-15.

Clinical fixes:

- The phenytoin dose in seizures-01.
- The driving period after a seizure with a structural cause in seizures-08.
- The pyridoxine regimen in seizures-04.
- PCC dosing in shock-13.
- The newer spinal cord MAP range in shock-06.

Key feature labels were corrected in 5 questions. The seizures-12 q3 question was rewritten to fit its key feature, and one CFPC look-alike question in seizures-11 was replaced. All the writer's dangerous flags were judged fair: ASA in a child, loperamide in a toddler, D50W in an infant, a 1 mg IV epinephrine bolus in anaphylaxis, and furosemide in tamponade.
