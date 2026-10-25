import type { Item } from "@/engine/types";
import { EMTALA, HALTER, HICS, HINKLE, ON_IMS, SAMHSA_CRISIS, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s29-31", {
      topic: "Police drop-off at a crisis receiving unit",
      cjmm: "action",
      process: "nursing-process",
      canada: "In Canada, police may bring a person for assessment under the provincial mental health act, which names the facilities that may receive them. The rules vary by province.",
      difficulty: 2,
      stem: "At 0200 a police officer brings a 29-year-old man to a behavioral health crisis receiving unit. He is pacing and says voices tell him he is being watched. He has no weapons and is not intoxicated. Eleven of the unit's 12 recliners are in use. What should the nurse do?",
      rationale:
        "Crisis receiving units are meant to accept all referrals and to have a no-rejection policy for first responders. A recliner is open, and the man has no weapon or intoxication. The nurse accepts him and starts a crisis assessment that includes suicide and violence risk screening. Sending him to the emergency department or asking for medical clearance first defeats the purpose of the unit. Making the officer wait delays care.",
      sources: [SAMHSA_CRISIS],
    }),
    kind: "mc",
    options: [
      { text: "Ask the officer to take the man to the hospital emergency department", why: "Crisis units accept first responder drop-offs so people in crisis avoid the emergency department." },
      { text: "Ask the officer to wait in the lobby until another recliner opens", why: "A recliner is open, and waiting delays care for a man in crisis." },
      { text: "Require a medical clearance exam at the hospital before admission", why: "Crisis units do not require medical clearance before admission. They assess stability on site." },
      { text: "Accept the man and begin a crisis assessment on the unit", why: "Crisis units accept all referrals and keep a no-rejection policy for first responders." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-32", {
      topic: "Medical clearance at a crisis unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 41-year-old woman walks into a behavioral health crisis unit asking for help with thoughts of suicide. She smells of alcohol and says she had \"a few beers\" 3 hours ago. She is alert, answers questions clearly and walks steadily. Her vital signs are within normal limits. A staff member says she must go to the emergency department for medical clearance first. How should the nurse interpret this?",
      rationale:
        "Crisis receiving units do not require medical clearance before admission. They assess and support medical stability on the unit. The woman is alert, steady and has normal vital signs, so she can be admitted and screened for suicide risk now. If she later needs hospital care, the crisis unit arranges it rather than sending her away. Waiting until she is sober delays a suicide risk assessment.",
      sources: [SAMHSA_CRISIS, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "She can be admitted, with her medical stability assessed on the unit", why: "Crisis units assess medical stability on site rather than requiring clearance first." },
      { text: "She must be cleared in the emergency department before admission", why: "Requiring outside clearance first is not consistent with crisis unit standards." },
      { text: "She must wait until she is sober before any assessment begins", why: "Waiting delays suicide risk assessment for a woman who is alert and steady." },
      { text: "She should be referred back to her primary care provider", why: "Thoughts of suicide need crisis assessment now, not an outpatient referral." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-33", {
      topic: "First client to see on a crisis stabilization unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      canada: "Aspirin is sold in Canada under the generic name acetylsalicylic acid, often written ASA.",
      difficulty: 3,
      stem: "Four adults stayed overnight on a behavioral health crisis stabilization unit. After the 0700 handoff, which client should the nurse assess first?",
      rationale:
        "A newly disclosed ingestion of aspirin with ringing in the ears suggests salicylate toxicity, a medical emergency. This client is assessed first, and the unit arranges emergency transfer. Little sleep with rapid speech needs monitoring but is not immediately dangerous. A tearful client asking to call family needs support. A missed antipsychotic dose is reported and rescheduled.",
      sources: [HINKLE, SAMHSA_CRISIS],
    }),
    kind: "mc",
    options: [
      { text: "A client with bipolar disorder who slept 3 hours and is talking quickly", why: "Reduced sleep and rapid speech need monitoring but are not an immediate threat." },
      { text: "A client who was tearful overnight and asks to call a family member", why: "Emotional support is needed, and it can follow the medical emergency." },
      { text: "A client who now says she swallowed a bottle of aspirin and has ringing ears", why: "A large aspirin ingestion with tinnitus suggests salicylate toxicity, which can be fatal." },
      { text: "A client with schizophrenia who missed last night's oral antipsychotic", why: "A single missed dose is reported to the prescriber and is not urgent." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-34", {
      topic: "Role of a peer support specialist in crisis care",
      cjmm: "generate",
      process: "caring",
      canada: "In Canada, involuntary holds are made under each province's mental health act, so who may decide on one varies by province.",
      difficulty: 3,
      stem: "The nurse on a behavioral health crisis unit plans how the team will share the work for a newly admitted adult in crisis. Which tasks fit the role of the peer support specialist? Select all that apply.",
      rationale:
        "Peer support specialists bring lived experience of recovery. They share their story to build hope, stay with and listen to people in distress and help link them to community supports. They do not duplicate the work of licensed staff. Suicide risk assessment, decisions about involuntary holds and giving medications belong to licensed clinicians.",
      sources: [SAMHSA_CRISIS],
    }),
    kind: "sata",
    options: [
      { text: "Share their own recovery story to build hope", why: "Lived experience helps the person see that recovery is possible." },
      { text: "Complete the formal suicide risk assessment", why: "Suicide risk assessment is done by licensed clinicians." },
      { text: "Help the client link to community supports after discharge", why: "Peers help connect people to ongoing support in the community." },
      { text: "Decide whether the client needs an involuntary hold", why: "Hold decisions belong to licensed clinicians under state law." },
      { text: "Sit with the client and listen during periods of distress", why: "Peers offer presence and listening that ease fear during a crisis." },
      { text: "Give the client a prescribed as-needed medication", why: "Giving medications is a licensed nurse task." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s29-35", {
      topic: "Excess water drinking on a crisis unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 33-year-old client with schizophrenia has been on a behavioral health crisis unit for 18 hours. Staff have seen the client drink from the bathroom sink many times and refill a large cup at the water cooler. The client now has a headache, has vomited twice and is newly confused. Weight is 3 kg above the admission weight. The client takes no lithium. The unit cannot draw blood or give IV fluids. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Heavy water drinking with a weight gain of 3 kg, headache, vomiting and new confusion fits water intoxication with a low sodium level. Severe hyponatremia can cause seizures. Staff supervise the client's access to water, and the unit arranges emergency transfer because it cannot draw blood or give IV fluids. The serum sodium level and the level of consciousness show how severe the problem is and whether it is worsening.",
      sources: [HALTER, HINKLE, SAMHSA_CRISIS],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Water intoxication", why: "Heavy water intake, weight gain, vomiting and confusion fit dilution of serum sodium." },
      { text: "Lithium toxicity", why: "The stem states the client takes no lithium." },
      { text: "Neuroleptic malignant syndrome", why: "This shows rigidity and a high fever, which the stem does not give." },
      { text: "Worsening psychosis", why: "Psychosis does not explain the vomiting, weight gain and new confusion." },
    ],
    actions: [
      { text: "Supervise access to water", why: "Limiting further water intake stops the sodium from falling further." },
      { text: "Offer extra fluids for the vomiting", why: "More water would dilute the sodium further." },
      { text: "Arrange emergency transfer", why: "The client needs blood tests and treatment the unit cannot provide." },
      { text: "Give an as-needed antipsychotic", why: "The confusion has a medical cause that a sedating drug would mask." },
      { text: "Place the client in seclusion", why: "Confusion from a medical problem is not a reason for seclusion." },
    ],
    parameters: [
      { text: "Serum sodium level", why: "The sodium level confirms the problem and guides how fast it is corrected." },
      { text: "Fasting lipid panel", why: "Lipids do not guide acute care." },
      { text: "Level of consciousness", why: "Worsening confusion warns of brain swelling and seizure risk." },
      { text: "Hemoglobin A1C", why: "A1C reflects long-term glucose control and does not guide this emergency." },
      { text: "Monthly body weight", why: "A monthly weight is too slow to track an acute change." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [0, 2] },
  },
  {
    ...meta("rn-s29-36", {
      topic: "Transfer before the receiving hospital accepts",
      cjmm: "action",
      process: "nursing-process",
      canada: "EMTALA is US federal law and does not apply in Canada. Transfers between hospitals in Canada follow provincial systems and policies, so the rules vary by province.",
      difficulty: 4,
      version: 2,
      stem: "A 64-year-old client in the emergency department of a rural critical access hospital has an upper GI bleed that is not yet stable. The client needs endoscopy, which the hospital cannot provide. The provider has signed a certification that the benefits of transfer outweigh the risks. The ambulance crew has arrived. The regional hospital's transfer center says it is still looking for a bed and has not accepted the client. What should the nurse do?",
      rationale:
        "An appropriate transfer of an unstable client needs a receiving hospital that has space and staff and has agreed to accept the client. A signed certification alone does not meet this. The nurse keeps the client, continues treatment within the hospital's capacity and tells the provider so another hospital can be sought. Arrival at a hospital that has not accepted, or a family car with no monitoring, does not meet the rules.",
      sources: [EMTALA],
    }),
    kind: "mc",
    options: [
      { text: "Send the client now because the certification is signed", why: "A certification does not replace acceptance by the receiving hospital." },
      { text: "Keep treating the client until a hospital agrees to accept", why: "An appropriate transfer needs a receiving hospital that has agreed to accept the client." },
      { text: "Send the client to the regional emergency department anyway", why: "Arriving without acceptance does not meet the transfer rules and risks a delay in care." },
      { text: "Ask the family to drive the client to the regional hospital", why: "Transfer needs qualified staff and equipment, not a private car." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-37", {
      topic: "Working within incident command during a tornado surge",
      cjmm: "action",
      process: "nursing-process",
      canada: "Canadian hospitals use incident management systems set by their province, such as Ontario's Incident Management System. These share the core functions of command, operations, planning, logistics and finance.",
      difficulty: 4,
      stem: "A tornado strikes a rural town and the critical access hospital activates its hospital incident command system. A staff nurse is assigned as leader of the casualty treatment area. Which actions by the nurse follow incident command principles? Select all that apply.",
      rationale:
        "Each person in incident command reports to one supervisor and does not keep doing usual duties at the same time. The job action sheet sets the mission, the reporting line and the first tasks. Actions and times are logged on the activity log. Supply requests go to the logistics section. Information for the media comes from the public information officer.",
      sources: [HICS, ON_IMS],
    }),
    kind: "sata",
    options: [
      { text: "Report to the one supervisor named for the position", why: "Unity of command means each person reports to a single supervisor." },
      { text: "Keep running the medical unit while also leading the area", why: "Doing usual duties and an incident role at once breaks unity of command." },
      { text: "Read the job action sheet for the assigned position", why: "The job action sheet lists the mission, reporting line and key tasks." },
      { text: "Tell a local news crew how many casualties have arrived", why: "Public information goes through the public information officer." },
      { text: "Record actions and times on the activity log", why: "The log documents each action taken during the operational period." },
      { text: "Order extra splints directly from a vendor by phone", why: "Resource requests go to the logistics section using set procedures." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s29-38", {
      topic: "Transfer requested by a client before stabilization",
      cjmm: "analyze",
      process: "communication",
      canada: "EMTALA is US federal law and does not apply in Canada. A client's request for transfer follows provincial consent law and hospital policy, which vary by province.",
      difficulty: 4,
      stem: "A 70-year-old client with a new atrial fibrillation and a heart rate of 146/minute is in the emergency department of a critical access hospital. The condition is not yet stable. The client says, \"Send me to the city hospital where my cardiologist works.\" The provider has not certified that transfer benefits outweigh the risks. Which requirement must be met for this transfer to proceed?",
      rationale:
        "An unstable client may be transferred at their own request only in writing. The request follows an explanation of the hospital's duty to treat and the risks of transfer, and it states the reason. A spoken request in the chart is not enough. The receiving hospital must still agree to accept, and qualified staff and equipment are still needed. Payment approval is not a condition.",
      sources: [EMTALA],
    }),
    kind: "mc",
    options: [
      { text: "The client's spoken request is recorded in the nursing notes", why: "A spoken request does not meet the rule. The request must be in writing." },
      { text: "The client's insurer approves payment for the receiving hospital", why: "Payment approval is not a condition of an emergency transfer." },
      { text: "The cardiologist agrees to see the client in the office this week", why: "An office visit does not make the transfer appropriate or lawful." },
      { text: "The client signs a written request after hearing the risks", why: "An unstable client's own request must be in writing after the duties and risks are explained." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-39", {
      topic: "Off-duty nurse who arrives to help in a disaster",
      cjmm: "action",
      process: "nursing-process",
      canada: "In Canada, a nurse must be registered with the regulator in the province where care is given. Some regulators offer emergency registration during a disaster, so this varies by province.",
      difficulty: 2,
      stem: "During a mass casualty response at a critical access hospital, a woman arrives at the emergency entrance. She says she is a registered nurse from another state who is visiting family and wants to help. The emergency department is crowded. What should the charge nurse do?",
      rationale:
        "Volunteers who arrive during an incident sign in with the labor pool and credentialing unit in the logistics section. That unit verifies identity and license and assigns the volunteer to a supervisor. Sending her straight to care skips verification. Turning her away loses help that may be needed. Checking a badge on the spot does not verify a license.",
      sources: [HICS],
    }),
    kind: "mc",
    options: [
      { text: "Assign her to the treatment area now because staff are short", why: "Assigning her before verification skips the incident check of identity and license." },
      { text: "Tell her the hospital cannot use help from out of state", why: "Volunteers can be used once credentials are verified through the incident system." },
      { text: "Send her to the labor pool and credentialing unit to sign in", why: "This unit verifies identity and license and then assigns volunteers to a supervisor." },
      { text: "Look at her employee badge and then pair her with a nurse", why: "A badge from another employer does not verify a license to practice." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-40", {
      topic: "Matching surge tasks to incident command sections",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A critical access hospital is running its hospital incident command system during a flood. The nurse educator reviews the structure with staff. Drag the section or officer responsible for each task. Each choice is used once at most.",
      rationale:
        "The logistics section holds the labor pool and credentialing unit, which signs in and verifies volunteers. The finance and administration section tracks staff time and costs for reimbursement. The planning section collects job action sheets at the end of each operational period. The operations section directs care of casualties through the medical care branch. Media questions go to the public information officer.",
      sources: [HICS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Sign in volunteer nurses and verify their licenses", "Track staff hours worked for later reimbursement", "Collect completed job action sheets at shift end", "Direct medical care of arriving casualties"],
    tokens: [
      { text: "Operations section", why: "Operations directs care of casualties through the medical care branch." },
      { text: "Planning section", why: "Planning collects job action sheets and keeps the incident file." },
      { text: "Public information officer", why: "This officer handles media and public messages, none of these tasks." },
      { text: "Logistics section", why: "Logistics holds the labor pool and credentialing unit." },
      { text: "Finance and administration section", why: "This section tracks time and costs for reimbursement." },
      { text: "Liaison officer", why: "This officer links with outside agencies, none of these tasks." },
    ],
    correct: [3, 4, 1, 0],
  },
];
