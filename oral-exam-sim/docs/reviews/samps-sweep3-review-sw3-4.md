# Sweep 3 rebuild review, label sw3-4

Independent review of the five SAMPs rebuilt in docs/reviews/samps-sweep3-sw3-4.md. Files: src/samps/s34/delirium-agitation.ts and src/samps/s53/tox.ts. No commit. reviewed stays false.

## Verdicts

| id | verdict | summary |
| --- | --- | --- |
| delirium-agitation-23 | fixed | The alternate agent key rested on facts the stem did not give. Two mock-mode cues. One wrong claim about the Public Guardian. |
| delirium-agitation-24 | fixed | q1 source did not cover the claim. Key was the longest option in all three single questions. |
| delirium-agitation-32 | fixed | q4 had a defensible second answer, olanzapine. Two mock-mode cues. |
| tox-40 | fixed | Two mock-mode cues to the CT key. Stem made full thickness necrosis implausible. |
| tox-42 | fixed | A distractor was called wrong on a false ground, hemolysis. The q3 key was already shown in the stem. A mock-mode cue to the q1 key. |

Key features match `git show HEAD` for all 20 questions. No SAMP needed a re-rebuild.

## One row per question

| id | q | kf | verdict | finding and change |
| --- | --- | --- | --- | --- |
| delirium-agitation-23 | q1 | 1 | pass | Fluctuating attention fits Inouye 2006. The distractors are features of the dementia itself. |
| delirium-agitation-23 | q2 | 5 | fixed | PDA s9(2)(b) confirmed: 2 service providers, at least one a physician or psychologist, when no one is named to determine capacity. The explanation said "names no one to judge capacity", but the stem did not say so. That fact is now in the stem. The explanation now cites s9 and the s9(3) duty to keep a written record, which replaces "the reasons are recorded". |
| delirium-agitation-23 | q3 | 5 | fixed | The Act has no rule that an alternate agent acts when the first agent cannot be reached. s16 covers agents who disagree, not a substitute agent. s19(2)(b) only requires notifying the nearest relative, and s24 allows emergency care. The key therefore depended on the directive's own terms, which s7(1)(a) allows. The stem now says the niece is alternate "if his son cannot be reached". The explanation cites s7, s19 and s24. It said "The Public Guardian acts only where no designated agent is available", which the Act does not say. It now says the Public Guardian is an agent only when named (s7(4)) and otherwise investigates complaints (s24.2). The update "The declaration is made" gave away the q2 key in mock mode. It now reads "His directive is now in effect". |
| delirium-agitation-23 | q4 | 5 | fixed | Key confirmed under s10.1(2) and s21. The option "Rely on the earlier declaration" cued q2. It now reads "Rely on the earlier finding of incapacity", which also stops the key being the longest option. "Ask his niece, who consented before" cued q3. It now reads "Ask his niece to decide for him". |
| delirium-agitation-24 | q1 | 2 | fixed | Glucose and a medication list were cited to Grill 2011, which does not cover a general delirium workup. The citation is now Inouye 2006, which is added to sources. "commonest reversible cause" is softened to "among the most common". |
| delirium-agitation-24 | q2 | 2 | fixed | The fluoroquinolone claim is supported by Grill 2011 (DOI checked): GABA-A antagonism, and insomnia, confusion and hallucinations within days. The key was the longest option. The distractors now read "Acute urinary retention from prostatitis" and "Alcohol withdrawal syndrome". |
| delirium-agitation-24 | q3 | 5 | fixed | The CMPA guide (4th edition, October 2024 revision, confirmed) gives the understand-and-appreciate test and the value of a note made at the time. It does not itemize what a capacity record should contain, so the key is a reasonable reading rather than a quotation. The key was the longest option. The distractor now reads "A diagnosis of delirium and its likely cause". |
| delirium-agitation-24 | q4 | 2 | fixed | The class effect explains why levofloxacin is wrong. The key was the longest option. The distractor now reads "Continue it and add a sedative at night". A minor cue remains: q4's options, such as halving the dose, point to the drug named in q2. The stem already makes ciprofloxacin the obvious suspect, so this was left. |
| delirium-agitation-32 | q1 | 2 | pass | CT head and sodium for small cell cancer with morning headache. The distractors are wrong for the reasons given. |
| delirium-agitation-32 | q2 | 3 | pass | BETA de-escalation (Richmond 2012, PMC3298202) calls for an adequate number of trained staff and least restrictive measures. The key is consistent with that. |
| delirium-agitation-32 | q3 | 4 | fixed | Knox 2012 (PMC3298214) says: "medication should be administered to calm a patient who has been placed in restraints". The key matches. The q3 update "Back inside she..." gave away the q2 key. It now reads "An hour later she...". The q4 prompt "Which of the following medications" implied the q3 key. That prompt was changed, see q4. |
| delirium-agitation-32 | q4 | 4 | fixed | Olanzapine 5 mg IM is a low QT risk antipsychotic, so a reader of Beach 2018 could defend it at a QTc of 520 ms. It was replaced by ziprasidone 10 mg IM, which carries a high QT risk. Quetiapine PO became "Continued restraint without medication", so q4 no longer assumes a drug is given. The key is now the fourth option. The explanation now names ondansetron, from the stem, as a QT drug to stop. It also says benzodiazepines can deepen delirium, so the dose is kept small. |
| tox-40 | q1 | 4 | pass | Consistent with Hoffman NEJM 2020 (PMID 32348645): no charcoal, no lavage, no neutralization, and no dilution once symptoms are established. |
| tox-40 | q2 | 7 | pass | CT with contrast is the only reasonable answer here, supported by Martino 2025 and the Chirica CT-led series. Endoscopy is not offered. No distractor is equally right. |
| tox-40 | q3 | 5 | pass | Early perforation with mediastinitis is correct. Aspiration is the weakest distractor but is still clearly less likely. |
| tox-40 | q4 | 4 | fixed | The update "The CT shows ... walls do not take up contrast" and the option "repeat CT" gave away the q2 key. The update now describes "necrosis through the full thickness of the wall" without naming a modality. The option now reads "Observation with repeat imaging in 24 hours". "Emergency operation by general surgery" became "Emergency surgical resection", because thoracic surgery often does this in Canada. The stem said "He spat most of it out", which made transmural gastric necrosis implausible. It now says he swallowed it. The stale comment headers for 40 and 42 were corrected. |
| tox-42 | q1 | 4 | fixed | Stopping the infusion is supported by Zar 2007, and dialysis is kept for severe or persisting toxicity. The q4 option "Propylene glycol in the lorazepam" cued this key in mock mode. It now reads "Propylene glycol from a drug solvent". |
| tox-42 | q2 | 7 | fixed | Yahwak 2008 (abstract checked) supports screening with the osmolal gap at 1 mg/kg/day or more of lorazepam. A gap of 10 or more predicts a high propylene glycol level, and 12 or more predicts clinical toxicity. This patient gets 192 mg/day, about 2.5 mg/kg/day, and the explanation now states that. "Blood culture with procalcitonin" was arguable in an intubated patient with a lactate of 3.8 mmol/L. It was replaced by "Serum ammonia concentration". |
| tox-42 | q3 | 5 | fixed | The explanation said hemolysis is "not a feature" of propylene glycol accumulation. That is false: hemolysis is a recognized effect. The distractor was replaced with "Hypocalcemia with tetany" (ethylene glycol). The stem already showed creatinine 168 umol/L and falling urine output, which gave away the "anticipate" key. Creatinine is now 96 umol/L (baseline 80), urine output is no longer mentioned, and the explanation was adjusted. |
| tox-42 | q4 | 3 | pass | Recomputed: 2 x 142 + 6.0 + 6.0 = 296, so the osmolal gap is 320 - 296 = 24. The anion gap is 142 - 101 - 15 = 26, which is more than a lactate of 3.8 explains, consistent with D-lactate. One distractor was lengthened to "Ethanol remaining from his last drinks" so the key is not the longest option. |

## Overlap

simcheck ran on the current text of each SAMP. I also searched all batches with grep for propylene glycol, fluoroquinolones, personal directives, caustic ingestion, small cell cancer, QTc above 500 ms, distal radius fracture and patients walking out. The SAMPs were checked against the signed clusters in sweep3-ss-merged.json. None of the five appears in a cluster.

- tox-40 against airway-38 (0.26): both involve swallowed sodium hydroxide. airway-38 keys only airway decisions. No shared key. Pass.
- tox-42 against tox-06 (signed, 0.23): tox-06 is ethylene glycol and lists propylene glycol only as one accepted cause in a write-in answer. No shared key. Pass.
- delirium-agitation-24 against delirium-agitation-35 and delirium-agitation-16 (both new, same batch): all three follow the same outline. A new drug is started days earlier, the patient becomes delirious, the drug is stopped and capacity is assessed. The agents, mechanisms and specific teaching differ: fluoroquinolone class effect, anticholinergic retention, and renal accumulation of pregabalin. "Stop the drug" is keyed in all three. Judged borderline but acceptable. Flagged below.
- delirium-agitation-23 and delirium-agitation-32: nothing above 0.15. There is no other Alberta directive SAMP, and delirium-agitation-12 (signed) keys low-dose haloperidol, not a QTc-driven benzodiazepine.

## Checks

- SAMP_BATCH=s34 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 528 passed. One interim failure, on the option length spread for delirium-agitation-24 q2, was fixed.
- SAMP_BATCH=s53 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 743 passed. Key position and longest key caps are included.
- npx tsc --noEmit -p .: clean.

## For the physician

- delirium-agitation-32 q4 keys lorazepam 0.5 mg IV for a restrained, delirious 68-year-old with a QTc of 520 ms. The CCSMH delirium guideline and recent geriatric reviews advise against benzodiazepines in delirium except for alcohol or sedative withdrawal. They also report more adverse events with benzodiazepines than with haloperidol. The key holds only because every antipsychotic now offered carries a high QT risk: droperidol, IV haloperidol and ziprasidone. Olanzapine was removed because low-dose olanzapine IM with telemetry is a defensible choice at this QTc. Please confirm you accept a benzodiazepine as the teaching point, or say whether you prefer a QTc above 550 ms or a different stem.
- delirium-agitation-23 q3 now rests on the directive's own terms. The niece is named as alternate "if his son cannot be reached", and PDA s7(1)(a) lets a directive set out agents and their authority. The Act has no free-standing rule for alternates. Please confirm this matches how Alberta Health Services reads directives that name an alternate.
- delirium-agitation-24 q3 keys "the findings behind the capacity decision". The CMPA consent guide supports the capacity test and notes made at the time, but it does not list what a capacity note must contain. The key is a reasonable reading, not a quotation.
- delirium-agitation-24 is the third drug-induced delirium SAMP in batch s34, after 16 and 35. Each keys stopping the drug. You may wish to vary one of them.
- tox-40 keys a CT-led pathway, CT with contrast and then resection for full thickness necrosis. Some centres still use endoscopy first. Endoscopy is not an option, so the key stands under either approach.
- tox-42 now shows early kidney injury (creatinine 80 to 96 umol/L) so that q3 asks you to anticipate it rather than name it. The explanation of the anion gap assumes a lactate assay that measures only the L form, as in the writer's note.
