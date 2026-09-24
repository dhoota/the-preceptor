import type { Item } from "@/engine/types";
import { ADA, HINKLE, SEPSIS, WONG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s22-11", {
      topic: "Low glucose on a sulfonylurea",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 78-year-old client with type 2 diabetes takes glipizide each morning. The client has eaten little for 2 days because of a cold. The daughter reports that the client is sweaty, shaky and more confused than usual. Heart rate is 106/minute. Which condition should the nurse suspect?",
      rationale:
        "Glipizide keeps releasing insulin even when the client does not eat. Two days of poor intake with a sulfonylurea puts an older adult at high risk of low glucose. Sweating, shaking and a heart rate of 106/minute are adrenergic signs. New confusion reflects a brain short of glucose. The nurse checks capillary glucose at once.",
      sources: [ADA, { body: "Lipscombe L, Booth G, Butalia S, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Pharmacologic Glycemic Management of Type 2 Diabetes in Adults. Canadian Journal of Diabetes 42(Suppl 1):S88", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-13" }, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
      canada: "Glipizide is not sold in Canada. Diabetes Canada lists gliclazide, glimepiride and glyburide as the sulfonylureas in use. Diabetes Canada defines hypoglycemia on a secretagogue as a glucose below 4.0 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Hyperosmolar hyperglycemic state", why: "This state causes dry skin, thirst and heavy urine output. Sweating and shaking do not fit." },
      { text: "Hypoglycemia", why: "A sulfonylurea with poor intake, sweating, shaking and confusion fit low glucose." },
      { text: "Dehydration", why: "Dehydration causes dry skin, not sweating and tremor." },
      { text: "Acute stroke", why: "Stroke causes focal deficits. Sweating and shaking point to an adrenergic response." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-12", {
      topic: "Fever and low BP with a urinary catheter",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 68-year-old client in long-term care has an indwelling urinary catheter. Today the client is newly confused. Temperature is 39.1°C (102.4°F), heart rate 118/minute, respirations 26/minute and BP 84/50 mmHg. Serum lactate is 4.2 mmol/L. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A catheter, fever, new confusion, fast pulse and breathing, low BP and a lactate of 4.2 mmol/L fit sepsis from a urinary source. Blood cultures are drawn before antibiotics as long as they cause no delay. Low BP with a high lactate calls for 30 mL/kg of IV crystalloid. Lactate is rechecked to track perfusion. Mean arterial pressure guides fluids and vasopressors.",
      refs: ["Sepsis with low BP or a lactate of 4 mmol/L or more is treated with at least 30 mL/kg of IV crystalloid within the first 3 hours."],
      sources: [SEPSIS],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hypovolemia from poor intake", why: "Poor intake does not explain a temperature of 39.1°C." },
      { text: "Sepsis from a urinary source", why: "A catheter, fever, low BP and high lactate fit sepsis." },
      { text: "Cardiogenic shock", why: "The stem gives no chest pain, crackles or heart history to point to pump failure." },
      { text: "Acute ischemic stroke", why: "Confusion here comes with fever and low BP, not focal weakness or speech loss." },
    ],
    actions: [
      { text: "Hold antibiotics until cultures return", why: "Antibiotics are not held for results. They start promptly once cultures are drawn." },
      { text: "Obtain blood cultures", why: "Cultures drawn before antibiotics help target therapy later." },
      { text: "Restrict IV fluids to 50 mL/h", why: "Restricting fluid would worsen the low BP and poor perfusion." },
      { text: "Infuse 30 mL/kg of IV crystalloid", why: "Low BP and a lactate of 4.2 mmol/L call for a crystalloid bolus." },
      { text: "Give a sedative for the confusion", why: "Sedation would mask the confusion and can lower BP further." },
    ],
    parameters: [
      { text: "Serum lactate level", why: "A falling lactate shows perfusion is improving." },
      { text: "Serum cholesterol level", why: "Cholesterol does not change with sepsis treatment." },
      { text: "Hemoglobin A1C level", why: "A1C reflects glucose control over months and does not guide sepsis care." },
      { text: "Mean arterial pressure", why: "Mean arterial pressure shows whether fluids and pressors restore perfusion." },
      { text: "Weekly body weight", why: "Weekly weight is too slow to guide care in shock." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s22-13", {
      topic: "Chest tube comes apart from the drain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a chest tube to water-seal drainage after a spontaneous pneumothorax. While the client turns, the tubing separates from the drainage unit. The client is breathing comfortably. What should the nurse do first?",
      rationale:
        "An open chest tube lets air enter the pleural space. Placing the tube end a few centimeters under sterile water makes a temporary water seal. Air can then leave but not enter. Clamping can trap air and cause a tension pneumothorax. Petroleum gauze is for a tube that has come out of the chest. The provider does not need to replace an intact tube.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Submerge the tube end in sterile water", why: "Sterile water under the tube end restores a water seal until a new unit is attached." },
      { text: "Clamp the tube close to the chest wall", why: "Clamping stops air from leaving and can cause a tension pneumothorax." },
      { text: "Cover the site with petroleum gauze", why: "Petroleum gauze covers the site when the tube falls out. This tube is still in place." },
      { text: "Ask the provider to replace the tube", why: "The tube itself is intact. Only the connection to the drainage unit failed." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-14", {
      topic: "Airway signs after a house fire",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client is admitted 1 hour after rescue from a house fire. Burns cover the face, neck and front of the chest. Which two findings need the nurse's immediate follow-up? Select two.",
      rationale:
        "Burns to the face and neck in an enclosed fire raise the risk of inhalation injury. A hoarse voice and stridor show swelling in the upper airway. Swelling can close the airway within hours, so early intubation may be needed. Pain, blisters, thirst and a fast pulse are expected after a burn and are treated after the airway.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Pain rated 7 of 10", why: "Burn pain is expected. It is treated after the airway is secured." },
      { text: "Hoarse, raspy voice", why: "Hoarseness shows swelling of the larynx from heat or smoke." },
      { text: "Blisters on the chest", why: "Blisters are expected in partial-thickness burns and are not an airway threat." },
      { text: "Heart rate 104/minute", why: "A fast pulse is expected with pain, fear and fluid shifts after a burn." },
      { text: "Stridor on inspiration", why: "Stridor means the upper airway is narrowing." },
      { text: "Reports thirst and a dry mouth", why: "Thirst and a dry mouth are expected as fluid shifts out of the vessels." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s22-15", {
      topic: "Maintenance fluid rate for a child",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A child who weighs 18 kg is NPO before surgery. The prescription is maintenance IV fluid by weight: 100 mL/kg per day for the first 10 kg and 50 mL/kg per day for each kg above 10 kg. At what rate should the nurse set the pump?",
      rationale:
        "The first 10 kg need 100 mL each, which is 1000 mL a day. The remaining 8 kg need 50 mL each, which is 400 mL a day. The total is 1400 mL a day. Spread over 24 hours this is 58.3, so the pump runs at 58 mL/hour.",
      calc: { expr: "(100 * 10 + 50 * (18 - 10)) / 24", answer: 58.333333333333336, unit: "mL/hour", round: 0, steps: ["100 * 10 = 1000", "18 - 10 = 8", "50 * 8 = 400", "1000 + 400 = 1400", "1400 / 24 = 58.3"] },
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "38 mL/hour", why: "This applies 50 mL/kg to all 18 kg and underfills the first 10 kg." },
      { text: "42 mL/hour", why: "This counts only the first 10 kg and leaves out the remaining 8 kg." },
      { text: "58 mL/hour", why: "1400 mL a day over 24 hours gives 58 mL/hour." },
      { text: "75 mL/hour", why: "This applies 100 mL/kg to all 18 kg and overfills the child." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-16", {
      topic: "Findings after a long bone fracture",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 22-year-old client is 30 hours after a closed fracture of the femoral shaft. The leg is in skeletal traction while surgery is planned. Which findings would suggest fat embolism syndrome? Select all that apply.",
      rationale:
        "Fat globules from the marrow can enter the circulation within a few days of a long bone fracture. In the lungs they cause hypoxemia. In the brain they cause restlessness and confusion. In the skin they cause petechiae over the chest, axillae and conjunctiva. The syndrome raises the heart rate. Bruising at the fracture is expected. One-sided calf swelling points to a deep vein clot.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Bruising over the thigh at the fracture", why: "Bruising at the fracture site is expected after this injury." },
      { text: "Petechiae across the chest and axillae", why: "Fat emboli in skin capillaries cause a petechial rash on the upper body." },
      { text: "Heart rate slowing to 52/minute", why: "Fat embolism causes a fast heart rate, not a slow one." },
      { text: "New restlessness and confusion", why: "Fat emboli in the brain cause changes in mental status." },
      { text: "SpO2 falling to 87% on room air", why: "Fat emboli in the lungs impair gas exchange and cause hypoxemia." },
      { text: "Calf swelling on the uninjured leg", why: "One-sided calf swelling points to a deep vein clot, not fat embolism." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s22-17", {
      topic: "Swelling of the face and neck in lung cancer",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with lung cancer has swelling of the face, neck and both arms that has worsened over 3 days. The neck veins are distended. The client now has a hoarse voice and a high-pitched sound on inspiration. Which problem is the greatest threat?",
      rationale:
        "A tumor pressing on the superior vena cava blocks venous return from the head and arms. Swelling of the face, neck and arms with distended neck veins fits this syndrome. Hoarseness and stridor show swelling of the larynx and narrowing of the airway. Airway compromise is the most urgent threat. Clots, skin injury and constipation matter less right now.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Upper arm deep vein thrombosis", why: "Both arms and the face are swollen, which points to a central blockage, not a single arm clot." },
      { text: "Opioid-related constipation", why: "Constipation is not the cause of the swelling and is not an immediate threat." },
      { text: "Pressure injury from edema", why: "Edematous skin needs protection, but it is not as urgent as the airway." },
      { text: "Airway obstruction", why: "Hoarseness and stridor show the upper airway is narrowing." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s22-18", {
      topic: "Confusion and constipation in breast cancer",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with breast cancer that has spread to the bones has new confusion, constipation and heavy urination. Serum calcium is 13.2 mg/dL (3.29 mmol/L). Serum sodium is 138 mEq/L (138 mmol/L). Glucose is 104 mg/dL (5.8 mmol/L). BP is 128/78 mmHg. Pain is 3 of 10. Both legs have full strength. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Bone metastases release calcium into the blood. A calcium of 13.2 mg/dL depresses nerve and muscle function, which causes confusion and constipation. It also blocks the kidneys from concentrating urine, so output rises. The sodium and glucose are normal. Full leg strength argues against spinal cord compression. The BP and mild pain do not explain the findings.",
      refs: ["Normal total serum calcium is 8.6 mg/dL (2.15 mmol/L) to 10.2 mg/dL (2.55 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is most likely developing {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "spinal cord compression", why: "Cord compression causes back pain and leg weakness. Both legs have full strength." },
          { text: "hypercalcemia", why: "Bone metastases, confusion, constipation and heavy urination fit a high calcium." },
          { text: "hyponatremia", why: "The sodium is 138 mEq/L, which is normal." },
          { text: "hypoglycemia", why: "The glucose is 104 mg/dL, which is normal." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a BP of 128/78 mmHg", why: "This BP is normal and does not point to any of the conditions." },
          { text: "pain rated 3 of 10", why: "Mild pain does not explain the confusion or heavy urination." },
          { text: "a calcium of 13.2 mg/dL", why: "This value is well above the normal range and explains the symptoms." },
          { text: "full leg strength", why: "Full strength argues against cord compression and does not support any listed condition." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s22-19", {
      topic: "Blood gas trend in a severe asthma attack",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A client with a severe asthma attack has received repeated bronchodilator treatments in the emergency department. The nurse reviews the flow sheet. Based on the trend, which condition is developing?",
      tabs: [
        {
          title: "Vital Signs and Blood Gases",
          table: {
            head: ["Time", "0900", "1000", "1100", "1200"],
            rows: [
              ["Respirations (/minute)", "34", "30", "22", "14"],
              ["SpO2 (%)", "93", "91", "88", "85"],
              ["PaCO2 (mmHg)", "30", "36", "44", "52"],
              ["Level of consciousness", "Anxious", "Anxious", "Drowsy", "Hard to rouse"],
            ],
          },
        },
      ],
      rationale:
        "Early in an asthma attack fast breathing lowers the PaCO2, as at 0900. A PaCO2 that climbs from 30 to 52 mmHg while SpO2 falls from 93% to 85% shows the client can no longer move enough air. Slower breathing and growing drowsiness mean the client is tiring. This is impending respiratory failure. Better bronchospasm would raise the SpO2.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Impending respiratory failure", why: "A rising PaCO2 with falling SpO2 and drowsiness shows respiratory muscle fatigue." },
      { text: "Improving bronchospasm", why: "Improvement would raise the SpO2 and keep the client alert. Both are worse here." },
      { text: "Anxiety-related hyperventilation", why: "Hyperventilation lowers the PaCO2. Here it rises to 52 mmHg." },
      { text: "Expected bronchodilator effect", why: "Bronchodilators do not cause drowsiness or a rising PaCO2." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-20", {
      topic: "Nosebleed in a client taking aspirin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 66-year-old client who takes daily aspirin has a nosebleed in the clinic waiting room. Blood drips steadily from the right nostril. The client is alert and breathing easily. What should the nurse do first?",
      rationale:
        "Most nosebleeds start in the front of the septum. Sitting up and leaning forward keeps blood out of the throat and airway. Firm pressure on the soft part of the nose compresses the bleeding vessels. Tilting the head back sends blood down the throat. Lying flat raises pressure in the head and neck. Dry packing is placed by a provider if pressure fails.",
      sources: [HINKLE, { body: "Health Canada", work: "Drug Product Database", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/" }],
      canada: "In Canada the generic name is acetylsalicylic acid, charted as ASA. Aspirin is a Bayer brand name there.",
    }),
    kind: "mc",
    options: [
      { text: "Tilt the head back and pinch the nose", why: "Tilting back lets blood run into the throat, which can cause choking or vomiting." },
      { text: "Lie flat with an ice pack on the neck", why: "Lying flat raises venous pressure in the head and lets blood run into the throat." },
      { text: "Pack the nostril with dry gauze", why: "Packing is a provider step if direct pressure fails." },
      { text: "Lean forward and pinch the soft nose", why: "Leaning forward protects the airway and pressure stops most front nosebleeds." },
    ],
    correct: 3,
  },
];
