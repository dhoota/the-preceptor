import type { Item } from "@/engine/types";
import { ADA_SCHOOL, ASAM_AWM, HOCKENBERRY, KUO, NASN_IHP, NCCHC_JAILS, NCCHC_SEG, NGND, SIEGEL, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s29-01", {
      topic: "First student to see in the school health office",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "At 1230 the school nurse returns to the health office after a staff meeting. Four students are waiting. Which student should the nurse see first?",
      rationale:
        "An itchy throat after eating a cookie that may hold peanut can be the first sign of anaphylaxis. Swelling can close the airway within minutes, so this student is seen first and the emergency care plan is followed. A nosebleed under steady pressure is controlled. A glucose of 190 mg/dL needs follow-up under the diabetes plan but is not an emergency. An ankle that bears weight is stable.",
      sources: [HOCKENBERRY, NASN_IHP],
    }),
    kind: "mc",
    options: [
      { text: "A 7-year-old with a nosebleed who is holding pressure with a tissue", why: "A nosebleed under steady pressure is controlled and does not threaten the airway. It can wait a few minutes." },
      { text: "A 9-year-old with a peanut allergy who ate a shared cookie and has an itchy throat", why: "Throat itching after a likely peanut exposure can be early anaphylaxis, which can block the airway within minutes." },
      { text: "A 12-year-old with type 1 diabetes and a glucose of 190 mg/dL (10.5 mmol/L) before gym", why: "A glucose of 190 mg/dL is above target but is not an emergency. The diabetes plan guides the next step." },
      { text: "A 10-year-old who twisted an ankle at recess and can bear weight", why: "An ankle injury that bears weight is stable. Ice and elevation can wait." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-02", {
      topic: "What a school nurse may hand to a health aide",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A school nurse covers three schools and works with a trained, unlicensed health aide at each school. State law allows the nurse to delegate to trained health aides. Which tasks may the nurse delegate to a health aide? Select all that apply.",
      rationale:
        "The nurse may delegate tasks that are routine, follow set steps and have predictable results, once the aide is trained and found competent. A scheduled oral dose on the student's plan, a lunchtime glucose check and basic first aid fit this. Writing a healthcare plan is nursing planning. Judging a head injury is nursing assessment. First teaching about a new condition is a nursing function. These stay with the registered nurse.",
      sources: [NGND, NASN_IHP],
    }),
    kind: "sata",
    options: [
      { text: "Give a scheduled oral medication listed on a student's plan", why: "A routine oral dose with clear written directions is a predictable task the nurse can train and supervise." },
      { text: "Write the healthcare plan for a student with new epilepsy", why: "Writing the plan uses nursing assessment and planning, which stay with the registered nurse." },
      { text: "Check a student's blood glucose at lunch and record it", why: "A glucose check with set steps and clear reporting rules is routine once the aide is trained." },
      { text: "Decide if a student who hit their head may return to class", why: "Judging a head injury takes nursing assessment, which the nurse does not delegate." },
      { text: "Teach a student newly diagnosed with asthma to use an inhaler", why: "First teaching about a new condition is a nursing function. The aide may reinforce it later." },
      { text: "Apply an ice pack to a bruised knee using first aid steps", why: "Basic first aid with a set procedure is within a trained aide's role." },
    ],
    correct: [0, 2, 5],
  },
  {
    ...meta("rn-s29-03", {
      topic: "Training staff before a school trip with a rescue drug",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 10-year-old with a seizure disorder has a prescription for intranasal midazolam at school for any seizure lasting 5 minutes or longer. The class leaves tomorrow on a day trip to a museum. The teacher going on the trip has not been trained to give the medication. What should the school nurse do?",
      rationale:
        "A staff member must be trained and found competent before giving a rescue medication. The school nurse trains the teacher today and watches a return demonstration with the device. The nurse also confirms the teacher knows the seizure plan, including when to give the dose at 5 minutes and when to call emergency services. A written plan alone is not training. Keeping the student home limits access to school activities.",
      sources: [NGND, NASN_IHP],
    }),
    kind: "mc",
    options: [
      { text: "Send the medication with the teacher and the written seizure plan", why: "A written plan does not replace training. An untrained person should not give a rescue dose." },
      { text: "Ask the parent to keep the student home on the day of the trip", why: "A health need is not a reason to exclude a student when trained staff can make the trip safe." },
      { text: "Tell the teacher to call emergency services instead of giving a dose", why: "Waiting for emergency services delays a prescribed rescue dose for a long seizure." },
      { text: "Train the teacher today and observe a return demonstration", why: "The nurse who delegates trains the staff member and confirms competence before the task is done." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-04", {
      topic: "Planning school entry for a child with a tracheostomy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 5-year-old with a tracheostomy and a gastrostomy tube will start kindergarten in 3 weeks. The child needs suctioning several times a day and has a home care nurse. The family has given the school the discharge papers from the children's hospital. What should the school nurse do first?",
      rationale:
        "A child with medical complexity needs a plan in place before the first day. The school nurse meets with the family and the child's providers and then writes the individualized healthcare plan and an emergency care plan. The plan sets who will suction and give tube care, what training staff need and what to do if the tube blocks. Training and classroom placement follow from the plan. The school nurse, not the home nurse, writes it.",
      sources: [NASN_IHP, KUO],
    }),
    kind: "mc",
    options: [
      { text: "Meet with the family and providers to build the healthcare plan", why: "A plan made with the family and providers sets care, staffing, training and emergency steps before school starts." },
      { text: "Train the classroom aide to suction the tracheostomy before the first day", why: "Training follows the plan. Who gives this care depends on the plan and state law." },
      { text: "Ask the home care nurse to write the school care plan", why: "The school nurse develops the school plan. The home nurse is one source of information for it." },
      { text: "Place the child in the classroom next to the health office", why: "Placement is decided with the education team once the plan exists. It does not replace a plan." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-05", {
      topic: "Reviewing a substitute health aide's log",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The school nurse reviews the log a substitute health aide kept yesterday at one school. Click to highlight the entries that need follow-up by the nurse.",
      rationale:
        "The aide gave a medication with no authorization on file. A student with a glucose of 62 mg/dL walked alone after treatment, with no recheck. The aide held a prescribed insulin dose without asking the nurse. Each entry needs follow-up. Ice for a minor injury, sending home a child with a temperature of 38.6°C and recording screening results are within the aide's role.",
      sources: [ADA_SCHOOL, NGND],
    }),
    kind: "highlight",
    passage:
      "[[0915 Gave a 2nd grader acetaminophen from the office stock for a headache. No medication form on file.]]\n[[1000 Applied ice to a 4th grader's elbow after a fall. Child returned to class.]]\n[[1040 Student with type 1 diabetes had glucose 62 mg/dL (3.4 mmol/L). Gave juice and sent the student back to class alone.]]\n[[1130 Called a parent to pick up a child with a temperature of 38.6°C (101.5°F).]]\n[[1230 Held the lunch insulin dose because the student said they felt fine.]]\n[[1415 Filed hearing screening results in the health folder.]]",
    spans: [
      { text: "0915 Gave a 2nd grader acetaminophen from the office stock for a headache. No medication form on file.", why: "School medications need a signed authorization on file. A dose given without one needs follow-up." },
      { text: "1000 Applied ice to a 4th grader's elbow after a fall. Child returned to class.", why: "Ice for a minor bump with return to class is routine first aid." },
      { text: "1040 Student with type 1 diabetes had glucose 62 mg/dL (3.4 mmol/L). Gave juice and sent the student back to class alone.", why: "Low glucose needs a recheck after treatment, and a student with low glucose is not sent anywhere alone." },
      { text: "1130 Called a parent to pick up a child with a temperature of 38.6°C (101.5°F).", why: "Sending home a child with a temperature of 38.6°C follows usual school illness rules." },
      { text: "1230 Held the lunch insulin dose because the student said they felt fine.", why: "Holding a prescribed dose departs from the diabetes plan without the nurse's assessment." },
      { text: "1415 Filed hearing screening results in the health folder.", why: "Filing screening results is routine record keeping." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s29-06", {
      topic: "Checking a teacher trained to give glucagon",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A school nurse has trained a teacher to give glucagon to a student with type 1 diabetes. The nurse checks the teacher's understanding of the delegated task. Which two statements by the teacher show understanding? Select two.",
      rationale:
        "Glucagon treats severe low glucose when the student cannot safely take sugar by mouth, such as when unconscious or seizing. After giving it, staff call emergency services and then the school nurse and parent. Mild symptoms are treated with fast sugar by mouth. The teacher cannot pass the task to another person. Nothing goes by mouth during a seizure. Waiting for a parent delays treatment.",
      sources: [ADA_SCHOOL, NGND],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I give it if the student is unconscious or cannot swallow safely.\"", why: "Glucagon is for severe low glucose when sugar cannot be taken by mouth." },
      { text: "\"I can give half a dose if the student only seems a little shaky.\"", why: "Mild symptoms are treated with fast sugar by mouth. Changing the dose is outside the delegated task." },
      { text: "\"I can show the substitute teacher how to give it next week.\"", why: "A delegatee cannot pass the task on. The nurse trains and checks every staff member." },
      { text: "\"I will call emergency services after giving it.\"", why: "Severe low glucose treated with glucagon needs emergency services, and the nurse follows up." },
      { text: "\"I will give juice by mouth first while the student is seizing.\"", why: "Nothing goes by mouth during a seizure because of the risk of aspiration." },
      { text: "\"I will wait for the student's parent to arrive before giving it.\"", why: "Waiting for a parent delays treatment of severe low glucose." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s29-07", {
      topic: "First detainee to see after jail intake screening",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A nurse in a county jail reviews the receiving screening forms that health-trained officers completed in the past hour. Which detainee should the nurse see first?",
      rationale:
        "Alcohol withdrawal can be fatal. Tremor 12 hours after the last drink in a person who drinks heavily every day means withdrawal has begun. Seizures can follow within 48 hours, so this detainee is assessed first and placed on withdrawal monitoring. Opioid withdrawal is distressing but seldom fatal in a healthy adult. Clear breathing and a glucose of 168 mg/dL are stable for now.",
      refs: ["Alcohol withdrawal seizures can occur 6 to 48 hours after the last drink."],
      sources: [ASAM_AWM, NCCHC_JAILS],
    }),
    kind: "mc",
    options: [
      { text: "A man who uses heroin daily, last used 6 hours ago and has a runny nose", why: "Early opioid withdrawal needs care today but is rarely life threatening in an adult." },
      { text: "A woman with asthma who left her inhaler at home and has clear breath sounds", why: "Breathing is clear now. The inhaler can be arranged after the more urgent detainee is seen." },
      { text: "A man who drinks a pint of vodka daily, last drank 12 hours ago and has tremors", why: "Tremor 12 hours after heavy daily drinking signals withdrawal that can progress to seizures." },
      { text: "A man with type 2 diabetes on metformin with a glucose of 168 mg/dL (9.3 mmol/L)", why: "A glucose of 168 mg/dL is above target but not urgent. Home medication can be continued after review." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-08", {
      topic: "Officer asks for a detainee's diagnosis",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A detainee in a jail has HIV infection and is stable on medication. A correctional officer tells the nurse, \"I need to know what he has so I can protect myself.\" What should the nurse do?",
      rationale:
        "Health information in a jail is kept apart from custody records. Custody staff receive only what they need for housing, safety and transport, and that does not include the diagnosis. Standard precautions protect officers from blood exposure with every detainee. A door sign or gloves for one detainee would reveal the diagnosis to others.",
      sources: [NCCHC_JAILS, SIEGEL],
    }),
    kind: "mc",
    options: [
      { text: "Explain that health details stay private and standard precautions apply", why: "Diagnoses are not shared with custody staff without consent. Standard precautions cover blood exposure with every detainee." },
      { text: "Tell the officer the diagnosis because the officer has frequent contact", why: "Frequent contact does not create a right to the diagnosis. Standard precautions cover the risk." },
      { text: "Tell the officer to wear gloves for all contact with this detainee", why: "Gloves for casual contact with one detainee are not needed and signal a diagnosis to others." },
      { text: "Post a sign on the cell door telling staff to use blood precautions", why: "A door sign discloses health information to anyone who reads it." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-09", {
      topic: "Health request from a detainee in segregation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A detainee in disciplinary segregation slips a written health request under the cell door. It reads, \"Bad pain when I pee and I feel hot.\" The officer on the unit tells the nurse that health requests are on hold until the discipline ends. What should the nurse do?",
      rationale:
        "A detainee in segregation keeps the same access to health care as anyone else in the jail. Discipline does not suspend it. The nurse triages the request today. Triage may start at the cell door, but an exam and private talk take place in a clinical area. Painful urination with a feeling of fever needs assessment for a urinary infection. Clinical decisions belong to health staff, not custody staff.",
      sources: [NCCHC_JAILS, NCCHC_SEG],
    }),
    kind: "mc",
    options: [
      { text: "File the request so it can be reviewed once the discipline ends", why: "Discipline does not suspend access to care. A delay can let an infection spread to the kidneys." },
      { text: "Triage the request today and see the detainee in a clinical area", why: "Requests from segregation are triaged like any other, and the exam takes place in a clinical space." },
      { text: "Ask the officer to check the detainee's temperature at the door", why: "Assessment belongs to health staff. Custody staff do not triage health complaints." },
      { text: "Send a note telling the detainee to drink more water and write again next week", why: "Advice without an assessment can miss an infection that needs treatment." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-10", {
      topic: "Matching jail health tasks to team members",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse manager in a county jail plans the morning work of the health and custody team. Drag the team member who should carry out each task. Each team member is used once at most.",
      rationale:
        "A practical nurse can give scheduled oral medications at the morning pass. Triage of written health requests needs registered nurse assessment and judgment. Prescribing treatment for a new rash is the role of the nurse practitioner. Moving a detainee to the clinic is a custody task for the correctional officer. A records clerk and a mental health counselor do not fit any of these tasks.",
      sources: [NGND, NCCHC_JAILS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Give scheduled oral medications at the morning pass", "Triage written health requests from the housing units", "Prescribe treatment for a detainee with a new rash", "Escort a detainee from a housing unit to the clinic"],
    tokens: [
      { text: "Registered nurse", why: "Triage of health requests needs registered nurse assessment and judgment." },
      { text: "Licensed practical nurse", why: "Giving scheduled oral medications is within practical nurse scope." },
      { text: "Medical records clerk", why: "A clerk handles records and has no clinical role in these tasks." },
      { text: "Nurse practitioner", why: "Prescribing treatment for a new problem needs a provider with prescriptive authority." },
      { text: "Correctional officer", why: "Moving detainees within the facility is a custody task." },
      { text: "Mental health counselor", why: "A counselor does not give medications, triage medical requests or prescribe." },
    ],
    correct: [1, 0, 3, 4],
  },
];
