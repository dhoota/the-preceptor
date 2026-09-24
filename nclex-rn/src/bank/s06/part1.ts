import type { Item } from "@/engine/types";
import { AHRQ_FALLS, CDC_PPE, CMS_RESTRAINT, LATEX, NOROVIRUS, PEP2025, PHS2001, POTTER, SIEGEL, STEADI, TJC_NPSG, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s06-01", {
      topic: "Confirming identity before a medication",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse prepares to give scheduled metoprolol to a client in room 412, bed B. The client is drowsy but answers questions. Which action best confirms the client's identity before the nurse gives the medication?",
      rationale:
        "Safe identification uses two client-specific identifiers, such as full name and date of birth. The client states them and the nurse matches them to the wristband and the medication record. A room or bed number is a location, not an identifier. A question that supplies the name invites a drowsy client to agree with a wrong name.",
      sources: [TJC_NPSG, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Ask the client to state name and date of birth", why: "Two identifiers stated by the client and matched to the wristband meet the identification standard." },
      { text: "Check the room and bed number on the door", why: "Room 412, bed B is a location. Clients move and beds are reassigned." },
      { text: "Ask the client to confirm a name the nurse reads", why: "A drowsy client may agree with a name that is not their own." },
      { text: "Match the bed number with the medication record", why: "A bed number is not a client-specific identifier and does not confirm who is in the bed." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-02", {
      topic: "Diseases spread by the airborne route",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The charge nurse reviews the diagnoses of seven clients waiting for beds. Only a few airborne infection isolation rooms are free. Which clients need airborne precautions? Select all that apply.",
      rationale:
        "Measles, varicella and disseminated zoster spread through small particles that stay in the air, so each needs an airborne infection isolation room. Varicella and disseminated zoster also need contact precautions. Mumps, influenza and pertussis spread by large droplets and need droplet precautions. Localized zoster in a client with normal immunity and covered lesions needs standard precautions only.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet and contact precautions for seasonal influenza. Measles, varicella and disseminated zoster still need airborne precautions, so the answer is the same.",
    }),
    kind: "sata",
    options: [
      { text: "An adult with mumps", why: "Mumps spreads by large droplets. Droplet precautions apply." },
      { text: "An adult with influenza A", why: "Influenza spreads mainly by large droplets. Droplet precautions apply." },
      { text: "A child with measles", why: "Measles spreads by the airborne route and needs an airborne infection isolation room." },
      { text: "An adult with covered localized zoster", why: "Covered localized zoster in a client with normal immunity needs standard precautions only." },
      { text: "A child with varicella", why: "Varicella spreads by the airborne route and by contact with lesions." },
      { text: "An infant with pertussis", why: "Pertussis spreads by large droplets. Droplet precautions apply." },
      { text: "An adult with disseminated zoster", why: "Disseminated zoster spreads like varicella and needs airborne and contact precautions." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s06-03", {
      topic: "First step after a needlestick",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A nurse is stuck in the finger by a used insulin needle while disposing of it. The puncture is bleeding slightly. The source client has hepatitis C. What should the nurse do first?",
      rationale:
        "The first step after a percutaneous exposure is to wash the wound with soap and water. Squeezing the wound has not been shown to lower transmission. Caustic agents such as bleach are not recommended and can damage tissue. The exposure is then reported at once so evaluation and any postexposure treatment can start quickly. Reporting comes after the wound is cleaned.",
      refs: ["HIV postexposure prophylaxis, when indicated, starts as soon as possible and within 72 hours of exposure."],
      sources: [PHS2001, PEP2025],
    }),
    kind: "mc",
    options: [
      { text: "Squeeze the site to express blood", why: "Squeezing the wound has not been shown to reduce the risk of infection." },
      { text: "Wash the site with soap and water", why: "Washing with soap and water is the first wound care step after a needlestick." },
      { text: "Soak the finger in dilute bleach", why: "Caustic agents such as bleach are not recommended for wound care." },
      { text: "Complete the incident report form", why: "Reporting is prompt but follows immediate care of the wound." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-04", {
      topic: "As-needed restraint prescription",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 76-year-old client with delirium keeps pulling at a nasogastric tube. Distraction and covering the tube have not worked. The primary health care provider's prescription reads \"soft wrist restraints PRN for agitation.\" What should the nurse do?",
      rationale:
        "Federal hospital rules do not allow a restraint order to be written as a standing or as-needed order. The nurse contacts the provider to clarify the prescription before applying restraints. The clarified order states the type of restraint, the reason and the time limit. Applying restraints on the as-needed order or leaving them on overnight without review does not meet the rule.",
      sources: [CMS_RESTRAINT, POTTER, { body: "Government of Ontario", work: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16", year: 2001, url: "https://www.ontario.ca/laws/statute/01p16" }],
      canada: "The CMS federal rule does not apply in Canada. Restraint use falls under provincial law and employer policy, so order rules vary by province. Ontario, for example, has a 2001 act on minimizing restraints.",
    }),
    kind: "mc",
    options: [
      { text: "Apply the restraints when the client pulls at the tube", why: "The prescription is invalid as written. Acting on it would breach restraint rules." },
      { text: "Ask a colleague to witness the restraint application", why: "A witness does not correct an order that is not allowed as written." },
      { text: "Contact the provider to clarify the restraint prescription", why: "Restraint orders cannot be written as needed, so the order must be clarified first." },
      { text: "Apply the restraints overnight and review in the morning", why: "Restraints need a valid order, frequent monitoring and removal at the earliest safe time." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-05", {
      topic: "Removing protective equipment",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse finishes care for a client on contact and droplet precautions. The nurse wears gloves, a gown, a surgical mask and goggles. Place the steps for removing the equipment in order.",
      rationale:
        "Gloves are the most contaminated item, so they come off first. Goggles come off next, handled by the ear pieces. The gown is pulled away from the body and rolled inside out. The mask is removed by the ties without touching the front. Hand hygiene follows right after all equipment is off. Changing scrubs is not part of the sequence.",
      sources: [CDC_PPE, SIEGEL],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Remove the gown", why: "The gown comes off third, after the gloves and goggles." },
      { text: "Remove the gloves", why: "Gloves are the most contaminated item and come off first." },
      { text: "Remove the mask", why: "The mask comes off fourth, handled only by its ties or bands." },
      { text: "Perform hand hygiene", why: "Hand hygiene comes last, right after all equipment is removed." },
      { text: "Remove the goggles", why: "Goggles come off second, handled by the ear pieces or band." },
      { text: "Change into clean scrubs", why: "Changing scrubs is not a step in removing protective equipment." },
    ],
    correct: [1, 4, 0, 2, 3],
  },
  {
    ...meta("rn-s06-06", {
      topic: "Fire in a client room",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse sees smoke and flames rising from a wastebasket in the room of a client on bed rest after hip surgery. The client is awake and calling for help. What should the nurse do first?",
      rationale:
        "The first step in a fire is to rescue any client in immediate danger. This client cannot leave the bed alone and is close to the flames. After the client is moved clear, the nurse activates the alarm, closes the door to contain the fire and then tries to extinguish it if it is small. Fighting the fire first leaves the client exposed.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Activate the nearest fire alarm", why: "Raising the alarm is the second step, after the client is out of danger." },
      { text: "Close the door to the client room", why: "Closing the door contains the fire but would trap the client inside." },
      { text: "Use the extinguisher on the fire", why: "Extinguishing comes after rescue, alarm and containment." },
      { text: "Move the client away from the fire", why: "Rescue of a client in immediate danger comes first." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s06-07", {
      topic: "Fall prevention in hospital",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 81-year-old client admitted with pneumonia is rated high risk on the unit's fall risk scale. The client walks with a walker and needs to void twice each night. Which measures should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "A low bed shortens the distance of any fall. Scheduled toileting meets the night voiding need before the client gets up alone. The walker within reach stops the client from reaching or walking without it. Nonskid footwear improves grip. Four raised side rails and a vest restraint count as restraints and raise the risk of injury from climbing. Limiting fluids risks dehydration in pneumonia.",
      sources: [AHRQ_FALLS, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Raise all four side rails at night", why: "Four raised rails act as a restraint and lead to falls from climbing over them." },
      { text: "Keep the bed in the lowest position", why: "A low bed reduces the height and harm of a fall." },
      { text: "Apply a vest restraint at night", why: "Restraints do not prevent falls and add risk of injury and delirium." },
      { text: "Limit evening fluids to cut night voiding", why: "A client with pneumonia needs fluids. Restriction risks dehydration." },
      { text: "Offer toileting on a set schedule", why: "Scheduled toileting meets the voiding need before the client gets up alone." },
      { text: "Place the walker within reach", why: "The client can use the walker instead of walking unsupported." },
      { text: "Provide nonskid footwear", why: "Nonskid soles improve grip on hospital floors." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s06-08", {
      topic: "History that suggests latex allergy",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse completes a preoperative interview with a client scheduled for abdominal surgery. Which statement by the client most suggests a risk of latex allergy?",
      rationale:
        "Banana and kiwi share proteins with natural rubber latex. Oral itching after these fruits points to a cross-reaction, so the team plans a latex-safe setting. Shellfish allergy is not linked to latex. A reaction to nickel is a contact allergy to metal. A penicillin rash is a drug allergy with no link to latex.",
      sources: [LATEX, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I break out in hives after eating shrimp.\"", why: "Shellfish allergy does not cross-react with latex proteins." },
      { text: "\"Cheap earrings make my earlobes itch.\"", why: "This suggests a nickel contact allergy, not a latex allergy." },
      { text: "\"My lips itch when I eat banana or kiwi.\"", why: "Banana and kiwi cross-react with latex in latex-fruit syndrome." },
      { text: "\"Penicillin once gave me a skin rash.\"", why: "A penicillin rash is a drug allergy with no link to latex." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-09", {
      topic: "Home fall hazards for an older adult",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The home health nurse makes a first visit to an 84-year-old client who lives alone. The nurse writes a note on the home. Click to highlight the findings that raise the client's risk of falling.",
      rationale:
        "Loose throw rugs are a trip hazard. A dark stairway hides the step edges. A rail on one side only leaves one hand without support on the stairs. Using a step stool to reach high shelves risks a fall from height. A night light, a grab bar, nonslip shoes and a bed at a safe height all lower the risk.",
      sources: [STEADI],
    }),
    kind: "highlight",
    passage:
      "[[Throw rugs line the hallway.]]\n[[A night light is on in the bathroom.]]\n[[A grab bar is fitted beside the toilet.]]\n[[The stair light bulb has burned out.]]\n[[The stairs have a rail on one side only.]]\n[[Client wears laced shoes with nonslip soles.]]\n[[Client uses a step stool to reach daily pots.]]\n[[Feet rest flat on the floor when seated on the bed.]]",
    spans: [
      { text: "Throw rugs line the hallway.", why: "Loose rugs are a common trip hazard and should be removed." },
      { text: "A night light is on in the bathroom.", why: "A night light lowers fall risk on night trips to the toilet." },
      { text: "A grab bar is fitted beside the toilet.", why: "A grab bar supports safe sitting and standing." },
      { text: "The stair light bulb has burned out.", why: "Poor light on stairs hides step edges." },
      { text: "The stairs have a rail on one side only.", why: "Rails on both sides give support whichever hand is free." },
      { text: "Client wears laced shoes with nonslip soles.", why: "Secure, nonslip shoes lower fall risk." },
      { text: "Client uses a step stool to reach daily pots.", why: "Climbing a stool risks a fall. Daily items belong within easy reach." },
      { text: "Feet rest flat on the floor when seated on the bed.", why: "A safe bed height supports steady transfers." },
    ],
    correct: [0, 3, 4, 6],
  },
  {
    ...meta("rn-s06-10", {
      topic: "Hand hygiene during a norovirus outbreak",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A long-term care unit has an outbreak of norovirus gastroenteritis. The nurse has just changed the linen of a resident with watery diarrhea and removed the gloves and gown. Which hand hygiene method should the nurse use?",
      rationale:
        "During a norovirus outbreak, hand hygiene after contact with affected residents uses soap and water. Washing removes virus from the hands mechanically. Alcohol is less active against norovirus. A bleach wipe is a surface product, not a hand product. Chlorhexidine gel with alcohol does not replace washing in this setting.",
      sources: [NOROVIRUS, SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Rub the hands with an alcohol-based gel", why: "Alcohol is less active against norovirus. Outbreak guidance prefers washing." },
      { text: "Use a chlorhexidine and alcohol gel", why: "An antiseptic gel does not replace soap and water after norovirus contact in an outbreak." },
      { text: "Wipe the hands with a bleach wipe", why: "Bleach wipes are for surfaces. They injure skin and are not a hand hygiene product." },
      { text: "Wash the hands with soap and water", why: "Outbreak guidance calls for soap and water after contact with affected residents." },
    ],
    correct: 3,
  },
];
