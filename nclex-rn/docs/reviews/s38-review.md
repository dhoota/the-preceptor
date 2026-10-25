# Batch s38 adversarial review

Reviewer: independent. Scope: all 50 stand-alone items in `src/bank/s38/` (part1.ts to part5.ts, with common.ts for shared sources). No other file in the folder holds items.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s38-03 | why, sources | The oxygen distractor said oxygen "can hide rising carbon dioxide". Miller 2009 does not say this. The why now says oxygen does not support the muscles or clear the retained carbon dioxide. NICE NG42 added for the symptoms of hypoventilation. | A2, A7 | medium |
| rn-s38-12 | sources | The Umpierrez 2024 URL pointed to a hospital news summary. It now points to the paper's DOI, checked on Crossref. | A7 | high |
| rn-s38-14 | stem | The formula distractor's why says the infant takes nothing by mouth. The stem never said so. The stem now states it. | B1 | high |
| rn-s38-16 | sources | Gosain 2017 does not name the irrigation fluid. It was replaced by the RCH Melbourne washout guideline (0.9% sodium chloride only) and the Children's Wisconsin teaching sheet (never tap water, electrolyte risk). | A7 | high |
| rn-s38-19 | rationale, why, sources | The milk claim rested on memory. The Creon label calls for an acidic soft food with a pH of 4.5 or less and bans crushing. The milk why and rationale now rest on that rule. Label added. | A2, A7 | medium |
| rn-s38-21 | sources | WFH 2020 could not be opened. MASAC Document 257 (2019) was added. It says factor is given before any imaging, especially after head trauma. | A7 | high |
| rn-s38-23 | why | The heparin-induced thrombocytopenia why said the client had received no heparin. The stem never says so. The why now rests on timing, since the disorder follows several days of heparin. | B1 | high |
| rn-s38-27 | why, sources | The 10 mmHg distractor why said a fall of 10 mmHg or less is normal. The 2025 ESC text defines pulsus paradoxus as a fall of at least 10 mmHg. The why now states only the arithmetic. The 2015 ESC source was replaced by the 2025 ESC guideline. | A1, A2 | high |
| rn-s38-28 | sources | Berlin 2012 needs PEEP, so it does not strictly fit a client on a nonrebreather. The 2024 global ARDS definition (Matthay) was added beside it. | A1 | medium |
| rn-s38-35 | rationale, why, sources | The rationale said ventilation always comes first. The 2024 AHA and AAP drowning update says CPR must include breaths and that a trained rescuer may start with breaths. The wording was softened and the update added. | A1 | medium |
| rn-s38-36 | option, why, rationale, sources | Lavonas 2011 recommends immobilizing and elevating the limb, not a "neutral position". It calls ice ineffective, and only aggressive cooling caused injury. The key option and the ice and tourniquet whys now match. Hinkle added for ring removal. | A2, A7 | high |

Every edited item carries `version: 2`. No key changed.

## Marked for PULL

Each pulled item carries a `// PULL (s38 review)` comment in its file. No item was deleted or renumbered.

| Item | Reason |
|---|---|
| rn-s38-01 | Same point as rn-c15-1-2. That case item sorts Guillain-Barre heart rate swings of 52 to 128/minute and BP swings as autonomic dysfunction. A unique point needs a full rewrite. |
| rn-s38-05 | Same point as rn-s25-12. Both ask for the findings of diabetes insipidus with near identical values: output about 420 to 450 mL/hour, specific gravity 1.002 to 1.003, sodium 149 to 151 and thirst. |
| rn-s38-06 | The opposite patterns are already taught by rn-s25-12 (diabetes insipidus) and rn-s22-33 (SIADH). New item rn-s36-45 also contrasts the two directly. |
| rn-s38-24 | Same point as rn-s24-32. Both are bleeding precautions select all items with rectal temperatures, IM injections, soft mouth care and longer puncture pressure. |
| rn-s38-26 | Near copy of rn-s23-13. Both have a 34-year-old with sharp pain after a viral illness that eases on leaning forward and a friction rub at the left sternal border. |
| rn-s38-46 | Same point as rn-s09-18. That item keys a newborn respiratory rate of 74/minute and nasal flaring as follow-up findings and acrocyanosis as expected. |

## Writer flags resolved

- rn-s38-02 against rn-s16-34. rn-s16-34 is a bow-tie that recognizes cholinergic crisis after extra doses. rn-s38-02 asks why the drug is held on the ventilator in a myasthenic crisis. The case rn-c15-2 never tests that reason. Distinct. Kept.
- rn-s38-26 and 27. The 2025 ESC guideline exists (Eur Heart J 46(40):3952, DOI 10.1093/eurheartj/ehaf192). Its full text was read. It keeps widespread ST elevation, PR depression and the friction rub. Item 26 is pulled for uniqueness. Item 27 now cites 2025.
- rn-s38-03. Morning headache, daytime sleepiness and disturbed sleep are listed in NICE NG42 as signs of respiratory impairment. The oxygen point was reworded so it no longer needs a source it lacked.
- rn-s38-08. Lenders 2014 names rebound hypoglycemia and hypotension as the main postoperative risks. It advises close BP, heart rate and glucose checks for 24 to 48 hours. The insulin mechanism is standard physiology. No change.
- rn-s38-16 and 19. See fixes. Both now rest on sources that state the point.
- rn-s38-36. See fixes.
- rn-s38-39. The Kwiatt 2013 full text (PMC3665122) was read. It advocates early fixation of long bone fractures to reduce fat embolism. It reports 39% ARDS with fixation delayed past 24 hours. It says heparin has unproven benefit. Key confirmed. No change.
- rn-s38-42. ACOG 222 gives the HELLP thresholds in `refs` and the 160 or 110 mmHg severe range. Magnesium sulfate and IV labetalol are both standard actions. Leaving betamethasone out of the action list avoids a second defensible key. No change.
- rn-s38-46. Pulled for uniqueness. The refs are not at issue.

## Other checks

- Uniqueness. Every item was grepped against the inventory, the case list and the other new batches. Beyond the pulls, these sit near existing items but test a new point. rn-s38-07 (blockade order) against rn-s22-27 (recognizing pheochromocytoma), which the writer missed. rn-s38-23 (lab trend of DIC) against rn-s22-35 (bleeding signs). rn-s38-27 (measuring the pressure gap) against rn-c14-5 (tamponade). rn-s38-29 (ventilator actions) against rn-s25-01 (recognition). rn-s38-33 (sweating skin) against rn-s25-42 and rn-s31-46. rn-s38-38 (improving rhabdomyolysis) against rn-s24 trend of worsening. rn-s38-50 against rn-c10-4, whose croup is diagnosed by the provider.
- Numbers. A script recomputed the three calc items (346 mOsm/kg, 20 mmHg, CPP 54 mmHg) and every distractor value (198, 296, 1196, 36, 76 and 90). It also checked the creatinine pairs in item 38 and every Celsius and glucose pair. All agree.
- Key positions and length parity still pass the batch gates.

## Sources verified

- 2025 ESC myocarditis and pericarditis guideline: https://doi.org/10.1093/eurheartj/ehaf192 (Crossref and full text)
- NICE NG42, updated July 2019: https://www.nice.org.uk/guidance/ng42
- MASAC Document 257, 2019: https://bleeding.org/healthcare-professionals/guidelines-on-care/masac-documents/masac-document-257-guidelines-for-emergency-department-management-of-individuals-with-hemophilia-and-other-bleeding-disorders
- Creon prescribing information: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=073201aa-556d-4a70-918e-84e9616fd88d
- RCH Melbourne bowel washout guideline, 2023: https://www.rch.org.au/rchcpg/hospital_clinical_guideline_index/Bowel_Washout_Rectal/
- Children's Wisconsin rectal irrigation sheet, 2023: https://childrenswi.org/teaching-sheet/surgery/rectal-irrigation-at-home
- Matthay 2024 global ARDS definition: https://doi.org/10.1164/rccm.202303-0558WS
- AHA and AAP 2024 drowning update: https://doi.org/10.1161/CIR.0000000000001274 (Crossref and a published summary)
- Lavonas 2011, full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC3042971/
- Kwiatt 2013, full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC3665122/
- Lenders 2014, full text: https://academic.oup.com/jcem/article/99/6/1915/2537399
- Umpierrez 2024: https://doi.org/10.2337/dci24-0032 (Crossref)
- Kaplan 2024 AASLD: https://doi.org/10.1097/HEP.0000000000000647 (Crossref)
- Dow 2019 WMS hypothermia, checked through the AAFP summary: https://www.aafp.org/pubs/afp/issues/2020/1101/p571.html
- Crossref confirmed the remaining DOIs in common.ts: WFH 2020, ASH 2019, Levi 2018, Epstein 2019, ACC/AHA 2022, Berlin 2012, EAST 2012, Ditunno 2004, BTF 2017, Szpilman 2012, Bosch 2009, ACOG 222 and 178, SMFM 2016 and Sweet 2023.

## Needs Arjan's decision

- Six pulls for uniqueness. rn-s38-01 and 46 overlap only in part with their originals. A contained rewrite could not give either a new point, so both are marked.
- rn-s38-38 (rhabdomyolysis improving) and rn-s24's trend of worsening use the same markers in opposite directions. Kept as a distinct evaluate step. Arjan may prefer to pull it.
- `ADLER_PERICARDIUM` and `GOSAIN_HAEC` remain in common.ts. Items 26 (pulled) and 15 still use them.

## Summary

50 items reviewed. 33 passed unchanged, 11 fixed with the key kept and 6 marked for pull. No key changes. Defects were found in items 01, 03, 05, 06, 12, 14, 16, 19, 21, 23, 24, 26, 27, 28, 35, 36 and 46.
