import type { Item } from "@/engine/types";
import { HINKLE, INOUYE, INS, JARVIS, PAGANA, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s20-21", {
      topic: "Recognizing delirium after hip surgery",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client is on day 2 after hip fracture repair. Before surgery he lived alone, managed his own medications and was fully oriented. His daughter says, \"Since last night he is not himself.\" Which findings support delirium? Select all that apply.",
      rationale:
        "Delirium has an acute onset and a fluctuating course. It shows as inattention, with disorganized thinking or a changed level of alertness. Sudden confusion overnight in a client who was fully oriented fits acute onset. Losing track of a conversation shows inattention. Swings between alert and drowsy show a changing level of consciousness. Rambling speech shows disorganized thinking.",
      sources: [INOUYE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Recalls his home address correctly", why: "Accurate recall of a home address does not support delirium." },
      { text: "Confusion that began suddenly overnight", why: "Acute onset in a client who was fully oriented is a core feature of delirium." },
      { text: "Rates hip pain 3 on a 0 to 10 scale", why: "Mild pain on day 2 is expected and is not a feature of delirium." },
      { text: "Loses track of the conversation", why: "Trouble keeping focus shows inattention, a core feature of delirium." },
      { text: "Swings between alert and drowsy", why: "A fluctuating level of alertness is a feature of delirium." },
      { text: "Wears his reading glasses as usual", why: "Using his usual glasses supports orientation and is not a sign of delirium." },
      { text: "Speech rambles from topic to topic", why: "Rambling speech shows disorganized thinking." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s20-22", {
      topic: "Before first use of a new central line",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a new right subclavian central venous catheter placed at the bedside. The primary health care provider prescribes a norepinephrine infusion through the catheter. The client's BP is 102/64 mmHg and stable. Which action should the nurse take before starting the infusion?",
      rationale:
        "The catheter tip position is confirmed before a new central line is used. A tip outside the lower superior vena cava can cause vessel injury, arrhythmia or infusion into the wrong space. A subclavian insertion also carries a risk of pneumothorax that imaging can show. Starting at a lower rate, changing the dressing and drawing cultures do not confirm safe placement.",
      refs: ["The tip position of a central vascular access device is confirmed before the device is first used."],
      sources: [INS],
    }),
    kind: "mc",
    options: [
      { text: "Confirm tip position from the imaging report", why: "Tip position is confirmed before first use so the infusion enters the vena cava." },
      { text: "Start the infusion at half the prescribed rate", why: "A lower rate does not make an unconfirmed catheter safe to use." },
      { text: "Change the dressing over the insertion site", why: "A new dressing was applied at insertion and does not confirm placement." },
      { text: "Draw blood cultures through the new catheter", why: "Cultures are not indicated here and do not confirm placement." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-23", {
      topic: "Teaching after cataract surgery",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client who had cataract removal with a lens implant in the left eye today. Which two statements by the client show understanding? Select two.",
      rationale:
        "The eye shield at night stops the client rubbing or pressing on the eye during sleep. A sudden loss of vision or rising pain can signal infection, bleeding or high eye pressure and needs a prompt report. Bending at the waist and heavy lifting raise eye pressure. Rubbing the eye risks injury to the incision. Drops are used for the full prescribed course.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will wear the eye shield when I sleep.\"", why: "The shield protects the eye from pressure and rubbing during sleep." },
      { text: "\"I will bend at the waist to tie my shoes.\"", why: "Bending at the waist raises pressure in the eye." },
      { text: "\"I will report any sudden drop in vision.\"", why: "A sudden loss of vision can signal a serious complication." },
      { text: "\"I will rub the eye gently if it itches.\"", why: "Rubbing can injure the incision and introduce infection." },
      { text: "\"I will carry the laundry basket upstairs.\"", why: "Heavy lifting raises eye pressure after surgery." },
      { text: "\"I will stop the drops once it feels fine.\"", why: "Stopping drops early can allow infection or inflammation." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s20-24", {
      topic: "Preventing rapid gastric emptying after gastrectomy",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A client had a partial gastrectomy 3 weeks ago. The client reports cramping, dizziness, sweating and a racing heart 20 minutes after meals. The nurse teaches measures to prevent these symptoms. Which statement by the client shows understanding?",
      rationale:
        "Symptoms 20 minutes after meals fit early dumping syndrome. Food moves quickly into the small bowel and draws fluid into it. Small meals higher in protein and fat, with few simple sugars, slow emptying. Fluids are taken between meals, not with them. Lying down after meals slows emptying. Juice and sweets make the symptoms worse.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will drink a large glass of water with meals.\"", why: "Fluids with meals speed emptying. Fluids are taken between meals." },
      { text: "\"I will sit upright for an hour after I eat.\"", why: "Upright posture speeds emptying. Lying down after meals slows it." },
      { text: "\"I will eat small meals higher in protein.\"", why: "Small meals with protein leave the stomach remnant more slowly." },
      { text: "\"I will have fruit juice with my dessert.\"", why: "Simple sugars draw fluid into the bowel and worsen dumping." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-25", {
      topic: "Care after bone marrow biopsy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a platelet count of 42 000/mm3 had a bone marrow aspiration and biopsy from the right posterior iliac crest 30 minutes ago. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A platelet count of 42 000/mm3 raises the risk of bleeding at the site. Firm pressure and checks of the dressing limit and detect bleeding. Pulse and BP can show hidden blood loss. Fever or rising pain in the next days can signal infection. The dressing stays on for the prescribed time. Aspirin and soaking in a bath add bleeding or infection risk.",
      canada: "Canadian labs report platelets as x 10^9/L only. A count of 42 000/mm3 reads as 42 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as normal.",
      sources: [PAGANA, HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "sata",
    options: [
      { text: "Give aspirin for site discomfort", why: "Aspirin impairs platelet function and adds to the bleeding risk." },
      { text: "Apply firm pressure to the site", why: "Pressure helps the puncture seal in a client with low platelets." },
      { text: "Remove the dressing after 1 hour", why: "The dressing stays on for the prescribed time to protect the site." },
      { text: "Check the dressing for bleeding", why: "Frequent checks detect oozing early in a client with low platelets." },
      { text: "Soak in a hot bath this evening", why: "Soaking the fresh puncture raises infection risk." },
      { text: "Check pulse and BP for bleeding", why: "A rising pulse and falling BP can signal hidden bleeding." },
      { text: "Report fever or rising site pain", why: "These can signal infection at the puncture site." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s20-26", {
      topic: "Bleeding precautions with a low platelet count",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receiving chemotherapy has a platelet count of 18 000/mm3. Which action should the nurse include in the plan of care?",
      rationale:
        "A platelet count of 18 000/mm3 is far below normal and carries a high risk of bleeding. An electric razor avoids cuts. Injections into muscle can cause deep hematomas. Rectal temperatures can tear the rectal lining. Flossing can make the gums bleed.",
      refs: ["The normal adult platelet count is 150 000 to 400 000/mm3."],
      canada: "Canadian labs report platelets as x 10^9/L only. A count of 18 000/mm3 reads as 18 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as normal.",
      sources: [HINKLE, PAGANA, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Give prescribed medications by IM injection", why: "Intramuscular injections can cause bleeding into the muscle." },
      { text: "Take temperatures by the rectal route", why: "A rectal thermometer can injure the lining and cause bleeding." },
      { text: "Floss the teeth after each meal", why: "Flossing can make the gums bleed when platelets are this low." },
      { text: "Use an electric razor for shaving", why: "An electric razor lowers the risk of skin cuts." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-27", {
      topic: "Clear nasal drainage after craniotomy",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 1 day after a craniotomy for removal of a frontal tumor. The client reports a salty taste and clear fluid dripping from the nose when leaning forward. A drop on the pillowcase dries with a yellow ring around a central spot. Temperature is 37.0°C (98.6°F). Complete the sentence by dragging the options.",
      rationale:
        "Clear fluid from the nose that forms a halo on fabric suggests a leak of cerebrospinal fluid. A leak opens a path between the nose and the space around the brain. Bacteria can then reach the meninges, so meningitis is the key risk. The normal temperature does not remove that risk. Nothing in the stem suggests diabetes insipidus or volume loss.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The client is at highest risk for {0} as evidenced by {1}.",
    targets: ["Condition", "Evidence"],
    tokens: [
      { text: "diabetes insipidus", why: "The stem gives no urine output or sodium values that suggest water loss." },
      { text: "clear nasal drainage with a halo", why: "A halo ring on fabric points to cerebrospinal fluid in the drainage." },
      { text: "meningitis", why: "A leak lets bacteria from the nose reach the meninges." },
      { text: "a normal temperature", why: "A temperature of 37.0°C does not point to any of the risks." },
      { text: "hypovolemia", why: "A small nasal leak does not deplete circulating volume." },
      { text: "a frontal incision", why: "The incision site does not show a leak by itself." },
    ],
    correct: [2, 1],
  },
  {
    ...meta("rn-s20-28", {
      topic: "No drainage from a nephrostomy tube",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client has a right percutaneous nephrostomy tube draining to gravity. Output was 40 to 60 mL per hour for 8 hours. For the last 2 hours there has been no output, and the client reports new right flank pain. Which action should the nurse take first?",
      rationale:
        "No output with new flank pain means urine is not leaving the kidney. The nurse first checks the tubing for kinks, clamps and a pulled catheter at the skin. A blocked tube can raise pressure in the kidney and lead to infection. If the tube stays blocked, the nurse notifies the provider. A nephrostomy is irrigated only by prescription with a small volume. A blocked tube is not clamped.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Irrigate the tube with 30 mL of saline", why: "Irrigation needs a prescription and uses a small volume to protect the renal pelvis." },
      { text: "Check the tube and tubing for kinks", why: "A kink or displaced tube is a common, quickly fixed cause of no output." },
      { text: "Increase the client's oral fluid intake", why: "More fluid cannot drain past a blocked tube and adds pressure." },
      { text: "Clamp the tube until the provider calls", why: "Clamping keeps urine in the kidney and raises the pressure." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-29", {
      topic: "Heart sound in fluid overload",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with heart failure has dyspnea and crackles at both lung bases. The client lies on the left side, and the nurse listens at the apex with the bell of the stethoscope. Which finding fits volume overload?",
      rationale:
        "An S3 is a low-pitched sound just after S2. It comes from blood filling a volume-loaded ventricle in early diastole. It is heard best with the bell at the apex with the client on the left side. A split S2 on inspiration is normal. A click after S1 comes from a valve. A scratching sound suggests a pericardial rub.",
      sources: [JARVIS],
    }),
    kind: "mc",
    options: [
      { text: "A low-pitched sound just after S2", why: "This is an S3, the sound of rapid filling of a volume-loaded ventricle." },
      { text: "A split S2 that widens on inspiration", why: "A split S2 on inspiration is a normal finding." },
      { text: "A high-pitched click just after S1", why: "An early click comes from an opening valve, not from volume load." },
      { text: "A scratching sound with each heartbeat", why: "A scratching sound suggests a pericardial friction rub." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-30", {
      topic: "Findings after carotid endarterectomy",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse reviews a note on a client 6 hours after a left carotid endarterectomy. Click to highlight the findings that need follow-up.",
      rationale:
        "The surgery lies close to cranial nerves. A hoarse voice points to laryngeal nerve injury. A tongue that deviates to the left points to hypoglossal nerve injury on the side of surgery. Growing neck swelling can be a hematoma that compresses the airway. BP of 184/98 mmHg raises the risk of bleeding and brain hyperperfusion. Equal grips, clear words and mild pain are expected.",
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Alert and oriented]]. [[Voice hoarse]]. [[Words clear and appropriate]]. [[Tongue deviates to the left when protruded]]. [[Left neck swelling larger than at 4 hours]]. [[BP 184/98 mmHg]]. [[Hand grips equal and strong]]. [[Incision pain 2 of 10]].",
    spans: [
      { text: "Alert and oriented", why: "Normal orientation needs no follow-up." },
      { text: "Voice hoarse", why: "Hoarseness can signal injury to a laryngeal nerve during surgery." },
      { text: "Words clear and appropriate", why: "Clear speech shows no new aphasia." },
      { text: "Tongue deviates to the left when protruded", why: "Deviation toward the operated side points to hypoglossal nerve injury." },
      { text: "Left neck swelling larger than at 4 hours", why: "Growing swelling can be a hematoma that threatens the airway." },
      { text: "BP 184/98 mmHg", why: "High pressure after surgery raises the risk of bleeding and hyperperfusion." },
      { text: "Hand grips equal and strong", why: "Equal grips show no new motor deficit." },
      { text: "Incision pain 2 of 10", why: "Mild incision pain is expected." },
    ],
    correct: [1, 3, 4, 5],
  },
];
