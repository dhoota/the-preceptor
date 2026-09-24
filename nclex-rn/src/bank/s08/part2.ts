import type { Item } from "@/engine/types";
import { ANA_SPHM, AHRQ_REPORT, BOYCE, CHEMM, CISA_BOMB, CMS_RESTRAINT, OSHA_EXT, POTTER, SIEGEL, TJC_NPG, WHO_HH, meta } from "./common";

/** Batch s08, items 11 to 20. */
export const PART2: Item[] = [
  {
    ...meta("rn-s08-11", {
      topic: "Telephoned bomb threat",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse answers the unit telephone. A caller says a bomb will go off in the hospital within the hour. What should the nurse do while the caller is still on the line?",
      rationale:
        "The person who takes a threat call stays on the line and keeps the caller talking. The exact words, voice, background sounds and caller ID help police judge the threat. A nearby colleague is signaled to call security. Hanging up or transferring the call loses that information. The decision to evacuate rests with facility leaders and police, not with the person who takes the call.",
      sources: [CISA_BOMB],
    }),
    kind: "mc",
    options: [
      { text: "Keep the caller talking and note exact words", why: "Details from the call help police judge the threat. A colleague is signaled to call security." },
      { text: "Hang up and call hospital security at once", why: "Hanging up ends the chance to gather details. Security is called by a colleague instead." },
      { text: "Transfer the call to the hospital operator", why: "A transfer can drop the call and lose the caller's details." },
      { text: "Pull the fire alarm to start an evacuation", why: "Facility leaders and police decide on evacuation. An alarm could move people toward a device." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-12", {
      topic: "Using a portable fire extinguisher",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A small fire starts in a wastebasket in a staff lounge. The nurse has moved people away and raised the alarm. The nurse judges the fire small enough to fight. Place the steps for using the portable extinguisher in order.",
      rationale:
        "The pin is pulled first because it locks the handle. The nozzle is aimed low at the base of the fire, where the fuel burns. Squeezing the handle releases the agent. Sweeping from side to side at the base covers the burning fuel until the fire appears out. Aiming at the top of the flames misses the fuel. Turning the unit upside down is not a step.",
      sources: [OSHA_EXT],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Squeeze the handle", why: "Squeezing releases the agent once the nozzle is aimed. It is the third step." },
      { text: "Aim at the top of the flames", why: "The flames rise from the fuel. The agent must reach the base to put the fire out." },
      { text: "Pull the pin", why: "The pin locks the handle. It comes out first." },
      { text: "Sweep from side to side", why: "Sweeping covers the burning fuel. It is the last step." },
      { text: "Aim low at the base of the fire", why: "The base is where the fuel burns. Aiming comes second, before the handle is squeezed." },
      { text: "Turn the extinguisher upside down", why: "Portable extinguishers are used upright. Inverting the unit is not a step." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s08-13", {
      topic: "Time limits for violent behavior restraint",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 34-year-old client in the emergency department strikes a staff member. The client is placed in restraints for violent behavior at 1400. The nurse plans the required follow-up. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The restraint began at 1400. The face-to-face evaluation must occur within 1 hour, which is by 1500. The client is 34 years old, so each prescription lasts up to 4 hours and must be renewed by 1800 if restraint continues. Shorter limits apply to children and adolescents.",
      refs: [
        "Restraint for violent behavior: face-to-face evaluation within 1 hour of starting.",
        "Each prescription lasts up to 4 hours for adults 18 years or older, 2 hours for ages 9 to 17 and 1 hour under age 9.",
      ],
      sources: [CMS_RESTRAINT, { body: "Government of Ontario", work: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16", year: 2001, url: "https://www.ontario.ca/laws/statute/01p16" }],
      canada: "CMS rules and their 1 hour and 4 hour limits do not apply in Canada. Restraint use falls under provincial law and employer policy, so review times vary by province. Ontario's 2001 restraint act, for example, encourages alternative methods whenever possible.",
    }),
    kind: "cloze",
    template: "A qualified practitioner or trained registered nurse must see the client face to face by {0}. If restraint is still needed, the prescription must be renewed by {1}.",
    scoring: "zero-one",
    blanks: [
      {
        options: [
          { text: "1500", why: "The face-to-face evaluation is due within 1 hour of 1400." },
          { text: "1600", why: "This is 2 hours after the restraint began. The evaluation is due within 1 hour." },
          { text: "1800", why: "This is the renewal time. The face-to-face evaluation is due much sooner." },
          { text: "2200", why: "This is far past the 1 hour window for the evaluation." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "1500", why: "A 1 hour limit applies to children under age 9. The client is 34 years old." },
          { text: "1600", why: "A 2 hour limit applies to ages 9 to 17. The client is an adult." },
          { text: "1800", why: "An adult prescription lasts up to 4 hours from 1400." },
          { text: "2200", why: "This exceeds the 4 hour limit for an adult prescription." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s08-14", {
      topic: "Marking the procedure site",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is scheduled for arthroscopy of the left knee. The nurse helps prepare for site marking in the preoperative area. Which actions reflect correct site marking practice? Select all that apply.",
      rationale:
        "The site is marked before the procedure and with the client involved when possible, so the client is awake and able to confirm the knee. The licensed practitioner who will do the procedure makes the mark. The mark must stay visible after skin prep and draping. An adhesive marker cannot be the only mark. The other knee is not marked, since marks on the wrong side cause confusion.",
      sources: [TJC_NPG],
    }),
    kind: "sata",
    options: [
      { text: "Involve the awake client in the marking", why: "The client can confirm the correct knee before sedation." },
      { text: "Mark an X on the right knee to show the wrong side", why: "Only the procedure site is marked. A mark on the other knee invites confusion." },
      { text: "Have the surgeon doing the procedure mark it", why: "The practitioner accountable for the procedure, who will be present, makes the mark." },
      { text: "Use a mark that shows after prep and draping", why: "The mark must stay visible at the time-out after the site is prepped and draped." },
      { text: "Place an adhesive dot as the only mark", why: "Adhesive markers can come off during prep. They cannot be the sole mark." },
      { text: "Mark the site after sedation in the operating room", why: "Marking happens before the procedure, with the client involved when possible." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s08-15", {
      topic: "Reporting a near miss",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse educator reviews safety event reporting with newly hired nurses. Which statement by a new nurse shows correct understanding?",
      rationale:
        "Near misses show where the system can fail before anyone is harmed, so they are reported like events that reach the client. Reports are part of quality review, not the health record, so the chart does not mention them. Reporting does not depend on injury. An error the nurse caught still points to a hazard that others may meet.",
      sources: [AHRQ_REPORT, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I note in the chart that I filed an event report.\"", why: "The chart records the facts and care given. It does not refer to the event report." },
      { text: "\"I report a near miss even when no harm occurs.\"", why: "Near misses reveal hazards before harm occurs. They are reported." },
      { text: "\"I file a report only when a client is injured.\"", why: "Events without injury, including near misses, are also reported." },
      { text: "\"I skip a report if I fixed the error myself.\"", why: "The hazard that led to the error remains. A report lets the team fix it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s08-16", {
      topic: "Artificial nails in critical care",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse manager observes staff on a surgical intensive care unit. Which staff practice needs follow-up?",
      rationale:
        "Artificial nails hold more gram-negative bacteria and yeast than natural nails, even after hand hygiene. They have been linked to outbreaks in intensive care units. Staff who touch high-risk clients do not wear them. Short natural nails, rubbing hand gel in until dry and using unit-supplied lotion all support good hand hygiene.",
      sources: [BOYCE, WHO_HH],
    }),
    kind: "mc",
    options: [
      { text: "A nurse keeps natural nails trimmed short", why: "Short natural nails are easier to clean. This practice is correct." },
      { text: "An assistive personnel wears acrylic nail tips", why: "Artificial nails carry more organisms and are not worn when caring for high-risk clients." },
      { text: "A therapist rubs hand gel in until dry", why: "Rubbing until dry gives the alcohol time to act. This practice is correct." },
      { text: "A nurse uses the unit's hand lotion on break", why: "Lotion protects skin from damage caused by frequent hand hygiene. This practice is correct." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s08-17", {
      topic: "Nursing bag use in home care",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A home health nurse plans visits to a client with a leg wound colonized with methicillin-resistant Staphylococcus aureus. Which measures should the nurse include in the plan? Select all that apply.",
      rationale:
        "Reusable equipment brought into the home is limited, and a stethoscope can stay in the home until care ends. The nursing bag sits on a clean barrier and is opened only with clean hands. Gown and gloves are worn when wound care brings contact with drainage. Used dressings go into a waste bag in the home. Supplies taken to the bedside do not return to the bag.",
      sources: [SIEGEL, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Leave a dedicated stethoscope in the home", why: "Equipment kept in the home does not carry the organism to other clients." },
      { text: "Carry the used dressing out in the nursing bag", why: "The bag holds clean supplies. Used dressings are bagged as waste in the home." },
      { text: "Set the nursing bag on a clean barrier", why: "A barrier keeps the bag off surfaces that may be contaminated." },
      { text: "Return unused bedside supplies to the bag", why: "Supplies taken to the bedside may be contaminated. They stay in the home." },
      { text: "Wear a gown and gloves for the wound care", why: "Contact with the wound and drainage is expected, so a gown and gloves are worn." },
      { text: "Wash hands before taking items from the bag", why: "Clean hands keep the bag's contents clean for later visits." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s08-18", {
      topic: "Choosing droplet precautions",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews four new admissions on a medical unit. Which client needs droplet precautions in addition to standard precautions?",
      rationale:
        "Influenza spreads mainly in large respiratory droplets over short distances, so droplet precautions are used. Pneumocystis pneumonia needs standard precautions and a room apart from immunocompromised clients. Legionella pneumonia is not spread from person to person. Hepatitis A in a continent adult needs standard precautions only. Contact precautions are added only for diapered or incontinent clients.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet and contact precautions for seasonal influenza. It lists Routine Practices alone for the other three clients, so the answer is the same.",
    }),
    kind: "mc",
    options: [
      { text: "A client with Pneumocystis pneumonia", why: "Standard precautions apply. The only added step is not sharing a room with an immunocompromised client." },
      { text: "A client with confirmed influenza A", why: "Influenza spreads in respiratory droplets, so droplet precautions are added." },
      { text: "A client with hepatitis A who is continent", why: "Standard precautions are enough for a continent adult with hepatitis A." },
      { text: "A client with Legionella pneumonia", why: "Legionella comes from water sources. It is not spread between people." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s08-19", {
      topic: "Decontamination after a pesticide spill",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A worker arrives at the emergency department entrance after a liquid pesticide spill soaked the clothing. The client is awake, breathing 18/minute, and reports burning skin. Staff at the entrance wear chemical protective equipment. Which action should the nurse take first?",
      rationale:
        "Soaked clothing keeps the chemical against the skin and releases vapor. Removing the clothing and washing the skin with water before entry stops further absorption. It also keeps the chemical out of the department, where it could harm staff and other clients. Rinsing only the hands and face leaves the rest of the skin exposed. The pesticide is a contact hazard, not an airborne infection.",
      sources: [CHEMM],
    }),
    kind: "mc",
    options: [
      { text: "Bring the client inside to a treatment room", why: "Entering before decontamination carries the chemical into the department." },
      { text: "Rinse only the skin of the hands and face", why: "The whole body was soaked. Partial rinsing leaves chemical on the skin." },
      { text: "Remove the clothing and wash the skin outside", why: "Removing the clothing and washing stops absorption and protects others." },
      { text: "Place the client in an airborne isolation room", why: "A chemical exposure is not an airborne infection. Decontamination comes first." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-20", {
      topic: "Using a full-body sling lift",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse and an assistive personnel prepare to move a client who weighs 104 kg from bed to chair with a full-body sling lift. Which actions are appropriate? Select all that apply.",
      rationale:
        "The sling is checked for wear before each use, because a torn sling can fail under load. The lift's rated limit must exceed the client's 104 kg. The sling size must fit the client so the client cannot slip through. The client is raised only enough to clear the bed and is not left hanging. The client is lowered fully into the chair before the sling is released.",
      sources: [ANA_SPHM, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Inspect the sling for fraying or tears", why: "A damaged sling can tear under load and drop the client." },
      { text: "Leave the client raised while fetching the chair", why: "A client left hanging in the sling is at risk if the lift shifts. The chair is placed first." },
      { text: "Confirm the weight is within the lift's limit", why: "A lift used above its rated weight can fail." },
      { text: "Move the lift with the client raised high", why: "A client raised high makes the lift top-heavy. The client is kept just clear of the bed." },
      { text: "Choose the sling size that fits the client", why: "A sling that is too large lets the client slip out. One too small digs in." },
      { text: "Unhook the sling before the client is seated", why: "Releasing the sling early can drop the client. The client is lowered fully first." },
    ],
    correct: [0, 2, 4],
  },
];
