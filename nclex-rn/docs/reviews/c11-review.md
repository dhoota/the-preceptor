# c11 adversarial review

Scope: every file in `src/bank/c11/`. That covers five case studies of six items each from `index.ts`, the shared `helpers.ts`, and `extra.ts`. The two items in `extra.ts` (rn-c11-8 and rn-c11-9) are not imported by `index.ts`. They were reviewed as well.

Both lenses were applied. Every number was recomputed with a script. Ibuprofen gives 10 * 11 = 110 mg, 100 / 5 = 20 mg/mL and 110 / 20 = 5.5 mL. The distractors 1.1 mL, 2.75 mL and 11 mL match their stated errors. Every temperature pair, the BUN pair of 26 mg/dL (9.3 mmol/L) and the creatinine pair of 0.8 mg/dL (71 micromol/L) convert within 3 percent. The seclusion clock times of 1115 and 1415 are correct.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c11-2-3 | stem | "While waiting for imaging" told the reader a head study was already ordered. That cued the Head CT key in the next item, rn-c11-2-4 | B | medium |
| rn-c11-2-3 | stem | Added "no fever or diarrhea" so the "no diarrhea" claims in rn-c11-2-4 trace to the case | B | high |
| rn-c11-2-3 | rationale | Said "bruises on the ear". The case shows one 2 cm bruise on the left ear | B | high |
| rn-c11-2-4 | rationale, stool culture why | Said he has no diarrhea. The case never said so. Fixed through the rn-c11-2-3 stem | B | high |
| rn-c11-2-5 | rationale, two tokens | Called the partner "he" and "his". The case never gives the partner's sex. Changed to neutral wording | B | high |
| rn-c11-3-5 | rationale | Left out the tramadol label's own warning against prescribing it for clients at risk of suicide. That is the strongest reason to clarify for this client. Added one sentence | A | medium |
| rn-c11-3-3, rn-c11-3-4 | sources (SRC.tjc) | Cited the 2019 R3 Report on NPSG 15.01.01. The Joint Commission replaced it with National Performance Goal NPG.08.01.01, effective January 2026. The citation now points to the current goal | A | high |
| rn-c11-5-1, rn-c11-5-3, rn-c11-5-4 | rationale, whys, topic | Called the neighbor "named". The case only shows "the man next door". The duty to protect turns on an identifiable victim. Changed to "identified" or "identifiable". "Most state laws" became "many state laws" because the laws vary | A, B | medium |
| rn-c11-5-2 | rationale | "The adverse effects likely led him to stop the drug" was speculation with no support in the case. Removed | B | high |
| rn-c11-9 (extra.ts) | rationale | Said "this client has asthma". The stem gives hypertension only. Giving propranolol to a client with asthma would itself be the error. Rewrote the rationale around the key, abrupt stopping, and kept the bronchospasm teaching point | B | high |
| rn-c11-8 (extra.ts) | option 2 | "Elevate the bed head 30 degrees" was the same action as the key "Raise the head of the bed". Two options were defensible. Replaced it with "Slow the feeding rate by half" | A | high |

Items checked with no defect found: rn-c11-1-1 to rn-c11-1-6, rn-c11-2-1, rn-c11-2-2, rn-c11-2-6, rn-c11-3-1, rn-c11-3-2, rn-c11-3-6, rn-c11-4-1 to rn-c11-4-6, rn-c11-5-5 and rn-c11-5-6.

Frameworks behind the prioritize keys. rn-c11-1-3 and rn-c11-2-3 turn on airway first, then neurologic deterioration. rn-c11-3-3 puts safety over physiological needs. rn-c11-4-3 puts an actual physiological deficit over conditions that are not present. rn-c11-5-3 puts the immediate risk to an identifiable person first. rn-c11-5-6 follows NCSBN and ANA delegation, where the RN keeps accountability.

## Key changes

None. Every key was confirmed.

## Sources verified

- AAP Subcommittee on Febrile Seizures 2011, Pediatrics 127(2):389-94. PubMed record confirmed (PMID 21285335). https://pubmed.ncbi.nlm.nih.gov/21285335/
- AAP 2008 long-term management of simple febrile seizures, Pediatrics 121(6):1281-6. PubMed record confirmed (PMID 18519501). https://pubmed.ncbi.nlm.nih.gov/18519501/
- Sullivan JE, Farrar HC 2011, Pediatrics 127(3):580-7. PubMed record confirmed (PMID 21357332). https://pubmed.ncbi.nlm.nih.gov/21357332/
- CDC First Aid for Seizures. Confirms calling 911 after 5 minutes, turning the person onto the side, and not holding the person down or putting anything in the mouth. https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html
- Christian CW, AAP 2015, Pediatrics 135(5):e1337-54. PubMed record confirmed (PMID 25917988). https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse
- Pierce MC and others 2021, JAMA Network Open 4(4):e215832. Confirms ear and torso regions, any bruise at 4.99 months or younger, and patterned bruising. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2778559
- Zubler JM and others 2022, Pediatrics 149(3). PubMed record confirmed (PMID 35132439). The CDC 4-month page lists steady head control, hands to mouth and pushing up onto elbows or forearms. https://www.cdc.gov/act-early/milestones/4-months.html
- Child Welfare Information Gateway, Mandatory Reporting of Child Abuse and Neglect, State Statutes series, May 2023. https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/
- Barr RG and others 2009, Pediatrics 123(3):972-80. PubMed record confirmed (PMID 19255028). https://pubmed.ncbi.nlm.nih.gov/19255028/
- Stanley B, Brown GK 2012, Cognitive and Behavioral Practice 19(2):256-264. Crossref record confirmed (doi 10.1016/j.cbpra.2011.01.001). https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630
- The Joint Commission, National Performance Goals Effective January 2026, NPG.08.01.01. Text read, including the environmental risk assessment, validated screening and monitoring of clients at high risk. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- FDA Ultram label, revised 09/2021. Confirms serotonin syndrome with serotonergic drugs, seizure risk with a recognized risk for seizures such as alcohol and drug withdrawal, and "Do not prescribe for suicidal or addiction-prone patients". https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020281s049lbl.pdf
- Sun Pharmaceutical lithium carbonate label on DailyMed, October 2023. Confirms that dehydration and low sodium raise toxicity risk, that NSAIDs raise lithium levels, and that lithium can cause hypothyroidism and fetal harm. It also confirms baseline renal and thyroid tests. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display
- 42 CFR 482.13(e) text read through the eCFR API. Confirms no standing or PRN orders, 4 hours for adults, a face-to-face evaluation within 1 hour, and ending at the earliest possible time. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13
- FDA Invega Sustenna label, revised 9/2024. Confirms 234 mg on day 1 and 156 mg one week later, both in the deltoid. Maintenance goes in the deltoid or gluteal muscle. Deltoid initiation helps reach therapeutic levels rapidly. Tolerability is first established with oral paliperidone or risperidone. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022264s037lbledt.pdf
- NCSBN and ANA National Guidelines for Nursing Delegation, effective 4/29/2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Boullata JI and others, ASPEN Safe Practices for Enteral Nutrition Therapy, JPEN 41(1):15-103. Crossref record confirmed (doi 10.1177/0148607116673053). This is cited in extra.ts.
- Halter, Varcarolis 9th edition 2022. The ISBN 9780323697071 page resolves at Elsevier. Hockenberry, Wong's 12th edition 2023, Potter, Fundamentals 11th edition 2023, and Vallerand, Davis's Drug Guide 18th edition 2023 are current textbook editions. They have no URL.
- NCSL, Mental Health Professionals' Duty to Warn. The page returned 403 to automated fetches and could not be read. The claim that it supports is general and is also covered by Halter.

## Needs Arjan's decision

- rn-c11-8 and rn-c11-9 in extra.ts are stand-alone items in a case batch, and index.ts does not import them. They were fixed but still need a decision on whether they belong in c11.
- rn-c11-8 has a one-line rationale built on a single source. The ASPEN 2017 guidance also advises against routine residual checks in some settings. Confirm that the residual volume distractor fits current practice.
- The NCSL duty to warn page could not be fetched. Confirm the URL is still live, or replace it with the state statute summary the team prefers.
- rn-c11-1-5 gives ibuprofen to a toddler who had no wet diaper for 10 hours. The stem shows she is now drinking. Confirm whether a hydration note in the rationale is wanted.

## Summary

Items reviewed: 32, meaning 30 case items and 2 extra items. Defective items: 12. Fixes: 11 table rows covering 15 field edits and one shared source. Key changes: 0. Tests: `BATCH=c11 npx vitest run tests/bank.test.ts` passes 44 of 44, and `tsc` reports no errors in bank/c11.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
