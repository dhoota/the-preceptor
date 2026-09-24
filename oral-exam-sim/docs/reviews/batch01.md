# Batch 01 clinical accuracy review

Adversarial review of the ten resuscitation and procedures cases in `src/cases/batch01/`. Every case stays `reviewed: false`. Case ids, node ids, rubric ids, schema and graph structure are unchanged. Some source ids were renamed or replaced, and every rubric item still points to a listed source. Typecheck and `CASE_BATCH=batch01` case tests pass.

Verdicts: Accurate means no clinical change was needed. Corrected means errors were fixed and the case is now defensible. Needs physician attention means a point remains that only a physician reviewer can settle.

## Answers to the writer's flagged items

- **AHA Guidelines for CPR and ECC 2025.** The document exists. The correct title is "2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care", published in Circulation in October 2025. All five cases that cite it now carry the full title and the AHA guidelines URL.
- **Double sequential defibrillation.** AHA 2025 and ILCOR 2023 both give a weak recommendation. Vector change or DSED may be considered after three or more failed shocks. The VF case had framed this as settled best practice. It now states that the recommendation is weak.
- **Termination of resuscitation.** AHA 2025 endorses the BLS and ALS TOR rules. It gives no shock count cut off. The VF case is consistent with this.
- **Post arrest temperature.** The case used the 2021 ERC threshold of 37.7 degrees for 72 hours. ERC and ESICM 2025 now say to prevent fever at or below 37.5 degrees for 36 to 72 hours. AHA 2025 says to pick a target between 32 and 37.5 degrees and hold it for at least 36 hours. The case has been updated.
- **Esmolol in refractory VF.** AHA 2025 says beta blockers are of uncertain benefit. The case had said esmolol "may be considered after expert input". It now matches the guideline.
- **Insulin dose for hyperkalemia in dialysis.** UKKA 2023 keeps 10 units with 25 g glucose. It adds D10W at 50 mL/h for 5 hours when the pre treatment glucose is under 7 mmol/L. This patient's glucose was 5.4 to 5.6, so the infusion was indicated from the start. The strong choice had it only "ready". This is fixed. A teaching line now says that some centres use 5 units in dialysis patients.
- **Epinephrine infusion in anaphylaxis.** The case started at 0.05 to 0.1 mcg/kg/min. The RCUK regimen starts at 0.5 to 1 mL/kg/h of 10 mcg/mL, which is 0.08 to 0.17 mcg/kg/min. The case now starts at about 0.1 mcg/kg/min. **Glucagon.** 1 to 5 mg over 5 minutes then 5 to 15 mcg/min matches WAO and standard references. RCUK starts with 1 mg. This is now noted.
- **Alteplase for massive PE.** 100 mg over 2 hours and the accelerated 0.6 mg/kg to a maximum of 50 mg over 15 minutes both match ESC 2019. **Arrest bolus approach.** The 60 to 90 minutes of CPR after lysis comes from ERC 2021 special circumstances, not from AHA. The source has been corrected.
- **Levetiracetam for post anoxic seizures.** ERC and ESICM 2025 name levetiracetam or valproate first line and advise against prophylaxis. No dose is given. The 60 mg/kg, 4500 mg maximum load is the ESETT status epilepticus dose. It is now labelled that way.
- **Angioedema therapies.** Icatibant was positive in a small phase 2 trial and negative in the larger Sinert 2017 trial. The case framing is correct. **Topical lidocaine maximum.** 9 mg/kg lean body weight matches DAS 2020 awake intubation guidance.
- **Balloon tamponade.** Test inflation, X ray, gastric balloon first, esophageal balloon at 30 to 45 mmHg only if needed, and a 24 hour limit are all correct. **Fibrinogen trigger.** The Ontario massive hemorrhage protocol uses under 1.5 g/L. This is now stated, with a dose.
- **Procedural sedation in obesity.** The weights were recomputed. Ideal body weight is 73 kg, adjusted weight is 91 kg and lean body weight is about 74 kg. **Fasting.** ACEP 2014 says do not delay for fasting time. Green 2019 adds a risk based approach, and this patient has risk factors. That nuance is now in the case.
- **Needle decompression site.** ATLS 10th edition uses the 4th or 5th space just anterior to the mid axillary line in adults. The case is correct.
- **PCC dosing.** The case said "per local protocol". It now gives the Canadian NAC INR based dose, which is 2000 IU for an INR of 3 to 5. **Canthotomy thresholds.** IOP over 40 mmHg with vision loss, an afferent defect or proptosis is standard. The case is correct.
- **Vanessa's Law.** The statement is correct. Mandatory hospital reporting began on 16 December 2019. Reports are due in writing within 30 days of first documentation. The case now says this and makes clear that the duty sits with the hospital.

---

## refractory-vf-arrest. Collapse in the ambulance bay

**Verdict.** Corrected. One point needs physician attention.

**Changes**

1. Vector change and DSED feedback on the strong and partial refractory VF choices. Before: presented DOSE VF as settling the question. After: adds that ILCOR 2023 and AHA 2025 give only a weak recommendation to consider either after three failed shocks.
2. Rubric vf-r4 teaching and source. Before: cited DOSE VF alone. After: cites ILCOR 2023 and states the weak recommendation.
3. Esmolol, in the model answer and in rubric vf-m3 text, teaching and source. Before: "Esmolol may be considered in refractory VF after expert input". After: beta blockers are of uncertain benefit, as AHA 2025 says, and must never delay shocks. The source changed from ILCOR 2023 to AHA 2025.
4. Rubric vf-a2 teaching. Before: "Most adults with refractory VF have an acute coronary lesion". After: coronary disease is found in most, and many have an acute occlusion. The original claim overstated the data.
5. Post ROSC oxygen target, in the model answer, the strong choice, the partial feedback and rubric vf-r5. Before: SpO2 92 to 98 percent, which is the 2020 AHA figure. After: 94 to 98 percent. The teaching now notes that AHA 2025 accepts 90 to 98 and ERC uses 94 to 98.
6. Rubric vf-p1 source. Before: ILCOR 2023, which does not address termination rules. After: AHA 2025.
7. AHA citation. Before: a generic title. After: the verified full title, journal and URL.
8. ILCOR citation. Before: organisation only. After: Berg KM, Bray JE, Ng KC, et al. Circulation 2023.
9. Grammar in the airway finding. "A 18 gauge" became "An 18 gauge".

**Checked and left as written.** Epinephrine 1 mg after the second shock, then every 3 to 5 minutes. Amiodarone 300 mg then 150 mg. Lidocaine 1 to 1.5 mg/kg then 0.5 to 0.75 mg/kg. Magnesium only for torsades or low magnesium. MAP at least 65 mmHg. PaCO2 35 to 45 mmHg. Push dose epinephrine 10 to 20 mcg. ALPS showed better survival to admission but not clearly better neurologic survival. ARREST showed an ECPR benefit. Timeline from 14:05 to 14:27 adds up.

**Sources verified**
- AHA 2025 Guidelines for CPR and ECC. https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines and Part 9 Adult ALS at https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376 (full text blocked. Wording on DSED, vector change and beta blockers was confirmed through the EMCrit summary at https://emcrit.org/emcrit/2025-aha-acls-guidelines/)
- Berg KM, et al. 2023 ILCOR CoSTR. Circulation 2023, volume 148, pages e187 to e280. https://pubmed.ncbi.nlm.nih.gov/37942682/
- Cheskes S, et al. DOSE VF. N Engl J Med 2022. Confirmed.
- Kudenchuk PJ, et al. ALPS. N Engl J Med 2016. Confirmed from knowledge.
- Yannopoulos D, et al. ARREST. Lancet 2020. Confirmed from knowledge.

**Residual uncertainties**
- Rubric vf-r4, the change of defibrillation strategy, is marked critical. Guideline support is only a weak recommendation. It is still reasonable for a Canadian oral exam after DOSE VF. The reviewer should decide whether it stays critical.
- AHA 2025 notes that the DSED benefit in DOSE VF was seen mainly in incessant VF, not in VF that recurs after a successful shock. The case does not teach this distinction.

---

## dialysis-hyperkalemia-arrest. Weakness after the storm

**Verdict.** Corrected.

**Changes**

1. Calcium rate in the first model answer. Before: either salt "over 2 to 5 minutes". After: calcium chloride over 5 minutes or gluconate over 10 minutes, which is the UKKA wording, and faster if peri arrest. The repeat window is now 5 to 10 minutes.
2. Glucose infusion. Before: D10W "if glucose is low" and the strong choice had it only "ready". After: D10W at 50 mL/h for 5 hours from the start, because her pre treatment glucose was under 7 mmol/L. This is in the first model answer, the lowering potassium model answer, the strong choice and rubric hk-m1.
3. Rubric hk-m1 teaching now says that some centres use 5 units of insulin in dialysis patients, while UKKA keeps 10 units with a glucose infusion.
4. Glucose monitoring, in the model answer and rubric hk-m4. Before: every 15 to 30 minutes for 6 hours, which conflicted with the strong choice of hourly checks. After: at 15 and 30 minutes, then at least hourly for 6 hours.
5. Rubric hk-r2 teaching. Before: "Calcium is the antidote". After: human evidence for calcium and bicarbonate in arrest is limited, as AHA 2025 says, but calcium is standard care.
6. Rubric hk-a2. Before: repeat within 1 to 2 hours, which conflicted with the model answer. After: within about an hour, then at 2 to 4 hours.
7. Rubric hk-r1 now gives the 6.8 mmol equivalence of the two calcium salts.
8. UKKA citation. Before: 2020. After: the current October 2023 version with URL.
9. AHA citation corrected to the full title with URL.

**Checked and left as written.** Rocuronium 1.2 mg/kg is 86 mg at 72 kg. Ketamine 50 mg is 0.7 mg/kg. Salbutamol 10 to 20 mg nebulized. Bicarbonate 50 mEq in arrest with acidosis. Succinylcholine is avoided. Sodium zirconium cyclosilicate 10 g is an adjunct. Salt substitutes are potassium chloride. CritiCall Ontario is the right system. The dialysis days (Tuesday, Thursday, Saturday), the missed Tuesday run and the Wednesday presentation are consistent.

**Sources verified**
- UK Kidney Association. Treatment of acute hyperkalaemia in adults. October 2023. https://guidelines.ukkidney.org/hyperkalaemia/
- Clase CM, et al. KDIGO Controversies Conference on dyskalemia. Kidney Int 2020. Confirmed from knowledge.
- AHA 2025 Part 10 Special Circumstances. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001380 (full text blocked. Content confirmed through search summaries)
- Succinylcholine Canadian product monograph. Plain citation kept.

**Residual uncertainties**
- The reviewer may prefer to teach 5 units of insulin for dialysis patients. The case now mentions both approaches.

---

## refractory-anaphylaxis-beta-blocker. Clearing out the shed

**Verdict.** Corrected.

**Changes**

1. Positioning in the first model answer. Before: lie flat, never sit up. After: flat with legs raised for hypotension, or semi reclined with legs raised if breathing is worse flat. He has both shock and bronchospasm, and RCUK advises this compromise.
2. Epinephrine infusion start dose in the model answer. Before: 0.05 to 0.1 mcg/kg/min, "about 5 to 10 mcg/min". The arithmetic is 4.4 to 8.8 mcg/min and the range sat below the RCUK start. After: about 0.1 mcg/kg/min, about 9 mcg/min for 88 kg, with the UK range of 0.08 to 0.17 mcg/kg/min stated.
3. Rubric an-r3. Before: 0.05 to 0.1 mcg/kg/min, cited to RCUK, which does not use that range. After: about 0.1 mcg/kg/min, in the range 0.05 to 0.2.
4. Glucagon model answer now notes that the UK algorithm starts with 1 mg.
5. RCUK citation. Before: "Emergency treatment of anaphylaxis". After: the exact title "Emergency treatment of anaphylactic reactions. Guidelines for healthcare providers. 2021" with URL.

**Checked and left as written.** IM epinephrine 0.5 mg every 5 minutes. Refractory means no response after two IM doses. The 1 mg IV push is correctly labelled unsafe. Norepinephrine and vasopressin are second line. Glucagon 1 to 5 mg over 5 minutes then 5 to 15 mcg/min. Tryptase timing and a baseline at 24 hours or later. Two 0.3 mg auto injectors. Biphasic risk after severe reactions and multiple epinephrine doses (Shaker 2020). Admission after an infusion.

**Sources verified**
- Resuscitation Council UK. Emergency treatment of anaphylactic reactions. May 2021. https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment (the infusion recipe was confirmed through the RCUK refractory algorithm as quoted in the literature)
- Cardona V, et al. WAO anaphylaxis guidance 2020. World Allergy Organ J 2020. Confirmed from knowledge.
- Shaker MS, et al. Anaphylaxis practice parameter 2020. J Allergy Clin Immunol 2020. Confirmed from knowledge.

**Residual uncertainties**
- No Canadian source is cited. The reviewer may wish to add a CSACI or CPS anaphylaxis statement.

---

## obstructive-shock-pe-lysis. Grey and breathless after fainting

**Verdict.** Corrected.

**Changes**

1. 60 to 90 minutes of CPR after lysis, in the partial choice feedback and rubric pe-r4. Before: attributed to "current guidance" and cited to AHA 2025. After: attributed to ERC 2021 special circumstances, which is where the recommendation comes from. The source was added.
2. Rubric pe-m3, on heparin restart after lysis. Before: cited CHEST 2021, which does not cover this. After: cites ESC 2019.
3. Rubric pe-p2, on clot prevention after leg immobilization. Before: cited CHEST 2021, which is a treatment guideline. After: cites NICE NG89, which covers lower limb immobilization. The source was added.
4. The CHEST citation was no longer used and was removed.
5. AHA citation corrected to the full title with URL.

**Checked and left as written.** Heparin 80 units/kg is 7600 units at 95 kg. Alteplase 100 mg over 2 hours. The accelerated 0.6 mg/kg regimen is capped at 50 mg, since 57 mg at 95 kg exceeds the cap. Norepinephrine first. Caution with fluid. Avoid intubation. RV to LV ratio over 1 and TAPSE under 16 mm. Major bleeding about 10 percent and intracranial bleeding about 2 percent. Restart heparin when aPTT is under twice normal. The timeline adds up, with arrest at 22:05 and ROSC at 22:19.

**Sources verified**
- Konstantinides SV, et al. 2019 ESC PE guideline. Eur Heart J 2020. Confirmed from knowledge.
- Lott C, Truhlář A, Alfonzo A, et al. ERC Guidelines 2021. Cardiac arrest in special circumstances. https://www.resuscitationjournal.com/article/S0300-9572(21)00064-2/fulltext
- NICE NG89. https://www.nice.org.uk/guidance/ng89
- Perera P, et al. The RUSH exam. Emerg Med Clin North Am 2010. Confirmed from knowledge.
- AHA 2025. https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines

**Residual uncertainties**
- Heparin handling during an alteplase infusion differs between North American labelling, which stops it, and ESC practice, which allows it to continue. The case says "per local protocol". The reviewer may want one clear teaching line.
- A Thrombosis Canada PE treatment guide could be added as a Canadian source.

---

## post-arrest-care-after-rosc. Arrival after a kitchen collapse

**Verdict.** Corrected.

**Changes**

1. Temperature, in the model answer, the strong choice, its feedback, the boarding targets and rubric pr-m2. Before: prevent fever above 37.7 degrees for at least 72 hours (ERC 2021). After: at or below 37.5 degrees. ERC and ESICM 2025 advise 36 to 72 hours. AHA 2025 advises at least 36 hours at a set target between 32 and 37.5 degrees. The TTM2 feedback is unchanged because it was accurate.
2. Oxygen target, in the model answer, the strong choice, the boarding targets and rubric pr-r1. Before: SpO2 92 to 98 percent, cited to ERC, which uses 94 to 98. After: 94 to 98 percent. The teaching notes that AHA 2025 accepts 90 to 98.
3. Seizures, in the model answer and rubric pr-m3. Before: levetiracetam 60 mg/kg presented as the post arrest dose. After: levetiracetam or valproate first line as ERC 2025 advises. The 60 mg/kg load is labelled as the status epilepticus dose, about 4200 mg here. No seizure prophylaxis.
4. ERC citation. Before: 2021 post resuscitation care. After: the ERC and ESICM 2025 post resuscitation care guideline. The source id changed from erc-2021 to erc-2025.
5. AHA citation corrected to the full title with URL.

**Checked and left as written.** MAP at least 65 mmHg. PaCO2 35 to 45 mmHg. Tidal volume 6 to 8 mL/kg ideal body weight. No immediate angiography without ST elevation, as in COACT and TOMAHAWK. CT head and chest. Prognostication at 72 hours or later. Glucose 7.8 to 10 mmol/L is standard ICU practice. Ontario HCCA spouse hierarchy. The timeline adds up, with collapse at 06:50, ROSC at about 07:12 and arrival at 07:40.

**Sources verified**
- ERC and ESICM Guidelines 2025. Post resuscitation care. Resuscitation 2025. Content confirmed at https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/post-resuscitation-care-guidelines
- AHA 2025 Part 11 Post Cardiac Arrest Care. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375 (full text blocked. Targets confirmed through secondary summaries)
- Dankiewicz J, et al. TTM2. N Engl J Med 2021. Lemkes JS, et al. COACT. N Engl J Med 2019. Desch S, et al. TOMAHAWK. N Engl J Med 2021. All confirmed from knowledge.
- Ontario Health Care Consent Act. https://www.ontario.ca/laws/statute/96h02

**Residual uncertainties**
- I could not confirm the author list of the ERC and ESICM 2025 guideline, so the citation names the organisations only.
- The glucose target of 7.8 to 10 mmol/L is not stated in ERC 2025, which says to use standard protocols. It is kept as standard ICU practice.

---

## ace-inhibitor-angioedema-airway. A thick voice before breakfast

**Verdict.** Corrected.

**Changes**

1. Vanessa's Law, in the family model answer, the strong choice feedback and rubric ae-p1 teaching. Before: said only that hospitals "must report". After: adds the start date of December 2019, the 30 day written reporting window, and that the duty sits with the hospital, so the physician uses its reporting process.
2. Health Canada citation now has a verified URL for the mandatory reporting education module.
3. Rubric ae-m3, on stopping the ACE inhibitor and caution with ARBs. Before: cited the hereditary angioedema guideline, which does not cover ARB choice after ACE inhibitor angioedema. After: cites the ramipril Canadian product monograph as a plain citation.

**Checked and left as written.** Awake nasal flexible bronchoscopic intubation. Topical lidocaine maximum of 9 mg/kg lean body weight (DAS 2020). A 6.0 to 6.5 tube. Double setup. Icatibant 30 mg SC with weak and conflicting evidence. IM epinephrine only if anaphylaxis cannot be excluded. Normal tryptase and C4. Scalpel, bougie, tube steps. Extubation after a cuff leak and scope.

**Sources verified**
- Law JA, et al. CAFG Part 2. Can J Anesth 2021. Confirmed from knowledge.
- Ahmad I, et al. DAS awake tracheal intubation guidelines. Anaesthesia 2020. Confirmed from knowledge.
- Sinert R, et al. Icatibant RCT. J Allergy Clin Immunol Pract 2017. Confirmed from knowledge.
- Betschel S, et al. International/Canadian HAE Guideline. Allergy Asthma Clin Immunol 2019. Confirmed from knowledge.
- Health Canada mandatory hospital reporting. https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting/education/module-1.html and the Canada Gazette regulation SOR/2019-190.

**Residual uncertainties**
- Small IV ketamine doses for awake intubation are common in emergency practice. DAS favours remifentanil or midazolam. The reviewer may want to name an alternative.

---

## variceal-hemorrhage-rural. A basin full of blood at night

**Verdict.** Corrected.

**Changes**

1. Hemoglobin target, in the model answer, the strong choice, the unsafe choice feedback and rubric vb-m3. Before: 70 to 90 g/L. After: 70 to 80 g/L, as Baveno VII advises. The teaching notes that Villanueva used 70 to 90.
2. Fibrinogen, in the model answer, the strong choice and rubric vb-m4. Before: no trigger or dose. After: the Ontario massive hemorrhage protocol trigger of under 1.5 g/L, with fibrinogen concentrate 4 g or cryoprecipitate 10 units.
3. Platelets. Added a model answer line to consider the platelet dose case by case while he bleeds, with the count at 41.
4. Blood group. Before: 8 units of O negative only, and feedback that framed O negative as the default. After: group O stock of 4 O negative and 4 O positive. Canadian protocols give O positive to men.

**Checked and left as written.** Octreotide 50 mcg then 50 mcg/h for 2 to 5 days. Ceftriaxone 1 g every 24 hours. Erythromycin 250 mg IV 30 to 120 minutes before endoscopy. No plasma to correct the INR. No tranexamic acid, as HALT IT enrolled over 12000 patients. Balloon tamponade sequence, pressures and 24 hour limit. Ketamine 50 mg and rocuronium 100 mg at 78 kg. Airway protection before transfer.

**Sources verified**
- de Franchis R, et al. Baveno VII. J Hepatol 2022. Confirmed from knowledge.
- Villanueva C, et al. N Engl J Med 2013. Confirmed from knowledge.
- HALT IT Trial Collaborators. Lancet 2020. Confirmed from knowledge.
- Callum JL, et al. Regional massive hemorrhage protocol. CMAJ Open 2019. Confirmed from knowledge.
- Roberts and Hedges, 7th edition, 2019. Confirmed from knowledge.

**Residual uncertainties**
- Baveno VII says fibrinogen and platelet levels do not predict failure to control bleeding. It leaves correction to case by case judgement when bleeding is not controlled. The reviewer should confirm the fibrinogen replacement framing.
- Rubric items vb-c2 and vb-p1, on family communication and stigma, cite Baveno VII, which does not address them.

---

## sedation-shoulder-reduction. A fall on the curling ice

**Verdict.** Corrected.

**Changes**

1. Fasting time. Before: "He ate 90 minutes ago" when lunch was at 13:00 and the sedation question comes after 15:00. After: "about two hours ago".
2. Fasting nuance, in the model answer and the strong choice feedback. Added the Green 2019 risk based approach. He has aspiration and airway risk factors, so aim for the lightest depth that works. A short delay is reasonable only if the shoulder can wait.
3. Propofol starting dose. Before: "about 40 to 70 mg", which did not match 0.5 to 1 mg/kg of 75 to 90 kg. After: about 40 to 90 mg, starting low.
4. CAEP citation. Before: "CAEP. Procedural sedation and analgesia in the emergency department. Recommendations for physician credentialing, privileging and practice". That title is the 2011 ACEP policy, not a CAEP document. After: the real CAEP document, Innes G, et al. Canadian consensus guidelines. J Emerg Med 1999.
5. Rubric sd-l1, on capnography and a dedicated monitor. The source changed to ACEP 2014, which addresses capnography. The 1999 Canadian guideline predates routine capnography.
6. Rubric sd-m2, on obesity dosing. The source changed from ACEP 2014, which does not address weight based dosing, to Roberts and Hedges.
7. CMPA citation now has a verified URL.

**Checked and left as written.** Ideal body weight 73 kg, adjusted 91 kg and lean body weight about 74 kg were recomputed and are correct. Ketamine and propofol 40 mg each is about 0.45 mg/kg adjusted. Propofol 1.5 mg/kg actual weight is 177 mg. Axillary nerve check. Rotator cuff tears are more common over 40. Discharge with a responsible adult and no driving. Disclosure of the apnea event.

**Sources verified**
- Godwin SA, et al. ACEP clinical policy on procedural sedation. Ann Emerg Med 2014. Confirmed from knowledge.
- Green SM, et al. Unscheduled procedural sedation consensus. Ann Emerg Med 2019. Confirmed from knowledge.
- Innes G, et al. Canadian consensus guidelines. J Emerg Med 1999, volume 17, pages 145 to 156. https://www.sciencedirect.com/science/article/abs/pii/S0736467998001358 (not added to the case)
- The ACEP 2011 credentialing policy (the misattributed title). https://pubmed.ncbi.nlm.nih.gov/21802778/
- CMPA disclosure handbook. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

**Residual uncertainties**
- The only CAEP sedation guideline found is from 1999. The reviewer may prefer a current Canadian source, such as a provincial or hospital sedation standard.

---

## cico-scalpel-cricothyrotomy. Facial injuries after an assault

**Verdict.** Corrected.

**Changes**

1. Operator position in the technique model answer. Before: "Stand on the side of your dominant hand". This is wrong. After: a right handed operator stands on the patient's left side, as DAS 2015 advises.
2. Feedback on the "one more laryngoscopy" choice. Before: "After three failed attempts". The stem has two laryngoscopies, one supraglottic airway and failed mask ventilation. After: names the failed intubation, supraglottic airway and mask ventilation.
3. Nasal airway choice feedback. Before: "Bagging a bleeding airway also blows blood into the lungs", which could be read as saying never bag. After: vigorous bagging before induction pushes blood into the lungs, and suction, position and preoxygenation come first.
4. Rubric cc-r2 teaching. Before: delay is "the main cause of death in failed airways". After: "a leading cause". The original overstated NAP4.

**Checked and left as written.** Ketamine 1 to 1.5 mg/kg is 95 to 143 mg. Rocuronium 1.2 to 1.6 mg/kg is 114 to 152 mg. Scalpel, bougie, tube steps. A size 10 blade, a 6.0 cuffed tube, and an 8 to 10 cm vertical incision if the membrane is impalpable. Needle decompression and finger thoracostomy at the 4th or 5th space just anterior to the mid axillary line (ATLS 10th edition). The DOPES approach. Trusting capnography.

**Sources verified**
- Frerk C, et al. DAS 2015. Br J Anaesth 2015. Confirmed from knowledge.
- Law JA, et al. CAFG Part 1. Can J Anesth 2021. Confirmed from knowledge.
- ATLS 10th edition. 2018. Confirmed from knowledge.
- Chrimes N. The Vortex. Br J Anaesth 2016. Confirmed from knowledge.

**Residual uncertainties**
- Rubric cc-c2, on conflict with a colleague, cites the Vortex paper, which does not address conflict. A CMPA or CanMEDS source would fit better.
- An ATLS 11th edition may now be in circulation. The 10th edition citation is real and its decompression site is unchanged in current teaching.

---

## lateral-canthotomy-orbital-hematoma. A fall down the basement stairs

**Verdict.** Corrected.

**Changes**

1. PCC dose, in the model answer, the strong choice and rubric oc-m2. Before: "dosed by INR and weight per local protocol", with no number. After: the Canadian NAC INR based dose of 2000 IU (80 mL) for an INR of 3 to 5. The rubric teaching lists the full table.
2. INR recheck. Before: 15 to 30 minutes after PCC. After: right after the PCC is in, as NAC advises.
3. Canthotomy incision. Before: 1 to 2 cm. After: about 1 cm, which is the standard teaching.
4. Warfarin source. Before: "Thrombosis Canada. Clinical guide on warfarin", which is not an exact title and had no dosing I could confirm. After: the NAC 2022 PCC recommendations with URL.

**Checked and left as written.** Decompression thresholds of IOP over 40 mmHg with vision loss, an afferent defect or proptosis. The 90 to 120 minute retinal ischemia window. Ruling out globe rupture first. Crush for 1 to 2 minutes. Inferior cantholysis, then superior if still high. Vitamin K 10 mg IV. Canadian CT Head Rule excluded warfarin users. The Ontario HCCA emergency treatment provision. The timeline adds up, with injury at 21:10 and decompression at about 22:40.

**Sources verified**
- NAC. Recommendations for use of prothrombin complex concentrates in Canada. 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- Stiell IG, et al. Canadian CT Head Rule. Lancet 2001. Confirmed from knowledge.
- Ontario Health Care Consent Act. https://www.ontario.ca/laws/statute/96h02
- Roberts and Hedges, 7th edition, 2019, and ATLS 10th edition. Confirmed from knowledge.

**Residual uncertainties**
- Rubric oc-d1, on disposition, cites ATLS, which is a weak fit.

---

## Batch summary

All ten cases were corrected. None needed a structural rewrite, and no scenario text read as copied. The most serious errors were:

- A misattributed Canadian source in the sedation case. A 2011 ACEP policy title was labelled CAEP.
- A wrong cricothyrotomy operator position.
- A missing glucose infusion in a dialysis patient given insulin with a pre treatment glucose under 7 mmol/L.
- Post arrest temperature and oxygen targets that were out of date or mismatched to the cited source.
- DSED and esmolol framing that was stronger than the guidelines support.
- A variceal hemoglobin target above Baveno VII.
- Vague PCC dosing in a vision threatening bleed.

For the physician reviewer, the open questions are:

- whether vector change and DSED stay a critical rubric item
- 5 versus 10 units of insulin in dialysis patients
- heparin handling during alteplase
- fibrinogen replacement in cirrhosis
- a few rubric items whose cited source is only a loose fit
