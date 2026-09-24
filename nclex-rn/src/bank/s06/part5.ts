import type { Item } from "@/engine/types";
import { ALARMS, CDC_SCABIES, CMS_RESTRAINT, HAZCOM, IPECAC, POTTER, SAFE_SLEEP, SEHULSTER, SIEGEL, TJC_UP, WHO_SURGERY, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s06-41", {
      topic: "Early discharge in a disaster",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A hospital activates its disaster plan after a train derailment and needs beds for incoming casualties. The nurse reviews four clients on a medical unit. Which client should the nurse recommend for early discharge?",
      rationale:
        "In a surge, clients who are stable and can finish care at home leave first. Stable cellulitis already switched to oral antibiotics can be managed as an outpatient. A client on day 1 after bowel resection with a nasogastric tube still needs acute care. New chest pain awaiting troponin results is unstable until a heart attack is ruled out. An IV heparin infusion for pulmonary embolism needs hospital monitoring.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Client on day 1 after bowel resection with a nasogastric tube", why: "Early postoperative care with gastric suction needs the hospital." },
      { text: "Client with stable cellulitis switched to oral antibiotics", why: "A stable client on oral therapy can complete care at home." },
      { text: "Client with new chest pain awaiting troponin results", why: "Acute coronary syndrome is not yet ruled out, so the client is not stable." },
      { text: "Client receiving IV heparin for a pulmonary embolism", why: "A heparin infusion needs close monitoring and lab checks in hospital." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-42", {
      topic: "Safe infant sleep teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse prepares discharge teaching on sleep safety for the parents of a healthy newborn. Which points should the nurse include? Select all that apply.",
      rationale:
        "The back position for every sleep lowers the risk of sudden unexpected infant death. A firm, flat surface with a fitted sheet and nothing else in the crib prevents suffocation. Room sharing without bed sharing is advised. Bumper pads, soft bedding and inclined sleepers add suffocation risk. Bed sharing raises the risk of sleep-related death.",
      sources: [SAFE_SLEEP],
    }),
    kind: "sata",
    options: [
      { text: "Place the baby on the back for each sleep", why: "The supine position lowers the risk of sleep-related death." },
      { text: "Use a firm, flat mattress with a fitted sheet", why: "A firm, flat surface prevents the face from sinking into soft material." },
      { text: "Add padded bumpers to the crib sides", why: "Bumper pads pose a suffocation and entrapment risk." },
      { text: "Share the parents' bed to ease night feeds", why: "Bed sharing raises the risk of suffocation and sleep-related death." },
      { text: "Keep the crib in the parents' room", why: "Room sharing without bed sharing lowers the risk of sleep-related death." },
      { text: "Use an inclined sleeper to help reflux", why: "Inclined sleepers let the head fall forward and block the airway." },
      { text: "Keep blankets and toys out of the crib", why: "Soft objects in the crib can cover the face and cause suffocation." },
    ],
    correct: [0, 1, 4, 6],
  },
  {
    ...meta("rn-s06-43", {
      topic: "Cleaning a blood spill",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client's IV tubing disconnects and a large pool of blood spills onto the floor of the room. Place the nurse's steps for cleaning the spill in order.",
      rationale:
        "Gloves go on first to protect the hands from blood. Visible blood is absorbed with disposable towels, which go into biohazard waste. The area is then treated with a registered disinfectant left wet for its full contact time. Blood left on the surface would reduce the disinfectant's effect. Gloves come off last, followed by hand hygiene. Rinsing with water first spreads the blood.",
      sources: [SEHULSTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Apply a disinfectant for its full contact time", why: "Disinfection follows removal of visible blood so the product can act on a clean surface." },
      { text: "Put on gloves", why: "Gloves protect the nurse's hands from contact with blood." },
      { text: "Remove gloves and perform hand hygiene", why: "This is the last step, after the area is disinfected." },
      { text: "Absorb the blood with disposable towels", why: "Visible organic material is removed before the disinfectant is applied." },
      { text: "Rinse the spill with warm water first", why: "Water spreads the blood over a wider area and is not a cleaning step here." },
    ],
    correct: [1, 3, 0, 2],
  },
  {
    ...meta("rn-s06-44", {
      topic: "Applying a wrist restraint",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse applies a soft wrist restraint to a client under a valid, time-limited prescription. Which action by the nurse is correct?",
      rationale:
        "The strap is tied to the bed frame, which moves with the bed, using a quick-release tie. A quick-release tie can be undone fast in an emergency. A side rail moves when lowered and can pull on the wrist. A square knot is hard to untie quickly. Two fingers should fit under the band so it does not impair circulation.",
      sources: [POTTER, CMS_RESTRAINT],
    }),
    kind: "mc",
    options: [
      { text: "Tie the strap to the movable side rail", why: "Lowering the rail can pull the strap and injure the wrist." },
      { text: "Use a square knot so it cannot slip", why: "A square knot is slow to release in an emergency." },
      { text: "Leave no space under the restraint band", why: "A band with no space can impair circulation. Two fingers should fit under it." },
      { text: "Use a quick-release tie on the bed frame", why: "The bed frame moves with the bed and the tie can be released fast." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s06-45", {
      topic: "Scabies in long-term care",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A resident in a long-term care facility is diagnosed with typical scabies and will receive permethrin cream tonight. Which two actions should the nurse take? Select two.",
      rationale:
        "Scabies spreads by direct skin contact and through shared linen. A gown and gloves are worn for hands-on care until 24 hours after effective treatment. Bedding and clothing used in the days before treatment are washed in hot water and dried on a hot cycle. Close contacts are treated at the same time. The mite is not airborne, so a respirator or surgical mask adds nothing. Itching can last weeks after cure.",
      refs: ["Contact precautions for scabies continue until 24 hours after effective treatment starts."],
      sources: [SIEGEL, CDC_SCABIES],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Wear a gown and gloves for hands-on care", why: "Scabies spreads by direct skin contact, so contact precautions apply." },
      { text: "Place the resident on airborne precautions", why: "Scabies mites are not spread through the air." },
      { text: "Launder the resident's linen in hot water", why: "Hot washing and drying kill mites and eggs on bedding and clothing." },
      { text: "Keep precautions until the rash fully clears", why: "The rash and itch can last weeks after the mites are killed. Precautions end sooner." },
      { text: "Treat only the resident and not close contacts", why: "Close contacts are treated at the same time to stop reinfestation." },
      { text: "Wear a surgical mask when entering the room", why: "A mask does not block skin-to-skin spread of mites." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s06-46", {
      topic: "Poisoning prevention for a toddler",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches the parents of an 18-month-old about preventing and responding to poisoning at home. Which statement by a parent shows a need for further teaching?",
      rationale:
        "Syrup of ipecac is no longer advised for home use. Vomiting can cause aspiration and has not improved outcomes. After a suspected ingestion, parents call Poison Control for advice. Locked storage, a saved Poison Control number and original product containers are all correct.",
      sources: [IPECAC, { body: "Ontario Poison Centre. The Hospital for Sick Children", work: "Canadian Poison Centres", year: 2020, url: "https://www.ontariopoisoncentre.ca/get-help/canadian-poison-centres/" }],
      canada: "In Canada, parents call their provincial or regional poison centre. Each centre has its own number, so the number to save varies by province.",
    }),
    kind: "mc",
    options: [
      { text: "\"I will give syrup of ipecac if he swallows pills.\"", why: "Ipecac is no longer used at home. Parents call Poison Control instead." },
      { text: "\"I will store all medicines in a locked cabinet.\"", why: "Locked storage keeps medicines out of a toddler's reach." },
      { text: "\"I will save the Poison Control number in my phone.\"", why: "A saved number speeds expert advice after an exposure." },
      { text: "\"I will keep cleaners in their original containers.\"", why: "Original labeled containers prevent mix-ups with food or drink." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-47", {
      topic: "Reducing monitor alarm fatigue",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse cares for clients on continuous cardiac monitoring on a telemetry unit. Many alarms are false. Which actions should the nurse take to reduce false alarms safely? Select all that apply.",
      rationale:
        "Daily electrode changes keep the gel moist and the signal clean. Washing and drying the skin before placing electrodes improves contact and cuts artifact. Alarm limits set to each client's condition, as prescribed, stop alarms for values that are expected for that client. Turning off alarms, lowering the volume or using default limits for everyone leaves real events unnoticed.",
      sources: [ALARMS],
    }),
    kind: "sata",
    options: [
      { text: "Turn off alarms that sound often on this client", why: "Disabling alarms means true events go unheard." },
      { text: "Keep the default alarm limits for all clients", why: "Default limits cause frequent alarms for values expected in some clients." },
      { text: "Change the ECG electrodes daily", why: "Fresh electrodes keep good contact and reduce false alarms." },
      { text: "Lower the alarm volume at the central station", why: "A quiet alarm may not be heard when a real event occurs." },
      { text: "Wash and dry the skin before placing electrodes", why: "Clean, dry skin improves the signal and reduces artifact." },
      { text: "Tailor alarm limits to the client as prescribed", why: "Limits fitted to the client cut alarms that need no action." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s06-48", {
      topic: "Discrepancy during a surgical time-out",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "During the time-out before a left knee arthroscopy, the circulating nurse sees that the signed consent form lists the right knee. The surgeon states that the left knee is correct. What should the nurse do?",
      rationale:
        "The time-out confirms the correct client, procedure and site before incision. Every team member can stop the procedure. A mismatch between the consent and the planned site must be resolved before the procedure starts. The surgeon's statement does not correct a signed consent. Documenting after surgery or starting with a plan to fix the paperwork later leaves the error risk in place.",
      sources: [TJC_UP, WHO_SURGERY],
    }),
    kind: "mc",
    options: [
      { text: "Proceed because the surgeon confirmed the site", why: "A verbal statement does not resolve a signed consent that lists another site." },
      { text: "Note the discrepancy in the chart after surgery", why: "Documenting later does not prevent a wrong-site procedure now." },
      { text: "Halt the procedure until the discrepancy is resolved", why: "Any mismatch found in the time-out stops the procedure until it is resolved." },
      { text: "Begin while a colleague corrects the consent form", why: "The procedure does not start until every element is verified." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-49", {
      topic: "When to wear eye protection",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse plans care for four clients on standard precautions. For which task should the nurse wear a face shield, or a mask with goggles?",
      rationale:
        "Standard precautions add face and eye protection when a task is likely to splash or spray blood or body fluids. Irrigating a draining wound can splash fluid toward the face. A bed bath on intact skin, oral medication and removal of a dry dressing are unlikely to splash.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC uses the term Routine Practices for what US sources call standard precautions. Its guideline adds a mask and eye protection when a task may splash or spray blood or body fluids.",
    }),
    kind: "mc",
    options: [
      { text: "Giving a bed bath to a client with intact skin", why: "Intact skin and a bed bath carry little splash risk." },
      { text: "Irrigating a draining abdominal wound", why: "Irrigation can splash wound fluid toward the eyes, nose and mouth." },
      { text: "Giving oral medication to an alert client", why: "Oral medication does not involve splashes of body fluid." },
      { text: "Removing a dry dressing from a closed incision", why: "A dry dressing on a closed incision does not splash." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-50", {
      topic: "Information on a chemical spill",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "A nurse finds a spilled bottle of an unfamiliar cleaning chemical in the soiled utility room. Where should the nurse look first for the chemical's hazards and spill cleanup steps?",
      rationale:
        "Every hazardous chemical in the workplace must have a safety data sheet that staff can reach. The sheet lists hazards, protective equipment, first aid and spill steps for that product. Infection control manuals and disaster plans do not give product details. A poison center helps with a person's exposure, not the cleanup of a spill.",
      sources: [HAZCOM, { body: "Canadian Centre for Occupational Health and Safety", work: "WHMIS: General", year: 2026, url: "https://www.ccohs.ca/oshanswers/chemicals/whmis_ghs/general.html" }],
      canada: "In Canada, WHMIS sets the safety data sheet rules through the federal Hazardous Products Act and provincial or territorial workplace safety laws. Employers must give workers access to current safety data sheets.",
    }),
    kind: "mc",
    options: [
      { text: "The unit's infection control manual", why: "The manual covers infection prevention, not specific chemical hazards." },
      { text: "The hospital's disaster plan", why: "The disaster plan covers large events, not single product details." },
      { text: "A poison control center website", why: "Poison centers advise on human exposures, not workplace spill cleanup." },
      { text: "The chemical's safety data sheet", why: "The safety data sheet lists hazards, protective equipment and spill steps." },
    ],
    correct: 3,
  },
];
