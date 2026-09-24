# Review of pass 2 mixed agent work (s43 lacerations, s37 eye, s47 pre-eclampsia)

Lens: A (clinical truth) and B (internal consistency and numbers), both applied. This is an AI audit. Every SAMP stays reviewed: false.

Scope: the writer's uncommitted changes in src/samps/s43/lacerations.ts, src/samps/s37/eye.ts and src/samps/s47/pre-eclampsia.ts, and the writer's report docs/reviews/samps-pass2-mixed.md.

## Verdict per SAMP

| SAMP | Verdict | Note |
|---|---|---|
| lacerations-36 (rebuild, central slip) | Fixed | Elson test sign misdescribed, and the update contradicted it (see fixes). Key and case otherwise sound. No copy of a signed-off SAMP. Central slip is new to the bank |
| eye-23 (rebuild, traumatic optic neuropathy) | Pass, with a low overlap note | Keys correct and sourced. q1 (swinging flashlight test) sits close to eye-20 q2 (RAPD localizes to the optic nerve). The decision here is ordering before dilation after trauma, so kept |
| pre-eclampsia-23 (rebuild, PPH with HELLP) | Fixed (wording) | Ergonovine key confirmed against the Canadian product monograph. Prompt reworded |
| lacerations-23 | Fixed | Explanation overstated the CDC page |
| lacerations-31 q4 | Fixed | The new key repeated lacerations-33 q3 in the same file |
| eye-25 | Fixed | Wrong pronoun in q3 and an MRI metal claim with no metal in the case |
| eye-35 q1 | Pass | Consensual photophobia is only one write-in item in s10 eye-06, so no keyed overlap |
| eye-37 q2 | Fixed (minor) | Removed a confusing sentence about the nurse |
| pre-eclampsia-31 q1 | Pass | |
| pre-eclampsia-34 q2 | Fixed | Wrong severe hypertension threshold in the explanation, and strawman distractors |
| pre-eclampsia-37 q1, q3 | Pass, with a low note | See q3 note below |
| lacerations-20 (re-sourced) | Fixed (wording) | Condyle claim realigned to Bottini 2024 |
| pre-eclampsia-33 q3 (not rewritten, same file) | Fixed (minor) | "above 160" changed to "160 mmHg or more" |

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| lacerations-36 | q1 | explanation | Said weak PIP extension with a rigid DIP means the slip "is ruptured". Elson 1986 describes absent PIP extension force with fixed DIP extension as the sign of complete rupture. Now says so, and adds that a partial cut may show only weakness or pain, so the wound is also explored | High |
| lacerations-36 | q2 | update, explanation | The update said "The Elson test is positive" and then "partly cut". A positive Elson test means complete rupture, which contradicts a partial cut and would push toward repair, not a splint. The update now gives painful but present PIP extension and a cut through about 30% of the width. The explanation ties the splint to a cut well under half, in line with Griffin 2012 (repair above 50%) | High |
| lacerations-31 | q4 | prompt, options, explanation | The writer's new key (booster alone for a dirty wound 5 to 10 years after the last dose) repeated lacerations-33 q3 (Td alone, same rule) in the same file, so the overlap moved rather than went away. q4 now asks which vaccine product: Tdap (key), DTaP-IPV, Td, tetanus toxoid alone, no vaccine. The CIG says children 7 and older get Tdap or Tdap-IPV, DTaP-IPV is authorized only under 7, and tetanus toxoid is available only in combination vaccines. It pairs with lacerations-17 (under 7 gets DTaP-IPV) and lacerations-33 (adult with prior Tdap gets Td). It does not repeat them | Medium |
| lacerations-23 | q1 | explanation | "Heavy alcohol use, asplenia and immune compromise account for most serious cases" and "lives in the mouths of healthy dogs" are not on the cited CDC page. The CDC says about 60% of infections occur in people with these conditions. Reworded to match | Medium |
| lacerations-20 | q1 | explanation | "A site that is often fractured in young children" read as saying condylar fractures are common in a 3-year-old. Bottini 2024 says the condyle is often involved in pediatric mandibular fractures, and that fractures under 5 years are uncommon and mostly follow falls. Reworded | Low |
| eye-25 | q3 | prompt | "her emergency department management". The patient is now a 72-year-old man | High |
| eye-25 | q3 | explanation | "MRI ... is unsafe with metal". The case is a wine cork with no metal. Now says MRI is slower than CT | Medium |
| eye-37 | q2 | explanation | Removed "The nurse's suggestion was a reasonable drug, but not a diagnosis", which reads as a cross-reference and adds nothing | Low |
| pre-eclampsia-34 | q2 | explanation | "Two readings of 170/110 mmHg or more confirm severe hypertension" gives the wrong threshold. It is 160 systolic or 110 diastolic. Now states that and shows her readings (172/112, 170/110) meet it | High |
| pre-eclampsia-34 | q2 | options | 240 and 360 minutes were strawmen. Options are now 15, 60, 90, 120 and 240 minutes, still sorted from low to high | Low |
| pre-eclampsia-23 | q1 | prompt | "for her bleeding carries the greatest risk for her" was clumsy. Now "for her postpartum hemorrhage carries the greatest risk in her case". It is a harm question in positive form, as used elsewhere in the bank (eye-37 q3, s22, s32). It is not a NOT lead-in | Low |
| pre-eclampsia-33 | q3 | explanation | "Two systolic readings above 160 mmHg" changed to "of 160 mmHg or more" to match the threshold exactly | Low |

## Key changes

None. Every key the writer set was kept. In lacerations-31 q4 the keyed option is still Tdap (position 3). The question now tests product choice rather than the booster rule.

## Checks on the priority items

### pre-eclampsia-23 (ergonovine)
- Canadian source: I opened the Health Canada Drug Product Database monograph for Ergonovine Maleate Injection USP 0.25 mg/mL (Teligent Canada, revised 2021, https://pdf.hres.ca/dpd_pm/00061054.PDF). It lists hypertension and toxemia as contraindications, and it gives the immediate postpartum dose as 0.2 mg IM. So the option "ergonovine 0.2 mg IM" matches the Canadian label, even though the vial is 0.25 mg/mL. SOGC 431 (2022) gives 0.25 mg IM, with hypertension as a caution. The full text returned 403, and this comes from the search summary only. The key holds under both.
- FIGO 2022 (PMC9313855) confirmed: ergometrine 200 mcg only if hypertensive disorders can be safely excluded, sublingual misoprostol 800 mcg, and tranexamic acid 1 g IV as soon as PPH is diagnosed but within 3 hours of birth.
- Carboprost: the "no asthma" reason is standard, but it is not in FIGO (the writer flagged this). The US label lists hypertension as a caution for carboprost. That is weaker than ergonovine's outright contraindication, so the key stands.
- Carbetocin: the Canadian Duratocin monograph (search summary) advises monitoring in pre-eclampsia and does not list it as a contraindication. Consistent with the key.
- The q2 12 hour interval and the 40% a day platelet fall are confirmed as ACOG PB 222 wording in secondary summaries. 78 x 0.6 = 46.8, correct.
- Overlap: a precipitous ED birth with atonic PPH also appears in s13 multiple-patients (signed off, write-in on PPH steps) and s50 shock (oxytocin first line, TXA timing). Neither keys "avoid ergonovine in hypertension". Distinct enough.

### pre-eclampsia-34 q2 (60 minutes)
ACOG Committee Opinion 767 (2019) says to treat as soon as reasonably possible, within 30 to 60 minutes of confirmed severe hypertension. The key of 60 minutes is the upper limit of that window. I could not open SOGC 426 to see whether it gives a minute target. The key holds under ACOG.

### lacerations-31 q4 (Tdap)
Canadian Immunization Guide, tetanus toxoid page (updated June 2026). Table 1: 3 or more doses, 5 to 10 years since the last dose, a wound that is not clean and minor, gives vaccine yes and TIg no. Children 7 and older get Tdap or Tdap-IPV. Tetanus toxoid is available only in combination vaccines. A 10-year-old whose last dose was at age 4 (6 years ago): Tdap. Correct.

### lacerations-36, eye-23
- Elson RA, J Bone Joint Surg Br 1986 (PMID 3958008) was checked on its abstract. Griffin M et al, Open Orthop J 2012 was checked on the full text: 4 to 6 weeks of PIP extension with the DIP and wrist free, repair above 50%, and extension tested against resistance.
- Cochrane, Yu-Wai-Man and Griffiths 2013, steroids (CD006032.pub4): no convincing evidence of benefit over observation, and a possible harmful effect. Surgery (CD005024.pub3) was confirmed as a real review. Zhou 2022 (Dovepress full text): absence of an APD is among the strongest predictors of good acuity. The dilated fundus examination comes after the APD check.
- Overlap search (optic neuropathy, swinging flashlight, afferent pupillary, central slip, boutonniere, Elson) found no signed-off SAMP keyed on these decisions.

## Re-sourcing sample (10 checked, more than the 8 asked)

| SAMP | Source | Supports claim? |
|---|---|---|
| lacerations-30 q2 | Lemmon 2008 | Yes, under 1.5 square cm without exposed bone heals by secondary intention (search summary of the full text) |
| lacerations-33 q2 | Smith 2026, J Hand Surg Am | Yes, 80% to 85% survival distal to the FDS insertion (abstract) |
| lacerations-34 q3 | NEON, Br J Surg 2025 | Yes, repair versus alignment (abstract) |
| lacerations-35 q1 to q3 | Pengas 2016 | Yes, patella fractures 6 times more frequent, early surgery, loss of active extension missed in the ED (abstract) |
| lacerations-38 q1 | Micieli 2014 | Yes, high stick 28%, OR 4.23 without a visor (abstract) |
| lacerations-20 q1, q2 | Bottini 2024 | Partly. Panoramic films are inadequate and the sequelae were confirmed. The q1 wording was fixed (see above) |
| eye-34 q1 | NHS GGC 2015 | Partly. It supports warm water, no forcible opening and 1 to 4 days. It does not mention lash trimming or solvents. The next review date (October 2025) has passed |
| eye-36 q2 | Zhou 2022 | Yes, dense 360 degree subconjunctival hemorrhage suggests an occult open globe |
| pre-eclampsia-18 q1 | Ramoska 1989 | Yes, at least a 10% chance of pregnancy despite the history (abstract) |
| pre-eclampsia-22 q1, q2, q4 | Oyelese 2006 | Yes, a clinical diagnosis, ultrasound of limited value, DIC managed aggressively (abstract) |

## Sources verified
- CIG tetanus toxoid: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Ergonovine monograph, Canada: https://pdf.hres.ca/dpd_pm/00061054.PDF
- FIGO PPH 2022: https://pmc.ncbi.nlm.nih.gov/articles/PMC9313855/
- ACOG CO 767 summary: https://pubmed.ncbi.nlm.nih.gov/30681541/
- CDC Capnocytophaga: https://www.cdc.gov/capnocytophaga/hcp/clinical-overview/index.html
- Griffin 2012: https://openorthopaedicsjournal.com/VOLUME/6/PAGE/36/
- Zhou 2022: https://doi.org/10.2147/OPTH.S372011
- Bottini 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11594661/
- NHS GGC tissue adhesives: https://www.clinicalguidelines.scot.nhs.uk/ggc-paediatric-guidelines/ggc-paediatric-guidelines/emergency-medicine/tissue-adhesives-management-of-accidental-injury/
- PubMed abstracts for PMIDs 3958008, 2462800, 24862769, 41854583, 17012465, 27423309, 39598065 and 40905509

## Needs physician decision
- pre-eclampsia-23 q1: the ergonovine dose in the option is 0.2 mg IM (the Canadian label and FIGO). SOGC 431 uses 0.25 mg. Either way the key holds. Confirm which dose you want shown.
- pre-eclampsia-37 q3: "Bed rest and a fluid bolus" is also a way of giving no tocolytic drug, so it sits close to the key "No tocolytic medication". The explanation rejects it on its own merits. Consider a cleaner distractor if you see ambiguity. Low confidence.
- eye-25: after the setup rewrite, q1 to q3 still teach the same open globe steps as signed-off s10 eye-13 (shield, no tonometry, antiemetic, IV antibiotics, tetanus). That is two SAMPs, which the "best two" rule allows, but it is a close pair.
- eye-23 q1 and eye-20 q2 both key the afferent pupil defect for optic nerve disease. The contexts differ (trauma, before dilation, versus optic neuritis localization). Kept.
- eye-34 q1: the GGC guideline is past its review date and does not cover lash trimming or solvents.
- The writer's own list for the physician still applies (NEON in a 2-year-old, TON steroid practice variation, lacerations-16 crossed fingers test, and others).

## Deferred
None. Every fix was in my three files.

## Summary
13 fixes in 11 SAMPs. The 3 high confidence ones are clinical or factual errors: lacerations-36 (the Elson sign contradicted the partial cut and splint plan), eye-25 (wrong patient sex in the prompt) and pre-eclampsia-34 (wrong severe hypertension threshold). 1 overlap was newly created by the writer and is now removed: lacerations-31 q4 against lacerations-33 q3. No keys changed. No signed-off SAMP was edited.

SAMP ids edited in this review: lacerations-20, lacerations-23, lacerations-31, lacerations-36, eye-25, eye-37, pre-eclampsia-23, pre-eclampsia-33, pre-eclampsia-34.

## Checks
- SAMP_BATCH=s37: 496 passed. s43: 464 passed. s47: 476 passed (tests/samps.test.ts and tests/samp-quality.test.ts).
- npx tsc --noEmit -p .: exit 0, with no errors in these files.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4503 passed.

## Second check

An independent second look at the three substantive changes above. Lens A and B. No SAMP text was changed in this check. Every SAMP stays reviewed: false.

| SAMP | Verdict | Finding |
|---|---|---|
| lacerations-36 q1 | Pass | The Elson 1986 description is right. The PIP joint is bent to 90 degrees over a table edge and extended against resistance. No extension force at the PIP joint with a rigid DIP joint means complete rupture. The added line that a partial cut may show only weakness or pain is sound, and it explains why the wound is also explored |
| lacerations-36 q2 | Pass, with a source note | Stem, update and key agree. Full extension at rest, then painful but present PIP extension, then a cut through about 30% with an intact capsule, then a PIP extension splint with the DIP free. The first review's note "Griffin 2012 (repair above 50%)" needs a correction. Griffin states the 50% repair threshold in the zone II section, not zone III. For zone III, Griffin says open injuries may not need repair if splinting is used, and gives 4 to 6 weeks of PIP extension splinting with the DIP and wrist free for closed injuries. The explanation says only "well under half", which these statements together support. No change |
| lacerations-31 q4 | Pass | The CIG tetanus page says children 7 years of age and older should receive the adolescent and adult formulation with pertussis, Tdap or Tdap-IPV. It also says tetanus toxoid is only available in combination vaccines. Td would protect against tetanus, so it is the strongest distractor, but it is not the single best answer under the CIG, and the explanation rejects it for that true reason. Tdap-IPV, which would be a second correct answer, is not an option. The stem gives what is needed to see that a booster is due: a soiled wound, a completed childhood series and a last dose 6 years ago. Working that out is part of the question, and "No vaccine" tests it. No change |
| pre-eclampsia-34 q2 | Pass | ACOG CO 767 (2019): treat as soon as reasonably possible, within 30 to 60 minutes of confirmed severe hypertension, at 160 systolic or 110 diastolic. In ACOG, 15 minutes is how long a severe reading must persist to count as an emergency. It is not the treatment target. The prompt asks for the longest acceptable delay from confirmation, so 60 minutes is the only answer. 15 minutes is inside the window and not the limit, as the explanation says. No other SAMP in the bank keys a treatment time in minutes for severe hypertension |

### For the physician
- lacerations-36 q2: the 50% repair threshold is general hand surgery teaching. Griffin 2012 states it for zone II. The 4 to 6 week splint length is Griffin's figure for closed zone III injuries, applied here to a partial open cut.
- lacerations-31 q4: some clinicians would accept Td for tetanus alone in a 10-year-old. The key rests on the CIG product advice for age 7 and older.
- pre-eclampsia-34: the bradycardic runner setup now matters only in the last sentence of the q2 explanation. This came from the overlap fix against pre-eclampsia-14 q1. It is acceptable, but the stem detail is now largely decorative.

### Sources checked
- CIG tetanus toxoid (fetched September 2026): https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Griffin M et al. Open Orthop J. 2012 (full text): https://openorthopaedicsjournal.com/VOLUME/6/PAGE/36/
- ACOG Committee Opinion 767, 2019: https://pubmed.ncbi.nlm.nih.gov/30681541/
- Elson RA. J Bone Joint Surg Br. 1986 (PMID 3958008). PubMed would not load in this check. The description matches the widely quoted abstract.
