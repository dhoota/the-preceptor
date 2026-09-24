import type { Item } from "@/engine/types";
import { EYEWASH, GOULD, HAZCOM, HINKLE, OSHA_BBP, PERTUSSIS, POTTER, SIEGEL, SSI, VAP, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s06-31", {
      topic: "Preventing surgical site infection",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with type 2 diabetes is scheduled for elective colon surgery tomorrow morning. Which measures lower the client's risk of surgical site infection? Select all that apply.",
      rationale:
        "A shower or bath with soap or an antiseptic the night before lowers skin bacteria. Glucose kept under 200 mg/dL (11.1 mmol/L) and normal body temperature both support wound healing and immune function. The prophylactic antibiotic is timed so tissue levels are high at incision. Shaving causes small cuts that harbor bacteria. Prophylactic antibiotics are not continued after the incision is closed. Antibiotic ointment is not applied to the incision.",
      sources: [SSI, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report glucose in mmol/L only, so the target reads as under 11.1 mmol/L. The Medical Council of Canada lists a fasting glucose range of 4.0 to 6.0 mmol/L.",
    }),
    kind: "sata",
    options: [
      { text: "Shave the abdomen the night before", why: "Razors cause small skin cuts that raise infection risk." },
      { text: "Continue antibiotics for 7 days after surgery", why: "Extra prophylactic doses after closure do not lower infection and add resistance risk." },
      { text: "Shower with soap or an antiseptic the night before", why: "Cleansing the skin before surgery lowers the bacterial load." },
      { text: "Apply antibiotic ointment to the closed incision", why: "Topical antimicrobials on the incision are not recommended." },
      { text: "Keep blood glucose under 200 mg/dL (11.1 mmol/L)", why: "High glucose impairs wound healing and immune response." },
      { text: "Maintain normal body temperature", why: "Hypothermia reduces blood flow to the wound and raises infection risk." },
      { text: "Give the prophylactic antibiotic before incision", why: "Timing gives high tissue drug levels when the skin is cut." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s06-32", {
      topic: "Safe handling of used needles",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse watches a new graduate nurse give an intramuscular injection. Which action by the new nurse requires the nurse to intervene?",
      rationale:
        "Recapping a used needle with two hands is a leading cause of needlestick injury. Used needles are not recapped by hand. Activating the safety shield at once, dropping the syringe into a nearby sharps container and replacing a container at the fill line are all safe practice.",
      sources: [OSHA_BBP],
    }),
    kind: "mc",
    options: [
      { text: "Activates the safety shield right after the injection", why: "Activating the engineered safety feature at once is correct." },
      { text: "Recaps the needle with both hands before disposal", why: "Two-handed recapping causes needlesticks and is prohibited, so the nurse intervenes." },
      { text: "Drops the syringe into the bedside sharps container", why: "Immediate disposal at the point of use is correct." },
      { text: "Asks for a new container when it reaches the line", why: "Replacing a container at the fill line prevents overfilling." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-33", {
      topic: "Infection risk during catheter insertion",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews a nursing student's account of inserting an indwelling urinary catheter in a female client. Click to highlight the actions that raise the client's risk of infection.",
      rationale:
        "A catheter tip that touches the thigh is no longer sterile and must be replaced. Letting the labia close recontaminates the cleaned meatus, so it must be cleaned again. A drainage bag on the floor picks up bacteria that can reach the urine. The other steps follow aseptic technique and keep the drainage system closed and below the bladder.",
      sources: [POTTER, GOULD],
    }),
    kind: "highlight",
    passage:
      "[[Performed hand hygiene and opened the kit on a clean overbed table.]]\n[[Put on sterile gloves touching only the inside of the cuffs.]]\n[[Separated the labia with the nondominant hand.]]\n[[Cleaned the meatus front to back with a new swab each stroke.]]\n[[The catheter tip brushed the client's thigh before insertion.]]\n[[Let the labia close, then inserted the catheter without cleaning again.]]\n[[Inflated the balloon after urine appeared.]]\n[[Rested the drainage bag on the floor.]]\n[[Secured the catheter to the upper thigh.]]",
    spans: [
      { text: "Performed hand hygiene and opened the kit on a clean overbed table.", why: "Clean hands and a clean surface are correct preparation." },
      { text: "Put on sterile gloves touching only the inside of the cuffs.", why: "Touching only the inside of the cuffs keeps the outer glove surface sterile." },
      { text: "Separated the labia with the nondominant hand.", why: "The nondominant hand holds the labia while the dominant hand stays sterile." },
      { text: "Cleaned the meatus front to back with a new swab each stroke.", why: "Front to back with a new swab each stroke avoids carrying bowel flora." },
      { text: "The catheter tip brushed the client's thigh before insertion.", why: "A contaminated tip carries skin bacteria into the bladder." },
      { text: "Let the labia close, then inserted the catheter without cleaning again.", why: "Closed labia recontaminate the meatus. It must be cleaned again." },
      { text: "Inflated the balloon after urine appeared.", why: "Urine flow confirms placement in the bladder before inflation." },
      { text: "Rested the drainage bag on the floor.", why: "The floor contaminates the bag and outlet. The bag hangs off the floor, below the bladder." },
      { text: "Secured the catheter to the upper thigh.", why: "Securing the catheter limits movement and urethral irritation." },
    ],
    correct: [4, 5, 7],
  },
  {
    ...meta("rn-s06-34", {
      topic: "Chemical splash to the eye",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "While diluting a disinfectant concentrate in the utility room, a nurse gets a splash in the right eye. The eye burns and waters. What should the nurse do first?",
      rationale:
        "A chemical in the eye keeps injuring tissue until it is washed out. The nurse goes straight to the eyewash station and flushes the eye. Reading the safety data sheet and reporting to occupational health come after flushing. A patch holds the chemical against the eye.",
      refs: ["Eyewash stations meeting ANSI Z358.1 deliver a flushing flow for 15 minutes."],
      sources: [EYEWASH, HAZCOM],
    }),
    kind: "mc",
    options: [
      { text: "Flush the eye at the eyewash station", why: "Immediate flushing removes the chemical and limits injury." },
      { text: "Read the product's safety data sheet", why: "The data sheet guides later care but reading it delays flushing." },
      { text: "Report to occupational health at once", why: "Reporting follows flushing. Walking away first lets the burn continue." },
      { text: "Cover the eye with a sterile patch", why: "A patch traps the chemical against the eye." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-35", {
      topic: "Infant with a paroxysmal cough",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 6-week-old infant who has not received any vaccines is admitted with a cough that began 2 weeks ago. The infant has coughing spells that end with gagging and a color change. After one spell the nurse sees a 20-second pause in breathing. Temperature is 37.4°C (99.3°F). Oxygen saturation falls to 86% during spells and returns to 97% between them. An older sibling has coughed for 3 weeks. Complete the diagram by choosing the condition the infant most likely has, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Coughing spells with gagging, apnea and color change in an unvaccinated young infant with a coughing sibling fit pertussis. Young infants often do not whoop. Pertussis spreads by droplets, so droplet precautions apply. Suction and oxygen stay at the bedside for spells. Saturation during spells and pauses in breathing show how severe the illness is. Bronchiolitis brings wheeze and croup brings a barking cough and stridor. Neither causes coughing spells that end in gagging.",
      refs: ["Droplet precautions for pertussis continue until 5 days after effective antibiotic therapy starts."],
      sources: [PERTUSSIS, SIEGEL],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Bronchiolitis", why: "Bronchiolitis brings wheeze and congestion, not coughing spells that end in gagging." },
      { text: "Pertussis", why: "Coughing spells, apnea and color change in an unvaccinated infant fit pertussis." },
      { text: "Croup", why: "Croup causes a barking cough and stridor, not spells followed by apnea." },
      { text: "Foreign body aspiration", why: "Aspiration starts suddenly and would not explain a sibling with a long cough." },
    ],
    actions: [
      { text: "Place the infant on droplet precautions", why: "Pertussis spreads by large respiratory droplets." },
      { text: "Place the infant on airborne precautions", why: "Pertussis is not spread by the airborne route." },
      { text: "Keep suction and oxygen at the bedside", why: "Spells can block the airway and drop saturation quickly." },
      { text: "Give a cough suppressant before feeds", why: "Cough suppressants do not help pertussis and are not used in young infants." },
      { text: "Offer large feeds every 4 hours", why: "Large feeds raise the risk of vomiting during spells. Small frequent feeds are safer." },
    ],
    parameters: [
      { text: "Oxygen saturation during spells", why: "Falls to 86% show how much each spell compromises breathing." },
      { text: "Number of stools per day", why: "Stools do not show respiratory status." },
      { text: "Pauses in breathing", why: "Apnea is the most dangerous sign in young infants with pertussis." },
      { text: "Serum sodium level each day", why: "Sodium does not track the course of pertussis." },
      { text: "Weekly head circumference", why: "Head growth does not guide acute respiratory care." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [0, 2] },
  },
  {
    ...meta("rn-s06-36", {
      topic: "Precautions for inhalational anthrax",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "Three workers from one office arrive with fever, cough and chest pain after opening a letter that held a white powder. Inhalational anthrax is suspected. The workers have showered and changed their clothing. Which precautions should the nurse use for their care?",
      rationale:
        "Inhalational anthrax is not spread from person to person. After the powder is removed from skin and clothing, standard precautions are enough. Airborne, droplet and contact precautions add no protection for this infection. The risk came from the spores in the letter, not from the ill workers.",
      sources: [SIEGEL, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
      canada: "PHAC uses the term Routine Practices for what US sources call standard precautions, and Additional Precautions for transmission-based ones. Its guideline lists Routine Practices alone for pulmonary anthrax.",
    }),
    kind: "mc",
    options: [
      { text: "Airborne precautions", why: "Inhalational anthrax does not spread between people through the air." },
      { text: "Droplet precautions", why: "Anthrax is not spread by respiratory droplets from an ill client." },
      { text: "Standard precautions", why: "Inhalational anthrax does not spread from person to person, so standard precautions apply." },
      { text: "Contact precautions", why: "Contact precautions apply to heavy drainage from cutaneous anthrax. These workers have the inhalational form." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-37", {
      topic: "Preventing ventilator-associated pneumonia",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client in the intensive care unit is receiving mechanical ventilation through an endotracheal tube after a stroke. Which measures should the nurse include to lower the risk of ventilator-associated pneumonia? Select all that apply.",
      rationale:
        "Raising the head of the bed 30 to 45 degrees lowers aspiration of secretions. Toothbrushing reduces the bacterial load in the mouth. Daily sedation interruption, as prescribed, shortens time on the ventilator. Ventilator circuits are changed only when soiled or faulty, since routine changes add no benefit. Chlorhexidine mouth care is not recommended. Lying flat raises aspiration risk.",
      sources: [VAP],
    }),
    kind: "sata",
    options: [
      { text: "Change the ventilator circuit every 24 hours", why: "Routine circuit changes do not lower pneumonia. Circuits are changed only when soiled or faulty." },
      { text: "Swab the mouth with chlorhexidine", why: "Chlorhexidine oral care is not recommended and may raise mortality." },
      { text: "Keep the client supine to protect the skin", why: "Lying flat increases aspiration of secretions." },
      { text: "Raise the head of the bed 30 to 45 degrees", why: "Head elevation lowers aspiration of oral and gastric secretions." },
      { text: "Brush the teeth as part of oral care", why: "Toothbrushing lowers the bacterial load in the mouth." },
      { text: "Interrupt sedation daily as prescribed", why: "Daily interruption helps wean the client from the ventilator sooner." },
    ],
    correct: [3, 4, 5],
  },
  {
    ...meta("rn-s06-38", {
      topic: "Home oxygen safety teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client who will use an oxygen concentrator at home. Which statement by the client shows a need for further teaching?",
      rationale:
        "Oxygen feeds combustion at any flow rate. Lowering the flow does not make an open flame safe, so candles stay out of the home while oxygen is used. A no-smoking sign, keeping tubing away from the gas stove and using water-based lip products are all correct. Petroleum products are flammable in an oxygen-rich setting.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I will put a no-smoking sign on my door.\"", why: "The sign warns visitors not to smoke near the oxygen." },
      { text: "\"I will keep the tubing away from the gas stove.\"", why: "Open flames must stay away from the oxygen supply." },
      { text: "\"I can light candles if I turn the oxygen down.\"", why: "Any open flame is a fire risk with oxygen in use. This needs correction." },
      { text: "\"I will use a water-based balm for dry lips.\"", why: "Water-based products avoid the fire risk of petroleum products." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-39", {
      topic: "Changes with an indwelling catheter",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 72-year-old client has had an indwelling urinary catheter since hip surgery 4 days ago. The nurse reviews the flow sheet. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "Day 1", "Day 2", "Day 3", "Day 4"],
            rows: [
              ["Temperature", "36.8°C (98.2°F)", "37.2°C (99.0°F)", "37.9°C (100.2°F)", "38.6°C (101.5°F)"],
              ["Heart rate (/minute)", "78", "82", "94", "104"],
              ["Urine", "Clear yellow", "Clear yellow", "Cloudy", "Cloudy, foul odor"],
              ["Suprapubic tenderness", "None", "None", "Mild", "Present"],
              ["Urine output (mL/day)", "1800", "1700", "1650", "1600"],
              ["Hip incision", "Dry, no redness", "Dry, no redness", "Dry, no redness", "Dry, no redness"],
            ],
          },
        },
      ],
      rationale:
        "From day 1 to day 4 the temperature rises from 36.8°C to 38.6°C and the heart rate from 78 to 104/minute. The urine turns cloudy with a foul odor and suprapubic tenderness appears. This pattern in a client with an indwelling catheter fits a catheter-associated urinary tract infection. Urine output stays near 1600 mL/day or more, which argues against dehydration. The hip incision stays dry with no redness.",
      sources: [GOULD],
    }),
    kind: "mc",
    options: [
      { text: "Catheter-associated urinary tract infection", why: "Fever, rising heart rate, cloudy foul urine and suprapubic tenderness fit this infection." },
      { text: "Dehydration from low fluid intake", why: "Urine output stays at 1600 mL/day or more, which is not a deficit pattern." },
      { text: "Bladder spasms from the catheter", why: "Spasms cause cramping pain but not fever or cloudy, foul urine." },
      { text: "Infection of the hip surgical site", why: "The incision stays dry with no redness on every day." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-40", {
      topic: "Precautions for meningococcal disease",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 19-year-old college student is admitted with fever, headache, neck stiffness and a petechial rash. Meningitis from Neisseria meningitidis is suspected. IV ceftriaxone starts at 1400. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Neisseria meningitidis spreads by large respiratory droplets. Droplet precautions start on admission when the infection is suspected. They continue until 24 hours of effective therapy have passed. Airborne precautions are not needed. Contact precautions do not address the respiratory route. The end point is not the fading of the rash or the fever.",
      sources: [SIEGEL],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should place the client on {0} precautions and continue them until {1}.",
    blanks: [
      {
        options: [
          { text: "airborne", why: "Meningococcus is not spread through the air over distance." },
          { text: "droplet", why: "Meningococcus spreads by large respiratory droplets at close range." },
          { text: "contact", why: "Contact precautions alone do not block droplet spread." },
          { text: "protective", why: "A protective environment shields immunocompromised clients. It does not contain this infection." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "the petechial rash fades", why: "The rash can take days to fade and does not mark the end of spread." },
          { text: "the fever has resolved", why: "Fever can last beyond the time the client stops being infectious." },
          { text: "24 hours of effective therapy", why: "Droplet precautions end 24 hours after effective antibiotics start." },
          { text: "the antibiotic course ends", why: "Precautions are not needed for the full course of antibiotics." },
        ],
        correct: 2,
      },
    ],
  },
];
