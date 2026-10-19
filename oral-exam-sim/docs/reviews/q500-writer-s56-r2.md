# Q500 writer revision, round 2: s56, Pediatric fever

Writer: Preceptor. File: `src/samps/s56/pediatric-fever.ts`. All items stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. SAMP ids are unchanged. Question ids are renumbered where questions were removed.

The authority for this round is `docs/reviews/q500-verify-s56.md`. The first-round report `docs/reviews/q500-qa-s56.md` was read for context, including its addendum. That addendum records in-place edits by an earlier agent (48 stem reworded, 48 q4, 49 q4, 50 q4 and 51 q2 removed). I treated those edits as writer revisions that I own, and judged each one below.

## Result

| SAMP | Questions | Key features (topic n) |
|---|---|---|
| pediatric-fever-48 | 3 single | pf 6, tox 6, infectious-diseases 5 |
| pediatric-fever-49 | 4 single | pf 5, pf 8, pf 1, pf 3 |
| pediatric-fever-50 | 3 single | pf 7, 7, 7 |
| pediatric-fever-51 | 2 single, 1 menu | pf 2, pf 1, shock 8 |
| pediatric-fever-52 | 2 single, 1 menu | pf 4, pf 1, pf 3 |

16 questions: 14 single, 2 menu. Single key positions, first to fifth: 3, 3, 2, 3, 3.

Pediatric fever key feature coverage: KF1 3 (49 q3, 51 q2, 52 q2), KF2 1 (51 q1), KF3 2 (49 q4, 52 q3), KF4 1 (52 q1), KF5 1 (49 q1), KF6 1 (48 q1), KF7 3 (50 q1 to q3), KF8 1 (49 q2). Every key feature is covered, including KF3 and KF8 as asked. There is one weight-based antipyretic question in the batch, and it carries a twist (age-based package dose against weight).

Three SAMPs have 3 questions. The coordinator allowed this where no genuinely new decision exists, and the spec allows 3 to 5. I found no further decision for 48, 50, 51 or 52 that the catalogues do not already key (see "Candidates rejected").

## Required fixes and how each was done

### pediatric-fever-48

| Item | Verdict | What I did |
|---|---|---|
| stem | Exam echoes tox-11 and delirium-agitation-06 | The earlier agent's rewording still kept "bowel sounds are quiet and her bladder is palpable" and a pupil size, which echo delirium-agitation-06. I rewrote the whole examination with findings neither signed stem uses: cries out at shadows, reaches for things that are not there, red hot face and chest with no sweat on the scalp or groin, cracked lips and a dry tongue, pupils that barely constrict, few bowel sounds and a dull swelling above the pubis. "Picking", "recognize her mother", "axillae", "sluggish" and "bladder is palpable" are gone. Stem is 148 words. |
| q1 | Pass | Kept. Explanation updated to match the new findings. |
| q2 (ECG) | Fail, repeat of tox-11 q2 and delirium-agitation-06 q2 | Replaced. New key: no decontamination. The drug and timing come in the update (father's dimenhydrinate in the back seat, drive ended at 15:00, so the ingestion was at least 6 hours earlier). Charcoal is outside its 1 hour window and contraindicated without a protected airway in a delirious toddler. Tagged tox KF6 (decontamination when timing supports it), which is honest. No catalogue item keys decontamination for an anticholinergic or antihistamine ingestion. The only "no charcoal" key (s53 tox) is a hydrocarbon. |
| q3 (physostigmine) | Fail, repeat of tox-11 q4 and delirium-agitation-06 q3 | Replaced. New key: lumbar puncture when the toxidrome has cleared (sweating, pupils and voiding back) but fever and confusion persist. The ingestion no longer explains her state, so meningitis and encephalitis must be sought. Tagged infectious-diseases KF5 (include infection in vague presentations such as confusion), which is honest. No catalogue item keys this. |
| q4 (cool mottled legs) | Verify passed it | The earlier agent removed it because pediatric-fever-31 q3 keys "Cool mottled limbs, slow refill". I confirmed that key in the catalogue and agree it is a repeat, so it stays removed. KF2 remains covered by 51 q1. |

The tablets now belong to the father, not the grandmother, so the history no longer echoes pediatric-fever-10 (grandmother's medicines).

### pediatric-fever-49

| Item | Verdict | What I did |
|---|---|---|
| q1 | Pass | Kept unchanged. |
| q2 (propranolol) | PTU sentence gave away q4, 7 sentences, dishonest tag | Removed. Beta blockade is endocrine treatment, and no pediatric fever key feature fits it honestly. The PTU problem goes with it. |
| q3 (acetaminophen 540 mg) | Options not low to high, bare dose repeat | Rebuilt as q2 with the twist the verdict suggested. Her mother gives two 325 mg adult tablets, the package dose for age 12 and over, but she weighs 36 kg. The SickKids sheet doses by weight and keeps adult dosing for children over 44 kg. Key 480 mg (13.3 mg/kg, the sheet's dose for 32 to 44 kg). Options run low to high: 160, 320, 480, 650, 1 000 mg. 540 mg is not an option, so there is one defensible key. KF8, honest. |
| q4 (methimazole) | Dishonest tag, mock cue | The earlier agent removed it (pulmonary-edema-25 q3 keys methimazole). It stays removed. |
| new q3 | | Seven weeks after "her specialist starts a daily tablet", she returns with fever, sore throat and mouth ulcers. Key: CBC with differential. ATA recommendation 52 (children): stop the antithyroid drug and measure the white count in a child with fever, mouth sores or pharyngitis. Tagged pf KF1: a host factor (the drug) sets the septic workup. The update does not name the drug, so it does not cue q1 in mock mode. |
| new q4 | | ANC 0.2 x 10^9/L. Key: IV broad-spectrum antibiotics. Vicente 2017: stop the drug, IV broad-spectrum antibiotics after cultures, admit, G-CSF only in selected patients. Tagged pf KF3, honest. No catalogue item keys agranulocytosis on an antithyroid drug. |

### pediatric-fever-50

| Item | Verdict | What I did |
|---|---|---|
| q1 to q3 | Pass | Kept unchanged. |
| q4 (ibuprofen 200 mg) | Fail, order and second bare dose | The earlier agent removed it. It stays removed. KF8 is now 49 q2. |

I considered a cough duration question as q4 (Thompson, BMJ 2013: acute cough resolves in 90% by 25 days). I rejected it because it would sit badly beside the AAP 10-day "persistent illness" criterion taught in q1 and q3 of the same SAMP. 50 stays at 3 questions.

### pediatric-fever-51

| Item | Verdict | What I did |
|---|---|---|
| stem | | Added "takes no medications", which the new q3 explanation relies on. |
| q1 | Pass | Kept unchanged. Leg pain stays central, as the verdict asked. |
| q2 (perfusion state) | Fail | The earlier agent removed it and moved its teaching point into the ceftriaxone update. That update is gone too, so the point no longer appears. |
| ceftriaxone item (was q3) | Fail, repeat of shock-12 q3 and pediatric-fever-04 q2 | Replaced. New q2: lactate. The SSC 2026 children's guideline makes a strong recommendation to measure lactate in probable sepsis or suspected septic shock. The verdict proposed this. No catalogue item keys lactate as the test to add in a child. Tagged pf KF1 (stratify sepsis risk to guide the workup). Ceftriaxone now appears only as a given fact in the update. |
| capillary refill after the bolus (was q4) | Fail, third perfusion item | Replaced. New q3 (menu, None keyed): once fluid and epinephrine restore her circulation, nothing is added. SSC 2026 suggests against IV hydrocortisone when stability is restored. It also suggests against vitamin C, thiamine and levothyroxine, and favours crystalloid over albumin. Tagged shock KF8 (non-fluid therapies only when indicated), which is honest. Catalogue hydrocortisone keys (shock-12 q5 and others) are all for refractory shock or adrenal crisis, not for stable shock. |

### pediatric-fever-52

| Item | Verdict | What I did |
|---|---|---|
| q1 | Pass | Kept unchanged. |
| q2 (chemotherapy 8 days ago) | Fail, repeat of infectious-diseases-03 q1 | Removed. I found no pediatric fever and neutropenia risk-stratification decision with a single defensible key. The 2023 guideline names no single rule, so "which feature makes him high risk" or "outpatient or inpatient" would have more than one defensible answer. KF1 stays covered by the menu (now q2), 49 q3 and 51 q2. |
| q3 (menu, cultures from every lumen and CBC) | Pass | Kept as q2. |
| q4 (piperacillin-tazobactam) | Fail, repeat of id-03 q2 and pediatric-fever-03 q2 | Replaced with the verdict's suggestion. Piperacillin-tazobactam is now a fact in the update. He then becomes hypotensive and drowsy. Key: add gentamicin, a second anti-gram-negative agent, per the 2023 guideline A6b (reserve one for clinically unstable patients). Vancomycin and carbapenems are not among the options, so there is one key. Tagged pf KF3. No catalogue item keys escalation to a second agent. |

## How uniqueness was checked

I read the full catalogues for pediatric-fever, tox, delirium-agitation, infectious-diseases and shock (all in the scratchpad `q500/catalog/` folder). Then I grepped every catalogue file for each candidate decision before writing it: charcoal or decontamination keys, lumbar puncture or encephalitis after a toxidrome, agranulocytosis, methimazole, antithyroid drugs, lactate, hydrocortisone, aminoglycosides, a second gram-negative agent, meningococcal prophylaxis, ketamine and etomidate, orbital complications, and cough duration. Each kept decision is absent as a key. Each new stem detail, patient and number is new to the bank. The batch tests' trigram near-duplicate stem check passes.

## Candidates rejected as repeats

- Restoring 48 q4 (cool mottled legs): pediatric-fever-31 q3.
- Seizures as the complication to expect in 48: the tox catalogue keys "Seizures and ventricular dysrhythmia".
- Temperature management in 48: pediatric-fever-33 q3 ("Active cooling and sedation").
- Bladder catheter or benzodiazepines for agitation: tox-11 q5.
- Ciprofloxacin prophylaxis for 51's father: an adult-contact key already exists ("Ciprofloxacin 500 mg PO once").
- Contacts who need prophylaxis: pediatric-fever-04 q3.
- Periorbital swelling as a return sign for 50: a catalogue item keys periorbital swelling in sinusitis.
- Ketamine induction or the etomidate warning: many airway keys.
- Antibiotic timing within 1 hour, IO access, IM ceftriaxone, fluid boluses, balanced crystalloid, peripheral epinephrine: all keyed already.

## Mock-mode note (B6)

48 q2's update names dimenhydrinate, which implies the q1 key (anticholinergic poisoning). The decontamination decision needs the drug and its timing, so I left it and flag it here under B6. The first-round version had the same update, and verification passed q1. No other later update or option names an earlier key. 49 q3 says "a daily tablet", not the drug.

## Sources verified this round

- Chyka PA et al. AACT and EAPCCT. Position paper: single-dose activated charcoal. Clin Toxicol 2005. Abstract read (not routine, may consider up to 1 hour, contraindicated without an intact or protected airway). https://pubmed.ncbi.nlm.nih.gov/15822758/
- Venkatesan A et al. International Encephalitis Consortium. Clin Infect Dis 2013. Abstract and full text read (major criterion: altered mental status with no alternative cause identified, fever a minor criterion, lumbar puncture in all unless contraindicated). https://pubmed.ncbi.nlm.nih.gov/23861361/ and https://pmc.ncbi.nlm.nih.gov/articles/PMC3783060/
- Ross DS et al. ATA 2016. Recommendation 52 (stop the drug and measure white counts in a child with fever, mouth sores or pharyngitis), 16 and 49 confirmed through the Guideline Central summary. https://pubmed.ncbi.nlm.nih.gov/27521067/ and https://www.guidelinecentral.com/guideline/7110/
- Vicente N, Cardoso L, Barros L, Carrilho F. Drugs R D 2017. Full text read (stop the drug, IV broad-spectrum antibiotics after cultures, admission, G-CSF in selected patients with mixed evidence). https://pubmed.ncbi.nlm.nih.gov/28105610/
- SickKids AboutKidsHealth acetaminophen and ibuprofen sheet. PDF read (10 to 15 mg/kg, 480 mg for 32 to 44 kg, adult dosing only over 44 kg, up to 5 doses a day). https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf
- Weiss SL, Peters MJ et al. SSC children 2026. SCCM guideline page read (a strong recommendation to measure lactate, a suggestion against hydrocortisone once stability is restored, suggestions against vitamin C, thiamine and levothyroxine, crystalloids over albumin, no recommendation on bicarbonate, and a suggestion against routine procalcitonin to guide de-escalation). https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-the-management-of-sepsis-and-septic-shock-in
- Lehrnbecher T et al. 2023. Full text read through PMC BioC (A6b reserves a second anti-gram-negative agent or a glycopeptide for clinically unstable patients, and empiric antifungal therapy is for prolonged fever in high-risk patients). https://pubmed.ncbi.nlm.nih.gov/36689694/
- Unchanged and not reopened: Scharman 2006, Wald 2013, McDonough 2021, Thompson 2006, Gałązka 2021 (all confirmed by the verify reviewer).
- Removed from the file: the Canadian Antidote Guide physostigmine page and Dawson 2016. No question cites them now.

## Numbers rechecked

- 48: 5 x 50 mg = 250 mg, / 15 kg = 16.7 mg/kg. The drive ended at 15:00 and she arrived at 21:00, so the ingestion was at least 6 hours earlier. Onset 18:00 to 09:00 is 15 hours.
- 49 q2: 480 / 36 = 13.3, 650 / 36 = 18.1, 1 000 / 36 = 27.8, 160 / 36 = 4.4, 320 / 36 = 8.9 mg/kg.
- 49 q4: 0.2 x 10^9/L is below the 0.5 x 10^9/L (500/microlitre) agranulocytosis threshold.

## Uncertain, for the reviewer

- 48 q2: some toxicologists give charcoal beyond 1 hour for anticholinergics because gastric emptying slows. The key rests on the 6 hour delay together with the unprotected airway in a delirious toddler.
- 48 q3: CT before lumbar puncture in a confused child is a judgement. It is not offered as an option, so the key stands.
- 49 q4: Vicente is a narrative review, not a guideline. No pediatric guideline on the antibiotic step was found.
- 52 q3: A6b reads "a second anti-Gram-negative agent or a glycopeptide". Vancomycin is not offered, so gentamicin is the single key. The guideline does not name a specific aminoglycoside.
- 51 q2 tag KF1 and 49 q3 tag KF1 read "other factors" in KF1 broadly (a host drug, a lactate). The other possible tag is KF2.

## Tests

`npx tsc --noEmit -p . 2>&1 | grep 'samps/s56'` printed nothing. `SAMP_BATCH=s56 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 112 tests passed.

## Round 3

Applied the fixes from `docs/reviews/q500-verify2-s56.md`. SAMPs 50 and 52 passed and were not touched. Nothing else changed.

- pediatric-fever-48: added `alsoTopics: ["tox", "infectious-diseases"]`, which matches its q2 and q3 tags.
- pediatric-fever-51: added `alsoTopics: ["shock"]`, which matches its q3 tag.
- pediatric-fever-49 q3: the explanation now presents methimazole as an inference ("her daily tablet is most likely an antithyroid drug such as methimazole"). The update still says only "a daily tablet".
- pediatric-fever-49 q1 (optional fix, done): the scale is now named "the Burch-Wartofsky point scale for thyroid storm, which the ATA guideline uses".
- Coordinator ruling noted: 3-question SAMPs are acceptable where no new decision exists.

Tests: the s56 type check grep printed nothing. `SAMP_BATCH=s56 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 112 tests passed.
