import type { Item } from "@/engine/types";
import { ANA_CODE, ANA_SPHM, CLAS, GUIDO, HINKLE, NNDSS, TJC_NPG, VA_LICENSE, WATERS, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s30-41", {
      need: "MOC",
      topic: "Recruiting one's own clients for a paid trial",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A clinic nurse is also the paid study coordinator for a diabetes drug trial. The sponsor pays the clinic a fee for each client enrolled. The nurse is asked to recruit from the nurse's own caseload of clients. Which action best manages the conflict?",
      rationale:
        "The nurse has a financial interest in enrollment and a trusted role with the clients. Both can press a client to join. The code of ethics asks nurses to disclose conflicts and allows care to be referred to a colleague. Having another staff member seek consent lowers the pressure a client may feel. Ethics board approval of the study does not remove the personal conflict. Promising better care misleads clients.",
      sources: [ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Recruit freely because an ethics board approved the trial", why: "Study approval does not manage the nurse's own financial and relational conflict." },
      { text: "Disclose the role and have another staff member seek consent", why: "Disclosure and a separate person for consent reduce undue pressure on clients." },
      { text: "Tell clients that joining will improve their usual care", why: "This misleads clients and pressures them to enroll." },
      { text: "Keep the per-client fee private to avoid alarming anyone", why: "Hiding the payment conceals the conflict that must be disclosed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s30-42", {
      need: "MOC",
      topic: "Home health referral to a relative's agency",
      cjmm: "generate",
      process: "communication",
      difficulty: 4,
      stem: "A hospital discharge nurse's sister owns a home health agency in the area. A client being discharged needs home health services and asks the nurse which agency is best. Which actions by the nurse are appropriate? Select all that apply.",
      rationale:
        "A family stake in one agency is a conflict of interest. The nurse discloses the tie and gives the client the full list of agencies that serve the area. The client chooses, which respects self-determination. Handing the referral to the case manager removes the nurse from the decision. Recommending or referring to the sister's agency without disclosure lets a personal interest steer the client.",
      sources: [ANA_CODE],
    }),
    kind: "sata",
    options: [
      { text: "Give the client the full list of agencies that serve the area", why: "A complete list lets the client compare options." },
      { text: "Tell the client about the family tie to one agency", why: "Disclosure lets the client weigh the nurse's advice." },
      { text: "Recommend the sister's agency as the best choice", why: "A recommendation shaped by a family stake is a conflict of interest." },
      { text: "Let the client choose the agency", why: "The choice belongs to the client." },
      { text: "Send the referral to the sister's agency without discussion", why: "This steers the client and hides the conflict." },
      { text: "Ask the case manager to handle the referral", why: "Passing the referral to a colleague removes the conflict from the decision." },
    ],
    correct: [0, 1, 3, 5],
  },
  {
    ...meta("rn-s30-43", {
      need: "MOC",
      topic: "Illness after one shared wedding dinner",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "On one morning, an urgent care nurse sees 3 adults from different households with vomiting and diarrhea that began 6 to 8 hours after the same wedding dinner. Two have a fever. One vomited 4 times overnight. No stool results are back yet. Which finding is the reason to notify public health now?",
      rationale:
        "A foodborne disease outbreak is itself a nationally notifiable event. Illness in several people from different households after one shared meal points to a common source, so public health is told without waiting for stool results. Early notice lets the health department trace the food and other guests. Fever, the number of vomiting episodes and pending tests describe single clients and do not by themselves call for a report.",
      sources: [NNDSS],
    }),
    kind: "mc",
    options: [
      { text: "Two of the clients have a fever", why: "Fever describes illness in a single person and does not define an outbreak." },
      { text: "One client vomited 4 times overnight", why: "Severity in one client does not by itself call for a public health report." },
      { text: "The stool results are still pending", why: "Outbreak reporting does not wait for laboratory results." },
      { text: "Several people fell ill after one shared meal", why: "A cluster linked to one meal is a suspected foodborne outbreak, which is notifiable." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s30-44", {
      need: "MOC",
      topic: "Nurse licensed abroad working as a technician",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A nurse educated and licensed in another country works as an unlicensed care technician while waiting to pass the NCLEX-RN and receive a state license. On a busy shift she offers to give IV push medications and says, \"I did this every day back home.\" How should the charge nurse respond?",
      rationale:
        "Practice is defined by the license held in the state where care is given and by the role the person is hired into. A license from another country does not authorize nursing practice here. Until she holds a state license, she works only within the technician role. Supervision or client consent cannot turn unlicensed practice into licensed practice. Her skills will be valued once she is licensed.",
      sources: [GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Thank her and assign only tasks in the technician role", why: "Without a state license she may work only within the role she was hired for." },
      { text: "Let her give the IV push drugs while an RN watches", why: "Watching does not give her the legal authority to practice nursing." },
      { text: "Allow it because her foreign license shows competence", why: "A license from another country does not authorize practice in this state." },
      { text: "Allow it only for clients who give verbal consent", why: "Client consent cannot authorize unlicensed nursing practice." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-45", {
      need: "MOC",
      topic: "Federal facility job and a private side job",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "A registered nurse licensed only in State A accepts a job at a Veterans Affairs medical center in State B. She also plans to work weekend shifts at a private hospital in State B. Neither state belongs to the Nurse Licensure Compact. Which statement about her licensure is accurate?",
      rationale:
        "Veterans Affairs facilities are federal. A nurse there can practice with one active, unrestricted license from any US state. The private hospital is governed by State B law, so weekend work there needs a State B license. Without the compact, her State A license gives no privilege to practice in State B outside federal employment.",
      sources: [VA_LICENSE, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Both jobs need a State B license before she starts", why: "The federal VA job accepts an active license from any state." },
      { text: "Neither job needs a license beyond her State A license", why: "The private hospital falls under State B law and needs a State B license." },
      { text: "Only the private hospital job needs a State B license", why: "Federal employment accepts her State A license, but private practice in State B does not." },
      { text: "Only the VA job needs a State B license", why: "This reverses the rule. The VA accepts any state license." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s30-46", {
      need: "MOC",
      topic: "Who does what in nursing regulation",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 1,
      stem: "A nursing student asks the nurse who is responsible for each part of nursing regulation and standards. Drag the body that carries out each function to its target.",
      rationale:
        "The state legislature passes the nurse practice act. The state board of nursing applies the act by issuing licenses and disciplining nurses. The Joint Commission accredits hospitals against its performance standards. The American Nurses Association publishes the code of ethics for nurses. The National Council of State Boards of Nursing supports boards and develops the licensure exam, but it does not license nurses.",
      sources: [GUIDO, ANA_CODE, TJC_NPG],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Enacts the nurse practice act", "Issues licenses and disciplines nurses", "Accredits hospitals against performance goals", "Publishes the code of ethics for nurses"],
    tokens: [
      { text: "American Nurses Association", why: "The association writes and publishes the code of ethics." },
      { text: "State legislature", why: "Lawmakers pass the nurse practice act." },
      { text: "National Council of State Boards of Nursing", why: "The council supports boards and develops the exam, but it does not license nurses." },
      { text: "The Joint Commission", why: "The Joint Commission accredits hospitals." },
      { text: "State board of nursing", why: "The board licenses and disciplines nurses under the act." },
    ],
    correct: [1, 4, 3, 0],
  },
  {
    ...meta("rn-s30-47", {
      need: "MOC",
      topic: "Family dishes and a potassium limit",
      cjmm: "generate",
      process: "culture",
      difficulty: 2,
      stem: "A 58-year-old client on hemodialysis follows a potassium-restricted diet. His family brings home-cooked dishes from their culture every evening, and he refuses hospital meals. His serum potassium today is 5.6 mEq/L (5.6 mmol/L). What should the nurse do?",
      rationale:
        "The potassium of 5.6 mEq/L shows the current intake is not safe. The client also rejects foods that are not his own. The dietitian can work with the family to adapt familiar dishes to the restriction. Adherence improves when the plan fits the client's culture. Banning family food ignores his preferences. Unchanged dishes keep raising his potassium.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [CLAS, ANA_CODE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Ban outside food until the potassium is normal", why: "A ban ignores his culture and he already refuses the hospital meals." },
      { text: "Ask the dietitian to adapt his usual dishes", why: "A culturally fitted plan meets the restriction and the client's preferences." },
      { text: "Let him keep eating the family dishes as made", why: "Unchanged dishes keep his potassium above the safe range." },
      { text: "Tell the family the hospital meals are healthier", why: "This dismisses the family's food and does not solve the problem." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s30-48", {
      need: "MOC",
      topic: "Large family vigil in intensive care",
      cjmm: "generate",
      process: "culture",
      difficulty: 4,
      stem: "A 74-year-old client is dying in the intensive care unit. About 12 family members wish to stay, pray aloud and play recorded chants at the bedside. Some staff say the group breaks the unit's 2-visitor rule. Which actions by the nurse support the family's practices? Select all that apply.",
      rationale:
        "Care at the end of life respects the cultural and spiritual practices of the client and family. The nurse asks which rituals matter most and arranges a larger space nearby for those waiting. Offering a chaplain or the family's own faith leader adds support. Planning a clear path to the bed keeps care safe without ending the vigil. A rigid rule, stopping the chants or delaying prayer dismisses the family's beliefs.",
      sources: [CLAS, ANA_CODE],
    }),
    kind: "sata",
    options: [
      { text: "Ask the family which rituals matter most to them", why: "Asking shows respect and guides the plan." },
      { text: "Arrange a larger private space nearby for waiting", why: "More space lets the family stay together near the client." },
      { text: "Enforce the 2-visitor rule to keep the unit calm", why: "A rigid rule at the end of life dismisses the family's needs." },
      { text: "Offer a chaplain or the family's own faith leader", why: "Spiritual support fits the family's practice of prayer." },
      { text: "Ask the family to stop the chants in case others object", why: "Stopping the chants removes a practice the family values." },
      { text: "Plan with the family to keep a clear path to the bed", why: "A clear path keeps care safe while the vigil continues." },
      { text: "Tell the family that prayer must wait until after death", why: "Delaying prayer denies support when the family needs it most." },
    ],
    correct: [0, 1, 3, 5],
  },
  {
    ...meta("rn-s30-49", {
      need: "SIPC",
      topic: "Preparing a room for a 205 kg admission",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client who weighs 205 kg will be admitted to a medical unit from the emergency department. Which preparations should the nurse make? Select all that apply.",
      rationale:
        "Every piece of equipment has a weight limit. The bed must be rated above 205 kg. A lift and sling sized for the client avoid manual lifting. A cuff sized to the arm gives an accurate blood pressure. A wheelchair must be wide enough and rated for the weight. Standard commodes and chairs may not carry the load. Moving the client by draw sheet exceeds safe manual handling limits.",
      sources: [ANA_SPHM, WATERS],
    }),
    kind: "sata",
    options: [
      { text: "Confirm the bed's weight limit is above 205 kg", why: "A bed used above its rating can fail and injure the client." },
      { text: "Get a lift and a sling sized for the client", why: "A rated lift and a fitted sling carry the weight safely." },
      { text: "Place a standard commode chair at the bedside", why: "A standard commode may not be rated for 205 kg." },
      { text: "Obtain a blood pressure cuff sized to the arm", why: "A small cuff gives falsely high readings." },
      { text: "Plan to move the client with 6 staff and a draw sheet", why: "Manual handling of this weight puts staff and the client at risk." },
      { text: "Find a wheelchair wide enough and rated for the weight", why: "A rated, wider chair keeps the client safe during transport." },
      { text: "Use a standard bedside chair until a larger one arrives", why: "A standard chair may tip or break under the load." },
    ],
    correct: [0, 1, 3, 5],
  },
  {
    ...meta("rn-s30-50", {
      need: "SIPC",
      topic: "Marking the side for a bedside thoracentesis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A primary health care provider will perform a right-sided thoracentesis at the bedside. The provider asks the nurse to mark the site so the provider can see another client first. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A procedure that can be done on either side needs site marking, even at the bedside. The mark is made by the licensed practitioner who is accountable for the procedure and will be present. Delegation is limited to a supervised resident or an advanced practice provider who will be present, not the bedside nurse. The time-out happens immediately before the procedure starts, when the team confirms client, site and procedure.",
      sources: [TJC_NPG],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The site should be marked by {0}, and the team should hold the time-out {1}.",
    blanks: [
      {
        options: [
          { text: "the nurse caring for the client", why: "A staff nurse is not among those who may be delegated site marking." },
          { text: "the provider doing the procedure", why: "The accountable practitioner who will be present marks the site." },
          { text: "the unit charge nurse", why: "Charge nurses are not among those who may mark the site." },
          { text: "the client with a skin marker", why: "The client takes part in marking but does not make the mark." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "when the consent form is signed", why: "Consent comes earlier. The time-out is held right before the procedure." },
          { text: "after the fluid is drained", why: "A time-out after the procedure cannot prevent a wrong-site error." },
          { text: "at the start of the nursing shift", why: "A time-out hours early does not confirm the site at the moment of the procedure." },
          { text: "just before the needle is inserted", why: "The time-out takes place immediately before the invasive procedure starts." },
        ],
        correct: 3,
      },
    ],
  },
];
