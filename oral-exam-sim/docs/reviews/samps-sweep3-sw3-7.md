# Sweep 3 rebuilds, batches s31, s39 and s41 (label sw3-7)

Batch files: `src/samps/s31/critical-appraisal.ts`, `src/samps/s39/gi-bleed.ts` and `src/samps/s41/infectious-diseases.ts`. Five SAMPs were rebuilt in place. No other SAMP was touched. Nothing was committed.

Each rebuild keeps its id, its topic, its question count and its key feature counts. Titles are new and neutral, `reviewed` stays false, and the version is bumped by 1. Scratch files are in `scratchpad/sw3-7/`.

## Rebuilt SAMPs

### critical-appraisal-28 (version 1 to 2, 4 questions, key features 2, 2, 4, 5)

- Old scenario: a man with diabetes and severe thigh pain after a scrape, tense edema beyond the erythema, a fictional marker for necrotizing soft tissue infection, keyed to urgent surgical exploration. It copied infectious-diseases-04.
- New scenario: a 57-year-old man on methotrexate and prednisone with 5 days of night-waking mid-back pain, fever, focal T10 tenderness and a thigh boil drained 2 weeks ago. He has no neurological deficit. A fictional marker E is studied for spinal epidural abscess, with gadolinium MRI as the reference standard.
- Keyed decisions: as the brief asked, q1 to q3 keep the appraisal content (negative likelihood ratio 0.13, post-test probability 11%, meaning of an AUC of 0.80). Only the marker name and the condition changed. q4 is new: an 11% residual probability is too high to accept, so the key is emergency MRI with gadolinium. The distractors include lumbar puncture, which the review warns can spread the infection.
- Numbers rechecked: LR minus 0.05 / 0.40 = 0.125. Pretest odds 1.0 x 0.125 = 0.125, probability 0.125 / 1.125 = 11%.
- Sources: Guyatt G, et al. Users' Guides to the Medical Literature. 3rd ed. 2015 (unchanged). Tetsuka S, Suzuki T, Ogawa T, et al. Spinal epidural abscess: a review highlighting early diagnosis and management. JMA J. 2020. doi 10.31662/jmaj.2019-0038 (full text read, PMC7733760). It replaces the IDSA soft tissue guideline, which no other SAMP in the file cited.
- Similarity check, top 5 of the final run (full / keys): critical-appraisal-09 (signed off) 0.21/0.10, critical-appraisal-25 0.16/0.05, critical-appraisal-01 (signed off) 0.13/0.12, headache-32 0.08/0.13, critical-appraisal-36 0.13/0.12. I read every card. None tells a back pain or epidural abscess story. critical-appraisal-09 is a marker with spectrum bias in children with meningitis.

### gi-bleed-27 (version 1 to 2, 4 questions, key features 6, 1, 6, 1, reordered to 1, 1, 6, 6)

- Old scenario: an older woman on naproxen and prednisone with orthostatic melena, Hb 88 g/L and a Glasgow Blatchford score of 12, keyed to admission for endoscopy within 24 hours. It copied gi-bleed-02.
- New scenario: a 61-year-old woman with 5 days of melena and exertional breathlessness. She has had nosebleeds since her teens and telangiectasias on her lips, tongue and fingertips, and her father and brother have the same. She started ASA 81 mg on her own for primary prevention. Hb 74 g/L, ferritin 4 mcg/L. The cause is hereditary hemorrhagic telangiectasia. No SAMP in the bank mentions telangiectasia.
- Keyed decisions: the underlying cause is HHT (Curacao criteria) rather than von Willebrand disease, limited systemic sclerosis, cirrhosis or ITP. Stop ASA with no substitute, because there is no indication for it. Upper endoscopy is the first test, and capsule endoscopy comes only after it. Give pantoprazole 80 mg IV while she waits for endoscopy.
- No Glasgow Blatchford score and no disposition question, so the keyed decisions of gi-bleed-02 are avoided.
- Sources: Faughnan ME, Mager JJ, Hetts SW, et al. Second international guidelines for the diagnosis and management of hereditary hemorrhagic telangiectasia. Ann Intern Med. 2020. doi 10.7326/M20-1443 (recommendations B1, B2 and C5 checked on hhtguidelines.org/table). Barkun AN, et al. International Consensus Group. Ann Intern Med. 2019 (statement A9 on PPI before endoscopy checked, PMC7233308).
- Similarity check, top 5 (full / keys): gi-bleed-16 0.23/0.07, gi-bleed-46 0.21/0.02, gi-bleed-45 0.21/0.05, gi-bleed-36 0.21/0.06, gi-bleed-25 0.20/0.10. Signed off gi-bleed-02 is ninth at 0.17/0.07. I read every card. gi-bleed-16 is ITP, gi-bleed-45 is occult loss with a family history of colon cancer, and the others are NSAID, stent or pregnancy stories.

### gi-bleed-44 (version 1 to 2, 4 questions, key features 2, 2, 5, 6)

- Old scenario: a man with an ileostomy and naproxen use whose bag filled with dark blood from a duodenal ulcer, keyed to upper endoscopy as the first test. It copied gi-bleed-04.
- New scenario: a 67-year-old anuric man on hemodialysis with a forearm fistula. He passed maroon stools without clots during his session after a heparin bolus and arrives hypotensive. He takes no NSAID or antithrombotic and has known sigmoid diverticula. The source is not named anywhere in the SAMP.
- Keyed decisions: the urea to creatinine ratio is the upper-source clue made unreliable by kidney failure (his ratio is about 11 in conventional units: 86.8 mg/dL / 7.8 mg/dL). Blood clots in the stool most lower the likelihood of an upper source (LR 0.05). The immediate measures are to crossmatch red cells and give a 500 mL crystalloid bolus, not 2 L in an anuric man, and not protamine, plasma, platelets or tranexamic acid. Endoscopy timing is within 24 hours, not within 6 hours.
- The first-test decision of gi-bleed-04 is not keyed. Hemodynamic instability, one of gi-bleed-04's keyed clues, appears only as a distractor.
- Sources: Srygley FD, et al. Does this patient have a severe upper gastrointestinal bleed? JAMA. 2012 (abstract likelihood ratios checked). HALT-IT Trial Collaborators. Lancet. 2020. doi 10.1016/S0140-6736(20)30848-5. Lau JYW, et al. Timing of endoscopy for acute upper gastrointestinal bleeding. N Engl J Med. 2020. doi 10.1056/NEJMoa1912484 (abstract checked). I added DOI links to the existing lau and halt-it source entries.
- Similarity check, top 5 (full / keys): gi-bleed-38 0.30/0.15, gi-bleed-09 (signed off) 0.27/0.07, gi-bleed-04 (signed off) 0.24/0.10, gi-bleed-43 0.21/0.13, multiple-trauma-36 0.20/0.09. I read every card. gi-bleed-38 is bleeding after a sphincterotomy, keyed to a blood warmer and a side-viewing scope. gi-bleed-09 is Meckel diverticulum in a toddler. multiple-trauma-36 is a dialysis patient with a head injury. gi-bleed-04 shares the word maroon but none of its keyed decisions.

### infectious-diseases-40 (version 2 to 3, 3 questions, key features 10, 10, 10)

- Old scenario: the boyfriend and pregnant roommate of a university student with meningococcal disease, keyed to ceftriaxone 250 mg IM and chemoprophylaxis timing. It copied headache-04.
- New scenario (Manitoba): a woman at 33 weeks' gestation whose 15-year-old son has PCR-confirmed pertussis, with cough onset 9 days ago. She comes in with her husband and their 4-year-old daughter. She has not had Tdap in this pregnancy.
- Keyed decisions: household chemoprophylaxis goes to the husband and the fully immunized daughter because a third-trimester pregnant person lives in the home. Classmates, teammates, a teacher and a bus driver are not treated. Her regimen is azithromycin 500 mg then 250 mg daily for 5 days, and clarithromycin is avoided in pregnancy. She should have Tdap today, before delivery.
- Mock mode: the prompts never state that she receives antibiotics, and q1 does not list her as an option.
- Sources: Manitoba Health. Communicable disease management protocol: pertussis. September 2024 (PDF read: vulnerable person definition, 21 day window, Table 1 doses and pregnancy notes). Public Health Agency of Canada. Canadian Immunization Guide. Pertussis vaccine. Updated 2026 (Tdap at 27 to 32 weeks, considered until the end of pregnancy).
- Similarity check, top 5 (full / keys): sob-18 0.22/0.13, multiple-patients-35 0.01/0.15, pre-eclampsia-25 0.12/0.00, gi-bleed-24 0.11/0.00, arrhythmia-44 0.11/0.03. I read every card. sob-18 is an apneic infant with pertussis, keyed to her own treatment and admission, not to contact prophylaxis. No SAMP keys pertussis contact management.
- Discarded draft: a Lyme tick bite prophylaxis story. Signed off infectious-diseases-14 already keys doxycycline 200 mg once within 72 hours for an engorged tick, so I dropped it.

### infectious-diseases-42 (version 1 to 2, 3 questions, key features 10, 10, 3, reordered to 3, 10, 10)

- Old scenario: an older woman raised abroad with no tetanus record after a pitchfork puncture through a rubber boot, keyed to Tdap with TIG 250 units and completion of the primary series. It copied lacerations-06 and lacerations-07.
- New scenario: a 52-year-old man with cirrhosis from cured hepatitis C whose wife has acute hepatitis A. Their healthy 24-year-old daughter shares the home.
- Keyed decisions: cirrhosis is the host factor that raises the risk of fulminant hepatitis A. He needs hepatitis A vaccine plus immune globulin. His daughter needs vaccine alone. Neither should wait for serology.
- Sources: Public Health Agency of Canada. Canadian Immunization Guide. Hepatitis A vaccine. Updated 2021 (post-exposure section checked: vaccine within 14 days, immune globulin added for chronic liver disease and immunocompromise, vaccine preferred for healthy contacts aged 6 months or older).
- Similarity check, top 5 (full / keys): infectious-diseases-08 (signed off) 0.22/0.15, infectious-diseases-39 0.19/0.20, lacerations-04 (signed off) 0.13/0.09, gi-bleed-33 0.12/0.00, infectious-diseases-40 0.12/0.08. I read every card. These are a needlestick, a sandbox needle, bat exposure, variceal bleeding and the pertussis rebuild above. No SAMP in the bank keys hepatitis A prophylaxis.

## Fixes

None. Task 2 does not apply in sweep 3.

## Checks

- `SAMP_BATCH=s31`, `s39` and `s41` with `tests/samps.test.ts tests/samp-quality.test.ts`: 506, 671 and 699 tests passed.
- `npx tsc --noEmit -p .`: no errors.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.

## For the physician

- critical-appraisal-28 q4: the 50% pretest probability is a teaching assumption given in the update. Please confirm that emergency MRI, not empiric antibiotics first, is the key you want for a man with no neurological deficit.
- gi-bleed-27 q4: pantoprazole is keyed because an ASA ulcer is still possible before endoscopy. The ICG wording is "may be considered". Octreotide, vitamin K, desmopressin and IV tranexamic acid are the distractors.
- gi-bleed-44 q3: the 500 mL crystalloid bolus is keyed as a bridge to blood in an anuric, hypotensive man. Please confirm the volume fits your practice.
- gi-bleed-44 q1 converts SI units to conventional units to apply the review's ratio threshold of 30. The arithmetic is 31.0 x 2.8 = 86.8 mg/dL and 690 / 88.4 = 7.8 mg/dL.
- infectious-diseases-40 uses the Manitoba protocol because the stem is set in Manitoba. Other provinces use the same vulnerable-person rule.
