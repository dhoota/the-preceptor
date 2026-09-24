# s05 writer report

Batch s05. 50 stand-alone items, rn-s05-01 to rn-s05-50. All items are `reviewed: false`, `version: 1`, `canada: ""`.

Files: `src/bank/s05/common.ts` (meta helper and shared sources), `part1.ts` to `part5.ts`, `index.ts`.

Checks run:

- `BATCH=s05 npx vitest run tests/bank.test.ts`: 61 of 61 pass, including the whole bank near duplicate gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s05`: prints nothing.

## Counts

Client Needs: MOC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2 (one dyad, one triad), highlight 2, bowtie 2, trend 2 (rn-s05-17 mc, rn-s05-40 matrix single).

CJMM step: recognize 4, analyze 8, prioritize 10, generate 7, action 14, evaluate 7.

Difficulty: 1 is 3, 2 is 13, 3 is 18, 4 is 13, 5 is 3.

## MC key positions

27 mc items, counting the mc trend item. Position 1: 7. Position 2: 7. Position 3: 7. Position 4: 6.

The key is the strict longest option in 3 of 27 (rn-s05-17, rn-s05-22, rn-s05-30). Select all keys in the first half of the list: 13 of 32.

## Coverage of the focus list

- Priorities after report and group assignments: 01, 05, 07, 15, 19, 23, 34, 38, 39, 41, 50.
- Quality and performance improvement: 03, 08, 09, 11, 12, 17, 20, 24, 27, 28, 40, 47, 48.
- Information technology and documentation: 04, 16, 31, 32, 33, 43, 44, 46, 49.
- Interprofessional collaboration: 13, 22, 26, 35, 36.
- Confidentiality: 02, 06, 10, 14, 18, 21, 25, 30, 37, 42, 45.

Topics were checked against s01 to s04 so they do not repeat those scenarios.

## Sources used, with verification

- Perla RJ, Provost LP, Murray SK. The Run Chart. BMJ Quality and Safety 20(1):46, 2011. https://pubmed.ncbi.nlm.nih.gov/21228075/
- Institute for Healthcare Improvement. Model for Improvement, Establishing Measures, 2024. https://www.ihi.org/how-improve-model-improvement-establishing-measures
- Institute for Healthcare Improvement. Quality Improvement Essentials Toolkit, 2017. https://www.ihi.org/library/tools/quality-improvement-essentials-toolkit
- National Patient Safety Foundation. RCA2, 2015. Action hierarchy checked at https://www.ihi.org/sites/default/files/SafetyToolkit_ActionHierarchy.pdf
- Institute for Safe Medication Practices. Smart Infusion Pumps Guidelines, 2020. https://www.ismp.org/system/files/resources/2020-10/ISMP176C-Smart%20Infusion%20Pumps-100620.pdf
- O'Grady NP et al. Prevention of Intravascular Catheter-Related Infections, 2011. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- CDC NHSN. Patient Safety Component Manual, Chapter 4, 2025. https://www.cdc.gov/nhsn/pdfs/pscmanual/4psc_clabscurrent.pdf
- HHS OCR. HIPAA FAQ 198 on messages left at home, 2002. https://www.hhs.gov/hipaa/for-professionals/faq/198/may-health-care-providers-leave-messages/index.html
- HHS OCR. Minimum Necessary Requirement. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html
- HHS OCR. De-identification Guidance, 2012. https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html
- HHS OCR. Right of Access guidance, including unencrypted email at the client's request. https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html
- 45 CFR 164.510 (directory opt out and persons involved in care). https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510
- AHRQ. TeamSTEPPS 3.0 Pocket Guide, 2023 (CUS, check-back). https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html
- ONC. SAFER Guides: Patient Identification, 2025, and Clinician Communication, 2025. https://healthit.gov/wp-content/uploads/2025/01/Safer-Guide-6.-Patient-Identification-Final.pdf and https://healthit.gov/wp-content/uploads/2025/06/SAFER-Guide-1.-Clinical-Communication-Final.pdf
- AHRQ PSNet. Alert Fatigue primer, updated December 2024. https://psnet.ahrq.gov/primer/alert-fatigue (declared in common.ts, not used by an item)
- AACN. Practice Alert: Managing Alarms in Acute Care Across the Life Span. https://www.aacn.org/clinical-resources/practice-alerts/managing-alarms-in-acute-care-across-the-life-span
- Morse JM. Preventing Patient Falls, 2nd edition, 2009. https://www.springerpub.com/preventing-patient-falls-9780826103895.html
- Evans L et al. Surviving Sepsis Campaign Guidelines 2021. Critical Care Medicine 49(11):e1063. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Enoxaparin (Lovenox) FDA prescribing information, 2021. https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf
- Textbooks reused from sibling batches: Potter 2023, Hinkle 2022, Yoder-Wise 2023, Lowdermilk 2023, Halter 2022, Langley 2009. ANA documentation principles 2010, ANA Code 2025, HIPAA Privacy Rule summary 2003, IHI SBAR 2023 and Jones 2011 NEJM rapid response teams come from sibling common files.

## For the reviewer

- rn-s05-14: Safe Harbor lists initials as not allowed, based on the HHS guidance on derivatives of identifiers. The full ZIP code is keyed. The first three digits can be kept in some areas, so the item says "full ZIP codes".
- rn-s05-19: the refs value for heart failure weight gain (more than 1 kg in a day or 2 kg in a week) is a common teaching threshold. Thresholds differ between sources. Please check it against Hinkle.
- rn-s05-29: the refs value of 30 mL/hour as the adult urine output floor is a textbook teaching value. Some sources use 0.5 mL/kg/hour.
- rn-s05-36: the renal dose for enoxaparin treatment (1 mg/kg once daily below 30 mL/minute) comes from Table 1 of the FDA label. The search result did not show the table text. Please confirm.
- rn-s05-47: Morse Fall Scale cutoffs differ by facility, so the stem gives the unit's bands.
- rn-s05-13: the keyed CUS reply uses two of the three CUS phrases. It could be written out in full if the reviewer prefers.
- rn-s05-39 (bow-tie) tests escalation. Naloxone is not among the actions on purpose, so stopping the PCA and calling the rapid response team are the two keys. A reviewer may want to tag this PA and not MOC. It stays MOC here to keep the batch at MOC 50.
- rn-s05-41 and rn-s05-50 are rated 5 because each has a strong second choice (an air leak, a GI bleed).
- rn-s05-30 keys email at the client's request once the risk has been explained. Clinic policy may send the request through health information management. The stem says the nurse follows clinic policy on record requests.
