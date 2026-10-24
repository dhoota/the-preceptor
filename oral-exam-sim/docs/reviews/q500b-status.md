# Q500B round: status (24 October 2026)

Branch `content/q500b`. Nothing in this round is signed off. Every item is `reviewed: false`, so none of it can ship until it passes a fresh no-edit review and a physician signs it off. The launch gate (`releases only physician signed-off SAMPs`) blocks unsigned content.

## Written so far

- 17 SAMP batches, `s72` to `s88`, 5 SAMPs each: 85 SAMPs, 348 questions. All pass their batch tests except `s73` (mid-revision).
- Oral cases: `batch16` (4), `batch17` (4), `batch18` (4), `batch19` (1 of 4). `batch20` has one unregistered draft and fails its batch test.

## Review state by batch

| Batch | First review | Revision | Fresh review | Next step |
|---|---|---|---|---|
| s72 suicide-risk | FAIL 13 | Rev 1 to 3 done | FAIL 6, FAIL 1, Rev 3 PASS | ready for sign-off |
| s73 dvt-pe | FAIL 12 | Rev 1 in progress (tests fail) | | finish revision |
| s74 lacerations | FAIL 8 | Rev 1, Rev 2 done | Rev 1 FAIL 2, Rev 2 PASS | ready for sign-off |
| s75 headache | FAIL 10 (after a replacement) | Rev 2, Rev 3 done | Rev 2 FAIL 5, Rev 3 PASS | ready for sign-off |
| s76 eye | FAIL 15 | not started | | revise |
| s77 delirium-agitation | FAIL 10 | Rev 1, Rev 2 done | Rev 1 FAIL 1, Rev 2 PASS | ready for sign-off |
| s78 multiple-patients | FAIL 5 | not started | | revise |
| s79 sob | FAIL 6 | Rev 1, Rev 2 done | Rev 1 FAIL 4, Rev 2 PASS | ready for sign-off |
| s80 airway | cut off | | | first review |
| s81 analgesia-sedation | cut off | | | first review |
| s82 pre-eclampsia | FAIL 6 | Rev 1 to 3 done | FAIL 6, FAIL 1, Rev 3 PASS | ready for sign-off |
| s83 tox | FAIL 4 | Rev 1 to 3 done | FAIL 2, FAIL 2, Rev 3 PASS | ready for sign-off |
| s84 environmental | FAIL 8 | Rev 1, Rev 2 done | Rev 1 FAIL 3, Rev 2 PASS | ready for sign-off |
| s85 chest-pain | FAIL 3 | Rev 1 to 3 done | FAIL 3, FAIL 1, Rev 3 PASS | ready for sign-off |
| s86 cva | FAIL 10 | Rev 1 to 3 done | FAIL 2, FAIL 1, Rev 3 PASS | ready for sign-off |
| s87 loc | FAIL 10 | Rev 1 in progress | | finish revision |
| s88 ems | FAIL 5 | not started | | revise |
| batch16 | not run | two cases replaced for overlap | | first review |
| batch17 | FAIL 12 | Rev 1 to 3 done | Rev 1 FAIL 2, Rev 2 FAIL 2, Rev 3 PASS | ready for sign-off |
| batch18 | FAIL 8 | Rev 1, Rev 2 done | Rev 1 FAIL 1, Rev 2 PASS | ready for sign-off |
| batch19 | 1 case only | | | finish or drop |
| batch20 | 1 draft, unregistered | | | finish or drop |

No keyed answer has been found clinically wrong in any review so far, apart from one doxycycline course length (s76, eye-41 q4). The fails are repeats of existing bank content (often tagged under another topic), mock-mode cues (ruling B6), and explanation sentences the stem or source does not support.

## Overlap rulings (coordinator)

When two new items shared a scenario, one kept it and the other was replaced:

- lacerations-39 keeps the lip laceration (batch16 lip case replaced by a forearm laceration with hemophilia).
- multiple-patients-36 keeps the ransomware downtime (batch16 cyberattack case replaced by wildfire evacuees).
- cva-48 keeps the chronic subdural on apixaban (headache-48 replaced by leptomeningeal metastasis).
- cva-52 keeps locked-in syndrome (batch18 case replaced by cannabis edibles).
- batch17 hoist-transfer keeps the nonverbal femur fracture (analgesia-sedation-50 replaced by aphasia).
- chest-pain-48 replaced by sternoclavicular septic arthritis (batch17 bench-press keeps aortic dissection).

## Bank-wide near-duplicate check (TF-IDF)

The tool (`zz-dedupe`, run from the coordinator scratchpad) compares every new stem, question and case against the whole bank, and stems across SAMPs and oral cases. 16 new questions score 0.5 or above. Most are already failed by their reviews. Not yet covered by a review:

- lacerations-39 q3 vs infectious-diseases-39 q4 (0.83): coordinator checked, shared tetanus option vocabulary only, different case and key
- headache-49 q3 vs abdominal-pain-29 q3 (0.62)
- airway-48 q2 vs multiple-trauma-36 q1 (0.52)
- cva-48 q4 vs delirium-agitation-10 q2 (0.50)
- eye-40 q3 vs eye-39 q3, both new (0.53)

The check must be rerun after all revisions, before sign-off.

## Open physician questions

Collected from the verdict files: SOGC 426 support for IM magnesium and postpartum magnesium at non-severe BP (s82), methyldopa while breastfeeding (s82), the Dart 2023 acetaminophen points (s83), epinephrine overdose management (batch17), US-only ocular syphilis regimen (s76), and the mock-mode cues each verdict flags as inherent.
