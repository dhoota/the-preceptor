# SAMP batch s04 review. Asthma and COPD, and burns

This is an adversarial review of the 30 draft SAMPs in `src/samps/s04/`. I checked every dose, calculation, threshold, answer key, key feature label and citation. Every SAMP keeps `reviewed: false` until a physician signs it off. SAMP and question ids did not change.

Two problems came up across both topics.

- Unit spacing. The matcher splits on spaces, so "5mg" is one word and does not match the phrase "5 mg". Many correct answers written as "prednisone 50mg" or "5760mL" scored zero. I added joined unit forms to the main dose items.
- Negation in unacceptable phrases. The matcher ignores word order. So an unacceptable phrase that contains a negation word matches any line with both words in it. For example "no booster" matched "Tdap booster, no TIG needed". Four of these phrases could zero a correct answer, and two were marked dangerous. I removed them. Each explanation still makes the teaching point.

Two SAMPs failed the validator before this review (asthma-copd-11 and burns-05). In both, a key item did not match its own text because of the negation rule. Both are fixed.

## Asthma and COPD

| SAMP | Verdict |
| --- | --- |
| asthma-copd-01 | Corrected |
| asthma-copd-02 | Corrected |
| asthma-copd-03 | Corrected |
| asthma-copd-04 | Corrected |
| asthma-copd-05 | Accurate |
| asthma-copd-06 | Corrected, needs physician attention |
| asthma-copd-07 | Accurate, needs physician attention |
| asthma-copd-08 | Corrected |
| asthma-copd-09 | Corrected |
| asthma-copd-10 | Corrected, needs physician attention |
| asthma-copd-11 | Corrected |
| asthma-copd-12 | Accurate |
| asthma-copd-13 | Corrected |
| asthma-copd-14 | Corrected |
| asthma-copd-15 | Accurate, needs physician attention |

### Changes

- asthma-copd-01 q2 and q4. Before: "salbutamol 5mg", "prednisone 50mg" and "magnesium 2g" scored zero. After: joined unit forms are accepted.
- asthma-copd-02 q1. Before: the baseline FEV1 of 38% was accepted as a sign of a severe exacerbation. It describes the underlying disease, not this attack. After: removed. Tachycardia (HR 108) is added, since heart rate counts toward the GOLD severity grade.
- asthma-copd-02 q3. Before: "Not able to protect airway" was read as negated and scored zero. After: negated forms of the airway answer are in the key.
- asthma-copd-02 q4. Before: only oral prednisone or low dose methylprednisolone was accepted, although he is drowsy on BiPAP. After: IV methylprednisolone 125 mg is also accepted, and the explanation says to switch to oral later.
- asthma-copd-03 q4. Before: any line containing "bronchodilator", "salbutamol" or "recurrent" matched. That would reward "responds to salbutamol" or "recurrent wheeze", which point toward asthma. After: only poor response and recurrent pneumonia in the same lobe are accepted.
- asthma-copd-04 source. Before: the 2021 CCS update on drug therapy for HFrEF, which does not cover acute pulmonary edema. After: the 2017 comprehensive CCS heart failure guideline, which does.
- asthma-copd-06 q2. Before: nebulized ipratropium 250 mcg was accepted for a 21 kg child, although 250 mcg is the dose for children under 20 kg. The phrase "salbutamol 10" would also have accepted a single 10 mg nebule. After: 500 mcg nebulized, or 4 or 6 puffs by MDI, is accepted. TREKK advises continuous nebulized salbutamol with ipratropium for a severe PRAM, so continuous nebulization is now accepted and explained.
- asthma-copd-06 q3. Before: the correct option was dexamethasone 0.3 to 0.6 mg/kg, and the explanation read as if dexamethasone were dosed at 1 to 2 mg/kg. After: dexamethasone 0.6 mg/kg, 12 mg, as TREKK advises (maximum 12 mg). Prednisolone 1 mg/kg to a maximum of 60 mg is named as the alternative.
- asthma-copd-06 sources. Before: the CPS 2012 acute asthma statement was cited for the doses, which I could not confirm against its text. After: dose questions cite the TREKK 2024 Bottom Line Recommendations, which I read. The CPS source was removed.
- asthma-copd-08 q2. Before: the key feature was 4 (coexisting problems). The question tests controlled oxygen. After: key feature 5.
- asthma-copd-08 q3. Before: urea 9.1 mmol/L (about 25 mg/dL BUN) with RR 30 and SpO2 85% gave three ATS/IDSA minor criteria, which means severe pneumonia. That conflicts with a ward admission and with accepting fluoroquinolone monotherapy. After: urea 6.8 mmol/L, and the update says she has no features of severe pneumonia.
- asthma-copd-09 q3. Before: "the induction agent you would choose" allowed etomidate as a fair answer, but only ketamine scored. After: "the preferred induction agent". Joined unit forms are added.
- asthma-copd-09 q4 and q5. Before: dangerous phrases such as "increase rate" and "high tidal volume" matched correct answers like "low rate to increase expiratory time" or "low tidal volume with high flow" and zeroed the question. After: the dangerous phrases are specific ("hyperventilate", "normalize CO2", "rate 20", "10 mL/kg").
- asthma-copd-10 q1 and q3. Before: dangerous phrases "stop inhaler" and "no steroid" would zero correct counselling such as "Do not stop your inhaler". After: removed.
- asthma-copd-08 q4. Before: an unacceptable list with "no steroid" and "not indicated". After: removed for the same reason.
- asthma-copd-11 q1. Before: the item "No change in sputum" failed its own match. After: fixed.
- asthma-copd-13 q2. Before: key feature asthma-copd 5, although the question asks for IM epinephrine in anaphylaxis. After: anaphylaxis key feature 3. Before: "Epinephrine 0.5 mg IM then diphenhydramine" scored zero, and "Epinephrine 0.5 mg IM, IV fluid bolus" could trigger the dangerous IV bolus rule. After: the antihistamine rule is removed and the IV bolus phrases are narrowed.
- asthma-copd-14 q2 and q3. Before: the explanation said Canadian guidance supports dual bronchodilators for ongoing exacerbations. The 2023 CTS guideline makes a strong recommendation for triple therapy (LAMA, LABA and ICS) in patients with high symptom burden and a high risk of exacerbation, and two moderate exacerbations a year meets that risk. After: triple therapy is accepted and explained, with LAMA LABA as the minimum step up. The antibiotic explanation now separates simple exacerbations (amoxicillin, doxycycline, trimethoprim sulfamethoxazole) from higher risk ones (amoxicillin clavulanate, respiratory fluoroquinolone). RSV vaccine now reads "where eligible".
- Sources. Verified DOIs or URLs were added for CTS asthma 2021, CTS COPD 2023, ERS/ATS NIV 2017, WAO 2020, the Cochrane magnesium review, the Aleva meta-analysis, BTS pleural 2023, CCS heart failure 2017 and TREKK.

### Checked and correct

- PRAM in asthma-copd-06. SpO2 91% scores 2, suprasternal retraction 2, scalene contraction 2, reduced air entry at the bases 1 and expiratory wheeze 1. The total is 8, which is severe on the 8 to 12 band (TREKK).
- Salbutamol 10 puffs at 20 kg or more (TREKK). Discharge at PRAM 3 or less, 1 to 2 hours after the last bronchodilator, with a daily ICS and follow up within 7 days (TREKK).
- Adult doses. Salbutamol 5 mg nebulized, ipratropium 500 mcg, magnesium 2 g IV, prednisone 40 to 50 mg. COPD prednisone 40 mg for 5 days. Ketamine 1 to 2 mg/kg is 55 to 110 mg at 55 kg. Epinephrine 0.01 mg/kg to a maximum of 0.5 mg IM.
- The COPD SpO2 target of 88 to 92% and a Venturi mask. The lung protective ventilator strategy in asthma. Disconnecting the ventilator for post intubation hypotension.
- PE in unexplained COPD exacerbation. The pooled prevalence is 16.1% (Aleva 2017), which matches "about one in six". CTPA is preferred over VQ in lung disease.
- Pregnancy SpO2 target of 95% or higher. Several reviews and GINA based protocols support it.

### Sources verified

- CTS asthma 2021 (Yang et al). https://doi.org/10.1080/24745332.2021.1945887
- CTS COPD pharmacotherapy 2023 (Bourbeau et al). https://doi.org/10.1080/24745332.2023.2231451
- TREKK Bottom Line Recommendations, asthma exacerbations, version 2.1, 2024. https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf
- Rochwerg et al. ERS/ATS NIV guideline, Eur Respir J 2017. https://doi.org/10.1183/13993003.02426-2016
- Cardona et al. WAO anaphylaxis guidance 2020. https://doi.org/10.1016/j.waojou.2020.100472
- Kew et al. Cochrane IV magnesium in adults, 2014. https://doi.org/10.1002/14651858.CD010909.pub2
- Aleva et al. Chest 2017. https://pubmed.ncbi.nlm.nih.gov/27522956/
- Roberts et al. BTS pleural guideline, Thorax 2023. https://pubmed.ncbi.nlm.nih.gov/37553157/
- Ezekowitz et al. CCS heart failure guideline, 2017. https://onlinecjc.ca/article/S0828-282X(17)30973-X/fulltext
- GINA 2024 and GOLD 2024 reports exist at ginasthma.org and goldcopd.org. The GINA PDF was too large to read here, so the pregnancy oxygen wording was checked against secondary sources only.
- ATS/IDSA CAP 2019 (Metlay et al), ATLS 10th edition, Rosen's and Thrombosis Canada were not searched but are well known.

### Open questions for the physician

1. Pregnancy SpO2 target (asthma-copd-10 q2). The key says 95% or higher and cites GINA. I could not read the exact GINA sentence. Consider citing an obstetric source.
2. Discharge peak flow (asthma-copd-07 q1). The key says above 70%. GINA wording is closer to 60 to 80%. Is 70% the threshold you teach?
3. BiPAP in asthma (asthma-copd-01 q4, asthma-copd-15 q2 and q3). The evidence is weak and GINA does not endorse it routinely. The key treats a closely watched trial as correct. Please confirm.
4. Pediatric ipratropium by MDI (asthma-copd-06 q2). TREKK gives 4 puffs for all weights. Older Canadian teaching gives 3 or 6 puffs by weight. The key accepts 4 or 6.
5. Triple therapy (asthma-copd-14). Her FEV1 and CAT score are not given. Consider adding them to the stem so the CTS criteria are clearly met.
6. Epinephrine 0.3 mg IM (asthma-copd-13 q2) is not accepted for a 70 kg adult. Some examiners would accept 0.3 to 0.5 mg.
7. There is no current Canadian adult CAP guideline, so asthma-copd-08 cites ATS/IDSA 2019.

## Burns

| SAMP | Verdict |
| --- | --- |
| burns-01 | Corrected |
| burns-02 | Corrected |
| burns-03 | Corrected, needs physician attention |
| burns-04 | Corrected, needs physician attention |
| burns-05 | Corrected |
| burns-06 | Corrected |
| burns-07 | Corrected |
| burns-08 | Corrected |
| burns-09 | Corrected |
| burns-10 | Corrected |
| burns-11 | Corrected |
| burns-12 | Corrected |
| burns-13 | Corrected |
| burns-14 | Corrected |
| burns-15 | Accurate |

### Changes

- burns-01 q1. Before: the phrase "carbon" let "carbon monoxide" count as soot. After: soot phrases are specific, and raised carboxyhemoglobin is its own accepted item.
- burns-01 q4. Before: the key said morphine 0.1 mg/kg is "about 5 to 8 mg". At 84 kg it is 8.4 mg. After: 0.05 to 0.1 mg/kg, about 4 to 8 mg. Before: any line with "acetaminophen" or "oral" was rejected, so "fentanyl 100 mcg IV plus acetaminophen" scored zero. After: only oral analgesia alone is rejected.
- burns-02 q2. The arithmetic is correct. 2 x 80 x 36 is 5760 mL. 2880 mL is due by 8 hours after injury. After 2 hours and 1000 mL, 1880 mL remains over 6 hours, which is 313 mL per hour. The distractor rates of 235, 360 and 480 are correctly derived. Change: "5760mL" and "313mL/h" are now accepted.
- burns-02 q3. Before: the explanation said 1 to 1.5 mL/kg/h is the target for young children and pigmented urine. After: 1 mL/kg/h for children under about 30 kg, and 75 to 100 mL per hour for adults with pigmented urine after electrical injury, as ABLS teaches.
- burns-02 q4. Before: only a 20 to 30% increase was accepted. After: ABLS phrasing of about one third is accepted too.
- burns-03 q2. "Ca gluconate gel" and "gluconate gel" are now accepted.
- burns-04 q1. Before: the phrase "co" matched "co-ingestion", so a correct line was scored against the wrong item. After: CO phrases are specific.
- burns-04 q3. Before: the HBO list left out the Weaver criteria of age 36 or older and exposure of 24 hours or more. After: added.
- burns-05 q1. Before: the item "No splash marks" failed its own match. After: fixed.
- burns-05 q2. Before: "intranasal fentanyl" or "intranasal ketamine" at any dose was accepted, even though the prompt asks for a dose. "Intranasal fentanyl 50 mcg" for an 11 kg toddler scored full marks. After: dose specific phrases only (1.5 mcg/kg, about 15 to 17 mcg).
- burns-06 q3. Before: the correct option read "1 to 1.5 mL/kg/h, about 75 to 100 mL per hour". At 85 kg, 1.5 mL/kg/h is 128 mL per hour, so the two numbers disagreed. After: "75 to 100 mL per hour, about 1 mL/kg/h, until the urine clears".
- burns-07 q3. Before: "fentanyl 150 mcg IV then rocuronium" triggered the dangerous rule and zeroed the question. After: the dangerous rule needs a paralytic or sedative given alone.
- burns-08 q4. Before: "no tetanus" and "none" were unacceptable, so "Tdap booster, no TIG needed" scored zero. After: removed.
- burns-09 q2. Before: any mention of "antibiotic" was rejected, which included a topical antibiotic dressing. After: only oral, systemic or prophylactic antibiotics are rejected.
- burns-10 q2. Before: the phrase "or" matched almost any line ("IV or IO") to the surgery item. After: removed.
- burns-10 q3. The same "co" problem as burns-04 is fixed.
- burns-10 q4. Before: "fentanyl 0.5 to 1 mcg/kg, about 25 to 50 mcg". At 90 kg that range is 45 to 90 mcg. After: small titrated doses of 25 to 50 mcg, about 0.25 to 0.5 mcg/kg.
- burns-11 q4. Before: the word "tube" sent "NG tube" to the endotracheal tube item, and the NG item was then lost. After: the ETT item needs "ETT", "endotracheal", "secure tube" or "tie".
- burns-12 q2. Before: the explanation said only one calcium salt is counted, but the key had separate chloride and gluconate items, so both scored. After: one calcium item that accepts either salt, plus magnesium.
- burns-13 q2. Before: the dangerous phrase "stop fluid" matched "Do not stop fluids, reduce by 25%". After: removed.
- burns-13 q4. Before: "propofol" was accepted with no dose, and the dangerous word "paralysis" matched "analgesia before paralysis". After: propofol needs an infusion or dose. The dangerous phrases name specific paralytics.
- burns-14 q3. Before: "buttocks" was accepted as a burn centre criterion. ABA lists the perineum and genitals, not the buttocks. The key also said "more than 10%" where ABA says 10% or more. After: both are corrected.
- burns-14 q4. Before: a cooling question was labelled key feature 3 (analgesia) with no link to pain. After: the prompt asks about cooling as part of his pain control.
- Sources. Verified URLs were added for ABA referral guidelines, Hampson 2012, the cyanide consensus, the HF review, the CPS pain statement, the Canadian Immunization Guide tetanus chapter and the ISBI guidelines.

### Checked and correct

- Rule of nines in burns-02. Anterior trunk 18%, right arm 9% and anterior left leg 9% make 36%. Superficial erythema is excluded.
- ABA 2 mL/kg/%TBSA for adult thermal burns, with half in the first 8 hours from injury. The adult urine target is 0.5 mL/kg/h (35 mL per hour at 70 kg in burns-13). The 900 mL per hour in burns-13 is about twice the formula rate, which fits the over resuscitation teaching.
- Hydroxocobalamin 5 g IV over 15 minutes, repeatable once. The 70 mg option is a units trap. Nitrites are wrong with CO poisoning. The cyanide consensus says a lactate under 8 mmol/L makes significant cyanide poisoning unlikely. The stem lactate of 11 is above both the 8 and 10 mmol/L thresholds.
- Succinylcholine is safe in the first 24 hours. Hyperkalemia risk starts at about 24 to 48 hours.
- HF treatment. 2.5% calcium gluconate gel, 5% subcutaneous gluconate, and intra-arterial or Bier block calcium. Never calcium chloride into tissue. Systemic calcium chloride 10% 10 mL (1 g) or gluconate 10% 30 mL (3 g) give similar elemental calcium. Magnesium 2 g. Admission to a monitored bed.
- Pediatric analgesia at 11 kg. Intranasal fentanyl 1.5 mcg/kg is 16.5 mcg. IV morphine 0.1 mg/kg is 1.1 mg. Codeine is contraindicated under 12 in Canada.
- Ontario CYFSA s. 125. The duty to report is direct, prompt and cannot be delegated.
- Tetanus (Canadian Immunization Guide). A burn is not a clean minor wound, so a booster is due when 5 or more years have passed.
- Chest escharotomy along the anterior axillary lines joined across the costal margin. TXA 1 g within 3 hours. Carboxyhemoglobin up to about 10% in smokers.

### Sources verified

- ABA Guidelines for burn patient referral. https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral (the page now shows a newer version, so the citation has no year)
- Hampson et al. CO practice recommendations, Am J Respir Crit Care Med 2012. https://pubmed.ncbi.nlm.nih.gov/23087025/
- Anseeuw et al. Cyanide by fire smoke, Eur J Emerg Med 2013. https://pubmed.ncbi.nlm.nih.gov/22828651/
- McKee et al. HF burn management, Plast Surg 2014. https://pubmed.ncbi.nlm.nih.gov/25114621/
- Trottier et al. CPS pain statement, 2022. https://cps.ca/en/documents/position/pain-assessment-and-management
- Canadian Immunization Guide, tetanus toxoid. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- ISBI practice guidelines, Burns 2016. https://doi.org/10.1016/j.burns.2016.05.013
- Ontario CYFSA 2017. https://www.ontario.ca/laws/statute/17c14 (duty to report confirmed through OACAS and Ontario college summaries)
- ABLS Provider Manual. No edition year is cited because I could not confirm the current one. The 2 mL/kg formula and the urine targets were confirmed from secondary summaries of ABLS 2018.

### Open questions for the physician

1. Fluid formula (burns-02). The prompt tells the candidate to use 2 mL/kg, so a Parkland answer scores zero. Some Canadian centres still teach Parkland at 4 mL/kg. Confirm the prompt wording is enough.
2. Digital nerve block in HF burns (burns-03 q2). It is listed as unacceptable because pain guides treatment. Some hand surgeons use blocks. Consider removing that rule.
3. Hydroxocobalamin trigger (burns-04 q2). The explanation uses "above about 8 mmol/L" from the European consensus. Baud used 10 mmol/L. Choose one to teach.
4. HBO criteria (burns-04 q3). The benefit is contested, and the pregnancy threshold is given as 15% here while some sources use 20%. Confirm local hyperbaric referral practice.
5. SpO2 as tube confirmation (burns-11 q3). It is accepted because the CFPC airway key feature names oximetry. It is a weak, late sign. Keep or drop.
6. burns-12 q2 asks for two systemic treatments, so full marks now require calcium plus magnesium. Confirm that is the intended pair.

## Originality

The CFPC sample SAMP document has no asthma, COPD or burn cases, and no stems or questions in this batch resemble its wording. The scenarios use standard teaching patterns (a toddler with an aspirated nut, HF in wheel cleaner, stocking immersion burns, a home oxygen flash fire) but the patients, numbers and wording are original. I could not check commercial question banks directly.

## Summary

The batch is clinically sound in its core teaching. The fluid arithmetic, PRAM score, hydroxocobalamin dose, succinylcholine timing and HF calcium doses are all correct. I made 20 corrections in asthma and COPD and 24 in burns. The most serious were:

- asthma-copd-14 misstated the 2023 CTS COPD guideline.
- asthma-copd-06 accepted an underdose of ipratropium and had an ambiguous dexamethasone dose.
- In asthma-copd-08, the patient met criteria for severe pneumonia, which conflicted with the ward admission and the antibiotic key.
- In burns-12, the key contradicted its own explanation.
- Several urine output and dose ranges did not match their own arithmetic.
- Several dangerous or unacceptable phrases would have zeroed correct answers because of how the matcher handles negation and word order.

Both files pass the type check and the batch tests. A physician still needs to settle the open questions above before `reviewed` is set to true.
