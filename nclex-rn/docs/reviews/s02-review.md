# Batch s02 adversarial review

Scope: every .ts file in src/bank/s02. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s02-91 and rn-s02-92), which index.ts does not import. I read every stem, option, why, rationale and ref under Lens A and Lens B. I recomputed every number with a script. I ran itemProblems on all 52 items, including the two in extra.ts, with a script in my scratchpad. No gate problems remain.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s02-92 | option 1 text and why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s02-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved". The stem never says so. They now say each agent has no effect on magnesium. | B | medium |
| rn-s02-92 | need, sources | Tagged MOC, but it tests an antidote (PPT). The SOGC citation now gives the journal. ACOG Practice Bulletin 222 added as a second source. | B | medium |
| rn-s02-91 | why, option 1, rationale, refs, sources | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". Its onset is hours. That delay is why it is not first. Onset added to refs and Batterink 2015 added as a source. | A | high |
| rn-s02-91 | need | Tagged MOC, but it tests drug priority in hyperkalemia (PPT). | B | medium |
| rn-s02-45 | sources (TJC_UP in common.ts) | Cited Universal Protocol UP.01.03.01, 2024, through a PSNet page. From January 2026 the hospital program uses the National Performance Goals. The time-out is now NPG.01.06.03. | A | high |
| rn-s02-22 | rationale, why of action 1 | Said flatly that the nurse is a mandated reporter. The NCEA and NAPSA brief says every state has mandated reporters except New York. Now "in nearly every state". The key stays, since reporting is still the right action. | A | medium |
| rn-s02-22 | why, condition 1 | The why said "an empty kitchen". The stem says the kitchen has little food. | B | low |
| rn-s02-47 | stem | The rationale and two whys say the client is alert and able to consent. The stem gave no mental status. The stem now says the client is alert and oriented. | B | high |
| rn-s02-32 | rationale, why of span 2 | Called the provider call "overdue" 30 minutes after the lab called. Nothing in the stem sets a time limit. NPG.01.02.01 leaves the acceptable interval to each hospital. Now "the call cannot wait". | B | medium |
| rn-s02-05 | rationale | Said the bruises were "of different ages" because of their colors. Bruise color does not reliably date a bruise. The rationale now rests on the location, back and buttocks, which the stem gives. | A | low |
| rn-s02-37 | why, option 4 | Referred to "the push". The stem gives IV furosemide but never the method. Now "the dose". | B | low |
| rn-s02-48 | rationale, why of option 6 | Said a living will applies "wherever the person receives care". Recognition across state lines varies. Now says it is not limited to one facility, which is what the distractor tests. | A | low |

## Key changes

- rn-s02-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate is the antidote for magnesium toxicity (SOGC Guideline No. 426, ACOG Practice Bulletin 222). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Frameworks behind the priority and delegation keys

- Acute over chronic and unstable over stable: 23 (possible stroke within the treatment window), 33 (new chest pain), 50 (severe-range BP with headache), 32 (critical potassium and falling SpO2).
- Delegation and assignment under NCSBN and ANA 2019 (assessment, teaching, evaluation and judgment stay with the RN): 02, 09, 20, 26, 35. Student supervision: 37.
- Case management criteria (complex needs, high use, barriers): 08, 41.

## Numbers checked

- Item 01: 2 mg minus 0.5 mg leaves 1.5 mg to waste.
- Item 17: 15 of 60 is 25%, 12 of 64 is 18.8%, 9 of 58 is 15.5%, 7 of 62 is 11.3%. The table rounds to 25, 19, 16 and 11. Discharges run 58 to 64, as the why says.
- Item 22: 55 kg to 48 kg is a 7 kg loss, 12.7% in 2 months. A 30-day supply filled 60 days ago and nearly full supports missed doses.
- Item 23: 38.1°C is 100.6°F.
- Item 38: 62 kg to 56 kg and meals 90% to 50%, as the rationale says.
- Item 50: 164/110 mmHg meets both limits in the ref (160 systolic or 110 diastolic).
- Item 20: 4 RNs for 28 clients is 7 each, against about 4.7 with 6 RNs.
- Clock times agree in 06 (0600 dose, 0645 signature, 0800 case) and 32 (1830 call, 1900 report, 1500 SpO2).

## Sources verified

- NCSBN and ANA, National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf (reachable, 200)
- The Joint Commission, National Performance Goals, Hospital Program, effective January 2026. Read the PDF: NPG.01.06.03 time-out (patient, site, procedure agreed by the team), NPG.01.06.02 site marking, NPG.01.02.01 critical results with the interval set by the hospital. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316-e436, August 2026. Checked by PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/41582814/
- ACOG Practice Bulletin 222. Obstet Gynecol 135(6):e237-e260, 2020. PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/32443079/
- ASHP Guidelines on Preventing Diversion of Controlled Substances. Am J Health-Syst Pharm 79(24):2279-2306, 2022. PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/36208462/
- Magee LA et al. SOGC Guideline No. 426. J Obstet Gynaecol Can 44(5):547, 2022. PMID 35577426. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Batterink J, Cessford TA, Taylor RA. Pharmacological interventions for the acute management of hyperkalaemia in adults. Cochrane Database Syst Rev CD010344, 2015. PMID 35658162. https://pubmed.ncbi.nlm.nih.gov/35658162/
- Child Welfare Information Gateway, Mandatory Reporting of Child Abuse and Neglect, current through May 2023. Nurses are named in 46 states. The other 4 require every person to report. https://artifacts.childwelfare.gov/public/documents/mandatory-reporting-abuse-neglect.pdf
- NCEA and NAPSA, Mandated Reporting of Abuse of Older Adults and Adults with Disabilities. "Every state, with the exception of New York, has mandated reporters." https://www.napsa-now.org/wp-content/uploads/2024/01/NCEA_NAPSA_MandatedReportBrief.pdf
- 45 CFR 164.510(a): directory holds name, location, general condition and religious affiliation. Clergy may receive it. Others get it, minus religion, only by asking for the client by name. https://www.law.cornell.edu/cfr/text/45/164.510
- 42 CFR 483.10: choice of attending physician (d), right to manage financial affairs (f)(10), choice of schedules including sleeping times (f)(1), unopened mail, freedom from reprisal. https://www.law.cornell.edu/cfr/text/42/483.10
- 42 CFR 482.13(a)(2): grievance process and whom to contact. https://www.law.cornell.edu/cfr/text/42/482.13
- 45 CFR 46.116(b)(8): the subject may discontinue at any time without penalty or loss of benefits. https://www.law.cornell.edu/cfr/text/45/46.116
- 42 CFR 489.24(d)(4): screening may not be delayed to ask about payment or insurance. https://www.law.cornell.edu/cfr/text/42/489.24
- ONC SAFER Guide, Contingency Planning, 2025. Paper forms for at least 8 hours, downtime records entered and reconciled after restoration. https://www.healthit.gov/wp-content/uploads/2025/06/SAFER-Guide-2.-Contingency-Planning-Final.pdf
- Marx D, Just Culture primer, 2001. https://psnet.ahrq.gov/issue/patient-safety-and-just-culture-primer-health-care-executives
- IHI SBAR tool, CMSA Standards of Practice 2022, ANA Code of Ethics 2025, ANA documentation principles 2010, Guido 7th edition, Lowdermilk 13th edition: pages reachable (200).

## Needs Arjan's decision

- rn-s02-92 key change above.
- rn-s02-13: the TJC sentinel event page returns 403 and I could not open the policy itself. The item's rule (a fall with any fracture is a sentinel event) matches the published policy as I know it, but I did not confirm it from the page this session.
- HHS HIPAA and AHRQ pages (HIPAA_ACCESS, HIPAA, BEDSIDE, TEACHBACK) return 403 to this session. The citations are real and the regulation text was confirmed from the CFR where one applies.
- ELDER_REPORT carries year 2024 from the upload path. The brief's state list is dated June 2020. The true publication year may be earlier.
- rn-s02-45: the rationale says any team member can stop the procedure. NPG.01.06.03 describes the time-out but does not state that right in words. It is standard teaching.
- rn-s02-91 and rn-s02-92 are PPT items. If they join the bank they belong in a batch that holds PPT, not s02, which is all MOC.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 13 fixes across 9 items, including one key change in an extra.ts item. No key changed in the bank. tsc prints nothing for bank/s02 and BATCH=s02 npx vitest run tests/bank.test.ts passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
