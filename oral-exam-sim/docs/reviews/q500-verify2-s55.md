# Q500 fresh verification, round 2: s55, Infectious diseases

Reviewer: Preceptor (fresh independent AI audit, both lenses: clinical truth, and internal consistency and numbers). This reviewer did not write, edit or review s55 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the whole current text of `src/samps/s55/infectious-diseases.ts` (commit 35c40eb), treated as one writer revision. That includes the first reviewer's later edits (48 q5, 49 q3 and 50 q3 removed, 51 q5 rebuilt) and the round-2 writer's changes. The diff was read against 964ece1, the text the previous verifier judged. Authority for required fixes: `docs/reviews/q500-verify-s55.md`. Writer report: `docs/reviews/q500-writer-s55-r2.md`.

Uniqueness was checked against the catalogues `infectious-diseases.md`, `shock.md`, `abdominal-pain.md`, `pediatric-fever.md`, `sob.md` and `msk.md`, and by grep over the current Q500 text (`src/samps/s5*`, `s6*`, `s70`, `src/cases/batch11` to `batch15`) and the whole bank.

Tests: `SAMP_BATCH=s55 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed. `npx tsc --noEmit -p .` printed nothing for s55.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| infectious-diseases-48 | PASS | q1 PASS, q2 PASS (note), q3 PASS, q4 PASS |
| infectious-diseases-49 | FAIL | q1 PASS, q2 PASS, q3 FAIL, q4 PASS |
| infectious-diseases-50 | FAIL | q1 PASS, q2 PASS, q3 PASS, q4 FAIL |
| infectious-diseases-51 | PASS | q1 PASS, q2 PASS, q3 PASS, q4 PASS, q5 PASS |
| infectious-diseases-52 | PASS | stem PASS, q1 PASS, q2 PASS, q3 PASS, q4 PASS |

3 of 5 SAMPs pass. 19 of 21 questions pass.

## Required fixes from the previous verdict

| Item | Required | Done | Check |
|---|---|---|---|
| 48 q1, q3, q4, q5 | Replace repeats of infectious-diseases-33, and put any antibiotic timing question before the fluid and vasopressor updates | Scenario rebuilt (discitis with a small epidural abscess after an epidural steroid injection). New q1 spine percussion, q2 antibiotic order (before any fluid or vasopressor update), q3 Sepsis-3 classification kept, q4 ICU within 6 hours. TEE question dropped. | Applied. No new key matches a catalogue key. infectious-diseases-13 (s12) keys MRI and spine consult for a PWID with back pain. That is a different decision from examining the spine in a man with no pain complaint. |
| 50 q3 | Replace the vancomycin repeat, and source every organism claim | Organism question, Samarakoon 2021 | Applied. airway-25 q3 also keys Staphylococcus aureus, but for bacterial tracheitis in a child. Different infection, different decision. |
| 50 q4 | Remove the self-answering cue | Rebuilt on HIV with a low CD4 count | Cue removed. Fails on its distractor reasons (below). |
| 51 q5 | Remove the reason clause | Rebuilt as the look-back period | Applied. Numeric options, no reason clause, key unique. |
| 52 stem | Fix the creatinine clearance | 22 mL/minute | Applied. Recomputed below. |
| 52 q2 | Replace the fever-after-improvement repeat | Stop the prophylactic azithromycin | Applied. IDSA statement confirmed. |
| 52 q4 | Fix option order and the second renal-dose question | Minimum prophylaxis duration after the last case | Applied. Options ascending. IDSA recommendation 58 confirmed. |

## Numbers recomputed

- 52 stem, Cockcroft-Gault for a woman, 84 years, 54 kg, creatinine 142 umol/L: (140 minus 84) x 54 x 0.85 / (0.815 x 142) = 2 570.4 / 115.73 = 22.2 mL/minute. The stem's 22 mL/minute is right. Without the female factor it would be 26.1, the old wrong value. The q1 key (30 mg once daily for 10 to 30 mL/minute) holds.
- 48 q3, 30 mL/kg x 74 kg = 2 220 mL, written as 2.2 L. Right.
- 48 q3, MAP (88 + 2 x 44) / 3 = 58.7 mmHg, written as 59. Right. Arrival MAP (84 + 2 x 48) / 3 = 60 mmHg, consistent with a man who is hypotensive before fluid.
- 48 q4, norepinephrine MAP 66 mmHg reaches the 65 target.
- 50 stem, CD4 150 x 10^6/L equals 150 cells per microlitre. Unit right.
- 49, loperamide 4 mg then 2 mg after each loose stool to 16 mg a day. Matches the prescription maximum.

## Key positions

Single keys by position, first to fifth: 4, 3, 5, 4, 4 (20 singles). Position three holds 5 of 20, exactly 25 percent. SAMP_SPEC section 7 says no position holds "more than 25 percent", so 25 percent is within spec, and the test agrees. Every position is used. Note for the writer: any fix that moves another key into position three breaches the limit. 49 q3 currently sits in position four, so its replacement must not land in position three.

## Required fixes

### infectious-diseases-49 (Vomiting and diarrhea at a retirement residence)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | Key "loperamide 4 mg PO", tagged KF9 | (1) Key feature tag is not honest. Official KF9 is "Do not use antibiotics for a clinical presentation of infection that is most likely non-bacterial." The question asks which antimotility drug to give. No antibiotic is among the options and none is at issue, so it does not test KF9 or any other infectious diseases key feature (Lens B 9, SAMP_SPEC section 13). The writer flagged this. (2) False distractor reason: "Codeine ... is not used to treat diarrhea." Codeine is an opioid antimotility agent that is used for diarrhea. The true reason is that it is not recommended for acute infectious diarrhea and sedates an older adult. | Replace q3 with a decision that tests the key feature it is tagged with and is not keyed elsewhere in the bank or this round. Options: an honest KF10 outbreak or contact decision, or KF3, KF4 or KF5, each of which has only one item in the batch. The 49 scenario is near multiple-patients-22 and shock-46 q2, so check both. If a loperamide question is kept in some form, it must carry a key feature it truly tests, and the codeine sentence must be corrected. Keep the new key out of position three (see Key positions). | Official CFPC KF9 wording (em_kf.json). IDSA 2017 recommendation 47 | High (tag), medium (codeine) |

### infectious-diseases-50 (Fever and a limp in a woman who uses drugs)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | "Hepatitis C that has been cured no longer adds this risk. Tobacco and methamphetamine smoking and poor dental health carry other harms but were not among the predictors that study found." | The distractor reasons are unsupported or misleading (Lens A 2, Lens B 1). The full text of Burkey 2008 shows its variables were demographics, HIV risk group, CD4, viral load, HAART, prophylaxis, diabetes and end-stage renal disease. Smoking, hepatitis C, dental health and methamphetamine were never examined. "Were not among the predictors that study found" therefore implies they were tested and rejected, which is false. The hepatitis C sentence has no source. Smoking is itself an established risk factor for invasive pneumococcal bacteremia, and poor dentition for streptococcal bacteremia, so they do "add risk". The key still holds as the strongest factor: adjusted OR 6.43 for CD4 51 to 200 and 21.5 for 50 or less. | Rewrite the last two sentences so each reason is true and traceable. For example: state that the Burkey cohort did not study these factors. Give each a true reason: cured hepatitis C leaves no active infection or immune suppression, and smoking or poor dentition raise the risk of some bloodstream infections far less than a CD4 count of 150 x 10^6/L. Cite a source for any comparative claim, or limit the wording to what Burkey supports. Key, options and stem unchanged. | Burkey 2008 full text, PMC2581476 (Methods variables, Table 2) | Medium |

## Per question notes on passing items

### infectious-diseases-48 (rebuilt)

- q1 PASS. The stem gives the deciding cues without saying "back pain": reluctance to stand, sleeping upright, a spinal injection 4 weeks ago, and a negative urinalysis. IDSA 2015 confirmed: suspect NVO with new back pain and fever, recent instrumentation as a risk, and a motor and sensory examination (strong, low). The "neck flexion" distractor is already answered by "neck is supple" in the stem, which makes it weak but not wrong. Unique: no catalogue key examines the spine.
- q2 PASS, with a note. Writer's flag judged: Kondo 2025 is a retrospective cohort, read in full. It had 25 391 patients. The IPW aOR was 0.89 (0.80 to 0.99). Propensity matching gave 0.94 (0.82 to 1.07), and the septic shock subgroup gave 0.92 (0.81 to 1.05), neither significant. The key does not rest on the mortality signal. Vancomycin runs over 60 minutes or more, and the vancomycin-first group got its beta-lactam a median of 164 minutes later. With one IV, giving the fast drug first puts effective cover in place sooner, so it is the single best of these options. Every sentence of the explanation is true, and it calls the study observational. The biopsy distractor reason matches IDSA NVO (hold only with a normal stable neurologic examination and stable hemodynamics, start empiric therapy in sepsis or septic shock), although the question cites Kondo, not IDSA. Unique: no bank item keys antibiotic sequencing. See physician items.
- q3 PASS. Sepsis-3 classification, numbers right. The previous verifier accepted it as new.
- q4 PASS. Writer's flag judged: the source must be verified as saying it, and it is. The SCCM page for the 2026 guideline (published 23 March 2026, Prescott H, Antonelli M, Alhazzani W, et al., DOI 10.1097/CCM.0000000000007075) states: "For adults with sepsis or septic shock who require ICU admission, we 'suggest' admitting the patients to the ICU within 6 hr." It is conditional, with low certainty of evidence. Page: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026. The DOI link in the file resolves to the journal page but returns 402 (paywall). It is still the right document, so the url is acceptable, though the SCCM page is the openable one. No bank key covers ICU admission timing. Every "within 6 hours" hit in the bank is about source control, endoscopy, CT, hyperbaric oxygen or hip reduction.
- KF tags: q1 KF6, q2 KF1 (antibiotics before investigations finish), q3 KF2, q4 KF2. All honest.

### infectious-diseases-49

- q1, q2, q4 PASS (unchanged, passed before).
- The first reviewer removed the old q3 as a near repeat of shock-46 q2. That is accepted. The decision (which drugs raise the risk of kidney injury in dehydration) matches the shock-46 key.

### infectious-diseases-50

- q1, q2 PASS (unchanged).
- q3 PASS. Samarakoon 2021 read: S. aureus in 90.0% (the discussion says methicillin-sensitive), with Pseudomonas aeruginosa, Streptococcus milleri and Klebsiella named without counts. "Only occasionally" is fair. The study ran from 2006 to 2016, and the paper calls it a decade, so "10 year series" is acceptable. The Eikenella sentence is general knowledge and true.
- Stem rewrite: an unrequested change, judged on its merits (rule 4). The new HIV, hepatitis C and smoking history is internally consistent and supports q4. It does not cue q1 to q3.

### infectious-diseases-51

- q1 to q4 PASS (unchanged).
- q5 PASS. The first reviewer's rebuild, adopted by the writer, was judged on its merits. Look-back of 6 months for secondary syphilis (3 months for primary, 1 year for early latent) was confirmed by the previous verifier on the PHAC page. No catalogue key uses the syphilis look-back period. The writer's sentence fix reads correctly.

### infectious-diseases-52

- Stem and q1 PASS (22 mL/minute, explanation consistent).
- q2 PASS. IDSA 2018, in its evidence summary on bacterial coinfection, says: "There are no data to support the safety or efficacy of antibiotic chemoprophylaxis to prevent bacterial complications" in patients with influenza. Confirmed. No catalogue key stops a prophylactic antibiotic in influenza. It is close in spirit to q1, whose antibacterial distractors teach the same principle, but the decision differs: de-prescribing another clinician's prophylaxis. Accepted.
- q3 PASS. IDSA 2018 recommendation 53 confirmed ("regardless of influenza vaccination history").
- q4 PASS. IDSA 2018 recommendation 58 confirmed: "administer antiviral chemoprophylaxis for 14 days and continue for at least 7 days after the onset of symptoms" in the last case. A minimum of 7 days is the single best answer.

## Mock-mode cues (SCORING-RULINGS B6, flag only)

The writer's three retained cues were judged. Each later question needs the fact, so each is accepted as a flag:
- 48 q2 update (spinal tenderness) names the q1 key. The biopsy and MRI distractors and the q3 key ("from the spine") need the spinal source.
- 48 q4 update (norepinephrine, MRI discitis) implies the q3 key. The ICU decision needs the vasopressor.
- 51 q2 update (palms and soles) names the q1 key. The diagnosis needs it.

Further cues the writer did not list, also flag only:
- 52 q4 prompt ("oseltamivir prophylaxis ... on the unit") names the q3 key. This is new this round, and the duration question cannot work without it.
- 50 q2 update names the groin, the q1 key. Pre-existing.
- 49 q2 update gives creatinine and potassium, the q1 key. 49 q4 ("possible antibiotic treatment" as a future step) implies the q2 key. Both pre-existing.

## Key feature coverage after the required fixes

KF1 48 q2. KF2 48 q3, q4. KF3 50 q4. KF4 50 q2. KF5 51 q2. KF6 48 q1, 50 q1, 51 q1. KF7 49 q1, 51 q3. KF8 50 q3, 51 q4. KF9 49 q2, q4, 52 q1, q2. KF10 51 q5, 52 q3, q4. Every key feature stays covered without 49 q3. The writer's report counted 49 q3 as a fifth KF9 item, which it is not.

## Sources verified

- Berbari EF et al. IDSA native vertebral osteomyelitis 2015. https://academic.oup.com/cid/article/61/6/e26/2196013. Suspicion, instrumentation risk, neurologic examination, and holding versus starting empiric therapy, all quoted.
- Kondo Y et al. Clin Infect Dis 2025 (online December 2024, volume 80 issue 4). https://pmc.ncbi.nlm.nih.gov/articles/PMC12043061/. Full text: cohort size, aOR, sensitivity and subgroup analyses, infusion time, and the authors' call for trials.
- Prescott HC et al. SSC 2026. ICU within 6 hours confirmed on the SCCM guideline page (URL above). The DOI link returns 402 but resolves to the right article.
- Samarakoon LB et al. Singapore Med J 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8027151/
- Burkey MD et al. HIV Med 2008. https://pmc.ncbi.nlm.nih.gov/articles/PMC2581476/. Adjusted ORs and the list of variables studied.
- Uyeki TM et al. IDSA influenza 2018 (Clin Infect Dis 2019). https://academic.oup.com/cid/article/68/6/e1/5251935. Recommendations 53 and 58, and the no-data statement on antibiotic chemoprophylaxis.
- Not reopened (verified by the previous verifier, unchanged claims): Singer 2016, IDSA diarrhea 2017, Tresson 2022, Guelbi 2025, the PHAC syphilis pages, AMMI 2019.

## House style

By script: no em or en dashes, smart quotes or semicolons in any string. No absolute words in options. US spellings checked by eye ("tumours" is Canadian). Stems are 101 to 127 words. Updates are 13 to 43 words. Prompts are 12 to 22 words. No personal names. The author is "Preceptor".

## Physician-level items (not grounds for failure)

1. 48 q2: is beta-lactam-before-vancomycin sequencing fine enough to key? The supporting cohort is observational, and its septic shock subgroup (this patient) showed no significant mortality difference. The key stands on infusion time. In practice a second IV would let both run at once, and that is not an option.
2. 48 q2: the claim that ceftriaxone "can be given over a few minutes". Direct IV injection is allowed in some Canadian ceftriaxone monographs but not in every product listing.
3. 48 q4: SSC 2026's ICU within 6 hours is a conditional suggestion with low certainty. The key teaches a system target the emergency physician meets by escalating or transferring, not a bedside therapy.
4. 50 q3: in Samarakoon the S. aureus isolates were reported as methicillin-sensitive. Whether empiric MRSA cover is needed depends on local rates, as the explanation says.
5. 52 q1 and q2: both teach against an antibacterial in uncomplicated influenza, from different angles. Judge whether that is one angle too many for one SAMP.

## Summary

3 of 5 SAMPs pass (48, 51, 52). 19 of 21 questions pass. Two fail:
- 49 q3 (loperamide): its KF9 tag does not test any infectious diseases key feature, and the codeine reason is false.
- 50 q4: its distractor reasons misstate what Burkey 2008 studied.

Every required fix from the previous verdict was applied. The 52 clearance (22.2 mL/minute) and the 48 volume (2.2 L) and MAP (59 mmHg) recompute correctly. The SSC 2026 ICU within 6 hours suggestion was verified on the SCCM guideline page. Key position three at exactly 25 percent is within spec.
