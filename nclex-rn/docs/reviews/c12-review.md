# Batch c12 adversarial review

Scope: the five case studies in `src/bank/c12/case1.ts` to `case5.ts` (30 items), the shared sources in `helpers.ts`, and the two items in `extra.ts` (rn-c12-9 and rn-c12-8). `index.ts` does not import `extra.ts`. Those two items were reviewed in full and checked against every item gate from a scratch test outside `tests/`. Both pass.

Every number was recomputed with a script: all Celsius and Fahrenheit pairs, BMI 15.1, the phosphorus, magnesium, BUN, creatinine and glucose SI pairs, orthostatic changes (44/minute and 22 mmHg in case 1, 26 mmHg and 20/minute in case 5), the naloxone rate (100 mL/hour and each distractor's dose fraction), the piperacillin dose (2800 mg, 3150 mg combined, 933 mg, 8400 mg), the weight gain of 2.4 kg and the IV volume by 0600 on day 2 in case 3. All were correct.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c12-1-1 | refs | The orthostatic pulse limit of over 20/minute is the older SAHM 2014 value repeated in AAP 2021. SAHM 2022, also cited, uses a sustained rise over 40/minute for adolescents. Updated to the current limit. The key holds because the rise is 44/minute. | A | high |
| rn-c12-1-1 | rationale | "Both changes exceed the orthostatic limits of 20" was stale and vague. Rewritten to compare the pulse rise with 40/minute and the systolic fall with 20 mmHg. | A | high |
| rn-c12-3-1 | span why (surgical scars) | "Past surgery explains the adhesions" asserts adhesions the case never establishes. The CT shows only a transition point. Now says past surgery raises the risk of adhesions. | B | medium |
| rn-c12-4-3 | stem | The "risk for infection" why and the rationale say antibiotics are running. By item 3 the case showed only a preoperative antibiotic not yet given. Added "He is receiving IV antibiotics as prescribed." to the stem. | B | high |
| rn-c12-5-1 | passage, span, why, rationale | "The room spins" describes vertigo, which points to a vestibular cause. Orthostatic hypotension causes lightheadedness. The span now reads "Says she feels lightheaded when she stands" and the why and rationale match. | A | medium |
| rn-c12-2-5 | source (naloxone label) | The IMS naloxone label has no 2023 version on DailyMed. The versions are December 2022 and December 2024 (current). Year set to 2024. | A | high |
| rn-c12-5-2, rn-c12-5-3 | source (enoxaparin label) | The body named only DailyMed. The set id is the Meitheal Pharmaceuticals label, now named. | A | low |
| rn-c12-9 | option, why, rationale | Protamine sulfate reverses heparin, not magnesium. The rationale taught a false antidote. IV calcium (calcium gluconate) antagonizes magnesium toxicity. | A | high |
| rn-c12-9 | sources | SOGC Guideline No. 426 is real but its full text could not be opened to confirm the calcium statement. Added the Hospira magnesium sulfate label, which states that an injectable calcium salt should be immediately available and that IV calcium antagonizes magnesium. | A | high |
| rn-c12-8 | rationale | "This client has asthma" is a history detail the stem never gives. Removed. The rationale now names why the keyed statement needs teaching (rebound tachycardia) and why wheezing is reported (nonselective beta blocker). | B | high |

## Key changes

- rn-c12-9. Before: option 2 "Protamine sulfate" keyed. After: option 2 "Calcium gluconate" keyed. The key index is unchanged but the keyed content changed. Reason: protamine is the heparin antagonist and has no effect on magnesium. The magnesium sulfate label names IV calcium as the antagonist for magnesium intoxication. Arjan to approve.

## Checked and found sound

- Refeeding content in rn-c12-1-2, 1-3 and 1-4 matches ASPEN 2020 Table 5 (pediatric): more than 7 consecutive days of intake under 75 percent of need is a significant risk criterion, and low prefeeding potassium, phosphorus and magnesium are criteria. Electrolytes every 12 hours for 3 days, vital signs every 4 hours for 24 hours, thiamine before feeding and monitored intake and output are all in the ASPEN recommendations.
- rn-c12-2-5. The naloxone label gives 2 mg in 500 mL as 0.004 mg/mL and warns that some opioids outlast naloxone.
- rn-c12-2-6. The SAMHSA toolkit says to give naloxone and then call 911, to wait 2 to 3 minutes before a second dose, and that naloxone wears off after 30 to 90 minutes. It also names lost tolerance after abstinence. All rows hold.
- rn-c12-4-5. The Zosyn label gives 100 mg piperacillin per kg every 8 hours for appendicitis in children older than 9 months up to 40 kg. The ref matches the label wording.
- rn-c12-4-6. CDC 2017 says not to apply antimicrobial ointments, solutions or powders to the incision.
- rn-c12-5-2. The enoxaparin label gives 30 mg every 12 hours after knee replacement, first dose 12 to 24 hours after surgery.
- rn-c12-5-6. AAOS OrthoInfo lists fever over 100°F, new calf swelling or pain, wound drainage, removing loose rugs and walker use.
- Priority items: rn-c12-2-3 and rn-c12-3-3 are decided by airway and breathing first. rn-c12-5-3 is decided by acute and unstable over routine. rn-c12-3-5 follows NCSBN and ANA delegation, with the new constant pain kept for the registered nurse.

## Sources verified

- ASPEN refeeding, da Silva 2020, Nutr Clin Pract 35(2):178. Full text read. https://pubmed.ncbi.nlm.nih.gov/32115791/
- SAHM 2022, J Adolesc Health 71(5):648. Citation confirmed in Europe PMC. Orthostatic limit of over 40/minute for adolescents confirmed from the journal page summary. https://www.jahonline.org/article/S1054-139X(22)00577-8/fulltext
- AAP 2021, Pediatrics 147(1):e2020040279. https://pubmed.ncbi.nlm.nih.gov/33386343/
- Boyer 2012, N Engl J Med 367(2):146. https://pubmed.ncbi.nlm.nih.gov/22784117/
- Lavonas 2023 AHA focused update, Circulation 148(16):e149. https://pubmed.ncbi.nlm.nih.gov/37721023/
- SAMHSA toolkit PEP23-03-00-001. Full text read. https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001
- Naloxone label, IMS, current version December 2024. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=236349ef-2cb5-47ca-a3a5-99534c3a4996
- Zosyn label, Baxter, current version June 2026. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8db6bd91-2106-4bfd-8cc8-38aaf1e18d17
- Enoxaparin label, Meitheal, February 2024. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adfc2b23-00a5-4f05-a08b-83087e1e4843
- Magnesium sulfate in water label, Hospira, August 2026. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22ca78b4-f5a3-4144-cf89-5f633acf1e6d
- Bologna ASBO guidelines, World J Emerg Surg 13:24, 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/
- ASPEN Safe Practices for Enteral Nutrition, JPEN 41(1):15, 2017. https://pubmed.ncbi.nlm.nih.gov/27815525/
- AAP informed consent, Pediatrics 138(2):e20161485, 2016. https://pubmed.ncbi.nlm.nih.gov/27456510/
- CDC SSI guideline, JAMA Surg 152(8):784, 2017. https://pubmed.ncbi.nlm.nih.gov/28467526/
- CDC hand hygiene guideline, MMWR 51(RR-16), 2002. https://pubmed.ncbi.nlm.nih.gov/12418624/
- Freeman orthostatic hypotension consensus, Clin Auton Res 21(2):69, 2011. https://pubmed.ncbi.nlm.nih.gov/21431947/
- AAOS OrthoInfo Total Knee Replacement. https://www.orthoinfo.org/en/treatment/total-knee-replacement
- SOGC Guideline No. 426, J Obstet Gynaecol Can 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Davis's Drug Guide for Nurses, 18th edition, F.A. Davis, 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18

## Needs Arjan's decision

- Approve the rn-c12-9 key change above.
- rn-c12-9 and rn-c12-8 sit in `extra.ts`, which `index.ts` does not import. Both now pass every item gate. Decide whether they join the bank or are removed. Their ids do not follow the case id pattern.
- The AAOS OrthoInfo page shows no review date, so the year 2023 in `aaosTkr` could not be confirmed. The page does show Neil P. Sheth as contributor.
- Textbook statements rest on Halter (rn-c12-1-5 observation after meals, rn-c12-5-4), Wong (rn-c12-4-2 loose tooth, rn-c12-4-6 bath soak) and Brunner (rn-c12-5-6 pillow under the knee). These are standard teaching but no page was checked.
- rn-c12-3-5 keys the subcutaneous heparin injection to the licensed practical nurse. This fits most state scopes but varies.
- The whole bank near duplicate test fails on rn-s25-47 against rn-s26-07 (Jaccard 0.54). Neither item is in c12 and I did not edit them. Every c12 test passes.

## Summary

32 items reviewed (30 case items and 2 extra items). 10 fixes across 9 item ids, 1 key change. All numbers recomputed and correct. `npx tsc` shows no c12 errors. All c12 gates pass. The single failing test is the whole bank near duplicate check between two items in batches s25 and s26.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
