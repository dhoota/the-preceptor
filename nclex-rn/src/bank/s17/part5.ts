import type { Item } from "@/engine/types";
import { ADA_HOSPITAL, CDC_CATHETER, HINKLE, INS, PN_SAFETY, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s17-41", {
      topic: "Before first use of a new central line",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client had a right subclavian central venous catheter placed at the bedside 30 minutes ago. The first bag of parenteral nutrition has arrived from the pharmacy. Breath sounds are equal and the dressing is dry. Which action should the nurse take before starting the infusion?",
      rationale:
        "A new central line is not used until the tip position is confirmed, usually on a chest x-ray. A tip outside the lower superior vena cava can cause vein damage, thrombosis or dysrhythmias. A subclavian insertion can also cause a pneumothorax, which the film shows. Equal breath sounds do not rule out a small pneumothorax. Blood draws and infusions wait until placement is confirmed.",
      sources: [INS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Confirm the tip position on the chest x-ray", why: "Tip placement must be confirmed before any infusion through a new line." },
      { text: "Start the nutrition at half the prescribed rate", why: "A slower rate does not make an unconfirmed line safe to use." },
      { text: "Draw a baseline blood sample from the new line", why: "The line is not used for any purpose until the tip is confirmed." },
      { text: "Flush the line with saline and start the bag", why: "Flushing does not confirm where the catheter tip lies." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-42", {
      topic: "Syringe size for flushing a PICC",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse prepares to flush a client's peripherally inserted central catheter (PICC) with 0.9% sodium chloride before giving an IV antibiotic. Which syringe should the nurse use?",
      rationale:
        "A small syringe barrel creates high pressure inside the catheter for the same push. High pressure can rupture a PICC or separate it from its hub. A syringe with the barrel size of a 10 mL syringe keeps the pressure low. Prefilled flush syringes of that size are common for this reason.",
      sources: [INS],
    }),
    kind: "mc",
    options: [
      { text: "A 1 mL syringe", why: "A 1 mL barrel creates the highest pressure and can rupture the catheter." },
      { text: "A 3 mL syringe", why: "A 3 mL barrel still creates enough pressure to damage the catheter." },
      { text: "A 5 mL syringe", why: "A 5 mL barrel creates more pressure than the recommended size." },
      { text: "A 10 mL syringe", why: "The wider barrel keeps flushing pressure low and protects the catheter." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-43", {
      topic: "Resistance when flushing a central line",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse meets resistance when flushing the distal lumen of a client's triple-lumen central venous catheter. There is no blood return. The lumen flushed easily 4 hours ago. Which action should the nurse take first?",
      rationale:
        "Many occlusions have a simple mechanical cause. The nurse first looks for a closed clamp, a kink in the tubing or a tight suture. Changing the client's position can also help. Forceful flushing, above all with a small syringe, can rupture the catheter or push a clot into the blood. A thrombolytic is used only after mechanical causes are ruled out and with a prescription.",
      sources: [INS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Flush with force using a 3 mL syringe", why: "Force from a small syringe can rupture the catheter or dislodge a clot." },
      { text: "Check for a closed clamp or kinked tubing", why: "Mechanical causes are common and are checked before other steps." },
      { text: "Instill alteplase into the blocked lumen", why: "A thrombolytic needs a prescription and comes after mechanical causes are ruled out." },
      { text: "Remove the catheter and notify the provider", why: "Removal is not the first step for a lumen that may be kinked or clamped." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-44", {
      topic: "Accessing an implanted port",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to access a client's implanted venous port to start chemotherapy. Which actions are appropriate? Select all that apply.",
      rationale:
        "A port septum is pierced only with a non-coring needle, which does not cut a plug out of the septum. The skin is cleaned with chlorhexidine and allowed to dry. A blood return confirms the needle is in the port before a vesicant drug runs. The needle enters straight down, at 90 degrees to the skin. A small syringe creates high pressure in the system.",
      refs: ["A port needle is inserted at 90 degrees to the skin."],
      sources: [INS],
    }),
    kind: "sata",
    options: [
      { text: "Use a standard hypodermic needle", why: "A standard needle cores the septum and damages the port." },
      { text: "Flush the port with a 1 mL syringe", why: "A small syringe creates high pressure that can damage the system." },
      { text: "Use a non-coring safety needle", why: "A non-coring needle passes through the septum without cutting it." },
      { text: "Insert the needle at a shallow angle", why: "The needle goes straight down, at 90 degrees, into the septum." },
      { text: "Clean the skin with chlorhexidine", why: "Chlorhexidine skin antisepsis lowers the risk of infection." },
      { text: "Check for blood return before use", why: "Blood return confirms the needle is in the port before chemotherapy runs." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s17-45", {
      topic: "Central line dressing change",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse changes the transparent dressing over a client's peripherally inserted central catheter. Which actions follow recommended practice? Select all that apply.",
      rationale:
        "The dressing change uses a mask and sterile gloves to protect the site. Chlorhexidine is scrubbed on and left to air dry, which gives it time to work. The dressing is dated so the next change is not missed. A transparent dressing is changed at least every 7 days, or sooner if loose or soiled. Antibiotic ointment on the site can promote fungal infection and resistance.",
      refs: ["A transparent dressing on a central line is changed at least every 7 days. A gauze dressing is changed every 2 days."],
      sources: [CDC_CATHETER, INS],
    }),
    kind: "sata",
    options: [
      { text: "Wear a mask and sterile gloves", why: "A mask and sterile gloves protect the site during the change." },
      { text: "Scrub with chlorhexidine and let it dry", why: "Air drying gives chlorhexidine time to kill organisms." },
      { text: "Apply antibiotic ointment to the site", why: "Ointment on the site can promote fungal infection and resistant organisms." },
      { text: "Label the dressing with the date", why: "Dating the dressing makes the next change easy to track." },
      { text: "Plan the next change in 7 days", why: "A transparent dressing stays on for up to 7 days unless loose or soiled." },
      { text: "Blot the chlorhexidine dry with gauze", why: "Blotting removes the antiseptic before it has time to work." },
      { text: "Plan to leave a gauze dressing for 7 days", why: "A gauze dressing is changed every 2 days." },
    ],
    correct: [0, 1, 3, 4],
  },
  {
    ...meta("rn-s17-46", {
      topic: "Removing a central venous catheter",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to remove a client's nontunneled internal jugular central venous catheter as prescribed. Place the nurse's steps in order.",
      rationale:
        "Lying flat or head down raises venous pressure at the site and lowers the risk of air entry. The dressing and sutures come off next. The catheter is withdrawn while the client bears down, which raises chest pressure. Pressure and an air-occlusive dressing then seal the tract. Sitting upright or breathing in during removal can draw air into the vein.",
      sources: [INS, HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Remove the dressing and sutures", why: "The dressing and sutures come off after the client is positioned." },
      { text: "Sit the client upright at 90 degrees", why: "An upright position lowers venous pressure and raises the risk of air entry." },
      { text: "Apply pressure and an air-occlusive dressing", why: "Pressure and an airtight dressing seal the tract after removal." },
      { text: "Place the client flat or head down", why: "This raises venous pressure at the site before the line is touched." },
      { text: "Withdraw the catheter as the client bears down", why: "Bearing down raises chest pressure and keeps air out during removal." },
      { text: "Have the client inhale deeply during removal", why: "A deep breath in lowers chest pressure and can draw air into the vein." },
    ],
    correct: [3, 0, 4, 2],
  },
  {
    ...meta("rn-s17-47", {
      topic: "Clot in the arm with a PICC",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has had a peripherally inserted central catheter in the right upper arm for 10 days for IV antibiotics. Which findings should the nurse recognize as signs of a catheter-related deep vein thrombosis? Select all that apply.",
      rationale:
        "A clot around a PICC blocks venous return from the arm. The arm and hand swell, and pain can spread to the shoulder and neck. Blocked deep veins force blood through collateral veins on the chest wall, which become distended. A brisk blood return and a normal temperature do not point to a clot. Normal hand color does not rule one out.",
      sources: [INS, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Brisk blood return from the catheter", why: "A brisk return shows the lumen is open and is not a clot sign." },
      { text: "Swelling of the right arm and hand", why: "Blocked venous return from the arm causes swelling." },
      { text: "Normal color of the right hand", why: "Normal color is expected and does not signal a clot." },
      { text: "Pain in the right shoulder and neck", why: "Pain along the vein toward the shoulder and neck can signal a clot." },
      { text: "Temperature 37.0°C (98.6°F)", why: "A normal temperature is not a sign of thrombosis." },
      { text: "Distended veins on the right chest", why: "Collateral veins distend when the deep vein is blocked." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s17-48", {
      topic: "Calories from dextrose in parenteral nutrition",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client receives 1500 mL of parenteral nutrition over 24 hours. The solution contains 20% dextrose. Dextrose provides 3.4 kcal/g. How many kcal does the dextrose supply each day?",
      rationale:
        "A 20% solution holds 20 g of dextrose in each 100 mL. So 1500 mL holds 300 g of dextrose. Each gram of IV dextrose supplies 3.4 kcal, so 300 g supplies 1020 kcal. The value of 4 kcal/g applies to dietary carbohydrate, not to hydrated IV dextrose.",
      calc: { expr: "1500 * 20 / 100 * 3.4", answer: 1020, unit: "kcal", round: 0, steps: ["1500 * 20 / 100 = 300", "300 * 3.4 = 1020"] },
      sources: [PN_SAFETY, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "300 kcal", why: "300 is the grams of dextrose, not the kcal it supplies." },
      { text: "510 kcal", why: "This uses half the dextrose concentration in the bag." },
      { text: "1020 kcal", why: "300 g of dextrose times 3.4 kcal/g is 1020 kcal." },
      { text: "1200 kcal", why: "This uses 4 kcal/g, the value for dietary carbohydrate, not IV dextrose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-49", {
      topic: "Safe administration of parenteral nutrition",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 5,
      stem: "A client with a central venous catheter starts parenteral nutrition that contains dextrose, amino acids and lipid in one bag. Which actions should the nurse plan? Select all that apply.",
      rationale:
        "Parenteral nutrition runs through a dedicated lumen to limit contamination and drug incompatibility. A bag with lipid is filtered with a 1.2 micron filter. Glucose is checked on a set schedule because the dextrose load can cause hyperglycemia. Drugs are not added to the bag on the unit. The rate is not increased to catch up. Each bag hangs no longer than 24 hours.",
      refs: ["A parenteral nutrition bag that contains lipid is filtered with a 1.2 micron filter and hangs no longer than 24 hours."],
      sources: [PN_SAFETY, INS],
    }),
    kind: "sata",
    options: [
      { text: "Add the IV antibiotic to the nutrition bag", why: "Additives on the unit risk incompatibility and contamination." },
      { text: "Infuse through a dedicated lumen", why: "A dedicated lumen limits contamination and drug incompatibility." },
      { text: "Increase the rate to catch up after a delay", why: "Speeding up can cause hyperglycemia and fluid overload." },
      { text: "Use a 1.2 micron in-line filter", why: "A 1.2 micron filter suits a bag that contains lipid." },
      { text: "Hang each bag for up to 48 hours", why: "Each bag hangs no longer than 24 hours to limit bacterial growth." },
      { text: "Check capillary glucose on a set schedule", why: "The dextrose load can raise glucose, so it is checked regularly." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s17-50", {
      topic: "Review of a client on parenteral nutrition",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client is on day 4 of parenteral nutrition through a double-lumen peripherally inserted central catheter. The nurse reviews the morning note. Click to highlight the findings that show the plan of care needs to change.",
      rationale:
        "A glucose of 318 mg/dL is well above the hospital target, so the plan for glucose needs review. A bag hung 27 hours ago has passed the 24 hour limit and is replaced. An antibiotic running into the nutrition lumen breaks the dedicated lumen rule. A weight gain of 0.4 kg, a dry transparent dressing, clear lungs and a potassium of 4.1 mEq/L are acceptable.",
      refs: [
        "The hospital glucose target for most clients is 140 mg/dL (7.8 mmol/L) to 180 mg/dL (10.0 mmol/L).",
        "Each parenteral nutrition bag hangs no longer than 24 hours.",
        "Serum potassium reference range is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L).",
      ],
      sources: [PN_SAFETY, ADA_HOSPITAL, { body: "Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16" }],
      canada: "Diabetes Canada sets in-hospital targets of 5.0 to 8.0 mmol/L before meals and below 10.0 mmol/L at random for most noncritically ill clients. A glucose of 17.6 mmol/L is well above either target.",
    }),
    kind: "highlight",
    passage:
      "[[Capillary glucose 318 mg/dL (17.6 mmol/L)]]. [[Weight up 0.4 kg since yesterday]]. [[Nutrition bag hung 27 hours ago]]. [[IV antibiotic running into the nutrition lumen]]. [[Transparent dressing dry and intact, dated 2 days ago]]. [[Lungs clear]]. [[Serum potassium 4.1 mEq/L (4.1 mmol/L)]].",
    spans: [
      { text: "Capillary glucose 318 mg/dL (17.6 mmol/L)", why: "This is well above the target of 140 to 180 mg/dL, so glucose control needs review." },
      { text: "Weight up 0.4 kg since yesterday", why: "A small daily gain is acceptable during nutrition support." },
      { text: "Nutrition bag hung 27 hours ago", why: "A bag past 24 hours is at risk of bacterial growth and is replaced." },
      { text: "IV antibiotic running into the nutrition lumen", why: "The nutrition lumen is dedicated and is not used for other drugs." },
      { text: "Transparent dressing dry and intact, dated 2 days ago", why: "A dry, intact transparent dressing within its change time is acceptable." },
      { text: "Lungs clear", why: "Clear lungs do not suggest fluid overload." },
      { text: "Serum potassium 4.1 mEq/L (4.1 mmol/L)", why: "A potassium of 4.1 mEq/L is within the reference range." },
    ],
    correct: [0, 2, 3],
  },
];
