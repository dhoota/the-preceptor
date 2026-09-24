import type { Item } from "@/engine/types";
import { AABB, ADA_FOOT, ASNC, GORNIK, GOULD_CAUTI, GULATI, HINKLE, JARVIS, PAGANA, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s20-11", {
      topic: "Care after a kidney biopsy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a percutaneous needle biopsy of the left kidney 1 hour ago. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "The kidney is highly vascular, so bleeding is the main risk after a needle biopsy. Bed rest as prescribed lets the puncture seal. Each urine sample is checked for blood. Pulse and BP are checked on schedule to detect hidden bleeding. New flank pain can signal a hematoma. Early walking, heat and ibuprofen all raise bleeding risk.",
      sources: [HINKLE, PAGANA],
    }),
    kind: "sata",
    options: [
      { text: "Keep the client on bed rest as prescribed", why: "Bed rest limits movement while the puncture in the kidney seals." },
      { text: "Encourage walking to the bathroom now", why: "Early walking in the first hours raises the risk of bleeding from the site." },
      { text: "Check each urine sample for blood", why: "Gross blood in the urine can signal bleeding from the biopsy tract." },
      { text: "Apply a heating pad to the left flank", why: "Heat dilates vessels and can increase bleeding at the site." },
      { text: "Check pulse and BP on a set schedule", why: "A rising pulse and falling BP can signal hidden bleeding." },
      { text: "Report new or worsening flank pain", why: "New flank pain can signal a hematoma around the kidney." },
      { text: "Give ibuprofen for pain at the site", why: "Ibuprofen impairs platelet function and can harm kidney blood flow." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s20-12", {
      topic: "Caffeine before a vasodilator stress test",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A client is scheduled for a nuclear stress test with regadenoson at 0800 tomorrow. At 1600 today the client asks which drink is allowed this evening. Which drink should the nurse advise?",
      rationale:
        "Regadenoson acts on adenosine receptors. Caffeine blocks those receptors and can cause a false negative test. Caffeine is avoided for at least 12 hours before the test. Decaffeinated coffee, cola and cocoa all contain caffeine. Apple juice contains none, so it is a safe choice.",
      refs: ["Caffeine is avoided for at least 12 hours before vasodilator stress testing. Decaffeinated coffee still contains some caffeine."],
      sources: [ASNC],
    }),
    kind: "mc",
    options: [
      { text: "Decaffeinated coffee", why: "Decaffeinated coffee still contains a small amount of caffeine." },
      { text: "Cola soft drink", why: "Cola contains caffeine, which blocks the effect of regadenoson." },
      { text: "Hot cocoa", why: "Cocoa contains caffeine and related methylxanthines." },
      { text: "Apple juice", why: "Apple juice contains no caffeine, so it does not affect the test." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-13", {
      topic: "Urinalysis findings in a bladder infection",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 34-year-old client reports burning on urination and urinary frequency for 2 days. The nurse reviews the urinalysis report. Click to highlight the findings that support a urinary tract infection.",
      rationale:
        "Nitrite forms when bacteria convert nitrate in the urine. Leukocyte esterase comes from white cells. White cells of 45/HPF and many bacteria show infection in the urinary tract. Pus and bacteria make the urine cloudy. Specific gravity 1.018, pH 6.0 and red cells 2/HPF are within normal limits. Glucose and protein are absent.",
      refs: ["Normal urinalysis: specific gravity 1.005 to 1.030, pH 4.6 to 8.0, red cells 2/HPF or fewer, nitrite negative, leukocyte esterase negative."],
      sources: [PAGANA],
    }),
    kind: "highlight",
    passage:
      "[[Appearance cloudy.]] [[Specific gravity 1.018.]] [[pH 6.0.]] [[Glucose negative.]] [[Protein negative.]] [[Nitrite positive.]] [[Leukocyte esterase positive.]] [[White cells 45/HPF.]] [[Red cells 2/HPF.]] [[Bacteria many.]]",
    spans: [
      { text: "Appearance cloudy.", why: "Cloudy urine can come from white cells and bacteria in infection." },
      { text: "Specific gravity 1.018.", why: "1.018 is within the normal range of 1.005 to 1.030." },
      { text: "pH 6.0.", why: "A pH of 6.0 is within the normal range." },
      { text: "Glucose negative.", why: "Glucose is normally absent from urine." },
      { text: "Protein negative.", why: "Protein is normally absent from urine." },
      { text: "Nitrite positive.", why: "Many urinary bacteria convert nitrate to nitrite." },
      { text: "Leukocyte esterase positive.", why: "This enzyme comes from white cells responding to infection." },
      { text: "White cells 45/HPF.", why: "45 white cells per field shows an inflammatory response in the tract." },
      { text: "Red cells 2/HPF.", why: "2 red cells per field is within normal limits." },
      { text: "Bacteria many.", why: "Many bacteria with symptoms support infection." },
    ],
    correct: [0, 5, 6, 7, 9],
  },
  {
    ...meta("rn-s20-14", {
      topic: "Laboratory result to report first after surgery",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews morning laboratory results for four clients on a surgical unit. Which result should the nurse report to the primary health care provider first?",
      rationale:
        "A hemoglobin of 6.8 g/dL is below the usual transfusion threshold of 7 g/dL. With a heart rate of 118/minute it suggests ongoing blood loss after colectomy. This client needs prompt assessment and likely transfusion. A hemoglobin of 11.2 g/dL is an expected fall after joint surgery. A mild rise in white cells is common after surgery. Potassium 3.6 mEq/L is normal.",
      refs: [
        "Red cell transfusion is generally considered for hospitalized adults when hemoglobin falls below 7 g/dL (70 g/L).",
        "The normal serum potassium range for adults is 3.5 to 5 mEq/L (3.5 to 5 mmol/L).",
      ],
      canada: "Canadian labs report hemoglobin in g/L only, so the key result reads 68 g/L. The transfusion threshold of 7 g/dL reads as 70 g/L.",
      sources: [AABB, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Knee replacement, day 1: hemoglobin 11.2 g/dL (112 g/L)", why: "A modest fall after joint surgery is expected and is above the transfusion threshold." },
      { text: "Colectomy, day 2: hemoglobin 6.8 g/dL (68 g/L), pulse 118", why: "A hemoglobin below 7 g/dL with a heart rate of 118/minute suggests active blood loss." },
      { text: "Hysterectomy, day 1: white cells 12 000/mm3, afebrile", why: "A mild rise in white cells without fever is common after surgery." },
      { text: "Spinal fusion, day 3: potassium 3.6 mEq/L (3.6 mmol/L)", why: "3.6 mEq/L is within the normal range of 3.5 to 5 mEq/L." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-15", {
      topic: "Ankle-brachial index",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client reports right calf pain when walking that eases with rest. The nurse measures the ankle-brachial index. Brachial systolic BP is 140 mmHg on the right and 136 mmHg on the left. At the right ankle, systolic pressure is 98 mmHg at the posterior tibial artery and 91 mmHg at the dorsalis pedis artery. What is the right ankle-brachial index?",
      rationale:
        "The index divides the higher ankle pressure on that side by the higher of the two brachial pressures. The higher right ankle pressure is 98 mmHg. The higher brachial pressure is 140 mmHg. 98 / 140 = 0.70. An index of 0.90 or less is abnormal and supports peripheral artery disease. This fits the calf pain on walking.",
      refs: ["An ankle-brachial index of 0.90 or less is abnormal. It supports a diagnosis of peripheral artery disease."],
      calc: { expr: "98 / 140", answer: 0.7, unit: "", round: 2, steps: ["98 / 140 = 0.70"] },
      sources: [GORNIK],
    }),
    kind: "mc",
    options: [
      { text: "0.65", why: "This uses the lower ankle pressure of 91 mmHg. The higher ankle pressure is used." },
      { text: "0.70", why: "The higher ankle pressure of 98 mmHg over the higher brachial pressure of 140 mmHg gives 0.70." },
      { text: "0.72", why: "This uses the lower brachial pressure of 136 mmHg. The higher brachial pressure is used." },
      { text: "1.43", why: "This divides the arm pressure by the ankle pressure, which inverts the index." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-16", {
      topic: "Serial troponin in chest pain",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 58-year-old client arrives at the emergency department with chest pressure that began 2 hours earlier. The ECG shows no ST elevation. The laboratory upper reference limit for this high-sensitivity troponin T assay is 14 ng/L. The nurse reviews the serial results. Which interpretation of the trend is most accurate?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Arrival", "1 hour", "3 hours"],
            rows: [["High-sensitivity troponin T (ng/L)", "9", "31", "64"]],
          },
        },
      ],
      rationale:
        "The troponin rises from 9 to 31 to 64 ng/L over 3 hours. Two values exceed the upper limit of 14 ng/L. A rising pattern with values above that limit shows acute myocardial injury. With chest pressure and no ST elevation, this fits a non-ST elevation infarction. A normal first value does not rule out infarction when symptoms began recently. Chronic injury gives a stable level, not a steep rise.",
      refs: ["A rise or fall in troponin with at least one value above the 99th percentile upper reference limit shows acute myocardial injury."],
      sources: [GULATI],
    }),
    kind: "mc",
    options: [
      { text: "Acute myocardial injury is evolving", why: "A steep rise above the 14 ng/L limit with chest pressure shows acute injury." },
      { text: "Chronic stable injury is present", why: "Chronic injury gives a raised but stable level. This level rose from 9 to 64 ng/L." },
      { text: "The normal first value rules it out", why: "The first value was drawn 2 hours after onset. Troponin can take hours to rise." },
      { text: "The change is laboratory variation", why: "A rise from 9 to 64 ng/L is far larger than normal assay variation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-17", {
      topic: "Annual diabetic foot examination",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse performs an annual foot examination for a 61-year-old client with type 2 diabetes. Which findings should the nurse report for follow-up? Select all that apply.",
      rationale:
        "Loss of monofilament sensation and absent vibration at the great toe show loss of protective sensation. A callus with dark spots can hide bleeding under the skin, a sign of a forming ulcer. A warm, red, swollen midfoot without injury can signal Charcot neuroarthropathy. Pulses of 2+, brisk capillary refill and straight-cut nails are normal.",
      sources: [ADA_FOOT, JARVIS],
    }),
    kind: "sata",
    options: [
      { text: "Cannot feel the monofilament at two sites", why: "Missing monofilament touch shows loss of protective sensation and higher ulcer risk." },
      { text: "Pedal pulses 2+ in both feet", why: "Pulses of 2+ are normal and show adequate arterial flow." },
      { text: "Callus with dark spots under the big toe", why: "Dark spots in a callus signal bleeding beneath it, which often comes before an ulcer." },
      { text: "Toenails trimmed straight across", why: "Straight-cut nails are the recommended care and lower ingrown nail risk." },
      { text: "Warm, red, swollen midfoot without injury", why: "These signs can signal Charcot neuroarthropathy, which needs urgent offloading." },
      { text: "Capillary refill of 2 seconds in the toes", why: "Refill within 2 seconds is normal." },
      { text: "No vibration sense at the great toe", why: "Absent vibration sense is a sign of peripheral neuropathy." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s20-18", {
      topic: "Warning sign after bronchoscopy with biopsy",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had a flexible bronchoscopy with transbronchial lung biopsy 2 hours ago under moderate sedation. Which finding needs immediate follow-up by the nurse?",
      rationale:
        "A transbronchial biopsy passes forceps through the airway wall into lung tissue. This can puncture the pleura and cause a pneumothorax. New one-sided chest pain with an SpO2 of 88% fits that complication. The nurse applies oxygen and notifies the provider. A sore throat, blood-streaked sputum and an absent gag reflex are expected soon after the procedure.",
      sources: [HINKLE, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "Mild sore throat on swallowing", why: "A mild sore throat is expected after a scope passes through the throat." },
      { text: "New right chest pain and SpO2 88%", why: "Sudden chest pain and low saturation after biopsy suggest a pneumothorax." },
      { text: "Sputum streaked with small amounts of blood", why: "Small streaks of blood are expected after a lung biopsy." },
      { text: "Gag reflex still absent", why: "Topical anesthetic can blunt the gag reflex for a time. The client stays NPO until it returns." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-19", {
      topic: "Blood gas after days of diarrhea",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client has had severe watery diarrhea for 3 days. Arterial blood gas results are pH 7.29, PaCO2 30 mmHg and HCO3 15 mEq/L (15 mmol/L). Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The pH of 7.29 is below 7.35, so acidosis is present. The HCO3 of 15 mEq/L is low, so the cause is metabolic. The PaCO2 of 30 mmHg is low because the lungs blow off carbon dioxide to compensate. The pH is still abnormal, so compensation is partial. Diarrhea removes bicarbonate-rich intestinal fluid.",
      refs: ["Normal arterial values: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      canada: "Canadian labs report HCO3 in mmol/L only, with the same number as mEq/L. The result reads HCO3 15 mmol/L, and PaCO2 stays in mmHg.",
      sources: [PAGANA, HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The results show {0} that is {1}, most likely caused by {2}.",
    blanks: [
      {
        options: [
          { text: "metabolic acidosis", why: "A pH below 7.35 with a low HCO3 of 15 mEq/L is metabolic acidosis." },
          { text: "respiratory acidosis", why: "Respiratory acidosis has a high PaCO2. This PaCO2 is 30 mmHg." },
          { text: "metabolic alkalosis", why: "Alkalosis needs a pH above 7.45. This pH is 7.29." },
          { text: "respiratory alkalosis", why: "The pH of 7.29 is acidotic, so this is not alkalosis." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "uncompensated", why: "The low PaCO2 shows the lungs are already compensating." },
          { text: "partly compensated", why: "The PaCO2 has fallen to compensate, but the pH is still below 7.35." },
          { text: "fully compensated", why: "Full compensation returns the pH to 7.35 to 7.45. This pH is 7.29." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "loss of stomach acid", why: "Loss of stomach acid causes metabolic alkalosis." },
          { text: "carbon dioxide retention", why: "Retained carbon dioxide raises the PaCO2. This PaCO2 is low." },
          { text: "bicarbonate loss in stool", why: "Intestinal fluid is rich in bicarbonate, so diarrhea lowers HCO3." },
          { text: "anxious rapid breathing", why: "Anxious hyperventilation causes respiratory alkalosis." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s20-20", {
      topic: "Urine culture from an indwelling catheter",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client with an indwelling urinary catheter has a new fever. The primary health care provider prescribes a urine culture. How should the nurse obtain the specimen?",
      rationale:
        "A culture sample comes from the sampling port after it is cleaned, using a sterile syringe. This keeps the closed drainage system intact. Urine in the bag has sat at room temperature and bacteria multiply in it. Opening the system lets organisms in. Catheter tips are not cultured because they carry colonizing organisms.",
      sources: [GOULD_CAUTI],
    }),
    kind: "mc",
    options: [
      { text: "Drain urine from the collection bag", why: "Urine in the bag has stood for hours, so bacterial counts are not accurate." },
      { text: "Disconnect the catheter from the tubing", why: "Breaking the closed system lets organisms enter the catheter." },
      { text: "Send the catheter tip after removal", why: "Catheter tips carry colonizing organisms and are not cultured." },
      { text: "Aspirate urine from the cleaned sampling port", why: "The port gives a fresh sample and keeps the drainage system closed." },
    ],
    correct: 3,
  },
];
