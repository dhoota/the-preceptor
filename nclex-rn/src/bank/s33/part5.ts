import type { Item } from "@/engine/types";
import { DSM, HALTER, HINDU_QLD, HOCKENBERRY, MUSIC_PAIN, NCI_AROMA, PC6, POTTER, SIKH_BRADFORD, SLOW_BREATH, TICS, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s33-41", {
      need: "PSY",
      topic: "Classroom response to tics",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "A 9-year-old with Tourette syndrome has eye blinking and throat clearing in class. The teacher asks the school nurse how to respond when the tics happen. Which advice should the nurse give?",
      rationale:
        "Tics are not under the child's full control. Attention to them raises stress, and stress tends to make tics worse. Responding to the child as usual lowers stress and stigma. Teaching staff and classmates about tics is part of care. Telling the child to stop, isolating the child or having peers point out tics adds shame and does not reduce the tics.",
      sources: [TICS, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Remind the child to stop each time a tic occurs", why: "Reminders draw attention to tics and raise stress, which can worsen them." },
      { text: "Respond to the child as usual and ignore the tics", why: "Calm, usual responses lower stress and stigma for the child." },
      { text: "Seat the child alone at the back of the room", why: "Isolation adds stigma and does not reduce tics." },
      { text: "Ask classmates to point out tics when they occur", why: "Peer attention shames the child and adds stress." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-42", {
      need: "PSY",
      topic: "Telling Tourette syndrome from other tic disorders",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "An 11-year-old has had eye blinking and shoulder shrugging since age 9. Throat clearing and sniffing began 18 months ago. The tics come and go in severity. The child says an urge builds before each tic and eases afterward. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The child has more than one motor tic, blinking and shrugging, and vocal tics, throat clearing and sniffing. Both kinds have been present for more than 1 year, and onset was before age 18. This fits Tourette syndrome. A provisional tic disorder lasts less than 1 year. Persistent motor tic disorder has motor tics only. The urge before each tic is typical of tics, and the stem gives no obsessions.",
      refs: ["Tourette syndrome requires multiple motor tics and at least one vocal tic, present for more than 1 year, with onset before age 18."],
      sources: [DSM, TICS],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The findings fit {0}, because motor and vocal tics have been present for {1}.",
    blanks: [
      {
        options: [
          { text: "provisional tic disorder", why: "A provisional tic disorder lasts less than 1 year. These tics have lasted longer." },
          { text: "persistent motor tic disorder", why: "This child has vocal tics as well as motor tics." },
          { text: "Tourette syndrome", why: "Multiple motor tics and vocal tics for more than 1 year fit Tourette syndrome." },
          { text: "obsessive-compulsive disorder", why: "The urge before a tic is typical of tics. The stem gives no obsessions." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "less than 1 year", why: "Vocal tics began 18 months ago, which is more than 1 year." },
          { text: "more than 1 year", why: "Motor tics began at age 9 and vocal tics 18 months ago." },
          { text: "only the past month", why: "The tics started years and months ago, not in the past month." },
          { text: "only during sleep", why: "The stem describes tics while awake with an urge beforehand." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s33-43", {
      need: "PSY",
      topic: "A child who does not speak at kindergarten",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 5-year-old with selective mutism talks freely at home but has not spoken at kindergarten for 4 months. The child visits the school nurse with a scraped knee. Which approach by the nurse is best?",
      rationale:
        "Selective mutism is an anxiety-based failure to speak in some settings. Pressure to speak raises the anxiety that keeps the child silent. Accepting pointing, nodding or drawing lets the child communicate now while speech is built up in small steps. Making recess depend on speech, waiting in silence for an answer or ignoring the child all add pressure or rejection.",
      sources: [DSM, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Let the child point or nod without pressing for words", why: "Nonverbal answers lower anxiety and let the child take part." },
      { text: "Wait in silence until the child answers out loud", why: "A silent wait adds pressure and raises anxiety." },
      { text: "Say that recess comes once the child speaks", why: "Making activities depend on speech is coercive and raises anxiety." },
      { text: "Treat the knee without speaking to the child", why: "Ignoring the child feels like rejection and misses a chance to connect." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-44", {
      need: "PSY",
      topic: "Rites for a dying Hindu client",
      cjmm: "action",
      process: "culture",
      difficulty: 3,
      stem: "An 82-year-old Hindu client is close to death on a medical unit. A sacred thread is tied around the client's wrist. The family asks for a priest and wants to stay at the bedside. Which actions by the nurse support the family's practices? Select all that apply.",
      rationale:
        "Many Hindu families wish for a priest to place drops of Ganges water or a tulsi leaf in the dying person's mouth. Prayers and chanting may be recited or played. Sacred threads and religious items stay in place. Close family members often wash the body after death, so the nurse asks before starting care. Removing the thread, limiting family or washing the body first override these practices.",
      sources: [HINDU_QLD],
    }),
    kind: "sata",
    options: [
      { text: "Cut off the sacred thread before care after death", why: "Sacred threads and religious items are left in place." },
      { text: "Allow the priest to place Ganges water in the mouth", why: "Drops of Ganges water in the mouth are a common rite near death." },
      { text: "Limit the family to two visitors at a time", why: "Family presence at the bedside is central near death." },
      { text: "Let the family play recorded prayers", why: "Hearing chants and prayers can bring comfort at the end of life." },
      { text: "Wash the body before the family can be asked", why: "Close family members often wash the body themselves." },
      { text: "Ask the family who will wash the body", why: "Asking first respects the family's role in care after death." },
      { text: "Leave the sacred thread on the wrist", why: "Religious items are kept on the body where possible." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s33-45", {
      need: "PSY",
      topic: "Care after death for a Sikh client",
      cjmm: "action",
      process: "culture",
      difficulty: 4,
      stem: "A 70-year-old Sikh man has died on a surgical unit. He wears a turban and a steel bracelet, and he has a full beard. His family is on the way to the hospital. Which action should the nurse take when preparing the body?",
      rationale:
        "For many Sikhs the articles of faith stay with the body after death, and the hair and beard are not trimmed or cut. The body stays covered on the unit until the family arrives. Handling by staff of the same gender is preferred. Trimming the beard for a tidy look, removing the bracelet or sending the body to the morgue before the family arrives goes against these practices.",
      sources: [SIKH_BRADFORD],
    }),
    kind: "mc",
    options: [
      { text: "Trim the beard so the face looks tidy for viewing", why: "Hair and beard are left uncut after death." },
      { text: "Remove the steel bracelet and store it for the family", why: "Articles of faith stay on the body and are not removed." },
      { text: "Leave the turban, bracelet and hair as they are", why: "Articles of faith and uncut hair are kept intact after death." },
      { text: "Move the body to the morgue before the family arrives", why: "The body stays on the unit until the family arrives." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s33-46", {
      need: "BCC",
      topic: "Safe use of essential oils on a unit",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 55-year-old client receiving chemotherapy asks to use lavender essential oil to help with anxiety. The facility allows aromatherapy. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Essential oils are used by inhalation or diluted in a carrier oil for the skin. Asking about allergies and checking the skin catch reactions, which occur mostly with topical use. Some people find a scent unpleasant, so the client's response guides use. Undiluted oil on the skin raises irritation risk. Oils are not swallowed in large amounts. Citrus oils on the skin before sun exposure can cause a phototoxic reaction.",
      sources: [NCI_AROMA],
    }),
    kind: "sata",
    options: [
      { text: "Ask about allergies before starting", why: "Allergic reactions to essential oils can occur." },
      { text: "Rub undiluted oil onto the client's temples", why: "Undiluted oil on the skin raises the risk of irritation." },
      { text: "Offer the oil by inhalation on a cotton pad", why: "Inhalation is a common, low-risk way to use aromatherapy." },
      { text: "Add the oil to water for the client to drink", why: "Swallowing large amounts of essential oil is not recommended, and oral use is uncommon." },
      { text: "Mix the oil into a carrier oil for massage", why: "Topical use calls for a diluted oil." },
      { text: "Stop if the client finds the scent unpleasant", why: "A disliked scent can raise distress instead of easing it." },
      { text: "Apply a citrus oil before a walk in the sun", why: "Citrus oils on the skin before sun exposure can cause a phototoxic reaction." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s33-47", {
      need: "BCC",
      topic: "Music as an add-on for pain",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 48-year-old client is on day 1 after abdominal surgery and rates incision pain 6 on a 0 to 10 scale. Oral oxycodone is prescribed for pain. The client asks about listening to music. Which plan should the nurse make?",
      rationale:
        "Music lowered pain scores, distress and opioid use in a large meta-analysis of trials in medical settings. It works as a complement to drug therapy, not a replacement. Offering music the client enjoys alongside the prescribed analgesic fits this. Using music instead of the analgesic leaves pain of 6 undertreated. Loud music can harm hearing and add stress. Waiting until pain is severe misses the chance to prevent it.",
      sources: [MUSIC_PAIN],
    }),
    kind: "mc",
    options: [
      { text: "Use music in place of the next oxycodone dose", why: "Music complements analgesia and does not replace it for pain of 6." },
      { text: "Play music loudly to drown out the pain", why: "High volume can harm hearing and add stress." },
      { text: "Save music for when pain reaches 10 of 10", why: "Waiting for severe pain misses the chance to use music early." },
      { text: "Offer music the client enjoys with the oxycodone", why: "Music added to analgesia lowers pain and distress." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-48", {
      need: "BCC",
      topic: "Placing a wrist acupressure point",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 34-year-old client had laparoscopic surgery this morning and reports nausea. The client asks to try acupressure along with the prescribed antiemetic. Where should the nurse apply pressure?",
      rationale:
        "The point used for nausea, called PC6, sits on the inner forearm a short distance above the wrist crease, between the two central tendons. Stimulating it lowered nausea and vomiting after surgery compared with sham treatment. The palm, the back of the wrist and the base of the thumb are not this point.",
      sources: [PC6],
    }),
    kind: "mc",
    options: [
      { text: "The center of the palm, below the middle finger", why: "The palm is not the point studied for nausea." },
      { text: "Inner forearm above the wrist crease, between tendons", why: "This is the PC6 point that eased nausea and vomiting after surgery." },
      { text: "The back of the wrist, over the wrist bones", why: "The nausea point is on the inner side of the forearm." },
      { text: "The fleshy pad at the base of the thumb", why: "The base of the thumb is not the point used for nausea." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-49", {
      need: "BCC",
      topic: "Slow breathing during a burn dressing change",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 30-year-old client with a partial-thickness burn of the forearm dreads daily dressing changes. The prescribed analgesic was given 30 minutes ago. The nurse teaches slow, paced breathing to use during the change. Place the steps in order.",
      rationale:
        "A comfortable position lets the chest and abdomen move freely. The client breathes in slowly through the nose for a count of 5. The client then breathes out slowly through pursed lips for a count of 5. The cycle repeats throughout the dressing change. Trials suggest slow deep breathing may ease acute pain, most clearly burn pain, though the evidence is weak. Holding the breath and fast, shallow breathing raise tension.",
      sources: [SLOW_BREATH, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Breathe out slowly through pursed lips for a count of 5", why: "A slow exhale follows the slow inhale." },
      { text: "Settle into a comfortable position", why: "A relaxed position comes first so breathing can be slow and deep." },
      { text: "Hold the breath at the most painful moment", why: "Breath holding raises muscle tension and is not part of the technique." },
      { text: "Repeat the cycle throughout the dressing change", why: "Repeating the cycle keeps the relaxation going during the procedure." },
      { text: "Breathe in slowly through the nose for a count of 5", why: "A slow inhale follows positioning and starts each cycle." },
      { text: "Switch to fast, shallow breaths when pain peaks", why: "Rapid shallow breathing raises tension and can cause light-headedness." },
    ],
    correct: [1, 4, 0, 3],
  },
  {
    ...meta("rn-s33-50", {
      need: "BCC",
      topic: "Hygiene help in severe depression",
      cjmm: "generate",
      process: "caring",
      difficulty: 2,
      stem: "A 45-year-old client with severe depression has not showered or changed clothes in 6 days. The client says, \"I can't see the point, and it is too much.\" Which measures should the nurse include in the plan? Select all that apply.",
      rationale:
        "Severe depression drains energy and makes decisions feel hard. Breaking hygiene into small steps makes each part manageable. A set time each day builds routine. A choice of two shirts keeps decisions simple. The nurse helps with what the client cannot yet do and encourages what the client can, so self-care returns. Waiting for the client to ask, doing all of it or giving a long list adds to the problem.",
      sources: [HALTER],
    }),
    kind: "sata",
    options: [
      { text: "Wait until the client asks for help", why: "Low energy and hopelessness mean the client may not ask." },
      { text: "Break hygiene into small, simple steps", why: "Small steps make care manageable with low energy." },
      { text: "Do all hygiene care for the client", why: "Full care removes the chance to rebuild self-care." },
      { text: "Offer a choice between two shirts", why: "A limited choice keeps decisions simple." },
      { text: "Give a full list of tasks for the day", why: "A long list overwhelms a client with severe depression." },
      { text: "Set a regular time each day for hygiene", why: "A routine reduces the effort of starting." },
      { text: "Help with the steps the client cannot yet do", why: "Partial help meets the need while self-care returns." },
    ],
    correct: [1, 3, 5, 6],
  },
];
