import type { Item } from "@/engine/types";
import { ADA_NUTRITION, CPM_SFH, ESTRADIOL_CREAM, FDA_PENS, HINKLE, IDDSI, KDOQI, LANTUS, ODS_VITK, PHOS_SOURCES, POTTER, RCH_JEJUNAL, SPLINT_UHS, meta, ASPEN_EN } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s34-21", {
      need: "BCC",
      topic: "Knee out of line in a motion machine",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 68-year-old client on day 1 after total knee arthroplasty uses a continuous passive motion machine set by the physical therapist. The client has slid toward the foot of the bed. The knee now bends above the machine's hinge, and the frame rubs the inner thigh. Which action should the nurse take first?",
      rationale:
        "The machine moves the knee safely only when the knee sits over its hinge. Out of line, it bends the leg at the wrong point and rubs the skin. The nurse stops the machine with the leg straight, moves the client up and realigns the knee with the hinge. A higher flexion setting forces more bending at the wrong point. Padding does not fix the alignment.",
      sources: [CPM_SFH, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Stop the machine and realign the knee with the hinge", why: "Realigning the knee lets the machine bend the joint at the right point." },
      { text: "Raise the flexion setting to ease the rubbing", why: "More flexion bends the leg harder at the wrong point." },
      { text: "Pad the inner thigh and let the cycle continue", why: "Padding protects skin but leaves the knee out of line with the hinge." },
      { text: "Remove the machine until the physical therapist returns", why: "Nurses can realign the machine, so therapy need not stop." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-22", {
      need: "BCC",
      topic: "Heat and a thermoplastic hand splint",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 25-year-old client had a flexor tendon repair of the right hand and is going home with a custom thermoplastic splint. Which statement by the client indicates a need for further teaching?",
      rationale:
        "Thermoplastic softens with heat and can change shape, so the splint no longer holds the hand in the right position. A car dashboard in the sun is a common source of that heat. The splint is washed in cool or lukewarm soapy water and dried away from heaters. Red marks from rubbing are reported to the therapist.",
      sources: [SPLINT_UHS],
    }),
    kind: "mc",
    options: [
      { text: "\"I will wash it in cool, soapy water.\"", why: "Cool or lukewarm water cleans the splint without softening it." },
      { text: "\"I will let it air dry away from the heater.\"", why: "Drying away from heat keeps the splint's shape." },
      { text: "\"I will call the therapist if I see red marks on my skin.\"", why: "Red marks mean the splint rubs and may need adjusting." },
      { text: "\"I will leave it on my car dashboard at work.\"", why: "A hot car softens thermoplastic and can change the splint's shape." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s34-23", {
      need: "BCC",
      topic: "Reading the IDDSI flow test",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 74-year-old client with dysphagia after a stroke has a prescription for IDDSI Level 2 mildly thick drinks. The nurse tests a thickened juice from the kitchen with the IDDSI flow test. After 10 seconds, 2 mL of the 10 mL remains in the slip tip syringe. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "In the flow test, a Level 2 mildly thick drink leaves 4 to 8 mL in the syringe after 10 seconds. A drink that leaves 1 to 4 mL is Level 1 slightly thick. This juice left 2 mL, so it is thinner than prescribed and flows too fast for the client. It goes back to be thickened further. A straw or added water would make the flow faster still.",
      refs: ["In the IDDSI flow test, liquid drains from a 10 mL slip tip syringe for 10 seconds.", "Level 0 leaves less than 1 mL. Level 1 leaves 1 to 4 mL. Level 2 leaves 4 to 8 mL. Level 3 leaves more than 8 mL."],
      sources: [IDDSI],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The juice meets IDDSI {0}, so the nurse should {1} before the client drinks it.",
    blanks: [
      {
        options: [
          { text: "Level 0 thin", why: "Level 0 leaves less than 1 mL. This juice left 2 mL." },
          { text: "Level 1 slightly thick", why: "A drink leaving 1 to 4 mL is Level 1, and this juice left 2 mL." },
          { text: "Level 2 mildly thick", why: "Level 2 leaves 4 to 8 mL. This juice left only 2 mL." },
          { text: "Level 3 moderately thick", why: "Level 3 leaves more than 8 mL in the syringe." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "serve it as prescribed", why: "The juice is thinner than Level 2 and flows too fast for the client." },
          { text: "return it for more thickening", why: "Thickening it to Level 2 matches the prescription." },
          { text: "dilute it with water", why: "Water makes the drink thinner and less safe." },
          { text: "offer it through a straw", why: "A straw speeds the flow and raises aspiration risk." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s34-24", {
      need: "BCC",
      topic: "Foods that melt to thin liquid",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 70-year-old client with dysphagia has a prescription for IDDSI Level 3 moderately thick drinks and minced and moist food. The nurse checks the lunch tray. Which items should the nurse remove before the client eats? Select all that apply.",
      rationale:
        "Moderately thick drinks slow the flow so the client can control the swallow. Clear broth is a thin liquid. Ice cream and gelatin melt into thin liquid in the mouth, so they are not served unless a dysphagia specialist has assessed them as suitable. Juice already thickened to Level 3, minced chicken in thick gravy and smooth pudding fit the prescription.",
      sources: [IDDSI, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Apple juice thickened to Level 3", why: "Juice prepared to Level 3 matches the prescription." },
      { text: "A cup of vanilla ice cream", why: "Ice cream melts into thin liquid in the mouth." },
      { text: "Minced chicken in thick gravy", why: "Minced and moist food with thick gravy fits the diet." },
      { text: "A bowl of clear chicken broth", why: "Broth is a thin liquid that flows too fast for this client." },
      { text: "Smooth vanilla pudding", why: "Smooth pudding holds its shape and does not thin in the mouth." },
      { text: "Cubes of flavored gelatin", why: "Gelatin melts into thin liquid at body temperature." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s34-25", {
      need: "PPT",
      topic: "Using a vaginal cream applicator",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 63-year-old client has a new prescription for estradiol vaginal cream with a reusable applicator. The nurse teaches the client how to use it. Which instruction should the nurse include?",
      rationale:
        "The client lies on the back with the knees bent, which opens the vagina and keeps the cream in place. The applicator is inserted deeply before the plunger is pushed. The applicator measures the dose, so the cream is not applied with a finger. It is washed with mild soap and warm water after each use. Boiling or hot water damages it.",
      sources: [ESTRADIOL_CREAM, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Insert just the tip of the applicator", why: "The applicator is inserted deeply so the cream reaches the vagina." },
      { text: "Lie on your back with the knees bent", why: "This position eases insertion and helps the cream stay in place." },
      { text: "Boil the applicator after each use", why: "Boiling damages the applicator. It is washed in warm, soapy water." },
      { text: "Spread the cream with a finger", why: "The applicator measures the dose and places it deep in the vagina." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s34-26", {
      need: "BCC",
      topic: "Hidden phosphate additives on hemodialysis",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 57-year-old client on hemodialysis has a serum phosphorus of 6.8 mg/dL (2.20 mmol/L). The nurse reinforces the dietitian's teaching about phosphorus in processed foods. Which statement by the client shows understanding?",
      rationale:
        "The level of 6.8 mg/dL is well above normal. Phosphate additives in processed foods and dark colas are absorbed far more completely than the phosphorus in fresh foods. Their names often contain phos, such as sodium phosphate or phosphoric acid. Reading ingredient lists lets the client avoid them. Phosphorus in plant foods is bound as phytate and is absorbed least.",
      refs: ["Normal adult serum phosphorus ranges from 2.5 mg/dL (0.81 mmol/L) to 4.5 mg/dL (1.45 mmol/L)."],
      sources: [PHOS_SOURCES, KDOQI],
    }),
    kind: "mc",
    options: [
      { text: "\"I will check labels for ingredients with phos in the name.\"", why: "Additive names such as sodium phosphate flag highly absorbed phosphorus." },
      { text: "\"Processed cheese slices are a better choice than fresh chicken.\"", why: "Processed cheese often contains phosphate additives, which are absorbed almost fully." },
      { text: "\"Dark cola is fine because it has no milk in it.\"", why: "Dark cola contains phosphoric acid, a phosphate additive." },
      { text: "\"Beans add more phosphorus than any additive.\"", why: "Phosphorus in beans is bound as phytate and is absorbed less than additives." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-27", {
      need: "BCC",
      topic: "Carbohydrate grams from a cereal label",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 3,
      stem: "A 16-year-old client with type 1 diabetes counts carbohydrates to dose mealtime insulin. A cereal label lists a serving size of 3/4 cup with 24 g of total carbohydrate. The client pours 1.5 cups of cereal. How many grams of carbohydrate are in the cereal?",
      rationale:
        "The label serving is 3/4 cup. The bowl holds 1.5 cups, which is 2 servings. Two servings at 24 g each give 48 g of carbohydrate. Counting uses total carbohydrate from the label, scaled to the amount eaten.",
      calc: { expr: "1.5 / (3 / 4) * 24", answer: 48, unit: "g", round: 0, steps: ["3 / 4 = 0.75", "1.5 / 0.75 = 2", "2 * 24 = 48"] },
      sources: [ADA_NUTRITION],
    }),
    kind: "mc",
    options: [
      { text: "18 g", why: "This multiplies 24 g by 3/4 and gives less than one serving." },
      { text: "32 g", why: "This divides 24 g by 3/4, which is the carbohydrate in 1 cup, not 1.5 cups." },
      { text: "48 g", why: "1.5 cups is 2 servings of 3/4 cup, and 2 times 24 g is 48 g." },
      { text: "72 g", why: "This counts 1.5 cups as 3 servings instead of 2." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s34-28", {
      need: "BCC",
      topic: "Bolus prescription for a jejunostomy tube",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 64-year-old client had an esophagectomy and has a feeding jejunostomy tube. A new prescription reads standard formula 240 mL by syringe bolus through the jejunostomy 4 times a day. Which concern should the nurse raise with the primary health care provider?",
      rationale:
        "The jejunum has no reservoir like the stomach. Formula given as a bolus into it can cause cramping, diarrhea and dumping syndrome. Jejunal feeds are given slowly by continuous pump infusion. Gastric residual checks and pH testing do not apply to a jejunal tube. The stem gives no data on the client's needs, so the volume cannot be judged.",
      sources: [RCH_JEJUNAL, ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "Bolus feeds into the jejunum can cause dumping", why: "Without a gastric reservoir, a bolus moves too fast through the small bowel." },
      { text: "Residual volume must be checked before each bolus", why: "Residual checks reflect gastric emptying and do not apply to a jejunal tube." },
      { text: "The tube must be pH tested before each feeding", why: "pH testing is not used to check a jejunal tube." },
      { text: "The daily volume is too small to meet needs", why: "The stem gives no data on the client's needs to judge the volume." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-29", {
      need: "BCC",
      topic: "Naming foods rich in vitamin K",
      cjmm: "recognize",
      process: "teaching",
      difficulty: 1,
      stem: "A 70-year-old client takes warfarin and plans meals with the nurse. The client wants to know which foods are high in vitamin K so the weekly amount can stay steady. Which foods should the nurse identify as high in vitamin K? Select all that apply.",
      rationale:
        "Green leafy vegetables are the main food sources of vitamin K. Collard greens, spinach, kale and broccoli are among the richest. Rice, bananas and potatoes contain little. The goal is not to avoid these vegetables but to eat about the same amount each week so the INR stays stable.",
      sources: [ODS_VITK],
    }),
    kind: "sata",
    options: [
      { text: "Cooked collard greens", why: "Collard greens are one of the richest sources of vitamin K." },
      { text: "Boiled white rice", why: "Rice contains little vitamin K." },
      { text: "Raw spinach", why: "Spinach is a green leafy vegetable high in vitamin K." },
      { text: "Sliced banana", why: "Bananas contain little vitamin K." },
      { text: "Steamed broccoli", why: "Broccoli is a rich source of vitamin K." },
      { text: "Baked potato with skin", why: "Potatoes contain little vitamin K." },
      { text: "Raw kale", why: "Kale is a green leafy vegetable high in vitamin K." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s34-30", {
      need: "PPT",
      topic: "Safety test and hold time with an insulin pen",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to give insulin glargine 18 units subcutaneously with a prefilled pen labeled for one hospitalized client. A new pen needle is attached. Which two actions should the nurse take? Select two.",
      rationale:
        "A safety test of 2 units before each injection confirms that the pen and needle deliver insulin. Insulin should appear at the needle tip. After the dose, the button stays pressed for a slow count of 10 so the full dose enters the tissue. A pen is used for one client only, even with a new needle, because blood can enter the cartridge. Glargine is a clear solution and is not shaken.",
      sources: [LANTUS, FDA_PENS],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Dial 2 units and do a safety test first", why: "The safety test confirms the pen and needle deliver insulin." },
      { text: "Shake the pen firmly to mix the insulin", why: "Glargine is a clear solution that needs no mixing." },
      { text: "Hold the button in for a slow count of 10", why: "Holding the button lets the full dose leave the needle." },
      { text: "Use the pen for a second client with a new needle", why: "Blood can enter the cartridge, so a pen serves one client only." },
      { text: "Aspirate before pressing the injection button", why: "Aspiration is not part of subcutaneous insulin injection." },
      { text: "Pull the needle out as the dose window reads 0", why: "Removing the needle at once can leave part of the dose undelivered." },
    ],
    correct: [0, 2],
  },
];
