import type { Item } from "@/engine/types";
import { AHA_HF, ASPEN_EN, CAUTI, HINKLE, KDOQI, POTTER, SCCM_ASPEN, STOPBANG, WOCN, meta } from "./common";

/** Batch s14, items 01 to 10. */
export const PART1: Item[] = [
  {
    ...meta("rn-s14-01", {
      topic: "Choosing a crutch gait",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client with weakness in both legs may bear partial weight on each leg. The client has poor balance and walks slowly. The physical therapist has fitted axillary crutches. Which crutch gait should the nurse reinforce?",
      rationale:
        "The four-point gait keeps three points on the floor at all times. It suits a client who can bear partial weight on both legs. It is the slowest and most stable gait, which fits this client's poor balance. The two-point gait is faster but needs more balance. The three-point gait is for a client who cannot bear weight on one leg. The swing-through gait needs strong arms and good balance.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Two-point gait", why: "The two-point gait also allows partial weight on both legs but needs more balance and strength." },
      { text: "Three-point gait", why: "The three-point gait protects one leg that bears little or no weight. Both legs here can bear partial weight." },
      { text: "Four-point gait", why: "The four-point gait is the most stable. It suits partial weight bearing on both legs with poor balance." },
      { text: "Swing-through gait", why: "Swing-through needs strong arms and good balance. It is used when the legs cannot move one at a time." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s14-02", {
      topic: "Applying an external urinary catheter",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 78-year-old man with urge incontinence is alert and cooperative. A bladder scan shows no urinary retention. The nurse plans to apply an external condom catheter. Which actions should the nurse take? Select all that apply.",
      rationale:
        "An external catheter suits a cooperative man with incontinence and no retention. It avoids the infection risk of an indwelling catheter. Clean, dry skin helps the sheath hold. A spiral adhesive strip allows for swelling and does not constrict. A gap at the tip stops the sheath rubbing the glans and lets urine drain. Daily removal lets the nurse check the skin. The foreskin stays in its normal position. Hair is clipped, not shaved.",
      sources: [CAUTI, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Wash and dry the penis first", why: "Clean, dry skin lets the sheath adhere and lowers skin irritation." },
      { text: "Retract the foreskin under the sheath", why: "A foreskin left retracted can constrict the glans. It stays in its normal position." },
      { text: "Apply the adhesive strip in a spiral", why: "A spiral wrap allows for swelling and does not cut off blood flow." },
      { text: "Wrap the adhesive strip in a full circle", why: "A circular wrap can act as a tourniquet if the penis swells." },
      { text: "Leave a gap between the tip and the sheath end", why: "The gap stops friction on the glans and lets urine flow into the tubing." },
      { text: "Shave the pubic hair before applying", why: "Shaving can nick and irritate the skin. Long hair is clipped instead." },
      { text: "Remove the sheath and inspect the skin daily", why: "Daily removal lets the nurse check for irritation and swelling." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s14-03", {
      topic: "Resistance during passive range of motion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse performs passive range of motion on the right shoulder of a client who had a stroke 5 days ago. During abduction the client grimaces, and the nurse feels resistance at about 90 degrees. What should the nurse do?",
      rationale:
        "Passive range of motion moves a joint only to the point of resistance or pain. The grimace and the resistance at 90 degrees mark the safe limit for this session. Forcing the joint can injure the soft tissue around a weak shoulder. Speed does not reduce strain. Pushing against the nurse's hand is a resistive exercise, which does not fit this passive session.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Stop at the point of resistance", why: "Passive motion goes only to resistance or pain. This protects the joint and soft tissue." },
      { text: "Apply steady pressure past the resistance", why: "Forcing a joint past resistance can tear soft tissue and cause pain." },
      { text: "Move the joint faster to finish the set", why: "Faster movement adds strain and does not make the motion safer." },
      { text: "Ask the client to push against the hand", why: "Pushing against the nurse is a resistive exercise. It does not address the pain and resistance." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-04", {
      topic: "Gastric residual volume and feeding tolerance",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client in the intensive care unit receives continuous enteral feeding through a nasogastric tube at 55 mL per hour. The head of the bed is at 35 degrees. The nurse measures a gastric residual volume of 250 mL. The abdomen is soft and not distended. The client has no nausea or vomiting. What should the nurse do?",
      rationale:
        "A residual of 250 mL is under 500 mL. Feeding is not held below that level when there are no other signs of intolerance. The soft abdomen and the absence of nausea or vomiting show no other sign of intolerance. The head of the bed at 35 degrees already lowers aspiration risk. The feeding continues at the same rate. Holding or slowing the feeding cuts nutrition without adding safety.",
      refs: ["Enteral feeding is not held for a gastric residual volume under 500 mL when there are no other signs of intolerance."],
      sources: [SCCM_ASPEN],
    }),
    kind: "mc",
    options: [
      { text: "Hold the feeding for 2 hours", why: "Holding the feeding for a residual under 500 mL with no other signs cuts nutrition without benefit." },
      { text: "Continue at the same rate", why: "The residual is under 500 mL and there are no other signs of intolerance." },
      { text: "Lower the feeding rate by half", why: "Slowing the rate lowers delivered calories. Nothing in the stem shows intolerance." },
      { text: "Change to bolus feeds every 4 hours", why: "Bolus feeds put larger volumes in the stomach at once. They do not help a tolerant client." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-05", {
      topic: "Lower potassium snacks on hemodialysis",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client on hemodialysis has a serum potassium of 5.9 mEq/L (5.9 mmol/L). The dietitian has advised lower potassium food choices. Which two snacks should the nurse suggest? Select two.",
      rationale:
        "A potassium of 5.9 mEq/L is above the normal range, so the diet limits high potassium foods. Apples and blueberries are low in potassium. Bananas, orange juice, baked potatoes and dried apricots are high in potassium. Drying fruit concentrates its potassium.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      canada: "Canadian labs report serum potassium in mmol/L only. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the reference range, so 5.9 mmol/L is high.",
      sources: [KDOQI, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Apple slices", why: "Apples are a low potassium fruit that fits this diet." },
      { text: "A banana", why: "Bananas are high in potassium and would raise the level further." },
      { text: "Orange juice", why: "Orange juice is a high potassium drink." },
      { text: "Fresh blueberries", why: "Blueberries are a low potassium fruit that fits this diet." },
      { text: "A baked potato", why: "A baked potato is one of the highest potassium foods." },
      { text: "Dried apricots", why: "Drying concentrates potassium, so dried apricots are high in it." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s14-06", {
      topic: "Logrolling after spinal fusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is on day 1 after a lumbar spinal fusion. Two nurses will logroll the client onto the left side. Place each step in the phase of the turn where it belongs.",
      rationale:
        "A pillow between the knees before the turn keeps the hips and spine aligned. During the turn the nurses move the shoulders, hips and legs together as one unit on a count. After the turn a pillow along the back holds the position. Pulling on a side rail twists the trunk. Turning the shoulders ahead of the hips twists the fused segment.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Before the turn", "During the turn", "After the turn"],
    tokens: [
      { text: "Support the back with a pillow", why: "A pillow along the back after the turn keeps the client from rolling back." },
      { text: "Have the client pull on the side rail", why: "Pulling on a rail twists the trunk and strains the fusion." },
      { text: "Place a pillow between the knees", why: "A pillow between the knees before the turn keeps the hips and spine in line." },
      { text: "Turn the shoulders before the hips", why: "Turning the shoulders first twists the spine at the fused level." },
      { text: "Move the body as one unit on a count", why: "Moving as one unit on a count keeps the spine straight during the turn." },
    ],
    correct: [2, 4, 0],
  },
  {
    ...meta("rn-s14-07", {
      topic: "Clearing a blocked feeding tube",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receives formula through a small-bore nasogastric feeding tube. The pump alarms for an occlusion. The tubing is not kinked. The nurse cannot flush water through the tube with gentle pressure. Which action should the nurse take next?",
      rationale:
        "Warm water with a gentle push and pull on the syringe is the first step to clear a blocked tube. Cranberry juice and cola can make the blockage worse. Reinserting the guide wire can perforate the tube and the gut. If water fails, the nurse follows the unit protocol, which may use a declogging enzyme or a device.",
      sources: [ASPEN_EN, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Instill cranberry juice and wait", why: "Acidic juice can curdle formula and make the blockage worse." },
      { text: "Reinsert the guide wire to clear the tube", why: "A guide wire in a placed tube can pierce the tube wall and the gut." },
      { text: "Flush the tube with carbonated cola", why: "Cola is less effective than water and can worsen the clog." },
      { text: "Try warm water with push-pull flushes", why: "Warm water with a gentle push and pull is the first step to clear a blocked tube." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s14-08", {
      topic: "Cues of sleep-disordered breathing",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the admission note of a 58-year-old man before elective knee surgery. Click to highlight the findings that suggest obstructive sleep apnea.",
      rationale:
        "Loud snoring, breathing pauses seen by a bed partner and daytime sleepiness are core cues of obstructive sleep apnea. A neck circumference of 44 cm and a BMI of 37 kg/m2 are screening risk factors. Treated high blood pressure also counts. Daily walking, reading glasses and an absent drug allergy do not point to sleep apnea.",
      refs: ["STOP-Bang risk items: loud snoring, daytime tiredness, observed apnea, high blood pressure, BMI over 35 kg/m2, age over 50, neck circumference over 40 cm and male sex."],
      sources: [STOPBANG],
    }),
    kind: "highlight",
    passage:
      "[[Snores loudly most nights, per his wife]]. [[Wife has seen him stop breathing in his sleep]]. [[Falls asleep while reading in the afternoon]]. [[Walks 2 km each morning]]. [[Neck circumference 44 cm]]. [[BMI 37 kg/m2]]. [[Takes amlodipine for high blood pressure]]. [[Wears reading glasses]]. [[No known drug allergies]].",
    spans: [
      { text: "Snores loudly most nights, per his wife", why: "Loud snoring is a core screening cue for sleep apnea." },
      { text: "Wife has seen him stop breathing in his sleep", why: "Observed breathing pauses are a key sign of obstructive sleep apnea." },
      { text: "Falls asleep while reading in the afternoon", why: "Daytime sleepiness reflects broken sleep from repeated airway collapse." },
      { text: "Walks 2 km each morning", why: "Regular walking is a healthy habit and is not a cue for sleep apnea." },
      { text: "Neck circumference 44 cm", why: "A neck over 40 cm is a screening risk factor for airway collapse." },
      { text: "BMI 37 kg/m2", why: "A BMI over 35 kg/m2 is a screening risk factor for sleep apnea." },
      { text: "Takes amlodipine for high blood pressure", why: "High blood pressure is one of the screening items and is linked to sleep apnea." },
      { text: "Wears reading glasses", why: "Needing reading glasses is common with age and is unrelated to sleep apnea." },
      { text: "No known drug allergies", why: "Allergy status has no link to sleep apnea." },
    ],
    correct: [0, 1, 2, 4, 5, 6],
  },
  {
    ...meta("rn-s14-09", {
      topic: "Lunch on a sodium-limited diet",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A client with heart failure has a prescription for a 2000 mg sodium diet. The client asks for help choosing lunch from the hospital menu. Which choice should the nurse recommend?",
      rationale:
        "Fresh meat, plain rice and fresh vegetables have little added sodium. Canned soup, crackers, deli meat, pickles and frozen prepared meals are some of the largest sources of sodium in the diet. Limiting sodium helps control fluid retention and congestion in heart failure.",
      sources: [AHA_HF, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Canned vegetable soup and saltine crackers", why: "Canned soup and salted crackers are high in added sodium." },
      { text: "Turkey deli sandwich with a dill pickle", why: "Deli meat and pickles are cured in salt and are high in sodium." },
      { text: "Frozen macaroni and cheese dinner", why: "Frozen prepared meals carry a large amount of added sodium." },
      { text: "Baked chicken, rice and fresh green beans", why: "Fresh foods cooked plainly are low in sodium." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s14-10", {
      topic: "Rising ileostomy output",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A client had an ileostomy formed for ulcerative colitis. The nurse reviews the flow sheet for days 3 to 5 after surgery. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Intake and Output",
          table: {
            head: ["Measure", "Day 3", "Day 4", "Day 5"],
            rows: [
              ["Ileostomy output (mL/24 hours)", "900", "1400", "1900"],
              ["Urine output (mL/24 hours)", "1500", "1100", "700"],
              ["Weight (kg)", "72.0", "71.1", "70.2"],
              ["Heart rate (/minute)", "78", "92", "104"],
            ],
          },
        },
      ],
      rationale:
        "Ileostomy output rises from 900 to 1900 mL/24 hours while urine output falls from 1500 to 700 mL/24 hours. Weight drops from 72.0 to 70.2 kg and the heart rate climbs from 78 to 104/minute. Losing more fluid through the stoma than is replaced leads to a volume deficit. Fluid excess would raise weight. A blocked stoma would lower output.",
      sources: [WOCN, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Fluid volume deficit", why: "Rising stoma loss with falling urine, falling weight and a rising pulse fits a deficit." },
      { text: "Fluid volume excess", why: "Fluid excess raises weight. Here weight falls each day." },
      { text: "Obstruction of the stoma", why: "An obstructed stoma lowers output. Here the output rises each day." },
      { text: "Expected adaptation", why: "Falling urine output and a rising pulse are not expected as the bowel adapts." },
    ],
    correct: 0,
  },
];
