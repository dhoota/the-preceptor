# Q500 verify report, round 2: s62, Abdominal pain

Fresh independent review by Preceptor of the whole final text of `src/samps/s62/abdominal-pain.ts` (abdominal-pain-48 to abdominal-pain-52) after the round-2 writer revision (`docs/reviews/q500-writer-s62-r2.md`). The reviewer did not write, edit or review this batch before. Nothing was edited (REVIEW-RULES rule 1). Both lenses were applied. Every key decision was checked against the catalogues for abdominal-pain, infectious-diseases, pediatric-fever, sob, dvt-pe, first-trimester-bleeding, analgesia-sedation and shock, against the current bank text by grep, and against the oral case `src/cases/batch14/return-visit-belly-pain-girl.ts`. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| abdominal-pain-48 | PASS | PASS | PASS | PASS | PASS | |
| abdominal-pain-49 | FAIL | PASS | FAIL | FAIL | PASS | |
| abdominal-pain-50 | FAIL | PASS | PASS | PASS | FAIL | PASS |
| abdominal-pain-51 | FAIL | PASS | FAIL | PASS | PASS | |
| abdominal-pain-52 | FAIL | FAIL | PASS | FAIL | FAIL | |

One SAMP passes and four fail, on 6 of 21 questions. No keyed answer is clinically wrong. Two questions repeat decisions the bank already keys (49 q2, 52 q3). One repeats a taught point and puts a reason in the key (49 q3). Three explanations make a claim that the stem does not support (50 q4, 51 q2, 52 q1). One update gives away earlier keys in mock mode (52 q4).

Tests run by the reviewer: `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed, 3 files, 132 of 132. No em or en dashes or semicolons in content strings. Single key positions, first to fifth: 4, 4, 4, 4, 4.

## Fixes required by the previous verdict

| Previous fix | Applied | Comment |
|---|---|---|
| 48 rebuild away from infectious-diseases-15 | Yes | Rebuilt as ovarian hyperstimulation syndrome. No PID, pelvic examination, NAAT or tubo-ovarian abscess decision is left. New and passes (see below). |
| 49 q1 bag specimen | Yes, by a full rebuild | The writer rebuilt all of 49 on the coordinator ruling that the oral case owns the misdiagnosed-UTI appendicitis frame. Correct: new 49 has no UTI frame, appendicitis key, cephalexin or surgeon key. The rebuild brought new repeats in q2 and q3 (below). |
| 51 q2 remove ischemia item | Yes | Removed. No bowel ischemia item left in 51. 50 q4 kept as ruled. |
| 51 q3 and q4 repeat abdominal-pain-35 | Yes | CT result now given in an update. New decisions: admission with antibiotics, choice of oral regimen, elective resection review. None is keyed elsewhere. |
| 52 q2 explanation against stem | Yes | Stem now states no cough apart from the hemoptysis, and no vaginal discharge or pelvic pain. The explanation now traces to the stem. |
| 52 stem mirrors sob-23, q3 repeats imaging over D-dimer | Stem yes. q3 no | The risk profile and vitals changed (previous DVT, 27-year-old). Wells recomputed: 1.5 + 1.5 + 1 + 3 = 7.0, high (over 6) in the Thrombosis Canada guide. The new q3 still keys CT pulmonary angiography, see below. |

## Required fixes

### abdominal-pain-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | whole question | "Which of the following is the most appropriate first imaging test for her?" Key "Kidney and bladder ultrasound", explanation: ultrasound first because of radiation at her age (KF7) | Repeats a keyed decision. Signed abdominal-pain-12 q1 (s01) keys renal ultrasound with no CT for suspected renal colic in a young patient, on the ground that ultrasound first cuts radiation (KF7). The Q500 oral case return-visit-belly-pain-girl also keys "ultrasound first, it avoids radiation" in a girl brought by her father, with the father asking for CT. A 15-year-old first episode is a variant of the same decision, not a new one. Replace q2 with a decision not in the bank. KF7 rests on this item alone, so the batch must keep a KF7 item that is new. One route: tag 49 q4 KF7 and rewrite its explanation around the dose choice (NICE 1.1.3 names low-dose noncontrast CT), if the writer checks it does not retell abdominal-pain-37 q2 (low-dose CT in a young adult with appendicitis). | `src/samps/s01/abdominal-pain.ts` abdominal-pain-12 q1. `src/cases/batch14/return-visit-belly-pain-girl.ts` q-imaging | Medium |
| q3 | whole question | Key "Decline, as it does not help" for hyoscine butylbromide in renal colic | Two faults. (1) The point that antispasmodics add nothing in renal colic is already taught with hyoscine butylbromide 20 mg IV as the rejected option in signed abdominal-pain-12 q3 ("antispasmodics add little") and analgesia-sedation-02 q1 ("Antispasmodics add nothing"). Choosing not to give hyoscine is the same decision put the other way round. (2) The key is the only option carrying a reason ("as it does not help"), which breaks SAMP_SPEC section 7 and ruling B3 and cues the key. Replace q3 with an analgesia decision not keyed in the bank (or another key feature). If any form of it is kept, remove the reason clause from the option. | `src/samps/s01/abdominal-pain.ts` abdominal-pain-12 q3. `src/samps/s02/analgesia-sedation.ts` analgesia-sedation-02 q1. SAMP_SPEC section 7 | Medium (repeat), High (reason in option) |

### abdominal-pain-50

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | explanation | "No stone was seen to explain renal colic, and the blood on her dipstick does not outweigh the CT findings." | The q4 update never says that no stone was seen. It reports the dissection, the SMA, the jejunum, normal kidneys and no rupture. Add "There is no ureteric stone or hydronephrosis." to the update, or drop the claim. This was missed by both earlier reviews. | SAMP_SPEC section 8 (every claim traces to the stem or an update) | Medium |

### abdominal-pain-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | explanation | "... has diabetes and has needed IV opioids." | The stem says "She has needed two doses of hydromorphone since she arrived" and never gives the route. Write "IV hydromorphone" in the stem, or change the explanation to "has needed repeated opioids". | SAMP_SPEC section 8 | Medium |

### abdominal-pain-52

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | explanation | "A saturation of 94% on room air in a 27-year-old without lung disease ..." | The stem does not state that she has no lung disease. It gives only the previous DVT. Add "She has no other medical history." to the stem, or remove "without lung disease". | SAMP_SPEC section 8 | Low |
| q3 | whole question | "Which of the following imaging tests is most appropriate to confirm the cause of her pain?" Key "CT angiography of the chest" against CT abdomen, HIDA, MRCP and renal CT | The writer's own flag is correct. CT pulmonary angiography for a high pretest probability of PE is keyed many times in the bank (dvt-pe, sob and chest-pain catalogues, about 30 entries, and it is named in the D1 row for sob-12). The abdominal framing does not make it new here, because q2 has already keyed pulmonary embolism. Once the candidate has named PE, every distractor images below the diaphragm and is not a plausible peer, and the key is the only chest test. That makes it the odd one out. The writer's fallback (leg ultrasound or V/Q after a negative CTPA) is also keyed: signed sob-23 q2 keys a V/Q scan and q3 keys serial leg compression ultrasound. Replace q3 with a decision not in the bank. KF5 keeps 3 items without it (48 q2, 49 q4, 50 q3), so the replacement may test any key feature. | `src/samps/s51/sob.ts` sob-23. Catalogues dvt-pe.md, sob.md, chest-pain.md. DECISIONS.md D1 row sob-12 q1 | Medium |
| q4 | update | "CT angiography shows emboli in the segmental arteries of the right lower lobe. Anticoagulation is started." | In mock mode this names the keys of q2 (pulmonary embolism) and q3 (CT angiography). Ruling B6 asks for a rewording when the later question can work without the fact, and q4 can: for example "Imaging confirms a cause outside the urinary tract, and treatment is started. She asks what to do with the ciprofloxacin." The explanation already says only "Her pain has another cause". | SCORING-RULINGS B6 | Medium |

## Unrequested writer changes (REVIEW-RULES rule 4)

| Change | Verdict |
|---|---|
| 48 rebuilt as ovarian hyperstimulation syndrome (beyond "a non-urinary diagnosis mislabelled as cystitis") with 4 questions | Accepted. Checked against the CFAS 2026 guideline text (below). Nothing on OHSS exists in the bank, in any catalogue or in an oral case. |
| 49 rebuilt whole on the coordinator ruling | Accepted in principle. q1 and q4 pass. q2 and q3 fail as above. |
| 52 q4 added (stop the ciprofloxacin) | Key accepted. The monograph says use only for proven or strongly suspected bacterial infection. No stop-the-antibiotic key after a urinary misdiagnosis exists in the bank (abdominal-pain-34 has a ciprofloxacin misdiagnosis frame but keys "The urinary diagnosis is likely wrong", a different decision). The update fails on B6 only. |
| alsoTopics changed in 48, 49 and 51 | Accepted. They now match the off-topic key feature tags. |
| Source removals (PHAC PID, CPS 2014, Choosing Wisely Canada, WSES 2022) | Accepted. None is still cited. |

## Questions the coordinator asked about

**Key feature tags from another topic.** SAMP_SPEC section 13 allows it: every question carries `keyFeature: { topic, n }`, "usually the SAMP's own topic", and `alsoTopics` lists secondary topics. alsoTopics is set correctly: 48 has analgesia-sedation and shock (q3, q4), 49 has analgesia-sedation (q3), 51 has infectious-diseases (q2, q3, q4). 52 lists dvt-pe with no dvt-pe tag, which is allowed. The tests pass with these tags.

**Fit of the off-topic tags.** 48 q3 analgesia-sedation KF2 (choose the safest agents for the condition): good fit. 51 q2 infectious-diseases KF3 (immunocompromise as a risk for complicated infection): good fit. 51 q3 infectious-diseases KF8 (antibiotic choice from clinical information): good fit. 48 q4 shock KF3 (appropriate fluid for the condition): loose. She is intravascularly depleted, not in shock (BP 104/66 mmHg), and the options test whether to give IV fluid rather than which fluid. The topic is shock and dehydration and CFAS recommendation 8 names crystalloid, so it is defensible. 51 q4 infectious-diseases KF3: loose, because elective resection is a surgical follow-up decision driven by the host factor. Neither is a failure. Both go to the physician list.

**49 q3 hyoscine.** Judged a repeat, see required fixes.

**52 q3 CTPA.** Judged a repeat, see required fixes.

**NICE NG118 and Luchs 2002 for a 15-year-old.** Both acceptable. NICE NG118 defines children and young people as under 16, so it covers her. Its 1.1.2 (ultrasound first for children and young people), 1.1.3 (low-dose noncontrast CT if still uncertain) and 1.2.4 (no antispasmodics) were confirmed by search (the nice.org.uk page returns 403 to the fetch tool, but the published text is quoted in the results). No Canadian ED guideline on stone imaging in adolescents was found, so an international guideline is allowed under SAMP_SPEC section 9. Luchs 2002 is an adult series. The 49 q1 explanation says "a large series" and makes no pediatric claim. The abstract was read in Europe PMC. 492 true positives and 95 false negatives give 492/587 = 84% sensitivity, and 174/(174 + 95) = 65% NPV. 95/587 = 16%, about 1 in 6. All match. The pediatric hematuria figures differ somewhat, which goes on the physician list.

**Loose key feature fits within abdominal pain.** 48 q1 (KF8, the diagnosis question with "Resistant bladder infection" as a distractor after a walk-in UTI label): fits. 48 q2 (KF5, a menu where only one of the three keys is imaging): fits on the ultrasound element and the rejected CT. 49 q4 (KF5): fits. 52 q4 (KF8): fits.

**Abdominal pain key feature 4.** Genuinely covered by 50 q5. A type B dissection with mesenteric malperfusion, lactate 4.6 mmol/L and poorly enhancing jejunum needs intervention now. The distractor "Repeat CT angiography in 6 hours" is the unnecessary investigation, and the explanation says that waiting lets the jejunum infarct. That is the literal KF4 decision. It is the only KF4 item in the batch.

**Oral case return-visit-belly-pain-girl.** The new 48, 51 and 52 share nothing with it. 49 no longer has the misdiagnosed-UTI appendicitis frame. It still shares the oral case's ultrasound-first-for-radiation teaching and its girl-with-father setting, which is part of the 49 q2 failure.

## Checks with no change needed

- 48: CFAS 2026 text read (PDF from cfas.ca, DOI 10.1016/j.rbmo.2026.105541, Buckett W, Sylvestre C, Liu K et al., RBMO volume 52 issue 6). Table 2 risk factors (PCOS, gonadotrophins, 15 or more oocytes) and initial investigations (CBC with haematocrit, electrolytes, urea and creatinine, LFTs, albumin, hCG, abdominal and pelvic ultrasound). "OHSS is not usually associated with fever." NSAIDs "should be avoided as they may compromise renal function". Acetaminophen with or without an opioid, or oral opiates. Recommendations 7 and 8: oral fluids to thirst, then IV crystalloid where oral rehydration is insufficient. Titrate to 20 to 30 mL/hour and reverse hemoconcentration. "Restoration of adequate intravascular volume must always remain the first priority." Salt or water restriction is not recommended. Recommendation 4: cabergoline is generally not recommended. The arithmetic checks: 120 mL in 6 hours is 20 mL/hour. Hematocrit 0.49 is over the 41% for moderate disease, and Na 131 mmol/L with clinical ascites and oliguria gives severe features. The q1 differential matches Table 3.
- 48 q3 has only one answer: CFAS supports acetaminophen with an oral opioid, and all four distractors contain an NSAID. See the physician note on cueing.
- 49 q1 and q4: new to the bank. No SAMP keys a urinalysis without blood leaving a stone likely, or low-dose noncontrast CT after a nondiagnostic ultrasound for a stone.
- 50: unchanged since the previous verdict apart from what is noted above. Ohle 2020 and ACC/AHA 2022 URLs resolve.
- 51 q2 to q4: WSES 2020 full text read (PMC7206757). It says immunocompromised patients are at high risk of non-operative failure (2D), antibiotics against gram-negative bacilli and anaerobes are for high-risk patients including the immunocompromised, and outpatient care is for patients without significant comorbidities. After conservative treatment it suggests planning an elective sigmoid resection in immunocompromised patients (2D). Emergency surgery was needed more often in the chronic corticosteroid group. The pms-CIPROFLOXACIN monograph (pdf.hres.ca, 00067730) says tendon risk is "further increased in older patients usually over 60 years of age, in patients taking corticosteroid drugs", and use only for "proven or strongly suspected" bacterial infection. The 51 q3 key is supported. Amoxicillin-clavulanate is on Canadian first-line lists for mild diverticulitis. A fluoroquinolone tendon item exists (s29 msk, attributing an Achilles rupture to ciprofloxacin), but it is a different decision. The abdominal-pain-24 key (no antibiotics when immunocompetent) is the opposite branch of the same guideline, not a repeat.
- 52 q2: explanation now consistent with the stem. Fitz-Hugh-Curtis, cholecystitis and pyelonephritis distractor reasons are true.
- Format: prompts, option order, parity, menu select 3 of 8, vitals format and hyphenated ages pass the tests. Canadian spelling ("favours", "haematocrit" not used in content, "hemorrhagic" and "edema" are the Canadian medical forms).

## Sources verified

- Buckett W, Sylvestre C, Liu K, et al. CFAS OHSS guideline. RBMO 2026. https://cfas.ca/_Library/Clinical_Practice_Guidance_Documents_/OHSS_RBMO_CFAS_CPG.pdf opened and text read. Correct document.
- NICE NG118, 2019. https://www.nice.org.uk/guidance/ng118/chapter/Recommendations returns 403 to the fetch tool. The recommendation text was confirmed through search results that quote nice.org.uk. The URL is the right page.
- Luchs JS, Katz DS, Lane MJ, et al. Urology 2002 (PMID 12031364). https://doi.org/10.1016/s0090-4295(02)01558-3 resolves (HTTP 200). Abstract read in Europe PMC.
- Sartelli M et al. WSES 2020 diverticulitis. https://doi.org/10.1186/s13017-020-00313-4 resolves. Full text read in Europe PMC.
- Pharmascience pms-CIPROFLOXACIN monograph. https://pdf.hres.ca/dpd_pm/00067730.PDF opened and text read.
- Thrombosis Canada, PE diagnosis, 2025. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf opened. It gives the Wells bands (high over 6) and hemoptysis as a feature. It also says CTPA radiation may increase breast cancer in young women and that V/Q is a valid alternative.
- Ohle 2020 (PMC7828987), ACC/AHA 2022 (PMC9876736), Brandl 2016 (https://doi.org/10.1503/cjs.012915): URLs resolve (HTTP 200).

## Physician-level items (not grounds for failure)

1. 48 q3: the key is the only option without an NSAID, which a test-wise candidate can spot. CFAS leaves few wrong non-NSAID choices, so the item was kept. Consider a menu or a different distractor set.
2. 48 q4 and 51 q4: the off-topic key feature fits are loose (shock KF3, infectious-diseases KF3).
3. The batch is meant to fill thin abdominal pain key features, but 6 of 21 questions carry another topic's key feature. KF1, KF4 and KF6 rest on one item each, and KF7 will too once replaced.
4. Within the batch, 48 and 52 both open with "a walk-in clinic diagnosed [a urinary infection] from a dipstick and prescribed [an antibiotic]", and abdominal-pain-34 (s19) has the same frame with ciprofloxacin. The decisions differ and KF8 is the topic's own wording, so this is not failed, but the frame is getting crowded.
5. 49 q1 uses an adult series for a 15-year-old. The point (no blood does not exclude a stone) holds in children, though the percentages differ.
6. 52: Thrombosis Canada says CTPA radiation may raise breast cancer risk in young women and that V/Q is a valid alternative. Any rebuilt imaging item for a 27-year-old woman should allow for this.
7. 51 q3: an admitted, immunosuppressed patient is keyed to oral antibiotics. WSES supports oral therapy whenever possible, but many Canadian centres would start IV therapy. All options are oral, so the key stands.

## Summary

Five SAMPs, 21 questions. abdominal-pain-48 passes. abdominal-pain-49, -50, -51 and -52 fail, with 7 required fixes on 7 questions (49 q2, 49 q3, 50 q4, 51 q2, 52 q1, 52 q3, 52 q4). Every fix required by the previous verdict was applied, but 52 q3 still keys CTPA. Two questions repeat keyed decisions (49 q2 ultrasound first for a stone to spare radiation, 52 q3 CTPA), and 49 q3 repeats a taught point with a reason inside the key. Three explanations claim facts the stem lacks, and one update gives away earlier keys in mock mode. No keyed answer is clinically wrong, and every citation exists and supports its point. KF4 is genuinely covered by 50 q5. After the fixes KF7 needs a new item. The fixes go back to a writer for a fresh independent review.
