# Batch s30 review

Adversarial review of batch s30 (40 Management of Care items and 10 Safety and Infection Prevention and Control items). Scope was all 50 items in `part1.ts` to `part5.ts`, which `index.ts` imports in full. There is no extra file. Both lenses and the uniqueness lens were applied to every item. Every number in every stem, why and calc block was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s30-26 | options[3].why | The why said ordinary lenses do not block laser energy. Clear glass and polycarbonate do absorb the 10 600 nm carbon dioxide wavelength. The real reasons are no optical density rating for the laser and no side shields. Why rewritten. | A | high |
| rn-s30-19 | rationale | "Staff stabilize the client" was vague and implied no CPR until the client leaves Zone IV. ACR guidance has trained MR staff start basic life support while the client is moved out. Sentence rewritten. | A | medium |
| rn-s30-36 | whole item | Same teaching point and calculation as rn-s14-34: daily kcal from a 1.5 kcal/mL formula on a continuous pump. The shortage framing does not change the point. Marked for pull. | uniqueness | high |
| rn-s30-29 | whole item | Same teaching point as rn-s14-44: sorbitol in liquid drugs causes diarrhea in a tube-fed client. Blank 2 is cued by the stem, and the blank 1 and blank 2 distractors are strawmen. A unique version needs a full rewrite. Marked for pull. | uniqueness, A | high |

Both edited items carry `version: 2`. The two pulled items were not edited.

## Key changes

None.

## Writer flags resolved

- rn-s30-04: confirmed. The NCSBN flowchart, reproduced by the North Dakota board, puts the prohibition question right after the activity is described. It ends with accepting accountability. Every why in the item matches.
- rn-s30-25 and rn-s30-26: wavelength-matched eyewear is standard laser safety practice. The defect found was a different one, fixed above.
- rn-s30-11, 22 and 23: the AAP 2013 and ASHP 2018 citations are confirmed in PubMed. The teaching points (defer predictive testing for adult-onset conditions, committee-led allocation, no hoarding) match the published positions. No change.
- rn-s30-50: blank 1 overlaps rn-s08-14 on who marks the site. The new points are a direct request to the bedside nurse, the nurse not being an allowed delegate and the time-out timing. Kept. The 2026 Joint Commission text NPG.01.06.02 EP 3 was read and supports every why.
- rn-s30-49: a correctly sized cuff is a standard part of bariatric room preparation. Kept.
- rn-s30-27: one option out of six on kidney dosing. Kept.

## Uniqueness

Each item's topic and teaching point were grepped against the 2,000-item inventory and the 500 new items. Overlaps reviewed and judged distinct:

- rn-s30-03 against rn-s03-17. The older item asks whose practice law applies. This item tests moving, residence and discipline.
- rn-s30-30 against rn-s08-09. The older item keys a friction-reducing sheet for an 82 kg client. This item keys a ceiling lift for a 172 kg client who cannot assist. Medium confidence.
- rn-s30-31 and rn-s30-02 against rn-s06-16. The older item is mother teaching. These test warning behaviors and the staff response.
- rn-s30-34 against rn-s13-12. The older item computes a pump rate. This item reads a trend and refers to the dietitian.
- rn-s30-47 against rn-s14-05. The older item picks low-potassium snacks. This item tests cultural adaptation through the dietitian.
- rn-s30-09 and rn-s30-43 against rn-s02-21 and rn-s31-12. Those test disclosure to public health and the hepatitis A response. These test list membership and outbreak recognition.
- Inside the batch, rn-s30-01 and rn-s30-45 share the single-state point. rn-s30-45 adds the federal VA exception, so both stay.

## Sources verified

- NCSBN, Nurse Licensure Compact FAQs: 60 days to apply after a move, unresolved discipline as a disqualifier, single-state licenses for noncompact residents. https://www.nursecompact.com/FAQs.page
- NCSBN Scope of Nursing Practice Decision-Making Framework flowchart, North Dakota board copy (Ballard et al 2016, JNR 7(3):19). https://www.ndbon.org/wp-content/uploads/2025/07/Scope-of-Nursing-Practice-Decision-Making-Framework-10-22.pdf
- CDC, 2026 National Notifiable Conditions: pertussis, Lyme disease, hepatitis A acute, salmonellosis, streptococcal toxic shock syndrome, VISA and VRSA, novel influenza A, pediatric influenza deaths, foodborne disease outbreak, measles. https://ndc.services.cdc.gov/search-results-year/
- ANA Code of Ethics 2025, provisions 1.4, 2.2, 2.3, 3.4 and 3.5, read in full. https://codeofethics.ana.org/provisions
- The Joint Commission, National Performance Goals 2026, NPG.01.06.02 and NPG.02.02.01 read in full. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- NHGRI, Genetic Discrimination: health insurers and employers of 15 or more covered, life, disability and long-term care insurance not covered. https://www.genome.gov/about-genomics/policy-issues/Genetic-Discrimination
- ACR MR safe practice guidance on arrests in Zone IV, through secondary sources (APSF newsletter). The ACR full text was not reachable. https://www.apsf.org/article/mri-compatible-handle-and-blades/

## Needs the Preceptor team's decision

- Pull rn-s30-29 and rn-s30-36 for duplication with rn-s14-44 and rn-s14-34.
- rn-s30-30: overlap with rn-s08-09 is judged acceptable. A stricter reading could pull it.
- The `meta()` default in `common.ts` sets `reviewed: true`. All 50 ids are in `docs/signoff.json`, so the gate passes. Left untouched as instructed.

## Summary

- Items reviewed: 50
- Passed unchanged: 46
- Fixed with key unchanged: 2
- Marked for pull: 2
- Key changes: 0
