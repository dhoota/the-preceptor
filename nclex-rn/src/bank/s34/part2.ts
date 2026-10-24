import type { Item } from "@/engine/types";
import { BURN_REHAB, CAUTI, CDIFF, HINKLE, LEHNE, MSK_IRRIGATION, NASAL, NPIAP, ORTHOSES, POTTER, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s34-11", {
      need: "BCC",
      topic: "Straight catheter placed in the vagina",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse inserts a straight catheter to drain the bladder of a 52-year-old woman with urinary retention after knee surgery. After the catheter is advanced, no urine returns. The nurse sees that the tip has entered the vagina. Which action should the nurse take?",
      rationale:
        "The misplaced catheter stays in the vagina as a landmark, so the next attempt avoids the vaginal opening. A new sterile catheter is inserted into the urethral meatus, which lies above the vaginal opening. A catheter that has entered the vagina is contaminated and is not moved into the urethra. The first catheter comes out once the new one drains urine.",
      sources: [POTTER, CAUTI],
    }),
    kind: "mc",
    options: [
      { text: "Leave it in place and insert a new sterile catheter", why: "The first catheter marks the vagina, and a sterile catheter protects the bladder." },
      { text: "Withdraw it and guide the same tip into the urethra", why: "The tip is contaminated with vaginal flora and would carry them into the bladder." },
      { text: "Advance the same catheter another 5 cm", why: "The tip is in the vagina, so advancing it will not reach urine." },
      { text: "Remove it and record a failed attempt", why: "The retention still needs relief. A second sterile attempt can be made now." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-12", {
      need: "BCC",
      topic: "Collecting stool for a toxin test",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 77-year-old client has had 4 watery stools since breakfast. The primary health care provider prescribes a stool test for Clostridioides difficile toxin. Which actions should the nurse take when collecting the specimen? Select all that apply.",
      rationale:
        "The test is done on unformed stool, which this client is passing. Stool is caught in a clean hat or bedpan, because toilet water, urine and paper dilute or contaminate it. The nurse wears gloves and a gown, since spores spread by contact. The container is labeled at the bedside to prevent a mix-up, and it goes to the laboratory promptly.",
      sources: [CDIFF, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Scoop stool from the toilet bowl water", why: "Toilet water dilutes and contaminates the sample." },
      { text: "Collect liquid stool in a clean hat or bedpan", why: "A clean container keeps the sample free of water and urine." },
      { text: "Wait for a formed stool before sending one", why: "The toxin test is run on unformed stool, so a formed stool is not sent." },
      { text: "Keep urine and toilet paper out of the sample", why: "Urine and paper can contaminate the sample and affect the result." },
      { text: "Hold the sample in the room until next shift", why: "A delayed sample can give an unreliable result. It goes to the laboratory promptly." },
      { text: "Wear gloves and a gown during collection", why: "Spores spread by contact, so gloves and a gown protect the nurse." },
      { text: "Label the container at the bedside", why: "Labeling in front of the client prevents a specimen mix-up." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s34-13", {
      need: "PPT",
      topic: "Nosebleeds with a nasal steroid spray",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 34-year-old client with allergic rhinitis started fluticasone nasal spray, one spray in each nostril daily, 2 weeks ago. The client has had two nosebleeds since starting it. Which technique should the nurse teach?",
      rationale:
        "Spray aimed at the nasal septum irritates its thin lining and is a common cause of nosebleeds with nasal steroids. Pointing the nozzle toward the outer side of the nostril, for example by using the opposite hand, spreads the drug over the nasal lining. The head tips slightly forward. A gentle sniff keeps the spray in the nose instead of the throat.",
      sources: [NASAL, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Tilt the head far back before spraying", why: "Tilting back sends the spray down the throat." },
      { text: "Aim the nozzle toward the middle of the nose", why: "Spray aimed at the septum irritates it and causes nosebleeds." },
      { text: "Sniff hard so the spray reaches the throat", why: "A hard sniff pulls the drug into the throat, where it does not act." },
      { text: "Aim the tip toward the outer nostril wall", why: "Aiming away from the septum spreads the drug and protects the septum." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s34-14", {
      need: "BCC",
      topic: "Water, bag height and cone for colostomy irrigation",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 60-year-old client with a descending colostomy is learning to irrigate it at home to regulate bowel movements. Complete the sentence by dragging a choice into each blank.",
      rationale:
        "Irrigation uses warm water, never hot or cold, and no more than 1000 mL. The bottom of the bag hangs at shoulder level, about 45 cm above the stoma, so the water flows gently by gravity. The water goes in through a lubricated cone tip, which seals the stoma without entering the bowel deeply. A straight catheter can perforate the bowel. Cold water causes cramping.",
      refs: ["Colostomy irrigation uses no more than 1000 mL of warm water, with the bottom of the bag at shoulder level, about 45 cm above the stoma."],
      sources: [MSK_IRRIGATION],
    }),
    kind: "dnd",
    scoring: "zero-one",
    template: "The client fills the bag with {0}, hangs it so the bottom is at {1} and lets the water flow in through {2}.",
    targets: ["Water", "Bag height", "Device"],
    tokens: [
      { text: "up to 1000 mL of warm water", why: "Warm water up to 1000 mL is the volume and temperature used." },
      { text: "1500 mL of cool tap water", why: "This is too much water, and cool water causes cramping." },
      { text: "shoulder level", why: "Shoulder level gives gentle gravity flow into the bowel." },
      { text: "the level of the stoma", why: "A bag level with the stoma gives too little pressure for flow." },
      { text: "a lubricated cone tip", why: "A cone seals the stoma without passing deep into the bowel." },
      { text: "a straight catheter pushed deep", why: "A catheter pushed deep can perforate the bowel wall." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s34-15", {
      need: "BCC",
      topic: "Cramping during colostomy irrigation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is irrigating a sigmoid colostomy with warm water while the nurse watches. After about 300 mL has run in, the client reports strong abdominal cramping. Which action should the nurse take first?",
      rationale:
        "Cramping during irrigation means the water is entering too fast or the bowel is contracting. The flow is stopped first and the client breathes slowly until the cramp eases. The irrigation then resumes at a slower rate. Raising the bag speeds the flow and worsens cramping. Cold water also causes cramping. Ending the irrigation is not needed when cramping passes.",
      sources: [MSK_IRRIGATION],
    }),
    kind: "mc",
    options: [
      { text: "Raise the bag so the flow finishes sooner", why: "A higher bag speeds the flow and worsens the cramping." },
      { text: "Remove the cone and end the irrigation", why: "Cramping usually passes once the flow stops, so the irrigation can continue." },
      { text: "Stop the flow and let the cramping ease", why: "Pausing the flow lets the bowel settle before slower flow resumes." },
      { text: "Switch to cool water for the remainder", why: "Cool water triggers cramping. Warm water is used throughout." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s34-16", {
      need: "BCC",
      topic: "Skin check after a new ankle-foot orthosis",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 47-year-old client who had a stroke 3 weeks ago began wearing a new ankle-foot orthosis on the right leg yesterday. The nurse removes it after a 2-hour wearing period and writes the note below. Click to highlight the findings that need follow-up.",
      rationale:
        "Pink marks that fade within minutes are expected with a new orthosis. A red area over the outer ankle bone that is still present 40 minutes after removal shows excess pressure. Redness should fade within about 20 minutes. Tingling in the toes suggests pressure on a nerve or reduced blood flow. The client stops wearing the device until the orthotist adjusts it. A cotton sock, a seated heel and fastening the ankle strap first are correct.",
      refs: ["Skin redness after removing an orthosis should fade within about 20 minutes. Redness that lasts longer means the orthosis needs adjusting."],
      sources: [ORTHOSES, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Cotton sock worn under the orthosis]]. [[Faint pink marks over the instep]], gone by 10 minutes. [[Red area 2 cm wide over the right outer ankle bone]]. [[Redness still present 40 minutes after removal]]. [[Reports tingling in the right toes]]. [[Heel seated fully at the back of the orthosis]]. [[Ankle strap fastened before the calf strap]].",
    spans: [
      { text: "Cotton sock worn under the orthosis", why: "A sock protects the skin and is correct practice." },
      { text: "Faint pink marks over the instep", why: "Marks that fade within 10 minutes are expected with a new device." },
      { text: "Red area 2 cm wide over the right outer ankle bone", why: "Focused redness over a bony point shows excess pressure." },
      { text: "Redness still present 40 minutes after removal", why: "Redness lasting past about 20 minutes means the device needs adjusting." },
      { text: "Reports tingling in the right toes", why: "Tingling can mean nerve compression or reduced blood flow." },
      { text: "Heel seated fully at the back of the orthosis", why: "A seated heel is the correct fit and needs no follow-up." },
      { text: "Ankle strap fastened before the calf strap", why: "The ankle strap goes first to hold the heel back, which is correct." },
    ],
    correct: [2, 3, 4],
  },
  {
    ...meta("rn-s34-17", {
      need: "BCC",
      topic: "Checking heel suspension boots",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client on bed rest has a deep tissue pressure injury on the left heel. The client wears heel suspension boots on both feet. Which finding during the nurse's check needs correction?",
      rationale:
        "A heel suspension boot works only when the heel hangs free inside it. A heel resting on the floor of the boot still bears pressure on the injured tissue, so the boot is refitted. Slight knee flexion is recommended while the heels are offloaded. Straps loose enough to admit a finger lower the risk of a new device injury. Skin under the boots is inspected regularly.",
      sources: [NPIAP],
    }),
    kind: "mc",
    options: [
      { text: "Each boot strap admits one finger beneath it", why: "A strap that admits a finger is snug without causing device pressure." },
      { text: "The left heel rests on the floor of the boot", why: "The heel must hang free. Contact with the boot keeps pressure on the injury." },
      { text: "The knees rest in slight flexion in the boots", why: "Slight knee flexion is recommended while the heels are offloaded." },
      { text: "The skin under the boots was checked at 0800", why: "Regular checks under the device are correct care." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s34-18", {
      need: "PPT",
      topic: "Placing a rectal suppository",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to give a bisacodyl 10 mg rectal suppository to a 66-year-old client who has not had a bowel movement in 3 days. A digital check finds soft stool in the rectum. The client is lying on the left side with the upper knee bent. Which technique is correct?",
      rationale:
        "The left side-lying position follows the curve of the rectum and colon. The suppository is pushed past the internal sphincter so it is not expelled. It is placed against the rectal wall, because the drug acts through contact with the lining. A suppository pushed into stool cannot reach the wall and does not work.",
      sources: [POTTER, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Turn the client supine with the knees flat", why: "The left side-lying position follows rectal anatomy and is already in place." },
      { text: "Insert it just inside the anal opening", why: "A suppository not past the internal sphincter is pushed back out." },
      { text: "Push it into the center of the stool in the rectum", why: "Inside stool the drug cannot touch the rectal wall and does not act." },
      { text: "Slide it past the sphincter against the wall", why: "Contact with the rectal wall past the sphincter lets the drug act." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s34-19", {
      need: "BCC",
      topic: "Positions that counter burn contractures",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 36-year-old client has deep partial-thickness burns to the front of the neck, both axillae and the front of both elbows. The client prefers two pillows under the head with the arms folded across the chest. Which measures should the nurse include in the plan to prevent contractures? Select all that apply.",
      rationale:
        "The position of comfort is the position of contracture. Burns on the front of the neck pull it into flexion, so the neck rests slightly extended with no pillow. Axillary burns pull the shoulders into adduction, so the arms rest away from the body. Burns on the front of the elbow pull it into flexion, so the elbows rest straight. Daily exercise keeps range of motion.",
      sources: [BURN_REHAB, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Two pillows under the head", why: "Pillows flex the neck, which is the direction a front neck burn contracts." },
      { text: "Neck slightly extended with no pillow", why: "Slight extension stretches the healing skin on the front of the neck." },
      { text: "Arms folded across the chest", why: "Folded arms hold the shoulders in adduction and tighten axillary burns." },
      { text: "Arms positioned away from the body", why: "Abduction stretches the axillary skin and opposes adduction contracture." },
      { text: "Elbows resting in extension", why: "Straight elbows oppose flexion contracture of front elbow burns." },
      { text: "Elbows bent on pillows for comfort", why: "Bent elbows let the front elbow burns contract into flexion." },
      { text: "Range-of-motion exercise each day", why: "Daily exercise keeps the joints moving as the burns heal." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s34-20", {
      need: "BCC",
      topic: "Setting up a transfer board",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 41-year-old client with paraplegia is learning to move from bed to wheelchair with a transfer board. The client has good arm strength. The wheelchair is beside the bed with the brakes on, and the bed is level with the seat. Which action should the nurse take next?",
      rationale:
        "The armrest on the bed side comes off so the board can bridge the gap between bed and seat. One end of the board goes under the client's buttock and thigh and the other rests on the seat. The client moves across in small lifts with the arms while the feet stay on the floor. Pulling the client drags skin across the board and causes shear.",
      sources: [POTTER, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Lift both legs onto the board first", why: "The feet stay on the floor to help support the body during the move." },
      { text: "Pull the client across by the waistband", why: "Dragging causes shear on the skin. The client moves in small arm lifts." },
      { text: "Remove the armrest next to the bed", why: "Removing the armrest lets the board bridge the bed and the seat." },
      { text: "Turn the wheelchair to face away from the bed", why: "The chair sits beside the bed, close and slightly angled, so the board can bridge the gap." },
    ],
    correct: 2,
  },
];
