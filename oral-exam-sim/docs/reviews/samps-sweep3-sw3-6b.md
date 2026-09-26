# Sweep 3 partial rebuild, writer SW3-6B: environmental-17 q2 and q3

Batch s36. Only environmental-17 q2 and q3 were rewritten, with their sources. The story, q1, q4, the question count, the title and each keyFeature are unchanged. No other SAMP was touched. Nothing was committed. The SAMP stays `reviewed: false`.

Why: `samps-sweep3-review-sw3-6.md` found that q2 (carboxyhemoglobin because pulse oximetry misses CO) copied the signed CO cluster (loc-08, headache-12, tox-12, ems-07). It found that q3 (cool below 39°C before the air ambulance leaves) copied the signed "cool first, transport second" cluster (environmental-01, pediatric-fever-11, ems-14).

## New questions

| Q | keyFeature | Update | Prompt | Key | Distractors | Source |
|---|---|---|---|---|---|---|
| q2 | environmental 2 | BP falls to 86/48 mmHg, pulse 150/minute, lungs clear, first IV line just placed | Most appropriate management of his blood pressure | Continue cooling, crystalloid 1 L IV (position 1) | Continue cooling with 3 L over 1 hour. Continue cooling with norepinephrine. Pause cooling with 1 L. Pause cooling until BP recovers | Health Canada 2011 |
| q3 | environmental 1 | Cooling stopped at 38.6°C and he became oriented. 40 minutes later, when the air ambulance crew arrives, rectal temperature is 39.9°C and he is confused again | Most appropriate next step | Restart active cooling now (position 4) | Acetaminophen PR then recheck. Dantrolene. Recheck rectal temperature in 30 minutes. Tympanic temperature to confirm | Leckie 2026, BMJ Mil Health |

The decisions:
- **q2.** A hypotensive heat stroke patient keeps being cooled and gets a measured 1 L of crystalloid. He does not get a pause in cooling, a 3 L an hour infusion or a vasopressor before any fluid. This fits KF2 ("cool severe hyperthermia rapidly ... before confirming the cause"): hypotension is not a reason to stop cooling, and the fluid volume has its own limit.
- **q3.** Rebound hyperthermia after cooling stops is recognised, and cooling restarts at once. Antipyretics, dantrolene, a delayed recheck and a tympanic reading are all wrong. This fits KF1 ("suspect heat stroke in a confused, febrile patient exposed to heat and start cooling right away").

Key positions: q2 moved from position 2 to position 1. q3 stays at position 4. s36 single-key positions are now 14, 16, 11, 17 and 13 of 71, all at or below the cap of 17.

Version: HEAD has version 2. The uncommitted sweep 3 rebuild already set version 3. I left it at 3, because both changes land in one commit.

## Decision search

The search covered `scratchpad/allkeys.tsv` (every keyed answer) and `src/samps` (current text). Raw output is in `scratchpad/sw3-6b/search-q2.txt` and `search-q3.txt`.

| Q | Terms | Closest hits | Verdict |
|---|---|---|---|
| q2 | norepinephrine, vasopressor, pressor, crystalloid, 1 L, 3 L, fluid overload, pulmonary edema, pause cooling, interrupt, continue cooling, keep cooling. In src/samps, filtered to heat or cooling context | 1 L crystalloid keyed in anaphylaxis (anaphylaxis-15, 16, 17, 25, 34, 45) and DKA or hyponatremia (sob-08, shock-10). "Cautious bolus then vasopressor" keyed for RV failure (shock-09, dvt-pe-08). Cold IV fluid appears only as a cooling method in lists (pediatric-fever-11, environmental-04, delirium-agitation-03). No heat SAMP keys hypotension management, fluid volume or cooling through hypotension | New for this key feature and reason |
| q3 | rebound, recur, restart, resume, again, rising, rises again, recool, cooling again, tympanic, rectal, antipyretic, acetaminophen, dantrolene | "Rebound hyperthermia" appears only as a drowning ECMO complication list item (environmental-08, signed). Tympanic and rectal probe teaching is keyed as a list item (environmental-01 q3 and pediatric-fever-11 q2, signed) and appears here only as a distractor. Dantrolene is keyed for NMS (environmental-03). No SAMP keys a return of hyperthermia after cooling stops | New |

The reviewer's list of saturated heat stroke decisions was avoided: cooling method, benzodiazepines for shivering, stopping near 39°C, cooling with antibiotics, return to activity, cool before transport and CO testing.

## simcheck (final text)

`python3 scratchpad/simcheck.py scratchpad/sw3-6b/final-e17.txt environmental-17`. The full output is in `scratchpad/sw3-6b/simfinal-e17.txt`.

| Rank | Id | Full | Keys |
|---|---|---|---|
| 1 | environmental-38 | 0.15 | 0.06 |
| 2 | environmental-18 | 0.15 | 0.07 |
| 3 | pediatric-fever-11 (signed) | 0.13 | 0.11 |
| 4 | environmental-04 (signed) | 0.13 | 0.11 |
| 5 | multiple-trauma-34 | 0.12 | 0.04 |

I read all 15 cards. None keys hypotension management during cooling or rebound hyperthermia. environmental-01 (signed) is at 0.10/0.09, and its keys are the diagnostic criteria, immersion, monitoring and stopping at 39°C.

## Cueing check (mock mode)

- The new text never names stripping the blankets or cooling "now" (the q1 key). The q2 options say "Continue cooling" and the q3 update says cooling was stopped, so a candidate can tell that cooling happened. The earlier q2 prompt ("while he is being cooled") and q3 update ("After 15 minutes of cooling") did the same, and the reviewer accepted them. Two q1 distractors also cool him ("CT, then cooling" and "Lumbar puncture, then cooling"), so this does not single out the key.
- The q2 update says the first IV line has just been placed. A candidate can infer that no warmed saline bolus was given, which rules out one q1 distractor. It does not point to the key. I kept the line because the norepinephrine distractor is wrong only if he has had no fluid.
- q3 does not mention blood pressure or fluid, so it does not cue q2. q2 does not mention rebound, so it does not cue q3. q4 (the coworker) neither cues nor is cued by the new text.

## Sources

| Id | Citation | Checked |
|---|---|---|
| nata-ehi | Casa DJ and colleagues. NATA position statement: exertional heat illnesses. J Athl Train. 2015. doi:10.4085/1062-6050-50.9.07 | Unchanged. Still cited by q1 and q4 |
| hc-heat (new, Canadian) | Health Canada. Extreme heat events guidelines: technical guide for health care workers. Section 5.2.7. 2011. canada.ca | I opened the PDF, pages 55 to 59. It confirms: "the primary goal must be to cool quickly". The risk of organ damage and death rises with the time between core temperature elevation and cooling. Dehydration may be limited in heat stroke. Overzealous fluid may cause pulmonary edema. Brisk IV fluid at 3 to 4 L an hour can cause overload, pulmonary edema and heart failure. An average of 1 L (0.5 to 2.5 L) of crystalloid restores hydration. Shock is listed in the heat stroke MODS table. Oral and tympanic readings do not correlate well with core temperature. Antipyretics have not been shown to work. Dantrolene is not as effective as direct cooling |
| leckie-ehi (new) | Leckie T, Stourton F, Fitzpatrick D, and colleagues. Operationalising prehospital management of exertional heat illness in athletes and team sports. BMJ Mil Health. 2026. doi:10.1136/military-2025-003116 | I opened the full text (PMC13479197, open access). It confirms: "Rebound hyperthermia can occur after cooling, necessitating continued monitoring to prevent further tissue injury." And: "Cooling must proceed alongside resuscitation, prioritising hyperthermia resolution." |
| afzal-co | Removed. No question cites it any more |

Also read but not cited: the ACSM 2023 consensus and the Chinese 2020 expert consensus (PMC6956553). ACSM warns that vigorous IV fluid risks fluid overload, and that IV fluids can wait while the patient responds to cooling. The Chinese consensus prefers norepinephrine only when hypoperfusion persists after adequate fluid. Both agree with q2. The Canadian CFP 2024 review and CJEM 2025 "Just the facts" were checked. CFP covers prevention only, and the CJEM article is behind a paywall.

## Checks

- `SAMP_BATCH=s36 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 472 passed.
- `npx tsc --noEmit -p .`: clean.
- House style: no semicolons or dashes in the SAMP. The four explanations are 631, 838, 821 and 592 characters.

## For the physician

- **q2, 1 L versus more.** The key is 1 L of crystalloid with reassessment, for a 92 kg man at 86/48 mmHg after 7 hours of heavy work. Health Canada gives 1 L on average (0.5 to 2.5 L) and warns against 3 to 4 L an hour. Some clinicians would give a second litre sooner. The distractor is 3 L in one hour, which Health Canada names as the overload rate. Please confirm that the gap between the key and the distractor is clear enough.
- **q2, norepinephrine.** The distractor is wrong because no fluid has been given yet (the update says the line has just gone in). This is not a claim that vasopressors are contraindicated in heat stroke.
- **Health Canada 2011** is the current posted version of the technical guide. It is 15 years old. Its fluid numbers trace back to Bouchama's earlier work.
- **Rebound hyperthermia** is supported by a short 2026 BMJ Military Health consensus infographic statement. The UK Faculty of Pre-Hospital Care 2025 statement behind it is not open access, and I did not see it. The WMS 2024 heat guideline was also behind a paywall.
- **Mock mode.** The q2 and q3 text implies that cooling took place, as the earlier version did. It does not name the q1 key.
