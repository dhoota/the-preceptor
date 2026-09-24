# s19 writer report

Batch s19. Stand-alone. Reduction of Risk Potential. 50 items, rn-s19-01 to rn-s19-50.

This run resumed an earlier attempt that had already written all five parts. I checked the batch against the plan, verified the less certain citations, fixed one citation URL and reran the gates.

## Checks

- `BATCH=s19 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s19`: prints nothing.

## Counts

Client Needs: RRP 50.

Item types: mc 28, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2. Two of the 28 mc items are trend items (`trend: true`). That gives 26 plain mc plus 2 trend items, as planned.

CJMM steps: recognize 8, analyze 10, prioritize 4, generate 6, action 17, evaluate 5.

Difficulty: level 1 has 4, level 2 has 17, level 3 has 20, level 4 has 8, level 5 has 1. No level is above 20.

Calculations: item 06 has a `calc` block (0.5 mL/kg/hour times 80 kg gives 40 mL/hour). RRP has no 12 percent rule. That rule applies only to PPT.

## MC key positions

Position 0: 7 items (04, 11, 17, 22, 29, 35, 43).
Position 1: 7 items (01, 10, 19, 27, 32, 36, 48).
Position 2: 7 items (02, 13, 15, 24, 31, 40, 49).
Position 3: 7 items (05, 14, 21, 28, 37, 45, 50).

## Topics

Contrast and metformin, fasting before surgery, thyroidectomy complications, thoracentesis, liver biopsy labs, low urine output after surgery, bladder irrigation, orthostatic vital signs, compartment syndrome, incentive spirometry, disconnected chest drain, NG tube placement, evisceration, contrast nephropathy, hip precautions, fistula care, PD peritonitis, blood gas after opioid, ECG leads, pulse oximetry limits, post-tonsillectomy bleeding, NST, PE after knee surgery, arterial line leveling, trach suctioning, MRI screening, post-LP headache, intake after endoscopy, stroke swallow screen, aspiration with tube feeds, dialysis disequilibrium, retention after spinal anesthesia, post-polypectomy signs, 24-hour urine, wound drain, day 2 deterioration, airway obstruction after anesthesia, preop findings, return of bowel function, A1C follow-up, malignant hyperthermia, alkalosis with gastric suction, late decelerations, VTE prevention, C. difficile stool sample, trach bedside equipment, leak after gastric bypass, shoulder pain after laparoscopy, sepsis first step, paracentesis prep.

## Sources

Journal and guideline sources carry URLs in `src/bank/s19/common.ts`. This run checked these again:

- FDA, Pulse Oximeter Accuracy and Limitations: FDA Safety Communication, 2021. https://content.govdelivery.com/accounts/USFDA/bulletins/2c276cb (sent February 19, 2021). Fixed in this run. The old URL pointed to the June 2022 UPDATE bulletin (31d1cbe), which did not match year 2021.
- ADA, Diagnosis and Classification of Diabetes: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S27. https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/ and PMID 41358893.
- Simpson KR, AWHONN, Cervical Ripening and Labor Induction and Augmentation, 5th edition. Nursing for Women's Health 24(4), 2020. https://pubmed.ncbi.nlm.nih.gov/32778395/
- Freeman R, et al., Consensus statement on orthostatic hypotension. Clinical Autonomic Research 21:69, 2011. https://www.researchgate.net/publication/50833270

Other sources, with their URLs in common.ts: ACR Manual on Contrast Media 2024, ASA preoperative fasting guideline 2017, AARC incentive spirometry 2011, AARC endotracheal suctioning 2010, ASPEN enteral nutrition safe practices 2017, IDSA and SHEA C. difficile guideline 2018, AHA and ASA acute ischemic stroke 2019, Surviving Sepsis Campaign 2021, ACOG Practice Bulletin 229 2021, AAO-HNSF tonsillectomy 2019, Rosenberg et al. malignant hyperthermia review 2015, KDOQI vascular access 2020, ISPD peritonitis 2022, Kligfield et al. ECG standardization 2007, Mitchell et al. tracheostomy care consensus 2013, Neuberger et al. liver biopsy 2020, KDIGO AKI 2012, ACR MR safe practices 2020, ESC PE 2020, ASH VTE prevention in surgical patients 2019, Fisher et al. ASGE complications of colonoscopy 2011, ADA glycemic goals 2026.

Textbooks without URLs: Hinkle, Cheever and Overbaugh, Brunner and Suddarth's 15th edition, 2022. Potter, Perry, Stockert and Hall, Fundamentals of Nursing 11th edition, 2023. Hockenberry, Duffy and Gibbs, Wong's 12th edition, 2023.

## For the reviewer

- The earlier attempt wrote the items. This run checked counts, key balance, the calc and four citations. It did not reread all 50 whys against their sources. Please give each item your full adversarial read.
- The ResearchGate URL for Freeman 2011 is a mirror. The canonical home is Clinical Autonomic Research, DOI 10.1007/s10286-011-0119-5.
- The Simpson 5th edition appears in both Nursing for Women's Health and JOGNN in 2020. The cited URL is the NWH version.
- Item 20 (pulse oximetry) marks supplemental oxygen as not an accuracy factor. That is true for the device. A reviewer may still want the wording tightened.
