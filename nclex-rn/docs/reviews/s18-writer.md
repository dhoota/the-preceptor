# Batch s18 writer report

Batch s18 holds 50 stand-alone items, rn-s18-01 to rn-s18-50, in `src/bank/s18/part1.ts` to `part5.ts`. Shared sources are in `common.ts`. Every item has `reviewed: false` and `canada: ""`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- `BATCH=s18 npx vitest run tests/bank.test.ts`: 61 of 61 pass, including the whole-bank near duplicate check.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s18`: prints nothing.

## Counts

- Client Needs: PPT 50.
- Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 16 is a trend mc. Item 23 is a trend matrix.
- CJMM step: take action 14, generate solutions 10, analyze cues 8, prioritize hypotheses 7, evaluate outcomes 6, recognize cues 5.
- Difficulty: level 1 has 2, level 2 has 13, level 3 has 19, level 4 has 14, level 5 has 2.
- Calculations with a `calc` block: 8 of 50 (items 01, 09, 15, 24, 25, 32, 44, 49).

## Coverage

- Psychiatric: olanzapine metabolic checks, paroxetine discontinuation, valproate teaching, alcohol withdrawal dosing by CIWA-Ar, naltrexone precipitated withdrawal, buspirone, tricyclic overdose, tardive dyskinesia, haloperidol IM volume, nicotine patch.
- Neurologic: status epilepticus, levetiracetam volume, phenytoin toxicity trend, carbamazepine marrow and sodium effects, sumatriptan contraindication, topiramate, drugs that worsen myasthenia, malignant hyperthermia, nimodipine route.
- Respiratory: inhaler technique, rescue versus controller, theophylline interaction, omalizumab observation, albuterol response trend.
- Anti-infective: gentamicin dose and level timing, vancomycin rate, cephalexin safe range, penicillin allergy, doxycycline, abacavir reaction, oseltamivir, sulfamethoxazole-trimethoprim, cefazolin drip rate.
- Oncology: docetaxel by body surface area, vincristine neuropathy, doxorubicin, cyclophosphamide bladder care, capecitabine home handling, tamoxifen, filgrastim, immune checkpoint colitis.
- Pain and opioids: sedation before respiratory depression, fentanyl patch, ketorolac kidney injury, concentrated oral morphine, epidural morphine monitoring.
- Administration: two identifiers, error-prone notation, first response to a dose error.

## MC key positions

27 mc items, counting trend item 16. Keys at positions 1 to 4: 7, 7, 7, 6. The key is the strict longest option in 4 of 27 (items 22, 26, 43, 44).

## Sources and verification URLs

- Burchum and Rosenthal, Lehne's Pharmacology for Nursing Care, 11th edition, 2022. https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1
- Hinkle, Cheever, Overbaugh, Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. https://www.amazon.com/Brunner-Suddarths-Textbook-Medical-Surgical-Nursing/dp/1975161033
- Potter, Perry, Stockert, Hall, Fundamentals of Nursing, 11th edition, 2022. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Global Initiative for Asthma, Global Strategy for Asthma Management and Prevention, 2024. https://ginasthma.org/wp-content/uploads/2024/05/GINA-2024-Strategy-Report-24_05_22_WMS.pdf
- Glauser et al., American Epilepsy Society status epilepticus guideline, Epilepsy Currents, 2016. https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48
- ASAM Clinical Practice Guideline on Alcohol Withdrawal Management, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- Woolf et al., tricyclic antidepressant poisoning guideline, Clinical Toxicology, 2007. https://pubmed.ncbi.nlm.nih.gov/17453872/
- Rosenberg et al., Malignant Hyperthermia: a Review, 2015. https://pubmed.ncbi.nlm.nih.gov/26238698/
- Olsen et al., ONS Chemotherapy and Immunotherapy Guidelines, 2nd edition, 2023. https://www.ons.org/store/books/chemotherapy-and-immunotherapy-guidelines-and-recommendations-practice-second-edition
- Neuss et al., ASCO/ONS Chemotherapy Administration Safety Standards, Oncology Nursing Forum, 2017. https://pubmed.ncbi.nlm.nih.gov/28067033/
- ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations, 2021. https://www.ismp.org/system/files/resources/2021-02/Error%20Prone%20Abbreviations%202021_0.pdf
- ISMP List of High-Alert Medications in Acute Care Settings, 2024 (same citation as batch s15).
- Schneider et al., ASCO immune-related adverse events guideline, 2021. https://ascopubs.org/doi/abs/10.1200/JCO.21.01440
- ASA and ASRA neuraxial opioid respiratory depression guideline, Anesthesiology, 2016. https://pubmed.ncbi.nlm.nih.gov/26655725/
- Jungquist et al., ASPMN opioid sedation monitoring revisions, Pain Management Nursing, 2020. https://www.painmanagementnursing.org/article/S1524-9042(19)30128-6/abstract
- Narayanaswami et al., myasthenia gravis consensus 2020 update, Neurology, 2021. https://www.neurology.org/doi/10.1212/WNL.0000000000011124
- Hoh et al., AHA/ASA aneurysmal subarachnoid hemorrhage guideline, Stroke, 2023. https://pubmed.ncbi.nlm.nih.gov/37212182/
- Ailani et al., American Headache Society consensus update, Headache, 2021. https://pubmed.ncbi.nlm.nih.gov/34873692/
- CDC, Influenza Antiviral Medications: Summary for Clinicians, last updated March 2026. https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html
- ADA, APA, AACE and NAASO antipsychotic consensus, Diabetes Care, 2004. https://pubmed.ncbi.nlm.nih.gov/14747245/
- Fiore et al., Treating Tobacco Use and Dependence: 2008 Update. https://www.ahrq.gov/prevention/guidelines/tobacco/index.html
- The Joint Commission, National Patient Safety Goals for the Hospital Program, 2025. https://digitalassets.jointcommission.org/api/public/content/9be383450fc941df806b76c5fbdd9ae6?v=3c600c3a
- HHS Panel on Antiretroviral Guidelines, adult and adolescent guidelines, 2024 version. https://www.ncbi.nlm.nih.gov/books/NBK586306/
- Smith et al., ASCO WBC growth factor guideline update, 2015. https://ascopubs.org/doi/10.1200/JCO.2015.62.3488
- Rybak et al., vancomycin monitoring consensus guideline, 2020. https://pubmed.ncbi.nlm.nih.gov/32191793/
- Cox et al., AAAAI and ACAAI omalizumab anaphylaxis task force report, 2007. https://pubmed.ncbi.nlm.nih.gov/17996286/

## For the reviewer

- Item 22: the 2-hour and 30-minute observation times come from the 2007 task force report. The current omalizumab label gives no fixed time. Check this is still the teaching point you want.
- Item 28: level timing follows traditional dosing every 8 hours. Local policy on the peak draw time varies, from 30 to 60 minutes after the infusion ends.
- Item 13: the 7 to 10 opioid-free days is the textbook window for short-acting opioids. Longer-acting opioids need longer.
- Item 17: triptans in migraine with typical aura are treated as acceptable. Hemiplegic and brainstem aura are the excluded types.
- Item 42: the stem gives 2 months of oral morphine but no daily dose. Opioid tolerance is implied, not shown by number.
- Item 43: the ketorolac reduced dose rule, 65 years or older or under 50 kg, and the 5-day limit come from labeling as summarized in Lehne.
- Item 46 is a dnd triad with distinct slot labels (condition, mouth sign, limb sign), so the two evidence slots cannot be swapped.
- The HHS antiretroviral guideline was updated again in May 2026. The citation uses the 2024 version and the abacavir teaching did not change.
- The Canada notes are empty for the later pass. Likely notes: CIWA-Ar use is the same, and Canadian labs report creatinine in micromol/L and glucose in mmol/L.
