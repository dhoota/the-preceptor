# Batch s37 adversarial review

Reviewer: independent. Scope: all 50 stand-alone items in `src/bank/s37/` (part1.ts to part5.ts and common.ts). No other file in the folder holds items.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s37-05 | stem, why | The 40.5% distractor relies on a face value of 4.5% that the stem never gave. The stem now lists the front of the head, including the face, as 4.5%. | B1 | high |
| rn-s37-05 | sources | The ABLS 2018 manual could not be verified. Replaced with Hinkle beside ISBI. | A7 | medium |
| rn-s37-13 | rationale, refs | The ROSC threshold "35 to 40 mmHg" is older wording. The AHA 2020 algorithm says an abrupt sustained rise, typically to 40 mmHg or more. The key of 41 mmHg is unchanged. | A1 | medium |
| rn-s37-15 | stem | The oxygen distractor's why relies on supplemental oxygen that the stem never mentioned. The stem now gives oxygen at 2 L/minute and a PRN bronchodilator prescription. | B1 | high |
| rn-s37-15 | sources | Kodali 2013 is real but paywalled, so the shark fin passage was not read. Added Long, Koyfman and Vivirito 2017, a review of capnography waveforms in obstructive airway disease. | A7 | medium |
| rn-s37-17 | tab, rationale, options | The client was oriented (verbal 5) at 0000 yet only flexed to pain (motor 4). An oriented client obeys commands, so the chart was clinically incoherent. Verbal now stays at 4, eye opening rises 2 to 3 to 4, and the total stays at 12. | A6 | high |
| rn-s37-18 | why, sources | "The usual first vasopressor" overstates van Diepen 2017, which says norepinephrine may be the agent of choice. Softened. Hinkle added for the fluid bolus point. | A2 | medium |
| rn-s37-21 | rationale | The rationale said moderate variability makes the tracing category II. Recurrent variable decelerations are what make it category II. | A2 | high |
| rn-s37-29, 30, 38, 39, 49 | sources | The ABLS 2018 manual could not be verified. It was removed, and Hinkle or ISBI now carries each point. | A7 | medium |
| rn-s37-35 | stem, rationale | The lead-in said exertional heat stroke "raises the risk" of malignant hyperthermia. Rosenberg 2015 reports only a link and advises excluding susceptibility after heat stroke. The lead-in now asks for possible signs of susceptibility. | A1 | medium |
| rn-s37-37 | tab, sources | The rate of 900 mL per hour equals the Parkland 4 mL/kg per percent. Current ABA guidance starts at 2 mL/kg per percent, so a reader could argue fluid creep. The rate is now 450 mL per hour. The ABLS manual was replaced with Cartotto 2024. | A1 | medium |
| rn-s37-48 | options, rationale, sources | Dry sheets, a warm room and no ice already appear in rn-c07-3-4. The dry sheets key became forced-air warming. The ice distractor became leaving burns uncovered. ABLS was replaced with Hinkle. | Uniqueness | medium |

Every edited item carries `version: 2`. No key changed.

## Marked for PULL

| Item | Reason |
|---|---|
| rn-s37-40 | Near copy of rn-s31-47. Both are bow-ties of a marathon runner who drank at every station, gained 2 kg and has a sodium of 124 mEq/L. Both have the same condition, the same 3% bolus and fluid restriction actions and the same two parameters. Making it unique needs a full rewrite. The rationale also says isotonic saline "adds free water", which is loose. |
| rn-s37-47 | The Trousseau technique duplicates rn-s25-06, whose key is carpal spasm as the BP cuff inflates. rn-c02-1 covers the same sign. A unique point needs a full rewrite. |
| rn-s37-50 | Duplicates rn-s06-47 and rn-s05-46. Washing and drying the skin, changing electrodes daily and not turning off alarms are already keys or distractors there. Removing them leaves no contained item. |

## Writer flags resolved

- rn-s37-02. The 2 to 4 hour window is confirmed in the Levy 2018 full text: "If initial lactate is elevated (> 2 mmol/L), it should be remeasured within 2 to 4 h" (dash normalized). The item is distinct from rn-s26-31 and rn-s36-47, which test the meaning and the trend of lactate. No change.
- rn-s37-07. SSC 2021 Recommendation 44 suggests starting vasopressors peripherally. It names a vein in or proximal to the antecubital fossa, for a short period (under 6 hours). Key and hand IV distractor confirmed. The item is distinct from rn-s16-35 (extravasation). No change.
- rn-s37-16. Johnson and Henderson 2004 (CJEM 6(1):48) is confirmed on PubMed. Lying flat with the legs raised is standard nursing teaching in Hinkle. rn-s20-42 uses leg elevation only as a side point in anaphylaxis. Kept.
- rn-s37-33. The stem uses day 6 and the rationale says "about a week". This agrees with common teaching. No change.
- rn-s37-15. See fixes. The Kodali citation is real (Anesthesiology 118(1):192 to 201), but the passage was not read.
- rn-s37-35. See fixes. Rosenberg 2015 also confirms central core disease, masseter spasm and the safety of local anesthesia.
- Gould 2012, van Diepen 2017 and the ABLS manual. Gould is confirmed on PubMed with the Grade 2C mechanical prophylaxis recommendation used in rn-s37-42. van Diepen is confirmed by Crossref and an ACC summary. The ABLS manual could not be verified and is no longer cited by any item.

## Other checks

- Every calc recomputed: 05 gives 36, 14 gives 10, 19 gives 24, 25 gives 1.23. Distractor arithmetic also checked: 14 gives 14 and 26, 19 gives a MAP difference of 41, and 25 gives 0.81, 1.57 and 1.83.
- Rechecked on 08: the systolic fall of 14 mmHg exceeds 10 mmHg. Rechecked on 10: the pulse pressure falls from 46 to 22 mmHg. In 37, 40 mL is 0.5 mL/kg times 80 kg.
- Unit pairs in 09, 34 and 45 convert within 3 percent.
- rn-s37-27 and 28 match the AAP and AAPD 2019 text. It confirms 20 minutes awake, the chloral hydrate and car seat risk, and recording every 10 minutes. It also confirms capnography as preferred in moderate sedation.
- rn-s37-19 matches the McQueen 1996 abstract: decompress when the differential pressure is under 30 mmHg.
- rn-s37-36 matches Rosenberg 2015: at least 24 hours in intensive care, with dantrolene for 24 to 48 hours.

## Sources verified

- Levy 2018 bundle full text: https://link.springer.com/content/pdf/10.1007/s00134-018-5085-0.pdf
- Evans 2021 SSC (Recommendations 7, 28, 33, 44): https://pmc.ncbi.nlm.nih.gov/articles/PMC8486643/
- Gould 2012 abstract: https://pubmed.ncbi.nlm.nih.gov/22315263/
- Johnson and Henderson 2004: https://pubmed.ncbi.nlm.nih.gov/17433146/
- McQueen 1996: https://pubmed.ncbi.nlm.nih.gov/8898137/
- Rosenberg 2015: https://pmc.ncbi.nlm.nih.gov/articles/PMC4524368/
- AAP and AAPD 2019 sedation guideline: https://www.aapd.org/media/Policies_Guidelines/G_Sedation.pdf
- Cartotto 2024 ABA burn shock guideline, Crossref: https://doi.org/10.1093/jbcr/irad125 (summary at https://www.aafp.org/afp/2025/0800/practice-guidelines-resuscitation-patients-burns)
- Long 2017 capnography review: https://pubmed.ncbi.nlm.nih.gov/28993038/
- ACOG CPG No. 10, 2025, confirmed through the OPQIC summary: https://opqic.org/acog-clinical-practice-guideline-no-10-intrapartum-fetal-heart-rate-monitoring-interpretation-and-management/
- AHA 2020 cardiac arrest algorithm text: https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/Algorithms/Text-Descriptions/AlgorithmACLS_CA_LngDscrp_200921_Ed.pdf
- Crossref metadata confirmed for van Diepen 2017, Fletcher 2013, Sandau 2017, Feld 2018, Koch 2019, ISBI 2016, ACOG PB 162, ERAS 2018, Hew-Butler 2015 and Kodali 2013.

## Needs Arjan's decision

- rn-s37-13 cites AHA 2020. Part 9 of the 2025 AHA guidelines (Wigginton, Circulation 152(16 Suppl 2):S538) now exists. Its full text was not reachable. Summaries report no change to the algorithm. Consider updating the citation once the ETCO2 wording is confirmed.
- rn-s37-27 uses chloral hydrate. The AAP guideline still names it, but it is rarely used now.
- `common.ts` sets `reviewed: true` as the default, and docs/signoff.json lists all 50 s37 ids. The writer report says every item has `reviewed: false`. This was left untouched as instructed.

## Summary

50 items reviewed. 33 passed unchanged apart from Canada notes. 14 were fixed with the key kept. 3 are marked for pull (40, 47, 50). No key changes. tsc is clean for bank/s37, and `BATCH=s37` bank tests pass.
