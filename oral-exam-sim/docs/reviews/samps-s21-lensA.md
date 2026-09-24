# Review of batch s21 (airway), Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: `src/samps/s21/airway.ts` (airway-16 to 47) and `src/samps/s21/review-extra.ts` (airway-48 and 49). Every stem, option and explanation was read against its case. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| airway-48 (extra) | q1 | correct | Key was "Nasal high-flow at 50 L/minute" (index 4) while the explanation argues for intubation, and high-flow gives less support than the BiPAP that is already failing. Key restored to index 2, "Intubation and mechanical ventilation". | High |
| airway-49 (extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas". The case never gives it, and a lactate says nothing about the intubation technique. Sentence removed. | High |
| airway-45 | q1 | explanation | Said one fingerbreadth from chin to thyroid notch is short "where two are expected". The normal thyromental distance is about 6 cm, or about three fingerbreadths. Two fingerbreadths is the hyoid to thyroid part of the 3-3-2 rule. Corrected. | High |
| airway-40 | q2 | explanation, source | Cited the 2013 AANS/CNS guideline for a MAP target of 85 to 90 mmHg and a recommendation against methylprednisolone. The hemodynamic part is superseded by the 2024 AO Spine and Praxis guideline (Kwon, Canadian-led): MAP at least 75 to 80 mmHg and no higher than 90 to 95 mmHg for 3 to 7 days. Source replaced and verified. The methylprednisolone sentence now says it is not routine and does nothing for the vagal response, which is true under both AANS/CNS 2013 and AO Spine 2017. Key unchanged. | Medium |
| airway-19 | q3 | option | Distractor "Ward admission with nebulized racemic epinephrine". Racemic epinephrine is not readily available in Canada (CPS croup statement). Now "nebulized epinephrine". Position unchanged. | Medium |
| airway-31 | q2 | option, explanation | Distractor "Racemic epinephrine and observe" had the same Canadian availability problem. Now "Trial of nebulized epinephrine", which stays in position 5, so the key stays at index 3. Explanation updated to match. | Medium |
| airway-23 | q2 | prompt, explanation | References differ on the starting cuffed tube at 4 years: PALS (3.5 + age/4) gives 4.5 mm, and the older Khine formula (3.0 + age/4) gives 4.0 mm, which is also an option. Following brief item 10, the prompt now names the PALS cuffed formula, and the explanation now gives a reason for the 4.0 mm option, which it had left out. | Medium |
| airway-33 | q1 | source | Key (support the fused neck in its pre-injury flexed posture) is correct, but the only source was ATLS 11, which the writer could not open and I could not check. Replaced with a real, verified source that states the teaching directly: Clarke, James, Ahuja, Acta Orthop Belg 2010 (rigid collar forcing a flexed ankylosed neck into extension led to deterioration and death). | Medium |
| airway-41 | q2 | explanation | Said a repeat bicarbonate dose "is not the priority" because the QRS narrowed to 112 ms. A QRS still above 100 ms is a common trigger for another bolus, so that reason was too strong. It now says the faster rate brings the pH toward 7.5 and further bicarbonate is titrated to the QRS and pH and does not replace sedation. Key unchanged. | Low |
| airway-45 | q2 | explanation | CAFG 2021 lists "a single further attempt using a different technique" as an exit option after three failed attempts. Added this so the rule is not taught as an absolute ban on a fourth attempt. The distractors (same operator, smaller tube) are still wrong. | Low |

## Key changes

- airway-48 q1 (review-extra): before index 4 "Nasal high-flow at 50 L/minute", after index 2 "Intubation and mechanical ventilation". The old key contradicted its own explanation and the case (drowsy, pCO2 72 mmHg after 1 hour of BiPAP, wants full treatment). The explanation already supported the new key, so no rebuild was needed.

No key was changed in the main file.

## Duplicate content in review-extra.ts

- airway-48 has the same stem, title, options and explanations as airway-26. The only difference was the wrong key.
- airway-49 has the same stem, options and explanations as airway-37. The only difference was the invented lactate sentence.

Even after the fixes, neither SAMP should enter the bank, because both would fail the near-duplicate stem rule (SAMP_SPEC section 1). Recommendation: reject both.

## Items checked on request and found correct

- airway-19 q4: DAS ATI 2020 says topical lidocaine should not exceed 9 mg/kg lean body weight. 9 x 70 = 630 mg, 9 x 82 = 738 mg, 15 x 70 = 1050 mg. The distractors of 4.5 and 7 mg/kg are the standard infiltration limits without and with epinephrine.
- airway-37 q3 (and 49 q3): DAS ATI 2020 calls for a "two-point check", seeing the tracheal lumen or carina through the scope plus capnography, before induction. The explanation is accurate.
- airway-24 q3: MG patients are sensitive to nondepolarizing blockers, with a prolonged and deeper block at usual doses, and resistant to succinylcholine. The Blichfeldt-Lauridsen 2012 abstract (Acta Anaesthesiol Scand 56:17 to 22) advises smaller doses when a blocker is needed. Sugammadex reverses rocuronium in MG. Isolated failures are reported, but "unpredictable" is not the expected pattern.
- airway-23 q2: the PALS cuffed formula of 3.5 + age/4 is confirmed. See the fix above.
- airway-21 q2: 3.0 mm cuffed for an infant over 3 kg, and 3.5 mm at about 1 to 2 years, match PALS.
- airway-41 q1: pH 7.28 with pCO2 52 and HCO3 24 is internally consistent (Henderson-Hasselbalch gives 7.29). At pCO2 31 the pH is about 7.51, inside the usual 7.45 to 7.55 target for tricyclic toxicity. Tip movement with neck flexion (q3) is in the right direction.
- airway-30 q4: avoiding succinylcholine in a hyperthermic, agitated stimulant patient whose potassium and CK are unknown is a defensible judgement, and rocuronium 1.2 mg/kg is not wrong under any reference. I kept it. See Needs physician decision.
- Walls Manual 6th edition: the editors (Brown, Sakles, Mick, Mosier, Braude), publisher (Wolters Kluwer) and 2023 date are confirmed. I have no access to the text, so the claims that rest on Walls were checked against general teaching and other sources. Each one matched: MOANS predictors in airway-35, pushing a tracheal foreign body distally in airway-23, downsizing the tube in croup in airway-39, succinylcholine in Duchenne in airway-26, and peak versus plateau pressure in airway-25 and 46.
- Recomputed doses, all correct: rocuronium 5 mg (4.2 kg), 45 mg (38 kg), 90 mg (75 kg), 96 to 100 mg (80 kg) and 24 mg (20 kg). Ketamine 20, 40 and 75 mg. Epinephrine 0.2 mg IM for 20 kg. Predicted body weight 73.3 kg and 440 mL. FVC 15.7, 17.5 and 11 mL/kg. Shock index 1.2.

## Sources verified

- Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA. The Walls Manual of Emergency Airway Management, 6th ed. Wolters Kluwer. https://shop.lww.com/The-Walls-Manual-of-Emergency-Airway-Management/p/9781975190682
- Ahmad I et al. DAS guidelines for awake tracheal intubation in adults. Anaesthesia 2020 (9 mg/kg lean body weight, two-point check, 3 + 1 attempts). https://das.uk.com/guidelines/das-guidelines-for-awake-tracheal-intubation-ati-in-adults/
- Law JA et al. CAFG 2021 Part 1 (attempts limited to three, exit options include a single further attempt with a different technique). https://link.springer.com/article/10.1007/s12630-021-02007-0
- Kwon BK et al. Clinical practice guideline for acute spinal cord injury, hemodynamic management. Global Spine J 2024. 14(3 suppl):187S to 211S. https://doi.org/10.1177/21925682231202348 and https://pubmed.ncbi.nlm.nih.gov/38526923/
- Clarke A, James S, Ahuja S. Ankylosing spondylitis. Inadvertent application of a rigid collar after cervical fracture. Acta Orthop Belg 2010. 76:413 to 415. https://pubmed.ncbi.nlm.nih.gov/20698467/
- Ortiz-Alvarez O, Mikrogianakis A. CPS croup statement (racemic epinephrine not readily available in Canada, 5 mL of 1:1000 L-epinephrine is equivalent). https://cps.ca/en/documents/position/acute-management-of-croup
- Blichfeldt-Lauridsen L, Hansen BD. Anesthesia and myasthenia gravis. Acta Anaesthesiol Scand 2012. 56:17 to 22 (Europe PMC abstract).
- Weingart SD et al. Delayed sequence intubation. Ann Emerg Med 2015. 65:349 to 355 (Europe PMC abstract. It gives no numeric ketamine dose, and the 1 mg/kg in airway-30 fits the published DSI protocol).
- Background on the cuffed tube formula (Duracher, 3.5 + age/4): https://reference.medscape.com/calculator/180/pediatric-endotracheal-tube-size

I accepted the writer's verification of the other sources in docs/reviews/writer-s21.md and did not repeat it.

## Needs physician decision

- airway-30 q4: whether avoiding succinylcholine while the potassium and CK are pending in methamphetamine hyperthermia is the expected answer, or seen as over-cautious. I think the key holds.
- airway-23 q2 update: the pulse is 58/minute in a hypoxic child with no effective ventilation. PALS would start compressions at a heart rate below 60/minute with poor perfusion. No question asks about this, but a physician may want the pulse changed (for example to 64/minute) or a sentence on CPR added.
- airway-40 q2: confirm the 2024 AO Spine and Praxis MAP range is the target the bank should teach, since some Canadian trauma centres still use 85 to 90 mmHg.

## Note for Lens B

- Not in my lens and not changed: airway-30 q4 lists "rocuronium 90 mg IV" before "rocuronium 40 mg IV" and "succinylcholine 150 mg IV" before "110 mg IV". The test allows doses of one drug in any order, but ascending order would read better.

## Summary

- 10 fixes in 9 SAMPs. 1 key change, in review-extra (airway-48 q1). No key changed in the main file.
- By category: wrong key 1 (extra), invented stem fact 1 (extra), false explanation fact 1 (airway-45 thyromental norm), stale guideline 1 (airway-40), product not sold in Canada 2 (airway-19, 31), conflicting references not named in the prompt 1 (airway-23), unverified source replaced 1 (airway-33), overstated distractor reason 2 (airway-41, 45 q2).
- SAMP ids with a defect: airway-19, airway-23, airway-31, airway-33, airway-40, airway-41, airway-45, airway-48, airway-49.
- Checks: `npx tsc --noEmit -p .` shows no s21 errors. `SAMP_BATCH=s21 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed.
