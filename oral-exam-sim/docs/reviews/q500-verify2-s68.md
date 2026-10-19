# Q500 verification, round 2: s68, Gastrointestinal (GI) bleed

Fresh independent review by Preceptor of the revised batch `src/samps/s68/gi-bleed.ts`, ids gi-bleed-48 to gi-bleed-52. This reviewer did not write, edit or review s68 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). Both lenses were applied to the whole batch, not only the changes. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: the round 1 verdict `docs/reviews/q500-qa-s68.md`, the writer report `docs/reviews/q500-writer-s68-r2.md`, the git history of the file (the revision landed across commits 3e20c41, 0f19475, a0d0362 and 3e3b3ec), the briefs, spec, rules, D1 table and scoring rulings, the decision catalogues for gi-bleed, shock, abdominal-pain and multiple-trauma (plus a grep of every other catalogue), current Q500 text in `src/samps/s5*`, `s6*`, `s70` and `src/cases/batch11` to `batch15`, and the oral case `src/cases/batch15/weak-and-pale-after-a-stent.ts` in full.

Checks run: `SAMP_BATCH=s68 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 128 tests). House style scan: no em or en dashes, no semicolons in text, no smart quotes, no personal names. Stems are 114 to 146 words. Single key positions (first to fifth): 4, 4, 3, 4, 4 of 19, so none above 25 percent.

## Verdicts

| Id | Verdict | Failing items |
|---|---|---|
| gi-bleed-48 | FAIL | q4 |
| gi-bleed-49 | FAIL | q3 (menu) |
| gi-bleed-50 | FAIL | q1 |
| gi-bleed-51 | FAIL | q1, q2, q3 |
| gi-bleed-52 | FAIL | q3 |

Questions: 20 (19 single, 1 menu). Pass 13. Fail 7. Stems: 5 pass.

## Round 1 required fixes: were they applied?

| Round 1 fix | Applied | Comment |
|---|---|---|
| 48 stem rebuild (retold gi-bleed-04) | Yes | New patient and diagnosis (Heyde syndrome, colonic source). No value reused. |
| 48 q1 keep shock index | Yes | 116 / 84 = 1.38, rounds to 1.4. Correct. |
| 48 q2, q3 replace | Yes | New KF1 questions, both pass. |
| 49 stem rebuild (retold gi-bleed-03) | Yes | New age, sex, setting, drug pair and values. |
| 49 menu before reversal question | Yes | Menu is now q3 and the reversal key no longer names the hold. But the menu itself repeats gi-bleed-03 q3 (see below). |
| 50 q1 rebuild | Partly | The scenario is new, but the new key is not a stem fact and the explanation undercuts it (see below). |
| 50 q2 explanation sentence | Moot | Old q2 dropped (see unrequested changes). |
| 50 q3, q4 replace | Yes | New q3 (H. pylori) and q4 (no routine second look) pass. |
| 51 fever | Yes | 38.4°C oral. |
| 51 timeline | Yes | Two days of streaky sputum, dark stool after arrival. q2 explanation matches. |
| 51 q3, q4 off-blueprint | Yes | Both now tag gi-bleed key features. New q3 repeats a signed decision (see below). |
| 52 q3 or q4 replace, q4 source misread | Yes | q4 replaced with transfer for embolization. Table 5 now read correctly (46% is how often embolization was used). Advisory on hemobilia wording taken. |

## Per question

### gi-bleed-48 (Maroon stools on a valve waiting list)

- Stem PASS. Severe aortic stenosis (0.6 cm2), recurrent iron deficiency, normal scopes 8 months ago, no antithrombotic, normal urea. Nothing in the catalogues or current Q500 text keys Heyde syndrome, angiodysplasia or acquired von Willebrand syndrome. pulmonary-edema-14 lists "Anemia or GI bleeding" as a decompensation cause only.
- q1 PASS (KF5). 116 / 84 = 1.38. BSG 2019 calls a shock index above 1 unstable. The 0.72 inversion and 1.0 threshold distractors are plausibly wrong. shock-16 keys 1.3 and shock-52 keys "above 1" in another context. Physician-level note below on the KF5 tag.
- q2 PASS (KF1). Source checked (Lourdusamy 2021, full text through Europe PMC): angiodysplasia "is the most common cause of obscure lower GI bleed in up to 50% of cases". Distractor reasons are true to the stem. Advisory: the update is 9 words, just under the 10 word guide.
- q3 PASS (KF1, coagulopathy). Source checked: shear makes von Willebrand factor "more sensitive to the action of ... ADAMTS 13", with loss of the high molecular weight multimers. Every distractor reason traces to the stem (INR 1.1, creatinine 88, platelets 236, MCV 76).
- q4 FAIL (medium to high, false distractor reason).
  - Current text: "The same review found no benefit from octreotide, a somatostatin analogue, in Heyde syndrome."
  - Problem: the review does say this ("octreotide/ desmopressin therapy are not found be of benefit"), but it is out of date. The OCEAN randomized trial (Goltstein LCMJ et al. Gastroenterology. 2024;166:690-703) found that octreotide LAR 40 mg every 28 days nearly halved transfusion needs in transfusion-dependent angiodysplasia bleeding (mean 11.0 against 21.2 units, a reduction of 10.2 units, 95% CI 2.4 to 18.1). A candidate would learn that somatostatin analogues do not help angiodysplasia bleeding, which is false. The key still holds, because octreotide reduces bleeding but does not remove the shear that destroys the multimers, and valve replacement left 79% free of recurrence over 15 years (Thompson 2012, as summarized in the review).
  - Required change: replace the sentence with a true reason, for example "Octreotide can reduce transfusion needs in angiodysplasia bleeding, but it does not remove the shear stress that causes it." If the writer adds the trial, add it as a source with a verified URL (PubMed or the journal). Do not cite the review for "no benefit".
  - Writer flag adjudicated (observational evidence): the review says "one cannot make a strong recommendation based on the current available literature". The prompt asks which treatment is "most likely to prevent further bleeding", not which is guideline-recommended. The case series support that wording, and she is already listed for TAVI, so the key is defensible. Physician-level note on the KF6 tag below.
- Unrequested change judged (rule 4): dropping the round 1 72-hour PPI question is accepted. The colonic diagnosis cannot carry it, and the batch15 oral case keys the same high-dose PPI for 3 days in q-dispo and its rubric.

### gi-bleed-49 (Breathless woman with lung disease)

- Stem PASS. It is no longer gi-bleed-03: woman, 69, community hospital, rivaroxaban with diclofenac, all values new.
- q1 PASS (KF3). 150 minus 112 = 38 mmHg, "almost 40". Advisory (B6, low): in mock mode the q2 update (hemoglobin 66 g/L, melena) shows beside q1 and points to the anemia option. The round 1 review passed the same structure, so this is not grounds to fail.
- q2 PASS (KF3). 129 minus 66 = 63 g/L. MCV 90 fL with urea 18.2 and creatinine 78 fits acute upper loss. Near contact named: gi-bleed-10 q2 (write-in) lists the urea and hemoglobin fall as clues to an upper bleed. This question keys a different decision (acute bleeding over chronic iron deficiency, anemia of chronic disease, dehydration and hemolysis).
- q3 FAIL (medium, repeat of a signed key decision).
  - Current menu: "Which of the following of her medications increase her risk of GI bleeding and should be held now?" Key: rivaroxaban and diclofenac.
  - Problem 1: signed gi-bleed-03 q3 keys "Hold apixaban" and "Stop NSAIDs" for an older patient with atrial fibrillation on a factor Xa inhibitor plus an over-the-counter NSAID. Changing the drug pair does not change the decision. The batch15 oral case also keys "Stop naproxen for good". This is not a D1 entry. The round 1 review asked only for the reorder and did not test this menu against gi-bleed-03.
  - Problem 2: four of the six options (calcium carbonate, vitamin D, two inhalers) are not plausible peers that a partly prepared candidate would hold, so the menu is easy by elimination (SAMP_SPEC section 7, no strawmen).
  - Required change: replace q3 with a `menu` question on a decision not keyed in the bank (the batch must keep at least one menu). Keep it before q4 and do not name rivaroxaban as held or reversed in it. Check the new key against gi-bleed-02 q1, 03 q3, 10 q2, 13, 22 q2, 41 q2 and cva (anti-Xa level and timing items) before writing. Every distractor must be a plausible peer.
- q4 PASS (KF6). ACG-CAG 2022 suggests against PCC and against andexanet for rivaroxaban or apixaban. She is stable at 132/74 mmHg after 2 units and 14 hours from her last dose, so the key also holds under Thrombosis Canada, which keeps reversal for life-threatening bleeding. PCC 2000 units is the Canadian fixed dose, a plausible distractor. The update's "Upper endoscopy is planned for the morning" is background, not a keyed timing decision, so it does not take the oral case's "endoscopy within 24 h" decision.

### gi-bleed-50 (Slow crash into a hydro pole)

- Stem PASS. Not gi-bleed-26 or gi-bleed-03. pre-eclampsia-38 (low-speed crash with no memory, eclampsia) and chest-pain-29 q4 (medical cause after a fall) are near contacts in setting only.
- q1 FAIL (medium, key not a stem finding and undercut by its explanation).
  - Current key: "Shock with only a minor injury".
  - Problem 1: at q1 the injury burden is not yet known. CT comes in the q3 update. The explanation itself says "A negative eFAST does not exclude retroperitoneal or pelvic bleeding", which means a hidden injury is still possible. So the key asserts what the explanation says cannot yet be known.
  - Problem 2: the key restates the lead-in ("an illness, rather than an injury, explains his shock") rather than naming a finding. That cues it (Lens B 6).
  - Problem 3: the explanation ends without a full stop ("The belt abrasion is a minor injury").
  - Required change: key a concrete stem fact that separates a medical cause, not the conclusion. One choice that is not keyed elsewhere is the witness account "Car drifting slowly off the road" (loss of control before impact). Avoid a symptom before the event (chest-pain-29 q4 keys "Pain beginning before the fall") and postural vital signs (first-trimester-bleeding-29 q1). Rewrite the explanation to match, and end it with a full stop.
  - Writer flag adjudicated (Tintinalli unread for 50 q1): Tintinalli 9th edition is a real book with correct editors, and round 1 accepted it for standard teaching. Medical events behind a crash are standard teaching, so the citation is acceptable. A readable source is preferred if the writer finds one.
- q2 PASS (KF5). Reddick 2011 abstract read: "Short, wide cannulae should be used when rapid fluid resuscitation is required." Triple lumen and PICC are long and narrow. Tibial intraosseous flow is a fallback. Not keyed in the bank: "Two large bore IV lines" is only one item in write-in lists (gi-bleed-01, 06, 13), and shock-28's tibial intraosseous key is for failed IV access in a child.
- q3 PASS (KF1). ICG 2019 D5 verified: "Patients with bleeding peptic ulcers should be tested for Helicobacter pylori and receive eradication therapy". Urea 19.6 with creatinine 86 supports an upper source. No H. pylori key in the bank. The oral case keys testing and treating H. pylori after endoscopy. This question keys the untreated infection as a history clue, which is a different decision. Partial contact accepted.
- q4 PASS (KF6). ICG 2019 B12 verified: "Routine second-look endoscopy is not recommended." Not keyed in any catalogue or current Q500 text (the only "second look" hits are a necrotizing fasciitis case). Partial contact with the oral case judged: the update ("duodenal ulcer with a visible vessel, which is treated with clips and thermal coagulation") is almost the oral case's q-dispo prompt, but the decision differs (no second look against a 3-day PPI order and disposition). Accepted. Advisory: vary the update wording (for example the ulcer site or size) to keep the bank-wide TF-IDF check clear.
- Unrequested changes judged (rule 4): dropping old q2 is accepted, because shock-17 q3 keys "Hemodilution has not yet occurred" (confirmed in the shock catalogue). Removing old q5 (maroon stool while waiting for endoscopy) is correct under the coordinator ruling that the oral case owns the rebleed-while-waiting twist.

### gi-bleed-51 (Teenager who brought up blood)

- Stem PASS. Fever and timeline fixes are correct.
- q1 FAIL (medium, repeat of a signed key decision, not a D1 entry).
  - Problem: signed gi-bleed-24 q1 (s39, `reviewed: true`) keys "Right upper lobe of the lung" as the source when a man says he "vomited blood", each episode began with coughing, there are right upper chest crackles and the nose and pharynx show no bleeding. This question keys "Lung, from bronchial vessels" in a boy whose father says he vomited blood, who coughed before bringing it up, with right upper chest crackles and no bleeding point in the nose or pharynx. The cystic fibrosis setting does not change the decision. Round 1 accepted it and named it "D1 style" for the physician, but it was never recorded in docs/DECISIONS.md, and the coordinator ruling for this round fails any unrecorded repeat. This is named here, not reversed silently.
  - Required change, one of:
    1. The product owner records it as D1 row 20 (it echoes a signed SAMP, and the decision is close to the literal wording of KF4). That is the last slot before the freeze, and the writer may not take it on its own.
    2. Rebuild q1 on a KF4 decision not keyed in gi-bleed-05, 18, 19, 23, 24 or 47.
  - Citation note for either route: the hemoptysis-versus-hematemesis features in the explanation are supported by the AAFP review (Table: GI blood is "Coffee ground appearance (not bubbly or frothy), darker blood, nausea, vomiting"). The CF Foundation abstract does not cover them. Cite AAFP for q1.
- q2 FAIL (low to medium, citation does not support the point). The key (swallowed blood from the lungs darkens stool) is new to the bank and correct, and the timeline now supports it. But the cited Flume 2010 guideline is about managing hemoptysis and pneumothorax in cystic fibrosis. Its abstract does not mention swallowed blood or stool, and its full text could not be read. Required change: cite a source that states swallowed blood from outside the gut can cause dark stool or melena (for example the Tintinalli upper GI bleeding chapter, already in the bank as a standard text, or another verified source). Flume may stay only for a point it is known to support.
- q3 FAIL (medium, repeat of a signed key decision).
  - Problem: signed gi-bleed-24 q2 keys "Chest radiograph" among the immediate steps for the same presentation, and gi-bleed-24 q3 keys CT angiography of the chest. This question keys "Chest radiograph" as the first investigation. Round 1 suggested this angle without checking gi-bleed-24 q2, so the writer is not at fault, but the repeat stands.
  - Required change: replace q3 with a decision not keyed in the bank. Do not key chest radiograph, chest CT angiography or bleeding-side-down positioning. KF4 stays covered by q2.
  - Writer flag adjudicated (CF Foundation unreachable): the guideline exists and the PubMed URL (20675678) opens the right record. It is acceptable as a source only for points its abstract or quoted recommendations support. See q2.
- q4 PASS (KF1, liver disease as the clue). Debray 2011 (ECFS) full text read: "Approximately 5 to 10% of all CF patients will develop multilobular cirrhosis during the first decade of life ... Most of these will develop signs of portal hypertension ... during the second decade, mainly variceal bleeding". The explanation matches. gi-bleed-01 and 32 key varices from other causes. Physician-level note below on the pancreatic insufficiency reason.

### gi-bleed-52 (Second bleed after normal scopes)

- Stem PASS. Community hospital opening is correct.
- q1 PASS (KF1). Hemosuccus pancreaticus is new to the bank.
- q2 PASS (KF2). Tarar Table 3 (melena 58%, hematochezia 15%) was verified in round 1. The hemobilia wording now says "most often follows". It is not the oral case's KF2 decision (brisk ulcer bleeding presenting as maroon stool).
- q3 FAIL (medium, repeat of a signed key decision).
  - Problem: signed gi-bleed-30 q2 keys "CT angiography of the abdomen" to find an arterial pseudoaneurysm bleeding through the papilla (hemobilia), with the same reason for rejecting ERCP and sphincterotomy. CT angiography to localize GI bleeding is also keyed in gi-bleed-06 q2 and gi-bleed-12 q3. Round 1 allowed one of the CTA and embolization pair to stay. That allowance is named here and not followed, because the coordinator ruling for this round fails any repeat that is not a recorded D1 entry. If the coordinator upholds the round 1 allowance instead, this item becomes a pass with no change.
  - Required change: replace q3 with a decision not keyed in the bank. Do not key CT angiography, transarterial embolization (gi-bleed-04, 12, 30) or side-viewing duodenoscopy (gi-bleed-38 q2). Keep the q4 update's neutral "Imaging shows" wording.
- q4 PASS (KF6). "Transfer now for embolization" from a hospital without interventional radiology, while he is stable between bleeds, is not keyed in the bank. Nearest are gi-bleed-15 q3 (rural varices, urgent transfer) and gi-bleed-06 q3 (transfer to vascular surgery as one write-in item). Distractor reasons are true. The surgery sentence now matches Tarar.

## Coordinator ruling on the batch15 oral case

The oral case owns "upper endoscopy before colonoscopy", "endoscopy within 24 h rather than deferring" and the rebleed-while-waiting twist. No s68 question keys any of them.

- gi-bleed-48 has an unstable maroon bleed, but the source is colonic and no question keys an endoscopy choice.
- gi-bleed-49 q4's update only mentions endoscopy planned for the morning.
- Old gi-bleed-50 q5 was removed.

The writer's two flagged partial contacts are both accepted:

- 50 q4 keys no routine second look, a decision the oral case does not hold. Only the update wording is close, see the advisory.
- 50 q3 keys untreated H. pylori as a history clue. The oral case keys test and treat after endoscopy.

## Key feature coverage (passing questions only)

| KF | Passing questions |
|---|---|
| 1 | 48 q2, 48 q3, 50 q3, 51 q4, 52 q1 |
| 2 | 52 q2 |
| 3 | 49 q1, 49 q2 |
| 4 | none (51 q1, q2 and q3 fail). 51 q2's fix is only a citation change and keeps KF4 covered. |
| 5 | 48 q1, 50 q2 |
| 6 | 49 q4, 50 q4, 52 q4 |

Every key feature stays covered once the 51 q2 citation is fixed. The batch has no passing `menu` question until 49 q3 is replaced with a new menu.

## Sources verified this round

- Lourdusamy D et al. World J Clin Cases. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8464459/ (full text through Europe PMC). It supports 48 q2, q3 and the q4 key. Its octreotide statement is out of date (see 48 q4).
- Goltstein LCMJ et al. OCEAN trial. Gastroenterology. 2024;166:690-703 (search summaries of the published results). It is cited here only as evidence against the 48 q4 sentence.
- Barkun AN et al. ICG. Ann Intern Med. 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/ (page read): B12 and D5 quoted above.
- Reddick AD et al. Emerg Med J. 2011. https://pubmed.ncbi.nlm.nih.gov/20581377/ (abstract read).
- Earwood JS, Thompson TD. Am Fam Physician. 2015. https://www.aafp.org/pubs/afp/issues/2015/0215/p243.html (page read): chest radiography as the initial test, and the table separating GI blood from hemoptysis.
- Debray D et al. J Cyst Fibros. 2011. https://www.ecfs.eu/sites/default/files/publications-ecfs-guidelines/JCF10_Sup2_S29_S36.pdf (full PDF read).
- Flume PA et al. Am J Respir Crit Care Med. 2010. https://pubmed.ncbi.nlm.nih.gov/20675678/ (abstract only. It covers the management of hemoptysis and pneumothorax and does not cover swallowed blood).
- Oakland K et al. BSG. Gut. 2019, Abraham NS et al. ACG-CAG. 2022 and Tarar ZI et al. 2022: verified in round 1. The points used now are unchanged or narrower.
- Tintinalli 9th edition 2020: a real book. Accepted as a standard text for 49 q1 to q3 and 50 q1.

## Physician-level items (not grounds for failure)

1. 48 q1 is tagged KF5 (resuscitate). It tests recognizing severity by shock index, which leads into resuscitation but is not itself a resuscitation choice.
2. 48 q4 (valve replacement) and 50 q4 (no routine second look) are tagged KF6 ("expedite specific therapeutic interventions"). Both are decisions an emergency physician informs rather than makes. Confirm the tags are acceptable.
3. 48 q4: the evidence that aortic valve replacement stops Heyde bleeding is observational (the review's own words). The key says "most likely", which the series support.
4. 51 q4: "Diabetes, pancreatic insufficiency and distal intestinal obstruction do not cause upper GI bleeding." This is true as stated, but pancreatic insufficiency in cystic fibrosis can cause vitamin K deficiency and a coagulopathy that worsens any bleed. Consider "do not cause a source of upper GI bleeding". Also, "Nasal polyps can bleed from the nose but not from the gut" sits awkwardly beside q2's teaching that swallowed blood can darken stool.
5. 49 q4: andexanet's availability in Canada differs between hospitals. The key ("No reversal agent") does not depend on it.
6. 51 q1 D1 decision (see above): whether to spend the last D1 slot on the hemoptysis-as-hematemesis discrimination.

## Summary

5 SAMPs, 20 questions (19 single, 1 menu), 5 stems. Pass: 13 questions and all 5 stems. Fail: 7 questions in all 5 SAMPs.

- 48 q4: false distractor reason on octreotide, contradicted by the 2024 OCEAN trial.
- 49 q3: the only menu repeats gi-bleed-03 q3 (hold the DOAC, stop the NSAID), with strawman options.
- 50 q1: the key is a conclusion that the explanation undercuts, and the explanation is missing its final full stop.
- 51 q1 and q3: repeat signed gi-bleed-24 q1 and q2. q1 can be cured by a product-owner D1 entry.
- 51 q2: the citation does not support the point.
- 52 q3: repeats signed gi-bleed-30 q2. Round 1 allowed this, and the coordinator may uphold that allowance.

All round 1 required fixes were applied. The writer's unrequested changes (dropping the 48 PPI question and 50 old q2 and q5) are accepted on their merits. No key is clinically unsafe. Every SAMP in the batch has at least one defect: gi-bleed-48, 49, 50, 51 and 52.
