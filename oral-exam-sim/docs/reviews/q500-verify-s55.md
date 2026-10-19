# Q500 fresh verification: s55, Infectious diseases

Reviewer: Preceptor (fresh independent AI audit, both lenses: clinical truth, and internal consistency and numbers). This reviewer did not write or edit s55. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the whole current text of `src/samps/s55/infectious-diseases.ts`, a writer revision because the first reviewer edited it in place. Uniqueness was checked against the decision catalogue (`infectious-diseases.md`, `shock.md`, `abdominal-pain.md`, `multiple-patients.md`, `pediatric-fever.md`, `sob.md`) and against the other batches of this round (s54, s56).

Tests: `SAMP_BATCH=s55 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 136 passed. The ordering test allows doses of one drug in any order, so it does not catch the s55 ordering fault below.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| infectious-diseases-48 | FAIL | q1 FAIL, q2 PASS, q3 FAIL, q4 FAIL, q5 FAIL |
| infectious-diseases-49 | PASS | q1 PASS (note), q2 PASS, q3 PASS, q4 PASS |
| infectious-diseases-50 | FAIL | q1 PASS, q2 PASS, q3 FAIL, q4 FAIL |
| infectious-diseases-51 | FAIL | q1 PASS, q2 PASS, q3 PASS, q4 PASS, q5 FAIL |
| infectious-diseases-52 | FAIL | stem FAIL, q1 PASS, q2 FAIL, q3 PASS, q4 FAIL |

1 of 5 SAMPs passes. 13 of 22 questions pass.

## Required fixes

### infectious-diseases-48 (Older man with fever and no obvious source)

The SAMP retells infectious-diseases-33 (s41, infected PICC line) with a pacemaker in place of the line: inspect the device site, culture strategy, remove the device, TEE for S. aureus bacteremia. Four of five questions repeat a keyed decision. Rebuild with a new scenario, or keep only q2 and build new questions around it.

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Key "Inspection of the device pocket" | Repeats infectious-diseases-33 q1 ("Inspect the catheter exit site and tunnel") and infectious-diseases-12 q1 ("Devices and old IV or feeding tube sites"). | Replace with a KF6 decision the bank lacks. | infectious-diseases.md, id-33 q1, id-12 q1 | High |
| q2 | Pass | 2.4 L = 30 mL/kg x 80 kg, rechecked. MAP (86 + 2 x 48) / 3 = 60.7 mmHg, rechecked. Sepsis-3 wording is now fair. No other SAMP keys a Sepsis-3 classification. Mock-mode note (B6): the q3 update ("Norepinephrine is started") implies the q2 key. Flag only. | None | Singer 2016 | |
| q3 | Key "Complete removal of device and leads" (first-reviewer item) | Repeats infectious-diseases-33 q3 ("Remove the catheter promptly"): source control by removing the infected intravascular device. The added leads detail does not make the decision new. | Replace with a KF2 decision the bank lacks. | infectious-diseases.md, id-33 q3. EHRA 2020 | Medium |
| q4 | Key "Now, after two sets of blood cultures" | (1) Repeats the infectious-diseases SAMP at catalogue line 104 q1 ("Two sets of blood cultures, drawn before antibiotics without delaying them") and id-33 q2 (culture strategy before antibiotics). (2) Timeline: the question sits after an hour of fluid, a vasopressor start and a definitive source control plan, so the case implies he has had no antibiotic for over an hour in septic shock, which undercuts the KF1 point it tests. This is s55's only KF1 item. | Replace with a KF1 decision the bank lacks, and place any antibiotic timing question before the fluid and vasopressor updates. | infectious-diseases.md line 104, id-33 q2 | High |
| q5 | Key "Transesophageal echocardiogram" (first-reviewer item) | Repeats infectious-diseases-33 q4 ("Transesophageal echocardiography" to look for a complication of S. aureus bacteremia) and the TEE items in id-13 q2 and the endocarditis SAMP at catalogue line 320. | Replace with a KF7 decision the bank lacks. | infectious-diseases.md, id-33 q4 | High |

### infectious-diseases-49 (Vomiting and diarrhea at a retirement residence)

PASS. Notes, no change required:
- q1 tag KF7 (fever of unknown cause) is loose because she has a clear focus and a temperature of 37.6°C. The key holds.
- The setting is close to multiple-patients-22 (an older woman on ramipril and a diuretic in a wedding outbreak of vomiting and diarrhea), but the decisions differ.
- q4 IDSA statement checked: empiric treatment is allowed for presumed bacillary dysentery with fever, bloody stools and tenesmus.

### infectious-diseases-50 (Fever and a limp in a woman who uses drugs)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Pass | The groin as a hidden injection site is new to the bank. Tresson 2022 confirmed. | None | Tresson 2022 | |
| q2 | Pass | Image before draining an infected pseudoaneurysm is new to the bank. The case report source is weak but states the point directly. | None | Guelbi 2025 | |
| q3 | Key "vancomycin 25 mg/kg IV loading dose" | Repeats abdominal-pain-34 q3 ("vancomycin 25 mg/kg IV", suspected MRSA) and the infectious-diseases SAMP at catalogue line 362 with the same key. The claim that S. aureus including MRSA "is the organism that cannot be missed" in people who inject drugs is not in the cited Rybak summary. Dose arithmetic is right: 25 x 52 = 1 300 mg. | Replace with a KF8 decision the bank lacks (for example gram-negative cover in an infected arterial graft field, if a real source supports it), and cite a source for every organism claim. | abdominal-pain.md, abdominal-pain-34 q3. infectious-diseases.md line 362 | Medium |
| q4 | Key "Injecting into the groin" | Self-answering. The q2 update says "She now says she has injected into her right groin for 3 months", and q1 and its explanation are about the groin, so the risk factor the question asks for has already been stated. | Rebuild q4 on a KF3 risk factor the case has not already named, or drop it and move KF3 weight to another SAMP (id-49 q3 also covers KF3). | SAMP_REVIEW_BRIEF Lens B 6, SCORING-RULINGS B7 | High |

### infectious-diseases-51 (Rash and tiredness in a young woman)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 to q4 | Pass | Syphilis is keyed nowhere else. PHAC treatment page checked (benzathine penicillin G 2.4 million units IM once, doxycycline 100 mg twice daily for 14 days, ceftriaxone 1 g daily for 10 days in exceptional cases). Mock-mode note (B6): the q2 update names palms and soles, the q1 key. Flag only. | None | PHAC syphilis guide pages | |
| q5 | Option "No action, as condoms were sometimes used" | The option carries its own reason (SAMP_SPEC section 7, SCORING-RULINGS B3). | Change to "No action for either partner" or similar, with no reason clause. The explanation already gives the reason. Key unchanged. Trace-back of 6 months for secondary syphilis and epidemiological treatment for the previous 90 days are confirmed on the PHAC page (modified 2026-06-08). | PHAC syphilis treatment and follow-up | High |

### infectious-diseases-52 (Cough and aches from a long-term care home)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | "Her creatinine is 142 umol/L, and her estimated creatinine clearance is 26 mL/minute" (84 years, 54 kg, woman) | Wrong number. Cockcroft-Gault: (140 minus 84) x 54 x 0.85 / (0.815 x 142) = 3 024 x 0.85 / 115.7 = 22.2 mL/minute. 26 mL/minute is the male value. The q1 key still holds (10 to 30 band). | Change to 22 mL/minute, or change the creatinine so the stated clearance is right, and keep q1's explanation consistent. | SAMP_SPEC section 8 (recompute every number) | High |
| q1 | Pass | 30 mg once daily for a clearance of 10 to 30 mL/minute (AMMI Table 3, confirmed by the first reviewer and consistent with the product monograph). | None after the stem fix | AMMI 2019 | |
| q2 | Key "Fever returning after initial improvement" as the finding that justifies an antibacterial | Same teaching point as pediatric-fever-50 q3 in s56 of this round ("New fever after initial improvement" justifies an antibiotic). Both are new, so one must change. pediatric-fever-50 q3 is the one that rests on the named AAP pattern, so change this one. | Replace with a KF9 decision not used elsewhere in the bank or this round. | s56 pediatric-fever-50 q3. Q500_BRIEF rule 3 | Medium |
| q3 | Pass | Chemoprophylaxis for all exposed residents regardless of vaccination (IDSA 2018) is new to the bank. | None | Uyeki 2019 | |
| q4 | Options in the order "30 mg on alternate days, 75 mg once daily, 30 mg once daily, 75 mg twice daily, 30 mg twice daily" | (1) Doses of one drug must sit together from low to high (SAMP_SPEC section 7, SCORING-RULINGS B12). The current order is neither alphabetical nor by dose, apparently set to place the key. (2) It tests renal oseltamivir dosing a second time in one SAMP, after q1. | Rebuild q4 on a different KF10 decision (for example how long outbreak prophylaxis continues, per IDSA 2018). If a dose question stays, order the options by dose and balance key position by choice of distractors. | SAMP_SPEC section 7. SCORING-RULINGS B12 | High |

## Key feature coverage after the required fixes

The failing items carry s55's only KF1 (id-48 q4). The reviser must keep KF1 covered. KF2 is left with id-48 q2 only if q3 is replaced on another KF. KF8 stays covered by id-51 q4. KF3 stays covered by id-49 q3. KF10 stays covered by id-51 q5 and id-52 q3.

## First-reviewer items adjudicated

- id-48 q3 and q5 (new): both fail as repeats of id-33.
- id-48 q4 closeness to an existing antibiotics-now item: confirmed, fails.
- id-50 q2 on a case report: accepted.
- id-50 q3 organism claim not in the cited source: confirmed, part of the q3 fail.

## Sources verified

- Blomström-Lundqvist C et al. EHRA 2020, Singer M et al. Sepsis-3 2016, Coughlin PA, Mavor AI 2006, Guelbi M et al. 2025, Uyeki TM et al. 2019 (IDSA 2018 update). Records confirmed via Europe PMC.
- Tresson P et al. Clin Anat 2022 (PMC9796184), Rybak MJ et al. 2020 executive summary (PMC7358040), Aoki FY et al. AMMI 2019 (PMC9602959). Records confirmed via Europe PMC.
- PHAC syphilis treatment and follow-up. Page read (trace-back 3, 6 and 12 months, epidemiological treatment for 90 days, regimens). https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/treatment-follow-up.html
- IDSA diarrhea 2017, Diabetes Canada Appendix 8, PHAC clinical and testing pages: not reopened. The first reviewer or writer read them, and no passing key depends on a doubted claim.

## House style

No em or en dashes, smart quotes, semicolons, US spellings or absolute words were found by script. Stems, updates and prompts are within the word limits.

## Summary

1 of 5 SAMPs passes (infectious-diseases-49). 9 questions fail: 6 for repeating a keyed decision or a teaching point from this round (id-48 q1, q3, q4, q5, id-50 q3, id-52 q2), 1 for a self-answering cue (id-50 q4), 1 for an option reason clause (id-51 q5), 1 for option order and a repeated angle (id-52 q4), plus a wrong creatinine clearance in the id-52 stem. The most serious problem is id-48, which retells id-33.
