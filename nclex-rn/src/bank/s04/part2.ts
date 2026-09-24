import type { Item } from "@/engine/types";
import { AACN_4A, ADA_ANIMALS, ANA_CODE, BOUNDARIES, GUIDO, HALTER, NCEA_FLAGS, OSHA_WPV, POTTER, SAFE_HAVEN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s04-11", {
      topic: "Injuries and weight loss with a controlling caregiver",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 82-year-old client is brought to the emergency department by her son, her only caregiver. She has bruises of different colors on both upper inner arms and a stage 3 sacral pressure injury. She weighs 43 kg, down from 51 kg 3 months ago. The son answers every question. She looks at him before she speaks. State law requires nurses to report suspected elder abuse. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Bruises of different colors on both inner upper arms fit repeated gripping. A stage 3 pressure injury and a loss from 51 to 43 kg in 3 months point to neglect by the person giving care. A caregiver who answers every question and a client who checks his face before speaking suggest control. The nurse interviews her alone and reports as state law requires. Bruise details and nutrition are tracked.",
      sources: [NCEA_FLAGS, GUIDO, { body: "Government of Nova Scotia", work: "Adult Protection Act, R.S.N.S. 1989, c. 2, section 5", year: 2014, url: "https://nslegislature.ca/sites/default/files/legc/statutes/adult%20protection.pdf" }, { body: "Government of Ontario", work: "Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1, section 28", year: 2021, url: "https://www.ontario.ca/laws/statute/21f39" }],
      canada:
        "Canada has no single duty to report elder abuse, and reporting laws vary by province. Nova Scotia's Adult Protection Act requires anyone to report an adult in need of protection. Ontario requires reports of suspected abuse of long-term care residents.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Falls from worsening dementia", why: "The stem gives no memory findings, and falls rarely bruise the inner upper arms." },
      { text: "Abuse and neglect by the caregiver", why: "Grip bruises of different colors, a pressure injury, weight loss and a controlling caregiver fit abuse and neglect." },
      { text: "Bruising from low platelets", why: "Low platelets do not explain the pressure injury, the weight loss or the son's control." },
      { text: "Weight loss from a hidden cancer", why: "Cancer does not explain grip bruises on both inner arms or the son's control." },
    ],
    actions: [
      { text: "Ask the son to explain each bruise", why: "Questioning the suspected abuser in front of her can silence her and put her at risk." },
      { text: "Interview the client without the son present", why: "A private interview lets her speak freely about her care." },
      { text: "Discharge her home with the son today", why: "Sending her home without a safety review could return her to the harm." },
      { text: "Report to adult protective services", why: "State law requires nurses to report suspected elder abuse. Proof is not needed to report." },
      { text: "Confront the son about her injuries", why: "Confronting the son can raise the danger and does not start an investigation." },
    ],
    parameters: [
      { text: "Serum lipid levels over time", why: "Lipid levels do not show abuse or neglect." },
      { text: "Size, color and site of each bruise", why: "Exact bruise details document the pattern for the report and track new injury." },
      { text: "Bone density on a yearly scan", why: "Bone density does not guide the response to suspected abuse." },
      { text: "Weight and daily food intake", why: "Weight and intake track the neglect shown by a loss from 51 to 43 kg." },
      { text: "Hearing acuity with a whisper test", why: "Hearing does not track abuse or neglect in this client." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s04-12", {
      topic: "Threat against a named person",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 36-year-old client visits an outpatient mental health clinic. He says, \"Tomorrow I am going to shoot my supervisor when she walks into work.\" The client names the supervisor and says he owns a rifle. What should the nurse do first?",
      rationale:
        "The client names a specific person, a time and a weapon he owns. A serious threat against an identifiable person creates a duty to protect that overrides confidentiality. The nurse tells the provider and treatment team at once so they can warn the person and act on safety. Keeping it private, waiting or relying on a promise leaves the supervisor in danger.",
      sources: [HALTER, ANA_CODE, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, section 40", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "In Canada, confidentiality rules come from provincial privacy law and vary by province. Ontario's PHIPA s. 40 permits disclosure when it is needed to reduce a significant risk of serious bodily harm to a person.",
    }),
    kind: "mc",
    options: [
      { text: "Report the threat to the treatment team at once", why: "A specific threat to a named person with the means to act requires the team to protect that person." },
      { text: "Keep the statement private to protect trust", why: "Confidentiality gives way when a named person faces a serious threat of harm." },
      { text: "Chart the remark and review it at the next visit", why: "The threat is for tomorrow. Waiting leaves the supervisor at risk." },
      { text: "Ask the client to promise not to act on it", why: "A promise does not protect the named person and does not meet the duty to act." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-13", {
      topic: "Parent leaves a newborn at a safe haven",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A young woman walks into the emergency department holding a newborn she says was born at home 12 hours ago. She says she cannot care for the baby and wants to leave without giving her name. The state has an infant safe haven law that names hospitals as safe havens. What should the nurse do?",
      rationale:
        "A safe haven law lets a parent leave a young infant at a named site without giving identity. The nurse accepts the baby, who is well within the age limit at 12 hours old, and starts newborn care. Staff may offer a voluntary health history form but do not require it. Demanding a name, holding the parent or refusing the baby defeats the law's purpose.",
      sources: [SAFE_HAVEN, POTTER, { body: "Government of Canada", work: "Criminal Code, R.S.C. 1985, c. C-46, section 218", year: 2026, url: "https://laws-lois.justice.gc.ca/eng/acts/c-46/section-218.html" }, { body: "Providence Health Care", work: "FAQ: Angel's Cradle at St. Paul's Hospital. The Daily Scan", year: 2018, url: "https://thedailyscan.providencehealthcare.org/2018/11/angels-cradle/" }],
      canada:
        "Canada has no infant safe haven law, and abandoning a child under 10 so that its life is endangered is an offence under Criminal Code s. 218. A few hospitals, such as St. Paul's in Vancouver, run anonymous newborn cradles.",
    }),
    kind: "mc",
    options: [
      { text: "Ask for her name before accepting the baby", why: "Safe haven laws do not require the parent to give a name." },
      { text: "Call the police to hold her until they arrive", why: "A lawful relinquishment is protected. Holding her would deter use of the law." },
      { text: "Tell her the hospital cannot accept the baby", why: "The state names hospitals as safe havens, so the hospital accepts the infant." },
      { text: "Accept the baby and offer a health history form", why: "The law allows anonymous surrender. A voluntary history form helps the infant's care." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-14", {
      topic: "Questions allowed about a service dog",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A client arrives for admission to a medical unit with a dog that wears no vest. The client says the dog is a service animal. The client's disability is not obvious. Which two questions may the nurse ask? Select two.",
      rationale:
        "When the need for a service dog is not obvious, staff may ask only whether the dog is required because of a disability and what task it is trained to do. Staff may not ask about the disability. They may not ask for papers, a note or a demonstration. A vest is not required. The dog may stay in the client's room.",
      sources: [ADA_ANIMALS, { body: "Government of Ontario", work: "O. Reg. 191/11, Integrated Accessibility Standards, section 80.45", year: 2016, url: "https://www.ontario.ca/laws/regulation/110191" }],
      canada:
        "The ADA does not apply in Canada, and service animal rules vary by province. Under Ontario's accessibility standards, an animal without a vest or harness counts as a service animal if the client gives a note from a regulated health professional.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"Is the dog required because of a disability?\"", why: "This is one of the two questions the law allows." },
      { text: "\"What is your disability?\"", why: "Staff may not ask about the nature of the disability." },
      { text: "\"May I see the dog's certification papers?\"", why: "Staff may not require papers, an ID card or proof of training." },
      { text: "\"What task has the dog been trained to do?\"", why: "This is the second question the law allows." },
      { text: "\"Can the dog show me how it does its task?\"", why: "Staff may not ask the dog to demonstrate its task." },
      { text: "\"Do you have a note from your provider?\"", why: "Staff may not require medical documentation for a service dog." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s04-15", {
      topic: "Recognizing client abandonment",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse educator reviews legal duties with new graduate nurses on a medical unit. Which action by a nurse is an example of client abandonment?",
      rationale:
        "Abandonment occurs when a nurse accepts an assignment and then leaves clients without handing off care to another qualified nurse. Leaving mid-shift with no handoff fits. Refusing an unsafe assignment before accepting it is a professional right. Declining overtime after report and taking a break after handing clients to a peer both keep care continuous.",
      sources: [GUIDO, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Refusing an unsafe assignment before accepting it", why: "A nurse may raise concerns and refuse before accepting. No duty has begun." },
      { text: "Leaving the unit mid-shift without a handoff", why: "Leaving accepted clients with no one to care for them is abandonment." },
      { text: "Declining overtime after giving report to relief", why: "Care passed to the relief nurse, so the clients are not left alone." },
      { text: "Going on break after handing clients to a peer", why: "A handoff to a qualified peer keeps care continuous during the break." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-16", {
      topic: "Crossing professional boundaries",
      cjmm: "recognize",
      process: "caring",
      difficulty: 1,
      stem: "A nurse has cared for a 29-year-old client on a rehabilitation unit for 3 weeks. Which actions by the nurse cross professional boundaries? Select all that apply.",
      rationale:
        "The nurse holds the power in the relationship and is responsible for its limits. Sharing personal problems, giving a private phone number, joining the client's social media and visiting on a day off all shift the focus to the nurse's needs. Sitting at eye level, using the preferred name and explaining care in plain words are therapeutic.",
      sources: [BOUNDARIES],
    }),
    kind: "sata",
    options: [
      { text: "Sits at eye level while talking with the client", why: "Eye level contact is a therapeutic skill that respects the client." },
      { text: "Shares details of a personal divorce with the client", why: "Personal disclosure shifts the focus from the client's needs to the nurse's." },
      { text: "Uses the name the client prefers", why: "Using the preferred name shows respect within the relationship." },
      { text: "Gives the client a personal phone number", why: "Private contact outside the care setting crosses the professional line." },
      { text: "Accepts a friend request from the client online", why: "A social media link creates a personal relationship with a current client." },
      { text: "Visits the client on a day off", why: "Contact off duty moves the relationship out of the professional role." },
      { text: "Explains the plan of care in plain words", why: "Clear teaching is part of the nurse's role." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s04-17", {
      topic: "Reporting fraud outside the agency",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A home health nurse finds that the agency bills for visits that never took place. The nurse reported this in writing to the agency director 2 weeks ago. The false billing continues. What should the nurse do next?",
      rationale:
        "The nurse used the internal channel first and the problem continues. The code of ethics calls on nurses to act when practices threaten clients or violate standards. The next step is a report to the outside agency that oversees the program. Whistleblower laws protect good faith reports made through proper channels. Public posts are not a proper channel.",
      sources: [ANA_CODE, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Stop, since the director has been told", why: "Telling the director did not stop the fraud. The duty to act continues." },
      { text: "Report the billing to the oversight agency", why: "When internal reporting fails, a report to the outside regulator is the next proper step." },
      { text: "Post the facts online to warn the public", why: "A public post is not a proper channel and may breach client privacy." },
      { text: "Resign and say nothing further about it", why: "Leaving does not stop the fraud or meet the duty to report it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-18", {
      topic: "Steps to address moral distress",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "A nurse in intensive care feels troubled after 4 weeks of caring for a client whose aggressive treatment continues with no response. The nurse wants to address the distress. Place the steps of the AACN framework for moral distress in order.",
      rationale:
        "The framework starts by asking whether the feelings are moral distress. The nurse then affirms the distress and the duty to act. Next the nurse assesses its source and severity and readiness to act. Last the nurse acts on a plan. Keeping the feelings hidden or leaving the unit avoids the problem without addressing it.",
      sources: [AACN_4A, ANA_CODE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Confirm the distress and the duty to act on it", why: "Affirming is the second step, after the distress is named." },
      { text: "Ask whether the feelings are moral distress", why: "Asking is the first step. It names the problem." },
      { text: "Carry out a plan to make a change", why: "Acting is the final step, after the assessment." },
      { text: "Identify the source and how severe it is", why: "Assessing is the third step. It guides the plan." },
      { text: "Request a transfer away from the unit", why: "A transfer avoids the problem and is not a step of the framework." },
      { text: "Keep the feelings private to stay objective", why: "Hiding distress lets it grow and is not a step of the framework." },
    ],
    correct: [1, 0, 3, 2],
  },
  {
    ...meta("rn-s04-19", {
      topic: "After being struck by a confused client",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client with delirium punches a nurse in the forearm during a dressing change. The nurse steps back and calls for help. The client is now calm with staff present. The nurse has a bruise on the forearm. What should the nurse do next?",
      rationale:
        "Every act of violence against staff is reported, even when the client has delirium. Reports guide prevention, such as care plans for clients at risk of aggression. The nurse also gets the injury checked through employee health. Waiting, telling only a coworker or skipping the report hides the risk from the team.",
      sources: [OSHA_WPV, { body: "Government of Ontario", work: "Occupational Health and Safety Act, R.S.O. 1990, c. O.1, sections 32.0.1 and 32.0.2", year: 2009, url: "https://www.ontario.ca/laws/statute/90o01" }],
      canada:
        "OSHA guidance does not apply in Canada. Workplace violence duties come from provincial occupational health and safety law, which varies by province. Ontario's act requires a workplace violence program that includes a way for workers to report incidents.",
    }),
    kind: "mc",
    options: [
      { text: "Skip the report because the client is confused", why: "Violence is reported whatever the client's intent. Reports guide prevention." },
      { text: "Wait to see if the bruise gets worse first", why: "Delay loses details and leaves the injury unchecked." },
      { text: "Tell only a coworker about what happened", why: "An informal talk does not reach the system that plans prevention." },
      { text: "Report the assault and have the injury checked", why: "Reporting and a health check protect the nurse and inform prevention plans." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-20", {
      topic: "False written statement about a coworker",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "After a dispute over breaks, a nurse posts in a public online group that a coworker \"comes to work drunk.\" The statement is false. The coworker's manager reads the post. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Defamation is a false statement shared with others that harms a person's reputation. Written defamation is libel. Spoken defamation is slander. The post is false, written and read by the manager, so it fits libel. Assault is a threat of harmful contact. Invasion of privacy protects private life. A false claim that harms a reputation is defamation.",
      sources: [GUIDO, POTTER],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The posting nurse has most likely committed {0} because the false statement was {1}.",
    blanks: [
      {
        options: [
          { text: "slander", why: "Slander is spoken. This statement was posted in writing." },
          { text: "libel", why: "Libel is false written defamation, which fits the post." },
          { text: "assault", why: "Assault is a threat of harmful contact. No threat was made." },
          { text: "invasion of privacy", why: "Invasion of privacy protects private life. A false claim that harms a reputation is defamation." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "spoken aloud to one person", why: "The statement was written, not spoken." },
          { text: "true but embarrassing", why: "The statement is false. Truth is a defense to defamation." },
          { text: "written and shared with others", why: "Defamation needs a false statement shared with a third party. Writing makes it libel." },
          { text: "made to the coworker alone", why: "The manager read it, so it reached a third party." },
        ],
        correct: 2,
      },
    ],
  },
];
