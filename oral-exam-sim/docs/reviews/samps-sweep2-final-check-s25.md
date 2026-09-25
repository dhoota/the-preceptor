# Sweep 2 final check, batch s25

Independent review of three SAMPs in `src/samps/s25/asthma-copd.ts`. Both lenses were applied, plus the overlap, hedged-key, longest-option and mock-mode checks.

- asthma-copd-42. This is the wildfire smoke rebuild, version 4, by writer SW2-A2 (`docs/reviews/samps-sweep2-sw2-a2.md`).
- asthma-copd-35 and asthma-copd-41. Second check of the key changes made in `docs/reviews/samps-sweep2-review-sw2-a.md`.

Only these three SAMPs were in scope. Nothing was committed. All stay `reviewed: false`.

**No key was changed in this check.** Every key and every correct index is as I found it.

## One row per question

| SAMP | Q | KF | Verdict | Finding and change | Confidence |
|---|---|---|---|---|---|
| 42 | q1 | 3 | Fixed | GINA 2026 Box 9-6 (p.186) was read from the figure itself. The severe list is: unable to speak, drink or lie down, room air SpO2 below 92%, respiratory rate above 30/minute, accessory muscle use, a silent or quiet chest, and PEF or FEV1 below 50%. Heart rate is not on the list, so the writer's claim holds. Talking in phrases, not agitated, and expiratory wheezing are moderate features. The key (SpO2 90%) is right. Defect: her pulse of 126/minute met the severe cut-off (above 120/minute) in earlier GINA versions, so a candidate taught from older GINA could defend that distractor. Pulse changed to 118/minute in the vitals and the option. The explanation now says earlier GINA versions put the cut-off above 120/minute. | high |
| 42 | q2 | 5 | Fixed (minor) | Key "prednisone 50 mg PO now" is right. GINA 2026 p.187: give systemic corticosteroid in all but the mildest exacerbations, within 1 hour of presentation where possible (Evidence A). Oral works as well as IV, takes at least 4 hours to act, and IM shows no benefit over oral. The adult dose is prednisone 50 mg or its equivalent (Box 9-7 gives 40 to 50 mg). Every prednisone option is 50 mg, so the question tests timing, not dose. It holds at 40 mg too. No current Canadian adult ED asthma guideline exists. CTS 2021 covers chronic care, and TREKK is paediatric. The update orders a chest X-ray "because of her smoke exposure". GINA does not advise a routine chest X-ray, so one sentence saying so was added to the explanation. | high |
| 42 | q3 | 7 | Fixed (explanation) | Key "Blood gas and urgent ICU review" is right. GINA p.189: "Sedatives (MUST BE AVOIDED)". p.188: NIV should not be tried in agitated patients, and patients should not be sedated to receive it. Box 9-6 lists "not agitated" as a moderate feature and "consider transfer to ICU" under worsening. Two defects were fixed. (1) Timeline. The explanation said "after an hour of treatment", but the update says forty minutes. It now says "after three rounds of bronchodilators". (2) GINA does not "advise blood gases and transfer to intensive care". It says to consider a blood gas for a patient who is not responding or is deteriorating, and to consider ICU transfer if worsening. The wording was changed to match. Haloperidol is called "argued against", not ruled out. That fits GINA's wording, which names anxiolytics and hypnotics. | high |
| 35 | q2 | 6 | Pass | Key "Switch to a single triple inhaler" confirmed against the 2023 CTS guideline, through Kaplan et al 2024 (PMC11333456, full text). High risk means 2 or more moderate exacerbations, or 1 or more severe (ED visit or admission), in the past year. For moderate or severe COPD at high risk, CTS recommends ICS/LAMA/LABA and prefers a single inhaler. CTS removed blood eosinophils as a guide to ICS use. It lists a prophylactic macrolide as an oral add-on, not a substitute. Every distractor reason is true. The prompt names CTS 2023, as SAMP_SPEC section 9 requires. | high |
| 35 | q3 | 8 | Pass, flagged | Key "Change to a pMDI with a spacer" confirmed in GOLD 2026. If there is doubt about forceful inhalation through a DPI, switch to a pMDI with or without a spacer, or an SMI, depending on drug availability. If there is any doubt about pMDI use, prescribe a spacer. Triple therapy is sold in Canada as a DPI (Trelegy Ellipta) and a pMDI (Breztri Aerosphere), with no SMI, so the update is true. The update does not name triple therapy. Fluticasone-salmeterol also comes as both devices, so q2 is not cued. Flag: GOLD also notes that few older patients find a pMDI with a spacer easy. The key still holds. Mock-mode note: the option wording "pMDI with a spacer" weakly echoes the q1 key "pMDI and spacer hourly". | medium |
| 35 | q1 | 5 | Not in scope | Signed off in the previous review. Unchanged. | n/a |
| 41 | q1 | 3 | Pass, flagged | Key "Respiratory rate now 22/minute" is sound. BTS/ICS recommendation 30 says worsening pH and respiratory rate mean the strategy must change. A good practice point asks for a blood gas before and after NIV starts. Recommendation 4 sets the target SpO2 at 88 to 92%, so 97% is above target. The fall from 32 to 22/minute matches the stem vitals. The fall from 112 to 108/minute is small. Overlap: the question frame is the same as sob s51 q3 ("is NIV working", with SpO2 as the lure), but the keys differ. s51 keys the repeat gas. This one keys the respiratory rate before the gas. Acceptable, flagged. | medium |
| 41 | q2 | 7 | Pass | Key "Monitored high-dependency area" is right. BTS/ICS Box 3 (level 2 area, 1 nurse per 2 NIV patients) is attributed in the explanation, not in the option. Immediate intubation is rightly rejected because she is improving. The update "needs NIV for many more hours" implies NIV is working. It does not name the q1 key. | high |
| 41 | q3 | 7 | Pass | BTS/ICS recommendation 31 and its good practice point were confirmed word for word: stop NIV once pH and PaCO2 normalize, maximize use in the first 24 hours, then taper daytime use over 2 to 3 days before stopping overnight use. | high |

## Overlap search (whole bank, s01 to s53)

- **Wildfire or smoke exposure.** Only one other SAMP is set at a wildfire. environmental s36 is a firefighter with heat stroke. It has no asthma and no overlapping decision. Other hits for "smoke" are house fires, burns and inhalation injury (airway, burns, anaphylaxis, eye). None is an ambient smoke asthma exacerbation.
- **Early systemic steroid.** No MCQ in the bank keys when to give a steroid. Loose teaching overlap: asthma-copd-01 q2 (s04, write-in) says in its explanation that steroids should be given in the first hour. sob-04 q2 (s17, write-in) accepts prednisone 50 mg in a medicine list. asthma-copd-28 q4 keys the IV route when vomiting. None keys "now, not after the X-ray or the 1-hour review".
- **SpO2 as the severity marker.** asthma-copd-39 q1 (child under 6, menu) keys SpO2 90% among three severe findings. asthma-copd-01 q3 keys peak flow and uses SpO2 as the lure. asthma-copd-02 q1 covers COPD. No adult MCQ keys SpO2 alone under the GINA 2026 criteria. The overlap is partial and acceptable.
- **Agitation as tiring.** Sedatives appear only as dangerous write-in answers (asthma-copd-01 q2 and q4, sob-04 q2, s04 asthma-copd BiPAP question). asthma-copd-01 q4 accepts ICU consultation for a tiring patient. asthma-copd-19 keys morphine for NIV tolerance in COPD. No MCQ keys the response to new restlessness in asthma. Acceptable.
- **Patient profile.** sob-04 (s17) is also a young woman with asthma, a pulse near 128, SpO2 89% on room air and speech in phrases. The trigger (a cold with no controller), the setting and every keyed decision differ. Moving the pulse in 42 to 118/minute also widens the gap.

## Cue checks

- **Hedged key.** No question in the three SAMPs is a "most accurate statement" item. No option hedges.
- **Longest option.** None of the eight in-scope keys is the longest option. In 42, the q1 and q2 keys are the shortest options (q2 key 23 characters against 31 to 42). This is inside every SAMP_SPEC limit. Flagged low as a possible "short and plain" cue.
- **Mock mode.** The 42 q2 update names salbutamol, ipratropium and the X-ray, but not oxygen. The q3 update names only bronchodilators. No update, prompt or option in 42 names or implies an earlier key. See 35 q3 above for its weak echo.

## Sources verified

- Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. Local PDF. Box 9-6 was read from the embedded figure. pp.184 to 191 were read as text.
- Kaplan A et al. Front Med 2024 (PMC11333456), summarizing Bourbeau et al, 2023 CTS COPD pharmacotherapy guideline. Full text through Europe PMC.
- Global Initiative for Chronic Obstructive Lung Disease. 2026 report v1.3. Local PDF, device and exacerbation sections.
- Davidson AC et al. BTS/ICS guideline, BMJ Open Respir Res 2016 (PMC4800170). Full text through Europe PMC. Recommendations 4, 30 and 31 and Box 3 were checked.

## Checks

- `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 675 passed.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- **No key was changed.** All edits are to one vital sign, one option label and explanation wording in asthma-copd-42.
- **42 q1 depends on GINA 2026.** The prompt names it. Under BTS/SIGN, a respiratory rate of 25 or more and a heart rate of 110 or more are acute severe features, so both the 28/minute rate and the 118/minute pulse would count as severe. Under GINA 2026 only the SpO2 counts. Please confirm you want the 2026 GINA criteria tested. The pulse was lowered from 126 to 118 so the key also holds under earlier GINA versions (cut-off above 120/minute).
- **42 q2.** The update has a chest X-ray ordered for smoke exposure, and no oxygen is mentioned despite SpO2 90%. The omission is deliberate, so q1 is not cued in mock mode. A reader may still notice it.
- **42 q3.** The writer's ICU question stands. A regional northern Alberta hospital may need "senior airway help or transfer" in place of its own ICU.
- **35 q2.** CTS 2023 and GOLD 2026 disagree on ICS with low eosinophils. The Canadian guideline is keyed and named. Triple escalation is also taught in asthma-copd-19 q4 and s04.
- **41 q1.** Same frame as sob s51 q3, but a different key. The two are complementary, since one keys the bedside sign and the other the gas. Decide whether both should stay.
- **No Canadian source** covers adult ED asthma severity or steroid timing, or NIV location and weaning. GINA and BTS/ICS are the sources of record.

## Summary

Three SAMPs, 8 in-scope questions. asthma-copd-42 fixed with no key change: 1 vital, 1 option label, 3 explanation edits. asthma-copd-35 and 41 pass on second check, with two flags. No key was changed. Nothing was re-rebuilt.
