import type { Item } from "@/engine/types";
import { ADA_TECH, AHA_ALS, CAPNO_ED, CARDIOGENIC, FDA_BENZO, GCS40, HINKLE, KODALI, MCQUEEN, SSC2021, TRENDELENBURG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s37-11", {
      need: "RRP",
      topic: "Teaching for a new glucose sensor",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 52-year-old client with type 2 diabetes who uses insulin starts a continuous glucose monitor. The client has an MRI of the knee booked for next week. Which points should the nurse include in the teaching plan? Select all that apply.",
      rationale:
        "The sensor measures glucose in interstitial fluid, so it lags behind blood glucose when levels change fast. A fingerstick settles any reading that does not match symptoms. The sensor is removed before an MRI because the scan can damage it. Some supplements and drugs, such as high doses of vitamin C, can falsely change readings, so the care team needs to know about them. Sites are rotated. No readings are given during the warm-up, so a meter covers that time.",
      sources: [ADA_TECH],
    }),
    kind: "sata",
    options: [
      { text: "Place each new sensor in the same spot as the last", why: "Using the same site again irritates the skin. Sites are rotated." },
      { text: "Check a fingerstick when symptoms do not match the reading", why: "A blood value settles a mismatch between symptoms and the sensor." },
      { text: "Skip fingersticks while the sensor warms up", why: "The sensor gives no readings during warm-up, so a meter is needed then." },
      { text: "Expect the sensor to lag behind fast glucose changes", why: "Interstitial glucose trails blood glucose when levels rise or fall quickly." },
      { text: "Remove the sensor before the MRI scan", why: "The magnetic field can damage the sensor, so it comes off before the scan." },
      { text: "Know that the sensor reads glucose in capillary blood", why: "The sensor reads interstitial fluid under the skin, not capillary blood." },
      { text: "Tell the care team about supplements such as vitamin C", why: "High-dose vitamin C and some drugs can falsely change sensor readings." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s37-12", {
      need: "RRP",
      topic: "Fixed low SpO2 after a throat spray",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 64-year-old client had an upper endoscopy 40 minutes ago after a benzocaine spray to the throat. SpO2 was 98% before the procedure. It now reads 85% and stays there after oxygen is raised to 6 L/minute by face mask. The lips look gray-blue. The client is awake, respirations are 18/minute and breath sounds are clear. A venous blood sample looks chocolate brown. What is the most likely cause of the low SpO2?",
      rationale:
        "Benzocaine can oxidize hemoglobin to methemoglobin, which cannot carry oxygen. Methemoglobin absorbs both oximeter light wavelengths alike, so the reading settles near 85% and does not respond to oxygen. Gray-blue lips and chocolate brown blood support this. The client is awake with clear lungs and a rate of 18/minute, which argues against aspiration and oversedation. The low reading persists with high oxygen, so a poor probe signal is unlikely.",
      refs: ["In methemoglobinemia the pulse oximeter reads near 85% and does not improve with oxygen."],
      sources: [FDA_BENZO, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Methemoglobinemia from the benzocaine spray", why: "A fixed reading near 85% despite oxygen, with chocolate brown blood, fits methemoglobinemia." },
      { text: "Aspiration of secretions during the procedure", why: "Aspiration causes crackles and fast breathing. The lungs are clear and the rate is 18/minute." },
      { text: "Hypoventilation from residual sedation", why: "The client is awake with a rate of 18/minute, and oxygen would raise the SpO2 in hypoventilation." },
      { text: "Poor probe signal from cool fingers", why: "A poor signal does not explain gray-blue lips and brown blood." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s37-13", {
      version: 2,
      need: "RRP",
      topic: "Sudden capnography rise during CPR",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An intubated client in cardiac arrest has waveform capnography during CPR. For 6 minutes the end-tidal CO2 has read 12 to 16 mmHg with compressions. During the current cycle, with compressions continuing, the reading rises abruptly to 41 mmHg. What does this change most likely indicate?",
      rationale:
        "During CPR, end-tidal CO2 reflects the blood flow that compressions produce. An abrupt, sustained rise, typically to 40 mmHg or more, can signal return of spontaneous circulation, because the heart again pumps CO2 to the lungs. The team checks for a pulse at the next rhythm check. Shallower compressions and hyperventilation lower the reading. A tube in the esophagus gives almost no CO2.",
      refs: ["During CPR an end-tidal CO2 below 10 mmHg suggests poor compressions. An abrupt, sustained rise, typically to 40 mmHg or more, may indicate return of spontaneous circulation."],
      sources: [AHA_ALS],
    }),
    kind: "mc",
    options: [
      { text: "The compressions have become shallower", why: "Shallower compressions move less blood and lower end-tidal CO2." },
      { text: "The tube has moved into the esophagus", why: "A tube in the esophagus returns almost no CO2." },
      { text: "Spontaneous circulation has likely returned", why: "An abrupt rise to 41 mmHg points to the heart pumping blood again." },
      { text: "The client is being hyperventilated", why: "Fast bagging washes out CO2 and lowers the reading." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s37-14", {
      need: "PA",
      topic: "Acidosis after large saline volumes",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 58-year-old client with septic shock from pneumonia has received 6 L of 0.9% sodium chloride over 18 hours. Results are sodium 140 mEq/L (140 mmol/L), potassium 4.0 mEq/L (4.0 mmol/L), chloride 114 mEq/L (114 mmol/L) and bicarbonate 16 mEq/L (16 mmol/L). Arterial pH is 7.29 and PaCO2 is 33 mmHg. Lactate is 1.4 mmol/L. Which interpretation fits these results?",
      rationale:
        "A pH of 7.29 with a bicarbonate of 16 mEq/L is a metabolic acidosis. The PaCO2 of 33 mmHg is respiratory compensation. The anion gap is sodium minus chloride and bicarbonate, which is 10 and within the normal range. The chloride is high after 6 L of saline. A normal gap with a high chloride fits saline-induced acidosis. The normal lactate argues against lactic acidosis. Guidelines suggest balanced crystalloids partly for this reason.",
      refs: ["A normal anion gap, without potassium, is about 8 to 12 mEq/L."],
      calc: { expr: "140 - (114 + 16)", answer: 10, unit: "mEq/L", round: 0, steps: ["114 + 16 = 130", "140 - 130 = 10"] },
      canada: "Canadian laboratories report electrolytes and bicarbonate in mmol/L only. The values and the anion gap are numerically the same as in mEq/L.",
      sources: [SSC2021, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Anion gap of 10 with respiratory acidosis", why: "The PaCO2 of 33 mmHg is low, so the lungs are compensating, not causing the acidosis." },
      { text: "Anion gap of 10 with hyperchloremic acidosis", why: "A normal gap, a high chloride and a low bicarbonate after 6 L of saline fit this acidosis." },
      { text: "Anion gap of 14 with lactic acidosis", why: "Adding potassium gives 14, and the lactate of 1.4 mmol/L is normal." },
      { text: "Anion gap of 26 with ketoacidosis", why: "Leaving out bicarbonate gives 26. Nothing in the stem suggests ketosis." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s37-15", {
      version: 2,
      need: "RRP",
      topic: "Shark-fin capnography waveform",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 67-year-old client with asthma is monitored with nasal capnography in the postanesthesia care unit after a hernia repair. Over 10 minutes the waveform changes from a square shape with a flat plateau to a slow sloping upstroke with no plateau. End-tidal CO2 reads 46 mmHg. SpO2 is 93% on oxygen at 2 L/minute through the sampling cannula, respirations are 24/minute and expiratory wheezes are heard. An inhaled bronchodilator is prescribed as needed. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A sloped upstroke with no plateau, a shark-fin shape, shows slow emptying of narrowed lower airways. Wheezes in a client with asthma support bronchospasm. The prescribed inhaled bronchodilator treats the cause. A disconnected sampling line gives a flat line. Rebreathing raises the baseline. A nasal cannula is not a tube in the esophagus. More sedation would depress breathing further.",
      sources: [KODALI, CAPNO_ED, HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The new waveform shape points to {0}, so the nurse should {1}.",
    blanks: [
      {
        options: [
          { text: "rebreathing of exhaled gas", why: "Rebreathing raises the baseline above zero. It does not slope the upstroke." },
          { text: "narrowed lower airways", why: "A sloped upstroke without a plateau shows slow emptying of narrowed airways." },
          { text: "a disconnected sampling line", why: "A disconnected line gives a flat line with no waveform." },
          { text: "gas sampled from the esophagus", why: "The client has a nasal cannula and no tube, so esophageal sampling cannot occur." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "replace the sampling line", why: "The line is working, because a waveform is present." },
          { text: "give the prescribed inhaled bronchodilator", why: "A bronchodilator opens the narrowed airways that cause the shark-fin shape." },
          { text: "give the next dose of sedative", why: "Sedation would depress breathing in a client already retaining CO2." },
          { text: "stop the supplemental oxygen", why: "Removing oxygen with an SpO2 of 93% does not treat bronchospasm." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s37-16", {
      need: "PA",
      topic: "Positioning a client in hypovolemic shock",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 55-year-old client has hypovolemic shock from lower gastrointestinal bleeding. BP is 84/50 mmHg and heart rate 124/minute. The client is alert and has no spinal or head injury. Blood products are infusing through two large-bore IVs. How should the nurse position the client while the transfusion continues?",
      rationale:
        "Lying flat with the legs raised returns blood from the legs to the central circulation and does not tilt the head down. Head-down tilt raises venous pressure but does not improve BP, and it hampers breathing. Raising the head or letting the legs hang lowers venous return when volume is already low.",
      sources: [TRENDELENBURG, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Head-down tilt with the whole bed angled", why: "Head-down tilt does not raise BP in shock and pushes the abdomen against the diaphragm." },
      { text: "Semi-Fowler position with the head raised", why: "Raising the head lowers venous return when volume is already low." },
      { text: "Sitting up with the legs over the bed edge", why: "Letting the legs hang pools blood in them and worsens hypotension." },
      { text: "Flat on the back with the legs raised", why: "Raising the legs shifts blood toward the heart without tilting the head down." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s37-17", {
      version: 2,
      need: "RRP",
      topic: "Hidden decline in Glasgow Coma Scale parts",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 46-year-old client is admitted with a brain contusion after a fall from a ladder. The nurse reviews the Glasgow Coma Scale components on the neurologic flow sheet. Based on the trend, which conclusion should the nurse draw?",
      tabs: [
        {
          title: "Neurologic Checks",
          table: {
            head: ["Time", "2000", "2200", "0000"],
            rows: [
              ["Eye opening", "2 (to pressure)", "3 (to sound)", "4 (spontaneous)"],
              ["Verbal response", "4 (confused)", "4 (confused)", "4 (confused)"],
              ["Best motor response", "6 (obeys commands)", "5 (localizes pain)", "4 (normal flexion)"],
              ["Total score", "12", "12", "12"],
              ["Pupils", "3 mm, brisk, equal", "3 mm, brisk, equal", "3 mm, brisk, equal"],
            ],
          },
        },
      ],
      rationale:
        "The total stays at 12 because the eye score rose while the motor score fell. The best motor response dropped from 6 to 5 to 4, so the client no longer obeys commands and now only flexes to pain. A falling motor score is a sign of worsening brain function. The components are tracked separately for this reason, because the total can hide a decline. The nurse reports the change now.",
      sources: [GCS40, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "The falling motor score needs an urgent report", why: "Motor response fell from obeying to flexion, which signals neurologic decline." },
      { text: "The client is stable because the total is unchanged", why: "An unchanged total of 12 hides a falling motor score." },
      { text: "The client is improving because eye opening is better", why: "Better eye opening does not offset a falling motor response." },
      { text: "The changes reflect normal sleep during the night", why: "The best motor response to a stimulus does not fall to flexion in normal sleep." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s37-18", {
      version: 2,
      need: "PA",
      topic: "Prescriptions to question in pump failure shock",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 68-year-old client is on day 1 after an anterior myocardial infarction. BP is 82/58 mmHg, heart rate 112/minute and SpO2 89% on 4 L/minute by nasal cannula. Crackles are heard to the mid-lung fields and the neck veins are distended. Urine output was 15 mL in the past hour. Which two prescriptions should the nurse clarify with the provider? Select two.",
      rationale:
        "Low BP with crackles to the mid-lung fields, distended neck veins and low urine output after a large infarction fit cardiogenic shock with congestion. A rapid 1000 mL bolus adds volume to lungs that are already wet. Lying flat with the legs raised also returns more blood to a failing ventricle and worsens breathing. A vasopressor, a lactate level, more oxygen, a urinary catheter and early revascularization all fit current care.",
      sources: [CARDIOGENIC, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Draw a serum lactate level", why: "Lactate tracks tissue perfusion in shock and guides treatment." },
      { text: "Infuse 0.9% sodium chloride 1000 mL over 30 minutes", why: "A large bolus worsens pulmonary congestion in a client with crackles and distended neck veins." },
      { text: "Place the client flat with the legs raised", why: "Lying flat with legs raised loads the failing heart and worsens breathing." },
      { text: "Titrate norepinephrine to a MAP of 65 mmHg", why: "Norepinephrine is a suitable first vasopressor in cardiogenic shock." },
      { text: "Insert an indwelling urinary catheter", why: "Hourly urine output tracks kidney perfusion in shock." },
      { text: "Raise the oxygen to correct the SpO2", why: "An SpO2 of 89% needs more oxygen." },
      { text: "Prepare for transfer to the catheterization laboratory", why: "Early revascularization is the main treatment for shock after infarction." },
    ],
    correct: [1, 2],
  },
  {
    ...meta("rn-s37-19", {
      need: "RRP",
      topic: "Differential pressure in a leg compartment",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 28-year-old client with a closed tibial fracture has continuous anterior compartment pressure monitoring. BP is 128/76 mmHg. The compartment pressure reads 52 mmHg. The surgeon's protocol calls for fasciotomy when the diastolic BP minus the compartment pressure is less than 30 mmHg. Which finding should the nurse report?",
      rationale:
        "The differential pressure is the diastolic BP minus the compartment pressure. Here 76 minus 52 gives 24 mmHg. This is below the protocol threshold of 30 mmHg, so blood flow into the compartment is at risk and the surgeon is notified for fasciotomy. Using the systolic BP or the raw compartment pressure gives a false sense of safety or misses the threshold.",
      calc: { expr: "76 - 52", answer: 24, unit: "mmHg", round: 0, steps: ["76 - 52 = 24"] },
      sources: [MCQUEEN],
    }),
    kind: "mc",
    options: [
      { text: "24 mmHg, which meets the protocol for fasciotomy", why: "76 minus 52 is 24 mmHg, which is below 30 mmHg." },
      { text: "41 mmHg, which is above the protocol threshold", why: "This uses the mean arterial pressure. The protocol uses the diastolic BP." },
      { text: "52 mmHg, which is the reading the protocol uses", why: "The protocol uses the difference from the diastolic BP, not the raw reading." },
      { text: "76 mmHg, which is well above the threshold", why: "This subtracts the compartment pressure from the systolic BP of 128 mmHg." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s37-20", {
      need: "PA",
      topic: "Removing a line that is the sepsis source",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 59-year-old client who receives home parenteral nutrition through a PICC arrives with septic shock. The PICC exit site is red and draining pus. A peripheral IV and a new internal jugular central line now work well. Blood cultures from the PICC and a vein have been drawn, and antibiotics are infusing. Which measure should the nurse anticipate next for source control?",
      rationale:
        "The red exit site draining pus makes the PICC a likely source of the sepsis. Other vascular access now works, so the infected device can come out. Prompt removal of a device that may be the source is part of source control in septic shock. A chlorhexidine dressing, a heparin flush or an antibiotic lock leaves the infected catheter in place.",
      sources: [SSC2021],
    }),
    kind: "mc",
    options: [
      { text: "Flush the PICC with heparin and keep using it", why: "Flushing does not treat an infected catheter and leaves the source in place." },
      { text: "Remove the PICC now that other access works", why: "Removing an infected device that may be the source is part of source control." },
      { text: "Lock the PICC with an antibiotic solution", why: "An antibiotic lock keeps an infected line in a client in septic shock with pus at the site." },
      { text: "Apply a chlorhexidine dressing over the PICC site", why: "A dressing protects a clean site. It does not remove an established source." },
    ],
    correct: 1,
  },
];
