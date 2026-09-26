# Independent review of signed-duplicate rebuild group g11

Files: `src/samps/s10/eye.ts`, `src/samps/s10/first-trimester-bleeding.ts`, `src/samps/s13/lacerations.ts`, `src/samps/s13/multiple-patients.ts`.

## Summary

| SAMP | Verdict | Reason |
|---|---|---|
| eye-07 | FIXED | One explanation claim did not match its source. The arteritis symptom list is not a repeated keyed decision. |
| first-trimester-bleeding-02 | PASS | New story and new keys. q3 is a D1 repeat. |
| first-trimester-bleeding-15 | FAIL | q1, q3 and q4 each repeat a signed key for the same reason. The warfarin twist lives only in optional accept items. |
| lacerations-03 | PASS | New story. q4 is a D1 repeat. |
| lacerations-04 | FIXED | Wrong vaccine volume, an unsourced serology claim and a missing accept item. q3 is a D1 repeat. |
| lacerations-05 | FIXED | q4 was a near copy of analgesia-sedation-31 q2. It was replaced. |
| lacerations-08 | FIXED | q3 repeated the keeper's LAST treatment key, and its dangerous match would have zeroed correct answers. It was reworked. q4 is a D1 repeat. |
| multiple-patients-06 | FIXED | q2 repeated ems-15 q1. It was reworked. q4 is a D1 repeat. |
| multiple-patients-15 | FAIL | q2 repeats the cluster keeper's triage key and other SALT keys. q3 converges with the rebuilt ems-12. |

## Structure

- All nine keep their id, topic, question count, kinds and key features in order.
- Each is version 2, and `reviewed: false` comes after `...META`.
- All nine are in `src/samps/held-back/g11.json`.
- The other 51 SAMPs in these four files are byte-identical to HEAD when compiled.
- The diff touches only these ids and source constants.
- Reviewer fix: the old `asra` constant in lacerations.ts was left unused but shared the id `asra-last` with the new `asraLast` constant. It was removed.

## Per question

### eye-07
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | GCA symptoms are 1 of 10 accepted items. Eye KF 2 names temporal arteritis literally. |
| q2 | PASS | The decision is to withhold steroids in NAION, which is keyed nowhere. The normal ESR and CRP echo an accepted item in eye-08 q2 (listed under D1 repeats). The symptoms appear as negatives, not as the list keyed in headache-08 q1 or eye-08 q3. |
| q3 | FIXED | The explanation said a trial showed that steroids sped the resolution of disc swelling. EyeWiki (updated August 2026) reports no difference in final acuity. The sentence now says only that. |
| q4 | PASS | EMA PRAC, 6 June 2025: about a twofold risk in type 2 diabetes. It says to stop semaglutide if NAION is confirmed. |

Simcheck: headache-08 0.37, eye-08 0.35, eye-20 0.25. The score comes from GCA vocabulary. It does not come from shared keys.

### first-trimester-bleeding-02
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | The keyed decision is relative tachycardia against her own baseline. Orthostatic rise is 1 of 6 items (compare ftb-29 q1). The arithmetic checks: 128 - 96 = 32, and 104 - 78 = 26. |
| q2 | PASS | Serum hCG after a falsely negative urine test in dilute urine is keyed nowhere. |
| q3 | PASS (D1) | Gynecology, group and screen, IV access, CBC, NPO and monitoring match ftb-13 q2. |
| q4 | PASS | Low hCG does not exclude an ectopic. Only the old ftb-02 keyed this, and that text is gone. |

### first-trimester-bleeding-15
| Q | Verdict | Notes |
|---|---|---|
| q1 | FAIL | The stem and key closely match ftb-29 (5 hours of heavy bleeding with clots, pad count, pale, orthostatic pulse rise keyed in q1). |
| q2 | PASS | Bedside ultrasound to locate the pregnancy. |
| q3 | FAIL | Same findings and decision as ftb-10 q3: heavy bleeding, no prior scan, empty uterus, no adnexal mass, no free fluid, so manage as PUL, not complete miscarriage. The valve and warfarin items are optional (3 of 8 required), so a candidate passes on the ftb-10 answer. |
| q4 | FAIL | 300 mcg within 72 hours after 12 weeks is keyed in ftb-31, 37 and 38 and elsewhere. The dose and timing are correct: SOGC 448 suggests 300 mcg IM or IV within 72 hours from 12 weeks for threatened or spontaneous loss or ectopic. I could not open the full text (JOGC 403, PubMed abstract only). This matches every other bank SAMP citing Guideline 448, and SOGC 460 (no routine RhIG under 12 weeks). The key is right, but it is a repeat. |

Three repeats is more than D1 allows. The SAMP needs a new decision set. Not patched.

### lacerations-03
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Hold and shake crush mechanism. |
| q2 | PASS | Near msk-08 q3 (a puncture over a fracture means an open fracture). But 2 of 3 required items, and gas or a tooth track is needed to reach 2, so the bite-specific finding is required. |
| q3 | PASS | Near msk-09 q4 (IV bite flora cover). The keyed reason differs: cefazolin, the usual open fracture drug, misses Pasteurella. IDSA 2014 supports each distractor reason. |
| q4 | PASS (D1) | Same-day orthopedics for washout of an open fracture repeats msk-08 q4 and msk-09 q3 (msk KF 7 literal). |

### lacerations-04
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | CDC Yellow Book: at least 20 minutes of soap and running water, and monkey bites evaluated for B virus. |
| q2 | PASS | The CDC B virus page confirms valacyclovir 1 g PO every 8 hours for 14 days, with IV ganciclovir for CNS disease. Keyed nowhere. |
| q3 | FIXED (D1) | (a) The update said Vero cell vaccine 1 mL IM. Verorab is 0.5 mL IM, so it now reads "one full 0.5 mL IM dose". (b) The explanation claimed that a non-standard vaccine or an intradermal regimen calls for serology. The CIG does not say this. It now says what the CIG says: consult public health about exposures abroad, and check serology after a substantial deviation from the schedule. (c) Added an accept item, "Consult public health about the series started abroad". CIG check: "RabIg should be administered up to and including day 7 after starting the rabies vaccine" (last partial update September 2026), so day 3 qualifies. 20 IU/kg x 64 kg = 1280 IU. The schedule of days 0, 3, 7 and 14 is correct. Against infectious-diseases-38: that SAMP keys RIG plus vaccine, 20 IU/kg and days 0, 3, 7, 14 for an unvaccinated traveller, and its q1 explanation teaches that the 7-day limit counts from the first vaccine dose. The new element here (RIG still due after a series started abroad without it, and do not restart) is one required-count item plus an unacceptable answer. |
| q4 | PASS | IDSA: preemptive antibiotics for preexisting edema of the bitten area. Lymphedema is keyed nowhere. |

### lacerations-05
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Parotid duct and facial nerve. Keyed only as one item in lacerations-14 q3. |
| q2 | FIXED | The CPS lists LET first for laceration repair, but as contraindicated in large, deep or contaminated wounds. Added to the explanation that fat is visible in her wound, so leaving LET out of the key is defensible. |
| q3 | FIXED | The update no longer says "50%", because q4 now asks for it. Borderline with analgesia-sedation-46 q1 (pneumothorax as a nitrous contraindication), but the keyed items differ. Checked against the AAPD text: URI, otitis, ENT surgery within 14 days, retinal surgery, COPD, B12, and avoiding use after head injury until cleared. |
| q4 | FIXED | Old q4 had the same prompt, key (buffer with bicarbonate) and distractors as signed analgesia-sedation-31 q2. It also re-keyed q2's buffering item. The new single keys premixed 50% nitrous oxide in oxygen over 100%, 70%, or nitrous plus intranasal fentanyl or midazolam. Sources: CPS (premixed 50:50) and AAPD (above 50%, or added opioids or benzodiazepines, raise the chance of deeper sedation). Key at position 2. Batch gates pass. |
| q5 | PASS | AAPD: 100% oxygen for at least 5 minutes after stopping. Nausea is the most common adverse effect. |

### lacerations-08
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | LET only in the laceration. The CPS lists open wounds as a contraindication for EMLA, Maxilene and Ametop. |
| q2 | PASS | Broad list. IN fentanyl is one item. |
| q3 | FIXED | (a) The old accept list (benzodiazepine, airway, lipid 1.5 mL/kg) was the keeper analgesia-sedation-04's LAST treatment key. The update now gives midazolam and has lipid being drawn up. The prompt asks "What else", so the key is removing the film and gel, stopping all local anaesthetic, airway and oxygen, IV or IO access, monitoring, help, and 2 hours of observation. (b) The dangerous answer matched "lidocaine for" and "iv lidocaine". A correct line such as "IV lipid for lidocaine toxicity" would have zeroed the question. It now matches "antiarrhythmic lidocaine", "more lidocaine", "more let" and "reapply let". Negation protects the correct "no more lidocaine". Lipid 1.5 mL/kg x 15 kg = 22.5 mL, per the ASRA 2020 checklist. |
| q4 | PASS (D1) | Irrigate, explore and image repeats lacerations-02 q2 (lacerations KF 3 literal). Traumatic tattoo is new. The q4 update was reworded to match the new q3. |

### multiple-patients-06
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | OPC May 2025: methylene blue 400 mg to treat one 100 kg patient for 8 hours, 200 mg immediately available and 200 mg within 60 minutes (verified in the PDF). |
| q2 | FIXED | The old key (do not trust the oximeter, triage by mental status, oxygen, collapsed first, distribute) was the same direction ems-15 q1 keys for its multi-casualty carbon monoxide event, for the same reason. The update now states that crews already know this. The prompt asks what else: collapsed first, bring the powder, secure the soup, find everyone who ate it, distribute, glucose and seizures, monitoring and IV. MMWR 2002 figures verified: SpO2 72% to 96%, MetHb 21.1% to 87.0%. |
| q3 | PASS | Who gets the only dose. EHA 2021: treat symptomatic patients at 10% to 30%, give 1 to 2 mg/kg, test for G6PD. Keyed nowhere. |
| q4 | PASS (D1) | Clinical priority features. Multiple patients KF 1 literal. Echoes the prioritization in ems-15 q2. |

### multiple-patients-15
| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS (D1) | The pre-arrival question list repeats old signed ems-12 q1 (ems KF 1 literal). |
| q2 | FAIL | "Open the airway, give rescue breaths to a child, and anyone still not breathing is dead without CPR" is the same decision as the cluster keeper multiple-patients-03 q3. It keys 5 rescue breaths for an apneic child with a pulse, and its explanation says the child is black if breathing does not start. The reason is the same: triage over individual resuscitation in a mass casualty event. The "immediate" item repeats multiple-patients-20 q2 word for word (SALT: no peripheral pulse, not obeying commands, respiratory distress). The "spread" item repeats multiple-patients-28 q3 and ems-12 q5. Every accepted item in q2 is a signed key. |
| q3 | FAIL | It converges with the other writer's rebuilt ems-12, which is held back. Both have an EMS superintendent calling a community hospital about about 60 teenagers. Both key a family and reunification centre, security lockdown, casualty tracking and pediatric staff (ems-12 q4). Code Orange, staff and surge discharges are also the keeper multiple-patients-03 q1 and q4. |

It needs a new decision set, and whoever rebuilds it must coordinate with ems-12. Not patched.

## D1 repeats

Each is a new SAMP repeating one decision already keyed in a signed-off SAMP, where the decision is the literal wording of a key feature.

| New SAMP | Repeated decision | Signed-off SAMP it echoes |
|---|---|---|
| eye-07 q2 | Normal ESR and CRP to set aside giant cell arteritis in older visual loss (headache KF 4, eye KF 2) | eye-08 q2 (accepted item), headache-08 q1 (inverse) |
| first-trimester-bleeding-02 q3 | Stable suspected ectopic: gynecology, group and screen, IV, CBC, NPO, serial vitals (FTB KF 2) | first-trimester-bleeding-13 q2 |
| lacerations-03 q4 | Urgent orthopedics for washout of an open fracture (msk KF 7) | msk-08 q4, msk-09 q3 |
| lacerations-04 q3 | Rabies immune globulin 20 IU/kg infiltrated, plus vaccine on days 0, 3, 7, 14 (ID KF 10) | infectious-diseases-09 q2, infectious-diseases-38 q2 and q3 |
| lacerations-08 q4 | Irrigate, explore and image before closure (lacerations KF 3) | lacerations-02 q2 |
| multiple-patients-06 q4 | Prioritize by mental status and ABC rather than oximetry (multiple patients KF 1) | ems-15 q2 |
| multiple-patients-15 q1 | Focused EMS pre-arrival report (ems KF 1) | ems-12 q1 (signed version, now rebuilt) |

The FAIL SAMPs repeat more than one decision, so they are not covered by D1:
- first-trimester-bleeding-15: q1 matches ftb-29 q1, q3 matches ftb-10 q3, and q4 matches ftb-31, 37 and 38.
- multiple-patients-15: q2 matches multiple-patients-03 q3, multiple-patients-20 q2 and multiple-patients-28 q3.

## Checks run

- `SAMP_BATCH=s10 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 482 passed.
- `SAMP_BATCH=s13 ...`: 464 passed.
- `npx tsc --noEmit -p .`: clean.
- `simcheck.py` was run on all nine. Top hits are above and in the writer's report. Every hit was read against allkeys.tsv and the current src/samps.
- House style: no em or en dashes and no semicolons in any prose of the nine SAMPs.

## For the physician

- **first-trimester-bleeding-15 and multiple-patients-15 need another rebuild.** Their stories are new, but most of their keyed decisions are already signed elsewhere.
  - ftb-15 is PUL after an empty-uterus bleed, orthostatic signs, and 300 mcg RhIG after 12 weeks. The warfarin and mechanical valve content is optional credit.
  - mp-15's field triage question is the SALT or JumpSTART apneic patient decision from multiple-patients-03 and 20.
  - mp-15's hospital preparation question now overlaps the new ems-12 (high school bear spray, 60 teenagers).
- **lacerations-04:** the key counts one full IM dose of Vero cell vaccine given abroad as day 0 and continues the Canadian schedule. The CIG says to resume a delayed schedule and to consult public health for PEP started overseas, and the key accepts that. Please confirm you are comfortable continuing rather than restarting after a non-Canadian vaccine.
- **lacerations-05 q4 is new.** It keys premixed 50% nitrous oxide over higher concentrations, or nitrous oxide combined with intranasal fentanyl or midazolam. It rests on the AAPD statement (a dental source) and the CPS statement. Some pediatric EDs combine intranasal fentanyl with nitrous oxide under sedation monitoring. If that is your practice, the key needs rewording.
- **lacerations-08 q3 changed.** The seizure is now already treated with midazolam and lipid is being prepared. The keyed decisions are removing the occluded gel, stopping all local anaesthetic, access, monitoring and observation. This keeps the question off the lipid regimen keyed in analgesia-sedation-04.
- **multiple-patients-06 q2 changed.** The question now asks for scene actions other than oxygen and clinical triage, which ems-15 already keys.
- **eye-07:** the steroid trial sentence now says only that final acuity did not differ.

## Landing decision

eye-07 and first-trimester-bleeding-02 land.
- lacerations-03 and lacerations-04 fail. Each one's D1 repeat echoes the keeper of its own cluster: msk-09 for cluster 68, infectious-diseases-09 for cluster 66. A rebuild must not retell its keeper.
- first-trimester-bleeding-15 and multiple-patients-15 fail as the review says.
- lacerations-05, lacerations-08 and multiple-patients-06 carry whole questions rewritten by this reviewer. Those rewrites have had no independent review, so they wait for a second look before they land.

Until then all seven keep their signed text on the branch. The surviving D1 repeats, eye-07 q2 and first-trimester-bleeding-02 q3, are in the table in docs/DECISIONS.md.
