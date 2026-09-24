# Batch s01 adversarial review

Scope: every .ts file in src/bank/s01. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s01-91 and rn-s01-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script. I ran the item gates on the two extra.ts items with a temporary test and then deleted it.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s01-92 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s01-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says so. They now say each agent has no effect on magnesium. | B | medium |
| rn-s01-92 | need, sources | Tagged MOC, but it tests an antidote (PPT). ACOG Practice Bulletin 222 added as the source for calcium gluconate. | B | medium |
| rn-s01-91 | why, option 1 | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". Its onset is 2 to 24 hours. That delay is why it is not first. Onset added to refs and Batterink 2015 added as a source. | A | high |
| rn-s01-91 | need | Tagged MOC, but it tests drug priority in hyperkalemia (PPT). | B | medium |
| rn-s01-44 | sources | Cited the 2025 NPSG.03.06.01. From January 2026 the hospital NPSGs are replaced by the National Performance Goals. Medication reconciliation is now NPG.14.05.01. | A | high |
| rn-s01-44 | cjmm | "What should the nurse do?" with an action key was tagged recognize cues. Now take action. | B | medium |
| rn-s01-14 | sources (SOCIAL in common.ts) | The NCSBN social media brochure at the cited URL is copyright 2024, not 2018. | A | high |
| rn-s01-46 | sources (POLST in common.ts) | Cited a 2023 form. The current National POLST Form is version 12.25, copyright 2025. It confirms Section A applies with no pulse and no breathing, and No CPR bars defibrillators, including AEDs. | A | high |
| rn-s01-34 | stem, rationale | The stem said the coarse crackles "clear with coughing". That shows the client clears secretions, which undercuts the key "Ineffective airway clearance". Now the crackles remain after a weak cough. | A | medium |
| rn-s01-12 | option 2 text, rationale | The why and the rationale said the sickle cell pain "fell" after morphine. The option gave only a pain of 4, with no earlier score. Now pain goes from 8 to 4. | B | high |
| rn-s01-16 | stem | The why for nonmaleficence said avoiding harm is "the argument the son uses". The stem gave no reason for the son's request. The stem now gives it. | B | high |
| rn-s01-03 | stem | A key ("Tell the provider the client has questions about risks") and the rationale relied on client questions that the stem never gave. The stem now has the client ask what could go wrong. | B | high |
| rn-s01-10 | stem | The rationale says the nurse holds the dose "after the concern is voiced twice", the TeamSTEPPS two-challenge rule. The stem had the nurse question it once. The stem now says twice. | B | medium |
| rn-s01-06 | stem | Options and whys call the client "him". The stem never gave the client's sex. Now "54-year-old male client". | B | low |
| rn-s01-26 | cjmm | "What should the nurse do?" with an action key was tagged analyze cues. Now take action. | B | medium |

I also changed the TJC_NPG entry in common.ts (used by rn-s01-50) to name NPG.01.01.01 and to link the hospital NPG PDF. The landing page returns 403. The PDF confirms two identifiers and no room number. The teaching did not change.

## Key changes

- rn-s01-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate is the antidote for magnesium toxicity (ACOG Practice Bulletin 222, SOGC Guideline No. 426). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Frameworks behind the priority and delegation keys

- Airway, breathing, circulation: 02, 12, 31 (airway, then glucose and the brain, then pain), 34.
- Acute over chronic and unstable over stable: 22, 38, 42.
- Delegation and assignment under NCSBN and ANA 2019 (assessment, planning, teaching and evaluation stay with the RN): 01, 08, 20, 21, 29, 40. Float assignment by competence: 25.
- Chain of command after two challenges (TeamSTEPPS): 10.

## Numbers checked

- 188 mg/dL is 10.4 mmol/L and 52 mg/dL is 2.9 mmol/L. Hemoglobin 6.8 g/dL is 68 g/L.
- Item 17: 1.9 is 46 percent of 4.1, so the fall rate fell by more than half, as the why says. Falls with injury go from 3 to 1.
- Item 38: every value in the rationale matches the 0800 and 2000 columns.
- Clock times, post-operative days and ages agree in every item. Item 07 at 0300 on day 1 fits "yesterday".

## Sources verified

- NCSBN and ANA, National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- NCSBN, A Nurse's Guide to the Use of Social Media, copyright 2024. It says nurses must promptly report an identified breach. https://www.ncsbn.org/public-files/NCSBN_SocialMedia.pdf
- The Joint Commission, National Performance Goals, Hospital Program, effective January 2026. NPG.01.01.01 (two identifiers, never room number) and NPG.14.05.01 (compare home drugs and resolve discrepancies, including omissions). https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- The Joint Commission Do Not Use list. QD and QOD are mistaken for each other, and the period after Q is read as I. Checked through a copy of the list, since the official page returns 403. https://anesth.utmb.edu/Residents/Joint_Commission/Prohibited%20Abbreviations%202011.pdf
- National POLST Form, version 12.25, 2025. https://polst.org/for-professionals/polst-form/
- 42 CFR 489.102 (written information at admission, record whether a directive exists, never condition care on one). https://www.law.cornell.edu/cfr/text/42/489.102
- 42 CFR 482.45 (timely notice to the OPO of imminent death, only an OPO representative or designated requester approaches the family). https://www.law.cornell.edu/cfr/text/42/482.45
- 45 CFR 92.201 (no minor child as interpreter except in an emergency, and limits on accompanying adults). https://www.law.cornell.edu/cfr/text/45/92.201
- Guttmacher Institute, Minors' Access to STI Services. All 50 states and DC allow it, minimum ages set by some states run from 12 to 14, and some states let providers tell parents. https://www.guttmacher.org/state-policy/explore/minors-access-sti-services
- NCC MERP verbal order recommendations, adopted 2001 and revised 2015. Write down, read back, get confirmation. https://www.nccmerp.org/recommendations-reduce-medication-errors-associated-verbal-medication-orders-and-prescriptions
- AHRQ TeamSTEPPS 3.0 Pocket Guide, 2023, and the two-challenge rule. https://www.ahrq.gov/teamstepps-program/curriculum/mutual/tools/rule.html
- IHI SBAR tool. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- NPSF, RCA2, 2015. It says the review does not address individual performance. https://www.ihi.org/library/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm
- ANA Code of Ethics, 2025 edition. https://codeofethics.ana.org/home
- ANA Principles for Nursing Documentation, 2010. The URL resolves. https://www.nursingworld.org/globalassets/docs/ana/ethics/principles-of-nursing-documentation.pdf
- PubMed records confirmed: Appelbaum NEJM 357(18):1834, 2007 (PMID 17978292). Jones, DeVita, Bellomo NEJM 365:139, 2011 (PMID 21751906). Naylor et al. JAGS 52(5):675, 2004 (PMID 15086645). Alfandre Mayo Clin Proc 84(3):255, 2009 (PMID 19252113). Magee et al. SOGC No. 426, JOGC 44:547, 2022 (PMID 35577426). ACOG PB 222, Obstet Gynecol 135:e237, 2020 (PMID 32443079). Batterink et al. Can J Hosp Pharm 68(4):296, 2015, which gives SPS onset as 2 to 24 hours (PMID 26327703, https://pmc.ncbi.nlm.nih.gov/articles/PMC4552230/).
- I could not open these pages because they returned 403, so I did not reverify them: the AHRQ CANDOR toolkit (2016), the AHRQ falls toolkit (2013), CMSA Standards (2022) and the HHS HIPAA Privacy Rule summary (2003). The NCSBN substance use page resolves but no longer lists the 2011 manual. Potter 11th, Yoder-Wise 8th, Hinkle 15th, Wong 12th, Beauchamp and Childress 8th and Langley 2nd are standard editions with the stated years.

## Needs Arjan's decision

- rn-s01-92: approve the key change above. Decide whether 91 and 92 join the bank. They are PPT items in a Management of Care batch.
- rn-s01-34: approve the stem change. The old cue could be read to support pain as the first problem.
- rn-s01-20 is tagged recognize cues but asks what to do first. I left it because its key is a bedside assessment. After my changes recognize has 5 items and analyze has 3, and all six steps are still used.
- Canada notes are empty in every item. Items 05, 19, 26, 30, 33, 36 and 46 rest on US law or US forms. They need notes in the Canada pass.
- rn-s01-35: the rationale names slander, which is not a choice. It is harmless and I left it.

## Summary

52 items reviewed: 50 in the bank and 2 in extra.ts. I made 16 fixes across 12 items: rn-s01-03, 06, 10, 12, 14, 16, 26, 34, 44, 46, 91 and 92. They include 1 key change (rn-s01-92, not in the bank), 1 false why (rn-s01-91), 3 stale or wrong citations (14, 44, 46), 1 stem cue that weakened the key (34), 5 claims that did not trace to the stem (03, 06, 10, 12, 16, plus the 92 whys) and 4 metadata tags (26, 44, 91, 92). After the fixes, tsc reports nothing for bank/s01 and BATCH=s01 vitest passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
