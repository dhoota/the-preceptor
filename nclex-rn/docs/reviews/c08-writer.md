# Batch c08 writer report

Five case studies, 30 items. Every item and case has `reviewed: false`. Every item has `canada: ""`. `BATCH=c08 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints nothing for `bank/c08`.

Files: `src/bank/c08/helpers.ts` (meta and sources), `case1.ts` to `case5.ts`, `index.ts`.

House style for this report and the items: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Cases

The five scenarios follow `docs/topic-plan.json` for c08, in order.

| Case | Scenario | Setting | Client | Acuity |
|---|---|---|---|---|
| rn-c08-1 | Fat embolism after femur fracture | Orthopedic trauma unit, then ICU | Man, 24, femoral shaft fracture in skeletal traction | High |
| rn-c08-2 | Compartment syndrome after tibial fracture | Pediatric unit | Boy, 14, long leg cast, mother present | High |
| rn-c08-3 | Sickle cell crisis in a young adult | Emergency department, then medical unit | Woman, 23, hemoglobin SS on a hydromorphone PCA | Moderate |
| rn-c08-4 | Fever and neutropenia during chemotherapy | Oncology nurse phone line (community), then ED and oncology unit | Woman, 67, breast cancer, day 9 after cycle 3 | High |
| rn-c08-5 | Tumor lysis syndrome after chemotherapy for leukemia | Hematology unit | Man, 41, new acute lymphoblastic leukemia | High |

## Counts

Client Needs: MOC 5, SIPC 4, HPM 3, PSY 3, BCC 3, PPT 4, RRP 4, PA 4. This matches the plan.

| Item | Need | Type | Step | Difficulty |
|---|---|---|---|---|
| rn-c08-1-1 | PA | highlight | recognize | 3 |
| rn-c08-1-2 | RRP | matrix single | analyze | 4 |
| rn-c08-1-3 | PA | cloze triad | prioritize | 3 |
| rn-c08-1-4 | SIPC | sata | generate | 3 |
| rn-c08-1-5 | MOC | dnd zero-one | action | 2 |
| rn-c08-1-6 | RRP | mc | evaluate | 3 |
| rn-c08-2-1 | RRP | msn select three | recognize | 3 |
| rn-c08-2-2 | PA | cloze dyad | analyze | 3 |
| rn-c08-2-3 | MOC | mc | prioritize | 2 |
| rn-c08-2-4 | BCC | matrix single | generate | 3 |
| rn-c08-2-5 | HPM | mc | action | 3 |
| rn-c08-2-6 | PSY | sata | evaluate | 3 |
| rn-c08-3-1 | PPT | highlight | recognize | 3 |
| rn-c08-3-2 | PSY | matrix single | analyze | 4 |
| rn-c08-3-3 | PPT | cloze dyad | prioritize | 4 |
| rn-c08-3-4 | BCC | sata | generate | 2 |
| rn-c08-3-5 | SIPC | mc | action | 3 |
| rn-c08-3-6 | HPM | msn select three | evaluate | 2 |
| rn-c08-4-1 | PA | sata | recognize | 2 |
| rn-c08-4-2 | RRP | mc with calc | analyze | 3 |
| rn-c08-4-3 | MOC | cloze zero-one | prioritize | 3 |
| rn-c08-4-4 | SIPC | matrix single | generate | 3 |
| rn-c08-4-5 | PPT | mc | action | 4 |
| rn-c08-4-6 | HPM | msn select three | evaluate | 3 |
| rn-c08-5-1 | MOC | highlight | recognize | 3 |
| rn-c08-5-2 | BCC | mc with calc | analyze | 3 |
| rn-c08-5-3 | MOC | cloze triad | prioritize | 3 |
| rn-c08-5-4 | PPT | sata | generate | 4 |
| rn-c08-5-5 | SIPC | dnd dyad | action | 2 |
| rn-c08-5-6 | PSY | matrix single | evaluate | 3 |

Item types: mc 7, matrix 5, cloze 5, sata 5, highlight 3, msn 3, dnd 2. Each case uses 5 or 6 types.

Rationale scoring: dyads are rn-c08-2-2 and rn-c08-3-3 (cloze) and rn-c08-5-5 (dnd). Triads are rn-c08-1-3 and rn-c08-5-3 (cloze).

CJMM steps: each case walks the six steps in order, 5 items per step.

Difficulty: level 2 has 6 items, level 3 has 19, level 4 has 5.

Calculations: rn-c08-4-2 (absolute neutrophil count, 1400 x 22% = 308/mm3) and rn-c08-5-2 (urine output 150 mL over 6 hours for 80 kg = 0.31 mL/kg/hour). Both list options from low to high. Every distractor number was recomputed.

## MC key positions

Position 1: 1 (rn-c08-2-3). Position 2: 2 (rn-c08-3-5, rn-c08-5-2). Position 3: 2 (rn-c08-1-6, rn-c08-4-2). Position 4: 2 (rn-c08-2-5, rn-c08-4-5). The key is the strict longest option in 0 of 7 mc items. Keyed choices run longer than distractors in 4 of 14 multi-key pools.

## Sources and verification

- Kosova E, Bergmark B, Piazza G. Fat Embolism Syndrome. Circulation 131(3):317, 2015. PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/25601951/
- Timon C, Keady C, Murphy CG. Fat Embolism Syndrome review. Malaysian Orthopaedic Journal 15(1):1, 2021. Full text checked for onset within 24 to 48 hours, petechiae on the anterior thorax and axillae, thrombocytopenia, early fixation and supportive care. https://pmc.ncbi.nlm.nih.gov/articles/PMC8043637/
- Hak DJ. Acute Compartment Syndrome in Children. In Mauffrey C et al., Compartment Syndrome, Springer 2019, Chapter 13. Search result confirmed the 3 As (anxiety, agitation, analgesic need). https://www.ncbi.nlm.nih.gov/books/NBK553897/
- Bae DS, Kadiyala RK, Waters PM. J Pediatr Orthop 21(5):680, 2001. Abstract confirms rising analgesic need as the more sensitive sign. https://pubmed.ncbi.nlm.nih.gov/11521042/
- Katz AL, Webb SA. AAP Committee on Bioethics. Pediatrics 138(2):e20161485, 2016. https://pubmed.ncbi.nlm.nih.gov/27456510/
- NHLBI. Evidence-Based Management of Sickle Cell Disease: Expert Panel Report, 2014. Full text checked for local heat, distraction, incentive spirometry while awake, early walking, sedation monitoring, fever of 38.5°C (101.3°F), dose based on home opioid use, and ACIP immunizations. https://www.nhlbi.nih.gov/sites/default/files/media/docs/Evd-Bsd_SickleCellDis_Rep2014.pdf
- Brandow AM et al. ASH 2020 guidelines for sickle cell disease pain. Blood Advances 4(12):2656, 2020. https://pubmed.ncbi.nlm.nih.gov/32559294/
- Jungquist CR et al. ASPMN opioid sedation monitoring revisions. Pain Management Nursing 21(1):7, 2020. https://pubmed.ncbi.nlm.nih.gov/31377031/
- Wuhrman E et al. ASPMN position statement on PCA by proxy. Pain Management Nursing 8(1):4, 2007. https://pubmed.ncbi.nlm.nih.gov/17336864/
- Freifeld AG et al. IDSA 2010 update. Clinical Infectious Diseases 52(4):e56, 2011. Full text checked for the fever and neutropenia definitions, no plants or flowers, no rectal temperatures, hand hygiene and 2 blood culture sets. https://academic.oup.com/cid/article/52/4/e56/382256
- Taplitz RA et al. ASCO and IDSA. J Clin Oncol 36(14):1443, 2018. Abstract confirms first antibiotic dose within 1 hour of triage. https://pubmed.ncbi.nlm.nih.gov/29461916/
- Rubin LG et al. 2013 IDSA vaccination of the immunocompromised host. Clin Infect Dis 58(3):e44, 2014. https://pubmed.ncbi.nlm.nih.gov/24311479/
- O'Grady NP et al. HICPAC catheter infection guideline, 2011. Already used in the bank. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- Howard SC, Jones DP, Pui CH. The Tumor Lysis Syndrome. NEJM 364(19):1844, 2011. Full text checked for the Cairo-Bishop thresholds, oliguria below 0.5 mL/kg/hour for 6 hours, a urine target of at least 2 mL/kg/hour, hyperkalemia as the most dangerous part, avoiding urine alkalinization and uric acid samples on ice. https://pmc.ncbi.nlm.nih.gov/articles/PMC3437249/
- Coiffier B et al. J Clin Oncol 26(16):2767, 2008. https://pubmed.ncbi.nlm.nih.gov/18509186/
- Elitek (rasburicase) prescribing information, DailyMed, latest version August 2026. G6PD contraindication, anaphylaxis boxed warning, chilled samples. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0ae10bc4-6b65-402f-9db5-2d7753054922
- The Joint Commission. Sentinel Event Alert 58, Inadequate Hand-off Communication, 2017. https://pubmed.ncbi.nlm.nih.gov/28914519/
- Polovich M, Olsen MM. ONS Safe Handling of Hazardous Drugs, 3rd edition, 2018. Confirmed as a real title by search. I could not open the text.
- IHI SBAR tool 2023, CMS 42 CFR 482.13(e), Brunner 15th edition, Wong 12th edition and Halter 9th edition were already verified in earlier batches.

## For the reviewer

- rn-c08-1-2 keys a sudden platelet fall as pointing to fat embolism over clot embolism. Timon 2021 lists thrombocytopenia as common in fat embolism. Clot embolism can occur with heparin-induced thrombocytopenia, but the client is on day 2 of enoxaparin, which is too early for that.
- rn-c08-1-4 is a safety item placed at the generate step. The main problem is hypoxemia. The item plans safety for the confusion it causes.
- rn-c08-2-4 keys lowering the leg to heart level from Brunner as I recall it. I could not open the text to confirm the wording.
- rn-c08-3-1 keys the unused incentive spirometer under a PPT tag. The item is mainly about PCA effectiveness.
- rn-c08-3-2 lists two misuse behaviors that are not the client's own. The stem frames the rows as behaviors that are often misread.
- rn-c08-4-1 uses "often lowest 7 to 14 days after a cycle" as the neutrophil nadir. This is from Brunner as I recall it. Please confirm.
- rn-c08-4-4 keys an enema as not indicated. Freifeld names rectal temperatures and exams. The enema extends that reasoning.
- rn-c08-4-5 keys giving the antibiotic after only a port culture set. Freifeld asks for a peripheral set as well, and Taplitz sets the 1 hour target. The key favors the time target and asks the nurse to report the missing set.
- rn-c08-5-4 keys G6PD screening before rasburicase. The label says to screen clients at higher risk. The item does not state the client's ancestry.
- rn-c08-5-5 relies on ONS 2018 for double chemotherapy-tested gloves and an impermeable gown when handling excreta within 48 hours. I could not open the book. The 48 hour window is also written into the case orders.
- rn-c08-5-6 keys "I'd be better off not waking up" as needing follow-up for possible suicidal thinking. This follows Halter as I recall it.
- Scenario overlap: the bank already has stand-alone items on fat embolism signs (s19), compartment syndrome in a casted tibia (s19, s25), sickle cell pain and acute chest syndrome (s22), ANC calculation (s08, s20) and tumor lysis labs (s22). The case stems use different clients, numbers and wording. The near duplicate gate passes.
