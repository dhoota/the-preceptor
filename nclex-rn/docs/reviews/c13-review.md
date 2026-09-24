# Batch c13 adversarial review

Scope: every file in `src/bank/c13/`. That is `case1.ts` to `case5.ts` (30 case items), `helpers.ts`, `index.ts` and `extra.ts`. `index.ts` does not import `extra.ts`, which holds 2 stand-alone items under consideration (rn-c13-8 and rn-c13-9). Both were reviewed.

Both lenses were applied to every item. Every stated number was recomputed with a script: all 10 Celsius and Fahrenheit pairs, the BUN and creatinine SI pairs, urine output against 0.5 mL/kg/hour for 76 kg (22.5 mL/hour against 38 mL/hour), the piggyback rate (50 / 30 * 60 = 100 mL/hour), the vancomycin volume (125 / 25 = 5 mL) and the multiples in each distractor why (2.5, 5 and 10 times the dose), and the PaO2 to FiO2 ratio for the severe pneumonia criteria (54 / 0.21 = 257, above 250, so not severe). All were correct.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c13-1-2 | stem | The case gave no oxycodone times. Item 2 implied a dose at 1700 and item 3 gave a second dose at 1800, 1 hour apart against an every 4 hours order. The stem now states doses at 1300 and 1700. | B | high |
| rn-c13-1-3 | stem | "A second oxycodone 5 mg dose at 1800" broke the every 4 hours order and clashed with item 2. Now "90 minutes after her second oxycodone 5 mg dose", which matches the 1700 dose. | B | high |
| rn-c13-8 (extra.ts) | options[1], rationale | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is IV calcium gluconate. Option, why and rationale rewritten. | A | high |
| rn-c13-8 (extra.ts) | sources | Cited a Canadian SOGC guideline with no URL for an NCLEX-RN item. Replaced with ACOG Practice Bulletin No. 222, 2020, which names calcium gluconate 1 g IV. | A | high |
| rn-c13-9 (extra.ts) | options[1].why | Said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". It acts over hours and is not an emergency treatment. Why rewritten. | A | high |

## Key changes

- rn-c13-8 (extra.ts, not in the bank). Before: keyed option "Protamine sulfate". After: keyed option "Calcium gluconate" in the same position. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (ACOG Practice Bulletin No. 222). Protamine reverses heparin and is not a defensible answer. Arjan to approve.

No case item key was changed.

## Sources verified

- CDC. Interim Guidance for Influenza Outbreak Management in Long-Term Care and Post-Acute Care Facilities, updated 16 September 2024. Confirmed the outbreak trigger (2 laboratory-confirmed cases on one unit within 72 hours), prophylaxis for non-ill residents on the unit regardless of vaccination, staff exclusion until 24 hours after fever ends, notification of every suspected or confirmed outbreak, droplet precautions and exclusion of ill residents from group activities. https://archive.cdc.gov/www_cdc_gov/flu/hcp/infection-control/ltc-facility-guidance.html
- CDC. Influenza Antiviral Medications: Summary for Clinicians, updated 10 March 2026. Treatment should not wait for laboratory confirmation. https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html
- Grohskopf LA, et al. ACIP 2025-26 recommendations. MMWR 74(32), 2025. Confirmed annual vaccination for everyone 6 months and older, the preferred HD-IIV3, aIIV3 or RIV3 for adults 65 and older, and the LAIV upper age of 49 years. https://www.cdc.gov/mmwr/volumes/74/wr/mm7432a2.htm
- McDonald LC, et al. IDSA and SHEA 2017 update. Clinical Infectious Diseases 66(7):e1, 2018. Confirmed the severe criteria (WBC 15 000 or more, creatinine above 1.5 mg/dL), contact precautions for at least 48 hours after diarrhea resolves, and no repeat testing. https://academic.oup.com/cid/article/66/7/e1/4855916
- Johnson S, et al. IDSA and SHEA 2021 focused update. Clinical Infectious Diseases 73(5):e1029. Fidaxomicin preferred, oral vancomycin an accepted alternative. https://pubmed.ncbi.nlm.nih.gov/34164674/
- CDC. Preventing C. diff, updated 18 December 2024. Soap and water is the best hand hygiene, and spore-killing products can be used at home. https://www.cdc.gov/c-diff/prevention/index.html
- Metlay JP, et al. ATS and IDSA. AJRCCM 200(7):e45, 2019. Strong recommendation against routine corticosteroids in nonsevere pneumonia. https://pubmed.ncbi.nlm.nih.gov/31573350/
- ATS press release on the 2025 ATS pneumonia guideline (Jones BE, et al.). Still advises against corticosteroids in nonsevere pneumonia and refers to the 2019 guideline for antibiotic choice. https://site.thoracic.org/press-releases/treatment-with-antibiotics-and-steroids-in-adults-with-pneumonia-addressed-in-latest-clinical-practice-guideline
- O'Driscoll BR, et al. BTS oxygen guideline. Thorax 72(Suppl 1), 2017. Target SpO2 94% to 98% for adults with no risk of hypercapnia. https://pubmed.ncbi.nlm.nih.gov/28507176/
- Inouye SK, et al. The Confusion Assessment Method. Annals of Internal Medicine 113(12):941, 1990. https://www.acpjournals.org/doi/abs/10.7326/0003-4819-113-12-941
- ASA Task Force. Perioperative Management of Patients with Obstructive Sleep Apnea. Anesthesiology 120(2):268, 2014. CPAP continued after surgery. https://pubmed.ncbi.nlm.nih.gov/24346178/
- Apfelbaum JL, et al. ASA Practice Guidelines for Postanesthetic Care. Anesthesiology 118(2):291, 2013. Voiding is assessed for selected clients only. https://pubs.asahq.org/anesthesiology/article/118/2/291/13600/
- Dowell D, et al. CDC opioid guideline. MMWR Recommendations and Reports 71(3), 2022. https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm
- WOCN Society. Management of the Adult Patient With a Fecal or Urinary Ostomy, Executive Summary. JWOCN 45(1):50, 2018. https://journals.lww.com/jwocnonline/abstract/2018/01000/wocn_society_clinical_guideline__management_of_the.9.aspx
- ACOG. Gestational Hypertension and Preeclampsia, Practice Bulletin No. 222, 2020. Calcium gluconate 1 g IV for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Sodium polystyrene sulfonate onset of 2 to 24 hours and not for emergency use. StatPearls. https://www.ncbi.nlm.nih.gov/books/NBK559206/

## Needs Arjan's decision

- rn-c13-8 key change above.
- rn-c13-4-4 and rn-c13-4-1. IDSA 2017 prefers soap and water over alcohol rub and sporicidal cleaning mainly in outbreak or hyperendemic settings. CDC advises soap and water and spore-killing products without that limit. The keys follow CDC and are defensible. No edit made.
- rn-c13-3-4. The oxygen target row uses the BTS range of 94% to 98%, declared in `refs`. Many US units use 92% to 96%. The 2025 ATS pneumonia guideline confirms no corticosteroids in nonsevere pneumonia, so the key stands. Consider adding the 2025 ATS guideline as a second source once its full citation is confirmed.
- rn-c13-2-1 and rn-c13-2-2. The 2 to 3 mm wafer margin matches the usual 1/16 to 1/8 inch teaching. No edit made.
- extra.ts items use ids outside the case pattern. Rename them if they join a stand-alone batch.

## Summary

32 items reviewed (30 case items and 2 items in `extra.ts`). 4 items had defects: 2 case items shared one timeline conflict and 2 extra items had false drug content. 5 fixes were made, with 1 key change in an extra item and none in the bank. All 44 batch tests pass and `tsc` shows no errors in `bank/c13`.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
