# Q500 independent QA: batch14

Reviewer: Preceptor QA. Four oral cases in `src/cases/batch14/`. All remain `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal names found in any case.

Final checks: `npx tsc --noEmit -p . | grep cases/batch14` gives no output. `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes 45 of 45.

## Verdicts

| case | verdict |
| --- | --- |
| postpartum-pleuritic-chest-pain | Pass after corrections |
| rural-child-wheeze-tiring | Pass after a rewritten escalation (the original duplicated a bank twist) |
| return-visit-belly-pain-girl | Pass after corrections |
| preschooler-six-day-fever | Pass after corrections |

## Numbers recomputed

- Wells for PE: signs of DVT 3, no alternative more likely 3, heart rate over 100 1.5, surgery within 4 weeks 1.5. Total 9, PE likely (BC threshold 4.5 or more). Correct.
- sPESI: age, cancer, cardiopulmonary disease, heart rate 110 or more, systolic under 100, saturation under 90 percent. Heart rate 108 and saturation 94 percent give 0. Correct.
- Hestia: no item positive. She is postpartum, not pregnant, and the caesarean was 3 weeks ago. Correct.
- Dalteparin 200 units/kg x 88 kg = 17,600 units. BC lists syringes of 16,500 and 18,000 units and says round up. 18,000 units correct.
- PRAM on arrival: 2 + 2 + 2 + 2 + 2 = 10, severe. Correct.
- TREKK doses at 28 kg: salbutamol 10 puffs or 5 mg, ipratropium 4 puffs or 250 mcg (all weights), dexamethasone 0.6 mg/kg = 16.8 mg capped at 12 mg, magnesium 50 mg/kg = 1400 mg (max 2 g). All correct.
- Pediatric Appendicitis Score: hop pain 2, anorexia 1, fever 1, vomiting 1, right lower quadrant tenderness 2, white cells 1, neutrophils 1, migration 1. Total 10, high. Correct.
- Morphine 0.1 mg/kg x 36 kg = 3.6 mg. Fluid 20 mL/kg = 720 mL. Ondansetron 0.15 mg/kg capped at 4 mg. Correct.
- Ceftriaxone with metronidazole: Solomkin pediatric table gives ceftriaxone 50 to 75 mg/kg/day every 12 to 24 hours and metronidazole 30 to 40 mg/kg/day every 8 hours. The case doses sit in range. Wording changed to the ranges.
- Kawasaki: IVIG 2 g/kg x 15 kg = 30 g. ASA 160 mg every 6 hours = 640 mg/day = 42.7 mg/kg/day, inside 30 to 50. Acetaminophen 160 mg = 10.7 mg/kg, an underdose against 15 mg/kg = 225 mg. Amoxicillin 675 mg twice daily = 90 mg/kg/day. Correct.
- Clindamycin 13 mg/kg every 8 hours = about 39 mg/kg/day, the usual severe infection dose. Ceftriaxone 50 mg/kg = 750 mg. Neither dose is printed in a cited source (see physician items).

## Changes by case

### postpartum-pleuritic-chest-pain

1. Weight written as 88 kg (194 lb) to match the bank format.
2. q-site model answer: spelled out the sPESI items she does not meet, and added that Hestia and sPESI were derived in confirmed PE while here the leg ultrasound confirms VTE and treatment is the same.
3. pe-m5 teaching: replaced the vague "not advised" with the 2024 U.S. MEC categories (category 4 under 21 days postpartum, category 3 during anticoagulation for DVT or PE). This resolves the writer's flag.
4. pe-d1: the claim that every VTE needs at least 3 months of treatment was cited to the Hestia study, which does not say that. Source changed to the BC guideline, which does, and teaching reworded to its text.

Writer flags: Hestia authorship confirmed (Zondag W, Mos IC, Creemers-Schild D, et al. J Thromb Haemost 2011;9:1500 to 1507). The combined pill category is now stated correctly. ASH recommendation 13 is a strong recommendation against DOACs in breastfeeding, so the "unsafe" label on rivaroxaban while breastfeeding is defensible.

Uniqueness: the bank PE cases are a syncope with intermediate risk PE at a tertiary centre and a maternal arrest at 33 weeks. The PE SAMPs on pregnancy are antepartum. batch13 `postpartum-headache-return-visit` also teaches breastfeeding compatible drug choice, but for antihypertensives in pre-eclampsia, so the overlap is a theme, not a scenario. No near-duplicate.

### rural-child-wheeze-tiring

1. Near-duplicate removed. The original twist was a tension pneumothorax on positive pressure in a 9 year old with severe asthma. The bank already has this: SAMP `airway-10` ("Tiring on high flow", a 9 year old girl with PRAM 11 who tires and develops a pneumothorax on positive pressure, keyed to asthma-copd key feature 4) and the s04 SAMP "Sudden deterioration during treatment" (asthma with tension pneumothorax). Rule 3 forbids reusing a twist. Replaced s-ptx, q-ptx and s-xray with s-worse, q-worse and s-missed: a coexisting right lower lobe pneumonia on positive pressure support, with new fever, focal bronchial breathing, ultrasound consolidation and lung sliding on both sides. Strong choice: blood culture and ceftriaxone 50 mg/kg (1400 mg). Partial: blame bronchospasm and raise the pressures. Unsafe: needle a chest with lung sliding. This still tests key feature 4 (coexisting pneumonia) and is new to the bank.
2. Path continuity bug fixed. The unsafe "I intubated him with propofol" choice led to a node that then started BiPAP on an intubated child, and later nodes said "on BiPAP". Added s-propofol (post intubation hypotension and breath stacking, disconnect, fluid, rate 14 with long expiration). Later text (s-worse, q-grandmother prompt, handover, end) now reads correctly for both ventilated and BiPAP paths.
3. Rubric as-a4 and as-m5 (critical) rewritten for the new escalation. as-m5 now cites the CPS pneumonia practice point. as-c2 teaching no longer mentions a chest tube.
4. New source `cps-cap` (CPS pneumonia practice point, verified). Sources now 5.
5. alsoCovers changed from procedures to id, since no procedure remains.
6. Hour 1 PRAM: PRAM scores saturation on room air, but the finding gave only a saturation on oxygen. Added the item breakdown (air entry 1, saturation 2 on a brief room air check) so the total of 9 can be checked.
7. End text updated (pneumococcus in the blood culture, home on day 6). Weight written as 28 kg (62 lb).

The writer's flag on tension pneumothorax plausibility is moot after the rewrite.

### return-visit-belly-pain-girl

1. Opioid evidence overstated in five places ("does not increase missed appendicitis", "opioids do not mask peritonitis", "analgesia does not hide the diagnosis"). Poonai 2014 found no increase in perforation or abscess. Model answer, strong and unsafe feedback, the strong choice label and ap-m3 teaching now say that.
2. q-sepsis model answer: antibiotic doses written as the Solomkin ranges (ceftriaxone 50 to 75 mg/kg/day, metronidazole 30 to 40 mg/kg/day every 8 hours). This resolves the writer's flag.
3. Weight written as 36 kg (79 lb).

Choice labels checked. Withholding analgesia from a child in 8 of 10 pain is kept as unsafe. Uniqueness: no pediatric appendicitis oral case or SAMP with this scenario. The bank abdominal pain cases are an older man and a neonate with bilious vomiting.

### preschooler-six-day-fever

1. c-wait-echo relabelled from partial to unsafe. The choice sends home a febrile child who meets criteria for complete Kawasaki disease without IVIG and plans treatment only if the echo is abnormal. The CPS says treat when criteria are met. Feedback rewritten to say so.
2. c-kd feedback: "the features rarely appear together" changed to "often appear one at a time", which is what the guidance says.
3. q-shock model answer: added the dose in mg, the 8 hourly clindamycin interval and vancomycin where MRSA is common (CPS iGAS).
4. kd-m3 rewritten without the unsourced mg/kg doses, and now cites the CPS invasive group A streptococcal disease practice point, which strongly recommends clindamycin with a beta-lactam in severe disease and toxic shock and vancomycin where MRSA is common. New source `cps-igas`. Sources now 5.
5. q-family model answer: the CPS gives inactivated influenza vaccine to the child on ASA and to household members over 6 months. The case had household members only.
6. kd-p1 cited the AHA statement for allergy delabelling, which it does not cover. Teaching now rests on the CPS fact that a polymorphous rash is a principal feature, and the source is the CPS statement.
7. Weight written as 15 kg (33 lb).

Uniqueness: Kawasaki appears in SAMPs only (incomplete disease in an infant, MIS-C, and a late aneurysm MI in a teenager). batch06 `pediatric-septic-shock` is also a 3 year old in shock in a community hospital, but the diagnosis, the twist and the teaching differ. No near-duplicate.

## Sources checked

- BC Guidelines. Venous thromboembolism. Diagnosis and management. Effective 29 February 2024. Opened and read the PDF: https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf (Wells 4.5, no D-dimer when likely, empiric anticoagulation, hospitalization criteria, DOACs contraindicated in breastfeeding, dalteparin syringes and rounding, overlap of 5 days and 2 INRs, at least 3 months).
- Bates SM, et al. ASH 2018 VTE in pregnancy. Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/ (recommendation 12 strong for LMWH and warfarin, 13 strong against DOACs, 16 and 18 on future prophylaxis).
- Zondag W, et al. The Hestia Study. JTH 2011. Confirmed by search (repub.eur.nl and journal record). No URL added.
- Nguyen AT, et al. U.S. MEC 2024. Opened https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm and the appendix https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm (category 4 under 21 days, category 3 on anticoagulation).
- Singh N, McLean K. CMAJ 2012. Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC3470645/ (under 1 percent to milk, about 0.01 percent absorbed).
- TREKK. Pediatric severe asthma exacerbation algorithm v2.0. 2024. Opened and read https://cms.trekk.ca/wp-content/uploads/2024/02/2024-02-19_Asthma-Algorithm_v2.0-FINAL.pdf (all doses, PRAM table, stepwise support, magnesium after the first hour, consider pneumothorax).
- Trottier ED, et al. CPS. Managing an acute asthma exacerbation in children. 2021. Confirmed by search (cps.ca listing). No URL added.
- Ducharme FM, et al. PRAM. J Pediatr 2008;152:476 to 480. Confirmed by search.
- Global Initiative for Asthma. 2024 report. Unchanged, confirmed by the writer.
- Le Saux N, Robinson JL. CPS. Uncomplicated pneumonia in healthy Canadian children and youth. 2015, updated 2024. Opened https://cps.ca/en/documents/position/pneumonia-management-children-youth (third generation cephalosporin for respiratory failure or septic shock, ceftriaxone 50 to 100 mg/kg/day, max 4 g). New.
- Di Saverio S, et al. WSES 2020. URL as given by the writer.
- Koberlein GC, et al. ACR Appropriateness Criteria, suspected appendicitis, child. JACR 2019;16(5S):S252 to S263. Confirmed by search, https://scholarlyexchange.childrensmercy.org/papers/2645.
- Bundy DG, et al. JAMA 2007;298:438 to 451. Confirmed by search.
- Poonai N, et al. Acad Emerg Med 2014;21:1183 to 1192. Confirmed by search (no increase in perforation or abscess).
- Solomkin JS, et al. CID 2010. Confirmed by search, including the pediatric dosing ranges for ceftriaxone and metronidazole.
- Weiss SL, et al. SSC pediatric 2020. Confirmed by search (antimicrobials within 1 hour in shock, 10 to 20 mL/kg boluses to 40 to 60 mL/kg).
- Chen A, et al. CPS. Kawasaki disease. Paediatr Child Health 2026;31(5):550 to 555. Opened https://cps.ca/en/documents/position/kawasaki-disease (criteria, IVIG under 5 percent aneurysms, ASA options, platelets over 80, NSAIDs, shock definition, influenza vaccine, live vaccines 11 months).
- McCrindle BW, et al. AHA 2017. Confirmed by search. An AHA update (Jone et al., Circulation 2024) exists. The 2017 statement still supports every point it is cited for.
- Moore DL, Allen UD, Mailman T. CPS. Invasive group A streptococcal disease. 2019, reaffirmed 2024. Opened https://cps.ca/en/documents/position/invasive-group-a-streptococcal-disease (clindamycin with a beta-lactam, vancomycin where MRSA is common). New.
- CPS Caring for Kids. Fever and temperature taking. URL as given by the writer.

## Needs a physician's eye

- Kawasaki case: ceftriaxone 50 mg/kg and clindamycin 13 mg/kg every 8 hours are standard but appear only in the model answer, not in a cited dosing table. Some centres would give ceftriaxone 100 mg/kg/day in undifferentiated shock.
- Asthma case: the new pneumonia escalation uses ceftriaxone 50 mg/kg. The CPS range is 50 to 100 mg/kg/day. Please confirm the scenario reads well at the bedside.
- PE case: Hestia and sPESI are applied to a confirmed proximal DVT with a clinically likely but unimaged PE. The model answer now says so. A physician may prefer to call this "VTE risk stratification" only.
- Appendicitis case: pyuria from an inflamed appendix is taught in feedback without a cited frequency.
