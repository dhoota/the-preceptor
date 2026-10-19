# Q500 verify report: s62, Abdominal pain

Fresh independent review by Preceptor of the whole final text of `src/samps/s62/abdominal-pain.ts` (abdominal-pain-48 to abdominal-pain-52). The reviewer did not write or edit this batch. The first QA round edited the file in place, including a replaced question (51 q2) and a stem change (52), which breaks REVIEW-RULES rule 1, so the current file is treated as a writer revision. Nothing was edited in this round. Both lenses were applied, and every key decision was checked against the bank catalogue (`scratchpad/q500/catalog/abdominal-pain.md`, `infectious-diseases.md`, `pediatric-fever.md`, `sob.md`, `dvt-pe.md`) and the oral cases. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| abdominal-pain-48 | FAIL | FAIL | FAIL | FAIL | | |
| abdominal-pain-49 | FAIL | FAIL | PASS | PASS | PASS | |
| abdominal-pain-50 | PASS | PASS | PASS | PASS | PASS | PASS |
| abdominal-pain-51 | FAIL | PASS | FAIL | FAIL | FAIL | |
| abdominal-pain-52 | FAIL | PASS | FAIL | FAIL | | |

One SAMP passes and four fail. No keyed answer is clinically wrong. Most failures are retellings of signed SAMPs. One explanation contradicts the stem.

Batch tests run by the reviewer: `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (124 of 124). No em or en dashes or semicolons were found in content strings.

## Required fixes

### abdominal-pain-48

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem, q1, q2, q3 | whole SAMP | 22-year-old woman, 4 days of lower abdominal pain, misattributed to a bladder infection, new partner, inconsistent condoms, fever 38.6°C, 60 kg. q1 key "Pelvic examination". q2 menu NAAT, pelvic ultrasound, pregnancy test. q3 "Admit under gynecology for IV therapy" for a tubo-ovarian abscess | Retells signed infectious-diseases-15 ("Vaginal discharge not settling with antifungal": 22-year-old woman, 4 days of lower abdominal pain, misattributed to yeast, new partners, inconsistent condoms, fever 38.3°C, 60 kg). Its q1 asks the pelvic examination findings (including adnexal fullness suggesting abscess), q2 keys NAAT and ultrasound if an abscess is suspected, and q4 lists tubo-ovarian abscess as an admission indication. Rebuild with a different KF8 scenario (a non-urinary diagnosis mislabelled as cystitis that the bank does not already hold) and new decisions. | `src/samps/s12/infectious-diseases.ts` infectious-diseases-15 | High |

### abdominal-pain-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | whole question | "Which of the following features of her first visit made the diagnosis of urinary tract infection unreliable?" Key "Bag specimen for urine" | The teaching that a bag specimen is not valid for culture is keyed in signed pediatric-fever SAMPs (s14, three items with "Bag urine specimen for culture" unacceptable, and the s14 explanation "Bag specimens ...") and in s46 pediatric-fever distractors. Replace with a KF8 decision not in the bank. Note that "nearby inflammation causes pyuria" is also taken (abdominal-pain-24 q1, s19). The rest of 49 (US first, an unseen appendix is inconclusive, surgical assessment now) is new and passes. | `src/samps/s14/pediatric-fever.ts` lines 68, 160, 1257. `src/samps/s46/pediatric-fever.ts` | Medium |

### abdominal-pain-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | whole question | "Which of the following diagnoses must be excluded alongside complicated diverticulitis in her?" Key "Acute mesenteric ischemia" | This question was added by the first QA (an unrequested writer change, judged on its merits under REVIEW-RULES rule 4). It repeats signed abdominal-pain-02 q1 (pain out of proportion to a soft abdomen, "the classic warning of mesenteric ischemia", must be excluded) and the oral case older-man-severe-abdominal-pain. It also overlaps 50 q4 in the same batch. Remove it and keep 50 q4 (see the overlap ruling below). | `src/samps/s01/abdominal-pain.ts` abdominal-pain-02 | High |
| q3 and q4 | whole questions | q3 key "CT abdomen with IV contrast" (against ultrasound, upright film, observation, colonoscopy). q4 update "perforated sigmoid diverticulitis with a 4 cm pelvic abscess ... BP is now 104/62 mmHg", key "Surgical consultation now" against "Repeat CT in 48 hours", oral antibiotics on a ward | Signed abdominal-pain-35 (s19) has the same pair: CT abdomen with IV contrast (against ultrasound, plain film, MRI, cystogram), then "sigmoid diverticulitis with a 6 cm pelvic abscess ... BP is 98/62 mmHg", key "General surgery consult now" against "Repeat CT in 48 hours" and "Oral antibiotics and discharge". abdominal-pain-24 q2 also keys CT for left lower quadrant pain. Replace both with decisions the steroid angle makes new (for example perioperative stress-dose steroid cover, or how immunosuppression changes the antibiotic or drainage decision), each supported by a source opened and cited. Check the bank for adrenal crisis items before choosing stress dosing. | `src/samps/s19/abdominal-pain.ts` abdominal-pain-35 q2 and q3, abdominal-pain-24 q2 | High |

### abdominal-pain-52

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | explanation | "She has no fever, dysuria or flank tenderness for pyelonephritis, and no fever or cough for pneumonia. Fitz-Hugh-Curtis perihepatitis follows pelvic infection, and she has no pelvic symptoms." | The stem says "this morning she coughed up a streak of blood" (added by the first QA), so "no ... cough" contradicts the case. The stem also never states that she has no pelvic symptoms. Change to "no fever or productive cough" or argue pneumonia on fever alone, and either add "She has no vaginal discharge or pelvic pain" to the stem or drop the pelvic claim. | SAMP_SPEC section 8 (every claim traces to the stem) | High |
| stem and q3 | scenario and key | Woman 3 weeks after surgery with right-sided pleuritic pain, pulse 112, resp 22, SpO2 93% on room air, BP 124/78 mmHg. q3 key "Imaging for pulmonary embolism now" with a Wells score of 7.0 | Signed sob-23 is a woman 3 weeks after cholecystectomy with right-sided pleuritic pain, pulse 108, resp 22, SpO2 93% on room air, BP 124/76 mmHg, with a Wells score of 6 that makes PE likely. Imaging without a D-dimer when Wells is over 4.5 is keyed in a signed sob SAMP (s51, Thrombosis Canada "straight to imaging") and in s28 chest pain. Change the risk profile and vital signs so the stem no longer mirrors sob-23, and replace q3 with a KF5 decision not in the bank (for example imaging choice when the abdominal presentation tempts an abdominal CT, if a source supports it). The Wells arithmetic is correct: 1.5 + 1.5 + 1 + 3 = 7.0. | `src/samps/s51/sob.ts` sob-23 and the item near line 2159. `src/samps/s28/chest-pain.ts` line 1897 | Medium |

Not required but noted: in mock mode, q3's options ("Imaging for pulmonary embolism now", "D-dimer, image only if positive") name q2's key (B6). A rebuilt q3 should avoid naming the diagnosis.

## abdominal-pain-50 q4 against abdominal-pain-51 q2

Both teach that severe pain with a soft abdomen means bowel ischemia. That is a repeated teaching point within one batch. 50 q4 is the stronger item: malperfusion from a type B dissection is not in the bank, and it is the step that makes the dissection complicated and drives 50 q5. 51 q2 repeats signed abdominal-pain-02 q1. Keep 50 q4 and remove 51 q2. 51 q1 (the pain and soft abdomen mismatch as the reason to investigate in a patient on prednisone) is KF2 literal wording with a new steroid twist, and passes, but the rebuild of 51 must not add another bowel ischemia item.

## First QA changes and residual items judged

| Item | Verdict |
|---|---|
| 52 hemoptysis added, Wells 7.0 | Arithmetic correct, key now single best under the Thrombosis Canada three-level and two-level schemes. It created the q2 explanation contradiction above. |
| 51 q2 replaced | Fails, see above. |
| 51 q3 and q4 explanation edits | Moot. Both questions fail on repetition. |
| 50 q4 and q5 resourced to ACC/AHA 2022 | Acceptable. No Canadian treatment guideline for type B dissection exists (CMAJ 2020 covers diagnosis only), so a US guideline is allowed under SAMP_SPEC section 9. Intervention for complicated type B dissection and endovascular preference match ESC 2024 and ESVS. |
| URLs added for CPS 2014, Ohle 2020, Brandl 2016 | Acceptable. The DOIs and PMC record match the citations. |
| Residual: YEARS algorithm (52 q3) | Moot. q3 fails. If kept in any form, the stem must name the Wells approach that applies. |
| Residual: PHAC PID page not reopened | Moot. 48 fails on repetition. |

## Checks with no change needed

- 49 q2: Choosing Wisely Canada radiology page opened ("Last updated: September 2026"). It says not to do CT for suspected appendicitis in children until after ultrasound, with sensitivity and specificity of 94%. q3 and q4 follow from it. No other SAMP keys ultrasound first for pediatric appendicitis.
- 50: a pulse deficit is a high-risk finding in Ohle 2020. CT angiography for high probability is correct. Type B dissection with mesenteric malperfusion is new to the bank. The flank pain in an older smoker frame echoes signed abdominal-pain-01 (AAA), but the diagnosis and every decision differ. Beta blockade to HR 60 to 80/minute and SBP under 120 mmHg matches ACC/AHA 2022.
- 52 q1: hypoxemia as the pointer outside the abdomen is new for KF3 in the abdominal pain bank.
- Key feature tags are honest. 51 q3 (CT for suspected diverticulitis) fits KF5 better than KF2, which matters only if it survives.

## Sources verified

- Canadian Association of Radiologists. Choosing Wisely Canada radiology recommendations. https://choosingwiselycanada.org/recommendation/radiology/ opened. Supports 49 q2 and q3.
- Thrombosis Canada. PE diagnosis. 2025. Opened by the first QA (three-level Wells bands, D-dimer rules out only at low or moderate probability). URL resolves.
- Ohle 2020 CMAJ (PMC7828987), ACC/AHA 2022 (PMC9876736), WSES 2020 and 2022, Brandl 2016, CPS 2014 and the PHAC PID page: URLs resolve to the named documents, as recorded by the writer and first QA. No citation defect found.

## Key feature coverage after fixes

Current: KF1 1, KF2 4, KF3 2, KF4 4, KF5 2, KF6 1, KF7 1, KF8 4. After the fixes KF8 loses 48 q1, q2 and 49 q1 (3 of 4), KF4 loses 48 q3 and 51 q4, KF2 loses 51 q2, and KF5 loses 52 q3. The replacements must keep every key feature covered. KF1, KF6 and KF7 each rest on one item.

## Summary

Five SAMPs: abdominal-pain-50 passes. abdominal-pain-48, -49, -51 and -52 fail with 6 required fixes covering 9 questions. Five are repetition of signed SAMPs (infectious-diseases-15, pediatric-fever s14, abdominal-pain-02, abdominal-pain-35 and sob-23). One is an explanation that contradicts the stem (52 q2). On the overlap: keep 50 q4 and remove 51 q2. No keyed answer is clinically wrong. The fixes go back to a writer, and the revision needs a fresh independent review.
