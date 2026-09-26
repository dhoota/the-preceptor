# Signed-duplicate rebuild g14b

Brief: scratchpad/signed-rebuild-brief.md, plus the fail rows for infectious-diseases-02 in docs/reviews/signed-rebuild-g13-review.md. One id rebuilt in `src/samps/s12/infectious-diseases.ts`. Nothing else in the file was touched, apart from the source constants belonging to this SAMP.

## Row: infectious-diseases-02

**Old story (signed, cluster 3).** A 62-year-old man with fever, severe headache, vomiting and confusion, neck stiffness and no rash. Keys: ceftriaxone 2 g, vancomycin, ampicillin and dexamethasone before imaging, then cultures, dexamethasone, antibiotics, CT and LP, Listeria cover for age over 50, and meningococcal chemoprophylaxis for close contacts. This was the shared meningococcal story of cluster 3, with pediatric-fever-04 kept.

**First rebuild (failed g13 review).** Severe mpox with bacterial superinfection and septic shock in a man with advanced HIV. q1 keyed vancomycin plus piperacillin-tazobactam for a spreading thigh infection with MRSA risk, which is already keyed in infectious-diseases-04, infectious-diseases-31, shock-25 and lacerations-07, and the story resembled pediatric-fever-15. That draft has been discarded in full, including its mpox questions and its S.ssc2026, S.cigMpox and S.phacMpox constants.

**New story.** A 31-year-old woman at 38 weeks gestation in a Manitoba emergency department, membranes ruptured 26 hours, in labour 6 hours, with fever, rigors, a tender uterus, foul smelling discharge, a fetal heart rate of 178/minute and a white cell count of 19.4 x 10^9/L. Her 36-week group B streptococcus swab was positive and she has had no antibiotics. She had hives, lip swelling and breathing difficulty within minutes of amoxicillin at age 20. Diagnosis: intraamniotic infection, also called clinical chorioamnionitis. No skin or soft tissue infection, no MRSA, no mpox, no meningitis and no septic shock.

**Structure kept.** 4 questions, kinds short, single, short, menu, key features ID 1, ID 1, ID 3, ID 10. `...META` spread first, then `version: 2` and `reviewed: false`. Neutral title, "Fever and abdominal pain in labour".

**Keyed decisions.**

| Q | Kind | KF | Keyed decision |
|---|---|---|---|
| q1 | short | ID 1 | In intraamniotic infection with a history of penicillin anaphylaxis, replace the ampicillin with vancomycin 1 g IV every 12 hours (or clindamycin 900 mg IV every 8 hours), keep gentamicin 5 mg/kg every 24 hours (390 mg at 78 kg), and give acetaminophen. A penicillin and the cefazolin option are both unsafe here. |
| q2 | single | ID 1 | Treat during labour, not after delivery, and aim for vaginal birth. Intraamniotic infection alone is not an indication for caesarean, and treatment does not wait for an amniotic fluid culture. |
| q3 | short | ID 3 | The factors that raise the newborn's risk of early onset sepsis in this case: maternal colonization this pregnancy, membranes ruptured 18 hours or more, maternal fever of 38°C or more, no intrapartum prophylaxis, and the intraamniotic infection itself. Preterm birth does not apply at 38 weeks. |
| q4 | menu | ID 10 | Which situations call for intrapartum prophylaxis against group B streptococcus: fever of 38.0°C or more in labour and delivery before 37 weeks qualify whatever the swab shows, as does group B streptococcus in the urine this pregnancy. A caesarean before labour with intact membranes, 10 hours of ruptured membranes with a negative swab, a negative swab at term, and a positive swab in an earlier pregnancy do not. |

**Sources, all opened and read today.**

- Conde-Agudelo A, Romero R, Jung EJ, Garcia Sanchez AJ. Management of clinical chorioamnionitis: an evidence-based approach. Am J Obstet Gynecol. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC8315154/ Gives the diagnostic criteria (fever plus two or more of maternal tachycardia above 100/minute, fetal tachycardia above 160/minute, uterine tenderness, purulent or foul smelling fluid, white cells above 15 000/mm3), the accuracy of those criteria against proven intraamniotic infection of about 50 percent, ampicillin 2 g IV every 6 hours with gentamicin 5 mg/kg every 24 hours, clindamycin 900 mg or vancomycin 1 g every 12 hours or erythromycin as the substitutes for a penicillin allergy, clindamycin 900 mg at cord clamping for caesarean, intrapartum rather than postpartum treatment, acetaminophen, and the statements that clinical chorioamnionitis alone is not an indication for caesarean and that immediate delivery is not required.
- Jefferies AL. Management of term infants at increased risk for early onset bacterial sepsis. Canadian Paediatric Society, Fetus and Newborn Committee. Paediatr Child Health. 2017. https://cps.ca/en/documents/position/management-infant-sepsis Gives the risk factor list, their additive nature, and adequate prophylaxis as at least one dose of IV penicillin G, ampicillin or cefazolin 4 hours or more before birth.
- Manitoba Health, Seniors and Active Living. Communicable disease management protocol: streptococcal group B invasive disease of the newborn. Government of Manitoba. August 2016. https://www.gov.mb.ca/health/publichealth/cdc/protocol/groupb.pdf Gives the indications for intrapartum prophylaxis and the exception for a caesarean before labour with intact membranes, screening at 35 to 37 weeks, penicillin G 5 million units then 2.5 to 3 million units every 4 hours as the agent of choice, cefazolin only for an allergy without anaphylaxis, angioedema, respiratory distress or urticaria, and vancomycin 1 g every 12 hours when susceptibility to clindamycin and erythromycin is unknown.

Numbers rechecked: gentamicin 5 mg/kg at 78 kg is 390 mg. Fever 38.9°C is above 38.0°C, fetal heart rate 178/minute is above 160/minute, pulse 122/minute is above 100/minute, white cells 19.4 x 10^9/L equal 19 400/mm3 and so exceed 15 000/mm3. Four of the five supporting signs are present, and two are enough. Membranes ruptured 26 hours, which passes the 18 hour threshold. Gestation is 38 weeks, so the under 37 week criterion does not apply. The province is named in the stem because q4 tests a provincial protocol.

**Duplicate check 1, decision search.** Terms grepped in scratchpad/allkeys.tsv (5 488 keyed answers) and in src/samps.

- "intrapartum", "chorioamnion", "intraamniotic", "intra-amniotic": no hits in allkeys.tsv, and no file in src/samps mentions intraamniotic infection or chorioamnionitis. "group b strep" in src/samps now matches only this file.
- Penicillin allergy substitution: the closest hit is infectious-diseases-05 q4, "Clindamycin, for example with penicillin allergy", for a peritonsillar abscess. No obstetric or gram negative combination anywhere, and no SAMP keys the anaphylaxis versus non-anaphylaxis split that decides between cefazolin and vancomycin.
- Ampicillin plus gentamicin, which the first draft of this rebuild would have keyed, is already keyed in infectious-diseases-24 q3 (listeriosis in pregnancy) with q2 keying "Now, before test results", and in the neonatal SAMPs pediatric-fever-01 and pediatric-fever-16. That is why q1 keys the substitute regimen for anaphylaxis instead and q2 keys the intrapartum and route-of-birth decision rather than "before test results".
- Maternal risk factors: pediatric-fever-16 q1 keys "Untreated maternal GBS carriage" as the single best explanation for a 4-day-old's sepsis. q3 here is the list of five additive factors in a mother still in labour, which is not keyed anywhere.
- Intrapartum prophylaxis indications: no hits at all. Chemoprophylaxis keys in the bank are meningococcal (pediatric-fever-04, headache-04), pertussis (infectious-diseases-40), invasive group A streptococcus (infectious-diseases-37), rabies, tetanus, hepatitis A and B, varicella and HIV. None covers group B streptococcus.
- Vaginal birth or caesarean decisions: pre-eclampsia-22 q3 (emergency caesarean for abruption) and pre-eclampsia-30 q2 (aim for vaginal birth after induction in myasthenia gravis). Neither is an infection decision.

**Duplicate check 2, similarity.** `python3 scratchpad/simcheck.py g14b/draft2.txt infectious-diseases-02`. Top 5: pediatric-fever-16 full 0.24 keys 0.09, pre-eclampsia-37 full 0.21 keys 0.20, dvt-pe-40 full 0.19 keys 0.02, abuse-domestic-11 full 0.15 keys 0.11, infectious-diseases-30 full 0.15 keys 0.04. Every card was read. pediatric-fever-16 is the newborn of an untreated colonized mother, a different patient and different keys (neonatal ampicillin, gentamicin and cefotaxime doses). pre-eclampsia-37 shares only the pregnant patient in the department. infectious-diseases-24 sits at full 0.12 keys 0.06 after the q1 and q2 changes. The bank wide near duplicate stem test passes.

**Duplicate check 3, signed clusters and concurrent writers.** No cluster in docs/SIGNED-DUPLICATES.md tells an intrapartum infection story. The other ids in cluster 3 are going to tetanus (headache-04), a child with dilated cardiomyopathy in septic shock (pediatric-fever-03) and nephrotic syndrome with peritonitis (shock-12), none of which this story touches. src/samps was re-grepped at the end of the work for "chorioamnion", "intraamniotic", "intrapartum" and "group b strep": still only this file.

**D1.** q4 is the only question that could be read as a repeat, and it is not: no group B streptococcal prophylaxis decision exists in the bank. q1, q2 and q3 key decisions that are absent. So this SAMP relies on no D1 repeat, and nothing needs adding to the D1 table for it.

## Hold back

- Created `src/samps/held-back/g14b.json` with the single id.
- Removed `infectious-diseases-02` from `src/samps/held-back/g13.json`, so the id is held back in one file only. That file now matches HEAD, since a concurrent writer had already moved tox-09 to g14c.json.

## Checks

- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- `npx tsc --noEmit -p .`: clean.

## For the physician

- q1 keys vancomycin 1 g IV every 12 hours (or clindamycin 900 mg IV every 8 hours) with gentamicin for intraamniotic infection in a woman whose amoxicillin reaction was anaphylaxis. Please confirm you are comfortable with vancomycin as the preferred substitute here. The reasoning follows Manitoba's prophylaxis rule for an unknown susceptibility, while the treatment regimen itself comes from the 2020 AJOG review.
- The regimen and the delivery statements rest on that AJOG review, not on a Canadian guideline. No SOGC guideline covers the treatment of intraamniotic infection, and SOGC No. 298 (2013), the Canadian guideline for group B streptococcal prophylaxis, is paywalled, so the Manitoba protocol of August 2016 is cited for the prophylaxis indications instead. Both are older documents. Please say whether you want a newer reference or different wording.
- q4 tests a provincial protocol, so the stem names Manitoba. The indications match the national pattern, but the wording of the exception for a caesarean before labour is Manitoba's.
- q3 counts "no intrapartum antibiotic prophylaxis yet" as a risk factor, on the basis that prophylaxis counts as adequate only 4 hours or more before birth. Please confirm that reads correctly for a woman who is 4 cm dilated.
- Mpox is now absent from the bank again, since the first rebuild's mpox questions were discarded. Tecovirimat remains unkeyed.
