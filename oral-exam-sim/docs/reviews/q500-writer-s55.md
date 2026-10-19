# Q500 writer report: s55, Infectious diseases

Writer: Preceptor. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Questions | Key features |
|---|---|---|---|
| infectious-diseases-48 | Older man with fever and no obvious source | 5 single | 6, 2, 2, 1, 2 |
| infectious-diseases-49 | Vomiting and diarrhea at a retirement residence | 3 single, 1 menu | 7, 9, 3, 9 |
| infectious-diseases-50 | Fever and a limp in a woman who uses drugs | 4 single | 6, 4, 8, 3 |
| infectious-diseases-51 | Rash and tiredness in a young woman | 4 single, 1 menu | 6, 5, 7, 8, 10 |
| infectious-diseases-52 | Cough and aches from a long-term care home | 4 single | 9, 9, 10, 10 |

22 questions: 20 single, 2 menu (select 3 each). Single key positions, first to fifth: 4, 4, 4, 4, 4.

## Key feature coverage

KF1: 1. KF2: 3. KF3: 2. KF4: 1. KF5: 1. KF6: 3. KF7: 2. KF8: 2. KF9: 4. KF10: 3. Every key feature is tested. The extra weight sits on KF9, then KF6 and KF2, as asked.

## Scenarios and why they are new

All 47 existing infectious-diseases SAMPs and the related topics (shock, sob, headache, pediatric fever, lacerations) were searched first.

- 48: septic shock from an early pacemaker pocket infection. Tests the device pocket as a hidden source, Sepsis-3 recognition, peripheral norepinephrine, antibiotics after two sets of cultures, and vasopressin as the second agent. Existing shock items test fluid volume, PLR, lactate, MAP target and transfusion, not these steps. The post-biopsy prostate sepsis in s50 was avoided.
- 49: norovirus-type outbreak in a 74-year-old on ramipril, a thiazide and metformin. Tests targeted labs, no antibiotics, sick-day holds and the dysentery threshold. Existing diarrhea item is C. difficile.
- 50: infected femoral pseudoaneurysm in a woman who injects into the groin. The endocarditis SAMP (id-13) and the oral case on back pain in a man who injects drugs cover different ground.
- 51: secondary syphilis misread as a viral illness. Syphilis appears in the bank only as a distractor.
- 52: influenza A in a long-term care resident with CrCl 26 mL/minute, unit outbreak prophylaxis and renal dosing. Existing influenza items (id-10, sob) cover a healthy student and a pregnant patient.

## Sources and verification

- Blomström-Lundqvist C et al. EHRA CIED consensus. Europace. 2020. Full text read (PMC7132545): S. aureus in early pocket infection, two sets of cultures then antibiotics in sepsis, no pocket sampling. https://pubmed.ncbi.nlm.nih.gov/31702000/
- Singer M et al. Sepsis-3. JAMA. 2016. Record checked. https://pubmed.ncbi.nlm.nih.gov/26903338/
- Evans L et al. Surviving Sepsis Campaign 2021. Full text read (PMC8486643): recommendations 12, 37, 38, 42, 44, 71. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Shane AL et al. IDSA infectious diarrhea 2017. Guideline page read (recommendations 8, 30, 31, 36, 39, 47). https://academic.oup.com/cid/article/65/12/e45/4557073
- Diabetes Canada. Appendix 8, sick-day medication list. Page read. https://www.diabetes.ca/for-professionals/appendices/appendix-8
- Coughlin PA, Mavor AI. Eur J Vasc Endovasc Surg. 2006. Abstract read. https://pubmed.ncbi.nlm.nih.gov/16682239/
- Guelbi M et al. Int J Surg Case Rep. 2025. Abstract read (drainage of an infected pseudoaneurysm risks catastrophic bleeding). https://pubmed.ncbi.nlm.nih.gov/40541023/
- Stevens DL et al. IDSA SSTI 2014. Record checked. https://pubmed.ncbi.nlm.nih.gov/24973422/
- PHAC syphilis guide: clinical manifestations (2023), screening and diagnostic testing (2024), treatment and follow-up (updated 2026). All three pages read. URLs in the source list.
- Aoki FY et al. AMMI Canada antiviral foundation document 2019. Full text read (Table 2 doses, Table 3 renal adjustments, Box 2 high risk groups). https://pmc.ncbi.nlm.nih.gov/articles/PMC9602959/
- Uyeki TM et al. IDSA influenza 2018. Guideline page read (recommendations 25, 26, 53). https://academic.oup.com/cid/article/68/6/e1/5251935

## For the reviewers

- 48 q2 keys septic shock before a vasopressor has been started. Sepsis-3 defines shock by vasopressor need after adequate fluid. He has had 30 mL/kg and stays at MAP 61 mmHg with lactate 4.6 mmol/L, so the need is present. Check that the wording reads fairly.
- 48 q5: phenylephrine is explained as "not among the agents the guideline recommends". The SSC 2021 text does not address phenylephrine directly.
- 49 q3 is tagged KF3 (host factors). It tests sick-day medication holds, which is a medication host factor rather than an infection risk in the narrow sense.
- 50 q3: the IDSA SSTI guideline was checked at record level only. The MRSA coverage statement for severe purulent infection is from its recommendations and was not re-read in full text. The vancomycin 25 mg/kg load (1.3 g for 52 kg) is standard practice but not taken from the cited source.
- 50 q2 cites a single case report (Guelbi 2025) for "image before draining". Coughlin is the review. A stronger vascular source would help.
- 51 q4: PHAC gives doxycycline for 14 days as the penicillin allergy alternative. The key is benzathine penicillin G because she has no allergy.
- 52 q1: the 30 mg once daily dose for CrCl 10 to 30 mL/minute is from AMMI Table 3.

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s5` printed nothing. `SAMP_BATCH=s55 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 136 tests passed.
