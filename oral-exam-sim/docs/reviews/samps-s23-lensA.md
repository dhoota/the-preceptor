# Review of batch s23 (anaphylaxis), Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: `src/samps/s23/anaphylaxis.ts` (anaphylaxis-16 to anaphylaxis-47) and `src/samps/s23/review-extra.ts` (anaphylaxis-48 and anaphylaxis-49). I read every stem, option and explanation against the stem and the cited source. Every SAMP stays `reviewed: false`.

Checks after the edits: `npx tsc --noEmit -p . | grep samps/s23` shows no errors. `SAMP_BATCH=s23 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 679 of 679. No other batch broke test loading during this review.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| anaphylaxis-48 (extra) | q1 | correct | Key pointed to "Hypertrophic cardiomyopathy" (index 2). The explanation argues for food anaphylaxis. Key set to index 0 | high |
| anaphylaxis-49 (extra) | q2 | explanation | The explanation cited "serum lactate of 7.8 mmol/L on the first blood gas" as confirming hereditary angioedema. The stem gives no blood gas, and lactate has no role in diagnosing HAE. Sentence removed | high |
| anaphylaxis-44 | q3 | options, key, explanation, source | Keyed "Optional, if the wording is checked" for medical identification. The cited JTF 2023 parameter does not address medical ID. WAO 2020 recommends a medical identification alert, such as a bracelet or wallet card. Rebuilt the key as "Recommended, naming his peanut allergy", rewrote the explanation, cited WAO and added WAO to the sources. Position unchanged | high |
| anaphylaxis-28 | q3 | prompt, explanation | The explanation said hives and wheeze separate anaphylaxis from a vancomycin infusion reaction. The Canadian vancomycin monograph lists urticaria, wheezing, dyspnea and hypotension among infusion-related events. The prompt now asks which finding meets criteria for anaphylaxis. The explanation now says severe infusion reactions can cause these signs and are treated as anaphylaxis | medium |
| anaphylaxis-28 | q1, q2 | source | Khan 2022 does not cover vancomycin infusion reaction management or the 10 mg/minute rate. Now cites Alvarez-Arango 2021 (NEJM) for q1 and the Canadian product monograph (10 mg/minute or less) for q2. DRUG replaced in the sources | high |
| anaphylaxis-41 | q1, q2, q4 | source | Khan 2022 has no section on local anesthetic reactions. Replaced with Jiang and Tang 2023, a review of local anesthetic allergy stating that true allergy is rare and most reactions are non-allergic | high |
| anaphylaxis-29 | q2 | explanation | "Under 10 percent" risk of a systemic reaction after a large local reaction. The 2016 insect parameter gives 4% to 10%. Changed to "about 4 to 10 percent" | medium |
| anaphylaxis-18 | q4 | explanation | The 25 kg threshold for 0.3 mg is not in the cited Halbrich 2015 statement. Replaced with a self-evident reason: 0.3 mg is more than three times her calculated 0.09 mg | low |
| anaphylaxis-36 | q3 | explanation | "Discharge after an hour of observation can be reasonable" conflicts with the CPS statement (in this SAMP's sources), which suggests 4 to 6 hours for children. Reworded to say only that a 24-hour admission is not routinely required after a prompt response to one dose | medium |
| anaphylaxis-16, 22, 29 and 37 (and 49) | sources | url | Added verified URLs for the stinging insect parameter (Golden 2017) and the HAE guideline (Betschel 2019) | high |

## Key changes

- anaphylaxis-48 q1 (review-extra): before index 2 "Hypertrophic cardiomyopathy", after index 0 "Food anaphylaxis". The stem (throat closing after a meal, facial swelling and hives) and the explanation support only food anaphylaxis.
- anaphylaxis-44 q3: the key stays at index 1, but its content changed from "Optional, if the wording is checked" to "Recommended, naming his peanut allergy". WAO 2020 recommends medical identification. The explanation was rewritten around the new key.

## Note on review-extra.ts

anaphylaxis-48 is a word-for-word copy of anaphylaxis-26 ("Collapse in a restaurant washroom"). anaphylaxis-49 is a word-for-word copy of anaphylaxis-37 ("Recurrent swelling and abdominal pain"). Each copy carried a planted defect. Both would fail the near-duplicate stem test if they were added to the batch. I fixed the defects so the file is clinically correct, but I recommend that neither SAMP be added. The file is not exported from `index.ts`.

## Sources verified

- Golden DBK, et al. Stinging insect hypersensitivity. Practice parameter update 2016. Ann Allergy Asthma Immunol. 2017, 118:28-54. I read the full PDF: https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Stinging-insect-hypersensitivity-2016.pdf
  - Large local reaction: usually over 10 cm, progresses over 24 to 48 hours. Later systemic risk 4% to 10%. VIT generally not required.
  - Venom testing: delayed 3 to 6 weeks.
  - Risk markers: male sex and elevated tryptase. Mastocytosis is linked to sting anaphylaxis.
  - Beta blockers and ACE inhibitors: VIT benefit outweighs the risk in patients who need these drugs for heart disease.
  - This supports 16 q4, 22 q3 and q4, 29 and 21 q3.
- Betschel S, et al. International/Canadian HAE guideline. Allergy Asthma Clin Immunol. 2019, 15:72. https://pmc.ncbi.nlm.nih.gov/articles/PMC6878678/
  - Treat attacks with C1 inhibitor or icatibant 30 mg SC. Epinephrine, antihistamines and corticosteroids are not effective. Tranexamic acid does not treat attacks.
  - C4 is the screening test. Avoid estrogen-containing contraceptives.
  - This supports 37 and 49.
- Sabrina's Law, 2005, S.O. 2005, c. 7. The e-Laws page did not render and CanLII returned 403. I verified the text from the Legislative Assembly bill page: https://www.ola.org/en/legislative-business/bills/parliament-38/session-1/bill-3
  - The board policy must include risk-reduction strategies, communication, training and a requirement that principals develop an individual plan for each pupil at risk.
  - Staff may give epinephrine without preauthorization when they believe a pupil is having anaphylaxis.
  - The law has no food ban requirement.
  - The 40 q2 key and explanation hold.
- Golden DBK, et al. Anaphylaxis 2023 practice parameter update (Ann Allergy Asthma Immunol 2024). I read the full PDF (AAAAI).
  - Biphasic reactions occur within 48 hours, with a median of 10.5 hours (27 q2).
  - It recommends against site-wide food bans in schools (36 q4).
  - The response to epinephrine is not a diagnostic marker (47 q3).
  - Acute tryptase should be drawn ideally within 2 hours (17 q3).
  - Needle length is a factor in device choice (32 q2).
  - Alpha-gal IgE and meat elimination (20).
  - Weigh beta blockers and ACE inhibitors case by case (21 q3, 43 q2).
- Shaker MS, et al. JTF 2020 (PDF read).
  - Extended observation of up to 6 hours or longer for severe reactions or more than one dose. One hour may be reasonable without risk features.
  - Premedication is supported mainly for rush immunotherapy (43 q3).
- Cardona V, et al. WAO 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/
  - Repeat epinephrine every 5 to 15 minutes. Glucagon for beta-blocked patients. Medical identification is recommended.
- Resuscitation Council UK 2021 (PDF read).
  - Refractory infusion starts at 0.5 to 1 mL/kg/hour of 1 mg in 100 mL, with 1 mL/kg/hour for hypotension (25 q2 confirmed: 10 mcg/minute at 60 kg).
  - Give the infusion on a dedicated peripheral line with a pump.
  - Tryptase within 2 hours and no later than 4 hours.
  - Patients must not stand or sit up suddenly. Colloids are not recommended.
  - Up to 35% of circulating volume can be lost in 10 minutes.
  - Adult fluid bolus 500 to 1000 mL.
- Canadian Paediatric Society 2011, reaffirmed 2018. https://academic.oup.com/pch/article/16/1/35/2639430
  - 20 mL/kg saline boluses. IM 0.01 mg/kg to a maximum of 0.5 mg, repeated every 5 to 15 minutes. Supine position.
  - EpiPen Jr for 10 to 25 kg. Observation 4 to 6 hours.
- Public Health Agency of Canada. Canadian Immunization Guide, early vaccine reactions.
  - 0.01 mg/kg of 1 mg/mL, maximum 0.5 mg, repeated every 5 minutes (46).
- Halbrich M, et al. CSACI 2015 (0.15 mg for children under 15 kg). https://pmc.ncbi.nlm.nih.gov/articles/PMC4485331/
- Li LDX, et al. CSACI 2021 (0.15 mg under 25 kg, 0.3 mg from 25 kg). https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/
- Waserman S, Cruickshank H. 2025 (EpiPen is the sole premeasured device in Canada). https://canadianallergyandimmunologytoday.com/en/article/view/5-1-Waserman_et_al
- Khan DA, et al. Drug allergy 2022 practice parameter (PDF read).
  - Single-NSAID reactions can involve any NSAID, including COX-2 inhibitors (34 q3 holds).
  - It has no section on vancomycin infusion reactions or local anesthetics, which led to the source fixes in 28 and 41.
- Alvarez-Arango S, et al. N Engl J Med. 2021, 384:1283-6. https://www.nejm.org/doi/full/10.1056/NEJMp2031891
  - Infusion reactions depend on infusion rate. The drug can be given again at a slower rate or with an antihistamine.
- Fresenius Kabi Canada. Vancomycin hydrochloride for injection USP. Product monograph, revised June 2018.
  - The rate should be 10 mg/minute or less.
  - Infusion-related events include flushing, urticaria, wheeze and hypotension, and usually resolve in 20 to 30 minutes.
- Jiang S, Tang M. Clin Rev Allergy Immunol. 2023, 64:193-205. PubMed 35482282.
  - True local anesthetic allergy is under 1% of reactions, and most reactions are non-allergic.
  - Skin testing is kept for reactions whose history suggests hypersensitivity.
- Pouessel G, et al. Clin Exp Allergy 2024 (Crossref, doi 10.1111/cea.14514). AHA 2025 Part 10 (Crossref, doi 10.1161/CIR.0000000000001380).

## Needs physician decision

1. anaphylaxis-17 q2. The patient is intubated and monitored in the ED with BP 68/36 mmHg, and IM epinephrine is keyed. Perioperative guidance often favours titrated IV boluses of about 50 mcg in this setting. RCUK keeps IM as first-line outside specialist hands. No small IV bolus option is offered, so the key holds as written.
2. Nasal epinephrine. Health Canada approved neffy 2 mg (for 30 kg or more) on 15 April 2026, with pharmacy supply expected from summer 2026.
   - The autoinjector statements in 21 q4 and 27 q3 are still true, because EpiPen remains the only autoinjector and there is no 0.5 mg device.
   - A physician should decide whether 21, 22, 27, 32, 42, 44 and 47 need to mention the nasal option.
3. anaphylaxis-39 q3. The tropomyosin cross-reactivity among crustaceans and its heat stability are correct, but the cited ACR manual supports only the contrast point. A food allergy source would be better.
4. anaphylaxis-32 q2. The longer needle for thick thigh tissue rests only on the JTF 2023 statement that needle length is a factor in device choice.
5. anaphylaxis-38 q3. The claim that the benzathine depot releases drug for weeks is correct pharmacology but is not in JTF 2020.
6. anaphylaxis-46 q3 (disposition by air transfer) is mapped to key feature 3. Key feature 4 (rebound risk and disposition) fits better. I left this for Lens B.
7. Observation times differ by source: JTF 2020 allows 1 hour, RCUK 2 hours, and CPS 4 to 6 hours for children. 47 q2 (adult, 2 hours symptom-free after one dose) holds under JTF and RCUK.

## Summary

- SAMPs reviewed: 34 (32 in the batch and 2 extra).
- SAMPs with a defect found: 10 (16, 18, 22, 28, 29, 36, 37, 41, 44 and 48 and 49 in the extra file). For 16, 22 and 37 the defect was only a missing URL.
- Fixes: 1 wrong key (48), 1 invented stem fact (49), 1 rebuilt key (44), 3 false or overstated explanation claims (28 q3, 29, 36), 3 unsupported citations replaced or adjusted (28, 41, 18), and 2 URLs added.
- Most serious errors: the 48 q1 key pointed to hypertrophic cardiomyopathy. 49 q2 relied on an invented lactate value. 44 q3 keyed medical identification as merely optional against WAO guidance. 28 q3 wrongly taught that hives and wheeze exclude a vancomycin infusion reaction.
