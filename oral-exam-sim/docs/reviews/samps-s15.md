# Review of SAMP batch s15: Pre-eclampsia and pulmonary edema

Reviewer: adversarial review against current Canadian and international guidance, from an emergency physician's view with obstetric medicine and cardiology in mind. Files reviewed: `src/samps/s15/pre-eclampsia.ts` and `src/samps/s15/pulmonary-edema.ts` (30 SAMPs, 106 questions). All SAMPs keep `reviewed: false`. Ids are unchanged.

Checks after edits: `tsc` shows no s15 errors. `SAMP_BATCH=s15 vitest` passes 94 of 94.

## Key feature coverage

Pre-eclampsia after edits: KF1 6 questions, KF2 8, KF3 7, KF4 10. Pulmonary edema after edits, within its own 15 SAMPs: KF1 7, KF2 8, KF3 8, KF4 9, KF5 6, KF6 5. Two pre-eclampsia SAMPs add KF1 and KF5 questions. Every key feature is covered in both topics.

I counted 34 questions keyed to other topics (23 in pre-eclampsia, 11 in pulmonary edema), not 25. Most test the secondary key feature they name and were left alone. I remapped three that test their own topic:

- pre-eclampsia-04 q4 (BP control, fetal monitoring, obstetric planning after eclampsia): seizures 4 to pre-eclampsia 4.
- pre-eclampsia-06 q3 (magnesium plus obstetric consultation for delivery): seizures 4 to pre-eclampsia 4.
- pulmonary-edema-02 q2 (first vasoactive drug in cardiogenic shock with pulmonary edema): shock 7 to pulmonary-edema 4 ("escalate with vasoactive drugs").

pre-eclampsia-04 q2 and pre-eclampsia-13 q3 (magnesium for eclampsia) stay on seizures 4, because that key feature names eclampsia.

## Pre-eclampsia

### pre-eclampsia-01 Headache at 36 weeks. Corrected

The rise from 104/62 to 138/88 is 34/26 mmHg. That is correct.

- q1 gestation item. Before: matched only "20 week" and "third trimester". After: also matches "36 week", "late pregnancy" and "gestational age".
- q2 key. Before: urine protein matched only "urine protein" or "dipstick", so "urine PCR" scored nothing. Liver tests matched only "ast" or "alt". After: adds "pcr", "upcr", "protein creatinine", "proteinuria", "urinalysis", "liver enzyme", "lft", "transaminase", "ptt" and "coagulation".
- A PCR of 30 mg/mmol or more is correct (SOGC and ISSHP).
- NSAIDs unacceptable after 20 weeks and ergots dangerous: fair. Ergots cause vasoconstriction in a patient who may have pre-eclampsia.

### pre-eclampsia-02 Epigastric pain at 33 weeks. Accurate

HELLP criteria are correct. Magnesium 4 g then 1 g/h and betamethasone 12 mg IM, 2 doses 24 hours apart, are correct. SOGC 364 recommends steroids from 24+0 to 34+6 weeks. No changes.

### pre-eclampsia-03 Postpartum headache. Corrected

- q2 unacceptable. Before: caught only "sublingual nifedipine". After: also catches bitten or chewed nifedipine. Hydralazine 20 mg IV is added as unacceptable. It was already excluded from the key.
- q3 PRES key. Adds "posterior encephalopathy". See the PRES note under open questions.
- Doses checked: labetalol 20 mg IV, nifedipine immediate release 10 mg PO, hydralazine 5 mg IV. All are correct.

### pre-eclampsia-04 Seizure at 30 weeks. Corrected

- q2 explanation. Adds that 10 g IM magnesium (5 g into each buttock) is an alternative while IV access is delayed. The stem says she has no IV.
- q3 explanation. A further 2 g IV over 5 minutes is SOGC practice. The explanation now notes that ACOG allows 2 to 4 g.
- q4 remapped to pre-eclampsia 4.

### pre-eclampsia-05 Magnesium toxicity. Corrected

A level of 5.9 mmol/L with absent reflexes and a respiratory rate of 9 is consistent. Loss of reflexes occurs at about 3.5 to 5 mmol/L and respiratory depression at about 5 to 6.5 mmol/L. This is now stated in the q2 explanation. Calcium gluconate 1 g IV is correct.

- q1 "rate" item. Before: matched the single word "rate", so "low respiratory rate" scored as the pump error. After: "double rate", "infusion rate", "wrong rate", "2 g/h", "pump", "programming", "medication error", "overdose". Adds "hypermagnesemia" to the toxicity item.
- q2 stop item. Before: "discontinue magnesium" scored nothing. After: matches "discontinue" and "turn off" or "pause magnesium".

### pre-eclampsia-06 Confusion at term. Corrected

The GCS of E3 V4 M6 is 13. That is correct. q3 is remapped to pre-eclampsia 4.

### pre-eclampsia-07 HELLP with gallstones. Accurate

The labs are consistent. Hemorrhagic shock from a ruptured liver hematoma or an abruption is a reasonable next step. No changes. TXA is accepted as one step. See open questions.

### pre-eclampsia-08 Twins in a rural department. Corrected

- q2 explanation. Before: "At less than 32 weeks, magnesium also provides fetal neuroprotection." After: SOGC 376 (2019) recommends considering magnesium for fetal neuroprotection up to 33+6 weeks when preterm birth is imminent or planned.
- Labetalol 20 mg IV, then 20 to 80 mg every 30 minutes to 300 mg, is correct.

### pre-eclampsia-09 Postpartum dyspnea. Accurate

Treating a fluid bolus as dangerous in pre-eclampsia pulmonary edema is fair. Limiting total fluids to about 80 mL/h is standard SOGC practice. No changes.

### pre-eclampsia-10 Visual loss at 32 weeks. Corrected

- q3. Before: "Significant proteinuria" was accepted as a sign of severe disease. After: it is removed and listed as unacceptable. Neither SOGC, ISSHP nor ACOG uses the amount of proteinuria to define severity. The creatinine statement is now cited to ISSHP, which uses creatinine of 90 µmol/L or more as kidney involvement. The source changed from SOGC to ISSHP, and ISSHP is added to the SAMP sources.

### pre-eclampsia-11 Chronic hypertension at 26 weeks. Accurate

The superimposed pre-eclampsia criteria and the PCR step are correct. SpO2 below 97% is an SOGC adverse condition. No changes.

### pre-eclampsia-12 Vomiting teenager with AFLP features. Corrected

- q3. Before: magnesium sulfate was accepted as an immediate treatment for drowsiness from hypoglycemia in probable acute fatty liver with a creatinine of 138. After: removed. It does not treat the deterioration, and it builds up in renal failure.

### pre-eclampsia-13 Late postpartum seizure. Corrected

Imaging, magnesium and counselling are correct. The only change is the PRES match phrase, as in 03.

### pre-eclampsia-14 Severe BP with asthma. Accurate

Avoiding labetalol in severe asthma is correct. The target of below 160/110, then a diastolic of about 85, matches SOGC and CHIPS. No changes.

### pre-eclampsia-15 Molar pregnancy. Corrected

- Source. Before: an undated SOGC GTD guideline. After: Eiriksson L, et al. Guideline No. 408: Management of gestational trophoblastic diseases. J Obstet Gynaecol Can. 2021.
- q3 explanation, anti-D. Before: "Rh negative patients are usually given anti-D immune globulin at evacuation." After: SOGC 408 (2021) offers anti-D after evacuation. SOGC 448 (2024) says it is not required once a complete mole is certain, but suggests 300 µg for pregnancy loss after 12 weeks. Giving it here is reasonable, because the diagnosis is not certain until pathology. Anti-D stays an accepted answer.
- q3 unacceptable. Before: only "misoprostol". After: also "medical evacuation", "mifepristone", "prostaglandin" and "oxytocin induction". SOGC 408 recommends vacuum evacuation or hysterectomy.
- q2 PCR key broadened as in 01.

### Sources, pre-eclampsia

- The Magpie trial entry was defined but never cited. It has been removed.

## Pulmonary edema

### pulmonary-edema-01 Hypertensive pulmonary edema. Accurate

The q2 high dose nitroglycerin regimen (0.4 mg SL every 5 minutes while an infusion starts at 50 to 100 mcg/min and is titrated up quickly) is fair, and the slow 5 mcg/min titration is a fair distractor. Tintinalli is an honest source for this. ESC 2021 lists lower starting doses, so no guideline source was added. No changes.

### pulmonary-edema-02 STEMI with cardiogenic shock. Corrected

- q1 explanation. Before: "CCS guidance favours transfer for primary PCI in cardiogenic shock even when delays exceed the usual targets." This is not what CCS says. CCS 2019 recommendation 18 suggests considering fibrinolysis before transfer in cardiogenic shock when excessive delays to catheterization are expected (weak, very low quality evidence). After: with about 80 minutes of transport, emergent transfer for primary PCI is preferred, and CCS suggests fibrinolysis before transfer only for excessive delays. The keyed answer is unchanged. The only fibrinolysis option also keeps him at a non-PCI hospital, so it is still wrong.
- q2 remapped to pulmonary-edema 4.
- q3 key. Before: "Nitrates are contraindicated" scored zero, because the engine reads the word after as negation. After: adds "nitrate contraindicated", "beta blocker contraindicated", "morphine contraindicated", "ace inhibitor contraindicated" and similar phrases. "Hold ASA" and "hold heparin" are now caught as unacceptable. Before, they were silently negated.

### pulmonary-edema-03 Cardiac asthma. Accurate

An NT-proBNP below 300 pg/mL to rule out heart failure is correct. No changes.

### pulmonary-edema-04 Missed dialysis. Corrected

- q4 calcium. Before: calcium gluconate 1 g was accepted. After: removed, and 2 g or 20 mL is added. A wide complex rhythm with a potassium of 7.4 needs 3 g of gluconate (15 to 30 mL of 10% per AHA) or 1 g of chloride. The explanation now says 1 g is too little.
- Insulin 10 units IV with dextrose 25 g, and 5 units accepted, is fine. Salbutamol 10 to 20 mg nebulized is correct. Kayexalate unacceptable is fair.

### pulmonary-edema-05 AF in decompensated HFrEF. Corrected

- q3 explanation. Before: "CCS guidance favours amiodarone or digoxin." After: CCS/CHRS 2020 says IV digoxin or amiodarone "might be considered" for acute rate control in decompensated heart failure or an LVEF of 40% or less. The key is unchanged and correct. Ibutilide and procainamide are fair distractors.

### pulmonary-edema-06 Anemia with congestion. Corrected

- q3 key. Before: the slow rate item matched the single word "rate", and the target item matched "80", so "furosemide 80 mg" could score as the Hb target. After: "infusion rate", "slower rate", "hb 80", "80 g/l", "restrictive".
- Explanation. The Canadian Blood Services guide (Chapter 10) supports one unit at a time, a slower rate and a diuretic. It gives no mL/kg/h figure. The explanation now says "many protocols use about 1 mL/kg/h" instead of attributing that number to CBS.

### pulmonary-edema-07 Discharge after heart failure. Corrected

- Source. Before: "Stiell IG and colleagues. Ottawa Heart Failure Risk Scale derivation and validation studies." After: Stiell IG, Clement CM, Brison RJ, et al. A risk scoring system to identify emergency department patients with heart failure at high risk for serious adverse events. Acad Emerg Med. 2013. With the prospective validation, Stiell IG, et al. Acad Emerg Med. 2017.
- The walk test criteria (SpO2 below 90% or HR of 110 or more during a 3 minute walk) are correct. The q2 keyed option (87% and 118) is right. Follow-up within 7 to 14 days matches CCS.

### pulmonary-edema-08 NIV failure. Accurate

The NIV failure criteria, RSI with ketamine and norepinephrine ready, and ventilator settings are correct. No changes.

### pulmonary-edema-09 Subacute HFrEF. Accurate

No changes.

### pulmonary-edema-10 Peripartum cardiomyopathy. Accurate

Treating a fluid bolus as dangerous in peripartum cardiomyopathy with pulmonary edema (BP 112/74, crackles, B lines) is fair. No changes.

### pulmonary-edema-11 Papillary muscle rupture. Corrected

- q1. Before: right ventricular infarction was accepted as a mechanical complication that explains pulmonary edema. After: it is unacceptable, because RV infarction causes clear lungs. The aneurysm item now reads "LV aneurysm or pseudoaneurysm".
- q1 source. Before: CCS 2019 STEMI, which covers regionalization and reperfusion and does not discuss mechanical complications. After: Tintinalli. CCS STEMI is removed from this SAMP's sources.
- q2. A beta blocker as dangerous in acute MR with BP 86/54 is fair. It removes compensatory tachycardia and contractility in a patient already in shock. An IABP is correctly accepted here.

### pulmonary-edema-12 TACO. Corrected

- q3 slow rate item. Before: matched "rate". After: "infusion rate", "over 3", "over 4".
- The infusion rate of 250 mL/h in 60 kg is about 4 mL/kg/h. That fits TACO.

### pulmonary-edema-13 NSAID decompensation. Corrected

DOSE check: the home dose is 80 mg PO twice daily, which is 160 mg a day. DOSE compared IV doses of 1 times and 2.5 times the daily oral dose, which is 160 to 400 mg IV a day. 160 mg IV is at the low end and correct. 20 mg IV is inadequate.

- q3 NSAID item. Before: matched plain "nsaid" and "naproxen", and the GDMT item matched "continue". So "continue naproxen" scored. After: only negated phrases score, and "continue naproxen" and "continue NSAID" are unacceptable.

### pulmonary-edema-14 Aortic stenosis. Accurate

A vasopressor plus gentle diuresis, avoiding nitrates, is correct. No changes.

### pulmonary-edema-15 Acute AR from endocarditis. Corrected

An IABP and a beta blocker are both correctly marked dangerous in acute severe AR.

- q4. Before: "Avoid beta blockers" scored nothing. After: the heart rate item accepts "avoid beta blocker" and "no beta blocker".

## Sources verified

- SOGC Guideline No. 408, GTD, 2021: https://www.jogc.com/article/S1701-2163(20)30222-X/abstract. The anti-D and vacuum evacuation recommendations were checked via https://rmtq.ca/en/guidelines/driving-lines/recommendations/
- SOGC Guideline No. 448, Rh D alloimmunization, 2024: https://pubmed.ncbi.nlm.nih.gov/38553007/. The complete mole and after 12 weeks wording was checked via https://www.guidelinecentral.com/guideline/4590140/. It is named in the explanation but not listed as a source, because each question cites one source.
- SOGC No. 376, magnesium for fetal neuroprotection, up to 33+6 weeks: https://pubmed.ncbi.nlm.nih.gov/30879485/
- SOGC Guideline No. 426 exists (2022): https://pubmed.ncbi.nlm.nih.gov/35577426/. I could not open the dosing table. Doses were checked against the long-standing SOGC regimens.
- ISSHP 2021, creatinine of 90 µmol/L or more: https://www.sciencedirect.com/science/article/abs/pii/S2210778921005237
- CCS/CAIC 2019 STEMI focused update, recommendation 18 read in full text: https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf
- CCS/CHRS 2020 AF: https://pubmed.ncbi.nlm.nih.gov/33191198/
- OHFRS 2013: https://pubmed.ncbi.nlm.nih.gov/23570474/. Validation 2017: https://pubmed.ncbi.nlm.nih.gov/27976497/
- Canadian Blood Services Clinical Guide, Chapter 10: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
- The other citations (CCS HF 2017 and 2021, ERS/ATS NIV 2017, ESC HF 2021, ESC/EACTS valve 2021, AHA IE 2015, HFA PPCM 2019, DOSE 2011, ACOG 222, Eclampsia Trial 1995, SOGC 364, Sibai 2004) are real publications and are correctly attributed. No URLs were added.
- Originality: nothing in the batch resembles the CFPC sample SAMPs.

## Open questions for the physician

1. PRES. `tokens("PRES")` returns "pre", because 4 letter words lose a final s. That is the same token as the first half of "pre-eclampsia". A "pres" phrase would credit every pre-eclampsia line as PRES, so it was not added. A candidate who writes only "PRES" must self override. An engine exception for short acronyms would fix this.
2. pulmonary-edema-02: is 80 minutes of land transport in cardiogenic shock an "excessive delay" under CCS recommendation 18? I kept transfer for primary PCI as best, but some examiners would accept fibrinolysis before transfer.
3. TACO rate of about 1 mL/kg/h: not in the CBS guide. Confirm your local or ORBCoN source, or drop the number.
4. pre-eclampsia-07 q4 accepts TXA 1 g for a ruptured liver hematoma before delivery. There is no strong evidence for this. Keep or remove?
5. pre-eclampsia-15: now that SOGC 408 and 448 differ on a presumed complete mole, should anti-D stay an accepted answer (current) or be optional?
6. pre-eclampsia-04 q3: should a further 4 g magnesium (ACOG range) also be accepted?

## Summary

- Pre-eclampsia: 10 SAMPs corrected, 5 accurate. Pulmonary edema: 9 corrected, 6 accurate. No SAMP needs physician attention beyond the open questions.
- Most serious errors:
  - pulmonary-edema-02 misstated CCS on cardiogenic shock and delay.
  - pulmonary-edema-04 accepted an underdose of calcium gluconate (1 g) for hyperkalemia with a wide QRS.
  - pre-eclampsia-10 treated proteinuria as a severity marker.
  - pre-eclampsia-12 accepted magnesium for hypoglycemic drowsiness in AFLP with renal failure.
  - The fetal neuroprotection cutoff was out of date.
  - Several keys let wrong answers score: "rate" in pre-eclampsia-05, "continue naproxen" in pulmonary-edema-13, and "80" in pulmonary-edema-06.
