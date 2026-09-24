# Format conformance: batch s15

Batch s15 holds 30 signed-off SAMPs: pre-eclampsia-01 to 15 and pulmonary-edema-01 to 15. It has 106 questions: 85 write-in, 15 single and 6 menu. This pass changed format only. No `correct` answer, `select`, `required`, `accept`, `unacceptable`, key feature or source id changed, apart from the index remaps that reordering needs. Files edited: `src/samps/s15/pre-eclampsia.ts` and `src/samps/s15/pulmonary-edema.ts`.

## Checks

- `npx tsc --noEmit -p .` shows no errors in `samps/s15`.
- `CONFORM=s15 SAMP_BATCH=s15 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts` gives 430 passed and 11 failed. All 11 failures are the expected "keeps its keys" test, one for each SAMP with a reworded keyed option (table below). They pass once the edits are logged in `docs/conformance-key-edits.json`.
- A script compared the batch before and after. Every write-in `required`, `accept` and `unacceptable` is identical. Every single and menu key points at the same text, apart from the 11 logged rewordings. Every number in every original stem appears in the new stem or `vitals`.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 100 (79 write-in, 15 single, 6 menu). 6 write-in prompts were already CFPC style. |
| Updates added (context moved out of the prompt) | 8 |
| Options added | 0 |
| Options removed | 3 (single questions with 6 options) |
| Option texts new or reworded | 69 of 129 remaining options |
| Keyed options reworded | 11 options in 11 questions (11 SAMPs) |
| Stems changed | 30 |
| Vitals moved to the `vitals` field | 30 SAMPs |
| Patient names removed | 0 (none present) |
| Citations completed | 3 source definitions (Tintinalli and Rosen in both files, and the Canadian Blood Services guide), used by 20 SAMPs |
| Citations replaced | 0 |

Options removed as the weakest distractor:
- pre-eclampsia-04 q2: "Midazolam 10 mg IM"
- pulmonary-edema-02 q2: "Nitroglycerin infusion"
- pulmonary-edema-05 q1: "Adenosine 6 mg IV"

## Key position across the 15 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 2 | 11 | 2 | 0 | 0 |
| After | 3 | 3 | 3 | 3 | 3 |

After the pass the key is the single longest option in 2 of 15 single questions (13%), pulmonary-edema-08 q3 and pulmonary-edema-09 q4. The limit is 35%. The key position comes from alphabetical order and distractor wording only.

## Keyed option rewordings

| SAMP | Question | Before | After |
|---|---|---|---|
| pre-eclampsia-01 | q3 | Admit to the obstetrical unit for maternal and fetal assessment and a decision on timing of delivery | Admit to obstetrics for maternal and fetal assessment |
| pre-eclampsia-04 | q2 | Magnesium sulfate 4 g IV over 5 to 20 minutes then 1 g/h | Magnesium sulfate 4 g IV load then 1 g/h |
| pre-eclampsia-06 | q3 | Urgent obstetrical consultation for delivery once she is stabilized | Urgent obstetrical consultation for delivery once stable |
| pre-eclampsia-14 | q2 | Systolic below 160 and diastolic below 110, then aiming for a diastolic of about 85 | Below 160/110, then a diastolic of about 85 |
| pulmonary-edema-01 | q2 | Nitroglycerin 0.4 mg sublingual every 5 minutes while an IV infusion is started at about 50 to 100 mcg/min and titrated up rapidly | Repeated sublingual 0.4 mg plus IV 50 to 100 mcg/min |
| pulmonary-edema-02 | q1 | Immediate transfer for primary PCI, activating the PCI centre now | Immediate activation and transfer for primary PCI |
| pulmonary-edema-05 | q1 | Synchronized electrical cardioversion with procedural sedation | Synchronized cardioversion with procedural sedation |
| pulmonary-edema-07 | q2 | SpO2 falls to 87% and heart rate rises to 118 bpm | SpO2 falls to 87%, heart rate rises to 118 bpm |
| pulmonary-edema-08 | q3 | Ketamine 1 mg/kg and rocuronium 1.2 mg/kg, with norepinephrine ready | Ketamine 1 mg/kg, rocuronium 1.2 mg/kg, norepinephrine ready |
| pulmonary-edema-09 | q4 | Discharge with oral furosemide, a formal echocardiogram and heart function clinic review within 2 weeks, plus alcohol cessation support | Discharge on oral furosemide, echo and clinic within 2 weeks |
| pulmonary-edema-14 | q2 | Norepinephrine or phenylephrine infusion to maintain perfusion pressure | Norepinephrine or phenylephrine infusion |

The unchanged second keys are "Magnesium sulfate 4 g IV then 1 g/h" (pre-eclampsia-06 q3) and "Furosemide 20 mg IV with close BP monitoring" (pulmonary-edema-14 q2).

Why each was needed. Options are limited to 60 characters and 10 words. Nine keys were over 60 characters: pre-eclampsia-01, 06 and 14, and pulmonary-edema-01, 02, 05, 08, 09 and 14. Two keys were over 10 words: pre-eclampsia-04 (12 words) and pulmonary-edema-07 (11 words). Where a trim dropped detail, the detail moved into the explanation:
- pre-eclampsia-01 q3: obstetrics "decide on timing of delivery".
- pre-eclampsia-04 q2: "4 g IV over 5 to 20 minutes, followed by 1 g/h".
- pulmonary-edema-01 q2: "every 5 minutes" and an IV infusion "started at about 50 to 100 mcg/min and titrated up rapidly".
- pulmonary-edema-02 q1: "with the PCI centre activated now".
- pulmonary-edema-09 q4: "oral furosemide, a formal echocardiogram and heart function clinic review within 2 weeks" and "Alcohol cessation support".
- pulmonary-edema-14 q2: the existing explanation already says the vasopressor maintains coronary perfusion pressure.

Entries for `docs/conformance-key-edits.json`, keyed `id#q`, in snapshot key order:

```
"pre-eclampsia-01#q3": { "before": ["Admit to the obstetrical unit for maternal and fetal assessment and a decision on timing of delivery"], "after": ["Admit to obstetrics for maternal and fetal assessment"] },
"pre-eclampsia-04#q2": { "before": ["Magnesium sulfate 4 g IV over 5 to 20 minutes then 1 g/h"], "after": ["Magnesium sulfate 4 g IV load then 1 g/h"] },
"pre-eclampsia-06#q3": { "before": ["Magnesium sulfate 4 g IV then 1 g/h", "Urgent obstetrical consultation for delivery once she is stabilized"], "after": ["Magnesium sulfate 4 g IV then 1 g/h", "Urgent obstetrical consultation for delivery once stable"] },
"pre-eclampsia-14#q2": { "before": ["Systolic below 160 and diastolic below 110, then aiming for a diastolic of about 85"], "after": ["Below 160/110, then a diastolic of about 85"] },
"pulmonary-edema-01#q2": { "before": ["Nitroglycerin 0.4 mg sublingual every 5 minutes while an IV infusion is started at about 50 to 100 mcg/min and titrated up rapidly"], "after": ["Repeated sublingual 0.4 mg plus IV 50 to 100 mcg/min"] },
"pulmonary-edema-02#q1": { "before": ["Immediate transfer for primary PCI, activating the PCI centre now"], "after": ["Immediate activation and transfer for primary PCI"] },
"pulmonary-edema-05#q1": { "before": ["Synchronized electrical cardioversion with procedural sedation"], "after": ["Synchronized cardioversion with procedural sedation"] },
"pulmonary-edema-07#q2": { "before": ["SpO2 falls to 87% and heart rate rises to 118 bpm"], "after": ["SpO2 falls to 87%, heart rate rises to 118 bpm"] },
"pulmonary-edema-08#q3": { "before": ["Ketamine 1 mg/kg and rocuronium 1.2 mg/kg, with norepinephrine ready"], "after": ["Ketamine 1 mg/kg, rocuronium 1.2 mg/kg, norepinephrine ready"] },
"pulmonary-edema-09#q4": { "before": ["Discharge with oral furosemide, a formal echocardiogram and heart function clinic review within 2 weeks, plus alcohol cessation support"], "after": ["Discharge on oral furosemide, echo and clinic within 2 weeks"] },
"pulmonary-edema-14#q2": { "before": ["Norepinephrine or phenylephrine infusion to maintain perfusion pressure", "Furosemide 20 mg IV with close BP monitoring"], "after": ["Norepinephrine or phenylephrine infusion", "Furosemide 20 mg IV with close BP monitoring"] }
```

Menu `correct` arrays keep the signed-off key order, so pre-eclampsia-02 q3, pre-eclampsia-14 q1 and pulmonary-edema-14 q2 are not in ascending index order. Every remap was checked by comparing the keyed text before and after.

## Citation changes

| Source id | Before | After | Verification |
|---|---|---|---|
| tintinalli (both files) | Tintinalli JE, et al, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. McGraw Hill. (no edition or year) | Tintinalli JE, Ma OJ, Yealy DM, Meckler GD, Stapczynski JS, Cline DM, Thomas SH, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. (chapter note kept) | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| rosen (both files) | Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. Elsevier. (no edition or year) | Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. (chapter note kept) | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| cbs-guide | Canadian Blood Services. Clinical Guide to Transfusion. Chapter on adverse transfusion reactions. | Laureano M, Khandelwal A, Yan M. Transfusion reactions. In: Khandelwal A, Abe T, editors. Clinical Guide to Transfusion. Canadian Blood Services. 2022. A `url` was added. | https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions (published 7 October 2022. It covers TACO management and prevention: stop the transfusion, diuretics, slower rates.) |

The other 18 citations already had a year. Each was checked against PubMed and all were correct: SOGC 426 (PMID 35577426, 2022), ISSHP (35066406, 2022), ACOG 222 (32443079, 2020), Collaborative Eclampsia Trial (7769899, 1995), SOGC 364 (30268316, 2018), Sibai (15121574, 2004), SOGC 408 (33384141, 2021), CCS HF 2017 (29111106), CCS/CHFS 2021 (33827756), ERS/ATS NIV (28860265, 2017), ESC HF 2021 (34447992), DOSE (21366472, 2011), CCS STEMI (30760415, 2019), CCS/CHRS AF (33191198, 2020), Ottawa HF Risk Scale (23570474, 2013 and 27976497, 2017), ESC/EACTS valve (34453165, 2022), AHA endocarditis (26373316, 2015), HFA peripartum cardiomyopathy (31243866, 2019).

## Other format changes

- Ages hyphenated in all 30 stems. "You work in" became "You are working in" (3 stems).
- Temperatures written as °C, BPs given mmHg, heart rates given as /minute. "µmol/L" became "micromol/L" throughout, and "300 µg" became "300 mcg" in one explanation. A space was added as the thousands separator (LDH 1 040, NT-proBNP 3 800, 2 900 and 6 400).
- "HR ... sinus" became the pulse plus "The monitor shows sinus rhythm" or "sinus tachycardia" (pulmonary-edema-02, 07, 13 and 14). pulmonary-edema-03 and 05 use "irregular" and pulmonary-edema-09 uses "regular" in the pulse field, as the stems said.
- Instruction and context sentences were moved out of prompts into `update`: pre-eclampsia-01 q4, pre-eclampsia-11 q3, pre-eclampsia-13 q4, pulmonary-edema-03 q3, 05 q1, 07 q2, 08 q3 and 14 q4. Detail requests such as "Include drug, dose and route" were folded into the question ("What medications, with drug, dose and route, ...?").
- Reason text was removed from options and kept in or added to the explanation: "No imaging, because this is typical eclampsia" (pre-eclampsia-13 q2), "Disregard the result because dipsticks are unreliable" (pre-eclampsia-11 q3), "No reperfusion because cardiogenic shock is a contraindication" (pulmonary-edema-02 q1), "Dexamethasone ... to raise the platelet count" (pre-eclampsia-02 q3), "Hold all diuretics because his creatinine has risen" (pulmonary-edema-13 q2).
- To meet length parity, some distractors gained plausible detail, such as a rate or route: "Procainamide 17 mg/kg IV over 60 minutes", "Phenytoin 20 mg/kg IV at up to 50 mg/minute", "Adenosine 12 mg IV rapid push". Each is still wrong under the cited source for the reason the explanation gives.
- Generic drug names in options were not lowercased. Doing so would have changed the text of almost every keyed option and each would have needed a logged edit. This can be done in one batch-wide pass if wanted.

## Needs physician decision

1. **Oxygen source not stated.** Seven stems give SpO2 with no oxygen source: pre-eclampsia-03, 07, 08, 10, 12, 13 and 15. The `vitals` format needs "on room air" or "on ...", and adding it would invent a fact. So SpO2 stays in the stem text ("Her SpO2 is 98%."). Please confirm the oxygen source so it can move to `vitals`.
2. **Repeat and baseline BPs stay in the stem.** The `bp` field holds one reading. Repeat readings stay in the stem because they matter for diagnosing severe hypertension (pre-eclampsia-01, 03, 06, 08, 10, 11, 14 and 15). So do the baseline or earlier readings (pre-eclampsia-01, 07, 11, 12, 14 and 15, pulmonary-edema-08 and 12). SAMP_SPEC section 4 says no BP in stem text. The legacy stem gate does not run on s15, so tests pass, but this needs a format decision.
3. **All 11 keyed rewordings** in the table above. The biggest trims are pulmonary-edema-09 q4 (formal echocardiogram, heart function clinic and alcohol support shortened to "echo and clinic"), pulmonary-edema-01 q2 (the dosing interval and rapid titration moved to the explanation) and pre-eclampsia-04 q2 (the 5 to 20 minute load time moved to the explanation).
4. **pre-eclampsia-15 q3 cites a source not in its sources list.** The explanation relies on "SOGC 448 (2024)" for anti-D advice, but the SAMP lists only SOGC 426 and SOGC 408. This was left unchanged and not verified. Please confirm the guideline and add it as a source, or reword the explanation.
5. **pulmonary-edema-02 q1 explanation.** It says "Keeping him in a non-PCI hospital is never appropriate." The sentence before it says CCS suggests fibrinolysis before transfer when excessive delays are expected. The absolute is left as signed off. Please decide whether to soften it.
6. **Distractors removed.** "Midazolam 10 mg IM" (pre-eclampsia-04 q2), "Nitroglycerin infusion" (pulmonary-edema-02 q2) and "Adenosine 6 mg IV" (pulmonary-edema-05 q1) were removed to reach 5 options. The explanation for pulmonary-edema-02 q2 still says nitrates worsen hypotension, which is true but no longer refers to an option.

No clinical error was found that would change an answer.
