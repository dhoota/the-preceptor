# Q500 verification, round 4: s68, Gastrointestinal (GI) bleed

Fresh independent review by Preceptor of the round 4 revision of `src/samps/s68/gi-bleed.ts`, ids gi-bleed-48 to gi-bleed-52. This reviewer did not write, edit or review s68 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). Both lenses were applied to 51 and 52 in full and to 48 q4. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: the round 3 verdict `docs/reviews/q500-verify3-s68.md`, the writer report `docs/reviews/q500-writer-s68-r2.md` ("Round 4"), the diff against 3a9c52b, SAMP_SPEC, SAMP_REVIEW_BRIEF, REVIEW-RULES, DECISIONS (D1 at 19, frozen at 20), SCORING-RULINGS, the gi-bleed key feature list in `src/blueprint/priorityTopics.ts`, the gi-bleed and sob catalogues, and a grep of the whole bank (`src/samps`, `src/cases`).

Checks run: `SAMP_BATCH=s68 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 128 tests). The type check shows no s68 errors. A script over the file gave: stems 139, 142, 136, 150 and 114 words. Prompts 11 to 21 words. Updates 9 to 38 words. Single key positions (first to fifth) 4, 4, 3, 4, 4 of 19, so none above 25 percent (21 percent) and every position used. The key is the longest option in 4 of 19 singles (21 percent). Key to mean distractor length is at most 1.43. No em or en dashes, smart quotes or semicolons in any question.

The diff against 3a9c52b touches only 48 q4 (explanation), the 51 stem, 51 q3, 51 q4 (explanation), the 51 sources and 52 q3. gi-bleed-49 and gi-bleed-50 are unchanged.

## Verdicts

| Id | Verdict | Failing items |
|---|---|---|
| gi-bleed-48 | PASS | none |
| gi-bleed-49 | PASS (unchanged) | none |
| gi-bleed-50 | PASS (unchanged) | none |
| gi-bleed-51 | PASS | none |
| gi-bleed-52 | FAIL | q1 explanation gives away the new q3 key |

Questions: 20 (19 single, 1 menu). Pass 19. Fail 1 (52 q1, one clause of its explanation). Stems: 5 pass.

## Round 3 required fixes: were they applied?

| Round 3 fix | Applied | Comment |
|---|---|---|
| 51 stem to 150 words or fewer | Yes | 150 words. "for several minutes" and "into the sink" cut. Fat-soluble vitamins, skipped enzymes and vitamins, no iron, non-palpable spleen and the fever are all kept. |
| 51 q3 replace (no hemoglobin fall, no CXR, CTA chest or positioning, opened source) | Yes | New key "Old blood still passing through". Merck GI bleeding overview opened. See below. |
| 51 q4 replacement sentence | Yes | Word for word as asked. Now consistent with q1. |
| 52 q3 replace with a real key feature decision | Yes | New key "The bleeding had paused", KF2. Tarar opened. See below. |
| Ru 2019 misattribution | Gone | No artery figures remain anywhere in 52. |
| 48 q4 octreotide sentence supported by its source | Yes (coordinator change) | See below. |

## Per question

### gi-bleed-48 (Maroon stools on a valve waiting list): PASS

- Stem, q1, q2, q3 unchanged and PASS as in round 3.
- q4 PASS (KF6). The octreotide reason now reads "Octreotide does not remove the shear stress that causes her bleeding." Lourdusamy 2021 opened (PMC8464459): "Shear forces induce structural changes in the vWF while passing through the stenotic aortic valve", "proteolysis of high molecular weight multimers of vWF", and "octreotide/ desmopressin therapy are not found be of benefit". The new sentence is true and rests on the cited source. The transfusion claim from OCEAN, which Lourdusamy contradicts, is gone. Key unchanged and single.
- Advisory (low): the option reads "Somatostatin analogue injections" and the explanation now names only "Octreotide". The round 3 text linked the two ("Octreotide, a somatostatin analogue"). Optional: "Octreotide, a somatostatin analogue, does not remove the shear stress that causes her bleeding."

### gi-bleed-49 and gi-bleed-50: PASS

Unchanged since round 3 (no diff hunk). Round 3 PASS stands.

### gi-bleed-51 (Teenager who brought up blood): PASS

- Stem PASS. 150 words. Opening, order and vitals field are correct.
- q1 PASS (KF1), q2 PASS (KF4): unchanged, as round 3.
- q3 PASS (KF4).
  - Update: hemoptysis stops over 3 days, hemoglobin stays at 131 g/L, stools remain dark. Prompt 12 words, starts "Which of the following". Options alphabetical, parallel, ratio 1.35, key 1.27 times the mean distractor.
  - Source opened: Ansari P, Overview of gastrointestinal bleeding, Merck Manual Professional Version (full review June 2025, so 2025 is right). Its text: melena "may persist for several days after bleeding has ceased", and "100 to 200 mL of blood in the upper GI tract is required to cause melena". The page does not mention swallowed blood or hemoptysis.
  - Writer's flagged inference (melena persistence applied to swallowed blood): accepted. The Merck statement concerns blood already in the gut and does not depend on where the blood entered it. Blood swallowed from the airway is blood in the upper GI tract, and 51 q2 (Merck epistaxis page) already establishes that swallowed blood can cause melena. Three days sits inside "several days". The inference is stated as reasoning, which is fair.
  - Single key: yes. With hemoptysis stopped and a steady hemoglobin, ongoing lung bleeding has no support, varices have no support (no liver disease, no splenomegaly), small-bowel angiodysplasia has no clue in a 16-year-old, and a bleeding ulcer remains possible but less likely, as the explanation says, with the triggers that would change that (falling hemoglobin, vomiting without cough). The explanation does not call the key wrong.
  - KF4 tag honest: the item teaches not to chase a GI source for apparent melena that comes from a non-GI bleed.
  - Uniqueness: no key in the bank, the gi-bleed or sob catalogues for persisting melena or old blood. Not a hemoglobin fall, so clear of sob-39 q1 and gi-bleed-22 q1. Different decision from 51 q2 (cause of the first dark stool) and from the swallowed-blood keys in gi-bleed-11 and gi-bleed-39 (source of hematemesis).
  - Mock mode (B6): the update says the hemoptysis stops "but" the stools remain dark, and "Continued lung bleeding" is an option for dark stool. Together these hint that lung blood darkened the stool, which is the q2 key. The question cannot work without the fact that hemoptysis stopped, and the q3 options give equal weight to GI explanations (ulcer, varices, angiodysplasia), so under B6 this is left and flagged, not failed. Optional softening: "Over the next 3 days his hemoptysis stops. His hemoglobin stays at 131 g/L and his stools remain dark."
  - Advisory (low): "The Merck Manual notes that melena may persist for several days after bleeding has ceased, because blood already in the gut takes time to pass." The "because" clause is not in Merck. It is true physiology, but it reads as quoted. Optional: put it in its own sentence.
  - Advisory (low): the 51 q2 explanation sentence "a dark stool does not by itself mean a second, GI bleed" leads into q3. It does not state the persistence over days that q3 keys, so it is normal flow, not a giveaway.
- q4 PASS (KF1). The new sentence "Pancreatic insufficiency can add a vitamin K coagulopathy that makes a bleed heavier, but unlike varices it does not create a source of major upper GI bleeding" is true and agrees with q1. Key and options unchanged.

### gi-bleed-52 (Second bleed after normal scopes): FAIL

- Stem, q2, q4 PASS as in round 3.
- q3 PASS on its own (KF2).
  - Source opened: Tarar 2022 (PMC8796068). "Hemorrhage is usually intermittent, resulting in chronic anemia", "initial endoscopic evaluation can frequently be negative for active bleeding", and Table 4 (N = 123): bleeding detected at the ampulla in 57 (46%), no evidence of bleeding in 66 (54%). The explanation quotes these correctly.
  - KF2 tag honest: the decision is not to let a normal endoscopy rule out an upper source for maroon stools. That is the key feature's own wording ("do not assume it does not originate from an upper GI tract source").
  - Single key: yes. The colon and small bowel are excluded by blood at the papilla now and the normal colonoscopy. A new lesion is unlikely given the same pseudocyst and a similar episode 10 days ago. A blocked duct does not fit blood flowing from the papilla now. The writer was right to leave out "forward-viewing scope missed the papilla", which would also be defensible.
  - Ru 2019 misattribution and all artery figures are gone. The q4 update still says "arterial pseudoaneurysm".
  - Uniqueness: no key in the bank or catalogues for a normal endoscopy between episodes, intermittent bleeding or hemosuccus. gi-bleed-38 keys a side-viewing scope, not offered here.
  - Format: options parallel clauses, alphabetical, ratio 1.43. Key sits fifth, the batch stays balanced.
- q1 FAIL (low to medium, explanation gives away the q3 key in normal order).
  - Current q1 explanation: "Recurrent bleeding with abdominal pain in a man with chronic pancreatitis and a pseudocyst fits this pattern, and endoscopy is often normal between episodes."
  - Problem: in normal order the candidate reads this right after q1, and q3 then asks why his upper endoscopy 10 days ago was normal. The clause states the q3 answer. The writer flagged this as uncertain. Bank precedent treats an earlier explanation that gives away a later key as a failure (q500-verify-s56, pediatric-fever-49). The clause is not needed for q1, whose key rests on the pancreatitis and pseudocyst. It was harmless in round 3 only because no later question keyed it.
  - Required change: delete ", and endoscopy is often normal between episodes" so the sentence ends "fits this pattern." Change nothing else in q1. The first sentence ("intermittent bleeding from the major duodenal papilla") may stay, because it describes the disease and does not answer why the scope was normal.
- Mock mode (B6) for q3: the option "Pancreatic duct was blocked" names the pancreatic duct, which is the q2 key. The q2 update (fresh blood from the major papilla) already points there more strongly, so this adds no new cue. Accepted.

## Unrequested writer changes (rule 4)

- 48 q4: the OCEAN sentence was replaced by "Octreotide does not remove the shear stress that causes her bleeding." This was requested by the coordinator, not by round 3, which made it optional. Judged on its merits: true and supported by Lourdusamy. Accepted.
- 51 sources: `tintinalli` removed and `merck-gib` added. Every listed source is cited. Accepted.
- No other unrequested change found in the diff.

## Key feature coverage (passing questions only)

| KF | Passing questions |
|---|---|
| 1 | 48 q2, 48 q3, 49 q3 (menu), 50 q3, 51 q1, 51 q4 |
| 2 | 52 q2, 52 q3 |
| 3 | 49 q1, 49 q2, 50 q1 |
| 4 | 51 q2, 51 q3 |
| 5 | 48 q1, 50 q2 |
| 6 | 48 q4, 49 q4, 50 q4, 52 q4 |

Every key feature is covered by passing questions, even without 52 q1, and the batch has one passing `menu` (49 q3). The 52 q1 fix touches only an explanation clause, so coverage and key positions do not change.

## Sources verified this round

- Ansari P. Overview of gastrointestinal bleeding. Merck Manual Professional Version. https://www.merckmanuals.com/professional/gastrointestinal-disorders/gi-bleeding/overview-of-gi-bleeding (page read, full review June 2025, last updated November 2025).
- Tarar ZI et al. J Investig Med High Impact Case Rep. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8796068/ (page read, Table 4 and discussion quoted above).
- Lourdusamy D et al. World J Clin Cases. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8464459/ (page read, octreotide and shear stress sentences quoted above).

## Physician-level items (not grounds for failure)

1. Carried from round 3: 48 q1 KF5 tag, 48 q4 and 50 q4 KF6 tags, 49 q3 drug interaction under KF1, and the 52 q4 transfusion at 92 g/L.
2. 51 q3 rests on applying a general statement about persisting melena to swallowed blood. Accepted as reasoning.

## Summary

5 SAMPs, 20 questions (19 single, 1 menu). Pass: gi-bleed-48, 49, 50 and 51 in full, and 19 of 20 questions. Fail: gi-bleed-52, on one clause.

- 52 q1: the explanation clause "and endoscopy is often normal between episodes" gives away the new q3 key in normal order. Delete it. Nothing else changes.

Every round 3 required fix was applied correctly. The 51 stem is 150 words. The new 51 q3 ("Old blood still passing through") and 52 q3 ("The bleeding had paused") are accurate, sourced to pages this reviewer opened, single-keyed, honestly tagged and new to the bank. The Ru 2019 misattribution is gone, and the 48 q4 octreotide sentence now rests on its cited source. The s68 batch has not yet passed in full. Once the 52 q1 clause is deleted, a fresh review needs to confirm only that one edit.
