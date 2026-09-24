# Review of overlap pass 2a, and deferred overlap items

Reviewer: REVIEW agent, both lenses (A clinical truth, B internal consistency and numbers). This is an AI audit, not clinician verification. Every SAMP touched keeps `reviewed: false`. No signed-off SAMP was edited.

Files: s29 msk, s26 burns, s31 critical-appraisal, s38 first-trimester-bleeding, s30 cqi, s20 abuse-domestic, s50 shock, s53 tox.

## Summary

- 14 rewrites reviewed. 5 had real defects and were fixed: msk-27, msk-34, msk-37, burns-20, plus a source that could not be verified in burns-31. Three smaller wording fixes: critical-appraisal-27, critical-appraisal-34 and first-trimester-bleeding-25.
- The worst defect repeated the round 1 pattern. burns-20 was rebuilt as a paint injection injury that copies signed-off s13 lacerations-09: an airless sprayer, oil-based paint, the index finger and the same urgent hand surgery key. It has been rebuilt again as a phenol burn.
- msk-27 q3 now repeated signed-off s13 lacerations-10 q2: CT air in the joint for traumatic arthrotomy, with the same Konda source. msk-37 still copied signed-off s01 abuse-domestic-04: an octogenarian with moderate dementia, a son as caregiver, bruises of differing colours on the upper arms, and admission for safety. The rewrite had changed only q3.
- Deferred items: tox-26, shock-17 and shock-32 q1 reworked. The s20 dementia interview key kept (two copies).
- All numbers were recomputed. No calculation errors were found in the rewritten items.

## Verdict per SAMP (task 1)

| SAMP | Verdict | Finding and change | Confidence | Source checked |
| --- | --- | --- | --- | --- |
| msk-16 | Pass | Galeazzi case checked in full. No copy of s06 msk-02. Galeazzi appears nowhere else in the bank. Signs, the 5 mm threshold, the rarity of nerve injury and adult ORIF against child closed care all match the sources. | high | Alajmi 2020 full text (PMC7444983). Atesok 2011 abstract. |
| msk-24 | Pass | q4 now keys cervical radiculopathy and myocardial ischemia. q1 still keys splenic referral to the shoulder, but under msk KF3. It is the only question that keys the source of shoulder pain. Elsewhere shoulder tip pain appears only inside ectopic or triage items. Kept. | medium | Iyer 2016 |
| msk-27 | Fixed | q3 (CT air in the joint means arthrotomy) duplicated signed-off s13 lacerations-10 q2, down to the source. Replaced with a companion injury question (KF1): lateral meniscus tear with a lateral plateau fracture, 91% against 44% for the medial meniscus in Gardner's MRI series. Konda source removed. q1 bumper mechanism is not stated in the Ramponi abstract (see physician list). | high | Gardner 2005 abstract (PubMed 15677922) |
| msk-34 | Fixed | q3 keyed cefazolin 2 g plus tetanus immune globulin. That made the open fracture cefazolin key a third copy (s06 msk-08 and msk-11). Tetanus immune globulin for an unknown history is keyed in six other SAMPs. q3 now asks the standard target for debridement of a low energy open fracture: within 24 hours of injury, from BOAST 2017. The tetanus sentence was removed from the stem. The unused CIG source was removed. | high | BOAST open fractures 2017, boa.ac.uk (text quoted) |
| msk-37 | Rebuilt | q1, q2 and q4 still repeated signed-off abuse-domestic-04: skin survey, abuse red flags, admission for safety. The new q3, radial nerve documentation, repeated msk-26 in the same batch. Rebuilt as a proximal humerus fracture in an independent 84-year-old who uses a walker. q1 axillary view to exclude dislocation (KF1). q2 sling and fracture clinic, per PROFHER (KF8). q3 one-armed mobility and self-care before discharge (KF8). q4 fracture risk assessment by the family physician (KF8). None of these keys appears elsewhere in the bank. | high | Khmelnitskaya 2012 (PMC3535990), PROFHER JAMA 2015 abstract, Wilber 2010 abstract, Osteoporosis Canada 2023 via osteostrategy.on.ca |
| burns-20 | Rebuilt | The paint injection rebuild copied signed-off s13 lacerations-09. It does not belong under burns: it is a high-pressure penetrating hand injury, it fits no burns key feature, and s13 already teaches it under lacerations and MSK KF7. Rebuilt as a phenol splash to the forearm and hand. q1 PEG decontamination (KF6). q2 numbness from phenol's local anesthetic effect (KF6). q3 cardiac monitoring for systemic absorption (KF1). q4 admission for 18 to 24 hours of observation (KF5). Phenol appears nowhere else in the bank. Hogan and Rosenwasser sources removed. | high | ATSDR phenol medical management guideline (page read, last reviewed 2014) |
| burns-31 | Fixed (source) | q1 rechecked: 7400 mL in 12 h gives 14 800 mL in 24 h, and 14 800 / (80 x 45) = 4.1 mL/kg per %TBSA. The q2 escharotomy key stands. Trunk escharotomy is now keyed twice (s04 burns-07 for ventilation and here for abdominal compartment syndrome), which the rules allow. Malbrain 2015 could not be opened to confirm the escharotomy claim. Replaced with Levis and Ali 2006 (Canadian J Plast Surg, full text read), which lists abdominal wall escharotomy among the first measures and decompression after. | medium | Levis 2006 (PMC2539035) |
| critical-appraisal-19 | Pass | ITT 8.0 minus 7.0 = 1.0, CI -2.3 to 4.3 (SE check about 1.67 points, 95% half-width 3.3). PP 8.0 minus 5.1 = 2.9, CI -0.3 to 6.1, which fits about 410 in the IV arm. The keys hold. The q3 "analyses disagree" point echoes the s07-07 explanation but is keyed only here. | high | CONSORT noninferiority 2012 |
| critical-appraisal-22 | Pass | NNT 1 / 0.04 = 25. 4 / 58 = 6.9%. The q4 key rests on the MCID, which is now keyed in s07-02 and here only. | high | Users' Guides 2015 |
| critical-appraisal-27 | Fixed (wording) | PPV 18 / 116 = 15.5%, and 50% at a 10% prevalence, both correct. The explanation said "the vendor's 90% predictive value", but the stem never reports a PPV. Reworded as the value that applies only at the vendor's 50% prevalence. Spectrum bias from a case-control design is keyed in s07-09 and here, which is two copies and allowed. | high | STARD 2015 |
| critical-appraisal-34 | Fixed (wording) | LR+ 1.8, pretest odds 0.111, posttest 0.20, probability 16.7%. LR- 0.2, posttest odds 0.022, probability 2.2%. The claims that 5% needs an LR of 0.47 and 1% an LR of 0.09 are correct. "10% is the pretest probability, unchanged by any test" was reworded, since tests do change the probability. | high | Users' Guides 2015, Loeb 2001, Beers 2023 |
| first-trimester-bleeding-19 | Pass | New case. The 15 to 50% ectopic rate matches SOGC 2016. The CDC text (evaluate for ectopic, remove by the strings as soon as possible, risk not back to baseline) matches the explanation word for word in substance. Related teaching exists in s19 abdominal-pain-35, where an IUD pregnancy is ectopic, but that key differs. | high | SOGC IUC 2016 (JOGC abstract), CDC US SPR 2024 page |
| first-trimester-bleeding-25 | Fixed (title) | Keys are sound. The title "Near faint with a slow pulse" pointed to the removed metoprolol teaching, and her pulse of 76 is not slow. Retitled "Near faint at 7 weeks". The "hCG will not change surgery" point is now keyed here and, as a distractor, in ftb-01. | medium | SOGC 414 (paywalled, scope only) |
| cqi-18 | Pass | The SBAR situation, assessment and recommendation elements are keyed nowhere else. s06 and s13 cite SBAR only as a handover tool. | high | Haig 2006 |

Also checked (not in the 14): critical-appraisal-21 q4 (taper lorazepam) is keyed twice with s34. Allowed. Its relative risk is 2.0 and its NNH 1 / 0.15 = 6.7, rounded to 7. Both are correct.

## Is the paint injection injury a burns topic?

No. It is a penetrating, high-pressure hand injury, not a thermal or surface chemical burn. It fits burns key feature 6 (ask about chemical contact when hand pain is unexplained) only loosely: the exposure was known. The bank already teaches it as signed-off s13 lacerations-09, under lacerations and MSK KF7. burns-20 is now a phenol chemical burn instead.

## Deferred items (task 2)

| Item | Verdict | Change | Source |
| --- | --- | --- | --- |
| s53 tox-26 (HF) vs s04 burns-03 and burns-12 | Reworked | tox-26 repeated both signed-off SAMPs item for item: calcium gluconate gel, calcium, magnesium, potassium and ECG, hypocalcemia with dysrhythmia, and intra-arterial calcium for pain that persists. HF is now taught only in burns-03 and burns-12. tox-26 is now a deliberate brodifacoum ingestion (200 g x 0.005% = 10 mg). q1 INR now and at 48 to 72 h (KF7). q2 no prophylactic vitamin K (KF2). q3 high-dose oral vitamin K1 for INR 6.8 without bleeding (KF4). q4 recurrent coagulopathy if vitamin K stops early (KF5). No rodenticide was in the bank. The McKee HF source was removed. | Caravati 2007 AAPCC consensus (abstract read), Gunja 2011 (abstract read) |
| s50 shock-17 vs s10 ftb-01 | Reworked | Same setup as ftb-01 (fainting at work, 7 weeks, right shoulder tip pain) and the same keys (POCUS hepatorenal fluid, red cells). Rebuilt as atraumatic splenic rupture 12 days into infectious mononucleosis, in a rower with a resting pulse of 52. q1 pulse relative to baseline (KF1). q2 cause from the POCUS pattern (KF6). q3 near normal early hemoglobin (KF1, kept from the old item, where it is unique). q4 red cells (KF3). The Rosen and SOGC sources were removed. | Bartlett 2016 Injury systematic review (abstract read), ATLS 10th ed. |
| s50 shock-32, beta blocker blunts the pulse | Reworked q1 | Keyed in signed-off s16 (three times), s01 and s14, and in non-signed-off s44, s45 and s50. shock-32 is the third non-signed-off copy. q1 now asks for the best measure of hypoperfusion: lactate 3.6 mmol/L. Beta blockade stays only as a distractor reason. Rosen was removed from this SAMP. | Rossaint 2023 European bleeding guideline, recommendation 10 (full text read) |
| s20 interview alone despite dementia | Kept | Keyed in abuse-domestic-24 q2 and abuse-domestic-25 only. The rebuilt msk-37 no longer repeats it. Two copies are allowed. | None |

## Key changes

All the key changes are in rebuilt questions. No key was flipped under an old explanation.

- msk-27 q3: intra-articular air on CT, changed to lateral meniscus tear.
- msk-34 q3: cefazolin plus tetanus toxoid plus TIG (menu), changed to debridement within 24 hours (single).
- msk-37 all four questions: new case.
- burns-20 all four questions: new case.
- tox-26 all four questions: new case.
- shock-17 q1, q2 and q4: new case. q3 has the same key in the new case.
- shock-32 q1: metoprolol blunting, changed to lactate as the best measure of hypoperfusion.

## Sources verified

- Alajmi 2020 Cureus, https://pmc.ncbi.nlm.nih.gov/articles/PMC7444983/
- Atesok 2011 JAAOS, https://journals.lww.com/jaaos/abstract/2011/10000/galeazzi_fracture.6.aspx
- Gardner 2005 J Orthop Trauma, https://pubmed.ncbi.nlm.nih.gov/15677922/
- BOAST open fractures 2017, https://www.boa.ac.uk/resource/boast-4-pdf.html
- Khmelnitskaya 2012 Adv Orthop, https://pmc.ncbi.nlm.nih.gov/articles/PMC3535990/
- Rangan 2015 JAMA (PROFHER), https://pubmed.ncbi.nlm.nih.gov/25756440/
- Wilber 2010 Acad Emerg Med, https://pubmed.ncbi.nlm.nih.gov/20653580/
- Osteoporosis Canada 2023, https://www.cmaj.ca/content/195/39/E1333 (summary read at https://osteostrategy.on.ca/cpg/)
- ATSDR phenol guideline, https://wwwn.cdc.gov/TSp/MMG/MMGDetails.aspx?mmgid=144&toxid=27
- Levis and Ali 2006, https://pmc.ncbi.nlm.nih.gov/articles/PMC2539035/
- CDC US SPR 2024, https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html
- SOGC contraception consensus chapter 7, 2016, https://www.jogc.com/article/S1701-2163(15)00024-9/abstract
- Caravati 2007 Clin Toxicol, https://pubmed.ncbi.nlm.nih.gov/17357377/
- Gunja 2011 Clin Toxicol, https://pubmed.ncbi.nlm.nih.gov/21740137/
- Bartlett 2016 Injury, https://pubmed.ncbi.nlm.nih.gov/26563483/
- Rossaint 2023 Crit Care, https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/

## Checks

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes: s20 (488), s26 (516), s29 (532), s30 (443), s31 (506), s38 (456), s50 (683), s53 (743).
- `npx tsc --noEmit -p .` gives 0 errors.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts` gives 4503 passed.
- No em or en dashes and no semicolons in the new text. No temp files in the repo.

## SAMP ids edited

msk-27, msk-34, msk-37, burns-20, burns-31, critical-appraisal-27, critical-appraisal-34, first-trimester-bleeding-25, tox-26, shock-17, shock-32.

## For the physician

- New cases to check in full: msk-37 (proximal humerus), burns-20 (phenol), tox-26 (brodifacoum), shock-17 (splenic rupture in mononucleosis).
- burns-20: the phenol guidance is from ATSDR (US, last reviewed 2014). No Canadian guideline exists. A 2026 JOEM study found low molecular weight PEG was rarely used in practice, though guidelines still recommend it. The 60 square inch (about 390 square centimetres) danger threshold is ATSDR's. Its equivalence to about 2% TBSA assumes an adult body surface of about 1.9 m2.
- tox-26: the AAPCC guideline is written for poison centre triage. Its advice against vitamin K before the coagulopathy check, and the 48 to 72 hour INR, are applied here to the emergency department. The high-dose oral vitamin K figure (100 mg daily for 3 to 6 months) comes from two case reports (Gunja 2011).
- msk-34 q3: the 24 hour debridement standard is British (BOAST 2017). No Canadian standard was found.
- msk-37 q2: PROFHER enrolled adults of mean age 66 (range 24 to 92). The key applies its result to an 84-year-old.
- msk-27 q1: the bumper mechanism for a lateral plateau fracture is standard teaching but is not in the Ramponi abstract. q3's 91% comes from operative fractures at one centre.
- burns-31 q2: the source is now Levis and Ali 2006, a Canadian review. It gives decompression at more than 30 mmHg with overt syndrome. The case has 28 mmHg, and the key is the escharotomy that comes first.
- shock-17 and shock-32: ATLS 10th ed. (2018) is cited in s50 while s29 cites the 11th ed. (2025). Consider aligning.
- first-trimester-bleeding-25 q3 still cites ACOG 2018. SOGC 414 may cover the same advice.

## Second check

Second reviewer, both lenses, on the seven items in s29, s26, s50 and s53. This is an AI audit, not clinician verification. Every SAMP keeps `reviewed: false`. Sources were reopened (PubMed abstracts through NCBI eutils, the BOAST page, the ATSDR page, the Khmelnitskaya full text and the Osteoporosis Canada executive summary). The whole bank was grepped for each case and key, including s01 to s18.

| SAMP | Verdict | Finding and change | Confidence |
| --- | --- | --- | --- |
| msk-37 | Pass, one wording fix | Keys hold. Wilber 2010 gives an odds ratio of 5.5 for upper limb fracture or dislocation, so "more than fivefold" is right. PROFHER used sling immobilization as its nonsurgical arm. Khmelnitskaya calls the axillary view critical to confirm where the head sits. q4 said Osteoporosis Canada asks for fracture risk assessment in all adults aged 50 or older. The guideline suggests bone density testing after an osteoporosis-related fracture, with a Canadian FRAX estimate. Reworded to match. Overlap: signed-off s16 seizures has an axillary or Y view as one accepted answer for a posterior dislocation after a seizure. The case and decision differ (fracture with a possible dislocation), so kept. No other proximal humerus, sling, FRAX or one-armed discharge key exists in the bank. | high |
| burns-20 | Pass | ATSDR supports every claim: PEG 300 or 400, small volumes of water only spread phenol, white skin that turns red, the local anesthetic effect, more than 60 square inches as a risk of imminent death, arrhythmia and hypotension, 18 to 24 hours of observation after a serious exposure, and discharge only after 2 to 4 symptom-free hours for a mild exposure. 60 square inches is 387 square centimetres, which is 2.0% of 1.9 m2. Phenol appears nowhere else in the bank. The only other PEG keys are whole bowel irrigation. Low confidence note: q1 and q2 map to burns KF6, which is about suspecting a chemical when hand pain is unexplained. Here the chemical is known. KF6 is still the closest burns key feature, and signed-off HF items use it the same way. | high |
| tox-26 | Pass, one wording fix | 200 g x 0.005% = 0.01 g = 10 mg. Caravati 2007 recommendation 12 (no vitamin K before evaluation for coagulopathy) and the 48 to 72 hour timing are in the abstract. Gunja 2011 gives 100 mg oral vitamin K for 3 and 6 months and half-lives of 15 and 33 days, as the explanations state. Bromethalin seizures and cholecalciferol hypercalcemia are correct distractor reasons. The 1 mg threshold now names active ingredient, as the guideline does. No rodenticide, superwarfarin or prophylactic vitamin K key exists elsewhere. | high |
| shock-17 | Fixed (cueing, one distractor reason) | 96 / 52 = 1.85, so "almost double" holds. Bartlett 2016 gives a mean of 14 days and trauma in 14%, as stated. q1: the keyed option read "Pulse of 96/minute, usual 52" while every distractor gave a bare value. The extra detail pointed to the key. It now reads "Pulse of 96/minute", and the candidate must link it to the baseline in the stem. q3: the explanation said a hemolyzed tube would not keep the hemoglobin normal. In vitro hemolysis does not change the CBC hemoglobin, because the analyzer lyses the cells. The reason now says that. Overlap: no other athlete baseline pulse key. s41 teaches sport restriction in mononucleosis and s01 lists splenic rupture in a differential. Neither keys this decision. | high |
| shock-32 q1 | Pass | Rossaint 2023 recommendation 10 supports lactate to estimate and monitor bleeding and shock. Distractor reasons are true. Overlap: s51 sob (not signed off) also keys lactate as the finding that best shows poor tissue perfusion, in pulmonary hypertension. That makes two single-best copies, which the rules allow. Signed-off s04, s12 and s18 list lactate only as one accepted item in short answers. | medium |
| msk-27 q3 | Pass | Gardner 2005: lateral meniscus pathology 91%, medial meniscus tear 44%, in 103 operative fractures. No ligament option is offered, so the 77% ligament rate does not make a distractor defensible. Menisci are keyed nowhere else in the bank. s45 has a medial meniscus tear only as a distractor. | high |
| msk-34 q3 | Fixed (key feature) | BOAST 2017 text confirmed: immediate for heavy contamination or vascular compromise, 12 hours for other high energy fractures, 24 hours for all other low energy open fractures, and antibiotics within 1 hour of injury. Debridement timing is keyed nowhere else. The question tests how soon surgery must happen, which is msk KF7 (prompt surgery for open fractures), not KF6 (finding a subtle open fracture). Remapped to KF7. KF6 keeps 9 questions bank-wide. | high |

Checks after the fixes: `SAMP_BATCH` runs pass for s26 (516), s29 (532), s50 (683) and s53 (743). `npx tsc --noEmit -p .` gives 0 errors.

For the physician, in addition to the list above:
- tox-26: since 2013 Health Canada has limited brodifacoum to commercial class products, so a box in a home garage is less likely in Canada, though still possible.
- burns-20: chemical burns meet burn centre referral criteria. The key (admit for 24 hours of monitoring) does not conflict, since no burn centre option is offered, but consider whether transfer should be named.
