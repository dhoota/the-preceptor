import type { Item } from "@/engine/types";
import { AAP_FORESKIN, ALA_NEB, BURN_REHAB, COOLING, GINA, HINKLE, LOVENOX, OSSUR_LINER, PARAPHIMOSIS, PDQ_GI, POTTER, SPACER_DGT, SPACER_GGC, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s34-41", {
      need: "BCC",
      topic: "Commode instead of bedpan in hospice care",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A 78-year-old client receiving hospice care in a nursing home is weak but can stand and pivot with the help of one person. The client has not had a bowel movement in 3 days and now feels the urge after breakfast. The client asks for a bedpan. Which action should the nurse take?",
      rationale:
        "The client feels the urge now, so the nurse responds at once. A bedside commode lets the client sit upright, which uses gravity and makes passing stool easier than on a bedpan. Bedpans are avoided whenever possible. Privacy and quiet time support defecation. Delaying the urge lets stool dry out further in the colon.",
      sources: [PDQ_GI, POTTER],
      version: 2,
    }),
    kind: "mc",
    options: [
      { text: "Place the bedpan and raise the head of the bed", why: "A bedpan is avoided when possible because it makes defecation harder." },
      { text: "Offer a laxative and wait for a stronger urge", why: "The urge is present now. Waiting lets stool dry and harden." },
      { text: "Help the client to a bedside commode in private", why: "Sitting upright in private on a commode makes defecation easier." },
      { text: "Give a warm drink and recheck in 2 hours", why: "A warm drink helps before the usual time, but this urge needs a response now." },
    ],
    correct: 2,
  },
  // PULL: tests the same point as rn-s21-35 (shivering produces heat and raises oxygen use, so it works against cooling). A unique rewrite would change the key.
  {
    ...meta("rn-s34-42", {
      need: "BCC",
      topic: "Shivering on a cooling blanket",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 54-year-old client with pneumonia has a temperature of 40.1°C (104.2°F). The primary health care provider prescribes a cooling blanket with a goal temperature of 38.0°C (100.4°F). The nurse reviews the flow sheet. Which interpretation of the trend is correct?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "1000", "1030", "1100", "1130"],
            rows: [
              ["Temperature (°C)", "40.1", "39.4", "39.0", "39.3"],
              ["Shivering", "None", "None", "Mild, jaw", "Marked, whole body"],
              ["Heart rate (/minute)", "112", "106", "110", "124"],
            ],
          },
        },
      ],
      rationale:
        "The temperature fell from 40.1 to 39.0°C, then rose to 39.3°C as shivering spread from the jaw to the whole body. The heart rate climbed to 124/minute. Shivering produces heat and raises oxygen use, so it works against the blanket. Shivering is a common adverse effect of cooling blankets. The nurse reports it so the cooling can be adjusted and the shivering treated.",
      sources: [COOLING, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "The blanket is cooling the client on schedule", why: "The temperature has started to rise again, so cooling is not on track." },
      { text: "The fever is breaking on its own", why: "The temperature rose again at 1130 and is still above the goal." },
      { text: "Rebound hypothermia is developing", why: "The temperature is 39.3°C, well above the goal of 38.0°C." },
      { text: "Shivering is producing heat against the cooling", why: "Rising shivering came with a rise in temperature and heart rate." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s34-43", {
      need: "BCC",
      topic: "Order of perineal care with a foreskin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse gives perineal care to a 70-year-old uncircumcised man who is on bed rest after a stroke. Place the steps in order.",
      rationale:
        "The foreskin is gently retracted to expose the glans. The glans is washed in a circular motion from the meatus outward, which moves away from the cleanest area. It is rinsed and dried. The foreskin is then returned over the glans, because a foreskin left retracted can tighten and cause paraphimosis. The shaft and scrotum are washed last.",
      sources: [POTTER, PARAPHIMOSIS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Return the foreskin over the glans", why: "The foreskin goes back once the glans is clean and dry." },
      { text: "Wash the shaft and scrotum", why: "The shaft and scrotum are washed after the foreskin is returned." },
      { text: "Gently retract the foreskin", why: "Retraction comes first to expose the glans." },
      { text: "Leave the foreskin back to air dry", why: "A foreskin left retracted can trap the glans and cause paraphimosis." },
      { text: "Rinse and dry the glans", why: "Rinsing and drying follow washing and come before the foreskin is returned." },
      { text: "Wash the glans from the meatus outward", why: "Washing outward from the meatus moves away from the cleanest area." },
      { text: "Wash the glans inward toward the meatus", why: "Washing toward the meatus carries organisms to the urethral opening." },
    ],
    correct: [2, 5, 4, 0, 1],
  },
  {
    ...meta("rn-s34-44", {
      need: "BCC",
      topic: "Trapped foreskin after catheter insertion",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 76-year-old uncircumcised man had an indwelling urinary catheter inserted 6 hours ago. He now reports penile pain. The glans is swollen and dusky, with a tight ring of retracted foreskin behind it. The catheter drains clear urine. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The foreskin was retracted for the catheter and not returned. The tight ring blocks venous and lymph return, so the glans swells and turns dusky. Paraphimosis is a urologic emergency, because rising swelling can cut off arterial flow. The nurse notifies the primary health care provider promptly. Cold applied through a cloth reduces the swelling before manual reduction. Glans color and pain show whether blood flow is improving.",
      sources: [PARAPHIMOSIS, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Phimosis", why: "Phimosis is a foreskin that cannot retract. This foreskin is stuck retracted." },
      { text: "Paraphimosis", why: "A retracted foreskin trapped behind a swollen glans fits paraphimosis." },
      { text: "Balanitis from infection", why: "Balanitis causes redness and discharge, not a tight retracted ring." },
      { text: "Latex contact reaction", why: "A contact reaction causes a rash, not a constricting ring of foreskin." },
    ],
    actions: [
      { text: "Apply warm packs to the penis", why: "Heat increases blood flow and swelling. Cold is used to reduce it." },
      { text: "Notify the primary health care provider now", why: "Paraphimosis is an emergency that needs prompt reduction." },
      { text: "Retract the foreskin further to clean it", why: "Further retraction tightens the ring and worsens the swelling." },
      { text: "Apply a cold pack wrapped in a cloth", why: "Cold reduces the swelling that keeps the foreskin trapped." },
      { text: "Recheck the penis in 4 hours", why: "Waiting risks loss of blood flow to the glans." },
    ],
    parameters: [
      { text: "Color of the glans", why: "A dusky color that worsens means blood flow is falling." },
      { text: "Serum sodium level", why: "Sodium does not reflect blood flow to the glans." },
      { text: "Respiratory rate", why: "Breathing is not affected by this local problem." },
      { text: "Penile pain intensity", why: "Rising pain can signal worsening ischemia." },
      { text: "Blood glucose level", why: "Glucose does not guide care of paraphimosis." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s34-45", {
      need: "BCC",
      topic: "Foreskin care in a young infant",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the parents of a 2-week-old uncircumcised boy about penile care. Which statement by a parent shows understanding?",
      rationale:
        "At birth the foreskin is attached to the glans. It separates on its own over months or years. Until it does, the outside is washed with warm water and the foreskin is not pulled back. Forcing it back can cause pain, bleeding and tears. Swabs under the foreskin and alcohol wipes injure or irritate the tissue.",
      sources: [AAP_FORESKIN],
    }),
    kind: "mc",
    options: [
      { text: "\"We will pull the foreskin back to clean under it daily.\"", why: "The foreskin is attached at birth and is not pulled back." },
      { text: "\"We will wash the outside with warm water at bath time.\"", why: "Warm water on the outside is all an infant's foreskin needs." },
      { text: "\"We will use cotton swabs to clean under the foreskin.\"", why: "Swabs under an attached foreskin can injure the tissue." },
      { text: "\"We will clean it with alcohol wipes at each change.\"", why: "Alcohol irritates the delicate skin of the penis." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s34-46", {
      need: "BCC",
      topic: "Daily residual limb and liner hygiene",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 66-year-old client had a right below-knee amputation 3 months ago and now wears a prosthesis with a silicone liner. The nurse reviews daily limb care with the client. Which statements by the client show correct care? Select all that apply.",
      rationale:
        "The residual limb is washed daily with mild soap and water and dried well before the liner goes on. A mirror lets the client see the back of the limb for redness or breakdown. The liner is washed each day and dried, because sweat and bacteria build up inside it. Lotion softens skin under the liner. Long soaks cause swelling. Alcohol dries and cracks the skin.",
      sources: [OSSUR_LINER, HINKLE],
      version: 2,
    }),
    kind: "sata",
    options: [
      { text: "\"I wash my limb with mild soap and water.\"", why: "Daily washing removes sweat and bacteria from the skin." },
      { text: "\"I rub lotion on my limb before the liner.\"", why: "Lotion softens the skin under the liner and can lead to breakdown." },
      { text: "\"I check my limb with a mirror every day.\"", why: "A mirror shows areas the client cannot see directly." },
      { text: "\"I soak my limb in a warm bath for 30 minutes.\"", why: "Long soaks cause swelling, so the socket may not fit." },
      { text: "\"I dry my limb well before the liner goes on.\"", why: "Dry skin under the liner resists breakdown." },
      { text: "\"I wash the liner each day and let it dry.\"", why: "A clean liner limits sweat and bacteria against the skin." },
      { text: "\"I dab alcohol on the limb to toughen the skin.\"", why: "Alcohol dries and cracks the skin." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s34-47", {
      need: "PPT",
      topic: "Cleaning a valved holding chamber",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 40-year-old client with asthma uses a fluticasone metered-dose inhaler with a valved spacer. The client asks how to clean the spacer. Which instruction should the nurse give?",
      rationale:
        "The spacer is washed about once a month in warm water with mild liquid detergent, then left to air dry. Drying with a towel can build static on the plastic, so the spray clings to the walls instead of reaching the lungs. Detergent keeps the drug from building up. The spacer is replaced about every 12 months, not only when it cracks.",
      refs: ["Spacers are washed about once a month and replaced about every 12 months."],
      sources: [SPACER_GGC, SPACER_DGT, GINA],
    }),
    kind: "mc",
    options: [
      { text: "Dry the inside with a clean towel", why: "Towel drying can cause static that holds the drug on the walls." },
      { text: "Replace it only when it cracks", why: "Spacers are replaced about every 12 months." },
      { text: "Wash it in warm soapy water and air dry", why: "Warm water with detergent and air drying keeps the spacer working." },
      { text: "Rinse it in plain water without soap", why: "Mild liquid detergent is used in the wash." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s34-48", {
      need: "PPT",
      topic: "Watching a home nebulizer treatment",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 70-year-old client with COPD uses albuterol by small-volume nebulizer at home. The home health nurse watches a treatment. Which observation shows correct technique?",
      rationale:
        "The treatment continues until all the medicine is gone from the cup. The client sits upright with the lips sealed around the mouthpiece and takes normal breaths through the mouth. Normal breathing carries the mist deep into the lungs. Rapid shallow breaths leave the drug in the throat. Lying flat limits lung expansion. Stopping early leaves part of the dose unused.",
      sources: [ALA_NEB],
      canada: "Albuterol is sold in Canada under the name salbutamol.",
    }),
    kind: "mc",
    options: [
      { text: "Lies flat in bed during the treatment", why: "Sitting upright lets the lungs expand and keeps the cup level." },
      { text: "Takes rapid, shallow breaths through the mouth", why: "Rapid shallow breaths leave much of the mist in the throat." },
      { text: "Stops the treatment once the mist first slows", why: "Stopping early leaves part of the dose in the cup." },
      { text: "Continues until the medicine cup is empty", why: "Running the treatment to the end delivers the full dose." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s34-49", {
      need: "PPT",
      topic: "Skin fold and site rotation for enoxaparin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse gives enoxaparin 40 mg subcutaneously from a prefilled syringe to a client lying supine on day 2 after hip surgery. Yesterday's dose went into the left side of the abdomen. Which technique is correct?",
      rationale:
        "The labeling directs that the whole needle enter a skin fold held between thumb and forefinger. The fold is held throughout the injection. Sites alternate between the left and right abdominal wall, so today's dose goes on the right. Releasing the fold early or inserting part of the needle can place the drug at the wrong depth.",
      sources: [LOVENOX],
    }),
    kind: "mc",
    options: [
      { text: "Hold the skin fold until the injection is done", why: "The labeling directs that the fold be held throughout the injection." },
      { text: "Release the skin fold once the needle is in", why: "Releasing the fold early can change the depth of the injection." },
      { text: "Inject on the left side of the abdomen again", why: "Sites alternate sides, so today's dose goes on the right." },
      { text: "Insert half the needle length into the fold", why: "The whole needle length is inserted into the skin fold." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-50", {
      need: "BCC",
      topic: "Resting splint position for a burned hand",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 33-year-old client has deep partial-thickness burns over the back of the right hand. The occupational therapist will fit a resting hand splint, and the client prefers to keep the hand curled in a loose fist. Which splint position should the nurse expect?",
      rationale:
        "Burns on the back of the hand pull the knuckles into hyperextension and the finger joints into flexion. The anti-contracture splint holds the wrist in slight extension, the knuckles bent and the finger joints straight. This keeps the tight structures stretched. A loose fist is the position of comfort, which becomes the position of contracture. Straight knuckles with bent fingers is the clawed position the splint prevents.",
      sources: [BURN_REHAB],
    }),
    kind: "mc",
    options: [
      { text: "Wrist flexed and fingers curled into a fist", why: "The position of comfort becomes a contracture position." },
      { text: "Wrist extended, knuckles bent, finger joints straight", why: "This position stretches the structures that dorsal hand burns tighten." },
      { text: "Wrist neutral, knuckles straight, fingers bent", why: "Straight knuckles with bent fingers is the claw deformity the splint prevents." },
      { text: "Wrist flexed, knuckles straight, fingers spread", why: "Wrist flexion and straight knuckles let the burn contract." },
    ],
    correct: 1,
  },
];
