import type { Item } from "@/engine/types";
import { AAP_CPS, CDC_INJ, ISMP_ABBR, OGRADY, POTTER, SIEGEL, TJC_NPSG, meta } from "./common";

/** Batch s07, items 01 to 10. */
export const PART1: Item[] = [
  {
    ...meta("rn-s07-01", {
      topic: "Precautions for respiratory syncytial virus",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 7-month-old infant is admitted with bronchiolitis. A nasal swab is positive for respiratory syncytial virus. The infant has copious nasal secretions. Which precautions should the nurse implement in addition to standard precautions?",
      rationale:
        "Respiratory syncytial virus spreads through direct contact with secretions and through hands and surfaces soiled by them. The infant's copious nasal secretions soil hands, toys and crib rails. Contact precautions add a gown and gloves on entry and dedicated equipment. They continue for the length of the illness. Standard precautions still apply, so a mask and eye protection are worn if secretions may splash.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's Routine Practices and Additional Precautions guideline lists droplet and contact precautions for RSV for the length of symptoms. A Canadian unit would add droplet precautions to the contact precautions keyed here.",
    }),
    kind: "mc",
    options: [
      { text: "Contact precautions", why: "The virus spreads by direct contact and by hands touching soiled surfaces. Contact precautions address that route." },
      { text: "Airborne precautions", why: "The virus does not travel as droplet nuclei over long distances. An airborne infection isolation room is not needed." },
      { text: "Droplet precautions", why: "The isolation guideline lists contact precautions for this virus. A mask alone misses spread by hands and surfaces." },
      { text: "Protective environment", why: "A protective environment shields a severely immunocompromised client. It does not contain an infectious client." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-02", {
      topic: "Central line site and port care",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a nontunneled central venous catheter in the right internal jugular vein. The transparent dressing was applied 3 days ago and one edge is now lifting. The nurse plans central line care for the shift. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A lifting dressing no longer seals the site, so it is changed now rather than on day 7. The skin is cleaned with a chlorhexidine and alcohol preparation, which is left to dry. The access port is scrubbed with an antiseptic before every entry. Antibiotic ointment at the site can promote fungal infection and resistance. The catheter site is kept out of water.",
      sources: [OGRADY],
    }),
    kind: "sata",
    options: [
      { text: "Wait until day 7 to change the dressing", why: "A dressing that is loose, damp or soiled is changed right away. Day 7 is the limit for an intact transparent dressing." },
      { text: "Change the loose dressing this shift", why: "A lifting edge lets skin flora reach the insertion site. A loose dressing is replaced when found." },
      { text: "Clean the skin with chlorhexidine and alcohol", why: "A chlorhexidine preparation with alcohol is the preferred skin antiseptic at dressing changes." },
      { text: "Apply antibiotic ointment at the insertion site", why: "Topical antibiotic ointment is not used on central line sites because it promotes fungal infection and resistance." },
      { text: "Scrub the access port before each entry", why: "Scrubbing the port with an antiseptic removes organisms before the system is entered." },
      { text: "Let the client soak in a tub bath", why: "The catheter site is not submerged in water. Showering is possible only with the site covered by an impermeable cover." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s07-03", {
      topic: "Ending precautions for mumps",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 24-year-old client with mumps has parotid swelling that began 2 days before admission. The client was placed on droplet precautions on arrival. The charge nurse asks when the precautions can end. Which response by the nurse is accurate?",
      rationale:
        "Mumps spreads by respiratory droplets and saliva. Droplet precautions continue until 5 days after the parotid swelling began. This client's swelling began 2 days before admission, so the 5 days count from that onset, not from admission. Resolution of fever or of swelling is not the marker used. Antibiotics play no part in treating a viral illness.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Once the fever has resolved", why: "Mumps can still spread after the fever settles. The end point is tied to the start of the swelling." },
      { text: "24 hours after starting antibiotics", why: "Mumps is a viral illness. Antibiotics do not treat it, so they set no end point." },
      { text: "5 days after the swelling began", why: "The isolation guideline keeps droplet precautions until 5 days after the swelling starts." },
      { text: "When the swelling has gone down", why: "Swelling can outlast the infectious period. Waiting for it keeps precautions longer than needed." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s07-04", {
      topic: "Writing an insulin dose",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse labels a syringe of regular insulin prepared at the bedside. The prescribed dose is 10 units. How should the nurse write the dose on the label?",
      rationale:
        "The dose is written as 10 units, with the word units in full. ISMP lists U and IU as error-prone abbreviations. A handwritten U can look like a zero or a 4. A trailing zero after a whole number can hide the decimal point and be read as a tenfold dose. Insulin is a high-alert medication, so a misread label can cause severe hypoglycemia.",
      sources: [ISMP_ABBR, { body: "Institute for Safe Medication Practices Canada", work: "Do Not Use: List of Dangerous Abbreviations, Symbols, and Dose Designations", year: 2025, url: "https://ismpcanada.ca/resource/do-not-use-list/" }],
      canada: "ISMP Canada publishes its own Do Not Use list of dangerous abbreviations, last updated in 2025. It also lists U, IU and trailing zeros and advises writing units in full.",
    }),
    kind: "mc",
    options: [
      { text: "10 U", why: "A handwritten U can be read as a zero or a 4. This can lead to a tenfold or larger overdose." },
      { text: "10 units", why: "Writing the word units in full removes the risk of misreading an abbreviation." },
      { text: "10 IU", why: "IU can be misread as IV or as the number 10. ISMP advises writing units in full." },
      { text: "10.0 units", why: "A trailing zero can hide the decimal point. The dose may then be read as a tenfold overdose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s07-05", {
      topic: "Open sterile gloving",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to put on sterile gloves by the open method before a sterile procedure at the bedside. Place the steps in order.",
      rationale:
        "Hand hygiene comes first. The outer package is opened and the inner wrapper is placed on a clean, dry surface. The inner wrapper is opened by its outer edges. The first glove is lifted by its folded cuff, touching only the inner surface. Gloved fingers then slide under the cuff of the second glove. Once the first glove is on, sterile touches only sterile.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Open the inner wrapper by its edges", why: "The inner wrapper is opened by its outer edges so the gloves inside stay sterile." },
      { text: "Perform hand hygiene", why: "Hand hygiene comes first and lowers the flora on the hands before sterile items are handled." },
      { text: "Slide gloved fingers under the second cuff", why: "The sterile gloved fingers go under the cuff of the second glove so sterile touches sterile." },
      { text: "Open the outer glove package", why: "The outer package is opened after hand hygiene. The inner wrapper is then set on a clean, dry surface." },
      { text: "Adjust the first cuff with the bare hand", why: "A bare hand touching the outside of a sterile glove contaminates it. Cuffs are adjusted with gloved hands." },
      { text: "Lift the first glove by its folded cuff", why: "The bare hand touches only the folded inner cuff, which will rest against the skin." },
    ],
    correct: [1, 3, 0, 5, 2],
  },
  {
    ...meta("rn-s07-06", {
      topic: "Head lice found on admission",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 6-year-old child is admitted for an appendectomy. On admission the nurse finds live lice and nits in the child's hair. The primary health care provider prescribes a topical pediculicide. Which plan should the nurse include?",
      rationale:
        "Head lice spread by direct head-to-head contact and through shared items such as combs, hats and linen. Contact precautions add a gown and gloves for care. They continue until 24 hours after effective treatment. Remaining nits do not extend the precautions. Lice do not spread by droplets or through the air.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC's guideline lists Routine Practices plus gloves for direct contact for head lice, rather than full contact precautions. The end point is the same, 24 hours after a pediculicide is applied.",
    }),
    kind: "mc",
    options: [
      { text: "Airborne precautions until the nits are gone", why: "Lice spread by head contact and shared items, not through the air. Nits can remain after the lice are dead." },
      { text: "Droplet precautions for the whole stay", why: "Lice do not spread by droplets. Precautions also do not need to last the whole stay." },
      { text: "Standard precautions with no added measures", why: "Standard precautions alone do not address spread through head contact and shared combs and linen." },
      { text: "Contact precautions until 24 hours after treatment", why: "The isolation guideline keeps contact precautions until 24 hours after effective therapy." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s07-07", {
      topic: "Safe injection practices",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares injections for several clients in an outpatient clinic. Which two practices follow safe injection guidance? Select two.",
      rationale:
        "Needles, syringes and single-dose vials are for one client only. A syringe stays contaminated even when its needle is changed. A multidose vial is entered only with a sterile needle and syringe. It is stored away from the immediate treatment area. Leftover single-dose contents are not pooled. One IV bag is not a shared flush source.",
      sources: [SIEGEL, CDC_INJ],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Pool leftovers from single-dose vials", why: "Combining leftover contents of single-dose vials risks contamination. The guideline advises against it." },
      { text: "Change only the needle between clients", why: "A used syringe is contaminated. A new needle does not make it safe for another client." },
      { text: "Use a single-dose vial for one client only", why: "A single-dose vial has no preservative. It is used for one client and one procedure." },
      { text: "Store multidose vials in the client room", why: "Multidose vials are kept out of the immediate treatment area to avoid contamination." },
      { text: "Enter a multidose vial with a sterile syringe", why: "The needle and syringe must both be sterile each time a multidose vial is entered." },
      { text: "Flush several clients from one saline bag", why: "An IV bag is not a common source for several clients. Once entered it is treated as contaminated." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s07-08", {
      topic: "Rear-facing car seat teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of an 18-month-old toddler asks when the child can ride facing forward. The child is within the height and weight limits of a rear-facing convertible seat. Which response by the nurse is appropriate?",
      rationale:
        "A rear-facing seat spreads crash forces across the back and supports the head and neck. The AAP advises keeping children rear-facing as long as possible, up to the rear-facing limits of their seat. This toddler is still within those limits. Age, walking and leg length are not the switch points.",
      sources: [AAP_CPS],
    }),
    kind: "mc",
    options: [
      { text: "Keep the seat rear-facing until it is outgrown", why: "The AAP advises rear-facing as long as possible, up to the seat's rear-facing height or weight limit." },
      { text: "Turn the seat forward now the child is walking", why: "Walking is not a criterion. A rear-facing seat protects the head, neck and spine better in a crash." },
      { text: "Turn the seat forward on the second birthday", why: "The AAP no longer uses the second birthday as the switch point. The seat's limits guide the change." },
      { text: "Turn the seat forward once the feet touch the seat", why: "Feet touching the vehicle seat back is not a limit. The seat's own height and weight limits guide the change." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s07-09", {
      topic: "Room safety for a client at risk of suicide",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on a medical unit was admitted after an intentional acetaminophen overdose. The client states an ongoing wish to die. A sitter is assigned for continuous observation. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A general medical unit is not built to resist ligatures, so risk is reduced by other means. Belts, laces, cords and plastic bags are removed when they are not needed for care. Items that visitors bring are checked. The sitter keeps the client in sight at all times, including in the bathroom. The client is escorted when leaving the unit.",
      sources: [TJC_NPSG],
    }),
    kind: "sata",
    options: [
      { text: "Allow a personal razor for shaving", why: "A razor is a means of self-harm. It is removed from the room of a client at risk." },
      { text: "Remove the belt and shoelaces", why: "Belts and laces can serve as ligatures. They are removed from the room." },
      { text: "Leave the client alone in the bathroom", why: "Continuous observation includes the bathroom, where many self-harm acts occur." },
      { text: "Check items that visitors bring in", why: "Visitors can bring in items that could be used for self-harm, so these are checked." },
      { text: "Send the client to radiology alone", why: "A client at high risk is escorted during transport off the unit." },
      { text: "Remove unneeded cords and plastic bags", why: "Cords and bags can be used for hanging or suffocation. Items not needed for care are removed." },
      { text: "Keep the client within the sitter's sight", why: "Continuous observation means the sitter keeps the client in view without breaks." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s07-10", {
      topic: "Central line infection data",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "The nurse sits on the unit infection prevention council. The council reviews central line data for the year after a care bundle started in the first quarter. Based on the trend, which conclusion do the data support?",
      tabs: [
        {
          title: "Unit Quality Data",
          table: {
            head: ["Measure", "Q1", "Q2", "Q3", "Q4"],
            rows: [
              ["Port scrubbed before access (%)", "62", "74", "88", "95"],
              ["Dressing dated and intact (%)", "70", "79", "90", "96"],
              ["Central line days", "1200", "1180", "1210", "1190"],
              ["Central line infections", "6", "5", "2", "1"],
            ],
          },
        },
      ],
      rationale:
        "Port scrubbing rose from 62% to 95%. Dated, intact dressings rose from 70% to 96%. Infections fell from 6 in the first quarter to 1 in the fourth. Central line days stayed between 1180 and 1210, so the fall did not come from fewer lines. The data show infections falling as adherence rose. The data alone do not prove cause.",
      sources: [OGRADY],
    }),
    kind: "mc",
    options: [
      { text: "Infections fell because fewer lines were used", why: "Central line days stayed near 1200 each quarter, so line use did not fall." },
      { text: "Adherence rose but infections did not change", why: "Infections fell from 6 to 1 over the year. The count did change." },
      { text: "Infections fell as bundle adherence rose", why: "Both adherence measures climbed each quarter while the infection count dropped." },
      { text: "Dressing care declined across the year", why: "Dated, intact dressings rose from 70% to 96%. Dressing care improved." },
    ],
    correct: 2,
  },
];
