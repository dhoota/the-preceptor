import type { Item } from "@/engine/types";
import { ACR_MR, BOYCE, NIOSH_HD, ONS_HD, OSHA_WPV, POTTER, SIEGEL, START, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s06-21", {
      topic: "First step after a medication error",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "At 1000 the nurse realizes that a client received metoprolol 50 mg at 0900 instead of the prescribed 25 mg. What should the nurse do first?",
      rationale:
        "The client received twice the prescribed dose of a beta blocker. The first step is to check the client for its effects, so the nurse measures heart rate and BP. The nurse then notifies the primary health care provider with those findings. The incident report and pharmacy notice follow. Reporting first delays finding bradycardia or hypotension.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Complete an incident report", why: "The report is required but comes after the client is assessed and the provider is told." },
      { text: "Notify the primary health care provider", why: "The provider is notified next, with current vital signs to report." },
      { text: "Assess the client's heart rate and BP", why: "Client safety comes first. A double dose can slow the heart and lower the BP." },
      { text: "Report the error to the pharmacy", why: "Pharmacy review supports system learning but does not protect the client now." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-22", {
      topic: "Precautions for C. difficile",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with frequent loose stools has a positive toxin test for Clostridioides difficile. Which actions should the nurse take? Select all that apply.",
      rationale:
        "C. difficile spreads by contact and forms spores. Gown and gloves block spread from the client and room. Soap and water remove spores from the hands, and alcohol does not kill them. Dedicated equipment stays in the room. A bleach-based product is used when spores persist on surfaces. Shared electronic thermometers have spread this organism. The organism is not airborne, so an N95 respirator is not needed.",
      sources: [SIEGEL, BOYCE],
    }),
    kind: "sata",
    options: [
      { text: "Wear a gown and gloves on room entry", why: "Contact precautions block spread from the client and room surfaces." },
      { text: "Clean hands with alcohol rub after care", why: "Alcohol does not kill spores. Soap and water are preferred." },
      { text: "Wash hands with soap and water after care", why: "Washing removes spores from the hands mechanically." },
      { text: "Use the unit's shared electronic thermometer", why: "Shared electronic thermometers have spread C. difficile between clients." },
      { text: "Keep a dedicated stethoscope in the room", why: "Dedicated equipment stops spread on shared items." },
      { text: "Clean surfaces with a bleach-based product", why: "Hypochlorite products act against spores on surfaces." },
      { text: "Wear an N95 respirator on room entry", why: "C. difficile is not airborne, so a respirator adds nothing." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s06-23", {
      topic: "Charting after a fall",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A client fell in the bathroom. The nurse assessed the client, notified the primary health care provider and completed an incident report. Which entry should the nurse write in the client's medical record?",
      rationale:
        "The medical record holds objective facts: when and where the client was found, what the client said and the assessment. The incident report is a separate quality document. Mentioning it in the chart can remove its protected status. Blaming staff and labeling the client are opinions, not facts, and do not belong in the record.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Incident report completed and sent to risk management.\"", why: "The incident report is not mentioned in the medical record." },
      { text: "\"Found on bathroom floor at 1415. States slipped. No injury seen.\"", why: "This entry records objective facts, the client's words and the assessment." },
      { text: "\"Fell because staff left the call light out of reach.\"", why: "Blame and speculation do not belong in the medical record." },
      { text: "\"Client careless and clumsy, fell in the bathroom.\"", why: "Labels are judgments, not objective findings." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-24", {
      topic: "Mass casualty triage",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "After a bus crash, the nurse helps triage adult victims at the scene using the START system. Drag the triage category that fits each victim.",
      rationale:
        "In START, anyone who can walk is tagged minor. A victim who cannot walk and breathes more than 30 times a minute is tagged immediate. A victim who cannot walk but breathes under 30/minute, has a radial pulse and follows commands is tagged delayed. Expectant is kept for a victim who does not breathe after the airway is opened.",
      refs: ["START tags a non-walking victim immediate when respirations exceed 30/minute, the radial pulse is absent or commands are not followed."],
      sources: [START],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "Walks to the aid station with a cut on the forearm",
      "Cannot walk. Respirations 34/minute",
      "Cannot walk. Respirations 18/minute, radial pulse present, follows commands",
    ],
    tokens: [
      { text: "Delayed (yellow)", why: "Delayed fits the victim who cannot walk but has normal breathing, pulse and mental status." },
      { text: "Expectant (black)", why: "Expectant is for a victim not breathing after the airway is opened. No victim here fits." },
      { text: "Minor (green)", why: "A victim who can walk is tagged minor in the first sort." },
      { text: "Immediate (red)", why: "Respirations over 30/minute in a victim who cannot walk mean immediate care." },
    ],
    correct: [2, 3, 0],
  },
  {
    ...meta("rn-s06-25", {
      topic: "Approaching an agitated client",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "In the emergency department, a client shouts, paces and clenches the fists after a long wait. The nurse goes into the room to speak with the client. Which action best protects the nurse's safety?",
      rationale:
        "Staff facing a client showing warning signs of aggression keep an open route out of the room. A closed door, arm's-length contact and entering alone all make escape or help harder. The nurse speaks calmly, keeps a safe distance and makes sure others know where the nurse is.",
      sources: [OSHA_WPV],
    }),
    kind: "mc",
    options: [
      { text: "Close the door to give the client privacy", why: "A closed door cuts off the exit and stops others from seeing or hearing trouble." },
      { text: "Stand within arm's reach to show trust", why: "Standing this close lets the client strike or grab the nurse." },
      { text: "Enter alone so the client feels less crowded", why: "Going in alone removes backup. Colleagues should know and stay close." },
      { text: "Keep a clear path to the room exit", why: "An open exit lets the nurse leave at once if the client becomes violent." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s06-26", {
      topic: "Damaged electrical equipment",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse notices that the power cord of a client's infusion pump is frayed near the plug. The pump is running normally. What should the nurse do?",
      rationale:
        "A frayed cord can shock the client or staff or start a fire. The nurse replaces the pump and removes the damaged one from use. The damaged pump is labeled and sent to biomedical engineering for repair. Tape does not make a cord safe. Changing outlets does not fix the cord. Continuing to use it keeps the hazard in place.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Wrap the frayed area with tape", why: "Tape does not restore the insulation and leaves a shock hazard." },
      { text: "Keep using the pump until the bag ends", why: "A damaged cord is a hazard now, whatever the pump display shows." },
      { text: "Plug the pump into a different outlet", why: "The fault is in the cord. A new outlet does not remove it." },
      { text: "Swap the pump and tag it for repair", why: "Removing and labeling damaged equipment stops others from using it." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s06-27", {
      topic: "Giving an IV hazardous drug",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to hang an IV infusion of a cytotoxic chemotherapy drug that the pharmacy prepared. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Staff who give hazardous drugs wear two pairs of chemotherapy-tested gloves and a single-use gown tested for these drugs. A closed-system transfer device limits leaks and aerosols when connecting. Tubing is primed with a fluid that has no drug, in the pharmacy or before the drug is added, never with the drug at the bedside. A surgical mask does not filter drug vapor. Used tubing goes into hazardous drug waste.",
      sources: [ONS_HD, NIOSH_HD],
    }),
    kind: "sata",
    options: [
      { text: "Prime the tubing with the drug at the bedside", why: "Priming with the drug at the bedside risks spray and spills. Tubing is primed without the drug." },
      { text: "Wear a surgical mask to block drug vapors", why: "A surgical mask does not filter vapors. It is not the protection needed." },
      { text: "Wear two pairs of chemotherapy gloves", why: "Double chemotherapy-tested gloves lower skin exposure to the drug." },
      { text: "Discard the used tubing in regular trash", why: "Tubing that held a hazardous drug goes into hazardous drug waste." },
      { text: "Wear a single-use chemotherapy gown", why: "A gown tested for hazardous drugs protects the skin and clothing." },
      { text: "Connect with a closed-system transfer device", why: "A closed system limits leaks and aerosols during connection." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s06-28", {
      topic: "Screening before an MRI",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is scheduled for an MRI of the brain. The nurse completes the safety screening form with the client. Which two findings must the nurse report to the MRI team before the scan? Select two.",
      rationale:
        "A pacemaker is an implanted electronic device that the magnet can disturb, so the team checks its make and conditions. Years of welding can leave metal fragments in the eyes, which the magnet can move. Modern dental fillings do not pose this risk. Metformin concerns relate to iodinated contrast for CT. Shellfish allergy does not predict a reaction to MRI contrast. A cotton gown has no metal.",
      sources: [ACR_MR],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Worked as a welder for 20 years", why: "Welding can leave metal fragments in the eye that the magnet can move." },
      { text: "Has an implanted cardiac pacemaker", why: "An implanted device needs review before the client enters the scanner room." },
      { text: "Had a dental filling last year", why: "Dental fillings do not pose a magnet hazard for MRI." },
      { text: "Takes metformin for type 2 diabetes", why: "Metformin concerns relate to iodinated contrast for CT, not MRI." },
      { text: "Has an allergy to shellfish", why: "Shellfish allergy does not predict a reaction to MRI contrast." },
      { text: "Wears a cotton hospital gown", why: "A cotton gown has no metal and is the right clothing for the scan." },
    ],
    correct: [0, 1],
  },
  {
    ...meta("rn-s06-29", {
      topic: "Precautions for disseminated zoster",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client receiving chemotherapy for lymphoma develops a band of vesicles on the right chest. Two days later new vesicles appear on the back, both arms and both legs. Which precautions should the nurse implement?",
      rationale:
        "Vesicles that spread beyond one band in an immunocompromised client point to disseminated zoster. Disseminated zoster spreads like varicella, through the air and by contact with lesions. Airborne and contact precautions stay in place for the duration of illness. Standard precautions suit localized zoster in a client with normal immunity. Droplet precautions do not stop airborne spread.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Airborne and contact precautions", why: "Disseminated zoster spreads through the air and by contact with lesions." },
      { text: "Standard precautions with covered lesions", why: "This suits localized zoster in a client with normal immunity, not spread lesions." },
      { text: "Droplet and contact precautions", why: "Droplet precautions do not protect against airborne spread." },
      { text: "Contact precautions alone", why: "Contact precautions alone miss the airborne route." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-30", {
      topic: "Staff assignment for measles",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A child with measles is admitted to an airborne infection isolation room. Four nurses are available. Which nurse should the charge nurse assign to the child?",
      rationale:
        "Staff without evidence of immunity should not enter the room when immune staff are available. Written records of two doses of measles vaccine count as evidence of immunity. Recalling the illness is not evidence. One dose given last week does not yet count. A pregnant nurse with unknown immunity is at risk. Every nurse who enters still wears a fit-tested N95 respirator.",
      sources: [SIEGEL, { body: "National Advisory Committee on Immunization. Public Health Agency of Canada", work: "Immunization of Workers. Canadian Immunization Guide, Part 3", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-3-vaccination-specific-populations/page-11-immunization-workers.html" }],
      canada: "The Canadian Immunization Guide counts 2 documented doses of measles vaccine, lab evidence of immunity or lab-confirmed measles as immunity in health care workers. Birth year does not count for them.",
    }),
    kind: "mc",
    options: [
      { text: "A nurse who recalls having measles as a child", why: "Recall of past illness is not accepted as evidence of immunity." },
      { text: "A nurse who is pregnant with unknown immunity", why: "A susceptible pregnant nurse faces harm from exposure and should not be assigned." },
      { text: "A nurse who got one measles vaccine dose last week", why: "One recent dose is not yet evidence of immunity." },
      { text: "A nurse with records of two measles vaccine doses", why: "Documented two-dose vaccination is accepted evidence of immunity." },
    ],
    correct: 3,
  },
];
