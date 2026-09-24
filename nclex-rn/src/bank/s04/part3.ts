import type { Item } from "@/engine/types";
import { ANA_CODE, CDC_ISOLATION, DELEGATION, FDA_MDR, GUIDO, HALTER, HINKLE, POTTER, PSNET_REPORT, SAFE_PROTOCOL, YODER, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s04-21", {
      topic: "Request to cosign an unseen assessment",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "At the end of a shift, a practical nurse (LPN) asks the registered nurse to cosign a head-to-toe assessment the LPN charted on a client admitted today. The registered nurse has not seen the client this shift. What should the registered nurse do?",
      rationale:
        "A cosignature says the signer verified what the entry states. The admission assessment of a new client is the registered nurse's duty. The LPN may collect data, but the registered nurse assesses the client and charts their own findings. Signing unseen work, adding an excuse or passing the request to another nurse puts a false record in the chart.",
      sources: [DELEGATION, POTTER, { body: "Canadian Council for Practical Nurse Regulators", work: "About the Canadian Council for Practical Nurse Regulators", year: 2026, url: "https://www.ccpnr.ca/" }],
      canada:
        "In Canada, the practical nurse is a registered practical nurse (RPN) in Ontario and a licensed practical nurse elsewhere. Scope and assignment rules come from each provincial or territorial regulator, so they vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "Cosign it because the LPN is experienced", why: "Experience does not let the registered nurse attest to an assessment they did not verify." },
      { text: "Sign it and add that the RN was too busy", why: "A note does not make an unverified signature accurate." },
      { text: "Assess the client and chart own findings", why: "The registered nurse owns the admission assessment and documents only what they verified." },
      { text: "Ask the charge nurse to cosign it instead", why: "The charge nurse has not seen the client either, so the record would still be false." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-22", {
      topic: "Delegating to a mental health technician",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on an inpatient mental health unit is on suicide precautions with checks every 15 minutes. The nurse works with a mental health technician trained in unit safety. Which tasks may the nurse delegate to the technician? Select all that apply.",
      rationale:
        "Observation checks every 15 minutes, meal records, room searches by policy and escort to groups are set tasks with clear steps. A trained technician can do them. Assessing suicide risk, deciding to reduce precautions and teaching coping skills need nursing assessment and judgment. The nurse keeps those.",
      sources: [DELEGATION, HALTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Assess the client's current suicide risk", why: "Risk assessment needs nursing judgment and stays with the nurse." },
      { text: "Perform the checks every 15 minutes", why: "Scheduled observation checks are a set task for trained staff." },
      { text: "Decide when precautions can be reduced", why: "Changing precautions follows assessment and a provider prescription." },
      { text: "Record the client's meal intake", why: "Recording intake is a routine task with a set method." },
      { text: "Search the room for unsafe items per policy", why: "A policy-based room search is a trained safety task." },
      { text: "Teach the client new coping skills", why: "Teaching needs nursing knowledge and a check of learning." },
      { text: "Walk with the client to a group session", why: "An escort to a scheduled group is a routine task." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s04-23", {
      topic: "Staffing a client with disseminated zoster",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The charge nurse assigns staff for a new admission with disseminated herpes zoster on airborne and contact precautions. Which nurse should the charge nurse assign to this client?",
      rationale:
        "Disseminated zoster spreads varicella virus by air and by contact. Staff who are not immune should not enter the room when immune staff are available. The charge nurse assigns the nurse with documented immunity. A negative titer, no history of disease or vaccine and unknown status all leave the nurse at risk.",
      sources: [CDC_ISOLATION],
    }),
    kind: "mc",
    options: [
      { text: "A nurse with documented varicella immunity", why: "An immune nurse is not at risk of catching varicella from this client." },
      { text: "A nurse whose varicella titer was negative", why: "A negative titer means the nurse is not immune." },
      { text: "A nurse with no chickenpox or vaccine history", why: "No disease or vaccine history leaves the nurse likely susceptible." },
      { text: "A new nurse whose immune status is unknown", why: "Unknown status cannot be treated as immune when immune staff are available." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-24", {
      topic: "Addressing an AP's remark to a confused client",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "The nurse hears an assistive personnel (AP) tell a client with dementia, \"Stop asking me that. I already told you twice.\" The AP then leaves the room. This is the first such event the nurse has seen. What is the nurse's best action?",
      rationale:
        "The nurse supervises the AP's care. Prompt, private feedback on the specific remark corrects the behavior and keeps the AP's dignity. The nurse can review calm ways to answer repeated questions in dementia. A public rebuke shames the AP in front of the client. Reassignment or a report to the manager may follow if the pattern repeats.",
      sources: [DELEGATION, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Report the AP to the nurse manager at once", why: "A first event is handled with direct feedback. The manager is involved if it repeats." },
      { text: "Correct the AP in front of the client", why: "A public rebuke shames the AP and can upset the client." },
      { text: "Speak with the AP in private about it", why: "Private, prompt feedback on the remark corrects the behavior and supports learning." },
      { text: "Assign the AP only to clients without dementia", why: "Reassignment avoids the problem without correcting the behavior." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-25", {
      topic: "Entries that do not belong after a fall",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "A client fell in the bathroom at 0215. The nurse reviews a coworker's entry in the medical record. Click to highlight the statements that should not appear in the medical record.",
      rationale:
        "The medical record holds objective facts about the client and the care given. The safety event report is a separate quality document, so the chart does not mention it. Blaming the AP or short staffing is opinion. Concerns about staffing go to the manager. The time found, the client's words, findings, vital signs and actions belong.",
      sources: [POTTER, PSNET_REPORT],
    }),
    kind: "highlight",
    passage:
      "[[0215 Found client sitting on the bathroom floor.]]\n[[Client states, \"My feet slipped.\"]]\n[[Abrasion 2 cm long on the left elbow.]]\n[[Incident report filed per policy.]]\n[[BP 132/84 mmHg, heart rate 88/minute.]]\n[[The night AP ignored the call light, which led to the fall.]]\n[[Provider notified at 0225 and elbow x-ray prescribed.]]\n[[The unit was short staffed, which caused the fall.]]\n[[Bed alarm reset and call light placed within reach.]]",
    spans: [
      { text: "0215 Found client sitting on the bathroom floor.", why: "The time and how the client was found are objective facts." },
      { text: "Client states, \"My feet slipped.\"", why: "The client's own words are an objective record." },
      { text: "Abrasion 2 cm long on the left elbow.", why: "A measured injury is an objective finding." },
      { text: "Incident report filed per policy.", why: "The report is a separate quality document and is not named in the chart." },
      { text: "BP 132/84 mmHg, heart rate 88/minute.", why: "Vital signs after a fall are objective findings." },
      { text: "The night AP ignored the call light, which led to the fall.", why: "This blames a coworker. It is opinion, not a charted finding." },
      { text: "Provider notified at 0225 and elbow x-ray prescribed.", why: "Notification and the new prescription are care actions." },
      { text: "The unit was short staffed, which caused the fall.", why: "Staffing complaints are opinion and go to the manager, not the chart." },
      { text: "Bed alarm reset and call light placed within reach.", why: "Safety measures taken are part of the care record." },
    ],
    correct: [3, 5, 7],
  },
  {
    ...meta("rn-s04-26", {
      topic: "Infusion pump linked to an overdose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receiving hydromorphone by an infusion pump is found with a respiratory rate of 6/minute. The pump history shows it delivered far more than the programmed dose. After the client is stabilized, what should the nurse do with the pump?",
      refs: ["A user facility reports a device-related serious injury to the manufacturer within 10 work days."],
      rationale:
        "A pump that may have caused serious harm is evidence. The nurse removes it from use with the tubing, drug and settings as they were and labels it. Biomedical engineering and the manufacturer can then find the fault. The facility reports the injury to the manufacturer within 10 work days. Clearing memory or discarding tubing destroys the record.",
      sources: [FDA_MDR, PSNET_REPORT, { body: "Health Canada", work: "Mandatory reporting of serious adverse drug reactions and medical device incidents by hospitals. Guidance document", year: 2019, url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting/drugs-devices/guidance.html" }],
      canada:
        "The FDA rule does not apply in Canada. Hospitals must report serious medical device incidents in writing to Health Canada within 30 days of first documenting them, a duty in force since December 2019.",
    }),
    kind: "mc",
    options: [
      { text: "Clear the memory and return it to storage", why: "Clearing the memory destroys the record needed to find the fault." },
      { text: "Remove it from use with tubing and settings intact", why: "Keeping the device as it was lets engineers and the maker find the cause." },
      { text: "Discard the tubing and send the pump to be cleaned", why: "The tubing may hold the cause, and cleaning can alter the evidence." },
      { text: "Reprogram it and keep using it with closer checks", why: "A pump that may have overdosed a client stays out of use until checked." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-27", {
      topic: "Asked to use a provider's login",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A provider on the unit is running late. The provider asks the nurse to log in with the provider's user name and password and enter three prescriptions the provider will read aloud. Which two responses by the nurse are appropriate? Select two.",
      rationale:
        "Each user's login is a legal signature in the electronic record. Using another person's login creates entries under a false identity. Prescribing is outside the nurse's scope. The nurse declines and asks the provider, who is present, to enter the prescriptions. Sharing the nurse's password or signing later breaks the same rule.",
      sources: [POTTER, GUIDO],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Decline to use the provider's login", why: "A login is a legal signature that belongs to one user." },
      { text: "Ask the provider to enter the prescriptions", why: "The provider is present and can enter the prescriptions directly." },
      { text: "Enter them since the provider is present", why: "Presence does not make it lawful to use another user's login." },
      { text: "Enter them under the nurse's own name as prescriber", why: "Prescribing is outside the nurse's scope of practice." },
      { text: "Share the nurse's password so the provider can finish", why: "Sharing a password breaks security rules and hides who made each entry." },
      { text: "Enter them and have the provider sign later", why: "A later signature does not fix entries made under another user's login." },
    ],
    correct: [0, 1],
  },
  {
    ...meta("rn-s04-28", {
      topic: "Keeping forensic evidence usable",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 27-year-old client in the emergency department consents to a sexual assault medical forensic exam and evidence collection. Which actions by the nurse help keep the evidence usable? Select all that apply.",
      rationale:
        "Each clothing item goes in its own paper bag so moisture can escape and evidence does not transfer. Each container is labeled and sealed. The chain of custody records every person who handles the evidence. The kit stays in sight or in locked storage. Plastic bags trap moisture. A shower before the exam can remove evidence.",
      sources: [SAFE_PROTOCOL],
    }),
    kind: "sata",
    options: [
      { text: "Store all clothing in one plastic bag", why: "Plastic traps moisture and one bag lets evidence move between items." },
      { text: "Bag each clothing item in its own paper bag", why: "Separate paper bags let items breathe and keep evidence apart." },
      { text: "Label and seal each evidence container", why: "Labels and seals show the evidence was not altered." },
      { text: "Leave the kit at the desk until police arrive", why: "An unattended kit breaks the chain of custody." },
      { text: "Record each person who handles the evidence", why: "A signed record of each transfer keeps the chain of custody." },
      { text: "Offer a shower before the exam begins", why: "Washing before the exam can remove evidence. A shower is offered after." },
      { text: "Keep the kit in sight or locked storage", why: "Secure control of the kit protects the chain of custody." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s04-29", {
      topic: "Client asks the nurse for a biopsy result",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A client had a breast biopsy 2 days ago. The surgeon plans to share the results at a visit tomorrow. The client asks the nurse, \"Did my biopsy show cancer? Please tell me the truth.\" The nurse can see a malignant result in the record. What should the nurse say?",
      rationale:
        "The nurse must not lie, so saying the result is not back breaks veracity. A new cancer diagnosis is disclosed by the provider, who can answer questions on treatment. The nurse advocates for the client by asking the surgeon to talk with the client today. Telling the client to wait until tomorrow ignores the distress the client expressed.",
      sources: [ANA_CODE, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "\"I will ask your surgeon to talk with you today.\"", why: "This is honest and gets the client a prompt talk with the provider who discloses the diagnosis." },
      { text: "\"The results are not back yet, so try not to worry.\"", why: "The result is in the record, so this statement is a lie." },
      { text: "\"Yes, it shows cancer, and I am sorry to tell you.\"", why: "A new diagnosis is disclosed by the provider, who can explain the treatment options." },
      { text: "\"You will need to wait for your visit tomorrow.\"", why: "This dismisses the client's distress and does not advocate for timely disclosure." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-30", {
      topic: "Supervising a practical nurse after an opioid",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A registered nurse supervises a practical nurse (LPN) caring for a client on day 1 after knee replacement. The client received oral oxycodone at 1300. The LPN charted \"sleeping comfortably\" at each hourly check after the dose. Based on the trend, which two actions should the registered nurse take? Select two.",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "1300", "1400", "1500", "1600"],
            rows: [
              ["Respiratory rate (/minute)", "18", "14", "11", "9"],
              ["SpO2 (%)", "97", "95", "92", "89"],
              ["Sedation", "Awake", "Drowsy, easy to rouse", "Drifts off mid-sentence", "Hard to rouse"],
            ],
          },
        },
      ],
      rationale:
        "From 1300 to 1600 the respiratory rate falls from 18 to 9/minute and SpO2 from 97 to 89%. The client moves from awake to hard to rouse. This is rising sedation after an opioid, not comfort. The registered nurse assesses the client now. The LPN missed the pattern, so the registered nurse reviews which changes must be reported at once.",
      sources: [HINKLE, DELEGATION, { body: "Canadian Council for Practical Nurse Regulators", work: "About the Canadian Council for Practical Nurse Regulators", year: 2026, url: "https://www.ccpnr.ca/" }],
      canada:
        "In Canada, the practical nurse is a registered practical nurse (RPN) in Ontario and a licensed practical nurse elsewhere. Scope and assignment rules come from each provincial or territorial regulator, so they vary by province.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Go to the bedside and assess the client now", why: "Falling breathing, falling SpO2 and deeper sedation need immediate registered nurse assessment." },
      { text: "Ask the LPN to recheck in 1 hour", why: "The trend is worsening each hour. Waiting risks respiratory arrest." },
      { text: "Review reportable changes with the LPN", why: "The LPN charted sleep while sedation rose. Supervision closes this gap." },
      { text: "Have the AP take vital signs every 30 minutes", why: "An unstable client is not handed to the AP. The registered nurse assesses." },
      { text: "Document the trend for the next shift", why: "Charting alone does not treat a client who is hard to rouse." },
      { text: "Tell the LPN to give the next oxycodone on time", why: "More opioid would deepen the sedation and slow breathing further." },
    ],
    correct: [0, 2],
  },
];
