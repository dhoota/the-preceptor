import type { Item } from "@/engine/types";
import { ANA_CODE, ANA_DOC, APPELBAUM, BEAUCHAMP, DELEGATION, DO_NOT_USE, FALLS, HINKLE, LANGLEY, POTTER, PSDA, SOCIAL, VERBAL, WONG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s01-11", {
      topic: "Refusal of blood by a client with capacity",
      cjmm: "generate",
      process: "culture",
      difficulty: 4,
      stem: "A 46-year-old client who is a Jehovah's Witness has a bleeding duodenal ulcer. Hemoglobin is 6.8 g/dL (68 g/L). The client is alert and oriented and can explain the risks of refusing blood. The client refuses a transfusion of packed red blood cells. Complete the diagram by choosing the situation the nurse is managing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The client is alert, oriented and can explain the risks, so the client has capacity. The refusal is informed and must be respected, even though a hemoglobin of 6.8 g/dL is dangerous. The nurse tells the provider so other treatments can be planned. The nurse documents the refusal and the teaching given. Heart rate, BP and hemoglobin show whether bleeding continues.",
      sources: [BEAUCHAMP, APPELBAUM, POTTER, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada:
        "Canadian labs report hemoglobin only in g/L, so this value reads as 68 g/L. The Medical Council of Canada lists 115 to 155 g/L for adult females and 125 to 170 g/L for adult males.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Refusal caused by impaired capacity", why: "The client is alert and oriented and can explain the risks. Capacity is present." },
      { text: "Informed refusal by a client with capacity", why: "A client who understands and weighs the risks may refuse treatment." },
      { text: "Consent given under family pressure", why: "The stem describes a refusal by the client, not consent obtained from pressure." },
      { text: "Emergency that allows implied consent", why: "Implied consent applies when a client cannot decide. This client can and has refused." },
    ],
    actions: [
      { text: "Give the blood once the client is sedated", why: "Giving blood against an informed refusal is battery." },
      { text: "Tell the provider about the refusal", why: "The provider needs to know so other treatments can be planned." },
      { text: "Ask the family to sign consent for the blood", why: "Family cannot override a client who has capacity." },
      { text: "Document the refusal and teaching given", why: "The record shows the client was informed and chose to refuse." },
      { text: "Stop IV fluids until the client agrees", why: "Withholding other care to pressure the client is coercion and unsafe." },
    ],
    parameters: [
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose control. It does not track bleeding." },
      { text: "Serum lipase level", why: "Lipase tracks pancreatic injury. It does not track blood loss." },
      { text: "Heart rate and blood pressure", why: "A rising heart rate and falling BP signal ongoing blood loss." },
      { text: "Serum calcium level", why: "Calcium does not guide care of a bleeding ulcer without transfusion." },
      { text: "Hemoglobin level", why: "Serial hemoglobin shows whether bleeding continues." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [2, 4] },
  },
  {
    ...meta("rn-s01-12", {
      topic: "First child to see on a pediatric unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "The nurse on a pediatric unit receives report on four children. Which child should the nurse see first?",
      rationale:
        "Stridor at rest with retractions means the upper airway is narrowing. Airway comes first. One loose stool is expected in gastroenteritis. Pain that fell from 8 to 4 after morphine shows the crisis pain is responding. Pink, warm toes show good blood flow below the cast.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "A 4-year-old with gastroenteritis who had one loose stool", why: "One loose stool is expected and does not threaten the child now." },
      { text: "A 2-year-old with croup who has stridor at rest and retractions", why: "Stridor at rest with retractions signals a narrowing airway." },
      { text: "A 7-year-old in sickle cell crisis with pain down from 8 to 4 after morphine", why: "Pain that fell after morphine is responding to treatment." },
      { text: "A 10-year-old with a leg cast whose toes are pink and warm", why: "Pink, warm toes show normal circulation below the cast." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-13", {
      topic: "Referrals at discharge after a stroke",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 72-year-old client is going home after a left-sided stroke. The client walks with a steady gait but has right arm weakness and needs help to dress. The client coughs when drinking thin liquids. The spouse says she is worried about managing at home. Which referrals should the nurse request? Select all that apply.",
      rationale:
        "Occupational therapy works on dressing and other daily tasks with a weak arm. Coughing on thin liquids suggests aspiration, so a speech-language pathologist assesses swallowing. The worried spouse needs caregiver support and community resources through social work. The gait is steady, so gait training is not needed. The cough comes from swallowing, not the lungs. Nothing suggests the client is near the end of life.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Physical therapy for gait training", why: "The client walks with a steady gait. Gait training is not the need." },
      { text: "Occupational therapy for dressing", why: "Occupational therapy teaches ways to dress with a weak arm." },
      { text: "Respiratory therapy for the cough", why: "The cough comes from swallowing thin liquids, not from a lung problem." },
      { text: "Speech-language pathology for swallowing", why: "Coughing with thin liquids suggests aspiration. A swallow study is needed." },
      { text: "Hospice for end-of-life care", why: "Nothing in the stem suggests the client is near the end of life." },
      { text: "Social work for caregiver support", why: "The spouse is worried about coping. Social work links the family to help." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s01-14", {
      topic: "Client name seen in a coworker's post",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A nurse sees that a coworker posted a photo from the unit break room on a social media site. A client's name can be read on the whiteboard behind the coworker. What should the nurse do?",
      rationale:
        "A readable client name in a public post is a privacy breach. Nurses have a duty to report breaches through the proper channel, which is the nurse manager. A public comment draws more attention to the post. The breach exists whether or not the coworker meant it. Contacting the client is not the nurse's role.",
      sources: [SOCIAL],
    }),
    kind: "mc",
    options: [
      { text: "Comment on the post to warn the coworker", why: "A public comment draws more viewers to the breach." },
      { text: "Ignore it because the post is about the coworker", why: "The client's name is readable. The breach exists whatever the intent." },
      { text: "Send the client a message about the post", why: "Contacting the client is not the nurse's role and may cause more harm." },
      { text: "Report the post to the nurse manager", why: "Breaches are reported through the facility so the post is removed and handled." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s01-15", {
      topic: "Reviewing a note for charting errors",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "The nurse reviews a progress note written by a newly licensed nurse. Click to highlight the entries that do not meet documentation standards.",
      rationale:
        "Charting holds objective facts. \"Seems uncooperative\" is a label, not a behavior. The chart does not mention an incident report. QD is on the do not use list because it is misread. A dose is charted only after it is given. The time, vital signs, the dose with its reason, the recheck, a labeled late entry and the wound size all meet standards.",
      sources: [ANA_DOC, DO_NOT_USE, { body: "Institute for Safe Medication Practices Canada", work: "Do Not Use: Dangerous Abbreviations, Symbols, and Dose Designations, 2025 Update. ISMP Canada Safety Bulletin 25(5)", year: 2025, url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2025-i5-Do-Not-Use.pdf" }],
      canada:
        "Canadian facilities use the ISMP Canada Do Not Use list, updated in 2025, rather than the Joint Commission list. QD and OD are both on it, and the word daily is written out instead.",
    }),
    kind: "highlight",
    passage:
      "[[0930 Client lying in bed, eyes open.]]\n[[Client seems uncooperative today.]]\n[[BP 136/84 mmHg, pulse 88/minute.]]\n[[Morphine 4 mg IV given for pain 7 of 10.]]\n[[Pain rechecked at 1000, rated 3 of 10.]]\n[[Incident report completed for this morning's fall.]]\n[[Late entry for 0845: dressing changed.]]\n[[Heparin 5 000 units subcut QD.]]\n[[1200 insulin charted at 1100, before it was given.]]\n[[Incision 3 cm long, edges together.]]",
    spans: [
      { text: "0930 Client lying in bed, eyes open.", why: "This is a timed, objective observation." },
      { text: "Client seems uncooperative today.", why: "This is a judgment. The note should describe what the client said or did." },
      { text: "BP 136/84 mmHg, pulse 88/minute.", why: "Measured values are objective data." },
      { text: "Morphine 4 mg IV given for pain 7 of 10.", why: "The dose, route and reason are all recorded." },
      { text: "Pain rechecked at 1000, rated 3 of 10.", why: "Recording the response to a drug meets standards." },
      { text: "Incident report completed for this morning's fall.", why: "The chart records the fall, not the existence of an incident report." },
      { text: "Late entry for 0845: dressing changed.", why: "A late entry labeled with the time of care is acceptable." },
      { text: "Heparin 5 000 units subcut QD.", why: "QD can be misread as QID. The word daily is written out." },
      { text: "1200 insulin charted at 1100, before it was given.", why: "Charting a dose before giving it records care that has not happened." },
      { text: "Incision 3 cm long, edges together.", why: "A measured, specific wound description meets standards." },
    ],
    correct: [1, 5, 7, 8],
  },
  {
    ...meta("rn-s01-16", {
      topic: "Truth telling when family asks to withhold",
      cjmm: "analyze",
      process: "caring",
      difficulty: 2,
      stem: "A 60-year-old client who has capacity asks the nurse whether the biopsy showed cancer. The client's son asks the team to keep the result from the client so the news does not harm the client. Which ethical principle supports telling the client the truth?",
      rationale:
        "Veracity is the duty to tell the truth. It supports giving a capable client honest information about their own health. Hiding the result at the son's request would be paternalism, which overrides the client's choices. Justice concerns fair sharing of resources. Nonmaleficence means avoiding harm and is the reason the son gives for hiding the result.",
      sources: [BEAUCHAMP, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Veracity", why: "Veracity is the duty to be truthful with the client." },
      { text: "Justice", why: "Justice concerns fair treatment and fair sharing of resources." },
      { text: "Nonmaleficence", why: "Avoiding harm is the argument the son uses for hiding the result." },
      { text: "Paternalism", why: "Paternalism overrides the client's wishes. It would support withholding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s01-17", {
      topic: "Reading fall data after a rounding program",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      trend: true,
      stem: "A nurse on the unit quality committee reviews data after hourly rounding began at the start of quarter 1. Which conclusion is best supported by the trend?",
      tabs: [
        {
          title: "Unit Quality Data",
          table: {
            head: ["Measure", "Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
            rows: [
              ["Rounding done (% of hours)", "40", "62", "81", "90"],
              ["Falls per 1000 client days", "4.1", "3.6", "2.4", "1.9"],
              ["Falls with injury", "3", "3", "1", "1"],
            ],
          },
        },
      ],
      rationale:
        "Rounding rose from 40% to 90% of hours. Over the same year, falls fell from 4.1 to 1.9 per 1000 client days. Falls with injury fell from 3 to 1. The data show the two moved together. They do not prove cause, because other changes may have happened at the same time.",
      sources: [FALLS, LANGLEY],
    }),
    kind: "mc",
    options: [
      { text: "The data prove rounding caused the drop in falls", why: "Data from one unit over time show association. They do not prove cause." },
      { text: "Falls with injury rose as rounding increased", why: "Falls with injury fell from 3 to 1." },
      { text: "Fewer falls occurred as rounding rose", why: "Falls fell from 4.1 to 1.9 while rounding rose from 40% to 90%." },
      { text: "The fall rate stayed about the same all year", why: "The rate fell by more than half across the year." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-18", {
      topic: "Receiving a telephone prescription",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "At 2200 the primary health care provider calls the unit and prescribes furosemide 40 mg IV now for a client with new crackles. The nurse writes the prescription down. What should the nurse do next?",
      rationale:
        "After writing down a spoken prescription, the nurse reads the whole prescription back. The provider then confirms it. This catches misheard drugs, doses and routes before the drug is given. A second listener does not replace read-back. Entering it after the call ends skips the check.",
      sources: [VERBAL],
    }),
    kind: "mc",
    options: [
      { text: "Give the dose and have the provider sign later", why: "Giving the dose before confirming it skips the read-back check." },
      { text: "Ask another nurse to listen in as a witness", why: "A second listener does not confirm the order with the provider." },
      { text: "Read the prescription back to the provider", why: "Read-back with confirmation catches misheard drugs and doses." },
      { text: "Enter the order after the provider hangs up", why: "Once the call ends, errors can no longer be confirmed with the provider." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-19", {
      topic: "Advance directive duties on admission",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse admits a 66-year-old client for an elective hip replacement. The client does not have an advance directive. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Hospitals must give adults written information on admission about their right to accept or refuse treatment and to make an advance directive. The chart records whether the client has one. Care cannot depend on having one. The client makes their own directive. Family cannot make it for the client. Staff caring for the client do not act as witness and agent.",
      sources: [PSDA, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Consent for the Incapable Adult", year: 2025, url: "https://cnps.ca/article/consent-for-the-incapable-adult/" }],
      canada:
        "The US federal rule on advance directive information at admission does not apply in Canada. Advance directive laws and their names vary by province, such as personal directives in Alberta and Nova Scotia.",
    }),
    kind: "sata",
    options: [
      { text: "Tell the client admission requires an advance directive", why: "Care cannot be conditioned on whether a client has a directive." },
      { text: "Give written information on the right to refuse treatment", why: "Federal rules require this information on inpatient admission." },
      { text: "Ask the family to complete a directive for the client", why: "A directive states the client's own wishes. Family cannot write it." },
      { text: "Record in the chart that the client has no directive", why: "The record must show whether the client has an advance directive." },
      { text: "Offer information on how to prepare a directive", why: "Information lets the client choose whether to make one." },
      { text: "Act as both witness and agent on the directive", why: "Caregivers are not the client's agent. Many states bar them as witnesses." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s01-20", {
      topic: "Following up a report from assistive personnel",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "An AP reports that a client who had a bowel resection 2 days ago has a BP of 88/50 mmHg. The BP was 124/78 mmHg 4 hours ago. What should the nurse do first?",
      rationale:
        "The nurse stays accountable for delegated tasks and follows up on abnormal results. A fall from 124/78 to 88/50 mmHg after surgery is a large change. The nurse assesses the client first to confirm the reading and look for bleeding. The provider is called with those findings. Waiting 30 minutes delays care. Raising the head of the bed can lower the BP further.",
      sources: [DELEGATION],
    }),
    kind: "mc",
    options: [
      { text: "Assess the client at the bedside", why: "The nurse confirms the reading and looks for a cause such as bleeding." },
      { text: "Have the AP recheck the BP in 30 minutes", why: "A delay of 30 minutes may let a serious problem worsen." },
      { text: "Chart the reading and page the provider", why: "The provider needs the nurse's assessment, which comes first." },
      { text: "Tell the AP to raise the head of the bed", why: "Raising the head can lower BP further in a hypotensive client." },
    ],
    correct: 0,
  },
];
