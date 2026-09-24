# Batch 03 clinical accuracy review

Respiratory and environmental. Ten cases. Adversarial review against current Canadian and major international guidance. All cases stay `reviewed: false`. Ids and graph structure are unchanged except one consequence node removed in the PE case.

Checks run after the edits: `npx tsc --noEmit -p .` shows no batch03 errors. `CASE_BATCH=batch03 npx vitest run tests/cases.test.ts` passes 63 of 63. No em dashes, en dashes or semicolons in any batch03 string.

---

## near-fatal-asthma. Breathless woman off the ambulance

Verdict: Corrected

Changes
- Steroid dose. Before: methylprednisolone 125 mg IV as the lead option. After: prednisone 50 mg orally or methylprednisolone 60 to 125 mg IV, with a note that higher doses add no proven benefit. GINA uses prednisolone about 1 mg/kg to 50 mg or equivalent.
- Gas interpretation. Before: pure acute respiratory acidosis. After: acute respiratory acidosis with a lactic metabolic component. A pCO2 of 58 should raise the bicarbonate slightly. A bicarbonate of 24 with lactate 4.1 means a mixed picture.
- Epinephrine. Before: IM epinephrine presented as standard therapy and cited to GINA. After: framed as an expert bridge. GINA says IM epinephrine is for asthma with anaphylaxis or angioedema and is not routine otherwise. Choice label, feedback, model answer and rubric as-m4 updated. Still scored as a reasonable bridge.
- Source attribution. Before: six acute care rubric items cited the CTS 2021 asthma guideline, which covers diagnosis and maintenance, not ED rescue. After: those items cite GINA. CTS stays on the controller and follow up item, which it does support.

Sources verified
- GINA 2024 report. https://ginasthma.org/reports/
- CTS 2021 asthma guideline update, Yang et al. Real, Canadian Journal of Respiratory, Critical Care, and Sleep Medicine 2021.
- Kew, Kirtchuk, Michell. Cochrane 2014, IV magnesium in adults. Real.

Residual uncertainties
- Intubation drugs, tube size and ventilator settings still cite GINA, which does not cover them in detail. A critical care source would be better.
- A GINA 2025 report exists. The 2024 citation is still real.

---

## hypercapnic-copd-exacerbation. Drowsy man on a non rebreather

Verdict: Corrected

Changes
- CTS citation. Before: "Canadian Thoracic Society. Guideline on the pharmacologic management of COPD. 2023." After: Bourbeau J, Bhutani M, Hernandez P, et al. 2023 Canadian Thoracic Society guideline on pharmacotherapy in patients with stable COPD, with the CTS URL.
- Antibiotic rubric source. Before: co-m4 cited the CTS guideline, which covers stable COPD only. After: cites GOLD, which covers exacerbation antibiotics.
- BTS oxygen title. Before: missing "in adults". After: "BTS guideline for oxygen use in adults in healthcare and emergency settings".
- Minor wording on the IV steroid equivalent.

Checked and accurate: all three blood gases are internally consistent by Henderson Hasselbalch. Oxygen target 88 to 92 percent. NIV threshold pH under 7.35 with pCO2 over 45. Starting pressures. Prednisone 40 mg for 5 days per REDUCE. Capacity and substitute decision maker content.

Sources verified
- CTS 2023 stable COPD pharmacotherapy. https://cts-sct.ca/wp-content/uploads/2023/09/2023-CTS-COPD-Pharmacotherapy-Guideline-1.pdf
- ERS/ATS NIV guideline 2017, Rochwerg et al. REDUCE, JAMA 2013. GOLD 2024. CMPA consent guide. All real.

Residual uncertainties
- The case is set in BC. The substitute decision maker language is generic Canadian. A BC specific reference could be added.

---

## intermediate-risk-pe. Fainted on the stairs

Verdict: Corrected

Changes
- LMWH choice. Before: enoxaparin 1 mg/kg every 12 hours labelled partial, with a pharmacist node saying it "cannot be turned off". After: labelled strong and routed to the main line. ESC 2019 and Thrombosis Canada prefer LMWH for most PE, including intermediate risk. UFH is an alternative when reperfusion looks likely. The consequence node s-lmwh was removed because it became unreachable.
- Anticoagulation model answer and rubric pe-m2. Before: UFH only. After: LMWH or UFH at correct doses, with the tradeoff named. Enoxaparin about 90 mg and UFH 7400 unit bolus then 1650 units/h were recomputed for 92 kg.
- Heparin around alteplase. Before: "manage heparin per protocol". After: most North American protocols stop UFH during the 2 hour alteplase infusion, ESC allows continuation, restart without a bolus when aPTT is under about twice normal, and lysis still proceeds after enoxaparin with UFH timed about 12 hours from the last dose.
- UFH strong choice feedback now notes that LMWH was also acceptable.

Checked and accurate: sPESI of 2. Intermediate high risk definition. PEITHO numbers, including hemorrhagic stroke about 2 percent with tenecteplase. Alteplase 100 mg over 2 hours and 50 mg bolus in arrest. Fluid limit of 500 mL or less. Contraindication lists.

Sources verified
- ESC 2019 acute PE guideline, Konstantinides et al. European Heart Journal 2020. Real.
- PEITHO, Meyer et al. NEJM 2014. Real.
- Thrombosis Canada clinical guides. https://thrombosiscanada.ca/

Residual uncertainties
- The heparin timing after LMWH before lysis varies by centre. The physician should confirm the local protocol wording.

---

## secondary-pneumothorax-copd. Worse after a coughing fit

Verdict: Corrected

Changes
- Safe triangle teaching. Before: said the safe triangle avoids the long thoracic nerve. That is not its stated purpose and the nerve runs near the triangle. After: keeps the drain away from the internal mammary artery, breast tissue and large muscles, with the nipple line protecting the liver and spleen.
- Safe triangle landmarks. Before: "above the 5th intercostal space". After: lateral border of pectoralis major, anterior border of latissimus dorsi, base at the nipple level.
- Thoracic surgery timing. Before: a firm 48 hour trigger. After: early opinion for a persistent leak, with guidance ranging from about 48 hours to 5 days. The 2023 BTS text on exact timing could not be confirmed.
- Added the BTS guideline URL.

Checked and accurate: lidocaine 3 mg/kg is 192 mg or 19 mL of 1 percent for 64 kg. Lateral 4th or 5th space decompression. Bulla versus pneumothorax teaching. Capacity and leaving against advice content.

Sources verified
- BTS Guideline for pleural disease 2023, Roberts et al. https://www.brit-thoracic.org.uk/document-library/guidelines/pleural-disease/bts-guideline-for-pleural-disease/
- ATLS 10th edition 2018. Real. An 11th edition may now be current.
- CPSI Canadian Disclosure Guidelines 2011. Real. CPSI is now Healthcare Excellence Canada.

Residual uncertainties
- Confirm the BTS 2023 wording on surgical referral timing for secondary pneumothorax.

---

## massive-hemoptysis. Blood in the emesis basin

Verdict: Corrected

Changes
- PCC dose. Before: 2000 units or 25 to 50 units/kg with no ceiling. After: 2000 units fixed dose, or 25 to 50 units/kg to a maximum of 3000 units, per the Canadian NAC recommendations.
- Andexanet. Before: "andexanet if available and on formulary", offered as a routine alternative. After: Health Canada gave only conditional approval in 2023. CADTH advised against public reimbursement. It was withdrawn from the US market in December 2025 after a thrombosis signal. The case now says not to wait for it.
- PCC feedback now states that PCC supports clotting but does not truly reverse apixaban.
- Plasma feedback. Before: offered andexanet as the alternative. After: PCC only.
- Mainstem intubation technique. Before: "advance into the left main bronchus" with no technique. After: bronchoscope guided is preferred. Blind placement often enters the right side. Without a scope, turn the head right and rotate the tube toward the left before advancing, then confirm left sided breath sounds and lung sliding.
- Sources. Before: rubric cited a Thrombosis Canada guide under an unverified title. After: cites the NAC PCC recommendations with URL. The Thrombosis Canada entry was removed because nothing else cited it.

Checked and accurate: ketamine 80 mg and rocuronium about 100 mg for 80 kg. Bleeding side down. Nebulized tranexamic acid 500 mg per Wand 2018. CritiCall and Ornge pathway.

Sources verified
- NAC. Recommendations for use of prothrombin complex concentrates in Canada. 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- Health Canada NOC with conditions for Ondexxya, June 2023. CADTH reimbursement review.
- AABB news on the US Andexxa withdrawal, December 2025. https://www.aabb.org/news-resources/news/article/2025/12/23/astrazeneca-withdraws-factor-xa-reversal-agent-from-u.s.-market
- Davidson and Shojaee, Managing massive hemoptysis, Chest 2020. Wand et al., Chest 2018. Real.

Residual uncertainties
- Whether andexanet is still sold in Canada in 2026 was not confirmed.
- The blind left mainstem technique is widely taught but weakly supported. The physician should approve the wording.

---

## ludwig-angina-airway. Toothache and a muffled voice

Verdict: Corrected

Changes
- Midazolam in stridor. Before: labelled partial. After: labelled unsafe, with feedback saying so. Giving a benzodiazepine to a stridulous patient with a threatened airway is not partly right.
- Vancomycin. Before: "Diabetes raises concern" for MRSA. After: vancomycin for MRSA colonization or risk. Poorly controlled diabetes justifies broad cover such as piperacillin tazobactam. Diabetes alone is not an MRSA indication.
- Dexamethasone now carries a caveat that it must not delay a definitive airway.
- Nebulized epinephrine. Added the concentration, 5 mL of 1 mg/mL, and that evidence in Ludwig angina is limited.
- CICO source. Before: DAS 2015. After: DAS 2025 guideline, Ahmad I et al., British Journal of Anaesthesia 2026.
- Added a PubMed URL for the Bridwell review.

Checked and accurate: tooth 37 is the lower left second molar. Awake nasal flexible intubation with double setup. Scalpel, bougie, tube with a vertical incision when landmarks are lost, 6.0 cuffed tube.

Sources verified
- Bridwell R, Gottlieb M, Koyfman A, Long B. American Journal of Emergency Medicine 2021, volume 41. https://pubmed.ncbi.nlm.nih.gov/33383265/
- CAFG 2021 Part 2, Law et al. Canadian Journal of Anesthesia. Real.
- DAS awake tracheal intubation 2020, Ahmad et al. Anaesthesia. Real.
- DAS 2025 unanticipated difficult intubation. https://www.sciencedirect.com/science/article/pii/S0007091225006932

Residual uncertainties
- Confirm that DAS 2025 keeps the same front of neck access details, including the vertical incision and 6.0 tube.
- CAFG 2021 Part 1 is the Canadian source for CICO and could replace DAS.

---

## hypothermic-cardiac-arrest. Rescued from the backcountry

Verdict: Corrected

Changes
- Shocks under 30 °C. Before: "up to three shocks" stated as settled. After: ERC 2021 allows up to three. WMS 2019 advises a single shock. Both then hold further shocks until above 30 °C.
- Epinephrine under 30 °C. Before: the ACLS drug choice was called wrong by "current guidance". After: ERC and WMS withhold drugs under 30 °C. AHA guidance, which Heart and Stroke follows, allows standard ACLS drugs during rewarming. The choice stays partial, with feedback that it is defensible.
- Drug interval between 30 and 35 °C stated as epinephrine every 6 to 10 minutes, per ERC.
- Thoracic lavage. Before: bilateral with generic tube sites. After: start on the left over the heart, then the right. Inflow tube anterior at the 2nd or 3rd space midclavicular line. Outflow tube lateral at the 5th or 6th space. Saline at 40 to 42 °C.
- Referral line named as RAAPID for Alberta.
- Story fix. Before: highway closed for avalanche control between Canmore and Calgary, which is not avalanche terrain. After: closed by a multi vehicle pileup.

Checked and accurate: HOPE variables and the 10 percent threshold. Potassium over 12 mmol/L as futility. Esophageal probe placement. Warmed fluids at 38 to 42 °C.

Sources verified
- WMS hypothermia 2019 update, Dow et al. https://pubmed.ncbi.nlm.nih.gov/31740369/
- ERC 2021 special circumstances, Lott et al. Resuscitation 2021. Real.
- HOPE score, Pasquier et al. Resuscitation 2018. Real.

Residual uncertainties
- The rate of rewarming shown with lavage, about 6 °C in 90 minutes, is at the fast end of reported rates.

---

## exertional-heat-stroke. Collapse near the finish line

Verdict: Corrected

Changes
- Cooling stop point. Before: 38.6 to 39 °C. After: about 38.5 to 39 °C, noting WMS 2024 gives 38.3 to 38.8 °C and ACSM about 38.9 °C. Updated in the model answer, two feedback strings and the rubric.
- Rhabdomyolysis urine output. Before: 200 to 300 mL/h. After: about 1 to 3 mL/kg/h, roughly 100 to 200 mL/h, if lungs and pressure allow, and stop pushing fluid if he stays oliguric. The case already has oliguria and a coagulopathic, possibly leaky patient.
- Insulin glucose monitoring. Before: hourly. After: at least hourly for 6 hours, with a warning about hypoglycemia, and a prompt to consider bicarbonate for the acidosis.
- WMS citation. Before: 2019 update. After: 2024 update, Eifling KP et al., with URL.
- Added the ACSM PubMed URL. Dantrolene teaching now says it is still under study.

Checked and accurate: ACSM consensus 2021 in Current Sports Medicine Reports. Cooling rate target at least 0.15 °C per minute. Hyperkalemia doses match UK Kidney Association 2020: calcium gluconate 10 percent 30 mL or calcium chloride 10 percent 10 mL, insulin 10 units with 25 g glucose, salbutamol 10 to 20 mg nebulized. Midazolam doses.

Sources verified
- ACSM expert consensus, Roberts et al. 2021. https://pubmed.ncbi.nlm.nih.gov/34524191/ A 2023 corrigendum updated some tables.
- WMS heat illness 2024. https://pubmed.ncbi.nlm.nih.gov/38425235/
- UK Kidney Association hyperkalaemia guideline 2020. Real.

Residual uncertainties
- A Canadian hyperkalemia source would suit the house preference better than UKKA.

---

## drowning-cottage-lake. Two friends from the dock

Verdict: Corrected

Changes
- WMS citation. Before: 2019 update, Schmidt et al. After: 2024 update, Davis CA et al., with URL. The observation window of 4 to 6 hours is consistent with both versions.
- Antibiotics. Before: "Lake water in cottage country is not grossly contaminated", an unsupported claim. After: no routine antibiotics, treat signs of infection, consider them after grossly contaminated water.
- Abdominal thrusts feedback now states that WMS 2024 says they are not recommended at any time.

Checked and accurate: predicted body weight about 75 kg for 180 cm, tidal volume 450 mL. Ketamine and rocuronium doses. Fever prevention for at least 72 hours. Spinal motion restriction by mechanism.

Sources verified
- WMS drowning 2024. https://journals.sagepub.com/doi/10.1177/10806032241227460
- Szpilman et al. Drowning. NEJM 2012. Real.

Residual uncertainties
- Discharging Noah immediately is labelled unsafe and dr-d1 is critical. Szpilman grade 1 patients with cough and a clear chest may not need hospital care. Many ED protocols still observe for 4 to 6 hours. The physician should confirm the label.

---

## carbon-monoxide-family. A family with headaches

Verdict: Corrected

Changes
- UHMS citation. Before: 14th edition, 2019. After: UHMS hyperbaric medicine indications manual, 15th edition, 2023.
- Hyperbaric location. Before: "a chamber in Toronto". After: named as Toronto General Hospital, which runs the 24 hour hospital hyperbaric unit in Ontario, reached through CritiCall.
- HBO timing. Before: "benefit is greatest within about 24 hours". After: the Weaver trial started HBO within 24 hours and earlier is thought to be better.
- Pregnancy criterion. Before: "a level over 15 to 20 percent and fetal tachycardia". After: over 15 percent or signs of fetal distress, the usual UHMS style criterion.

Checked and accurate: carboxyhemoglobin half life on 100 percent oxygen. Saturation gap arithmetic. Hawkins Gignac Act and Ontario CO alarm rules. Weaver 2002 findings.

Sources verified
- UHMS indications manual 15th edition. https://uhms.org/images/indications/UHMS%20Indications%2015th%20Ed%20Front%20Matter%20and%20References.pdf
- UHN Hyperbaric Medicine Unit, Toronto General Hospital. https://www.uhn.ca/Surgery/Treatments_Procedures/Hyperbaric_Medicine_Unit
- ACEP clinical policy on CO, Wolf et al. 2017. Weaver et al. NEJM 2002. Real.

Residual uncertainties
- Check whether any closer chamber, for example in Ottawa or Sudbury, now accepts emergency transfers.
- Public health reporting rules for CO in Ontario were not confirmed. The case keeps a neutral "if local rules require it".

---

## Batch summary

All ten cases were corrected. None needed a rewrite. The most serious errors were:
1. The PE case marked LMWH as a partial answer in intermediate high risk PE, which contradicts ESC and Thrombosis Canada.
2. The hemoptysis case offered andexanet as a routine option and gave PCC with no dose ceiling.
3. The hypothermia case presented ERC rules as settled and did not note that WMS allows one shock and that AHA and Heart and Stroke allow standard drugs.
4. The Ludwig case labelled midazolam in a stridulous patient as partial rather than unsafe.
5. Several citations were outdated or had wrong titles. These were the CTS COPD guideline, UHMS edition, WMS heat and drowning updates and DAS 2015.

No originality problems were found. The wording reads as original scenario writing.
