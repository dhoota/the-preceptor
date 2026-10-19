# Q500 verify report, round 3: s62, Abdominal pain

Fresh independent review by Preceptor of the whole final text of `src/samps/s62/abdominal-pain.ts` (abdominal-pain-48 to abdominal-pain-52) after the round-3 writer revision ("Round 3" in `docs/reviews/q500-writer-s62-r2.md`). The reviewer did not write, edit or review this batch before. No SAMP or source file was edited (REVIEW-RULES rule 1). Both lenses were applied. The diff from 1247e3a was read in full, and 49 to 52 were reread in full. New keys were checked against every file in the Q500 catalogue folder and against `src/samps` and `src/cases` by grep. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| abdominal-pain-48 | PASS (unchanged) | PASS | PASS | PASS | PASS | |
| abdominal-pain-49 | FAIL | PASS | FAIL | FAIL | FAIL | |
| abdominal-pain-50 | PASS | PASS | PASS | PASS | PASS | PASS |
| abdominal-pain-51 | FAIL | PASS | PASS | FAIL | PASS | |
| abdominal-pain-52 | FAIL | PASS | PASS | FAIL | PASS | |

Two SAMPs pass and three fail, on 5 of 21 questions. One key carries a dose that does not match the Canadian label (49 q2). One question carries a key feature tag it does not test and an update that names an earlier key (49 q4). One question cues earlier keys in mock mode and rests on a scan the case never names (52 q3). Three explanations make claims their cited source does not hold (49 q3, 51 q3, 52 q3).

Tests run by the reviewer: `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed, 3 files, 132 of 132. `npx tsc --noEmit -p . | grep samps/s62` gave no output. Single key positions, first to fifth: 5, 3, 3, 5, 4 of 20 (no position above 25 percent, every position used). The key is the single longest option in 6 of 20 singles (30 percent). The reviewer computed these with a throwaway test file, which was deleted straight after the run.

## Fixes required by the previous verdict

| Previous fix | Applied | Comment |
|---|---|---|
| 49 q2 ultrasound first repeats abdominal-pain-12 q1 and the oral case. Keep a new KF7 item | Yes | Replaced by an analgesia question (new 49 q2). KF7 now sits on 49 q3 (low-dose CT after ultrasound) and 52 q3. The new 49 q2 fails on its dose, see below. |
| 49 q3 hyoscine repeat and reason in key | Yes | Removed. No option in 49 carries a reason. |
| 50 q4 "no stone was seen" not in the update | Yes | The update now says "with no ureteric stone or hydronephrosis". |
| 51 q2 "IV opioids" not in the stem | Yes | The stem now says "two doses of IV hydromorphone". |
| 52 q1 "without lung disease" not in the stem | Yes | The stem adds "She has no other medical problems." The explanation matches it. |
| 52 q3 CTPA key repeated in the bank | Yes | Replaced by a radiation statement question. The new item fails, see below. |
| 52 q4 update named PE and CT angiography | Yes | Now "Imaging confirms a cause outside the urinary tract, and treatment is started." This names neither key. |

## Required fixes

### abdominal-pain-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | key option and explanation | Key "acetaminophen 750 mg IV". Explanation: "At 52 kg, 750 mg is about 14 mg/kg." | The dose does not match the Canadian label. Both Canadian acetaminophen injection monographs read (DPD 00069718 and 00048547) dose by weight only under 50 kg. Adults and adolescents of 50 kg or more get 1000 mg every 6 hours, or 650 mg every 4 hours in one monograph. At 52 kg the weight-based arithmetic in the explanation applies the wrong rule. Change the key to "acetaminophen 1 g IV". Replace the mg/kg sentence with the adolescent dose of 1 g for 50 kg or more, and cite a Canadian acetaminophen injection monograph as a third source in 49. Parity stays inside the limits: the key would be 21 characters against a distractor mean of 18.5, and "ketorolac 15 mg IV again" stays the longest option. | https://pdf.hres.ca/dpd_pm/00069718.PDF section 4.2 Table 1. https://pdf.hres.ca/dpd_pm/00048547.PDF section 4.2 Table 1. SAMP_SPEC section 9 and Q500_BRIEF rule 6 | High |
| q3 | explanation | "A standard CT with IV contrast gives a larger dose and the contrast adds nothing to finding a stone." | NICE NG118 does not say that contrast adds nothing. It compares other tests with noncontrast CT and recommends the low-dose noncontrast study. Remove "and the contrast adds nothing to finding a stone", or source it. For example: "NICE recommends a low-dose noncontrast study, and a standard CT with IV contrast gives a larger dose." | NICE NG118 1.1.3 and its rationale. SAMP_SPEC section 8 | Low |
| q4 | key feature tag | `keyFeature: { topic: "abdominal-pain", n: 1 }` for a metabolic referral after a confirmed first stone | Abdominal pain KF1 is about building the differential for undefined abdominal pain (age, sex, site, lethal and atypical causes). A referral for metabolic assessment after the stone is found tests follow-up, not the differential. The writer said so too ("That fit is loose. No abdominal pain key feature covers follow-up"). SAMP_SPEC section 13 requires the key feature the question tests. KF1 stays covered by 50 q2. Replace q4 with a decision that tests a CFPC key feature, of this topic or another topic named in alsoTopics. Or drop q4: 49 would then have 3 questions, which the spec allows, but it aims for 4 or 5. | CFPC key features, abdominal pain KF1 (em_kf.json). SAMP_SPEC section 13 | High |
| q4 | update and prompt | "Low-dose CT shows a 4 mm stone at the left vesicoureteric junction." Prompt "... for her first kidney stone?" | Mock mode (ruling B6). The update names the q3 key (low-dose CT). The update and the prompt confirm the stone, which makes the q1 key ("It leaves a stone likely") obvious. Any replacement q4 must not name or imply the q1 or q3 keys. If a follow-up question is kept, write "Imaging confirms ..." and do not name the modality. | SCORING-RULINGS B6 | High |
| q4 | explanation | "A repeat CT adds radiation without a clinical question to answer." | If the item is kept: this reason is not true as worded. Whether a 4 mm stone has passed is a real follow-up question, and NICE NG118 does not say otherwise. Give a true, sourced reason, for example that a CT in 1 month adds radiation in a young person when NICE's concern is to keep it low, or drop the distractor. | NICE NG118 rationale on radiation in children and young people. SAMP_SPEC section 8 | Medium |

### abdominal-pain-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | explanation | "Amoxicillin-clavulanate covers gram-negative bacilli and anaerobes by mouth ... Cefuroxime and trimethoprim-sulfamethoxazole on their own leave out anaerobes, and metronidazole on its own leaves out gram-negative bacilli." | The question cites the ciprofloxacin monograph. The SAMP's other sources (WSES 2020, Brandl 2016) do not state the spectrum of amoxicillin-clavulanate, cefuroxime, trimethoprim-sulfamethoxazole or metronidazole. WSES 2020 says only that coverage should include gram-negative bacilli and anaerobes, and that oral therapy is recommended whenever possible. Those spectrum claims are the reasons that reject three distractors and support the key. Add a real source that states them (a fourth source fits the limit of 4). The writer must open and verify it, for example an intra-abdominal infection guideline that lists cefuroxime or a fluoroquinolone with metronidazole, and amoxicillin-clavulanate alone, as regimens. Cite it on q3, or reword so that every claim traces to a cited source. The writer flagged this in round 2. | WSES 2020 full text (PMC7206757) read: no regimen spectrum statements. SAMP_SPEC section 8 | Medium |

### abdominal-pain-52

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | whole question | Update "Chest imaging is planned. She asks whether the radiation from the scan should worry her." Key "It may raise her breast cancer risk". Explanation: "A chest CT gives far more radiation than a plain radiograph ..." | Three faults. (1) Stem gap. The key and the explanation assume a CT pulmonary angiogram, but the update says only "chest imaging" and "her planned scan". The Thrombosis Canada guide names V/Q as a valid alternative, to be considered "in young patients with a normal chest X-ray". The breast caution it gives belongs to CTPA. Without the scan named, the key does not follow from the case. (2) Mock mode (ruling B6). "Chest imaging is planned", the comparison with a chest radiograph and the breast option show at once that the cause is in the chest and that a chest CT is coming. That gives away q1 (the finding that points outside the abdomen) and narrows q2 to pulmonary embolism. Naming the scan to fix fault 1 names the q2 key even more plainly. (3) "A chest CT gives far more radiation than a plain radiograph" is not in the cited guide (the writer's own flag). It is the only reason given against "It equals a chest radiograph". Required: replace q3 with a decision that needs no chest or PE wording in a later update, and that is not already keyed in the bank (CTPA, V/Q after a negative CTPA and serial leg ultrasound are taken, see the round 2 verdict). Abdominal pain KF7 keeps 49 q3 if 52 q3 changes key feature. If the writer keeps a radiation statement item, the update must name CT pulmonary angiography. That is then a B6 cue the question cannot work without, so it is flagged for the physician. The radiograph claim must also be sourced or removed, and every distractor must keep a sourced reason. | Thrombosis Canada PE diagnosis guide 2025, text read: "Limitations of CTPA include radiation exposure (that might increase breast cancer rates in young women)" and "V/Q scanning should be considered ... in young patients with a normal chest X-ray". SCORING-RULINGS B6. SAMP_SPEC sections 3 and 8 | High (stem gap and B6), Medium (unsourced claim) |

## Writer's flags

| Flag | Ruling |
|---|---|
| 49 q4 KF1 loose fit | Not a fit. Failed above. KF1 remains covered by 50 q2. |
| 49 q2 IV acetaminophen before an opioid as the single key | Accepted as the single best answer. NICE NG118 1.2.2 offers IV paracetamol when NSAIDs are not giving enough relief, and 1.2.3 considers opioids only if both NSAIDs and IV paracetamol are contraindicated or not enough. The committee rationale says opioids "could only be considered if both NSAIDs and intravenous paracetamol were contraindicated or not effective". No Canadian ED renal colic analgesia guideline exists, so international guidance is allowed. Many Canadian EDs would give an opioid here, so this goes on the physician list. The item fails only on its dose. |
| 52 q3 general-knowledge radiation claim | Must be sourced or removed. Failed above. |
| 52 q3 update "Chest imaging is planned" cue | It is a mock-mode cue under B6. Failed above. |

## Unrequested writer changes (REVIEW-RULES rule 4)

| Change | Verdict |
|---|---|
| 52 opening changed from a walk-in clinic dipstick diagnosis to self-treatment with leftover ciprofloxacin | Accepted. It answers the earlier physician note on the crowded clinic-dipstick frame. Self-treatment with a leftover quinolone is plausible. No stem in the bank uses leftover-antibiotic self-treatment (grep of `src/samps` and `src/cases`: the only other "leftover" is a suicide-risk case about pills). The q4 key still holds: the monograph limits use to proven or strongly suspected bacterial infection. KF8 still fits, because the ED decision not to continue a urinary label is the key feature's point. |
| 52 q1 option "Trace blood on dipstick" changed to "Temperature of 37.3°C" | Accepted. The dipstick no longer exists in the stem. The new distractor reason ("a normal temperature argues against infection without pointing to a site") is true and traces to the vitals. Order and parity pass. |
| 52 q4 explanation now "the kidney infection she treated herself for" | Accepted. Consistent with the new stem. |
| 49 q3 (old q4) retagged KF7, explanation rewritten around the radiation choice | Accepted, apart from the contrast claim above. NICE 1.1.3 and the rationale ("serious concern about radiation exposure in children and young people") support it. It does not retell abdominal-pain-37 q2, which is a statement about low-dose CT performance for appendicitis in a young adult. This is a choice of the next test for a suspected stone after a nondiagnostic ultrasound. |

## Checks with no change needed

- 48: no hunk in the diff from 1247e3a. Unchanged since it passed.
- 49 q1: unchanged. Luchs 2002 arithmetic rechecked: 492/587 = 84%, 95/587 = 16% (about 1 in 6), NPV 65%.
- 49 q2 aside from the dose: the distractor reasons trace to NICE 1.2.1 to 1.2.3. Morphine 5 mg IV is about 0.1 mg/kg at 52 kg, a plausible peer dose. The stem gives vomiting twice, so "while she is vomiting" traces to the stem.
- 49 q4 aside from the faults above: NICE 1.7.3 was read word for word: "Consider referring children and young people with ureteric or renal stones to a paediatric nephrologist or paediatric urologist with expertise in this area for assessment and metabolic investigations." 1.8.1 says not to restrict daily calcium, and gives 1 to 2 litres of water for children and young people. 1.8.4 limits potassium citrate in children and young people to recurrent stones that are mostly calcium oxalate, with hypercalciuria or hypocitraturia. The explanation states all three correctly.
- 50: only the q4 update changed. ACC/AHA 2022 targets (heart rate 60 to 80/minute, systolic below 120 mmHg) match secondary summaries of the guideline. The q4 explanation now traces to the update.
- 51 q2 and q4: WSES 2020 full text (Europe PMC, PMC7206757) read again. "We suggest that immunocompromised patients with ALCD be considered at high risk for failure of standard, non-operative treatment (2D)." Antibiotics covering gram-negative bacilli and anaerobes "in high-risk patients such as immunocompromised patients". "In patients requiring antibiotic therapy, we recommend oral administration whenever possible." Outpatient care for "uncomplicated ALCD and no comorbidities". The no-antibiotic recommendation is for immunocompetent patients. "Most of these patients require urgent surgical intervention, and this is associated with a significantly higher mortality rate". In Biondo, emergency surgery was "needed more frequently in group I (chronic corticosteroid therapy)". After conservative treatment, "we suggest planning of an elective sigmoid resection in high-risk patients, such as immunocompromised patients (2D)". Every WSES claim in q2, q3 and q4 is in the text.
- 52 q1, q2 and q4: consistent with the new stem. The Wells arithmetic (1.5 + 1.5 + 1 + 3 = 7.0, high over 6) matches the Thrombosis Canada bands. The guide supports "fatal" (some PEs "are fatal within the first hour").
- Uniqueness: no key in any catalogue file or in `src` keys IV acetaminophen as the next step after an NSAID for renal colic, metabolic referral after a stone, or the breast cancer risk of CT radiation. abdominal-pain-12 q3 keys ketorolac. analgesia-sedation-14 q2 is appendicitis. anaphylaxis s23 keys acetaminophen at discharge after NSAID anaphylaxis. The ciprofloxacin-stop key is not keyed elsewhere.
- Key feature coverage after the fixes (abdominal pain): KF1 50 q2, KF2 50 q4 and 51 q1, KF3 52 q1 and q2, KF4 50 q5, KF5 48 q2 and 50 q3, KF6 49 q1, KF7 49 q3 (plus 52 q3 if kept), KF8 48 q1, 50 q1 and 52 q4. Every key feature stays covered whatever happens to 49 q4 and 52 q3.
- House style: no em or en dashes and no semicolons in the changed strings. Canadian spelling.

## Sources verified

- NICE NG118, 2019. https://www.nice.org.uk/guidance/ng118/chapter/Recommendations fetched (HTTP 200) and read: 1.1.2, 1.1.3 and rationale, 1.2.1 to 1.2.4 and rationale, 1.7.1 to 1.7.3, 1.8.1 to 1.8.5. Correct document.
- Thrombosis Canada, PE diagnosis, 2025. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf fetched and text read. Breast cancer caution for CTPA in young women confirmed. Nothing on chest CT dose compared with a radiograph.
- Sartelli M et al. WSES 2020. https://doi.org/10.1186/s13017-020-00313-4. Full text read through Europe PMC (PMC7206757).
- Canadian acetaminophen injection monographs. https://pdf.hres.ca/dpd_pm/00069718.PDF and https://pdf.hres.ca/dpd_pm/00048547.PDF fetched and dosing tables read (for the 49 q2 fix).
- Unchanged and verified in earlier rounds: CFAS 2026, Luchs 2002, Ohle 2020, ACC/AHA 2022, Brandl 2016, pms-CIPROFLOXACIN monograph.

## Physician-level items (not grounds for failure)

1. 49 q2: the key follows NICE (IV acetaminophen before an opioid). Many Canadian EDs would give morphine at this point.
2. 49 q2: ketorolac was given only 30 minutes before. Some clinicians would wait for its peak effect before adding a drug.
3. 52: Thrombosis Canada advises considering V/Q in young patients with a normal chest X-ray. Any rebuilt imaging or radiation item for this 27-year-old should allow for it.
4. Items carried from round 2 still stand: 48 q3 NSAID cue, the loose off-topic fits in 48 q4 (shock KF3) and 51 q4 (infectious-diseases KF3), and 51 q3 keying oral therapy in an admitted immunosuppressed patient.

## Summary

Five SAMPs, 21 questions. abdominal-pain-48 and abdominal-pain-50 pass. abdominal-pain-49, -51 and -52 fail on 5 questions:
- 49 q2: the dose must be 1 g IV.
- 49 q3: remove or source one clause.
- 49 q4: the key feature tag is wrong, the update gives away earlier keys, and one distractor reason is untrue. Replace it.
- 51 q3: the antibiotic spectrum claims need a source.
- 52 q3: the scan is not named, the update cues earlier keys in mock mode, and one claim is unsourced. Replace it.

Every fix the previous verdict required was applied. The unrequested 52 opening change is accepted. Every key feature stays covered, and key positions and parity pass. The batch has not yet passed fresh review. The fixes go back to a writer, and the revision needs another fresh independent review.
