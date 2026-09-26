# Review of signed duplicate rebuild, round 2, group r2m

Reviewer, independent of the writer. Nothing was edited or committed. Scope: pre-eclampsia-15 and pulmonary-edema-02. The writer reports pulmonary-edema-01 and -04 as "cannot". Their current text is failed round 1 text that is waiting to be restored, so it was not reviewed.

## Verdict

| Id | Verdict | Reason |
|---|---|---|
| pre-eclampsia-15 | **FAIL** | q3 gives full marks for the decisions dvt-pe-40 already keys, without the new UFH switch. It also fits dvt-pe KF 6, not pre-eclampsia KF 4. |
| pulmonary-edema-02 | **FAIL** | q2 repeats asthma-copd-02 q5 and q3 repeats ischemic-heart-disease-11 q2, which makes two D1 repeats. The writer claimed none. q4 gives full marks to generic answers and to pulmonary-edema-03 q3's keys, and its content is not sourced. |

D1 is at 19 of a frozen 20. pulmonary-edema-02 would need at least two repeats, so it cannot land as written.

## Diff scope

- I compared `git show HEAD:` with the working tree block by block.
- `src/samps/s15/pre-eclampsia.ts`: only pre-eclampsia-15 differs. The header adds the source constants `eular` and `tcPreg`, and nothing else in the header changed.
- `src/samps/s15/pulmonary-edema.ts`: only pulmonary-edema-01, -02 and -04 differ. The header adds `escAcs`, `hte`, `drew` and `ash`.
  - `hte` and `drew` are used only by the round 1 text of 01 and 04. They must be removed when those two are restored to HEAD, or the "never cited" check will fail.
  - `escAcs` and `ash` are used only by 02. The writer's "Files changed" section does not mention `escAcs`.
- Every other SAMP in both files is byte-identical to HEAD, and the SAMP order is unchanged. The q2 key-position rewording did not touch any other SAMP.
- `src/samps/held-back/r2m.json` lists all four ids. It is untracked.
- Structure of both SAMPs: the question count, kinds and keyFeatures are all preserved, with `reviewed: false` and `version: 2`. No em or en dashes and no semicolons in the new text.

## pre-eclampsia-15 (cluster 61, keeper first-trimester-bleeding-11)

**Story:** 31 weeks, class IV lupus nephritis, femoral DVT 3 weeks ago on twice daily dalteparin. Flare against superimposed pre-eclampsia. It has nothing in common with the keeper's molar pregnancy story.

**simcheck:** the top match is dvt-pe-40 at 0.12 full and 0.19 keys.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS (one wording fix for the writer) | **KF 2 fit:** good, because it evaluates suspected pre-eclampsia against its main alternative.<br>**Source:** EULAR 2017, which I opened in full on PMC5446003. It says pregnancy changes can resemble SLE signs, and that stopping HCQ raises the flare risk.<br>**Decision search:** no key names signs of lupus activity. pre-eclampsia-12 q4 lists "Lupus flare" only as a HELLP differential.<br>**Probe:** the keeper's answers score 0/3 and the standard pre-eclampsia symptoms score 0/3.<br>**Fix for the writer:** the match `missed` is too broad. "ask if she missed any appointments" earns `adhere`. Narrow it to "missed dose" or "missed her". |
| q2 | PASS | **KF 2 fit:** good.<br>**Source:** EULAR says, word for word, that "declining serum C3/C4 levels (even within the normal range) and/or increasing anti-double stranded DNA titres" separate an exacerbation from pre-eclampsia. It covers urine sediment with glomerular hematuria and casts. The ISSHP items are as claimed.<br>**Decision search:** complement, dsDNA and sediment are new for this decision. headache-43 q2 keys C3 to confirm post-streptococcal GN, which is a different decision. The liver and sFlt items repeat pre-eclampsia-01 q2 and pre-eclampsia-28 q1, but they give only 2 of the 3 required.<br>**Probe:** the keeper's answers score 0/3, the standard pre-eclampsia panel scores 1/3 and the repeated items score 2/3. |
| q3 | **FAIL** | See below. |

### Why q3 fails

The task asked two questions about q3: is the switch to IV UFH a fit for pre-eclampsia KF 4, and is it apart from dvt-pe-40?

**1. It is not apart from dvt-pe-40 as scored.**
- dvt-pe-40 is signed. Its keys are to withhold dalteparin (q1) and to wait 24 hours before neuraxial anesthesia (q2). Its q1 explanation restarts anticoagulation at 12 to 24 hours after delivery. It uses the same Thrombosis Canada guide.
- In markQuestion, the three dvt-pe-40 decisions score **3/3** without any mention of UFH:
  - "withhold dalteparin until after delivery / no neuraxial within 24 hours of last dose / restart LMWH 12 to 24 hours after delivery" scores 3/3.
  - "hold dalteparin / no epidural for 24 hours / resume after delivery" scores 3/3.
  - "stop dalteparin / tell anesthesia the time of the last dose / postpartum anticoagulation for 6 weeks after delivery" scores 3/3.
- The writer counted `restart` as fresh and reported that the repeats reach only 2 of 3. Restarting after delivery is part of dvt-pe-40's keyed answer, so that count is wrong.
- The one new decision is the UFH switch and stopping it 4 to 6 hours before delivery. The question does not require it.
- Fixing this means rebuilding the accept list and the required count, which the reviewer rules do not allow as an in-place fix.

**2. The KF fit is poor.**
- Pre-eclampsia KF 4 is "Begin BP control and seizure prophylaxis, monitor mother and fetus, and arrange urgent obstetric planning for delivery".
- The q3 update hands the candidate all of that: labetalol, magnesium, betamethasone and delivery in 48 hours.
- What the question then tests is choosing and timing anticoagulation around delivery. That is dvt-pe KF 6, the same KF as all three dvt-pe-40 questions.
- I am not sure a physician would file this under pre-eclampsia KF 4, and the rule is to fail when unsure.

**3. The key content is correct and sourced.** I read the Thrombosis Canada PDF myself.
- It says: "Women with a very high risk for recurrent VTE (e.g. proximal DVT or PE within 2-4 weeks) can be switched to therapeutic intravenous UFH, which is then discontinued 4-6 hours prior to the expected time of delivery or epidural insertion."
- It gives the last twice-daily dose 24 hours before, no neuraxial within 24 hours, a filter "may be considered" within 2 weeks, and a restart within 12 to 24 hours.
- Note that the guide says "can be switched", not "should be". The switch is an option, not a must.

**4. Scorer defects to fix in any rebuild:**
- `neur` matches bare "anesthesia", so "anesthesia consult" earns it.
- `restart` matches bare "after delivery".
- `stopufh` misses "discontinue 6 hours prior to delivery".
- The unacceptable list does not catch "switch to prophylactic dalteparin" or "SC heparin 5000 units". The second of these is dvt-pe-40's wrong option.

**5. Source registry.** `tc-preg-vte-2025` is the same Thrombosis Canada guide as the existing `tc-preg-tx` in src/samps/s33/dvt-pe.ts, which links PDF _51 where this one links _50. Reuse one id.

**What the writer should do:** re-key q3 on a decision that belongs to pre-eclampsia KF 4. Alternatively, make the UFH bridge required, for example as a single-best-answer question with dvt-pe-40's "withhold until after delivery" as a distractor, and get the physician to accept dvt-pe KF 6 content under pre-eclampsia KF 4. This needs a fresh review.

## pulmonary-edema-02 (cluster 67, keeper ischemic-heart-disease-12)

**Story:** a 77-year-old woman at a PCI centre with anterior STEMI and pulmonary edema, not in shock. She had HIT 6 weeks ago and an ischemic stroke 3 years ago.

**Convergence:**
- **ems-10:** no convergence. ems-10 is a VF arrest at a community hospital with transfer and a metoprolol question. This story has no transfer, no shock, no arrest and no beta blocker question.
- **Keeper ischemic-heart-disease-12:** no convergence in keyed decisions. The keeper keys the metoprolol contraindication in shock, culprit-only PCI and mortality predictors.
- **Stem echo:** the stem reuses the keeper's surface details, "4 mm of ST elevation in V1 to V5" and "crackles to the mid zones". Change these in any revision.
- **Other writers:** the in-progress s05 chest-pain rebuild uses a similar pattern (anterior STEMI at a PCI centre with a contraindication to a standard drug, there an ASA allergy). The drug and the decisions differ, so this is not the same story. It is flagged for the coordinator.

**simcheck:** the top match is ischemic-heart-disease-11 at 0.20 full and 0.18 keys. That SAMP turns out to hold a repeated decision, which is covered under q3.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS on key (wording fixes for the writer) | **Key:** bivalirudin for primary PCI after HIT.<br>**Decision search:** bivalirudin is keyed nowhere. dvt-pe-25 (argatroban for acute HIT) is a different decision.<br>**Source:** see "ASH sourcing" below. The key is correct in any HIT phase.<br>**Fix 1:** the explanation says "ASH advises a non-heparin anticoagulant rather than unfractionated heparin or LMWH after HIT". That is ASH's recommendation for VTE treatment or prophylaxis in remote HIT, not for PCI. Cite Recommendations 5.1 and 5.2 instead.<br>**Fix 2:** change the stem echo described above. |
| q2 | **FAIL** | D1 repeat of asthma-copd-02 q5. See below. |
| q3 | **FAIL** | D1 repeat of ischemic-heart-disease-11 q2. See below. |
| q4 | **FAIL** | See below. |

### ASH sourcing

- Reading the ASH 2018 HIT guideline on a secondary summary page is not enough. The brief requires an opened source.
- I opened the full text on PMC (PMC6258919), which was not blocked.
  - **Recommendation 5.1:** for acute HIT or subacute HIT A, bivalirudin is suggested rather than another non-heparin anticoagulant.
  - **Recommendation 5.2:** for subacute HIT B or remote HIT, bivalirudin is suggested rather than UFH.
- The key is therefore correct in every phase, and the writer's statement to that effect holds.
- The writer should record the PMC full text as the source actually read.

### Why q2 fails (continue BiPAP)

- asthma-copd-02 q5 is signed. A patient improves on BiPAP, and the key is "Continue BiPAP" over "Proceed to rapid sequence intubation now" and "Stop BiPAP and switch to nasal prongs".
- pulmonary-edema-02 q2 makes the same decision for the same reason. The patient responds on BiPAP, so the key is to keep it on rather than intubate or change to oxygen alone. The distractor set is nearly the same.
- The only new element is the "Delay PCI" distractor. The COPD against pulmonary edema setting does not change what is being decided.
- g12 passing a similar item in round 1, in a SAMP that failed overall, does not settle this.

**Key position move:** the reworded distractor that moved the key to position 2 is plausible and alphabetical, and I confirmed that no other SAMP changed. On its own merits the move is acceptable, but it does not rescue the question.

### Why q3 fails (avoid prasugrel)

- ischemic-heart-disease-11 q2 is signed and has the same KF, IHD 7. It is a STEMI after an ischemic stroke. It keys ticagrelor 180 mg with "Prasugrel 60 mg PO" as a distractor, and its explanation says "Prasugrel is contraindicated after any stroke or TIA".
- pulmonary-edema-02 q3 keys avoiding prasugrel because of a previous stroke, and giving ticagrelor 180 mg. That is the same decision for the same reason.
- The writer's search for "avoid prasugrel" missed it because the signed SAMP keys prasugrel as a distractor.

**Scorer gaps, if the question is ever reused:**
- "don't give prasugrel" scores 0 on the `prasugrel` item.
- "contraindication to prasugrel given prior stroke" scores 0.

### Why q4 fails (taking her off BiPAP)

- **Generic answers score full marks.** "monitor her / sit her up / reduce oxygen" scores 3/3.
- **The repeated keys score full marks.** pulmonary-edema-03 q3's keys plus a generic item ("titrate oxygen to sats 92 to 96 / sit upright / monitor") score 3/3. The writer reported 2/3.
- **Wrong answers are credited.** "remove BiPAP now and discharge" earns `trial`. "trial of furosemide" earns `trial`, because `trial of` is a bare match.
- **Not sourced.** The ESC HF guideline gives the thresholds for starting NIV. It gives no weaning sequence, so the keyed steps (FiO2 first, a trial on nasal prongs, reapplying BiPAP) are inferred. The brief requires that the source says what is claimed.
- **Poor KF fit.** Pulmonary edema KF 4 is about recognising impending failure and escalating. Weaning 3 hours after PCI is de-escalation and would happen in the CCU, not the ED.

## pulmonary-edema-01 and -04

These were not reviewed, because they are "cannot". Their current text is round 1 text and must be restored to HEAD by the coordinator. Remove the `hte` and `drew` constants at the same time.

## Unrequested writer changes

| Change | Judgment |
|---|---|
| pre-eclampsia-15 `alsoTopics` changed to `["dvt-pe"]` | Acceptable. It matches the story, and it supports the finding that q3 is dvt-pe content. |
| New source id `tc-preg-vte-2025` | Not acceptable as it stands. It duplicates `tc-preg-tx`, so reuse the existing id. |
| `escAcs` constant added but missing from the report | Acceptable if 02 is rebuilt and still cites the ESC ACS guideline. Otherwise remove it. |
| q2 distractor reworded to pass the s15 position gate | Acceptable on its own merits, but the question fails for the D1 repeat. |
| The writer swapped 01 and 04 to HEAD text, then restored round 1 text from a saved copy | I cannot check this against the writer's saved copy. It is moot, because the coordinator restores both to HEAD. |

## Tests

These are optional for the reviewer and were not run. The landing worktree runs the type check, the full suite and the launch gate.

## For the physician

- **pre-eclampsia-15 q3:** Thrombosis Canada says women with a proximal DVT in the last 2 to 4 weeks "can be switched" to IV UFH before delivery. That makes the switch an option, not an obligation. Anticoagulation timing is dvt-pe KF 6 material, and dvt-pe-40 already covers the withhold, 24 hour neuraxial and restart decisions. Please decide whether any peripartum anticoagulation question belongs under pre-eclampsia KF 4.
- **pulmonary-edema-02 q2:** I judge "patient improving on BiPAP, continue it rather than intubate or remove it" to be the decision of asthma-copd-02 q5, even though the diagnosis differs. The writer asked you to judge this. My view is that it is a repeat.
- **pulmonary-edema-02 q3:** ischemic-heart-disease-11 q2 already tests avoiding prasugrel after stroke and using ticagrelor.
- **pulmonary-edema-02 q1:** bivalirudin after HIT is sound in every HIT phase under ASH 2018 Recommendations 5.1 and 5.2, which I read in full on PMC. This is the best new decision in the SAMP and worth keeping in a rebuild.
- **pulmonary-edema-01 and -04:** these need your decision on the cluster, or D1 slots. Only one D1 slot remains.
