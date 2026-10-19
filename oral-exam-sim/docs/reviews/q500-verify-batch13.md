# Q500 verification review: batch13

Fresh independent review of the four oral cases in `src/cases/batch13/`. I did not write or edit any of them. The first QA round edited the files in place (including reworking and renaming `postpartum-headache-return-visit` to `postpartum-headache-sixth-day`), so this review treats the current text as a writer revision and reviews the whole of it. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-writer-batch13.md` and `docs/reviews/q500-qa-batch13.md`.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| late-dinner-chest-pain | FAIL | 1 |
| postpartum-headache-sixth-day | FAIL | 3 |
| boarder-hard-to-wake | FAIL | 1 |
| ladder-fall-ankle-sedation | FAIL | 1 |

Most fixes in this batch are titles. I compared every case title with every SAMP and case title in the bank (normalized fuzzy match). One title is an exact match and three are near matches on the same priority topic and the same diagnosis or scenario. The first QA set the precedent of requiring a new title for a duplicate, and the brief forbids reusing a stem or scenario.

## Checks run

- `CASE_BATCH=batch13 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes, 45 of 45.
- No em dashes, en dashes or semicolons in any string. No US spellings outside proper names. No personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` on every case. No mnemonics.
- Stems are 43 to 57 words. Every card weight converts correctly to pounds.
- PubMed ids checked through NCBI E-utilities and DOIs through Crossref. All resolve to the cited work. The WSES, Boyer and WAO PMC pages, the Diabetes Canada chapter, the Healthcare Excellence Canada disclosure page, the AOM PDF, the RCUK page and the Thrombosis Canada PDF open to the right documents. In the Thrombosis Canada PDF (version of 5 February 2024) I confirmed PCC "2000 units fixed dose" or "25 to 50 units/kg with a maximum for single dose of 3000 units".

## late-dinner-chest-pain: FAIL

### Numbers recomputed

- 30 mL/kg at 96 kg is 2.9 L, "about 3 L". Correct.
- Tear at 22:50, repair at 06:00: about 7 hours. Correct after the first QA fix.
- Troponin 6 then 7 ng/L against a 99th percentile of 26: no rise. Consistent.
- CT path timeline (`s-results` 00:30, `s-ctpa` 01:00, `s-turn` 01:40, second troponin 01:50): consistent on every path.

### Required fix

1. File `src/cases/batch13/late-dinner-chest-pain.ts`, field `title`.
   - Current: "Chest pain after a family dinner".
   - Problem: SAMP s05 chest-pain "Chest pain after vomiting" is the same priority topic and the same diagnosis (spontaneous esophageal rupture after forceful vomiting), and the titles are near matches. SAMP s12 also has "Chest pain after a party". The brief forbids reusing a stem or a diagnosis plus setting, and the bank-wide similarity check starts from titles and stems.
   - Required change: a neutral title that does not start "Chest pain after", for example "A grey man at midnight". It must not name the diagnosis.
   - Source: docs/Q500_BRIEF.md rule 3, docs/CASE_SPEC.md (neutral title).

### First QA changes

- `s-ctpa` timeline, water soluble contrast, "about seven hours" in the end node: correct.
- cp-h4 teaching rewritten to the nitroglycerin example the AHA guideline gives: acceptable.
- "A major, avoidable driver of death" and the WSES mortality figures: correct.
- Croskerry 2003 added for cp-pr4 and cp-pr5: verified (PMID 12915363). Appropriate.

### "Needs a physician" items

- Septic shock about 3 hours after the tear: fast but possible. Acceptable.
- Chest tube size not given: acceptable for an oral station.

### Advisory (not required)

- `c-intubate` is partial while its feedback says induction without a pressor and positive pressure before drainage are "both dangerous". A physician may prefer unsafe, as batch11 grades propofol induction before a pressor unsafe.
- cp-pr2 (parallel work up) cites Surviving Sepsis and cp-pr3 (talk with his wife) cites the AHA guideline. Neither covers that content (C2).
- The stem has three sentences after the opening ("It is 23:40.", the patient sentence, and the CT and transfer setting). It stays under 60 words and the setting is needed, so acceptable.

## postpartum-headache-sixth-day: FAIL

### Numbers recomputed

- Severe range 160/110 confirmed 15 minutes apart, treat within 30 to 60 minutes: ACOG 767.
- Labetalol 20, 40, 80 mg every 10 minutes, then hydralazine 10 mg IV with a recheck in 20 minutes, 300 mg cumulative labetalol ceiling: ACOG 767.
- Magnesium 4 g over 15 to 20 minutes then 1 g/h for 24 hours, level 2.4 mmol/L therapeutic, urine output 35 mL/h above the 30 mL/h alarm: correct.
- UPCR 62 mg/mmol over 30. HELLP: platelets 96, AST 148, LDH 690, schistocytes. Creatinine 58 to 96 is a rise of 66 percent, "about two thirds". Correct.
- Recurrence about 1 in 6 (16 percent), ASA 162 mg favoured by SOGC: as quoted in AOM 2023.

### Required fixes

1. File `src/cases/batch13/postpartum-headache-sixth-day.ts`, node `s-partner`, field `phase`.
   - Current: `phase: "17:15"`.
   - Problem: on the partial path `c-xl`, the previous node `s-xl` is stamped 17:30 ("An hour later"), so the clock runs backwards to 17:15. The next nodes `s-pump-dump` and `s-home` are 17:40, which still works.
   - Required change: `phase: "Later that afternoon"`.
   - Source: internal consistency (CASE_SPEC flow rules).

2. Same file, field `title`.
   - Current: "Six days after the birth".
   - Problem: SAMP s47 pre-eclampsia "Four days after a caesarean birth" is the same priority topic, the same diagnosis (postpartum pre-eclampsia in the ED) and a near match in title.
   - Required change: a neutral title that does not use the "N days after ... birth" pattern, for example "Sparkling lights and a newborn". It must not name the diagnosis.
   - Source: docs/Q500_BRIEF.md rule 3.

3. Same file, finding `repeat-bp` and choice `c-treat` label in node `q-first`.
   - Current: finding "15 minutes after triage, seated, with a large adult cuff: 168/110 mmHg." Choice label "I repeated the BP in 15 minutes and got 168/110."
   - Problem: SAMP s15 pre-eclampsia "Headache one week after delivery" opens with a 34 year old, 7 days after a vaginal birth with an epidural, breastfeeding, severe headache and blurred vision, "BP is 168/112 mmHg when repeated 15 minutes later". This case is a 33 year old, 6 days after a vaginal birth with an epidural, breastfeeding, with visual symptoms and a repeat of 168/110 at 15 minutes. The opening reads as a retelling of s15. The later content (HELLP, kidney injury, PRES, labetalol failure, breastfeeding and discharge pressure) is new, so a full rewrite is not needed, but the echoed numbers should go.
   - Required change: use a different confirmed severe value in both places, for example 176/104 mmHg. Nothing downstream depends on 168/110 (the `s-wait-labs`, `s-migraine` and `bp-course` values are separate).
   - Source: docs/Q500_BRIEF.md rule 3.

### First QA changes (rework)

- New frame (midwife day 4 reading instead of a missed ED visit), new card weight and pulse, `q-feeding` replacing the disclosure question, `q-future` replacing the system question, id renamed and `index.ts` updated: acceptable. It removes the near duplicate of the batch15 headache case (that case is now a different diagnosis) and leaves `boarder-hard-to-wake` as the only disclosure question in the batch.
- New grades in `q-feeding`: strong (stay, keep breastfeeding, baby with her, social work), partial (pump and discard, no patient danger), unsafe (discharge tonight with HELLP and PRES). Defensible and consistent with C1.
- NSAID wording (not contraindicated after birth in most hypertensive disorders, stopped here for kidney injury, uncontrolled BP and falling platelets) cited to AOM 2023: acceptable.
- BP target wording showing both SOGC (diastolic about 85 in pregnancy) and ACOG (140 to 150 over 90 to 100 as a first goal): acceptable.
- Hydralazine recheck at 20 minutes, magnesium over 15 to 20 minutes, 80 mL/h fluid limit, contrast and breastfeeding note: correct.

### "Needs a physician" items

- SOGC 426 full text not opened by me either (the DOI resolves to the JOGC record). The postpartum points now rest on AOM 2023, which quotes SOGC, and on ACOG 767. Acceptable.
- Little magnesium in breast milk: consistent with standard lactation references. Acceptable.
- Shared opening with SAMP s15: not acceptable as it stands, fixed by required fix 3.

### Advisory (not required)

- pe-pr6 (plain language and teach back) cites SOGC 426, which does not cover communication (C2).
- `c-wait-labs` (labs first, treat if confirmed) is partial. The signed bank grades "treat once the level confirms" partial (toxic alcohol, digoxin), so I did not fail it.
- Batch14 `postpartum-pleuritic-chest-pain` also has a 33 year old mother with her newborn present. Different diagnosis. Consider a different age.

## boarder-hard-to-wake: FAIL

### Numbers recomputed

- GCS by component: E2 V2 M5 = 9, E3 V4 M6 = 13, E3 V3 M5 = 11. Correct at every time point.
- Gas: pH 6.1 + log(28 / (0.03 x 62)) = 7.28. Consistent.
- Apixaban 5 mg twice daily: only one reduction criterion (creatinine 133 µmol/L or more). Correct.
- PCC 2000 units at 68 kg is about 29 units/kg, inside 25 to 50 units/kg. Confirmed against Thrombosis Canada.
- Dextrose 10 to 25 g IV (Diabetes Canada), naloxone 0.04 mg escalating every 2 minutes and bag valve mask for a resp rate of 12 or less (Boyer), octreotide 50 mcg every 6 hours (Glatstein): correct.
- Last apixaban at 21:00, CT about 06:00: 9 hours. Correct.

### Required fix

1. File `src/cases/batch13/boarder-hard-to-wake.ts`, field `title`.
   - Current: "Hard to wake before morning rounds".
   - Problem: SAMP s07 loc "Hard to wake this morning" is the same priority topic (loc) and overlaps in scenario: an older patient with diabetes and chronic kidney disease, hard to rouse in the morning with a focal deficit, sulfonylurea hypoglycemia, and recurrent hypoglycemia treated with a dextrose infusion and octreotide 50 mcg SC every 6 hours. SAMP s02 "Hard to wake after a busy shift change" and s53 "Hard to wake after a nap" use the same title opening. A near identical title on the same topic invites the near-duplicate flag.
   - Required change: a neutral title that does not start "Hard to wake", for example "A hallway stretcher at dawn".
   - Source: docs/Q500_BRIEF.md rule 3.

### First QA changes

- Gliclazide clearance corrected (hepatic, kidney disease raises hypoglycemia risk): correct.
- Both PCC regimens given, 2000 units about 29 units/kg: verified.
- ACC pathway replaced by Thrombosis Canada and lc-m4 teaching rewritten: verified in the PDF. Appropriate Canadian source.
- "Can slow" apixaban clearance: correct.

### "Needs a physician" items

- PCC dose for apixaban reversal: now matches Thrombosis Canada. Acceptable.
- "When the following patient arrives" for a boarded inpatient: acceptable, as in batch10 `waiting-room-slump`.

### Advisory (not required)

- Uniqueness flag for the bank-wide check, beyond the title: the `q-recurrent` key decision (dextrose infusion plus octreotide for recurrent sulfonylurea hypoglycemia) repeats SAMP s07. SAMP s02 "Hard to wake after a busy shift change" is also an older man with kidney disease given an opioid and a sedative in the ED, with 2 mm pupils and GCS 9. The unreported fall, the real subdural and the trap of blaming it for the second low glucose are new.
- Cefazolin 2 g every 8 hours at an estimated creatinine clearance of about 30 mL/min would usually be every 12 hours. Not a teaching point.
- Finding `found` says he asked for something to help him sleep at 01:00, but the record shows zopiclone at 23:00 and nothing at 01:00. Consider "asked for more pain medication" or a 23:00 time.
- `c-morning` (CT on the morning list) is partial. The signed bank is mixed on "in the morning" choices, so I did not fail it, but a physician may prefer unsafe for an anticoagulated head strike with a new deficit.
- lc-h3 (collateral) cites Boyer, which does not cover collateral history (C2).

## ladder-fall-ankle-sedation: FAIL

### Numbers recomputed

- IM epinephrine 0.5 mg (0.01 mg/kg to 0.5 mg): correct.
- 20 mL/kg at 82 kg is 1.6 L: correct.
- Epinephrine infusion: RCUK 1 mg in 100 mL (10 mcg/mL) at 0.5 to 1 mL/kg/h. At 82 kg that is 41 to 82 mL/h, 6.8 to 13.7 mcg/min, 0.08 to 0.17 mcg/kg/min. The model answer's "about 0.1 to 0.2 mcg/kg/min, or 40 to 80 mL/h" is a fair rounding.
- Tryptase rule: 1.2 x 4.2 + 2 = 7.04. 28.6 is far above. Correct.
- Cefazolin 2 g for 82 kg: correct.

### Required fix

1. File `src/cases/batch13/ladder-fall-ankle-sedation.ts`, field `title`.
   - Current: "A fall from a ladder".
   - Problem: SAMP s06 msk "Fall from a ladder" is the same title once the article is dropped. A case title must not duplicate a bank title (the first QA required a new title in this batch for the same reason).
   - Required change: a neutral title that does not give away anaphylaxis, for example "An alarm after the reduction" or "Cleaning the eavestrough".
   - Source: docs/Q500_BRIEF.md rule 3, docs/reviews/q500-qa-batch13.md (title precedent).

### First QA changes

- Epinephrine infusion rate and RCUK source: verified (see numbers).
- IV 50 mcg boluses allowed in experienced, monitored hands: acceptable.
- No routine steroids: consistent with RCUK 2021 and WAO 2020.
- Non beta lactam (clindamycin) after suspected cefazolin anaphylaxis, with the allergist deciding later on dissimilar beta lactams: acceptable.
- Biphasic timing in WAO wording: correct.
- Family wording that her childhood rash was low risk: correct, and no longer contradicts the hand scrub clue.
- Autoinjector at discharge (WAO, chlorhexidine common outside hospital): acceptable.

### "Needs a physician" items

- Clindamycin with or without gram negative cover for the open fracture: acceptable as written, since the case says to ask pharmacy or microbiology what the wound needs.

### Advisory (not required)

- Uniqueness flag: SAMP s23 anaphylaxis "Collapse while a wound is cleaned" already teaches chlorhexidine as a hidden perioperative culprit. This case's end (testing positive for chlorhexidine) reuses that twist. The sedation setting, the recognition under drapes and the avoidance plan for the operating room are new. The bank-wide check should look at this pair.
