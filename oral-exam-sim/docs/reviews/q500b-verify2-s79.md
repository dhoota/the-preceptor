# Q500B verification review: s79, Shortness of breath (revision 2)

Reviewer: fresh independent QA. I did not write or review this batch before. File reviewed: `src/samps/s79/sob.ts` (sob-48 to sob-52), the whole final batch. Context read: `docs/reviews/q500b-qa-s79.md` (6 fails), `docs/reviews/q500b-verify-s79.md` (4 fails) and `docs/reviews/q500b-writer-s79.md` with its Revision 1 and Revision 2 sections. No batch file was edited (REVIEW-RULES rule 1).

Tests: `SAMP_BATCH=s79 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed 132 of 132, including the bank-wide near-duplicate stem test (4.6 s).

## Earlier fails

First review (6): all six stay resolved. sob-48 q3 has budesonide in place of propranolol. sob-49 is the rebuilt tamoxifen SAMP with no orthopedic, rural no-CT, anticoagulate-while-waiting or lysis-threshold content. sob-50 q1 and q2 were replaced. sob-51 q4 update and explanation carry the asked-for wording.

Second review (4):
1. sob-49 q1: resolved. "may stay raised through the first 2 years" now follows Parikh ("may continue to be higher during the first 2 years", re-opened this session).
2. sob-49 q2: resolved. The key is "It is usually seen in more severe PE", position 4, alphabetical order kept, not the longest option. The explanation opens with the asked-for sentence. ESC re-opened this session: RV strain signs "are usually found in more severe cases of PE", sinus tachycardia in 40% of milder cases. The point is no longer arrhythmia-23 q4 (which keys the pattern as RV strain).
3. sob-49 q3: resolved. Recomputed: PAO2 = 0.21 x (760 minus 47) = 149.73, minus 33/0.8 = 41.25, gives 108.48. 108.48 minus 90 = 18.5 mmHg, so "about 18 mmHg" is right. The key is "A normal gradient can occur in PE", position 1, not the longest option. The explanation opens "A normal PaO2 and alveolar to arterial gradient do not lower her probability of PE", which no longer calls the whole gas normal. ESC confirms up to 40% normal SaO2, 20% normal gradient and frequent hypocapnia.
4. sob-50 q4: resolved, exact wording.
5. Housekeeping: `S.mos` is gone. Sources declared match the sources cited.

## Repeat search

Whole bank (src/samps and src/cases, including the newer Q500B batches s73 to s87): tamoxifen (only s79), right ventricular or right heart strain, A-a gradient or alveolar to arterial, normal gradient, "more severe PE", hemangioma, hepatopulmonary, platypnea, epiglottitis, residual thrombus, two-point, compression ultrasound. No new overlap. The hits are the ones the two earlier reviews already judged (arrhythmia-23, s73 dvt-pe signs of PE, batch01, batch06, batch14, batch20). No newer batch has hemangioma, HPS, epiglottitis or tamoxifen content.

## Sources

- Parikh 2017 (PMC5554619): opened. Supports sob-49 q1 as now worded.
- ESC 2019 (academic.oup.com via the DOI): opened. Supports sob-49 q2 and q3. The CUS figures for q4 sit in the part of the page I did not reach (the fetch read the first 100 000 characters). They were confirmed by the second review and q4 is unchanged.
- Not re-opened this session (unchanged text, confirmed by earlier reviews): Corbeddu 2021, CPS croup statement, Wittram 2004, Le Gal 2009, Soulaidopoulos 2018, MSD epiglottitis.

## Verdicts

### sob-48 Noisy breathing that keeps coming back: PASS
- q1 to q4 PASS. Unchanged since revision 1. No later update or option names an earlier key.

### sob-49 Breathless during breast cancer treatment: PASS
- q1 PASS. q2 PASS. q3 PASS. q4 PASS.
- Mock mode: the q3 option "It rules out right heart strain" and the q4 update do not give away an earlier key.

### sob-50 Pleuritic pain after a previous clot: PASS
- q1 to q4 PASS. 18 months and Wells 1.5 rechecked.

### sob-51 Breathless when he stands up: PASS
- q1 to q4 PASS. q2 recomputed: 149.7 minus 37.5 = 112.2, minus 62 = 50.2 mmHg.

### sob-52 Sore throat and drooling in a small girl: PASS
- q1 to q5 PASS. 1 g / 17 kg = 58.8 mg/kg, within 50 to 75 mg/kg and under 2 g.

## House style

No em or en dashes and no semicolons in the content, no mnemonics, no personal names. Canadian spelling. "center" appears only in the Corbeddu title. Options are alphabetical, and doses carry route and unit. No SCORING-RULINGS entry or signed item is reversed.

## Notes for the physician (not fails)

1. sob-49 q3 "normal for her age": 18.5 mmHg is normal by the age/4 + 4 rule (19 at 61) but just above the (age + 10)/4 rule (17.75). The key does not depend on it, because ESC says a normal gradient can occur in PE either way.
2. sob-49 q2: the key ("usually seen in more severe PE") is a general fact, and she is normotensive with a saturation of 96%. The explanation handles this ("if PE is confirmed her right ventricle and risk need assessment").
3. sob-50 q4: REVERSE enrolled patients with a first unprovoked VTE, and her PE followed a long flight. Not restarting anticoagulation for an unchanged residual web is sound, but whether to offer extended prevention after a flight-related PE is a clinician's call.
4. sob-48 q3: the fixed CPS 2026 dose of 5 mL L-epinephrine differs from signed sob-02. conformance-s17 has already flagged this.

Overall: PASS
