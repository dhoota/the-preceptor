import type { Item } from "@/engine/types";
import { AHA_BP, ASA_SED, HINKLE, LEHNE, POTTER, AANN_EVD, meta } from "./common";

/** s21 items 01 to 10. Moderate sedation, vital sign measurement and vital sign trends. */
export const PART1: Item[] = [
  {
    ...meta("rn-s21-01", {
      topic: "Airway support during moderate sedation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client receives IV midazolam and fentanyl for moderate sedation during a colonoscopy. Ten minutes later the client does not respond to voice and moves only to a firm shake. Respirations are 7/minute with loud snoring. SpO2 has fallen from 97% to 89%. Which action should the nurse take first?",
      rationale:
        "The client has moved past moderate sedation. Snoring with respirations of 7/minute points to a soft tissue airway obstruction. A jaw thrust lifts the tongue off the back of the throat and the firm stimulus prompts the client to breathe. Airway support comes before reversal drugs. A fall from 97% to 89% with snoring is real hypoventilation, not a probe error.",
      sources: [ASA_SED, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Prepare IV flumazenil for use", why: "Reversal may follow, but the airway is opened first. Flumazenil also does not reverse the fentanyl." },
      { text: "Document the drop in SpO2", why: "Documentation waits. The client needs airway support now." },
      { text: "Open the airway with a jaw thrust", why: "Snoring shows an obstructed airway. A jaw thrust and a firm stimulus restore airflow at once." },
      { text: "Move the SpO2 probe to another finger", why: "Snoring and a rate of 7/minute confirm hypoventilation. Rechecking the probe delays care." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-02", {
      topic: "Capnography under procedural sedation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client receives IV fentanyl and midazolam for moderate sedation to reduce a dislocated shoulder. Before sedation the end-tidal CO2 was 38 mmHg, heart rate 72/minute, BP 124/78 mmHg and SpO2 99% on 2 L/minute of oxygen by nasal cannula. Which current reading most clearly signals hypoventilation?",
      rationale:
        "End-tidal CO2 has risen from 38 to 54 mmHg. Retained CO2 is the direct sign of falling ventilation. Supplemental oxygen keeps the SpO2 high for minutes after breathing slows, so SpO2 is a late sign. A small fall in heart rate and BP is expected with these drugs.",
      sources: [ASA_SED],
    }),
    kind: "mc",
    options: [
      { text: "SpO2 97% on 2 L/minute", why: "Oxygen keeps the SpO2 near normal while CO2 builds up. It is a late sign of hypoventilation." },
      { text: "BP 112/70 mmHg", why: "A small fall from 124/78 mmHg is an expected effect of sedation." },
      { text: "End-tidal CO2 54 mmHg", why: "A rise from 38 to 54 mmHg shows the client is breathing too little to clear CO2." },
      { text: "Heart rate 64/minute", why: "A small fall from 72/minute is an expected effect of sedation." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-03", {
      topic: "Discharge readiness after moderate sedation",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had an outpatient cystoscopy with IV midazolam and fentanyl 50 minutes ago. Before the procedure the client was alert and oriented, and SpO2 was 97% on room air. Which findings show the client meets criteria for discharge home? Select all that apply.",
      rationale:
        "A client goes home after sedation when mental status and vital signs are back to baseline, pain is controlled and a responsible adult will take them home. An SpO2 of 90% is below the baseline of 97%. Flumazenil given 10 minutes ago can wear off before the sedative, so the client needs longer observation. The client may not drive after sedation.",
      sources: [ASA_SED, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Alert and oriented as at baseline", why: "Return to baseline mental status is a core discharge criterion." },
      { text: "Vital signs within the preprocedure range", why: "Stable vital signs at baseline show the drug effect has passed." },
      { text: "Plans to drive home after discharge", why: "Sedatives impair judgment and reaction time for hours. The client may not drive." },
      { text: "Received IV flumazenil 10 minutes ago", why: "Flumazenil can wear off before midazolam, so sedation may return. Observation continues." },
      { text: "An adult will drive the client home", why: "A responsible adult escort is required after sedation." },
      { text: "Pain rated 2 on a 0 to 10 scale", why: "Controlled pain allows the client to go home." },
      { text: "SpO2 of 90% while breathing room air", why: "90% is below the baseline of 97%, which suggests lingering hypoventilation." },
    ],
    correct: [0, 1, 4, 5],
  },
  {
    ...meta("rn-s21-04", {
      topic: "Diluted naloxone dose volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "After fentanyl for moderate sedation, a client has respirations of 6/minute and does not rouse to voice. The airway is open and the client receives bag-mask breaths. The prescription is naloxone 0.08 mg IV every 2 minutes as needed. The nurse dilutes naloxone 0.4 mg/mL, 1 mL, with 0.9% sodium chloride to a total volume of 10 mL. How many mL should the nurse give for each dose?",
      rationale:
        "The diluted syringe holds 0.4 mg in 10 mL, which is 0.04 mg/mL. The dose is 0.08 mg, so each dose is 2 mL. Small doses reverse respiratory depression while limiting sudden pain, vomiting and a surge in BP and heart rate.",
      calc: { expr: "0.08 / (0.4 / 10)", answer: 2, unit: "mL", round: 0, steps: ["0.4 / 10 = 0.04", "0.08 / 0.04 = 2"] },
      sources: [ASA_SED, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.2 mL", why: "0.2 mL is the dose volume from the undiluted 0.4 mg/mL vial. The syringe now holds 0.04 mg/mL." },
      { text: "2 mL", why: "0.08 mg divided by 0.04 mg/mL is 2 mL." },
      { text: "5 mL", why: "5 comes from dividing 0.4 by 0.08. That inverts the dose and the concentration." },
      { text: "10 mL", why: "10 mL is the whole syringe, 0.4 mg. That is 5 times the prescribed dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-05", {
      topic: "Reversal risk with long-term benzodiazepine use",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 58-year-old client has taken alprazolam 1 mg three times daily for 6 years. The client received midazolam for sedation during a procedure. Afterward the client is drowsy but rouses to voice. Respirations are 14/minute and SpO2 is 96% on room air. The team asks about giving flumazenil. Which risk concerns the nurse most?",
      rationale:
        "Six years of daily alprazolam makes the client dependent on benzodiazepines. Flumazenil blocks the benzodiazepine receptor all at once and can trigger acute withdrawal with seizures. The client rouses to voice with respirations of 14/minute and an SpO2 of 96%, so there is no clear need for reversal. Flumazenil does not act on opioid receptors.",
      sources: [LEHNE, ASA_SED],
    }),
    kind: "mc",
    options: [
      { text: "Opioid withdrawal after the dose", why: "Flumazenil does not act on opioid receptors. Naloxone is the drug that can cause opioid withdrawal." },
      { text: "Bradycardia after the dose", why: "Slow heart rate is not a typical effect of flumazenil." },
      { text: "Severe hypoglycemia after the dose", why: "Flumazenil does not lower blood glucose." },
      { text: "Seizures after the dose", why: "Sudden receptor blockade in a dependent client can cause withdrawal seizures." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s21-06", {
      topic: "Deepening sedation on the procedure record",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the sedation record for a client having a transesophageal echocardiogram under moderate sedation. Click to highlight the findings that need follow-up.",
      rationale:
        "At 0925 the client responds only to a trapezius squeeze, which is deep sedation, not moderate. Respirations of 8/minute with pauses and an end-tidal CO2 rise from 40 to 58 mmHg show hypoventilation. The BP of 118/72 mmHg, a heart rate of 70/minute, warm dry skin and the 0915 findings are within the expected range for moderate sedation.",
      sources: [ASA_SED],
    }),
    kind: "highlight",
    passage:
      "0915 Midazolam 1 mg IV given. [[Opens eyes when name is spoken.]] [[Respirations 14/minute and regular.]] [[SpO2 97% on 2 L/minute.]] 0925 Fentanyl 25 mcg IV given. [[Responds only to a trapezius squeeze.]] [[Respirations 8/minute with pauses.]] [[End-tidal CO2 58 mmHg]], up from 40 mmHg at 0915. [[BP 118/72 mmHg with heart rate 70/minute.]] [[Skin warm and dry with brisk capillary refill.]]",
    spans: [
      { text: "Opens eyes when name is spoken.", why: "Response to voice is the expected level for moderate sedation." },
      { text: "Respirations 14/minute and regular.", why: "A regular rate of 14/minute is adequate ventilation." },
      { text: "SpO2 97% on 2 L/minute.", why: "97% on low-flow oxygen needs no follow-up." },
      { text: "Responds only to a trapezius squeeze.", why: "Response only to a painful stimulus means deep sedation." },
      { text: "Respirations 8/minute with pauses.", why: "A slow rate with pauses shows respiratory depression." },
      { text: "End-tidal CO2 58 mmHg", why: "A rise from 40 to 58 mmHg shows CO2 retention from hypoventilation." },
      { text: "BP 118/72 mmHg with heart rate 70/minute.", why: "This BP and heart rate are stable and need no follow-up." },
      { text: "Skin warm and dry with brisk capillary refill.", why: "Warm, dry skin with brisk refill shows adequate perfusion." },
    ],
    correct: [3, 4, 5],
  },
  {
    ...meta("rn-s21-07", {
      topic: "Blood pressure cuff size",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has an upper arm circumference of 42 cm. The only cuff in the room is labelled for arms 22 to 32 cm. The BP reading is 162/98 mmHg. At the last visit it was 136/84 mmHg with a large adult cuff. How should the nurse interpret the new reading?",
      rationale:
        "A cuff labelled for arms up to 32 cm is too small for an arm of 42 cm. A bladder that is too small needs extra pressure to compress the artery, so the reading runs high. The nurse repeats the measurement with a cuff sized for the arm before any conclusion about the BP.",
      sources: [AHA_BP, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "The reading is likely falsely low", why: "A cuff that is too large gives a low reading. This cuff is too small." },
      { text: "The reading is likely falsely high", why: "A small bladder on a 42 cm arm overestimates the BP." },
      { text: "The reading shows stage 2 hypertension", why: "The wrong cuff size makes this reading unreliable, so it cannot be staged." },
      { text: "The reading is accurate for this arm", why: "The cuff range stops at 32 cm, so it does not fit a 42 cm arm." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-08", {
      topic: "Pulse deficit in atrial fibrillation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with atrial fibrillation has an apical pulse of 118/minute, counted by the nurse for 1 full minute. At the same time a second nurse counts a radial pulse of 92/minute. What is the client's pulse deficit?",
      rationale:
        "The pulse deficit is the apical rate minus the radial rate counted at the same time. 118 minus 92 is 26/minute. It shows that 26 beats each minute are too weak to reach the wrist. A deficit reflects poor filling of the ventricles at a fast irregular rate.",
      calc: { expr: "118 - 92", answer: 26, unit: "/minute", round: 0, steps: ["118 - 92 = 26"] },
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "26/minute", why: "118 minus 92 is 26/minute." },
      { text: "52/minute", why: "52 is double the difference. The deficit is not multiplied." },
      { text: "105/minute", why: "105 is the average of the two rates, not the difference." },
      { text: "210/minute", why: "210 is the sum of the two rates, not the difference." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s21-09", {
      topic: "Room setup for procedural sedation",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares a treatment room where a client will receive IV midazolam and fentanyl for incision and drainage of a large abscess. Which items should be ready at the bedside before the first dose? Select all that apply.",
      rationale:
        "Sedatives and opioids can depress breathing. Suction clears secretions or vomit. A bag-valve-mask with oxygen supports ventilation. Naloxone and flumazenil reverse the two drugs being given. Capnography detects hypoventilation early. Dantrolene treats malignant hyperthermia from volatile anesthetics. Protamine reverses heparin. A cooling blanket has no role here.",
      sources: [ASA_SED],
    }),
    kind: "sata",
    options: [
      { text: "Suction with a rigid tip", why: "Suction clears the airway if the client vomits or pools secretions." },
      { text: "Dantrolene for injection", why: "Dantrolene treats malignant hyperthermia. Midazolam and fentanyl do not trigger it." },
      { text: "Bag-valve-mask and oxygen", why: "Assisted breaths may be needed if respiratory depression occurs." },
      { text: "Protamine sulfate vial", why: "Protamine reverses heparin and has no role in sedation." },
      { text: "Naloxone and flumazenil", why: "These reverse fentanyl and midazolam if breathing is depressed." },
      { text: "Capnography monitor", why: "End-tidal CO2 shows hypoventilation before SpO2 falls." },
      { text: "Hypothermia cooling blanket", why: "Fever is not an expected risk of moderate sedation." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s21-10", {
      topic: "Vital sign pattern after head injury",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A client with a closed head injury from a fall has no spinal cord injury. The nurse reviews the flow sheet. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "1200", "1400", "1600", "1800"],
            rows: [
              ["BP (mmHg)", "132/80", "146/78", "162/70", "178/62"],
              ["Heart rate (/minute)", "84", "72", "60", "52"],
              ["Respirations", "16 regular", "14 regular", "12 irregular", "10 irregular"],
              ["Glasgow Coma Scale", "14", "13", "11", "9"],
            ],
          },
        },
      ],
      rationale:
        "From 1200 to 1800 the systolic BP rises from 132 to 178 mmHg while the diastolic falls, so the pulse pressure widens. The heart rate falls from 84 to 52/minute. Breathing becomes slow and irregular. The Glasgow Coma Scale drops from 14 to 9. Together these show intracranial hypertension. This pattern is a late and dangerous sign.",
      sources: [HINKLE, AANN_EVD],
    }),
    kind: "mc",
    options: [
      { text: "Hypertensive encephalopathy", why: "The BP rise here follows a head injury and comes with a slowing pulse and irregular breathing. That pattern points to pressure on the brainstem." },
      { text: "Neurogenic shock", why: "Neurogenic shock causes low BP with a slow pulse after spinal cord injury. The BP here is rising." },
      { text: "Autonomic dysreflexia", why: "Dysreflexia follows a spinal cord injury. This client has none." },
      { text: "Intracranial hypertension", why: "Widening pulse pressure, a slowing pulse, irregular breathing and a falling GCS fit this." },
    ],
    correct: 3,
  },
];
