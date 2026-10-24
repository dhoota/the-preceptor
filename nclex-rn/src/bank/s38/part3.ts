import type { Item } from "@/engine/types";
import {
  ADLER_PERICARDIUM,
  ATLS,
  BERLIN_ARDS,
  EPSTEIN_HEAT,
  HINKLE,
  HOCKENBERRY,
  ISSELBACHER_AORTA,
  LEVI_DIC,
  NEUNERT_ITP,
  SIMON_FLAIL,
  WFH_HEMOPHILIA,
  meta,
} from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s38-21", {
      need: "PA",
      topic: "A bump on the head with a factor deficiency",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 6-year-old child with severe hemophilia A falls off a bike and bumps the forehead. The child has a small bruise, is alert and playing, and has no headache or vomiting. The family keeps factor VIII concentrate at home. The parent calls the clinic. Which instruction should the nurse give?",
      rationale:
        "A head injury in severe hemophilia can cause bleeding inside the skull. Signs may not appear for hours. Factor VIII is given at once, before symptoms and before any imaging, and the child is then assessed. Waiting for a headache loses time. Ibuprofen impairs platelet function. A scan should not delay factor replacement.",
      sources: [WFH_HEMOPHILIA, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Watch at home and call if a headache starts", why: "Bleeding inside the skull can be silent for hours. Factor is given before symptoms." },
      { text: "Infuse factor VIII now and then come in", why: "Prompt factor replacement limits any bleeding inside the skull while the child is assessed." },
      { text: "Apply ice to the bruise and give ibuprofen", why: "Ibuprofen impairs platelet function and adds to the bleeding risk." },
      { text: "Come in for a head scan before giving any factor", why: "Imaging should not delay factor replacement after a head injury." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s38-22", {
      need: "PA",
      topic: "Sudden bruising after a cold in a preschooler",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 4-year-old child had a cold 2 weeks ago. Today the child has scattered petechiae and bruises on the legs and trunk but looks well. There is no fever, bone pain or lymph node swelling. Platelet count is 14 000/mm3. Hemoglobin is 12.1 g/dL (121 g/L). White cell count is 7 800/mm3 with a normal differential. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A well child with petechiae and bruising 2 weeks after a viral illness fits immune thrombocytopenia. The platelet count of 14 000/mm3 is low, while the hemoglobin of 12.1 g/dL and white cell count of 7 800/mm3 are normal. Leukemia usually lowers more than one cell line and causes bone pain or swollen nodes. Hemophilia causes joint bleeds with a normal platelet count.",
      refs: ["Normal platelet count is 150 000 to 400 000/mm3."],
      sources: [NEUNERT_ITP, HOCKENBERRY],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "These findings are most consistent with {0}, because {1}.",
    blanks: [
      {
        options: [
          { text: "acute leukemia", why: "Leukemia usually affects more than one cell line and causes bone pain or swollen nodes." },
          { text: "immune thrombocytopenia", why: "Isolated low platelets in a well child after a viral illness fit this condition." },
          { text: "hemophilia A", why: "Hemophilia causes joint and muscle bleeds with a normal platelet count." },
          { text: "iron deficiency anemia", why: "The hemoglobin is 12.1 g/dL, which does not suggest anemia." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "the white cell count is high", why: "The white cell count of 7 800/mm3 is normal." },
          { text: "bleeding is into the joints", why: "The stem describes skin bleeding, not joint bleeding." },
          { text: "only the platelet count is low", why: "A low platelet count with normal red and white cells points to immune platelet destruction." },
          { text: "the child has a high fever", why: "The child has no fever." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s38-23", {
      need: "PA",
      topic: "Clotting factor consumption after heat stroke",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A 24-year-old client was admitted yesterday with exertional heat stroke. Cooling brought the core temperature back to normal. The nurse reviews the laboratory results. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Day 1 0800", "Day 1 1600", "Day 2 0000", "Day 2 0800"],
            rows: [
              ["Platelets (/mm3)", "210 000", "142 000", "88 000", "46 000"],
              ["Fibrinogen, mg/dL (g/L)", "310 (3.1)", "230 (2.3)", "160 (1.6)", "95 (0.95)"],
              ["Prothrombin time (seconds)", "12.8", "15.1", "18.6", "22.4"],
              ["D-dimer (mcg/mL)", "0.4", "2.1", "5.8", "9.6"],
            ],
          },
        },
      ],
      rationale:
        "Heat stroke damages blood vessel linings and can trigger widespread clotting. From day 1 to day 2 the platelets fall from 210 000 to 46 000/mm3 and the fibrinogen from 310 to 95. The prothrombin time lengthens from 12.8 to 22.4 seconds. The D-dimer rises from 0.4 to 9.6, showing clot breakdown. Falling platelets and clotting factors with rising D-dimer fit disseminated intravascular coagulation.",
      sources: [LEVI_DIC, EPSTEIN_HEAT],
    }),
    kind: "mc",
    options: [
      { text: "Immune thrombocytopenia", why: "Immune thrombocytopenia lowers platelets alone. It does not lower fibrinogen or prolong the prothrombin time." },
      { text: "Vitamin K deficiency", why: "Vitamin K deficiency prolongs the prothrombin time but does not lower platelets or fibrinogen." },
      { text: "Heparin-induced thrombocytopenia", why: "The client has received no heparin, and this disorder does not consume fibrinogen." },
      { text: "Disseminated intravascular coagulation", why: "Platelets and fibrinogen are being used up while clot breakdown products rise." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s38-24", {
      need: "PA",
      topic: "Bleeding precautions when clotting factors are used up",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 52-year-old client has disseminated intravascular coagulation. Blood oozes from the IV sites and the gums. Platelet count is 38 000/mm3. Which measures should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "With a platelet count of 38 000/mm3 and few clotting factors, small injuries bleed. Puncture sites need longer pressure. Medications go IV rather than by intramuscular injection. Mouth care uses soft sponges instead of a brush. Urine and stool are checked for hidden blood. Rectal temperatures can injure the rectal lining. Adhesive tape tears fragile skin when removed.",
      sources: [HINKLE, LEVI_DIC],
    }),
    kind: "sata",
    options: [
      { text: "Take temperatures by the rectal route", why: "A rectal thermometer can injure the lining and cause bleeding." },
      { text: "Hold pressure on puncture sites longer", why: "Low platelets and clotting factors slow clot formation at puncture sites." },
      { text: "Give as-needed pain medicine by IM injection", why: "Intramuscular injections can cause deep muscle bleeding." },
      { text: "Use soft foam swabs for mouth care", why: "Soft swabs clean the mouth without injuring bleeding gums." },
      { text: "Secure dressings with adhesive tape", why: "Removing tape can tear fragile skin and start new bleeding." },
      { text: "Check urine and stool for blood", why: "Hidden bleeding into the urine or bowel is common and needs early detection." },
      { text: "Give medications by the IV route", why: "The IV route avoids new injection sites that can bleed." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s38-25", {
      need: "PA",
      topic: "Leg weakness after stent repair of the thoracic aorta",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client is 8 hours after thoracic endovascular aortic repair through the right femoral artery. A lumbar drain is in place. The nurse completes an assessment. Which finding should the nurse report immediately?",
      rationale:
        "The stent graft covers arteries that feed the spinal cord. Reduced flow can cause spinal cord ischemia and paraplegia. New weakness in both legs is the warning sign. Prompt draining of spinal fluid and raising the BP can restore cord perfusion. Mild groin soreness is expected at the access site. A drain running at the prescribed rate and adequate urine output need no report.",
      sources: [ISSELBACHER_AORTA, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Mild soreness at the right groin site", why: "Some soreness at the femoral access site is expected after the procedure." },
      { text: "New weakness in both legs", why: "New leg weakness signals spinal cord ischemia, which needs urgent treatment." },
      { text: "Clear fluid draining at the prescribed rate", why: "Clear spinal fluid draining as prescribed is the expected function of the drain." },
      { text: "Urine output of 50 mL in the past hour", why: "This urine output is adequate and needs no urgent report." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s38-26", {
      need: "PA",
      topic: "Chest pain that eases on leaning forward",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 34-year-old client has had sharp chest pain since a viral illness 1 week ago. The nurse suspects acute pericarditis. Which findings would support this? Select all that apply.",
      rationale:
        "Pericarditis pain is sharp and pleuritic. It worsens with a deep breath and eases when the client sits up and leans forward. A scratchy friction rub is heard at the left sternal border. The ECG shows widespread ST elevation. Pain relieved by nitroglycerin, pain with exertion and ST elevation limited to the inferior leads point to myocardial ischemia.",
      sources: [ADLER_PERICARDIUM],
    }),
    kind: "sata",
    options: [
      { text: "Pain that eases when sitting up and leaning forward", why: "Leaning forward moves the heart away from the inflamed pericardium." },
      { text: "Pain relieved by sublingual nitroglycerin", why: "Relief with nitroglycerin suggests ischemia, not pericarditis." },
      { text: "A scratchy sound at the left sternal border", why: "A pericardial friction rub is a specific sign of pericarditis." },
      { text: "ST elevation only in leads II, III and aVF", why: "ST elevation limited to one coronary territory suggests an infarction." },
      { text: "Pain that worsens with a deep breath", why: "Pericarditis pain is pleuritic and worsens on inspiration." },
      { text: "Pain that spreads to the jaw with exertion", why: "Exertional pain to the jaw suggests angina." },
      { text: "ST elevation across most ECG leads", why: "Widespread ST elevation reflects diffuse inflammation of the pericardium." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s38-27", {
      need: "PA",
      topic: "Measuring the inspiratory fall in systolic pressure",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with a known pericardial effusion becomes short of breath. Heart rate is 118/minute. The nurse measures for pulsus paradoxus with a manual cuff. Korotkoff sounds are first heard during expiration only at 124 mmHg. They are heard during both inspiration and expiration at 104 mmHg. Which interpretation is correct?",
      rationale:
        "Pulsus paradoxus is the gap between the pressure where sounds are first heard in expiration only and where they are heard throughout the cycle. Here 124 - 104 = 20 mmHg. A fall of more than 10 mmHg is abnormal. With a known effusion, a fast heart rate and breathlessness, it points to cardiac tamponade. The primary health care provider is notified at once.",
      calc: { expr: "124 - 104", answer: 20, unit: "mmHg", round: 0, steps: ["124 - 104 = 20"] },
      refs: ["Pulsus paradoxus is an inspiratory fall in systolic pressure of more than 10 mmHg."],
      sources: [ADLER_PERICARDIUM],
    }),
    kind: "mc",
    options: [
      { text: "10 mmHg, a normal variation", why: "The gap is 20 mmHg, not 10 mmHg. A fall of 10 mmHg or less would be normal." },
      { text: "20 mmHg, a sign of tamponade", why: "A gap of 20 mmHg is above 10 mmHg and fits tamponade with this effusion." },
      { text: "20 mmHg, a normal variation", why: "Any inspiratory fall above 10 mmHg is abnormal." },
      { text: "104 mmHg, a sign of hypotension", why: "104 mmHg is a systolic reading, not the pulsus paradoxus." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s38-28", {
      need: "PA",
      topic: "New bilateral infiltrates with a normal heart",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 48-year-old client is on day 2 of acute pancreatitis. Over 6 hours the respiratory rate rises to 34/minute and the SpO2 falls to 86% despite a nonrebreather mask. A chest x-ray shows new infiltrates in both lungs. An echocardiogram shows normal left ventricular function. Which condition is most likely?",
      rationale:
        "Acute respiratory distress syndrome develops soon after a known insult such as pancreatitis. It causes hypoxemia that oxygen does not correct and new infiltrates in both lungs. Normal left ventricular function shows the fluid is not from heart failure. A pneumothorax affects one side. An embolism seldom causes bilateral infiltrates.",
      sources: [BERLIN_ARDS],
    }),
    kind: "mc",
    options: [
      { text: "Acute respiratory distress syndrome", why: "Hypoxemia with bilateral infiltrates after pancreatitis and a normal heart fits this syndrome." },
      { text: "Cardiogenic pulmonary edema", why: "The echocardiogram shows normal left ventricular function, so the heart is not the cause." },
      { text: "Spontaneous right-sided pneumothorax", why: "A pneumothorax is one-sided and does not cause infiltrates in both lungs." },
      { text: "Pulmonary embolism from a leg clot", why: "An embolism causes hypoxemia but seldom new infiltrates in both lungs." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s38-29", {
      need: "PA",
      topic: "Sudden high airway pressure on the ventilator after trauma",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 33-year-old client is on mechanical ventilation after chest trauma. The peak airway pressure suddenly rises from 28 to 52 cmH2O. Breath sounds are absent on the right and the trachea has shifted to the left. BP falls to 78/44 mmHg and SpO2 to 81%. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Rising airway pressure, absent breath sounds on the right, a trachea pushed to the left and falling BP fit a tension pneumothorax. Trapped air compresses the lung and the great veins. The client is bagged with 100% oxygen off the ventilator while needle decompression is prepared. BP and right-sided breath sounds show whether decompression worked. A mucus plug does not shift the trachea or drop the BP.",
      sources: [ATLS, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Mucus plug in the right bronchus", why: "A plug can silence one lung but does not push the trachea aside or drop the BP." },
      { text: "Right tension pneumothorax", why: "Trapped air on the right shifts the trachea left, raises airway pressure and lowers BP." },
      { text: "Tube in the right mainstem bronchus", why: "A right mainstem tube silences the left lung, not the right." },
      { text: "Acute cardiac tamponade", why: "Tamponade lowers BP but does not cause absent breath sounds or tracheal shift." },
    ],
    actions: [
      { text: "Prepare for needle decompression", why: "Releasing the trapped air relieves pressure on the lung and great veins." },
      { text: "Pull the endotracheal tube back by 2 cm", why: "Pulling the tube back corrects a mainstem intubation, which this is not." },
      { text: "Increase the PEEP setting on the ventilator", why: "More positive pressure would add to the trapped air and worsen the problem." },
      { text: "Bag with 100% oxygen off the ventilator", why: "Manual ventilation with oxygen supports gas exchange while decompression is prepared." },
      { text: "Send the client for a chest CT scan", why: "Transport for imaging delays treatment of a life-threatening problem." },
    ],
    parameters: [
      { text: "Hourly blood glucose", why: "Glucose does not show whether the pneumothorax is relieved." },
      { text: "Blood pressure", why: "BP recovers as pressure on the great veins is released." },
      { text: "Urine specific gravity", why: "Urine concentration does not track this emergency." },
      { text: "Right-sided breath sounds", why: "Returning breath sounds show the right lung has re-expanded." },
      { text: "Serum albumin level", why: "Albumin does not guide care in this emergency." },
    ],
    correct: { condition: 1, actions: [0, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s38-30", {
      need: "PA",
      topic: "Pain control for a floating chest wall segment",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 70-year-old client has a right flail chest after a fall down stairs. Respirations are 30/minute and shallow. The client splints the chest and will not cough because of pain rated 9 of 10. SpO2 is 92% on oxygen at 4 L/minute. Which intervention should the nurse anticipate as the priority?",
      rationale:
        "Pain is stopping this client from breathing deeply and coughing. Shallow breaths and retained secretions lead to pneumonia and respiratory failure in older adults with rib injuries. Regional analgesia such as an epidural relieves pain so the client can breathe and cough. Strapping the chest restricts expansion. Intubation is kept for respiratory failure. Suppressing cough lets secretions collect.",
      sources: [SIMON_FLAIL],
    }),
    kind: "mc",
    options: [
      { text: "A sandbag over the flail segment", why: "External splinting restricts chest expansion and is not recommended." },
      { text: "Intubation to splint the injured chest wall", why: "Intubation is reserved for respiratory failure, not routine splinting." },
      { text: "A cough suppressant at bedtime", why: "Suppressing cough lets secretions collect and raises pneumonia risk." },
      { text: "Epidural or other regional analgesia", why: "Regional analgesia controls pain so the client can breathe deeply and cough." },
    ],
    correct: 3,
  },
];
