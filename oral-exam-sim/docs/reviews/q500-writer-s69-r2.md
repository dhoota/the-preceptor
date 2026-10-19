# Q500 writer revision round 2: s69, Burns

Writer revision of `src/samps/s69/burns.ts` against the fresh verify report `docs/reviews/q500-verify-s69.md`. burns-39 and burns-43 passed and were not changed. All items stay `reviewed: false`, `version: 1`, author "Preceptor". Ids are unchanged. This revision needs a fresh independent review.

Checks run: the type check shows no s69 errors, and `SAMP_BATCH=s69 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passes (128 of 128).

Every new decision was checked against all burns, anaphylaxis and analgesia-sedation SAMPs (bank dump and the coordinator's catalogue) and against the oral cases house-fire-burns, work-trailer-heater-burns and the other burn, CO and analgesia cases.

## Required fixes and how each was done

### burns-40

| Fix | What was done |
|---|---|
| Stem: exposure in a puddle did not fit hands and forearms only | Mechanism changed. She was leaning over the tub, splashing both arms up to the elbows in a puddle of the product, and her clothes and other skin stayed dry. The 10% TBSA (hands 2.5% each, forearms 3% each by Lund and Browder, about 11%) and every later number still agree. The stem now opens "You are working in a community hospital emergency department", says the paediatric ward has no cardiac monitoring and the paediatric burn centre is 2 hours away, and adds two facts the new q1 needs (she often sucks her fingers, her face and eyes look normal). 149 words. |
| q1 repeated burns-39 q1 and burns-03 q1 (name the fluoride source) | Replaced. An update now names dilute hydrofluoric acid from the label. New q1 (KF1): which additional route of exposure matters most. Key "Product swallowed from her fingers". Distractors: eyes, vapour, legs and feet, clothing, each excluded by a stem fact. The unsupported phrase "a girl who was settled after a brief wash" is gone. No bank item keys an ingestion route after a skin exposure. |
| q4 repeated burns-12 q3 (monitored bed, near copy of the 4 hour observation distractor) | Replaced with a transfer decision that follows the new setting. Key "Paediatric burn centre transfer". Distractors: local paediatric ward (no monitoring, from the stem), discharge with gel, discharge with clinic review, plastic surgery clinic. The 4 hour observation distractor is gone. Source changed to ABA 2025, which lists "All chemical injuries" in the immediate consultation with consideration for transfer column and says "All pediatric burns may benefit from burn center referral" (page text reread). KF5 stays covered. |

Kept as the reviewer allowed: q2 (ECG and ionized calcium) and q3 (2.5% gel). The q4 update still reveals the q2 key in mock mode, as the reviewer accepted.

### burns-41

| Fix | What was done |
|---|---|
| Stem and title retold burns-02 (garage gasoline fire) | Setting moved to a closed boathouse at his cottage, where he was refuelling a running gasoline generator. The ice fishing shack the reviewer suggested was not used, because burns-11 is a propane explosion in an ice fishing hut. Title now "Flash fire in the boathouse". q1 explanation reworded to "A gasoline generator running in a closed boathouse". |
| q3 repeated analgesia-sedation-10 q2 (continue buprenorphine, same distractors) | Removed. The disposition question moved up to q3 (text unchanged except that its update now carries the hydromorphone response, and the unsupported phrase "need formal fluid resuscitation" for an 18% adult burn was removed). New q4 (KF3): how to give his opioid over the next several hours. Key "Hydromorphone PCA, bolus doses only". Distractors: PCA with a basal infusion, hydromorphone IM, fentanyl patch, oral oxycodone as needed. Source Anderson 2017, which recommends "patient-controlled analgesia when systemic analgesics are necessary" and advises avoiding basal opioid infusions. The q4 update says his usual dose continues, as a fact, not as the decision. The receptor point (q2) is not repeated. PCA appears in the bank only as one accept item in a sickle cell write-in list. |

Kohan 2021 is no longer cited, so it was removed from the sources.

### burns-42 (rebuilt)

New scenario: "Flown in from a nursing station". A 38-year-old woman threw water onto a pan of burning cooking oil in a remote fly-in community. She arrives at 19:10 at a regional hospital without a burn unit. Her daughter called the nursing station at 13:05, about 15 minutes after the fire. Ringer's lactate has run at 500 mL/hour since 14:10. She has 24% TBSA deep partial burns of the anterior trunk and both arms, no facial or airway signs, a rectal temperature of 36.0°C and weighs 70 kg. It shares no setting, patient, mechanism or question with house-fire-burns, burns-07, burns-13 or any other burns item.

| Old required fix | How the rebuild meets it |
|---|---|
| Stem retold house-fire-burns | New setting (medevac from a nursing station), patient (woman, no inhalation injury) and mechanism (grease fireball). |
| q1 hedged, negative key | The question is gone. |
| q2 rising airway pressure frame (burns-07, oral case) | The question is gone. Casts are not tested. |
| q3 update cue, and KF4 not timed from injury | New q1 and q2 are KF4 items timed from the injury. |
| q4 transfer sedation repeated the oral case | The question is gone. KF3 is now covered by burns-41 q2 and q4. |

Questions:

- q1 (KF4): which time the fluid timeline counts from. Key 12:50, inferred from the 13:05 call "about 15 minutes after the fire". Distractors are the call, the nurse's assessment, the IV start and arrival. Explanation: the first 8 hours end at 20:50, and counting from arrival would run the first-phase rate to 03:10. Source: Alaska 2021 ("fluid resuscitation ... begins from the time of initial injury", half "in the first 8 hours post-burn").
- q2 (KF4): rate to start now. Key 210 mL/hour. Arithmetic: 2 x 70 x 24 = 3360 mL, half is 1680 mL over the first 8 hours, which is 210 mL/hour. 105 mL/hour is the second-phase rate (1680 / 16). 280 mL/hour is 4 x 70 x 24 = 6720 / 24. 420 mL/hour is 3360 / 8. 500 mL/hour is the interim first-hour adult rate. The 2500 mL already given (14:10 to 19:10 at 500 mL/hour) is documented but neither subtracted nor made up. The update names the Alaska 2021 guideline, which says verbatim: "Begin administration at the calculated hourly rate, regardless of previous fluid administration. Previous fluid administration should be documented, but should not trigger 'catch up' fluid administration or subtraction from the current consensus formula rate."
- q3 (KF1): response to a rectal temperature of 36.0°C after cool wet towels. Key "Dry covers, forced-air warming". Source: Trauma New Brunswick 2025. In a burn patient hypothermia begins below 36.5°C, not at 35°C. The statement recommends active rewarming, warmed Ringer's lactate, dry sheets and a Bair Hugger or warm blankets, accepts cooling only for burns of 5% TBSA or less, and says dressings are not applied before consultation.
- q4 (KF4): meaning of the 520 mL drained when the catheter is placed. Key "Urine stored over several hours". She has not voided since before the fire, so this is at least 6.5 hours of urine, no more than about 80 mL/hour on average. Hourly output is counted from 19:30 against the New Brunswick adult target of 30 to 50 mL/hour.

## Optional notes applied

- burns-40 q2: the key stays two tests. The reviewer said this was within limits.
- "paralysed" (old burns-42 q4) is gone with that question.

## Key feature coverage (20 questions)

KF1 5 (40 q1, 40 q2, 41 q1, 42 q3, 43 q2). KF2 2 (43 q1, 43 q3). KF3 2 (41 q2, 41 q4). KF4 3 (42 q1, 42 q2, 42 q4). KF5 4 (39 q4, 40 q4, 41 q3, 43 q4). KF6 4 (39 q1 to q3, 40 q3). Every key feature is covered. KF4 rose from 1 to 3, all on fluids timed from injury or on tracking response. One menu question (43 q4). Single key positions pass the 25% cap, and the key is the longest option in no more than 35% of singles.

## Sources (opened this round)

- Alaska Department of Health, Trauma System Review Committee. Burn resuscitation guidelines for Alaska providers. 2021. https://health.alaska.gov/media/0zwppk25/alaska-burn-care-guidelines-2021.pdf (PDF downloaded and text read)
- Trauma New Brunswick. Consensus statement. Emergency burn care. Version 2. 2025. https://nbtrauma.ca/wp-content/uploads/2025/10/Consensus-Statement-Emergency-Burn-Care-AUGUST-2025-FINAL.pdf (PDF downloaded and text read: hypothermia below 36.5°C, rewarming, cooling for 5% TBSA or less, urinary catheter, adult target 30 to 50 mL/hour)
- American Burn Association. Guidelines for burn patient referral. 2025. https://ameriburn.org/burnreferral (page HTML reread: chemical injuries and the pediatric row)
- Anderson TA and colleagues. To stop or not, that is the question: acute pain management for the patient on chronic buprenorphine. Anesthesiology. 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC7041233/ (PCA and avoiding basal infusions confirmed. Europe PMC record checked: PMID 28511196)
- McKee D and colleagues. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4116323/ (lists "inhalation or ingestion of HF" as a risk for systemic toxicity, and over 5% TBSA at any concentration)
- Canadian Antidote Guide, calcium gluconate (unchanged citation, page reopened: ingestion and skin exposure are both indications)
- Hampson 2012, Walker 2015 and Berry 2020: unchanged. PADIS 2018 and Kohan 2021 are no longer cited and were removed.

## Uncertain, for the reviewer and the physician

1. burns-42 q2 takes the no-subtraction, no-catch-up position (Alaska 2021, and the ABA quotation in New Brunswick 2025). SCORING-RULINGS section D lists burn fluid catch-up as an open standard: signed burns-02 keys subtraction, while burns-16 follows Alaska. The stem names the reference, as SAMP_SPEC section 9 requires. This is flagged, not resolved.
2. burns-42 q1 tests the same principle as burns-16 q1 (the 8 hour clock runs from the injury), which is the literal KF4 wording the task asked for. The decision differs: the injury time has to be inferred from a later call among several plausible times. The reviewer should judge whether this counts as a repeat.
3. burns-40 q1 rests on McKee listing ingestion as a route to systemic toxicity. No source gives a paediatric hand-to-mouth figure. The key depends on the stem facts (finger sucking, normal eyes, dry clothes, no cough).
4. burns-41 q4: PCA in the emergency department for a patient waiting several hours is less common than on a ward. The update states the 6 hour stay to make the plan reasonable.
5. burns-42 q3: the 36.5°C threshold comes from a provincial consensus statement (New Brunswick), not a national guideline.

## Round 3

This round answers `docs/reviews/q500-verify2-s69.md`. burns-39, burns-40 and burns-43 are unchanged. burns-41 has only the two explanation fixes below, and its keys are unchanged. Only `src/samps/s69/burns.ts` was edited. The type check shows no s69 errors, and the s69 tests pass (128 of 128).

| Fix | What was done |
|---|---|
| burns-42 q1 repeated burns-16 q1 (fluid clock from the injury) | Replaced with a new KF4 decision: how to secure a cannula placed through burned skin. The update says her only IV, in the burned left forearm, is leaking and her legs have no usable veins, so a long cannula goes through burned skin of the right forearm. Key "Sutures to the skin". Distractors: tape wrapped around the forearm, tissue adhesive over the hub, transparent adhesive dressing, wrapped elastic bandage. Source: Trauma New Brunswick 2025, which says to suture lines placed through burned tissue "as standard taping and adhesives are often ineffective on burned tissue, particularly if wet" (PDF text reread). The catalogue for burns, environmental and multiple-trauma has no item keying how to secure a line through a burn. The stem times are unchanged. The q2 explanation now says "20:50, 8 hours after the fire at about 12:50", so it stands without the old q1. |
| burns-42 q3 repeated burns-24 q2 (remove the wet towels and warm) | Rebuilt on the reviewer's route. The wet towels are gone: she "arrived under dry blankets". The update names "the Trauma New Brunswick 2025 consensus statement". The question asks how to describe a rectal temperature of 36.0°C. Key "Hypothermia needing active warming". Distractors: expected after an air transfer, mild cooling needing no action, normal for an adult at rest, probe error to be repeated later. None of them involves a wet or cool covering. NB point 9: hypothermia in a burn patient is an internal temperature below 36.5°C, not 35°C. The warming measures in the explanation (Bair Hugger or warm blankets, warmed Ringer's lactate, dry sheets, regular temperature checks) are all from NB. The unsupported clause "burned skin cannot hold heat" was not used. |
| burns-42 q4 update named the q3 key | Deleted "Her towels are replaced with dry sheets and a warming blanket." The update now reads only "A urinary catheter is placed at 19:30 and at once drains 520 mL of clear yellow urine." No q4 text names the new q3 key. |
| burns-41 q4 IM absorption claim (physician list) | Removed. The sentence now reads "Scheduled IM doses every 3 hours cannot be adjusted as his pain changes, and each injection adds pain of its own." The key is unchanged. |
| burns-41 q1 urine drug screen claim (physician list) | Reworded to "A urine drug screen would not change his care whatever it showed, because his buprenorphine and the paramedics' fentanyl are already known." It no longer claims standard panels detect either drug. The key is unchanged. |

Single key positions were rebalanced by the alphabetical order of the new q1 options, so the q1 key sits first. Positions now run 3, 4, 4, 4, 4 of 19.

Key feature coverage: KF1 5 (40 q1, 40 q2, 41 q1, 42 q3, 43 q2). KF2 2. KF3 2. KF4 3 (42 q1, 42 q2, 42 q4). KF5 4. KF6 4. There is still one menu question.

Uncertain:
- burns-42 q1 is tagged KF4 because the line exists to deliver the burn resuscitation. A reviewer could argue for no better fit. It is not airway, analgesia or disposition.
- The 36.5°C threshold in q3 is from one provincial statement, now named in the update as SAMP_SPEC section 9 requires.
