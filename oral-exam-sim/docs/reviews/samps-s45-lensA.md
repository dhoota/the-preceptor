# Review of SAMP batch s45 (multiple trauma), Lens A: clinical truth

Lens: A, clinical truth. Scope: `src/samps/s45/multiple-trauma.ts` (multiple-trauma-16 to 47) and `src/samps/s45/review-extra.ts` (multiple-trauma-48 and 49). Every SAMP was read question by question, including every distractor reason. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| multiple-trauma-48 (extra) | q1 | correct | Key was index 0 (femoral nerve) but the explanation and the anatomy support sciatic nerve function (index 3). Key changed to 3. | high |
| multiple-trauma-49 (extra) | q2 | explanation | Invented sentence: "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate is given in the case, and a lactate says nothing about dabigatran effect. Removed. | high |
| multiple-trauma-20 | q3 | update, prompt, options, explanation | Rebuilt. The key "give fibrinogen now" was not the single best answer in a woman whose BP had recovered after 1 unit ("recheck first" was defensible), and the explanation framed SOGC fibrinogen below 200 mg/dL as a generic "adverse factor". In pregnant trauma a low fibrinogen is a marker of consumptive coagulopathy from placental abruption, which the question never mentioned despite a tender uterus. Now asks the most important concern, keyed to placental abruption with coagulopathy (key stays in position 2). | high |
| multiple-trauma-20 | q4 | explanation | Updated so it agrees with the rebuilt q3: fetal compromise from maternal hypovolemia and possible abruption, with fibrinogen replacement as part of resuscitation. | medium |
| multiple-trauma-16 | q2 | explanation | Rejected norepinephrine because MAP 65 exceeds the 50 to 60 target "while bleeding is uncontrolled", but the update says the tourniquet has stopped the bleeding. Replaced with the true reason (Rossaint Rec 14: vasopressor only if volume replacement fails to reach the target, and blood is still going in). "He is bleeding" corrected to "has had major hemorrhage and is still in shock". | medium |
| multiple-trauma-38 | q2 | explanation | False distractor reason: the midclavicular line does not risk the internal mammary vessels, which run about 1 to 2 cm from the sternal border. Replaced with true reasons (thick pectoral muscle, heart under the left fifth space, poor drainage of a dependent hemothorax). | high |
| multiple-trauma-38 | q3 | option, explanation | Keyed option "Ongoing drainage near 200 mL/hour" dropped the duration and the "more than" of the ATLS criterion. Option now reads "Ongoing drainage over 200 mL/hour for 2 to 4 hours", and the explanation says "more than 200 mL/hour for 2 to 4 hours". | medium |
| multiple-trauma-47 | q1 | explanation | Rejected tamponade because it gives "a globular heart". Acute traumatic hemopericardium is small and rarely changes the cardiac silhouette. Replaced with a true reason. | medium |
| multiple-trauma-47 | sources | url | EAST aortic guideline had no URL. Added PubMed 25539215 (J Trauma Acute Care Surg 2015, the primary record, not the J Trauma Nurs reprint). | high |
| multiple-trauma-33 | q4 | source, explanation | Adult Brain Trauma Foundation guideline was cited for a 3-year-old. Replaced with Kochanek 2019 pediatric BTF third edition, which supports avoiding prophylactic hyperventilation below PaCO2 30 mmHg and a PaCO2 target of 35 to 40 mmHg. The explanation now ties the end-tidal target to a blood gas PaCO2 of 35 to 40 mmHg. Key unchanged. | high |
| multiple-trauma-41 | q2 | explanation, source | Used the Canadian CT Head Rule to justify a repeat CT in a patient who already has a subdural hematoma. The rule decides on a first CT after minor head injury and was not derived for known intracranial bleeding. Sentence replaced with the real reason (antiplatelet therapy and age raise the risk of hematoma growth), and the question now cites ATLS. The unused CCHR source was removed. | low |
| multiple-trauma-36 | q2 | explanation | The platelet distractor was rejected only as "not recommended". The Ontario MHP checklist does transfuse platelets for antiplatelet drugs during an MHP, and neurocritical care guidance supports platelets before neurosurgery. The reason now says platelet transfusion is about his ASA and any neurosurgery, not his kidney failure, which is what the menu asks. | low |
| multiple-trauma-44 | q3 | explanation, source | Crush fluid strategy relied only on an unread textbook. Added the ISN Renal Disaster Relief Task Force recommendation (Sever and Vanholder 2012) and the initial rate of about 1 to 1.5 L/hour. Key unchanged. | medium |
| multiple-trauma-29 | q1 | option, explanation | "Transfusion associated volume overload" is not a recognized term. Changed to "transfusion associated circulatory overload" (TACO). | low |

## Key changes

- multiple-trauma-48 q1: before index 0 ("Femoral nerve sensation on the thigh"), after index 3 ("Sciatic nerve function below the knee"). The explanation already described the sciatic nerve, and the femoral nerve is anterior and rarely hurt in a posterior dislocation.
- multiple-trauma-20 q3: rebuilt, not re-keyed. Before: "Low for pregnancy, give fibrinogen now" to the prompt "most appropriate interpretation". After: "Placental abruption with coagulopathy" to the prompt "most important concern raised by her fibrinogen result". The update now says the uterus is firmer and more tender. The stem, options and explanation were rewritten together, and the key stays in the second position.

## Claims checked and found sound (writer's flags)

- Thoracotomy criteria (38 q3): ATLS 10th, an immediate 1500 mL or more, more than 200 mL/hour for 2 to 4 hours, or an ongoing need for transfusion. Supported. The option wording was tightened.
- Chest tube and finger thoracostomy site (21 q2, 35 q2, 38 q2): fourth or fifth space just anterior to the midaxillary line, and Laan 2016 favours the lateral site. Supported.
- Posterior hip reduction within 6 hours (26 q2, 48 q2): supported by the emergency medicine literature. AVN about 5% when reduced within 6 hours against about 53% after, and a meta-analysis (PubMed 26849386) finds higher AVN with delay.
- New sciatic deficit after reduction needing CT and orthopedic review (26 q4): consistent with standard teaching on entrapment. Not verified against Rosen text.
- Fat embolism (30): the triad, supportive care and early fixation are standard. Not verified against Rosen text. Low risk.
- Crush fluids (44 q3): early generous isotonic saline for a high urine output, per ISN 2012. Supported, and the source was added.
- Esmolol for impulse control (47 q4): a short-acting beta blocker first once hemorrhage is controlled, with targets near HR below 100 and SBP below 100 (Western Trauma Association and J Cardiothorac Surg 2020 review). Supported.
- Pediatric blood after 20 mL/kg crystalloid (22 q3): ATLS 10th gives 10 mL/kg red cells after one crystalloid bolus fails. Supported.
- SOGC imaging claim (20 q2): SOGC No. 325 says imaging indicated for maternal evaluation, including abdominal CT, should not be deferred or delayed over fetal radiation. Supported.
- Pediatric CO2 (33 q4): key supported by the pediatric guideline. The source was changed (see fixes).
- Rossaint 2023 recommendations 13, 14, 23, 29, 31, 33, 35 and 36 were read in full text (PMC9977110). They match the batch: SBP 80 to 90 or MAP 50 to 60, MAP 80 or more in TBI, TXA 1 g plus 1 g, fibrinogen at 1.5 g/L or below with 3 to 4 g first dose, calcium chloride, PCC with vitamin K 5 to 10 mg, thrombin time and idarucizumab 5 g, and routine platelets avoided with antiplatelet drugs.
- Ontario MHP toolkit 2020 (Callum Delphi): Hb above 80, INR below 1.8, fibrinogen above 1.5 (2.0 obstetric), platelets above 50 (100 with CNS injury), iCa above 1.15, Rh negative only for females under 45, pediatric TXA 15 mg/kg to 1 g, antibody screening at 6 weeks and/or 6 months. Supports 18 q3, 32 q1, 33 q3, 42 q2 and 42 q3.
- Arithmetic rechecked. SIPA 124/98 = 1.27, pulse over MAP 1.71, BP over pulse 0.79. TXA 15 x 15 = 225 mg. PCC 25 IU/kg x 80 kg = 2000 IU. Pulse pressures 34 to 18, and 14. BTF systolic floors: 100 mmHg at age 64, 110 mmHg at age 24. CaCl2 1 g = 6.8 mmol against gluconate 2.2 mmol.

## Sources verified

- SOGC No. 325, Jain 2015: https://pubmed.ncbi.nlm.nih.gov/26334607/ (imaging recommendation and fibrinogen in the coagulation panel confirmed from the published recommendations summary. Full text was blocked with a 403 error.)
- Kochanek PM et al. Pediatric severe TBI guidelines, third edition. Pediatr Crit Care Med 2019: https://pubmed.ncbi.nlm.nih.gov/30829890/
- Rossaint R et al. Crit Care 2023, full text: https://pubmed.ncbi.nlm.nih.gov/36859355/ (PMC9977110)
- Ontario Provincial Massive Hemorrhage Protocol toolkit 2020, full text: https://transfusionontario.org/wp-content/uploads/2021/04/OntarioMHP_2021.pdf
- Callum JL et al. CMAJ Open 2019: https://www.cmajopen.ca/content/7/3/E546 (statements sit in figures, and the text was checked through the toolkit above)
- Sever MS, Vanholder R. Nephrol Dial Transplant 2012: https://pubmed.ncbi.nlm.nih.gov/22467763/
- Fox N et al. EAST blunt aortic injury. J Trauma Acute Care Surg 2015: https://pubmed.ncbi.nlm.nih.gov/25539215/
- Blunt thoracic aortic injury review, J Cardiothorac Surg 2020 (impulse control targets): https://pmc.ncbi.nlm.nih.gov/articles/PMC7169033/
- Posterior hip dislocation timing, Ann Emerg Med 2022: https://www.annemergmed.com/article/S0196-0644(22)00050-6/fulltext and meta-analysis https://pubmed.ncbi.nlm.nih.gov/26849386/
- ATLS 10th thoracotomy criteria (AAST massive hemothorax review): https://www.aast.org/asset/B63EB924-BD03-4170-82A55E0A4FA95D85/?noRedirect=true
- ATLS itself and Rosen's 10th edition could not be read. They remain the cited sources for many items. Their claims were checked against the independent sources above where possible.

## Needs physician decision

- multiple-trauma-48 and 49 (review-extra.ts) are near verbatim copies of multiple-trauma-26 and 37. Only the id differs, plus the planted defects now fixed. They add no new content and would fail the near duplicate stem test if loaded. Recommend not adding them to the batch.
- multiple-trauma-20 q3 was rebuilt around placental abruption. Please confirm this is the teaching point you want for this case.
- multiple-trauma-41 q1 keys "No routine platelet transfusion" for a stable 6 mm subdural on dual antiplatelets, following Rossaint Rec 36. The Ontario MHP checklist transfuses one pool of platelets for patients on an antiplatelet drug during an MHP. He is not on an MHP, so the key holds, but confirm the local stance.
- multiple-trauma-42 q1 keys group AB plasma. The Ontario toolkit aims to minimize AB plasma use because stock is short, and some sites use group A plasma. Group A is not an option, so no distractor becomes defensible.
- multiple-trauma-26 q4 (post-reduction sciatic deficit leading to CT and orthopedic review for entrapment) and 27 q2 (awake flexible scope intubation, where awake tracheostomy under local anesthesia is a recognized alternative not offered) rest on unread textbook claims. They are standard teaching but not source verified.

## Summary

- SAMPs with a defect: 11 (multiple-trauma-16, 20, 29, 33, 36, 38, 41, 44, 47, 48, 49). Fixes: 14 rows.
- By category: key change 1 (48 q1). Question rebuild 1 (20 q3, with 20 q4 aligned). False distractor reasons 4 (16 q2, 38 q2, 47 q1, 36 q2). Invented stem fact 1 (49 q2). Imprecise threshold 1 (38 q3). Source problems 4 (33 q4, 41 q2, 44 q3, 47 URL). Terminology 1 (29 q1).
- Most serious: the wrong key in 48 q1, the invented lactate sentence in 49 q2, the fibrinogen question in 20 q3 that missed abruption and had a defensible distractor, and the false internal mammary claim in 38 q2.
- Gates: `npx tsc --noEmit -p . | grep samps/s45` prints nothing. `SAMP_BATCH=s45 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 715 of 715.
