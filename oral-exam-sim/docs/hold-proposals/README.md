# HOLD proposals

For Arjan. Triage put 43 new SAMPs on HOLD because each needed a physician's judgement. Each now has a concrete proposal: the problem, a checked source with a quote, and the exact text to change. You approve or reject each one. You do not need to diagnose anything.

- **How each proposal was checked.** A writer drafted it. An independent reviewer then:
  - opened every source again
  - checked that each "before" text matches the current file exactly
  - checked the proposed text for cueing, option rules and house style
  - fixed what was wrong

  Every section ends with the reviewer's verdict.
- **Nothing is applied yet.** No SAMP in src/ has changed. Approved edits are applied as find and replace, then the batch tests run.
- **How to reply.** Give each id and approve or reject. Where a proposal offers an alternative, say which one you want.

## Summary

| Proposal | Count |
|---|---|
| Edit, no key change | 19 |
| Edit with a key change | 9 |
| No change, release from HOLD | 13 |
| Reject and rebuild | 1 |
| Withdrawn, rebuilt in the duplicate sweep | 1 |
| **Total** | **43** |

Many of the original HOLD reasons were duplicates. Most of those went away when the other copy was rebuilt in the sweeps. The remaining edits mostly fix a source that did not say what the SAMP claimed, or a mock-mode cue.

## Key changes, the ones to read first

| id | Change | File |
|---|---|---|
| analgesia-sedation-17 | IV morphine first, then the fascia iliaca block (CPS 2022) | group-1 |
| analgesia-sedation-29 | First infusion after RSI pairs fentanyl with propofol (ED-AWARENESS). Propofol choice is yours to confirm | group-2 |
| pulmonary-edema-33 | Hydromorphone 0.5 mg SC replaces morphine in stage 4 CKD (BC guideline) | group-3 |
| eye-21 | Ophthalmology review, not stopping the steroid (AAO 2024 says taper) | group-4 |
| sob-23 | Stem changed so Wells is 6, where serial ultrasound was shown safe | group-5 |
| asthma-copd-16 | Discharge home against CPS 2021 bronchiolitis criteria | group-6 |
| chest-pain-31 | Key position only. Same YEARS teaching | group-6 |
| headache-45 | Key positions only. Same keyed actions | group-6 |
| suicide-risk-30 | Psychiatry assessment in the ED today, not home as low risk (SAFE-T) | group-6 |

seizures-30 keeps its key. Its offered alternative would change it.

## Every id

| id | Batch | Proposal | File |
|---|---|---|---|
| abdominal-pain-18 | s19 | Edit, release | group-1 |
| analgesia-sedation-17 | s22 | Edit, key change | group-1 |
| asthma-copd-24 | s25 | No change, release | group-1 |
| chest-pain-39 | s28 | No change, release | group-1 |
| dvt-pe-30 | s33 | No change, release | group-1 |
| infectious-diseases-35 | s41 | Edit | group-1 |
| pre-eclampsia-23 | s47 | Edit | group-1 |
| suicide-risk-31 | s52 | Edit, delete q1 | group-1 |
| abdominal-pain-28 | s19 | No change, release | group-2 |
| analgesia-sedation-29 | s22 | Edit, key change | group-2 |
| asthma-copd-25 | s25 | No change, keep both | group-2 |
| msk-34 | s29 | Edit | group-2 |
| ems-35 | s35 | Edit | group-2 |
| ischemic-heart-disease-33 | s42 | Edit | group-2 |
| pulmonary-edema-28 | s48 | No change, keep both | group-2 |
| abdominal-pain-29 | s19 | No change, release | group-3 |
| anaphylaxis-38 | s23 | Edit | group-3 |
| asthma-copd-32 | s25 | Reject and rebuild | group-3 |
| critical-appraisal-33 | s31 | No change | group-3 |
| environmental-23 | s36 | Withdrawn, rebuilt in sweep 3 | group-3 |
| lacerations-18 | s43 | Edit | group-3 |
| pulmonary-edema-33 | s48 | Edit, key change | group-3 |
| airway-19 | s21 | Edit, release | group-4 |
| arrhythmia-16 | s24 | No change, release | group-4 |
| burns-38 | s26 | Edit | group-4 |
| loc-25 | s32 | No change, release | group-4 |
| eye-21 | s37 | Edit, key change | group-4 |
| lacerations-28 | s43 | Edit | group-4 |
| seizures-30 | s49 | Edit | group-4 |
| airway-24 | s21 | No change, release | group-5 |
| arrhythmia-20 | s24 | No change, release | group-5 |
| chest-pain-24 | s28 | Edit | group-5 |
| loc-37 | s32 | Edit | group-5 |
| first-trimester-bleeding-27 | s38 | No change, release | group-5 |
| multiple-patients-29 | s44 | Edit | group-5 |
| sob-23 | s51 | Edit, key change | group-5 |
| airway-40 | s21 | Edit | group-6 |
| asthma-copd-16 | s25 | Edit, key change | group-6 |
| chest-pain-31 | s28 | Edit, key position | group-6 |
| dvt-pe-19 | s33 | Edit | group-6 |
| headache-45 | s40 | Edit, key positions | group-6 |
| multiple-patients-34 | s44 | Edit | group-6 |
| suicide-risk-30 | s52 | Edit, key change | group-6 |

## Sources nobody could open

These claims rest on a secondary source. Each proposal says so where it applies.
- CTAS 2025 (multiple-patients-29 and 34). Both proposals pin the stem to CTAS 2016. Please check your copy of CTAS 2025 for the heat and pediatric fever rules.
- AMMI Canada 2018 (infectious-diseases-35). Its position is quoted through Prosty 2026.
- The full 2024 AHA/ACC HCM guideline (arrhythmia-16 q3). The manoeuvre is confirmed in two open reviews.
