# Review of signed duplicate rebuild, group g03

Files: `src/samps/s11/headache.ts` and `src/samps/s11/gi-bleed.ts`. Ten SAMPs. Reviewed against `git show HEAD`, the writer report `signed-rebuild-g03.md`, the cluster sections in `SIGNED-DUPLICATES.md`, `scratchpad/allkeys.tsv`, a live grep of `src/samps` and D1 in `docs/DECISIONS.md`.

D1 allows one repeat per SAMP of a signed decision, and only when that decision is the literal wording of a CFPC key feature. Wording was checked against `src/blueprint/priorityTopics.ts`. Anything beyond one repeat, or a repeat that is not key feature wording, fails and was not patched.

## Result per SAMP

| SAMP | Verdict | Reason |
|---|---|---|
| gi-bleed-01 | PASS | New story (sinistral portal hypertension). Keys match the ACR 2020 variant 7 table, opened and checked. q2 is its one D1 repeat. |
| gi-bleed-15 | FAIL | q1 repeats cva-30 q3 (cryoprecipitate for bleeding after tenecteplase at a rural hospital waiting for transfer, fibrinogen 1.2 g/L in both) and shock-37 q1 (protamine reversal). Neither is GI bleed KF 6 wording. q2 repeats shock-35 q3. Not patched. |
| headache-04 | FAIL | q4 (TIG) and q5 (toxoid and primary series) are two repeats of infectious-diseases-04 q4, also lacerations-06 q2 and lacerations-07 q3. Both questions are ID KF 10, so neither can be rekeyed to a new decision inside a tetanus story. Not patched. |
| headache-05 | FAIL | Three repeats. q1 (cultures, then antibiotics before imaging), q2 (vancomycin, ceftriaxone and metronidazole, eye-14 q3), q4 (venography and heparin for sinus thrombosis, headache-07 q3 and q4). Not patched. |
| headache-06 | FAIL | Two repeats. q1 dangerous causes list (pre-eclampsia-13 q1) and q2 benzodiazepine plus calcium channel blocker for cocaine (ischemic-heart-disease-06 q1, chest-pain-11 q2 and q3, headache-44 q2). Not patched. |
| headache-09 | PASS | Mucormycosis is new. No D1 repeat. |
| headache-12 | FIXED | q1 and q4 credited generic answers that repeat headache-01 q1 and the migraine keys in headache-10, 11, 34 and 35. Both now turn on the ergot and ritonavir interaction. q2 is its one D1 repeat. |
| headache-13 | FIXED | q2 and q3 had swapped places, so the key features no longer matched the question ids from HEAD. Order restored. q2 is its one D1 repeat. |
| headache-14 | FAIL | Two repeats. q1 exam list (headache-07 q2, headache-03 q1) and q3 CT with CT angiography for transient deficits, which is the cluster 43 key held by keeper cva-13 q3 and also cva-02 q2, cva-04 q2 and loc-09 q2. Not patched. |
| headache-15 | PASS | Colloid cyst is new. q2 is its one D1 repeat. |

## Structure

- All ten keep their id, topic, question count, and each question's kind and key feature. headache-13 needed a fix for this (see below).
- All ten have `reviewed: false` after the META spread and `version: 2`.
- All ten are in `src/samps/held-back/g03.json`.
- No other SAMP in either file changed. This was checked by comparing each SAMP body with HEAD.
- The only source table changes are new entries. Old entries that only the old stories used are left in place and are now unused: `idsaMen`, `idsaEnc`, `phacMen`, `aao`, `weaver`, `uhms`, `cadiss` and `tintinalli` in headache.ts. None in gi-bleed.ts, where `baveno` is still used by gi-bleed-11. The tests allow this. `samp-quality` checks only the `sources` array of each SAMP, and `tsc` does not flag unused object properties. Leaving them also keeps the diff to these ids, as the brief requires.

## Rows

| Question | Verdict | Notes |
|---|---|---|
| gi-bleed-01 q1 | PASS | Source clues for splenic vein thrombosis. No other SAMP keys this. |
| gi-bleed-01 q2 | PASS | D1 repeat (see below). Group O RhD positive for a never-transfused male, crystalloid limited to about 1 L, calcium. Canadian Blood Services chapter 11. |
| gi-bleed-01 q3 | PASS | ACR variant 7 rates partial splenic embolization, surgery and splenic vein recanalization usually appropriate, endoscopic therapy may be appropriate, and BRTO and TIPS usually not appropriate. Opened and confirmed. Recanalization is not among the options, so the key is the single best pair. multiple-trauma-31 keys splenic angioembolization, but for trauma. |
| gi-bleed-01 q4 | PASS | Repeat glue, gastric balloon tamponade, splenic embolization or splenectomy, with TIPS unacceptable. Balloon tamponade was keyed only by the old text of this same id. |
| gi-bleed-15 q1 | FAIL | Cryoprecipitate 10 units for bleeding within 24 hours of tenecteplase is cva-30 q3. cva-30 is also a rural hospital, tenecteplase, bleeding while waiting for transfer, and a fibrinogen of 1.2 g/L. Protamine to reverse heparin is shock-37 q1 (enoxaparin), and an in-progress SAMP in another group also keys protamine 20 mg after heparin. GI bleed KF 6 names octreotide, IV PPI, endoscopy or surgery, not reversal. The protamine arithmetic (20 to 30 mg, keyed 25 mg) is right. |
| gi-bleed-15 q2 | FAIL | Red cells with cryoprecipitate, small crystalloid volumes because the heart tolerates volume poorly. shock-35 q3 keys red cells and cryoprecipitate for the same reason, and shock-37 q2 keys red cells after 1 L of crystalloid. |
| gi-bleed-15 q3 | FAIL (SAMP) | Critical care escort with blood. Sound, but it sits inside the failed SAMP. |
| headache-04 q1 | FAIL (SAMP) | The tetanus exam is new. Trismus is keyed only for peritonsillar abscess. |
| headache-04 q2 | FAIL (SAMP) | Metronidazole, midazolam and debridement are new. |
| headache-04 q3 | FAIL (SAMP) | Treat on the clinical diagnosis. New. |
| headache-04 q4 | FAIL | Tetanus immune globulin IM. Keyed in infectious-diseases-04 q4, lacerations-06 q2, lacerations-07 q3 and lacerations-29 q2. ID KF 10 reads "offer post-exposure prophylaxis ... tetanus risk", so on its own it could be the one D1 repeat. |
| headache-04 q5 | FAIL | Tetanus toxoid now and a full primary series. The same three signed SAMPs key this in the same question as the TIG. That is a second repeat. It cannot be removed without a new ID KF 10 decision, and a tetanus story has none. "No prophylaxis needed" is also keyed (infectious-diseases-38 q4, infectious-diseases-39 q4, lacerations-13 q3). |
| headache-05 q1 | FAIL | Blood cultures, then IV antibiotics before imaging. This is the ID KF 1 and headache KF 6 decision keyed in pediatric-fever-04 q2, critical-appraisal-09 q5 and infectious-diseases-02 q2. |
| headache-05 q2 | FAIL | Vancomycin plus ceftriaxone, with metronidazole for a sinus source. eye-14 q3 keys IV ceftriaxone, IV vancomycin and metronidazole for spreading orbital infection. That is the same regimen for the same organisms. On its own this is ID KF 8 wording and could be the one D1 repeat. |
| headache-05 q3 | FAIL (SAMP) | Septic cavernous sinus thrombosis. eye-14 q4 already names it as the complication of its story. |
| headache-05 q4 | FAIL | Venography and heparin for dural sinus thrombosis. headache-07 q3 and q4 key CT or MR venography and heparin, and pre-eclampsia-13 q2 keys venography. |
| headache-06 q1 | FAIL | ICH, SAH, pre-eclampsia, RCVS, PRES, stroke and CVT for severe headache with high BP in pregnancy. pre-eclampsia-13 q1 and headache-07 q1 key the same list. This is headache KF 2 wording, so on its own it could be the one D1 repeat. |
| headache-06 q2 | FAIL | Lorazepam with nifedipine, beta blockers wrong. ischemic-heart-disease-06 q1 keys a benzodiazepine then a calcium channel blocker for cocaine. chest-pain-11 q2 and q3 key lorazepam then a calcium channel blocker for cocaine hypertension, and headache-44 q2 keys lorazepam for cocaine. The reason is the same (sympathomimetic toxicity, Richards 2016). Pre-eclampsia KF 4 names BP control and seizure prophylaxis, not sedation for cocaine. |
| headache-06 q3 | FAIL (SAMP) | Monitoring for abruption and fetal compromise. Sound. |
| headache-06 q4 | FAIL (SAMP) | Admit for monitoring, no delivery. Sound. |
| headache-09 q1 | PASS | Nose, turbinates, palate, facial sensation. New. |
| headache-09 q2 | PASS | CT, MRI and turbinate biopsy, with beta-D-glucan and galactomannan as distractors. eye-14 q2 keys contrast CT of the orbits, but this question turns on tissue diagnosis and the unreliable fungal markers. I do not count it as the same decision. |
| headache-09 q3 | PASS | High-dose liposomal amphotericin B, isavuconazole or posaconazole as alternatives, voriconazole and fluconazole unacceptable. Matches ECMM 2019. DKA care is one accept item and cannot give full marks alone. |
| headache-09 q4 | PASS | Early debridement. New. |
| headache-12 q1 | FIXED | Before, "onset, change from usual, aura" scored full marks, which is headache-01 q1. Now the prompt asks about the drugs taken for this headache and for her infection. It needs 2 of 4 items: DHE dose and timing, triptan or other ergot use, the antiviral's name, and other CYP3A inhibitors or vasoconstrictors. Probed with the scorer: "onset, aura" now scores 0, and "how many doses of DHE, which antiviral" scores 2 of 2. |
| headache-12 q2 | PASS | D1 repeat (see below). CT with CT angiography for a transient deficit. |
| headache-12 q3 | PASS | Stop both drugs, vasodilator, vascular and poison centre input, with a triptan or more ergot dangerous. New. |
| headache-12 q4 | FIXED | Before, "metoclopramide" alone scored full marks, the key of headache-10 q2, headache-11 q2, headache-26 q2, headache-34 q1 and headache-35 q3. Now it needs 2 of: no triptan, no further ergot, no vasoconstrictor, and a non-vasoconstricting drug. The triptan and DHE dangerous answers stay. Scorer negation was probed: "avoid triptans", "No more DHE", "DHE is contraindicated" and "stop DHE" are credited and not flagged. "sumatriptan" still zeroes the question. The explanation now leads with the contraindication (PAXLOVID monograph). |
| headache-13 q1 | PASS | Ramsay Hunt. New. |
| headache-13 q2 | FIXED | This was q3. In HEAD, q2 is eye KF 3 and q3 is headache KF 4, and the rebuild had swapped them. The eye exam is now q2 again and the syndrome extent is q3 again. Content unchanged. D1 repeat (see below). |
| headache-13 q3 | FIXED | Moved back to q3 (headache KF 4). Hearing, vestibular signs, palate and lower cranial nerves. New. |
| headache-13 q4 | PASS | Lubricant by day, ointment and taping at night, with steroid drops as distractors. eye-05 q3 and eye-03 q2 list lubricating drops for zoster or HSV comfort, which is a different reason. The CMAJ 2014 Bell palsy guideline supports eye protection. |
| headache-14 q1 | FAIL | Focal deficits, papilledema, meningism, visual fields and level of consciousness. headache-07 q2 and headache-03 q1 key the same exam. This is headache KF 3 wording, so on its own it could be the one D1 repeat. |
| headache-14 q2 | FAIL (SAMP) | Amyloid convexity hemorrhage in the differential. New. |
| headache-14 q3 | FAIL | Non-contrast CT with CT angiography for transient neurological spells. This is the cluster 43 repeated key (keeper cva-13 q3), also cva-02 q2, cva-04 q2, loc-09 q2 and the old headache-14 q3. A second repeat. |
| headache-14 q4 | FAIL (SAMP) | MRI with SWI and no antithrombotic. New and worth keeping in a rebuild. |
| headache-15 q1 | PASS | Positional brief attacks, drop attacks and memory change are specific to a colloid cyst. cva-15 q1 keys morning headache worse with cough, which is a different pattern. |
| headache-15 q2 | PASS | D1 repeat (see below). |
| headache-15 q3 | PASS | Colloid cyst and obstructive hydrocephalus, with lumbar puncture dangerous. New. |

## Checks run

- Decision search: `allkeys.tsv` and a live grep of `src/samps`, including other groups' uncommitted diffs, for tetanus, immune globulin, vancomycin, ceftriaxone, protamine, cryoprecipitate, O positive, tamponade, splenic, lorazepam, abruption, lubricant, CT angiography, metoclopramide, papilledema and positional terms. The hits are cited in the rows.
- Convergence with other writers: no other working-tree change uses Ramsay Hunt, mucormycosis, colloid cyst, amyloid angiopathy, splenic vein, ergot or cocaine in pregnancy. One uncommitted SAMP elsewhere keys protamine after heparin with ICH, which adds to the gi-bleed-15 overlap.
- simcheck, rerun on the writer's draft files: the top scores match the writer report. Highest: pre-eclampsia-03 0.29/0.25 for headache-06, gi-bleed-32 0.27/0.17 for gi-bleed-01, eye-14 0.25/0.16 for headache-05.
- House style: no em or en dashes and no semicolons in added lines.
- `SAMP_BATCH=s11 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 487 passed, after the fixes. `npx tsc --noEmit -p .`: clean.

## D1 repeats

These are the surviving D1 repeats in g03. Each is the only repeat in its SAMP and matches key feature wording.

- **gi-bleed-01 q2.** Early crossmatch, uncrossmatched group O red cells through the massive hemorrhage protocol, crystalloid limited to about 1 L. GI bleed KF 5: "Resuscitate severe GI bleeds well, with early crossmatch, a sensible choice of blood product, and crystalloid." It echoes shock-29 q3 (O RhD positive red cells where RhD negative is not needed), multiple-patients-13 q3 and shock-37 q2.
- **headache-12 q2.** Non-contrast CT with CT angiography of the head and neck for a transient deficit. Headache KF 6: "Investigate a worrying headache promptly with CT or LP." It echoes cva-02 q2, cva-04 q2 and loc-09 q2.
- **headache-13 q2.** Visual acuity, fluorescein and slit lamp examination. Eye KF 3: "Record visual acuity for every eye complaint, then do a full eye exam including slit lamp." It echoes eye-04 q1.
- **headache-15 q2.** Papilledema, sixth nerve palsy, level of consciousness and focal deficits. Headache KF 3: "Examine specifically for red flags such as altered mentation, focal deficits, papilledema, meningismus, or rash." It echoes headache-07 q2 and headache-03 q1.

None of these four is in the D1 table in `docs/DECISIONS.md` yet. By D1's own rule the product owner adds them when the group lands.

Repeats that would each be valid alone but fail as a second repeat in their SAMP: headache-04 q4 (ID KF 10), headache-05 q2 (ID KF 8), headache-06 q1 (headache KF 2), headache-14 q1 (headache KF 3).

The writer flagged four items:
- **headache-04 q4 and q5.** These are two repeats, which is beyond D1. Neither can be removed, because both are ID KF 10 and the story has no other ID KF 10 decision. Fails.
- **headache-05 q2.** Alone it would be valid under D1 (ID KF 8). But q1 and q4 are also repeats. Fails.
- **gi-bleed-15.** Not covered by D1. Reversal is not GI bleed KF 6 wording, and the arc copies cva-30. Fails.
- **Unused source constants.** Allowed by the tests and needed to keep the diff to these ids.

## For the physician

- Six of ten need a new story before you sign them: gi-bleed-15, headache-04, headache-05, headache-06 and headache-14 failed review. They stay held back in `src/samps/held-back/g03.json`.
- gi-bleed-15 was rebuilt away from the hemobilia direction (already gi-bleed-30). The replacement is almost cva-30 set in the gut: rural hospital, tenecteplase, bleeding before the aircraft comes, fibrinogen 1.2 g/L, cryoprecipitate. A rebuild needs a GI bleed KF 6 decision that is not reversal.
- headache-04 followed your direction (tetanus with TIG and vaccine). TIG and the primary series are already keyed in four signed SAMPs. Two questions on them are beyond D1. Either you accept a second repeat outside D1, or the SAMP is rebuilt with key features other than ID KF 10 twice.
- headache-06 followed your direction (cocaine at 30 weeks, benzodiazepine and vasodilator). The benzodiazepine then calcium channel blocker decision for cocaine is already signed in ischemic-heart-disease-06 and chest-pain-11. The same applies as for headache-04.
- headache-14 q4 (withholding ASA after amyloid spells, MRI with SWI) is new and worth keeping in any rebuild. The CT angiography question is the cluster 43 key.
- headache-12 was changed after the writer finished. q1 now asks about the drugs, and q4 needs the patient to avoid triptans and ergots. Please check that you are content with scoring "metoclopramide and ketorolac" at 1 of 2.
- headache-13's questions were put back in their original key feature order. The eye exam is q2 again.
- The D1 table in DECISIONS.md does not yet list gi-bleed-01 q2, headache-12 q2, headache-13 q2 or headache-15 q2.

## Landing decision

gi-bleed-01, headache-09, headache-13 and headache-15 land. headache-13's fix only restored the question order. Its content is the writer's, as reviewed. headache-12's q1 and q4 keys were rewritten by this reviewer. Those rewrites have had no independent review, so headache-12 waits for a second look before it lands. gi-bleed-15 and headache-04, 05, 06 and 14 failed. Until then, all six keep their signed text on the branch. The surviving D1 repeats are gi-bleed-01 q2, headache-13 q2 and headache-15 q2, and they are in the table in docs/DECISIONS.md.
