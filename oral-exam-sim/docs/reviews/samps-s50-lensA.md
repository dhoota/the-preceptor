# SAMP review: batch s50 (Shock/dehydration), Lens A (clinical truth)

Reviewer lens: A, clinical truth. Scope: `src/samps/s50/shock.ts` (shock-16 to shock-47) and `src/samps/s50/review-extra.ts` (shock-48, shock-49). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after edits: `tsc` shows no errors in `samps/s50`. `SAMP_BATCH=s50 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 683 passed. No other batch broke test loading during this review.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| shock-45 | q4 | update, prompt, explanation, sources | Whole bowel irrigation was keyed while the child was in shock with bloody vomit and bloody diarrhea. Hemodynamic instability and significant GI bleeding are listed contraindications, so "No gut decontamination" was defensible. Added an update in which he is resuscitated, awake and no longer bleeding, with tablets still on X-ray. Rewrote the explanation to state the contraindications. Added the Ontario Poison Centre protocol as the source. | high |
| shock-48 (extra) | q1 | correct | Key was "Bradycardia of 38/minute" (index 0). The explanation argues for the QRS of 128 ms, and bradycardia occurs with any beta-blocker. Key changed to index 3. | high |
| shock-49 (extra) | q2 | explanation | The explanation cited "a serum lactate of 7.8 mmol/L seen on the first blood gas". The case gives no such value, and a lactate says nothing about a transfusion target. Sentence removed. | high |
| shock-22, 23, 42 | all ssc items | sources | Cited the 2021 Surviving Sepsis Campaign guideline. The 2026 adult guideline (Prescott et al.) replaces it. Citation updated. The keys hold under 2026: at least 30 mL/kg in 3 hours, dynamic measures, norepinephrine first, peripheral start, vasopressin then epinephrine, IV corticosteroids, antibiotics within 1 hour for shock and 3 hours for possible sepsis without shock. | high |
| shock-22 | q3, q4 | explanation | Attributed specific norepinephrine thresholds (0.25 to 0.5 mcg/kg/minute for vasopressin, 0.25 for 4 hours for steroids) to the guideline wording. The 2026 statement says "escalating doses". Reworded so the numbers read as the usual practice. The key is unchanged. | medium |
| shock-38 | all | sources, q3 explanation | Cited the 2020 pediatric Surviving Sepsis guideline. The 2026 edition (Weiss et al., Intensive Care Med) replaces it. Citation updated. q3 now matches the 2026 wording: peripheral access, or an intraosseous needle already in place, rather than delay. | high |
| shock-18 | q3 | source | Cited the AAP 2018 guideline where a current Canadian one exists. Replaced with the CPS position statement on maintenance IV fluids, updated 2024, which covers 1 month to 18 years and recommends isotonic dextrose-containing fluid. The key (D5 0.9% saline with KCl) holds. | high |
| shock-16 | q2 | explanation | The reason for rejecting rectal misoprostol was incomplete. SOGC 431 names misoprostol an adjunct and says the rectal route is inferior and should not be used. Explanation now says so. | medium |
| shock-33 | q1 | explanation | Said children stay normotensive until about 30% blood loss. The cited ATLS 10th edition places hypotension at more than 45% loss. Also said she "moves normally", which the stem never states. Neurogenic shock is now rejected on her tachycardia instead. | high |
| shock-34 | q3 | vitals, explanation | The writer said the AHA statement does not rank vasoactive agents. It does: milrinone first-line for inotropy, with epinephrine and dopamine reserved for hypotension and cardiogenic shock. The explanation now rests on that. Lowered BP from 84/60 to 80/54 mmHg so the hypotension that decides the key is unmistakable in a 15-year-old. | medium |
| shock-32 | q2 | explanation | "Vitamin K alone starts to lower the INR only after about 6 hours" is inaccurate. IV vitamin K begins to act within a few hours. Reworded to "takes several hours, too slow for active hemorrhage". | low |
| shock-32 | q2 | explanation | Coordinator check on PCC dosing. s50 has no numeric PCC option, so no key breaches the NAC single-dose cap of 3 000 units. The explanation said only "dosed by INR or weight". It now gives her dose under NAC 2022: 2 000 units for INR 4.8, or 35 units/kg (about 2 000 units at 58 kg), below the 3 000 unit cap. | low |
| shock-29 | q1 | explanation | "Blood in the urine is common in both renal colic and aneurysm" overstated how often hematuria occurs with aneurysm. Reworded. | low |
| shock-37 | q3 | explanation | Said a stent or balloon controls bleeding "for up to 24 hours". The 24 hour limit applies to balloon tamponade. Stents stay longer. Reworded. | low |
| shock-42 | q2 | prompt | The prompt asked about "lung ultrasound findings", but three options are cardiac or IVC findings. Changed to "bedside ultrasound findings". | medium |
| shock-42 | q2 | sources | The lung ultrasound citation (Volpicelli 2012) now has a 2025 focused update, published 2026. Citation updated. | low |

## Key changes

- shock-48 q1 (review-extra): index 0 "Bradycardia of 38/minute" changed to index 3 "QRS duration of 128 ms". The explanation, and the same item in shock-26, support the QRS.
- No key changed in `shock.ts`. shock-45 q4 keeps its key. The stem now carries an update that makes it true.

## Items the caller asked to check first

- **shock-16 (SOGC 431 uterotonic order).** I read the full guideline text (UBC CPD copy). Oxytocin is first line. Bimanual compression is a first-line measure while drugs take effect. Ergonovine (not in hypertension) and carboprost (not in asthma) are second line. Rectal misoprostol should not be used. TXA is an adjunct to uterotonics. O negative, Kell negative blood is the emergency option. Both keys (q2, q4 menu) hold.
- **shock-18 (pyloric stenosis fluid).** The key, D5 0.9% saline with KCl 20 mmol/L, holds. The CPS statement (2024) recommends isotonic maintenance fluid with dextrose from 1 month of age. The source is now Canadian.
- **shock-27 (pH target).** Bruccoleri and Burns 2016 state an arterial pH of 7.45 to 7.55 in their dosing protocol (full text on PMC). Some texts give 7.50 to 7.55, which sits inside the keyed range, so the key holds.
- **shock-34 q3.** The key is supported directly by the AHA statement (epinephrine for hypotension and cardiogenic shock). See Needs physician decision for the new Canadian guideline.
- **shock-38 q3.** The umbilical vein claim is true. Umbilical venous access is a newborn route and is not usable at 7 weeks. The key holds under the 2026 pediatric guideline.
- **shock-42 q1.** "Norepinephrine early, cautious fluid" remains a judgment. The 2026 adult guideline still suggests at least 30 mL/kg (conditional, low certainty). With anuria, EF 30%, crackles and SpO2 90%, the distractor "30 mL/kg over 1 hour" is faster than the guideline and clearly unsafe, so the key is best among the options. Flagged below.

## Sources verified

- SOGC Guideline No. 431, Robinson D et al. 2022. Full text read: https://ubccpd.ca/sites/default/files/documents/Guideline%20431-%20PPH_0.pdf . PubMed https://pubmed.ncbi.nlm.nih.gov/36567097/
- Bruccoleri RE, Burns MM. J Med Toxicol 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4781799/ (pH 7.45 to 7.55, QRS 100 and 160 ms, 1 to 2 mEq/kg)
- Prescott H, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign 2026. Crit Care Med 2026. https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
- Weiss SL et al. Surviving Sepsis Campaign pediatric guidelines 2026. Intensive Care Med 2026. https://pubmed.ncbi.nlm.nih.gov/41870559/ . Recommendations checked through the Guideline Central summary https://www.guidelinecentral.com/guideline/5149074/
- Sniderman J, Buba M, Chan K. CPS position statement on maintenance IV fluids, updated 2024. https://cps.ca/en/documents/position/acute-hyponatremia-in-hospitalized-children-and-youth
- Ontario Poison Centre. Whole bowel irrigation protocol. February 2025. Full text read. https://www.ontariopoisoncentre.ca/siteassets/pdfs/english/patient-care-resources-documents/whole-bowel-irrigation-protocol-feb-2025.pdf
- Law YM et al. AHA pediatric myocarditis statement. Circulation 2021. PubMed 34229446. Inotrope and referral wording checked through excerpts at http://www.tomwademd.net/links-to-and-excerpts-from-the-2021-aha-diagnosis-and-management-of-myocarditis-in-children-a-redo/
- ATLS 10th edition. Pediatric hypotension at more than 45% loss, confirmed by several secondary sources (for example http://www.tomwademd.net/pediatric-trauma-and-pediatric-shock-from-the-atls/)
- Volpicelli G et al. PoCLUS 2025 focused update. Intensive Care Med 2026. https://pubmed.ncbi.nlm.nih.gov/42257880/
- Cheng A. CPS anaphylaxis statement 2011, reaffirmed 2018. PubMed 22211074.
- Confirmed on PubMed (author, journal, year match the citation): Le Bas 2014 (24373705), Holliday and Segar 1957 (13431307), Aspelund 2007 (17210480), Freifeld 2011 (21258094), Stevens 2014 (24973422), Mermel 2009 (19489710), Bornstein 2016 (26760044), Rotella 2020 (32310006), Farkas 2020 (32565167), Miura TG18 2018 (28941329), Chang and Rangan 2011 (21975503), Lavagno 2016 (26530059), SMFM Consult #47 2019 (30684460), Speiser 2018 (30272171), ESVS Wanhainen 2024 (38307694), Rossaint 2023 (36859355), Yee 2007 (17950133), Po SOGC 414 2021 (33453378), Andrade CCS AF 2020 (33191198, no newer CCS AF guideline found).
- NAC. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada (INR-based 1 000, 2 000 or 3 000 IU, weight-based 25, 35 or 50 IU/kg, single dose not above 3 000 IU, vitamin K IV)
- Known and not re-fetched, but not in doubt: WOMAN trial Lancet 2017, Perera RUSH 2010, Anseeuw 2013, Byrne ESC ACS 2023, SMART 2018, WATERFALL 2022, ABLS 2018, Rosen 10th edition, Diabetes Canada 2018 CKD chapter (the SADMANS list is confirmed as Diabetes Canada guidance).

## Needs physician decision

- **shock-37 and shock-49 (Baveno).** Baveno VIII was published in J Hepatol in August 2026. It says earlier statements not revised remain valid, but summaries mention refined transfusion thresholds. I could not open its full text. The keys (octreotide plus ceftriaxone, Hb 70 to 80 g/L, tamponade or stent as a bridge to TIPS) match Baveno VII, which is still the citation. Please confirm the transfusion target against Baveno VIII.
- **shock-34 q3.** A Canadian guideline now exists: CCS/Canadian Pediatric Cardiology Association focused guidelines on acute heart failure in children (Jeewa A et al., Can J Cardiol 2026, PubMed 41951283). It suggests milrinone over dobutamine or levosimendan. I could not verify its wording on hypotension or cardiogenic shock, so I kept the AHA source. Consider citing it once checked. The key depends on the hypotension.
- **shock-42 q1.** The key is a judgment against a conditional 30 mL/kg suggestion. It is defensible but not stated by any guideline.
- **shock-48 and shock-49 (review-extra).** Both are near-verbatim copies of shock-26 and shock-37 (same stem, title and options). They would fail the near-duplicate stem test if added to the bank. I fixed their planted errors so they are not wrong, but I recommend rejecting both.
- **shock-21.** Most provinces screen newborns for CAH. A salt-wasting crisis at 12 days is still plausible (missed or delayed screen, or a province without screening). No change made.

## Summary

- 32 SAMPs in `shock.ts` and 2 in `review-extra.ts` reviewed, question by question.
- 16 fix rows: 3 wrong clinical content or key (shock-45 q4, shock-48 q1, shock-49 q2), 4 outdated or non-Canadian sources (shock-18, 22/23/42, 38, 42 lus), 7 false, overstated or incomplete reasons in explanations (shock-16, 22, 29, 32 twice, 33, 37), 1 key basis rewritten with a stem change (shock-34), 1 prompt mismatch (shock-42).
- 1 key change (shock-48 q1, extra file).
- Most serious errors: whole bowel irrigation keyed in an unstable, bleeding child (shock-45 q4), the wrong key in shock-48 q1, and an invented lactate in shock-49 q2.
- SAMP ids with a defect: shock-16, shock-18, shock-22, shock-23, shock-29, shock-32, shock-33, shock-34, shock-37, shock-38, shock-42, shock-45, shock-48, shock-49.
