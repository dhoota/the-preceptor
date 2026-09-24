import type { Item } from "@/engine/types";
import { CMS_IM, DELEGATION, HINKLE, MARX, POTTER, PSNET_REPORT, TEAMSTEPPS, YODER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s04-41", {
      topic: "Classifying an extra dose that caused no harm",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A nurse gives a client heparin 5000 units subcutaneously at 1400. Another nurse had already given the same dose at 1300. The client shows no bleeding or other change over the next 24 hours. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The second dose reached the client, so this is not a near miss. A near miss is caught before it reaches the client. The client had no injury over 24 hours, so it is a no-harm event. A sentinel event causes death or severe harm. An adverse event with harm causes injury. The event is still reported so the team can learn from it.",
      sources: [PSNET_REPORT, MARX],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "This event is best classified as {0} because the extra dose {1} and the client {2}.",
    blanks: [
      {
        options: [
          { text: "a near miss", why: "A near miss does not reach the client. This dose was given." },
          { text: "a no-harm event", why: "The error reached the client but caused no injury." },
          { text: "a sentinel event", why: "A sentinel event involves death or severe harm. The client had no injury." },
          { text: "an adverse event with harm", why: "The client showed no bleeding or other change, so there was no harm." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "was caught before it was given", why: "The second dose was given at 1400, so it was not caught." },
          { text: "reached the client", why: "Reaching the client separates this event from a near miss." },
          { text: "matched the prescription", why: "A second dose within 1 hour did not match any prescription." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "needed treatment for bleeding", why: "The client had no bleeding over 24 hours." },
          { text: "had a lasting injury", why: "No injury occurred, so the event is not classed as harm." },
          { text: "had no injury", why: "No injury is what makes this a no-harm event." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s04-42", {
      topic: "Speaking up about a missing sponge",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "During wound closure in the operating room, the count shows one sponge missing. The surgeon says the count must be wrong and starts to close. Which two statements by the circulating nurse follow the CUS tool? Select two.",
      rationale:
        "CUS stands for concerned, uncomfortable and safety issue. The nurse states the concern in plain words and, if needed, names it as a safety issue so the team stops. A hedged question invites the surgeon to ignore it. Blaming the surgeon's habits provokes conflict. Waiting to report after the case can leave a sponge inside the client.",
      sources: [TEAMSTEPPS],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"Maybe we could recount if you have time?\"", why: "A hedged request is easy to dismiss and does not stop the closure." },
      { text: "\"I am concerned the sponge count is off by one.\"", why: "Stating a concern in plain words is the first part of CUS." },
      { text: "\"You tend to rush the count at the end.\"", why: "A remark about habits provokes conflict and does not address the sponge." },
      { text: "\"This is a safety issue. We need to stop and recount.\"", why: "Naming a safety issue is the CUS signal for the team to stop." },
      { text: "\"I will write this up after the case.\"", why: "A later report leaves a possible retained sponge in the client." },
      { text: "\"The count might be fine, so go ahead.\"", why: "This lets the closure go on with an item unaccounted for." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s04-43", {
      topic: "What makes a task safe to delegate",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "A nurse manager reviews delegation with new staff on a surgical unit. Which feature makes a task suitable to delegate to an assistive personnel (AP)?",
      rationale:
        "A task suited to an AP is routine, has a predictable outcome and needs no nursing judgment. The client is stable. Tasks that need ongoing assessment or nursing judgment, or involve a client whose condition is changing, stay with the licensed nurse.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "The task has a predictable outcome", why: "A predictable outcome is a mark of a task an AP can do safely." },
      { text: "The task needs ongoing assessment", why: "Assessment is a licensed nurse duty and cannot be delegated to an AP." },
      { text: "The client's condition is changing", why: "A changing condition makes outcomes unpredictable, so the nurse keeps the care." },
      { text: "The task requires nursing judgment", why: "Tasks that need nursing judgment stay with the licensed nurse." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-44", {
      topic: "Reviewing delegated care at shift end",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "At the end of the shift, the nurse reviews the work an assistive personnel (AP) was delegated for 4 stable clients. Which findings show that the delegated care needs follow-up by the nurse? Select all that apply.",
      rationale:
        "The nurse stays accountable for delegated care and evaluates it. A BP of 178/98 mmHg and a glucose of 58 mg/dL that were charted but not reported mean the AP missed the reporting step. A blank intake record is an incomplete task. On-time vital signs, planned turns, linen changes and prompt call lights show the tasks were done as directed.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Vital signs charted on time for all 4 clients", why: "On-time vital signs show the task was done as directed." },
      { text: "A BP of 178/98 mmHg charted but not reported", why: "An abnormal value the nurse never heard about needs follow-up with the client and the AP." },
      { text: "Turns every 2 hours charted as planned", why: "Turns done on schedule show the task was completed." },
      { text: "Intake for one client left blank all shift", why: "A missing record means the task was not done or not charted." },
      { text: "Linens changed for all 4 clients", why: "Completed linen changes need no follow-up." },
      { text: "Glucose 58 mg/dL (3.2 mmol/L) charted, not reported", why: "A low glucose that went unreported needs prompt follow-up." },
      { text: "Call lights answered within the unit standard", why: "Prompt call light response shows the AP met expectations." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s04-45", {
      topic: "Checking an AP's grasp of report limits",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse delegates vital signs on a stable client to an assistive personnel (AP). The nurse says to report at once a heart rate over 110/minute, a systolic BP under 90 mmHg or an SpO2 under 92%. Which statement by the AP shows understanding?",
      rationale:
        "A systolic BP of 86 mmHg is under the limit of 90 mmHg, so the AP reports it at once. An SpO2 of 90% or 91% is under 92% and needs a report now, not later. A heart rate of 104/minute is below the limit of 110/minute. Clear limits are part of the right directions for delegation.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "\"I will tell you at shift end if the SpO2 is 90%.\"", why: "An SpO2 of 90% is under 92% and needs a report at once." },
      { text: "\"A heart rate of 104 is high, so I will report it now.\"", why: "The limit is over 110/minute, so 104 does not meet it." },
      { text: "\"If the systolic BP is 86, I will tell you right away.\"", why: "A systolic BP of 86 mmHg is under 90 mmHg and is reported at once." },
      { text: "\"I will recheck an SpO2 of 91% in an hour first.\"", why: "An SpO2 of 91% is under 92% and is reported now, not after a delay." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-46", {
      topic: "Need the registered nurse keeps",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A registered nurse on a surgical unit works with a practical nurse (LPN) and an assistive personnel (AP). Four needs arise at the same time. Which need should the registered nurse handle personally?",
      rationale:
        "A client just back from surgery with an SpO2 of 89% is unstable and needs registered nurse assessment now. Walking a recovering client and a bed bath can go to the AP. Scheduled oral drugs for a stable client can go to the LPN. Keeping the unstable client matches each task to the right person.",
      sources: [DELEGATION, YODER, { body: "Canadian Council for Practical Nurse Regulators", work: "About the Canadian Council for Practical Nurse Regulators", year: 2026, url: "https://www.ccpnr.ca/" }],
      canada:
        "In Canada, the practical nurse is a registered practical nurse (RPN) in Ontario and a licensed practical nurse elsewhere. Scope and assignment rules come from each provincial or territorial regulator, so they vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "Walk a client on day 2 after appendectomy", why: "Walking a recovering client is a routine AP task." },
      { text: "Give scheduled oral drugs to a stable client", why: "Oral drugs for a stable client are within the LPN scope." },
      { text: "Help a client with a bed bath and linen change", why: "Hygiene care is a routine AP task." },
      { text: "Assess a new post-op client with SpO2 89%", why: "A new post-op client with low oxygen is unstable and needs the registered nurse." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-47", {
      topic: "Preceptor stops an unsafe push rate",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A preceptor watches a new graduate nurse give IV push furosemide 40 mg. The drug reference says to give it over 1 to 2 minutes. The new nurse starts to push the full dose in about 10 seconds. What should the preceptor do?",
      rationale:
        "Pushing furosemide 40 mg in 10 seconds is far faster than the 1 to 2 minutes in the reference. A rapid push raises the risk of hearing damage. The preceptor stops the push at once and reviews the rate before the dose goes on. Feedback after the dose comes too late for this client. A report or taking over all pushes does not correct the skill.",
      sources: [HINKLE, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Stop the nurse and review the push rate now", why: "Stopping the push prevents harm, and teaching in the moment corrects the skill." },
      { text: "Let the nurse finish, then give feedback", why: "The client would receive the full dose at an unsafe rate." },
      { text: "Report the nurse to the unit manager", why: "A report does not stop the unsafe push in progress." },
      { text: "Take over all IV pushes for the shift", why: "Taking over does not teach the new nurse the correct rate." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-48", {
      topic: "Sign that a staff conflict is resolved",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 3,
      stem: "Two nurses on a night shift disagree about who should take new admissions. The charge nurse meets with them privately and they agree to alternate admissions. Which finding one month later shows the conflict was resolved?",
      rationale:
        "A resolved conflict shows in a plan that both parties follow without friction. Alternating admissions with no complaints fits. Avoiding shared shifts is avoidance, not resolution. One nurse taking every admission means one side gave in. Raising the issue at every huddle shows the conflict continues.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Both nurses now avoid being scheduled on the same shift", why: "Avoidance hides the conflict without resolving it." },
      { text: "One nurse now takes every admission", why: "One side giving in is accommodation, not a shared solution." },
      { text: "Admissions alternate as agreed with no complaints", why: "Both nurses follow the plan without friction, which shows resolution." },
      { text: "The nurses bring up the issue at each huddle", why: "Repeated complaints show the conflict is still active." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-49", {
      topic: "Client disagrees with a planned discharge",
      cjmm: "action",
      process: "caring",
      difficulty: 5,
      stem: "A 77-year-old client with Medicare is told she will be discharged tomorrow after pneumonia. She tells the nurse, \"I am not ready. I can barely walk to the bathroom.\" She received the Important Message from Medicare notice on admission. What should the nurse do?",
      rationale:
        "The notice explains a Medicare inpatient's right to a fast review of a discharge decision by an outside quality organization. The nurse explains how to request it and reports her mobility concern to the team. Calling the decision final denies a legal right. A nurse cannot cancel a discharge alone. Waiting until she is home loses the fast review.",
      sources: [CMS_IM, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }, { body: "Government of Ontario", work: "Excellent Care for All Act, 2010, S.O. 2010, c. 14, section 6", year: 2010, url: "https://www.ontario.ca/laws/statute/10e14" }],
      canada:
        "Canada has no Medicare, so the Important Message notice and its fast appeal do not apply. Hospital care is insured under the Canada Health Act. Discharge concerns go through the care team and the hospital's complaint process, which Ontario law requires every health care organization to have.",
    }),
    kind: "mc",
    options: [
      { text: "Tell her the discharge decision is final", why: "Medicare inpatients have a legal right to appeal a discharge." },
      { text: "Explain how to request a fast appeal of discharge", why: "The notice gives her the right to a fast outside review before she leaves." },
      { text: "Suggest she contact her insurer once she is home", why: "The fast review must be requested before discharge to delay it." },
      { text: "Cancel the discharge on the nurse's own authority", why: "The nurse cannot cancel a discharge alone but can report the concern." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-50", {
      topic: "Events that need a safety report",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse reviews events from a shift on a medical unit. Which events should be entered in the safety event reporting system? Select all that apply.",
      rationale:
        "Safety event reports cover errors, near misses, unsafe conditions and injuries to anyone on the unit. A wrong diet tray, a fainting visitor, a pump that fails to alarm and a mislabeled specimen all qualify. A client's refusal of a drug or a delay the client chose is charted but is not a safety event. A planned discharge is routine.",
      sources: [PSNET_REPORT],
    }),
    kind: "sata",
    options: [
      { text: "A client refuses a scheduled oral medication", why: "A refusal is the client's right. It is charted and reported to the provider." },
      { text: "A client on a peanut-free diet gets peanuts", why: "A diet error that reaches the client is a safety event." },
      { text: "A visitor faints in a client's room", why: "Injuries or events involving visitors are reported." },
      { text: "A lab draw is delayed at the client's request", why: "A delay the client chose is not an error or unsafe condition." },
      { text: "An infusion pump fails to alarm for an occlusion", why: "A device failure is an unsafe condition that is reported." },
      { text: "A client is discharged on the planned date", why: "A routine discharge is not a safety event." },
      { text: "A blood specimen has another client's label", why: "A mislabeled specimen is an error that can harm a client." },
    ],
    correct: [1, 2, 4, 6],
  },
];
