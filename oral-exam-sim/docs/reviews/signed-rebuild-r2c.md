# Signed duplicate rebuild, round 2, group r2c

Ids: gi-bleed-15 (cluster 20), headache-05 (cluster 63), headache-12 (cluster 7), headache-14 (cluster 43). Files: `src/samps/s11/headache.ts` and `src/samps/s11/gi-bleed.ts`. headache-04 and headache-06 were not touched.

Result: headache-05, headache-12 and headache-14 rebuilt. gi-bleed-15 **cannot** be rebuilt cleanly (see its row). Its working-tree text was left as it was found, as the coordinator directed. It still holds the failed round 1 draft and needs restoring from HEAD by the coordinator.

All three rebuilt SAMPs keep their id, topic, question count, and each question's kind and key feature from HEAD. Each has `...META, reviewed: false, version: 2`. They are in `src/samps/held-back/r2c.json`, which I did not edit. Only these three SAMP blocks changed in headache.ts, plus six new entries in the `S` source table. This was checked block by block against the file as I found it.

## Rows

| Id | Old story (HEAD) | New story | Keyed decisions | Sources opened |
|---|---|---|---|---|
| headache-05 | HSV encephalitis in a 69-year-old on methotrexate and prednisone (round 1: septic cavernous sinus thrombosis, failed) | 63-year-old man who grew up in rural Vietnam, on prednisone 50 mg for 4 weeks for COPD, with diarrhea and worsening wheeze. Gram-negative bacillary meningitis from Strongyloides hyperinfection. Keeper regimen, blood cultures and CT are given in the stem, not keyed | q1 (headache 6, short, 3): source workup for gram-negative bacilli: Strongyloides serology, stool and sputum for larvae, HTLV-1, with urine culture and CXR as partial credit. q2 (ID 8, short, 3): change ceftriaxone to meropenem 2 g q8h for prior ESBL, add ivermectin 200 mcg/kg daily, stop dexamethasone, reduce prednisone. q3 (headache 2, short, 1): Strongyloides hyperinfection as the underlying cause. q4 (headache 6, short, 3): not better at 48 h: repeat LP, MRI with gadolinium or contrast CT, EEG, sodium, repeat blood cultures | Keiser and Nutman, Clin Microbiol Rev 2004 (PMC321465). CDC Clinical care of Strongyloides, 2024. Tunkel IDSA bacterial meningitis 2004 (meropenem 2 g q8h, dexamethasone only for pneumococcus, repeat CSF at 48 h without response). Tunkel IDSA 2017 ventriculitis guideline (MRI with gadolinium and DWI). IDSA 2026 AMR guidance (carbapenem for invasive ESBL-E) was opened but is not cited, because the tests allow one source per question |
| headache-12 | Household carbon monoxide in January (round 1: DHE with ritonavir ergotism, failed on scoring and had a CT angiography D1 repeat) | 46-year-old man with 3 weeks of daily headache, colic, constipation, anemia and basophilic stippling. Adult lead poisoning from heat gun and sanding removal of paint in a 1920s house. Pregnant partner and toddler live there | q1 (headache 1, short, 3): exposure sources: renovation of old paint, lead work, hobbies (ranges, casting, stained glass), remedies and cosmetics, cookware, water or moonshine, retained bullet. q2 (headache 6, single): venous blood lead level (not ZPP, hair, urine screen or CT). q3 (tox 4, short, 3): remove from exposure, lead-safe professional cleanup, test partner and son, succimer chelation, inform public health. q4 (tox 2, short, 3): chelation precautions: only after exposure stops, CBC and transaminases, rebound recheck, decide on blood not hair or provoked urine | Kosnett et al., Environ Health Perspect 2007 (PMC1849937): symptoms, removal at over 30 ug/dL, chelation over 50 ug/dL with significant symptoms, no chelation on hair or urine levels. Health Canada, Lead-based paint (homes before 1960, sanders and heat guns). CHEMET label, FDA 2018: not a substitute for abatement, rebound in adults and children, neutropenia and transaminase monitoring, dose. The CDC MMWR 2006 55(08):204-207 on disodium EDTA deaths was opened. I dropped its key item because the tests need every listed source to be cited by a question |
| headache-14 | Carotid dissection after a hockey check (round 1: CAA transient focal neurological episodes, failed on q1 exam list and q3 CT with CTA) | Kept the round 1 CAA story (77-year-old man with spreading right-sided tingling spells and headache, with ASA just prescribed for a presumed TIA). Replaced the two failed questions and split the reviewer-approved q4 | q1 (headache 3, short, now required 4): examination during a witnessed spell: march of the tingling, objective weakness or drift, sensory loss, language, jerking or impaired awareness, visual change, rhythm and glucose. q2 (headache 2): unchanged from round 1, which passed. q3 (headache 6, single): after CT shows sulcal blood and CTA is normal, MRI with blood-sensitive sequences. q4 (cva 4, single): after MRI shows siderosis and lobar microbleeds, no antithrombotic, BP control, neurology review | Charidimou et al., Stroke 2012 (abstract via Europe PMC): positive and negative episodes, 24.5% ICH at 8 weeks, "blood-sensitive magnetic resonance imaging sequences are important". Boston criteria v2.0, Lancet Neurol 2022 (PMC9389452): T2* GRE or SWI, lobar microbleeds, cortical superficial siderosis, convexity SAH |
| gi-bleed-15 | Variceal hematemesis at a rural hospital (round 1: GI bleed after tenecteplase, failed) | **Cannot.** Text left as found (round 1 draft) for the coordinator to restore | The preserved key features are gi-bleed 6 as a **menu with 4 correct**, shock 3 (fluid choice) and ems 3 (stabilize before transfer). Four fresh targeted therapies are the blocker. The bank has 47 GI bleed SAMPs that already key PPI, erythromycin, octreotide, ceftriaxone, banding, TIPS, tamponade, TAE, surgery, CTA, reversal, factor, idarucizumab, desmopressin as a distractor and endoscopy timing. Any ulcer story repeats the PPI and erythromycin keys, and a variceal story repeats the keeper. Fresh etiologies I checked are taken or thin: LVAD bleed (shock-13 round 2 and ems-18), Jehovah's Witness (multiple-trauma-07), dialysis (gi-bleed-44), iron (tox-13), aortoenteric (gi-bleed-06), hemobilia (gi-bleed-30). Heyde syndrome is not in the bank, but its ED menu (TAVI referral, APC, stopping ASA, VWF concentrate) has weak evidence and still needs a PPI. Red-cell alloantibodies would give fresh shock 3 and ems 3 keys but no fresh gi 6 menu | n/a |

## Duplicate checks

**Decision search** (`scratchpad/allkeys.tsv` and a live grep of `src/samps`, including uncommitted work)
- headache-05. No hits for strongyloid, ivermectin, hyperinfection, HTLV, "stop dexamethasone" or repeat LP. Meropenem is keyed only for other infections (infectious-diseases-01, 03, 12, shock-23, pediatric-fever-12), never for meningitis. MRI with EEG is keyed in seizures-09 and seizures-12, and in the **old signed headache-05 q4** (HSV PCR, MRI, EEG). That is why q4 now needs 3 items, and the old answers score 2 of 3.
- headache-12. No keyed blood lead, chelation, succimer, EDTA, basophilic stippling or renovation. loc (s32) has "Blood lead level" only as a porphyria distractor. **Convergence:** another writer's uncommitted loc-05 (s07) is pediatric lead encephalopathy with a menu keying parenteral chelation through the poison centre. That is a different decision (encephalopathy, parenteral route) and a different key feature. It is outside my cluster, but please note it at landing.
- headache-14. No keyed amyloid, siderosis, SWI or blood-sensitive MRI. "No antithrombotic therapy" is keyed in pulmonary-edema-36 q2, and "Stop ASA with no substitute" in gi-bleed-27 q2, both for other reasons. MRI keys (cva-03 DWI with CTA, cva-20 MRA, headache-25 and 45) are for other entities. cva-12 q1 keys "gradual spread or march" versus negative symptoms as history for aura versus TIA. My q1 is an examination during the spell, and it needs 4 items, so the cva-12 answers score 3 of 4.

**simcheck top 5** (full / keys)
- headache-05: headache-38 0.24/0.07, headache-28 0.19/0.07, headache-29 0.16/0.19, infectious-diseases-02 0.18/0.11, loc-04 (keeper) 0.17/0.12.
- headache-12: tox-12 (keeper) 0.10/0.10, infectious-diseases-02 0.05/0.10, pre-eclampsia-01 0.06/0.09, ischemic-heart-disease-15 0.06/0.08, ems-15 0.05/0.08.
- headache-14: seizures-40 0.13/0.20, cva-12 0.17/0.17, cva-02 0.12/0.15, pre-eclampsia-03 0.10/0.13, seizures-41 0.13/0.06.

**D1:** I intend no D1 repeat in any of the three.

## markQuestion probes (engine `markQuestion`)

Keeper and old signed answers:
- headache-05 (keeper loc-04 and old headache-05):
  - q1: "HSV PCR / non-contrast CT / serial GCS" and "immunocompromise / seizure / altered LOC" both score 0/3.
  - q2: the full keeper regimen (ceftriaxone, vancomycin, ampicillin, acyclovir, dexamethasone 10 mg) scores 0/3.
  - q3: "Herpes simplex encephalitis" scores 0/1.
  - q4: "Non-contrast CT / nonconvulsive status / serial GCS" scores 1/3, and "HSV PCR / MRI / EEG" scores 2/3.
- headache-12 (keeper tox-12 and old headache-12):
  - q1: "generator / CO alarm / others affected" and "household or pets / better away / furnace / detector" both score 0/3. "Onset, severity, prior headaches" scores 0/3.
  - q3: "non-rebreather / hyperbaric / carboxyhemoglobin" scores 0/3. "100% O2 / hyperbaric / assess children / fire department" scores 1/3.
  - q4: the hyperbaric indications score 0/3.
- headache-14 (keeper cva-13 and old headache-14):
  - q1: "carotid dissection / weakness / speech" scores 2/4. The Horner exam list scores 0/4. The generic red-flag list scores 1/4.
  - q2: "Carotid dissection" scores 0/3.
  - The keeper's CT with CTA is not an option in q3 or q4.

Natural correct wording, including negations:
- headache-05 q2:
  - "Stop ceftriaxone, start meropenem 2 g IV q8h / Add ivermectin 200 mcg/kg / Stop the dexamethasone" scores 3/3.
  - "Stop ceftriaxone, meropenem instead / Dexamethasone should be stopped / Reduce steroids" scores 3/3.
  - "Switch to meropenem / Ivermectin daily / Taper prednisone with stress dose cover" scores 3/3.
- headache-05 q1: "Stool O&P for strongyloides / HTLV-1 / CXR" scores 3/3. Generic "urine culture / CXR / blood cultures" scores 2/3.
- headache-12 q1: "Ayurvedic remedies / lead pipes or well water / what work does he do" scores 3/3.
- headache-12 q3: "Stop the renovation / professional abatement / notify public health" scores 3/3.
- headache-12 q4: "Not a substitute for removing the source / Check ALT / Recheck lead level after the course" scores 3/3.
- headache-14 q1: "Does the tingling march up the arm / pronator drift / speech / jerking or impaired awareness" scores 4/4.
- No question in the three SAMPs has a dangerous answer, so negated wording cannot zero a correct answer.

## Checks

- `npx tsc --noEmit -p .`: clean.
- `SAMP_BATCH=s11 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 488 passed, 1 failed.
  - The failure is "balances key position" (positions 5,5,10,6,6, so 0.3125 against a limit of 0.30). None of my keys sits at position 2.
  - The over-full position 2 includes **gi-bleed-15 q3 from the round 1 draft** that is still in the tree (correct index 2). When gi-bleed-15 is restored to HEAD, its q3 key moves to position 4. The counts then become 5,5,9,6,7, which gives 0.28 and passes.
  - The longest-key share is 11/32 now and 10/32 after the restore, under the 0.35 limit.
- House style: the added lines have no em or en dashes and no semicolons.

## For the physician

- **gi-bleed-15 could not be rebuilt** without repeating signed GI bleed therapy keys. Its gi-bleed 6 menu needs four targeted therapies, and the bank already keys the mainstream ones. Options:
  - Keep the signed text.
  - Allow one D1 repeat.
  - Change its q1 from a menu with 4 correct to a single or short question.
  - If you would accept a niche story, Heyde syndrome (aortic stenosis with angiodysplasia bleeding, transfer for TAVI) and red-cell alloantibodies (fresh fluid and transfer keys) are unused.
- **headache-05:**
  - Is it acceptable that a Strongyloides hyperinfection story sits under headache? The headache KF 6 fit for q1 (a source workup rather than CT or LP itself) is moderate.
  - Please confirm stopping dexamethasone once gram-negative bacilli are seen (IDSA 2004), and ivermectin 200 mcg/kg daily before the stool results return.
  - Plain non-contrast CT is not credited in q4. The reason is that it misses early ventriculitis.
- **headache-12:**
  - Chelation at 68 ug/dL with symptoms rests on Kosnett's "may be considered" above 50 ug/dL with significant symptoms. Succimer's label indication is pediatric. Adult use and access in Canada should go through the poison centre.
  - I dropped a key item on calcium disodium EDTA versus disodium EDTA, because its source could not be cited under the one-source-per-question rule. If a candidate writes it, it is not credited. You may want it back.
- **headache-14:**
  - q1 now needs 4 items. This is so that cva-12's aura-versus-TIA history answers cannot score full marks.
  - The q4 BP-control advice is not tied to a cited trial.
- **Lead convergence:** another writer's uncommitted loc-05 is pediatric lead encephalopathy. The decisions differ, but two lead SAMPs may land together.
