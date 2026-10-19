# Q500 fresh review, round 2: s64, Asthma/COPD

Fresh independent review by Preceptor of the revised batch. File `src/samps/s64/asthma-copd.ts`. The reviewer did not write, edit or review this batch before, and changed no SAMP, source or shared file (REVIEW-RULES rule 1). Both lenses were applied to the whole final batch. Every item stays `reviewed: false`. This is an AI audit, not clinician verification.

Inputs: the previous verdict `docs/reviews/q500-qa-s64.md`, the writer report `docs/reviews/q500-writer-s64-r2.md`, git log and diff on the file (the last two commits, c7cdeb2 and 2a82a91, are small writer wording edits after the report: the 52 q4 key wording and one sentence of the 49 q1 explanation). Checks run: `SAMP_BATCH=s64 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests). A script found no em or en dashes, smart quotes, micro signs or semicolons. Single key positions 4, 4, 4, 4, 3. Key longest in 4 of 19 singles. Stems 80 to 141 words.

Sources were read in full by this reviewer, not taken from the writer's summary: the GINA 2026 PDF (the copy in the scratchpad has the same byte size, 17 114 104, as the file served at the cited URL, and its title page reads "2026 update, Updated May 2026"), the GINA 2024 PDF for comparison, the BTS/ICS 2016 guideline PDF, the Thien 2018 and Sehgal 2015 abstracts (Europe PMC), and the Health Canada gabapentin review page.

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| asthma-copd-48 | FAIL | FAIL | FAIL | PASS | PASS |
| asthma-copd-49 | FAIL | FAIL | PASS | PASS | PASS |
| asthma-copd-50 | PASS | PASS | PASS | PASS | PASS |
| asthma-copd-51 | FAIL | PASS | PASS | FAIL | FAIL |
| asthma-copd-52 | PASS | PASS | PASS | PASS | PASS |

Question counts: 15 pass, 5 fail. SAMPs: 2 pass, 3 fail.

## Previous required fixes

| Previous fix | Applied | Note |
|---|---|---|
| GINA citation to the current report (48, 49, 52) | Yes | Every GINA item cites `gina-2026`, "2026 update", with the 2026 URL already used in s25. The URL opens to the 2026 PDF. Every quoted statement was checked against the 2026 text (table below). |
| 48 rebuild (q1 to q4 overlaps) | Yes | New scenario and four new decisions. None of the four removed decisions remains. Two new defects, below. |
| 49 q1 reframe | Yes | Now a poor-perception item. One new stem inconsistency, below. |
| 50 q3 update cue and plausibility | Yes | "No radiopaque object is seen" deleted. Explanation now matches the Sehgal abstract (24.6% visualized, 30.6% nonresolving pneumonia, 18.4% segmental collapse, flexible bronchoscopy success 89.6% in the review and 91.8% in the series). |
| 51 rebuild (q1 to q4 overlaps, KF8 fit) | Partly | The old four decisions are gone. The new q3 repeats an existing key decision in a related topic, below. |
| 52 q1, q3, q4 replacements | Yes | New decisions, not keyed elsewhere in the catalogues checked. |

## Required fixes

| SAMP | Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|---|
| asthma-copd-51 | q3 | key decision (uniqueness) | Key "Refit or change the mask" for a hissing leak with missed triggers, against "Intubate for failed NIV", "Increase oxygen", "Lower the IPAP" and "Switch to high-flow" | Rebuild q3 with a new KF7 decision. pulmonary-edema-36 q3 (s48) already keys "Refit or change the CPAP mask" for air hissing around the mask before any escalation, with a higher pressure, intubation and a nonrebreather as distractors. It is listed in the related catalogues pulmonary-edema.md (line 262) and ems.md (line 313), and the oral case in pulmonary-edema.md (q-agitated) models "Check mask fit and leak". This is the same decision with near-identical key wording, and it is not a D1 entry (D1 is also frozen). The writer's report says no new key appears anywhere in the bank, which missed this. Check any replacement against the catalogues first. Raising the IPAP is also taken (asthma-copd-26 q3), as are the 1 to 2 hour repeat gas (asthma-copd catalogue line 28) and NIV contraindication and intubation-trigger lists. One untaken option from the same source is the oxygen set-up on NIV (BTS/ICS: flows above 4 L/minute promote leak and delayed triggering, and specialist advice if 4 L/minute fails to keep SpO2 above 88%). | Catalogues pulmonary-edema.md and ems.md, src/samps/s48/pulmonary-edema.ts | High |
| asthma-copd-51 | q4 | update (mock-mode cue, ruling B6) | "The leak is fixed. A resident wonders whether intensive care would be futile ..." | "The leak is fixed" names the q3 key when all questions show at once. Whatever replaces q3, the q4 update must not state or imply its key. For example: "A resident wonders whether intensive care would be futile for someone with her lung function if she later needs intubation." The q4 key, options and explanation are otherwise correct (BTS/ICS 2016 text read: 62% survived to 180 days against 49% predicted, 96% would opt for invasive ventilation again, prognostic tools unreliable for one patient). | REVIEW ruling B6 | High |
| asthma-copd-49 | q1 | option and explanation (stem consistency) | Stem: "one inhalation twice daily and as needed, and has used about 10 inhalations a day for 2 days." Option "Reliever used 10 times a day". Explanation "Using his reliever 10 times a day ..." | The stem's 10 inhalations are his total, including 2 maintenance inhalations (the writer's own report says "10 inhalations a day stays under the 12 a day limit"), so his reliever use is about 8 a day. Make the option and the explanation match the stem, for example option "About 10 inhalations a day" and explanation "Using about 10 inhalations a day shows ...". Or change the stem to "has used about 10 reliever inhalations a day on top of his maintenance dose" and check that 49 q3 still holds (12 total stays at the limit). | Lens B1, SAMP_SPEC 3 | Medium |
| asthma-copd-48 | q2 | explanation (false reason for her) | "Blood gases are not routinely needed, and controlled oxygen continues while one is drawn." | Her peak flow is 36% of predicted. GINA 2026 says arterial gases "are not routinely required" but "should be considered for patients with PEF or FEV1 <50% predicted", which includes her. Replace with, for example: "GINA suggests considering a blood gas when peak flow is below 50% of predicted, as hers is, but controlled oxygen continues while it is drawn, so a gas never comes before oxygen." The key holds. | GINA 2026 chapter 9 (text read) | Medium |
| asthma-copd-48 | q1 | stem and key wording (cue) | Stem "when a thunderstorm with strong winds crossed the town". Key "Thunderstorm asthma" | The key repeats the stem's word "thunderstorm" (a word-echo cue), so a candidate can match it without reasoning about mimics. Describe the weather without the word, for example "when a storm front with strong gusts and a sudden drop in temperature crossed the town", and keep the key. The q4 lead-in "during future storms" also implies the q1 key in mock mode. Ruling B6 lets that stay because q4 cannot work without it, so it is flagged here, not failed. | Lens B6, ruling B6 | Low |

## Writer flags adjudicated

1. **48 q2, no free oximeter.** Plausible enough. Epidemic thunderstorm events overwhelm emergency departments (Thien 2018: 3365 excess presentations within 30 hours), and a community department running out of oximeters in a surge of 21 patients is credible. The key follows GINA 2026 exactly ("oxygen therapy should not be withheld if pulse oximetry is not available (Evidence D)", and controlled low-flow oxygen with better physiological outcomes than high concentration in severe adults, Evidence B). High-concentration oxygen is not also defensible under GINA or BTS 2017 (asthma is a moderate-oxygen condition there). PASS on this point, with a physician note below. The question fails only for the blood gas sentence above.
2. **48 q1, KF1 tag.** Acceptable. KF1 is "For a first wheezing episode, consider mimics such as foreign body, heart failure, PE, or anaphylaxis before labelling it asthma." She has her first episode, and four options are mimics that the explanation rejects with stem facts (no food, hives or vomiting, expiratory not inspiratory noise, a cluster too sudden for a virus). Thien 2018 confirms "Only 28% had current doctor-diagnosed asthma". The question fails only for the word-echo cue.
3. **48 q4, storm advice.** Holds. GINA 2026 text read: thunderstorms "may increase the level of respirable grass pollen allergens ... and can trigger epidemics", and for sensitized patients exposure "may be reduced when pollen and mold counts are highest by closing windows and doors, remaining indoors" (Evidence D). Distractor reasons are true: intranasal corticosteroids are recommended for allergic rhinitis, regular SABA "can worsen asthma or mask deterioration" (Box 9-7), and GINA encourages regular physical activity (Evidence A).
4. **51 q1, gabapentin.** Holds. The Health Canada page (16 September 2016, read) found respiratory depression with gabapentin alone, with higher risk in older adults and in lung, kidney or nervous system disease that affects breathing. Her dose (600 mg a day) is within renal dosing at an eGFR of 38, and the explanation does not claim an overdose. KF4 fit is loose (a drug contributor, not heart failure, pneumonia or pneumothorax) but acceptable.
5. **52 q2, nebulizer key on GINA's spacer-trial exclusion.** Holds. GINA 2026 text read: pMDI and spacer or DPI give similar improvement "however, patients with life-threatening asthma were not included in these studies", and "Evidence for pMDI and spacer is less robust in severe and near-fatal asthma." The key does not rest on that alone. She is drowsy, speaks in single words and has a nearly silent chest, so a mouthpiece, a breath-actuated device and a DPI all need effort she cannot give. The only spacer option names a mouthpiece, so it is not also correct. IV salbutamol is correctly rejected (GINA: not for routine use in most severe exacerbations, Evidence A).
6. **Three KF7 items in 51.** Acceptable in principle. Each tests a different decision. q2 (full face mask first, BTS/ICS recommendation 2, Grade D, text read) fits "begin early noninvasive support". q4 (prognostic pessimism) fits KF7 loosely, since it is about escalation past NIV. q3 fails on uniqueness, so after the rebuild 51 will still carry KF7 at least twice.

## Unrequested writer changes (REVIEW-RULES rule 4)

- **49 q3 re-keyed to Step 4 MART at discharge.** Accepted on its merits. The writer's reason is true. GINA 2024 said dexamethasone 12 to 16 mg for 1 to 2 days was studied "in children and adults". GINA 2026 says "Several studies in children examined oral dexamethasone", and Box 9-7 now offers dexamethasone as "An alternative for children" only, with prednisone or prednisolone 40 to 50 mg for 5 to 7 days for adults. Keying dexamethasone for a 69-year-old against the 2026 edition would be stale. The new key is supported: "In the context of a recent ED visit or hospitalization, it would be appropriate to commence treatment with ICS-formoterol in adults and adolescents at Step 4", Box 9-7 "starting at Step 4", and Box 4-8B "Step 4 to 5 MART: 2 inhalations twice daily plus 1 as needed" for budesonide-formoterol 160/4.5 (200/6). Step 3 is "1 inhalation twice (or once) daily plus 1 as needed". Step-down "once the patient has fully recovered and asthma has remained stable for 2 to 3 months" matches. "High-dose ICS-formoterol is not recommended in Track 1 Step 4" supports rejecting 4 inhalations twice daily (and Box 4-8B never goes above 2 twice daily for this strength). Not keyed elsewhere: the bank's MART items key the regimen choice (asthma-copd catalogue lines 61, 96, 226), not the step dose for a patient already on MART. The update's prednisone 50 mg for 5 days matches GINA.
- **49 q4 explanation rewrite.** Accepted. The GINA 2024 sentence on action plan and PEF meter is gone from 2026 (checked). The two replacement statements are verbatim in substance: long-term PEF monitoring "For earlier detection of exacerbations, mainly in patients with poor perception of airflow limitation", and guided self-management gives a "reduction of one-third to two-thirds in asthma-related hospitalizations, emergency department visits". "Using nebulized SABA" is still in Box 9-1.
- **49 q1 explanation edit (commit 2a82a91).** Accepted. GINA 2026: "Asthma is frequently undiagnosed in the elderly, due to poor perception of airflow limitation".
- **52 question order (old q2 now q1) and fluticasone 250 mcg twice daily.** Accepted. The reorder removes a normal-order cue, and the later lead-ins do not name the q1 key. 500 mcg a day is a medium dose for an adolescent and avoids echoing asthma-copd-12.

## GINA 2026 statements checked against the text

| Item | Statement in the explanation | GINA 2026 text | Result |
|---|---|---|---|
| 48 q2 | Oxygen not withheld without oximetry, controlled low flow better than high concentration in severe adults, titrate to 93 to 95% | Chapter 9, ED oxygen text, Evidence D and B, 93 to 95% | Matches |
| 48 q2 | "Blood gases are not routinely needed" | Chapter 9 objective assessments adds "should be considered for patients with PEF or FEV1 <50% predicted" | Incomplete for her (fix above) |
| 48 q3 | No routine antibiotics without fever, purulent sputum or radiographic pneumonia | Chapter 9, antibiotics (not recommended) | Matches |
| 48 q4 | Thunderstorms raise respirable grass pollen, stay indoors with windows shut when counts are highest, INCS for rhinitis, regular SABA, physical activity | Chapter 3 outdoor allergens, Chapter 6 rhinitis, Box 9-7, Chapter 3 physical activity | Matches |
| 49 q1 | Few symptoms despite low lung function, missed in older adults | Chapters 1 and 2 (older adults, impaired perception) | Matches |
| 49 q2 | Food allergy or anaphylaxis as a red flag, diabetes as a comorbidity | Box 9-1 | Matches. "ICU admission" is looser than Box 9-1 "near-fatal asthma requiring intubation" (note below) |
| 49 q3 | Step 4 MART after ED, 2 inhalations twice daily, step down after 2 to 3 months, no high-dose MART | Chapter 4 Track 1 Step 4, Box 4-8B, Chapter 9 discharge planning, Box 9-7 | Matches |
| 49 q4 | PEF monitoring for poor perceivers, self-management cuts admissions and ED visits by one-third to two-thirds, nebulized SABA as a red flag, ICS-formoterol as the MART reliever | Chapter 5 PEF monitoring and self-management, Box 9-1, Chapter 4 MART | Matches |
| 52 q1 | Measure PEF before treatment without unduly delaying it, again at 1 hour, gases if not responding with oxygen continued, dark-skin oximeter bias | Chapter 9 objective assessments | Matches |
| 52 q2 | Spacer equivalence, life-threatening asthma excluded, weaker evidence in near-fatal, no routine IV beta2-agonist | Chapter 9 inhaled SABA text | Matches |
| 52 q3 | Wheeze absent in severe exacerbations from reduced airflow, a quiet chest means too little ventilation | Chapter 1 physical examination ("silent chest") and Chapter 12 (children 5 years and younger) | Matches. The second phrase is from the chapter on children 5 years and younger (note below) |
| 52 q4 | Admitted patients continue or are prescribed ICS-containing therapy, LTRA less effective than ICS, no LABA without ICS | Chapter 9 inhaled corticosteroids, Chapter 4 LTRA and LABA text | Matches |

Every GINA citation in the batch is the 2026 edition. No item still cites or quotes GINA 2024.

## Clinical and number checks (all questions)

- Numbers recomputed: 48 peak flow 160/450 = 35.6%, so 36%, and 370/450 = 82.2%, so 82%. 49 150/480 = 31.25%, so 31%, and 400/480 = 83.3%, so 83%. 51 pH by Henderson-Hasselbalch 6.1 + log(32 / (0.03 x 69)) = 7.29, consistent with acute on chronic hypercapnia. 51 q4 62% against 49% matches BTS/ICS. 50 Sehgal figures match the abstract.
- Menu key 51 q4 [3, 5] = "Most survivors would choose it again", "Survival is often underestimated". Correct.
- Every other single key is the one defensible answer, and every distractor reason was checked true except the 48 q2 sentence above.
- Uniqueness: each new key was searched in asthma-copd.md, sob.md, airway.md, pulmonary-edema.md, anaphylaxis.md and environmental.md, and in src/samps and src/cases by text. Only 51 q3 repeats a keyed decision. 51 q2 (interface) differs from the bank's "NIV by face mask" keys, which test the modality. 52 q3 is the reverse inference of the silent-chest items, not the same decision. 48 q3 is the first asthma "no antibiotic" key. The bank's no-antibiotic keys are for COPD (asthma-copd-22 keys the opposite, for COPD on NIV). Thunderstorm appears elsewhere only as lightning injury.
- No D1 repeat is used.
- Key feature coverage after the fixes: KF1 50 q1 to q3 and 48 q1, KF2 49 q2, KF3 49 q1, 52 q1, 52 q3, KF4 48 q3, 50 q4, 51 q1, KF5 48 q2, 52 q2, KF6 49 q3, 52 q4, KF7 51 q2, 51 q4 (plus the 51 q3 rebuild), KF8 48 q4, 49 q4. All eight are covered.
- House style: Canadian spelling, no dashes or semicolons, no mnemonics, no personal names in content. Author "Preceptor".

## Sources verified

- Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf (opens, application/pdf, 2026 edition, full text read for the passages above).
- Thien F and colleagues. Lancet Planet Health. 2018. DOI resolves to the Elsevier record. Abstract read in Europe PMC (PMID 29880157). "Only 28% had current doctor-diagnosed asthma" is verbatim.
- Huh JY. J Dent Anesth Pain Med. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9171332/ opens to the right article.
- Sehgal IS and colleagues. Respir Care. 2015. DOI resolves (publisher blocks automated fetch). Abstract read in Europe PMC.
- Health Canada. Summary Safety Review, gabapentin. 16 September 2016. Page opens and supports 51 q1.
- Davidson AC and colleagues. BTS/ICS guideline. Thorax. 2016. DOI resolves (publisher blocks automated fetch). Full PDF text read: recommendation 2 and interface text, Table 3 and leak text, oxygen above 4 L/minute, prognostic pessimism section.

## Physician-level items (not grounds for failure)

1. 48 q2: the GINA "do not withhold oxygen without oximetry" advice is aimed mainly at settings without oximeters. In practice a Canadian physician would borrow a probe from a stable patient. The lead-in fixes the constraint, so the key stands, but the physician may judge the scenario contrived.
2. 49 q1: the lead-in says he "perceives his airflow limitation poorly", and only one option is his own report, so the item is easy. The 49 q4 lead-in ("how he underestimated this attack") also leans toward the q1 key in mock mode.
3. 49 q2: food allergy or anaphylaxis is already an accept element in write-in fatal-risk questions (s04 and others). The previous reviewer passed this as the batch's only fatal-risk item, and that stands. The explanation's "His past ICU admission ... already raise his risk" is looser than Box 9-1 ("near-fatal asthma requiring intubation and mechanical ventilation"). The stem does not say he was intubated.
4. 49 q3: Canadian emergency physicians often give adult dexamethasone. The re-key follows GINA 2026, which now limits dexamethasone to children. The physician may want a note for the bank's older adult dexamethasone items.
5. 51 q4: the KF7 tag is loose (prognosis for invasive ventilation, not detecting tiring or starting NIV).
6. 52 q3: "a quiet chest indicates minimal ventilation, insufficient to produce a wheeze" comes from GINA's chapter on children 5 years and younger. The adult section says the same in other words ("silent chest" from severely reduced airflow), so the point holds for a 16-year-old.
7. 52 q2: the BTS/SIGN asthma guideline's oxygen-driven nebulizer advice for life-threatening asthma could be added as a second source if the physician wants more than GINA's evidence gap behind the key.

## Summary

Five SAMPs, 20 questions. 15 questions pass and 5 fail. asthma-copd-50 and asthma-copd-52 pass. asthma-copd-48, 49 and 51 fail. The one serious defect is 51 q3, which repeats pulmonary-edema-36 q3 ("Refit or change the CPAP mask") almost word for word, and its q4 update gives the q3 key away in mock mode. The other three fixes are small: a blood gas sentence in 48 q2 that is wrong for a patient at 36% of predicted, a reliever count in 49 q1 that does not match the stem, and a word-echo cue in 48 q1. Every GINA citation is the 2026 edition and every quoted statement matches its text. The writer's unrequested re-key of 49 q3 and rewrite of 49 q4 are correct and accepted. No keyed answer was found clinically wrong.
