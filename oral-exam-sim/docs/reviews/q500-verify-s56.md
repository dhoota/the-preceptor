# Q500 fresh verification: s56, Pediatric fever

Reviewer: Preceptor (fresh independent AI audit, both lenses: clinical truth, and internal consistency and numbers). This reviewer did not write or edit s56. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the whole current text of `src/samps/s56/pediatric-fever.ts`, a writer revision because the first reviewer edited it in place. Uniqueness was checked against the decision catalogue (`pediatric-fever.md`, `tox.md`, `delirium-agitation.md`, `shock.md`, `infectious-diseases.md`) and against the other batches of this round (s54, s55).

Tests: `SAMP_BATCH=s56 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 passed. The ordering test allows doses of one drug in any order, so it does not catch the ordering faults below.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| pediatric-fever-48 | FAIL | stem FAIL, q1 PASS, q2 FAIL, q3 FAIL, q4 PASS |
| pediatric-fever-49 | FAIL | q1 PASS, q2 FAIL, q3 FAIL, q4 FAIL |
| pediatric-fever-50 | FAIL | q1 PASS, q2 PASS (note), q3 PASS, q4 FAIL |
| pediatric-fever-51 | FAIL | q1 PASS (note), q2 FAIL, q3 FAIL, q4 FAIL |
| pediatric-fever-52 | FAIL | q1 PASS, q2 FAIL, q3 PASS, q4 FAIL |

0 of 5 SAMPs pass. 9 of 20 questions pass.

## Required fixes

### pediatric-fever-48 (Hot, restless toddler after a weekend away)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | "She keeps picking at things in the air and does not seem to recognize her mother ... Her pupils are 7 mm and react sluggishly ... Bowel sounds are quiet and her bladder is palpable" | The descriptors echo tox-11 ("picking at the air and does not recognize his mother. Pupils are 8 mm and sluggish") and delirium-agitation-06 ("Pupils are 7 mm and sluggish ... Bowel sounds are absent and her bladder is palpable") nearly phrase for phrase. | Rewrite the examination in new words and with findings the two signed stems do not use. | tox.md, tox-11. delirium-agitation.md, delirium-agitation-06 | Medium |
| q1 | Pass | Anticholinergic poisoning as a noninfectious cause of fever in a toddler (KF6) is a new angle. Distractor reasons are true. | None | Scharman 2006 | |
| q2 | Key "Twelve lead ECG" | Repeats tox-11 q2 ("ECG for QRS widening") and delirium-agitation-06 q2 ("ECG for QRS and QTc") for antihistamine anticholinergic poisoning. The arithmetic is right: 5 x 50 mg = 250 mg, 250 / 15 = 16.7 mg/kg, above Scharman's 7.5 mg/kg threshold for dimenhydrinate under 6 years (recommendation 11, confirmed in the abstract). | Replace with a decision the bank lacks. | tox.md, tox-11 q2. delirium-agitation.md, delirium-agitation-06 q2 | High |
| q3 | Key "physostigmine 0.3 mg IV" | Repeats tox-11 q4 and delirium-agitation-06 q3 (physostigmine for antihistamine delirium). The pediatric dose (0.02 x 15 = 0.3 mg, under the 0.5 mg cap) is the only new element. | Replace with a decision the bank lacks, or ask for a D1 row (it is not a literal key feature wording, so D1 does not apply). | tox.md, tox-11 q4. Canadian Antidote Guide, Dawson 2016 | High |
| q4 | Pass | Cool mottled legs as the sign that points to sepsis over the toxidrome is new. SSC children 2026 statement 25 lists extremity temperature and capillary refill (executive summary read). | None | Weiss, Peters et al. 2026 | |

### pediatric-fever-49 (Teenager with evening fevers and a racing heart)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Pass | Graves disease as a cause of persistent fever is new to the bank. Burch-Wartofsky rechecked: 37.8°C = 100.0°F scores 10, pulse 108/minute scores 5, total 15, below 25. | None | Ross 2016 | |
| q2 | Explanation: "The ATA advises that PTU generally not be used in children because of its risk of liver failure." Tag KF5. | (1) The explanation gives away the q4 key (methimazole, not PTU). (2) The explanation runs to 7 sentences, above the 3 to 6 in SAMP_SPEC section 8. (3) KF5 is "look for less common causes". Choosing a beta blocker is endocrine treatment, not a pediatric fever key feature, so the tag is not honest. | Remove the PTU sentence from q2 (or replace the PTU distractor), trim to 6 sentences, and either tag honestly or rebuild q2 on a pediatric fever key feature. | SAMP_SPEC sections 8 and 13 | Medium |
| q3 | Options "acetaminophen 540 mg PO, 180 mg PO, 900 mg PO, 1 080 mg PO, 1 440 mg PO" | (1) Doses of one drug must run low to high (SAMP_SPEC section 7, SCORING-RULINGS B12). The key was moved to first place. (2) A bare weight-based antipyretic dose repeats a decision keyed many times (pediatric-fever catalogue lines 14, 55, 98, 110, 152, 159, 204), and s56 tests it twice (also pediatric-fever-50 q4). Arithmetic is right: 15 x 36 = 540 mg. | Order the options low to high and balance position by distractor choice. Give the KF8 item a twist the bank lacks (for example a large child where the weight-based dose meets the adult single-dose cap). Keep only one bare KF8 dose item in s56. | SAMP_SPEC section 7. pediatric-fever.md | High |
| q4 | Key "methimazole PO", tag KF5 | The key is right (ATA 2016). The tag is not honest: choosing an antithyroid drug is not a pediatric fever key feature. Mock-mode note (B6): the update ("TSH below 0.01 mIU/L") implies the q1 key. | Rebuild on a pediatric fever key feature, or move the KF5 weight to a question that tests looking for the less common cause. | SAMP_SPEC section 13 | Medium |

### pediatric-fever-50 (Boy with a cold and green discharge)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Pass | AAP criteria checked (persistent beyond 10 days, worsening, severe onset with 39°C and 3 days of purulent discharge). The green discharge twist is new. | None | Wald 2013 | |
| q2 | Pass, with note | Choosing Wisely Canada recommendation 2 ("Don't order imaging to distinguish acute bacterial sinusitis from an upper respiratory infection") confirmed in full text. Note: KF7 is about antibiotics, and this item tests investigations. The tie through needless antibiotics is acceptable. | None | McDonough, Hathi et al. 2021 | Low |
| q3 | Pass | Keep. id-52 q2 in s55 repeats this teaching point and is the one asked to change. | None | Wald 2013 | |
| q4 | Options "ibuprofen 50 mg PO, 400 mg PO, 200 mg PO, 600 mg PO, 800 mg PO" | (1) Not low to high (SAMP_SPEC section 7, SCORING-RULINGS B12). (2) Second bare weight-based antipyretic dose in s56 (with pediatric-fever-49 q3) and a repeat of pediatric-fever catalogue line 204 ("ibuprofen 105 mg PO every 6 to 8 hours"). Arithmetic is right: 10 x 20 = 200 mg. | Replace with a decision the bank lacks. KF8 stays covered by pediatric-fever-49 q3 once that is fixed. | SAMP_SPEC section 7. pediatric-fever.md line 204 | High |

### pediatric-fever-51 (Girl whose legs hurt too much to walk)

q2 to q4 are first-reviewer items. Three of four questions test the same perfusion markers (cold extremities, capillary refill), and q3 repeats a signed key.

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Pass, with note | Thompson 2006 abstract confirmed (448 children, 72%, median 8 hours, late signs 13 to 22 hours). Leg pain as an early sign is new. Cold extremities as a sepsis sign are keyed in pediatric-fever-03 q1 and the catalogue line 122 item, so the reviser should keep leg pain central. | None | Thompson 2006 | Low |
| q2 | Key "Poor perfusion, normal BP" | (1) Repeats q1's teaching (cold hands and capillary refill 4 seconds mean poor perfusion) in the same SAMP. (2) Same question form as the pediatric-fever item at catalogue line 251 ("best describes his circulatory status", key "Decompensated shock"), and the findings-of-poor-perfusion keys in pediatric-fever-03 q1 and line 122. The SSC 2026 statement 25 wording is accurate. | Replace with a decision the bank lacks. The 2026 strong recommendation to measure lactate in suspected septic shock is one candidate, if the catalogue confirms it is not keyed. | pediatric-fever.md lines 19, 122, 251. Weiss, Peters et al. 2026 | High |
| q3 | Key "ceftriaxone IV" | Repeats pediatric-fever catalogue line 124 ("Ceftriaxone 100 mg/kg IV ... within the first hour" for suspected meningococcal septic shock) and line 27. This is s56's only remaining KF3 item once pediatric-fever-52 q4 is replaced. The SSC 2026 statements quoted (antimicrobials ideally within 1 hour in suspected septic shock, broad cover for all likely pathogens, multidrug therapy for immune compromise or resistance risk) are accurate. | Replace with a KF3 decision the bank lacks. | pediatric-fever.md lines 27, 124 | High |
| q4 | Key "Capillary refill of 2 seconds, warm feet" | Third question on the same markers in one SAMP. Reassessment after each bolus is also keyed in pediatric-fever-03 q3 and the catalogue line 123 item. | Replace with a decision the bank lacks. | pediatric-fever.md lines 21, 123 | Medium |

### pediatric-fever-52 (Fever and a dark spot during treatment)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Pass | Ecthyma gangrenosum is new to the bank. Gałązka 2021 confirmed and the stem matches it (painless early lesion, buttock site). | None | Gałązka 2021 | |
| q2 | Key "His chemotherapy 8 days ago" as what sets the urgency | Repeats infectious-diseases-03 q1 ("Chemotherapy 9 days ago, at the expected neutrophil nadir"). This is s56's only remaining KF1 single item besides q3. | Replace with a KF1 decision specific to pediatric fever and neutropenia risk stratification that the bank lacks. | infectious-diseases.md, id-03 q1 | Medium |
| q3 | Pass | Cultures from every lumen at fever onset and chest X-ray only with respiratory signs match the 2023 guideline. id-33 q2 keys paired catheter and peripheral cultures in an adult, a different decision. | None | Lehrnbecher 2023 | |
| q4 | Key "piperacillin-tazobactam IV" | Repeats infectious-diseases-03 q2 (piperacillin-tazobactam monotherapy for febrile neutropenia) and pediatric-fever-03 q2 (piperacillin-tazobactam 100 mg/kg). Ecthyma does not change the key, because antipseudomonal monotherapy is the default for high-risk fever and neutropenia. | Replace with a KF3 decision the bank lacks (for example when to add a second agent, if the child were unstable, per the 2023 guideline). | infectious-diseases.md, id-03 q2. pediatric-fever.md, pediatric-fever-03 q2 | Medium |

## Key feature coverage after the required fixes

The failing items carry every KF3 item in s56 (pediatric-fever-51 q3, pediatric-fever-52 q4) and both KF8 items. The reviser must keep KF1 (pediatric-fever-52 q3 remains), KF3 and KF8 covered. KF6 stays with pediatric-fever-48 q1. KF5 stays with pediatric-fever-49 q1. KF2 stays with pediatric-fever-48 q4 and pediatric-fever-51 q1.

## First-reviewer items adjudicated

- pediatric-fever-51 q2 (new): the SSC 2026 wording is accurate (executive summary read), but the question repeats q1 and bank items. Fails.
- pediatric-fever-51 q3 and q4 updates: the 2026 statements quoted are accurate. Both fail on repetition, not accuracy.
- pediatric-fever-49 KF5 retag: not honest for q2 and q4 (see above).
- pediatric-fever-48 q3 physostigmine practice variation: moot, q3 fails as a repeat.

## Sources verified

- Scharman EJ et al. 2006. Abstract read via Europe PMC (recommendations 11 and 15). https://pubmed.ncbi.nlm.nih.gov/16749537/
- Dawson AH, Buckley NA 2016. Abstract read (0.01 to 0.02 mg/kg in children, minimum 10 to 15 minutes before redosing). https://pubmed.ncbi.nlm.nih.gov/26589572/
- Weiss SL, Peters MJ et al. Surviving Sepsis Campaign children 2026. Executive summary read (statements 4, 6, 9, 10, 25, Phoenix lactate threshold). https://discovery.ucl.ac.uk/id/eprint/10224105/ and the cited SCCM page.
- Thompson MJ et al. 2006. Abstract read. https://pubmed.ncbi.nlm.nih.gov/16458763/
- Lehrnbecher T et al. 2023. Abstract read. https://pubmed.ncbi.nlm.nih.gov/36689694/
- McDonough M, Hathi K et al. Choosing Wisely Canada 2021. Full text read (recommendation 2). https://pmc.ncbi.nlm.nih.gov/articles/PMC8557011/
- Gałązka P et al. 2021, Ross DS et al. 2016, Wald ER et al. 2013. Records confirmed via Europe PMC.
- Canadian Antidote Guide physostigmine page and SickKids dosing sheet: not reopened. The first reviewer read them, and every key that depends on them fails for other reasons.

## House style

No em or en dashes, smart quotes, semicolons, US spellings or absolute words were found by script. Stems, updates and prompts are within the word limits.

## Summary

0 of 5 SAMPs pass. 11 questions fail: 9 for repeating a keyed decision (pediatric-fever-48 q2 and q3, pediatric-fever-49 q3, pediatric-fever-50 q4, pediatric-fever-51 q2 to q4, pediatric-fever-52 q2 and q4, with pediatric-fever-49 q3 and pediatric-fever-50 q4 also failing option order), and 2 for a dishonest tag or an explanation that gives away a later key (pediatric-fever-49 q2 and q4). The pediatric-fever-48 stem also echoes tox-11 and delirium-agitation-06. The most serious problems are pediatric-fever-51, where three questions test the same perfusion markers and q3 repeats a signed ceftriaxone key, and pediatric-fever-48, which retells tox-11 in a toddler.
