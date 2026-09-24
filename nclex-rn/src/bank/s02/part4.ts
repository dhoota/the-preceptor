import type { Item } from "@/engine/types";
import { ANA_CODE, BEAUCHAMP, GUIDO, HINKLE, HIPAA_DIRECTORY, POTTER, SBAR, YODER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s02-31", {
      topic: "Request for a caregiver of the same sex",
      cjmm: "action",
      process: "culture",
      difficulty: 1,
      stem: "A client who is Muslim asks that only female staff give her perineal care. The nurse assigned to her today is male. What should the charge nurse do?",
      rationale:
        "Respect for the client's religious values is part of nursing ethics. When staffing allows, the charge nurse assigns a female nurse or AP for intimate care. A chaperone does not meet the client's request. Asking the client to wait or explaining assignment rules puts staffing ahead of the client's values.",
      sources: [ANA_CODE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Explain that staff are assigned by skill, not by gender", why: "This dismisses a religious request that staffing can usually meet." },
      { text: "Ask the client to accept care until the next shift", why: "Delaying hygiene care or pressing the client to accept it disregards her values." },
      { text: "Assign a female nurse or AP for that care", why: "Matching the caregiver honors the client's religious request." },
      { text: "Have the male nurse give care with a chaperone present", why: "A chaperone does not change the sex of the caregiver the client objects to." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-32", {
      topic: "Findings in a handoff that need action",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The oncoming nurse receives this report at 1900 on a client with pneumonia. Click to highlight the findings that need action before routine care begins.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      rationale:
        "A potassium of 2.9 mEq/L is below the normal floor of 3.5 mEq/L and can cause dysrhythmias. The lab called it at 1830 and the provider has still not been told, so the call cannot wait. SpO2 fell from 94% to 88% on oxygen, which is a new decline in breathing. The age, an on-time antibiotic, a fair intake, a patent lock and a planned visit need no urgent action.",
      sources: [HINKLE, SBAR, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada:
        "Canadian labs report potassium only in mmol/L, so this value reads as 2.9 mmol/L. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the normal range.",
    }),
    kind: "highlight",
    passage:
      "[[Age 72, admitted yesterday.]]\n[[Lab called a potassium of 2.9 mEq/L (2.9 mmol/L) at 1830.]]\n[[Provider not yet told of the potassium.]]\n[[Ceftriaxone given at 1400 as scheduled.]]\n[[SpO2 88% on 2 L/minute, was 94% at 1500.]]\n[[Ate half of dinner.]]\n[[Saline lock flushed and patent.]]\n[[Daughter will visit tomorrow morning.]]",
    spans: [
      { text: "Age 72, admitted yesterday.", why: "Age and admission day are background and need no action." },
      { text: "Lab called a potassium of 2.9 mEq/L (2.9 mmol/L) at 1830.", why: "A potassium of 2.9 mEq/L is low and can cause dysrhythmias." },
      { text: "Provider not yet told of the potassium.", why: "A critical result must reach the provider promptly. The call cannot wait." },
      { text: "Ceftriaxone given at 1400 as scheduled.", why: "An antibiotic given on time needs no action." },
      { text: "SpO2 88% on 2 L/minute, was 94% at 1500.", why: "A fall in saturation on oxygen is a new decline in breathing." },
      { text: "Ate half of dinner.", why: "Fair intake in a client with pneumonia needs no urgent action." },
      { text: "Saline lock flushed and patent.", why: "A patent lock is expected and needs no action." },
      { text: "Daughter will visit tomorrow morning.", why: "A planned visit needs no action." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s02-33", {
      topic: "Ordering tasks at the start of a shift",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "At 0900 the nurse on a medical unit has four tasks waiting. Which task should the nurse do first?",
      rationale:
        "New chest pain may be a threat to life and needs assessment now. A scheduled antibiotic can be given within the agency's time window after the assessment. Discharge teaching for an 1100 discharge and a call about a bedtime drug can wait. Acute problems come before routine and scheduled tasks.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Hang a scheduled IV antibiotic due at 0900", why: "A scheduled dose can be given within the time window after the urgent need." },
      { text: "Start discharge teaching for a client leaving at 1100", why: "Teaching can start after the acute problem is handled." },
      { text: "Call pharmacy about a missing bedtime drug", why: "A bedtime drug is not needed for many hours." },
      { text: "See a client who reports new chest pain", why: "New chest pain may be a threat to life and needs assessment now." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-34", {
      topic: "What the surgeon must disclose for consent",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A surgeon obtains consent from a client for a laparoscopic cholecystectomy while the nurse witnesses. Which information must the surgeon give for the consent to be informed? Select all that apply.",
      rationale:
        "Informed consent needs the nature of the procedure, its risks, its expected benefits and the alternatives, including no treatment. The client needs these to make a real choice. The surgeon's income, the hospital's accreditation history and the names of all staff in the room are not required parts of consent.",
      sources: [POTTER, GUIDO],
    }),
    kind: "sata",
    options: [
      { text: "The surgeon's income from the procedure", why: "Income is not a required element of informed consent." },
      { text: "The nature of the procedure", why: "The client must know what will be done." },
      { text: "The hospital's accreditation history", why: "Accreditation history is not a required element of consent." },
      { text: "Common and serious risks", why: "The client must know the risks to weigh the choice." },
      { text: "The expected benefits", why: "The client must know what the procedure is meant to achieve." },
      { text: "The names of all staff in the room", why: "Staff names are not a required element of consent." },
      { text: "Other treatments, including none", why: "Alternatives, including no treatment, are needed for a real choice." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s02-35", {
      topic: "AP asked to trim a diabetic resident's nails",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "In a long-term care facility, an AP tells the nurse that a resident's daughter asked the AP to cut the resident's toenails. The resident has diabetes and poor sensation in both feet. What should the nurse tell the AP?",
      rationale:
        "A resident with diabetes and poor foot sensation is at high risk of injury and infection from nail cutting. Nail care for this resident is done by a podiatrist or a qualified nurse per policy. The AP should not cut the nails. The nurse arranges the right foot care. A soak softens the skin and raises the risk of injury. The daughter watching or the resident agreeing does not lower the risk.",
      sources: [POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "Do not cut them, and I will arrange foot care", why: "Nail cutting for this resident needs a podiatrist or qualified nurse." },
      { text: "Cut them straight across after a warm water soak", why: "Soaking softens the skin and cutting by an AP risks injury in poor sensation." },
      { text: "Cut them if the daughter stays to watch", why: "A family member watching does not lower the risk of injury." },
      { text: "Cut them if the resident agrees to it", why: "Agreement does not make the task safe for an AP." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-36", {
      topic: "Sorting statements in an SBAR call",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "The nurse calls the primary health care provider about a client who had surgery yesterday. Place one statement under each SBAR heading.",
      rationale:
        "Situation states why the nurse is calling. Background gives the relevant history. Assessment gives the nurse's view of the problem. Recommendation states what the nurse wants done. A roommate's discharge is not relevant. Waiting until morning is not a recommendation for a falling urine output.",
      sources: [SBAR],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Situation", "Background", "Assessment", "Recommendation"],
    tokens: [
      { text: "The client had a bowel resection yesterday and has no kidney disease.", why: "Surgery and history are background." },
      { text: "The client's roommate is going home today.", why: "The roommate's discharge has nothing to do with this client." },
      { text: "Please come assess the client and consider a fluid bolus.", why: "A clear request for action is the recommendation." },
      { text: "I am calling because the client's urine output has fallen.", why: "The reason for the call is the situation." },
      { text: "I think the client may be low on fluid.", why: "The nurse's view of the problem is the assessment." },
      { text: "I will keep watching and call you in the morning.", why: "Delay is not a recommendation for a falling urine output." },
    ],
    correct: [3, 0, 4, 2],
  },
  {
    ...meta("rn-s02-37", {
      topic: "Supervising a nursing student",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nursing student prepares to give IV furosemide 20 mg to a client assigned to the nurse. The student's instructor is with another student. The student says, \"I can give it myself. I have done it before.\" What should the nurse do?",
      rationale:
        "A student gives drugs under direct supervision by the instructor or a designated nurse. Past experience does not remove this rule. The nurse is still accountable for the assigned client. The student waits until the instructor or the nurse can supervise. Charting a drug given by someone else is false. Checking after the fact does not prevent an error.",
      sources: [YODER, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Let the student give it since the student has done it before", why: "Past experience does not replace required supervision." },
      { text: "Tell the student to wait for the instructor or the nurse", why: "A student gives drugs only under direct supervision." },
      { text: "Give the drug and have the student chart it", why: "A person charts only the drugs that person gave." },
      { text: "Let the student give it and check the client after", why: "Checking afterward does not prevent an error during the dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-38", {
      topic: "Referral for weight loss in long-term care",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      trend: true,
      stem: "An 88-year-old resident of a long-term care facility has lost weight. A swallow screen last week was normal and the resident does not cough with meals. The resident says food has no taste. Based on the trend, which referral should the nurse make?",
      tabs: [
        {
          title: "Monthly Record",
          table: {
            head: ["Measure", "June", "July", "August", "September"],
            rows: [
              ["Weight (kg)", "62", "60", "58", "56"],
              ["Meals eaten (%)", "90", "75", "60", "50"],
              ["Walks to dining room", "Yes", "Yes", "Yes", "Yes"],
            ],
          },
        },
      ],
      rationale:
        "Weight fell from 62 kg to 56 kg while meal intake dropped from 90% to 50%. The resident reports that food has no taste. This is a nutrition problem, so a registered dietitian assesses needs and plans foods and supplements. The swallow screen is normal and there is no coughing, so a swallow study is not first. The resident still walks to meals. A family meeting does not address intake.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Speech-language pathologist for a swallow study", why: "The swallow screen is normal and there is no coughing with meals." },
      { text: "Physical therapist for strength training", why: "The resident still walks to the dining room. Strength is not the first problem." },
      { text: "Social worker to set up a family meeting", why: "A meeting does not address the falling intake and weight." },
      { text: "Registered dietitian for a nutrition assessment", why: "Falling intake and weight call for a nutrition assessment and plan." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-39", {
      topic: "Clergy access to the facility directory",
      cjmm: "analyze",
      process: "communication",
      difficulty: 5,
      stem: "A hospital chaplain asks the unit nurse for the room numbers of clients who listed the chaplain's faith on admission. One of those clients asked on admission to be left out of the facility directory. Which statement by the nurse reflects the HIPAA Privacy Rule?",
      rationale:
        "The Privacy Rule lets a hospital keep a directory with name, location, general condition and religious affiliation. Clergy may receive this directory data, including religious affiliation, without asking for a client by name. Each client must be told and given the chance to object. The client who opted out is left out. Written consent is not required for directory data.",
      sources: [HIPAA_DIRECTORY, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and directory rules vary by province. Ontario's PHIPA lets a facility give a religious representative a client's name and location if the client gave the affiliation and did not object.",
    }),
    kind: "mc",
    options: [
      { text: "\"Religious affiliation can be shared only with written consent.\"", why: "Directory data may go to clergy without written consent if the client did not object." },
      { text: "\"Clergy may see the directory, including clients who opted out.\"", why: "An objection must be honored. The client who opted out is left out." },
      { text: "\"Clergy may see directory data for clients who did not opt out.\"", why: "The rule allows directory data, including faith, to go to clergy unless the client objected." },
      { text: "\"Clergy may see directory data only for clients they name.\"", why: "Clergy do not need to ask by name. Only the public must name the client." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-40", {
      topic: "Ethical principles in a refusal",
      cjmm: "analyze",
      process: "caring",
      difficulty: 2,
      stem: "A client with decision-making capacity refuses a recommended toe amputation for gangrene. The surgeon has explained that the infection may spread without surgery. The nurse supports the client's choice. Complete the following sentences by choosing from the lists of options.",
      rationale:
        "Respecting an informed refusal by a client with capacity honors autonomy. Telling the client the truth about the risk of spread honors veracity. Beneficence is acting for the client's good. Justice is fair distribution of care. Fidelity is keeping promises. Nonmaleficence is avoiding harm.",
      sources: [BEAUCHAMP, ANA_CODE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "Respecting the client's refusal honors the principle of {0}. Telling the client the truth about the risks honors the principle of {1}.",
    blanks: [
      {
        options: [
          { text: "beneficence", why: "Beneficence is acting for the client's good. The surgery was the beneficent choice." },
          { text: "autonomy", why: "Autonomy is the right of a capable client to decide about their own care." },
          { text: "justice", why: "Justice concerns fair distribution of care, not this refusal." },
          { text: "fidelity", why: "Fidelity is keeping promises. No promise is at issue." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "nonmaleficence", why: "Nonmaleficence is avoiding harm. Truth telling is a separate duty." },
          { text: "justice", why: "Justice concerns fairness among clients." },
          { text: "veracity", why: "Veracity is the duty to tell the truth." },
          { text: "fidelity", why: "Fidelity is keeping commitments, not telling the truth." },
        ],
        correct: 2,
      },
    ],
  },
];
