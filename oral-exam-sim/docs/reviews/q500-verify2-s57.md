# Q500 verify, round 2: s57, Ischemic heart disease

Fresh independent review by Preceptor of the revised batch (`src/samps/s57/ischemic-heart-disease.ts`, writer commit 3e20c41). This reviewer had not written, edited or reviewed s57 before. Both lenses (clinical truth, and internal consistency and numbers). No SAMP, source or shared file was edited (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Read: Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES, DECISIONS, SCORING-RULINGS, the previous verdict `docs/reviews/q500-qa-s57.md`, the writer report `docs/reviews/q500-writer-s57-r2.md`, the git diff of 3e20c41 on the batch file, and the catalogues for ischemic-heart-disease, chest-pain, ems, cqi and abdominal-pain, with greps of `src/samps` and `src/cases` (including the Q500 drafts s5x, s6x, s70 and batch11 to batch15).

Tests: `SAMP_BATCH=s57 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests).

## Verdicts

| SAMP | Stem | q1 | q2 | q3 | q4 | SAMP verdict |
|---|---|---|---|---|---|---|
| ischemic-heart-disease-48 | PASS | PASS | PASS | PASS | PASS | PASS |
| ischemic-heart-disease-49 | PASS | FAIL | PASS | PASS | PASS | FAIL |
| ischemic-heart-disease-50 | PASS | PASS | PASS | PASS | FAIL | FAIL |
| ischemic-heart-disease-51 | FAIL (minor) | PASS | FAIL | PASS | PASS | FAIL |
| ischemic-heart-disease-52 | PASS | PASS | PASS | PASS | PASS | PASS |

Totals: 2 of 5 SAMPs pass. 17 of 20 questions pass. 3 questions and 1 stem need a writer fix.

## Previous required fixes: were they applied?

| Item | Required in q500-qa-s57 | Applied | Comment |
|---|---|---|---|
| 49 q1 | Replace the duplicate 10 minute ECG item and remove the triage delay | Yes | The triage sentence is gone. The new 0.5 mm ST depression item is a new decision (only an ST elevation threshold is keyed, ischemic-heart-disease-11 q3). It has its own wording defect, below. |
| 49 q2 | Option must match the stem | Yes | "Ache that began after supper" |
| 50 stem | Remove the contradiction | Yes | "He has never had exertional symptoms before" |
| 50 q4 | Replace the sildenafil interval duplicate, drop Amsterdam 2014 if uncited | Yes, but see the new fail | Amsterdam is removed. The replacement is new but off blueprint, below. |
| 51 stem | Drop the weather grounding | Yes | Island with no airstrip. One recycled number remains, below. |
| 51 dose question | Cite CCS/CAIC 2019 for the age rule | Partly | CCS/CAIC now carries the age rule, but the weight band that the key also needs is now unsourced. See 51 q2. |
| 51 ST resolution | Cite CCS/CAIC 2019 | Yes | Wording matches the guideline (checked in the full text). |
| 51 rescue PCI | Replace the duplicate, fix attribution | Yes | Removed. New KF 6 item on early presentation is not keyed elsewhere. REACT and STREAM 2013 claims are gone. |
| 52 stem | New numbers | Yes | pH 7.17, bicarbonate 9 mmol/L, glucose 12.6 mmol/L, weight 91 kg. None match abdominal-pain-26. |
| 52 q2 | Source for type 2 diabetes | Yes | Pop-Busui 2017 wording verified in the full text (PMC6977405). |
| 52 q4 | True reasons for each distractor | Yes | Figures match Canto 2000. |

Unrequested writer changes (rule 4): 51 question order changed (strategy, dose, enoxaparin, ST resolution) and 52 q4 replaced "Vomiting before arrival" with "Malaise for 1 day" to rebalance key positions. Both are sound on their merits.

## Required fixes

### ischemic-heart-disease-49 q1 (FAIL, low to medium confidence). Threshold reference unnamed, and the cited caveat misquoted.

- Current prompt: "Which of the following is the smallest new horizontal ST depression in two contiguous leads that counts as an ischemic ECG change?"
- Current explanation: "... as an ECG sign of ischemia when there is no LVH or bundle branch block."
- Problem 1: SAMP_SPEC section 9 asks the stem or prompt to name the reference when thresholds differ between references. The 0.5 mm criterion is the universal definition of MI. Exercise ECG testing and some protocols (for example the COP-AF trial protocol) use 1 mm, so a candidate can defend 1 mm unless the reference is named.
- Problem 2: the fourth universal definition sets its ECG criteria of acute ischemia "in the absence of LVH and LBBB". It does not exclude right bundle branch block. "Bundle branch block" overstates the source.
- Required change: prompt to "Under the fourth universal definition of MI, which of the following is the smallest new horizontal ST depression in two contiguous leads that counts as ischemic?" (or similar, 10 to 30 words). In the explanation, change "when there is no LVH or bundle branch block" to "when there is no LVH or left bundle branch block".
- Source: udmi-2018 (Thygesen 2018), unchanged. The 0.5 mm wording ("New horizontal or downsloping ST depression of 0.5 mm or more in two contiguous leads") is confirmed by secondary sources quoting the definition (an NIDDK DPPOS reference table gives 0.05 mV). The publisher full text returned 403 to this reviewer as it did to the writer. The key itself is correct.

### ischemic-heart-disease-50 q4 (FAIL, medium confidence). Key feature tag is not honest, and the item is off the CFPC blueprint.

- Current: prompt "Which of the following LDL cholesterol levels is the 2021 CCS threshold for intensifying lipid-lowering therapy in coronary disease?", key "1.8 mmol/L", tagged key feature 8.
- The number is right. The 2021 CCS dyslipidemia guideline (Pearson 2021, abstract read at Europe PMC, PMID 33781847) introduced treatment thresholds for intensifying therapy with nonstatin agents, and secondary sources and the CADTH feedback document quote LDL cholesterol 1.8 mmol/L or more on a maximally tolerated statin in atherosclerotic disease. No newer CCS lipid guideline was found.
- Problem: key feature 8 reads "Given a patient with potential ACS stratified as low risk, ensure appropriate follow-up and investigation (e.g., provocative testing) until the diagnosis is eliminated or confirmed." The threshold for adding ezetimibe or a PCSK9 inhibitor in a patient already on a maximally tolerated statin is long-term secondary prevention. It is not follow-up or investigation of possible ACS, and it matches no other ischemic heart disease key feature. He is also not on a statin, so the threshold does not apply to him at this visit. In mock mode the lead-in ("intensifying lipid-lowering therapy") also points to lipid therapy, which is the q2 key (ruling B6). The writer flagged this cue.
- Required change: replace q4 with a decision that tests an ischemic heart disease key feature honestly and is not keyed elsewhere (grep `src/samps` and `src/cases` first). Key feature 8 stays covered by 48 q3, 48 q4, 50 q2 and 50 q3. Key features 1 and 6 have one question each in the batch, so either is a good target. Avoid any lead-in that names lipid or statin therapy. If `ccs-dyslipidemia-2021` is then uncited, remove it from `sources`.
- Source: as chosen for the new decision (Canadian first).

### ischemic-heart-disease-51 q2 (FAIL, high confidence). Key not verifiable from the cited source.

- Current: source `ccs-stemi-2019`. Explanation: "At 62 kg she falls in the band of 60 to under 70 kg, where the full weight-based tenecteplase dose is 35 mg ... The 30 mg dose is the full dose for under 60 kg ... The 50 mg maximum is for 90 kg or more." Key "tenecteplase 17.5 mg IV".
- Checked: this reviewer read the full CCS/CAIC 2019 focused update (caic-acci.org PDF). It supports the age rule ("A half dose of fibrinolytic therapy may be considered for patients undergoing a pharmacoinvasive strategy who are older than 75 years of age") and the STREAM sentence. It has no tenecteplase dosing table and no weight bands anywhere. So 17.5 mg cannot be derived from the cited source, and the 30 mg, 35 mg and 50 mg band statements trace to nothing the question cites. The writer flagged this.
- Required change, preferred: cite `stream-2-2023` (already in `sources`) for q2. The STREAM-2 paper (Van de Werf 2023, read in full) states that older patients received "half-dose, weight-adjusted bolus tenecteplase (details provided as Supplemental Material)", and its supplement has a table titled "Reduced weight-adjusted dose of tenecteplase in different weight categories". The writer must open that supplemental table and confirm 17.5 mg for 60 to under 70 kg before relying on it. Then rewrite the explanation so every claim traces to STREAM-2: half the weight-adjusted dose in older patients, 17.5 mg in her band, 35 mg as the full dose for that band (twice 17.5 mg), 15 mg as the half dose for under 60 kg, and 30 mg and 50 mg as the full doses for under 60 kg and for 90 kg or more. Drop the CCS/CAIC sentences from q2 or move the age rule sentence to q1 (which cites CCS/CAIC) only if it fits there. Note that STREAM-2 enrolled patients aged 60 or older while CCS/CAIC uses older than 75. At 78 both give the same key (SAMP_SPEC section 9, rule 11), so say "older patients" or state her age, not a threshold that only one source uses.
- Alternative: if the supplement cannot be opened, restore the TNKase product monograph (Hoffmann-La Roche Limited, revised 2023, https://pdf.hres.ca/dpd_pm/00069984.PDF) to `sources` and rebuild q2 so that the decision rests on one source only.
- After the change, keep `sources` at 4 or fewer, and every listed source cited.

### ischemic-heart-disease-51 stem (FAIL, minor, low confidence). Recycled number from ems-10.

- Current: "A 78-year-old woman presents to the emergency department with 90 minutes of central chest pressure and nausea." q1 keys "Onset 90 minutes ago".
- Problem: ems-10 is an anterior STEMI in a woman "with 90 minutes of chest pain" at a hospital far from PCI, keyed to fibrinolysis. The weather grounding is gone, but the same onset time is now the q1 key. The same kind of recycled detail failed 52 in the last round.
- Required change: use a different onset under 3 hours (for example 2 hours or 70 minutes) and update the q1 option, the q1 explanation ("Her pressure began ...") and any other mention. Keep the option list alphabetical and recheck length parity.

## Questions that pass, with notes

- 48 q1 to q4: unchanged and correct under Gulati 2021 (single sample rule-out only for a high sensitivity assay below its limit of detection with symptoms 3 hours or more, 3 to 6 hour repeat for a conventional assay, exercise ECG needs an interpretable resting ECG, two-territory wall motion loss is high risk). Tags acceptable as ruled last round.
- 49 q2: keys breathlessness and sweating. The meal and similarity options are fairly rejected. 49 q3 and q4 read correctly after the stem change. GRACE variables match Granger 2003. Troponin figures (46 to 138 ng/L, 99th percentile 16 ng/L) are consistent.
- 50 q1 to q3: correct. Troponin T below 5 then 6 ng/L meets a 0 and 1 hour rule-out. Atorvastatin 40 mg is a high intensity dose. Long-acting nitrate is correctly rejected because of sildenafil.
- 51 q1: CCS/CAIC 2019 text verified: "greatest benefit seen within the first 2-3 hours after symptom onset" and recommendation 17 (early presenters under 3 hours, low bleeding risk, no rapid primary PCI). Older age raising intracranial hemorrhage risk is supported by the STREAM interim finding the guideline reports. The decision is not keyed elsewhere (ems-10 q1 keys the strategy, not the supporting feature).
- 51 q3: 0.75 x 62 = 46.5, so about 46 mg SC. STREAM-2 methods confirm 0.75 mg/kg SC with the 30 mg IV dose only at 75 or younger.
- 51 q4: (6 minus 4) divided by 6 = 33%. Failed fibrinolysis wording matches CCS/CAIC 2019 ("failure to achieve > 50% ST-segment resolution in the ECG lead with maximal ST elevation, and/or persistent chest pain ... 60-90 minutes after the initiation of fibrinolysis").
- 52 q1 and q3: Diabetes Canada 2018 chapter 15 rechecked: MI listed among DKA risk factors, "A small increase in troponin may occur without overt ischemia", glucose may be lower than expected with SGLT2 inhibitors. 640 divided by 34 is 18.8, so "about 19 times" is right.
- 52 q2: Pop-Busui 2017 verified: CAN "may be present in up to 60% of patients with type 2 diabetes after 15 years" and "is an independent risk factor for cardiovascular mortality, arrhythmia, silent ischemia". Orthostatic hypotension and gastroparesis are listed manifestations.
- 52 q4: Canto 2000 figures match (434 877 patients, 33% without chest pain, 23.3% against 9.3%, adjusted odds ratio 2.21, older and more often women, more diabetes, less reperfusion and fewer ASA, beta blocker and heparin orders).

## Batch checks

- 5 SAMPs, 20 questions, 19 single and 1 menu.
- Single key positions, first to fifth: 4, 4, 4, 4, 3 (no position above 25%, every position used).
- Key feature coverage now: KF1 1, KF2 2, KF3 2, KF4 4, KF5 3, KF6 1, KF7 2, KF8 5. After the 50 q4 replacement the writer must keep every key feature covered.
- House style: no em or en dashes, no semicolons in strings, no mnemonics, no personal names outside citations, Canadian spelling.
- Uniqueness: no new repeat of a keyed decision found apart from the 51 stem detail above. No D1 entry is needed or used.

## Sources verified

- Wong 2019 CCS/CAIC STEMI focused update: full text read at https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf. No tenecteplase dosing table.
- Van de Werf 2023 STREAM-2: full text read (copy at https://www.riojasalud.es/files/content/investigacion/stream_2_circulation_2023.pdf). DOI 10.1161/CIRCULATIONAHA.123.064521 matches. Weight-band table is in the supplement, not opened by this reviewer.
- Pearson 2021 CCS dyslipidemia: abstract via Europe PMC (PMID 33781847). Full text at ccs.ca returned 503.
- Pop-Busui 2017: full text via Europe PMC (PMC6977405).
- Diabetes Canada 2018 chapter 15: https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- Thygesen 2018 UDMI: publisher pages returned 403. Criterion confirmed by secondary sources only.
- Gulati 2021, Granger 2003 and Canto 2000: unchanged, DOIs verified last round.

## Physician-level items (not grounds for failure)

1. 52, mock mode (ruling B6): the q3 option "Acute MI given new ST depression" and the q4 prompt ("in-hospital mortality from MI") both state that he had an MI, which is the q1 key. Neither later question works without that fact, and the stem (new 2 mm ST depression, troponin 640 ng/L) makes MI plain, so this is flagged, not failed.
2. 52 q1 and q3 both arrive at MI, one as the DKA precipitant and one as the meaning of the troponin. They test different reasoning, so they are accepted, but the physician may see them as one angle.
3. Bank inconsistency at exactly age 75 (not an s57 defect): ems-10 q1 and the batch11 case `stopped-antiplatelets-dental-stemi` teach half dose or no enoxaparin bolus "at 75 or older", while CCS/CAIC 2019 says "older than 75" and STREAM-2 gives the IV enoxaparin dose "in patients" aged 75 or younger. 51 follows the sources.
4. 48 q3 and q4 rest on a US guideline because no current Canadian document covers the ED pathway after ACS is excluded (accepted last round, still true).
5. 51 q2 is the mirror of the ems-10 q1 distractor teaching (half dose in older patients). The keyed decision is new, so it is accepted.
