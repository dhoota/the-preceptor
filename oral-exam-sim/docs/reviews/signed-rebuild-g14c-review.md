# Review of signed-duplicate rebuild g14c

Group: tox-09 in `src/samps/s18/tox.ts`. This is the second rebuild. The g13 rebuild failed because its q2 keyed a beta blocker for thyroid hormone excess (docs/reviews/signed-rebuild-g13-review.md).

Result: **tox-09 FIXED.** Wording and match phrases only. No keyed decision changed.

## Structure

- Same id, topic and 4 questions. Kinds are still short, short, menu, short. Key features are still tox 2, tox 4, tox 4, chest pain 1.
- `...META` is spread, then `version: 2` and `reviewed: false` follow it. META is `version: 1`, so the bump is correct.
- The id is in `src/samps/held-back/g14c.json` with cluster 17 named. It is not in `g13.json` in HEAD or in the working tree.
- `git diff HEAD -- src/samps/s18/tox.ts` touches only tox-09 and the `S` constants. `synthroid` was removed and is used nowhere else. `esc2023` had its citation text updated. `cdcYb`, `tortorella` and `gingras` were added. `goldfrank` and `aha` are still used by other SAMPs.

## D1 and the cluster 17 keeper

q4 is the one D1 repeat. It lists life-threatening causes of new ST depression with chest tightness, keyed to chest pain KF 1 ("first consider and quickly recognize lethal causes like ACS, PE, pneumothorax, and aortic dissection"). It meets the D1 wording test.

Landing rule 1: it does not echo the keeper. ischemic-heart-disease-06 keys cocaine treatment (benzodiazepine, ASA, nitroglycerin, no beta blocker), the mechanisms of cocaine ischemia, serial ECG and troponin, and a cocaine cessation discharge plan. It keys no differential of lethal causes. tox-09 q4 shares one idea with keeper q2, coronary vasospasm, but only as part of one differential item (ischemia), and the decision tested is different. The story shares no element with the keeper (no cocaine, no sympathomimetic, no party). Two surface numbers match by chance: a pulse of 128/minute and 1 mm ST depression. They are not a retelling, so they were left alone.

The other cluster 17 rebuild, chest-pain-11, is now a triage ACS pretest probability story with no toxin. The two rebuilds do not converge. "scombroid", "tuna" and "histamine fish" appear only in tox-09 and in environmental-30 (ciguatera, scombroid as a distractor).

## Rows

| SAMP | Q | Result | Notes |
|---|---|---|---|
| tox-09 | q1 | FIXED | Key is new to the bank. Every feature is in the CDC Yellow Book 2026 (onset 10 to 60 min, flushing like sunburn, peppery taste, "clustering of cases helps exclude the possibility of true fish allergy") or Gingras 2025 Table 1 and text (onset 30 min to 2 h vs within minutes, allergy to a regularly eaten food is uncommon). Fix: removed "onset" and "timing" from the onset item's match list, because they credited any line that mentioned onset, including "rapid onset", which argues for allergy. Added "30 min" and "later onset". |
| tox-09 | q2 | FIXED | H1 plus H2, required 2. Not keyed elsewhere for this reason (closest is cva-31 q3, H1 plus H2 for alteplase angioedema). Tortorella 2014 (opened, PMC4273511) gives both an H1 (diphenhydramine 25 to 100 mg in adults) and an H2, IV in severe cases, and keeps epinephrine and steroids for airway edema, hypotension and bronchospasm. The CDC wording is weaker: "typically H1-receptor antagonists, although H2-receptor antagonists also might provide some benefit". I judge requiring both acceptable because two sources advise both and a missed H2 costs half the marks, not the question, but it is flagged for the physician. Fixes: (1) the explanation now says the H1 is the mainstay and quotes the CDC's H2 wording, instead of presenting both as equally established. (2) Safety wording, see below. Match phrases checked against the scorer: "H1 and H2 blockers" on one line matches (words match in any order), and "no epinephrine, diphenhydramine IV" is not rejected because the negation applies. |
| tox-09 | q3 | PASS | Menu, select 2, keys cetirizine for 2 days and resuming fish. Gingras 2025 (Université Laval, opened, PMC12224635): "Though specific evidence is lacking, administering oral antihistamines (e.g., loratadine or cetirizine) for one to two days is a reasonable approach". That support is thin, but every competing option is clearly worse for this patient: autoinjector, fish avoidance, allergist, tuna IgE (the allergy pathway, contradicted by the cluster and by her frequent tuna meals), prednisone (Gingras: not indicated for mild cases) and montelukast (no role). So cetirizine is the single best second choice on the menu. One caution: in Gingras's own case, with no cluster, the patient was referred to an allergist and avoided salmon until testing. The cluster is what makes the allergy pathway wrong here, and the explanation says so. Not a repeat: anaphylaxis-33 q1 keys cetirizine for a skin-only milk reaction, a different decision. |
| tox-09 | q4 | FIXED | D1 repeat, valid, and does not echo the keeper (see above). ESC 2023 confirmed in the scratchpad text: section 3.4.2 (CT for PE and aortic dissection), Figure 15 (coronary spasm, allergic or hypersensitivity reactions, takotsubo and PE among MINOCA causes), section 12.1 (Type 2 MI from spasm or tachycardia). Tortorella supports histamine coronary vasoconstriction, arrhythmic risk, ST depression and apical hypokinesia. Fix: added match phrases "pe", "mi", "heart attack" and "ventricular fibrillation". "pe" and "mi" are used as match phrases elsewhere in the bank (for example chest-pain line 504). Tamponade is not in the accept list. It is a classic lethal chest pain cause but has no basis in this story, so it was not added. |

## The epinephrine ruling (q2)

The ruling is marked unacceptable, not dangerous. In the scorer, that line scores zero and the question is not zeroed. I judge keeping it acceptable, because the cluster makes allergy unlikely and both scombroid sources keep epinephrine for airway edema, bronchospasm or hypotension.

The original wording was not safe, and I changed it:

- The unacceptable text read "Epinephrine without airway swelling, bronchospasm or hypotension". As a general rule, that is wrong. The bank teaches that any two systems after a likely allergen are anaphylaxis (anaphylaxis KF 2, and the s23 anaphylaxis SAMPs). This patient has skin (flushing) and GI (loose stools) features. It now reads "Epinephrine for histamine fish poisoning without airway swelling, bronchospasm or hypotension".
- The explanation said epinephrine "would push up a heart rate that is already 128/minute while she has chest tightness". That is the reasoning the bank teaches against: anaphylaxis-21 keys epinephrine as safe with coronary disease and ST depression, and s23 states there is no absolute contraindication. The sentence was removed. The explanation now says that her husband's illness makes allergy unlikely, and that if hives, wheeze, stridor or a falling BP appeared, true anaphylaxis would be treated with epinephrine IM at once.

## Other checks

- Sources opened: CDC Yellow Book 2026 page (Ansdell), Tortorella 2014 (Crossref confirms title, authors and journal), Gingras 2025 (Crossref confirms, published 3 July 2025), ESC 2023 (scratchpad text). All say what is claimed.
- Numbers: no calculations. Doses match the sources (diphenhydramine 25 to 100 mg, cetirizine 10 mg daily for 1 to 2 days).
- Simcheck (my run) top hits: anaphylaxis-27 0.16 / 0.12, asthma-copd-13 0.14 / 0.16, sob-15 0.13 / 0.12, environmental-30 0.10 / 0.12, anaphylaxis-47 0.12 / 0.09. I read every card. None tells this story or keys these decisions. anaphylaxis-27 keys the fish allergy pathway, which tox-09 q3 rejects for a different reason.
- Cues: no hedged or longest-option cue in q3. The two keys are not the longest options. The title does not reveal the diagnosis.
- House style: no em or en dashes and no semicolons in tox-09 strings.
- Tests: `SAMP_BATCH=s18 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 270 passed. `npx tsc --noEmit -p .`: clean.
- Nothing committed.

## For the physician

- q2 requires both an H1 and an H2 for full marks. The CDC Yellow Book says only that an H2 "might provide some benefit". Tortorella and Gingras give both. Please confirm, or lower `required` to 1, which would be a re-key and need a new writer.
- q2 still marks epinephrine as unacceptable (a zero line, not a zeroed question) for histamine fish poisoning without airway, breathing or BP compromise. The wording now limits this to scombroid and states that true anaphylaxis gets epinephrine at once. Please confirm that you are comfortable with this, given that she has flushing and diarrhea (two systems) and chest tightness with a pulse of 128.
- q3 keys cetirizine for 2 days on one case report's "reasonable approach" with no specific evidence. It is the best option on the menu, not a strongly evidenced treatment.
- q4 is a D1 repeat. The product owner should add it to the D1 Covered SAMPs table in docs/DECISIONS.md.
- The cluster 17 direction (levothyroxine with propranolol) was replaced by a scombroid story, because the bank already keys that decision. Please confirm.
