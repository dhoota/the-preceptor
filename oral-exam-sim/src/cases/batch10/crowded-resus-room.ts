// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const crowdedResusRoom: OralCase = {
  id: "crowded-resus-room",
  title: "Too many voices in bay one",
  blueprint: "systems",
  alsoCovers: ["resus", "cardio"],
  priorityTopic: "arrhythmia",
  keyFeatures: [{ topic: "arrhythmia", n: 4 }, { topic: "arrhythmia", n: 8 }, { topic: "ischemic-heart-disease", n: 6 }, { topic: "multiple-patients", n: 3 }, { topic: "cqi", n: 5 }],
  summary: "You lead a resuscitation that goes off course as more people arrive and start giving orders.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician at a community teaching hospital in Ontario. It is 10:26 on a weekday. " +
    "The hospital has a 24 hour cath lab, an ICU, and a cardiology service in house. " +
    "Your resus team is two nurses, a respiratory therapist, a first year family medicine resident and a medical student. A mechanical CPR device is available. " +
    "Paramedics patch: 'Fifty two year old man collapsed at the gym. Witnessed. Bystander CPR in under a minute. Shockable rhythm on our pads. Three shocks, two doses of epinephrine and amiodarone 300 mg. Still in VF. Four minutes out.'",
  findings: [
    {
      id: "handover",
      label: "Paramedic handover",
      result:
        "Collapse at 10:12. Bystander CPR at 10:13. First shock at 10:19. Shocks at 10:19, 10:21 and 10:23, all anterior lateral pads. Epinephrine 1 mg at 10:22 and 10:26. Amiodarone 300 mg at 10:25. " +
        "Supraglottic airway in place with good chest rise. End tidal CO2 22 mmHg.",
    },
    {
      id: "history",
      label: "History from his wife by phone",
      result: "Chest pressure on and off for two days. Smoker. Hypertension on ramipril. No known heart disease. No allergies.",
    },
    {
      id: "rhythm",
      label: "Rhythm on arrival",
      result: "Coarse ventricular fibrillation.",
    },
    {
      id: "etco2",
      label: "End tidal CO2 trend",
      result: "22 mmHg on arrival. Falls to 11 mmHg during the long pause for intubation. 26 mmHg with good compressions.",
    },
    {
      id: "pocus",
      label: "Bedside echo at a pulse check",
      result: "Coarse fibrillatory wall motion. No pericardial effusion. Right ventricle not dilated.",
    },
    {
      id: "gas",
      label: "Venous blood gas during CPR",
      result: "pH 7.08. pCO2 58 mmHg. Potassium 4.2 mmol/L. Lactate 9.1 mmol/L. Ionized calcium 1.12 mmol/L. Glucose 11.4 mmol/L.",
    },
    {
      id: "post-rosc-ecg",
      label: "ECG after return of circulation",
      result: "Sinus tachycardia at 112. 4 mm ST elevation V2 to V5 and I and aVL. Reciprocal inferior ST depression.",
    },
    {
      id: "post-rosc-vitals",
      label: "Vital signs after return of circulation",
      result: "Blood pressure 88/52. Heart rate 112. SpO2 100 percent on 100 percent oxygen. Temperature 35.9. GCS 3 with no sedation.",
    },
    {
      id: "team",
      label: "Team members",
      result:
        "Nurse Jas on drugs and documentation. Nurse Karen on compressions rotation and defibrillator. Respiratory therapist Omar on airway. " +
        "Dr. Lee, a first year resident. A third year medical student. Dr. Grant, the staff cardiologist, arrives at 10:36.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Four minutes out",
      text: "The team is gathering in resus. The resident says he wants to intubate. The student asks what she should do.",
      next: "q-prebrief",
    },
    {
      kind: "question",
      id: "q-prebrief",
      phase: "Before arrival",
      prompt: "You have four minutes. How do you prepare the team?",
      seconds: 75,
      modelAnswer: [
        "Introduce myself as team leader. Stand at the foot of the bed, hands off.",
        "Assign roles by name. Airway, compressions, defibrillator, drugs and recorder, and a runner.",
        "Share the plan. Refractory VF. Consider the next shock with a new pad position or double sequential. Amiodarone 150 mg next.",
        "Place pads anterior posterior on arrival and have a second defibrillator ready.",
        "Rules. Pauses under 10 seconds. Closed loop. Anyone can call a concern.",
        "Mechanical CPR device ready. Early call to the cath lab.",
      ],
      rubric: ["cr-l1", "cr-m1"],
      choices: [
        {
          id: "c-brief",
          label: "I named myself team leader, gave each person a role, set the plan for refractory VF with a second defibrillator ready, and said anyone can speak up.",
          next: "s-arrival",
          quality: "strong",
          feedback:
            "A pre brief builds a shared mental model before the stress starts. Named roles stop people from doubling up or freezing. Planning for a pad change or a second defibrillator now saves time later.",
        },
        {
          id: "c-self-airway",
          label: "I said I would lead and also manage the airway myself since I am the most skilled.",
          next: "s-self-airway",
          quality: "partial",
          feedback:
            "Hands on tasks pull the leader's attention into a narrow field. The respiratory therapist can manage the supraglottic airway that is already working. Stay hands off and keep the big picture.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-self-airway",
      phase: "Two minutes after arrival",
      text:
        "Your head is down at the airway. Nobody has called the rhythm check and the compressor has been going for three minutes without a swap. The nurse asks who is leading. You step back and hand the airway to the respiratory therapist.",
      next: "s-arrival",
    },
    {
      kind: "say",
      id: "s-arrival",
      phase: "Arrival",
      text:
        "He arrives at 10:30 with CPR in progress. The rhythm is coarse VF. The supraglottic airway is ventilating well. End tidal CO2 is 22.",
      next: "q-vf",
    },
    {
      kind: "question",
      id: "q-vf",
      phase: "Refractory VF",
      prompt: "He has had three shocks, two doses of epinephrine and amiodarone 300 mg. What is your plan for the next shock and drugs?",
      seconds: 60,
      modelAnswer: [
        "This is refractory VF.",
        "Change the defibrillation strategy. Vector change to anterior posterior pads, or double sequential defibrillation with two defibrillators.",
        "Amiodarone 150 mg as the second dose. Lidocaine is an alternative.",
        "Epinephrine 1 mg every 3 to 5 minutes.",
        "Look for reversible causes. Acute coronary occlusion is most likely.",
        "Early call to cardiology and the cath lab.",
      ],
      rubric: ["cr-m2", "cr-m3"],
      choices: [
        {
          id: "c-vector",
          label: "I switched to anterior posterior pads for a vector change, with a second defibrillator ready for double sequential shocks, and gave amiodarone 150 mg.",
          next: "s-pause",
          quality: "strong",
          feedback:
            "This reflects the DOSE VF trial, a Canadian study in which vector change and double sequential defibrillation both improved survival over standard shocks. The 2025 AHA and Heart and Stroke guidelines say either may be considered after 3 or more failed shocks, a weak recommendation. Amiodarone 150 mg is the correct second dose.",
        },
        {
          id: "c-same",
          label: "I kept shocking through the same pads at maximum energy.",
          next: "s-same",
          quality: "partial",
          feedback:
            "Standard shocks remain acceptable, but DOSE VF suggests a new vector may work better after three failures. Current guidelines say a pad position change or double sequential defibrillation may be considered. The drugs are right. The examiner wanted a plan to change the shocks.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-same",
      phase: "Four minutes later",
      text: "Two more shocks through the same pads. Still VF. Nurse Karen asks, 'Do you want me to put on the back pad?' You agree and switch to anterior posterior.",
      next: "s-pause",
    },
    {
      kind: "say",
      id: "s-pause",
      phase: "10:34",
      text:
        "Dr. Lee, the resident, has pulled the supraglottic airway and is trying to intubate. Compressions have stopped. The pause is now 20 seconds and counting. End tidal CO2 has dropped to 11. Nobody has said anything.",
      next: "q-pause",
    },
    {
      kind: "question",
      id: "q-pause",
      phase: "A long pause",
      prompt: "What do you say and do right now?",
      seconds: 45,
      modelAnswer: [
        "Speak up immediately by name. 'Dr. Lee, stop. Resume compressions now.'",
        "Compressions restart before anything else.",
        "Put the supraglottic airway back or bag mask. It was working.",
        "If intubation is needed, do it during compressions or at a planned rhythm check under 10 seconds.",
        "Deal with the teaching point later, not now.",
      ],
      rubric: ["cr-c1", "cr-m4"],
      choices: [
        {
          id: "c-direct",
          label: "I said, 'Dr. Lee, stop, compressions on now,' had Omar replace the supraglottic airway, and said we would only intubate during compressions.",
          next: "s-cardiologist",
          quality: "strong",
          feedback:
            "Direct, named and immediate. Coronary perfusion falls fast with each second off the chest and takes many compressions to rebuild. The working supraglottic airway was never the problem.",
        },
        {
          id: "c-silent",
          label: "I let him keep trying because he needs the practice.",
          next: "s-silent",
          quality: "unsafe",
          feedback:
            "The patient pays for this practice. Every pause over 10 seconds lowers the chance of return of circulation. The leader must protect compressions, even if it means stopping a colleague.",
        },
        {
          id: "c-take-tube",
          label: "I pushed him aside and intubated the patient myself.",
          next: "s-take-tube",
          quality: "partial",
          feedback:
            "The tube may go in but the room has lost its leader and the compressions are still off. Restart compressions first and direct the airway from the foot of the bed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-silent",
      phase: "10:35",
      text:
        "After 45 seconds with no compressions and no tube, nurse Karen says loudly, 'I am concerned. We have had no compressions for almost a minute.' You call for compressions to restart and the supraglottic airway goes back in.",
      next: "s-cardiologist",
    },
    {
      kind: "say",
      id: "s-take-tube",
      phase: "10:35",
      text:
        "You intubate in 15 seconds, but when you look up nobody is compressing and the drug timer has passed. Nurse Jas asks whether epinephrine is due. You call for compressions and step back to the foot of the bed.",
      next: "s-cardiologist",
    },
    {
      kind: "say",
      id: "s-cardiologist",
      phase: "10:36",
      text:
        "Dr. Grant, the staff cardiologist, walks in and stands at the side of the bed. Without introducing himself he says: 'Stop compressions, I want a proper look with the echo. And give him another 300 of amiodarone now.' " +
        "Nurse Jas holds the syringe and looks at you. The respiratory therapist has gone quiet.",
      next: "q-cardiologist",
    },
    {
      kind: "question",
      id: "q-cardiologist",
      phase: "Two leaders",
      prompt: "What do you do?",
      seconds: 75,
      modelAnswer: [
        "Keep one leader. Acknowledge him by name and state that I am leading.",
        "Give him a clear role. Echo only at the next rhythm check, under 10 seconds.",
        "Address the drug order out loud. He has had 450 mg of amiodarone. No more for now.",
        "Ask for his input on the cath lab. That is where his expertise changes the outcome.",
        "If a handover of leadership is wanted, do it explicitly and tell the whole team.",
      ],
      rubric: ["cr-l2", "cr-c2", "cr-p1"],
      choices: [
        {
          id: "c-role",
          label: "I said, 'Dr. Grant, I am leading. Could you do the echo at the next rhythm check in 40 seconds, under 10 seconds, and get the cath lab ready?' I told Jas to hold the amiodarone since he has had 450 mg.",
          next: "q-summary",
          quality: "strong",
          feedback:
            "This keeps one voice in the room and gives the expert a job that uses his skills. Stating the cumulative dose out loud is closed loop safety, not a challenge to his authority. The cath lab is where he will change this patient's outcome.",
        },
        {
          id: "c-two-leaders",
          label: "I let him give his orders and carried on giving mine.",
          next: "s-two-leaders",
          quality: "partial",
          feedback:
            "Two leaders means two plans. The team cannot follow both, and errors follow. Either keep leadership with a role for him, or hand it over clearly.",
        },
        {
          id: "c-argue",
          label: "I told him loudly that this was my resuscitation and he should leave.",
          next: "s-argue",
          quality: "unsafe",
          feedback:
            "Conflict in front of the team raises everyone's stress and lowers performance. It also loses an expert who will be needed for the cath lab. Be firm and calm, then deal with the behaviour afterward.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-two-leaders",
      phase: "10:37",
      text:
        "Compressions stop for the echo. Jas starts to push another 300 mg of amiodarone. Karen says, 'Wait. He has already had 450.' The pause runs to 25 seconds. You call for compressions and give Dr. Grant a role.",
      next: "q-summary",
    },
    {
      kind: "say",
      id: "s-argue",
      phase: "10:37",
      text:
        "The room goes silent. The student backs into the corner. Dr. Grant stays and says nothing more. The next rhythm check is missed. You take a breath, lower your voice and ask him to help with the echo and the cath lab.",
      next: "q-summary",
    },
    {
      kind: "question",
      id: "q-summary",
      phase: "Re setting the room",
      prompt: "The team looks rattled. It is 10:38. What do you say to the room?",
      seconds: 60,
      modelAnswer: [
        "Call a brief summary during compressions. Ten seconds for ten minutes.",
        "Where we are. Refractory VF since 10:12. Shock count and epinephrine doses read back by the recorder. 450 mg of amiodarone.",
        "What is next. Double sequential shock at the next check. When the next epinephrine is due.",
        "Likely cause. Anterior coronary occlusion. Cath lab being prepared.",
        "Ask. Has anyone got a concern or something I have missed?",
      ],
      rubric: ["cr-c3", "cr-l3"],
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-rosc",
      phase: "10:41",
      text:
        "After a double sequential shock he has an organized rhythm with a pulse. Blood pressure 88/52. His ECG shows an anterior STEMI. GCS 3. His wife has just arrived and is asking to come in.",
      next: "q-rosc",
    },
    {
      kind: "question",
      id: "q-rosc",
      phase: "After return of circulation",
      prompt: "What are your priorities now, and what do you do about his wife?",
      seconds: 90,
      modelAnswer: [
        "Secure the airway if needed. Titrate oxygen to SpO2 90 to 98 percent. Normal pCO2.",
        "Mean arterial pressure at least 65. Norepinephrine and fluid.",
        "Emergent cath lab for STEMI after arrest.",
        "Deliberate temperature control for the comatose patient, between 32 and 37.5 degrees. Prevent fever.",
        "Offer his wife a chance to be present with a staff member to support and explain.",
        "Update her honestly. He is alive but critically ill.",
      ],
      rubric: ["cr-m5", "cr-d1", "cr-c4"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "Afterwards",
      prompt: "He has gone to the cath lab. What do you do with your team, the resident, and Dr. Grant?",
      seconds: 90,
      modelAnswer: [
        "Hot debrief now. What went well, what was hard, what we would change. Focus on the system and the team.",
        "Private teaching with Dr. Lee about compression pauses and airway timing. Supportive, not shaming.",
        "Thank Karen for speaking up.",
        "Private, calm conversation with Dr. Grant. Describe the behaviour and its effect on the team and patient.",
        "If it recurs, raise it through the department chief. Professional behaviour policies apply to everyone.",
      ],
      rubric: ["cr-l4", "cr-p2", "cr-p3"],
      choices: [
        {
          id: "c-private",
          label: "I ran a short hot debrief, spoke privately with Dr. Lee, thanked Karen, and later asked Dr. Grant for a private conversation about how we work together in resus.",
          next: "end",
          quality: "strong",
          feedback:
            "Good. The debrief is about learning, not blame. Conflict is best handled privately and early, focused on specific behaviour and its effect on care. Recognizing the nurse who spoke up reinforces a culture of safety.",
        },
        {
          id: "c-report-only",
          label: "I skipped the debrief and filed a complaint about Dr. Grant with the chief of staff.",
          next: "end",
          quality: "partial",
          feedback:
            "Formal reporting may be needed if the behaviour is repeated or serious. But a first step is usually a direct private conversation. Skipping the debrief also loses the team learning and support.",
        },
        {
          id: "c-public",
          label: "I brought up Dr. Grant's behaviour in the debrief in front of the team.",
          next: "end",
          quality: "partial",
          feedback:
            "The debrief happened, which is good. But it is not the place to call out an individual. It makes people defensive and less willing to speak. Deal with a colleague's behaviour privately.",
        },
      ],
    },
    {
      kind: "end",
      id: "end",
      text:
        "He has a proximal left anterior descending artery stent. Dr. Grant stops by later and says he should have checked in with you first. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cr-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Runs a pre brief with named roles, a shared plan and permission to speak up.",
      points: 2,
      teaching: "Roles and a plan set before the patient arrives reduce confusion and freezing under stress.",
      source: "carne",
    },
    {
      id: "cr-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Keeps a single team leader and gives the arriving expert a defined role, or hands over leadership explicitly.",
      points: 3,
      critical: true,
      teaching: "Two leaders means two plans. A clear role for the expert keeps his skills and one voice in the room.",
      source: "hicks",
    },
    {
      id: "cr-l3",
      competency: "leadership",
      criterion: "plan",
      text: "Stays hands off at the foot of the bed and re sets the room with a brief summary.",
      points: 2,
      teaching: "A ten seconds for ten minutes pause during compressions rebuilds the shared mental model.",
      source: "hicks",
    },
    {
      id: "cr-l4",
      competency: "leadership",
      criterion: "plan",
      text: "Runs a short hot debrief focused on learning and team wellbeing.",
      points: 1,
      teaching: "Hot debriefs are brief and structured. They surface safety issues while memory is fresh.",
      source: "carne",
    },
    {
      id: "cr-m1",
      competency: "management",
      criterion: "approach",
      text: "Plans for refractory VF before arrival with a second defibrillator and anterior posterior pads ready.",
      points: 1,
      teaching: "Anticipating the next step turns a scramble into a planned change.",
      source: "dose-vf",
    },
    {
      id: "cr-m2",
      competency: "management",
      criterion: "plan",
      text: "Changes defibrillation strategy after three failed shocks, using vector change or double sequential defibrillation.",
      points: 2,
      teaching: "In DOSE VF, both strategies improved survival to discharge compared with standard defibrillation. Guidelines rate them as may be considered after 3 or more failed shocks.",
      source: "dose-vf",
    },
    {
      id: "cr-m3",
      competency: "management",
      criterion: "plan",
      text: "Gives amiodarone 150 mg as the second dose and tracks the cumulative dose.",
      points: 1,
      teaching: "Amiodarone is 300 mg then 150 mg in shock refractory VF. Lidocaine is an alternative.",
      source: "aha-als",
    },
    {
      id: "cr-m4",
      competency: "management",
      criterion: "plan",
      text: "Stops the long compression pause immediately and keeps pauses under 10 seconds.",
      points: 3,
      critical: true,
      teaching: "Coronary perfusion pressure falls within seconds of stopping compressions. A working supraglottic airway does not need to be swapped mid arrest.",
      source: "aha-als",
    },
    {
      id: "cr-m5",
      competency: "management",
      criterion: "plan",
      text: "Sets post arrest targets. SpO2 90 to 98 percent, mean arterial pressure at least 65 and deliberate temperature control.",
      points: 2,
      teaching: "Avoid hypoxia, hyperoxia and hypotension after return of circulation. They all worsen brain injury.",
      source: "aha-pca",
    },
    {
      id: "cr-c1",
      competency: "communication",
      criterion: "plan",
      text: "Speaks up directly, by name, with a clear instruction.",
      points: 2,
      teaching: "In a crisis, specific named instructions work. Vague comments to the room are ignored.",
      source: "carne",
    },
    {
      id: "cr-c2",
      competency: "communication",
      criterion: "plan",
      text: "Uses closed loop communication to challenge an unsafe drug order by stating the cumulative dose.",
      points: 2,
      teaching: "Saying the dose already given out loud lets the team catch the error without a confrontation.",
      source: "hicks",
    },
    {
      id: "cr-c3",
      competency: "communication",
      criterion: "plan",
      text: "Invites concerns from the team during the summary.",
      points: 1,
      teaching: "Asking 'what am I missing?' lowers the hierarchy and uncovers errors.",
      source: "carne",
    },
    {
      id: "cr-c4",
      competency: "communication",
      criterion: "plan",
      text: "Offers family presence with a support person and gives an honest update.",
      points: 1,
      teaching: "Families often value being present. A dedicated staff member explains what is happening.",
      source: "aha-als",
    },
    {
      id: "cr-d1",
      competency: "disposition",
      criterion: "data",
      text: "Sends the patient for emergent coronary angiography for STEMI after arrest.",
      points: 2,
      critical: true,
      teaching: "ST elevation after return of circulation needs emergent angiography regardless of coma.",
      source: "aha-pca",
    },
    {
      id: "cr-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Stays calm and respectful with the consultant while holding the line on patient safety.",
      points: 2,
      teaching: "Firm and calm beats loud. Disagree about the plan, not about the person.",
      source: "cpso-behaviour",
    },
    {
      id: "cr-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Addresses the consultant's behaviour privately and escalates only if it recurs or is serious.",
      points: 1,
      teaching: "Most conflict resolves with an early private conversation that focuses on behaviour and its effect on care.",
      source: "cpso-behaviour",
    },
    {
      id: "cr-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "Gives the resident supportive private feedback and thanks the nurse who spoke up.",
      points: 1,
      teaching: "Feedback should build skill without shame. Recognizing speaking up makes it more likely next time.",
      source: "carne",
    },
  ],
  sources: [
    {
      id: "carne",
      citation: "Carne B, Kennedy M, Gray T. Review article. Crisis resource management in emergency medicine. Emergency Medicine Australasia. 2012.",
    },
    {
      id: "hicks",
      citation: "Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emergency Medicine Clinics of North America. 2018.",
    },
    {
      id: "dose-vf",
      citation: "Cheskes S, et al. Defibrillation strategies for refractory ventricular fibrillation. New England Journal of Medicine. 2022.",
    },
    {
      id: "aha-als",
      citation: "Wigginton JG, et al. Part 9. Adult advanced life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025. Adopted in the Heart and Stroke Foundation of Canada edition.",
    },
    {
      id: "aha-pca",
      citation: "Hirsch KG, et al. Part 11. Post cardiac arrest care. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.",
    },
    {
      id: "cpso-behaviour",
      citation: "College of Physicians and Surgeons of Ontario. Policy. Professional Behaviour.",
      url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Physician-Behaviour-in-the-Professional-Environmen",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
