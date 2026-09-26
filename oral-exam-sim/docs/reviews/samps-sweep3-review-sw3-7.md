# Review of sweep 3 rebuilds, label sw3-7 (s31, s39, s41)

Reviewer: independent AI audit, both lenses. This is not clinician verification. All five SAMPs stay `reviewed: false`. Nothing was committed.

Scope: critical-appraisal-28, gi-bleed-27, gi-bleed-44, infectious-diseases-40 and infectious-diseases-42. No other SAMP was changed. A per-block diff against HEAD confirms that only these five blocks differ in the three files.

## Writer's report

`docs/reviews/samps-sweep3-sw3-7.md` is intact. It has all five sections, the checks and "For the physician". Its content matches the code as the writer left it. Its note that tranexamic acid is a distractor in gi-bleed-27 q4 is now out of date (see below).

## Key features

Each SAMP's multiset of key features matches `git show HEAD`:

- critical-appraisal-28: 2, 2, 4, 5
- gi-bleed-27: was 6, 1, 6, 1, now 1, 1, 6, 6
- gi-bleed-44: 2, 2, 5, 6
- infectious-diseases-40: 10, 10, 10
- infectious-diseases-42: was 10, 10, 3, now 3, 10, 10

Each question tests the key feature it is mapped to.

## Verdicts

| SAMP | Q | Verdict | Finding and change | Confidence |
|---|---|---|---|---|
| critical-appraisal-28 | q1 | pass | LR minus = 0.05 / 0.40 = 0.125, shown as 0.13. The distractors recompute correctly: 0.20 / 0.75 = 0.27, 0.50 / 0.95 = 0.53, LR plus 0.95 / 0.60 = 1.6. | high |
| critical-appraisal-28 | q2 | pass | Odds 1.0 x 0.125 = 0.125, which is 11%. 50% x 0.125 = 6%. LR 0.267 gives 21% and LR 0.526 gives 34%. | high |
| critical-appraisal-28 | q3 | pass | The AUC reading is correct. The key is the longest option (47 characters against a distractor mean of 36.5, ratio 1.29). The writer did not change this question from HEAD. | medium |
| critical-appraisal-28 | q4 | fixed | "Most appropriate next step" allowed empirical IV antibiotics as a defensible answer in a febrile man on prednisone and methotrexate, and the review says treatment should start empirically. It is now a diagnostic step question. A new update says two sets of blood cultures are drawn and his neurological examination is unchanged. The prompt now asks for the "next diagnostic step". "Discharge with oral analgesia" became "CT of the thoracic spine without contrast". The explanation was corrected: "severe focal back pain" was not in the stem and is now "night pain and focal spinal tenderness". The unsourced radiograph claim now rests on the review's statement that MRI is the most sensitive test. | high |
| gi-bleed-27 | q1 | fixed | Curacao criteria: three of four present, correct. The key was the longest option (37 characters). "Cirrhosis with spider angiomas" is now "Alcohol-related cirrhosis with spider angiomas", and the explanation matches. | medium |
| gi-bleed-27 | q2 | pass | Guideline C5 allows antiplatelets only when there is an indication. She has none. | high |
| gi-bleed-27 | q3 | fixed | B1 (esophagogastroduodenoscopy first) is confirmed on hhtguidelines.org/table. The explanation said colonoscopy is "kept for usual colorectal cancer screening". But B1 adds colonoscopy for people who meet screening criteria, and at 61 she may. The explanation now says so and explains why melena points to upper endoscopy first. | medium |
| gi-bleed-27 | q4 | fixed | Distractor "Tranexamic acid 1 g IV" was defensible. HHT guideline B5 recommends oral antifibrinolytics for HHT-related GI bleeding, and the stated reason (HALT-IT, high-dose IV) did not address that. With a PPI only "may be considered" (ICG), the key was not clearly the single best answer. Tranexamic acid is replaced by "Ceftriaxone 1 g IV", which is wrong because she has no cirrhosis. The key moves from position 3 to 4. The prompt "while she waits for endoscopy" gave away q3 in mock mode. It now reads "to give her in the emergency department". | high |
| gi-bleed-44 | q1 | pass | The arithmetic is right. Urea 31.0 mmol/L x 2.8 = 86.8 mg/dL urea nitrogen. Creatinine 690 / 88.4 = 7.8 mg/dL. The ratio is 11.1, below the threshold of 30 (in SI, 31.0 / 0.690 = 45 mmol/mmol). Srygley's LR for a ratio above 30 is 7.5. | high |
| gi-bleed-44 | q2 | pass | Srygley 2012: clots in the stool LR 0.05 (95% CI 0.01 to 0.38), melena on examination LR 25 (4 to 174). Confirmed. | high |
| gi-bleed-44 | q3 | pass | Crossmatch plus a 500 mL crystalloid bolus is defensible in an anuric man in shock with Hb 68 g/L. 2 L cannot be excreted. INR, platelets and aPTT justify the other distractors. | medium |
| gi-bleed-44 | q4 | fixed | Mock mode cue: the update began "After 2 units of red cells", which gave away the q3 key. It now reads "After resuscitation in the emergency department". The key "within 24 hours" is right because his shock responded (pulse 94, SBP 116). Lau 2020 enrolled Glasgow Blatchford 12 or more and excluded shock that did not respond to resuscitation, and its timing ran from gastroenterology consultation. The explanation now says this and adds that persistent shock should not wait. | high |
| infectious-diseases-40 | q1 | fixed | The Manitoba protocol (September 2024) is confirmed. With a vulnerable person in the home (third trimester), all household contacts get prophylaxis, vaccinated or not. Outside the home, only vulnerable contacts do. Timeline defect: the stem said "coughing fits began 9 days ago", but communicability starts with the catarrhal phase, so the claim of being within 21 days of first contact did not follow. The stem now says "illness began 9 days ago with a runny nose and cough", and the explanation matches. | medium |
| infectious-diseases-40 | q2 | pass | Table 1 lists azithromycin 500 mg then 250 mg for 4 days. Pregnancy is not a contraindication. Clarithromycin and TMP-SMX are not recommended in pregnancy. A mild cue remains: the prompt implies she gets prophylaxis, which hints that the household rule applies in q1. It was left as is. | medium |
| infectious-diseases-40 | q3 | fixed | The CIG (page modified 2026-05-04) says Tdap is ideal at 27 to 32 weeks and should be considered until the end of pregnancy, confirmed. The "No" option carried its own justification ("No vaccine, as antibiotics suffice"). It is now "No pertussis vaccine". | high |
| infectious-diseases-42 | q1 | fixed | The CIG states chronic liver disease raises the risk of fulminant failure, confirmed. The prompt said "of his conditions", but "Birth in Canada" is not a condition. The prompt now says "features". | low |
| infectious-diseases-42 | q2 | pass | The CIG says immunocompromised people and people with chronic liver disease should receive Ig in addition to the vaccine, as soon as possible and preferably within 14 days. | high |
| infectious-diseases-42 | q3 | pass | The CIG prefers vaccine to Ig for healthy people 6 months and older. Ig is optional only at age 60 and older. She is 24. | high |

Counts by SAMP: 0 pass, 5 fixed, 0 re-rebuilt. By question: 8 pass, 10 fixed.

## Key changes

- gi-bleed-27 q4: the key is still pantoprazole 80 mg IV. It moved from index 2 to index 3 because tranexamic acid was replaced by ceftriaxone.
- No other key changed.

## Overlap

- simcheck.py was run on each final draft text. The top scores were at most 0.30 full and 0.20 keys, and no card tells the same story.
- Grep of the current bank, not digest3.json:
  - "epidural abscess": infectious-diseases s12, a write-in about a person who injects drugs with neurological deficits, keyed to MRI and surgery. That is a different story, and critical-appraisal-28 is an appraisal item with no deficit.
  - "telangiect" and "hereditary hemorrhagic": only gi-bleed-27.
  - Dialysis GI bleed: only gi-bleed-44.
  - "clots in the stool": only gi-bleed-44 and first-trimester-bleeding.
  - "within 6 hours" endoscopy timing: only gi-bleed-44. Many SAMPs key "endoscopy within 24 hours" as disposition. gi-bleed-44 keys the 6 hours against 24 hours contrast after resuscitation instead, and the writer avoided gi-bleed-02's Glasgow Blatchford disposition.
  - "pertussis": sob-18 (infant treatment), asthma-copd and lacerations (distractor mentions). No contact prophylaxis.
  - "hepatitis A": only a pediatric-fever distractor.
- sweep3-ss-merged.json: none of the five ids appears in any dup, borderline or signed cluster.

## Cue checks

- Mock mode: two cues were removed, in gi-bleed-44 q4 and gi-bleed-27 q4. The mild infectious-diseases-40 q2 cue was left.
- Hedged keys: none of the five SAMPs has a "most accurate statement" item. No key is the only hedged option.
- Longest option: gi-bleed-27 q1 was fixed. critical-appraisal-28 q3 is still the longest, unchanged from HEAD and within limits.

## Sources verified

- Faughnan 2020 HHT guidelines: https://hhtguidelines.org/table (B1, B2, B5, B6, C5, C6)
- Srygley 2012 JAMA: https://pubmed.ncbi.nlm.nih.gov/22416103/ (LRs 0.05, 25, 7.5)
- Lau 2020 NEJM: https://www.nejm.org/doi/full/10.1056/NEJMoa1912484 (GBS 12 or more, timing from consultation, shock not responding excluded)
- Tetsuka 2020 JMA J, PMC7733760 (MRI, LP caution, steroid and skin infection risk factors, empirical antibiotics)
- Manitoba pertussis protocol September 2024 (writer's PDF text, sections 7.3 and 7.5.3)
- CIG pertussis vaccine: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-15-pertussis-vaccine.html
- CIG hepatitis A vaccine: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-6-hepatitis-a-vaccine.html

## Checks

- `SAMP_BATCH=s31`: 506 passed. `s39`: 671 passed. `s41`: 699 passed. Each run covered tests/samps.test.ts and tests/samp-quality.test.ts.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- critical-appraisal-28 q4 now asks for the next diagnostic step after blood cultures. It does not decide whether empirical antibiotics come before MRI. Guidance differs: the Tetsuka review supports starting empirically, and some sources hold antibiotics in stable patients without deficit until cultures are taken. Please confirm that this framing suits you.
- gi-bleed-27 q4 keys pantoprazole on ICG wording that it "may be considered". Tranexamic acid was removed as a distractor because HHT guideline B5 endorses oral antifibrinolytics for HHT GI bleeding.
- gi-bleed-44 q3: please confirm the 500 mL crystalloid bridge to blood in an anuric patient in shock.
- gi-bleed-44 q4 keys endoscopy within 24 hours only because his shock responded. The explanation now says that persistent shock should not wait.
- infectious-diseases-40 q2's prompt still implies she receives prophylaxis, a mild hint toward the q1 household rule.
