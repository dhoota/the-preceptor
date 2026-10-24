// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const TOPIC = "lacerations";

const S = {
  iadt: { id: "iadt-2020-fractures", citation: "Bourguignon C, Cohenca N, Lauridsen E, and colleagues. International Association of Dental Traumatology guidelines for the management of traumatic dental injuries: 1. Fractures and luxations. Dent Traumatol. 2020.", url: "https://doi.org/10.1111/edt.12578" },
  forsch: { id: "forsch-laceration-repair", citation: "Forsch RT, Little SH, Williams C. Laceration repair: a practical approach. Am Fam Physician. 2017.", url: "https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html" },
  cigTet: { id: "cig-tetanus", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Tetanus toxoid. Tetanus prophylaxis in wound management. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html" },
  hennelly: { id: "hennelly-palate", citation: "Hennelly K, Kimia A, Lee L, Jones D, Porter SC. Incidence of morbidity from penetrating palate trauma. Pediatrics. 2010.", url: "https://profiles.wustl.edu/en/publications/incidence-of-morbidity-from-penetrating-palate-trauma/" },
  sgem: { id: "sgem-429-oropharyngeal", citation: "Ren D, Espinel A. SGEM 429: CT angiography for pediatric oropharyngeal trauma, a review of Curry SD and colleagues, Laryngoscope 2023. The Skeptics' Guide to Emergency Medicine. 2024.", url: "https://thesgem.com/2024/02/sgem-429-its-ct-angio-hi-im-the-problem-its-me-for-pediatric-oropharyngeal-trauma/" },
  steen: { id: "steen-dog-bite-cranial", citation: "Steen T, Ravin K, Timmons S, Kershenovich A. Intracranial injuries from dog bites in children. Pediatr Neurosurg. 2015.", url: "https://pure.psu.edu/en/publications/intracranial-injuries-from-dog-bites-in-children/" },
  tahir: { id: "tahir-cranial-dog-bite", citation: "Tahir SA, Carver KZ, Cappitelli A, Baird L, Marchese A, Ganske IM. Pediatric cranial dog bite injuries: more than meets the eye. Clin Pract Cases Emerg Med. 2022.", url: "https://westjem.com/articles/pediatric-cranial-dog-bite-injuries-more-than-meets-the-eye.html" },
  simonet: { id: "simonet-boot-top", citation: "Simonet WT, Sim L. Boot-top tendon lacerations in ice hockey. J Trauma. 1995." },
  christman: { id: "christman-tibialis-anterior", citation: "Christman-Skieller C, Merz MK, Tansey JP. A systematic review of tibialis anterior tendon rupture treatments and outcomes. Am J Orthop. 2015.", url: "https://cdn.mdedge.com/files/s3fs-public/issues/articles/ajo044e094.pdf" },
  palmisano: { id: "statpearls-deep-peroneal", citation: "Palmisano LL, Launico MV. Anatomy, bony pelvis and lower limb: calf deep peroneal nerve (deep fibular nerve). StatPearls. 2025." },
  white: { id: "white-seal-finger", citation: "White CP, Jewer DD. Seal finger: a case report and review of the literature. Can J Plast Surg. 2009.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2827281/" },
  sips: { id: "sips-seal-finger", citation: "Sips GJ, Bakashvili N, Broens EM, Schurink CAM. Seal finger following a photography incident. IDCases. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8056412/" },
  clark: { id: "clark-hand-infections", citation: "Clark DC. Common acute hand infections. Am Fam Physician. 2003.", url: "https://www.aafp.org/pubs/afp/issues/2003/1201/p2167.html" },
} satisfies Record<string, Source>;

export const LACERATIONS_S74: Samp[] = [
  /* 39 Lip wound with a missing piece of tooth ------------------------------ */
  {
    ...META,
    id: "lacerations-39",
    topic: TOPIC,
    title: "Skateboard fall onto the mouth",
    stem:
      "You are working in a community hospital emergency department. A 16-year-old boy presents 90 minutes after he fell forward off his skateboard onto a paved road and struck his mouth. He wore a helmet and did not lose consciousness. He is healthy and takes no medications. He completed his childhood vaccines and received the school Tdap booster at age 14.\n\nThere is a 2 cm vertical laceration of the left lower lip that runs from the skin across the vermilion border and through to the inner mucosa. The edges are clean. The incisal corner of his upper left central incisor is missing, and he does not know where the piece went. His jaw and cheekbones are not tender, and his teeth meet normally.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "124/72 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of this injury is most important to clarify before the lip is repaired?",
        options: ["Location of the missing tooth", "Speed of the skateboard at impact", "Time of his last meal", "Type of helmet he wore", "Whether friends saw the fall"],
        correct: 0,
        explanation:
          "A piece of tooth is missing beside a lip wound that goes right through, so the piece may be buried in the lip. Dental trauma guidance says a missing fragment must be accounted for, and a fragment closed inside the lip can lead to infection and poor healing. The speed of the fall and the type of helmet do not change how this lip is explored or closed. The time of his last meal matters only if procedural sedation is planned, which a calm 16-year-old with a 2 cm lip wound does not need. Witnesses add little, because he did not lose consciousness.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "iadt-2020-fractures",
      },
      {
        id: "q2",
        kind: "single",
        update: "He has had no coughing or choking since the fall, and his chest is clear. The lower lip is swollen.",
        prompt: "Which of the following is the most appropriate investigation before this lip wound is closed?",
        options: ["Chest radiograph, two views", "CT of the facial bones", "Facial bone radiograph series", "Panoramic dental radiograph", "Soft tissue film of the lip"],
        correct: 4,
        explanation:
          "When a tooth fragment is missing and the lip is cut, the International Association of Dental Traumatology advises radiographs of the lip to search for tooth fragments and foreign material. A soft tissue film of the lip shows a radiopaque piece of enamel in the swollen lip before it is sealed in by the repair. A panoramic film images the teeth and jaws, not the lip. A facial bone series and CT of the facial bones look for fractures, and his jaw and cheekbones are not tender with a normal bite, so they add radiation without answering the question. With no coughing or choking and a clear chest, a chest radiograph is not the first test.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "iadt-2020-fractures",
      },
      {
        id: "q3",
        kind: "single",
        update: "The lip wound is explored, irrigated and prepared for repair.",
        prompt: "Which of the following is the most appropriate tetanus prophylaxis for him at this visit?",
        options: ["Td vaccine IM now", "Tdap and immune globulin", "Tdap vaccine IM now", "Tetanus immune globulin", "No tetanus prophylaxis"],
        correct: 4,
        explanation:
          "He has had at least 3 doses of tetanus vaccine, and his last booster was the Tdap at age 14, 2 years ago. The Canadian Immunization Guide gives no vaccine and no immune globulin when the last booster was less than 5 years ago, even for a wound that is not clean and minor, such as one made on a road. A Td or Tdap booster would be due only if 5 years or more had passed since his last dose for a wound of this kind. Tetanus immune globulin, alone or with vaccine, is for people with fewer than 3 doses or an unknown history, and he has a complete record.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "cig-tetanus",
      },
      {
        id: "q4",
        kind: "single",
        update: "You close the mucosa and the muscle with absorbable sutures. You now close the skin.",
        prompt: "Which of the following is the most appropriate location for the first skin suture in this lip repair?",
        options: ["At the lower end of the wound", "At the midpoint of the skin wound", "At the vermilion border", "At the wet and dry mucosa line", "In the deepest part of the wound"],
        correct: 2,
        explanation:
          "The cosmetic result of a lip repair depends on lining up the vermilion border, so the first skin suture goes exactly at that border, and the rest of the skin is then closed with fine nylon. Even a small step in this line shows. Placing the first suture at the lower end or the midpoint of the wound leaves the border to fall where it may, and a mismatch is then hard to correct. The wet and dry line inside the red lip also needs to match, but it is aligned after the border. The deepest part of the wound has already been closed with absorbable sutures, and the question is about the skin.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "forsch-laceration-repair",
      },
    ],
    sources: [S.iadt, S.cigTet, S.forsch],
  },

  /* 40 Toddler with a soft palate wound ------------------------------------- */
  {
    ...META,
    id: "lacerations-40",
    topic: TOPIC,
    title: "Toddler who fell in the hallway",
    stem:
      "A 3-year-old boy is brought to the emergency department by his father 40 minutes after a fall at home. His father heard him fall in the hallway and found him crying, with blood coming from his mouth. He cried at once and did not lose consciousness. The bleeding stopped on the way in. He is healthy and fully immunized.\n\nHe is alert, sitting on his father's lap and talking in short sentences. He drools a little and will not open his mouth wide for the examination. His face and neck look normal.",
    vitals: { temperature: "36.9°C tympanic", pulse: "118/minute", resp: "24/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions is most important to ask his father about how this injury happened?",
        options: ["What he had in his mouth", "When he last ate or drank", "Whether he has a sore throat", "Whether he has had a fever", "Who was watching him at the time"],
        correct: 0,
        explanation:
          "Blood from the mouth after a fall in a toddler raises an impalement by an object he was carrying in his mouth, such as a toothbrush, pen or stick. The object and its length decide how deep the injury could go, because a palatal or pharyngeal wound can reach toward the internal carotid artery, which is the injury that leads to stroke. Fasting time matters only if sedation is later needed. A sore throat or a fever before the fall does not change the risk from this wound. Who was supervising him is a fair prevention question, but it does not identify a deep injury.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "hennelly-palate",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "There is a 1 cm laceration of the soft palate just left of the midline, with no flap and no active bleeding.",
        prompt: "Which of the following findings, if present, would most support CT angiography of the neck in this child?",
        options: ["Crepitus in the neck", "Drooling of saliva", "Heavy bleeding that recurs", "Mild pain on swallowing", "New weakness of one arm", "Refusal to eat solid food", "Small streak of blood in saliva", "Temperature of 37.8°C"],
        correct: [0, 2, 4],
        explanation:
          "A systematic review of CT angiography in children with oropharyngeal trauma found that it rarely changed management, so it is kept for specific findings: profuse bleeding, a change in neurological status and crepitus in the neck. New weakness of one arm may mean a dissection or clot of the internal carotid artery. Heavy recurrent bleeding may come from a vessel. Crepitus means air has tracked into the deep spaces of the neck. Drooling, mild pain on swallowing, refusing solid food, a small streak of blood in saliva and a low-grade temperature are expected after a palatal wound and do not by themselves point to a vascular injury.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "sgem-429-oropharyngeal",
      },
      {
        id: "q3",
        kind: "single",
        update: "He remains alert and well, with no further bleeding. The examination is otherwise unchanged. He drinks apple juice without coughing.",
        prompt: "Which of the following is the most appropriate management of this child and his palate wound?",
        options: ["Admission for 48 hours of observation", "CT angiography of the neck today", "Discharge home with return advice", "Repair under procedural sedation", "Suture repair under local anaesthetic"],
        correct: 2,
        explanation:
          "He is well, his examination is unchanged and the wound is 1 cm with no flap. In a cohort of well-appearing children with palate lacerations and normal neurological examinations, none of the 122 followed for at least a week had a stroke, and 1 of 116 had an infection. CT angiography was positive in 10% of those scanned, yet none needed surgery or anticoagulation, so routine CT angiography adds radiation without changing care. A small palatal wound without a flap heals without sutures, so repair under local anaesthetic or sedation is not needed. Admission for 48 hours of observation is not supported for a child this low risk.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "hennelly-palate",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following new findings over the next week would most suggest a complication of his palate wound?",
        options: ["Fussiness at bedtime", "Mild pain when he swallows", "Pink-tinged saliva on day one", "Preference for soft foods", "Swelling of the neck with fever"],
        correct: 4,
        explanation:
          "Neck swelling with fever after a palatal wound suggests a deep neck infection or abscess from bacteria carried in from the mouth, which needs urgent assessment and imaging. Infection after palatal trauma is uncommon, about 1% in the cohort study, so most children go home with clear advice on when to return. His parents should also return at once for weakness, a change in speech or drowsiness, which can signal a delayed carotid injury. Mild pain on swallowing, a preference for soft foods, pink-tinged saliva on the first day and fussiness at bedtime are expected while the wound heals.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "hennelly-palate",
      },
    ],
    sources: [S.hennelly, S.sgem],
  },

  /* 41 Large dog bite to an infant's head ----------------------------------- */
  {
    ...META,
    id: "lacerations-41",
    topic: TOPIC,
    alsoTopics: ["multiple-trauma"],
    title: "Toddler and a large farm dog",
    stem:
      "You are working in a rural hospital emergency department in Saskatchewan. The hospital has a CT scanner. The nearest neurosurgeon is 2 hours away by road. A 14-month-old girl is brought in by her parents 1 hour after the family's 45 kg farm dog bit her on the head as she crawled toward its food bowl. The dog is healthy and vaccinated against rabies. She cried at once and has not vomited. She is healthy and fully immunized for her age.\n\nShe is crying but consolable and reaches for her mother. There are two 4 mm puncture wounds over the right parietal scalp, 5 cm apart, with a little oozing. The anterior fontanelle is soft and flat. She moves all four limbs equally.",
    vitals: { temperature: "37.1°C rectal", pulse: "136/minute", resp: "30/minute", o2sat: "99% on room air", weight: "10 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of this bite most raises concern for an injury beneath her scalp?",
        options: ["Dog's rabies vaccine status", "Her age and the dog's size", "Reason the dog bit", "Time since the bite", "Whether she cried at once"],
        correct: 1,
        explanation:
          "Infants and toddlers have large heads and thin skulls, and the jaws of a large dog can crush or pierce the skull through punctures that look small on the scalp. A series of children with penetrating skull injuries from dog bites found that these wounds can look minor while a fracture or brain injury lies beneath. The dog's rabies status guides rabies prophylaxis, not depth. Why the dog bit does not change how deep the teeth went. One hour since the bite bears on infection and closure, not on depth. Crying at once is reassuring about consciousness but does not exclude a skull injury.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "steen-dog-bite-cranial",
      },
      {
        id: "q2",
        kind: "menu",
        select: 1,
        prompt: "Which of the following examination findings, if present, would exclude penetration of the skull beneath these puncture wounds?",
        options: ["Absence of a palpable bony step", "Equal movement of all four limbs", "Normal alertness and interaction", "Normal pupils and eye movements", "Soft and flat anterior fontanelle", "None"],
        correct: [5],
        explanation:
          "No bedside finding excludes skull penetration in a child this age. The infant skull is thin, a greenstick or depressed fracture may not be felt through a swollen scalp, and a reported 6-month-old with small scalp wounds after a dog bite had a depressed frontal fracture with brain contusions beneath them. Normal alertness, equal limb movement, normal pupils and eye movements and a soft fontanelle show that she has no large mass lesion or raised pressure now, but a penetrating fracture with a small contusion can coexist with all of them. So the absence of a palpable step cannot be relied on.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tahir-cranial-dog-bite",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation before her scalp wounds are closed?",
        options: ["CT of the head", "MRI of the brain", "Observation for 6 hours", "Skull radiograph series", "Ultrasound of the scalp"],
        correct: 0,
        explanation:
          "A series of children with intracranial injuries from dog bites recommends head CT for every child bitten on the head, because the wounds understate the injury. CT, read on bone and brain windows, shows a depressed or penetrating fracture, air or bone fragments inside the skull and any bleeding in the brain. A skull radiograph series can show some fractures but cannot show the brain. Ultrasound of the scalp may show a break in the bone but not the brain beneath it. MRI is slow, usually needs sedation at this age and shows bone poorly. Observation alone delays the diagnosis of an open skull fracture.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "steen-dog-bite-cranial",
      },
      {
        id: "q4",
        kind: "single",
        update: "Imaging shows a depressed right parietal skull fracture beneath one puncture, with a small bubble of air inside the skull. She remains alert.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Close the punctures and admit locally", "IV antibiotics and neurosurgery transfer", "Oral amoxicillin-clavulanate and recheck", "Repeat CT of the head in 24 hours", "Scalp closure and neurosurgery clinic"],
        correct: 1,
        explanation:
          "Air inside the skull under a bite wound means the fracture is open to the mouth flora of the dog. The pediatric dog bite series recommends early broad-spectrum IV antibiotics, debridement and irrigation, and follow-up for late infection, and the reported infant was treated with neurosurgical washout and repair with IV antibiotics chosen to cover the brain and canine mouth organisms. She needs transfer to a neurosurgeon. Closing the punctures before washout traps bacteria over the fracture. Oral amoxicillin-clavulanate suits a low-risk bite, not an open skull fracture. Waiting 24 hours for a repeat CT delays treatment.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "tahir-cranial-dog-bite",
      },
    ],
    sources: [S.steen, S.tahir],
  },

  /* 42 Skate blade cut above the boot ---------------------------------------- */
  {
    ...META,
    id: "lacerations-42",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Cut during a hockey game",
    stem:
      "You are working in a community hospital emergency department in northern Ontario. A 15-year-old boy is brought in by his coach 1 hour after an opposing player's skate blade struck the front of his right ankle during a pileup in front of the net. His trainer removed the skate and held pressure. He is healthy and takes no medications.\n\nThere is a 1.5 cm transverse laceration on the front of the right ankle, 3 cm above the joint line, at the level of the top of the skate boot. Bleeding has stopped. He limped in with help from his coach. Lying on the stretcher, he can lift his foot upward.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "126/70 mmHg", o2sat: "99% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of this injury most raises concern for damage to deeper structures of the ankle?",
        options: ["Fall onto the ice surface", "One hour since the injury", "Pressure held by a trainer", "Sharp skate blade at speed", "Wound length of 1.5 cm"],
        correct: 3,
        explanation:
          "A moving skate blade is a heavy, very sharp edge, and cuts just above the boot top can divide the tibialis anterior, extensor hallucis longus and extensor digitorum longus tendons and the anterior tibial vessels and the deep peroneal nerve. A case series of these boot-top injuries in hockey found that the skin wound is often small and that the deeper injury is easily missed. So a 1.5 cm length is no reassurance. The fall onto the ice explains bruising, not a cut tendon. One hour since injury and the pressure held by the trainer bear on bleeding and infection, not on depth.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "simonet-boot-top",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings most suggests that his tibialis anterior tendon is cut?",
        options: ["Absent plantar flexion on calf squeeze", "Inability to flex the great toe", "Numbness over the lateral heel", "Weak resisted ankle dorsiflexion", "Weak resisted ankle eversion"],
        correct: 3,
        explanation:
          "The tibialis anterior is the main dorsiflexor of the ankle. When it is divided, the extensor hallucis longus and extensor digitorum longus can still lift the foot, so active dorsiflexion against gravity, as he shows, does not exclude the injury. Testing dorsiflexion against resistance, compared with the other side, reveals the weakness. Absent plantar flexion on calf squeeze tests the Achilles tendon. Flexion of the great toe is done by the flexor hallucis longus behind the ankle. Eversion is done by the peroneal muscles. The lateral heel is supplied by the sural nerve.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "christman-tibialis-anterior",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following sensory findings would best indicate a deep peroneal nerve injury from this wound?",
        options: ["Numbness of the big toe pad", "Numbness of the first web space", "Numbness of the heel pad", "Numbness of the lateral foot", "Numbness of the sole"],
        correct: 1,
        explanation:
          "The deep peroneal nerve runs down the front of the ankle beside the anterior tibial artery, close to where this wound lies. It supplies the muscles of the anterior compartment and gives skin sensation only to the first web space, between the great and second toes. The pad of the great toe, the sole and the heel pad are supplied by branches of the tibial nerve on the plantar side. The lateral foot is supplied by the sural nerve. Sensation should be tested in each of these areas before any local anaesthetic is given.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "statpearls-deep-peroneal",
      },
      {
        id: "q4",
        kind: "single",
        update: "Exploration shows a gap in the tibialis anterior tendon. Radiographs show no fracture or foreign body. The skin is irrigated and closed.",
        prompt: "Which of the following is the most appropriate plan for the tibialis anterior tendon injury?",
        options: ["Ankle brace without repair", "Early surgical repair", "Physiotherapy then review", "Repair after 6 weeks in a cast", "Review if foot drop appears"],
        correct: 1,
        explanation:
          "A divided tibialis anterior tendon in an active teenager needs early surgical repair, so he should be referred to orthopaedic surgery to be seen within days. The tendon ends retract, and a review of tibialis anterior ruptures notes that delay can make primary repair impossible and force a tendon graft. Left unrepaired, the injury leads to foot drop with a steppage gait, flatfoot and an Achilles contracture. A brace, physiotherapy or a cast without repair accepts that loss of function. Waiting for foot drop to appear wastes the window for direct repair.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "christman-tibialis-anterior",
      },
    ],
    sources: [S.simonet, S.christman, S.palmisano],
  },

  /* 43 Finger infection after the seal harvest ------------------------------ */
  {
    ...META,
    id: "lacerations-43",
    topic: TOPIC,
    alsoTopics: ["infectious-diseases"],
    title: "Painful finger in a coastal community",
    stem:
      "You are working in a community health centre in a coastal community in Labrador. Transfer to a hospital with a hand surgeon is by plane. A 44-year-old woman presents with a painful, swollen left index finger. Twelve days ago she nicked the side of the finger with her knife while skinning a harbour seal with her family. The cut healed over, but 4 days ago the finger became red, swollen and very painful, and it is now stiff. Two days ago the nurse started cephalexin 500 mg PO four times daily, and the finger has worsened. She is right handed, healthy and has no allergies.\n\nThe middle segment of the finger is red and swollen around a healed 5 mm scar, with no fluctuance. She holds the proximal interphalangeal (PIP) joint still because of pain.",
    vitals: { temperature: "37.4°C oral", pulse: "84/minute", resp: "16/minute", bp: "128/76 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history most changes the choice of antibiotic for this finger?",
        options: ["Cut on her non-dominant hand", "Finger held still from pain", "Pain that began 4 days ago", "Skinning of a harbour seal", "Twelve days since the cut"],
        correct: 3,
        explanation:
          "A cut while handling a seal points to seal finger, an infection carried from seals, linked to Mycoplasma, and known in Canadian sealers. Mycoplasma has no cell wall, so it does not respond to beta-lactam antibiotics, which fits her worsening on cephalexin. A tetracycline is needed instead. The non-dominant index finger is the usual site in hunters who cut themselves, and onset 7 to 15 days after the injury fits the disease, but neither of these changes the drug once the seal exposure is known. Holding the finger still from pain is common to many finger infections.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "white-seal-finger",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings would most indicate an infection of the flexor tendon sheath in this finger?",
        options: ["Fluctuance at the nail fold", "Lymph node tender in the axilla", "Pain along the sheath on passive extension", "Stiffness of the PIP joint at rest", "Warmth over the back of the hand"],
        correct: 2,
        explanation:
          "Pain along the flexor sheath when the finger is passively extended is one of the four Kanavel signs of flexor tenosynovitis and the most reproducible of them. The others are uniform swelling of the whole digit, a finger held in partial flexion and tenderness along the whole sheath. A sheath infection needs early hand surgery assessment. Fluctuance at the nail fold is a paronychia. A tender axillary node and a stiff PIP joint are both described in seal finger and do not single out the sheath. Warmth over the back of the hand is nonspecific in any hand infection.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "clark-hand-infections",
      },
      {
        id: "q3",
        kind: "single",
        update: "There are no signs of flexor sheath infection, and the swelling stops short of the palm. A radiograph of the finger is normal. Her pregnancy test is negative.",
        prompt: "Which of the following antibiotics is most appropriate for her now?",
        options: ["amoxicillin-clavulanate 875 mg PO twice daily", "cefazolin 2 g IV every 8 hours", "doxycycline 100 mg PO twice daily", "penicillin V 300 mg PO four times daily", "trimethoprim-sulfamethoxazole 160/800 mg PO twice daily"],
        correct: 2,
        explanation:
          "Seal finger fails beta-lactam antibiotics because the organism lacks a cell wall, and her finger has worsened on cephalexin. Tetracyclines are the drugs that work, and doxycycline 200 mg a day, given here as 100 mg twice daily, has been used with good results. Courses reported run from 2 to 6 weeks, and one deep wound needed 10 weeks. Amoxicillin-clavulanate, cefazolin and penicillin V are all beta-lactams and would fail as cephalexin did. A Canadian case review reports failures on penicillin, dicloxacillin and cephalexin. Trimethoprim-sulfamethoxazole is not among the drugs reported to treat this infection. Her negative pregnancy test allows a tetracycline.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "sips-seal-finger",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate follow-up plan for her finger?",
        options: ["Clinic visit in 2 weeks", "Follow-up only if fever develops", "Hand surgery clinic in 6 weeks", "Recheck at the health centre in 2 days", "Telephone call from the nurse in 1 week"],
        correct: 3,
        explanation:
          "She has already failed one antibiotic, and untreated or slowly treated seal finger can destroy the joint, leaving stiffness, ankylosis and sometimes amputation. A recheck in 2 days confirms that the swelling and pain are settling on the new drug, and it allows early transfer by plane if the finger worsens or signs of a sheath infection appear. A telephone call in a week or a clinic visit in 2 weeks is too late to catch a treatment failure. Waiting for a fever relies on a sign she has not shown even while worsening. A hand surgery visit in 6 weeks may be needed for stiffness but is not the first follow-up.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "white-seal-finger",
      },
    ],
    sources: [S.white, S.clark, S.sips],
  },
];
