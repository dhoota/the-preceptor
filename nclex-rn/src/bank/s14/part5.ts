import type { Item } from "@/engine/types";
import { ASCO_DYSPNEA, HINKLE, POTTER, SCCM_ASPEN, meta } from "./common";

/** Batch s14, items 41 to 50. */
export const PART5: Item[] = [
  {
    ...meta("rn-s14-41", {
      topic: "Checking a gastrostomy site",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client had a percutaneous endoscopic gastrostomy tube placed 10 days ago for continuous feeding. The nurse notes four findings at the tube site. Which finding needs follow-up first?",
      rationale:
        "Formula leaking around the tube with spreading redness can mean the tract is widening or infected. Gastric contents irritate and break down the skin. Leakage can also signal that the tube has moved. A thin dry crust and scant clear drainage are common at a healing site. A tube that turns freely in the tract is expected.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A thin ring of dry crust around the tube", why: "A little dry crust is common at a healing site and is cleaned with water." },
      { text: "The tube turns freely in the stoma tract", why: "A tube that turns freely shows the bumper is not too tight." },
      { text: "Scant clear drainage on the gauze pad", why: "A small amount of clear drainage is common while the tract heals." },
      { text: "Leaking formula and spreading redness", why: "Leakage with spreading redness suggests infection, tract widening or tube movement." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s14-42", {
      topic: "Nondrug relief of breathlessness in hospice",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "A client receiving hospice care for advanced lung cancer is short of breath at rest. The client is alert and prefers not to take more medication right now. Which two nondrug measures should the nurse use? Select two.",
      rationale:
        "Cool air from a fan across the face can lessen the feeling of breathlessness. Sitting upright and leaning forward lets the diaphragm move more freely. Lying flat pushes the abdominal organs up against the diaphragm. A closed, warm room and a large meal both add to the sense of breathlessness.",
      sources: [ASCO_DYSPNEA, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Lay the client flat to rest", why: "Lying flat limits diaphragm movement and worsens breathlessness." },
      { text: "Aim a fan toward the face", why: "Cool air on the face lessens the sensation of breathlessness." },
      { text: "Close the door and curtains", why: "A closed, stuffy room tends to add to the sense of breathlessness." },
      { text: "Offer a large, warm meal", why: "A full stomach presses on the diaphragm." },
      { text: "Sit the client upright, leaning forward", why: "This position lets the diaphragm and chest expand more fully." },
      { text: "Keep the room warm and still", why: "Warm, still air tends to increase breathlessness." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s14-43", {
      topic: "Applying an arm sling",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a cast for a fractured left wrist and will wear a triangular sling. Which actions should the nurse take when applying the sling? Select all that apply.",
      rationale:
        "The hand rests level with or above the elbow to limit swelling. The wrist stays inside the sling so it does not drop. The knot sits at the side of the neck, and padding under the strap protects the skin. A knot over the spine presses on the bony vertebrae. The elbow stays bent in the sling. Finger color and movement show circulation and nerve function.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Let the wrist hang past the sling edge", why: "A dropped wrist loses support and can swell." },
      { text: "Keep the hand level with or above the elbow", why: "Raising the hand limits swelling in the injured arm." },
      { text: "Tie the knot over the cervical spine", why: "A knot over the spine presses on the bony vertebrae." },
      { text: "Place the knot at the side of the neck", why: "A knot at the side avoids pressure on the spine." },
      { text: "Keep the elbow straight in the sling", why: "The elbow is bent in a sling so the forearm is supported." },
      { text: "Pad the strap where it crosses the neck", why: "Padding spreads pressure and protects the skin." },
      { text: "Check the fingers for color and movement", why: "Finger checks show circulation and nerve function below the cast." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s14-44", {
      topic: "New diarrhea during tube feeding",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client has received a lactose-free formula through a closed feeding system at the same rate for 5 days without problems. A liquid medication that contains sorbitol was started 2 days ago. Since then the client has had five liquid stools a day. The client is afebrile. What is the most likely cause of the diarrhea?",
      rationale:
        "The diarrhea began after the sorbitol-containing liquid was started. Sorbitol draws water into the bowel and is a common cause of diarrhea in tube-fed clients. The formula is lactose-free. The rate has not changed in 5 days. A closed system lowers the risk of contamination. The feeding need not stop while the cause is addressed.",
      sources: [SCCM_ASPEN],
    }),
    kind: "mc",
    options: [
      { text: "Sorbitol in the liquid medication", why: "Sorbitol draws water into the bowel, and the diarrhea began after it started." },
      { text: "Lactose in the feeding formula", why: "The formula is lactose-free." },
      { text: "A feeding rate that is too fast", why: "The rate has been the same for 5 days without problems." },
      { text: "Contaminated formula in the bag", why: "A closed feeding system lowers the risk of contamination." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-45", {
      topic: "Thigh exercise in a long leg cast",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client has a long leg cast on the right leg after a tibia fracture. Which exercise should the nurse teach to keep the right thigh muscles strong while the cast is on?",
      rationale:
        "Quadriceps setting is an isometric exercise. The client tightens and relaxes the front thigh muscle without moving the joint. This keeps muscle strength inside a cast that holds the knee and ankle still. The cast prevents knee bending and ankle circles. Massage does not strengthen muscle.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Bend and straighten the right knee", why: "A long leg cast holds the knee still, so it cannot bend." },
      { text: "Tighten and relax the front thigh muscle", why: "Quadriceps setting keeps strength without moving the casted joints." },
      { text: "Circle the right ankle every hour", why: "The ankle is inside the cast and cannot move." },
      { text: "Massage the thigh above the cast", why: "Massage may ease tension but does not build strength." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-46", {
      topic: "Eating aids for weak hands",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with rheumatoid arthritis has a weak grip and painful finger joints. The client wants to eat without help. Which devices should the nurse request from occupational therapy? Select all that apply.",
      rationale:
        "Weak, painful hands grip wide handles more easily. Built-up utensils and a two-handled cup reduce the grip force needed. A plate guard gives an edge to push food against. A non-slip mat keeps the plate still. Thin handles, a heavy mug and a flat plate with no rim make eating harder.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Utensils with thin handles", why: "Thin handles need a tight grip that weak, painful hands cannot give." },
      { text: "Utensils with built-up handles", why: "Wide handles need less grip force." },
      { text: "A heavy ceramic mug", why: "A heavy mug strains weak finger joints." },
      { text: "A two-handled cup", why: "Two handles spread the load across both hands." },
      { text: "A flat plate with no rim", why: "Without a rim, food slides off as the client scoops." },
      { text: "A plate guard", why: "The guard gives an edge to push food onto the utensil." },
      { text: "A non-slip mat under the plate", why: "The mat keeps the plate from sliding." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s14-47", {
      topic: "Care of tightly coiled hair",
      cjmm: "action",
      process: "culture",
      difficulty: 3,
      stem: "A client with tightly coiled natural hair has been on bed rest for a week. The hair is dry and tangled. The client asks for help with hair care. Which action should the nurse take?",
      rationale:
        "Tightly coiled hair is often dry and breaks easily. A conditioner or oil softens it. A wide-tooth comb worked from the ends toward the scalp loosens tangles with less pulling. Brushing dry hair from the scalp pulls and breaks it. Daily shampoo strips natural oils. Tangles are not cut without the client's consent.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Brush the dry hair from scalp to ends", why: "Brushing dry coiled hair from the scalp pulls and breaks it." },
      { text: "Shampoo the hair daily to soften it", why: "Daily shampoo strips oils and dries the hair more." },
      { text: "Trim out the tangles with scissors", why: "Hair is not cut without the client's consent." },
      { text: "Condition it, then comb from the ends", why: "Conditioner and combing from the ends loosen tangles with less breakage." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s14-48", {
      topic: "Signs of sleep deprivation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client in the intensive care unit has slept less than 3 hours a night for 4 nights because of frequent care. Which findings should the nurse recognize as signs of sleep deprivation? Select all that apply.",
      rationale:
        "Sleep loss affects mood, thinking and the nervous system. Irritability, hand tremor, drooping eyelids and slowed reactions are typical signs. Sleep loss lowers pain tolerance, so pain feels worse. Memory worsens rather than improves. Pinpoint pupils suggest opioid effect, not sleep loss.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Improved pain tolerance", why: "Sleep loss makes pain feel worse, not better." },
      { text: "Irritability", why: "Irritability is a common mood change after sleep loss." },
      { text: "Sharper short-term memory", why: "Sleep loss impairs memory." },
      { text: "Hand tremor", why: "A fine hand tremor is a physical sign of sleep deprivation." },
      { text: "Pinpoint pupils", why: "Pinpoint pupils suggest opioid effect, not sleep loss." },
      { text: "Drooping eyelids", why: "Ptosis is a physical sign of sleep deprivation." },
      { text: "Slowed reactions", why: "Reaction time slows as sleep debt builds." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s14-49", {
      topic: "A tray for a client who keeps kosher",
      cjmm: "recognize",
      process: "culture",
      difficulty: 2,
      stem: "A client who keeps kosher asks the nurse to check the lunch tray before eating. Which item should the nurse replace?",
      rationale:
        "Kosher dietary law does not allow meat and dairy in the same meal. A roast beef sandwich with cheese combines them. Fish with fins and scales, such as salmon, is allowed. Vegetable soup and fresh fruit are neutral foods that fit with either meat or dairy.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Roast beef sandwich with cheese", why: "Kosher law does not allow meat and dairy together." },
      { text: "Baked salmon with rice", why: "Salmon has fins and scales and is allowed." },
      { text: "Bowl of vegetable soup", why: "A plain vegetable soup is a neutral food." },
      { text: "Cup of fresh fruit", why: "Fresh fruit is a neutral food that fits any meal." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-50", {
      topic: "Choosing the first client to see",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "At 1500 a nurse on a medical unit takes over the care of four clients. After hearing the handoff for each client, which one does the nurse go to first?",
      rationale:
        "An ileostomy output of 2000 mL since 0700 is a large fluid loss. Dizziness on standing suggests the loss is already lowering circulating volume. This client may need fluid replacement now. Itching under a cast, a feeding bag that is running low and a request for toileting help are real needs but carry less immediate risk.",
      sources: [HINKLE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Itching under a forearm cast since morning", why: "Itching is uncomfortable but does not signal instability." },
      { text: "Feeding bag with 100 mL of formula left", why: "The bag can be refilled soon without harm to the client." },
      { text: "Ileostomy output 2000 mL since 0700, dizzy on standing", why: "Large stoma loss with dizziness on standing suggests a volume deficit that needs prompt action." },
      { text: "New walker user who wants help to walk to the bathroom", why: "Toileting help matters, but nothing in the handoff suggests instability, and a colleague can help." },
    ],
    correct: 2,
  },
];
