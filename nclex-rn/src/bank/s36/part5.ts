import type { Item } from "@/engine/types";
import { ACR_CONTRAST, ANTICOAG, BOWEL_PREP, BTS_PLEURAL, DI, HINKLE, HRS_MRI, HYPONATREMIA, PAGANA, REFEED, SEPSIS_2021, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s36-41", {
      need: "RRP",
      topic: "Contrast CT in a client on hemodialysis",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "A 63-year-old client with end-stage kidney disease has hemodialysis every Monday, Wednesday and Friday and makes no urine. On Tuesday the client has a CT scan with IV iodinated contrast. Afterward the client asks, \"Do I need an extra dialysis session today to clear the dye?\" Which response by the nurse is accurate?",
      rationale:
        "A client who makes no urine has no kidney function left for contrast to injure. Contrast guidance advises against starting extra dialysis or changing the schedule only because iodinated contrast was given. The next routine session on Wednesday is enough. Drinking extra fluid adds volume that an anuric client cannot excrete.",
      sources: [ACR_CONTRAST],
    }),
    kind: "mc",
    options: [
      { text: "\"Yes, an extra session today will protect your kidneys.\"", why: "The kidneys no longer make urine, so there is no remaining function to protect." },
      { text: "\"Yes, the dye must be removed within a few hours.\"", why: "Guidance advises against changing the dialysis schedule only because of contrast." },
      { text: "\"No, but drink extra fluid today to flush it out.\"", why: "Extra fluid in a client without urine output risks fluid overload." },
      { text: "\"No, your regular Wednesday session is enough.\"", why: "The routine schedule is kept after iodinated contrast in clients on dialysis." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s36-42", {
      need: "RRP",
      topic: "Timing gadolinium MRI around hemodialysis",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 58-year-old client has hemodialysis every Monday, Wednesday and Friday morning. The client needs an elective brain MRI with a group II gadolinium-based contrast agent. The radiology team asks the nurse to help plan the timing. Which plan should the nurse support?",
      rationale:
        "Gadolinium agents are cleared by the kidneys, so they stay in the body longer in a client on dialysis. Contrast guidance recommends doing an elective gadolinium MRI as close as possible before a regularly scheduled hemodialysis session. The next session then removes much of the agent soon after the scan. Group II agents carry a low risk of nephrogenic systemic fibrosis, and the timing lowers exposure further. Extra or held sessions are not part of the plan.",
      sources: [ACR_CONTRAST],
    }),
    kind: "mc",
    options: [
      { text: "Schedule the MRI shortly before a regular session", why: "A session soon after the scan removes the agent with the least delay." },
      { text: "Schedule the MRI right after a session ends", why: "This leaves the longest gap before the agent is removed." },
      { text: "Add an extra dialysis session on the day before the MRI", why: "Dialysis before the scan cannot remove an agent not yet given." },
      { text: "Hold dialysis for 48 hours after the MRI", why: "Delaying dialysis keeps the agent in the body longer." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s36-43", {
      need: "RRP",
      topic: "MRI steps for an MR-conditional pacemaker",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with an MR-conditional pacemaker system is scheduled for a lumbar spine MRI. The nurse coordinates care with the MRI and device teams. Place the steps in order.",
      rationale:
        "The whole system, generator and leads, must be confirmed as MR-conditional before anything else. Trained staff then program the device to its MRI mode. During the scan the client has continuous ECG and pulse oximetry monitoring, with staff and a defibrillator ready. After the scan the device is checked and returned to its usual settings. A magnet is not a substitute for programming, and the device is not removed.",
      sources: [HRS_MRI],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Restore and check the settings", why: "After the scan the device is checked and returned to its usual program." },
      { text: "Place a magnet over the device", why: "A magnet does not replace formal MRI programming and is not a step in this sequence." },
      { text: "Confirm generator and leads are MR-conditional", why: "Every component must be MR-conditional before the scan can be planned." },
      { text: "Monitor ECG and SpO2 during the scan", why: "Continuous monitoring detects rhythm problems while the device is in MRI mode." },
      { text: "Program the device to its MRI mode", why: "Trained staff set the MRI mode after the system is confirmed and before the scan." },
      { text: "Remove the pacemaker before the scan", why: "An MR-conditional system stays in place and is managed by programming." },
    ],
    correct: [2, 4, 3, 0],
  },
  {
    ...meta("rn-s36-44", {
      need: "RRP",
      topic: "Refeeding risk from IV dextrose alone",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 76-year-old client with a small bowel obstruction has eaten almost nothing for 10 days and weighs 44 kg. The client is to take nothing by mouth. The primary health care provider prescribes IV dextrose 5% in 0.45% sodium chloride at 100 mL per hour and plans parenteral nutrition in 2 days. Which actions should the nurse anticipate now? Select all that apply.",
      rationale:
        "Dextrose in IV fluid triggers insulin release just as feeding does. In a client with 10 days of almost no intake, it can drive phosphorus, potassium and magnesium into cells before parenteral nutrition begins. Baseline levels are checked and low levels are replaced. Thiamine is given before dextrose starts because glucose use depletes thiamine. Weakness and new arrhythmias are watched for. Waiting for parenteral nutrition to begin these steps misses the risk.",
      sources: [REFEED],
    }),
    kind: "sata",
    options: [
      { text: "Wait until parenteral nutrition starts to check electrolytes", why: "IV dextrose alone can start refeeding shifts, so checks begin now." },
      { text: "Check phosphorus, potassium and magnesium now", why: "Baseline levels show reserves before dextrose drives them into cells." },
      { text: "Add dextrose 50% boluses for extra energy", why: "Extra glucose loads raise the refeeding risk." },
      { text: "Give thiamine before the dextrose infusion starts", why: "Glucose metabolism uses thiamine, and stores are low after poor intake." },
      { text: "Treat the risk as low because the client is not fed", why: "Dextrose in IV fluid supplies calories and can trigger refeeding." },
      { text: "Watch for weakness and new arrhythmias", why: "Falling phosphorus, potassium and magnesium affect muscle and heart rhythm." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s36-45", {
      need: "RRP",
      topic: "Telling SIADH from diabetes insipidus after pituitary surgery",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 6 days after transsphenoidal removal of a pituitary tumor. Today the serum sodium is 127 mEq/L (127 mmol/L), down from 139 mEq/L (139 mmol/L) on day 2. The client has no edema and takes no diuretics. Which three findings fit the syndrome of inappropriate antidiuretic hormone rather than diabetes insipidus? Select three.",
      rationale:
        "Antidiuretic hormone can leak from the injured pituitary about a week after surgery and cause water retention. A urine osmolality of 520 mOsm/kg shows urine far too concentrated for a low serum sodium. A low urine output and weight gain without edema show retained water. Diabetes insipidus instead causes large volumes of dilute urine, a specific gravity near 1.002, intense thirst and a rising sodium.",
      refs: ["In hypotonic hyponatremia, a urine osmolality above 100 mOsm/kg shows antidiuretic hormone activity."],
      sources: [HYPONATREMIA, DI],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Urine specific gravity of 1.002", why: "Highly dilute urine fits diabetes insipidus, not water retention." },
      { text: "Urine osmolality of 520 mOsm/kg", why: "Concentrated urine with a low serum sodium shows antidiuretic hormone is acting." },
      { text: "Urine output of 350 mL/hour", why: "Large urine volumes fit diabetes insipidus." },
      { text: "Urine output of 900 mL in 24 hours", why: "A low output fits water retention from excess antidiuretic hormone." },
      { text: "Intense thirst for cold water", why: "Strong thirst for cold water is typical of diabetes insipidus." },
      { text: "Weight gain of 1.5 kg with no edema", why: "Retained free water raises weight without visible edema." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s36-46", {
      need: "RRP",
      topic: "Rising sodium and dilute urine after pituitary surgery",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 29-year-old client is 18 hours after transsphenoidal removal of a pituitary tumor. Urine output over the last 3 hours was 350, 420 and 380 mL. Urine specific gravity is 1.002. Serum sodium is 149 mEq/L (149 mmol/L), up from 140 mEq/L (140 mmol/L) before surgery. Glucose is 108 mg/dL (6.0 mmol/L). The client reports intense thirst. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Urine output of 350 to 420 mL each hour with a specific gravity of 1.002 and a sodium that has risen to 149 mEq/L fit central diabetes insipidus after pituitary surgery. A glucose of 108 mg/dL rules out an osmotic diuresis. The nurse gives desmopressin as prescribed and replaces fluid losses, letting the client drink to thirst. Serum sodium and hourly urine output with specific gravity show the response and catch overcorrection.",
      sources: [DI, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Central diabetes insipidus", why: "Large volumes of dilute urine with a rising sodium after pituitary surgery fit this condition." },
      { text: "Syndrome of inappropriate antidiuretic hormone", why: "This causes low urine output and a falling sodium, the opposite of these findings." },
      { text: "Osmotic diuresis from hyperglycemia", why: "The glucose is 108 mg/dL, too low to drive an osmotic diuresis." },
      { text: "Cerebral salt wasting", why: "Salt wasting causes a low sodium. The sodium here is high." },
    ],
    actions: [
      { text: "Restrict oral and IV fluids to 1 L daily", why: "Fluid restriction would worsen dehydration and raise the sodium further." },
      { text: "Give desmopressin as prescribed", why: "Desmopressin replaces the missing antidiuretic hormone." },
      { text: "Give 3% sodium chloride by IV infusion", why: "Hypertonic saline would raise an already high sodium." },
      { text: "Replace fluid losses as prescribed", why: "Fluid replacement keeps pace with the urine losses." },
      { text: "Give furosemide 20 mg IV now", why: "A diuretic would worsen the water loss." },
    ],
    parameters: [
      { text: "Serum sodium level", why: "Sodium shows whether water balance is being corrected and guards against overcorrection." },
      { text: "Serum lipase level", why: "Lipase does not guide treatment of diabetes insipidus." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose control and does not guide acute care." },
      { text: "Urine output and specific gravity", why: "Hourly output and specific gravity show the response to desmopressin." },
      { text: "International normalized ratio", why: "The INR does not guide water balance." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s36-47", {
      need: "RRP",
      topic: "Lactate trend during septic shock resuscitation",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 72-year-old client with septic shock from a urinary source received IV fluids and antibiotics starting at 1000. The nurse reviews the flow sheet. Based on the trend, which conclusion about the response to treatment is most accurate?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Time", "1000", "1200", "1400"],
            rows: [
              ["Serum lactate (mmol/L)", "4.6", "3.1", "1.8"],
              ["Mean arterial pressure (mmHg)", "58", "64", "70"],
              ["Heart rate (/minute)", "124", "108", "96"],
              ["Urine output (mL/hour)", "10", "25", "40"],
            ],
          },
        },
      ],
      rationale:
        "Lactate falls from 4.6 to 1.8 mmol/L between 1000 and 1400. Over the same time the mean arterial pressure rises from 58 to 70 mmHg, the heart rate slows from 124 to 96/minute and urine output rises from 10 to 40 mL/hour. Together these show better tissue perfusion. Sepsis guidance supports using a falling lactate and a mean arterial pressure of 65 mmHg or more to guide resuscitation.",
      refs: ["Resuscitation in septic shock targets a mean arterial pressure of 65 mmHg or more."],
      sources: [SEPSIS_2021],
    }),
    kind: "mc",
    options: [
      { text: "Septic shock is worsening", why: "Every value is moving toward normal, which does not fit worsening shock." },
      { text: "Fluid overload is developing", why: "Overload would bring breathlessness and falling oxygenation, not rising urine output with clearing lactate." },
      { text: "Hypoperfusion persists despite treatment", why: "A lactate of 1.8 mmol/L and a mean arterial pressure of 70 mmHg show perfusion has improved." },
      { text: "Tissue perfusion is improving", why: "Falling lactate and heart rate with rising pressure and urine output show better perfusion." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s36-48", {
      need: "RRP",
      topic: "Pleural fluid protein ratio",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client with a new pleural effusion has a diagnostic thoracentesis. Pleural fluid protein is 4.2 g/dL (42 g/L), and serum protein drawn at the same time is 6.0 g/dL (60 g/L). The laboratory states that a pleural to serum protein ratio above 0.5 indicates an exudate. What is the ratio, and what does it indicate?",
      rationale:
        "The ratio is 4.2 divided by 6.0, which is 0.7. A ratio above 0.5 meets a criterion for an exudate. An exudate points to a local cause such as infection, cancer or inflammation of the pleura. A transudate comes from pressure or protein changes, such as heart failure or low albumin. The result guides further tests on the fluid.",
      calc: { expr: "4.2 / 6.0", answer: 0.7, unit: "ratio", round: 1, steps: ["4.2 / 6.0 = 0.7"] },
      sources: [BTS_PLEURAL, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "0.35, which indicates a transudate", why: "0.35 halves the true ratio. 4.2 divided by 6.0 is 0.7." },
      { text: "0.7, which indicates a transudate", why: "The ratio is right, but 0.7 is above 0.5, the cutoff for an exudate." },
      { text: "0.7, which indicates an exudate", why: "4.2 divided by 6.0 is 0.7, above the 0.5 cutoff for an exudate." },
      { text: "1.4, which indicates an exudate", why: "1.4 divides the serum value by the pleural value, which inverts the ratio." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-49", {
      need: "RRP",
      topic: "Volume loss during a bowel preparation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 81-year-old client who takes hydrochlorothiazide is doing a split-dose polyethylene glycol preparation at home for a colonoscopy tomorrow. The home health nurse visits after the first dose and records the note below. Click to highlight the findings that need follow-up.",
      rationale:
        "Large stool losses in an older adult who takes a thiazide can cause volume depletion and electrolyte shifts such as low sodium. Dizziness on standing and a fall in systolic BP from 132 to 104 mmHg show orthostatic hypotension. New confusion may signal low sodium or dehydration. The nurse reports these findings and arranges electrolyte checks as directed. Frequent watery stools, light yellow liquid output, clear fluids and mild cramping are expected.",
      sources: [BOWEL_PREP, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Has had 9 watery stools since 1800]]. [[Reports dizziness when standing]]. [[BP 132/78 mmHg lying and 104/62 mmHg standing]]. [[Drinking clear fluids as instructed]]. [[New confusion about the date]]. [[Stool now light yellow liquid]]. [[Mild cramping that comes and goes]].",
    spans: [
      { text: "Has had 9 watery stools since 1800", why: "Frequent watery stools are the intended effect of the preparation." },
      { text: "Reports dizziness when standing", why: "Dizziness on standing suggests volume depletion." },
      { text: "BP 132/78 mmHg lying and 104/62 mmHg standing", why: "A fall in systolic BP from 132 to 104 mmHg on standing shows orthostatic hypotension." },
      { text: "Drinking clear fluids as instructed", why: "Clear fluid intake is part of the preparation." },
      { text: "New confusion about the date", why: "New confusion can signal low sodium or dehydration in an older adult." },
      { text: "Stool now light yellow liquid", why: "Light yellow liquid output shows the preparation is working." },
      { text: "Mild cramping that comes and goes", why: "Mild intermittent cramping is common during bowel preparation." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s36-50", {
      need: "RRP",
      topic: "Timing a peak anti-Xa level for enoxaparin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client who weighs 142 kg receives enoxaparin subcutaneously every 12 hours at 0800 and 2000 for deep vein thrombosis. The third dose was given at 0800 today. The primary health care provider prescribes an anti-Xa level to check the dose. When should the nurse arrange for the sample to be drawn?",
      rationale:
        "Monitoring of low molecular weight heparin uses a peak anti-Xa level drawn about 4 hours after a subcutaneous dose. By the third or fourth dose, levels are close to steady state. Body weight of 142 kg is one reason the dose response is uncertain, so the level is checked. The third dose was given at 0800, so 1200 is the right time. A level just before the next dose shows a trough, not the peak.",
      refs: ["A peak anti-Xa level for low molecular weight heparin is drawn about 4 hours after a subcutaneous dose."],
      sources: [ANTICOAG],
    }),
    kind: "mc",
    options: [
      { text: "At 0830 today", why: "Thirty minutes after the dose is before absorption peaks." },
      { text: "At 1200 today", why: "About 4 hours after the 0800 dose is the peak anti-Xa time." },
      { text: "At 1930 today", why: "Just before the next dose gives a trough, not a peak." },
      { text: "At 0800 tomorrow", why: "Waiting a day misses the planned peak after the third dose." },
    ],
    correct: 1,
  },
];
