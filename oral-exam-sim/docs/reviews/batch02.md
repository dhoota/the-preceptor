# Batch 02 clinical accuracy review

Adversarial review of the nine cardiovascular and procedures cases in `src/cases/batch02/`. Every case stays `reviewed: false`. Ids, schema and graph structure are unchanged. Typecheck and `CASE_BATCH=batch02` case tests pass.

Verdicts: Accurate means no clinical change was needed. Corrected means errors were fixed and the case is now defensible. Needs physician attention means a point remains that only a physician reviewer can settle.

---

## complete-heart-block-pacing. Slow pulse after two faints

**Verdict.** Corrected. One point needs physician attention.

**Changes**

1. Causes model answer. Before: Lyme carditis framed as a concern "in younger patients from endemic areas". After: states that eastern Ontario, where the case is set, is endemic. Lyme is less likely here because of his age and no exposure or rash.
2. Causes model answer. Added BRASH syndrome. He takes a beta blocker and an ACE inhibitor and has a creatinine rise. His normal potassium makes it less likely.
3. Transvenous technique. Before: wire "advanced with the balloon inflated". After: inflate once in the vein, deflate once in the right ventricle and before any pullback.
4. Position check. Before: "capture on the monitor at a set depth". After: echo, or paced complexes with a left bundle branch block shape, and record the depth.
5. Driving advice. Now names the short no driving period after pacemaker insertion in CCS guidance and Ontario reporting rules.
6. Rubric sources. Before: consent (chb-c1) cited the ESC pacing guideline and driving (chb-d2) cited the ACC/AHA bradycardia guideline. After: consent cites the Health Care Consent Act. Driving cites the CCS 2023 fitness to drive guideline. Both sources were added.
7. AHA citation. Before: a generic "Guidelines ... Adult advanced life support. 2025". After: the verified title "Part 9. Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025" with URL.

**Checked and left as written.** Atropine 1 mg every 3 to 5 minutes to 3 mg. Epinephrine 2 to 10 mcg/min. Dopamine 5 to 20 mcg/kg/min. Demand pacing at 60 to 80. Mechanical capture confirmed by femoral pulse, pleth or echo. Right internal jugular approach under ultrasound, keeping the left side free for the permanent device. Transvenous threshold under 1 mA with output 2 to 3 times threshold. Consent from the capable patient and not from his attorney for personal care.

**Sources verified**
- AHA 2025 Part 9 Adult Advanced Life Support. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- Kusumoto FM, et al. 2018 ACC/AHA/HRS bradycardia guideline. Circulation 2019. Title and year confirmed from knowledge. No URL added.
- Glikson M, et al. 2021 ESC pacing and CRT guideline. Confirmed.
- CCS 2023 Guidelines on the Fitness to Drive. Guerra PG, et al. Can J Cardiol 2024. https://onlinecjc.ca/article/S0828-282X(23)01755-5/fulltext (the full text was blocked, so no URL was added to the case)
- Ontario Health Care Consent Act. https://www.ontario.ca/laws/statute/96h02

**Residual uncertainties**
- The transcutaneous output margin is given as "about 10 percent above threshold". Sources vary from 2 mA to 10 mA above threshold. The reviewer should choose the preferred teaching.
- I could not open the full AHA 2025 bradycardia section. The atropine and infusion doses match 2020 AHA and are believed unchanged.
- Transvenous sensitivity of "about 2 mV" is a common default but varies by generator.

---

## pre-excited-atrial-fibrillation. Racing heart after a pickup game

**Verdict.** Corrected.

**Changes**

1. Procainamide stop criteria, in the model answer, the strong choice label and rubric wpw-m2. Before: stop for systolic under 90 or QRS widening over 50 percent. After: the CAEP 2021 wording. Avoid if systolic is under 100 or QTc is over 500 ms. Interrupt if the pressure drops or the QRS widens visibly, for example by more than 30 percent. The 50 percent rule is from AHA teaching for VT, not from CAEP for AF.
2. Cardioversion energy. Before: "CAEP advises 200 J biphasic for AF". After: CAEP advises starting at 150 to 200 J and avoiding low energy. AHA 2025 suggests at least 200 J.
3. Pad position, in the model answers, a choice label, choice feedback and rubric wpw-r3. Before: said anterior posterior pads give the best first shock success. After: CAEP accepts anterolateral or anteroposterior. Change position if shocks fail. Trial evidence on pad position is mixed and the claim was not supported.
4. The 50 J partial choice feedback no longer says 50 J "is for flutter or narrow regular rhythms". It now gives the CAEP and AHA starting energies.
5. Added the verified PMC URL to the CAEP citation.

**Checked and left as written.** Procainamide 15 mg/kg over 60 minutes, max 1500 mg. For 78 kg that is 1170 mg, which is correct. No AV nodal blockers, including IV amiodarone. The 2023 ACC/AHA/ACCP/HRS AF guideline lists IV amiodarone as potentially harmful in pre-excited AF. The shortest pre-excited RR of 250 ms or less marks a high risk pathway. No anticoagulation needed for onset under 12 hours. The old ECG with left sided pathway features is internally consistent.

**Sources verified**
- Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/
- AHA 2025 ALS guideline gives a starting AF cardioversion energy of at least 200 J. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- Andrade JG, et al. 2020 CCS/CHRS AF guidelines. Confirmed.
- Brugada J, et al. 2019 ESC SVT guidelines. Eur Heart J 2020. Confirmed.
- Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS AF guideline. Circulation 2024. Confirmed.

**Residual uncertainties**
- The VF branch (s-vf) ends in a cardiac arrest with ROSC. The driving and disposition questions do not change on that branch. After a VF arrest, driving restrictions would be much stricter. Consider a line in q-patient.

---

## sympathetic-crashing-pulmonary-edema. Woken up gasping at 3 a.m.

**Verdict.** Corrected. These were minor changes.

**Changes**

1. Dexmedetomidine feedback. Before: "without suppressing breathing". After: "with little effect on respiratory drive". Added a warning about bradycardia and hypotension.
2. Morphine feedback. Before: "linked with more intubation and worse outcomes". After: says the association comes from observational data. The evidence is observational.
3. Substitute decision maker. Before: "her husband is her substitute decision maker". After: added "unless she has named an attorney for personal care", which ranks higher under the HCCA.
4. Rubric scape-c1, the patient's own wishes, cited a heart failure guideline. It now cites the Health Care Consent Act, which was added as a source.
5. Added the Cochrane URL.

**Checked and left as written.** SL nitroglycerin 0.8 mg every 3 to 5 minutes. IV infusion started at about 100 mcg/min and titrated to 400 mcg/min. A fall in systolic pressure of about 25 percent over the first hour. Screening for PDE5 inhibitor use and aortic stenosis. BiPAP 12/6 and CPAP 8 to 10. Furosemide 40 mg as a second line drug. The VBG is internally consistent: pH 7.22, pCO2 60 and bicarbonate 23 calculate correctly.

**Sources verified**
- Berbenetz N, et al. Cochrane 2019. https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005351.pub4/full
- Rochwerg B, et al. ERS/ATS NIV guideline 2017. Confirmed.
- McDonagh TA, et al. 2021 ESC HF guideline. Confirmed.
- Ezekowitz JA, et al. 2017 CCS HF comprehensive update. Confirmed.

**Residual uncertainties**
- The high dose nitroglycerin regimen reflects emergency medicine practice and observational data such as Wilson and Mathew. It goes beyond the ESC and CCS HF guideline doses. The cited guideline sources support nitrates in hypertensive AHF but not the 400 mcg/min ceiling or boluses. The reviewer may want a specific high dose nitroglycerin reference.
- ERS/ATS is cited for dexmedetomidine during NIV. That guideline does not really address sedation.

---

## wide-complex-tachycardia. Palpitations in a man who looks well

**Verdict.** Corrected. One point needs physician attention.

**Changes**

1. Adenosine consequence node. Before: "During the pause in atrial activity you can see P waves". This is wrong. Adenosine blocks the AV node and does not pause the atria. After: P waves march through at their own slower rate on the long strip.
2. Procainamide with moderate LV dysfunction. Before: "Use caution with severe LV dysfunction". After: PROCAMIO benefit held in patients with structural heart disease. Avoid procainamide in decompensated heart failure, severe LV dysfunction or long QT. Watch his pressure closely. Procainamide as a strong choice stays defensible. ESC 2022 supports it for tolerated monomorphic VT with structural heart disease.
3. Amiodarone partial feedback. Before: "converts VT less often in the first hour". After: terminated fewer tachycardias within 40 minutes in PROCAMIO, which matches the trial endpoint.
4. Lidocaine feedback. Before: "add negative inotropy". Lidocaine has little negative inotropy. After: drugs are slower and less reliable than a shock.
5. Magnesium target. Before: "Magnesium to over 1.0 mmol/L". After: magnesium sulfate 2 g IV and keep magnesium in the high normal range.
6. Post conversion amiodarone. Added a discussion with cardiology and a QTc check first if procainamide was given.
7. Commercial driving. Before: "usually not permitted until cardiology assessment". This understated the restriction. After: standards after unstable sustained VT are strict. A secondary prevention ICD usually ends commercial driving under CCS guidance. Private driving is also restricted.
8. Ontario reporting. Before: "conditions that make driving dangerous, including a risk of sudden incapacitation, to the Ministry of Transportation". After: the regulation's wording. Report a moderate or high risk of sudden incapacitation, or sudden incapacitation that is likely to recur, to the Registrar of Motor Vehicles. The teaching now notes that mandatory reports do not need consent but the patient should be told.
9. Rubric wct-d2 on driving cited the ACC/AHA VA guideline. It now cites the CCS 2023 fitness to drive guideline, which was added.
10. Citations. The AHA 2025 title was corrected and given a URL. The Highway Traffic Act citation had a made up subtitle and now reads "section 203, and O. Reg. 340/94. Medical reporting to the Registrar of Motor Vehicles" with the MTO URL. Added the PROCAMIO PubMed URL.

**Checked and left as written.** Procainamide 10 mg/kg over 20 minutes as in PROCAMIO, which is 900 mg for 90 kg. Or 20 to 50 mg/min to 17 mg/kg, which is about 1530 mg. Amiodarone 150 mg over 10 minutes then 1 mg/min for 6 hours and 0.5 mg/min for 18 hours. Synchronized 100 J for monomorphic VT. The ECG features favouring VT and the internal consistency of the cannon a waves and variable S1.

**Sources verified**
- Ortiz M, et al. PROCAMIO. Eur Heart J 2017. https://pubmed.ncbi.nlm.nih.gov/27354046/ PROCAMIO used amiodarone 5 mg/kg over 20 minutes. It had no explicit LVEF exclusion. Most patients had structural heart disease.
- AHA 2025 ALS. IV amiodarone, procainamide or sotalol may be considered for stable wide complex tachycardia. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- Zeppenfeld K, et al. 2022 ESC VA guideline. Confirmed.
- Al-Khatib SM, et al. 2017 AHA/ACC/HRS VA guideline. Circulation 2018. Confirmed.
- Ontario medical reporting. https://www.ontario.ca/page/reporting-driver-medical-review
- CCS 2023 Guidelines on the Fitness to Drive. Guerra PG, et al. Can J Cardiol 2024.

**Residual uncertainties**
- I could not open the full text of the CCS 2023 fitness to drive guideline. The exact private and commercial wait times after unstable VT and after a secondary prevention ICD need physician confirmation. The text avoids stating specific durations.
- AHA 2025 VT cardioversion energy could not be read directly. 100 J as a starting energy follows 2020 AHA.

---

## malignant-pericardial-tamponade. Breathless woman on cancer treatment

**Verdict.** Corrected.

**Changes**

1. Dalteparin dose. Before: 200 IU/kg daily for a DVT 3 months earlier. That dose only applies to the first month of cancer associated VTE. After: 150 IU/kg daily, reduced from 200 IU/kg after the first month.
2. Needle technique. Before: the apical approach text told the candidate to stay lateral to the sternum for the internal mammary artery. That warning only applies to a parasternal window. After: the warning now applies to a parasternal window only.
3. Drain removal threshold. Before: "under about 25 mL per day". After: about 30 mL or less in 24 hours. This matches the 2015 ESC wording.
4. Consent wording. Before: "the daughter would only decide if she became incapable". The daughter may not be the highest ranking SDM. After: a family substitute decision maker only decides if she becomes incapable.
5. Added the ESC and HCCA URLs.

**Checked and left as written.** Echo criteria for tamponade. Pulsus over 10 mmHg. Avoiding diuretics, nitrates and positive pressure. A modest bolus and norepinephrine as a bridge only. Ultrasound guided drainage choosing the best window. Agitated saline confirmation. The fluid hematocrit and non clotting blood. Pericardial decompression syndrome. Capable patient consent.

**Sources verified**
- Adler Y, et al. 2015 ESC pericardial diseases guideline. https://academic.oup.com/eurheartj/article/36/42/2921/2293375
- Klein AL, et al. ASE pericardial disease imaging recommendations. JASE 2013. Confirmed.
- Health Care Consent Act. https://www.ontario.ca/laws/statute/96h02

**Residual uncertainties**
- ESC published 2025 guidelines on myocarditis and pericarditis. The reviewer may want to check whether they supersede any 2015 tamponade advice.
- She is on immunotherapy. Immune related pericarditis or myocarditis is not in the differential. This may be worth one line.

---

## athlete-exertional-syncope. Collapse at hockey practice

**Verdict.** Corrected.

**Changes**

1. CSRS finding. Before: "QTc under 460". The CSRS threshold is QTc over 480 ms. After: "QTc under 480 ms". The total of 2, medium risk, was recalculated and is correct.
2. CSRS scope, in the partial choice feedback and rubric syn-a2. Before: validated for syncope "unexplained after ED work up". After: it predicts 30 day serious outcomes when no serious cause is found in the ED.
3. HCM sudden death risk, in the model answer, a choice's feedback and rubric syn-d1. Before: called NSVT a "major" risk factor and said he had "two major risk factors". The 2024 AHA/ACC HCM guideline lists unexplained syncope as a major risk factor. NSVT is a modifier. After: unexplained syncope is major. A possible HCM death in a close relative and NSVT add to it.
4. Privacy feedback. Before: said there was "no imminent risk exception". After: PHIPA allows disclosure without consent only to reduce a significant risk of serious bodily harm, and that does not apply here.
5. Ontario reporting wording in the model answer and syn-d3 teaching was aligned with the regulation.
6. The Highway Traffic Act citation had a made up subtitle and was corrected with the MTO URL. Added the verified CMAJ URL for the CSRS.

**Checked and left as written.** Septum of 15 mm or more supports HCM. The murmur manoeuvres. Fluids, positioning and phenylephrine for obstruction. Avoiding nitrates, inotropes and vasodilators. Return to play as a shared decision after expert review, as in AHA 2024. Screening of first degree relatives. ESC 2018 names exertional syncope as a major high risk feature.

**Sources verified**
- Thiruganasambandamoorthy V, et al. CSRS derivation. CMAJ 2016. https://www.cmaj.ca/content/188/12/e289
- Brignole M, et al. 2018 ESC syncope guideline. Confirmed.
- Ommen SR, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR HCM guideline. Circulation 2024. Confirmed.
- PHIPA, S.O. 2004, c. 3, Sched. A. Confirmed.
- Ontario medical reporting. https://www.ontario.ca/page/reporting-driver-medical-review

**Residual uncertainties**
- The case does not say whether he drives. Mandatory reporting only applies to licence holders.

---

## stemi-cardiogenic-shock. Grey and sweaty in the waiting room

**Verdict.** Corrected.

**Changes**

1. P2Y12 timing. Before: a vague line. After: oral absorption is poor in shock and after intubation, and he may need urgent surgery. Crushed tablets or an IV agent in the lab are options. The decision stays with the interventionalist, which is defensible under the 2023 ESC ACS guideline, since routine pretreatment is only IIb.
2. Revascularization feedback. Before: "the only therapy shown to improve survival". This became untrue after DanGer Shock. After: "the core therapy shown to improve survival".
3. CT head answer. Before: "ROSC in under 2 minutes". The delayed branch takes longer. After: "a brief witnessed VF arrest with quick ROSC".
4. DanGer Shock in the model answer and rubric stemi-m4. Added that comatose arrest survivors were excluded. This patient is GCS 9 after an arrest, so the trial may not apply to him.
5. Double sequential or vector change defibrillation. Now only after 3 or more shocks, as in AHA 2025.
6. The AHA citation title was corrected. Added the DanGer Shock NEJM URL.

**Checked and left as written.** ASA 160 to 325 mg. UFH 70 to 100 units/kg, which is about 6650 units at 70 units/kg for 95 kg. Norepinephrine first line starting at 0.05 mcg/kg/min to a MAP of 65. Dobutamine only after the MAP is restored. The SOAP II cardiogenic shock subgroup. CULPRIT-SHOCK culprit only PCI. The VF drug sequence. Door to ECG within 10 minutes.

**Sources verified**
- Møller JE, et al. DanGer Shock. NEJM 2024. https://www.nejm.org/doi/full/10.1056/NEJMoa2312572
- AHA 2025 ALS. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- Wong GC, et al. 2019 CCS/CAIC STEMI focused update. Confirmed.
- Byrne RA, et al. 2023 ESC ACS guideline. Confirmed.
- De Backer D, et al. SOAP II. NEJM 2010. Confirmed.
- Thiele H, et al. CULPRIT-SHOCK. NEJM 2017. Confirmed.

**Residual uncertainties**
- I did not confirm that cangrelor is available in Canada, so the text says "an IV agent" without naming it.

---

## posterior-epistaxis-anticoagulated. A nosebleed that will not stop

**Verdict.** Corrected.

**Changes**

1. PCC dose. Before: "25 to 50 IU/kg by INR, or a fixed dose". This is a US Kcentra style regimen. After: Canadian NAC sample regimens. For an INR of 4.6 that is 2000 IU by INR band, or 35 IU/kg, about 2500 IU for 72 kg. Target an INR of 1.5 or less. Octaplex and Beriplex are named.
2. Atropine. Before: 0.5 to 1 mg. After: 1 mg, the current adult dose.
3. Thrombosis Canada citation. Before: a made up guide title. After: the real title "Warfarin: Management of Out-of-Range INRs" with URL.
4. NAC citation. Now says "Revised 2022" and has the URL.

**Checked and left as written.** Vitamin K 10 mg IV for major bleeding. A fall in hemoglobin of 20 g/L or more meets ISTH major bleeding, and here it is 33 g/L. CHA2DS2-VASc of 5 is correct. The clarithromycin interaction. Foley 12 to 14 Fr with 10 to 15 mL of saline or water. Padding against alar necrosis. Continuous monitoring with a posterior pack. Topical TXA and the NoPAC result.

**Sources verified**
- NAC. Recommendations for use of prothrombin complex concentrates in Canada. Revised February 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- Thrombosis Canada. Warfarin: Management of Out-of-Range INRs. https://thrombosiscanada.ca/hcp/practice/clinical_guides?language=en-ca&guideID=45 (I could not read the PDF text to quote the vitamin K dose)
- Tunkel DE, et al. AAO-HNS Clinical Practice Guideline. Nosebleed (Epistaxis). 2020. Confirmed.
- Reuben A, et al. NoPAC. Ann Emerg Med 2021. Confirmed.

**Residual uncertainties**
- The PCC dose should match the reviewer's local Ontario protocol. Many Ontario sites use ORBCoN INR banded dosing.

---

## knee-dislocation-vascular-injury. Snowmobile into a tree

**Verdict.** Corrected. One point needs physician attention.

**Changes**

1. Ketamine dose. Before: 1 to 1.5 mg/kg "about 100 mg". For 92 kg that is 92 to 138 mg. After: "about 90 to 140 mg for 92 kg".
2. Heparin, in the model answer, the strong choice feedback and rubric kd-m3. Before: heparin "often given for isolated limb injury". After: heparin only once head, torso and pelvic bleeding are reasonably excluded. After a high energy snowmobile crash that may mean CT first. His eFAST alone does not exclude head or solid organ injury.
3. ATLS citation. Before: 10th edition, 2018. After: 11th edition, 2025, with the ACS URL.

**Checked and left as written.** Immediate reduction of a pulseless dislocated knee. ABI under 0.9 leads to CTA. The ABI arithmetic of 92/136 = 0.68 is correct. The ischemia clock: 18:40 injury to 21:05 is 2 hours 25 minutes, and land transport arrives near 6 hours. Peroneal nerve injury with the fibular head avulsion. Fasting is not a barrier to urgent sedation.

**Sources verified**
- ACS ATLS 11th edition. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- Mills WJ, et al. ABI after knee dislocation. J Trauma 2004. Confirmed.
- Godwin SA, et al. ACEP procedural sedation clinical policy. Ann Emerg Med 2014. Confirmed.

**Residual uncertainties**
- Heparin in isolated blunt popliteal injury has no single guideline source in the case. It rests on ATLS and surgical practice. The reviewer may want a specific trauma society reference.
- The external fixator choice is labelled unsafe. Some examiners would call it partial.
- A pan scan CT after a high energy snowmobile crash is not explicitly prompted.

---

## Batch summary

All nine cases were corrected. None was fully accurate as written. There were about 50 changes in total. The most serious errors were:

- **Procainamide stop criteria in pre-excited AF.** The case used a systolic threshold under 90 and QRS widening of 50 percent. CAEP uses avoid if systolic is under 100 or QTc is over 500 ms, and stop if the QRS widens by about 30 percent.
- **PCC dosing.** The case used a US weight based range. It now uses the Canadian NAC regimens.
- **Dalteparin dose.** The case gave a first month dose at 3 months.
- **CSRS errors.** The QTc cut point was wrong and the score's scope was misstated.
- **HCM risk.** NSVT was overstated as a major risk factor.
- **Adenosine physiology.** The adenosine node described a physiological impossibility.
- **Commercial driving.** Commercial driving after unstable VT was understated.
- **Citations.** Made up subtitles on the Highway Traffic Act and Thrombosis Canada citations.
- **AHA citation.** The 2025 AHA citation was not correctly titled. It is now "Part 9. Adult Advanced Life Support" in Circulation 2025.
- **Pad position.** An unsupported claim that anteroposterior pads are superior.

**Still needs a physician**
- The exact CCS 2023 fitness to drive timelines for unstable VT, secondary prevention ICD and pacemaker insertion.
- A reference for the high dose nitroglycerin regimen.
- A trauma reference for heparin in blunt popliteal injury.
- The transcutaneous pacing output margin.
- The PCC dose against the local protocol.
