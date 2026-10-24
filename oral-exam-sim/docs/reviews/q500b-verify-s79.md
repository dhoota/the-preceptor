# Q500B verification review: s79, Shortness of breath (revision 1)

Reviewer: fresh independent QA. I did not write or review this batch before. File reviewed: `src/samps/s79/sob.ts` (sob-48 to sob-52, sob-49 rebuilt). Context read: `docs/reviews/q500b-qa-s79.md` (first review, 6 fails) and `docs/reviews/q500b-writer-s79.md` with its "Revision 1" section. No batch file was edited (REVIEW-RULES rule 1).

Tests: `SAMP_BATCH=s79 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed 132 of 132, including the bank-wide near-duplicate stem test (5.2 s).

## First-review fails

1. sob-48 q3 propranolol cue: resolved. The option is now "budesonide 2 mg nebulized", and the last explanation sentence explains why budesonide works over hours. Every option is nebulized, so the q4 update ("after the nebulizer") cues nothing.
2. sob-49 whole SAMP: rebuilt as a tamoxifen PE workup with no orthopedic surgery, no rural no-CT setting, no "anticoagulate while waiting", no lysis threshold and no dalteparin dose. The old repeats are gone. One new repeat is introduced (q2, below).
3. sob-50 q1 Wells: resolved. The Wells score and D-dimer are now stem facts, and q1 asks for the end-of-treatment CT.
4. sob-50 q2 D-dimer first: resolved. The question was removed. The old web and pneumonia questions moved up and a new anticoagulation question was added (one wording fault, below).
5. sob-51 q4 update: resolved ("Testing confirms the diagnosis.").
6. sob-51 q4 explanation: resolved with the exact wording asked for.

## Repeat search

Whole-bank keyword search (src/samps and src/cases, s73 included): tamoxifen, S1Q3T3, "S wave in lead I", right ventricular strain, alveolar to arterial, A-a gradient, normal arterial oxygen, PaO2, two-point, proximal DVT, 41%, residual thrombus, end-of-treatment, baseline imaging, REVERSE, web, hemangioma, hepatopulmonary, platypnea, agitated saline, epiglottitis, unimmunized, unvaccinated, Hib, and the risk-factor stem "most increases".

- **arrhythmia-23 (s24) q4** is a menu asking which ECG findings suggest right heart strain, keyed "S wave in lead I", "Q wave and inverted T wave in III" and "T wave inversion in V1 to V3", with the explanation "reflect acute right ventricular strain from pulmonary embolism". sob-49 q2 gives exactly that pattern and keys "It points to right ventricular strain". That is the same teaching point. The writer's grep for S1Q3T3 missed it because s24 spells the leads out.
- Risk-factor weighting questions ("most increases her risk") already exist (dvt-pe-48, dvt-pe-51, dvt-pe-37, chest-pain-31), but none uses tamoxifen or hormonal cancer therapy. sob-49 q1 is new in content. Not a fail.
- A normal A-a gradient or saturation in PE is not tested anywhere else. chest-pain (s28) has one line that a normal saturation does not exclude PE, inside a pneumothorax explanation. sob-49 q3 is new.
- A negative CUS not excluding PE (sob-49 q4): the bank has CUS-first and positive-CUS-means-treat (dvt-pe-20, dvt-pe-31, batch14, batch20) and the s07 two-point post-test probability item for DVT, not the 41% sensitivity for PE. New.
- sob-50 q1 shares the "compare with end-of-treatment imaging" idea with dvt-pe-29 q3, but dvt-pe-29 tests the 4 mm ultrasound criterion for DVT. sob-50 q1 asks what to obtain before reading a CTPA. The first reviewer proposed this question. Accepted. sob-50 q4 (no anticoagulation once recurrence is excluded) is the opposite decision to dvt-pe-29 q4 (indefinite after a confirmed recurrence). New.
- sob-48, sob-51 and sob-52: no new overlaps since the first review. s51 epiglottitis entries are distractors only. s73 has no hemangioma, HPS or epiglottitis content.

## Sources checked

- Parikh 2017, PMC5554619: opened. "Independent risk factor", "1.5- to 7.1-fold increased risk" (introduction). The discussion says the risk is "notably higher in the 3 months after initiation" and "may continue to be higher during the first 2 years". Surgery for breast cancer is called high risk (about a 10-fold event rate), so the q1 line on breast surgery is supported. The item's "stays raised for at least the first 2 years" overstates "may continue". See sob-49 q1.
- ESC 2019 (academic.oup.com full text, reached through the DOI): opened. Confirmed "up to 40% have normal SaO2 and 20% a normal alveolar-arterial gradient", hypocapnia often present, RV strain ECG changes (T inversion V1 to V4, S1Q3T3) "usually found in more severe cases", sinus tachycardia in 40% in milder cases, "CUS shows a DVT in 30 to 50% of patients with PE", specificity 96% and sensitivity 41%, and a proximal DVT is enough to treat without further testing. No distal DVT text, as the writer said.
- CPS croup statement: opened (updated 6 March 2026). "5 mL of 1:1000 L-epinephrine", standard doses "in all patients irrespective of their age and weight". Supports sob-48 q3.
- Le Gal 2009 (PubMed 19228281, abstract read through Europe PMC): REVERSE cohort of first unprovoked VTE after 5 to 7 months of treatment. 398 suspected events, 292 excluded, 76 of them on no significant change from baseline imaging. The 2.8% 3-month risk is for all 284 untreated patients in whom recurrence was excluded by any criterion, not only by baseline comparison. See sob-50 q4.
- Soulaidopoulos 2018: the url `https://pmc.ncbi.nlm.nih.gov/articles/5871824/` returns 200, as does the PMC-prefixed form. Content was confirmed in the first review and the changed q4 wording matches it.
- Could not open in this session: PubMed pages (cookie wall), so Wittram 2004 was not re-read. The first review confirmed it (PubMed 15371604) and the sob-50 q2 text is unchanged. Corbeddu 2021 and the MSD epiglottitis page were confirmed in the first review, and sob-48 q1, q2, q4 and all of sob-52 are unchanged, so I did not re-open them.

## Numbers recomputed

- sob-49 q3: PAO2 = 0.21 x (760 minus 47) minus 33/0.8 = 149.7 minus 41.25 = 108.5 mmHg. 108.5 minus 90 = **18.5 mmHg, not 16**. With 1.2 x PaCO2 it is 20. The age-expected upper limit (age/4 + 4) is 19, so the gradient is still normal for her age, but the stated 16 is wrong.
- sob-50: PE 2 years ago plus 6 months of treatment puts the end-of-treatment CT 18 months ago. Correct. Wells 1.5 (previous PE only, pulse 96 scores 0). Correct.
- sob-51 q2: 149.7 minus 37.5 = 112.2, minus 62 = 50.2 mmHg. Correct.
- sob-52 q5: 1 g / 17 kg = 58.8 mg/kg. The distractor doses are 50 mg/kg (amoxicillin, cefazolin), 10 mg/kg (azithromycin) and 15 mg/kg (vancomycin). Correct.

## Verdicts

### sob-48 Noisy breathing that keeps coming back: PASS

- q1 PASS. Onset at 8 weeks (12 weeks old, noise for 4 weeks), biphasic stridor and a beard-area hemangioma.
- q2 PASS.
- q3 PASS. The fix is in. Writer uncertainty 1 (epinephrine as a temporizing step) is acceptable, as the first review found. The CPS dose is verified.
- q4 PASS. Writer uncertainty 2 (transfer) is acceptable.

### sob-49 Breathless during breast cancer treatment: FAIL (3 items)

- q1 FAIL (low confidence, source fidelity). "stays raised for at least the first 2 years of use" overstates Parikh, which says the risk "may continue to be higher during the first 2 years". Fix: change it to "The risk is highest in the first months after starting it and may stay raised through the first 2 years, and she is still taking it." The key is sound. Lumpectomy, radiation, age and smoking reasons are true, and Parikh supports the high perioperative risk of breast cancer surgery.
- q2 FAIL (repeat). The keyed point ("this pattern points to RV strain") is arrhythmia-23 q4, with the same three ECG findings. Fix: keep the ECG update and prompt, and rekey to what that item lacks, the ESC point that the pattern marks severity. Replace the option "It points to right ventricular strain" with "It is usually seen in more severe PE" (still in alphabetical position 4) and open the explanation with: "The ESC guideline notes that these signs of right ventricular strain are usually found in more severe PE, so if PE is confirmed her right ventricle and risk need assessment." Keep the other distractor reasons as written. Check that the new key is not the longest option.
- q3 FAIL (number and internal consistency). (1) Her gradient computes to about 18 mmHg, not 16. Fix: change the update to "The alveolar to arterial gradient is about 18 mmHg, normal for her age", or change PaO2 to 92 mmHg (gradient 16.5) and keep 16. (2) The gas is not normal. pH 7.46 with a PaCO2 of 33 is a respiratory alkalosis, and the explanation itself calls the hypocapnia common in PE. Yet the key reads "It can be normal in a patient with PE" and the explanation opens "A normal gas does not lower her probability". Fix: change the key to "A normal gradient can occur in PE" (keep alphabetical order) and the first sentence to "A normal PaO2 and alveolar to arterial gradient do not lower her probability of PE." The rest of the explanation is supported by ESC.
- q4 PASS. All figures match ESC 2019. The key is a fact and not the negation of a distractor. Writer uncertainty on calf veins: the sentence is a fair inference from "30 to 50%" and is not presented as a quote. Accepted.
- Mock mode: no later update or option names an earlier key. Tamoxifen does not cue anything later.

### sob-50 Pleuritic pain after a previous clot: FAIL (1 item)

- q1 PASS. Supported by Le Gal 2009 (comparison with tests at treatment withdrawal). The distractor reasons are true.
- q2 PASS. The update no longer gives away q1. Wittram supports the signs (first review). Writer uncertainty 5 accepted.
- q3 PASS. "18 months ago" is correct. The added line that infection explains the raised D-dimer is an unrequested change. It is true and I accept it (REVIEW-RULES rule 4).
- q4 FAIL (source fidelity, medium confidence). "patients in whom recurrence was excluded this way and who were left untreated had a 3-month VTE risk of 2.8%" ties the 2.8% to baseline comparison. In the abstract it is the risk across all 284 untreated patients in whom recurrence was excluded by any of the criteria. Fix: "In the REVERSE cohort, untreated patients in whom recurrence had been excluded had a 3-month VTE risk of 2.8%." The key holds: unchanged residual thrombus after a completed course for a provoked PE is not an indication to restart. Writer uncertainty on the apixaban and ASA line: correct general practice. Accepted.
- Housekeeping, not a fail: `S.mos` is still defined in `S` but no SAMP cites it now. The writer may delete it.

### sob-51 Breathless when he stands up: PASS

- q1 to q3 PASS (unchanged, numbers recomputed).
- q4 PASS. Both fixes are in, word for word.

### sob-52 Sore throat and drooling in a small girl: PASS

Unchanged since the first review. I re-read all five questions and the dose arithmetic, and no later update cues an earlier key.

## House style and format

There are no em or en dashes and no semicolons in the content, and no mnemonics or personal names. "center" appears only in the Corbeddu article title. "esophageal" and "edema" follow bank convention (about 800 uses against 81). The options are in alphabetical order. The tests pass. No signed item or SCORING-RULINGS entry is contradicted. The fixed CPS epinephrine dose against signed sob-02 is already with the physician through conformance-s17.

## Needs physician decision

None new.

## Summary

PASS: sob-48, sob-51, sob-52. FAIL: sob-49 (q1, q2, q3) and sob-50 (q4). All six first-review fails are resolved.

1. sob-49 q1: change "stays raised for at least the first 2 years of use" to "may stay raised through the first 2 years" (Parikh wording).
2. sob-49 q2: it repeats arrhythmia-23 q4 (the ECG pattern means RV strain). Rekey to "It is usually seen in more severe PE" and adjust the explanation opening as given above.
3. sob-49 q3: the stated A-a gradient of 16 computes to 18.5. Fix the number (about 18 mmHg) or set PaO2 to 92. The gas shows respiratory alkalosis, so rekey to "A normal gradient can occur in PE" and open with "A normal PaO2 and alveolar to arterial gradient do not lower her probability of PE."
4. sob-50 q4: the 2.8% applies to all untreated patients with recurrence excluded, not only those excluded by baseline comparison. Use "In the REVERSE cohort, untreated patients in whom recurrence had been excluded had a 3-month VTE risk of 2.8%."

Overall: FAIL (4 items)
