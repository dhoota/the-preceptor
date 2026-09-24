# SAMP review, batch s53 (Toxicology), Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Files in scope: src/samps/s53/tox.ts (tox-16 to tox-47), src/samps/s53/review-extra.ts (tox-48, tox-49), src/samps/s53/index.ts. Every SAMP was read on its own against its stem, one by one, without relying on the Lens A report. Every SAMP stays reviewed: false. Gates green after the edits: tsc clean for samps/s53, and SAMP_BATCH=s53 vitest 743 passed.

Two defects that the Lens A report lists as fixed were still present in the code when I read it: the tox-48 q1 key and the invented lactate in tox-49 q2. Both are in review-extra.ts, which the test gates do not cover. I fixed both. Treat the Lens A report's claims about review-extra.ts as unverified.

## Method

Everything numeric was recomputed with scripts, not by eye, in the scratchpad:

- A renderer that prints every SAMP with its keyed options marked, so keys were read against their own explanations.
- A format checker that applies the SAMP_SPEC gates (option count, order, length, spread, key parity, prompt shape, explanation length, source ids, select versus correct length, key position spread) to review-extra.ts as well, which the vitest run skips because the extras are not exported.
- A numeric scan that lists every number in each explanation that appears nowhere in that SAMP's stem, vitals, update, prompt or options. After the fixes below, every remaining hit is a value derived in the explanation itself (an anion gap, an osmolal gap, an SI conversion or a dose calculation), not an invented finding.
- Hand recomputation of every gap, conversion, threshold and weight based dose (below).

## Recomputation, all confirmed

| SAMP | Quantity | Recomputed | As written |
| --- | --- | --- | --- |
| tox-18 | anion gap 137 - 99 - 5 | 33 mmol/L | 33 mmol/L |
| tox-18 | EXTRIP metformin criteria | pH 6.96 is 7.0 or less, lactate 22 is above 20 | both named correctly |
| tox-19 | valproate 6800 umol/L, MW 144.21 | 981 mg/L | about 980 mg/L |
| tox-19 | EXTRIP suggested threshold 900 mg/L | 6241 umol/L | about 6250 umol/L |
| tox-19 | levocarnitine 100 mg/kg, 72 kg | 7.2 g, capped at 6 g | 6 g given, cap stated |
| tox-20 | carbamazepine 165 and 220 umol/L, MW 236.27 | 39.0 and 52.0 mg/L | about 39 and 52 mg/L |
| tox-21 | calculated osmolality 2(141) + 6.4 + 5.0 | 293.4 mmol/kg, gap 46.6 | 293.4, about 47 |
| tox-21 | anion gap 141 - 101 - 8 | 32 mmol/L | 32 mmol/L |
| tox-22 | calculated osmolality 2(140) + 5.1 + 4.2 | 289.3 mmol/kg, gap 62.7 | 289.3, about 63 |
| tox-35 | lidocaine 1% 40 mL | 400 mg, 7.69 mg/kg at 52 kg | 400 mg, about 7.7 mg/kg |
| tox-35 | epinephrine 1 mcg/kg at 52 kg | 52 mcg | close to 50 mcg |
| tox-41 | PCC for INR 7.4 | 3 000 units, single dose maximum | as written |
| tox-42 | calculated osmolality 2(118) + 6.2 + 3.6 | 245.8 mmol/kg, 2.2 below measured | 245.8, about 2 |
| tox-45 | 2 x 500 mg every 4 hours | 6 g per day, 97 mg/kg at 62 kg | 6 g each day |
| tox-45 | acetaminophen 90 umol/L, MW 151.16 | 13.6 mg/L, low | called low, nomogram correctly excluded |
| tox-46 | methadone 90 mg after 4 missed doses | 50% is 45 mg, above the 30 to 40 mg floor | 45 mg |
| tox-16 | bicarbonate 100 mmol at 64 kg | 1.56 mmol/kg | about 1.5 mmol/kg |

Timelines also agree in every SAMP. The ones worth naming: tox-16 (ingestion at 2 hours, seizure at 6 hours after arrival), tox-17 (paramedic dextrose, then the fall to 3.1 mmol/L at 3 hours on the ward), tox-26 and tox-48 (2 hours of gel after a 2 hour old splash), tox-34 (symptoms at 10 hours post meal plus 14 hours of symptoms, so the multiple dose charcoal sentence correctly says 24 hours), tox-43 (rupture at 6 hours into irrigation), tox-45 (3 days of dosing, 2 days of symptoms).

EXTRIP thresholds were checked against the cited workgroup papers for metformin (tox-18), valproate (tox-19), carbamazepine (tox-20) and methanol (tox-21). Each explanation names the criteria its stem actually meets, and each distinguishes recommended from suggested correctly.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
| --- | --- | --- | --- | --- |
| tox-48 | q1 | correct | Key was index 0 (magnesium sulfate soaks) while the explanation names topical calcium gluconate gel as the treatment and calls magnesium soaks not established. Key set to index 3. | high |
| tox-49 | q2 | explanation | Closing sentence cited "the serum lactate of 7.8 mmol/L seen on the first blood gas". The case has no lactate and no blood gas, and a lactate would not confirm muscarinic blockade. Sentence removed. | high |
| tox-22 | stem, q1 | stem, explanation | The prompt says "normal anion gap" but the stem numbers gave 140 - 103 - 23, which is 14 mmol/L, at the top of the reference range and not plainly normal. Chloride changed to 107 mmol/L so the gap is 10 mmol/L, and the arithmetic in the explanation was updated to match. | medium |
| tox-22 | vitals | vitals | No weight although q3 offers "Fomepizole 15 mg/kg IV". Weight 74 kg added. | medium |
| tox-21 | vitals | vitals | No weight although q2 keys "fomepizole 15 mg/kg IV" and the q4 explanation gives folic acid as 2 mg/kg to a maximum of 100 mg. Weight 82 kg added. Neither dose statement changes. | medium |
| tox-43 | q1, q4 | source | The sources were crossed. q1 (whole bowel irrigation) cited the body packing review and q4 (laparotomy for a ruptured packet) cited the whole bowel irrigation position paper, which does not support surgical removal. Sources swapped so each claim traces to the work that carries it. Both listed sources stay cited. | medium |
| tox-43 | q2 | explanation | The explanation endorsed "the airline route" as worth asking about, then rejected the flight number and route option. Endorsement trimmed to the officers and the seized samples. | medium |
| tox-37 | q3 | explanation | "he is afebrile at 37.3°C with no rigidity" added a finding the case never gave, since tone is not described. Trimmed to the temperature. | low |
| tox-49 | q3 | explanation | Same invented "no rigidity" claim as tox-37 q3. Trimmed. | low |
| tox-18 | q1 | keyFeature | Mapped to tox key feature 7 (order tests that change management) but the question asks the cause of a raised anion gap and orders no test. Remapped to key feature 3 (unexpected labs and gaps). | medium |
| tox-20 | q2 | keyFeature | Same mismatch. "Best explains her serum sodium of 128 mmol/L" is lab interpretation, not test selection. Remapped to key feature 3. | medium |
| tox-23 | q3 | keyFeature | Same mismatch, and the distractors are co-ingestion options (insulin, sulfonylurea), which is exactly key feature 3. Remapped from 7 to 3. | medium |
| tox-19 | q2 | explanation | "6 250 umol/L" used a thousands space in the same sentence as "6800 umol/L" from the stem. Made consistent. | low |
| review-extra.ts | file | header | Missing the required DRAFT first line that every batch file carries. Added. | low |

## Key changes

- tox-48 q1: key changed from index 0 ("Magnesium sulfate soaks") to index 3 ("Topical calcium gluconate gel"). Reason: the explanation identifies calcium gluconate gel as the treatment and rejects magnesium soaks, so the key contradicted its own explanation. The explanation needed no change. This SAMP is reviewed: false and sits in review-extra.ts.

No other key was changed. No keyed option is described as wrong anywhere in the batch after the edits.

## Checks that found nothing

These were run over all 34 SAMPs, extras included, and came back clean, so they are recorded rather than listed as fixes:

- Option counts, alphabetical or numeric order, None last, 60 character ceiling, no final period, no absolute words, no cross references. Clean, including the two extras that the vitest gates skip.
- Option length spread and key parity. No single question exceeds 2.1, no menu exceeds 2.6, no key exceeds 1.5 times the mean distractor.
- Key position across the 123 single questions: 23, 27, 29, 26, 18 across positions one to five. Every position used, none above 25 percent.
- Prompt shape and length, explanation length (every one is well past 200 characters), stem word counts, hyphenated ages, no patient names, no blood pressure in stem text, vitals field formats.
- Menu select counts against the number of keyed indexes, including the two None menus (tox-25 q2 and tox-33 q3), which are correctly built as menus with None last and only that index keyed.
- Weight present wherever a dose depends on it. After the two additions above, every weight based dose in the batch has a weight: tox-16, tox-19, tox-23, tox-24, tox-28, tox-31, tox-35, tox-36, tox-40, tox-44, tox-47 all carry one already.
- Counts stated in explanations against the stem ("four missed doses", "up to 60 tablets", "8 mg of lorazepam over 2 hours", "three days without sleep"). All exact.

## Overlap with committed batches

I grepped the whole bank and read the neighbouring SAMPs rather than trusting the duplicate stem gate, which measures trigram overlap only. s32 (decreased LOC) and s49 (seizures) both carry toxicology cases, and several are close.

- tox-28 and s32 loc-42. Both open "You are working in a rural hospital emergency department", both are a man found in a farm barn beside an insecticide container 40 minutes ago, both have drooling, vomiting, 1 mm pupils, fasciculations, crackles, bradycardia and a saturation in the 80s on a non rebreather. Both then key skin decontamination with staff protection and atropine doubled to a dry chest. This is the same case written twice. Flagged high. Recommend the physician rewrite tox-28's scenario, or drop it.
- tox-39 and s32 loc-44. Both are a young adult who collapsed at a night venue after a small bottle or capful of a clear liquid a stranger or friend gave them, both have bradycardia, mild hypothermia, mid sized reactive pupils and a glucose in the 5s, both teach the gamma hydroxybutyrate course and its abrupt recovery. The keys differ (loc-44 keys supportive care with an intact gag, tox-39 keys intubation at a deeper level), but the stem is a near twin. Flagged high.
- tox-21 and s32 loc-25. Both are methanol, and three of four questions match in kind: an osmolal gap as a five option calculation, fomepizole 15 mg/kg as the antidote, and the EXTRIP indications for dialysis. Flagged high. The two are not contradictory (loc-25 names pH 7.15 or lower and an anion gap above 24, tox-21 uses visual symptoms with pH 7.12), but a candidate meets the same three questions twice.
- tox-19 q1 and s32 loc-34 q3. Both key levocarnitine 100 mg/kg IV for valproate hyperammonemia, and both use rifaximin and naloxone as distractors. Flagged medium.
- tox-16 and s49 seizures-18 (16-year-old, 20 tablets of bupropion XL 300 mg). Same drug, same formulation, same Starr poison centre series as the source, and the same teaching point that monitoring runs to at least 24 hours, plus a shared QRS and bicarbonate thread. Flagged high. tox-16 q2 in particular repeats the s49 disposition question in different words.
- tox-27 and s32 loc-38 (carried out of a burning house). Both key hydroxocobalamin for smoke related cyanide with a high lactate and hypotension. Flagged medium.
- tox-38 and s32 loc-46 (an elderly long term lorazepam user, drowsy). loc-46 q1 keys monitored supportive care over flumazenil and explains the withdrawal seizure risk in a long term user. tox-38 q1 keys the same and q2 then spends a whole question on that same risk. Flagged medium.
- In batch: tox-48 repeats tox-26 and tox-49 repeats tox-37, stem for stem. They sit in review-extra.ts as candidates, so the duplicate stem gate never sees them. If either is promoted, its twin must go.

## Sources

Lens B does not re-verify citations, and I did not re-check the URLs that Lens A corrected. Two source problems are structural rather than bibliographic and are fixed above: the crossed sources in tox-43, and the tox-43 q2 explanation endorsing an option it rejects. Every question in the batch cites an id that exists in its SAMP's sources, and every listed source is cited by at least one question. Confirmed by script after the edits.

## Needs physician decision

1. tox-28 versus s32 loc-42. The barn organophosphate case exists twice in the bank with the same setting, the same interval, the same findings and the same two teaching points. A reviewer cannot fix this by editing an explanation. Rewrite or drop one.
2. tox-39 versus s32 loc-44, and tox-21 versus s32 loc-25, for the same reason at slightly lower severity.
3. tox-16 versus s49 seizures-18. The 24 hour monitoring teaching and the Starr series appear in both. If both stay, tox-16 q2 should test something else.
4. tox-26 and tox-48, tox-37 and tox-49. Keep one of each pair.
5. tox-35 q1 asks for the total milligram dose of lidocaine and is mapped to key feature 7 (order tests that change management). It is an arithmetic question, not a test selection question, and no tox key feature fits it well. I left the mapping alone rather than force it onto a feature it does not test. A physician may prefer to recast the question.
6. tox-45 q3 keys "Arterial pH below 7.30" while the stem reports a venous pH of 7.36. The explanation handles this openly and the option is hypothetical, so no edit was made, but the arterial versus venous switch inside one question is worth a physician's eye.

## Summary

Fixes by category:

- Key error: 1 (tox-48 q1, a key that contradicted its own explanation).
- Invented findings removed from explanations: 3 (tox-49 q2 lactate, tox-37 q3 and tox-49 q3 rigidity).
- Stem numbers or stem facts corrected so the question's own wording holds: 3 (tox-22 chloride and anion gap, tox-21 weight, tox-22 weight).
- Source and internal cross reference: 2 (tox-43 q1 and q4 sources swapped, tox-43 q2 endorsement trimmed).
- Key feature mapping: 3 (tox-18 q1, tox-20 q2, tox-23 q3, all 7 to 3).
- Notation and file header: 2 (tox-19 q2 thousands separator, review-extra.ts DRAFT line).

Total 14 fixes across 10 SAMPs.

Most serious errors:

1. tox-48 q1 keyed magnesium sulfate soaks while its explanation names topical calcium gluconate gel. A candidate answering correctly would be marked wrong, and the explanation shown afterwards would contradict the mark.
2. tox-49 q2 attributed a lactate of 7.8 mmol/L to a first blood gas that the case never reports, and used it to confirm a conclusion a lactate cannot confirm.
3. tox-28 and s32 loc-42 are the same case written twice, down to the setting and the 40 minute interval.
4. tox-22 called an anion gap of 14 mmol/L normal in its own prompt.
5. tox-43 cited the whole bowel irrigation position paper for a question keyed to emergency laparotomy.

SAMP ids where a defect was found: tox-18, tox-19, tox-20, tox-21, tox-22, tox-23, tox-37, tox-43, tox-48, tox-49. Overlap concerns, not edited here, touch tox-16, tox-19, tox-21, tox-26, tox-27, tox-28, tox-37, tox-38, tox-39, tox-48 and tox-49.

Every SAMP remains reviewed: false pending physician sign-off.
