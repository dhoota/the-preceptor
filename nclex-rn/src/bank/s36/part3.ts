import type { Item } from "@/engine/types";
import { AABB, ASCITES, BTS_BRONCH, BTS_PROCEDURES, CEFTRIAXONE, HINKLE, LAST, PAGANA, POSTOP_PAIN, PROPPR, TACO, VANCO_PORT, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s36-21", {
      need: "PPT",
      topic: "Ceftriaxone through a line with lactated Ringer's",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 58-year-old client with pneumonia has lactated Ringer's solution running at 100 mL per hour through a single peripheral IV catheter. Ceftriaxone 1 g in 50 mL is due by IV piggyback. The client has no other IV access. Which action should the nurse take?",
      rationale:
        "Lactated Ringer's solution contains calcium. Ceftriaxone binds calcium and can form a precipitate in the tubing or the vein. In clients other than neonates, the two can be given one after the other through the same line if it is flushed well with a compatible fluid between them. A Y-site run with the Ringer's or mixing in the bag risks precipitation. Waiting for a second line delays the antibiotic without need.",
      sources: [CEFTRIAXONE],
    }),
    kind: "mc",
    options: [
      { text: "Pause the Ringer's and flush before and after", why: "Flushing with a compatible fluid between the two keeps ceftriaxone and calcium apart." },
      { text: "Run the ceftriaxone into the Ringer's line at a Y-site", why: "Ceftriaxone and calcium meeting in the line can form a precipitate." },
      { text: "Hold the ceftriaxone until a second IV is placed", why: "Sequential use with a flush is allowed in adults, so the delay is not needed." },
      { text: "Add the ceftriaxone dose to the Ringer's bag", why: "Mixing ceftriaxone into a calcium-containing solution risks precipitation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s36-22", {
      need: "RRP",
      topic: "Vancomycin level drawn from the infusion lumen",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      version: 2,
      stem: "A client receives vancomycin 1250 mg IV every 12 hours through the red lumen of a double-lumen PICC. A trough level was drawn from the red lumen at 1945, before the 2000 dose. The result is 38 mcg/mL, up from 14 mcg/mL 2 days ago. Creatinine is unchanged at 0.9 mg/dL (80 micromol/L), and urine output is normal. Which explanation should the nurse consider first?",
      rationale:
        "Vancomycin runs through the same lumen used for the sample. Drug left in the catheter can mix with the blood drawn and give a falsely high level. Creatinine is unchanged at 0.9 mg/dL and urine output is normal, so a jump from 14 to 38 mcg/mL is unlikely to be true accumulation. Published cases show vancomycin levels drawn through the catheter used to give it can read several times higher than a peripheral sample. The nurse requests a repeat sample by venipuncture before the dosing is changed.",
      sources: [VANCO_PORT, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "Drug left in the lumen used for the sample", why: "Residual vancomycin in the catheter can contaminate the sample and raise the result falsely." },
      { text: "Acute kidney injury from vancomycin", why: "Kidney injury would raise the creatinine. It is unchanged at 0.9 mg/dL." },
      { text: "A trough drawn too long after the dose", why: "Later sampling gives a lower level, not a higher one." },
      { text: "Expected rise as levels reach steady state", why: "A near tripling in 2 days with stable kidney function is not an expected steady state change." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s36-23", {
      need: "PPT",
      topic: "Questioning a basal rate on a new PCA",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 44-year-old client who takes no opioids at home is 2 hours after an open cholecystectomy. The prescription for IV morphine by PCA pump reads: concentration 1 mg/mL, demand dose 1 mg, lockout 8 minutes, continuous basal rate 1 mg/hour and 4-hour limit 20 mg. Which setting should the nurse question before starting the pump?",
      rationale:
        "A continuous basal infusion delivers opioid even while the client sleeps and cannot press the button. In adults who do not take opioids, it raises the risk of respiratory depression without better pain relief. Postoperative pain guidance advises against routine basal infusions with IV PCA in opioid-naive adults. The demand dose and lockout let the client control dosing, and the 4-hour limit caps the total.",
      sources: [POSTOP_PAIN],
    }),
    kind: "mc",
    options: [
      { text: "The demand dose of 1 mg", why: "A 1 mg morphine demand dose is a usual starting dose for an adult." },
      { text: "The lockout interval of 8 minutes", why: "A lockout of 8 minutes lets each dose take effect before the next one." },
      { text: "The basal rate of 1 mg/hour", why: "A basal infusion in an opioid-naive adult adds sedation risk without better pain relief." },
      { text: "The 4-hour limit of 20 mg", why: "The 4-hour limit adds a safety cap on the total the client can receive." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-24", {
      need: "RRP",
      topic: "Assisting during a therapeutic thoracentesis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      version: 2,
      stem: "The nurse assists the primary health care provider with a bedside thoracentesis on the right side for a client with a large pleural effusion causing breathlessness. Which actions should the nurse take during the procedure? Select all that apply.",
      rationale:
        "Sitting upright and leaning forward over a table opens the spaces between the ribs and lets fluid settle at the base. Holding still without coughing as the needle enters lowers the risk of puncturing the lung. Chest tightness or a persistent cough during drainage can signal re-expansion pulmonary edema or a pneumothorax, so drainage stops and the provider is told. Large drainage volumes are limited for the same reason. A flat position moves fluid away from the site.",
      sources: [BTS_PROCEDURES, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Lay the client flat with the head of the bed down", why: "Lying flat spreads the fluid away from the base and makes the tap harder and less safe." },
      { text: "Seat the client leaning forward over a bedside table", why: "Leaning forward widens the rib spaces and pools fluid at the base." },
      { text: "Coach the client to cough as the needle enters", why: "Coughing moves the lung toward the needle and raises the risk of puncture." },
      { text: "Ask the client to hold still while the needle enters", why: "Holding still lowers the risk of lung puncture." },
      { text: "Encourage drainage until no more fluid returns", why: "Draining large volumes raises the risk of re-expansion pulmonary edema." },
      { text: "Report chest tightness or coughing during drainage", why: "These symptoms can signal re-expansion edema or a pneumothorax and mean drainage should stop." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s36-25", {
      need: "PPT",
      topic: "Hourly ceiling of a PCA without basal dosing",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a hydromorphone PCA pump with a demand dose of 0.2 mg and a lockout interval of 10 minutes. There is no basal infusion. What is the most hydromorphone the client can receive from the pump in 1 hour?",
      rationale:
        "A lockout of 10 minutes allows at most 6 demand doses in 60 minutes. Six doses of 0.2 mg is 1.2 mg. Knowing the hourly ceiling helps the nurse judge how much opioid the client could receive. Comparing attempts with doses delivered shows whether pain is controlled.",
      calc: { expr: "60 / 10 * 0.2", answer: 1.2, unit: "mg", round: 1, steps: ["60 / 10 = 6", "6 * 0.2 = 1.2"] },
      sources: [POSTOP_PAIN],
    }),
    kind: "mc",
    options: [
      { text: "0.2 mg", why: "This is a single demand dose, not the hourly ceiling." },
      { text: "1.2 mg", why: "Six doses of 0.2 mg in 60 minutes is 1.2 mg." },
      { text: "2 mg", why: "This treats the lockout as 6 minutes instead of 10 minutes." },
      { text: "12 mg", why: "This is ten times the true ceiling, a decimal error." },
    ],
    correct: 1,
  },
  // PULL (s36 review): duplicates rn-s24-26, which already tests SBP signs with an ascitic neutrophil count above 250 cells/mm3, fever and tenderness.
  {
    ...meta("rn-s36-26", {
      need: "RRP",
      topic: "Ascitic fluid neutrophil count",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 61-year-old client with cirrhosis and ascites has new abdominal tenderness and confusion. Temperature is 38.1°C (100.6°F). A diagnostic paracentesis returns cloudy fluid with an ascitic neutrophil count of 410 cells/mm3. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "An ascitic neutrophil count of 410 cells/mm3 is above the 250 cells/mm3 threshold for spontaneous bacterial peritonitis. New abdominal tenderness supports infection of the fluid, as do the fever and cloudy fluid. Confusion can be an early sign of this infection in cirrhosis. Cirrhosis and ascites are risk factors, not evidence of the infection. Treatment starts with IV antibiotics without waiting for the culture.",
      refs: ["An ascitic neutrophil count of 250 cells/mm3 or more diagnoses spontaneous bacterial peritonitis."],
      sources: [ASCITES],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is most likely developing {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "hepatic encephalopathy alone", why: "Confusion fits encephalopathy, but the fever and neutrophil count point to infection." },
          { text: "spontaneous bacterial peritonitis", why: "A neutrophil count above 250 cells/mm3 with fever and tenderness fits this infection." },
          { text: "circulatory dysfunction after drainage", why: "This follows large-volume drainage. A diagnostic tap removes little fluid." },
          { text: "a perforated bowel", why: "The stem gives no sudden severe pain or free air to suggest perforation." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a long history of cirrhosis", why: "Cirrhosis is a risk factor. It does not show infection is present." },
          { text: "the need for a paracentesis", why: "A diagnostic tap is how the infection is found, not evidence of it." },
          { text: "a neutrophil count of 410 cells/mm3", why: "This count is above the 250 cells/mm3 diagnostic threshold." },
          { text: "the presence of ascites", why: "Ascites is a risk factor. It does not show infection is present." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "new abdominal tenderness", why: "New tenderness points to inflammation of the peritoneum." },
          { text: "the age of 61 years", why: "Age does not show infection of the ascitic fluid." },
          { text: "the volume of ascites", why: "Ascites alone is not evidence of infection." },
          { text: "the diagnosis of cirrhosis", why: "Cirrhosis is a risk factor, not evidence of infection." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s36-27", {
      need: "PPT",
      topic: "Balanced products in a trauma hemorrhage protocol",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 30-year-old client with a gunshot wound to the abdomen arrives in hemorrhagic shock. BP is 70/40 mmHg and heart rate is 140/minute. Temperature is 35.4°C (95.7°F). The trauma team activates the massive transfusion protocol. Which actions should the nurse anticipate? Select all that apply.",
      rationale:
        "Massive hemorrhage leads to clotting failure, acidosis and hypothermia, each of which worsens the others. Plasma, platelets and red cells in a balanced ratio replace clotting factors as well as oxygen carriers. A blood warmer prevents further cooling from 35.4°C. Citrate in stored blood binds calcium, so ionized calcium is checked and replaced. Large crystalloid volumes dilute clotting factors. Group O red cells are released without waiting for a full crossmatch.",
      sources: [PROPPR, AABB],
    }),
    kind: "sata",
    options: [
      { text: "Infuse 3 L of crystalloid before any blood", why: "Large crystalloid volumes dilute clotting factors and worsen bleeding." },
      { text: "Give plasma, platelets and red cells in a balanced ratio", why: "A balanced ratio replaces clotting factors and platelets along with red cells." },
      { text: "Wait for a full crossmatch before the first unit", why: "Uncrossmatched group O red cells are given in hemorrhage rather than waiting." },
      { text: "Run blood products through a fluid warmer", why: "Cold products deepen hypothermia, which worsens clotting and raises arrhythmia risk." },
      { text: "Give red cells alone until the INR returns", why: "Red cells alone dilute clotting factors. Plasma starts early with the red cells." },
      { text: "Check ionized calcium during the transfusion", why: "Citrate in stored blood binds calcium, which can fall during rapid transfusion." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s36-28", {
      need: "RRP",
      topic: "Topical lidocaine excess after bronchoscopy",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      version: 2,
      stem: "A 64-year-old client who weighs 50 kg is 30 minutes after a flexible bronchoscopy. Topical lidocaine was sprayed into the airway in repeated doses during the 50-minute procedure. The client now reports numbness around the mouth and ringing in the ears and has twitching of the fingers. The client denies chest pain. SpO2 is 95% on 2 L/minute of oxygen. Blood glucose is 104 mg/dL (5.8 mmol/L). Which complication should the nurse suspect?",
      rationale:
        "Topical lidocaine is absorbed through the airway lining. Repeated doses in a small adult can reach toxic blood levels. Numbness around the mouth, ringing in the ears and muscle twitching are early central nervous system signs. Seizures and heart rhythm problems can follow. Bronchoscopy guidance limits the total topical dose by body weight. The nurse gives no more lidocaine, stays with the client and notifies the provider.",
      sources: [BTS_BRONCH, LAST],
    }),
    kind: "mc",
    options: [
      { text: "Pneumothorax from the procedure", why: "A pneumothorax causes chest pain and falling SpO2. The SpO2 is 95% and there is no chest pain." },
      { text: "Laryngospasm after removal of the scope", why: "Laryngospasm causes stridor and airway obstruction, not perioral numbness or tinnitus." },
      { text: "Hypoglycemia from fasting", why: "The blood glucose is 104 mg/dL, which is normal." },
      { text: "Lidocaine toxicity from airway spray", why: "Perioral numbness, tinnitus and twitching after repeated lidocaine fit systemic toxicity." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s36-29", {
      need: "PPT",
      topic: "Weight-based plasma volume and overload risk",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client who weighs 70 kg has liver disease and is bleeding before an urgent procedure. The primary health care provider prescribes plasma at 15 mL/kg. How many mL of plasma should the nurse expect to give?",
      rationale:
        "15 mL/kg for a client who weighs 70 kg is 1050 mL. That is a large volume to give over a short time. Plasma can cause transfusion-associated circulatory overload, so the nurse checks breath sounds, BP and SpO2 during and after the transfusion. Plasma must be ABO compatible with the client's red cells. Rh matching is not required.",
      calc: { expr: "15 * 70", answer: 1050, unit: "mL", round: 0, steps: ["15 * 70 = 1050"] },
      sources: [AABB, TACO],
    }),
    kind: "mc",
    options: [
      { text: "105 mL", why: "This is a tenth of the dose, a decimal error." },
      { text: "700 mL", why: "This uses a lower dose per kilogram than the one prescribed." },
      { text: "1050 mL", why: "15 mL/kg multiplied by 70 kg is 1050 mL." },
      { text: "1500 mL", why: "This is more than 15 mL/kg for a client who weighs 70 kg." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-30", {
      need: "RRP",
      topic: "Growing groin swelling after femoral access",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client returned from cardiac catheterization through the right femoral artery 1 hour ago. The nurse finds a firm swelling 5 cm across at the right groin that was not there 15 minutes ago. The dressing is dry. Right pedal pulses are present. BP is 118/72 mmHg. What should the nurse do first?",
      rationale:
        "A new, firm swelling at the groin points to a hematoma from arterial bleeding. Firm manual pressure just above the skin puncture compresses the artery where it was entered. Pressure comes first because the bleeding continues while the nurse waits. The nurse then marks the edges, checks pulses and vital signs and notifies the provider. Raising the head of the bed flexes the hip and can worsen bleeding.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Mark the edges and recheck in 15 minutes", why: "Marking helps track size, but the bleeding needs pressure now." },
      { text: "Raise the head of the bed to 45 degrees", why: "Hip flexion presses on the site and can worsen arterial bleeding." },
      { text: "Notify the provider and wait for further orders", why: "The provider is notified after pressure is applied. Waiting lets the bleed grow." },
      { text: "Apply firm pressure just above the puncture", why: "Pressure over the arterial entry point stops the bleeding feeding the hematoma." },
    ],
    correct: 3,
  },
];
