import type { Item } from "@/engine/types";
import { HINKLE, NPIAP, POTTER, WOCN, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s13-41", {
      topic: "Stoma appearance after colostomy",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "On day 3 after a colostomy, the nurse inspects the stoma during a pouch change. Which finding should the nurse report to the primary health care provider?",
      rationale:
        "A healthy stoma is moist and red to pink, like the lining of the mouth. Swelling is expected in the first weeks after surgery. Slight bleeding when the stoma is wiped is common because its surface is rich in vessels. A dusky purple stoma signals poor blood flow and possible necrosis. It needs prompt report.",
      sources: [WOCN, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Moist, beefy red stoma", why: "A moist, red stoma has a healthy blood supply." },
      { text: "Mild swelling of the stoma", why: "Swelling is expected in the first weeks and settles over time." },
      { text: "Slight bleeding when the stoma is wiped", why: "The stoma surface is rich in vessels, so slight bleeding on cleaning is common." },
      { text: "Dusky purple stoma color", why: "A dusky or purple stoma points to poor blood flow and possible necrosis." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-42", {
      topic: "Mealtime help with low vision",
      cjmm: "action",
      process: "caring",
      difficulty: 1,
      stem: "A client with severe vision loss from macular degeneration can feed themself but leaves much of each tray uneaten. Which action should the nurse take at mealtime?",
      rationale:
        "The client can eat without help but cannot see where food sits on the tray. Naming the position of each item by the clock face lets the client find it. Feeding the client removes independence the client still has. Mixing foods together hides flavors and lowers appeal. Supplements do not solve the problem of finding food.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Describe food placement by clock positions", why: "Clock positions let the client locate each food and eat independently." },
      { text: "Feed the client each meal to make sure of intake", why: "Feeding takes away independence the client still has." },
      { text: "Mix all the food together in one bowl", why: "Mixing hides flavors and textures and lowers appetite." },
      { text: "Replace meals with a liquid supplement", why: "Supplements do not help the client find food on the tray." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-43", {
      topic: "Sleep changes with aging",
      cjmm: "analyze",
      process: "communication",
      difficulty: 3,
      stem: "A 79-year-old client reports waking two or three times a night. The client says sleep feels lighter than it used to. The client feels rested during the day and naps for 20 minutes after lunch. Which response by the nurse is appropriate?",
      rationale:
        "Aging brings less deep sleep and more brief awakenings at night. The client feels rested and takes a 20 minute nap, so daytime function is intact. No treatment is needed. Sleeping pills raise the risk of falls and confusion in older adults. Staying in bed longer adds awake time in bed. A short early nap is unlikely to cause the night waking.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"A prescribed sleeping pill would help you.\"", why: "Sedative hypnotics raise the risk of falls and confusion, and the client functions well." },
      { text: "\"Lighter sleep is common as people age.\"", why: "Less deep sleep and more awakenings are expected with age when daytime function is intact." },
      { text: "\"Staying in bed later will make up for it.\"", why: "More time in bed adds wakeful time and weakens sleep." },
      { text: "\"Your afternoon nap is causing this.\"", why: "A short early nap is unlikely to cause the night waking described." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-44", {
      topic: "Preventing foot drop on bed rest",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has been on bed rest for 10 days after multiple injuries and lies mostly supine. Which device should the nurse use to prevent plantar flexion contracture?",
      rationale:
        "Lying supine with the feet unsupported lets the ankles fall into plantar flexion. Over time this shortens the calf muscles and causes foot drop. Splints that hold the ankle in a neutral position prevent it. A trochanter roll prevents outward hip rotation. Pillows under the knees promote knee flexion contracture. A trapeze helps the client move in bed.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Pillows placed under both knees", why: "Pillows under the knees promote knee flexion contracture." },
      { text: "A trochanter roll along each thigh", why: "A trochanter roll prevents outward rotation of the hip, not foot drop." },
      { text: "A trapeze bar above the bed", why: "A trapeze helps the client move in bed but does not support the feet." },
      { text: "Foot splints in neutral position", why: "Splints hold the ankle at a right angle and stop the foot falling into plantar flexion." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-45", {
      topic: "Massage and a calf clot",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse plans back and leg massage for comfort on a medical unit. For which client is this massage unsafe?",
      rationale:
        "Massage over a leg with a deep vein thrombosis can dislodge the clot and cause a pulmonary embolism. Tension headache, chronic back pain and anxiety before surgery can all be eased by massage.",
      sources: [POTTER, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Tension headache with tight shoulders", why: "Massage relaxes tight muscles and can ease a tension headache." },
      { text: "Deep vein thrombosis in the left calf", why: "Rubbing the leg can dislodge the clot and cause a pulmonary embolism." },
      { text: "Chronic low back pain for 2 years", why: "Massage is a helpful comfort measure for chronic back pain." },
      { text: "Anxiety before surgery tomorrow", why: "Massage promotes relaxation and can ease anxiety." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-46", {
      topic: "Using a standard walker",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 76-year-old client is learning to walk with a standard walker without wheels after a right knee replacement. Which actions show correct use? Select all that apply.",
      rationale:
        "A standard walker has no wheels. It is lifted and set down about one step ahead. The operated right leg steps into the frame first, then the stronger leg follows. Pushing up from the chair arms gives a stable rise. Elbows bent slightly at the grips let the arms bear weight. Pulling on the walker or hanging a heavy bag can tip it.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Pulls on the walker to rise from the chair", why: "Pulling on the frame can tip it toward the client." },
      { text: "Lifts the walker and sets it one step ahead", why: "A walker without wheels is lifted and placed ahead before each step." },
      { text: "Hangs a heavy bag from the front bar", why: "Weight on the front bar can tip the walker forward." },
      { text: "Steps into the frame with the right leg first", why: "The operated leg leads while the walker takes part of the weight." },
      { text: "Slides the walker along the floor while walking", why: "A walker without wheels catches on the floor when slid." },
      { text: "Keeps the elbows slightly bent at the grips", why: "A slight bend lets the arms bear weight through the frame." },
      { text: "Pushes up from the chair arms to stand", why: "The chair arms give a stable base for rising." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s13-47", {
      topic: "Eating with nausea during chemotherapy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 60-year-old client receiving chemotherapy has nausea and a poor appetite and has lost 3 kg in 4 weeks. Which measures should the nurse suggest to improve oral intake? Select all that apply.",
      rationale:
        "Small, frequent meals avoid a full stomach, which worsens nausea. Cool foods give off less odor than hot foods. Rinsing the mouth clears bad tastes before eating. Dry crackers or toast are bland and settle the stomach. Lying flat after meals promotes reflux. Large volumes of fluid with meals cause early fullness. Favorite foods eaten during nausea can become disliked.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Eat small meals every 2 to 3 hours", why: "Small, frequent meals avoid the fullness that worsens nausea." },
      { text: "Choose cool or room-temperature foods", why: "Cool foods give off less odor, which lowers nausea." },
      { text: "Lie flat for an hour after each meal", why: "Lying flat after eating promotes reflux and nausea." },
      { text: "Drink large amounts of fluid with meals", why: "Fluid fills the stomach and causes early fullness." },
      { text: "Rinse the mouth before eating", why: "Rinsing clears bad tastes that reduce appetite." },
      { text: "Eat favorite foods during bouts of nausea", why: "Foods eaten while nauseated can become linked with nausea and later refused." },
      { text: "Eat dry crackers or toast when queasy", why: "Bland, dry foods settle the stomach." },
    ],
    correct: [0, 1, 4, 6],
  },
  {
    ...meta("rn-s13-48", {
      topic: "Daytime sleep for a night-shift worker",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches sleep strategies to a 29-year-old client who works night shifts and sleeps poorly during the day. Which two statements by the client show understanding? Select two.",
      rationale:
        "Daytime light signals the brain to wake. Blackout curtains make the bedroom dark. A steady sleep schedule, kept on days off where possible, anchors the body clock. Caffeine late in a shift delays sleep. Alcohol fragments sleep later in the sleep period. Hard exercise just before bed raises arousal. A loud phone near the bed causes waking.",
      sources: [POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will drink coffee near the end of my shift.\"", why: "Caffeine late in the shift delays sleep after the shift." },
      { text: "\"I will use blackout curtains in my bedroom.\"", why: "A dark room supports daytime sleep." },
      { text: "\"I will have a glass of wine to help me sleep.\"", why: "Alcohol fragments sleep in the second half of the sleep period." },
      { text: "\"I will exercise hard right before bed.\"", why: "Vigorous exercise just before sleep raises arousal." },
      { text: "\"I will keep the same sleep hours on days off.\"", why: "A steady schedule anchors the body clock." },
      { text: "\"I will leave my phone on loud near my bed.\"", why: "Calls and alerts wake the client during the sleep period." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s13-49", {
      topic: "Giving a cleansing enema",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The primary health care provider prescribes a tap water enema for an adult client with constipation. Complete the sentence by dragging a choice into each blank.",
      rationale:
        "The left side-lying position follows the anatomy of the sigmoid and descending colon, so fluid flows in by gravity. A tip inserted 7.5 to 10 cm passes the internal sphincter without injuring the rectal wall. A bag held 30 to 45 cm above the anus gives a slow flow. Higher bags cause cramping and early expulsion.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    template: "The nurse places the client in the {0} position, inserts the lubricated tip {1}, and holds the bag {2} above the anus.",
    targets: ["Position", "Insertion depth", "Bag height"],
    tokens: [
      { text: "right side-lying", why: "Lying on the right side works against the course of the sigmoid and descending colon." },
      { text: "7.5 to 10 cm", why: "This depth passes the internal sphincter without injuring the rectal wall." },
      { text: "left side-lying", why: "Left side-lying lets fluid flow by gravity along the sigmoid and descending colon." },
      { text: "90 to 100 cm", why: "A bag this high pushes fluid in too fast, which causes cramping and early expulsion." },
      { text: "30 to 45 cm", why: "This height gives a slow, steady flow that the client can hold." },
      { text: "15 to 20 cm", why: "Inserting the tip this far can injure the rectal wall." },
    ],
    correct: [2, 1, 4],
  },
  {
    ...meta("rn-s13-50", {
      topic: "Complications of lying in bed after a fracture",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews a note on an 81-year-old client on day 12 of bed rest after a pelvic fracture. Click to highlight the findings that show a complication of immobility.",
      rationale:
        "Twelve days of bed rest affects the skin, bowel and joints. Nonblanchable redness of the right heel is a stage 1 pressure injury. No bowel movement for 5 days reflects slowed peristalsis. A left knee that cannot fully straighten signals an early flexion contracture. Clear lungs, normal orientation, a normal BP and good fluid intake are not complications.",
      sources: [NPIAP, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Alert and oriented to person, place and time]]. [[Right heel red and does not blanch when pressed]]. [[No bowel movement for 5 days]]. [[Unable to fully straighten the left knee]]. [[BP 132/78 mmHg lying down]]. [[Lung sounds clear in all fields]]. [[Oral intake 1800 mL yesterday]]. [[Urine clear and pale yellow]].",
    spans: [
      { text: "Alert and oriented to person, place and time", why: "Normal orientation shows no confusion from immobility." },
      { text: "Right heel red and does not blanch when pressed", why: "Nonblanchable redness of intact skin is a stage 1 pressure injury." },
      { text: "No bowel movement for 5 days", why: "Immobility slows peristalsis and leads to constipation." },
      { text: "Unable to fully straighten the left knee", why: "Loss of full extension signals an early flexion contracture." },
      { text: "BP 132/78 mmHg lying down", why: "A normal lying BP is not a complication." },
      { text: "Lung sounds clear in all fields", why: "Clear lungs show no pooling of secretions." },
      { text: "Oral intake 1800 mL yesterday", why: "An intake of 1800 mL a day is adequate for most adults." },
      { text: "Urine clear and pale yellow", why: "Clear, pale urine shows good hydration and no sign of infection." },
    ],
    correct: [1, 2, 3],
  },
];
