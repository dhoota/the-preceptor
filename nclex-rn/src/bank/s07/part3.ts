import type { Item } from "@/engine/types";
import { AAP_CHOKE, CDC_CAURIS, CDC_CO, CDC_CRE, CMS_RESTRAINT, HINKLE, ONS_HD, POTTER, SIEGEL, TJC_SEA68, WHO_HH, meta } from "./common";

/** Batch s07, items 21 to 30. */
export const PART3: Item[] = [
  {
    ...meta("rn-s07-21", {
      topic: "Headache shared by a household",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A home health nurse visits an older adult in winter. The client and spouse both report headache, dizziness and nausea for 3 days. The symptoms ease when they go out. A gas furnace has not been serviced this year and there is no carbon monoxide detector. Temperature is 36.8°C (98.2°F). Pulse oximetry reads 97% on room air. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Two people in one home share headache, dizziness and nausea that ease away from home. An unserviced gas furnace and no detector point to carbon monoxide. Everyone leaves the home at once and emergency services are called. Standard pulse oximetry cannot tell carboxyhemoglobin from oxyhemoglobin, so it can read normal despite poisoning. A carboxyhemoglobin level confirms exposure. A change in level of consciousness shows worsening effects on the brain.",
      sources: [CDC_CO, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Seasonal influenza", why: "Influenza brings fever and aches that do not ease on leaving the home. The temperature is 36.8°C." },
      { text: "Carbon monoxide poisoning", why: "Shared symptoms that ease outside, with an unserviced furnace, fit carbon monoxide exposure." },
      { text: "Food poisoning", why: "Food poisoning does not improve when the people leave the house." },
      { text: "Migraine headache", why: "A migraine would not strike two people at once and ease when they go out." },
    ],
    actions: [
      { text: "Open a window and finish the visit", why: "Staying inside keeps everyone exposed. The home is left at once." },
      { text: "Move both people out of the home", why: "Leaving the source stops further carbon monoxide uptake." },
      { text: "Advise rest and fluids at home", why: "Rest at home continues the exposure." },
      { text: "Relight the furnace pilot light", why: "The nurse does not work on the appliance. A qualified technician inspects it." },
      { text: "Call emergency services now", why: "Both people need prompt emergency assessment and oxygen therapy." },
    ],
    parameters: [
      { text: "Pulse oximetry reading", why: "Pulse oximetry can read falsely normal because it does not tell carboxyhemoglobin from oxyhemoglobin." },
      { text: "Blood glucose level", why: "Glucose does not reflect carbon monoxide exposure." },
      { text: "Carboxyhemoglobin level", why: "The carboxyhemoglobin level confirms and measures carbon monoxide exposure." },
      { text: "Temperature trend", why: "Temperature does not track carbon monoxide effects." },
      { text: "Level of consciousness", why: "Confusion or drowsiness shows worsening effects on the brain." },
    ],
    correct: { condition: 1, actions: [1, 4], parameters: [2, 4] },
  },
  {
    ...meta("rn-s07-22", {
      topic: "Disinfecting equipment for Candida auris",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client on a medical unit has Candida auris on a groin swab and is on contact precautions. The nurse has just used the unit's shared glucose meter in the room. Which cleaning practice is appropriate for the meter?",
      rationale:
        "Candida auris persists on surfaces and spreads on shared equipment such as glucose meters. Many common hospital disinfectants do not kill it. Products that rely on quaternary ammonium compounds alone are not effective. The nurse uses a product on EPA List P, which is shown to work against this organism. Shared equipment is disinfected after each use.",
      sources: [CDC_CAURIS],
    }),
    kind: "mc",
    options: [
      { text: "Wipe it with a quaternary ammonium product", why: "Products that rely on quaternary ammonium compounds alone are not effective against Candida auris." },
      { text: "Wash it with soap and water, then air dry", why: "Soap and water remove soil but are not a disinfectant for this organism." },
      { text: "Wipe it with a product listed for C. auris", why: "EPA List P names products shown to kill Candida auris on surfaces." },
      { text: "Clean it once at the end of the shift", why: "Shared equipment is disinfected after each use. Waiting lets it carry the organism to other clients." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-23", {
      topic: "Moments for hand hygiene",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "An infection prevention nurse audits a staff nurse's hand hygiene during one hour of care on a medical unit. At which moments is hand hygiene required? Select all that apply.",
      rationale:
        "Hand hygiene is needed before touching a client and before a clean or aseptic task. It is needed after a risk of body fluid exposure, after touching a client and after touching the client's surroundings. Removing gloves does not replace hand hygiene. Walking in the hallway and answering a phone are not care moments on their own.",
      sources: [WHO_HH],
    }),
    kind: "sata",
    options: [
      { text: "Before answering the unit telephone", why: "Answering a phone is not a care moment. Hand hygiene after leaving the client covers this." },
      { text: "Before taking the client's radial pulse", why: "Hand hygiene is needed before touching a client." },
      { text: "Before a sterile dressing change", why: "Hand hygiene is needed before a clean or aseptic task." },
      { text: "While walking down the hallway", why: "Walking in a hallway is not a care moment." },
      { text: "After touching the client's bed rails", why: "Hand hygiene is needed after touching the client's surroundings." },
      { text: "After removing gloves used to empty a urinal", why: "Gloves do not replace hand hygiene after a risk of body fluid exposure." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s07-24", {
      topic: "Choking prevention for a toddler",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the parent of a 2-year-old child about preventing choking at meals and snacks. Which statement by the parent shows understanding?",
      rationale:
        "Round, firm foods can block a small child's airway. Grapes are cut into quarters to change their shape. Hot dogs cut into round coins keep the dangerous shape, so they are also cut lengthwise. Popcorn and hard candy are high-risk foods for young children. Sitting still helps, but it does not make hard candy safe.",
      sources: [AAP_CHOKE],
    }),
    kind: "mc",
    options: [
      { text: "I will cut grapes into quarters before serving.", why: "Quartering grapes changes the round shape that can plug a child's airway." },
      { text: "I will slice hot dogs into round coins for snacks.", why: "Round coins keep an airway-sized shape. Hot dogs are cut lengthwise as well." },
      { text: "I will let my child snack on popcorn at movies.", why: "Popcorn is a high-risk food for choking in young children." },
      { text: "I will give hard candy only when my child sits still.", why: "Hard candy is a high-risk food even when the child is seated." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-25", {
      topic: "Matching conditions to precautions",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse reviews four new admissions to plan room placement. Match each condition to the precautions it needs in addition to standard precautions.",
      rationale:
        "Rubella spreads by respiratory droplets, so droplet precautions apply. Hepatitis A spreads by the fecal-oral route, and contact precautions apply to an incontinent adult. Smallpox spreads through the air and by contact with lesions, so both airborne and contact precautions apply. Cytomegalovirus needs standard precautions only.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet, contact and airborne precautions for smallpox. It lists Routine Practices for adult hepatitis A, with contact precautions when an incontinent adult's stool cannot be contained.",
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Rubella", "Hepatitis A in an incontinent adult", "Smallpox", "Cytomegalovirus infection"],
    tokens: [
      { text: "Airborne and contact precautions", why: "Smallpox spreads through the air and by contact with lesions, so both apply." },
      { text: "Droplet precautions", why: "Rubella spreads by large respiratory droplets." },
      { text: "No added precautions", why: "Cytomegalovirus needs standard precautions only." },
      { text: "Contact precautions", why: "Hepatitis A in an incontinent adult spreads by the fecal-oral route through soiled hands and surfaces." },
      { text: "Airborne precautions only", why: "Airborne precautions alone suit measles or pulmonary tuberculosis. None of the listed conditions needs only these." },
      { text: "Droplet and contact precautions", why: "This pairing suits conditions such as a major group A streptococcal wound. None of the listed conditions needs it." },
    ],
    correct: [1, 3, 0, 2],
  },
  {
    ...meta("rn-s07-26", {
      topic: "Surgical fire prevention",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The circulating nurse prepares a client for surgery on the upper chest using electrosurgery. The skin has been prepped with an alcohol-based chlorhexidine solution. Which action lowers the risk of a surgical fire?",
      rationale:
        "A fire needs an ignition source, a fuel and an oxidizer. Electrosurgery supplies the ignition. Wet alcohol-based prep gives off flammable vapor that drapes can trap. Letting the prep dry before draping removes that fuel. Extra oxygen under the drapes and an unholstered electrosurgical pencil add to the risk.",
      sources: [TJC_SEA68],
    }),
    kind: "mc",
    options: [
      { text: "Drape the client right after the prep is applied", why: "Draping over wet prep traps flammable alcohol vapor near the ignition source." },
      { text: "Let the prep dry fully before draping", why: "Dry prep no longer gives off flammable vapor, which removes a fuel source." },
      { text: "Increase the oxygen flow under the drapes", why: "Oxygen pooled under drapes feeds a fire. Oxygen is kept to the lowest level needed." },
      { text: "Rest the electrosurgical pencil on the drapes", why: "An active pencil resting on drapes can ignite them. It is kept in a holster." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-27", {
      topic: "Hazardous drug spill response",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A bag of IV carboplatin leaks, and about 30 mL spills onto the floor of a client room. Place the nurse's actions in order.",
      rationale:
        "The area is secured first so no one else walks through the drug. The nurse then puts on the gown, double chemotherapy gloves, eye protection and respirator from the spill kit. Absorbent pads contain the liquid. The area is then washed with detergent and rinsed. All waste goes into a hazardous waste container, and the spill is reported. A unit mop spreads the drug.",
      sources: [ONS_HD],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Wash the area with detergent and rinse", why: "Washing follows removal of the bulk liquid so the remaining drug is lifted from the floor." },
      { text: "Restrict access to the spill area", why: "Securing the area first keeps others from walking through the drug." },
      { text: "Wipe the spill up with the unit floor mop", why: "A unit mop spreads the drug and becomes contaminated. Spill kit pads are used." },
      { text: "Put on protective equipment from the spill kit", why: "Gown, double gloves, eye protection and a respirator go on before touching the spill." },
      { text: "Place all waste in a hazardous waste bag", why: "Contaminated pads and equipment go into hazardous waste once cleaning is done." },
      { text: "Absorb the liquid with spill kit pads", why: "Absorbent pads contain the liquid before the area is washed." },
    ],
    correct: [1, 3, 5, 0, 4],
  },
  {
    ...meta("rn-s07-28", {
      topic: "Resident who wanders to exits",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 79-year-old resident of a long-term care facility has dementia. The resident walks the halls most afternoons and has twice been found at the front exit. Which intervention should the nurse add to the care plan?",
      rationale:
        "Wandering often meets a need such as exercise or relief of restlessness. Blocking it with restraint raises agitation and the risk of injury. An electronic band that alarms at exits alerts staff before the resident leaves. Scheduled supervised walks meet the need to move. A sedative given to control movement is a chemical restraint.",
      sources: [POTTER, CMS_RESTRAINT, { body: "Government of Ontario", work: "Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1", year: 2021, url: "https://www.ontario.ca/laws/statute/21f39" }],
      canada: "CMS rules do not apply in Canada. Restraint in long-term care falls under provincial law, so rules vary by province. Ontario's Fixing Long-Term Care Act, 2021 allows a physical restraint only after alternatives are considered and tried where appropriate.",
    }),
    kind: "mc",
    options: [
      { text: "Apply a vest restraint during the afternoon", why: "A restraint increases agitation and injury risk. Less restrictive measures come first." },
      { text: "Keep the resident in bed with rails raised", why: "Confining the resident to bed with raised rails is a restraint and can cause falls over the rails." },
      { text: "Give a sedative when the pacing begins", why: "A drug given to limit movement is a chemical restraint and raises fall risk." },
      { text: "Use an exit alarm band and plan walks", why: "An exit alarm alerts staff early, and planned walks meet the need to move." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s07-29", {
      topic: "Carbapenem-resistant organism on admission",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client transferred from another hospital has carbapenem-resistant Enterobacterales in a urine culture. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Carbapenem-resistant organisms spread on hands, equipment and surfaces. Contact precautions apply, with a gown and gloves on entry. A single room is used when one is available. Dedicated equipment stays in the room. Receiving units are told before a transfer. There is no rule that ends precautions after one negative culture. A respirator is not needed.",
      sources: [CDC_CRE, SIEGEL],
    }),
    kind: "sata",
    options: [
      { text: "Wear an N95 respirator for all care", why: "The organism does not spread through the air. A respirator is not needed." },
      { text: "Wear a gown and gloves on entry", why: "Gown and gloves block spread from the client and the surroundings to staff clothing and hands." },
      { text: "End precautions after one negative culture", why: "Colonization can persist. One negative culture does not end precautions." },
      { text: "Keep a dedicated thermometer in the room", why: "Dedicated equipment stops spread on shared devices." },
      { text: "Place the client in a single room", why: "A single room lowers spread to other clients when one is available." },
      { text: "Share a bathroom with a roommate", why: "A shared bathroom lets the organism pass to another client." },
      { text: "Tell the receiving unit before a transfer", why: "Advance notice lets the receiving unit prepare the right precautions." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s07-30", {
      topic: "Rising diarrhea cases on a unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "The charge nurse on a medical unit reviews weekly surveillance data. Based on the trend, what should the charge nurse conclude?",
      tabs: [
        {
          title: "Unit Surveillance",
          table: {
            head: ["Measure", "Week 1", "Week 2", "Week 3", "Week 4"],
            rows: [
              ["Clients on the unit", "28", "27", "28", "26"],
              ["New diarrhea after day 3 of stay", "1", "1", "4", "6"],
              ["Positive C. difficile tests", "0", "1", "3", "5"],
            ],
          },
        },
      ],
      rationale:
        "Positive C. difficile tests rose from 0 in week 1 to 5 in week 4. The new diarrhea began after day 3 of the stay, which marks the cases as hospital onset. The census stayed between 26 and 28, so more clients do not explain the rise. This pattern suggests spread on the unit. The nurse reports it to infection prevention so an outbreak response can start.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "A cluster of hospital-onset infection is likely", why: "Cases acquired after day 3 of the stay rose from 1 to 6 over 4 weeks, which points to spread on the unit." },
      { text: "The rise matches a change in the unit census", why: "The census stayed between 26 and 28 clients while cases rose." },
      { text: "The cases most likely began before admission", why: "Onset came after day 3 of the stay, which marks the cases as acquired in hospital." },
      { text: "The counts show usual week to week variation", why: "Positive tests rose every week, from 0 to 5. That is a pattern, not random scatter." },
    ],
    correct: 0,
  },
];
