import type { Item } from "@/engine/types";
import { CDC_FLU_LTC, CPSC_SCALD, FDA_BED, FDA_SHARPS, NCPC, OGRADY, POTTER, SIEGEL, meta } from "./common";

/** Batch s07, items 41 to 50. */
export const PART5: Item[] = [
  {
    ...meta("rn-s07-41", {
      topic: "Febrile resident during a unit cluster",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 84-year-old resident of a long-term care facility has sudden fever, muscle aches and a dry cough. Temperature is 38.9°C (102.0°F) and SpO2 is 95% on room air. Two residents on the same unit had laboratory-confirmed influenza this week. The resident's test is pending. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      refs: ["Droplet precautions continue for 7 days after illness onset or until 24 hours after fever and respiratory symptoms resolve, whichever is longer."],
      rationale:
        "Sudden fever, aches and cough during a unit cluster of confirmed influenza point to influenza. Droplet precautions start at once, with the resident kept in the room. Antiviral treatment starts without waiting for the test result. Precautions last 7 days after onset or until 24 hours after fever and respiratory symptoms resolve, whichever is longer. The temperature trend guides that end point. Oxygen saturation shows whether pneumonia is developing.",
      sources: [CDC_FLU_LTC, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet and contact precautions for seasonal influenza, for the length of symptoms. A Canadian facility would add contact precautions to the droplet precautions keyed here.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Legionnaires' disease", why: "Legionnaires' disease does not spread between residents. A cluster of confirmed influenza on the unit points elsewhere." },
      { text: "Pulmonary tuberculosis", why: "Tuberculosis develops over weeks with night sweats and weight loss, not a sudden fever." },
      { text: "Influenza", why: "Sudden fever, aches and cough during a unit cluster of confirmed cases fit influenza." },
      { text: "Allergic rhinitis", why: "Allergic rhinitis does not cause a fever of 38.9°C or muscle aches." },
    ],
    actions: [
      { text: "Start droplet precautions now", why: "Droplet precautions begin as soon as influenza is suspected." },
      { text: "Wait for the test before isolating", why: "Waiting lets the virus spread. Precautions start on suspicion." },
      { text: "Move the resident to an airborne room", why: "Influenza needs droplet precautions. An airborne infection isolation room is not needed for routine care." },
      { text: "Give the prescribed antiviral now", why: "Antiviral treatment starts on suspicion without waiting for the test." },
      { text: "Bring the resident to group meals masked", why: "Ill residents are kept out of group activities and meals." },
    ],
    parameters: [
      { text: "Temperature trend", why: "The end of precautions depends in part on when the fever resolves." },
      { text: "Serum sodium level", why: "Sodium does not guide influenza precautions or detect pneumonia." },
      { text: "Hemoglobin level", why: "Hemoglobin does not track the course of influenza." },
      { text: "Blood glucose level", why: "Glucose does not track influenza or its lung complications." },
      { text: "Oxygen saturation", why: "A falling saturation can signal pneumonia, a common complication in older adults." },
    ],
    correct: { condition: 2, actions: [0, 3], parameters: [0, 4] },
  },
  {
    ...meta("rn-s07-42", {
      topic: "Bed entrapment risk",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse checks the bed of a frail 88-year-old client with dementia who moves restlessly at night. The hospital bed has half-length side rails. Which finding places the client at greatest risk of entrapment?",
      rationale:
        "Entrapment happens when a body part slips into an opening in the bed system. A gap between the mattress and the side rail can trap the head, neck or chest. Frail, restless and confused older adults face the highest risk. A mattress that does not fit the frame is a common cause of such gaps. A low bed, locked wheels and a floor mat are safety measures.",
      sources: [FDA_BED],
    }),
    kind: "mc",
    options: [
      { text: "The bed is set in its lowest position", why: "A low bed lowers the height of a fall and does not create an opening." },
      { text: "A gap between the mattress and the rail", why: "A gap between the mattress and rail is a known entrapment zone for the head and neck." },
      { text: "A floor mat lies beside the bed", why: "A floor mat cushions a fall and does not create an opening." },
      { text: "The bed wheels are locked in place", why: "Locked wheels keep the bed still and do not create an opening." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-43", {
      topic: "Draining tuberculous lymph node",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 5,
      stem: "An adult is admitted with tuberculosis of a neck lymph node that drains through the skin. A chest radiograph shows no lung involvement. Which measures should the nurse plan? Select all that apply.",
      rationale:
        "A draining tuberculous lesion can release organisms into the air, especially during wound care and irrigation. The isolation guideline lists airborne and contact precautions for a draining extrapulmonary lesion. The client goes into an airborne infection isolation room, and staff wear a fit-tested N95 respirator. Gown and gloves protect against the drainage. A clear chest radiograph does not remove these needs.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists Routine Practices for a draining nonpulmonary tuberculosis lesion. It adds Airborne Precautions when a procedure may aerosolize the drainage.",
    }),
    kind: "sata",
    options: [
      { text: "Use standard precautions only", why: "A draining lesion can release organisms into the air and onto hands. Added precautions apply." },
      { text: "Place the client in an airborne isolation room", why: "Organisms can become airborne from the draining lesion during wound care." },
      { text: "Wear a surgical mask to enter", why: "A surgical mask does not filter droplet nuclei. A fit-tested N95 respirator is worn." },
      { text: "Wear a fit-tested N95 respirator to enter", why: "An N95 respirator filters the small particles that carry tuberculosis." },
      { text: "Share a room with a client who has pneumonia", why: "Sharing a room exposes another client to tuberculosis." },
      { text: "Wear a gown and gloves for wound care", why: "Contact precautions protect against infectious drainage." },
      { text: "Keep the draining site covered", why: "A dressing contains the drainage and lowers spread." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s07-44", {
      topic: "Transport of a client on contact precautions",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with MRSA in a leg wound is on contact precautions and needs a CT scan. The wound is covered with a clean dressing. The nurse will take the client to radiology by wheelchair. Which action is appropriate?",
      rationale:
        "The covered wound contains the organism during transport. The nurse removes contaminated PPE and performs hand hygiene before leaving the room, so the hallway is not contaminated. Clean PPE is put on at the destination to handle the client. Radiology is told in advance about the precautions. Transport is limited to trips that are medically needed, such as this scan.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Keep the gown and gloves on during transport", why: "Contaminated PPE worn in the hallway spreads organisms to surfaces such as elevator buttons." },
      { text: "Tell radiology after the client arrives", why: "The receiving area is told before arrival so it can prepare." },
      { text: "Remove PPE and clean hands before transport", why: "Removing PPE and cleaning hands keeps the organism from spreading along the route." },
      { text: "Cancel the scan until the wound has healed", why: "Needed tests go ahead with precautions. Delaying a prescribed scan is not required." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-45", {
      topic: "Scald prevention for an infant",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches the parents of a 9-month-old infant about preventing scald burns at home. Which statements by the parents show understanding? Select all that apply.",
      rationale:
        "Tap water scalds mostly injure young children and older adults. The CPSC advises lowering the water heater to 49°C (120°F). Burns happen far faster at hotter settings. Bath water is tested before the infant goes in. Pot handles turned toward the back are harder to grab. Holding an infant while drinking a hot liquid risks a spill onto the child.",
      sources: [CPSC_SCALD, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "We will set the water heater to 60°C (140°F).", why: "Water at this setting can cause a serious burn within seconds." },
      { text: "We will test the bath water before the baby goes in.", why: "Testing the water first prevents placing the infant in water that is too hot." },
      { text: "We will turn pot handles toward the back of the stove.", why: "Handles turned inward are harder for a child to reach and pull." },
      { text: "We will hold the baby while drinking hot coffee.", why: "A spill of a hot drink can scald the infant." },
      { text: "We will set the water heater to 49°C (120°F).", why: "The CPSC advises a setting of 49°C (120°F) to lower scald risk." },
      { text: "We will leave the baby in the tub to grab a towel.", why: "An infant left in a tub can turn on the hot tap or slip under the water." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s07-46", {
      topic: "Failed pressure check in an isolation room",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client with suspected pulmonary tuberculosis is in an airborne infection isolation room. During the daily check, the nurse holds a tissue strip at the bottom of the closed door. The strip flutters outward into the corridor. Which action should the nurse take?",
      rationale:
        "An airborne infection isolation room keeps negative pressure, so air flows into the room from the corridor. A strip that flutters outward shows air leaving the room toward other people. The pressure is checked daily with a visual indicator while the room is in use. The failure is reported to facilities and infection prevention at once. The client needs a room that works.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Report it and seek a working isolation room", why: "Outward airflow means the room has lost negative pressure. It must be fixed or the client moved." },
      { text: "Prop the door open to improve the airflow", why: "An open door lets contaminated air into the corridor. The door stays closed." },
      { text: "Record the finding as an expected result", why: "In a working room the strip is drawn inward. Outward flow is a failure." },
      { text: "Recheck the strip at the next daily check", why: "Waiting a day leaves others exposed to air from the room." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-47", {
      topic: "When standard precautions call for a gown",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse cares for clients with no known infection on a medical unit. Under standard precautions, which two tasks call for a gown? Select two.",
      rationale:
        "Standard precautions match protection to the expected exposure. A gown is worn when contact with blood, body fluids, secretions or excretions is expected. Irrigating a wound can splash, and a bed soaked with liquid stool soils clothing. Taking a blood pressure, giving oral medications, walking with a client and feeding do not expose clothing to body fluids.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC uses the term Routine Practices for what US sources call standard precautions. Its guideline calls for a long-sleeved gown when a point-of-care risk assessment expects contact with blood or body fluids.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Taking a blood pressure on intact skin", why: "Touching intact skin does not expose clothing to body fluids." },
      { text: "Irrigating a wound that may splash", why: "Splashing fluid can soil clothing, so a gown is worn." },
      { text: "Giving oral medications with water", why: "Giving oral medications does not expose clothing to body fluids." },
      { text: "Changing a bed soaked with liquid stool", why: "Contact with uncontained excretions calls for a gown." },
      { text: "Helping the client walk in the hall", why: "Walking with a client does not expose clothing to body fluids." },
      { text: "Feeding a client at the midday meal", why: "Feeding a client who swallows well does not usually soil clothing with body fluids." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s07-48", {
      topic: "Swallowed button battery",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A parent calls the pediatric clinic. The parent's 3-year-old child swallowed a button battery 20 minutes ago. The child is breathing comfortably and can swallow. Which instruction should the nurse give?",
      refs: [
        "An esophageal button battery can cause serious burns in as little as 2 hours.",
        "Children 12 years and younger who swallow a button battery need an immediate x-ray.",
        "Honey 10 mL every 10 minutes may be given to a child aged 1 year or older within 12 hours of ingestion.",
      ],
      rationale:
        "A button battery lodged in the esophagus can cause a serious burn in as little as 2 hours. A child 12 years or younger needs an x-ray right away to find the battery. Honey may be given on the way for a child aged 1 year or older, but it does not replace emergency care. Inducing vomiting is not advised. Waiting allows the burn to progress.",
      sources: [NCPC],
    }),
    kind: "mc",
    options: [
      { text: "Give honey and watch the child at home", why: "Honey can slow injury but does not replace an x-ray and removal of a lodged battery." },
      { text: "Go to the emergency department now", why: "An immediate x-ray finds a lodged battery before a serious burn develops." },
      { text: "Make the child vomit to bring it up", why: "Inducing vomiting is not advised and can cause further injury." },
      { text: "Bring the child to the clinic tomorrow", why: "A lodged battery can burn the esophagus within hours." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-49", {
      topic: "Sterile barriers for central line insertion",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse assists a primary health care provider with insertion of a central venous catheter at the bedside. Which measures should the nurse confirm are in place? Select all that apply.",
      rationale:
        "Central line insertion needs maximal sterile barrier precautions. The inserter wears a cap, a mask, a sterile gown and sterile gloves. A sterile drape covers the whole body. The skin is prepped with a chlorhexidine and alcohol preparation that is allowed to dry. Clean gloves and a small drape fall short for a central line.",
      sources: [OGRADY],
    }),
    kind: "sata",
    options: [
      { text: "The provider wears a cap and a mask", why: "A cap and mask are part of maximal sterile barrier precautions." },
      { text: "The provider wears a sterile gown", why: "A sterile gown is part of maximal sterile barrier precautions." },
      { text: "The provider wears clean exam gloves", why: "Sterile gloves are required for central line insertion." },
      { text: "A small drape covers only the site", why: "A small drape leaves the field open. A full-body drape is used." },
      { text: "A sterile drape covers the whole body", why: "A full-body sterile drape is part of maximal sterile barrier precautions." },
      { text: "The skin is prepped with chlorhexidine and alcohol", why: "A chlorhexidine preparation with alcohol is the preferred skin antiseptic for insertion." },
    ],
    correct: [0, 1, 4, 5],
  },
  {
    ...meta("rn-s07-50", {
      topic: "Home disposal of pen needles",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches a client who will inject insulin at home about disposing of used pen needles. Which statement by the client shows understanding?",
      rationale:
        "Used needles go into a sharps container right after use. This protects family members and waste workers from needlesticks. The container is not filled to the top, because overfilling raises the risk of a stick. Containers are not reused. A full container is disposed of by local community rules.",
      sources: [FDA_SHARPS],
    }),
    kind: "mc",
    options: [
      { text: "I will recap each needle and put it in the trash.", why: "Loose needles in the trash can stick family members and waste workers." },
      { text: "I will fill the sharps container right to the top.", why: "Overfilling a container raises the risk of a needlestick." },
      { text: "I will empty and reuse my old sharps container.", why: "Sharps containers are not reused." },
      { text: "Each needle goes into a sharps container right away.", why: "Placing a needle in a sharps container right after use prevents needlesticks." },
    ],
    correct: 3,
  },
];
