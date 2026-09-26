# Review of signed-duplicate rebuilds, round 2, label r2k

Reviewer: independent, read only. Nothing was edited and nothing was committed. Every fix below is for a writer, and a revised text needs a fresh review.

Inputs: `scratchpad/signed-rebuild-review-brief.md`, `docs/reviews/REVIEW-RULES.md`, the writer brief, the writer report `docs/reviews/signed-rebuild-r2k.md` (read as it is now), the round 1 review `signed-rebuild-g11-review.md`, the second look `signed-rebuild-second-look.md`, and the round 2 packets for lacerations-03, 04 and 08.

## Summary

| Id | Verdict | Reason |
|---|---|---|
| lacerations-03 | PASS | The Seymour fracture story is new. No keyed decision repeats keeper msk-09 or the signed bank. The keeper's answers score 1/2 at best. The source is opened and says what is claimed. One point for the physician on q4. |
| lacerations-04 | FAIL, fixable in scope | Story, keys, Imvamune dose and timing, and the PHAC work rules are correct. There is no mpox anywhere else in the current bank. q3 match phrases miss natural negated answers, and the q4 prompt refers to a history she does not have. These are match-phrase and wording fixes. No re-key is needed. |
| lacerations-08 | FAIL, needs a re-key | q4 lets the signed decision set of lacerations-02 q2 and lacerations-07 q1 and q2 (debride, image, leave open or delay closure for a high-risk wound) score 3/3. That is an undeclared D1 repeat, and the narrow match list that hides it also zeroes correct answers. q3 gives full marks for restating its own update. q2 and q3 zero or penalize correct answers. The q4 explanation misreads Clark 2007. |
| first-trimester-bleeding-15 | Confirmed equal to HEAD | `git diff --quiet HEAD -- src/samps/s10/first-trimester-bleeding.ts` is clean. The whole file is byte-identical. |
| multiple-patients-06 | Confirmed equal to HEAD | `git diff --quiet HEAD -- src/samps/s13/multiple-patients.ts` is clean. The whole file is byte-identical, including `S.salt` and `S.eddleston`. |
| multiple-patients-15 | Confirmed equal to HEAD | Same file, same check. |
| lacerations-05 | Confirmed equal to HEAD | Neither diff hunk in lacerations.ts touches it. The first hunk ends at its `id` line as context, and the next hunk starts at lacerations-08. |

## Diff scope (lacerations.ts)

`git diff HEAD -- src/samps/s13/lacerations.ts` touches only:
- the lacerations-03, 04 and 08 blocks.
- eight new source constants (`seymour`, `phacMpox`, `naciImvamune`, `mmwrMpox`, `anzcorMarine`, `clarkStingray`, `dwekMotoro`, `mdpiHwi`), each used by these blocks.
- the removal of the `asra` constant. It was used only by the old lacerations-08, and nothing in the file references `S.asra` now. `asraLast` carries the same `asra-last` id and stays. This is an unrequested change. On its merits it is a correct cleanup of a dead constant, so it is accepted.

Structure: each of the three keeps its id, topic, alsoTopics, question count, and each question's kind and keyFeature. Each has `version: 2` and `reviewed: false` after `...META`. All three are in `src/samps/held-back/r2k.json`. Titles are neutral. House style: no em or en dashes and no semicolons in any of the three blocks.

## lacerations-03 (Seymour fracture, cluster 68, keeper msk-09)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Lac KF 1. The review (Ross 2026, `r2k/ross.txt`) supports each item: presume Seymour in a skeletally immature patient with a mallet-type deformity and nail fold bleeding, crush or axial load mechanism, and 6.9% vs 76.5% infection for antibiotics within vs after 24 h. Keeper answer "Small wound over the knuckle / Dominant hand / Delayed presentation" = 0/2. "Open growth plate / Blood at the nail base" = 2/2. "Salter-Harris fracture / Bleeding from under the cuticle" = 2/2. |
| q2 | PASS | Msk KF 6. Signs match the review word for word: nail fold bleeding, subungual hematoma, lengthened lunula, nail plate superficial to the eponychial fold, nail bed laceration. The keeper's fight-bite assessment scores 0/2. msk-11 q4 has "distal phalanx fracture with a nail bed laceration" as one of 7 items. Here a second nail-unit sign is needed, so that one line scores only 1/2. Natural wording scores ("Nail avulsed out of the fold / Subungual hematoma" = 2/2). |
| q3 | PASS | Lac KF 4. Oral cephalexin is named in the review, and "antibiotics are not routinely prescribed for a closed mallet finger but are recommended for Seymour fractures" is quoted correctly. This is close to the generic open-fracture rule (msk-08 q4, cefazolin ASAP). But the decision tested here is that a mallet-looking finger needs antibiotics at all, against conditional or topical options. I do not count it as a repeat. Options are alphabetical and the key is not the longest (24 to 38 characters, ratio 1.58). |
| q4 | PASS, physician note | Msk KF 7. Round 1 failed this question for repeating msk-09 q3 (urgent hand surgery washout). That is gone. "Urgent hand surgery for operative washout and IV antibiotics" = 1/2. "Urgent hand surgery consult / Irrigation and debridement / Reduction and K wire" = 1/2, because irrigation, reduction and pinning all fall in the one `surgery` item. Full marks need a Seymour step: nail plate removal, freeing trapped matrix, or nail bed repair with a stent. **Hand surgery framing.** The review says: "If, after debridement and reduction, the fracture is stable and the soft-tissue injury is limited, definitive treatment in the emergency department with splint immobilization and close follow-up may be sufficient." It also says "obvious proximal nail-fold violation ... may also lower the threshold for operative exploration". This child has a nail plate on the fold. The scoring does not force a referral: an ED-only plan scores full marks ("Remove the nail plate / Extract the trapped germinal matrix" = 2/2, and "Digital block then remove the nail plate / Repair the nail bed and replace the nail under the fold" = 2/2). The explanation's "so hand surgery is involved today" is defensible on the nail-fold violation. Optional wording for the writer: add that a stable reduction after debridement can be completed in the ED. |

No D1 repeat. Simcheck (rerun) top 5: analgesia-sedation-44 0.27/0.13, msk-31 0.23/0.09, msk-16 0.13/0.18, lacerations-30 0.18/0.15, msk-11 0.14/0.17. This matches the writer's table, and no hit is above 0.30. No nail plate, germinal matrix or Seymour key is anywhere else in allkeys.tsv or src/samps.

## lacerations-04 (mpox sharps injury, cluster 66, keeper infectious-diseases-09)

**Mpox across the bank.** A grep of every current src/samps file (working tree) for mpox, monkeypox, Imvamune, tecovirimat, vaccinia and Jynneos finds only this SAMP. allkeys.tsv has no match either. The `cigMpox` and `phacMpox` constants that infectious-diseases-02 used before its rebuild (HEAD~3) are gone. Among other writers' scratch work, only the old round 1 infectious-diseases-02 drafts in `scratchpad/g13` mention mpox, and that text is no longer in the bank. There is no convergence.

**Imvamune dose and timing** (NACI, CCDR 2025, `r2k/naci2.txt` table, opened): post-exposure dose 1 is 0.5 mL SC "within 4 days since exposure, can be considered up to 14 days". Dose 2 is 0.5 mL SC "≥28 days after dose 1 if MPXV infection did not develop". "Dose sparing strategies involving intradermal administration are not recommended in the context of routine immunization". PEP is not indicated with current or past infection. All of these match the q2 key, its distractors and its explanation, and the q3 `dose2` item.

**Work rules** (PHAC IPAC, November 2024, fetched today). Sharps injuries during care of an mpox patient are a higher-risk exposure. The worker may continue working while monitoring for symptoms, with a medical mask at all times while working. Monitoring lasts 21 days. After a higher-risk exposure, screening is active, once a day with Occupational Health and before any shift. The worker should not care for immunosuppressed, pregnant or labouring patients, or children under 12, for 21 days. If symptoms appear, the worker stops work and reports to Occupational Health and Public Health. The page says higher-risk exposures "should be discussed with Public Health authorities and considered for post-exposure prophylaxis". All of these match q3.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Lac KF 1. PHAC names this exact sharps exposure as higher risk. The keeper's bat questions score 1/2 at best ("saliva ... broken skin"). "Percutaneous injury / Never vaccinated" = 2/2. |
| q2 | PASS | ID KF 10. The key is the single best answer. Options follow the order rule ("No ..." last) and length rule (25 to 34 characters). The key is not the longest. Tecovirimat 600 mg PO BID is the correct adult treatment dose, and it is correctly framed as treatment, not NACI prophylaxis. No keeper decision (RIG and rabies vaccine) is present. |
| q3 | FAIL, fixable in scope (match phrases) | ID KF 10. Keys and sources are correct, and the round 1 keeper repeat (RIG 20 IU/kg, days 0, 3, 7, 14) is gone. The keeper's immunosuppression answer "Consult infectious diseases or public health / Check antibody titres / Fifth dose" = 1/3. "Home quarantine" is flagged unacceptable. Natural negated answers miss: "Do not work with immunocompromised patients" = 0, "Does not need to be off work" = 0, "Stay home if symptoms develop" = 0. Fix: add phrases such as "work with immunocompromised", "work with pregnant", "not need to be off work", "no need to stay off work", "stay home" and "stay off work if". Recheck with markQuestion that "Quarantine at home for 21 days" stays unacceptable. |
| q4 | FAIL, fixable in scope (wording) | ID KF 3. The CDC MMWR 2023 risk groups (immunocompromise, pregnancy, atopic dermatitis or eczema, extensive skin barrier disease) are correct. The keeper answer scores 1/2. But the prompt "Which conditions in her history would raise her risk" asks about a history the stem never gives. She is described only as unvaccinated. Reword, for example "Which conditions, if present, would raise her risk of severe mpox?". Minor: "Young children" scores 0 although NACI lists young children. That is fair, because she is an adult asking about herself. |

No D1 repeat. Simcheck top 5: infectious-diseases-42 0.06/0.15, infectious-diseases-39 0.11/0.06, pediatric-fever-40 0.11/0.09, infectious-diseases-09 0.08/0.10, lacerations-13 0.09/0.09. The bloodborne needlestick answer (infectious-diseases-08) scores 1/3 on q3 ("Report to employee health / HIV and hepatitis B PEP / Bloodwork baseline").

## lacerations-08 (freshwater stingray, cluster 27, keeper analgesia-sedation-04)

**Evidence base.**
- Clark 2007 (PubMed 17630073, abstract fetched today): 88% of those given hot water alone had complete relief within 30 minutes without other analgesic, and there were no thermal burns. Infections followed when prophylactic antibiotics were withheld. "Although stingray barbs can be radio-opaque, radiography in our series failed to detect barbs or other foreign bodies ... although no barbs or other stinger material were found on inspection of wounds."
- ANZCOR 9.4.7 (`r2k/anzcor947.txt`): hot water no hotter than the rescuer can comfortably tolerate. Do not use pressure immobilisation. Spine fragments may remain and need surgical removal. Venom-induced tissue death.
- Dwek 2026 (`r2k/dwek.txt`): debridement, antibiotics against gram positive (cephalexin) and gram negative (ciprofloxacin) organisms "used routinely", and a high rate of ulcerative and necrotic lesions.
- Niznik 2024: up to 45°C.

The base is case series, a case report with review, and a first aid guideline. It is adequate for q1 to q3. No Canadian guideline exists.

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Analgesia KF 2. Hot water is keyed nowhere else, and the keeper's lidocaine maximum is absent. Options are alphabetical, with similar lengths (27 to 33 characters). Mixed spelling ("immobilization" in the option, "immobilisation" in explanations) should be made consistent. |
| q2 | FAIL, fixable in scope (match phrases) | Analgesia KF 2. The key is sound and the keeper lipid line scores only 1/2. But the core source statement scores 0 when phrased as a limit: "No hotter than 45 degrees" = 0, "Do not exceed 45 C" = 0, "Not above 45" = 0, "Water no more than 45 C to avoid burns" = 0, "Hot but not scalding" = 0. The unacceptable phrases "hotter than 45" and "above 45" collide with the negated correct answer. Fix: make the unacceptable phrases affirmative only ("as hot as possible", "boiling", "hotter than tolerable") and add "no hotter", "not exceed", "no more than 45" and "not scald" to the `limit` item. |
| q3 | FAIL, needs a restructured accept list | Tox KF 4. (a) The update says the bandage and ice pack were taken off and asks why, and restating the update scores full marks: "Remove the tight bandage / Take off the ice" = 2/2. (b) The `noice` item re-keys q1's decision (heat, not cold) inside the same SAMP. (c) Correct answers are penalized: "Leave the bandage off" is flagged unacceptable by "leave the bandage", "Keep the bandage off, venom is local" is flagged by "keep the bandage", and "Stop the ice" and "Ice worsens pain, use heat" score 0. Removing `noice` and rewording the update changes the accept list, so under landing rule 2 this goes back to the writer. |
| q4 | FAIL, D1 repeat, needs a re-key | Lac KF 3. **Repeat.** Signed lacerations-02 q2 keys "Debride devitalized tissue / Leave the hand wounds open or loosely approximated / Hand radiograph". Signed lacerations-07 q1 and q2 key "Sharp debridement of devitalized tissue / Remove foreign material and explore the wound / Radiograph for retained metal / Packing, delayed primary closure". Both are for the same reason, a contaminated high-risk wound. Here "Debride dead tissue / Leave open / X-ray" = 3/3, and "Ultrasound for retained barb / Debride nonviable edges / Delayed primary closure" = 3/3. The writer's probe used the signed texts verbatim (1/3). That only works because the match list omits "devitalized", "explore" and "foreign body", and so it also zeroes correct answers: "Sharp debridement of devitalized tissue" = 0, "Explore the wound for foreign body" = 0. Adding them would make the repeat plain. The writer reports zero repeats, and D1 is at 19 of a frozen 20. Round 1 already listed this decision as lacerations-08's D1 repeat. **Closure key.** No opened source states a closure rule for stingray wounds. Dwek, Clark and ANZCOR do not. The `open` item and the unacceptable "Tight primary closure now" rest only on the wording of lacerations KF 3. **Clark misread.** The explanation says Clark's radiographs "found no retained material, so imaging alone does not clear the wound". Clark also found no barbs on inspection, so the series does not show a radiographic miss. That sentence must be corrected. |

Simcheck top 5: lacerations-07 0.15/0.11 (the repeat above), lacerations-16 0.07/0.12, burns-35 0.10/0.12, pediatric-fever-34 0.11/0.09, lacerations-34 0.11/0.11.

## Tests

`SAMP_BATCH=s13 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` (run once): 464 passed, 2 failed.
- multiple-patients-06 and multiple-patients-15 fail "is marked reviewed only if a physician signed it off". Both are listed in r2k.json but now hold signed HEAD text with `reviewed: true`. Removing them from r2k.json should clear it. first-trimester-bleeding-15 has the same cause in s10 (writer's report, not rerun here). This is not the reviewer's to fix.
- All lacerations tests and the batch quality gates pass.

I ran markQuestion probes from `scratchpad/r2krev/probe*.ts` with vite-node, without writing anything to tests/. No command was refused.

## Unrequested writer changes

- Removal of the unused `asra` constant: accepted (see diff scope).
- New vitals lines on all three: accepted. They are consistent with each story.
- Earlier HEAD restore of multiple-patients.ts by `git checkout`: the file now equals HEAD byte for byte, so nothing of another writer's was lost there. Accepted.
- The writer tried to edit r2k.json, and the edit was refused and not retried. Nothing to judge.

## For the physician

- **lacerations-03 q4.** The source allows definitive ED care after debridement when the reduction is stable. The key does not require a hand surgery referral: an ED-only plan of nail removal, freeing trapped matrix and nail bed repair scores full marks. The explanation says hand surgery is involved today because the nail plate lies on the fold, which the review says lowers the threshold for operative care. Please confirm that suits your practice.
- **lacerations-03 q3.** It is oral cephalexin from today. The source is a single 2026 narrative review of mostly retrospective data.
- **lacerations-04.** The work rules are PHAC IPAC November 2024. Provincial occupational health policy may be stricter, for example about work exclusion. The Imvamune schedule matches NACI 2025.
- **lacerations-08.** It goes back to the writer. If it is rebuilt, q4 needs a keyed decision other than debride, image and leave open, and any closure item needs an opened source.
- **first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15** keep their signed text. Their r2k.json entries should be removed by the coordinator.

## Landing decision

- lacerations-03 can land.
- lacerations-04 goes back for in-scope fixes: q3 match phrases and q4 prompt wording. After the fixes it needs a fresh review before it lands.
- lacerations-08 fails and keeps its signed text.
- lacerations-05, first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15 equal HEAD.

## Landing decision

lacerations-03 lands. It needs no D1 repeat. lacerations-04 and lacerations-08 failed review and keep their signed text. first-trimester-bleeding-15, multiple-patients-06 and multiple-patients-15 are "cannot" and go to Arjan, and their files are unchanged.
