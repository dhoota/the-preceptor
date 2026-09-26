# Sweep 3 rebuilds, writer sw3-6

Batches: s22 (analgesia-sedation), s26 (burns), s36 (environmental).
Rebuilt: analgesia-sedation-34, burns-16, burns-36, environmental-17, environmental-23.
Every rebuilt SAMP keeps its id, topic, question count and each question's key feature. Each has a new neutral title, a version bump and `reviewed: false`. No signed-off SAMP was edited. Nothing was committed.

## Method

For each SAMP I listed every scenario in the bank for the topic and related topics, including the signed-off clusters in `sweep3-ss-merged.json`. I built a story and a set of keyed decisions not already in the bank. I then ran `simcheck.py` on the final title, stem, updates and keys, and read every card it printed. No printed SAMP tells the same patient story or keys the same decision in a similar story. Each source was opened and checked before use.

## Rebuilt SAMPs

| Id | Old scenario | New scenario | Keyed decisions | Sources | simcheck top 5 (full / keys) |
|---|---|---|---|---|---|
| analgesia-sedation-34 | Night outdoors at minus 32°C, frozen hands, opioid and ibuprofen for rewarming (copied environmental-09) | Woman 5 weeks after a cesarean, exclusively breastfeeding, with biliary colic, a charted "morphine allergy" that was vomiting and itch | q1 KF3: ibuprofen PO with titrated fentanyl IV. q2 KF2: acetaminophen and ibuprofen for home, not codeine, tramadol, oxycodone or round the clock hydromorphone. q3 KF1: her past reaction is a histamine-release pseudoallergy, not an allergy | Academy of Breastfeeding Medicine protocol #15, 2017, doi 10.1089/bfm.2017.29054.srt. Kalangara 2019, J Pain Palliat Care Pharmacother, doi 10.1080/15360288.2019.1666955 | abdominal-pain-19 0.28/0.13, analgesia-sedation-14 0.15/0.09, analgesia-sedation-38 0.14/0.05, abdominal-pain-23 0.13/0.03, analgesia-sedation-18 0.13/0.08 |
| burns-16 | Pressure cooker scald, 24%, urine output falls, raise the rate by 10% (copied burns-02) | Maple sap evaporator scald, 26%, in a man on lithium for 20 years whose kidneys cannot concentrate urine, so urine output stays near 250 mL/hour | q1 KF4: first 8 hours end at 18:40, timed from the injury. q2 KF4: high output is lithium-induced diabetes insipidus. q3 KF4: keep the current rate, do not apply the 10% reduction rule. q4 KF3: fentanyl IV with acetaminophen, no anti-inflammatory drug. q5 KF5: burn centre transfer | Alaska burn resuscitation guidelines, 2021. Davis, Desmond, Berk 2018, BMC Nephrol, doi 10.1186/s12882-018-1101-4. American Burn Association referral guidelines, 2025 | burns-17 0.13/0.18, burns-31 0.15/0.12, burns-25 0.13/0.07, burns-32 0.08/0.13, burns-33 0.10/0.11 |
| burns-36 | Butane explosion, facial burns, hoarse voice, intubate now (copied burns-01, cluster with airway-02 and burns-11) | Man who escaped a trailer fire through smoke 2 days ago, declined care and now has fever, confusion, black secretions and bilateral opacities, with 11% arm and back burns | q1 KF2: rapid sequence intubation with rocuronium, not succinylcholine, since the burns are 2 days old. q2 KF1: lower airway smoke injury. q3 KF3: add acetaminophen by NG to his fentanyl, not ketorolac with a creatinine of 196 umol/L | Alaska burn resuscitation guidelines, 2021. Walker 2015, Crit Care, PMC4624587. Romanowski 2020, ABA pain guideline, J Burn Care Res, PMC7703676 | burns-24 0.21/0.04, burns-38 0.20/0.07, burns-21 0.19/0.02, sob-39 0.16/0.06, burns-22 0.14/0.03 |
| environmental-17 | Boy at day camp, topiramate hypohidrosis, cold water immersion and rectal probe (copied environmental-01 and pediatric-fever-11) | Miner who collapsed at the 2 400 m level of a deep nickel mine in January, wrapped in blankets for the drive, with diesel loaders nearby | q1 KF2: strip the blankets and cool now, before CT or lumbar puncture. q2 KF2: carboxyhemoglobin level, since pulse oximetry misses CO. q3 KF1: cool below 39°C before the air ambulance leaves. q4 KF1: coworker with heat exhaustion rests in a cool area with fans and fluids, no same-day return | NATA exertional heat illness statement, Casa 2015, J Athl Train, doi 10.4085/1062-6050-50.9.07. Afzal 2025, Diagnostics, doi 10.3390/diagnostics15050581 | environmental-18 0.15/0.05, environmental-38 0.15/0.06, multiple-patients-29 0.12/0.04, ems-36 0.11/0.06, multiple-trauma-34 0.11/0.05 |
| environmental-23 | Intoxicated man in a bus shelter, frozen feet, core first, then iloprost (copied environmental-09) | Man on hemodialysis and apixaban found on his icy driveway at dawn, shivering at 33.2°C with a GCS of 9, then failing to rewarm | q1 LOC KF4: GCS 9 at 33.2°C is too low for mild hypothermia, so another cause is sought. q2 KF3: hemodialysis through his fistula after failed active external rewarming. q3 KF3: rewarm to about 37°C | Paal 2022, Accidental hypothermia 2021 update, Int J Environ Res Public Health, PMC8744717 | environmental-24 0.19/0.05, multiple-trauma-36 0.18/0.07, environmental-05 0.15/0.12, loc-41 0.15/0.02, environmental-26 0.14/0.03 |

## Fixes

Task 2 (triage FIX verdicts) is out of scope for sweep 3, so no fixes were applied.

## Other edits

- s22: removed the `WMS` source constant, which only the old analgesia-sedation-34 used.
- s36: after the rebuild, key positions in the batch were 12, 18, 11, 18, 12, above the 25% gate. I reworded one distractor in environmental-23 q1 ("Systolic pressure of 108 mmHg") and changed the q3 temperature options so the keys sit in positions 1 and 5. The batch now passes.

## Checks

- `SAMP_BATCH=s22`, `s26` and `s36` with `tests/samps.test.ts tests/samp-quality.test.ts`: all pass (679, 516 and 472 tests).
- `npx tsc --noEmit -p .`: clean.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4 503 tests pass.

## For the physician

- burns-16 q3 keys "Keep the current rate" when a lithium-related concentrating defect makes urine output useless as a guide. Some burn teams would add free water replacement or raise the rate. The stem gives a settling pulse, a mean arterial pressure of about 98 mmHg, a normal lactate and a normal mental state to support holding the rate. Please confirm this is the single best answer.
- burns-16 and burns-36 cite the Alaska state burn guideline because I found no current Canadian burn resuscitation guideline. burns-36 q1 rests on its warning that succinylcholine needs care once burns are more than a few hours old. At 2 days, the usual teaching on up-regulated receptors agrees.
- analgesia-sedation-34 cites the Academy of Breastfeeding Medicine protocol and the FDA advisories it reports on codeine and tramadol. Please check whether you want a Health Canada statement added. q1 gives ibuprofen by mouth to a nauseated woman who has not vomited.
- environmental-17 applies the NATA statement, written for athletes, to an occupational heat stroke underground. The carbon monoxide question cites a 2025 review in Diagnostics (MDPI). Please say if you prefer a toxicology reference.
- environmental-23 q2 keys hemodialysis for rewarming after CT has excluded bleeding in a man on apixaban. The explanation notes the circuit needs heparin. Please confirm this fits your local nephrology practice.
