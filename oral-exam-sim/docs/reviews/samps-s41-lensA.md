# Review: batch s41, infectious diseases, Lens A (clinical truth)

Files reviewed: `src/samps/s41/infectious-diseases.ts` (infectious-diseases-16 to 47) and `src/samps/s41/review-extra.ts` (infectious-diseases-48 and 49). Every SAMP stays `reviewed: false`.

## The main finding

The batch has no `update` fields at all. Many explanations and some keys rely on results the case never gives: CT findings, culture results, repeat vitals, a CSF profile, a creatinine, a second patient. Where that left a key without support in the case, I added a short update that supplies the fact. I did not change the teaching point. Lens B should check that each new update matches its explanation word for word.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| 17 | q4 | update (added) | The key, surgical drainage, and the explanation ("gas in the deep neck spaces") rest on a CT the case never shows. Added CT with gas and collections after the airway is secured | high |
| 18 | q3 | update (added), explanation | "Growth only in the anaerobic bottles" was never given. Added a blood culture result and made the Haemophilus reason fit it | high |
| 19 | q1 | explanation | The heterophile false negative sentence read as if it undermined the key. It now says about a quarter of tests are falsely negative in week 1, so a negative result would need repeating (Womack 2015) | low |
| 21 | q4 | update (added) | The key, amoxicillin, rests on "worsening after initial improvement beyond 7 days", but the stem is day 4 with no update. Added a return visit 6 days later with worsening | high |
| 21 | q4 | explanation | "Macrolides are not recommended" is false. The Canadian guideline allows a macrolide as a substitute for beta-lactam allergy. Reworded | medium |
| 22 | q4 | update (added) | "A subperiosteal abscess" was never shown. Added the CT result | high |
| 23 | q3 | update (added) | The explanation cites "the positive NS1 test", which was never given, and the key needs malaria excluded first. Added negative smears and RDT and a positive NS1 | high |
| 24 | q3 | update (added) | "Her creatinine of 68 umol/L" was never given. Added it | high |
| 24 | q4 | update (added) | The CSF profile in the explanation was never given. Added a normal CT and the CSF results | high |
| 25 | q3 | update (added) | "CT angiography shows none" was never given. Added CT and CTA results and the time | high |
| 26 | sources | citation | The NIH Pneumocystis page had "Accessed September 2026" as its year and was blocked (403) to every access route. Replaced with Ewald 2015 (Cochrane), which supports PaO2 below 70 mmHg, A-a gradient above 35 mmHg, a start within 72 hours and TMP-SMX as baseline therapy | high |
| 26 | q2 | source | Cited the PrEP and PEP guideline for diagnostic testing. Now cites the PHAC HIV screening and testing guide, which covers 4th generation tests and testing people with immune compromise illness | medium |
| 26 | q3 | explanation | "A-a gradient of 35 mmHg or more" changed to "above 35 mmHg" to match the cited source | low |
| 26 | q1 | explanation | "TB does not typically cause diffuse interstitial disease" is overstated in advanced HIV, where TB can be miliary or atypical. Reworded as the less likely fit, with sputum testing still needed | low |
| 27 | q1 | explanation | "Concentrated albumin ... without a specific indication" ignores his cirrhosis. SSC 2026 says albumin may be considered after large crystalloid volumes or in cirrhosis. Reworded: crystalloid first, albumin at most later | medium |
| 27 | q2 | update (added) | The MAP calculation uses a BP of 82/44 "after fluid" that the case never gives, and the stem BP of 78/40 gives a MAP of 53. Added 2 L of Ringer's lactate (about 30 mL/kg), BP 82/44 and new crackles | high |
| 27 | q4 | update (added), explanation | The explanation gives a lactate of 5.4 mmol/L but the stem gives 6.1. Added a repeat lactate at 2 hours with norepinephrine running | high |
| 28 | q2 | explanation | Listed "hypotension" as a TG18 grade III criterion. TG18 counts hypotension only when it needs a vasopressor. Now names the criteria he meets: confusion, INR above 1.5, platelets below 100 | low |
| 29 | q1 | update (added) | The key names "the IO line" but the case says only that IV attempts failed. Added IO placement | medium |
| 29 | q3 | update (added) | "Shock persists after 60 mL/kg" and "the new hepatomegaly and crackles" were never given. Added them | high |
| 30 | q2 | update (added) | "Gram positive cocci in chains" was never given. Added the speculum findings and the lochia Gram stain | high |
| 30 | q3 | update (added) | "Gas in the uterine wall with worsening shock" was never given. Added the CT and a vasopressor need | high |
| 30 | q1, q2 | source, explanation | The pelvic exam key cited Surviving Sepsis and the regimen key cited the IDSA skin guideline, and neither addresses postpartum sepsis. Both now cite RCOG Green-top 64 (2025), which advises abdominal and vaginal examination and piperacillin-tazobactam or meropenem plus clindamycin. IDSA SSTI was removed from this SAMP | high |
| 30 | q2 | explanation | "Each leave major gaps" is not a reason. Gave a specific reason for each distractor | medium |
| 32 | q3 | update (added) | The key and explanation rely on an infected pressure injury with exposed bone that the case never describes. Added the wound findings | high |
| 32 | q3 | explanation, source | Weakly sourced. Confirmed High 2009 (IDSA LTC) says surface swab cultures are not indicated and deep tissue and bone specimens should be sent. Explanation now says so and the source has its PubMed URL | medium |
| 33 | q3 | update (added) | Explanations for q3 and q4 assume Staphylococcus aureus, which was never given. Added the culture result and the 3 hour difference in time to positivity | high |
| 33 | q4 | explanation | False: "IDSA recommends TEE for catheter related S. aureus bacteremia unless contraindicated." Mermel 2009 advises TEE for patients being considered for a short course, and 4 to 6 weeks of therapy otherwise. Corrected | medium |
| 35 | q1 | option, stem, explanation | The explanation calls "female sex" not a recognized risk factor, but female sex is associated with C. difficile infection in several cohorts, so the distractor is defensible. Replaced with "Hypertension" and added "for hypertension" to the stem. Key indexes unchanged | medium |
| 35 | q4 | update (added) | "Hypotension, ileus and a colon dilated to 8 cm" were never given. Added them | high |
| 37 | q3 | explanation | Claimed IDSA lists "ceftriaxone with metronidazole" as a regimen. The IDSA table lists ceftriaxone (good against Pasteurella, misses anaerobes) and metronidazole separately. Reworded to match | low |
| 40 | q3 | update (added) | The question asks about "the cousin", who appears nowhere in the case. Added a healthy 4-month-old cousin of 6 kg, and the 3 mL dose to the explanation | high |
| 41 | q2 | update (added), q3 explanation | Susceptibility is asserted without a serology result, and "her dose at 60 hours" has no basis. Added a negative IgG 24 hours later (36 plus 24 = 60 hours) | high |
| 42 | q3 | explanation | Recast to match the CIG tetanus chapter (June 2026): people 60 or older account for 55% of Canadian cases, and increasing age, birth outside Canada and missing records predict a lack of immunity. The key is confirmed | low |
| 44 | stem | stem | The key includes pharyngeal and rectal NAAT, but no oral or anal exposure was stated. Added it to the sexual history | low |
| 46 | q2 | update (added) | The NNT arithmetic uses 80.5% and 73.6% cure rates that the question never gives. Added the trial result (Talan 2016, checked in the abstract) | high |
| 48 (extra) | q1 | correct | The key index was 4 (Streptococcus pneumoniae), but the explanation is for Pneumocystis. Fixed to 2 | high |
| 48 (extra) | sources, q1, q3 | citation, explanation | Same citation and wording fixes as SAMP 26 | high |
| 49 (extra) | q2 | explanation | Invented and implausible: "the serum lactate of 7.8 mmol/L seen on the first blood gas confirms this". There is no blood gas, and lactate does not confirm tenosynovitis. Removed | high |
| 49 (extra) | q3 | explanation | Same IDSA wording fix as SAMP 37 | low |

## Key changes

- infectious-diseases-48 q1 (review-extra.ts): correct changed from 4 (Streptococcus pneumoniae) to 2 (Pneumocystis jirovecii). The stem and explanation describe Pneumocystis pneumonia. The old key contradicted its own explanation.

No other key changed. Each key in the main file holds once its missing facts are supplied.

## Checked and confirmed (no change)

- Surviving Sepsis 2026 adult guideline (27, 28, 30): the SCCM summary confirms a MAP target of 65 mmHg (and 60 to 65 mmHg suggested for age 65 or older, so 27 at age 56 holds), norepinephrine first line over dopamine, a peripheral vasopressor start, at least 30 mL/kg in 3 hours, balanced crystalloid, serial lactate, capillary refill as an adjunct, source control ideally within 6 hours and antibiotics within 1 hour for shock.
- Surviving Sepsis 2026 pediatric guideline (29): 10 to 20 mL/kg boluses up to 40 to 60 mL/kg with reassessment, crystalloid over albumin, balanced over saline, no preference between epinephrine and norepinephrine, peripheral vasoactive start. The epinephrine key holds because norepinephrine is not offered.
- 36 CURB-65: recomputed as 4. Lim 2003 gives 41.5% mortality at a score of 4.
- 46 NNT: 1 / 0.069 = 14.5.
- 31 anion gap: 136 - (100 + 12) = 24.
- 24 acyclovir: 62 kg x 10 mg/kg = 620 mg.
- 16 ceftriaxone: 16 kg x 50 mg/kg = 800 mg.
- 29 bolus: 12 kg x 20 mL/kg = 240 mL.
- 38 RabIg: 80 kg x 20 IU/kg = 1 600 IU.
- 41 VarIg: 6.8 x 125 IU = 850 IU, capped at 625 IU.
- 35 severity: IDSA WBC 15 or more, or creatinine above 133 umol/L. She is also severe by a creatinine rise of 1.8 times baseline, so the key holds under AMMI Canada as well.
- CIG chapters: tetanus (updated 3 June 2026: wound table, TIg 250 units, Tdap for adults with no adult pertussis dose, adult primary series), rabies (partial update September 2026: 20 IU/kg, remainder IM, days 0, 3, 7, 14, RabIg up to day 7, delayed presentation), measles (June 2025: MMR within 72 hours at 6 to 11 months, IMIg 0.5 mL/kg under 6 months within 6 days, 2 further doses after 12 months), varicella (21 July 2026: 125 IU/10 kg, minimum 125, maximum 625, ideally within 96 hours, up to 10 days, serology in pregnancy), hepatitis B (25 February 2026: known responders need no intervention, no routine boosters).
- Tan 2025 Canadian PEP guideline: preferred regimens BIC/TAF/FTC or DTG plus TDF/FTC, a 72 hour window, 28 days, offer after sexual assault, 4th generation baseline test.
- PHAC gonorrhea guide (4 June 2026): test and treat empirically all partners from the preceding 60 days.
- Desrosiers 2011: amoxicillin first line, INCS monotherapy for mild to moderate disease, no imaging in uncomplicated cases.
- Womack 2015: restrict athletics for the first 3 weeks.

## Sources verified

All PubMed entries were checked by E-utilities for title, authors, journal and year.

- Prescott 2026 SSC adult, Crit Care Med 54(4):725-812. https://pubmed.ncbi.nlm.nih.gov/41869847/ and the SCCM summary page
- Weiss 2026 SSC pediatric, Pediatr Crit Care Med 27(4):379-434. https://pubmed.ncbi.nlm.nih.gov/41869844/
- Ewald 2015 Cochrane, adjunctive corticosteroids for PCP (new). https://pubmed.ncbi.nlm.nih.gov/25835432/ and full text at PMC6472444
- PHAC HIV screening and testing guide 2012 (new). https://www.canada.ca/en/public-health/services/hiv-aids/hiv-screening-testing-guide.html
- Lissauer 2025 RCOG Green-top Guideline No. 64, BJOG (new). https://pubmed.ncbi.nlm.nih.gov/39694496/ (text of sections 5.2, 6.1.3 and 6.1.4 read)
- High 2009 IDSA fever in LTC, Clin Infect Dis. https://pubmed.ncbi.nlm.nih.gov/19072244/
- Tan 2025 CMAJ, PMID 41326046. https://pmc.ncbi.nlm.nih.gov/articles/PMC12680393/
- Yawn 2014 JAMA, PMID 25203083
- Bridwell 2021 (33383265), Riordan 2007 (17934077), Harris 2016 (26785402), Wong 2018 (29859573), Tunkel 2008 (18582201), Delgado 2023 (37622656), Metlay 2019 (31573350), Lim 2003 (12728155), Gomi 2018 (29090866), Miura 2018 (28941329), Stevens 2014 (24973422), Bersoff-Matcha 2019 (31060053), Goguen 2018 (29650082), Mermel 2009 (19489710, full text PMC4039170 read), Senneville 2023 (37779457), McDonald 2018 (29462280), Johnson 2021 (34164674), Kennedy 2016 (26022113), Workowski 2021 (34292926), Craig 2003 (12777558), Guldfred 2008 (17892608), Talan 2016 (26962903)
- canada.ca CIG chapters: tetanus, rabies, measles, varicella and hepatitis B, plus the PHAC gonorrhea guide, as listed above
- Desrosiers 2011: https://pmc.ncbi.nlm.nih.gov/articles/PMC3055847/
- Womack 2015: https://www.aafp.org/pubs/afp/issues/2015/0315/p372.html
- Not opened: the NIH OI Pneumocystis page (403 on every route, so replaced), AMMI Canada 2018 C. difficile guideline (403) and the IDSA 2014 animal bite table in full (the summary tool gave conflicting readings on first generation cephalosporins).

## Needs physician decision

1. review-extra.ts SAMPs 48 and 49 are near copies of SAMPs 26 and 37 (same title, same stem, same options). They should not join the bank as written, whatever their content. They appear to be planted defect carriers.
2. 37 q3 and 49 q3: the explanation says first generation cephalosporins have poor activity against Pasteurella multocida. This is standard teaching, but I could not confirm the exact IDSA table row. Please confirm.
3. 35: the Canadian C. difficile guideline (AMMI Canada 2018, Loo et al.) could not be opened. The keys use IDSA/SHEA. If AMMI is preferred as the Canadian source, it should be added once checked.
4. 16: the fever in sickle cell disease questions use the US Yawn 2014 panel. Consider whether a Canadian haemoglobinopathy guideline should be the source of record. The keys agree with standard Canadian practice.
5. 30: no Canadian (SOGC) guideline on postpartum sepsis or invasive GAS was found, so RCOG 2025 is cited.

## Summary

- 34 SAMPs reviewed (32 in the main file and 2 in review-extra.ts), 125 questions.
- 40 fixes: 21 unsupported case facts supplied by a new update or stem edit, 11 false, overstated or unsupported reasons in explanations, 5 citation or source fixes, 1 defensible distractor replaced, 1 invented finding removed and 1 key change.
- Most serious: 48 q1 keyed to the wrong organism. The invented lactate in 49 q2. A key with no case support in 17 q4, 21 q4, 32 q3 and 40 q3 (a second patient who never appears). Stem numbers that contradict their explanations in 27 q2 and q4. The false TEE claim in 33 q4.
- SAMP ids with a defect: infectious-diseases-17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 37, 40, 41, 42, 44, 46, 48, 49.
- Gates: `npx tsc --noEmit -p . | grep samps/s41` shows no errors. `SAMP_BATCH=s41 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 699 passed.
