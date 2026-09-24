# SAMP review, batch s25 (Asthma/COPD), Lens A

Lens: A, clinical truth. Reviewer: AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Scope: `src/samps/s25/asthma-copd.ts` (asthma-copd-16 to 47, 111 questions) and `src/samps/s25/review-extra.ts` (asthma-copd-48 and 49). Every question and every distractor reason was read against the stem and, where the text was reachable, against the cited source. GINA 2026, GOLD 2026, both TREKK asthma documents and the Thrombosis Canada PE guide were downloaded and read as full text.

## Fixes

| SAMP id | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| asthma-copd-44 | stem, q2, q3, q4 | stem, key, explanations | Wells 5.5 is "likely" on the two-tier scheme but "moderate" on the three-tier and PeGeD schemes in the same Thrombosis Canada guide, where a D-dimer comes first. "D-dimer then imaging if positive" was therefore also defensible, and "a negative D-dimer does not rule out PE in this group" was false for moderate pretest probability. Rebuilt: stem now gives a previous DVT, Wells is 7.0 (high on every scheme), q2 key moved to 7.0, q3 and q4 explanations updated | high |
| asthma-copd-48 (review-extra) | q1 | correct | Keyed "Increase the bagging rate" (index 3), which the explanation itself rejects and which worsens dynamic hyperinflation. Key set to "Disconnect from the bag" | high |
| asthma-copd-49 (review-extra) | q2 | explanation | Invented fact: "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate is in the case, and lactate does not confirm opioid toxicity. Removed | high |
| asthma-copd-20 | q2 | option, explanation | "methylprednisolone 28 mg IV" is exactly the TREKK dose (2 mg/kg). TREKK contraindicates only the 40 mg vials in cow's milk protein allergy, so the distractor was defensible if drawn from another vial. Replaced with "methylprednisolone 80 mg IV" (the maximum, about 5.7 mg/kg) with a true dose reason, and the vial warning kept | high |
| asthma-copd-28 | q3 | option, explanation | "Pulmonary rehabilitation within 4 weeks" came from GOLD, not from the cited CTS 2023 guideline. Option is now "Pulmonary rehabilitation referral". The explanation cites CTS for rehabilitation and smoking cessation as core care. The exacerbation count now uses the CTS high-risk definition and counts this ED visit as severe | high |
| asthma-copd-28 | q1 | source, explanation | Cited only to Rosen. Re-sourced to Stiell 2014 (Ottawa COPD Risk Scale derivation, Canadian EDs), which used a 3-minute walk test after ED treatment. Being too ill to do it (SaO2 below 90% or pulse 120/minute or more) predicted serious adverse events | medium |
| asthma-copd-46 | q3 | explanation | The adrenal insufficiency claim was said to have no support in GINA. GINA 2026 (severe asthma section) does warn about adrenal insufficiency with long-term OCS and says to reduce them gradually with monitoring. Explanation reworded to what GINA says | medium |
| asthma-copd-27 | q3 | explanation | GINA allows acetaminophen in AERD only with supervision and at least 2 hours of observation after the first dose. Explanation now says this, and that it can be done in the ED before discharge. Key unchanged | medium |
| asthma-copd-27 | q4 | option | "Two courses of prednisone" had no time frame, but the GINA referral rule is 12 months. Option is now "Two prednisone courses in 12 months" | medium |
| asthma-copd-23 | q1 to q3 | source | Cited only to Rosen. Re-sourced to Kouritas 2015 (J Thorac Dis, open access). It covers the Hamman crunch, asthma and cough as causes, radiograph diagnosis, esophagography only when perforation is suspected, and the benign course with observation | medium |
| asthma-copd-37 | q1 to q3 | source, explanation | Cited only to Rosen. Re-sourced to Boyer, NEJM 2012. Explanations now use its verified points: start naloxone at 0.04 mg and increase every 2 minutes, it lasts 20 to 90 minutes, and oral bioavailability is negligible | medium |
| asthma-copd-49 (review-extra) | q1 to q3 | source, explanation | Same Rosen-only sourcing and wording as 37. Same fix | medium |
| asthma-copd-30 | stem, q2, q3 | stem, source | The q3 explanation said there was no vomiting or loss of consciousness, but the stem never stated this. Added to the stem. q2 and q3 re-sourced from Rosen to White and Martin 2010: moderately water-soluble chlorine, inhaled beta agonists for airway obstruction, and a spectrum from reactive airways to acute lung injury | medium |
| asthma-copd-45 | q3 | explanation | "A usual starting point is IPAP about 10 and EPAP about 5" is not universal. For example, UK BTS/ICS practice starts IPAP higher. The key holds because the other options are invalid (IPAP below EPAP, zero pressure support, CPAP, or 30/20). The explanation now argues from pressure support instead of a claimed standard | medium |
| asthma-copd-31 | q4 | explanation | CCS 2017 wording on the first IV dose relative to the oral dose could not be read. The explanation now attributes to CCS only the IV loop diuretic for congestion. The "at least the oral dose" point is presented as usual practice | low |
| asthma-copd-31 | q2 | explanation | The mechanism was reworded to say NT-proBNP is not a neprilysin substrate. The CCS 2017 practical tip to prefer NT-proBNP in ARNI patients was confirmed only through search-engine excerpts of the CCS chapter 6 page | low |
| asthma-copd-19 | q2 | explanation | "Digoxin does not control the rate in this rhythm" is overstated, because digoxin is occasionally used. Softened to "generally ineffective for rate control and not a first step" | low |
| asthma-copd-42 | q2 | explanation | Magnesium "started now" rested only on failing paramedic salbutamol. Added the GINA point that IV magnesium also helps adults with very low lung function at presentation, which his inability to do a peak flow suggests | low |
| asthma-copd-33 | q2 | explanation | "CPAP ... treats neither problem" was false, because CPAP can raise oxygenation. Reworded | low |

## Key changes

- asthma-copd-44 q2: before "5.5" (index 3), after "7.0" (index 4). The stem now includes a previous DVT so that Wells is high on every Thrombosis Canada scheme and q3 has one best answer. The options, q3 key (CT pulmonary angiography) and q4 key (anticoagulate now) are unchanged. Single key positions are now 21, 22, 22, 18, 17, so the highest is still 22 percent.
- asthma-copd-48 q1 (review-extra): before "Increase the bagging rate" (index 3), after "Disconnect from the bag" (index 1). The key contradicted its own explanation.

## Items the brief asked to check first

- Rosen-only claims (17 questions, all checked). Now re-sourced to verified open texts: 23 q1 to q3, 28 q1, 30 q2 and q3, 37 q1 to q3. Still cited to Rosen with standard content I could not check against the book: 19 q1 and q2 (MAT), 29 q2 (ipratropium in beta-blocker bronchospasm), 30 q1 (gas chemistry), 32 q1 (stair test in a teen with asthma), 34 q2 (bedside echo), 45 q1 (acid-base arithmetic, recomputed and correct: pCO2 up 18, HCO3 up 2, about 1 per 10 as expected acutely), and 45 q3. No open, verifiable source was found for an exertion test before asthma discharge (32 q1). CFPC key feature 8 names a "road test", but that is a blueprint, not a clinical source.
- 28 q1 and 32 q1: 28 q1 is fixed (Ottawa COPD Risk Scale). 32 q1 remains on Rosen, see physician items.
- 45 q3: fixed as above.
- 31 q2 and q4 against CCS heart failure: the full text was not reachable (onlinecjc, ccs.ca and academia all returned 403 or 503). The key logic is sound. Wording was softened and both are flagged low.
- 28 q3 and 46 q3 (claims outside the cited source): both fixed. 46 q3 turned out to be supported by GINA once reworded.
- 20 q2: the distractor was defensible. Fixed.
- 27 q3: the key holds. GINA's supervised first-dose caveat was added.

## Verified and found correct (selected)

- PRAM totals: 20 (10), 25 (6 to 1), 36 (12), 47 (5), all against the TREKK PRAM table.
- Doses against TREKK: salbutamol 5 puffs or 2.5 mg under 20 kg, ipratropium 4 puffs or 250 mcg at all weights, dexamethasone 0.6 mg/kg (max 12 mg), hydrocortisone 8 mg/kg (max 400 mg), magnesium 50 mg/kg (max 2 000 mg), prednisolone max 60 mg, fluticasone low doses (50, 100, 125 mcg BID), budesonide-formoterol at 12 years or older. Also checked: discharge criteria (PRAM 3 or less, 1 to 2 hours, SpO2 92% or more), admission rule (PRAM 4 or more at 4 to 6 hours), ICS at PRAM 4 or more, follow-up within 7 days, and the higher-risk list.
- GINA 2026: O2 not given unless SpO2 below 92%, target 92 to 95% (upper 95%), 92% or more under 6 years. Also checked: Box 12-1 severe criteria, preschool OCS doses (prednisolone max 30 mg at 2 to 5 years, dexamethasone max 12 mg), return if SABA is needed within 4 hours, Box 9-1 red flags, referral criteria, follow-up within 2 to 7 days, MART after ED discharge, SABA toxicity, AERD, ophthalmic beta blockers, PaCO2 and respiratory failure, NIV not in agitated patients, magnesium criteria, OCS 40 to 50 mg for 5 to 7 days with no taper, antibiotics only with strong evidence of infection, chest X-ray features in children, and central airway obstruction.
- GOLD 2026: the Rome severity criteria (severe includes PaO2 60 mmHg or less, or hypercapnia with acidosis, as written). Also checked: prednisone 40 mg for 5 days, the pneumonia and mortality signal with longer courses, antibiotic criteria including any mechanical ventilation, no procalcitonin-guided protocols, air-driven nebulizers, stopping NIV after 4 hours unassisted, failed NIV as an indication for intubation, and rehabilitation within 4 weeks.
- Thrombosis Canada 2025: the Wells thresholds and anticoagulation when imaging is delayed more than 4 hours.
- CPS bronchiolitis: superficial suctioning, and no routine salbutamol, epinephrine, steroids or hypertonic saline. Oxygen below 90%.

## Sources verified

- GINA 2026, full PDF: https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf
- GOLD 2026, full PDF: https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf
- TREKK asthma BLR v2.1 and severe algorithm v2.0, full PDFs (URLs as cited)
- Thrombosis Canada PE diagnosis guide, full PDF (URL as cited)
- CPS bronchiolitis statement: https://cps.ca/en/documents/position/bronchiolitis
- CTS 2023 COPD pharmacotherapy (abstract via Europe PMC, and summary at https://pmc.ncbi.nlm.nih.gov/articles/PMC11333456/)
- Stiell 2014 CMAJ, added: https://pmc.ncbi.nlm.nih.gov/articles/PMC3971051/
- Kouritas 2015 J Thorac Dis, added: https://pmc.ncbi.nlm.nih.gov/articles/PMC4332083/
- White and Martin 2010 Proc Am Thorac Soc, added: https://pmc.ncbi.nlm.nih.gov/articles/PMC3136961/
- Boyer 2012 NEJM, added: https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/
- Checked for existence only (PubMed record, full text not read): Halvorsen 2017 ERS/ELS, Ernst 2004, Brenner 2009, Rochwerg 2017, O'Driscoll 2017, Roberts 2023 BTS pleural (small-bore 8 to 14 Fr drain for SSP confirmed via secondary summary).
- CCS 2017 HF: the full text could not be reached. The ARNI and NT-proBNP tip was seen only in search excerpts. BC Guidelines 2024 HF (https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/hf_guideline_complete_2024.pdf) confirms that BNP rises with sacubitril-valsartan.

## Needs physician decision

1. asthma-copd-32 q1: the exertion test before discharge in a 14-year-old with asthma. No verifiable source was found, and Rosen was not checked. Confirm the item or supply a source.
2. asthma-copd-31 q2 and q4: confirm the CCS 2017 wording on NT-proBNP in ARNI patients and on IV furosemide dose relative to the oral dose.
3. asthma-copd-45 q3: confirm that IPAP 10 and EPAP 5 is an acceptable starting setting for the Canadian audience. UK guidance starts higher.
4. Remaining Rosen-only items (19 q1 and q2, 29 q2, 30 q1, 34 q2, 45 q1 and q3): the content is standard, but it was not checked against the textbook.
5. asthma-copd-27 q3: acetaminophen in AERD. GINA supports it with a supervised first dose. Confirm that 650 mg is the intended dose.
6. review-extra.ts: asthma-copd-48 and 49 are verbatim copies of 26 and 37 (same stems). They would fail the near-duplicate stem test if merged. Do not add them to the batch.

## Summary

- 34 SAMPs reviewed (32 in the batch and 2 extra), 117 questions.
- 19 fix rows across 15 SAMPs: 2 key changes (44 q2 by stem rebuild, 48 q1), 1 distractor rebuilt (20 q2), 1 invented fact removed (49 q2), 5 Rosen-only SAMPs re-sourced to verified open texts (23, 28 q1, 30, 37, 49), 1 claim outside the cited source (28 q3), and 9 explanation, option or stem corrections.
- SAMP ids with a defect: asthma-copd-19, 20, 23, 27, 28, 30, 31, 33, 37, 42, 44, 45, 46, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s25` is clean, and `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 675 of 675.
