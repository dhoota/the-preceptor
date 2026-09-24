import type { Item } from "@/engine/types";
import { AHRQ_FALLS, ANA_SPHM, CMS_RESTRAINT, HINKLE, NCMEC, POTTER, SIEGEL, WATERS, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s06-11", {
      topic: "Room for a stem cell transplant recipient",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is admitted for an allogeneic hematopoietic stem cell transplant. The client will have profound neutropenia for several weeks. Which room should the nurse request for this client?",
      rationale:
        "Allogeneic stem cell transplant recipients need a protective environment. The room has positive air pressure so air flows out to the corridor. Incoming air passes through HEPA filters to remove fungal spores. Negative pressure pulls corridor air in and suits airborne infections, not this client. A shared or standard room gives no air protection.",
      sources: [SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "A negative pressure isolation room", why: "Negative pressure draws corridor air into the room. It protects others from the client, not the client from others." },
      { text: "A positive pressure room with HEPA filters", why: "Positive pressure and HEPA filtration keep spores and pathogens out of the protective environment." },
      { text: "A shared room with a client free of infection", why: "A roommate brings exposure, and the air is not filtered." },
      { text: "A standard private room near the station", why: "A standard room does not filter the air or control airflow." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-12", {
      topic: "Sealed radiation implant precautions",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a sealed radioactive implant placed in the cervix for cancer treatment and will stay in hospital until it is removed. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Exposure falls with less time, more distance and shielding. A private room keeps others away from the source. Staff wear a dosimeter to track dose. Care is grouped to cut time at the bedside. Forceps and a lead container stay in the room so a dislodged source is never touched by hand. Full bed baths add exposure time. Pregnant visitors are not allowed.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Give a full bed bath each morning", why: "A full bath adds close contact time. Bathing is limited while the implant is in place." },
      { text: "Let a pregnant sister visit for an hour", why: "Pregnant visitors are not allowed because the fetus is sensitive to radiation." },
      { text: "Assign the client to a private room", why: "A private room keeps other clients away from the source." },
      { text: "Pick up a dislodged source with gloved hands", why: "Gloves do not shield radiation. A dislodged source is handled with long forceps." },
      { text: "Wear a dosimeter badge in the room", why: "A dosimeter records each staff member's radiation exposure." },
      { text: "Keep forceps and a lead container in the room", why: "These let staff move a dislodged source without touching it and shield it." },
      { text: "Cluster care to limit time at the bedside", why: "Less time near the source means a lower dose." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s06-13", {
      topic: "Priority for single rooms",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "Two private rooms have just become free on a medical unit. Six clients who need contact or standard precautions now share rooms. Which two clients should the nurse move into the private rooms? Select two.",
      rationale:
        "When private rooms are scarce, they go first to clients whose condition makes spread likely. Fecal incontinence with C. difficile spreads spores to hands and surfaces. A wound draining through its dressing spreads MRSA the same way. MRSA carried in the nose of a continent client is contained more easily. Hepatitis C, HIV and an E. coli urinary infection need standard precautions only.",
      sources: [SIEGEL],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Client with MRSA in the nose who is continent", why: "Nasal colonization in a continent client is contained more easily than uncontrolled drainage." },
      { text: "Client with C. difficile and fecal incontinence", why: "Incontinence spreads spores widely, so this client has priority for a private room." },
      { text: "Client with hepatitis C and no bleeding", why: "Hepatitis C spreads by blood. Standard precautions are enough." },
      { text: "Client with MRSA wound draining through the dressing", why: "Uncontained drainage makes spread likely, so this client has priority." },
      { text: "Client with HIV on antiretroviral therapy", why: "HIV spreads by blood and body fluids. Standard precautions are enough." },
      { text: "Client with E. coli urinary tract infection", why: "A contained urinary infection needs standard precautions only." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s06-14", {
      topic: "Keeping a sterile field sterile",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse watches a new graduate nurse set up a sterile field for a central line dressing change. Which action by the new nurse requires the nurse to intervene?",
      rationale:
        "Reaching across a sterile field lets particles fall from the arm and sleeve onto the field, so the field is contaminated. The first flap of a sterile pack opens away from the body. Gauze dropped onto the field without contact stays sterile. A field kept in view and above waist level stays sterile.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Reaches across the field to set down saline", why: "Reaching across the field contaminates it, so the nurse intervenes." },
      { text: "Opens the first flap away from the body", why: "Opening the far flap first keeps the arm from crossing the sterile inner surface." },
      { text: "Drops gauze onto the field without touching it", why: "Dropping items without contact keeps them and the field sterile." },
      { text: "Keeps the field in sight and above the waist", why: "A field below the waist or out of sight is treated as contaminated. This one is kept correctly." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-15", {
      topic: "Fall with a head strike on an anticoagulant",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 80-year-old client taking apixaban for atrial fibrillation is found on the floor beside the bed at 0300. The client says they hit their head on the nightstand. There is a 3 cm bruise on the forehead. The client is alert and oriented and moves all limbs without pain. BP is 148/86 mmHg. Heart rate is 88/minute and irregular. Blood glucose is 112 mg/dL (6.2 mmol/L). Complete the diagram by choosing the condition the client is most at risk for, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A head strike while taking apixaban puts the client at risk of intracranial bleeding, even when the first check is normal. The client is checked for injury before being moved. The provider is notified, since imaging is often needed. Level of consciousness and pupil response track rising pressure in the skull. A fall in level of consciousness is usually the earliest sign. A glucose of 112 mg/dL rules out hypoglycemia. Painless movement of all limbs makes hip fracture less likely.",
      sources: [AHRQ_FALLS, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report glucose in mmol/L only, so a Canadian chart would show 6.2 mmol/L. The Medical Council of Canada lists a random glucose range of 4.0 to 11.0 mmol/L.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Intracranial bleeding", why: "Anticoagulation plus a head strike puts this client at risk of bleeding in the skull." },
      { text: "Fracture of the hip", why: "The client moves all limbs without pain, which makes a fracture less likely." },
      { text: "Low blood glucose", why: "Blood glucose is 112 mg/dL, which is not low." },
      { text: "Acute ischemic stroke", why: "The client is alert and oriented with no focal deficit reported." },
    ],
    actions: [
      { text: "Notify the primary health care provider", why: "A head strike on an anticoagulant needs prompt review and often imaging." },
      { text: "Give the next apixaban dose on time", why: "The dose is held until the provider reviews the client for bleeding." },
      { text: "Check for injury before moving the client", why: "Checking first avoids worsening a hidden spine or limb injury." },
      { text: "Apply a vest restraint in bed", why: "Restraints do not prevent falls and add risk of injury." },
      { text: "Walk the client to check the gait", why: "Walking a client just after a head strike risks a second fall." },
    ],
    parameters: [
      { text: "Serum potassium level", why: "Potassium does not show bleeding in the skull." },
      { text: "Level of consciousness", why: "A falling level of consciousness is an early sign of intracranial bleeding." },
      { text: "Urine specific gravity", why: "Urine concentration does not track a head injury." },
      { text: "Pupil size and reaction", why: "A new unequal or sluggish pupil signals rising pressure in the skull." },
      { text: "Hourly blood glucose", why: "Glucose is normal and does not guide care for a head injury." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s06-16", {
      topic: "Newborn security teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse reviews newborn security measures with a mother on a postpartum unit. Which statement by the mother shows a need for further teaching?",
      rationale:
        "An abductor often poses as staff, so scrubs alone prove nothing. The mother hands the baby only to staff wearing the unit's photo badge. Checking the badge is correct. Keeping the bassinet on the far side of the bed from the door places the mother between the baby and the exit. Calling a nurse before sleeping or showering keeps the baby supervised.",
      sources: [NCMEC],
    }),
    kind: "mc",
    options: [
      { text: "\"I will check that staff wear the unit photo badge.\"", why: "Checking for the unit's photo badge is correct practice." },
      { text: "\"I will let anyone in scrubs take my baby for tests.\"", why: "Abductors often pose as staff. Scrubs are not proof of identity." },
      { text: "\"I will keep the bassinet on the far side of my bed.\"", why: "This places the mother between the infant and the door." },
      { text: "\"I will call the nurse before I sleep or shower.\"", why: "The infant stays under direct watch at all times." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s06-17", {
      topic: "Seizure precautions",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with a history of generalized tonic-clonic seizures is admitted for medication adjustment. Which items should the nurse set up in the room as seizure precautions? Select all that apply.",
      rationale:
        "Suction clears secretions after a seizure. Oxygen supports breathing during the postictal phase. A low bed lowers the risk of injury from a fall. Nothing is placed in the mouth during a seizure, so a tongue blade is not kept. Restraints can cause injury during jerking movements. Oral temperatures risk a bitten thermometer, so another route is used.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "A padded tongue blade at the bedside", why: "Objects in the mouth can break teeth or block the airway." },
      { text: "Wrist restraints ready for use", why: "Restraining a seizing client can cause fractures and soft tissue injury." },
      { text: "Suction equipment at the bedside", why: "Suction clears the airway of secretions after a seizure." },
      { text: "An oral thermometer for temperature", why: "A client may bite an oral thermometer. Another route is safer." },
      { text: "Oxygen equipment at the bedside", why: "Oxygen supports the client if breathing is poor after the seizure." },
      { text: "Bed kept in the lowest position", why: "A low bed reduces injury if the client falls during a seizure." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s06-18", {
      topic: "Choosing a transfer method",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client who weighs 104 kg cannot bear weight on either leg but follows commands. The nurse needs to move the client from the bed to a chair. Which transfer method is safest for the client and staff?",
      rationale:
        "A client who cannot bear weight needs a mechanical lift that carries the full body weight. Manual lifting of this much weight exceeds the safe limit for staff. A pivot transfer and a standing lift both need the client to bear some weight on the legs. Two staff operate the sling lift so the client stays stable.",
      refs: ["Waters recommends a maximum of 35 lb (16 kg) for manually lifting a person. Loads above this call for assistive devices."],
      sources: [WATERS, ANA_SPHM],
    }),
    kind: "mc",
    options: [
      { text: "A two-person lift under the arms", why: "Manual lifting of 104 kg far exceeds the 35 lb (16 kg) limit and can injure the shoulders." },
      { text: "A gait belt pivot with one nurse", why: "A pivot needs the client to bear weight on at least one leg." },
      { text: "A full-body sling lift with two staff", why: "A full-body lift carries all the weight of a client who cannot stand." },
      { text: "A standing lift with one staff member", why: "A standing lift needs partial weight bearing and trunk control." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s06-19", {
      topic: "Circulation checks during wrist restraint",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A client with delirium has a soft restraint on the right wrist to protect a central venous catheter. The nurse reviews the restraint monitoring record. Based on the trend, what should the nurse do first?",
      tabs: [
        {
          title: "Restraint Monitoring",
          table: {
            head: ["Finding", "0800", "1000", "1200", "1400"],
            rows: [
              ["Right hand color", "Pink", "Pink", "Pale", "Pale and cool"],
              ["Right capillary refill (seconds)", "2", "2", "4", "5"],
              ["Right radial pulse", "Strong", "Strong", "Strong", "Weak"],
              ["Client report", "None", "None", "Tingling", "Numb fingers"],
            ],
          },
        },
      ],
      rationale:
        "From 0800 to 1400 the right hand turns pale and cool. Capillary refill slows from 2 to 5 seconds and the radial pulse weakens. Tingling progresses to numbness. The restraint is compressing the wrist and cutting blood flow. The nurse removes it first and then assesses the hand. Elevating the arm or waiting for the next check leaves the compression in place.",
      sources: [CMS_RESTRAINT, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Remove the right wrist restraint", why: "Removing the restraint relieves the compression causing the circulation changes." },
      { text: "Elevate the right arm on a pillow", why: "Elevation does not relieve compression from the restraint." },
      { text: "Recheck the hand at the next check", why: "Waiting lets the compression continue while circulation worsens." },
      { text: "Document the findings as expected", why: "Pallor, slow refill and numbness are not expected with a correctly applied restraint." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s06-20", {
      topic: "Fall risk from orthostatic hypotension",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 78-year-old client takes furosemide and received zolpidem at 2200. At 0200 the client wants to walk to the bathroom alone. BP is 132/78 mmHg lying and 104/64 mmHg standing. The client reports dizziness on standing. Heart rate is 84/minute. The client is alert and oriented. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "BP falls from 132/78 mmHg lying to 104/64 mmHg standing, which meets the definition of orthostatic hypotension. Dizziness on standing, a diuretic and a sedative hypnotic add to the risk. The priority problem is a fall. The lying BP and heart rate of 84/minute are normal and do not show the risk. An alert mental state lowers risk.",
      refs: ["Orthostatic hypotension is a fall in systolic BP of 20 mmHg or more, or diastolic BP of 10 mmHg or more, within 3 minutes of standing."],
      sources: [AHRQ_FALLS, POTTER],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is at highest risk for {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "a fall", why: "Orthostatic hypotension, dizziness and a sedative make a fall the main risk." },
          { text: "fluid volume excess", why: "Furosemide removes fluid. Nothing in the stem suggests excess." },
          { text: "urinary retention", why: "The stem gives no sign of retention, such as a distended bladder or low output." },
          { text: "hypoglycemia", why: "The stem gives no glucose value or signs of low glucose." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "the drop in BP on standing", why: "The fall from 132/78 to 104/64 mmHg on standing reduces blood flow to the brain." },
          { text: "a lying BP of 132/78 mmHg", why: "The lying BP is normal and does not show the risk." },
          { text: "a heart rate of 84/minute", why: "A heart rate of 84/minute is in the normal range." },
          { text: "being alert and oriented", why: "Normal orientation lowers fall risk." },
        ],
        correct: 0,
      },
    ],
  },
];
