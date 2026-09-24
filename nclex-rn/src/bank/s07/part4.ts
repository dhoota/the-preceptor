import type { Item } from "@/engine/types";
import { AARC, CMS_RESTRAINT, CPSC_SCALD, GOULD, NCPC, OSHA_BBP, POTTER, SIEGEL, meta } from "./common";

/** Batch s07, items 31 to 40. */
export const PART4: Item[] = [
  {
    ...meta("rn-s07-31", {
      topic: "Pouring a sterile solution",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse sets up a sterile field for a wound irrigation. Sterile saline must be added to a sterile cup on the field from a newly opened bottle. Which technique keeps the field sterile?",
      rationale:
        "The outside of the bottle is not sterile, so it must not touch the cup or the field. The saline is poured slowly from just above the cup. This avoids both contact and splashing. A wet field lets organisms wick up from the unsterile surface below. The cap is set down with its inner surface facing up.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Rest the bottle lip on the rim of the cup", why: "The outside of the bottle is not sterile. Contact with the rim contaminates the cup." },
      { text: "Set the cap face down on the table", why: "The inner surface of the cap is contaminated on the table. The cap is placed face up." },
      { text: "Pour slowly from just above the cup", why: "Pouring slowly from a short height avoids both contact and splashing." },
      { text: "Pour quickly from high above the field", why: "Pouring fast from a height splashes the field. A wet field wicks organisms from below." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-32", {
      topic: "Asepsis during tracheostomy suctioning",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse performs open suctioning through a tracheostomy for a client with coarse crackles and visible secretions in the tube. Which action maintains safe technique?",
      rationale:
        "The lower airway is treated as sterile. The catheter is handled only with the sterile gloved dominant hand. The mouth holds far more organisms, so a catheter used there is not then passed into the tracheostomy. Routine saline instillation is not advised. A catheter laid on the bed linen is contaminated.",
      sources: [POTTER, AARC],
    }),
    kind: "mc",
    options: [
      { text: "Suction the mouth, then the tracheostomy with that catheter", why: "Oral organisms would be carried into the lower airway. The tracheostomy is suctioned first." },
      { text: "Handle the catheter only with the sterile gloved hand", why: "Keeping the dominant hand sterile protects the catheter that enters the lower airway." },
      { text: "Instill saline into the tube before each pass", why: "Routine saline instillation is not advised before suctioning." },
      { text: "Lay the catheter on the bed between passes", why: "Bed linen is not sterile. A catheter laid on it is contaminated." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-33", {
      topic: "Urine culture from an indwelling catheter",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has an indwelling urinary catheter with a closed drainage system. The primary health care provider prescribes a urine culture. How should the nurse obtain the specimen?",
      rationale:
        "A culture needs fresh urine collected without opening the closed system. The nurse cleans the needleless sampling port with a disinfectant. Urine is then drawn with a sterile syringe. Urine in the bag has stood for hours and can grow organisms. Opening the system lets bacteria in.",
      sources: [GOULD],
    }),
    kind: "mc",
    options: [
      { text: "Pour urine from the drainage bag into a cup", why: "Urine in the bag has stood and may grow organisms. It is not used for culture." },
      { text: "Disconnect the catheter and drain into a cup", why: "Breaking the closed system lets bacteria enter the catheter." },
      { text: "Puncture the catheter wall with a needle", why: "A needle can damage the catheter and cause a leak. The sampling port is used." },
      { text: "Aspirate from the sampling port after cleaning it", why: "A cleaned needleless port gives fresh urine without opening the system." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s07-34", {
      topic: "Hazards in a home with a new walker",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A community health nurse makes a home visit to a family whose 14-month-old child has just begun to walk. Click to highlight the findings that need follow-up for the child's safety.",
      rationale:
        "Blind cords within reach can wrap around a child's neck and strangle. Laundry pods under an unlatched sink are within reach of a curious toddler and are a poisoning risk. A button battery can burn through the esophagus within hours if swallowed. Outlet covers, a stair gate, a water heater at 49°C, a tested smoke alarm and a lowered crib mattress are safe.",
      sources: [POTTER, CPSC_SCALD, NCPC],
    }),
    kind: "highlight",
    passage:
      "[[Outlet covers in all low outlets]]. [[Window blind cords hang within the child's reach]]. [[Stair gate at the top of the stairs]]. [[Laundry pods under the kitchen sink with no latch]]. [[Water heater set to 49°C (120°F)]]. [[Coins and button batteries in a bowl on the coffee table]]. [[Smoke alarm tested last month]]. [[Crib mattress at its lowest setting]].",
    spans: [
      { text: "Outlet covers in all low outlets", why: "Outlet covers protect a crawling or walking child from shock." },
      { text: "Window blind cords hang within the child's reach", why: "Hanging cords can wrap around a child's neck and strangle." },
      { text: "Stair gate at the top of the stairs", why: "A gate at the top of the stairs lowers the risk of a fall." },
      { text: "Laundry pods under the kitchen sink with no latch", why: "Pods within reach behind an unlatched door are a poisoning risk." },
      { text: "Water heater set to 49°C (120°F)", why: "A setting of 49°C (120°F) is the CPSC advice for lowering scald risk." },
      { text: "Coins and button batteries in a bowl on the coffee table", why: "A swallowed button battery can burn the esophagus within hours." },
      { text: "Smoke alarm tested last month", why: "A tested smoke alarm is a protective finding." },
      { text: "Crib mattress at its lowest setting", why: "A low mattress keeps a standing child from climbing out of the crib." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s07-35", {
      topic: "Coughing client at clinic check-in",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with a fever and frequent cough checks in at a busy outpatient clinic during influenza season. Which action should the triage nurse take first?",
      rationale:
        "Respiratory hygiene starts at the point of entry. A mask on a coughing client contains droplets at the source. Seating the client at least 3 feet from others in the waiting area further limits spread. Sending the client outside delays care. A respirator for staff does not contain the droplets the client spreads to others.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC advises a spatial separation of at least 2 metres between people with symptoms of an acute respiratory infection and those without. Canadian waiting rooms use 2 metres rather than 3 feet.",
    }),
    kind: "mc",
    options: [
      { text: "Give a mask and seat the client apart", why: "A mask contains droplets at the source, and spacing of at least 3 feet limits spread." },
      { text: "Ask the client to wait outside until called", why: "Sending an ill client outside delays care and is not part of respiratory hygiene." },
      { text: "Seat the client in the main waiting area", why: "The main waiting area puts others close to the source of droplets." },
      { text: "Put on an N95 before speaking to the client", why: "A staff respirator does not protect other people in the waiting room." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-36", {
      topic: "Sorting regulated medical waste",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse sorts waste after care for several clients on a surgical unit. Which two items belong in a red biohazard waste bag? Select two.",
      rationale:
        "Regulated waste includes items that would release liquid blood if compressed. It also includes items caked with dried blood that can flake off during handling. A dressing that drips when squeezed and gauze with flaking dried blood both qualify. A tissue with a small dry spot, gloves with no blood and empty containers are ordinary waste.",
      sources: [OSHA_BBP, { body: "Ontario Ministry of the Environment, Conservation and Parks", work: "C-4: The Management of Biomedical Waste in Ontario", year: 2025, url: "https://www.ontario.ca/page/c-4-management-biomedical-waste-ontario" }],
      canada: "OSHA rules do not apply in Canada. Biomedical waste rules vary by province. Ontario's C-4 guideline, for example, uses a yellow biohazard label for blood-soaked waste and a red label for anatomical waste.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Gloves used to take a blood pressure", why: "Gloves with no blood or body fluid on them are ordinary waste." },
      { text: "A dressing that drips blood when squeezed", why: "An item that releases liquid blood when compressed is regulated waste." },
      { text: "An empty bag of IV saline", why: "An empty saline bag carries no blood and is ordinary waste." },
      { text: "Gauze caked with dried blood that flakes", why: "Items caked with dried blood that can flake off in handling are regulated waste." },
      { text: "A tissue with a small spot of dried blood", why: "A small dry spot will not release blood in handling. It is ordinary waste." },
      { text: "A paper cup from oral medications", why: "A medication cup carries no blood and is ordinary waste." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s07-37", {
      topic: "Telephone prescription",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "During a night shift, a primary health care provider gives the nurse a telephone prescription for a new medication. Which action should the nurse take after writing it down?",
      rationale:
        "Telephone prescriptions carry a risk of mishearing drug names, doses and routes. The nurse writes the prescription down and reads the whole of it back. The provider then confirms it is correct. Repeating only part of it can miss a dose or route error. A co-signature later does not catch an error before the drug is given.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Ask a coworker to listen on another line", why: "A second listener does not confirm the prescription with the provider." },
      { text: "Enter it and have it signed the next day", why: "A later signature is required but does not catch an error before the drug is given." },
      { text: "Read the full prescription back to the provider", why: "Reading back the full prescription lets the provider catch any misheard detail." },
      { text: "Repeat only the drug name to the provider", why: "Repeating only the name can miss an error in dose, route or frequency." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-38", {
      topic: "Alternatives to restraint in delirium",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 76-year-old client with postoperative delirium pulls at the IV line and tries to get out of bed. There is no restraint prescription. Which interventions should the nurse try? Select all that apply.",
      rationale:
        "Restraint is a last resort after less restrictive measures fail, and it needs a prescription. Covering the IV site keeps it out of sight and harder to pull. A room near the nurses' station allows closer watching. Reorientation cues and family presence calm a confused client. Tying the wrists or raising all four rails is restraint.",
      sources: [CMS_RESTRAINT, POTTER, { body: "Government of Ontario", work: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16", year: 2001, url: "https://www.ontario.ca/laws/statute/01p16" }],
      canada: "CMS rules do not apply in Canada. Restraint use falls under provincial law and employer policy, so rules vary by province. Ontario's 2001 restraint act, for example, encourages alternative methods whenever possible.",
    }),
    kind: "sata",
    options: [
      { text: "Tie the wrists loosely to the bed frame", why: "Tying the wrists is a physical restraint, which needs a prescription and failed alternatives." },
      { text: "Cover the IV site with a sleeve", why: "A sleeve keeps the IV out of sight and harder to pull." },
      { text: "Move the client near the nurses' station", why: "A nearby room allows frequent observation." },
      { text: "Raise all four side rails for the night", why: "Four raised rails restrict exit and count as a restraint." },
      { text: "Reorient the client and put a clock in view", why: "Orientation cues reduce confusion and agitation." },
      { text: "Ask a family member to stay at the bedside", why: "A familiar person can calm and reorient a confused client." },
      { text: "Keep the room dark through the day", why: "Darkness by day disrupts the sleep and wake cycle and worsens delirium." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s07-39", {
      topic: "Precautions for streptococcal pharyngitis",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 5-year-old child is admitted with dehydration and group A streptococcal pharyngitis confirmed by a rapid test. The child started oral penicillin 6 hours ago. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Group A streptococcal pharyngitis in a young child spreads by respiratory droplets. Droplet precautions apply until 24 hours after effective antibiotic therapy begins. The child started penicillin 6 hours ago, so precautions continue for now. Symptoms, a repeat test and the end of the course are not the markers used.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC lists droplet and contact precautions for group A streptococcal pharyngitis in children, until 24 hours of effective antibiotic therapy. A Canadian unit would add contact precautions to the droplet precautions keyed here.",
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse maintains {0} precautions until {1}.",
    blanks: [
      {
        options: [
          { text: "airborne", why: "Group A streptococcus does not spread as droplet nuclei through the air." },
          { text: "droplet", why: "Group A streptococcal pharyngitis spreads by large respiratory droplets." },
          { text: "contact", why: "Pharyngitis spreads by droplets. Contact precautions are for a major draining wound." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "the sore throat resolves", why: "Symptoms may outlast the infectious period. Time on therapy is the marker." },
          { text: "the rapid test turns negative", why: "A repeat test is not used to end precautions." },
          { text: "24 hours after effective therapy begins", why: "The child stops being infectious 24 hours into effective therapy." },
          { text: "the antibiotic course is finished", why: "Waiting for the full course keeps precautions far longer than needed." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s07-40", {
      topic: "Pneumonia that needs no added precautions",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse reviews four new admissions to plan room placement. Which client needs standard precautions only?",
      rationale:
        "Legionnaires' disease is caught by inhaling water droplets from a contaminated source such as a cooling tower. It does not spread from person to person, so standard precautions are enough. Mycoplasma pneumonia spreads by droplets. Impetigo and rotavirus spread by contact and need contact precautions.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC uses the term Routine Practices for what US sources call standard precautions. Its Routine Practices and Additional Precautions guideline lists Routine Practices alone for Legionella.",
    }),
    kind: "mc",
    options: [
      { text: "Mycoplasma pneumonia with a frequent cough", why: "Mycoplasma pneumonia spreads by droplets and needs droplet precautions." },
      { text: "Impetigo with draining lesions on the face", why: "Impetigo spreads by contact with lesions and needs contact precautions." },
      { text: "Rotavirus gastroenteritis in a toddler", why: "Rotavirus spreads by the fecal-oral route and needs contact precautions." },
      { text: "Legionnaires' disease with a productive cough", why: "Legionella comes from contaminated water and does not spread between people." },
    ],
    correct: 3,
  },
];
