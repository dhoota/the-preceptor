import type { Item } from "@/engine/types";
import { ANA_SPHM, ATA_I131, ISMP_TMSBP, NFPA99, POTTER, SIEGEL, TJC_NPG, WATERS, meta } from "./common";

/** Batch s08, items 01 to 10. */
export const PART1: Item[] = [
  {
    ...meta("rn-s08-01", {
      topic: "Handling soiled bed linen",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse watches an assistive personnel change the bed of a client who has a draining leg wound. Which action by the assistive personnel needs follow-up?",
      rationale:
        "Soiled linen is handled with as little agitation as possible. Shaking a sheet from a client with a draining wound sends skin cells, lint and organisms into the air and onto nearby surfaces. The other actions are correct. Rolling the sheet inward traps the soiled side. Holding linen away from the uniform keeps it clean. Bagging at the bedside avoids carrying loose linen through the unit.",
      sources: [SIEGEL, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Rolls the soiled sheet inward on itself", why: "Rolling the soiled side inward contains drainage. This action is correct and needs no follow-up." },
      { text: "Holds the soiled linen away from the uniform", why: "Keeping linen off the uniform stops organisms from moving to the next client. This action is correct." },
      { text: "Shakes the soiled sheet before bagging it", why: "Shaking spreads organisms into the air and onto surfaces. Soiled linen is handled with little agitation." },
      { text: "Places the soiled linen in a bag at the bedside", why: "Bagging linen where it is removed limits spread along the hallway. This action is correct." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-02", {
      topic: "Labeling blood specimen tubes",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse draws blood for a type and screen from a client in a shared room. The nurse has checked the client's name and date of birth against the identification band. How should the nurse label the tubes?",
      rationale:
        "Specimen containers are labeled in the presence of the client, using at least two identifiers. Labeling at the bedside right after the draw keeps the tube and the client together. Prelabeled empty tubes can be used on the wrong client in a shared room. Labeling at the station separates the tube from the client. A room number is a location, not an identifier.",
      sources: [TJC_NPG],
    }),
    kind: "mc",
    options: [
      { text: "At the bedside with the client present", why: "Labeling in the client's presence links the specimen to the right person. This is the required practice." },
      { text: "On empty tubes before the blood draw", why: "Prelabeled tubes can be filled from the wrong client, which is a known cause of transfusion errors." },
      { text: "At the nurses' station after the draw", why: "Leaving the room with unlabeled tubes creates a chance to mix up specimens." },
      { text: "With the client's name and room number", why: "A room number is a location. It is not an acceptable client identifier." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s08-03", {
      topic: "Home precautions after radioactive iodine",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A client with hyperthyroidism receives an oral dose of radioactive iodine 131 and will go home today. The client lives with a spouse and has a pregnant daughter and a young grandson who visit often. Which statements by the client show understanding of the home precautions? Select all that apply.",
      rationale:
        "Radioactive iodine leaves the body mainly in urine, with smaller amounts in saliva and sweat. For the first days the client limits close contact, sleeps apart from the spouse and keeps away from pregnant people and young children. Extra fluids and frequent voiding clear the isotope from the bladder faster. Towels, cups and utensils are not shared because saliva and sweat carry the isotope.",
      sources: [ATA_I131],
    }),
    kind: "sata",
    options: [
      { text: "\"I will hold my grandson on my lap tonight.\"", why: "Young children are more sensitive to radiation. Close contact is avoided for the first days." },
      { text: "\"I will sleep in a separate bed for a few nights.\"", why: "Distance from the spouse overnight cuts the time spent close to the source." },
      { text: "\"I will share towels with my spouse as usual.\"", why: "Sweat carries some of the isotope. Towels are kept separate at first." },
      { text: "\"I will drink extra fluids and void often.\"", why: "Frequent voiding clears the isotope from the bladder and lowers the dose to the client and others." },
      { text: "\"I will keep my distance from my pregnant daughter.\"", why: "The fetus is sensitive to radiation. Pregnant contacts keep their distance for the first days." },
      { text: "\"I will share cups and forks with my family.\"", why: "Saliva carries the isotope. Cups and utensils are not shared at first." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s08-04", {
      topic: "Measuring an oral liquid dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares 7.5 mL of an oral liquid medication for a client who also has a peripheral IV line. Which device should the nurse use to measure the dose?",
      rationale:
        "An oral syringe measures a partial dose accurately and its tip does not fit an IV port or a needle. That design prevents a wrong route error in a client with an IV line. A Luer tip syringe can connect to the IV line. A household spoon is inaccurate. A 30 mL cup is marked in coarse steps and is less precise than a syringe for 7.5 mL.",
      sources: [ISMP_TMSBP],
    }),
    kind: "mc",
    options: [
      { text: "A parenteral syringe with a Luer tip", why: "A Luer tip connects to IV ports. Oral liquid given by vein can cause serious harm." },
      { text: "A household teaspoon from the meal tray", why: "Household spoons vary in size. They do not give an accurate dose." },
      { text: "A 30 mL graduated medicine cup", why: "The cup is marked in coarse steps. It is less precise than a syringe for 7.5 mL." },
      { text: "An oral syringe labeled for oral use", why: "An oral syringe measures the dose accurately and cannot attach to an IV port." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-05", {
      topic: "Vaccination and the chain of infection",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse gives a seasonal influenza vaccine to a 70-year-old client at a community clinic. Which link in the chain of infection does this action interrupt?",
      rationale:
        "Immunization builds the client's own defenses against the organism. That lowers the chance that exposure leads to disease. The action therefore works on the susceptible host. It does not remove the virus from its reservoir. It does not stop an infected person from shedding virus. It does not block the route the virus travels.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Reservoir", why: "The reservoir is where the organism lives and grows. A vaccine does not remove the virus from infected people." },
      { text: "Portal of exit", why: "The portal of exit is how the virus leaves an infected person. A vaccine given to this client does not change it." },
      { text: "Mode of transmission", why: "Masks, hand hygiene and distance act on the route of spread. A vaccine does not." },
      { text: "Susceptible host", why: "Vaccination raises the client's immunity, so exposure is less likely to cause disease." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-06", {
      topic: "Unit environmental safety round",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The charge nurse completes an environmental safety round on a medical unit. Click to highlight the findings that need correction.",
      rationale:
        "An unsecured oxygen cylinder can fall, and a broken valve can turn it into a projectile. A fire door held open lets smoke and fire spread along the corridor. Extension cords are a shock and fire hazard in care areas. A blocked fire extinguisher delays the response to a fire. A clear hallway, a posted wet floor sign, full hand rub dispensers and a call light within reach are correct.",
      sources: [NFPA99, POTTER],
    }),
    kind: "highlight",
    passage:
      "Round at 1000. [[Oxygen cylinder standing upright and unsecured in room 12]]. [[Fire door to the stairwell held open with a wedge]]. [[Hallway clear of carts and equipment]]. [[Wet floor sign placed by the spill near the ice machine]]. [[Extension cord powering a bedside fan in room 15]]. [[Hand rub dispensers full at each doorway]]. [[Fire extinguisher cabinet blocked by a linen cart]]. [[Call light within reach in room 14]].",
    spans: [
      { text: "Oxygen cylinder standing upright and unsecured in room 12", why: "Cylinders are secured in a stand or cart so they cannot fall and damage the valve." },
      { text: "Fire door to the stairwell held open with a wedge", why: "Fire doors must close on their own to hold back smoke and fire." },
      { text: "Hallway clear of carts and equipment", why: "A clear hallway keeps the exit route open. This is correct." },
      { text: "Wet floor sign placed by the spill near the ice machine", why: "A posted sign warns people of the slip hazard until the spill is cleaned." },
      { text: "Extension cord powering a bedside fan in room 15", why: "Extension cords in care areas can overheat and cause shocks or fire." },
      { text: "Hand rub dispensers full at each doorway", why: "Full dispensers support hand hygiene. This is correct." },
      { text: "Fire extinguisher cabinet blocked by a linen cart", why: "Extinguishers must stay reachable so staff can act on a small fire at once." },
      { text: "Call light within reach in room 14", why: "A call light within reach lets the client ask for help. This is correct." },
    ],
    correct: [0, 1, 4, 6],
  },
  {
    ...meta("rn-s08-07", {
      topic: "First client to see on safety rounds",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "At the start of a shift, assistive personnel report on four clients. Which client should the nurse see first?",
      rationale:
        "Cool, dusky fingers below a wrist restraint signal impaired circulation that is already occurring. The restraint is loosened and the hand assessed at once to prevent tissue injury. A high bed, a call light on the floor and bare feet raise the risk of a fall. Each needs a quick fix, but none shows harm already under way.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "A client asleep with the bed left in the high position", why: "A high bed raises fall risk. The bed is lowered soon, but there is no harm yet." },
      { text: "A client in a wrist restraint with cool, dusky fingers", why: "Cool, dusky fingers show impaired circulation now. This needs action before anything else." },
      { text: "An alert client whose call light has fallen to the floor", why: "The client is alert and can call out. The light is returned soon." },
      { text: "A client at risk for falls who has taken off nonskid socks", why: "Bare feet raise fall risk. Socks are replaced soon, but no harm has occurred." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s08-08", {
      topic: "Transport on contact precautions",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on contact precautions for methicillin-resistant Staphylococcus aureus in a leg wound needs transport to radiology. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The infected area is contained and covered before the client leaves the room. A clean gown on the client limits contamination of the hallway. The receiving department is told about the precautions so staff can prepare. Transport equipment is cleaned and disinfected after use. Staff remove used protective equipment before transport and put on clean equipment at the destination. An N95 respirator is not part of contact precautions.",
      sources: [SIEGEL],
    }),
    kind: "sata",
    options: [
      { text: "Cover the wound with a clean, dry dressing", why: "Covering the wound contains the organism during transport." },
      { text: "Have the transporter wear a gown in the hallway", why: "Used protective equipment is removed before transport. Clean equipment is put on at the destination." },
      { text: "Tell radiology staff about the precautions", why: "The receiving staff need to know so they can protect themselves and clean equipment." },
      { text: "Place an N95 respirator on the client", why: "The organism is in a wound, not spread by air. Respirators are not part of contact precautions." },
      { text: "Put a clean gown on the client", why: "A clean gown limits contact of soiled clothing with hallway surfaces." },
      { text: "Clean the wheelchair after the trip", why: "Shared transport equipment is cleaned and disinfected after use." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s08-09", {
      topic: "Repositioning a client who cannot assist",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client who weighs 82 kg needs to be moved up in bed. The client is drowsy after surgery and cannot help with the move. Which plan best protects the staff from injury?",
      rationale:
        "A client who cannot assist is moved with equipment, not by manual lifting. A friction-reducing sheet with two or more staff lets them slide the client rather than lift the client. The client's 82 kg far exceeds the manual limit, so lifting with a draw sheet, by one nurse or on a count of three exposes staff to back injury.",
      refs: ["The revised NIOSH equation gives a manual lifting limit for client handling of about 35 lb (16 kg)."],
      sources: [WATERS, ANA_SPHM],
    }),
    kind: "mc",
    options: [
      { text: "Two staff lift the client with a draw sheet", why: "This is still a manual lift of a load well above 35 lb (16 kg)." },
      { text: "One nurse slides the client using a wide stance", why: "A wide stance does not make a solo move of 82 kg safe." },
      { text: "Two staff use a friction-reducing sheet", why: "The sheet lets staff slide the client with little force, so no one lifts the weight." },
      { text: "Three staff lift the client on a count of three", why: "Adding people to a manual lift does not remove the risk of back injury." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-10", {
      topic: "When gloves are needed for routine care",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse assigns care tasks to assistive personnel. For which two tasks should the assistive personnel wear gloves under standard precautions? Select two.",
      rationale:
        "Standard precautions call for gloves when contact with blood, body fluids, mucous membranes or broken skin is expected. Emptying a urine drainage bag and removing a soiled dressing both involve body fluids. Taking a blood pressure, helping a client walk, setting up a meal tray and rubbing intact skin do not. Hand hygiene is still done before and after each task.",
      sources: [SIEGEL],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Taking a blood pressure", why: "The cuff touches intact skin only. Gloves are not needed." },
      { text: "Emptying a urinary drainage bag", why: "The task involves contact with urine, a body fluid." },
      { text: "Helping a client walk in the hall", why: "Walking with a client involves contact with intact skin and clothing only." },
      { text: "Setting up a meal tray", why: "Handling a meal tray involves no body fluids. Hand hygiene is enough." },
      { text: "Removing a soiled wound dressing", why: "The dressing holds wound drainage, so gloves are worn." },
      { text: "Giving a back rub on intact skin", why: "Intact skin is a barrier. Gloves are not needed for a back rub." },
    ],
    correct: [1, 4],
  },
];
