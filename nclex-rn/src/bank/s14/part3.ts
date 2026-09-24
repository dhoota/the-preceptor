import type { Item } from "@/engine/types";
import { AASM, ACP_UI, CAUTI, CERUMEN, HINKLE, HOCKENBERRY, POTTER, SPHM, WOCN, meta } from "./common";

/** Batch s14, items 21 to 30. */
export const PART3: Item[] = [
  {
    ...meta("rn-s14-21", {
      topic: "Self-catheterization at home",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 34-year-old client with a neurogenic bladder from multiple sclerosis will begin clean intermittent self-catheterization at home. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Intermittent catheterization empties a bladder that does not empty on its own and carries less infection risk than an indwelling catheter. At home, clean technique with hand washing is enough. A set schedule prevents overfilling, because the client may not feel a full bladder. Lubrication protects the urethra. Fever or cloudy, foul urine can mean infection. Cutting fluids concentrates the urine and raises infection risk.",
      sources: [CAUTI, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Wash the hands with soap and water first", why: "Clean hands are the base of clean technique at home." },
      { text: "Wear sterile gloves for each catheterization", why: "Clean technique is used at home. Sterile gloves are not needed." },
      { text: "Wait until the urge to void is strong", why: "Bladder sensation may be impaired. Waiting lets the bladder overfill." },
      { text: "Catheterize on a regular schedule", why: "A schedule keeps the bladder from overfilling." },
      { text: "Cut fluid intake to limit urine volume", why: "Low intake concentrates the urine and raises infection risk." },
      { text: "Lubricate the catheter tip before insertion", why: "Lubrication eases insertion and protects the urethra." },
      { text: "Report fever or cloudy, foul urine", why: "These are signs of a urinary tract infection." },
    ],
    correct: [0, 3, 5, 6],
  },
  {
    ...meta("rn-s14-22", {
      topic: "Pelvic floor exercise technique",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 52-year-old client with stress incontinence has been taught pelvic floor muscle exercises. Which statement by the client shows correct understanding?",
      rationale:
        "Pelvic floor muscle training is first-line care for stress incontinence. The client finds the right muscles by squeezing as if holding in gas. The buttocks and thighs stay relaxed. Breathing continues during the squeeze. Stopping the urine stream is at most a one-time check, because doing it often can disturb bladder emptying.",
      sources: [ACP_UI, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I tighten my buttocks and thighs together.\"", why: "Buttock and thigh muscles are not the pelvic floor. They stay relaxed." },
      { text: "\"I squeeze the muscles I use to hold in gas.\"", why: "These are the pelvic floor muscles the exercise trains." },
      { text: "\"I hold my breath each time I squeeze.\"", why: "Holding the breath raises abdominal pressure. Breathing continues." },
      { text: "\"I practice by stopping my urine each time.\"", why: "Stopping urine often can lead to incomplete bladder emptying." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-23", {
      topic: "Mucus in a urinary diversion pouch",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client had an ileal conduit formed 4 days ago after cystectomy. The nurse notes white mucus threads in the urine in the pouch. The stoma is moist and red. Urine drains at about 60 mL each hour. What should the nurse conclude?",
      rationale:
        "An ileal conduit is made from a piece of small bowel, which keeps making mucus. Mucus threads in the urine are expected. A moist, red stoma has a good blood supply. Urine flowing at about 60 mL each hour shows the conduit drains well. Infection would show as cloudy, foul urine or fever. A dark or dusky stoma would point to poor blood flow.",
      sources: [WOCN, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "An expected finding from the bowel segment", why: "The ileal segment still makes mucus, so threads in the urine are expected." },
      { text: "A sign of a urinary tract infection", why: "Infection shows as cloudy, foul urine or fever. Mucus alone is expected." },
      { text: "A sign of early stoma necrosis", why: "Necrosis turns the stoma dark or dusky. This stoma is moist and red." },
      { text: "A sign of a leak at the ureter join", why: "A leak lowers urine output in the pouch. Output here is steady." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-24", {
      topic: "Full-body sling lift to a chair",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client who cannot bear weight or help with transfers needs to move from bed to a chair. Two nurses will use a full-body sling lift. Place the steps in order.",
      rationale:
        "The bed is locked and raised to a safe working height first. The sling goes under the client by turning the client side to side. The sling straps then attach to the lift. The client is raised just clear of the mattress before the lift moves to the chair. Pulling the client by the arms strains the shoulders and staff. Lifting high above the bed adds swing and fall risk.",
      sources: [SPHM, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Attach the sling straps to the lift", why: "The straps attach after the sling is under the client." },
      { text: "Pull the client up by the arms", why: "Pulling on the arms can injure the shoulders and strains staff." },
      { text: "Lock the bed at a safe working height", why: "A locked bed at working height protects the client and staff first." },
      { text: "Raise the client just clear of the bed", why: "A low lift lowers swing before the move to the chair." },
      { text: "Turn the client to place the sling", why: "Turning side to side lets the sling go under the client." },
      { text: "Lift the client high above the bed", why: "A high lift adds swing and fall risk." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s14-25", {
      topic: "Cleaning an artificial eye",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "An older adult with an artificial right eye asks the nurse for help with daily care. The nurse has removed the prosthesis. How should the nurse clean it?",
      rationale:
        "An artificial eye is cleaned with warm water or saline and dried gently with soft gauze. This removes secretions without harming the surface. Alcohol and boiling can damage the acrylic. A stiff brush scratches the surface, and a rough surface irritates the eye socket.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Soak it in rubbing alcohol", why: "Alcohol can damage the acrylic surface of the prosthesis." },
      { text: "Scrub it with a stiff brush", why: "A stiff brush scratches the surface and the socket then becomes irritated." },
      { text: "Wash it in warm saline and dry it", why: "Warm saline cleans secretions without harming the prosthesis." },
      { text: "Boil it in water to sterilize it", why: "Boiling can warp or crack the acrylic." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s14-26", {
      topic: "Bathing with breathlessness",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with severe chronic obstructive pulmonary disease becomes short of breath during self-care. The client wants to shower. Which measures should the nurse plan? Select all that apply.",
      rationale:
        "Energy conservation lets the client finish self-care with less breathlessness. Sitting on a shower chair saves energy. Resting first and placing items within reach cut wasted effort. A terry robe dries the skin without the arm work of towel drying. Hot steam and a closed room make breathing harder. Rushing and holding the arms up raise oxygen demand.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Place items within reach first", why: "Items within reach cut extra reaching and walking." },
      { text: "Use hot, steamy water in a closed room", why: "Heat and humidity make breathing harder." },
      { text: "Rest before starting the shower", why: "Rest before activity lowers oxygen demand at the start." },
      { text: "Finish all care quickly in one burst", why: "Rushing raises oxygen demand. A slow, paced routine uses less." },
      { text: "Sit on a shower chair to wash", why: "Sitting saves energy while washing." },
      { text: "Wash the hair with arms raised each day", why: "Raising the arms limits chest movement and adds breathlessness." },
      { text: "Wrap in a terry robe to dry off", why: "A robe absorbs water without the effort of towel drying." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s14-27", {
      topic: "Ear hygiene at home",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client about cleaning the ears at home. Which statement by the client shows understanding?",
      rationale:
        "Earwax cleans and protects the canal and moves outward on its own. The outer ear can be wiped with a cloth. Objects placed in the canal can injure it and push wax deeper. Ear candling does not remove wax and can burn the ear.",
      sources: [CERUMEN],
    }),
    kind: "mc",
    options: [
      { text: "\"I will clean deep inside with a cotton swab.\"", why: "A swab pushes wax deeper and can injure the canal." },
      { text: "\"I will use ear candles once a month.\"", why: "Candling does not remove wax and can burn the ear." },
      { text: "\"I will use a hairpin to lift out the wax.\"", why: "Sharp objects can tear the canal or eardrum." },
      { text: "\"I will wipe only the outer ear with a cloth.\"", why: "Wax moves out on its own, so only the outer ear needs wiping." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s14-28", {
      topic: "Waking at night to urinate",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 76-year-old client wakes three times each night to urinate and feels tired during the day. A urinalysis is normal. The client drinks most fluids with dinner and during the evening. What should the nurse suggest?",
      rationale:
        "Evening fluid adds to urine made overnight, so the client wakes to void. Moving most fluid to earlier in the day keeps the daily total while cutting night urine. Severe fluid limits risk dehydration in an older adult. A bedtime drink adds night urine. A brief does not address the waking and can harm the skin.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Limit daily fluid to a few cups", why: "Severe fluid limits can dehydrate an older adult." },
      { text: "Drink most fluids earlier in the day", why: "Earlier intake keeps the daily total and cuts urine made at night." },
      { text: "Have a warm drink just before bed", why: "A bedtime drink adds urine and more waking." },
      { text: "Wear a brief to avoid getting up", why: "A brief does not reduce waking and exposes the skin to urine." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-29", {
      topic: "Habits that disturb sleep",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 45-year-old client reports trouble falling asleep for 4 months. The nurse reviews the client's sleep history. Click to highlight the habits that are likely to worsen the client's sleep.",
      rationale:
        "Caffeine in the evening delays sleep onset. A long afternoon nap lowers sleep drive at bedtime. Watching television in bed links the bed with being awake. Alcohol may bring sleep on but breaks up sleep later in the night. Morning walks, a regular wake time and reading in a chair away from the bed support sleep.",
      sources: [AASM, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Drinks coffee at 1900 while working]]. [[Naps for 2 hours at 1500]]. [[Walks for 30 minutes each morning]]. [[Watches television in bed until asleep]]. [[Gets up at 0630 every day]]. [[Has a glass of wine to fall asleep]]. [[Reads a paper book in a chair before bed]].",
    spans: [
      { text: "Drinks coffee at 1900 while working", why: "Evening caffeine delays sleep onset." },
      { text: "Naps for 2 hours at 1500", why: "A long afternoon nap lowers sleep drive at bedtime." },
      { text: "Walks for 30 minutes each morning", why: "Morning activity and daylight support sleep." },
      { text: "Watches television in bed until asleep", why: "Screen use in bed links the bed with being awake." },
      { text: "Gets up at 0630 every day", why: "A fixed wake time steadies the body clock." },
      { text: "Has a glass of wine to fall asleep", why: "Alcohol breaks up sleep later in the night." },
      { text: "Reads a paper book in a chair before bed", why: "A calm activity away from the bed supports sleep." },
    ],
    correct: [0, 1, 3, 5],
  },
  {
    ...meta("rn-s14-30", {
      topic: "Distraction for a preschooler during a procedure",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A 4-year-old needs a peripheral IV started in the left hand. A topical anesthetic cream is in place. Which distraction should the nurse use during the insertion?",
      rationale:
        "Blowing bubbles suits a preschool child. It holds attention and slow blowing eases tension. A 4-year-old cannot read a word puzzle. Telling the child to hold still gives nothing to focus on. A two-handed game needs the hand where the IV is going.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Solving a written word puzzle", why: "A 4-year-old does not yet read well enough for a word puzzle." },
      { text: "Holding still and looking away", why: "Holding still gives the child nothing to focus on." },
      { text: "Blowing bubbles with the nurse", why: "Bubbles hold a preschooler's attention and the slow blowing eases tension." },
      { text: "Playing a two-handed video game", why: "A two-handed game needs the hand where the IV is placed." },
    ],
    correct: 2,
  },
];
