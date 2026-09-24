import type { Item } from "@/engine/types";
import { AAP_WINDOW, AHRQ_REPORT, CDC_FLU_HC, CDC_MPOX, CDC_VZV, CPSC_SCALD, OSHA_RESP, POTTER, SIEGEL, USFA_ALARM, WHO_HH, meta } from "./common";

/** Batch s08, items 21 to 30. */
export const PART3: Item[] = [
  {
    ...meta("rn-s08-21", {
      topic: "Surgical hand antisepsis with a hand rub",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "Before the first case of the day, the nurse prepares for surgical hand antisepsis with an alcohol-based surgical hand rub. The nurse washed with soap and water on arrival and the hands are not soiled. Which step belongs in the procedure?",
      rationale:
        "An alcohol-based surgical rub works as it evaporates. The hands and forearms are left to dry fully before sterile gloves go on. The rub covers the hands and forearms, not the hands alone. Towel drying removes the product before it has acted. For a surgical scrub, the hands are held above the elbows so water and product drain away from the fingertips.",
      sources: [WHO_HH],
    }),
    kind: "mc",
    options: [
      { text: "Dry the hands with a sterile towel after the rub", why: "The rub dries by evaporation. A towel removes it before it has acted." },
      { text: "Apply the rub to the hands but not the forearms", why: "Surgical antisepsis covers the hands and the forearms." },
      { text: "Hold the hands below the elbows during the rub", why: "The hands are held above the elbows so product drains away from the fingertips." },
      { text: "Let the hands and forearms dry before gloving", why: "Full drying lets the alcohol act and keeps gloves from sticking to wet skin." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-22", {
      topic: "Breaks in contact precautions",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The infection prevention nurse observes care for a client on contact precautions for vancomycin-resistant Enterococcus. Click to highlight the observations that need follow-up.",
      rationale:
        "Equipment used in the room stays there or is cleaned and disinfected before use on another client, so moving the walker spreads the organism. Gloves worn in the room are removed before leaving and hands are cleaned, so typing at a hallway computer in the same gloves soils a shared surface. A gown is removed before leaving the room and never worn into another room.",
      sources: [SIEGEL],
    }),
    kind: "highlight",
    passage:
      "Room 8. [[Assistive personnel put on a gown and gloves before entering]]. [[Nurse used the stethoscope kept in the room]]. [[Therapist took the room's walker to the next client]]. [[Nurse typed at the hallway computer in the same gloves]]. [[Housekeeper wiped the bed rails with hospital disinfectant]]. [[Visitor was shown how to put on a gown and gloves]]. [[Nurse removed the gown and gloves inside the room at the door]]. [[Assistive personnel wore the same gown into the next room]].",
    spans: [
      { text: "Assistive personnel put on a gown and gloves before entering", why: "Gown and gloves go on before entry. This is correct." },
      { text: "Nurse used the stethoscope kept in the room", why: "Dedicated equipment stays with the client. This is correct." },
      { text: "Therapist took the room's walker to the next client", why: "Shared equipment carries the organism to the next client unless cleaned and disinfected." },
      { text: "Nurse typed at the hallway computer in the same gloves", why: "Soiled gloves contaminate a surface that many staff touch." },
      { text: "Housekeeper wiped the bed rails with hospital disinfectant", why: "High-touch surfaces are cleaned often in contact precautions. This is correct." },
      { text: "Visitor was shown how to put on a gown and gloves", why: "Teaching visitors supports the precautions. This is correct." },
      { text: "Nurse removed the gown and gloves inside the room at the door", why: "Protective equipment comes off before leaving the room. This is correct." },
      { text: "Assistive personnel wore the same gown into the next room", why: "A used gown carries the organism to another client." },
    ],
    correct: [2, 3, 7],
  },
  {
    ...meta("rn-s08-23", {
      topic: "When droplet precautions for influenza can end",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 58-year-old client was admitted with influenza A. Symptoms began on illness day 1. The client is on droplet precautions. On the morning of illness day 6, the nurse reviews the flow sheet. Based on the trend, which statement about the precautions is accurate?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Finding", "Day 3", "Day 4", "Day 5", "Day 6"],
            rows: [
              ["Highest temperature", "38.9°C (102.0°F)", "38.2°C (100.8°F)", "37.1°C (98.8°F)", "36.9°C (98.4°F)"],
              ["Cough", "Frequent", "Frequent", "Occasional", "Occasional"],
              ["Respiratory rate (/minute)", "24", "22", "18", "18"],
            ],
          },
        },
      ],
      rationale:
        "The fever resolved by day 5, but the cough is still present on day 6. It is also fewer than 7 days since symptoms began. Either fact keeps droplet precautions in place. Resolving fever alone is not enough. Influenza does not call for airborne precautions outside aerosol-generating procedures.",
      refs: ["Droplet precautions for influenza continue for 7 days after illness onset or until 24 hours after fever and respiratory symptoms resolve, whichever is longer."],
      sources: [CDC_FLU_HC, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet and contact precautions for seasonal influenza for the duration of symptoms, with no 7 day minimum. The ongoing cough still keeps precautions in place, so the answer is the same.",
    }),
    kind: "mc",
    options: [
      { text: "Continue them because the cough persists", why: "Respiratory symptoms have not resolved, and 7 days have not passed since onset." },
      { text: "Stop them because the fever resolved on day 5", why: "Fever is only one criterion. The cough persists on day 6." },
      { text: "Stop them because 5 days have passed since onset", why: "Precautions last at least 7 days after onset." },
      { text: "Change them to airborne precautions", why: "Influenza spreads by droplets. Airborne precautions are not needed for routine care." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-24", {
      topic: "Isolation for suspected mpox",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 29-year-old client comes to the emergency department with fever and painful swollen lymph nodes in the groin. Firm, deep pustules, all at the same stage, are on the palms and genitals. A sexual partner was diagnosed with mpox 9 days ago. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Contact with a partner who has mpox, fever, swollen nodes and deep pustules at one stage on the palms and genitals point to mpox. The client goes to a single room with a private bathroom. Special air handling is not needed. Staff wear a gown, gloves, eye protection and an N95 respirator. Precautions continue until every lesion has crusted, the crusts have fallen off and new skin has formed. Temperature is followed for spread of infection.",
      sources: [CDC_MPOX],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Mpox", why: "A known exposure, swollen nodes and same-stage deep pustules fit this infection." },
      { text: "Varicella", why: "Varicella lesions appear in crops at different stages and seldom involve the palms." },
      { text: "Scabies", why: "Scabies causes itchy burrows and papules without fever or swollen nodes." },
      { text: "Impetigo", why: "Impetigo forms honey-colored crusts, usually on the face, without deep pustules." },
    ],
    actions: [
      { text: "Open a pustule with a needle for testing", why: "Unroofing lesions with sharp tools risks a needlestick exposure. Swabs are used instead." },
      { text: "Room the client alone with a private bathroom", why: "A single room with its own bathroom limits contact spread." },
      { text: "Wear a surgical mask and gloves only", why: "The guidance calls for a gown, gloves, eye protection and an N95 respirator." },
      { text: "Wear a gown, gloves, eye protection and N95", why: "This set protects against contact with lesions and respiratory secretions." },
      { text: "Seat the client in the main waiting room", why: "The client is roomed away from others at once." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase does not guide care of this infection." },
      { text: "Crusting and healing of lesions", why: "Precautions end only when crusts have fallen off and new skin has formed." },
      { text: "Peak expiratory flow", why: "The client has no airway disease that needs peak flow monitoring." },
      { text: "Body temperature", why: "Temperature trends show whether the systemic infection is settling." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose control and does not guide this care." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s08-25", {
      topic: "Varicella exposure in a clinic waiting room",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A child in a pediatric clinic waiting room is found to have varicella. Four other people shared the room for 30 minutes. The 5-year-old is fully vaccinated. The others have no vaccination records. Which exposed person is at greatest risk for severe disease?",
      rationale:
        "Chemotherapy suppresses the immune response, and a child with leukemia who gets varicella can develop spread of the virus to the lungs, liver and brain. This child is the priority for rapid follow-up and postexposure prophylaxis. Two vaccine doses protect the 5-year-old well. Adults who had chickenpox are immune. Past chickenpox raises later shingles risk but does not make new varicella likely.",
      sources: [CDC_VZV],
    }),
    kind: "mc",
    options: [
      { text: "A 5-year-old who has had 2 doses of vaccine", why: "Two doses give strong protection against severe varicella." },
      { text: "A 40-year-old who had chickenpox as a child", why: "Past infection gives lasting immunity to varicella." },
      { text: "A 7-year-old with leukemia on chemotherapy", why: "Immunosuppression puts this child at risk for disseminated, severe varicella." },
      { text: "A 70-year-old who had chickenpox years ago", why: "Past infection protects against new varicella. Shingles is a separate risk." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-26", {
      topic: "Preventing window falls in young children",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the parents of a 3-year-old who live in a third-floor apartment about preventing falls from windows. Which statements by the parents show understanding? Select all that apply.",
      rationale:
        "Young children climb furniture to reach windows, so beds and sofas are moved away from them. Operable window guards on upper floors stop a child from falling through an open window. Supervision near open windows adds another layer. Insect screens are not strong enough to hold a child. A sofa under the window gives the child a way to climb up.",
      sources: [AAP_WINDOW],
    }),
    kind: "sata",
    options: [
      { text: "\"We will move the toddler bed away from the windows.\"", why: "Furniture near a window lets a child climb up to it." },
      { text: "\"The window screens will keep our child from falling.\"", why: "Screens keep insects out. They cannot hold a child's weight." },
      { text: "\"We will install window guards on the windows.\"", why: "Guards on upper-floor windows prevent falls through an open window." },
      { text: "\"We will keep the sofa under the window for the view.\"", why: "A sofa under the window gives the child a way to climb up." },
      { text: "\"We will watch our child closely near open windows.\"", why: "Supervision adds protection when a window is open." },
      { text: "\"We can leave the windows wide open during naps.\"", why: "An open window without a guard is a fall risk while adults are not watching." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s08-27", {
      topic: "Home visit smoke alarm check",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "During a home visit to an 80-year-old client who lives alone, the nurse notes several things about the home. Which finding needs follow-up?",
      rationale:
        "A chirping smoke alarm signals a low battery, and the alarm may fail in a fire. The battery is replaced now and the alarm tested. Night-lights on the path to the bathroom and grab bars by the toilet lower fall risk. A water heater set at 49°C (120°F) matches the setting advised to prevent scalds.",
      sources: [USFA_ALARM, CPSC_SCALD],
    }),
    kind: "mc",
    options: [
      { text: "Smoke alarm chirping every minute for 2 weeks", why: "Chirping means a low battery. The alarm may not sound in a fire." },
      { text: "Night-lights along the path to the bathroom", why: "Lighting the path at night lowers fall risk. This is safe." },
      { text: "Water heater set at 49°C (120°F)", why: "This setting is the one advised to prevent tap water scalds." },
      { text: "Grab bars installed beside the toilet", why: "Grab bars support safe transfers. This is safe." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-28", {
      topic: "Putting on an N95 respirator",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to enter an airborne infection isolation room. The nurse has a fit-tested N95 respirator. Place the steps for putting on the respirator in order.",
      rationale:
        "Hand hygiene comes first so clean hands handle the respirator. The respirator is checked for damage, then placed over the nose and mouth with the straps in position. The nosepiece is molded with the fingertips of both hands so it seals over the nose. A user seal check is done each time the respirator is put on. Pinching with one hand bends the nosepiece and breaks the seal. Crossed straps do not hold the edges flat.",
      sources: [OSHA_RESP, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Mold the nosepiece with both hands", why: "Both hands shape the metal strip to the nose. This follows placement." },
      { text: "Pinch the nosepiece with one hand", why: "Pinching bends the strip into a point and leaves gaps at the sides." },
      { text: "Perform hand hygiene", why: "Clean hands come first so the respirator is not soiled." },
      { text: "Perform a user seal check", why: "The seal check is done each time the respirator is put on. It is the last step." },
      { text: "Cross the straps behind the head", why: "Crossed straps pull the edges out of line and weaken the seal." },
      { text: "Inspect the respirator for damage", why: "A damaged respirator will not seal. It is checked before it goes on." },
      { text: "Place it over the nose and mouth", why: "The respirator is positioned with the straps in place before the nosepiece is molded." },
    ],
    correct: [2, 5, 6, 0, 3],
  },
  {
    ...meta("rn-s08-29", {
      topic: "Walking with a gait belt",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse helps a client with left-sided weakness walk in the hall for the first time after a stroke. A gait belt is fastened over the client's clothing. Where should the nurse walk?",
      rationale:
        "The client is most likely to fall toward the weak left side. Walking slightly behind on that side with a hand on the belt lets the nurse support the client and guide a fall to the floor. The strong side needs less support. Walking in front blocks the path. An arm is not a safe handhold, since pulling on it can injure the shoulder.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Directly in front, walking backward", why: "The nurse cannot see obstacles and blocks the client's path." },
      { text: "Slightly behind on the right, holding the belt", why: "The right side is the strong side. A fall is more likely to the left." },
      { text: "Beside the right side, holding the client's arm", why: "Pulling on an arm can injure the shoulder, and the right side is the strong side." },
      { text: "Slightly behind on the left, holding the belt", why: "The nurse supports the weak side, where a fall is most likely." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-30", {
      topic: "Events that need a safety report",
      cjmm: "recognize",
      process: "communication",
      difficulty: 2,
      stem: "The nurse reviews the events of a shift. Which events should the nurse report through the facility's safety event reporting system? Select all that apply.",
      rationale:
        "Safety event reports capture falls, errors, near misses and hazards, whether or not anyone is hurt. A client who slipped to the floor, a wrong dose caught at the bedside and a visitor who fell all qualify. Expected nausea after chemotherapy is an expected effect, not an event. An informed refusal is the client's right and is documented. A cleared pump occlusion is routine care.",
      sources: [AHRQ_REPORT],
    }),
    kind: "sata",
    options: [
      { text: "A client slid to the floor while toileting but was not hurt", why: "A fall is reported even without injury." },
      { text: "A client had expected nausea after chemotherapy", why: "An expected effect of treatment is charted, not reported as an event." },
      { text: "A wrong dose was caught at the bedside scan before it was given", why: "A near miss is reported so the cause can be fixed." },
      { text: "A client declined a flu vaccine after teaching", why: "An informed refusal is the client's right. It is documented in the chart." },
      { text: "A visitor fell on a wet floor in the hallway", why: "Injuries and falls involving visitors are also safety events." },
      { text: "An IV pump alarmed for a kinked line that was cleared", why: "A cleared occlusion is routine care, not a safety event." },
    ],
    correct: [0, 2, 4],
  },
];
