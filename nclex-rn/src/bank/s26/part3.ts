import type { Item } from "@/engine/types";
import { AORN, ASHP_HD, CDC_EXPOSURE, HIT, HINKLE, HIV_PEP, ISOLATION, LEHNE, OSHA_BBP, OSHA_GLUT, POTTER, THYROID, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s26-21", {
      need: "SIPC",
      topic: "Working with a glutaraldehyde disinfectant",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse in an endoscopy unit will soak flexible endoscopes in a glutaraldehyde solution for high-level disinfection. Which measures protect the nurse? Select all that apply.",
      rationale:
        "Glutaraldehyde irritates the eyes, skin and airways and can cause asthma and skin rashes. Nitrile or butyl rubber gloves resist it for a full shift. Splashproof goggles or a face shield protect the eyes. A tight lid and local exhaust ventilation keep vapor out of the room air. Latex exam gloves may let the chemical through. A surgical mask does not filter vapor. Skin splashes are washed off with soap and water.",
      sources: [OSHA_GLUT],
    }),
    kind: "sata",
    options: [
      { text: "Wear latex examination gloves", why: "Latex exam gloves may not give enough protection against glutaraldehyde." },
      { text: "Wear nitrile or butyl rubber gloves", why: "These materials resist glutaraldehyde permeation during the task." },
      { text: "Wear splashproof goggles or a face shield", why: "Eye protection prevents splashes of the solution from reaching the eyes." },
      { text: "Wear a surgical mask to block the vapor", why: "A surgical mask does not filter chemical vapor." },
      { text: "Keep the soaking tray under a tight lid", why: "A closed container limits the vapor released into the room." },
      { text: "Use local exhaust ventilation at the tray", why: "Exhaust at the source removes vapor before the nurse breathes it." },
      { text: "Remove skin splashes with alcohol hand rub", why: "Skin contact is washed off with soap and water, not an alcohol product." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s26-22", {
      need: "RRP",
      topic: "Falling platelets on heparin prophylaxis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 67-year-old client had a total knee arthroplasty on day 0 and started subcutaneous heparin for clot prevention that evening. On day 7 the right calf is newly swollen. The nurse reviews the laboratory flow sheet. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Day 0", "Day 3", "Day 6", "Day 7"],
            rows: [
              ["Platelets (/mm3)", "245 000", "228 000", "131 000", "98 000"],
              ["Hemoglobin (g/dL)", "12.8", "11.2", "11.0", "11.1"],
              ["INR", "1.0", "1.1", "1.0", "1.1"],
            ],
          },
        },
      ],
      rationale:
        "The platelet count held near baseline on day 3, then fell from 245 000 to 98 000/mm3 by day 7. That is a fall of more than 50 percent. The steep part of the fall came between day 3 and day 6, which fits the usual onset 5 to 10 days after heparin starts. A new swollen calf suggests a clot, which this immune reaction can cause. The INR stayed at 1.0 to 1.1, which argues against a consumptive coagulopathy. Hemoglobin was steady after day 3, so ongoing blood loss does not explain the fall.",
      refs: ["Heparin-induced thrombocytopenia typically causes a platelet fall of more than 50 percent that begins 5 to 10 days after heparin starts."],
      sources: [HIT, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as a count × 10^9/L. The fall here reads as 245 to 98 × 10^9/L, still a drop of more than 50 percent.",
    }),
    kind: "mc",
    options: [
      { text: "Expected drop after surgery", why: "A drop from surgery shows in the first days and recovers. Here the count fell late." },
      { text: "Disseminated intravascular coagulation", why: "This would lengthen clotting times. The INR stayed at 1.0 to 1.1." },
      { text: "Ongoing postoperative blood loss", why: "Hemoglobin held steady from day 3 to day 7, so blood loss does not fit." },
      { text: "Heparin-induced thrombocytopenia", why: "A fall of more than 50 percent from 245 000 to 98 000/mm3 on heparin fits this reaction." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-23", {
      need: "SIPC",
      topic: "Hazardous drug dose that arrives leaking",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse receives a sealed transport bag from the pharmacy that holds an IV bag of an antineoplastic drug. Through the plastic, the nurse sees fluid pooled in the bottom of the transport bag. What should the nurse do?",
      rationale:
        "A hazardous drug dose is inspected while it is still inside its sealed transport bag. Fluid in the bag means the dose has leaked. The sealed bag now contains the spill. The nurse keeps it closed, puts on spill protection and follows the spill procedure, then tells the pharmacy. Opening, wiping or rinsing the bag spreads drug residue. A dose that has leaked is not given.",
      sources: [ASHP_HD],
    }),
    kind: "mc",
    options: [
      { text: "Open the transport bag and wipe the IV bag", why: "Opening the bag releases the leaked drug onto the nurse and the room." },
      { text: "Hang the dose if the IV bag looks intact", why: "Pooled fluid shows a leak. A leaking dose is not given." },
      { text: "Keep it sealed and follow the spill procedure", why: "The sealed bag contains the leak, and the spill procedure protects staff." },
      { text: "Rinse the outside of the bag in the sink", why: "Rinsing spreads drug residue into the sink and onto the nurse." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-24", {
      need: "SIPC",
      topic: "Sterile zones of a surgical gown",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse scrubs in to assist with a sterile procedure and puts on a sterile gown and sterile gloves. Which two areas of the gown are considered sterile? Select two.",
      rationale:
        "Only the parts of a gown the wearer can see and keep in front of the body are treated as sterile. The front is sterile from the chest to the level of the sterile field. The sleeves are sterile from 2 inches above the elbow to the cuff. The back, the neckline, the shoulders and the underarms cannot be watched or rub against other surfaces. Anything below the level of the field is out of sight.",
      sources: [POTTER, AORN],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Back of the gown at the waist", why: "The wearer cannot see the back, so it is not considered sterile." },
      { text: "Front from the chest to table level", why: "The front from chest to the level of the field stays in view and is sterile." },
      { text: "Neckline and shoulder seams", why: "These areas rub against the body and head and are not a sterile barrier." },
      { text: "Front below the table level", why: "Areas below the sterile field are out of view and are not sterile." },
      { text: "Sleeves from above elbow to cuff", why: "Sleeves are sterile from 2 inches above the elbow down to the cuff." },
      { text: "Underarm areas of the sleeves", why: "The underarms are friction areas and are not considered sterile." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s26-25", {
      need: "RRP",
      topic: "TSH after starting thyroid replacement",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client started levothyroxine 88 mcg daily 8 weeks ago for hypothyroidism. The client takes the tablet with breakfast and a calcium supplement. Today TSH is 9.6 mIU/L. The laboratory TSH reference range is 0.4 to 4.2 mIU/L. How should the nurse interpret this result?",
      rationale:
        "The pituitary raises TSH when thyroid hormone is low. A TSH of 9.6 mIU/L is above the upper limit of 4.2 mIU/L. The replacement is not yet enough. Taking the tablet with food and calcium lowers its absorption. The nurse reviews how the client takes it and reports the result. A dose that is too high would push TSH below the range.",
      sources: [THYROID, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "The dose is more than the client needs", why: "Excess thyroid hormone suppresses TSH. This TSH is high, not low." },
      { text: "The result shows the target has been met", why: "The target is a TSH inside the range. A value of 9.6 mIU/L is above it." },
      { text: "The thyroid gland has started to recover", why: "Recovery of the gland would lower TSH. This value is still high." },
      { text: "Replacement is not yet controlling it", why: "A TSH above 4.2 mIU/L shows the pituitary still senses too little hormone." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-26", {
      need: "SIPC",
      topic: "Splash of bloody fluid into the eye",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "While the nurse empties a urinary drainage bag that holds visibly bloody urine, some urine splashes into the nurse's left eye. The nurse is not wearing eye protection. What should the nurse do first?",
      rationale:
        "Urine with visible blood can carry bloodborne pathogens. The first step after a splash to the eye is to irrigate it with clean water, saline or a sterile irrigant. Quick flushing lowers the amount of fluid that stays on the mucous membrane. The nurse then reports the exposure for evaluation. Alcohol injures the eye. A dry pad holds the fluid against the eye.",
      sources: [CDC_EXPOSURE, OSHA_BBP],
    }),
    kind: "mc",
    options: [
      { text: "Report to occupational health", why: "Reporting comes right after first aid. Flushing the eye cannot wait." },
      { text: "Flush the eye with clean water or saline", why: "Irrigation removes the fluid from the eye before more can be absorbed." },
      { text: "Wipe the eye with an alcohol pad", why: "Alcohol damages the eye surface and is not used for eye exposures." },
      { text: "Cover the eye with a dry gauze pad", why: "Covering the eye keeps the splashed fluid in contact with it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s26-27", {
      need: "SIPC",
      topic: "Checking a colleague's hazardous infusion technique",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse observes a new graduate nurse give an IV infusion of an antineoplastic drug. Click to highlight the actions that need correction.",
      rationale:
        "Hazardous drug work is done below eye level so a leak cannot drip into the face. Tubing stays attached to the empty bag, and both go into hazardous waste together. Pulling the spike out lets drug left in the tubing leak. A gown worn during administration stays in the care area and comes off when the nurse leaves. Double chemotherapy gloves, a coated gown, an absorbent pad, a closed-system device and soap-and-water hand washing are all correct.",
      sources: [ASHP_HD],
    }),
    kind: "highlight",
    passage:
      "[[Put on two pairs of chemotherapy gloves and a coated gown]]. [[Checked the dose inside the sealed transport bag]]. [[Placed a plastic-backed pad under the connection]]. [[Held the bag above eye level to spike it]]. [[Connected the line with a closed-system device]]. [[Pulled the tubing out of the empty bag before discarding it]]. [[Wore the same gown to the nurses' station]]. [[Washed hands with soap and water after removing gloves]].",
    spans: [
      { text: "Put on two pairs of chemotherapy gloves and a coated gown", why: "Double tested gloves and a coated gown are the protection required for IV antineoplastic drugs." },
      { text: "Checked the dose inside the sealed transport bag", why: "Inspecting the dose before opening the bag is correct." },
      { text: "Placed a plastic-backed pad under the connection", why: "The pad catches drips and protects the client's skin." },
      { text: "Held the bag above eye level to spike it", why: "Working above eye level lets a leak drip toward the face. The work stays below eye level." },
      { text: "Connected the line with a closed-system device", why: "A closed-system device limits leaks and aerosols at the connection." },
      { text: "Pulled the tubing out of the empty bag before discarding it", why: "Removing the spike lets residual drug leak. The bag and tubing are discarded together." },
      { text: "Wore the same gown to the nurses' station", why: "A gown used for hazardous drugs carries residue and is removed before leaving the care area." },
      { text: "Washed hands with soap and water after removing gloves", why: "Soap and water after glove removal is correct." },
    ],
    correct: [3, 5, 6],
  },
  {
    ...meta("rn-s26-28", {
      need: "RRP",
      topic: "Laboratory results in suspected digoxin toxicity",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with heart failure takes furosemide 40 mg and digoxin 0.125 mg daily. The client reports nausea and seeing yellow halos around lights. The laboratory ranges are potassium 3.5 to 5.0 mEq/L, magnesium 1.7 mg/dL (0.70 mmol/L) to 2.2 mg/dL (0.91 mmol/L) and digoxin 0.5 to 2.0 ng/mL. Click to highlight the results that need follow-up.",
      rationale:
        "The digoxin level of 2.6 ng/mL is above the upper limit of 2.0 ng/mL. Nausea and yellow halos are signs of digoxin toxicity. Furosemide causes loss of potassium and magnesium. The potassium of 3.1 mEq/L and the magnesium of 1.4 mg/dL are both low. Low levels of either raise the risk of digoxin-induced dysrhythmias. Sodium, creatinine, glucose and calcium are within usual ranges.",
      sources: [LEHNE, HINKLE, { body: "University Health Network Laboratory Medicine Program", work: "Lab Dictionary: Digoxin", year: 2026, url: "https://forms.uhn.ca/LabDictionary/Public/View?lid=36" }],
      canada: "Canadian labs report digoxin in nmol/L and potassium in mmol/L. A level of 2.6 ng/mL is about 3.3 nmol/L, well above the University Health Network therapeutic range of 0.6 to 1.2 nmol/L.",
    }),
    kind: "highlight",
    passage:
      "[[Sodium 138 mEq/L]] (138 mmol/L). [[Potassium 3.1 mEq/L]] (3.1 mmol/L). [[Magnesium 1.4 mg/dL (0.58 mmol/L)]]. [[Creatinine 1.0 mg/dL (88 micromol/L)]]. [[Glucose 96 mg/dL (5.3 mmol/L)]]. [[Calcium 9.2 mg/dL (2.30 mmol/L)]]. [[Digoxin 2.6 ng/mL]].",
    spans: [
      { text: "Sodium 138 mEq/L", why: "A sodium of 138 mEq/L is in the usual range." },
      { text: "Potassium 3.1 mEq/L", why: "Potassium below 3.5 mEq/L makes digoxin more toxic to the heart." },
      { text: "Magnesium 1.4 mg/dL (0.58 mmol/L)", why: "Magnesium below 1.7 mg/dL also raises the risk of digoxin dysrhythmias." },
      { text: "Creatinine 1.0 mg/dL (88 micromol/L)", why: "A creatinine of 1.0 mg/dL shows normal kidney clearance of digoxin." },
      { text: "Glucose 96 mg/dL (5.3 mmol/L)", why: "A glucose of 96 mg/dL is in the usual range." },
      { text: "Calcium 9.2 mg/dL (2.30 mmol/L)", why: "A calcium of 9.2 mg/dL is in the usual range." },
      { text: "Digoxin 2.6 ng/mL", why: "A level above 2.0 ng/mL with nausea and halos points to toxicity." },
    ],
    correct: [1, 2, 6],
  },
  {
    ...meta("rn-s26-29", {
      need: "SIPC",
      topic: "Precautions for a client with HIV infection",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client with HIV infection is admitted for repair of a fractured wrist. The client has no cough, rash or diarrhea. Which precautions should the nurse use? Select all that apply.",
      rationale:
        "HIV spreads through blood and certain body fluids, not through air or casual contact. Standard precautions are enough. The nurse cleans hands before and after care. Gloves are worn for contact with blood. Face protection is worn when splashes are likely. A negative-pressure room, a gown for every entry, disposable dishes and a mask for the client add nothing here.",
      sources: [ISOLATION],
    }),
    kind: "sata",
    options: [
      { text: "Private negative-pressure room", why: "Negative pressure is for airborne infections. HIV does not spread through the air." },
      { text: "Gloves when drawing blood", why: "Gloves prevent contact with blood, the main route of HIV spread." },
      { text: "Gown and gloves for every room entry", why: "Contact precautions are not needed. A gown is worn only when soiling is expected." },
      { text: "Hand hygiene before and after care", why: "Hand hygiene is part of standard precautions for every client." },
      { text: "Disposable meal trays and utensils", why: "HIV does not spread on dishes. Routine dishwashing is enough." },
      { text: "Face shield when splashes are likely", why: "Face protection guards the eyes, nose and mouth from blood splashes." },
      { text: "Mask for the client in the hallway", why: "The client has no respiratory infection, so a mask adds nothing." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s26-30", {
      need: "SIPC",
      topic: "Timing of HIV prophylaxis after a needlestick",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse has a deep needlestick from a used hollow-bore needle. The source client has HIV infection with a detectable viral load. The nurse has washed the site with soap and water and reported the injury. When should HIV post-exposure prophylaxis start?",
      rationale:
        "A deep injury from a hollow-bore needle with blood from a source who has a detectable viral load is a high-risk exposure. Prophylaxis works best when it starts early. It begins as soon as possible and up to 72 hours after the exposure. The first dose is not delayed for the nurse's baseline test or the source's viral load. Waiting for symptoms defeats the purpose of prevention.",
      refs: ["HIV post-exposure prophylaxis starts as soon as possible and up to 72 hours after an exposure."],
      sources: [HIV_PEP],
    }),
    kind: "mc",
    options: [
      { text: "As soon as possible after the exposure", why: "Early prophylaxis gives the best chance of blocking infection." },
      { text: "After the nurse's baseline HIV test result", why: "The baseline test is drawn, but the first dose does not wait for its result." },
      { text: "After the source's viral load test result", why: "The source's status is already known. Waiting only delays protection." },
      { text: "Within 7 days if symptoms of illness appear", why: "Prophylaxis prevents infection. Waiting for symptoms is too late." },
    ],
    correct: 0,
  },
];
