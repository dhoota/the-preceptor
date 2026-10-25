import type { Item } from "@/engine/types";
import { AORN_CLEAN, CIG_HEPA, DISINFECTION, ENDO_POLICY, FOOD_CODE, HEPA_ACIP, LEG_CLIN, LEG_WATER, NS_HEPA, SIEGEL, TABLAN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s31-11", {
      need: "SIPC",
      topic: "Hepatitis A prophylaxis for a roommate",
      canada: "The Canadian Immunization Guide gives hepatitis A vaccine for prophylaxis from 6 months of age, preferably within 14 days. Immune globulin is used for infants under 6 months and is added to vaccine for immunocompromised contacts.",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 29-year-old line cook is diagnosed with hepatitis A. Jaundice began yesterday. The cook's healthy 33-year-old roommate shares the kitchen and bathroom and has never received hepatitis A vaccine. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The roommate is a close household contact of a person who was most infectious in the 2 weeks before jaundice began. A healthy unvaccinated adult of 33 receives one dose of hepatitis A vaccine as prophylaxis. It works when given as soon as possible within 2 weeks of the last exposure. Benefit after 2 weeks has not been shown. Immune globulin alone is kept for infants and people who cannot receive vaccine.",
      refs: ["Healthy persons aged 12 months to 40 years receive one dose of hepatitis A vaccine within 2 weeks of exposure. Infants under 12 months receive immune globulin."],
      sources: [HEPA_ACIP, CIG_HEPA],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The roommate should receive {0} within {1} of the last exposure.",
    blanks: [
      {
        options: [
          { text: "hepatitis A vaccine", why: "One dose of vaccine is the prophylaxis for a healthy contact aged 12 months to 40 years." },
          { text: "immune globulin alone", why: "Immune globulin alone is for infants under 12 months or people who cannot receive vaccine." },
          { text: "hepatitis B vaccine", why: "Hepatitis B vaccine does not protect against hepatitis A." },
          { text: "an oral antiviral drug", why: "No antiviral drug is used to prevent hepatitis A after exposure." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "72 hours", why: "Prophylaxis still works after 72 hours, up to 2 weeks after exposure." },
          { text: "2 weeks", why: "Vaccine given within 2 weeks of exposure can prevent infection." },
          { text: "6 weeks", why: "Benefit beyond 2 weeks after exposure has not been shown." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s31-12", {
      need: "SIPC",
      topic: "Public health response to a food handler with hepatitis A",
      canada: "The Canadian Immunization Guide recommends offering prophylaxis to susceptible coworkers and clients of an infected food handler. Vaccine is given preferably within 14 days of the last exposure.",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The health department confirms hepatitis A in a 41-year-old restaurant worker who prepares salads and sandwiches. Jaundice began 2 days ago. The public health nurse plans the response. Which actions should the nurse include? Select all that apply.",
      rationale:
        "The worker prepares food that is not cooked again, so exclusion from food handling is required. Unvaccinated household contacts are offered vaccine within 2 weeks of exposure. Illness dates and duties show how long the worker was infectious and who was exposed. Hand washing after toilet use breaks fecal-oral spread among staff. Patron spread is rare, and prophylaxis after 2 weeks has no shown benefit. Immune globulin does not treat an established infection.",
      refs: ["Hepatitis A prophylaxis has shown benefit only when given within 2 weeks of exposure. Peak spread is in the 2 weeks before jaundice."],
      sources: [HEPA_ACIP, FOOD_CODE, CIG_HEPA],
    }),
    kind: "sata",
    options: [
      { text: "Give the worker immune globulin now", why: "Immune globulin prevents infection in exposed people. It does not treat the worker's infection." },
      { text: "Exclude the worker from food handling", why: "A food employee diagnosed with hepatitis A is excluded until reinstatement criteria are met." },
      { text: "Vaccinate every patron from the past 2 months", why: "Patron spread is rare, and prophylaxis given more than 2 weeks after exposure has no shown benefit." },
      { text: "Offer vaccine to unvaccinated household contacts", why: "Close household contacts are at highest risk and benefit from prompt vaccine." },
      { text: "Close the restaurant for 50 days", why: "Closure is not a routine control measure. Exclusion of the ill worker and hygiene review are the measures used." },
      { text: "Ask about the worker's illness dates and duties", why: "Dates and duties define the infectious period and which people were exposed." },
      { text: "Review hand washing after toilet use with staff", why: "Hepatitis A spreads by the fecal-oral route, so hand washing limits spread." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s31-13", {
      need: "SIPC",
      topic: "Food worker return after hepatitis A",
      canada: "The FDA Food Code is a US model code. In Canada, food handler exclusion follows provincial public health rules and varies by province. Nova Scotia, for example, excludes a jaundiced food handler until one week after jaundice began.",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A food worker with hepatitis A has been excluded from work. Jaundice began 4 days ago. The nurse explains when the worker may return to handling food. Which statement by the worker shows understanding?",
      rationale:
        "The Food Code reinstates a worker excluded for hepatitis A only with approval of the regulatory authority. The worker must also have been jaundiced for more than 7 days, or have had other symptoms for more than 14 days, or have medical proof of being free of infection. Most people stop being infectious about a week after jaundice begins. Feeling better, a return of appetite and gloves do not meet the rule.",
      refs: ["Reinstatement needs regulatory approval plus jaundice for more than 7 days, other symptoms for more than 14 days, or medical documentation."],
      sources: [FOOD_CODE, HEPA_ACIP, NS_HEPA],
    }),
    kind: "mc",
    options: [
      { text: "\"I can go back once my appetite comes back.\"", why: "Appetite is not a return criterion. The rule depends on days of jaundice and approval." },
      { text: "\"I can go back if I wear gloves for every task.\"", why: "Gloves do not lift an exclusion. The worker stays away from food handling." },
      { text: "\"I can go back after one week of feeling sick.\"", why: "Symptoms other than jaundice must last more than 14 days. The worker also needs approval." },
      { text: "\"I need approval to return after more than 7 days of jaundice.\"", why: "Reinstatement needs regulatory approval and jaundice lasting more than 7 days." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s31-14", {
      need: "SIPC",
      topic: "Pneumonia after hotel hot tub use",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 66-year-old client who smokes returned 5 days ago from a hotel stay with daily hot tub use. The client has a cough, a temperature of 39.4°C (102.9°F), diarrhea and new confusion. A chest radiograph shows a right lower lobe infiltrate. The client's spouse shared the hotel room and is well. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Age over 50, smoking, recent overnight travel and hot tub use are risk factors for Legionnaires disease. Pneumonia with diarrhea and confusion fits it. Legionella is inhaled from aerosolized water and does not spread from person to person, so standard precautions are enough. A urine antigen test with a lower respiratory culture confirms it. Oxygen saturation and level of consciousness show whether the pneumonia is worsening.",
      refs: ["Legionnaires disease risk rises at age 50 years or older."],
      sources: [LEG_CLIN, SIEGEL],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Legionnaires disease", why: "Hot tub exposure, smoking, age, pneumonia, diarrhea and confusion fit Legionella infection." },
      { text: "Influenza", why: "Influenza does not explain a lobar infiltrate after hot tub exposure with diarrhea and confusion." },
      { text: "Pulmonary tuberculosis", why: "Tuberculosis builds over weeks with night sweats and weight loss, not days after a trip." },
      { text: "Aspiration pneumonia", why: "The stem gives no swallowing problem, vomiting or reduced consciousness before the illness." },
    ],
    actions: [
      { text: "Use standard precautions", why: "Legionella does not spread between people, so no added isolation is needed." },
      { text: "Place the client on droplet precautions", why: "Droplet spread does not occur with Legionella." },
      { text: "Collect urine for antigen testing as prescribed", why: "The urine antigen test detects the most common Legionella type." },
      { text: "Give the spouse prophylactic antibiotics", why: "The spouse cannot catch it from the client and needs no prophylaxis." },
      { text: "Admit to an airborne isolation room", why: "Legionella is not airborne between people, so a negative pressure room is not needed." },
    ],
    parameters: [
      { text: "Oxygen saturation", why: "Pneumonia impairs gas exchange, so falling saturation signals worsening." },
      { text: "Serum lipase level", why: "Lipase tracks the pancreas and does not guide pneumonia care." },
      { text: "Level of consciousness", why: "New confusion is part of this illness, and deepening confusion signals worsening." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose control and does not track this illness." },
      { text: "Tuberculin skin test result", why: "A skin test does not track pneumonia caused by Legionella." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [0, 2] },
  },
  {
    ...meta("rn-s31-15", {
      need: "SIPC",
      topic: "Hot water log on a transplant unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "The nurse manager of a transplant unit and the infection preventionist review 4 weeks of the unit's water log. Which finding most raises concern for Legionella growth?",
      tabs: [
        {
          title: "Water Log",
          table: {
            head: ["Measure", "Week 1", "Week 2", "Week 3", "Week 4"],
            rows: [
              ["Hot water storage tank", "62°C (143.6°F)", "61°C (141.8°F)", "62°C (143.6°F)", "61°C (141.8°F)"],
              ["Hot water return line", "53°C (127.4°F)", "50°C (122.0°F)", "46°C (114.8°F)", "42°C (107.6°F)"],
              ["Cold water outlet", "16°C (60.8°F)", "17°C (62.6°F)", "16°C (60.8°F)", "17°C (62.6°F)"],
              ["Chlorine residual", "Detectable", "Detectable", "Detectable", "Detectable"],
            ],
          },
        },
      ],
      rationale:
        "The hot water return line fell from 53°C to 42°C over 4 weeks. It is now below the floor for circulating hot water and inside the range where Legionella grows best. Transplant recipients are at high risk of severe disease. The storage tank stays above 60°C. Cold water stays below the growth range. A detectable chlorine residual is the goal.",
      refs: ["Store hot water above 60°C (140°F) and keep circulating hot water at or above 49°C (120°F). Legionella grows best between 25°C (77°F) and 45°C (113°F)."],
      sources: [LEG_WATER],
    }),
    kind: "mc",
    options: [
      { text: "Falling return line temperature", why: "The return line fell from 53°C to 42°C, below 49°C and inside the 25°C to 45°C growth range." },
      { text: "Storage tank held at 61 to 62°C", why: "Storage above 60°C is the target and limits growth." },
      { text: "Cold outlet staying near 16 to 17°C", why: "Cold water below 25°C stays under the favorable range." },
      { text: "Chlorine residual detectable each week", why: "A detectable disinfectant residual is the target for municipal water." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s31-16", {
      need: "SIPC",
      topic: "Rinsing a nebulizer during a Legionella cluster",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "Two clients on a stem cell transplant unit were diagnosed with Legionnaires disease this week. Testing of the building water is under way. The nurse prepares to rinse a client's small-volume nebulizer between treatments. Which water should the nurse use?",
      rationale:
        "Legionella lives in building water and spreads by aerosol or aspiration. A nebulizer turns any water left in it into an aerosol that reaches the lungs. Use of respiratory therapy equipment is a risk factor. CDC guidance calls for rinsing nebulizers with sterile water between treatments. Tap water, flushed tap water and bottled drinking water are not sterile.",
      sources: [TABLAN, LEG_CLIN],
    }),
    kind: "mc",
    options: [
      { text: "Tap water from the room sink", why: "Tap water on this unit may carry Legionella from the building plumbing." },
      { text: "Tap water run for 2 minutes first", why: "Running a tap does not make the water sterile or remove bacteria from pipe biofilm." },
      { text: "Sterile water", why: "Sterile water leaves no organisms in the device to be aerosolized at the next treatment." },
      { text: "Bottled drinking water", why: "Bottled drinking water is not sterile. Sterile water is used for respiratory equipment." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s31-17", {
      need: "SIPC",
      topic: "Sequence for flexible endoscope reprocessing",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A colonoscopy has just ended. The nurse begins reprocessing the flexible endoscope. Place the steps in order.",
      rationale:
        "Precleaning at the point of use keeps soil from drying in the channels. The leak test comes before manual cleaning and before the scope goes into cleaning solution. Manual brushing then removes soil so disinfectant can reach every surface. High-level disinfection follows cleaning. After rinsing, the channels are flushed with alcohol and dried with air. Scopes are not stored in shipment cases.",
      sources: [ENDO_POLICY],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Leak test the endoscope", why: "Leak testing comes before the scope is placed in cleaning solution." },
      { text: "Preclean at the point of use", why: "Precleaning right after the procedure stops soil from drying in the channels." },
      { text: "Brush the channels in detergent", why: "Manual cleaning removes soil so disinfectant can reach the surfaces." },
      { text: "High-level disinfect the endoscope", why: "Disinfection works only on a scope that has already been cleaned." },
      { text: "Flush with alcohol and dry with air", why: "Drying after the final rinse stops waterborne organisms from growing." },
      { text: "Soak in disinfectant before brushing", why: "Disinfectant cannot reach surfaces covered by soil, so cleaning comes first." },
      { text: "Store it coiled in its shipping case", why: "Flexible endoscopes are not stored in their original shipment cases." },
    ],
    correct: [1, 0, 2, 3, 4],
  },
  {
    ...meta("rn-s31-18", {
      need: "SIPC",
      topic: "Failed leak test on a flexible scope",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "During reprocessing of a flexible bronchoscope, the nurse pressurizes it for the leak test. A steady stream of bubbles rises from the bending section. What should the nurse do?",
      rationale:
        "A steady stream of bubbles marks a leak. A leak lets fluid enter the scope, causes more damage and can prevent disinfection of every surface. A scope that fails a leak test is removed from service and sent for repair or replacement. Cleaning it or running it through the reprocessor as usual does not make it safe to use.",
      sources: [ENDO_POLICY],
    }),
    kind: "mc",
    options: [
      { text: "Continue manual cleaning and note the leak", why: "Immersing a leaking scope lets fluid inside and leaves surfaces that disinfectant cannot reach." },
      { text: "Remove the scope from service for repair", why: "A scope that fails a leak test is taken out of use and sent for repair or replacement." },
      { text: "Send it through the automated reprocessor", why: "Automated reprocessing does not fix the leak or make the scope safe." },
      { text: "Repeat the test after high-level disinfection", why: "The leak test comes before cleaning, and disinfecting a leaking scope can damage it further." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s31-19", {
      need: "SIPC",
      topic: "Holding used instruments before transport",
      version: 2,
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A minor surgical procedure in a clinic has ended. The used instruments will not reach the sterile processing department for 3 hours. What should the nurse do with the instruments?",
      rationale:
        "Blood and tissue that dry on instruments are hard to remove and let biofilm form. Cleaning must succeed before sterilization can work. Instruments are kept moist so soil does not dry before cleaning. An enzymatic foam or gel does this without a pool of liquid. Saline is corrosive and can pit and rust instruments. Open basins of liquid spill during transport.",
      sources: [DISINFECTION, AORN_CLEAN],
    }),
    kind: "mc",
    options: [
      { text: "Rinse them in 0.9% sodium chloride", why: "Saline is corrosive and can rust and pit instrument surfaces." },
      { text: "Let them air dry on the tray", why: "Dried blood and tissue are harder to remove and allow biofilm to form." },
      { text: "Soak them in an open basin of water", why: "Open containers of liquid spill and splash during transport." },
      { text: "Spray them with an enzymatic foam", why: "An enzymatic product keeps soil moist and starts breaking it down until cleaning." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s31-20", {
      need: "SIPC",
      topic: "Releasing an implant before the spore test result",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A hip implant was steam sterilized this morning in a load that contained a biological indicator. The result will be ready in 3 hours. The mechanical and chemical indicators passed. The surgeon asks to use the implant now so an elective case can start early. What should the nurse do?",
      rationale:
        "Each load that holds an implant is monitored with a biological indicator. When it is feasible, the implant is held until the result is negative. The case is elective, so waiting is feasible. Mechanical and chemical indicators show that conditions were met. They do not show that spores were killed. A surgeon's request does not replace sterility assurance.",
      sources: [DISINFECTION],
    }),
    kind: "mc",
    options: [
      { text: "Hold the implant until the biological result is negative", why: "Implants are quarantined until the spore test is negative when the case can wait." },
      { text: "Release the implant because the chemical indicator changed", why: "A chemical indicator shows exposure to the process but does not prove sterility." },
      { text: "Release the implant and document the surgeon's request", why: "Documentation does not make the implant sterile. The elective case can wait." },
      { text: "Resterilize the implant in a load with no indicator", why: "Every load with an implant is monitored with a biological indicator." },
    ],
    correct: 0,
  },
];
