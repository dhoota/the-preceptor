# Writer report, revision round 2: batch s57 (Ischemic heart disease)

File: `src/samps/s57/ischemic-heart-disease.ts`. Verdict applied: `docs/reviews/q500-qa-s57.md`. SAMP ids are unchanged (ischemic-heart-disease-48 to 52). All items stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. SAMP 48 passed and is untouched.

## Required fixes and how each was done

### ischemic-heart-disease-49

- **q1 (duplicate 10 minute ECG target, reused triage twist).** The sentence "Triage placed her in the waiting room with a note of biliary colic, and her ECG was recorded 50 minutes after arrival" is deleted, so the delay is no longer in the case. q1 is replaced with a key feature 2 decision: the smallest new horizontal ST depression in two contiguous leads that counts as an ischemic ECG change (key 0.5 mm, distractors 1, 1.5, 2 and 3 mm). Her 1 mm depression in V4 to V6 meets it. Source: Fourth universal definition of MI (`udmi-2018`, the same source object already used in s42). Key feature 1 stays covered by 48 q2. The q3 explanation still reads correctly because the ECG remains in the stem.
- **q2 (option added a fact).** "Ache after a large supper" is now "Ache that began after supper", matching the stem. Menu length ratio is within the limit (tests pass).

### ischemic-heart-disease-50

- **Stem contradiction.** "He has not had these symptoms before" is now "He has never had exertional symptoms before", which fits the CT angiogram 3 years ago for chest discomfort.
- **q4 (duplicate sildenafil interval).** Replaced with a new decision: the 2021 CCS dyslipidemia threshold for intensifying lipid-lowering therapy in coronary disease (key 1.8 mmol/L, distractors 1.0, 1.4, 1.6 and 2.6 mmol/L). Key feature 8 (follow-up and further care after ACS is excluded). Amsterdam 2014 is no longer cited and is removed from `sources`. The update line was dropped so that no later text implies the q2 key. The SAMP now cites Gulati 2021 and Pearson 2021 (the CCS source the verdict suggested).

### ischemic-heart-disease-51

- **Stem (reused weather grounding).** Now "You are working in a hospital on an island with no airstrip. Transfer to the nearest PCI centre takes at least 3 hours by ferry and road." The age 78 twist is kept.
- **Old q1, dose (source).** Now q2. Cites the CCS/CAIC 2019 focused update (`ccs-stemi-2019`). The explanation uses its wording: a half dose "may be considered" over 75 in a pharmacoinvasive strategy, and the STREAM hemorrhage excess in older patients "negated" after the half dose protocol change. 17.5 mg at 78 years and 62 kg rechecked (35 mg band halved).
- **Old q3, ST resolution (Canadian source).** Now q4. Cites CCS/CAIC 2019 and uses its definition of failed fibrinolysis (no more than 50% resolution in the lead with maximal ST elevation, or persistent pain, at 60 to 90 minutes). Arithmetic unchanged and rechecked: (6 minus 4) divided by 6 is 33%.
- **Old q4, rescue PCI (duplicate of ems-10 q4, wrong attribution).** Removed. The new key feature 6 question is q1: "Apart from the long transfer, which of the following features of her presentation most supports fibrinolysis for her?" Key "Onset 90 minutes ago". CCS/CAIC 2019 states the greatest benefit of fibrinolysis is in the first 2 to 3 hours and suggests a pharmacoinvasive strategy for early presenters (under 3 hours) who cannot have rapid primary PCI. Distractors are age 78 (raises intracranial hemorrhage risk, so it weighs against), a normal creatinine, nausea, and treated hypertension. The REACT and STREAM 2013 claims are gone. TNKase monograph, REACT and STREAM 2013 are removed from `sources`. Sources are now CCS/CAIC 2019 and STREAM-2 (2 of 4).
- Question order is now q1 strategy timing, q2 dose, q3 enoxaparin (unchanged text, it passed), q4 ST resolution. With q4 last, the SAMP no longer asks for the rescue decision that ems-10 keys.

### ischemic-heart-disease-52

- **Stem numbers.** New values: glucose 12.6 mmol/L, pH 7.17, bicarbonate 9 mmol/L, beta-hydroxybutyrate 5.4 mmol/L, weight 91 kg. The anion gap stays 25 mmol/L, and pH stays below 7.2, so the q3 distractor still makes sense. The q1 explanation glucose now reads 12.6 mmol/L. None of these values matches abdominal-pain-26 (pH 7.14, bicarbonate 8, glucose 11.2).
- **q2 (source did not support type 2 diabetes).** Now cites Pop-Busui R, et al. ADA position statement on diabetic neuropathy (Diabetes Care 2017). Verified wording: "In type 2 diabetes, the prevalence of CAN also increases with diabetes duration and may be present in up to 60% of patients with type 2 diabetes after 15 years" and "CAN is an independent risk factor for cardiovascular mortality, arrhythmia, silent ischemia...". The same text lists orthostatic hypotension as a sign of CAN and gastroparesis as an autonomic manifestation. The explanation now says only that. Diabetes Canada screening chapter is no longer cited and is removed from `sources`.
- **q4 (distractors lacked reasons).** Each distractor now has a reason drawn from Canto 2000 or the stem: the painless group was older (mean 74.2 years) and more often women, so male sex at 66 is not the marker. Diabetes itself, not metformin, was more common in that group. The registry compared patients by chest pain, so malaise is not the marker. The glucose reflects empagliflozin. The distractor "Vomiting before arrival" was replaced by "Malaise for 1 day" to rebalance key positions (key now fifth), and "Glucose below 14 mmol/L" became "Glucose of 12.6 mmol/L" to match the new stem. Figures rechecked against the abstract: 434 877 patients, 33% without chest pain, 23.3% against 9.3%, adjusted odds ratio 2.21.

## Uniqueness check

- Read in full: catalogue `ischemic-heart-disease.md`. Searched `chest-pain.md`, `ems.md`, `cqi.md` and `abdominal-pain.md`, plus `src/samps` and `src/cases` by grep, for each new decision: ST depression threshold or morphology (only an ST elevation threshold is keyed, ischemic-heart-disease-11 q3), LDL threshold, ezetimibe or statin intensification (none keyed), fibrinolysis time window or early presenter (none keyed; existing items key "tenecteplase then transfer", FMC-to-device time and rescue PCI), cardiac autonomic neuropathy (only a distractor in ischemic-heart-disease-46), DKA values (abdominal-pain-26 values avoided).
- No new repeat of a D1 decision. No new patient numbers were taken from another item.
- The bank-wide near-duplicate stem test passed.

## Batch checks after revision

- 5 SAMPs, 20 questions, 19 single and 1 menu (49 q2).
- Single key positions, first to fifth: 4, 4, 4, 4, 3. Key is the single longest option in 4 of 19 (21%).
- Key feature coverage: KF1 1, KF2 2, KF3 2, KF4 4, KF5 3, KF6 1, KF7 2, KF8 5. Every key feature is covered.
- `npx tsc --noEmit -p . | grep samps/s57`: no output. `SAMP_BATCH=s57 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 passed.

## Sources (new or newly cited)

- Wong GC, Welsford M, Ainsworth C, et al. 2019 CCS/CAIC STEMI focused update. Can J Cardiol. 2019. https://doi.org/10.1016/j.cjca.2018.11.031 (DOI checked through Crossref). Full text read from https://caic-acci.org/wp-content/uploads/2020/03/2019-STEMI-Guidelines.pdf : greatest benefit in the first 2 to 3 hours, recommendation 17 (early presenters under 3 hours), half dose over 75 practical tip, STREAM hemorrhage excess negated, failed fibrinolysis definition.
- Thygesen K, Alpert JS, Jaffe AS, et al. Fourth universal definition of MI (2018). J Am Coll Cardiol. 2018. https://doi.org/10.1016/j.jacc.2018.08.1038 (Crossref checked).
- Pearson GJ, et al. 2021 CCS dyslipidemia guidelines. Can J Cardiol. 2021. https://doi.org/10.1016/j.cjca.2021.03.016 (Crossref checked). The abstract (Europe PMC, PMID 33781847) confirms the treatment threshold concept.
- Pop-Busui R, Boulton AJ, Feldman EL, et al. Diabetic neuropathy: ADA position statement. Diabetes Care. 2017. https://doi.org/10.2337/dc16-2042 (Crossref checked). Full text read through Europe PMC (PMC6977405).
- Canto JG, et al. JAMA. 2000. https://doi.org/10.1001/jama.283.24.3223 . Abstract reread through Europe PMC.
- Unchanged: Gulati 2021, Granger 2003, Van de Werf 2023 (STREAM-2), Diabetes Canada 2018 hyperglycemic emergencies.

## Uncertain, for the reviewer

- **UDMI 0.5 mm (49 q1).** The publisher pages for all versions of the Fourth UDMI returned 403. The criterion wording ("new horizontal or downsloping ST depression of 0.5 mm or more in two contiguous leads") was confirmed only through secondary sources that quote Thygesen (LITFL ECG library and several trial protocols on clinicaltrials.gov). The same source object is already cited for UDMI points in s42.
- **CCS 1.8 mmol/L (50 q4).** The guideline full text could not be opened (ccs.ca TLS failure, publisher 403). The threshold was confirmed by WebSearch summaries and by an open Canadian paper that applies it (Cardiol Ther 2024, PMC10899549: "in patients treated with the maximally tolerated dose of statin and LDL-C level above the threshold of 1.8 mmol/L, the addition of non-statin lipid-lowering therapies (LLTs) is recommended"). The explanation leaves out the non-HDL and apoB equivalents because I could not see them in a primary text. In mock mode the q4 lead-in ("intensifying lipid-lowering therapy") hints that lipid therapy belongs in his care, which q2 keys. This is a mild cue. I removed the update to keep it as small as possible.
- **51 q2 dose.** The weight bands (35 mg for 60 to under 70 kg) come from the TNKase monograph. Each question can cite only one source, the verdict asked for the CCS/CAIC guideline for the age rule, and CCS/CAIC has no dosing table, so the monograph is no longer listed. The weight band is stated without its own citation.
- **51 q1.** The CCS/CAIC recommendation also asks for low bleeding risk. At 78 her bleeding risk is higher, which the explanation says. The key is only the feature that most supports the strategy.

## Round 3

Verdict applied: `docs/reviews/q500-verify2-s57.md`. Only the batch file was edited. SAMPs 48 and 52 are unchanged.

### Fixes

- **49 q1.** The prompt now names the reference: "Under the fourth universal definition of MI, which of the following is the smallest new horizontal ST depression in two contiguous leads that counts as ischemic?" (26 words). The explanation now says "no LVH or left bundle branch block". Key and source (udmi-2018) are unchanged.
- **50 q4.** The lipid threshold item is removed. The new item is key feature 6: "Which of the following is the most appropriate way for him to seek care if prolonged chest tightness occurs at home?" Key "Summon EMS by calling 911". Distractors are driving himself to the PCI centre, his wife driving him, a taxi, and phoning his family physician first. Source: Gulati 2021, which I read in the local PDF text. Its patient-centric recommendation reads "In patients with acute chest pain, it is recommended that 9-1-1 be activated by patients or bystanders to initiate transport to the closest ED by emergency medical services (EMS)". The office-setting recommendation (class 3, harm) says delayed transfer to the ED should be avoided. Nothing in the lead-in or options mentions lipids or statins, so the cue to q2 is gone. `ccs-dyslipidemia-2021` is removed, and 50 now cites only Gulati.
- **51 q2.** I could not open the STREAM-2 supplement. The ahajournals supplement pages returned 403. The open copy of the paper (riojasalud.es) lists the supplemental table title but not the table. Europe PMC has no open copy. So I used the fallback.
  - The TNKase product monograph (https://pdf.hres.ca/dpd_pm/00069984.PDF) is restored as the only source for q2. I opened it again this round (HTTP 200) and confirmed the revision date of March 21, 2023, the dose table (under 60 kg 30 mg, 60 to under 70 kg 35 mg, 70 to under 80 kg 40 mg, 80 to under 90 kg 45 mg, 90 kg or more 50 mg), the geriatrics warning ("benefits ... carefully weighed against the risk of increased adverse events, including bleeding"), and ASSENT-2 Table 3 (intracranial hemorrhage 0.4% under 65 against 1.7% at 75 or older).
  - The question now has an update that gives the age decision as part of the case: "Because of her age, the team plans to give half of the usual weight-based tenecteplase dose." The prompt asks which dose matches that plan for her weight, so the tested step rests on the monograph alone. Key 17.5 mg (half of 35 mg).
  - The age rule now sits in q1, which cites CCS/CAIC 2019: "the guideline suggests a half dose may be considered for patients older than 75".
  - Sources for 51: CCS/CAIC 2019, TNKase monograph, STREAM-2 (3 of 4, all cited).
- **51 stem.** The onset is now 100 minutes, and the q1 option is "Onset 100 minutes ago", with the explanation to match. "100 minutes" appears in none of the ischemic heart disease, chest pain, EMS or CQI catalogues. The only bank hit is a burns oral case. The options stay alphabetical and the tests pass on length.

### Uniqueness for the new 50 q4

I searched the catalogues and grepped `src/samps` and `src/cases` for 911 and EMS activation, self-transport, private vehicle and "drive himself". No question keys how a patient should reach hospital. The closest item is ischemic-heart-disease-15 q4, which keys which recurrent symptoms should prompt a 911 call (pain at rest, lasting over 15 to 20 minutes, and so on). The new item keys the mode of getting to care and its distractors, not the trigger symptoms. A reviewer may judge these close, so I flag it.

### Checks

- Single key positions, first to fifth: 4, 4, 4, 4, 3. Key is the single longest option in 4 of 19.
- Questions per key feature: KF1 1, KF2 2, KF3 2, KF4 4, KF5 3, KF6 2, KF7 2, KF8 4.
- `npx tsc --noEmit -p . | grep samps/s57`: no output. `SAMP_BATCH=s57 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 passed.

### Uncertain

- 50 q4 is tagged KF6 because calling 911 starts prehospital monitoring and ECG on the way to reperfusion. KF1 (start testing immediately) is an arguable alternative tag.
- 51 q2 now tests applying the half dose to her weight band, not the decision to halve, which the update supplies. That decision is taught in the q1 explanation, with CCS/CAIC 2019 as the source.
