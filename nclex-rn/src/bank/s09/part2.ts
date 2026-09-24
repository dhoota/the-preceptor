import type { Item } from "@/engine/types";
import { APGAR, BILI, BREASTFEEDING, CORD, LOWDERMILK, PERINATAL_MH, PERRY, SAFE_SLEEP, WEIGHT_LOSS, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s09-11", {
      topic: "Distinguishing true from false labor",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client at 39 weeks of gestation comes to the birth unit after 3 hours of contractions. The nurse assesses her on arrival and again 2 hours later. Which finding indicates true labor?",
      rationale:
        "Progressive dilation of the cervix is the finding that confirms true labor. A change from 1 cm to 3 cm over 2 hours shows the cervix is responding to contractions. Contractions that ease with walking or a warm bath, and discomfort felt only in the lower abdomen, are typical of false labor.",
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Contractions ease when she walks", why: "Contractions that ease with activity are typical of false labor. True labor contractions grow stronger with walking." },
      { text: "Discomfort felt in the lower abdomen only", why: "Pain limited to the lower abdomen is typical of false labor. True labor pain often starts in the back." },
      { text: "Contractions stop after a warm bath", why: "Contractions that stop with rest or a bath point to false labor." },
      { text: "Cervix changed from 1 cm to 3 cm dilated", why: "Progressive cervical dilation is the defining sign of true labor." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s09-12", {
      topic: "Boggy fundus after birth",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client gave birth vaginally 4 hours ago with an epidural. She has not voided since the birth. The fundus is boggy, 2 cm above the umbilicus and displaced to the right. Lochia rubra has soaked one pad in the past hour. BP is 118/74 mmHg and heart rate 88/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A full bladder pushes the uterus up and to one side and keeps it from contracting. The fundus is boggy, above the umbilicus and shifted right, and she has not voided in 4 hours. The nurse massages the fundus until firm and helps her void or inserts a catheter. Fundal tone and lochia amount show whether bleeding is under control. BP 118/74 mmHg and heart rate 88/minute do not show shock.",
      refs: ["After birth the fundus should be firm, midline and at or below the umbilicus. A pad soaked within 1 hour is heavy lochia."],
      sources: [LOWDERMILK, PERRY],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Retained placental fragments", why: "Retained tissue causes bleeding, but it does not shift the fundus to one side. The full bladder explains the shift." },
      { text: "Laceration of the birth canal", why: "A laceration bleeds while the fundus stays firm. This fundus is boggy." },
      { text: "Uterine atony from a full bladder", why: "A distended bladder displaces the uterus and stops it contracting, so it bleeds." },
      { text: "Hypovolemic shock", why: "BP 118/74 mmHg and heart rate 88/minute do not show shock." },
    ],
    actions: [
      { text: "Help the client void or insert a catheter", why: "Emptying the bladder lets the uterus return to midline and contract." },
      { text: "Apply an ice pack to the perineum", why: "Ice eases perineal swelling. It does not treat a boggy uterus." },
      { text: "Massage the fundus until it is firm", why: "Massage stimulates the uterus to contract and slows bleeding." },
      { text: "Place the client in Trendelenburg position", why: "Trendelenburg is not used for postpartum bleeding and does not firm the uterus." },
      { text: "Recheck the fundus in 4 hours", why: "Waiting lets the bleeding continue. The uterus needs care now." },
    ],
    parameters: [
      { text: "Deep tendon reflexes", why: "Reflexes are tracked with magnesium sulfate. They do not show uterine bleeding." },
      { text: "Fundal tone and position", why: "A firm, midline fundus shows the uterus is contracting after the bladder is empty." },
      { text: "Perineal edema and bruising", why: "Perineal swelling is a comfort concern. It does not track uterine bleeding." },
      { text: "Breast fullness at feeds", why: "Breast fullness relates to lactation. It does not track bleeding." },
      { text: "Lochia amount on pads", why: "Pad counts show whether the heavy flow is slowing." },
    ],
    correct: { condition: 2, actions: [0, 2], parameters: [1, 4] },
  },
  {
    ...meta("rn-s09-13", {
      topic: "Expected lochia on day 5",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client who gave birth vaginally 5 days ago calls the postpartum nurse line with questions about her bleeding. Which finding reported by the client is expected at this time?",
      rationale:
        "Lochia rubra is bright red and lasts only the first few days. By day 5 the flow is usually lochia serosa, which is pinkish brown and lighter. Large clots, a return to red flow after it had turned pink, and a foul odor are not expected. They suggest retained tissue, subinvolution or infection.",
      refs: ["Lochia rubra lasts about 1 to 3 days after birth, lochia serosa from about day 4 to day 10, and lochia alba after that."],
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Bright red flow with clots the size of a plum", why: "Large clots at day 5 suggest retained tissue or subinvolution." },
      { text: "Pinkish brown flow that is lighter than before", why: "Lochia serosa is expected from about day 4 to day 10." },
      { text: "Flow that turned red again after being pink", why: "Return of red flow suggests bleeding from the placental site or retained tissue." },
      { text: "Flow with a foul odor like spoiled meat", why: "A foul odor suggests endometritis. It needs report." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-14", {
      topic: "Signs of effective breastfeeding",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse observes a client breastfeeding her 2-day-old newborn. Which findings show that the newborn is feeding effectively? Select all that apply.",
      rationale:
        "A good latch has the lips flanged out and much of the areola in the mouth. Audible swallowing shows milk transfer. Clicking sounds and dimpled cheeks show the newborn is losing suction. Nipple pain through the whole feed suggests a shallow latch.",
      sources: [BREASTFEEDING, PERRY],
    }),
    kind: "sata",
    options: [
      { text: "Lips are flanged outward", why: "Flanged lips seal the breast and show a deep latch." },
      { text: "Clicking sounds during sucking", why: "Clicking means the newborn is breaking suction, a sign of a poor latch." },
      { text: "Audible swallowing after sucks", why: "Swallowing sounds show that milk is transferring." },
      { text: "Cheeks dimple inward with each suck", why: "Dimpled cheeks suggest the tongue is not placed well." },
      { text: "Client has nipple pain for the whole feed", why: "Pain that lasts through the feed suggests a shallow latch." },
      { text: "Mouth covers much of the areola", why: "A wide mouth over the areola compresses the milk ducts well." },
    ],
    correct: [0, 2, 5],
  },
  {
    ...meta("rn-s09-15", {
      topic: "One-minute Apgar score",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "One minute after birth, a newborn has a heart rate of 110/minute and a weak, irregular cry. The arms and legs show some flexion. The newborn grimaces when the soles are flicked. The body is pink with blue hands and feet. What is the Apgar score?",
      rationale:
        "A heart rate of 110/minute scores 2. A weak, irregular cry scores 1 for respiratory effort. Some flexion scores 1 for tone. A grimace scores 1 for reflex irritability. A pink body with blue hands and feet scores 1 for color. The total is 6.",
      refs: ["Apgar heart rate scoring: absent 0, under 100/minute 1, 100/minute or more 2."],
      sources: [APGAR, PERRY],
    }),
    kind: "mc",
    options: [
      { text: "4", why: "A score of 4 undercounts the heart rate and one other sign." },
      { text: "5", why: "A score of 5 scores the heart rate of 110/minute as 1. Over 100/minute scores 2." },
      { text: "6", why: "Heart rate scores 2 and each of the other four signs scores 1." },
      { text: "7", why: "A score of 7 counts color as fully pink. Blue hands and feet score 1." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-16", {
      topic: "Newborn weight trend",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A term newborn weighed 3500 g at birth and is exclusively breastfed. The nurse reviews the flow sheet at the day 5 visit. Based on the trend, which conclusion is accurate?",
      tabs: [
        {
          title: "Newborn Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3", "Day 5"],
            rows: [
              ["Weight (g)", "3390", "3290", "3220", "3300"],
              ["Breastfeeds per 24 hours", "8", "9", "10", "10"],
              ["Wet diapers per 24 hours", "2", "3", "4", "6"],
            ],
          },
        },
      ],
      rationale:
        "The weight falls to a low of 3220 g on day 3 and rises to 3300 g by day 5. That loss is under 10% of the 3500 g birth weight. Feeds rise to 10 per 24 hours and wet diapers rise to 6. Rising output and a weight that has turned upward show that feeding is well established.",
      refs: ["Term newborns often lose up to 7 to 10% of birth weight in the first days and regain birth weight by 10 to 14 days."],
      sources: [WEIGHT_LOSS, PERRY],
    }),
    kind: "mc",
    options: [
      { text: "Expected weight loss with feeding going well", why: "The loss stays under 10% and weight and wet diapers are rising by day 5." },
      { text: "Excess weight loss that needs formula", why: "The lowest weight, 3220 g, is under 10% below birth weight. Supplements are not indicated." },
      { text: "Dehydration from poor milk intake", why: "Wet diapers rise to 6 by day 5, which shows good intake." },
      { text: "Failure to regain weight that needs referral", why: "Weight is already rising by day 5. Birth weight is usually regained by 10 to 14 days." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s09-17", {
      topic: "Umbilical cord care at home",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A parent asks how to care for the umbilical cord stump of a 2-day-old term newborn who is going home today. Which instruction should the nurse give?",
      rationale:
        "Dry cord care is advised for term newborns in high-resource settings. The stump is kept clean, dry and open to air, with the diaper folded below it. Alcohol does not lower infection and may delay separation. A snug cover traps moisture. Tub baths wait until the stump falls off.",
      sources: [CORD, PERRY],
    }),
    kind: "mc",
    options: [
      { text: "Wipe the stump with alcohol at each change", why: "Alcohol does not lower infection rates and may delay separation." },
      { text: "Cover the stump with a snug bandage", why: "A cover traps moisture and can raise the risk of infection." },
      { text: "Give a tub bath each day until it falls off", why: "Soaking keeps the stump moist. Sponge baths are used until it separates." },
      { text: "Keep the stump clean, dry and open to air", why: "Dry cord care helps the stump dry and separate. The diaper folds below it." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s09-18", {
      topic: "Newborn admission findings",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the admission note of a term newborn born 6 hours ago by vaginal birth. Click to highlight the findings that need follow-up.",
      rationale:
        "Jaundice in the first 24 hours is not physiologic and needs a bilirubin level. A respiratory rate of 74/minute with nasal flaring shows respiratory distress. A temperature of 36.1°C is below the normal range and raises oxygen and glucose use. Blue hands and feet, milia, a sacral blue gray patch and molding are expected.",
      refs: [
        "Newborn respiratory rate is normally 30 to 60/minute.",
        "Newborn axillary temperature is normally 36.5 to 37.5°C.",
        "Jaundice in the first 24 hours after birth needs evaluation.",
      ],
      sources: [BILI, PERRY],
    }),
    kind: "highlight",
    passage:
      "[[Hands and feet bluish, trunk pink.]] [[Yellow tint to the skin of the face and chest.]] [[Small white papules on the nose.]] [[Respiratory rate 74/minute]] with [[nasal flaring]]. [[Blue gray patch over the sacrum.]] [[Head elongated from molding.]] [[Temperature 36.1°C (97.0°F).]]",
    spans: [
      { text: "Hands and feet bluish, trunk pink.", why: "Acrocyanosis is expected in the first days of life." },
      { text: "Yellow tint to the skin of the face and chest.", why: "Jaundice at 6 hours of age needs a bilirubin level." },
      { text: "Small white papules on the nose.", why: "Milia are blocked sebaceous glands. They are expected and fade." },
      { text: "Respiratory rate 74/minute", why: "A rate of 74/minute is above the normal newborn range." },
      { text: "nasal flaring", why: "Nasal flaring is a sign of respiratory distress." },
      { text: "Blue gray patch over the sacrum.", why: "Dermal melanocytosis is a benign, expected finding." },
      { text: "Head elongated from molding.", why: "Molding after vaginal birth is expected and resolves in days." },
      { text: "Temperature 36.1°C (97.0°F).", why: "A temperature below 36.5°C is cold stress and needs warming." },
    ],
    correct: [1, 3, 4, 7],
  },
  {
    ...meta("rn-s09-19", {
      topic: "Safe infant sleep teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse reviews safe sleep with the parents of a 3-week-old infant at a clinic visit. Which statement by a parent shows a need for further teaching?",
      rationale:
        "Bumper pads add a risk of suffocation and entrapment. The crib should hold only a firm, flat mattress and a fitted sheet. Back sleeping, sharing a room without sharing a bed, and a pacifier at sleep time all lower the risk of sleep-related death.",
      sources: [SAFE_SLEEP],
    }),
    kind: "mc",
    options: [
      { text: "\"We will put the baby to sleep on the back.\"", why: "Back sleeping lowers the risk of sleep-related death." },
      { text: "\"We will put bumper pads in the crib.\"", why: "Bumper pads add a suffocation risk. The parent needs more teaching." },
      { text: "\"We will keep the crib in our room.\"", why: "Room sharing without bed sharing lowers the risk of sleep-related death." },
      { text: "\"We will offer a pacifier at nap time.\"", why: "A pacifier at sleep time is linked to a lower risk of sudden infant death." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-20", {
      topic: "Mood change 3 days after birth",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client who gave birth 3 days ago cries often and says she feels overwhelmed. She sleeps when the baby sleeps, eats well and cares for the baby. She denies thoughts of harming herself or the baby. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Tearfulness and feeling overwhelmed that start in the first days after birth fit postpartum blues. She is sleeping, eating and caring for the baby, so her function is intact. The blues usually resolve within 2 weeks. Symptoms that last longer or impair function point to depression. Psychosis brings confusion, hallucinations or delusions.",
      refs: ["Postpartum blues start in the first days after birth and usually resolve within 2 weeks."],
      sources: [PERINATAL_MH, LOWDERMILK],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The client's findings are most consistent with {0}, which usually resolves within {1}.",
    blanks: [
      {
        options: [
          { text: "postpartum depression", why: "Depression lasts beyond 2 weeks or impairs function. Her function is intact." },
          { text: "postpartum blues", why: "Crying and feeling overwhelmed in the first days with intact function fit the blues." },
          { text: "postpartum psychosis", why: "Psychosis brings hallucinations, delusions or confusion. None are described." },
          { text: "panic disorder", why: "Panic disorder brings sudden attacks of fear with physical symptoms. None are described." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "2 days", why: "The blues often peak around days 3 to 5. They do not resolve in 2 days." },
          { text: "2 weeks", why: "The blues usually resolve within 2 weeks of birth." },
          { text: "6 months", why: "Symptoms lasting months suggest depression rather than the blues." },
          { text: "1 year", why: "Symptoms lasting a year are not the blues and need assessment for depression." },
        ],
        correct: 1,
      },
    ],
  },
];
