import type { Item } from "@/engine/types";
import { BENZOCAINE, JUICE, MILESTONES, PEANUT, POTTER, TEETHING_JEWELRY, TOUHY, WONG, JARVIS, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s10-01", {
      topic: "Persistent startle reflex",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 7-month-old at a well-child visit throws both arms out, spreads the fingers and then pulls the arms in when the exam table is bumped. The infant sits without support and passes a block from hand to hand. What should the nurse do?",
      rationale:
        "The response to the bumped table is the Moro reflex. It normally fades and is gone by 6 months. At 7 months it should be absent. A primitive reflex that persists can signal a neurologic problem, so the provider needs to know now. The motor skills in the stem are on track, but they do not cancel out the finding.",
      refs: ["The Moro reflex normally fades and is gone by 6 months of age."],
      sources: [WONG, JARVIS],
    }),
    kind: "mc",
    options: [
      { text: "Record the reflex as expected for age", why: "The Moro reflex is gone by 6 months. It is not expected at 7 months." },
      { text: "Report the persistent Moro reflex", why: "A primitive reflex past the age it should fade needs neurologic follow-up." },
      { text: "Recheck the reflex at the next visit", why: "Waiting delays an evaluation the finding already calls for." },
      { text: "Teach the parent to swaddle the infant", why: "Swaddling does not address a persistent reflex and is unsafe once an infant can roll." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-02", {
      topic: "Fontanels at 4 months",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse palpates the head of a healthy 4-month-old who is sitting upright on the parent's lap and is calm. Which finding is expected?",
      rationale:
        "At 4 months the anterior fontanel is still open. It should feel soft and flat when the infant is upright and calm. The posterior fontanel closes by about 2 months, so an open one at 4 months is not expected. A closed anterior fontanel is too early. A bulging fontanel in a calm, upright infant suggests raised intracranial pressure.",
      refs: ["The posterior fontanel closes by about 2 months. The anterior fontanel closes by 12 to 18 months."],
      sources: [WONG, JARVIS],
    }),
    kind: "mc",
    options: [
      { text: "Anterior fontanel closed", why: "The anterior fontanel closes at 12 to 18 months. Closure at 4 months is early and needs follow-up." },
      { text: "Posterior fontanel open 1 cm", why: "The posterior fontanel closes by about 2 months. It should not be open at 4 months." },
      { text: "Anterior fontanel bulging", why: "Bulging in a calm, upright infant suggests raised intracranial pressure." },
      { text: "Anterior fontanel soft and flat", why: "An open, soft and flat anterior fontanel is expected at 4 months." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-03", {
      topic: "Expected infant weight gain",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 3-month-old asks how much the baby should weigh by the first birthday. The infant weighed 3.2 kg at birth and is growing along the same percentile. Which weight should the nurse give as a typical estimate for 12 months?",
      rationale:
        "A healthy infant about triples the birth weight by 12 months. The birth weight here is 3.2 kg. Tripling it gives 3.2 * 3 = 9.6 kg. Doubling gives the typical weight at 5 to 6 months, not at 12 months.",
      refs: ["Infant birth weight about doubles by 5 to 6 months and triples by 12 months."],
      calc: { expr: "3.2 * 3", answer: 9.6, unit: "kg", round: 1, steps: ["3.2 * 3 = 9.6"] },
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "4.8 kg", why: "This is only half again the birth weight. Most infants pass it in the first months." },
      { text: "6.4 kg", why: "This is double the birth weight, which is typical at 5 to 6 months." },
      { text: "9.6 kg", why: "This is triple the birth weight of 3.2 kg, the typical weight at 12 months." },
      { text: "12.8 kg", why: "This is 4 times the birth weight, more than expected at 12 months." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-04", {
      topic: "Starting solid foods",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "The parent of a healthy 6-month-old who is breastfed asks about starting solid foods. The infant has no eczema and no known food allergy. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Iron stores from birth run low near 6 months, so iron-rich foods such as pureed meat come early. An infant without eczema or egg allergy can have peanut foods in a smooth, safe form with other solids. Early peanut exposure lowers the risk of peanut allergy. Honey waits until after 12 months because of infant botulism. Cow's milk as the main drink and fruit juice also wait until after 12 months.",
      refs: [
        "Honey is avoided before 12 months because of infant botulism.",
        "Cow's milk as a main drink and fruit juice are not advised before 12 months.",
      ],
      canada: "Health Canada and the Canadian Paediatric Society advise homogenized (3.25%) cow's milk from 9 to 12 months, not after 12 months. It is still not a main drink at 6 months.",
      sources: [WONG, PEANUT, JUICE, { body: "Health Canada, Canadian Paediatric Society, Dietitians of Canada, Breastfeeding Committee for Canada", work: "Nutrition for Healthy Term Infants: Recommendations from Six to 24 Months", year: 2014, url: "https://www.canada.ca/en/health-canada/services/canada-food-guide/resources/infant-feeding/nutrition-healthy-term-infants-recommendations-birth-six-months/6-24-months.html" }],
    }),
    kind: "sata",
    options: [
      { text: "Offer iron-rich foods such as pureed meat", why: "Iron stores fall near 6 months, so iron-rich foods are a good first choice." },
      { text: "Replace breast milk with whole cow's milk", why: "Cow's milk as the main drink waits until after 12 months. It is low in iron." },
      { text: "Introduce peanut foods in a smooth form", why: "Without eczema or egg allergy, early peanut foods lower the risk of peanut allergy." },
      { text: "Add rice cereal to the bottle at night", why: "Cereal in a bottle raises the risk of choking and overfeeding. It does not help sleep." },
      { text: "Avoid honey until after the first birthday", why: "Honey can carry spores that cause infant botulism before 12 months." },
      { text: "Give 120 mL of fruit juice each day", why: "Juice is not advised before 12 months. It adds sugar and displaces milk." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s10-05", {
      topic: "Teething comfort",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 7-month-old says the infant drools, chews on both hands and fusses because a first tooth is coming in. Which comfort measure should the nurse recommend?",
      rationale:
        "A chilled, firm rubber teething ring gives counter-pressure and cold to sore gums. It is safe to chew. Benzocaine gels can cause methemoglobinemia, and the FDA warns against them for teething. Amber teething necklaces carry a risk of choking and strangulation. Juice in a bottle at nap time bathes the new teeth in sugar and causes decay.",
      sources: [BENZOCAINE, TEETHING_JEWELRY, WONG],
    }),
    kind: "mc",
    options: [
      { text: "Offer a chilled rubber teething ring", why: "Cold and firm pressure soothe the gums and the ring is safe to chew." },
      { text: "Rub a benzocaine gel on the gums", why: "Benzocaine can cause methemoglobinemia. The FDA warns against it for teething." },
      { text: "Put an amber teething necklace on", why: "Teething jewelry can cause choking and strangulation." },
      { text: "Give a bottle of juice at nap time", why: "Sugar pooling on the teeth during sleep causes early tooth decay." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-06", {
      topic: "Play in toddlers",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "Two 2-year-olds in a pediatric playroom sit side by side. Each builds a separate tower of blocks and neither offers to share. Which play activity should the nurse plan for these children?",
      rationale:
        "Toddlers engage in parallel play. They play beside other children with similar toys but not with them. Matching sets of blocks fit this stage and avoid conflict over one toy. Toddlers are not yet able to share or take turns well. Rule-based games suit school-age children. Shared pretend stories suit preschoolers in associative and cooperative play.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Ask them to take turns with one block set", why: "Toddlers are not yet able to share or wait their turn well." },
      { text: "Give each child a matching set of blocks", why: "Matching toys side by side fit the parallel play of toddlers." },
      { text: "Set up a board game with simple rules", why: "Games with rules suit school-age children, not toddlers." },
      { text: "Have them act out a shared pretend story", why: "Shared pretend play develops in the preschool years." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-07", {
      topic: "Temper tantrum response",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "A 2-year-old in a clinic waiting room screams and kicks on the floor after the parent refuses a snack. The child is in no danger of injury. What should the nurse advise the parent to do?",
      rationale:
        "Tantrums are common as toddlers seek autonomy. The best response is to stay close for safety and to ignore the outburst. This avoids rewarding it. Giving the snack teaches that tantrums work. A toddler in a tantrum cannot follow an explanation. Leaving the child alone in another room is unsafe and can frighten the child.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Give the snack so the screaming stops", why: "Giving in rewards the tantrum and makes more tantrums likely." },
      { text: "Explain why the snack is not allowed", why: "A toddler in a tantrum cannot take in reasons. Talk after the child is calm." },
      { text: "Stay nearby and ignore the outburst", why: "Staying close keeps the child safe. Ignoring the behavior avoids rewarding it." },
      { text: "Leave the child alone in another room", why: "Leaving a toddler alone is unsafe and can frighten the child." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-08", {
      topic: "Language milestone at 2 years",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "During a routine health check of a 2-year-old girl, the nurse reviews her speech, movement and self-care skills with the parent. Which of the parent's descriptions calls for further developmental evaluation?",
      rationale:
        "By 24 months most children put at least two words together. A child who uses only single words at 2 years has a language delay that needs screening and possible referral. Running, kicking a ball, pointing to pictures in a book on request and eating with a spoon are all expected by 24 months.",
      refs: ["By 24 months most children say at least two words together, run, kick a ball, point to pictures in a book when asked and eat with a spoon."],
      sources: [MILESTONES],
    }),
    kind: "mc",
    options: [
      { text: "\"She runs well and kicks a ball.\"", why: "Running and kicking a ball are expected by 24 months." },
      { text: "\"She points to pictures when I ask.\"", why: "Pointing to pictures in a book on request is expected by 24 months." },
      { text: "\"She feeds herself with a spoon.\"", why: "Eating with a spoon is expected by 24 months." },
      { text: "\"She says single words but no pairs.\"", why: "Most children join two words by 24 months. Single words alone need follow-up." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-09", {
      topic: "Life review in late adulthood",
      cjmm: "analyze",
      process: "caring",
      difficulty: 2,
      stem: "An 83-year-old resident of a long-term care facility often tells staff stories about raising a family and working as a teacher. A new staff member says the stories take up too much time. Which response by the nurse is best?",
      rationale:
        "Late adulthood is the stage of ego integrity versus despair. Reviewing past life events helps an older adult find meaning and accept the life lived. Listening supports this task. Vivid memories of the distant past are not a sign of dementia. Redirecting the resident blocks the life review. Telling stories about the past is a way of facing aging, not avoiding it.",
      sources: [TOUHY, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Reviewing her life helps her find meaning.\"", why: "Life review supports ego integrity in late adulthood." },
      { text: "\"She may have early signs of dementia.\"", why: "Clear memories of the distant past do not suggest dementia." },
      { text: "\"Try to redirect her to current events.\"", why: "Redirecting her blocks a healthy developmental task." },
      { text: "\"She is avoiding her feelings about aging.\"", why: "Life review is a way of facing aging, not avoiding it." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-10", {
      topic: "Talking with a client with presbycusis",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 78-year-old client has age-related hearing loss and does not use hearing aids. The nurse prepares to teach the client about a new diet. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Age-related hearing loss affects high-pitched sounds first. Facing the client in good light allows lip reading. Removing background noise helps the client pick out speech. A moderate, even pace and rephrasing a missed sentence improve understanding. A higher pitch is harder to hear. Shouting distorts words. Speaking from behind removes visual cues.",
      sources: [TOUHY, JARVIS],
    }),
    kind: "sata",
    options: [
      { text: "Face the client in good light", why: "Seeing the face allows lip reading and reading of expressions." },
      { text: "Raise the pitch of the voice", why: "High-pitched sounds are lost first in age-related hearing loss." },
      { text: "Turn off the television", why: "Background noise makes speech harder to pick out." },
      { text: "Shout each word clearly", why: "Shouting distorts the sounds of words and can seem angry." },
      { text: "Speak at a moderate, even pace", why: "A steady pace gives the client time to process each phrase." },
      { text: "Rephrase a missed sentence", why: "Different words can contain sounds the client hears better." },
      { text: "Stand behind the client to speak", why: "Speaking from behind removes the visual cues the client relies on." },
    ],
    correct: [0, 2, 4, 5],
  },
];
