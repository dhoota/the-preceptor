# Batch c19 adversarial review

Scope: five case studies in `case1.ts` to `case5.ts` (30 items) and the two stand-alone items in `extra.ts` (rn-c19-9 and rn-c19-8), which `index.ts` does not import. `helpers.ts` was checked as the shared source list. Both lenses were applied to every item. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c19-1-5 | option whys, rationale | Two whys said the reply "confirms she is here", but the partner drove her in and already knows. Reworded to the real harm: it discloses her care and when she will be free | B | high |
| rn-c19-2-6 | rationale | Called Clients B and F "bleeding clients". The log gives no bleeding for either. Now "from one client to the next" | B | high |
| rn-c19-3-1 | span why, rationale | The why claimed the peak pressure rose "at the same settings", which the note never gives. Peak pressure alone also reflects airway resistance. Now "since intubation" and "suggests stiffer lungs" | B | medium |
| rn-c19-3-3 | stem | Said the settings "were entered in the emergency department", but he had been an inpatient for 2 days before intubation. Now "entered at intubation" | B | high |
| rn-c19-4-4 | option | "Lift the drainage unit onto the bed" is not clearly above the chest, so the distractor could be defended. Now "Hold the drainage unit at shoulder height for transfers" | A | medium |
| rn-c19-4-5 | option | "Cut the patch in half for the first day" did not fit a day 2 stem. Now "to lower the dose". The label says not to cut the patch | B | medium |
| rn-c19-4-6 | option | "I can fly home" assumed he lives far away. The history gives no such fact. Now "take a flight" | B | medium |
| rn-c19-4-6 | sources | The one week wait before flying had no current source, and the MacDuff URL pointed to a Medscape page. Added the BTS 2022 air travel clinical statement and set the MacDuff URL to its DOI | A | high |
| rn-c19-5-2 | exhibit, refs, rationale, why, sources | Sevelamer was keyed appropriate to continue with no phosphorus value in the case. Added phosphorus 6.2 mg/dL (2.0 mmol/L), a normal range ref and the Harding source | B | high |
| rn-c19-5-6 | exhibit, option, rationale | "Drained volumes match the volumes instilled" was called proof the exchanges work. Equal volumes mean no fluid removal. The chart now says drained volumes exceed the fills | A | medium |
| rn-c19-9 | option why | Said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". The resin acts over hours. Why rewritten | A | high |
| rn-c19-8 | key option, rationale | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate | A | high |
| rn-c19-8 | option why | Flumazenil why said the client "did not receive" a benzodiazepine, which the stem never states. Now "reverses benzodiazepines, not magnesium" | B | medium |
| rn-c19-8 | sources | SOGC Guideline No. 426 was not checked to support calcium gluconate. Replaced with ACOG Practice Bulletin 222, which gives calcium gluconate 10%, 10 mL IV over 3 minutes | A | high |
| helpers.ts (hinkle), used by rn-c19-2-3, rn-c19-2-4, rn-c19-3-1, rn-c19-4-1, rn-c19-4-2, rn-c19-4-3, rn-c19-4-4 | source URL | The Brunner and Suddarth URL used ISBN 9780323810340, which is Potter's Fundamentals of Nursing. Set to ISBN 9781975161033 | A | high |

## Key changes

- rn-c19-8. Before: key "Protamine sulfate" (position 2). After: key "Calcium gluconate" (position 2). Reason: calcium gluconate is the antidote for magnesium sulfate toxicity per ACOG Practice Bulletin 222. Protamine reverses heparin and has no role here. Needs Arjan's approval.

## Checks that found no defect

- Case 1: strangulation red flags match the Smock and Sturgeon criteria (visual change, incontinence, dysphonia, odynophagia, delayed presentation up to 6 months). The Glass 2008 homicide risk and the Danger Assessment threat item support 1-3.
- Case 2: every START category was rechecked. Capillary refill of 2 seconds for Client C is not over 2 seconds, so he is delayed. Tourniquet first and no elevation or pressure points match Bulger 2014.
- Case 3: PaO2/FiO2 is 64 / 0.8 = 80. The distractors 51 (64 x 0.8), 144 (64 + 80) and 160 are as described. Predicted body weight is 73.3 kg, so 700 mL is 9.6 mL/kg, above 8 mL/kg. Propofol 30 x 90 x 60 / 1000 / 10 = 16.2 mL/hour. Triglycerides 610 mg/dL is 6.9 mmol/L. Urine output 45 mL/hour is 0.5 mL/kg/hour.
- Case 4: tidaling, bubbling on cough and gentle suction bubbling are expected. The nicotine label confirms new site daily, removal at 24 hours, no cutting and 21 mg for more than 10 cigarettes a day.
- Case 5: creatinine 5.6 mg/dL is 495 micromol/L. Temperature 36.7°C is 98.1°F. The Epogen label (June 2026 version) still says start under 10 g/dL and reduce or interrupt as it approaches or exceeds 11 g/dL, and lists uncontrolled hypertension as a contraindication.
- The key positions, parity and cueing gates pass for the batch.

## Sources verified

- WHO 2013, IPV guidelines: https://www.ncbi.nlm.nih.gov/books/NBK174250/
- Glass N et al. 2008, J Emerg Med 35(3):329: https://www.jem-journal.com/article/S0736-4679(07)00414-3/abstract
- Campbell JC et al. 2009, J Interpers Violence 24(4):653: https://pubmed.ncbi.nlm.nih.gov/18667689/
- Smock W, Sturgeon S 2017, strangulation recommendations: https://depts.washington.edu/wasafe/pdfs_docs/Recommendations-for-Medical-Radiographic-Evaluation-of-Acute-Adult-Non-Fatal-Strangulation-2017.pdf
- Benson M et al. 1996, Prehosp Disaster Med 11(2):117: https://pubmed.ncbi.nlm.nih.gov/10159733/
- Bulger EM et al. 2014, Prehosp Emerg Care 18(2):163: https://pubmed.ncbi.nlm.nih.gov/24641269/
- Berlin Definition 2012, JAMA 307(23):2526: https://pubmed.ncbi.nlm.nih.gov/22797452/
- ARDS Network 2000, NEJM 342(18):1301: https://pubmed.ncbi.nlm.nih.gov/10793162/
- Fan E et al. 2017, AJRCCM 195(9):1253: https://pubmed.ncbi.nlm.nih.gov/28459336/
- Devlin JW et al. 2018, Crit Care Med 46(9):e825: https://pubmed.ncbi.nlm.nih.gov/30113379/
- Klompas M et al. 2022, ICHE 43(6):687: https://pubmed.ncbi.nlm.nih.gov/35589091/
- Diprivan label, May 2025 version: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d1ae9e26-ffd6-43df-bbd6-869cdede6afe
- MacDuff A et al. 2010, Thorax 65(Suppl 2):ii18: https://pubmed.ncbi.nlm.nih.gov/20696690/
- Coker RK et al. 2022, Thorax 77(4):329 (flying 7 days after full resolution on chest x-ray): https://pubmed.ncbi.nlm.nih.gov/35228307/
- Nicotine patch Drug Facts, H-E-B, revised December 2023: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da35e19d-b0aa-8a5f-140e-7601bd2027fe
- Krist AH et al. 2021, JAMA 325(3):265: https://pubmed.ncbi.nlm.nih.gov/33464343/
- Daly C et al. 2014, Cochrane CD003078: https://pubmed.ncbi.nlm.nih.gov/25117423/
- KDIGO 2024, Kidney Int 105(4S):S117: https://pubmed.ncbi.nlm.nih.gov/38490803/
- FDA metformin safety communication, April 2016: https://www.fda.gov/drugs/drugsafety/ucm493244.htm
- Ikizler TA et al. 2020, AJKD 76(3 Suppl 1):S1: https://pubmed.ncbi.nlm.nih.gov/32829751/
- Li PK et al. 2022, Perit Dial Int 42(2):110: https://pubmed.ncbi.nlm.nih.gov/35264029/
- Epogen label, June 2026 version: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1f2d0b28-9cc5-4523-80b8-637fdaf3f7a5
- ACOG Practice Bulletin 222, 2020, Obstet Gynecol 135(6):e237: https://pubmed.ncbi.nlm.nih.gov/32443079/
- Brunner and Suddarth 15th edition: https://openlibrary.org/isbn/9781975161033
- Varcarolis 9th edition: https://openlibrary.org/isbn/9780323697071
- Lewis's Medical-Surgical Nursing 12th edition: https://openlibrary.org/isbn/9780323789615

## Needs Arjan's decision

- rn-c19-8 key change above.
- rn-c19-8 and rn-c19-9 sit in a case batch with stand-alone ids and are not imported. Decide whether they join a stand-alone batch or are dropped.
- rn-c19-4-4: "Walk with him in the hallway" is keyed. A client on wet suction can walk only on water seal if the prescription allows. Consider adding that to the stem.
- rn-c19-3-2: the 2024 global ARDS definition keeps the same PaO2/FiO2 grades for intubated clients, so the Berlin key stands. A newer citation could be added.
- rn-c19-3-6: the propofol label gives no fixed triglyceride cutoff. 610 mg/dL as needing follow-up rests on the label's advice to monitor and adjust.
- rn-c19-2-4 (BCC) and rn-c19-2-6 (SIPC) Client Needs tags remain judgment calls.

## Summary

32 items reviewed (30 case items and 2 unimported extras). 15 fixes across 16 item ids, 1 key change (rn-c19-8), 0 items left failing. `BATCH=c19 npx vitest run tests/bank.test.ts` passes 44 of 44, `tsc` shows no c19 errors, and both extra items pass `itemProblems`.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
