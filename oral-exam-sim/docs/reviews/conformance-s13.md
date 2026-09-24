# Format conformance: batch s13

Batch s13 holds 30 SAMPs: lacerations-01 to 15 and multiple-patients-01 to 15. The physician signed them off on 24 September 2026. This pass changed format only. No `correct`, `select`, `required`, `accept` or `unacceptable` value changed, apart from remapping `correct` to the same option after reordering. No clinical fact, value or timeline changed.

Files edited: `src/samps/s13/lacerations.ts` and `src/samps/s13/multiple-patients.ts`.

## Checks

- `npx tsc --noEmit -p .` shows no errors in `samps/s13`.
- `CONFORM=s13 SAMP_BATCH=s13 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 455 pass, 14 fail. All 14 failures are the expected "keeps its keys" test, one per SAMP with a reworded keyed option (table below). Nothing else fails.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 119 of 119 (30 single, 4 menu, 85 write-in) |
| Updates added or changed | 30 (context moved out of prompts, vitals formatted, two patient lists) |
| Options added | 3 (a fifth option for multiple-patients-01 q1, 13 q2 and 14 q1) |
| Options removed | 0 |
| Distractors reworded | 70 (includes 8 letter labels in multiple-patients-03 q2 and 10 q4) |
| Keyed options reworded | 19 option strings in 15 questions across 14 SAMPs |
| Explanations updated | 16 (to keep detail trimmed from a key, or to cover a new distractor) |
| Stems changed | 25 (ages hyphenated, vitals moved or formatted) |
| Vitals moved to the `vitals` field | 6 SAMPs, 8 values |
| Patient names removed | 0 (none found) |
| Citations completed | 12 |
| Citations updated to a newer version | 1 (Cochrane water review) |

Write-in prompts now read as a question ending in "?", for example "List THREE features of this injury ..." became "What features of this injury ...?". Detail requests were folded into the question ("..., including the dose where relevant?"). Context sentences that sat in a prompt moved to the question's `update`.

Vitals moved: lacerations-04, 05, 08 and 14 (weight), lacerations-07 (temperature 36.9°C) and lacerations-11 (pulse 84/minute irregular, BP 158/80 mmHg). The multiple-patients stems describe several patients, so one vitals block could not say whose values they are. There the values stay in the text, reformatted with CFPC labels and units ("Pulse 58/minute, BP 98/62 mmHg", "respiratory rate 6/minute", "O2 sat 84% on room air", "38.1°C"). Updates got the same formatting.

## Key position across the 30 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 1 | 13 | 13 | 3 | 0 |
| After | 6 | 6 | 6 | 6 | 6 |

The key was the single longest option in 15 of 30 before and 9 of 30 after (limit 10).

Fixed positions: the numeric dose questions (lacerations-05 q4, lacerations-08 q1), the CTAS level question (multiple-patients-02 q2), the patient label questions, and keys that start "No ..." (lacerations-01 q4, 13 q2, 13 q3), which sit last. Distractor wording set the other positions.

## Keyed option rewordings

Every keyed option change is listed here for the orchestrator to log in `docs/conformance-key-edits.json`. For a menu, "before" is in snapshot order and "after" is in the new option order.

| SAMP | Question | Before | After |
|---|---|---|---|
| lacerations-01 | q4 | No prophylactic antibiotics, with instructions to return for signs of infection | No prophylactic antibiotics, return if signs of infection |
| lacerations-02 | q3 | Amoxicillin clavulanate 875/125 mg PO twice daily for 3 to 5 days, with a wound check in 24 to 48 hours | Amoxicillin clavulanate 875/125 mg PO BID, 3 to 5 days |
| lacerations-07 | q2 (menu) | Packing and dressing with delayed primary closure in 3 to 5 days / Oral amoxicillin clavulanate with a wound check in 48 hours | Oral amoxicillin clavulanate, wound check in 48 hours / Packing, delayed primary closure in 3 to 5 days |
| lacerations-09 | q4 | Urgent hand surgery consultation for operative decompression and debridement today | Urgent hand surgery for decompression and debridement today |
| lacerations-10 | q3 (menu) | Cefazolin 2 g IV / Orthopaedic consultation for operative irrigation of the joint | Cefazolin 2 g IV (unchanged) / Orthopaedic surgery for joint irrigation |
| lacerations-14 | q2 | Ophthalmology or oculoplastic referral for repair with canalicular intubation | Ophthalmology or oculoplastic repair with canalicular stent |
| lacerations-15 | q2 | Rabies vaccine 1 mL IM on days 0 and 3, with no immune globulin | Rabies vaccine IM days 0 and 3, no immune globulin |
| multiple-patients-03 | q2 (menu) | Not walking. RR 36 / Not breathing. Starts breathing after the airway is repositioned / Not walking. RR 22, radial pulse absent / Not walking. RR 18, radial pulse present, cannot follow simple commands | Adult B / Adult D / Adult F / Adult G |
| multiple-patients-04 | q1 | Stay and complete the airway and resuscitation, then hand over at the bedside once he is stable | Stay for the airway and resuscitation, then bedside handover |
| multiple-patients-04 | q4 | Tell the day physician directly, confirm read back, and stay until they take responsibility | Tell the day physician with read back, stay until accepted |
| multiple-patients-06 | q3 | Atropine 1 to 2 mg IV, doubling the dose every 5 minutes until the chest is clear | Atropine 1 to 2 mg IV, doubled until chest clears |
| multiple-patients-07 | q3 | An inpatient full capacity protocol that moves admitted patients to ward hallways | Full capacity protocol, admitted patients to ward hallways |
| multiple-patients-08 | q1 | Needle or finger decompression of the right chest of patient A | Needle or finger decompression of patient A's right chest |
| multiple-patients-10 | q4 | A 76 year old with stridor, hoarseness and oropharyngeal swelling, who wants full treatment | Resident D |
| multiple-patients-11 | q2 | Positive pressure ventilation with a bag and mask, starting with 21% oxygen | Positive pressure ventilation by bag and mask in 21% oxygen |

Why these changed. Each "before" option was over 60 characters, over 10 words, or too long for the 1.5 times parity rule. The detail each trim removed now sits in that question's explanation: the wound check timing (lacerations-01, 02, 07), operative consultation (lacerations-09, 10), canalicular intubation (lacerations-14), the 1 mL IM dose (lacerations-15), "directly" and "until they take responsibility" (multiple-patients-04 q4), "once he is stable" (04 q1), "every 5 minutes" (already in the 06 q3 explanation), "inpatient" (07 q3), and bag and mask (11 q2). In multiple-patients-03 q2 and 10 q4 the long patient descriptions moved, word for word, into a lettered list in the question's `update`, as multiple-patients-13 q2 already does. The options are now letter labels, and the keys point to the same people.

## Citation changes

| Source id | Change | Verification |
|---|---|---|
| cig-tetanus | Added year 2026 (last content update June 2026) | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html |
| cig-rabies | Added year 2026 (last partial update September 2026) | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-18-rabies-vaccine.html |
| cochrane-water | Updated to the current version: Fernandez R, Green HL, Griffiths R, Atkinson RA, Ellwood LJ. Water for wound cleansing. Cochrane Database Syst Rev. 2022. It makes the same point as the earlier versions. URL added | https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003861.pub4/full |
| rosen (both files) | Added 10th ed. 2023. Released June 2022 with a 2023 copyright. Follows the example in the brief | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| tintinalli (both files) | Added 9th ed. 2020. Released October 2019 with a 2020 copyright | https://www.harvard.com/book/9781260019933 |
| atls | Added 10th ed. 2018 | https://store.facs.org/atls-student-course-manual-10th-edition |
| nrp | 8th edition became 8th ed. 2021 | https://publications.aap.org/aapbooks/book/694/Textbook-of-Neonatal-Resuscitation |
| csbpr | Completed as Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024. DOI URL added | https://doi.org/10.1017/cjn.2022.344 |
| abls | Advanced Burn Life Support Course Provider Manual. 2018 update | https://www.readkong.com/page/advanced-burn-life-support-course-provider-manual-2018-3855651 |
| oha-codes | Named the work: OHA Emergency Management Toolkit. Developing a sustainable emergency management program for hospitals, with standardized hospital emergency codes. 2008 | Found by web search only. The copy at http://www.mtpinnacle.com/pdfs/Emergency%20Management%20Toolkit.pdf returned 503 when fetched |
| criticall | Now "CritiCall Ontario. About CritiCall Ontario. 24 hour emergency consultation and referral service for Ontario hospital physicians. Web page, accessed 2026." URL added | https://www.criticall.org/about-criticall-ontario/ |

Not changed: on-rabies (2020), hppa (R.S.O. 1990), idsa-ssti (2014), singer-nejm (1997), asra-last (2018), green-ketamine (2011), konda-ct (2013), cchr (2001), ctas (2017), start (1996), jumpstart (2002), salt (2008), ipass (2014), cpsi-ciaf (2012), cpsi-disclosure (2011), caep-crowding (2013), sogc-pph (2022), ssc (2021), eddleston-op (2008). Each already names a body or author, a work and a year.

## Needs physician decision

1. **multiple-patients-10 q4.** The update says "Four residents arrive together", but the question lists five residents. I left the text as it was. Suggest "Five residents arrive together".
2. **CritiCall citation.** The CritiCall web page has no publication date, so the citation gives the year it was accessed (2026). It passes the year check, but it is an access date, not a publication year. If you want a dated document, CritiCall's "Trauma Centre Consultation Guidelines" (2019) fits multiple-patients-08 but not the STEMI (01) or obstetric (11) cases.
3. **OHA toolkit year.** 2008 comes from search results that quote the toolkit's copyright. I could not open the document itself. Please confirm, or name the current OHA emergency codes document.
4. **Textbook editions.** Tintinalli is cited as the 9th edition (2020), which I could verify. Search results suggest a 10th edition exists but I could not confirm it. ATLS is cited as the 10th edition (2018). Update if you want the newest editions cited.
5. **New distractors and explanation sentences.** Three single questions had 4 options and needed a fifth. The added options are "No patient until all four are triaged" (multiple-patients-01 q1), "No patient, transfer all to the trauma centre" (13 q2) and "No patient, keep the bay free for a new arrival" (14 q1). Each came with one explanation sentence saying why it is wrong. Please confirm they are plausible and clearly wrong.
6. **Distractors with new content.** These go beyond rewording and need a check that each is still clearly wrong:
   - lacerations-06 q3: "Clostridium tetani" became "Clostridium perfringens".
   - multiple-patients-06 q3: "then reassess" was added to three atropine or glycopyrrolate options, and "Pralidoxime alone without atropine" became "Pralidoxime infusion alone, without atropine".
   - multiple-patients-08 q1: a cefazolin dose was added ("IV cefazolin 2 g for patient C's open shin wound").
   - multiple-patients-09 q2: "Urine culture" became "Urine culture and Gram stain", and "CT of the abdomen" became "CT of the abdomen and pelvis".
   - multiple-patients-11 q2: the options became "Free flow 100% oxygen by face mask and reassess", "Intubate and give epinephrine through the tube", "Naloxone IM, then reassess breathing" and "Start chest compressions coordinated with ventilation".
   - lacerations-11 q2: "Observe for 4 hours and image only if symptoms develop" was shortened to "Observation for 4 hours".
   - Some distractors lost reason text, for example "No imaging because she meets no high risk criteria" became "No imaging".
7. **lacerations-15 q2 explanation (not changed).** It says that after a 2 dose pre-exposure series given 3 or more years before, the Canadian Immunization Guide advises full prophylaxis with immune globulin. Please check this against the current rabies chapter, which was updated in 2026.

## Notes

- The multiple-patients stems keep vitals in the text (see Counts). If a vitals block is wanted for single focus stems such as multiple-patients-07, it would need a line saying whose vitals they are.
- lacerations-07 q2: the menu prompt moved "after the wound is cleaned" into an update. In both menus of the batch that said "Which TWO", the prompt now starts "Which of the following". The app adds "Select two."
