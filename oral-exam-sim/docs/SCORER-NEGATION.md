# Scorer findings: negation and word order

All counts are for the committed bank at the reviewed branch head: 1,500 authored SAMPs, 1,430 released. Unreviewed drafts are excluded.

For Arjan. This is a limit of the scoring engine, not of any single SAMP. It has not been fixed. A fix is an engine change and needs your decision on how it should behave.

## What happens

`lineMatches` in `src/engine/samp.ts` treats a phrase as negated only when a negation word comes within three words before it. The negation words are no, not, avoid, withhold, hold, never, dont, doesnt, shouldnt, cant, wont, stop, discontinue, contraindicated and without. The same holds when "contraindicated", "avoided" or "withheld" follows it.

Comparative forms are not negation words: "rather than", "instead of", "over", "in place of", "versus" and "in preference to". So in "phenylephrine rather than epinephrine", "epinephrine" counts as a positive mention. If a question lists epinephrine as unacceptable, the line is marked unacceptable. If it lists it as dangerous, the whole question scores zero and the candidate cannot override it.

## How big it is

A probe (`docs/reviews/scorer-negation-probe.ts`) built, for every short-answer question in all 1,500 authored SAMPs, lines of the form "<an accepted answer> <connector> <an unacceptable answer>". It scored them with the real engine.

| Measure | Count |
|---|---|
| Short-answer questions in the bank | 1,502 |
| ...that have at least one unacceptable answer | 542 |
| Questions where a correct "X rather than Y" line is marked unacceptable | 542 (494 released) |
| Questions where it trips a dangerous flag and zeroes the whole question, with no override | 136 (127 released) |
| SAMPs affected | 363 (116 with the dangerous case) |
| Dangerous phrases a correct "X rather than Y" line trips | 550 of 550 |
| Unacceptable phrases a correct "X rather than Y" line trips | 1,698 of 1,698 |

Control: the same lines written with ", not", "and avoid" or "and no" flag in far fewer questions (32 in the first run).

**Worked example (arrhythmia-04 q4, clenbuterol overdose):** the key is phenylephrine or vasopressin, not a catecholamine. "Phenylephrine rather than epinephrine" is scored 0, because "epinephrine" counts as a positive mention of the drug the question rejects. While epinephrine was a dangerous item, that line zeroed the whole question with no override. The engine handles plain negation, but not comparatives.

## How much this matters in practice

The probe is a worst case. It shows where the trap exists, not how often candidates fall into it. It bites only when a candidate names the wrong option while rejecting it. Emergency physicians often write exactly that way ("ketamine over propofol", "CT instead of LP"), so it is likely to cost real candidates marks. Where the flag is unacceptable, the candidate can override it. Where it is dangerous, they cannot.

## Options for you

1. **Engine change.** Treat "rather than", "instead of", "in place of", "versus" and "over" as negating the phrase that follows them. This needs a regression run across the bank, because "over" also appears in doses and times ("over 30 minutes").
2. **Content change.** Per question, rewrite dangerous items so they match only positive orders ("give epinephrine 1 mg IV"). This is slow, and writers kept hitting word-order limits today.
3. **Candidate guidance.** Tell candidates in the app to write "not Y" rather than "rather than Y". This is cheap, but it puts the burden on them.
4. **Allow overrides on dangerous flags.** The candidate could then rescue a false zero, at the cost of making dangerous answers overridable.

Nothing here has been changed.

## Second finding: phrases that contain a negation word ignore where it sits

A phrase that contains a negation word ("avoid aggressive fluid", "no prednisone nebulized budesonide") matches whenever all its words appear anywhere in the line. The engine never checks what the negation applies to. So a line that rejects the key can score it.

A second probe (`docs/reviews/scorer-wordorder-probe.ts`) built, for every accepted phrase that contains a negation word, a wrong line that orders the thing itself and puts the negation word elsewhere. For "avoid aggressive fluid", that is "give aggressive fluid, avoid delay".

| Measure | Count |
|---|---|
| Accepted phrases in the bank | 33,008 |
| ...that contain a negation word | 1,640 |
| ...that the wrong line scores | 1,570 |
| Questions exposed | 286 (255 released) |
| SAMPs exposed | 235 |

A realistic example: in abdominal-pain-01 q3, "give aggressive fluid, avoid delay" earns the permissive-hypotension mark.

## Two examples from one SAMP (asthma-copd-01, rebuilt and withdrawn)

These show both problems in a single question (q4, steroid choice after a past steroid psychosis). The keyed answer is nebulized budesonide with an eosinophil count, not systemic prednisone.
- **A wrong answer gets full marks.** "No nebulized budesonide, just prednisone" with "Prednisone without checking eosinophils" scored 2 of 2. Both lines reject the key. They scored because the accepted phrases carry "no" and "without", so any order of the words matches.
- **A correct answer gets zero.** "Prednisone 40 mg instead of the 50 mg" was marked unacceptable. The phrase "prednisone 50" matched it, because "instead of" is not read as a negation and the words can come in any order.

Two writers and two reviewers could not fix both at once inside the SAMP. Every change moved the breakage elsewhere. asthma-copd-01 is back on its signed text.

## Third finding: numbers split by the tokeniser

Colons and commas inside numbers split them into separate words. For example, "1:10,000" becomes "1", "10" and "000". So "epinephrine 1:10,000" matches "Epinephrine 1:1,000 0.5 mg IM, repeat in 10 minutes", which is a correct answer, and zeroes it as dangerous. 14 match phrases in 8 questions contain such numbers.

## Recommendation

Taken together, the three findings touch about a third of all short-answer questions. They should be fixed in the scorer, not SAMP by SAMP:
- negation that covers comparatives;
- negation scope that follows word position, not just the presence of a negation word;
- number tokens kept whole.

This is a separate piece of work for Arjan to decide on. It needs a regression run over the whole bank.
