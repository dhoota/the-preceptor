import type { Item } from "@/engine/types";
import { ADA_GLYCEMIC, ADA_HOSPITAL, ADA_TECH, ALDO, HINKLE, KDIGO_AKI, VARICES, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s24-41", {
      topic: "Decline after a lucid period following a head blow",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 22-year-old client was struck on the side of the head by a baseball 3 hours ago. The client lost consciousness briefly, then was alert and talking on arrival. Now the client is hard to rouse. The right pupil is 6 mm and slow to react. The left pupil is 3 mm and brisk. Which condition is most likely?",
      rationale:
        "A blow to the side of the head can tear the middle meningeal artery. The client was briefly unconscious, then alert, and is now hard to rouse. A right pupil of 6 mm that reacts slowly signals pressure on the third cranial nerve. This lucid interval followed by rapid decline fits an epidural hematoma. It needs emergency surgery.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Concussion without bleeding", why: "A concussion does not cause a falling level of consciousness with a new dilated pupil after a lucid period." },
      { text: "Subarachnoid hemorrhage from an aneurysm", why: "Aneurysm rupture brings a sudden severe headache, usually without a blow to the head." },
      { text: "Chronic subdural hematoma", why: "A chronic subdural hematoma develops over weeks, often in older adults, not within hours." },
      { text: "Epidural hematoma", why: "Brief unconsciousness, a lucid period and then rapid decline with one dilated pupil fit arterial bleeding outside the dura." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s24-42", {
      topic: "Rising glucose and ketones on an insulin pump",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 26-year-old client with type 1 diabetes uses an insulin pump with rapid-acting insulin only. Fingerstick glucose is 312 mg/dL (17.3 mmol/L), up from 140 mg/dL (7.8 mmol/L) 3 hours ago, despite a correction bolus. Urine ketones are moderate. The infusion site is red. What should the nurse advise first?",
      rationale:
        "A pump with only rapid-acting insulin leaves no background insulin if delivery stops. Glucose rose from 140 to 312 mg/dL despite a correction bolus, and ketones are moderate. The red site suggests a site or cannula problem. The client gives insulin by injection, then changes the infusion set and site. Glucose and ketones are rechecked closely.",
      sources: [ADA_TECH, ADA_GLYCEMIC],
    }),
    kind: "mc",
    options: [
      { text: "Inject insulin by pen or syringe", why: "Rising glucose with ketones despite a bolus suggests the pump is not delivering insulin. An injection bypasses the failed site." },
      { text: "Give a second bolus through the pump", why: "Another pump bolus may also fail to reach the client if the site or tubing is blocked." },
      { text: "Recheck the glucose in 3 hours", why: "Without long-acting insulin, a pump failure can lead to ketoacidosis within hours. Waiting is unsafe." },
      { text: "Stop insulin until ketones clear", why: "Stopping insulin speeds ketone production and can cause ketoacidosis." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-43", {
      topic: "Care during low urine output after septic shock",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 63-year-old client has acute kidney injury after septic shock. Urine output has been 15 mL per hour for 8 hours. Serum potassium is 5.8 mEq/L (5.8 mmol/L). Which measures should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "An output of 15 mL per hour for 8 hours shows oliguric kidney injury. Care focuses on fluid balance, potassium and drug safety. Daily weights and hourly intake and output guide fluid limits. Nephrotoxic drugs are reviewed. With potassium at 5.8 mEq/L, potassium intake is limited and the ECG is watched. Magnesium products are avoided.",
      sources: [KDIGO_AKI, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Encourage 3 L of oral fluid each day", why: "Forced fluids in oliguria can cause fluid overload. Intake is matched to output and losses." },
      { text: "Weigh the client daily on the same scale", why: "Daily weight is the best measure of fluid balance in kidney injury." },
      { text: "Give magnesium hydroxide for constipation", why: "Magnesium is cleared by the kidneys and can build up to toxic levels." },
      { text: "Record intake and output hourly", why: "Hourly output tracks the course of the kidney injury." },
      { text: "Review drugs for kidney-toxic agents", why: "Stopping or adjusting nephrotoxic and renally cleared drugs protects the kidneys." },
      { text: "Offer potassium-rich foods such as bananas", why: "Potassium is already 5.8 mEq/L and cannot be excreted well." },
      { text: "Monitor the ECG for peaked T waves", why: "Peaked T waves are an early ECG sign of dangerous hyperkalemia." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s24-44", {
      topic: "Matching stroke deficits to brain regions",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse assesses 3 clients after a stroke. Drag the finding that best matches the brain region affected in each client.",
      rationale:
        "In most people the left hemisphere holds the language centers, so a left-sided stroke causes aphasia. A right hemisphere stroke often causes neglect of the left side. Cerebellar stroke causes ataxia and an unsteady, wide-based gait. Pinpoint pupils with coma suggest a pontine lesion.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Left cerebral hemisphere", "Right cerebral hemisphere", "Cerebellum"],
    tokens: [
      { text: "Neglect of the left side of the body", why: "Neglect of the left side reflects damage to the right parietal lobe." },
      { text: "Unsteady, wide-based gait", why: "The cerebellum coordinates movement, so damage causes an unsteady, wide-based gait." },
      { text: "Trouble speaking and understanding", why: "The language centers sit in the left hemisphere in most people." },
      { text: "Loss of the sense of smell", why: "Loss of smell is not a typical deficit of these three stroke sites." },
      { text: "Pinpoint pupils with coma", why: "Pinpoint pupils with coma point to a lesion in the pons." },
    ],
    correct: [2, 0, 1],
  },
  {
    ...meta("rn-s24-45", {
      topic: "Resistant hypertension with low potassium",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 46-year-old client has BP readings near 168/100 mmHg despite three antihypertensive drugs. Serum potassium is 2.9 mEq/L (2.9 mmol/L) and sodium is 144 mEq/L (144 mmol/L). The client reports muscle weakness and leg cramps. Which condition best explains these findings?",
      rationale:
        "BP near 168/100 mmHg on three drugs is resistant hypertension. A potassium of 2.9 mEq/L with a high-normal sodium points to excess aldosterone. Aldosterone makes the kidney keep sodium and lose potassium. Low potassium causes the weakness and cramps. Resistant hypertension is a reason to screen for primary aldosteronism.",
      sources: [ALDO],
    }),
    kind: "mc",
    options: [
      { text: "Cushing syndrome", why: "Cushing syndrome can raise BP but shows weight gain, striae and a round face, which the stem does not give." },
      { text: "Primary aldosteronism", why: "Excess aldosterone retains sodium and wastes potassium, causing resistant hypertension and low potassium." },
      { text: "Pheochromocytoma", why: "Pheochromocytoma causes spells of headache, sweating and palpitations rather than steady low potassium." },
      { text: "Adrenal insufficiency", why: "Adrenal insufficiency causes low BP and high potassium, the opposite of these findings." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-46", {
      topic: "Priority finding in motor neuron disease",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 61-year-old client with amyotrophic lateral sclerosis is on a neurology unit. Which finding should the nurse report first?",
      rationale:
        "Amyotrophic lateral sclerosis weakens the respiratory muscles over time. Breathlessness when lying flat points to diaphragm weakness. It can lead to respiratory failure and needs prompt report. Twitching, stable speech changes and a small weight loss are expected or less urgent.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Muscle twitching in both arms", why: "Fasciculations are an expected sign of lower motor neuron loss." },
      { text: "Slurred speech, unchanged", why: "Stable slurred speech reflects known bulbar weakness and is not a new threat." },
      { text: "Breathless when lying flat", why: "Breathlessness when flat signals diaphragm weakness and a risk of respiratory failure." },
      { text: "Weight down 1 kg this month", why: "A small weight loss needs a nutrition review but is not an urgent threat." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-47", {
      topic: "Expected findings with iron loss from heavy periods",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 34-year-old client with heavy menstrual periods has a hemoglobin of 8.9 g/dL (89 g/L) and a low serum ferritin. Which findings would the nurse expect? Select all that apply.",
      rationale:
        "Heavy periods, a hemoglobin of 8.9 g/dL and a low ferritin point to iron deficiency anemia. Expected findings include pale conjunctivae, a fast heart rate with exertion, spoon-shaped nails and pica such as ice craving. Yellow sclera and an enlarged spleen suggest hemolysis. Numb feet suggest B12 deficiency.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Yellow-tinged sclera", why: "Yellow sclera point to red cell breakdown, not iron deficiency." },
      { text: "Spoon-shaped nails", why: "Spoon-shaped nails can develop with long-standing iron deficiency." },
      { text: "Craving to chew ice", why: "Craving ice, a form of pica, is linked to iron deficiency." },
      { text: "Numbness in both feet", why: "Numb feet suggest vitamin B12 deficiency with nerve damage." },
      { text: "Pale conjunctivae", why: "Low hemoglobin reduces the red color of the conjunctivae." },
      { text: "Fast heart rate with exertion", why: "The heart speeds up to deliver oxygen when hemoglobin is low." },
      { text: "Enlarged, tender spleen", why: "An enlarged spleen suggests hemolysis or a blood cancer, not iron loss." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s24-48", {
      topic: "Afternoon glucose rise on morning prednisone",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 58-year-old client without diabetes started prednisone 60 mg each morning for a COPD flare 2 days ago. Fasting glucose is 104 mg/dL (5.8 mmol/L). Glucose before dinner is 262 mg/dL (14.5 mmol/L). Which explanation fits this pattern?",
      rationale:
        "Prednisone given in the morning has its greatest effect on glucose in the afternoon and evening. It raises glucose by increasing liver output and insulin resistance. The pattern is a near-normal fasting glucose of 104 mg/dL and a high value of 262 mg/dL before dinner. Insulin plans target the afternoon and evening.",
      sources: [ADA_HOSPITAL],
    }),
    kind: "mc",
    options: [
      { text: "New-onset type 1 diabetes", why: "Type 1 diabetes raises fasting glucose too. The fasting value of 104 mg/dL argues against it." },
      { text: "Effect of the morning prednisone", why: "Morning prednisone raises glucose most in the afternoon and evening, with near-normal fasting values." },
      { text: "Dawn phenomenon from night hormones", why: "The dawn phenomenon raises the morning glucose. Here the morning value is near normal." },
      { text: "Rebound after a low overnight glucose", why: "Rebound follows nighttime lows and shows up as a high morning glucose, which is absent here." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-49", {
      topic: "Preventing a first variceal bleed",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with cirrhosis has large esophageal varices that have not bled. Which instructions should the nurse include in discharge teaching? Select all that apply.",
      rationale:
        "Large varices can rupture and bleed heavily. A nonselective beta-blocker lowers portal pressure and cuts the risk of a first bleed. Alcohol and NSAIDs are avoided. Straining and heavy lifting raise pressure in the varices. Salt is limited to control fluid. Black stools need prompt report.",
      sources: [VARICES, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Take ibuprofen for joint pain", why: "NSAIDs raise the risk of GI bleeding and kidney injury in cirrhosis." },
      { text: "Lift heavy weights to build strength", why: "Heavy lifting raises abdominal pressure and pressure in the varices." },
      { text: "Choose salty snacks between meals", why: "Salty foods worsen fluid retention in cirrhosis." },
      { text: "Avoid all alcoholic drinks", why: "Alcohol worsens liver damage and portal hypertension." },
      { text: "Take the prescribed beta-blocker daily", why: "A nonselective beta-blocker lowers portal pressure and the risk of a first bleed." },
      { text: "Report black, tarry stools", why: "Black, tarry stools can signal bleeding from varices." },
      { text: "Use a stool softener to avoid straining", why: "Avoiding straining limits sudden rises in abdominal and variceal pressure." },
    ],
    correct: [3, 4, 5, 6],
  },
  {
    ...meta("rn-s24-50", {
      topic: "Response to oral iron",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 1,
      stem: "A client with iron deficiency anemia started oral ferrous sulfate 4 weeks ago. The starting hemoglobin was 8.6 g/dL (86 g/L). Which finding shows the treatment is working?",
      rationale:
        "Oral iron should raise the hemoglobin within a few weeks. A rise from 8.6 to 10.1 g/dL over 4 weeks shows a good response. Dark stools are an expected effect of iron and do not measure response. Less nausea shows tolerance, not effect. A lower hemoglobin would need follow-up for ongoing loss or poor absorption.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hemoglobin 10.1 g/dL (101 g/L)", why: "A rise from 8.6 to 10.1 g/dL over 4 weeks shows the marrow is using the iron." },
      { text: "Dark green-black stools", why: "Dark stools are an expected effect of oral iron. They do not show the anemia is improving." },
      { text: "Hemoglobin 8.4 g/dL (84 g/L)", why: "A hemoglobin of 8.4 g/dL is lower than at the start and shows no response." },
      { text: "Less nausea after doses", why: "Less nausea shows the client tolerates the drug, not that it works." },
    ],
    correct: 0,
  },
];
