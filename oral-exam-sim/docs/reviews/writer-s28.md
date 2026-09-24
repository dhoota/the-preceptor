# SAMP writer report. Batch s28, chest pain

32 new SAMPs, ids chest-pain-16 to chest-pain-47, in `src/samps/s28/chest-pain.ts`. The file exports `CHEST_PAIN_S28` and `src/samps/s28/index.ts` exports it as `SAMPS_S28`. All SAMPs have `reviewed: false`. The 15 existing SAMPs in `src/samps/s05/chest-pain.ts` were read first. Their scenarios were not repeated. These were type A dissection with an arm pressure difference, inferior STEMI with RV infarct, posterior MI, postpartum PE, PERC in a young man, tension pneumothorax in COPD, the GI cocktail, silent NSTEMI in an older diabetic woman, HEART 5 with chest wall tenderness, HEART 0, cocaine, Boerhaave, pericarditis, Wellens and half-dose tenecteplase in a rural 79-year-old.

## Checks

- `npx tsc --noEmit -p . | grep samps/s28` prints nothing.
- `SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 698 passed, 0 failed. That run includes the bank wide near duplicate stem gate.
- A separate script checked stems at 50 to 150 words, updates at 10 to 45 words and explanations at 3 to 6 sentences. All pass.

## Count, mix and key positions

- 32 SAMPs and 117 questions. 21 SAMPs have 4 questions and 11 have 3. None has 5.
- 107 single questions and 10 menu questions. One menu question sits in each of 10 SAMPs (17, 22, 24, 27, 28, 29, 36, 39, 40, 47), which is about one SAMP in three.
- Single key positions, first to fifth: 21, 27, 22, 17, 20. The highest is 25%.
- The key is the single longest option in 22 of 107 single questions, which is 21%.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Recognize lethal causes first | 25 |
| 2. Early treatment and tests | 31 |
| 3. Detailed pain and symptom history | 15 |
| 4. Risk factors that shift pretest probability | 23 |
| 5. Do not exclude on unreliable clues | 23 |

## Setting and population spread

- Ages 13 to 81. Children and teens in 22 (15), 44 (13) and 23 (19). Older adults in 25, 29, 30, 32, 34 and 43.
- Rural hospitals without CT or a cath lab in 18 and 21. Ambulance arrivals in 17, 21, 29, 36, 38, 42, 43 and 44.
- Lethal causes covered: de Winter STEMI equivalent, LBBB with Sgarbossa criteria, stent thrombosis, SCAD, takotsubo with outflow obstruction, Kawasaki aneurysm thrombosis, type A and type B dissection, dissection mimicking inferior STEMI and stroke, massive PE, PE in pregnancy, cancer and after surgery, tamponade, acute chest syndrome, myopericarditis, spontaneous pneumothorax, aortic stenosis and HCM.

## Sources

Verified during writing (URL checked or found in search results):

- Byrne RA and colleagues. 2023 ESC ACS guidelines. https://academic.oup.com/eurheartj/article/44/38/3720/7243210
- de Winter RJ and colleagues. N Engl J Med. 2008. https://www.nejm.org/doi/full/10.1056/NEJMc0804737
- Hayes SN and colleagues. AHA SCAD statement. Circulation. 2018. https://www.ahajournals.org/doi/10.1161/CIR.0000000000000564
- Ommen SR and colleagues. 2024 AHA/ACC HCM guideline. https://www.ahajournals.org/doi/abs/10.1161/CIR.0000000000001250
- PHAC. Canadian Immunization Guide, COVID-19 chapter, updated 2025. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-26-covid-19-vaccine.html
- Luk A and colleagues. Can J Cardiol. 2021. https://onlinecjc.ca/article/S0828-282X(21)00624-3/fulltext
- Yawn BP and colleagues. JAMA. 2014. https://jamanetwork.com/journals/jama/article-abstract/1902235
- Ghadri JR and colleagues. Takotsubo consensus part II. Eur Heart J. 2018. https://academic.oup.com/eurheartj/article/39/22/2047/5025411
- Smith SW and colleagues. Modified Sgarbossa. Ann Emerg Med. 2012. https://pubmed.ncbi.nlm.nih.gov/22939607/
- Cohen JI. Herpes zoster. N Engl J Med. 2013. https://pubmed.ncbi.nlm.nih.gov/23863052/
- van der Pol LM and colleagues. Pregnancy-adapted YEARS. N Engl J Med. 2019. https://www.nejm.org/doi/full/10.1056/NEJMoa1813865
- Righini M and colleagues. ADJUST-PE. JAMA. 2014. https://pubmed.ncbi.nlm.nih.gov/24643601/
- Carrier M and colleagues. Canadian CAT consensus. Curr Oncol. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8700468/
- Otto CM and colleagues. 2020 ACC/AHA valve guideline. Circulation. 2021. https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923
- CCS and CAIC. 2023 antiplatelet focused update. Can J Cardiol. 2024. https://onlinecjc.ca/article/S0828-282X(23)01841-X/fulltext
- Amsterdam EA and colleagues. 2014 AHA/ACC NSTE-ACS guideline. https://www.ahajournals.org/doi/10.1161/CIR.0000000000000134
- Henrikson CA and colleagues. Ann Intern Med. 2003. https://pubmed.ncbi.nlm.nih.gov/14678917/
- Pearson GJ and colleagues. 2021 CCS dyslipidemia guidelines. https://onlinecjc.ca/article/S0828-282X(21)00165-3/fulltext
- McCrindle BW and colleagues. AHA Kawasaki statement. Circulation. 2017. https://www.ahajournals.org/doi/10.1161/CIR.0000000000000484
- Roberts ME and colleagues. BTS pleural guideline. Thorax. 2023. Conservative care for minimally symptomatic primary pneumothorax confirmed.
- Hagan PG and colleagues. IRAD. JAMA. 2000.

Reused from the signed-off s05 chest pain file, not rechecked this session: Isselbacher 2022 (aortic disease), Nazerian 2018 (ADvISED), Wong 2019 (CCS STEMI), Konstantinides 2019 (ESC PE), Gulati 2021 (AHA/ACC chest pain), Kline 2008 (PERC), Backus 2013 (HEART), Adler 2015 and Schulz-Menger 2025 (ESC pericardial). Wells PS 2000 (Thromb Haemost) is cited from memory.

## For the reviewers

- The session web search budget ran out before the CCS/CAIC 2023 wording on P2Y12 pretreatment for STEMI could be checked. Most menus avoid P2Y12 pretreatment for that reason. chest-pain-36 q3 keys ticagrelor 180 mg before primary PCI for stent thrombosis after stopping ticagrelor. Please confirm.
- chest-pain-27 q2 uses a very low hs-cTnT threshold of 5 ng/L and single-sample rule-out when pain began more than 3 hours earlier. This is from the ESC 0 hour and 1 hour algorithm table, recalled rather than rechecked.
- chest-pain-25 q2 says the ESC suggests IV beta blockers at primary PCI only with systolic BP above 120 mmHg and no heart failure. This is recalled from ESC 2023.
- chest-pain-24 q3 says steroids are linked to rebound pain crises. This is from the sickle cell literature, not the NHLBI report itself.
- chest-pain-21 q2 relies on ESC 2019 listing surgery in the previous 3 weeks as an absolute contraindication to lysis. The surgery was set 6 weeks back to avoid it.
- chest-pain-34 q3 keys nitroglycerin as the drug needing most caution in severe aortic stenosis. The valve guideline supports cautious vasodilator use but may not say this in these words.
- chest-pain-30 q4 describes the lower antiviral doses as doses used for herpes simplex. Acyclovir 400 mg five times daily is not a standard HSV regimen in every reference.
- chest-pain-37 cites the 2014 AHA/ACC NSTE-ACS guideline for the PDE5 inhibitor intervals because no Canadian guideline states them.
- The brief suggests 4 or 5 questions per SAMP. 11 SAMPs have 3.
- While computing statistics, a temporary test file was placed in `tests/` and deleted straight away. No other file outside `src/samps/s28/` and this report was changed.
