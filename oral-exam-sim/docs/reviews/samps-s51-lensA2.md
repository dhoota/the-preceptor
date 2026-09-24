# SAMP review, batch s51, Lens A (clinical truth), second pass

Lens: A, clinical truth.

Scope: the five SAMPs rebuilt after the first two reviews (sob-23, sob-33, sob-37, sob-43, sob-46 in `src/samps/s51/sob.ts`) and every SAMP in `src/samps/s51/review-extra.ts` (sob-48, sob-49). Each was read question by question against the stem, and every scenario and teaching point was searched across the whole bank with `grep -ril` over `src/samps/`. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| sob-43 | all | whole SAMP | The new negative pressure pulmonary edema case repeats pulmonary-edema-23 in `src/samps/s48/pulmonary-edema.ts`: a young man with pink frothy sputum after upper airway obstruction, keyed CPAP in an alert patient, resolution in 24 to 48 hours, same Bhattacharya source. The writer's note that no committed SAMP covered this was wrong. Rebuilt from the stem up as interrupted IV epoprostenol in pulmonary arterial hypertension, a scenario not found anywhere in the bank | high |
| sob-43 | draft | whole SAMP | My first rebuild (hypotensive right ventricular failure with norepinephrine, then intubation and ventilator settings) repeated airway teaching in s21 (norepinephrine before induction, no 2 L bolus, no permissive hypercapnia, modest PEEP) and s16 shock (norepinephrine first, dobutamine alone lowers BP). I replaced it before finishing. The final version teaches restarting a stopped prostanoid infusion, lactate as the perfusion marker when BNP is chronically high, and not stopping or reducing pulmonary vasodilators in the emergency department | high |
| sob-23 | q3 | options, key | "Catheter pulmonary angiography" could be defended. In the original Wells 1998 management study, patients with a high pretest probability and a nondiagnostic scan had angiography. Replaced with "Single ultrasound of both legs", which teaches why the ultrasound is repeated. Key moved from index 4 to 3 with the same answer | medium |
| sob-23 | q3 | prompt | Lead-in asked for the "next test", but two options (anticoagulate, discharge) are not tests. Changed to "next step" | medium |
| sob-46 | q1 | source, explanation | Cited a UK guideline (BTS 2011) for reassessing a child who is not improving, although a Canadian one exists. Now cites CPS 2015 (Le Saux and Robinson), which advises a radiograph and reassessment for empyema when there is no response at 48 to 72 hours | high |
| sob-46 | q2 | source, explanation | Cited BTS 2005 for pleural infection in children. The CPS 2011 empyema statement is the Canadian source. Now cites it: early drainage in moderate to severe distress, by a small bore tube with fibrinolytics or by thoracoscopic surgery, with IV cefotaxime or ceftriaxone | high |
| sob-46 | q2 | options, key | The distractor "Thoracotomy and decortication now" could be defended under the CPS statement, which lists early thoracotomy among the options with the best length of stay outcomes. Replaced with "IV antibiotics alone and reassess", which CPS says prolongs the illness. Key moved from index 1 to 2 with the same answer | medium |
| sob-46 | q3 | explanation | The BTS 2011 threshold is saturation at or below 92%, not below 92%. Wording corrected | low |
| sob-33 | q3 | explanation | Awake flexible intubation, the usual CAFG choice for an anticipated difficult airway, is left out of the options with no explanation. A candidate would ask why. Added one sentence: a friable, tight glottic mass may block the scope or bleed, so the awake surgical airway is the safer plan | low |
| sob-48 (extra) | q1 | correct | Planted defect back on disk again. Key was 4, "Retropharyngeal abscess", while the stem and explanation describe Ludwig angina. Set to 2 | high |
| sob-49 (extra) | q2 | explanation | Planted defect back on disk again. Closing sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" traces to nothing in the case, and lactate says nothing about how long hypercapnia has lasted. Removed | high |

## Key changes

- sob-23 q3: index 4 to 3. The answer is unchanged ("Serial leg compression ultrasound"). It moved because a distractor was replaced.
- sob-46 q2: index 1 to 2. The answer is unchanged ("IV antibiotics and chest drainage"). It moved because a distractor was replaced.
- sob-43: the whole SAMP is new. q1 keys "epoprostenol infusion restarted" (index 1). q2 keys "Lactate of 4.6 mmol/L" (index 1). q3 is a menu keyed "Call her pulmonary hypertension specialist" and "Continue her usual tadalafil". Key features are unchanged at 3, 4 and 3. Source: Wilcox 2015. The Bhattacharya 2016 and Berlin 2012 sources are removed.
- sob-48 q1: index 4 to 2 (Retropharyngeal abscess to Ludwig angina).

## Items checked and found correct

- sob-23 q1: Wells 3 + 1.5 + 1.5 + 1.5 = 7.5. Thrombosis Canada (version 6 August 2023) calls a score of 4.5 or more "PE likely" and goes straight to imaging.
- sob-23 q2: Thrombosis Canada footnote f supports a V/Q scan or proximal leg ultrasound when suspicion stays high after a negative initial CTPA. A CT that could not assess the segmental arteries is fairly treated as nondiagnostic.
- sob-23 q3: Thrombosis Canada footnote d supports serial leg ultrasound when a V/Q scan is neither normal nor high probability. See the physician item below.
- sob-33: stridor loudest over the neck with no wheeze, and bronchodilators not working, fit a fixed laryngeal obstruction. The menu keys (hoarseness, node, inspiratory noise) are the right three. Awake tracheostomy under local anesthesia is the accepted approach for a tight, friable glottic tumour in a patient who is still breathing.
- sob-37: acute compensation of about 1 mmol/L per 10 mmHg gives 24 + 4.4, about 28 mmol/L. Chronic compensation (about 3.5 to 4 per 10 mmHg) would give about 39 to 42. A value of 35 fits acute on chronic. Henderson-Hasselbalch 6.1 + log(35 / (0.03 x 84)) = 7.24. BTS/ICS 2016 advises NIV in obesity hypoventilation by the same criteria as COPD and an SaO2 of 88 to 92% on NIV. ATS 2019 defines obesity hypoventilation as a BMI of 30 or more with awake hypercapnia once other causes are excluded.
- sob-46 q3: BTS 2011 gives oxygen at 92% or below by nasal cannula, head box or face mask. No CPS threshold exists, so the BTS citation stays for this question.
- sob-43 (new): Wilcox 2015 supports each keyed point: restart a stopped prostanoid infusion at once, through a peripheral IV if needed. Do not stop or reduce it for side effects such as flushing. Continue oral pulmonary vasodilators. Avoid beta blockers in right ventricular failure. Norepinephrine is the first-line vasopressor. Large boluses harm a volume overloaded right ventricle. Intubation risks collapse. Lactate is followed to judge the response. Epoprostenol, macitentan and tadalafil are all sold in Canada.
- sob-48: q2 (stridor as the sign of impending obstruction), q3 (awake intubation with a surgical airway ready) and q4 (IV antibiotics and surgical drainage) are clinically sound.

## Sources verified

- Thrombosis Canada. Pulmonary embolism diagnosis. Version 6 August 2023. Text of footnotes d and f read from the PDF: https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf
- Wells PS et al. Use of a clinical model for safe management of patients with suspected pulmonary embolism. Ann Intern Med. 1998 (PMID 9867786): https://pubmed.ncbi.nlm.nih.gov/9867786/ (used for the physician item. The abstract could not be fetched, only the search summary)
- Wilcox SR, Kabrhel C, Channick RN. Ann Emerg Med. 2015. Full text read: https://pubmed.ncbi.nlm.nih.gov/26342901/ and https://emcrit.org/wp-content/uploads/2016/03/Pulm-HTN-Wilcox.pdf
- Hoeper MM, Granton J. Am J Respir Crit Care Med. 2011 (checked as background, not cited): https://pubmed.ncbi.nlm.nih.gov/21700906/
- Chibuk TK et al. CPS. Paediatric complicated pneumonia. Diagnosis and management of empyema. Paediatr Child Health. 2011: https://pmc.ncbi.nlm.nih.gov/articles/PMC3200394/
- Le Saux N, Robinson JL. CPS. Uncomplicated pneumonia in healthy Canadian children and youth. Paediatr Child Health. 2015: https://pmc.ncbi.nlm.nih.gov/articles/PMC4699530/
- Harris M et al. BTS community acquired pneumonia in children. Thorax. 2011: https://www.brit-thoracic.org.uk/document-library/guidelines/pneumonia-in-children/bts-guideline-for-the-management-of-community-acquired-pneumonia-in-children-update/
- Davidson AC et al. BTS/ICS acute hypercapnic respiratory failure. Thorax. 2016. Obesity hypoventilation and oxygen target recommendations confirmed by search.
- Mokhlesi B et al. ATS obesity hypoventilation guideline. 2019: https://doi.org/10.1164/rccm.201905-1071ST
- Eskander A, de Almeida JR, Irish JC. N Engl J Med. 2019, volume 381, pages 1940 to 1949: https://pubmed.ncbi.nlm.nih.gov/32074437/
- Law JA et al. CAFG Part 2. Can J Anesth. 2021: https://doi.org/10.1007/s12630-021-02008-z

## Overlap search

Terms searched across `src/samps/`: negative pressure, choked on, abdominal thrusts, laryngeal, glottic, tracheostomy, obesity hypoventilation, hypoventilation, empyema, parapneumonic, septated, Ludwig, floor of the mouth, nondiagnostic, neither normal nor high, serial compression, V/Q, 88 to 92, acute on chronic hypercapnia, compensation per 10 mmHg, pulmonary hypertension, epoprostenol, prostacyclin, permissive hypercapnia, pulmonary vascular resistance.

- sob-43 (old): duplicate of pulmonary-edema-23 (s48). Rebuilt, see above.
- sob-23: no other SAMP tests a nondiagnostic CT or V/Q scan followed by serial leg ultrasound. s33 dvt-pe and s08 dvt-pe mention serial ultrasound in other settings. No overlap.
- sob-33: the scenario (laryngeal cancer labelled as COPD) is new. q3's teaching point, an awake tracheostomy under local anesthesia, is also keyed in airway-20 q4 (s21), but after a failed awake flexible intubation in Ludwig angina. s25 teaches that salbutamol does not help inducible laryngeal obstruction, a different disease. Low. Left as is.
- sob-37: the scenario (obesity hypoventilation) is new. q2's point that bicarbonate separates acute from acute on chronic hypercapnia, about 1 mmol/L per 10 mmHg, is also taught in s25 asthma-copd (the item near line 2492). q3's point (bilevel NIV for acidotic hypercapnia with oxygen at 88 to 92%) is keyed in several s25 items, in s17 sob and in sob-27 in this batch. Medium. Flagged below, not rewritten.
- sob-46: no pediatric empyema or parapneumonic effusion elsewhere in the bank, including s46 pediatric fever and s14 pediatric fever. No overlap.
- sob-48: copies sob-26 almost word for word. It also repeats airway-20 (s21, a lower molar source, woody floor of mouth, awake nasal flexible intubation) and the Ludwig angina SAMP in s41 infectious-diseases (lower molar, type 2 diabetes on metformin, awake intubation, IV antibiotics for oral flora). High.
- sob-49: copies the rebuilt sob-37 word for word. High.

## Needs physician decision

- sob-23 q3: Thrombosis Canada 2023 advises serial leg ultrasound after any V/Q scan that is neither normal nor high probability. The Wells 1998 study behind that pathway sent patients with a high pretest probability and a nondiagnostic scan to angiography. Serial ultrasound was mainly for low and moderate pretest probability. This patient's Wells score is 7.5. The key follows the current Canadian guide, but a physician should confirm it. The alternative is to lower the pretest probability in the stem.
- sob-37 q2 and q3: repeat teaching points already in s25, s17 and sob-27 (see overlap). A physician may want q3 moved to a point specific to obesity hypoventilation, for example the high EPAP often needed, or ATS advice to discharge on PAP until outpatient titration.
- sob-26 (outside the five named SAMPs, but in this batch): Ludwig angina repeats airway-20 (s21) and the s41 infectious-diseases Ludwig SAMP in scenario and teaching. The earlier reviews did not flag it. Recommend a rebuild or dropping it.
- review-extra.ts: both planted defects were back on disk for the third time (sob-48 key, sob-49 lactate), and sob-49 now copies the rebuilt sob-37. Neither extra should enter the bank. Someone should check what keeps restoring this file.

## Summary

- 7 SAMPs read (5 rebuilt, 2 extra).
- Fixes: 11 table rows across 6 SAMPs. 1 full rebuild for overlap (sob-43). 2 defensible distractors replaced (sob-23 q3, sob-46 q2). 2 UK sources replaced with Canadian CPS statements (sob-46 q1, q2). 1 lead-in fixed (sob-23 q3). 1 threshold wording (sob-46 q3). 1 missing explanation for a left-out option (sob-33 q3). 2 planted defects fixed again (sob-48 key, sob-49 made-up lactate).
- Key changes: 4 (sob-43 rebuilt, sob-48 q1, and two index moves with the same answer in sob-23 q3 and sob-46 q2).
- Most serious: sob-43 duplicated a committed s48 SAMP. The sob-48 wrong key and sob-49 made-up claim came back again.
- SAMPs with a defect: sob-23, sob-33, sob-37 (overlap flag), sob-43, sob-46, sob-48, sob-49. Also flagged outside the named scope: sob-26.
- Gates: `tsc` shows no errors in samps/s51. `SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 647 passed.
