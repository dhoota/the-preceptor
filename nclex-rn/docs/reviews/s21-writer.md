# s21 writer report

Batch s21. Stand-alone. 50 items, all Reduction of Risk Potential (RRP). Every item has `reviewed: false` and `canada: ""`.

Focus from the topic plan: vital sign changes, therapeutic procedures, changes in body systems, moderate sedation monitoring, and preventing complications of immobility and treatment. Scenarios were checked against the RRP items already in s19, s20 and the case batches. Overlap is limited to shared teaching points such as bed rest risks. No scenario repeats.

## Checks

- `BATCH=s21 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s21`: prints nothing.
- Near duplicate gate: item 50 first matched rn-s22-23 and rn-s24-27 at Jaccard 0.52. The stem was reworded and now passes.

## Counts

Client Needs: RRP 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2 (item 10 is a trend mc and item 45 is a trend sata).

CJMM step: recognize 9, analyze 10, prioritize 4, generate 9, action 13, evaluate 5.

Difficulty: 1 has 2, 2 has 17, 3 has 18, 4 has 11, 5 has 2.

Calculations with a `calc` block: items 04 (diluted naloxone volume), 08 (pulse deficit) and 29 (Braden total).

## MC key positions

27 items with a single MC key (26 mc plus trend item 10). A 7, B 7, C 6, D 7. The key is the strict longest option in 0 items.

- A: 08, 11, 13, 20, 30, 41, 43
- B: 04, 07, 16, 21, 29, 42, 44
- C: 01, 02, 17, 19, 34, 37
- D: 05, 10, 14, 26, 36, 40, 50

## Sources used

Each one was checked with WebSearch.

- ASA Task Force, Practice Guidelines for Moderate Procedural Sedation and Analgesia 2018, Anesthesiology 128(3):437. https://pubmed.ncbi.nlm.nih.gov/29334501/
- Jungquist CR et al., ASPMN guidelines on monitoring for opioid-induced advancing sedation, revisions, Pain Management Nursing 21(1):7, 2020. https://pubmed.ncbi.nlm.nih.gov/31377031/
- Muntner P et al., Measurement of Blood Pressure in Humans, AHA, Hypertension 73(5):e35, 2019. https://pubmed.ncbi.nlm.nih.gov/30827125/
- Klompas M et al., SHEA strategies to prevent VAP, 2022 update, Infection Control and Hospital Epidemiology 43(6):687. https://pubmed.ncbi.nlm.nih.gov/35589091/
- Joglar JA et al., 2023 ACC/AHA/ACCP/HRS Atrial Fibrillation Guideline, Circulation 149(1):e1, 2024. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193
- Wigginton JG et al., Part 9 Adult Advanced Life Support, 2025 AHA Guidelines, Circulation 152(Suppl 2):S538. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- Kemper AR et al., AAP hyperbilirubinemia guideline revision, Pediatrics 150(3):e2022058859, 2022. https://publications.aap.org/pediatrics/article/150/3/e2022058859/188726/
- Kopp SL et al., ASRA antithrombotic guidelines, fifth edition, Regional Anesthesia and Pain Medicine, 2025. https://pubmed.ncbi.nlm.nih.gov/39880411/
- Royal College of Physicians, NEWS2 report, 2017. https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf
- EPUAP, NPIAP and PPPIA, International Pressure Injury Guideline, 3rd edition, 2019. https://epuap.org/pu-guidelines/
- Hooper VD et al., ASPAN normothermia guideline, 2nd edition, Journal of PeriAnesthesia Nursing 25(6):346, 2010. https://pubmed.ncbi.nlm.nih.gov/21126665/
- AANN, Care of the Patient Undergoing ICP Monitoring/EVD or Lumbar Drainage, 2011. The URL is in common.ts.
- High KP et al., IDSA fever and infection in long-term care residents, 2008 update, Clinical Infectious Diseases 48(2):149, 2009. https://pubmed.ncbi.nlm.nih.gov/19278394/
- Boullata JI et al., ASPEN Safe Practices for Enteral Nutrition Therapy, JPEN 41(1):15, 2017. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- Textbooks, with edition and year checked on the publisher sites: Hinkle, Brunner and Suddarth 15th edition (2022). Potter and Perry, Fundamentals 11th edition (2023). Hockenberry, Wong's 12th edition (2023). Halter, Varcarolis 9th edition (2022). Burchum and Rosenthal, Lehne's 11th edition (2022).

## For the reviewer

- Item 24: I used the nipple line (T4) as a sensory level too high for an abdominal epidural, and hand tingling with a weak grip as signs of cervical spread. Please check that the stem cannot also be read as hypovolemia. The heart rate of 54/minute is meant to rule that out.
- Item 25: the refs line says prophylactic enoxaparin is given no sooner than 4 hours after epidural catheter removal. This comes from the ASRA 4th edition. I did not read the full text of the 5th edition to confirm that it keeps the same interval.
- Item 43: the infant ranges (respirations 30 to 53/minute, sleeping heart rate 90 to 160/minute) are the PALS ranges that Wong's reproduces. I did not see the page itself.
- Item 41: warm water in a 60 mL syringe is standard practice. The ASPEN abstract I could see does not state the warm water detail. Potter is the second source.
- Item 20: the rule that balloon pump timing errors affect both arms is my simplification. It is a distractor why.
- Item 29 uses "severe risk" for a Braden total of 9 or less, because the house style bans the usual intensifier.
- Item 48: in the NEWS2 refs line, "systolic BP of 110 mmHg or less" and "heart rate of 91/minute or more" are the lowest thresholds that score any points. Please check them against the RCP chart.
- Item 05: the key is seizure risk from flumazenil in a client dependent on benzodiazepines. Resedation was left out as a distractor because it could also be defended.
