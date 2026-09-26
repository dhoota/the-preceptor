# Review of sweep 3 rebuilds, label sw3-1 (s20 and s23)

Independent review of the five SAMPs rebuilt in `docs/reviews/samps-sweep3-sw3-1.md`. Both lenses were applied. Nothing was committed. Every SAMP stays `reviewed: false`. No key was changed.

Scratch files: `scratchpad/rv-sw3-1` (draft texts, simcheck output, key feature script).

## Checks done

- **Key features.** Every question's `keyFeature` matches `git show HEAD` for all five SAMPs (script comparison). Each question tests its mapped feature.
- **Sources.** Every citation was opened. Wu 2010, Maloney 2006, Simonte 2003, Elizur 2018, Barrett 2020, Ribeiro 2018 and Schabelman 2010 were checked against their abstracts on Europe PMC. The IPC Ontario lock-box fact sheet, the ANZAAG 2022 background paper, WAO 2020 and the 2017 Canadian EpiPen product monograph were checked against their full text.
- **Overlap.** `simcheck.py` was run on the current text of each SAMP. The top full-text score was 0.27, and the top key score was 0.24. The current files were grepped for lock-box, pet shelter, facial bruise, rocuronium anaphylaxis, the 50 mmHg threshold, inline salbutamol, edible insects, iodine, autoinjector misfire, grip, pistachio, kissing and casual peanut contact. Each of these appears only in its own rebuild, apart from shared teaching points noted below. The rebuilds were also checked against the signed clusters in `sweep3-ss-merged.json`.
- **Cues.** Mock-mode cueing, hedged keys, key length and the longest option were checked for every question.

## Verdicts, one row per question

| SAMP | Q | Verdict | Finding and change |
|---|---|---|---|
| abuse-domestic-30 | q1 | fixed (minor) | Key (lock-box) confirmed. PHIPA s.20(2), 37(1)(a) and 38(1)(a) let a patient lock her record from a class of agents, and s.40(1) is the bodily harm exception. The distractor reason "care without a record is not an option" was only an assertion. It now says a physician must keep a record of every encounter. |
| abuse-domestic-30 | q2 | fixed | The explanation said "She has not mentioned any facial injury", but the stem never says this. The stem now says she fell against the kitchen counter, which explains the ribs but not a face bruise. The keyed option "Healing bruise on the cheekbone" was the longest option and the only one with a qualifier. It is now "Bruise over the cheekbone". Wu 2010 confirmed: unwitnessed head, neck and face injuries OR 24, extremity injuries OR 0.51 and 0.15, and chest injuries nonspecific (OR 1.07). The explanation now adds the chest finding. |
| abuse-domestic-30 | q3 | pass | Pet-friendly shelter through social work is the single best answer once the update says she will not leave without the dog. Barrett 2020 confirmed: 86 women in Canadian shelters, and it names the barriers women with pets face in leaving. |
| abuse-domestic-30 | stem | fixed | The story "tripped on the stairs, delayed visit" echoed the signed cluster abuse-domestic-01, -02 and msk-04 (fall down the stairs). The mechanism is now a trip in the kitchen against the counter. The title is now "Rib pain after a trip at home". The keyed decisions never overlapped. |
| anaphylaxis-25 | q1 | pass | ANZAAG 2022 grade 3: 50 to 100 mcg IV, escalating to 200 mcg. 100 mcg is 1.2 mcg/kg at 85 kg. It is the only epinephrine option, so it is the single best answer even though RCUK and AAGBI start at 50 mcg. WAO 2020 and JTF 2020/2023 prefer IM in general settings and keep IV boluses for experienced clinicians with monitoring. This intubated, monitored ED patient fits that exception. IM is not offered, so no guideline makes another option better. Sugammadex "not recommended" is confirmed. |
| anaphylaxis-25 | q2 | pass | Compressions below a systolic of 50 mmHg are confirmed in ANZAAG 2022 (from NAP6, endorsed by ISPAR, RCUK and AAGBI). The claim that pulse palpation is unreliable is in the source. |
| anaphylaxis-25 | q3 | fixed | **Mock-mode cue.** The update read "After a short period of compressions, two further IV boluses of epinephrine 200 mcg". This gave away the q2 key (compressions) and the q1 key (epinephrine). It also put "200 mcg" next to the phenylephrine 200 mcg distractor. The update now reads "With further resuscitation, including two more IV boluses of the first-line drug at a higher dose". The explanation names epinephrine. The key (epinephrine infusion after three boluses) is confirmed in ANZAAG 5.5.8.3. |
| anaphylaxis-25 | q4 | fixed | "On the infusion his blood pressure is stable" hinted that the q3 key was an infusion. It is now "His blood pressure is now stable." The key "salbutamol 1.2 mg by inline MDI" was the longest option, at 1.32 times the mean distractor. It is now "salbutamol 1.2 mg by MDI". 12 puffs of 0.1 mg is confirmed in ANZAAG. |
| anaphylaxis-25 | stem | fixed (minor) | "The seizure activity has stopped" after rocuronium could teach that seizures have ended. Paralysis only hides them. The stem now reads "Paralysis has stopped the visible seizure activity." |
| anaphylaxis-36 | q1 | pass | WAO 2020 criterion 2 is confirmed: laryngeal involvement or hypotension after a highly probable allergen, even without skin signs. Skin signs are absent in 10 to 20% (WAO text). An SBP of 86 mmHg is below 90 mmHg. The teaching point is shared with anaphylaxis-35 and older items, because it is key feature 2 itself. The story differs. |
| anaphylaxis-36 | q2 | pass | 0.01 mg/kg to a maximum of 0.5 mg (78 kg gives 0.5 mg), repeated every 5 to 15 minutes, is confirmed in WAO. |
| anaphylaxis-36 | q3 | pass | Ribeiro 2018 is confirmed: insect and crustacean cross-reactivity is clinically relevant, likely through tropomyosin and arginine kinase. Mealworm is the only arthropod option. |
| anaphylaxis-36 | q4 | pass | Schabelman 2010 is confirmed: iodine is not an allergen, and seafood allergy carries the same contrast risk as other allergies or asthma. The key is a plain statement, not a hedged one. It is the only option that is not an action, which is a mild structural outlier. I left it. |
| anaphylaxis-42 | q1 | pass | 0.5 mg IM is confirmed (60 kg gives 0.6 mg, capped at 0.5 mg). 0.3 mg is weaker but not wrong in a way that competes in an ED with ampoules. |
| anaphylaxis-42 | q2 | pass | The Canadian EpiPen PM (last revised May 30, 2017) is confirmed. It says to grasp the device in a fist with the orange tip down, never put a thumb over the orange tip, inject into the middle of the outer thigh, and inject through clothing if needed. The stem's "held it upside down" makes q2 easy, but it does not cue an earlier key. |
| anaphylaxis-42 | q3 | pass | NUT CRACKER (Elizur 2018) is confirmed. Two thirds of cashew-allergic patients were pistachio-allergic. All pistachio-allergic patients were cashew-allergic. Most other co-allergy was below 30%. The pecan and walnut pairing is correct. |
| anaphylaxis-44 | q1 | pass | Maloney 2006 is confirmed. No participant had detectable Ara h 1 several hours after a peanut-free meal. All the interventions reduced it, but about 40% of samples stayed detectable. The authors advise waiting a few hours plus a peanut-free meal. Total avoidance by the partner is not offered, so the key is the single best answer among the options. |
| anaphylaxis-44 | q2 | fixed | **Hedged-key cue.** The key "Touch may cause local hives only" was the only limited, hedged statement. The two other statements overclaimed ("can close her throat", "can cause anaphylaxis"). "Airborne peanut can close her throat" repeated the smell distractor, so it was replaced by a hedged but wrong distractor, "Skin contact may trigger wheezing" (Simonte: no respiratory reactions). The explanation said "A few had redness, itch or a wheal", but Simonte reports 10 of 30. It now says "Ten". The exposure is now described exactly: pressed 1 minute, held 30 cm from the face for 10 minutes. The key stays at index 3. |
| anaphylaxis-44 | q3 | pass | Caregiver autoinjector training and giving epinephrine without delay are consistent with JTF 2023. |

## Overlap summary

- abuse-domestic-30: no lock-box, colleague-patient or pet barrier elsewhere in the bank. The stairs mechanism was moved away from the signed "fall down the stairs" cluster.
- anaphylaxis-25: the only perioperative or RSI-drug anaphylaxis in the bank. q3 keys an epinephrine infusion, which is also keyed in the signed refractory anaphylaxis cluster (anaphylaxis-01, -02, -15, asthma-copd-13, shock-07, sob-15). Only that one decision is shared. The trigger, setting and other three keys differ, so it is not a copy.
- anaphylaxis-36, -42, -44: no copy found. anaphylaxis-27 has "Avoid all seafood and iodine" as a distractor and tests autoinjector hold time. These are adjacent points, not the same keyed decision.

## Checks

- `SAMP_BATCH=s20 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 488 passed.
- `SAMP_BATCH=s23 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 679 passed.
- `npx tsc --noEmit -p .`: no errors.

## Summary

Five SAMPs, 17 questions. Pass: anaphylaxis-36 and anaphylaxis-42. Fixed: abuse-domestic-30, anaphylaxis-25 and anaphylaxis-44. None was re-rebuilt. No key changes.

## For the physician

- anaphylaxis-25 uses ANZAAG 2022 perioperative doses in an ED RSI. The ED push-dose habit is 10 to 20 mcg, and RCUK and AAGBI start grade 3 at 50 mcg, so 100 mcg is at the top of ANZAAG's range. The key holds because it is the only epinephrine option. Please confirm you accept 100 mcg as the keyed figure, or change it to 50 mcg. Please also confirm the compression threshold of a systolic below 50 mmHg with a pulse present for an ED audience.
- anaphylaxis-25 q3 now describes the earlier boluses as "the first-line drug" to avoid naming the q1 key in mock mode. Please confirm this wording reads naturally.
- anaphylaxis-42 cites the 2017 EpiPen PM. The current Canadian monograph may be under a later revision by the current sponsor. The grip wording is long-standing.
- abuse-domestic-30 q1 is an Ontario statute item (PHIPA lock-box). The stem names Ontario.
- anaphylaxis-44 q2 applies a paediatric challenge study (Simonte 2003) to an adult. The explanation says this.
