# Sweep 2 rebuilds: writer sw2-d

Batches s20 (abuse-domestic), s23 (anaphylaxis), s37 (eye) and s41 (infectious-diseases). Four SAMPs rebuilt in place from scratchpad/sweep2-rebuild.json. Each keeps its id, topic, question count and the key feature of every question. Each version went up by 1. All stay reviewed: false. Nothing was committed.

Before each story was fixed, the whole bank (1,500 SAMPs, s01 to s53) was searched by scenario and by keyed decision, including related topics such as shock, msk, burns, lacerations and pediatric fever. The searches were repeated just before the files were finalised.

## Rebuilt SAMPs

| Id | Old scenario | New scenario | Keyed decisions (key feature) | Sources |
|---|---|---|---|---|
| abuse-domestic-18 (v3) | 4-month-old boy with a torn frenulum brought by his father. Copied abuse-domestic-06 and msk-13. | 20-month-old boy with green vomiting after a reported trip onto carpet while in the care of his mother's partner. Imaging shows a duodenal wall hematoma. A 5-month-old half-sister is at home with the partner. | q1: AST and ALT below 80 U/L do not rule out abdominal injury (KF3). q2: CT abdomen with IV contrast for suspected visceral injury under 24 months (KF3). q3: duodenal injury after a trip at home is the feature that most suggests abuse (KF2). q4: phone the children's aid society's after-hours line now rather than email, delegate or call police first (KF6). | Lindberg, Pediatrics 2009. ACR Appropriateness Criteria, suspected physical abuse, child, revised 2025. Sowrey, J Trauma Acute Care Surg 2013. Ontario MCCSS, Reporting child abuse and neglect: it's your duty, 2022. |
| anaphylaxis-42 (v3) | 15-year-old with asthma and hives after pistachio gelato. Copied anaphylaxis-10. | 7-month-old girl who becomes limp, pale and hypotensive with hives and repeated vomiting after a first taste of scrambled egg. She already eats peanut 3 times a week. | q1: epinephrine 0.1 mg IM, the TREKK minimum dose, for an 8 kg infant (KF3). q2 (menu): 0.15 mg autoinjector for a child under 15 kg and urgent allergist referral for an infant under 1 year (KF4). q3: avoid egg but keep giving peanut (KF4). | TREKK Bottom Line Recommendations: Anaphylaxis, version 2.2, 2025. Abrams and colleagues, CPS, Dietary exposures and allergy prevention in high-risk infants, 2021. |
| eye-25 (v3) | 11-year-old with hemophilia struck by a baseball. Copied eye-10. | 34-year-old woman struck in the eye by a champagne cork on New Year's Day. Her distance glasses broke. Microhyphema with raised pressure. | q1: red cells circulating in the aqueous define a microhyphema (KF5). q2: Snellen acuity through a pinhole when glasses are unavailable (KF3). q3: timolol drops first for raised pressure with a microhyphema (KF5). q4: ask about ASA or ibuprofen use before discharge (KF2). | AAO EyeWiki, Hyphema, updated 2026. Kanclerz and colleagues, J Cataract Refract Surg 2024. |
| infectious-diseases-28 (v3) | 63-year-old diabetic with an infected obstructing ureteric stone at a rural site. Copied infectious-diseases-01. | 71-year-old man in septic shock from an infected total knee replacement 12 days after an MRSA boil was drained. Orthopedics asks to hold antibiotics until a morning aspiration. | q1: give the first antibiotic now, before the joint is aspirated (KF1). q2: vancomycin 25 mg/kg plus ceftriaxone for high MRSA risk (KF8). q3: initial MAP target of 60 to 65 mmHg for an adult aged 65 or older (KF2). | Surviving Sepsis Campaign 2026, Crit Care Med 2026. |

None of the four new stories matched an existing SAMP. Toddler abusive duodenal injury, infant anaphylaxis, champagne cork hyphema and prosthetic joint septic shock had no match anywhere in the bank. Asplenic septic shock, typhoid, Vibrio sepsis, dialysis line sepsis and post-biopsy sepsis were considered for infectious-diseases-28 and rejected because shock-22, pediatric-fever-28, lacerations-19, shock-42 and shock-23 already hold them.

## Fixes

Sweep 2 excludes Task 2. No FIX verdicts were in scope for these batches, so none were applied.

## Checks

- SAMP_BATCH=s20, s23, s37 and s41 with tests/samps.test.ts and tests/samp-quality.test.ts: all pass.
- npx tsc --noEmit -p .: clean.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4,503 passed.

## For the physician

- anaphylaxis-42 q1 keys 0.1 mg, the TREKK minimum IM dose. Strict 0.01 mg/kg would be 0.08 mg. That figure is not offered as an option, so the key holds under both references.
- abuse-domestic-18 q2 cites the 2025 ACR ratings: CT with IV contrast "usually appropriate", abdominal ultrasound "usually not appropriate" and radiography "may be appropriate" with panel disagreement. The ACR web page showed the ratings but not the discussion text.
- abuse-domestic-18 q4 relies on the Ontario guide's advice that societies answer 24 hours a day and that police are called when the society cannot be reached. Please confirm this fits a sibling who is at home with the suspected person overnight.
- eye-25 q3 keys a topical beta-blocker as first line. The reasons given for rejecting acetazolamide, mannitol and washout follow the usual escalation but are not quoted from EyeWiki.
- eye-25 cites EyeWiki, an AAO resource rather than a journal guideline. No open-access hyphema guideline was found.
- infectious-diseases-28 draws all three keys from the SSC 2026 statements. The full text was behind a paywall. The statements were checked in published summaries (Acute Crit Care 2026, Guideline Central, EMCrit): immediate antimicrobials in possible or definite septic shock, MRSA cover only at high risk, and an initial MAP of 60 to 65 mmHg at age 65 or older.
- infectious-diseases-28 q2: vancomycin plus cefepime would also be reasonable, so it is not offered as an option.
