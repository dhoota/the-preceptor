import type { Item } from "@/engine/types";
import { AABB, CDC_CATHETER, HINKLE, INS, LEHNE, PN_SAFETY, REFEEDING, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s17-31", {
      topic: "Findings during a red cell transfusion",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is 20 minutes into a transfusion of packed red blood cells. Baseline temperature was 36.8°C (98.2°F), heart rate 82/minute and BP 124/76 mmHg. The client has an indwelling urinary catheter. The nurse reviews the latest note. Click to highlight the findings that need immediate follow-up.",
      rationale:
        "A new fever of 38.4°C, a heart rate up from 82 to 118/minute and a BP down from 124/76 to 96/58 mmHg early in a transfusion signal a reaction. New low back pain and dark red urine point to red cells breaking down in the blood. The transfusion is stopped at once. A matching label, a clean IV site and a normal saturation need no immediate action.",
      sources: [AABB, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Temperature 38.4°C (101.1°F)]]. [[Heart rate 118/minute]]. [[BP 96/58 mmHg]]. [[Reports new low back pain]]. [[IV site without redness]]. [[Blood bag label matches the wristband]]. [[Oxygen saturation 97% on room air]]. [[Urine dark red in the catheter bag]].",
    spans: [
      { text: "Temperature 38.4°C (101.1°F)", why: "A new fever during a transfusion can signal a reaction." },
      { text: "Heart rate 118/minute", why: "The heart rate rose from 82/minute, which suggests a reaction." },
      { text: "BP 96/58 mmHg", why: "The BP fell from 124/76 mmHg, a sign of a serious reaction." },
      { text: "Reports new low back pain", why: "Back pain can signal red cells breaking down in the blood." },
      { text: "IV site without redness", why: "A clean IV site is expected and needs no action." },
      { text: "Blood bag label matches the wristband", why: "A matching label is expected. It does not rule out a reaction." },
      { text: "Oxygen saturation 97% on room air", why: "A saturation of 97% is within the expected range." },
      { text: "Urine dark red in the catheter bag", why: "Dark red urine suggests hemoglobin from destroyed red cells." },
    ],
    correct: [0, 1, 2, 3, 7],
  },
  {
    ...meta("rn-s17-32", {
      topic: "Gravity drip rate for blood",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The prescription is 1 unit of packed red blood cells with a volume of 300 mL to infuse over 2 hours by gravity. The blood administration set delivers 10 drops/mL. At how many drops per minute should the nurse regulate the infusion?",
      rationale:
        "The volume is 300 mL and the set delivers 10 drops/mL, so the unit holds 3000 drops. Two hours is 120 minutes. Dividing 3000 drops by 120 minutes gives 25 drops/minute. The unit finishes well inside the time limit for blood.",
      calc: { expr: "300 * 10 / (2 * 60)", answer: 25, unit: "drops/minute", round: 0, steps: ["300 * 10 = 3000", "2 * 60 = 120", "3000 / 120 = 25"] },
      sources: [AABB, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "13 drops/minute", why: "This rate spreads the unit over twice the prescribed time." },
      { text: "25 drops/minute", why: "3000 drops divided by 120 minutes is 25 drops/minute." },
      { text: "50 drops/minute", why: "This rate would finish the unit in half the prescribed time." },
      { text: "150 drops/minute", why: "150 is the hourly volume in mL. It is not a drop rate." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-33", {
      topic: "Low calcium after massive transfusion",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with trauma received 8 units of packed red blood cells over 2 hours. The client now reports tingling around the mouth and in the fingers and has muscle twitching. Temperature is 36.9°C (98.4°F). Ionized calcium is 3.6 mg/dL (0.9 mmol/L). Which explanation best accounts for these findings?",
      rationale:
        "Stored blood contains citrate to stop it clotting. Citrate binds calcium in the client's blood. With many units given fast, the liver cannot clear the citrate quickly enough. Ionized calcium falls below 4.5 mg/dL and causes tingling and twitching. Stored red cells release potassium, so potassium tends to rise, not fall. The temperature is normal.",
      refs: ["Normal ionized calcium is 4.5 mg/dL (1.12 mmol/L) or higher."],
      sources: [AABB, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report ionized calcium in mmol/L only. The Medical Council of Canada lists 1.14 to 1.28 mmol/L as the adult range, so 0.9 mmol/L is low.",
    }),
    kind: "mc",
    options: [
      { text: "Citrate in the stored blood binds calcium", why: "Rapid transfusion delivers citrate faster than the liver clears it, so ionized calcium falls." },
      { text: "Stored red cells cause potassium loss", why: "Stored red cells leak potassium, so the level tends to rise." },
      { text: "Cold blood has lowered the body temperature", why: "The temperature is 36.9°C, so hypothermia is not the cause." },
      { text: "Donor antibodies have destroyed red cells", why: "Hemolysis causes fever, pain and dark urine, not perioral tingling." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-34", {
      topic: "Plasma group compatibility",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with blood group B, Rh positive, is to receive fresh frozen plasma for bleeding. The nurse checks the unit that arrives from the blood bank. Which plasma group is compatible for this client?",
      rationale:
        "Plasma carries the donor's antibodies. The client's red cells carry the B antigen, so donor plasma must not contain anti-B. Group AB plasma has neither anti-A nor anti-B, so any recipient can receive it. Group A and group O plasma both contain anti-B. Rh matching is not the key concern for plasma.",
      sources: [AABB],
    }),
    kind: "mc",
    options: [
      { text: "Group A plasma", why: "Group A plasma contains anti-B, which attacks the client's red cells." },
      { text: "Group O plasma", why: "Group O plasma contains both anti-A and anti-B." },
      { text: "Any group that is Rh matched", why: "Rh matching does not prevent a reaction from donor anti-B." },
      { text: "Group AB plasma", why: "AB plasma has no anti-A or anti-B, so it is safe for a group B client." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-35", {
      topic: "Bedside checks before transfusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse and a second qualified person prepare to start a unit of packed red blood cells. Which checks should they complete together at the bedside? Select all that apply.",
      rationale:
        "The bedside check prevents a wrong blood transfusion. Two identifiers on the wristband are matched to the unit tag. The unit number and the blood group and Rh are matched between the bag and the tag. The expiry time is checked. A room number is not an identifier. A client's own report of blood type is not reliable. Blood is not left to warm at the bedside.",
      sources: [AABB, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Name and birth date match the unit tag", why: "Two identifiers link the client to the unit." },
      { text: "Room number matches the requisition", why: "A room number is not a client identifier." },
      { text: "Unit number matches the blood bank tag", why: "The unit number links the bag to the crossmatch." },
      { text: "Group and Rh on the bag match the tag", why: "Matching group and Rh prevents an ABO mismatch." },
      { text: "The unit has not passed its expiry time", why: "Expired blood is not given." },
      { text: "The unit has warmed at the bedside for 1 hour", why: "Blood is not left to sit at room temperature before use." },
      { text: "The client states their own blood type", why: "A client's recall of blood type is not a reliable check." },
    ],
    correct: [0, 2, 3, 4],
  },
  {
    ...meta("rn-s17-36", {
      topic: "Breathlessness during a second unit of blood",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "An 84-year-old client with heart failure is receiving a second unit of packed red blood cells that started 90 minutes ago. The client is now short of breath with crackles in both lung bases and distended neck veins. BP is 172/94 mmHg, up from 138/78 mmHg. Heart rate is 108/minute. Oxygen saturation is 89%. Temperature is unchanged at 37.0°C (98.6°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Heart failure, older age and a second unit put this client at risk of volume overload. Crackles, distended neck veins, a rising BP and a saturation of 89% with no fever fit transfusion-associated circulatory overload. The transfusion is stopped and the client sits upright to ease breathing. A diuretic is often prescribed. Lung injury from a transfusion tends to cause fever and low BP. Oxygen saturation and lung sounds show the response.",
      sources: [AABB, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Acute hemolytic reaction", why: "Hemolysis causes fever and low BP. The BP here is rising and the temperature is unchanged." },
      { text: "Circulatory overload", why: "Crackles, distended neck veins and rising BP in heart failure fit volume overload." },
      { text: "Acute lung injury", why: "Transfusion lung injury tends to cause fever and low BP, not distended neck veins." },
      { text: "Anaphylactic reaction", why: "Anaphylaxis causes hives, wheeze and low BP. The BP here is high." },
    ],
    actions: [
      { text: "Stop the transfusion", why: "Stopping the unit halts further volume." },
      { text: "Give a 0.9% saline bolus", why: "More fluid would worsen the overload." },
      { text: "Sit the client upright", why: "Sitting upright reduces venous return and eases breathing." },
      { text: "Give acetaminophen", why: "There is no fever, and acetaminophen does not treat overload." },
      { text: "Lay the client flat", why: "Lying flat increases venous return and worsens breathlessness." },
    ],
    parameters: [
      { text: "Blood culture results", why: "There is no fever, so bacterial contamination is unlikely." },
      { text: "Oxygen saturation", why: "Saturation shows whether gas exchange improves." },
      { text: "Urine glucose", why: "Urine glucose does not reflect volume overload." },
      { text: "Lung sounds", why: "Clearing crackles show fluid leaving the lungs." },
      { text: "Hemoglobin A1C", why: "A1C reflects long-term glucose and does not guide this care." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s17-37", {
      topic: "Giving a platelet transfusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client receiving chemotherapy has a platelet count of 8000/mm3 and bleeding gums. The primary health care provider prescribes 1 unit of apheresis platelets. Which two actions should the nurse take? Select two.",
      rationale:
        "Platelets are stored at room temperature with gentle agitation. Cold storage damages them. The unit is given through a blood administration set with a filter. It is started soon after it arrives because platelets lose function while waiting. A long infusion is not needed. Dextrose solutions are not given with blood components. Heat damages the platelets.",
      sources: [AABB, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report the platelet count as x 10^9/L, so this count reads 8 x 10^9/L. The Medical Council of Canada adult range is 130 to 380 x 10^9/L.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Store the unit in the unit refrigerator", why: "Cold storage damages platelets. They are kept at room temperature." },
      { text: "Use a blood set with a filter", why: "A filtered blood set removes clots and debris from the unit." },
      { text: "Start the unit soon after it arrives", why: "Platelets lose function if the unit is left waiting." },
      { text: "Run the unit slowly over 6 hours", why: "Platelets run over a short period and must finish within the time limit." },
      { text: "Share the line with dextrose 5% in water", why: "Dextrose solutions are not given with blood components." },
      { text: "Warm the unit in a basin of hot water", why: "Heat damages platelets and is not an approved warming method." },
    ],
    correct: [1, 2],
  },
  {
    ...meta("rn-s17-38", {
      topic: "Starting furosemide in an older adult",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 81-year-old client with heart failure starts furosemide 40 mg by mouth once daily. Which measures should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Daily weights at the same time show fluid loss or gain. Furosemide causes potassium loss, so serum potassium is monitored. Volume loss can cause orthostatic hypotension and falls, so the client rises slowly. A morning dose avoids night-time voiding. Potassium-rich foods help offset losses. Heart failure care does not call for a strict limit of 500 mL a day.",
      sources: [LEHNE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Weigh the client daily at the same time", why: "Daily weights track fluid loss and response to the diuretic." },
      { text: "Give the dose at bedtime", why: "A bedtime dose causes night-time voiding and raises fall risk." },
      { text: "Monitor serum potassium", why: "Loop diuretics cause potassium loss." },
      { text: "Teach the client to rise slowly", why: "Volume loss can cause orthostatic hypotension and falls." },
      { text: "Restrict potassium-rich foods", why: "Potassium-rich foods help replace what furosemide removes." },
      { text: "Limit fluids to 500 mL a day", why: "A limit this strict risks dehydration and is not standard." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s17-39", {
      topic: "Electrolyte trend after starting parenteral nutrition",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A 58-year-old client with severe malnutrition after 3 weeks of minimal intake started parenteral nutrition on day 1. The nurse reviews the laboratory results. Based on the trend, which complication is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Day 1", "Day 2", "Day 3"],
            rows: [
              ["Phosphorus (mg/dL)", "3.4", "2.3", "1.4"],
              ["Potassium (mEq/L)", "4.0", "3.4", "2.9"],
              ["Magnesium (mEq/L)", "1.8", "1.5", "1.2"],
              ["Glucose (mg/dL)", "112", "148", "164"],
            ],
          },
        },
      ],
      rationale:
        "Phosphorus fell from 3.4 to 1.4, potassium from 4.0 to 2.9 and magnesium from 1.8 to 1.2 within 3 days of starting nutrition. Feeding raises insulin, which drives these electrolytes into cells. A fall of more than 30% is severe refeeding syndrome. The glucose of 164 is raised but far from a hyperosmolar state. No fever or site change suggests infection.",
      refs: [
        "ASPEN defines refeeding syndrome as a fall in serum phosphorus, potassium or magnesium within 5 days of restarting nutrition.",
        "A fall of more than 30% in any of these electrolytes is severe.",
      ],
      sources: [REFEEDING, PN_SAFETY, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report these results in SI units only, so phosphate falls from 1.10 to 0.45 mmol/L and magnesium from 0.90 to 0.60 mmol/L. Glucose on day 3 reads 9.1 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Catheter-related infection", why: "No fever or site change is given, and infection does not explain the electrolyte falls." },
      { text: "Hyperosmolar hyperglycemic state", why: "A glucose of 164 is well below the level of a hyperosmolar state." },
      { text: "Refeeding syndrome", why: "Falling phosphorus, potassium and magnesium after feeding starts fit refeeding syndrome." },
      { text: "Fluid volume excess", why: "Fluid excess would dilute all values, and sodium changes are not shown." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-40", {
      topic: "Chills after flushing a central line",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client receives home antibiotics through a tunneled central venous catheter. Twenty minutes after the nurse flushes the line, the client has shaking chills. Temperature is 39.2°C (102.6°F), heart rate is 112/minute and BP is 104/62 mmHg. The exit site is dry with no redness. Lung sounds are clear. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Chills that start soon after a flush, with a fever of 39.2°C, suggest organisms in the catheter were pushed into the blood. This points to a catheter-related bloodstream infection. A dry site with no redness argues against an exit site infection. Clear lungs argue against pneumonia. Blood cultures from the catheter and a peripheral vein are drawn before antibiotics change.",
      sources: [CDC_CATHETER, INS],
    }),
    kind: "cloze",
    template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
    scoring: "triad",
    blanks: [
      {
        options: [
          { text: "bloodstream infection", why: "Chills after a flush and a high fever point to organisms in the blood." },
          { text: "exit site infection", why: "The site is dry with no redness." },
          { text: "aspiration pneumonia", why: "The lungs are clear and no aspiration event is described." },
          { text: "air embolism", why: "Air embolism causes sudden breathlessness and chest pain, not fever." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "chills after the flush", why: "Chills soon after a flush suggest organisms released from the catheter." },
          { text: "a dry exit site", why: "A dry site argues against local infection and is not a warning sign." },
          { text: "clear lung sounds", why: "Clear lungs argue against a lung source." },
          { text: "antibiotics at home", why: "Receiving antibiotics is the reason for the line, not a sign of infection." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "a temperature of 39.2°C", why: "A high fever supports a bloodstream infection." },
          { text: "no redness at the exit site", why: "The absence of redness does not support infection." },
          { text: "lung sounds that are clear", why: "Clear lungs point away from a lung source." },
        ],
        correct: 0,
      },
    ],
  },
];
