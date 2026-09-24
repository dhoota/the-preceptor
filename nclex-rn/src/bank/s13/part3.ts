import type { Item } from "@/engine/types";
import { BMAT, CAUTI, CDC_BMI, HINKLE, NPIAP, POTTER, SPHM, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s13-21", {
      topic: "Placing the wheelchair for a pivot transfer",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with left-sided weakness after a stroke can bear weight on the right leg and follows directions. The nurse prepares to move the client from the bed to a wheelchair with a gait belt. Where should the nurse place the wheelchair?",
      rationale:
        "The client moves toward the stronger side. The right leg can bear weight, so the chair goes on the right at a 45 degree angle to the bed. The client stands, pivots on the right leg and sits. The brakes are locked first. A chair on the weak left side makes the client pivot over a leg that cannot hold weight.",
      sources: [POTTER, SPHM],
    }),
    kind: "mc",
    options: [
      { text: "On the left side, at a 45 degree angle to the bed", why: "A chair on the weak side makes the client pivot toward a leg that cannot hold weight." },
      { text: "On the right side, at a 45 degree angle to the bed", why: "The client pivots on the strong right leg toward the chair, which keeps the turn short." },
      { text: "At the foot of the bed, facing the client", why: "A chair at the foot of the bed forces a long turn with several steps." },
      { text: "On the left side, facing the head of the bed", why: "This needs a full turn over the weak left leg." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-22", {
      topic: "Urinary retention after spinal anesthesia",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client had a hernia repair under spinal anesthesia 6 hours ago and has not voided. The client reports lower abdominal fullness. Standing at the toilet and running water did not help. A bladder scan shows 650 mL. What should the nurse do first?",
      rationale:
        "Spinal anesthesia can block bladder sensation and emptying for hours. The client has not voided in 6 hours, feels full and has 650 mL in the bladder. Simple measures have failed. Intermittent catheterization drains the bladder and avoids the infection risk of a catheter left in place. Waiting risks injury from overdistension.",
      sources: [CAUTI, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Rescan the bladder in 4 hours", why: "Waiting lets the bladder stretch further. 650 mL with fullness needs drainage now." },
      { text: "Restrict oral fluids until voiding", why: "Limiting fluid does not empty the bladder and risks dehydration." },
      { text: "Drain the bladder with a straight catheter", why: "Intermittent catheterization empties the bladder without leaving a catheter in place." },
      { text: "Insert an indwelling catheter for 3 days", why: "An indwelling catheter adds infection risk. Intermittent drainage is preferred for retention after surgery." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-23", {
      topic: "Red skin that does not blanch",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse inspects the sacrum of a client on bed rest. There is a 2 cm area of intact skin that stays red when pressed with a finger. How should the nurse classify this finding?",
      rationale:
        "The skin over the sacrum is intact and stays red when pressed. Nonblanchable redness of intact skin defines a stage 1 pressure injury. It shows damage beneath the surface. A stage 2 injury has an open, partial-thickness wound. A deep tissue injury is deep red, maroon or purple, from damage in deeper tissue. Blanchable redness fades with pressure.",
      sources: [NPIAP],
    }),
    kind: "mc",
    options: [
      { text: "Blanchable erythema", why: "Blanchable redness fades under finger pressure. This area stays red." },
      { text: "Stage 2 pressure injury", why: "Stage 2 involves partial-thickness skin loss. The skin here is intact." },
      { text: "Deep tissue pressure injury", why: "A deep tissue injury shows deep red, maroon or purple discoloration. A small red area over the sacrum fits stage 1." },
      { text: "Stage 1 pressure injury", why: "Intact skin with redness that does not blanch defines stage 1." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-24", {
      topic: "Shaving during heparin therapy",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 70-year-old man receiving a continuous IV heparin infusion asks the nurse to help him shave his face. Which item should the nurse use?",
      rationale:
        "Heparin prolongs clotting, so a small nick can keep bleeding. An electric razor cuts hair without a blade touching the skin. Any bladed razor, new or disposable, can nick the skin. Care in use does not remove that risk.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "A new single-blade safety razor", why: "A new blade is still a blade and can nick the skin." },
      { text: "A disposable twin-blade razor", why: "Two blades touch the skin and can cause cuts that bleed longer on heparin." },
      { text: "A straight razor used with care", why: "An open blade carries the highest risk of a cut, however careful the user." },
      { text: "An electric razor", why: "An electric razor has no exposed blade, so it lowers the risk of bleeding." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-25", {
      topic: "Calculating body mass index",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is 1.70 m tall and weighs 81 kg. The nurse calculates the body mass index (BMI). Which value and category should the nurse document?",
      rationale:
        "BMI is weight in kg divided by height in meters squared. 1.70 * 1.70 = 2.89. 81 / 2.89 = 28.0. A BMI from 25.0 to 29.9 is overweight. Obesity begins at 30.0.",
      refs: ["Adult BMI categories: 18.5 to 24.9 healthy weight, 25.0 to 29.9 overweight, 30.0 or more obesity, 40.0 or more class 3 obesity."],
      calc: { expr: "81 / (1.70 * 1.70)", answer: 28.02768166, unit: "kg/m2", round: 1, steps: ["1.70 * 1.70 = 2.89", "81 / 2.89 = 28.0"] },
      sources: [CDC_BMI],
    }),
    kind: "mc",
    options: [
      { text: "23.8, healthy weight", why: "This divides by twice the height instead of the height squared." },
      { text: "28.0, overweight", why: "81 kg divided by 2.89 is 28.0, which falls between 25.0 and 29.9." },
      { text: "28.0, obesity class 1", why: "The value is right, but obesity begins at 30.0. A BMI of 28.0 is overweight." },
      { text: "47.6, obesity class 3", why: "This divides weight by height without squaring the height." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-26", {
      topic: "Bathing a client with Alzheimer disease",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "An 82-year-old client with moderate Alzheimer disease becomes agitated and strikes out during evening showers. Which approaches should the nurse include in the bathing plan? Select all that apply.",
      rationale:
        "Agitation during showers is common in dementia. Water spray, cold and exposure can feel threatening. A towel bath in bed avoids the shower. Bathing at the client's familiar time respects lifelong habits. Short, simple phrases help the client follow each step. Covering the body keeps the client warm and preserves dignity. Restraint, insistence and a cold room raise distress.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Hold the client's arms to finish quickly", why: "Restraining the arms feels threatening and raises agitation." },
      { text: "Offer a towel bath in bed instead", why: "A towel bath avoids the water spray and noise that trigger distress." },
      { text: "Insist on the shower to keep a routine", why: "Forcing a feared task increases resistance and aggression." },
      { text: "Bathe at the hour the client used at home", why: "A familiar time fits lifelong habits and eases acceptance." },
      { text: "Explain each step in short, simple phrases", why: "Simple cues match reduced comprehension and lower fear." },
      { text: "Keep the room cool to keep the client alert", why: "Feeling cold is a common trigger for distress during bathing." },
      { text: "Cover all areas except the one being washed", why: "Covering the body keeps the client warm and preserves dignity." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s13-27", {
      topic: "Supervising catheter care by assistive personnel",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has an indwelling urinary catheter after surgery. The nurse observes the assistive personnel (AP) giving care. Which actions by the AP require the nurse to intervene? Select all that apply.",
      rationale:
        "A closed system with steady downhill flow lowers the risk of infection. A bag on the bed sits level with the bladder, so urine can flow back. A bag on the floor touches a contaminated surface. Opening the junction breaks the closed system. Samples come from the sampling port. Securing the tube, preventing kinks, routine meatal hygiene and a separate container are correct care.",
      sources: [CAUTI, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. What an RN may assign or delegate to them, and how it is supervised, varies by province.",
    }),
    kind: "sata",
    options: [
      { text: "Secures the tubing to the client's thigh", why: "Securing the tube prevents movement and urethral injury. This needs no correction." },
      { text: "Keeps the tubing free of kinks and loops", why: "Free flow keeps urine moving away from the bladder. This needs no correction." },
      { text: "Lays the drainage bag on the bed by the client", why: "A bag level with the bladder lets urine flow back toward it." },
      { text: "Cleans the meatus with soap and water", why: "Routine hygiene with soap and water is recommended care." },
      { text: "Sets the drainage bag on the floor", why: "A bag resting on the floor becomes contaminated." },
      { text: "Opens the tubing junction to get a sample", why: "Opening the junction breaks the closed system. Samples come from the port." },
      { text: "Empties the bag into a container for this client only", why: "A separate container for each client prevents cross-contamination. This needs no correction." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s13-28", {
      topic: "Signs of malnutrition risk at home",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews the admission note of a 79-year-old client who lives alone. Click to highlight the findings that point to a risk of malnutrition.",
      rationale:
        "Unplanned loss of 6 kg in 3 months is a key sign of malnutrition. A loose denture that rubs the gums makes chewing painful. One meal a day of toast and tea lacks protein and energy. Losing interest in cooking for one cuts intake further. Regular walking, brisk skin turgor, a normal BP and a multivitamin do not signal risk.",
      sources: [POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Lost 6 kg in 3 months without trying]]. [[Walks to the corner store twice a week]]. [[Upper denture loose and rubs the gums]]. [[BP 124/78 mmHg]]. [[Eats one meal a day, often toast and tea]]. [[Skin turgor brisk]]. [[Says cooking for one is not worth it]]. [[Takes a daily multivitamin]].",
    spans: [
      { text: "Lost 6 kg in 3 months without trying", why: "Unplanned weight loss is a leading sign of malnutrition." },
      { text: "Walks to the corner store twice a week", why: "Regular walking and shopping show mobility and access to food." },
      { text: "Upper denture loose and rubs the gums", why: "Painful chewing limits the foods the client can eat." },
      { text: "BP 124/78 mmHg", why: "A normal BP does not point to nutrition risk." },
      { text: "Eats one meal a day, often toast and tea", why: "One small meal a day lacks protein and energy." },
      { text: "Skin turgor brisk", why: "Brisk turgor points to adequate hydration." },
      { text: "Says cooking for one is not worth it", why: "Loss of interest in cooking alone cuts intake." },
      { text: "Takes a daily multivitamin", why: "A multivitamin does not signal risk and does not replace food." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s13-29", {
      topic: "Matching handling equipment to mobility",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse selects safe handling equipment after a bedside mobility assessment of three clients. Move the equipment to the client it best fits. Each client gets one item.",
      rationale:
        "A client who cannot sit unaided or bear weight needs a full-body sling lift. A client who sits and bears weight on one leg can use a powered sit-to-stand lift. A client who walks steadily with mild one-sided weakness uses a cane on the stronger side. Crutches need strong arms and balance. A transfer board needs good sitting balance.",
      sources: [BMAT, SPHM],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Cannot sit up unaided or bear any weight", "Sits unaided and stands on one leg", "Walks steadily with mild one-sided weakness"],
    tokens: [
      { text: "Single-point cane", why: "A cane on the strong side gives enough support to a client who walks steadily." },
      { text: "Full-body sling lift", why: "A full lift moves a client who cannot sit or bear weight without strain on staff." },
      { text: "Sliding transfer board", why: "A transfer board needs sitting balance and arm strength. The first client lacks both." },
      { text: "Powered sit-to-stand lift", why: "It supports a client who can sit and bear weight on at least one leg." },
      { text: "Adjustable axillary crutches", why: "Crutches need strong arms and good balance to keep weight off one leg. None of these clients fits." },
    ],
    correct: [1, 3, 0],
  },
  {
    ...meta("rn-s13-30", {
      topic: "Protein snacks for wound healing",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 74-year-old client has a stage 3 pressure injury on the sacrum. The dietitian has advised extra protein between meals. Which two snacks should the nurse offer? Select two.",
      rationale:
        "Protein supplies the amino acids needed to build new tissue in a healing wound. Greek yogurt and cottage cheese are dense sources of protein. Fruit, juice, toast with jam and vegetable broth are mostly carbohydrate or water with little protein.",
      sources: [NPIAP, POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Sliced apple with a drizzle of honey", why: "Fruit and honey are carbohydrate with almost no protein." },
      { text: "A cup of plain Greek yogurt", why: "Strained yogurt is a dense source of protein." },
      { text: "A glass of orange juice", why: "Juice supplies sugar and vitamin C but little protein." },
      { text: "Toast with strawberry jam", why: "Toast and jam are mostly carbohydrate." },
      { text: "A cup of cottage cheese", why: "Cottage cheese is a dense source of protein." },
      { text: "A bowl of vegetable broth", why: "Broth is mostly water and salt with little protein." },
    ],
    correct: [1, 4],
  },
];
