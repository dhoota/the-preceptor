# Batch s19 adversarial review

Scope: every .ts file in src/bank/s19. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s19-91 and rn-s19-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script, including the unit pairs, the temperature pairs, the fasting intervals and the arithmetic in the distractor whys.

The session web search budget ran out before this review began. Citations were checked with WebFetch, the PubMed E-utilities and the Europe PMC API instead. The method for each source is given below.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s19-92 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s19-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says that. They now say each agent has no effect on magnesium. | B | medium |
| rn-s19-91 | why, option 1 | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". Its onset takes hours, and it does not protect the heart. | A | high |
| rn-s19-49 | sources | Cited the Surviving Sepsis Campaign 2021 guideline. The 2026 edition (Prescott et al.) replaced it. The SSC constant in common.ts now cites the 2026 edition. | A | high |
| rn-s19-49 | refs, rationale, option 3 why | The refs said antimicrobials start within 1 hour of recognition in all suspected sepsis. The 2021 source gave 1 hour only for possible shock or high likelihood of sepsis, and 3 hours otherwise. I could not read the 2026 timing wording. The text now says the antibiotic starts without delay. | A | medium |
| rn-s19-36 | sources | Same superseded Surviving Sepsis Campaign 2021 citation. Now the 2026 edition. | A | high |
| rn-s19-29 | sources | Cited the 2019 AHA and ASA stroke update. The 2026 AHA and ASA guideline (Prabhakaran et al.) states that it replaces the 2018 guideline and its 2019 update. The STROKE constant now cites the 2026 guideline. | A | high |
| rn-s19-01 | rationale and refs | The item said metformin is held when the eGFR is "30 or less" and restarts "if kidney function is stable". The ACR Manual says eGFR below 30 and restart only after renal function is re-evaluated. The text now matches the source. | A | medium |
| rn-s19-05 | option 0 text | Hemoglobin 13.1 g/dL was called "within the normal range", but the stem gives no sex. 13.1 is below the adult male range. It is now 14.1 g/dL (141 g/L), which is normal for either sex. | B | medium |
| rn-s19-11 | why, option 3 | The why said raising the drainage unit "lets drainage flow back". The stem says the tubing has come apart from the unit, so nothing can flow back into the chest. The why now says moving the unit does not seal the open tube. | B | high |
| rn-s19-47 | why, option 1 | The why called the tachycardia "persistent". The stem gives one reading of 126/minute against an earlier 92/minute. The why now says a rising heart rate is often the first sign of a leak. | B | medium |
| rn-s19-46 | sources (TRACH url) | The URL pointed to PMID 23818538, a letter to the editor. The consensus statement cited (Otolaryngol Head Neck Surg 148(1):6) is PMID 22990518. | A | high |

## Key changes

- rn-s19-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate is the antidote for magnesium toxicity (SOGC Guideline No. 426, the item's own source). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Items checked with no defect

The other 40 items in the bank passed both lenses. These points were checked closely:

- Temperature pairs: 37.3, 37.4, 37.6, 38.1, 38.2, 38.3, 38.6, 38.9, 39.0 and 39.4°C all convert to the stated Fahrenheit values.
- Unit pairs: creatinine 1.0, 1.5 and 2.1 mg/dL against 88, 133 and 186 micromol/L, the 0.3 mg/dL AKI rise against 27 micromol/L, BUN 142 mg/dL against 50.7 mmol/L, albumin 3.6 g/dL against 36 g/L.
- Item 06: 0.5 mL/kg/hour times 80 kg is 40 mL/hour, and 32 and 28 mL are both below it.
- Item 02: 0800 to 1300 is 5 hours, under the 6 hour rule. Item 38: 2000 to 1000 is 14 hours and 0630 to 1000 is 3.5 hours.
- Item 42: with HCO3 34 mEq/L, expected PaCO2 by Winter's rule for metabolic alkalosis is 0.7 x 34 + 21 = 44.8 mmHg. The PaCO2 of 46 mmHg is consistent with compensation, as the item says.
- Item 14: 1.0 to 2.1 mg/dL over 48 hours meets the KDIGO definition.
- Item 05: the BSG guideline recommends a transvenous approach when platelets are below 50 x 10^9/L, which supports the 42 000/mm3 key.

## Sources verified

- ACR Manual on Contrast Media 2024. PDF text read. It gives eGFR below 30 or AKI, hold at the time of contrast, withhold 48 hours, restart only after renal function is re-evaluated. It also classes eGFR below 30 as at risk for NSF with group I and III agents. https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2024/08/ACR-contrast-2024.pdf
- Neuberger J et al. Gut 69(8):1382, 2020. Full text read through Europe PMC. https://pmc.ncbi.nlm.nih.gov/articles/PMC7398479/
- Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign 2026. Crit Care Med 54(4):725-812. PubMed record confirmed. A 2026 commentary confirms cultures before antimicrobials. https://pubmed.ncbi.nlm.nih.gov/41869847/ and https://criticalcarescience.org/article/using-the-2026-surviving-sepsis-campaign-guidelines-in-practice/
- Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 AHA and ASA acute ischemic stroke guideline. Stroke 57(8):e316-e436. The abstract says it replaces the 2018 guideline and the 2019 update and updates dysphagia management. https://pubmed.ncbi.nlm.nih.gov/41582814/
- Mitchell RB, Hussey HM, Setzen G, et al. Clinical consensus statement: tracheostomy care. Otolaryngol Head Neck Surg 148(1):6-20, 2013. https://pubmed.ncbi.nlm.nih.gov/22990518/
- US FDA. Pulse Oximeter Accuracy and Limitations: FDA Safety Communication, 19 February 2021. https://content.govdelivery.com/accounts/USFDA/bulletins/2c276cb
- PubMed records confirmed for author, journal, volume and pages: Restrepo 2011 (22008401), AARC suctioning 2010 (20507660), McDonald 2018 (29462280), ACOG PB 229 (34011889), Mitchell 2019 tonsillectomy (30798778), Li 2022 ISPD (35264029), Anderson 2019 ASH (31794602), Fisher 2011 ASGE (21951473), ADA 2026 section 2 (41358893), Simpson 2020 AWHONN (32778395), Rosenberg 2015 (26238698), ASA fasting 2017 (28045707), Kligfield 2007 (17322457), Konstantinides 2020 (31504429), Freeman 2011 (21431947), Lok 2020 KDOQI (32778223), Greenberg 2020 (31355502), Magee 2022 SOGC 426 (35577426).
- Not checked this session: the textbook sources (Hinkle 15th edition, Potter 11th edition, Hockenberry 12th edition), KDIGO 2012 and ADA 2026 section 6. They are reused from batches whose reviewers verified them.

## Needs Arjan's decision

- The key change to rn-s19-92 above.
- rn-s19-49: the item no longer states a 1 hour antibiotic target. I could not read the 2026 Surviving Sepsis timing recommendations. If the 2026 edition keeps 1 hour for probable sepsis, the 1 hour teaching can return with a ref that names the condition it applies to.
- rn-s19-29: the 2026 stroke guideline replaced the 2019 update. Its abstract confirms dysphagia recommendations, but I could not read their wording to confirm "before food, fluid or oral medicines".
- rn-s19-43: AWHONN published a 6th edition of Cervical Ripening and Labor Induction and Augmentation in 2025. The item cites the 5th edition of 2020. The teaching point is unchanged, but the citation may need updating, as flagged in s15.
- rn-s19-24: the 0 to 60 degree head of bed range is cited to Hinkle alone. I could not confirm the wording. The AACN Procedure Manual would be a stronger source.
- rn-s19-47: a bariatric source would strengthen the item. Kim J et al., ASMBS position statement on gastrointestinal leak, Surg Obes Relat Dis 11(4):739, 2015 (PMID 26071849), exists, but I could not read the full text to confirm the heart rate wording, so I did not add it.
- rn-s19-48: the cjmm is evaluate. The item asks for the best response to a new symptom, which reads as take action. I left it for Arjan.
- rn-s19-40: process is teaching, but the item asks the nurse to interpret a result, not to teach.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 12 fixes in 10 items: 8 items in the bank and both extra items. 1 key change, in extra item rn-s19-92. 8 points go to Arjan. The tsc check prints nothing for bank/s19. BATCH=s19 npx vitest run tests/bank.test.ts passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
