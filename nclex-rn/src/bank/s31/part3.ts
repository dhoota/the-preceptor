import type { Item } from "@/engine/types";
import { DISINFECTION, EPI, IDC, ISMP_HIGH, ISMP_PUMP, ISPD, PD_CARD, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s31-21", {
      need: "SIPC",
      topic: "Unchanged indicator inside an instrument tray",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "In the operating room the scrub nurse opens a wrapped instrument tray. The indicator tape on the outer wrapper has changed color. The chemical indicator strip inside the tray has not changed color. What should the nurse do?",
      rationale:
        "The outer tape shows only that the package went through a cycle. The internal indicator shows whether the sterilant reached the contents. An unchanged internal indicator means processing may have failed, so the tray is not used. The nurse sets it aside, opens another sterile tray and reports the tray to sterile processing so the load can be reviewed.",
      sources: [DISINFECTION],
    }),
    kind: "mc",
    options: [
      { text: "Use the tray, since the outer tape changed", why: "Outer tape shows exposure to a cycle but does not show the sterilant reached the contents." },
      { text: "Wipe the instruments with alcohol and use them", why: "Alcohol is not a sterilant for surgical instruments." },
      { text: "Set the tray aside and get another sterile tray", why: "An unchanged internal indicator means the contents may not be sterile." },
      { text: "Use the tray and report it after the case", why: "Reporting later does not protect this client from instruments that may not be sterile." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s31-22", {
      need: "SIPC",
      topic: "Monitoring a steam sterilizer",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "A nurse educator reviews sterilizer monitoring with new operating room staff. Which statements by the staff show correct understanding? Select two.",
      rationale:
        "An air removal test runs daily in an empty prevacuum steam sterilizer. Spore tests monitor steam sterilizers at least weekly, and daily when the sterilizer runs several times a day. Every load that holds an implant also gets a spore test. Chemical indicators show exposure to the process, not sterility, and never replace spore tests. A pack that got wet is contaminated even after it dries.",
      sources: [DISINFECTION],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"A changed tape on the wrapper means the contents are sterile.\"", why: "External tape shows only that the package went through a cycle." },
      { text: "\"An air removal test runs each day in a prevacuum sterilizer.\"", why: "The daily air removal test confirms that air is cleared from the chamber." },
      { text: "\"A pack that got wet is fine to use once it dries.\"", why: "Moisture carries microbes through the wrapper, so a wet pack is contaminated." },
      { text: "\"Spore tests check a steam sterilizer at least weekly.\"", why: "Biological indicators are run at least weekly on steam sterilizers." },
      { text: "\"Chemical indicators can replace spore tests.\"", why: "Chemical indicators are used with biological indicators, not in place of them." },
      { text: "\"Spore tests are needed only for loads with implants.\"", why: "Implant loads are tested, and routine weekly testing covers the sterilizer as well." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s31-23", {
      need: "SIPC",
      topic: "Home care of a peritoneal catheter exit site",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client with a new peritoneal dialysis catheter is learning home exit site care. The exit site has healed. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Hand hygiene comes before every touch of the catheter. The site is washed with antibacterial soap from a pump bottle, using a clean washcloth, then rinsed and dried. Taping or anchoring the catheter limits pulling at the exit site. Redness, swelling, tenderness or drainage is reported. Scabs are left in place. Scissors are kept away from the catheter and tubing.",
      sources: [PD_CARD, ISPD],
    }),
    kind: "sata",
    options: [
      { text: "Wash hands before touching the site", why: "Hand hygiene keeps skin bacteria off the exit site." },
      { text: "Pick off crusts at the exit site", why: "Removing scabs injures the skin and opens a path for bacteria." },
      { text: "Clean the site with antibacterial soap", why: "Antibacterial soap from a pump bottle lowers the bacterial load at the site." },
      { text: "Use scissors to remove old tape", why: "Scissors near the catheter can cut it." },
      { text: "Tape or anchor the catheter to the abdomen", why: "Securing the catheter prevents pulling and trauma at the exit site." },
      { text: "Reuse the same washcloth each day", why: "A clean washcloth each time keeps bacteria off the site." },
      { text: "Report redness, swelling or drainage", why: "These signs can mean an exit site infection that needs prompt treatment." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s31-24", {
      need: "SIPC",
      topic: "Exit site findings at a home dialysis visit",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The home dialysis nurse records findings at a monthly visit with a client on peritoneal dialysis. Click to highlight the findings that need follow-up.",
      rationale:
        "Purulent drainage at the exit site defines an exit site infection. Redness around the site supports it. Tenderness over the tunnel suggests the infection may extend along the catheter. Pulling the catheter on a belt buckle is trauma that raises infection risk and needs review of how it is secured. A small dry crust is part of normal healing. Clear dialysate and a normal temperature do not point to peritonitis.",
      sources: [ISPD, PD_CARD],
    }),
    kind: "highlight",
    passage:
      "[[Yellow drainage on the old dressing]]. [[Skin red for 2 cm around the exit site]]. [[Tender when the tunnel above the exit site is pressed]]. [[Small dry crust at the exit site]]. [[Catheter taped to the abdomen]]. [[Drained dialysate is clear]]. [[Temperature 37.0°C (98.6°F)]]. [[Caught the catheter on a belt buckle 3 days ago]].",
    spans: [
      { text: "Yellow drainage on the old dressing", why: "Purulent drainage at the exit site defines an exit site infection." },
      { text: "Skin red for 2 cm around the exit site", why: "Redness around the exit site supports an infection and needs follow-up." },
      { text: "Tender when the tunnel above the exit site is pressed", why: "Tenderness along the tunnel suggests the infection reaches beyond the exit site." },
      { text: "Small dry crust at the exit site", why: "A small dry crust is part of normal healing and is left in place." },
      { text: "Catheter taped to the abdomen", why: "A secured catheter is expected and limits pulling." },
      { text: "Drained dialysate is clear", why: "Clear dialysate does not suggest peritonitis." },
      { text: "Temperature 37.0°C (98.6°F)", why: "The temperature is normal." },
      { text: "Caught the catheter on a belt buckle 3 days ago", why: "Trauma to the catheter raises infection risk and calls for review of how it is secured." },
    ],
    correct: [0, 1, 2, 7],
  },
  {
    ...meta("rn-s31-25", {
      need: "SIPC",
      topic: "Exit site habits that need correction",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse reviews exit site care with a client who has done peritoneal dialysis at home for 3 months. Which statement by the client needs further teaching?",
      rationale:
        "Powders and lotions are kept off the exit site unless the dialysis team prescribes them. They can irritate the skin and hold moisture and bacteria at the site. Daily checks for redness catch infection early. Hand hygiene comes before touching the site. Loose clothing avoids rubbing and pulling at the catheter.",
      sources: [PD_CARD, ISPD],
    }),
    kind: "mc",
    options: [
      { text: "\"I check the site for redness every day.\"", why: "Daily checks catch early signs of infection." },
      { text: "\"I dust powder on the site to keep it dry.\"", why: "Powders are kept off the exit site unless the dialysis team prescribes them." },
      { text: "\"I wash my hands before I touch the site.\"", why: "Hand hygiene before care lowers the risk of infection." },
      { text: "\"I wear loose clothes over the catheter.\"", why: "Loose clothing avoids rubbing and pulling at the exit site." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s31-26", {
      need: "SIPC",
      topic: "Epidemic curve after a catered lunch",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A group of 40 staff members ate a catered lunch in a hospital conference room at noon on Monday. Over the next 3 days, 30 of them develop diarrhea and fever. The infection preventionist plots the onset times. Which pattern does the curve show?",
      tabs: [
        {
          title: "Onset of Illness",
          table: {
            head: ["Hours after the lunch", "0 to 12", "12 to 24", "24 to 36", "36 to 48", "48 to 60", "60 to 72"],
            rows: [["New cases", "2", "14", "9", "4", "1", "0"]],
          },
        },
      ],
      rationale:
        "All 30 cases began within 72 hours of one shared meal. The curve rises sharply to a single peak at 12 to 24 hours and then tails off. That shape fits a point source, where everyone was exposed at one time. Person-to-person spread gives later waves about one incubation period apart. A continuing source gives a plateau. Thirty cases among 40 diners is far above any background rate.",
      sources: [EPI],
    }),
    kind: "mc",
    options: [
      { text: "Person-to-person spread over several waves", why: "Propagated spread shows successive peaks about one incubation period apart. This curve has one peak." },
      { text: "A continuing source still exposing people", why: "A continuing source keeps producing cases in a plateau. These cases tail off to zero." },
      { text: "Background cases at the expected rate", why: "Thirty of 40 diners ill within 3 days is far above any expected rate." },
      { text: "A single shared exposure at one time", why: "One sharp peak with a tail, all within one incubation period, fits a point source." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s31-27", {
      need: "SIPC",
      topic: "Writing an outbreak case definition",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An infection preventionist investigates a cluster of Serratia marcescens bloodstream infections in a neonatal intensive care unit. A lipid emulsion is one suspected source. Which elements belong in the working case definition? Select all that apply.",
      rationale:
        "A case definition uses simple, objective clinical or laboratory criteria with limits of person, place and time. A blood culture growing the organism is the laboratory criterion. Admission to this unit sets the place and person. A start date sets the time. The definition must not include the exposure being tested, such as the lipid emulsion or a particular caregiver. Death from any cause is not specific to this infection.",
      sources: [EPI],
    }),
    kind: "sata",
    options: [
      { text: "Blood culture growing Serratia marcescens", why: "A positive culture is an objective laboratory criterion for a case." },
      { text: "Received the suspected lipid emulsion", why: "Building the suspected exposure into the definition would bias any test of it." },
      { text: "Admitted to this neonatal unit", why: "Admission to the unit limits cases by person and place." },
      { text: "Cared for by one particular nurse", why: "A caregiver is a possible exposure to be tested, not part of who counts as a case." },
      { text: "Culture collected on or after January 1", why: "A start date limits cases by time." },
      { text: "Death from any cause in the unit", why: "Death from any cause is not specific to this infection." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s31-28", {
      need: "SIPC",
      topic: "Order of steps in an outbreak investigation",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An infection preventionist looks into a possible cluster of Clostridioides difficile infection on a surgical unit. Place the investigation steps in the order they are usually done.",
      rationale:
        "The first question is whether cases exceed the number expected for the unit and season. A working case definition then sets who counts. Systematic case finding uses that definition. The cases are then described by time, place and person, which suggests a hypothesis. The hypothesis is tested last. Control measures can start at any point once a likely source is known. Surveillance continues afterward.",
      sources: [EPI],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Search records for more cases", why: "Case finding uses the case definition, so it comes third." },
      { text: "Compare the count with the usual rate", why: "Comparing observed with expected cases shows whether an outbreak exists." },
      { text: "Test a hypothesis about the source", why: "A hypothesis is tested only after cases are found and described." },
      { text: "Write a working case definition", why: "The definition sets who counts as a case before the search begins." },
      { text: "Plot cases by onset date and room", why: "Describing cases by time and place points toward a hypothesis." },
      { text: "Stop routine surveillance on the unit", why: "Surveillance continues or increases during and after an outbreak." },
      { text: "Publish the final report", why: "Findings are communicated after the investigation, not during these steps." },
    ],
    correct: [1, 3, 0, 4, 2],
  },
  {
    ...meta("rn-s31-29", {
      need: "SIPC",
      topic: "Making a heparin double check independent",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse programs a smart pump for a weight-based heparin infusion. Unit policy requires an independent double check before the infusion starts. Which approach by the second nurse makes the check independent?",
      rationale:
        "An independent check works only if the second nurse does not know what to expect. Reading the pump and bag first, then comparing with the prescription, keeps the check free of bias. Hearing settings read aloud or reviewing the first nurse's math invites agreement. Any calculation is redone separately. A check signed after the pump starts cannot stop an error from reaching the client.",
      sources: [IDC, ISMP_PUMP, ISMP_HIGH],
    }),
    kind: "mc",
    options: [
      { text: "Reading the pump settings before seeing the prescription", why: "Starting from the pump without knowing the expected values exposes errors." },
      { text: "Listening as the first nurse reads each setting aloud", why: "Hearing the expected values biases the second nurse toward agreement." },
      { text: "Reviewing the first nurse's calculation for errors", why: "Seeing the first calculation biases the check. The second nurse calculates separately." },
      { text: "Signing the record after the infusion has started", why: "A check after the start cannot stop an error before it reaches the client." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s31-30", {
      need: "SIPC",
      topic: "Breaks in a double check of insulin",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A charge nurse watches two nurses check an IV insulin infusion before it starts. Which observations show the check was not independent? Select two.",
      rationale:
        "A check is independent only if the first nurse does not share what the second nurse should find. Telling the second nurse the expected rate creates bias. Copying the weight from the first nurse's note repeats any error in it. A separate calculation, tracing the tubing, comparing the label with the prescription and checking identification are all sound parts of the check.",
      sources: [IDC, ISMP_PUMP],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "The second nurse calculated the rate on a separate sheet", why: "A separate calculation keeps the check independent." },
      { text: "The first nurse said, \"It should be 6 units an hour.\"", why: "Stating the expected rate biases the second nurse toward agreement." },
      { text: "The second nurse traced the tubing from bag to client", why: "Tracing the line confirms the pump channel and route." },
      { text: "The second nurse copied the weight from the first nurse's note", why: "Copying the weight carries any error forward instead of checking it." },
      { text: "The second nurse compared the bag label with the prescription", why: "Comparing the label with the prescription verifies drug and concentration." },
      { text: "The second nurse checked the client's identification band", why: "Checking identification confirms the right client." },
    ],
    correct: [1, 3],
  },
];
