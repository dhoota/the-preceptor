import type { Item } from "@/engine/types";
import { AARC_IS, ACR_CONTRAST, ASA_FAST, FREEMAN, HINKLE, KDIGO_AKI, NEUBERGER, POTTER, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s19-01", {
      topic: "Metformin after iodinated contrast",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 68-year-old client with type 2 diabetes had a CT scan with IV iodinated contrast this morning. The client takes metformin 1000 mg twice daily. Today the estimated glomerular filtration rate (eGFR) is 26 mL/min/1.73 m2. Which action should the nurse take?",
      rationale:
        "The client received iodinated contrast and has an eGFR of 26 mL/min/1.73 m2. At that level metformin is held from the time of contrast. It restarts no sooner than 48 hours later, and only after kidney function is rechecked. Contrast can worsen kidney function. Metformin can then build up and cause lactic acidosis. A lower dose does not remove this risk.",
      refs: ["Metformin is held at the time of iodinated contrast when the eGFR is below 30 mL/min/1.73 m2 or acute kidney injury is present. It restarts no sooner than 48 hours later, after kidney function is rechecked."],
      sources: [ACR_CONTRAST],
    }),
    kind: "mc",
    options: [
      { text: "Give the evening metformin dose as scheduled", why: "An eGFR of 26 is below the level of 30 at which metformin is held after contrast." },
      { text: "Hold metformin and notify the prescriber", why: "With an eGFR of 26, metformin is held and restarts only after kidney function is rechecked." },
      { text: "Give half the usual metformin dose tonight", why: "A reduced dose still exposes the client to lactic acidosis while kidney function is uncertain." },
      { text: "Restart metformin once the client voids", why: "Voiding does not show that kidney function is stable. Kidney function is rechecked before a restart." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-02", {
      topic: "Food intake before elective surgery",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client is scheduled for an elective hernia repair under general anesthesia at 1300. At 0930 the client says, \"I was hungry, so I had toast with butter and a coffee with milk at 0800.\" Which conclusion should the nurse draw?",
      rationale:
        "The client ate toast and drank coffee with milk at 0800. Surgery under general anesthesia is set for 1300. A light meal and nonhuman milk need at least 6 hours of fasting. The nurse reports the intake so the anesthesia team can decide on the start time. Coffee with milk is not a clear liquid.",
      refs: ["Adults fast at least 6 hours after a light meal or nonhuman milk and at least 2 hours after clear liquids before elective anesthesia."],
      canada: "The Canadian Anesthesiologists' Society 2026 guidelines set 6 hours of fasting after any meal with solids or nonhuman milk, and 2 hours after clear fluids for adults. Black coffee counts as a clear fluid, but coffee with milk does not.",
      sources: [ASA_FAST, { body: "Canadian Anesthesiologists' Society", work: "Guidelines to the Practice of Anesthesia, Revised Edition 2026. Canadian Journal of Anesthesia 73(1)", year: 2026, url: "https://www.cas.ca/CASAssets/Documents/Practice-Resources/Guidelines/CAS_Guidelines_Anesthesia_2026.pdf" }],
    }),
    kind: "mc",
    options: [
      { text: "The intake is acceptable because it was a light meal", why: "A light meal needs at least 6 hours of fasting. The meal at 0800 is less than 6 hours before 1300." },
      { text: "The coffee with milk counts as a clear liquid", why: "Milk makes the coffee a nonhuman milk drink. Clear liquids contain no milk." },
      { text: "The surgery start time needs anesthesia review", why: "Toast and milk at 0800 are less than 6 hours before a 1300 start. The anesthesia team decides on a delay." },
      { text: "The fasting rule applies only to solid food", why: "Nonhuman milk needs 6 hours of fasting and clear liquids need 2 hours." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-03", {
      topic: "Complications after thyroid removal",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a total thyroidectomy 8 hours ago. Which findings should the nurse report promptly to the primary health care provider? Select all that apply.",
      rationale:
        "The parathyroid glands can be bruised or removed during thyroidectomy. Low calcium then shows as tingling around the lips and a facial twitch when the cheek is tapped. A high-pitched sound on inspiration points to airway narrowing. Blood can run behind the neck and pool on the pillow while the front dressing looks dry. A sore throat and neck discomfort are expected. A temperature of 37.3°C is normal.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Sore throat when swallowing", why: "A mild sore throat is expected after intubation and neck surgery." },
      { text: "Discomfort when moving the neck", why: "Neck discomfort is expected after thyroid surgery. Supporting the head limits strain." },
      { text: "Tingling around the lips", why: "Perioral tingling is an early sign of low calcium from parathyroid injury." },
      { text: "Oral temperature 37.3°C (99.1°F)", why: "A temperature of 37.3°C is within the normal range and needs no urgent report." },
      { text: "New high-pitched sound on breathing in", why: "Stridor signals airway narrowing from swelling, bleeding or nerve injury." },
      { text: "Blood pooling on the pillow behind the neck", why: "Blood drains by gravity to the back of the neck. Pooling there can signal bleeding the front dressing hides." },
      { text: "Facial twitching when the cheek is tapped", why: "A twitch on tapping over the facial nerve is Chvostek sign, a sign of low calcium." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s19-04", {
      topic: "Warning sign after thoracentesis",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had a right-sided thoracentesis 30 minutes ago, and 900 mL of pleural fluid was removed. Which finding needs immediate follow-up by the nurse?",
      rationale:
        "A needle in the pleural space can puncture the lung. Sudden shortness of breath with an SpO2 of 86% soon after the procedure points to a pneumothorax. Removal of 900 mL can also cause re-expansion pulmonary edema, which likewise needs urgent care. The nurse stays with the client, raises the head of the bed and calls the provider. A small bruise, mild soreness and louder breath sounds are expected.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Sudden shortness of breath with SpO2 86%", why: "Sudden dyspnea and a low oxygen saturation after thoracentesis suggest a pneumothorax." },
      { text: "A dry dressing with a small bruise", why: "A small bruise under a dry dressing is expected after a needle puncture." },
      { text: "Mild ache at the puncture site", why: "Mild local soreness is expected after the procedure." },
      { text: "Louder breath sounds on the right than before", why: "Breath sounds improve on the tapped side as the lung re-expands." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-05", {
      topic: "Laboratory check before liver biopsy",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with chronic hepatitis C is scheduled for a percutaneous liver biopsy tomorrow. The nurse reviews the morning laboratory results. Which result should the nurse report to the primary health care provider before the procedure?",
      rationale:
        "A percutaneous liver biopsy passes a needle into a highly vascular organ. A platelet count of 42 000/mm3 is below the level at which bleeding risk rises. The provider needs this result before the procedure. Chronic hepatitis often raises the ALT, and that does not add bleeding risk. The hemoglobin and albumin are within normal ranges.",
      refs: ["Bleeding risk after percutaneous liver biopsy rises when platelets are below 50 000/mm3."],
      canada: "Canadian labs report platelets as x 10^9/L only. A count of 42 000/mm3 reads as 42 x 10^9/L, and the 50 000/mm3 cutoff reads as 50 x 10^9/L.",
      sources: [NEUBERGER, HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Hemoglobin 14.1 g/dL (141 g/L)", why: "This hemoglobin is within the normal range and gives no reason to delay." },
      { text: "ALT 88 units/L", why: "A raised ALT is expected in chronic hepatitis. It does not add bleeding risk." },
      { text: "Albumin 3.6 g/dL (36 g/L)", why: "This albumin is within the normal range." },
      { text: "Platelet count 42 000/mm3", why: "A count below 50 000/mm3 raises the risk of bleeding after a percutaneous biopsy." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-06", {
      topic: "Low urine output after bowel surgery",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client who weighs 80 kg is 6 hours past an open bowel resection. Unit policy asks for a report when urine output falls below 0.5 mL/kg/hour for 2 hours in a row. Which two findings should the nurse report to the surgeon now? Select two.",
      rationale:
        "The report threshold is 0.5 mL/kg/hour. For a client of 80 kg that is 40 mL each hour. Outputs of 32 mL and 28 mL are both below it. A heart rate that climbs from 88 to 118/minute with falling urine output suggests low circulating volume, such as bleeding. Absent bowel sounds, moderate pain, a low-grade temperature and a small spot of drainage are expected 6 hours after bowel surgery.",
      calc: { expr: "0.5 * 80", answer: 40, unit: "mL/hour", round: 0, steps: ["0.5 * 80 = 40"] },
      sources: [HINKLE, KDIGO_AKI],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Absent bowel sounds in all four quadrants", why: "Bowel sounds are often absent for a time after bowel surgery. This is expected at 6 hours." },
      { text: "Incisional pain 4 of 10 using the PCA pump", why: "Moderate pain controlled with the PCA pump is expected on the day of surgery." },
      { text: "Urine output 32 mL, then 28 mL, over 2 hours", why: "Both hourly volumes are below 40 mL, the report level for a client of 80 kg." },
      { text: "Temperature 37.6°C (99.7°F)", why: "A low-grade temperature on the day of surgery is common and is not yet a concern." },
      { text: "Heart rate 118/minute, up from 88/minute", why: "A rising heart rate with low urine output can signal bleeding or low volume." },
      { text: "Small serosanguineous spot on the dressing", why: "A small amount of serosanguineous drainage is expected early after surgery." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s19-07", {
      topic: "Bladder irrigation after prostate resection",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews a note on a client who had a transurethral resection of the prostate 6 hours ago. Continuous bladder irrigation is running. Click to highlight the findings that need follow-up.",
      rationale:
        "Catheter output below the irrigation volume means fluid is staying in the bladder. With a firm lower abdomen, a strong urge to void and pain of 7, this points to a catheter blocked by clots. Thick, bright red drainage with clots suggests arterial bleeding. Irrigation at the prescribed rate, a taped catheter and normal orientation are expected.",
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Irrigation running at the prescribed rate]]. [[Drainage thick and bright red with clots]]. [[Reports a strong urge to void and lower abdominal pain, 7 of 10]]. [[Lower abdomen firm and rounded above the pubis]]. [[Catheter output less than irrigation infused in the last hour]]. [[Catheter taped to the inner thigh]]. [[Alert and oriented]].",
    spans: [
      { text: "Irrigation running at the prescribed rate", why: "Running the irrigation as prescribed is expected care." },
      { text: "Drainage thick and bright red with clots", why: "Thick, bright red drainage with clots suggests arterial bleeding." },
      { text: "Reports a strong urge to void and lower abdominal pain, 7 of 10", why: "Urge and pain with a catheter in place suggest a distended bladder from a blocked catheter." },
      { text: "Lower abdomen firm and rounded above the pubis", why: "A firm, rounded suprapubic area suggests the bladder is filling with retained fluid." },
      { text: "Catheter output less than irrigation infused in the last hour", why: "Output below the infused volume means irrigation fluid is being retained." },
      { text: "Catheter taped to the inner thigh", why: "Securing the catheter limits traction and is expected care." },
      { text: "Alert and oriented", why: "Normal orientation needs no follow-up." },
    ],
    correct: [1, 2, 3, 4],
  },
  {
    ...meta("rn-s19-08", {
      topic: "Measuring orthostatic vital signs",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client reports dizziness when getting out of bed. The nurse is to measure orthostatic vital signs. Place the nurse's steps in order.",
      rationale:
        "The client rests supine for 5 minutes so the baseline is stable. The nurse measures lying BP and pulse, then helps the client stand. BP and pulse are rechecked at 1 and 3 minutes. The nurse compares the values. A sustained fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes defines orthostatic hypotension.",
      refs: ["Orthostatic hypotension is a sustained fall in systolic BP of at least 20 mmHg or diastolic BP of at least 10 mmHg within 3 minutes of standing."],
      sources: [FREEMAN, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Help the client stand", why: "The client stands after the baseline readings, with the nurse close by." },
      { text: "Have the client lie flat for 5 minutes", why: "Lying flat for 5 minutes gives a stable baseline before the position change." },
      { text: "Recheck BP and pulse at 1 and 3 minutes", why: "Readings within 3 minutes of standing detect the drop that defines orthostatic hypotension." },
      { text: "Walk the client to the bathroom and back", why: "Walking first changes the baseline and adds fall risk before any readings." },
      { text: "Measure lying BP and pulse", why: "Baseline values are measured after the rest and before standing." },
      { text: "Compare lying and standing values", why: "A fall of 20 mmHg systolic or 10 mmHg diastolic confirms orthostatic hypotension." },
      { text: "Place the BP cuff on the ankle", why: "An ankle reading differs from the arm and does not match the baseline." },
    ],
    correct: [1, 4, 0, 2, 5],
  },
  {
    ...meta("rn-s19-09", {
      topic: "Early signs of compartment syndrome",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with a closed fracture of the left tibia had a long leg cast applied 10 hours ago. IV morphine was given 1 hour ago. Which findings suggest acute compartment syndrome? Select all that apply.",
      rationale:
        "Compartment syndrome occurs when pressure inside a closed muscle compartment cuts off blood flow. Early signs are pain out of proportion to the injury, pain on passive stretch and numbness or tingling. Pain that persists after morphine is a warning. Warm pink toes, normal refill and strong pulses do not rule it out, because loss of pulse comes late.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Toes on the left foot warm and pink", why: "Warm pink toes show blood flow to the foot and do not point to compartment syndrome." },
      { text: "Capillary refill of 2 seconds in the toes", why: "A refill of 2 seconds is normal." },
      { text: "Pain not relieved by the morphine dose", why: "Pain out of proportion to the injury that an opioid does not relieve is an early sign." },
      { text: "Mild toe swelling that eases with elevation", why: "Swelling that responds to elevation is expected after a fracture." },
      { text: "Pain when the toes are passively stretched", why: "Stretching muscles inside a tight compartment causes severe pain." },
      { text: "Pedal pulse strong and equal to the right", why: "A strong pulse does not suggest the condition. Loss of pulse is a late sign." },
      { text: "Numbness and tingling in the foot", why: "Paresthesia reflects pressure on nerves inside the compartment." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s19-10", {
      topic: "Incentive spirometer technique",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "On the first day after abdominal surgery, the nurse teaches a client to use an incentive spirometer. Which client action shows correct technique?",
      rationale:
        "An incentive spirometer encourages slow, deep inspiration. The client seals the lips around the mouthpiece, breathes in slowly and holds the breath at full inflation. This keeps the alveoli open and lowers the risk of atelectasis. It works best with deep breathing, coughing, early walking and good pain control.",
      sources: [AARC_IS, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Blows out forcefully through the mouthpiece", why: "The device is used by breathing in. Forceful exhalation does not expand the alveoli." },
      { text: "Inhales slowly and holds the breath briefly", why: "A slow deep breath held at full inspiration expands the alveoli and helps prevent atelectasis." },
      { text: "Takes quick short breaths to raise the ball", why: "Quick breaths move air mainly in the large airways and do not keep the alveoli open." },
      { text: "Uses the device once at the end of each day", why: "One daily session is too few. The device is used several times each hour while awake." },
    ],
    correct: 1,
  },
];
