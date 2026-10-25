# Batch s33 adversarial review

Scope: all 50 stand-alone items in `src/bank/s33/` (part1.ts to part5.ts, imported by index.ts). The folder held partial edits from an earlier reviewer who was cut off. The folder was reviewed as it stands, from scratch. Every why and rationale sentence was read against its stem. Uniqueness was checked against `inventory.txt`, `cases.txt`, `new500.txt` and a full text grep of `src/bank`.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
| --- | --- | --- | --- | --- |
| rn-s33-14 | version | Changed by the earlier reviewer after sign off. Content rechecked against the DEAR MAN order and kept. Version set to 2. | B | high |
| rn-s33-17 | version | Lighting action changed by the earlier reviewer after sign off. TIP 33 supports a quiet room with moderate lighting. Version set to 2. | A | high |
| rn-s33-22 | rationale, refs | Refs said withdrawal lasts 1 to 2 weeks. Connor 2022 says up to 2 to 3 weeks or longer in heavy users. | A | high |
| rn-s33-22 | rationale, option why | Claimed no fever and a flow sheet showing no confusion. The stem gives no temperature and does not chart confusion. Reworded to what the stem reports. | B | high |
| rn-s33-23 | parameters, rationale | The fluid balance parameter repeated rn-s11-31 (opioid withdrawal bow-tie). Replaced with a pain score parameter tied to the kratom pain plan. | uniqueness | medium |
| rn-s33-23 | condition why | Serotonin syndrome why cited "no fever". The stem gives no temperature. | B | high |
| rn-s33-29 | sources | Rose 2002 is old. Added NICE NG116 (2018), which advises against psychologically focused debriefing. | A | medium |
| rn-s33-30 | option, rationale | The retell in detail distractor repeated rn-s11-28 and rn-s33-29. Replaced with letting reporters interview relatives. The WHO guide says to shield people from media exposure. | uniqueness | high |
| rn-s33-31 | sources | Writer had not seen the stepfamily passage in Hockenberry. Added Papernow 2013, a stepfamily text that is declared in common.ts. | A | medium |
| rn-s33-44 | option, rationale, sources | The "ask who will wash the body" key repeated rn-s28-22. Made it Hindu specific (eldest son leads washing). Added the Hinduism Today reprint, which was read. | uniqueness, A | medium |
| rn-s33-45 | rationale, sources | "Same gender handling is preferred" overstated the source, which says staff of the same gender may handle the body. Added the SALDEF guide (2023) as a second, dated source. | A | high |

Every edited item carries `version: 2`. Keys and key positions are unchanged.

## Pulled

- rn-s33-33 (coping statements of an autism caregiver). It tests the same point as rn-s11-47. Both turn on a parent group and family help as supports that protect against caregiver strain. A fix would need a full rewrite. It is marked with a `// PULL` comment and left in place.

## Key changes

None.

## Writer flags resolved

- rn-s33-23 against rn-s11-31: the shared cues are the opioid-like withdrawal signs, which the kratom point needs. The actions and now both parameters differ. Kept with the fix above.
- rn-s33-45 against rn-s12-38: rn-s12-38 teaches asking a living client before surgery. rn-s33-45 teaches care of the body after death, uncut hair and keeping the body on the unit. Judged unique. Sources strengthened.
- rn-s33-44 against rn-s28-22: three of four keys are Hindu specific. The fourth was made Hindu specific. The handbook text was read through the Hinduism Today reprint. The Queensland Health page returns 403.
- rn-s33-31, 17, 18, 03, 04: TIP 33 was opened and supports a quiet room, moderate light, subdued speech and rapid cooling. Hinduja and Patchin, 3rd edition, Corwin 2023, was confirmed at the publisher. Papernow was added for item 31.
- rn-s33-20: steps are 10.0%, 11.1% and 25.0% by script. The last step equals the 25% every 2 weeks ceiling. The rationale calls it a larger step, which is accurate.

## Checks on content

- Benzodiazepine guidance: the 2025 joint guideline says initial cuts of 5 to 10% every 2 to 4 weeks, typically not more than 25% every 2 weeks, and slow or pause if symptoms emerge. Items 19 and 20 match.
- Cannabis withdrawal: onset 24 to 48 hours and peak at days 2 to 6 match Connor 2022. Item 21 is correct.
- Kratom: the review abstract names mitragynine and 7-hydroxymitragynine as partial mu opioid agonists. It lists yawning, runny nose, tearing, aches and diarrhea as withdrawal signs. Items 23 and 24 match.
- Slow breathing: Joseph 2022 rated the evidence as of the lowest certainty, with the larger effect in burn pain. Item 49 matches.
- Music: Lee 2016 pooled 97 studies and found lower pain, distress and opioid intake. Item 47 matches.
- Aromatherapy: NCI PDQ (updated 31 October 2024) notes allergic reactions after topical use, citrus phototoxicity and advice against large ingested amounts. Item 46 matches.
- Numbers: taper percentages, the 6 week and 4 week separation anxiety threshold, the 18 month vocal tic span and 38.9°C to 102.0°F were recomputed by script.

## Sources verified

- Brunner E et al. JGIM 2025, PMC full text read. https://pmc.ncbi.nlm.nih.gov/articles/PMC12463801/
- Connor JP et al. Addiction 2022, PMC full text read. https://pmc.ncbi.nlm.nih.gov/articles/PMC9110555/
- Bin Abdullah MFIL. Current Drug Targets 21(15):1566, 2020, abstract via Europe PMC and Crossref. https://pubmed.ncbi.nlm.nih.gov/32682371/
- SAMHSA TIP 33, 2021, PDF read. https://www.govinfo.gov/content/pkg/GOVPUB-HE20_400-PURL-gpo171771/pdf/GOVPUB-HE20_400-PURL-gpo171771.pdf
- WHO Psychological First Aid, 2011, PDF read. https://mhpsshub.org/wp-content/uploads/2018/10/9789241548205_eng.pdf
- NICE NG116, 2018, debriefing wording confirmed through secondary sources. The NICE page returned 403. https://www.nice.org.uk/guidance/ng116
- Rose SC et al. Cochrane CD000560, 2002, Crossref. https://doi.org/10.1002/14651858.CD000560
- Bradford Teaching Hospitals SPaRC Sikh page, read. https://sparc.bradfordhospitals.nhs.uk/?p=533
- Kular A, SALDEF, Sikh Patient's Guide for Healthcare Providers, 2023, PDF read. https://saldef.org/wp-content/uploads/Sikh-Patients-Guide-for-Healthcare-Providers-1.pdf
- Hinduism Today reprint of the Queensland Health handbook, 2013, read. https://www.hinduismtoday.com/magazine/january-february-march-2013/2013-01-educational-insight-a-health-care-provider-s-handbook-on-hindu-patients/
- Papernow PL, Routledge 2013, Crossref. https://doi.org/10.4324/9780203813645
- Hinduja S, Patchin JW, Corwin 2023, publisher page. https://www.sagepub.com/books/Book286130
- NCI PDQ Aromatherapy, 2024, read. https://www.cancer.gov/about-cancer/treatment/cam/hp/aromatherapy-pdq
- Lee JH, Journal of Music Therapy 2016, abstract read. https://academic.oup.com/jmt/article/53/4/430/973764
- Joseph AE et al. 2022, PMC read. https://pmc.ncbi.nlm.nih.gov/articles/PMC8891889/
- Crossref metadata confirmed for Peitzmeier 2017, Graham 2024, Williamson 2025, Litz 2009, Potenza 2019, Gameiro 2015, Pringsheim 2019, Lee 2015 (PC6) and Guan 2017.

## Needs the Preceptor team's decision

- rn-s33-33 is marked for pull.
- rn-s33-14 and rn-s33-17 were edited by the earlier reviewer after sign off. Their version is now 2, so they need approval again.
- rn-s33-45 still leans on two web guides. No dated government handbook for Sikh care could be opened.
- rn-s33-23 is rated difficulty 5, but the stem names kratom, so the condition slot is easy. Consider rating it 4.

## Summary

- Items reviewed: 50
- Passed unchanged: 40
- Fixed with the key kept: 9 (rn-s33-14, 17, 22, 23, 29, 30, 31, 44, 45)
- Marked for pull: 1 (rn-s33-33)
- Key changes: 0
- `npx tsc --noEmit -p .` shows no s33 errors. `BATCH=s33 npx vitest run tests/bank.test.ts` passes 61 of 61.
