import type { Item, Source } from "@/engine/types";
import { HINKLE, HIPAA, HIPAA_ACCESS, HIPAA_DIRECTORY, HIPAA_MESSAGES, HIPAA_MIN, LANGLEY, POTTER, SAFER_ID, meta } from "./common";

const AACN_ALARMS: Source = {
  body: "American Association of Critical-Care Nurses",
  work: "Practice Alert: Managing Alarms in Acute Care Across the Life Span: Electrocardiography and Pulse Oximetry",
  year: 2018,
  url: "https://www.aacn.org/clinical-resources/practice-alerts/managing-alarms-in-acute-care-across-the-life-span",
};
const MORSE: Source = {
  body: "Morse JM",
  work: "Preventing Patient Falls: Establishing a Fall Intervention Program, 2nd edition",
  year: 2009,
  url: "https://www.springerpub.com/preventing-patient-falls-9780826103895.html",
};
const SAFER_COMM: Source = {
  body: "Office of the National Coordinator for Health Information Technology",
  work: "SAFER Guides: Clinician Communication",
  year: 2025,
  url: "https://healthit.gov/wp-content/uploads/2025/06/SAFER-Guide-1.-Clinical-Communication-Final.pdf",
};
const SSC: Source = {
  body: "Evans L, Rhodes A, Alhazzani W, et al.",
  work: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Critical Care Medicine 49(11):e1063",
  year: 2021,
  url: "https://pubmed.ncbi.nlm.nih.gov/34605781/",
};

export const PART5: Item[] = [
  {
    ...meta("rn-s05-41", {
      topic: "First client to see on a step-down unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "The nurse on a step-down unit finishes handoff for four clients. Which client should the nurse assess first?",
      rationale:
        "New neck swelling with hoarseness 6 hours after carotid endarterectomy suggests a growing hematoma. A hematoma can compress the trachea and block the airway, so this client comes first. Continuous bubbling in the water seal points to an air leak that needs checking next, but breathing is unlabored with an SpO2 of 95%. Atrial fibrillation at 104/minute with a BP of 128/76 mmHg is stable. A glucose falling from 380 to 310 mg/dL on an insulin infusion is the expected response.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report glucose in mmol/L only, so these results read 21.1 and then 17.2 mmol/L. The Medical Council of Canada lists 4.0 to 11.0 mmol/L as the random glucose range.",
    }),
    kind: "mc",
    options: [
      { text: "New atrial fibrillation, heart rate 104/minute, BP 128/76 mmHg", why: "The rate is controlled enough and the BP is normal. This client is stable." },
      { text: "Carotid endarterectomy 6 hours ago, new hoarseness and neck swelling", why: "A growing neck hematoma can compress the airway." },
      { text: "Chest tube with continuous water seal bubbling, SpO2 95%, breathing unlabored", why: "An air leak needs checking, but the client is breathing well." },
      { text: "Insulin infusion, glucose 310 mg/dL (17.2 mmol/L), down from 380 mg/dL (21.1 mmol/L)", why: "A steady fall in glucose is the expected response to insulin." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-42", {
      topic: "Disclosures allowed without a signed release",
      cjmm: "analyze",
      process: "communication",
      difficulty: 4,
      stem: "A client has active pulmonary tuberculosis and a history of heart failure. Several requests for the client's information reach the unit. Which disclosures are permitted without the client's written authorization? Select all that apply.",
      rationale:
        "The Privacy Rule allows disclosure without authorization for treatment, payment and required public health reporting. A consulting cardiologist needs the information for treatment. The client's insurer receives what it needs for payment. Tuberculosis is a reportable disease, so the health department is told. An employer, a reporter and a church group have no treatment, payment or public health role and need the client's authorization.",
      sources: [HIPAA, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, section 38(1)(b)", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }, { body: "Public Health Agency of Canada, Canadian Thoracic Society", work: "Canadian Tuberculosis Standards, 8th edition, Chapter 1: Epidemiology of Tuberculosis in Canada", year: 2022, url: "https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/epidemiology.html" }],
      canada: "HIPAA does not apply in Canada, and privacy law varies by province. Ontario's PHIPA s. 38(1)(b) permits disclosure for payment by the Minister or another custodian, not a private insurer. Active TB cases are reported to provincial or territorial TB programs.",
    }),
    kind: "sata",
    options: [
      { text: "Tell the client's employer about the diagnosis", why: "An employer is not part of treatment or payment and needs authorization." },
      { text: "Report the tuberculosis case to the health department", why: "Required public health reporting is allowed without authorization." },
      { text: "Confirm the client's condition to a local reporter", why: "Media requests need the client's authorization." },
      { text: "Send the history to the consulting cardiologist", why: "Sharing with another provider for treatment is permitted." },
      { text: "Update the client's church group on the illness", why: "A church group has no care role and needs the client's agreement." },
      { text: "Give the client's insurer the records it needs for payment", why: "Disclosure for payment is permitted without authorization." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s05-43", {
      topic: "Leaving a workstation to answer a call light",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "The nurse is charting at a hallway computer when a call light comes on. The nurse will be away from the computer for several minutes. What should the nurse do with the open electronic record?",
      rationale:
        "An open record on an unattended screen can be read or changed by anyone passing by. Locking the screen or logging off protects the information and keeps entries tied to the right user. A minimized window can be reopened by anyone. A screen turned toward the wall can still be seen. Leaving it open for a quick return leaves it unprotected.",
      sources: [HIPAA, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Lock the screen or log off", why: "This blocks others from viewing or changing the record." },
      { text: "Minimize the chart window", why: "Anyone at the computer can reopen a minimized window." },
      { text: "Leave it open for a quick return", why: "An unattended open record can be read by anyone passing." },
      { text: "Turn the monitor toward the wall", why: "The screen can still be seen and used by others." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-44", {
      topic: "Sequence of barcode medication administration",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give a scheduled oral medication using barcode scanning at the bedside. Place the steps in order.",
      rationale:
        "The nurse first confirms the client with two identifiers against the wristband. Scanning the wristband then opens the right record. Scanning the medication checks the drug and dose against the prescription. The nurse gives the drug after the scan confirms a match. Charting a dose before scanning skips the check and records care that has not happened.",
      sources: [SAFER_ID, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Scan the medication package", why: "The drug scan follows the wristband scan and checks the drug and dose." },
      { text: "Chart the dose before scanning", why: "Charting before the scan skips the safety check and is inaccurate." },
      { text: "Confirm two client identifiers", why: "Identity is confirmed first so the right record is opened." },
      { text: "Give the medication to the client", why: "The drug is given only after the scan confirms a match." },
      { text: "Scan the client's wristband", why: "The wristband scan follows the identity check and opens the record." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s05-45", {
      topic: "Review of privacy teaching with new graduates",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "The nurse educator reviews privacy rules with newly licensed nurses. Which two statements by the nurses need further teaching? Select two.",
      rationale:
        "A caller who knows a birth date is not entitled to a client's condition. Staff share only what the client allows. Being a parent does not give a nurse a job reason to open a child's chart at work. Sharing needed details with a consulting team is treatment. A call back request protects privacy on voicemail. A client may choose regular email after hearing the risk. An involved spouse may get relevant updates when the client is sedated.",
      sources: [HIPAA_MIN, HIPAA_MESSAGES, HIPAA_ACCESS, HIPAA_DIRECTORY],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I may share needed details with the consulting team.\"", why: "Sharing for treatment between providers is permitted." },
      { text: "\"I can give any caller who knows the birth date an update.\"", why: "Knowing a birth date does not entitle a caller to health information." },
      { text: "\"I leave a call back request, not results, on voicemail.\"", why: "This limits what others in the home may hear." },
      { text: "\"A client may get records by email after hearing the risk.\"", why: "A client may choose unencrypted email once warned." },
      { text: "\"I can open my own child's chart at work as the parent.\"", why: "Access at work requires a job need. A parent requests the record through the release process." },
      { text: "\"I can update an involved spouse when the client is sedated.\"", why: "Relevant sharing is allowed when the client cannot agree or object." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s05-46", {
      topic: "Plan to reduce nuisance monitor alarms",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "Staff on a telemetry unit report that frequent false monitor alarms make them tune alarms out. Which actions should the unit team plan? Select all that apply.",
      rationale:
        "Most monitor alarms are false or need no action, which drives alarm fatigue. Setting limits to each client's baseline cuts nonactionable alarms. Daily electrode changes with skin prep reduce artifact. Stopping monitoring for clients who no longer meet criteria removes needless alarms. Lower volume, disabled alarms and silencing without a check all hide the alarms that matter.",
      sources: [AACN_ALARMS],
    }),
    kind: "sata",
    options: [
      { text: "Set alarm limits to each client's baseline", why: "Tailored limits cut alarms that need no action." },
      { text: "Turn the alarm volume down at night", why: "Lower volume can hide a real alarm." },
      { text: "Change electrodes daily after skin prep", why: "Fresh electrodes on prepared skin reduce false signals." },
      { text: "Disable the alarms that sound most often", why: "Disabling alarms can miss a true event." },
      { text: "End monitoring when criteria are no longer met", why: "Removing needless monitoring removes needless alarms." },
      { text: "Silence alarms at the station without a check", why: "Silencing without assessing the client can miss a real event." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s05-47", {
      topic: "Change in a fall risk score",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The unit uses the Morse Fall Scale with these bands: 0 to 24 low risk, 25 to 44 moderate risk and 45 or more high risk. A client scored 25 on admission. Today the client is newly confused and uses a walker, and the score is now 55. What does this change show?",
      rationale:
        "A score of 25 fell in the moderate band. A score of 55 is above 45, so the client is now high risk. New confusion and a walker both add points on the scale, which explains the rise. The plan of care needs high risk measures.",
      sources: [MORSE],
    }),
    kind: "mc",
    options: [
      { text: "The client moved from moderate to high fall risk", why: "The score rose from the moderate band to 55, which is high risk." },
      { text: "The client moved from low risk to moderate fall risk", why: "A score of 25 was already moderate risk." },
      { text: "The score rose because of a charting error", why: "New confusion and a walker explain the higher score." },
      { text: "The client's risk band has not changed", why: "The score crossed from the moderate band into the high band." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-48", {
      topic: "Deciding after a bedside report pilot",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A unit piloted bedside shift report for 4 weeks to cut missed handoff items. Missed items fell from 18% to 9% of handoffs. Nurses reported that roommates could overhear private details in shared rooms. What should the team decide at the end of this cycle?",
      rationale:
        "The pilot met part of its aim, because missed items fell from 18% to 9%. It also raised a privacy problem in shared rooms. The best next step is to adapt the process, such as sharing sensitive details away from the roommate, and test again. Spreading it now carries the privacy problem to other units. Dropping it loses a real gain. Repeating it unchanged ignores what the team learned.",
      sources: [LANGLEY],
    }),
    kind: "mc",
    options: [
      { text: "Adopt the change on every unit next week", why: "Spreading now would carry the privacy problem to other units." },
      { text: "Adapt the process for shared rooms and test again", why: "This keeps the gain and addresses the privacy issue found." },
      { text: "Abandon the change because of the privacy concern", why: "Dropping the change loses the drop in missed items." },
      { text: "Repeat the same pilot unchanged on this unit", why: "Repeating it unchanged ignores the problem the pilot revealed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-49", {
      topic: "Safe use of secure messaging with providers",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 3,
      stem: "The nurse educator observes a new nurse who contacts providers through the facility's secure messaging app. Which actions by the new nurse meet safe practice? Select all that apply.",
      rationale:
        "Secure messages need two client identifiers so the provider acts on the right client. The approved app on a work device keeps data within facility safeguards. An urgent change such as a sudden drop in BP calls for a phone call so the nurse knows the provider has heard it. A personal phone photo, a critical result left in a message and a shared login each break safe practice.",
      sources: [SAFER_COMM, HIPAA],
    }),
    kind: "sata",
    options: [
      { text: "Texts a wound photo from a personal phone", why: "The image leaves facility safeguards on a personal device." },
      { text: "Includes two client identifiers in each message", why: "Two identifiers make sure the provider acts on the right client." },
      { text: "Messages a critical potassium result and waits", why: "A critical result needs direct verbal report so receipt is confirmed." },
      { text: "Phones the provider about a sudden drop in BP", why: "An urgent change needs a live conversation, not a message." },
      { text: "Uses the approved secure app on a work device", why: "The approved app keeps messages within facility safeguards." },
      { text: "Shares the app login with a nursing student", why: "Shared logins break accountability and access control." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s05-50", {
      topic: "First client to see on a medical intermediate unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "The nurse on a medical intermediate care unit reviews four clients at the start of the shift. Which client should the nurse assess first?",
      rationale:
        "A BP of 84/50 mmHg after 2 L of fluid with a lactate of 4.2 mmol/L gives a mean arterial pressure below 65 mmHg and points to septic shock. The client needs vasopressors and a rapid team response. Respirations of 24/minute with an SpO2 of 92% on oxygen are concerning but stable. A heart rate of 98/minute with a normal BP after black stool needs close watching. New confusion in cirrhosis needs lactulose and can follow the shock.",
      refs: ["Septic shock needs vasopressors to keep the mean arterial pressure at 65 mmHg or more."],
      sources: [SSC, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Pneumonia, respirations 24/minute, SpO2 92% on 2 L/minute", why: "The rate is up but oxygenation is holding on oxygen." },
      { text: "Upper GI bleed, black stool, heart rate 98/minute, BP 118/72 mmHg", why: "Vital signs are stable for now. This client is seen soon after." },
      { text: "Sepsis, lactate 4.2 mmol/L, BP 84/50 mmHg after 2 L of fluid", why: "Low BP after fluids with a high lactate signals septic shock." },
      { text: "Cirrhosis, new confusion, lactulose due at 1000", why: "Encephalopathy needs treatment but is not the most urgent threat." },
    ],
    correct: 2,
  },
];
