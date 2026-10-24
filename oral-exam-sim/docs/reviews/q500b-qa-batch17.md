# Q500B QA review: oral cases batch17

Independent first review of `src/cases/batch17/` against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. The reviewer did not edit the batch.

## Test runs

- `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 passed.
- `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 passed. Card, score sheet rows and timing checks pass.
- `npx tsc --noEmit -p . | grep cases/batch17`: no output.

## Checks recomputed by hand

- Longest path seconds: 640, 580, 630 and 680. All are 720 or less. Every question is 60 to 90 seconds.
- Points per row (history, physical, management, process): 8/6/8/8 (30), 7/6/11/9 (33), 6/7/8/8 (29), 7/6/7/9 (29). History is 21 to 27%. Management is 24 to 33%. These match the writer's report.
- Findings: 14, 12, 14 and 14. Sources: 5, 5, 6 and 6. Every case has a fixed escalation on every path, and every case has at least 3 branching questions.
- House style: no em dashes, en dashes or semicolons. No personal names. Author is "Preceptor", `reviewed: false`, `version: 1`.
- Oral mock mode runs each station node by node, so the SAMP mock-mode cue rule (B6) does not apply to the say nodes. I found no forward cue in the question order.

## 1. hoist-transfer-thigh-fracture: FAIL

Numbers checked: fentanyl 0.5 mcg/kg x 36 kg = 18 mcg. Bupivacaine 0.25% 20 mL = 50 mg = 1.4 mg/kg. Bupivacaine 0.5% 40 mL = 200 mg = 5.6 mg/kg. Lipid 1.5 mL/kg x 36 kg = 54 mL (ASRA 2020, under 70 kg). Acetaminophen 15 mg/kg = 540 mg. Naloxone 0.04 mg, titrated every 2 minutes (Boyer 2012, confirmed in full text). Avoiding flumazenil with daily clobazam and epilepsy is correct. Sullivan 2018 was opened. It supports behaviour as a pain sign with caregiver input (9.1, 9.2), osteoporosis screening "starting in early adulthood" (20.4), fractures at a younger age, and shared decision making (3).

- **Case level, uniqueness: FAIL.** This case is a near duplicate of the new Q500B SAMP `analgesia-sedation-50` in `src/samps/s81/analgesia-sedation.ts` ("Arching after a wheelchair transfer"). That SAMP has a nonverbal girl with spastic quadriplegic cerebral palsy who takes baclofen and levetiracetam and is fed by gastrostomy. She has a displaced femoral shaft fracture after a transfer. Her mother describes her pain cues, a behavioural tool is keyed, and the nurse asks for "something to settle her", with the key being analgesia, not a sedative. Case and SAMP share the scenario, the diagnosis and setting, and the key decision in q-first (Q500B brief rule 3). The writer reported s81 as empty when they checked. **Fix:** the orchestrator decides which item keeps this scenario. If it is the case, the s81 SAMP is rewritten. If it is the SAMP, rewrite this case so that it shares neither the patient group (nonverbal cerebral palsy) nor the injury (femoral fracture after a transfer) nor the opening request for a sedative. The new angles here (nerve block, local anesthetic dose by weight, oversedation once the block takes the pain away, home sedatives given by the caregiver, flumazenil avoided) can carry into a different patient and injury.
- s-open, q-first: PASS.
- q-history: PASS.
- q-exam: PASS.
- q-analgesia: PASS. Advisory: in the c-hydromorphone feedback, "1 mg hourly is an adult dose for a 36 kg woman" reads oddly, because she is an adult. Suggested wording: "1 mg hourly is a standard adult dose and is too much for a 36 kg woman who became hypoxic on morphine before."
- **q-event (with s-event and the `event` finding): FAIL.** There are three problems.
  1. *Plausibility.* On the strong path, the last opioid she received was fentanyl 18 mcg twice, before the block, at about 19:15 to 20:00. Clobazam 10 mg and baclofen 10 mg at 20:00 are her usual daily doses, which she tolerates. Fentanyl at that dose lasts 30 to 60 minutes. So a naloxone responsive event at 21:30, with pinpoint pupils, a rate of 6 and an ETCO2 of 68, has no opioid to explain it. **Fix:** in s-event and in the `event` finding, add that a breakthrough opioid dose was given about 21:00. For example: "At 21:00 the nurse gave a breakthrough dose of fentanyl 18 mcg IV when she moaned during the splint check." Alternatively, use a longer acting breakthrough opioid such as hydromorphone 0.2 mg IV.
  2. *c-sleeping feedback.* "Opioids with benzodiazepines and other sedatives cause most deaths from opioid toxicity" overstates the source. Boyer says these agents are "strongly associated with death from opioid overdose". **Fix:** "Opioids combined with benzodiazepines and other sedatives are strongly linked with deaths from opioid toxicity."
  3. *Rubric sources (C2).* Boyer does not mention flumazenil or capnography. at-m5 ("avoids flumazenil", and the teaching "Flumazenil can trigger seizures...") and at-p4 (the teaching "Capnography shows hypoventilation before the O2 sat falls") cite `boyer` for those claims. **Fix:** remove the flumazenil element from the at-m5 text and teaching. It can stay in the model answer. Reword the at-p4 teaching to what Boyer supports, for example: "A respiratory rate of 12 or less in a patient who is not in normal sleep strongly suggests opioid toxicity." Alternatively, add a source that supports these points (see at-h3 below) and cite it.
- **q-reassess (with at-pr2): FAIL.**
  - The model answer line "for the duration of naloxone risk" is unclear. **Fix:** "Continuous SpO2 and capnography until the risk of recurrent respiratory depression has passed. Naloxone lasts 20 to 90 minutes, shorter than many opioids."
  - The at-pr2 teaching "Pain stimulates breathing. When a block removes the pain, the same opioid dose can become too much." is not in Boyer. Boyer does support the transient reversal and the observation after naloxone. **Fix:** cite a source that supports the pain point, or reword the teaching to what Boyer states: "Reversal with naloxone is often transient because it lasts 20 to 90 minutes. Keep monitoring after she responds."
- q-mother: PASS.
- q-dispo: PASS.
- **Rubric at-h3: FAIL (C2).** "Past responses predict future ones. A history of opioid related hypoxia calls for smaller doses, closer monitoring..." cites `boyer`, which does not discuss a past adverse response as a dosing factor. **Fix:** add a sixth source that covers risk assessment for opioid induced respiratory depression and capnography, and cite it here and for the capnography point in at-p4. One candidate: Jungquist CR, Quinlan-Colwell A, Vallerand A, and colleagues. American Society for Pain Management Nursing guidelines on monitoring for opioid-induced advancing sedation and respiratory depression. Revisions. Pain Manag Nurs. 2020 (21(1):7-25, doi 10.1016/j.pmn.2019.06.007). The writer must open it and confirm that it supports each point.
- **Rubric at-m4: FAIL (C2).** The item covers scheduled acetaminophen by weight and avoiding NSAIDs, but it cites `acep-ugnb`, a nerve block policy that does not cover them (writer's uncertainty 2). **Fix:** cite a source that states scheduled acetaminophen as part of multimodal analgesia (the added source, if it does), or narrow the item to the splint and to limiting opioid once the block works.
- All other rubric items: PASS.
- Writer's uncertainty 1 (no bupivacaine maximum keyed): acceptable. The c-big-block feedback says "more than 5 mg/kg" only as a figure, and the 2.5 mg/kg maximum is not keyed.

## 2. sleepover-smoothie-vomiting: PASS

Numbers checked: epinephrine 0.01 mg/kg x 42 kg = 0.42 mg IM (CPS, maximum 0.5 mg, repeat every 5 to 15 minutes). Normal saline 20 mL/kg = 840 mL. The 0.4 mL of 1 mg/mL given IV is 0.4 mg. CSACI 2021 was opened: 0.30 mg for 25 kg to under 45 kg is confirmed, so 0.3 mg is right at 42 kg. Kanwar 2010 was checked on Europe PMC (Ann Emerg Med 55(4):341-344). It supports IM to IV dosing confusion, transient severe systolic dysfunction and prefilled, clearly labelled IM syringes on crash carts. Latex and fruit cross reactivity (kiwi, banana) is correct. A tryptase of 18.2 µg/L at 70 minutes is raised.

- q-recognize: PASS.
- q-surge: PASS. Writer's uncertainty 3: no guideline sets out how to manage an IV epinephrine overdose, and Kanwar describes recognition and prevention rather than treatment. Supportive care, no further epinephrine during the surge and treating only a sustained arrhythmia are sound pharmacology. Keying metoprolol unsafe fits ruling C1: it is a clearly harmful drug in a patient whose anaphylaxis will need epinephrine again within minutes, a different setting from ruling A6 (cocaine). Keying amiodarone partial is reasonable. Flag for the physician only.
- q-repeat: PASS.
- q-history: PASS. Advisory: she danced for 2 hours *before* the smoothie. Exercise acts as a cofactor mainly when it follows the food. The model answer line "Cofactors. Exercise, NSAIDs, illness. She danced for 2 hours." may be read as saying the dancing contributed. Consider "Cofactors. Exercise around the meal, NSAIDs, illness."
- q-disclose: PASS (CPSI 2011).
- q-dispo: PASS.
- q-discharge: PASS. Advisory: CSACI 2021 does not itself recommend two autoinjectors. The 0.3 mg band is supported. The physician may want the "two autoinjectors" point tied to `golden` or `cps`.
- q-system: PASS.
- Rubric and sources: PASS. Writer's uncertainty 4 (0.3 mg band): confirmed.
- Uniqueness: PASS. No IV epinephrine error case or SAMP exists. The existing case refractory-anaphylaxis-beta-blocker is about chronic beta blockade, not an error.

## 3. noodle-soup-scald-return: FAIL

Numbers checked: intranasal fentanyl 1.5 mcg/kg x 15 kg = 22.5 mcg, about 22 mcg. Repeat 0.75 to 1.5 mcg/kg after 5 to 10 minutes. From 12 months of age, maximum 100 mcg (RCH page opened). Burn size 5% + 2% = 7%. Bolus 10 to 20 mL/kg = 150 to 300 mL, and 40 mL/kg = 600 mL (Weiss 2020 allows up to 40 to 60 mL/kg in the first hour). The RCH burns page was opened: 20 minutes of cool running water, ideally within 3 hours, never ice, erythema not counted, discuss above 5%. The ABA referral page was opened: pediatric burns may benefit from referral, including for non-accidental trauma, and partial thickness burns under 10% are listed for consultation. The return labs meet staphylococcal toxic shock criteria: platelets 98, ALT 88, CK 640, creatinine 74 µmol/L at age 3, vomiting and diarrhea, mucosal hyperemia and CNS change.

- q-first: PASS. Writer's uncertainty 5 (Australian RCH sources): acceptable, because the pages state the doses and windows directly. A Canadian source (TREKK) would be preferred if one can be verified.
- q-history: PASS.
- q-assess: PASS.
- q-dispo: PASS.
- **`return-history` finding: FAIL (internal timeline).** The burn was at 17:30 and the return is "Day 3, 06:10". On every path the burn centre set a video review "in 48 hours". The finding says the review "is booked for tomorrow". If the burn day counts as day 1, the review falls this evening (about 36 hours after the burn). If it counts as day 0, the review is already past (about 60 hours). Neither reading gives "tomorrow". **Fix:** change the finding to "The burn clinic video review is booked for this evening", or set the review at 72 hours in c-consult, s-fp and s-transfer.
- q-shock: PASS.
- q-refractory: PASS. IVIG as a discussed adjunct fits Weiss 2020, which suggests against routine IVIG but allows it in toxic shock.
- q-transfer: PASS.
- q-father: PASS for the node itself. Its feedback claims belong to the fix below.
- **Rubric bn-p4 and bn-pr4, and the "clean wound" claims in the c-fp and c-dressing feedback: FAIL (C2, writer's uncertainty 6).** bn-p4 ("A wound without obvious infection does not exclude toxic shock") and bn-pr4 ("Toxic shock can occur after small, clean, well cared for burns") cite `gutzler`. The Gutzler abstract does not say anything about wound appearance (checked on folia.unifr.ch). The Canadian Sirajee 2025 chart review, already in the bank in s16, does not either. **Fix:** either cite a verified source that states that toxic shock occurs with a clean looking burn wound, or reword. For example, bn-p4 teaching: "The burn is the likely source, so inspect and swab it. Toxic shock is caused by toxin, and it has followed burns of under 1% of body surface area." bn-pr4 teaching: "Toxic shock can follow small burns. Parents need honest information and reassurance that they did not cause it." Soften the c-fp feedback ("while the wound looks clean") and the c-dressing feedback ("toxic shock often occurs with a clean looking wound") in the same way, or support them with the same source.
- **Rubric bn-pr2: FAIL (C2).** The teaching "Toxic shock can follow small burns treated as outpatients. Families who know the warning signs return early." cites `gutzler`, whose abstract does not address outpatient care. **Fix:** cite Sirajee R, Baykan A, Fraulin FOG, and colleagues. Toxic shock syndrome as an unexpected complication in outpatient pediatric burn treatment. A chart review. Plast Surg (Oakv). 2025 (https://doi.org/10.1177/22925503241249758). It is Canadian and states that TSS follows minor outpatient burns of 1 to 3%, with early vomiting, fever and hypotension 1 to 6 days after injury. The case is at 6 sources, so it would replace one. Either replace `gutzler` and reword bn-h4 to Sirajee's figures (1 to 6 days, burns as small as 1%), or keep `gutzler` and reword bn-pr2 to drop "treated as outpatients".
- Other rubric items: PASS. Writer's uncertainty 7 (no antibiotic doses keyed): acceptable. bn-m4 cites IDSA 2014 for clindamycin as toxin suppression.
- Uniqueness: PASS. Cooling within 3 hours and intranasal fentanyl overlap s26 "A toddler and a kettle cord", but here they are only the opening step. Toxic shock after a small outpatient scald is new to the bank.

## 4. bench-press-chest-pain: FAIL

Numbers checked: an arm difference of 158 minus 124 = 34 mmHg. ADD-RS is 3: high risk condition (Marfan features and family history), high risk pain and high risk exam. ADvISED: a score of 1 or less with a D-dimer under 500 ng/mL had a failure rate of 0.3%. IRAD: ECG normal in 31.3%, CXR normal in 12.4%, type A mortality 26% with surgery and 58% without, so "more than twice" is correct. Esmolol 500 mcg/kg x 84 kg = 42 mg. Revised Ghent: ectopia lentis with a dilated root is diagnostic. CCS 2014 supports screening first degree relatives. The timeline is consistent (15:10 onset, ibuprofen 16:00, now about 18:10).

- q-resident: PASS.
- q-history: PASS.
- q-exam: PASS.
- q-ddx: PASS.
- q-image: PASS.
- **q-treat (with c-impulse and rubric cp-m2): FAIL.**
  1. The heart rate target "60 or lower" is not the cited guideline's target. The 2022 ACC/AHA aortic guideline (`aha-aorta`) targets a systolic pressure under 120 mmHg, or the lowest that maintains end organ perfusion, and a heart rate of 60 to 80 bpm (ACC Ten Points to Remember, Part 2, checked). Under 60 is the 2010 and ESC figure, and the case has no room for a seventh source. **Fix:** change "Heart rate 60 or lower" to "heart rate 60 to 80" in the model answer, in the c-impulse label ("aiming for a heart rate of 60 to 80") and in the cp-m2 text. The s-refuse value (pulse 62) can stay.
  2. The model answer says "IV opioid first" and then "IV beta blocker first". **Fix:** change the second line to "Then an IV beta blocker before any vasodilator. Esmolol 500 mcg/kg over 1 minute..."
  - Writer's uncertainty 8 (beta blockade with moderate regurgitation): acceptable, and a 60 to 80 target lowers the concern. Optional: add "Watch for worsening regurgitation as the rate falls."
- **q-call: FAIL (house style and content).** The line "Tell the surgeon about the aspirin or other drugs given, if any." uses "aspirin". The case itself says ASA (c-asa), which is the Canadian name. It also leaves out the ibuprofen he really took at 16:00. **Fix:** "Tell the surgeon about the ibuprofen at 16:00 and any ASA or anticoagulant given."
- q-refuse: PASS (CMPA 2024).
- q-family: PASS.
- Other rubric items and sources: PASS.
- Uniqueness: PASS with a note for the orchestrator. The new SAMP chest-pain in s85 ("Pain while carrying a water heater") also has a dissection with onset during heavy lifting, a father's sudden aortic death, instant onset pain, ADD-RS and esmolol. This case's decisions are different: overruling a resident's anchored label, the Marfan examination, informed refusal and family screening. The ADD-RS decision also differs (a score of 3 means direct imaging). Watch it in the TF-IDF pass. If it is flagged, swap the father's sudden death for a different family clue.

## Fails and exact fixes

1. hoist-transfer-thigh-fracture, uniqueness: near duplicate of s81 analgesia-sedation-50 (nonverbal CP, femoral fracture after a transfer, a sedative request refused). The orchestrator picks the keeper, then the case is rewritten to a different patient group, injury and opening, or the SAMP is rewritten.
2. hoist-transfer-thigh-fracture, q-event and s-event: add a breakthrough opioid dose at about 21:00 to s-event and to the `event` finding. Reword the c-sleeping feedback to "strongly linked with deaths". Remove flumazenil from the at-m5 text and teaching, or source it. Reword the at-p4 capnography teaching to Boyer's respiratory rate point, or source it.
3. hoist-transfer-thigh-fracture, q-reassess and at-pr2: replace "for the duration of naloxone risk" with the stated wording. Source or reword the at-pr2 pain-drives-breathing teaching.
4. hoist-transfer-thigh-fracture, at-h3: add a verified source on risk assessment for opioid respiratory depression (for example, Jungquist ASPMN 2020) and cite it.
5. hoist-transfer-thigh-fracture, at-m4: cite a source for scheduled acetaminophen, or narrow the item.
6. noodle-soup-scald-return, `return-history`: change "booked for tomorrow" to "booked for this evening", or move the review to 72 hours.
7. noodle-soup-scald-return, bn-p4: source or reword the "clean wound does not exclude TSS" teaching.
8. noodle-soup-scald-return, bn-pr4 and the c-fp and c-dressing feedback: same fix as 7.
9. noodle-soup-scald-return, bn-pr2: re-source to Sirajee 2025, or drop "treated as outpatients".
10. bench-press-chest-pain, q-treat and c-impulse: heart rate target 60 to 80 (2022 ACC/AHA). Fix the double "first".
11. bench-press-chest-pain, cp-m2: heart rate target 60 to 80.
12. bench-press-chest-pain, q-call: "aspirin" becomes ASA, and add the 16:00 ibuprofen.

Overall: FAIL (12 items)
