# Batch s29 review

Independent adversarial review of batch s29 (Management of Care in new settings). Scope was all 50 items in `part1.ts` to `part5.ts` and the sources in `common.ts`. The batch has no extra file. Both lenses were applied to every item. Every temperature and glucose pair was recomputed with a script. Every item was checked for uniqueness against the full text of the 2,000 original items, not only the inventory stems.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s29-05 | stem, spans[0].why | The 0915 key relied on a medication authorization rule the stem never gave. Added the district policy to the stem. | B | high |
| rn-s29-06 | options, rationale | Both keys (give when unconscious, call emergency services) repeat the glucagon teaching in rn-s17-19. Rewrote the keys and one distractor to test delegation limits: one student, report each dose, no redelegation. | Uniqueness | medium |
| rn-s29-07 | rationale | "Seldom fatal in a healthy adult" relied on health the stem never gave. Now matches the option why. | B | medium |
| rn-s29-09 | sources | NCCHC segregation page is a CorrectCare Q&A from 2005, not a 2022 Spotlight piece. Corrected work and year. | A | high |
| rn-s29-11 | sources | NCCHC refusal page is a Standards Q&A of CorrectCare reprints dated 2001 to 2010. Corrected work and year. | A | high |
| rn-s29-22 | stem, rationale, two whys | 42 CFR 416.52(a) lets the operating surgeon or another qualified practitioner do the pre-surgical assessment. The item said only the surgeon may. The H&P is required only when center policy calls for one. | A | high |
| rn-s29-25 | stem | A hospice unit inside a hospital may be a separate hospice provider, so 482.45 may not apply. Moved the death to the hospital's palliative care unit. | A | medium |
| rn-s29-36 | stem | The rationale rests on an unstable client, but the stem never said so. Added that the bleed is not yet stable. | B | high |
| common.ts | NASN_IHP, SAMHSA_CRISIS, HALTER, WRIGHT urls | Dead or blocked links. Replaced with the DOI, a federal copy of the toolkit, the Elsevier Evolve page and the AACN store page. | A | high |

Every edited item carries `version: 2`. Keys are unchanged in all eight.

## Marked for pull

The pulled ids still need adding to `src/bank/pulled.ts`, which is outside this batch folder. Each item carries a `// PULL` comment.

| Item | Reason |
|---|---|
| rn-s29-19 | Same rule as rn-s21-03 and rn-c13-1-2. A responsible adult escort is needed after anesthesia. A rideshare twist does not make a new point. |
| rn-s29-23 | Same point as rn-s04-31 and rn-s04-46. The practical nurse reinforces teaching and gives scheduled oral drugs to stable clients. |
| rn-s29-28 | Its two keys repeat rn-s29-25 (call within 1 hour) and rn-s01-36 (only a trained requester approaches the family). |
| rn-s29-30 | Same point as rn-s01-21 and rn-c16-4-5. The practical nurse gives scheduled oral drugs and the aide gives routine personal care. |
| rn-s29-50 | Same point as rn-s02-29. Competence is shown by performance, not attendance. It also overlaps rn-s29-49. |

## Key changes

None.

## Writer flags resolved

- rn-s29-12. ASAM 2020 bands CIWA-Ar 10 to 18 as moderate and 19 or more as severe. New confusion marks complicated withdrawal. The ref and key stand.
- rn-s29-10. NCCHC lets qualified health care professionals triage requests, and LPN triage is state dependent. The RN is the best answer for an entry-level RN under the 2019 NCSBN and ANA guidelines. The LPN why is fair.
- rn-s29-05 and rn-s29-14. Item 14 already stated the policy. Item 05 did not, and now does.
- rn-s29-25, 27, 28 and 29. Checked against the CMS text. Appendix A Rev. 248 says timely means by phone as soon as possible, ideally within 1 hour. Batch lists are barred even if the OPO asks. Referral comes before withdrawal of life support, and the OPO judges suitability. Appendix W gives the CAH the same duty, with a GCS trigger in the ED. 418.110(b)(2) requires an RN giving direct care each shift when any client gets general inpatient care. 418.76(c)(4) bars an aide from a failed task without direct RN supervision. Items 25, 27 and 29 stand. Item 28 is pulled for overlap.
- The three unused sources in `common.ts` do no harm and were left.

## Uniqueness

Each item was grepped by topic and teaching point against the full text of all 2,000 original items. No original item is set in a jail, a dialysis unit, a crisis unit or a critical access hospital. Five items repeat an existing teaching point and are marked for pull. Item 06 was rewritten to a new point. Items 13 and 42 share a cue with rn-s17-40 and rn-s02-23 but test a different decision, so they stay.

## Sources verified

- 42 CFR 416.52, 418.110, 418.76, 494.62, 494.140, 494.180 and 489.24 read on https://www.law.cornell.edu/cfr/text/42/
- CMS State Operations Manual Appendix A Rev. 248 and Appendix W, downloaded from cms.gov. The OPO text was read in full.
- CDC dialysis core interventions, https://www.cdc.gov/dialysis-safety/hcp/clinical-safety/ (monthly hand hygiene audits with results shared, competency checks at hire and every 6 to 12 months)
- SAMHSA crisis toolkit 2020, https://bja.ojp.gov/sites/g/files/xyckuh186/files/media/document/samsha-national-guidelines.pdf (accept all referrals, no medical clearance, no rejection policy for first responders, peers)
- ASAM 2020 CIWA-Ar bands, https://www.asam.org/docs/default-source/quality-science/the_asam_clinical_practice_guideline_on_alcohol-1.pdf
- NCCHC Q&A pages, https://www.ncchc.org/receiving-screening/ , https://www.ncchc.org/spotlight-on-the-standards/segregated-inmates/ , https://www.ncchc.org/right-to-refuse-treatment
- NASN IHP position statement 2025, Crossref https://doi.org/10.1177/10598405251332784
- HICS Guidebook 5th edition 2014, https://asprtracie.hhs.gov/technical-resources/resource/2735/hospital-incident-command-system-hics-guidebook-fifth-edition-may-2014
- Wright, 4th edition 2021, https://www.aacn.org/store/books/120564/the-ultimate-guide-to-competency-assessment-in-health-care-4th-ed
- PubMed records 26404925, 27940731, 32511109, 2597811, 8534468 and 31662037 checked through NCBI E-utilities.

## Needs the Preceptor team's decision

- The five pulls above, and adding their ids to `src/bank/pulled.ts`.
- rn-s29-35 (water intoxication) and rn-s29-43 (blocked tracheostomy) are bow-ties whose content is Physiological Adaptation. They carry MOC because the plan fixes the batch at MOC 50. The keys are sound.
- HICS detail in rn-s29-40 (Planning collects job action sheets) rests on the writer's reading of the guidebook PDF. I confirmed the Labor Pool and Credentialing Unit sits in Logistics, but not the Planning detail. Confidence medium.

## Summary

50 items reviewed. 37 passed unchanged apart from a Canada note. 8 fixed with the key kept. 5 marked for pull. No key changes.
