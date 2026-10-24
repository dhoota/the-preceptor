import type { Item } from "@/engine/types";
import { AAP_GENETIC, ACR_MR_2013, ANA_CODE, ASCIA_LATEX, GINA, HIPAA, MR_ZONES, TJC_NPG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s30-11", {
      need: "MOC",
      topic: "Parent asks to test a teen for BRCA1",
      cjmm: "generate",
      process: "communication",
      difficulty: 4,
      stem: "A mother who carries a BRCA1 variant asks the clinic nurse to arrange BRCA1 testing for her healthy 13-year-old daughter. The mother says, \"I want to know now so we can plan.\" No screening or treatment for this variant would begin before adulthood. Which response by the nurse is best?",
      rationale:
        "Predictive testing of a child for an adult-onset condition is usually deferred when no action in childhood would follow. Waiting keeps the daughter's own choice about testing, and her right not to know, for adulthood. The nurse explains this and can refer the mother for genetic counseling. A parent's consent does not make early testing advisable. Hiding a result from the child does not solve the problem of a choice taken from her.",
      sources: [AAP_GENETIC],
    }),
    kind: "mc",
    options: [
      { text: "\"Testing now will let her begin cancer screening this year.\"", why: "The stem states that no screening for this variant starts before adulthood." },
      { text: "\"Since you can consent for her, I will set up the test today.\"", why: "Consent does not change the advice to defer predictive testing for an adult-onset condition." },
      { text: "\"Experts advise waiting until she can decide for herself as an adult.\"", why: "Deferral protects the child's future choice when no childhood action would follow the result." },
      { text: "\"We can test her now and keep the result from her for years.\"", why: "Hidden testing still removes her choice and creates a secret within the family." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s30-12", {
      need: "MOC",
      topic: "Envelope of cash at discharge",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "At discharge, a client's family hands the nurse an envelope with $200 in cash. The family says, \"Please buy yourself something nice.\" Hospital policy allows staff to accept only small shared items, such as food for the unit. What should the nurse say?",
      rationale:
        "The code of ethics directs nurses to follow institutional policy on gifts from clients and families. This policy allows only small shared items, so cash is declined. The nurse thanks the family warmly so the refusal does not feel like a rejection. Sharing the money, taking it at home or taking it because care has ended all break the same policy.",
      sources: [ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "\"Thank you, but I am not allowed to accept cash.\"", why: "Declining the cash follows policy, and the thanks preserves the relationship." },
      { text: "\"I will accept it and split it with the night staff.\"", why: "Shared cash is still a cash gift, which the policy does not allow." },
      { text: "\"You can mail it to my home address after you leave.\"", why: "Moving the gift outside the hospital breaks the policy and the professional boundary." },
      { text: "\"I can take it now because the stay is over.\"", why: "The gift arises from the care relationship, so the end of the stay does not change the policy." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-13", {
      need: "MOC",
      topic: "Spouse owns shares in a bidding vendor",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A staff nurse joins a hospital committee that will choose a new brand of infusion pump. The nurse's spouse owns a large share of one of the companies bidding for the contract. What should the nurse do?",
      rationale:
        "A financial interest held by a spouse can sway, or appear to sway, a purchasing choice. A conflict exists even when the nurse feels able to judge fairly. The code of ethics asks nurses to identify and disclose conflicts and follow workplace policy. Hospitals must have a written policy on how conflicts are disclosed and managed. Waiting for data or selling shares later leaves the conflict in place during the decision.",
      sources: [ANA_CODE, TJC_NPG],
    }),
    kind: "mc",
    options: [
      { text: "Judge the pumps fairly without telling the committee", why: "A conflict exists even if the nurse is not swayed. The appearance of bias must also be managed." },
      { text: "Vote only after the trial results come in", why: "Waiting for data does not remove the financial interest behind the vote." },
      { text: "Ask the spouse to sell the shares after the vote", why: "A sale after the decision leaves the conflict in place while the choice is made." },
      { text: "Disclose the interest and follow the conflict policy", why: "Disclosure lets the committee manage the conflict, which may include stepping back from the vote." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s30-14", {
      need: "MOC",
      topic: "Visits from a dressing sales representative",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A sales representative for a wound dressing company visits a unit where the nurse leads the product evaluation team. Which actions by the nurse follow conflict of interest principles? Select all that apply.",
      rationale:
        "A nurse who chooses products must keep personal gain out of the decision. Declining a gift card and an upscale dinner keeps the choice free of personal benefit. Disclosing a past paid role for the company lets the team weigh the conflict. Basing the choice on outcome and cost data puts clients first. Letting a representative read client notes breaches privacy. Trading a product trial for a free trip ties the decision to a reward.",
      sources: [ANA_CODE, TJC_NPG, HIPAA],
    }),
    kind: "sata",
    options: [
      { text: "Declines a gift card offered for attending a demonstration", why: "Refusing personal gifts keeps the product decision free of personal benefit." },
      { text: "Lets the representative read current clients' wound notes", why: "A sales representative has no right to client health information." },
      { text: "Tells the team about a past paid speaking role for the company", why: "Disclosure lets the team weigh and manage the conflict." },
      { text: "Bases the choice on wound outcome and cost data", why: "Evidence on outcomes and cost keeps the decision focused on clients." },
      { text: "Agrees to trial the dressing in return for a conference trip", why: "Linking a trial to a reward gives the nurse a personal stake in the result." },
      { text: "Accepts dinner at an upscale restaurant from the representative", why: "A costly meal from a vendor creates an obligation that can sway the choice." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s30-15", {
      need: "MOC",
      topic: "Draft report of misstated night staffing",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 4,
      stem: "A nurse drafts an internal report about night staffing records on the unit. A colleague reviews the draft before it is sent through the hospital's compliance process. Click to highlight the statements that weaken the report.",
      rationale:
        "A report that raises a practice concern rests on factual documentation. Dates, counts, client waits and attached staffing sheets are facts a reviewer can check. Calling the supervisor a liar, claiming everyone knows and saying management never cares are opinions that invite a dismissal. Posting in a staff group chat bypasses the proper channel. Photos that show client names breach privacy and are not needed to prove the staffing gap.",
      sources: [ANA_CODE, HIPAA],
    }),
    kind: "highlight",
    passage:
      "[[On 4 nights this month the staffing sheet listed 5 nurses]]. [[I counted 3 nurses on duty on each of those nights]]. [[The supervisor is obviously lying to make the unit look good]]. [[Everyone on nights knows this has gone on for years]]. [[On 2 of those nights, clients waited over 30 minutes for pain medication]]. [[I posted a summary in a staff group chat last night]]. [[I attached copies of the 4 staffing sheets]]. [[I took phone photos of the assignment board, which lists client names]]. [[Management here never cares about anything we say]].",
    spans: [
      { text: "On 4 nights this month the staffing sheet listed 5 nurses", why: "Dates and counts can be checked against the records." },
      { text: "I counted 3 nurses on duty on each of those nights", why: "A direct observation with numbers supports the concern." },
      { text: "The supervisor is obviously lying to make the unit look good", why: "This states motive and blame, which the nurse cannot prove." },
      { text: "Everyone on nights knows this has gone on for years", why: "This is hearsay with no dates or sources to check." },
      { text: "On 2 of those nights, clients waited over 30 minutes for pain medication", why: "A specific effect on care shows why the gap matters." },
      { text: "I posted a summary in a staff group chat last night", why: "Sharing outside the established process bypasses the proper channel." },
      { text: "I attached copies of the 4 staffing sheets", why: "Copies of the records provide evidence the reviewer can verify." },
      { text: "I took phone photos of the assignment board, which lists client names", why: "Client names are not needed to show the gap, and the photos breach privacy." },
      { text: "Management here never cares about anything we say", why: "A sweeping complaint adds emotion and no evidence." },
    ],
    correct: [2, 3, 5, 7, 8],
  },
  {
    ...meta("rn-s30-16", {
      need: "MOC",
      topic: "Steps after seeing an open medication cart",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "Over 2 weeks a nurse sees a colleague leave the medication cart open and unattended in the hallway several times. No client has been harmed. There is time for a private conversation. Place the nurse's steps in the order the code of ethics describes for acting on a practice concern.",
      rationale:
        "When time and conditions allow, the nurse first raises the concern with the person involved. If the practice continues, the nurse tells the responsible manager. The nurse then escalates within the organization as needed. If the concern is still not corrected, the nurse reports it to an outside authority such as a regulator or accreditor. A social media post is not an established reporting process.",
      sources: [ANA_CODE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Report the concern to the nurse manager", why: "The manager is told when the colleague's practice does not change." },
      { text: "Post the concern on a staff social media page", why: "A public post is not an established process and can breach privacy." },
      { text: "Report to an outside regulator if it stays uncorrected", why: "External reporting comes last, when internal steps have failed." },
      { text: "Speak privately with the colleague about the cart", why: "The person involved hears the concern first when time allows." },
      { text: "Escalate within the organization if it continues", why: "Escalation follows when the manager's response does not correct the problem." },
    ],
    correct: [3, 0, 4, 2],
  },
  {
    ...meta("rn-s30-17", {
      need: "SIPC",
      topic: "Preparing a room for a child with latex allergy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 9-year-old with spina bifida and a documented latex allergy is admitted the evening before a planned bladder procedure. The nurse prepares the room and plans care. Which measures should the nurse include? Select all that apply.",
      rationale:
        "A latex-safe room keeps latex away from the child. Signs at every entrance alert all staff. Synthetic gloves are used for all care. Skin under a blood pressure cuff is covered. Other departments are told before the child goes for tests. Premedication does not reliably prevent a reaction. Drugs are not drawn through rubber stoppers. Powdered latex gloves anywhere near the room can carry latex into the air.",
      sources: [ASCIA_LATEX],
    }),
    kind: "sata",
    options: [
      { text: "Post latex allergy signs at each room entrance", why: "Signs at every entrance warn all staff before they enter." },
      { text: "Rely on premedication to prevent a reaction", why: "Steroids and antihistamines have not been shown to prevent serious latex reactions." },
      { text: "Use synthetic gloves for all care in the room", why: "Gloves are the most likely source of a serious reaction, so only synthetic gloves are used." },
      { text: "Draw up medicines through the vial's rubber stopper", why: "Rubber stoppers may contain latex, so drugs are not drawn through them." },
      { text: "Cover the arm before applying the blood pressure cuff", why: "A barrier protects the skin from latex in cuffs and tubing." },
      { text: "Tell other departments about the allergy before tests", why: "Departments the child visits must also keep latex away." },
      { text: "Keep powdered latex gloves in the room for visitors", why: "Powder from latex gloves carries latex into the air of the room." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s30-18", {
      need: "MOC",
      topic: "Shifts cut after a compliance report",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "Two weeks after a nurse reported falsified staffing records through the hospital's compliance line, the manager cuts the nurse's shifts from 3 to 1 a week with no explanation. Coworkers say the manager has called the nurse a troublemaker. What should the nurse do?",
      rationale:
        "Nurses who report practice concerns in good faith should be protected from reprisal, such as an unfavorable change in work. A sudden cut in shifts after the report may be retaliation. The nurse records dates and facts and reports the change through the compliance process. Factual records support every step that follows. Withdrawing the report or accepting the cut leaves both problems in place. A public confrontation adds conflict and no protection.",
      sources: [ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Withdraw the report so the shifts are restored", why: "Withdrawing leaves the original concern uncorrected and does not stop reprisal." },
      { text: "Record the changes and report the retaliation to compliance", why: "A factual record reported through the proper channel invokes the protection owed to reporters." },
      { text: "Confront the manager about it in front of the staff", why: "A public confrontation is unprofessional and does not engage any protection." },
      { text: "Accept the cut because managers set the schedules", why: "Schedules are the manager's role, but a cut used as reprisal is not acceptable." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s30-19", {
      need: "SIPC",
      topic: "Cardiac arrest inside the MRI scanner room",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A nurse accompanies an intubated client into the MRI scanner room for a brain scan. During the scan the client loses a pulse. The MRI technologist stops the scan and calls for help. Which action should the nurse take?",
      rationale:
        "A resuscitation is never run inside the scanner room. Code teams carry defibrillators, oxygen tanks and other metal items that the magnet can pull in as projectiles. Staff stabilize the client and move the client out of Zone IV to a designated code area before full resuscitation. Quenching the magnet is not done when the client can be moved out quickly.",
      sources: [MR_ZONES, ACR_MR_2013],
    }),
    kind: "mc",
    options: [
      { text: "Bring the code cart and defibrillator into the scanner room", why: "Unscreened equipment can become a projectile in the magnetic field." },
      { text: "Ask the technologist to quench the magnet before acting", why: "A quench is not used when the client can be moved out quickly, and it delays care." },
      { text: "Move the client out of the scanner room to the code area", why: "Resuscitation takes place in a designated area outside Zone IV, away from the magnet." },
      { text: "Begin full resuscitation on the scanner table", why: "A code run in Zone IV draws metal equipment and responders into the field." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s30-20", {
      need: "MOC",
      topic: "Limits of genetic nondiscrimination law",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 35-year-old client tests positive for a Lynch syndrome variant and has no cancer. The client asks about genetic discrimination, and the nurse explains the Genetic Information Nondiscrimination Act. Which two statements by the client show correct understanding? Select two.",
      rationale:
        "The Act bars health insurers from using genetic information to set eligibility or premiums. It bars employers with 15 or more staff from using it in decisions such as promotion. It does not cover life, disability or long-term care insurance. Employers with fewer than 15 staff are outside the Act, although some states add protections.",
      refs: ["The Genetic Information Nondiscrimination Act does not apply to employers with fewer than 15 employees."],
      sources: [GINA],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"My health insurer cannot raise my premium because of this result.\"", why: "Health insurers may not use genetic information to set premiums." },
      { text: "\"Life insurers cannot use my result under this law.\"", why: "The Act does not cover life insurance." },
      { text: "\"My employer of 200 staff cannot use it to decide a promotion.\"", why: "Employers with 15 or more staff may not use genetic information in job decisions." },
      { text: "\"Long-term care insurers must ignore my result under this law.\"", why: "The Act does not cover long-term care insurance." },
      { text: "\"The law protects my job at a company with 6 workers.\"", why: "The Act does not apply to employers with fewer than 15 employees." },
      { text: "\"Disability insurers cannot ask me about my result.\"", why: "The Act does not cover disability insurance." },
    ],
    correct: [0, 2],
  },
];
