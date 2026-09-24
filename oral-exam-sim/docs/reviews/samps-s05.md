# SAMP batch s05 review. CVA and chest pain

Adversarial review of the 30 SAMPs in `src/samps/s05/`. Every dose was recomputed. Every threshold, answer key, unacceptable flag, key feature label and citation was checked. Ids are unchanged. All SAMPs keep `reviewed: false`.

The negation aware matcher broke three SAMPs (cva-08, chest-pain-04, chest-pain-05). These now pass. A probe of common candidate wordings found more negation traps. These are fixed too.

## CVA

### cva-01. Found unable to speak at breakfast
Verdict: Corrected
- q2 key. Before: "discontinue gliclazide" was not accepted. After: added.
- q3 key feature. Before: KF1 (mimics). The question asks for imaging of a deficit that persists after the glucose is corrected. After: KF3.
- Doses checked. Dextrose 25 g IV is correct. Glucagon is less useful with a sulfonylurea but is fair to accept.

### cva-02. Weakness after a witnessed event
Verdict: Corrected
- q4 key. Before: "confirm she is not on anticoagulants" or "no head injury" scored zero because the matcher reads them as negated. After: negative wordings of each history item are accepted.
- Checked. The 2022 CSBPR says a seizure with suspected stroke is not a contraindication to revascularization. A meningioma resected 4 years ago is not a contraindication.

### cva-03. Sudden constant dizziness
Verdict: Corrected
- q4 key. Before: osmotherapy was not accepted for a swelling cerebellar infarct. After: hypertonic saline or mannitol accepted as a bridge to surgery.
- HINTS logic checked. A normal head impulse test with direction changing nystagmus is central.

### cva-04. Double vision and drowsiness
Verdict: Accurate
- Tenecteplase 0.25 mg/kg for 64 kg is 16 mg. Last apixaban 14 days ago does not bar thrombolysis. The 2026 AHA/ASA guideline recommends thrombectomy for basilar occlusion within 24 hours.

### cva-05. Confused since lunch
Verdict: Corrected
- q2 key. Before: the bare word "onset" was accepted, so "gradual onset" scored. After: only sudden, abrupt or clear onset wordings.
- Doses checked. 76 kg gives tenecteplase 19 mg and alteplase 68 mg. At 16:35 he is 4 hours 5 minutes from last known well.

### cva-06. Collapse at a coffee shop
Verdict: Corrected
- q5 key. Before: any line containing "BP" scored, including a harmful target. After: the BP item needs a monitoring or a below 180 wording. A target below 140 mmHg is now unacceptable (not dangerous). The explanation adds that the 2026 AHA/ASA guideline calls a systolic target below 140 after successful thrombectomy harmful.
- q5 key. Added "withhold antithrombotics" and "hold antiplatelets" wordings.
- Doses checked. Tenecteplase for 88 kg is 22 mg. The limits are below 185/110 before and 180/105 for 24 hours after, confirmed in the 2026 AHA/ASA summaries. Only CT and glucose are needed before lysis.

### cva-07. Woke up unable to speak
Verdict: Corrected
- q4 key. Added an unacceptable item for a systolic target below 140 mmHg after thrombectomy. The BP key text now says below 180/105 if she received a thrombolytic.
- Wake up stroke logic checked. Onset is 23:00. DWI and FLAIR mismatch selection is supported by the 2026 AHA/ASA guideline.

### cva-08. Weakness while watching curling
Verdict: Corrected
- q4 key (test failure). Before: the item "not taken with food" did not match its own text. After: "not taken with food", "without food" and "no food" accepted.
- q1 and q2 explanations. Before: they stated a flat 48 hour rule as the Canadian standard. The 2022 CSBPR actually says thrombolytics "should not routinely be administered" to patients on DOACs, with case by case use at specialist centres. After: that wording is used, and the 48 hour rule or a normal drug level is described as common protocol practice.
- Checked. His CrCl is about 58 mL/min, so rivaroxaban 20 mg is the right dose.

### cva-09. Collapse while lifting boxes
Verdict: Accurate
- Findings, imaging and management match the 2022 ACC/AHA aortic guideline. Using the higher arm pressure is correct.

### cva-10. Brief episode of arm weakness
Verdict: Corrected
- ABCD2 rechecked. Age 1, BP 1 (systolic 158), unilateral weakness 2, duration 45 minutes 1, diabetes 1. The total of 6 is correct. The explanation now says the BP point is for systolic 140 or more, or diastolic 90 or more.
- q4 menu. Before: "Dual therapy for 21 to 30 days". CSBPR says clopidogrel with ASA for 21 days. The 30 day course is the ticagrelor regimen. After: "21 days". The explanation now gives the CSBPR loads: clopidogrel 300 or 600 mg with ASA 160 to 325 mg, then 75 mg and 81 mg daily.

### cva-11. Vision went dark in one eye
Verdict: Corrected (minor)
- Apixaban criteria rechecked. Age 74, 58 kg and creatinine 96 meet only one criterion, so 5 mg twice daily is correct.
- q4 explanation. It now reflects CSBPR: a DOAC is preferred, and after a brief TIA with no infarct it may start within 24 hours.

### cva-12. Flashing lights then tingling
Verdict: Corrected
- q3 key, a scoring bug. Before: "stop" and "discontinue" were match phrases for the contraceptive item. So "stop smoking" was credited as stopping the pill, and the smoking item was also blocked by negation. After: the contraceptive phrases are specific. The smoking item accepts "stop smoking", "quit smoking" and similar.
- q1 key. Before: "Young age without vascular risk factors". She smokes and takes a combined pill, so that was false. The bare word "age" also accepted "older age". After: "Young age", with matching tightened.
- q3 key feature. Before: CVA KF1. Advice on preventing future stroke does not test mimics. After: headache KF5 (diagnose and treat migraine), with `alsoTopics: ["headache"]`.

### cva-13. Neck pain after a hockey game
Verdict: Corrected
- q4 key. Before: the bare word "avoid" was a match phrase, so "avoid antithrombotics" scored. After: phrases name contact sport, hockey, neck manipulation or activity restriction.
- ABCD2 of 3 rechecked. It is correct.

### cva-14. Headache and weakness on warfarin
Verdict: Corrected (minor)
- q2 explanation. Added a recheck of the INR soon after PCC.
- Checked. Four factor PCC with vitamin K 10 mg IV. Systolic about 140 while avoiding drops below 130 matches the 2022 AHA/ASA ICH guideline.

### cva-15. Weakness over three weeks
Verdict: Corrected
- q3 key. Before: only dexamethasone 8 or 10 mg was accepted. After: 4 and 6 mg are accepted too, since 4 mg every 6 hours is standard maintenance. The key text now reads "10 mg IV load, then 4 mg every 6 hours".

### CVA sources
- AHA/ASA acute ischemic stroke. Before: Powers 2019. It has been replaced. After: Prabhakaran S and colleagues. 2026 guideline for the early management of patients with acute ischemic stroke. Stroke 2026. https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
- CSBPR Acute Stroke Management, 7th edition, 2022 update. https://www.strokebestpractices.ca/recommendations/acute-stroke-management . Confirmed: tenecteplase 0.25 mg/kg to 25 mg. No routine thrombolysis on a DOAC. Seizure is not a contraindication. EVT up to 24 hours.
- CSBPR Secondary Prevention, 7th edition, 2020 update. https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke . Confirmed: the DAPT loading doses and 21 day duration. Anticoagulation within 24 hours after a brief TIA. DOAC preferred over warfarin.
- The other citations are real and correctly described: AcT (Menon, Lancet 2022), ABCD2 (Johnston, Lancet 2007), Canadian TIA Score (Perry, BMJ 2021), HINTS (Kattah, Stroke 2009), AHA/ASA ICH 2022 (Greenberg), ACC/AHA aortic disease 2022 (Isselbacher), CCS AF 2020 (Andrade), ASCO/SNO/ASTRO brain metastases 2022 (Vogelbaum), SOGC Canadian Contraception Consensus, Thrombosis Canada.

## Chest pain

### chest-pain-01. Sudden pain watching television
Verdict: Corrected (minor)
- ADD-RS of 3 rechecked (one point each for valve disease, pain and exam findings). Going straight to CTA is correct.
- q3 key. Added "no pulse deficit", which the matcher had treated as negated.

### chest-pain-02. Pressure and nausea at dawn
Verdict: Corrected
- q3 stem, a serious error. Before: he was still hypotensive (88/56) when the key chose fibrinolysis. Cardiogenic shock favours transfer for PCI whatever the delay. After: the update shows he responded to 1 L of saline (BP 112/70). The explanation adds the shock rule.
- q2 key. Before: "avoid nitrates" earned nothing, though it is a core RV infarct step. After: accepted with the negation inside the phrase.
- q3 and q4 key features. Relabelled to ischemic heart disease KF6 (rapid reperfusion), with `alsoTopics`.
- Doses checked. Tenecteplase for 82 kg is 45 mg. Under 75: clopidogrel 300 mg, and enoxaparin 30 mg IV then 1 mg/kg SC every 12 hours.

### chest-pain-03. Pressure she cannot localize
Verdict: Corrected
- q2 explanation. Before: a 0.5 mm posterior threshold only. After: 0.5 mm in V7 to V9, or 1 mm in men under 40, per ESC 2023.
- q4 key. Before: "unfractionated heparin" with no dose scored, though the prompt asks for doses. After: a dose is needed.
- q3 relabelled to ischemic heart disease KF6.
- Clopidogrel 600 mg for primary PCI and 300 mg with lysis are correct. The 2023 CCS/CAIC update prefers neither ticagrelor nor prasugrel.

### chest-pain-04. Pleuritic pain three weeks after delivery
Verdict: Corrected
- q3 key (test failure). Before: "No leg swelling" did not match its own text. After: negative wordings accepted.
- q4 originality. Before: "Name ONE appropriate anticoagulant regimen. Include the dose." was close in structure to the CFPC sample PE in pregnancy question. After: it asks for her first outpatient prescription while breastfeeding.
- q4 doses rechecked for 78 kg: enoxaparin 80 mg every 12 hours or 120 mg daily, dalteparin 15 000 units daily, tinzaparin 14 000 units daily. Dalteparin 100 units/kg twice daily and "tinzaparin 14 000" are now accepted too. The explanation lists these numbers.
- Wells score of 6 rechecked. Thrombosis Canada confirms LMWH and warfarin are safe in breastfeeding and DOACs are not recommended.

### chest-pain-05. Sharp pain after helping a friend move
Verdict: Corrected
- q2 key (test failure). Before: five PERC items worded as "No ..." did not match their own text. After: negative wordings are accepted for hemoptysis, estrogen, prior VTE, leg swelling, surgery and tachycardia.
- PERC surgery criterion. Before: "needing hospitalization". The original criterion is surgery or trauma needing intubation or hospitalization within 4 weeks. After: corrected. The q4 stem now says the arthroscopy was under general anesthesia with intubation. Before, it was unclear whether she failed PERC.

### chest-pain-06. Sudden breathlessness while coughing
Verdict: Corrected
- q3 source. The BTS pleural guideline does not set needle decompression sites. After: q3 cites ATLS 10th edition.

### chest-pain-07. Burning after a large dinner
Verdict: Corrected
- q2 key. Added an unacceptable answer for "suggests or confirms a GI cause" and more correct wordings.
- q3 key. Before: "heparin" with no dose scored, though doses were asked for. After: a dose is needed.

### chest-pain-08. Not feeling right
Verdict: Corrected
- q2 key feature. Before: chest pain KF3. After: ischemic heart disease KF5, which is exactly atypical ACS in older, diabetic and female patients.
- q3 relabelled to ischemic heart disease KF3.

### chest-pain-09. Ache while clearing the driveway
Verdict: Corrected (labels only)
- HEART of 5 rechecked (history 2, ECG 0, age 1, risk factors 2, troponin 0).
- q4 relabelled to ischemic heart disease KF3.

### chest-pain-10. Fleeting sharp chest pains
Verdict: Corrected
- q1 key. Before: the bare word "exertion" was accepted as "not related to exertion". So "worse with exertion" scored. After: only negated or "unrelated" wordings. "Twisting" and "reaching" are now accepted.
- q4 relabelled to ischemic heart disease KF8. HEART of 0 rechecked.

### chest-pain-11. Chest pressure after a party
Verdict: Accurate
- Benzodiazepine doses are correct. A beta blocker in acute cocaine toxicity is rightly flagged dangerous. The AHA statement and the AHA/ACC NSTE-ACS guidance agree. Labetalol is not flagged, which is a fair middle ground.

### chest-pain-12. Chest pain after vomiting
Verdict: Accurate
- CT with water-soluble oral contrast, antibiotics, antifungal cover and surgery match the WSES 2019 guideline.

### chest-pain-13. Pain worse lying down
Verdict: Corrected
- q1 key, a scoring bug. Before: the bare word "reciprocal" was accepted, so "reciprocal ST depression" (a STEMI feature) scored as favouring pericarditis. After: only "no", "absent" or "without" reciprocal wordings. The bare "age" phrase was removed.
- q3 menu. Colchicine is now "for at least 3 months". This fits both the 2015 ESC guideline and the 2025 ESC myocarditis and pericarditis guideline. q3 cites the 2025 guideline.
- q4 key. Before: any "effusion" and any "failure" scored, including "small effusion" and "heart failure". After: large effusion over 20 mm, and NSAID failure wordings.
- Doses checked. Ibuprofen 600 mg three times daily. Colchicine 0.5 mg twice daily at 82 kg.

### chest-pain-14. Pain-free after two episodes
Verdict: Accurate
- Wellens type A is the biphasic pattern. Admission and early angiography are correct.

### chest-pain-15. Crushing pain in a snowstorm
Verdict: Corrected
- q3 explanation. Before: "Canadian guidance supports" half dose tenecteplase at 75 or older. I could not confirm that sentence in the 2019 CCS/CAIC text (the journal site blocked access). After: STREAM and ESC are cited, and many Canadian protocols are said to use it. Emergency Care BC, which cites the CCS guideline, says to consider half dose over 75.
- q1 key. Before: "TIA" was accepted as an absolute contraindication. After: removed. The explanation notes that ACC/AHA and ESC lists differ. The bare "surgery" phrase is kept because ESC lists recent major surgery.
- Key features for q1 to q4 relabelled to ischemic heart disease KF6 and KF7 (reperfusion choice and weighing thrombolysis risk).
- Doses checked for 74 kg at age 79. Half dose tenecteplase 20 mg. Clopidogrel 75 mg with no load. Enoxaparin 0.75 mg/kg every 12 hours with no bolus, which is about 55 mg.
- Shared ASA key. "ASA 162mg" and "aspirin 160mg" written without a space did not match before. They are now accepted.

### Chest pain sources
- 2019 CCS/CAIC STEMI focused update (Wong, Can J Cardiol 2019, volume 35, page 107). Confirmed on PubMed. https://pubmed.ncbi.nlm.nih.gov/30760415/
- The 2018 CCS/CAIC antiplatelet update is real. A 2023 CCS/CAIC focused update also exists (Bainey, Can J Cardiol 2024, volume 40, page 160). https://onlinecjc.ca/article/S0828-282X(23)01841-X/fulltext
- New: Schulz-Menger J and colleagues. 2025 ESC guidelines for the management of myocarditis and pericarditis. https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/
- New: ATLS 10th edition, cited plainly with no URL.
- Thrombosis Canada. Citation now names the pregnancy and postpartum guides. https://thrombosiscanada.ca
- PERC wording confirmed from the Kline validation summary on WikEM.
- Real and correctly described: ESC ACS 2023 (Byrne), AHA/ACC chest pain 2021 (Gulati), HEART Pathway (Mahler 2015), HEART score validation (Backus 2013), ADvISED (Nazerian 2018), ESC PE 2019 (Konstantinides), BTS pleural 2023 (Roberts), AHA cocaine statement 2008 (McCord), WSES esophageal emergencies 2019 (Chirica), ESC pericardial 2015 (Adler), STREAM (Armstrong 2013).

## Open questions for the physician
1. Does the 2019 CCS/CAIC STEMI update formally recommend half dose tenecteplase at 75 or older? I could not read the full text. If it does, restore the Canadian wording in chest-pain-15.
2. cva-08: some centres now give thrombolysis to selected DOAC patients after 48 hours or with low levels. Is "contraindicated" still the best single answer for your intended audience?
3. chest-pain-11: should IV labetalol be flagged as unacceptable in acute cocaine toxicity?
4. chest-pain-13 q4 uses the 2015 ESC high risk list. Please confirm the 2025 ESC table has not changed it.
5. cva-10: DAPT for symptomatic carotid stenosis awaiting endarterectomy is common practice, but the DAPT trials excluded many surgical candidates. Is the key acceptable?
6. Several chest pain SAMPs now have most questions labelled to ischemic heart disease. Please confirm this split is acceptable for blueprint counting.

## Summary
CVA: 13 of 15 corrected, 2 accurate. Chest pain: 11 of 15 corrected, 4 accurate. The most serious fixes were fibrinolysis for a still hypotensive RV infarct, scoring bugs that credited wrong answers ("stop smoking" as stopping the pill, "reciprocal ST depression" favouring pericarditis, "avoid antithrombotics" after dissection, "worse with exertion" as low risk), the DOAC thrombolysis rule stated beyond the CSBPR wording, and the TIA DAPT duration. Type check and `SAMP_BATCH=s05` tests pass (94 of 94).
