# Batch c20 adversarial review

Scope: all 8 files in `src/bank/c20/`. That covers the 30 case items in case1.ts to case5.ts and the 2 items in extra.ts (rn-c20-8 and rn-c20-9), which index.ts does not import. Both lenses were applied to every item. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c20-9 | options[1], rationale | The key named protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-c20-8 | rationale | The rationale said "this client has asthma". The stem never gives asthma. The claim was removed and the wheezing point kept. | B | high |
| rn-c20-2-3 | rationale | The rationale said low potassium and high glucose rule out "the other options". Neither rules out fluid volume deficit. It now names the sodium and water retention that does. | B | medium |
| rn-c20-2-5 | rationale | The rationale called potassium chloride a high-alert medication. ISMP lists only potassium chloride for injection concentrate. A premixed 40 mEq/L bag is not on the list. The sentence now gives the pump reason alone. | A | medium |
| rn-c20-3-1 | rationale, span 0 why | "Sleep and not wake up" was called a statement of intent to die. It is a passive wish to die, not intent. Both sentences were corrected. | A | medium |
| rn-c20-4-6 | rationale, option 2 why | Both said tolerance falls "during a hospital stay". The case never says he stopped opioids or what he received, and 4-4 raises buprenorphine or methadone. SAMHSA ties the fall to a period of not using. Both now say "after days of reduced use". | A and B | low |

## Key changes

- rn-c20-9. Before: option 2 "Protamine sulfate". After: option 2 "Calcium gluconate". The key index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (SOGC Guideline No. 426, 2022). Protamine reverses heparin. Arjan must approve.

## Checked and found sound

- Every SI pair and temperature pair converts within 3 percent. Examples: glucose 880 mg/dL is 48.8 mmol/L, BUN 52 mg/dL is 18.6 mmol/L, creatinine 1.9 mg/dL is 168 micromol/L, bilirubin 2.4 mg/dL is 41 micromol/L, 39.2°C is 102.6°F.
- rn-c20-1-5: 0.05 x 58 = 2.9 units/hour = 2.9 mL/hour. The 0.3, 5.8 and 29 distractor reasons are correct.
- rn-c20-2-5: 1000 / 8 = 125 mL/hour, which is 5 mEq/hour at 40 mEq/L. 62.5 mL/hour runs 16 hours, twice the time.
- rn-c20-3-5: 150 x 52 = 7800 mg, and 7800 / 200 = 39 mL. 26 mL is two thirds and 78 mL is double.
- rn-c20-3-3: 40 mL/hour for 52 kg is 0.77 mL/kg/hour, which is adequate.
- rn-c20-4-2: 0500 to 1800 is 13 hours. rn-c20-4-5: at 125 mL/hour the bag should hold about 208 mL after 20 minutes, so "almost half empty" shows a fast rate.
- Case 1 labs meet the 2024 consensus HHS criteria (glucose above 600 mg/dL, osmolality above 320, pH above 7.30, beta-hydroxybutyrate below 3.0).
- CDC lists warm oatmeal baths for itch, so rn-c20-5-4 is correct as written.
- Priority keys follow ABC and acute over chronic: rn-c20-1-3 (circulation), rn-c20-3-3 (hypoglycemia and new encephalopathy), rn-c20-4-3 (breathing, SpO2 89%). rn-c20-5-5 keys same-day report because he follows commands with a respiratory rate of 12/minute and SpO2 94%. No distractor is also defensible.
- CJMM order, item types and metadata are honest in all five cases.

## Sources verified

- Umpierrez GE et al. Diabetes Care 47(8), 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/ confirms 0.05 units/kg/hour for HHS, insulin delayed below potassium 3.5 and infection as the main trigger.
- Nieman LK et al. JCEM 100(8):2807, 2015. https://academic.oup.com/jcem/article/100/8/2807/2836065
- Irish Medication Safety Network, 2020. https://imsn.ie/wp-content/uploads/2020/10/IMSN-Best-Practice-Guideline-on-IV-Potassium-Oct-2020-approved.pdf. PDF text confirms 40 mmol/L peripheral and 10 mmol/hour on general wards.
- ISMP High-Alert Medications in Acute Care Settings. https://www.ismp.org/recommendations/high-alert-medications-acute-list (now redirects to ECRI). The list names insulin, subcutaneous and IV, and potassium chloride for injection concentrate.
- Dart RC et al. JAMA Network Open 6(8):e2327739, 2023. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062
- FDA Acetadote label, 2024. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/021539s019lbl.pdf confirms 150 mg/kg over 60 minutes, 200 mg/mL and flushing, pruritus and bronchospasm.
- Hua LL et al. Pediatrics 153(1):e2023064800, 2024. https://pubmed.ncbi.nlm.nih.gov/38073403/
- The Joint Commission R3 Report Issue 18, 2019. https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18
- Baddour LM et al. Circulation 132(15):1435, 2015. https://pubmed.ncbi.nlm.nih.gov/26373316/
- Wesson DR, Ling W. J Psychoactive Drugs 35(2):253, 2003. https://pubmed.ncbi.nlm.nih.gov/12924748/ confirms yawning, runny nose or tearing, pupil size and gooseflesh as scored items.
- ASAM 2020 Focused Update. https://pubmed.ncbi.nlm.nih.gov/32511106/
- FDA vancomycin injection label, 2024. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/050671s032lbl.pdf confirms pruritus and erythema of the face, neck and upper body and infusion over 60 minutes or longer.
- SAMHSA Overdose Prevention and Response Toolkit, 2023. https://library.samhsa.gov/sites/default/files/overdose-prevention-response-kit-pep23-03-00-001.pdf confirms that a recent period of abstinence can lower tolerance.
- Dworkin RH et al. Clin Infect Dis 44(Suppl 1):S1, 2007. https://academic.oup.com/cid/article/44/Supplement_1/S1/334966
- CDC About Shingles. https://www.cdc.gov/shingles/about/index.html confirms wet compresses, calamine and warm oatmeal baths, and the three groups who avoid contact until the rash scabs.
- CDC Clinical Overview of Shingles. https://www.cdc.gov/shingles/hcp/clinical-overview/index.html
- Dooling KL et al. MMWR 67(3):103, 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC5812314/. CDC vaccine considerations (https://www.cdc.gov/shingles/hcp/vaccine-considerations/index.html) confirm 2 doses 2 to 6 months apart and no dose during an acute episode.
- AGS Beers Criteria 2023. JAGS 71(7):2052. https://pubmed.ncbi.nlm.nih.gov/37139824/ confirms avoiding opioids with gabapentinoids.
- Montero-Odasso M et al. Age and Ageing 51(9):afac205, 2022. https://academic.oup.com/ageing/article/51/9/afac205/6730755
- SOGC Guideline No. 426, 2022 (rn-c20-9). https://jogc.com/article/S1701-2163(22)00234-1/fulltext confirms calcium gluconate 10% for magnesium toxicity.
- Davis's Drug Guide for Nurses, 18th edition (rn-c20-8). Open Library shows Vallerand and Sanoski editions in 2022 and 2024. Page content could not be checked online.
- Brunner and Suddarth, 15th edition, 2022. A textbook. Page content could not be checked online.

## Needs Arjan's decision

- Approve the rn-c20-9 key change from protamine sulfate to calcium gluconate.
- rn-c20-8 and rn-c20-9 in extra.ts carry no Canada note and cite a Canadian guideline (rn-c20-9) and a drug guide with no URL. Decide whether they join the bank. They were not run through the batch gates because index.ts does not import them.
- rn-c20-2-5 still relies on an Irish source for the US peripheral potassium limits. A US nursing or pharmacy text would be a better fit.
- rn-c20-5-6 has the client speak about his wife's blood test. It is true that no screening is needed, but it tests a different person than the learner. Consider rewording to his own test.

## Summary

32 items reviewed, 30 in the bank and 2 in extra.ts. 6 items had defects and 6 fixes were made. 1 key content change (rn-c20-9). tsc shows no c20 errors and `BATCH=c20 npx vitest run tests/bank.test.ts` passes 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
