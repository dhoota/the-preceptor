# Q500 verification, round 3: s68, Gastrointestinal (GI) bleed

Fresh independent review by Preceptor of the round 3 revision of `src/samps/s68/gi-bleed.ts`, ids gi-bleed-48 to gi-bleed-52. This reviewer did not write, edit or review s68 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). Both lenses were applied to the whole batch, not only the changes. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: the round 2 verdict `docs/reviews/q500-verify2-s68.md`, the writer report `docs/reviews/q500-writer-s68-r2.md` ("Round 3"), the diff against 3d2f004, the Q500 brief, the SAMP review brief, SAMP_SPEC, REVIEW-RULES, DECISIONS (D1 at 19, frozen at 20), SCORING-RULINGS, the gi-bleed, shock and abdominal-pain catalogues, a grep of the whole bank (`src/samps`, `src/cases`), and the batch15 oral case `weak-and-pale-after-a-stent`.

Checks run: `SAMP_BATCH=s68 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 128 tests). House style scan: no em or en dashes, no smart quotes, no semicolons in any string, no personal names. Prompts are 11 to 21 words. Stems are 114 to 142 words except gi-bleed-51, which is now 156 words (see below). Single key positions (first to fifth): 4, 4, 3, 4, 4 of 19, so none above 25 percent.

## Verdicts

| Id | Verdict | Failing items |
|---|---|---|
| gi-bleed-48 | PASS | none |
| gi-bleed-49 | PASS | none |
| gi-bleed-50 | PASS | none |
| gi-bleed-51 | FAIL | stem (length), q3, q4 |
| gi-bleed-52 | FAIL | q3 |

Questions: 20 (19 single, 1 menu). Pass 18. Fail 2 (51 q3, 52 q3), plus one explanation sentence fix in 51 q4 and a stem trim in 51. Stems: 4 pass, 1 fail.

## Round 2 required fixes: were they applied?

| Round 2 fix | Applied | Comment |
|---|---|---|
| 48 q4 octreotide sentence | Yes | Now "can reduce transfusion needs ... but it does not remove the shear stress". Matches the OCEAN abstract. Advisory below. |
| 49 q3 new menu, not gi-bleed-03 q3, plausible peers | Yes | Itraconazole raising the rivaroxaban level. New to the bank. Every option is a plausible prescription. |
| 50 q1 key a stem fact, explanation not undercutting, full stop | Yes | Key "Car drifting slowly off the road". eFAST sentence now consistent. Full stop present. |
| 50 q4 update wording (advisory) | Yes | "9 mm ulcer on the posterior wall ... injected and closed with a hemoclip". Clear of the oral case's q-dispo wording. |
| 51 q1 D1 entry or rebuild | Rebuilt | Prothrombin time for vitamin K deficiency. New to the bank. |
| 51 q2 citation | Yes | Merck Manual epistaxis page supports swallowed blood presenting as melena. Flume removed. |
| 51 q3 replace (no chest radiograph, CTA chest or positioning) | Replaced, but fails | The new key repeats signed sob-39 q1 and gi-bleed-22 q1 (see below). |
| 52 q3 replace (no CTA, embolization or side-viewing scope) | Replaced, but fails | The new item is not a key feature decision (see below). |

## Per question

### gi-bleed-48 (Maroon stools on a valve waiting list): PASS

- Stem, q1, q2, q3 unchanged and PASS as in round 2. 116 / 84 = 1.38, rounds to 1.4.
- q4 PASS (KF6). OCEAN abstract opened (Europe PMC record for PMID 38158089): 62 patients, octreotide LAR 40 mg every 28 days, transfusions 11.0 against 21.2, "Octreotide reduced the mean number of transfusion units by 10.2 (95% CI, 2.4-18.1; P = .012)". The new sentence is true. Valve replacement remains the single best long-term answer.
- Advisory (low, not grounds to fail): the only cited source for q4 (Lourdusamy 2021) says octreotide is "not found be of benefit", the opposite of the new sentence. Round 2 made adding the trial optional, so this passes. If the writer next touches this SAMP, consider citing OCEAN for a question it can carry, or shortening the sentence to "Octreotide does not remove the shear stress that causes her bleeding."

### gi-bleed-49 (Breathless woman with lung disease): PASS

- Stem, q1, q2, q4 unchanged and PASS as in round 2. 150 minus 112 = 38. 129 minus 66 = 63.
- q3 PASS (menu, select 1, KF1).
  - Source checked: the full 2021 EHRA practical guide (Steffel, Europace 2021, 65-page published PDF). Table row "Itraconazole; Ketoconazole ... Potent P-gp and BCRP competition, strong CYP3A4 inhibition", rivaroxaban column "+160% AUC, +72% Cmax (ketoconazole, SmPC)", colour key "Strong CYP3A4 and/or P-gp inhibitor, should not be used". Text: strong inducers "(such as rifampicin, carbamazepine, etc.) will markedly reduce NOAC plasma levels". Azithromycin: "P-gp inhibition, No PK data" for every NOAC. Amoxicillin, doxycycline and levofloxacin are not listed. Clarithromycin and fluconazole are correctly left out of the options.
  - Single key: yes. Distractors are plausible peers (common antibiotics and two inducers that move the level the wrong way).
  - Uniqueness: no itraconazole or ketoconazole key anywhere in the bank. cva keys St John's wort as an inducer lowering apixaban (stroke on a DOAC), a different decision. Not gi-bleed-03 q3, gi-bleed-13 q1 (warfarin INR raisers, write-in) or gi-bleed-22 q2 (clopidogrel with escitalopram).
  - Mock mode: q4 does not name or imply the q3 key, and q3 does not name rivaroxaban as held or reversed.
  - Writer flag adjudicated (KF1 for a drug interaction): accepted. KF1 names medications and coagulopathy as clues to the cause, and a drug that raises the anticoagulant level is both.
  - Advisory (low): the 160% figure was measured with ketoconazole. "Azithromycin has no shown effect" is literally true but the guide lists it as a P-gp inhibitor with no data. Optional wording: "Azithromycin inhibits P-glycoprotein, but no effect on rivaroxaban levels has been measured."

### gi-bleed-50 (Slow crash into a hydro pole): PASS

- Stem, q2, q3 unchanged and PASS as in round 2.
- q1 PASS (KF3). The key is a stem fact (a witness saw the car drift slowly off the road). Each distractor reason is true: pallor, sweating and tachycardia show shock but not its cause, a negative eFAST lowers the chance of a large intraperitoneal bleed without excluding retroperitoneal or pelvic bleeding, and a belt abrasion does not explain shock. Not keyed elsewhere: chest-pain-29 q4 keys pain before the fall, suicide-risk-09 q1 lists a single-vehicle crash as a sign of intent (write-in), first-trimester-bleeding-29 q1 keys the postural pulse. Tintinalli (unread) stays accepted for this item under the round 2 ruling, which is binding (REVIEW-RULES rule 6).
- q4 PASS (KF6). The reworded update keeps the ICG B12 decision and moves away from the oral case's wording.

### gi-bleed-51 (Teenager who brought up blood): FAIL

- Stem FAIL (low to medium, format). The added medication sentence brings the stem to 156 words. SAMP_SPEC section 3 allows 50 to 150. Required change: trim at least 6 words without losing a fact a question relies on (for example "he coughed hard for several minutes and then brought up" can become "he coughed hard and then brought up", saving 4 words, and "into the sink" can go, saving 3). Keep "fat-soluble vitamins", "often skips his enzymes and vitamins", "no iron", "spleen is not palpable" and the fever.
- q1 PASS (KF1, coagulopathy as the clue).
  - Debray 2011 (ECFS) full PDF read: "An isolated decrease in cofactors VII, X and II suggest vitamin K deficiency that should be corrected with oral or intramuscular vitamin K supplementation", and "Vitamin K is sometimes required (1 to 10 mg daily). PT and cofactors need to be carefully monitored to prevent deficiency." That supports the prothrombin time as the test and vitamin K as the treatment. The thrombin time, D-dimer, factor VIII and von Willebrand reasons are true.
  - Uniqueness: gi-bleed-17 keys the diagnosis of newborn vitamin K deficiency bleeding, then CT head, then plasma and vitamin K. No item keys the choice of test for an acquired deficiency. Coagulation tests appear only inside write-in lists (gi-bleed-08 q2, gi-bleed-10 q1).
  - Writer flag adjudicated (no INR value given): accepted. The question asks which test is most likely to show a treatable contributor, and the stem gives the reason (pancreatic insufficiency, missed enzymes and vitamins). A result is not needed and would give the answer away.
- q2 PASS (KF4). Merck Manual page opened: author Marvin P. Fried, full review March 2025. Its text reads "Swallowed blood may lead to gastric irritation followed by vomiting, hematemesis, or melena." The extension to blood swallowed from the airway is stated as reasoning, which is fair.
- q3 FAIL (high, repeat of signed key decisions, explanation overreaches, unread source).
  - Current key: "Hemoglobin fall of 35 g/L" as the finding that most suggests blood loss beyond what he has coughed up.
  - Problem 1, repeat: signed sob-39 q1 (s51, `reviewed: true`) keys "Fall in hemoglobin of 36 g/L" as the finding that best shows how much a man with only blood-streaked sputum is bleeding into his lungs, with the same contrast between visible hemoptysis and the true loss. Signed gi-bleed-22 q1 (s39, `reviewed: true`) keys "Fall in hemoglobin of 61 g/L" as the finding that most suggests hidden blood loss as the cause of shock. gi-bleed-10 q2 also lists "Large fall in hemoglobin from baseline". The writer named the gi-bleed-22 contact but not sob-39. This is not a D1 entry, and the coordinator ruled no D1 slot for s68.
  - Problem 2, explanation: "A fall that large means bleeding somewhere else, such as a peptic ulcer" is not true as stated. A hemoglobin fall out of proportion to visible hemoptysis can equally mean a larger lung bleed than he saw, with blood retained in the airways or swallowed. That is exactly what sob-39 q1 teaches, so the bank would teach two opposite readings of the same finding. The arithmetic itself is acceptable (70 mL/kg x 52 kg = 3.64 L, and 35 / 140 = 25 percent, about 910 mL, by the simple linear estimate).
  - Problem 3, source: the keyed point rests only on Tintinalli, whose text nobody has read, and the cited chapter (upper GI bleeding) is not where a blood volume estimate or a hemoptysis comparison would be. This does not meet Q500 brief rule 4. I could not open the Tintinalli text (AccessMedicine returns 403).
  - Required change: replace q3 with a decision that is not a hemoglobin fall and is not keyed in gi-bleed-05, 10, 18, 19, 22, 23, 24, 47 or sob-39. Also avoid chest radiograph, CT angiography of the chest and bleeding-side-down positioning (gi-bleed-24). It need not be KF4, because 51 q2 keeps KF4 covered. Cite a source the writer has opened and that states the keyed point. Recheck key positions after the change (q3 now holds a third-position key, and the batch has only 3 there).
  - Writer flag adjudicated: the writer judged this might be a repeat of gi-bleed-22 q1. It is, and sob-39 q1 is a closer one.
- q4 FAIL (low to medium, distractor reason now contradicts q1).
  - Current text: "Diabetes, pancreatic insufficiency and distal intestinal obstruction do not cause upper GI bleeding."
  - Problem: the new q1 teaches that pancreatic insufficiency causes vitamin K deficiency and "A coagulopathy makes any bleed heavier, from the lungs or the gut." q4 then tells the candidate pancreatic insufficiency has nothing to do with GI bleeding. Round 2 raised this as a physician-level note. The rebuilt q1 turns it into an internal contradiction. The key (cirrhosis with portal hypertension) still holds.
  - Required change: replace the sentence with one that is true beside q1, for example "Pancreatic insufficiency can add a vitamin K coagulopathy that makes a bleed heavier, but unlike varices it does not create a source of major upper GI bleeding. Diabetes and distal intestinal obstruction do not cause upper GI bleeding." Keep the option.

### gi-bleed-52 (Second bleed after normal scopes): FAIL

- Stem, q1, q2, q4 PASS. Tarar 2022 opened: Table 3 (melena 58%, hematochezia 15%), Table 5 (angiographic embolization 46%, surgery 38%), conclusion "angiographic embolization is preferred" and surgery "In patients with persistent hemodynamic compromise or failed embolization". The q4 update ("a 2 cm arterial pseudoaneurysm") no longer names the artery.
- q3 FAIL (medium, not a key feature decision, source misattributed).
  - Current key: "Splenic artery" as the most likely bleeding artery, tagged KF1.
  - Problem 1: KF1 asks the candidate to look for risk factors that suggest the etiology (medications, substances, liver disease, coagulopathy). q1 already tests that clue (chronic pancreatitis with a pseudocyst), and q2 has established the diagnosis. Naming the parent artery is anatomy recall. It changes no emergency decision, because the q4 plan (transfer for embolization) is the same whichever artery it is. Lens B 9 requires each question to test the key feature it names. The KF1 tag is not honest here.
  - Problem 2: "The review by Tarar and colleagues found the splenic artery involved in 54% of cases" is not what the review did. Its sentence "The involvement of splenic (54%), gastroduodenal (16%), hepatic (11%), and pancreaticoduodenal (11%) arteries has been ascertained" cites reference 19 (Ru N et al. Pancreas. 2019). Tarar's own tables do not break cases down by artery.
  - Required change: replace q3 with a question that tests a gi-bleed key feature as a decision the emergency physician makes. Do not key CT angiography, transarterial embolization (gi-bleed-04, 12, 30), side-viewing duodenoscopy (gi-bleed-38 q2), no transfusion now (gi-bleed-36 q1) or the q4 transfer. Keep the q4 update's neutral wording. If any sentence quotes the artery figures, say they come from an earlier systematic review cited by Tarar. Recheck key positions (q3 now holds a fifth-position key).
  - If the coordinator rules that KF1 covers naming the bleeding vessel, Problem 1 falls away, and only the attribution wording in Problem 2 needs fixing.

## Unrequested writer changes (rule 4)

- 51 stem: adds fat-soluble vitamins, "often skips his enzymes and vitamins" and "He takes no iron". The facts are needed for q1 and q2 and are accepted, but they push the stem over 150 words (see above).
- 51 q2 explanation rewritten to match the Merck source: accepted.
- 49: `tintinalli` no longer cited by q3, and `ehra-noac` added. Each listed source is cited: accepted.
- No other unrequested change found in the diff.

## Coordinator ruling on the batch15 oral case

Still respected. No s68 question keys upper endoscopy before colonoscopy, endoscopy within 24 hours or a rebleed while waiting. 50 q3 (untreated H. pylori as the clue) and 50 q4 (no routine second look) remain partial contacts only, accepted in round 2.

## Key feature coverage (passing questions only)

| KF | Passing questions |
|---|---|
| 1 | 48 q2, 48 q3, 49 q3 (menu), 50 q3, 51 q1, 52 q1 |
| 2 | 52 q2 |
| 3 | 49 q1, 49 q2, 50 q1 |
| 4 | 51 q2 |
| 5 | 48 q1, 50 q2 |
| 6 | 48 q4, 49 q4, 50 q4, 52 q4 |

Every key feature is covered by passing questions, and the batch has one passing `menu` (49 q3). KF2 and KF4 each rest on one question, so the replacements for 51 q3 and 52 q3 must not disturb 51 q2 or 52 q2.

## Sources verified this round

- Goltstein LCMJ et al. OCEAN trial. Gastroenterology. 2024. PMID 38158089, abstract read through the Europe PMC REST record.
- Steffel J et al. 2021 EHRA practical guide. Europace. 2021. https://pubmed.ncbi.nlm.nih.gov/33895845/ (the PubMed page does not render here). The full published PDF was read from a public copy (https://www.arcalazio.com/2021/2021_05_13_esc_use_of_non_vitamin_k.pdf). The table rows are quoted above.
- Debray D et al. J Cyst Fibros. 2011. https://www.ecfs.eu/sites/default/files/publications-ecfs-guidelines/JCF10_Sup2_S29_S36.pdf (full PDF read).
- Fried MP. Epistaxis. Merck Manual Professional Version. https://www.merckmanuals.com/professional/ear,-nose,-and-throat-disorders/approach-to-the-patient-with-nasal-and-pharyngeal-symptoms/epistaxis (page read, full review March 2025, so the 2025 year is right).
- Tarar ZI et al. J Investig Med High Impact Case Rep. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8796068/ (page read). The artery percentages are cited from Ru 2019.
- Tintinalli 9th edition 2020: not readable here (AccessMedicine 403). Accepted for 49 q1, q2 and 50 q1 under the round 2 ruling. Not accepted as the only support for 51 q3. Advisory: the bank's other Tintinalli objects name the chapter ("Chapter 75, Upper Gastrointestinal Bleeding", see docs/reviews/signed-tintinalli-citations.md). s68's object says only "Chapter on upper gastrointestinal bleeding".

## Physician-level items (not grounds for failure)

1. 48 q1 KF5 tag, 48 q4 and 50 q4 KF6 tags, and the observational evidence for 48 q4: carried from round 2, unchanged.
2. 49 q3 tests a drug interaction under KF1. Accepted, as above.
3. 52 q4 update: 1 unit of red cells at a hemoglobin of 92 g/L with a pulse of 108 and BP 112/70 is more liberal than the usual 70 to 80 g/L threshold. Nothing keys it, and active bleeding from a pseudoaneurysm may justify it.

## Summary

5 SAMPs, 20 questions (19 single, 1 menu). Pass: gi-bleed-48, 49 and 50 in full, and 18 of 20 questions. Fail: gi-bleed-51 and gi-bleed-52.

- 51 stem: 156 words, over the 150-word limit.
- 51 q3: the key ("Hemoglobin fall of 35 g/L") repeats signed sob-39 q1 (fall of 36 g/L against scant hemoptysis) and gi-bleed-22 q1. The explanation's "means bleeding somewhere else" contradicts sob-39. The point rests only on unread Tintinalli.
- 51 q4: the pancreatic insufficiency sentence now contradicts the rebuilt q1.
- 52 q3: naming the splenic artery is anatomy recall, not a KF1 decision, and the 54% figure is credited to Tarar although the review cites Ru 2019 for it.

Every round 2 required fix was applied. The new 49 q3 menu, 50 q1, 51 q1 and 51 q2 are correct, sourced and new to the bank. No key is clinically unsafe.
