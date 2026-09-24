import type { Item } from "@/engine/types";
import { AAP_DROWN, AAP_FIREARM, CDC_LEAD, CMS_RESTRAINT, FDA_BED, ISMP_PUMP, ONS_HD, POTTER, REMM, SIEGEL, TJC_SEA53, meta } from "./common";

/** Batch s07, items 11 to 20. */
export const PART2: Item[] = [
  {
    ...meta("rn-s07-11", {
      topic: "Hard limit alert on a smart pump",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse programs a smart infusion pump for a heparin infusion using the drug library. The pump displays a hard limit alert and will not start the infusion. Which action should the nurse take next?",
      rationale:
        "A hard limit is a facility-set boundary that cannot be bypassed. It usually means a wrong dose, concentration, weight or unit was prescribed or entered. The nurse checks the prescription against every programmed value. If the prescription itself exceeds the limit, the nurse contacts the prescriber and pharmacy. Working around the drug library defeats the safety check on a high-alert drug.",
      sources: [ISMP_PUMP],
    }),
    kind: "mc",
    options: [
      { text: "Program the dose outside the drug library", why: "Bypassing the drug library removes the dose error checks that caught the problem." },
      { text: "Restart the pump and enter the dose again", why: "Entering the same values again repeats the alert. The cause of the alert is still unknown." },
      { text: "Start the infusion by gravity instead", why: "Gravity flow gives no reliable rate control for a high-alert drug and ignores the warning." },
      { text: "Recheck the prescription and pump entries", why: "A hard limit signals a likely prescribing, calculation or programming error, so the entries are checked." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s07-12", {
      topic: "Preventing tubing misconnections",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receives a continuous tube feeding and an IV infusion by pump. Both pumps hang on the same pole. The client returns from a procedure and the nurse reconnects the lines. Which practice best prevents a tubing misconnection?",
      rationale:
        "Misconnections happen when tubes with different purposes can join. Enteral feeding given into a vein can be fatal. The nurse traces each line from the client to its source before reconnecting and at each handoff. A connector that does not fit is a warning sign. Adapters and forced connections are avoided.",
      sources: [TJC_SEA53],
    }),
    kind: "mc",
    options: [
      { text: "Label each line at the pump end only", why: "A label at the pump alone does not confirm where the tube enters the client." },
      { text: "Trace each line from the client to its source", why: "Tracing confirms each connection at every reconnection and handoff." },
      { text: "Use an adapter when a connector does not fit", why: "Adapters let unrelated systems join. A poor fit is a warning sign, not a problem to solve." },
      { text: "Reconnect the lines in the order they came off", why: "Memory of the order is not a check. The route of each line must be confirmed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-13", {
      topic: "Handling urine after cyclophosphamide",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client received IV cyclophosphamide 12 hours ago. The nurse is about to empty the client's urinal and change linen soiled with urine. Which actions should the nurse take? Select all that apply.",
      refs: ["Excreta precautions apply for at least 48 hours after a hazardous drug dose."],
      rationale:
        "Cyclophosphamide is a hazardous drug excreted in urine. Excreta precautions apply for at least 48 hours after a dose, so they apply at 12 hours. The nurse wears two pairs of chemotherapy gloves and a disposable gown. Face protection is added when splashing is possible. The toilet lid is closed before flushing. Soiled linen is contained according to hazardous drug policy.",
      sources: [ONS_HD],
    }),
    kind: "sata",
    options: [
      { text: "Wear one pair of exam gloves", why: "One pair of exam gloves is not tested for hazardous drugs. Two pairs of chemotherapy gloves are worn." },
      { text: "Rinse the urinal with a sink sprayer", why: "Spraying creates splashes and aerosols of contaminated urine." },
      { text: "Wear a disposable protective gown", why: "A disposable gown shields skin and clothing from contaminated urine." },
      { text: "Close the toilet lid before flushing", why: "A closed lid limits splashing and aerosols of contaminated urine." },
      { text: "Put the linen in the regular laundry bag", why: "Linen soiled with hazardous drug excreta is contained in a designated bag according to policy." },
      { text: "Wear two pairs of chemotherapy gloves", why: "Double chemotherapy gloves protect against contact with drug excreted in urine." },
      { text: "Use face protection if splashing may occur", why: "Face and eye protection guard against splashes when emptying a urinal." },
    ],
    correct: [2, 3, 5, 6],
  },
  {
    ...meta("rn-s07-14", {
      topic: "Breaks in sterile technique",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse observes a new graduate nurse change a sterile dressing on a surgical wound. Click to highlight the actions that break sterile technique.",
      rationale:
        "Anything below waist level is out of view and is treated as unsterile, so a field set on a chair is contaminated. Reaching across a sterile field lets particles fall onto it. A sterile glove that touches the bedside table is contaminated and must be changed. Opening the first flap away, removing the old dressing before sterile gloving and cleaning outward from the incision are correct.",
      sources: [POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Performed hand hygiene before starting]]. [[Opened the first flap of the kit away from the body]]. [[Set the sterile field on a chair below waist level]]. [[Poured saline into the sterile cup without splashing]]. [[Reached across the sterile field for gauze]]. [[Put on sterile gloves after removing the old dressing]]. [[Touched the bedside table with a sterile glove and went on]]. [[Cleaned from the incision outward]].",
    spans: [
      { text: "Performed hand hygiene before starting", why: "Hand hygiene before a sterile procedure is expected practice." },
      { text: "Opened the first flap of the kit away from the body", why: "Opening the first flap away keeps the nurse from reaching over the sterile contents." },
      { text: "Set the sterile field on a chair below waist level", why: "Items below waist level are out of view and are treated as unsterile." },
      { text: "Poured saline into the sterile cup without splashing", why: "Pouring without splashing keeps moisture from wicking organisms onto the field." },
      { text: "Reached across the sterile field for gauze", why: "Reaching across the field lets particles and clothing fall onto it." },
      { text: "Put on sterile gloves after removing the old dressing", why: "The soiled dressing is removed with clean gloves, then sterile gloves are put on." },
      { text: "Touched the bedside table with a sterile glove and went on", why: "A sterile glove that touches an unsterile surface is contaminated and must be changed." },
      { text: "Cleaned from the incision outward", why: "Cleaning moves from the least to the most contaminated area, as expected." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s07-15", {
      topic: "Family request for four raised side rails",
      cjmm: "generate",
      process: "communication",
      difficulty: 3,
      stem: "An 82-year-old client with delirium tries to climb out of bed at night. The client's daughter asks the nurse to raise all four side rails to keep the client in bed. Which response by the nurse is appropriate?",
      rationale:
        "Raising all four side rails keeps the client from leaving the bed, so it is a restraint. Frail, confused older adults can become trapped in rail gaps or climb over the rails and fall from a greater height. Restraint is used only after less restrictive measures fail. Options include a low bed, frequent rounding, toileting and a bed exit alarm.",
      sources: [CMS_RESTRAINT, FDA_BED, { body: "Government of Ontario", work: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16", year: 2001, url: "https://www.ontario.ca/laws/statute/01p16" }],
      canada: "CMS rules do not apply in Canada. Restraint use falls under provincial law and employer policy, so rules vary by province. Ontario's 2001 restraint act, for example, encourages alternative methods whenever possible.",
    }),
    kind: "mc",
    options: [
      { text: "I will raise all four rails tonight for safety.", why: "Four raised rails that stop a client leaving the bed meet the definition of a restraint. Confused clients may climb over them." },
      { text: "I will raise all four rails once you sign a consent.", why: "Family consent does not make a restraint appropriate. Restraint needs a prescription and failed less restrictive measures." },
      { text: "All four rails up counts as a restraint and can cause harm.", why: "Raising all four rails blocks the client's exit and counts as a restraint. Climbing over rails can cause a worse fall." },
      { text: "I will ask for a vest restraint to be prescribed.", why: "A vest restraint is more restrictive. Less restrictive measures come first." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-16", {
      topic: "Hazard in an older rental home",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A community health nurse visits a family with a 20-month-old toddler. The family rents a house built in 1952. Paint is peeling from the windowsills, and the toddler often chews on the sills. The home has a working smoke alarm. Complete the following sentence by choosing from the lists of options.",
      refs: ["Homes built before 1978 probably contain lead-based paint."],
      rationale:
        "The house was built in 1952, before lead-based paint was banned in 1978. Peeling paint on windowsills creates chips and dust. A toddler who chews the sills swallows lead directly. Lead harms the developing brain of a young child. The working smoke alarm lowers fire risk. Nothing in the stem points to carbon monoxide or water hazards.",
      sources: [CDC_LEAD, { body: "Health Canada", work: "Lead-based paint", year: 2025, url: "https://www.canada.ca/en/health-canada/services/home-safety/lead-based-paint.html" }],
      canada: "Health Canada says a home built before 1960 probably contains lead-based paint, and one built from 1960 to 1990 may have it on the exterior. The 1978 cutoff is a US date.",
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The toddler is at highest risk for {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "lead poisoning", why: "Old paint that peels, in a home built before 1978, is a leading source of lead for toddlers." },
          { text: "carbon monoxide poisoning", why: "The stem names no fuel-burning appliance, generator or symptoms of exposure." },
          { text: "burn injury", why: "The stem gives no hot water, stove or fire hazard. The smoke alarm works." },
          { text: "drowning", why: "The stem describes no pool, tub or standing water." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "a working smoke alarm", why: "A working smoke alarm is a protective factor, not a hazard." },
          { text: "chewing on painted windowsills", why: "Chewing on sills with peeling paint puts lead chips and dust straight into the mouth." },
          { text: "living in rented housing", why: "Renting by itself is not the hazard. The paint in the old house is." },
          { text: "a bathtub in the home", why: "A bathtub is a water hazard only with no supervision. The stem does not describe one." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s07-17", {
      topic: "Backyard pool safety",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The parents of a 3-year-old child have just put in a backyard swimming pool. They ask which safety measure most reduces the child's risk of drowning. Which measure should the nurse recommend?",
      rationale:
        "Four-sided isolation fencing separates the pool from both the house and the yard. A self-closing, self-latching gate keeps a toddler out when adults are not watching. Fencing on only three sides leaves the house open to the pool. Door alarms and covers add layers but do not replace the fence. Close supervision is still needed when the child swims.",
      sources: [AAP_DROWN],
    }),
    kind: "mc",
    options: [
      { text: "A four-sided fence with a self-latching gate", why: "Four-sided isolation fencing that separates the pool from the house and yard is the most effective barrier." },
      { text: "An alarm on the back door of the house", why: "A door alarm is an added layer. It does not stop a child who is already outside." },
      { text: "Inflatable arm floats whenever near the pool", why: "Arm floats are toys, not safety devices. They can slip off and give false security." },
      { text: "A pool cover placed after each use", why: "A cover works only if placed correctly each time. It does not replace isolation fencing." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-18", {
      topic: "Care of a child with viral conjunctivitis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 4-year-old child is admitted for dehydration. The child also has adenovirus conjunctivitis with red, watery eyes and crusted lids. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Adenovirus conjunctivitis spreads by contact with eye secretions and with hands and objects soiled by them. The virus survives on surfaces. Contact precautions apply for the length of the illness. Gloves are worn to clean the eyes, and equipment stays in the room. Hand hygiene follows glove removal. The child stays out of shared play areas while on precautions.",
      sources: [SIEGEL],
    }),
    kind: "sata",
    options: [
      { text: "Admit the child to a negative pressure room", why: "Adenovirus conjunctivitis does not spread by the airborne route. Negative pressure is not needed." },
      { text: "Place the child on contact precautions", why: "Contact precautions block spread through eye secretions, hands and surfaces." },
      { text: "Use a surgical mask as the only barrier", why: "A mask does not stop spread by hands and objects. Gown and gloves are needed." },
      { text: "Wear gloves to clean the eyes", why: "Gloves protect the hands from infectious eye secretions." },
      { text: "Keep a dedicated stethoscope in the room", why: "Dedicated equipment prevents spread on shared devices." },
      { text: "Take the child to the shared playroom", why: "Shared toys and surfaces can spread the virus to other children." },
      { text: "Perform hand hygiene after glove removal", why: "Hands can be soiled during glove removal. Hand hygiene removes the virus." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s07-19", {
      topic: "External radiation contamination",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "After a radiation release at a nearby plant, an adult arrives at the emergency department. The client is alert with a respiratory rate of 16/minute and BP 128/78 mmHg. There are no injuries. A survey meter shows radioactive material on the clothing. Which action should the nurse take first?",
      refs: ["Removing all clothing can reduce external contamination by up to 90%."],
      rationale:
        "The client is alert with stable vital signs and no injuries, so decontamination can begin. Removing all clothing can cut external contamination by up to 90%. The clothing is bagged and labeled. The skin is then washed with tepid water and mild soap without abrading it. In an unstable client, stabilization would come before decontamination.",
      sources: [REMM],
    }),
    kind: "mc",
    options: [
      { text: "Scrub the skin with a stiff brush and hot water", why: "Scrubbing and hot water damage the skin and can raise absorption. Tepid water and mild soap are used." },
      { text: "Remove the client's clothing and bag it", why: "Removing clothing can reduce external contamination by up to 90%." },
      { text: "Give potassium iodide before any other care", why: "Potassium iodide protects the thyroid only from radioactive iodine. It does not remove contamination." },
      { text: "Admit the client to an airborne isolation room", why: "External contamination is not an airborne infection. Protective clothing protects staff." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-20", {
      topic: "Firearm access for a teen at risk",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 15-year-old client is being discharged after treatment for depression with suicidal thoughts. A parent says there is a handgun in the home. The nurse teaches about firearm safety. Which statement by the parent shows understanding?",
      rationale:
        "Access to a firearm greatly raises the chance that a suicide attempt is fatal. The AAP advises that the safest home for a youth at risk has no firearm. If a firearm stays, it is stored unloaded and locked, with ammunition locked separately. Hiding a gun or relying on warnings does not prevent access.",
      sources: [AAP_FIREARM, { body: "Government of Canada", work: "Storage, Display, Transportation and Handling of Firearms by Individuals Regulations, SOR/98-209", year: 1998, url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-209/FullText.html" }],
      canada: "In Canada, a handgun is a restricted or prohibited firearm under the Criminal Code. Federal storage rules require it unloaded and locked, with ammunition kept apart unless the ammunition is also locked away.",
    }),
    kind: "mc",
    options: [
      { text: "I will hide the gun, loaded, on a high closet shelf.", why: "A hidden gun is not secure. Teens often know where guns are kept." },
      { text: "I will keep the gun loaded in a locked bedside drawer.", why: "A loaded gun gives quick access. Guns are stored unloaded and locked, with ammunition locked apart." },
      { text: "I will teach my teen to stay away from the gun.", why: "A warning does not reliably prevent access during a crisis." },
      { text: "I will remove the gun from our home for now.", why: "Removing the firearm is the most effective way to limit access for a youth at risk of suicide." },
    ],
    correct: 3,
  },
];
