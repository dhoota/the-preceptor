import type { Item } from "@/engine/types";
import { AAP_BILI, ASPAN, PCAC, HINKLE, NPIAP, POTTER, WONG, meta } from "./common";

/** s21 items 31 to 40. Immobility complications, casts, muscle injury, temperature and newborn phototherapy. */
export const PART4: Item[] = [
  {
    ...meta("rn-s21-31", {
      topic: "Matching immobility risks to prevention",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client will be on bed rest for several weeks after a complex pelvic fracture. For each complication, drag the nursing measure that best prevents it.",
      rationale:
        "Scheduled repositioning relieves pressure over bony areas. High-top boots or a foot splint hold the ankle at a right angle and prevent foot drop. Ankle pumps and compression devices keep venous blood moving. Deep breathing and incentive spirometry open the alveoli. Fluid restriction thickens the blood and urine. Knees flexed on pillows for long periods cause knee flexion contractures.",
      sources: [HINKLE, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Pressure injury", "Plantar flexion contracture", "Deep vein thrombosis", "Atelectasis"],
    tokens: [
      { text: "Deep breathing with an incentive spirometer", why: "Deep breaths expand the alveoli and prevent collapse." },
      { text: "Repositioning on a set schedule", why: "Regular turns relieve pressure over bony areas." },
      { text: "Ankle pumps and compression devices", why: "Muscle action and compression keep venous blood moving." },
      { text: "High-top boots or a foot splint", why: "These hold the ankle at a right angle and prevent foot drop." },
      { text: "Restricting oral fluids to 1 L each day", why: "Low intake thickens blood and urine and raises clot and stone risk." },
      { text: "Keeping both knees flexed on pillows all day", why: "Long knee flexion causes knee contractures and slows venous return." },
    ],
    correct: [1, 3, 2, 0],
  },
  {
    ...meta("rn-s21-32", {
      topic: "Care of a new plaster cast",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a new plaster long arm cast for a forearm fracture. The cast is still damp. Which actions should the nurse include? Select all that apply.",
      rationale:
        "Elevating the arm above the heart limits swelling in the first days. A damp cast is handled with the palms because fingertips leave dents that press on the skin. The cast is left open to air so it dries evenly. Finger color, warmth and movement show circulation and nerve function. A hard surface flattens a damp cast. A plastic cover traps moisture. Objects pushed under the cast can break the skin.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Elevate the arm on pillows above the heart", why: "Elevation reduces swelling under the cast." },
      { text: "Rest the damp cast on a firm table surface", why: "A hard surface flattens the damp cast and creates pressure points." },
      { text: "Handle the damp cast with the palms", why: "Palms avoid dents that press on the skin." },
      { text: "Cover the cast with a plastic bag while it dries", why: "Plastic traps moisture and slows drying." },
      { text: "Use a thin ruler under the cast to relieve itching", why: "Objects under the cast can scratch the skin and cause infection." },
      { text: "Leave the cast uncovered to air dry", why: "Air lets the plaster dry evenly." },
      { text: "Check finger color, warmth and movement", why: "These checks detect poor circulation or nerve compression." },
    ],
    correct: [0, 2, 5, 6],
  },
  {
    ...meta("rn-s21-33", {
      topic: "Muscle breakdown after a long lie",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 79-year-old client is brought in after lying on the kitchen floor for about 20 hours after a fall. The client is alert. A hip X-ray shows no fracture. BP is 108/64 mmHg and heart rate is 104/minute. The catheter drains dark brown urine, 20 mL in the first hour. Creatine kinase is 38 000 units/L. Potassium is 5.9 mEq/L (5.9 mmol/L). Creatinine is 1.9 mg/dL (168 micromol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Twenty hours of pressure on muscle, a creatine kinase of 38 000 units/L and dark brown urine fit rhabdomyolysis. Myoglobin injures the kidneys, shown by the creatinine of 1.9 mg/dL and output of 20 mL in an hour. Large volumes of IV 0.9% sodium chloride flush the kidneys. Potassium released from muscle is 5.9 mEq/L, so the heart rhythm is monitored.",
      canada: "Canadian labs report these results in SI units only, so potassium reads 5.9 mmol/L and creatinine 168 micromol/L. The Medical Council of Canada lists potassium at 3.5 to 5.1 mmol/L.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hip fracture", why: "The hip X-ray shows no fracture." },
      { text: "Rhabdomyolysis", why: "A long lie, dark brown urine and a creatine kinase of 38 000 units/L fit muscle breakdown." },
      { text: "Urinary tract infection", why: "Infection does not raise creatine kinase to 38 000 units/L." },
      { text: "Hemorrhagic shock", why: "No source of bleeding is described and the BP is 108/64 mmHg." },
    ],
    actions: [
      { text: "Infuse IV 0.9% sodium chloride as prescribed", why: "Fluids flush myoglobin and protect the kidneys." },
      { text: "Give IV potassium chloride as a supplement", why: "Potassium is already 5.9 mEq/L. More would be dangerous." },
      { text: "Place the client on a cardiac monitor", why: "A potassium of 5.9 mEq/L can cause dysrhythmias." },
      { text: "Give oral ibuprofen for the muscle pain", why: "NSAIDs can worsen the kidney injury." },
      { text: "Restrict IV fluids to protect the heart", why: "The client needs volume. Restriction worsens kidney injury." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase tracks the pancreas, not muscle or kidney injury." },
      { text: "Hourly urine output", why: "Output shows whether fluids are protecting the kidneys." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide this care." },
      { text: "Serum potassium level", why: "Potassium can rise further as muscle breaks down." },
      { text: "Peak expiratory flow rate", why: "Peak flow measures airway narrowing and has no role here." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s21-34", {
      topic: "Low temperature after surgery",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client arrives in the postanesthesia care unit after a 4-hour open abdominal operation. The client is shivering. Temperature is 35.2°C (95.4°F). Which action should the nurse take?",
      rationale:
        "A temperature of 35.2°C after a long open operation is hypothermia. Shivering raises oxygen use, and low body heat slows wound healing and clotting. Active warming with a forced-air blanket raises the temperature fastest. Room-temperature fluids cool the client further. Acetaminophen lowers fever and has no role here.",
      refs: ["Perioperative normothermia is a core temperature of 36°C (96.8°F) or higher."],
      sources: [ASPAN],
    }),
    kind: "mc",
    options: [
      { text: "Give acetaminophen for the chills", why: "Acetaminophen treats fever. This client is hypothermic." },
      { text: "Infuse a room-temperature fluid bolus", why: "Cool fluid lowers the body temperature further." },
      { text: "Apply a forced-air warming blanket", why: "Active warming corrects hypothermia and reduces shivering." },
      { text: "Recheck the temperature in 4 hours", why: "The low temperature needs treatment now, not a delayed check." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-35", {
      topic: "Shivering during targeted temperature management",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is receiving targeted temperature management at 36°C (96.8°F) after a cardiac arrest. The client begins to shiver. SpO2 falls from 97% to 93% and heart rate rises from 78 to 104/minute. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Shivering is the body's defense against cooling. It raises oxygen consumption and heat production, which works against the goal of the therapy. The fall in SpO2 and rise in heart rate reflect that demand. The nurse treats shivering with the prescribed measures, such as sedation, analgesia or skin warming. Stopping the device lets fever return and harms the brain.",
      sources: [PCAC, HINKLE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "Shivering raises {0}, so the nurse should {1}.",
    blanks: [
      {
        options: [
          { text: "oxygen consumption", why: "Muscle activity in shivering sharply increases oxygen use." },
          { text: "the seizure threshold", why: "Shivering does not change the seizure threshold." },
          { text: "urine output", why: "Shivering does not increase urine output." },
          { text: "serum sodium", why: "Shivering has no direct effect on serum sodium." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "stop the cooling device", why: "Stopping lets the temperature rise and allows fever, which harms the brain." },
          { text: "treat shivering as prescribed", why: "Prescribed sedation, analgesia or skin warming control shivering." },
          { text: "give a cold fluid bolus", why: "Extra cooling worsens shivering." },
          { text: "reduce oxygen flow", why: "The SpO2 is falling, so less oxygen would worsen hypoxemia." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s21-36", {
      topic: "Compression devices with a swollen calf",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client on day 3 of bed rest after a pelvic fracture has a prescription for sequential compression devices on both legs. Before applying them, the nurse finds the left calf 3 cm larger than the right, warm and tender. What should the nurse do?",
      rationale:
        "A swollen, warm, tender calf after a pelvic fracture and bed rest suggests a deep vein thrombosis. Compressing a leg with a possible clot could dislodge it. The nurse holds the device on that leg and reports the finding so the provider can order imaging. Massage carries the same risk as compression.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Apply both devices and recheck in 1 hour", why: "Compression on a leg with a possible clot risks dislodging it." },
      { text: "Massage the left calf to ease the pain", why: "Massage can dislodge a clot." },
      { text: "Apply the left device at a lower pressure setting", why: "Any compression on a leg with a suspected clot is withheld until it is assessed." },
      { text: "Hold the left device and notify the provider", why: "The findings suggest a clot that needs imaging before compression." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s21-37", {
      topic: "Kidney stone risk on bed rest",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client has been on bed rest for 3 weeks after a spinal injury and has no fluid restriction. Which measure should the nurse include to lower the risk of kidney stones?",
      rationale:
        "Bed rest draws calcium out of bone into the urine. Urine also pools in the kidneys when the client lies flat. A fluid intake of 2 to 3 L each day dilutes the urine and flushes calcium out. Limiting fluids concentrates the urine. An indwelling catheter raises infection risk and does not prevent stones.",
      refs: ["Unless restricted, adults on bed rest are encouraged to drink 2 to 3 L of fluid each day."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Limit fluids to reduce the need to void", why: "Less fluid concentrates the urine and promotes stones." },
      { text: "Insert an indwelling urinary catheter", why: "A catheter adds infection risk and does not stop stone formation." },
      { text: "Encourage 2 to 3 L of fluid each day", why: "Dilute urine carries calcium out before it forms stones." },
      { text: "Keep the client flat on the back", why: "Lying flat worsens urinary stasis. Position changes help drainage." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-38", {
      topic: "First time out of bed after bed rest",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has been on bed rest for 10 days after a pelvic fracture and will walk for the first time today. Which two actions help prevent a fall from orthostatic hypotension? Select two.",
      rationale:
        "Bed rest weakens the reflexes that keep BP steady on standing. Ankle pumps push blood back to the heart before the client rises. Sitting at the edge of the bed lets the body adjust in stages. Standing fast drops the BP suddenly. A large meal draws blood to the gut. Holding the breath to push up can drop the BP after the strain.",
      sources: [POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Stand the client up quickly to save energy", why: "Rapid standing gives no time for the BP to adjust." },
      { text: "Have the client do ankle pumps first", why: "Leg muscle action improves venous return before standing." },
      { text: "Serve a large meal just before the walk", why: "Blood shifts to the gut after a large meal and can lower BP." },
      { text: "Coach the client to hold the breath while rising", why: "Straining against a closed airway can drop the BP and cause fainting." },
      { text: "Dangle the legs before standing", why: "Sitting first lets the circulation adjust in stages." },
      { text: "Let the client walk alone to the hallway", why: "The first walk needs staff support in case of dizziness." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s21-39", {
      topic: "Complications in a bedbound resident",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews a weekly note on an 84-year-old long-term care resident who has been bedbound since a stroke 2 months ago. Click to highlight the findings that need follow-up.",
      rationale:
        "Redness over the sacrum that does not blanch is a stage 1 pressure injury. No bowel movement for 5 days is constipation from immobility. Crackles at the right base with a temperature of 38.1°C suggest pneumonia. Fingers curled tightly into the palm show a developing contracture. Intact heels, good intake, clear urine and a regular rate of 16/minute need no follow-up.",
      sources: [NPIAP, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Sacral skin red and does not blanch with pressure]]. [[Heels intact and pale pink]]. [[Last bowel movement 5 days ago]]. [[Eats 75% of each meal with help]]. [[Crackles at the right lung base]]. [[Temperature 38.1°C (100.6°F)]]. [[Urine clear and yellow]]. [[Right fingers curled tightly into the palm]]. [[Respirations 16/minute and regular]].",
    spans: [
      { text: "Sacral skin red and does not blanch with pressure", why: "Nonblanching redness is a stage 1 pressure injury." },
      { text: "Heels intact and pale pink", why: "Intact heels need no follow-up." },
      { text: "Last bowel movement 5 days ago", why: "Five days without a stool shows constipation." },
      { text: "Eats 75% of each meal with help", why: "This intake is adequate and needs no follow-up." },
      { text: "Crackles at the right lung base", why: "Crackles in a bedbound resident suggest pneumonia or retained secretions." },
      { text: "Temperature 38.1°C (100.6°F)", why: "Fever with crackles supports pneumonia." },
      { text: "Urine clear and yellow", why: "Clear yellow urine is expected." },
      { text: "Right fingers curled tightly into the palm", why: "A tight fist shows a developing flexion contracture." },
      { text: "Respirations 16/minute and regular", why: "This rate is normal." },
    ],
    correct: [0, 2, 4, 5, 7],
  },
  {
    ...meta("rn-s21-40", {
      topic: "Newborn care during phototherapy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A term newborn on day 3 starts phototherapy for a high bilirubin level. Which action should the nurse include in the plan of care?",
      rationale:
        "The lights can damage the retina, so eye shields stay on while the lights are on. Skin is left uncovered except for the diaper area so the light reaches as much skin as possible. Lotion can cause burns under the lights. Regular feeding helps the newborn pass bilirubin in the stool.",
      sources: [WONG, AAP_BILI],
    }),
    kind: "mc",
    options: [
      { text: "Apply lotion to prevent dry skin", why: "Lotion can burn the skin under the lights." },
      { text: "Dress the newborn in a shirt and hat", why: "Clothing blocks the light from the skin." },
      { text: "Space out feedings to limit stools", why: "Feeding promotes bilirubin loss in the stool." },
      { text: "Cover the eyes with shields", why: "Shields protect the retina from the bright light." },
    ],
    correct: 3,
  },
];
