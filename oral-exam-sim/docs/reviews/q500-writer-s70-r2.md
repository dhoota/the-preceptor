# Q500 writer revision round 2: s70, Anaphylaxis

Writer revision of `src/samps/s70/anaphylaxis.ts` against the fresh verify report `docs/reviews/q500-verify-s70.md`. anaphylaxis-50 and anaphylaxis-52 passed and were not changed. All items stay `reviewed: false`, `version: 1`, author "Preceptor". Ids are unchanged. This revision needs a fresh independent review.

Checks run: the type check shows no s70 errors, and `SAMP_BATCH=s70 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passes (128 of 128).

Every new decision was checked against all anaphylaxis SAMPs, the related SAMPs (shock, sob, airway, asthma-copd, tox), the coordinator's catalogue and the oral cases refractory-anaphylaxis-beta-blocker, ladder-fall-ankle-sedation and ace-inhibitor-angioedema-airway.

## Required fixes and how each was done

### anaphylaxis-48 q4 (tryptase rule repeated the ladder-fall oral case and s23)

Replaced with a new KF2 decision. The update says he recovers after two IM doses and 2 L, then 5 hours later, undressed and with no new sting, hives return and he vomits four times in 20 minutes, with BP 128/74 mmHg and a clear chest. The prompt asks which option best describes the episode. Key "Biphasic anaphylaxis". Distractors: epinephrine side effect, recurrent hives without anaphylaxis, vasovagal reaction, viral gastroenteritis.

The teaching point is that skin involvement with severe gastrointestinal symptoms meets the WAO 2020 criteria, "especially after exposure to non-food allergens", even with a normal pressure and a clear chest. This is checked against the bank. anaphylaxis-08 q2 keys the treatment of a biphasic recurrence that includes hypotension and wheeze (KF3). The oral cases mention biphasic timing only in the context of observation. No item keys recognizing an incomplete recurrence after a sting. No tryptase content remains.

### anaphylaxis-49 q3 (third weight-based IM dose with tenfold distractors, an unrecorded D1 claim)

Replaced with an infant-specific KF3 decision. No D1 row was added. After IM epinephrine, his saturation still reads 97% on room air. The prompt asks for the most appropriate oxygen therapy. Key "Face mask oxygen at 10 L/minute". Distractors: blow-by oxygen, nasal prongs at 1 L/minute, bag-valve-mask ventilation, and "No oxygen while saturation is normal". Source: Carlisle and Lieberman 2021, which advises "high-flow supplemental oxygen (8 to 10 L/m)" by infant face mask. The question does not touch dose, IM site or positioning.

The other options were rejected for these reasons:
- Intraosseous access after failed IV attempts was considered and rejected, because shock-02 q2 and pediatric-fever-21 q3 key it.
- Infant fluid bolus volume was rejected, because anaphylaxis-18, -23 and -24 key it.

WAO 2020 is no longer cited in this SAMP and was removed from its sources.

### anaphylaxis-51 q1 (reference named too late)

The q1 update now opens "Using the Resuscitation Council UK 2021 refractory anaphylaxis algorithm, ...". Nothing else in q1 changed.

### anaphylaxis-51 q2 (infusion rate repeated the ladder-fall oral case)

As decided, the SAMP was changed and the oral case was not. The rate question is removed, and no rate or per-kg conversion remains anywhere in the SAMP. The questions are now ordered as follows:

- **q2:** the infusion line question that was q3. Its update says only that 1 mg in 100 mL of normal saline is prepared for a peripheral infusion. The reviewer passed its text.
- **q3 (new, menu, KF3):** after the infusion starts, the skin around the cannula becomes pale, cool and swollen, and her BP falls to 84/50 mmHg. The prompt asks which immediate actions to take, select two. Keys: "Infiltrate phentolamine at the site" and "Restart the infusion in another vein". Distractors: ice pack, saline flush, holding epinephrine, hyaluronidase, removing the cannula at once. Source: London Health Sciences Centre vasopressor extravasation protocol, 2019. The protocol moves the vasopressor to another site, leaves the catheter in place, gives phentolamine 10 mg in 10 mL partly through the catheter and the rest intradermally, and applies a warm compress distal to the site. No SAMP or oral case keys vasopressor extravasation.
- **q4:** its update adds "The infusion now runs well through a new IV". The rest is unchanged.

A nebulized epinephrine stridor question was drafted first and then dropped. The refractory-anaphylaxis-beta-blocker oral case model answer already says "Nebulized epinephrine may help upper airway edema" at the same moment.

## Optional note applied

anaphylaxis-48 q2: the explanation now says that bedside ultrasound can miss a retroperitoneal leak, so the unchanged aorta and absent free fluid do not exclude rupture. The deciding reason stays the generalized hives after a sting.

## Key feature coverage (20 questions)

| Key feature | Questions | Items |
|---|---|---|
| KF1 | 6 | 48 q1, 48 q2, 49 q2, 50 q1, 50 q2, 52 q2 |
| KF2 | 4 | 48 q4, 49 q1, 50 q3, 52 q1 |
| KF3 | 6 | 48 q3, 49 q3, 51 q1 to q4 |
| KF4 | 4 | 49 q4, 50 q4, 52 q3, 52 q4 |

Every key feature is covered. There are two menu questions (50 q3, 51 q3). Single key positions pass the 25% cap, and the key is the longest option in no more than 35% of singles.

## Sources (opened this round)

- Cardona V and colleagues. World Allergy Organization anaphylaxis guidance 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/. Table 2 criterion 1c reads "Severe gastrointestinal symptoms (eg, severe crampy abdominal pain, repetitive vomiting), especially after exposure to non-food allergens". The guidance also says "Around half of biphasic reactions occur within the first 6 to 12 h".
- Carlisle A, Lieberman J. Clinical management of infant anaphylaxis. J Asthma Allergy. 2021. https://www.dovepress.com/clinical-management-of-infant-anaphylaxis-peer-reviewed-fulltext-article-JAA. Confirmed the high-flow oxygen of 8 to 10 L/minute by infant face mask.
- Resuscitation Council UK. Refractory anaphylaxis algorithm. 2021. https://resus.org.uk/media/334/download. PDF downloaded and the text reread.
- London Health Sciences Centre, Drugs and Therapeutics Committee. Vasopressor extravasation management protocol (adults). 2019. https://lhsc.on.ca/media/8366/download. PDF downloaded and the text read. The approval date is 5 February 2019.
- Unchanged and not reopened: FPIES consensus 2017, Canadian Immunization Guide, CSACI, Shmuely 2018, Satoh 2020 and Health Canada.

## Uncertain, for the reviewer and the physician

1. anaphylaxis-49 q3 assumes oxygen is indicated for an infant in shock with a normal saturation. Carlisle supports it, and the WAO text quoted above ties high-flow oxygen to respiratory distress and repeated epinephrine.
2. anaphylaxis-51 q3 uses a single Canadian hospital protocol rather than a national guideline. No national Canadian extravasation guideline was found. The hyaluronidase distractor reason (it is used for non-vasoconstricting irritant leaks) is standard pharmacology and is not stated in the LHSC protocol.
3. anaphylaxis-48 q4 describes biphasic recurrence by its usual meaning: return after recovery without re-exposure. The WAO text read gives the timing but no formal definition.
