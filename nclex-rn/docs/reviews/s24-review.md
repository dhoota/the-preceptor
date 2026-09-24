# Batch s24 adversarial review

Scope: all 50 items in part1.ts to part5.ts, the shared sources in common.ts, and the two items in extra.ts that index.ts does not import (rn-s24-91 and rn-s24-92). Both lenses were applied to every item. Every temperature, glucose, cholesterol, albumin, phosphorus and hemoglobin pair was recomputed with a script. So were the heparin-induced thrombocytopenia platelet fall (61 percent), the dialysis outflow, the creatinine doubling, the weight change and the transfusion volume.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s24-92 | options[1], rationale, sources | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is IV calcium gluconate. Option, why and rationale rewritten. The SOGC citation now carries its journal, volume and page. | A | high |
| rn-s24-91 | options[1].why | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". The resin acts over hours in the colon. That slow onset is the real reason it is not first. | A | high |
| UC source (rn-s24-24) | common.ts UC | The 2019 ACG ulcerative colitis guideline was cited. ACG replaced it with the 2025 update (Am J Gastroenterol 120(6):1187). Stale guidance. Citation updated. | A | high |
| BELL source (rn-s24-38) | common.ts BELL url | The work cites the full guideline, 149(3 Suppl):S1, but the URL pointed to the executive summary, 149(5):656 (PMID 24190889). URL now points to PMID 24189771. | A | high |
| rn-s24-39 | stem | The key "Give carbidopa-levodopa on its set schedule" and the rationale rely on a carbidopa-levodopa prescription that the stem never gave. Added "The client takes carbidopa-levodopa four times a day." | B | high |
| rn-s24-05 | rationale | The stem says day 6 after coiling. The rationale said day 6 after rupture. Reworded to day 6 after coiling of the ruptured aneurysm. | B | medium |
| rn-s24-16 | options[0].why | "Continued oliguria" implies oliguria on admission, which the stem never gave. Now "shows oliguria". | B | medium |
| rn-s24-11 | stem | At 250 mL per hour, "ninety minutes in" means 375 mL were given, more than a typical unit of packed red cells holds. Changed to sixty minutes (250 mL). The key and rationale are unchanged. | B | low |

## Key changes

- rn-s24-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate". After: option 1 "Calcium gluconate". The key index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no effect on magnesium. Arjan approves.

## Sources verified

PubMed records were checked through the NCBI E-utilities API for author, title, journal, volume, issue, pages and year.

- Glahn KPE et al. EMHG malignant hyperthermia guideline, updated 2024. Br J Anaesth 134(1):221, 2025. https://pubmed.ncbi.nlm.nih.gov/39482150/
- Adler GK et al. Endocrine Society primary aldosteronism guideline. J Clin Endocrinol Metab 110(9):2453, 2025. https://pubmed.ncbi.nlm.nih.gov/40658480/
- ADA Standards of Care 2026, section 6. Diabetes Care 49(Suppl 1):S132. https://pubmed.ncbi.nlm.nih.gov/41358894
- ADA Standards of Care 2026, section 7. Diabetes Care 49(Suppl 1):S150 (PMID 41358889). https://pubmed.ncbi.nlm.nih.gov/41358889/
- ADA Standards of Care 2026, section 16. Diabetes Care 49(Suppl 1):S339 (PMID 41358892). https://pubmed.ncbi.nlm.nih.gov/41358892/
- Kaplan DE et al. AASLD portal hypertension and varices guidance. Hepatology 79(5):1180, 2024. https://pubmed.ncbi.nlm.nih.gov/37870298/
- KDIGO 2024 CKD guideline. Kidney Int 105(4S):S117. https://pubmed.ncbi.nlm.nih.gov/38490803/
- KDIGO 2021 glomerular diseases guideline. Kidney Int 100(4S):S1. https://pubmed.ncbi.nlm.nih.gov/34556256/
- KDIGO 2012 AKI guideline. Kidney Int Suppl 2(1):1. https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf
- Li PK et al. ISPD peritonitis recommendations 2022. Perit Dial Int 42(2):110. https://pubmed.ncbi.nlm.nih.gov/35264029/
- Neunert C et al. ASH 2019 ITP guidelines. Blood Adv 3(23):3829. https://pubmed.ncbi.nlm.nih.gov/31794604/
- Cuker A et al. ASH 2018 HIT guidelines. Blood Adv 2(22):3360 (PMID 30482768). https://pubmed.ncbi.nlm.nih.gov/30482768/
- Srivastava A et al. WFH hemophilia guidelines, 3rd edition. Haemophilia 26(Suppl 6):1, 2020. https://pubmed.ncbi.nlm.nih.gov/32744769/
- Jonklaas J et al. ATA hypothyroidism guidelines. Thyroid 24(12):1670, 2014 (PMID 25266247). https://pubmed.ncbi.nlm.nih.gov/25266247/
- Bornstein SR et al. Endocrine Society primary adrenal insufficiency guideline. J Clin Endocrinol Metab 101(2):364, 2016 (PMID 26760044). https://pubmed.ncbi.nlm.nih.gov/26760044/
- Gardner TB et al. ACG chronic pancreatitis guideline. Am J Gastroenterol 115(3):322, 2020 (PMID 32022720). https://pubmed.ncbi.nlm.nih.gov/32022720/
- Laine L et al. ACG upper GI and ulcer bleeding guideline. Am J Gastroenterol 116(5):899, 2021 (PMID 33929377). https://pubmed.ncbi.nlm.nih.gov/33929377/
- Rubin DT, Ananthakrishnan AN, Siegel CA, Barnes EL, Long MD. ACG Clinical Guideline Update: Ulcerative Colitis in Adults. Am J Gastroenterol 120(6):1187, 2025. https://pubmed.ncbi.nlm.nih.gov/40701556/
- Rubio-Tapia A et al. ACG celiac disease guideline update. Am J Gastroenterol 118(1):59, 2023. https://pubmed.ncbi.nlm.nih.gov/36602836/
- Biggins SW et al. AASLD ascites, SBP and hepatorenal syndrome guidance. Hepatology 74(2):1014, 2021. https://pubmed.ncbi.nlm.nih.gov/33942342/
- Kiriyama S et al. Tokyo Guidelines 2018 for acute cholangitis. J Hepatobiliary Pancreat Sci 25(1):17. https://pubmed.ncbi.nlm.nih.gov/29032610/
- Hoh BL et al. 2023 AHA/ASA aneurysmal subarachnoid hemorrhage guideline. Stroke 54(7):e314. https://pubmed.ncbi.nlm.nih.gov/37212182/
- NICE NG234. Spinal metastases and metastatic spinal cord compression, 2023. https://www.nice.org.uk/guidance/ng234
- ASAM alcohol withdrawal management guideline. J Addict Med 14(3S):1, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- Baugh RF et al. AAO-HNSF Bell's palsy guideline. Otolaryngol Head Neck Surg 149(3 Suppl):S1, 2013 (PMID 24189771). https://pubmed.ncbi.nlm.nih.gov/24189771/
- Wiersum-Osselton JC et al. Revised TACO surveillance definition. Lancet Haematol 6(7):e350, 2019. https://pubmed.ncbi.nlm.nih.gov/31080132/
- Magee LA et al. SOGC Guideline No. 426: Hypertensive Disorders of Pregnancy. J Obstet Gynaecol Can 44(5):547, 2022 (PMID 35577426). https://pubmed.ncbi.nlm.nih.gov/35577426/
- Calcium gluconate as the magnesium antidote was confirmed in MSF Essential Drugs. https://medicalguidelines.msf.org/en/viewport/EssDr/english/calcium-gluconate-injectable-16682510.html
- The slow onset of sodium polystyrene sulfonate, 2 to 24 hours, was confirmed in StatPearls. https://www.ncbi.nlm.nih.gov/sites/books/NBK559206/
- Hinkle, Harding (Lewis) and Hockenberry (Wong) are current editions from the publishers. The URLs are stored in common.ts.

## Needs Arjan's decision

- The rn-s24-92 key change above.
- Client Needs tags. The whole batch is tagged PA. Some items arguably test other areas: seizure precautions (rn-s24-25) and bleeding precautions (rn-s24-32) fit Safety or Reduction of Risk Potential. The kidney and celiac diet items (rn-s24-19, rn-s24-30) fit Basic Care and Comfort. Left unchanged because the batch was commissioned as Physiological Adaptation.
- rn-s24-10 teaches the Somogyi effect. Continuous glucose monitoring studies question how often it occurs. It remains standard nursing text teaching, so the item is left as written.

## Summary

52 items were reviewed, 50 in the bank and 2 in extra.ts. There were 8 fixes across 7 items and 2 shared sources. One key change was made, in extra item rn-s24-92. `BATCH=s24 npx vitest run tests/bank.test.ts` passes 61 of 61. `tsc` shows no s24 errors. Both extra items pass itemProblems.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
