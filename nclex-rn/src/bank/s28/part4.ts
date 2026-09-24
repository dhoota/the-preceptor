import type { Item, Source } from "@/engine/types";
import { ASPEN_EN, DEATH_RATTLE, FIN_EXPLOIT, GOULD_CAUTI, HALTER, NCP, NPIAP, POTTER, TIP57, meta } from "./common";

const NL_ADULT_PROTECTION: Source = {
  body: "Government of Newfoundland and Labrador",
  work: "Adult Protection Act, SNL 2011, c A-4.01",
  year: 2011,
  url: "https://www.assembly.nl.ca/legislation/sr/statutes/a04-01.htm",
};

const NS_ADULT_PROTECTION: Source = {
  body: "Government of Nova Scotia",
  work: "Adult Protection Act, RSNS 1989, c 2",
  year: 2014,
  url: "https://nslegislature.ca/sites/default/files/legc/statutes/adult%20protection.pdf",
};

export const PART4: Item[] = [
  {
    ...meta("rn-s28-31", {
      need: "BCC",
      topic: "Noisy breathing near death",
      cjmm: "prioritize",
      process: "caring",
      difficulty: 3,
      stem: "A 90-year-old client receiving comfort care no longer responds to voice. Each breath now makes a gurgling sound. The client's daughter is upset by the noise. Which action should the nurse take first?",
      rationale:
        "Gurgling near death comes from secretions pooling in the throat of a person who can no longer swallow. Turning the client onto the side lets secretions drain and often quiets the sound. The nurse then explains to the daughter that the sound is common and the client is not choking. Deep suction distresses the client and gives short relief. Oral fluids risk aspiration. Lying flat lets secretions pool.",
      sources: [DEATH_RATTLE, NCP],
    }),
    kind: "mc",
    options: [
      { text: "Suction deep into the airway each hour", why: "Deep suction is uncomfortable and does little to stop secretions from building up again." },
      { text: "Give sips of water to thin the secretions", why: "A client who cannot swallow may aspirate oral fluids." },
      { text: "Lower the head of the bed to flat", why: "Lying flat lets secretions pool in the throat and louder breathing follows." },
      { text: "Turn the client onto one side", why: "Side-lying lets secretions drain from the mouth and reduces the sound." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-32", {
      need: "PSY",
      topic: "Signs of financial exploitation of an older adult",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A home health nurse visits an 82-year-old client who lives alone and has mild memory loss. Which findings suggest possible financial exploitation? Select all that apply.",
      rationale:
        "Living alone with memory loss raises the risk of exploitation. Shutoff notices despite enough income suggest money is going elsewhere. A new acquaintance holding the bank card and a recent transfer of the house deed show others controlling assets. Missing jewelry and checks suggest theft. A pill organizer, a written bill list and a son's regular visits show supports that protect.",
      sources: [HALTER, FIN_EXPLOIT, NL_ADULT_PROTECTION, NS_ADULT_PROTECTION],
      canada: "Adult protection laws differ by province. Newfoundland and Labrador's act counts a substantial loss of assets as abuse, but Nova Scotia's act does not name financial abuse. Reporting duties vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "Utility shutoff notices despite adequate income", why: "Unpaid bills with enough income suggest money is being diverted." },
      { text: "Uses a weekly pill organizer", why: "A pill organizer supports safe medication use and is not a warning sign." },
      { text: "A new friend now holds the client's bank card", why: "Control of the client's money by a new acquaintance is a warning sign." },
      { text: "Son visits each Sunday for dinner", why: "Regular family contact is a protective support." },
      { text: "Recently signed the house deed to a neighbor", why: "A sudden transfer of property is a common sign of exploitation." },
      { text: "Keeps a written list of monthly bills", why: "A bill list shows the client is managing finances." },
      { text: "Jewelry and blank checks are missing", why: "Missing valuables and checks suggest theft." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s28-33", {
      need: "BCC",
      topic: "Wheelchair placement for a transfer",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 74-year-old client with right-sided weakness after a stroke is ready to move from the bed to a wheelchair. The client can bear weight on the left leg. Where should the nurse place the wheelchair?",
      rationale:
        "The client moves toward the stronger side. Placing the chair at the left side, angled to the bed, lets the client pivot on the strong left leg. The brakes are locked before the move. Placing the chair on the weak side makes the weak leg carry the pivot. A chair at the foot of the bed needs a longer, less stable turn.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "At the client's right side, angled to the bed", why: "The client would pivot on the weak right leg, which raises fall risk." },
      { text: "At the client's left side, angled to the bed", why: "The client can pivot on the strong left leg over a short distance." },
      { text: "At the foot of the bed, facing the client", why: "This needs a long turn that the client cannot do safely." },
      { text: "Parallel to the bed on the client's right side", why: "This places the chair on the weak side with no angle for the pivot." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-34", {
      need: "PSY",
      topic: "Grounding during a flashback",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 38-year-old veteran with posttraumatic stress disorder waits in an emergency department bay. A metal tray crashes to the floor nearby. The client crouches, breathes rapidly and shouts, \"Get down!\" Which action should the nurse take first?",
      rationale:
        "The client is reliving a past trauma. Speaking calmly and naming the place, the date and the client's safety grounds the client in the present. Touching without warning can feel like an attack. Leaving the client alone removes support. Asking for details of the memory can deepen the distress.",
      sources: [TIP57, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Calmly state where the client is and that they are safe", why: "Orienting to the present place and safety helps end the flashback." },
      { text: "Touch the client's shoulder to get attention", why: "Unexpected touch can be felt as a threat during a flashback." },
      { text: "Leave the bay until the episode passes", why: "Leaving removes support when the client is most distressed." },
      { text: "Ask the client to describe the memory in detail", why: "Detailed recall now can deepen distress and is not grounding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-35", {
      need: "BCC",
      topic: "Checks during continuous tube feeding",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 69-year-old client receives a continuous feeding through a nasogastric tube. The insertion record lists the tube mark at the nostril as 55 cm. The nurse reviews the 0400 note. Click to highlight the findings that need follow-up.",
      rationale:
        "The head of the bed at 10 degrees is below the 30 degrees needed during feeding and raises aspiration risk. A mark of 48 cm, down from 55 cm, means the tube has moved out and the tip may sit in the esophagus. A firm, distended abdomen with nausea suggests feeding intolerance. Bowel sounds, moist mucosa, a soft stool and clear lungs are expected.",
      refs: ["The head of the bed stays at 30 degrees or higher during tube feeding."],
      sources: [ASPEN_EN, POTTER],
    }),
    kind: "highlight",
    passage:
      "0400. [[Head of bed at 10 degrees]]. [[Tube mark at the nostril reads 48 cm]]. [[Abdomen firm and distended]]. [[Reports nausea]]. [[Bowel sounds present in all 4 quadrants]]. [[Oral mucosa moist]]. [[Soft stool once this shift]]. [[Lung sounds clear]].",
    spans: [
      { text: "Head of bed at 10 degrees", why: "A low head of bed during feeding raises aspiration risk." },
      { text: "Tube mark at the nostril reads 48 cm", why: "A change from the 55 cm mark shows the tube has moved." },
      { text: "Abdomen firm and distended", why: "Distension suggests the feeding is not being tolerated." },
      { text: "Reports nausea", why: "Nausea signals intolerance and a risk of vomiting and aspiration." },
      { text: "Bowel sounds present in all 4 quadrants", why: "Bowel sounds show the gut is active, which is expected." },
      { text: "Oral mucosa moist", why: "Moist mucosa shows adequate hydration." },
      { text: "Soft stool once this shift", why: "A soft stool is an expected finding with tube feeding." },
      { text: "Lung sounds clear", why: "Clear lungs show no sign of aspiration so far." },
    ],
    correct: [0, 1, 2, 3],
  },
  {
    ...meta("rn-s28-36", {
      need: "PSY",
      topic: "Activity choice in severe depression",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 47-year-old client with severe depression moves and speaks slowly and stays in bed. The client says, \"I can't do anything right.\" Which activity should the nurse plan for the first days of admission?",
      rationale:
        "Slowed movement and thinking limit what the client can do. A short walk with the nurse is simple, brief and certain to succeed. It adds light exercise and contact. Competitive games, long discussions and multi-step crafts demand energy and focus the client lacks. Failure at them would reinforce the belief of doing nothing right.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "A competitive team volleyball game", why: "Competition invites failure and needs energy the client lacks." },
      { text: "A 90-minute group discussion on coping", why: "A long session demands concentration the client cannot yet sustain." },
      { text: "A craft project with many detailed steps", why: "Complex tasks risk failure and reinforce feelings of worthlessness." },
      { text: "A short walk on the unit with the nurse", why: "A brief, simple activity offers success, movement and contact." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-37", {
      need: "BCC",
      topic: "Care for functional incontinence",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 83-year-old resident with arthritis walks slowly and often leaks urine on the way to the bathroom. Bladder function tests are normal. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Normal bladder function with leaking on the way to the toilet is functional incontinence. The problem is reaching the toilet in time. Scheduled toileting, easy clothing, a bedside commode and a lit path shorten the trip. Limiting fluids concentrates urine and irritates the bladder. An indwelling catheter adds infection risk and is not indicated. Briefs alone do not treat the cause.",
      sources: [POTTER, GOULD_CAUTI],
    }),
    kind: "sata",
    options: [
      { text: "Restrict fluid intake to 1 L a day", why: "Concentrated urine irritates the bladder and raises dehydration risk." },
      { text: "Offer toileting on a regular schedule", why: "Scheduled toileting gets the resident there before urgency builds." },
      { text: "Provide pants with elastic waistbands", why: "Clothing that comes off quickly saves time at the toilet." },
      { text: "Insert an indwelling urinary catheter", why: "A catheter is not indicated for functional incontinence and adds infection risk." },
      { text: "Place a bedside commode near the bed", why: "A closer toilet shortens the distance the resident must walk." },
      { text: "Rely on absorbent briefs instead of toileting", why: "Briefs manage leakage but do not address the cause." },
      { text: "Keep a night light on the bathroom path", why: "Lighting makes the trip faster and safer at night." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s28-38", {
      need: "BCC",
      topic: "Open wound over the sacrum",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 79-year-old client has been in bed for 5 days after a stroke. The nurse finds a shallow open wound over the sacrum. The wound bed is pink and moist with no slough. It measures 2 cm by 3 cm. The skin around it is intact. The client is sometimes incontinent of stool. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A shallow, pink, moist wound over a bony area with no slough is a partial-thickness loss. That is a stage 2 pressure injury. Moving pressure off the sacrum lets it heal. A moisture-retentive dressing keeps the wound bed moist and shields it from stool. Wound size shows healing over time. Increasing redness, warmth or drainage would signal infection. Incontinence dermatitis is diffuse, not a single wound over a bone.",
      sources: [NPIAP, POTTER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Stage 1 pressure injury", why: "Stage 1 is intact skin with redness that does not blanch. This skin is open." },
      { text: "Stage 2 pressure injury", why: "A shallow, pink, moist wound over a bony area with no slough fits stage 2." },
      { text: "Deep tissue pressure injury", why: "Deep tissue injury shows as purple or maroon skin or a blood blister." },
      { text: "Incontinence-associated dermatitis", why: "This causes diffuse redness where urine or stool touches the skin, not one wound over a bone." },
    ],
    actions: [
      { text: "Reposition the client off the sacrum", why: "Relieving pressure on the wound allows it to heal." },
      { text: "Massage the skin around the wound", why: "Massage near a pressure injury damages fragile tissue." },
      { text: "Apply a moisture-retentive dressing", why: "A moist wound bed heals faster and the dressing shields it from stool." },
      { text: "Pack the wound with dry gauze strips", why: "Packing is for deep cavities. Dry gauze harms a shallow moist wound." },
      { text: "Raise the head of the bed to 45 degrees", why: "A high head of bed increases shear on the sacrum." },
    ],
    parameters: [
      { text: "Serum sodium level", why: "Sodium does not measure wound healing." },
      { text: "Wound length and width", why: "Regular measurements show whether the wound is healing." },
      { text: "Capillary refill in the fingers", why: "Finger perfusion does not reflect this wound." },
      { text: "Redness and drainage at the wound", why: "Spreading redness or new drainage signals infection." },
      { text: "Frequency of bowel sounds", why: "Bowel sounds do not track the pressure injury." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s28-39", {
      need: "PSY",
      topic: "Practicing assertive communication",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 3,
      stem: "A client with low self-esteem is learning assertive communication in group therapy. The client practices what to say to a roommate who plays loud music late at night. Which statement shows the client has learned the skill?",
      rationale:
        "Assertive communication states one's own feeling or need and makes a clear, respectful request. The key statement names the effect on the client's sleep and asks for a specific change. Apologizing and giving in is passive. Name-calling and demands are aggressive. Hinting about what others want is indirect and avoids the request.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Sorry to bother you. It's fine to keep the music on.\"", why: "Apologizing and giving up the need is passive communication." },
      { text: "\"I can't sleep with loud music. Please turn it off at 2200.\"", why: "This states the client's need and makes a clear, specific request." },
      { text: "\"You are so selfish. Turn that noise off right now.\"", why: "Labeling and demanding is aggressive communication." },
      { text: "\"Some people on this unit might want quiet at night.\"", why: "Hinting is indirect and does not make a clear request." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-40", {
      need: "BCC",
      topic: "Constipation self-care teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches a 70-year-old client with chronic constipation about bowel health. Which statement by the client indicates a need for further teaching?",
      rationale:
        "Regular use of stimulant laxatives leads to dependence and can worsen bowel function. The client needs more teaching on that point. More water, more fiber from bran and fruit and daily walking all promote regular bowel movements.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I will take a stimulant laxative every night.\"", why: "Nightly stimulant laxatives cause dependence, so this needs more teaching." },
      { text: "\"I will drink more water through the day.\"", why: "Fluids soften stool and support regular bowel movements." },
      { text: "\"I will add bran cereal and fruit to breakfast.\"", why: "Fiber adds bulk and helps stool move through the bowel." },
      { text: "\"I will walk for 20 minutes after dinner.\"", why: "Physical activity stimulates bowel movement." },
    ],
    correct: 0,
  },
];
