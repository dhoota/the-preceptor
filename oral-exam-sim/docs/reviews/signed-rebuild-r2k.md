# Signed-duplicate rebuilds, round 2, label r2k

Ids given: first-trimester-bleeding-15, lacerations-03, lacerations-04, lacerations-08, multiple-patients-06, multiple-patients-15.

Result: three were rebuilt with new stories and keys (lacerations-03, 04 and 08). Three are reported as "cannot" (first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15). The reasons are in the second section.

Each rebuild keeps its id, topic, alsoTopics, question count, kinds and key features. Each has `version: 2` and `reviewed: false` after `...META`. None needs a D1 repeat. Nothing was committed.

## Rebuilt

| Id | Old story (signed) | Round 1 story (failed) | New story | Keyed decisions (q1 to q4) |
|---|---|---|---|---|
| lacerations-03 | Fight bite over the 4th MCP joint (cluster 68, keeper msk-09) | Dog bite with an open radial fracture. q4 was the keeper's urgent washout | A 12-year-old hit on the fingertip by a volleyball, 16 hours earlier, with a drooping fingertip under buddy tape. It is a Seymour fracture (open physeal fracture of the distal phalanx) | q1 short (lac KF1): features beyond a mallet finger, meaning an open physis, blood near the nail base, the axial ball strike, 16 of 24 hours gone and tape hiding the fold. q2 short (msk KF6): signs that make it open, meaning the nail plate lying on top of the eponychial fold, nail fold bleeding, a subungual hematoma, a nail bed laceration or a long lunula. q3 single (lac KF4): cephalexin PO from today, not waiting for redness or pinning. q4 short (msk KF7): same-day hand surgery care plus at least one Seymour step, meaning nail plate removal, freeing the trapped germinal matrix, or nail bed repair with a stent |
| lacerations-04 | Bat on the forearm, RIG and vaccine (cluster 66, keeper infectious-diseases-09) | Macaque bite in Bali. q3 was the keeper's RIG dose and schedule | An emergency nurse cuts her finger with a scalpel while unroofing a vesicle on a patient with PCR-confirmed mpox. She has never been vaccinated | q1 short (lac KF1): risk features, meaning a blade used on a lesion, a sharps injury through the glove that bled, no smallpox or mpox vaccine, and a confirmed source. q2 single (ID KF10): Imvamune 0.5 mL SC today. q3 short (ID KF10): 21 days of symptom monitoring, daily occupational health screening with public health informed, working while well in a medical mask, no care of immunosuppressed, pregnant or labouring patients or children under 12, a second dose at 28 days or more, and stopping work if symptoms appear. q4 short (ID KF3): risk factors for severe mpox, meaning immunocompromise, pregnancy, eczema, or extensive skin barrier disease |
| lacerations-08 | Glass lacerations, lidocaine maximum dose and LAST (cluster 27, keeper analgesia-sedation-04) | Toddler with LET and LAST. The LAST re-key failed the second look | An aquarium-store worker has a hand laceration from a freshwater stingray. His manager applied a tight elastic bandage and ice | q1 single (analgesia KF2): hot water immersion at 43 to 45°C. q2 short (analgesia KF2): safe immersion, meaning test the water on another hand or with a thermometer, about 45°C with no burn, keep the water hot, immerse until the pain settles and again if it returns, with an added analgesic. q3 short (tox KF4): venom-specific points, meaning no pressure immobilisation, remove the ice, no antivenom, necrosis, and antibiotics covering skin and water organisms. q4 short (lac KF3): before closure, required 3, meaning explore for the barb and sheath, imaging, debride dusky tissue, and leave open or close later |

### Sources opened

| Id | Source | What was checked |
|---|---|---|
| lacerations-03 | Ross SJ et al. Seymour fractures revisited. J Pediatr Soc North Am 2026. 16:100404. PMC13351397, full text | The findings to presume Seymour (mallet deformity, nail fold bleeding, subungual hematoma, nail plate superficial to the eponychial fold). Flexion from physeal imbalance. Oral cephalexin or IV cefazolin. 6.9% vs 76.5% infection for antibiotics within vs after 24 h. Nail plate removal, removal of interposed matrix, reduction, K wire if unstable, nail bed repair, nail or stent under the fold. Antibiotics recommended for Seymour but not routine for a closed mallet finger |
| lacerations-04 | PHAC. Interim guidance on IPAC for mpox in healthcare settings. November 2024 (canada.ca, via WebFetch) | A sharps injury from an instrument used to unroof or sample a lesion. The worker may keep working with symptom monitoring and a medical mask at all times. 21 days. Active daily screening with occupational health after a higher risk exposure. Discuss with public health. No care of immunosuppressed, pregnant or labouring patients or children under 12 for 21 days |
| lacerations-04 | NACI summary statement. Updated guidance on Imvamune. CCDR 2025. 51(1):1 to 6. PMC11708810, full text | PEP after high risk exposure if not fully vaccinated. 0.5 mL SC within 4 days, can be considered up to 14 days. Dose 2 at 28 days or more if no infection. SC only, intradermal dose sparing not recommended. Severe disease in young children, pregnancy and immunocompromise |
| lacerations-04 | Rao AK et al. Interim clinical treatment considerations for severe mpox. MMWR 2023. 72(9):232 to 243. PMC9997665, full text | Immunocompromise, pregnancy, atopic dermatitis or eczema (controlled or not), and extensive skin barrier breaks (burns, psoriasis, severe acne). Tecovirimat as a treatment countermeasure |
| lacerations-08 | Clark RF et al. Stingray envenomation, 119 cases. J Emerg Med 2007. 33:33 to 37. PubMed abstract | 88% complete relief within 30 min with hot water alone. No burns. Barbs can be radio-opaque but radiography found none. Stinger and sheath embed. Infection when no prophylaxis was given |
| lacerations-08 | ANZCOR Guideline 9.4.5, marine envenomation, approved June 2025 (WebFetch), and the 9.4.7 PDF (fish stings) | Hot water about 45°C, no hotter than the rescuer can tolerate, no burn. Cold packs except for stingray and stonefish. "The Pressure Immobilisation Technique is not used for fish stings because the venom remains localized at the wound" |
| lacerations-08 | Dwek P et al. Motoro ray envenomation, a Canadian pet case and review. Toxins 2026. 18(6):270. PMC13307791, full text | Hot water immersion is standard. No antivenom exists or is indicated. Debridement and antibiotics against gram positive (cephalexin) and gram negative (ciprofloxacin) organisms. High rate of ulcerative and necrotic lesions |
| lacerations-08 | Niznik L et al. Hot water immersion or ice pack review. Toxins 2024. 16(6):273. PMC11209160, full text | Up to 45°C. Duration guided by pain relief. Keeping the water hot prevents recurrent pain |

### Duplicate checks

Decision search: allkeys.tsv and src/samps were grepped for each decision's core terms and synonyms. src/samps was grepped again just before finishing.

| Id | Terms searched | Closest hits |
|---|---|---|
| lacerations-03 | seymour, physis, physeal, growth plate, germinal, eponych, nail plate, nail fold, nail bed, subungual, cephalexin, 24 hours, mallet | No Seymour, physeal or nail-plate key anywhere. msk-11 q4 accepts "distal phalanx fracture with a nail bed laceration" as one of 7 open-fracture items. That list is generic. Here the nail-unit signs are the key. lacerations-30 q3 keys "no prophylactic antibiotics" for a tuft amputation. Here the key is the opposite decision, for a different reason. critical-appraisal-19 q4 has cephalexin in an unrelated context |
| lacerations-04 | mpox, monkeypox, imvamune, tecovirimat, vaccinia, smallpox, 21 days, occupational health, medical mask, eczema, atopic, immunocompromised | No mpox content in the bank. infectious-diseases-08 keys needlestick HIV PEP and HBIG. infectious-diseases-39 keys a community needle. Neither is keyed here, because the stem closes the bloodborne branch. The immunocompromise items in eye-05 and headache-05 are for other diseases |
| lacerations-08 | stingray, venom, hot water, 43 to 45, pressure immobil, antivenom, sheath, barb, stinger, necrosis, dusky, thermometer, scald | No stingray or fish envenomation in the bank. "Venom" hits are Hymenoptera allergy (anaphylaxis-01, 21, 22, 29) and snake antivenom (shock-45). lacerations-08 (signed) q4 keys imaging and exploration for glass. That is capped here by required 3, and the probe below shows it |

Simcheck top 5 (full score / keys score), with every card read:

| Id | Top 5 |
|---|---|
| lacerations-03 | analgesia-sedation-44 0.27/0.13 (tuft fracture, digital block keys). msk-31 0.23/0.09 (adult bony-free mallet finger, splint keys). msk-16 0.13/0.18. lacerations-30 0.18/0.15. msk-11 0.14/0.17. The msk-31 overlap is in wording only: a ball strike and a drooping tip. Its keys are mallet splinting. The title and flexion angle were changed to reduce the wording overlap |
| lacerations-04 | infectious-diseases-42 0.06/0.15. infectious-diseases-39 0.11/0.06. pediatric-fever-40 0.11/0.09. infectious-diseases-09 0.08/0.10. lacerations-13 0.09/0.09 |
| lacerations-08 | lacerations-07 0.15/0.11. lacerations-16 0.07/0.12. burns-35 0.10/0.12. pediatric-fever-34 0.11/0.09. lacerations-34 0.11/0.11 |

### markQuestion probe (rule 4)

For each write-in question, every accept, unacceptable and option text of the keeper and every cluster member (from the round 2 packet) was pooled. Every combination of `required` lines was scored. The best score is shown.

| Id | Question | Best keeper or cluster score | Lines used |
|---|---|---|---|
| lacerations-03 | q1 | 1/2 | "Delayed presentation of 10 hours" |
| lacerations-03 | q2 | 0/2 | none matched |
| lacerations-03 | q4 | 1/2 | "Copious irrigation", "Hand surgery referral if ..." (same item) |
| lacerations-04 | q1 | 1/2 | "Any saliva contact with eyes, mouth or broken skin" |
| lacerations-04 | q3 | 1/3 | "Consult infectious diseases or public health" |
| lacerations-04 | q4 | 1/2 | "Consider whether immunosuppression can be reduced" |
| lacerations-08 | q2 | 1/2 | "20% lipid 20 mL IV infused over 30 minutes" |
| lacerations-08 | q3 | 0/2 | none matched |
| lacerations-08 | q4 | 1/3 | "Radiograph for retained glass", "Point of care ultrasound for a foreign body" (same item) |

The single questions key "Cephalexin PO from today", "Imvamune 0.5 mL SC today" and "Hot water immersion at 43 to 45°C". None of these appears in any packet.

Natural wording, including negations, scores full marks. Examples:
- "Nail plate sitting on top of the eponychial fold / Blood oozing from the nail fold" = 2/2.
- "Urgent plastics referral / Remove the nail and repair the nail bed" = 2/2.
- "No home quarantine needed / Avoid caring for pregnant patients / Second dose" = 3/3.
- "No pressure immobilization / No antivenom exists" = 2/2.
- "Do not close it today / X-ray / Look for the stinger sheath" = 3/3.

Generic answers stop short of full marks:
- "Hand surgery for washout / IV antibiotics" = 1/2.
- "X-ray for foreign body / Ultrasound for foreign body / Leave it open" = 2/3.
- "Regional nerve blocks / Dilute to 0.5% lidocaine" = 0/2.

Negation checks:
- "Give stingray antivenom" is flagged unacceptable.
- "Quarantine at home for 21 days" is flagged unacceptable.
- "Mallet splint and fracture clinic" is flagged unacceptable.

## Cannot rebuild

After the coordinator's round 2 update (D1 at 19 of 20, zero repeats, a clean "cannot" rather than a forced repeat), these three were judged to have no fresh keyed decision for enough of their preserved key features.

- **first-trimester-bleeding-15** (FTB KF 1 short, KF 2 single, KF 2 short, KF 5 single). The FTB bank is 38 SAMPs deep. Its signed keys already cover:
  - every standard shock sign: orthostatic rise, pulse pressure, relative tachycardia, shock index, capillary refill, and McGee postural pulse.
  - the pregnancy test, including urine dilution.
  - bedside and formal ultrasound, which is also keyed by cluster member abdominal-pain-08 q2.
  - PUL and serial hCG.
  - every non-tubal site (interstitial, cervical, scar, heterotopic).
  - IUD, testosterone, medication abortion without ultrasound, tubal ligation and cervical shock.
  - Rh decisions at every gestation, including passive anti-D.

  I found fresh candidates for two questions:
  - KF 1: a transient response to a prehospital fluid bolus, with lactate or base deficit (Rossaint, European trauma guideline 2023).
  - KF 5: an indeterminate or weak D Rh type, managed as Rh negative until RHD genotyping (SOGC 448 recommendation 3, opened, and Newfoundland NLBCP-009, 2024).

  I found no two fresh decisions for the two KF 2 questions.
- **multiple-patients-06** (MP KF 4, EMS KF 4, tox KF 2, MP KF 1). EMS KF 4 field directions (decontamination, PPE, product collection, triage, distribution, antidote per protocol) and MP KF 1 triage by vital signs and ABC are keyed across ems-13 (keeper), ems-15, ems-24 (ammonia), ems-25 (radiological), ems-27 (fentanyl), multiple-patients-10 and 16 to 35. Every candidate toxin had its antidote already keyed:
  - hydroxocobalamin, methylene blue, fomepizole, physostigmine, octreotide, digoxin Fab and naloxone.
  - botulinum antitoxin (sob-42).
  - amatoxin triage by symptom onset (tox-34).

  Only a tox KF 2 question could be made fresh.
- **multiple-patients-15** (EMS KF 1, EMS KF 4, MP KF 4). The pre-arrival information list, field distribution and triage (START, JumpSTART, SALT), and Code Orange, surge capacity, zones, tracking and reunification are keyed in multiple-patients-03 (keeper), ems-12, ems-25, ems-26 and multiple-patients-19 to 29. They are also in the other writer's ems-12 rebuild. A hospital evacuation story was considered. It would converge with ems-12 on tracking and family reunification, and it could not be sourced to the standard needed.

### What I did to these three ids (please check)

Before the coordinator's correction arrived, I had followed the first update ("restore that id's block exactly from HEAD").
- first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15: I replaced only their blocks with the HEAD blocks, using a script (scratchpad/r2k/blk.py). So their failed round 1 texts are no longer in the working tree.
- multiple-patients.ts: I then ran `git checkout HEAD -- src/samps/s13/multiple-patients.ts`. The restored blocks cite `S.salt` and `S.eddleston`, and the round 1 rebuild had deleted those two constants. Before that checkout, `git diff` on the file showed only those two deleted constant lines, so no other writer's work was in the file.

All three are now byte-identical to HEAD.

Blocked command, not retried:
- Command: a python edit of `src/samps/held-back/r2k.json` to delete the three entries.
- Purpose: to remove the three HEAD-restored ids from the held-back list, as the first update asked.
- Result: the permission system denied it.

r2k.json therefore still lists all six ids. Because of that, three tests fail. Each is "is marked reviewed only if a physician signed it off": first-trimester-bleeding-15 in s10, and multiple-patients-06 and 15 in s13. These signed HEAD texts carry `reviewed: true` while they are held back. Removing the three entries from r2k.json should clear all three failures.

## Checks

- `SAMP_BATCH=s10 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 482 passed, 1 failed (first-trimester-bleeding-15, held-back flag, see above).
- `SAMP_BATCH=s13 ...`: 464 passed, 2 failed (multiple-patients-06 and 15, same cause). All lacerations tests and the batch quality gates (key position, parity, length) pass.
- `npx tsc --noEmit -p .`: clean.
- House style: no em or en dashes and no semicolons in the three rebuilt blocks.
- The temporary probe test in tests/ was deleted.

## For the physician

- **lacerations-03 (Seymour fracture).**
  - The source is one 2026 review, which is mostly retrospective evidence.
  - q3 keys oral cephalexin started now. IV cefazolin is not an option, so the single answer is not contested.
  - q4 accepts "same-day hand surgery" care. The review allows definitive care in the ED when the reduction is stable, so please confirm that the referral framing suits your practice.
- **lacerations-04 (mpox sharps injury).**
  - The work guidance (keep working masked, active daily screening, no care of immunosuppressed, pregnant or labouring patients or children under 12 for 21 days) is PHAC's November 2024 IPAC guidance. Provincial occupational health may differ.
  - Tecovirimat is a distractor. It is explained as a treatment agent, not as NACI's prophylaxis.
- **lacerations-08 (freshwater stingray).**
  - Evidence is case series and first aid guidance. ANZCOR is Australian and New Zealand, and no Canadian guideline exists.
  - q4 treats leaving the wound open or closing it later as an accepted item. That rests on the lacerations KF 3 principle and on the necrosis the sources describe. No source states a closure rule for stingray wounds.
  - The q3 antibiotic item (cephalexin with ciprofloxacin) comes from the Motoro ray review.
- **first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15** keep their signed text for now. If a later round retries first-trimester-bleeding-15, two fresh decisions are available:
  - weak D typing managed as Rh negative until genotyping.
  - a transient response to prehospital fluid.
