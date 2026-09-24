# Batch c05 writer report

Five case studies, 30 items. Every item has `reviewed: false` and `canada: ""`. `BATCH=c05 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints nothing for `bank/c05`.

Files: `src/bank/c05/helpers.ts` (meta and sources), `case1.ts` to `case5.ts`, `index.ts`.

## Cases

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c05-1 | Inpatient mental health unit, then medical unit | Man, 29, schizophrenia, severe reaction after a haloperidol increase | High |
| rn-c05-2 | Pediatric unit | Boy, 5 weeks, forceful vomiting before pyloric surgery | Moderate to high |
| rn-c05-3 | Mother-baby unit, then special care nursery | Newborn boy, 38 weeks, mother with type 1 diabetes, low glucose | High |
| rn-c05-4 | Surgical unit | Man, 64, day 2 after a left below-knee amputation | Moderate |
| rn-c05-5 | Home health | Woman, 81, venous leg ulcer with MRSA, daughter as caregiver | Moderate |

## Counts

Client Needs: MOC 5, SIPC 5, HPM 3, PSY 2, BCC 2, PPT 5, RRP 4, PA 4. This matches the plan.

Item types: mc 7, matrix 6 (all single mode), highlight 4, msn 4, sata 4, cloze 3, dnd 2. Each case uses 5 or 6 types.

Rationale scoring: dyads are rn-c05-2-2 (dnd) and rn-c05-3-3 (cloze). Triads are rn-c05-1-3 and rn-c05-5-2 (both cloze). rn-c05-1-4 is a zero-one dnd.

CJMM steps: each case walks the six steps in order. That gives 5 items per step.

Difficulty: level 2 has 10 items, level 3 has 18 and level 4 has 2.

Calculations: rn-c05-2-5 (maintenance IV rate, 100 mL/kg/day for 3.8 kg, 15.8 mL/hour) and rn-c05-3-5 (dextrose 200 mg/kg for 4.6 kg as dextrose 10%, 9.2 mL). Both list options from low to high.

## MC key positions

Position 1: 2 (rn-c05-2-3, rn-c05-2-5). Position 2: 1 (rn-c05-4-5). Position 3: 2 (rn-c05-3-5, rn-c05-5-3). Position 4: 2 (rn-c05-1-5, rn-c05-4-3). The key is the strict longest option in 1 of 7 mc items (rn-c05-2-3).

## Sources and verification

- Strawn JR, Keck PE Jr, Caroff SN. Neuroleptic Malignant Syndrome. American Journal of Psychiatry 164(6):870, 2007. https://psychiatryonline.org/doi/10.1176/ajp.2007.164.6.870
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022. https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2023. Already used and verified by c01.
- Feld LG et al. AAP. Clinical Practice Guideline: Maintenance Intravenous Fluids in Children. Pediatrics 142(6):e20183083, 2018. Isotonic fluid with KCl and dextrose for ages 28 days to 18 years, surgical and medical settings. Confirmed with PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/30478247/
- Adamkin DH. AAP Committee on Fetus and Newborn. Postnatal Glucose Homeostasis in Late-Preterm and Term Infants. Pediatrics 127(3):575, 2011. Confirmed with PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/21357346/
- Wight NE. ABM Clinical Protocol #1, Revised 2021. Breastfeeding Medicine 16(5):353, 2021. Confirmed with PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/33835840/
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023. Already used and verified by c01.
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. The fixture already uses this source.
- ADA Professional Practice Committee. 12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S261, 2026. https://diabetesjournals.org/care/article/49/Supplement_1/S261/163919/12-Retinopathy-Neuropathy-and-Foot-Care-Standards
- Stevens DL et al. IDSA. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update. Clinical Infectious Diseases 59(2):e10, 2014. https://academic.oup.com/cid/article/59/2/e10/2895845
- CDC. Preventing Methicillin-resistant Staphylococcus aureus (MRSA). Page last reviewed 27 June 2025. Covers not sharing towels, keeping wounds covered, bandages in the regular trash and hand hygiene. https://www.cdc.gov/mrsa/prevention/index.html
- Siegel JD et al. HICPAC. 2007 Guideline for Isolation Precautions. https://www.cdc.gov/infection-control/hcp/isolation-precautions/index.html
- McGoldrick M. Bag Technique: Best Practices for Managing the Home Care Bag. Home Healthcare Now 43(1):9, 2025. https://pubmed.ncbi.nlm.nih.gov/39763037/

## Scenario overlap across case batches

Cases 2 and 3 were first written as a school-age asthma attack and preeclampsia at 34 weeks. The parallel batches c02, c03 and c04 already held near copies of both scenarios. I replaced them with pyloric stenosis and newborn hypoglycemia before reporting. Across c02 to c04 there are also three thyroidectomy cases, three preeclampsia cases at 34 or 35 weeks, two pediatric asthma cases and three bipolar cases on lithium. The orchestrator may want to steer later batches away from these.

## For the reviewer

- rn-c05-1-2 and rn-c05-2-2 write mg/dL reference ranges as "Up to X mg/dL (Y)" so the unit gate can pair each bound. Only the upper bound is shown for creatinine and BUN.
- rn-c05-1-4 keeps "checking muscle tone and orientation" for the registered nurse. The key relies on the client being unstable.
- rn-c05-1-6 keys orthostatic hypotension and coughing on thin liquids as needing follow-up. Dysphagia as a feature of this syndrome is from Strawn 2007 as I recall it. Please confirm.
- rn-c05-2-1 does not use the heart rate of 164/minute as a sign of dehydration. The PALS awake range for young infants reaches above that.
- rn-c05-2-5 uses 100 mL/kg/day as a fictional prescription. It matches the Holliday and Segar rate for the first 10 kg. The original 1957 paper is too old for the citation gate, so Wong and the AAP guideline are cited.
- rn-c05-3-5 and rn-c05-3-6 use the AAP 2011 algorithm as I recall it: IV glucose for a symptomatic infant below 40 mg/dL, 200 mg/kg as dextrose 10% at 2 mL/kg, and a target of 45 mg/dL or more after 4 hours. The AAP full text returned 403, so I confirmed only the citation, not these values. Please check them against the text.
- rn-c05-3-1 and rn-c05-3-2 use newborn norms of 110 to 160/minute for heart rate, 30 to 60/minute for breathing and 36.5 to 37.5°C axillary. These come from Lowdermilk as I recall it.
- rn-c05-4-4 keys "prone for 30 minutes 3 times a day" and "sitting limited to 1 hour at a time". Both come from Brunner's amputation care as I recall it. Please confirm the exact figures.
- rn-c05-4-5 treats a pillow under the residual limb after the first day as the action to correct. Early elevation in the first 24 hours is accepted in some texts.
- rn-c05-5-5 keys leaving a stethoscope in the home. This follows the Siegel 2007 advice to keep noncritical equipment in the home for clients on contact precautions.
- rn-c05-5-4 places slow wound healing with a wound care nurse specialist. A reviewer could argue the primary health care provider also has a role. The provider already has two rows.
- The web search budget ran out partway through. The later sources were confirmed with PubMed E-utilities instead.
- `src/bank/c05/extra.ts` appeared in the batch folder after this report was written. I did not write it. It is not imported by `index.ts`, so its two items are not in the bank. They should stay out. Their ids do not fit the case format. rn-c05-9 names protamine sulfate as the reversal for magnesium toxicity, which is wrong. Calcium gluconate is the agent. rn-c05-8 cites asthma in the rationale, but the stem does not mention it. The orchestrator should decide whether to delete the file. Similar files exist in other batch folders.
- rn-c05-5-5 has the provider prescribe an oral antibiotic. The client has fever and a heart rate of 104/minute. IDSA 2014 may class this as moderate cellulitis that calls for IV therapy. A reviewer may prefer to change the stem to IV or to remove the drug route.
