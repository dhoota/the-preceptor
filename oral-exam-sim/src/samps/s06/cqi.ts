// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

const CIAF: Source = {
  id: "ciaf",
  citation: "Canadian Patient Safety Institute. Canadian Incident Analysis Framework. 2012.",
};
const CDG: Source = {
  id: "cpsi-disclosure",
  citation: "Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines. Being open and honest with patients and families. 2011.",
  url: "https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/",
};
const CMPA_DISCLOSURE: Source = {
  id: "cmpa-disclosure",
  citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery. Open and honest communication with patients.",
};
const CMPA_RESULTS: Source = {
  id: "cmpa-results",
  citation: "Canadian Medical Protective Association. Guidance on managing test results and follow up.",
};
const IHI: Source = {
  id: "improvement-guide",
  citation: "Langley GJ, et al. The Improvement Guide. A Practical Approach to Enhancing Organizational Performance. 2nd ed. Jossey-Bass. 2009.",
};
const PERLA: Source = {
  id: "perla-run-chart",
  citation: "Perla RJ, Provost LP, Murray SK. The run chart. A simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.",
};
const DONABEDIAN: Source = {
  id: "donabedian",
  citation: "Donabedian A. The quality of care. How can it be assessed? JAMA. 1988.",
};
const ISMP_DNU: Source = {
  id: "ismp-dnu",
  citation: "ISMP Canada. Do Not Use. Dangerous abbreviations, symbols and dose designations. 2006, reaffirmed 2018, updated 2025.",
  url: "https://ismpcanada.ca/bulletin/dangerous-abbreviations/",
};
const ISMP_HYDRO: Source = {
  id: "ismp-hydromorphone",
  citation: "ISMP Canada. Safety bulletins on hydromorphone and morphine mix-ups.",
};
const ACCRED: Source = {
  id: "accreditation-rop",
  citation: "Accreditation Canada. Required Organizational Practices. Client identification, medication reconciliation and information transfer at care transitions.",
};
const PHAC_IPC: Source = {
  id: "phac-ipc",
  citation: "Public Health Agency of Canada. Routine practices and additional precautions for preventing the transmission of infection in healthcare settings.",
};
const SSC: Source = {
  id: "ssc-2021",
  citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
};
const STARMER: Source = {
  id: "ipass",
  citation: "Starmer AJ, et al. Changes in medical errors after implementation of a handoff program. N Engl J Med. 2014.",
};
const MARX: Source = {
  id: "just-culture",
  citation: "Marx D. Patient safety and the just culture. A primer for health care executives. Columbia University. 2001.",
};
const TEAMSTEPPS: Source = {
  id: "teamstepps",
  citation: "Agency for Healthcare Research and Quality. TeamSTEPPS. Team strategies and tools to enhance performance and patient safety.",
};
const CCS_STEMI: Source = {
  id: "ccs-stemi",
  citation: "Wong GC, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30760415/",
};
const QCIPA: Source = {
  id: "qcipa",
  citation: "Ontario. Quality of Care Information Protection Act, 2016.",
};
const APOLOGY: Source = {
  id: "apology-act",
  citation: "Ontario. Apology Act, 2009.",
};
const ECFAA: Source = {
  id: "ecfaa",
  citation: "Ontario. Excellent Care for All Act, 2010.",
};

const base = { topic: "cqi", reviewed: true, author: AUTHOR, version: 1 } as const;

const DISCIPLINE = { text: "Discipline or remove the staff member", match: ["discipline", "suspend", "fire the", "terminate"] };
const EDUCATION_ONLY = { text: "Staff education or reminders alone", match: ["education alone", "education only", "educate staff", "staff education", "remind", "reminder", "retrain", "in service", "memo"] };

export const CQI_SAMPS: Samp[] = [
  {
    ...base,
    id: "cqi-01",
    title: "A call from the blood bank",
    stem:
      "During a busy evening, two older men with similar surnames are on adjacent stretchers in your department. A nurse printed specimen labels for both at the central desk, drew blood from each, and labelled all the tubes back at the desk. The blood bank calls. One man's group and screen shows A positive, but his historical group is O positive. A new sample confirms O positive. No blood has been given.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "This is a near miss. List THREE contributing factors you would explore in the incident analysis.",
        required: 3,
        accept: [
          { id: "away", text: "Labels printed in advance and tubes labelled away from the bedside", match: ["away from bedside", "away from the bedside", "not at bedside", "not at the bedside", "at the desk", "pre printed", "preprinted", "printed in advance", "batch", "labelling"] },
          { id: "names", text: "Similar names in adjacent spaces", match: ["similar name", "same name", "sound alike", "similar surname", "adjacent"] },
          { id: "ident", text: "Two identifiers not checked against the wristband", match: ["identifier", "wristband", "armband", "id band", "identification", "positive patient", "no identifier", "not check identifier", "not checked identifier", "no wristband", "not check wristband", "without identifier", "no id check"] },
          { id: "workload", text: "Workload, crowding and interruptions", match: ["workload", "crowding", "busy", "interruption", "distraction", "staffing", "fatigue"] },
          { id: "tech", text: "No bedside barcode or electronic identification system", match: ["barcode", "bar code", "scanner", "scanning", "electronic", "no barcode", "no bar code", "no scanner", "no scanning", "no electronic"] },
          { id: "policy", text: "Unclear policy, training or orientation on specimen collection", match: ["policy", "procedure", "training", "orientation", "protocol", "no policy", "no protocol", "no training", "no procedure"] },
        ],
        explanation:
          "The Canadian Incident Analysis Framework looks at task, equipment, environment, patient, team and organizational factors, not only the individual. Printing labels in advance and labelling at a desk defeat bedside identification. Similar names and a busy unit make the error likely.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO acceptable patient identifiers for specimen collection.",
        required: 2,
        accept: [
          { id: "name", text: "Full name", match: ["name"] },
          { id: "dob", text: "Date of birth", match: ["date of birth", "dob", "birth date", "birthdate"] },
          { id: "hcn", text: "Provincial health card number", match: ["health card", "health number", "ohip", "health insurance number", "phn"] },
          { id: "mrn", text: "Hospital medical record number", match: ["medical record", "mrn", "chart number", "hospital number", "record number"] },
        ],
        unacceptable: [
          { text: "Bed, room or stretcher location", match: ["bed", "room", "stretcher", "location"] },
          { text: "Diagnosis", match: ["diagnosis"] },
        ],
        explanation:
          "Accreditation Canada requires at least two person specific identifiers, such as full name, date of birth, health card number or medical record number. Location is never an identifier because patients move. Confirm identifiers against the wristband and with the patient when possible.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "accreditation-rop",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO system level corrective actions that would be stronger than staff education.",
        required: 2,
        accept: [
          { id: "barcode", text: "Barcode positive patient identification linking wristband and label at the bedside", match: ["barcode", "bar code", "scan", "positive patient identification", "electronic identification"] },
          { id: "bedside", text: "Print labels only at the bedside, one patient at a time", match: ["bedside printer", "bedside label", "print at bedside", "print at the bedside", "one patient at a time", "label at bedside", "label at the bedside"] },
          { id: "noprint", text: "Eliminate pre-printed or batch printed labels", match: ["eliminate pre printed", "no pre printed", "ban pre printed", "remove pre printed", "no preprinted", "eliminate preprinted", "no batch", "stop printing in advance"] },
          { id: "second", text: "Require a second independent sample to confirm group before issuing group specific blood", match: ["second sample", "two sample", "confirmatory sample", "group check", "second specimen"] },
          { id: "forcing", text: "Blood bank rejects samples without bedside verification", match: ["reject", "forcing function", "hard stop"] },
          { id: "separate", text: "Separate patients with similar names and use name alert flags", match: ["name alert", "similar name", "separate patient", "flag"] },
        ],
        unacceptable: [EDUCATION_ONLY, DISCIPLINE],
        explanation:
          "Forcing functions and automation, such as barcode identification and bedside printing, are the strongest actions. Standardizing processes is intermediate. Education and reminders are the weakest and rarely prevent recurrence alone. Blaming the nurse misses the system design problem.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
    ],
    sources: [CIAF, ACCRED],
  },
  {
    ...base,
    id: "cqi-02",
    title: "Deterioration after shift change",
    stem:
      "A 67-year-old man with pneumonia was waiting for a ward bed. At 23:00 the departing physician handed him over verbally as a stable pneumonia waiting for a bed. A lactate of 4.1 mmol/L resulted at 22:50. It was not mentioned and nobody reviewed it. At 02:00 he was hypotensive and confused. He needed vasopressors and ICU admission. His wife is at the bedside and asks what happened.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE contributing factors to this event.",
        required: 3,
        accept: [
          { id: "unstructured", text: "Unstructured verbal handover with no standard tool", match: ["unstructured", "no structured", "no standard", "verbal handover", "no handover tool", "no tool", "informal"] },
          { id: "pending", text: "Pending results not listed or handed over", match: ["pending", "outstanding result", "result not", "lactate not", "not handed over", "not mentioned", "nobody reviewed", "no one reviewed", "not reviewed"] },
          { id: "notify", text: "No critical value notification to a responsible physician", match: ["critical value", "critical result", "notification", "notify", "callback", "call back", "alert", "no critical value", "no critical result", "no notification", "not notified", "no callback", "no call back", "no alert"] },
          { id: "timing", text: "Result arrived during shift change", match: ["shift change", "handover time", "timing", "transition"] },
          { id: "anchor", text: "Anchoring on the label of a stable patient", match: ["anchor", "label", "cognitive", "premature closure", "diagnostic momentum"] },
          { id: "boarding", text: "Boarding and crowding with unclear ownership of admitted patients", match: ["boarding", "crowding", "ownership", "responsibility", "admitted patient"] },
          { id: "vitals", text: "No reassessment or escalation of vital signs", match: ["vital sign", "reassessment", "escalation", "early warning", "monitoring", "no reassessment", "not reassessed", "no escalation", "no monitoring", "no vital sign", "no early warning"] },
        ],
        explanation:
          "Handover is a high risk transition. Unstructured handover, no list of pending results and no reliable critical value callback allowed an abnormal result to fall between two physicians. Boarding blurs responsibility, and a benign label invites anchoring.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ipass",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE elements of a structured handover that would reduce this risk.",
        required: 3,
        accept: [
          { id: "severity", text: "Illness severity stated explicitly (stable, watcher, unstable)", match: ["illness severity", "severity", "watcher", "unstable"] },
          { id: "summary", text: "Concise patient summary", match: ["patient summary", "summary", "background"] },
          { id: "actions", text: "Action list including pending results with who will check them", match: ["action list", "to do", "pending", "outstanding", "task list"] },
          { id: "contingency", text: "Situation awareness and contingency plans (if this, then that)", match: ["contingency", "situation awareness", "situational awareness", "if then", "anticipatory"] },
          { id: "synthesis", text: "Synthesis or read back by the receiver", match: ["synthesis", "read back", "readback", "repeat back", "receiver summarizes", "closed loop"] },
          { id: "tool", text: "A standard written or electronic tool such as I-PASS or SBAR", match: ["i pass", "ipass", "sbar", "written", "electronic", "standard tool", "structured tool"] },
          { id: "place", text: "Protected time and place, ideally at the bedside, without interruptions", match: ["bedside", "protected time", "no interruption", "quiet", "face to face"] },
        ],
        explanation:
          "I-PASS covers illness severity, patient summary, action list, situation awareness with contingency plans, and synthesis by the receiver. Implementation of I-PASS reduced preventable adverse events. Pending results belong on the action list with a named owner.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "ipass",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to his wife now? Select one.",
        options: [
          "His pneumonia is severe and sometimes patients get worse despite good care.",
          "The previous doctor missed a blood test. That was his mistake, not mine.",
          "A blood test that showed his infection was more serious came back at shift change. It was not acted on for about three hours. I am sorry. We are treating him in the ICU. The hospital will review how this happened, and I will keep you updated.",
          "We cannot discuss this until the hospital review and legal advice are complete.",
          "I will explain once we know whether the delay changed his outcome.",
        ],
        correct: 2,
        explanation:
          "Initial disclosure should happen as soon as reasonably possible. Share the known facts, express regret, describe the care plan and next steps, and offer ongoing contact. Do not speculate about whether the delay changed his outcome or blame colleagues. Waiting for the review or for proof of harm is not appropriate.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cpsi-disclosure",
      },
    ],
    sources: [STARMER, CDG],
  },
  {
    ...base,
    id: "cqi-03",
    title: "Patients who come back",
    stem:
      "You are the quality lead for a community ED with 55,000 visits a year. The chief asks you to set up a review of patients who return within 72 hours of discharge and are then admitted.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE steps in planning this review.",
        required: 3,
        accept: [
          { id: "define", text: "Define the indicator with numerator, denominator and time window", match: ["define", "definition", "numerator", "denominator", "time window", "operational"] },
          { id: "data", text: "Identify a reliable data source such as the ED information system or administrative data", match: ["data source", "information system", "administrative data", "database", "nacrs", "electronic record", "emr", "data"] },
          { id: "review", text: "Structured chart review with explicit criteria and trained reviewers", match: ["chart review", "chart audit", "explicit criteria", "reviewer", "structured review", "standardized review"] },
          { id: "classify", text: "Classify each return as related, preventable or an adverse event", match: ["classify", "preventable", "adverse event", "related to", "categorize", "categorise", "avoidable"] },
          { id: "benchmark", text: "Compare with a benchmark or track over time", match: ["benchmark", "compare", "peer", "baseline", "trend", "over time"] },
          { id: "protect", text: "Conduct it under quality of care legislation to protect deliberations", match: ["qcipa", "quality of care information", "quality of care legislation", "protect", "protected", "privilege", "confidential"] },
          { id: "feedback", text: "Plan feedback of results to physicians and the department", match: ["feedback", "share result", "report back", "disseminate"] },
          { id: "team", text: "Engage stakeholders such as nursing, physicians and administration", match: ["stakeholder", "team", "nursing", "multidisciplinary", "interprofessional"] },
        ],
        explanation:
          "A good review starts with a precise indicator definition and a reliable data source. Structured review classifies returns as related and preventable or not. Results should be benchmarked, fed back and protected so clinicians can discuss them openly.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "qcipa",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following are outcome measures? Select TWO.",
        options: [
          "Proportion of discharged patients who return within 72 hours and are admitted",
          "Seven day mortality after ED discharge",
          "Median time to physician initial assessment",
          "Percentage of charts with documented discharge instructions",
          "Number of emergency physicians per shift",
          "Availability of CT overnight",
          "Percentage of patients with a documented pain score",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "Donabedian divides quality measures into structure, process and outcome. Returns with admission and mortality are outcomes. Time to assessment and documentation rates are processes. Staffing and equipment are structures.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
      {
        id: "q3",
        kind: "short",
        update: "The review finds that 30% of preventable returns were older adults discharged after a fall without any assessment of walking ability.",
        prompt: "List THREE elements of a simple improvement project to address this.",
        required: 3,
        accept: [
          { id: "aim", text: "A specific, measurable, time bound aim statement", match: ["aim", "smart", "goal", "target"] },
          { id: "team", text: "Assemble a team including nursing, physiotherapy and geriatric emergency staff", match: ["team", "stakeholder", "physiotherapy", "physiotherapist", "geriatric", "gem nurse", "champion"] },
          { id: "change", text: "A change idea such as a standard mobility test before discharge", match: ["mobility", "timed up and go", "tug", "gait", "walk test", "change idea", "checklist", "standardize", "standardise"] },
          { id: "pdsa", text: "Test on a small scale with PDSA cycles", match: ["pdsa", "plan do study act", "small scale", "small test", "pilot"] },
          { id: "measures", text: "Outcome, process and balancing measures", match: ["measure", "outcome", "balancing", "process"] },
          { id: "runchart", text: "Plot data over time on a run chart", match: ["run chart", "control chart", "over time", "time series"] },
          { id: "remeasure", text: "Remeasure the return rate after the change", match: ["remeasure", "re measure", "reaudit", "re audit", "repeat audit", "repeat the audit"] },
          { id: "sustain", text: "Plan to sustain and spread", match: ["sustain", "spread", "embed"] },
        ],
        explanation:
          "The Model for Improvement uses an aim, measures and change ideas tested in PDSA cycles. Data are displayed on a run chart and the outcome is remeasured. A multidisciplinary team makes the change practical.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "improvement-guide",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is a balancing measure for this project? Select one.",
        options: [
          "Percentage of older fall patients with a documented mobility assessment",
          "72 hour return with admission among older fall patients",
          "ED length of stay for older adults discharged after a fall",
          "Number of nurses trained in the mobility test",
          "Number of falls in the community",
        ],
        correct: 2,
        explanation:
          "A balancing measure checks whether the change causes a problem elsewhere in the system. Adding an assessment could lengthen ED stays. The documentation rate is a process measure and the return rate is the outcome.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "improvement-guide",
      },
    ],
    sources: [QCIPA, DONABEDIAN, IHI],
  },
  {
    ...base,
    id: "cqi-04",
    title: "Slow first doses",
    stem:
      "An audit of adults with septic shock in your ED shows a median time from triage to first antibiotic dose of 190 minutes. Only 28% received antibiotics within one hour of recognition. The department agrees to improve this.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE components of the Model for Improvement.",
        required: 3,
        accept: [
          { id: "aim", text: "What are we trying to accomplish (aim)", match: ["aim", "accomplish"] },
          { id: "measures", text: "How will we know a change is an improvement (measures)", match: ["how will we know", "measure"] },
          { id: "change", text: "What change can we make that will result in improvement (change ideas)", match: ["what change", "change idea", "change can we make", "changes"] },
          { id: "pdsa", text: "Plan Do Study Act cycles", match: ["pdsa", "plan do study act", "plan do check act", "pdca"] },
        ],
        explanation:
          "The Model for Improvement asks three questions about aim, measures and changes. It then tests changes with rapid PDSA cycles. It is widely used in Canadian quality improvement programs.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "improvement-guide",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE change ideas that could shorten the time to antibiotics.",
        required: 3,
        accept: [
          { id: "screen", text: "Sepsis screening tool at triage", match: ["screening tool", "screen at triage", "triage screen", "sepsis screen", "early warning", "news2", "national early warning"] },
          { id: "directive", text: "Nurse initiated medical directive for cultures, lactate and fluids", match: ["medical directive", "nurse initiated", "standing order", "triage protocol", "nursing protocol"] },
          { id: "orderset", text: "Standard sepsis order set with preselected empiric antibiotics", match: ["order set", "orderset", "preprinted order", "pre printed order"] },
          { id: "stock", text: "First dose antibiotics stocked in the ED automated cabinet", match: ["stock", "automated dispensing", "cabinet", "pyxis", "omnicell", "ward stock", "sepsis kit", "sepsis box"] },
          { id: "alert", text: "Sepsis alert that prompts immediate physician assessment", match: ["sepsis alert", "code sepsis", "alert", "sepsis page", "overhead page"] },
          { id: "pharm", text: "ED pharmacist support", match: ["pharmacist", "pharmacy"] },
          { id: "feedback", text: "Audit and feedback of individual and team times", match: ["audit and feedback", "feedback", "dashboard"] },
          { id: "push", text: "Allow IV push administration of beta lactams", match: ["iv push", "push dose", "antibiotic push", "rapid infusion"] },
        ],
        explanation:
          "Effective changes remove delays at each step. Screening at triage, nurse directives, order sets, stocked first doses and rapid administration all shorten time to antibiotics. The Surviving Sepsis Campaign recommends antibiotics within one hour for possible septic shock or a high likelihood of sepsis. It advises against qSOFA as a single screening tool.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "ssc-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "You plot weekly median time to antibiotics on a run chart with the baseline median as the centre line. After the change, 7 consecutive weekly points fall below the baseline median.",
        prompt: "Which of the following best describes this pattern? Select one.",
        options: [
          "A shift, which signals non random change",
          "A trend, which requires 5 points in a row going in the same direction",
          "No signal, because only a statistical test can show improvement",
          "An astronomical data point",
          "Too few runs, so the data are invalid",
        ],
        correct: 0,
        explanation:
          "On a run chart, six or more consecutive points on the same side of the median form a shift. It signals non random change. A trend is five or more consecutive points all rising or all falling.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "perla-run-chart",
      },
    ],
    sources: [IHI, SSC, PERLA],
  },
  {
    ...base,
    id: "cqi-05",
    title: "A drowsy patient after analgesia",
    stem:
      "A 78-year-old woman with a painful wrist fracture was ordered morphine 2 mg IV. The nurse removed hydromorphone 2 mg from the automated cabinet using an override and gave it. The two products sit in neighbouring drawers and have similar labels. Thirty minutes later her respiratory rate was 7 and SpO2 84%. She improved with naloxone and was observed overnight without further problems. Her daughter arrives.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE elements to include in your disclosure conversation.",
        required: 3,
        accept: [
          { id: "facts", text: "The facts of what happened, in plain language", match: ["fact", "what happened", "wrong medication", "wrong drug", "error", "explain"] },
          { id: "apology", text: "An apology or expression of regret", match: ["apologize", "apologise", "apology", "sorry", "regret"] },
          { id: "effects", text: "The effects on her health and the plan for monitoring", match: ["effect", "consequence", "monitor", "impact", "outcome", "health"] },
          { id: "prevent", text: "That the event will be reviewed and steps taken to prevent recurrence", match: ["prevent", "review", "investigate", "investigation", "recurrence", "analysis"] },
          { id: "questions", text: "Opportunity for questions", match: ["question"] },
          { id: "followup", text: "A contact person and plan for follow up disclosure", match: ["contact", "follow up", "followup", "update"] },
          { id: "document", text: "Document the disclosure in the chart", match: ["document", "chart"] },
        ],
        unacceptable: [{ text: "Blame the nurse or speculate about fault", match: ["blame the nurse", "nurse fault", "nurse mistake", "nurse is at fault"] }],
        explanation:
          "Disclosure covers what happened, the consequences, an apology, what is being done for the patient and what will be done to prevent recurrence. Provide a contact and further updates. Document the conversation.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cpsi-disclosure",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE contributing factors to this event.",
        required: 3,
        accept: [
          { id: "lasa", text: "Look alike, sound alike drug names and packaging", match: ["look alike", "sound alike", "lasa", "similar label", "similar packaging", "similar name"] },
          { id: "storage", text: "High alert opioids stored next to each other", match: ["storage", "stored", "neighbouring", "neighboring", "adjacent", "drawer"] },
          { id: "override", text: "Cabinet override without pharmacist verification", match: ["override", "pharmacist verification", "pharmacy review"] },
          { id: "barcode", text: "No barcode scanning at administration", match: ["barcode", "bar code", "scan", "no barcode", "no bar code", "no scanning", "not scanned", "without scanning"] },
          { id: "check", text: "No independent double check for a high alert medication", match: ["double check", "independent check", "high alert", "no double check", "no independent check", "not double checked", "without double check"] },
          { id: "workload", text: "Workload, interruptions or fatigue", match: ["workload", "interruption", "distraction", "busy", "fatigue", "crowding", "staffing"] },
          { id: "potency", text: "Hydromorphone about five to seven times more potent than morphine", match: ["potent", "potency"] },
        ],
        explanation:
          "Hydromorphone and morphine mix-ups are a recurrent cause of serious harm reported in Canada. Similar names and packaging, adjacent storage, overrides and no barcode check align to let the error through. Most causes lie in the system, not the individual.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO safe medication practice changes to prevent recurrence.",
        required: 2,
        accept: [
          { id: "separate", text: "Separate storage of hydromorphone and morphine", match: ["separate", "segregate", "different drawer", "separate storage", "store apart"] },
          { id: "label", text: "Tall man lettering and auxiliary warning labels", match: ["tall man", "tallman", "warning label", "auxiliary label", "distinct label", "labelling", "label"] },
          { id: "barcode", text: "Barcode scanning at the bedside", match: ["barcode", "bar code", "scan"] },
          { id: "check", text: "Independent double check for high alert opioids", match: ["double check", "independent check", "second nurse"] },
          { id: "override", text: "Restrict cabinet overrides for opioids", match: ["override", "restrict", "pharmacist verification"] },
          { id: "limit", text: "Limit hydromorphone concentrations or remove high potency stock from the ED", match: ["remove", "limit", "standard concentration", "restrict stock", "single concentration"] },
        ],
        unacceptable: [DISCIPLINE, EDUCATION_ONLY],
        explanation:
          "Stronger fixes change the system, such as separating storage, barcode scanning and limiting stock. Tall man lettering and double checks add further barriers. Discipline and reminders alone do not prevent the next error.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "ismp-hydromorphone",
      },
    ],
    sources: [CDG, CIAF, ISMP_HYDRO],
  },
  {
    ...base,
    id: "cqi-06",
    title: "An order for hyperkalemia",
    stem:
      "A 52-year-old man on hemodialysis has a potassium of 7.1 mmol/L. A handwritten order reads \"Insulin regular 10U IV with D50W 50 mL\". The nurse reads the order as 100 units. Forty minutes later the patient is diaphoretic and confused with a glucose of 1.8 mmol/L. He recovers with IV dextrose and 12 hours of glucose monitoring.",
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following appear on the ISMP Canada Do Not Use list? Select THREE.",
        options: [
          "U for units",
          "A trailing zero, as in 5.0 mg",
          "µg for microgram",
          "mcg for microgram",
          "A leading zero, as in 0.5 mg",
          "units written out in full",
          "mL for millilitre",
          "daily written out in full",
        ],
        select: 3,
        correct: [0, 1, 2],
        explanation:
          "U can be read as 0 or 4, creating tenfold errors. A trailing zero can be missed so 5.0 becomes 50. µg can be read as mg. Write units in full, omit trailing zeros, always use a leading zero and write mcg.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "ismp-dnu",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO other contributing factors to this event.",
        required: 2,
        accept: [
          { id: "handwritten", text: "Handwritten order without computerized order entry", match: ["handwritten", "handwriting", "illegible", "cpoe", "computerized", "computerised", "electronic order"] },
          { id: "check", text: "No independent double check for insulin, a high alert medication", match: ["double check", "independent check", "high alert", "no double check", "no independent check", "not double checked", "without double check"] },
          { id: "pharm", text: "No pharmacist verification before a stat dose", match: ["pharmacist", "pharmacy", "no pharmacist", "no pharmacy", "without pharmacist", "not verified by pharmacy"] },
          { id: "protocol", text: "No standard hyperkalemia order set with fixed insulin dose", match: ["order set", "protocol", "standardized", "standardised", "preprinted", "no order set", "no protocol", "no standard order", "no standardized"] },
          { id: "vial", text: "Insulin drawn from a multi unit vial rather than a prepared dose", match: ["vial", "syringe", "prefilled", "pre filled"] },
          { id: "glucose", text: "No scheduled glucose monitoring after insulin", match: ["glucose monitoring", "glucose check", "capillary glucose", "point of care glucose", "no glucose monitoring", "no glucose check", "no scheduled glucose", "glucose not monitored", "glucose not checked"] },
          { id: "clarify", text: "Order not clarified with the prescriber", match: ["clarify", "clarified", "clarification", "read back", "question the order", "not clarified", "no clarification", "did not clarify", "no read back", "not questioned"] },
          { id: "dialysis", text: "Dialysis patients are at higher risk of insulin induced hypoglycemia", match: ["dialysis", "renal", "kidney"] },
        ],
        explanation:
          "Handwritten orders with dangerous abbreviations, no pharmacist review and no double check allowed a tenfold overdose. Standard order sets with fixed doses and scheduled glucose checks reduce hypoglycemia after insulin for hyperkalemia. Dialysis patients clear insulin slowly.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "A colleague says disclosure is unnecessary because the patient recovered fully. Which of the following is the most appropriate approach? Select one.",
        options: [
          "Do not disclose, because there was no lasting harm",
          "Disclose only if the patient asks why he received dextrose",
          "Disclose the event, its effects and the plan, with an apology, as soon as reasonably possible",
          "Wait until the incident review is complete in several weeks",
          "Ask the nurse who gave the dose to disclose alone",
        ],
        correct: 2,
        explanation:
          "The event reached the patient and caused temporary harm, so it must be disclosed whatever the final outcome. Initial disclosure should not wait for the review. The most responsible physician normally leads disclosure, with involved staff supported.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cpsi-disclosure",
      },
    ],
    sources: [ISMP_DNU, CIAF, CDG],
  },
  {
    ...base,
    id: "cqi-07",
    title: "A binder at the triage desk",
    stem:
      "Radiologists review ED films the next morning. Discrepancy reports are printed and placed in a binder at triage. No one is assigned to act on them. A 45-year-old man was discharged on Friday with a wrist sprain. On Monday the radiologist reported a scaphoid waist fracture. The report was noticed on Wednesday. You are asked to call him and to fix the process.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features of a reliable system for following up results after ED discharge.",
        required: 3,
        accept: [
          { id: "owner", text: "A designated person or role responsible every day", match: ["designated", "responsible", "assigned", "owner", "accountable", "role"] },
          { id: "tracking", text: "An electronic log or tracking system instead of paper", match: ["electronic", "tracking", "log", "database", "queue", "worklist"] },
          { id: "contact", text: "Verified patient contact information at registration and discharge", match: ["contact information", "phone number", "contact info", "verify contact", "confirm contact", "address"] },
          { id: "timeframe", text: "A defined time frame for callback", match: ["time frame", "timeframe", "within 24", "within one day", "timely", "deadline"] },
          { id: "closure", text: "Documented closed loop showing the action taken", match: ["closed loop", "closure", "document", "sign off", "signoff"] },
          { id: "escalate", text: "An escalation process when the patient cannot be reached", match: ["escalate", "escalation", "unreachable", "cannot be reached", "letter", "family physician"] },
          { id: "feedback", text: "Feedback to the original physician", match: ["feedback", "notify the physician", "inform the physician"] },
          { id: "audit", text: "Regular audit of the system itself", match: ["audit", "monitor the system"] },
        ],
        explanation:
          "Results follow up fails when no one owns it. Reliable systems name a responsible person, track each result electronically, verify contact details, set time frames, close the loop with documentation and escalate when patients cannot be reached.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "cmpa-results",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "You reach him by phone. List THREE things you would do or say.",
        required: 3,
        accept: [
          { id: "facts", text: "Explain that the final report shows a fracture that was not identified at his visit", match: ["missed", "not identified", "final report", "what happened", "radiologist found", "report showed", "report show", "explain the fracture", "tell him about the fracture", "inform him of the fracture", "disclose the fracture", "disclose"] },
          { id: "apology", text: "Apologize", match: ["apologize", "apologise", "apology", "sorry", "regret"] },
          { id: "splint", text: "Arrange prompt immobilization in a thumb spica", match: ["thumb spica", "spica", "splint", "immobilization", "immobilize", "immobilise", "cast"] },
          { id: "followup", text: "Arrange fracture clinic follow up", match: ["fracture clinic", "follow up", "followup", "orthopedic", "orthopaedic", "hand clinic", "return to the ed", "come back"] },
          { id: "implications", text: "Explain possible consequences and why treatment matters", match: ["consequence", "nonunion", "non union", "risk", "implication", "avascular"] },
          { id: "questions", text: "Answer his questions and give a contact", match: ["question", "contact"] },
          { id: "document", text: "Document the call and the disclosure", match: ["document", "chart"] },
        ],
        explanation:
          "A delayed diagnosis is a patient safety incident that reached the patient, so it must be disclosed even before any lasting harm is known. Explain the finding plainly, apologize, arrange immobilization and follow up, and answer questions. Avoid speculating about fault. Document the conversation and the plan.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cpsi-disclosure",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO ways to build learning from radiology discrepancies into routine departmental practice.",
        required: 2,
        accept: [
          { id: "individual", text: "Confidential individual feedback to the treating physician", match: ["individual feedback", "feedback", "notify the physician"] },
          { id: "rounds", text: "Regular discrepancy or M&M rounds focused on systems", match: ["rounds", "m and m", "m&m", "morbidity", "case review", "conference"] },
          { id: "track", text: "Track discrepancy rates as a quality indicator", match: ["track", "indicator", "rate", "dashboard", "audit"] },
          { id: "education", text: "Targeted teaching on commonly missed findings", match: ["teaching", "education", "commonly missed", "learning"] },
          { id: "peer", text: "Include in peer review or practice audit for continuing professional development", match: ["peer review", "practice audit", "cpd", "mainpro", "maintenance of certification", "moc", "self audit"] },
        ],
        explanation:
          "Discrepancies are a steady source of learning. Individual feedback, regular systems focused rounds and tracking rates over time turn them into continuous improvement. Practice audits also count toward continuing professional development.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "cmpa-results",
      },
    ],
    sources: [CMPA_RESULTS, CDG],
  },
  {
    ...base,
    id: "cqi-08",
    title: "A cluster on the hallway stretchers",
    stem:
      "Over two weeks, three admitted patients boarding in ED hallway spaces for more than 48 hours developed hospital onset Clostridioides difficile infection. A hand hygiene audit shows 52% compliance, lowest before patient contact. Alcohol based hand rub dispensers are only at the nursing station.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "When caring for a patient with C. difficile, which hand hygiene method is preferred after glove removal? List ONE.",
        required: 1,
        accept: [{ id: "soap", text: "Soap and water hand washing", match: ["soap", "hand washing", "handwashing", "wash hand"] }],
        unacceptable: [{ text: "Alcohol based hand rub alone", match: ["alcohol rub alone", "alcohol based hand rub alone", "alcohol hand rub alone", "alcohol only", "hand sanitizer"] }],
        explanation:
          "C. difficile spores resist alcohol. Soap and water with friction removes them mechanically. Alcohol based rub remains the default for most other care.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "phac-ipc",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE additional precautions for patients with C. difficile infection.",
        required: 3,
        accept: [
          { id: "gowngloves", text: "Contact precautions with gown and gloves", match: ["gown", "glove", "contact precaution"] },
          { id: "room", text: "Single room with a dedicated toilet or commode", match: ["single room", "private room", "isolation room", "dedicated toilet", "commode", "own bathroom", "isolate", "isolation", "out of the hallway"] },
          { id: "cleaning", text: "Sporicidal environmental cleaning such as a chlorine based product", match: ["sporicidal", "bleach", "chlorine", "hypochlorite", "cleaning", "disinfect"] },
          { id: "equipment", text: "Dedicated patient care equipment", match: ["dedicated equipment", "dedicated stethoscope", "equipment", "single use"] },
          { id: "signage", text: "Signage and communication of precautions at transfer", match: ["signage", "sign on the door", "door sign", "flag", "communicate"] },
        ],
        explanation:
          "Contact precautions, a single room with its own toilet, sporicidal cleaning and dedicated equipment interrupt spread. Hallway boarding makes isolation impossible and is itself a contributing factor. Antimicrobial stewardship reduces new cases but is not itself an additional precaution.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "phac-ipc",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO quality indicators you would track to monitor this problem.",
        required: 2,
        accept: [
          { id: "cdi", text: "Hospital onset C. difficile rate per 10,000 patient days", match: ["difficile rate", "cdi rate", "c diff rate", "infection rate", "hospital onset", "per 10000", "per 10,000", "patient day", "case"] },
          { id: "hh", text: "Hand hygiene compliance by direct observation", match: ["hand hygiene compliance", "hand hygiene", "hand hygiene audit"] },
          { id: "boarding", text: "Number or duration of admitted patients boarding in the ED", match: ["boarding", "hallway", "length of stay", "time to bed"] },
          { id: "isolation", text: "Time from diarrhea onset to isolation", match: ["time to isolation", "isolation", "precaution"] },
          { id: "dispensers", text: "Availability of hand rub at the point of care", match: ["point of care", "dispenser", "availability"] },
          { id: "cleaning", text: "Environmental cleaning audit results", match: ["cleaning audit", "cleaning", "environmental"] },
        ],
        explanation:
          "Track an outcome such as hospital onset C. difficile rate together with process measures such as hand hygiene compliance and time to isolation. Structure measures such as dispensers at the point of care and boarding volumes explain why the process fails.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
    ],
    sources: [PHAC_IPC, DONABEDIAN],
  },
  {
    ...base,
    id: "cqi-09",
    title: "An infusion running too fast",
    stem:
      "At hour 11 of a 12 hour night shift, a nurse programmed a heparin infusion for a patient with pulmonary embolism. The rate was entered in mL/h instead of units/h, giving ten times the intended dose for two hours. The PTT was above 150 seconds. The patient did not bleed. The pumps on your unit often have no drug library loaded. The nurse reported the error herself. The unit manager proposes a suspension.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Under a just culture framework, how should the nurse's action be handled? Select one.",
        options: [
          "Reckless behaviour, so discipline is appropriate",
          "At risk behaviour, so coaching is appropriate",
          "Human error, so console the nurse and fix the system that allowed it",
          "Criminal negligence, so report to police",
          "No response is needed because the patient was not harmed",
        ],
        correct: 2,
        explanation:
          "An inadvertent slip by a conscientious nurse in a poorly designed system is human error. The just response is to console her and redesign the system. Discipline for honest errors suppresses reporting.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "just-culture",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO features of a departmental safety culture that encourage staff to report errors like this one.",
        required: 2,
        accept: [
          { id: "nonpunitive", text: "Non punitive just culture response to honest errors", match: ["non punitive", "nonpunitive", "just culture", "no blame", "blame free", "not punish", "no punishment", "not blame"] },
          { id: "easy", text: "A simple, fast reporting system", match: ["easy", "simple", "fast", "quick", "accessible"] },
          { id: "anon", text: "Confidential or anonymous reporting option", match: ["anonymous", "confidential"] },
          { id: "feedback", text: "Feedback to reporters about actions taken", match: ["feedback", "close the loop", "closing the loop", "report back"] },
          { id: "leaders", text: "Visible leadership support for reporting", match: ["leadership", "leader", "management support"] },
          { id: "legal", text: "Legal protection of quality review information", match: ["legal protection", "qcipa", "protected", "privilege"] },
          { id: "recognize", text: "Recognition of good catches", match: ["recognition", "recognize", "recognise", "good catch", "reward", "celebrate"] },
        ],
        explanation:
          "Staff report when it is safe, simple and useful. A non punitive response to honest error, easy reporting and visible feedback on changes made build trust. Legal protection of quality review information supports open discussion.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "just-culture",
      },
      {
        id: "q3",
        kind: "single",
        update: "A second nurse says she routinely bypasses the pump drug library because loading it is slow, and most colleagues do the same.",
        prompt: "Which of the following is the most appropriate response to this practice? Select one.",
        options: [
          "Treat it as human error and console her",
          "Treat it as at risk behaviour, coach staff, and fix the reasons the workaround is common",
          "Treat it as reckless and discipline all staff who bypass the library",
          "Take no action because the practice is widespread",
          "Report her to the College of Nurses",
        ],
        correct: 1,
        explanation:
          "A workaround where the risk is not recognized or is believed justified is at risk behaviour. The response is coaching and removing the incentives, such as a slow library. Widespread drift signals a system problem rather than individual recklessness.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "just-culture",
      },
    ],
    sources: [MARX],
  },
  {
    ...base,
    id: "cqi-10",
    title: "Preparing the wrong side",
    stem:
      "A 60-year-old man was intubated after a motor vehicle collision. His chest X-ray shows a large left pneumothorax. A senior surgeon arrives and begins to prep the right chest for a chest tube. You are the ED physician leading the resuscitation. The room is loud and busy.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first statement? Select one.",
        options: [
          "\"Um, are you sure about that?\"",
          "\"I am concerned. The X-ray shows the pneumothorax on the left and you are prepping the right. I need us to stop and confirm the side.\"",
          "Say nothing now and document the concern afterward",
          "Leave the room to call the chief of surgery",
          "\"You are about to make a serious mistake.\"",
        ],
        correct: 1,
        explanation:
          "Graded assertiveness tools such as CUS (concerned, uncomfortable, safety issue) state the concern, the specific problem and a clear request to stop. Vague hints are easily ignored. Silence or leaving the room abandons the patient.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "teamstepps",
      },
      {
        id: "q2",
        kind: "short",
        update: "The procedure is stopped, the side is confirmed and a left chest tube is placed without complication.",
        prompt: "List TWO contributing factors you would explore in reviewing this close call.",
        required: 2,
        accept: [
          { id: "image", text: "Image not displayed or reviewed by the proceduralist", match: ["image", "xray", "x ray", "film", "display", "radiograph", "reversed", "not review", "not displayed", "not check the", "no image"] },
          { id: "timeout", text: "No pause or time out to confirm the side", match: ["time out", "timeout", "pause", "site verification", "confirm side", "checklist", "no time out", "no timeout", "no pause", "no checklist", "no site verification", "not confirm"] },
          { id: "hierarchy", text: "Steep authority gradient discouraging team members from speaking up", match: ["hierarchy", "authority gradient", "speak up", "speaking up", "power distance", "intimidation", "intimidating"] },
          { id: "pressure", text: "Time pressure and noise in the resuscitation", match: ["time pressure", "noise", "loud", "busy", "chaotic", "stress", "urgency"] },
          { id: "marking", text: "No site marking", match: ["site marking", "marking", "mark the site", "no site marking", "no marking", "not marked"] },
          { id: "patient", text: "Intubated patient unable to confirm the side", match: ["intubated", "unable to confirm", "cannot confirm", "sedated"] },
          { id: "comm", text: "No shared mental model or closed loop communication with the team", match: ["shared mental model", "closed loop", "communication", "briefing", "handover", "no shared mental model", "no closed loop", "no communication", "no briefing"] },
        ],
        explanation:
          "Wrong side procedures follow predictable failures. Imaging was not checked, there was no pause to confirm the site, the patient could not help and hierarchy discourages others from speaking. A brief procedural pause addresses most of these.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to handle this close call? Select one.",
        options: [
          "No report is needed because the patient was not harmed",
          "Report it to the hospital incident system so it can be analyzed and shared",
          "Report it only if the family asks",
          "Report the surgeon to the College",
          "Discuss it informally with the surgeon and take no further action",
        ],
        correct: 1,
        explanation:
          "Close calls reveal the same system weaknesses as harmful events without the harm. Reporting them lets the department analyze patterns and fix hazards early. Routine reporting of near misses is a core habit of a learning organization.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ciaf",
      },
    ],
    sources: [TEAMSTEPPS, CIAF],
  },
  {
    ...base,
    id: "cqi-11",
    title: "An outdated medication list",
    stem:
      "An 81-year-old woman with pneumonia boarded in your ED for two days. Her admission orders were copied from a pharmacy printout from eight months ago. Apixaban, started three months ago for atrial fibrillation, was omitted. A ward pharmacist found the omission on day three. She had no stroke.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE sources you would use to obtain a best possible medication history.",
        required: 3,
        accept: [
          { id: "fp", text: "Family physician or specialist records", match: ["family physician", "family doctor", "gp", "specialist", "primary care"] },
          { id: "patient", text: "Structured interview with the patient", match: ["patient interview", "interview", "ask the patient", "ask patient", "patient herself", "patient history"] },
          { id: "family", text: "Family or caregiver", match: ["family", "caregiver", "daughter", "son", "substitute decision"] },
          { id: "pharmacy", text: "Community pharmacy records", match: ["community pharmacy", "pharmacy record", "call the pharmacy", "pharmacist", "dispensing record"] },
          { id: "database", text: "Provincial drug information system or dispensing database", match: ["provincial", "drug profile", "drug database", "dis", "pharmanet", "netcare", "dpv", "digital health drug repository", "clinicalconnect"] },
          { id: "bottles", text: "Medication vials or blister packs", match: ["vial", "bottle", "blister", "bubble pack", "pill", "dosette", "medication bag"] },
          { id: "records", text: "Recent discharge summaries or clinic letters", match: ["discharge summary", "previous record", "clinic letter", "hospital record", "chart"] },
          { id: "ltc", text: "Long term care or home care medication administration record", match: ["long term care", "mar", "medication administration record", "home care"] },
        ],
        explanation:
          "A best possible medication history uses a structured patient or caregiver interview plus at least one other reliable source. Community pharmacy and provincial drug records show recent dispensing. Old printouts miss new medications.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "accreditation-rop",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "You plan a quality review of medication reconciliation for admitted ED patients. List TWO measures you would track.",
        required: 2,
        accept: [
          { id: "bpmh", text: "Percentage of admitted patients with a documented BPMH within 24 hours", match: ["bpmh", "best possible medication history", "percentage with", "proportion with", "completion rate", "within 24"] },
          { id: "discrep", text: "Unintentional medication discrepancies per patient", match: ["discrepancies", "discrepancy", "omission", "unintentional"] },
          { id: "harm", text: "Discrepancies with potential for harm or adverse drug events", match: ["potential for harm", "adverse drug event", "ade", "harm"] },
          { id: "time", text: "Time from admission decision to reconciliation", match: ["time to", "time from"] },
          { id: "high", text: "Reconciliation rate for high risk drugs such as anticoagulants", match: ["high risk", "high alert", "anticoagulant"] },
        ],
        explanation:
          "Useful measures include BPMH completion within 24 hours, the number of unintentional discrepancies and those with potential for harm. Separating process and outcome measures shows whether better completion reduces harm.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
      {
        id: "q3",
        kind: "short",
        update: "The audit shows only 35% of admitted ED patients have a BPMH within 24 hours.",
        prompt: "List THREE change ideas you could test to improve this.",
        required: 3,
        accept: [
          { id: "tech", text: "Pharmacy technician or pharmacist in the ED to complete BPMH", match: ["pharmacy technician", "pharmacist", "pharmacy tech"] },
          { id: "form", text: "Standard electronic BPMH form built into admission orders", match: ["form", "template", "electronic", "order set", "built into", "hard stop", "prompt"] },
          { id: "access", text: "Access to the provincial drug database for ED staff", match: ["database", "provincial", "access", "drug profile"] },
          { id: "nursing", text: "Nurse started BPMH at triage or bedside", match: ["nurse", "nursing", "triage"] },
          { id: "patients", text: "Encourage patients to bring medications or an up to date list", match: ["bring", "medication list", "wallet card", "patient education"] },
          { id: "train", text: "Training in structured BPMH interviews", match: ["training", "train", "education"] },
          { id: "prioritize", text: "Prioritize high risk patients such as older adults on many medications", match: ["prioritize", "prioritise", "high risk", "polypharmacy", "older adult"] },
          { id: "pdsa", text: "Test changes with PDSA cycles and a run chart", match: ["pdsa", "run chart", "plan do study act"] },
        ],
        explanation:
          "Pharmacy technician led BPMH in the ED is a well studied change that improves completion. Electronic forms, access to drug databases and targeting high risk patients also help. Each idea can be tested in small PDSA cycles.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "improvement-guide",
      },
    ],
    sources: [ACCRED, DONABEDIAN, IHI],
  },
  {
    ...base,
    id: "cqi-12",
    title: "A departmental dashboard",
    stem:
      "Your ED chief asks you to build a quarterly quality dashboard for a mid sized regional ED that serves a mixed adult and pediatric population.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE quality indicators you would include.",
        required: 3,
        accept: [
          { id: "lwbs", text: "Left without being seen rate", match: ["left without being seen", "lwbs", "left without", "lwbs rate"] },
          { id: "pia", text: "Time to physician initial assessment", match: ["physician initial assessment", "pia", "time to physician", "time to provider", "door to doctor"] },
          { id: "los", text: "ED length of stay for admitted and discharged patients", match: ["length of stay", "los"] },
          { id: "returns", text: "72 hour return visits with admission", match: ["return", "bounce back", "revisit", "72 hour"] },
          { id: "ecg", text: "Door to ECG time for chest pain", match: ["door to ecg", "ecg within", "time to ecg"] },
          { id: "stroke", text: "Door to needle time for acute stroke", match: ["door to needle", "thrombolysis", "stroke"] },
          { id: "sepsis", text: "Time to antibiotics in sepsis", match: ["antibiotic", "sepsis"] },
          { id: "analgesia", text: "Time to analgesia for painful conditions", match: ["analgesia", "time to pain", "pain"] },
          { id: "mortality", text: "Mortality after ED discharge", match: ["mortality", "death"] },
          { id: "experience", text: "Patient experience scores", match: ["patient experience", "satisfaction", "complaint"] },
          { id: "incidents", text: "Reported safety incidents", match: ["incident", "adverse event", "safety event"] },
          { id: "boarding", text: "Time from admission decision to inpatient bed", match: ["boarding", "admission decision", "time to bed", "time to inpatient"] },
        ],
        explanation:
          "A balanced dashboard includes flow measures such as time to physician assessment, length of stay and LWBS, and clinical process measures for time sensitive conditions. Outcomes such as returns with admission, mortality and patient experience complete the picture.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "The proportion of patients with suspected stroke who have CT within 25 minutes of arrival is which type of measure? Select one.",
        options: ["Structure", "Process", "Outcome", "Balancing", "Patient reported experience"],
        correct: 1,
        explanation:
          "Time to CT describes something done for the patient, so it is a process measure. Stroke outcomes such as disability at 90 days are outcomes. Staffing and CT availability are structures.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
      {
        id: "q3",
        kind: "short",
        update: "Your LWBS rate is 8%, compared with 3% at peer sites. Most patients who leave are low acuity and arrive between 18:00 and 02:00.",
        prompt: "List THREE change ideas to reduce the LWBS rate.",
        required: 3,
        accept: [
          { id: "pit", text: "Physician or nurse practitioner in triage or a rapid assessment zone", match: ["physician in triage", "provider in triage", "rapid assessment", "triage physician", "pit", "nurse practitioner", "front end"] },
          { id: "stream", text: "Separate low acuity stream or fast track", match: ["fast track", "stream", "low acuity area", "minor area", "vertical"] },
          { id: "staffing", text: "Match staffing to evening arrival peaks", match: ["staffing", "schedule", "shift", "match demand", "peak"] },
          { id: "directives", text: "Nurse initiated medical directives such as analgesia and imaging at triage", match: ["medical directive", "nurse initiated", "standing order", "triage protocol", "triage order"] },
          { id: "communication", text: "Communicate expected wait times and update waiting patients", match: ["wait time", "communicating", "communicate", "communication", "update"] },
          { id: "retriage", text: "Regular reassessment of patients in the waiting room", match: ["reassess", "reassessment", "re triage", "retriage", "waiting room nurse"] },
          { id: "boarding", text: "Reduce boarding to free up treatment spaces", match: ["boarding", "admitted patient", "inpatient bed", "hospital flow", "bed"] },
        ],
        explanation:
          "LWBS rises when low acuity patients wait long after triage. Front end changes such as a provider in triage, a fast track stream and staffing matched to arrival peaks work best. Boarding upstream consumes spaces and staff needed for new patients.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "improvement-guide",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which is the best way to judge whether your changes reduced the LWBS rate? Select one.",
        options: [
          "Compare the average for the month before with the month after",
          "Plot weekly LWBS rates on a run chart with a baseline median, annotate the changes, and apply run chart rules",
          "Survey staff about whether they think flow improved",
          "Wait for the annual provincial report",
          "Use a single day audit after the change",
        ],
        correct: 1,
        explanation:
          "A run chart shows performance over time and separates signal from random variation using simple rules. Two point before and after comparisons are misleading because of natural variation and seasonal effects.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "perla-run-chart",
      },
    ],
    sources: [DONABEDIAN, IHI, PERLA],
  },
  {
    ...base,
    id: "cqi-13",
    title: "A delay in the resuscitation room",
    stem:
      "A 64-year-old man collapsed in the waiting room in ventricular fibrillation. Defibrillation was delayed about three minutes because the pads on the crash cart had been used earlier that day and not replaced. He had return of spontaneous circulation after the second shock. The team is shaken.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE contributing factors you would explore.",
        required: 3,
        accept: [
          { id: "restock", text: "No reliable process for restocking after use", match: ["restock", "restocking", "replace", "replenish", "not restocked", "not replaced", "no restocking", "no restock"] },
          { id: "check", text: "Daily crash cart check missed or not documented", match: ["daily check", "cart check", "checklist", "crash cart check", "check", "no check", "not checked", "no daily check", "no checklist"] },
          { id: "owner", text: "Unclear responsibility for the cart", match: ["responsibility", "responsible", "ownership", "accountable", "role", "no owner", "no one responsible", "nobody responsible", "no responsibility"] },
          { id: "seal", text: "No tamper seal showing the cart was opened", match: ["seal", "tamper", "lock", "no seal", "no tamper", "no lock"] },
          { id: "backup", text: "No backup pads stored with the defibrillator", match: ["backup", "back up", "spare", "extra pad", "no backup", "no back up", "no spare", "no extra pad"] },
          { id: "workload", text: "Workload and staffing pressures", match: ["workload", "staffing", "busy", "crowding", "fatigue"] },
          { id: "location", text: "Collapse in the waiting room far from resuscitation equipment", match: ["waiting room", "location", "distance", "far from", "aed"] },
        ],
        explanation:
          "Equipment failures usually reflect process failures. Look for missing restocking steps, skipped checks, unclear ownership and no visible signal that a cart was used. Collapse in the waiting room also raises questions about equipment placement.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE elements of a structured team debrief after this resuscitation.",
        required: 3,
        accept: [
          { id: "prompt", text: "Held promptly, in a psychologically safe setting", match: ["prompt", "immediate", "hot debrief", "soon after", "psychological safety", "psychologically safe", "safe environment", "non judgmental", "nonjudgmental"] },
          { id: "well", text: "What went well", match: ["went well", "what worked", "strength"] },
          { id: "improve", text: "What could be improved", match: ["could be improved", "improve", "do differently", "what went wrong", "challenge"] },
          { id: "system", text: "Identify system issues and assign owners for follow up actions", match: ["system issue", "action item", "assign", "owner", "follow up action", "escalate"] },
          { id: "emotion", text: "Emotional check in and offer of support", match: ["emotion", "check in", "wellness", "support", "feeling", "peer support", "employee assistance"] },
          { id: "facts", text: "Shared review of the timeline and facts", match: ["timeline", "sequence", "facts", "what happened", "review of event"] },
          { id: "report", text: "File an incident report", match: ["incident report", "report"] },
        ],
        explanation:
          "A good debrief is prompt, blame free and brief. It reviews what happened, what went well and what to improve, then turns system issues into owned actions. It also checks on how staff are coping.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "teamstepps",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO ways to build ongoing safety practices like this into daily department routines.",
        required: 2,
        accept: [
          { id: "cartcheck", text: "Documented daily crash cart and defibrillator checks with a named owner", match: ["daily check", "cart check", "defibrillator check", "checklist", "check log"] },
          { id: "huddle", text: "Start of shift safety huddle", match: ["huddle", "briefing", "start of shift"] },
          { id: "debrief", text: "Routine debrief after every resuscitation", match: ["routine debrief", "debrief after every", "debrief", "every resuscitation"] },
          { id: "sim", text: "Regular in situ simulation", match: ["simulation", "in situ", "mock code", "drill"] },
          { id: "track", text: "Track debrief action items to completion", match: ["track", "action item", "action log", "follow through"] },
          { id: "mm", text: "Morbidity and mortality rounds with a systems focus", match: ["m and m", "m&m", "morbidity", "rounds"] },
          { id: "reporting", text: "Encourage incident and near miss reporting with feedback", match: ["incident report", "near miss", "reporting", "report"] },
        ],
        explanation:
          "Quality improvement becomes durable when it is part of routine work. Daily equipment checks, shift huddles, routine debriefs and in situ simulation catch hazards before they cause harm. Tracking actions closes the loop.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "teamstepps",
      },
    ],
    sources: [CIAF, TEAMSTEPPS],
  },
  {
    ...base,
    id: "cqi-14",
    title: "Epigastric discomfort at triage",
    stem:
      "A 58-year-old woman with diabetes presented with epigastric discomfort and nausea. She was triaged as dyspepsia and waited. Her first ECG was done 48 minutes after arrival and showed an inferior STEMI. Door to balloon time was 142 minutes. She survived with moderately reduced left ventricular function. A formal review has now been completed. She and her husband meet with you and the department chief.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE things to share or do at this follow up disclosure meeting.",
        required: 3,
        accept: [
          { id: "findings", text: "Share the facts learned from the review about what happened and why", match: ["finding", "what happened", "fact", "what we learned", "why it happened", "result of the review", "review found"] },
          { id: "apology", text: "Apologize", match: ["apologize", "apologise", "apology", "sorry", "regret"] },
          { id: "actions", text: "Describe the changes made to prevent recurrence", match: ["change", "prevent", "recurrence", "action", "improvement"] },
          { id: "effects", text: "Discuss effects on her health and ongoing care", match: ["effect", "consequence", "impact", "heart function", "ongoing care", "prognosis"] },
          { id: "questions", text: "Answer questions and invite their perspective", match: ["question", "perspective", "listen"] },
          { id: "contact", text: "Offer a contact person and further support", match: ["contact", "support", "patient relation", "further meeting"] },
          { id: "document", text: "Document the meeting", match: ["document", "chart"] },
        ],
        explanation:
          "Post analysis disclosure shares the facts learned and the actions taken to prevent recurrence, with an apology. Protected quality committee deliberations are not shared, but the facts and the changes are. Answer questions and document the meeting.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cpsi-disclosure",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO quality indicators you would monitor for chest pain care in your ED.",
        required: 2,
        accept: [
          { id: "ecg10", text: "Proportion of chest pain patients with an ECG within 10 minutes of arrival", match: ["door to ecg", "ecg within 10", "time to ecg", "ecg time", "10 minute"] },
          { id: "d2b", text: "Door to balloon or first medical contact to device time", match: ["door to balloon", "d2b", "device time", "door to pci", "door to reperfusion", "first medical contact"] },
          { id: "d2n", text: "Door to needle time for fibrinolysis", match: ["door to needle", "fibrinolysis", "thrombolysis", "lytic"] },
          { id: "reperf", text: "Proportion of STEMI patients reperfused within target", match: ["reperfused", "reperfusion within", "within target"] },
          { id: "missed", text: "Missed or delayed STEMI diagnoses", match: ["missed stemi", "missed mi", "delayed diagnosis", "missed diagnosis"] },
          { id: "mortality", text: "STEMI mortality", match: ["mortality", "death"] },
          { id: "cathtransfer", text: "Door in door out time for transfer to a PCI centre", match: ["door in door out", "didi", "transfer time"] },
        ],
        explanation:
          "Canadian guidelines call for an ECG within 10 minutes of first medical contact for suspected STEMI. Door to ECG and door to reperfusion times are the key process measures. Mortality is the outcome but is too rare to guide weekly improvement in a single ED.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ccs-stemi",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "To measure door to ECG time routinely and reliably, which data sources are most appropriate? Select TWO.",
        options: [
          "Triage registration timestamps from the ED information system",
          "Acquisition timestamps from the ECG machines or ECG management system",
          "Patient satisfaction surveys",
          "Incident reports",
          "Physician recollection at monthly rounds",
          "Free text times in physician notes",
          "Staff estimates collected by survey",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "Automated timestamps for arrival and ECG acquisition are objective and available for every patient. Incident reports capture only a biased fraction of cases. Recollection and free text times are unreliable.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "donabedian",
      },
    ],
    sources: [CDG, CCS_STEMI, DONABEDIAN],
  },
  {
    ...base,
    id: "cqi-15",
    title: "A new department chief",
    stem:
      "You have just become chief of emergency medicine at an Ontario hospital. A family has complained about a delayed diagnosis in their father's care. Your predecessor held no regular quality activities. The hospital board asks how you will build quality into the department.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE ongoing quality activities you would establish in the department.",
        required: 3,
        accept: [
          { id: "mm", text: "Regular morbidity and mortality rounds with a systems focus", match: ["m and m", "m&m", "morbidity", "rounds", "case review"] },
          { id: "audit", text: "Audit and feedback of individual and departmental indicators", match: ["audit", "feedback", "indicator", "dashboard", "scorecard", "report card"] },
          { id: "committee", text: "A standing quality committee protected under quality of care legislation", match: ["committee", "qcipa", "quality of care"] },
          { id: "incidents", text: "Review of incident reports and patient complaints with feedback", match: ["incident", "complaint", "near miss", "safety report"] },
          { id: "projects", text: "Ongoing improvement projects using PDSA cycles", match: ["pdsa", "project", "improvement initiative", "plan do study act"] },
          { id: "qip", text: "Departmental goals within the hospital annual quality improvement plan", match: ["quality improvement plan", "qip", "annual plan"] },
          { id: "huddle", text: "Daily safety huddles", match: ["huddle"] },
          { id: "returns", text: "Routine review of return visits and discrepancies", match: ["return visit", "bounce back", "discrepancies", "discrepancy", "callback"] },
          { id: "education", text: "Quality and safety education for staff and trainees", match: ["education", "teaching", "training", "simulation"] },
        ],
        explanation:
          "Quality becomes routine through regular systems focused rounds, audit and feedback, incident review and ongoing PDSA projects. In Ontario, hospitals must publish an annual quality improvement plan under the Excellent Care for All Act. Protected committees allow open discussion.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ecfaa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "A physician worries that apologizing to the family will be used against her in court. Under the Ontario Apology Act, which statement is correct? Select one.",
        options: [
          "An apology is an admission of liability",
          "An apology does not constitute an admission of fault or liability and is generally not admissible in civil proceedings to prove liability",
          "An apology voids professional liability protection",
          "An apology may only be given after legal review",
          "An apology must include an admission of fault to be valid",
        ],
        correct: 1,
        explanation:
          "The Apology Act, 2009 protects expressions of sympathy or regret, including admissions of fault within an apology, from being treated as an admission of liability. It also makes the apology inadmissible in civil and administrative proceedings as evidence of fault. Most provinces and territories have similar legislation. The CMPA encourages apology as part of disclosure.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "apology-act",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE items to document in the chart after a disclosure conversation.",
        required: 3,
        accept: [
          { id: "when", text: "Date, time and place of the discussion", match: ["date", "time", "place", "when"] },
          { id: "who", text: "Who was present", match: ["who was present", "present", "attendee", "participant", "who attended"] },
          { id: "facts", text: "The facts that were shared", match: ["fact", "what was said", "what was disclosed", "information shared", "information given", "content"] },
          { id: "questions", text: "Questions asked and answers given", match: ["question", "answer"] },
          { id: "plan", text: "The agreed plan and follow up", match: ["plan", "follow up", "followup", "next step"] },
          { id: "contact", text: "Contact person offered", match: ["contact"] },
          { id: "apology", text: "That an apology or expression of regret was offered", match: ["apology", "regret", "sorry"] },
          { id: "reaction", text: "The patient or family response", match: ["response", "reaction", "understanding"] },
        ],
        explanation:
          "Document objectively when the discussion occurred, who was present, the facts shared, questions and answers, and the plan for follow up. Avoid speculation or blame in the record. Do not document protected quality review deliberations in the chart.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
    ],
    sources: [ECFAA, APOLOGY, CMPA_DISCLOSURE],
  },
];
