import type { Item } from "@/engine/types";
import { BOYCE, CDC_HCP, FREIFELD, GOULD, HHS_SHOOTER, KLOMPAS, OSHA_WPV, POTTER, SIEGEL, STEADI, USDA_TX, WHO_HH, meta } from "./common";

/** Batch s08, items 31 to 40. */
export const PART4: Item[] = [
  {
    ...meta("rn-s08-31", {
      topic: "Pregnant nurse and a client shedding cytomegalovirus",
      cjmm: "analyze",
      process: "communication",
      difficulty: 4,
      stem: "A nurse who is 14 weeks pregnant is assigned to a 2-year-old client with congenital cytomegalovirus infection. The child sheds the virus in urine and saliva. The nurse asks the charge nurse to change the assignment. Which response by the charge nurse is accurate?",
      rationale:
        "Cytomegalovirus spreads through contact with body fluids such as urine and saliva. Standard precautions, with gloves for diaper changes and careful hand hygiene, protect all staff. Pregnant staff are not routinely excluded from caring for these clients. The virus is not airborne, so a respirator adds nothing. Precautions are set by the client's infection, not by the pregnancy of the staff member.",
      sources: [CDC_HCP, SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "\"Pregnant staff are removed from all clients with this virus.\"", why: "Pregnant staff are not routinely excluded from care of clients with this virus." },
      { text: "\"Standard precautions and hand hygiene protect you here.\"", why: "The virus spreads by contact with body fluids, which standard precautions address." },
      { text: "\"You will need an N95 respirator for this child.\"", why: "The virus does not spread by the airborne route." },
      { text: "\"The child needs contact precautions due to your pregnancy.\"", why: "Precautions depend on the client's infection, not on the pregnancy of staff." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s08-32", {
      topic: "Home safety for an older adult with low vision",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "An 82-year-old client with macular degeneration lives at home and has fallen once on the stairs. Which two recommendations should the nurse include in the home safety plan? Select two.",
      rationale:
        "Low vision makes step edges hard to see. A bright, contrasting strip on each edge shows where one step ends. Light switches at the top and bottom of the stairs mean the client never climbs in the dark. Throw rugs are a trip hazard. Low-watt bulbs make the stairs darker. Items used often belong on low shelves so the client does not climb.",
      sources: [STEADI, POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Add bright tape to the edge of each step", why: "A contrasting edge shows where each step ends." },
      { text: "Use a throw rug to mark the landing", why: "Throw rugs slide and catch feet. They are removed." },
      { text: "Put light switches at both ends of the stairs", why: "The client can light the stairs before climbing up or down." },
      { text: "Use low-watt bulbs to cut down on glare", why: "Dim light makes steps harder to see. Bright bulbs are advised." },
      { text: "Store often-used items on high shelves", why: "Reaching high shelves leads to climbing. Items go on low shelves." },
      { text: "Walk the stairs in socks to feel the edges", why: "Socks slip on stairs. Sturdy shoes with nonslip soles are safer." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s08-33", {
      topic: "Threat of violence at a home visit",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A home health nurse arrives for a scheduled visit and hears shouting inside the home. A person on the porch is waving a handgun. What should the nurse do?",
      rationale:
        "A weapon and an active dispute make the visit unsafe. The nurse leaves the area first and then calls the police, followed by the agency. The visit is rescheduled once the home is safe. Knocking puts the nurse in the line of danger. A phone call to the client delays leaving. Waiting in the car keeps the nurse close to an armed person.",
      sources: [OSHA_WPV],
    }),
    kind: "mc",
    options: [
      { text: "Knock and announce the scheduled visit", why: "Approaching the home puts the nurse in danger from an armed person." },
      { text: "Call the client's phone to check on safety", why: "Calling from the scene delays leaving an unsafe place." },
      { text: "Leave the area and call the police", why: "Leaving removes the nurse from danger. Police handle the threat." },
      { text: "Wait in the car until the shouting stops", why: "Staying nearby keeps the nurse within reach of the weapon." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-34", {
      topic: "Preventing pneumonia in a client not on a ventilator",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 76-year-old client is admitted with a hip fracture and is not on a ventilator. The nurse plans care to prevent hospital-acquired pneumonia. Which interventions should the nurse include? Select all that apply.",
      rationale:
        "Daily toothbrushing lowers the oral bacteria that can be aspirated. Screening for swallowing problems before oral intake finds clients at risk of aspiration. Getting out of bed early improves lung expansion and cough. Chlorhexidine rinses have no proven benefit for this type of pneumonia. Preventive antibiotics do not lower pneumonia rates. Prolonged bed rest raises the risk.",
      sources: [KLOMPAS],
    }),
    kind: "sata",
    options: [
      { text: "Rinse the mouth with chlorhexidine each shift", why: "Chlorhexidine rinses have no proven benefit against pneumonia in clients who are not ventilated." },
      { text: "Brush the client's teeth at least daily", why: "Toothbrushing reduces oral bacteria that can reach the lungs." },
      { text: "Request a daily preventive antibiotic", why: "Preventive antibiotics do not reduce pneumonia and promote resistance." },
      { text: "Get the client out of bed as early as allowed", why: "Early mobility improves lung expansion and clearance of secretions." },
      { text: "Keep the client on bed rest until discharge", why: "Immobility promotes atelectasis and pneumonia." },
      { text: "Screen swallowing before any oral intake", why: "Swallowing screening finds clients at risk of aspiration." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s08-35", {
      topic: "Teaching a visitor to use hand rub",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the spouse of a client with a weakened immune system how to use alcohol hand rub during visits. Which statement by the spouse shows understanding?",
      rationale:
        "Hand rub works when it covers every surface of the hands and is rubbed until dry. Visibly dirty hands need soap and water, because alcohol does not remove dirt. Wiping the rub away removes it before it acts. A small dab on the palms misses the backs of the hands, fingertips and thumbs.",
      sources: [WHO_HH, BOYCE],
    }),
    kind: "mc",
    options: [
      { text: "\"I use the rub when my hands look dirty.\"", why: "Visibly dirty hands need soap and water. Alcohol does not remove dirt." },
      { text: "\"I wipe the rub off with a paper towel.\"", why: "Wiping removes the alcohol before it has acted." },
      { text: "\"I put a small dab on my palms only.\"", why: "The backs of the hands, fingertips and thumbs are missed." },
      { text: "\"I rub all surfaces until my hands are dry.\"", why: "Full coverage and rubbing until dry give the alcohol time to work." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s08-36", {
      topic: "Kitchen fire risk with dementia",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The home health nurse visits a 79-year-old client with moderate dementia who lives alone. The daughter reports that two pots have burned dry on the stove this month. A scorched dish towel lies next to a burner. The client walks steadily without a device. The daughter fills a weekly pill organizer, and the doses are taken correctly. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Pots left to burn dry and a scorched towel show the client forgets the stove while it is on. With dementia and no one else in the home, this can start a fire. The steady gait lowers concern for a fall. The filled organizer and correct doses lower concern for a medication error. Nothing in the visit suggests wandering.",
      sources: [POTTER],
    }),
    kind: "cloze",
    template: "The client is at highest risk for {0} as evidenced by {1}.",
    scoring: "dyad",
    blanks: [
      {
        options: [
          { text: "fire and burn injury", why: "Burned pots and a scorched towel show the stove is left on unattended." },
          { text: "a fall at home", why: "The client walks steadily without a device." },
          { text: "a medication error", why: "The daughter fills the organizer and the doses are taken correctly." },
          { text: "wandering from home", why: "The stem reports no attempts to leave the home." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "pots burned dry on the stove", why: "This shows the client forgets food cooking on a lit burner." },
          { text: "a steady gait", why: "A steady gait lowers fall risk and is not a sign of fire risk." },
          { text: "the weekly pill organizer", why: "The organizer is used correctly and supports safe medication use." },
          { text: "the daughter's help", why: "Weekly help lowers risk. It is not evidence of a hazard." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s08-37", {
      topic: "Active shooter in the hospital",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "An overhead announcement reports an active shooter on the floor below the nurse's unit. The exit routes pass the shooter's location. Several clients on the unit cannot walk. Which actions should the nurse take? Select all that apply.",
      rationale:
        "When escape is not safe, staff hide. Doors are locked or barricaded, lights go off and phones are silenced so the unit does not draw attention. Staff shelter in place with clients who cannot be moved. Moving clients into the hallway exposes them. Opening a stairwell door or going to the floor below moves staff toward the threat. Police secure the area before others enter.",
      sources: [HHS_SHOOTER],
    }),
    kind: "sata",
    options: [
      { text: "Lock or barricade the doors of the unit", why: "A locked or blocked door delays the shooter's entry." },
      { text: "Move clients into the hallway to count them", why: "The hallway leaves clients exposed. Clients stay in secured rooms." },
      { text: "Silence phones and turn off the lights", why: "Noise and light can draw the shooter to the unit." },
      { text: "Shelter with clients who cannot be moved", why: "Staff hide with clients who cannot be moved when exits are unsafe." },
      { text: "Open the stairwell door to check the noise", why: "Checking moves staff toward the threat and opens a route onto the unit." },
      { text: "Go to the floor below to help the injured", why: "Care for the injured begins after police secure the area." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s08-38", {
      topic: "Absolute neutrophil count and infection risk",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client receiving chemotherapy has a white blood cell count of 2400/mm3, segmented neutrophils 15% and bands 5%. Calculate the absolute neutrophil count. Which value is correct?",
      rationale:
        "The absolute neutrophil count adds segmented neutrophils and bands, then applies that share to the white cell count. Segmented neutrophils 15% plus bands 5% gives 20%. Twenty percent of 2400/mm3 is 480/mm3. This is below 500/mm3, which is severe neutropenia and a high risk for infection. The nurse puts neutropenic precautions in place and reports the result.",
      refs: ["An absolute neutrophil count below 500/mm3 is severe neutropenia."],
      calc: { expr: "2400 * (15 + 5) / 100", answer: 480, unit: "/mm3", round: 0, steps: ["15 + 5 = 20", "2400 * 20 / 100 = 480"] },
      sources: [FREIFELD, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report the absolute neutrophil count as x 10^9/L, with a Medical Council of Canada adult range of 2.0 to 7.5 x 10^9/L. This result reads as 0.48 x 10^9/L, below the 0.5 x 10^9/L cutoff.",
    }),
    kind: "mc",
    options: [
      { text: "120/mm3", why: "This counts the bands only and leaves out the segmented neutrophils." },
      { text: "360/mm3", why: "This counts segmented neutrophils only and leaves out the bands." },
      { text: "480/mm3", why: "Segmented neutrophils and bands together are 20% of 2400/mm3." },
      { text: "1920/mm3", why: "This is the count of all the other white cells, not the neutrophils." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s08-39", {
      topic: "Food safety after organ transplant",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse reviews food safety with a client going home after a kidney transplant. The client takes medications that suppress the immune system. Which two statements by the client show understanding? Select two.",
      rationale:
        "Immunosuppression raises the risk of serious foodborne infection such as listeriosis and salmonellosis. Deli meats are reheated until steaming hot to kill Listeria. Only pasteurized milk and cheese are used. Raw sprouts, runny eggs, raw fish and raw milk cheese can carry bacteria that cooking or pasteurization would kill.",
      sources: [USDA_TX],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will heat deli meats until they are steaming.\"", why: "Heating until steaming kills Listeria that can grow in chilled deli meats." },
      { text: "\"I will add raw alfalfa sprouts to my salads.\"", why: "Raw sprouts can carry Salmonella and E. coli. Only cooked sprouts are safe." },
      { text: "\"I will buy only pasteurized milk and cheese.\"", why: "Pasteurization kills bacteria found in raw milk." },
      { text: "\"I will order my eggs cooked with a runny yolk.\"", why: "Runny yolks can carry Salmonella. Eggs are cooked until firm." },
      { text: "\"I will eat sushi with raw fish once a week.\"", why: "Raw fish can carry bacteria and parasites. Fish is cooked." },
      { text: "\"I will try raw milk cheese from the farm market.\"", why: "Cheese made from raw milk can carry Listeria." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s08-40", {
      topic: "Catheter removal protocol and infection data",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A medical unit began a nurse-driven protocol in March to remove urinary catheters that no longer meet criteria. The infection prevention nurse reviews the unit data. Based on the trend, which conclusion is best supported?",
      tabs: [
        {
          title: "Unit Surveillance",
          table: {
            head: ["Measure", "January", "February", "March", "April", "May"],
            rows: [
              ["Catheter days", "410", "395", "300", "240", "220"],
              ["Catheter-associated UTIs", "4", "4", "2", "1", "1"],
              ["Infections per 1000 catheter days", "9.8", "10.1", "6.7", "4.2", "4.5"],
            ],
          },
        },
      ],
      rationale:
        "After the protocol began in March, catheter days fell from 395 in February to 220 in May. The infection rate per 1000 catheter days also fell, from 10.1 to 4.5. Both use and the rate adjusted for use dropped. This fits the aim of removing catheters that are no longer needed. The small counts mean the unit keeps tracking the data.",
      sources: [GOULD],
    }),
    kind: "mc",
    options: [
      { text: "The protocol has had no effect on infections", why: "Both the count and the rate of infections fell after March." },
      { text: "Catheter use and infection rates both fell", why: "Catheter days and the rate per 1000 catheter days dropped after March." },
      { text: "Fewer catheter days explain the drop, not the rate", why: "The rate adjusts for catheter days, and it also fell." },
      { text: "The infection rate rose after the protocol began", why: "The rate fell from 10.1 in February to 4.5 in May." },
    ],
    correct: 1,
  },
];
