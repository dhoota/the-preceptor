# Writer report: batch s52, Suicide risk

File: `src/samps/s52/suicide-risk.ts` (export `SUICIDE_RISK_S52`), re-exported as `SAMPS_S52` in `src/samps/s52/index.ts`.

## Count and mix

- 23 SAMPs, ids suicide-risk-16 to suicide-risk-38. All `reviewed: false`.
- 72 questions: 65 single and 7 menu. Menus sit in 7 of 23 SAMPs (16, 17, 22, 25, 29, 32, 37).
- 3 or 4 questions per SAMP (16, 20 and 31 have 4). The average is 3.1, below the aim of 4. Every SAMP is within the 3 to 5 rule.
- Settings: tertiary, community and rural. Provinces named where a statute is tested: Ontario, British Columbia, Alberta, Quebec.
- Ages run from 10 to 81. There are four youth cases (10, 14, 16 and 17 years), three older adult cases (70, 78 and 81 years) and one perinatal case.

## Key positions (single questions)

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Keys | 12 | 12 | 15 | 14 | 12 |

The highest share is 15 of 65 (23%). The key is the longest option in 14 of 65 singles (22%).

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1 Risk factors | 18 |
| 2 Hidden suicidality | 12 |
| 3 Certification, capacity, patient wants to leave | 12 |
| 4 Low risk outpatient plan, discharge timing | 11 |
| 5 Follow-up, crisis contacts, medication and means counselling | 17 |
| tox 7 (tests after an ingestion, SAMP 28) | 2 |

## Checks

- `npx tsc --noEmit -p . | grep samps/s52`: no output.
- `SAMP_BATCH=s52 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 456 passed.

## Sources and verification

PubMed records were checked through the NCBI E-utilities for:
- Horowitz 2012 (23027429)
- Lanzillo 2019 (30858170)
- Korczak, CPS 2015 (26175563)
- Stanley 2018 (29998307)
- Yip 2012 (22726520)
- Posner 2011 (22193671)
- Chung 2017 (28564699)
- Grigoriadis 2017 (28847780)
- Lam, CANMAT 2024 (38711351)
- Miller, ED-SAFE 2017 (28456130)
- Motto 2001 (11376235)
- Appelbaum 2007 (17978292)
- Bolton 2015 (26552947)
- Hawton 2012 (22726518)
- Owens 2002 (12204922)
- Russell 2018 (29609917)
- Bohnert and Ilgen 2019 (30601750)
- ACEP, Nazarian 2017 (28335913)
- Dart 2023 (37552484)
- Karliner 2007 (17362215)
- Kirmayer 2011 (20603342)
- John 2018 (29674305)
- Fralick 2019 (30419085)

Other sources:
- Statutes:
  - BC Mental Health Act sections 22 and 28. I read the text at bclaws.gov.bc.ca.
  - Alberta Mental Health Act sections 2 to 7. I read the text in the King's Printer PDF.
  - Quebec P-38.001 section 7. I confirmed it through search results that quote legisquebec, because the site blocked a direct fetch.
  - Ontario Mental Health Act sections 16 and 17. I confirmed these through secondary sources, because ontario.ca and CanLII blocked fetching.
- SAMHSA SAFE-T 2009: store.samhsa.gov.
- 9-8-8: 988.ca.
- Cybertip.ca sextortion guidance: cybertip.ca.
- Taken from sources already in the bank: Stanley and Brown 2012, CCSMH 2006, BCCSU 2023, Tenenbein 2009.
- Beck, Schuyler and Herman 1974 (suicidal intent scales, book chapter): cited from memory and not verified online.

## For the reviewers

1. The Quebec answer (SAMP 21) rests on search snippets that quote section 7, not on a direct read of the statute. Please check "grave and immediate danger" and the 72 hour limit on the official text.
2. SAMP 19: BC repealed section 31(1), deemed consent, in 2025. I kept every question away from treatment consent under the BC act.
3. SAMP 20 q3: during a weather delay the patient is held in a rural hospital that is not a facility. I read section 4(1)(a) as covering care and detention during conveyance. Please confirm this is how Alberta applies it.
4. SAMP 34 q1 keys a median of 16% for repeat non-fatal self-harm within one year, from Owens 2002. The explanation says 0.5 to 2% die by suicide within the year, which I recalled from that review.
5. SAMP 24 q2 uses findings from the Grigoriadis abstract: more violent methods, most deaths late in the first year, 39% with mental health contact in the prior 30 days, highest rates in rural and remote regions.
6. SAMP 23 q1: moving from amitriptyline to sertraline in the emergency department is a prescribing choice. Please check that the key fits CANMAT 2023 and does not step on the family physician's role.
7. SAMP 36 q3 describes 8-1-1 as a provincial health advice line and 3-1-1 as a municipal line. Both vary a little by province and city.
8. SAMPs 35 q1 and 36 q2 cite Bolton 2015 for the risk of psychotic depression and of acute alcohol use. Please confirm the review covers both points.
9. Several SAMPs have 3 questions, so the batch averages 3.1 rather than the aim of 4.
