# Writer report: batch s30, Continuous quality improvement (CQI)

File: `src/samps/s30/cqi.ts` (export `CQI_S30`), re-exported as `SAMPS_S30` in `src/samps/s30/index.ts`. All SAMPs are `reviewed: false`.

## Count and mix

- 20 SAMPs, ids cqi-16 to cqi-35.
- 74 questions: 67 single, 7 menu. 13 SAMPs have 4 questions and 7 have 3.
- Menu questions sit in cqi-16, 20, 22, 26, 31, 34 and 35 (7 of 20 SAMPs).
- Patients span a 11-month-old, a 4-year-old, a 7-year-old, a 15-year-old, adults and five adults aged 79 to 88. Settings are tertiary, community (cqi-18) and rural (cqi-29).
- Operational cases with no patient assessed (cqi-19, cqi-25) have `vitals: {}`. The test requires the field to exist.

## Key positions (single questions)

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Keys | 13 | 14 | 13 | 13 | 14 |

Highest position share is 20.9%. The key is the single longest option in 28.4% of singles.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Contributing factors and corrective action | 15 |
| 2. Disclosure | 12 |
| 3. Quality review with indicators | 12 |
| 4. Improvement project and remeasurement | 12 |
| 5. Core safety practices | 13 |
| 6. Quality work built into routine practice | 10 |

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s30`: no output.
- `SAMP_BATCH=s30 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 443 passed.

## Avoiding overlap with cqi-01 to cqi-15

The existing set already teaches specimen labelling identifiers, I-PASS handover, 72-hour return review steps, balancing measures, a sepsis Model for Improvement, the 7-point run chart shift, hydromorphone disclosure, the ISMP Do Not Use list, results follow-up, C. difficile hand hygiene, just culture for a heparin pump error, CUS for a wrong-side chest tube, BPMH sources for admission, dashboard indicators, LWBS, the crash cart debrief, STEMI follow-up disclosure, the Ontario Apology Act and QCIPA. The new batch covers other ground: CIAF incident classes, securing items, concise vs comprehensive vs multi-incident analysis, statements of findings, the substitution test, triage between system and accountability review, the hierarchy of effectiveness in several settings, near miss and no harm disclosure, multi-patient disclosure, disclosure through an interpreter, who leads disclosure with a resident involved, chart addenda, SBAR elements and read-back, the minimum content for care transitions, universal falls precautions, concentrated electrolytes, the Canadian high-alert list, weight in kilograms, run chart trend vs shift and a no-signal result, control charts with special vs common cause and tampering, Pareto charts, aim statements, PDSA ramps, the Global Trigger Tool, CAEP crowding targets and the 90th percentile, the Ontario Return Visit Quality Program, audit and feedback design, Ottawa M&M rounds, second victim support and FMEA.

## Sources (all verified this session)

- Canadian Patient Safety Institute. Canadian Incident Analysis Framework. 2012. Full PDF read (hierarchy of effectiveness, immediate response, analysis methods, incident decision tree, statements of findings, close the loop). https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/
- CPSI. Canadian Disclosure Guidelines. 2011. Full PDF read. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/
- CMPA. Disclosing harm from healthcare delivery. 3rd ed. 2017. Full PDF read. https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_15_disclosure_handbook-e.pdf
- CMPA. Learning from adverse events: fostering a just culture of safety. 2009. PDF read (triage questions). https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_learning_from_adverse_events-e.pdf
- Accreditation Canada. Required Organizational Practices: 2021 handbook. PDF read (client identification, information transfer, ED medication reconciliation, concentrated electrolytes, falls). https://vitalitenb.ca/images/files/documents/medecins/2021_rop_handbook.pdf
- ISMP Canada. Weight-based medication dose errors. Safety Bulletin 16(9). 2016. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2016-09-WeightBasedDoseErrors.pdf
- ISMP Canada. Use of one insulin pen for multiple patients is a high-risk practice. Safety Bulletin 13(4). 2013. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2013-04_ALERT_InsulinPenHighRiskPractice.pdf
- ISMP Canada. Canadian High-Alert Medication List. 2024. https://ismpcanada.ca/wp-content/uploads/ISMP-Canada-High-Alert-Med-List-2024-8x11-1.pdf
- Affleck A et al. Emergency department overcrowding and access block. CJEM. 2013. Full text read. https://pubmed.ncbi.nlm.nih.gov/24176460/
- Li MK et al. Emergency department overcrowding: a CAEP position statement. CJEM. 2026. Targets confirmed from the CAEP web page only. https://www.caep.ca/position-statements/emergency-department-overcrowding
- Chartier LB et al. ED Return Visit Quality Program. Ann Emerg Med. 2021. Abstract. https://pubmed.ncbi.nlm.nih.gov/33199045/
- Chartier LB et al. Quality improvement primer parts 1 and 2 (CJEM 2018) and part 3 (CJEM 2019). Abstracts. PMIDs 28756779, 28934995, 29925452.
- Perla RJ, Provost LP, Murray SK. The run chart. BMJ Qual Saf. 2011. Full text read.
- Ivers N et al. Audit and feedback. Cochrane. 2025. Abstract. https://pubmed.ncbi.nlm.nih.gov/40130784/
- Haig KM et al. SBAR. Jt Comm J Qual Patient Saf. 2006. https://pubmed.ncbi.nlm.nih.gov/16617948/
- Haslam N et al. Prep, stop, block. Anaesthesia. 2022. https://pubmed.ncbi.nlm.nih.gov/34904710/
- Scott SD et al. Second victim. Qual Saf Health Care. 2009. Abstract. https://pubmed.ncbi.nlm.nih.gov/19812092/
- Griffin FA, Resar RK. IHI Global Trigger Tool. 2nd ed. 2009. Full PDF read.
- Benneyan JC et al. Statistical process control. Qual Saf Health Care. 2003. Abstract only. https://pubmed.ncbi.nlm.nih.gov/14645763/
- Calder LA et al. The Ottawa M&M model. Acad Emerg Med. 2014. Abstract. https://onlinelibrary.wiley.com/doi/10.1111/acem.12330

## Points for reviewers

1. cqi-32 q1 and q2 cite Benneyan 2003, but I could read only the abstract. The teaching is standard SPC: a point beyond a control limit is special cause, so you look for that cause. q3 on tampering cites Perla, which I did read.
2. cqi-23 q2 uses the CAEP targets (2 hours median, 8 hours 90th percentile). They appear in the 2013 statement. For the 2026 statement I confirmed them only from the CAEP web summary.
3. The Accreditation Canada citation is the 2021 ROP handbook, the newest one I could read in full. Newer handbooks exist but were not accessible. The falls ROP I used is written for inpatient services. cqi-30 makes the patient an admitted boarder so that it applies.
4. cqi-21 q3 cites a UK source (Prep, stop, block) because I found no Canadian guidance on a pre-block pause.
5. cqi-25 q1 and cqi-28 q2 apply the CIAF hierarchy of effectiveness to decision support and a provincial drug-profile interaction check, which I call automation. Some reviewers may rank a computerized prompt nearer the reminder tier.
6. cqi-35 q2 relies on the ROP concentrated electrolyte list. I left calcium out on purpose because of the emergency cart exception for prefilled syringes.
7. cqi-24 is set in Ontario on purpose, since the Return Visit Quality Program is an Ontario program.
8. Seven SAMPs have 3 questions: cqi-26, 27, 30, 32, 33, 34 and 35. The rest have 4.
9. The source map `S` includes `qi1` and `cmpaJust`. Both are used. No citation was invented.
