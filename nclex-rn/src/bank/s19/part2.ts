import type { Item } from "@/engine/types";
import { ACR_CONTRAST, ASPEN_EN, FDA_OX, HINKLE, ISPD, KDIGO_AKI, KDOQI_VA, KLIGFIELD, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s19-11", {
      topic: "Disconnected chest drain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a right chest tube to water seal drainage after lung surgery. As the client turns, the tubing pulls apart from the drainage unit and the connector falls to the floor. What should the nurse do first?",
      rationale:
        "An open chest tube lets air enter the pleural space and can collapse the lung. The nurse places the tube end 2 to 4 cm into a bottle of sterile water. This makes a temporary water seal. The nurse then sets up a new drainage unit and assesses breathing. Long clamping risks a tension pneumothorax.",
      refs: ["If chest tubing disconnects, the end is submerged 2 to 4 cm in sterile water until a new drainage system is connected."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Place the tube end in sterile water", why: "Submerging the end 2 to 4 cm makes a temporary water seal while a new unit is set up." },
      { text: "Tape an occlusive dressing over the site", why: "The tube is still in the chest. Sealing the skin does not close the open tube." },
      { text: "Clamp the tube and leave it until morning", why: "Prolonged clamping traps air and can cause a tension pneumothorax." },
      { text: "Raise the drainage unit above the chest", why: "The tube is no longer attached to the unit. Moving the unit does not seal the open tube." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-12", {
      topic: "Confirming nasogastric tube position",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse inserts a nasogastric tube for decompression in a client with a small bowel obstruction. Which actions should the nurse take to confirm and keep track of the tube's position? Select all that apply.",
      rationale:
        "An x-ray is the most reliable way to confirm where a blindly placed tube lies. Gastric aspirate with a pH of 5 or less supports gastric placement. Marking the tube at the nostril lets the nurse see later movement. The sound of injected air and bubbling in water do not reliably tell the stomach from the airway or esophagus. Water flushed before testing raises the aspirate pH.",
      refs: ["A gastric aspirate pH of 5 or less supports, but does not prove, gastric placement of a nasogastric tube."],
      sources: [ASPEN_EN, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Listen over the stomach while injecting air", why: "Air sounds can be heard even when the tube lies in the lung or esophagus." },
      { text: "Confirm with the prescribed x-ray", why: "An x-ray shows the full length of the tube and is the most reliable check." },
      { text: "Place the tube end in a cup of water", why: "Bubbling in water does not reliably tell the airway from the stomach." },
      { text: "Test the aspirate for a pH of 5 or less", why: "Acidic aspirate supports placement in the stomach." },
      { text: "Flush with 30 mL of water before testing pH", why: "Water flushed first dilutes the aspirate and raises the pH reading." },
      { text: "Mark the tube where it leaves the nostril", why: "A mark at the nostril shows if the tube moves later." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s19-13", {
      topic: "Wound evisceration",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "On day 5 after an open colectomy, a client with obesity coughs and says, \"Something just gave way.\" The nurse sees loops of bowel through the separated incision. Which action should the nurse take first?",
      rationale:
        "Bowel seen through a separated incision is evisceration. The nurse stays with the client and covers the bowel with sterile gauze moistened with sterile saline. This keeps the tissue moist and protected. The client lies in low Fowler position with knees bent to reduce tension. The nurse then calls the surgeon. The nurse does not try to replace the bowel.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Ease the bowel gently back into the abdomen", why: "Replacing the bowel risks injury and contamination. The surgeon manages the wound." },
      { text: "Apply dry sterile gauze and tape", why: "Dry gauze sticks to the bowel and dries the tissue." },
      { text: "Cover the bowel with sterile saline gauze", why: "Moist sterile dressings protect the exposed bowel and keep it from drying." },
      { text: "Help the client sit upright in a chair", why: "Sitting upright raises abdominal pressure. Low Fowler position with knees bent eases tension." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-14", {
      topic: "Kidney function after contrast",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 72-year-old client had a coronary angiogram with iodinated contrast on day 1. The nurse reviews the flow sheet on day 3. Based on the trend, which complication is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Result", "Day 1 0600", "Day 2 0600", "Day 3 0600"],
            rows: [
              ["Serum creatinine", "1.0 mg/dL (88 micromol/L)", "1.5 mg/dL (133 micromol/L)", "2.1 mg/dL (186 micromol/L)"],
              ["Urine output (mL/24 hours)", "1600", "900", "550"],
              ["Serum potassium (mEq/L)", "4.2", "4.8", "5.3"],
              ["BP (mmHg)", "132/78", "136/80", "138/82"],
            ],
          },
        },
      ],
      rationale:
        "Over 2 days the creatinine rises from 1.0 to 2.1 mg/dL. Daily urine output falls from 1600 to 550 mL, and potassium climbs from 4.2 to 5.3 mEq/L. A creatinine rise of 0.3 mg/dL within 48 hours, or to 1.5 times baseline, defines acute kidney injury. Iodinated contrast given on day 1 is a likely cause. A stable BP argues against bleeding.",
      refs: ["Acute kidney injury is a creatinine rise of at least 0.3 mg/dL (27 micromol/L) within 48 hours, or to 1.5 times baseline within 7 days."],
      canada: "Canadian labs report creatinine in micromol/L and potassium in mmol/L only. A Canadian nurse would read a creatinine rise from 88 to 186 micromol/L and a potassium of 5.3 mmol/L.",
      sources: [KDIGO_AKI, ACR_CONTRAST, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Retroperitoneal bleeding", why: "Bleeding would lower the BP and raise the heart rate. The BP here is stable." },
      { text: "Low potassium from diuresis", why: "Potassium is rising, from 4.2 to 5.3 mEq/L, and urine output is falling." },
      { text: "Expected effect of the contrast", why: "A doubling of creatinine is not an expected effect. It meets the definition of acute kidney injury." },
      { text: "Acute kidney injury", why: "Rising creatinine and potassium with falling urine output after contrast fit acute kidney injury." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-15", {
      topic: "Hip precautions after arthroplasty",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client had a right total hip arthroplasty through a posterior approach 2 days ago. The nurse reviews hip precautions with the client. Which client statement shows understanding?",
      rationale:
        "After a posterior approach, the hip is most likely to dislocate with flexion past 90 degrees, adduction or internal rotation. A pillow between the knees keeps the leg abducted. Crossing the legs, a low toilet seat and bending to put on shoes all move the hip toward dislocation.",
      refs: ["After posterior approach hip arthroplasty, clients avoid hip flexion past 90 degrees, adduction across the midline and internal rotation."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I can cross my legs when I sit in my chair.\"", why: "Crossing the legs adducts the hip and can cause dislocation." },
      { text: "\"I will use a low toilet seat at home.\"", why: "A low seat flexes the hip past 90 degrees. A raised seat is used." },
      { text: "\"I will keep a pillow between my knees.\"", why: "A pillow between the knees keeps the leg from crossing the midline." },
      { text: "\"I can bend down to put on my shoes.\"", why: "Bending forward flexes the hip past 90 degrees and risks dislocation." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-16", {
      topic: "Protecting a dialysis fistula",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with end-stage kidney disease has a new arteriovenous fistula in the left forearm for hemodialysis. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "An arteriovenous fistula needs steady flow to stay open. The nurse checks for a thrill and a bruit, because loss of either suggests clotting. BP cuffs, blood draws and IV lines go on the other arm. Pressure from a tight dressing or from sleeping on the arm can slow flow and cause clotting.",
      sources: [KDOQI_VA, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Draw routine blood samples from the left arm", why: "Venipuncture in the access arm can damage the vessel and cause clotting." },
      { text: "Take BP readings on the right arm", why: "A BP cuff on the access arm compresses the fistula. The other arm is used." },
      { text: "Keep a snug pressure dressing on the fistula", why: "Steady pressure on the fistula can slow flow and cause clotting." },
      { text: "Feel for a thrill over the fistula", why: "A thrill shows blood flowing through the fistula." },
      { text: "Start an IV line in the left hand", why: "An IV in the access arm risks damage and clotting of the fistula." },
      { text: "Listen for a bruit over the fistula", why: "A bruit confirms flow. Its loss suggests clotting." },
      { text: "Teach the client not to sleep on the left arm", why: "Lying on the access arm compresses the fistula and can slow flow." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s19-17", {
      topic: "Cloudy peritoneal dialysis fluid",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client on continuous ambulatory peritoneal dialysis calls the clinic. The drained fluid looks cloudy this morning and the abdomen feels tender. Temperature is 38.2°C (100.8°F). Which interpretation should the nurse make?",
      rationale:
        "Cloudy effluent with abdominal tenderness and a temperature of 38.2°C in a client on peritoneal dialysis is presumed peritonitis. The client brings a bag of effluent for cell count, Gram stain and culture. Treatment starts without delay. A long dwell or fluid overload does not cause cloudy fluid with fever.",
      sources: [ISPD],
    }),
    kind: "mc",
    options: [
      { text: "Probable peritonitis needing effluent tests", why: "Cloudy effluent with tenderness and fever is presumed peritonitis until tests exclude it." },
      { text: "Normal change from a long overnight dwell", why: "A long dwell does not make effluent cloudy or cause fever and tenderness." },
      { text: "Harmless fibrin that needs no follow-up", why: "Fibrin can appear, but fever and tenderness with cloudy fluid point to infection." },
      { text: "Fluid overload from poor ultrafiltration", why: "Fluid overload shows as edema and weight gain, not cloudy fluid and fever." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-18", {
      topic: "Blood gas after an opioid dose",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client who had abdominal surgery this morning received IV hydromorphone 30 minutes ago. The client is drowsy with respirations of 8/minute. Arterial blood gas results are pH 7.29, PaCO2 58 mmHg and HCO3 25 mEq/L. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The pH of 7.29 is below the normal range of 7.35 to 7.45, so the client has acidosis. The PaCO2 of 58 mmHg is above 45 mmHg, which makes the cause respiratory. The HCO3 of 25 mEq/L is normal, so there is no compensation yet. Respirations of 8/minute after IV hydromorphone point to opioid-related hypoventilation.",
      refs: ["Normal arterial values: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L."],
      canada: "Canadian labs report HCO3 in mmol/L, which gives the same number as mEq/L. PaCO2 stays in mmHg, so the results read PaCO2 58 mmHg and HCO3 25 mmol/L.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The results show {0}, and the most likely cause is {1}.",
    blanks: [
      {
        options: [
          { text: "uncompensated metabolic acidosis", why: "Metabolic acidosis would show a low HCO3. The HCO3 here is 25 mEq/L." },
          { text: "compensated respiratory alkalosis", why: "A pH of 7.29 is acidotic, not alkalotic." },
          { text: "uncompensated respiratory acidosis", why: "A low pH with a PaCO2 of 58 mmHg and a normal HCO3 is uncompensated respiratory acidosis." },
          { text: "partly compensated metabolic alkalosis", why: "The pH of 7.29 is acidotic, so no form of alkalosis fits." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "opioid-related hypoventilation", why: "Respirations of 8/minute after an opioid retain carbon dioxide." },
          { text: "anxiety-related hyperventilation", why: "Hyperventilation lowers the PaCO2. The PaCO2 here is high." },
          { text: "loss of gastric acid", why: "Loss of gastric acid causes metabolic alkalosis with a high HCO3." },
          { text: "diabetic ketoacidosis", why: "Ketoacidosis lowers the HCO3. The HCO3 here is normal." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s19-19", {
      topic: "Chest lead placement for an ECG",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse places electrodes to record a 12-lead ECG on an adult client. Where should the nurse place the V1 electrode?",
      rationale:
        "V1 goes in the fourth intercostal space just right of the sternum. V2 mirrors it on the left. V4 sits in the fifth intercostal space at the left midclavicular line. V6 sits level with V4 in the left midaxillary line. Misplaced chest electrodes change the waveforms and can mimic or hide ischemia.",
      sources: [KLIGFIELD],
    }),
    kind: "mc",
    options: [
      { text: "Fourth intercostal space, left sternal border", why: "This is the V2 position." },
      { text: "Fourth intercostal space, right sternal border", why: "V1 sits in the fourth intercostal space at the right edge of the sternum." },
      { text: "Fifth intercostal space, left midclavicular line", why: "This is the V4 position." },
      { text: "Fifth intercostal space, left midaxillary line", why: "This is close to the V6 position, level with V4." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-20", {
      topic: "Limits of pulse oximetry",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews pulse oximetry readings for several clients on a medical unit. Which factors can make an SpO2 reading inaccurate? Select all that apply.",
      rationale:
        "Pulse oximeters read light passing through tissue. Dark nail polish and poor circulation in cold hands weaken or distort the signal. Carbon monoxide binds hemoglobin and reads as oxygenated hemoglobin, so the SpO2 can look normal. Oximeters can overestimate saturation in people with darker skin. The nurse confirms doubtful readings with an arterial blood gas.",
      sources: [FDA_OX, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Lying still in bed during the reading", why: "Stillness reduces motion artifact and helps accuracy." },
      { text: "Cold hands with poor circulation", why: "Poor perfusion weakens the pulse signal the device reads." },
      { text: "Hemoglobin of 14 g/dL (140 g/L)", why: "A normal hemoglobin does not distort the reading." },
      { text: "Dark nail polish on the probe finger", why: "Dark polish absorbs light and can give a false reading." },
      { text: "Darker skin pigmentation", why: "Pulse oximeters can overestimate saturation in people with darker skin." },
      { text: "Oxygen by nasal cannula at 2 L/minute", why: "Supplemental oxygen changes the true saturation, not the accuracy of the reading." },
      { text: "Recent carbon monoxide exposure", why: "Carboxyhemoglobin reads as oxygenated hemoglobin, so SpO2 can look normal." },
    ],
    correct: [1, 3, 4, 6],
  },
];
