# SAMP final check 2: SAMPs rebuilt or rekeyed by a reviewer

Independent review of 12 SAMPs that a reviewer rebuilt or rekeyed during review. Both lenses, a search of the whole bank by meaning, and the two added checks (hedged-key cue, mock mode shows every question at once). Every citation was opened or confirmed by search. Files touched: src/samps/s32/loc.ts, s44/multiple-patients.ts, s45/multiple-trauma.ts, s46/pediatric-fever.ts, s47/pre-eclampsia.ts. s53/tox.ts was reviewed and not changed. All SAMPs stay reviewed: false.

## Verdicts

| SAMP | Verdict | What changed |
|---|---|---|
| loc-24 | fixed | q3 keyed "Her usual alertness and speech", the same key and near the same prompt as loc-26 q4 in the same batch. The prompt ("differs from usual") also cued the key by wording. It cited the GCS paper, which does not cover collateral history. q3 now asks who can describe her alertness in the first hour after the bump. The stem now says her father collected her an hour after the bump. Key "Her daycare staff", position 4 to 0. Source is now PECARN (Kuppermann, Lancet 2009), with its predictors for children aged 2 and older stated correctly. q1, q2 and q4 hold against Provan 2019 (platelets must not be postponed in ICH, IV steroid with IVIG within 24 hours, plasmapheresis not recommended, no marrow in typical ITP). |
| loc-29 | fixed | q3 (CT after a head strike on apixaban) cited Newman, which does not cover imaging. It now cites NICE NG232 2023 (CT within 1 hour for GCS below 15 at 2 hours, a separate anticoagulant pathway), and one sentence was added to the explanation. Keys hold against Newman 2009. The xylazine story is gone, so there is no collision with tox-35. |
| loc-31 | fixed | In mock mode the q3 prompt "separates her likely diagnosis from lead poisoning" told the candidate that the q1 answer is not lead. q3 now asks for the finding most specific for her likely diagnosis. The key is unchanged (dark urine on standing), and the explanation was rewritten to match. Keys hold against Anderson 2005 (spot urine PBG, sulfonamides as a trigger). |
| loc-32 | fixed | q2 said furosemide and mannitol have "no established role". WMS 2024 does not address them that way. It now says the WMS guideline recommends neither. Dexamethasone 8 mg then 4 mg every 6 hours and oxygen to above 90% match WMS 2024. The GCS of 12 (E3 V4 M5) was recomputed. Against pulmonary-edema-27 (HAPE): both are helicopter evacuations of a climber, and the drug menus overlap (loc-32 keys dexamethasone with nifedipine as a distractor, and pulmonary-edema-27 does the reverse). The diagnosis, the keyed decisions and the key features differ (LOC differential and GCS against CPAP and nifedipine). This is not a copy. See For the physician. |
| multiple-patients-22 | pass | Norovirus outbreak with cohorting, the hypotensive older woman first, nurse-led oral fluids and a public health report. Checked against CDC 2011 (cohorting, reporting, 48 to 72 hours off work). No other outbreak or wedding cluster in the bank. |
| multiple-patients-35 | fixed | q3 (fomepizole) explanation misstated AACT 2002. It said "an osmolal gap above 10 or a metabolic acidosis". The criteria are a methanol level above 200 mg/L, or a known toxic ingestion with an osmolal gap above 10, or strong suspicion with two of pH below 7.3, bicarbonate below 20 and osmolal gap above 10. The key holds: the 38-year-old woman meets two (bicarbonate 18, gap 14) with a pH of 7.31. The men had no bicarbonate in the stem, so bicarbonate 6 and 5 mmol/L were added and the stem was trimmed to stay under the word limit. q4 option "Wait for transfer before asking for help" pointed to the q2 key (transfer for dialysis) in mock mode. It is now "Ask for help only if one worsens", and the key moves from position 1 to 2. EXTRIP criteria for q2 were rechecked. |
| multiple-trauma-40 | fixed | q4 (suprapubic catheter) holds against AUA 2020: prompt drainage, a suprapubic tube as the preferred initial management, and primary realignment only when stable. The explanation now states the suprapubic tube recommendation. q2 explanation said the groin pain "comes from the pelvic fracture", but no fracture was ever shown. Reworded. |
| multiple-trauma-46 | fixed | q2 copied the decision and framing of multiple-trauma-21 q1 (penetrating lower abdominal injury, a newly anxious man, "which finding signals blood loss"). Its key rested on the old ATLS 9th edition table (respiratory rate 20 to 30 in class II), which the cited 11th edition no longer uses. Its BP option showed a narrowed pulse pressure that the explanation itself called a sign of bleeding. q2 was rebuilt: a transient response to a second 500 mL bolus. The key is "Red cell transfusion now", against saline, norepinephrine, lorazepam and repeat vitals, from ATLS. The q3 prompt no longer says "bleeding", which would have implied the q2 key in mock mode. q1 (moist dressings, PHTLS 10th edition 2023) and q3 (serial lactate and base deficit, European guideline 2023 R7 and R8) hold. KF5 is kept. |
| pediatric-fever-19 | pass | Grade IV VUR with a cold. Urine testing is by catheter with a dipstick screen first (CPS UTI statement, posted August 2026). No antibiotic after normal tests (NICE NG143). RIVUR recurrence of about 1 in 4 on placebo is confirmed. No other VUR case in the bank. |
| pediatric-fever-43 | fixed | Checked against CPS Burstein 2023 (in PCH 2024) and its May 2026 update. That update allows discharge or observation at 61 to 90 days, oral or IV antibiotics for a positive urinalysis with normal markers (cefixime 8 mg/kg PO daily), and an LP guided by markers, not by the urinalysis. Defects found. (1) The distractor "Admit for IV antibiotics for 48 hours" was also defensible under CPS. It is now "Admit for a 7 day IV antibiotic course". (2) The explanation quoted a "do not require hospitalization" line that CPS writes for 29 to 60 days. Rewritten. (3) The stem said the markers were "normal" and gave no values. It now gives ANC 3.6, CRP 8 and PCT 0.12, which pass both the PECARN and the Step by Step cut-offs. (4) The stem copied the template of pediatric-fever-20, with a parent's rectal temperature, "fed a little less than usual", wet diapers, capillary refill, fontanelle, no source and the same 4.6 kg. Reworded, and the weight is now 5.4 kg. q2 was recomputed: 81 mg is 2.5 mL of 32 mg/mL. The distractors are 1 mL (the drops volume, 6 mg/kg), 4 mL (24 mg/kg), 5 mL and 7.5 mL. (5) The q3 update "Twenty-four hours later" echoed the q1 key "review in 24 hours" in mock mode. It now reads "The next day". |
| pre-eclampsia-34 | fixed | q2 (echocardiography) holds: ESC 2025 recommends TTE first line in any pregnant woman with new or unexplained cardiovascular signs or symptoms (class I, level C). The q3 update opened "Echocardiography shows ...", which named the q2 key in mock mode. The echo result was not needed for q3 and is removed. fullPIERS predictors and the SOGC magnesium statements were rechecked. No other antenatal pulmonary edema item keys echo. |
| tox-35 | pass | q4 (wean in 50% steps, then watch 4 to 6 hours) matches the Atlantic Canada Poison Centre pediatric naloxone page (updated 02/2020) word for word. The 0.4 mg/hour rate is two thirds of the 0.6 mg effective dose. Naloxone may last as little as 45 minutes. Toce 2017 figures (55% naloxone, 41% ICU, onset past 8 hours in two) are confirmed. No other naloxone weaning key in the bank. |

Counts: pass 3 (multiple-patients-22, pediatric-fever-19, tox-35), fixed 9, re-rebuilt 0. One question was rebuilt within a fixed SAMP: multiple-trauma-46 q2, because it copied multiple-trauma-21 q1. That question needs a second look.

## Sources verified

- Provan 2019 ICR, Blood Adv: https://pmc.ncbi.nlm.nih.gov/articles/PMC6880896/
- Kuppermann 2009 PECARN, Lancet: https://doi.org/10.1016/S0140-6736(09)61558-0
- NICE NG232 2023: https://www.nice.org.uk/guidance/ng232
- Newman 2009 PHS, Neurocrit Care: https://link.springer.com/article/10.1007/s12028-008-9125-4
- Luks 2024 WMS altitude: https://pubmed.ncbi.nlm.nih.gov/37833187/
- Barceloux 2002 AACT methanol (criteria confirmed from secondary sources quoting it): https://pubmed.ncbi.nlm.nih.gov/12216995/
- Morey 2021 AUA Urotrauma 2020: https://pubmed.ncbi.nlm.nih.gov/33053308/
- CPS febrile young infants (Burstein), updated May 2026: https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days
- CPS UTI stewardship (Barton), posted August 2026: https://cps.ca/en/documents/position/management-urinary-tract-infections
- ESC 2025 pregnancy guideline: https://pubmed.ncbi.nlm.nih.gov/40878294/
- Atlantic Canada Poison Centre, naloxone pediatric: https://atlanticcanadapoisoncentre.ca/naloxone-hydrochloride-pediatric.html
- Toce 2017, Clin Toxicol: https://pubmed.ncbi.nlm.nih.gov/27756148/

## For the physician

- multiple-trauma-46 q2: ATLS 10th and 11th editions changed the hemorrhage class table. As I recall it, respiratory rate is unchanged in class II and pulse pressure falls. I could not open the 11th edition table. The rebuilt question keys the transient-responder concept instead. Please confirm the ATLS 11 wording for transient responders.
- loc-24 q2 keys platelets with IVIG and IV steroid for ITP with an intracranial bleed. gi-bleed-16 in s39 teaches the same treatment across its q2 and q3 for ITP with melena in an adult. The patient, the bleed site and the topic differ, so it was kept. Drop one if you want no shared teaching.
- loc-32 and pulmonary-edema-27 are both altitude illness with a helicopter evacuation. The keys differ (dexamethasone against CPAP and nifedipine), but each uses the other's key as a distractor. Keep both or drop one.
- Mock mode cues left in place because the stem alone decides the earlier key: loc-24 q2 update ("CT shows ...", after the q1 CT question), multiple-trauma-40 q4 update ("complete tear", after the q3 urethrogram question), and tox-35 q3 and q4 naming naloxone after q2 (pinpoint pupils, a missing buprenorphine tablet and a respiratory rate of 10 decide q2).
- multiple-patients-22 q1 is mapped to KF4 (activate disaster plans), but it tests cohorting. No option offers activating the hospital's external disaster plan.
- pediatric-fever-43: CPS also allows observation in hospital at 61 to 90 days. No option offers that, so the key is the single best among those given.

## Checks

- SAMP_BATCH=s32, s44, s45, s46, s47 and s53: npx vitest run tests/samps.test.ts tests/samp-quality.test.ts. All pass (675, 451, 715, 687, 476, 743).
- npx tsc --noEmit -p . passes.

## Lead note for the physician
multiple-trauma-46 q2 was rebuilt in this final check. It has had one review. Please read it before sign-off.
