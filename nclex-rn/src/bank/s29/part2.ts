import type { Item } from "@/engine/types";
import { ASAM_AWM, ASC_ASSESS, CDC_DIALYSIS, ESRD_EP, ESRD_STAFF, HINKLE, NCCHC_JAILS, NCCHC_REFUSE, NGND, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s29-11", {
      topic: "Insulin refusal by a detainee with capacity",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 44-year-old detainee with type 1 diabetes refuses the morning insulin dose. The detainee is alert and oriented and says, \"I don't trust the jail's insulin.\" Glucose is 212 mg/dL (11.8 mmol/L). A sergeant tells the nurse, \"Inmates don't get to refuse. Hold him down if you have to.\" How should the nurse interpret the situation?",
      rationale:
        "Incarcerated adults keep the right to refuse treatment. The detainee is alert and oriented, which supports capacity to decide. The nurse explores the distrust, explains the risks of missing insulin and documents the counseling and the refusal. The nurse tells the prescriber and offers the dose again later. Treatment is not forced without a court order, and custody staff do not make clinical decisions.",
      sources: [NCCHC_REFUSE, NCCHC_JAILS],
    }),
    kind: "mc",
    options: [
      { text: "Custody staff may approve forced treatment for a detainee who refuses", why: "Treatment is a clinical decision. Custody staff cannot authorize forced care, and force needs a court order." },
      { text: "The refusal is not valid because the detainee is in custody", why: "Custody status does not remove the right to refuse or the capacity to decide." },
      { text: "The nurse may give the dose once officers restrain the detainee", why: "Forcing insulin on an adult with capacity, with no court order, is battery." },
      { text: "The detainee may refuse after the nurse explains the risks", why: "An adult with capacity may refuse care in custody. The nurse counsels and records the refusal." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-12", {
      topic: "Withdrawal worsening beyond what a jail infirmary can manage",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 52-year-old detainee is in the jail infirmary for alcohol withdrawal. Symptom-triggered lorazepam has been given as prescribed. The infirmary cannot provide continuous IV therapy or cardiac monitoring. The nurse reviews the flow sheet. Based on the trend, what should the nurse do?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Time", "0800", "1000", "1200", "1400"],
            rows: [
              ["CIWA-Ar score", "9", "14", "19", "24"],
              ["Heart rate (/minute)", "98", "108", "118", "126"],
              ["BP (mmHg)", "142/88", "150/92", "158/96", "164/100"],
              ["Temperature", "37.4°C (99.3°F)", "37.6°C (99.7°F)", "37.9°C (100.2°F)", "38.2°C (100.8°F)"],
              ["Orientation", "Oriented", "Oriented", "Unsure of the date", "Disoriented to place"],
            ],
          },
        },
      ],
      rationale:
        "From 0800 to 1400 the CIWA-Ar score rises from 9 to 24 despite lorazepam. Heart rate climbs from 98 to 126/minute, temperature reaches 38.2°C and the detainee is now disoriented. A score of 19 or more marks severe withdrawal, and new confusion suggests delirium is starting. The infirmary cannot give continuous IV therapy or monitoring, so the nurse calls the provider to arrange hospital transfer.",
      refs: ["A CIWA-Ar score of 19 or more indicates severe alcohol withdrawal."],
      sources: [ASAM_AWM, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Continue the current plan and repeat the score in 2 hours", why: "The score has climbed at every check despite treatment. Waiting delays care for severe withdrawal." },
      { text: "Ask the officers to check on the detainee every 15 minutes", why: "More frequent observation does not provide the treatment and monitoring this detainee needs." },
      { text: "Call the provider to arrange transfer to the hospital", why: "Severe withdrawal with new confusion needs care the infirmary cannot give." },
      { text: "Move the detainee to a quiet single cell in the infirmary", why: "Low stimulation helps mild withdrawal but does not treat severe withdrawal." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-13", {
      topic: "First client to assess at an outpatient dialysis unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The charge nurse at an outpatient dialysis unit reviews the four clients arriving for the 0600 shift. Which client should the nurse assess first?",
      rationale:
        "Chills and a temperature of 38.9°C in a client with a tunneled catheter suggest a catheter-related bloodstream infection. This can progress to sepsis, so this client is assessed first and the provider is called before the catheter is used. A weight gain of 2.8 kg with ankle edema is managed with the treatment. A strong thrill and bruit are normal. Itching is common in kidney failure and is not urgent.",
      sources: [HINKLE, CDC_DIALYSIS],
    }),
    kind: "mc",
    options: [
      { text: "A client with a tunneled catheter who has chills and a temperature of 38.9°C (102.0°F)", why: "Fever and chills with a dialysis catheter suggest a bloodstream infection that can lead to sepsis." },
      { text: "A client who gained 2.8 kg since the last treatment and has ankle edema", why: "The fluid will be removed during treatment. The stem gives no breathing difficulty." },
      { text: "A client whose fistula has a strong thrill and bruit before cannulation", why: "A strong thrill and bruit show a working fistula." },
      { text: "A client who reports itchy skin on both arms and asks for a moisturizing lotion", why: "Itching is common in kidney failure and can wait." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-14", {
      topic: "Assigning work to dialysis technicians",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The registered nurse in charge of an outpatient dialysis unit works with certified dialysis technicians. Unit policy and state rules allow technicians to cannulate established access. Which tasks may the nurse assign to a technician? Select all that apply.",
      rationale:
        "Technicians are trained and certified for routine dialysis care. Weighing clients, cannulating a mature fistula, taking vital signs during the run and priming the lines are routine tasks within that training. Assessing new chest pain, teaching a new client and deciding the fluid removal goal call for registered nurse assessment, teaching and judgment. The registered nurse stays responsible for the care given.",
      sources: [ESRD_STAFF, NGND],
    }),
    kind: "sata",
    options: [
      { text: "Assess a client who reports chest pain during treatment", why: "New chest pain needs registered nurse assessment." },
      { text: "Weigh a client before treatment and record the weight", why: "Weighing is a routine task with a clear method." },
      { text: "Teach a new client how to care for a fistula at home", why: "Initial teaching is a registered nurse function." },
      { text: "Decide the fluid removal goal for a client with edema", why: "Setting the goal depends on the prescription and nursing assessment." },
      { text: "Cannulate a mature fistula that has been used for months", why: "Policy and state rules allow trained technicians to cannulate established access." },
      { text: "Measure vital signs during the run and report set values", why: "Vital signs with clear reporting limits are routine technician work." },
      { text: "Prime the blood lines before treatment", why: "Machine setup is part of technician training." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s29-15", {
      topic: "Checking a new technician's catheter skills at hire",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A newly hired dialysis technician holds national certification and worked for 3 years at another dialysis company. Today is the technician's first shift on the unit. The technician asks to start connecting clients who have central venous catheters right away. What should the charge nurse do?",
      rationale:
        "Catheter connection carries a high risk of bloodstream infection. CDC advises a competency check for catheter care and access at hire and every 6 to 12 months. Certification and past work do not show competence with this unit's procedure. The charge nurse observes the technician connect a catheter before the technician does it alone. Reading a policy or checking the work afterward does not validate the skill.",
      refs: ["CDC advises competency checks for catheter care and vascular access at hire and every 6 to 12 months."],
      sources: [CDC_DIALYSIS],
    }),
    kind: "mc",
    options: [
      { text: "Allow it because national certification shows the technician is competent", why: "Certification does not confirm skill with this unit's catheter procedure." },
      { text: "Have the technician read and sign the catheter care policy", why: "Reading a policy shows awareness, not the ability to perform the skill." },
      { text: "Observe the technician connect a catheter before working alone", why: "Direct observation at hire validates a high-risk skill before independent practice." },
      { text: "Ask another technician to check the connections at shift end", why: "A check after the fact does not prevent contamination during connection." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-16", {
      topic: "Hand hygiene audits after feedback stopped",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "The nurse manager of an outpatient dialysis unit started monthly hand hygiene audits in January and posted the results for staff each month. Starting in April, audits continued but results were no longer posted because of a staffing shortage. Based on the trend, which conclusion is best supported?",
      tabs: [
        {
          title: "Hand Hygiene Audits",
          table: {
            head: ["Month", "January", "February", "March", "April", "May", "June"],
            rows: [
              ["Opportunities observed", "60", "60", "60", "60", "60", "60"],
              ["Compliance (%)", "62", "78", "91", "92", "80", "71"],
            ],
          },
        },
      ],
      rationale:
        "Compliance rose from 62% in January to 91% in March while results were posted. It held at 92% in April, then fell to 80% in May and 71% in June after posting stopped. Observations stayed at 60 each month, so the drop is not from fewer audits. The data support sharing results again. CDC advises monthly observation with results shared with clinical staff.",
      sources: [CDC_DIALYSIS],
    }),
    kind: "mc",
    options: [
      { text: "Monthly audits alone keep compliance high", why: "Audits continued every month, yet compliance fell once results were not shared." },
      { text: "Sharing results with staff helped sustain the gains", why: "Compliance climbed while results were posted and fell after posting stopped." },
      { text: "Compliance has stayed stable since the audits began", why: "Compliance rose to 92% and then fell to 71%." },
      { text: "The drop reflects fewer observations in later months", why: "Observations stayed at 60 every month." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-17", {
      topic: "Emergency orientation for a new dialysis client",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse orients a new client to an outpatient dialysis unit. Which topics should the nurse include to meet the unit's emergency preparedness duties? Select all that apply.",
      rationale:
        "Federal rules require dialysis units to orient clients to emergency procedures. Clients learn what to do, how to disconnect themselves from the machine and where to go if the area must be evacuated. They also learn whom to call during an emergency away from the unit, including an alternate phone number. Fluid goals are set by the prescriber. Machine restart is a staff task.",
      sources: [ESRD_EP],
    }),
    kind: "sata",
    options: [
      { text: "Steps to disconnect from the machine in an emergency", why: "Clients are taught to disconnect themselves if an emergency occurs." },
      { text: "How to change the fluid removal goal at home after a weight gain", why: "The fluid removal goal is set by the prescriber, not changed by the client." },
      { text: "Where to go if the area around the unit is evacuated", why: "Clients learn where to go, including during an area evacuation." },
      { text: "How to restart the machine after a power failure", why: "Restarting equipment is a staff task, not client training." },
      { text: "Whom to call, including an alternate unit phone number", why: "Clients need a contact for emergencies away from the unit, with a backup number." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s29-18", {
      topic: "No registered nurse on site at a dialysis unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "At 0545 the only registered nurse scheduled at an outpatient dialysis unit calls in sick. A licensed practical nurse with 2 years of dialysis experience and four certified technicians are present. The unit administrator, a registered nurse, can be reached by phone 40 minutes away. Twelve clients are booked for 0600. Which statement best describes the situation?",
      rationale:
        "Federal rules require a registered nurse on site whenever in-center clients are being treated. A practical nurse may serve as charge nurse only under registered nurse supervision. Phone contact with an administrator 40 minutes away is not presence on site. Technicians cannot act as the charge nurse. Treatments wait until a registered nurse arrives, and the administrator is called now to arrange one.",
      sources: [ESRD_STAFF],
    }),
    kind: "mc",
    options: [
      { text: "Treatments can start because the practical nurse can be charge nurse", why: "A practical nurse charge nurse still needs a registered nurse on site." },
      { text: "Treatments can start while the administrator stays reachable by phone", why: "Phone availability does not meet the rule that a registered nurse be on site." },
      { text: "Treatments can start once a senior technician is named charge", why: "A technician does not meet the qualifications for charge nurse." },
      { text: "Treatments wait until a registered nurse is present on the unit", why: "A registered nurse must be on site whenever in-center clients are treated." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-19", {
      topic: "Ride home after surgery at an ambulatory surgery center",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 34-year-old client had knee arthroscopy under general anesthesia at an ambulatory surgery center. The client meets discharge criteria and the surgeon has signed the discharge order. The client says, \"I booked a rideshare. I live alone, so no one is coming.\" What should the nurse do?",
      rationale:
        "Federal rules require that clients leave an ambulatory surgery center with a responsible adult unless the surgeon exempts them. Anesthesia effects can impair judgment and balance for hours. A rideshare or taxi driver does not stay with the client. The nurse holds discharge and helps the client find an adult to escort them, and tells the surgeon if none can be found. A signed risk form does not meet the rule.",
      sources: [ASC_ASSESS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Discharge the client to the rideshare driver with written instructions", why: "A driver who leaves at the door is not a responsible adult escort." },
      { text: "Have the client sign a form accepting the risk and then discharge", why: "A risk form does not replace the requirement for a responsible adult." },
      { text: "Hold discharge and arrange a responsible adult to escort the client", why: "Clients leave with a responsible adult unless the surgeon exempts them." },
      { text: "Call a taxi and ask the driver to walk the client into the home", why: "A taxi driver does not stay to watch for effects of anesthesia." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-20", {
      topic: "First client to assess in a surgery center recovery area",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse in the recovery area of an ambulatory surgery center receives four adult clients within 10 minutes. Which client should the nurse assess first?",
      rationale:
        "An SpO2 of 88% with respirations of 8/minute after sedation points to respiratory depression, a threat to breathing. This client is assessed first and stimulated, with airway support and oxygen as needed. Nausea rated 3 and pain rated 5 need treatment but are not life threatening. Warm fingers with brisk capillary refill show good circulation after hand surgery.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A client after a breast biopsy under sedation with SpO2 88% and respirations 8/minute", why: "Low oxygen saturation with slow breathing after sedation signals respiratory depression." },
      { text: "A client after cataract surgery who reports nausea rated 3 on a 0 to 10 scale", why: "Mild nausea needs treatment but is not urgent." },
      { text: "A client after hernia repair who reports pain rated 5 on a 0 to 10 scale", why: "Moderate pain needs treatment after the client with slow breathing is seen." },
      { text: "A client after carpal tunnel release with warm fingers and brisk capillary refill", why: "Warm fingers with brisk refill show normal circulation." },
    ],
    correct: 0,
  },
];
