// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "cqi", reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  ciaf: {
    id: "ciaf",
    citation: "Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012.",
    url: "https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/",
  },
  cdg: {
    id: "cdg",
    citation: "Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011.",
    url: "https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/",
  },
  cmpaDisclosure: {
    id: "cmpa-disclosure",
    citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017.",
    url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
  },
  cmpaJust: {
    id: "cmpa-just-culture",
    citation: "Canadian Medical Protective Association. Learning from adverse events: fostering a just culture of safety in Canadian hospitals and health care institutions. 2009.",
    url: "https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_learning_from_adverse_events-e.pdf",
  },
  rop: {
    id: "rop-2021",
    citation: "Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.",
  },
  ismpWeight: {
    id: "ismp-weight",
    citation: "ISMP Canada. Weight-based medication dose errors. ISMP Canada Safety Bulletin. Volume 16, issue 9. 2016.",
    url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2016-09-WeightBasedDoseErrors.pdf",
  },
  haig: {
    id: "haig-sbar",
    citation: "Haig KM, Sutton S, Whittington J. SBAR: a shared mental model for improving communication between clinicians. Jt Comm J Qual Patient Saf. 2006.",
    url: "https://pubmed.ncbi.nlm.nih.gov/16617948/",
  },
  qi1: {
    id: "qi-primer-1",
    citation: "Chartier LB, Cheng AHY, Stang AS, Vaillancourt S. Quality improvement primer part 1: preparing for a quality improvement project in the emergency department. CJEM. 2018.",
    url: "https://pubmed.ncbi.nlm.nih.gov/28756779/",
  },
  qi2: {
    id: "qi-primer-2",
    citation: "Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018.",
    url: "https://pubmed.ncbi.nlm.nih.gov/28934995/",
  },
  qi3: {
    id: "qi-primer-3",
    citation: "Chartier LB, Vaillancourt S, Cheng AHY, Stang AS. Quality improvement primer part 3: evaluating and sustaining a quality improvement project in the emergency department. CJEM. 2019.",
    url: "https://pubmed.ncbi.nlm.nih.gov/29925452/",
  },
  perla: {
    id: "perla-run-chart",
    citation: "Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.",
  },
  casBlock: {
    id: "cas-block-pause",
    citation: "Canadian Anesthesiologists' Society. Guidelines to the Practice of Anesthesia: revised edition 2026. Can J Anesth. 2026.",
    url: "https://www.cas.ca/CASAssets/Documents/Practice-Resources/Guidelines/CAS_Guidelines_Anesthesia_2026.pdf",
  },
  ismpPen: {
    id: "ismp-insulin-pen",
    citation: "ISMP Canada. ALERT: use of one insulin pen for multiple patients is a high-risk practice. ISMP Canada Safety Bulletin. Volume 13, issue 4. 2013.",
    url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2013-04_ALERT_InsulinPenHighRiskPractice.pdf",
  },
  ismpHighAlert: {
    id: "ismp-high-alert",
    citation: "ISMP Canada. Canadian High-Alert Medication List. 2024.",
    url: "https://ismpcanada.ca/resource/highalertlist/",
  },
  caep2013: {
    id: "caep-2013",
    citation: "Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24176460/",
  },
  caep2026: {
    id: "caep-2026",
    citation: "Li MK, McLeod SL, Affleck A, and colleagues. Emergency department overcrowding: a CAEP position statement. CJEM. 2026.",
    url: "https://www.caep.ca/position-statements/emergency-department-overcrowding",
  },
  rvqp: {
    id: "ed-rvqp",
    citation: "Chartier LB, Ovens H, Hayes E, and colleagues. Improving quality of care through a mandatory provincial audit program: Ontario's Emergency Department Return Visit Quality Program. Ann Emerg Med. 2021.",
    url: "https://pubmed.ncbi.nlm.nih.gov/33199045/",
  },
  ivers: {
    id: "ivers-af",
    citation: "Ivers N, Yogasingam S, Lacroix M, and colleagues. Audit and feedback: effects on professional practice. Cochrane Database Syst Rev. 2025.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40130784/",
  },
  scott: {
    id: "scott-second-victim",
    citation: "Scott SD, Hirschinger LE, Cox KR, and colleagues. The natural history of recovery for the healthcare provider second victim after adverse patient events. Qual Saf Health Care. 2009.",
    url: "https://pubmed.ncbi.nlm.nih.gov/19812092/",
  },
  gtt: {
    id: "ihi-gtt",
    citation: "Griffin FA, Resar RK. IHI Global Trigger Tool for Measuring Adverse Events. 2nd ed. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2009.",
    url: "https://www.ihi.org/library/white-papers/ihi-global-trigger-tool-measuring-adverse-events",
  },
  benneyan: {
    id: "benneyan-spc",
    citation: "Benneyan JC, Lloyd RC, Plsek PE. Statistical process control as a tool for research and healthcare improvement. Qual Saf Health Care. 2003.",
    url: "https://pubmed.ncbi.nlm.nih.gov/14645763/",
  },
  calderMM: {
    id: "ottawa-mm",
    citation: "Calder LA, Kwok ESH, Cwinn AA, and colleagues. Enhancing the quality of morbidity and mortality rounds: the Ottawa M&M model. Acad Emerg Med. 2014.",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/acem.12330",
  },
} satisfies Record<string, Source>;

export const CQI_S30: Samp[] = [
  {
    ...META,
    id: "cqi-16",
    title: "A teenager on an antidote infusion",
    stem:
      "A 15-year-old girl is brought to the emergency department by her mother 5 hours after taking about 40 tablets of acetaminophen 500 mg. At triage she stood on a scale that reads in pounds. The nurse typed 110 into the weight field of the electronic record, which stores weight in kilograms by default. The acetylcysteine order set calculated the first bag from 110 kg. Twenty minutes into the first bag she develops flushing, hives and wheeze. The pharmacist then notices the weight error. On a metric scale she weighs 50 kg.",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "24/minute", bp: "104/62 mmHg", o2sat: "95% on room air", weight: "50 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The infusion is stopped. She receives diphenhydramine and salbutamol and her symptoms settle. Acetylcysteine restarts at the dose for 50 kg.",
        prompt: "Which of the following terms best classifies this event when the incident is reported?",
        options: ["Adverse drug reaction", "Harmful incident", "Near miss incident", "No harm incident", "Recognized complication"],
        correct: 1,
        explanation:
          "The weight error reached her and she had flushing, hives and wheeze that needed treatment while the dose ran at about twice the intended amount, so this is a harmful incident, the term that replaces adverse event. A no harm incident reaches the patient without discernible harm, and a near miss does not reach the patient at all. Filing it as an adverse drug reaction or a recognized complication hides the dosing error. The disclosure guidelines warn against labelling harm as a complication before the incident has been examined.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "cdg",
      },
      {
        id: "q2",
        kind: "single",
        update: "The charge nurse asks what to do with the first infusion bag and the pump that delivered it.",
        prompt: "Which of the following is the most appropriate action for the bag and the pump now?",
        options: ["Discard the bag as biohazard waste", "Keep the pump running on her infusion", "Label and secure both for review", "Return the bag to pharmacy", "Send the pump for biomedical repair"],
        correct: 2,
        explanation:
          "Securing items is part of the immediate response after an incident. The bag, its label and the pump hold the evidence of what was prepared and what was delivered, so both are labelled with lot and serial numbers and kept in a restricted place for the review team. Discarding the bag or returning it to pharmacy destroys that evidence. Keeping the pump in use overwrites its history. Nothing suggests the pump failed, so sending it for repair misses the point and may erase its log.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "The incident review confirms that the triage scale can display pounds or kilograms and that weight is typed into the record by hand.",
        prompt: "Which of the following corrective actions rank highest on the hierarchy of effectiveness for preventing this error?",
        options: [
          "Education session on unit conversion",
          "Independent double check of weight",
          "Memo about recording weight units",
          "Policy to record weight in kilograms",
          "Poster with a pound to kilogram table",
          "Scale that transmits weight to the chart",
          "Triage scales locked to kilograms",
        ],
        correct: [5, 6],
        explanation:
          "Locking the scales to kilograms is a forcing function: a weight in pounds can no longer be produced. A scale that sends its reading straight to the record is automation that removes hand typing, the step where 110 pounds became 110 kg. ISMP Canada recommends kilogram-only scales for this reason. A double check sits lower, with reminders and checklists, because it relies on vigilance. Policies, memos, posters and education are the weakest tier. They are needed, but alone they do not change the conditions that allowed the error.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "ismp-weight",
      },
      {
        id: "q4",
        kind: "single",
        update: "She is alert, understands her care and wants her mother to stay with her.",
        prompt: "Which of the following is the most appropriate approach to disclosing this incident?",
        options: ["Disclose after the incident review ends", "Disclose now to her and her mother", "Disclose only to her mother as guardian", "Let the pharmacist lead the disclosure", "Mention it only if she asks about it"],
        correct: 1,
        explanation:
          "She was harmed, so disclosure is required, and it should happen as soon as reasonably possible, focused on the facts known now. She is capable of understanding her care, so the conversation is with her, and her mother can join because she asked for that. Waiting for the review delays information she is owed, and the review findings come later in a post-analysis disclosure. Speaking only to her mother bypasses a capable patient. The most responsible physician usually leads, not the pharmacist who found the error. Disclosure never depends on the patient asking.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cdg",
      },
    ],
    sources: [S.cdg, S.ciaf, S.ismpWeight],
  },
  {
    ...META,
    id: "cqi-17",
    title: "A dose stopped at the stretcher",
    stem:
      "A 79-year-old woman with a urinary tract infection is on a hallway stretcher in the emergency department. The hallway spaces have no numbers. A nurse arrives with IV metoprolol 5 mg that was ordered for a 76-year-old woman with the same first name on the next stretcher. The nurse reads out the first name on the order and asks if it is hers. She nods. Before the dose is given, her daughter says her mother is hard of hearing and takes no heart medication. The nurse checks the wristband and stops. The dose is not given.",
    vitals: { temperature: "37.9°C oral", pulse: "62/minute", resp: "18/minute", bp: "106/60 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following pairs is most appropriate to confirm her identity before a medication is given?",
        options: ["Date of birth and hallway location", "First name and a nod of agreement", "Full name and attending physician", "Full name and date of birth", "Stretcher location and diagnosis"],
        correct: 3,
        explanation:
          "Two person-specific identifiers, such as full name and date of birth, are confirmed with the patient by asking open questions like What is your name, not by reading a name for a yes or no reply. A nod from a woman who is hard of hearing confirmed nothing here. A hallway space or stretcher location is not person-specific and should not be used. The attending physician and the diagnosis are shared by many patients, and two women on this hallway could share both.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her daughter asks what the nurse was about to give. The patient is anxious and asks whether she was given the wrong medicine.",
        prompt: "Which of the following is the most appropriate way to handle disclosure with her and her daughter?",
        options: ["Ask the charge nurse to discuss it later", "Defer discussion until the review ends", "Explain the near miss and apologize", "Refer the daughter to patient relations", "No discussion because no harm occurred"],
        correct: 2,
        explanation:
          "The dose never reached her, so this is a near miss, and disclosure of a near miss is discretionary. The guidelines advise telling the patient when she is already aware of the event or when a safety risk continues. Both apply: her daughter saw it, and a patient with the same first name is still on the next stretcher. A prompt explanation and apology relieves her worry and keeps trust. Deferring the talk, handing it to patient relations or to a colleague later, or saying nothing leaves an anxious patient without an answer.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cdg",
      },
      {
        id: "q3",
        kind: "single",
        update: "The quality lead finds 11 other wrong-patient near misses reported from hallway spaces in the last 6 months.",
        prompt: "Which of the following is the most appropriate method to analyze these events?",
        options: ["Comprehensive analysis of this event", "Concise analysis of this event", "Failure mode and effects analysis", "Morbidity and mortality rounds", "Multi-incident analysis of the group"],
        correct: 4,
        explanation:
          "Multi-incident analysis reviews several low harm incidents and near misses together, grouped by theme, and can show system patterns that one case cannot. Twelve wrong-patient near misses from hallway spaces are such a theme. A concise or comprehensive analysis of this single event would miss what the other 11 share. Failure mode and effects analysis is a prospective method, used to test a new or changed process before it goes live. Morbidity and mortality rounds are for teaching and discussion and are not a structured incident analysis.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following system changes is most likely to prevent a wrong-patient medication error in hallway spaces?",
        options: ["Bedside barcode scanning of wristbands", "Education on two person identifiers", "Name alert stickers on both charts", "Policy to confirm identity twice", "Second nurse check of each identity"],
        correct: 0,
        explanation:
          "Scanning the wristband and the medication at the bedside is automation. It matches the dose to the patient without depending on hearing, memory or a leading question, which were the weak points here. On the hierarchy of effectiveness, name alert stickers and a second nurse check are reminders and double checks. They help, but they still rely on attention in a crowded hallway. A policy and education are the lowest tiers and do not change the conditions that allowed the near miss.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
    ],
    sources: [S.rop, S.cdg, S.ciaf],
  },
  {
    ...META,
    id: "cqi-18",
    title: "A night phone call to a consultant",
    stem:
      "You are working in a community hospital emergency department at night. A 74-year-old man presents with two episodes of melena and one of coffee-ground emesis over 6 hours. He takes apixaban for atrial fibrillation and naproxen for arthritis. He had a hip replacement 4 years ago. He is pale and diaphoretic. Hemoglobin is 71 g/L, down from 128 g/L 3 months ago. A junior resident phones the on-call gastroenterologist at home. The resident opens with the arthritis history and the hip replacement. After 3 minutes the consultant asks what the resident needs.",
    vitals: { temperature: "36.6°C oral", pulse: "112/minute", resp: "20/minute", bp: "96/58 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following should the resident have stated first on this call, using the SBAR structure?",
        options: ["Anticoagulant and timing of last dose", "Hemoglobin trend over 3 months", "Past medical and surgical history", "Request for urgent endoscopy", "Situation and main concern"],
        correct: 4,
        explanation:
          "SBAR opens with the situation: who is calling, about which patient, and the main concern, here an older man with an upper GI bleed who is hypotensive and tachycardic. That frames everything that follows for a consultant woken at home. The anticoagulant, the hemoglobin trend and the past history belong to the background. The request for endoscopy is the recommendation and comes last. Opening with the hip replacement, as this resident did, buries the urgent problem.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "haig-sbar",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements best fits the assessment element of SBAR for this patient?",
        options: ["He had a hip replacement 4 years ago", "He takes apixaban and naproxen daily", "I am calling about a man with melena", "I think he has an unstable upper GI bleed", "I would like you to see him for endoscopy"],
        correct: 3,
        explanation:
          "The assessment is the caller's interpretation of the problem. An unstable upper GI bleed sums up the melena, the coffee-ground emesis, the fall in hemoglobin to 71 g/L, the tachycardia and the soft BP. The statement about melena is the situation. The medications and the hip replacement are background, and the hip replacement adds nothing to this call. The request to see him for endoscopy is the recommendation.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "haig-sbar",
      },
      {
        id: "q3",
        kind: "single",
        update: "An hour later the repeat hemoglobin is 58 g/L. The resident calls the gastroenterologist back and plans to end the call with a clear recommendation.",
        prompt: "Which of the following statements best fits the recommendation element of SBAR for this second call?",
        options: ["He takes apixaban and naproxen", "His hemoglobin has fallen to 58 g/L", "I think he is still bleeding", "Please come in now for urgent endoscopy", "What do you think we should do"],
        correct: 3,
        explanation:
          "The recommendation states what the caller needs and how soon. Asking the consultant to come in now for urgent endoscopy is specific and time bound, and a hemoglobin of 58 g/L in a man who is tachycardic with a soft BP justifies it. The new hemoglobin updates the situation. Apixaban and naproxen are background. Saying he is still bleeding is an assessment. Asking what the consultant thinks leaves the decision open and invites delay, which is the gap the recommendation step of SBAR is meant to close.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "haig-sbar",
      },
      {
        id: "q4",
        kind: "single",
        update: "The department decides that all consultant calls should use SBAR.",
        prompt: "Which of the following would best keep structured communication reliable in the department over time?",
        options: ["Annual lecture on phone etiquette", "One-time SBAR teaching at orientation", "Periodic audit of calls with feedback", "Poster describing SBAR beside phones", "Written SBAR policy in the manual"],
        correct: 2,
        explanation:
          "A standard only holds if someone checks it. Accreditation Canada expects the effectiveness of information transfer to be evaluated, for example by direct observation or record audit, with improvements made from the feedback. Periodic audit of real calls with feedback to residents and staff does this and makes SBAR part of routine work. A one-time session or an annual lecture fades. A poster and a written policy describe the standard but do not show whether anyone uses it.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "rop-2021",
      },
    ],
    sources: [S.haig, S.rop],
  },
  {
    ...META,
    id: "cqi-19",
    title: "A long wait with a deformed forearm",
    stem:
      "A 7-year-old boy with an obviously deformed forearm waited 110 minutes in the emergency department waiting room before his first dose of ibuprofen. He cried throughout the wait. You chair the department's quality committee. An audit of 60 children aged 3 to 17 years with suspected long-bone fractures finds a median time from triage to first analgesic of 94 minutes. Only 22% received an analgesic within 30 minutes of triage. Triage nurses cannot give analgesics without a physician order. The team proposes a nurse-initiated analgesia protocol at triage.",
    vitals: {},
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best aim statement for this improvement project?",
        options: ["80% given analgesia within 30 minutes by June 30", "Improve fracture pain care across the department", "Median time to analgesia below 90 minutes", "Nurse-initiated ibuprofen at triage by June 30", "Reduce pain scores in the waiting room"],
        correct: 0,
        explanation:
          "A good aim statement is specific, measurable and time bound. Raising the share of these children given an analgesic within 30 minutes from 22% to 80% by a set date meets all three and ties directly to the gap the audit found. Improving pain care across the department is too vague to measure. A median below 90 minutes barely moves from the baseline of 94 minutes and has no date. Nurse-initiated ibuprofen is a change idea, not an aim. Reducing pain scores has no target or deadline.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "qi-primer-2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first test of the triage analgesia protocol?",
        options: ["All triage nurses on all shifts at once", "One triage nurse on two day shifts", "Pilot at a partner hospital first", "Randomized trial across two sites", "Wait for a full year of baseline data"],
        correct: 1,
        explanation:
          "A Plan-Do-Study-Act cycle starts small. One nurse on two shifts can test the protocol quickly, find problems such as missing weights or unclear exclusions, and adapt before it spreads. Launching it to all nurses on all shifts at once risks confusion and makes failures costly. A pilot at another hospital does not test the local process. A randomized trial is research, not rapid-cycle improvement. The audit of 60 children already gives a baseline, so a further year of data only delays the work.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "qi-primer-2",
      },
      {
        id: "q3",
        kind: "single",
        update: "Weekly median time to analgesia is plotted on a run chart with the baseline median of 94 minutes frozen as the centre line. The first 5 weeks after the protocol read 90, 84, 79, 71 and 62 minutes.",
        prompt: "Which of the following best describes these 5 weeks on the run chart?",
        options: ["Astronomical data point", "Common cause variation only", "Shift below the median", "Too few runs across median", "Trend toward improvement"],
        correct: 4,
        explanation:
          "Five consecutive points all going down meet the run chart rule for a trend, a non-random signal that suggests the change is working. A shift needs six or more consecutive points on one side of the median. These are only five, so a shift has not yet been shown. No single week is blatantly different from the rest, so there is no astronomical point. Too few runs cannot be judged from five points. Common cause is a control chart term that the run chart authors advise against using on a run chart, and a trend is a non-random signal in any case.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "perla-run-chart",
      },
      {
        id: "q4",
        kind: "single",
        update: "Twelve weeks later, 84% of children with suspected long-bone fractures receive an analgesic within 30 minutes of triage.",
        prompt: "Which of the following is the best way to sustain this gain after the aim is met?",
        options: ["Build the protocol into triage standard work", "End data collection once the aim is met", "Hold a celebration and close the project", "Remind nurses by email every quarter", "Repeat the full baseline audit yearly"],
        correct: 0,
        explanation:
          "Gains last when the change becomes the normal way of working. Building the protocol into triage standard work, orientation and the triage record, with ongoing measurement, keeps it from depending on the enthusiasm of the project team. Ending data collection or closing the project hides any slide back toward 94 minutes. Quarterly email reminders are weak and fade. A yearly audit detects a slide too late for the children who wait in the meantime.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "qi-primer-3",
      },
    ],
    sources: [S.qi2, S.perla, S.qi3],
  },
  {
    ...META,
    id: "cqi-20",
    title: "Collapse in the waiting room",
    stem:
      "A 71-year-old man presents to the emergency department with 2 hours of left flank pain. He has hypertension and smokes. He is triaged as CTAS 3 with presumed renal colic and returns to the waiting room. Department policy requires reassessment of CTAS 3 patients in the waiting room every 30 minutes. The department is at 160% occupancy with 22 admitted patients boarding, and the waiting room nurse has been moved to the hallway. No reassessment is documented. Two hours and 40 minutes after triage he collapses. POCUS shows a large abdominal aortic aneurysm. He dies in the operating room.",
    vitals: { temperature: "36.7°C oral", pulse: "98/minute", resp: "18/minute", bp: "104/66 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following contributing factors to the delayed recognition should the incident analysis explore?",
        options: [
          "Anchoring on renal colic at triage",
          "Blood bank response in the operating room",
          "Boarded admissions limiting nurse staffing",
          "Carelessness of the triage nurse",
          "Operative approach chosen by surgery",
          "Smoking history of the patient",
          "Unassigned waiting room reassessment role",
        ],
        correct: [0, 2, 6],
        explanation:
          "The delay came from system conditions. Twenty-two boarded patients pulled the waiting room nurse to the hallway, so no one held the reassessment role, and the triage label of renal colic in an older hypertensive smoker framed every later look. Calling the nurse careless is a judgment, not a factor, and it stops the search for causes. The blood bank and the operative approach came after the collapse and did not delay recognition. His smoking raised his risk of an aneurysm but did not delay its diagnosis.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q2",
        kind: "single",
        update: "His wife arrives. The review has not started.",
        prompt: "Which of the following is most appropriate at the initial disclosure meeting with his wife?",
        options: ["Explain that the rupture was unpreventable", "Explain the known facts and apologize", "Offer compensation on behalf of the hospital", "State that the triage nurse made an error", "Wait until the analysis is complete"],
        correct: 1,
        explanation:
          "At the first meeting the physician shares the facts known now, including that he waited without reassessment, expresses sympathy and regret, explains that a review will follow and names a contact person. Saying the rupture was unpreventable is speculation before any analysis. Naming the triage nurse's error is blame, which the CMPA calls unfair and unprofessional. Compensation goes beyond the known facts and is a decision for hospital leadership, not part of initial disclosure. Waiting for the analysis leaves a grieving family without answers when disclosure should begin as soon as reasonably possible.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the incident review this event requires?",
        options: ["Accountability review of the triage nurse", "Comprehensive system incident analysis", "Concise analysis by the unit manager", "Coroner inquest in place of a review", "Review at next monthly M&M rounds"],
        correct: 1,
        explanation:
          "A death with several interacting factors, including boarding, staffing and triage, calls for a comprehensive analysis with interviews, a detailed chronology and senior leadership involvement. An accountability review applies when there is a deliberate violation, a concern about the provider's health or a clear lack of knowledge or skill. None is described here. A concise analysis suits incidents with no, low or moderate harm. A coroner's investigation may run in parallel but does not replace the hospital's own learning review. Rounds are for discussion, not structured analysis.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following indicators would best monitor the risk exposed by this event?",
        options: ["Annual count of aortic aneurysm deaths", "Left without being seen rate", "Median time to physician assessment", "Patient satisfaction survey scores", "Percent of CTAS 3 patients reassessed on time"],
        correct: 4,
        explanation:
          "The gap was missed reassessment of waiting patients, so the most useful indicator is the share of CTAS 3 patients reassessed within the 30 minutes the policy requires. It is a process measure that changes week to week and can be acted on before the next patient deteriorates. Aneurysm deaths are too rare to show a trend. The rate of leaving without being seen and time to physician assessment track crowding but not whether waiting patients are rechecked. Satisfaction scores do not measure this risk.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "qi-primer-2",
      },
    ],
    sources: [S.ciaf, S.cmpaDisclosure, S.qi2],
  },
  {
    ...META,
    id: "cqi-21",
    title: "A nerve block on a hip fracture",
    stem:
      "An 88-year-old woman is brought to the emergency department by ambulance after a fall at her retirement home. Her right leg is shortened and externally rotated, and X-ray shows a right femoral neck fracture. She has mild dementia. The physician sets up an ultrasound-guided fascia iliaca block and is called to the resuscitation room twice during setup. On returning, the physician places the block on the left side. The nurse notices after the injection. The department has no pre-procedure pause for bedside blocks and the site was not marked. A right-sided block is then placed, with the total local anesthetic dose kept within safe limits. She shows no signs of toxicity.",
    vitals: { temperature: "36.4°C oral", pulse: "88/minute", resp: "16/minute", bp: "148/82 mmHg", o2sat: "95% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The unit manager uses the incident decision tree to decide how to respond to the physician.",
        prompt: "Which of the following questions does the substitution test in the incident decision tree ask?",
        options: ["Did the physician intend to cause harm", "Does the physician have a health problem", "Were safe procedures available and in use", "Would a peer act the same in this setting", "Would the patient have been harmed anyway"],
        correct: 3,
        explanation:
          "The substitution test asks whether another provider from the same professional group, with comparable training and experience, would likely have acted the same way in the same circumstances. With repeated interruptions, no site marking and no pause process, many peers would have made the same slip, which points to a system failure. Intent to harm is the deliberate harm test. A health problem is the health test. Availability of safe procedures is the foresight test. Whether harm would have happened anyway judges the outcome, not the behaviour.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate type of review for this incident?",
        options: ["Accountability review of the physician", "College complaint by the department", "Remedial training for the physician", "Review of the system by the quality team", "Suspension of block privileges"],
        correct: 3,
        explanation:
          "A quality improvement review of the system is preferred unless there is an alleged deliberate violation of sound policy, a concern about the provider's health, or a dominant concern about a clear lack of knowledge, skill or professionalism. None applies here. The slip happened in a department with no pause process and repeated interruptions. An accountability review, a college complaint, suspension or remedial training all treat this as an individual failing and would discourage the reporting the department needs.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "cmpa-just-culture",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following practices would most directly have prevented this wrong-side block?",
        options: ["Checking allergies before the block", "Marking the site and pausing to confirm", "Performing blocks only by anesthesia", "Saving the ultrasound image to the chart", "Second physician present for each block"],
        correct: 1,
        explanation:
          "A pre-block pause with the side marked makes the operator confirm the side against the marking and the consent just before the needle goes in. The Canadian Anesthesiologists' Society strongly recommends such a pause wherever peripheral blocks are done. Here the side was lost during two calls to the resuscitation room between setup and injection. Checking allergies is good practice but does not confirm the side. Limiting blocks to anesthesia moves the task without adding a check. A saved image documents the error afterward. A second physician adds staff but not a defined verification step.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "cas-block-pause",
      },
      {
        id: "q4",
        kind: "single",
        update: "The review finds no pause process for bedside blocks and frequent interruptions. A pause with site marking is now required. You meet her and her son to share the findings.",
        prompt: "Which of the following is most appropriate to include at this post-analysis disclosure meeting?",
        options: ["Apology acknowledging responsibility for harm", "Detailed opinions voiced during the review", "Names of staff who were interviewed", "Reassurance that nothing could be changed", "Statement that the physician was negligent"],
        correct: 0,
        explanation:
          "When analysis shows that harm came from a system failure or provider performance, an apology that acknowledges responsibility is appropriate, along with the changes made, here the new pause and site marking. Opinions and speculation voiced inside a quality review, and the names of those interviewed, are generally protected and are not shared. Saying nothing could change is untrue, since the process has changed. Words such as negligent imply legal liability, which the CMPA advises physicians to avoid because courts and colleges make those findings.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
    ],
    sources: [S.ciaf, S.cmpaJust, S.casBlock, S.cmpaDisclosure],
  },
  {
    ...META,
    id: "cqi-22",
    title: "A patient reports a shared pen",
    stem:
      "A 58-year-old man with type 2 diabetes is admitted through the emergency department with cellulitis of the leg. His orders include insulin lispro, cefazolin, enoxaparin, acetaminophen, metformin and ondansetron. On his second night boarding in the emergency department, he watches a nurse give him insulin with a pen and then carry the same pen to the next stretcher. He tells the charge nurse. The nurse says she changed the needle each time. A review finds that ward-stock insulin pens have been shared among boarding patients for 5 weeks. Pharmacy records identify 37 patients who received insulin from a shared pen.",
    vitals: { temperature: "37.6°C oral", pulse: "90/minute", resp: "16/minute", bp: "138/84 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to disclosure for the exposed patients?",
        options: ["Contact and offer testing to all 37", "Disclose only if a patient seroconverts", "Disclose only to the man who saw it", "Post a notice on the hospital website", "No disclosure since no harm is known"],
        correct: 0,
        explanation:
          "Sharing a pen between patients can transmit HIV, hepatitis B and hepatitis C even when the needle is changed, because blood can enter the cartridge. That makes this a no harm incident with potential for future harm, which requires disclosure, and testing lets infections be found and treated early. All 37 patients carry the same risk, so disclosing only to the man who saw it is unfair. Waiting for seroconversion delays care. A website notice does not reliably reach the people exposed.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes how this large-scale disclosure should be organized?",
        options: ["Coordinated plan by a multidisciplinary team", "Each nurse calls the patients she treated", "Family physicians told to inform patients", "Letter sent after testing the source pens", "Media release before contacting patients"],
        correct: 0,
        explanation:
          "Large-scale disclosure needs a coordinated plan built by clinical, epidemiology, ethics, administrative, communications, legal and patient experience experts, who decide who is at risk, what to say, how to reach people and how testing and follow-up will work. Individual nurses calling their own patients gives inconsistent messages and loses patients no one remembers. Family physicians need to know, but disclosure is the hospital's duty. Testing the pens does not change who was exposed. Patients should hear before the media does.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cdg",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following corrective actions is most likely to prevent pens being shared again?",
        options: ["Audit of insulin administration monthly", "Education on single-patient pen use", "Monthly reminder at safety huddles", "Patient-labelled pens from pharmacy", "Sticker on each pen for one patient"],
        correct: 3,
        explanation:
          "Pens dispensed by pharmacy with a patient-specific label, checked against the wristband before each dose, remove the shared ward-stock pen that made this practice possible. ISMP Canada recommends exactly this. Education, huddle reminders and warning stickers rely on memory and are weaker on the hierarchy of effectiveness, especially when the unsafe habit had become normal for 5 weeks. A monthly audit detects sharing after it happens rather than preventing it.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ismp-insulin-pen",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following medications in his orders are on the Canadian High-Alert Medication List?",
        options: ["acetaminophen 1 g PO", "cefazolin 2 g IV", "enoxaparin 40 mg SC", "insulin lispro 6 units SC", "metformin 500 mg PO", "ondansetron 4 mg IV"],
        correct: [2, 3],
        explanation:
          "The Canadian High-Alert Medication List includes insulins and injectable anticoagulants such as low molecular weight heparin, so insulin lispro and enoxaparin need added safeguards. These drugs are not more likely to be involved in an error, but the harm is often severe when one happens. Oral acetaminophen, cefazolin, metformin and ondansetron are not on the list. IV acetylcysteine used as an antidote is on it, which is easy to confuse with acetaminophen.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "ismp-high-alert",
      },
    ],
    sources: [S.cmpaDisclosure, S.cdg, S.ismpPen, S.ismpHighAlert],
  },
  {
    ...META,
    id: "cqi-23",
    title: "Two days on a hallway stretcher",
    stem:
      "An 86-year-old woman with mild cognitive impairment is admitted to medicine from the emergency department with pneumonia. She waits 41 hours on a hallway stretcher for an inpatient bed. On the second night she becomes delirious and pulls out her IV. Her son asks why she was in a hallway for two days. You are the department's quality lead. Last quarter, time from decision to admit to departure to an inpatient bed had a median of 14 hours and a 90th percentile of 39 hours. Median time to physician initial assessment was 1.4 hours. Most arrivals are CTAS 3.",
    vitals: { temperature: "37.8°C oral", pulse: "96/minute", resp: "22/minute", bp: "128/70 mmHg", o2sat: "92% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following measures most directly reflects access block in this department?",
        options: ["Ambulance arrivals per day", "Boarding time of admitted patients", "Left without being seen rate", "Median time to physician assessment", "Visits by CTAS 4 and 5 patients"],
        correct: 1,
        explanation:
          "Access block is the inability of admitted patients to reach an inpatient bed, so the time admitted patients spend boarding in the emergency department measures it directly. CAEP identifies it as the main cause of crowding in Canadian hospitals. Ambulance arrivals and visits by CTAS 4 and 5 patients describe input, and low acuity patients are not what crowds Canadian departments. Time to physician assessment and the rate of leaving without being seen reflect crowding but are downstream effects rather than a measure of access block.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "caep-2013",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes this department's time to inpatient bed against the CAEP targets?",
        options: ["Both median and 90th percentile exceed target", "Both median and 90th percentile meet target", "Median exceeds target, 90th percentile meets it", "Median meets target, 90th percentile exceeds it", "No CAEP target exists for this interval"],
        correct: 0,
        explanation:
          "CAEP recommends a time from admission decision to inpatient bed of 2 hours at the median and 8 hours at the 90th percentile. This department reports 14 hours at the median, 7 times the target, and 39 hours at the 90th percentile, nearly 5 times the target. Both exceed it. CAEP set this target because admitted patients waiting in the department is the key driver of crowding, so a target does exist.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "caep-2026",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following interventions best targets the main cause of crowding in this department?",
        options: ["Adding more hallway stretchers in the ED", "Diverting low acuity patients to clinics", "Fast track for CTAS 4 and 5 patients", "Inpatient overcapacity protocol", "Physician assessment at triage"],
        correct: 3,
        explanation:
          "The problem is output. Admitted patients wait a median of 14 hours for a bed while time to physician assessment is 1.4 hours. An inpatient overcapacity protocol moves stable admitted patients to the wards at times of peak pressure, sharing the load across the hospital, and CAEP recommends it as an output solution. More hallway stretchers make boarding easier rather than shorter. Diverting low acuity patients and a fast track address input and throughput, and most arrivals here are CTAS 3. Physician assessment at triage works on the front end. Time to assessment is 1.4 hours against a CAEP median target of 1 hour, a small gap beside a 14-hour boarding median, and it does nothing for access block.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "caep-2013",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statistics best describes the experience of the admitted patients who wait longest for a bed?",
        options: ["Mean time to inpatient bed", "Median time to inpatient bed", "Minimum time to inpatient bed", "90th percentile time to inpatient bed", "Total boarding hours per month"],
        correct: 3,
        explanation:
          "The 90th percentile shows the wait that 1 in 10 admitted patients reaches or exceeds, here 39 hours, and this patient's 41 hours sits in that tail. That is why CAEP sets targets at both the median and the 90th percentile. The median of 14 hours describes the typical patient and hides the long tail. A mean blends the tail into one average. The minimum describes the luckiest patient. Total boarding hours measure the department's overall burden, not how long the worst-affected patients wait.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "caep-2013",
      },
    ],
    sources: [S.caep2013, S.caep2026],
  },
  {
    ...META,
    id: "cqi-24",
    title: "A headache that came back",
    stem:
      "A 44-year-old woman is brought to the emergency department by ambulance with severe headache, vomiting and neck stiffness. CT shows subarachnoid hemorrhage, and she is admitted. Four days earlier she was seen in the same department for a headache that peaked within 1 minute while she was lifting weights. That chart records a normal neurologic examination and a diagnosis of migraine. She had no history of migraine. No CT was done and no decision rule was documented. She was discharged. Your Ontario hospital takes part in the provincial Emergency Department Return Visit Quality Program.",
    vitals: { temperature: "37.2°C oral", pulse: "64/minute", resp: "18/minute", bp: "172/94 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following criteria flags this return visit for mandatory audit under the provincial program?",
        options: ["Any return visit within 30 days", "Complaint about the first visit", "Discharge again within 72 hours", "Sentinel diagnosis admitted in 7 days", "Transfer to another hospital for surgery"],
        correct: 3,
        explanation:
          "The program requires audit of all 7-day return visits admitted with a sentinel diagnosis: acute myocardial infarction, subarachnoid hemorrhage or pediatric sepsis. She returned on day 4 with subarachnoid hemorrhage. The program also samples 72-hour returns, but only those admitted, and her return came after 72 hours. A 30-day window, a complaint or a transfer for surgery are not program criteria, although a department may review such cases on its own.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ed-rvqp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best classifies the main quality issue at her first visit?",
        options: ["Diagnostic issue", "Discharge follow-up issue", "Documentation issue only", "Medication issue", "Procedural complication"],
        correct: 0,
        explanation:
          "A headache that peaked within 1 minute during exertion, in a woman with no migraine history, was labelled migraine without CT, so the main issue is diagnostic. Physician cognitive lapses are one of the recurrent themes found in audits under the Ontario program. Missing documentation of a decision rule contributed, but calling it documentation only misses the diagnostic gap. No medication or procedure caused harm. Better follow-up would not have replaced imaging at the first visit.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ed-rvqp",
      },
      {
        id: "q3",
        kind: "single",
        update: "She asks you whether the first doctor should have caught this. A colleague saw her at the first visit and is not on shift.",
        prompt: "Which of the following is the most appropriate response to her question?",
        options: ["Advise her to contact a lawyer", "Refuse to discuss the earlier visit", "Say the first physician made a clear error", "Say the headache was a typical migraine", "Share known facts without speculating"],
        correct: 4,
        explanation:
          "She deserves an honest answer. Share what is known, that she was seen 4 days ago and discharged with a diagnosis of migraine, say that the visit will be reviewed, and commit to follow up. The CMPA advises against speculating or blaming another provider without the full facts, and encourages talking with the colleague, who may be best placed to discuss the care. Declaring a clear error is premature blame. Calling it a typical migraine is false. Refusing to talk or pointing her to a lawyer abandons her.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best uses the return visit audits to improve care in the department over time?",
        options: ["Discuss this case once at M&M rounds", "Send the first physician a warning letter", "Submit the audit and file the result", "Track audit themes and act each quarter", "Wait for the province's annual report"],
        correct: 3,
        explanation:
          "The program is designed to find recurring local themes, such as cognitive lapses, documentation and handover, and turn them into improvement projects. Reviewing audit themes regularly and acting on them builds that learning into routine work. Submitting the audit and filing it meets the requirement but changes nothing. A single discussion at rounds is not a system. A warning letter treats a system theme as individual blame. Waiting for the provincial report delays local action.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ed-rvqp",
      },
    ],
    sources: [S.rvqp, S.cmpaDisclosure],
  },
  {
    ...META,
    id: "cqi-25",
    title: "A bump on a cupboard door",
    stem:
      "A 34-year-old man presents to the emergency department after striking his head on a cupboard door. He had no loss of consciousness, amnesia, disorientation or vomiting. GCS is 15 and the examination is normal. He waits 3 hours for a head CT, which is normal. An audit of 200 adults seen last quarter with a minor head injury finds that 116 had CT. Only 36 of those scanned met a high-risk or medium-risk criterion of the Canadian CT Head Rule. The department agrees to reduce unneeded head CT.",
    vitals: {},
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following change ideas is most likely to reduce head CT ordered outside the rule?",
        options: ["CT order that requires rule criteria", "Email reminder about the rule", "Grand rounds on radiation risk", "Poster of the rule in each area", "Radiologist vetting of every scan"],
        correct: 0,
        explanation:
          "A CT order that asks for the rule's criteria builds the decision into the ordering step, which is automation and sits high on the hierarchy of effectiveness. It prompts the physician at the moment of decision rather than relying on memory. Email reminders, posters and grand rounds are information and education, the weakest tier. Radiologist vetting of every scan adds a slow second check after the decision has been made and shifts the work without changing how physicians decide.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "ciaf",
      },
      {
        id: "q2",
        kind: "single",
        update: "For the 80 scans outside the rule, physicians give reasons: patient or family request 38, worry about a missed injury 26, unclear history 10 and other 6.",
        prompt: "Which of the following tools best shows which few reasons account for most of these scans?",
        options: ["Control chart", "Fishbone diagram", "Pareto chart", "Process map", "Run chart"],
        correct: 2,
        explanation:
          "A Pareto chart ranks causes from most to least frequent with a cumulative line. Here it would show that patient request and worry about a missed injury account for 64 of 80 scans, or 80%, so change ideas should target those two. A fishbone diagram brainstorms possible causes but does not count them. A process map shows the steps of the process. Run and control charts track a measure over time rather than comparing causes.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "qi-primer-1",
      },
      {
        id: "q3",
        kind: "single",
        update: "After the order change, the weekly CT rate is plotted against the baseline median. Of the first 8 weeks, 5 fall below the median and 3 above, with no steady direction.",
        prompt: "Which of the following is the most appropriate conclusion from this run chart so far?",
        options: ["Astronomical point after the change", "Clear shift below the median", "Improvement shown by the majority", "Trend toward fewer scans", "No non-random signal yet"],
        correct: 4,
        explanation:
          "No run chart rule is met yet. A shift needs 6 or more consecutive points on one side of the median, and these 8 weeks split 5 below and 3 above. A trend needs 5 or more consecutive points moving in one direction, and there is no steady direction. Having most points below the median is not itself a signal, because chance alone often produces that. No point is described as blatantly different from the rest. The team should keep plotting before judging the change.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "perla-run-chart",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following measures best shows whether head CT ordering now follows the rule?",
        options: ["Number of positive scans per month", "Patient satisfaction with head injury care", "Percent of head CTs meeting the rule", "Radiologist report turnaround time", "Total CT scans done in the hospital"],
        correct: 2,
        explanation:
          "The gap was scans ordered outside the rule, so the direct measure is the share of head CTs for minor head injury that meet a rule criterion, 36 of 116, or 31%, at baseline. It is a process measure tied to the change and it adjusts for changes in volume. A monthly count of positive scans rises and falls with the number of patients seen. Total hospital CT volume mixes in every other indication. Report turnaround and satisfaction do not show whether ordering follows the rule.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "qi-primer-1",
      },
    ],
    sources: [S.ciaf, S.qi1, S.perla],
  },
  {
    ...META,
    id: "cqi-26",
    title: "A runny nose and a prescription",
    stem:
      "A 4-year-old girl is brought to the emergency department by her father with 3 days of runny nose, cough and fever. She is playful and well hydrated. Her ears, throat and chest are normal. She is discharged with a diagnosis of viral upper respiratory tract infection and a prescription for amoxicillin. You lead the department's antimicrobial stewardship work. An audit of 400 children discharged last year with a viral upper respiratory tract infection finds that 38% received an antibiotic. Rates among its 40 physicians range from 9% to 61%. The group plans to give physicians feedback on their prescribing.",
    vitals: { temperature: "38.1°C tympanic", pulse: "118/minute", resp: "24/minute", o2sat: "98% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features are most likely to make audit and feedback on prescribing effective?",
        options: [
          "Action plan with specific advice",
          "Comparison with average of all peers",
          "Comparison with top-performing peers",
          "Data on the physician's own patients",
          "Department-level results only",
          "Many indicators in one report",
          "Single written report each year",
        ],
        correct: [0, 2, 3],
        explanation:
          "The 2025 Cochrane review found larger effects when feedback used each recipient's own data rather than team data, compared performance with top peers or a benchmark, and came with an action plan and specific advice. The wide range from 9% to 61% shows why individual data matter. Department-level results let each physician assume the problem lies with others. Comparison with the average of all peers and the number of indicators showed no clear effect. A single written report lacks the interactive, verbal and written formats linked with larger effects.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ivers-af",
      },
      {
        id: "q2",
        kind: "single",
        update: "Several physicians doubt the audit data and say the feedback feels like an administrative exercise.",
        prompt: "Which of the following is most likely to increase physicians' engagement with the feedback?",
        options: ["Anonymous report from the pharmacy", "Email from hospital administration", "Feedback from a respected colleague", "Mandatory online stewardship module", "Warning letter from the chief of staff"],
        correct: 2,
        explanation:
          "Feedback delivered by a local champion, a respected colleague with an existing relationship with the recipient, was associated with larger effects in the Cochrane review, and a peer can answer doubts about the data in conversation. An anonymous pharmacy report and an email from administration reinforce the sense of an outside exercise. An online module is education without feedback on the physician's own practice. A warning letter turns a learning tool into a disciplinary one and invites defensiveness.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ivers-af",
      },
      {
        id: "q3",
        kind: "single",
        update: "In a first test, 3 volunteer physicians receive a report of their own rates. Two say the report is hard to read and does not show which diagnoses drove their prescribing.",
        prompt: "Which of the following is the most appropriate next step in the improvement cycle?",
        options: ["Abandon the feedback reports", "Adapt the report and test again", "Publish the results in a journal", "Roll out to all 40 physicians now", "Wait a year to judge the effect"],
        correct: 1,
        explanation:
          "The study step of a Plan-Do-Study-Act cycle showed a fixable problem, so the next cycle adapts the report, adding a clearer layout and the diagnoses behind each prescription, and tests it again on a small scale. Abandoning the reports throws away a promising change on the basis of design feedback. Rolling out a flawed report to all 40 physicians spreads the problem. Publishing is not part of the cycle. Waiting a year loses the value of rapid small tests.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "qi-primer-2",
      },
    ],
    sources: [S.ivers, S.qi2],
  },
  {
    ...META,
    id: "cqi-27",
    title: "A resident after a return in shock",
    stem:
      "A 30-year-old woman presents to the emergency department with lower abdominal pain and light vaginal bleeding. A second-year resident sees her. A urine pregnancy test is positive and the resident books a formal ultrasound for the next morning. The attending physician approves discharge. Six hours later she returns by ambulance in hemorrhagic shock from a ruptured ectopic pregnancy. She goes to the operating room and survives. At the start of the next shift the resident learns what happened and is tearful at the nursing station.",
    vitals: { temperature: "36.2°C oral", pulse: "134/minute", resp: "26/minute", bp: "76/44 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first response to the resident's distress?",
        options: ["Ask the resident to write a statement now", "Check on the resident and offer support", "Report the resident to the program director", "Tell the resident to keep working as usual", "Wait until the review before discussing it"],
        correct: 1,
        explanation:
          "Clinicians involved in a harmful event often become second victims, with distress, self-doubt and intrusive reflection in the first hours. A prompt private check-in and an offer of support is emotional first aid at the stage when it helps most. Demanding a written statement now adds to the sense of inquisition. Reporting the resident to the program director treats a system and supervision event as individual failure. Telling a tearful resident to carry on risks the next patient. Waiting for the review leaves the resident alone during the worst period.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "scott-second-victim",
      },
      {
        id: "q2",
        kind: "single",
        update: "She is recovering on the gynecology ward and asks to meet about what happened. The resident is anxious about attending.",
        prompt: "Which of the following is the most appropriate plan for who leads the disclosure meeting?",
        options: ["Chief of staff leads the meeting alone", "Emergency nurse who triaged her leads", "Patient relations officer leads it", "Resident leads it without the attending", "The attending leads, resident may join"],
        correct: 4,
        explanation:
          "The most responsible physician for the care in question, here the emergency attending who approved the discharge, generally leads the disclosure. The resident should be encouraged to take part when appropriate, which supports learning and recovery, but should not carry it alone. Leaders such as the chief of staff often take a larger role later, at the post-analysis stage, rather than replacing the physician at the first meeting. Patient relations can support but cannot explain the clinical care. The triage nurse did not make the discharge decision.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would best support staff after future incidents as part of routine department practice?",
        options: ["Annual wellness lecture", "Employee assistance phone number", "Peer support program triggered after events", "Time off for all involved staff", "Written guide in the policy manual"],
        correct: 2,
        explanation:
          "Support works best when it is built in and starts automatically. A peer support program that is activated after an event reaches staff early, when distress is highest, and trained peers understand the clinical context. The recovery pattern of second victims is predictable enough that programs can screen staff right after an event and deploy support. An annual lecture and a written guide are not timed to the event. An assistance phone number waits for the person to call. Blanket time off does not fit everyone and can isolate staff.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "scott-second-victim",
      },
    ],
    sources: [S.scott, S.cmpaDisclosure],
  },
  {
    ...META,
    id: "cqi-28",
    title: "Black stools after a urinary infection",
    stem:
      "A 79-year-old man returns to the emergency department with melena and dizziness. Six days earlier he was discharged from the same department with a urinary tract infection and a prescription for trimethoprim-sulfamethoxazole. He takes warfarin for a mechanical aortic valve. The note from that visit lists his medications as none known. His daughter says no one asked about his pill organizer. The prescription was filled at a pharmacy that does not dispense his warfarin, so no interaction was flagged. Today his INR is 8.9 and hemoglobin is 82 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "108/minute", resp: "18/minute", bp: "102/60 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following steps at the first visit would most likely have prevented this event?",
        options: ["Culture-directed antibiotic choice", "Follow-up phone call in 48 hours", "INR check before discharge", "Printed discharge instructions", "Taking a best possible medication history"],
        correct: 4,
        explanation:
          "A best possible medication history, from an interview with the patient or family and at least one other source such as the pharmacy or the pill organizer, would have shown warfarin before trimethoprim-sulfamethoxazole was prescribed. The interaction raises the INR. No one knew he was on warfarin, so no one would have thought to check his INR. A follow-up call or printed instructions come after the prescribing error. A culture result would not have changed an antibiotic chosen without knowing about warfarin.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following corrective actions ranks highest on the hierarchy of effectiveness for this event?",
        options: ["Checklist item on the discharge form", "Education on warfarin interactions", "Interaction check against provincial drug data", "Policy requiring a medication list", "Poster of common warfarin interactions"],
        correct: 2,
        explanation:
          "An automatic interaction check against the provincial record of dispensed drugs would flag warfarin whatever pharmacy he uses and whether or not anyone asked. That is automation, second only to forcing functions on the hierarchy. A checklist item is a reminder and still depends on the history being taken well. A policy, a poster and education sit in the lowest tiers. They are useful supports, but on their own they do not change the conditions that produced a medication list of none known.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "single",
        update: "After disclosure, a colleague suggests changing the note from the first visit so it states that he denied taking any medications.",
        prompt: "Which of the following is the most appropriate way to handle the record of the first visit?",
        options: ["Add the medication to the original note", "Correct the record with a dated addendum", "Delete the first note and rewrite it", "Note the facts only in the incident report", "Record that the patient denied medications"],
        correct: 1,
        explanation:
          "Missing or wrong information is corrected with an additional entry, clearly marked as an addendum, dated and signed, and physicians amend only their own entries. The disclosure meeting itself also belongs in the chart. Editing or deleting the original note hides what was known at the time and can look like tampering. Recording a denial that did not happen is false. The incident report supports the safety review, but it does not replace documentation in the medical record.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q4",
        kind: "single",
        update: "The quality lead wants to know how often similar harm has gone unreported in the department.",
        prompt: "Which of the following chart findings would best help a trigger tool review find similar anticoagulant harm?",
        options: ["Antibiotic prescribed at discharge", "Culture sent before antibiotics", "Discharge diagnosis of infection", "INR above 6 or vitamin K given", "Warfarin listed on medication record"],
        correct: 3,
        explanation:
          "An INR above 6 and vitamin K administration are both medication triggers in the IHI Global Trigger Tool. Either one prompts a closer look for anticoagulant harm, as in this man with an INR of 8.9. Warfarin on the medication record shows exposure, not harm, and applies to every patient taking it safely. An antibiotic prescription, a culture and a diagnosis of infection are routine care and would flag thousands of charts without pointing to harm.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ihi-gtt",
      },
    ],
    sources: [S.rop, S.ciaf, S.cmpaDisclosure, S.gtt],
  },
  {
    ...META,
    id: "cqi-29",
    title: "A transfer for thrombolysis",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner. A 67-year-old man presents with left arm and leg weakness that began 90 minutes ago. He takes apixaban for atrial fibrillation, last dose this morning, and is allergic to penicillin. He is sent by ambulance to a stroke centre 140 km away. The paramedics arrive while you are resuscitating another patient, and a nurse hands over verbally in the hallway. The transfer package has no medication list. At the stroke centre, thrombolysis is started and stopped 20 minutes later when his daughter mentions apixaban. He does not bleed.",
    vitals: { temperature: "36.9°C oral", pulse: "84/minute irregular", resp: "18/minute", bp: "176/92 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following belongs in the minimum information shared at every care transition?",
        options: ["Admission history of prior visits", "Insurance and billing details", "Social history and occupation", "Transfer reason and safety concerns", "Vaccination history"],
        correct: 3,
        explanation:
          "Accreditation Canada expects information shared at a care transition to include, at a minimum, full name and identifiers, contact information for the responsible providers, the reason for transition, safety concerns and the patient's goals. Anticoagulant use before possible thrombolysis was the safety concern that did not travel with him. Prior admissions, social history and vaccination history may matter in some transfers but are not part of the minimum set. Insurance and billing details have no bearing on safe care.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following handover practices is most appropriate for this transfer?",
        options: ["Faxed note sent after departure", "Handover tool with a written summary", "Photo of the chart sent to the crew", "Verbal hallway handover only", "Verbal report during a resuscitation"],
        correct: 1,
        explanation:
          "A standard handover tool with a written summary that travels with the patient, including medications and allergies, makes the key facts hard to omit and available to every team downstream. Tools such as SBAR, checklists and read-back are the strategies Accreditation Canada lists for this purpose. A verbal hallway handover, as happened here, depends on memory and was given while attention was elsewhere. A fax sent after departure may not be read before the treatment decision. A photo of the chart is unstructured and may omit the key facts.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the disclosure obligation for this event?",
        options: ["Disclosure only if bleeding develops", "Disclosure optional as a near miss", "Disclosure required as a no harm incident", "Disclosure to his daughter only", "No disclosure because thrombolysis stopped"],
        correct: 2,
        explanation:
          "The thrombolytic reached him, so this is not a near miss. No harm is evident yet, which makes it a no harm incident, and harm could still appear over the next hours. The CMPA states that no harm incidents require disclosure, and the risk of delayed bleeding is exactly why he needs to know. Waiting for a bleed delays information he needs to report symptoms. His daughter can be present, but he is the patient and is owed the disclosure. Stopping the infusion does not undo the dose already given.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best builds safe transfer handover into routine practice at the rural hospital?",
        options: ["Annual review of the transfer policy", "Audit of transfer packages with feedback", "Remind nurses at each staff meeting", "Transfer only during daytime hours", "Written policy on transfer handover"],
        correct: 1,
        explanation:
          "Accreditation Canada expects the effectiveness of information transfer to be evaluated and improved, for example by auditing records, asking receiving providers whether they got what they needed, and reviewing related incidents. Regular audit of transfer packages with feedback, including feedback from the stroke centre, does this. An annual policy review and a written policy describe the standard without checking it. Reminders at meetings fade. Limiting transfers to daytime hours is not possible for time-sensitive conditions such as stroke.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "rop-2021",
      },
    ],
    sources: [S.rop, S.cmpaDisclosure],
  },
  {
    ...META,
    id: "cqi-30",
    title: "A night-time climb over the rails",
    stem:
      "An 87-year-old man with dementia is admitted to medicine through the emergency department with urinary sepsis and confusion. His daughter is his substitute decision-maker. She tells the triage nurse that he gets up at night to use the toilet. He boards on a hallway stretcher with the side rails up and the stretcher at its highest setting. At 03:00 he climbs over the rail and falls, striking his head. CT head shows a small subdural hematoma, and neurosurgery recommends observation. No falls precautions were documented.",
    vitals: { temperature: "38.2°C oral", pulse: "102/minute", resp: "20/minute", bp: "142/78 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following universal falls precautions should apply to him and every other boarded patient?",
        options: ["Bed rails raised on all sides at night", "Hourly checks by the security guard", "Physical restraints overnight", "Sedation with haloperidol at bedtime", "Stretcher in lowest position, brakes locked"],
        correct: 4,
        explanation:
          "Universal falls precautions apply to all patients regardless of assessed risk. They include keeping the bed or stretcher in its low position with the brakes locked, keeping the call bell and belongings within reach, and engaging the family. His stretcher was at its highest setting, which made the fall worse. Raised rails give a confused patient something to climb over, as happened here. Restraints and sedation are not universal precautions and carry their own risks, including worse delirium. Security checks are not a falls prevention strategy.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "He remains confused and cannot understand what happened. His daughter arrives in the morning.",
        prompt: "Which of the following is the most appropriate approach to disclosure of the fall?",
        options: ["Defer disclosure until he recovers", "Disclose only if the hematoma grows", "Disclose to his daughter as decision-maker", "Let the neurosurgeon disclose it", "Tell her the fall was due to confusion"],
        correct: 2,
        explanation:
          "He was harmed, so disclosure is required, and because he cannot understand it now, it goes to his daughter as substitute decision-maker, with a further conversation with him if his confusion clears. Waiting for him to recover or for the hematoma to grow delays information she needs to make decisions. The team caring for him when he fell leads, and the neurosurgeon can explain the injury. Blaming his confusion is speculation that ignores what the review will look at, including her warning at triage and the high stretcher.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cdg",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate team response in the hours after the fall?",
        options: ["After-fall huddle to find safety gaps", "Apply restraints for the rest of the stay", "Increase sedation for the rest of the stay", "Wait for the monthly falls committee", "Written warning to the assigned nurse"],
        correct: 0,
        explanation:
          "A short post-fall debriefing with the staff on shift captures details while they are fresh, such as the high stretcher, the raised rails and the daughter's warning that was not acted on, and can fix hazards for other boarded patients that night. Accreditation Canada notes that post-fall debriefings help find safety gaps. Waiting a month loses those details. Restraints and more sedation raise the risk of delirium and further injury. A written warning blames one nurse for gaps that are systemic.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "rop-2021",
      },
    ],
    sources: [S.rop, S.cdg],
  },
  {
    ...META,
    id: "cqi-31",
    title: "Drowsy after a second dose",
    stem:
      "A 68-year-old woman with renal colic receives morphine 5 mg IV in the emergency department and a second 5 mg dose 20 minutes later. Thirty minutes after the second dose she is found drowsy and breathing slowly, and she needs naloxone. She recovers. No incident report is filed because staff view it as a known side effect. You are reviewing opioid safety for the department. Last year staff filed 3 incident reports about opioids. Pharmacy data show that naloxone was given 61 times in the department that year, 44 of them to patients who arrived after an overdose.",
    vitals: { temperature: "36.7°C oral", pulse: "58/minute", resp: "6/minute", bp: "96/58 mmHg", o2sat: "82% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the gap between opioid incident reports and naloxone use?",
        options: ["Few opioid events reach patients", "Naloxone is often given without need", "Pharmacy records double count doses", "Reporting misses most harmful events", "Staff reported every event as required"],
        correct: 3,
        explanation:
          "Naloxone was given 17 times to patients who had not arrived after an overdose, yet only 3 opioid incidents were reported. Voluntary reporting captures only a small share of events, estimated at 10 to 20% of errors, and staff often do not report harm they see as an expected side effect, as happened here. Opioid events clearly reached patients. Nothing suggests naloxone was given without need or that pharmacy data are wrong. Staff did not report every event, since this one went unreported.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ihi-gtt",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate method to measure opioid-related harm in the department over time?",
        options: ["Count of incident reports each month", "Patient satisfaction with pain control", "Review of every chart for the year", "Staff survey on opioid safety", "Trigger tool review of random charts"],
        correct: 4,
        explanation:
          "A trigger tool review screens a random sample of charts for clues such as naloxone use, then confirms whether harm occurred. The fixed sample size and time limit make it feasible and allow the harm rate to be tracked over time. Incident report counts reflect reporting behaviour more than harm, as the 3 reports show. Reviewing every chart is not sustainable. Satisfaction with pain control and staff opinion surveys do not measure harm.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ihi-gtt",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following chart findings would act as triggers for closer review of a possible opioid adverse event?",
        options: [
          "Acetaminophen given for fever",
          "Discharge on the same day",
          "Hourly pain score recorded",
          "Ibuprofen prescribed at discharge",
          "Kidney ultrasound ordered",
          "Naloxone administration",
          "Over-sedation or hypotension",
          "Urinalysis sent to the laboratory",
        ],
        correct: [5, 6],
        explanation:
          "Naloxone administration and over-sedation or hypotension are medication triggers in the IHI Global Trigger Tool. Naloxone use likely signals an adverse event unless it was given for a drug overdose or self-harm. A trigger is a clue that prompts a closer look, not proof of harm. Acetaminophen for fever, hourly pain scores, same-day discharge, an ibuprofen prescription, a kidney ultrasound and a urinalysis are routine parts of care for renal colic and do not point to opioid harm.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "ihi-gtt",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is most likely to encourage staff to keep reporting events like this one?",
        options: ["Annual reminder of the reporting policy", "Disciplining staff who fail to report", "Feedback to staff on changes made", "Reporting only events with serious harm", "Reports reviewed privately by risk managers"],
        correct: 2,
        explanation:
          "Staff keep reporting when they see that reports lead to change. Closing the loop means telling those in the area where incidents happen what was changed and with what result. Disciplining staff who fail to report is the kind of departure from a system focus that drives reporting underground. Limiting reports to serious harm loses the lessons in near misses and lesser harm, such as this event. Reports reviewed privately with no feedback and a yearly reminder give staff no reason to believe reporting is worth the time.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ciaf",
      },
    ],
    sources: [S.gtt, S.ciaf],
  },
  {
    ...META,
    id: "cqi-32",
    title: "A contaminated blood culture",
    stem:
      "A 52-year-old man with cellulitis of the arm has 2 sets of blood cultures drawn in the emergency department. One bottle grows coagulase-negative staphylococci. He is admitted and receives IV vancomycin for 3 days before the result is judged a contaminant. The department tracks its monthly blood culture contamination rate on a control chart. Over 24 months the mean is 2.6%, with an upper control limit of 4.4% and a lower control limit of 0.8%. Last month the rate was 6.1%. That month most cultures were drawn through newly placed IV catheters by staff new to the department.",
    vitals: { temperature: "38.3°C oral", pulse: "96/minute", resp: "18/minute", bp: "134/80 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes last month's contamination rate on the control chart?",
        options: ["Common cause variation", "Shift above the mean", "Special cause variation", "Stable process in control", "Trend toward worsening"],
        correct: 2,
        explanation:
          "A single point outside the control limits, here 6.1% against an upper limit of 4.4%, signals special cause variation, meaning something unusual acted on the process that month. Common cause variation is the expected month-to-month scatter within the limits, and a point beyond the limits is not part of it. The process is therefore not stable or in control that month. A shift or a trend needs a sequence of points, not one month.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "benneyan-spc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to this signal?",
        options: ["Discipline the staff who drew cultures", "Ignore it as random monthly noise", "Recalculate limits including this month", "Redesign the entire collection process", "Search for the specific cause that month"],
        correct: 4,
        explanation:
          "Special cause variation calls for finding and addressing the specific cause. Here the stem already points to cultures drawn through new IV catheters by staff new to the department, which the team can confirm and correct. Redesigning the whole process is the response to a stable process whose average is too high, and it is not needed for a one-month signal. Ignoring the point wastes the signal. Adding it to the baseline limits widens them and hides future signals. Disciplining new staff blames individuals for an orientation gap.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "benneyan-spc",
      },
      {
        id: "q3",
        kind: "single",
        update: "Six months later every monthly rate falls within the control limits, but the department wants a lower average contamination rate.",
        prompt: "Which of the following is the most appropriate approach to lowering the average rate?",
        options: ["Investigate each month above the mean", "Remove the highest month from the data", "Set a lower target and remind staff", "Test a change to the whole process", "Wait for special cause signals"],
        correct: 3,
        explanation:
          "When all points fall within the limits the process is stable, and its average reflects the system itself. Lowering the average needs a change to the process for every draw, tested with Plan-Do-Study-Act cycles and tracked on the chart. Investigating each month that happens to sit above the mean treats common cause variation as special cause. This is tampering and can make performance worse. Removing data distorts the picture. Setting a target without changing the process changes nothing. Waiting for a signal will not lower a stable average.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "perla-run-chart",
      },
    ],
    sources: [S.benneyan, S.perla],
  },
  {
    ...META,
    id: "cqi-33",
    title: "Bleeding gums after a clot diagnosis",
    stem:
      "A 63-year-old man who speaks Punjabi and limited English presents to the emergency department with gum bleeding. Five days ago he was diagnosed in this department with a proximal deep vein thrombosis and discharged on rivaroxaban 15 mg twice daily for 21 days, then 20 mg once daily. His 14-year-old grandson interpreted at discharge, and the printed instructions were in English. Since then he has been taking 20 mg twice daily. He has no other bleeding. Hemoglobin is 138 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "136/82 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following discharge practices would most likely have prevented this dosing error?",
        options: ["Extra printed instructions in English", "Grandson signing the discharge form", "Pharmacy phone number on the sheet", "Repeating verbal instructions twice", "Using an interpreter with teach-back"],
        correct: 4,
        explanation:
          "Teach-back, in which the patient explains the plan in his own words, shows whether the two-step dosing was understood. A professional interpreter makes the explanation accurate in Punjabi. Accreditation Canada lists teach-back among the strategies for safe information transfer at discharge. More English instructions do not help a man with limited English. A child interpreting may not convey dose changes accurately, and his signature confirms nothing. Repeating the instructions without checking understanding does not find the error. A phone number helps only if he knows he is confused.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "His hemoglobin is stable and the dose is corrected. You plan to disclose the error to him.",
        prompt: "Which of the following is the most appropriate way to communicate during the disclosure conversation?",
        options: ["Certified medical interpreter by phone", "Daughter-in-law interprets instead", "Grandson interprets as before", "Speak slowly in English without help", "Written apology in English"],
        correct: 0,
        explanation:
          "For disclosure, the CMPA advises a healthcare interpreter rather than a family member so the facts, the apology and his questions pass accurately in both directions. A phone or video interpreter is available at any hour. Family members, including his grandson who interpreted the original instructions, may filter or soften what is said and are placed in a difficult role. Slow English does not overcome a language barrier. A written apology in English cannot replace a conversation he can understand.",
        keyFeature: { topic: "cqi", n: 2 },
        source: "cmpa-disclosure",
      },
      {
        id: "q3",
        kind: "single",
        update: "The department starts a project to improve discharge teaching for patients with limited English.",
        prompt: "Which of the following is the most useful process measure for this project?",
        options: ["Annual count of DOAC bleeding returns", "Interpreter-supported teach-back rate", "Number of languages spoken by staff", "Patient satisfaction with discharge", "Total interpreter budget spent"],
        correct: 1,
        explanation:
          "A process measure tracks whether the change is actually happening. The share of discharges of patients with limited English that include interpreter-supported teach-back shows directly whether the new practice is being used, and it can be tracked weekly. Returns for bleeding on a DOAC are an outcome measure and too rare to guide weekly tests. Staff languages and interpreter spending are structure and cost figures. Satisfaction is a patient experience measure that does not show whether teach-back occurred.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "qi-primer-2",
      },
    ],
    sources: [S.rop, S.cmpaDisclosure, S.qi2],
  },
  {
    ...META,
    id: "cqi-34",
    title: "Rounds after an infant's return",
    stem:
      "An 11-month-old boy is brought to the emergency department with vomiting and episodes of inconsolable crying. He is diagnosed with gastroenteritis and discharged. He returns 18 hours later, lethargic with bloody stool, and ultrasound shows intussusception. He needs surgery with a bowel resection. The department's triage tool has no prompt for episodic crying in infants. The case is chosen for monthly morbidity and mortality rounds. Past rounds have focused on the presenting physician's errors, attendance has fallen, and no changes have followed from any case.",
    vitals: { temperature: "37.9°C rectal", pulse: "168/minute", resp: "36/minute", bp: "84/50 mmHg", o2sat: "98% on room air", weight: "9.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following elements would most improve these rounds, based on a structured Canadian model?",
        options: [
          "Cases limited to deaths",
          "Disseminating lessons learned",
          "Focus on individual error",
          "Grading of presenters",
          "Interprofessional participation",
          "Pathway to act on identified issues",
          "Physician-only attendance",
        ],
        correct: [1, 4, 5],
        explanation:
          "The Ottawa M&M model added four elements: training presenters in case selection and system-focused analysis, engaging interprofessional members, disseminating lessons learned, and an administrative pathway to act on the issues found. A pathway to action answers the problem that no changes have followed. Interprofessional attendance brings in triage nurses, who own part of this story. Focusing on individual error is what emptied these rounds. Limiting cases to deaths would drop this case and most learning events, grading presenters adds judgment rather than learning, and physician-only attendance shuts out the triage nurses. None is part of the model.",
        keyFeature: { topic: "cqi", n: 6 },
        source: "ottawa-mm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following questions best frames the analysis of this case at rounds?",
        options: ["How and why did the defences fail", "Was the outcome a known complication", "What should the physician have done", "Who was responsible for the miss", "Would a specialist have diagnosed it"],
        correct: 0,
        explanation:
          "Incident analysis asks how and why the defences in the system failed, looking at the whole system rather than one person's actions. That question leads to the triage tool, which had no prompt for episodic crying in infants. Asking who was responsible or what the physician should have done repeats the blame that emptied past rounds. Calling the outcome a known complication ends the inquiry early. Whether a specialist would have made the diagnosis says nothing about the defences that failed.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best expresses a statement of findings for the rounds summary?",
        options: ["Better training is needed for all staff", "Parents gave an unclear history of crying", "The physician missed the intussusception", "Triage tool gap made a miss more likely", "Vomiting made gastroenteritis seem likely"],
        correct: 3,
        explanation:
          "A statement of findings links a contributing factor to the outcome: the factor, within the context of the incident, increased the likelihood of the outcome. A triage tool with no prompt for episodic crying in an infant made a missed intussusception more likely, and it points to a fix. The need for training is a recommendation, not a finding. Saying the physician missed it describes the outcome and assigns blame. Blaming the parents' history and restating why gastroenteritis seemed likely do not identify a system factor that can be changed.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
    ],
    sources: [S.calderMM, S.ciaf],
  },
  {
    ...META,
    id: "cqi-35",
    title: "A potassium push",
    stem:
      "A 55-year-old man with 3 days of vomiting has a potassium of 2.6 mmol/L in the emergency department. The order reads potassium chloride 20 mmol IV over 2 hours. A nurse draws up 20 mmol from a concentrated potassium chloride vial kept in the department's medication room and gives it as an IV push. He develops ventricular fibrillation, is defibrillated, and has return of circulation within 2 minutes. He recovers fully. The department stocks concentrated vials for urgent use because premixed bags from pharmacy take an hour to arrive.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "18/minute", bp: "118/70 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following corrective actions is most likely to prevent this event from happening again?",
        options: ["Double check before any potassium dose", "Education on potassium infusion rates", "Policy on potassium administration", "Stickers warning to dilute before use", "Vials removed, premixed bags stocked"],
        correct: 4,
        explanation:
          "Removing concentrated potassium vials from the department and stocking premixed bags is a forcing function: an undiluted push can no longer be prepared. Accreditation Canada requires that concentrated potassium not be stocked in care areas. Stocking premixed bags also removes the hour-long wait that justified keeping the vials. A double check and warning stickers are reminders and depend on vigilance. A policy and education are the weakest tier of the hierarchy of effectiveness.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "rop-2021",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following products are concentrated electrolytes that Accreditation Canada advises keeping out of emergency department care areas?",
        options: [
          "dextrose 5% in water 1 L bag",
          "lactated Ringer's 1 L bag",
          "magnesium sulfate 2 g in 50 mL bag",
          "magnesium sulfate 50% vial",
          "potassium chloride 20 mmol in 100 mL bag",
          "potassium chloride 2 mmol/mL vial",
          "sodium chloride 0.9% 1 L bag",
        ],
        correct: [3, 5],
        explanation:
          "Accreditation Canada lists potassium at 2 mmol/mL or more and magnesium sulfate above 20% among the concentrated electrolytes that should not be stocked in care areas. A 50% magnesium vial and a 2 mmol/mL potassium vial both qualify. Premixed potassium 20 mmol in 100 mL is 0.2 mmol/mL, and magnesium 2 g in 50 mL is 4%, so both are diluted products meant for infusion. Dextrose 5%, lactated Ringer's and sodium chloride 0.9% are not concentrated electrolytes.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "rop-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "Pharmacy will now deliver premixed potassium bags to an automated cabinet in the department. The team wants to find weak points before it starts.",
        prompt: "Which of the following methods best anticipates new failure points before the process begins?",
        options: ["Comprehensive incident analysis", "Failure mode and effects analysis", "Global trigger tool review", "Multi-incident analysis", "Run chart of potassium orders"],
        correct: 1,
        explanation:
          "Failure mode and effects analysis is a prospective method. The team maps each step of the new process, asks how each could fail and what the effect would be, and adds safeguards before patients are exposed. Incident analysis, whether comprehensive or multi-incident, looks back at events that have already happened. A trigger tool review measures harm after the fact. A run chart tracks a measure over time once the process is running.",
        keyFeature: { topic: "cqi", n: 4 },
        source: "ciaf",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best confirms over time that concentrated potassium stays out of care areas?",
        options: ["Annual audit of stock in care areas", "Count of potassium incident reports", "Pharmacy purchase records", "Staff quiz on potassium safety", "Survey of nurse managers"],
        correct: 0,
        explanation:
          "Accreditation Canada expects an audit of concentrated electrolytes in care areas at least once a year. Physically checking the stock in each area confirms whether vials have crept back in. Incident reports detect a problem only after a patient is exposed, and reporting is incomplete. Purchase records show what pharmacy bought, not where it ended up. A staff quiz tests knowledge, and a manager survey records belief, but neither shows what is on the shelves.",
        keyFeature: { topic: "cqi", n: 3 },
        source: "rop-2021",
      },
    ],
    sources: [S.rop, S.ciaf],
  },
];
