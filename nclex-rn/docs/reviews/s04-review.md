# Batch s04 adversarial review

Scope: all 50 items in part1.ts to part5.ts, plus the 2 items in extra.ts that index.ts does not import (rn-s04-91 and rn-s04-92). Both lenses were applied to every item. Every number was recomputed with a script: 38.3°C to 100.9°F, glucose 58 mg/dL to 3.2 mmol/L, the fivefold hydromorphone vial error (0.5 mL of 10 mg/mL is 5 mg against a 1 mg dose), the 8 kg loss from 51 to 43 kg, the maximum of 4 doses every 3 hours in a 12 hour night, acetaminophen 650 mg every 6 hours (2600 mg a day), and each report limit in item 45 (90 and 91 are under 92, 86 is under 90, 104 is not over 110). All matched.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s04-92 | key option, why, rationale | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s04-92 | need | Metadata said MOC. The item tests an antidote, so it is PPT. | B | high |
| rn-s04-91 | option 2 why | Said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts over hours, which is why it is not first. | A | high |
| rn-s04-91 | need | Metadata said MOC. Treating hyperkalemia with ECG changes is PA. | B | high |
| rn-s04-25 | rationale | Said blame and staffing complaints go in the safety event report. Item 7 teaches that blame and staffing guesses must be removed from that report. Now says staffing concerns go to the manager. | A and B | high |
| rn-s04-20 | rationale and blank 1 why | Said invasion of privacy involves only true private facts. False light invasion of privacy involves false statements. The why now says a false claim that harms reputation is defamation. | A | medium |
| rn-s04-36 | condition why | Said fatigue does not cause slurred speech. Fatigue can slur speech. The why now rests on the alcohol on the breath and the admission of drinking. | A | medium |
| rn-s04-40 | stem | The rationale says the only analgesic failed. The stem never said acetaminophen was the only analgesic prescribed. Added to the stem. | B | high |
| rn-s04-30 | stem | Stem said the LPN charted sleeping comfortably at each check, but the 1300 row reads Awake. Now says each hourly check after the dose. | B | medium |
| rn-s04-11 | rationale and condition why | Said bruises of different ages. The stem gives different colors, and bruise color does not date a bruise reliably. Now says different colors. | A and B | low |
| rn-s04-42 | rationale | Said waiting leaves a sponge inside the client. The count is only off, so it can leave one. Matches the option why. | B | low |
| rn-s04-01 | stem | Said the client coughed during meals at breakfast, which is one meal. Now says during the meal. | B | low |

Twelve fixes across 10 items. No automated gate changed state.

## Key changes

- rn-s04-92. Before: option 2 "Protamine sulfate" (index 1) keyed as the antidote for magnesium toxicity. After: option 2 "Calcium gluconate" (index 1) keyed. Reason: calcium gluconate IV is the antidote for magnesium sulfate toxicity. Protamine reverses heparin. The key index is unchanged but the keyed answer is new, so Arjan must approve it.

## Sources verified

- NCSBN and ANA, National Guidelines for Nursing Delegation, 2019. The five rights and the definition of right circumstance (stable client) confirmed. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- AHRQ TeamSTEPPS. CUS wording and the DESC order (describe, express, suggest, consequences) confirmed. https://www.ahrq.gov/hai/tools/ambulatory-surgery/sections/implementation/training-tools/cus-tool.html
- The Joint Commission, Sentinel Event Alert 40, updated June 2021. https://www.jointcommission.org/en-us/knowledge-library/newsletters/sentinel-event-alert/issue-40
- ANA Code of Ethics for Nurses, 2025 revision released January 2025. https://codeofethics.ana.org/about
- AACN, The 4A's to Rise Above Moral Distress, 2004. Order ask, affirm, assess, act confirmed. https://ojin.nursingworld.org/table-of-contents/volume-16-2011/number-1-january-2011/articles-on-previously-published-topics/aacn-framework-and-moral-distress/
- NCSBN, A Nurse's Guide to Professional Boundaries, 2018. https://www.ncsbn.org/public-files/ProfessionalBoundaries_Complete.pdf
- NCSBN, A Nurse's Guide to Substance Use Disorder in Nursing, 2014. Large wastage and frequent reports of poor pain relief listed as diversion signs. https://www.ncsbn.org/public-files/SUD_Brochure_2014.pdf
- AHRQ PSNet, Reporting Patient Safety Events primer, 2019, reviewed 2025. https://psnet.ahrq.gov/primer/reporting-patient-safety-events
- AHRQ PSNet, Adverse Events, Near Misses, and Errors. The no-harm event and near miss definitions for item 41 confirmed. https://psnet.ahrq.gov/primer/adverse-events-near-misses-and-errors
- Marx D, Patient Safety and the Just Culture, 2001. https://psnet.ahrq.gov/node/34749/psn-pdf
- 21 CFR 803.30. A user facility reports a device-related serious injury to the manufacturer within 10 work days. https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-803/subpart-C/section-803.30
- OSHA 3148, 2016. https://www.osha.gov/sites/default/files/publications/OSHA3148.pdf
- US DOJ, ADA Requirements: Service Animals. The two allowed questions and the ban on papers, demonstrations and questions about the disability confirmed. https://www.ada.gov/resources/service-animals-2010-requirements/
- Child Welfare Information Gateway, Infant Safe Haven Laws. The shortest state limit is 72 hours, so 12 hours is within every limit. https://www.childwelfare.gov/resources/infant-safe-haven-laws/
- US DOJ OVW, National SAFE Protocol, 3rd edition, September 2024. https://www.justice.gov/ovw/media/1367191
- Arnstein P and others, Use of Placebos in Pain Management, Pain Manag Nurs 12(4):225, 2011. https://pubmed.ncbi.nlm.nih.gov/22117754/
- 42 CFR 405.1206. The expedited QIO review must be requested no later than the day of discharge. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-405/subpart-J/section-405.1206
- CDC 2007 Isolation Guideline. Disseminated zoster needs airborne and contact precautions, and staff who are not immune stay out. https://archive.cdc.gov/www_cdc_gov/shingles/hcp/infection-control/index.html
- Furosemide injection label. Give 20 to 40 mg over 1 to 2 minutes. Rapid injection is linked to ototoxicity. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018267s029lbl.pdf
- Magee LA and others, SOGC Guideline No. 426, JOGC 44(5):572, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Calcium gluconate 1 g IV as the magnesium antidote. https://health.usf.edu/media/zdrpe3ja/magnesium_sulfate.pdf
- Sodium polystyrene sulfonate onset of 2 to 24 hours. https://www.ncbi.nlm.nih.gov/sites/books/NBK559206/
- Oral temperature after a hot drink. Fundamentals texts give a wait of 15 to 30 minutes. The refs value of 20 to 30 minutes in item 3 falls within that. https://openstax.org/books/fundamentals-nursing/pages/7-2-how-to-perform-vital-signs

The textbook citations (Potter, Yoder-Wise, Hinkle, Halter, Guido) are real editions. Their page content was not checked.

## Needs Arjan's decision

- Approve the rn-s04-92 key change.
- rn-s04-91 and rn-s04-92 are not Management of Care items. After the fixes they are PA and PPT. They do not belong in this batch as written. Decide whether to move them to a pharmacology or physiology batch or drop them. rn-s04-92 cites a Canadian guideline for a US exam item. An ACOG source or an obstetric nursing text may suit it better.
- rn-s04-30 keys two supervision actions. At a respiratory rate of 9/minute and hard to rouse, stimulation and naloxone by protocol would also come first clinically. No distractor offers them, so the key stands. Confirm the framing.
- rn-s04-05 keys the chain of command. The TeamSTEPPS two-challenge rule would also support restating the concern to the surgeon. That is not an option, so the key stands.
- The PSNet primer was reviewed in 2025. Consider updating its year from 2019.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 12 fixes in 10 items, with 1 key change (rn-s04-92). The bank items had no wrong keys. Their defects were false or untraced reasons in rationales and whys. The two extra items had a wrong key, a false distractor reason and wrong Client Needs metadata. `BATCH=s04 npx vitest run tests/bank.test.ts` passes 61 of 61 and `tsc` reports no s04 errors.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
