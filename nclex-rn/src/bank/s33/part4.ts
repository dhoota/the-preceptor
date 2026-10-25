import type { Item } from "@/engine/types";
import { CA_PARTNER, CDC_PARTNER, DSM, ESHRE, HALTER, HOCKENBERRY, NICE_CONDUCT, PAPERNOW, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s33-31", {
      need: "PSY",
      topic: "Discipline in a new stepfamily",
      version: 2,
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 10-year-old's mother remarried 4 months ago. At a clinic visit, the stepfather says the child ignores his rules and tells him, \"You're not my dad.\" He asks the nurse how to make the child obey him. Which advice should the nurse give?",
      rationale:
        "The stepfamily formed only 4 months ago. A stepparent who starts as the main source of discipline often meets resistance before trust exists. The birth parent leads on discipline at first while the stepparent builds a warm bond through time together. Stricter rules from the stepparent tend to raise conflict. Asking to be called Dad pushes a bond the child is not ready for. Pulling away leaves the child without a relationship to build on.",
      sources: [PAPERNOW, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "\"Let the child's mother lead on discipline while you build a bond.\"", why: "Discipline lands better from the birth parent while trust with the stepparent grows." },
      { text: "\"Set stricter rules so the child learns that you are in charge.\"", why: "Firm control before a bond exists tends to raise resistance." },
      { text: "\"Ask the child to call you Dad as a sign of respect.\"", why: "Pressing for a title pushes a bond the child is not ready for." },
      { text: "\"Stay out of the child's life until the child comes to you.\"", why: "Pulling away removes the chance to build a relationship." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-32", {
      need: "PSY",
      topic: "Exhausted parent of an autistic child",
      cjmm: "prioritize",
      process: "caring",
      difficulty: 3,
      stem: "The single mother of a 6-year-old with autism spectrum disorder brings him for a checkup. He wakes most nights, and she sleeps about 4 hours a night. She says, \"I have not had a break in a year, and I am snapping at everyone.\" She denies thoughts of self-harm. Which need should the nurse address first?",
      rationale:
        "The mother sleeps about 4 hours a night, has had no break in a year and is irritable. These are signs of caregiver strain. She denies thoughts of self-harm. Rest is the most pressing need, and respite care gives a trained person to care for the child while she sleeps or recovers. A new therapy, a diet change or a school plan may help later but adds to her load now.",
      sources: [HOCKENBERRY, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "A new behavior therapy program for the child", why: "Therapy may help later but adds appointments to an exhausted parent's load." },
      { text: "A gluten-free diet trial for the child", why: "A diet change adds work and does not address the mother's exhaustion." },
      { text: "Respite care so the mother can rest", why: "Her lack of sleep and breaks is the most pressing need, and respite meets it." },
      { text: "An education plan meeting with the school", why: "School planning matters but does not relieve the strain she reports now." },
    ],
    correct: 2,
  },
  // PULL (s33 review): tests the same point as rn-s11-47, caregiver supports such as a parent group and family help that protect against strain.
  {
    ...meta("rn-s33-33", {
      need: "PSY",
      topic: "Coping statements of an autism caregiver",
      cjmm: "evaluate",
      process: "caring",
      difficulty: 2,
      stem: "The nurse meets again with the father of an 8-year-old with autism spectrum disorder. At the last visit, the father reported feeling worn out and alone. Which two statements by the father show healthy coping? Select two.",
      rationale:
        "The father reported feeling worn out and alone. Joining a parent support group gives him peers who share the experience. A regular evening of care from a relative gives him planned rest. Quitting work to never leave the child, hiding fatigue from his partner, skipping his own care and keeping the child home to avoid stares all raise strain or isolation.",
      sources: [HOCKENBERRY],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I quit my job so I am with him every minute.\"", why: "Giving up work and all time apart deepens isolation and strain." },
      { text: "\"I joined a group for parents of autistic kids.\"", why: "Peer support lowers isolation and shares practical ideas." },
      { text: "\"I stopped telling my wife how tired I am.\"", why: "Hiding feelings from a partner cuts off support." },
      { text: "\"My sister watches him one evening a week.\"", why: "Planned time off gives the caregiver regular rest." },
      { text: "\"I skip my own checkups to make his therapy visits.\"", why: "Neglecting his own health raises the risk of burnout." },
      { text: "\"We stay home so no one sees his meltdowns.\"", why: "Avoiding outings increases isolation for the whole family." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s33-34", {
      need: "PSY",
      topic: "Grief after a failed fertility cycle",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "A 37-year-old client learns that her third cycle of in vitro fertilization has failed. She cries and says, \"My body has failed us again.\" Which response by the nurse is best?",
      rationale:
        "A failed cycle is a real loss that brings grief. Naming the feeling and inviting her to say more lets her express it and shows the nurse is listening. Talk of the next cycle gives false reassurance. Raising adoption now moves past her grief. Saying it is no one's fault, though kind in intent, closes the conversation before she has been heard.",
      sources: [ESHRE, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Many couples succeed on the next try, so stay hopeful.\"", why: "This gives false reassurance and moves away from her feelings." },
      { text: "\"Have you and your partner thought about adoption?\"", why: "Raising other options now skips past her grief." },
      { text: "\"It is no one's fault, so try not to blame yourself.\"", why: "This closes the topic before she has shared her feelings." },
      { text: "\"This is a painful loss. Tell me what it means to you.\"", why: "Naming the loss and inviting her to talk supports grieving." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-35", {
      need: "PSY",
      topic: "Partner notification after an HIV diagnosis",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A 41-year-old client learns he has HIV infection. He tells the nurse, \"Please promise you will not tell my wife. I am not ready to tell her myself.\" Which response by the nurse is best?",
      rationale:
        "The nurse keeps the diagnosis confidential and cannot promise to ignore a partner's risk. Health department partner services can notify partners and offer testing without naming the client. Offering this option protects the wife and the client's privacy. The nurse does not call the wife directly. A spouse has no right to the client's record. A blanket promise of silence ignores the partner's ongoing risk.",
      canada: "In Canada, HIV is reportable in every province and territory, and public health partner notification is mandated. Who carries it out and how varies by province.",
      sources: [CDC_PARTNER, CA_PARTNER],
    }),
    kind: "mc",
    options: [
      { text: "\"The health department can tell her without naming you. Can we discuss that?\"", why: "Partner services notify partners confidentially and protect the client's identity." },
      { text: "\"I will need to call your wife today and tell her about the test.\"", why: "The nurse does not disclose the result directly. Partner services handle notification." },
      { text: "\"I promise that no one will ever learn about this result.\"", why: "This ignores the partner's risk and cannot be honestly promised." },
      { text: "\"Your wife has a legal right to read your medical record.\"", why: "A spouse has no right to the client's record without his consent." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-36", {
      need: "PSY",
      topic: "Planning to tell family about HIV",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 26-year-old client with HIV infection has a suppressed viral load on treatment. He wants to tell his parents about the diagnosis next weekend and feels afraid of their reaction. Which plan should the nurse help him make?",
      rationale:
        "Disclosure is the client's choice, and he has chosen to tell his parents. Rehearsing the words and planning for possible reactions builds confidence. Naming a support person for afterward helps if the talk goes badly. Posting online removes his control over who learns. Waiting for the perfect moment often means the talk never happens. Avoiding any plan leaves him unprepared for a hard reaction.",
      sources: [HALTER, CDC_PARTNER],
    }),
    kind: "mc",
    options: [
      { text: "Post the news online so everyone learns at once", why: "Posting online removes the client's control over who learns and how." },
      { text: "Wait until a moment arises when his parents seem happy", why: "Waiting for an ideal moment often delays the talk indefinitely." },
      { text: "Rehearse the words and plan for possible reactions", why: "Practice and planning build confidence and prepare him for any response." },
      { text: "Skip planning so the talk feels more natural", why: "Without a plan he is less ready for a difficult reaction." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s33-37", {
      need: "PSY",
      topic: "Stomachaches on school mornings",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "For 6 weeks an 8-year-old has had stomachaches on school mornings that are gone by the weekend. The child cries when the mother leaves for work and refuses sleepovers. The child says, \"Something bad will happen to Mom if I am not there.\" Physical exam and growth are normal. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Fear of being apart from the mother, fear that harm will come to her, refusal to sleep away and stomachaches on school days have lasted 6 weeks. Lasting 4 weeks or more in a child, these fit separation anxiety disorder. Worry in generalized anxiety covers many topics, not one person. Nothing suggests inattention or a physical illness, and the exam is normal.",
      refs: ["In children, separation anxiety disorder requires symptoms lasting at least 4 weeks."],
      sources: [DSM, HOCKENBERRY],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The child's findings are most consistent with {0}, as shown by {1}.",
    blanks: [
      {
        options: [
          { text: "generalized anxiety disorder", why: "Generalized anxiety covers many topics. This child's fear centers on the mother." },
          { text: "separation anxiety disorder", why: "Fear of separation and of harm to the mother for 6 weeks fits this disorder." },
          { text: "attention-deficit/hyperactivity disorder", why: "The stem gives no inattention, impulsivity or hyperactivity." },
          { text: "a gastrointestinal illness", why: "Pain only on school mornings with a normal exam does not point to a gut illness." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "normal growth on exam", why: "Normal growth points away from illness but does not support an anxiety disorder." },
          { text: "pain that is gone by the weekend", why: "This pattern hints at school-day stress but does not show fear of separation." },
          { text: "fear that harm will come to the mother", why: "Worry about harm to the attachment figure is a core feature of this disorder." },
          { text: "crying during a stomachache", why: "Crying with pain is common and does not single out any disorder." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s33-38", {
      need: "PSY",
      topic: "Getting an anxious child back to class",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "An 8-year-old with separation anxiety disorder has missed 9 school days this month. The parent asks the school nurse, \"Should I keep my child home until the anxiety gets better?\" Which response by the nurse is best?",
      rationale:
        "Staying home brings short-term relief, so the avoidance grows stronger. A steady, planned return with support from the school team lets the child learn that separation is safe. Home tutoring for the rest of the year rewards avoidance. Letting the child decide each morning makes attendance depend on how anxious the child feels that day.",
      sources: [HOCKENBERRY, DSM],
    }),
    kind: "mc",
    options: [
      { text: "\"Yes, staying home will let the anxiety settle first.\"", why: "Time at home rewards avoidance and makes return harder." },
      { text: "\"Home tutoring for the rest of the year is safest.\"", why: "Long-term home study strengthens the avoidance pattern." },
      { text: "\"Let your child decide each morning whether to go.\"", why: "Daily choice ties attendance to the child's anxiety level." },
      { text: "\"Let us plan a steady return with the school team.\"", why: "A supported, gradual return teaches the child that separation is safe." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-39", {
      need: "PSY",
      topic: "Rule breaking that harms others",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 13-year-old is referred by the court. Over the past year the teen set fire to a neighbor's shed, stole from several stores and threatened a classmate with a knife. The teen often stays out all night despite house rules. Drag one choice into each blank to complete the sentence.",
      rationale:
        "Fire setting, theft, threats with a weapon and staying out all night over a year violate the rights of others and major rules. These fit conduct disorder. Oppositional defiant disorder centers on angry, argumentative and defiant behavior toward authority without serious harm to others. Distractibility suggests attention problems. Arguing with adults alone would point to oppositional defiance rather than conduct disorder.",
      sources: [DSM, NICE_CONDUCT],
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The behaviors fit {0} because {1}.",
    targets: ["Disorder", "Reason"],
    tokens: [
      { text: "oppositional defiant disorder", why: "This disorder involves defiance and anger without serious harm to others." },
      { text: "conduct disorder", why: "Aggression, fire setting, theft and serious rule breaking fit conduct disorder." },
      { text: "the teen argues with adults", why: "Arguing with adults alone fits oppositional defiance, not this pattern." },
      { text: "the acts violate the rights of others", why: "Harm to people and property is the defining feature of conduct disorder." },
      { text: "the teen is easily distracted", why: "Distractibility suggests an attention problem, not conduct disorder." },
      { text: "intermittent explosive disorder", why: "This disorder involves sudden outbursts, not planned theft and fire setting." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s33-40", {
      need: "PSY",
      topic: "Parent training for oppositional behavior",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 7-year-old has oppositional defiant disorder. The parents say every request turns into a fight. Which strategies should the nurse include in the plan for the family? Select all that apply.",
      rationale:
        "Parent training is the main treatment for oppositional behavior at this age. It teaches parents to praise specific good behavior, give short clear instructions and apply the same consequence each time. A group parent training program delivers these skills. Long debates before each consequence give the child more chances to argue. Medication is not a routine treatment for oppositional behavior. Shouting models the behavior the parents want to stop.",
      refs: ["Group parent training is recommended for parents of children aged 3 to 11 with oppositional or conduct problems."],
      sources: [NICE_CONDUCT, HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Ask about a medicine as the first treatment", why: "Medication is not a routine treatment for oppositional behavior in children." },
      { text: "Give short, clear instructions", why: "Brief, specific requests are easier to follow and leave less room to argue." },
      { text: "Raise the voice so rules are taken seriously", why: "Shouting models the behavior the parents want to reduce." },
      { text: "Praise specific good behavior right away", why: "Prompt, specific praise increases the behavior parents want." },
      { text: "Explain each rule at length before any consequence", why: "Long explanations invite more arguing." },
      { text: "Apply the same consequence each time", why: "Consistent consequences make limits predictable." },
      { text: "Join a group parent training program", why: "Group parent training is recommended for children aged 3 to 11." },
    ],
    correct: [1, 3, 5, 6],
  },
];
