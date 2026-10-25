import type { Item } from "@/engine/types";
import { ANA_SPHM, ASHP_SHORTAGE, ASPEN_EN, BEAUCHAMP, LASER, POTTER, WATERS, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s30-21", {
      need: "MOC",
      topic: "Weekly supply report during a saline shortage",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "During a national shortage, a nurse manager reviews the hospital's weekly supply report for 1 L bags of 0.9% sodium chloride. Based on the trend, which conclusion is correct?",
      tabs: [
        {
          title: "Supply Report",
          table: {
            head: ["Measure", "Week 1", "Week 2", "Week 3", "Week 4"],
            rows: [
              ["Bags used per day", "400", "410", "405", "400"],
              ["Share of order delivered (%)", "100", "60", "40", "30"],
              ["Days of supply on hand", "21", "15", "10", "6"],
            ],
          },
        },
      ],
      rationale:
        "Daily use held near 400 bags from week 1 to week 4. Over the same weeks the share of each order delivered fell from 100% to 30%. Days of supply on hand dropped from 21 to 6. The loss comes from shrinking deliveries, not rising use. That pattern calls for a conservation and allocation plan led by the shortage team.",
      sources: [ASHP_SHORTAGE],
    }),
    kind: "mc",
    options: [
      { text: "Supply is falling because deliveries fell while use held steady", why: "Deliveries fell from 100% to 30% of the order while use stayed near 400 bags a day." },
      { text: "Supply is falling because daily use of bags rose sharply", why: "Use moved only between 400 and 410 bags a day across the 4 weeks." },
      { text: "Supply is stable because daily use has not changed", why: "Days on hand fell from 21 to 6, so supply is not stable." },
      { text: "Supply will recover next week as deliveries return", why: "Deliveries dropped every week, from 60% to 40% to 30%, with no sign of recovery." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-22", {
      need: "MOC",
      topic: "Sharing a scarce chemotherapy drug",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "During a national shortage, an oncology clinic has enough of one IV chemotherapy drug for only some of the clients booked this month. Nurses are asked how doses should be shared. Which approach to allocation should the nurse support?",
      rationale:
        "Justice asks that scarce resources be shared by fair, open criteria applied to everyone alike. Shortage guidance places allocation decisions with a designated committee that uses clinical criteria and communicates them. First come, first served rewards the booking date rather than need. Payment favors wealth. Separate decisions by each nurse lead to unequal and untracked choices.",
      sources: [ASHP_SHORTAGE, BEAUCHAMP],
    }),
    kind: "mc",
    options: [
      { text: "Give doses in the order clients were first booked", why: "Booking order has no link to clinical need or benefit." },
      { text: "Give doses first to clients who can pay a premium", why: "Allocation by ability to pay is unjust and favors wealth." },
      { text: "Let each nurse decide for the clients on their list", why: "Separate bedside choices apply different standards to similar clients." },
      { text: "Apply the shortage committee's criteria to every client", why: "One set of open clinical criteria applied to all is the fair approach." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s30-23", {
      need: "MOC",
      topic: "Helping conserve IV fluid bags",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A hospital is short of IV fluid bags, and the pharmacy asks nurses to help conserve the supply. Which actions by the nurse support the conservation plan? Select all that apply.",
      rationale:
        "Conservation keeps supply for clients who need it without changing care on the nurse's own authority. The nurse asks the prescriber whether a client who drinks well still needs IV fluid. The nurse asks pharmacy about oral forms of current IV drugs. Unneeded bags go back to central supply so stock can be shared. Hoarding, cutting a prescribed volume and reusing an opened bag cause unfair or unsafe care.",
      sources: [ASHP_SHORTAGE, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Ask whether a client who drinks well still needs IV fluid", why: "Stopping fluid that is no longer needed saves bags with a prescriber's agreement." },
      { text: "Keep a private stock of bags in the unit's utility room", why: "Hoarding hides supply from other units and worsens the shortage." },
      { text: "Ask pharmacy about oral forms of current IV drugs", why: "A switch to the oral route can save the bags used to give IV drugs." },
      { text: "Hang half the prescribed volume to stretch the supply", why: "Changing a prescribed volume without a prescription is unsafe." },
      { text: "Return unneeded bags to central supply", why: "Returned stock can be shared across the hospital." },
      { text: "Reuse an opened bag for a second client", why: "An opened bag is single use. Reuse risks contamination." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s30-24", {
      need: "MOC",
      topic: "Dextrose dose from a substitute product",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "During a shortage of dextrose 50% syringes, the pharmacy stocks dextrose 10% in 250 mL bags for the hypoglycemia protocol. A client's glucose is 52 mg/dL (2.9 mmol/L). The protocol calls for dextrose 12.5 g IV. How many mL of dextrose 10% should the nurse infuse?",
      rationale:
        "Dextrose 10% holds 10 g in each 100 mL, which is 0.1 g/mL. Dividing 12.5 g by 0.1 g/mL gives 125 mL. A substitute product in a shortage changes the volume needed for the same dose. The nurse recalculates and has the volume checked rather than reusing the old syringe volume.",
      calc: { expr: "12.5 / (10 / 100)", answer: 125, unit: "mL", round: 0, steps: ["10 / 100 = 0.1", "12.5 / 0.1 = 125"] },
      sources: [ASHP_SHORTAGE],
      canada: "Canadian labs report glucose in mmol/L only, so this value reads 2.9 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "12.5 mL", why: "This treats grams as milliliters and gives one tenth of the dose." },
      { text: "25 mL", why: "This is the dextrose 50% volume for 12.5 g. Dextrose 10% is 5 times more dilute." },
      { text: "125 mL", why: "12.5 g divided by 0.1 g/mL is 125 mL of dextrose 10%." },
      { text: "250 mL", why: "The full bag holds 25 g, which is twice the protocol dose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s30-25", {
      need: "SIPC",
      topic: "Laser goggles that match the wrong wavelength",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A circulating nurse prepares for a procedure with an Nd:YAG laser that emits at 1064 nm. The door sign lists that wavelength. A surgical technologist puts on goggles labeled 532 nm, OD 6+. What should the nurse do?",
      rationale:
        "Laser eyewear protects only at the wavelengths printed on it. Goggles rated for 532 nm give no assured protection at 1064 nm, whatever the optical density. The technologist needs eyewear labeled for the laser in use before it is fired. Standing away from the beam path does not remove the risk from reflected beams. A face shield is not laser eyewear.",
      sources: [LASER],
    }),
    kind: "mc",
    options: [
      { text: "Give the technologist goggles rated for 1064 nm", why: "Eyewear must be rated for the wavelength of the laser in use." },
      { text: "Accept the goggles because OD 6+ is high", why: "Optical density applies only at the labeled wavelength of 532 nm." },
      { text: "Add a face shield over the current goggles", why: "A face shield does not filter laser energy at 1064 nm." },
      { text: "Have the technologist stand outside the beam path", why: "Reflected beams can reach the eye anywhere in the hazard zone." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-26", {
      need: "SIPC",
      topic: "Room setup for a carbon dioxide laser",
      version: 2,
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse prepares a procedure room for removal of a skin lesion with a class 4 carbon dioxide laser. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A class 4 laser is an eye, skin and fire hazard. A warning sign at each entrance stops people entering unprotected. Everyone in the room wears eyewear labeled for the laser's wavelength. Sponges near the field are kept moist and water is kept within reach to put out a flame. Alcohol prep is allowed to dry before draping. Polished instruments reflect the beam, and prescription glasses are not laser eyewear.",
      sources: [LASER],
    }),
    kind: "sata",
    options: [
      { text: "Post the laser warning sign at each entrance", why: "A sign at every entrance warns people before they enter the hazard area." },
      { text: "Drape the site while the alcohol prep is still wet", why: "Wet alcohol prep is a fuel. It is allowed to dry before draping." },
      { text: "Hand out eyewear labeled for the laser's wavelength", why: "Eyewear must match the wavelength of the laser in use." },
      { text: "Offer staff their own prescription glasses as protection", why: "Prescription glasses carry no optical density rating for the laser and have no side shields." },
      { text: "Keep sponges near the treatment site moist", why: "Moist sponges resist ignition by the beam." },
      { text: "Place a polished steel retractor beside the beam path", why: "A polished surface can reflect the beam onto staff or drapes." },
      { text: "Keep a basin of water within reach of the field", why: "Water must be on hand to put out a flame quickly." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s30-27", {
      need: "MOC",
      topic: "Questions that belong with the pharmacist",
      cjmm: "generate",
      process: "communication",
      difficulty: 2,
      stem: "A nurse on a medical unit lists questions that came up during the shift. Which questions should the nurse direct to the pharmacist? Select all that apply.",
      rationale:
        "The pharmacist is the expert on drug compatibility, dosage forms and dose adjustment. Whether two IV antibiotics can share a lumen, whether an extended-release tablet can go down a feeding tube and whether a dose fits kidney function are drug questions. Safe walking is assessed by the nurse and physical therapist. Diet advancement and x-ray findings belong with the primary health care provider.",
      sources: [POTTER, ASPEN_EN],
    }),
    kind: "sata",
    options: [
      { text: "Can two IV antibiotics run together through one lumen?", why: "Compatibility of IV drugs is a pharmacy question." },
      { text: "Can the extended-release tablet go down the feeding tube?", why: "Crushing an extended-release form can dump the dose. The pharmacist can suggest another form." },
      { text: "Is the client safe to walk to the bathroom alone?", why: "Mobility safety is assessed by the nurse and the physical therapist." },
      { text: "Does the new anticoagulant dose fit the creatinine clearance?", why: "Dose adjustment for kidney function is a pharmacy question." },
      { text: "Should the diet advance to soft foods today?", why: "Diet advancement is prescribed by the provider with input from the dietitian." },
      { text: "What does the chest x-ray finding mean for the plan?", why: "Imaging results are interpreted by the primary health care provider." },
    ],
    correct: [0, 1, 3],
  },
  {
    ...meta("rn-s30-28", {
      need: "MOC",
      topic: "Pharmacist advises a lower cefazolin dose",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A pharmacist calls the nurse and says, \"The cefazolin dose is too high for this client's kidney function. Give 1 g instead of 2 g.\" The facility has no protocol that lets pharmacists change doses. The next dose is due in 30 minutes. What should the nurse do?",
      rationale:
        "A pharmacist's advice is valuable, but without a protocol it is not a prescription. The nurse contacts the prescriber before the dose is due so the prescription can be reviewed and changed. Giving 1 g follows no valid prescription. Giving 2 g ignores a credible safety concern. The pharmacist cannot enter a new dose without the authority a protocol would give.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Give 1 g as the pharmacist advised", why: "Without a protocol, a pharmacist's advice does not authorize a dose change." },
      { text: "Give 2 g because that is what is prescribed", why: "Giving the dose ignores a credible warning about kidney function." },
      { text: "Ask the pharmacist to enter the new dose", why: "No protocol here lets the pharmacist change the prescription." },
      { text: "Ask the prescriber to review the prescription now", why: "Only the prescriber can change the dose here, and the call fits before the dose is due." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s30-29", {
      need: "MOC",
      topic: "Loose stools from sweetened liquid drugs",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client receives continuous enteral feeding and several liquid medications through a gastrostomy tube. For 2 days the client has had 6 loose stools a day. A stool test for Clostridioides difficile is negative. Two of the liquid medications list sorbitol on their labels. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Sorbitol in liquid medications draws water into the bowel and is a known cause of diarrhea in tube-fed clients. The C. difficile test is negative. The first step is to ask the pharmacist to review the sorbitol content and suggest other forms. The dietitian may later review the formula. Breathing, mobility and protein content do not explain this pattern.",
      sources: [ASPEN_EN],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The nurse should first ask the {0} to review {1}.",
    blanks: [
      {
        options: [
          { text: "dietitian", why: "The dietitian may adjust the formula later, but the stem points to drug excipients first." },
          { text: "pharmacist", why: "The pharmacist reviews drug excipients and suggests other forms." },
          { text: "respiratory therapist", why: "Diarrhea is not a breathing problem." },
          { text: "physical therapist", why: "Mobility does not explain the loose stools." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "the protein in the formula", why: "Protein content is not linked to the timing of these stools." },
          { text: "the client's activity order", why: "Activity level does not cause this pattern of diarrhea." },
          { text: "the sorbitol in the liquid drugs", why: "Sorbitol is an osmotic laxative found in some liquid medications." },
          { text: "the client's oxygen needs", why: "Oxygen needs are unrelated to the stools." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s30-30", {
      need: "SIPC",
      topic: "Moving a 172 kg client up in bed",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with class III obesity who weighs 172 kg has slid toward the foot of the bed. The client can roll with help but cannot push with the legs. A ceiling lift with a repositioning sling is installed in the room. How should the nurse move the client up in bed?",
      rationale:
        "Manual lifting beyond about 16 kg puts staff at risk of injury, even when several people share the load. A client of 172 kg who cannot help needs a device that carries the weight. The ceiling lift with a repositioning sling moves the client up without staff lifting. A draw sheet still asks staff to drag the full weight. The client cannot push with the legs.",
      refs: ["Waters recommends a maximum of 35 lb (16 kg) for manually lifting a person under ideal conditions. Loads above this call for assistive devices."],
      sources: [WATERS, ANA_SPHM],
    }),
    kind: "mc",
    options: [
      { text: "Pull the client up on a draw sheet with 4 staff", why: "Dragging 172 kg on a sheet exceeds safe manual limits for each worker." },
      { text: "Use the ceiling lift with the repositioning sling", why: "The lift carries the full weight, so no one lifts the client by hand." },
      { text: "Ask the client to push with the heels as staff lift", why: "The client cannot push with the legs, so staff would carry the weight." },
      { text: "Flatten the bed and pull from under the shoulders", why: "Pulling under the shoulders strains staff and the client's shoulder joints." },
    ],
    correct: 1,
  },
];
