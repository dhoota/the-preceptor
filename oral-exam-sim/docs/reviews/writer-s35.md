# Writer report: batch s35, Emergency medical services (EMS)

File: `src/samps/s35/ems.ts` (export `EMS_S35`), exported from `src/samps/s35/index.ts` as `SAMPS_S35`.

## Count, mix and key positions

- 21 SAMPs, ems-16 to ems-36. All `reviewed: false`.
- 75 questions: 66 single and 9 menu. Nine SAMPs have 3 questions and twelve have 4.
- Single key positions, first to fifth: 13, 12, 11, 15, 15. The highest is 22.7 percent.
- The key is the longest option in 14 of 66 singles (21.2 percent).
- `tsc` is clean for s35. `SAMP_BATCH=s35 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 454 of 454.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Call ahead, field direction, ready the department | 34 |
| 2. Handover details only paramedics know | 11 |
| 3. Stabilize before transfer | 13 |
| 4. Mass casualty triage, early treatment, decontamination | 17 |

## Scope of the cases

Most cases are set in Ontario and name the province. That lets the keys rest on the published Ontario BLS and ALS standards, which I read in full text: medical and trauma termination of resuscitation, the DNR Confirmation Form, refusal, the stroke and STEMI bypass cards, air ambulance use, interfacility escort, the nerve agent directive, adrenal crisis, buprenorphine, hyperkalemia, TXA, tourniquet handover and obvious death. Cases outside Ontario key only principles that hold everywhere:

- BC: palliative dyspnea, using the BCEHS guideline.
- Alberta: an ammonia release.
- Saskatchewan: SALT triage.
- Ottawa: a radiological device (the city is in Ontario, but this case uses no Ontario standard).
- Unnamed community hospitals: neonatal HIE and aortic dissection.

I searched the bank to avoid repeating the s09 ems cases, START and JumpSTART (s09, s13), the EDT indications (s14), the tourniquet left in place for transfer (s45) and the organophosphate ED dosing (s09, s53).

## Sources, with verification

- Ontario Ministry of Health. ALS Patient Care Standards v5.5, 2025, and BLS Patient Care Standards v3.4, 2023. I downloaded both PDFs from the ontario.ca URLs in the file and read the relevant directives.
- Health Care Consent Act, 1996 (Ontario). ontario.ca/laws/statute/96h02
- Iedema R, et al. IMIST-AMBO. BMJ Qual Saf 2012. I confirmed it by web search, but I did not know its PubMed id, so the entry has no URL.
- Seamon MJ, et al. EAST ED thoracotomy guideline. J Trauma Acute Care Surg 2015. pubmed 26091330
- Shaker MS, et al. Anaphylaxis 2020 practice parameter. J Allergy Clin Immunol 2020. Cited from knowledge. Not verified this session.
- Carter AJE, et al. Paramedics providing palliative care at home. CJEM 2019. pubmed 30739628, and I read the abstract.
- BCEHS clinical practice guideline P04, palliative dyspnea. I fetched the handbook page.
- Heart and Stroke Foundation. CSBPR Acute Stroke Management, 7th edition, 2022 update. This is the same citation as s09.
- Wong GC, et al. 2019 CCS/CAIC STEMI focused update. Can J Cardiol 2019. The PubMed id is the one s09 uses.
- ATLS 11th edition, 2025. This is the same citation as s09.
- CRASH-2 collaborators. Lancet 2011, on the timing of TXA. pubmed 21439633
- Chilcott RP, Amlot R, editors. PRISM volume 1. BARDA 2015. I downloaded the PDF and read it.
- Okumura T, et al. Tokyo sarin attack, Part 2: hospital response. Acad Emerg Med 1998. pubmed 9660290
- REMM, radiation contamination modifiers and hospital activities. Both pages were fetched on 24 September 2026.
- Lerner EB, et al. SALT. Disaster Med Public Health Prep 2008. pubmed 18769263
- Warren J, et al. Transport of critically ill patients. Crit Care Med 2004.
- Evans L, et al. Surviving Sepsis Campaign 2021. Cited from knowledge.
- Lemyre B, Chau V. CPS position statement on hypothermia for HIE. 2018. I fetched the CPS page.
- Aylward D, Coughlin K. CPS ACoRN update. Paediatr Child Health 2022. I fetched the CPS page.
- Isselbacher EM, et al. 2022 ACC/AHA aortic disease guideline. Circulation 2022. Cited from knowledge.
- Topjian AA, et al. 2020 AHA pediatric BLS and ALS. Circulation 2020. Cited from knowledge.

## Doubts for reviewers

1. **ALS PCS version.** The ALS PCS file is version 5.5, but its cover says "comes into force TBD" and its page headers still read 5.4. The directive content I keyed matches both.
2. **ems-22 q3 (PCP diversion in arrest).** The STEMI card says the interventional program may still accept a patient after a complication. I keyed diversion to the closest ED for a patient who is VSA without ROSC.
3. **ems-24 (Tokyo figures).** I found the "most victims arrived without an ambulance" figure through search summaries of the Okumura papers. That figure may come from Part 1 rather than Part 2.
4. **ems-19.** The hydromorphone to morphine conversion is not tested, deliberately. Oxygen and fan advice rests on the BCEHS P04 summary.
5. **ems-25.** The statements on lead aprons and on low staff risk are phrased from the REMM hospital page, which describes routine barrier PPE and low airborne risk. Please check the wording.
6. **ems-29 q3.** "Bicarbonate does not improve outcome" and "prophylactic phenobarbital not recommended" rest on general neonatal practice. The CPS statement only says antiepileptics should be used with caution.
7. **ems-30.** Its targets come from the 2022 ACC/AHA guideline, because I could not confirm explicit targets in the CCS 2014 aortic statement.
8. **ems-31.** Only the Ontario directive dose was verified (2 mg/kg IM, maximum 100 mg, rounded to 10 mg). I could not access the Endocrine Society CAH guideline, so the case does not test broader ED management of adrenal crisis.
9. **Unverified citations.** The web search budget ran out late in the session. Shaker 2020, Evans 2021, Isselbacher 2022 and Topjian 2020 are cited from knowledge and need a check.
10. **Test file removed.** A temporary tally test I mistakenly copied into `tests/` was deleted at once. No other repository file was touched.
