# Adversarial review: SAMP batch s13 (lacerations, multiple-patients)

Reviewer: adversarial CCFP-EM examiner pass. Files: `src/samps/s13/lacerations.ts`, `src/samps/s13/multiple-patients.ts`. All SAMPs keep `reviewed: false` and stable ids.

## Summary

The medicine was mostly sound. Every dose the writer flagged recomputes correctly. The serious problems were in answer keys and in rabies wording that has since changed.

- **Answer key harm.** In lacerations-08 q3, the dangerous "lidocaine for an arrhythmia" phrase matched any line containing "lidocaine" and "for". A correct answer such as "Lipid emulsion for lidocaine toxicity" scored the whole question zero. It is fixed and tested.
- **Rabies.** In lacerations-15, "completed a rabies pre-exposure series 3 years ago" is now ambiguous. The current Canadian Immunization Guide (CIG) says that after a 2 dose series given 3 or more years ago, the patient needs full PEP with RIG. The stem now says a documented 3 dose series, so the keyed days 0 and 3 answer is correct. The bat explanations now follow the current CIG wording.
- **Blueprint.** Key feature labels were fixed. Six multiple-patients questions that clearly test the topic's own key features were mapped back to it. The topic's own key features rose from 31 to 36 of 58 questions.

Checks: `npx tsc` shows no s13 errors. `SAMP_BATCH=s13 npx vitest run tests/samps.test.ts` passes all 94 tests. I also scored sample answers against the edited keys in a temporary test, which I then deleted.

## Writer's flagged points

1. **Lidocaine maximums.** 7 mg/kg x 50 kg = 350 mg = 35 mL of 1%. Plain lidocaine at 4.5 mg/kg is 225 mg, or 22.5 mL, so the 22 mL distractor is the plain maximum. The LAST update gives 20 mL of 2% (400 mg) on top of 350 mg. That is about 750 mg, or 15 mg/kg. **Accurate.**
2. **LAST.** Lipid 20% at 1.5 mL/kg over 2 to 3 minutes, then 0.25 mL/kg/min, matches the ASRA 2017 advisory. Lidocaine for arrhythmia is correctly dangerous, because ASRA says to avoid local anaesthetics as antiarrhythmics. Before, the match phrases were `"lidocaine for"` and `"lidocaine arrhythmia"`. They caught "lipid for lidocaine toxicity" and "monitor for arrhythmia from lidocaine", and each scored the question zero. The phrases are now `lidocaine antiarrhythmic` and the lidocaine doses 1 mg/kg, 1.5 mg/kg and 100 mg. **Corrected.**
3. **Rabies.** I checked the CIG rabies chapter (last partial update September 2026) and the Ontario Management of Potential Rabies Exposures Guideline (2020).
   - RIG 20 IU/kg is correct (1200 IU at 60 kg).
   - Days 0, 3, 7 and 14 is correct. For immunocompromised patients, add day 28, with serology 7 to 14 days after the last dose.
   - Previously vaccinated patients get days 0 and 3 with no RIG, but only after at least 3 doses, or 2 doses with the second under 3 years ago. After a 2 dose series with the second 3 or more years ago, the CIG gives RIG plus 4 doses. The lacerations-15 stem now says 3 dose, and the explanation explains the difference.
   - The 10 day observation of dogs, cats and ferrets is correct.
   - **Bats.** The current CIG treats any direct skin contact with a live bat as an exposure, because bites may leave no mark. A bat in a room with a sleeping person counts only if there was direct contact. The Ontario 2020 guideline asks for direct contact where a bite, scratch or saliva exposure cannot be ruled out. The lacerations-04 case (a bat on her bare forearm while she slept) meets both, so the keyed full PEP is correct. The NACI 2009 source is replaced with the CIG, and the explanations quote both versions.
   - With no visible wound, the CIG gives the whole RIG dose IM away from the vaccine. The key item used to say "infiltrate into the contact site". It now says give it IM at a distant site, and it also accepts infiltration wordings.
   **Corrected.**
4. **Tetanus.** The CIG (updated June 2026) confirms a booster at 10 or more years for clean minor wounds and at 5 or more years for other wounds, with TIG 250 units IM for other wounds when a person has fewer than 3 doses or an unknown history. The CIG accepts Td or Tdap. Tdap is preferred if the person has had no adult pertussis dose. lacerations-06, 07, 13 and 15 are all consistent with this. **Accurate.**
5. **Antibiotics.** Amoxicillin clavulanate is right for dog, cat and human bites. The penicillin anaphylaxis alternatives (doxycycline, moxifloxacin, or TMP SMX plus metronidazole or clindamycin) match IDSA 2014. Pseudomonas is tested only for a late deep infection after a nail through a shoe, which is correct, and the key does not demand Pseudomonas prophylaxis at the first visit. Prophylaxis for facial dog bites closed primarily fits IDSA. **Accurate.** Key additions: ampicillin sulbactam and the Bactrim and Flagyl brand wordings.
6. **Ketamine.** 1.5 mg/kg x 18 kg = 27 mg. The distractors are 0.5, 3, 4 (the IM dose) and 10 mg/kg. **Accurate.**
7. **Canalicular laceration and farm wound.** Referral to ophthalmology or oculoplastics with stenting is correct. Delayed primary closure at 3 to 5 days plus amoxicillin clavulanate is reasonable for a 20 hour old, manure contaminated shin wound in a patient with diabetes and PVD. **Accurate.**
8. **CTAS.** Targets of 15 minutes for level 2 and 30 minutes for level 3 are correct. Chest pain with cardiac features is level 2. Fever in a patient on chemotherapy is level 2 under the immunocompromised modifier. A GI bleed in shock (multiple-patients-14) is level 1. A laceration needing closure is level 4. **Error:** the explanation said level 3 would need "moderate pain". For peripheral pain, level 3 needs severe acute pain (8 to 10). Moderate pain is level 4. **Corrected.**
9. **START and JumpSTART.** I recounted the red tags in multiple-patients-03: RR 36, breathing only after repositioning, absent radial pulse, and unable to follow commands. That is four, and it matches the key. The deformed thigh and pelvic pain patients are yellow. The apneic patient after repositioning is black. The 6 year old is inside the JumpSTART age range. For an apneic child with a pulse, 5 rescue breaths, then red if breathing starts, is correct. **Accurate.**
10. **Organophosphate and cyanide.** The atropine regimen (1 to 2 mg IV, doubled every 5 minutes until the chest is dry) matches Eddleston 2008. Hydroxocobalamin 5 g IV is correct. Nitrites are **relatively** contraindicated in smoke inhalation, not absolutely. This patient is in shock (BP 84/50) with likely CO exposure. Nitrite induced methemoglobinemia and vasodilation would plausibly harm her, so I kept the dangerous flag. The explanation now says "relatively contraindicated" and names sodium thiosulfate alone as the safer fallback. **Corrected (wording).**
11. **Ontario content.**
    - **Apology Act.** The Apology Act, 2009 (Ontario) is current. An apology is not an admission of liability and is inadmissible as evidence of fault. The explanation now says this exactly. The multiple-patients-12 stem did not say Ontario and now does.
    - **Hamilton raccoon rabies.** A raccoon strain outbreak began in Hamilton in December 2015, with over 300 positive animals. Ontario reported no raccoon strain cases in 2024. The explanation now gives the history and says the area stays under surveillance.
    - Stems now say Ontario in lacerations-14 (HPPA reporting), lacerations-15 (Hamilton, WSIB), multiple-patients-08 and multiple-patients-11 (both key CritiCall and Ornge), and multiple-patients-12 (Apology Act).
    **Corrected.**
12. **Judgment calls.**
    - multiple-patients-01 q1: patient B has GCS 8, RR 6 and SpO2 84%. That is an immediate airway and breathing threat and is quickly reversible. Patient A is a haemodynamically borderline STEMI whose first steps can be delegated. B first follows ABC priority and is defensible. The explanation now says what a nurse does for A meanwhile.
    - multiple-patients-05 q4: the RT with clear call triggers is the only safe option among the distractors (no one, the unit clerk, an untrained ward nurse, or transfer without a physician). This is defensible, and the explanation now says why each distractor fails. In q3, the RT key phrase `"rt with"` gave credit for "RT with the trauma patient", which is the opposite answer. It is fixed.
    Neither question needed converting to short answer.

## Lacerations

| SAMP | Verdict | Changes |
|---|---|---|
| lacerations-01 | Corrected | q1: before, "flex DIP with PIP held", "profundus" and "2 point" scored zero. Added FDP and FDS wordings, "2 point", "2pd", "sensation" and "light touch". |
| lacerations-02 | Corrected | q2: "No primary closure", a correct answer, scored zero. Added negation-inclusive phrases. q4: added "no PEP", "hold PEP" and similar phrases to the withhold item. |
| lacerations-03 | Accurate | None. |
| lacerations-04 | Corrected | Bat explanations updated to the current CIG. The NACI 2009 source is replaced by the CIG. The RIG site item is corrected for no visible wound (it said infiltrate, it now says IM at a distant site). q4: the phrase "hold" gave credit for "hold the vaccine until off steroids", which is a dangerous delay. The reduce item now names prednisone or steroid. "Delay or hold the vaccine" is a new dangerous unacceptable answer. Serology timing and the CIG advice to avoid immunosuppressants are added. |
| lacerations-05 | Accurate | Ketamine dose verified. |
| lacerations-06 | Accurate | Tetanus verified. |
| lacerations-07 | Accurate | None. |
| lacerations-08 | Corrected | q3: the dangerous match bug (point 2). |
| lacerations-09 | Accurate | None. |
| lacerations-10 | Accurate | None. |
| lacerations-11 | Corrected | q2: the explanation missed that she fails the CCHR anyway (age 65 or more), and that the rule applies only after LOC, amnesia or disorientation. Both are added. |
| lacerations-12 | Corrected | q3: added brand name wordings. q4: added ampicillin sulbactam. The "oral antibiotic" unacceptable rejected "IV instead of oral antibiotics". It now needs change or switch wording. |
| lacerations-13 | Accurate | None. |
| lacerations-14 | Corrected | Stem now says Ontario. q3: the phrase "close" gave primary closure credit for "close follow up". It now needs specific closure wording. |
| lacerations-15 | Corrected | Stem: Hamilton, Ontario, and a documented 3 dose PrEP series (point 3). q1: the phrase "local" matched "local wound care". The Hamilton raccoon rabies statement is updated. q2 explanation covers the 2 dose PrEP caveat. |

Sources: the unused NACI 2009, Cochrane bites, Farion and Lalonde definitions are removed. URLs are added for both CIG chapters and the Ontario 2020 guideline. The HPPA citation now names the regulation duty to report animal bites.

Key features: lacerations KF1 7, KF2 7, KF3 8 and KF4 8. All are covered and none is above 8.

## Multiple patients

| SAMP | Verdict | Changes |
|---|---|---|
| multiple-patients-01 | Corrected | q2: nitroglycerin added as an unacceptable answer for the inferior STEMI with borderline BP. The explanation now says why. q1 explanation expanded. |
| multiple-patients-02 | Corrected | q2: CTAS pain explanation (point 8). |
| multiple-patients-03 | Corrected | q2 (START red tags): tests the topic's own triage key feature, so remapped from ems KF4 to multiple-patients KF1. q3 stays ems KF4. q4: "inpatient" in the admitted patient item absorbed "discharge stable inpatients". A later correct "move admitted patients" line then scored zero. Fixed. |
| multiple-patients-04 | Needs physician attention | Accurate. Only q1 tests the topic, and q2 to q4 are CQI handover (cqi KF5). This is acceptable as a secondary topic, but see open questions. |
| multiple-patients-05 | Corrected | q3: remapped from multiple-trauma KF7 to multiple-patients KF3. The question is about delegation between two patients, including keeping the RT with the ventilated patient and calling in help. The RT key phrase is fixed. `multiple-trauma` is removed from alsoTopics because no question tests it now. |
| multiple-patients-06 | Accurate | Atropine verified. |
| multiple-patients-07 | Corrected | q3 (full capacity protocol): remapped from KF3 (leadership and delegation) to KF4 (demand exceeds capacity). |
| multiple-patients-08 | Corrected | Stem says Ontario. q2 (parallel tasks across three patients): remapped from multiple-trauma KF7 to multiple-patients KF2. |
| multiple-patients-09 | Accurate | None. |
| multiple-patients-10 | Corrected | q3: accepted "non rebreather" and "hydroxocobalamin 5 gram" or 70 mg/kg wordings. The nitrite explanation is corrected (point 10). |
| multiple-patients-11 | Corrected | Stem says Ontario. q2: the keyed option said "21 to 30% oxygen", but NRP gives 21% at 35 weeks or more, and this baby is 36 weeks. The option now says 21%. The PPH source is updated from SOGC No. 235 (2009, superseded) to SOGC Guideline No. 431 (2022). |
| multiple-patients-12 | Needs physician attention | Stem says Ontario. q1 (hyperkalemia treatment) was labelled multiple-patients KF2 but tests one patient's arrhythmia treatment. It is relabelled arrhythmia KF6, and `arrhythmia` is added to alsoTopics. q2: the dangerous flag on "avoid mentioning the delay" is removed. It is ethically wrong but does not directly harm the patient, and it stays unacceptable. The Apology Act wording is made exact. As a result, this SAMP no longer tests any multiple-patients key feature. |
| multiple-patients-13 | Corrected | q2 (which of four patients goes to the OR first) is between-patient triage. It is remapped from multiple-trauma KF2 to multiple-patients KF1. q4 (assigning roles in a mass casualty response) is remapped from multiple-trauma KF7 to multiple-patients KF3. |
| multiple-patients-14 | Accurate | None. |
| multiple-patients-15 | Corrected | q2: the bare phrase "start" matched any line containing "start". It now needs "START triage" or similar wording. |

Key features after remapping: multiple-patients KF1 10, KF2 8, KF3 9 and KF4 9 questions. 36 of 58 questions now test the topic's own key features, up from 31. By main SAMP focus, no key feature leads more than 8 SAMPs.

## Sources verified

- CIG, Rabies vaccine (partial update September 2026): https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-18-rabies-vaccine.html
- CIG, Tetanus toxoid (updated June 2026): https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Ontario Management of Potential Rabies Exposures Guideline, 2020: https://files.ontario.ca/moh-guidelines-management-of-potential-rabies-exposures-guideline-en-2020.pdf
- Hamilton rabies status: https://www.hamilton.ca/people-programs/public-health/environmental-health-hazards/animal-insect-related-diseases/rabies
- SOGC Guideline No. 431 (2022), which supersedes No. 235: https://www.jogc.com/article/S1701-2163(22)00668-5/abstract
- The remaining journal citations are real and correctly attributed from known bibliographic records, but I did not fetch them this pass. They are Stevens IDSA 2014, Singer NEJM 1997, Neal ASRA 2018, Green 2011, Konda JBJS 2013, Stiell Lancet 2001, Bullard CJEM 2017, Benson 1996, Romig JEMS 2002, Lerner 2008, Starmer NEJM 2014, the CPSI framework (2012) and disclosure guidelines (2011), Affleck CJEM 2013, Evans SSC 2021 and Eddleston Lancet 2008.

## Open questions for the physician

1. multiple-patients-12 is essentially a CQI SAMP (disclosure, incident analysis, handover) and no longer tests any multiple-patients key feature. Should it move to a CQI batch, or be rewritten so q1 makes the candidate prioritize among competing patients?
2. multiple-patients-04 tests the topic in one question only. Is that acceptable for a handover-at-shift-change case?
3. lacerations-04 q4 accepts "consider reducing immunosuppression" during PEP (CIG: avoid unless essential). Is that sensible for a Crohn flare on prednisone 40 mg, or should the item be removed?
4. lacerations-11 q2 keys CT for any anticoagulated older adult with a head strike. That is standard Canadian practice, but NICE 2023 moved to a softer "consider CT" for anticoagulated patients without other risk factors. Please confirm the key.
5. multiple-patients-10 q3 keeps nitrites as dangerous (relative contraindication in a shocked patient with CO). Please confirm the flag.
