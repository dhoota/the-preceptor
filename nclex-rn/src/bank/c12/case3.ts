import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c12-3";

/** Case 3. Surgical unit. Older woman with vomiting and distention after past abdominal surgery. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Vomiting and Distention on the Surgical Unit",
  intro:
    "A 68-year-old woman is admitted to the surgical unit at 1000 from the emergency department. She has had cramping abdominal pain and vomiting for 2 days. She has passed no flatus or stool for 24 hours. The surgeon plans a trial of care without an operation.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Abdominal hysterectomy 12 years ago. Sigmoid colon resection 3 years ago.",
        "Hypertension treated with lisinopril 10 mg by mouth daily.",
        "CT scan in the emergency department: dilated small bowel loops with a single transition point. No free air.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Nothing by mouth.",
        "Insert a nasogastric tube and connect it to low intermittent suction.",
        "0.9% sodium chloride IV at 125 mL/hour, started in the emergency department at 0930.",
        "Potassium chloride 10 mEq in 100 mL IV over 1 hour, 2 doses.",
        "Morphine 2 mg IV every 3 hours as needed for pain.",
        "Heparin 5000 units subcutaneous every 8 hours.",
        "Daily weight. Intake and output every 4 hours.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Temperature", "37.2°C (99.0°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "112/70 mmHg"],
          ["SpO2", "96% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 0900", "Reference range"],
        rows: [
          ["Potassium", "3.1 mEq/L (3.1 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Chloride", "92 mEq/L (92 mmol/L)", "98 to 106 mEq/L"],
          ["Bicarbonate", "32 mEq/L (32 mmol/L)", "22 to 28 mEq/L"],
          ["BUN", "32 mg/dL (11.4 mmol/L)", "8 to 20 mg/dL"],
          ["Creatinine", "1.3 mg/dL (115 micromol/L)", "0.5 to 1.1 mg/dL"],
          ["Glucose", "94 mg/dL (5.2 mmol/L)", "70 to 99 mg/dL"],
          ["White blood cells", "9.8 x 10^3/microL", "4.5 to 11.0 x 10^3/microL"],
          ["Lactate", "1.4 mmol/L", "0.5 to 2.2 mmol/L"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Assessment cues in bowel obstruction",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1030 the nurse performs a focused assessment and records the findings below. Click to highlight the findings that are consistent with the client's admitting problem or its effects.",
        rationale:
          "A distended, tympanic abdomen shows gas and fluid trapped above a blockage. High-pitched rushes are the bowel working against an obstruction. Green vomitus shows backflow of small bowel contents. Dry mucous membranes reflect fluid lost through vomiting. With a heart rate of 104/minute, these fit an obstruction with fluid loss. Orientation, clear lungs, healed scars and normal pedal pulses are expected.",
        sources: [SRC.brunner, SRC.bologna],
      }),
      kind: "highlight",
      passage:
        "[[Oriented to person, place and time]]. [[Abdomen distended and tympanic]]. [[High-pitched bowel sounds in rushes]]. [[Surgical scars well healed]]. [[Vomited 400 mL of green fluid at 1015]]. [[Lungs clear on auscultation]]. [[Mucous membranes dry]]. [[Pedal pulses 2+ and equal]]. Cramping pain 6 of 10 that comes and goes.",
      spans: [
        { text: "Oriented to person, place and time", why: "Full orientation is expected and does not reflect the obstruction." },
        { text: "Abdomen distended and tympanic", why: "Gas and fluid build up above a blockage and distend the abdomen." },
        { text: "High-pitched bowel sounds in rushes", why: "High-pitched rushes reflect the bowel pushing against a blockage." },
        { text: "Surgical scars well healed", why: "Healed scars are expected. Past surgery raises the risk of adhesions but is not a new finding." },
        { text: "Vomited 400 mL of green fluid at 1015", why: "Bile-stained vomit shows backflow of small bowel contents." },
        { text: "Lungs clear on auscultation", why: "Clear lungs are expected and show no aspiration so far." },
        { text: "Mucous membranes dry", why: "Dry membranes reflect fluid lost through vomiting and poor intake." },
        { text: "Pedal pulses 2+ and equal", why: "Normal pedal pulses are expected." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory effects of vomiting",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the laboratory results drawn at 0900. For each result, specify whether it is consistent with fluid and electrolyte loss from vomiting.",
        rationale:
          "Vomiting removes hydrochloric acid, potassium and water from the stomach. Chloride falls to 92 mEq/L and bicarbonate rises to 32 mEq/L, a metabolic alkalosis. Potassium falls to 3.1 mEq/L from loss and from the shift into cells in alkalosis. A BUN of 32 mg/dL with a creatinine of 1.3 mg/dL (115 micromol/L) reflects low blood volume. The glucose, white cell count and lactate are within normal limits.",
        sources: [SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada:
          "Canadian labs report these results only in SI units and report urea rather than BUN. Urea reads 11.4 mmol/L and creatinine 115 micromol/L. The Medical Council of Canada lists urea as 2.1 to 8.0 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with losses from vomiting", "Not consistent with losses from vomiting"],
      rows: [
        { text: "Potassium 3.1 mEq/L (3.1 mmol/L)", correct: [0], why: "Potassium is lost in vomitus and shifts into cells in alkalosis." },
        { text: "Glucose 94 mg/dL (5.2 mmol/L)", correct: [1], why: "This glucose is within the reference range." },
        { text: "Chloride 92 mEq/L (92 mmol/L)", correct: [0], why: "Vomiting removes hydrochloric acid, so chloride falls." },
        { text: "Bicarbonate 32 mEq/L (32 mmol/L)", correct: [0], why: "Loss of stomach acid leaves excess bicarbonate, a metabolic alkalosis." },
        { text: "Lactate 1.4 mmol/L", correct: [1], why: "This lactate is within the reference range." },
        { text: "BUN 32 mg/dL (11.4 mmol/L)", correct: [0], why: "A raised BUN reflects reduced kidney blood flow from fluid loss." },
        { text: "White blood cells 9.8 x 10^3/microL", correct: [1], why: "This white cell count is within the reference range." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Sequencing admission prescriptions",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 1040 the client says she feels sick again and her abdomen looks more distended. The IV infusion from the emergency department is running. Which prescription should the nurse carry out first?",
        rationale:
          "The client is nauseated, has been vomiting and has a distended abdomen. Decompression removes trapped fluid and gas, which lowers the risk of aspiration and eases distention. Potassium replacement matters, but the potassium of 3.1 mEq/L is not an immediate threat to life. Decompression eases much of the cramping pain, so morphine can follow. The daily weight is routine.",
        sources: [SRC.bologna, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Hang the first potassium chloride dose", why: "The potassium needs replacing but does not threaten life as much as aspiration." },
        { text: "Give morphine 2 mg IV for the pain", why: "Decompression eases much of the cramping pain. Morphine can follow." },
        { text: "Weigh the client for the daily record", why: "A daily weight is routine and can wait until the urgent care is done." },
        { text: "Insert the nasogastric tube to suction", why: "Decompression removes trapped fluid and gas and lowers the risk of aspiration." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safe care of a nasogastric tube",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nasogastric tube is placed at 1050 and connected to low intermittent suction. Which measures should the nurse include in the plan to keep the tube working safely? Select all that apply.",
        rationale:
          "Marking the tube where it leaves the nose lets the nurse see if it has moved. Raising the head of the bed lowers the risk of aspiration. Securing the tube without pressure on the nostril prevents a pressure injury. Listening to an air bolus cannot tell the stomach from the lung or esophagus. Lying flat raises the aspiration risk. Ice chips add fluid that suction removes with electrolytes.",
        sources: [SRC.aspenEn, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Check placement by listening to an air bolus", why: "Air bolus sounds are unreliable and can mislead the nurse about tube position." },
        { text: "Mark the tube where it exits the nose", why: "A mark shows if the external length changes and the tube has moved." },
        { text: "Keep the bed flat to ease her nausea", why: "Lying flat raises the risk of aspiration if she vomits around the tube." },
        { text: "Raise the head of the bed 30 degrees", why: "An upright position lowers the risk of aspiration." },
        { text: "Let her have ice chips when she asks", why: "Ice chips add water that suction removes, which washes out electrolytes." },
        { text: "Secure the tube off the nostril edge", why: "Keeping pressure off the nostril prevents a pressure injury." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Delegation on a surgical unit",
        cjmm: "action",
        difficulty: 3,
        stem: "At 1500 the nurse plans the evening work with an assistive personnel and a licensed practical nurse. The client has just reported that her pain has become constant. Complete the sentence by placing a task in each blank.",
        rationale:
          "Oral and nostril care is routine and stable, so the assistive personnel can do it. A scheduled subcutaneous heparin dose fits the licensed practical nurse's scope. A change from cramping to constant pain needs assessment and judgment by the registered nurse. Changing the suction setting needs a prescription. Ice chips are not given with nothing by mouth and suction in place.",
        sources: [SRC.delegation, { body: "Canadian Council for Practical Nurse Regulators", work: "Become a LPN/RPN", year: 2026, url: "https://ccpnr.ca/become-a-lpn-rpn/" }],
        canada:
          "In Ontario the practical nurse is a registered practical nurse (RPN), and other provinces use the LPN title. Each province has its own nursing legislation and regulator, so assignment rules vary by province.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse assigns {0} to the assistive personnel, {1} to the licensed practical nurse and keeps {2} for the registered nurse.",
      targets: ["Assistive personnel", "Licensed practical nurse", "Registered nurse"],
      tokens: [
        { text: "the scheduled heparin injection", why: "A routine subcutaneous injection fits the licensed practical nurse's scope." },
        { text: "a change to continuous suction", why: "The prescription is for low intermittent suction. A change needs a new prescription." },
        { text: "the assessment of the new pain", why: "New constant pain needs registered nurse assessment and clinical judgment." },
        { text: "ice chips for her dry mouth", why: "Ice chips break the nothing by mouth order and wash out electrolytes." },
        { text: "oral and nostril care", why: "Routine hygiene for a stable task can be delegated to assistive personnel." },
      ],
      correct: [4, 0, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to IV fluid and potassium",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The surgeon assessed the client at 1530 and continued care without an operation. The client received both potassium chloride doses and the IV fluid overnight. For each finding at 0600 on day 2, specify whether it shows an expected response to therapy or needs follow-up.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: "Day 2 at 0600. Potassium 3.9 mEq/L (3.9 mmol/L). BUN 18 mg/dL (6.4 mmol/L). Heart rate 88/minute. Urine output 45 mL/hour for the past 4 hours. Mucous membranes moist. Fine crackles in both lung bases, new since yesterday. Right forearm IV site red and tender along the vein.",
          },
        ],
        rationale:
          "The potassium rose from 3.1 to 3.9 mEq/L. The BUN fell from 32 to 18 mg/dL. The heart rate fell from 104 to 88/minute. Urine output of 45 mL/hour and moist membranes show restored volume. New crackles in both bases can mean the IV fluid is now more than she needs. Redness and tenderness along the vein point to phlebitis, which IV potassium can cause.",
        sources: [SRC.brunner, SRC.potter],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected response to therapy", "Needs follow-up"],
      rows: [
        { text: "Potassium 3.9 mEq/L (3.9 mmol/L)", correct: [0], why: "The potassium is back in the reference range after replacement." },
        { text: "Fine crackles in both lung bases", correct: [1], why: "New crackles can signal fluid overload from continued IV fluid." },
        { text: "BUN 18 mg/dL (6.4 mmol/L)", correct: [0], why: "The BUN is back in the reference range as volume is restored." },
        { text: "Heart rate 88/minute", correct: [0], why: "The heart rate has fallen from 104/minute as volume is restored." },
        { text: "IV site red and tender along the vein", correct: [1], why: "Redness and tenderness along the vein point to phlebitis." },
        { text: "Urine output 45 mL/hour", correct: [0], why: "This output shows adequate kidney blood flow." },
      ],
    },
  ],
};
