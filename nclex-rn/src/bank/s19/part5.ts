import type { Item } from "@/engine/types";
import { ASH_VTE, AWHONN, CDIFF, HINKLE, MH, SSC, TRACH, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s19-41", {
      topic: "Rigidity and rising CO2 under anesthesia",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "During a laparoscopic appendectomy under sevoflurane anesthesia, a 22-year-old client develops jaw and generalized muscle rigidity. End-tidal CO2 rises from 38 to 72 mmHg despite increased ventilation. Heart rate is 142/minute and temperature is 39.4°C (102.9°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Muscle rigidity and a rise in end-tidal CO2 from 38 to 72 mmHg despite more ventilation during a volatile anesthetic point to malignant hyperthermia. Tachycardia and a temperature of 39.4°C follow as metabolism races. The team stops the trigger and gives IV dantrolene. End-tidal CO2 shows the response. Potassium is watched because muscle breakdown releases it.",
      sources: [MH],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Sepsis from a ruptured appendix", why: "Sepsis does not cause muscle rigidity or a sudden rise in end-tidal CO2 despite more ventilation." },
      { text: "Thyroid storm", why: "Thyroid storm causes fever and tachycardia but not rigidity or a sudden CO2 rise under anesthetic gas." },
      { text: "Malignant hyperthermia", why: "Rigidity and a rapid rise in end-tidal CO2 during a volatile anesthetic fit this hypermetabolic reaction." },
      { text: "Neuroleptic malignant syndrome", why: "This syndrome follows antipsychotic drugs and develops over days, not minutes during anesthesia." },
    ],
    actions: [
      { text: "Stop the volatile anesthetic", why: "The trigger is stopped at once." },
      { text: "Warm the client with blankets", why: "The client is hyperthermic and needs active cooling." },
      { text: "Give succinylcholine for rigidity", why: "Succinylcholine is itself a trigger for this reaction." },
      { text: "Lower the ventilation rate", why: "Ventilation is increased with high-flow oxygen to clear excess CO2." },
      { text: "Give IV dantrolene", why: "Dantrolene blocks calcium release in muscle and stops the reaction." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase does not guide treatment of this reaction." },
      { text: "End-tidal CO2", why: "End-tidal CO2 tracks the hypermetabolic state and the response to treatment." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose and does not guide acute care." },
      { text: "Serum albumin level", why: "Albumin does not guide acute treatment of this reaction." },
      { text: "Potassium level", why: "Muscle breakdown releases potassium and can cause dysrhythmias." },
    ],
    correct: { condition: 2, actions: [0, 4], parameters: [1, 4] },
  },
  {
    ...meta("rn-s19-42", {
      topic: "Acid-base risk with gastric suction",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client has had a nasogastric tube to continuous low suction for 4 days after bowel surgery. Drainage has been 1200 to 1500 mL each day. Today the client reports tingling fingers and muscle cramps. Results are pH 7.51, HCO3 34 mEq/L, PaCO2 46 mmHg and potassium 3.1 mEq/L. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Days of nasogastric suction remove large amounts of gastric acid. The pH of 7.51 shows alkalemia. The HCO3 of 34 mEq/L is above 26 mEq/L, which makes the process metabolic. The PaCO2 of 46 mmHg reflects the lungs retaining CO2 to compensate. A potassium of 3.1 mEq/L and tingling fingers often accompany metabolic alkalosis.",
      refs: ["Normal arterial values: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L."],
      canada: "Canadian labs report HCO3 and potassium in mmol/L only, with the same numbers as mEq/L. The results read HCO3 34 mmol/L and potassium 3.1 mmol/L, with PaCO2 still in mmHg.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is most at risk for {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "metabolic acidosis", why: "Metabolic acidosis would lower the HCO3. The HCO3 is 34 mEq/L." },
          { text: "respiratory acidosis", why: "Respiratory acidosis needs a low pH. The pH is 7.51." },
          { text: "metabolic alkalosis", why: "Loss of gastric acid through suction raises the HCO3 and the pH." },
          { text: "respiratory alkalosis", why: "Respiratory alkalosis needs a low PaCO2. The PaCO2 is 46 mmHg." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "a PaCO2 of 46 mmHg", why: "A slightly high PaCO2 reflects respiratory compensation, not the primary problem." },
          { text: "an HCO3 of 34 mEq/L", why: "A high HCO3 with a high pH shows a metabolic alkalosis." },
          { text: "the recent bowel surgery", why: "Surgery alone does not explain the high pH and HCO3." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s19-43", {
      topic: "Late decelerations during oxytocin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client in labor is receiving an oxytocin infusion. Contractions occur every 2 minutes and last 90 seconds. The fetal heart rate tracing shows late decelerations with the last four contractions. Which action should the nurse take first?",
      rationale:
        "Contractions every 2 minutes with late decelerations point to reduced placental blood flow made worse by oxytocin. The nurse stops the oxytocin first. The nurse then turns the client to her side, gives an IV fluid bolus if prescribed and notifies the provider. Late decelerations reflect reduced oxygen to the fetus during contractions.",
      sources: [AWHONN],
    }),
    kind: "mc",
    options: [
      { text: "Stop the oxytocin infusion", why: "Stopping oxytocin reduces contraction frequency and lets the placenta reperfuse." },
      { text: "Increase the oxytocin rate", why: "More oxytocin would increase contractions and worsen fetal hypoxia." },
      { text: "Help the client lie supine", why: "The supine position compresses the vena cava and lowers placental flow. A side-lying position is used." },
      { text: "Recheck the tracing in 30 minutes", why: "Recurrent late decelerations need action now, not a delayed review." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-44", {
      topic: "Preventing clots after abdominal surgery",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 70-year-old client is on day 1 after an open colectomy. Which actions should the nurse include to lower the risk of venous thromboembolism? Select all that apply.",
      rationale:
        "Major abdominal surgery in an older adult raises the risk of venous thromboembolism. Mechanical compression, early walking and leg exercises keep venous blood moving. Prescribed anticoagulant prophylaxis lowers clot formation. Pillows under the knees slow venous return. Calf massage can dislodge a clot. Limiting fluids concentrates the blood.",
      sources: [ASH_VTE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Place a pillow under the knees", why: "Pressure behind the knees slows venous return." },
      { text: "Apply intermittent pneumatic compression", why: "Compression devices push venous blood out of the legs." },
      { text: "Massage the calves to improve circulation", why: "Calf massage can dislodge an existing clot." },
      { text: "Help the client walk as soon as allowed", why: "Early walking uses the calf muscle pump to move venous blood." },
      { text: "Limit oral fluids to reduce leg edema", why: "Dehydration raises blood viscosity and clot risk." },
      { text: "Teach ankle pumps and leg exercises", why: "Leg exercises move blood out of the deep veins." },
      { text: "Give the prescribed enoxaparin", why: "Anticoagulant prophylaxis lowers the risk of clot formation after major surgery." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s19-45", {
      topic: "Stool sample for C. difficile",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on day 6 of IV antibiotics for pneumonia has had four unformed stools in the past 24 hours. The primary health care provider prescribes a stool test for Clostridioides difficile. Which action should the nurse take?",
      rationale:
        "Four unformed stools in 24 hours during antibiotic therapy fit the testing criteria. The lab tests only unformed stool, which takes the shape of the container. One sample is enough. Repeat tests during the same episode are not advised. The nurse also starts contact precautions while results are pending.",
      refs: ["Testing for Clostridioides difficile is limited to unformed stool in clients with 3 or more unformed stools in 24 hours. Repeat testing within 7 days of the same episode is not advised."],
      sources: [CDIFF],
    }),
    kind: "mc",
    options: [
      { text: "Collect the next stool even if it is formed", why: "Formed stool is not tested because it does not suggest infection." },
      { text: "Send samples on three separate days", why: "Repeat testing during the same episode is not advised." },
      { text: "Wait until the antibiotic course ends", why: "Testing is done now, while the diarrhea is present." },
      { text: "Send a fresh sample of unformed stool", why: "Only unformed stool that takes the shape of the container is tested." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-46", {
      topic: "Bedside equipment for a new tracheostomy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client returns to the unit with a new surgical tracheostomy. Which items should the nurse keep at the bedside? Select all that apply.",
      rationale:
        "A new tracheostomy tract is not yet formed, and a dislodged tube can be hard to replace. The obturator guides reinsertion. A spare tube of the same size, and one a size smaller, allow quick replacement if the stoma narrows. Suction clears secretions from the tube. A nasal cannula and an oral airway do not serve an airway that bypasses the nose and mouth.",
      sources: [TRACH, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Oral airway for the upper airway", why: "An oral airway does not help when the tracheostomy bypasses the upper airway." },
      { text: "Obturator for the current tube", why: "The obturator guides the tube back in if it comes out." },
      { text: "Nasal cannula for supplemental oxygen", why: "Oxygen goes to the stoma by trach collar or bag. A nasal cannula bypasses the airway in use." },
      { text: "Spare tube of the same size", why: "A same-size spare allows quick replacement if the tube dislodges." },
      { text: "Working suction with catheters", why: "Suction clears secretions that can block the tube." },
      { text: "Spare tube one size smaller", why: "A smaller tube can pass if the new stoma narrows." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s19-47", {
      topic: "Early signs of a leak after gastric bypass",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 20 hours past a laparoscopic Roux-en-Y gastric bypass. Which two findings should the nurse report to the surgeon at once? Select two.",
      rationale:
        "An anastomotic leak is a serious early complication of gastric bypass. A heart rate that climbs from 92 to 126/minute is often the first sign. New left shoulder pain and restlessness can reflect leaked fluid irritating the diaphragm. A sore throat, moderate incision pain, tolerated sips and regular spirometer use are expected.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Sore throat from the breathing tube", why: "A sore throat after intubation is expected." },
      { text: "Heart rate 126/minute, was 92/minute", why: "A rising heart rate is often the first sign of an anastomotic leak." },
      { text: "Incision pain 4 of 10 using the PCA", why: "Moderate pain controlled with the PCA is expected on the first day." },
      { text: "Tolerating small sips of clear water", why: "Tolerating sips is an expected step after bypass surgery." },
      { text: "Left shoulder pain and restlessness", why: "Referred shoulder pain and restlessness can signal a leak irritating the diaphragm." },
      { text: "Uses the spirometer 10 times an hour", why: "Regular spirometer use is expected and helps prevent atelectasis." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s19-48", {
      topic: "Shoulder pain after laparoscopy",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "A client is going home on the evening of a laparoscopic cholecystectomy. The client says, \"My right shoulder aches, but my incisions feel fine.\" Which response by the nurse is best?",
      rationale:
        "Carbon dioxide inflates the abdomen during laparoscopy. Gas left under the diaphragm irritates it and refers pain to the shoulder. The ache usually eases within a few days. Walking and position changes help the gas absorb. The nurse still teaches the client to report fever, jaundice or worsening abdominal pain.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"Shoulder pain means a bile leak, so you should stay.\"", why: "A bile leak brings abdominal pain, fever or jaundice. Shoulder pain alone after laparoscopy is usually from gas." },
      { text: "\"The gas used in surgery can cause this. Walking helps.\"", why: "Carbon dioxide irritates the diaphragm and refers pain to the shoulder. Walking helps it absorb." },
      { text: "\"Put ice on the shoulder and rest it in a sling.\"", why: "The pain is referred from the diaphragm, so a sling does not help." },
      { text: "\"You likely strained the shoulder getting into bed.\"", why: "Referred pain from retained gas is the likely cause, not a muscle strain." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-49", {
      topic: "First step in suspected sepsis",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with a urinary catheter has a temperature of 39.0°C (102.2°F), heart rate 118/minute and BP 92/54 mmHg. Blood cultures, a lactate level, IV fluids and IV piperacillin-tazobactam are prescribed. The IV line is in place. Which action should the nurse take first?",
      rationale:
        "Fever, a heart rate of 118/minute and a BP of 92/54 mmHg in a client with a urinary catheter suggest sepsis. Blood cultures are drawn first, because antibiotics given before cultures can hide the organism. Drawing them takes minutes and does not delay treatment. The antibiotic then starts without delay. Fluids are not held for the lactate result.",
      refs: ["In suspected sepsis, cultures are drawn before antimicrobials when this causes no substantial delay. Antimicrobials then start without delay."],
      sources: [SSC],
    }),
    kind: "mc",
    options: [
      { text: "Start the IV antibiotic infusion", why: "Antibiotics given before cultures can hide the organism. Cultures come first when they cause no real delay." },
      { text: "Wait for the lactate before giving fluids", why: "Treatment does not wait for the lactate result." },
      { text: "Draw the blood cultures", why: "Cultures drawn before the first antibiotic dose give the best chance of finding the organism." },
      { text: "Give acetaminophen and recheck in 1 hour", why: "Treating the fever does not address suspected sepsis, which needs cultures and antibiotics without delay." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-50", {
      topic: "Preparing for paracentesis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with cirrhosis and tense ascites is scheduled for a paracentesis at the bedside. The consent form is signed. Which action should the nurse take just before the procedure?",
      rationale:
        "The needle for paracentesis enters the lower abdomen. A full bladder sits in its path and can be punctured, so the client voids just before the procedure. The client sits upright or in high Fowler position so fluid collects low in the abdomen. The nurse records weight and vital signs before and after.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Place the client flat in a supine position", why: "The client sits upright or in high Fowler position so fluid pools low in the abdomen." },
      { text: "Insert a nasogastric tube to decompress", why: "Paracentesis drains the peritoneal space. The stomach does not need decompression." },
      { text: "Shave the abdomen at the puncture site", why: "Hair removal is not routine. If needed, clippers are used, not a razor." },
      { text: "Have the client empty the bladder", why: "An empty bladder lowers the risk of puncturing it with the needle." },
    ],
    correct: 3,
  },
];
