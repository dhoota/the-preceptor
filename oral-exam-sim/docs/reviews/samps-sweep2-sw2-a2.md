# Sweep 2 rebuild: asthma-copd-42 (writer SW2-A2)

One SAMP rebuilt in place in src/samps/s25/asthma-copd.ts. Nothing else in the file changed. Version 3 is now version 4. It stays reviewed: false.

## Why it was rebuilt

- Version 2 copied asthma-copd-01 and sob-04. It was a young asthmatic graded by peak flow, with salbutamol and ipratropium keyed in the first hour.
- Version 3 copied airway-18 (s21). Both were a total laryngectomy with the stoma as the only airway. Its q3 keyed intubation through the stoma for an alert patient with pH 7.27. It skipped NIV through the stoma, which BTS/ICS would try first.

The new story has no laryngectomy or stoma. Peak flow plays no part. Salbutamol with ipratropium is never a key.

## Bank survey

I dumped every SAMP in s01 to s53 whose topic is asthma-copd, sob or airway, plus any other SAMP whose stem mentions asthma, COPD, wheeze, hypercapnia or NIV. That came to 218 SAMPs. The keyed decisions already in the bank for the three key features are:

- KF3: peak flow or FEV1 as the measure (01, 46), life-threatening findings lists (02, 09, sob-04), PRAM (06), GOLD Rome grade (33), severe category under 6 years (39), respiratory rate as the NIV response (41), pulse oximetry bias (45), pH with PaCO2 (old 42).
- KF5: salbutamol and ipratropium doses (01, 06, 20, 36, sob-04), oxygen targets of 88 to 92%, 95% or more and 92% or more (02, 10, 36, 39, sob-05), Venturi mask (08), pMDI and spacer for COPD (35), keeping the long-acting inhaler (45), air-driven nebulizer (old 42).
- KF7: BiPAP starts and settings (15, 22, 26, 31, 36, sob-05), NIV contraindications and failure (02, 15, sob-05), morphine for NIV tolerance (19), high-flow after NIV intolerance (45), NIV setting and weaning (41), naloxone (37), intubation for near-fatal asthma (09, airway-10), intubation through the stoma (old 42).

Sedatives appear only as rejected write-in answers in asthma-copd-01 and sob-04. No question keys the response to new agitation. No SAMP uses a wildfire setting. No SAMP keys when to give a systemic corticosteroid.

## Old and new story

| | Version 3 | Version 4 |
|---|---|---|
| Title | Breathing through his neck | Evacuated ahead of the fire |
| Patient | 66-year-old man with COPD after total laryngectomy | 34-year-old woman with asthma on budesonide-formoterol maintenance and reliever |
| Setting | Tertiary ED | Regional ED in northern Alberta during a wildfire evacuation |
| Trigger | Cold | Two days of heavy wildfire smoke |
| q1 KF3 | pH 7.31 with PaCO2 62 mmHg grades severity | SpO2 90% on room air puts her in the GINA 2026 severe category |
| q2 KF5 | Air-driven nebulizer with stoma mask oxygen | prednisone 50 mg PO now, not after the X-ray or the 1-hour review |
| q3 KF7 | Invasive ventilation through the stoma | New restlessness gets a blood gas and urgent ICU review, not a sedative |

Key positions are 4, 5 and 2 (indexes 3, 4 and 1). No key is the longest option. The q2 and q3 keys are the shortest or near the shortest in their questions.

## Keys and teaching

- **q1 (KF3).** GINA 2026 Box 9-6 calls a presentation severe if any one of these is present: cannot speak, drink or lie down, room air SpO2 below 92%, respiratory rate above 30/minute, accessory muscle use, a quiet chest, or PEF or FEV1 below 50%. Her SpO2 of 90% is the one severe feature offered. Talking in phrases and loud wheeze are moderate features. A rate of 28/minute is below the cut-off. Heart rate is no longer in the 2026 acute care criteria. The stem leaves out accessory muscle use so that only one option is severe.
- **q2 (KF5).** GINA gives a systemic corticosteroid within 1 hour of presentation for all but the mildest exacerbations. The oral route works as well as IV. IM has no benefit over oral. High-dose inhaled corticosteroid helps mainly patients who get no systemic steroid. The distractors wait for the X-ray or for the 1-hour response.
- **q3 (KF7).** GINA says sedation must be strictly avoided in acute asthma, because it has been linked to avoidable deaths. NIV should not be tried in an agitated patient, and patients should not be sedated to receive it. GINA lists "not agitated" as a moderate feature and advises blood gases and ICU transfer for a patient who is worsening.

Mock-mode cueing check. The q2 update names salbutamol and ipratropium and the X-ray. It does not mention oxygen, which would hint at the q1 key. The q3 update names bronchodilators only. It does not mention the steroid, which would give away the q2 key. No option names an earlier key.

## Sources

| Source | Used for | Checked |
|---|---|---|
| Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf | q1, q2, q3 | Downloaded and read. Box 9-6 (p.186) gives the severity criteria. Pages 184 to 185 cover blood gases, pages 186 to 187 cover corticosteroid timing, route and dose, and pages 188 to 189 cover NIV and sedatives. |

CTS has no current guideline on acute asthma in the ED. The CTS asthma guidelines deal with chronic management, so GINA is the source of record here. BTS_OXYGEN and BTS_ICS are no longer cited by this SAMP, but other SAMPs in the file still use them.

## Checks

- SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 675 passed.
- npx tsc --noEmit -p .: clean.
- Nothing committed.

## For the physician

- **q1 rests on GINA 2026 criteria, and the prompt names them.** Older GINA versions and BTS/SIGN count a heart rate above 120/minute as severe. Under those criteria the heart rate distractor could also be defended. Please confirm you want the 2026 criteria tested.
- **q1 threshold.** GINA 2026 moved the severe SpO2 threshold to below 92%. Her 90% is also below 90%, so the key holds under the older threshold too.
- **q2 dose.** Prednisone 50 mg follows the GINA adult equivalent. Is that your usual adult ED dose, or do you prefer 40 mg as in the COPD SAMPs?
- **q3 wording.** The key is "Blood gas and urgent ICU review". A regional hospital during an evacuation may not have its own ICU. Please say if you would rather word it as "senior airway help".
- **Loose overlap.** asthma-copd-01 and sob-04 list sedatives as dangerous write-in answers. Here the decision is to recognize restlessness as a sign of tiring and assess it, so I judged the overlap acceptable.
