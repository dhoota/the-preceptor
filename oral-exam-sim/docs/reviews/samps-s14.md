# SAMP review: batch s14 (multiple trauma, pediatric fever)

Adversarial review against the SAMP review brief. All SAMPs stay `reviewed: false`. Ids are unchanged. Type check is clean for s14. `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts` gives 94 of 94 passing.

## Multiple trauma

| SAMP | Verdict |
| --- | --- |
| multiple-trauma-01 Motorcyclist | Corrected |
| multiple-trauma-02 Precordial stab wound | Corrected |
| multiple-trauma-03 Third trimester collision | Corrected |
| multiple-trauma-04 Older woman on apixaban | Corrected |
| multiple-trauma-05 Hemophilia, dirt bike | Accurate |
| multiple-trauma-06 Fixed wing transfer | Accurate (see open questions) |
| multiple-trauma-07 Declines blood | Accurate |
| multiple-trauma-08 Ejected driver | Accurate |
| multiple-trauma-09 Child struck by car | Corrected |
| multiple-trauma-10 Roofer fall | Corrected |
| multiple-trauma-11 Abdominal gunshot | Accurate |
| multiple-trauma-12 Dilating pupil | Corrected |
| multiple-trauma-13 Team pre-brief | Accurate |
| multiple-trauma-14 Snowmobile, hypothermia | Accurate |
| multiple-trauma-15 Possible IPV | Corrected |

### Changes

- ATLS source. Before: "11th edition" with no year. After: 11th edition, American College of Surgeons, 2025, with the ACS ATLS 11 page as the URL. ATLS 11 is real. ACS launched it in 2025. So the 11th edition citation is kept.
- SOGC source. Before: an invented plain title. After: Jain V, et al. Guidelines for the management of a pregnant trauma patient. SOGC No. 325. J Obstet Gynaecol Can. 2015.
- 01 q1 dangerous answer. Before: it matched "cxr before", "x ray before", "confirm cxr". Match words can come in any order, so "Decompress before CXR" scored the whole question zero. After: it matches only "wait for cxr / x ray / chest x ray / imaging". "Do not wait for CXR" is still negated correctly.
- 02 q4 recorder item. Before: it matched the bare word "time", which fits almost any line. After: "elapsed time", "arrest time", "keep time", "timekeeper" and similar.
- 03 q1 chest tube item. Before: it matched the bare word "higher". After: "interspace", "chest tube higher".
- 03 q3 dangerous discharge. Before: it matched the bare word "discharge", so "fetal monitoring 4 hours before discharge" scored zero. After: "discharge now", "discharge immediately", "discharge because efast", "send home now".
- 04 q3. Removed "anti Xa level" as an accepted answer, because the question asks for treatments. Added the Canadian brand Ondexxya to andexanet.
- 09 q3. "Avoid exposure" was negated by the engine and scored nothing. Added "avoid exposure", "limit exposure", "minimize exposure".
- 10 q3. The key text "Avoid hypotension" did not match candidates who wrote "avoid hypotension", because of negation. Added "avoid hypotension", "prevent hypotension" and "maintain blood pressure".
- 12 q1 explanation. Before: "110 mmHg outside that range". After: at least 110 mmHg at age 15 to 49 or over 70 (BTF 4th edition).
- 15 q3 explanation. Before: "confidential in Ontario unless children are at risk". After: confidential, with the main limits being a child who may need protection and an imminent risk of serious harm or death.

### Writer flags checked

1. 03: at least 4 h of fetal monitoring at 23 weeks or more, anti-D for Rh negative with Kleihauer Betke to guide dosing (SOGC No. 325). RhIG 300 mcg is the standard Canadian dose. Perimortem delivery started by 4 min, with the aim of delivery by 5 min (AHA 2015). Confirmed.
2. 04: PCC or andexanet are accepted. Vitamin K, plasma and idarucizumab are rejected. Thrombosis Canada gives PCC 2000 units for ICH on a factor Xa inhibitor, and andexanet (Ondexxya) where available. Confirmed.
3. 05: factor VIII 50 IU/kg = 3000 IU for 60 kg. 1 IU/kg raises the level about 2%. Factor goes before imaging (WFH 2020). The Canadian C-spine Rule lists motorized recreational vehicles as a dangerous mechanism, and he is 17, which is within the rule's age of 16 or older. Confirmed.
4. 06: NG tube is dangerous. "OG tube, not NG" is negated correctly, which I tested. Limitation: "orogastric tube instead of NG" or "rather than NG" does trip the dangerous flag, because the engine does not treat "instead of" as a negation. See open questions.
5. 07: q3 states Ontario. HCCA s.26 means a known prior capable wish that applies to the situation stops emergency treatment. Confirmed.
6. 09: TXA 15 mg/kg = 330 mg (max 1 g), then 2 mg/kg/h (RCPCH). PRBC 10 mL/kg = 220 mL. 1 g equals 45 mg/kg. Confirmed.
7. 12: at age 55, SBP 100 or more is correct (BTF: 100 or more at age 50 to 69). Flagging permissive hypotension and steroids (CRASH, BTF level I against) as dangerous is fair. "No permissive hypotension" and "avoid steroids" are negated correctly.

## Pediatric fever

| SAMP | Verdict |
| --- | --- |
| pediatric-fever-01 Twelve day old | Corrected (significant) |
| pediatric-fever-02 Six week old | Corrected |
| pediatric-fever-03 Septic infant | Corrected |
| pediatric-fever-04 Purpura | Corrected |
| pediatric-fever-05 Measles | Corrected |
| pediatric-fever-06 Kawasaki | Corrected (mapping) |
| pediatric-fever-07 Malaria | Corrected |
| pediatric-fever-08 AOM | Corrected |
| pediatric-fever-09 Viral URTI and acetaminophen error | Corrected |
| pediatric-fever-10 Salicylate | Accurate |
| pediatric-fever-11 Heat stroke | Accurate |
| pediatric-fever-12 Febrile neutropenia | Corrected |
| pediatric-fever-13 Leukemia | Accurate |
| pediatric-fever-14 Infant UTI | Corrected |
| pediatric-fever-15 Toxic shock after varicella | Corrected |

### Changes

- CPS febrile infant source. Before: an organisation and title only. After: Burstein B, Lirette MP, Beck C, Chauvin-Kimoff L, Chan K. Paediatr Child Health. 2024, with the CPS URL.
- 01 q2 (most serious error). Before: ampicillin 50 mg/kg (180 mg) and gentamicin 4 mg/kg (14.4 mg), with no intervals. The CPS 2024 table for term infants aged 8 to 28 days gives ampicillin 75 mg/kg every 6 h and gentamicin or tobramycin 5 mg/kg every 24 h. After: ampicillin 75 mg/kg (270 mg) every 6 h and gentamicin 5 mg/kg (18 mg) every 24 h. The underdosed ampicillin distractor became 25 mg/kg every 12 h. The prompt now says antibiotics are started after the LP, because CPS allows observation without antibiotics for low risk neonates. The explanation now follows the CPS meningitis step (add cefotaxime, or use it in place of the aminoglycoside). Ceftriaxone stays rejected because of jaundice and the IV calcium interaction.
- 01 q1 explanation. Before: "every febrile neonate needs CSF". CPS 2024 says LP is not required in low risk infants aged 28 days or younger. After: the CPS core tests for all, with LP for high risk and often for low risk.
- 01 q4. Before: the key was admission on antibiotics until cultures are negative at 24 to 36 h, and "admit off antibiotics" was a distractor even though CPS endorses it. After: the key is admission and observation until cultures are negative at 36 h, with or without continuing antibiotics (CPS 0 to 28 days). The distractor is now "discharge once the blood culture is negative at 12 hours".
- 02 q1 explanation. Before: PECARN procalcitonin 0.5. After: PECARN 1.71 µg/L and AAP 0.5 µg/L.
- 02 q2. The source is now CPS. Follow up is now 24 to 48 h, per CPS. The distractor "admit 48 h off antibiotics" was close to the CPS observation option, so it became "admit and start ampicillin and gentamicin", which is wrong at 42 days.
- 02 q3. Removed the unacceptable "by age" item. Any order matching meant "dose by weight, not age" scored zero. Added 0.6 and 0.7 mL as accepted volumes, which are 48 and 56 mg, within 10 to 15 mg/kg. Added "don't give ibuprofen" wordings.
- 03 q3 and 04 q2 dangerous answers. Before: "lp before", "lp first", "after lp", "wait for". So "antibiotics before LP" and "LP after antibiotics", both correct, zeroed the question. After: "wait for lp", "wait for lumbar puncture", "wait for csf".
- 05 q2. Before: any mention of "droplet" was unacceptable, so "airborne, plus droplet" scored zero. After: only "droplet only".
- 06 q4. The key feature changed from 4 to 5. The question tests the causes of persistent fever that mimic Kawasaki disease.
- 07 q2. Glucose was 2.8, which does not meet the severe malaria hypoglycemia threshold of below 2.2 mmol/L. It is now 2.0. The explanation now gives CATMAT 5% or more and WHO more than 10% for hyperparasitemia. The source is now CATMAT. The WHO source was removed as uncited.
- 08 q2. Removed the "by age" unacceptable item for the same any order reason.
- 08 q4. The amoxicillin text now matches CPS: 75 to 90 mg/kg/day divided twice daily, or 45 to 60 mg/kg/day divided three times daily. Added 600 mg, 675 mg and 60 mg/kg matches.
- 09 q1. "Avoid cough and cold medicines" was negated and scored nothing. Added negation phrases.
- 09 q4. Before: "a detectable level" was the NAC trigger. After: a level of 20 mg/L (about 132 µmol/L) or more, or a raised ALT, after repeated supratherapeutic ingestion. Added the source Dart RC, et al. JAMA Netw Open. 2023 (verified).
- 12 q2 dangerous answer. Before: "wait for", "await", "after cbc". So "draw CBC after antibiotics" zeroed the question. After: "wait for / await anc, cbc, count, neutrophil".
- 14 q4. Added "don't give ibuprofen" wordings.
- 15 q2 explanation. Vancomycin is now tied to shock with a possible necrotizing infection, not only to local MRSA rates.

### Writer flags checked

8. 01: see above. CPS 2024 gives ampicillin 75 mg/kg every 6 h from 0 to 28 days, which is higher than the flagged 50 mg/kg. CPS gives no separate higher ampicillin dose for meningitis in this age group. It adds cefotaxime 50 mg/kg (every 8 h at 0 to 7 days, every 6 h at 8 to 28 days). Gentamicin is 5 mg/kg from 8 to 28 days (4 mg/kg at 0 to 7 days). The CPS statement does not discuss ceftriaxone and bilirubin. That rejection rests on product labelling and general neonatal practice.
9. 02: verified against the CPS 2024 statement. For 29 to 60 days and low risk, LP is not required. The options are discharge with follow up in 24 to 48 h, or admission until cultures are negative at 24 h.
10. 03 and 04: ceftriaxone 100 mg/kg (850 mg and 1.4 g) and vancomycin 15 mg/kg (130 mg and 210 mg) are correct. Epinephrine 0.05 to 0.3 mcg/kg/min matches SSC 2020. Rifampin 10 mg/kg (max 600 mg) every 12 h for 2 days, or 5 mg/kg under 1 month, is correct. 20 kg gives 200 mg.
11. 05: the CIG gives IMIG 0.5 mL/kg (max 15 mL) for infants under 6 months and IVIG 400 mg/kg for a susceptible pregnant contact, within 6 days. Verified.
12. 06: IVIG 2 g/kg = 32 g. ASA 30 to 50 (moderate) or 80 to 100 (high) mg/kg/day, per AHA 2017. Confirmed.
13. 07: artesunate 2.4 mg/kg is correct at 26 kg. WHO uses 3 mg/kg under 20 kg.
14. 08: the CPS AOM statement (2016, reaffirmed 2024) gives 5 days at age 2 or older for uncomplicated AOM, and 10 days under 2 years or with perforation or recurrence. The dose was corrected as above.
15. 09: 5 mL of 80 mg/mL is 400 mg. Six doses a day is 2400 mg, which is 200 mg/kg/day at 12 kg. That is correct. The NAC trigger was corrected as above.
16. 10: EXTRIP 2015 thresholds are correct. Recommended: level above 7.2 mmol/L, above 6.5 mmol/L with impaired kidney function, altered mental status, new hypoxemia, failure of standard therapy. Suggested: pH 7.20 or lower. The anion gap is 25 and the mixed picture is plausible.
17. 12: antibiotics within 60 min, ceftriaxone rejected and waiting for the ANC flagged dangerous. All kept, with the dangerous phrases fixed.
18. 14: cefixime 8 mg/kg once daily, 7 to 10 days, per CPS UTI 2014. The CPS febrile infant table also lists cefixime 8 mg/kg. Confirmed.
19. 15: clindamycin 13 mg/kg (260 mg) plus ceftriaxone 100 mg/kg (2 g). Confirmed. Vancomycin is handled as above.

## Sources verified

- ATLS 11th edition, ACS 2025: https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- CPS febrile young infants, 2024: https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days and https://pmc.ncbi.nlm.nih.gov/articles/PMC10848123/
- SOGC No. 325, 2015: https://pubmed.ncbi.nlm.nih.gov/26334607/
- CIG measles PEP: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html
- CPS AOM (Le Saux, Robinson 2016, reaffirmed 2024): https://cps.ca/en/documents/position/acute-otitis-media
- Dart 2023 JAMA Netw Open consensus: https://digitalcommons.wustl.edu/oa_4/2222/
- Thrombosis Canada DOAC bleeding guide: https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf
- The other citations (CRASH-2, PROPPR, Rossaint 2023, EAST 2015, Jeejeebhoy 2015, Stiell 2001 x2, WFH 2020, BTF 2017, Hicks 2018, Brown 2012, Mills 2004, WHO 2013, Weiss 2020, PHAC 2005, McCrindle 2017, Pantell 2021, Kuppermann 2019, Juurlink 2015, Roberts 2021, Lehrnbecher 2023, Coiffier 2008, Robinson 2014, Stevens 2014) are well known publications. The titles and years match. I did not fetch the full text of each.

## Open questions for the physician

- Engine limitation in 06 q1: "orogastric instead of NG" or "rather than NG" triggers the dangerous NG flag, because "instead of" is not a negation word. Consider adding "instead" and "rather" to the engine's negation list, or accept the risk.
- 01: the CPS lets low risk neonates be observed without antibiotics or LP. The SAMP now assumes the clinician chose LP and antibiotics. Confirm this framing is acceptable for a well 12 day old with jaundice.
- 14 q2 accepts a clean catch with bladder stimulation for a 4 month old. The CPS UTI statement prefers catheter or SPA before toilet training. Confirm whether to keep this.
- 15: ceftriaxone plus clindamycin is keyed for pediatric toxic shock. Some centres use cefazolin or penicillin plus clindamycin, with vancomycin for shock. The key choice is reasonable but local.
- 12 q1: "SBP 100 (permissive hypotension is harmful)" would trip the dangerous flag. This wording is rare.
- Artesunate access in Canada has changed over time. The explanation defers to current CATMAT guidance.

## Summary

The trauma content was clinically sound. Most trauma fixes were answer key mechanics, where match words in any order caused false dangerous or false negative marks, plus two citation fixes. The ATLS 11th edition is real (ACS, 2025) and is kept. The most serious clinical error was in pediatric fever 01: the neonatal ampicillin and gentamicin doses were below the CPS 2024 regimen (75 mg/kg every 6 h and 5 mg/kg every 24 h), and the neonatal LP and disposition teaching did not follow CPS 2024. Also corrected: the PECARN procalcitonin threshold, the severe malaria glucose value, the CPS amoxicillin divisions for AOM, and the NAC trigger for repeated supratherapeutic acetaminophen ingestion. Several dangerous flags zeroed correct answers such as "antibiotics before LP" and were narrowed.
