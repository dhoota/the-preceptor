import type { Item } from "@/engine/types";
import { CPSC_CRIB, HINKLE, HOCKENBERRY, HUMPTY, NATA_HEAT, ACSM_HEAT, NFPA101, POTTER, SIEGEL, SMALLPOX, WMS_EAH, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s31-41", {
      need: "SIPC",
      topic: "Stepping away from an open hospital crib",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 10-month-old infant lies in a hospital crib. The nurse lowers the side rail to change a diaper and finds the diaper supply empty. The diapers are on a shelf across the room. What should the nurse do before stepping away?",
      rationale:
        "An infant of 10 months can roll and crawl to an open edge in seconds. The side rail is raised and locked whenever the nurse's hand is not on the infant. Moving the infant to the far side does not stop a crawl toward the opening. Lowering the crib still leaves the side open. A pillow adds a suffocation hazard and does not stop a fall.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Place the infant at the far side of the crib", why: "An infant this age can crawl back to the open side within seconds." },
      { text: "Lower the crib to its lowest height", why: "A lower crib shortens the fall but leaves the side open." },
      { text: "Place a pillow along the open side", why: "A pillow does not stop a fall and adds a suffocation hazard." },
      { text: "Raise and lock the side rail", why: "A raised, locked rail keeps the infant in the crib while the nurse is away." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s31-42", {
      need: "SIPC",
      topic: "Checking a secondhand crib for a newborn",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "Parents plan to use a secondhand crib made in 2019 for their newborn. The nurse teaches them what to check before use. Which teaching points should the nurse include? Select all that apply.",
      rationale:
        "Drop-side cribs no longer meet the federal standard because a moving side can detach and trap an infant. Slats more than 6 cm (2 3/8 inches) apart can let an infant's body slip through. A mattress that fits snugly leaves no gap where an infant can become wedged. Bolts and screws are checked and tightened, and missing parts are replaced only with parts from the maker. A soft mattress raises the risk of suffocation.",
      sources: [CPSC_CRIB, HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Do not use a crib with a drop side", why: "A drop side can detach and create a gap that traps an infant." },
      { text: "Check that slats are no more than 6 cm (2 3/8 inches) apart", why: "Wider slat spacing can let an infant's body slip through." },
      { text: "Replace lost screws with hardware store parts", why: "Missing or broken parts are replaced only with parts from the manufacturer." },
      { text: "Make sure the mattress fits with no gap at the sides", why: "A gap between mattress and frame can wedge and suffocate an infant." },
      { text: "Choose a soft mattress for comfort", why: "A firm mattress lowers suffocation risk. A soft one raises it." },
      { text: "Tighten loose bolts before each use", why: "Loose hardware can let the crib come apart and trap an infant." },
    ],
    correct: [0, 1, 3, 5],
  },
  {
    ...meta("rn-s31-43", {
      need: "SIPC",
      topic: "Highest fall risk on a pediatric unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "The nurse on a pediatric unit reviews four children for fall risk at the start of the shift. Which child is at highest risk of falling?",
      rationale:
        "Pediatric fall tools such as the Humpty Dumpty scale score age under 3 years highest. Male sex, a neurological diagnosis and sedation within the last 24 hours add risk. The 2-year-old boy with seizures who was sedated 4 hours ago has all four. The older children have fewer risk factors. Albuterol does not sedate, and the 14-year-old has no neurological problem or recent sedation.",
      refs: ["Higher pediatric fall risk: age under 3 years, male sex, neurological diagnosis and sedation or anesthesia within 24 hours."],
      sources: [HUMPTY, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "A 2-year-old boy with seizures, sedated 4 hours ago", why: "Age under 3, male sex, a seizure disorder and recent sedation each add fall risk." },
      { text: "A 9-year-old girl on day 2 of IV antibiotics", why: "An older child without sedation or a neurological diagnosis has lower risk." },
      { text: "A 6-year-old boy using inhaled albuterol for asthma", why: "Albuterol does not sedate, and the child has no neurological diagnosis." },
      { text: "A 14-year-old girl awaiting an appendectomy", why: "She has not yet been sedated and has no neurological diagnosis." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s31-44", {
      need: "SIPC",
      topic: "Breathing support while evacuating a ventilated client",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A fire alarm sounds and the charge nurse orders evacuation of the intensive care unit. A client on a ventilator through an endotracheal tube must be moved. The ventilator runs only on wall power and wall oxygen. How should the nurse support the client's breathing during the move?",
      rationale:
        "The ventilator cannot travel without wall power and gas. A manual resuscitation bag attached to the endotracheal tube and a portable oxygen cylinder keeps ventilation going during the move. Moving without support leaves an intubated client without breaths. Waiting for another ventilator delays the evacuation. A nasal cannula cannot ventilate a client whose airway is an endotracheal tube.",
      sources: [HINKLE, NFPA101],
    }),
    kind: "mc",
    options: [
      { text: "Disconnect and move the client without support", why: "An intubated client on a ventilator cannot be left without breaths." },
      { text: "Wait for the respiratory therapist to bring a ventilator", why: "Waiting delays evacuation while the fire threat grows." },
      { text: "Ventilate with a bag on a portable oxygen cylinder", why: "Manual bagging with portable oxygen continues breaths away from wall power and gas." },
      { text: "Switch to a nasal cannula at 6 L/minute", why: "A cannula gives oxygen but cannot ventilate a client with an endotracheal tube." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s31-45", {
      need: "SIPC",
      topic: "First move in a hospital fire evacuation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "Smoke is reported in a utility room at the far end of a medical unit. The fire doors have closed and divided the unit into smoke compartments. The charge nurse directs staff to move clients out of the rooms near the fire. Where should the nurse move these clients first?",
      rationale:
        "Hospitals are built to defend in place. Fire doors divide each floor into smoke compartments. Moving clients horizontally through the fire doors to the next compartment on the same floor is the fastest route to safety. Moving down stairs is harder and is used only if the floor must be emptied. Elevators are not used during a fire. Rooms near the fire are the ones being emptied.",
      sources: [NFPA101, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Down the stairs to the ground floor exit", why: "Vertical evacuation is slower and harder and is used only if the floor must be emptied." },
      { text: "Past the fire doors on this floor", why: "The next smoke compartment on the same floor protects clients and is quickest to reach." },
      { text: "Into an elevator to the main floor lobby", why: "Elevators can stop or open onto a fire floor and are not used in a fire." },
      { text: "Into rooms near the fire with doors shut", why: "Rooms near the fire are the ones being emptied because they are at greatest risk." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s31-46", {
      need: "SIPC",
      topic: "Triage of heat illness at a music festival",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse staffs a first aid tent at an outdoor music festival. The air temperature is 35°C (95°F). Four attendees arrive at the same time. Which attendee should the nurse treat first?",
      rationale:
        "Confusion with a rectal temperature of 40.6°C points to exertional heat stroke. It can cause organ damage and death within minutes to hours, so cooling starts at once, before transport. Heat cramps and heat syncope that has resolved with lying down are minor. Headache and nausea with a temperature of 38.4°C and a clear mind fit heat exhaustion, which is treated next.",
      refs: ["Exertional heat stroke is central nervous system dysfunction with a rectal temperature above 40°C (104°F)."],
      sources: [NATA_HEAT, ACSM_HEAT],
    }),
    kind: "mc",
    options: [
      { text: "Painful calf spasms after dancing, alert and sweating", why: "Heat cramps are painful but not life threatening." },
      { text: "Fainted while standing in line, now alert lying down", why: "Heat syncope that has resolved with lying flat is not the priority." },
      { text: "Headache and nausea, alert, rectal temperature 38.4°C (101.1°F)", why: "A clear mind with a temperature of 38.4°C fits heat exhaustion, which can wait briefly." },
      { text: "Confused and stumbling, rectal temperature 40.6°C (105.1°F)", why: "Confusion with a temperature above 40°C is heat stroke and needs cooling at once." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s31-47", {
      need: "SIPC",
      topic: "Confused marathon runner who drank at every station",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 31-year-old runner collapses near the finish of a marathon on a hot day. The runner says, \"I drank water at every station to avoid heat stroke.\" The runner is confused and has vomited twice. Rectal temperature is 38.1°C (100.6°F). Weight is 2 kg above the prerace weight. A point-of-care serum sodium is 124 mEq/L (124 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Heavy water intake, a 2 kg weight gain, vomiting, confusion and a sodium of 124 mEq/L fit exercise-associated hyponatremia. The temperature of 38.1°C rules out heat stroke. Confusion means the brain is swelling, so 3% sodium chloride is given as a 100 mL IV bolus as prescribed. Fluids are restricted. Water and sports drinks add free water. Level of consciousness and repeat sodium levels show the response.",
      refs: ["Exertional heat stroke involves a core temperature above 40°C (104°F).", "Symptomatic exercise-associated hyponatremia is treated with a 100 mL IV bolus of 3% sodium chloride, repeated if symptoms persist."],
      sources: [WMS_EAH],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Exercise-associated hyponatremia", why: "Overdrinking, weight gain, confusion and a sodium of 124 mEq/L fit this condition." },
      { text: "Exertional heat stroke", why: "Heat stroke needs a core temperature above 40°C. This runner's is 38.1°C." },
      { text: "Heat exhaustion with dehydration", why: "Dehydration lowers weight rather than raising it and does not explain a sodium of 124 mEq/L." },
      { text: "Hypoglycemia after exercise", why: "Low glucose does not cause a low sodium or weight gain." },
    ],
    actions: [
      { text: "Give 3% sodium chloride 100 mL IV as prescribed", why: "A hypertonic bolus raises sodium and reduces brain swelling." },
      { text: "Encourage 1 L of oral water", why: "Water adds free water and lowers the sodium further." },
      { text: "Start cold water immersion", why: "The temperature of 38.1°C does not call for aggressive cooling." },
      { text: "Restrict fluid intake", why: "Limiting fluids stops further dilution of the sodium." },
      { text: "Give 1 L of a sports drink", why: "Sports drinks are hypotonic and still add free water." },
    ],
    parameters: [
      { text: "Peak expiratory flow", why: "Peak flow tracks airway narrowing and does not guide this treatment." },
      { text: "Level of consciousness", why: "Clearing confusion shows brain swelling is easing." },
      { text: "Serum ferritin level", why: "Ferritin reflects iron stores and does not change with this treatment." },
      { text: "Serum sodium level", why: "Repeat sodium levels show whether the hypertonic saline is working." },
      { text: "Erythrocyte sedimentation rate", why: "This marker of inflammation does not guide care of hyponatremia." },
    ],
    correct: { condition: 0, actions: [0, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s31-48", {
      need: "SIPC",
      topic: "When to stop ice water immersion",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 27-year-old runner with exertional heat stroke at a charity road race is immersed in a tub of ice water in the medical tent. Rectal temperature was 41.4°C (106.5°F) at the start. The nurse checks it every 5 minutes. At which reading should cooling stop?",
      rationale:
        "Cold water immersion continues until the rectal temperature reaches 38.9°C (102.0°F). The client is then removed from the water. Stopping at that point prevents overshoot into hypothermia as heat keeps leaving the body. Readings of 39.4°C, 39.8°C and 40.2°C are still above the target, so cooling continues at each of them.",
      refs: ["Cold water immersion stops when rectal temperature reaches 38.9°C (102.0°F)."],
      sources: [NATA_HEAT, ACSM_HEAT],
    }),
    kind: "mc",
    options: [
      { text: "38.9°C (102.0°F)", why: "Removal at this reading lowers the core temperature while avoiding overcooling." },
      { text: "39.4°C (102.9°F)", why: "This reading is still above the 38.9°C target, so cooling continues." },
      { text: "39.8°C (103.6°F)", why: "This reading is still above the 38.9°C target, so cooling continues." },
      { text: "40.2°C (104.4°F)", why: "This reading is still well above the target, so cooling continues." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s31-49", {
      need: "SIPC",
      topic: "Rash features that suggest smallpox",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "During a public health alert about a possible bioterrorism event, an emergency department nurse records findings on a 24-year-old client with a new rash. Click to highlight the findings that point to smallpox rather than chickenpox.",
      rationale:
        "Smallpox begins with a high fever and symptoms such as backache for days before the rash. Its lesions are deep, firm and round, and in any one area they are at the same stage. They are densest on the face and limbs and reach the palms and soles. Chickenpox has a mild prodrome, superficial lesions in different stages and a trunk-centered rash. Itching, no past chickenpox and a toddler in day care do not separate the two.",
      sources: [SMALLPOX],
    }),
    kind: "highlight",
    passage:
      "[[Fever of 39.7°C (103.5°F) and backache for 3 days before the rash]]. [[Lesions are deep, firm and round]]. [[Reports itching]]. [[All lesions on the face are at the same stage]]. [[Has never had chickenpox]]. [[Lesions are densest on the face and forearms]]. [[Lives with a toddler who attends day care]]. [[Lesions on the palms and soles]].",
    spans: [
      { text: "Fever of 39.7°C (103.5°F) and backache for 3 days before the rash", why: "A high fever with backache for days before the rash fits the smallpox prodrome." },
      { text: "Lesions are deep, firm and round", why: "Deep, firm, round lesions are typical of smallpox. Chickenpox lesions are superficial." },
      { text: "Reports itching", why: "Itching can occur with both rashes and does not separate them." },
      { text: "All lesions on the face are at the same stage", why: "Lesions at one stage in an area fit smallpox. Chickenpox shows lesions in different stages." },
      { text: "Has never had chickenpox", why: "No past chickenpox fits either illness and does not point to smallpox." },
      { text: "Lesions are densest on the face and forearms", why: "A rash densest on the face and limbs fits smallpox. Chickenpox is densest on the trunk." },
      { text: "Lives with a toddler who attends day care", why: "Contact with a young child suggests chickenpox exposure, not smallpox." },
      { text: "Lesions on the palms and soles", why: "Smallpox spreads to the palms and soles. Chickenpox rarely involves them." },
    ],
    correct: [0, 1, 3, 5, 7],
  },
  {
    ...meta("rn-s31-50", {
      need: "SIPC",
      topic: "First step for a suspected smallpox case",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "An emergency department nurse suspects smallpox in a client who had 3 days of high fever, then deep, firm pustules at one stage on the face, arms, palms and soles. The client is in a shared triage area. What should the nurse do first?",
      rationale:
        "Smallpox spreads by respiratory droplets, airborne particles and contact with lesions. The first step is to move the client to an airborne infection isolation room with contact precautions. Infection prevention and the health department are notified at once, because one case is a public health emergency. Lesion testing is arranged through the health department after isolation. Contact tracing follows. Acyclovir treats chickenpox, not smallpox.",
      sources: [SIEGEL, SMALLPOX],
    }),
    kind: "mc",
    options: [
      { text: "Swab a lesion and send it for viral testing", why: "Testing is arranged through the health department after the client is isolated." },
      { text: "Ask the client to list every recent close contact", why: "Contact tracing matters but comes after isolation of the client." },
      { text: "Move the client to an airborne isolation room", why: "Isolation with airborne and contact precautions stops spread to others in triage." },
      { text: "Ask for an acyclovir prescription", why: "Acyclovir treats chickenpox. It is not a treatment for smallpox." },
    ],
    correct: 2,
  },
];
