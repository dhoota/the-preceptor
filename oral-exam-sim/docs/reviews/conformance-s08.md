# Format conformance: batch s08

Batch s08 holds 30 SAMPs: dvt-pe-01 to dvt-pe-15 and delirium-agitation-01 to delirium-agitation-15. The batch has 115 questions: 98 write-in, 14 single and 3 menu. This pass follows `docs/CONFORMANCE_BRIEF.md`. It changes format only. No `correct`, `select`, `required`, `accept` or `unacceptable` value changed, except the index remapping that reordering needs. Every write-in key is byte for byte the same as before.

Files changed: `src/samps/s08/dvt-pe.ts` and `src/samps/s08/delirium-agitation.ts`.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 115 of 115 |
| Context sentences moved from the prompt into `update` | 20 questions got a new `update`, 1 had text added to an existing one |
| Options added | 1 (dvt-pe-10 q2, "Massive pulmonary embolism") |
| Options removed | 1 (delirium-agitation-08 q2, "The hospital ethics committee") |
| Options reworded | 42 (35 distractors, 7 keyed) |
| Keyed options reworded | 7 |
| Explanations edited | 10 |
| Stems changed | 30 |
| Vitals moved to the `vitals` field | 30 SAMPs |
| Patient names removed | 0 (none present) |
| Citations completed | 13 |
| Citations replaced | 0 |

Stem changes: every stem now opens in CFPC form ("presents to the emergency department", "is brought to the emergency department"), and the vitals line moved into `vitals` with every value kept. Glucose and lactate stay in the stem as their own sentence. The estimated weight in delirium-agitation-03 is kept as "90 kg" in `vitals` with "His weight is an estimate." in the stem. "µmol/L" became "micromol/L" and "µg/L" became "mcg/L" in stems, updates, options and explanations. "/min" became "/minute" in the same fields. Thousands take a space ("1 000", "2 000"). The one "µg/L" left is inside a write-in `accept` item (dvt-pe-03 q2), which this pass may not touch. The clock times "1400 and 1800" in delirium-agitation-12 are times, not quantities, and stay as written.

Write-in prompts now end in "?" with no instruction. The app adds "List THREE." from `required`. Where a prompt opened with context ("He has no YEARS items.", "You work in Ontario. ..."), that context moved into the question's `update`. Detail requests ("Include the drug, dose and route.") were folded into the question ("... with the drug, dose and route?").

## Key position across the 14 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 2 | 5 | 4 | 3 | 0 |
| After | 3 | 3 | 3 | 3 | 2 |

No position holds more than 30 percent (4 of 14). Every position holds at least one key. The key is the single longest option in 4 of 14 singles (29 percent), within the 35 percent limit.

| SAMP | Question | Before | After |
|---|---|---|---|
| dvt-pe-01 | q3 | 2 | 3 |
| dvt-pe-02 | q3 | 4 | 5 |
| dvt-pe-03 | q3 | 1 | 3 |
| dvt-pe-04 | q1 | 4 | 5 |
| dvt-pe-06 | q2 | 2 | 2 |
| dvt-pe-07 | q4 | 3 | 1 |
| dvt-pe-08 | q3 | 3 | 1 |
| dvt-pe-10 | q2 | 3 | 2 |
| dvt-pe-12 | q2 | 3 | 4 |
| dvt-pe-13 | q3 | 2 | 4 |
| dvt-pe-14 | q1 | 4 | 4 |
| dvt-pe-15 | q2 | 1 | 1 |
| delirium-agitation-08 | q2 | 2 | 2 |
| delirium-agitation-09 | q4 | 2 | 3 |

Positions moved through distractor wording and order only. Examples: dvt-pe-04 q1 now lists 4.5, 6.0, 7.5, 8.0 and 9.5 (the distractor 11 became 7.5, and 6 and 8 gained ".0" so the option lengths match). dvt-pe-12 q2 was out of numeric order and is now 1 to 5. The keyed text of every menu (dvt-pe-02 q2, dvt-pe-08 q5, dvt-pe-10 q3) is unchanged. Only the order and the remapped indexes changed.

## Keyed option rewordings

These cause the expected "keeps its keys" failures. Each keeps the meaning of the signed-off key. Detail cut for length moved to the explanation where it was not there already.

| SAMP | Question | Before | After | Why |
|---|---|---|---|---|
| dvt-pe-02 | q3 | No imaging for PE. Look for another cause and discharge with return advice | No PE imaging, seek other cause, return advice at discharge | Over 60 characters, final period inside |
| dvt-pe-03 | q3 | PE is excluded by YEARS and also by the age adjusted cutoff of 740 µg/L FEU | PE excluded by YEARS and age adjusted 740 mcg/L cutoff | Over 60 characters. FEU is stated in the update. |
| dvt-pe-07 | q4 | Admit for IV unfractionated heparin with transition to warfarin | Admit for IV unfractionated heparin, then warfarin | Over 60 characters |
| dvt-pe-10 | q2 | Intermediate high risk | Intermediate high risk pulmonary embolism | Length spread. "Low risk" (8) against 22 failed the 2.1 limit, so every option now ends "pulmonary embolism". |
| dvt-pe-13 | q3 | Discharge on LMWH with warfarin started, INR monitoring and early thrombosis clinic follow-up | Discharge on LMWH and warfarin, INR checks, clinic follow-up | Over 60 characters. "Arrange early thrombosis clinic follow-up." added to the explanation. |
| delirium-agitation-08 | q2 | His wife | His wife, who is at home | Length spread. The distractor "His son, because he is present" held a reason and became "His son, who is present". The key now matches it. |
| delirium-agitation-09 | q4 | Find her incapable for this treatment and seek consent from her husband as substitute decision maker | Find her incapable for dialysis, seek consent from husband | Over 60 characters. The explanation now says "her husband as her substitute decision maker". |

## Single and menu questions changed

- dvt-pe-10 q2 had 4 options. Added "Massive pulmonary embolism". It is clearly wrong under the ESC 2019 guideline: the ESC uses "high risk" in place of "massive", and she is not hemodynamically unstable. The explanation now says so.
- delirium-agitation-08 q2 had 6 options. Removed "The hospital ethics committee" as the weakest distractor. "None. Treat him under a Form 1" became "None, treat him under a Form 1" and sits last.
- Reason text moved out of options: "Intubate to reduce work of breathing" (dvt-pe-10 q3), "Early rapid sequence intubation to reduce work of breathing" (dvt-pe-08 q5, reason now in the explanation), "Complete a Form 1 under the Mental Health Act, which authorizes dialysis" and "Accept her refusal because every patient may refuse treatment" (delirium-agitation-09 q4, the explanation now notes that a capable patient may refuse but she is not capable).
- Other distractors were lengthened or reworded to meet the 60 character, length spread and parity limits, and to set key position.

## Citation changes

Every Thrombosis Canada year below is the "Date of version" printed on the current guide, read from the Thrombosis Canada guide service on 24 September 2026 (index at https://thrombosiscanada.ca/hcp/practice/clinical_guides, data at https://api.thrombosiscanada.ca/clinical_guides). The guide content was checked against the point each question cites (V/Q after a normal chest X-ray, Hestia and PESI, carbamazepine lowering DOAC levels, 45 day treatment of superficial vein thrombosis, warfarin in high risk APS, PCC for DOAC bleeding).

| Source id | Before | After | Verification |
|---|---|---|---|
| tc-dvt-dx | Thrombosis Canada. Clinical guide on the diagnosis of deep vein thrombosis. | Thrombosis Canada. Clinical guide: deep vein thrombosis diagnosis. 2025. | DVT_diagnosis_v60, version 7 May 2025 |
| tc-dvt-tx | ... on the treatment of deep vein thrombosis. | Thrombosis Canada. Clinical guide: deep vein thrombosis treatment. 2025. | DVT_Treatment_v80, version 2 November 2025 |
| tc-pe | ... on the diagnosis and management of pulmonary embolism. | Thrombosis Canada. Clinical guides: pulmonary embolism diagnosis (2026) and pulmonary embolism treatment (2025). | PE_v89, version 11 July 2026. guide44_v60, version 1 May 2025 |
| tc-preg | ... on venous thromboembolism in pregnancy. | Thrombosis Canada. Clinical guide: pregnancy, diagnosis of DVT and PE. 2026. | guide83_v50, version 6 January 2026. Its only use is the imaging question (dvt-pe-05 q3). |
| tc-cancer | ... on cancer associated venous thromboembolism. | Thrombosis Canada. Clinical guide: cancer and thrombosis. 2024. | Cancer_and_Thrombosis_v51, version 10 September 2024 |
| tc-svt | ... on superficial vein thrombosis. | Thrombosis Canada. Clinical guide: superficial thrombophlebitis, superficial vein thrombosis. 2026. | guide90_v39, version 12 July 2026 |
| tc-aps | ... on antiphospholipid syndrome. | Thrombosis Canada. Clinical guide: thrombophilia, antiphospholipid syndrome. 2025. | APS_v39, version 2 November 2025 |
| tc-doac | ... Clinical guides on apixaban and rivaroxaban. | Thrombosis Canada. Clinical guides: apixaban and rivaroxaban. 2025. | Apixaban_v78, version 2 June 2025. Rivaroxaban_v54, version 2 November 2025 |
| tc-ufh | ... on unfractionated heparin. | Thrombosis Canada. Clinical guide: unfractionated heparin, low molecular weight heparin and fondaparinux. 2025. | UnfractionatedHeparin_Low_molecular_weight_heparin_v44, version 30 April 2025 |
| tc-bleed | ... on the management of bleeding in patients taking DOACs. | Thrombosis Canada. Clinical guide: DOACs, management of bleeding. 2025. | NOACs_Bleeding_v82, version 16 October 2025 |
| ccsmh | Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health: the assessment and treatment of delirium. | Same work, with "2006, updated 2014." and the 2014 update URL | https://ccsmh.ca/areas-of-focus/delirium/clinical-guidelines/ and https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf |
| goldfrank | Nelson LS, et al. Goldfrank's Toxicologic Emergencies. McGraw Hill. | Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. 2019. | https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html (copyright 2019). The 12th edition carries a 2027 copyright. |
| hip-block | Guay J, et al. Peripheral nerve blocks for hip fractures in adults. Cochrane Database Syst Rev. | Guay J, Kopp S. Peripheral nerve blocks for hip fractures in adults. Cochrane Database Syst Rev. 2020. | https://pubmed.ncbi.nlm.nih.gov/33238043/ (CD001159.pub3, 25 November 2020), added as `url` |

No source was replaced. The other 26 citations already named an author or body, a work and a year, and were left as they were.

## Needs physician decision

Nothing below was changed.

1. dvt-pe-07 q3 (initial anticoagulant with a creatinine clearance of 18 mL/minute). The explanation says "Rivaroxaban, edoxaban and dabigatran are not recommended below 30 mL/min and apixaban is not recommended below 25 mL/min in Canadian labelling". The current Thrombosis Canada guides say something different for VTE treatment. Apixaban (version 2 June 2025): "limited clinical data in patients with severe renal impairment (CrCl 15-29 mL/min) and apixaban should be used with caution", "not generally recommended" below 15. Rivaroxaban (version 2 November 2025): "caution is recommended for those with CrCl 15 - 29 mL/min. Use is not recommended with CrCl <15 mL/min." IV UFH as the key is still defensible, given her contrast anaphylaxis and the need for a reversible drug. But the explanation's thresholds, and the `unacceptable` item "A DOAC at standard treatment doses" (apixaban 10, rivaroxaban 15), may be stricter than current Canadian guidance. Please review the explanation and whether a DOAC answer should stay unacceptable.
2. dvt-pe-11 q4 (superficial vein thrombosis). The key accepts fondaparinux, rivaroxaban 10 mg and prophylactic LMWH, which matches the guide. The explanation leads with fondaparinux and says Thrombosis Canada "also lists" rivaroxaban. The 12 July 2026 guide now says outpatients "are most often treated with low dose anticoagulation (such as Rivaroxaban 10mg po daily x 45 days)". This is a wording point for the explanation only. The key is unaffected.
3. dvt-pe-10 q2. The new distractor "Massive pulmonary embolism" and its sentence in the explanation are new content. Please confirm you are content with it as the fifth option.
4. delirium-agitation-08 q2. "The hospital ethics committee" was removed to reach 5 options. Please confirm this was the right distractor to drop.

## Checks

```
npx tsc --noEmit -p . 2>&1 | grep samps/s08          (no output)
CONFORM=s08 SAMP_BATCH=s08 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts
```

444 of 451 tests pass. The 7 failures are the expected "keeps its keys" tests for dvt-pe-02, dvt-pe-03, dvt-pe-07, dvt-pe-10, dvt-pe-13, delirium-agitation-08 and delirium-agitation-09, one for each keyed rewording above. They will pass once the orchestrator logs these edits in `docs/conformance-key-edits.json`. The batch balance test passes. Neither `docs/conformance.json` nor `docs/conformance-key-edits.json` was edited, because this pass may edit only `src/samps/s08/`.
