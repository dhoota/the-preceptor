# Format audit: Preceptor SAMPs and orals against CFPC EM resources

Audit date: 24 September 2026.
Scope: question format and style only. Clinical accuracy is out of scope.
App measured: 525 SAMPs, 2040 questions, 100 oral cases, as bundled from `src/samps` and `src/cases` on the audit date.

The CFPC documents are copyrighted. This audit describes patterns, counts and ranges. It quotes only generic candidate instructions, such as "Select one." Every clinical illustration below is invented.

## 1. Headline findings

1. **The exam format is changing.** From April 2026, up to 25 percent of SAMP cases use multiple choice (MCQ) or short menu questions. From 2027, all cases do. The app is 74 percent write-in (1502 of 2040 questions). SAMP_SPEC.md requires at least 60 percent write-in.
2. **Instructions show twice.** 1820 of 2040 prompts already contain "Select one." or "List THREE." The renderer then appends the same instruction in bold.
3. **Answer position gives the answer away.** In 409 five-option MCQs, the keyed answer is never in position 5. It is the longest option in 311 of 455 MCQs (68 percent). CFPC samples list options alphabetically, so position carries no signal.
4. **Vitals are not in CFPC form.** CFPC shows a labelled, bulleted "Vital signs:" list in a fixed order with units. The app mostly uses an inline "HR 112, BP 96/58" string. 359 stems give HR with no unit, and 395 give BP with no unit.
5. **Write-in phrasing differs.** CFPC write-in questions are real questions ending in "?", then the instruction. In the app, 1106 short prompts are commands that start "List THREE ...".
6. **Oral stems and scoring differ.** CFPC oral stems are short triage cards with no patient name. They are read aloud by the candidate. The sample score sheet has four 0 to 10 scales: history, physical and differential, management, and overall process of care. The app names 87 of 100 patients, uses stems of 98 to 187 words, and puts 78 percent of rubric items under one criterion.

## 2. Official conventions, measured

### 2.1 Sources studied

The CFPC sample SAMP PDF has 7 cases. Four are in the new format: two MCQ cases (5 questions each) and two menu cases (2 questions each). Three are in the older write-in format (5, 3 and 4 questions). The sample oral has one case, with a stem, the examiner's script and a score sheet. See section 9 for every URL.

### 2.2 Stem length and structure

- **Length.** Write-in stems run 53 to 62 words of narrative, plus a vitals block. MCQ and menu stems run 61 to 162 words, including the vitals list and exam findings. Typical is about 60 to 100 words.
- **Opening.** Six of 7 stems open with age, sex and arrival, in the form "A [N]-year-old [man or woman or girl or boy] presents to (or is brought to) the emergency department ...". One stem opens "You are working in a community hospital emergency department."
- **Order.** Age and sex, then arrival and chief complaint. Then the history of the presenting illness with timing. Then the past history, medications, immunization and social details. Then "Vital signs:". Then examination findings. Some stems add a working impression ("You suspect ...") or treatment already started.
- **Ages** are hyphenated ("4-year-old", "23-month-old"). Numbers mix numerals and words ("two days", "30 seconds").
- **Vitals** come as a list, never as a sentence. The new-format cases use a bulleted list headed "Vital signs:". The older cases use "His vital signs are:" and a two-column table. Order is always temperature, pulse, respiration, BP, O2 saturation, weight.
- **Setting.** Candidates are told: "For each SAMP, the setting is an Emergency Department with tertiary-care capability, unless the setting is otherwise described." Stems name the setting only when it differs.
- **Updates between questions** sit at the start of the question text, in the same block, before the question sentence. They run 1 to 3 sentences (about 10 to 45 words). Several updates close off a branch by stating that a finding is normal. For example, an invented update: "The examination is unremarkable. Which of the following ...?"
- **Heading.** New-format samples head each case "Sample ... Case #N:" followed by the priority topic name on its own line. Older samples show only a case number.

### 2.3 Questions per case

- MCQ cases: 5 and 5. Menu cases: 2 and 2 (these may be excerpts). Write-in cases: 5, 3 and 4.
- Range 2 to 5. Typical 4 to 5. The CFPC family medicine SAMP page describes "usually three to five" questions per case.

### 2.4 Question phrasing templates

Verbatim generic instructions seen in the samples:

| Format | Template | Number styling |
|---|---|---|
| MCQ | "Which of the following ... ? Select one." | "one" in bold lowercase. Only the number word is bold. |
| Menu | "Which of the following ... ? Select two." or "Select three." | Number word in bold lowercase. |
| Menu with None | "Select one, or None if none are required." | "one" in bold lowercase. |
| Write-in | "What ... ? List THREE." | Number word in bold capitals. |
| Write-in, single fact | "... ? Give ONE answer." | "ONE" in bold capitals. |
| Detail request | "Include the drug and route." or "(include drug and dose)" before the instruction | Plain text. |

- All 12 MCQ and menu question sentences use "Which of the following". One sample MCQ omits "Select one." This looks like an editing slip.
- All 12 write-in questions are interrogatives ending in "?". Each is followed by a separate instruction sentence.
- Numbers are always written as words, never numerals.
- **Answer length.** Candidates are told "You can answer most questions in ten words or less." Answer fields are limited to 99 characters.
- **One answer per line.** "The corresponding number of answer fields will be provided. Write only one answer in each field. Subsequent answers in the same field will not be considered."
- **Detail.** Give doses, routes and procedure details "only if directed to do so". When a question ends with "Be Specific", give full detail, including dose and route.

### 2.5 Menu questions

- List lengths: 6, 8, 10 and 11 options (range 6 to 11).
- Ordering: 3 of 4 lists are strictly alphabetical. The fourth has one pair out of order. Paired doses of the same drug sit together, higher dose first.
- "None" appears in 1 of 4 menus. It is the last option, and the instruction then reads "Select one, or None if none are required."
- Options are numbered (1., 2., ...) in the PDF. Numbering is inconsistent between lists and looks like a word processor artifact.
- Options are short noun phrases of 1 to 6 words, with no final period.

### 2.6 Multiple choice

- Every MCQ has exactly 5 options (10 of 10).
- Ordering: 6 of 10 are alphabetical, with any "None" or "No ..." option placed last. 1 is in ascending numeric order (percentage ranges). 3 have one or two items out of order.
- A "None" or "No [action]" option appears in 5 of 10, always last.
- Options are parallel in grammar and similar in length. They are phrases without final periods. Dose options give drug, dose, unit and route ("[drug] 2 mg IV").
- The first option is numbered "1." in most MCQs. Later options are unnumbered in the PDF.

### 2.7 Units, labs and vitals

- Vitals format, new samples: "Temperature: 38.2°C rectal", "Pulse: 96/minute", "Resp.: 20/minute", "BP: 118/72 mmHg", "O2 sat: 97% on room air", "Weight: 24 kg". These values are invented. Only the labels and units follow the sample.
- The temperature route (oral or rectal) is given in 4 of 6 vitals blocks.
- Units: SI only. "When providing values or measures only Systeme Internationale (SI) units will be accepted."
- Doses: a space between number and unit ("300 mg"). A space separates thousands ("12 000 U"). Weight based dosing is shown as "Units/kg" or "mg/kg".
- No laboratory values appear in any sample stem. So there is no sample of lab formatting or reference ranges in stems. The exam interface supplies "A table of normal laboratory values" and "A basic calculator".

### 2.8 Abbreviations

- Left unexplained in stems and options: BP, O2 sat, IV, PO, PR, IM/IN, CT, MRI, Xray, ECG, PE, PV, IV drugs, G1T0, BID, MSK, POCUS.
- The samples use "Pulse" and "Resp." rather than HR and RR, and "O2 sat" rather than SpO2.
- Candidate instruction: "Avoid abbreviations which are not commonly used, and which may not be clear to an examiner."
- Drug names: "When listing medications, the use of generic names or trade names will be accepted." Stems and options use generic names in lower case. One sample key shows a trade name in brackets after the generic name.

### 2.9 Answer key and scoring conventions

- The required count is set per question. In write-in samples: ONE 5 times, TWO 2 times, THREE 4 times, FOUR once.
- Only the first N answers count: "if asked to provide three responses and five are submitted, only the first three will be scored." Also: "No credit will be given for responses which exceed the number of requested responses."
- Write-in keys often list more acceptable answers than required (for example 5 acceptable for FOUR asked). Alternatives within one item are separated by " / ".
- Keys can name a rejected answer inline ("Do not accept ..."). No public source describes negative marking or zeroing for dangerous answers on the SAMP. For the oral, the page says "There are no negative points for wrong answers."
- "If your answer to a question is "none", please type "none". Do not leave the answer box empty."
- **Spelling.** No public CFPC source states a spelling rule. Physician markers score answers against the key, so spelling tolerance appears to be a marker judgment.
- **Scoring approach.** Each candidate gets one aggregate SAMP score. The pass mark is set against a reference group of first-time Canadian EM residents. Blank answers score nothing, and partial answers can earn partial marks. Keys are set shortly before each sitting. In the new-format samples, the key is shown in bold. Menu keys match the "Select N" count.

### 2.10 Oral

- **Timing.** 2 minutes of reading, then 12 minutes of assessment, then 7 minutes of marking. There are four stations, each on a different topic with a different examiner.
- **Reading.** The examiner releases the written scenario and the candidate reads it out loud. The 12 minute clock starts after reading.
- **Stem format.** It opens "You are working in the emergency department of a community hospital when the following patient arrives." Then comes one or two sentences on age, sex, arrival and complaint (about 25 words). Then a labelled block: Temperature, Pulse, Respiration, Blood Pressure, O2 sat, Weight (kg with lbs in brackets), Prescribed medication, Allergies. The patient has no name.
- **Examiner prompts.** The candidate drives history, examination and investigations. The examiner answers requests and "releases" results. Scripted bold prompts appear at set time points (labelled Time 1 and Time 2 with clock times). Examples of the kind: ask for the differential, ask for management, then a scripted cutoff with new events and a request for the final plan and disposition. There are about 3 scripted prompts in 12 minutes.
- **Scoring.** The sample score sheet has four rows, each on a 0 to 10 scale: History, Physical exam and differential diagnosis, Management, and Overall process of care. Scoring points are tagged in the script. The candidate guide sums up what is assessed as "diagnostic approach, use and interpretation of data, and ability to reach an appropriate diagnosis and institute an appropriate, timely treatment plan." The preparation page says history matters most, and that many marks go to the facts gathered on the way to a diagnosis.
- **Notepad.** Electronic only. It is not scored.

### 2.11 Other CFPC style points

- Tone is neutral and clinical. Short declarative sentences. No names for patients in SAMPs or the oral.
- "You are working in ..." opens a stem only when the setting matters (1 of 7 SAMP stems, and the oral).
- Canadian spelling ("manoeuvre", "immunized"). "Emergency department" is written in full in SAMP stems. "ED" appears only in the candidate instructions.
- Generic drug names. Doses as number, space, unit, route ("4 mg IV"). Frequency abbreviations such as BID appear in keys.
- Key answers are terse, from 1 to about 8 words.

## 3. App measurements

| Measure | App value |
|---|---|
| SAMPs, questions | 525, 2040 |
| Question kinds | short 1502 (74%), single 455 (22%), menu 83 (4%) |
| SAMPs with no write-in question | 1 |
| Questions per SAMP | 3 to 5, median 4 (118 have 3, 349 have 4, 58 have 5) |
| Stem words | 25 to 146, median 72, p10 54, p90 91 |
| Stems opening "A/An N-year-old" | 443 of 525 |
| Hyphenated ages | 156 hyphenated, 321 not |
| Stems with a "Vital signs:" label | 68 (57 on their own line), all inline, none as a list |
| HR without unit, HR with /min | 359, 58 |
| BP without mmHg, BP with mmHg | 395, 111 |
| Temperature as "N C" without degree sign | 96 stems |
| Stems with no HR at all | 101 |
| Updates | 516 questions, 4 to 66 words, median 19 |
| Prompts already containing the instruction | 1820 of 2040 |
| Short prompts that start "List N" | 1106 |
| Short prompts in question form ("?") | 112 of 1502 |
| MCQ prompts using "Which of the following" | 30 of 455 |
| MCQ option counts | 4 options: 4, 5 options: 409, 6 options: 42 |
| 5-option MCQ keyed position 1 to 5 | 124, 186, 84, 15, 0 |
| MCQ keyed answer is the longest option | 311 of 455 |
| MCQ alphabetical | 28 of 455 |
| Menu lengths, select counts | 6 to 10 (median 8), select 1: 6, 2: 60, 3: 15, 4: 2 |
| Menu alphabetical | 1 of 83 |
| Menu with None | 6, all last, 3 keyed |
| Short `required` | 1: 230, 2: 605, 3: 631, 4: 36 |
| Short keys with a "none" item | 0 |
| Key display text over 10 words | 800 of 8299 items |
| "Include ..." detail wording | 11 or more variants |
| Thousands separators | 44 with a comma, 41 with a space |
| Stem abbreviations, most used | HR 425, BP 412, RR 363, GCS 76, ECG 72, IV 41, ED 25, EMS 21 |
| Oral stems | 98 to 187 words, 87 of 100 name the patient, 1 lists allergies |
| Oral case duration | 13 to 15 minutes (spec allows 12 to 15) |
| Oral rubric by criterion | plan 1127, data 121, approach 104, diagnosis 101 |

Samples read in full: s01 abdominal-pain-01 and abuse-domestic-06, s05 cva-04 and chest-pain-11, s09 ems-08 and environmental-08, s12 infectious-diseases-03 and ischemic-heart-disease-14, s17 sob-06 and suicide-risk-05. They show the patterns above. Stems are tight and plausible. Vitals are inline. Most short prompts are "List N" commands. MCQs keep the keyed answer early and longest. There is one menu with paired doses, which matches CFPC style.

Renderer facts, from `src/screens/SampParts.tsx`:

- `instruction()` builds "Select one.", "Select TWO[, or None if none are required]." or "List THREE.".
- `QuestionInput` and `MarkedQuestion` render `{q.prompt} <b>{instruction(q)}</b>`. That duplicates the text for 1820 prompts and bolds the whole instruction.
- The menu number word is in capitals. CFPC new-format samples use lowercase bold.
- Options render with a box or radio and no number.
- Short answer inputs have no `maxLength`.
- `SampStem` splits on blank lines into paragraphs. It cannot render a list.
- No candidate instructions, lab reference table or calculator is shown in practice or mock mode.

## 4. Gap table

Categories: (a) spec change for new writers. (b) mechanical fix to the existing 525 that a script can do. (c) fix needing judgment per SAMP. (d) app or engine change.

| # | Official convention | Current app | Change needed | Cat |
|---|---|---|---|---|
| 1 | From 2027 every case is MCQ or short menu. In 2026 up to 25% of cases are. | 74% write-in. Spec requires at least 60% write-in and 8 of 15 mostly write-in. | Rewrite the "Mix per topic" rule (section 7). Convert write-in questions with a single best answer to MCQ, and list questions to menus. Tag each SAMP with `format: "mcq" \| "writein"` so mocks can build a 2026 mix (75/25) or a 2027 mix (all MCQ and menu). | a, c, d |
| 2 | The instruction appears once, after the question. | 1820 prompts contain the instruction and the renderer appends it again. | Short term: in `SampParts.tsx`, add `stripInstruction(prompt)` that removes a trailing or leading "Select/List/Give N." before rendering. Long term: strip the instruction from data (551 trailing ones by script) and let the renderer own it. | d, b |
| 3 | Write-in questions are interrogatives ending "?" followed by "List N." | 1106 short prompts start "List N ...". Only 112 of 1502 are questions. | Rewrite into question form ("What investigations ...?"). A script can draft "List THREE X." as "What are X?", but each needs a read. | c |
| 4 | MCQ and menu options are alphabetical, with "None" or "No ..." last, or in numeric order. | 28 of 455 MCQs and 1 of 83 menus are alphabetical. Keyed answer is never 5th and is longest in 68%. | Script: sort options (alphabetical, with None/No last, numeric ascending when all start with a number, paired doses kept together higher first) and remap `correct`. Hand-check ordinal lists such as time windows. Rebalance option length where the key is longest. | b, c |
| 5 | Vitals are a labelled list, in the order Temperature (with route), Pulse /minute, Resp. /minute, BP mmHg, O2 sat % on room air, Weight kg. | Inline "HR, BP, RR, SpO2, T" with units missing in most stems. 101 stems have no HR. | Add an optional structured `vitals` field to `Samp` in `samp.ts`. Render it in `SampStem` as a list headed "Vital signs:". Extract the common inline pattern by script. Stems with partial or narrative vitals need a hand pass. | d, b, c |
| 6 | Number words: MCQ and menu use bold lowercase ("Select **two**."). Write-in uses bold capitals ("List **THREE**."). Only the number word is bold. | Menu uses capitals ("Select TWO"). The whole instruction is bold. | In `SampParts.tsx`, return parts, not a string. Render "Select " + `<b>{word.toLowerCase()}</b>` for single and menu, and "List " + `<b>{WORD}</b>` for short. Keep ", or None if none are required." in plain text. | d |
| 7 | MCQ stems read "Which of the following is/are ...? Select one." | 30 of 455 use it. 159 start "Which is/are". | Script: "Which is the" to "Which of the following is the". Hand-edit the rest (for example "What is ...? Select one."). | b, c |
| 8 | MCQs have exactly 5 options. | 409 have 5, 42 have 6, 4 have 4. | Add or drop one option in 46 questions. Tighten the validator to 5. | c, d |
| 9 | Menus have 6 to 11 options, "Which of the following [items] are most appropriate ...? Select two." | 6 to 10 options. 55 use "Which TWO of the following". Some are commands ("Select TWO appropriate ..."). | Rephrase to CFPC form. Keep lists at 6 to 12. | c, a |
| 10 | Stems use hyphenated ages. | 321 unhyphenated. | Script: turn "N year old", "N month old", "N week old" and "N day old" into the hyphenated form. | b |
| 11 | Temperature as "37.9°C". Spaces as thousands separators ("12 000"). | 96 stems use "N C". 44 numbers use comma separators. | Script both. Leave comma lists that are not numbers. | b |
| 12 | Pulse and respirations as "/minute", BP with "mmHg". | Bare numbers in most stems. | Script adds units in the inline pattern. Superseded by gap 5 if that ships. | b |
| 13 | One answer per field. Later answers in the same field are ignored. 99 character limit. | Any word in a line can match. A line with two answers can score on the second. No length limit. | In `markShort` (`samp.ts`), treat only the text before the first separator (comma, slash, " or ", " and ", semicolon) as the answer, unless a key phrase spans it. Add `maxLength={99}` to the input in `QuestionInput`. | d |
| 14 | Detail is given only if asked. "Include the drug and route." "Be Specific" means doses and routes. | 11 or more wordings of "Include ...". "Be specific" used twice. | Fix one wording set in the spec. Script the common variants to "Include the drug, dose and route." | a, b |
| 15 | "Type none" when the answer is none. Menus may offer "None". | No short key accepts "none". 6 menus offer None. | Spec: when the right answer can be "none", use a menu or MCQ with "None" last, or add a "None" key item. | a |
| 16 | No public source describes zeroing for dangerous answers. The oral has no negative marking. | A dangerous answer zeroes the whole question (142 short questions carry one). | Keep it as an app teaching choice. Say so in the marked view ("App rule, not a CFPC rule"). Limit `dangerous` to answers that would cause serious harm. | a, d |
| 17 | Human physician markers. Spelling is not addressed. | Exact word match. The candidate can override. | Add fuzzy word matching in `tokens`/`lineMatches` (edit distance 1 for words of 6 letters or more, 2 for 10 or more). Never apply it to drug names that differ by one letter from another drug. | d |
| 18 | The interface shows candidate instructions, a table of normal lab values and a calculator. | None in practice or mock. | Add an instructions panel at mock start and a Resources drawer with a lab reference table in SI units and a basic calculator. | d |
| 19 | Key answers are terse. Most answers fit in 10 words. | 800 key items over 10 words. | Shorten key display text. Move the reasoning into `explanation`. | c |
| 20 | Stem headings show the priority topic. There is no descriptive title. | Topic label plus a neutral descriptive title. | Optional. Show "Case N" and the topic in exam mode, and keep titles for browse mode only. | d |
| 21 | Abbreviations: common ones only. The samples use Pulse, Resp., O2 sat. | HR, RR and SpO2 in most stems. GCS, TBSA, JVP and VBG also appear. | Spec: prefer spelled-out labels in the vitals list. Allow standard abbreviations elsewhere. Keys must accept both the abbreviation and the full term. | a |
| 22 | Oral: an unnamed patient, about 25 words of narrative, then a labelled triage block with medications and allergies. | 98 to 187 words. 87 named patients. 1 lists allergies. | CASE_SPEC: an unnamed patient. Narrative of 2 to 4 sentences. A labelled block (Temperature, Pulse, Respiration, Blood Pressure, O2 sat, Weight, Prescribed medication, Allergies). Move resource detail out of the stem. | a, c |
| 23 | Oral: the candidate reads the stem aloud in 2 minutes of reading time. Then 12 minutes. | The app reads the stem aloud ("The examiner reads every line aloud"). There is no reading timer. Cases run 13 to 15 minutes. | In `Runner.tsx` station mode, add a 2 minute reading phase with the prompt "Read the scenario out loud". Keep TTS as an option. Set station cases to 12 minutes. | d |
| 24 | Oral scoring: four 0 to 10 scales (History, Physical and DDx, Management, Overall process of care). History matters most. | Four criteria taken from the guide sentence. 78% of rubric items sit under "plan". | Map `ORAL_CRITERIA` in `types.ts` to the four score sheet rows. Report each on 0 to 10. Rebalance rubrics toward history and examination. | d, c |
| 25 | Oral: the candidate drives. About 3 scripted examiner prompts at set times. | 6 to 10 timed examiner questions per case. | Allow "candidate asks" segments between fewer scripted prompts. This is a larger design change. | d, a |

## 5. Suggested order of work

1. Gap 2 (duplicate instruction) and gap 6 (number styling) in `SampParts.tsx`. These are small and visible on every question.
2. Gap 4 (option ordering) by script, with remapped keys and a vitest check that every `correct` still points at the same text.
3. Gaps 10, 11, 12 and 7 by script, in one pass with a diff report.
4. Gap 5 (structured vitals), then a script extraction.
5. Gap 1 (format mix). This is the largest content change. Start with new writing under the revised spec. Then convert existing write-in questions topic by topic.
6. Gaps 13, 17 and 18 in the engine and screens.
7. Oral gaps 22 to 25.

### Renderer change in detail (gaps 2 and 6)

File: `src/screens/SampParts.tsx`.

- Replace `instruction(q): string` with an `Instruction` component that returns JSX:
  - single: `Select <b>one</b>.`
  - menu: `Select <b>{word}</b>.` with `word` in lowercase, then `, or None if none are required.` in plain text when a None option exists
  - short: `List <b>{WORD}</b>.` in capitals
- Add `stripInstruction(prompt)`. It removes a trailing `(Select|List|Give) (one|...|six|ONE|...|SIX)( answer)?\.` and rewrites a leading `List N ` into plain text until the data is cleaned.
- In both `QuestionInput` and `MarkedQuestion`, render `{stripInstruction(q.prompt)} <Instruction q={q} />` in place of `{q.prompt} <b>{instruction(q)}</b>`.
- Keep a plain string version for any text-only use, such as speech or export.
- In the menu and single option lists, optionally prefix `{i + 1}.` before each option to match the numbered CFPC lists.
- In the short answer input, add `maxLength={99}`.

## 6. Invented illustrations

These are original, neutral examples of the target format. They are not drawn from any CFPC material.

Stem with vitals list:

> A 62-year-old woman presents to the emergency department with two hours of palpitations. She has hypothyroidism and takes levothyroxine.
>
> Vital signs:
> - Temperature: 36.9°C oral
> - Pulse: 142/minute
> - Resp.: 18/minute
> - BP: 128/80 mmHg
> - O2 sat: 98% on room air
> - Weight: 71 kg

MCQ: "Which of the following is the most appropriate next step? Select **one**." Then five options in alphabetical order, with a "No ..." option last if used.

Write-in: "What investigations should you order now? List **TWO**."

## 7. Format rules (ready to paste into SAMP_SPEC.md)

```
## Format rules

These rules follow the CFPC EM sample SAMPs, candidate instructions and SAMP tutorial. They cover format only.

### Case mix
- From 2027 every CFPC SAMP case is multiple choice or short menu. In 2026 up to 25 percent are.
- Each SAMP has `format`: "mcq" (only single and menu questions) or "writein" (only short questions).
- Per topic of 15: at least 11 "mcq" SAMPs and at most 4 "writein" SAMPs.
- Do not mix write-in and MCQ questions in one SAMP.

### Stem
- 50 to 150 words, including the vitals list.
- Open with "A [N]-year-old [man, woman, boy or girl] presents to (or is brought to) the emergency department ...". Hyphenate ages.
- Use "You are working in ..." only when the setting is not a tertiary care ED, for example a rural or community hospital.
- Order: age and sex, arrival and complaint, history of present illness, past history and medications, vitals, examination.
- Put vitals in the `vitals` field, never in the stem text. Order: Temperature (°C and route), Pulse (/minute), Resp. (/minute), BP (mmHg), O2 sat (% on room air or on the oxygen given), Weight (kg).
- Do not name the patient.
- SI units only. A space between the number and the unit. A space as the thousands separator (12 000).
- Generic drug names in lower case.

### Updates
- Put new information in `update`, one to three sentences, 10 to 45 words.
- Close off branches plainly ("The examination is otherwise normal.").

### Questions
- 3 to 5 questions per SAMP. Typical is 4 to 5.
- Do not write the instruction in `prompt`. The app adds "Select one.", "Select two." or "List THREE." from the question kind and count.
- single: "Which of the following ...?" Exactly 5 options. One correct.
- menu: "Which of the following ... are most appropriate ...?" 6 to 12 options. `select` 1 to 4. Pair doses of the same drug next to each other, higher dose first.
- short: a question ending in "?", such as "What ...?" or "How ...?". Never a command such as "List ...". `required` 1 to 4.
- Ask for detail only when the key needs it. Use exactly one of: "Include the drug, dose and route." "Include the dose." "Be specific."

### Options
- Order options alphabetically. Put "None" or a "No [action]" option last. Use ascending order when every option is a number or a range.
- Options are short parallel phrases, 1 to 10 words, with no final period.
- Keep option lengths similar. The keyed option must not be the longest more often than chance.
- Dose options give drug, dose, unit and route ("[drug] 2 mg IV").
- Use "None" as a menu option only with the instruction "Select one, or None if none are required." It must be the last option.

### Keys
- Key display text is 1 to 8 words. It answers in ten words or less. Reasoning goes in `explanation`.
- List more acceptable answers than `required` whenever several are valid.
- When "none" can be correct, use a menu with "None" or add a "None" key item.
- Accept common abbreviations and full terms. Accept generic and trade names.
- `dangerous: true` only for an answer that would cause serious harm. This zeroing is an app rule, not a published CFPC rule.

### Abbreviations
- Allowed without expansion: BP, IV, IM, PO, PR, SC, CT, MRI, ECG, CBC, INR, ICU, EMS, POCUS, GCS, COPD, ASA.
- Spell out anything a Canadian emergency physician would not read at a glance.
```

## 8. Reviewer checks (for SAMP_REVIEW_BRIEF.md)

```
## Format checks

1. The prompt does not contain "Select N" or "List N". The app adds it.
2. Short prompts are questions ending in "?", not commands.
3. MCQ prompts use "Which of the following". There are exactly 5 options.
4. Options are alphabetical, with None or "No ..." last, or in numeric order. After any reorder, `correct` points at the right text.
5. The keyed option is not visibly longer or more detailed than the distractors.
6. Vitals are in the `vitals` field, in CFPC order, with units: °C and route, /minute, mmHg, % on room air, kg.
7. Ages are hyphenated. SI units. Spaces as thousands separators. The patient is not named.
8. Key text is 8 words or less. Every key accepts the common abbreviation and the full term.
9. The "Include ..." wording is one of the three allowed forms, and the key enforces what it asks for.
10. `dangerous` is used only for answers that would cause serious harm.
```

## 9. Sources

Primary page: [Preparing for the Examination of Added Competence in Emergency Medicine](https://www.cfpc.ca/en/education-professional-development/examinations-and-certification/examination-of-added-competence-in-emergency-medic/preparing-for-the-examination-of-added-competence). Fetched live (HTTP 200). Every linked resource was followed. `pdftotext` is not installed in this container, so PDFs were read with pdfminer, with font and position output to see bold, numbering and layout.

| URL | Status | What was taken (format only) |
|---|---|---|
| https://www.cfpc.ca/en/education-professional-development/examinations-and-certification/examination-of-added-competence-in-emergency-medic/preparing-for-the-examination-of-added-competence | 200 | The 2026 and 2027 move to MCQ and short menu. Candidate instructions: tertiary care setting, ten words or less, one answer per field, first N scored, generic or trade names, SI only, uncommon abbreviations, type "none", "Be Specific". Oral timing, examiner role, marks weighted to process, no negative points. SAMP timing. |
| https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Sample-Samps-English.pdf | 200 | Stem length and order, vitals list format, question templates, bold number words, option counts, ordering and None placement, update style, key styling. Seven cases measured. |
| https://www.cfpc.ca/uploadedFiles/Education/EM%20Sample%20Samps%20English.pdf | 200 | The same file as above (identical size). No new data. |
| https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Sample-Oral.pdf | 200 | Oral introduction, stem card layout, examiner script structure with timed prompts, four row 0 to 10 score sheet. |
| https://www.cfpc.ca/en/Resources/Examinations/SAMP-Software-Tutorial | 200, redirects by script to the PDF below | None directly. |
| https://www.cfpc.ca/CFPC/media/Resources/Examinations/Examination-of-Added-Competence-in-Emergency-Medicine-SAMP-Tutorial.pdf | 200 | Interface layout (case on the left, questions on the right), 99 character fields, the same candidate instructions, normal lab values table, calculator, flagging, 255 minute section. |
| https://www.cfpc.ca/en/Resources/Examinations/Candidate-Guide-to-the-Examination-of-Added-Compet | 200, redirects by script to the PDF below | None directly. |
| https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Exam-Candidate-Guide-EN.pdf | 200 | "Short/select answer management problems". MCQ and short menu transition. 4 hour window. What the oral assesses. Physician markers. Committee sets keys. |
| https://www.cfpc.ca/en/examination-of-added-competence-in-emergency-medicine-structured-orals-candidate-guide | 200, redirects by script to the PDF below | Found by search. Linked from the FAQ, not from the primary page. |
| https://www.cfpc.ca/CFPC/media/Resources/Examinations/EM-Structured-Orals-Candidate-Guide.pdf | 200 | Oral phases: 2 minute reading aloud, 12 minute assessment, 7 minute marking. Examiner releases resources. |
| https://www.cfpc.ca/en/education-professional-development/examinations-and-certification/examination-of-added-competence-in-emergency-medic/faqs | 200 | Aggregate scoring and reference group pass mark. Partial credit. Answer the question asked. Keys set near the sitting. Not linked from the primary page. Found by search. |
| https://www.cfpc.ca/CFPC/media/Resources/Education/EM_KF-2017_Final_ENG.pdf | 200 | 35 priority topics and key features. Used only to confirm the topic heading style. The app already maps to it. |
| https://www.cfpc.ca/CFPC/media/Resources/Education/What-to-Expect-Registration.pdf | 200 | Test centre check-in only. No format content. |
| https://www.cfpc.ca/en/Resources/Education/Registration-What-To-Expect | 200 | Page wrapper for the same content. No format content. |
| https://www.youtube.com/embed/Hmwj6jJhjJU ("EM Exam Video - English", CFPC) | 200 (title via oEmbed) | Sample structured oral video. There is no transcript in this environment, so the content was not reviewed. |
| https://www.youtube.com/watch?v=oaAZMIjLYAQ ("Short Answer Management Problems Video Demonstration", CFPC) | 429 Too Many Requests on the page. Title via oEmbed 200. | Not reviewed. The tutorial PDF covers the same interface. |
| https://vimeo.com/429346554 ("ProProctor: What to Expect on Test Day") | 200 | Proctoring logistics only. No format content. |
| https://www.prometric.com/test-takers/what-expect | 403 Forbidden | Unreachable. Logistics only, per the link text. |
| https://caep.ca/wp-content/uploads/2019/08/recommendations_for_the_use_of_pointofcare_ultrasound_pocus_by_emergency_physicians_in_canada.pdf | 404 Not Found | Unreachable. Content scope (POCUS), not format. |
| https://www.cfpc.ca/en/member-services/library-services | 200 | Library service. No format content. |
| https://www.cfpc.ca/en/education-professional-development/cpd-events-calendar | 200 | CPD calendar. No format content. |
| https://fmf.cfpc.ca/ | 200 | Conference. No format content. |
| https://caep.ca/cpd-courses/ | 200 | Courses. No format content. |
| https://srpc.ca/event-4934485 | 404 Not Found | Unreachable. Conference listing. |
| https://canadianheart.ca/virtual-acls-program/ | 200 | Course. No format content. |
| http://www.facs.org/trauma/atls/index.html | 404 Not Found | Unreachable. Course. |
| https://trekk.ca | 200 | Clinical resource. No format content. |
| https://www.annemergmed.com/ | 403 Forbidden | Unreachable. Journal. |
| https://caep.ca/resources/cjem/ | 404 Not Found | Unreachable. Journal. |
| https://caep.ca/ | 200 | Society home. No format content. |
| http://www.acep.org/ | 403 Forbidden | Unreachable. Society home. |
| https://www.wolterskluwer.com/en/solutions/uptodate | 403 Forbidden | Unreachable. Clinical resource. |
| https://www.cfpc.ca/CFPC/media/Resources/Education/Sample-SAMPs.pdf | Seen in search results only. Not studied. | Family medicine SAMPs, a different exam. The search snippet gave "usually three to five" questions per case and one to five answers per question, from the family medicine SAMP page. |
| https://www.cfpc.ca/en/education-professional-development/examinations-and-certification/certification-examination-in-family-medicine/preparing-for-the-certification-examination-in-fam | Search result snippet | The same questions per case wording, for context only. |

Book and course links on the primary page (textbooks, ACLS, PALS, ATLS manuals) are content resources and were not studied for format.
