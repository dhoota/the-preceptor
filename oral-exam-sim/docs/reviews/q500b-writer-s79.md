# Q500B writer report: s79, Shortness of breath

Batch `s79`, topic `sob`. File `src/samps/s79/sob.ts`, array `SOB_S79`. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting | Questions | Key features |
|---|---|---|---|---|
| sob-48 | Noisy breathing that keeps coming back | Community hospital, 12-week-old girl | 4 single | 1, 1, 3, 1 |
| sob-49 | Breathless two weeks after ankle surgery | Rural northern Ontario, no CT, 57-year-old man | 4 single | 5, 5, 3, 4 |
| sob-50 | Pleuritic pain after a previous clot | Tertiary, 46-year-old woman | 4 single | 5, 5, 5, 2 |
| sob-51 | Breathless when he stands up | Tertiary, 56-year-old man with cirrhosis | 4 single | 2, 4, 2, 2 |
| sob-52 | Sore throat and drooling in a small girl | Rural northern Manitoba, 4-year-old girl | 4 single, 1 menu | 1, 1, 4, 3, 3 |

21 questions: 20 single, 1 menu (sob-52 q2, select two of seven).

Single key positions (first to fifth): 4, 5, 2, 5, 4. The key is the longest option in 1 of 20 single questions (sob-52 q4).

## Key feature coverage

Bank counts before this batch: KF1 15, KF2 35, KF3 50, KF4 24, KF5 16. The extra questions went to the thinnest features.

| Key feature | This batch | Bank after |
|---|---|---|
| 1 Upper versus lower airway | 5 | 20 |
| 2 Broad differential, non-pulmonary causes | 4 | 39 |
| 3 Treat before the final diagnosis, choose ventilation | 4 | 54 |
| 4 Gauge severity objectively | 3 | 27 |
| 5 PE testing guided by pretest probability | 5 | 21 |

## New angles (checked against all 47 existing sob SAMPs, the dvt-pe bank and sob oral cases)

- sob-48: subglottic airway hemangioma labelled as croup in a young infant with a beard-area hemangioma. The bank had this only as a red-flag line in an oral case.
- sob-49: high-probability PE in a rural hospital with no CT overnight. Covers bedside leg ultrasound first, why a negative two-point ultrasound and a normal RV do not lower probability, empiric therapeutic LMWH while imaging is delayed, and the threshold for thrombolysis.
- sob-50: suspected recurrent PE. Wells with a previous PE, D-dimer still valid after a previous PE, chronic web against a baseline scan, and pneumonia as the real cause.
- sob-51: hepatopulmonary syndrome (platypnea and orthodeoxia). Not in the bank before. Includes an A-a gradient calculation.
- sob-52: Hib epiglottitis in an unimmunized child in a remote setting. The bank's epiglottitis items were adult or thermal.

## Sources and verification

- Corbeddu M and colleagues. Management of upper airway infantile hemangiomas. Front Pediatr. 2021. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC8688849/ (onset at 2 to 4 months, biphasic stridor, beard area, often mistaken for croup, endoscopy as the gold standard, propranolol first-line).
- Ortiz-Alvarez O, CPS Acute Care Committee. Acute management of croup in the emergency department. 2017, updated 2026. Opened at https://cps.ca/en/documents/position/acute-management-of-croup (5 mL of 1:1000 L-epinephrine for all ages and weights, croup under 6 months needs further assessment).
- Konstantinides SV and colleagues. 2019 ESC PE guidelines. Eur Heart J. 2020. Opened at https://academic.oup.com/eurheartj/article/41/4/543/5556136 by way of https://doi.org/10.1093/eurheartj/ehz405 (CUS finds proximal DVT in 30 to 50% of patients, a positive CUS is enough to treat, echo NPV 40 to 50%, definition of hemodynamic instability, no routine thrombolysis in intermediate risk, rescue thrombolysis). The anticoagulate-while-testing recommendation (Class I, Level C) was confirmed through secondary summaries: https://pmc.ncbi.nlm.nih.gov/articles/PMC7873787 and https://solaci.org/en/2020/03/04/what-to-do-and-what-not-to-do-in-case-of-pe-according-to-the-new-european-guidelines/
- Mos IC and colleagues. Suspected recurrent PE management study. Thromb Res. 2014. Abstract confirmed through https://repub.eur.nl/pub/72273 (Wells, D-dimer and CTPA effective in suspected recurrent PE). No url in the item.
- Wittram C and colleagues. CT angiography of PE: diagnostic criteria and causes of misdiagnosis. RadioGraphics. 2004. Abstract confirmed through https://pubs.rsna.org/doi/abs/10.1148/rg.245045008 search record (chronic: obtuse angles, webs, recanalization. Acute: central or acute angles). No url in the item.
- Le Gal G and colleagues. Validation of a diagnostic approach to exclude recurrent VTE. J Thromb Haemost. 2009. Abstract confirmed through https://hal.univ-brest.fr/hal-00726279 (no change from baseline imaging safely excludes recurrence). No url in the item.
- Soulaidopoulos S and colleagues. Update on hepatopulmonary syndrome. World J Gastroenterol. 2018. Opened at https://pmc.ncbi.nlm.nih.gov/articles/5871824/ (A-a gradient 15 mmHg, or 20 in older patients, bubbles on beats 4 to 6, under 3 beats means an intracardiac shunt, transplant the only established treatment, methylene blue, pentoxifylline and garlic unproven).
- Cheng AG. Epiglottitis. MSD Manual Professional. Reviewed June 2026. Opened at https://www.msdmanuals.com/professional/ear-nose-and-throat-disorders/oral-and-pharyngeal-disorders/epiglottitis (drooling without a barking cough, tripod posture and giving it up, no throat exam, no radiology room, bag-mask as a life-saving temporary measure, ceftriaxone 50 to 75 mg/kg up to 2 g).

## Numbers recomputed

- sob-49 Wells: DVT signs 3, PE most likely 3, pulse 114 gives 1.5, surgery 16 days ago gives 1.5, total 9. Dalteparin 200 units/kg at 92 kg is 18 400 units.
- sob-50 Wells: previous PE 1.5 only, pulse 96 scores 0, total 1.5, PE unlikely.
- sob-51 A-a gradient: 0.21 x 713 = 149.7, minus 30/0.8 = 37.5, gives 112.2. Minus PaO2 62 gives 50 mmHg.
- sob-52 ceftriaxone: 1 g at 17 kg is 59 mg/kg, inside 50 to 75 mg/kg.

## Uncertain, for the reviewers

1. sob-48 q3 keys nebulized epinephrine for an airway hemangioma before endoscopy. The CPS dose comes from the croup statement. Corbeddu does not discuss epinephrine as a bridge. Its use here rests on general upper airway practice. Please check this is acceptable or reword the key.
2. sob-48 q4 transfer as the disposition is a judgment for a community hospital. The source supports endoscopy and propranolol, not a named transfer rule.
3. sob-49 q3 says apixaban 5 mg twice daily is the maintenance dose, not the starting dose. This is standard product labelling. The cited ESC page was not read for this line.
4. sob-49 q4 is a hypothetical (no finding is given). It tags KF4 as severity grading of PE, not respiratory failure.
5. sob-50 q3 distractors (flow artifact, lymph node, bronchus) are named as mimics in Wittram's misdiagnosis categories. Only the abstract was read.
6. sob-51 q4 (transplant) is tagged KF2 as a management consequence of a new problem in chronic disease. It could be argued as off key feature.
7. sob-52 q5 statements about cefazolin and vancomycin coverage are standard microbiology and are not in the MSD page.
8. sob-51 vitals give O2 sat 93% on room air at triage, while the stem gives 95% lying and 87% standing. This is intended.
9. The bank-wide near-duplicate test passes but timed out at 5 seconds under heavy machine load (load average about 14 on 4 cores). It passes with a longer timeout.
