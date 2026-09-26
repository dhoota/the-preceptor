# Sweep 3 rebuild review, writer sw3-6

Reviewer: independent review under `rebuild-review-brief.md`. Batches s22, s26 and s36. SAMPs: analgesia-sedation-34, burns-16, burns-36, environmental-17, environmental-23. Nothing was committed. Every SAMP stays `reviewed: false`.

## Verdicts

| Id | Verdict | What changed |
|---|---|---|
| analgesia-sedation-34 | fixed | q1 explanation no longer rests on the retracted codeine death case. q3 explanation no longer calls vomiting part of a pseudoallergy |
| burns-16 | fixed | q4 key now gives acetaminophen IV, since the key and the explanation both cite the Alaska advice to give all drugs IV above 20% TBSA. q3 update adds a sodium. q1 and q2 explanation fixes |
| burns-36 | fixed | Burns now 3 days old, so succinylcholine is clearly outside every safe window. q3 update no longer names intubation (mock mode cue). Two explanation fixes |
| environmental-17 | needs rebuild | q2 and q3 key the same decisions, for the same reasons, as two signed clusters. Not edited. See below |
| environmental-23 | fixed | q2 update no longer names a head CT (mock mode cue for q1). q3 temperature options below his current temperature replaced. q2 distractor changed to keep the s36 position cap |

## Key features

`git show HEAD:<file>` against the working tree. Every question keeps its topic and n. analgesia-sedation-34: 3, 2, 1. burns-16: 4, 4, 4, 3, 5. burns-36: 2, 1, 3. environmental-17: env 2, 2, 1, 1. environmental-23: loc 4, env 3, env 3. environmental-23 q1 was `{ topic: "loc", n: 4 }` at HEAD, as the writer reported.

## simcheck (final writer text, rerun)

| Id | Top hits (full / keys) |
|---|---|
| analgesia-sedation-34 | abdominal-pain-19 0.28/0.13, analgesia-sedation-14 (signed) 0.15/0.09, analgesia-sedation-38 0.14/0.05 |
| burns-16 | burns-17 0.13/0.18, burns-31 0.15/0.12, burns-25 0.13/0.07, burns-13 (signed) 0.11/0.08 |
| burns-36 | burns-24 0.21/0.04, burns-38 0.20/0.07, burns-21 0.19/0.02, burns-13 (signed) 0.14/0.04 |
| environmental-17 | environmental-18 0.15/0.05, environmental-38 0.15/0.06, pediatric-fever-11 (signed) 0.11/0.08, environmental-01 (signed) 0.10/0.08 |
| environmental-23 | environmental-24 0.19/0.05, multiple-trauma-36 0.18/0.07, environmental-05 (signed) 0.15/0.12 |

Low scores did not clear environmental-17. The decision search below did not either.

## One row per question, with decision search

Search = grep of `scratchpad/allkeys.tsv` (every keyed answer, pre-rebuild) and `src/samps` (current text) for the terms listed.

| Id q | Keyed decision | Search terms | Closest hits | Verdict |
|---|---|---|---|---|
| as-34 q1 | ibuprofen PO with titrated fentanyl IV in a breastfeeding mother | breastfe, lactat, breast milk, fentanyl with ibuprofen, ketorolac, NSAID, biliary colic | analgesia-sedation-14 (signed, appendicitis, give IV opioid now), analgesia-sedation-18 (pregnancy, acetaminophen with titrated opioid), abdominal-pain-19 (cholecystitis, no analgesia key) | Distinct. Fixed an explanation claim (below) |
| as-34 q2 | acetaminophen and ibuprofen for home, no codeine or tramadol while breastfeeding | codeine, tramadol, acetaminophen and ibuprofen, breastfeeding | analgesia-sedation-20 q4 (knee, regular ibuprofen and acetaminophen), burns-26 q3, suicide-risk-03 (sertraline in breastfeeding), abdominal-pain-36 q3 (keep breastfeeding) | Distinct reason (lactation safety). Pass |
| as-34 q3 | past morphine reaction is a histamine pseudoallergy | pseudoallerg, histamine release, allergy label, intoleran, opioid allergy | anaphylaxis-41 q4 (new, epinephrine effect after dental block, no allergy label needed) | Related theme (delabelling), different drug, mechanism and decision. Fixed explanation |
| burns-16 q1 | first 8 hours end at 18:40, timed from injury | first 8 hours, time of injury, timed from the burn, clock times | burns-02 q2 (signed, catch-up rate from time of injury), burns-11 q4 (signed, list item), burns-17, burns-31 (new, rate from time of burn) | Same KF4 core teaching as every burn fluid item. Asks the end time, not the rate. Pass, flagged below |
| burns-16 q2 | high urine output from lithium nephrogenic DI | diabetes insipidus, lithium, osmotic diuresis | tox-07 q3 (signed, NDI as a lithium toxicity complication), burns-13 (signed, high output, check glucose) | Distinct. Pass after explanation fix |
| burns-16 q3 | keep the rate, do not apply the 10% reduction rule | current rate, reduce the rate, increase the rate, by 10%, by 20 to 30% | burns-13 q2 (signed, reduce 20 to 30% for over-resuscitation), burns-02 q4 (signed, increase) | Opposite decision for a different reason (urine output uninterpretable). Pass, fixed update |
| burns-16 q4 | fentanyl IV with acetaminophen, no NSAID on lithium | fentanyl, acetaminophen, ketorolac, NSAID, lithium | burns-14 (signed, fentanyl with ketamine), burns-09 q3 (signed, acetaminophen and NSAID), analgesia-sedation-11 (signed) | Distinct reason (lithium). Fixed key route |
| burns-16 q5 | burn centre transfer | transfer, burn centre | many (burns-09, 12, 14, 15 signed, most s26 SAMPs) | Generic KF5 disposition. Reason (comorbidity making resuscitation hard) is new. Pass |
| burns-36 q1 | RSI with rocuronium, not succinylcholine, in a late burn | rocuronium, succinylcholine, hyperkalemia, intubate now | burns-11 q2 (signed, succinylcholine safe within 24 hours), airway-02, burns-01, burns-11 cluster (intubate now for facial burns and voice change) | Complement of the burns-11 fact, not a copy. Different airway story (lower airway injury with pneumonia). Pass after timing fix, flagged below |
| burns-36 q2 | lower airway smoke injury | lower airway, smoke inhalation, chemical injury, pneumonia | burns-04, burns-07, burns-10 (signed, list items) | Distinct as a single key. Pass after explanation fix |
| burns-36 q3 | add acetaminophen to fentanyl, no ketorolac with raised creatinine | acetaminophen NG, ketorolac, creatinine, dexmedetomidine, lidocaine | burns-13 q4 (signed, infusions for intubated burn), analgesia-sedation-12 (signed, scheduled acetaminophen) | Distinct. Fixed cue |
| env-17 q1 | strip blankets and cool now, before CT or LP | cool first, cold water immersion now, before CT, lumbar puncture after cooling | environmental-01 q2 and pediatric-fever-11 q1 (signed cluster, immediate immersion), environmental-02 q4 (signed, LP after cooling), environmental-18 q3 (new) | KF2 core. The blanket twist is new. Acceptable alone |
| env-17 q2 | carboxyhemoglobin, because pulse oximetry misses CO | carboxy, co-oximetry, carbon monoxide, pulse oximetry | loc-08 q2, headache-12 q2, tox-12 q2, ems-07 q2 (signed CO cluster: co-oximetry keyed because SpO2 is falsely normal), environmental-07 q2 (signed list) | Same decision, same reason as the signed CO cluster. Defect |
| env-17 q3 | cool below 39°C before the air ambulance leaves | cool first transport second, 39°C, en route | environmental-01 q2 (signed, immerse now rather than transport, below 39°C within 30 minutes), ems-14 q2 (signed, cool before transport, stop at 39°C), pediatric-fever-11 (signed) | Same decision, same reason as the signed heat stroke cluster. Defect |
| env-17 q4 | coworker with heat exhaustion rests in a cool area with fans and fluids | heat exhaustion, same day, return to work | environmental-20 q3 (new, return after heat stroke) | Distinct. Pass |
| env-23 q1 | GCS 9 is too low for 33.2°C, so another cause is sought | too low for, out of proportion, hypothermia alone, shivering stage | environmental-26 q2 (new, secondary causes workup), environmental-22 q1 (new, staging) | Distinct. Pass after cue fix in q2 |
| env-23 q2 | hemodialysis rewarming through the fistula after failed external rewarming | hemodialysis, dialysis, failure to rewarm, active internal | environmental-05 q2 (signed, forced air and ECLS alert), environmental-27 q2 (new, peritoneal lavage in arrest), multiple-trauma-36 (dialysis after a fall) | Distinct. Distractor changed (below) |
| env-23 q3 | rewarm to about 37°C | normothermia, rewarm to, 35 C, 37°C | environmental-09 q1 (signed, correct systemic hypothermia to about 35°C before frostbite care) | Distinct question. Target differs from the signed item, flagged below |

## Defects found and fixes

| Id q | Field | Flaw | Fix | Confidence |
|---|---|---|---|---|
| as-34 q1 | explanation | Said codeine "has been linked to the death of a breastfed newborn". Canadian Family Physician and the Canadian Pharmacists Journal retracted their reports of that case in 2021 as unreliable. A Canadian key should not rest on it | Now: codeine is too weak for this pain and, by CYP2D6 conversion, a rapid metabolizer can pass high morphine levels to the baby, so other drugs are preferred (ABM #15) | high |
| as-34 q3 | explanation | Called vomiting part of a histamine pseudoallergy. Itch fits histamine release. Vomiting is a common opioid side effect | Itch is the pseudoallergy. Vomiting is named as a side effect, not an allergic sign | medium |
| burns-16 q4 | key option | Key gave "acetaminophen 1 g PO" while the explanation rejected oxycodone PO and IM morphine because Alaska advises all drugs IV above 20% TBSA. The key broke its own reason | Key is now "fentanyl 50 mcg IV, acetaminophen 1 g IV". Same position | high |
| burns-16 q2 | explanation | "more than 3 L of dilute urine a day" is not in Davis 2018 | Removed | medium |
| burns-16 q1 | explanation | Rate of 286 mL/hour started 75 minutes late could read as wrong (signed burns-02 teaches catch-up) | Adds that Alaska starts the calculated rate without catch-up fluid (Alaska 2021 text confirmed) | medium |
| burns-16 q3 | update, explanation | "Nothing shows he needs more fluid" did not address free water loss of about 200 mL/hour above target | Update adds sodium 141 mmol/L. Explanation cites it as showing no free water deficit | medium |
| burns-36 q1 | stem, title, explanations | At 2 days, succinylcholine sits inside the window many sources still call safe (24 to 48 hours). The key was not clearly single best | Burns are now 3 days old. Title "Short of breath three days after a fire". q2 explanation now says 3 days | high |
| burns-36 q3 | update | "He is intubated" showed every question at once in mock mode and removed the noninvasive distractors of q1 | Now "In the ICU he receives a fentanyl infusion and is fed through a nasogastric tube". Dexmedetomidine clause about intubated patients dropped | medium |
| burns-36 q2 | explanation | "no vomiting" is not in the stem | Removed | medium |
| env-23 q2 | update | "CT of the head shows no acute injury" pointed to the brain and gave away the q1 key in mock mode | Now "His trauma imaging shows no bleeding or injury". Explanation matches | medium |
| env-23 q3 | options | 30°C and 32°C sit below his current 33.2°C, so they are strawmen | Options now 34, 35, 36, 37 and 38°C. Key 37°C. Explanation covers each | medium |
| env-23 q2 | options | The q3 change moved a key to position 4 and broke the s36 25% cap | "Warmed peritoneal lavage" replaced with "Closed thoracic lavage". Paal gives the same reason for both. The key now sits in position 5. Batch positions 13, 17, 11, 17, 13 | n/a |
| env-17 q2, q3 | keys | Copy the keyed decisions of signed clusters (CO cluster ems-07, headache-12, loc-08, tox-12, and the heat stroke cluster environmental-01, pediatric-fever-11, ems-14) | Not edited. Needs rebuild of q2 (KF2) and q3 (KF1) with decisions not in the bank | high |

No key changed position or meaning, except the burns-16 q4 route. Key changes: burns-16 q4 "fentanyl 50 mcg IV, acetaminophen 1 g PO" became "fentanyl 50 mcg IV, acetaminophen 1 g IV". This keeps the same answer and fixes the route. environmental-23 q2 and q3 keep the same keyed answer in a new position.

## Specific checks

- **burns-36 succinylcholine timing.** Alaska 2021 says patients whose burns are "more than a few hours old may have elevated potassium" and that care is needed with succinylcholine. Martyn 2006 gives no firm hour. Common teaching puts the start of risk at 24 to 48 hours. At 48 hours the key was arguable, so the burn is now 3 days old.
- **burns-16 arithmetic.** 2 x 88 x 26 = 4 576 mL. Half is 2 288 mL. 2 288 / 8 = 286 mL/hour. 10:40 + 8 h = 18:40. The paramedic, arrival and infusion anchors give 19:05, 19:40 and 19:55. 22:40 is 12 hours. MAP (134 + 160) / 3 = 98 mmHg. 0.5 mL/kg/hour x 88 kg = 44 mL/hour. All correct.
- **burns-16 lithium.** Davis 2018 says lithium is one of the most common causes of acquired NDI, with overt NDI in about 12% after 15 years of treatment. It lists NSAIDs among drugs that raise risk. Confirmed.
- **burns-16 q3 "keep the current rate".** Alaska's rule is to cut by 10% an hour when output is above 30 mL/hour and MAP above 60 mmHg. Holding the rate is the best of the five options when urine output cannot guide fluid and every other marker is normal. "Increase by 10%" is the only distractor with a case. With the sodium now normal and lactate, MAP and mental state normal, it is not equally right. Physician check below.
- **environmental-17 cooling before CT.** Correct. NATA says to cool first and not to delay. The carboxyhemoglobin key is clinically sound, but it is the signed CO cluster's decision. The mine and diesel story is new (no mine story in the bank). The keyed decision is not new.
- **environmental-23.** Paal 2022 Table: mild stage, conscious and shivering, 35 to 32°C. Its footnote says trauma, central nervous system disease, toxins or drugs can impair consciousness independent of core temperature. Hemodialysis adds about 2 to 3°C an hour, needs a patient who can raise cardiac output, and needs heparin. Bladder lavage adds less than 0.5°C an hour and is not recommended. Thoracic or peritoneal lavage is very invasive and may help unstable patients when ECLS is not available. A core temperature that stays the same is a sign of failure to rewarm. The goal with a spontaneous circulation at 33 to 36°C is normothermia of about 37°C. GCS E2 V2 M5 = 9. All confirmed.
- **Apixaban.** Heparin in the circuit on top of apixaban after an occipital abrasion is acceptable once imaging shows no bleeding. Heparin-free dialysis is common practice, and Paal lists heparin as required. Physician check below.
- **analgesia-sedation-34.** ABM protocol #15 (2017) supports each claim: ibuprofen is ideal with low to nil transfer, fentanyl levels are extremely low, meperidine causes sedation up to 36 hours, oxycodone caused CNS depression in 1 in 5 infants and the AAP advises against it, and round the clock hydromorphone 4 mg every 4 hours caused apnea needing naloxone. The FDA 2017 advises against codeine and tramadol. Kalangara 2019 supports the pseudoallergy framing and switching to an opioid with less histamine release. Health Canada: a 2008 advisory on codeine in nursing mothers advises the lowest dose for the shortest time and a physician's advice. I found no Health Canada statement on tramadol in breastfeeding. Its tramadol review covers patients under 18.
- **Hedged keys.** None of the 18 questions is a "most accurate statement" item. No hedged-key cue.
- **Mock mode.** Two cues fixed (burns-36 q3 update, environmental-23 q2 update). No other later update, prompt or option names an earlier key.
- **Longest option, parity, positions.** All pass in the quality tests. s36 positions are now 13, 17, 11, 17, 13 of 71.

## Checks

- `SAMP_BATCH=s22 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 679 passed.
- `SAMP_BATCH=s26 ...`: 516 passed.
- `SAMP_BATCH=s36 ...`: 472 passed.
- `npx tsc --noEmit -p .`: clean.

## Sources verified

- ABM protocol #15, 2017. Full text in `scratchpad/sw3-6/abm15.txt`.
- Retraction of the codeine breastfeeding case columns, Can Fam Physician and Can Pharm J, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC7863290/
- Health Canada advisory 2008-164, codeine in nursing mothers. https://www.canada.ca/en/news/archive/2008/10/use-codeine-products-nursing-mothers.html
- Kalangara 2019 abstract, PubMed 31638447.
- Alaska burn guidelines 2021, `scratchpad/alaska.txt`.
- Davis 2018, BMC Nephrol, PMC6215627.
- Martyn and Richtsfeld 2006, Anesthesiology, PubMed 16394702.
- Walker 2015 and Romanowski 2020, full texts in `scratchpad/sw3-6/`.
- ABA referral guidelines 2025, `scratchpad/sw3-6/aba.txt`.
- NATA 2015 and Paal 2022, full texts in `scratchpad/sw3-6/`.

## For the physician

- **environmental-17 needs a rebuild of q2 and q3.** q2 keys carboxyhemoglobin because pulse oximetry misses CO. That is the signed CO cluster's keyed decision (loc-08, headache-12, tox-12, ems-07). q3 keys cooling below 39°C before transport. That is the signed heat stroke cluster's decision (environmental-01, pediatric-fever-11, ems-14). q1 (strip the blankets, cool before CT) and q4 (coworker with heat exhaustion) are acceptable. The heat stroke topic is saturated. Cooling methods, benzodiazepines for shivering, stopping near 39°C, cooling with antibiotics and return to activity are all keyed elsewhere. A rebuilder needs a KF2 and a KF1 decision not in that list.
- **burns-16 q3.** Please confirm "keep the current rate" over "increase by 10%" for a patient with lithium NDI losing about 200 mL/hour of free water above target. The update now gives a normal sodium to support holding the rate. Some burn units would add separate free water replacement, which is not an option.
- **Bank conflict on catch-up fluid.** Signed burns-02 keys catch-up (rest of the first 8 hours volume over the hours left). burns-17 does the same. burns-31 and burns-16 follow Alaska 2021, which advises against catch-up. The bank should take one position.
- **burns-36 q1** is the complement of signed burns-11 q2 ("succinylcholine is safe within 24 hours of a burn"). I judged it distinct because the question turns on intubating now for lower airway injury with pneumonia. Please confirm.
- **analgesia-sedation-34.** Health Canada's 2008 codeine advisory is softer than the FDA's 2017 advice against it. The explanation now avoids the retracted death case and says only that other drugs are preferred. q1 gives ibuprofen PO to a nauseated woman who has not vomited. Ketorolac IV would also suit, but it is not an option.
- **environmental-23 q2.** Heparin in the dialysis circuit on apixaban. Paal lists heparin as required. Local units may run it heparin free.
- **environmental-23 q3** keys 37°C. Signed environmental-09 q1 keys "correct systemic hypothermia to about 35°C" before frostbite care. The contexts differ, but a candidate may see the two as in conflict.
