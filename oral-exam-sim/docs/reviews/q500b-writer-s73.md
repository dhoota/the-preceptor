# Q500B writer report: s73, dvt-pe

Batch s73, topic `dvt-pe` (Deep venous thrombosis (DVT) and pulmonary embolus (PE)). File `src/samps/s73/dvt-pe.ts`, array `DVT_PE_S73`. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting and patient | Questions |
|---|---|---|---|
| dvt-pe-48 | Swollen leg after months of groin injecting | Tertiary ED, 31-year-old woman who injects into the femoral vein | 4 single |
| dvt-pe-49 | Breathless new mother | Tertiary ED, 34-year-old woman 10 days after an emergency caesarean, breastfeeding | 1 menu, 3 single |
| dvt-pe-50 | Teenager home from a ski trip | Tertiary ED, 15-year-old boy after tibial nailing and a long flight | 1 menu, 3 single |
| dvt-pe-51 | Painful neck early in pregnancy | Tertiary ED, 33-year-old woman at 9 weeks after IVF with severe OHSS, jugular thrombosis | 4 single |
| dvt-pe-52 | Older man with chest pain on a blood thinner | Rural hospital, 76-year-old man with PE despite apixaban (St John's wort) | 4 single |

20 questions: 18 single, 2 menu. Single key positions 0 to 4: 3, 3, 4, 4, 4 (max 22 percent). The key is the single longest option in 1 of 18 singles.

## Key feature coverage

Bank counts before this batch (all batches and alsoTopics questions): KF1 15, KF2 18, KF3 21, KF4 29, KF5 20, KF6 61, KF7 31. The extra questions went to the thinnest features.

| KF | This batch | Items |
|---|---|---|
| 1 History of risk factors | 5 | 48 q1, 49 q1, 50 q1, 51 q1, 52 q3 |
| 2 Examination | 4 | 48 q2, 49 q2, 50 q2, 51 q2 |
| 3 Decision rules | 3 | 48 q3, 50 q3, 52 q1 |
| 4 Tests by pretest probability | 2 | 48 q4, 52 q2 |
| 5 Testing tailored to context | 3 | 49 q3, 50 q4, 51 q3 |
| 6 Anticoagulant choice | 2 | 49 q4, 51 q4 |
| 7 Objective data for outpatient care | 1 | 52 q4 |

## New angles (checked against all 47 existing dvt-pe SAMPs, the sob, chest-pain, asthma-copd and abdominal-pain SAMPs that test dvt-pe, and the 3 dvt-pe oral cases)

- Femoral injecting as a DVT risk factor, a pulsatile groin mass (pseudoaneurysm) as the finding that changes management, and Wells not capturing injecting drug use.
- Postpartum risk factors as Thrombosis Canada lists them (emergency caesarean and serious infection count, a planned uncomplicated caesarean does not), peripartum cardiomyopathy as the PE mimic on examination, breastfeeding after contrast CT, and warfarin as the oral agent while breastfeeding.
- Wells score performance in children (Biss 2009) and a normal D-dimer not excluding PE in a child with high suspicion.
- Severe OHSS as a risk factor, jugular vein thrombosis in early IVF pregnancy, duplex ultrasound of the neck, and LMWH in the first trimester.
- St John's wort induction as the cause of PE on apixaban, and the Hestia item "PE diagnosed during anticoagulant treatment".

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| jackman-groin-pwid | Jackman J, Guthrie GJK, Suttie SA. The groin and people who inject drugs: management and pitfalls. Br J Hosp Med (Lond). 2026. | https://www.imrpress.com/journal/BJHM/87/5/10.31083/BJHM54135 (opened) |
| wells-dvt-2003 | Wells PS and colleagues. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003. | Already in the bank (s33). Item definitions checked against the Thrombosis Canada DVT diagnosis guide. No url added. |
| tc-dvt-dx | Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf (downloaded and read) |
| tc-preg-prophylaxis | Thrombosis Canada. Clinical guide: pregnancy, thromboprophylaxis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/THROMBOPROPHYLAXISINPREGNANCY_43.pdf (downloaded and read) |
| hfa-ppcm-2019 | Bauersachs J and colleagues. Peripartum cardiomyopathy position statement, HFA of the ESC. Eur J Heart Fail. 2019. | Abstract confirmed by web search (Eur J Heart Fail 21(7):827 to 843). Full text not opened, so no url. |
| abm-protocol-31 | Mitchell KB, Fleming MM, Anderson PO, Giesbrandt JG, Academy of Breastfeeding Medicine. ABM clinical protocol 31. Breastfeed Med. 2019. | https://www.bfmed.org/assets/DOCUMENTS/PROTOCOLS/Protocol%20%2331%20-%20English%20Translation.pdf (downloaded and read) |
| tc-preg-vte-tx | Thrombosis Canada. Clinical guide: pregnancy, venous thromboembolism treatment. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf (downloaded and read) |
| tc-pe-dx | Thrombosis Canada. Clinical guide: pulmonary embolism (PE) diagnosis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf (downloaded and read) |
| biss-peds-pe-2009 | Biss TT, Brandão LR, Kahr WH, Chan AK, Williams S. J Thromb Haemost. 2009. | PubMed 19682234 abstract read through the NCBI E-utilities record. |
| arya-ivf-jugular-2001 | Arya R, Shehata HA, Patel RK and colleagues. Internal jugular vein thrombosis after assisted conception therapy. Br J Haematol. 2001. | PubMed 11722427 abstract read through the NCBI E-utilities record. |
| wells-pe-2001 | Wells PS and colleagues. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001. | Already in the bank (s33). No url added. |
| tc-apixaban | Thrombosis Canada. Clinical guide: apixaban (Eliquis). Version dated 2 June 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf (downloaded and read, St John's wort named as a strong inducer) |
| bellou-outpatient-pe | Bellou E, Keramida E, Karampinis I and colleagues. Outpatient treatment of pulmonary embolism. Breathe (Sheff). 2020. | https://pmc.ncbi.nlm.nih.gov/articles/PMC7792861/ (opened, Hestia table) |

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s73` prints nothing. `SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passes 127 of 128. The bank-wide near duplicate stem test passes when given a longer timeout (`--testTimeout=120000`, 25 seconds) but times out at the 5 second default while the shared machine is under heavy load from other agents (load average above 20 on 4 cores). No stem in this batch is a near duplicate.

## For the reviewers

- dvt-pe-50 q3. Biss 2009 is retrospective. The 2026 BEEPER study validated PERC-Peds (not Wells) in children aged 4 to 17. The item tests only the Wells score, and the explanation avoids saying no pediatric rule exists. Check that this holds.
- dvt-pe-49 q3 is tagged KF5 (testing tailored to context: breastfeeding after CT). Confirm the tag.
- dvt-pe-52 q3 is tagged KF1. It tests the medication history that explains a breakthrough PE, which is a stretch from baseline risk factors.
- dvt-pe-52 q1 uses the Wells 2001 two level cut point of more than 4 for "PE likely". The Thrombosis Canada table footnote reads "unlikely <4.5, likely >4.5". His score of 5.5 is likely under either reading.
- dvt-pe-51 q4 says 12 800 units is given "as the nearest prefilled syringe". The exact syringe band was not quoted, so a dose band was not keyed.
- dvt-pe-48 q2: the source says a pulsatile mass is present in only a few patients with pseudoaneurysm. The explanation says so.
- Thrombosis Canada guide years follow the bank's existing citations (2025). The PDFs carry no printed date.
- The web search budget ran out late in drafting. Every source above had been verified before that point.
