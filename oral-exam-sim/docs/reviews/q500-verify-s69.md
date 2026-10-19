# Q500 verify report: s69, Burns

Fresh independent review by Preceptor of the whole final text of `src/samps/s69/burns.ts` (burns-39 to burns-43). The reviewer did not write or edit this batch. The first QA round edited the file in place, which breaks REVIEW-RULES rule 1, so the current file is treated as a writer revision. Nothing was edited in this round. Both lenses were applied: clinical truth, and internal consistency and numbers. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| burns-39 | PASS | PASS | PASS | PASS | PASS |
| burns-40 | FAIL | FAIL | PASS | PASS | FAIL |
| burns-41 | FAIL | PASS | PASS | FAIL | PASS |
| burns-42 | FAIL | FAIL | FAIL | FAIL | FAIL |
| burns-43 | PASS | PASS | PASS | PASS | PASS |

Two SAMPs pass and three fail. Most failures are for overlap with content already in the bank. Most of the clinical teaching is sound.

Batch tests run by the reviewer: `SAMP_BATCH=s69 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 of 128), and the type check shows no s69 errors. Those tests do not check overlap with oral cases or repeated teaching points.

## Required fixes

### burns-40

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | stem | "came back to find the girl sitting in a puddle of the spilled product, with both hands and forearms wet" | A toddler sitting in a puddle of hydrofluoric acid would also have soaked clothing, buttocks, perineum and legs. The stem names only hands and forearms, and nobody removes her clothes. Either change the mechanism so only the hands and forearms are exposed (for example, both hands in the spill up to the elbows while she patted it), or keep the puddle and state that her clothing was removed and the rest of her skin is normal. The 10% TBSA and every later number must still agree. | McKee 2014 and the Canadian Antidote Guide (remove contaminated clothing, decontaminate all exposed skin) | Medium |
| q1 | whole question | "Which of the following ingredients in the rust remover best explains her presentation?" Key "Hydrofluoric acid" | This repeats burns-39 q1 in the same batch (name the fluoride source from delayed pain after a household product). It also repeats the teaching of signed burns-03 q1, whose explanation already says dilute HF in rust removers causes delayed, deep pain. Replace it with a decision that is not in the bank and not in burns-39, still KF6 or KF1. One option that also fixes the stem: decontamination of a child after an HF spill (removing soaked clothing or diaper, washing all exposed skin, staff gloves). The explanation's unsupported phrase "a girl who was settled after a brief wash" goes with the old question. If kept in any form, the stem must say she was settled after the wash. | Q500_BRIEF rule 3 (no repeated teaching point, no repeated angle within a batch). burns-03 in `src/samps/s04/burns.ts` | Medium |
| q4 | whole question | "Which of the following is the most appropriate disposition for her?" Key "Admit with cardiac monitoring". Distractor "Observe 4 hours then discharge" | Same key decision as signed burns-12 q3 (monitored bed with serial electrolytes for systemic fluoride toxicity), with a near copy of its distractor "Four hours of observation, then discharge". Replace with a disposition decision not in the bank. The ABA 2025 table places "All chemical injuries" and "All pediatric burns may benefit from burn center referral" in the immediate consultation with consideration for transfer column, so a pediatric burn centre consultation or transfer angle is open, as long as the key and distractors follow the setting given in the stem. Keep KF5 covered in the batch. | burns-12 in `src/samps/s04/burns.ts`. ABA burn referral guidelines 2025, table read from the page HTML: https://ameriburn.org/burnreferral | Medium |

Not required but noted: q2 key "Twelve lead ECG and ionized calcium" is the only option that names two tests and is the longest option (35 characters against a mean of 25.8, ratio 1.36). It is within the limits. The q4 update gives the ECG and ionized calcium results, which reveals the q2 key in mock mode. That cue is built into the case (PHYSICIAN_REVIEW Part 1 section 7) and may stay if q4 is rebuilt around those results.

### burns-41

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem and title | scenario | "A 34-year-old man ... after gasoline vapour ignited while he refuelled a running snowblower inside his closed garage." Title "Flash fire while refuelling in the garage" | Signed burns-02 is "A garage flash fire": a 35-year-old man whose gasoline ignited in his garage. This is the same diagnosis and setting with one year of age between them. Move the setting so it no longer retells burns-02 while keeping an engine in an enclosed space as the carbon monoxide source (for example, a fuel generator in an ice fishing shack or a boathouse). Change the title to match. Recheck q1 and q4 wording against the new setting. | Q500_BRIEF rule 3 (no repeated diagnosis plus setting). burns-02 in `src/samps/s04/burns.ts` | Medium |
| q3 | whole question | "Which of the following is the most appropriate plan for his buprenorphine-naloxone while he is in hospital?" Key "Keep giving his usual daily dose". Distractors hold, taper, methadone, morphine | Same key decision and the same distractor set (stop it, switch to methadone) as signed analgesia-sedation-10 q2 ("Continue buprenorphine, add nonopioids, titrate full agonist"). The first QA kept it knowingly. D1 does not cover it because continuing buprenorphine is not the literal wording of a burns key feature, and the D1 table stands at 19 of 20 (docs/DECISIONS.md). Replace it with a KF3 decision not in the bank. Examples: a multimodal adjunct suited to burn pain on buprenorphine, or analgesia planned for the first dressing change. Each must be supported by a source opened and cited. q2 already teaches the receptor point, so do not repeat it. | analgesia-sedation-10 in `src/samps/s02/analgesia-sedation.ts`. docs/DECISIONS.md D1 | Medium |

### burns-42

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | scenario | "You are working in a community hospital emergency department without a burn unit. A 52-year-old man was carried out of a smoke-filled bedroom by firefighters ... hoarse, had soot in his mouth ... rising stridor he was intubated ... with an 8.0 mm tube" | This retells the oral case house-fire-burns (`src/cases/batch05/house-fire-burns.ts`): a community hospital with no burn unit, a man pulled from a house fire by firefighters, hoarseness, soot and stridor, intubation with an 8.0 tube, awaiting air transfer, then a ventilation problem while waiting and a sedation plan before he leaves. Rebuild the scenario with a different setting, patient and mechanism so it no longer tracks that case. | Q500_BRIEF rule 3 and the task's oral case uniqueness check | High |
| q1 | options | Key "Not reliable to exclude lung injury" against "Confirms injury limited to the larynx", "Excludes the need for bronchoscopy", "Predicts a low risk of pneumonia", "Shows intubation was not required" | The key is the only option that is not a verb phrase and the only hedged, negative option. That is a grammar and hedge cue (SCORING-RULINGS B4 and B5). Reword the key as a parallel verb phrase that is not a plain negation of a distractor, for example "Misses early inhalation injury", or recast all five options in one form. Keep the teaching (Walker 2015: the admission film is rarely helpful). | SCORING-RULINGS B4, B5 | Medium |
| q2 | frame | Rising peak airway pressure in an intubated burn patient, with eschar, mainstem migration and pneumothorax ruled out, key "Tube blocked by sloughed airway casts" | The same frame as signed burns-07 q1 and q2 and as the "Ventilation problem" step of the house-fire-burns oral case, where eschar is the answer. Casts are already an accepted answer in burns-07 q1. After the scenario rebuild, either test casts in a way that is not a rising-pressure differential in a ventilated burn patient, or replace the question. | burns-07 in `src/samps/s04/burns.ts`. house-fire-burns oral case | Medium |
| q3 | update | "The tube is cleared and his saturation recovers." | In mock mode this names the q2 key. Wording can remove the cue: drop the first clause and keep only the fluid calculation sentence. Also note that this is the batch's only KF4 item and it does not test fluids timed from the time of injury, which is the core of KF4. If the rebuild allows, aim the KF4 item at the time of injury. | SCORING-RULINGS B6. PHYSICIAN_REVIEW Part 1 section 7 | Low |
| q4 | whole question | Key "fentanyl and propofol infusions" for transfer sedation in a ventilated burn patient | The house-fire-burns oral case model answer for the same moment reads "Analgesia and sedation, for example fentanyl infusion with propofol or ketamine." Replace it with a decision not in the bank, and keep KF3 covered in the batch. | house-fire-burns oral case, line 334 | Medium |

## Items the first QA changed or replaced: current text judged

| Item | First QA change | Verdict on current text |
|---|---|---|
| burns-39 title | Changed from a near copy of burns-03 | Acceptable. |
| burns-39 q1 explanation and source | "hours after" wording, re-sourced to McKee | Acceptable. The question still echoes the frame of burns-03 q1 (delayed fingertip pain from dilute HF). The new teaching point is that glass etching cream holds a fluoride salt. It is literal KF6 material. Named here for the physician, and not counted as a D1 row. |
| burns-39 q2 | Replaced with an improvised gel recipe | Acceptable. Checked against the Canadian Antidote Guide (last updated 2026-04-16): 10 mL (1000 mg) of 10% calcium gluconate into 30 mL K-Y, about 2.5%. Arithmetic recomputed: 1000 mg in 40 mL is 2.5%. 100 mg in 31 mL is 0.32%. 3000 mg in 40 mL is 7.5%. One defensible key. |
| burns-39 q3 update and explanation | 2 hours of gel, Bier block mentioned, finger wording | Acceptable. The guide says "Do not inject in fingers, ears or tip of the nose to avoid compromising circulation" and gives intra-arterial 10 mL of 10% in 40 mL D5W over 4 hours, repeated until relief for more than 4 hours. Two claims (calcium chloride toxic to tissue, IV magnesium for systemic hypomagnesemia) come from McKee and general knowledge, not the guide the question cites. Minor. Signed burns-03 accepts SC infiltration of 5% calcium gluconate for fingertips, while this item rejects pulp infiltration of 10%. The concentrations differ and the guide supports this item, but the physician should know the two items differ in emphasis. |
| burns-39 q4 explanation | Poison centre line | Acceptable. The guide says "We recommend to consult your poison centre with the use of this antidote." ABA 2025 lists all chemical injuries for immediate consultation, which fits a monitored admission with hand or burn surgery input. |
| burns-40 q3 explanation | "Topical treatment is preferred once the skin has been washed well" | Acceptable. Matches the guide. |
| burns-41 q2 | Replaced with the buprenorphine receptor question | Acceptable. Fentanyl 100 mcg at 82 kg is 1.22 mcg/kg. Distractor reasons are true. The receptor point also appears as a reason in analgesia-sedation-10 q2, but the decision asked here (why the paramedic dose failed) is new. |
| burns-41 q3 explanation | Dose splitting removed | The text is accurate (ASRA summary: "should not be routinely discontinued"). The question fails on overlap, above. |
| burns-42 q3 explanation | Albumin softened | Acceptable as worded. The "Albumin started in the first hour" option does not answer a lead-in about fluid volume. This is minor, and the rebuild should give it a parallel option. |
| burns-42 q4 | Re-sourced to PADIS 2018 | The source supports analgesia first and propofol over benzodiazepines (Devlin 2018, Crit Care Med, doi 10.1097/CCM.0000000000003299). The question fails on overlap with the oral case, above. |
| burns-43 q2 explanation | States only the audit finding | Acceptable. Berry J, Ashley J, Jeffery S. Burns 2020, volume 46, issue 4, pages 970 to 973, confirmed on the BCU record. The point that lid swelling makes later examination harder is not attributed to the source, which is fine. |
| burns-43 q3 explanation | xenon scanning instead of V/Q | Acceptable. |

## First QA residual uncertainty list

- burns-42 q4 relies on PADIS through secondary summaries. The source exists and the point is standard. The question fails for overlap, not for its source.
- burns-39 q2 is a compounding decision. Acceptable, because the stem states that no commercial gel is in stock and the key is the guide's own recipe.
- burns-40, availability of HF rust removers in Canada. Acceptable as a plausible scenario. Stating a product type is not a provincial or national claim.

## Checks with no change needed

- burns-39: timeline (craft session yesterday afternoon, pain from 21:00, seen at 02:00) is consistent. Key positions and option order are correct.
- burns-40 q2: McKee (over 5% TBSA at any concentration) applies. Hands and forearms in a 2-year-old come to about 11% by Lund and Browder (each hand 2.5%, each forearm 3%), so "about 10%" holds. The guide's trigger (over 1% with 50% or stronger acid) does not apply to a dilute product, and the key holds either way.
- burns-40 q4 values: ionized calcium 1.02 mmol/L is low. QTc 470 ms is long for a child.
- burns-41 q1: carbon monoxide from a running engine in an enclosed space, with co-oximetry as the key, is correct (Hampson 2012). CO with co-oximetry is literal KF1 material. It also appears in the oral cases house-fire-burns and work-trailer-heater-burns, which use different settings.
- burns-41 q4: ABA 2025 places partial thickness 10% TBSA or more, and poorly controlled pain, in the immediate consultation with consideration for transfer column. COHb 9% with no neurologic signs does not meet Hampson's hyperbaric criteria.
- burns-43 q1: steam injures below the cords (Walker 2015). One defensible key.
- burns-43 q3: bronchoscopy is the standard for diagnosing and grading inhalation injury (Walker 2015).
- burns-43 q4 menu: ABA 2025 places "All patients with suspected inhalation injury" in the immediate column, and "singed facial hairs" and "Partial thickness burns <10% TBSA" in the consultation column. Her facial burns are moist and blistered, which is superficial partial thickness, so the deep facial burn criterion does not apply. A single key, index 5, is correct.
- House style: no semicolons, em dashes or en dashes in content strings, and no mnemonics or personal names. "paralysed" in burns-42 q4 is British spelling. The bank uses both forms. The Canadian form "paralyzed" is preferred but this is not a failure.
- Mock mode cues built into the case (left as is): burns-40 q4 update reveals q2, and burns-41 q4 update reveals q1.

## Sources verified

- American Burn Association. Burn referral guidelines. 2025. https://ameriburn.org/burnreferral. The page HTML was downloaded and the table cells read. "All chemical injuries" and the pediatric row sit in the immediate column.
- Canadian Antidote Guide, calcium gluconate. https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/calcium-gluconate. Opened, last updated 2026-04-16. Confirmed the gel recipe, the 4 hour change and end point, the intra-arterial and Bier doses, no injection into fingers, the over 1% at 50% or more trigger, and the poison centre advice.
- McKee D and colleagues. Plast Surg (Oakv). 2014. Existence confirmed through Europe PMC (PMID 25114621, doi 10.1177/229255031402200202). The PMC page served a browser check to this reviewer, so the full text was not reread. Its thresholds agree with the first two readers and with the s04 HF items.
- Anderson TA and colleagues. Anesthesiology. 2017. The PMC URL resolves (it served a browser check).
- Kohan L and colleagues. Reg Anesth Pain Med. 2021. The ASRA summary was opened. It is the panel's summary of that article and does not name authors.
- Walker PF and colleagues. Crit Care. 2015. The PMC URL resolves (it served a browser check). Content matches the cited points.
- Hampson NB and colleagues. Am J Respir Crit Care Med. 2012. No URL. Citation correct.
- Devlin JW and colleagues. PADIS. Crit Care Med. 2018. No URL. Citation correct.
- Berry J, Ashley J, Jeffery S. Burns. 2020. https://pureportal.bcu.ac.uk/en/publications/ophthalmological-evaluation-of-facial-burns-in-a-regional-burns-c/ opened (vol 46, no 4, pp 970 to 973).

## Key feature coverage after fixes

Current coverage: KF1 3, KF2 4, KF3 3, KF4 1, KF5 4, KF6 5. The replacements in burns-40, burns-41 and burns-42 must keep every key feature covered. In particular, KF3 loses burns-41 q3 and burns-42 q4, and KF4 has only burns-42 q3. KF4 is the weakest key feature in the batch and should gain an item that tests fluids timed from the time of injury.

## Summary

Five SAMPs: burns-39 and burns-43 pass. burns-40, burns-41 and burns-42 fail, with 10 required fixes. The main problem is repetition. burns-42 retells the oral case house-fire-burns, burns-41 retells the setting of burns-02 and repeats the analgesia-sedation-10 decision, and burns-40 repeats burns-12 q3 and the identification angle of burns-39. There is one consistency defect (the puddle exposure in burns-40) and one cueing defect (burns-42 q1). No keyed answer was found clinically wrong. The fixes go back to a writer, and the revision needs a fresh independent review.
