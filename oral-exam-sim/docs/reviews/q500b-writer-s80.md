# Q500B writer report: s80, airway

Author: Preceptor. All items are `reviewed: false`, `version: 1`.

## Ids written

File `src/samps/s80/airway.ts`, array `AIRWAY_S80`.

| Id | Title | Setting | Questions |
|---|---|---|---|
| airway-48 | Swollen abdomen and dark vomit | Tertiary, older woman on hemodialysis with bowel obstruction | 4 single |
| airway-49 | Seizing on arrival at a community hospital | Community, woman with BMI 47 in status epilepticus | 1 menu, 3 single |
| airway-50 | Feverish preschooler at a rural hospital | Rural, 3-year-old in septic shock before air transfer | 4 single |
| airway-51 | Hoarse for months, now noisy breathing | Regional hospital, man with an obstructing glottic tumour | 1 menu, 3 single |
| airway-52 | Overdose when the monitor fails | Rural, woman with BMI 44 after a quetiapine overdose, no waveform capnography | 4 single |

20 questions: 18 single, 2 menu.

Single key positions (first to fifth): 2, 4, 4, 4, 4. No position is above 25 percent. The key-length and position gates pass.

## Key feature coverage

Bank counts before this batch (grep of `keyFeature: { topic: "airway", n: N }`): n1 20, n2 23, n3 33, n4 37, n5 29, n6 28.

| Key feature | This batch | Items |
|---|---|---|
| 1 Rescue when first attempts fail | 6 | 48 q3, 48 q4, 49 q2, 49 q4, 50 q1, 50 q2 |
| 2 Anticipate early intubation | 1 | 51 q1 |
| 3 Predict difficulty and prepare | 3 | 49 q1, 51 q2, 52 q1 |
| 4 Special contexts | 4 | 48 q1, 50 q3, 51 q3, 52 q4 |
| 5 RSI drug choice | 2 | 48 q2, 51 q4 |
| 6 Confirm placement | 4 | 49 q3, 50 q4, 52 q2, 52 q3 |

Most of the extra questions went to key feature 1, the thinnest. Key feature 2 got only one (see Uncertain).

## New angles, checked against the bank

I read all 47 existing airway SAMPs (s02, s21) and every SAMP in other topics that tests an airway key feature, plus the oral case titles. These key decisions are not in the bank:
- Nasogastric decompression before RSI in bowel obstruction. Rocuronium over succinylcholine for acute hyperkalemia after a missed dialysis. Releasing cricoid pressure when the view is poor. Suction-led laryngoscopy (SALAD) for massive regurgitation.
- A menu of face-mask ventilation predictors in obesity. Shaping the stylet to a hyperangulated blade. Bougie tracheal ring clicks. Rotating the tube counterclockwise when it hangs up on the arytenoid.
- Two-handed mask hold with an oral airway in a child. Moving to videolaryngoscopy after two failed direct laryngoscopy attempts in a child. Gastric insufflation after mask ventilation. A low end-tidal CO2 with a wide PaCO2 gap in shock.
- Glottic tumour: secure today while resources allow, nasendoscopy plus CT review, awake tracheostomy, no sedation with stridor.
- Colorimetric detector false positive from gastric acid. Esophageal detector false result in obesity. Reduced FRC and apnea time.

## Sources and verification

Each was opened with WebFetch, and each point was checked against the text.

- Difficult Airway Society 2015 (Frerk and colleagues, Br J Anaesth 2015): https://academic.oup.com/bja/article/115/6/827/241360. Checked: gastric drainage in intestinal obstruction, releasing cricoid pressure when laryngoscopy is difficult, counterclockwise tube rotation for arytenoid hold-up, keeping the laryngoscope in place, a pre-shaped stylet with angulated videolaryngoscopes.
- Canadian Airway Focus Group 2021 Part 1 (Law and colleagues): https://pmc.ncbi.nlm.nih.gov/articles/PMC8212585/ (DOI 10.1007/s12630-021-02007-0). Checked: two-handed hold, assistant ventilation, routine oral airway, limiting pressure to limit gastric insufflation, a stylet shaped 60 to 90 degrees to match the blade, two direct laryngoscopy attempts in children before videolaryngoscopy or a flexible bronchoscope, scalpel-bougie cricothyrotomy only above about 8 to 12 years, treating gastric distension in children promptly, an attenuated waveform in low-flow states, colorimetric false positives from acidic gastric contents, esophageal detector false results with BMI over 35.
- Canadian Airway Focus Group 2021 Part 2: https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/ (DOI 10.1007/s12630-021-02008-z). Checked: predictor tables for face-mask ventilation, a nasogastric tube to suction before induction, conflicting evidence on cricoid pressure, apneic oxygenation in all morbidly obese patients, "with reduced FRC, apnea is poorly tolerated", securing the obstructed airway when resources allow, nasal endoscopy and CT review, awake tracheotomy, apneic oxygenation failing past an obstruction.
- Hovgaard and Juhl-Olsen 2021: https://pmc.ncbi.nlm.nih.gov/articles/PMC7932779/. Checked: a 0.5 to 1 mmol/L potassium rise in healthy people. A further rise on top of acute hyperkalemia is "probably associated with substantial risk".
- Root and colleagues 2020, SALAD: https://pmc.ncbi.nlm.nih.gov/articles/PMC8244406/. Checked: rigid suction just ahead of the blade, then parking it in the upper esophagus.
- Bair, Laurin, Schmitt 2005: https://ajemjournal.com/article/S0735-67570500157-9/fulltext. Checked: ring clicks were 92% sensitive and 95% specific in cadavers.
- Ahmad and colleagues 2020, DAS awake tracheal intubation: https://pmc.ncbi.nlm.nih.gov/articles/PMC7078877/. Checked: with stridor, "avoid or minimise sedation".

## Uncertain, for reviewers

1. Key feature 2 has only one question, although it is the second-thinnest feature. KF2 scenarios already fill the bank (angioedema, burns, neck hematoma, epiglottitis, hanging, caustics, GBS, myasthenia, cord injury, croup, bronchiolitis, TBI, transfer before a flight). The session's web search limit ran out early, so I could not verify a source for a further new KF2 angle. If the bank needs more KF2, a reviser could add one.
2. 48 q2: the evidence on succinylcholine in pre-existing hyperkalemia is limited. The key rests on the "acute hyperkalemia" wording in Hovgaard, and the stem gives an acute rise after a missed dialysis with peaked T waves. Some EM sources argue that succinylcholine is acceptable in chronic hyperkalemia.
3. 48 q3 and q4: DAS also says cricoid pressure should be reapplied at once if regurgitation occurs. Reapplying it is not an option in q4, and the explanation does not contradict it.
4. 51 q3: CAFG also lists awake oral or nasal intubation for an obstructed airway. The key rests on stem facts: a 4 mm glottic slit that bleeds on contact, and a normal trachea below. Please confirm that a flexible bronchoscopic intubation is clearly inferior here.
5. 49 q3: the clicks data come from a cadaver study. DAS 2015 mentions clicks only in the cricothyroidotomy section.
6. 50 q1: "Neck flexion on a pillow" is wrong for the reason given. Please check the wording about the large occiput.
7. Metoclopramide being contraindicated in mechanical bowel obstruction (48 q1) comes from standard product labelling, not from the cited DAS source.
8. The bank-wide near-duplicate test once timed out at 5 s under heavy machine load. It passed on the final run of the exact command.
